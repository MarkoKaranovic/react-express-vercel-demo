const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const stripe = require('stripe')(
  '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',
  {
    apiVersion: '2020-08-27',
    appInfo: {
      // For sample support and debugging, not required for production:
      name: 'stripe-samples/checkout-one-time-payments',
      version: '0.0.1',
      url: 'https://github.com/stripe-samples/checkout-one-time-payments',
    },
  },
);

const https = require('https');
const http = require('http');
var skillsData = require('./skillsData.js');
var termsData = require('./termsSelectData.js');
// var termsData = require('./termsData.js')

app.set('port', process.env.PORT || 8081);

app.get('/api/skills', (req, res) => {
  try {
    const transformedSkills = skillsData.allSkills.map((primarySkill) => {
      primarySkill.totalCount = primarySkill.associated_terms.length;
      let associated_terms_sorted = primarySkill.associated_terms.sort(
        (a, b) => parseFloat(b.ratio) - parseFloat(a.ratio),
      );
      if (associated_terms_sorted.length > 10) {
        const indLessThan02 = associated_terms_sorted.findIndex((x) => parseFloat(x.ratio) <= 0.2);
        const cutOffIndex = indLessThan02 > 10 ? indLessThan02 : 10;
        associated_terms_sorted.splice(cutOffIndex);
      }

      primarySkill.associated_terms = associated_terms_sorted;
      primarySkill.showSecondary = false;
      return primarySkill;
    });
    //console.log("About to send all the skills");
    res.send({ primary_skills: transformedSkills });
  } catch (err) {
    var errMessage = `${err}`;
    processErrorResponse(res, 500, errMessage);
  }
});

app.get('/api/primarySkill/:skillName', (req, res) => {
  const { skillName } = req.params;
  try {
    const primarySkill = skillsData.allSkills.find((x) => x.primary_term.toLowerCase() === skillName.toLowerCase());
    if (!primarySkill) {
      throw `Primary skill ${skillName} was not found`;
    }
    let associated_terms_sorted = primarySkill.associated_terms.sort(
      (a, b) => parseFloat(b.ratio) - parseFloat(a.ratio),
    );
    primarySkill.associated_terms = associated_terms_sorted;
    res.send(primarySkill);
  } catch (err) {
    var errMessage = `${err}`;
    processErrorResponse(res, 500, errMessage);
  }
});

app.get('/api/terms', (req, res) => {
  try {
    let transformedSkills = [];
    Object.keys(termsData.allTerms).forEach((primarySkill) => {
      //console.log(`/api/terms: primarySkill = ${primarySkill} termsData.allTerms[primarySkill] = ${JSON.stringify(termsData.allTerms[primarySkill])}`);
      primarySkill.totalCount = termsData.allTerms[primarySkill].categories.length;
      let categories_sorted = termsData.allTerms[primarySkill].categories.sort(
        (a, b) => parseInt(b.filesAndPhrases.length) - parseInt(a.filesAndPhrases.length),
      );
      termsData.allTerms[primarySkill].categories = categories_sorted;
      termsData.allTerms[primarySkill].showSecondary = false;
      transformedSkills.push({ primary_term: primarySkill, categories: termsData.allTerms[primarySkill].categories });
    });
    res.send({ primary_skills: transformedSkills });
  } catch (err) {
    var errMessage = `${err}`;
    processErrorResponse(res, 500, errMessage);
  }
});

function processErrorResponse(res, statusCode, message) {
  console.log(`${statusCode} ${message}`);
  res.status(statusCode).send({
    error: {
      status: statusCode,
      message: message,
    },
  });
}
app.get('/api/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});
app.post('/api/create-checkout-session', async (req, res) => {
  console.log('-----USLO----');
  const domainURL = 'http://galeria-arta.com';

  const { quantity, first_name, last_name, email } = req.body;

  // const paresdEvent = JSON.parse(event);

  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the Checkout page
  // [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
  // For full details see https://stripe.com/docs/checkout/sessions/create
  // console.log(paresdEvent, '---', quantity);
  const currentTime = new Date();
  currentTime.setMinutes(currentTime.getMinutes() + 30);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: 'price_1NYONeKR78E7bO3JPfaotqxr',
        quantity: 1,
      },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/successPayment?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    automatic_tax: { enabled: true },
    expires_at: Math.floor(currentTime.getTime() / 1000),
    customer_email: email,
  });

  // session && (await supabase.from('events').upsert([{ ...paresdEvent, quantity: paresdEvent.quantity - quantity }]));

  return res.redirect(303, session.url);
});

app.listen(app.get('port'), function () {
  console.log('Express app vercel-express-react-demo is running on port', app.get('port'));
});

module.exports = app;
