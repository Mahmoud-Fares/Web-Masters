export type Product = {
   id: number;
   name: string;
   price: number;
   originalPrice?: number;
   discount?: number;
   images: string[];
   category: string;
   rating: number;
   inStock: boolean;
   colors?: string[];
   sizes?: string[];
   description: string;
   reviews?: string[]; // todo: should it be Review[] ?
};
