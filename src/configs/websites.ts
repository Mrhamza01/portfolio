import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-portfolio",
        title: "Portfolio",
        img: "img/sites/github.svg",
        link: "https://hamzaghafoor.vercel.app/",
      }
    ],
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Mrhamza01",
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/",
      }
    ],
  },
};

export default websites;
