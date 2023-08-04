import Document from "../Document";
import DetailCard from "../Document/Detail";
import Home from "../Home";

const routes = [
    { path :'/' , component:Home},
    { path :'/document' , component:Document},
    { path :'/document/tieng-anh' , component:DetailCard ,identifier: 'ta'},
    { path :'/document/chuyen-nganh' , component:DetailCard, identifier: 'chuyen-nganh'},
]

export {routes};