function storageAvailable(t){try{var e=window[t],i="__storage_test__";return e.setItem(i,i),e.removeItem(i),!0}catch(n){return!1}}function splitNumber(t,e){var i=t.toString();e.length=0;for(var n=0,a=i.length;a>n;n++)e.push(+i.charAt(n))}!function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var TWEEN=TWEEN||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var i=t.indexOf(e);-1!==i&&t.splice(i,1)},update:function(e){if(0===t.length)return!1;var i=0;for(e=void 0!==e?e:window.performance.now();i<t.length;)t[i].update(e)?i++:t.splice(i,1);return!0}}}();TWEEN.Tween=function(t){var e=t,i={},n={},a={},s=1e3,r=0,o=!1,u=!1,h=!1,p=0,c=null,d=TWEEN.Easing.Linear.None,l=TWEEN.Interpolation.Linear,f=[],y=null,m=!1,E=null,g=null,v=null;for(var b in t)i[b]=parseFloat(t[b],10);this.to=function(t,e){return void 0!==e&&(s=e),n=t,this},this.start=function(t){TWEEN.add(this),u=!0,m=!1,c=void 0!==t?t:window.performance.now(),c+=p;for(var s in n){if(n[s]instanceof Array){if(0===n[s].length)continue;n[s]=[e[s]].concat(n[s])}void 0!==i[s]&&(i[s]=e[s],i[s]instanceof Array==!1&&(i[s]*=1),a[s]=i[s]||0)}return this},this.stop=function(){return u?(TWEEN.remove(this),u=!1,null!==v&&v.call(e),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var t=0,e=f.length;e>t;t++)f[t].stop()},this.delay=function(t){return p=t,this},this.repeat=function(t){return r=t,this},this.yoyo=function(t){return o=t,this},this.easing=function(t){return d=t,this},this.interpolation=function(t){return l=t,this},this.chain=function(){return f=arguments,this},this.onStart=function(t){return y=t,this},this.onUpdate=function(t){return E=t,this},this.onComplete=function(t){return g=t,this},this.onStop=function(t){return v=t,this},this.update=function(t){var u,v,b;if(c>t)return!0;m===!1&&(null!==y&&y.call(e),m=!0),v=(t-c)/s,v=v>1?1:v,b=d(v);for(u in n)if(void 0!==i[u]){var w=i[u]||0,S=n[u];S instanceof Array?e[u]=l(S,b):("string"==typeof S&&(S=S.startsWith("+")||S.startsWith("-")?w+parseFloat(S,10):parseFloat(S,10)),"number"==typeof S&&(e[u]=w+(S-w)*b))}if(null!==E&&E.call(e,b),1===v){if(r>0){isFinite(r)&&r--;for(u in a){if("string"==typeof n[u]&&(a[u]=a[u]+parseFloat(n[u],10)),o){var T=a[u];a[u]=n[u],n[u]=T}i[u]=a[u]}return o&&(h=!h),c=t+p,!0}null!==g&&g.call(e);for(var N=0,B=f.length;B>N;N++)f[N].start(c+s);return!1}return!0}},TWEEN.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)))},Out:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},InOut:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-TWEEN.Easing.Bounce.Out(1-t)},Out:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return.5>t?.5*TWEEN.Easing.Bounce.In(2*t):.5*TWEEN.Easing.Bounce.Out(2*t-1)+.5}}},TWEEN.Interpolation={Linear:function(t,e){var i=t.length-1,n=i*e,a=Math.floor(n),s=TWEEN.Interpolation.Utils.Linear;return 0>e?s(t[0],t[1],n):e>1?s(t[i],t[i-1],i-n):s(t[a],t[a+1>i?i:a+1],n-a)},Bezier:function(t,e){for(var i=0,n=t.length-1,a=Math.pow,s=TWEEN.Interpolation.Utils.Bernstein,r=0;n>=r;r++)i+=a(1-e,n-r)*a(e,r)*t[r]*s(n,r);return i},CatmullRom:function(t,e){var i=t.length-1,n=i*e,a=Math.floor(n),s=TWEEN.Interpolation.Utils.CatmullRom;return t[0]===t[i]?(0>e&&(a=Math.floor(n=i*(1+e))),s(t[(a-1+i)%i],t[a],t[(a+1)%i],t[(a+2)%i],n-a)):0>e?t[0]-(s(t[0],t[0],t[1],t[1],-n)-t[0]):e>1?t[i]-(s(t[i],t[i],t[i-1],t[i-1],n-i)-t[i]):s(t[a?a-1:0],t[a],t[a+1>i?i:a+1],t[a+2>i?i:a+2],n-a)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=TWEEN.Interpolation.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}}(),CatmullRom:function(t,e,i,n,a){var s=.5*(i-t),r=.5*(n-e),o=a*a,u=a*o;return(2*e-2*i+s+r)*u+(-3*e+3*i-2*s-r)*o+s*a+e}}},function(t){"function"==typeof define&&define.amd?define([],function(){return TWEEN}):"undefined"!=typeof module&&"object"==typeof exports?module.exports=TWEEN:void 0!==t&&(t.TWEEN=TWEEN)}(this);var AddToScore=pc.createScript("addToScore");AddToScore.attributes.add("bird",{type:"entity"}),AddToScore.prototype.initialize=function(){this.lastX=this.entity.getPosition().x},AddToScore.prototype.update=function(t){var e=this.app,i=this.bird.getPosition().x,n=this.entity.getPosition().x;i>=n&&this.lastX>i&&e.fire("game:addscore"),this.lastX=n},AddToScore.prototype.swap=function(t){};var Medal=pc.createScript("medal");Medal.attributes.add("blank",{type:"asset",assetType:"material",array:!1}),Medal.attributes.add("bronze",{type:"asset",assetType:"material",array:!1}),Medal.attributes.add("silver",{type:"asset",assetType:"material",array:!1}),Medal.attributes.add("gold",{type:"asset",assetType:"material",array:!1}),Medal.attributes.add("platinum",{type:"asset",assetType:"material",array:!1}),Medal.prototype.initialize=function(){var t=this.app;this.materials={},this.materials.platinum=this.platinum.resource,this.materials.gold=this.gold.resource,this.materials.silver=this.silver.resource,this.materials.bronze=this.bronze.resource,this.materials.blank=this.blank.resource,t.root.findByName("Sparkle").enabled=!1,this.entity.model.material=this.materials.blank,t.on("ui:setmedal",function(e){e>=40?this.entity.model.material=this.materials.platinum:e>=30?this.entity.model.material=this.materials.gold:e>=20?this.entity.model.material=this.materials.silver:e>=10?this.entity.model.material=this.materials.bronze:this.entity.model.material=this.materials.blank,t.root.findByName("Sparkle").enabled=e>=10},this),this.on("enable",function(){t.root.findByName("Sparkle").enabled=!1,this.entity.model.material=this.materials.blank})},Medal.prototype.update=function(t){},Medal.prototype.swap=function(t){};var Game=pc.createScript("game");Game.prototype.initialize=function(){var t=this.app;this.score=0,this.bestScore=0,storageAvailable("localStorage")&&(this.bestScore=localStorage.getItem("Flappy Bird Best Score"),null===this.bestScore&&(this.bestScore=0)),t.on("game:menu",function(){t.fire("screen:fade"),setTimeout(function(){t.root.findByName("Game").findByName("Bird").enabled=!1,t.fire("pipes:reset"),t.fire("ground:start"),t.root.findByName("Game Over Screen").enabled=!1,t.root.findByName("Menu Screen").enabled=!0},250)},this),t.on("game:getready",function(){this.score=0,t.fire("ui:score",this.score),t.fire("screen:fade"),setTimeout(function(){t.root.findByName("Menu Screen").enabled=!1,t.root.findByName("Game Screen").enabled=!0,t.root.findByName("Get Ready").model.enabled=!0,t.root.findByName("Tap").model.enabled=!0;var e=t.root.findByName("Game").findByName("Bird");e.enabled=!0,e.script.bird.reset()},250)},this),t.on("game:play",function(){t.fire("pipes:start"),t.fire("ui:fadegetready")},this),t.on("game:pause",function(){t.root.findByName("Pause Button").enabled=!1,t.root.findByName("Play Button").enabled=!0},this),t.on("game:unpause",function(){t.root.findByName("Pause Button").enabled=!0,t.root.findByName("Play Button").enabled=!1},this),t.on("game:gameover",function(){t.root.findByName("Game Screen").enabled=!1,t.root.findByName("Game Over Screen").enabled=!0,t.root.findByName("New").enabled=this.score>this.bestScore,this.bestScore=Math.max(this.score,this.bestScore),storageAvailable("localStorage")&&localStorage.setItem("Flappy Bird Best Score",this.bestScore.toString()),t.fire("pipes:stop"),t.fire("ground:stop"),t.fire("ui:fade"),t.fire("game:audio","Swoosh"),setTimeout(function(){t.fire("ui:showscoreboard",this.score),t.fire("ui:current",this.score),t.fire("ui:best",this.bestScore),t.fire("game:audio","Swoosh")}.bind(this),500),setTimeout(function(){t.fire("ui:setmedal",this.score)}.bind(this),1e3)},this),t.on("game:addscore",function(){this.score++,t.fire("game:audio","Point"),t.fire("ui:score",this.score)},this),t.on("game:share",function(){var t=screen.width/2-320,e=screen.height/2-190,i=encodeURIComponent("I scored "+this.score+" in Flappy Bird! Beat that! http://flappybird.playcanvas.com/ Powered by @playcanvas #webgl #html5"),n="https://twitter.com/intent/tweet?text="+i,a=window.open(n,"name","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=380, top="+e+", left="+t);window.focus&&a&&a.focus()},this),t.on("game:audio",function(t){this.entity.sound.play(t)},this)},Game.prototype.update=function(t){TWEEN.update()},Game.prototype.swap=function(t){};var Button=pc.createScript("button");Button.attributes.add("diplacement",{type:"number","default":.00390625}),Button.attributes.add("event",{type:"string"}),Button.prototype.initialize=function(){this.pressed=!1,this.min=new pc.Vec3,this.max=new pc.Vec3,this.mouseDownListener=function(t){this.press(t.clientX,t.clientY)}.bind(this),this.mouseUpListener=function(t){this.release()}.bind(this),this.touchStartListener=function(t){var e=t.changedTouches[0];this.press(e.clientX,e.clientY)}.bind(this),this.touchEndListener=function(t){this.release()}.bind(this),window.addEventListener("mousedown",this.mouseDownListener,!1),window.addEventListener("mouseup",this.mouseUpListener,!1),window.addEventListener("touchstart",this.touchStartListener,!1),window.addEventListener("touchend",this.touchEndListener,!1),this.on("enable",function(){window.addEventListener("mousedown",this.mouseDownListener,!1),window.addEventListener("mouseup",this.mouseUpListener,!1),window.addEventListener("touchstart",this.touchStartListener,!1),window.addEventListener("touchend",this.touchEndListener,!1)}),this.on("disable",function(){this.pressed=!1,window.removeEventListener("mousedown",this.mouseDownListener,!1),window.removeEventListener("mouseup",this.mouseUpListener,!1),window.removeEventListener("touchstart",this.touchStartListener,!1),window.removeEventListener("touchend",this.touchEndListener,!1)})},Button.prototype.checkForClick=function(t,e){var i=this.app,n=i.root.findByName("Camera"),a=this.entity.model.model.meshInstances[0].aabb;return n.camera.worldToScreen(a.getMin(),this.min),n.camera.worldToScreen(a.getMax(),this.max),t>=this.min.x&&t<=this.max.x&&e>=this.max.y&&e<=this.min.y},Button.prototype.press=function(t,e){this.checkForClick(t,e)&&(this.pressed=!0,this.entity.translate(0,-this.diplacement,0))},Button.prototype.release=function(){var t=this.app;this.pressed&&(this.pressed=!1,this.entity.translate(0,this.diplacement,0),t.fire(this.event),t.fire("game:audio","Swoosh"))},Button.prototype.update=function(t){},Button.prototype.swap=function(t){};var Sparkle=pc.createScript("sparkle");Sparkle.attributes.add("radius",{type:"number","default":1}),Sparkle.prototype.initialize=function(){var t=this.app;this.initialPos=this.entity.getLocalPosition().clone(),t.on("ui:sparkle",function(){var t=Math.random()*Math.PI*2,e=Math.cos(t)*this.radius*Math.random(),i=Math.sin(t)*this.radius*Math.random();this.entity.setLocalPosition(this.initialPos.x+e,this.initialPos.y+i,this.initialPos.z)},this)},Sparkle.prototype.update=function(t){},Sparkle.prototype.swap=function(t){};var Tween=pc.createScript("tween");Tween.attributes.add("event",{type:"string"}),Tween.attributes.add("duration",{type:"number","default":1}),Tween.attributes.add("startPos",{type:"vec3","default":[0,0,0]}),Tween.attributes.add("endPos",{type:"vec3","default":[0,0,0]}),Tween.attributes.add("startScale",{type:"vec3","default":[1,1,1]}),Tween.attributes.add("endScale",{type:"vec3","default":[1,1,1]}),Tween.attributes.add("easing",{type:"number","enum":[{Linear:0},{Quadratic:1},{Cubic:2},{Quartic:3},{Quintic:4},{Sinusoidal:5},{Exponential:6},{Circular:7},{Elastic:8},{Back:9},{Bounce:10}]}),Tween.attributes.add("inOut",{type:"number","enum":[{In:0},{Out:1},{InOut:2}]});var easingFuncs=[[TWEEN.Easing.Linear.None,TWEEN.Easing.Linear.None,TWEEN.Easing.Linear.None],[TWEEN.Easing.Quadratic.In,TWEEN.Easing.Quadratic.Out,TWEEN.Easing.Quadratic.InOut],[TWEEN.Easing.Cubic.In,TWEEN.Easing.Cubic.Out,TWEEN.Easing.Cubic.InOut],[TWEEN.Easing.Quartic.In,TWEEN.Easing.Quartic.Out,TWEEN.Easing.Quartic.InOut],[TWEEN.Easing.Quintic.In,TWEEN.Easing.Quintic.Out,TWEEN.Easing.Quintic.InOut],[TWEEN.Easing.Sinusoidal.In,TWEEN.Easing.Sinusoidal.Out,TWEEN.Easing.Sinusoidal.InOut],[TWEEN.Easing.Exponential.In,TWEEN.Easing.Exponential.Out,TWEEN.Easing.Exponential.InOut],[TWEEN.Easing.Circular.In,TWEEN.Easing.Circular.Out,TWEEN.Easing.Circular.InOut],[TWEEN.Easing.Elastic.In,TWEEN.Easing.Elastic.Out,TWEEN.Easing.Elastic.InOut],[TWEEN.Easing.Back.In,TWEEN.Easing.Back.Out,TWEEN.Easing.Back.InOut],[TWEEN.Easing.Bounce.In,TWEEN.Easing.Bounce.Out,TWEEN.Easing.Bounce.InOut]];Tween.prototype.initialize=function(){var t=this.app,e=this.entity;this.initialPos=this.entity.getPosition().clone(),this.initialScl=this.entity.getLocalScale().clone(),t.on(this.event,function(){var t={px:this.startPos.x,py:this.startPos.y,pz:this.startPos.z,sx:this.startScale.x,sy:this.startScale.y,sz:this.startScale.z},i={px:this.endPos.x,py:this.endPos.y,pz:this.endPos.z,sx:this.endScale.x,sy:this.endScale.y,sz:this.endScale.z};this.tween=new TWEEN.Tween(t).to(i,Math.floor(1e3*this.duration)).easing(easingFuncs[this.easing][this.inOut]).onUpdate(function(){e.setPosition(this.px,this.py,this.pz),e.setLocalScale(this.sx,this.sy,this.sz)}),this.tween.start()},this),this.on("enable",function(){this.entity.setPosition(this.initialPos),this.entity.setLocalScale(this.initialScl)}),this.on("attr",function(e,i,n){t.fire(this.event)})},Tween.prototype.update=function(t){},Tween.prototype.swap=function(t){};var Bird=pc.createScript("bird");Bird.attributes.add("flapVelocity",{type:"number","default":1}),Bird.attributes.add("gravity",{type:"number","default":5}),Bird.attributes.add("lowestHeight",{type:"number","default":-.25}),Bird.attributes.add("radius",{type:"number","default":.068}),Bird.prototype.initialize=function(){var t=this.app;this.velocity=0,this.state="ready",this.pipes=[],this.circle={x:0,y:0,r:0},this.rect={x:0,y:0,w:0,h:0},this.initialPos=this.entity.getPosition().clone(),this.initialRot=this.entity.getRotation().clone();var e=t.root.findByName("Pipes").findByName("Pipe 1");this.pipes.push(e.findByName("Pipe Up")),this.pipes.push(e.findByName("Pipe Down")),e=t.root.findByName("Pipes").findByName("Pipe 2"),this.pipes.push(e.findByName("Pipe Up")),this.pipes.push(e.findByName("Pipe Down")),t.on("game:pause",function(){this.state="paused"},this),t.on("game:unpause",function(){this.state="play"},this),this.flapListener=this.flap.bind(this),window.addEventListener("mousedown",this.flapListener,!1),window.addEventListener("touchstart",this.flapListener,!1),this.on("enable",function(){window.addEventListener("mousedown",this.flapListener,!1),window.addEventListener("touchstart",this.flapListener,!1),this.state="getready"}),this.on("disable",function(){window.removeEventListener("mousedown",this.flapListener,!1),window.removeEventListener("touchstart",this.flapListener,!1)})},Bird.prototype.reset=function(){var t=this.app;this.velocity=0,this.state="getready",this.entity.setPosition(this.initialPos),this.entity.setRotation(this.initialRot),t.fire("bird:flapstart")},Bird.prototype.flap=function(t){var e=this.app;t.preventDefault(),"getready"===this.state&&(e.fire("game:play"),this.state="play"),"play"===this.state&&(e.fire("game:audio","Flap"),this.velocity=this.flapVelocity)},Bird.prototype.die=function(t){var e=this.app;this.state="dead",e.fire("game:audio","Hit"),e.fire("bird:flapstop"),e.fire("game:gameover"),t&&setTimeout(function(){e.fire("game:audio","Die")},500)},Bird.prototype.circleRectangleIntersect=function(t,e){var i=Math.abs(t.x-e.x-e.w/2),n=Math.abs(t.y-e.y-e.h/2);if(i>e.w/2+t.r)return!1;if(n>e.h/2+t.r)return!1;if(i<=e.w/2)return!0;if(n<=e.h/2)return!0;var a=i-e.w/2,s=n-e.h/2;return a*a+s*s<=t.r*t.r},Bird.prototype.update=function(t){var e=this.app;"play"===this.state&&e.keyboard.wasPressed(pc.KEY_SPACE)&&this.flap();var i=this.entity.getPosition();if(("play"===this.state||"dead"===this.state)&&i.y>=this.lowestHeight){this.velocity-=this.gravity*t,this.entity.translate(0,this.velocity*t,0);var n=pc.math.clamp(this.velocity,-2,-.75);n+=1,this.entity.setLocalEulerAngles(0,0,90*n)}if("play"===this.state){i.y<this.lowestHeight&&this.die(!1),this.circle.x=i.x,this.circle.y=i.y,this.circle.r=this.radius;for(var a=0;a<this.pipes.length;a++){var s=this.pipes[a],r=s.model.model.meshInstances[0].aabb,o=r.getMin(),u=r.getMax();this.rect.x=o.x,this.rect.y=o.y,this.rect.w=u.x-o.x,this.rect.h="Pipe Down"===s.name?1e3:u.y-o.y,this.circleRectangleIntersect(this.circle,this.rect)&&this.die(!0)}}},Bird.prototype.swap=function(t){};var CameraAspect=pc.createScript("cameraAspect");CameraAspect.prototype.initialize=function(){this.currentOrthoHeight=this.entity.camera.orthoHeight},CameraAspect.prototype.update=function(t){var e=this.app.graphicsDevice.canvas,i=e.width/e.height,n=pc.math.clamp(.72/i,1,1.28);n!==this.currentOrthoHeight&&(this.entity.camera.orthoHeight=n,this.currentOrthoHeight=n)},CameraAspect.prototype.swap=function(t){};var Score=pc.createScript("score");Score.attributes.add("center",{type:"boolean","default":!1}),Score.attributes.add("name",{type:"string","default":"score"}),Score.attributes.add("zero",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("one",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("two",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("three",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("four",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("five",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("six",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("seven",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("eight",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("nine",{type:"asset",assetType:"material",array:!1}),Score.attributes.add("blank",{type:"asset",assetType:"material",array:!1}),Score.prototype.initialize=function(){var t=this.app,e=["zero","one","two","three","four","five","six","seven","eight","nine","blank"];this.materials=[];for(var i=0,n=e.length;n>i;i++){var a=this[e[i]].resource;this.materials.push(a)}var s=[];t.on("ui:"+this.name,function(t){splitNumber(t,s);for(var e=(s.length,this.entity.getChildren().length);s.length<e;)s.unshift(10);for(var i=0;e>i;i++){var n=this.entity.findByName("Digit "+i);n.model.material=this.materials[s[i]]}},this)},Score.prototype.update=function(t){},Score.prototype.swap=function(t){};var PipeHeight=pc.createScript("pipeHeight");PipeHeight.prototype.initialize=function(){var t=this.app;this.pipe1=t.root.findByName("Pipe 1"),this.pipe2=t.root.findByName("Pipe 2"),this.pipe3=t.root.findByName("Pipe 3"),this.heights=[],this.heights.push(.75*(Math.random()-.5)),this.heights.push(.75*(Math.random()-.5)),this.heights.push(.75*(Math.random()-.5)),this.setPipeHeights(),t.on("pipes:cycle",function(){this.heights.shift(),this.heights.push(.75*(Math.random()-.5)),this.setPipeHeights()},this)},PipeHeight.prototype.setPipeHeights=function(){var t;t=this.pipe1.getLocalPosition(),this.pipe1.setLocalPosition(t.x,this.heights[0],t.z),t=this.pipe2.getLocalPosition(),this.pipe2.setLocalPosition(t.x,this.heights[1],t.z),t=this.pipe3.getLocalPosition(),this.pipe3.setLocalPosition(t.x,this.heights[2],t.z)},PipeHeight.prototype.update=function(t){},PipeHeight.prototype.swap=function(t){};var Sine=pc.createScript("sine");Sine.attributes.add("amplitudeScale",{type:"number","default":1}),Sine.attributes.add("frequencyScale",{type:"number","default":1}),Sine.prototype.initialize=function(){this.timer=0},Sine.prototype.update=function(t){t*=this.frequencyScale,this.timer+=t,this.entity.setLocalPosition(0,Math.sin(this.timer)*this.amplitudeScale,0)},Sine.prototype.swap=function(t){};var Scroll=pc.createScript("scroll");Scroll.attributes.add("startEvent",{type:"string","default":"start"}),Scroll.attributes.add("stopEvent",{type:"string","default":"stop"}),Scroll.attributes.add("resetEvent",{type:"string","default":"reset"}),Scroll.attributes.add("cycleEvent",{type:"string","default":"cycle"}),Scroll.attributes.add("startX",{type:"number","default":1}),Scroll.attributes.add("endX",{type:"number","default":-1}),Scroll.attributes.add("speed",{type:"number","default":1}),Scroll.attributes.add("frozen",{type:"boolean","default":!1}),Scroll.prototype.initialize=function(){var t=this.app;this.paused=!1,this.initialPos=this.entity.getPosition().clone(),this.initialRot=this.entity.getRotation().clone(),t.on(this.resetEvent,function(){this.entity.setPosition(this.initialPos),this.entity.setRotation(this.initialRot)},this),t.on(this.startEvent,function(){this.frozen=!1},this),t.on(this.stopEvent,function(){this.frozen=!0},this),t.on("game:pause",function(){this.paused=!0},this),t.on("game:unpause",function(){this.paused=!1},this)},Scroll.prototype.update=function(t){var e=this.app;if(!this.frozen&&!this.paused){var i=this.entity.getLocalPosition();i.x<this.endX&&(this.entity.setLocalPosition(this.startX,i.y,i.z),e.fire(this.cycleEvent)),this.entity.translateLocal(this.speed,0,0)}},Scroll.prototype.swap=function(t){};var SpriteAnim=pc.createScript("spriteAnim");SpriteAnim.attributes.add("speed",{type:"number","default":1}),SpriteAnim.attributes.add("startEvent",{type:"string","default":"start"}),SpriteAnim.attributes.add("stopEvent",{type:"string","default":"stop"}),SpriteAnim.attributes.add("finishEvent",{type:"string","default":"finish"}),SpriteAnim.prototype.initialize=function(){var t=this.app;this.time=0,this.frozen=!1,this.paused=!1,this.lastFrame=0,t.on(this.startEvent,function(){this.frozen=!1},this),t.on(this.stopEvent,function(){this.frozen=!0},this),t.on("game:pause",function(){this.paused=!0},this),t.on("game:unpause",function(){this.paused=!1},this)},SpriteAnim.prototype.update=function(t){var e=this.app;if(!this.frozen&&!this.paused){this.time+=t;for(var i=this.entity.getChildren(),n=Math.floor(this.time*this.speed)%i.length,a=0;a<i.length;a++)i[a].enabled=n===a;0===n&&0===this.lastFrame&&e.fire(this.finishEvent),this.lastFrame=n}},SpriteAnim.prototype.swap=function(t){};var Fade=pc.createScript("fade");Fade.attributes.add("event",{type:"string"}),Fade.attributes.add("type",{type:"number","enum":[{In:0},{Out:1},{InOut:2}]}),Fade.attributes.add("duration",{type:"number","default":.25}),Fade.prototype.initialize=function(){var t=this.app;this.timer=0,t.on(this.event,function(){this.timer=this.duration},this)},Fade.prototype.update=function(t){if(this.timer>0){this.timer=Math.max(this.timer-t,0);var e,i=(this.duration-this.timer)/this.duration;switch(this.type){case 0:e=i;break;case 1:e=1-i;break;case 2:e=4*Math.abs((i/2+.25)%.5-.25)}var n=this.entity.model,a=n.enabled;a&&0===e?(n.enabled=!1,e=1):!a&&e>0&&(n.enabled=!0);var s=n.material;s.opacity=e,s.update()}},Fade.prototype.swap=function(t){};