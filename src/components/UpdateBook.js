import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBookComponent = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    Bookname: '',
    desc: '',
    author: '',
    image: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    console.log("working");
    try {
      const response = await axios.put(`http://localhost:1000/api/v1/updateBook/${id}`, bookData);
      console.log(response.data.message);
      alert("Updated successfully")
      navigate("/books");
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:1000/api/v1/getbooks/${id}`).then((response) => {
      setBookData(response.data);
    });
  }, [id]);

  return (
    <div className="form-container d-flex justify-content-center align-items-center" style={{ minHeight: '80.6vh', background: 'linear-gradient(45deg, #1CC5DD 0%, #8E42D1 100%)' }}>
      <div className="container p-4" style={{ background: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', width: '50vw' }}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label text-dark">
            Book Name
          </label>
          <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" value={bookData.Bookname} name="Bookname" onChange={handleChange} />

          <label htmlFor="authorName" className="form-label text-dark">
            Author Name
          </label>
          <input type="text" className="form-control" id="authorName" placeholder="Enter Author Name" value={bookData.author} name="author" onChange={handleChange} />

          <label htmlFor="description" className="form-label text-dark">
            Description
          </label>
          <input type="text" className="form-control" id="description" placeholder="Enter Description of Book" value={bookData.desc} name="desc" onChange={handleChange} />

          <label htmlFor="imageUrl" className="form-label text-dark">
            Image URL
          </label>
          <input type="text" className="form-control" id="imageUrl" placeholder="Enter the URL of Image" value={bookData.image} name="image" onChange={handleChange} />

          <label htmlFor="price" className="form-label text-dark">
            Price
          </label>
          <input type="text" className="form-control" id="price" placeholder="Enter Price" value={bookData.price} name="price" onChange={handleChange} />
        </div>
        <button className="btn btn-success w-100" style={{ background: 'black', color: '#fff' }} onClick={handleUpdate}>
          UPDATE NOW
        </button>
      </div>
    </div>
  );
};

export default UpdateBookComponent;
