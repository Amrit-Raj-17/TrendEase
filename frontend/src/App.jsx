// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import PrivateRoute from './components/PrivateRoute'
// import GeminiChatPage from './pages/GeminiChatPage'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/gemini" element={<GeminiChatPage />} />

//         {/* Protected Routes */}
//         <Route path="/cart" element={
//           <PrivateRoute>
//             <h1>Cart Page</h1>
//           </PrivateRoute>
//         } />
//         <Route path="/orders" element={
//           <PrivateRoute>
//             <h1>Orders Page</h1>
//           </PrivateRoute>
//         } />
//         <Route path="/profile" element={
//           <PrivateRoute>
//             <h1>Profile Page</h1>
//           </PrivateRoute>
//         } />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* 🔝 Global header or navbar (optional) */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🛍️ TrendEase</h1>
      </header>

      {/* 🔁 Renders the nested route (like /gemini, /cart, etc.) */}
      <main>
        <Outlet />
      </main>

      {/* 🔔 Global toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App

