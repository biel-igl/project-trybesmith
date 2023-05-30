import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { OrderWhitProducts } from '../types/OrderWhitProducts';

const list = async ():Promise<ServiceResponse<OrderWhitProducts[]>> => {
  const orders = await OrderModel.findAll(
    { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } },
  );
  const dataOrders = orders.map((cada) => cada.dataValues);
  console.log('test', dataOrders);
  const allOrders = dataOrders.map((cada) => {
    const ids = cada.productIds ? cada.productIds.map((one) => one.id) : [];
    return ({
      id: cada.id,
      userId: cada.userId,
      productIds: ids,
    }); 
  });
  console.log(allOrders);
  return { status: 'SUCCESSFUL', data: allOrders };
};

export default {
  list,
};