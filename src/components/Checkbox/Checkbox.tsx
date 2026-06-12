import { useId } from 'react'
import clsx from 'clsx'

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
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1L4.125 8L1 4.81818"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
  const cursorClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer'

  return (
    <label
      htmlFor={inputId}
      className={clsx('inline-flex items-center gap-3 select-none', className)}
    >
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked, e)}
        className={clsx('peer sr-only', cursorClass)}
        {...rest}
      />
      <span
        aria-hidden="true"
        className={clsx(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-xs',
          'border bg-white text-white transition-colors',
          'peer-hover:border-primary peer-checked:bg-primary',
          'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary',
          'peer-disabled:border-border peer-disabled:bg-muted',
          cursorClass,
          checked ? 'border-muted' : 'border-border',
        )}
      >
        {checked && <CheckIcon />}
      </span>
      {label != null && (
        <span
          className={clsx(
            'text-base font-normal leading-[1.3] text-foreground peer-disabled:text-muted-foreground',
            cursorClass,
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}
