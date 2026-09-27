import ReportEmergencyForm from "./components/ReportEmergencyForm";
import TrackEmergency from "./components/TrackEmergency";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-red-600 text-white px-6 py-4 shadow-md flex gap-6">
          <Link to="/" className="font-semibold hover:underline">Report Emergency</Link>
          <Link to="/track" className="font-semibold hover:underline">Track Emergency</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ReportEmergencyForm />} />
          <Route path="/track" element={<TrackEmergency />} />
        </Routes>
      </div>
    </BrowserRouter>      
    </>
  )
}

export default App
