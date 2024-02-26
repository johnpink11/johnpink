
HTML(*HyperText Markup Language*，超文本编辑语言), 是一种用来告诉浏览器如何组织页面的*标记语言*

# 1. HTML元素

## 1.1嵌套元素

可以把元素放到其他元素之中，称为*嵌套*。

```html  
<p> My cat is <strong>very</strong> grupy.</p>
```

## 1.2 块级元素和内联元素

`<p>`是一个块级元素的例子，任何块级元素都会出现在其上一个元素下的新行上。
`<em>`是一个内联元素(Nesting)的例子，these elements can be placed in other elements.

## 1.2 Void elements

Some elements consist of a single tag, which is used to insert/embed something in the page.
Such elements are called  [void elements]. For example, `<img>` embeds an image file onto a page:

```HTML
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />

## 1.3 Attributes

Elements can have attributes. Attributes look like :

<img
  src="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-attribute-small.png"
  alt="Attribute.png"/>
- A space between it and the element name.
- The attribute name, followed by an equal sign.
- Value is wrapped with opening and closing quote marks.

## 1.4 Boolean attributes

Some attributes are written without values. These attributes are called **boolean attributes**
For example, the `disable` attribute is a boolean attribute.
```HTMl
<input type="text" disabled="disabled" />
```

<input type="text" disabled />

As shorthand, it can be written like this.
```HTMl
<input type="text" disabled/>
```

<input type="text" disabled/>

<input type="text"/>

## 1.5 Omitting quotes around attribute values
In some certain circumstances, you can write an attribute value without quotes.
For example
```HTML
<a href=https://www.mozilla.org/> favorite website </a>
```

<a href=https://www.mozilla.org/ >favorite website </a>

> Always include the attribute quotes. It avoids some problems, and result in more readable code.



### Single or double quotes ?
It is just based on your own style. They are equivalent.

```HTML
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

### How to show a single quote and a double quote ?
`&` will help you do this.
```HTMl
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>

# 2. Anatomy(剖析) of an HTML document
The follow is a sample of a HTML page.
```HTML
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

- `<!DOCTYPE html>`
	- This is the shortest string of characters that counts as a valid doctype.
- `<html></html>`
	- A root element of a HTML page, it wraps all the content on the page.
- `<head></head>`
	- This includes keywords and a page description that would appear in search results, CSS to style content, character set declaration, and more.
- `<meta charset="utf-8">`
	- This element specifies the character encoding for your document as UTF-8.
  
`<meta>` can define your page's author and provide a brief description of your page. For example

```HTML
<meta name="author" content="Chris Mills" />
<meta 
  name="description"
  content="The MDN Web Docs Learning Area aims to provide complete beginners to the Web with all they need to know to get started with debeloping web sites and applications." />
```
The description is also used on search engine result pages.

- `<title></title>`
	- This sets the title of the page, which is the title that appears in the browser tab the pang is loaded in.
- `<body></body>`
	- This contains *all* the content that displays on the page.


# 2. Adding custon icons to site

1. Saving an image in the same directory as the site's index page, saved in `.ico` format.
2. Add the following line into your HTML's `head` block to reference it:

```HTML
<link rel="icon" href="favicon.con" type="image/x-icon" />
```

# Applying CSS and JavaScript to HTML

CSS and JavaScript are applied to a web page using `<link>` and `<script>` element.

- The `<link>` element should always go inside the head of the document. 