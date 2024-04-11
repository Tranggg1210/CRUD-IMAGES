import React, { useEffect, useState } from 'react'
import './Modal.scss'
function Modal({
    showModal, 
    setShowModal, 
    blogUpdate,
    handleBlogsWhenAdd,
    handleBlogsWhenUpdate
}) {

    // Khai báo state
    const [formData, setFormData] = useState({image: '', name: '', desc: ''});

    useEffect(() => {
        Object.keys(blogUpdate).length > 0 && setFormData(blogUpdate);
    },[blogUpdate])

    // Xử lý sự kiện onChange
    const handleInputValueChange = (e) => {
        const newData = {
            ...formData,
            [e.target.id]: e.target.value
        }
        setFormData(newData);
    };

    // Hàm add blogs
    const handleAddBlog = (e) => {
        e.preventDefault();
        const { image, name, desc } = formData;
        if(image.trim() === '')
            alert("Bạn chưa nhập ảnh blogs");
        else if(!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(image))
            alert("Bạn đã nhập sai định dạng ảnh!!!");
        else if(name.trim() === '')
            alert("Bạn chưa nhập tên blogs");
        else if(desc.trim() === '')
            alert("Bạn chưa nhập mô tả của blogs");
        else{
            handleBlogsWhenAdd(formData);
            setTimeout(() => {
                setFormData({
                    image: '',
                    name: '',
                    desc: ''
                });
                setShowModal(false)
            },800)
        }
    };

    // Hàm update blogs
    const handleUpdateBlog = (e) => {
        e.preventDefault();
        const { image, name, desc } = formData;
        if(image.trim() === '')
            alert("Bạn chưa nhập ảnh blogs");
        else if(!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(image))
            alert("Bạn đã nhập sai định dạng ảnh!!!");
        else if(name.trim() === '')
            alert("Bạn chưa nhập tên blogs");
        else if(desc.trim() === '')
            alert("Bạn chưa nhập mô tả của blogs");
        else{
            handleBlogsWhenUpdate(formData);
            setTimeout(() => {
                setFormData({
                    image: '',
                    name: '',
                    desc: ''
                });
                setShowModal(false)
            },800)
        }
    }; 
    
  return (
    <>
        {
            showModal && 
            <div className='modal'>
                <form className="modal-form">
                    <div className="modal-close" onClick={() => setShowModal(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="form-item">
                        <label htmlFor="image">Ảnh blogs<span>*</span> </label>
                        <input type="text" name="" id="image" value={formData.image} onChange={e => handleInputValueChange(e)}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">Tên blogs<span>*</span> </label>
                        <input type="text" name="" id="name" value={formData.name}
                           onChange={e => handleInputValueChange(e)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="desc">Mô tả<span>*</span> </label>
                        <input type="text" name="" id="desc" value={formData.desc}
                            onChange={e => handleInputValueChange(e)} />
                    </div>
                    <div className="btn-container">
                        <button className='btn btn-cancel' onClick={() => setShowModal(false)}>Hủy</button>
                        <button className='btn' onClick={e => handleAddBlog(e)}>Thêm mới</button>
                        <button className='btn' onClick={e => handleUpdateBlog(e)}>Sửa</button>
                    </div>
                    
                </form>
            </div>
        }
    </>
  )
}

export default Modal
