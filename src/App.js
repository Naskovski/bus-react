import './App.css';
import kusk from "./resources/ku-sk.json"
import skku from "./resources/sk-ku.json"
import BusLineDisplay from "./components/BusLineDisplay";
import {useEffect, useState} from "react";

function App() {
    const [direction, setDirection] = useState('Куманово->Скопје')
    const [readFile, setReadFile] = useState(kusk)
    const nowTime = new Date().toTimeString();

    let switchDest = () =>{
        if(direction === 'Куманово->Скопје') setDirection('Скопје->Куманово')
        else setDirection('Куманово->Скопје')
    }
    useEffect(()=>{
        setReadFile(direction==='Куманово->Скопје'?kusk:skku)
    },[direction])
  return (
    <div className="App">
      <header>
        Bus Kumanovo
      </header>

        <button onClick={switchDest}>

            <span>{direction}</span>
        </button>
      <section id={"schedule"}>
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
