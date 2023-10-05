import './App.css';
import kusk from "./resources/ku-sk.json"
import skku from "./resources/sk-ku.json"
import BusLineDisplay from "./components/BusLineDisplay";
import {useEffect, useState} from "react";

function App() {
    const [direction, setDirection] = useState('kusk')
    const [readFile, setReadFile] = useState(kusk)
    const nowTime = new Date().toTimeString();

    let switchDest = () =>{
        if(direction === 'kusk') setDirection('skku')
        else setDirection('kusk')
    }
    useEffect(()=>{
        setReadFile(direction==='kusk'?kusk:skku)
    },[direction])
  return (
    <div className="App">
      <header>
        Bus Kumanovo
      </header>
        <button onClick={switchDest}>switch</button>
      <section>
        {readFile.filter((item) => {
            const timeOfBus = new Date(`1970-01-01T${item.Време}`).toTimeString();
            return timeOfBus>nowTime;
        }).map((item, index) =>(
            <BusLineDisplay key={index} item={item}/>
        ))}
      </section>

    </div>
  );
}

export default App;
