import React, { Component } from 'react';
import { Button, Radio} from 'antd';
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer'
import styles from 'antd/lib/button/style'
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


class PartnersResellers extends Component {
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
              backgroundColor:this.state.tab == 1 ? "black" : "#ECECEC",
              color:this.state.tab == 1 ? "white" : "black",
              borderColor:"black",
              width:"50%",
              borderTopLeftRadius:5,
              borderBottomLeftRadius:5   ,
              textAlign:"center"          
                                
            }}
          >Resellers</Radio.Button>
          <Radio.Button value="2"
                    style={{
                        backgroundColor:this.state.tab == 2 ? "black" : "#ECECEC",
                        color:this.state.tab == 2 ? "white" : "black",
                        borderColor:"black",
                        width:"50%",
                        borderTopRightRadius:5,
                        borderBottomRightRadius:5,
                        textAlign:"center"          
                      }}          
          >Partners</Radio.Button>
        </Radio.Group>
        </TabContainer>
        <div
        style={{
            minHeight:this.state.tab == 1 ? "20vh" : "0vh",
            height:this.state.tab == 1 ? "20vh" : "0vh",
            opacity:this.state.tab == 1 ? 1 :0,
        }}
        >
        <div style={{color:"#006053",fontSize:16,fontFamily:"Helvetica",width:"70%",marginLeft:"auto",marginRight:"auto"}}>
        <br/>
        <br/>
        <div style={{textAlign:"center",fontSize:18}}>Become s Reseller</div>
        <br/>
        To find out how you can become a Choohoo Reseller please email 
        <span style={{color:"black"}}>{" "}info@choohoo.world</span>
        <br/>
        <br/>
        <div style={{textAlign:"center",fontSize:18}}>Reseller</div>        
        <br/>
        You can purchase Choohoo Clue Codes <br/>here
        <br/>
        <br/>
        Pick n Pay, Cavendish,Cape Town
        <br/>
        <br/>
        The Barron,Midrand, Gauteng
        <br/>
        <br/>
        The Village DVD, Harfield Village, Cape <br/>Town
        <br/>
        <br/>
        ...                               
        </div>
        </div>
        <div
        style={{
            minHeight:this.state.tab == 2 ? "20vh" : "0vh",
            height:this.state.tab == 2 ? "20vh" : "0vh",
            opacity:this.state.tab == 2 ? 1 :0,
        }}
        >Logout</div>
        </Container>
          <Footer/>
      </Div>
    )
  }
}

export default PartnersResellers;
