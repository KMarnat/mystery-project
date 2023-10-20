import Hero from '../../components/Hero/Hero';
import f1Image from '../../assets/game-images/f1.svg';
import JoinChallenge from '../../components/JoinChallenge/JoinChallenge';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ChallengeFaq from '../../components/ChallengeFaq/ChallengeFaq';
import leaderboardData from './utils/LeaderboardData';

const ChallengePageF1 = () => {
  return (
    <main>
      <Hero banner={f1Image} modifier="normal" />
      <JoinChallenge title="F1® 23 Challenge" subTitle="EA SPORTS™ F1® 23" />
      <Leaderboard data={leaderboardData} />
      <ChallengeFaq>
        <span className="fancy-label">Fastest Lap Time</span>
        <span className="fancy-label">Australia</span>
      </ChallengeFaq>
    </main>
  );
};

export default ChallengePageF1;
