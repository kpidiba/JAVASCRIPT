# SYNTAX

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
