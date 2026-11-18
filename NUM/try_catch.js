try {
    let age = 20;
    console.log(age);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finished!");
}