import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true)
  function cn(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 hover:scale-110">
        <Image
          alt=""
          src={product.images[1].file.url}
          fill
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75 hover:scale-110',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3 className='text-2xl'>{product.name}</h3>
        <p className='text-2xl'>${product.price}</p>
      </div>
      <p className="mt-1 text-lg  text-gray-500 capitalize">
       Availble in: {product.options[0].values[0].name}  / &nbsp;
        {product.options[0].values[1].name}  / &nbsp;
         {product.options[0].values[2].name}  
      </p>
    </Link>
  )
}