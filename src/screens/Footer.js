import React ,{Component} from 'react';
import styled from 'styled-components';

const Container  = styled.div`
position:fixed;
bottom : 0;
background-color : #C2C2C2;
width:100%;
min-width:100hw;
height:10%;
min-height:50px;
margin-left:auto;
margin-right:auto
`
const P = styled.p`
width:33%;
margin-top:15px
margin-bottom:15px;
font-family:Verdana;
font-size:1em;
display:flex;
min-width:448px;
line-height:0.75em;
margin-left:auto;
margin-right:auto
juatify-content :center;
font-stretch:condensed;
@media(max-width:455px){
width:100%;
display:flex;
justify-content:flex-start;
font-size:0.75em
}
`
class Footer extends Component{
    render(){
        return(
            <Container>
            <P style={{paddingTop:2,justifyContent:"center"}}>
                Copyright © Choohoo 2017. All rights reserved.
            </P>
            <P style={{justifyContent:"center"}}>            
                Cape Town,South Africa
            </P>
            </Container>
        )
    }
}
export default Footer