import React, {Component} from 'react'
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Movies from './pages/Movies'
import Cinema from './pages/Cinema'
import Shopping from './pages/Shopping'
import Mine from './pages/Mine'
import SalesCard from './pages/SalesCard'

import AppHeader from './common/AppHeader'
import SideNav from './common/SideNav'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            showSideNav: false
        }
    }
    render(){
        let {showSideNav} = this.state;
        return (
            <Router>
            <div id="wrap">
                <AppHeader MenuTap={this.handleSideNav.bind(this)}></AppHeader>
                <SideNav onChange={this.handleSideNav.bind(this)} isActive={showSideNav}></SideNav>
                <Route path="/" exact render={()=>{
                    return <Redirect to="/home"/>
                }}/>
                <Route path="/home" component={Home}/>
                <Route path="/movies" component={Movies}/>
                <Route path="/cinema" component={Cinema}/>
                <Route path="/shopping" component={Shopping}/>
                <Route path="/mine" component={Mine}/>
                <Route path="/salecard" component={SalesCard}/>
            </div>
            </Router>
        )
    }
    handleSideNav(){
        this.setState({showSideNav: !this.state.showSideNav});
    }
}