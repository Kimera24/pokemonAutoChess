import React, { Component } from 'react';
import Elo from './elo';
import {CDN_PORTRAIT_URL} from '../../../../types';

class Avatar extends Component{
    render(){

        const elo = this.props.elo ? <Elo elo={this.props.elo}/>: null;

        return <div style={{
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            flexFlow:'column'
            }}>
            <img src={`${CDN_PORTRAIT_URL}${this.props.avatar}.png`}/>
            <p style={{margin:'0px'}}>{this.props.name}</p>
            {elo}
        </div>;
    }
}

export default Avatar;