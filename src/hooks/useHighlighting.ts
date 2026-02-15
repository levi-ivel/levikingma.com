import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import php from "highlight.js/lib/languages/php";
import lua from "highlight.js/lib/languages/lua";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import haskell from "highlight.js/lib/languages/haskell";
import elixir from "highlight.js/lib/languages/elixir";
import go from "highlight.js/lib/languages/go";
import cpp from "highlight.js/lib/languages/cpp";
import rust from "highlight.js/lib/languages/rust";
import csharp from "highlight.js/lib/languages/csharp";
import typescript from "highlight.js/lib/languages/typescript";

// Register only the languages used in the blog posts
hljs.registerLanguage("php", php);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("haskell", haskell);
hljs.registerLanguage("elixir", elixir);
hljs.registerLanguage("go", go);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("typescript", typescript);

// Syntax highlighting for code blocks
export function useHighlighting() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
}
