
import { useParams } from 'react-router-dom';
import OrganisationInfo from '../../components/OrganisationInfo/OrganisationInfo';
import OrganisationType from '../../types/organisationType';

type OrganisationProfileProps = {
  allOrganisations: OrganisationType[];
};

const OrganisationProfile = ({ allOrganisations }: OrganisationProfileProps) => {
  const { organisationName } = useParams();
  const organisation = allOrganisations.find(org => org.name === organisationName);

  if (!organisation) {
    return <div>Organisation not found</div>;
  }

  return <OrganisationInfo organisation={organisation} />;
};

export default OrganisationProfile;