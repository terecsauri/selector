import { render, screen } from "@testing-library/react";

import { Selector } from "../src/Selector";

test("Selector displays correctoy", () => {
	render(<Selector title="Selector" />);

	const heading = screen.getByText(/Selector/i);

	expect(heading).toBeInTheDocument();
});
