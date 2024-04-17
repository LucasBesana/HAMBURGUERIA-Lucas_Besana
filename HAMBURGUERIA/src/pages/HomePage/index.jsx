import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burguerApi } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isVisible, setVisible] = useState(false);
   const saveCart = JSON.parse(localStorage.getItem("user:cart"));

   useEffect(() => {
      if(saveCart) {
         setCartList(saveCart)
      }
   }, []) 

   useEffect(() => {
      localStorage.setItem("user:cart", JSON.stringify(cartList))
   }, [cartList])

   const addLunch = (productListAdd) => {
      const verifyCart = cartList.find(item => item.name === productListAdd.name)
      if (verifyCart === undefined) {
         setCartList([...cartList, productListAdd])
      } else {
         toast("Produto já adicionado ao carrinho!")
      }
   }

   useEffect(() => {
      const getApi = async () => {
         try {
            const { data } = await burguerApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error.message);
         }
      };

      getApi();
   }, []);

   return (
      <>
         <Header setVisible={setVisible} cartList={cartList}/>
         <main className="main__container">
            <ProductList productList={productList} setCartList={setCartList} addLunch={addLunch} />
         </main>
          {isVisible ? <CartModal setVisible={setVisible} cartList={cartList} setCartList={setCartList}/> : null};
      </>
   );
};



