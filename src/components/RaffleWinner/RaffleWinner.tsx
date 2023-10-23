import phone from '../../assets/raffle-items/phone.svg';
import monitor from '../../assets/raffle-items/monitor-2.svg';

interface RaffleWinnerProps {
  date: string;
  itemOne: string;
  itemTwo: string;
  winnerOne?: string;
  winnerTwo?: string;
  timeOne?: string;
  timeTwo?: string;
}

const RaffleWinner: React.FC<RaffleWinnerProps> = ({
  date,
  itemOne,
  itemTwo,
  winnerOne,
  winnerTwo,
  timeOne,
  timeTwo,
}) => {
  return (
    <div className="rafflewinner">
      <h4 className="rafflewinner__date">{date}</h4>
      <div className="rafflewinner__details">
        <img src={phone} alt="" />
        <div>
          <h6>{itemOne}</h6>
          {winnerOne ? (
            <p>
              The winner is <strong>{winnerOne}</strong>
            </p>
          ) : (
            <p className="rafflewinner__upcoming">Selected at: {timeOne}</p>
          )}
        </div>
      </div>
      <div className="rafflewinner__details">
        <img src={monitor} alt="" />
        <div>
          <h6>{itemTwo}</h6>
          {winnerTwo ? (
            <p>
              The winner is <strong>{winnerTwo}</strong>
            </p>
          ) : (
            <p className="rafflewinner__upcoming">Selected at: {timeTwo}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RaffleWinner;
