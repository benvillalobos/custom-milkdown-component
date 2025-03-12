import { useNodeViewFactory } from "@prosemirror-adapter/react"
import { Milkdown, useEditor } from "@milkdown/react";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/kit/core";
import { codeBlockSchema, commonmark } from "@milkdown/kit/preset/commonmark";
import { $view } from "@milkdown/kit/utils";
import { nord } from "@milkdown/theme-nord";
import { history } from "@milkdown/kit/plugin/history";
import { CodeBlock } from "./CodeBlock";

const markdown =
  `# Milkdown Component Code Block

\`\`\`ts
import { Editor } from '@milkdown/kit/core';
import { commonmark } from '@milkdown/kit/preset/commonmark';

import { nord } from '@milkdown/theme-nord';
import '@milkdown/theme-nord/style.css';

Editor
  .make()
  .config(nord)
  .use(commonmark)
  .create();
\`\`\`

This is a demo for using [Milkdown](https://milkdown.dev) code block component`



export const MilkdownEditor: React.FC = () => {
    const nodeViewFactory = useNodeViewFactory();

    useEditor((root) => {
      return Editor
        .make()
        .config(ctx => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, markdown);
        })
        .config(nord)
        .use(commonmark)
        .use(history)
        // This tells milkdown to use the CodeBlock component as the view when a codeBlock node is used.
        // Note: If you comment out this .use, the code editor will appear slightly more like a code editor
        .use($view(codeBlockSchema.node, () => nodeViewFactory({
          component: CodeBlock,
        })))
    }, []);

    return <Milkdown />
}