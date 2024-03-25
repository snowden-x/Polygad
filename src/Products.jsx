import Plates from './assets/plastplates.webp'
import PetBottle from './assets/petbottle.webp'
import PackBag from './assets/packbag.webp'
import Rubbbag from './assets/rubber.webp'
import Chairs from './assets/plastchairs.webp'
import Cups from './assets/plascups.webp'

const products = [


    {
      id: 1,
      name: 'Packaging Bag',
      href: '#',
      price: 'Packaging Bags',
    
      imageAlt: 'Packaging Bag',
    },
    {
      id: 2,
      name: 'Rubberbag',
      href: '#',
      price: 'Rubber Bags',
      imageSrc: Rubbbag,
      imageAlt: 'Rubber Bag',
    },
    {
      id: 3,
      name: 'Pet bottles',
      href: '#',
      price: 'Pet Bottle',
      imageSrc: PetBottle,
      imageAlt: 'Pet bottles',
    },
    {
      id: 4,
      name: 'Plates',
      href: '#',
      price: 'Plates',
      imageSrc: Plates,
      imageAlt: 'Plates',
    },
    {
      id: 5,
      name: 'Chairs',
      href: '#',
      price: 'Chairs',
      imageSrc: Chairs,
      imageAlt: 'Chairs',
    },
    {
      id: 6,
      name: 'Cups',
      href: '#',
      price: 'Cups',
      imageSrc: Cups,
      imageAlt: 'Cups',
    },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="max-w-md mx-auto mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Products</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Explore our wide range of high-quality, eco-friendly products designed to meet all your plastic needs.
            </p>
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="h-64 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover group-hover:opacity-75"
                    
                  />
                </div>
                
                <p className="mt-1 text-lg font-medium text-center text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  