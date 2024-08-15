import './App.css';
import { useState } from 'react';
import AboutPage from './pages/AboutPage.js';
import ProjectPage from './pages/ProjectPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import AdventurePage from './pages/AdventurePage.js';

function App() {
  const [page, setPage] = useState(0);


  // Page enum
  const Pages = Object.freeze({
    ABOUT: 0,
    PROJECTS: 1,
    EXPERIENCE: 2,
    ADVENTURES: 3
  });
  
  // Change page
  let mainContent = <AboutPage />;
  switch (page) {
    case Pages.ABOUT:
      mainContent = <AboutPage />;
      break;
    case Pages.PROJECTS:
      mainContent = <ProjectPage />;
      break;
    case Pages.EXPERIENCE:
      mainContent = <ExperiencePage />;
      break;
    case Pages.ADVENTURES:
      mainContent = <AdventurePage />;
      break;
    default:
      mainContent = <AboutPage />;
  }

  return (
    <div className="App text-sm md:text-xl">
      <nav className='w-full h-auto text-sm'>
        <div className='flex md:inline-flex justify-center bg-green-500 md:border md:rounded-b-lg'>
          <div className='p-3 cursor-pointer hover:bg-green-200 rounded-bl-lg'
            onClick={() => setPage(Pages.ABOUT)}>
            About Me
          </div>
          <div className='p-3 cursor-pointer hover:bg-green-200'
            onClick={() => setPage(Pages.PROJECTS)}>
            Projects
          </div>
          <div className='p-3 cursor-pointer hover:bg-green-200'
            onClick={() => setPage(Pages.EXPERIENCE)}>
            Experience
          </div>
          <div className='p-3 cursor-pointer hover:bg-green-200 rounded-br-lg'
            onClick={() => setPage(Pages.ADVENTURES)}>
            Adventures
          </div>
        </div>
      </nav>

      <main className='App-main'>
        {mainContent}
      </main>

      <footer className='flex p-2 text-white items-center justify-center bg-gray-900 border-t border-gray-800'>
        <div className='select-none'>
          Contact me at: 
        </div>
        <div className='px-3'>
          pramza427@gmail.com
        </div>
        
      </footer>

    </div>
  );
}

export default App;