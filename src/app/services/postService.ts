import axios from 'axios'
import { Post } from '../types/types'

//export const API_URL = "https://jsonplaceholder.typicode.com/posts"
export const API_URL = 'http://localhost:20001/posts/'

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0c1RsdERmYWZCc1I1YkdpNHJmODM3WVlYRUxLS0NqVFBvdjZmNXRBRVZrIn0.eyJleHAiOjE3OTY1NTA1NDIsImlhdCI6MTc0NDcxMDU0MiwiYXV0aF90aW1lIjoxNzQ0NzEwNTQyLCJqdGkiOiJjMWFlYWMyZC1iODQ0LTQ2MmYtYTkwYi05NTAwMjBmYzgyY2MiLCJpc3MiOiJodHRwczovL2F1dGgtZXUtdGVzdC5nby1haWd1YS5jb20vYXV0aC9yZWFsbXMvZGV2X3Byb2R1Y3QiLCJhdWQiOlsiZ28tYWlndWEtdGVtcGxhdGUiLCJhY2NvdW50Il0sInN1YiI6IjcwNDFjYWZiLTk3YzUtNDEzYS1iNjE5LWY0ZTNlYzBlZjE1NCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImdvLWFpZ3VhLXNvYyIsInNlc3Npb25fc3RhdGUiOiJmZmQ0ZmE2OS01YzZhLTRiMTEtYjFiZS1kMmQxNWZjNmM4MTciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJnby1haWd1YS10ZW1wbGF0ZSI6eyJyb2xlcyI6WyJBUFBfVEVNUExBVEUiLCJBUFBfVEVNUExBVEVfUFVCTElDX0FQSSJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBnb2FpZ3VhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInVzZXJfbmFtZSI6InZpY2VudC5mZXJyZXJAaWRyaWNhLmNvbSIsIm5hbWUiOiJWaWNlbnQgRmVycmVyIHwgSWRyaWNhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidmljZW50LmZlcnJlckBpZHJpY2EuY29tIiwiZ2l2ZW5fbmFtZSI6IlZpY2VudCBGZXJyZXIgfCIsImZhbWlseV9uYW1lIjoiSWRyaWNhIiwiZW1haWwiOiJ2aWNlbnQuZmVycmVyQGlkcmljYS5jb20ifQ.hQnQSsR3JeQ6wvVEZkrO9xnrV8l7Ogp9YdzB_ONETOHNdszB8MhOmyoLJjWlP7x3l0s7NIWjHYt-BQCC6utSN1VZRDPFN8SfUrXKnMgvZFjCnM9znNPGyUadNnUZp7gmHAtNX6RVASgujtZ6viHuWC2U4szR3m0Ih0T4Yc6CccAfHRWqUVwEkIeOvsUBEfkP_OGpu0FTJ0O7ajHkH4jwK2WSLefFItCJCQJhBS_zG9aIxMp-eQOEbigHpCwneMYPAhXQr9OLvLu_T7uQiJoiScSCJYfbYLw1ekG5LlvfDp-YmzsUxA6f2TnxtLmXe5pwlMweddOFXlGzsmiD-2787A'

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
