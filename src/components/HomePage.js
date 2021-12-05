import React from 'react';
import cloud from '../images/cloud.png'
import mountain from '../images/mountain.png'
import Lessie from '../images/me.jpg'
import  '../styling/HomePage.css'

class HomePage extends React.Component{
    render(){
        return(
            <div>
            <div className='top-container'>
                <img className="top-cloud" src={cloud} alt="cloud-img"></img>
                <h1>I'm Lessie.</h1>
                <h2>A <span className='pro'>pro</span>grammer.</h2>
                <img className="bottom-cloud" src={cloud} alt="cloud-img"></img>
                <img src={mountain}></img>
            </div>

            <div className='middle-container'>
            <div class='profile'>
            <img className='lessie-img' src={Lessie}></img>


            </div>
            
            </div>
            </div>
        )
    }
}

export default HomePage;