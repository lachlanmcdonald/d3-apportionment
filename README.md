# d3-apportionment

**d3-apportionment** is a simple [D3.js](http://d3js.org) plugin that ensures than an array of percentages, when rounded, sum to 100 (or some other arbitrary number). Implementation of the "[Largest Remainder](https://en.wikipedia.org/wiki/Largest_remainder_method)" method (the *Hare-Niemeyer method*).

## Usage

`d3.apportion(input, total)`

- `input` must be an array of numbers.
- `total` defaults to `100` if not omitted. 

```js
d3.apportion([49.1, 24.9, 12.5, 12.4]); // [50, 25, 13, 12]
d3.apportion([24.9, 12.5, 12.4], 50);   // [25, 13, 12]
```

## License

> The MIT License (MIT)
>
> Copyright (c) 2015 Lachlan McDonald
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
