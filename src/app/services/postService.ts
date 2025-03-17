import axios from "axios";
import { Post } from "../types/types";

const API_URL = "https://9b91b392-9e66-4554-a23c-8c2b4074aa70.mock.pstmn.io/posts"

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  };

export const createPost = async (post: Post): Promise<Post> => {
    const response = await axios.post(API_URL, post);
    return response.data;
};

export const updatePost = async (id: number, post: Post): Promise<Post> => {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
