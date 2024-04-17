import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, addLunch, cartList, setCartList }) => {

   const removeItem = () => {
      const newCart = cartList.filter(item => item.name !== product.name)
      setCartList(newCart)
   }

   return (
      <li>
         <div className="product__div">
            <img src={product.img} alt={product.name} className="modal__product--img" />
            <div className="namePrice__product title heading3">
               <h3>{product.name}</h3>
               <span className="modal__product--price">
                  {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
               <button onClick={() => removeItem()}aria-label="delete" title="Remover item" className="modal__product--btn">
                  <MdDelete size={21} />
               </button>
         </div>
      </li >
   );
};
