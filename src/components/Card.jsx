import { Link } from "react-router-dom";

const Card = ({ id, itemName, price, sold, photos }) => {
  return (
    <article className="card-wrapper">
      {sold && (
        <div className="card-disabled">
          <p>Verkocht!</p>
        </div>
      )}

      <img src={photos[0].fields.file.url} className="img" alt={itemName} />
      <h3>{itemName}</h3>
      <p className="price">&euro; {price},-</p>
      <Link
        to={`object/${id}`}
        className={sold ? "link-btn disable-btn" : "link-btn"}
      >
        Bekijk details
      </Link>
    </article>
  );
};
export default Card;
