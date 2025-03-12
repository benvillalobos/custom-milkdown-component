import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react'
import { Paragraph } from './components/Paragraph'
import './App.css'

function App() {

  return (
    <ProsemirrorAdapterProvider>
      <Paragraph />
    </ProsemirrorAdapterProvider>
  )
}

export default App
