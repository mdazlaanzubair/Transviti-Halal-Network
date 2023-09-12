import CallToAction from "./CallToAction";
import HeroImgCard from "./HeroImgCard";
import Introduction from "./Introduction";
import PopularPlaces from "./PopularPlaces";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 p-3">
      <HeroImgCard />
      <Introduction />
      <PopularPlaces />
      <CallToAction />
    </div>
  );
};

export default MainContent;
