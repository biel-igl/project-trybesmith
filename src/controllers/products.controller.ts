import { Request, Response } from 'express';
import productsServices from '../services/products.services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req:Request, res:Response) => {
  const { name, price, orderId } = req.body;
  const ServiceResponse = await productsServices.create({ name, price, orderId });
  if (ServiceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);  
  }
  return res.status(201).json(ServiceResponse.data);
};

const list = async (req:Request, res:Response) => {
  const ServiceResponse = await productsServices.list();
  return res.status(200).json(ServiceResponse.data);
};

export default {
  create,
  list,
};