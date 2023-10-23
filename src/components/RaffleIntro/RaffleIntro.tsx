interface RaffleIntroProps {
  title: string;
  children?: React.ReactNode;
}

const RaffleIntro: React.FC<RaffleIntroProps> = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>
        Every day we will draw two winners in our daily raffles. The winners will be drawn randomly
        amongst all users having signed up for the daily raffles.
      </p>
      {children}
    </section>
  );
};

export default RaffleIntro;
