import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

class Mysite extends React.Component{

    render(){
        return(
            <div className="mySite">
                <Header/>
                <Content/>
            </div>
        )
    }    
}

export default Mysite
