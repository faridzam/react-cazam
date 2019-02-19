import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

class Mysite extends React.Component{

    render(){
        return(
            <div className="mySite">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }    
}

export default Mysite
