const jung = {
  name: "junghee",
  age: 26,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => jung,
  },
};

export default resolvers;
