import { useParams } from "react-router-dom";
import { useFetchItems } from "../fetchItems";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ObjectDetailsPage = () => {
  const { loading, objects } = useFetchItems();
  const { objectId } = useParams();

  console.log(loading, objects);

  const selectedObject = objects.find((object) => object.id == objectId);
  // console.log(selectedObject);

  // const { itemName, description, photos, price, dimensions } = selectedObject;

  if (loading) {
    return (
      <section className="details-container">
        <div className="loading"></div>
      </section>
    );
  }

  // return (
  //   <section className="details-container">
  //     <Link className="back-btn">
  //       <IoArrowBack />
  //       <span>Terug</span>
  //     </Link>
  //     <h2>{selectedObject.itemName}</h2>
  //     <p className="description">{description}</p>
  //     <h3>Afmetingen:</h3>
  //     <ul className="dimensions">
  //       {dimensions.map((item) => {
  //         return <li>- {item}</li>;
  //       })}
  //     </ul>
  //     <p className="price">Prijs: &euro; {price},-</p>
  //   </section>
  // );
};
export default ObjectDetailsPage;
