import { atom } from "recoil";
import { IPlanOption } from "../constants";

export const selecetedPlanOptionState = atom({
  key: "selectedPlanOptionState",
  default: {} as IPlanOption,
});
