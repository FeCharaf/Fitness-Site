import image from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyles = `mb-5 rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //amount is the percentage of the div that you can see to proc the animation
          transition={{ duration: 0.5 }} // duration of the animation
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-montserrat text-3xl font-bold">
            <HText>
              <span className="text-primary-500">JOIN NOW </span>
              TO GET IN SHAPE
            </HText>
          </h1>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form target="_blank" onSubmit={onSubmit} method="POST" action="https://formsubmit.co/felipecharaf@gmail.com">
              <input className={inputStyles} type="text" placeholder="NAME" />
              <input className={inputStyles} type="text" placeholder="EMAIL" />
              <input
                className={inputStyles}
                type="text"
                placeholder="MESSAGE"
              />
              <button
                type="submit"
                className="w-1/4 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
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
