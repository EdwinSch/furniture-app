import { useFetchItems } from "./fetchItems";
import { Link } from "react-router-dom";

const Objects = () => {
  const { loading, objects } = useFetchItems();
  console.log(loading, objects);

  return <div>Objects</div>;
};
export default Objects;
