import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Radio} from 'antd';
import Header from './Header'
import Footer from './Footer'
import  styles from 'antd/lib/button/style' 
import Online from '../assets/online.svg'
const Div = styled.div`
background-color:#ECECEC
background-position : center center;
background-repeat : no-repeat;
background-attachment : fixed;
backgound-size : cover;
min-height:100%;
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
    min-width:448px;/*
    background-color:#ECECEC;*/
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
    min-width:300px;
    width:80%;
    margin-left:auto;
    margin-right:auto
  
}
`
const Row = () =>(
    <div 
    // key={index}
    style={{
        width:"100%",
        minHeight:"18vh",
        backgroundColor:"white",
        margin:5
    }}
    >
    <div style={{display:"flex",justifyContent:"space-between",width:"90%",marginRight:"auto",marginLeft:"auto",
        fontWeight:"bold",fontSize:18,color:"black"
}}>
        <span>Clue Code: AX3901575315
        </span>
    <img src={Online} width={20} height={20} color="#00FF01"/>
    </div>
    <div
    style={{
        color:"black",
        width:"90%",
        fontSize:20,
        fontFamily:"Helvetica",
        marginRight:"auto",
        marginLeft:"auto"
    }}
    >Clue: Found best match that can give you the full joy...</div>
    <div
    style={{
        color:"black",
        width:"90%",
        fontFamily:"Helvetica",
        fontSize:20,
        marginRight:"auto",
        marginLeft:"auto"
    }}
    >Purchase Date:03-10-2017</div>
    </div>

)

class HistoryReciepts extends Component {
    constructor(){
        super();
        this.state={tab:"1"}
    }
  render() {
    return (
      <Div>
        <Header/>
        <Container>
            <div style={{minHeight:"15vh"}}></div>
            <TabContainer>
        <Radio.Group value={this.state.tab} 
        onChange={(ev)=>{ev.preventDefault();this.setState({tab:ev.target.value})}}
        style={{width:"100%"}}
        >
          <Radio.Button value="1"
          style={{
              backgroundColor:this.state.tab == 1 ? "black" : "#F0F0F0",
              color:this.state.tab == 1 ? "white" : "black",
              borderColor:"black",
              width:"50%",
              borderTopLeftRadius:5,
              borderBottomLeftRadius:5   ,
              textAlign:"center"          
                                
            }}
          >Clue Codes</Radio.Button>
          <Radio.Button value="2"
                    style={{
                        backgroundColor:this.state.tab == 2 ? "black" : "#F0F0F0",
                        color:this.state.tab == 2 ? "white" : "black",
                        borderColor:"black",
                        width:"50%",
                        borderTopRightRadius:5,
                        borderBottomRightRadius:5,
                        textAlign:"center"          
                      }}          
          >Hullabaloos</Radio.Button>
        </Radio.Group>
        </TabContainer>
        <div
        style={{
            minHeight:this.state.tab == 1 ? "20vh" : "0vh",
            height:this.state.tab == 1 ? "20vh" : "0vh",
            opacity:this.state.tab == 1 ? 1 :0,
        }}
        >

        <div style={{justifyContent:"center",width:"80%",marginRight:"auto",marginLeft:"auto"}}>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        </div>
        </div>
        <div
        style={{
            minHeight:this.state.tab == 2 ? "20vh" : "0vh",
            height:this.state.tab == 2 ? "20vh" : "0vh",
            opacity:this.state.tab == 2 ? 1 :0,
        }}
        >Hullabaloos</div>
        </Container>
          <Footer/>
      </Div>
    )
  }
}

export default HistoryReciepts;
