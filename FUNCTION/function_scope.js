let key = 42;

function getSecretCode(value) {
    let code = value * key;
    return code;
}

let secretCode = getSecretCode(2);
console.log(secretCode);