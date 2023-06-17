import * as React from "react"
import "./SearchBar.css"
import  { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function SearchBar({products}) {
 
   
         const [searchTerm, setSearchTerm] = useState("");
         const [filteredData, setFilteredData] = useState(products);
         
         const handleSearch = (event) => {
            
           
            setSearchTerm(event.target.value)
            setFilteredData(
                products.filter((product) => 
                product.name.toLowerCase().includes(event.target.value.toLowerCase())
                )

            )
            
         }

         const handleClick = (event) => {
            
            
            setSearchTerm(event.target.value)
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

                <input
                id="searchTerm"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Item"
                />

            </div>

            <div>
            <ul>
                <li>
                    <button value="clothing" onClick={handleClick}>Clothing</button>
                </li>
                <li>
                    <button value="foods" onClick={handleClick}>Food</button>
                </li>

                <li>
                    <button value="accessories" onClick={handleClick}>Accessories</button>
                </li>
                <li>
                    <button value="tech" onClick={handleClick}>Tech</button>
                </li>

                <li>
                    <button value="all" onClick={handleClick}>All Categories</button>
                </li>



            </ul>

            </div>
            
            <ProductGrid allProducts={products} />
            <ProductGrid allProducts={filteredData}/> 
            {filteredData ? (
            <ProductGrid products={filteredData} />
            ) : (
            <ProductGrid products={products} />
            )}

            




          </div>
        )
      };
    
   


    
 
  

