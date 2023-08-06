import BlogsPage from "../Blogs";
import Document from "../Document";
import DetailCard from "../Document/Detail";
import Home from "../Home";

const routes = [
    { path :'/' , component:Home},
    { path :'/document' , component:Document},
    { path :'/document/:id' , component:DetailCard},
    // { path :'/document/chuyen-nganh' , component:DetailCard, identifier: 'chuyen-nganh'},
    { path :'/blog' , component:BlogsPage},
]

export {routes};