import '../App.css'
import {useEffect, useState} from "react";

export default function BusLineDisplay(props){
    const {item} = props
    let time = item.Време
    const company = item.Превозник
    const from=item.Поаѓање
    const to=item.До

    const [border, setBorder] = useState("#ff0000")

    useEffect(() => {
        if (from === "Макпетрол")
            setBorder("#eac928")
        else if (from === "Рамстор")
            setBorder("#ff9900")
        else setBorder("#ff0000")
    },[from])

    return (
        <div style={{borderColor: border}} id={'BusDiv'}>
            <h1>{time}</h1>
            <span className={"company"}>{company}</span>
            <span className={"from"}> {from?<span>од: {from}</span>:<span/>}</span>
            <span className={"to"}> {to?<span>дo: {to}</span>:<span/>}</span>
        </div>
    )

}