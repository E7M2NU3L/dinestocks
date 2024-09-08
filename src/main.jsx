import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactQueryProvider from './providers/query-provider.jsx'
import ReduxProvider from './providers/redux-provider.jsx'
import {NextUIProvider} from '@nextui-org/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
    <ReactQueryProvider>
      <ReduxProvider>
        <div className='bg-light-1'>
        <App />
        </div>
      </ReduxProvider>
    </ReactQueryProvider>
    </NextUIProvider>
  </StrictMode>,
)
