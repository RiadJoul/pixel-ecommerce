import { useState } from "react"
import ProductPreview from "./ProductPreview"
import { Product } from "@/Types"


const products = [
    {
        id: 1,
        title: 'Google pixel 4a',
        price: 550,
        imageSrc: '/Pixel4a.png',
        imageAlt: 'Google pixel with grapheneOS',
    },
    {
        id: 2,
        title: 'Google pixel 4a 5G',
        price: 550,
        imageSrc: '/Pixel4a.png',
        imageAlt: 'Google pixel with grapheneOS',
    },
    {
        id: 3,
        title: 'Google pixel 6a',
        price: 550,
        imageSrc: '/Pixel6a.png',
        imageAlt: 'Google pixel with grapheneOS',
    },
    {
        id: 4,
        title: 'Google pixel 7a',
        price: 550,
        imageSrc: '/Pixel7a.png',
        imageAlt: 'Google pixel with grapheneOS',
    },
]

export default function ProductList() {
    const [isPreviewOpen,setIsPreviewOpen] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState<Product>();


    return (
        <>
        <ProductPreview open={isPreviewOpen} close={() => setIsPreviewOpen(false)} product={selectedProduct!}/>
        <div className="bg-black" id="products">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} onClick={() => {
                            setSelectedProduct(product);
                            setIsPreviewOpen(true)
                        }} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-100">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-200">€{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        </>
        
    )
}