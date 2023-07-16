function typeWriter(sentence) {
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write(sentence[index]);
    index++;
    if (index === sentence.length) {
      clearInterval(interval);
      console.log('\n'); //Fix the bug we identified earlier by adding a newline character at the end of the animation.
    }
  }, 50);
}

typeWriter("Vanessa is a lil coder!!!");
