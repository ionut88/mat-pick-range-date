export interface PresetItem {
  presetLabel: string;
  range: Range;
}

export interface Range {
  fromDate: Date;
  toDate: Date;
}

export interface CalendarOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  shouldCloseOnBackdropClick?: boolean;
}

export interface Options {
  presets: Array<PresetItem>;
  format: string;
  range: Range;
  excludeWeekends?: boolean;
  locale?: string;
  fromMinMax?: Range;
  toMinMax?: Range;
  applyLabel?: string;
  cancelLabel?: string;
  animation?: boolean;
  calendarOverlayConfig?: CalendarOverlayConfig;
  placeholder?: string;
  matLabel?: string;
  startDatePrefix?: string;
  endDatePrefix?: string;
}
