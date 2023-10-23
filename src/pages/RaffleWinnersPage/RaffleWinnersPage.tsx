import Button from '../../components/Button/Button';
import RaffleIntro from '../../components/RaffleIntro/RaffleIntro';
import RaffleWinner from '../../components/RaffleWinner/RaffleWinner';

const RaffleWinnersPage = () => {
  const raffleIntroTitle = 'Raffle Winners';

  return (
    <main className="rafflewinnerspage">
      <RaffleIntro title={raffleIntroTitle} />
      <section className="rafflewinnerspage__group">
        <RaffleWinner
          date={'Friday, 24. November 2023'}
          itemOne={'Motorola Edge 3 Neo'}
          itemTwo={'Legion Y25-30 24.5"'}
          winnerOne={'BearBread.'}
          winnerTwo={'TrollBurger.'}
        />
        <RaffleWinner
          date={'Friday, 25. November 2023'}
          itemOne={'Motorola Edge 3 Neo'}
          itemTwo={'Legion Y25-30 24.5"'}
          winnerOne={'Me.'}
          winnerTwo={'You.'}
        />
        <RaffleWinner
          date={'Friday, 26. November 2023'}
          itemOne={'Motorola Edge 3 Neo'}
          itemTwo={'Legion Y25-30 24.5"'}
          timeOne={'16:00'}
          timeTwo={'18:00'}
        />
        <p className="rafflewinnerspage__chance">
          You still have a chance at becoming the lucky winner of either a Motorola Edge 3 Neo or a
          Lenovo 24.5” G25-20 monitor.
        </p>
        <Button modifier="go">Join The Raffle</Button>
      </section>
    </main>
  );
};

export default RaffleWinnersPage;
