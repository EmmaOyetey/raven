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
    <>
      <article className="organisation-info">
        <div className="organisation-info__banner">
          <Link to="/organisations" className="organisation-info__close-link">
            <CloseIcon />
          </Link>
        </div>
        <div className="organisation-info__content">
          <div className="organisation-info__header">
            <img className="organisation-info__image" src={organisation.logo ?? undefined} alt={organisation.name} />
            <h2 className="organisation-info__name">{organisation.name}</h2>
          </div>
          <div className="organisation-info__support-areas">
            <h3 className="organisation-info__support-areas-header">Support Areas:</h3>
            <p>
              {supportAreas.map((area, index) => (
                <span key={index}>{area}{index < supportAreas.length - 1 ? ", " : ""}</span>
              ))}
            </p>
          </div>
          <h3 className="organisation-info__overview-header">About:</h3>
          <p className="organisation-info__overview">{organisation.overview ?? `No description available`}</p>
          <p className="organisation-info__website-url">
            For more info visit: <a href={organisation.websiteURL} target="_blank" rel="noopener noreferrer">{organisation.websiteURL}</a>
          </p>
          <p className="organisation-info__impact-url">
            Find out about their impact: <a href={organisation.impactURL} target="_blank" rel="noopener noreferrer">{organisation.impactURL}</a>
          </p>
        </div>
      </article>
    </>
  );
};

export default OrganisationInfo;
