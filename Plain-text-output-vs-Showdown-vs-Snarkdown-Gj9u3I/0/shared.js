import snarkdown from "https://cdn.skypack.dev/snarkdown@2.0.0";
import showdown from "https://cdn.skypack.dev/showdown@2.0.0";

const showdownConverter = new showdown.Converter();

const sample = `The C implementation provides both a shared library (\`libcmark\`) and a
standalone program \`cmark\` that converts CommonMark to HTML.  It is
written in standard C99 and has no library dependencies.  The parser is
very fast (see [benchmarks](benchmarks.md)).

It is easy to use \`libcmark\` in python, lua, ruby, and other dynamic
languages: see the \`wrappers/\` subdirectory for some simple examples.

The JavaScript implementation provides both an NPM package and a
single JavaScript file, with no dependencies, that can be linked into
an HTML page. For further information, see the
[README in the js directory](js/README.md).

**A note on security:**
Neither implementation attempts to sanitize link attributes or
raw HTML.  If you use these libraries in applications that accept
untrusted user input, you must run the output through an HTML
sanitizer to protect against
[XSS attacks](http://en.wikipedia.org/wiki/Cross-site_scripting).`;