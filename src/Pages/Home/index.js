import { CurvedText, ModeList } from "../../Components";

export function Home() {
  const modes = [
    {
      name: "Basic Strategy",
      path: "/basic-strategy-settings",
    },
    {
      name: "Card Counting",
      path: "/card-counting-settings",
    },
  ];

  return (
    <>
      <CurvedText text="Blackjack Trainer" />
      <h2>Choose your mode</h2>
      <ModeList modes={modes} />
    </>
  );
}
