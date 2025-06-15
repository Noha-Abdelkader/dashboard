export type Occasion = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
};

export type OccasionProduct = {
  _id: string;
  title: string;
  imgCover: string;
};
