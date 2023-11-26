import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader';
import nofile from "../../assets/Screenshot_2023-11-07_130533-removebg-preview (1).png";
import "../AfterLoginPageCommon/AfterLoginPageCommon.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import MenusFarmer from "../../components/Menus/MenusFarmer/MenusFarmer";
import "../ViewProducts/ViewProducts.css"
import { useAuth } from "../../../src/context/auth";
import { useNavigate, useParams } from "react-router-dom";

const AfterLoginPageCommon = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();


  const getSingleProduct = async() =>{
    try {
        const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`)
        setTitle(data.product.title);
        setCategory(data.product.category._id);
        // setCategories(data.product.categories);
        setQuantity(data.product.quantity);
        setId(data.product._id);
        setDate(data.product.date);
        setImage(data.product.image);
        setDiscription(data.product.discription);
        setAddress(data.product.address);
        setState(data.product.state);
        setDistrict(data.product.district);
        setPrice(data.product.price);
        
    } catch (error) {
        console.log(error);
    }
}

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
  
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async() =>{
    try {
      // let answer = window.prompt('are you sure you want to delete.?')
      // if(!answer) return
      const{data} = await axios.delete(`/api/v1/product/delete-product/${id}`)
      toast.success('product deleted successfully')

    } catch (error) {
      console.log(error);
      toast.error('error in deleting product')
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <AllHeader />

      <MenusFarmer />

      <div className="maincontainerviewproduct">
        <h2 className="productHeading2">All Products List</h2>
        <div className="d-flex flex-wrap cardsDiv">
          {products?.map((p) => (
           
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{ width: "18rem", height: "14rem" }}
                  alt={p.title}
                />
                <div className="card-body productcardMainDiv">
                  <h5 className="card-title cardTitle">{p.title}</h5>
                  <p className="card-text cardTitle">{p.discription}</p>  
                  <h3 className="card-text cardTitle">₹{p.price} Per KGs</h3>  
                  <Link  key={p._id}
              to={`/updateProduct/${p.slug}`}
              className="product-link btn btn-primary ms-4 updateButton">UPDATE</Link>
             <Link  key={p._id}
              to={`/updateProduct/${p.slug}`}
              className="btn btn-danger ms-4 updateButton">DELETE</Link>
                </div>
              </div>
            
          ))}
        </div>
      </div>

      <section className="headingAfterlogin">
        <h1>Nothing to show here yet</h1>
      </section>

      <section className="afterloginNoFilePng">
        <img className="noFilePng" src={nofile} alt="" />
      </section>
    </div>
  );
};

export default AfterLoginPageCommon;
