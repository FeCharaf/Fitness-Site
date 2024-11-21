import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
}

function Link({page}: Props) {
  return (
    <AnchorLink>
        {page}
    </AnchorLink>
  )
}

export default Link

