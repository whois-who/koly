import { useState } from "react";
import { Link } from "react-router-dom";


function MainLaiut({children}) {

    const [state, setState] = useState(true)
    const onOpen = () => {
  
      if (state === false) {
        setState(true)
  
      } else {
        setState(false)
      }
    }
    return (
        <div className="App">
        <header className="App_header">
          <ul>
            <li>homme</li>
            <li>homme</li>
            <li>homme</li>
            <li>homme</li>
            <li>homme</li>
          </ul>
          <button onClick={onOpen} className='burger'>
            <div className='div'>
            </div><div className='div'></div><div className='div'></div>
          </button>
        </header>
        <main >
          <div className={state === false ? "aside_none" : "aside"}>
            <div className="blok"> <Link to='/blogs1'><p>лекции 1</p></Link></div>
            <div className="blok"> <Link to='/blogs2'><p>лекции 2</p></Link></div>
            <div className="blok"> <Link to='/blogs3'><p>лекции 3</p></Link></div>
            <div className="blok"> <Link to='/blogs4'><p>лекции 4</p></Link></div>
            <div className="blok"> <Link to='/blogs5'><p>лекции 5</p></Link></div>
            <div className="blok"> <Link to='/blogs6'><p>лекции 6</p></Link></div>
            <div className="blok"> <Link to='/blogs7'><p>лекции 7</p></Link></div>
            <div className="blok"> <Link to='/blogs8'><p>лекции 8</p></Link></div>
            <div className="blok"> <Link to='/blogs9'><p>лекции 9</p></Link></div>
            
          </div>
         <div>{children}</div>
       
        </main>
      </div>
    );
}

export default MainLaiut;