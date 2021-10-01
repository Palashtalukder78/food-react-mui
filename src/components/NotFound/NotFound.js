import React from 'react';
import './NotFound.css';
import noResult from '../../images/no-result-found.jpg'
const NotFound = () => {
    return (
        <div class="notfound">
            <img src={noResult} alt="" />
        </div>
    );
};

export default NotFound;