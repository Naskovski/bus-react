import './App.css';
import kusk from "./resources/ku-sk.json"
import skku from "./resources/sk-ku.json"
import holidays from "./resources/nerabotniDenovi.json"
import BusLineDisplay from "./components/BusLineDisplay";
import {useEffect, useState} from "react";

function App() {
    const [direction, setDirection] = useState('Куманово->Скопје')
    const [readFile, setReadFile] = useState(kusk)
    const nowTime = new Date();


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
          <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span className="material-symbols-outlined">
            toll
        </span>
      </header>

        <button onClick={switchDest}>
            <span>{direction}</span>
        </button>
      <section id={"schedule"}>
        {readFile.filter((item) => {
            const timeOfBus = new Date(`1970-01-01T${item.Време}`).toTimeString();
            const currentTime = nowTime.toTimeString();
            return timeOfBus>currentTime;
        }).filter((item) =>{
            const currentDay = nowTime.toDateString();
            if(currentDay.split(" ")[0]==='Sun' || holidays.includes(currentDay)){
                return (item.Недела === "*" || item.Недела === "Сабота");
            }
            if(currentDay.split(" ")[0]==='Sat' && item.Превозник === "ЈОЦО ТУРС"){
                return item.Недела === "Сабота";
            }
            return true;
        }).map((item, index) =>(
            <BusLineDisplay key={index} item={item}/>
        ))}
      </section>

    </div>
  );
}

export default App;
