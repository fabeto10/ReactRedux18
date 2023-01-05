interface ProductsI {
    id?: string;
    description: string;
    type_product: number;
    labels: string;
    variants: any[];
    available_time: string[];
};
const ProductAction: string = "Products";
  
export default ProductsI;
export { ProductAction };