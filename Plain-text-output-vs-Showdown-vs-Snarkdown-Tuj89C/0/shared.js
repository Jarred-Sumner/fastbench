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

const sample = `The C implementation provides both a shared library (\`libcmark\`) and a
standalone program \`cmark\` that converts CommonMark to HTML.  It is
written in standard C99 and has no library dependencies.  The parser is
very fast (see [benchmarks](benchmarks.md)).`;