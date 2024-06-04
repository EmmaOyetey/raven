import './App.scss'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organisation from './containers/Organisations/Organisations'
import Home from './containers/Home/Home'
import CreateOrganisation from './containers/Create/CreateOrganisation';
const App= () => {
 //const [count, setCount] = useState(0)

 const fetchAllOrganisations = async () => {
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

const [allOrganisations, setAllOrganisations] = useState([]);

  useEffect(() => {
    const getAllOrganisations = async () => {
      const data = await fetchAllOrganisations();
      setAllOrganisations(data);
    };
    getAllOrganisations();
  }, []);

  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organisations" element={<Organisation allOrganisations = {allOrganisations} />} />
            <Route path="/organisations/add" element = {<CreateOrganisation />} />
      </Routes>
    </Router>

  )
}

export default App


