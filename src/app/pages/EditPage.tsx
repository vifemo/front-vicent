import { useParams } from "react-router-dom"
import PostForm from "../components/PostForm";
import { API_URL, updatePost } from "../services/postService";
import { useEffect, useState } from "react";
import { Post } from "../types/types";
import Header from "../components/header/Header";
import useFetchPost from "../hooks/useFetchPost";

function EditPage() {
   const post = useFetchPost();

    //implementar update aquí dentro 
    const handleUpdateSubmit = (updatedPost : Post) => {
        alert("post updated");
    };


    return (
        <>
        <Header />
        <PostForm
        initialPost={post} 
        onSubmit={handleUpdateSubmit} 
        buttonText="Edit"
      />
      </>
    )
}

export default EditPage
