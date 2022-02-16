Completed  work on the ES6 module of the Javascript Algorithms and data structure course.
- spread operator just unpacks the entire array in a comma separated list, you can't select which item you've interested in. destructuring allow that. [a, b]= [1,2,3,4] will return [1,2]. it can be used to swap content. [a,b]=[b,a]
- user ${variable} to replace use of + for concatenating strings
- need to study syntactic sugar more
- introduction to use of  promise constructor, then and catch

Time: 2 hrs.

Started work on Regular Expressions
- Use regex to search for a string match. /a|b/ searches for a or b and returns true if there's a match
- ignore case in regex by appending i, use g to find repeating patterns
- use of test or match to find regex
    - 'string'.match(/regex/); - returns the match or null
    - /regex/.test('string');- returns true or false
- use of wildcard (.)
- check out special regex style like  
    - /[a-e]at/; this will match all letters between a-e (a,b,c,d,e) and having a suffix of at. ie aat, bat, cat, dat...
    - /[^aeiou]/gi matches all characters that are not a vowel
    -/a+/
    - /t[a-z]*?i/ for lazy matching
    - firstRegex = /^Ricky/; used to check if a string starts with Ricky
    - /story$/ can be used to check if a string ends with story
    - /\w/ match alphanumeric including underscore. /\W/ matches non-alphanumeric
    - /d\/ match digits
    - /\s/g; matche white space. Match this regx to count the number of characters in a string
    - * searches for zero or more while + searches for 1 or more
    - /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; to check for usernames
    - use numbers /ha{3,6}h/; matches only where we have 3 or more a. i.e haaah, haaaah, haaaaah, haaaaaaah
    - checked out lookahead functions (?=)
    - need to review capture groups
    - replace leading and trailing white space using this. str.replace(/^\s+|\s+$/g,"");