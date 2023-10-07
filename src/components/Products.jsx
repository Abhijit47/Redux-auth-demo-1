import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/ProductAction';

const Posts = () => {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const token = localStorage.getItem('jwt-token');

  useEffect(() => {
    setIsLoading(product.isLoading);
    if (token && !productData) {
      dispatch(getProducts());
      setProductData(product.productDetails.products);
    }
    setIsLoading(false);
  }, [productData, dispatch, product, token]);

  return (
    <>
      <section className='text-gray-600 body-font'>
        {isLoading ? (
          <h1 className='text-center text-4xl'>Loading</h1>
        ) : (
          <div className='px-5 py-24'>
            <div className='flex flex-col text-center w-full mb-20'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Products Lists
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom.
              </p>
            </div>
            <div className='grid sm:grid-cols-12 lg:grid-cols-4 md:grid-cols-12 gap-4'>
              {productData?.map((product, index) => (
                <Product product={product} key={index + 1} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Posts;
