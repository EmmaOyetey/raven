import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import RatingsForm from '../../components/Form/RatingsForm';
import RatingsType from '../../types/ratingsType';
import "./RateOrganisation.scss";

const RateOrganisation = () => {
    const { organisationId } = useParams<{ organisationId?: string }>();
    const navigate = useNavigate();

    if (!organisationId) {
        return (
            <>
                <Nav />
                <div>Error: Organisation ID is missing</div>
            </>
        );
    }

    const parsedOrganisationId = parseInt(organisationId, 10);

    const handleSubmit = async (newRating: RatingsType) => {
        try {
            const result = await fetch(`http://localhost:8080/organisations/rate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRating)
            });

            if (result.ok) {
                alert("Rating added successfully");
                const createdRating = await result.json();
                navigate("/organisation/" + createdRating.organisation.id, { state: createdRating });
            } else {
                const message = await result.text();
                alert("Failed to add rating: " + message);
            }
        } catch (error) {
            alert('Error adding rating');
            console.error('Error adding rating:', error);
        }
    };

    return (
        <>
            <Nav />
            <section>
                <h2 className="rating__organisation-name">{organisationId}</h2>
                <RatingsForm organisationId={parsedOrganisationId} onSubmit={handleSubmit} />
            </section>
        </>
    );
};

export default RateOrganisation;