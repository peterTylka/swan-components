# Checkbox Assignment

Reusable, accessible `Checkbox` and generic `FormField` React components, built to match the provided [Figma design](https://www.figma.com/design/r36GcvKGGpd73hNGgUMTF8/Checkbox-Assignment?node-id=1-564&t=NTn88lRpqGU3WJQw-0).

## Notes and Questions

- I don't have figma dev access so cannot see exact CSS props of elements
  - some CSS props I found out via other tools, but I didn't find e.g. font props
- Are UI inconsistencies intentional ?
  - checked vs unchecked checkbox
    - different border radius - 3px(checked) vs 2px(unchecked)
    - different border colors - #E9E9E9(checked) vs #B2B2B2(unchecked)

## Stack

Vite • React • TypeScript • Tailwind CSS v4 • Vitest + React Testing Library

## Run

```bash
pnpm install
pnpm dev         # demo page
pnpm test        # unit tests
pnpm build       # production build
```

## Components

### Checkbox

Controlled checkbox wrapping a visually-hidden native `<input type="checkbox">`
(full keyboard, screen-reader, and `<form>` support). Extra props are forwarded
to the input.

| Prop       | Type                       | Notes                 |
| ---------- | -------------------------- | --------------------- |
| `checked`  | `boolean`                  | required (controlled) |
| `onChange` | `(checked, event) => void` | required              |
| `disabled` | `boolean`                  | optional              |
| `label`    | `ReactNode`                | optional inline label |

### FormField

Generic field wrapper — works around any control, not just `Checkbox`.

| Prop       | Type        | Notes                                                                              |
| ---------- | ----------- | ---------------------------------------------------------------------------------- |
| `title`    | `ReactNode` | caption above the control; if omitted and `required`, defaults to "Required field" |
| `required` | `boolean`   | shows teal required dot                                                            |
| `helpText` | `ReactNode` | muted help text, wired to the child via `aria-describedby`                         |

### Example

```tsx
const [accepted, setAccepted] = useState(false)

;<FormField title="Required field" required helpText="Example help text.">
  <Checkbox id="terms" label="Checkbox text" checked={accepted} onChange={setAccepted} />
</FormField>
```

## Design tokens

Figma colors live as Tailwind v4 `@theme` tokens in `src/index.css`:
a two-tier setup of `swan-*` brand palette swatches mapped to semantic roles
(`foreground`, `muted`, `muted-foreground`, `border`, `primary #07C4C1`).
