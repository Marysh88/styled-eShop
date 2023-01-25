import { createContext , useState , useEffect} from "react";
import axios from 'axios';
const AppContext = createContext(null);

export const AppContextProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [cartItems, setCartItems] = useState([]);
    const [number , setNumber] = useState(0);




   const gettingData = useEffect(() => {
        axios
          .get("https://dummyjson.com/products")
          .then((response) => {
            setLoading(false);
            setProducts(response.data.products);
          })
          .catch(() => {
            setLoading(true);
          });
      }, []);





      
    const product ={};
    const handleAddProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      
      if (ProductExist) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
              : item     
          )
          
        );
        setNumber(number +1);
        console.log(cartItems);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        setNumber(number +1);
        console.log(cartItems);
        
      }
    };
  
    const handleRemoveProduct = (product) =>{
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if(ProductExist.quantity ===1){
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        setNumber(number-1);
      }else{
        setCartItems(
          cartItems.map((item) => item.id === product.id 
          ? {...ProductExist,quantity: ProductExist.quantity -1}
          : item
          )
        )
        setNumber(number-1);
      }
  
    }



    const value = {
        products,
        isLoading,
        cartItems,
        number , 
        gettingData,
        handleAddProduct,
        handleRemoveProduct
    }


    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );

};

export default AppContext
