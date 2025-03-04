import { useParams } from "react-router-dom";
import { useFetchItems } from "../fetchItems";

const ObjectDetailsPage = () => {
  const { loading, objects } = useFetchItems();
  const { objectId } = useParams();

  const selectedObject = objects.find((object) => object.id == objectId);
  // console.log(selectedObject);

  if (loading) {
    return (
      <section>
        <div className="loading"></div>
      </section>
    );
  }

  return <p>{selectedObject.itemName}</p>;
};
export default ObjectDetailsPage;
