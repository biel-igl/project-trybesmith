import ProductModel from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

const list = async ():Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const orders = await OrderModel.findAll(
    { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } },
  );
  /* const dataOrders = orders.map((cada) => cada.dataValues);
  const allOrders = dataOrders.map((cada) => ({
    id: cada.id,
    userId: cada.userId,
    productsIds: cada.productId.map((porduct: { id: number }) => porduct.id),
  })); */
  return { status: 'SUCCESSFUL', data: orders };
};

export default {
  list,
};