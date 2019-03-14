// Create our number formatter.
export default number => `$ ${(number && number.toLocaleString()) || 0}`;
