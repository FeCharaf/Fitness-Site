import logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto flex h-60 w-4/6 gap-16">
        <div className="basis-1/2">
          <img src={logo} alt="logo icon" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div>
          <h4 className="font-bold">Links</h4>
          <p>Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>

        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(11)3425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
