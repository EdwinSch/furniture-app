import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useGlobalContext } from "../context";

const ObjectDetailsPage = () => {
  const { objectId } = useParams();
  const { objects, loading } = useGlobalContext();

  const selectedObject = objects.find((object) => object.id == objectId);
  // console.log(selectedObject);

  const { itemName, description, photos, price, dimensions } = selectedObject;

  // Window start at top
  window.scrollTo(0, 0);

  if (loading) {
    return (
      <section className="details-container">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="details-container">
      <Link to={"/"} className="back-btn">
        <IoArrowBack />
        <span>Terug</span>
      </Link>
      <h2>{itemName}</h2>
      <div className="photo-container">
        {photos.map((photo, idx) => {
          return (
            <img
              key={idx}
              src={photo.fields.file.url}
              alt={photo.fields.title}
              className="detail-img"
            />
          );
        })}
      </div>
      <p className="description">{description}</p>
      <h3>Afmetingen:</h3>
      <ul className="dimensions">
        {dimensions.map((item, idx) => {
          return <li key={idx}>- {item}</li>;
        })}
      </ul>
      <p className="price">Prijs: &euro; {price},-</p>
    </section>
  );
};
export default ObjectDetailsPage;
