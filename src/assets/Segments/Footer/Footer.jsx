import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="h2div">
                <h2>1. What is the difference between Props and State?</h2>
            </div>
            <div className="h3div">
                <h3>[-] State is mutable/changeable. On the other hand Props are immutable</h3>
                <h3>[-] State is managed within the Component. Props are passed on from one to another</h3>
                <h3>[-] State Changes can be asynchronus. Props are 'read only'</h3>
                <h3>[-] State can used to display changes with the component. Props are used to communicate between components</h3>
            </div>
            <div className="h2div">
                <h2>2. How does useState work?</h2>
            </div>
            <div className="h3div">
                <h3>[-] Importing the useState let's us keep a local state in a function component.</h3>
                <h3>
                    [-] we declare a new state variable by calling the useState Hook. It returns a
                    pair of values, to which we give names. We initialize the first variable to a default state by
                    passing an initial value as the only useState argument. The second returned item is itself a function.
                    It lets us update the First variable.
                </h3>
                <h3>[-] When the user clicks a relative fuction, we call the second variable with a new value. React will then re-render the component,
                    passing the new value to the first variable for our use.
                </h3>
            </div>

            <div className='h2div'><h2>3. What else does useEffect do except for Data Load?</h2></div>
            <div className="h3div">
                <h3>[-] When we need to use an effect that triggers only once when the component has mounted we can pass an empty array as a second argument to the useEffect hook.</h3>
                <h3>[-] When we need to use an effect that triggers only when specific props/state have been updated, we can pass those props in the second argument array. This is also useful to enhance performance (run specific logic only when a specific prop has been updated).</h3>
                <h3>[-] In case we want the effect to trigger upon any change, instead of passing an array, we don’t pass a second argument.</h3>
                <h3>[-] useEffect allows us to easily separate logic over several functions, instead of placing all the logic in a single function.</h3>
            </div>

            <div className='h2div'><h2>3. How does React work?</h2></div>
            <div className="h3div">
                <div className="h3div">
                    <h3>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                        React is a tool for building UI components.<br/>
                        [-] Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
                        <br />
                        [-] React finds out what changes have been made, and changes only what needs to be changed. You will learn the various aspects of how React does this in the rest of this tutorial.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;