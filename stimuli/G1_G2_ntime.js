(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 630,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["G1_G2_ntime_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6Kopie = function() {
	this.spriteSheet = ss["G1_G2_ntime_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WhiteMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.4)").s().p("Eg8+AqSMAAAhUjMB59AAAMAAABUjg");
	this.shape.setTransform(390.4,270.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,780.8,541.3);


(lib.pipette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0,0,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,118.6);


(lib.pipette_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("ACLErIgxgYQgWgLgOgJQgKgLgIgMIgJgPIgDgIIgEgMIAAgCQAAgLhdirIg3hkIgFgMQgIgYgcgvIgNgVIgQglIATgKQAVAwAuBSQA0BdARAlQAUAuArBZQALAYAYArQARAmBWAaQAGAAAEgJQACgGAAgGQAAgFgDgIQgFgHAAgFQAAgEAIgPQAHgPAAgJIAAgLIgCgDIAAgCQgrhfhHiEIgBgBIAAAAIAAgBIgFgIQgKgXgPgaIhOiWIgSgnIAUgIIAAAEIAPAcQAPAmAXAsQAOAZAZAoIA3BmIAfA2IAAADQAEAOAKAQIAMAQIAfA+QAKAeAAARIgGAYIgGAKQgBABABABQAAAAAAABQAAAAAAABQAAAAAAAAIABABIgBAHIgNA0QAAACAAABQAAABAAAAQAAABABAAQAAAAAAAAIABAAIgGAFIgQAAIgPgCg");
	this.shape.setTransform(33.1,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("Ah3BhIgDgCQgGgHgIgMIgNgWIAAgDQAAgHADgGIAOgUIAFAAIA4gZQA7gdANgGQAPgHAjgYIAWgPIAMgHIAEAAQAQgEAMABQAhAUAAAdQAAAmgvAVIgBgCIgEAAIABADIgBAAIAAACQgQAHgVAGQgeAIgPAHQgOAGgPAMIgVAPIAAgBIAAABIgIAFIgEgBQgEAAgNAFIgEAAIgBABIAAABIgJAEIgZAKgAh6AhIgBAEQACAFADAUQAFATAMAAQAGAAgCgDIAAgDQgMgGgDgNIgCgXIgFgBQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAhYAxQAEARAKAHQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgLgHgPQgKgTgCgFIgEAAIAHAcgAhBAAIAAADQAAAEAKAWQALAWAFAFIACgCIAAgDQgHgtgUgGIgBAAgAgUARQAEAOAMAHQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgJgKgFgMIgHgVIgFAAQAEAHAEARgAgIgVIAIAYQAFAQAEAHQAFgDAAgCIgJgcQgEgOgGAAIgDAAgAATgjQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAJAIAPQAIANAHAFQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQgEgFgFgPQgFgOgIgJIgCAAIgBAAgAAwgeQAEAGACALQACALAFADQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQgEgIgDgOIgFgXIgEAAgABEgxQAFAHAFAOIAGAVQAFgBAAgCIgRg0IgEAAgABbhIIgBAEQASAbADAYQAFgBAAgCQABgNgHgPQgGgPgKgKQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(18.4,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9999").s().p("AhiBAIgBgBIgEAAIgCABIgFAAQgDgGAAgHQAAgQAqgYIADgCQAUgJAdgNQAvgWBJgcIANANIgMAJQgQAEgPAJQgWALAAAGIAAABIgeANQhOAkglAZg");
	this.shape_2.setTransform(15.3,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag5A5QgXgbgKgNQgGgPAAgQIABgPQACgQAHgNQAVgnA2gCQAoARAWAWIADAEIgDgCQAKAQALAWQALAZAOAmIgbAKQgbAMgjASIgiARQgIgQgXgbg");
	this.shape_3.setTransform(10.9,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADpG9IgkAAIgGgEIgFgBIgXgLQg8gcgQgYIgIgMIgKgZIgFgNIgDgIQgBgIgDgIIgCgEQgDgKgHgHIgEgJQgCgEgEgCIgSgmQgTgrgUghIgGgPQgEgHgRgaIgJgRIgFgGIgIgTQgbg0gUgmIgEgGQgVgmgIgPQgWAKgGAAQgKAAgKgEIgMgBQgGgGgHgLIgGgHQgOgUAAgKQgDgDgCAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgCIAHgMQAEgFAFgCIADgEIgDAAIgDgbQAAgSAVgLIAUgKIgRgUQgMgNgMgRQgZggAAgIIAAgBQgHgQgBgKQAAgmAbgeQAXgbAkADIgFgCQAfgBAcAUIAJAFIAEAGQAUATAGASQAHALAGAOIAMAgQAKAVAAACIAAABIAugNQAKAGABAEQABABAAAGIgBADIAagDIAAgBIAQABIAJALQARAMABAhQAAAagPARQgMANgYAMQBDCMBCBmIACAEIAHANIALAXQAPAdAYAsQA7BsAAAbIgFAWIgFATIgIAbIAAARIgBAEQAAAFgEAOIgEAMQgEACgFAAIgBAAgAiKhcIAPAmIAOAVQAcAtAIAYIAEAMIA3BlQBdCsAAALIAAACIAFAMIADAIIAJAPQAIAMAKALQANAIAXAMIAwAYIAQACIAQgBIAFgFIgBAAQAAABAAgBQAAAAAAAAQAAgBAAgBQgBgBAAgBIAOg1IABgHIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAGgKIAHgYQAAgSgKgdIggg+IgLgQQgLgQgEgOIAAgDIgeg4Ig3hmQgZgmgOgZQgagsgPgmIgPgdIAAgDIgSAIIAQAmIBQCVQAPAaALAXIAEAIIAAAAIABABIABABQBGCGArBfIAAACIACADIABALQAAAJgHAPQgIAPAAAEQAAAFAEAHQAEAIAAAEQAAAHgDAGQgDAJgHAAQhWgagQgmQgYgsgMgXQgthZgTguQgQgng0heQguhQgUgvIgTAJgAgSiYQgIAChJAnIgQAIQAOARAQAjQAWAxAPASIAlBEQAVApAJAaQARArAxBeIAiBEQALAXAnAVQAfAQANAAQAIAAADgNIgIgYQAAgNAIgLQAHgLAAgIIgEABIAAgFIACgFIgDgEQgEgJACgDIAAAAQgLgagjhFQg7hxgIgTIgEgIIgVgoIgCgDIgBgCQgSgfgLgVIgKgPQgPgWgPgoIgEgJIgOghIgDgEIgGgJIgFABgAC/CjIAAgBIAAAAIgCgEIACAFgABMAMIADAFIgGgLIADAGgAjpiSQgDAGAAAHIABADIAMAWQAIAMAHAHIACACIARACIAZgKIAKgEIAAgBIABgBIADAAQANgFAEAAIAEABIAIgFIAAgBIABABIAUgPQASgMANgGQAPgHAegIQAVgGAOgHIAAgCIABAAIgBgDIAFAAIAAACQAvgXAAgmQAAgdgggUQgMgBgRAEIgCAAIgLAHIgXAPQgjAYgOAHQgPAGg8AdIg4AbIgEAAIgPAUgAjYitIACAAQAlgZBQglIAegOIAAgBQAAgGAWgLQAPgJAQgEIAMgKIgNgMQhJAcgxAWQgdANgUALIgDACQgqAYAAAQQAAAGADAHIAFAAIACgBIAEAAIABABgAj5mMQgHAOgCAQIgBAOQABASAGAQQAJAMAYAcQAWAaAIARIAkgRQAjgTAcgLIAbgKQgPgngLgaQgKgWgKgRIACACIgCgDQgWgXgqgRQg3ACgVAngAhpmIIAEADIgFgFIABACgAjNh6QgCgUgCgFIABgEQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAFABIACAXQAEANAMAGIAAADQABADgGAAQgMAAgFgTgAiuiHIgIgcIAEAAQACAFAKATQAIAPgBALQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgKgHgDgRgAiOibQgKgWAAgEIAAgEIABgBQAVAIAGAtIAAADIgCACQgFgFgLgWgAhrinQgEgSgEgIIAFAAIAHAXQAFAMAJAKQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgMgHgEgOgAhVi1IgKgaQALgDAEARIAJAeQAAACgFADQgEgHgFgQgAg7jBQgIgPAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADAAQAJAJAEAOQAFARAEAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQgHgFgIgPgAgejHQgDgLgEgGIAAgPIAEAAIAGAXQADAOADAIQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQgEgFgCgLgAgHjWQgFgOgFgHIAAgNIAFAAIAOA0QAAACgDABIgGgVgAAEj+IABgEQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAKAKAHAPQAGAPgBANQAAACgEABQgEgYgRgbg");
	this.shape_4.setTransform(27.1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,89);


(lib.no_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABsAAQAAAtgfAgQggAfgtAAQgsAAgfgfQggggAAgtQAAgsAggfQAfggAsAAQAtAAAgAgQAfAfAAAsg");
	this.shape.setTransform(10.9,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AhLBMQgggfAAgtQAAgsAggfQAfggAsAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_1.setTransform(10.9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.7,23.7);


(lib.filling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,102,0.498)").s().p("Eg1/AOAIAA7+MAq0AAAIAAb+gALMN/IAA7/MAq0AAAIAAb/g");
	this.shape.setTransform(345.7,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691.3,179.4);


(lib.effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Bitmap6Kopie();
	this.instance.setTransform(0,0,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.tubedoublered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgbADIAAgFIA3gZIAAAJIgrASIArATIAAAIg");
	this.shape.setTransform(19.7,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgbADIAAgFIA3gZIAAAJIgrASIArATIAAAIg");
	this.shape_1.setTransform(11.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape_2.setTransform(2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAIgIAJAAQALAAAGAGQAGAHAAALIAAADIgmAAQAAAFACAEIAEAGQACADAEABQACABAEAAQAFAAAGgCQAFgCADgDIAAAAIAAAKIgJAEQgFABgFAAQgMAAgHgHgAgJgPQgEAEgBAGIAeAAQgBgHgDgEQgEgEgHAAQgFAAgFAFg");
	this.shape_3.setTransform(-3,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgLAbIgJgEIAAgKIABAAQAEADAFACQAGACAEAAQAFAAADgCQADgCAAgEQAAgDgBgCIgIgDIgDgBIgFgBQgIgCgDgBQgDgEAAgFQAAgEACgDIAEgFIAHgEQAEgBADAAIAKABIAJADIAAAKIgBAAIgIgFIgKgBQgDAAgEACQgDACAAADQAAAEACABQACACAEABIAEABIAFABQAHACADABQAEAEAAAGQAAAHgGAFQgHAFgIAAQgGAAgFgBg");
	this.shape_4.setTransform(-8.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAIgIAJAAQALAAAGAGQAGAHAAALIAAADIgmAAQAAAFACAEIAEAGQACADAEABQACABAEAAQAFAAAGgCQAFgCADgDIAAAAIAAAKIgJAEQgFABgFAAQgMAAgHgHgAgJgPQgEAEgBAGIAeAAQgBgHgDgEQgEgEgHAAQgFAAgFAFg");
	this.shape_5.setTransform(-14.2,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AARAkIgWgdIgOAAIAAAdIgKAAIAAhHIAUAAIAKABIAHADQAFACABAEQADAEAAAGQAAAIgEAFQgEADgHADIAcAggAgTAAIAJAAIAIAAQACgBADgCIADgFIABgGQAAgEgCgCIgDgEIgDgCIgHgBIgLAAg");
	this.shape_6.setTransform(-19.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADpBaInRAAQgUAAgSgHQgRgHgNgNQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgMARgIQASgHAUABIHRAAQAUgBASAHQARAIANAMQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNANgRAHQgSAHgUAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#30AD3C").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,38).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#30AD3C").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoublegreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape.setTransform(10.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgPAbIAAg1IAJAAIAAAIQAFgEADgCQADgCAFAAIADAAIAEABIAAAJIgBAAIgEAAIgEgBQgFAAgDACIgGAFIAAAlg");
	this.shape_1.setTransform(6.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgRAXQgFgFAAgHQAAgGADgEQADgCAFgCIALgDIAOgBIAAgCQAAgDgCgCIgDgDIgEgCIgFAAIgHABIgJADIgBAAIAAgKIAIgBIAJgBIAJABQAEABADACQADACACAEQACADAAAGIAAAjIgJAAIAAgGIgEACIgEADIgFACIgFAAQgHAAgGgFgAAEAAIgHAAQgEABgDADQgCACAAAEQAAAFADACQACADAGAAQADAAAEgCIAIgFIAAgNIgKAAg");
	this.shape_2.setTransform(1.1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape_3.setTransform(-3.6,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAkIgOgFIAAgMIABAAQAFAFAIACQAHADAGAAQAIAAAFgEQAEgDAAgGQAAgEgCgDQgCgCgFgBIgIgCIgHgCQgKgCgEgDQgFgFAAgHQAAgKAHgFQAJgGAKAAQAHAAAGABIALAEIAAALIAAAAQgEgDgHgDQgHgCgGAAQgHAAgEADQgFAEAAAFQAAAEADADQABACAHACIAHABIAKACQAHACAEADQAEAEABAIQgBAEgCAEQgCAFgDACQgEAEgFABQgFACgGAAQgHAAgGgBg");
	this.shape_4.setTransform(-9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80DD88","#D7F4DC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADpBaInRAAQgUAAgSgHQgRgHgNgNQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgMARgIQASgHAUABIHRAAQAUgBASAHQARAIANAMQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNANgRAHQgSAHgUAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BCD58").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#30AD3C").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#3ECA4B","#BCEDC0"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3ECA4B","#3ECA4B"],[0,1],-39,0,39,0).s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30AD3C").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


// stage content:
(lib.G1_G2_ntime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pipette.visible = false;
		this.pipette2.visible = false;
		this.pipette_empty.visible = false;
		this.pipette_empty2.visible = false;
		
		this.filling.visible = false;
		this.Mask.visible = false;
		this.btn_reset.visible = false;
		
		this.e1.visible = false;
		this.e2.visible = false;
		this.e3.visible = false;
		this.e4.visible = false;
		this.e5.visible = false;
		this.e6.visible = false;
		this.e7.visible = false;
		this.e8.visible = false;
		this.e9.visible = false;
		
		this.e10.visible = false;
		this.e11.visible = false;
		this.e12.visible = false;
		this.e13.visible = false;
		this.e14.visible = false;
		this.e15.visible = false;
		this.e16.visible = false;
		this.e17.visible = false;
		this.e18.visible = false;
		this.e19.visible = false;
		
		this.e20.visible = false;
		this.e21.visible = false;
		this.e22.visible = false;
		this.e23.visible = false;
		this.e24.visible = false;
		this.e25.visible = false;
		this.e26.visible = false;
		this.e27.visible = false;
		this.e28.visible = false;
		this.e29.visible = false;
		
		this.e30.visible = false;
		this.e31.visible = false;
		this.e32.visible = false;
		this.e33.visible = false;
		this.e34.visible = false;
		this.e35.visible = false;
		this.e36.visible = false;
		this.e37.visible = false;
		this.e38.visible = false;
		this.e39.visible = false;
		
		this.e40.visible = false;
		this.e41.visible = false;
		this.e42.visible = false;
		this.e43.visible = false;
		this.e44.visible = false;
		this.e45.visible = false;
		this.e46.visible = false;
		this.e47.visible = false;
		this.e48.visible = false;
		this.e49.visible = false;
		
		this.e50.visible = false;
		this.e51.visible = false;
		this.e52.visible = false;
		this.e53.visible = false;
		this.e54.visible = false;
		this.e55.visible = false;
		this.e56.visible = false;
		this.e57.visible = false;
		this.e58.visible = false;
		this.e59.visible = false;
		
		this.e60.visible = false;
		
		this.e61.visible = false;
		this.e62.visible = false;
		this.e63.visible = false;
		this.e64.visible = false;
		this.e65.visible = false;
		this.e66.visible = false;
		this.e67.visible = false;
		this.e68.visible = false;
		this.e69.visible = false;
		
		this.e70.visible = false;
		this.e71.visible = false;
		this.e72.visible = false;
		this.e73.visible = false;
		this.e74.visible = false;
		this.e75.visible = false;
		this.e76.visible = false;
		this.e77.visible = false;
		this.e78.visible = false;
		this.e79.visible = false;
		
		this.e80.visible = false;
		this.e81.visible = false;
		this.e82.visible = false;
		this.e83.visible = false;
		this.e84.visible = false;
		this.e85.visible = false;
		this.e86.visible = false;
		this.e87.visible = false;
		this.e88.visible = false;
		this.e89.visible = false;
		
		this.e90.visible = false;
		this.e91.visible = false;
		this.e92.visible = false;
		this.e93.visible = false;
		this.e94.visible = false;
		this.e95.visible = false;
		this.e96.visible = false;
		this.e97.visible = false;
		this.e98.visible = false;
		this.e99.visible = false;
		
		this.e100.visible = false;
		this.e101.visible = false;
		this.e102.visible = false;
		this.e103.visible = false;
		this.e104.visible = false;
		this.e105.visible = false;
		this.e106.visible = false;
		this.e107.visible = false;
		this.e108.visible = false;
		this.e109.visible = false;
		
		this.e110.visible = false;
		this.e111.visible = false;
		this.e112.visible = false;
		this.e113.visible = false;
		this.e114.visible = false;
		this.e115.visible = false;
		this.e116.visible = false;
		this.e117.visible = false;
		this.e118.visible = false;
		this.e119.visible = false;
		
		this.e120.visible = false;
		
		var effectsA = [this.e1, this.e2, this.e3, this.e4, this.e5, this.e6, this.e7, this.e8, this.e9, this.e10,
						this.e11, this.e12, this.e13, this.e14, this.e15, this.e16, this.e17, this.e18, this.e19, this.e20,
						this.e21, this.e22, this.e23, this.e24, this.e25, this.e26, this.e27, this.e28, this.e29, this.e30,
						this.e31, this.e32, this.e33, this.e34, this.e35, this.e36, this.e37, this.e38, this.e39, this.e40,
						this.e41, this.e42, this.e43, this.e44, this.e45, this.e46, this.e47, this.e48, this.e49, this.e50,
						this.e51, this.e52, this.e53, this.e54, this.e55, this.e56, this.e57, this.e58, this.e59, this.e60];
						
		var effectsB = [this.e61, this.e62, this.e63, this.e64, this.e65, this.e66, this.e67, this.e68, this.e69, this.e70,
						this.e71, this.e72, this.e73, this.e74, this.e75, this.e76, this.e77, this.e78, this.e79, this.e80,
						this.e81, this.e82, this.e83, this.e84, this.e85, this.e86, this.e87, this.e88, this.e89, this.e90,
						this.e91, this.e92, this.e93, this.e94, this.e95, this.e96, this.e97, this.e98, this.e99, this.e100,
						this.e101, this.e102, this.e103, this.e104, this.e105, this.e106, this.e107, this.e108, this.e109, this.e110,
						this.e111, this.e112, this.e113, this.e114, this.e115, this.e116, this.e117, this.e118, this.e119, this.e120];
		
		var masktime = 24000;
		
		var cells_die = [8375, 8421, 8456, 8485, 8509, 8531, 8552, 8570, 8588, 8605, 8622, 8637, 8653, 8668, 8683, 8699, 8714, 8729, 8744, 8760, 8776, 8793, 8810, 8829, 8848, 8869, 8893, 8919, 8949, 8987];
		
		var cells_die2 = [20372, 20420, 20455, 20484, 20509, 20532, 20552, 20571, 20589, 20606, 20623, 20639, 20654, 20670, 20685, 20700, 20715, 20730, 20746, 20761, 20778, 20794, 20811, 20830, 20849, 20870, 20893, 20919, 20949, 20986];
		
		// shuffle the array
		shuffle = (array) => array.sort(() => Math.random() - 0.5);
		
		shuffle(cells_die);
		shuffle(cells_die2);
		
		shuffle(effectsA);
		shuffle(effectsB);
		
		/////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////
		
		this.btn_start.addEventListener("click", start_obs.bind(this));
		
		function start_obs() {
			let that = this;
			this.btn_start.visible = false;
			
			setTimeout (pipette_on, 2000);
				
				function pipette_on(){
					that.pipette.visible = true;
					that.pipette2.visible = true;
				}
				
			setTimeout (filling_on, 2700);
				
				function filling_on(){
					that.filling.visible = true;
					that.pipette.visible = false;
					that.pipette2.visible = false;
					that.pipette_empty.visible = true;
					that.pipette_empty2.visible = true;
				}
				
			
			setTimeout (counter_on, 2700);
			
			function counter_on(){
				var seconds = 0;
		
				var interval = setInterval(function(){
					seconds++;
					console.trace("seconds = " + seconds);
					that.clock.text = seconds + " hrs";
				
				if(seconds === (masktime-3000)/1000){
					clearInterval(interval);
					}
				
				},1000);
			};
				
				
			//////////////effects///////////////////////////////////////	
			setTimeout (e1_on, cells_die[0]);
				
				function e1_on(){
					effectsA[0].visible = true;
				}
				
			setTimeout (e2_on, cells_die[1]);
				
				function e2_on(){
					effectsA[1].visible = true;
				}
				
			setTimeout (e3_on, cells_die[2]);
				
				function e3_on(){
					effectsA[2].visible = true;
				}
				
			setTimeout (e4_on, cells_die[3]);
				
				function e4_on(){
					effectsA[3].visible = true;
				}
				
			setTimeout (e5_on, cells_die[4]);
				
				function e5_on(){
					effectsA[4].visible = true;
				}
				
			setTimeout (e6_on, cells_die[5]);
				
				function e6_on(){
					effectsA[5].visible = true;
				}
			
			setTimeout (e7_on, cells_die[6]);
				
				function e7_on(){
					effectsA[6].visible = true;
				}
				
			setTimeout (e8_on, cells_die[7]);
				
				function e8_on(){
					effectsA[7].visible = true;
				}
		
			setTimeout (e9_on, cells_die[8]);
				
				function e9_on(){
					effectsA[8].visible = true;
				}
			
			setTimeout (e10_on, cells_die[9]);
				
				function e10_on(){
					effectsA[9].visible = true;
				}
				
			setTimeout (e11_on, cells_die[10]);
				
				function e11_on(){
					effectsA[10].visible = true;
				}
				
			setTimeout (e12_on, cells_die[11]);
				
				function e12_on(){
					effectsA[11].visible = true;
				}
				
			setTimeout (e13_on, cells_die[12]);
				
				function e13_on(){
					effectsA[12].visible = true;
				}
				
			setTimeout (e14_on, cells_die[13]);
				
				function e14_on(){
					effectsA[13].visible = true;
				}
				
			setTimeout (e15_on, cells_die[14]);
				
				function e15_on(){
					effectsA[14].visible = true;
				}
		
			setTimeout (e16_on, cells_die[15]);
				
				function e16_on(){
					effectsA[15].visible = true;
				}
				
			setTimeout (e17_on, cells_die[16]);
				
				function e17_on(){
					effectsA[16].visible = true;
				}
				
			setTimeout (e18_on, cells_die[17]);
				
				function e18_on(){
					effectsA[17].visible = true;
				}
				
			setTimeout (e19_on, cells_die[18]);
				
				function e19_on(){
					effectsA[18].visible = true;
				}
				
			setTimeout (e20_on, cells_die[19]);
				
				function e20_on(){
					effectsA[19].visible = true;
				}
				
			setTimeout (e21_on, cells_die[20]);
				
				function e21_on(){
					effectsA[20].visible = true;
				}
			
			setTimeout (e22_on, cells_die[21]);
				
				function e22_on(){
					effectsA[21].visible = true;
				}
				
			setTimeout (e23_on, cells_die[22]);
				
				function e23_on(){
					effectsA[22].visible = true;
				}
		
			setTimeout (e24_on, cells_die[23]);
				
				function e24_on(){
					effectsA[23].visible = true;
				}
			
			setTimeout (e25_on, cells_die[24]);
				
				function e25_on(){
					effectsA[24].visible = true;
				}
				
			setTimeout (e26_on, cells_die[25]);
				
				function e26_on(){
					effectsA[25].visible = true;
				}
				
			setTimeout (e27_on, cells_die[26]);
				
				function e27_on(){
					effectsA[26].visible = true;
				}
				
			setTimeout (e28_on, cells_die[27]);
				
				function e28_on(){
					effectsA[27].visible = true;
				}
				
			setTimeout (e29_on, cells_die[28]);
				
				function e29_on(){
					effectsA[28].visible = true;
				}
				
			setTimeout (e30_on, cells_die[29]);
				
				function e30_on(){
					effectsA[29].visible = true;
				}
				
				
				//////// other effects
				
				
			setTimeout (e31_on, cells_die2[0]);
				
				function e31_on(){
					effectsB[0].visible = true;
				}
				
			setTimeout (e32_on, cells_die2[1]);
				
				function e32_on(){
					effectsB[1].visible = true;
				}
				
			setTimeout (e33_on, cells_die2[2]);
				
				function e33_on(){
					effectsB[2].visible = true;
				}
				
			setTimeout (e34_on, cells_die2[3]);
				
				function e34_on(){
					effectsB[3].visible = true;
				}
				
			setTimeout (e35_on, cells_die2[4]);
				
				function e35_on(){
					effectsB[4].visible = true;
				}
				
			setTimeout (e36_on, cells_die2[5]);
				
				function e36_on(){
					effectsB[5].visible = true;
				}
			
			setTimeout (e37_on, cells_die2[6]);
				
				function e37_on(){
					effectsB[6].visible = true;
				}
				
			setTimeout (e38_on, cells_die2[7]);
				
				function e38_on(){
					effectsB[7].visible = true;
				}
		
			setTimeout (e39_on, cells_die2[8]);
				
				function e39_on(){
					effectsB[8].visible = true;
				}
			
			setTimeout (e40_on, cells_die2[9]);
				
				function e40_on(){
					effectsB[9].visible = true;
				}
				
			setTimeout (e41_on, cells_die2[10]);
				
				function e41_on(){
					effectsB[10].visible = true;
				}
				
			setTimeout (e42_on, cells_die2[11]);
				
				function e42_on(){
					effectsB[11].visible = true;
				}
				
			setTimeout (e43_on, cells_die2[12]);
				
				function e43_on(){
					effectsB[12].visible = true;
				}
				
			setTimeout (e44_on, cells_die2[13]);
				
				function e44_on(){
					effectsB[13].visible = true;
				}
				
			setTimeout (e45_on, cells_die2[14]);
				
				function e45_on(){
					effectsB[14].visible = true;
				}
		
			setTimeout (e46_on, cells_die2[15]);
				
				function e46_on(){
					effectsB[15].visible = true;
				}
				
			setTimeout (e47_on, cells_die2[16]);
				
				function e47_on(){
					effectsB[16].visible = true;
				}
				
			setTimeout (e48_on, cells_die2[17]);
				
				function e48_on(){
					effectsB[17].visible = true;
				}
				
			setTimeout (e49_on, cells_die2[18]);
				
				function e49_on(){
					effectsB[18].visible = true;
				}
				
			setTimeout (e50_on, cells_die2[19]);
				
				function e50_on(){
					effectsB[19].visible = true;
				}
				
			setTimeout (e51_on, cells_die2[20]);
				
				function e51_on(){
					effectsB[20].visible = true;
				}
			
			setTimeout (e52_on, cells_die2[21]);
				
				function e52_on(){
					effectsB[21].visible = true;
				}
				
			setTimeout (e53_on, cells_die2[22]);
				
				function e53_on(){
					effectsB[22].visible = true;
				}
		
			setTimeout (e54_on, cells_die2[23]);
				
				function e54_on(){
					effectsB[23].visible = true;
				}
			
			setTimeout (e55_on, cells_die2[24]);
				
				function e55_on(){
					effectsB[24].visible = true;
				}
				
			setTimeout (e56_on, cells_die2[25]);
				
				function e56_on(){
					effectsB[25].visible = true;
				}
				
			setTimeout (e57_on, cells_die2[26]);
				
				function e57_on(){
					effectsB[26].visible = true;
				}
				
			setTimeout (e58_on, cells_die2[27]);
			
				function e58_on(){
					effectsB[27].visible = true;
				}
				
			setTimeout (e59_on, cells_die2[28]);
				
				function e59_on(){
					effectsB[28].visible = true;
				}
				
			setTimeout (e60_on, cells_die2[29]);
				
				function e60_on(){
					effectsB[29].visible = true;
				}
				
				
				////// let reset appear 
				
			setTimeout (resetVisible, masktime);
				
				function resetVisible(){
					that.btn_reset.visible = true;
					that.Mask.visible = true;
				}
				
		}
		
		
		//////////////////////////////////////////////////////////////////////////////
		this.btn_reset.addEventListener("click", reset_obs.bind(this));
		
		function reset_obs() {
			let that = this;
			
			seconds = 0;
			that.clock.text = "_ _ hrs";
			
			this.btn_reset.visible = false;
			this.Mask.visible = false;
			this.btn_start.visible = true;
			
			this.pipette_empty.visible = false;
			this.pipette_empty2.visible = false;
			this.filling.visible = false;
			
			this.e1.visible = false;
			this.e2.visible = false;
			this.e3.visible = false;
			this.e4.visible = false;
			this.e5.visible = false;
			this.e6.visible = false;
			this.e7.visible = false;
			this.e8.visible = false;
			this.e9.visible = false;
		
			this.e10.visible = false;
			this.e11.visible = false;
			this.e12.visible = false;
			this.e13.visible = false;
			this.e14.visible = false;
			this.e15.visible = false;
			this.e16.visible = false;
			this.e17.visible = false;
			this.e18.visible = false;
			this.e19.visible = false;
		
			this.e20.visible = false;
			this.e21.visible = false;
			this.e22.visible = false;
			this.e23.visible = false;
			this.e24.visible = false;
			this.e25.visible = false;
			this.e26.visible = false;
			this.e27.visible = false;
			this.e28.visible = false;
			this.e29.visible = false;
			this.e30.visible = false;
		
			this.e31.visible = false;
			this.e32.visible = false;
			this.e33.visible = false;
			this.e34.visible = false;
			this.e35.visible = false;
			this.e36.visible = false;
			this.e37.visible = false;
			this.e38.visible = false;
			this.e39.visible = false;
		
			this.e40.visible = false;
			this.e41.visible = false;
			this.e42.visible = false;
			this.e43.visible = false;
			this.e44.visible = false;
			this.e45.visible = false;
			this.e46.visible = false;
			this.e47.visible = false;
			this.e48.visible = false;
			this.e49.visible = false;
		
			this.e50.visible = false;
			this.e51.visible = false;
			this.e52.visible = false;
			this.e53.visible = false;
			this.e54.visible = false;
			this.e55.visible = false;
			this.e56.visible = false;
			this.e57.visible = false;
			this.e58.visible = false;
			this.e59.visible = false;
			this.e60.visible = false;
			
			this.e61.visible = false;
			this.e62.visible = false;
			this.e63.visible = false;
			this.e64.visible = false;
			this.e65.visible = false;
			this.e66.visible = false;
			this.e67.visible = false;
			this.e68.visible = false;
			this.e69.visible = false;
		
			this.e70.visible = false;
			this.e71.visible = false;
			this.e72.visible = false;
			this.e73.visible = false;
			this.e74.visible = false;
			this.e75.visible = false;
			this.e76.visible = false;
			this.e77.visible = false;
			this.e78.visible = false;
			this.e79.visible = false;
		
			this.e80.visible = false;
			this.e81.visible = false;
			this.e82.visible = false;
			this.e83.visible = false;
			this.e84.visible = false;
			this.e85.visible = false;
			this.e86.visible = false;
			this.e87.visible = false;
			this.e88.visible = false;
			this.e89.visible = false;
		
			this.e90.visible = false;
			this.e91.visible = false;
			this.e92.visible = false;
			this.e93.visible = false;
			this.e94.visible = false;
			this.e95.visible = false;
			this.e96.visible = false;
			this.e97.visible = false;
			this.e98.visible = false;
			this.e99.visible = false;
		
			this.e100.visible = false;
			this.e101.visible = false;
			this.e102.visible = false;
			this.e103.visible = false;
			this.e104.visible = false;
			this.e105.visible = false;
			this.e106.visible = false;
			this.e107.visible = false;
			this.e108.visible = false;
			this.e109.visible = false;
		
			this.e110.visible = false;
			this.e111.visible = false;
			this.e112.visible = false;
			this.e113.visible = false;
			this.e114.visible = false;
			this.e115.visible = false;
			this.e116.visible = false;
			this.e117.visible = false;
			this.e118.visible = false;
			this.e119.visible = false;
		
			this.e120.visible = false;
		}
		
		
		
		
		///// Handle responsive scaling of the canvas 
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#bdbdbd";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene 5
	this.Mask = new lib.WhiteMask();
	this.Mask.setTransform(399.5,306.2,1,1,0,0,0,390.4,270.6);

	this.timeline.addTween(cjs.Tween.get(this.Mask).wait(1));

	// Ebene 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AolEmIAApLIRKAAIAAJLg");
	this.shape.setTransform(421,330.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ebene 4
	this.e119 = new lib.effect();
	this.e119.setTransform(746,247.5,0.835,0.836,0,0,0,13.1,13.2);

	this.e116 = new lib.effect();
	this.e116.setTransform(745.9,168.8,0.835,0.836,0,0,0,13,13.2);

	this.e115 = new lib.effect();
	this.e115.setTransform(745.9,141.5,0.835,0.836,0,0,0,13,12.5);

	this.e118 = new lib.effect();
	this.e118.setTransform(746,221.4,0.835,0.836,0,0,0,13.1,12.9);

	this.e114 = new lib.effect();
	this.e114.setTransform(720.5,273.8,0.835,0.836,0,0,0,13,12.9);

	this.e113 = new lib.effect();
	this.e113.setTransform(720.5,247.2,0.835,0.836,0,0,0,13,12.5);

	this.e110 = new lib.effect();
	this.e110.setTransform(720.5,168.2,0.835,0.836,0,0,0,13,12.5);

	this.e106 = new lib.effect();
	this.e106.setTransform(694.5,221.4,0.835,0.836,0,0,0,13,12.5);

	this.e102 = new lib.effect();
	this.e102.setTransform(668.8,273.9,0.835,0.836,0,0,0,13,12.5);

	this.e105 = new lib.effect();
	this.e105.setTransform(694.5,194.6,0.835,0.836,0,0,0,13,12.5);

	this.e101 = new lib.effect();
	this.e101.setTransform(668.7,247.5,0.835,0.836,0,0,0,13,12.9);

	this.e99 = new lib.effect();
	this.e99.setTransform(668.8,194.7,0.835,0.836,0,0,0,13.1,12.5);

	this.e94 = new lib.effect();
	this.e94.setTransform(642.4,221.4,0.835,0.836,0,0,0,13,13.7);

	this.e93 = new lib.effect();
	this.e93.setTransform(642.4,194.7,0.835,0.836,0,0,0,13,12.5);

	this.e92 = new lib.effect();
	this.e92.setTransform(642.4,168.5,0.835,0.836,0,0,0,13,12.5);

	this.e95 = new lib.effect();
	this.e95.setTransform(642.3,247.1,0.835,0.836,0,0,0,13,12.5);

	this.e117 = new lib.effect();
	this.e117.setTransform(745.9,195.5,0.835,0.836,0,0,0,13,13.4);

	this.e107 = new lib.effect();
	this.e107.setTransform(694.5,247.4,0.835,0.836,0,0,0,13,12.5);

	this.e112 = new lib.effect();
	this.e112.setTransform(720.5,221.3,0.835,0.836,0,0,0,13,13.4);

	this.e104 = new lib.effect();
	this.e104.setTransform(694.5,168.6,0.835,0.836,0,0,0,13,12.9);

	this.e100 = new lib.effect();
	this.e100.setTransform(668.8,221.4,0.835,0.836,0,0,0,13.1,13.2);

	this.e97 = new lib.effect();
	this.e97.setTransform(668.8,141.7,0.835,0.836,0,0,0,13,13.4);

	this.e103 = new lib.effect();
	this.e103.setTransform(694.5,141.7,0.835,0.836,0,0,0,13,13.4);

	this.e120 = new lib.effect();
	this.e120.setTransform(746,273.4,0.835,0.836,0,0,0,13.1,12.5);

	this.e108 = new lib.effect();
	this.e108.setTransform(694.4,273.9,0.835,0.836,0,0,0,13,12.5);

	this.e109 = new lib.effect();
	this.e109.setTransform(720.5,141.6,0.835,0.836,0,0,0,13,12.9);

	this.e111 = new lib.effect();
	this.e111.setTransform(720.5,194.5,0.835,0.836,0,0,0,13,13.2);

	this.e98 = new lib.effect();
	this.e98.setTransform(668.8,168.4,0.835,0.836,0,0,0,13.1,12.6);

	this.e96 = new lib.effect();
	this.e96.setTransform(642.4,273.9,0.835,0.836,0,0,0,13,12.5);

	this.e91 = new lib.effect();
	this.e91.setTransform(642.4,141.5,0.835,0.836,0,0,0,13,12.5);

	this.e89 = new lib.effect();
	this.e89.setTransform(616.3,247.3,0.835,0.836,0,0,0,13.1,13.2);

	this.e86 = new lib.effect();
	this.e86.setTransform(616.3,168.1,0.835,0.836,0,0,0,13,13.2);

	this.e85 = new lib.effect();
	this.e85.setTransform(616.3,141.7,0.835,0.836,0,0,0,13,12.5);

	this.e88 = new lib.effect();
	this.e88.setTransform(616.4,220.9,0.835,0.836,0,0,0,13.1,12.9);

	this.e84 = new lib.effect();
	this.e84.setTransform(590.8,273.8,0.835,0.836,0,0,0,13,12.9);

	this.e83 = new lib.effect();
	this.e83.setTransform(590.9,247.2,0.835,0.836,0,0,0,13,12.5);

	this.e80 = new lib.effect();
	this.e80.setTransform(590.8,168.7,0.835,0.836,0,0,0,13,12.5);

	this.e76 = new lib.effect();
	this.e76.setTransform(564.8,220.9,0.835,0.836,0,0,0,13,12.5);

	this.e72 = new lib.effect();
	this.e72.setTransform(538.7,273.9,0.835,0.836,0,0,0,13,12.5);

	this.e75 = new lib.effect();
	this.e75.setTransform(564.8,194.6,0.835,0.836,0,0,0,13,12.5);

	this.e71 = new lib.effect();
	this.e71.setTransform(538.7,247.2,0.835,0.836,0,0,0,13,12.9);

	this.e69 = new lib.effect();
	this.e69.setTransform(538.7,195.5,0.835,0.836,0,0,0,13.1,12.5);

	this.e64 = new lib.effect();
	this.e64.setTransform(513,221.4,0.835,0.836,0,0,0,13,13.7);

	this.e63 = new lib.effect();
	this.e63.setTransform(513,194.7,0.835,0.836,0,0,0,13,12.5);

	this.e62 = new lib.effect();
	this.e62.setTransform(513,168.7,0.835,0.836,0,0,0,13,12.5);

	this.e65 = new lib.effect();
	this.e65.setTransform(513,247.4,0.835,0.836,0,0,0,13,12.5);

	this.e87 = new lib.effect();
	this.e87.setTransform(616.3,194.2,0.835,0.836,0,0,0,13,13.4);

	this.e77 = new lib.effect();
	this.e77.setTransform(564.8,247.4,0.835,0.836,0,0,0,13,12.5);

	this.e82 = new lib.effect();
	this.e82.setTransform(590.9,221.1,0.835,0.836,0,0,0,13,13.4);

	this.e74 = new lib.effect();
	this.e74.setTransform(564.8,168.7,0.835,0.836,0,0,0,13,12.9);

	this.e70 = new lib.effect();
	this.e70.setTransform(538.7,221.4,0.835,0.836,0,0,0,13.1,13.2);

	this.e67 = new lib.effect();
	this.e67.setTransform(538.7,142.6,0.835,0.836,0,0,0,13,13.4);

	this.e73 = new lib.effect();
	this.e73.setTransform(564.8,142.6,0.835,0.836,0,0,0,13,13.4);

	this.e90 = new lib.effect();
	this.e90.setTransform(616.3,273.9,0.835,0.836,0,0,0,13.1,12.5);

	this.e78 = new lib.effect();
	this.e78.setTransform(564.8,273.8,0.835,0.836,0,0,0,13,12.5);

	this.e79 = new lib.effect();
	this.e79.setTransform(590.9,141.4,0.835,0.836,0,0,0,13,12.9);

	this.e81 = new lib.effect();
	this.e81.setTransform(590.8,195.4,0.835,0.836,0,0,0,13,13.2);

	this.e68 = new lib.effect();
	this.e68.setTransform(538.7,168.7,0.835,0.836,0,0,0,13.1,12.6);

	this.e66 = new lib.effect();
	this.e66.setTransform(513,273.9,0.835,0.836,0,0,0,13,12.5);

	this.e61 = new lib.effect();
	this.e61.setTransform(513,142,0.835,0.836,0,0,0,13,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHApIAAgQIAOAAIAAAQgAgHgYIAAgQIAOAAIAAAQg");
	this.shape_1.setTransform(474.5,314.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_2.setTransform(467.8,314.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgFgIABQgGAAgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_3.setTransform(456.7,314.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_4.setTransform(448.2,313);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_5.setTransform(444.3,313.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_6.setTransform(433.1,314.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQADgDAFAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_7.setTransform(426.6,314.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAnQgHgCgDgFQgDgEgBgGIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_8.setTransform(418.8,314.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAEAFAJAAQAJgBAEgEQAFgDABgGQAAgFgFgDQgDgCgLgCQgNgEgHgCQgGgCgDgFQgCgFAAgGQgBgFADgFQADgFAEgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAEQADAGACAIIgOACQgBgHgEgDQgFgEgHgBQgJAAgEAEQgEADAAAFIACAEIAFAEIALADQAOAFAHADQAFAAAEAFQADAEAAAIQAAAGgEAHQgEAGgIADQgIAEgJAAQgPAAgIgHg");
	this.shape_9.setTransform(410.4,314.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_10.setTransform(401.9,314.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAFgDQAGgEAHAAQAKAAAIAGQAJAFADAKQAEAKAAAMQABAMgFAJQgEAKgJAFQgJAGgJAAQgFAAgGgDQgGgDgEgEIAAAogAgPgmQgGAJAAAQQAAAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_11.setTransform(393.3,316.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVApIgRgaIgEgHIgUAhIgSAAIAfgpIgcgoIARAAIAOAUIAEAJIAFgJIAPgUIAQAAIgdAnIAgAqg");
	this.shape_12.setTransform(384.6,314.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgpA5IAAhxIBRAAIAAAOIhCAAIAAAjIA9AAIAAALIg9AAIAAAnIBEAAIAAAOg");
	this.shape_13.setTransform(375.5,313);

	this.clock = new cjs.Text("_ _ hrs", "18px 'Arial'");
	this.clock.name = "clock";
	this.clock.lineHeight = 22;
	this.clock.lineWidth = 62;
	this.clock.setTransform(387,333.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_14.setTransform(448.2,520.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_15.setTransform(438.7,520.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_16.setTransform(432.2,518.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_17.setTransform(428.2,518.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_18.setTransform(421.2,520.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpAaIAAgPIBTAAIAAAPgAgpgLIAAgPIBTAAIAAAPg");
	this.shape_19.setTransform(406,518.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgOAFgJQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgRQAAgSgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_20.setTransform(450.9,482.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_21.setTransform(441.2,484.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_22.setTransform(431.2,484.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgOAFgJQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAGIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIABgRQgBgSgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_23.setTransform(420.9,482.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpAbIAAgPIBTAAIAAAPgAgpgLIAAgOIBTAAIAAAOg");
	this.shape_24.setTransform(406,482.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_25.setTransform(619.1,338.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_26.setTransform(611.5,338.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_27.setTransform(604.5,336.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_28.setTransform(597.8,339.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_29.setTransform(585,338);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_30.setTransform(572.5,338.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(562.9,338.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_32.setTransform(551.5,336.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_33.setTransform(544.5,338.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_34.setTransform(537.2,338);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_35.setTransform(531.1,336.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_36.setTransform(523.5,338);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_37.setTransform(513.5,338.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFARIgRAEQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANALAFQAKAHAJgBQAPABAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_38.setTransform(502.1,336.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_39.setTransform(201.6,338.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_40.setTransform(194,338.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_41.setTransform(187,336.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_42.setTransform(180.3,339.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_43.setTransform(167.5,338);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_44.setTransform(155,338.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_45.setTransform(145.4,338.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_46.setTransform(134,336.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_47.setTransform(127,338.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_48.setTransform(119.7,338);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_49.setTransform(113.6,336.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_50.setTransform(106,338);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_51.setTransform(96,338.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFARIgRAEQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANALAFQAKAHAJgBQAPABAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_52.setTransform(84.6,336.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_53.setTransform(642.9,108.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_54.setTransform(635.3,108.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_55.setTransform(628.3,106.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_56.setTransform(621.6,110.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_57.setTransform(608.9,108.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_58.setTransform(596.3,108.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_59.setTransform(586.8,108.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_60.setTransform(574.9,106.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_61.setTransform(567.3,108.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_62.setTransform(557.3,108.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_63.setTransform(544.9,108.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_64.setTransform(534.9,106.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_65.setTransform(527.3,108.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_66.setTransform(517.3,108.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_67.setTransform(510.1,108.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_68.setTransform(500.9,106.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_69.setTransform(225.6,108.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_70.setTransform(218,108.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_71.setTransform(211,106.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_72.setTransform(204.3,110.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_73.setTransform(191.5,108.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_74.setTransform(179,108.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_75.setTransform(169.4,108.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_76.setTransform(157.6,106.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_77.setTransform(150,108.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_78.setTransform(140,108.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_79.setTransform(127.5,108.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_80.setTransform(117.6,106.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_81.setTransform(110,108.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_82.setTransform(100,108.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_83.setTransform(92.7,108.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_84.setTransform(83.5,106.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape_85.setTransform(676.6,63.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAIgEAIQgFAHgJAEQAMADAGAHQAGAJAAALQAAAIgEAIQgDAIgGAFQgGAEgIACQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgCQADgDADgEQADgFAAgGQAAgIgEgFQgEgFgGgDQgHgCgKAAIgeAAgAgegJIAcAAQAJAAAFgBQAHgCADgEQADgFAAgHQAAgHgDgEQgDgFgGgCQgFgBgMgBIgaAAg");
	this.shape_86.setTransform(668.2,62.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_87.setTransform(655,62.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_88.setTransform(648,63.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_89.setTransform(638.8,63.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_90.setTransform(632.1,62.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_91.setTransform(622.6,63.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_92.setTransform(610,63.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_93.setTransform(600.1,62.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgTAIgPQAIgQAOgHQAOgIAPAAQATAAAOAKQANAJAFASIgQAFQgFgPgJgGQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgIQAKgIADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_94.setTransform(588.7,62.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape_95.setTransform(257.8,63.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNghIgHgbQgDAMgEANg");
	this.shape_96.setTransform(249.2,62.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_97.setTransform(236.2,62.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_98.setTransform(229.2,63.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_99.setTransform(220,63.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_100.setTransform(213.2,62.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_101.setTransform(203.7,63.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_102.setTransform(191.2,63.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_103.setTransform(181.2,62.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgPQAIgQAOgHQAOgIAPAAQAUAAANAKQANAJAFASIgQAFQgFgPgJgGQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgIQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_104.setTransform(169.8,62.2);

	this._null = new lib.effect();
	this._null.setTransform(387.9,482.4,0.837,0.836,0,0,0,13,12.5);

	this.e59 = new lib.effect();
	this.e59.setTransform(328.5,246.9,0.835,0.836,0,0,0,13.1,13.2);

	this.e56 = new lib.effect();
	this.e56.setTransform(328.4,168.2,0.835,0.836,0,0,0,13,13.2);

	this.e55 = new lib.effect();
	this.e55.setTransform(328.5,140.9,0.835,0.836,0,0,0,13,12.5);

	this.e58 = new lib.effect();
	this.e58.setTransform(328.5,220.8,0.835,0.836,0,0,0,13.1,12.9);

	this.e54 = new lib.effect();
	this.e54.setTransform(303.1,273.3,0.835,0.836,0,0,0,13,12.9);

	this.e53 = new lib.effect();
	this.e53.setTransform(303.1,246.7,0.835,0.836,0,0,0,13,12.5);

	this.e50 = new lib.effect();
	this.e50.setTransform(303.1,167.6,0.835,0.836,0,0,0,13,12.5);

	this.e46 = new lib.effect();
	this.e46.setTransform(277,220.8,0.835,0.836,0,0,0,13,12.5);

	this.e42 = new lib.effect();
	this.e42.setTransform(251.3,273.4,0.835,0.836,0,0,0,13,12.5);

	this.e45 = new lib.effect();
	this.e45.setTransform(277.1,194,0.835,0.836,0,0,0,13,12.5);

	this.e41 = new lib.effect();
	this.e41.setTransform(251.3,246.9,0.835,0.836,0,0,0,13,12.9);

	this.e39 = new lib.effect();
	this.e39.setTransform(251.3,194.2,0.835,0.836,0,0,0,13.1,12.5);

	this.e34 = new lib.effect();
	this.e34.setTransform(224.9,220.9,0.835,0.836,0,0,0,13,13.7);

	this.e33 = new lib.effect();
	this.e33.setTransform(224.9,194.2,0.835,0.836,0,0,0,13,12.5);

	this.e32 = new lib.effect();
	this.e32.setTransform(224.9,167.9,0.835,0.836,0,0,0,13,12.5);

	this.e35 = new lib.effect();
	this.e35.setTransform(224.9,246.6,0.835,0.836,0,0,0,13,12.5);

	this.e57 = new lib.effect();
	this.e57.setTransform(328.5,194.9,0.835,0.836,0,0,0,13,13.4);

	this.e47 = new lib.effect();
	this.e47.setTransform(277,246.9,0.835,0.836,0,0,0,13,12.5);

	this.e52 = new lib.effect();
	this.e52.setTransform(303.1,220.7,0.835,0.836,0,0,0,13,13.4);

	this.e44 = new lib.effect();
	this.e44.setTransform(277,168.1,0.835,0.836,0,0,0,13,12.9);

	this.e40 = new lib.effect();
	this.e40.setTransform(251.4,220.9,0.835,0.836,0,0,0,13.1,13.2);

	this.e37 = new lib.effect();
	this.e37.setTransform(251.3,141.1,0.835,0.836,0,0,0,13,13.4);

	this.e43 = new lib.effect();
	this.e43.setTransform(277,141.1,0.835,0.836,0,0,0,13,13.4);

	this.e60 = new lib.effect();
	this.e60.setTransform(328.5,272.8,0.835,0.836,0,0,0,13.1,12.5);

	this.e48 = new lib.effect();
	this.e48.setTransform(277,273.4,0.835,0.836,0,0,0,13,12.5);

	this.e49 = new lib.effect();
	this.e49.setTransform(303.1,141.1,0.835,0.836,0,0,0,13,12.9);

	this.e51 = new lib.effect();
	this.e51.setTransform(303.1,193.9,0.835,0.836,0,0,0,13,13.2);

	this.e38 = new lib.effect();
	this.e38.setTransform(251.3,167.8,0.835,0.836,0,0,0,13.1,12.6);

	this.e36 = new lib.effect();
	this.e36.setTransform(224.9,273.4,0.835,0.836,0,0,0,13,12.5);

	this.e31 = new lib.effect();
	this.e31.setTransform(224.9,141.9,0.835,0.836,0,0,0,13,12.5);

	this.e29 = new lib.effect();
	this.e29.setTransform(198.9,246.7,0.835,0.836,0,0,0,13.1,13.2);

	this.e26 = new lib.effect();
	this.e26.setTransform(198.8,167.6,0.835,0.836,0,0,0,13,13.2);

	this.e25 = new lib.effect();
	this.e25.setTransform(198.9,141.1,0.835,0.836,0,0,0,13,12.5);

	this.e28 = new lib.effect();
	this.e28.setTransform(198.9,220.3,0.835,0.836,0,0,0,13.1,12.9);

	this.e24 = new lib.effect();
	this.e24.setTransform(173.4,273.3,0.835,0.836,0,0,0,13,12.9);

	this.e23 = new lib.effect();
	this.e23.setTransform(173.4,246.7,0.835,0.836,0,0,0,13,12.5);

	this.e20 = new lib.effect();
	this.e20.setTransform(173.4,168.2,0.835,0.836,0,0,0,13,12.5);

	this.e16 = new lib.effect();
	this.e16.setTransform(147.4,220.4,0.835,0.836,0,0,0,13,12.5);

	this.e12 = new lib.effect();
	this.e12.setTransform(121.2,273.4,0.835,0.836,0,0,0,13,12.5);

	this.e15 = new lib.effect();
	this.e15.setTransform(147.4,194,0.835,0.836,0,0,0,13,12.5);

	this.e11 = new lib.effect();
	this.e11.setTransform(121.2,246.7,0.835,0.836,0,0,0,13,12.9);

	this.e9 = new lib.effect();
	this.e9.setTransform(121.3,194.9,0.835,0.836,0,0,0,13.1,12.5);

	this.e4 = new lib.effect();
	this.e4.setTransform(95.5,220.8,0.835,0.836,0,0,0,13,13.7);

	this.e3 = new lib.effect();
	this.e3.setTransform(95.5,194.2,0.835,0.836,0,0,0,13,12.5);

	this.e2 = new lib.effect();
	this.e2.setTransform(95.5,168.2,0.835,0.836,0,0,0,13,12.5);

	this.e5 = new lib.effect();
	this.e5.setTransform(95.5,246.9,0.835,0.836,0,0,0,13,12.5);

	this.e27 = new lib.effect();
	this.e27.setTransform(198.8,193.6,0.835,0.836,0,0,0,13,13.4);

	this.e17 = new lib.effect();
	this.e17.setTransform(147.3,246.9,0.835,0.836,0,0,0,13,12.5);

	this.e22 = new lib.effect();
	this.e22.setTransform(173.4,220.6,0.835,0.836,0,0,0,13,13.4);

	this.e14 = new lib.effect();
	this.e14.setTransform(147.4,168.2,0.835,0.836,0,0,0,13,12.9);

	this.e10 = new lib.effect();
	this.e10.setTransform(121.3,220.9,0.835,0.836,0,0,0,13.1,13.2);

	this.e7 = new lib.effect();
	this.e7.setTransform(121.2,142,0.835,0.836,0,0,0,13,13.4);

	this.e13 = new lib.effect();
	this.e13.setTransform(147.3,142,0.835,0.836,0,0,0,13,13.4);

	this.e30 = new lib.effect();
	this.e30.setTransform(198.9,273.4,0.835,0.836,0,0,0,13.1,12.5);

	this.e18 = new lib.effect();
	this.e18.setTransform(147.3,273.3,0.835,0.836,0,0,0,13,12.5);

	this.e19 = new lib.effect();
	this.e19.setTransform(173.4,140.8,0.835,0.836,0,0,0,13,12.9);

	this.e21 = new lib.effect();
	this.e21.setTransform(173.4,194.9,0.835,0.836,0,0,0,13,13.2);

	this.e8 = new lib.effect();
	this.e8.setTransform(121.3,168.1,0.835,0.836,0,0,0,13.1,12.6);

	this.e6 = new lib.effect();
	this.e6.setTransform(95.5,273.4,0.835,0.836,0,0,0,13,12.5);

	this.e1 = new lib.effect();
	this.e1.setTransform(95.5,141.4,0.835,0.836,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e1},{t:this.e6},{t:this.e8},{t:this.e21},{t:this.e19},{t:this.e18},{t:this.e30},{t:this.e13},{t:this.e7},{t:this.e10},{t:this.e14},{t:this.e22},{t:this.e17},{t:this.e27},{t:this.e5},{t:this.e2},{t:this.e3},{t:this.e4},{t:this.e9},{t:this.e11},{t:this.e15},{t:this.e12},{t:this.e16},{t:this.e20},{t:this.e23},{t:this.e24},{t:this.e28},{t:this.e25},{t:this.e26},{t:this.e29},{t:this.e31},{t:this.e36},{t:this.e38},{t:this.e51},{t:this.e49},{t:this.e48},{t:this.e60},{t:this.e43},{t:this.e37},{t:this.e40},{t:this.e44},{t:this.e52},{t:this.e47},{t:this.e57},{t:this.e35},{t:this.e32},{t:this.e33},{t:this.e34},{t:this.e39},{t:this.e41},{t:this.e45},{t:this.e42},{t:this.e46},{t:this.e50},{t:this.e53},{t:this.e54},{t:this.e58},{t:this.e55},{t:this.e56},{t:this.e59},{t:this._null},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.clock},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.e61},{t:this.e66},{t:this.e68},{t:this.e81},{t:this.e79},{t:this.e78},{t:this.e90},{t:this.e73},{t:this.e67},{t:this.e70},{t:this.e74},{t:this.e82},{t:this.e77},{t:this.e87},{t:this.e65},{t:this.e62},{t:this.e63},{t:this.e64},{t:this.e69},{t:this.e71},{t:this.e75},{t:this.e72},{t:this.e76},{t:this.e80},{t:this.e83},{t:this.e84},{t:this.e88},{t:this.e85},{t:this.e86},{t:this.e89},{t:this.e91},{t:this.e96},{t:this.e98},{t:this.e111},{t:this.e109},{t:this.e108},{t:this.e120},{t:this.e103},{t:this.e97},{t:this.e100},{t:this.e104},{t:this.e112},{t:this.e107},{t:this.e117},{t:this.e95},{t:this.e92},{t:this.e93},{t:this.e94},{t:this.e99},{t:this.e101},{t:this.e105},{t:this.e102},{t:this.e106},{t:this.e110},{t:this.e113},{t:this.e114},{t:this.e118},{t:this.e115},{t:this.e116},{t:this.e119}]}).wait(1));

	// Ebene 3
	this.instance = new lib.no_effect();
	this.instance.setTransform(387.9,518.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_1 = new lib.no_effect();
	this.instance_1.setTransform(328.5,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_2 = new lib.no_effect();
	this.instance_2.setTransform(303.1,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_3 = new lib.no_effect();
	this.instance_3.setTransform(251.3,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_4 = new lib.no_effect();
	this.instance_4.setTransform(251.3,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_5 = new lib.no_effect();
	this.instance_5.setTransform(328.5,140.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_6 = new lib.no_effect();
	this.instance_6.setTransform(277,246.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_7 = new lib.no_effect();
	this.instance_7.setTransform(198.9,220.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_8 = new lib.no_effect();
	this.instance_8.setTransform(277,140.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_9 = new lib.no_effect();
	this.instance_9.setTransform(95.5,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_10 = new lib.no_effect();
	this.instance_10.setTransform(121.2,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_11 = new lib.no_effect();
	this.instance_11.setTransform(303.1,193.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_12 = new lib.no_effect();
	this.instance_12.setTransform(303.1,167.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_13 = new lib.no_effect();
	this.instance_13.setTransform(173.4,246.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_14 = new lib.no_effect();
	this.instance_14.setTransform(173.4,220.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_15 = new lib.no_effect();
	this.instance_15.setTransform(251.3,194,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_16 = new lib.no_effect();
	this.instance_16.setTransform(251.3,167.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_17 = new lib.no_effect();
	this.instance_17.setTransform(198.8,193.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_18 = new lib.no_effect();
	this.instance_18.setTransform(198.8,167.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_19 = new lib.no_effect();
	this.instance_19.setTransform(224.9,194,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_20 = new lib.no_effect();
	this.instance_20.setTransform(224.9,167.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_21 = new lib.no_effect();
	this.instance_21.setTransform(95.5,220.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_22 = new lib.no_effect();
	this.instance_22.setTransform(95.5,194,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_23 = new lib.no_effect();
	this.instance_23.setTransform(147.3,273.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_24 = new lib.no_effect();
	this.instance_24.setTransform(147.3,246.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_25 = new lib.no_effect();
	this.instance_25.setTransform(147.3,220.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_26 = new lib.no_effect();
	this.instance_26.setTransform(147.3,194,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_27 = new lib.no_effect();
	this.instance_27.setTransform(147.3,168.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_28 = new lib.no_effect();
	this.instance_28.setTransform(147.3,141.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_29 = new lib.no_effect();
	this.instance_29.setTransform(121.2,168.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_30 = new lib.no_effect();
	this.instance_30.setTransform(121.2,141.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_31 = new lib.no_effect();
	this.instance_31.setTransform(173.4,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_32 = new lib.no_effect();
	this.instance_32.setTransform(198.8,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_33 = new lib.no_effect();
	this.instance_33.setTransform(224.9,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_34 = new lib.no_effect();
	this.instance_34.setTransform(277,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_35 = new lib.no_effect();
	this.instance_35.setTransform(328.5,272.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_36 = new lib.no_effect();
	this.instance_36.setTransform(328.5,246.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_37 = new lib.no_effect();
	this.instance_37.setTransform(303.1,246.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_38 = new lib.no_effect();
	this.instance_38.setTransform(303.1,220.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_39 = new lib.no_effect();
	this.instance_39.setTransform(277,220.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_40 = new lib.no_effect();
	this.instance_40.setTransform(251.3,246.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_41 = new lib.no_effect();
	this.instance_41.setTransform(224.9,246.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_42 = new lib.no_effect();
	this.instance_42.setTransform(198.8,246.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_43 = new lib.no_effect();
	this.instance_43.setTransform(224.9,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_44 = new lib.no_effect();
	this.instance_44.setTransform(173.4,168.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_45 = new lib.no_effect();
	this.instance_45.setTransform(173.4,194.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_46 = new lib.no_effect();
	this.instance_46.setTransform(277,194,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_47 = new lib.no_effect();
	this.instance_47.setTransform(328.5,194.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_48 = new lib.no_effect();
	this.instance_48.setTransform(328.4,168.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_49 = new lib.no_effect();
	this.instance_49.setTransform(277,168,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_50 = new lib.no_effect();
	this.instance_50.setTransform(303.1,141,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_51 = new lib.no_effect();
	this.instance_51.setTransform(251.3,141,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_52 = new lib.no_effect();
	this.instance_52.setTransform(224.9,141.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_53 = new lib.no_effect();
	this.instance_53.setTransform(198.9,141,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_54 = new lib.no_effect();
	this.instance_54.setTransform(173.4,140.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_55 = new lib.no_effect();
	this.instance_55.setTransform(121.2,246.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_56 = new lib.no_effect();
	this.instance_56.setTransform(121.2,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_57 = new lib.no_effect();
	this.instance_57.setTransform(121.2,194.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_58 = new lib.no_effect();
	this.instance_58.setTransform(95.5,246.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_59 = new lib.no_effect();
	this.instance_59.setTransform(95.5,168,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_60 = new lib.no_effect();
	this.instance_60.setTransform(95.5,141.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_61 = new lib.no_effect();
	this.instance_61.setTransform(745.9,221.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_62 = new lib.no_effect();
	this.instance_62.setTransform(720.5,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_63 = new lib.no_effect();
	this.instance_63.setTransform(668.8,221.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_64 = new lib.no_effect();
	this.instance_64.setTransform(668.8,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_65 = new lib.no_effect();
	this.instance_65.setTransform(745.9,141.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_66 = new lib.no_effect();
	this.instance_66.setTransform(694.5,247.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_67 = new lib.no_effect();
	this.instance_67.setTransform(616.3,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_68 = new lib.no_effect();
	this.instance_68.setTransform(694.5,141.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_69 = new lib.no_effect();
	this.instance_69.setTransform(513,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_70 = new lib.no_effect();
	this.instance_70.setTransform(538.7,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_71 = new lib.no_effect();
	this.instance_71.setTransform(720.5,194.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_72 = new lib.no_effect();
	this.instance_72.setTransform(720.5,168.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_73 = new lib.no_effect();
	this.instance_73.setTransform(590.9,247.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_74 = new lib.no_effect();
	this.instance_74.setTransform(590.9,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_75 = new lib.no_effect();
	this.instance_75.setTransform(668.7,194.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_76 = new lib.no_effect();
	this.instance_76.setTransform(668.7,168.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_77 = new lib.no_effect();
	this.instance_77.setTransform(616.3,193.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_78 = new lib.no_effect();
	this.instance_78.setTransform(616.3,166.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_79 = new lib.no_effect();
	this.instance_79.setTransform(642.4,194.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_80 = new lib.no_effect();
	this.instance_80.setTransform(642.4,168.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_81 = new lib.no_effect();
	this.instance_81.setTransform(513,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_82 = new lib.no_effect();
	this.instance_82.setTransform(513,194.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_83 = new lib.no_effect();
	this.instance_83.setTransform(564.8,273.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_84 = new lib.no_effect();
	this.instance_84.setTransform(564.8,247.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_85 = new lib.no_effect();
	this.instance_85.setTransform(564.8,220.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_86 = new lib.no_effect();
	this.instance_86.setTransform(564.8,194.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_87 = new lib.no_effect();
	this.instance_87.setTransform(564.8,168.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_88 = new lib.no_effect();
	this.instance_88.setTransform(564.8,142.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_89 = new lib.no_effect();
	this.instance_89.setTransform(538.7,168.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_90 = new lib.no_effect();
	this.instance_90.setTransform(538.7,142.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_91 = new lib.no_effect();
	this.instance_91.setTransform(590.8,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_92 = new lib.no_effect();
	this.instance_92.setTransform(616.3,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_93 = new lib.no_effect();
	this.instance_93.setTransform(642.4,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_94 = new lib.no_effect();
	this.instance_94.setTransform(694.4,273.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_95 = new lib.no_effect();
	this.instance_95.setTransform(745.9,273.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_96 = new lib.no_effect();
	this.instance_96.setTransform(745.9,247.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_97 = new lib.no_effect();
	this.instance_97.setTransform(720.5,247.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_98 = new lib.no_effect();
	this.instance_98.setTransform(720.5,221.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_99 = new lib.no_effect();
	this.instance_99.setTransform(694.4,221.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_100 = new lib.no_effect();
	this.instance_100.setTransform(668.7,247.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_101 = new lib.no_effect();
	this.instance_101.setTransform(642.3,247.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_102 = new lib.no_effect();
	this.instance_102.setTransform(616.3,247.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_103 = new lib.no_effect();
	this.instance_103.setTransform(642.4,221.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_104 = new lib.no_effect();
	this.instance_104.setTransform(590.8,168.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_105 = new lib.no_effect();
	this.instance_105.setTransform(590.8,195.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_106 = new lib.no_effect();
	this.instance_106.setTransform(694.5,194.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_107 = new lib.no_effect();
	this.instance_107.setTransform(745.9,195.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_108 = new lib.no_effect();
	this.instance_108.setTransform(745.9,168.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_109 = new lib.no_effect();
	this.instance_109.setTransform(694.4,168.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_110 = new lib.no_effect();
	this.instance_110.setTransform(720.5,141.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_111 = new lib.no_effect();
	this.instance_111.setTransform(668.8,141.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_112 = new lib.no_effect();
	this.instance_112.setTransform(642.4,141.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_113 = new lib.no_effect();
	this.instance_113.setTransform(616.3,141.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_114 = new lib.no_effect();
	this.instance_114.setTransform(590.9,141.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_115 = new lib.no_effect();
	this.instance_115.setTransform(538.7,247.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_116 = new lib.no_effect();
	this.instance_116.setTransform(538.7,221.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_117 = new lib.no_effect();
	this.instance_117.setTransform(538.7,195.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_118 = new lib.no_effect();
	this.instance_118.setTransform(513,247.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_119 = new lib.no_effect();
	this.instance_119.setTransform(513,168.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_120 = new lib.no_effect();
	this.instance_120.setTransform(513,142.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_121 = new lib.no_effect();
	this.instance_121.setTransform(328.5,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_122 = new lib.no_effect();
	this.instance_122.setTransform(303.1,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_123 = new lib.no_effect();
	this.instance_123.setTransform(251.4,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_124 = new lib.no_effect();
	this.instance_124.setTransform(251.4,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_125 = new lib.no_effect();
	this.instance_125.setTransform(328.5,372.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_126 = new lib.no_effect();
	this.instance_126.setTransform(277.1,478.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_127 = new lib.no_effect();
	this.instance_127.setTransform(198.9,451.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_128 = new lib.no_effect();
	this.instance_128.setTransform(277.1,372.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_129 = new lib.no_effect();
	this.instance_129.setTransform(95.6,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_130 = new lib.no_effect();
	this.instance_130.setTransform(121.3,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_131 = new lib.no_effect();
	this.instance_131.setTransform(303.1,425.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_132 = new lib.no_effect();
	this.instance_132.setTransform(303.1,399.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_133 = new lib.no_effect();
	this.instance_133.setTransform(173.5,478.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_134 = new lib.no_effect();
	this.instance_134.setTransform(173.5,451.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_135 = new lib.no_effect();
	this.instance_135.setTransform(251.3,425.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_136 = new lib.no_effect();
	this.instance_136.setTransform(251.3,399.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_137 = new lib.no_effect();
	this.instance_137.setTransform(198.9,425.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_138 = new lib.no_effect();
	this.instance_138.setTransform(198.9,399,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_139 = new lib.no_effect();
	this.instance_139.setTransform(225,425.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_140 = new lib.no_effect();
	this.instance_140.setTransform(225,399.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_141 = new lib.no_effect();
	this.instance_141.setTransform(95.6,451.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_142 = new lib.no_effect();
	this.instance_142.setTransform(95.6,425.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_143 = new lib.no_effect();
	this.instance_143.setTransform(147.4,504.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_144 = new lib.no_effect();
	this.instance_144.setTransform(147.4,478.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_145 = new lib.no_effect();
	this.instance_145.setTransform(147.4,451.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_146 = new lib.no_effect();
	this.instance_146.setTransform(147.4,425.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_147 = new lib.no_effect();
	this.instance_147.setTransform(147.4,399.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_148 = new lib.no_effect();
	this.instance_148.setTransform(147.4,373.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_149 = new lib.no_effect();
	this.instance_149.setTransform(121.3,399.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_150 = new lib.no_effect();
	this.instance_150.setTransform(121.3,373.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_151 = new lib.no_effect();
	this.instance_151.setTransform(173.4,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_152 = new lib.no_effect();
	this.instance_152.setTransform(198.9,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_153 = new lib.no_effect();
	this.instance_153.setTransform(225,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_154 = new lib.no_effect();
	this.instance_154.setTransform(277,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_155 = new lib.no_effect();
	this.instance_155.setTransform(328.5,504.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_156 = new lib.no_effect();
	this.instance_156.setTransform(328.5,478.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_157 = new lib.no_effect();
	this.instance_157.setTransform(303.1,478.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_158 = new lib.no_effect();
	this.instance_158.setTransform(303.1,452.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_159 = new lib.no_effect();
	this.instance_159.setTransform(277,452.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_160 = new lib.no_effect();
	this.instance_160.setTransform(251.3,478.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_161 = new lib.no_effect();
	this.instance_161.setTransform(224.9,478.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_162 = new lib.no_effect();
	this.instance_162.setTransform(198.9,478.1,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_163 = new lib.no_effect();
	this.instance_163.setTransform(225,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_164 = new lib.no_effect();
	this.instance_164.setTransform(173.4,399.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_165 = new lib.no_effect();
	this.instance_165.setTransform(173.4,426.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_166 = new lib.no_effect();
	this.instance_166.setTransform(277.1,425.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_167 = new lib.no_effect();
	this.instance_167.setTransform(328.5,426.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_168 = new lib.no_effect();
	this.instance_168.setTransform(328.5,399.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_169 = new lib.no_effect();
	this.instance_169.setTransform(277,399.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_170 = new lib.no_effect();
	this.instance_170.setTransform(303.1,372.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_171 = new lib.no_effect();
	this.instance_171.setTransform(251.4,372.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_172 = new lib.no_effect();
	this.instance_172.setTransform(225,373.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_173 = new lib.no_effect();
	this.instance_173.setTransform(198.9,372.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_174 = new lib.no_effect();
	this.instance_174.setTransform(173.5,372.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_175 = new lib.no_effect();
	this.instance_175.setTransform(121.3,478.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_176 = new lib.no_effect();
	this.instance_176.setTransform(121.3,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_177 = new lib.no_effect();
	this.instance_177.setTransform(121.3,426.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_178 = new lib.no_effect();
	this.instance_178.setTransform(95.6,478.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_179 = new lib.no_effect();
	this.instance_179.setTransform(95.6,399.6,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_180 = new lib.no_effect();
	this.instance_180.setTransform(95.6,373.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_181 = new lib.no_effect();
	this.instance_181.setTransform(746,452.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_182 = new lib.no_effect();
	this.instance_182.setTransform(720.6,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_183 = new lib.no_effect();
	this.instance_183.setTransform(668.8,452.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_184 = new lib.no_effect();
	this.instance_184.setTransform(668.8,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_185 = new lib.no_effect();
	this.instance_185.setTransform(746,372.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_186 = new lib.no_effect();
	this.instance_186.setTransform(694.5,479,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_187 = new lib.no_effect();
	this.instance_187.setTransform(616.4,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_188 = new lib.no_effect();
	this.instance_188.setTransform(694.5,373,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_189 = new lib.no_effect();
	this.instance_189.setTransform(513,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_190 = new lib.no_effect();
	this.instance_190.setTransform(538.7,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_191 = new lib.no_effect();
	this.instance_191.setTransform(720.6,425.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_192 = new lib.no_effect();
	this.instance_192.setTransform(720.6,399.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_193 = new lib.no_effect();
	this.instance_193.setTransform(590.9,478.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_194 = new lib.no_effect();
	this.instance_194.setTransform(590.9,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_195 = new lib.no_effect();
	this.instance_195.setTransform(668.8,426.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_196 = new lib.no_effect();
	this.instance_196.setTransform(668.8,399.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_197 = new lib.no_effect();
	this.instance_197.setTransform(616.3,424.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_198 = new lib.no_effect();
	this.instance_198.setTransform(616.3,398.5,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_199 = new lib.no_effect();
	this.instance_199.setTransform(642.4,426.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_200 = new lib.no_effect();
	this.instance_200.setTransform(642.4,399.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_201 = new lib.no_effect();
	this.instance_201.setTransform(513,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_202 = new lib.no_effect();
	this.instance_202.setTransform(513,426.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_203 = new lib.no_effect();
	this.instance_203.setTransform(564.8,505.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_204 = new lib.no_effect();
	this.instance_204.setTransform(564.8,479,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_205 = new lib.no_effect();
	this.instance_205.setTransform(564.8,452.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_206 = new lib.no_effect();
	this.instance_206.setTransform(564.8,426.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_207 = new lib.no_effect();
	this.instance_207.setTransform(564.8,400.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_208 = new lib.no_effect();
	this.instance_208.setTransform(564.8,374,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_209 = new lib.no_effect();
	this.instance_209.setTransform(538.7,400.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_210 = new lib.no_effect();
	this.instance_210.setTransform(538.7,374,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_211 = new lib.no_effect();
	this.instance_211.setTransform(590.9,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_212 = new lib.no_effect();
	this.instance_212.setTransform(616.3,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_213 = new lib.no_effect();
	this.instance_213.setTransform(642.4,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_214 = new lib.no_effect();
	this.instance_214.setTransform(694.5,505.4,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_215 = new lib.no_effect();
	this.instance_215.setTransform(746,504.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_216 = new lib.no_effect();
	this.instance_216.setTransform(746,479,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_217 = new lib.no_effect();
	this.instance_217.setTransform(720.6,478.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_218 = new lib.no_effect();
	this.instance_218.setTransform(720.6,452.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_219 = new lib.no_effect();
	this.instance_219.setTransform(694.5,452.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_220 = new lib.no_effect();
	this.instance_220.setTransform(668.8,479,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_221 = new lib.no_effect();
	this.instance_221.setTransform(642.4,478.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_222 = new lib.no_effect();
	this.instance_222.setTransform(616.3,478.7,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_223 = new lib.no_effect();
	this.instance_223.setTransform(642.4,452.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_224 = new lib.no_effect();
	this.instance_224.setTransform(590.9,400.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_225 = new lib.no_effect();
	this.instance_225.setTransform(590.9,426.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_226 = new lib.no_effect();
	this.instance_226.setTransform(694.5,426.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_227 = new lib.no_effect();
	this.instance_227.setTransform(746,426.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_228 = new lib.no_effect();
	this.instance_228.setTransform(745.9,400.3,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_229 = new lib.no_effect();
	this.instance_229.setTransform(694.5,400.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_230 = new lib.no_effect();
	this.instance_230.setTransform(720.6,373.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_231 = new lib.no_effect();
	this.instance_231.setTransform(668.8,373.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_232 = new lib.no_effect();
	this.instance_232.setTransform(642.4,372.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_233 = new lib.no_effect();
	this.instance_233.setTransform(616.4,373.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_234 = new lib.no_effect();
	this.instance_234.setTransform(590.9,372.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_235 = new lib.no_effect();
	this.instance_235.setTransform(538.7,478.8,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_236 = new lib.no_effect();
	this.instance_236.setTransform(538.7,452.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_237 = new lib.no_effect();
	this.instance_237.setTransform(538.7,426.9,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_238 = new lib.no_effect();
	this.instance_238.setTransform(513,479,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_239 = new lib.no_effect();
	this.instance_239.setTransform(513,400.2,0.998,0.998,0,0,0,10.9,10.8);

	this.instance_240 = new lib.no_effect();
	this.instance_240.setTransform(513,373.9,0.998,0.998,0,0,0,10.9,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Ebene 2
	this.filling = new lib.filling();
	this.filling.setTransform(421.7,208.7,1,1,0,0,0,345.7,89.7);

	this.timeline.addTween(cjs.Tween.get(this.filling).wait(1));

	// Ebene 1
	this.pipette_empty2 = new lib.pipette_1();
	this.pipette_empty2.setTransform(456.4,203.2,1,1,0,0,0,27.1,44.5);

	this.pipette_empty = new lib.pipette_1();
	this.pipette_empty.setTransform(39.4,203.7,1,1,0,0,0,27.1,44.5);

	this.btn_reset = new lib.tubedoublered();
	this.btn_reset.setTransform(400,609.4);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2, false, new lib.tubedoublered(), 3);

	this.pipette2 = new lib.pipette();
	this.pipette2.setTransform(452.9,202.6,0.835,0.836,0,0,0,40,59.3);

	this.pipette = new lib.pipette();
	this.pipette.setTransform(35.4,202.6,0.835,0.836,0,0,0,40,59.3);

	this.btn_start = new lib.tubedoublegreen();
	this.btn_start.setTransform(400,609.4);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.tubedoublegreen(), 3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("ALN//MAq0AAAIAAb+Mgq0AAAgALMECMAqzAAAIAAb+MgqzAAAgEg2Agf/MAq0AAAIAAb+Mgq0AAAgEg2AAECMAq0AAAIAAb+Mgq0AAAg");
	this.shape_105.setTransform(421.7,323.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.btn_start},{t:this.pipette},{t:this.pipette2},{t:this.btn_reset},{t:this.pipette_empty},{t:this.pipette_empty2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(402,350.6,787.8,588.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;