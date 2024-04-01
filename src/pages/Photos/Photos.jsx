import React, { useEffect, useState } from 'react'
import './Photos.scss'
import axios from 'axios';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [subLoading, setSubLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setSubLoading(!subLoading);
                const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
                setPhotos([...photos, ...res.data])
                setLoading(false);
                console.log(loading);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [page])

    const handleDelete = (id) => {
        const result = photos.filter(item => item.id !== id);
        setPhotos(result);
    }

    return (
        <div className='photos container'>
            <div className="wide">
                {
                    loading ? <div className='loading'></div>
                    : 
                    <div>
                        <div className="photo-list">
                            {photos.map(photo => (
                                <div key={photo.id} className='photo-item' onClick={() => handleDelete(photo.id)}>
                                    <img src={photo.download_url} alt={photo.author} />
                                </div>
                                
                            ))}
                            {subLoading &&  <div className='loading'></div> }
                        </div>
                        <div className="btn-container">
                            <button className='btn' onClick={() => setPage(page + 1)}>Load more</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Photos