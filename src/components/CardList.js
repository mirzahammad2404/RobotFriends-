import React from 'react';
import Card from './card';

const Cardlist = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key = {i} id={robots[i].id} name = {robots[i].name} designation = {robots[i].Designation} />;
    })
    return (
    <div>
            {cardComponent}
    </div>
    );
};
export default Cardlist;