// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function useCategory() {
//   const [categories, setCategories] = useState([]);

//   //get categories
//   const getCategories = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/category/get-category`
//       );
//       setCategories(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getCategories();
//   }, []);

//   return categories;
// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      setCategories(data?.category || []); // Ensure data is an array or default to an empty array
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
