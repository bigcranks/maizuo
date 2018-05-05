import React, {Component} from 'react'


import {getNowplayingList} from '../../services/moveis/MoveisServer'
import index from '../../api';
export default class Nowplaying extends Component{
    constructor(){
        super();
        this.state = {
            NowplayingList:[],
            page:1
        }
    }
    componentWillMount(){
        getNowplayingList(this.state.page)
        .then(result=>{
            console.log(result)
            this.setState({NowplayingList:result})
        })
    }
    render(){
        let {NowplayingList} =this.state
        return (
            <ul className="nowplayinglist">
                {
                    NowplayingList.map((item,index)=>{
                        return (
                            <li key={index} className="film-item clearfix">
                                <div className="film-img">
                                    <img src={item.poster.origin} />
                                </div>
                                <div className="film-desc">
                                    <div className="film-name">{item.name}
                                        <i className="iconfont icon-jiantouyou"></i>
                                        <span>{item.grade}</span>
                                    </div>
                                    <h5>{item.intro}</h5>
                                    <div className="film-counts">
                                        <span>{item.cinemaCount}</span>家影院上映
                                        <i>{item.watchCount}</i>人购票
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    addNowplayingList(){
        if(this.state.page<4){
            this.setState({page:this.state.page+1})
        }else{
            this.setState({page:1})
        }
        getNowplayingList(this.state.page)
        .then(result=>{
            this.setState({NowplayingList:[...this.state.NowplayingList,...result]})
        })
    }
}