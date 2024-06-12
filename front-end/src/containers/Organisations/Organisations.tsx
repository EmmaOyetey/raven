import Nav from "../../components/Nav/Nav";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";
import organisationType from "../../types/organisationType";
import "./Organisations.scss";
import { Link } from "react-router-dom";
import DropDownBox from "../../components/DropDownBox/DropDownBox";
import OrganisationType from "../../types/organisationType";
import { ChangeEvent, useState, useEffect } from "react";

type OrganisationProps = {
  allOrganisations: organisationType[];
};

const Organisations = ({ allOrganisations }: OrganisationProps) => {
  const [filteredOrganisations, setFilteredOrganisations] = useState(allOrganisations);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const items: string[] = [
    "Careers",
    "Creative Arts",
    "Curriculum",
    "Life Skills",
    "Mental Health",
    "Physical Activity",
    "PSHE",
    "Tech"
  ];

  const handleFilterBySupportArea = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTerm = event.target.value;
    setSearchTerm(selectedTerm);
  };

  useEffect(() => {
    applySearchTerm();
  }, [searchTerm]);

  const applySearchTerm = () => {
    if (searchTerm === "") {
      setFilteredOrganisations(allOrganisations);
    } else {
      const filtered = allOrganisations.filter((organisation) => {
        const key = convertToCamelCase(searchTerm);
        return organisation[key as keyof OrganisationType] === true;
      });
      setFilteredOrganisations(filtered);
    }
  };

  const convertToCamelCase = (str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase()
      )
      .replace(/\s+/g, '');
  };

  return (
    <>
      <Nav />
      <h1>Explore Organisations</h1>
      <div className="page-container--organisations">
        <DropDownBox 
          items={items}
          searchTerm={searchTerm}
          label="Find support :"
          handleFilterBySupportArea={handleFilterBySupportArea}
        />    
        <div className="organisations-content">
            {filteredOrganisations.length > 0 ? (
              filteredOrganisations.map((organisation) => (
                <div className="organisations-content__results">
                <Link to={`/organisation/${organisation.id}`} key={organisation.id}>
                  <OrganisationCard
                    name={organisation.name}
                    imageUrl={String(organisation.logo)}
                    overview={organisation.overview}
                  />
                </Link>
              </div>  
              ))
            ) : (
              <div className="organisations-content__no-results">
                <p>No organisations found matching the selected support area.</p>
                <p>
                  You can <a href="/organisations/add"><span style={{ fontFamily: 'Major Mono Display, monospace' }}> Add an Organisation</span></a>
                </p>
              </div>
            )}
            </div>
          
      </div>
    </>
  );
};

export default Organisations;