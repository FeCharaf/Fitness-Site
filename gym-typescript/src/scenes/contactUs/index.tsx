import image from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }:Props) => {
  const inputStyles = `mb-5 rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  return (
    <section id="contactus" className="py-24">
      <motion.div className="mx-auto flex h-[800px] w-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <div>
          <h1 className="font-montserrat text-3xl font-bold">
            <strong className="text-primary-500">JOIN NOW</strong> TO GET IN
            SHAPE
          </h1>
          <p className="py-8">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>

          <form className="flex flex-col gap-5">
            <input className={inputStyles} type="text" placeholder="NAME" />
            <input className={inputStyles} type="text" placeholder="EMAIL" />
            <input className={inputStyles} type="text" placeholder="MESSAGE" />
            <button
              type="submit"
              className="w-1/4 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <img
            src={image}
            className="mr-10 w-full max-w-[460px] rounded-lg"
            alt="Contact Us Illustration"
          ></img>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
