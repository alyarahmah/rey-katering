export interface CatalogItem {
  id: string;
  name: string;
  priceLabel: string;
  priceValue: number;
  unit: string;
  description: string;
  items: string[];
  image: string;
  badge?: string;
  isPopular?: boolean;
}
