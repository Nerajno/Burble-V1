import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/NotFound.jpg';

const NotFoundPage = () => {
    return(
        <div>
        <img src={NotFound} alt="not found " />
        <p style={{ textAlign: "center" }}>
            <Link to="/">Yup,  Something Is Wrong.... Go Home </Link>
        </p>
    </div>
);
}

export default NotFoundPage
