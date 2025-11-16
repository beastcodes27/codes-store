import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 shadow-md mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-gray-400 mb-4">&copy; 2024 SYNTAXBEAST. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><FaGithub size={24} /></a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
