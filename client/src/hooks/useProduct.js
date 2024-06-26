import { useState } from 'react';

import {
    getProductsApi,
    addProductApi,
    deleteProductApi,
    getProductByIdApi,
    getProductsByCategoryApi
} from '../api/product';
import { useAuth } from './';

export function useProduct() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState(null);

    const { auth } = useAuth();

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await getProductsApi();
            setLoading(false);
            setProducts(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const addProduct = async (data) => {
        try {
            setLoading(true);
            console.log('Adding product with data:', data); // Log para depurar
            await addProductApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            setLoading(true);
            console.log('Deleting product with id:', id); // Log para depurar
            await deleteProductApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const getProductById = async (id) => {
        try {
            const product = await getProductByIdApi(id);
            return product;
        } catch (error) {
            setError(error);
        }
    }

    const getProductsByCategory = async (idCategory) => {
        try {
            setLoading(true);
            const products = await getProductsByCategoryApi(idCategory);
            setLoading(false);
            setProducts(products);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        products,
        getProducts,
        addProduct,
        deleteProduct,
        getProductById,
        getProductsByCategory,
    }
}
