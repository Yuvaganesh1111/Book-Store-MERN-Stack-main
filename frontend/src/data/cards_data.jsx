import { HiArrowNarrowDown } from "react-icons/hi";
import { HiArrowNarrowUp } from "react-icons/hi";
import earning from "../cards_image/earning.png";
import orders from "../cards_image/orders.png";
import balance from "../cards_image/balance.png";
import totalsales from "../cards_image/totalsales.png";

const cards = [
    {
      title: "Earning",
      image: earning,
      amount: "$198k",
      date: "this month",
      percent: "37.8% ",
      color: "#00ce00",
      icon: <HiArrowNarrowUp />,
    },
    {
      title: "Orders",
      image: orders,
      amount: "$2.4k",
      date: "this month",
      percent: "2% ",
      color: "red",
      icon: <HiArrowNarrowDown />,
    },
    {
      title: "Balance",
      image: balance,
      amount: "$2.4k",
      date: "this month",
      percent: "2% ",
      color: "red",
      icon: <HiArrowNarrowDown />,
    },
    {
      title: "Total Sale",
      image: totalsales,
      amount: "$89k",
      date: "this week",
      percent: "11% ",
      color: "#00ce00",
      icon: <HiArrowNarrowUp />,
    },
  ];
  export default cards;