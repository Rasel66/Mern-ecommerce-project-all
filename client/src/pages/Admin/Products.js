import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Error in getting products");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  //delete product
  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
      );
      toast.success("Product deleted successfully");
      window.location.reload();
      setProducts(products);
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting product");
    }
  };
  return (
    <Layout title={"Dahsboard - all products"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h4 className="text-center">All Products List</h4>
            <hr />
            <div className="d-flex flex-wrap">
              {products?.map((product) => (
                <Link key={product._id} className="product-link">
                  <div className="card m-2" style={{ width: "21rem" }}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: "300px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <Link to={`/dashboard/admin/product/${product.slug}`}>
                        <button className="btn btn-primary w-100">
                          Update Product
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger w-100 mt-2"
                        onClick={() => deleteProduct(product._id)}
                      >
                        Delete Product
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
