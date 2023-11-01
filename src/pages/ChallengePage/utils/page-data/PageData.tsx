import { LeaderboardItem } from '../leaderboard-data/LeaderboardData';
import {
  leaderboardDataCs,
  leaderboardDataF1,
  leaderboardDataFg,
} from '../leaderboard-data/LeaderboardData';
import csImage from '../../../../assets/game-images/cs2.svg';
import f1Image from '../../../../assets/game-images/f1.svg';
import fgImage from '../../../../assets/game-images/fallguys.svg';

interface PageData {
  image: string;
  modifier: string;
  title: string;
  subTitle: string;
  leaderboardData: LeaderboardItem[];
  challengePageClass: string;
  faqLabel: React.ReactNode;
}

// PageData for CS Challenge
const csChallengePageData: PageData = {
  image: csImage,
  modifier: 'normal',
  title: 'CS2 1v1 Challenge',
  subTitle: 'Counter-Strike 2',
  leaderboardData: leaderboardDataCs,
  challengePageClass: 'challengepagecs',
  faqLabel: <span className="fancy-label">In-game score</span>,
};

// PageData for F1 Challenge
const f1ChallengePageData: PageData = {
  image: f1Image,
  modifier: 'normal',
  title: 'F1® 23 Challenge',
  subTitle: 'EA SPORTS™ F1® 23',
  leaderboardData: leaderboardDataF1,
  challengePageClass: 'challengepagef1',
  faqLabel: (
    <>
      <span className="fancy-label">Fastest Lap Time</span>
      <span className="fancy-label">Australia</span>
    </>
  ),
};

// PageData for FG Challenge
const fgChallengePageData: PageData = {
  image: fgImage,
  modifier: 'normal',
  title: 'Fall Guys Challenge',
  subTitle: 'Fall Guys',
  leaderboardData: leaderboardDataFg,
  challengePageClass: 'challengepagefg',
  faqLabel: (
    <>
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
    </>
  ),
};

export { csChallengePageData, fgChallengePageData, f1ChallengePageData };
