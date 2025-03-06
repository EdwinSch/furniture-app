import Card from "./Card";

import { useDataContext } from "../context";

const Objects = () => {
  const { objects, loading } = useDataContext();

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
