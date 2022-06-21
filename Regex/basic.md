2022-06-21T13:48:54

```javascript
\b(\w+)\s+\1\b
```

- \b —— words with the boundary
- \w+ —— give us a word
- \s+ —— catches at least one space.
- \1

exact *captured groups*: (\w+) —— match the first occurrence of a word and captures it as a group 1, \1 match the first captured group

## Regular expression metacharacters

\d —— whole number 0~9   \d\d\d = 327    \d\d = 81   \d = 8
\w —— Alphanumeric Character    \w\w\w = dog    \w\w\w = 467
\W —— Symbols   \W = %  \W\W\W = @#%
[a-z]
[0-9] —— Character set, at least one of which must be a match, but no more than one unless otherwise specified, the order of the characters does not matter.    pand[ora] = panda   pand[ora] = pando
(abc)
(123) —— Character group, matches the characters abc or 123 in that exact order     pand(ora) = pandora
| —— Alternation - allows for alternate matches. | operates like the Boolean OR     pand(abc|123) = pandabc OR pand123
? —— Question mark matches when the character preceding ? occurs 0 or 1 time only, making the character match optional.     colou?r = colour    colou?r = color
* —— Asterisk matches when the character preceding * matches 0 or more times    tre* = tree     tre* = tre      tre* = tr
+ —— plus sign matches when the character preceding + matches 1 or more times. the + sign makes the character matches mandatory     tre+ = tree     tre+ = tre
.(period) —— The period matches any alphanumeric character or symbol.   ton. = tone     ton. = ton#     ton. = ton4
.* —— combine the metacharacters . and * in that order .* to matches any character 0 or more times  tr.* = tr   tr.* = trough

## RegEx quantifiers

indicate the scope of a search string

- matches when the preceding character, or character group, occurs n times exactly  \d{3} = 789     pand[ora]{3} = pandara  pand[ora]{2} = pandoraora
- {n,m} —— matches when the preceding character, or character group, occurs at least n times, and at most m times.  \d{2,5} = 980   \d{2,5} = 44444

## Escaping RegEx Metacharacters

when use RegEx to search for a character that is a reserved metacharacter, use the backslash \ to escape the character so it can be recognized.     \+[0-9]{11} = +14528280001
