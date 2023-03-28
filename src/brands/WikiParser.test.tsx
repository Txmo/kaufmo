import { render } from "@testing-library/react";
import WikiBrands from "./WikiBrands";

test('selector returns non empty node-list', () => {
    render(<WikiBrands />)
    const nodeList = document.querySelectorAll('.div-col > ul > li');
    expect(nodeList.length).toBeGreaterThan(100);
});