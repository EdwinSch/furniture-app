import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "p0anhrlepwkt",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchItems = () => {
  const [loading, setLoading] = useState(true);
  const [objects, setObjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "furnitureCollection",
      });
      // console.log(response);

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
        // const img = image?.fields?.file?.url;
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, objects };
};
