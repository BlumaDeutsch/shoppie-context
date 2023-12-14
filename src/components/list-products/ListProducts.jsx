import { useContext, useState } from "react";
import ItemProduct from "../item-product/ItemProduct";
import ProductsContext from "../../context/users";

export default function ListProducts() {
    const { products } = useContext(ProductsContext);




    return (
        <>

            <h1>Product list</h1>
            <div className='row'>
                {products?.map((product) => {
                    return <ItemProduct
                        product={product}
                        key={product.id}


                    />

                })}
            </div>

        </>
    );
}