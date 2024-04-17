import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setVisible, cartList }) => {
   const [value, setValue] = useState("");

   return (
      <header className="header__container">
         <div className="header__content">
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="header__btn" onClick={() => setVisible(true)}>
                <MdShoppingCart size={21} />
                <span className="product__number">{cartList.length}</span>
            </button>
         </div>

         </div>
      </header>
   );
}; 
