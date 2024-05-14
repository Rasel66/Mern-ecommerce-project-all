import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import useCategory from "./../hooks/useCategory";
import { Link } from "react-router-dom";
import "../styles/CategoryProductStyle.css";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row container">
          <h3 className="text-center c-title">All Categories</h3>
          <hr />
          {categories.map((c) => (
            <div className="col-md-4 mt-3 mb-2 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
