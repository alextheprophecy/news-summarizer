import "./css/map.css"
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { europeMill } from "@react-jvectormap/europe";
import {useRef} from "react";

const world = require("./preciseWorld.json")

const Map = (props) => {
    const mapR = useRef();

    const onRegionClick = (event, code) => {
        props.unFocus(code)
    }

    return(
        <div className={"mapBox"}>
            <VectorMap
                map={worldMill}
                mapRef={mapR}
                regionsSelectable={true}
                onRegionClick={onRegionClick}
            ></VectorMap>
        </div>
    );
}


export default Map;