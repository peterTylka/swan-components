import { cloneElement, isValidElement, useId } from 'react'

export interface FormFieldProps {
  /** Caption text above the control. Not a clickable label. */
  title?: React.ReactNode
  /** Shows a teal required marker; supplies a default title when none given. */
  required?: boolean
  helpText?: React.ReactNode
  children: React.ReactNode
}

export function FormField({ title, required = false, helpText, children }: FormFieldProps) {
  const baseId = useId()
  const helpId = `${baseId}-help`

  const resolvedTitle = title ?? (required ? 'Required field' : null)

  // Wire help text to the child control for screen readers.
  const content =
    helpText != null && isValidElement(children)
      ? cloneElement(children as React.ReactElement<{ 'aria-describedby'?: string }>, {
          'aria-describedby': helpId,
        })
      : children

  return (
    <div className="flex flex-col gap-2">
      {resolvedTitle != null && (
        <div className="text-sm font-bold leading-[1.3] text-foreground">
          {resolvedTitle}
          {required && (
            <span
              data-testid="required-marker"
              aria-hidden="true"
              className="relative -top-px ml-1 text-primary"
            >
              •
            </span>
          )}
        </div>
      )}
      {content}
      {helpText != null && (
        <p id={helpId} className="text-sm font-normal leading-[1.3] text-muted-foreground">
          {helpText}
        </p>
      )}
    </div>
  )
}
