type Props = {
  icon: any;
  title: string;
  text: string;
  link: string;
};

const Benefit = ({ icon, title, text, link }: Props) => {
  return (
    <div className="border-2 border-gray-100 items-center p-16 m-10 justify-center mx-auto flex flex-col gap-4">
      <div className="border-2 rounded-full border-gray-100 bg-primary-100 p-4 ">{icon}</div>
      <h4 className="font-bold text-xl">{title}</h4>
      <p>{text}</p>
      <a href={link}>Learn More</a>
    </div>
  );
};

export default Benefit;
