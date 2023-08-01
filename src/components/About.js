import "./About.css";
import React, {useState}  from "react";

const About=()=>{
    const light= {
        color:"black",
        backgroundColor:"white"
    }

    const dark= {
        color:"white",
        backgroundColor:"black"
    }

    const [styles, setStyles]=useState(light);

    const changeStyles=()=>{
        if(styles.backgroundColor==="white"){
            setStyles(dark);
        setText("Enable light Mode");
        }else  {
            setStyles(light);
            setText("Enable Dark Mode");
        }
        
    }

const[text, setText ]=useState("Enable Dark Mode");

    return(
        <div className="about" style={styles}>
            <h1>About Us</h1>
            <h3>Welcome to Our App! </h3>

 <p>I am a passionate team of developers and designers dedicated to creating innovative and user-friendly apps that cater to your needs. Our mission is to provide seamless and enjoyable experiences for our users.</p>

<h2>Our Vision:</h2>
<p>At Our App, we strive to be at the forefront of technology, constantly pushing the boundaries to deliver cutting-edge solutions. We envision a future where our apps positively impact the lives of millions of people worldwide.</p>

<h2>Our Values:</h2>
<li>Innovation: We embrace creativity and continuously seek new ideas to improve our apps.</li>
<li>- User-Centric: Our users' satisfaction is our top priority, and we tailor our apps to meet their expectations.</li>


<h4>Thank you for choosing Our App! We look forward to serving you and making your experience delightful.</h4>
 
<button type="submit" onClick={changeStyles} >{text}</button>
        </div>
    );
}

export default About;