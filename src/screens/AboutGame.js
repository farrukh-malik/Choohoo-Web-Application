import React, { Component } from 'react';
import Background1  from '../assets/rightstrip.png'
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
/*  background-image: url(${Background1})*/
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
class AboutGame extends Component {
  render() {
    return (
      <Div>
        <Header/>
        <div style={{minHeight:"13vh"}}></div>
        <Container>
        <P>
            Choohoo is a mystery game.<br/>
        It is a scavanger treasure hunt of sorts....<br/>
        The purpose of the game is to crack the clue and find the Choohoo.
        </P>
        <P>
        The Choohoo is a half moon object card.It can be found in real world or virtual world.
        </P>
        <P>
        Clues lead you to locate Choohoo,when you find the Choohoo you win a prize.
        </P>
        <P>
        If you find the Choohoo, you need to send a photo of it and secret number to the game<br/>
        master for validation. The first person or group to get their Choohoo photo validated wins.
        </P>
        <P>
        There are multiple Choohoo hunts in various cities and global digital locations.
        </P>
        <P>
        All players receive notifications when the Choohoo is found, and when a new clue and hunt is released.
        </P>
        <P>
        There is only one clue per Choohoo hunt, however some clues have follow up tips.
        </P>
        <P>
        Clues are released on specific dates at specific times, this alows "hunters" to choose which<br/>
        hunt they would like to use their Clue Code for.
        </P>

        </Container>
          <Footer/>
      </Div>
    )
  }
}

export default AboutGame;
