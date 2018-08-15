import React , {Component} from 'react'
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {ic_menu} from 'react-icons-kit/md/ic_menu'
import Choohoo from '../assets/choohooLogo.png'
import Drawer from './Drawer'
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Button = styled.button`
background-color: transparent;
border-width:0px;
&:focus{
    &:focus{outline: none;}
}
`

const Container  = styled.div`
background-color : #FFFFFF;
border-bottom: 2px solid #006053;
height : 10%;
min-height : 50px;
position : fixed;
top : 0;
width:  100%;
display : flex;
@media(max-width:455px){
    display : flex;
}

`
const Logo = styled.img`
width:95px;
height:42px;
justify-content : center
`

const ParentDiv = styled.div`
@media(min-width:455px){
min-height : 100px;
height:10%;
}
@media(min-width:455px){

}
`

const Div1 = styled.div`
width:33.33%;
@media(max-width:455px){
min-height : 35px;
height : 8%;
min-width : 30%;
}
`

const Div2 = styled.div`
width:33.33%;
min-width : 300px;
display : flex ;
justify-content : center
@media(max-width:455px){
    min-height : 35px;
    min-width : 70%;    
    height : 8%;
    diaplay : flex
    justify-content : flex-start
}
`

const Div3 = styled.div`
color:#006053;
width:33.33%;
display: flex
justify-content : center;
line-height : 50px
@media(max-width:455px){
/*    min-height : 15px;
    min-width : 100%;    
    hight : 2%;
    width:100%;
    diaplay : flex;
    justify-content : center;
    font-size:5em*/
    overflow:hidden
}

`
const Div4 = styled.div`
@media(min-width:455px){
overflow:hidden;
width : 0px;
background-color : blue
}
@media(max-width:455px){
display : flex;
justify-content : center;
width:100%;
background-color : cyan
height:14px;
margin-top : 35px
}
`
class Header extends Component{
    constructor(){
        super();
        this.state = {
          left: false,
        };
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    render(){
        return(
            <Container>
            <Div1>
            <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div>
                        <Drawer/>
                    </div>
                </SwipeableDrawer>
                <Button 
            onClick={this.toggleDrawer('left', true)}>                
            <Icon icon={ic_menu} size={32} style={{padding:10}}/>
            </Button>
            </Div1>
            <Div2>
                <Logo src = {Choohoo}/>
            </Div2>
            <Div3>Hello Karlind</Div3>
            <Div4>Hello Karlind</Div4>
            </Container>
        )
    }
}
export default Header