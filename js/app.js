function helloWorld() {
  console.log("Hello world");
  return 0;
}

try {
  module.exports = {
    helloWorld,
  };
} catch (error) {}
