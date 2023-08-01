import "./Textarea.css";
import React,{useState} from "react";

const Textarea=(props)=>{
    const[text, setText]=useState("");
    const handleChange=(event)=>{
        setText(event.currentTarget.value);
    }
    const toUppercase=()=>{
        setText(text.toUpperCase());
    }
const toLowercase=()=>{
    setText(text.toLowerCase());
}

const clearText=()=>{
    setText("");
}

const titleCase=()=>{
    let t= text.split(" ");
    for(let i=0;i<t.length;i++){
       t[i]= t[i].charAt(0).toUpperCase()+ t[i].substring(1).toLowerCase();
    }
    let titleCaseText= t.join(" ");
    setText(titleCaseText);
}
    return(
        <div style={props.styles}>
        <h2>Enter Your Text To Analyze !</h2>
        <div className="textarea">
         
            <textarea style={props.styles} autoFocus value={text} rows="32" cols="44" onChange={handleChange} placeholder="Enter your text"></textarea>
        </div>
        <div className="buttons">
            <button type="submit" onClick={toUppercase} >convert2Uppercase</button>
            <button type="submit" onClick={toLowercase} >convert2Lowercase</button>
            <button type="submit" onClick={titleCase} >Titlecase</button>

            <button type="submit"onClick={clearText} >Clear</button>
        </div>
        <div className="preview">
        <h3>Preview</h3>
        <p>{ Math.round((text.split(" ").length)*0.005)} Minutes Reading</p>
        <p>{text.length>0 ? text : "Enter some text to analyze"}</p>
        </div>

        </div>
    );
}

export default Textarea;