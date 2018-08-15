import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

class Drawer extends Component{
    render(){
        return(
            <div>
                <ul>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/aboutgame">About Game</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/prizewinners">Prize Winners</Link></li>
                <li><Link to="/historyreceipts">History & Receipts</Link></li>
                <li><Link to="/partnerresellers">Partners & Resellers</Link></li>
                <li><Link to="/legal">Legal v1.0</Link></li>
                </ul>
            </div>
        )
    }
}
export default Drawer