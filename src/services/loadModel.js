import tf from '@tensorflow/tfjs-node';
//import dotenv from 'dotenv';

//dotenv.config();

const loadModel = async()=>{
    return tf.loadGraphModel(process.env.MODEL_URL);
}

export default loadModel;