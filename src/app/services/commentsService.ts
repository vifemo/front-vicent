import axios from 'axios'
import { Comment } from '../types/types'

export const API_URL = 'https://jsonplaceholder.typicode.com/comments/'

export const getComments = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get(API_URL)
    return response.data
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
