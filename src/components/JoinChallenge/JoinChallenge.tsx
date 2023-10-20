import Button from '../Button/Button';

interface JoinChallengeProps {
  title: string;
  subTitle: string;
}

const JoinChallenge: React.FC<JoinChallengeProps> = ({ title, subTitle }) => {
  return (
    <section className="join-challenge">
      <Button modifier="go">Join This Challenge</Button>
      <h3>{title}</h3>
      <p className="join-challenge__muted">{subTitle}</p>
      <p>
        Defeat your enemies in Counter-Strike 2 and try out the Lenovo LEGION T5 RGB Gaming Desktop.
        Beat your opponent and win great prizes and merchandise.
      </p>
      <div className="join-challenge__time">
        <p>25.11.23 09:00</p>
        <p>25.11.28 18:00</p>
      </div>
      <progress value="30" max="100" className="join-challenge__progress"></progress>
      <div className="join-challenge__buttons">
        <span className="fancy-label">How to win?</span>
        <span className="fancy-label">What to win?</span>
        <span className="fancy-label">Terms</span>
      </div>
    </section>
  );
};
export default JoinChallenge;
