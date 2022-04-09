import React from 'react';
import {TYPE_TRADUCTION, TYPE_TRIGGER} from '../../../../../models/enum';
import ReactTooltip from 'react-tooltip';
import GameSynergyDetail from './game-synergy-detail';

export default function GameSynergy(props:{type: string, isFirst: boolean, value: number}) {
    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: props.value >= TYPE_TRIGGER[props.type][0] ? 'rgba(255,255,255,1)': 'rgba(255,255,255,0)',
        marginBottom: '5px',
        padding:'5px',
        cursor:`url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0, pointer`
    }}
    data-tip
    data-for={'detail-' + props.type}
    >
    <ReactTooltip id={'detail-' + props.type} 
    className='customeTheme' 
    textColor='#000000' 
    backgroundColor='rgba(255,255,255,1)' 
    effect='solid'
    place='right'
    offset={{bottom: props.isFirst ? 100: 0}}>
        <GameSynergyDetail type={props.type} value={props.value}/>
    </ReactTooltip>

        <img style={{
            height:'40px',
            width:'40px'
        }}
        src={'assets/types/' + props.type + '.png'}/>
        <h4>{props.value}</h4>
        <div style={{
            display:'flex',
             flexFlow:'column'}}>
            <div style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
                {TYPE_TRIGGER[props.type].map(t=>{
                    return <span key={t} style={{color: props.value >= t ? '#000000': '#808080'}}>
                        {t} 
                        </span>;
                })}
            </div>
            <p style={{margin:'0px'}}>{TYPE_TRADUCTION[props.type]['eng']}</p>
        </div>
    </div>
}