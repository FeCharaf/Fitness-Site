import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // This code remove spaces and Lower Case the page
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  // The (as) keyword forces the typescript to treat it like a SelectedPage type

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
        transition duration-500 hover:text-primary-300
        `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
