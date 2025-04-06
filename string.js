function reverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverseString("hello")); // "olleh"
