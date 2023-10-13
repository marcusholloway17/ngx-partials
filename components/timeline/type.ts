import { ClrTimelineStepState } from "@clr/angular";

export type TimelineStep = {
  state: ClrTimelineStepState;
  header?: string;
  title: string;
  description?: string;
  class?: string;
};
