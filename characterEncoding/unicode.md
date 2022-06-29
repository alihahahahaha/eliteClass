link to this [https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/]

> 2022-06-24T14:38:09

# unicode & character sets & encoding

Content-Type

### ASCII

represent every character using a number between 32 and 127, space was 32, the letter "A" was 65, This could conveniently be stored in 7 bits

there were lots of different ways to handle the character from 128 and on up, depending on where you lived. These different systems were called code pages. they were the same below 128 but different from 128 up

> 2022-06-28T17:07:00

Asian alphabets have thousands of letters, which were never going to fit inte 8 bits. This usually solved by the messy system called DBSC, the "double byte character set" in which some letters were stored in one byte and others took two. 

### unicode

create a single character set that included every reasonable writing system on the planet.

in unicode, a letter maps to something called a code point which is still just a theoretical concept.

how that code point is represented in memory or on the disk

every platonic letter in every alphabet is assigned a magic number by the unicode consortium which is written like this: *U+0639*  this magic number is called a code point. the U+ means *Unicode*  and the numbers are hexadecimal.

U+0639 is the Arabic letter Ain

U+0041 is the English letter A

you can find them all visiting [http://www.unicode.org/]

> 2022-06-29T16:04:48

Hello —— U+0048 U+0065 U+006c U+006F

so how to store this in memory or represent it in an email message

## Encodings

unicode byte order mark

## UTF-8

UTF-8 was another system for storing your string of Unicode code points, those magic U+ numbers, in memory using 8 bit bytes. 

in UTF-8, every code point from 0-127 is stored in a single byte. only code point from 128 and above are stored using 2,3, in fact, up to 6 bytes.

-----------

summary

three ways to encoding Unicode

- the traditional store-it-in-two-byte methods are called UCS-2(because it has two bytes) or UTF-16(because it has 16 bits)
- UTF-8 
- ASCII

if there's no equivalent for the Unicode code point you're trying to represent in the encoding you're trying to represent in, you usually get a little question mark ?



