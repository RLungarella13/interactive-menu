export type Category = {
  id: number;
  attributes: Attribute[];
};
export type Attribute = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sub_categories?: {
    data: Category[];
  }
};

