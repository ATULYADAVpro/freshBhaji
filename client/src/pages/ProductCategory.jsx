import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';

export default function ProductCategory() {
    const { products } = useAppContext();
    const { category } = useParams()

    const searchCategory = categories.find((item) => item.path.toLowerCase() === category)

    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)

    return (
        <div className='mt-16'>
            {searchCategory && (
                <div className="flex flex-col items-end w-max">
                    <p className='text-2xl font-medium uppercase'>{searchCategory.text}</p>
                    <div className="w-16 h-0.5 bg-primary rounded-full"></div>
                </div>
            )}

            {
                filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
                        {filteredProducts.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[60vh]">
                        <p className="col-span-full text-center text-gray-500 text-lg">
                            No products found matching your search.
                        </p>

                    </div>
                )
            }
        </div>
    )
}
