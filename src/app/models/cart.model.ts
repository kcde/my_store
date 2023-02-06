import { Product } from './product.model';

export type CartPayload = {
  id: number;
  amount: number;
};

export type Cart = Product & {
  amount: number;
};

export type PurchasedCartDetail = {
  amount: string;
  name: string;
};
