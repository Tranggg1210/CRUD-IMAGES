import React, { useEffect, useState } from 'react'
import './Photos.scss'

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(2);


    useEffect(() => {
        (async () => {
            await fetch(`https://picsum.photos/v2/list?page=${page}&limit=8`)
                .then(data => data.json())
                .then(photoList => setPhotos([...photos, ...photoList]))
                .catch(e => console.log(e))
        })()
    }, [page])

    return (
        <div className='photos container'>
            <div className="wide">
                <div className="photo-list">
                    {photos.length > 0 && photos.map(photo => (
                        <div key={photo.id} className='photo-item'>
                            <img src={photo.download_url} alt={photo.author} />
                        </div>
                    ))}
                </div>
                <div className="btn-container">
                    <button className='btn' onClick={() => setPage(page + 1)}>Load more</button>
                </div>
            </div>
        </div>
    )
}

export default Photos