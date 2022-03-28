import {micromark} from "https://cdn.skypack.dev/micromark@3.0.10";
import microDown from "https://cdn.skypack.dev/micro-down@1.6.2";
import * as commonmark from "https://cdn.skypack.dev/commonmark@0.30.0";
import { marked } from "https://cdn.skypack.dev/marked@4.0.12";
import MarkdownIt from "https://jspm.dev/markdown-it@12.3.2";
import snarkdown from "https://cdn.skypack.dev/snarkdown@2.0.0";
import showdown from "https://cdn.skypack.dev/showdown@2.0.0";

const commonmarkReader = new commonmark.Parser();
const commonmarkWriter = new commonmark.HtmlRenderer();
const markdownIt = new MarkdownIt();
const showdownConverter = new showdown.Converter();

function parseMd(md){
  //ul
  md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
  md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
  md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
  
  //ol
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  //blockquote
  md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  
  //h
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //alt h
  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  
  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  
  //font styles
  md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  
  //pre
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  
  //code
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
  
  //p
  md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
  });
  
  //strip p from pre
  md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
  
  return md;
}

const sample = `# Example

A third of the distance across the Beach, the meadow ends and sand begins. This slopes gradually up for another third of the distance, to the foot of the sand hills, which seem tumbled into their places by some mighty power, sometimes three tiers of them deep, sometimes two, _and sometimes only one._ A third of the distance across the Beach, the meadow ends and sand begins.

The outline of this inner shore is most irregular, curving and bending in and out and back upon itself, making coves and points and creeks and channels, and often pushing out in flats with not water enough on them at low tide to wet your ankles.

## Subtitle

This is another fine paragraph

### Smaller subtitle

This is a paragraph \`with\` ~style~ *italic* _italic_ **bold** __bold__

![image](https://rsms.me/raster/examples/image1.jpg)

*Hello [link](https://rsms.me/) lol*

Hello [*link*](https://rsms.me/) lol "cat"

Hello from *[link](https://rsms.me/)* to __everyone__ \`reading this\`

Here's an [**important** anchor link](#example).

line 1
line 2

Code & Poetry
-------------

    You can also indent
    blocks to display
    code or poetry.

    Indented code/poetry blocks
    can be hard-wrapped.

**Or, wrap your code in three backticks:**

\`\`\`js
function codeBlocks() {
  return "Can be inserted"
}
\`\`\`


### Embedded HTML

With default settings, markdown-wasm allows embedded HTML.

> It has been disabled in this demo for safety reasons, by means of setting \`ParseFlags.NO_HTML\`.
> Not setting the \`NO_HTML\` flag allows embedding HTML like this:

<input type=“text” value=“type”></input>


### Block Quotes

> You can insert quotes by
> preceeding each line with \`>\`.
>
> Blockquotes can also contain line
> breaks.


## Lists

### Unordered lists

- Unordered
- Lists
- Hello

### Ordered lists

1. Ordered
2. Lists
4. Numbers are ignored
1. Ordered

121) Ordered lists can start
122) with any number and
123) use . as well as ) as a separator.

### Task lists

- [ ] Task 1
- [x] Task 2
- [ ] Task 3
- Regular list item

## Tables

| Column 1 | Column 2 | Column 3 | Column 4
|----------|:---------|:--------:|---------:
| default | left | center | right

### Table of image file types

| Header                    | Mime type    | Extensions | Description
|---------------------------|--------------|------------|-------------
| \`89 50 4E 47 0D 0A 1A 0A\` | image/png    | png        | PNG image
| \`47 49 46 38 39 61\`       | image/gif    | gif        | GIF image
| \`FF D8 FF\`                | image/jpeg   | jpg jpeg   | JPEG image
| \`4D 4D 00 2B\`             | image/tiff   | tif tiff   | TIFF image
| \`42 4D\`                   | image/bmp    | bmp        | Bitmap image
| \`00 00 01 00\`             | image/x-icon | ico        | Icon image


`;