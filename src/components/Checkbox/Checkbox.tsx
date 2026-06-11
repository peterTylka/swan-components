import { useId } from 'react'

export interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'checked' | 'onChange'
> {
  /** Controlled checked state. */
  checked: boolean
  /** Called with the next checked value and the raw change event. */
  onChange: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  /** Optional inline label rendered beside the box. */
  label?: React.ReactNode
  /** Ref forwarded to the underlying input element. */
  ref?: React.Ref<HTMLInputElement>
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Checkbox({
  checked,
  onChange,
  disabled = false,
  label,
  id,
  className,
  ref,
  ...rest
}: CheckboxProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <label
      htmlFor={inputId}
      className={['inline-flex items-center gap-3 select-none', className ?? ''].join(' ')}
    >
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked, e)}
        className={['peer sr-only', disabled ? 'cursor-not-allowed' : 'cursor-pointer'].join(' ')}
        {...rest}
      />
      <span
        aria-hidden="true"
        className={[
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-xs \
          border border-border bg-white text-white transition-colors \
          peer-hover:border-primary peer-checked:bg-primary \
          peer-focus-visible:outline-2 \
          peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary \
          peer-disabled:border-border peer-disabled:bg-muted \
        ',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        ].join(' ')}
      >
        {checked && <CheckIcon />}
      </span>
      {label != null && (
        <span
          className={[
            'text-[15px] leading-none text-foreground peer-disabled:text-muted-foreground',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          ].join(' ')}
        >
          {label}
        </span>
      )}
    </label>
  )
}
