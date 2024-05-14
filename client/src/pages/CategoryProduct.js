import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import "../styles/CategoryProductStyle.css";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>
        <hr />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="d-flex flex-wrap">
              {products?.map((product) => (
                <div className="card m-2" style={{ width: "21rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "300px" }}
                  />
                  <hr />
                  <div className="card-body text-center">
                    <div className="card-name-price">
                      <h5 className="card-title">{product.name}</h5>
                      <h5 className="card-title card-price">
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                      <p className="card-text">
                        {product.description.substring(0, 60)}...
                      </p>
                      <button
                        onClick={() => navigate(`/product/${product.slug}`)}
                        className="btn btn-primary ms-1"
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
