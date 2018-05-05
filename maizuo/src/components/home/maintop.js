import React, {Component} from 'react'
import '../../style/home-maintop.css'

import {getMainTopList} from '../../services/home/HomeServer'
export default class MainTop extends Component{
    constructor(){
        super();
        this.state = {
            MainTopList:[]
        }    
    }
    componentWillMount (){
        getMainTopList()
        .then(result=>{
            this.setState({MainTopList:result})
        })
    }
    render(){
        let {MainTopList} = this.state
        return (
            <div className="home-maintop clearfix">
               {
                   MainTopList.map((item,index)=>{
                        return (
                            <div className="main-item" key={index}>
                                <img src={item.cover.origin} />
                                <div className="main-title  clearfix">
                                    <div className="main-title-l">
                                        <i>{item.name}</i>
                                        <br />
                                        <span>
                                            {item.cinemaCount}家影院上映  {item.watchCount}人购票
                                        </span>
                                    </div>
                                    <div className="main-title-f">
                                        {item.grade}
                                    </div>
                                </div>
                            </div>
                        )
                   })
               }
               <div className="more-button">更多热映电影</div>
            </div>
        )
    }

}