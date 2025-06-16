import Banner from "./Components/Banner/Banner";
import FeaturedGames from "./Components/FeaturedGames/FeaturedGames";
import HomeConsoles from "./Components/HomeConsoles/HomeConsoles";
import HomeTradeIn from "./Components/HomeTradeIn/HomeTradeIn";
import ProductSpotlight from "./Components/ProductSpotlight/ProductSpotlight";

export default function HomePage() {
  const bannerImgs = [
    {
      id: 1,
      img: "/Banner1.jpg",
      title: "Pre-Order the Switch 2 Now !",
      subtitle: "See below for more information",
    },
    {
      id: 2,
      img: "/Banner2.jpg",
      title: "Buy with Confidence",
      subtitle: "Place your trust in us and fuel your passion.",
    },
    {
      id: 3,
      img: "/Banner3.jpg",
      title: "Retro Gamer ?",
      subtitle: "We have a range of retro consoles and games!",
    },
  ];
  return (
    <div>
      <Banner slides={bannerImgs} />
      <ProductSpotlight />
      <HomeConsoles />
      <HomeTradeIn />
      <FeaturedGames />
    </div>
  );
}
