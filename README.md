# storybook-argTypes-controls-types

Manual storybook argTypes `control` types, because [Storybook](https://storybook.js.org/) are not typed. 

Basic `control` types for better stories development based on [Storybook controls table](https://storybook.js.org/docs/react/essentials/controls)

## Usage

Storybook version: **6.5**

1. [Install storybook](https://storybook.js.org/docs/react/get-started/install)
2. Create `src/storybook.d.ts` file.
3. Copy and paste content of `storybook.d.ts` into created file.
4. Code story usage:


Using type assertion:

```tsx
// Button.stories.tsx

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

const buttonSizeArgTypes: StorybookArgControlTypes = { // HERE WE TYPE
  control: {
    type: "radio",
    options: ["small", "medium", "large"],
  },
};

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: buttonSizeArgTypes,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
```

Using type casting:

```tsx
// Button.stories.tsx

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    } as StorybookArgControlTypes, // HERE WE CAST OUR TYPE
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
```
