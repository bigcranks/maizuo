import React, {Component} from 'react'

import Banner  from './../components/home/banner'
import MainTop  from './../components/home/maintop'
import MainBottom  from './../components/home/mainbottom'



export default class Home extends Component{
    render(){
        let Page = React.Page;
        const DingLine = (
            <div className="dividing-line">
                <div className="upcoming">即将上映</div>
            </div>
        )
        return (
            <Page id="home">  
                <Banner></Banner>
                <MainTop></MainTop>
                {DingLine}
                <MainBottom></MainBottom>
            </Page>
        )
    }
}