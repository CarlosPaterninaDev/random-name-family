const messages = [
  "Carlos",
  "Nely",
  "Kira",
  "Trufa",
  "Aida",
  "Andres",
  "Edelberto",
  "Minina",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg };
