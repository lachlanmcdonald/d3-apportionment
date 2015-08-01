# d3-apportionment

**d3-apportionment** is a simple [D3.js](http://d3js.org) plugin to ensures that an array of numbers, when rounded down, sum to 100 (or some other arbitrary number) whilst retaining the original element order. Implementation of the "[Largest Remainder](https://en.wikipedia.org/wiki/Largest_remainder_method)" method (the *Hare-Niemeyer method*).

## Usage

`d3.apportion(input, total)`

- `input` must be an array of numbers.
- `total` defaults to `100` if not omitted. 

```js
d3.apportion([49.1, 24.9, 12.5, 12.4]); // [50, 25, 13, 12]
d3.apportion([24.9, 12.5, 12.4], 50);   // [25, 13, 12]
```
