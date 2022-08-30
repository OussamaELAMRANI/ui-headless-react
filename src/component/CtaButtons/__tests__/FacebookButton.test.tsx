import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import { FacebookButton } from "@/component/CtaButtons";

describe("FacebookButton", () => {
  afterEach(cleanup);

  it("should render correctly !", () => {
    const elem = create(<FacebookButton />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
