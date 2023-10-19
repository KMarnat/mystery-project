import Button from '../Button/Button';

interface ChallengeProps {
  question: string;
  title: string;
  image: string;
}

const Challenge: React.FC<ChallengeProps> = ({ question, title, image }) => {
  return (
    <section className="challenge">
      <h1 className="challenge__question">{question}</h1>
      <h3 className="challenge__title">{title}</h3>
      <img src={image} alt="game poster" className="challenge__poster" />

      <div className="challenge__cta">
        <Button modifier="go">Score The Most Points</Button>
        <progress value="30" max="100" className="challenge__progress"></progress>
      </div>
    </section>
  );
};

export default Challenge;
