import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="About us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ullam dolores consectetur architecto earum delectus illum labore
            cumque ipsam praesentium nulla, voluptatibus sapiente at fugit
            optio! Deleniti ut voluptas recusandae velit molestias veniam saepe
            in facilis odit omnis adipisci voluptatem expedita asperiores illo
            nesciunt assumenda, vero ab molestiae totam sequi!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
