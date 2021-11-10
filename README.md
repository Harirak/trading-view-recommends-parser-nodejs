# Trading view stats parser

> !! This is fork version and only edited to add more timeframe and more indicators as in the original python version.


Written on NodeJS with typescript

This package is fully compatible with original python lib: [deathlyface/python-tradingview-ta](https://github.com/deathlyface/python-tradingview-ta).

## Install

add auth token in `.npmrc` file.
```
//npm.pkg.github.com/:_authToken=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
@harirak:registry=https://npm.pkg.github.com
```

To install
```
npm install @harirak/tradingview-recommends-parser-nodejs@1.0.3
```

## Usage

install tslib first
``` 
npm install tslib
```

```typescript
import {
  TradingViewScan,
  SCREENERS_ENUM,
  EXCHANGES_ENUM,
  INTERVALS_ENUM,
} from 'trading-view-recommends-parser-nodejs';

const result = await new TradingViewScan(
  SCREENERS_ENUM['crypto'],
  EXCHANGES_ENUM['BINANCE'],
  'BNBBUSD',
  INTERVALS_ENUM['1m'],
  // You can pass axios instance. It's optional argument (you can use it for pass custom headers or proxy)
).analyze();

console.log(result);
```
