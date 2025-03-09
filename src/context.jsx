import { useContext, createContext, useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "p0anhrlepwkt",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [objects, setObjects] = useState([]);

  // Fetch function moved inside the context
  const fetchItems = async () => {
    try {
      const response = await client.getEntries({
        content_type: "furnitureCollection",
      });

      // response.items.reverse();

      const data = response.items.map((item) => {
        const {
          description,
          dimensions,
          itemName,
          price,
          sold,
          photos,
          markplaatsLink,
        } = item.fields;
        const id = item.sys.id;
        return {
          id,
          description,
          dimensions,
          itemName,
          price,
          sold,
          photos,
          markplaatsLink,
        };
      });

      setObjects(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the data when context is mounted
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <DataContext.Provider value={{ loading, objects, fetchItems }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
