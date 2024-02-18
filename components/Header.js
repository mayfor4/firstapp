// components/Header.js

// components/Header.js
// components/Header.js


const Header = () => {
    return (
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-end w-full">
            <a href="#" className="text-sm text-gray-300 mr-4 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md">Home</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md">Acerca</a>
          </div>
        </div>
      </header>
    );
  };

  
  export default Header;