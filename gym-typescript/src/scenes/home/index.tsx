import HomeText from "@/assets/HomePageText.png";
import HomeGraph from "@/assets/HomePageGraphic.png";
import EvolveText from "@/assets/EvolveText.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";


const Home = () => {
  return (
    <section className="justify-center bg-gray-20">
      <div className="flex h-3/4 w-full items-center justify-center py-10">
        <div>
          <img src={EvolveText} className="w-1/3"></img>
          <img src={HomeText}></img>
          <div className="w-4/5">
            <p className="mb-8 mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            <button className="rounded-md bg-amber-400 px-10 py-2 hover:text-white">
              Join Now
            </button>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <img src={HomeGraph}></img>
        </div>
      </div>
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="redbull-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
