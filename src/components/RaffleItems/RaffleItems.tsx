import phone from '../../assets/raffle-items/phone.svg';
import monitor from '../../assets/raffle-items/monitor.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const RaffleItems = () => {
  return (
    <section className="raffleitems">
      <h2>What's up for grabs?</h2>
      <div className="raffleitems__product">
        <img src={phone} alt="" />
        <h5>Win a Motorola Edge 3 Neo</h5>
        <p>
          Every day we’re giving away a Motorola Edge 3 Neo. Anyone who has signed up on the day
          goes into the draw.
        </p>
      </div>
      <div className="raffleitems__product">
        <img src={monitor} alt="" />
        <h5>Win a Legion Y25-30 24.5" monitor</h5>
        <p>
          Every day we’re giving away a Lenovo Legion Y25-30 gaming monitor. Anyone who has signed
          up on the day goes into the draw.
        </p>
      </div>
      <Button modifier="go">Join The Raffle</Button>
      <Link to={'/raffles/winners'}>
        <Button modifier="go">See The Winners</Button>
      </Link>
    </section>
  );
};

export default RaffleItems;
