import React,{Component} from 'react'

import './../style/app-header.css'

export default class APPHeader extends Component {
    render(){
        return (
            <header className="app-header">
                <div className="header-span" onClick={this.headerBtnAction.bind(this)}><span className="iconfont icon-liebiao"></span></div>
                <span className="header-title">卖座电影</span>
                <div className="header-right">
                    <i>深圳</i>
                    <span className="iconfont icon-jiantouxia"></span>
                    <span className="iconfont icon-wode"></span>
                </div>
            </header>
        )
    }
    
    headerBtnAction(){
        this.props.MenuTap();
    }
}