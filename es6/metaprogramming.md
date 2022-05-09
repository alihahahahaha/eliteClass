## metaprogramming

writing a program that reads, modifies, analyzes, and even generates a program

Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data. This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running

Simply put, Metaprogramming involves writing code that can

- Generate code
- Manipulate language constructs at the run time. This phenomenon is known as Reflective Metaprogramming or Reflection.


### What is Reflection in Metaprogramming?

Reflection is a branch of Metaprogramming. Reflection has three sub-branches:

- Introspection: Code is able to inspect itself. It is used to access the internal properties such that we can get the low-level information of our code.
- Self-Modification: As the name suggests, code is able to modify itself.
- Intercession: The literal meaning of intercession is, acting on behalf of somebody else. In metaprogramming, the intercession does exactly the same using the concepts like, wrapping, trapping, intercepting.


ES6 gives us the Reflect object (aka the Reflect API) to achieve Introspection. The Proxy object of ES6 helps us with Intercession. 