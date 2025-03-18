import { useParams } from "react-router-dom";
import Header from "../components/header/Header"
import {API_URL} from "../services/postService";
import { useEffect, useState } from "react";


function PostDetails() {

const {id} = useParams(); 
const [post, setPost]= useState();

const fetchPost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };


useEffect(()=>{
    fetchPost(id);
},[id])

const printDetails = (post) => {
    return post ? (
        <section>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </section>
      ) : (
        <h2>Loading...</h2>
      );
    };

  return (
    <>
      <Header />
     <div>{printDetails(post)}</div>
    </>
  );
}

export default PostDetails
