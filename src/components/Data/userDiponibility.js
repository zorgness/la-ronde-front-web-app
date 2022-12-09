const date = new Date();

export const userDisponibility = [
  {
    id: 1,
    date: new Date(),
  },
  {
    id: 2,
    date: new Date(date.setDate(date.getDate() + 7)),
  },
  {
    id: 3,
    date: new Date(date.setDate(date.getDate() + 14)),
  },
];
