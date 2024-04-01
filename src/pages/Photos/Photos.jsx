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
                setSubLoading(false);
            } catch (error) {
                setSubLoading(true);
                console.log(error);
            } 
        })()
    }, [page])

    const handleDelete = (id) => {
        const result = photos.filter(item => item.id !== id);
        setPhotos(result);
    }

    const handleAddImage = () => {
        const urlLink = prompt("Nhập link ảnh bạn muốn thêm: ");
        let imageUrlRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
        if(!imageUrlRegex.test(urlLink))
        {
            alert("Bạn đã nhạp sai định dạng ảnh!!!")
        }else{
            setPhotos([...photos,
                {id: photos.length + 1, 
                    author: urlLink,
                    download_url: urlLink
                }])
        }
        
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
                            <button className='btn' onClick={handleAddImage}>Add images</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Photos