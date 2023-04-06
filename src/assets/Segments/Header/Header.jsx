import React from 'react';
import './Header.css';

import Ning from '../../img/Ningguang.png';
import Shen from '../../img/Shenha.png';
import Venti from '../../img/Venti.png';

const Header = () => {
    return (
        <div className='header'>
            <h1 style={{fontSize: '40px'}}>Kafenio tis Gnosis</h1>
            <div className='rightwing'>
                <img src={Shen} alt="" class='profimg'/>
                <img src={Ning} alt="" class='profimg'/>
                <img src={Venti} alt="" class='profimg'/>
            </div>
        </div>
    );
};

export default Header;