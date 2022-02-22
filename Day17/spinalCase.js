function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.split(/\s|-|_/g).join('-').toLowerCase();



}

console.log(spinalCase('AllThe-small Things'));