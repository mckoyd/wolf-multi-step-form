import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { planOptions, IPlanOption, IAddOnOption } from "../constants";
import { addOnState } from "../state/addOnState";
import { selecetedPlanOptionState } from "../state/planOptionData";

import "../styles/AddOns.css";

export const SYPCard: React.FC<
  IPlanOption & {
    rate: string;
    displayYearly: boolean;
    planIndex: number;
  }
> = ({ Icon, title, price, rate, displayYearly, planIndex }) => {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const setSelectedPlanOption = useSetRecoilState<{
    price: number;
    title: string;
    isYearly: boolean;
  }>(selecetedPlanOptionState);

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
      setSelectedPlanOption({ price, title, isYearly: displayYearly });
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

export const AOCard: React.FC<IAddOnOption> = ({
  title,
  description,
  price,
}) => {
  const { isYearly } = useRecoilValue(selecetedPlanOptionState);
  const setAddOn = useSetRecoilState(addOnState);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleAOCardCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      if (isChecked) {
        setAddOn((prev) => [
          ...prev,
          { title, price: isYearly ? price * 10 : price },
        ]);
        setIsChecked(true);
      } else {
        setAddOn((prev) => prev.filter((addOn) => addOn.title !== title));
        setIsChecked(false);
      }
    },
    []
  );

  return (
    <div className={`ao-card ${isChecked && "ao-checked"}`}>
      <input
        type="checkbox"
        className="ao-checkbox"
        onChange={handleAOCardCheckbox}
      />
      <div className="ao-description-container">
        <p className="ao-description-title">{title}</p>
        <p className="ao-description">{description}</p>
      </div>
      <p className="ao-price">
        +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}{" "}
      </p>
    </div>
  );
};
