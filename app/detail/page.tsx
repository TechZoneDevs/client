import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div>
            {detailProduct && (
                <div>
                    <div>
                        {detailProduct.imgs.length > 1 &&
                            detailProduct.imgs.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Image ${index}`} />
                                </div>
                            ))}
                    </div>
                    <div>
                        <h1>{detailProduct.name}</h1>
                        <h3>{detailProduct.descuento}</h3>
                        <h4>{detailProduct.marca}</h4>
                        <p>{detailProduct.price}</p>
                        <p>{detailProduct.stock}</p>
                    </div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <p>{cantidad}</p>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                </div>
            )}
            <div>
                <div>
                    <div>
                        {vendedor && (
                            <>
                                <img src={vendedor.img} alt={vendedor.name} />
                                <h3>{vendedor.name}</h3>
                            </>
                        )}
                    </div>
                    {location && (
                        <>
                            <h3>{location.city}</h3>
                            <h4>{location.locacion}</h4>
                        </>
                    )}
                </div>
                <div>
                    <h3>{detailProduct?.description}</h3>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Detail;
