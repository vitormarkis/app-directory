import { IProduct } from "@/app/api/products/store/route"

export default async function StoreProducts() {
  const products: IProduct[] = await fetch(
    "http://localhost:3000/api/products/store",
    {
      next: {
        revalidate: false,
      },
    }
  ).then(res => res.json())

  const getHours = (date: null) => {
    const dateString = date as unknown as string
    const [, hours] = dateString.split("T")
    return hours.slice(0, 8)
  }

  return (
    <div>
      <h1>Next Revalidate 0</h1>
      <div className="max-w-[320px] w-full mx-auto border border-black">
        {products.map(
          ({ category, description, id, images, name, price, slug, date }) => (
            <div key={id} className="p-3 border-b border-b-black">
              <h1>{name}</h1>
              <p className="font-bold text-lg">{getHours(date)}</p>
              <span>{category} </span>
              <p>{description}</p>
              <div className="h-12 overflow-hidden flex">
                {images.map(({ id, url }) => (
                  <img src={url} className="basis-0 grow" />
                ))}
              </div>
              <span>{price}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
