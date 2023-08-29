import { render, screen } from '@testing-library/react';
import Home from "./Home"
import { BrowserRouter } from 'react-router-dom';

describe('Application', () => {
    test('Input rendered correctly', () => {
        render( <Home />, { wrapper: BrowserRouter })
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument();
    })

    test('Button rendered correctly', () => {
        render( <Home />, { wrapper: BrowserRouter })
        const btnElement = screen.getByRole('button')
        expect(btnElement).toBeInTheDocument();
    })
})