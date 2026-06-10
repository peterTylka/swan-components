import { useState } from 'react';
import { Checkbox } from './components/Checkbox';
import { FormField } from './components/FormField';

export default function App() {
  const [required, setRequired] = useState(true);
  const [optional, setOptional] = useState(false);
  const [unchecked, setUnchecked] = useState(false);

  return (
    <main className="mx-auto flex max-w-md flex-col gap-8 p-10">
      <FormField label="Required field" required htmlFor="cb-required" helpText="Example help text.">
        <Checkbox id="cb-required" label="Checkbox text" checked={required} onChange={setRequired} />
      </FormField>

      <FormField label="Optional field" htmlFor="cb-optional">
        <Checkbox id="cb-optional" checked={optional} onChange={setOptional} />
      </FormField>

      <Checkbox label="Unchecked" checked={unchecked} onChange={setUnchecked} />

      <Checkbox label="Disabled" checked={false} disabled onChange={() => {}} />
    </main>
  );
}
