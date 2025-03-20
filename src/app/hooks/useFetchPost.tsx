import { API_URL } from "../services/postService";
import { useEffect, useState } from "react";
import { Post } from "../types/types";
import { useParams } from "react-router-dom";

const useFetchPost = (): Post | null => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPost(Number(id));
    }
  }, [id]);

  return post;
};

export default useFetchPost;