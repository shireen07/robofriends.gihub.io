import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardsArray = robots.map((user, i) => {
        return(
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} />
            );
    });
    return (
         <div>
             {/*calls the array that iterates trhough all the robots in robot.js and displays. use map for loop
               You can even remove the const cardsArray and just paste the code in here and it will work the same*/}
             { cardsArray }
         </div>
    );
}

export default CardList;