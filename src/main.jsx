import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyProvider from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <MyProvider>

 <App />
 </MyProvider>
</BrowserRouter>
   
)
