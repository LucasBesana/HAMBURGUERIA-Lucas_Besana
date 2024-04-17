import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, setCartList, addLunch }) => {
   return (
      <ul className="product__content">
         {productList.map((product) => (
            <ProductCard key={product.id} 
            product={product} 
            setCartList={setCartList} 
            addLunch={addLunch}/>
         ))}
      </ul>
   );
};
