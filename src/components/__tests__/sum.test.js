import { div, mul, sub, sum } from "../sum"


test('Sum function should calculate the sum of two numbers', () => {
    const addres = sum(24,72);
    const subres = sub(71,35);
    const mulres = mul(20,4);
    const divres = div(80,4);

    // Below line is known as Assertion
    expect(addres).toBe(96);
    expect(subres).toBe(36);
    expect(mulres).toBe(80);
    expect(divres).toBe(20);
})