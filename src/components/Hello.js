import React from 'react';

const Hello = () => {
    // return (
    //     <div className='dummyName'>
    //         <h1>Hello Melanie</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Melanie'));
}

export default Hello;