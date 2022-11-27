import React from 'react';
import { useParams } from 'react-router';


const Catalog = () => {
    const {category}  = useParams();
    console.log(category);
    return (
        <div>
            Catalog
        </div>
    );
}

export default Catalog;
 