import React, { Component } from 'react';
import Background  from '../assets/midstrip.png'
import Background1  from '../assets/rightstrip.png'
import styled from 'styled-components';
import button1 from '../assets/sendphoto.png'
import button2 from '../assets/choosephoto.png'
import Google from '../assets/g.png'
import Apple from '../assets/a.png'
import Header from './Header'
import Footer from './Footer'
const Div = styled.div`
min-height : 500px;
background-image: url(${Background});
background-position : center center;
background-repeat : no-repeat;
background-attachment : fixed;
backgound-size : cover;
min-height : 100vh;
vertical-align : baseline ;
margin:-0.8%;
margin-top:-1%
@media(max-width:455px){
/*  background-image: url(${Background1})*/
}
`
const H1 = styled.p`

color:#006053;
font-size: 1.5em;
font-family: Verdana;
display : flex;
justify-content : center;
`
const P = styled.p`
display : flex;
justify-content : center 

`
const Foot = styled.div`

position : fixed;
bottom : 55px;
height:100px;
width:  100%;
display : flex ; 
justify-content : center;
@media(max-width:455px){
  background-color: red;
  position : fixed;
  bottom : 50px;
  height:15%;
  width:  100%;
  display : flex ; 
  justify-content : center;
  
}
`
const FooterButtons = styled.div`
@media(min-width:455px){
display : flex;
background-color : black;
min-width : 448px;
height : inherit;
}
@media(max-width:455px){
width:100%;
display : flex;
background-color : black;
min-height : 15vh;
float :left;
}
`

const FootButton = styled.div`
diplay : inline;
width : 50%;
border-width: 1px;
border-color : white;
background-color:black;
color:white;
height:100%
`

const Image = styled.img`
width : 50%;
height : 100%;
`

const TransButton = styled.button`
background-color:transparent;
border-radius : 10px;
border-width : 0px
`

const StoreLink = styled.img`
width:204px;
height:56px;
border-radius : 10px
justify-content : center;
`

class App extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <div style={{minHeight:"20vh"}}></div>
        <div style={{minHeight:"10vh"}}>
        <H1>Think you can find it ?</H1>
        </div>
        <div style={{minHeight:"10vh"}}>        
        <P>
          Play using the App Website,
        </P>
        <P>
          the App is better though :-)
        </P>
        </div>
        <div style={{
          minHeight:"15vh",
          width:204,
          marginLeft:"auto",
          marginRight:"auto"
        }}>
          <TransButton><StoreLink src={Google}/></TransButton>
          <TransButton><StoreLink src={Apple}/></TransButton>
        </div>
        <div style={{minHeight:"20vh"}}></div>        
        <Foot>
          <FooterButtons>
            <Image src={button2}/>
            <Image src={button1}/>
          </FooterButtons>
        </Foot>
          <Footer/>
      </Div>
    )
  }
}

export default App;
