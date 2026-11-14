// Unified Scene Modules (Exact Port from rag-scene-1..8.html + alifpustaka-logo-reveal.html)
// Only adjusted for unified Dark Tech background (#0e1626) contrast

function drawThemeBg(c, W, H) {
  c.fillStyle = '#0e1626';
  c.fillRect(-20, -20, W + 40, H + 40);
  c.fillStyle = '#13203a';
  c.beginPath(); c.arc(920, 220, 260, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(160, 1680, 320, 0, Math.PI * 2); c.fill();
}

// ============================================================================
// SCENE 1 (Exact port from rag-scene-1.html)
// ============================================================================
function createScene1() {
  const W=1080,H=1920,K={ink:'#172235',dk:'#0E1727',iv:'#F6F5EE',cob:'#4667FF',teal:'#16B99A',cor:'#FF765E',amb:'#FFC65C',per:'#A3A5F4',sl:'#73819A'};
  let c;const FB='"Bricolage Grotesque"',FM='"JetBrains Mono"';
  const rr=(x,y,w,h,r,f,s,lw=6)=>{c.beginPath();c.roundRect(x,y,w,h,r);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw;c.stroke()}};
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,7);c.fillStyle=f;c.fill()};
  const tx=(s,x,y,z,col,m,al='center')=>{c.font=(m?'700 ':'800 ')+z+'px '+(m?FM:FB);c.fillStyle=col;c.textAlign=al;c.fillText(s,x,y)};
  const ln=(p,col,lw=6)=>{c.beginPath();p.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.strokeStyle=col;c.lineWidth=lw;c.lineCap='round';c.lineJoin='round';c.stroke()};
  const arc=(x,y,r,a,b,col,lw)=>{c.beginPath();c.arc(x,y,r,a,b);c.strokeStyle=col;c.lineWidth=lw;c.lineCap='round';c.stroke()};
  const bg=()=>drawThemeBg(c,W,H);
  function man(x,y,col,mood,hat,s,bot){c.save();c.translate(x,y);c.scale(s,s);rr(-22,-34,16,34,6,K.sl);rr(6,-34,16,34,6,K.sl);rr(-36,-130,72,100,28,col);
   if(bot){rr(40,-112,20,48,8,K.teal);rr(44,-120,12,10,4,K.iv)}
   ci(0,-166,34,'#F2C9A0');ci(-12,-168,4,K.ink);ci(12,-168,4,K.ink);
   if(mood){ln([[-22,-184],[-6,-176]],K.ink,5);ln([[22,-184],[6,-176]],K.ink,5);ln([[-9,-146],[9,-150]],K.ink,5)}else arc(0,-156,10,.3,2.8,K.ink,4);
   if(hat){rr(-26,-232,52,50,16,'#fff');rr(-36,-204,72,24,10,'#fff')}c.restore()}
  function pdf(x,y,s){c.save();c.translate(x,y);c.scale(s,s);rr(0,0,300,380,26,'#fff',K.sl,5);c.beginPath();c.moveTo(220,0);c.lineTo(300,80);c.lineTo(220,80);c.closePath();c.fillStyle='#E8E7DC';c.fill();
   rr(30,110,110,50,14,K.cor);tx('PDF',85,147,36,'#fff');for(let i=0;i<5;i++)rr(30,200+i*30,i%2?190:240,12,6,'#E8E7DC');c.restore()}
  function cap(){}
  function awning(y){for(let i=0;i<8;i++)rr(140+i*100,y,100,60,[0,0,22,22],i%2?K.iv:K.cor)}
  function counter(y,empty){rr(180,y,720,130,26,K.cob);rr(200,y+20,680,14,7,'#6B84FF');if(!empty){rr(660,y-60,160,64,14,K.sl);rr(680,y-48,50,20,6,K.teal)}}
  function queue(y,mood,n=5,bot){for(let i=0;i<n;i++)man(230+i*155,y,[K.per,K.amb,K.teal,K.cor,K.per][i],mood,0,.9,bot)}
  const S=[
  // 1 hook
  ()=>{bg(K.ink);c.save();c.translate(43,36);c.scale(.92,.92);
   tx('Unggah PDF 150 Halaman',540,130,70,K.iv);tx('Bikin Web Timeout?!',540,215,70,K.amb);
   rr(130,270,820,560,40,K.iv);rr(130,270,820,80,[40,40,0,0],'#E8E7DC');[0,1,2].forEach(i=>ci(190+i*40,310,10,[K.cor,K.amb,K.teal][i]));
   pdf(330,390,.95);rr(330,780,200,16,8,K.cob);arc(790,610,50,0,4.6,K.cob,14);tx('mengunggah…',790,720,28,K.sl,1);
   c.setLineDash([16,16]);ln([[100,890],[980,890]],K.sl,4);c.setLineDash([]);
   awning(930);tx('KASIR',540,1030,40,K.amb);counter(1110);man(540,1130,K.teal,0,0,1);queue(1500,0,5);tx('ANALOGI: restoran cepat saji',540,1560,30,K.sl,1);c.restore()},
  // 2 mechanism (adjusted K.ink on bg -> K.iv / K.dk)
  ()=>{bg(K.iv);c.save();c.translate(43,36);c.scale(.92,.92);
   tx('Satu PDF = rantai kerja berat',540,120,58,K.iv);pdf(390,170,.55);tx('1  bongkar biner PDF',540,420,30,K.sl,1);
   ln([[540,440],[540,490]],K.iv);
   for(let r=0;r<5;r++)for(let k=0;k<12;k++)rr(160+k*66,520+r*50,52,36,10,(r*12+k)%7==0?K.amb:K.teal);
   tx('2  potong → 300 bagian teks',540,820,30,K.sl,1);
   for(let i=0;i<5;i++)ln([[200+i*170,860],[540,950]],K.cob,5);
   rr(290,950,500,230,60,K.cob);ci(420,950,70,K.cob);ci(660,940,90,K.cob);tx('MODEL AI',540,1085,52,K.iv);tx('embedding',540,1130,26,K.per,1);
   ln([[540,1190],[540,1250]],K.iv);rr(120,1260,840,70,35,K.dk,K.sl,4);tx('[0.12, −0.80, 0.43 …]',540,1306,32,K.amb,1);
   rr(280,1370,520,76,38,K.cor);tx('300× panggilan jaringan',540,1422,34,'#fff');c.restore();cap('lakukan 300 kali','panggilan jaringan',0,'#E8543B')},
  // 3 timer (adjusted K.ink on bg -> K.iv / K.per)
  ()=>{bg(K.per);c.save();c.translate(43,36);c.scale(.92,.92);
   tx('Berapa lama prosesnya?',540,130,62,K.iv);arc(540,640,300,0,6.283,'#1d2b45',70);arc(540,640,300,-1.57,3.6,K.cor,70);arc(540,640,300,3.6,4.5,K.amb,70);
   tx('45–90',540,690,190,K.iv);tx('detik',540,780,64,K.per);rr(500,300,80,26,13,K.iv);
   [[K.cob,.28,'bongkar'],[K.teal,.14,'potong'],[K.cor,.46,'300× embed'],[K.per,.12,'simpan']].reduce((x,s)=>{rr(x,1100,880*s[1]-6,70,22,s[0]);tx(s[2],x+(880*s[1])/2,1215,24,K.iv,1);return x+880*s[1]},100);
   tx('rantai berurutan, satu per satu',540,1320,34,K.sl,1);c.restore();cap('memakan waktu','45 sampai 90 detik',0,'#2A3FD0')},
  // 4 sync route vs cashier
  ()=>{bg(K.ink);c.save();c.translate(43,36);c.scale(.92,.92);
   rr(90,60,900,500,36,K.dk);tx('POST /upload · Express.js',130,125,30,K.amb,1,'left');
   [['app.post("/upload", async',0],['  (req, res) => {',0],['  await extractPDF(file);',1],['  await embedAll(chunks);',1],['  res.send("ok");',0],['});',0]].forEach((l,i)=>{if(l[1])rr(110,175+i*58,780,50,12,'rgba(255,118,94,.22)');tx(l[0],130,212+i*58,31,l[1]?K.cor:K.iv,1,'left')});
   rr(240,520,600,56,28,K.cor);tx('SELURUH PROSES DI RUTE HTTP',540,558,24,'#fff',1);
   rr(90,680,260,520,30,'#1d2b45');rr(120,720,200,360,22,K.sl);tx('DAPUR',220,1150,36,K.amb);ci(220,900,50,K.amb);
   man(430,1190,K.teal,0,1,1);[0,1,2].forEach(i=>ln([[500+i*50,1100],[530+i*50,1100]],K.amb,6));
   for(let i=0;i<5;i++)rr(380+i*100,680,100,50,[0,0,18,18],i%2?K.iv:K.cor);counter(1000,1);rr(560,1100,330,0,0);
   tx('KASIR KOSONG',720,860,36,K.cor);ci(830,1120,0,K.amb);
   ci(840,760,0,K.amb);rr(660,1100,0,0,0);c.restore();
   c.save();c.translate(43,36);c.scale(.92,.92);ci(850,1080,0,K.amb);c.restore();
   c.save();c.translate(43,36);c.scale(.92,.92);queue(1480,0,5,1);ci(870,580,0,K.amb);c.restore();
   c.save();c.translate(43,36);c.scale(.92,.92);ci(540,1330,0,K.amb);c.restore();
   c.save();c.translate(780,900);ci(0,0,86,K.amb);ci(0,0,70,K.iv);ln([[0,0],[0,-48]],K.ink,8);ln([[0,0],[38,16]],K.ink,8);c.restore();
   tx('1 JAM',823,1040,44,K.amb,0);cap('kasir ikut memasak','di dapur',1,K.amb)},
  // 5 504
  ()=>{bg(K.dk);c.save();c.translate(43,36);c.scale(.92,.92);
   rr(110,110,860,700,40,K.cor);rr(110,110,860,80,[40,40,0,0],'#E8543B');[0,1,2].forEach(i=>ci(170+i*40,150,10,K.iv));
   tx('504',540,500,300,K.iv);tx('Gateway Timeout',540,610,76,K.ink);tx('nginx / cloudflare',540,720,34,K.iv,1);
   ln([[620,300],[700,390],[650,450],[740,560]],K.ink,7);[[860,260],[900,330],[220,280]].forEach((p,i)=>arc(p[0],p[1],26,i,i+2.4,K.amb,10));
   tx('koneksi peramban putus',540,880,40,K.amb);
   awning(940);tx('KASIR KOSONG',540,1040,38,K.cor);rr(140,1090,800,26,13,K.cob);
   queue(1480,1,5,1);rr(520,1220,330,90,30,K.iv);tx('cuma mau air minum!',685,1276,26,K.ink);c.restore();cap('koneksi putus','gateway timeout',1,K.cor)},
  // 6 event loop lock (adjusted K.ink on bg -> K.iv / K.dk)
  ()=>{bg(K.iv);c.save();c.translate(43,36);c.scale(.92,.92);
   tx('Event loop Node.js terkunci',540,120,58,K.iv);
   for(let i=0;i<4;i++)arc(540,540,230,i*1.57+.15,i*1.57+1.35,i?K.sl:K.cor,40);
   rr(450,500,180,140,30,'#1d2b45',K.iv,5);arc(540,500,50,Math.PI,0,K.iv,26);ci(540,568,18,K.amb);rr(532,574,16,36,6,K.amb);
   tx('1 thread · satu pekerjaan berat',540,860,30,K.sl,1);
   for(let i=0;i<4;i++){const x=120+i*215;rr(x,930,170,300,34,'#1d2b45',K.sl,4);rr(x+16,950,138,230,18,K.dk);rr(x+20,990,130,60,20,K.per);tx('…',x+85,1032,40,K.ink);ci(x+85,1120,30,K.cor);ln([[x+72,1107],[x+98,1133]],'#fff',6);ln([[x+98,1107],[x+72,1133]],'#fff',6)}
   tx('chatbot ikut lumpuh',540,1310,44,K.iv);rr(100,1370,880,120,36,K.amb);tx('Jangan proses PDF di rute HTTP!',540,1445,46,K.ink);c.restore();cap('event loop','terkunci rapat',0,'#E8543B')}];

  const DUR=49.17158,B=[0,8,21,26,38.2,43.2,DUR],TR=.55;
  const CUES=[[.6,1.35,'Bayangkan,'],[1.75,7.45,'seorang pengguna baru saja mengunggah laporan PDF setebal 150 halaman ke aplikasi RAG kita.'],[8.5,10.75,'Untuk memproses satu berkas itu saja,'],[10.85,13.2,'server harus membongkar struktur biner PDF,'],[13.35,15.55,'memotongnya menjadi 300 bagian teks,'],[15.8,20.5,'lalu melakukan 300 kali panggilan jaringan ke model AI untuk membuat vektor.'],[21.5,25.4,'Proses berantai ini memakan waktu 45 sampai 90 detik.'],[26.4,31.25,'Kalau kamu menaruh seluruh proses berat ini langsung di dalam rute HTTP POST Express.js,'],[31.6,37.4,'itu ibarat kasir restoran cepat saji yang meninggalkan mejanya selama satu jam untuk ikut memasak di dapur.'],[38.25,39.1,'Akibatnya,'],[39.3,43,'koneksi peramban pelanggan pertama akan putus karena gateway timeout,'],[43.3,48.8,'dan seluruh pengguna lain yang cuma mau bertanya ke chatbot ikut lumpuh total karena event loop Node.js terkunci rapat.']];
  const CH=[];CUES.forEach((q)=>{const w=q[2].split(' '),n=Math.ceil(w.length/5),L=[];for(let i=0;i<n;i++)L.push(w.slice(Math.round(i*w.length/n),Math.round((i+1)*w.length/n)).join(' '));const tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const PAL=[['#F6F5EE','#FFC65C'],['#F6F5EE','#FF765E'],['#F6F5EE','#A3A5F4'],['#F6F5EE','#FFC65C'],['#F6F5EE','#FF765E'],['#F6F5EE','#FF765E']],HI=/\d|PDF|RAG|AI|HTTP|POST|Express|gateway|timeout|event|loop|Node|chatbot|vektor|kasir|dapur/i;
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a)),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2);
  const pw=(u,P)=>{if(u<=P[0][0])return P[0][1];for(let i=1;i<P.length;i++)if(u<=P[i][0])return P[i-1][1]+(P[i][1]-P[i-1][1])*(u-P[i-1][0])/(P[i][0]-P[i-1][0]);return P[P.length-1][1]};
  let SUB=true;
  function kcap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+FB;
   const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}
    c.translate(dx,dy);c.font='800 '+z+'px '+FB;c.fillStyle=HI.test(w)?pf:bc;c.textAlign='left';c.fillText(w,x,y);c.restore();x+=ww+gap*s});
   rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}
  const cov=(col,p)=>{c.fillStyle='#0e1626';c.fillRect(-120,1560*p,1400,2400)};
  const OV=[
  (u)=>{ci(790,610,66,K.iv);const a=u*7;arc(790,610,50,a,a+4.2,K.cob,14);rr(330,780,200,16,8,K.iv);rr(330,780,200*seg(u,.6,7),16,8,K.cob)},
  (u)=>cov(K.iv,pw(u,[[.3,0],[2.7,.3],[7.5,.55],[12.5,1.02]])),
  (u)=>{const p=eio(seg(u,.5,4.4));arc(540,640,300,0,6.4,'#1d2b45',76);arc(540,640,300,-1.57,-1.57+5.2*p,K.cor,70);if(p>.8)arc(540,640,300,3.6,3.6+.9*seg(p,.8,1),K.amb,70);cov(K.per,pw(u,[[0,0],[.5,.14],[1.5,.2]]));rr(90,1090,900,100,0,'#0e1626');[[K.cob,.28],[K.teal,.14],[K.cor,.46],[K.per,.12]].reduce((x,s,i)=>{const w=880*s[1]-6;rr(x,1100,w*seg(u,.8+i*.9,1.5+i*.9),70,22,s[0]);return x+880*s[1]},100)},
  (u)=>cov(K.ink,pw(u,[[.3,0],[1,.05],[5.3,.38],[5.6,.4],[11.4,1.02]])),
  (u)=>{for(let i=0;i<7;i++){const a=i*.9,d=eo(cl(u/1.2))*500;arc(540+Math.cos(a)*d,450+Math.sin(a)*d*.7,24,i,i+2,K.amb,10)}if(u<.12)c.fillStyle='rgba(255,255,255,.5)',c.fillRect(-100,-100,1300,2000)},
  (u)=>{const r=1-eo(seg(u,1.5,4.2)),a0=u*3*r*r;arc(540,540,230,0,6.4,'#0e1626',64);for(let i=0;i<4;i++)arc(540,540,230,a0+i*1.57+.15,a0+i*1.57+1.35,i?K.sl:K.cor,40);rr(450,500,180,140,30,'#1d2b45',K.iv,5);arc(540,500,50,Math.PI,0,K.iv,26);ci(540,568,18,K.amb);rr(532,574,16,36,6,K.amb);cov(K.iv,pw(u,[[0,.1],[.6,.2],[5.6,1.02]]))}];
  const RAW=[null,null,null,(u)=>{ci(780,900,92,'#0e1626');const p=ebo(seg(u,6,6.6));if(p>0){c.save();c.translate(780,900);c.scale(p,p);ci(0,0,86,K.amb);ci(0,0,70,K.iv);const a=(u-6)*3-1.57;ln([[0,0],[48*Math.cos(a),48*Math.sin(a)]],K.ink,8);ln([[0,0],[28*Math.cos(a*.1-1.57),28*Math.sin(a*.1-1.57)]],K.ink,8);c.restore()}},null,null];
  function drawS(i,t){const u=t-B[i],d=B[i+1]-B[i];c.save();let dx=0;if(i==4)dx=Math.sin(u*80)*22*Math.exp(-u*6);const z=1+.05*Math.sin(Math.PI*cl(u/d));c.translate(540+dx,900);c.scale(z,z);c.translate(-540,-900);
   S[i]();c.save();c.translate(43,36);c.scale(.92,.92);OV[i](u);c.restore();if(RAW[i])RAW[i](u);c.restore();kcap(t,i)}
  function pth(i,p){c.beginPath();if(i%2)c.arc(540,1000,p*1750,0,7);else{c.moveTo(-40,H+60);for(let x=-40;x<=W+40;x+=20)c.lineTo(x,H-(H+120)*p+Math.sin(x/90+p*9)*44*Math.sin(Math.PI*p));c.lineTo(W+40,H+60);c.closePath()}}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,DUR);let i=0;while(i<5&&t>=B[i+1])i++;const u=t-B[i];
   if(i>0&&u<TR){const p=eo(u/TR);drawS(i-1,t);c.save();pth(i,p);c.clip();drawS(i,t);c.restore();pth(i,p);c.strokeStyle=K.amb;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.stroke()}else drawS(i,t)}

  const SF=[[.6,'boop'],[3,'blip'],[5.6,'pop'],[7.95,'whoosh'],[9,'tap'],[11,'snap'],[13.4,'zip'],[15.9,'tap'],[17.6,'blip'],[19.4,'ding',1.2],[20.6,'rise'],[21.1,'whoosh'],[22,'thud'],[24.3,'tick'],[25.95,'whoosh'],[27,'click'],[28.6,'click'],[30,'click'],[31.7,'slide'],[34,'zip'],[37.6,'rise'],[38.2,'whoosh'],[38.3,'thud'],[38.45,'glitch'],[39.5,'err'],[42.6,'rise'],[43.2,'whoosh'],[43.4,'whomp'],[45.5,'err'],[47.4,'stamp'],[48.3,'sparkle'],[48.4,'chime']];
  CH.forEach((q,i)=>SF.push([q[0]+.02,['tap','blip','zip','tap','snap','blip'][i%6],.55+(i%3)*.12,1]));[[1.8,'zip',.8],[7,'ding',1],[8.4,'pop'],[16,'zip'],[18,'sparkle'],[20.3,'pop'],[21.5,'rise'],[21.8,'snap'],[22.7,'snap'],[23.6,'snap'],[24.5,'snap'],[32,'pop'],[36,'err'],[40.4,'glitch'],[41.9,'pop'],[44.3,'slide'],[46.4,'glitch'],[46.8,'glitch'],[47.2,'err'],[48.2,'sparkle']].forEach(e=>SF.push(e));for(let t=10.9;t<15.4;t+=.5)SF.push([t,'tap',1.4,1]);for(let t=21.6;t<25.4;t+=.5)SF.push([t,'click',1]);for(let t=33;t<37;t+=.5)SF.push([t,'tick',1]);SF.sort((a,b)=>a[0]-b[0]);

  function scheduleSfx(ctx,out,from,now){
    const sb=ctx.createGain();sb.gain.value=.42;sb.connect(out);
    const nbuf=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),nd=nbuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
    SF.forEach(([t,k,a,q])=>{if(t<from||t>DUR)return;const at=now+t-from,m=a||1,vg=q?.55:1;
     const osc=(ty,f0,f1,d,v,dl=0)=>{const o=ctx.createOscillator(),e=ctx.createGain();o.type=ty;o.frequency.setValueAtTime(f0,at+dl);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),at+dl+d);e.gain.setValueAtTime(v*vg,at+dl);e.gain.exponentialRampToValueAtTime(.001,at+dl+d);o.connect(e);e.connect(sb);o.start(at+dl);o.stop(at+dl+d+.03)};
     const nz=(f0,f1,d,v,Q)=>{const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),e=ctx.createGain();s.buffer=nbuf;s.loop=true;f.type='bandpass';f.Q.value=Q;f.frequency.setValueAtTime(f0,at);f.frequency.exponentialRampToValueAtTime(f1,at+d);e.gain.setValueAtTime(v*vg,at);e.gain.exponentialRampToValueAtTime(.001,at+d);s.connect(f);f.connect(e);e.connect(sb);s.start(at);s.stop(at+d+.03)};
     ({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.1),click:()=>osc('square',1800,1800,.05,.16),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,.8,.4,2),err:()=>{osc('sawtooth',110,110,.4,.12);osc('sawtooth',117,117,.4,.12)},chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),
     boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},whomp:()=>osc('sine',90,45,.5,.9),slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()});
  }
  return { DUR, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 2 (Exact port from rag-scene-2.html)
// ============================================================================
function createScene2() {
  const W=1080,H=1920,DUR=38.32083,B=[0,7.6,16.5,26.2,35.0];
  const K={ink:'#172235',i2:'#1d2b45',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A'};
  const FB='"Bricolage Grotesque",system-ui,sans-serif',FM='"JetBrains Mono",ui-monospace,monospace';
  let c,SUB=true;
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a));
  const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2);
  const rr=(x,y,w,h,r,f,s,lw)=>{c.beginPath();c.roundRect(x,y,w,h,r);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.stroke()}};
  const tx=(s,x,y,z,col,w,al,f,mw)=>{c.font=(w||800)+' '+z+'px '+(f||FB);c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='alphabetic';mw?c.fillText(s,x,y,mw):c.fillText(s,x,y)};
  const ci=(x,y,r,f,s,lw)=>{c.beginPath();c.arc(x,y,r,0,7);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.stroke()}};
  const ln=(a,b,x,y,col,lw,d)=>{c.beginPath();c.moveTo(a,b);c.lineTo(x,y);c.strokeStyle=col;c.lineWidth=lw||6;c.lineCap='round';c.setLineDash(d||[]);c.stroke();c.setLineDash([])};
  const ar=(x1,y1,x2,y2,col,lw)=>{ln(x1,y1,x2,y2,col,lw||8);const a=Math.atan2(y2-y1,x2-x1);c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-28*Math.cos(a-.5),y2-28*Math.sin(a-.5));c.lineTo(x2-28*Math.cos(a+.5),y2-28*Math.sin(a+.5));c.closePath();c.fillStyle=col;c.fill()};
  const cyl=(x,y,w,h,col,top)=>{const e=h*.14,m=x+w/2;c.fillStyle=col;c.beginPath();c.ellipse(m,y+h-e,w/2,e,0,0,7);c.fill();c.fillRect(x,y+e,w,h-2*e);c.fillStyle=top;c.beginPath();c.ellipse(m,y+e,w/2,e,0,0,7);c.fill()};
  const doc=(x,y,w,h,col,lab,lc)=>{const f=w*.28;c.beginPath();c.moveTo(x,y);c.lineTo(x+w-f,y);c.lineTo(x+w,y+f);c.lineTo(x+w,y+h);c.lineTo(x,y+h);c.closePath();c.fillStyle=col;c.fill();c.beginPath();c.moveTo(x+w-f,y);c.lineTo(x+w-f,y+f);c.lineTo(x+w,y+f);c.closePath();c.fillStyle='rgba(23,34,53,.22)';c.fill();tx(lab,x+w/2,y+h*.78,w*.27,lc,800,'center')};
  const pp=(x,y,s,col,hd)=>{ci(x,y,24*s,hd);rr(x-38*s,y+34*s,76*s,70*s,[34*s,34*s,0,0],col)};
  const tk=(x,y,w,h,col,lab,lc,z)=>{rr(x,y,w,h,14,col);ln(x+w*.72,y+10,x+w*.72,y+h-10,'rgba(23,34,53,.35)',3,[6,8]);tx(lab,x+w*.36,y+h*.64,z||h*.4,lc||K.ink,800,'center')};
  const star=(x,y,r,f)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fillStyle=f;c.fill()};
  const bg=()=>drawThemeBg(c,W,H);
  const T=fn=>{c.save();c.translate(43,36);c.scale(.92,.92);fn();c.restore()};
  function pop(cx,cy,p,fn){if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(p);c.scale(s,s);c.translate(-cx,-cy);fn();c.restore()}
  function A(a,fn){if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()}
  function SL(dy,p,fn){if(p<=0)return;c.save();c.globalAlpha=cl(p*1.6);c.translate(0,(1-eo(p))*dy);fn();c.restore()}
  function rtx(s,x,y,z,col,w,al,f,p,mw){if(p<=0)return;c.save();c.beginPath();c.rect(-100,y-z*1.05,W+200,z*1.45);c.clip();c.translate(0,(1-eo(p))*z*1.2);tx(s,x,y,z,col,w,al,f,mw);c.restore()}
  function ty(s,x,y,z,col,w,al,f,p){if(p<=0)return;const n=Math.ceil(s.length*p);tx(s.slice(0,n),x,y,z,col,w,al,f);if(p<1){c.font=(w||800)+' '+z+'px '+(f||FB);rr(x+c.measureText(s.slice(0,n)).width+6,y-z*.8,6,z*.9,3,col)}}
  const mc=(parts,y,z,mw,ps)=>{c.font='800 '+z+'px '+FB;const ws=parts.map(p=>c.measureText(p[0]).width),tot=ws.reduce((a,b)=>a+b,0),s=Math.min(1,mw/tot);let x=(1080-tot*s)/2;parts.forEach((p,i)=>{rtx(p[0],x,y,z*s,p[1],800,'left',FB,ps[i]);x+=ws[i]*s})};
  const hdr=(u,n,t,s,fg,acc,nc,sc)=>{pop(110,150,seg(u,-.05,.3),()=>{ci(110,150,40,acc);tx(n,110,167,50,nc,800,'center')});ty(t,176,168,62,fg,800,'left',FB,seg(u,.1,.8));rtx(s,176,214,25,sc,500,'left',FM,seg(u,.5,.9),820)};
  const chk=(x,y)=>{c.beginPath();c.moveTo(x-12,y);c.lineTo(x-3,y+10);c.lineTo(x+13,y-10);c.strokeStyle=K.te;c.lineWidth=7;c.lineCap='round';c.stroke()};

  function S1(t){const u=t-B[0];bg(K.ink);T(()=>{const z=1+.05*Math.sin(Math.PI*seg(u,3.2,6.6));c.translate(540,810);c.scale(z,z);c.translate(-540,-810);
   hdr(u,1,'Server tetap gesit','ratusan pengguna · satu jalur HTTP',K.iv,K.am,K.ink,K.sl);
   const lp=seg(u,.9,1.4);
   for(let i=0;i<7;i++){const x=170+i*123,x2=260+i*92;pop(x,380,seg(u,.3+i*.09,.7+i*.09),()=>pp(x,330,1,i%2?K.pe:K.te,K.iv));
    if(lp>0){ln(x,448,x+(x2-x)*lp,448+80*lp,K.sl,4,[2,14]);if(lp>=1)for(let k=0;k<2;k++){const f=(u*.8+i*.19+k*.5)%1;ci(x+(x2-x)*f,448+80*f,6,K.am)}}}
   const ep=seg(u,.5,1.2),sp=eio(seg(u,3.9,4.7)),cut=eo(seg(u,3.5,3.95)),hv=u>2.4,sk=u>2.6&&u<3.6?Math.sin(u*70)*3:0,ty0=560-24*sp,by0=810+24*sp;
   if(ep>0){c.save();c.globalAlpha=cl(ep*1.5);c.translate(sk,(1-eo(ep))*300);
    rr(190,ty0,700,250,[44,44,0,0],K.i2,K.iv,6);
    for(let i=0;i<3;i++){const wv=[300,220,360][i]*(hv?1:.6+.4*Math.abs(Math.sin(u*2.5+i))),col=hv&&Math.sin(u*18+i*2)>-.2?K.cr:K.te;rr(240,ty0+34+i*50,420,28,14,'#2a3a58');rr(240,ty0+34+i*50,wv,28,14,col);ci(730,ty0+48+i*50,13,col)}
    pop(400,ty0+214,seg(u,4.55,4.9),()=>{rr(240,ty0+190,320,48,24,K.te);tx('TERIMA BERKAS',400,ty0+223,24,K.ink,700,'center',FM)});
    rr(190,by0,700,250,[0,0,44,44],K.i2,K.iv,6);
    c.save();c.translate(330,by0+116);c.rotate(u>4.6?(u-4.6)*1.4:0);ci(0,0,48,null,K.cr,12);ci(0,0,16,K.cr);for(let k=0;k<8;k++){const a=k*Math.PI/4;ln(Math.cos(a)*58,Math.sin(a)*58,Math.cos(a)*78,Math.sin(a)*78,K.cr,16)}c.restore();
    const w1=u>4.7?150+140*Math.abs(Math.sin(u*1.2)):210,w2=u>4.7?80+160*Math.abs(Math.sin(u*1.7+1)):120;
    rr(450,by0+84,300,26,13,'#2a3a58');rr(450,by0+84,w1,26,13,K.cr);rr(450,by0+128,300,26,13,'#2a3a58');rr(450,by0+128,w2,26,13,K.cr);ci(810,by0+116,13,K.cr);
    pop(370,by0+206,seg(u,4.95,5.3),()=>{rr(240,by0+182,260,48,24,K.cr);tx('OLAH PDF',370,by0+215,24,K.ink,700,'center',FM)});
    if(cut>0)rr(540-400*cut,794,800*cut,32,16,K.am);c.restore()}
   const dp=seg(u,2.2,3.0);if(dp>0)A(dp,()=>doc(805+(1-eo(dp))*300,ty0+164,70,90,K.iv,'PDF',K.cr));
   A(seg(u,1.3,1.7)*(1-seg(u,4.3,4.6)),()=>tx('Satu jalur · ratusan pengguna',540,1250,56,K.iv,800,'center',FB,900));
   rtx('Pisahkan tugas penerimaan',540,1230,62,K.iv,800,'center',FB,seg(u,5.0,5.5),900);
   mc([['dari tugas ',K.iv],['pengolahan',K.am]],1310,62,900,[seg(u,5.5,5.9),seg(u,5.7,6.1)]);
   A(seg(u,6.2,6.6),()=>tx('Express.js · ilustrasi',540,1390,26,K.sl,500,'center',FM))})}

  function S2(t){const u=t-B[1];bg(K.iv);T(()=>{const z=1+.04*Math.sin(Math.PI*seg(u,3.6,5.8));c.translate(540,760);c.scale(z,z);c.translate(-540,-760);
   hdr(u,2,'Pola Producer–Consumer','Redis + BullMQ di dalam Express.js',K.iv,K.co,K.iv,K.sl);
   const cp=seg(u,6.6,7.4);if(cp>0){c.save();c.globalAlpha=cl(cp*1.5);c.translate(540,720);const s=1.05-.05*eo(cp);c.scale(s,s);c.translate(-540,-720);c.setLineDash([18,16]);rr(90,290,900,860,48,null,K.iv,6);c.setLineDash([]);c.restore();
    pop(245,290,seg(u,7.1,7.5),()=>{rr(130,262,230,56,28,K.i2,K.iv,4);tx('Express.js',245,300,28,K.iv,700,'center',FM)})}
   pop(540,430,seg(u,.5,.9),()=>{rr(300,370,480,120,40,K.te);tx('PRODUCER',540,430,44,K.ink,800,'center');tx('kasir depan',540,468,22,K.ink,500,'center',FM)});
   pop(540,1060,seg(u,1.5,1.9),()=>{rr(300,1000,480,120,40,K.co);tx('CONSUMER',540,1060,44,K.iv,800,'center');tx('koki dapur belakang',540,1098,22,K.iv,500,'center',FM)});
   A(seg(u,1.9,2.3)*(1-seg(u,4.2,4.5)),()=>ln(540,500,540,990,K.sl,4,[2,14]));
   const cy=seg(u,3.7,4.5);if(cy>0){c.save();c.globalAlpha=cl(cy*1.6);c.translate(0,(1-eo(cy))*420);cyl(390,610,300,300,K.cr,'#FF9A86');tx('Redis',540,664,32,K.ink,800,'center');rr(430,705,220,24,12,'#FFD0C7');rr(430,741,220,24,12,'#FFD0C7');c.restore()}
   const bp=seg(u,4.6,5.3);if(bp>0){c.save();c.globalAlpha=cl(bp*2);c.translate(-(1-eo(bp))*700,0);rr(330,790,420,80,40,K.co);tx('BullMQ',540,842,32,K.iv,700,'center',FM);c.beginPath();c.roundRect(330,790,420,80,40);c.clip();if(bp>=1)for(let k=0;k<3;k++)rr(300+((u*90+k*140)%440),812,36,36,10,K.am);c.restore()}
   const a1=seg(u,4.5,5.0),a2=seg(u,5.0,5.5);if(a1>0)ar(540,500,540,500+100*a1,K.te);if(a2>0)ar(540,925,540,925+65*a2,K.co);
   if(u>5.8)for(let k=0;k<2;k++){const f=((u-5.8)*.4+k*.5)%1;tk(510,510+f*470-18,60,36,K.am,'',K.ink,12)}
   mc([['Producer',K.te],[' → ',K.iv],['Antrean',K.cr],[' → ',K.iv],['Consumer',K.co]],1280,58,900,[seg(u,.9,1.3),seg(u,3.9,4.2),seg(u,4.1,4.5),seg(u,4.9,5.2),seg(u,5.1,5.5)]);
   rtx('dua peran, satu antrean pesan',540,1350,26,K.sl,500,'center',FM,seg(u,7.8,8.3))})}

  function S3(t){const u=t-B[2];bg(K.pe);T(()=>{const z=1+.05*Math.sin(Math.PI*seg(u,2.3,5.2));c.translate(540,850);c.scale(z,z);c.translate(-540,-850);
   hdr(u,3,'Kasir depan = Producer','Express.js · HTTP Endpoint',K.iv,K.am,K.ink,K.pe);
   pop(215,290,seg(u,.3,.7),()=>{rr(90,255,250,70,35,u>2.2?K.te:K.i2);tx('PRODUCER',215,300,26,u>2.2?K.ink:K.iv,700,'center',FM)});
   pop(865,290,seg(u,.45,.85),()=>{rr(740,255,250,70,35,K.i2);tx('CONSUMER',865,300,26,K.iv,700,'center',FM)});
   pop(540,292,seg(u,.9,1.3),()=>{rr(390,250,300,84,26,K.i2,K.sl,4);tx('Next.js',540,304,34,K.iv,700,'center',FM)});
   A(seg(u,1.6,2.0)*(1-seg(u,4.2,4.5)),()=>ar(540,486,540,556,K.am));
   A(seg(u,1.3,1.6)*(1-seg(u,5.1,5.4)),()=>doc(500,372+348*eio(seg(u,4.2,5.2)),80,104,K.iv,'PDF',K.cr));
   const tp=seg(u,7.3,8.0),p1=eo(seg(u,7.0,7.9)),p2=eio(seg(u,8.5,9.4));
   if(tp>0){c.save();c.globalAlpha=cl(tp*1.6);c.translate(0,(1-eo(tp))*400);rr(140,1215,800,250,36,K.cr);tx('Redis Queue',190,1286,44,K.ink,800);tx('DB 0 · bull:document-ingestion',190,1332,27,K.ink,700,'left',FM,720);
    for(let i=0;i<4;i++)pop(245+i*140,1404,seg(u,8.0+i*.1,8.3+i*.1),()=>tk(190+i*140,1368,110,72,K.am,'#0'+(3+i),K.ink,30));
    if(u<9.3){c.setLineDash([10,8]);rr(750,1368,110,72,14,null,K.ink,4);c.setLineDash([])}c.restore()}
   if(u>7.0){const y0=975-130*(1-p1),y=y0+(1368-y0)*p2,x=450+300*p2,w=190-80*p2,h=130-58*p2;tk(x,y,w,h,K.am,'#07',K.ink,60-30*p2);if(p2<.3)A(1-p2*3,()=>tx('antrean',x+w*.36,y+27,20,K.ink,700,'center',FM))}
   SL(520,seg(u,2.1,2.9),()=>{rr(320,700,130,120,[54,54,0,0],K.te);ci(385,650,46,K.iv,K.ink,6);rr(330,586,110,36,[18,18,6,6],K.cr);rr(400,612,74,12,6,K.cr);
    if(u%2.6<.12){ln(358,652,378,652,K.ink,5);ln(392,652,412,652,K.ink,5)}else{ci(368,652,6,K.ink);ci(402,652,6,K.ink)}
    c.beginPath();c.arc(385,668,12,.2,Math.PI-.2);c.strokeStyle=K.ink;c.lineWidth=5;c.stroke();
    rr(640,704,190,100,20,K.ink);rr(660,720,150,36,10,u>5.3?K.am:'#2a3a58');if(u>5.4)tx('202',735,748,28,K.ink,800,'center',FM);for(let i=0;i<4;i++)ci(676+i*40,782,8,K.sl);
    rr(140,770,800,170,30,K.iv,K.ink,6);c.beginPath();c.roundRect(140,860,800,80,[0,0,30,30]);c.fillStyle=K.te;c.fill()});
   rtx('HTTP Endpoint (Producer)',540,912,32,K.ink,700,'center',FM,seg(u,3.0,3.6)*seg(u,2.9,3.0),740);
   pop(803,1034,seg(u,7.9,8.3),()=>{rr(676,1006,254,56,28,K.i2,K.am,4);tx('HTTP 202 Accepted',803,1042,22,K.iv,700,'center',FM)});
   const ap=seg(u,8.0,8.4);if(ap>0)A(1-seg(u,8.9,9.2),()=>ar(545,1115,545,1115+90*ap,K.am))})}

  function S4(t){const u=t-B[3];bg(K.ink);T(()=>{
   hdr(u,4,'Koki dapur = Worker','BullMQ Worker · tarik tiket satu per satu',K.iv,K.cr,K.ink,K.sl);
   const lp=eio(seg(u,3.5,4.3));
   SL(200,seg(u,-.1,.4),()=>{rr(140,250,800,120,34,K.cr);tx('bull:document-ingestion',180,296,24,K.ink,700,'left',FM);
    if(lp>0){c.setLineDash([10,8]);rr(190,312,100,46,12,null,K.ink,4);c.setLineDash([])}else tk(190,312,100,46,K.am,'#03',K.ink,24);
    for(let i=1;i<4;i++)tk(190+i*130,312,100,46,K.am,'#0'+(3+i),K.ink,24)});
   if(lp>0)tk(190+20*lp,312+88*lp,100+50*lp,46+40*lp,K.am,'#03',K.ink,24+16*lp);
   const aa=seg(u,4.3,4.6);if(aa>0)ar(285,492,285,492+32*aa,K.te,6);
   pop(292,800,seg(u,.6,1.1),()=>{c.save();c.translate(0,u<3.4?Math.sin(u*9)*3:Math.sin(u*3)*2);
    ci(250,600,40,K.iv);ci(292,578,48,K.iv);ci(336,600,40,K.iv);rr(235,618,125,40,12,K.iv);ci(292,712,62,K.am);ci(270,708,7,K.ink);ci(314,708,7,K.ink);c.beginPath();c.arc(292,728,14,.2,Math.PI-.2);c.strokeStyle=K.ink;c.lineWidth=5;c.stroke();
    rr(190,776,205,200,[70,70,0,0],K.iv);rr(225,806,135,170,[50,50,0,0],K.co);rr(140,976,300,22,11,K.sl);if(u<3.4)ci(376,690+((u*80)%30),7,K.pe);c.restore()});
   const ST=[[520,K.te],[720,K.co],[920,K.te]],sT=[1.0,1.9,2.6],AC=[[5.0,6.2],[6.2,7.4],[7.4,8.6]];
   ST.forEach(([y,col],i)=>{const act=u>=AC[i][0]&&u<AC[i][1],dn=u>=AC[i][1],pr=seg(u,AC[i][0],AC[i][1]);pop(740,y+80,seg(u,sT[i],sT[i]+.4),()=>{rr(520,y,440,160,36,K.i2,act?K.am:col,act?10:6);
    if(act||dn)rr(544,y+138,392*pr,10,5,dn?K.te:K.am);
    if(i==0){ci(590,y+80,46,K.te);for(let k=0;k<3;k++)rr(566,y+62+k*16,(48-(k==2?18:0))*(act?.5+.5*Math.abs(Math.sin(u*5+k)):1),8,4,K.ink);tx('1 Ekstrak teks',660,y+76,34,K.iv,800,'left',FB,290);tx('PDF → teks mentah',660,y+114,20,K.sl,500,'left',FM,290)}
    if(i==1){ci(590,y+80,46,K.co);c.save();c.translate(590,y+80);c.rotate(act?u*3:0);star(0,0,28,K.am);c.restore();star(618,y+54,10,K.iv);tx('2 Panggil model AI',660,y+76,32,K.iv,800,'left',FB,290);tx('teks → embedding',660,y+114,20,K.sl,500,'left',FM,290)}
    if(i==2){cyl(556,y+30,68,90,K.te,'#5fd6bf');if(act||dn){ci(582,y+80,5,K.ink);if(pr>.4)ci(598,y+98,5,K.ink);if(pr>.7)ci(588,y+112,5,K.ink)}tx('3 Simpan vektor',660,y+76,34,K.iv,800,'left',FB,290);tx('ke PostgreSQL',660,y+114,20,K.sl,500,'left',FM,290)}})});
   [[2.1,2.4,686,716],[2.8,3.1,886,916]].forEach(([a,b,y1,y2])=>{const p=seg(u,a,b);if(p>0)ar(740,y1,740,y1+(y2-y1)*p,K.am,6)});
   const ac2=seg(u,4.4,4.8);if(ac2>0)ar(402,800,402+106*ac2,800,K.am,6);
   if(u>5.0&&u<8.7){const f=eio(seg(u,5.0,8.5));tk(945,560+440*f,80,44,K.am,'#03',K.ink,22)}
   pop(290,1037,seg(u,4.4,4.8),()=>{rr(140,1012,300,50,25,K.co);tx('BullMQ Worker (Consumer)',290,1045,19,K.iv,700,'center',FM,280)});
   SL(0,seg(u,2.0,2.6),()=>{rr(140,1180,800,76,38,K.te);c.save();c.beginPath();c.roundRect(140,1180,800,76,38);c.clip();for(let i=0;i<7;i++)ci(170+((u*170+i*115)%830),1218,15,K.iv);c.restore()});
   pop(884,1218,seg(u,3.6,4.0),()=>{ci(884,1218,28,K.iv);chk(884,1218)});
   rtx('Jalur utama HTTP tetap lancar',540,1336,52,K.iv,800,'center',FB,seg(u,3.0,3.5),880);
   rtx('worker bekerja di latar belakang',540,1388,26,K.sl,500,'center',FM,seg(u,3.7,4.2))})}

  function S5(t){const u=t-B[4];bg(K.iv);T(()=>{
   hdr(u,5,'Satu antrean, dua peran','Producer & Consumer lewat Redis',K.iv,K.am,K.ink,K.sl);
   const sw=seg(u,1.1,1.5);if(sw>0)ln(70,722,70+940*sw,722,K.am,6,[16,14]);
   pop(540,285,seg(u,.1,.5),()=>{rr(380,250,320,70,24,K.i2,K.sl,4);tx('Next.js',540,297,30,K.iv,700,'center',FM)});
   pop(540,432,seg(u,.3,.7),()=>{rr(260,372,560,120,36,K.te);tx('HTTP Endpoint',540,432,40,K.ink,800,'center');tx('(Producer) · 202 Accepted',540,468,22,K.ink,700,'center',FM,520)});
   pop(540,622,seg(u,.5,.9),()=>{rr(260,552,560,140,36,K.cr);tx('Redis Queue · DB 0',540,612,38,K.ink,800,'center',FB,520);tx('bull:document-ingestion',540,652,26,K.ink,700,'center',FM,520)});
   pop(540,812,seg(u,.7,1.1),()=>{rr(260,752,560,120,36,K.co);tx('BullMQ Worker',540,812,40,K.iv,800,'center');tx('(Consumer)',540,848,24,K.iv,700,'center',FM)});
   pop(540,1007,seg(u,.9,1.3),()=>{cyl(420,932,240,150,K.te,'#5fd6bf');tx('PostgreSQL',540,1034,30,K.ink,800,'center');tx('vektor',540,1066,22,K.ink,700,'center',FM)});
   const AR=[[326,368,K.iv,.25],[498,548,K.te,.45],[698,748,K.co,.65],[878,928,K.co,.85]];
   AR.forEach(([y1,y2,col,s],i)=>{const p=seg(u,s,s+.25);if(p>0)ar(540,y1,540,y1+(y2-y1)*p,col);if(u>1.5)ci(540,y1+((u*1.2+i*.25)%1)*(y2-y1),9,K.am)});
   A(seg(u,1.3,1.6),()=>{tx('TERIMA',100,424,26,K.te,700,'left',FM);tx('cepat',100,454,22,K.sl,500,'left',FM);tx('OLAH',100,812,26,K.pe,700,'left',FM);tx('berat',100,842,22,K.sl,500,'left',FM)});
   SL(400,seg(u,1.3,1.9),()=>rr(90,1170,900,340,44,K.am));
   rtx('Solusi Producer-Consumer:',540,1272,56,K.ink,800,'center',FB,seg(u,1.6,2.0),840);
   rtx('Pisahkan Kasir HTTP Express.js &',540,1360,50,K.ink,800,'center',FB,seg(u,1.9,2.3),840);
   rtx('Koki Worker BullMQ Lewat Redis!',540,1436,50,K.ink,800,'center',FB,seg(u,2.2,2.6),840)})}
  const SCN=[S1,S2,S3,S4,S5];

  const CUES=[[0,3.28],[3.52,7.6],[7.6,10.68],[11.16,16.2],[16.68,18.36],[18.68,23.36],[23.36,26.12],[26.4,29.4],[29.68,34.8],[35.28,DUR]];
  const CHK=[["Supaya server tetap gesit","melayani ratusan pengguna,"],["kita wajib memisahkan","tugas penerimaan berkas","dari tugas pengolahannya"],["menggunakan pola arsitektur","Producer-Consumer."],["Di sinilah duet","Redis dan pustaka BullMQ","beraksi di dalam","Express.js kita."],["Kita bagi peran","menjadi dua:"],["rute HTTP Express.js","hanya bertugas sebagai","Producer atau kasir depan"],["yang menerima berkas","dan mencetak nomor antrean,"],["sedangkan proses","pengolahan PDF yang berat"],["didelegasikan ke","BullMQ Worker sebagai","Consumer atau koki","di dapur belakang."],["Keduanya dihubungkan","oleh antrean pesan","di Redis pada Database 0."]];
  const CH=[];CUES.forEach((q,ci_)=>{const L=CHK[ci_],tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});CH[CH.length-1][1]=Math.min(CH[CH.length-1][1],DUR);
  const PAL=[[K.iv,K.am],[K.iv,K.cr],[K.iv,K.pe],[K.iv,K.am],[K.iv,K.cr]],HI=/Producer|Consumer|Redis|BullMQ|Express|Worker|gesit|Database|HTTP|PDF/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+FB;
   const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}
    c.translate(dx,dy);tx(w,x,y,z,HI.test(w)?pf:bc,800,'left',FB,ww+4);c.restore();x+=ww+gap*s});
   rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}

  const wy=(x,p)=>H+80-(H+160)*eo(p)+Math.sin(x/90+p*7)*60*Math.sin(Math.PI*p);
  function clipP(k,p){const e=eo(p),P=new Path2D();
   if(k==1){P.moveTo(0,H);for(let x=0;x<=W;x+=30)P.lineTo(x,wy(x,p));P.lineTo(W,H);P.closePath()}
   else if(k==2||k==4){const [cx,cy]=k==2?[540,735]:[724,956];P.arc(cx,cy,e*2400,0,7)}
   else{const a=-300+e*(H+700);P.moveTo(0,0);P.lineTo(W,0);P.lineTo(W,a);P.lineTo(0,a+300);P.closePath()}return P}
  function rim(k,p){if(p<=0||p>=1)return;const e=eo(p);c.save();c.lineWidth=18*Math.sin(Math.PI*p)+2;c.strokeStyle=K.am;c.lineJoin='round';c.beginPath();
   if(k==1){for(let x=0;x<=W;x+=30)x?c.lineTo(x,wy(x,p)):c.moveTo(x,wy(x,p))}
   else if(k==2||k==4){const [cx,cy]=k==2?[540,735]:[724,956];c.arc(cx,cy,e*2400,0,7)}
   else{const a=-300+e*(H+700);c.moveTo(W,a);c.lineTo(0,a+300)}c.stroke();c.restore()}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,DUR);c.globalAlpha=1;c.setLineDash([]);
   let i=0;for(let k=1;k<5;k++)if(t>=B[k])i=k;let k=-1;for(let j=1;j<5;j++)if(Math.abs(t-B[j])<.25)k=j;
   if(k<0){SCN[i](t);cap(t,i)}else{const p=seg(t,B[k]-.25,B[k]+.25);SCN[k-1](t);cap(t,k-1);c.save();c.clip(clipP(k,p));SCN[k](t);cap(t,k);c.restore();rim(k,p)}}

  const SF=[];const ev=(t,k,a)=>SF.push([t,k,a]);
  ev(B[1]-.25,'rise',.5);ev(B[1]-.2,'whoosh');ev(B[2]-.25,'whoosh');ev(B[3]-.25,'slide');ev(B[3]-.2,'zip');ev(B[4]-.25,'whoosh');
  [['Server tetap gesit',0],['Pola Producer–Consumer',1],['Kasir depan = Producer',2],['Koki dapur = Worker',3],['Satu antrean, dua peran',4]].forEach(([s,i])=>{for(let k=0;k<Math.min(10,s.length);k++)ev(B[i]+.12+k*.065,'tick')});
  CH.forEach((q,i)=>{ev(q[0]+.02,['tap','blip','zip','tap','snap','blip'][i%6],1+(i%4)*.06);if(/Producer|Consumer|BullMQ|Redis/.test(q[2]))ev(q[0]+.14,'ding',1+(i%3)*.08)});
  for(let i=0;i<7;i++)ev(.3+i*.09,'pop',1+i*.07);
  [[.05,'pop'],[.6,'boop'],[2.4,'boop'],[2.8,'glitch'],[3.0,'err'],[3.6,'zip'],[3.75,'snap'],[4.1,'whomp'],[4.55,'pop'],[4.95,'pop',1.2],[5.1,'slide']].forEach(a=>ev(B[0]+a[0],a[1],a[2]));
  [[.55,'boop'],[1.55,'boop',1.3],[3.9,'thud'],[4.7,'slide'],[5.3,'click'],[5.9,'blip'],[6.7,'zip'],[7.2,'pop']].forEach(a=>ev(B[1]+a[0],a[1],a[2]));
  [[.35,'pop'],[.5,'pop',1.3],[.95,'boop'],[2.1,'slide'],[2.6,'boop'],[3.3,'tap'],[4.2,'zip'],[5.3,'click'],[7.0,'slide'],[7.9,'stamp'],[8.5,'zip'],[9.3,'boop']].forEach(a=>ev(B[2]+a[0],a[1],a[2]));
  [[.6,'boop'],[1.0,'pop'],[1.9,'pop',1.2],[2.6,'pop',1.4],[3.0,'slide'],[3.5,'zip'],[4.3,'tap'],[4.4,'pop'],[5.0,'snap'],[6.2,'snap',1.1],[7.4,'snap',1.2],[8.5,'ding',1.2]].forEach(a=>ev(B[3]+a[0],a[1],a[2]));
  [[.1,'pop'],[.3,'pop',1.1],[.5,'pop',1.2],[.7,'pop',1.3],[.9,'pop',1.4],[1.1,'slide'],[1.5,'stamp'],[1.8,'sparkle'],[1.9,'chime']].forEach(a=>ev(B[4]+a[0],a[1],a[2]));
  SF.sort((a,b)=>a[0]-b[0]);

  function scheduleSfx(ctx,out,from,at){
    const SV=.5,bus=ctx.createGain();bus.gain.value=.7;bus.connect(out);
    const NB=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;let w0=0;
    const osc=(ty,f0,f1,du,v,dl=0)=>{const w=w0+dl,s=ctx.createOscillator(),g=ctx.createGain();s.type=ty;s.frequency.setValueAtTime(f0,w);s.frequency.exponentialRampToValueAtTime(Math.max(1,f1),w+du);g.gain.setValueAtTime(v*SV,w);g.gain.exponentialRampToValueAtTime(.0001,w+du);s.connect(g);g.connect(bus);s.start(w);s.stop(w+du+.03)};
    const nz=(f0,f1,du,v,q)=>{const w=w0,s=ctx.createBufferSource(),b=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=NB;s.loop=true;b.type='bandpass';b.Q.value=q;b.frequency.setValueAtTime(f0,w);b.frequency.exponentialRampToValueAtTime(f1,w+du);g.gain.setValueAtTime(.0001,w);g.gain.linearRampToValueAtTime(v*SV,w+Math.min(.03,du/3));g.gain.exponentialRampToValueAtTime(.0001,w+du);s.connect(b);b.connect(g);g.connect(bus);s.start(w);s.stop(w+du+.05)};
    const KD=(k,a)=>{const m=a||1;({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.1),click:()=>osc('square',1800,1800,.05,.16),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,a||.8,.4,2),err:()=>{osc('sawtooth',110,110,.4,.12);osc('sawtooth',117,117,.4,.12)},chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),
    boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},whomp:()=>osc('sine',90,45,.5,.9),slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()};
    SF.forEach(([t,k,a])=>{if(t>=from&&t<DUR-.05){w0=at+t-from;KD(k,a)}});
  }
  return { DUR, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 3 (Exact port from rag-scene-3.html)
// ============================================================================
function createScene3() {
  const W=1080,H=1920,C={ink:'#172235',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A',dk:'#1d2b45'};
  const B=[0,5.3,11,25.2,29.7,35.2,40.65];let c,D=40.6459,SUB=true;
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),sg=(u,a,b)=>cl((u-a)/(b-a)),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2),lp=(a,b,p)=>a+(b-a)*p;
  const hx=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)),mx=(a,b,p)=>{const x=hx(a),y=hx(b);return'rgb('+x.map((v,i)=>Math.round(lp(v,y[i],cl(p)))).join(',')+')'};
  const rr=(x,y,w,h,r,f,s,l)=>{c.beginPath();c.roundRect(x,y,w,h,r);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=l||6;c.stroke()}};
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,7);c.fillStyle=f;c.fill()};
  const tx=(s,x,y,z,col,f,al)=>{c.font=(f=='m'?'700 '+z+'px "JetBrains Mono",monospace':'800 '+z+'px "Bricolage Grotesque",sans-serif');c.fillStyle=col;c.textAlign=al||'left';c.fillText(s,x,y)};
  const bg=()=>drawThemeBg(c,W,H),ty=(s,p)=>s.slice(0,Math.floor(s.length*p));
  const line=(a,b,col,w)=>{c.beginPath();c.moveTo(...a);c.lineTo(...b);c.strokeStyle=col;c.lineWidth=w||6;c.lineCap='round';c.stroke()};
  const pop=(cx,cy,p,fn)=>{if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(p);c.scale(s,s);c.translate(-cx,-cy);fn();c.restore()};
  const A=(a,fn)=>{if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()};
  const up=(p,d,fn)=>{if(p<=0)return;c.save();c.globalAlpha=cl(p*1.6);c.translate(0,(1-eo(p))*d);fn();c.restore()};
  const head=(n,t,sub,col)=>{ci(120,170,52,col);tx(n,120,193,64,col==C.am?C.ink:C.iv,'b','center');tx(t,200,185,60,C.iv);tx(sub,200,240,28,C.pe,'m')};
  function doc(x,y,w,h,f){rr(x,y,w,h,22,f);c.beginPath();c.moveTo(x+w-50,y);c.lineTo(x+w,y+50);c.lineTo(x+w-50,y+50);c.closePath();c.fillStyle='rgba(23,34,53,.18)';c.fill();tx('PDF',x+w/2,y+h*.62,w*.3,C.cr,'m','center')}
  const fpImg=(typeof Image!=='undefined')?new Image():null;if(fpImg)fpImg.src='/assets/fingerprint.svg';
  const FP_R=[
    new Path2D('M17.81,4.47 C17.73,4.47 17.65,4.45 17.58,4.41 C15.66,3.42 14,3 12.01,3 C10.03,3 8.15,3.47 6.44,4.41 C6.2,4.54 5.9,4.45 5.76,4.21 C5.63,3.97 5.72,3.66 5.96,3.53 C7.82,2.52 9.86,2 12.01,2 C14.14,2 16,2.47 18.04,3.52 C18.29,3.65 18.38,3.95 18.25,4.19 C18.16,4.37 17.99,4.47 17.81,4.47 Z'),
    new Path2D('M3.5,9.72 C3.4,9.72 3.3,9.69 3.21,9.63 C2.98,9.47 2.93,9.16 3.09,8.93 C4.08,7.53 5.34,6.43 6.84,5.66 C9.98,4.04 14,4.03 17.15,5.65 C18.65,6.42 19.91,7.51 20.9,8.9 C21.06,9.12 21.01,9.44 20.78,9.6 C20.55,9.76 20.24,9.71 20.08,9.48 C19.18,8.22 18.04,7.23 16.69,6.54 C13.82,5.07 10.15,5.07 7.29,6.55 C5.93,7.25 4.79,8.25 3.89,9.51 C3.81,9.65 3.66,9.72 3.5,9.72 Z'),
    new Path2D('M14.91,22 C14.87,22 14.82,21.99 14.78,21.98 C13.19,21.54 12.15,20.95 11.06,19.88 C9.66,18.49 8.89,16.64 8.89,14.66 C8.89,13.04 10.27,11.72 11.97,11.72 C13.67,11.72 15.05,13.04 15.05,14.66 C15.05,15.73 15.98,16.6 17.13,16.6 C18.28,16.6 19.21,15.73 19.21,14.66 C19.21,10.89 15.96,7.83 11.96,7.83 C9.12,7.83 6.52,9.41 5.35,11.86 C4.96,12.67 4.76,13.62 4.76,14.66 C4.76,15.44 4.83,16.67 5.43,18.27 C5.53,18.53 5.4,18.82 5.14,18.91 C4.88,19.01 4.59,18.87 4.5,18.62 C4.01,17.31 3.77,16.01 3.77,14.66 C3.77,13.46 4,12.37 4.45,11.42 C5.78,8.63 8.73,6.82 11.96,6.82 C16.51,6.82 20.21,10.33 20.21,14.65 C20.21,16.27 18.83,17.59 17.13,17.59 C15.43,17.59 14.05,16.27 14.05,14.65 C14.05,13.58 13.12,12.71 11.97,12.71 C10.82,12.71 9.89,13.58 9.89,14.65 C9.89,16.36 10.55,17.96 11.76,19.16 C12.71,20.1 13.62,20.62 15.03,21.01 C15.3,21.08 15.45,21.36 15.38,21.62 C15.33,21.85 15.12,22 14.91,22 Z'),
    new Path2D('M9.75,21.79 C9.62,21.79 9.49,21.74 9.4,21.64 C8.53,20.77 8.06,20.21 7.39,19 C6.7,17.77 6.34,16.27 6.34,14.66 C6.34,11.69 8.88,9.27 12,9.27 C15.12,9.27 17.66,11.69 17.66,14.66 C17.66,14.94 17.44,15.16 17.16,15.16 C16.88,15.16 16.66,14.94 16.66,14.66 C16.66,12.24 14.57,10.27 12,10.27 C9.43,10.27 7.34,12.24 7.34,14.66 C7.34,16.1 7.66,17.43 8.27,18.51 C8.91,19.66 9.35,20.15 10.12,20.93 C10.31,21.13 10.31,21.44 10.12,21.64 C10.01,21.74 9.88,21.79 9.75,21.79 Z'),
    new Path2D('M16.92,19.94 C15.73,19.94 14.68,19.64 13.82,19.05 C12.33,18.04 11.44,16.4 11.44,14.66 C11.44,14.38 11.66,14.16 11.94,14.16 C12.22,14.16 12.44,14.38 12.44,14.66 C12.44,16.07 13.16,17.4 14.38,18.22 C15.09,18.7 15.92,18.93 16.92,18.93 C17.16,18.93 17.56,18.9 17.96,18.83 C18.23,18.78 18.49,18.96 18.54,19.24 C18.59,19.51 18.41,19.77 18.13,19.82 C17.56,19.93 17.06,19.94 16.92,19.94 Z')
  ];
  const S=[
  u=>{bg(C.ink);A(sg(u,0,.4),()=>tx('BAGIAN 4 / 10 · PIPA INGESTION',80,150,30,C.am,'m'));up(sg(u,.3,.9),60,()=>tx('Kasir HTTP',80,300,140,C.iv));up(sg(u,.8,1.3),60,()=>tx('secepat kilat',80,400,72,C.pe));
   up(sg(u,.3,1.1),500,()=>{rr(120,1000,840,300,40,C.iv);for(let i=0;i<5;i++)rr(160+i*160,1180,120,90,20,C.pe)});
   pop(710,895,sg(u,.9,1.4),()=>{rr(560,780,300,230,32,C.co);rr(590,810,240,100,16,C.ink);tx(Math.round(38*eo(sg(u,3.7,5)))+' ms',710,885,56,C.am,'m','center');for(let i=0;i<4;i++)ci(615+i*65,960,16,C.iv)});
   pop(340,900,sg(u,1.2,1.7),()=>{c.translate(0,Math.sin(u*3)*5);rr(250,830,180,200,70,C.cr);ci(340,760,72,C.am);ci(315,750,9,C.ink);ci(365,750,9,C.ink);c.beginPath();c.arc(340,775,24,.2,Math.PI-.2);c.strokeStyle=C.ink;c.lineWidth=7;c.lineCap='round';c.stroke();line([425,900],[520,960],C.cr,44)});
   pop(420,1135,sg(u,1.7,2.2),()=>{const pr=sg(u,2.7,2.85)*(1-sg(u,2.95,3.15));c.translate(420,1135);c.scale(1-.06*pr,1-.06*pr);c.translate(-420,-1135);rr(220,1080,400,110,55,pr>0?C.am:C.te);tx('Unggah PDF',420,1135+17,52,C.ink,'b','center')});
   pop(560,1190,sg(u,2.2,2.6),()=>ci(560,1190,26,C.iv));
   const f=eio(sg(u,3,3.8));if(u>=2){const p=sg(u,2,2.5);A(1-sg(u,3.6,3.85),()=>{c.save();const x=(1-f)*(1-f)*875+2*(1-f)*f*520+f*f*435,y=(1-f)*(1-f)*595+2*(1-f)*f*480+f*f*880,s=ebo(p)*(1-.5*f);c.translate(x,y);c.scale(s,s);doc(-95,-125,190,250,C.iv);c.restore()});
    A(sg(u,2.9,3.2)*(1-f),()=>{c.setLineDash([4,22]);c.beginPath();c.moveTo(875,595);c.quadraticCurveTo(520,480,435,880);c.strokeStyle=C.am;c.lineWidth=7;c.stroke();c.setLineDash([])})}},
  u=>{bg(C.iv);A(sg(u,0,.4),()=>head('3','Tiga Langkah Ringan','< 50 ms di POST /upload',C.co,C.iv));
   up(sg(u,.2,.9),500,()=>{rr(70,330,940,640,40,'#0E1727',C.sl,4);[C.cr,C.am,C.te].forEach((k,i)=>ci(125+i*38,380,11,k));tx('POST /api/v1/documents/upload',120,450,28,C.pe,'m');
    [['crypto.createHash(\'sha256\')',C.co,520,2.7],['db.insert({ status:\'PENDING\' })',C.te,640,3.4],['ingestionQueue.add({...})',C.cr,760,4.1]].forEach((l,i)=>{const p=sg(u,l[3],l[3]+.35);rr(95,l[2]-50,890,100,22,mx(C.dk,l[1],p));ci(145,l[2],28,mx(C.sl,C.iv,p));tx(i+1+'',145,l[2]+14,40,C.ink,'b','center');tx(l[0],200,l[2]+10,30,mx(C.sl,C.iv,p),'m')});
    A(sg(u,4.6,5),()=>tx("res.status(202).json({ status:'QUEUED' })",110,900,26,C.am,'m'))});
   pop(540,1115,sg(u,1.6,2.1),()=>{rr(260,1040,560,150,75,C.am);tx('Total: '+Math.round(38*eo(sg(u,1.7,2.5)))+' ms',540,1138,70,C.ink,'m','center')});
   [['SHA-256',C.co,2.8],['PENDING',C.te,3.5],['QUEUE',C.cr,4.2]].forEach((b,i)=>pop(220+i*320,1365,sg(u,b[2],b[2]+.45),()=>{rr(70+i*320,1280,300,170,34,b[1]);tx(i+1+'',110+i*320,1350,52,C.iv,'b');tx(b[0],220+i*320,1420,32,C.iv,'m','center')}))},
  u=>{bg(C.ink);A(sg(u,0,.4),()=>head('1','Sidik Jari',"crypto.createHash('sha256')",C.co,C.iv));
   const pp=eo(sg(u,.2,.9));c.save();c.translate((pp-1)*400,0);A(pp,()=>doc(80,360,220,290,C.iv));c.restore();
   pop(550,505,sg(u,.7,1.2),()=>{rr(400,360,300,290,44,C.co);c.save();c.translate(550,505);c.scale(10.8,10.8);c.translate(-12,-12);for(let k=0;k<5;k++){const p=sg(u,1.3+k*.3,1.9+k*.3);c.fillStyle=p>0?mx('#8EA2FF',C.iv,eo(p)):'rgba(246,245,238,0.28)';c.fill(FP_R[k])}c.restore()});
   line([310,505],[310+85*sg(u,1,1.4),505],C.am,10);if(u>2.2)line([705,505],[705+65*sg(u,2.2,2.5),505],C.am,10);
   pop(900,505,sg(u,2.4,2.9),()=>{rr(780,450,240,110,26,C.am);tx(ty('a3f9…c71e',sg(u,2.9,3.6)),900,520,34,C.ink,'m','center')});A(sg(u,3.6,4),()=>tx('contoh ilustrasi',900,600,22,C.sl,'m','center'));
   up(sg(u,4,4.7),600,()=>{rr(80,760,920,520,40,C.dk);tx('documents · sha256',120,830,30,C.pe,'m');const sc=Math.floor(sg(u,4.7,7.3)*2.99),m=sg(u,7.4,7.7);
    ['7be1…02aa','e4c0…9d13','a3f9…c71e'].forEach((h,i)=>{const y=870+i*120,mt=i==2;rr(110,y,860,96,22,mt?mx(C.ink,C.cr,m):C.ink,(u>4.7&&u<7.4&&sc==i)?C.co:0,6);tx(h,150,y+62,34,mt&&m>.5?C.ink:C.sl,'m')})});
   pop(930,1100,sg(u,7.6,8),()=>tx('COCOK!',930,1100,34,C.ink,'m','right'));
   pop(240,1390,sg(u,9.4,9.9),()=>{ci(240,1390,62,C.am);tx('AI',240,1412,56,C.ink,'b','center');line([190,1340],[190+100*sg(u,11.4,11.8),1340+100*sg(u,11.4,11.8)],C.cr,14)});
   tx(ty('DITOLAK — token tidak terbakar',sg(u,9.9,11)),340,1410,34,C.iv,'b')},
  u=>{bg(C.pe);A(sg(u,0,.4),()=>head('2','Simpan Baris','status awal PENDING',C.am,C.iv));
   up(sg(u,.2,.8),500,()=>{rr(70,340,940,620,40,C.iv);rr(70,340,940,100,40,C.ink);['id','nama','status'].forEach((s,i)=>tx(s,130+[0,200,640][i],405,34,C.am,'m'));
    [['41','laporan_q1.pdf','READY'],['42','kontrak.pdf','READY']].forEach((r,i)=>{const y=470+i*110;rr(90,y,900,90,20,'#E8E7DC');tx(r[0],130,y+58,32,C.sl,'m');tx(r[1],330,y+58,32,C.sl,'m');rr(740,y+18,200,54,27,C.sl);tx(r[2],840,y+56,26,C.iv,'m','center')})});
   const e=eo(sg(u,1,1.7));A(e,()=>{c.save();c.translate((1-e)*1100,0);rr(90,690,900,110,24,C.te);tx('43',130,762,36,C.ink,'m');tx('berkas_baru.pdf',330,762,34,C.ink,'m');c.restore()});
   pop(855,745,sg(u,2.2,2.7),()=>{rr(740,712,230,66,33,mx(C.sl,C.am,sg(u,2.4,2.9)));tx('PENDING',855,757,30,C.ink,'m','center')});
   A(sg(u,1.7,2.1),()=>{tx('INSERT',150,890,40,C.co,'m');tx('+ baris baru',380,890,34,C.ink,'m')});
   up(sg(u,2.9,3.5),300,()=>{rr(70,1040,940,200,40,C.dk,C.sl,4);tx("status = 'PENDING'",540,1160,54,C.am,'m','center')})},
  u=>{bg(C.iv);A(sg(u,0,.4),()=>head('3','Tiket Antrean','ingestionQueue.add()',C.cr,C.iv));
   pop(230,470,sg(u,.1,.6),()=>{rr(70,360,320,220,36,C.cr);ci(160,430,38,C.am);tx('Kasir',230,455,40,C.ink);tx('Producer',230,510,26,C.ink,'m')});
   pop(540,1005,sg(u,.5,1),()=>{rr(60,930,960,150,75,C.dk,C.sl,4);tx('Redis · ingestionQueue',540,905,30,C.sl,'m','center')});
   [0,1].forEach(i=>pop(195+i*190,1005,sg(u,.9+i*.2,1.4+i*.2),()=>{rr(110+i*190,960,170,90,24,C.co);tx('#'+(i+1),195+i*190,1020,44,C.iv,'m','center')}));
   const f=eio(sg(u,1.9,2.7)),X=lp(120,490,f),Y=lp(700,960,f),Wd=lp(420,170,f),Hh=lp(150,90,f);
   pop(330,775,sg(u,.9,1.4),()=>{});if(u>.9){A(sg(u,.9,1.2),()=>{rr(X,Y,Wd,Hh,lp(26,24,f),mx(C.dk,C.co,f));if(f<.5){A(1-f*2,()=>{tx('{ documentId,',X+40,Y+65,34,C.am,'m');tx('  filePath }',X+40,Y+115,34,C.am,'m')})}else A(f*2-1,()=>tx('#3',X+Wd/2,Y+60,44,C.iv,'m','center'))})}
   pop(780,770,sg(u,1.7,2.2),()=>{rr(580,730,440,80,40,C.am);tx('ingestionQueue.add()',800,780,26,C.ink,'m','center')});
   pop(370,1250,sg(u,2.6,3.1),()=>{rr(70,1180,600,120,60,C.cr);tx('Antrean BullMQ',370,1255,44,C.iv,'b','center')});
   line([880,1085],[880,1085+65*sg(u,3.4,3.8)],C.am,10);
   pop(880,1275,sg(u,3,3.5),()=>{c.translate(0,Math.sin(u*4)*4);rr(740,1150,280,250,40,C.te);ci(880,1240,58,C.iv);tx('Worker',880,1360,40,C.ink,'b','center');tx('dapur belakang',880,1420,22,C.ink,'m','center')})},
  u=>{bg(C.ink);up(sg(u,.3,.8),60,()=>tx('Jalur Kilat 50 Milidetik',540,170,70,C.iv,'b','center'));
   up(sg(u,.3,.9),800,()=>{rr(300,260,480,820,70,C.iv);rr(330,330,420,640,36,'#E8E7DC')});
   pop(540,470,sg(u,1.2,1.7),()=>ci(540,470,90,C.te));
   if(u>1.8){c.save();c.beginPath();c.moveTo(500,470);c.lineTo(530,502);c.lineTo(590,436);c.strokeStyle=C.iv;c.lineWidth=18;c.lineCap='round';c.lineJoin='round';c.setLineDash([200,200]);c.lineDashOffset=200*(1-sg(u,1.8,2.3));c.stroke();c.restore()}
   A(sg(u,3.3,3.5),()=>{tx(Math.round(202*eo(sg(u,3.3,3.9)))+'',540,670,120,C.ink,'b','center')});A(sg(u,3.9,4.2),()=>tx('Accepted',540,740,50,C.sl,'b','center'));
   pop(540,845,sg(u,3.9,4.3),()=>{rr(360,800,360,90,22,C.ink);tx("{ status:'QUEUED' }",540,858,26,C.am,'m','center')});
   up(sg(u,4.2,4.7),400,()=>{rr(70,1130,940,330,40,C.am);[['Cek Duplikat SHA-256 → Masuk',46,1240],['Antrean Redis → Balas',46,1310],['HTTP 202 Accepted!',52,1380]].forEach((l,i)=>A(sg(u,4.3+i*.25,4.6+i*.25),()=>tx(l[0],540,l[2],l[1],C.ink,'b','center')))})}];

  const CUES=[[.25,2.85],[2.9,4.7],[5.45,7.7],[7.75,10.5],[11.2,14.95],[15,17.8],[18.35,20.95],[21,24.75],[25.4,29],[29.9,34.5],[35.3,40.1]];
  const CHK=[["Mari kita lihat","betapa cepatnya","kasir HTTP kita","bekerja"],["saat tombol","unggah ditekan."],["Dalam waktu","kurang dari","50 milidetik,"],["endpoint upload hanya","melakukan tiga","langkah ringan."],["Pertama, menghitung","sidik jari","SHA-256 dari berkas"],["dan mengeceknya","ke tabel documents","di PostgreSQL."],["Kalau berkas yang","sama persis sudah","pernah diunggah,"],["sistem langsung","menolaknya supaya","kita tidak membakar","uang token AI","dua kali."],["Kedua, menyimpan","data awal dokumen","dengan status pending."],["Ketiga, mendorong","tiket tugas berisi","ID dokumen dan","lokasi berkas ke","antrean BullMQ di Redis."],["Lalu detik itu juga","membalas peramban","pengguna dengan kode","HTTP 202 Accepted."]];
  const CH=[];CUES.forEach((q,ci_)=>{const L=CHK[ci_],tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const PAL=[[C.iv,C.am],[C.iv,C.cr],[C.iv,C.am],[C.iv,C.pe],[C.iv,C.cr],[C.iv,C.am]],HI=/\d|SHA|PENDING|pending|Redis|BullMQ|HTTP|Accepted|documents|PostgreSQL|token/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px "Bricolage Grotesque",sans-serif';const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;c.font='800 '+z+'px "Bricolage Grotesque",sans-serif';c.textAlign='left';
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}c.translate(dx,dy);c.fillStyle=HI.test(w)?pf:bc;c.fillText(w,x,y);c.restore();x+=ww+gap*s});
   rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}
  function tp(i,p){const k=i%3,e=eo(p);c.beginPath();if(k==0)c.arc(540,i==3?1000:900,e*1800,0,7);else if(k==1){const y0=2020*(1-e);c.moveTo(0,H);for(let x=0;x<=W;x+=30)c.lineTo(x,y0+45*Math.sin(x/110+p*9)*Math.sin(Math.PI*p));c.lineTo(W,H);c.closePath()}else{const sx=-400+e*2280;c.moveTo(-400,-10);c.lineTo(sx,-10);c.lineTo(sx-500,1930);c.lineTo(-400,1930);c.closePath()}}
  function sc(i,t){const d=B[i+1]-B[i],z=1+.05*Math.sin(Math.PI*cl((t-B[i])/d));c.save();c.translate(540,800);c.scale(z,z);c.translate(-540,-800);S[i](t-B[i]);c.restore()}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,D);let i=0;for(let k=1;k<6;k++)if(t>=B[k]-.5)i=k;const p=i>0?(t-(B[i]-.5))/.5:1;
   if(i>0&&p<1){sc(i-1,t);cap(t,i-1);c.save();tp(i,p);c.clip();sc(i,t);cap(t,i);c.restore();tp(i,p);c.strokeStyle=C.am;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.stroke()}else{sc(i,t);cap(t,i)}}

  const SF=[[.3,'boop'],[1,'boop',1.2],[1.9,'tap'],[3,'tap'],[3.05,'zip'],[3.9,'ding'],[7.9,'snap'],[7.95,'ding',1],[8.6,'snap'],[8.65,'ding',1.25],[9.3,'snap'],[9.35,'ding',1.5],[6.9,'stamp'],[11.2,'slide'],[11.6,'boop'],[13.4,'zip'],[15,'slide'],[15.5,'tick'],[16,'tick'],[16.5,'tick'],[17,'tick'],[17.5,'tick'],[18.4,'glitch'],[18.45,'thud'],[18.55,'err'],[20.7,'boop'],[21.2,'thud'],[22.5,'tap'],[25.3,'slide'],[26.2,'boop'],[27.5,'zip'],[28,'snap'],[29.8,'boop'],[30.7,'tap'],[31.6,'ding'],[32.4,'boop'],[32.7,'zip'],[33.2,'snap'],[35.4,'slide'],[36.4,'boop'],[37,'snap'],[38.5,'zip'],[39,'stamp'],[39.5,'ding'],[39.8,'sparkle'],[40.05,'chime']];
  for(let i=1;i<6;i++){const k=i%3,t=B[i]-.5;SF.push(k==0?[t,'whoosh']:k==1?[t,'rise',.5]:[t,'slide']);if(k)SF.push([t+.1,k==1?'whoosh':'zip'])}
  CH.forEach((q,i)=>{SF.push([q[0],['tap','blip','zip','tap','snap','blip'][i%6],.8+(i%3)*.15,.5]);if(/\d|SHA|PENDING|pending|Redis/.test(q[2]))SF.push([q[0]+.12,'ding',1.3,.5])});
  SF.sort((a,b)=>a[0]-b[0]);

  function scheduleSfx(ctx,out,from,T0){
    const nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
    SF.forEach(([t,k,a,v])=>{if(t<from||t>D)return;const T=T0+t-from,VV=(v||1)*.55;
     const g=(vol,d,dur)=>{const x=ctx.createGain();x.gain.setValueAtTime(vol*VV,T+d);x.gain.exponentialRampToValueAtTime(.0001,T+d+dur);x.connect(out);return x};
     const osc=(ty,f0,f1,dur,vol,d=0)=>{const o=ctx.createOscillator();o.type=ty;o.frequency.setValueAtTime(f0,T+d);o.frequency.exponentialRampToValueAtTime(f1,T+d+dur);o.connect(g(vol,d,dur));o.start(T+d);o.stop(T+d+dur+.05)};
     const nz=(f0,f1,dur,vol,q,d=0)=>{const s=ctx.createBufferSource();s.buffer=nb;s.loop=true;const f=ctx.createBiquadFilter();f.type='bandpass';f.Q.value=q;f.frequency.setValueAtTime(f0,T+d);f.frequency.exponentialRampToValueAtTime(f1,T+d+dur);s.connect(f);f.connect(g(vol,d,dur));s.start(T+d);s.stop(T+d+dur+.05)};
     const m=a||1;({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.1),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,a||.8,.4,2),err:()=>{osc('sawtooth',110,110,.4,.12);osc('sawtooth',117,117,.4,.12)},chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),
     boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()});
  }
  return { DUR: D, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 4 (Exact port from rag-scene-4.html)
// ============================================================================
function createScene4() {
  const W=1080,H=1920,C={ink:'#172235',i2:'#0E1727',i3:'#1d2b45',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A'};
  const D=38.938291666666665,B=[0,6.4,10.7,17.9,26.6,34.5,D],FB="'Bricolage Grotesque',sans-serif",FM="'JetBrains Mono',monospace";
  let c,SUB=true;
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a)),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2),lr=(a,b,p)=>a+(b-a)*p;
  const rr=(x,y,w,h,r,f,s,lw)=>{if(w<=0||h<=0)return;c.beginPath();c.roundRect(x,y,w,h,Math.min(r,w/2,h/2));if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.stroke()}};
  const tx=(s,x,y,z,col,f,al)=>{c.font=(f=='M'?'700 ':'800 ')+z+'px '+(f=='M'?FM:FB);c.fillStyle=col;c.textAlign=al||'left';c.fillText(s,x,y)};
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,Math.max(0,r),0,7);c.fillStyle=f;c.fill()};
  const ln=(x1,y1,x2,y2,col,w,d)=>{c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.strokeStyle=col;c.lineWidth=w;c.lineCap='round';c.setLineDash(d||[]);c.stroke();c.setLineDash([])};
  function star(x,y,r1,r2,n,f){c.beginPath();for(let i=0;i<n*2;i++){const r=i%2?r1:r2,a=Math.PI*i/n;c.lineTo(x+r*Math.cos(a),y+r*Math.sin(a))}c.closePath();c.fillStyle=f;c.fill()}
  function pdf(x,y,s,col){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,14);c.arcTo(0,0,14,0,14);c.lineTo(56,0);c.lineTo(80,24);c.lineTo(80,86);c.arcTo(80,100,66,100,14);c.lineTo(14,100);c.arcTo(0,100,0,86,14);c.closePath();c.fillStyle=C.iv;c.fill();c.beginPath();c.moveTo(56,0);c.lineTo(56,24);c.lineTo(80,24);c.closePath();c.fillStyle=col;c.fill();rr(10,34,32,5,2.5,'#C3C8D6');rr(10,50,60,28,8,col);tx('PDF',40,71,18,C.ink,'M','center');c.restore()}
  function pop(cx,cy,p,fn){if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(p);c.scale(s,s);c.translate(-cx,-cy);fn();c.restore()}
  function A(a,fn){if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()}
  function rtx(s,x,y,z,col,f,p,al){if(p<=0)return;c.save();c.beginPath();c.rect(0,y-z*1.05,W,z*1.45);c.clip();c.translate(0,(1-eo(p))*z*1.2);tx(s,x,y,z,col,f,al);c.restore()}
  function head(n,t,s,fg,u){pop(100,150,seg(u,0,.4),()=>{ci(100,150,44,C.am);tx(n,100,170,52,C.ink,'B','center')});rtx(t,170,152,62,fg,'B',seg(u,.1,.5));A(seg(u,.3,.6),()=>tx(s,172,205,28,C.sl,'M'))}

  function S1(u){head(1,'Diserbu 20 PDF Serentak','tapi RAM tetap adem!',C.iv,u);
   const gl=seg(u,3,3.6);A(gl,()=>{c.beginPath();c.moveTo(60,1100);c.lineTo(1020,1100);c.lineTo(760,1240);c.lineTo(320,1240);c.closePath();c.fillStyle=C.i3;c.fill()});
   for(let i=0;i<20;i++){const col=i%5,row=i/5|0,p=eo(seg(u,.5+i*.1,1.1+i*.1)),q=eio(seg(u,3.3+i*.04,4.3+i*.04)),x0=95+col*180+(row%2)*40,y0=320+row*185-(col%2)*14;
    A(p*(1-seg(q,.75,1)),()=>pdf(lr(x0,500,q),lr(y0-(1-p)*520,1150,q),lr(.85,.25,q),[C.cr,C.co,C.am,C.te][i%4]))}
   const sh=u>3.4&&u<4.6?Math.sin(u*45)*3:0;pop(540,1375,seg(u,.2,.7),()=>{c.save();c.translate(sh,0);rr(300,1260,480,230,40,C.co);for(let j=0;j<3;j++){rr(340,1292+j*46,300,28,14,'#2F49D6');ci(700,1306+j*46,10,Math.sin(u*9+j*2)>0?C.am:C.te)}tx('Express.js',540,1476,28,C.iv,'M','center');c.restore()});
   pop(540,1582,seg(u,4.6,5.1),()=>{rr(190,1540,700,84,42,C.am);tx('HTTP 202 Accepted',540,1596,40,C.ink,'M','center')})}
  function S2(u){head(2,'Kasir vs Dapur','Producer → Redis → Worker',C.iv,u);
   pop(250,560,seg(u,.1,.6),()=>{rr(70,400,360,320,36,C.co);rr(110,440,280,130,24,C.i2);ci(250,495,34,C.am);rr(205,530,90,40,20,C.te)});
   const tk=eo(seg(u,.9,1.4));A(tk,()=>{rr(170,lr(560,650,tk),160,90,14,C.am);tx('#07',250,lr(622,712,tk),48,C.ink,'M','center')});A(seg(u,1.2,1.6),()=>tx('Kasir (Producer)',250,785,30,C.sl,'M','center'));
   [['POST /upload',430,C.i3,C.iv,.9],['202 Accepted',550,C.te,C.ink,1.2],['jobId: 07',670,C.am,C.ink,1.5]].forEach(a=>pop(730,a[1]+40,seg(u,a[4],a[4]+.4),()=>{rr(470,a[1],520,a[1]==670?70:90,45,a[2],a[1]==430?C.sl:null,4);tx(a[0],730,a[1]+(a[1]==670?50:60),a[1]==670?34:38,a[3],'M','center')}));
   A(seg(u,1.5,1.9),()=>ln(250,745,250,lr(745,858,seg(u,1.5,1.9)),C.am,8,[4,16]));
   const tw=960*eo(seg(u,.6,1.3));rr(540-tw/2,860,tw,170,85,C.i3,C.sl,4);
   for(let i=0;i<8;i++)pop(162+i*108,945,seg(u,1.5+i*.12,2+i*.12),()=>{rr(120+i*108,895,84,100,18,[C.cr,C.co,C.te,C.am][i%4]);tx(i+1,162+i*108,962,44,C.ink,'M','center')});
   rtx('Redis · antrean',540,1095,40,C.iv,'B',seg(u,2.1,2.5),'center');A(seg(u,2.6,3),()=>ln(800,1100,800,lr(1100,1158,seg(u,2.6,3)),C.am,8,[4,16]));
   pop(800,1310,seg(u,2.5,3),()=>{rr(620,1160,360,300,36,C.te);const b=u>3?Math.abs(Math.sin(u*5))*10:0;ci(800,1262-b,50,C.iv);rr(748,1290-b,104,34,10,C.iv);tx('Dapur: Worker',800,1420,40,C.ink,'B','center')});
   const mv=seg(u,3.1,3.8);A(mv*(1-seg(mv,.8,1)),()=>rr(lr(780,790,mv)-20,lr(1030,1200,eio(mv)),44,56,10,C.cr));
   rtx('Kasir hanya',70,1230,64,C.iv,'B',seg(u,2.9,3.3));rtx('memberi nomor.',70,1305,64,C.iv,'B',seg(u,3.1,3.5));rtx('Masak? Di belakang.',70,1385,42,C.cr,'B',seg(u,3.5,3.9))}
  function S3(u){head(3,'Jatah RAM: 512 MB','kontainer Express.js · Ep. 2',C.iv,u);
   const g=eo(seg(u,.1,.9)),hh=1100*g;rr(150,1430-hh,780,hh,50,C.i3,C.sl,6);
   pop(335,880,seg(u,.7,1.2),()=>{rr(250,430,170,900,34,C.i2)});
   const f=eio(seg(u,1.3,3)),lv=492*f;c.save();c.beginPath();c.roundRect(250,430,170,900,34);c.clip();c.fillStyle=C.te;c.fillRect(250,1330-lv,170,lv);c.restore();
   A(seg(u,1.2,1.6),()=>{const y=Math.max(480,1330-lv+14);tx(Math.round(280*f)+' MB',460,y,56,C.te);A(seg(u,3,3.4),()=>{tx('beban normal',460,y+48,30,C.sl,'M');tx('(contoh ilustrasi)',460,y+88,26,C.sl,'M')})});
   const lw=eo(seg(u,4.2,4.8));ln(220,430,220+680*lw,430,C.am,6,[16,12]);
   pop(560,560,seg(u,4.6,5.1),()=>{tx('512',460,590,130,C.am);tx('MB',460,680,60,C.am)});
   rtx('batas keras',460,740,32,C.sl,'M',seg(u,5.2,5.6));const sh=u>5.8&&u<6.4?Math.sin(u*50)*5:0;c.save();c.translate(sh,0);rtx('lewat = OOM kill',460,790,32,C.cr,'M',seg(u,5.8,6.2));c.restore();
   A(seg(u,1,1.5),()=>tx('Node.js',335,1390,34,C.iv,'M','center'))}
  const SP=[];(()=>{const a=[[110,745],[380,735],[460,610],[520,480],[600,350]];for(let k=0;k<2;k++){const p0=k?a[2]:a[0],p1=k?a[3]:a[1],p2=k?a[4]:a[2];for(let i=0;i<=40;i++){const t=i/40;SP.push([(1-t)*(1-t)*p0[0]+2*(1-t)*t*p1[0]+t*t*p2[0],(1-t)*(1-t)*p0[1]+2*(1-t)*t*p1[1]+t*t*p2[1]])}}})();
  function S4(u){head(4,'Tanpa Gerbang: Meledak','20 PDF dibongkar sekaligus',C.iv,u);
   const m=eio(seg(u,4.4,5.3)),sh=u>3.1&&u<3.9?Math.sin(u*60)*9*(3.9-u):0,pa=seg(u,.1,.6),py=m>0?0:(1-eo(pa))*200;
   A(pa,()=>{c.save();c.translate(sh,py);rr(lr(70,70,m),lr(320,930,m),940,lr(520,170,m),36,C.i3,C.sl,4);
    A(1-seg(u,4.3,4.8),()=>{ln(110,780,970,780,C.sl,4);ln(110,380,970,380,C.am,5,[16,12]);tx('512 MB',970,366,28,C.am,'M','right');
     const n=Math.floor(SP.length*eio(seg(u,.8,3.1)));c.beginPath();for(let i=0;i<n;i++)c.lineTo(SP[i][0],SP[i][1]);c.strokeStyle=C.cr;c.lineWidth=12;c.lineCap='round';c.lineJoin='round';c.stroke();
     pop(610,345,seg(u,3.1,3.6),()=>{star(610,345,34,66,9,C.cr);tx('OOM',610,358,28,C.ink,'M','center')});A(seg(u,2,2.5),()=>tx('20 PDF sekaligus',110,830,28,C.sl,'M'))});
    c.restore()});
   for(let i=0;i<20;i++){const q=eio(seg(u,3+i*.03,3.9+i*.03));pop(180+(i%10)*80,990+(i/10|0)*80,seg(u,.9+i*.06,1.4+i*.06),()=>A(1-seg(q,.6,1),()=>pdf(lr(140+(i%10)*80,520,q),lr(950+(i/10|0)*80,520,q),.5,C.cr)))}
   const lk=seg(u,6.3,7.4),str='concurrency: 2'.slice(0,Math.floor(14*lk));A(m,()=>{tx(str+(lk<1&&Math.sin(u*14)>0?'|':''),540,1043,84,C.am,'M','center')});
   const ph=eo(seg(u,5.4,6.1)),bw=600*eo(seg(u,5.9,6.4));rr(240,1490-250*ph,70,250*ph,22,C.co);rr(770,1490-250*ph,70,250*ph,22,C.co);rr(540-bw/2,1190,bw,64,32,C.co);pop(275,1222,seg(u,6.3,6.7),()=>ci(275,1222,9,C.am));pop(805,1222,seg(u,6.3,6.7),()=>ci(805,1222,9,C.am));
   for(let i=0;i<8;i++)pop(270+i*72,1140,seg(u,6.8+i*.06,7.2+i*.06),()=>pdf(250+i*72,1120,.42,C.cr));
   if(u>7.4)for(let k=0;k<2;k++){const q=((u-7.4)*.9+k*.5)%1;A(Math.min(seg(q,0,.15),1-seg(q,.8,1)),()=>pdf(k?560:420,lr(1215,1440,q),.85,C.te))}
   rtx('maks 2 lewat',540,1565,40,C.iv,'B',seg(u,7.6,8),'center')}
  function S5(u){head(5,'Gerbang concurrency: 2','18 antre · 2 diproses',C.iv,u);
   const qa=eo(seg(u,.1,.6));c.save();c.translate(0,(1-qa)*-200);A(qa,()=>{rr(60,300,960,310,40,C.i3,C.sl,4);tx('Redis · antrean',100,365,38,C.iv,'M');tx(Math.min(18,Math.floor(seg(u,.5,2.3)*18.5))+' mengantre',980,365,38,C.am,'M','right')});c.restore();
   for(let i=0;i<18;i++){const x=100+(i%9)*98,y=410+(i/9|0)*100,ring=u>4.6&&i==0&&((u-4.6)%1.4)<.5;pop(x+40,y+40,seg(u,.5+i*.1,1+i*.1),()=>{rr(x,y,80,80,16,ring?C.am:C.sl);tx(i+3,x+40,y+52,30,ring?C.ink:C.iv,'M','center')})}
   const gw=640*eo(seg(u,2.2,2.8));rr(540-gw/2,640,gw,50,25,C.co);A(seg(u,2.6,3),()=>tx('concurrency: 2',540,676,28,C.iv,'M','center'));
   pop(540,845,seg(u,3,3.5),()=>{rr(150,715,780,260,40,C.te);tx('Worker · maks 2 di memori',540,948,32,C.ink,'B','center')});
   [[270,3.6,'koki 1',370],[630,3.9,'koki 2',730]].forEach(a=>pop(a[0]+40,815,seg(u,a[1],a[1]+.4),()=>{c.save();c.translate(a[0]+40,815);c.rotate(Math.sin(u*9+a[0])*.05);c.translate(-a[0]-40,-815);pdf(a[0],765,1,Math.sin(u*6+a[0])>0?C.co:C.am);c.restore();tx(a[2],a[3],830,30,C.ink,'M')}));
   const ga=eo(seg(u,3.8,4.3));c.save();c.translate(0,(1-ga)*300);A(ga,()=>{rr(60,1060,960,480,36,C.i3,C.sl,4);ln(110,1130,110+860*seg(u,3.9,4.4),1130,C.am,5,[16,12]);tx('512 MB',970,1116,28,C.am,'M','right');ln(110,1298,110+860*eio(seg(u,4.3,6.2)),1298,C.te,12);A(seg(u,4.8,5.2),()=>{tx('V8 Heap ≈ 280 MB',110,1262,42,C.te);tx('rata, tanpa lonjakan · contoh ilustrasi',110,1350,26,C.sl,'M')})});c.restore()}
  function S6(u){head(6,'Ringkasan','pipa ingestion asinkron',C.iv,u);
   const N=[[330,C.cr,'20','20 PDF masuk','dijawab 202, antre di Redis',.3],[560,C.co,'2','concurrency: 2','maks 2 dibongkar bersamaan',.9],[790,C.te,'280','RAM ≈ 280 MB','rata, di bawah 512 MB (ilustrasi)',1.5]];
   N.forEach((n,i)=>{const p=eo(seg(u,n[5],n[5]+.45));c.save();c.translate((1-p)*-300,0);A(p,()=>{rr(100,n[0],880,190,40,C.i3);ci(210,n[0]+95,58,n[1]);tx(n[2],210,n[0]+112,n[2].length>2?38:56,C.ink,'B','center');tx(n[3],310,n[0]+88,46,C.iv);tx(n[4],312,n[0]+138,26,C.sl,'M')});c.restore();
    if(i<2)A(seg(u,n[5]+.4,n[5]+.7),()=>{ln(540,n[0]+196,540,n[0]+228,C.am,6);c.beginPath();c.moveTo(526,n[0]+218);c.lineTo(540,n[0]+232);c.lineTo(554,n[0]+218);c.fillStyle=C.am;c.fill()})});
   const bp=eo(seg(u,2.1,2.6));A(bp,()=>{rr(100,1040,880,290,40,C.i3);tx('Gagal? Coba lagi: exponential backoff',140,1100,36,C.iv);[40,70,110,160].forEach((h,i)=>{const q=eo(seg(u,2.4+i*.18,2.9+i*.18));rr(180+i*180,1270-h*q,110,h*q,16,C.am);tx(['1s','2s','4s','8s'][i],235+i*180,1312,26,C.sl,'M','center')});tx('contoh ilustrasi',940,1150,24,C.sl,'M','right')});
   pop(540,1460,seg(u,3.2,3.7),()=>{rr(100,1380,880,160,40,C.am);tx('Antrean boleh panjang,',540,1452,50,C.ink,'B','center');tx('RAM tetap pendek.',540,1514,50,C.ink,'B','center')})}

  const CUES=[[.64,3.38,["Lalu bagaimana kalau","tiba-tiba ada 20 pengguna"]],[3.42,5.9,["mengunggah berkas PDF","berukuran besar","di detik yang sama?"]],[7.22,9.96,["Di sinilah letak","keindahan BullMQ","Worker kita."]],[11.02,13.7,["Ingat di Episode 2,","kontainer Express.js kita"]],[13.84,16.62,["hanya diberi jatah","anggaran RAM maksimal","512 megabita."]],[18.34,21.88,["Agar memori Node.js","tidak meledak akibat","membongkar 20 PDF","sekaligus,"]],[22.3,25.86,["kita kunci konfigurasi","Worker pada angka","concurrency sama dengan 2."]],[26.98,30.2,["Artinya, seberapa banyak","pun dokumen yang","membanjiri antrean Redis,"]],[30.46,34.34,["koki Worker kita","hanya akan memproses","maksimal dua berkas PDF","secara bersamaan,"]],[35.02,38.32,["sementara sisanya","mengantre dengan tertib","tanpa menyentuh","RAM aplikasi."]]];
  const CH=[];CUES.forEach((q,ci_)=>{const L=q[2],tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const PAL=[[C.iv,C.am],[C.iv,C.cr],[C.iv,C.am],[C.iv,C.pe],[C.iv,C.cr],[C.iv,C.am]],HI=/\d|concurrency|RAM|BullMQ|PDF|Redis|MB|megabita|Node/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+FB;const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}c.translate(dx,dy);tx(w,x,y,z,HI.test(w)?pf:bc,'B','left');c.restore();x+=ww+gap*s});
   rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}

  const SC=[S1,S2,S3,S4,S5,S6];
  function scene(i,t){const u=t-B[i],d=B[i+1]-B[i];drawThemeBg(c,W,H);c.save();const z=1+.05*Math.sin(Math.PI*seg(u,.6,d-.6));c.translate(540,860);c.scale(z,z);c.translate(-540,-860);c.translate(43,36);c.scale(.92,.92);SC[i](u);c.restore();cap(t,i)}
  function trPath(i,p){c.beginPath();const e=eio(p);if(i==2){const base=H*(1-e)-40,A_=70*Math.sin(Math.PI*p);c.moveTo(0,H+10);for(let x=0;x<=W;x+=30)c.lineTo(x,base+A_*Math.sin(x/90+p*9));c.lineTo(W,H+10)}else if(i==4){const L=e*(W+H*.5);c.moveTo(0,0);c.lineTo(L,0);c.lineTo(L-H*.5,H);c.lineTo(0,H)}else{const o={1:[540,1180],3:[600,880],5:[540,1100]}[i];c.arc(o[0],o[1],2300*e,0,7)}c.closePath()}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,D-.001);let i=B.findIndex((b,k)=>t>=b&&t<B[k+1]);if(i<0)i=5;const u=t-B[i];
   if(i>0&&u<.5){scene(i-1,t);const p=u/.5;c.save();trPath(i,p);c.clip();scene(i,t);c.restore();trPath(i,p);c.strokeStyle=C.am;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.stroke()}else scene(i,t)}

  const EV=[];const ev=(si,u,k,a)=>EV.push([B[si]+u,k,a]);
  [[1,'whoosh'],[2,'rise'],[3,'whoosh'],[4,'slide'],[5,'whoosh']].forEach(a=>ev(a[0],0,a[1]));ev(2,.2,'whoosh');ev(4,.1,'zip');ev(5,.2,'zip');
  for(let i=0;i<20;i+=2)ev(0,.9+i*.1,'tap',1+i*.03);ev(0,3.3,'whomp');ev(0,4.6,'stamp');
  ev(1,.1,'boop');ev(1,.9,'tap');ev(1,.9,'blip');ev(1,1.2,'blip',1.2);ev(1,1.5,'blip',1.4);ev(1,2.1,'slide');ev(1,2.5,'boop');ev(1,3.1,'zip');
  ev(2,.2,'slide');ev(2,.7,'boop');ev(2,1.3,'rise',1.6);ev(2,4.6,'ding');ev(2,5.8,'err');ev(2,5.8,'thud');
  ev(3,.9,'rise',2);ev(3,3.1,'glitch');ev(3,3.1,'thud');ev(3,3.2,'err');ev(3,5.4,'slide');ev(3,5.9,'snap');for(let i=0;i<14;i++)ev(3,6.3+i*.075,'tick');ev(3,7.4,'ding',1.2);ev(3,7.6,'stamp');
  ev(4,.2,'slide');for(let i=0;i<18;i+=2)ev(4,.5+i*.1,'ding',.7+i*.04);ev(4,2.2,'snap');ev(4,3,'boop');ev(4,3.6,'tap');ev(4,3.9,'tap',1.2);ev(4,3.9,'slide');ev(4,4.3,'zip');
  ev(5,.3,'pop');ev(5,.9,'pop',1.2);ev(5,1.5,'pop',1.4);ev(5,2.1,'slide');for(let i=0;i<4;i++)ev(5,2.4+i*.18,'tap',1+i*.15);ev(5,3.2,'stamp');ev(5,3.5,'sparkle');ev(5,3.6,'chime');
  const AC=['tap','blip','zip','tap','snap','blip'];CH.forEach((q,i)=>{ev(0,q[0],AC[i%6],.9+(i%3)*.15);if(HI.test(q[2]))ev(0,q[0]+.12,'ding',1.2)});EV.sort((a,b)=>a[0]-b[0]);

  function scheduleSfx(ctx,out,from,base){
    const bus=ctx.createGain();bus.gain.value=.5;bus.connect(out);const nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
    EV.forEach(([t,k,a])=>{if(t<from||t>D)return;const T=base+t-from,m=a||1;
     const osc=(ty,f1,f2,d,v,dl=0)=>{const o=ctx.createOscillator(),g=ctx.createGain(),t0=T+dl;o.type=ty;o.frequency.setValueAtTime(f1,t0);o.frequency.exponentialRampToValueAtTime(Math.max(20,f2),t0+d);g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(v,t0+.008);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(bus);o.start(t0);o.stop(t0+d+.05)};
     const nz=(f1,f2,d,v,q)=>{const n=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();n.buffer=nb;f.type='bandpass';f.Q.value=q||1;f.frequency.setValueAtTime(f1,T);f.frequency.exponentialRampToValueAtTime(f2,T+d);g.gain.setValueAtTime(0,T);g.gain.linearRampToValueAtTime(v,T+.02);g.gain.exponentialRampToValueAtTime(.001,T+d);n.connect(f);f.connect(g);g.connect(bus);n.start(T);n.stop(T+d+.05)};
     ({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.07),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,a||.8,.4,2),err:()=>{osc('sawtooth',110,110,.4,.1);osc('sawtooth',117,117,.4,.1)},chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),
     boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},whomp:()=>osc('sine',90,45,.5,.9),slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()});
  }
  return { DUR: D, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 5 (Exact port from rag-scene-5.html)
// ============================================================================
function createScene5() {
  const W=1080,H=1920,TR=.5,K={ink:'#172235',ink2:'#0E1727',ink3:'#1d2b45',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A',sa:'#E8E7DC'};
  const FB="'Bricolage Grotesque',system-ui,sans-serif",FM="'JetBrains Mono',ui-monospace,monospace";
  let c,BG='#0e1626',D=33.8646,B=[0,6.5,14.2,20.9,29.8,D],showCap=true;
  const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>clamp((u-a)/(b-a)),eo=x=>1-(1-x)**3,eio=x=>x<.5?4*x**3:1-(-2*x+2)**3/2,eb=x=>1+2.70158*(x-1)**3+1.70158*(x-1)**2,lr=(a,b,t)=>a+(b-a)*t;
  const hx=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),mixc=(a,b,t)=>{const A=hx(a),B2=hx(b);return `rgb(${A.map((v,i)=>Math.round(lr(v,B2[i],t))).join(',')})`};
  const rr=(x,y,w,h,r,f,s,lw=6)=>{c.beginPath();c.roundRect(x,y,w,h,r);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw;c.stroke()}};
  const tx=(s,x,y,z,col,al='left',m=0)=>{c.font=`${m?700:800} ${z}px ${m?FM:FB}`;c.fillStyle=col;c.textAlign=al;c.fillText(s,x,y)};
  const circ=(x,y,r,f,s,lw=6)=>{c.beginPath();c.arc(x,y,r,0,7);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw;c.stroke()}};
  const ln=(p,col,lw=8,d)=>{c.beginPath();p.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.strokeStyle=col;c.lineWidth=lw;c.lineCap=c.lineJoin='round';c.setLineDash(d||[]);c.stroke();c.setLineDash([])};
  const ar=(x1,y1,x2,y2,col,lw=8,d)=>{ln([[x1,y1],[x2,y2]],col,lw,d);const a=Math.atan2(y2-y1,x2-x1);c.beginPath();c.moveTo(x2-26*Math.cos(a-.5),y2-26*Math.sin(a-.5));c.lineTo(x2,y2);c.lineTo(x2-26*Math.cos(a+.5),y2-26*Math.sin(a+.5));c.strokeStyle=col;c.lineWidth=lw;c.setLineDash([]);c.stroke()};
  const chip=(x,y,w,l,f,t=K.ink)=>{rr(x,y,w,68,34,f);tx(l,x+w/2,y+45,30,t,'center',1)};
  const head=(n,t,s)=>{circ(110,150,46,K.am);tx(n,110,170,56,K.ink,'center');tx(t,180,142,60,K.iv);tx(s,180,196,28,K.sl,'left',1)};
  const chk=(x,y,col,s=1)=>ln([[x-14*s,y],[x-3*s,y+12*s],[x+16*s,y-12*s]],col,8*s);
  function tk(x,y,w,h,f,l,z=44){const g=Math.min(18,h*.14),n=6,d=w/n;c.beginPath();c.moveTo(x,y+14);c.arcTo(x,y,x+14,y,14);c.lineTo(x+w-14,y);c.arcTo(x+w,y,x+w,y+14,14);c.lineTo(x+w,y+h);for(let i=n;i>0;i--){c.lineTo(x+d*i-d/2,y+h-g);c.lineTo(x+d*(i-1),y+h)}c.closePath();c.fillStyle=f;c.fill();circ(x,y+h*.4,Math.min(12,h*.09),BG);circ(x+w,y+h*.4,Math.min(12,h*.09),BG);if(l)tx(l,x+w/2,y+h*.62,z,K.ink,'center')}
  function gear(x,y,r,f,rot){c.save();c.translate(x,y);c.rotate(rot);c.beginPath();for(let i=0;i<8;i++){c.rotate(Math.PI/4);c.rect(-r*.16,-r*1.2,r*.32,r*.42)}c.fillStyle=f;c.fill();c.restore();circ(x,y,r,f);circ(x,y,r*.4,BG)}
  function pop(u,a,cx_,cy,fn,d=.38){const p=seg(u,a,a+d);if(p<=0)return;c.save();c.translate(cx_,cy);const s=Math.max(.01,eb(p));c.scale(s,s);c.translate(-cx_,-cy);c.globalAlpha*=Math.min(1,p*4);fn();c.restore()}
  function sl(u,a,dx,dy,fn,d=.6){const p=eo(seg(u,a,a+d));if(p<=0)return;c.save();c.translate(dx*(1-p),dy*(1-p));c.globalAlpha*=p;fn();c.restore()}
  const POLL=[1.2,2.4,3.6,4.8,6.0,7.1],PV=[15,30,45,60,80,100];
  const SC=[
  u=>{sl(u,.1,0,20,()=>tx('SERI RAG · BAGIAN 4 DARI 10',60,110,26,K.sl,'left',1),.4);
   sl(u,.25,0,60,()=>tx('Sudah jadi',60,290,150,K.iv),.5);sl(u,.6,0,60,()=>tx('belum?',60,440,150,K.am),.5);
   sl(u,.3,0,900,()=>{rr(250,560,600,960,80,K.ink3);circ(550,590,10,K.sl);rr(280,620,540,840,50,K.iv)},.8);
   pop(u,1.2,550,845,()=>{rr(320,680,460,330,36,'#fff',K.sa,4);ln([[490,730],[740,730]],K.sa,14);ln([[490,770],[690,770]],K.sa,14)});
   pop(u,1.6,465,864,()=>chip(350,830,230,'PENDING',K.am));
   sl(u,1.9,0,10,()=>{rr(350,930,400,22,11,K.sa);c.save();c.beginPath();c.roundRect(350,930,400,22,11);c.clip();rr(350+((u*260)%520)-120,930,120,22,11,K.co);c.restore()},.3);
   const fp=eo(seg(u,1.0,1.8)),mp=eio(seg(u,2.0,3.0));
   if(mp>=1){rr(350,710,110,76,18,K.cr);tx('PDF',405,762,36,K.iv,'center',1)}else if(u>1){c.save();c.translate(lr(lr(-200,190,fp),405,mp),lr(lr(1150,950,fp),748,mp));c.rotate(lr(lr(.6,-.14,fp),0,mp));const w=lr(240,110,mp),h=lr(200,76,mp);tk(-w/2,-h/2,w,h,mixc(K.am,K.cr,mp),mp<.5?'#047':'PDF',lr(64,36,mp));c.restore();
    c.globalAlpha=fp*(1-seg(u,2,2.4));tx('NOMOR ANTREAN',190,1110,22,K.am,'center',1);c.globalAlpha=1}
   pop(u,3.3,690,1160,()=>{c.save();c.translate(690,1160);const s=1+.05*Math.sin(u*7);c.scale(s,s);circ(0,0,96,K.cr);tx('?',0,50,150,K.iv,'center');c.restore()});
   sl(u,4.0,0,20,()=>tx('tidak ada kabar…',550,1400,34,K.sl,'center',1),.4)},
  u=>{sl(u,.05,0,-40,()=>head(1,'Worker ambil tugas','Redis → PostgreSQL'),.4);
   sl(u,.2,0,-200,()=>{rr(70,300,940,300,40,K.ink3,K.sl,4);tx('REDIS · ANTREAN BULLMQ',110,352,26,K.pe,'left',1)},.6);
   pop(u,.55,220,495,()=>tk(120,430,200,130,K.am,'#3'));pop(u,.65,460,495,()=>tk(360,430,200,130,K.am,'#2'));
   const e1=eo(seg(u,1.2,1.9)),m=eio(seg(u,2.1,3.0)),tc=[lr(800,560,m),lr(485,760,m)],cl=u<2.1?[lr(660,800,e1),lr(720,490,e1)]:[lr(800,560,m),lr(490,760,m)];
   pop(u,.75,800,485,()=>{c.save();c.translate(tc[0],tc[1]);c.scale(lr(1,.6,m),lr(1,.6,m));tk(-100,-65,200,130,K.am,'#1');c.restore()});
   if(u>1.2){ln([[640,740],cl],K.iv,14);circ(cl[0],cl[1],26,K.iv);circ(cl[0],cl[1],10,K.am)}
   sl(u,.5,-700,0,()=>{rr(300,700,460,240,50,K.co);rr(350,745,360,110,30,K.ink);const d=4*Math.sin(u*3);circ(450+d,800,20,K.te);circ(610+d,800,20,K.te);circ(380,900,12,K.am);circ(420,900,12,K.iv);gear(700,885,48,K.am,u*2)},.7);
   sl(u,2.4,0,-30,()=>{ar(530,960,530,1070,K.am,10);tx('ambil 1 tugas',565,1030,26,K.iv,'left',1)},.4);
   sl(u,2.6,0,600,()=>{rr(70,1090,940,400,44,K.ink2,K.sl,4);tx('documents · PostgreSQL',110,1155,28,K.sl,'left',1);tx('id',130,1225,26,K.sl,'left',1);tx('status',400,1225,26,K.sl,'left',1)},.8);
   pop(u,3.6,540,1305,()=>{rr(100,1250,880,110,28,K.ink3);tx('doc_8f2a',130,1320,30,K.iv,'left',1)},.4);
   pop(u,4.2,540,1305,()=>chip(380,1271,320,'PENDING',K.am),.3);
   const wp=eio(seg(u,5.8,6.6));if(wp>0){c.save();c.beginPath();c.rect(380,1260,320*wp,90);c.clip();chip(380,1271,320,'PROCESSING',K.co,K.iv);c.restore();if(wp<1)rr(380+320*wp-4,1258,8,94,4,K.am)}
   const s='ENUM ingestion_status';tx(s.slice(0,Math.floor(seg(u,4.6,5.5)*s.length)),300,1430,28,K.am,'left',1)},
  u=>{sl(u,.05,0,-40,()=>head(2,'Progres per kumpulan','BullMQ · updateProgress',1),.4);sl(u,.2,0,10,()=>tx('KUMPULAN POTONGAN TEKS',70,285,24,K.sl,'left',1),.3);
   const dn=(u>1)+(u>1.7)+(u>2.4);
   for(let i=0;i<7;i++){const x=70+i*138;pop(u,.3+i*.06,x+55,360,()=>{if(i<dn){rr(x,310,110,100,24,K.te);chk(x+55,360,K.ink,1.1)}else if(i==dn){const q=1+.04*Math.sin(u*8);c.save();c.translate(x+55,360);c.scale(q,q);rr(-55,-50,110,100,24,K.co);c.restore()}else rr(x,310,110,100,24,null,K.sl,4)})}
   const v=15*(eo(seg(u,1,1.4))+eo(seg(u,1.7,2.1))+eo(seg(u,2.4,2.8)));
   if(u>3.2){const q=eo(seg(u,3.2,3.6));ar(70+3*138+55,425,70+3*138+55,425+105*q,K.am,8)}
   sl(u,3.3,0,60,()=>{rr(70,545,940,200,36,K.ink2,K.sl,4);tx('dipanggil tiap satu kumpulan selesai',110,708,24,K.sl,'left',1)},.4);
   const a='await job.updateProgress(';c.font=`700 40px ${FM}`;const w1=c.measureText(a).width,n=Math.floor(seg(u,3.4,4.5)*a.length);tx(a.slice(0,n),110,650,40,K.iv,'left',1);
   if(u>=4.5){pop(u,4.8,110+w1+24,640,()=>tx('45',110+w1,650,40,K.am,'left',1),.3);if(u>4.8)tx(')',110+w1+c.measureText('45').width,650,40,K.iv,'left',1)}
   pop(u,.9,320,1080,()=>{circ(320,1080,190,null,K.ink3,44);if(v>0){c.beginPath();c.arc(320,1080,190,-Math.PI/2,-Math.PI/2+Math.PI*2*v/100);c.strokeStyle=K.co;c.lineWidth=44;c.lineCap='round';c.stroke()}tx(String(Math.round(v)),320,1130,150,K.iv,'center');tx('%',470,1060,48,K.sl,'center',1)},.5);
   pop(u,.6,770,1000,()=>{gear(770,1000,110,K.co,u*1.2);gear(900,1130,60,K.am,-u*2.4)},.5);pop(u,1.0,770,1294,()=>chip(610,1260,320,'PROCESSING',K.co,K.iv));
   sl(u,1.2,0,10,()=>tx('contoh ilustrasi',540,1450,26,K.sl,'center',1),.3)},
  u=>{sl(u,.05,0,-40,()=>head(3,'UI memantau status','Next.js · polling berkala'),.4);
   const pl='GET /api/v1/documents/:id/status';sl(u,.3,0,-30,()=>{rr(70,290,940,100,50,K.ink3,K.sl,4);c.font=`700 34px ${FM}`;tx(pl.slice(0,Math.floor(seg(u,.5,1.4)*pl.length)),540-c.measureText(pl).width/2,355,34,K.iv,'left',1)},.4);
   let bv=0,pj=0,pr=0;POLL.forEach((t,k)=>{const f=(PV[k]-pr)*eio(seg(u,t+.7,t+1.3));bv+=f;pr=PV[k];if(u>=t+.7)pj=PV[k]});
   if(u>1){ar(150,900,150,410,K.pe,8,[16,12]);ar(930,410,930,900,K.co,8)}
   POLL.forEach(t=>{const q=u-t;if(q>0&&q<.7){const p=q/.7;let x,y;if(p<.5){x=150;y=lr(900,410,eo(p*2))}else{x=930;y=lr(410,900,eo(p*2-1))}if(p>=.45&&p<.55)x=lr(150,930,seg(p,.45,.55));circ(x,p>=.45&&p<.55?390:y,16,K.am,K.ink,4)}});
   if(u>1.9)pop(u,1.9,540,525,()=>{rr(250,440,580,170,32,K.iv);tx('{ "status": "PROCESSING",',290,515,30,K.ink,'left',1);tx('  "progress": '+pj+' }',290,565,30,K.co,'left',1)},.4);
   if(u>1){circ(540,720,52,K.iv,K.ink,6);const a2=u*2.2;ln([[540,720],[540+30*Math.sin(a2),720-30*Math.cos(a2)]],K.ink,6);tx('tiap beberapa detik',540,830,26,K.iv,'center',1)}
   sl(u,.3,0,700,()=>{rr(70,900,940,560,52,K.iv);rr(120,960,90,110,20,K.cr);tx('PDF',165,1026,28,K.iv,'center',1);tx('laporan.pdf',240,1012,44,K.ink);tx('contoh ilustrasi',240,1054,24,K.sl,'left',1);chip(660,975,300,'PROCESSING',K.co,K.iv);tx(Math.round(bv)+'%',960,1180,90,K.ink,'right');rr(120,1210,840,56,28,K.sa);if(bv>1){c.save();c.beginPath();c.roundRect(120,1210,840,56,28);c.clip();rr(120,1210,840*bv/100,56,28,K.co);c.restore()}tx('0',120,1310,24,K.sl,'left',1);tx('100',960,1310,24,K.sl,'right',1)},.8)},
  u=>{sl(u,.05,0,-40,()=>head(4,'Mesin status dokumen','ENUM ingestion_status'),.3);
   pop(u,.1,190,354,()=>chip(60,320,260,'PENDING',K.am));pop(u,.2,525,354,()=>chip(370,320,310,'PROCESSING',K.co,K.iv));pop(u,.3,870,354,()=>chip(730,320,280,'COMPLETED',K.te));
   sl(u,.35,0,0,()=>{ar(320,354,368,354,K.iv,7);ar(680,354,728,354,K.iv,7)},.3);
   const g=eio(seg(u,.2,.7));
   if(u>.9){const q=eo(seg(u,.9,1.5));ar(525,392,525,392+108*q,K.cr,7,[14,10])}pop(u,1.5,525,544,()=>chip(370,510,310,'FAILED',K.cr,K.iv));pop(u,1.7,860,555,()=>{ar(682,544,712,544,K.cr,6);rr(715,490,295,130,26,K.ink3,K.sl,4);tx('error_message',735,545,24,K.cr,'left',1);tx('"timeout…"',735,590,24,K.iv,'left',1)});
   sl(u,0,0,0,()=>{rr(60,720,950,520,52,'#fff',K.sa,4);rr(110,770,80,100,18,K.cr);tx('laporan.pdf',215,830,40,K.ink);chip(710,770,250,g<.5?'PROCESSING':'COMPLETED',mixc(K.co,K.te,g),K.iv);tx('100%',960,980,80,mixc(K.co,'#0E8E75',g),'right');rr(110,1000,850,56,28,mixc(K.co,K.te,g));if(g>.6)chk(915,1028,K.iv,.9*eo(seg(g,.6,1)))},.1);
   sl(u,2.0,0,40,()=>{rr(110,1160,850,90,45,K.sa);tx('Tanyakan dokumenmu…',150,1218,32,K.sl);circ(915,1205,34,K.co)},.4);
   const s='Siap ditanya';tx(s.slice(0,Math.floor(seg(u,2.1,2.7)*s.length)),110,1130,28,K.ink,'left',1);
   sl(u,2.4,0,400,()=>{rr(60,1290,950,240,44,K.am);tx('Transparansi ke Pengguna:',535,1370,54,K.ink,'center');tx('Lacak PENDING → PROCESSING → COMPLETED',535,1425,29,K.ink,'center',1);tx('Secara Real-Time!',535,1495,54,K.ink,'center')},.6)}
  ];
  const PAL=[[K.iv,K.am],[K.iv,K.cr],[K.iv,K.am],[K.iv,K.pe],[K.iv,K.te]];
  const TS=[0,p=>{const a=new Path2D();a.arc(678,1103,p*2400,0,7);return{cl:a,rim:a}},
  p=>{const y=x=>H*(1-1.1*p)+60*Math.sin(x/90+p*6)*Math.sin(Math.PI*p),a=new Path2D(),r=new Path2D();for(let x=0;x<=W;x+=20){const yy=y(x);if(x){a.lineTo(x,yy);r.lineTo(x,yy)}else{a.moveTo(0,yy);r.moveTo(0,yy)}}a.lineTo(W,H);a.lineTo(0,H);a.closePath();return{cl:a,rim:r}},
  p=>{const s=p*(W+.6*H+100),a=new Path2D(),r=new Path2D();a.moveTo(0,0);a.lineTo(s,0);a.lineTo(s-.6*H,H);a.lineTo(0,H);a.closePath();r.moveTo(s,0);r.lineTo(s-.6*H,H);return{cl:a,rim:r}},
  p=>{const a=new Path2D();a.arc(490,1175,p*2400,0,7);return{cl:a,rim:a}}];

  const CUES=[[.6,3.08,['Karena proses ekstraksi kini','berjalan di latar belakang,']],[3.26,5.7,['kita harus memberi kepastian','visual ke layar pengguna.']],[6.76,8.84,['Begitu Worker mengambil satu','tugas dari Redis,']],[9.12,12.0,['ia langsung mengubah kolom','status dokumen di PostgreSQL']],[12.26,13.5,['dari PENDING menjadi PROCESSING.']],[14.6,17.42,['Setiap kali Worker selesai','memproses sekumpulan potongan teks,']],[17.58,20.12,['ia memanggil fungsi','updateProgress di BullMQ.']],[21.32,25.24,['Antarmuka Next.js cukup memantau','endpoint status dokumen secara berkala']],[25.26,29.08,['untuk menampilkan bilah persentase','yang bergerak mulus dari','nol hingga seratus persen,']],[29.98,31.66,['lalu berubah hijau menjadi COMPLETED']],[31.82,33.32,['saat seluruh vektor siap digunakan.']]];
  const CH=[];CUES.forEach(([s,e,ls])=>{const tot=ls.reduce((a,l)=>a+l.length,0);let t=s;ls.forEach((l,i)=>{const d=(e-s)*l.length/tot,en=i==ls.length-1?e:t+d-.06;CH.push({s:t,e:en,w:l.split(' ')});t+=d})});
  const KEY=/^(PENDING|PROCESSING|COMPLETED|updateProgress|PostgreSQL|Redis|BullMQ|Next\.js|Worker|status)/;
  function cap(t,si){if(!showCap)return;const ch=CH.find(h=>t>=h.s&&t<h.e);if(!ch)return;const[bc,pf]=PAL[si];c.font=`800 72px ${FB}`;const g=22,w0=ch.w.map(w=>c.measureText(w).width),tot=w0.reduce((a,b)=>a+b)+g*(ch.w.length-1),s=Math.min(1,980/tot),z=72*s,ex=seg(t,ch.e-.18,ch.e);let x=(W-tot*s)/2;const x0=x,st=(Math.floor(ch.s*10)+CH.indexOf(ch))%4;
   ch.w.forEach((w,j)=>{const pw=eo(seg(t-ch.s-j*.07,0,.28));let dx=0,dy=0,sc=1;if(st==0)dy=(1-pw)*40;else if(st==1)dy=-(1-pw)*40;else if(st==2)dx=-(1-pw)*60;else sc=.6+.4*eb(pw);dy-=ex*50;c.save();c.globalAlpha=pw*(1-ex);const wc=w0[j]*s/2;c.translate(x+dx+wc,1660+dy);c.scale(sc,sc);c.font=`800 ${z}px ${FB}`;c.fillStyle=KEY.test(w)?pf:bc;c.textAlign='center';c.fillText(w,0,0);c.restore();x+=w0[j]*s+g*s});
   c.globalAlpha=1-ex;rr(x0,1694,tot*s*clamp((t-ch.s)/(ch.e-ch.s)),8,4,pf);c.globalAlpha=1}
  function renderScene(i,t){const u=t-B[i];BG='#0e1626';c.globalAlpha=1;drawThemeBg(c,W,H);c.save();c.translate(43,36);c.scale(.92,.92);const z=1+.035*seg(u,0,B[i+1]-B[i]);c.translate(540,960);c.scale(z,z);c.translate(-540,-960);SC[i](u);c.restore();cap(t,i)}
  function render(ctx,t,sub){c=ctx;showCap=sub;t=clamp(t,0,D-.001);c.globalAlpha=1;let i=0;while(i<4&&t>=B[i+1])i++;
   if(i>0&&t<B[i]+TR){const p=seg(t,B[i],B[i]+TR),{cl,rim}=TS[i](eio(p));renderScene(i-1,t);c.save();c.clip(cl);renderScene(i,t);c.restore();c.strokeStyle=K.am;c.lineWidth=22*Math.sin(Math.PI*p);c.lineCap='round';c.stroke(rim)}else renderScene(i,t)}

  const rel=(b,l)=>l.map(([u,k,a=1,v=1])=>[b+u,k,a,v]);
  const SF=[...rel(0,[[.25,'tap'],[.6,'tap',1.2],[.3,'slide'],[1.0,'whoosh'],[1.2,'boop'],[1.6,'blip'],[1.9,'blip',1.3],[2.1,'zip'],[3.0,'snap'],[3.3,'whomp']]),
  ...rel(B[1],[[-.05,'whoosh'],[.2,'slide'],[.55,'ding',.8],[.65,'ding',.9],[.75,'ding',1],[1.2,'tap'],[2.1,'snap'],[2.4,'slide',.7],[2.6,'slide'],[3.0,'thud'],[3.6,'snap'],[4.2,'blip'],[5.8,'zip'],[6.6,'stamp']]),
  ...rel(B[2],[[-.1,'rise'],[-.05,'whoosh',1.2],[.3,'tap'],[1.0,'ding',1],[1.7,'ding',1.25],[2.4,'ding',1.5],[3.3,'slide'],[4.8,'ding',1.8],[4.8,'sparkle']]),
  ...rel(B[3],[[-.05,'slide'],[-.03,'zip'],[.3,'slide'],[1.0,'tap'],...POLL.flatMap((t,k)=>[[t,'blip',1+k*.1],[t+.7,'tap',.9+k*.1]]),[8.4,'sparkle']]),
  ...rel(B[4],[[-.05,'whomp',.8],[-.03,'whoosh'],[.2,'zip'],[.5,'ding'],[.9,'snap'],[1.5,'glitch'],[2.0,'tap'],[2.4,'stamp'],[2.9,'sparkle'],[3.1,'chime']]),
  ...CH.map((h,i)=>[h.s,'tap',.9+(i%4)*.08,.4])];

  function scheduleSfx(ac,out,from,now){
    const nbuf=ac.createBuffer(1,ac.sampleRate,ac.sampleRate),nd=nbuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
    const SV=.45;const o=(w,ty,f1,f2,d,v,dl=0)=>{const q=ac.createOscillator(),g=ac.createGain();q.type=ty;q.frequency.setValueAtTime(f1,w+dl);q.frequency.exponentialRampToValueAtTime(f2,w+dl+d);g.gain.setValueAtTime(v*SV,w+dl);g.gain.exponentialRampToValueAtTime(.0001,w+dl+d);q.connect(g).connect(out);q.start(w+dl);q.stop(w+dl+d+.02)};
    const n=(w,f1,f2,d,v,Q=1)=>{const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=nbuf;f.type='bandpass';f.Q.value=Q;f.frequency.setValueAtTime(f1,w);f.frequency.exponentialRampToValueAtTime(f2,w+d);g.gain.setValueAtTime(.0001,w);g.gain.linearRampToValueAtTime(v*SV,w+d*.3);g.gain.exponentialRampToValueAtTime(.0001,w+d);s.connect(f).connect(g).connect(out);s.start(w);s.stop(w+d+.02)};
    const K2={boop:(w,a,v)=>o(w,'sine',330*a,520*a,.14,.6*v),tap:(w,a,v)=>o(w,'triangle',700*a,300*a,.07,.4*v),blip:(w,a,v)=>o(w,'square',900*a,1200*a,.07,.14*v),zip:(w,a,v)=>n(w,400,3200,.26,.5*v,2),snap:(w,a,v)=>{n(w,4000,1200,.05,.6*v);o(w,'square',200,80,.05,.25*v)},ding:(w,a,v)=>{o(w,'sine',880*a,880*a,.5,.4*v);o(w,'sine',1320*a,1320*a,.4,.12*v)},sparkle:(w,a,v)=>[1500,2000,2500,3200].forEach((f,i)=>o(w,'sine',f,f,.16,.14*v,i*.06)),whoosh:(w,a,v)=>n(w-.1,200,2600*a,.5,.6*v),thud:(w,a,v)=>o(w,'sine',120,45,.22,.9*v),rise:(w,a,v)=>{o(w,'sine',300,1200,.6,.3*v);o(w,'triangle',600,2400,.6,.1*v)},slide:(w,a,v)=>n(w,900*a,300,.3,.4*v,3),stamp:(w,a,v)=>{o(w,'sine',140,50,.2,.9*v);n(w,3000,900,.05,.5*v)},chime:(w,a,v)=>[1,1.5,2].forEach((m,i)=>o(w,'sine',784*m,784*m,.7,.3*v,i*.12)),glitch:(w,a,v)=>{for(let i=0;i<5;i++)o(w,'square',300+Math.random()*1500,300+Math.random()*1500,.03,.12*v,i*.035)},whomp:(w,a,v)=>o(w,'sine',200*a,60,.4,.8*v)};
    SF.forEach(([t,k,a,v])=>{if(t<from||t>D)return;K2[k](now+t-from,a,v)});
  }
  const CH_FLAT = CH.map(h => [h.s, h.e, h.w.join(' ')]);
  return { DUR: D, CH: CH_FLAT, render, scheduleSfx };
}

