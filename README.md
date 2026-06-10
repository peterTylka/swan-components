# Checkbox Assignment

Reusable, accessible `Checkbox` and generic `FormField` React components, built to match the provided Figma design.

## Stack

Vite • React • TypeScript • Tailwind CSS v4 • Vitest + React Testing Library

## Run

```bash
npm install
npm run dev      # demo page
npm test         # unit tests
npm run build    # production build
```

## Components

### Checkbox

Controlled checkbox wrapping a visually-hidden native `<input type="checkbox">`
(full keyboard, screen-reader, and `<form>` support). Extra props are forwarded
to the input.

| Prop | Type | Notes |
|------|------|-------|
| `checked` | `boolean` | required (controlled) |
| `onChange` | `(checked, event) => void` | required |
| `disabled` | `boolean` | optional |
| `label` | `ReactNode` | optional inline label |

### FormField

Generic field wrapper — works around any control, not just `Checkbox`.

| Prop | Type | Notes |
|------|------|-------|
| `label` | `ReactNode` | field label; if omitted and `required`, defaults to "Required field" |
| `required` | `boolean` | shows teal required dot |
| `helpText` | `ReactNode` | muted help text, wired to the child via `aria-describedby` |
| `htmlFor` | `string` | id of the control it labels |

### Example

```tsx
const [accepted, setAccepted] = useState(false);

<FormField label="Required field" required helpText="Example help text." htmlFor="terms">
  <Checkbox id="terms" label="Checkbox text" checked={accepted} onChange={setAccepted} />
</FormField>
```

## Design tokens

Figma colors live as Tailwind v4 `@theme` tokens in `src/index.css`
(`primary #07C4C1`, `ink`, `label`, `muted`, `line`, `disabled`).
