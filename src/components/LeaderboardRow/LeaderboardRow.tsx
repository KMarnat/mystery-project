interface LeaderboardRowProps {
  position: number;
  image: string;
  user: string;
  score: number | string;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ position, image, user, score }) => {
  return (
    <div className="leaderboardrow">
      <p className="leaderboardrow__placement">{position}</p>
      <div className="user">
        <img src={image} alt="" className="user__image" />

        <h5 className="user__name">{user}</h5>
      </div>
      <p className="leaderboardrow__points">{score}</p>
    </div>
  );
};

export default LeaderboardRow;
