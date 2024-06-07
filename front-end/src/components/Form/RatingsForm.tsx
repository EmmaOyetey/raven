import React, { useState } from 'react';
import RatingsType from '../../types/ratingsType';
import "./RatingsForm.scss";

type RatingsFormProps = {
    onSubmit: (formValues: RatingsType) => void;
    organisationId: number;
};

const RatingsForm = ({ onSubmit, organisationId }: RatingsFormProps) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newRating: RatingsType = {
            organisation: { id: organisationId },
            rating,
            comment,
            name,
            createdAt: new Date().toISOString()
        };
        console.log({ newRating });
        onSubmit(newRating);
    };

    return (
        <div className="ratings-form">
            <h1 className="ratings-form__title">Rate Organisation</h1>
            <form onSubmit={handleSubmit} className="ratings-form__form">
                <div className="ratings-form__group">
                    <label className="ratings-form__group-label">Rating: (0, lowest to 5 being highest)</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        min="1"
                        max="5"
                        className="ratings-form__group-input"
                    />
                </div>
                <div className="ratings-form__group">
                    <label className="ratings-form__group-label">Share your Comments:</label>
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="ratings-form__group-input"
                    />
                </div>
                <div className="ratings-form__group">
                    <label className="ratings-form__group-label">Your Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="ratings-form__group-input"
                    />
                </div>
                <button type="submit" className="ratings-form__button">Submit Rating</button>
            </form>
        </div>
    );
};

export default RatingsForm;