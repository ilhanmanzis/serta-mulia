import { postPredictHandler } from "./handler.js";

const routes = [
    {
        path:'/predict',
        method: 'POST',
        handler: postPredictHandler, 
        options:{
            payload:{
                allow: 'multipart/form-data',
                multipart: true
            }
        }
    },
];

export default routes;