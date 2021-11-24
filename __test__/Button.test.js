import { render } from "@testing-library/svelte";
import Button from "../Button.svelte";

describe("Test component", () => {
  test("Test Button", () => {
    const { component } = render(Button, {});
  });
});
