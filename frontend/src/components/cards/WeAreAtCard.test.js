import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import WeAreAtCard from '../cards/WeAreAtCard'

test('renders content', () => {

  render(<WeAreAtCard title={'Delhi'} />)

  const element = screen.getByText('Delhi')
  expect(element).toBeDefined()
})