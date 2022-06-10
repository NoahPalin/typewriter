const letterPicker = function (sentence) {
  let time = 0;
  for (const char of sentence) {
    time = time + 50;
    charPrinter(char, time)
  }
  setTimeout(() => {
    console.log();
  }, time);
}

const charPrinter = function (char, time) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
};

const sentence = "hello there from lighthouse labs";

letterPicker(sentence);

