import axios from 'axios'

const URL = 'http://localhost:5000';
console.log(`${URL}/blogs`);

export const fetchBlogs = ()=> axios.get(`${URL}/blogs`);
export const createBlogs = (payload)=> axios.post(`${URL}/blogs`,payload);
export const fetchDetailBlog = (blogId) => axios.get(`${URL}/blogs/${blogId}`,blogId);
export const fetchDocuments = ()=> axios.get(`${URL}/documents`);