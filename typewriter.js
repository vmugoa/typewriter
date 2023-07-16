const sentence = "hello there from lighthouse labs";

function typeWriter(index) {
  if (index < sentence.length) {
    process.stdout.write(sentence[index]);
    setTimeout(() => {
      typeWriter(index + 1);
    }, 50);
  } else {
    process.stdout.write('\n'); // Fix the bug we identified earlier by adding a newline character at the end of the animation.
  };
};

typeWriter(0);
