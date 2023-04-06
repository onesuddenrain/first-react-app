import React from 'react';
import './CardBlock.css';
import Bicon from '../../img/ribbon.png'

const CardBlock = (props) => {

    const {id, cover, author, tags, description, time} = props.Block;
    const Duration = props.Duration;
    const Bookmark = props.Bookmark;

    return (
        <div className='cardblock'>
            <div>
            <img src={cover} alt="" className='cover'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className='profile'>
                    <img src={author.pimg} alt="" className='profimg'/>
                    <h3>{author.name}</h3>
                </div>
                <h3>{time} min Read <button onClick={() => Bookmark(description)} id='Book' className='btn'><img src={Bicon} alt="" style={{width: '24px', height: '24px'}}/></button></h3>
            </div>
            <h1 style={{fontSize: '40px', width: '845px'}}>{description}</h1>
            <h3><button onClick={() => Duration(time)} className='btn'><a style={{textDecoration: 'underline', color: 'rgba(96, 71, 236, 1)'}}>Mark as Read</a></button></h3>
        </div>
    );
};



export default CardBlock;

