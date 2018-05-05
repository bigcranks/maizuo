import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'

import Nowplaying from './../components/movies/nowplaying'
import ComingSoon from './../components/movies/comingsoon'

import '../style/movies.css'

export default class Movies extends Component{
    constructor(){
        super();
        this.state = {
            MoviesNav:true
        }
    }
    render(){
        let Page = React.Page;
        let {MoviesNav} = this.state;
        return (
            <Page id="movies" Updata={this.updata.bind(this)} LocaMore={true}>
                <div className="movies-wrap clearfix">
                    <nav className="movies-nav">
                        <Link to="/movies/nowplaying"
                        onClick={this.MoviesNavbtn.bind(this)} 
                        className={MoviesNav?"choosing":""}>正在热映</Link>
                        <Link to="/movies/comingsoon"
                        onClick={this.MoviesNavbtn.bind(this)}
                        className={MoviesNav?"":"choosing"}>即将上映</Link>
                    </nav>
                    <Route path="/movies" exact render={()=>{
                    return <Redirect to="/movies/nowplaying"/>
                    }}/>
                    <Route path="/movies/nowplaying" component={Nowplaying}
                        ref="nowplaying"
                    />
                    <Route path="/movies/comingsoon" component={ComingSoon}/>
                </div>
            </Page>
        )
    }
    MoviesNavbtn(){
        this.state.MoviesNav = !this.state.MoviesNav
    }
    updata(){
        this.refs.nowplaying.addNowplayingList();
    }
}