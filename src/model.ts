export type Category = {
  id: number;
  attributes: Attribute;
};
export type Attribute = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sub_categories?: {
    data: Category[];
  };
};
export type Product = {
  attributes: {
    createdAt: string;
    description: string;
    name: string;
    price: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};
