import React, { Component } from 'react';
import Background1  from '../../assets/rightstrip.png'
import Background  from '../../assets/halfback.png'
import styled from 'styled-components';
import button1 from '../../assets/sendphoto.png'
import button2 from '../../assets/choosephoto.png'
import Header from '../Header'
import Footer from '../Footer'
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
const Container = styled.div`
@media(min-width:455px){
    width:33.33%;
    min-height:100vh;
    min-width:448px;
    background-color:#FFFFFF;
    margin-left:auto;
    margin-right:auto;
}
@media(max-width:455px){
    background-color:#FFFFFF;
    width:100%;
    min-height:100vh;
    

}
`




const P = styled.p`
font-size:13px;
font-family:Helvetica;
display : flex;
width:20%;
min-width:300px;
margin-right:auto;
margin-left:auto;
color:#006053;
font-family:Verdana;
@media(max-width:455px){
width:100%
}
`
const Foot = styled.div`

position : fixed;
bottom : 55px;
height:100px;
min-height:65px;
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

class WalkThrough6 extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <Container>
        <div style={{minHeight:"20vh"}}></div>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        The clue will be released
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        On
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        "Date"
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        at
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        "Time"
        </p>
        <br/>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        You will recieve anotification to access 
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        The clue and any follow up tips that
        </p>
        <p style={{color:"#006053",padding:0,lineHeight:"8px",fontSize:15,fontFamily:"Helvetica",textAlign:"center"}}>
        might be available
        </p>

        </Container>
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

export default WalkThrough6;
