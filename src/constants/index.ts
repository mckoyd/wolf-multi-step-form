import { ReactComponent as ArcadeIcon } from "../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../assets/images/icon-pro.svg";

export const layout = {
  mobile: 375,
  desktop: 1440,
};

export const colors = {
  primary: {
    marineBlue: "hsl(213, 96%, 18%)",
    purplishBlue: "hsl(243, 100%, 62%)",
    pastelBlue: "hsl(228, 100%, 84%)",
    lightBlue: "hsl(206, 94%, 87%)",
    strawberryRed: "hsl(354, 84%, 57%)",
  },
  neutral: {
    coolGray: "hsl(231, 11%, 63%)",
    lightGray: "hsl(229, 24%, 87%)",
    magnolia: "hsl(217, 100%, 97%)",
    alabaster: "hsl(231, 100%, 99%)",
    white: "hsl(0, 0%, 100%)",
  },
};

export interface IPathNamePerNumber {
  [key: number]: {
    path: string;
    planTitle: string;
  };
}

export const numbers: number[] = [1, 2, 3, 4];
export const pathNamesPerNumber: IPathNamePerNumber = {
  1: {
    path: "/",
    planTitle: "your info",
  },
  2: { path: "/select-your-plan", planTitle: "select plan" },
  3: { path: "/add-ons", planTitle: "add-ons" },
  4: { path: "/finish", planTitle: "summary" },
};

export interface IPlanOption {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  price: number;
}

export const planOptions: IPlanOption[] = [
  { Icon: ArcadeIcon, title: "Arcade", price: 9 },
  { Icon: AdvancedIcon, title: "Advanced", price: 12 },
  { Icon: ProIcon, title: "Pro", price: 15 },
];
