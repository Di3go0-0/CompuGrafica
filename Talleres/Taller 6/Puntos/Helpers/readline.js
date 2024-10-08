import readline from 'readline-sync';

const prompt = (message) => {
  return readline.question(message);
}

export default prompt;