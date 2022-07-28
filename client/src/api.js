import axios from "axios";

const postRequest = axios.create({
    baseURL: 'http://127.0.0.1:7001/posts'
});

export const apiShowPost = (title) => postRequest.get("", { params: { title } }).then(res => res.data);
export const apiReadPost = (id) => postRequest.get(`/${id}`).then(res => res.data);
export const apiAddPost = (title, content) => postRequest.post("", { title, content });
export const apiEditPost = (id, title, content) => postRequest.put(`/${id}`, { title, content });
export const apiDeletePost = (id) => postRequest.delete(`/${id}`);

export const apiGetImg = () => axios.get('https://dog.ceo/api/breed/chihuahua/images/random');