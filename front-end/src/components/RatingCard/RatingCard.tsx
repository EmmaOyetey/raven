import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import "./RatingCard.scss";

type RatingCardProps = {
  rating: number;
  comment: string;
  name: string;
};

const truncateComment = (comment: string, maxLength: number): string => {
  if (comment.length <= maxLength) return comment;
  return comment.substring(0, maxLength).split(" ").slice(0, -1).join(" ") + "...";
};

const RatingCard = ({ rating, comment, name }: RatingCardProps) => {
  const truncatedComment = truncateComment(comment, 100);
  const safeRating = !isNaN(rating) ? rating : 0;

  return (
    <div className="rating-card">
        <div className="rating-card__star-rating">
          <Box component="fieldset" borderColor="transparent" sx={{ display: 'flex', alignItems: 'center' }}>
            
            <Rating name="read-only" value={safeRating} readOnly sx={{ color: 'gold', fontSize: '2rem' }} />
          </Box>
        </div>
        <p className="rating-card__abrv-info">{truncatedComment}</p>
        <p className="rating-card__name">{name}</p>
    </div>
    
  );
};

export default RatingCard;
