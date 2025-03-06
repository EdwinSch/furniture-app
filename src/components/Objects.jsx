import Card from "./Card";
import { useGlobalContext } from "../context";

const Objects = () => {
  const { objects, loading } = useGlobalContext();

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
        return <Card key={object.id} {...object} />;
      })}
    </section>
  );
};
export default Objects;
