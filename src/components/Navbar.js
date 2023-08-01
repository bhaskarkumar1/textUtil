import "./Navbar.css";

const Navbar=(props)=>{

 

    return(
        
            <div className="navitems" style={props.styles}>
                <img className="brand" src="./favicon.ico" alt="brand"></img>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <img className="mode" style={props.styles} src={props.mode} onClick={props.handleImage} alt="moon" ></img>
            </div>
        
    );
}

export default Navbar;