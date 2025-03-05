import Objects from "../components/Objects";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <About />
      <h2>Aanbod</h2>
      <Objects />
    </div>
  );
};
export default HomePage;
