
import "./ProductDetail.css"
import axios from "axios";
import { useParams } from "react-router";
import ProductView from "../ProductView/ProductView";
import React, { useEffect, useState } from "react";


export default function ProductDetail() {

  const {id} = useParams();
  const [product, setProduct] = useState("")

  console.log(`The productID is ${id}`);

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  if (!ProductDetail) {
    return <h1 className="loading">Loading...</h1>;
  }
    return (
      <div className="product-detail">
        <ProductView 
            product={product} 
            productid={product.id}
        />
      </div>
    )
}