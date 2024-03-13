import React, { useCallback } from "react";
import { IPlanOption } from "../constants";

export const SYPCard: React.FC<IPlanOption & { rate: string }> = ({
  Icon,
  title,
  price,
  rate,
}) => {
  const handleNextButton = useCallback(() => {}, []);
  return (
    <div className="syp-card">
      <Icon className="syp-arcade-icon" />
      <div className="syp-card-description">
        <p className="syp-description-title">{title}</p>
        <p className="syp-description-price">{`$${price}/${rate}`}</p>
      </div>
    </div>
  );
};
