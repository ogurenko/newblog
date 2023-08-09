import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = (props) => (
  <div className="container mx-auto max-w-800">
    <div className="flex justify-between py-6">
      <div className="text-gray-600">
        <p {...props}>&copy; {new Date().getFullYear()} </p>
      </div>
      <div className="flex space-x-4 text-gray-600">
        <a
          href="https://github.com/ogurenko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/CodesDragan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-gray-800"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/dragan-vu%C4%8Dini%C4%87-969946212/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="hover:text-gray-800"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
);
