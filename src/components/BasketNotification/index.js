// import React from "react";
// import { useEffect } from "react";
// import classes from "./BasketList.module.scss";
// import BasketProduct from "./BasketProduct";
// import store from "../../../store/Products";
// import { toJS } from "mobx";
// import { observer } from "mobx-react-lite";

// const BasketNotification = ({product}) => {

//   const basketList = basketData.map((product) => (
//     <BasketProduct
//       id={product.id}
//       name={product.name}
//       price={product.price}
//       image={product.selectedImage}
//       colorName={product.colorName}
//       size={product.selectedSize}
//       quantity={product.quantity}
//       key={product.colorName + product.selectedSize}
//     />
//   ));
//   return (
//     <div>
//       <div className={classes.basket}>
//         <div className={classes.basket_container}>
//           <h1>Кошик</h1>

//           <button className={classes.btn}>До касси</button>
//           {basketList}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasketNotification;
