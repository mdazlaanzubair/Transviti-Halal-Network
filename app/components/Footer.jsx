import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-3 border-t-2 pt-3 pb-5">
        <p className="flex flex-wrap justify-between items-center gap-3 text-sm">
          {[
            "Contact Us",
            "Terms of use",
            "Cookies Policy",
            "Help & Support",
          ].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="link-hover font-semibold text-base-content opacity-60"
            >
              {item}
            </Link>
          ))}
        </p>
        <p className="flex flex-wrap justify-between items-center gap-3 text-sm">
          {["Facebook", "Linkedin", "Instagram", "Youtube"].map(
            (item, index) => (
              <Link
                key={index}
                href="/"
                className="link-hover font-semibold text-base-content opacity-60"
              >
                {item}
              </Link>
            )
          )}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center lg:gap-3 border-t-2 py-3">
        <p>
          <Link href="/" className="link-hover font-semibold text-primary">
            Halal Networks
          </Link>{" "}
          &copy; 2023. All rights reserved
        </p>
        <p className="flex flex-row justify-between items-center gap-3">
          {["User Agreement", "Privacy Policy"].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="link-hover font-semibold text-base-content opacity-60"
            >
              {item}
            </Link>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
