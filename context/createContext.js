import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const SelectedCardContext = createContext();

export const useSelectedCardContext = () => {
  return useContext(SelectedCardContext);
};

export const SelectedCardProvider = ({ children }) => {
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [Rating, setRating] = useState({});
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const value = await localStorage.getItem("user");
      if (value) {
        const parsedData = JSON.parse(value);
        const profile = await axios.get("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${parsedData.token}`,
          },
        });
        setProfile(profile.data.data);
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [setProfile]);

  return (
    <SelectedCardContext.Provider
      value={{
        selectedCardData,
        setSelectedCardData,
        isOpen,
        setIsOpen,
        profile,
        setProfile,
        isLoading,
        Rating,
        setRating,
        state,
        setState,
      }}
    >
      {children}
    </SelectedCardContext.Provider>
  );
};
