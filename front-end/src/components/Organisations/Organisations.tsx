import OrganisationCard from "../OrganisationCard/OrganisationCard"
import organisationType from "../../types/organisationType";
import "./Organisation.scss";
import { Link } from "react-router-dom";

type OrganisationProps = {
  organisations: organisationType[];
};

const Organisations = ({ organisations }: OrganisationProps) => {
  const filteredOrganisations = organisations.filter((organisation) => organisation.logo);

  return (
    <div className="organisations">
      <div className="organisations__content">
        {filteredOrganisations.map((organisation) => (
          <Link to = {`/organisation/${organisation.id}`}key={organisation.id}>
          <OrganisationCard
            name={organisation.name}
            imageUrl={String(organisation.logo)}
            overview={organisation.overview}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Organisations;