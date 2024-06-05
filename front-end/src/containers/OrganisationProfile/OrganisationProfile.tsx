
import { useParams } from 'react-router-dom';
import OrganisationInfo from '../../components/OrganisationInfo/OrganisationInfo';
import OrganisationType from '../../types/organisationType';
import Nav from '../../components/Nav/Nav';

type OrganisationProfileProps = {
  allOrganisations: OrganisationType[];
};

const OrganisationProfile = ({ allOrganisations }: OrganisationProfileProps) => {
  const { organisationName } = useParams();
  const organisation = allOrganisations.find(org => org.name === organisationName);

  if (!organisation) {
    return (
      <div>
        <Nav /> {/* Add the Nav component here */}
        Organisation not found
      </div>
    );
  }

  return (
    <div>
      <Nav /> {/* Add the Nav component here */}
      <OrganisationInfo organisation={organisation} />
    </div>
  );
};
export default OrganisationProfile;