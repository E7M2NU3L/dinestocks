import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const ReactQueryProvider = ({children}) => {
    const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
        {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider