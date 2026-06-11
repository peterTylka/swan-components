import { useState } from 'react'
import { Checkbox } from './components/Checkbox'
import { FormField } from './components/FormField'

interface FormState {
  terms: boolean
  newsletter: boolean
}

export default function App() {
  const [form, setForm] = useState<FormState>({ terms: false, newsletter: true })
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<FormState | null>(null)

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.terms) {
      setError('You must accept the terms to continue.')
      return
    }
    setError(null)
    setSubmitted(form)
  }

  return (
    <main className="mx-auto flex max-w-md flex-col gap-8 p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <FormField title="Terms" required helpText={error ?? 'Required to create an account.'}>
          <Checkbox
            id="cb-terms"
            label="I accept the terms and conditions"
            checked={form.terms}
            onChange={(checked) => {
              setField('terms', checked)
              if (checked) setError(null)
            }}
          />
        </FormField>

        <FormField title="Preferences">
          <Checkbox
            id="cb-newsletter"
            label="Send me the newsletter"
            checked={form.newsletter}
            onChange={(checked) => setField('newsletter', checked)}
          />
        </FormField>

        <button
          type="submit"
          className="rounded-xs bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <pre className="rounded-xs bg-muted p-4 text-sm text-foreground">
          {JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </main>
  )
}
