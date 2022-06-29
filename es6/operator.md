2022-06-28T14:52:27

## strange result: null vs 0

```javascript
null > 0 //false
null == 0 //false
null >= 0 //true
```

The reason is that a equality check == and comparisons > < >= <= work differently

conparisons convert null to a number, treating it as 0

on the other hand, the equality check == for undefined and mull is defined such that, *without any conversions they equal each other and don't equal anything else*. 

## an incomparable undefined

the value undefined shouldn't be compared to other values

```javascript
undefined > 0 //false
undefined < 0 //false
undefined == 0 //false
```

comparisons 1 and 2 return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons

the equality check 3 returns false because undefined only equals null, undefined, and no other value

link to this [https://javascript.info/comparison]