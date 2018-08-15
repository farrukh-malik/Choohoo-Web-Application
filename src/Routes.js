import React ,{Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Profile from './screens/Profile'
import HistoryReceipts from './screens/HistoryReceipts'
import Legal from './screens/Legal'
import Notifications from './screens/Notifications'
import AboutGame from './screens/AboutGame'
import AboutUs from './screens/AboutUs'
import ContactUs from './screens/ContactUs'
import PartnersResellers from './screens/PartnersResellers'
import PrizeWinners from './screens/PrizeWinners'
import WalkThrough1 from './screens/game/Walkthrough1'
import WalkThrough2 from './screens/game/Walkthrough2'
import WalkThrough3 from './screens/game/Walkthrough3'
import WalkThrough4 from './screens/game/Walkthrough4'
import WalkThrough5 from './screens/game/Walkthrough5'
import WalkThrough6 from './screens/game/Walkthrough6'
import WalkThrough7 from './screens/game/Walkthrough7'
import WalkThrough8 from './screens/game/Walkthrough8'
import Auth  from './screens/auth'
class Routes extends Component{
    render(){
        return(
            <Router>
            <div>
                <Route exact path='/' component={Auth}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/1' component={WalkThrough1}/>
                <Route exact path='/2' component={WalkThrough2}/>
                <Route exact path='/3' component={WalkThrough3}/>
                <Route exact path='/4' component={WalkThrough4}/>
                <Route exact path='/5' component={WalkThrough5}/>
                <Route exact path='/6' component={WalkThrough6}/>
                <Route exact path='/7' component={WalkThrough7}/>
                <Route exact path='/8' component={WalkThrough8}/>
                <Route exact path='/aboutus' component={AboutUs}/>
                <Route exact path='/aboutgame' component={AboutGame}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/legal' component={Legal}/>
                <Route exact path='/prizewinners' component={PrizeWinners}/>
                <Route exact path='/historyreceipts' component={HistoryReceipts}/>
                <Route exact path='/partnerresellers' component={[PartnersResellers]}/>
                <Route exact path='/notifications' component={Notifications}/>
                <Route exact path='/contactus' component={ContactUs}/>

                {/* <Route exact path='/' component={Dashboard}/>
                <Route exact path='/' component={Dashboard}/> */}
            </div>
            </Router>
        )
    }
}
export default Routes