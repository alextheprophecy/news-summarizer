import "./main.css";

import Map from './Map/map.component'
import NewsBubble from "./News/newsBubble.component";
import {useState} from "react";
import getCountryNews from "../Handlers/news.handler";

const Main = () => {
    const [mapFocus, setMapFocus] = useState(true)
    const [newsT, setNewsT] = useState("Breaking News! Joe Biden and Emanuel Macron have a diplomatic discussion regarding ice-cream flavours and their national budgets in flavour research and development")

    return (
        <>
            <Map unFocus={(code) => {
                getCountryNews(code).then((t) => {setNewsT(t.data)})
                setMapFocus(false)
            }
            }/>
            <NewsBubble newsT={newsT} mapFocus={mapFocus} reFocus={() => {
                setMapFocus(true)
            }}/>
        </>
    )
}

export default Main;