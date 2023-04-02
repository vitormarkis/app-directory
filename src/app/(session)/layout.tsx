import Link from "next/link"

export const metadata = {
  title: "Bem vindo!",
  description: "Você está na página home do site.",
}

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="h-12 border-b border-b-black flex items-center justify-between">
        <div className="max-w-[1280px] w-full px-6 flex mx-auto items-center justify-between">
          <div>
            <h1 className="text-2xl">Logo</h1>
          </div>
          <div>
            <nav>
              <ul className="flex gap-2">
                <Link href="/home">
                  <li className="px-3 py-1.5 rounded-full border border-black">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="px-3 py-1.5 rounded-full border border-black">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="px-3 py-1.5 rounded-full border border-black">
                    Contact
                  </li>
                </Link>
                <Link href="/product/tier">
                  <li className="px-3 py-1.5 rounded-full text-white border border-black bg-red-500">
                    Tier
                  </li>
                </Link>
                <Link href="/product/premium">
                  <li className="px-3 py-1.5 rounded-full text-white border border-black bg-emerald-500">
                    Premium
                  </li>
                </Link>
                <Link href="/product/store">
                  <li className="px-3 py-1.5 rounded-full text-white border border-black bg-blue-500">
                    Store
                  </li>
                </Link>
                <Link href="/product/novembro">
                  <li className="px-3 py-1.5 rounded-full text-white border border-black bg-orange-500">
                    Novembro
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
