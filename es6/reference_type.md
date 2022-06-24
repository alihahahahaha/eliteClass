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

### the Boolean type

to create a Boolean object, use the Boolean constructor and pass either true or false

```javascript
let booleanObject = new Boolean(true);
```
valueOf() —— primitive value of either true or false.

toString() —— a string of "true" or "false"

### the Number type

valueOf() —— the primitive numeric value represented by the object

toLocalString() —— the number as the string

toString() —— the number as the string, accepts a single argument indicating the radix in which to represent the number

additional methods to format numbers as strings

- toFixed() —— a string representation of a number with a specified number of decimal points

- toExponential() —— a string with the number formatted in exponential notation(aka e-notation) accepts a number of decimal places to output

- toPrecision() —— output the most appropriate form of number, accepts one argument, which is the total number of digits to use to represent the number(not including exponents)

Number.isInteger() —— is capable of discerning whether or not a number value is stored as an integer or not

the IEEE754 number format has a distinct numerical range inside which an binary can reperensent exactly one integer value.  Number.MIN_SAFE_INTEGER(-2^53 + 1) ~ Number.MAX_SAFE_INTEGER(2^53 - 1)

Number.isSafeInteger() —— to ascertain if an integer is inside this range

### the String type

all three inherited methods——valueOf(), toLocalString(), and toString()—— return the object's primitive string value

- length —— each instance of String contains the single property, length

the String type has a number of methods to aid in the dissection and manipulation of strings in ECMAScript

- charAt() 

javascript uses a hybridized strategy of two Unicode encodings: *UCS-2* and *UTF-16*

for charavters which can be encoded with 16 bits(U+0000 to U+FFFF)