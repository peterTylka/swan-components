import { useState } from 'react'
import { Checkbox } from './components/Checkbox'
import { FormField } from './components/FormField'

export default function App() {
  const [required, setRequired] = useState(true)
  const [optional, setOptional] = useState(false)
  const [unchecked, setUnchecked] = useState(false)

  return (
    <main className="mx-auto flex max-w-md flex-col gap-8 p-10">
      <FormField title="Required field" required helpText="Example help text.">
        <Checkbox
          id="cb-required"
          label="Checkbox text"
          checked={required}
          onChange={setRequired}
        />
      </FormField>

      <FormField title="Optional field">
        <Checkbox id="cb-optional" checked={optional} onChange={setOptional} />
      </FormField>

      <Checkbox label="Unchecked" checked={unchecked} onChange={setUnchecked} />

      <Checkbox label="Disabled" checked={false} disabled onChange={() => {}} />
    </main>
  )
}
