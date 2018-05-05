import React, {Component} from 'react'
import '../../style/homebanner.css'

import {getBannerList} from '../../services/home/HomeServer'
export default class Banner extends Component{
    constructor(){
        super();
        this.state = {
            BannerList:[]
        }    
    }
    componentWillMount (){
        getBannerList()
        .then(result=>{
            this.setState({BannerList:result})
            this.aswiper.init()
        })
    }
    render(){
        let {BannerList} = this.state;
        return (
            <div className="swiper-container" ref="swipercontainer">
                <div className="swiper-wrapper">
                    {
                        BannerList.map((item,index)=>{
                            return (
                                <div className="swiper-slide banner" key={index}>
                                    <img src={item.imageUrl} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.aswiper = new Swiper(this.refs.swipercontainer,{
            loop:true,
            autoplay:3000,
            observer:true
        }) 
    }
}