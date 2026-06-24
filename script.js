const music=document.getElementById(String.fromCharCode(114,111,109,97,110,116,105,99,77,117,115,105,99));
const welcomeScreen=document.getElementById(String.fromCharCode(119,101,108,99,111,109,101,83,99,114,101,101,110));
const startBtn=document.getElementById(String.fromCharCode(115,116,97,114,116,66,116,110));
const pages=document.querySelectorAll(String.fromCharCode(46,112,97,103,101));
const prevBtn=document.getElementById(String.fromCharCode(112,114,101,118,66,116,110));
const nextBtn=document.getElementById(String.fromCharCode(110,101,120,116,66,116,110));
const togglePlay=document.getElementById(String.fromCharCode(116,111,103,103,108,101,80,108,97,121));
const bookContainer=document.getElementById(String.fromCharCode(98,111,111,107,67,111,110,116,97,105,110,101,114));
const controls=document.getElementById(String.fromCharCode(99,111,110,116,114,111,108,115));
const flowerScene=document.getElementById(String.fromCharCode(102,108,111,119,101,114,83,99,101,110,101));
const canvas=document.getElementById(String.fromCharCode(102,108,111,119,101,114,67,97,110,118,97,115));
let currentPage=0,isPlaying=false,playInterval,heartInterval;
const totalPages=pages.length;
(function createSparkles(){const c=document.getElementById(String.fromCharCode(115,112,97,114,107,108,101,67,111,110,116,97,105,110,101,114));for(let i=0;i<60;i++){const d=document.createElement(String.fromCharCode(100,105,118));d.className=String.fromCharCode(115,112,97,114,107,108,101,45,100,111,116);d.style.left=Math.random()*100+String.fromCharCode(37);d.style.top=Math.random()*100+String.fromCharCode(37);d.style.setProperty(String.fromCharCode(45,45,100,117,114),(2+Math.random()*3)+String.fromCharCode(115));d.style.setProperty(String.fromCharCode(45,45,100,101,108,97,121),(Math.random()*5)+String.fromCharCode(115));d.style.setProperty(String.fromCharCode(45,45,109,97,120,45,111,112),(0.2+Math.random()*0.5));d.style.width=(1+Math.random()*2)+String.fromCharCode(112,120);d.style.height=d.style.width;c.appendChild(d);}})();
startBtn.addEventListener(String.fromCharCode(99,108,105,99,107),()=>{welcomeScreen.classList.add(String.fromCharCode(104,105,100,101));music.play().catch(()=>{});setTimeout(()=>spawnHeartBurst(10),300);updateBook();});
function setFinalMode(isFinal){controls.classList.toggle(String.fromCharCode(104,105,100,100,101,110),isFinal);bookContainer.classList.toggle(String.fromCharCode(104,105,100,100,101,110),isFinal);flowerScene.classList.toggle(String.fromCharCode(115,104,111,119),isFinal);if(isFinal)startFlowerCanvas();}
function updateBook(){pages.forEach((page,index)=>{if(index<currentPage){page.classList.add(String.fromCharCode(102,108,105,112,112,101,100));page.style.zIndex=totalPages+index;}else{page.classList.remove(String.fromCharCode(102,108,105,112,112,101,100));page.style.zIndex=totalPages-index;}});const isFinal=currentPage===totalPages;setFinalMode(isFinal);if(isFinal){setTimeout(()=>spawnHeartBurst(18),1000);setTimeout(()=>spawnHeartBurst(12),2500);heartInterval=setInterval(()=>spawnHeartBurst(4),4500);}else{if(heartInterval){clearInterval(heartInterval);heartInterval=null;}}}
function stopAutoPlay(){isPlaying=false;togglePlay.innerText=String.fromCharCode(9654,32,65,117,116,111,32,80,108,97,121);clearInterval(playInterval);}
nextBtn.addEventListener(String.fromCharCode(99,108,105,99,107),()=>{if(currentPage<totalPages){currentPage++;if(currentPage===totalPages&&isPlaying)stopAutoPlay();updateBook();if(currentPage>0&&currentPage<totalPages)spawnHeartBurst(3);}});
prevBtn.addEventListener(String.fromCharCode(99,108,105,99,107),()=>{if(currentPage>0){currentPage--;updateBook();}});
togglePlay.addEventListener(String.fromCharCode(99,108,105,99,107),()=>{if(!isPlaying){isPlaying=true;togglePlay.innerText=String.fromCharCode(9208,32,80,97,117,115,101);playInterval=setInterval(()=>{if(currentPage<totalPages){currentPage++;updateBook();spawnHeartBurst(2);}else{stopAutoPlay();}},3000);}else{stopAutoPlay();}});
function spawnHeart(x,y,delay){const h=document.createElement(String.fromCharCode(100,105,118));h.className=String.fromCharCode(102,108,111,97,116,105,110,103,45,104,101,97,114,116);h.textContent=[String.fromCharCode(10084),String.fromCharCode(128149),String.fromCharCode(128151),String.fromCharCode(128150),String.fromCharCode(10024)][Math.floor(Math.random()*5)];h.style.left=x+String.fromCharCode(112,120);h.style.top=y+String.fromCharCode(112,120);h.style.fontSize=(14+Math.random()*20)+String.fromCharCode(112,120);const dur=2.5+Math.random()*2.5;h.style.animationDuration=dur+String.fromCharCode(115);h.style.animationDelay=(delay||0)+String.fromCharCode(115);document.body.appendChild(h);setTimeout(()=>h.remove(),(dur+(delay||0))*1000+200);}
function spawnHeartBurst(count){const w=window.innerWidth,h=window.innerHeight,cx=w/2,cy=h/2;for(let i=0;i<count;i++){const x=cx+(Math.random()-.5)*w*.6,y=cy+(Math.random()-.5)*h*.4;spawnHeart(x,y,Math.random()*.5);}}

