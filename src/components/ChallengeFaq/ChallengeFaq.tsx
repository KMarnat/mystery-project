interface ChallengeFaqProps {
  children: React.ReactNode;
}

const ChallengeFaq: React.FC<ChallengeFaqProps> = ({ children }) => {
  return (
    <section className="challengefaq">
      <div className="challengefaq__question">
        <h5>What is my score based on?</h5>
        {children}
      </div>
      <div className="challengefaq__question">
        <h5>What can I win?</h5>
        <p>
          At the end of each challenge, the number one on the leaderboard will win awesome Lenovo
          Legion merchandise.
        </p>
      </div>
      <div className="challengefaq__question">
        <h5>Terms and Conditions</h5>
        <p>
          You need to be present at Dreamhack and show up at the Lenovo Legion booth the day you
          have won and within opening hours in order to claim your prize. If you are unable to show
          up, then we can unfortunately not grand you your otherwise well deserved prize. It will
          instead be awarded to the next player on the leaderboard.
        </p>
        <p>
          Counter-Strike and Counter-Strike 2 is a registered trademark of Valve Corporation.
          Trademarks are the property of their respective owners. Game materials copyright Valve
          Corporation. Valve Corporation has not endorsed and is not responsible for this site or
          its content.
        </p>
      </div>
    </section>
  );
};

export default ChallengeFaq;
