import { useParams } from 'react-router-dom';
import OrganisationInfo from '../../components/OrganisationInfo/OrganisationInfo';
import OrganisationType from '../../types/organisationType';
import Nav from '../../components/Nav/Nav';
import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import RatingsType from '../../types/ratingsType'; // Importing RatingsType

type OrganisationProfileProps = {
  allOrganisations: OrganisationType[];
};

const OrganisationProfile = ({ allOrganisations }: OrganisationProfileProps) => {
  const { organisationId } = useParams();
  const organisation = allOrganisations.find(org => org.id === Number(organisationId));
  const [ratings, setRatings] = useState<RatingsType[]>([]); // Using RatingsType here

  const fetchRatingsData = async (organisationId: string | undefined, limit: number = 5) => {
    try {
      const response = await fetch(`http://localhost:8080/organisations/${organisationId}/rate/recent?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching ratings data:', error);
      return [];
    }
  };

  useEffect(() => {
    const getRatingsData = async () => {
      if (organisationId) {
        const data = await fetchRatingsData(organisationId, 5);
        setRatings(data);
      }
    };

    getRatingsData();
  }, [organisationId]);

  if (!organisation) {
    return (
      <div>
        <Nav /> 
        Organisation not found
      </div>
    );
  }

  return (
    <div className="organisation-page-container">
      <Nav /> 
      <div className="organisation-info">
        <OrganisationInfo organisation={organisation} />
      </div>
      <div className="ratings-container">
        <Carousel ratings={ratings} />
      </div>
    </div>
  );
};

export default OrganisationProfile;