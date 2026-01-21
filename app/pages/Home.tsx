import Community from "../components/Community";
import Footer from "../components/Footer";
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
      <Footer/>
    </div>
  );
};

export default Home;
