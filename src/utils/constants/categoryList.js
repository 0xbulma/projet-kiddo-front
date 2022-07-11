export const CATEGORIES = [
  {
    name: 'sportives',
    imageUrl: 'assets/category/sportives.webp',
    type: 'sport',
    backgroundColor: '#3ac9bb',
  },
  {
    name: 'artistiques',
    imageUrl: 'assets/category/art.webp',
    type: 'art',
    backgroundColor: '#a59df1',
  },
  {
    name: 'culturelles',
    imageUrl: 'assets/category/culturelle.webp',
    type: 'culture',
    backgroundColor: '#fb9058',
  },
  {
    name: "d'éveil corporel",
    imageUrl: 'assets/category/eveil.webp',
    type: 'eveil',
    backgroundColor: '#fc664e',
  },
  {
    name: 'manuelles',
    imageUrl: 'assets/category/manuelles.webp',
    type: 'manuel',
    backgroundColor: '#ffc20b',
  },
  {
    name: 'autres',
    imageUrl: 'assets/category/autres.webp',
    type: 'autres',
    backgroundColor: '#41c6f0',
  },
];

export const getCategoryById = (id) => {
  switch (id) {
    case '62bd7a92630e9fdf1be4b7bb':
      return 'sport';
    case '62bda67384cf824356e890e0':
      return 'culture';
    case '62bda68084cf824356e890e2':
      return 'manuel';
    case '62bda68a84cf824356e890e4':
      return 'art';
    case '62bda69184cf824356e890e6':
      return 'autres';
    case '62bda6c684cf824356e890e8':
      return 'eveil';

    default:
      return 'autre';
  }
};
