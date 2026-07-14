let globalVar = "Global";

function demo() {
  let functionVar = "Function";

  if (true) {
    let blockVar = "Block";

    console.log(globalVar);   // Global
    console.log(functionVar); // Function
    console.log(blockVar);    // Block
  }

  console.log(globalVar);     // Global
  console.log(functionVar);   // Function
  // console.log(blockVar);   // Error
}

demo();