import { Request, Response } from 'express';
import loginServices from '../services/login.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const list = async (req:Request, res:Response) => {
  const serviceResponse = await loginServices.verifyLogin(req.body);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }
  return res.status(200).json(serviceResponse.data);
};

export default {
  list,
};