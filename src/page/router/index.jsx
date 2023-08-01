import Document from "../Document";
import DetailCard from "../Document/Detail";
import Home from "../Home";

const routes = [
    { path :'/' , component:Home},
    { path :'/document' , component:Document},
    { path :'/document/ta' , component:DetailCard},
]

export {routes};