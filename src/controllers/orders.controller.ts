import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const list = async (req:Request, res:Response) => {
  const ServiceResponse = await ordersServices.list();
  return res.status(200).json(ServiceResponse.data);
};

export default {
  list,
};