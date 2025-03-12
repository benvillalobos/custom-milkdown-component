
import { useNodeViewContext } from '@prosemirror-adapter/react'

export const Paragraph: React.FC = () => {
  const { contentRef, selected } = useNodeViewContext()
  return <div style={{ outline: selected ? 'blue solid 1px' : 'none' }} role="presentation" ref={contentRef} />
}