// ============================================================================
// SCENE 6 (Exact port from rag-scene-6.html)
// ============================================================================
function createScene6() {
  const W=1080,H=1920,DUR=41.053,B=[0,10.5,21,27,37,DUR];
  const K={ink:'#172235',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A',sa:'#E8E7DC'},FB='"Bricolage Grotesque",sans-serif',FM='"JetBrains Mono",monospace';
  let c,SUB=true;
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a)),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2);
  function pop(cx,cy,p,fn){if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(p);c.scale(s,s);c.translate(-cx,-cy);fn();c.restore()}
  function A(a,fn){if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()}
  function R(x,y,w,h,r,f,s,lw){if(w<=0)return;c.beginPath();c.roundRect(x,y,w,h,Math.min(r,w/2,h/2));if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.lineCap='round';c.stroke()}}
  function Ci(x,y,r,f){c.beginPath();c.arc(x,y,r,0,7);c.fillStyle=f;c.fill()}
  function T(s,x,y,z,col,al,f,w){c.font=(w||800)+' '+z+'px '+(f||FB);c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='alphabetic';c.fillText(s,x,y)}
  function L(pts,col,lw,p){p=p==null?1:p;if(p<=0)return;c.beginPath();c.moveTo(pts[0][0],pts[0][1]);let tot=0;for(let i=1;i<pts.length;i++)tot+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);let rem=tot*p;for(let i=1;i<pts.length;i++){const d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);if(rem>=d){c.lineTo(pts[i][0],pts[i][1]);rem-=d}else{const f=rem/d;c.lineTo(pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f);break}}c.strokeStyle=col;c.lineWidth=lw;c.lineCap='round';c.lineJoin='round';c.stroke()}
  function rtx(s,x,y,z,col,al,f,p){if(p<=0)return;c.save();c.beginPath();c.rect(0,y-z*1.05,W,z*1.45);c.clip();c.translate(0,(1-eo(p))*z*1.2);T(s,x,y,z,col,al,f);c.restore()}
  function hdr(u,n,t,sub,bc,tc,nc){pop(110,170,seg(u,.1,.5),()=>{Ci(110,170,46,bc);T(n,110,190,54,nc,'center')});rtx(t,184,182,58,tc,'left',FB,seg(u,.25,.7));A(seg(u,.5,.9),()=>T(sub,184,232,30,K.sl,'left',FM,500))}
  function worker(x,y,mood,col,sh){c.save();c.translate(x+100,y+160);c.rotate((sh||0)*Math.sin(0));c.restore();R(x+10,y+165,180,140,38,col);R(x,y,200,155,46,col);R(x+22,y+34,156,74,30,K.ink);R(x+98,y-30,4,30,2,K.sl);Ci(x+100,y-44,12,K.am);
   if(mood=='sleep')[70,130].forEach(e=>{c.beginPath();c.arc(x+e,y+66,13,0,Math.PI);c.strokeStyle=K.am;c.lineWidth=7;c.stroke()});
   else{[70,130].forEach(e=>Ci(x+e,y+68,12,K.am));if(mood=='sweat'){L([[x+50,y+44],[x+88,y+54]],K.cr,7);L([[x+150,y+44],[x+112,y+54]],K.cr,7);c.beginPath();c.moveTo(x+196,y+30);c.quadraticCurveTo(x+222,y+72,x+196,y+80);c.quadraticCurveTo(x+170,y+72,x+196,y+30);c.fillStyle=K.cr;c.fill()}}R(x+60,y+210,80,16,8,K.ink)}
  function api(x,y,s,lamp,sh){c.save();c.translate(x+(sh||0),y);c.scale(s,s);R(0,40,260,340,40,K.co);[80,140,200].forEach(v=>R(26,v,208,40,16,K.ink));[0,1,2].forEach(i=>Ci(200,100+i*60,9,i==2?lamp:K.te));R(126,-10,8,50,4,K.sl);Ci(130,-24,18,lamp);T('API AI',130,330,44,K.iv,'center');c.restore()}

  const rotCwImg=(typeof Image!=='undefined')?new Image():null;if(rotCwImg)rotCwImg.src='/assets/rotate-cw.svg';
  const ROT_CW=[new Path2D('M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8'),new Path2D('M21 3v5h-5')];
  const S=[
  u=>{drawThemeBg(c,W,H);hdr(u,'1','Kasir depan, dapur belakang','Producer → Queue → Worker',K.te,K.iv,K.ink);
   pop(320,368,seg(u,.5,.9),()=>{R(60,330,520,76,38,K.co);T('TIKET #042 · 202 Accepted',320,380,32,K.iv,'center',FM,700)});
   pop(200,800,seg(u,.8,1.2),()=>worker(100,640,u>6.2?'sweat':'ok',K.te));
   const bad=u>6.0,fl=bad&&Math.floor(u*6)%2==0;pop(920,780,seg(u,1.2,1.7),()=>api(790,600,.85,bad?(fl?K.cr:K.am):K.am,bad?Math.sin(u*60)*4:0));
   A(seg(u,1.3,1.7),()=>{R(330,880,420,40,20,K.sl);c.save();c.beginPath();c.rect(330,780,420,160);c.clip();for(let i=0;i<7;i++){const x=330+((u*90+i*64)%448)-30;R(x,826,46,46,12,bad&&x>560?K.cr:(x<520?K.te:K.co))}c.restore()});
   const n=Math.round(300*eo(seg(u,1.5,4)));rtx(n+'',60,1280,200,K.am,'left',FB,seg(u,1.4,1.9));A(seg(u,2,2.5),()=>{T('potongan teks dari PDF',60,1350,44,K.iv,'left',FB,700);T('→ dikirim satu per satu ke model AI',60,1410,28,K.sl,'left',FM,500)});
   pop(540,1013,seg(u,6.0,6.4),()=>{R(60,975,960,76,38,K.cr);T('429 · Rate Limit / jaringan putus',540,1026,34,K.iv,'center',FM,700)})},
  u=>{drawThemeBg(c,W,H);hdr(u,'2','Rate limit di potongan 150','Worker tersedak, bukan gagal',K.cr,K.iv,K.iv);
   R(80,350,920,70,35,'#1d2b45');const p=eo(seg(u,.4,2.8));R(80,350,460*p,70,35,K.te);T(Math.round(150*p)+' / 300',540,470,36,K.iv,'center',FM,700);
   pop(190,700,seg(u,.2,.7),()=>worker(90,600,u>3.4?'sweat':'ok',K.co));const e=u>4.5;pop(630,780,seg(u,.3,.8),()=>api(500,520,1.05,e?K.cr:K.te,e&&u<6?Math.sin(u*55)*5:0));
   pop(540,1060,seg(u,4.6,5),()=>{R(170,1000,740,120,36,K.cr);T('429 Too Many Requests',540,1078,42,K.iv,'center',FM,700)});
   const sl=eo(seg(u,7.3,7.9));A(sl,()=>{c.save();c.translate(0,(1-sl)*160);R(170,1190,740,250,40,K.sa);c.save();c.translate(330,1315);c.scale(6.8,6.8);c.translate(-12,-12);c.strokeStyle=K.ink;c.lineWidth=2.2;c.lineCap='round';c.lineJoin='round';c.stroke(ROT_CW[0]);c.stroke(ROT_CW[1]);c.restore();T('Ulang dari',470,1300,48,K.ink);T('halaman 1?',470,1360,48,K.ink);c.restore()});
   L([[240,1250],[420,1380]],K.cr,16,seg(u,8.4,8.7));L([[420,1250],[240,1380]],K.cr,16,seg(u,8.7,9))},
  u=>{drawThemeBg(c,W,H);hdr(u,'3','Perisai Exponential Backoff','BullMQ · opsi job',K.am,K.iv,K.ink);
   pop(540,640,seg(u,.5,1.1),()=>{c.beginPath();c.moveTo(540,330);c.lineTo(800,420);c.lineTo(800,640);c.bezierCurveTo(800,800,680,900,540,960);c.bezierCurveTo(400,900,280,800,280,640);c.lineTo(280,420);c.closePath();c.fillStyle=K.co;c.fill();c.strokeStyle=K.iv;c.lineWidth=10;c.stroke()});
   L([[430,640],[512,720],[660,540]],K.am,28,eo(seg(u,1.2,1.9)));
   const sl=eo(seg(u,1.6,2.3));A(sl,()=>{c.save();c.translate(0,(1-sl)*180);R(100,1040,880,430,44,'#0E1727',K.sl,4);c.restore()});
   [['attempts: 3,',2.3],['backoff: {',3.0],["  type: 'exponential',",3.6],['  delay: 5000',4.4],['}',5.1]].forEach(([s,t0],i)=>{const q=seg(u,t0,t0+.55);if(q>0)T(s.slice(0,Math.ceil(s.length*q)),150,1130+i*68,44,i==0||i==3?K.am:K.iv,'left',FM,700)})},
  u=>{drawThemeBg(c,W,H);hdr(u,'4','Jeda berlipat dua','5s → 10s → 20s',K.am,K.iv,K.ink);
   pop(200,420,seg(u,.1,.6),()=>worker(100,330,u>1?'sleep':'sweat',K.co));
   A(seg(u,1.2,1.6),()=>{const b=Math.sin(u*3)*8;T('Z',350,360+b,70,K.pe);T('z',400,320+b*1.3,50,K.pe);T('z',440,290+b*1.6,36,K.pe)});
   pop(780,380,seg(u,.6,1),()=>{R(520,340,420,70,35,K.cr);T('GAGAL → TUNGGU',730,388,30,K.iv,'center',FM,700)});
   [[5,'Percobaan 1',2.1,1.1],[10,'Percobaan 2',5.8,1.8],[20,'Percobaan 3',7.8,2.0]].forEach(([s,t,t0,d],i)=>{const y=780+i*220,q=eo(seg(u,t0,t0+d));A(seg(u,t0-.3,t0),()=>T(t,100,y-24,30,K.sl,'left',FM,700));R(100,y,s*35*q,90,45,i==2?K.cr:K.am);A(q,()=>T(Math.ceil(s*q)+'s',100+s*35*q-30,y+62,44,K.ink,'right',FM,700));
    if(i<2)pop(155,y+147,seg(u,[5.4,7.4][i],[5.7,7.7][i]),()=>{R(100,y+104,110,56,28,K.te);T('×2',155,y+144,32,K.ink,'center',FM,700)})})},
  u=>{drawThemeBg(c,W,H);hdr(u,'5','Lanjut dari yang tersisa','Tanpa mengulang dari awal',K.te,K.iv,K.ink);
   const k=149+Math.floor(151*eo(seg(u,.9,3.4)));for(let i=0;i<300;i++){const x=65+(i%25)*38,y=330+Math.floor(i/25)*38;const col=i<149?K.te:i==149?(k>149?K.te:K.am):(i<k?K.te:'#1d2b45');R(x,y,30,30,8,col)}
   pop(310,830,seg(u,.3,.7),()=>{R(210,790,200,60,30,K.am);T('potongan 150',310,830,26,K.ink,'center',FM,700)});
   pop(255,1050,seg(u,.2,.6),()=>{c.fillStyle=K.co;c.beginPath();c.ellipse(255,980,110,36,0,0,7);c.fill();c.fillRect(145,980,220,140);c.beginPath();c.ellipse(255,1120,110,36,0,0,7);c.fill();c.beginPath();c.ellipse(255,980,110,36,0,0,7);c.fillStyle='#6C86FF';c.fill();T('PostgreSQL',255,1210,34,K.iv,'center',FM,700)});
   L([[400,1050],[560,1050]],K.sl,10,seg(u,.6,1.1));A(seg(u,1,1.4),()=>T('1–149 aman',420,1010,30,K.te,'left',FM,700));
   const sl=eo(seg(u,1.8,2.4));A(sl,()=>{c.save();c.translate(0,(1-sl)*140);R(60,1290,960,230,40,K.am);T('API kena rate limit?',540,1380,56,K.ink,'center');T('Pulihkan otomatis · 5s → 10s → 20s',540,1450,36,K.ink,'center',FB,700);c.restore()})}];

  const CUES=[[.54,4.02],[4.04,5.86],[6,9.52],[11.12,14.6],[15.06,17.78],[18.34,20.48],[21.88,26.04],[27.6,28.86],[29.14,32],[32.78,34.02],[34.76,36.28],[37.16,40.34]];
  const CHK=[['Tantangan terbesar saat','memproses ratusan potongan','teks ke model AI eksternal'],['adalah gangguan','jaringan sesaat'],['atau terkena pembatasan','kuota Rate Limit','HTTP 429.'],['Bayangkan Worker sudah','memproses sampai','potongan ke-150,'],['lalu tiba-tiba API','model AI tersedak','selama beberapa detik;'],['masak kita harus gagal','dan mengulang dari','halaman pertama?'],['Dengan BullMQ, kita pasang','perisai Exponential Backoff','dengan tiga kali','percobaan ulang.'],['Saat terjadi','kegagalan jaringan,'],['Worker otomatis menahan diri','selama 5 detik','di percobaan pertama,'],['10 detik','di percobaan kedua,'],['dan 20 detik','di percobaan ketiga,'],['lalu melanjutkan sisa potongan','yang belum tersimpan','di database hingga tuntas.']];
  const CH=[];CUES.forEach((q,ci_)=>{const l=CHK[ci_],tot=l.reduce((a,s)=>a+s.length,0);let t=q[0];l.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const PAL=[['#F6F5EE','#FFC65C'],['#F6F5EE','#FF765E'],['#F6F5EE','#A3A5F4'],['#F6F5EE','#FFC65C'],['#F6F5EE','#16B99A']],HI=/\d|BullMQ|Exponential|Backoff|Rate|Limit|429|Worker|API|database/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+FB;
   const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}
    c.translate(dx,dy);T(w,x,y,z,HI.test(w)?pf:bc,'left');c.restore();x+=ww+gap*s});
   R(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}

  function trPath(i,p){const e=eio(p);c.beginPath();if(i==1||i==4){const cx=i==1?900:250,cy=i==1?780:1050;c.arc(cx,cy,e*2400,0,7)}else if(i==2){c.moveTo(0,H);for(let x=0;x<=W;x+=30)c.lineTo(x,H*(1-e)*1.06+Math.sin(x/70+p*6)*70*(1-e));c.lineTo(W,H)}else{const x1=(W+700)*e;c.moveTo(0,0);c.lineTo(x1,0);c.lineTo(x1-700,H);c.lineTo(0,H)}c.closePath()}
  function sc(i,t){const u=t-B[i],d=B[i+1]-B[i],z=1+.035*Math.sin(Math.PI*cl(u/d));c.save();c.translate(540,900);c.scale(z,z);c.translate(-540,-900);S[i](u);c.restore()}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,DUR-.001);let i=B.findIndex((b,j)=>t>=b&&t<B[j+1]);if(i<0)i=4;
   if(i>0&&t<B[i]+.5){const p=(t-B[i])/.5;sc(i-1,t);cap(t,i-1);c.save();trPath(i,p);c.clip();sc(i,t);cap(t,i);c.restore();trPath(i,p);c.strokeStyle=K.am;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.stroke()}else{sc(i,t);cap(t,i)}}

  const EV=[];const ad=(t,k,a)=>EV.push([t,k,a]);
  ad(.4,'boop');ad(.8,'boop',1.2);ad(1.2,'zip');ad(1.5,'rise',2.4);ad(6,'glitch');ad(6,'err');ad(6.4,'stamp');
  ad(11.1,'boop');ad(14,'tap');ad(15.1,'glitch');ad(15.6,'thud');ad(15.7,'err');ad(15.7,'stamp');ad(18.5,'slide');ad(19.4,'stamp');
  ad(21.6,'whomp');ad(22.2,'zip');ad(25.2,'ding');
  ad(27.4,'boop');ad(28.6,'glitch');ad(29.2,'slide');ad(30.6,'ding',1);ad(32.6,'pop',1.1);ad(33,'slide');ad(34.5,'pop',1.3);ad(34.9,'rise',2);ad(35.6,'stamp');
  ad(37.2,'boop');ad(38.8,'snap');ad(39.5,'sparkle');ad(40.1,'chime');
  [10.5,21,27,37].forEach((b,i)=>{ad(b,['whoosh','rise','slide','whoosh'][i],i==1?1:.8);if(i==2)ad(b,'zip');if(i==1)ad(b,'whoosh')});
  CH.forEach((q,k)=>ad(q[0],['tap','blip','zip','tap','snap','blip'][k%6],.9+.1*(k%3)));
  [.1,10.6,21.1,27.1,37.1].forEach((t,i)=>ad(t,'pop',1+i*.05));ad(.5,'pop',1.15);ad(.8,'pop',.9);ad(1.2,'pop',1.25);ad(21.5,'pop',.8);ad(27.6,'pop',1.3);ad(37.2,'pop',.7);ad(37.4,'pop',1.1);ad(10.8,'pop',.9);ad(10.7,'pop',1.2);ad(15.1,'pop',1.4);
  for(let i=0;i<50;i++)ad(1.5+i*.05,'count',1+i*.025);ad(4.05,'ding',1.4);
  for(let i=0;i<12;i++)ad(1.9+i*.35,'tap',.8);
  for(let i=0;i<24;i++)ad(10.9+i*.1,'count',1+i*.03);ad(13.4,'ding',1);
  [23.3,24,24.6,25.4,26.1].forEach((t0)=>{for(let j=0;j<9;j++)ad(t0+j*.06,'count',1.5+(j%3)*.1)});
  [[29.1,1.1,5],[32.8,1.8,10],[34.8,2,20]].forEach(([t0,d,n])=>{ad(t0,'slide',.9);for(let i=0;i<n;i++)ad(t0+i*d/n,'count',1+i*.04)});
  for(let i=0;i<38;i++)ad(37.9+i*.066,'count',1+i*.03);
  [10.5,21,27,37].forEach(b=>{ad(b+.5,'snap',1);ad(b+.15,'slide',1)});

  function scheduleSfx(ctx,out,from,now){
    const sf=ctx.createGain();sf.gain.value=.45;sf.connect(out);
    function osc(tp,f0,f1,d,v,dl,at){const o=ctx.createOscillator(),g=ctx.createGain();o.type=tp;const t0=at+(dl||0);o.frequency.setValueAtTime(f0,t0);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t0+d);g.gain.setValueAtTime(v,t0);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(sf);o.start(t0);o.stop(t0+d+.02)}
    let nb=null;function nz(f0,f1,d,v,q,at){if(!nb){nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const a=nb.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1}const n=ctx.createBufferSource();n.buffer=nb;n.loop=true;const b=ctx.createBiquadFilter(),g=ctx.createGain();b.type='bandpass';b.Q.value=q;b.frequency.setValueAtTime(f0,at);b.frequency.exponentialRampToValueAtTime(f1,at+d);g.gain.setValueAtTime(v,at);g.gain.exponentialRampToValueAtTime(.001,at+d);n.connect(b);b.connect(g);g.connect(sf);n.start(at);n.stop(at+d+.02)}
    EV.filter(e=>e[0]>=from&&e[0]<=DUR).forEach(([tm,k,a])=>{const at=now+tm-from,m=a||1,O=(tp,f0,f1,d,v,dl)=>osc(tp,f0,f1,d,v,dl,at),N=(f0,f1,d,v,q)=>nz(f0,f1,d,v,q,at);
     ({pop:()=>O('sine',600*m,1080*m,.16,.5),tick:()=>O('square',2600,2600,.025,.1),count:()=>O('triangle',520*m,520*m,.035,.18),whoosh:()=>N(300,3200,.5,.7,.8),thud:()=>{O('sine',140,40,.3,.9);N(500,120,.2,.3,.7)},rise:()=>N(400,2600,a||.8,.4,2),err:()=>{O('sawtooth',110,110,.4,.12);O('sawtooth',117,117,.4,.12)},chime:()=>[523,659,784,1047].forEach((f,i)=>O('sine',f,f,1,.25,i*.06)),
     boop:()=>O('sine',220*m,330*m,.14,.5),tap:()=>O('sine',1000*m,650*m,.06,.22),blip:()=>{O('triangle',880*m,880*m,.07,.25);O('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>O('triangle',300*m,2400*m,.18,.22),snap:()=>N(3500,7000,.04,.4,1.5),ding:()=>{O('sine',784*m,784*m,.9,.3);O('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>O('sine',f,f,.15,.15,i*.05)),glitch:()=>{O('square',440,110,.15,.15);N(1200,300,.12,.3,2)},whomp:()=>O('sine',90,45,.5,.9),slide:()=>N(2200,500,.3,.35,1.2),stamp:()=>{O('sine',160,50,.25,.8);N(2500,800,.05,.35,1)}})[k]()});
  }
  return { DUR, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 7 (Exact port from rag-scene-7.html)
// ============================================================================
function createScene7() {
  const W=1080,H=1920;
  let c,DUR=39.508,SUB=true;
  const P={ink:'#172235',ink2:'#0E1727',ink3:'#1d2b45',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A',sa:'#E8E7DC'};
  const F={B:"'Bricolage Grotesque','Arial Black',sans-serif",M:"'JetBrains Mono',Consolas,monospace"};
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a));
  const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2);
  const hx=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));
  function mix(a,b,p){const x=hx(a),y=hx(b);p=cl(p);return'rgb('+x.map((v,i)=>Math.round(v+(y[i]-v)*p)).join(',')+')'}
  function mb(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
  const RC={};function ranks(n,seed){const k=n+'_'+seed;if(RC[k])return RC[k];const r=mb(seed),a=[...Array(n).keys()];for(let i=n-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}const rk=[];a.forEach((v,i)=>rk[v]=i);return RC[k]=rk}
  function rr(x,y,w,h,r,f,s,lw,dash){c.beginPath();c.roundRect(x,y,w,h,r);if(f){c.fillStyle=f;c.fill()}if(s){c.save();if(dash)c.setLineDash(dash);c.strokeStyle=s;c.lineWidth=lw||5;c.stroke();c.restore()}}
  function tx(s,x,y,z,col,k,al,mw){k=k||'B';c.save();c.font=(k=='B'?'800 ':'700 ')+z+'px '+(k=='B'?F.B:F.M);c.textAlign=al||'left';c.textBaseline='alphabetic';c.fillStyle=col;const w=c.measureText(s).width;if(mw&&w>mw){const f=mw/w;c.translate(x,y);c.scale(f,f);c.translate(-x,-y)}c.fillText(s,x,y);c.restore()}
  function bg(){drawThemeBg(c,W,H)}
  function line(pts,col,lw,dash){c.save();c.beginPath();pts.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.strokeStyle=col;c.lineWidth=lw;c.lineCap='round';c.lineJoin='round';if(dash)c.setLineDash(dash);c.stroke();c.restore()}
  function arrowP(x1,y1,x2,y2,col,lw,p){if(p<=0)return;const a=Math.atan2(y2-y1,x2-x1),e=eo(p),x=x1+(x2-x1)*e,y=y1+(y2-y1)*e;line([[x1,y1],[x,y]],col,lw);if(p>.8)line([[x-26*Math.cos(a-.5),y-26*Math.sin(a-.5)],[x,y],[x-26*Math.cos(a+.5),y-26*Math.sin(a+.5)]],col,lw)}
  function pillW(t,z){c.save();c.font='700 '+z+'px '+F.M;const w=c.measureText(t).width+44;c.restore();return w}
  function pill(x,y,t,b,f,z,p){z=z||30;p=p===undefined?1:p;if(p<=0)return;const w=pillW(t,z),h=z+30;c.save();c.translate(x+w/2,y+h/2);const s=ebo(cl(p));c.scale(s,s);c.globalAlpha=cl(p*2);c.translate(-w/2,-h/2);rr(0,0,w,h,h/2,b);tx(t,22,z+6,z,f,'M');c.restore();return w}
  function A(a,fn){if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()}
  function pop(cx,cy,p,fn){if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(cl(p));c.scale(s,s);c.globalAlpha=cl(p*2.5);c.translate(-cx,-cy);fn();c.restore()}
  function rtx(s,x,y,z,col,k,al,p,mw){if(p<=0)return;c.save();c.beginPath();c.rect(-10,y-z*1.05,W+20,z*1.45);c.clip();c.translate(0,(1-eo(p))*z*1.2);tx(s,x,y,z,col,k,al,mw);c.restore()}
  const typ=(s,p)=>s.slice(0,Math.floor(s.length*cl(p)+.0001));
  function grid(x,y,cols,rows,cell,gap,fn,empty,glyph){for(let r=0;r<rows;r++)for(let q=0;q<cols;q++){const i=r*cols+q,o=fn(i,r,q),px=x+q*(cell+gap),py=y+r*(cell+gap);rr(px,py,cell,cell,10,empty);if(!o)continue;const p=o.p===undefined?1:o.p;if(p<=0)continue;c.save();c.translate(px+cell/2,py+cell/2);const s=ebo(cl(p));c.scale(s,s);c.translate(-cell/2,-cell/2);if(o.dash){c.setLineDash([6,6]);c.strokeStyle=o.dash;c.lineWidth=3;c.beginPath();c.roundRect(0,0,cell,cell,10);c.stroke()}else{rr(0,0,cell,cell,10,o.c);if(glyph)tx('{}',cell/2,cell/2+8,cell*.38,P.ink,'M','center')}c.restore()}}
  function tomb(x,y,s,fill,ink){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,90);c.lineTo(0,34);c.arc(30,34,30,Math.PI,0);c.lineTo(60,90);c.closePath();c.fillStyle=fill;c.fill();tx('{ }',30,62,24,ink,'M','center');rr(-6,86,72,8,4,ink);c.restore()}
  function gear(cx,cy,r,col,hole,rot){c.save();c.translate(cx,cy);c.rotate(rot||0);c.fillStyle=col;for(let i=0;i<8;i++){c.rotate(Math.PI/4);c.beginPath();c.roundRect(-r*.2,-r*1.15,r*.4,r*.4,5);c.fill()}c.beginPath();c.arc(0,0,r,0,7);c.fill();c.beginPath();c.arc(0,0,r*.42,0,7);c.fillStyle=hole;c.fill();c.restore()}
  function check(cx,cy,s,col,lw,p){p=p===undefined?1:p;if(p<=0)return;const a=[cx-s*.5,cy],b=[cx-s*.1,cy+s*.4],d=[cx+s*.55,cy-s*.4];if(p<.4)line([a,[a[0]+(b[0]-a[0])*p/.4,a[1]+(b[1]-a[1])*p/.4]],col,lw);else line([a,b,[b[0]+(d[0]-b[0])*(p-.4)/.6,b[1]+(d[1]-b[1])*(p-.4)/.6]],col,lw)}
  function cross(cx,cy,s,col,lw,p){if(p<=0)return;const e=cl(p);line([[cx-s,cy-s],[cx-s+2*s*e,cy-s+2*s*e]],col,lw);if(p>.5){const f=(p-.5)*2;line([[cx+s,cy-s],[cx+s-2*s*f,cy-s+2*s*f]],col,lw)}}
  function ring(cx,cy,r,p,col,track,lw){c.save();c.lineCap='round';c.lineWidth=lw;c.strokeStyle=track;c.beginPath();c.arc(cx,cy,r,0,7);c.stroke();if(p>0){c.strokeStyle=col;c.beginPath();c.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+p*Math.PI*2);c.stroke()}c.restore()}
  function cyl(x,y,w,h,col,top){const e=h*.16;c.save();c.fillStyle=col;c.beginPath();c.moveTo(x,y+e);c.lineTo(x,y+h-e);c.ellipse(x+w/2,y+h-e,w/2,e,0,Math.PI,0,true);c.lineTo(x+w,y+e);c.closePath();c.fill();c.strokeStyle=top;c.lineWidth=6;for(let i=1;i<=2;i++){c.beginPath();c.ellipse(x+w/2,y+e+i*(h-2*e)/3,w/2,e,0,0,Math.PI);c.stroke()}c.fillStyle=top;c.beginPath();c.ellipse(x+w/2,y+e,w/2,e,0,0,7);c.fill();c.restore()}
  const shk=(u,t0,a,d)=>u>t0?Math.sin((u-t0)*70)*a*Math.exp(-(u-t0)*d):0;

  const B=[0,6.0,14.4,20.75,25.4,29.4,39.508];
  const PAL=[[P.iv,P.am],[P.iv,P.cr],[P.iv,P.am],[P.iv,P.pe],[P.iv,P.pe],[P.iv,P.am]];
  const CUES=[[.54,3.78],[3.8,5.38],[6.6,9.18],[9.32,12.0],[12.18,13.76],[15.1,17.14],[17.88,20.74],[20.76,24.18],[25.8,28.92],[29.72,31.9],[31.98,34.62],[35.44,38.94]];
  const CHK=[['Satu jebakan tersembunyi','yang sering dilupakan','pengguna BullMQ'],['adalah kebersihan','memori Redis.'],['Ingat, kunci antrean','BullMQ di Database 0 itu'],['tidak memiliki batas waktu','kedaluwarsa atau TTL'],['supaya tidak terhapus','saat mengantre.'],['Kalau tugas yang sudah','selesai tidak kita bersihkan,'],['ribuan riwayat Job lama','akan menumpuk menjadi','bangkai data'],['dan menghabiskan jatah','RAM 256 megabita','di Redis kita!'],['Karena status akhir dokumen','sudah kita catat permanen','di PostgreSQL,'],['kita wajib memasang aturan','removeOnComplete'],['untuk hanya menyisakan','100 riwayat sukses','terakhir di Redis,'],['serta removeOnFail','untuk membuang log error','setelah 24 jam.']];
  const CH=[];CUES.forEach((q,ci_)=>{const L=CHK[ci_],tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const HI=/\d|TTL|RAM|PostgreSQL|removeOn|bangkai|jebakan|permanen/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+F.B;
   const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1660,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;c.restore();
   ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}
    c.translate(dx,dy);tx(w,x,y,z,HI.test(w)?pf:bc,'B','left',ww);c.restore();x+=ww+gap*s});
   A(1-o,()=>rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf))}

  const S=[];
  S[0]=function(u){bg(P.ink);
   A(eo(seg(u,.1,.7)),()=>{c.save();c.translate(0,(1-eo(seg(u,.1,.7)))*60);rr(60,110,960,800,44,P.ink3);c.restore()});
   pill(96,146,'REDIS · DB 0',P.am,P.ink,30,seg(u,.35,.8));
   A(seg(u,.5,.9),()=>tx('RAM 256 MB',984,190,34,P.pe,'M','right'));
   const rk=ranks(160,3);
   grid(97,250,16,10,46,10,(i,r,q)=>{const d=.5+(r+q)*.02,lit=rk[i]<14;if(lit)return{c:P.te,p:seg(u,.9+rk[i]*.05,1.2+rk[i]*.05)};return{c:P.ink2,p:seg(u,d,d+.3)}},P.ink2);
   c.save();c.beginPath();c.rect(60,110,960,800);c.clip();[[770,832],[840,832],[910,832]].forEach((p,i)=>{const pp=seg(u,1.5+i*.3,2.1+i*.3);tomb(p[0],p[1]+(1-ebo(pp))*100,.95,P.sl,P.ink)});c.restore();
   const sp=seg(u,4.0,5.2);if(sp>0&&sp<1){const y=250+550*eio(sp);A(Math.sin(sp*Math.PI)*1.5,()=>{rr(97,y-5,886,10,5,P.am)})}
   A(seg(u,.3,.7),()=>tx('BAGIAN 4 / 10 · ARSITEKTUR RAG',60,990,28,P.sl,'M'));
   rtx('Awas Bangkai Job',60,1100,104,P.iv,'B','left',seg(u,.6,1.1),940);rtx('BullMQ Bikin',60,1215,104,P.iv,'B','left',seg(u,.8,1.3),940);rtx('Redis Penuh!',60,1330,104,P.am,'B','left',seg(u,1.0,1.5),940);
   pill(60,1400,'jebakan tersembunyi',P.cr,P.ink,32,seg(u,1.5,2.0))};
  S[1]=function(u){bg(P.iv);
   rtx('Kunci tanpa TTL',60,150,92,P.iv,'B','left',seg(u,.2,.7),960);A(seg(u,.5,.9),()=>tx('DB 0  ·  bull:ingest:*',60,200,30,P.sl,'M'));
   const a=eo(seg(u,.5,1.1)),dis=seg(u,3.0,3.8);
   A(a,()=>{c.save();c.translate((1-a)*-300,0);A(1-dis,()=>{rr(60,240,960,250,36,P.ink3,P.sl,4);tx('cache:sesi',100,330,40,P.iv,'M');pill(100,360,'punya TTL',P.te,P.ink,26);const rp=1-eio(seg(u,1.3,3.0));ring(830,365,72,rp,P.te,P.ink2,22);tx(Math.ceil(30*rp)+'s',830,380,40,P.iv,'M','center')});c.restore()});
   for(let k=0;k<30;k++){const r=mb(k+11),px=100+r()*860,py=260+r()*210,vx=(r()-.3)*300,vy=-120-r()*160,q=seg(u,3.0+r()*.2,3.9);if(q>0&&q<1)A(1-q,()=>rr(px+vx*q,py+vy*q+260*q*q,16*(1-q)+4,16*(1-q)+4,4,k%3?P.te:P.sl))}
   A(dis,()=>{rr(60,240,960,250,36,null,P.sl,4,[12,10]);tx('kedaluwarsa, terhapus sendiri',540,380,34,P.sl,'M','center')});
   pop(540,695,seg(u,3.3,3.9),()=>{rr(60,530,960,330,36,P.ink2);rr(60,530,960,330,36,null,P.cr,6+2*Math.sin(u*5)*(u>5?1:0));tx('bull:ingest:completed',100,620,38,P.iv,'M','left',560);pill(100,660,'tanpa batas waktu',P.cr,P.ink,26,seg(u,4.1,4.6));tx(typ('TTL = -1',seg(u,4.4,5.0)),100,790,56,P.am,'M')});
   if(u>3.6){c.save();c.translate(800,700);c.beginPath();for(let a2=0;a2<=6.3;a2+=.05){const d=1+Math.sin(a2)**2,x=110*Math.cos(a2)/d,y=110*Math.sin(a2)*Math.cos(a2)/d;a2?c.lineTo(x,y):c.moveTo(x,y)}c.closePath();c.strokeStyle=P.cr;c.lineWidth=16;c.lineJoin='round';c.lineCap='round';c.setLineDash([620,620]);c.lineDashOffset=620*(1-eio(seg(u,3.7,4.7)));c.stroke();c.restore()}
   rtx('Berminggu-minggu,',60,990,66,P.iv,'B','left',seg(u,6.0,6.5),960);rtx('tak ada yang menghapus',60,1065,66,P.cr,'B','left',seg(u,6.25,6.75),960);
   const gl=eo(seg(u,6.1,6.7));line([[60,1530],[60+960*gl,1530]],P.sl,6);
   const cnt=[2,5,9,14,20],lb=['Hari 1','Mgg 1','Mgg 2','Mgg 3','Mgg 4'];
   cnt.forEach((n,i)=>{const x0=110+i*185,st=6.5+i*.3,gp=eo(seg(u,st,st+.8)),m=Math.floor(n*gp);for(let k=0;k<m;k++){const kp=seg(u,st+k*.8/n*.9,st+k*.8/n*.9+.25);tomb(x0+(k%3)*52,1496-Math.floor(k/3)*40-(1-ebo(kp))*40,.42,i>2?P.cr:P.sl,P.ink)}A(seg(u,st,st+.3),()=>tx(lb[i],x0+75,1580,26,P.sl,'M','center'))});
   A(seg(u,7.4,7.8),()=>tx('contoh ilustrasi',1020,1120,24,P.sl,'M','right'))};
  S[2]=function(u){bg(P.ink);
   const cp=eo(seg(u,2.9,5.8)),n=Math.floor(1000*cp),lab=cp>=.999?'1.000+':String(n);
   A(seg(u,.15,.6),()=>{tx(lab,60,300,230,P.am,'B','left',960);tx('bangkai JSON di RAM',60,365,38,P.pe,'M')});
   A(seg(u,.2,.7),()=>{c.save();c.translate(0,(1-eo(seg(u,.2,.7)))*-80);rr(60,420,960,520,44,P.ink3);c.restore()});
   const rk=ranks(128,7),m=Math.floor(104*cp);
   grid(97,460,16,8,46,10,(i)=>{const r=rk[i];if(r>=104&&r<108)return{c:P.te,p:seg(u,.5+(r-104)*.1,.9+(r-104)*.1)};if(r<m){const coral=r<22&&u>5.0+r*.02;return{c:coral?P.cr:P.sl,p:seg(u,0,.25)+1}}return null},P.ink2,true);
   const cc=eo(seg(u,.2,.8)),bc=mix(P.te,P.sl,eo(seg(u,2.5,3.1)));
   A(cc,()=>{c.save();c.translate((1-cc)*-200,0);rr(70,1010,520,380,36,P.ink2);rr(70,1010,520,380,36,null,bc,5);
    ['{','  "name": "extract-pdf",','  "data": { … },','  "returnvalue": { … },','  "finishedOn": 17…','}'].forEach((s,i)=>tx(typ(s,seg(u,.5+i*.14,.7+i*.14)),104,1070+i*47,29,i==0||i==5?mix(P.am,P.sl,seg(u,2.5,3.1)):mix(P.iv,P.sl,seg(u,2.5,3.1)),'M'));
    pill(104,1330,'completed',mix(P.te,P.sl,seg(u,2.5,3.1)),P.ink,24,seg(u,.9,1.3));c.restore()});
   const ap=seg(u,2.0,2.6);arrowP(600,1215,770,1240,P.am,8,ap);
   pop(830,1235,seg(u,2.6,3.1),()=>tomb(800,1190,2.4,P.sl,P.ink));
   rtx('selesai ≠ terhapus',60,1480,80,P.iv,'B','left',seg(u,1.6,2.1),960);
   A(seg(u,3.2,3.6),()=>tx('contoh ilustrasi',1020,1540,24,P.sl,'M','right'))};
  S[3]=function(u){bg(P.pe);const sx=shk(u,2.9,10,5);
   rtx('RAM 256 MB',60,200,140,P.iv,'B','left',seg(u,.1,.6),960);A(seg(u,.4,.8),()=>tx('jatah Redis kita',60,255,34,P.pe,'M'));
   c.save();c.translate(sx,0);
   const mp=eo(seg(u,.2,.9));A(mp,()=>{c.save();c.translate((1-mp)*420,0);rr(60,310,960,340,40,P.ink3,P.sl,4);for(let i=0;i<6;i++){const f=seg(u,1.0+i*.3,1.4+i*.3),col=i<5?mix(P.te,P.cr,f):mix(P.te,P.am,f);rr(110+i*148,360,118,160,16,col);rr(130+i*148,380,78,12,6,P.ink);tx('{}',169+i*148,470,40,P.ink,'M','center')}
    for(let i=0;i<22;i++){const pp=seg(u,.5+i*.02,.8+i*.02);if(pp>0)rr(100+i*40,590+(1-eo(pp))*30,26,44,6,P.am)}c.restore()});
   const fp=eio(seg(u,.8,2.8));A(seg(u,.6,1.0),()=>{rr(60,700,960,80,40,P.ink3);rr(60,700,Math.max(80,930*.96*fp),80,40,(fp<.5?mix(P.te,P.am,fp*2):mix(P.am,P.cr,(fp-.5)*2)))});
   pop(540,740,seg(u,2.8,3.2),()=>tx('PENUH',540,756,40,P.ink,'M','center'));
   A(seg(u,3.3,3.7),()=>tx('contoh ilustrasi',1020,830,24,P.sl,'M','right'));c.restore();
   const nx=[60,410,760],nt=['API','Redis','Worker'],nc=[P.co,P.cr,P.te];
   nx.forEach((x,i)=>{const sh=i==1?shk(u,3.1,8,5):0;pop(x+130+sh,1045,seg(u,1.8+i*.25,2.3+i*.25),()=>{rr(x+sh,930,260,230,36,nc[i]);tx(nt[i],x+130+sh,1065,48,P.ink,'B','center',220)})});
   arrowP(325,1045,405,1045,P.iv,8,seg(u,2.5,2.9));arrowP(675,1045,755,1045,P.iv,8,seg(u,2.6,3.0));
   const xp=seg(u,3.1,3.5);cross(365,1045,26,P.cr,12,xp);
   rtx('Job baru tak lagi muat',60,1290,66,P.am,'B','left',seg(u,3.0,3.5),960);rtx('antrean tersendat',60,1365,66,P.iv,'B','left',seg(u,3.4,3.9),960)};
  S[4]=function(u){bg(P.iv);
   pop(540,215,seg(u,.1,.6),()=>{rr(330,130,420,170,36,P.ink3,P.sl,4);gear(420,215,46,P.am,P.ink3,u*1.2);tx('Worker',500,205,40,P.iv,'B');});
   pill(500,225,'selesai',P.te,P.ink,22,seg(u,.4,.8));check(700,258,22,P.te,5,seg(u,.7,1.0));
   arrowP(440,300,330,520,P.co,8,seg(u,.5,1.0));
   const cp=ebo(seg(u,.6,1.3));if(cp>0){c.save();c.translate(0,880);c.scale(1,cp);c.translate(0,-880);cyl(150,540,300,290,P.co,'#6f88ff');c.restore()}
   A(seg(u,1.1,1.5),()=>tx('PostgreSQL',300,885,44,P.iv,'B','center'));
   const tb=eo(seg(u,1.0,1.6));A(tb,()=>{c.save();c.translate(0,(1-tb)*140);rr(60,1000,960,330,36,P.ink2,P.sl,4);tx('tabel documents',100,1070,34,P.am,'M');
    [['doc_01','completed'],['doc_02','completed'],['doc_03','failed']].forEach((r,i)=>{const y=1100+i*70,rp=seg(u,1.3+i*.25,1.7+i*.25);A(rp,()=>{rr(100,y,880,56,14,P.ink3);tx(r[0],124,y+38,28,P.pe,'M');tx(r[1],420,y+38,28,r[1]=='failed'?P.cr:P.te,'M');if(r[1]=='failed')cross(930,y+28,12,P.cr,6,seg(u,1.4+i*.25,1.8+i*.25));else check(930,y+28,26,P.te,6,seg(u,1.4+i*.25,1.8+i*.25))})});c.restore()});
   pill(100,1352,'permanen',P.te,P.ink,24,seg(u,2.1,2.5));
   arrowP(640,300,780,520,P.sl,8,seg(u,2.5,3.0));
   const gp=seg(u,2.6,3.2);A(gp,()=>{c.save();c.setLineDash([10,8]);c.strokeStyle=P.sl;c.lineWidth=5;c.beginPath();c.moveTo(690,820);c.lineTo(690,672);c.arc(756,672,66,Math.PI,0);c.lineTo(822,820);c.closePath();c.stroke();c.restore();tx('{ }',756,740,60,P.sl,'M','center');tx('salinan Redis',756,885,38,P.sl,'B','center')});
   pill(630,920,'boleh dibuang',P.am,P.ink,24,seg(u,3.1,3.5));
   rtx('Rekam jejak sudah aman',60,1490,62,P.iv,'B','left',seg(u,2.8,3.3),960);rtx('di PostgreSQL',60,1560,62,P.pe,'B','left',seg(u,3.0,3.5))};
  S[5]=function(u){bg(P.ink);
   const ip=eo(seg(u,0,.5));A(ip,()=>{c.save();c.translate(0,(1-ip)*50);rr(60,110,960,700,44,P.ink3);c.restore()});
   pill(90,134,'REDIS · DB 0',P.am,P.ink,26,seg(u,.2,.6));
   const barx=1005-930*eio(seg(u,2.6,3.5));
   const fp=eio(seg(u,3.4,4.7)),bfill=.96-.78*fp;
   A(seg(u,.3,.7),()=>{rr(650,150,330,34,17,P.ink2);rr(650,150,Math.max(34,330*bfill),34,17,mix(P.cr,P.te,fp));tx('RAM',640,178,26,P.pe,'M','right')});
   grid(75,215,20,7,37,10,(i,r,q)=>{const cx=75+q*47,d=.1+(r*20+q)*.004;if(r<2){if(u>2.6&&cx>barx)return{dash:P.sl,p:seg(u,0,.01)+1};return{c:P.sl,p:seg(u,d,d+.3)}}
    const lp=seg(u,2.9+((r-2)*20+q)*.008,3.2+((r-2)*20+q)*.008);return{c:lp>0?mix(P.sl,P.te,lp>.5?1:lp*2):P.sl,p:seg(u,d,d+.3)+(lp>0?0:0)}},P.ink2,true);
   const sw=seg(u,2.6,3.5);if(sw>0&&sw<1)A(1,()=>{rr(barx-6,205,12,110,6,P.am)});
   A(seg(u,3.2,3.6),()=>{tx('count: 100',75,575,34,P.te,'M');});pill(690,547,'100 sukses terakhir',P.te,P.ink,22,seg(u,3.3,3.7));
   const fr=seg(u,6.2,6.6);
   grid(75,620,8,1,37,10,(i)=>{const rp=seg(u,6.4+i*.05,6.7+i*.05);if(rp<=0)return null;const gone=seg(u,7.8+i*.14,8.1+i*.14);if(gone>0)return{dash:P.cr,p:1};return{c:P.cr,p:rp}},P.ink2,true);
   A(fr,()=>{const rp=1-eio(seg(u,6.8,8.8));ring(780,684,52,rp,P.cr,P.ink2,18);tx(Math.max(0,Math.ceil(24*rp))+'j',780,696,32,P.iv,'M','center');tx(typ('age: 86400',seg(u,6.5,7.1)),75,730,34,P.cr,'M');A(seg(u,7.0,7.4),()=>tx('detik = 24 jam',75,772,24,P.sl,'M'))});
   A(seg(u,4.6,5.0),()=>tx('contoh ilustrasi',1000,845,22,P.sl,'M','right'));
   const cp=eo(seg(u,.1,.7));A(cp,()=>{c.save();c.translate(0,(1-cp)*120);rr(60,860,960,520,36,P.ink2);[P.cr,P.am,P.te].forEach((cc,i)=>{c.beginPath();c.arc(104+i*34,904,10,0,7);c.fillStyle=cc;c.fill()});c.restore()});
   const b1=seg(u,1.6,2.0),b2=seg(u,6.1,6.5);
   if(b1>0)rr(60,990,960*eo(b1),64,6,'rgba(22,185,154,.22)');if(b2>0)rr(60,1060,960*eo(b2),64,6,'rgba(255,118,94,.22)');
   const ln=[['defaultJobOptions: {',P.iv,.45,1.15],['  removeOnComplete: { count: 100 },',P.te,1.2,2.5],['  removeOnFail: { age: 86400 },',P.cr,6.0,6.9]];
   ln.forEach((l,i)=>tx(typ(l[0],seg(u,l[2],l[3])),90,970+i*70,36,l[1],'M','left',900));
   A(seg(u,1.1,1.4),()=>tx('}',90,1180,36,P.iv,'M'));
   const pc=seg(u,2.6,3.1);if(pc>0&&pc<1)rr(500,992,330,60,10,null,P.am,4+4*Math.sin(pc*Math.PI));
   A(seg(u,2.9,3.3),()=>tx('simpan 100 sukses terakhir',100,1262,34,P.te,'B','left',880));A(seg(u,6.4,6.8),()=>tx('buang log gagal setelah 24 jam',100,1322,34,P.cr,'B','left',880));
   const tk=seg(u,8.7,9.1);pop(540,1500,tk,()=>{rr(60,1420,960,160,36,P.am);tx('Wajib pasang removeOnComplete',90,1500,50,P.ink,'B','left',900);tx('& removeOnFail',90,1558,50,P.ink,'B','left',900)})};

  const TW=.55;
  const WIPE=[null,
   p=>{c.beginPath();c.arc(540,500,p*1400,0,7)},
   p=>{const base=(1-p)*(H+160)-80,a=Math.sin(Math.PI*p)*40;c.beginPath();c.moveTo(-10,H+100);for(let x=-10;x<=W+10;x+=20)c.lineTo(x,base+Math.sin(x/90+p*8)*a);c.lineTo(W+10,H+100);c.closePath()},
   p=>{const s=p*(W+H*.6+500)-200;c.beginPath();c.moveTo(-4000,-2000);c.lineTo(s+1200,-2000);c.lineTo(s-2400,4000);c.lineTo(-4000,4000);c.closePath()},
   p=>{c.beginPath();c.rect(-10,740-p*1300,W+20,p*2600)},
   p=>{c.beginPath();c.arc(756,740,p*1500,0,7)}];
  function drawScene(i,t){const u=t-B[i],d=B[i+1]-B[i],z=1+.04*Math.sin(Math.PI*cl(u/d));c.save();c.translate(540,820);c.scale(z,z);c.translate(-540,-820);S[i](u);c.restore();cap(t,i)}
  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,DUR);let si=0;for(let k=0;k<6;k++)if(t>=B[k])si=k;const u=t-B[si];
   if(si>0&&u<TW){drawScene(si-1,t);const p=eio(u/TW);c.save();WIPE[si](p);c.clip();drawScene(si,t);c.restore();c.save();WIPE[si](p);c.strokeStyle=P.am;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.lineJoin='round';c.stroke();c.restore()}
   else drawScene(si,t)}

  const EV=[];const ev=(t,k,a)=>EV.push([t,k,a]);
  const tt=(t0,t1,st,k)=>{for(let x=t0;x<t1;x+=st)ev(x,k||'tick')};
  (function(){const b=B;let o;
   o=b[0];ev(o+.1,'slide');ev(o+.35,'boop');ev(o+.5,'zip');[.9,1.15,1.4].forEach((x,i)=>ev(o+x,'pop',1+i*.2));ev(o+.6,'snap');ev(o+.8,'snap');ev(o+1.0,'snap');ev(o+1.5,'thud');ev(o+1.8,'thud');ev(o+2.1,'thud');ev(o+1.5,'stamp');ev(o+4.0,'rise',1.2);
   ev(b[1]-.05,'whoosh');ev(b[1]+.5,'tap',.7);
   o=b[1];ev(o+.2,'snap');ev(o+.5,'slide');ev(o+1.4,'rise',1.7);ev(o+3.0,'glitch');[3.1,3.25,3.4].forEach(x=>ev(o+x,'snap'));ev(o+3.3,'boop');ev(o+3.7,'rise',.9);ev(o+3.9,'whomp');tt(o+4.4,o+5.0,.08);ev(o+4.1,'pop');ev(o+4.5,'zip');ev(o+6.0,'snap');ev(o+6.1,'slide');for(let i=0;i<5;i++)ev(o+6.5+i*.3,'ding',.8+i*.12);
   ev(b[2]-.05,'rise',.6);ev(b[2],'whoosh');ev(b[2]+.5,'snap');
   o=b[2];ev(o+.15,'slide');ev(o+.2,'slide');for(let i=0;i<6;i++)ev(o+.5+i*.14,'tick');ev(o+.6,'pop',.9);ev(o+.75,'pop',1.1);ev(o+.9,'zip');ev(o+1.6,'snap');ev(o+2.0,'zip');ev(o+2.6,'stamp');tt(o+3.0,o+5.8,.14);ev(o+2.9,'rise',2.9);ev(o+5.0,'glitch');ev(o+5.8,'thud');
   ev(b[3],'slide');ev(b[3]+.05,'zip');ev(b[3]+.5,'tap',.7);
   o=b[3];ev(o+.1,'snap');ev(o+.3,'slide');tt(o+.5,o+1.0,.05);for(let i=0;i<6;i++)ev(o+1.0+i*.3,'tap',.9+i*.1);ev(o+.8,'rise',2.0);for(let i=0;i<3;i++)ev(o+1.8+i*.25,'boop',1+i*.15);ev(o+2.5,'zip');ev(o+2.9,'err');ev(o+2.9,'whomp');ev(o+3.0,'snap');ev(o+3.1,'thud');ev(o+3.4,'snap');
   ev(b[4],'whoosh');ev(b[4]+.05,'whomp');ev(b[4]+.5,'tap',.7);
   o=b[4];ev(o+.1,'boop');ev(o+.4,'zip');ev(o+.5,'zip',.8);ev(o+.6,'rise',.6);ev(o+1.0,'slide');for(let i=0;i<3;i++)ev(o+1.3+i*.25,'tap',1+i*.15);ev(o+2.1,'stamp');ev(o+2.5,'zip');ev(o+2.6,'slide');ev(o+2.8,'snap');ev(o+3.1,'blip');
   ev(b[5],'whoosh');ev(b[5]+.05,'zip');ev(b[5]+.5,'tap',.7);
   o=b[5];ev(o+.05,'slide');ev(o+.2,'pop');tt(o+.45,o+1.15,.07);ev(o+1.6,'slide');tt(o+1.2,o+2.5,.065);ev(o+2.6,'snap');ev(o+2.6,'whoosh');ev(o+2.7,'ding');for(let i=0;i<5;i++)ev(o+2.9+i*.18,'pop',1+i*.15);ev(o+3.8,'rise',1.0);ev(o+6.1,'zip');tt(o+6.0,o+6.9,.07);tt(o+6.4,o+6.75,.05);ev(o+6.8,'rise',2.0);for(let i=0;i<6;i++)ev(o+8.0+i*.14,'snap');ev(o+8.7,'stamp');ev(o+9.0,'sparkle');ev(o+9.1,'chime');
   EV.sort((x,y)=>x[0]-y[0])})();

  const NB=new WeakMap();
  function noise(ctx){let b=NB.get(ctx);if(!b){b=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const d=b.getChannelData(0),r=mb(5);for(let i=0;i<d.length;i++)d[i]=r()*2-1;NB.set(ctx,b)}return b}
  function sfx(ctx,out,t0,k,a){const G=(g,dur,tt2)=>{const n=ctx.createGain();n.gain.setValueAtTime(.0001,tt2);n.gain.exponentialRampToValueAtTime(g,tt2+.006);n.gain.exponentialRampToValueAtTime(.0001,tt2+dur);n.connect(out);return n};
   const osc=(type,f1,f2,dur,g,d=0)=>{const t=t0+d,o=ctx.createOscillator();o.type=type;o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f2),t+dur);o.connect(G(g,dur,t));o.start(t);o.stop(t+dur+.05)};
   const nz=(f1,f2,dur,g,q,d=0)=>{const t=t0+d,s=ctx.createBufferSource();s.buffer=noise(ctx);s.loop=true;const f=ctx.createBiquadFilter();f.type='bandpass';f.Q.value=q;f.frequency.setValueAtTime(f1,t);f.frequency.exponentialRampToValueAtTime(f2,t+dur);s.connect(f);f.connect(G(g,dur,t));s.start(t);s.stop(t+dur+.05)};
   const m=a||1;({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.1),click:()=>osc('square',1800,1800,.05,.16),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,a||.8,.4,2),err:()=>{osc('sawtooth',110,110,.4,.12);osc('sawtooth',117,117,.4,.12)},chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),
   boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},whomp:()=>osc('sine',90,45,.5,.9),slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()}

  function scheduleSfx(ctx,out,from,base){
    const fg=ctx.createGain();fg.gain.value=.3;fg.connect(out);
    EV.forEach(e=>{if(e[0]>=from&&e[0]<=DUR)sfx(ctx,fg,base+(e[0]-from),e[1],e[2])});
  }
  return { DUR, CH, render, scheduleSfx };
}

