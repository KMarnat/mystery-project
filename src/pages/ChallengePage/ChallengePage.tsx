import { useParams } from 'react-router-dom';
import {
  csChallengePageData,
  fgChallengePageData,
  f1ChallengePageData,
} from './utils/page-data/PageData';
import Hero from '../../components/Hero/Hero';
import JoinChallenge from '../../components/JoinChallenge/JoinChallenge';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ChallengeFaq from '../../components/ChallengeFaq/ChallengeFaq';

const ChallengePage: React.FC = () => {
  let image, modifier, title, subTitle, data, challengePageClass, faqLabel;

  const { type } = useParams();

  switch (type) {
    case 'cs':
      image = csChallengePageData.image;
      modifier = csChallengePageData.modifier;
      title = csChallengePageData.title;
      subTitle = csChallengePageData.subTitle;
      data = csChallengePageData.leaderboardData;
      challengePageClass = csChallengePageData.challengePageClass;
      faqLabel = csChallengePageData.faqLabel;
      break;
    case 'fg':
      image = fgChallengePageData.image;
      modifier = fgChallengePageData.modifier;
      title = fgChallengePageData.title;
      subTitle = fgChallengePageData.subTitle;
      data = fgChallengePageData.leaderboardData;
      challengePageClass = fgChallengePageData.challengePageClass;
      faqLabel = fgChallengePageData.faqLabel;
      break;
    case 'f1':
      image = f1ChallengePageData.image;
      modifier = f1ChallengePageData.modifier;
      title = f1ChallengePageData.title;
      subTitle = f1ChallengePageData.subTitle;
      data = f1ChallengePageData.leaderboardData;
      challengePageClass = f1ChallengePageData.challengePageClass;
      faqLabel = f1ChallengePageData.faqLabel;
      break;
    default:
      image = '';
      modifier = '';
      title = '';
      subTitle = '';
      faqLabel = null;
      data = null;
      challengePageClass = '';
  }

  return (
    <main className={challengePageClass}>
      <Hero banner={image} modifier={modifier} />
      <JoinChallenge title={title} subTitle={subTitle} />
      <Leaderboard data={data} />
      <ChallengeFaq>{faqLabel}</ChallengeFaq>
    </main>
  );
};

export default ChallengePage;
