import React, { Component } from 'react';
import styled from 'styled-components';
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
}
`
const Container =styled.div`
width:80%;
margin-right:auto;
margin-left:auto
@media(max-width:455px){
    width:100%;
}
`
const P = styled.p`
color:#006053;
font-family:Helvetica;
font-size:20px
@media(max-width:455px){
    font-size:14
    
}
`
class AboutUs extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <div style={{minHeight:"13vh"}}></div>
        <Container>
        <P>
        Once upon a time during a balmy Cape Town twilight...KG had an idea.KG has many ideas.<br/>
        He wrestles with ideas night and day...until it ticks all the boxes

        </P>
        <P>
        One day he called WL with an idea... WL himself was also an idea-wrestler. WL agreed with<br/> 
        great gusto and proceeded to further build upon the idea.
        </P>
        <P>
        KG and WL put the plan together and Choo'd their Hoo.
        </P>
        <P>
        After designing and developing Choohoo... they searched South Africa... and then the world...<br/> 
        and then to their inspiration, from a land Shona they eventually found a programmer and <br/>
        rendered his services
        to construct the App. His name is DW. DW is also a man of vision.
        </P>
        <P>
        The moon shone bright, the sun did rise and a dog barked at something that rustled under the <br/> leaves.
        </P>
        <P>
        To this day KG and WL continue to Choo their Hoo.
        </P>

        </Container>
          <Footer/>
      </Div>
    )
  }
}

export default AboutUs;
