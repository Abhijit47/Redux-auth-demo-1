import React from 'react';

const Post = ({ product }) => {
  return (
    <div className='col-span-1 p-4'>
      <div className='flex relative'>
        <img
          alt='gallery'
          className='absolute inset-0 w-full h-full object-scale-down object-center'
          src={product.thumbnail}
        />
        <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-all delay-200 duration-200'>
          <h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 capitalize'>
            {product.category}
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {product.title}
          </h1>
          <p className='leading-relaxed'>
            {product.description.length > 30
              ? `${product.description.substr(0, 20)}...`
              : product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
