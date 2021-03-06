(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wave3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA21B").s().p("AgBABQAAgSgJgMQAUAHABAWQgBAWgSAIQAHgMAAgRg");
	this.shape.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave3, new cjs.Rectangle(0,-2.9,2.3,6), null);


(lib.wave2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA21B").s().p("AgBACQgBgYgMgQQAbAJACAdQgCAdgYAKQAJgQABgVg");
	this.shape.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave2, new cjs.Rectangle(0,-3.8,3,7.8), null);


(lib.wave1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA21B").s().p("AgCADQAAgdgOgRQAPAFAIALQAKAMAAAQQgCAfgcAMQALgSAAgXg");
	this.shape.setTransform(1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave1, new cjs.Rectangle(0,-4.4,3.4,8.8), null);


(lib.txt1Pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA21B").s().p("A3bBzIAAjlMAu3AAAIAADlg");
	this.shape.setTransform(150,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1Pos, new cjs.Rectangle(0,0,300,23), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#FFFFFF"],[0,1],0,-67,0,0,-67,135.1).s().p("AuzEWQmImIAAorMAp3AAAQAAIrmIGIQmJGIorAAQoqAAmJmIg");
	this.shape.setTransform(134,67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,268,134), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14ABE0").s().p("Av5F1IAArpIfyAAIAALpg");
	this.shape.setTransform(101.8,37.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,203.5,74.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlvDoIAAnPILfAAIAAHPg");
	this.shape.setTransform(36.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,73.6,46.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlvDoIAAnPILfAAIAAHPg");
	this.shape.setTransform(36.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,73.6,46.4), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlvDoIAAnPILfAAIAAHPg");
	this.shape.setTransform(36.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,73.6,46.4), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bAwIAAhfMAu3AAAIAABfg");
	this.shape.setTransform(150,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,300,9.6), null);


(lib.showInfoFlexBoxPos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14ABE0").s().p("A0nCTIAAklMApOAAAIAAElg");
	this.shape.setTransform(132,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.showInfoFlexBoxPos, new cjs.Rectangle(0,0,263.9,29.3), null);


(lib.progLogoPos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bB7IAAj1MAu3AAAIAAD1g");
	this.shape.setTransform(150,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.progLogoPos, new cjs.Rectangle(0,0,300,24.6), null);


(lib.pricePos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bBlIAAjJMAu3AAAIAADJg");
	this.shape.setTransform(150,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pricePos, new cjs.Rectangle(0,0,300,20.3), null);


(lib.finalTxtPos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bDhIAAnBMAu3AAAIAAHBg");
	this.shape.setTransform(150,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.finalTxtPos, new cjs.Rectangle(0,0,300,45.1), null);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14ABE0").s().p("ArlB0IAAjnIXLAAIAADng");
	this.shape_1.setTransform(84.5,11.6,1.138,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9_1, new cjs.Rectangle(0,0,169,23.3), null);


(lib.beacon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA21B").s().p("AgUAWQgIgJgBgNQABgMAIgIQAJgJALAAQAMAAAJAJQAIAIABAMQgBANgIAJQgJAHgMABQgLgBgJgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.beacon, new cjs.Rectangle(-2.9,-2.9,6,5.9), null);


(lib.slingLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wave:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// waves
	this.wave_3 = new lib.wave1();
	this.wave_3.parent = this;
	this.wave_3.setTransform(0.1,-15.7,1,1,0,0,0,1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.wave_3).wait(10).to({regX:1.7,scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:0},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({regX:1.8,scaleX:1.45,scaleY:1.45,x:0.1},0).wait(1).to({regX:1.7,scaleX:1.26,scaleY:1.26,x:0},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({regX:1.8,scaleX:0.84,scaleY:0.84},0).wait(1).to({regX:1.7,scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:0},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:1.8,scaleX:1,scaleY:1},0).wait(3));

	// waves
	this.wave_2 = new lib.wave2();
	this.wave_2.parent = this;
	this.wave_2.setTransform(-3.6,-15.7,1,1,0,0,0,1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.wave_2).wait(7).to({regX:1.5,scaleX:1.16,scaleY:1.16,x:-3.7},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-3.8},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-3.7},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({regX:1.6,scaleX:0.86,scaleY:0.86},0).wait(1).to({regX:1.5,scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:1.6,scaleX:1,scaleY:1,x:-3.6},0).wait(6));

	// waves
	this.wave_1 = new lib.wave3();
	this.wave_1.parent = this;
	this.wave_1.setTransform(-6.8,-16,1,1,0,0,0,1.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wave_1).wait(4).to({regX:1.1,regY:0,scaleX:1.16,scaleY:1.16,x:-6.9,y:-15.9},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.43,scaleY:1.43},0).wait(1).to({regX:1.2,regY:-0.1,scaleX:1.45,scaleY:1.45,x:-6.7,y:-16},0).wait(1).to({regX:1.1,regY:0,scaleX:1.24,scaleY:1.24,x:-6.8,y:-15.9},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({regX:1.2,regY:-0.1,scaleX:0.76,scaleY:0.76,y:-16},0).wait(1).to({regX:1.1,regY:0,scaleX:0.82,scaleY:0.82,y:-15.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-6.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-6.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:1.2,regY:-0.1,scaleX:1,scaleY:1,y:-16},0).wait(9));

	// dot
	this.beacon = new lib.beacon();
	this.beacon.parent = this;
	this.beacon.setTransform(-12.6,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.beacon).wait(2).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(12));

	// television
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14ABE0").s().p("AEDASIgQgaIAAAaIgGAAIAAgiIAJAAIAPAZIABAAIgBgZIAHAAIAAAigACsANQgEgEAAgJQAAgIAEgEQAEgFAIAAQAIAAAFAFQAEAEAAAIQAAAJgEAEQgFAFgIAAQgIAAgEgFgACygIQgDADAAAFQAAAGADADQACADAEAAQAJAAAAgMQAAgLgJAAQgEAAgCADgAB8ASIAAgiIAIAAIAAAigABCAQIAAgHIAGADIAFAAIAEgBIABgDIgBgCIgBgBIgFgCIgFgDIgCgDIgBgEQAAgFADgCQADgDAGAAIAFABIAFACIgCAFIgFgCIgEAAIgDABIgBADIAAACIACABIAFACQAEACACACQACADAAADQAAAEgDADQgEADgGAAQgGAAgEgCgAAXASIAAgiIAIAAIAAAigAgdASIgMgiIAHAAIAJAcIABgIIAHgUIAIAAIgMAigAhfASIAAgiIAVAAIAAAFIgNAAIAAAIIAMAAIAAAGIgMAAIAAAJIANAAIAAAGgAiXASIAAgiIAIAAIAAAcIAOAAIAAAGgAjPASIAAgiIAUAAIAAAFIgMAAIAAAIIAMAAIAAAGIgMAAIAAAJIAMAAIAAAGgAkCASIAAgdIgJAAIAAgFIAaAAIAAAFIgJAAIAAAdg");
	this.shape.setTransform(-13.7,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A4DC").s().p("AAcASIAAgbIAAAAIgLAbIgFAAIgKgbIAAAAIAAAbIgFAAIAAgjIAIAAIAKAbIAKgbIAJAAIAAAjgAgXASIAAgeIgKAAIAAgFIAbAAIAAAFIgLAAIAAAeg");
	this.shape_1.setTransform(39,-6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14ABE0").s().p("AgWBdIAAi5IAtAAIAAC5g");
	this.shape_2.setTransform(-12.4,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14ABE0").s().p("AhHCQIAAgmIBVAAQAngBABg6IAAghQgJAQgQAKQgQAKgXAAQglgBgZgaQgYgagBgrQABgrAYgbQAZgbAkAAQAYAAARALQAQAKAJARIgBgiIAsAAIAAC8QAAAvgWAYQgXAYgoAAgAglhXQgOAPAAAaQAAAaAOAQQAOAOAYABQAZgBAOgOQAPgQAAgaQAAgagPgPQgOgQgZAAQgYAAgOAQg");
	this.shape_3.setTransform(23.9,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14ABE0").s().p("AAsBfIAAhqQAAgpgogBQgUAAgNANQgNAMgBAXIAABkIgtAAIAAi5IAtAAIgBAiQATglAsgBQAfAAATAVQASAVACAmIAABtg");
	this.shape_4.setTransform(2.7,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14ABE0").s().p("AgWCQIAAkfIAsAAIAAEfg");
	this.shape_5.setTransform(-21.1,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14ABE0").s().p("AgvBVQgVgLgJgPIAegWQASAZAggBQAhAAAAgUQAAgKgLgFQgLgFgXgGQgVgFgRgMQgQgMgBgbQABgcATgOQASgNAcAAQAWAAAQAIQAQAIAKAMIgaAaQgNgRgZgCQgZABAAARQgBAKAKAFQAKAEAUAGQAXAEATANQATALABAdQAAAZgRAQQgQARgoAAQgfAAgVgMg");
	this.shape_6.setTransform(-34.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-20.1,84.9,40.4);


// stage content:
(lib._728x090 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ctaPos
	this.ctaPos = new lib.Symbol9_1();
	this.ctaPos.parent = this;
	this.ctaPos.setTransform(550.3,48.1,1,1,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.ctaPos).wait(1));

	// slingLogoPos
	this.slingLogoPos = new lib.slingLogo();
	this.slingLogoPos.parent = this;
	this.slingLogoPos.setTransform(633.3,24.4,0.903,0.903,0,0,0,-1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.slingLogoPos).wait(1));

	// slingLogo
	this.slingLogo = new lib.slingLogo();
	this.slingLogo.parent = this;
	this.slingLogo.setTransform(633,45.5,0.903,0.903,0,0,0,-1.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.slingLogo).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Eg43AHCIAAuDMBxvAAAIAAODgEg4tAG4MBxbAAAIAAtvMhxbAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// finalTxtPos
	this.finalTxtPos = new lib.finalTxtPos();
	this.finalTxtPos.parent = this;
	this.finalTxtPos.setTransform(34.6,11.3);
	this.finalTxtPos.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.finalTxtPos).wait(1));

	// pricePos
	this.pricePos = new lib.pricePos();
	this.pricePos.parent = this;
	this.pricePos.setTransform(35.3,58,1,1,0,0,0,0.7,0.2);
	this.pricePos.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.pricePos).wait(1));

	// finalImgPos
	this.finalImgPos = new lib.Symbol11();
	this.finalImgPos.parent = this;
	this.finalImgPos.setTransform(335.4,7.9,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.finalImgPos).wait(1));

	// showInfoFlexBoxPos
	this.showInfoFlexBoxPos = new lib.showInfoFlexBoxPos();
	this.showInfoFlexBoxPos.parent = this;
	this.showInfoFlexBoxPos.setTransform(57,46.5,1,1,0,0,0,0,0.1);
	this.showInfoFlexBoxPos.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.showInfoFlexBoxPos).wait(1));

	// showTitlePos
	this.showTitlePos = new lib.Symbol7();
	this.showTitlePos.parent = this;
	this.showTitlePos.setTransform(17.4,39.4,1,1,0,0,0,0,0.1);
	this.showTitlePos.alpha = 0.41;
	this.showTitlePos.filters = [new cjs.ColorFilter(0.98828125, 0.23046875, 1, 1, 0, 0, 0, 0)];
	this.showTitlePos.cache(-2,-2,304,14);

	this.timeline.addTween(cjs.Tween.get(this.showTitlePos).wait(1));

	// networkLogoPos
	this.networkLogoPos = new lib.progLogoPos();
	this.networkLogoPos.parent = this;
	this.networkLogoPos.setTransform(17.4,54,1,0.987,0,0,0,0,0.2);
	this.networkLogoPos.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.networkLogoPos).wait(1));

	// carouselTxtPos
	this.carouselTxtPos = new lib.txt1Pos();
	this.carouselTxtPos.parent = this;
	this.carouselTxtPos.setTransform(39.3,21.2,1,1,0,0,0,0.4,0);
	this.carouselTxtPos.alpha = 0.23;

	this.timeline.addTween(cjs.Tween.get(this.carouselTxtPos).wait(1));

	// ptBpos
	this.ptBpos = new lib.Symbol9();
	this.ptBpos.parent = this;
	this.ptBpos.setTransform(415.3,22.4,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.ptBpos).wait(1));

	// ptBscale
	this.ptBscale = new lib.Symbol9();
	this.ptBscale.parent = this;
	this.ptBscale.setTransform(388.8,3.9,1.771,1.771,0,0,0,0.2,0.1);
	this.ptBscale.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.ptBscale).wait(1));

	// ptC
	this.ptC = new lib.Symbol8();
	this.ptC.parent = this;
	this.ptC.setTransform(366.1,29);

	this.timeline.addTween(cjs.Tween.get(this.ptC).wait(1));

	// ptA
	this.ptA = new lib.Symbol10();
	this.ptA.parent = this;
	this.ptA.setTransform(464.8,28.9,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.ptA).wait(1));

	// ref
	this.bgGrad = new lib.Symbol20();
	this.bgGrad.parent = this;
	this.bgGrad.setTransform(453.6,75.6,0.884,0.299,0,0,0,134,66.8);
	this.bgGrad.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get(this.bgGrad).wait(1));

	// bg black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348.5,33.4,743.5,502);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;