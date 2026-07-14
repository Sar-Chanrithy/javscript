function outer() {
  let name = "Alice";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Alice