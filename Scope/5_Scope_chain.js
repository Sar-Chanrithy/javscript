let a = 1;

function first() {
  let b = 2;

  function second() {
    let c = 3;
    console.log(a, b, c);
  }

  second();
}

first(); // 1 2 3