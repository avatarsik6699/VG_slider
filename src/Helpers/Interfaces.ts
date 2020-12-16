interface State {
  min: number;
  max: number;
  value: number[];
  step: number;
  position: string;
  type: string;
  scale: boolean;
  tooltip: boolean;
  bar: boolean;
  from?: number;
  to?: number;
}

interface Factory {
  createComponents(params: { type: string; scale: boolean; tooltip: boolean }): {};
}

type MinMax = {
  max: State['max'];
  min: State['min'];
};

type ComponentProps = {
  [name: string]: { [key: string]: number } | number;
};

type ValuePxValue = { pxValue: number; value: number };

interface RenderData {
  id: number;
  type: string;
  position: string;
  scaleValues: ValuePxValue[];
  handleSize: number;
  [key: number]: ValuePxValue;
}

interface Component {
  create(anchor: HTMLElement, state: State | { position: string }, id?: number);
  getName(): string;
  getNode(anchor: HTMLElement): HTMLElement;
  getRootElement(anchor: HTMLElement): HTMLElement;
  render?(anchor: HTMLElement, renderData: RenderData);
}

interface AppData {
  handleSize: number;
  limit: number;
  id: number;
  pxValue?: number[];
  value?: number[];
  action?: string;
}

type ScaleValues = { pxValue: number; value: number }[];

export { State, Factory, Component, MinMax, ComponentProps, RenderData, ValuePxValue, AppData, ScaleValues };
