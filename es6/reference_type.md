a reference value (object) is an instance of a specific reference type.

new objects are created by using the new operator followed by a constructor

a constructor is simply a function whose purpose is to create a new object

## the Date type

## the RegExp type

ECMAScript supports regular expressions through the RegExp type

```javascript
let expression = /pattern/flags;
```

pattern

- character classes
- quantifiers
- grouping
- lookheads
- backreferences

flag

indicate how the expression should behave

- g —— indicates global mode, meaning the pattern will be applied to all of the string instead of stopping after the first match is found
- i —— indicates case-insensitive mode, meaning the case of the pattern and the string are ignored when determining matches.
- m —— idicates multiline mode, meaning the pattern will continue looking for matches after reaching the end of one line of the text
- y —— indicates sticky mode, meaning the pattern will only look at the string contents beginning at lastIndex
- u —— indicates Unicode mode is enabled

metacharacters

( [ { \ ^ $ | ) ] } ? * + .

## primitive wrapper types

- the Boolean type
- the Number type
Number.isInteger()