import { render, screen } from '@testing-library/react';
import Home from "./Home"

describe('Application', () => {
    test('Input rendered correctly', () => {
        render( <Home />)
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument();
    })
})