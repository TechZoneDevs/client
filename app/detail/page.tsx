import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carrito from '../ui/carrito/Carrito';

type Product = {
    id: number;
    name: string;
    price: number;
    imgs: string[];
    vendedorId: number;
    marca: string;
    status: string;
    description: string;
    stock: number;
    descuento: number;
    idLocation: number;
    idCategory: number;
};

type Vendedor = {
    img: string;
    name: string;
};

type Location = {
    city: string;
    locacion: string;
};

const Detail = ({ id }: { id: number }) => {
    const [detailProduct, setDetailProduct] = useState<Product | null>(null);
    const [productsCategory, setProductsCategory] = useState<Product[] | null>(null);
    const [location, setLocation] = useState<Location | null>(null);
    const [cantidad, setCantidad] = useState<number>(1);
    const [vendedor, setVendedor] = useState<Vendedor | null>(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const { data } = await axios.get(`/product/${id}`);
                if (data) {
                    setDetailProduct(data.findProduct);
                    const productosByCategory = await axios.get(`/product/category/${data.idCategory}`);
                    if (productosByCategory) {
                        setProductsCategory(productosByCategory.data);
                        const vendedorProduct = await axios.get(`/users/${id}`);
                        if (vendedorProduct) setVendedor(vendedorProduct.data);
                        const locationProduct = await axios.get(`/location/${id}`);
                        if (locationProduct) setLocation(locationProduct.data);
                    }
                }
            } catch (error: any) {
                alert(error.message);
            }
        };
        fetchDetail();
    }, [id]);

    const handleDecrement = () => {
        if (cantidad > 1) {
            setCantidad((prevCantidad) => prevCantidad - 1);
        }
    };

    const handleIncrement = () => {
        setCantidad((prevCantidad) => prevCantidad + 1);
    };

    return (
        <div className="flex flex-wrap justify-center">
            {detailProduct && (
                <div className="flex flex-wrap justify-around items-center w-full md:w-3/4 p-4">
                    <div className="w-full md:w-1/2">
                        {detailProduct.imgs.length > 1 &&
                            detailProduct.imgs.map((img, index) => (
                                <div key={index} className="mb-4">
                                    <img src={img} alt={`Image ${index}`} className="w-full" />
                                </div>
                            ))}
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-3xl font-bold mb-2">{detailProduct.name}</h1>
                        <h3 className="text-xl mb-2">{detailProduct.descuento}</h3>
                        <h4 className="text-lg mb-2">{detailProduct.marca}</h4>
                        <p className="text-xl mb-2">{detailProduct.price}</p>
                        <p className="text-xl mb-2">{detailProduct.stock}</p>
                        <div className="flex items-center">
                            <button onClick={handleDecrement} className="bg-gray-300 px-4 py-2 rounded-l">
                                -
                            </button>
                            <p className="px-4 py-2">{cantidad}</p>
                            <button onClick={handleIncrement} className="bg-gray-300 px-4 py-2 rounded-r">
                                +
                            </button>
                        </div>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            )}
            <div className="flex flex-wrap justify-around items-center w-full md:w-3/4 p-4">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-4">
                        {vendedor && (
                            <>
                                <img src={vendedor.img} alt={vendedor.name} className="w-16 h-16 rounded-full mr-4" />
                                <h3 className="text-xl font-bold">{vendedor.name}</h3>
                            </>
                        )}
                    </div>
                    {location && (
                        <div>
                            <h3 className="text-xl">{location.city}</h3>
                            <h4 className="text-lg">{location.locacion}</h4>
                        </div>
                    )}
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h3 className="text-lg">{detailProduct?.description}</h3>
                </div>
            </div>
        </div>
    );
    
};

export default Detail;
