import "./OrganisationCard.scss"

type OrganisationCardProps = {
  name: string,
  imageUrl: string,
  overview: string,
};


const OrganisationCard = ({name, imageUrl, overview} : OrganisationCardProps) => {

    const truncateDescription = () => {
        const words = overview.split(' ');
        if (words.length > 30) {
          return words.slice(0, 30).join(' ') + '...';
        }
        return overview;
    }

const className = `organisation-card`;
    return (
        <div className={className}>
        <div className="organisation-card__content">
          <div className="organisation-card__header">
            <p className="organisation-card__name">{name}</p>
            <div className="organisation-card__image-container">
              <img
                className="organisation-card__image"
                key={name}
                src={imageUrl}
                alt={name}
              />
            </div>
          </div>
          <p className="organisation-card__abrv-info">{truncateDescription()}</p>
        </div>
      </div>
    );

};

export default OrganisationCard;