import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer>
    <div className="container mx-auto max-w-800">
      <div className="flex justify-between py-6">
        <div className="text-gray-600">
          <p>&copy; {new Date().getFullYear()} Dragan Vucinic </p>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <a
            href="https://github.com/ogurenko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-gray-600 hover:text-gray-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/CodesDragan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 hover:text-gray-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/dragan-vu%C4%8Dini%C4%87-969946212/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-gray-600 hover:text-gray-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