let flowerStarted=false;
function startFlowerCanvas(){
if(flowerStarted||!canvas)return;
flowerStarted=true;
const W=canvas.width=window.innerWidth;
const H=canvas.height=window.innerHeight;
const ctx=canvas.getContext(String.fromCharCode(50,100));
let t=0;const cx=W/2;

const flowers=[
 {x:cx, maxStemH:H*0.50,stemDelay:0.0,leafDelay:1.6,bloomDelay:3.8,r:42,petals:6,type:String.fromCharCode(109,97,105,110)},
 {x:cx-115, maxStemH:H*0.36,stemDelay:0.5,leafDelay:2.0,bloomDelay:4.4,r:30,petals:6,type:String.fromCharCode(115,105,100,101)},
 {x:cx+115, maxStemH:H*0.42,stemDelay:0.3,leafDelay:1.9,bloomDelay:4.1,r:33,petals:6,type:String.fromCharCode(115,105,100,101)}
];
flowers.forEach(function(f){f.stemH=0;});

const grass=[];
for(var i=0;i<90;i++){grass.push({x:W*0.05+Math.random()*W*0.9,h:28+Math.random()*110,w:1.5+Math.random()*3,lean:(Math.random()-0.5)*0.35,delay:0.3+Math.random()*2,green:Math.random()>0.45});}
const bigLeaves=[];
for(var i=0;i<22;i++){bigLeaves.push({x:cx-80+Math.random()*160,y:H-15,angle:-Math.PI*0.5+Math.random()*Math.PI*0.35+(Math.random()>0.5?0:Math.PI*0.7),len:55+Math.random()*75,w:16+Math.random()*24,grown:0,delay:1.2+Math.random()*1.8});}
const stars=[];
for(var i=0;i<90;i++)stars.push({x:Math.random()*W,y:Math.random()*H*0.75,r:0.4+Math.random()*1.6,phase:Math.random()*Math.PI*2,speed:0.008+Math.random()*0.018});

function eo(t,d,dur){var p=Math.min(1,Math.max(0,(t-d)/(dur||1.4)));return 1-Math.pow(1-p,3);}
function eob(t,d){var p=Math.min(1,Math.max(0,(t-d)/1.3));if(p<1/2.75)return 7.5625*p*p;if(p<2/2.75){var q=p-1.5/2.75;return 7.5625*q*q+0.75;}if(p<2.5/2.75){var q=p-2.25/2.75;return 7.5625*q*q+0.9375;}var q=p-2.625/2.75;return 7.5625*q*q+0.984375;}
function drawFlower(f,bp){
if(bp<=0)return;var fx=f.x,fy=H-f.maxStemH;var n=f.petals,r=f.r*bp;
for(var i=0;i<n;i++){
var ang=-Math.PI/2+(i/n)*Math.PI*2;var px=fx+Math.cos(ang)*r*0.62;var py=fy+Math.sin(ang)*r*0.62;
var gr=ctx.createRadialGradient(px,py,0,px,py,r);
var c0=String.fromCharCode(109,97,105,110);
if(f.type===c0){gr.addColorStop(0,String.fromCharCode(114,103,98,97,40,50,50,48,44,50,52,56,44,50,53,53,44)+bp+String.fromCharCode(41));gr.addColorStop(0.5,String.fromCharCode(114,103,98,97,40,49,52,48,44,50,50,53,44,50,52,53,44)+bp+String.fromCharCode(41));gr.addColorStop(1,String.fromCharCode(114,103,98,97,40,55,48,44,49,56,53,44,50,49,53,44)+(bp*0.4)+String.fromCharCode(41));}
else{gr.addColorStop(0,String.fromCharCode(114,103,98,97,40,50,48,48,44,50,52,50,44,50,53,53,44)+bp+String.fromCharCode(41));gr.addColorStop(0.5,String.fromCharCode(114,103,98,97,40,49,49,48,44,50,48,56,44,50,51,53,44)+bp+String.fromCharCode(41));gr.addColorStop(1,String.fromCharCode(114,103,98,97,40,53,53,44,49,54,53,44,50,48,53,44)+(bp*0.4)+String.fromCharCode(41));}
ctx.beginPath();ctx.ellipse(px,py,r*0.52,r*1.08,ang+Math.PI/2,0,Math.PI*2);
ctx.fillStyle=gr;ctx.shadowColor=String.fromCharCode(114,103,98,97,40,49,50,48,44,50,51,48,44,50,53,48,44,48,46,54,41);ctx.shadowBlur=14*bp;ctx.fill();ctx.shadowBlur=0;
}
var cg=ctx.createRadialGradient(fx,fy,0,fx,fy,r*0.42);
cg.addColorStop(0,String.fromCharCode(114,103,98,97,40,50,53,53,44,50,53,53,44,50,53,53,44)+bp+String.fromCharCode(41));cg.addColorStop(0.35,String.fromCharCode(114,103,98,97,40,50,49,48,44,50,52,56,44,50,53,53,44)+bp+String.fromCharCode(41));cg.addColorStop(1,String.fromCharCode(114,103,98,97,40,49,52,48,44,50,50,53,44,50,52,53,44)+(bp*0.6)+String.fromCharCode(41));
ctx.beginPath();ctx.arc(fx,fy,r*0.42,0,Math.PI*2);ctx.fillStyle=cg;ctx.shadowColor=String.fromCharCode(114,103,98,97,40,50,50,48,44,50,53,48,44,50,53,53,44,49,41);ctx.shadowBlur=25*bp;ctx.fill();ctx.shadowBlur=0;
}
function drawGround(t){
var gy=H-5;ctx.beginPath();ctx.moveTo(0,gy);
for(var x=0;x<=W;x+=2){var wv=Math.sin(x*0.02+t*0.3)*3+Math.sin(x*0.05+t*0.5)*1.5;ctx.lineTo(x,gy+wv);}
ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();
var gd=ctx.createLinearGradient(0,gy,0,H);gd.addColorStop(0,"rgba(30,80,50,0.9)");gd.addColorStop(1,"rgba(15,50,30,0.95)");ctx.fillStyle=gd;ctx.fill();
}
function drawGrass(g,t){
var gp=Math.min(1,Math.max(0,(t-g.delay)/1.5));if(gp<=0)return;
var gh=g.h*gp;var sway=Math.sin(t*1.5+g.x*0.02)*4;
ctx.beginPath();ctx.moveTo(g.x,H-5);var tx=g.x+sway+g.lean*gh;var ty=H-5-gh;
ctx.quadraticCurveTo(g.x+sway*0.5+g.lean*gh*0.5,H-5-gh*0.7,tx,ty);
ctx.lineWidth=g.w;ctx.strokeStyle=g.green?"rgba(50,160,70,0.8)":"rgba(70,180,90,0.7)";ctx.lineCap="round";ctx.stroke();
}
function drawBigLeaf(l,t){
var lp=Math.min(1,Math.max(0,(t-l.delay)/1.5));l.grown=lp;if(lp<=0)return;
var ll=l.len*lp;var lw=l.w*lp;
ctx.save();ctx.translate(l.x,l.y);ctx.rotate(l.angle);
ctx.beginPath();ctx.ellipse(ll*0.5,0,ll*0.5,lw*0.5,0,0,Math.PI*2);
ctx.fillStyle="rgba(40,130,60,0.7)";ctx.fill();
ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(ll,0);
ctx.strokeStyle="rgba(30,100,50,0.5)";ctx.lineWidth=1.5;ctx.stroke();ctx.restore();
}
function drawStem(f){
if(f.stemH<=0)return;
ctx.beginPath();ctx.moveTo(f.x,H-5);var ty=H-5-f.stemH;var sway=Math.sin(f.x*0.01)*3;
ctx.quadraticCurveTo(f.x+sway*0.5,(H-5+ty)*0.5,f.x+sway,ty);
ctx.lineWidth=3.5;ctx.strokeStyle="rgba(40,130,70,0.9)";ctx.lineCap="round";ctx.stroke();
}
function drawLeafPair(f,lp){
if(lp<=0)return;
var sm=H-5-f.stemH*0.55;var sway=Math.sin(f.x*0.01)*3;var lr=18*lp;
for(var s=-1;s<=1;s+=2){
ctx.save();ctx.translate(f.x+sway*0.5,sm);ctx.rotate(s*(0.4+lp*0.3));
ctx.beginPath();ctx.ellipse(lr*0.5,0,lr*0.5,7*lp,0,0,Math.PI*2);
ctx.fillStyle="rgba(50,160,80,0.8)";ctx.fill();ctx.restore();
}
}
function render(){
t+=0.016;ctx.clearRect(0,0,W,H);
stars.forEach(function(s){var al=0.3+0.4*Math.sin(s.phase+t*s.speed*60);ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=String.fromCharCode(114,103,98,97,40,50,49,48,44,50,52,48,44,50,53,53,44)+al+String.fromCharCode(41);ctx.fill();});
drawGround(t);
grass.forEach(function(g){drawGrass(g,t);});
bigLeaves.forEach(function(l){drawBigLeaf(l,t);});
flowers.forEach(function(f){
var sp=eo(t,f.stemDelay,2.2);f.stemH=f.maxStemH*sp;drawStem(f);
if(sp>0.28)drawLeafPair(f,eo(t,f.leafDelay,1.2));
if(sp>0.88){var bp=eob(t,f.bloomDelay);drawFlower(f,bp);}
});
requestAnimationFrame(render);
}
render();
}
