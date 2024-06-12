import OrganisationType from "../../types/organisationType";
import "./OrganisationInfo.scss";
import { Link, useParams } from "react-router-dom";
//import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

type OrganisationInfoProps = {
  organisation: OrganisationType;
};

const OrganisationInfo = ({ organisation }: OrganisationInfoProps) => {
  const { organisationId } = useParams();
  console.log(organisationId);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [organisationId]);

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
        <Link to="/organisations" className="organisation-info__close-link">
          <CloseIcon />
        </Link>
      </div>
      <div className="organisation-info__content">
        <div className="organisation-info__header">
          <div className="organisation-info__details">
            <h2 className="organisation-info__name">{organisation.name}</h2>
            <div className="organisation-info__support-areas">
              <h3 className="organisation-info__support-areas-header">Support Areas:</h3>
              <ul className="organisation-info__support-areas-list">
                {supportAreas.map((area, index) => (
                  <li className="organisation-info__support-area" key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <img className="organisation-info__image" src={organisation.logo ?? undefined} alt={organisation.name} />
        </div>
              <h3 className="organisation-info__overview-header">About:</h3>
              <p className="organisation-info__overview">{organisation.overview ?? `No description available`}</p>
              <h3 className="organisation-info__links-header">Find out More:</h3>
              <p className="organisation-info__website-url">
                For more info visit: <a href={organisation.websiteURL} target="_blank" rel="noopener noreferrer">{organisation.websiteURL}</a>
              </p>
              <p className="organisation-info__impact-url">
                Find out about their impact: <a href={organisation.impactURL} target="_blank" rel="noopener noreferrer">{organisation.impactURL}</a>
              </p>
      
              <div className="organisation-info__ratings-info">
              <h3 className="organisation-info__ratings-header">Ratings:</h3>
                <p>This organisation has received x Ratings</p>
                <p>With an average rating of x</p>
                <p>Recent Ratings For this Organisation:</p>
              </div>
      
              <div className="organisation-info__rate">
              <p>
                <span style={{ fontFamily: 'Major Mono Display' }}>RATE</span> This Organisation:{' '}
                <Link to={`/organisation/${organisation.id}/rate`} className="organisation-info__rate-link">Here</Link>.
              </p>
              </div>
            </div>
          </article>
        );
      };
      
      export default OrganisationInfo;
