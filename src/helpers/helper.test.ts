import { cleanPostcode } from "./helper"

test('Postcode trim and uppercase transform', () => {
    const input = 'Cb4 0gf'
    const output = 'CB40GF'
    expect(cleanPostcode(input)).toBe(output)
})