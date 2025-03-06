import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import { useDataContext } from "../context";

const ObjectDetailsPage = () => {
  const { objectId } = useParams();
  const { objects, loading, fetchItems } = useDataContext();
  const [item, setItem] = useState(null);

  // If objects are empty (e.g., on refresh), trigger a fetch
  useEffect(() => {
    if (objects.length === 0) {
      fetchItems();
    }
  }, [objects.length, fetchItems]);

  useEffect(() => {
    if (objects.length > 0) {
      const foundItem = objects.find((object) => object.id == objectId);
      setItem(foundItem || null);
    }
  }, [objects, objectId]);

  // Window start at top
  window.scrollTo(0, 0);

  if (loading || (!item && objects.length === 0)) {
    return (
      <section className="details-container">
        <div className="loading"></div>
      </section>
    );
  }

  if (!item) {
    return <p>Item not found. It may have been removed.</p>;
  }

  return (
    <section className="details-container">
      <Link to={"/"} className="back-btn">
        <IoArrowBack />
        <span>Terug</span>
      </Link>
      <h2>{item.itemName}</h2>
      <div className="photo-container">
        {item.photos.map((photo, idx) => {
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
      <p className="description">{item.description}</p>
      <h3>Afmetingen:</h3>
      <ul className="dimensions">
        {item.dimensions.map((item, idx) => {
          return <li key={idx}>- {item}</li>;
        })}
      </ul>
      <p className="price">Prijs: &euro; {item.price},-</p>

      <a
        href={item.markplaatsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="external-btn"
      >
        <span>Bekijk op Marktplaats</span>
        <FaExternalLinkAlt size={15} />
      </a>
    </section>
  );
};
export default ObjectDetailsPage;
