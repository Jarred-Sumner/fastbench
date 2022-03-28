import { Remarkable } from "https://cdn.skypack.dev/remarkable@2.0.1";
import {micromark} from "https://cdn.skypack.dev/micromark@3.0.10";
import microDown from "https://cdn.skypack.dev/micro-down@1.6.2";
import * as commonmark from "https://cdn.skypack.dev/commonmark@0.30.0";
import { marked } from "https://cdn.skypack.dev/marked@4.0.12";
import MarkdownIt from "https://jspm.dev/markdown-it@12.3.2";
import snarkdown from "https://cdn.skypack.dev/snarkdown@2.0.0";
import showdown from "https://cdn.skypack.dev/showdown@2.0.0";

const remarkable = new Remarkable('commonmark');
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

This is a paragraph \`with\` ~style~ *italic* _italic_ **bold** __bold__

![image](https://rsms.me/raster/examples/image1.jpg)`;