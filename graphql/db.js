export const people = [
  {
    id: 1,
    name: "junghee",
    age: 26,
    gender: "female",
  },
  {
    id: 2,
    name: "gyeonghyun",
    age: 25,
    gender: "male",
  },
  {
    id: 3,
    name: "cheeze",
    age: 8,
    gender: "female",
  },
  {
    id: 4,
    name: "daeun",
    age: 27,
    gender: "female",
  },
  {
    id: 5,
    name: "manggo",
    age: 26,
    gender: "female",
  },
];

export const getById = (id) => {
  const fillterdPeople = people.filter((person) => person.id === id);
  return fillterdPeople[0];
};
