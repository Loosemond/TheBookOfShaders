// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    st.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(.8314,.1373,.1373);
    
    vec3 yellow,magenta,green;
    
    // Making Yellow
    yellow.rg=vec2(1.);// Assigning 1. to red and green channels
    
    yellow[2]=0.;// Assigning 0. to blue channel
    // Making Magenta
    magenta=yellow.rbg;// Assign the channels with green and blue swapped
    color=yellow;
    
    // Making Green
    green.rgb=yellow.bgb;
    
    //color=vec3(st.x,st.y,abs(sin(u_time)));
    
    gl_FragColor=vec4(color,1.);
}
