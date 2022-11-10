import React from "react";

import { Checkbox } from "./Checkbox";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Checkbox",
  component: Checkbox,
};

export const allCheckboxes = () => (
  <form>
    <Checkbox id="Unchecked" label="Unchecked" />
    <Checkbox id="Checked" label="Checked" checked />
    <Checkbox appearance="secondary" id="second" label="Secondary" checked />
  </form>
);
