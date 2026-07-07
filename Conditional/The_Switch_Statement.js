let pet = "dog";

switch (pet) {
  case "cat":
    console.log("Meow!");
    break;
  case "dog":
    console.log("Woof!"); // This will run
    break;
  case "bird":
    console.log("Chirp!");
    break;
  default:
    console.log("Unknown pet sounds."); // Runs if no cases match
}