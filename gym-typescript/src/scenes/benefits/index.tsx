import Benefit from "./Benefit";
import BenefitsGraphic from "@/assets/BenefitsPageGraphic.png";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Benefits = () => {
  return (
    <section className="w-full pb-20">
      <div className="mx-auto w-5/6 items-center justify-center py-20">
        <h1 className="font-montserrat text-3xl font-bold mb-6">
          MORE THAN JUST GYM
        </h1>
        <p>
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
        <div className="flex gap-8">
          <Benefit
            icon="ICO"
            title="State of the Art Facilities"
            text="Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
            link="Learn More"
          />
          <Benefit
            icon="ICO"
            title="100's of Diverse Classes"
            text="Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
            link="Learn More"
          />
          <Benefit
            icon="ICO"
            title="Expert and Pro Trainers"
            text="Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
            link="Learn More"
          />
        </div>
      </div>

      <div className="mx-auto flex w-5/6 gap-20">
        <img src={BenefitsGraphic} alt="benefits-page-graphic" className="max-w-[500px] max-h-[500px]" />

        <div className="my-auto w-3/4">
          <h1 className="text-3xl font-bold">
            MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <strong className="text-primary-500">FIT</strong>
          </h1>
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
          <button className="rounded-md bg-secondary-500 px-10 py-2 font-bold hover:bg-primary-500 hover:text-white">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
