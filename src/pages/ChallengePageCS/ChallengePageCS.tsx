import Hero from '../../components/Hero/Hero';
import csImage from '../../assets/game-images/cs2.svg';
import JoinChallenge from '../../components/JoinChallenge/JoinChallenge';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ChallengeFaq from '../../components/ChallengeFaq/ChallengeFaq';
import leaderboardData from './utils/LeaderboardData';

const ChallengePageCS = () => {
  return (
    <main>
      <Hero banner={csImage} modifier="normal" />
      <JoinChallenge title="CS2 1v1 Challenge" subTitle="Counter-Strike 2" />
      <Leaderboard data={leaderboardData} />
      <ChallengeFaq>
        <span className="fancy-label">In-game score</span>
      </ChallengeFaq>
    </main>
  );
};

export default ChallengePageCS;
