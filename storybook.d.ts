import { InputType } from "@storybook/csf/dist/story";

export {};

type StorybookRange = {
  min: number;
  max: number;
  step: number;
};

type StorybookControlBoolType = {
  control:
    | "boolean"
    | {
        type: "boolean";
      };
};

type StorybookControlObjectType = {
  control:
    | "object"
    | {
        type: "object";
      };
};

type StorybookControlNumberRangeType = {
  control: {
    type: "number" | "range";
  } & StorybookRange;
};

type StorybookControlFileType = {
  control: {
    type: "file";
    /** Valid file extensions eg. '.png', ['.png', '.jpg']. */
    accept?: string | string[];
  };
};

type StorybookControlEnumsType = {
  control: {
    type:
      | "radio"
      | "inline-radio"
      | "check"
      | "inline-check"
      | "select"
      | "multi-select";
    options?: string[];
  };
};

type StorybookControlTextType = {
  control: "text";
};
type StorybookControlDateType = {
  control: "date";
};

type StorybookControlColorType = {
  control: {
    type: "color";
    /** Preset colors array eg. [red, #fff]. */
    presetColors?: string[];
  };
};

type StorybookControlTypes =
  | StorybookControlBoolType
  | StorybookControlObjectType
  | StorybookControlNumberRangeType
  | StorybookControlFileType
  | StorybookControlEnumsType
  | StorybookControlColorType
  | StorybookControlDateType;

declare global {
  type StorybookArgControlTypes = InputType & StorybookControlTypes;
}
