import React, { useCallback } from "react";
import { IPlanOption } from "../constants/index.ts";

export const SYPCard: React.FC<
  IPlanOption & { rate: string; displayYearly: boolean }
> = ({ Icon, title, price, rate, displayYearly }) => {
  const handleNextButton = useCallback(() => {}, []);
  return (
    <div className="syp-card">
      <Icon className="syp-arcade-icon" />
      <div className="syp-card-description">
        <p className="syp-description-title">{title}</p>
        <p className="syp-description-price">{`$${price}/${rate}`}</p>
        {displayYearly && <p className="syp-promo-text">2 months free</p>}
      </div>
    </div>
  );
};
