import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import RatingsForm from '../../components/Form/RatingsForm';
import RatingsType from '../../types/ratingsType';
import "./RateOrganisation.scss";

const RateOrganisation = () => {
    const { organisationId } = useParams<{ organisationId?: string }>();
    const navigate = useNavigate();
    const [organisationName, setOrganisationName] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrganisationDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/organisations/${organisationId}`);
                if (response.ok) {
                    const organisation = await response.json();
                    setOrganisationName(organisation.name);
                } else {
                    console.error('Failed to fetch organisation details');
                }
            } catch (error) {
                console.error('Error fetching organisation details:', error);
            }
        };

        if (organisationId) {
            fetchOrganisationDetails();
        }
    }, [organisationId]);

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
            <section className = "page-container--rate">
                <h2 className="rating__organisation-name">
                    {organisationName ? organisationName : 'Loading...'}
                </h2>
                <RatingsForm organisationId={parsedOrganisationId} onSubmit={handleSubmit} />
            </section>
        </>
    );
};

export default RateOrganisation;