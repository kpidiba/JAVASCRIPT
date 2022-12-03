# SYNTAX

# Nullish coalescing operator '??'

The nullish coalescing operator is written as two question marks `??`.

As it treats `null` and `undefined` similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither `null` nor `undefined`.

The result of `a ?? b` is:

- if `a` is defined, then `a`,
- if `a` isn’t defined, then `b`.

In other words, `??` returns the first argument if it’s not `null/undefined`. Otherwise, the second one.

```php
let user;
alert(user ?? "Anonymous");
alert(firstName ?? lastName ?? nickName ?? "Anonymous");
let area = (height ?? 100) * (width ?? 50);
```

### CONCATENATE

```javascript
`My favorite animal is the ${myPet}.`

"jojo " + "is " + myPet
```

## Whitespace and Line Breaks

JavaScript ignores spaces, tabs, and newlines that appear in JavaScript programs. You can use spaces, tabs, and newlines freely in your program and you are free to format and indent your programs in a neat and consistent way that makes the code easy to read and understand.

## OUTPUT

```php
alert();
console.log();
```

## Reserved names

There is a [list of reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), which cannot be used as variable names because they are used by the language itself.

For example: `let`, `class`, `return`, and `function` are reserved.

## Semicolons are Optional

Simple statements in JavaScript are generally followed by a semicolon character, just as they are in C, C++, and Java. JavaScript, however, allows you to omit this semicolon if each of your statements are placed on a separate line. For example, the following code could be written without semicolons.

```javascript
<script language = "javascript" type = "text/javascript">
   <!--
      var1 = 10
      var2 = 20
   //-->
</script>
```

But when formatted in a single line as follows, you must use semicolons

```javascript
<script language = "javascript" type = "text/javascript">
   <!--
      var1 = 10; var2 = 20;
   //-->
</script>
```

## Case Sensitivity

JavaScript is a case-sensitive language. This means that the language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.

So the identifiers **Time** and **TIME** will convey different meanings in JavaScript.

**NOTE** − Care should be taken while writing variable and function names in JavaScript.

## Comments in JavaScript

JavaScript supports both C-style and C++-style comments, Thus −

- Any text between a // and the end of a line is treated as a comment and is ignored by JavaScript.

- Any text between the characters /* and */ is treated as a comment. This may span multiple lines.

- JavaScript also recognizes the HTML comment opening sequence <!--. JavaScript treats this as a single-line comment, just as it does the // comment.

- The HTML comment closing sequence --> is not recognized by JavaScript so it should be written as //-->.

## Identifiers

An identifier is a name you choose for variables, parameters, [functions](https://www.javascripttutorial.net/javascript-function/), classes, etc. An identifier name starts with a letter (`a-z`, or `A-Z`), an underscore(`_`), or a dollar sign (`$`) and is followed by a sequence of characters including (`a-z`, `A-Z`), numbers (`0-9`), underscores (`_`), and dollar signs (`$`).

Note that the letter is not limited to the ASCII character and may include extended ASCII or Unicode though not recommended.

# Interaction: alert, prompt, confirm

- **alert** :This one we’ve seen already. It shows a message and waits for the user to press “OK”.

```javascript
alert('hello')
```

- **prompt** :It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.The function `prompt` accepts two arguments:**Title** :The text to show the visitor,**Default** :An optional second parameter, the initial value for the input field.

```javascript
result = prompt(title, [default])
```

- **confirm** : he function `confirm` shows a modal window with a `question` and two buttons: OK and Cancel.
  
  The result is `true` if OK is pressed and `false` otherwise.

```javascript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
```

- **console.log()**: method **outputs a message to the web console**

### WHAT IS $ in javascript

Your snippet of code looks like it's referencing methods from one of the popular JavaScript libraries (jQuery, ProtoType, mooTools, and so on).

There's nothing mysterious about the use of `$` in JavaScript. `$` is simply a valid JavaScript identifier. JavaScript allows upper- and lower-case letters (in a wide variety of scripts, not just English), numbers (but not at the first character), `$`, `_`, and others.¹

Prototype, jQuery, and most javascript libraries use the `$` as the primary base object (or function). Most of them also have a way to relinquish the `$` so that it can be used with another library that uses it. In that case you use `jQuery` instead of `$`. In fact, `$` is just a shortcut for `jQuery`.

---

¹ For the first character of an identifier, JavaScript allows *"...any Unicode code point with the Unicode property “ID_Start”..."* plus `$` and `_`; details in [the specification](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-IdentifierStartChar). For subsequent characters in an identifier, [it allows](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#prod-IdentifierPartChar) anything with `ID_Continue` (which includes `_`) and `$` (and a couple of control characters for historical compatibility.
