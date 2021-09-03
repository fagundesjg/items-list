export interface ISnkr {
  id: string;
  style: string | null;
  name: string;
  photoUrl: string;
  links: string;
  stock: string;
  watchIntensity: number;
  lastDiscount: number | null;
  price: number;
  launch: string;
  createdAt: string;
  updatedAt: string | null;
}
