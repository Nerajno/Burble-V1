import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from "../../../api/tmdbApi";
import apiConfig from '../../../api/apiConfig';

const CastList = props => {
    const  { category } = useParams();

    const [ casts, setCasts] = useState([]);

    return (
        <div>
            
        </div>
    )

}

export default CastList;
