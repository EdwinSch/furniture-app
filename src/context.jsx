import { useContext } from "react";
import { createContext } from "react";
import { useFetchItems } from "./fetchItems";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  // Call data
  const { loading, objects } = useFetchItems();

  return (
    <GlobalContext.Provider value={{ loading, objects }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
