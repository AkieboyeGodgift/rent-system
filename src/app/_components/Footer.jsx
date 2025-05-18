const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo or Brand */}
        <div className="text-lg font-bold tracking-wide">
          RealEstateCo
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#properties" className="hover:underline">
            Properties
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Socials or Contact Info */}
        <div className="text-sm space-x-4">
          <a href="mailto:info@realestateco.com" className="hover:underline">
            info@realestateco.com
          </a>
          <span> | </span>
          <a href="tel:+1234567890" className="hover:underline">
            +1 234 567 890
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} RealEstateCo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
