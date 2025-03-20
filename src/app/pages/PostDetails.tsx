import { useParams } from "react-router-dom";
import Header from "../components/header/Header"
import {API_URL} from "../services/postService";
import { useEffect, useState } from "react";
import "../../styles/postdetails.css";
import { Post } from "../types/types";
import useFetchPost from "../hooks/useFetchPost";


function PostDetails() {

  const post = useFetchPost();

const printDetails = (post:Post | null) => {
    return post ? (
        <section className="post-details">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.content}</p>
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
