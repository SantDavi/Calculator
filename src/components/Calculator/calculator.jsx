import {Component} from "react"
import "./calculator.css"

import Display from "./display"
import "./display.css"

import Buttons from "./buttons"
import "./buttons.css"

export default class Calculator extends  Component {
    
    
    render() {
        
        return (<div className="Calculator">
            <Display></Display>
            <Buttons></Buttons>
            </div>)
    }
}
