import express from 'express';
import routes from './src/routes.js'
import path from 'path';
import {fileURLToPath} from 'url';
import ejs from 'ejs';

class app {
    constructor(){
        this.server = express();
        this.Routes();
        this.middlewares();
        this.server.engine('ejs',ejs.renderFile);
        this.server.set("view engine","ejs");
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.server.use(express.static(path.join(__dirname ,'public')));
    }

    middlewares(){
        this.server.use(express.json());
    }

    Routes(){
        this.server.use(routes);
    }
}

export default new app().server;