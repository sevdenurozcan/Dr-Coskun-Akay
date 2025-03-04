import Header from "./components/Header";
import Body from "./components/Body";
import Ozon from "./components/Ozon";
import SlidingMakaleler from "./components/SlidingMakaleler";

export default function Home() {
  return (
    <div>

      <div><Ozon></Ozon></div>
      <div><Body></Body></div>
      <div><SlidingMakaleler></SlidingMakaleler></div>
    </div>
  );
}
