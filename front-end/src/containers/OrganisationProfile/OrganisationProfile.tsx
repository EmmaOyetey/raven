
import { useParams } from 'react-router-dom';
import OrganisationInfo from '../../components/OrganisationInfo/OrganisationInfo';
import OrganisationType from '../../types/organisationType';
import Nav from '../../components/Nav/Nav';

type OrganisationProfileProps = {
  allOrganisations: OrganisationType[];
  //organisationId:number;
};

const OrganisationProfile = ({ allOrganisations }: OrganisationProfileProps) => {
  const { organisationId } = useParams();
  const organisation = allOrganisations.find(org => org.id === Number(organisationId));
console.log ({organisation});
  if (!organisation) {
    return (
      <div>
        <Nav /> 
        Organisation not found
      </div>
    );
  }

  return (
    <div>
      <Nav /> 
      <OrganisationInfo organisation={organisation} />
    </div>
  );
};
export default OrganisationProfile;