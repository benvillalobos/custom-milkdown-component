import { useNodeViewFactory } from "@prosemirror-adapter/react"
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { useCallback } from "react";
import { Paragraph } from "./Paragraph";
import { schema } from "prosemirror-schema-basic";

export const Editor = () => {
    const nodeViewFactory = useNodeViewFactory();
    const state = EditorState.create({
        schema
    })

    const editorRef = useCallback((element: HTMLDivElement) => {
        if (!element || element.firstChild)
            return;

        new EditorView(element, {
            state,
            nodeViews: {
                paragraph: nodeViewFactory({
                    component: Paragraph,
                    as: 'div',
                    contentAs: 'p'
                })
            }
        });

    },[nodeViewFactory, state]);

    return <div className="editor" ref={editorRef}/>
}