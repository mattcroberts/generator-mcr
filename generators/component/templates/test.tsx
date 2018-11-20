import * as React from "react";
import { shallow } from "enzyme";
import <%=componentName %> from ".";

describe("<%=componentName %>", () => {
    const defaultProps = {};

    it("should render", () => {
        const component = shallow(<<%=componentName %> {...defaultProps} />);
        expect(component).toMatchSnapshot();
    });
});
