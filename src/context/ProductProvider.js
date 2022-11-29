import React, { createContext, useContext, useEffect, useState } from 'react';
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    // const url = "https://jsonplaceholder.typicode.com/users"
    const [data,setData] = useState([]); 
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())
      .then((data)=>setData(data.data))
    },[]);

    const value = {
        data,
      };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
           {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts =() => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;