import React, { ReactChild } from 'react';

export const Context = React.createContext<{
  selectedEvent: any;
  onSelectEvent: (event: any) => void;
  quantity: any;
  onSetQuantity: (q: number) => void;
}>({
  selectedEvent: null,
  onSelectEvent: () => ({}),
  quantity: null,
  onSetQuantity: () => ({}),
});

export const Provider = ({ children }: { children: ReactChild }) => {
  const [selectedEvent, onSelectEvent] = React.useState(null);
  const [quantity, setQuantity] = React.useState(0);

  const handleSelectEvent = React.useCallback((event: any) => onSelectEvent(event), []);
  const onSetQuantity = React.useCallback((q: number) => setQuantity(q), []);

  const value = React.useMemo(
    () => ({ selectedEvent, onSelectEvent: handleSelectEvent, quantity, onSetQuantity }),
    [handleSelectEvent, onSetQuantity, quantity, selectedEvent],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useGlobalStore = () => {
  const { selectedEvent, onSelectEvent, quantity, onSetQuantity } = React.useContext(Context);

  return { selectedEvent, onSelectEvent, quantity, onSetQuantity };
};
