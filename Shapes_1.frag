// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 rect(in vec2 st,in vec2 center,in float size,in vec3 color){
    
    //bottom
    vec2 bl=step(vec2(center.x-size,center.y-size),st);
    //vec2 bl = step(vec2(0.1,0.1)  ,st);
    //Top
    vec2 tr=step(vec2((center.x+size)*-1.+1.,(center.y+size)*-1.+1.),1.-st);
    //vec2 tr = step(vec2(0.2,0.2),1.0-st);
    
    return vec3(bl.x*bl.y*tr.x*tr.y)*color;
}

// vec3 smoothRect(in vec2 st,in vec2 center ,in float size, in vec3 color){
    //         //Not working
    //         // the smooth treshold needs to move with the corners
    //         float smf = abs(0.260 + 1.-pow(abs(sin(u_time*2.5)),.200));
    //         //float smf =  0.1 +0.1*(cos(u_time*2.)*exp(-.1+cos(u_time*2.))+0.35);
    //         vec2 sm = vec2(smf,smf);
    //         //bottom
    //         vec2 bl = smoothstep(vec2(center.x-size,center.y-size),sm  ,st);
    //         //vec2 bl = step(vec2(0.1,0.1)  ,st);
    //         //Top
    //         vec2 tr = smoothstep(vec2((center.x +size)*-1.0+1.0,(center.y+size)*-1.0+1.0),sm,1.0-st);
    //         //vec2 tr = step(vec2(0.2,0.2),1.0-st);
    
    //         return vec3(bl.x * bl.y * tr.x * tr.y)*color;
// }

vec3 colorA=vec3(.165,.022,.002);
vec3 colorB=vec3(1.,.733,.094);

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    
    vec3 color=vec3(0.);
    
    float pct=1.-pow(abs(cos(u_time*2.5)),.200);
    vec3 sqrColor=mix(colorA,colorB,pct);
    
    color=rect(st,vec2(.5+.4*sin(u_time),.5+.4*cos(u_time)),.100,sqrColor);
    //color = smoothRect(st,vec2(0.5, 0.5 ), 0.244,sqrColor);
    
    gl_FragColor=vec4(color,1.);
}