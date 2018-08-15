import React, { Component } from 'react';
import styled from 'styled-components';
import Background1  from '../assets/rightstrip.png'
import Header from './Header'
import Footer from './Footer'
const Div = styled.div`
min-height : 500px;
background-color:#ECECEC;
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
const P = styled.p`
color:black;
font-size:20px

`

class ContactUs extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <div style={{minHeight:"20vh"}}></div>
            <P style={{textAlign:"center"}}>
                info@choohoo.world<br/>
                techprob@choohoo.world
            </P>
          <Footer/>
      </Div>
    )
  }
}

export default ContactUs;
