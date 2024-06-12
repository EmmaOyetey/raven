import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Organisation from './containers/Organisations/Organisations';
import Home from './containers/Home/Home';
import CreateOrganisation from './containers/Create/CreateOrganisation';
import About from './containers/About/About';
import OrganisationProfile from './containers/OrganisationProfile/OrganisationProfile';
import OrganisationType from './types/organisationType';
import RateOrganisation from './containers/Rate/RateOrganisation';

const App = () => {
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

  const [allOrganisations, setAllOrganisations] = useState<OrganisationType[]>([]);

  useEffect(() => {
    const getAllOrganisations = async () => {
      const data = await fetchAllOrganisations();
      setAllOrganisations(data);
    };
    getAllOrganisations();
  }, []);

  return (
    <Router>
      <div className="page__body">
        <div className="page__background"></div>
        <div className="page__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organisations" element={<Organisation allOrganisations={allOrganisations} />} />
            <Route path="/organisations/add" element={<CreateOrganisation />} />
            <Route path="/about" element={<About />} />
            <Route path="/organisation/:organisationId" element={<OrganisationProfile allOrganisations={allOrganisations} />} />
            <Route path="/organisation/:organisationId/rate" element={<RateOrganisation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


