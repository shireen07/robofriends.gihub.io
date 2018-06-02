import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}?180x180`} alt='robots'/> {/*the website gives u a randomrobotwhen u typea name. test?Height x Width gives u a robot*/}
            <div>
                <h2>{ props.name }</h2>
                <p>{ props.email }</p>
            </div>
        </div>
    );
}

export default Card;