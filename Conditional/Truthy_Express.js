let currentUsername = ""; // Empty string = Falsy

if (currentUsername) {
    // This block is SKIPPED because an empty string evaluates to false
    console.log("Welcome back, " + currentUsername);
} else {
    // This block RUNS
    console.log("Please log in.");
}