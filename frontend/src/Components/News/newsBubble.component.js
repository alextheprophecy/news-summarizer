import "./css/newsBubble.css"
import {CSSTransition} from "react-transition-group";
import {useState} from "react";
const NewsBubble = (props) => {
    const gone = () => {
        props.reFocus()
    }

    return (
        <CSSTransition in={!props.mapFocus} timeout={300} classNames="alert" unmountOnExit appear>
            <div className={"block"}>
                <div className={"clickable"} onClick={gone}/>
                <div className={"container"}>
                    <div className={"newsText"}>
                        {props.newsT}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default NewsBubble;