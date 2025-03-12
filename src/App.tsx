import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react'
import './App.css'
import { MilkdownProvider } from '@milkdown/react'
import { MilkdownEditor } from './components/Editor'

function App() {

  return (
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <MilkdownEditor />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  )
}

export default App
