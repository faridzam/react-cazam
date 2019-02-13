import React from 'react'
import MenuOverlay from '../components/Menu-overlay'
import mainLogo from '../assets/cazam-logo.svg'

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isMenuClicked: false,
        }
        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(){
        this.setState(
            state => ({
                isMenuClicked: !state.isMenuClicked
            })
        )
    }

    render(){
        return(
            <header className="webhead">
                <img className="project-logo" src={mainLogo} alt="cazam"></img>
                <div id="burger-icon" className={this.state.isMenuClicked? 'burger-open':'burger-close'} onClick={() => this.menuClick(this)}>
                    <div id="burger-bar1" className={this.state.isMenuClicked? 'bar1-open': 'bar1-close'}></div>
                    <div id="burger-bar2" className={this.state.isMenuClicked? 'bar2-open': 'bar2-close'}></div>
                    <div id="burger-bar3" className={this.state.isMenuClicked? 'bar3-open': 'bar3-close'}></div>
                </div>
                {this.state.isMenuClicked? <MenuOverlay/> : null}
            </header>
        )
    }    
}

export default Header
