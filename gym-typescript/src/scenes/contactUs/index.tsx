import image from "@/assets/ContactUsPageGraphic.png";

const ContactUs = () => {
    const inputStyles = `mb-5 rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`
  return (
    <section className="py-24">
      <div className="flex mx-auto w-5/6 h-[800px] border-2">
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

          <form className="flex-col flex gap-5">
            <input className={inputStyles} type="text" placeholder="NAME" />
            <input className={inputStyles} type="text" placeholder="EMAIL" />
            <input className={inputStyles} type="text" placeholder="MESSAGE" />
          </form>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={image} className="w-full max-w-[460px] rounded-lg" alt="Contact Us Illustration"></img>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
