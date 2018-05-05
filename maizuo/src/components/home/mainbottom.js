import React, {Component} from 'react'
import '../../style/home-maintop.css'

import {getMainBottomList} from '../../services/home/HomeServer'
export default class MainBottom extends Component{
    constructor(){
        super();
        this.state = {
            MainBottomList:[]
        }    
    }
    componentWillMount (){
        getMainBottomList()
        .then(result=>{
            this.setState({MainBottomList:result})
        })
    }
    render(){
        let {MainBottomList} = this.state
        return (
            
            <div className="home-maintop clearfix">
               {
                   MainBottomList.map((item,index)=>{
                        return (
                            <div className="main-item" key={index}>
                                <img src={item.cover.origin} />
                                <div className="bmain-title  clearfix">
                                    <div className="main-title-t">
                                        <i>{item.name}</i>
                                    </div>
                                    <div className="main-title-b">
                                        {item.premiereAt}上映
                                    </div>
                                </div>
                            </div>
                        )
                   })
               }
               <div className="more-button">更多即将上映电影</div>
            </div>
        )
    }

}