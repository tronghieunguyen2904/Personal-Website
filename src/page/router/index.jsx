import BlogsPage from "../Blogs";
import DetailBlog from "../Blogs/Detail";
import Document from "../Document";
import DetailCard from "../Document/Detail";
import Home from "../Home";

const routes = [
    { path :'/' , component:Home},
    { path :'/document' , component:Document},
    { path :'/document/:id' , component:DetailCard},
    // { path :'/document/chuyen-nganh' , component:DetailCard, identifier: 'chuyen-nganh'},
    { path :'/blog' , component:BlogsPage},
    { path :'/blog/:id' , component:DetailBlog},
]

export {routes};