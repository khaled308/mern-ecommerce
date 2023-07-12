import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-4">
      <div className="container flex flex-col gap-3 items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm sm:text-base">
            © 2023 Your name or company | Template by Khaled Yassin
          </p>
        </div>
        <div className="text-center sm:text-right">
          <ul className="list-none flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/khaled-yassin-0503b61b3/"
                className="text-white"
              >
                <AiFillLinkedin size={24} />
              </a>
            </li>
            <li>
              <a href="https://github.com/khaled308" className="text-white">
                <AiFillGithub size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
