import { useEffect, useState } from "react"

const buttonsKeys = [
    "","","clear","backspace",
    "seven","eight","nine","div",
    "four","five","six","mult",
    "one","two","three","plus",
    "","zero","evaluate","minus"
]

/* 
TODO: Features to add later;

Add more buttons
Improve the calculation system
Refactore to make readble

const buttonsKeys = [
    "perc","fat","clear","backspace",
    "seven","eight","nine","div",
    "four","five","six","mult",
    "one","two","three","plus",
    "dot","zero","evaluate","minus"
] */

const buttonsMap = {
    "zero": {label: "0",type:"digit",keyCode:"Digit0"},
    "one": {label: "1",type:"digit",keyCode:"Digit1"},
    "two": {label: "2",type:"digit",keyCode:"Digit2"},
    "three": {label: "3",type:"digit",keyCode:"Digit3"},
    "four": {label: "4",type:"digit",keyCode:"Digit4"},
    "five": {label: "5",type:"digit",keyCode:"Digit5"},
    "six": {label: "6",type:"digit",keyCode:"Digit6"},
    "seven": {label: "7",type:"digit",keyCode:"Digit7"},
    "eight": {label: "8",type:"digit",keyCode:"Digit8"},
    "nine": {label: "9",type:"digit",keyCode:"Digit9"},
    
    "minus": {label:"-", type: "operation", keyCode: "Minus"},
    "div": {label:"/", type: "operation", keyCode: null},
    "mult": {label:"*", type: "operation", keyCode: null},
    "plus": {label:"+", type: "operation", keyCode: null},
    "fat": {label:"!", type: "operation", keyCode: null},
    "perc": {label: "%",type: "operation", keyCode: null},
    "dot": {label: ".",type: "operation", keyCode: null},
    "evaluate": {label:"=", type: "evaluate", keyCode: "Enter"},
    "backspace": {label:"<-", type:"back", keyCode:"Backspace"},
    "clear": {label:"C", type:"clear",keyCode: "Delete"}
    
}
let text = "";

let hist = [];

function handleCalculatorKeys(ev) {
    const key = ev.code
    const attr = 'keyCode'

    for (let _key in buttonsMap) {
        let obj = buttonsMap[_key]
        if (obj[attr] === key) {
            return ClickKey(obj)
            
        }
    }

}


function isValid(type) {
    const prev = hist.slice(-1)[0]
    
    const started = text.length === 0

    if (type === "operation" && prev.type === "operation") {return false}
    if (started && type !== "digit") {return false}    

    return true
}


function ClickKey({type,label}) {
    let p = document.querySelector(".previous-label") 
    let r = document.querySelector(".current-label")

    alert(isValid(type))
    let valid = isValid(type)
    if (valid) {
        switch (type) { 
            case "digit":
                text += label
                break
            

            case "operation":
            text += label;
            break;
            
            case "back":
            text = text.slice(0, -1);
            break;
            
            case "clear":
            text = "";
            p.textContent = ""
            r.textContent = ""
            
            break;
            
            case "evaluate":
            
            p.textContent = text + "="
            text = eval(r.textContent)
            break;
            
            
            default:
            break;
        }
    }
    document.querySelector(".current-label").textContent = text 
    
}
export default function Buttons() {
    document.addEventListener('keyup',handleCalculatorKeys)
    let buttons = buttonsKeys.map(item => 
        {return (
            <Button key={item} id={item}/>
            )}
        )

    return <div className="buttons-grid">
        {buttons}
    </div>
};


function Button({id}) {
    var button = buttonsMap[id]
    if( button !== undefined) {
        return (
        <button 
            onClick={() => {
                ClickKey(button)
                hist.push(button)
                }}>
            {button.label}
        </button>)
    } else {
        return <button></button>
    }
}
