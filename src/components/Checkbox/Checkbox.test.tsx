import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders an accessible checkbox with its label', () => {
    render(<Checkbox label="Accept terms" checked={false} onChange={() => {}} />)
    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument()
  })

  it('reflects the checked prop', () => {
    render(<Checkbox label="x" checked onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls onChange with the next checked value when clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="x" checked={false} onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0][0]).toBe(true)
  })

  it('toggles when the label text is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="Click me" checked={false} onChange={onChange} />)
    await user.click(screen.getByText('Click me'))
    expect(onChange).toHaveBeenCalledWith(true, expect.anything())
  })

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="x" checked={false} disabled onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('forwards extra props (id, name) to the input', () => {
    render(<Checkbox label="x" id="terms" name="terms" checked={false} onChange={() => {}} />)
    const input = screen.getByRole('checkbox') as HTMLInputElement
    expect(input.id).toBe('terms')
    expect(input.name).toBe('terms')
  })
})
