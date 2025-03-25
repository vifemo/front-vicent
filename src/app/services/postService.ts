import axios from 'axios'
import { Post } from '../types/types'

//export const API_URL = "https://9b91b392-9e66-4554-a23c-8c2b4074aa70.mock.pstmn.io/posts"
//export const API_URL = "https://poststest.free.beeceptor.com/posts"
export const API_URL = 'https://jsonplaceholder.typicode.com/posts/'

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

export const createPost = async (post: Post): Promise<Post> => {
  try {
    const response = await axios.post(API_URL, post)
    console.log(response.data)
    return response.data
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

export const updatePost = async (id: number, post: Post): Promise<Post> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, post)
    return response.data
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

export const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    handleAxiosError(error)
    throw error
  }
}

/** */
const handleAxiosError = (error: any) => {
  if (error.response) {
    console.error('Error data:', error.response.data)
    console.error('Error status:', error.response.status)
    console.error('Error headers:', error.response.headers)
  } else if (error.request) {
    console.error('Error request:', error.request)
  } else {
    console.error('Error message:', error.message)
  }
  console.error('Error config:', error.config)
}
