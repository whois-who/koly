
import './App.css';

import MainLaiut from './layout/mainLaiut';

import { Routes, Route } from "react-router-dom";
import Block1 from './components/Block';
import Block2 from './components/Block — копия';
import Block3 from './components/Block — копия (8)';
import Block4 from './components/Block — копия (7)';
import Block5 from './components/Block — копия (6)';
import Block6 from './components/Block — копия (5)';
import Block7 from './components/Block — копия (4)';
import Block8 from './components/Block — копия (3)';
import Block9 from './components/Block — копия (2)';
import Home from './pages/home';
function App() {


  return (
    // <div className="App">
    //   <header className="App_header">
    //     <ul>
    //       <li>homme</li>
    //       <li>homme</li>
    //       <li>homme</li>
    //       <li>homme</li>
    //       <li>homme</li>
    //     </ul>
    //     <button onClick={onOpen} className='burger'>
    //       <div className='div'>
    //       </div><div className='div'></div><div className='div'></div>
    //     </button>
    //   </header>
    //   <main >
    //     <div className={state === false ? "aside_none" : "aside"}>
    //       <div className="blok"> <p>лекции 1</p></div>
    //       <div className="blok"> <p>лекции 2</p></div>
    //       <div className="blok"> <p>лекции 3</p></div>
    //       <div className="blok"> <p>лекции 4</p></div>
    //       <div className="blok"> <p>лекции 5</p></div>
    //       <div className="blok"> <p>лекции 6</p></div>
    //       <div className="blok"> <p>лекции 7</p></div>
    //       <div className="blok"> <p>лекции 8</p></div>
    //       <div className="blok"> <p>лекции  9</p></div>

    //     </div>

    //   </main>
    // </div>
    <MainLaiut>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="blogs1" element={<Block1 />} />
        <Route path="blogs2" element={<Block2 />} />
        <Route path="blogs3" element={<Block3 />} />
        <Route path="blogs4" element={<Block4 />} />
        <Route path="blogs5" element={<Block5 />} />
        <Route path="blogs6" element={<Block6 />} />
        <Route path="blogs7" element={<Block7 />} />
        <Route path="blogs8" element={<Block8 />} />
        <Route path="blogs9" element={<Block9 />} />

      </Routes>
    </MainLaiut>
  );
}

export default App;
