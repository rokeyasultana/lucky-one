import React from 'react';

const Faq = () => {
    return (
        <div>
            <div>
            <h1> </h1>
            </div>
            
            <h1>Props vs State</h1>
            <p>State are mutable but props are immutable. You can define states in the component itself on the other hand you can pass properties from parent components. The state is set and update by the object (view) and props determine the view upon creation, and then they remain static. Props sends data to one component to other component. And state keep data on its own component. Props makes components suitable for reuse. But states can’t makes components suitable for reuse.</p>
            <div>
            </div>
        </div>
        
    );
};

export default Faq;