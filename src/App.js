import './App.css';
import { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage.js';
import ProjectPage from './pages/ProjectPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import AdventurePage from './pages/AdventurePage.js';

function App() {
  const [page, setPage] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    var dark = localStorage.getItem("isDark");
    console.log(dark)
    dark = dark ?? true;
    console.log(dark)
    if(dark === true){
      document.getElementById("root").classList.add("dark");
    }
    else{
      document.getElementById("root").classList.remove("dark");
    }
    setIsDark(dark)
    console.log(isDark)
  }, []);

  function setDisplayMode(bool){
    if(bool === true){
      document.getElementById("root").classList.add("dark");
    }
    else{
      document.getElementById("root").classList.remove("dark");
    }
    localStorage.setItem("isDark", bool) 
    setIsDark(bool);
  }

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
    <div className="bg-gray-100 dark:bg-seagreen-950 text-sm md:text-xl ">
      <main className='App-main text-black dark:text-white flex flex-col'>
        <nav className='w-full text-sm md:text-2xl text-center bg-seagreen-800 text-seagreen-100 sticky top-0 bg-opacity-70 backdrop-blur-[18px]'>
          <div className='flex justify-center items-center '>
            <div className='p-5 font-bold'>Portfolio</div>
            <div className='flex-grow' />
            <div className='p-5 cursor-pointer hover:bg-seagreen-800'
              onClick={() => setPage(Pages.ABOUT)}>
              About Me
            </div>
            <div className='p-5 cursor-pointer hover:bg-seagreen-800'
              onClick={() => setPage(Pages.PROJECTS)}>
              Projects
            </div>
            <div className='p-5 cursor-pointer hover:bg-seagreen-800'
              onClick={() => setPage(Pages.EXPERIENCE)}>
              Experience
            </div>
            <div className='p-5 cursor-pointer hover:bg-seagreen-800'
              onClick={() => setPage(Pages.ADVENTURES)}>
              Adventures
            </div>
            <div className='p-5 cursor-pointer hover:bg-seagreen-800'
              onClick={() => setDisplayMode(!isDark)}>
                {isDark === true ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
            </div>
          </div>
        </nav>

        {mainContent}

        <div className='flex-grow'/>

        <footer className='flex p-2 text-white items-center justify-center bg-seagreen-700 dark:bg-seagreen-900'>
          <div className='select-none'>
            Contact me at:
          </div>
          <div className='px-3'>
            pramza427@gmail.com
          </div>

        </footer>
      </main>
    </div>
  );
}

export default App;