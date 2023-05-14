import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";


function App() {

  var [angka, setAngka] = useState(12);

  const handleClick2 = () => {
    setAngka(angka + 20);
  };


  var [nomor, setNomor] = useState(3);

  const handleClick3 = () => {
    setNomor(nomor + 20);
  };

  useEffect(() => {
    console.log("Halaman Dibuka");
  }, [angka, nomor]);

  return (
    <div className="App">
    <div>
      <h1>{angka}</h1>
      <h1>{nomor}</h1>
      <button onClick={handleClick2}>Klik</button>
      <button onClick={handleClick3}>Klik</button>
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Halo Sekolah Koding <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
