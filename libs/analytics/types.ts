export enum ButtonId {
  StartWatching = 'StartWatching',
  Pricing = 'Pricing',
}

interface CustomEvent {
  name: string;
}

export interface ButtonClickEvent extends CustomEvent {
  name: 'button_click';
  id: ButtonId;
}

export interface MediaClickEvent extends CustomEvent {
  name: 'media_click';
  title: string;
  catalogue_title?: string;
  catalogue_item_index?: number;
}

export interface FormEvent extends CustomEvent{
  name: 'form';
  current_step: number;
  total_step: number;
  action_name: 'submit' | 'change_step';
  change_step_to?: number;
}

export type EventType = ButtonClickEvent
  | MediaClickEvent
  | FormEvent;