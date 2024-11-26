import Benefit from "./Benefit";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Benefits = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-5/6 items-center justify-center py-20">
        <h1 className="font-montserrat text-3xl font-bold">
          MORE THAN JUST GYM
        </h1>
        <p>
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
        <div className="flex">
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
    </section>
  );
};

export default Benefits;
