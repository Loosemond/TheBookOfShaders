
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    return 1.-smoothstep(_radius-(_radius*0.07),
                         _radius+(_radius*0.07),
                         dot(l,l)*4.0);
}

vec2 tiling(in vec2 st, in vec2 multiplier){
    st *= multiplier;
    return(fract(st));
}

vec3 colorA = vec3(0.000,0.627,0.860);
vec3 colorB = vec3(0.700,0.532,0.436);
vec3 colorC = vec3(0.325,0.940,0.185);

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    
	vec3 color = vec3(gl_FragCoord.xy,-0.);
    color = mix(colorA, colorB,floor(st.x*5.)/3.712);
    color = mix(colorC,color,floor(st.y*5.)/1.504)/0.284;



	st = tiling(st,vec2(10));
    // Now we have 9 spaces that go from 0-1
	color *= vec3(circle(st,0.25*cos(u_time*2.)+0.25));

	gl_FragColor = vec4(color,1.);
}