// ============================================================================
// SCENE 8 (Exact port from rag-scene-8.html)
// ============================================================================
function createScene8() {
  const W=1080,H=1920,DUR=41.8958;
  const K={ink:'#172235',ink2:'#0E1727',iv:'#F6F5EE',co:'#4667FF',te:'#16B99A',cr:'#FF765E',am:'#FFC65C',pe:'#A3A5F4',sl:'#73819A',sd:'#E8E7DC'};
  const FB="'Bricolage Grotesque','DejaVu Sans',Arial,sans-serif",FM="'JetBrains Mono','DejaVu Sans Mono',monospace";
  const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),seg=(u,a,b)=>cl((u-a)/(b-a)),eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,ebo=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2),lp=(a,b,p)=>a+(b-a)*p;
  let c,SUB=true;
  const rr=(x,y,w,h,r,f,s,lw)=>{c.beginPath();c.roundRect(x,y,Math.max(0,w),Math.max(0,h),Math.min(r,Math.max(0,w)/2,Math.max(0,h)/2));if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.lineCap='round';c.stroke()}};
  const tx=(s,x,y,z,col,al='center',f=FB,w=800,mx=980)=>{c.font=w+' '+z+'px '+f;const m=c.measureText(s).width;if(m>mx)c.font=w+' '+z*mx/m+'px '+f;c.fillStyle=col;c.textAlign=al;c.textBaseline='alphabetic';c.fillText(s,x,y)};
  const ci=(x,y,r,f,s,lw)=>{c.beginPath();c.arc(x,y,Math.max(0,r),0,7);if(f){c.fillStyle=f;c.fill()}if(s){c.strokeStyle=s;c.lineWidth=lw||6;c.stroke()}};
  const ln=(a,b,x,y,col,lw,dash)=>{c.beginPath();c.moveTo(a,b);c.lineTo(x,y);c.strokeStyle=col;c.lineWidth=lw;c.lineCap='round';c.setLineDash(dash||[]);c.stroke();c.setLineDash([])};
  const A=(a,fn)=>{if(a<=0)return;c.save();c.globalAlpha=cl(a);fn();c.restore()};
  const pop=(cx,cy,p,fn)=>{if(p<=0)return;c.save();c.translate(cx,cy);const s=ebo(p);c.scale(s,s);c.translate(-cx,-cy);c.globalAlpha=cl(p*3);fn();c.restore()};
  const rise=(p,d,fn)=>{if(p<=0)return;c.save();c.globalAlpha=cl(p*1.6);c.translate(0,(1-eo(p))*d);fn();c.restore()};
  const bg=()=>drawThemeBg(c,W,H);
  const wrap=fn=>{c.save();c.translate(43,36);c.scale(.92,.92);fn();c.restore()};
  function pdf(x,y,col,lab,sc=1){c.save();c.translate(x,y);c.scale(sc,sc);c.beginPath();c.moveTo(0,0);c.lineTo(70,0);c.lineTo(100,30);c.lineTo(100,130);c.arcTo(100,140,90,140,12);c.lineTo(10,140);c.arcTo(0,140,0,130,12);c.closePath();c.fillStyle=col;c.fill();c.beginPath();c.moveTo(70,0);c.lineTo(70,24);c.arcTo(70,30,76,30,6);c.lineTo(100,30);c.closePath();c.fillStyle='rgba(23,34,53,.25)';c.fill();if(lab){rr(14,84,56,30,8,K.iv);tx(lab,42,106,20,K.ink,'center',FM,700)}ln(14,50,56,50,K.iv,6);ln(14,64,44,64,K.iv,6);c.restore()}
  function bubble(x,y,w,h,col,txt,tc,tail,z=38){rr(x,y,w,h,36,col);c.beginPath();c.moveTo(tail?x+w-50:x+50,y+h-4);c.lineTo(tail?x+w-10:x+10,y+h+34);c.lineTo(tail?x+w-100:x+100,y+h-4);c.fillStyle=col;c.fill();tx(txt,x+w/2,y+h/2+z*.37,z,tc,'center',FB,700,w-30)}

  const B=[0,3.05,9.3,13.6,23.9,31.4,36.5,DUR];
  const SC=[
  u=>{bg(K.ink);wrap(()=>{const p=eo(seg(u,0,.7));A(p,()=>{c.save();c.translate(0,-(1-p)*300);rr(60,120,960,780,44,K.ink2,K.co,6);tx('UNGGAH ×10 PDF',W/2,180,34,K.am,'center',FM,700);for(let i=0;i<5;i++)pop(180+i*165,330,seg(u,.9+i*.09,1.4+i*.09),()=>pdf(130+i*165,260+(i%2)*30,i<2?K.te:K.sl,'PDF',.9));c.restore()});A(p,()=>{c.save();c.translate(0,(1-p)*300);rr(60,1020,960,560,44,K.ink2,K.te,6);tx('CHAT RAG',W/2,1090,34,K.te,'center',FM,700);pop(430,1235,seg(u,1.9,2.4),()=>bubble(180,1180,500,110,K.co,'Halo!',K.iv,0));c.restore()});const s='UJI BEBAN'.slice(0,Math.floor(seg(u,.6,1.5)*10));A(1-seg(u,2.3,2.9),()=>tx(s+(u<1.6&&u%.4<.2?'|':''),W/2,1010,150,K.iv))})},
  u=>{bg(K.iv);wrap(()=>{rise(seg(u,0,.5),60,()=>{tx('Unggah serentak',W/2,150,64,K.iv);tx('antrean BullMQ',W/2,215,32,K.sl,'center',FM,700)});A(seg(u,.1,.5),()=>{rr(50,270,540,650,36,'#1d2b45',K.sl,6);tx('ANTREAN',320,255,24,K.pe,'center',FM,700)});A(seg(u,.3,.8),()=>{rr(660,330,340,640,36,K.ink2,K.sl,4);tx('WORKER',830,385,28,K.am,'center',FM,700);for(let k=0;k<2;k++)rr(700,420+k*230,260,200,28,'rgba(255,255,255,.07)')});
  const m=Math.floor(u-.45),fr=u-.45-m,f=u<.45?0:Math.min(10,2*(m+eo(seg(fr,0,.35))));let done=0;
  for(let i=0;i<10;i++){const s=.8+Math.floor(i/2)*1,k=i%2,r=i-f,qx=80+(Math.max(r,0)%4)*125,qy=330+Math.floor(Math.max(r,0)/4)*190,wx=770,wy=440+k*230;
  const dr=eo(seg(u,i*.05,.55+i*.05));if(u>=s+.9){done++;continue}
  let x=qx,y=qy-(1-dr)*500,sc=.75,col=K.sl;if(u>=s-.35){const p=eo(seg(u,s-.35,s));x=lp(80+(i%2)*125,wx,p);y=lp(330,wy,p);sc=lp(.75,.95,p);col=u>=s?K.te:K.sl;if(u>=s){x=wx;y=wy}}
  A(dr*3,()=>{pdf(x,y,col,'',sc);if(u>=s){rr(720,570+k*230,220,16,8,'rgba(23,34,53,.4)');rr(720,570+k*230,220*seg(u,s,s+.9),16,8,K.am)}})}
  pop(830,1050,seg(u,.8,1.2),()=>{rr(660,1010,340,100,50,K.ink2,K.sl,4);tx('selesai '+done+'/10',830,1075,40,done?K.te:K.iv,'center',FM,700)});
  rise(seg(u,1.3,1.8),80,()=>{rr(60,1180,960,330,40,K.ink2,K.co,6);tx('Chat tetap lancar',W/2,1270,48,K.te);const q=seg(u,2.5,3);pop(300,1370,q,()=>bubble(140,1320,320,90,K.co,'Tanya',K.iv,0));pop(760,1400,seg(u,3.3,3.8),()=>bubble(600,1330,320,90,K.sd,'Instan!',K.ink,1))})})},
  u=>{bg(K.pe);wrap(()=>{rise(seg(u,0,.5),60,()=>tx('Konsumsi RAM',W/2,260,86,K.iv));pop(540,680,seg(u,.2,.7),()=>rr(140,420,800,520,48,K.ink2,K.sl,4));for(let i=0;i<20;i++){const b=eo(seg(u,.5+i*.03,1.1+i*.03)),h=(60+((i*37)%70))*b+Math.sin(u*3+i)*(u>1.7?4:12)*b;rr(190+i*34,880-h,24,h,8,K.te)}A(seg(u,1.2,1.7),()=>{ln(190,700,890*seg(u,1.2,1.8)+(1-seg(u,1.2,1.8))*190,700,K.am,5,[14,12]);tx('batas aman',890,680,24,K.am,'right',FM,700)});rise(seg(u,1.9,2.4),50,()=>tx('stabil & tenang',W/2,1100,64,K.iv));pop(540,1225,seg(u,2.4,2.9),()=>{rr(260,1170,560,110,55,K.ink2,K.sl,4);ci(330,1225,28,K.te);tx('2 Worker aktif',590,1240,34,K.iv,'center',FM,700)});A(seg(u,3,3.4),()=>tx('contoh ilustrasi',W/2,1360,26,K.sl,'center',FM,500))})},
  u=>{bg(K.ink);wrap(()=>{A(seg(u,0,.5),()=>{rr(60,90,960,230,36,K.ink2,K.co,6);for(let i=0;i<6;i++)pdf(100+i*150,130+(i%2)*10+Math.sin(u*2+i)*4,i<2?K.te:K.sl,'',.55);rr(110,262,800*((u*.25)%1),10,5,K.am);tx('antrean tetap jalan',W/2,300,26,K.am,'center',FM,700)});c.save();const z=1+.04*Math.sin(Math.PI*seg(u,3,9));c.translate(540,900);c.scale(z,z);c.translate(-540,-900);rise(seg(u,.3,.9),200,()=>{rr(240,380,600,1050,70,K.iv,K.sl,8);rr(420,410,240,26,13,K.sd)});
  const Q=(t0,qt,rt,ms,y)=>{pop(480,y+55,seg(u,t0,t0+.4),()=>bubble(300,y,360,100,K.sd,qt,K.ink,0,34));pop(705,y+130,seg(u,t0+1.2,t0+1.6),()=>{rr(620,y+110,170,50,25,K.te);tx('Tool RAG',705,y+144,20,K.ink,'center',FM,700)});if(u>t0+1.5&&u<t0+2.1){for(let d=0;d<3;d++)ci(380+d*30,y+205,7+3*Math.sin(u*14+d),K.co)}pop(555,y+235,seg(u,t0+2.1,t0+2.5),()=>bubble(320,y+170,470,120,K.co,rt,K.iv,1,32));pop(540,y+330,seg(u,t0+3,t0+3.4),()=>{c.save();c.translate(540,y+330);c.rotate(-.05);rr(-170,-48,340,96,28,K.am);tx('~'+Math.round(ms*eo(seg(u,t0+3,t0+3.5)))+' ms',0,18,56,K.ink);c.restore()})};
  Q(1,'Apa itu HNSW?','Indeks graf cari vektor',13,480);Q(5.6,'Ringkas bab 2','Ringkasan siap!',12,480+0);c.restore();
  A(seg(u,3.6,4),()=>tx('contoh ilustrasi',540,1480,24,K.sl,'center',FM,500))})},
  u=>{bg(K.iv);wrap(()=>{A(seg(u,0,.5),()=>{rr(60,140,960,360,40,'#1d2b45',K.sl,6);tx('MEJA DEPAN · API',W/2,200,30,K.pe,'center',FM,700)});pop(260,360,seg(u,.5,1),()=>{rr(130,260,260,200,24,K.co);tx('202',260,380,90,K.iv);tx('Accepted',260,425,28,K.iv,'center',FM,700)});const t=eio(seg(u,1.6,3.4));pop(530,360,seg(u,1.1,1.5),()=>{});c.save();c.translate(lp(0,330,t),lp(0,610,seg(t,.55,1)));if(u>1.1){rr(430,300,200,120,24,K.am);tx('No. 07',530,380,48,K.ink)}c.restore();ln(650,360,960,360,K.co,8,[16,14]);
  A(seg(u,.8,1.4),()=>{rr(60,640,960,820,40,K.ink2,K.sl,4);tx('DAPUR BELAKANG · WORKER',W/2,710,30,K.am,'center',FM,700);rr(150,780,780,420,36,K.ink,K.te,6)});
  if(u>1.4){pdf(210,850,K.sl,'PDF',1.3);rr(480,860,170,260,24,K.te);for(let i=0;i<4;i++)ln(510+i*35,880,510+i*35,1100,K.ink,6);ln(360,990,460,990,K.te,10);ln(670,990,740,990,K.am,10);for(let i=0;i<3;i++)pop(820,925+i*65,seg(u,3.4+i*.25,3.8+i*.25),()=>rr(760,900+i*65,120,50,12,K.am))}
  pop(850,1320,seg(u,5,5.5),()=>{ci(850,1320,70,K.cr);tx('?',850,1355,100,K.iv)});rise(seg(u,5.3,5.8),40,()=>tx('amnesia konteks?',430,1340,40,K.iv,'center',FB,700,600))})},
  u=>{bg(K.ink2);const z=lp(.9,1,eo(seg(u,0,.7)));c.save();c.translate(540,600);c.scale(z,z);c.translate(-540,-600);wrap(()=>{rr(60,200,960,820,44,K.ink,K.co,6);for(let i=0;i<3;i++)ci(120+i*44,260,12,[K.cr,K.am,K.te][i]);tx('worker.ts',W/2,270,26,K.sl,'center',FM,700);const L=['worker.process(job)','  text = extract(pdf)','  chunks = splitText(','     text, overlap)','  for c of chunks:','     embed(c)'];L.forEach((s,i)=>{const p=seg(u,.4+i*.3,.4+i*.3+.35);if(i>=2&&i<=3)A(seg(u,1.9,2.4),()=>{c.save();c.beginPath();c.rect(90,0,900*seg(u,1.9,2.4),H);c.clip();rr(90,330+i*80,900,70,16,'rgba(255,198,92,.2)');c.restore()});tx(s.slice(0,Math.ceil(s.length*p)),110,380+i*80,38,i>=2&&i<=3&&u>1.9?K.am:K.iv,'left',FM,700,860)})});c.restore();
  wrap(()=>{const col=[K.te,K.co,K.pe,K.te];for(let i=0;i<4;i++)pop(205+i*220,1170,seg(u,2.6+i*.25,3.1+i*.25),()=>{rr(110+i*220,1120,190,100,24,col[i]);tx('#'+(i+1),205+i*220,1185,44,K.ink)});A(seg(u,3.5,3.9),()=>ln(540,1230,540,1230+100*seg(u,3.5,3.9),K.am,10));pop(540,1455,seg(u,3.8,4.3),()=>{rr(390,1340,300,230,50,K.pe,K.iv,6);ci(480,1430,26,K.ink);ci(600,1430,26,K.ink);ln(480,1510,600,1510,K.ink,8);ln(540,1340,540,1300,K.iv,6);ci(540,1290,14,K.am)})})},
  u=>{bg(K.co);const mo=eio(seg(u,0,.9));wrap(()=>{for(let i=0;i<10;i++){const h=120+((i*53)%200),fx=lp(110+(i%4)*220,120+i*80,mo),fy=lp(1120,640-h,mo),fw=lp(190,56,mo),fh=lp(100,h,mo);if(i<4||mo>.05)A(i<4?1:mo*3,()=>rr(fx,fy,fw,fh,lp(24,18,mo),i%3?K.iv:K.am));}
  rise(seg(u,.9,1.5),60,()=>{tx('Contextual',W/2,820,130,K.iv);tx('Vector Embedding',W/2,950,100,K.am)});pop(540,1190,seg(u,1.6,2.1),()=>{rr(120,1040,840,300,44,K.am);tx('Unggah 10 PDF berat sambil chatting',W/2,1130,44,K.ink,'center',FB,800,780);tx('tetap lancar jaya!',W/2,1190,54,K.ink);tx('Lanjut Part 5: Contextual',W/2,1260,36,K.ink,'center',FM,700,780);tx('Vector Embedding!',W/2,1310,36,K.ink,'center',FM,700,780)});pop(900,200,seg(u,2.9,3.4),()=>{ci(900,200,110,'#1d2b45',K.am,6);tx('5',900,245,150,K.am);tx('PART',900,115,26,K.iv,'center',FM,700)})})}
  ];

  const CUES=[[.52,1.98],[3.08,6.94],[7.34,9.34],[9.36,11.82],[13.7,15.22],[15.6,19.08],[19.1,22.16],[23.98,26.54],[27.82,31.38],[31.42,34.88],[36.52,39.42],[39.44,41.32]];
  const CHK=[['Mari kita lihat','hasil uji bebannya'],['Di layar atas,','kita mengunggah sepuluh','berkas PDF tebal','secara serentak'],['dan antrean BullMQ','mengolahnya dua demi dua'],['dengan konsumsi RAM','yang sangat tenang'],['Di saat yang bersamaan','di layar bawah'],['pengguna lain tetap bisa','melakukan chat dan','memanggil Tool RAG'],['dengan respons instan','belasan milidetik','tanpa lag sedikit pun!'],['Sekarang pipa antrean','kita sudah berjalan mulus'],['Pertanyaannya, apa rahasia','yang dilakukan oleh','Worker di dalam dapur'],['saat memotong teks PDF','agar AI tidak mengalami','amnesia konteks?'],['Di bagian kelima,','kita akan bedah teknik','Contextual Vector Embedding'],['menggunakan model AI ringan']];
  const CH=[];CUES.forEach((q,ci_)=>{const L=CHK[ci_],tot=L.reduce((a,s)=>a+s.length,0);let t=q[0];L.forEach(s=>{const d=(q[1]-q[0])*s.length/tot;CH.push([t,t+d,s,ci_]);t+=d})});
  CH.forEach((q,i)=>{const n=CH[i+1];q[1]=n&&n[0]-q[1]<.3?n[0]-.06:q[1]+.2});
  const PAL=[[K.iv,K.am],[K.iv,K.cr],[K.iv,K.pe],[K.iv,K.am],[K.iv,K.cr],[K.iv,K.am],[K.iv,K.am]],HI=/BullMQ|RAM|PDF|Worker|RAG|Vector|dua|milidetik|AI|sepuluh/;
  function cap(t,si){if(!SUB)return;const k=CH.findIndex(q=>t>=q[0]&&t<q[1]);if(k<0)return;const q=CH[k],[bc,pf]=PAL[si],ws=q[2].split(' '),z0=72;c.save();c.font='800 '+z0+'px '+FB;const w0=ws.map(w=>c.measureText(w).width),gap=22,tot=w0.reduce((a,b)=>a+b,0)+gap*(ws.length-1),s=Math.min(1,980/tot),z=z0*s,y=1700,u=t-q[0],o=cl((t-(q[1]-.18))/.18);let x=(W-tot*s)/2;const x0=x;
  ws.forEach((w,i)=>{const p=eo(cl((u-i*.07)/.28)),v=k%4,ww=w0[i]*s;c.save();c.globalAlpha=cl(p*1.4)*(1-o);let dx=0,dy=-o*44;if(v==0)dy+=(1-p)*70;else if(v==1)dy-=(1-p)*70;else if(v==2)dx=-(1-p)*130;else{const sc=ebo(p);c.translate(x+ww/2,y);c.scale(sc,sc);c.translate(-(x+ww/2),-y)}c.translate(dx,dy);c.font='800 '+z+'px '+FB;c.fillStyle=HI.test(w)?pf:bc;c.textAlign='left';c.fillText(w,x,y);c.restore();x+=ww+gap*s});
  c.globalAlpha=1-o;rr(x0,y+34,tot*s*cl(u/(q[1]-q[0])),8,4,pf);c.restore()}

  function render(ctx,t,sub){c=ctx;SUB=sub;t=cl(t,0,DUR);let i=0;while(i<6&&t>=B[i+1])i++;c.save();
  const nx=i<6&&t>B[i+1]-.5?i+1:-1;SC[i](t-B[i]);if(nx<0)cap(t,i);
  if(nx>=0){const p=eio(seg(t,B[nx]-.5,B[nx])),ty=nx%3;cap(t,i);c.save();c.beginPath();
  if(ty==0){c.arc(W/2,H*.62,p*2300,0,7)}else if(ty==1){c.moveTo(0,H);c.lineTo(0,H*(1-p));for(let x=0;x<=W;x+=30)c.lineTo(x,H*(1-p*1.12)+Math.sin(x/110+p*6)*60*Math.sin(Math.PI*p));c.lineTo(W,H)}else{const d=p*(W+H+300)-150;c.moveTo(-100,H+100);c.lineTo(-100,H-d);c.lineTo(W+100,H-d+W*.35-150);c.lineTo(W+100,H+100)}
  c.closePath();c.clip();SC[nx](0);cap(t,nx);c.restore();c.save();c.beginPath();
  if(ty==0)c.arc(W/2,H*.62,p*2300,0,7);else if(ty==1){c.moveTo(0,H*(1-p*1.12));for(let x=0;x<=W;x+=30)c.lineTo(x,H*(1-p*1.12)+Math.sin(x/110+p*6)*60*Math.sin(Math.PI*p))}else{const d=p*(W+H+300)-150;c.moveTo(-100,H-d);c.lineTo(W+100,H-d+W*.35-150)}
  c.strokeStyle=K.am;c.lineWidth=18*Math.sin(Math.PI*p)+2;c.stroke();c.restore()}
  c.restore()}

  const EV=[];const E=(t,k,a)=>EV.push([t,k,a]);
  [[1,'whoosh'],[2,'rise'],[3,'slide'],[4,'whoosh'],[5,'rise'],[6,'whoosh']].forEach(([k,n])=>{E(B[k]-.5,n);if(n=='rise'||n=='slide')E(B[k]-.4,n=='rise'?'whoosh':'zip')});
  for(let i=0;i<9;i++)E(.6+i*.1,'tick');for(let i=0;i<5;i++)E(.9+i*.09,'pop',1+i*.06);E(1.9,'boop');
  for(let i=0;i<10;i++)E(3.05+i*.05,'tap',1+i*.03);for(let k=0;k<5;k++){E(3.05+.8+k,'snap');E(3.05+1.7+k,'ding',1+k*.1)}E(3.05+2.5,'tap');E(3.05+3.3,'blip');
  E(9.3+.5,'boop');for(let i=0;i<6;i++)E(9.3+.6+i*.15,'tap',1+i*.08);E(9.3+1.2,'zip');E(9.3+2.4,'stamp');
  [1,5.6].forEach((o,j)=>{E(13.6+o,'tap');E(13.6+o+1.2,'blip');E(13.6+o+2.1,'ding',1+j*.1);E(13.6+o+3,'stamp')});
  E(23.9+.5,'boop');E(23.9+1.1,'blip');E(23.9+1.6,'zip');E(23.9+3.4,'thud');E(23.9+5,'glitch');
  for(let i=0;i<6;i++)E(31.4+.4+i*.3,'tick');E(31.4+1.9,'snap');for(let i=0;i<4;i++)E(31.4+2.6+i*.25,'ding',1+i*.12);E(31.4+3.8,'zip');E(31.4+3.9,'boop');
  E(36.5+.2,'rise',.8);E(36.5+1.6,'stamp');E(36.5+2.9,'stamp');E(36.5+3.5,'sparkle');E(36.5+4,'chime');
  const AC=['tap','blip','zip','tap','snap','blip'];CH.forEach((q,i)=>{E(q[0]+.02,AC[i%6],1+(i%3)*.15);if(HI.test(q[2])&&/BullMQ|RAM|Worker|Vector/.test(q[2]))E(q[0]+.12,'ding',1.2)});
  EV.sort((a,b)=>a[0]-b[0]);

  function scheduleSfx(ctx,out,from,T){
    const g=ctx.createGain();g.gain.value=.34;g.connect(out);
    const nzb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),d=nzb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
    EV.forEach(([t,k,a])=>{if(t<from||t>DUR)return;const at=T+t-from,m=a||1;
    const osc=(ty,f0,f1,du,ga,dl=0)=>{const o=ctx.createOscillator(),e=ctx.createGain();o.type=ty;o.frequency.setValueAtTime(f0,at+dl);o.frequency.exponentialRampToValueAtTime(f1,at+dl+du);e.gain.setValueAtTime(0,at+dl);e.gain.linearRampToValueAtTime(ga,at+dl+.005);e.gain.exponentialRampToValueAtTime(.0001,at+dl+du);o.connect(e);e.connect(g);o.start(at+dl);o.stop(at+dl+du+.05)};
    const nz=(f0,f1,du,ga,q)=>{const s=ctx.createBufferSource(),b=ctx.createBiquadFilter(),e=ctx.createGain();s.buffer=nzb;b.type='bandpass';b.Q.value=q;b.frequency.setValueAtTime(f0,at);b.frequency.exponentialRampToValueAtTime(f1,at+du);e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(ga,at+du*.2);e.gain.exponentialRampToValueAtTime(.0001,at+du);s.connect(b);b.connect(e);e.connect(g);s.start(at,0,du+.05)};
    ({pop:()=>osc('sine',600*m,1080*m,.16,.5),tick:()=>osc('square',2600,2600,.025,.1),whoosh:()=>nz(300,3200,.5,.7,.8),thud:()=>{osc('sine',140,40,.3,.9);nz(500,120,.2,.3,.7)},rise:()=>nz(400,2600,.8,.4,2),chime:()=>[523,659,784,1047].forEach((f,i)=>osc('sine',f,f,1,.25,i*.06)),boop:()=>osc('sine',220*m,330*m,.14,.5),tap:()=>osc('sine',1000*m,650*m,.06,.22),blip:()=>{osc('triangle',880*m,880*m,.07,.25);osc('triangle',1320*m,1320*m,.08,.25,.07)},zip:()=>osc('triangle',300*m,2400*m,.18,.22),snap:()=>nz(3500,7000,.04,.4,1.5),ding:()=>{osc('sine',784*m,784*m,.9,.3);osc('sine',2160*m,2160*m,.5,.1)},sparkle:()=>[1319,1568,1976,2349,2637].forEach((f,i)=>osc('sine',f,f,.15,.15,i*.05)),glitch:()=>{osc('square',440,110,.15,.15);nz(1200,300,.12,.3,2)},slide:()=>nz(2200,500,.3,.35,1.2),stamp:()=>{osc('sine',160,50,.25,.8);nz(2500,800,.05,.35,1)}})[k]()});
  }
  return { DUR, CH, render, scheduleSfx };
}

