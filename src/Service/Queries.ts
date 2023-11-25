import { useQuery } from 'react-query';
import { Service } from '.';
export function GetEvents({ filter }: any) {
  const query = `{
  ${filter} {
    items {
      title
      eventImage{
        url
      }
      date
      price
      difficulty
      location
    }
  }
}`;
  const self = useQuery({
    queryKey: [filter],
    queryFn: () => Service.instance.post('', JSON.stringify({ query })).then(({ data }) => data),
  });
  return self.data;
}
export function GetGalleryImages() {
  const query = `{
  galleryImagesCollection {
    items {
      image{
        url
      }
    }
  }
}`;
  const self = useQuery({
    queryKey: ['gallery'],
    queryFn: () => Service.instance.post('', JSON.stringify({ query })).then(({ data }) => data),
  });
  return self.data;
}
