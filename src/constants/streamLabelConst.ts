export const STREAM_LABEL_CONST = {
  WM: 'With×MEETS',
  FES: 'Fes×LIVE',
  YT: 'YouTube',
  LIVE: 'Live Now!!',
  TODAY: 'Today',
} as const;
export type StreamConst =
  (typeof STREAM_LABEL_CONST)[keyof typeof STREAM_LABEL_CONST];
