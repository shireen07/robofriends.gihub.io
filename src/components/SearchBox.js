import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input type='search' 
            placeholder='Search robots..' 
            className='pa3 ba b--green bg-lightest-blue'
            onChange= {searchChange} /> {/*event listener for anytime the input changes*/}
        </div>
    );
}

export default SearchBox;