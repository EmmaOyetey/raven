import './App.scss'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organisation from './containers/Organisations/Organisations'
import Home from './containers/Home/Home'
const App= () => {
 //const [count, setCount] = useState(0)

 const fetchOrganisations = async () => {
  try {
    const response = await fetch('http://localhost:8080/organisations');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    const getOrganisations = async () => {
      const data = await fetchOrganisations();
      setOrganisations(data);
    };
    getOrganisations();
  }, []);

  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organisations" element={<Organisation organisations = {organisations} />} />
      </Routes>
    </Router>

  )
}

export default App


