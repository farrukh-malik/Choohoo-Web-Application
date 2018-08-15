import React, { Component } from 'react';
import Background  from '../../assets/halfback.png'
import Background1  from '../../assets/rightstrip.png'
import styled from 'styled-components';
import button1 from '../../assets/sendphoto.png'
import button2 from '../../assets/choosephoto.png'
import { Icon } from 'react-icons-kit'
import {ic_add_box} from 'react-icons-kit/md/ic_add_box'
import {ic_camera_alt} from 'react-icons-kit/md/ic_camera_alt'
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
    width:70%;
    /*
    min-width:400px;
    */
    margin-right:auto;
    margin-left:auto
}
@media(max-width:455px){
    width:80%;
    margin-right:auto;
    margin-left:auto
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
const FileButton = styled.button`
backgound-color:transparent;
border-width:0px;
&:click{
    background-color:black
};
&:focus{
    &:focus{outline: none;}
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
const Input = styled.input`

height:10%;
min-height:7vh;
border-width:0px ;
&::-webkit-input-placeholder{
    font-size:15px;
    width:3px;
    padding:2px
}
&:focus{outline: none;}
border:1px solid black;
width:98%;
color:black
`


const TransButton = styled.button`
background-color:transparent;
border-radius : 10px;
border-width : 0px
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


class WalkThrough7 extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <Container>
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
            <option value="volvo">Select your Hunt</option>
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
            <option value="volvo">Select your Clue</option>
        </Select>
        </SelectContainer>
  

        <div style={{
            width:"70%",
            marginRight:"auto",
            marginLeft:"auto",
            borderColor:"green",
            borderWidth:"2px",
            minHeight:"8vh",
            }}>
        <Input
        style={{textDecorationColor:"black",paddingLeft:10}}
        placeholder="Enter Secret Number."
        />
        </div>
            <p style={{color:"black",fontFamily:"Helvetica",width:"70%",marginRight:"auto",marginLeft:"auto"}}>
            UPLOAD IMAGE</p>
        <div style={{backgroundColor:"#898989",width:"70%",height:"10%",minHeight:"17.5vh",marginRight:"auto",marginLeft:"auto"
        ,color:"black",textAlign:"center",fontFamily:"Helvetica",lineHeight:7
    }}>
            <FileButton
            style={{backgroundColor:"transparent",borderWidth:0}}
            onClick={()=>document.getElementById('file').click()}>
            <Icon icon={ic_add_box} size={32}/>
            <Icon icon={ic_camera_alt} size={32}/>
            </FileButton>
            <input type="file" id="file" style={{display:"none"}} accept=".png,.jpg" />
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

export default WalkThrough7;
