export const REQUEST_INDICATORS = [
  'Recommend.Other{}',
  'Recommend.All{}',
  'Recommend.MA{}',
  'RSI{}',
  'RSI[1]{}',
  'Stoch.K{}',
  'Stoch.D{}',
  'Stoch.K[1]{}',
  'Stoch.D[1]{}',
  'CCI20{}',
  'CCI20[1]{}',
  'ADX{}',
  'ADX+DI{}',
  'ADX-DI{}',
  'ADX+DI[1]{}',
  'ADX-DI[1]{}',
  'AO{}',
  'AO[1]{}',
  'Mom{}',
  'Mom[1]{}',
  'MACD.macd{}',
  'MACD.signal{}',
  'Rec.Stoch.RSI{}',
  'Stoch.RSI.K{}',
  'Rec.WR{}',
  'W.R{}',
  'Rec.BBPower{}',
  'BBPower{}',
  'Rec.UO{}',
  'UO{}',
  'close{}',
  'EMA5{}',
  'SMA5{}',
  'EMA10{}',
  'SMA10{}',
  'EMA20{}',
  'SMA20{}',
  'EMA30{}',
  'SMA30{}',
  'EMA50{}',
  'SMA50{}',
  'EMA100{}',
  'SMA100{}',
  'EMA200{}',
  'SMA200{}',
  'Rec.Ichimoku{}',
  'Ichimoku.BLine{}',
  'Rec.VWMA{}',
  'VWMA{}',
  'Rec.HullMA9{}',
  'HullMA9{}',
  'Pivot.M.Classic.S3{}',
  'Pivot.M.Classic.S2{}',
  'Pivot.M.Classic.S1{}',
  'Pivot.M.Classic.Middle{}',
  'Pivot.M.Classic.R1{}',
  'Pivot.M.Classic.R2{}',
  'Pivot.M.Classic.R3{}',
  'Pivot.M.Fibonacci.S3{}',
  'Pivot.M.Fibonacci.S2{}',
  'Pivot.M.Fibonacci.S1{}',
  'Pivot.M.Fibonacci.Middle{}',
  'Pivot.M.Fibonacci.R1{}',
  'Pivot.M.Fibonacci.R2{}',
  'Pivot.M.Fibonacci.R3{}',
  'Pivot.M.Camarilla.S3{}',
  'Pivot.M.Camarilla.S2{}',
  'Pivot.M.Camarilla.S1{}',
  'Pivot.M.Camarilla.Middle{}',
  'Pivot.M.Camarilla.R1{}',
  'Pivot.M.Camarilla.R2{}',
  'Pivot.M.Camarilla.R3{}',
  'Pivot.M.Woodie.S3{}',
  'Pivot.M.Woodie.S2{}',
  'Pivot.M.Woodie.S1{}',
  'Pivot.M.Woodie.Middle{}',
  'Pivot.M.Woodie.R1{}',
  'Pivot.M.Woodie.R2{}',
  'Pivot.M.Woodie.R3{}',
  'Pivot.M.Demark.S1{}',
  'Pivot.M.Demark.Middle{}',
  'Pivot.M.Demark.R1{}',
  'open{}',
  'P.SAR{}',
  'BB.lower{}',
  'BB.upper{}',
  'AO[2]{}',
  'volume{}',
  'change{}',
  'low{}',
  'high{}',
];

export enum EXCHANGES_ENUM {
  'FX_IDC' = 'FX_IDC',
  'BINANCE' = 'BINANCE',
}

export enum SCREENERS_ENUM {
  'crypto' = 'crypto',
  'forex' = 'forex',
}

export enum INTERVALS_ENUM {
  '1m' = '1m',
  '5m' = '5m',
  '15m' = '15m',
  '30m' = '30m',
  '1h' = '1h',
  '2h' = '2h',
  '4h' = '4h',
  '1d' = '1d',
  '1W' = '1W',
  '1M' = '1M',
}
export type TV_REPONSE_D_TYPE = (number | null)[];
export interface TV_REPONSE_INTERFACE {
  data: { s: string; d: TV_REPONSE_D_TYPE }[];
  totalCount: 1;
}

export enum RECOMMENDATIONS_ENUM {
  'BUY' = 'BUY',
  'STRONG_BUY' = 'STRONG_BUY',
  'SELL' = 'SELL',
  'STRONG_SELL' = 'STRONG_SELL',
  'NEUTRAL' = 'NEUTRAL',
  'ERROR' = 'ERROR',
}

export const INTERVALS_SCHEMA = {
  '1m': '|1',
  '5m': '|5',
  '15m': '|15',
  '30m': '|30',
  '1h': '|60',
  '2h': '|120',
  '4h': '|240',
  '1D': '|1d',
  '1W': '|1W',
  '1M': '|1M',
};
