import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React,{useState} from "react";
function App(props) {

  const light={
    backgroundColor:"white",
    color:"black"
}
const dark={
    backgroundColor:"black",
    color:"white"
}

const[styles, setStyles]= useState(light);
const[imageMode, setImageMode]= useState("./moon.png");
const handleImage=()=>{
  if(styles.color==="black"){
    setImageMode("./sun.png")
    setStyles(dark);
  }else{
    setImageMode("./moon.png")
    setStyles(light);
  }
}
  return (
    <div className='app' style={styles}>
      <Navbar styles={styles} handleImage={handleImage} mode={imageMode}/>
      <Textarea styles={styles}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
