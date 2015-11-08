function _to_data(y1,y2,d){
	_d = {};
	for (var i in d) {
		key = d[i]['Airport'];
		_d[key] = {}
		_d[key]['left'] = Math.round(d[i][y1]*100)/100;
		_d[key]['right'] = Math.round(d[i][y2]*100)/100;
		_d[key]['label'] = key;
	}
	
	Y1 = y1;
	Y2 = y2;
	d = [];
	var di;
	for (var k in _d){
		di = _d[k];
		d.push(di)
	}
	return d;
}

function _max_key(v){
	// getting maximum ratio value
	var vi, max_side;
	var _m = undefined;
	for (var i = 0; i < v.length; i += 1){
		vi = v[i];
		max_side = Math.max(vi.left, vi.right)
		if (_m == undefined || max_side > _m) {
			_m = max_side;
		}
	}
	return _m;
}

function _min_key(v){
	// getting minimum ratio value
	var vi, min_side;
	var _m = undefined;
	for (var i = 0; i < v.length; i += 1){
		vi = v[i];
		min_side = Math.min(vi.left, vi.right)
		if (_m == undefined || min_side < _m) {
			_m = min_side;
		}
	}
	return _m;
}

function _min_max(v){
	// getting munimum and maximum
	var vi, min_side, max_side;
	var _max = undefined;
	var _min = undefined;


	for (var i = 0; i < v.length; i += 1){
		vi = v[i];
		min_side = Math.min(vi.left_coord, vi.right_coord);
		max_side = Math.max(vi.left_coord, vi.right_coord);

		if (_min == undefined || min_side < _min) {
			_min = min_side;
		}
		if (_max == undefined || max_side > _max) {
			_max = max_side;
		}


	}
	return [_min, _max];
}

function _slopegraph_preprocess(d){
	// computes y coords for each data point
	// create two separate object arrays for each side, then order them together, and THEN run the shifting alg.

	var font_size = 10;
	var l = d.length;

	var max = _max_key(d);
	var min = _min_key(d);
	var range = max-min;

	//
	var left = [];
	var right = [];
	var di;
	for (var i = 0; i < d.length; i += 1) {
		di = d[i];
		left.push({label:di.label, value:di.left, side:'left', coord:di.left_coord});
		right.push({label:di.label, value:di.right, side:'right', coord: di.right_coord});
	}

	var both = left.concat(right)
	both.sort(function(a,b){
		if (a.value > b.value){
			return 1;
		} else if (a.value < b.value) {
			return -1;
		} else { 
			if (a.label > b.label) {
				return 1
			} else if (a.label < b.label) {
				return -1
			} else {
				return 0
			}
		}
	}).reverse()
	var new_data = {}, dx = {};
	var side, label, val, coord;
	for (var i = 0; i < both.length; i += 1) {

		label = both[i].label;
		side = both[i].side;
		val = both[i].value;
		coord = both[i].coord;

		if (!new_data.hasOwnProperty(label)) {
			new_data[label] = {};
		}
		new_data[label][side] = val;
		new_coord = coord;

		if (i > 0) {

			if (val === both[i-1].value) {
				new_coord = both[i-1].coord;
			
			} else {
				if (coord - font_size < both[i-1].coord) {
					new_coord = coord + font_size;

					for (j = i; j < both.length; j += 1) {
						both[j].coord = both[j].coord + font_size;
					}
				}
			}
		}

		new_data[label][side + '_coord'] = new_coord;

		if (side === "left") {
			if (!dx.hasOwnProperty(new_coord)) {
				dx[new_coord] = 0;
			}
			new_data[label]["dx"] = dx[new_coord]*25;
			dx[new_coord] -= 1;
		}
	} // end for loop

	d = [];
	for (var label in new_data){
		val = new_data[label];
		val.label = label;
		val.dx = val.dx;
		d.push(val)
	}

	return d;
}
