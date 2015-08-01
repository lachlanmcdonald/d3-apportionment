/*!
 * d3-apportionment
 * The MIT License (MIT)
 * Copyright (c) 2015 Lachlan McDonald
 */

d3.apportion = function(input, total) {
	total = total ? total : 100;
	var r = total - d3.sum(input.map(Math.floor)),
		l = input.length,
		z;
	z = input.map(function(v, i) {
		return [v, Math.floor(v), i];
	});
	z.sort(function(a, b) {
		return b[0] - a[0];
	});
	for (var i = 0; i < r; i += 1) {
		var j = i % l;
		z[j][1] = z[j][1] + 1;
	}
	z.sort(function(a, b) {
		return a[2] - b[2];
	});
	return z.map(function(d) {
		return d[1];
	});
};
