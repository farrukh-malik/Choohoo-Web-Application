import React, { Component } from 'react';
import MasterCard from '../../assets/mc.png'
import MasterPass from '../../assets/MasterPass.png'
import VISA from '../../assets/visa1.png'
import EFT from '../../assets/eft.png'
import PayD from '../../assets/payd.jpg'
import Background  from '../../assets/halfback.png'
import Background1  from '../../assets/rightstrip.png'
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
const Button = styled.button`
background-color:black;
width:70%;
color:white;
display:flex;
justify-content:center;
margin-right:auto;
margin-left:auto;
height:10%;
min-height:10vh
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
const Input = styled.input`

height:10%;
min-height:7vh;
border-width:0px ;
&::-webkit-input-placeholder{
    color:black;
    font-size:10px;
    width:3px
}
&:focus{outline: none;}
border:1px solid black;
width:100%;
color:black
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

class WalkThrough3 extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <Container>
        <div style={{minHeight:"10vh"}}></div>
        <P style={{fontSize:11}}>
            This hunt started on 07/07/2017 at 9.00 PM.<br/>
            The Choohoo has not yet been found.
        </P>
        <div style={{lineHeight:"8px"}}>
            <P><b>Where:</b>Randburg
        </P>
            <P><b>Type Of Hunt:</b>HOT AD
        </P>
            <P><b>Choice Of Prize:</b>HOT 91.9
        </P>
        </div>
        <div style={{
                height:"15%",
                backgroundColor:"#898989",
                minHeight:"15vh",
                width:"70%",
                marginRight:"auto",
                marginLeft:"auto"

        }}></div>
                <div style={{ lineHeight: "8px" }}>
                    <P>
                        <b>Clue Cost:</b>R50
                    </P>
                </div>

        <div style={{width:"70%",minWidth:320,marginRight:"auto",marginLeft:"auto"}}>
        <p style={{color:"#898989",fontSize:10,fontFamily:"Helvetica",textAlign:"center",marginTop:0}}>Credit Card (mastercard or VISA) or masterpass</p>
        <div
        style={{flex:1,flexDirection:"row",justifyContent:"space-between",margin:-5}}
        >
        <img src={MasterCard} style={{width:100,height:50,marginLeft:10}}/>
        <img src={VISA} style={{width:75,height:50,marginLeft:10}}/>
        <img src={MasterPass} style={{width:75,height:50,marginLeft:10}}/>
        </div>
        </div>                
        <div style={{width:"70%",minWidth:320,marginRight:"auto",marginLeft:"auto"}}>
        <p style={{color:"#898989",fontSize:10,fontFamily:"Helvetica",textAlign:"center",marginTop:0}}>EFT</p>
        <div
        style={{flex:1,flexDirection:"row",margin:-5,textAlign:"center"}}
        >
        <img src={EFT} style={{width:100,height:50}}/>
        </div>
        </div>                
        <div style={{width:"70%",minWidth:320,marginRight:"auto",marginLeft:"auto"}}>
        <p style={{color:"#898989",fontSize:10,fontFamily:"Helvetica",textAlign:"center",marginTop:0}}>Debit Card</p>
        <div
        style={{flex:1,flexDirection:"row",margin:-5,textAlign:"center"}}
        >
        <img src={PayD} style={{width:75,height:50}}/>
        </div>
        </div>                

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

export default WalkThrough3;
