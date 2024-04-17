import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, setVisible, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return product?.price && prevValue + product.price;
   }, 0);

   return (
      <div className="div__modal" role="dialog">
         <div className="div2__modal">
            <div className="modal__header title heading3">
               <h2 className="shop__car">Carrinho de compras</h2>
               <button onClick={() => setVisible(false)} aria-label="close" title="Fechar" className="shop__btn">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} setCartList={setCartList} cartList={cartList} />
                  ))}
               </ul>
            </div>
            <div className="modal__footer">
               <div className="total__div">
                  <span className="total__shop headline">Total</span>
                  <span className="total__number body">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="remove__shop headline" onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
