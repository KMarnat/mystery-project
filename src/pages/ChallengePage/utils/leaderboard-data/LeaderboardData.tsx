export interface LeaderboardItem {
  position: number;
  image: string;
  username: string;
  score: number | string;
}

// CS data
const leaderboardDataCs: LeaderboardItem[] = [
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

// Fg data
const leaderboardDataFg: LeaderboardItem[] = [
  {
    position: 1,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'ToastyBun',
    score: 10240,
  },
  {
    position: 2,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'SizzlingBacon',
    score: 10150,
  },
  {
    position: 3,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'CrispyFry',
    score: 10030,
  },
  {
    position: 4,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'GoldenWaffle',
    score: 9320,
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

// F1 data
const leaderboardDataF1: LeaderboardItem[] = [
  {
    position: 1,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'ToastyBun',
    score: '1:17:481',
  },
  {
    position: 2,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'SizzlingBacon',
    score: '1:18:305',
  },
  {
    position: 3,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'CrispyFry',
    score: '1:19:204',
  },
  {
    position: 4,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'GoldenWaffle',
    score: '1:20:102',
  },
  {
    position: 5,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'FluffyPancake',
    score: '1:21:041',
  },
  {
    position: 6,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'ButteryCroissant',
    score: '1:22:020',
  },
  {
    position: 7,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'MapleSyrup',
    score: '1:22:990',
  },
  {
    position: 8,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'JammyToast',
    score: '1:24:007',
  },
  {
    position: 9,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'CinnamonRoll',
    score: '1:25:043',
  },
  {
    position: 10,
    image: `https://picsum.photos/48?random=${Math.random()}`,
    username: 'BlueberryMuffin',
    score: '1:26:091',
  },
];

export { leaderboardDataCs, leaderboardDataFg, leaderboardDataF1 };
