export const constructNameMessage = (name = 'Luke Cordova') => {
  return {
    message: `My name is ${name}`,
    timestamp: new Date().getTime(),
    test: `new Field`,
  };
};
