import React from 'react'

class MenuOverlay extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="overlay-menu">
                <nav className="overlay-menu-content">
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Products">Products</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default MenuOverlay