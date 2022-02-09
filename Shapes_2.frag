
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(in vec2 _st,in float _radius,in vec2 _p){
    vec2 dist=_st-_p;
    return 1.-smoothstep(_radius-(_radius*.01),_radius+(_radius*.01),dot(dist,dist)*4.);
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    vec3 color_1=vec3(.6549,.8314,.6196);
    vec3 color_back=vec3(0.);
    float size=.100;
    
    vec3 color=mix(color_back,color_1,circle(st,size,vec2(.3,.5+.200*cos(u_time))));
    color=mix(color,color_1,circle(st,size,vec2(.700,.5+-.200*cos(u_time))));
    
    gl_FragColor=vec4(color,1.);
}