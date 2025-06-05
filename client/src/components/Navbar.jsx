import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between z-50 backdrop-blur-sm bg-white/30 px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">JuriScan</h1>
      <button
        className="button"
      >
        Login
      </button>
    </header>
  );
};

export default Navbar;
