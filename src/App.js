import './App.css';
import menu from "./assets/menu.png"
import logo from "./assets/logo.png"
import lamp from "./assets/lamp.png"
import lightImg from "./assets/light.png"

function App() {

  function toggleBtn(){
    var btn = document.getElementById('btn');
    var light = document.getElementById('light');
    btn.classList.toggle("active")
    light.classList.toggle("on")
  }
  return (
    <div className='main' >
      <nav>
        <img src={menu} alt='menu' />
        <img src={logo} alt='logo' />
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>Work</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
        <button id='btn' className='btn' onClick={()=> toggleBtn()} ><span></span></button>
      </nav>
      <div className='lamp_light' >
        <img src={lamp} alt='lamp' />
        <img src={lightImg} alt='light' className='light' id='light' />
      </div>
      <div className='text_container' >
        <h1>Latest<br/>in Lighning</h1>
        <p>
          I have made this website in React js, Inspired by HTLM CSS page by a youtube channel 'Easy Tutorials' 
          but with few changes and responsive desgin.
        </p>
        <a href='' >Source Code</a>
        <div className='controls' >
          <p>04</p>
          <div className='line' ><span></span></div>
          <p>05</p>
        </div>
      </div>
    </div>
  );
}

export default App;
