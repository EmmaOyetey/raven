import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import RatingsForm from '../../components/Form/RatingsForm';
import RatingsType from '../../types/ratingsType';
import "./RateOrganisation.scss";

const RateOrganisation = () => {
    const { organisationId } = useParams<{ organisationId?: string }>();
    console.log(organisationId);

    // Check if organisationId is undefined and handle accordingly
    if (!organisationId) {
        // Handle the case where organisationId is undefined
        return (
            <>
                <Nav />
                <div>Error: Organisation ID is missing</div>
            </>
        );
    }

    // Parse organisationId to number if needed
    const parsedOrganisationId = parseInt(organisationId, 10);

    const handleSubmit = async (newRating: RatingsType) => {
        try {
            const result = await fetch(`http://localhost:8080//organisation/${parsedOrganisationId}/rate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRating)
            });

            if (result.ok) {
                // Handle successful response
                console.log("Rating added successfully");
            } else {
                // Handle error response
                console.error("Failed to add rating");
            }
        } catch (error) {
            console.error('Error adding rating:', error);
        }
    };

    return (
        <>
            <Nav />
            <section>
                <h2 className="rating__organisation-name">{organisationId}</h2>
                <RatingsForm organisationId={parsedOrganisationId || 0} onSubmit={handleSubmit} />
            </section>
        </>
    );
};

export default RateOrganisation;