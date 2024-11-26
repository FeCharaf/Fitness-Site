type Props = {
  icon: any;
  title: string;
  text: string;
  link: string;
};

const Benefit = ({ icon, title, text, link }: Props) => {
  return (
    <div className="w-1/3 border items-center justify-center mx-auto flex flex-col">
      <div className="">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
      <a href={link}>Learn More</a>
    </div>
  );
};

export default Benefit;
