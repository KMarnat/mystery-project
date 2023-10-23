import { Link } from 'react-router-dom';
import RaffleDetails from '../../components/RaffleDetails/RaffleDetails';
import RaffleIntro from '../../components/RaffleIntro/RaffleIntro';
import RaffleItems from '../../components/RaffleItems/RaffleItems';
import Button from '../../components/Button/Button';

const RafflesPage = () => {
  const raffleIntroTitle = 'Daily Raffle';

  return (
    <main className="rafflespage">
      <RaffleIntro title={raffleIntroTitle}>
        <Link to={'/raffles/winners'}>
          <Button modifier="go">See The Winners</Button>
        </Link>
      </RaffleIntro>
      <RaffleItems />
      <RaffleDetails />
    </main>
  );
};

export default RafflesPage;
