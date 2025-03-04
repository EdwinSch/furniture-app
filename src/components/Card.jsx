import { Link } from "react-router-dom";

const Card = ({ object }) => {
  const { id, itemName, price, sold, photos } = object;

  return (
    <article className="card-wrapper">
      <img src={photos[0].fields.file.url} className="img" alt={itemName} />
      <h3>{itemName}</h3>
    </article>
  );
};
export default Card;
