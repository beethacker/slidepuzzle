(this["webpackJsonpreact-slide"]=this["webpackJsonpreact-slide"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(3),o=r(5),i=r(4),l=r(0),c=r.n(l),h=r(7),u=r.n(h);r(13);function d(e,t){if("undefined"===typeof e||"undefined"===typeof t)return null;var r=g(e[1]-t[1]),a=v(e[0]-t[0],e[1]);return Math.sqrt(r*r+a*a)}function g(e){return 110.574*Math.abs(e)}function v(e,t){var r=t*Math.PI/180;return 111.32*Math.abs(e)*Math.cos(r)}var f=function(e){return p[e]},p={CLEAR_STATE:!1,SET_GPS:!1,CELL_OVERAL:!1,DISABLE_MOVE_CHECK:!1,LOCAL_SERVER:!1};var m=function(e){var t=e.value,r=!1,a=e.isNearest,n=a?"square selected":"square",s=null;if(a){var o,i,l=.5*e.w,h=.5*e.h,u=v(e.geoUser[0]-e.geoCenter[0],e.geoUser[1]),p=g(e.geoUser[1]-e.geoCenter[1]),m=Math.sqrt(u*u+p*p),C=0,w=0;m>1e-4&&(C=u/m,w=p/m);var b,L=e.geoCenter[2];if(m<L)b=m/L*30,r=!0;else{var k=e.geoCenter[3];m=Math.min(m,k),b=(m-L)/(k-L)*(e.h/2-30)+30}o=l+b*C,i=h+b*w,s=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"circle"}),c.a.createElement(E,{className:"user-circle",x:o,y:i,active:r,inCell:a}),c.a.createElement(E,{className:"center-circle",x:l,y:h,active:r,inCell:a}))}if(!t)return c.a.createElement("td",{className:"square empty",style:{width:e.w,height:e.h}},s);var y=t%e.rows,N=Math.floor(t/e.rows),q=d(e.geoCenter,e.geoUser),z=f("CELL_OVERLAY")?c.a.createElement("span",{style:{position:"absolute",color:"white",backgroundColor:"black"}}," ",e.geoCenter.toString()+" ==> "+q+", in="+a," "):null;return c.a.createElement("td",{className:n,onClick:function(){return e.handleClick()},style:{width:e.w,height:e.h}},z,s,c.a.createElement(S,{img:e.img,w:e.cols*e.w,h:e.rows*e.h,sx:y*e.w,sy:N*e.h,inCell:a}))};function E(e){if(!e.inCell)return c.a.createElement(c.a.Fragment,null);var t,r,a=e.className;return e.active&&(a+=" active"),c.a.createElement("div",{className:a,style:(t=e.x,r=e.y,{transform:"translate(".concat(t,"px, ").concat(r,"px)")})})}function S(e){return c.a.createElement("img",{src:e.img,alt:"stub",style:{marginTop:-e.sy+"px",width:e.w+"px",height:e.h+"px",marginLeft:-e.sx+"px"}})}f("LOCAL_SERVER"),f("CLEAR_STATE")&&localStorage.clear();var C=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;Object(n.a)(this,r),a=t.call(this,e);var s,o=localStorage[a.props.puzzleName];return o?s=o.split(",").map((function(e){return Number(e)})):(s=[0,1,2,3,4,5,6,7,8],a.scramble(s),localStorage[a.props.puzzleName]=s),a.state={squares:s,width:window.innerWidth,height:window.innerHeight},setInterval((function(){a.setState({width:window.innerWidth,height:window.innerHeight})}),2e3),a}return Object(s.a)(r,[{key:"minIndex",value:function(e){for(var t=-1,r=999999,a=0;a<e.length;a++)e[a]<r&&(t=a,r=e[a]);return[t,r]}},{key:"findNearest",value:function(e,t){for(var r=-1,a=9999999999,n=0;n<t.length;n++){var s=this.geoDistance(e,t[n]);s<a&&(a=s,r=n)}return r}},{key:"neighborsOf",value:function(e){var t=[],r=this.props.serverData.gridsize[0],a=this.props.serverData.gridsize[1],n=Math.floor(e/r);return e+r<r*a&&t.push(e+r),e-r>=0&&t.push(e-r),Math.floor((e+1)/r)===n&&t.push(e+1),e>0&&Math.floor((e-1)/r)===n&&t.push(e-1),t}},{key:"scramble",value:function(e){for(var t=0;t<50;t++){console.log(e);var r=e.indexOf(0),a=this.neighborsOf(r),n=a[Math.floor(Math.random()*a.length)];e[r]=e[n],e[n]=0}}},{key:"handleClick",value:function(e){this.updateNearest();var t=this.state.squares.slice(),r=this.neighborsOf(e);if(e===this.nearest[0]&&this.nearest[1]<this.props.serverData.cells[e][2]||f("DISABLE_MOVE_CHECK")){for(var a=0;a<r.length;a++)if(0===t[r[a]]){t[r[a]]=t[e],t[e]=0;break}}else r.map((function(e){return t[e]})).includes(0)&&(e===this.nearest[0]?alert("You're not close enough to the center of this square!"):alert("Can't move this square! You'll have to walk to it first!"));localStorage[this.props.puzzleName]=t,this.setState({squares:t})}},{key:"renderSquare",value:function(e){var t=this,r=this.props.serverData.imgsize,a=this.props.serverData.gridsize,n=r[0]/r[1],s=.8*window.innerWidth/a[0],o=.8*window.innerHeight/a[1];return s/o>n?s=o*n:o=s/n,c.a.createElement(m,{img:"https://beethacker.github.io/slide/img/"+this.props.serverData.img,value:this.state.squares[e],isNearest:e===this.nearest[0],geoUser:this.props.geoUser,geoCenter:this.props.serverData.cells[e],handleClick:function(){return t.handleClick(e)},w:s,h:o,rows:this.props.serverData.gridsize[0],cols:this.props.serverData.gridsize[1]})}},{key:"updateNearest",value:function(){var e=this;this.nearest=[-1,9993];var t=[];this.props.hasLocation&&(t=this.props.serverData.cells.map((function(t){return d(e.props.geoUser,t)})),this.nearest=this.minIndex(t))}},{key:"render",value:function(){return this.updateNearest(),console.log("Nearest is: "+this.nearest),c.a.createElement("center",null,c.a.createElement("table",{className:"grid"},c.a.createElement("tr",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("tr",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("tr",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))))}}]),r}(c.a.Component);function w(e){return c.a.createElement("fieldset",null,c.a.createElement("legend",null," Debug Coordinates "),c.a.createElement("input",{value:e.coords[0]+", "+e.coords[1],onChange:e.onChange,style:{width:"100%"}}))}function b(e){var t=e;return t.startsWith("/")&&(t=t.slice(1)),t.startsWith("slide")&&(t=t.slice(5)),t.startsWith("/")&&(t=t.slice(1)),t}var L=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var s;Object(n.a)(this,r),s=t.call(this,e);var o=b(window.location.pathname);if(o.length<=0&&"404_hack"in localStorage&&(o=b(localStorage["404_hack"]),localStorage.removeItem("404_hack")),o.length<=0&&"LAST_PUZZLE"in localStorage&&(o=localStorage.LAST_PUZZLE),localStorage.LAST_PUZZLE=o,s.state={hasLocation:!1,coords:[44,-63],serverData:null,puzzle:o},o.length>0){var i="https://beethacker.github.io/slide/json/"+o+".json";fetch(i).then((function(e){return e.json()})).then((function(e){return s.setState({serverData:e})})).catch((function(e){return s.setState({fetchError:"Failed to fetch: "+i})}))}else s.setState({fetchError:"!Main Page!"});return navigator.geolocation.watchPosition((function(e){s.setState({geoError:null,coords:[e.coords.latitude,e.coords.longitude],hasLocation:!0})}),(function(e){s.setState({geoError:"Can't get GPS location"})})),s.debugChangeCoord=s.debugChangeCoord.bind(Object(a.a)(s)),s}return Object(s.a)(r,[{key:"updateGeoLocation",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.setState({coords:[t.coords.latitude,t.coords.longitude],hasLocation:!0})})):this.setState({hasLocation:!1})}},{key:"debugChangeCoord",value:function(e){var t=e.target.value.split(",").map((function(e){return parseFloat(e)}));this.setState({coords:t})}},{key:"render",value:function(){return this.state.fetchError?c.a.createElement("div",null," ",this.state.fetchError," "):null===this.state.serverData?c.a.createElement("div",null," Loading..."):c.a.createElement("div",null,c.a.createElement("h1",null," GPS Slide Puzzle!! "),f("SET_GPS")?c.a.createElement(w,{coords:this.state.coords,onChange:this.debugChangeCoord}):null,c.a.createElement(C,{puzzleName:this.state.puzzle,serverData:this.state.serverData,geoUser:this.state.coords,hasLocation:this.state.hasLocation}))}}]),r}(c.a.Component);u.a.render(c.a.createElement(L,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.11e9dda5.chunk.js.map