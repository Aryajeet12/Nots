import express from "express"
import path from "path"
import fs from 'fs'
const app=express()
app.set('view engine','ejs')

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
 
app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        res.render('index',{files:files})
    })
})

app.listen(8080) 