// ============================================================================
// OUTRO (Exact port from alifpustaka-logo-reveal.html onto 2D Canvas)
// ============================================================================
function createOutro() {
  const W=1080,H=1920,DUR=4.0;
  const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
  const prog=(t,a,b)=>clamp((t-a)/(b-a));
  const eOutCubic=x=>1-Math.pow(1-x,3);
  const eInOut=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
  const eBack=x=>1+2.4*Math.pow(x-1,3)+1.4*Math.pow(x-1,2);
  const S0=900/1621.3, LC=[122.7,132.9], LW=[810.65,132.9], DX=LW[0]-LC[0], K=2.2;
  const RAW=[1217.5,916.5], CY=960;
  const TAG='Ruang Literasi, Rumah Inovasi';

  const LOGO_SPECS = [
    ['M1189.26,941.45v28.86a9.63,9.63,0,0,0,4.83,8.35l60.29,34.69a9.64,9.64,0,0,0,9.61,0L1289.05,999a9.63,9.63,0,0,0,0-16.7l-85.36-49.16A9.63,9.63,0,0,0,1189.26,941.45Z', '#eb0d00', [1241.5, 967.5]],
    ['M1320.87,929.41l-91.66,52.74a9.64,9.64,0,0,0,0,16.71l25.19,14.48a9.62,9.62,0,0,0,9.61,0l66.47-38.25a9.65,9.65,0,0,0,4.83-8.36v-29A9.64,9.64,0,0,0,1320.87,929.41Z', '#ff2b1f', [1277.5, 966.5]],
    ['M1291,869.07V981.19a9.64,9.64,0,0,0,14.45,8.36l25.06-14.42a9.65,9.65,0,0,0,4.84-8.36V883.5a9.66,9.66,0,0,0-4.83-8.36l-25.08-14.42A9.63,9.63,0,0,0,1291,869.07Z', '#ff5b52', [1313.2, 925.1]],
    ['M1276.87,844.3l53.61,30.84a9.66,9.66,0,0,1,4.83,8.36v28.79a9.64,9.64,0,0,1-14.45,8.35l-53.6-30.84a9.63,9.63,0,0,1-4.83-8.35V852.66A9.64,9.64,0,0,1,1276.87,844.3Z', '#ff8b85', [1298.8, 882.5]],
    ['M1189.26,1013.85v25.86a9.64,9.64,0,0,0,14.45,8.35l22.47-12.93a9.64,9.64,0,0,0,0-16.71l-22.47-12.93A9.65,9.65,0,0,0,1189.26,1013.85Z', '#6bff73', [1210.1, 1026.8]],
    ['M1235.87,890.42l-32.16-18.5a9.64,9.64,0,0,0-14.45,8.35v21.22a9.65,9.65,0,0,0,4.83,8.35l32.17,18.51A9.64,9.64,0,0,0,1240.7,920V898.78A9.64,9.64,0,0,0,1235.87,890.42Z', '#38ff43', [1215.0, 905.2]],
    ['M1240.7,857.86V829.07a9.63,9.63,0,0,0-4.83-8.35l-62.3-35.85a9.64,9.64,0,0,0-9.61,0l-25,14.4a9.64,9.64,0,0,0,0,16.71l87.33,50.23A9.63,9.63,0,0,0,1240.7,857.86Z', '#0d00eb', [1187.4, 821.4]],
    ['M1094.78,858.25v-28a9.66,9.66,0,0,1,4.83-8.35l64.35-37a9.64,9.64,0,0,1,9.61,0l24.41,14a9.64,9.64,0,0,1,0,16.71l-88.76,51A9.64,9.64,0,0,1,1094.78,858.25Z', '#2b1fff', [1146.5, 821.6]],
    ['M1139.08,930.27,1139,815.91a9.64,9.64,0,0,0-14.44-8.35l-24.91,14.33a9.66,9.66,0,0,0-4.83,8.35l0,85.66a9.63,9.63,0,0,0,4.83,8.35l25,14.38A9.63,9.63,0,0,0,1139.08,930.27Z', '#5b52ff', [1117.0, 873.1]],
    ['M1152.5,954.71l-52.88-30.42a9.64,9.64,0,0,1-4.83-8.35V887.06a9.63,9.63,0,0,1,14.44-8.35l52.88,30.42a9.64,9.64,0,0,1,4.83,8.35v28.88A9.63,9.63,0,0,1,1152.5,954.71Z', '#8b85ff', [1130.9, 916.9]]
  ];

  const TEXT_DS = [
    'M1551.62,854.06a13.23,13.23,0,0,1,9.76,3.86,13.51,13.51,0,0,1,3.86,10v96a13.59,13.59,0,0,1-3.86,9.87,14,14,0,0,1-19.52,0,13.59,13.59,0,0,1-3.86-9.87V952.79l5,2q0,3-3.18,7.15a43.17,43.17,0,0,1-8.62,8.28,52.78,52.78,0,0,1-12.83,6.93,44.23,44.23,0,0,1-16,2.83,51.89,51.89,0,0,1-28.37-8,56.64,56.64,0,0,1-20.09-22.25q-7.37-14.18-7.37-32.57,0-18.6,7.37-32.79a57.3,57.3,0,0,1,19.86-22.24,50,50,0,0,1,27.69-8.06,52.33,52.33,0,0,1,17.93,3,53.55,53.55,0,0,1,14.19,7.49,42.91,42.91,0,0,1,9.3,9.19q3.3,4.65,3.3,7.83l-8.18,3V867.9a13.62,13.62,0,0,1,3.86-9.87A13,13,0,0,1,1551.62,854.06Zm-45.84,101a30.75,30.75,0,0,0,17.47-5,33.59,33.59,0,0,0,11.69-13.61,43.49,43.49,0,0,0,4.2-19.3,44,44,0,0,0-4.2-19.51A33.69,33.69,0,0,0,1523.25,884a30.75,30.75,0,0,0-17.47-5,30.35,30.35,0,0,0-17.25,5,33.69,33.69,0,0,0-11.69,13.62,44,44,0,0,0-4.2,19.51,43.49,43.49,0,0,0,4.2,19.3,33.59,33.59,0,0,0,11.69,13.61A30.35,30.35,0,0,0,1505.78,955.06Z',
    'M1625.38,963.91a13.56,13.56,0,0,1-13.84,13.84,12.73,12.73,0,0,1-9.53-4,13.55,13.55,0,0,1-3.86-9.87V823.64A13.56,13.56,0,0,1,1612,809.8a12.7,12.7,0,0,1,9.65,4,13.82,13.82,0,0,1,3.74,9.87Z',
    'M1670.09,841.58q-7.71,0-10.89-2.5c-2.12-1.66-3.18-4.62-3.18-8.85v-4.32q0-6.57,3.52-9t10.78-2.38q7.93,0,11.12,2.49t3.18,8.85v4.32q0,6.59-3.41,9T1670.09,841.58Zm13.85,122.33a13.59,13.59,0,0,1-3.86,9.87,14,14,0,0,1-19.52,0,13.59,13.59,0,0,1-3.86-9.87V870.17a13.62,13.62,0,0,1,3.86-9.87,14,14,0,0,1,19.52,0,13.62,13.62,0,0,1,3.86,9.87Z',
    'M1777.9,858.6a12.51,12.51,0,0,1,9.08,3.52,12.89,12.89,0,0,1,0,17.93,12.55,12.55,0,0,1-9.08,3.51h-60.15a12.51,12.51,0,0,1-9.07-3.51,12.86,12.86,0,0,1,0-17.93,12.47,12.47,0,0,1,9.07-3.52Zm-2.5-48.8a35.23,35.23,0,0,1,9.76,1.36,18.63,18.63,0,0,1,7.95,4.43,10.7,10.7,0,0,1,3.17,8q0,5.68-3.29,9a10.41,10.41,0,0,1-7.6,3.29,28.06,28.06,0,0,1-6.13-1,32.7,32.7,0,0,0-7.94-1q-5.68,0-8.74,2.49a13,13,0,0,0-4.2,5.79,18,18,0,0,0-1.13,5.79v116a13.59,13.59,0,0,1-3.86,9.87,14,14,0,0,1-19.52,0,13.55,13.55,0,0,1-3.86-9.87V848.16a36.67,36.67,0,0,1,11.35-27.24Q1752.7,809.81,1775.4,809.8Z',
    'M1910.37,854.06a51.71,51.71,0,0,1,28.48,8.06,57.17,57.17,0,0,1,20,22.12q7.37,14.09,7.37,32.69t-7.37,32.79A57.63,57.63,0,0,1,1939.08,972a49.83,49.83,0,0,1-27.8,8,48.36,48.36,0,0,1-17-2.95,54,54,0,0,1-14-7.49,42.75,42.75,0,0,1-9.31-9.19q-3.29-4.65-3.29-7.83l7-2.95v59.69a13.65,13.65,0,0,1-3.86,9.88,13.08,13.08,0,0,1-9.76,4,13.23,13.23,0,0,1-9.76-3.86,13.54,13.54,0,0,1-3.86-10V870.17a13.62,13.62,0,0,1,3.86-9.87,14,14,0,0,1,19.52,0,13.62,13.62,0,0,1,3.86,9.87v11.12l-3.86-2c0-2,1-4.35,3.18-7.15a45.81,45.81,0,0,1,8.62-8.4,49.46,49.46,0,0,1,12.6-6.92A42.1,42.1,0,0,1,1910.37,854.06Zm-3.4,25a30.76,30.76,0,0,0-17.48,5,33.94,33.94,0,0,0-11.69,13.5,43.3,43.3,0,0,0-4.2,19.41,44.18,44.18,0,0,0,4.2,19.4,33.5,33.5,0,0,0,11.69,13.73,30.76,30.76,0,0,0,17.48,5,30.24,30.24,0,0,0,17.36-5,33.85,33.85,0,0,0,11.57-13.73,44.18,44.18,0,0,0,4.2-19.4,43.3,43.3,0,0,0-4.2-19.41,34.3,34.3,0,0,0-11.57-13.5A30.24,30.24,0,0,0,1907,879Z',
    'M2081.27,856.33a13,13,0,0,1,9.76,4,13.62,13.62,0,0,1,3.86,9.87v57.65q0,24.06-13.39,38.13T2042.92,980q-25.2,0-38.47-14.07t-13.28-38.13V870.17a13.58,13.58,0,0,1,3.86-9.87,14,14,0,0,1,19.52,0,13.62,13.62,0,0,1,3.85,9.87v57.65q0,13.84,6.13,20.54t18.39,6.7q12.48,0,18.61-6.7t6.12-20.54V870.17a13.62,13.62,0,0,1,3.86-9.87A13,13,0,0,1,2081.27,856.33Z',
    'M2118.49,958.92a12.73,12.73,0,0,1-2-8.17q.23-5,5.9-8.63a12.3,12.3,0,0,1,7.72-1.93q4.08.34,7.94,4.2a53.38,53.38,0,0,0,13.85,10.21q7.26,3.64,18.15,3.63a56.67,56.67,0,0,0,7.49-1,14.18,14.18,0,0,0,7.15-3.63q3.07-2.83,3.07-8.74a10,10,0,0,0-3.41-7.94,28.83,28.83,0,0,0-9-5q-5.57-2-12.37-3.86-7-2-14.41-4.54a60,60,0,0,1-13.51-6.47,31.12,31.12,0,0,1-10-10.55q-3.86-6.59-3.85-16.57,0-11.35,6.35-19.29A41.51,41.51,0,0,1,2144,858.37a53.53,53.53,0,0,1,21.22-4.31,68.82,68.82,0,0,1,14.75,1.7,57.84,57.84,0,0,1,14.75,5.45,36.35,36.35,0,0,1,11.8,9.87,16.12,16.12,0,0,1,3,8.17q.45,4.77-4.32,8.63a11,11,0,0,1-7.94,2.38,12,12,0,0,1-7.49-3.06,26.85,26.85,0,0,0-10.33-8,35.57,35.57,0,0,0-14.86-3,38.54,38.54,0,0,0-7.38.79,14.62,14.62,0,0,0-6.92,3.41q-3,2.61-2.95,8.28a10.58,10.58,0,0,0,3.4,8.29,25.68,25.68,0,0,0,9.19,5q5.79,1.94,12.37,3.75,6.81,1.82,13.85,4.31a54.65,54.65,0,0,1,12.93,6.58,31.15,31.15,0,0,1,9.54,10.55q3.63,6.48,3.63,16.46a29.84,29.84,0,0,1-6.81,19.75,43.05,43.05,0,0,1-17,12.36,54.44,54.44,0,0,1-20.88,4.2,81.14,81.14,0,0,1-26.78-4.65A46.39,46.39,0,0,1,2118.49,958.92Z',
    'M2237.42,858.6h53.79a12.41,12.41,0,0,1,12.71,12.71,11.69,11.69,0,0,1-3.63,8.74,12.55,12.55,0,0,1-9.08,3.51h-53.79a12.41,12.41,0,0,1-12.71-12.71,11.65,11.65,0,0,1,3.63-8.73A12.51,12.51,0,0,1,2237.42,858.6Zm24.28-28.37a12.66,12.66,0,0,1,9.65,4,13.83,13.83,0,0,1,3.75,9.87v101a9.89,9.89,0,0,0,1.24,5.22,7.14,7.14,0,0,0,3.41,3,11.72,11.72,0,0,0,4.65.91,12.08,12.08,0,0,0,5-1,12.6,12.6,0,0,1,5.22-1,7.63,7.63,0,0,1,5.78,2.95q2.61,3,2.61,8.17c0,4.24-2.31,7.71-6.92,10.44a28.8,28.8,0,0,1-14.87,4.08,78.1,78.1,0,0,1-10.55-.79,28.51,28.51,0,0,1-10.89-3.86,23.45,23.45,0,0,1-8.51-9.42q-3.42-6.34-3.41-17.47V844.07a13.56,13.56,0,0,1,13.84-13.84Z',
    'M2429.43,854.06a13.24,13.24,0,0,1,9.76,3.86,13.51,13.51,0,0,1,3.86,10v96a13.59,13.59,0,0,1-3.86,9.87,14,14,0,0,1-19.52,0,13.59,13.59,0,0,1-3.86-9.87V952.79l5,2q0,3-3.18,7.15a43.17,43.17,0,0,1-8.62,8.28,52.78,52.78,0,0,1-12.83,6.93,44.23,44.23,0,0,1-16,2.83,51.89,51.89,0,0,1-28.37-8,56.64,56.64,0,0,1-20.09-22.25q-7.38-14.18-7.37-32.57,0-18.6,7.37-32.79a57.3,57.3,0,0,1,19.86-22.24,50,50,0,0,1,27.69-8.06,52.33,52.33,0,0,1,17.93,3,53.55,53.55,0,0,1,14.19,7.49,42.91,42.91,0,0,1,9.3,9.19c2.2,3.1,3.29,5.71,3.29,7.83l-8.17,3V867.9a13.62,13.62,0,0,1,3.86-9.87A13,13,0,0,1,2429.43,854.06Zm-45.84,101a30.75,30.75,0,0,0,17.47-5,33.67,33.67,0,0,0,11.69-13.61,43.49,43.49,0,0,0,4.2-19.3,44,44,0,0,0-4.2-19.51A33.76,33.76,0,0,0,2401.06,884a30.75,30.75,0,0,0-17.47-5,30.35,30.35,0,0,0-17.25,5,33.61,33.61,0,0,0-11.69,13.62,44,44,0,0,0-4.2,19.51,43.49,43.49,0,0,0,4.2,19.3,33.52,33.52,0,0,0,11.69,13.61A30.35,30.35,0,0,0,2383.59,955.06Z',
    'M2489.57,977.75a13,13,0,0,1-9.76-4,13.58,13.58,0,0,1-3.85-9.87V823.64a13.62,13.62,0,0,1,3.85-9.87,14,14,0,0,1,19.52,0,13.58,13.58,0,0,1,3.86,9.87V963.91a13.55,13.55,0,0,1-3.86,9.87A13,13,0,0,1,2489.57,977.75Zm72.18-121.42a11.85,11.85,0,0,1,9.08,4.31c2.57,2.88,3.86,5.67,3.86,8.4q0,5.44-5.45,10.21l-68.32,62.87-1.13-31.32,52-50.16A13.74,13.74,0,0,1,2561.75,856.33Zm3.4,121.2a12.9,12.9,0,0,1-10-4.54l-42-44.49,20.65-19.06,40.86,44.48a14.51,14.51,0,0,1,4.31,10.22,11.84,11.84,0,0,1-4.65,9.64Q2569.68,977.53,2565.15,977.53Z',
    'M2702.47,854.06a13.22,13.22,0,0,1,9.75,3.86,13.47,13.47,0,0,1,3.86,10v96a13.55,13.55,0,0,1-3.86,9.87,14,14,0,0,1-19.51,0,13.55,13.55,0,0,1-3.86-9.87V952.79l5,2q0,3-3.18,7.15a43.17,43.17,0,0,1-8.62,8.28,52.71,52.71,0,0,1-12.82,6.93,44.29,44.29,0,0,1-16,2.83,51.91,51.91,0,0,1-28.37-8,56.62,56.62,0,0,1-20.08-22.25q-7.38-14.18-7.38-32.57,0-18.6,7.38-32.79a57.15,57.15,0,0,1,19.86-22.24,50,50,0,0,1,27.69-8.06,52.41,52.41,0,0,1,17.93,3,53.64,53.64,0,0,1,14.18,7.49,43.2,43.2,0,0,1,9.31,9.19q3.29,4.65,3.29,7.83l-8.17,3V867.9a13.58,13.58,0,0,1,3.86-9.87A13,13,0,0,1,2702.47,854.06Zm-45.85,101a30.75,30.75,0,0,0,17.47-5,33.59,33.59,0,0,0,11.69-13.61,43.49,43.49,0,0,0,4.2-19.3,44,44,0,0,0-4.2-19.51A33.69,33.69,0,0,0,2674.09,884a30.75,30.75,0,0,0-17.47-5,30.35,30.35,0,0,0-17.25,5,33.76,33.76,0,0,0-11.69,13.62,44,44,0,0,0-4.2,19.51,43.49,43.49,0,0,0,4.2,19.3,33.67,33.67,0,0,0,11.69,13.61A30.35,30.35,0,0,0,2656.62,955.06Z'
  ];

  const rnd=(s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296})(7);
  const COL=['#2b1fff','#5b52ff','#8b85ff','#5b52ff','#2b1fff','#ff8b85'];
  const P=[...Array(34)].map(()=>{const a=rnd()*Math.PI*2,ring=rnd()<.22;return{a,sp:230+rnd()*330,t0:.3+rnd()*.25,life:.8+rnd()*.5,r:ring?7+rnd()*5:2.5+rnd()*4.5,ring,
    fill:ring?'none':COL[Math.floor(rnd()*COL.length)],stroke:ring?COL[Math.floor(rnd()*3)]:'none'}});
  const A=[...Array(16)].map(()=>({x:rnd()*1080,y:200+rnd()*1500,r:2+rnd()*3,ph:rnd()}));

  let logoPaths = null, textPaths = null;
  function ensurePaths() {
    if (!logoPaths && typeof Path2D !== 'undefined') {
      logoPaths = LOGO_SPECS.map(s => new Path2D(s[0]));
      textPaths = TEXT_DS.map(d => new Path2D(d));
    }
  }

  function render(c, t) {
    ensurePaths();
    t = clamp(t, 0, DUR);
    drawThemeBg(c, W, H);

    const u = eInOut(prog(t, 1.0, 1.55)), z = eBack(prog(t, .1, .95));
    const kz = .12 + (K - .12) * z, k = kz + (1 - kz) * u, dx = DX * (1 - u);

    // Ambient dots
    A.forEach(o => {
      const f = (t * .12 + o.ph) % 1;
      const op = Math.sin(Math.PI * f) * .25 * prog(t, .2, .8);
      if (op > 0) {
        c.save();
        c.globalAlpha = op;
        c.fillStyle = '#5b52ff';
        c.beginPath();
        c.arc(o.x, o.y - t * 28, o.r, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    });

    // Glow
    const lx = 540 + (LC[0] + dx - LW[0]) * S0, ly = CY;
    const gx = lx + (540 - lx) * .5 * u, gy = ly;
    const gop = prog(t, 0, .6) * (1 - .55 * u);
    if (gop > 0 && c.createRadialGradient) {
      c.save();
      c.globalAlpha = gop;
      const grd = c.createRadialGradient(gx, gy, 0, gx, gy, 560);
      grd.addColorStop(0, 'rgba(91, 82, 255, 0.25)');
      grd.addColorStop(1, 'rgba(91, 82, 255, 0)');
      c.fillStyle = grd;
      c.beginPath();
      c.arc(gx, gy, 560, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }

    // Expanding rings r1, r2
    [['#5b52ff', .32, 1.0, 60, 560, .4, 2.4], ['#8b85ff', .46, 1.1, 40, 420, .28, 1.6]].forEach(([col, a, b, r0, r1, al, sw]) => {
      const q = prog(t, a, b), e = eOutCubic(q);
      const op = q > 0 && q < 1 ? al * (1 - q) : 0;
      if (op > 0) {
        c.save();
        c.globalAlpha = op;
        c.strokeStyle = col;
        c.lineWidth = sw * (1 - .6 * q);
        c.beginPath();
        c.arc(540, CY, r0 + (r1 - r0) * e, 0, Math.PI * 2);
        c.stroke();
        c.restore();
      }
    });

    // Particles P
    P.forEach(o => {
      const a = (t - o.t0) / o.life;
      if (a <= 0 || a >= 1) return;
      const d = o.sp * eOutCubic(a);
      const px = 540 + Math.cos(o.a) * d, py = CY + Math.sin(o.a) * d;
      const pr = o.r * (o.ring ? (.6 + a * 1.6) : (1 - a * .5));
      c.save();
      c.globalAlpha = Math.pow(1 - a, 1.4) * .9;
      c.beginPath();
      c.arc(px, py, Math.max(0.1, pr), 0, Math.PI * 2);
      if (o.ring) {
        c.strokeStyle = o.stroke;
        c.lineWidth = 2.2;
        c.stroke();
      } else {
        c.fillStyle = o.fill;
        c.fill();
      }
      c.restore();
    });

    // Lockup: transform="translate(540 960) scale(0.55509) translate(-810.65 -132.9)"
    c.save();
    c.translate(540, 960);
    c.scale(0.55509, 0.55509);
    c.translate(-810.65, -132.9);

    // #logo
    const logoOp = prog(t, .1, .35);
    if (logoOp > 0) {
      c.save();
      c.translate(LC[0] + dx, LC[1]);
      c.scale(k, k);
      c.translate(-LC[0], -LC[1]);
      c.translate(-1094.78, -783.59);
      LOGO_SPECS.forEach((spec, i) => {
        const q = prog(t, .05 + i * .04, .6 + i * .04), e = eOutCubic(q), [cx, cy] = spec[2];
        const op = logoOp * clamp(q * 2.2);
        if (op <= 0) return;
        let vx = cx - RAW[0], vy = cy - RAW[1];
        const dist = Math.hypot(vx, vy) || 1;
        const m = 70 * (1 - e) / dist;
        const sc = .55 + .45 * e;
        c.save();
        c.globalAlpha = op;
        c.translate(vx * m, vy * m);
        c.translate(cx, cy);
        c.scale(sc, sc);
        c.translate(-cx, -cy);
        c.fillStyle = spec[1];
        if (logoPaths && logoPaths[i]) c.fill(logoPaths[i]);
        c.restore();
      });
      c.restore();
    }

    // #text (wordmark letters)
    c.save();
    c.translate(-1094.78, -783.59);
    TEXT_DS.forEach((_, i) => {
      const q = prog(t, 1.1 + i * .03, 1.4 + i * .03), e = eOutCubic(q);
      if (e <= 0) return;
      c.save();
      c.globalAlpha = e;
      c.translate(-34 * (1 - e), 0);
      c.fillStyle = '#F6F5EE';
      if (textPaths && textPaths[i]) c.fill(textPaths[i]);
      c.restore();
    });
    c.restore();
    c.restore();

    // Tagline & Caret
    c.save();
    c.font = '700 46px Nunito, "Bricolage Grotesque", system-ui, sans-serif';
    c.textAlign = 'left';
    c.textBaseline = 'alphabetic';
    const fullW = c.measureText(TAG).width;
    const tagX = 540 - fullW / 2;
    const n = Math.floor(prog(t, 1.75, 2.95) * TAG.length + 1e-6);
    const subTag = n ? TAG.slice(0, n) : '';
    if (subTag) {
      c.fillStyle = '#F6F5EE';
      c.fillText(subTag, tagX, 1130);
    }
    const subW = subTag ? c.measureText(subTag).width : 0;
    const co = t < 1.7 ? 0 : t < 2.95 ? 1 : t < 3.5 ? (Math.floor((t - 2.95) / .18) % 2 ? 0 : 1) : 0;
    if (co > 0) {
      c.globalAlpha = co;
      c.fillStyle = '#5b52ff';
      c.beginPath();
      c.roundRect(tagX + subW + 4, 1088, 4, 54, 2);
      c.fill();
    }
    c.restore();

    // URL pill + globe
    const uo = eOutCubic(prog(t, 3.0, 3.55));
    if (uo > 0) {
      c.save();
      c.globalAlpha = uo;
      c.translate(0, 14 * (1 - uo));
      c.font = '600 34px Nunito, "Bricolage Grotesque", system-ui, sans-serif';
      const urlStr = 'https://alifpustaka.web.id';
      const tw = c.measureText(urlStr).width;
      const tot = 40 + 36 + 14 + tw + 40;
      const urlX = 540 - tot / 2;
      c.fillStyle = '#1d2b45';
      c.strokeStyle = '#5b52ff';
      c.lineWidth = 3;
      c.beginPath();
      c.roundRect(urlX, 1194, tot, 76, 38);
      c.fill();
      c.stroke();

      // Globe icon at (urlX + 58, 1232)
      c.save();
      c.translate(urlX + 58, 1232);
      c.strokeStyle = '#F6F5EE';
      c.lineWidth = 2.6;
      c.lineCap = 'round';
      c.beginPath(); c.arc(0, 0, 18, 0, Math.PI * 2); c.stroke();
      c.beginPath(); c.ellipse(0, 0, 8, 18, 0, 0, Math.PI * 2); c.stroke();
      c.beginPath();
      c.moveTo(-18, 0); c.lineTo(18, 0);
      c.moveTo(-14.5, -9.5); c.lineTo(14.5, -9.5);
      c.moveTo(-14.5, 9.5); c.lineTo(14.5, 9.5);
      c.stroke();
      c.restore();

      c.fillStyle = '#F6F5EE';
      c.textAlign = 'left';
      c.textBaseline = 'alphabetic';
      c.fillText(urlStr, urlX + 90, 1244);
      c.restore();
    }
  }

  function scheduleSfx(ctx, out, from, now) {
    const master = ctx.createGain();
    master.gain.value = 0.55;
    master.connect(out);

    // Noise buffer for airy shimmer & tactile keystroke clicks
    const sr = ctx.sampleRate;
    const nbuf = ctx.createBuffer(1, sr, sr);
    const nd = nbuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) {
      nd[i] = Math.random() * 2 - 1;
    }

    function playTone(t, type, f0, f1, dur, gainVal) {
      if (t < from || t > DUR) return;
      const at = now + t - from;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f0, at);
      if (f1 !== f0) {
        o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), at + dur);
      }
      g.gain.setValueAtTime(0.0001, at);
      g.gain.linearRampToValueAtTime(gainVal, at + Math.min(0.008, dur * 0.2));
      g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      o.connect(g);
      g.connect(master);
      o.start(at);
      o.stop(at + dur + 0.02);
    }

    function playNoise(t, f0, f1, dur, gainVal, Q = 2.0, filterType = 'bandpass') {
      if (t < from || t > DUR) return;
      const at = now + t - from;
      const s = ctx.createBufferSource();
      s.buffer = nbuf;
      s.loop = true;
      const f = ctx.createBiquadFilter();
      f.type = filterType;
      f.Q.value = Q;
      f.frequency.setValueAtTime(f0, at);
      if (f1 !== f0) {
        f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), at + dur);
      }
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.linearRampToValueAtTime(gainVal, at + dur * 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      s.connect(f);
      f.connect(g);
      g.connect(master);
      s.start(at);
      s.stop(at + dur + 0.02);
    }

    function playSparkleNote(t, freq, dur, vol) {
      // Crystalline bell: fundamental sine + 2x harmonic + 3x shimmer overtone
      playTone(t, 'sine', freq, freq, dur, vol);
      playTone(t, 'triangle', freq * 2, freq * 2.01, dur * 0.65, vol * 0.35);
      playTone(t, 'sine', freq * 3, freq * 2.98, dur * 0.4, vol * 0.18);
    }

    // 1. Logo Facets + Rings + Particle Burst (0.05s - 0.85s): Sparkling crystal reveal
    playNoise(0.05, 800, 4800, 0.45, 0.22, 1.8, 'bandpass');
    playTone(0.06, 'sine', 220, 440, 0.22, 0.20);
    const sparkleBurst1 = [
      [0.07, 1046.5, 0.28, 0.18],
      [0.12, 1318.5, 0.28, 0.19],
      [0.17, 1568.0, 0.30, 0.20],
      [0.22, 1975.5, 0.30, 0.21],
      [0.27, 2093.0, 0.32, 0.22],
      [0.33, 2637.0, 0.35, 0.22],
      [0.39, 3136.0, 0.38, 0.18],
      [0.46, 2349.3, 0.32, 0.15],
      [0.53, 2637.0, 0.36, 0.16],
      [0.60, 3520.0, 0.42, 0.15],
      [0.68, 4186.0, 0.45, 0.12]
    ];
    sparkleBurst1.forEach(([t, f, d, v]) => playSparkleNote(t, f, d, v));
    playNoise(0.25, 3200, 7200, 0.50, 0.14, 3.0, 'highpass');

    // 2. Wordmark "alifpustaka" Slide (1.05s - 1.55s): Smooth slide only (no sparkling)
    playNoise(1.06, 950, 320, 0.32, 0.16, 1.8, 'bandpass');
    playTone(1.08, 'sine', 360, 540, 0.24, 0.14);

    // 3. Kinetic Typing SFX for "Ruang Literasi, Rumah Inovasi" (1.75s - 2.95s)
    const tStart = 1.75, tEnd = 2.95, len = TAG.length;
    for (let i = 0; i < len; i++) {
      const ch = TAG[i];
      const tChar = tStart + (i / len) * (tEnd - tStart);
      if (ch === ' ') {
        // Spacebar subtle soft thump
        playTone(tChar, 'sine', 320, 180, 0.032, 0.11);
        playNoise(tChar, 1200, 800, 0.025, 0.08, 2.0, 'bandpass');
      } else if (ch === ',') {
        // Punctuation crisp accent tick
        playTone(tChar, 'triangle', 1480, 920, 0.045, 0.20);
        playNoise(tChar, 4200, 2600, 0.030, 0.16, 3.2, 'bandpass');
      } else {
        // Tactile kinetic keystroke click + pitched micro-pop
        const pitchMod = 1 + ((i * 7) % 5) * 0.045;
        playTone(tChar, 'triangle', 1150 * pitchMod, 620 * pitchMod, 0.034, 0.18);
        playNoise(tChar, 3800 * pitchMod, 2200, 0.022, 0.15, 3.5, 'bandpass');
      }
    }
    // Subtle completion ding at end of typing (2.95s)
    playSparkleNote(2.95, 2093.0, 0.25, 0.14);

    // 4. URL Pill Reveal + Final Brand Sparkle Chime (3.00s - 3.65s)
    playTone(3.00, 'sine', 520, 880, 0.14, 0.20);
    [784.0, 987.8, 1174.7, 1568.0, 2349.3].forEach((f, idx) => {
      playSparkleNote(3.04 + idx * 0.055, f, 0.65, 0.15);
    });
  }

  return { DUR, CH: [], render, scheduleSfx };
}

window.buildAllScenes = function() {
  return [
    createScene1(),
    createScene2(),
    createScene3(),
    createScene4(),
    createScene5(),
    createScene6(),
    createScene7(),
    createScene8(),
    createOutro()
  ];
};
