export enum ElementId {
  StartWatching = 'StartWatching',
  Pricing = 'Pricing',
}

export enum ModuleName {
  Landing = 'Landing',
  UpcomingMovies = 'UpcomingMovies',
  Trending = 'Trending',
  TVSeries = 'TVSeries',
}

interface CustomEvent {
  module_name: string;
  name: string;
}

export interface ElementClickEvent extends CustomEvent {
  name: 'element_click';
  element_id: ElementId;
}

export interface MediaClickEvent extends CustomEvent {
  name: 'media_click';
  title: string;
  item_position_index?: number;
}

export interface FormEvent extends CustomEvent{
  name: 'form';
  current_step: number;
  total_step: number;
  action_name: 'submit' | 'change_step';
  change_step_to?: number;
}

export type EventType = ElementClickEvent
  | MediaClickEvent
  | FormEvent;