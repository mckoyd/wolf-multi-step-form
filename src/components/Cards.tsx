import React, { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { planOptions, IPlanOption } from "../constants";
import { selecetedPlanOptionState } from "../state/planOptionData";

export const SYPCard: React.FC<
  IPlanOption & {
    rate: string;
    displayYearly: boolean;
    planIndex: number;
  }
> = ({ Icon, title, price, rate, displayYearly, planIndex }) => {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const setSelectedPlanOption = useSetRecoilState<IPlanOption>(
    selecetedPlanOptionState
  );

  const handlePlanClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const allCardElements = Array.from(
        event.currentTarget.parentNode?.children || []
      );

      allCardElements.forEach((cardElement: Element, elementIndex: number) => {
        elementIndex !== planIndex &&
          cardElement.classList.remove("syp-selected-card");
      });

      event.currentTarget.classList.toggle("syp-selected-card");
      setSelectedCard(planIndex);
      setSelectedPlanOption(planOptions[planIndex]);
    },
    [planIndex]
  );

  return (
    <div className={`syp-card`} onClick={handlePlanClick}>
      <Icon className="syp-arcade-icon" />
      <div className="syp-card-description">
        <p className="syp-description-title">{title}</p>
        <p className="syp-description-price">{`$${price}/${rate}`}</p>
        {displayYearly && <p className="syp-promo-text">2 months free</p>}
      </div>
    </div>
  );
};
