import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer'
import Online from '../assets/online.svg'
const Div = styled.div`
min-height : 500px;
background-color:#ECECEC
background-position : center center;
background-repeat : no-repeat;
background-attachment : fixed;
backgound-size : cover;
min-height : 100vh;
vertical-align : baseline ;
margin:-0.8%;
margin-top:-1%
@media(max-width:455px){
}
`
const Container = styled.div`
@media(min-width:455px){
    width:33.33%;
    min-height:100vh;
    min-width:448px;
    background-color:#ECECEC;
    margin-left:auto;
    margin-right:auto;
}
@media(max-width:455px){
    background-color:#ECECEC;
    width:100%;
    min-height:100vh;
}
`
const TabContainer = styled.div`
@media(min-width:455px){
    width:60%;
    min-width:300px;
    margin-left:auto;
    margin-right:auto
}
@media(max-width:455px){
    width:80%;
    margin-left:auto;
    margin-right:auto
  
}
`
const Row = () =>(
    <div 
    // key={index}
    style={{
        width:"80%",
        marginRight:"auto",
        marginLeft:"auto",
        minHeight:"10vh",
        backgroundColor:"white",
        margin:5
    }}
    >
    <div style={{display:"flex",justifyContent:"space-between",width:"90%",marginRight:"auto",marginLeft:"auto",
        fontWeight:"bold",fontSize:18,color:"black"
}}>
        <span>2017-10-03
        {/* {value} */}
        </span>
    <img src={Online} width={20} height={20} color="#00FF01"/>
    </div>
    <div
    style={{
        color:"#006053",
        width:"90%",
        fontSize:20,
        // fontWeight:"bold",
        marginRight:"auto",
        marginLeft:"auto"
    }}
    >Welcome to the Choohoo Game...</div>
    </div>

)

class Notifications extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <Container>
            <div style={{minHeight:"15vh"}}></div>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        
        </Container>
          <Footer/>
      </Div>
    )
  }
}

export default Notifications;
