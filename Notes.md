# GLSL Docs

This Documentation contains relevant information extracted from [The Book Of Shaders](https://thebookofshaders.com). 

## Relevant links

* **Curves** 
	* [Create equations interactively](http://tobyschachman.com/Shadershop/editor/)
	* [View equations](https://graphtoy.com/)
	* [Collection of equations](https://www.iquilezles.org/www/articles/functions/functions.htm)
	* [Bezier and Other Parametric Shaping Functions](http://www.flong.com/archive/texts/code/shapers_bez)
	* [Polynomial Shaping Functions](http://www.flong.com/archive/texts/code/shapers_poly/)
	* [GLSL code examples](https://thebookofshaders.com/edit.php#06/easing.frag)
* **Examples**
	* [Shadertoy](https://www.shadertoy.com/)
	* [Threejs](https://threejs.org/)
* **Books and Documentation**
	* [OpenGL ES Documentation](https://www.khronos.org/registry/OpenGL/index_es.php#specs32)
* **Other Relevant  Sources**
	* [Inigo Quilez site](https://iquilezles.org/?utm_source=pocket_mylist)


## Basics

Simple color shader

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(1.0,0.0,1.0,1.0);
}
```
Different types
```GLSL
// vectors of different sizes
vec2 v2
vec3 v3
vec4 v4
```

Inputs variables
```GLSL
uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load
```
Hardware accelerated functions
```GLSL
radians() // Converts degrees to radians, i.e., (π / 180) · degrees.
degrees() // Converts radians to degrees, i.e., (180 / π) · radians.
sin() //The standard trigonometric sine function.
cos() //The standard trigonometric cosine function.
tan() //The standard trigonometric tangent function.
asin() //Arc sine. Returns an angle whose sine is x.
//The range of values returned by this function is [-π /2, π / 2].
//Results are undefined if |x| > 1.
acos() //Arc cosine. Returns an angle whose cosine is x.
//The range of values returned by this function is [0,π].
//Results are undefined if |x| > 1.
atan() //Arc tangent. Returns an angle whose tangent is y_over_x.
//The range of values returned by this function is [-π / 2, π / 2].
pow(x,y) //Returns x raised to the y power, i.e., x .
//Results are undefined if x < 0.
//Results are undefined if x = 0 and y ≤ 0.
exp() //Returns the natural exponentiation of x, i.e., e .
log() //Returns the natural logarithm of x
sqrt() //Returns sqrt(x). Results are undefined if x < 0.
abs() //Returns x if x ≥ 0; otherwise it returns -x.
sign() //Returns 1.0 if x > 0, 0.0 if x = 0, or -1.0 if x < 0.
floor() //Returns a value equal to the nearest integer that is less than or equal to x.
ceil() //Returns a value equal to the nearest integer that is greater than or equal to x.
fract() //Returns x - floor(x).
mod(x,y) //Modulus. Returns x - y · floor(x / y).
min(x,y) //Returns y if y < x; otherwise it returns x.
max(x,y) //Returns y if x < y; otherwise it returns x.
clamp(x,minVal,maxVal) //Returns min(max(x, minVal), maxVal). Results are undefined if minVal > maxVal.
step(edge,x) //Returns 0.0 if x < edge; otherwise it returns 1.0.
smoothstep(edge0,edge1,x) //Returns 0.0 if x ≤ edge0 and 1.0 if x ≥ edge1, and
// performs smooth Hermite interpolation
// between 0 and 1 when edge0 < x < edge1.
mix(x,y,a) //Selects which vector each returned component comes from.
//For a component of a that is false,
//the corresponding component of x is returned.
//For a component of a that is true, the
//corresponding component of y is returned.
//Components of x and y that are not selected are
//allowed to be invalid floating-point values and
//will have no effect on the results.
//Where a is a Boolean vector.
```
More in GLSL ES Spec Chapter 8 

## Study of Curves

![Example of curves](curves.png)











### Code Examples

Drawing line representation of the gradient
```GLSL
// Author: Inigo Quiles
// Title: Expo

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// plot function
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float y = pow(st.x,5.0);

    vec3 color = vec3(y);

    float pct = plot(st,y); // graph
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0); // drawing graph

    gl_FragColor = vec4(color,1.0);
}
```


