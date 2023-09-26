import { createContext, useContext, useState } from "react";

const SelectedCardContext = createContext();

export const useSelectedCardContext = () => {
  return useContext(SelectedCardContext);
};

export const SelectedCardProvider = ({ children }) => {
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectedCardContext.Provider
      value={{ selectedCardData, setSelectedCardData, isOpen, setIsOpen }}
    >
      {children}
    </SelectedCardContext.Provider>
  );
};
