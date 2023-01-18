import React from 'react'
import { Scroller ,DivContainer,OneProduct,DivImg,TheImg ,DivPrice , DivTitle , DivDescription ,DivButton ,DivDetail} from './Products.elements';


const Products = ({ products, handleAddProduct }) => {
  return (
    
      

      <Scroller>
      <DivContainer>
        {products &&
          products.map((product) => {
            if (product.id <= 5) {
              return (
                <OneProduct key={product.id} >
                  <DivDetail>
                  <DivImg>
                    <TheImg
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </DivImg>
                  <DivPrice>${product.price}</DivPrice>
                  <DivTitle>{product.title}</DivTitle>
                  <DivDescription>{product.description}</DivDescription>
                  </DivDetail>
                  <DivButton
                    onClick={() => {
                      handleAddProduct(product);
                    }}
                  >
                    Add to cart
                  </DivButton>
                </OneProduct>
              );
            }
          })}
      </DivContainer>
    </Scroller>


    
  )
}

export default Products
