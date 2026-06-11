import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders the provided label', () => {
    render(
      <FormField label="Email">
        <input aria-label="control" />
      </FormField>,
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('defaults label to "Required field" when no label and required', () => {
    render(
      <FormField required>
        <input aria-label="control" />
      </FormField>,
    )
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('renders no label when no label and not required', () => {
    render(
      <FormField>
        <input aria-label="control" />
      </FormField>,
    )
    expect(screen.queryByText('Required field')).not.toBeInTheDocument()
  })

  it('shows a required marker when required', () => {
    render(
      <FormField label="Name" required>
        <input aria-label="control" />
      </FormField>,
    )
    expect(screen.getByTestId('required-marker')).toBeInTheDocument()
  })

  it('renders help text and wires it to the child via aria-describedby', () => {
    render(
      <FormField label="Name" helpText="Some help">
        <input aria-label="control" />
      </FormField>,
    )
    const help = screen.getByText('Some help')
    const input = screen.getByLabelText('control')
    expect(input).toHaveAttribute('aria-describedby', help.id)
  })
})
