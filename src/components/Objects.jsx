import { useFetchItems } from "../fetchItems";
import Card from "./Card";

const Objects = () => {
  const { loading, objects } = useFetchItems();
  console.log(objects);

  if (loading) {
    return (
      <section>
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="objects-container">
      {objects.map((object) => {
        return <Card key={object.id} object={object} />;
      })}
    </section>
  );
};
export default Objects;
