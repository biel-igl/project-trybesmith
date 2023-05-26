import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { OrderWhitProducts } from '../types/OrderWhitProducts';

const list = async ():Promise<ServiceResponse<OrderWhitProducts[]>> => {
  const orders = await OrderModel.findAll(
    { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } },
  );
  const dataOrders = orders.map((cada) => cada.dataValues);
  const allOrders = dataOrders.map((cada) => ({
    id: cada.id,
    userId: cada.userId,
    productsIds: cada.productId.map((porduct: { id: number }) => porduct.id),
  }));
  return { status: 'SUCCESSFUL', data: allOrders };
};

export default {
  list,
};