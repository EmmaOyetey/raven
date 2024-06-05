import OrganisationType from "../../types/organisationType";
import "./OrganisationInfo.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

type OrganisationInfoProps = {
  organisation: OrganisationType;
};

const OrganisationInfo = ({ organisation }: OrganisationInfoProps) => {
  const { organisationName } = useParams();
  console.log(organisationName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [organisationName]);

  const supportAreas = Object.keys(organisation)
  .filter((key) => organisation[key as keyof OrganisationType] === true)
  .map((key) => key.replace(/([A-Z])/g, ' $1').trim())
  .map((key) =>
    key
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );

  return (
    <article className="organisation-info">
      <div className="organisation-info__banner">
        <img className="organisation-info__image" src={organisation.logo ?? undefined} alt={organisation.name} />
      </div>
      <div className="organisation-info__content">
        <div className="organisation-info__header">
          <h2 className="organisation-info__name">
            {organisation.name}
          </h2>
          <Link to="/organisations" className="close-link">
            <CloseIcon /> {/* Use the CloseIcon component directly */}
          </Link>
        </div>
        <div className="organisation-info__supportAreas">
          <h3 className="organisation-info__supportAreas-header">Support Areas:</h3>
          <p>
            {supportAreas.join(", ")}
          </p>
        </div> 
        <p className="organisation-info__overview">About: {organisation.overview ?? `No description available`}</p>
        <p className="organisation-info__websiteURL">For more info visit: {organisation.websiteURL}</p>
        <p className="organisation-info__impactURL">Find out about their impact: {organisation.impactURL}</p>
      </div>
    </article>
  );
};

export default OrganisationInfo;
