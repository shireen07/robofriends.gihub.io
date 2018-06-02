import React from 'react';

/*Not a self closing component. it wraps other components to create a scrollable effect. So scroll becomes the parent and the 
components that it wants to scroll become its children. important concept*/
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border:'3px solid black', height: '525px' }} >
            {props.children}
        </div>
    );
}

export default Scroll;