import React, { useEffect } from 'react';

const Navbar = () => {

  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl font-bold gradient-text'>
            Arindam Mukherjee
          </a>
        </a>

        <nav className='md:ml-auto md:mr-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#experience' className='mr-5 hover:text-white'>
            Professional Experience
          </a>
          <a href='#projects' className='mr-5 hover:text-white'>
            Projects
          </a>
          <a href='#skills' className='mr-5 hover:text-white='>
            Skills
          </a>
          <button className='gradient-background text-white font-bold px-2 py-1'>
            <a href='#contact' className='hover:text-white'>
              Contact
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;