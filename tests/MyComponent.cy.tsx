import { Selector } from "../src/Selector";

describe("<Selector />", () => {
	it("renders", () => {
		cy.mount(<Selector title="Selector" />);

		cy.findByText(/Selector/i);
	});
});
