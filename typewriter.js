function typeWriter(sentence) {
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write(sentence[index]);
    index++;
    if (index === sentence.length) {
      clearInterval(interval);
      console.log('\n');
    }
  }, 50);
}

typeWriter("Vanessa is a lil coder!!!");