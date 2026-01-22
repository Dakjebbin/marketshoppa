import Community from "../components/Community";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Why from "../components/Why";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-375">
      <Hero />
      <Why/>
      <Products/>
      <Community/>
    </div>
  );
};

export default Home;
