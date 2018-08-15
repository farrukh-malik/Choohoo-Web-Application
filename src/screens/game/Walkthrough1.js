import React, { Component } from 'react';
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
const SelectContainer = styled.div`
@media(min-width:455px){
    min-height:7.5vh
    width:25%;
    min-width:400px;
    margin-right:auto;
    margin-left:auto
}
@media(max-width:455px){
    width:100%;
    min-height:7.5vh;
}
`

const Select = styled.select`
height:50px;
`

const P = styled.p`
display : flex;
justify-content : center 

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

class WalkThrough1 extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <div style={{minHeight:"15vh"}}></div>
        <SelectContainer>       
        <Select style={{
            backgroundColor:"black",
            color:"white",
            width:"100%",
            padding: "30",
            fontSize:"0.8em",
            margin:5
            
        }}>
            <option value="volvo">CHOOSE WHERE YOU WISH TO PLAY</option>
        </Select>
        </SelectContainer>
        <SelectContainer>       
        <Select style={{
            backgroundColor:"black",
            color:"white",
            width:"100%",
            padding: "30",
            fontSize:"0.8em",
            margin:5
            
        }}>
            <option value="volvo">CHOOSETYPE OF CHOOHOO HUNT</option>
        </Select>
        </SelectContainer>
        <SelectContainer>       
        <Select style={{
            backgroundColor:"black",
            color:"white",
            width:"100%",
            padding: "30",
            fontSize:"0.8em",
            margin:5
            
        }}>
            <option value="volvo">CHOOSE A PRIZE TO PLAY FOR</option>
        </Select>
        </SelectContainer>

        <div style={{minHeight:"20vh"}}>
        <div
                style={{
                    marginTop:20,
                    width:60,
                    height:60,
                    borderRadius:60,
                    backgroundColor:"black",
                    color:"white",
                    fontSize:40,
                    marginRight:"auto",
                    marginLeft:"auto",
                    textAlign:"center"
                }}        
        >
        ➜
        </div>
        </div>        
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

export default WalkThrough1;
