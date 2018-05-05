import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './../style/page.css'

export default class Page extends Component{
    render(){
        return (
            <div ref="page" className="page" id={this.props.id}>
                <div className="page-wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        //获得dom，创建滚动视图
        this.pageScroll = new IScroll(this.refs.page, {
            probeType: 3,
            fadeScrollbars: true,
  		    scrollbars: true,
		    bounce:false
        });
        this.pageScroll.on('beforeScrollStart', ()=>{
            this.refresh();
        });
        if(this.props.LocaMore){
            
        }
    }

    refresh(){
        this.pageScroll.refresh();
    }
}

Page.propTypes = {
    id: PropTypes.string.isRequired
}

