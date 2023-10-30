import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';

interface LeaderboardItem {
  position: number;
  image: string;
  username: string;
  score: number | string;
}

interface LeaderboardProps {
  data: LeaderboardItem[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <section className="leaderboard">
      <div className="leaderboard__grid">
        {data.map((row, i) => (
          <LeaderboardRow
            position={row.position}
            image={row.image}
            user={row.username}
            score={row.score}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
