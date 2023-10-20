// CS data

interface LeaderboardItem {
  position: number;
  image: string;
  username: string;
  score: number | string;
}

const leaderboardData: LeaderboardItem[] = [
  {
    position: 1,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'ToastyBun',
    score: 15240,
  },
  {
    position: 2,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'SizzlingBacon',
    score: 13450,
  },
  {
    position: 3,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'CrispyFry',
    score: 12030,
  },
  {
    position: 4,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'GoldenWaffle',
    score: 10520,
  },
  {
    position: 5,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'FluffyPancake',
    score: 9200,
  },
  {
    position: 6,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'ButteryCroissant',
    score: 8100,
  },
  {
    position: 7,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'MapleSyrup',
    score: 7200,
  },
  {
    position: 8,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'JammyToast',
    score: 6400,
  },
  {
    position: 9,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'CinnamonRoll',
    score: 5600,
  },
  {
    position: 10,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'BlueberryMuffin',
    score: 4900,
  },
];

export default leaderboardData;
