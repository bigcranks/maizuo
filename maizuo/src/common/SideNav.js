import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './../style/SideNav.css'



export default class SideNav extends Component{
    constructor(){
        super();
        this.state = {
            navData: [
                {name:'首页', path:'/home'},
                {name:'影片', path:'/movies'},
                {name:'影院', path:'/cinema'},
                {name:'商城', path:'/shopping'},
                {name:'我的', path:'/mine'},
                {name:'卖座卡', path:'/salescard'}
            ]
        }
    }
    render(){
        let {navData} = this.state;
        let navClass = 'side-wrap'+(this.props.isActive?' active':'');
        return (
            <div className={navClass}>
                <ul className="sidenav" onClick={this.changePage.bind(this)}>
                    {
                        navData.map((item, index)=>{
                            return (
                                <li className="nav-item"  key={index}>
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                    <span className="iconfont icon-jiantouyou"></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    changePage(){
        this.props.onChange();
    }

}

SideNav.propTypes = {
    isActive: PropTypes.bool.isRequired
}