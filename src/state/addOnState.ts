import { atom } from "recoil";

export const addOnState = atom({
  key: "addOnState",
  default: [] as { title: string; price: number }[],
});
