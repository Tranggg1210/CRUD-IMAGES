import React, { useEffect, useState } from 'react'
import './Blogs.scss'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'

function Blogs() {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogUpdate, setBlogUpdate] = useState({});

  const handleBlogsWhenAdd = value => {
    setBlogs([...blogs, {
        id: blogs.length,
        ...value
    }]);
  }
  const handleBlogsWhenUpdate = value => {
    blogs[value.id] = value;
  }

  // Hàm lấy blog cần sửa
  const getBlogNeedUpdate = (id) => {
    setBlogUpdate({...blogs.find(blog => blog.id === id)})
    setShowModal(true);
  }

  // Hàm xóa blog
  const handleDeleteBlogs = id => {
    setBlogs(blogs.filter(blog => blog.id !== id ))
  }
  return (
    <div>
        <Header/>
        <div className='blogs container'>
            <div className="wide">
                <div className="flex-sb">
                    <h1>Quản lý blogs</h1>
                    <button className='btn btn-create' onClick={() => setShowModal(true)}>Thêm mới</button>
                </div>
                <Modal 
                    showModal={showModal} 
                    setShowModal={setShowModal}
                    blogUpdate={blogUpdate}
                    handleBlogsWhenAdd={handleBlogsWhenAdd}
                    handleBlogsWhenUpdate={handleBlogsWhenUpdate}
                />
                <div className="blog-list">
                    <table>
                        <tbody>
                            <tr>
                                <th className='td-numerical-order'>STT</th>
                                <th>Ảnh</th>
                                <th>Tên blog</th>
                                <th>Mô tả</th>
                                <th>Action</th>
                            </tr>
                            {
                                blogs.length > 0 ? blogs.map((blog, index) => (
                                    <tr key={index}>
                                        <td className='td-numerical-order'>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <img className='blog-image' src={blog.image} alt="" />
                                        </td>
                                        <td>
                                            {blog.name}
                                        </td>
                                        <td>
                                            {blog.desc}
                                        </td>
                                        <td className='td-action'>
                                            <button className='btn btn-update' onClick={() => getBlogNeedUpdate(blog.id)}>update</button>
                                            <button className='btn btn-delete' onClick={() => handleDeleteBlogs(blog.id)}>delete</button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan={5}>Không có dữ liệu</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs
