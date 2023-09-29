export type Card = {
  title: string;
  subtitle?: string;
  content?: string;
  class?: string;
  actions?: CardAction[];
};

export type CardAction = {
  route: string;
  label: string;
  routeIcon?: string;
  class?: string;
  permission?: string;
};
