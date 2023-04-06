import React, { useEffect, useState } from 'react';
import './Content.css';
import CardBlock from '../CardBlock/CardBlock';
import Bblock from '../Bblock/Bblock';
let X = 0;

const Content = () => {

    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);

    const [time, setTime] = useState(0);
    const Duration = (Time) => {
        X = parseInt(Time);
        setTime(previousState =>{
            previousState += X;
            return previousState;
        });
    };

    const [Books, setBooks] = useState([]);
    const Bookmark = (Title) => {
        const newBook = [...Books, Title];
        setBooks(newBook);
    };

    return (
        <div className='Content'>
            
            <div className='card-container'>
            {
                    cards.map(Block => <CardBlock
                    key = {Block.id}
                    Block = {Block}
                    Duration = {Duration}
                    Bookmark = {Bookmark}
                    >
                    </CardBlock>)
            }
            </div>
            <div className='ContentB'>
                <div id='Rtime'>
                    <h2>Spent time reading : {time}  min</h2>
                </div>
                <div id='Rblog'>
                    <div style={{width: '351px', textAlign: 'left'}}>
                        <h2>Bookmark Blogs: {Books.length}</h2>
                    </div>
                    <div className='DispRes'>
                        {
                            Books.map((Block,Y) => <Bblock
                            Block = {Block}
                            ID = {Y+1}
                            >
                            </Bblock>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Content;