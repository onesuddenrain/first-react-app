import React from 'react';
import './Bblock.css'

const Bblock = (brops) => {
    const ID = brops.ID;
    return (
        <div className='Rblock'>
          <div style={{paddingRight: '2px'}}><h3>{ID}.</h3></div>
          <div style={{width: '341'}}><h3 className='H3'>{brops.Block}</h3></div>
        </div>
    );
};

export default Bblock;