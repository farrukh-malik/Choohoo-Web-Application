import React, { Component } from 'react';
import styled from 'styled-components';
import left from '../assets/aboutGame.svg'
import right from '../assets/rightstrip1.svg'
import Login from './Login';
const Div1 = styled.div`
@media(min-width:455px){

min-width:33.33%}
@media(max-width:455px){
    min-width:0px
}
`

const DivMid = styled.div`
@media(min-width:455px){
width: 100%;
min-width:448px;
background-color:#EAEBEF;
min-height : 100vh;

}
@media(max-width:455px){
    min-width:100%;
    background-color:#EAEBEF    
}
`
const Container = styled.div`
@media(min-width:455px){
min-width:1124px;
}
@media(max-width:455px){
}
`

const Input = styled.input`
&::-webkit-input-placeholder{
padding-left:5px;
}
height : 2.5em;
margin-right:10px;
margin-left:10px;
margin-top:5px;
margin-bottom:5px;
border-radius:4px;
border-style:solid;
border:none;
border-width:1px;
border:1px solid #9E9D9D;
&::-webkit-inner-spin-button{
    opacity:1; // magic!
  } 
` 

class SignUp extends Component{
    render(){
        return(
            <div>
                <div style={{minHeight:"10vh"}}></div>
                <div style={{width:"90%",marginRight:"auto",marginLeft:"auto"}}>
                <p
                style={{color:"black",fontSize:"2em",fontFamily:"Helvetica",textAlign:"center"}}
                >To play,Simply signup {"&"} tryout</p>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"45%"}} placeholder="First name*"/>
                    <Input style={{width:"45%"}} placeholder="Surname*"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="Email Address*"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="Type email Address to confirm*"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="New Password*"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="Type new password again to confrim*"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="Mobile number"/>
                </div>
                <div style={{Width:"100%"}}>
                    <Input style={{width:"95%"}} placeholder="Country*"/>
                </div>
                <h2 style={{margin:"7px"}}>
                    Birthday
                </h2>
                <div style={{Width:"100%"}}>
                <Input type="number" min={1} max={31} defaultValue={1}/>
                <select style={
                    {borderWidth:"1px",
                     borderColor:"#9E9D9D",
                     height:"2.5em",
                     margin:"7px"
                    } 
                }>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
                <Input type="number" min={1900} max={new Date().getUTCFullYear()} defaultValue={new Date().getUTCFullYear()}/>                
                </div>
                <div style={{Width:"100%"}}>
                    <form style={{width:"95%",margin:"7px"}}>

                        <input type="radio" id="male" name="gender" checked />
                        <label style={{padding:3,margin:5,color:"black",fontSize:20}} for="male">Male</label>

                        <input type="radio" id="female" name="gender" checked />
                        <label style={{padding:3,margin:5,color:"black",fontSize:20}} for="huey">Female</label>

                        <input type="radio" id="non" name="gender" />
                        <label style={{padding:3,margin:5,color:"black",fontSize:20}} for="non">Non binary</label>
                    </form>
                </div>                
                <div style={{width:"95%",marginRight:"auto",marginLeft:"auto",lineHeight:"1.2em",fontSize:14}}>
                By clicking SIGNUP {"&"} TRYOUT ,you agree to our Terms,and confirm you hace read 
                our End User Liscense Agreement including our Privacy Policy ,You may recieve 
                notifications from Choohoo and can opt out at any time    
                </div>
                <button
                style={{backgroundColor:"black",width:"50%",margin:"7px",height:"4em",color:"white"}}
                >
                    SIGNUP {"&"} TRYOUT
                </button>
            </div>
        )
    }
}
class Auth extends Component {
  render() {
    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "row" }}>            
            <Login/>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Div1>
                <img src={left}   width={"100%"}/>
                </Div1>
                <DivMid>
                <SignUp/>
                </DivMid>
                <Div1 onClick={(ev)=>{console.log(ev.nativeEvent.screenX,ev.nativeEvent.screenY)}}>
                <img src={right}  width={"100%"}/>
                </Div1>
            </div>
        </Container>
    )
  }
}

export default Auth;
