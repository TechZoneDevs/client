import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Product = {
    id: number
    name: string
    price: number
    imgs: string[]
    vendedorId: number
    marca: string
    status: string
    description: string
    stock: number
    descuento: number
    idLocation: number
    idCategory: number
};

const Detail = ({ id }: { id: number }) => {

    const [detailProduct, setDetailProduct] =  useState<Product | null>(null);
    const [productsCategory, setProductsCategory] =  useState<Product[] | null>(null);
    

    useEffect(()=>{
        const fetchDetail = async() =>{
            try {
                const {data} = await axios(`/product/${id}`)
                if(data) {
                    setDetailProduct(data.findProduct) 
                    const productosByCategory = await axios(`/product/category/${data.idCategory}`)
                    if(productosByCategory) setProductsCategory(productosByCategory.data)
                }

            } catch (error: any) {
                alert(error.message)
            }
        }
        fetchDetail()
    })
    
  return (
    <div>Detail</div>
  )
}

export default Detail