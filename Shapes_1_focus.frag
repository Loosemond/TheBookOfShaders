// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 rect(in vec2 st,in float size){
    vec2 bl=step(vec2(.1),st);
    vec2 tr=step(vec2(.1),1.-st);
    return vec2(bl.x*bl.y*tr.x*tr.y);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(0.);
    // float smf = 0.200 + 0.1*cos(u_time*4.);
    float smf=.2+.900-pow(abs(cos(u_time*2.5)),.100);
    //float smf =  0.1 +0.1*(cos(u_time*2.)*exp(-.1+cos(u_time*2.))+0.35);
    vec2 sm=vec2(smf,smf);
    
    // bottom-left
    vec2 bl=smoothstep(vec2(.1),sm,st);
    // top-right
    vec2 tr=smoothstep(vec2(.1),sm,1.-st);
    
    color=vec3(bl.x*bl.y*tr.x*tr.y);
    
    gl_FragColor=vec4(color,1.);
}