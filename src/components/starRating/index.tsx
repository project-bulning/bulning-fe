import { useState } from 'react';
import useStarRatingStyle from '@components/starRating/useStarRatingStyle';

interface StarRatingProps {
  defaultValue?: number;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  onChange?: (value: number) => void;
}

function StarRating({
  defaultValue = 0, readOnly = false, size = 'medium', onChange,
}: StarRatingProps) {
  const [value, setValue] = useState<number>(Math.max(0, Math.min(defaultValue, 5)));

  const handleClick = (index: number) => {
    if (readOnly) return;
    const newValue = index + 1;
    setValue(newValue);
    onChange?.(newValue);
  };

  const { starContainerStyle, starStyle } = useStarRatingStyle(size);

  const stars = [{ id: 'star1' }, { id: 'star2' }, { id: 'star3' }, { id: 'star4' }, { id: 'star5' }];

  return (
    <div css={starContainerStyle}>
      {stars.map((star, index) => (
        <span
          key={star.id}
          css={starStyle(index, value, readOnly)}
          onClick={() => handleClick(index)}
          role="presentation"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
