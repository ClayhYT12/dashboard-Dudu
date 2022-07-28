import { Router } from "express";

const routes = new Router();

routes.get('/',(req,res)=>{
    res.render("index");
})
routes.get('/painel',(req,res)=>{
    res.render("painel");
})




export default routes;