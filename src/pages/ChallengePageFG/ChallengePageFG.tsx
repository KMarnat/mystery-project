import Hero from '../../components/Hero/Hero';
import fgImage from '../../assets/game-images/fallguys.svg';
import JoinChallenge from '../../components/JoinChallenge/JoinChallenge';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ChallengeFaq from '../../components/ChallengeFaq/ChallengeFaq';
import leaderboardData from './utils/LeaderboardData';

const ChallengePageFG = () => {
  return (
    <main className="challengepagefg">
      <Hero banner={fgImage} modifier="normal" />
      <JoinChallenge title="Fall Guys Challenge" subTitle="Fall Guys" />
      <Leaderboard data={leaderboardData} />
      <ChallengeFaq>
        <div className="challengepagefg__score">
          <span className="fancy-label">Position in Each Round</span>
          <p>divided by 100</p>
        </div>
        <div className="challengepagefg__score">
          <span className="fancy-label">Gold medal</span>
          <p>150 points</p>
        </div>

        <div className="challengepagefg__score">
          <span className="fancy-label">Silver medal</span>
          <p>100 points</p>
        </div>

        <div className="challengepagefg__score">
          <span className="fancy-label">Bronze medal</span>
          <p>50 points</p>
        </div>

        <div className="challengepagefg__score">
          <span className="fancy-label">Round Win</span>
          <p>20 points</p>
        </div>

        <div className="challengepagefg__score">
          <span className="fancy-label">Crown Points</span>
          <p>30 points</p>
        </div>
      </ChallengeFaq>
    </main>
  );
};

export default ChallengePageFG;
