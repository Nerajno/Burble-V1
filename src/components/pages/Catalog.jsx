import React from 'react';
import { useParams } from 'react-router';
import PageHeader from '../page-header/PageHeader';
import {category  as cate} from '../../api/tmdbApi' 

const Catalog = () => {
    const {category}  = useParams();
    console.log(category);
    return (
        <>
        <PageHeader>
            {category === cate.movie ? 'Movies' : 'TV Series' }
        </PageHeader>
        </>
    );
}

export default Catalog;
 