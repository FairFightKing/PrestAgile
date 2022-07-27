import React from 'react'
import { render, screen } from '@testing-library/react'
import FormFreelance from '../../../pages/formulaire-freelance'
describe('Home', () => {
  it('renders a text', () => {
    const result = render(<FormFreelance />)
    const oui = result.container.querySelector('#oui')
    expect(oui).toBeTruthy()
  })
})
