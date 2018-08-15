import React , {Component} from 'react'
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {ic_menu} from 'react-icons-kit/md/ic_menu'
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from './Drawer'
const Container  = styled.div`
@media(min-width:455px){

min-width:1125px;
background-color : #707070;
border-bottom: 2px solid #006053;
height : 10%;
min-height : 50px;
position : fixed;
top : 0;
width:  100%;
display : flex;
}
@media(max-width:455px){
min-width:1125px;    
display : flex;
background-color : #707070;
position : fixed;
top : 0;
width:  100hw;    
}
`
const Div1 = styled.div`
width:15%;
background-color:#707070;
@media(max-width:455px){
background-color:#707070;
    
}
`
const Div2 = styled.div`
width:40%;
background-color:#707070;
display : flex ;
justify-content : center
@media(max-width:455px){
    width:100%    
}
`
const Div3 = styled.div`
@media(min-width:455px){
color:#006053;
width:45%;
display: flex;
background-color:#707070;
justify-content : flex-start;
line-height : 50px
}
@media(max-width:455px){
background-color:#707070;    
    overflow:hidden
}

`
const  LoginButton =styled.button`
@media(min-width:455px){
background-color:black;
color:white;
line-height:2.5em;
border-width:0px;
margin:10px;
padding-right:20px
padding-left:20px
padding-bottom:10px
}
@media(max-width:455px){
background-color:black;
color:white;
margin:10px;
border-width:0px;    
}
`
const Input = styled.input`
height:2.5em;
border-radius:5px;
width:40%;
margin:10px
`
const Button = styled.button`
background-color: transparent;
border-width:0px;
&:focus{
    &:focus{outline: none;}
}
`
class Login extends Component{
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
        const { classes } = this.props;
        return(
            <Container>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div>
                        <Drawer/>
                    </div>
                </SwipeableDrawer>
            <Div1 style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"30%"}} >
            <Button 
            onClick={this.toggleDrawer('left', true)}>
            <Icon icon={ic_menu} size={32} style={{padding:10,color:"white"}}/></Button>
                </div>
                <div style={{width:"70%",lineHeight:"2.5em",color:"white",fontSize:20,backgroundColor:"#707070",fontWeight:"bold"}}>
                    MENU
                </div>                    
            </Div1>
            <Div2>
                <Input placeholder="Email address"/>
                <Input placeholder="Password"/>
            </Div2>
            <Div3>
                <LoginButton>LOGIN</LoginButton>
                <a style={{color:"white"}}>Forgot Password?</a>
            </Div3>
            </Container>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };  
export default Login