function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    return str.replace(before, after[0].toUpperCase().concat(after.slice(1)));
  }

  else {
    return str.replace(before, after[0].toLowerCase() + after.slice(1));
  }

}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));