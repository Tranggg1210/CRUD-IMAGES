import React from 'react';
import imgNotFound from '../../assets/images/NotFoundImage.png';
import  './NotFound.scss'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <div>
                <h4>NOT FOUND</h4>
                <img src={imgNotFound} alt="" />
                <button onClick={() => navigate('/')}>Quay lại trang chủ</button>
            </div>
        </div>
    );
};

export default NotFound;