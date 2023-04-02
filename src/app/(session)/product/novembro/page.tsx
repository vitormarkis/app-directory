"use client"

import { IProduct } from "@/app/api/products/store/route"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function NovembroProducts() {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["novembro-products"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/api/products/store")
        .then(res => res.data),
    staleTime: 1000 * 5, // 5 segundos
  })

  if (!products || isLoading)
    return <div className="mx-auto w-full grow text-center">Carregando...</div>

  const getHours = (date: null) => {
    const dateString = date as unknown as string
    const [, hours] = dateString.split("T")
    return hours.slice(0, 8)
  }

  return (
    <div>
      <h1>Use Query Client Data Fetch</h1>
      <div className="max-w-[320px] w-full mx-auto border border-black">
        {products.map(
          ({ category, description, id, images, name, price, slug, date }) => (
            <div key={id} className="p-3 border-b border-b-black">
              <h1>{name}</h1>
              <p className="font-bold text-lg">{getHours(date)}</p>
              <span>{category} </span>
              <p>{description}</p>
              <div className="h-12 overflow-hidden flex">
                {images.map(({ id: imgId, url }) => (
                  <img key={imgId} src={url} className="basis-0 grow" />
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
