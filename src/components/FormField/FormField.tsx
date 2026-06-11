import { cloneElement, isValidElement, useId } from 'react';

export interface FormFieldProps {
  /** Field label above the control. */
  label?: React.ReactNode;
  /** Shows a teal required marker; supplies a default label when none given. */
  required?: boolean;
  helpText?: React.ReactNode;
  /** id of the control this field labels (for the label's htmlFor). */
  htmlFor?: string;
  children: React.ReactNode;
}

export function FormField({ label, required = false, helpText, htmlFor, children }: FormFieldProps) {
  const baseId = useId();
  const helpId = `${baseId}-help`;

  const resolvedLabel = label ?? (required ? 'Required field' : null);

  // Wire help text to the child control for screen readers.
  const content =
    helpText != null && isValidElement(children)
      ? cloneElement(children as React.ReactElement<{ 'aria-describedby'?: string }>, {
          'aria-describedby': helpId,
        })
      : children;

  return (
    <div className="flex flex-col gap-2">
      {resolvedLabel != null && (
        <label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
          {resolvedLabel}
          {required && (
            <span data-testid="required-marker" aria-hidden="true" className="ml-1 text-primary">
              •
            </span>
          )}
        </label>
      )}
      {content}
      {helpText != null && (
        <p id={helpId} className="text-sm text-muted-foreground">
          {helpText}
        </p>
      )}
    </div>
  );
}
