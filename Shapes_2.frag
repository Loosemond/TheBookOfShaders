#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;
  vec3 color = vec3(0.0);
  float d = 0.0;
  vec2 pos = vec2(1.,0.2*cos(u_time)+1.);
  vec2 zoom = vec2(2.1+0.5*cos(u_time));
  vec2 shape = vec2(0.3*cos(u_time),-0.3*cos(u_time));

  float size = 0.3 + 0.1 * cos(u_time);

  // Remap the space to -1. to 1.
  // st = st *2.-1.;
  // st = st *zoom-pos;

  // Make the distance field
  // d = length( abs(st)-0.3 + shape);
  // d = length( abs(st)-.3 );
  // d = length( min(abs(st)-.3,0.) );
  // d = length( max(abs(st)-0.3,0.) );



  // Visualize the distance field
  // gl_FragColor = vec4(vec3(fract(d*10.0),0.7,0.7),1.);

  // Drawing with the distance field
  // gl_FragColor = vec4(vec3( step(size,d)),1.0);
  // gl_FragColor = vec4(vec3( step(.3,d) * step(d,.4)),1.0);
  // gl_FragColor = vec4(vec3( smoothstep(.3,.4,d)* smoothstep(.6,.5,d)) ,1.0);




  // ---Size---
  // if we use the size variavle in the d
  // we are able to controll the size without deforming the object
  st = st *2.-1.;
  d = length( max(abs(st)-size,0.) );
  gl_FragColor = vec4(vec3( step(0.01,d)),1.0);

  // ---Shape---
  // if we add the same modulating value (size) to abs(st)-<actual size>+<Modulating func>
  // and add it to gl_fragColor like below we can round the edges without changing the size of the square
  // st = st *2.-1.;
  // d = length( max(abs(st)-0.5+size,0.) );
  // gl_FragColor = vec4(vec3( step(size,d)),1.0);

}