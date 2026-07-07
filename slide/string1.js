let text = "   JavaScript is Fun   ";

// 1. Length (ចំនួនតួអក្សរ)
console.log(text.length); // Result: 21

// 2. Trim (លុបចន្លោះទំនេរ សងខាង)
let cleanText = text.trim();
console.log(cleanText); // Result: "JavaScript is Fun"

// 3. Changing Case (ប្តូរអក្សរតូច/ធំ)
console.log(cleanText.toUpperCase()); // "JAVASCRIPT IS FUN"
console.log(cleanText.toLowerCase()); // "javascript is fun"

// 4. Searching (ស្វែងរកពាក្យ)
console.log(cleanText.includes("Java")); // Result: true