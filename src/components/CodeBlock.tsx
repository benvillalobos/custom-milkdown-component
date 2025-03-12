
import { useNodeViewContext } from '@prosemirror-adapter/react'

export const CodeBlock: React.FC = () => {
  const { contentRef, selected } = useNodeViewContext()
  return <div style={{ outline: selected ? 'blue solid 1px' : 'none' }} role="presentation" ref={contentRef}>
    This is a div!
    </div>
}