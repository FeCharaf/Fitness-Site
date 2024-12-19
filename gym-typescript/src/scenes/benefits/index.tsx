import Benefit from "./Benefit";
import HText from "@/shared/HText";
import BenefitsGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-full pb-20">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center py-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER SECTION */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM.</HText>
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
            {benefits.map()})}
        </div>
      </motion.div>

      <div className="mx-auto flex w-5/6 gap-20">
        <img
          src={BenefitsGraphic}
          alt="benefits-page-graphic"
          className="max-h-[500px] max-w-[500px]"
        />

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
