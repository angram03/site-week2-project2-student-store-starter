import * as React from "react"
import "./SearchBar.css"
import  { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function SearchBar({products, handleAddItemToCart, handleRemoveItemFromCart}) {
 
   
         const [searchTerm, setSearchTerm] = useState("");
         const [filteredData, setFilteredData] = useState(null);

         console.log(`filteredData is ${filteredData}`)
         console.log(products)

         
         const handleSearch = (event) => {
            
           
            setSearchTerm(event.target.value)
            setFilteredData(
                products.filter((product) => 
                product.name.toLowerCase().includes(event.target.value.toLowerCase())
                )

            )
            
         }

         const handleClick = (event) => {

            
            
            
            setFilteredData(
                products.filter((product) => 
                product.category.toLowerCase().includes(event.target.value.toLowerCase())
                )

            )
            
         }


        return (
          <div>
            <h1>Search</h1>
            <div>
                <form>
                    <input
                    id="searchTerm"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search Item"
                    />
                    
                </form>
                

            </div>

            <div>
            <ul className="theList">
                {/* <li> */}
                    
                    <button value="" onClick={handleClick}>All Categories</button>
                {/* //</li> */}
                {/* <li> */}
                    <button value="food" onClick={handleClick}>Food</button>
                {/* </li> */}

                {/* <li> */}
                    <button value="accessories" onClick={handleClick}>Accessories</button>
                {/* </li> */}
                {/* <li> */}
                    <button value="tech" onClick={handleClick}>Tech</button>
                {/* </li> */}

                {/* <li> */}
                <button value="clothing" onClick={handleClick}>Clothing</button>
                {/* </li> */}



            </ul>

            </div>
            
            {filteredData ? (
            <ProductGrid allProducts={filteredData} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
            ) : (
            <ProductGrid allProducts={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
            )}

          </div>
        )
      };
    
   


    
 
  

