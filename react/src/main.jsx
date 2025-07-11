import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StudentTable from './component/StudentTable'











createRoot(document.getElementById('root')).render(
  <StrictMode>

       <StudentTable />

  </StrictMode>
)
