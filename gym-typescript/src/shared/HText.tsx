import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <span className="basis-3/5 font-montserrat text-3xl font-bold">{children}</span>
  );
};

export default HText;