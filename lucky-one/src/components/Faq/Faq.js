import React from 'react';
import'./Faq.css';

const Faq = () => {
    return (
        <div className='faq'>
            <div>
            <h2>How reacts works  </h2>
            <p>React divides the UI into multiple components, which makes the code easier to debug, and each component has its own property and function. React is one-way data binding and it keeps everything modular fast. React keeps a lightweight representation of the Real DOM in the memory, and that is known as the Virtual DOM. JSX is a syntax extension to java Scripts .It is used with react to describe what the user interface should look like. By using JSX, you can write HTML structures in the same file that contains JavaScript code.</p>
            </div>
            <div>
            <h2>Props vs State</h2>
            <p>State are mutable but props are immutable. You can define states in the component itself on the other hand you can pass properties from parent components. The state is set and update by the object (view) and props determine the view upon creation, and then they remain static. Props sends data to one component to other component. And state keep data on its own component. Props makes components suitable for reuse. But states can’t makes components suitable for reuse.</p>
            
            </div>
        </div>
        
    );
};

export default Faq;