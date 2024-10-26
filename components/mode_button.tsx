import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import light and dark mode icons from react-icons

const ModeButton = () => {
  return (
    <div className='fixed top-4 right-4 z-[50] flex items-center gap-3 bg-black rounded-lg p-2'>
      {/* Light mode icon */}
      <button>
        <FaSun className='text-white' size={28} />
      </button>
      {/* Dark mode icon */}
      <button>
        <FaMoon className='text-white' size={28} />
      </button>
    </div>
  );
}

export default ModeButton;
