// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rect(in vec2 st,in vec2 size){
    size=.250-size*.25;
    vec2 uv=smoothstep(size,size+size*vec2(.002),st*(1.-st));
    return uv.x*uv.y;
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    
    vec3 color=vec3(0.);
    vec3 influenced_color=vec3(.5804,.2627,.5529);
    vec3 influencing_color_A=vec3(.8588,.6863,.4275);
    vec3 influencing_color_B=vec3(.3608,.3529,.0353);
    
    color=mix(influencing_color_B,influencing_color_A,step(.5,st.y));
    
    color=mix(color,influenced_color,rect(((st-vec2(.25,.0))*vec2(2.,2.)),vec2(.08,.03)));
    
    color=mix(color,influenced_color,rect(((st-vec2(.25,.5))*vec2(2.,2.)),vec2(.08,.03)));
    
    gl_FragColor=vec4(color,1.);
}