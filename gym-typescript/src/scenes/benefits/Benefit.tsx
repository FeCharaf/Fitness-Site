import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <div className="m-10 mx-auto flex flex-col items-center justify-center gap-4 border-2 border-gray-100 p-16">
      <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4 ">
        {icon}
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p>{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default Benefit;
