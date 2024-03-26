import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import OfferCard from '../cards/OfferCard'

test('renders content', () => {
  


  render(<OfferCard title={'Maid'}/>)

  const element = screen.getByText('Maid')
  expect(element).toBeDefined()
})