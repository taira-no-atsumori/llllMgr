export const STREAM_CONST = {
  WM: 'With×MEETS',
  FES: 'FES×LIVE',
  LIVE: 'LIVE NOW !',
} as const;
export type StreamConst = (typeof STREAM_CONST)[keyof typeof STREAM_CONST];
