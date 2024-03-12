import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SinglePageDataShow from "./SinglePageDataShow";
function SinglePage() {
  const [post, setPost] = useState([]);
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();

  async function getdata() {
    setLoading(true);
    try {
      let data = await fetch(`https://fakestoreapi.com/products/${id}`);
      let newdata = await data.json();
      setPost(newdata);

      setLoading(false);
    } catch (er) {
      setError(er.message);
      setLoading(false);
    }
  }
  useEffect(function(){
    getdata();
  },[id]);


  return (
  
   
    <div className="parent">
     
      <SinglePageDataShow data={post}/>
    
    </div>
     );
}
export default SinglePage;
