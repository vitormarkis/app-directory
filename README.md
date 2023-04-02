O meu projeto antigo [next-auth](https://github.com/vitormarkis/next-auth), eu precisava criar layouts para contextos da aplicação, como autenticação, usuario logado e nao logado, e nao encontrei uma forma satisfatoria de fazer isso com o diretorio pages, então estou investindo um tempo e desbravando o diretorio app, que apesar de ter muitos bugs, é interessante.

## Instalando o React Query no Next 13 (diretório app)

1. o `app/layout.tsx` será server component
2. o children do root layout, é coberto por um client component

> `src/app/layout.tsx`
```tsx
return (
  <html lang="en">
    <body>
      <ReactQueryClientProvider> // diferente
        {children}
      </ReactQueryClientProvider> // diferente
    </body>
  </html>
)
```

3. O `` vem de outro arquivo que será importado
4. **O ARQUIVO DE LAYOUT DO ROOT É SERVER COMPONENT, E DEVE SER ASSÍNCRONO, E O COMPONENTE CUSTOMIZADO QUE CONTORNA O CHILDREN, DEVE SER CLIENT COMPONENT**

> `src/services/queryClient.tsx`
```tsx
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient()

export function ReactQueryClientProvider(props: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}
```

> Nesse caso eu estou usando o mesmo arquivo para instanciar o queryClient, para criar o provider do query client, como um `client component` porque usei o `"use client"` no topo do arquivo
