import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="About us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">Add privacy policy</p>
          <p className="text-justify mt-2">Add privacy policy</p>
          <p className="text-justify mt-2">Add privacy policy</p>
          <p className="text-justify mt-2">Add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
