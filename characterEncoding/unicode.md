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

there are hundreds of traditional encodings which can only store some code points correcly and change all the other code points into question marks

popular encodings of English text 
- Windows-1252(the Windows 9x standard for Western European language)
- ISO-8859-1 aka Latin-1(also useful for any Western European language)

UTF 7,8,16,and 32 all have the nice property of being able to store any code point correctly

> *it does not make sense to have a string without knowing what encoding it uses*

> *there ain't no such thing as plain text*

if you have a string, in memory, in a file, or in an email message, you have to know what encoding what it is in or you cannot interpret it or display it to users correctly.

then how do we preserve this information about what encoding a string uses

> Content-Type: text/plain; charset="UTF-8"

for an email message, you are expected to have a string in the header of the form(above)

for a web page, put the Content-Type of the HTML file right in the HTML file itself, using some kind of special tag

but how can you read the HTML file until you know what encoding it's in

almost every encoding in common use does the same thing with characters between the 32~127, so you can always get this far on the HTML page without starting to use funny letters

```javascript
<html>
<head>
<meta>
```

but that meta tag really has to be the very first thing in the <head> section because as soon as the web broswer sees this tag it's going to stop parsing the page and start over after reinterpreting the whole page using the encoding you specified



