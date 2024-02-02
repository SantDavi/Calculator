import { Component } from "react"
import Calculator from "./components/Calculator/calculator"
import "./App.css"

export default class App extends Component {
    render() {
        return <div className="App">
           <Calculator/> 
        </div>
    }
}
