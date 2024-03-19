import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproducts } from '../features/productSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addproduct() {

  const data = useSelector(state => state.myproduct).products.length;
  const navigate = useNavigate();
  const [values, setValues] = useState({ title: "", description: "", price: "", image: "", id: "" })
  const { title, description, price, image } = values;
  const dispatch = useDispatch();

  const handelsubmit = (e) => {
    e.preventDefault();
    let id = data + 1
    setValues(values.id = id);
    dispatch(addproducts({ values }));
    setValues({ title: "", description: "", price: "", image: "" });
    toast.success("Product Added !", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  return (
    <>
      <div className='container mt-4' style={{ backgroundColor: 'lightgrey', borderRadius: "12px" }}>
        <form className='mt-2'>
          Name:<input
            className='form-control'
            type="text" placeholder='Enter product name'
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            required="required" /><br />
          Description:<textarea
            className='form-control'
            placeholder='Add description'
            value={description}
            onChange={(e) => setValues({ ...values, description: e.target.value })}
          /><br />
          Price:<input
            className='form-control'
            type="number"
            placeholder='enter price $'
            value={price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          /><br />
          Image:<input
            className='form-control'
            type="url"
            placeholder='enter image url'
            value={image}
            onChange={(e) => setValues({ ...values, image: e.target.value })}
          /><br />
          <button
            className='btn btn-success'
            onClick={handelsubmit}
          >Submit</button>
          <button className='btn btn-dark' onClick={() => navigate('/')}> Go to Home</button>
        </form>
      </div>
      <ToastContainer /></>
  )
}

export default Addproduct;