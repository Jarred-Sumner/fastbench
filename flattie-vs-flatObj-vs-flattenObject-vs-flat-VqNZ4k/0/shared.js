import {flattie} from "https://cdn.skypack.dev/flattie@1.1.0";
import flatObj from "https://cdn.skypack.dev/flat-obj@3.0.0";
import flattenObject from "https://cdn.skypack.dev/flatten-object@1.2.0";
import flat from "https://cdn.skypack.dev/flat@5.0.2";

const data = {
	a: 1,
	b: {
		a: 2,
		b: 3,
		c: {
			a: 4,
			b: null,
			c: [1, 2, 3],
			d: 456
		},
		d: 'foo'
	},
	c: 456
};