---
title: "Chapter 13: Partial Derivatives"
order: 13
---

# Chapter 13: Partial Derivatives

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 13.1 Functions of Several Variables

Real-valued functions of several independent real variables are defined analogously to functions of a single variable. Points in the domain are now ordered pairs (or triples, quadruples, n-tuples) of real numbers, and values in the range are real numbers. 

> ***DEFINITIONS*** Suppose D is a set of n-tuples of real numbers $\left( x _ { 1 } , x _ { 2 } , \ldots , x _ { n } \right)$ A real-valued function f on D is a rule that assigns a real number 
>
> $$
> w = f (x _ {1}, x _ {2}, \ldots , x _ {n})
> $$
>
> to each element in D. The set D is the function’s domain. The set of w-values taken on by $f$ is the function’s range. The symbol w is the dependent variable of $f ,$ and $f$ is said to be a function of the n independent variables $x _ { 1 } \ { \mathrm { t o } } \ x _ { n }$ . We also call the $\boldsymbol { x _ { j } } ^ { \flat } \mathbf { s }$ the function’s input variables and call w the function’s output variable. 
>
If f is a function of two independent variables, we usually call the independent variables x and y and the dependent variable $z ,$ and we picture the domain of f as a region in the xy-plane (Figure 13.1). If $f$ is a function of three independent variables, we call the independent variables x, y, and z and the dependent variable w, and we picture the domain as a region in space. 

In applications, we tend to use letters that remind us of what the variables stand for. To say that the volume of a right circular cylinder is a function of its radius and height, we might write $V = f ( r , h )$ . To be more specific, we might replace the notation $f ( r , h )$ by the formula that calculates the value of V from the values of r and $h ,$ and write $V \ = \ \pi r ^ { 2 } h$ In either case, r and h would be the independent variables and V the dependent variable of the function. 

![[d959991b5d4c4c4b488bc8fc2048b72119916e436dda736652bfbfdbb7137c7c.jpg|image]]



FIGURE 13.1 An arrow diagram for the function $z = f ( x , y )$


As usual, we evaluate functions defined by formulas by substituting the values of the independent variables in the formula and calculating the corresponding value of the dependent variable. For example, the value of $f ( x , y , z ) = { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ at the point $( 3 , 0 , 4 )$ is 

$$
f (3, 0, 4) = \sqrt {(3) ^ {2} + (0) ^ {2} + (4) ^ {2}} = \sqrt {2 5} = 5.
$$

## Domains and Ranges

In defining a function of more than one variable, we follow the usual practice of excluding inputs that lead to complex numbers or division by zero. If $f ( x , y ) = { \sqrt { y - x ^ { 2 } } }$ ,  then y cannot be less than $x ^ { 2 }$ . If $f ( x , y ) = 1 / ( x y )$ , then xy cannot be zero. The domain of a function is assumed to be the largest set for which the defining rule generates real numbers, unless the domain is otherwise specified explicitly. The range consists of the set of output values for the dependent variable. 

## **EXAMPLE 1**


(a) These are functions of two variables. Note the restrictions that apply to their domains in order to obtain a real value for the dependent variable z.


<table><tr><td>Function</td><td>Domain</td><td>Range</td></tr><tr><td><eq>z = \sqrt{y - x^{2}}</eq></td><td><eq>y \geq x^{2}</eq></td><td><eq>[0, \infty)</eq></td></tr><tr><td><eq>z = \frac{1}{xy}</eq></td><td><eq>xy \neq 0</eq></td><td><eq>(-\infty, 0) \cup (0, \infty)</eq></td></tr><tr><td><eq>z = \sin xy</eq></td><td>Entire plane</td><td><eq>[-1, 1]</eq></td></tr></table>


(b) These are functions of three variables with restrictions on some of their domains.


<table><tr><td>Function</td><td>Domain</td><td>Range</td></tr><tr><td><eq>w = \sqrt{x^{2} + y^{2} + z^{2}}</eq></td><td>Entire space</td><td><eq>[0, \infty)</eq></td></tr><tr><td><eq>w = \frac{1}{x^{2} + y^{2} + z^{2}}</eq></td><td><eq>(x, y, z) \neq (0, 0, 0)</eq></td><td><eq>(0, \infty)</eq></td></tr><tr><td><eq>w = xy \ln z</eq></td><td>Half-space <eq>z &gt; 0</eq></td><td><eq>(-\infty, \infty)</eq></td></tr></table>

## Functions of Two Variables

On the real line, closed intervals $[ a , b ]$ include their boundary points while open intervals $( a , b )$ do not. Intervals such as $[ a , b )$ , which includes only one of its two boundary points, are neither open nor closed. Regions in the plane can also be open, closed, or neither. 

![[b0ab13f0068d5c75fba0d6984be1a43f9d547379c2ed7bae2ea0330825c905ec.jpg|image]]



(a) Interior point


![[d0b2c44a58fe307dfeeb925f39ec5b50a5967ae3776c1eac50d2f37da1b61855.jpg|image]]



FIGURE 13.2 Interior points and boundary points of a plane region R. An interior point is necessarily a point of R. A boundary point of R need not belong to R.


![[9ee413a9d7873a4b8a98239d9c175cae2c6f3264056d8efe45799b8407ab0f64.jpg|image]]



FIGURE 13.4 The domain of $f ( x , y )$ in Example 2 consists of the shaded region and its bounding parabola.


> ***DEFINITIONS*** A point $\left( x _ { 0 } , y _ { 0 } \right)$ in a region (set) R in the xy-plane is an interior point of R if it is the center of a disk of positive radius that lies entirely in R (Figure 13.2). A point $\left( x _ { 0 } , y _ { 0 } \right)$ is a boundary point of R if every disk centered at $\left( x _ { 0 } , y _ { 0 } \right)$ contains points that lie outside of R as well as points that lie in R. (The boundary point itself need not belong to R.) 

The interior points of a region, as a set, make up the interior of the region. The region’s boundary points make up its boundary. A region is open if it consists entirely of interior points. A region is closed if it contains all its boundary points (Figure 13.3). 

![[a0acc298c88872540b9e2627781e55052279f50262a0039d779a624427d86dfb.jpg|image]]



FIGURE 13.3 Interior points and boundary points of the unit disk in the plane.


As with a half-open interval of real numbers [ )a b, , some regions in the plane are neither open nor closed. If you start with the open disk in Figure 13.3 and add to it some, but not all, of its boundary points, the resulting set is neither open nor closed. The boundary points that are there keep the set from being open. The absence of the remaining boundary points keeps the set from being closed. Two interesting examples are the empty set and the entire plane. The empty set has no interior points and no boundary points. This implies that the empty set is open (because it does not contain points that are not interior points), and at the same time it is closed (because there are no boundary points that it fails to contain). The entire xy-plane is also both open and closed: open because every point in the plane is an interior point, and closed because it has no boundary points. The empty set and the entire plane are the only subsets of the plane that are both open and closed. Other sets may be open, or closed, or neither. 

> ***DEFINITIONS*** A region in the plane is bounded if it lies inside a disk of finite radius. A region is unbounded if it is not bounded. 

Examples of bounded sets in the plane include line segments, triangles, interiors of triangles, rectangles, circles, and disks. Examples of unbounded sets in the plane include lines, coordinate axes, the graphs of functions defined on infinite intervals, quadrants, halfplanes, and the plane itself. 

## **EXAMPLE 2** Describe the domain of the function $f ( x , y ) = { \sqrt { y - x ^ { 2 } } } .$

**Solution** Since f is defined only where $y - x ^ { 2 } \geq 0 ,$ , the domain is the closed, unbounded region shown in Figure 13.4. The parabola $y = x ^ { 2 }$ is the boundary of the domain. The points above the parabola make up the domain’s interior. ■ 

![[903e1f5f094658982ba7aef2804f60bbb1f75f569736d3ee59eab834db30570a.jpg|image]]



FIGURE 13.5 The graph and selected level curves of the function $f ( x , y )$ in Example 3. The level curves lie in the xy-plane,which is the domain of the function $f ( x , y )$


The contour curve $f ( x , y ) = 1 0 0 - x ^ { 2 } - y ^ { 2 } = 7 5$ is the circle $x ^ { 2 } + y ^ { 2 } = 2 5$ in the plane $z = 7 5 .$ 

![[50596ba9917fe31cba25f9f3d4ceb789328e5329d8e9481a3e39119f7af11339.jpg|image]]


The level curve $f ( x , y ) = 1 0 0 - x ^ { 2 } - y ^ { 2 } = 7 5$ is the circle $x ^ { 2 } + y ^ { 2 } = 2 5$ in the xy-plane. 

FIGURE 13.6 A plane z = c parallel to the xy-plane intersecting a surface $z = f ( x , y )$ produces a contour curve. 

## Graphs, Level Curves, and Contours of Functions of Two Variables

There are two standard ways to picture the values of a function $f ( x , y )$ . One is to draw and label curves in the domain on which $f$ has a constant value. The other is to sketch the surface $z = f ( x , y )$ in space. 

> ***DEFINITIONS*** The set of points in the plane where a function $f ( x , y )$ has a constant value $f ( x , y ) = c$ is called a level curve of $f .$ The set of all points $\left( x , y , f ( x , y ) \right)$ in space, for $( x , y )$ in the domain of $f ,$ is called the graph of $f .$ 

The graph of f is often called the surface $z = f ( x , y ) .$ 

**EXAMPLE 3** Graph $f ( x , y ) = 1 0 0 - x ^ { 2 } - y ^ { 2 }$ and plot the level curves $f ( x , y ) = 0$ $f ( x , y ) = 5 1 , \mathrm { a n d } f ( x , y ) = 7 5 $ in the domain of f in the plane. 

**Solution** The domain of f is the entire xy-plane, and the range of f is the set of real numbers less than or equal to 100. The graph is the paraboloid $z = 1 0 0 - x ^ { 2 } - y ^ { 2 }$ , the positive portion of which is shown in Figure 13.5. 

The level curve $f ( x , y ) = 0$ is the set of points in the xy-plane at which 

$$
f (x, y) = 1 0 0 - x ^ {2} - y ^ {2} = 0, \quad \text { or } \quad x ^ {2} + y ^ {2} = 1 0 0,
$$

which is the circle of radius 10 centered at the origin. Similarly, the level curves $f ( x , y ) = 5 1$ and $f ( x , y ) = 7 5 $ (Figure 13.5) are the circles 

$$
\begin{array}{l} f (x, y) = 1 0 0 - x ^ {2} - y ^ {2} = 5 1, \quad \text { or } \quad x ^ {2} + y ^ {2} = 4 9 \\ f (x, y) = 1 0 0 - x ^ {2} - y ^ {2} = 7 5, \quad \text { or } \quad x ^ {2} + y ^ {2} = 2 5. \end{array}
$$

The level curve $f ( x , y ) = 1 0 0$ consists of the origin alone. (It is still a level curve.) If $x ^ { 2 } + y ^ { 2 } > 1 0 0 .$ , then the values of $f ( x , y )$ are negative. For example, the circle $x ^ { 2 } + y ^ { 2 } = 1 4 4 $ , which is the circle centered at the origin with radius 12, gives the constant value $f ( x , y ) = - 4 4$ and is a level curve of $f .$ 

The curve in space in which the plane $z = c$ cuts a surface $z = f ( x , y )$ is made up of the points that represent the function value $f ( x , y ) = c .$ . It is called the contour curve $f ( x , y ) = c$ to distinguish it from the level curve $f ( x , y ) = c$ in the domain of $f .$ Figure 13.6 shows the contour curve $f ( x , y ) = 7 5 $ on the surface $z = 1 0 0 - x ^ { 2 } - y ^ { 2 }$ defined by the function $f ( x , y ) = 1 0 0 - x ^ { 2 } - y ^ { 2 }$ . The contour curve lies directly above the circle $x ^ { 2 } + y ^ { 2 } = 2 5$ , which is the level curve $f ( x , y ) = 7 5 $ in the function’s domain. 

The distinction between level curves and contour curves is often overlooked, and it is common to call both types of curves by the same name, relying on context to make it clear which type of curve is meant. On most maps, for example, the curves that represent constant elevation (height above sea level) are called contours, not level curves (Figure 13.7). 

## Functions of Three Variables

In the plane, the points where a function of two independent variables has a constant value $f ( x , y ) = c$ make a curve in the function’s domain. In space, the points where a function of three independent variables has a constant value $f ( x , y , z ) = c$ make a surface in the function’s domain. 

> ***DEFINITION*** The set of points $\left( x , y , z \right)$ in space where a function of three independent variables has a constant value $f ( x , y , z ) = c$ is called a level surface of $f .$ 

![[5b4253499827b1bcfc0749ed53d7cab62fe073ec9fcd9609249af0eb37acb02d.jpg|image]]



FIGURE 13.8 The level surfaces of $f ( x , y , z ) = { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ are concentric spheres (Example 4).


![[4391910870bdb0ca625874e85eb222a956c7db77dbcdf269dfd2a638dd351728.jpg|image]]



(a) Interior point


![[ed2ca981fb0b6bf8262bbce89064514aa172a44707f0555b1cc0cb5251b033ea.jpg|image]]



(b) Boundary point



FIGURE 13.9 Interior points and boundary points of a region in space. As with regions in the plane, a boundary point need not belong to the space region R.


![[c0da95cf141cf64a03324ed96c2e4b97c45b1005b596fe051dbdae3555764d87.jpg|image]]



FIGURE 13.7 Contours on Mt. Washington in New Hampshire. (Source: United States Geological Survey)


Since the graphs of functions of three variables consist of points $\left( x , y , z , f ( x , y , z ) \right)$ lying in a four-dimensional space, we cannot sketch them effectively in our threedimensional frame of reference. We can see how the function behaves, however, by looking at its three-dimensional level surfaces. 

**EXAMPLE 4** Describe the level surfaces of the function 

$$
f (x, y, z) = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}.
$$

**Solution** The value of f is the distance from the origin to the point $( x , y , z )$ . Each level surface ${ \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } } = c , c > 0$ , is a sphere of radius c centered at the origin. Figure 13.8 shows a cutaway view of three of these spheres. The level surface ${ \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } } = 0$ consists of the origin alone. 

We are not graphing the function here; we are looking at level surfaces in the function’sdomain. The level surfaces show how the function’s values change as we move through itsdomain. If we remain on a sphere of radius c centered at the origin, the function maintains aconstant value, namely c. If we move from a point on one sphere to a point on another, thefunction’s value changes. It increases if we move away from the origin and decreases if wemove toward the origin. The way the values change depends on the direction we take. Thedependence of change on direction is important. We return to it in Section 13.5. 一

The definitions of interior, boundary, open, closed, bounded, and unbounded for regions in space are similar to those for regions in the plane. To accommodate the extra dimension, we use solid balls of positive radius instead of disks. 

> ***DEFINITIONS*** A point $\left( x _ { 0 } , y _ { 0 } , z _ { 0 } \right)$ in a region R in space is an interior point of R if it is the center of a solid ball that lies entirely in R (Figure 13.9a). A point $\left( x _ { 0 } , y _ { 0 } , z _ { 0 } \right)$ is a boundary point of R if every solid ball centered at $\left( x _ { 0 } , y _ { 0 } , z _ { 0 } \right)$ contains points that lie outside of R as well as points that lie inside R (Figure 13.9b). The interior of R is the set of interior points of R. The boundary of R is the set of boundary points of R. 

A region is open if it consists entirely of interior points. A region is closed if it contains its entire boundary. 

A region is bounded if it lies inside a solid ball of finite radius; otherwise, the region is unbounded. 

Examples of open sets in space include the interior of a sphere, the open half-space $z > 0$ , the first octant (where x, y, and z are all positive), and space itself. Examples of closed sets in space include lines, planes, and the closed half-space $z \ge 0 . \mathrm { A }$ solid sphere with part of its boundary removed or a solid cube with a missing face, edge, or corner point is neither open nor closed. 

Functions of more than three independent variables are also important. For example, a model that measures temperature in the atmosphere may depend not only on the location of the point $P ( x , y , z )$ in space, but also on the time t when it is measured, so we would write $T = f ( x , y , z , t )$ 

## Computer Graphing

Three-dimensional graphing software makes it possible to graph functions of two variables. We can often get information more quickly from a graph than from a formula, since the surfaces reveal increasing and decreasing behavior, and high points or low points. 

![[0f7fee0518cc7680079b52d71d3c6fbba84f2fd771d6eb092937f929f23dd084.jpg|image]]


**EXAMPLE 5** The temperature w beneath the Earth’s surface is a function of the depth x beneath the surface and the time t of the year. If we measure x in meters and t as the number of days elapsed from the expected date of the yearly highest surface temperature, we can model the variation in temperature with the function 


FIGURE 13.10 This graph shows the seasonal variation of the temperature below ground as a fraction of surface temperature (Example 5).


$$
w = \cos (1. 7 \times 1 0 ^ {- 2} t - 0. 6 x) e ^ {- 0. 6 x}.
$$

(The temperature at 0 m is scaled to vary from +1 to −1, so that the variation at x meters can be interpreted as a fraction of the variation at the surface.) 

Figure 13.10 shows a graph of the function. At a depth of 5 m, the variation (change in vertical amplitude in the figure) is about 5% of the surface variation. At 8 m, there is almost no variation during the year. 

The graph also shows that the temperature 5 m below the surface is about half a yearout of phase with the surface temperature. When the temperature is lowest on the surface(late January, say), it is at its highest 5 m below. Five meters below the ground, the seasonsare reversed. 一

Figure 13.11 shows computer-generated graphs of a number of functions of two variables together with their level curves. 

![[630bfc13b64e922f94ad0143a81a575c965a1db77a660ec8cb062a9bc1a29228.jpg|image]]



FIGURE 13.11 Computer-generated graphs and level curves of typical functions of two variables.


## EXERCISES

## 13.1

## Domain, Range, and Level Curves

In Exercises 1–4, find the specific function values. 1. $f ( x , y ) = x ^ { 2 } + x y ^ { 3 }$ a. $f ( 0 , 0 )$ b. $f ( - 1 , 1 )$ c. $f ( 2 , 3 )$ d. $f ( - 3 , - 2 )$ 

2. $f ( x , y ) = \sin \left( x y \right)$ a. $f { \left( 2 , \frac { \pi } { 6 } \right) }$ b. $f \left( - 3 , \frac { \pi } { 1 2 } \right)$ c. $f { \biggl ( } \pi , { \frac { 1 } { 4 } } { \biggr ) }$ d. $f \left( - { \frac { \pi } { 2 } } , - 7 \right)$ 

3. $f ( x , y , z ) = { \frac { x - y } { y ^ { 2 } + z ^ { 2 } } }$ a. $f ( 3 , - 1 , 2 )$ b. $f { \biggl ( } 1 , \frac 1 2 , - \frac 1 4 { \biggr ) }$ c. $f { \Big ( } 0 , - { \frac { 1 } { 3 } } , 0 { \Big ) }$ d. $f ( 2 , 2 , 1 0 0 )$ 

4. $f ( x , y , z ) = { \sqrt { 4 9 - x ^ { 2 } - y ^ { 2 } - z ^ { 2 } } }$ a. $f ( 0 , 0 , 0 )$ b. $f ( 2 , - 3 , 6 )$ c. $f ( - 1 , 2 , 3 )$ d. $f \left( { \frac { 4 } { \sqrt { 2 } } } , { \frac { 5 } { \sqrt { 2 } } } , { \frac { 6 } { \sqrt { 2 } } } \right)$ 

In Exercises 5–12, find and sketch the domain for each function. 

5. $f ( x , y ) = { \sqrt { y - x - 2 } }$ 

6. $f ( x , y ) = \ln ( x ^ { 2 } + y ^ { 2 } - 4 )$ 

7. $f ( x , y ) = { \frac { ( x - 1 ) ( y + 2 ) } { ( y - x ) ( y - x ^ { 3 } ) } }$ 

8. $f ( x , y ) = { \frac { \sin \left( x y \right) } { x ^ { 2 } + y ^ { 2 } - 2 5 } }$ 

9. $f ( x , y ) = \cos ^ { - 1 } ( y - x ^ { 2 } )$ 

10. $f \left( x , y \right) = \ln \left( x y + x - y - 1 \right)$ 

11. $f ( x , y ) = { \sqrt { ( x ^ { 2 } - 4 ) ( y ^ { 2 } - 9 ) } }$ 

12. $f ( x , y ) = { \frac { 1 } { \ln ( 4 - x ^ { 2 } - y ^ { 2 } ) } }$ 

In Exercises 13–16, find and sketch the level curves $f ( x , y ) = c$ on the same set of coordinate axes for the given values of c. We refer to these level curves as a contour map. 

13. $f ( x , y ) = x + y - 1 , c = - 3 , - 2 , - 1 , 0 , 1 , 2 , 3$ 

14. $f ( x , y ) = x ^ { 2 } + y ^ { 2 } , c = 0 , 1 , 4 , 9 , 1 6 , 2 5$ 

15. $f ( x , y ) = x y , c = - 9 , - 4 , - 1 , 0 , 1 , 4 , 9$ 

16. $f ( x , y ) = \sqrt { 2 5 - x ^ { 2 } - y ^ { 2 } } , c = 0 , 1 , 2 , 3 , 4$ 

In Exercises 17–30, (a) find the function’s domain, (b) find the function’s range, (c) describe the function’s level curves, (d) find the boundary of the function’s domain, (e) determine whether the domain is an open region, a closed region, or neither, and (f) decide whether the domain is bounded or unbounded. 

17. $f ( x , y ) = y - x$ 

18. $f ( x , y ) = { \sqrt { y - x } }$ 

19. $f ( x , y ) = 4 x ^ { 2 } + 9 y ^ { 2 }$ 

20. $f ( x , y ) = x ^ { 2 } - y ^ { 2 }$ 

21. $f ( x , y ) = x y$ 

22. $f ( x , y ) = y / x ^ { 2 }$ 

23. $f ( x , y ) = \frac { 1 } { \sqrt { 1 6 - x ^ { 2 } - y ^ { 2 } } }$ 

24. $f ( x , y ) = { \sqrt { 9 - x ^ { 2 } - y ^ { 2 } } }$ 

25. $f ( x , y ) = \ln ( x ^ { 2 } + y ^ { 2 } )$ 

26. $f ( x , y ) = e ^ { - \left( x ^ { 2 } + y ^ { 2 } \right) }$ 

27. $f ( x , y ) = \sin ^ { - 1 } ( y - x )$ 

28. $f ( x , y ) = \tan ^ { - 1 } \left( { \frac { y } { x } } \right)$ 

29. $f ( x , y ) = \ln ( x ^ { 2 } + y ^ { 2 } - 1 )$ 

30. f ( ) x y x y , ln 9 = − − ( ) 2 2 

## Matching Surfaces with Level Curves

Exercises 31–36 show level curves for six functions. The graphs of these functions are given on the next page (items a–f ), as are their equations (items g–l). Match each set of level curves with the appropriate graph and the appropriate equation. 

31. 

32. 

![[f4fdcd3828614005c3fc1e505ad515bd4b740eb2f695bc3588b960897ed127ca.jpg|image]]


![[15d3a3cf6136869687e0dce8d4805dce23d3e03a46b008c5aac70fc0dfa0e796.jpg|image]]


33. 

34. 

![[fc50131e7feba6d77339839e061f7ce02c701d076855ce046e1d0450acbc4e90.jpg|image]]


![[07f362dd2a23532ede058dec00ff099679b6bf84a3d830ba700f2fea80343d11.jpg|image]]


35. 

36. 

![[fbbb80799aec4dcbf9cf6594af0736a38915150c10f4c94a8f519d092906b89d.jpg|image]]


![[10a4b73e5a90b1da525ed0ec6d8289aae9e4a1e41a564afb62412abd85880799.jpg|image]]



a.


![[3eb2969018ba344b673a13a12ce7b3a58c0dd149c2a85c78036a0e7effee1e32.jpg|image]]



b.


![[60ee19c58fff7876d091d386e0dee98bedcddc0f0f119d36c55a3440da9bfedb.jpg|image]]



c.


![[51fc69c0e7eb1fc6cd4f3439fb8841c76a568a34e6952adae7272c6050c88247.jpg|image]]



d.


![[0ea45d2a62fefc3f8fb733d9c09e255ae330189fb581daf01d2fdf30424d062a.jpg|image]]



e.


![[4cfb05a66a984ec351312c6e819dbe75d3c68e435029617f4731978a2dae5ce5.jpg|image]]


![[30328145db326c6af1b88a9f61dc76b3a5a1df32451b45f3814ab42bc4735b04.jpg|image]]


xy<sup>2</sup> g. =z h. z = − − y y x 2 4 2 +x y2 2 

i. = ( )( ) <sup>− +</sup> z cos cosx y e x y 4 <sup>2 2</sup> 

$$
\mathbf {j}. z = e ^ {- y} \cos x
$$

l. $z = { \frac { x y ( x ^ { 2 } - y ^ { 2 } ) } { x ^ { 2 } + y ^ { 2 } } }$ 

$$
\mathbf {k}. z = \frac {1}{4 x ^ {2} + y ^ {2}}
$$

## Functions of Two Variables

Display the values of the functions in Exercises 37–48 in two ways: (a) by sketching the surface $z = f ( x , y )$ and (b) by drawing an assortment of level curves in the function’s domain. Label each level curve with its function value. 

37. $f ( x , y ) = y ^ { 2 }$ 

39. $f ( x , y ) = x ^ { 2 } + y ^ { 2 }$ 

41. $f ( x , y ) = x ^ { 2 } - y$ 

43. $f ( x , y ) = 4 x ^ { 2 } + y ^ { 2 }$ 

45. $f ( x , y ) = 1 - | y |$ 

47. $f ( x , y ) = \sqrt { x ^ { 2 } + y ^ { 2 } + 4 }$ 

## Finding Level Curves

$$
f (x, y) = \sqrt {x}
$$

40. $f ( x , y ) = \sqrt { x ^ { 2 } + y ^ { 2 } }$ 

42. $f ( x , y ) = 4 - x ^ { 2 } - y ^ { 2 }$ 

44. $f ( x , y ) = 6 - 2 x - 3 y$ 

46. $f ( x , y ) = 1 - | x | - | y |$ 

$$
f (x, y) = \sqrt {x ^ {2} + y ^ {2} - 4}
$$

In Exercises 49–52, find an equation for, and sketch the graph of, the level curve of the function $f ( x , y )$ that passes through the given point. 

50. $f ( x , y ) = \sqrt { x ^ { 2 } - 1 } , ( 1 , 0 )$ 

49. $f ( x , y ) = 1 6 - x ^ { 2 } - y ^ { 2 } , \left( 2 { \sqrt { 2 } } , { \sqrt { 2 } } \right)$ 

51. $f ( x , y ) = { \sqrt { x + y ^ { 2 } - 3 } } , ( 3 , - 1 )$ 

52. $f ( x , y ) = { \frac { 2 y - x } { x + y + 1 } } , ( - 1 , 1 )$ 

## Sketching Level Surfaces

In Exercises 53–60, sketch a typical level surface for the function. 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2}
$$

55. $f ( x , y , z ) = x + z$ 

$$
f (x, y, z) = \ln (x ^ {2} + y ^ {2} + z ^ {2})
$$

57. $f ( x , y , z ) = x ^ { 2 } + y ^ { 2 }$ 

56. f ( ) x y z z , , = 

59. $f ( x , y , z ) = z - x ^ { 2 } - y ^ { 2 }$ 

$$
f (x, y, z) = y ^ {2} + z ^ {2}
$$

60. f ( ) ( ) ( ) ( ) x y z x y z , , 25 16 9 = + + 2 2 2 

## Finding Level Surfaces

In Exercises 61–64, find an equation for the level surface of the function through the given point. 

$$
f (x, y, z) = \sqrt {x - y} - \ln z, \quad (3, - 1, 1)
$$

62. $f ( x , y , z ) = \ln ( x ^ { 2 } + y + z ^ { 2 } ) , ( - 1 , 2 , 1 )$ 

$$
g (x, y, z) = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}, \quad (1, - 1, \sqrt {2})
$$

64. $g ( x , y , z ) = { \frac { x - y + z } { 2 x + y - z } } , ( 1 , 0 , - 2 )$ 

In Exercises 65–68, find and sketch the domain of $f .$ Then find an equation for the level curve or surface of the function passing through the given point. 

65. $f ( x , y ) = \sum _ { n = 0 } ^ { \infty } \biggl ( { \frac { x } { y } } \biggr ) ^ { n } , ( 1 , 2 )$ 

$$
g (x, y, z) = \sum_ {n = 0} ^ {\infty} \frac {(x + y) ^ {n}}{n ! z ^ {n}}, (\ln 4, \ln 9, 2)
$$

67. $f ( x , y ) = \int _ { x } ^ { y } \frac { d \theta } { \sqrt { 1 - \theta ^ { 2 } } } , ( 0 , 1 )$ 

68. $g ( x , y , z ) = \int _ { x } ^ { y } { \frac { d t } { 1 + t ^ { 2 } } } + \int _ { 0 } ^ { z } { \frac { d \theta } { \sqrt { 4 - \theta ^ { 2 } } } } , ( 0 , 1 , { \sqrt { 3 } } )$ 

## COMPUTER EXPLORATIONS

Use a CAS to perform the following steps for each of the functions in Exercises 69–72. 

a. Plot the surface over the given rectangle. 

b. Plot several level curves in the rectangle. 

c. Plot the level curve of f through the given point. 

69. $f ( x , y ) = x \mathrm { s i n } { \frac { y } { 2 } } + y$ xsin 2 , $0 \leq x \leq 5 \pi , 0 \leq y \leq 5 \pi ,$ P( ) 3 , 3 π π 

70. $f ( x , y ) = ( \sin x ) ( \cos y ) e ^ { \sqrt { x ^ { 2 } + y ^ { 2 } } / 8 } , \quad 0 \leq x \leq 5 \pi ,$ 

$$
0 \leq y \leq 5 \pi , P (4 \pi , 4 \pi)
$$

71. $f ( x , y ) = \sin ( x + 2 \cos y ) , - 2 \pi \leq x \leq 2 \pi ,$ −2 2 , , π π π π ≤ ≤y P( ) 

72. $f ( x , y ) = e ^ { ( x ^ { 0 . 1 } - y ) } \sin ( x ^ { 2 } + y ^ { 2 } ) , 0 \leq x \leq 2 \pi ,$ $- 2 \pi \leq y \leq \pi , P ( \pi , - \pi )$ 

Use a CAS to plot the implicitly defined level surfaces in Exercises $^ { 7 3 - 7 6 }$ 

73. 4 ln $\begin{array} { l l } { { \mathrm {  ~ \psi ~ } _ { 1 } ( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } ) = 1 } } & { { 7 4 , { x ^ { 2 } + z ^ { 2 } = 1 } } } \end{array}$ 

75. $x + y ^ { 2 } - 3 z ^ { 2 } = 1$ 

76. s $\ln \left( { \frac { x } { 2 } } \right) - ( \cos y ) { \sqrt { x ^ { 2 } + z ^ { 2 } } } = 2$ 

Parametrized Surfaces Just as you describe curves in the plane parametrically with a pair of equations $x = f ( t ) , y = g ( t )$ defined on some parameter interval I, you can sometimes describe surfaces in space with a triple of equations $x = f ( u , v ) , y = g ( u , v ) , z = h ( u , v )$ defined on some parameter rectangle $a \leq u \leq b , c \leq v \leq d .$ Many computer algebra systems permit you to plot such surfaces in parametric mode. (Parametrized surfaces are discussed in detail in Section 15.5.) Use a CAS to plot the surfaces in Exercises 77–80. Also plot several level curves in the xy-plane. 

$$
7 7. x = u \cos v, y = u \sin v, z = u, 0 \leq u \leq 2,
$$

$$
0 \leq v \leq 2 \pi
$$

78. $x = u \cos v , \quad y = u \sin v , \quad z = v , 0 \leq u \leq 2 ,$ 

$$
0 \leq v \leq 2 \pi
$$

79. x = + = + = ( ) ( ) 2 cos cos , 2 cos sin , sin ,u y u z u υ υ $0 \leq u \leq 2 \pi , 0 \leq v \leq 2 \pi$ 

80. $x = 2 \cos u \cos v , \quad y = 2$ =  cos sin , 2 sin  u z u υ , 

$$
0 \leq u \leq 2 \pi , 0 \leq v \leq \pi
$$

## 13.2 Limits and Continuity in Higher Dimensions

In this section we develop limits and continuity for multivariable functions. The theory is similar to that developed for single-variable functions, but since we now have more than one independent variable, there is additional complexity that requires some new ideas. 

## Limits for Functions of Two Variables

If the values of $f ( x , y )$ lie arbitrarily close to a fixed real number L for all points $( x , y )$ sufficiently close to a point $\left( x _ { 0 } , y _ { 0 } \right)$ , we say that $f$ approaches the limit L as $( x , y )$ approaches $\left( x _ { 0 } , y _ { 0 } \right)$ . This is similar to the informal definition for the limit of a function of a single variable. Notice, however, that when $\left( x _ { 0 } , y _ { 0 } \right)$ lies in the interior of $f ^ { \ast } \mathrm { s }$ domain, $( x , y )$ can approach $\left( x _ { 0 } , y _ { 0 } \right)$ from any direction, not just from the left or the right. For the limit to exist, the same limiting value must be obtained whatever direction of approach is taken. We illustrate this issue in several examples following the definition. 

> ***DEFINITION*** Suppose that every open circular disk centered at $\left( x _ { 0 } , y _ { 0 } \right)$ contains a point in the domain of $f$ other than $\left( x _ { 0 } , y _ { 0 } \right)$ itself. We say that a function $f ( x , y )$ approaches the limit L as $( x , y )$ approaches $\left( x _ { 0 } , y _ { 0 } \right)$ , and write 
>
> $$
> \lim _ {(x, y) \to (x _ {0}, y _ {0})} f (x, y) = L,
> $$
>
> if, for every number $\varepsilon > 0 .$ , there exists a corresponding number $\delta > 0$ such that for all $( x , y )$ in the domain of $f ,$ 
>
> $$
> \left| f (x, y) - L \right| <   \varepsilon \quad \text { whenever } \quad 0 <   \sqrt {(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2}} <   \delta .
> $$
>
The definition of limit says that the distance between $f ( x , y )$ and L becomes arbitrarily small whenever the distance from $( x , y )$ to $\left( x _ { 0 } , y _ { 0 } \right)$ is made sufficiently small (but not 0). The definition applies to interior points $\left( x _ { 0 } , y _ { 0 } \right)$ as well as boundary points of the domain of $f ,$ , although a boundary point need not lie within the domain. The points $( x , y )$ that approach $\left( x _ { 0 } , y _ { 0 } \right)$ are always taken to be in the domain of $f .$ See Figure 13.12. 

![[e4180b1946d66e81ade4fad65c798e14edcea8ccdf5c81c33514c200aa9ebd1a.jpg|image]]



FIGURE 13.12 In the limit definition, δ is the radius of a disk centered at


$\left( x _ { 0 } , y _ { 0 } \right)$ . For all points $( x , y )$ within this disk, the function values) $f ( x , y )$ lie inside the corresponding interval $\left( L - \varepsilon , L + \varepsilon \right)$ 

As for functions of a single variable, it can be shown that 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} x = x _ {0}\tag{1}
$$

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} y = y _ {0}\tag{2}
$$

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} k = k \quad (\text { any   number } k).\tag{3}
$$

For example, in the first limit statement above, $f ( x , y ) = x$ and $L = x _ { 0 }$ . Using the definition of limit, suppose that $\varepsilon > 0$ is chosen. If we let δ equal this ε, we see that if 

$$
0 <   \sqrt {(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2}} <   \delta = \varepsilon ,
$$

then 

$$
\begin{array}{l l} \sqrt {(x - x _ {0}) ^ {2}} <   \varepsilon & (x - x _ {0}) ^ {2} \leq (x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2} \\ | x - x _ {0} | <   \varepsilon & \sqrt {a ^ {2}} = | a | \\ | f (x, y) - x _ {0} | <   \varepsilon . & x = f (x, y) \end{array}
$$

That is, 

$$
\left| f (x, y) - x _ {0} \right| <   \varepsilon \quad \text { whenever } \quad 0 <   \sqrt {(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2}} <   \delta .
$$

So a δ has been found satisfying the requirement of the definition, and therefore we have proved that 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} f (x, y) = \lim _ {(x, y) \to (x _ {0}, y _ {0})} x = x _ {0}.
$$

Equation (1) is a special case of the more general formula 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} g (x) = \lim _ {x \to x _ {0}} g (x),\tag{4}
$$

according to which, if $f ( x , y )$ can be expressed as a function g of a single variable x, then $\operatorname* { l i m } _ { ( x , y ) \to ( x _ { 0 } , y _ { 0 } ) } f ( x , y )$ depends only on what happens to g as x approaches $x _ { 0 } .$ Similarly, the 

following formula generalizes Equation (2): 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} h (y) = \lim _ {y \rightarrow y _ {0}} h (y)\tag{5}
$$

As with single-variable functions, the limit of the sum of two functions is the sum of their limits (when they both exist), with similar results for the limits of the differences, constant multiples, products, quotients, powers, and roots. These facts are summarized in Theorem 1. 

## THEOREM 1—Properties of Limits of Functions of Two Variables

The following rules hold if L, M, and k are real numbers and 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} f (x, y) = L \quad \text { and } \quad \lim _ {(x, y) \to (x _ {0}, y _ {0})} g (x, y) = M.
$$

1. Sum Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} [ f (x, y) + g (x, y) ] = L + M
$$

2. Difference Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} [ f (x, y) - g (x, y) ] = L - M
$$

3. Constant Multiple Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} k f (x, y) = k L \quad (\text { any   number } k)
$$

4. Product Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} [ f (x, y) \cdot g (x, y) ] = L \cdot M
$$

5. Quotient Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} \frac {f (x , y)}{g (x , y)} = \frac {L}{M}, \quad M \neq 0
$$

6. Power Rule: 

$$
\lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} [ f (x, y) ] ^ {n} = L ^ {n}, n \text {   a   positive   integer }
$$

7. Root Rule: 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} \sqrt [ n ]{f (x , y)} = \sqrt [ n ]{L} = L ^ {1 / n},
$$

n a positive integer, and if n is even, 

$$
L > 0.
$$

8. Composition Rule: 

$$
z = L
$$

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} h (f (x, y)) = h (L).
$$

Although we will not prove Theorem 1 here, we give an informal discussion of why it is true. If $( x , y )$ is sufficiently close to $\left( x _ { 0 } , y _ { 0 } \right)$ , then $f ( x , y )$ is close to L and $g ( x , y )$ is close to M (from the informal interpretation of limits). It is then reasonable that $f ( x , y ) + g ( x , y )$ is close to $L + M ; f ( x , y ) - g ( x , y )$ is close to $L \mathrm { ~ - ~ } M ; k f ( x , y )$ is close to $k L ; f ( x , y ) g ( x , y )$ is close to LM; and $f ( x , y ) / g ( x , y )$ is close to $L / M$ if $M \ne 0$ Similarly, powers and roots of f are close to those of L, and a continuous function h composed with f has a value close to its value h (L) when applied to L. 

When we apply Theorem 1 and Equations (1)–(3) to polynomials and rational functions, we obtain the useful result that the limits of these functions as $( x , y )  ( x _ { 0 } , y _ { 0 } )$ can be calculated by evaluating the functions at $\left( x _ { 0 } , y _ { 0 } \right)$ . The only requirement is that the rational functions be defined at $\left( x _ { 0 } , y _ { 0 } \right)$ 

**EXAMPLE 1** In this example, we combine Equations (1)–(5) with the results in Theorem 1 to calculate the limits. 

(a) 

$$
\lim _ {(x, y) \rightarrow (0, 1)} \frac {x - x y + 3}{x ^ {2} y + 5 x y - y ^ {3}} = \frac {0 - (0) (1) + 3}{(0) ^ {2} (1) + 5 (0) (1) - (1) ^ {3}} = - 3\tag{b}
$$

$$
\begin{array}{r l} \lim _ {(x, y) \to (3, - 4)} \sqrt {x ^ {2} + y ^ {2}} & = \sqrt {\lim _ {(x , y) \to (3 , - 4)} (x ^ {2} + y ^ {2})} \\ & = \sqrt {3 ^ {2} + (- 4) ^ {2}} \\ & = \sqrt {2 5} = 5 \end{array} \quad \text {   Rule   7   } \quad \text {   Rules   1   and   6   and   Eq.   (1)   and   (2)   }
$$

$$
\begin{array}{r l}\text {(c)}&\lim _ {(x, y) \rightarrow (\pi / 2, 0)} \left(\frac {x}{\sin x} - \frac {\sin y}{y}\right) = \lim _ {(x, y) \rightarrow (\pi / 2, 0)} \frac {x}{\sin x} - \lim _ {(x, y) \rightarrow (\pi / 2, 0)} \frac {\sin y}{y}\\&= \lim _ {x \rightarrow \pi / 2} \frac {x}{\sin x} - \lim _ {y \rightarrow 0} \frac {\sin y}{y}\\&= \frac {\pi}{2} - 1\end{array}\tag {Eq.6 and (5)}
$$

$$
\text { **EXAMPLE   2** } \quad \text { Find } \lim _ {(x, y) \to (0, 0)} \frac {x ^ {2} - x y}{\sqrt {x} - \sqrt {y}}.
$$

**Solution** Since the denominator ${ \sqrt { x } } - { \sqrt { y } }$ approaches 0 as $( x , y ) \to ( 0 , 0 )$ , we cannot use the Quotient Rule from Theorem 1. If we multiply numerator and denominator by $\sqrt { x } + \sqrt { y }$ , however, we produce an equivalent fraction whose limit we can find: 

$$
\begin{array}{l l} \lim _ {(x, y) \to (0, 0)} \frac {x ^ {2} - x y}{\sqrt {x} - \sqrt {y}} = \lim _ {(x, y) \to (0, 0)} \frac {(x ^ {2} - x y) (\sqrt {x} + \sqrt {y})}{(\sqrt {x} - \sqrt {y}) (\sqrt {x} + \sqrt {y})} & \text {   Multiply   by   a   form   equal   to   1.   } \\ = \lim _ {(x, y) \to (0, 0)} \frac {x (x - y) (\sqrt {x} + \sqrt {y})}{x - y} & \text {   Algebra   } \\ = \lim _ {(x, y) \to (0, 0)} x (\sqrt {x} + \sqrt {y}) & \text {   Cancel   the   nonzero   factor   } (x - y). \\ = \left(\lim _ {(x, y) \to (0, 0)} x\right) \left[ \left(\lim _ {(x, y) \to (0, 0)} \sqrt {x}\right) + \left(\lim _ {(x, y) \to (0, 0)} \sqrt {y}\right) \right] & \text {   Rules   4   and   1   } \\ = \left(\lim _ {(x, y) \to (0, 0)} x\right) \left[ \sqrt {\lim _ {(x , y) \to (0 , 0)} x} + \sqrt {\lim _ {(x , y) \to (0 , 0)} y} \right] & \text {   Rule   7   } \\ = (0) [ \sqrt {0} + \sqrt {0} ] = 0 & \text {   Eq.   (1)   and   (2)   } \end{array}
$$

We can cancel the factor $( x - y )$ because the path $y = x$ (where we would have $x - y = 0 )$ is not in the domain of the function 

![[ffb9d1cedc0558fcb7ad226389b4cf3237e20c296797b31c0fb6df9e08260f12.jpg|image]]



FIGURE 13.13 The surface graph suggests that the limit of the function in Example 3 must be 0, if it exists.


$$
f (x, y) = \frac {x ^ {2} - x y}{\sqrt {x} - \sqrt {y}}.
$$

**EXAMPLE 3** $\mathrm { F i n d } \operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } { \frac { 4 x y ^ { 2 } } { x ^ { 2 } + y ^ { 2 } } } \mathrm { i f ~ i t \ e x i s t s . }$ 

**Solution** We first observe that along the line $x = 0 .$ , the function always has value 0 when $y \ne 0$ . Likewise, along the line $y = 0$ , the function has value 0 provided $x \neq 0$ . So if the limit does exist as $( x , y )$ approaches $( 0 , 0 )$ , the value of the limit must be 0 (see Figure 13.13). To see whether this is true, we apply the definition of limit. 

Let $\varepsilon > 0$ be given, but arbitrary. We want to find a $\delta > 0$ such that 

$$
\left| \frac {4 x y ^ {2}}{x ^ {2} + y ^ {2}} - 0 \right| <   \varepsilon \quad \text { whenever } \quad 0 <   \sqrt {x ^ {2} + y ^ {2}} <   \delta
$$

or 

$$
\frac {4 | x | y ^ {2}}{x ^ {2} + y ^ {2}} <   \varepsilon \quad \text { whenever } \quad 0 <   \sqrt {x ^ {2} + y ^ {2}} <   \delta .
$$

Since $y ^ { 2 } \leq x ^ { 2 } + y ^ { 2 }$ , we have that 

$$
\frac {4 | x | y ^ {2}}{x ^ {2} + y ^ {2}} \leq 4 | x | = 4 \sqrt {x ^ {2}} \leq 4 \sqrt {x ^ {2} + y ^ {2}}. \quad \frac {y ^ {2}}{x ^ {2} + y ^ {2}} \leq 1
$$

So if we choose $\delta = \varepsilon / 4$ and let $0 < \sqrt { x ^ { 2 } + y ^ { 2 } } < \delta .$ , we get 

$$
\left| \frac {4 x y ^ {2}}{x ^ {2} + y ^ {2}} - 0 \right| \leq 4 \sqrt {x ^ {2} + y ^ {2}} <   4 \delta = 4 \left(\frac {\varepsilon}{4}\right) = \varepsilon .
$$

It follows from the definition that 

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {4 x y ^ {2}}{x ^ {2} + y ^ {2}} = 0.
$$


(a)


![[ef5e10b63baa7b1bbbe652459f6ac87c389b1524d667446c1ad85e71567702c3.jpg|image]]


![[47b5a5b621fbfc105cc801e43e7e39fa0967a9e593f63497d8d8bd6ad96591c2.jpg|image]]


FIGURE 13.14 (a) The graph of 

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {2 x y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

The function is continuous at every point except the origin. (b) The value of $f$ along each line $y = m x , x \ne 0$ , is constant but varies with m (Example 5). 

**EXAMPLE 4** 

$$
\text {   If   } f (x, y) = \frac {y}{x}, \text {   does   } \lim _ {(x, y) \to (0, 0)} f (x, y) \text {   exist?   }
$$

**Solution** The domain of $f$ does not include the y-axis, so we do not consider any points $( x , y )$ where $x = 0$ in the approach toward the origin $( 0 , 0 )$ . Along the x-axis, the value of the function is $f ( x , 0 ) = 0$ for all $x \neq 0$ . So if the limit does exist as $( x , y ) \to ( 0 , 0 )$ the value of the limit must be $L = 0$ . On the other hand, along the line $y = x ,$ , the value of the function is $f ( x , x ) = x / x = 1$ for all $x \neq 0$ . That ${ \mathrm { i s } } ,$ the function $f$ approaches the value 1 along the line $y = x .$ This means that for every disk of radius $\delta$ centered at $( 0 , 0 )$ , the disk will contain points $( x , 0 )$ on the x-axis where the value of the function is $0 ,$ and also points $( x , x )$ along the line $y = x$ where the value of the function is 1. So no matter how small we choose $\delta$ as the radius of the disk in Figure 13.12, there will be points within the disk for which the function values differ by 1. Therefore, the limit cannot exist because we can take $\varepsilon$ to be any number less than 1 in the limit definition and deny that $L = 0 \mathrm { o r }$ 1, or any other real number. The limit does not exist because we have different limiting values along different paths approaching the point (0, 0 .) 

## Continuity

As with functions of a single variable, continuity is defined in terms of limits. 

> ***DEFINITION*** Suppose that every open circular disk centered at $\left( x _ { 0 } , y _ { 0 } \right)$ contains a point in the domain of $f$ other than $\left( x _ { 0 } , y _ { 0 } \right)$ itself. Then a function $f ( x , y )$ is continuous at the point $\left( x _ { 0 } , y _ { 0 } \right)$ if 
>
> 1. $f$ is defined at $\left( x _ { 0 } , y _ { 0 } \right)$ 9 
>
> 2. $\operatorname* { l i m } _ { ( x , y ) \to ( x _ { 0 } , y _ { 0 } ) } f ( x , y )$ exists, and 
>
> $$
> \lim _ {(x, y) \rightarrow (x _ {0}, y _ {0})} f (x, y) = f (x _ {0}, y _ {0}).
> $$
>
A function is continuous if it is continuous at every point of its domain. 

As with the definition of limit, the definition of continuity applies at boundary points as well as interior points of the domain of $f .$ 

A consequence of Theorem 1 is that algebraic combinations of continuous functions are continuous at every point at which all the functions involved are defined. This means that sums, differences, constant multiples, products, quotients, and powers of continuous functions are continuous where defined. In particular, polynomials and rational functions of two variables are continuous at every point at which they are defined. 

## **EXAMPLE 5** Show that

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {2 x y}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

is continuous at every point except the origin (Figure 13.14). 

**Solution** The function $f$ is continuous at every point $( x , y )$ except $( 0 , 0 )$ because its values at points other than $( 0 , 0 )$ are given by a rational function of x and y, and therefore at those points the limiting value is simply obtained by substituting the values of x and $y$ into that rational expression. 

![[e20dfc2c7aadb4a1ebd65ed46bbeab447fbdd9fc15b7050611575e45b2355dc9.jpg|image]]



(a)


![[a2c4b3c17a32d17fb0399ef56e6fca59f2bc8d9fe3d2164943d35ddfd5453e3f.jpg|image]]



(b)


FIGURE 13.15 (a) The graph of $f ( x , y ) = 2 x ^ { 2 } y / ( x ^ { 4 } + y ^ { 2 } )$ .  (b) Along each path $y = k x ^ { 2 } , x \neq 0$ , the value of $f$ is constant, but varies with k (Example 6). 

$\operatorname { A t } \left( 0 , 0 \right)$ , the value of $f$ is defined, but $f$ has no limit as $( x , y ) \to ( 0 , 0 )$ . The reason is that different paths of approach to the origin can lead to different results, as we now see. 

For every value of $m ,$ the function $f$ has a constant value on the “punctured” line $y = m x , x \ne 0$ , because 

$$
\left. f (x, y) \right| _ {y = m x} = \left. \frac {2 x y}{x ^ {2} + y ^ {2}} \right| _ {y = m x} = \frac {2 x (m x)}{x ^ {2} + (m x) ^ {2}} = \frac {2 m x ^ {2}}{x ^ {2} + m ^ {2} x ^ {2}} = \frac {2 m}{1 + m ^ {2}}.
$$

Therefore, $f$ has this number as its limit as ( x y, approaches ) (0, 0 along the line:) 

$$
\lim_{\substack{(x,y)\to (0,0)\\ \text{along $y = mx$}}}f(x,y) = \lim_{(x,y)\to (0,0)}\left[f(x,y)\bigg|_{y = mx}\right] = \frac{2m}{1 + m^{2}}.
$$

This limit changes with each value of the slope m. There is therefore no single number wemay call the limit of $f \operatorname { a s } \left( x , y \right)$ approaches the origin. The limit fails to exist, and the func-tion is not continuous at the origin. 一

Examples 4 and 5 illustrate an important point about limits of functions of two or more variables. For a limit to exist at a point, the limit must be the same along every approach path. This result is analogous to the single-variable case where both the left- and right-sided limits had to have the same value. For functions of two or more variables, if we ever find paths with different limits, we know the function has no limit at the point they approach. 

Two-Path Test for Nonexistence of a Limit
If a function $f(x, y)$ has different limits along two different paths in the domain of f as $(x, y)$ approaches $(x_{0}, y_{0})$ , then $\lim_{(x, y) \to (x_{0}, y_{0})} f(x, y)$ does not exist. 

## **EXAMPLE 6** Show that the function

$$
f (x, y) = \frac {2 x ^ {2} y}{x ^ {4} + y ^ {2}}
$$

(Figure 13.15) has no limit as $( x , y )$ approaches $( 0 , 0 )$ 

**Solution** As $( x , y )$ approaches $( 0 , 0 )$ , both the numerator and the denominator approach 0, which gives the indeterminate form $0 / 0$ . We examine the values of $f$ along parabolic curves that end at (0, 0 . Along the curve) $y = k x ^ { 2 } , x \neq 0$ , the function has the constant value 

$$
\left. f (x, y) \right| _ {y = k x ^ {2}} = \left. \frac {2 x ^ {2} y}{x ^ {4} + y ^ {2}} \right| _ {y = k x ^ {2}} = \frac {2 x ^ {2} \left(k x ^ {2}\right)}{x ^ {4} + \left(k x ^ {2}\right) ^ {2}} = \frac {2 k x ^ {4}}{x ^ {4} + k ^ {2} x ^ {4}} = \frac {2 k}{1 + k ^ {2}}.
$$

Therefore, 

$$
\lim_{\substack{(x,y)\to (0,0)\\ \text{along $y = kx^{2}$}}}f(x,y) = \lim_{(x,y)\to (0,0)}\left[f(x,y)\bigg|_{y = kx^{2}}\right] = \frac{2k}{1 + k^{2}}.
$$

This limit varies with the path of approach. If $( x , y )$ approaches (0, 0 along the parabola) $y = x ^ { 2 }$ , for instance, $k = 1$ and the limit is 1. $. \operatorname { I f } \left( x , y \right)$ approaches $( 0 , 0 )$ along the x-axis, $k = 0$ and the limit is 0. By the two-path test, f has no limit as $( x , y )$ approaches (0, 0 . ) 

It can be shown that the function in Example 6 has limit 0 along every straight line path $y \ = \ m x$ (Exercise 57). This implies the following observation: 

Having the same limit along all straight lines approaching $\left( x _ { 0 } , y _ { 0 } \right)$ does not imply that a limit exists at $\left( x _ { 0 } , y _ { 0 } \right)$ . 

Whenever it is correctly defined, the composition of continuous functions is also continuous. The only requirement is that each function be continuous where it is applied. The proof, omitted here, is similar to that for functions of a single variable (Theorem 9 in Section 2.6). 

## Continuity of Compositions

If $f$ is continuous at $\left( x _ { 0 } , y _ { 0 } \right)$ and g is a single-variable function continuous at $f ( x _ { 0 } , y _ { 0 } )$ , then the composition $h = g \circ f$ defined by $h ( x , y ) = g ( f ( x , y ) )$ is also continuous at $\left( x _ { 0 } , y _ { 0 } \right)$ 

For example, the composite functions 

$$
e ^ {x - y}, \quad \cos \frac {x y}{x ^ {2} + 1}, \quad \ln (1 + x ^ {2} y ^ {2})
$$

are continuous at every point $( x , y )$ 

## Functions of More Than Two Variables

The definitions of limit and continuity for functions of two variables and the conclusions about limits and continuity for sums, products, quotients, powers, and compositions all extend to functions of three or more variables. Functions like 

$$
\ln (x + y + z) \quad \text { and } \quad \frac {y \sin z}{x - 1}
$$

are continuous throughout their domains, and limits like 

$$
\lim _ {P \rightarrow (1, 0, - 1)} \frac {e ^ {x + z}}{z ^ {2} + \cos \sqrt {x y}} = \frac {e ^ {1 - 1}}{(- 1) ^ {2} + \cos 0} = \frac {1}{2},
$$

where P denotes the point $\left( x , y , z \right)$ , may be found by direct substitution. 

## Extreme Values of Continuous Functions on Closed, Bounded Sets

The Extreme Value Theorem (Theorem 1, Section 4.1) states that a function of a single variable that is continuous at every point of a closed, bounded interval $\textstyle \left\lceil a , b \right\rceil$ takes on an absolute maximum value and an absolute minimum value at least once in $[ a , b ]$ . The same holds true of a function $z = f ( x , y )$ that is continuous on a closed, bounded set R in the plane (like a line segment, a disk, or a filled-in triangle). The function takes on an absolute maximum value at some point in R and an absolute minimum value at some point in R. The function may take on a maximum or minimum value more than once over R. 

Similar results hold for functions of three or more variables. A continuous function $w = f ( x , y , z )$ must take on absolute maximum and minimum values on any closed, bounded set (such as a solid ball or cube, spherical shell, or rectangular solid) on which it is defined. We will learn how to find these extreme values in Section 13.7. 

## EXERCISES

## Limits with Two Variables

Find the limits in Exercises 1–12. 

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {3 x ^ {2} - y ^ {2} + 5}{x ^ {2} + y ^ {2} + 2} \quad \text {   2.   } \lim _ {(x, y) \rightarrow (0, 4)} \frac {x}{\sqrt {y}}
$$

$$
\lim _ {(x, y) \rightarrow (3, 4)} \sqrt {x ^ {2} + y ^ {2} - 1}
$$

$$
\lim _ {(x, y) \rightarrow (2, - 3)} \left(\frac {1}{x} + \frac {1}{y}\right) ^ {2}
$$

$$
\lim _ {(x, y) \rightarrow (0, \pi / 4)} \sec x \tan y
$$

$$
\lim _ {(x, y) \rightarrow (0, 0)} \cos \frac {x ^ {2} + y ^ {3}}{x + y + 1}
$$

7. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , \ln 2 ) } e ^ { x - y }$ 

9. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } { \frac { e ^ { y } \sin x } { x } }$ 

8. $\operatorname* { l i m } _ { ( x , y )  ( 1 , 1 ) } \ln | 1 + x ^ { 2 } y ^ { 2 } |$ 

11. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , \pi / 6 ) } { \frac { x \sin y } { x ^ { 2 } + 1 } }$ 

10. $\operatorname* { l i m } _ { ( x , y ) \to \left( 1 / 2 7 , \pi ^ { 3 } \right) } \cos \sqrt [ 3 ] { x y }$ 

12. $\operatorname* { l i m } _ { ( x , y ) \to ( \pi / 2 , 0 ) } { \frac { \cos y + 1 } { y - \sin x } }$ 

## Limits of Quotients

Find the limits in Exercises 13–24 by rewriting the fractions first. 

13. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 1 ) } { \frac { x ^ { 2 } - 2 x y + y ^ { 2 } } { x - y } }$ 14. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 1 ) \atop { x \neq y } } { \frac { x ^ { 2 } - y ^ { 2 } } { x - y } }$ 

15. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 1 ) } { \frac { x y - y - 2 x + 2 } { x - 1 } }$ 

16. $\operatorname* { l i m } _ { ( x , y ) \to ( 2 , - 4 ) } { \frac { y + 4 } { x ^ { 2 } y - x y + 4 x ^ { 2 } - 4 x } }$ 

17. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } { \frac { x - y + 2 { \sqrt { x } } - 2 { \sqrt { y } } } { \sqrt { x } - { \sqrt { y } } } }$ 

18. $\operatorname* { l i m } _ { ( x , y ) \to ( 2 , 2 ) } { \frac { x + y - 4 } { \sqrt { x + y } - 2 } }$ 19. $\operatorname* { l i m } _ { ( x , y ) \to ( 2 , 0 ) } { \frac { \sqrt { 2 x - y } - 2 } { 2 x - y - 4 } }$ 

20. $\operatorname* { l i m } _ { ( x , y ) \to ( 4 , 3 ) } { \frac { \sqrt { x } - { \sqrt { y + 1 } } } { x - y - 1 } }$ 

21. $\operatorname * { l i m } _ { ( x , y )  ( 0 , 0 ) } { \frac { \sin ( x ^ { 2 } + y ^ { 2 } ) } { x ^ { 2 } + y ^ { 2 } } }$ 

22. $\operatorname* { l i m } _ { ( x , y )  ( 0 , 0 ) } { \frac { 1 - \cos ( x y ) } { x y } }$ 

23. $\operatorname * { l i m } _ { ( x , y )  ( 1 , - 1 ) } \frac { x ^ { 3 } + y ^ { 3 } } { x + y }$ 

24. $\operatorname* { l i m } _ { ( x , y ) \to ( 2 , 2 ) } { \frac { x - y } { x ^ { 4 } - y ^ { 4 } } }$ 

## Limits with Three Variables

Find the limits in Exercises 25–30. 

25. $\operatorname* { l i m } _ { \to ( 1 , 3 , 4 ) } \left( { \frac { 1 } { x } } + { \frac { 1 } { y } } + { \frac { 1 } { z } } \right)$ 26. $\operatorname * { l i m } _ { P \to ( 1 , - 1 , - 1 ) } { \frac { 2 x y + y z } { x ^ { 2 } + z ^ { 2 } } }$ P 

27. $\operatorname* { l i m } _ { P \to ( \pi , \pi , 0 ) } ( \sin ^ { 2 } x + \cos ^ { 2 } y + \sec ^ { 2 } z )$ 

28. $\operatorname * { l i m } _ { P \to ( - 1 / 4 , \pi / 2 , 2 ) } \tan ^ { - 1 } x y z$ 29. $\operatorname* { l i m } _ { P \to ( \pi , 0 , 3 ) } z e ^ { - 2 y } \cos 2 x$ 

30. $\operatorname * { l i m } _ { P \to ( 2 , - 3 , 6 ) } \ln \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } }$ 

## Continuity for Two Variables

At what points (x y, in the plane are the functions in Exercises 31–34) continuous? 

31. a. $f ( x , y ) = \sin ( x + y )$ b. $f ( x , y ) = \ln ( x ^ { 2 } + y ^ { 2 } )$ 

32. a. $f ( x , y ) = { \frac { x + y } { x - y } }$ 

b. $f ( x , y ) = { \frac { y } { x ^ { 2 } + 1 } }$ 

$$
g (x, y) = \sin \frac {1}{x y}
$$

b. $g ( x , y ) = \frac { x + y } { 2 + \cos x }$ 

34. a. $g ( x , y ) = { \frac { x ^ { 2 } + y ^ { 2 } } { x ^ { 2 } - 3 x + 2 } } \quad { \mathbf { b . } } \ g ( x , y ) = { \frac { 1 } { x ^ { 2 } - y } }$ 

## Continuity for Three Variables

At what points ( x y z , , in space are the functions in Exercises 35–40) continuous? 

35. a. $f ( x , y , z ) = x ^ { 2 } + y ^ { 2 } - 2 z ^ { 2 }$ 

b. $f ( x , y , z ) = \sqrt { x ^ { 2 } + y ^ { 2 } - 1 }$ 

36. a. $f ( x , y , z ) = \ln x y z$ b. $f ( x , y , z ) = e ^ { x + y } \cos z$ 

37. a. $h ( x , y , z ) = x y \mathrm { s i n } { \frac { 1 } { z } }$ b. $h ( x , y , z ) = { \frac { 1 } { x ^ { 2 } + z ^ { 2 } - 1 } }$ 

38. a. $h ( x , y , z ) = { \frac { 1 } { | y | + | z | } }$ b. $h ( x , y , z ) = { \frac { 1 } { | x y | + | z | } }$ 

39. a. $h ( x , y , z ) = \ln ( z - x ^ { 2 } - y ^ { 2 } - 1 )$ 

b. $h ( x , y , z ) = \frac { 1 } { z - \sqrt { x ^ { 2 } + y ^ { 2 } } }$ 

40. a. $h ( x , y , z ) = \sqrt { 4 - x ^ { 2 } - y ^ { 2 } - z ^ { 2 } }$ 

b. $h ( x , y , z ) = \frac { 1 } { 4 - \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } - 9 } }$ 

## No Limit Exists at the Origin

By considering different paths of approach, show that the functions in Exercises 41–48 have no limit as $( x , y ) \to ( 0 , 0 )$ 

41. $f ( x , y ) = - { \frac { x } { \sqrt { x ^ { 2 } + y ^ { 2 } } } }$ 

42. $f ( x , y ) = { \frac { x ^ { 4 } } { x ^ { 4 } + y ^ { 2 } } }$ 

![[5ed7c9567270def8c5400d44701e74dcb63960297906ba85739fc0cccaae4f00.jpg|image]]


![[b5e838494fe3e22cfff75920801d2fc5b3c82f2456f837947eb4f5a83e27ad57.jpg|image]]


43. $f ( x , y ) = { \frac { x ^ { 4 } - y ^ { 2 } } { x ^ { 4 } + y ^ { 2 } } }$ 

44. $f ( x , y ) = { \frac { x y } { | x y | } }$ 

45. $g ( x , y ) = { \frac { x - y } { x + y } }$ 

47. $h ( x , y ) = \frac { x ^ { 2 } + y } { y }$ 

46. $g ( x , y ) = { \frac { x ^ { 2 } - y } { x - y } }$ 

48. $h ( x , y ) = { \frac { x ^ { 2 } y } { x ^ { 4 } + y ^ { 2 } } }$ 

## Theory and Examples

In Exercises 49–54, show that the limits do not exist. 

49. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 1 ) } { \frac { x y ^ { 2 } - 1 } { y - 1 } }$ 

51. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 1 ) } { \frac { x \ln y } { x ^ { 2 } + \left( \ln y \right) ^ { 2 } } }$ 

53. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } { \frac { y + \sin x } { x + \sin y } }$ 

$$
\lim _ {(x, y) \rightarrow (1, - 1)} \frac {x y + 1}{x ^ {2} - y ^ {2}}
$$

52. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 0 ) } \frac { x e ^ { y } - 1 } { x e ^ { y } - 1 + y }$ 

54. $\operatorname* { l i m } _ { ( x , y ) \to ( 1 , 1 ) } { \frac { \tan y - y \tan x } { y - x } }$ 

55. Let $f ( x , y ) = { \left\{ \begin{array} { l l } { 1 , } & { y \geq x ^ { 4 } } \\ { 1 , } & { y \leq 0 } \\ { 0 , } & { { \mathrm { o t h e r w i s } } } \end{array} \right. }$ e. 

Find each of the following limits, or explain that the limit does not exist. 

a. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 1 ) } f ( x , y )$ 

b. $\operatorname* { l i m } _ { ( x , y ) \to ( 2 , 3 ) } f ( x , y )$ 

c. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } f ( x , y )$ 

56. Let $f ( x , y ) = { \left\{ \begin{array} { l l } { x ^ { 2 } , } & { x \geq 0 } \\ { x ^ { 3 } , } & { x < 0 } \end{array} \right. } .$ 

Find the following limits. 

a. $\operatorname* { l i m } _ { ( x , y ) \to ( 3 , - 2 ) } f ( x , y )$ 

b. $\operatorname* { l i m } _ { ( x , y ) \to ( - 2 , 1 ) } f ( x , y )$ 

c. $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } f ( x , y )$ 

57. Show that the function in Example 6 has limit 0 along every straight line approaching (0, 0 .) 

58. If $f ( x _ { 0 } , y _ { 0 } ) = 3 ,$ , what can you say about 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} f (x, y)
$$

if f is continuous at $\left( x _ { 0 } , y _ { 0 } \right) ? \mathrm { I f } \ f$ is not continuous at $( x _ { 0 } , y _ { 0 } ) \overset { \cdot } { \underset { \cdot } { \cdot } }$ Give reasons for your answers. 

The Sandwich Theorem for functions of two variables states that if $g ( x , y ) \leq f ( x , y ) \leq h ( x , y )$ for all $\left( x , y \right) \neq \left( x _ { 0 } , y _ { 0 } \right)$ in a disk centered at $\left( x _ { 0 } , y _ { 0 } \right)$ and if g and h have the same finite limit L as $( x , y )  ( x _ { 0 } , y _ { 0 } )$ , then 

$$
\lim _ {(x, y) \to (x _ {0}, y _ {0})} f (x, y) = L.
$$

Use this result to support your answers to the questions in Exercises 59–62. 

## 59. Does knowing that

$$
1 - \frac {x ^ {2} y ^ {2}}{3} <   \frac {\tan^ {- 1} x y}{x y} <   1
$$

tell you anything about 

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {\tan^ {- 1} x y}{x y}?
$$

Give reasons for your answer. 

60. Does knowing that 

$$
2 | x y | - \frac {x ^ {2} y ^ {2}}{6} <   4 - 4 \cos \sqrt {| x y |} <   2 | x y |
$$

tell you anything about 

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {4 - 4 \cos \sqrt {| x y |}}{| x y |}?
$$

Give reasons for your answer. 

61. Does knowing that $\left| \sin ( 1 / x ) \right| \le 1$ tell you anything about 

$$
\lim _ {(x, y) \rightarrow (0, 0)} y \sin \frac {1}{x}?
$$

Give reasons for your answer. 

62. Does knowing that co $\left( 1 / y \right) \mid \leq 1$ tell you anything about 

$$
\lim _ {(x, y) \to (0, 0)} x \cos \frac {1}{y}?
$$

Give reasons for your answer. 

## 63. (Continuation of Example 5.)

a. Reread Example 5. Then substitute m = tan into theθ formula 

$$
\left. f (x, y) \right| _ {y = m x} = \frac {2 m}{1 + m ^ {2}}
$$

and simplify the result to show how the value of f varies with the line’s angle of inclination. 

b. Use the formula you obtained in part (a) to show that the limit of $f \operatorname { a s } ( x , y ) \to ( 0 , 0 )$ along the line $y = m x$ varies from −1 to 1, depending on the angle of approach. 

64. Continuous extension Define $f ( 0 , 0 )$ in a way that extends 

$$
f (x, y) = x y \frac {x ^ {2} - y ^ {2}}{x ^ {2} + y ^ {2}}
$$

to be continuous at the origin. 

## Changing Variables to Polar Coordinates

If you cannot make any headway with $\operatorname* { l i m } _ { ( x , y ) \to ( 0 , 0 ) } f ( x , y )$ in rectangular coordinates, try changing to polar coordinates. Substitute $x = r \cos \theta , y = r \sin \theta$ , and investigate the limit of the resulting expression as $r  0$ . In other words, try to decide whether there exists a number L satisfying the following criterion: 

Given $\varepsilon > 0$ , there exists a $\delta > 0$ such that for all r and $\theta ,$ 

$$
| r | <   \delta \Rightarrow | f (r, \theta) - L | <   \varepsilon .\tag{1}
$$

If such an L exists, then 

$$
\lim _ {(x, y) \rightarrow (0, 0)} f (x, y) = \lim _ {r \rightarrow 0} f (r \cos \theta , r \sin \theta) = L.
$$

For instance, 

$$
\lim _ {(x, y) \rightarrow (0, 0)} \frac {x ^ {3}}{x ^ {2} + y ^ {2}} = \lim _ {r \rightarrow 0} \frac {r ^ {3} \cos^ {3} \theta}{r ^ {2}} = \lim _ {r \rightarrow 0} r \cos^ {3} \theta = 0.
$$

To verify the last of these equalities, we need to show that Equation (1) is satisfied with $f ( r , \theta ) = r \cos ^ { 3 } \theta$ and $L = 0$ . That is, we need to show that given any $\varepsilon > 0 ,$ , there exists a $\delta > 0$ such that for all r and $\theta ,$ 

$$
| r | <   \delta \Rightarrow | r \cos^ {3} \theta - 0 | <   \varepsilon .
$$

Since 

$$
\left| r \cos^ {3} \theta \right| = | r | \left| \cos^ {3} \theta \right| \leq | r | \cdot 1 = | r |,
$$

the implication holds for all r and θ if we take $\delta = \varepsilon$ 

In contrast, 

$$
\frac {x ^ {2}}{x ^ {2} + y ^ {2}} = \frac {r ^ {2} \cos^ {2} \theta}{r ^ {2}} = \cos^ {2} \theta
$$

takes on all values from 0 to 1 regardless of how small r is, so that $\operatorname * { l i m } _ { ( x , y )  ( 0 , 0 ) } x ^ { 2 } / ( x ^ { 2 } + y ^ { 2 } )$ does not exist. 

In each of these instances, the existence or nonexistence of the limit as $r  0$ is fairly clear. Shifting to polar coordinates does not always help, however, and may even tempt us to false conclusions. For example, the limit may exist along every straight line (or ray) θ = constant and yet fail to exist in the broader sense. Example 5 illustrates this point. In polar coordinates, $f ( x , y ) = ( 2 x ^ { 2 } y ) / ( x ^ { 4 } + y ^ { 2 } )$ becomes 

$$
f (r \cos \theta , r \sin \theta) = \frac {r \cos \theta \sin 2 \theta}{r ^ {2} \cos^ {4} \theta + \sin^ {2} \theta}
$$

for $r \ne 0$ . If we hold θ constant and let $r  0$ , the limit is 0. On the path $y = x ^ { 2 }$ , however, we have r sin $\theta = r ^ { 2 } \cos ^ { 2 } \theta$ and 

$$
\begin{array}{r l} f (r \cos \theta , r \sin \theta) & = \frac {r \cos \theta \sin 2 \theta}{r ^ {2} \cos^ {4} \theta + (r \cos^ {2} \theta) ^ {2}} \\ & = \frac {2 r \cos^ {2} \theta \sin \theta}{2 r ^ {2} \cos^ {4} \theta} = \frac {r \sin \theta}{r ^ {2} \cos^ {2} \theta} = 1. \end{array}
$$

In Exercises 65–70, find the limit of $f \operatorname { a s } ( x , y ) \to ( 0 , 0 )$ or show that the limit does not exist. 

$$
\mathbf {6 5 .} f (x, y) = \frac {x ^ {3} - x y ^ {2}}{x ^ {2} + y ^ {2}} \quad \mathbf {6 6 .} f (x, y) = \cos \left(\frac {x ^ {3} - y ^ {3}}{x ^ {2} + y ^ {2}}\right)
$$

$$
\mathbf {6 7 .} f (x, y) = \frac {y ^ {2}}{x ^ {2} + y ^ {2}} \quad \mathbf {6 8 .} f (x, y) = \frac {2 x}{x ^ {2} + x + y ^ {2}}
$$

$$
f (x, y) = \tan^ {- 1} \left(\frac {| x | + | y |}{x ^ {2} + y ^ {2}}\right) \tag {69.}
$$

70. $f ( x , y ) = { \frac { x ^ { 2 } - y ^ { 2 } } { x ^ { 2 } + y ^ { 2 } } }$ 

In Exercises 71 and $^ { 7 2 , }$ , define $f ( 0 , 0 )$ in a way that extends $f$ to be continuous at the origin. 

71. $f ( x , y ) = \ln \left( { \frac { 3 x ^ { 2 } - x ^ { 2 } y ^ { 2 } + 3 y ^ { 2 } } { x ^ { 2 } + y ^ { 2 } } } \right)$ 

72. $f ( x , y ) = { \frac { 3 x ^ { 2 } y } { x ^ { 2 } + y ^ { 2 } } }$ 

## Using the Limit Definition

Each of Exercises 73–78 gives a function $f ( x , y )$ and a positive number ε. In each exercise, show that there exists a $\delta > 0$ such that for all ( x y, ,) 

$$
\sqrt {x ^ {2} + y ^ {2}} <   \delta \Rightarrow | f (x, y) - f (0, 0) | <   \varepsilon .
$$

73. $f ( x , y ) = x ^ { 2 } + y ^ { 2 } , \varepsilon = 0 . 0 1$ 

74. $f ( x , y ) = y / ( x ^ { 2 } + 1 ) , \varepsilon = 0 . 0 5$ 

75. $f ( x , y ) = ( x + y ) / ( x ^ { 2 } + 1 ) , \varepsilon = 0 . 0 1$ 

## 13.3 Partial Derivatives

76. $f ( x , y ) = ( x + y ) / ( 2 + \cos x ) , \varepsilon = 0 . 0 2$ 

$$
7 7. f (x, y) = \frac {x y ^ {2}}{x ^ {2} + y ^ {2}} \quad \text { and } \quad f (0, 0) = 0, \varepsilon = 0. 0 4
$$

$$
\text { 78.   } f (x, y) = \frac {x ^ {3} + y ^ {4}}{x ^ {2} + y ^ {2}} \quad \text { and } \quad f (0, 0) = 0, \varepsilon = 0. 0 2
$$

Each of Exercises 79–82 gives a function $f ( x , y , z )$ and a positive number ε. In each exercise, show that there exists a $\delta > 0$ such that for all $( x , y , z )$ 

$$
\sqrt {x ^ {2} + y ^ {2} + z ^ {2}} <   \delta \Rightarrow | f (x, y, z) - f (0, 0, 0) | <   \varepsilon .
$$

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2}, \varepsilon = 0. 0 1 5
$$

80. $f ( x , y , z ) = x y z , \ z = 0 . 0 0 8$ 

$$
\mathbf {8 1 .} f (x, y, z) = \frac {x + y + z}{x ^ {2} + y ^ {2} + z ^ {2} + 1}, \varepsilon = 0. 0 1 5
$$

82. $f ( x , y , z ) = \tan ^ { 2 } x + \tan ^ { 2 } y + \tan ^ { 2 } z , \varepsilon = 0 . 0 3$ 

83. $\begin{array} { l } { { \mathrm { S h o w ~ t h a t ~ } f ( x , y , z ) = x + y - z } } \\ { { \bigl ( x _ { 0 } , y _ { 0 } , z _ { 0 } \bigr ) . } } \end{array}$ is continuous at every point 

84. Show that $f ( x , y , z ) = x ^ { 2 } + y ^ { 2 } + z ^ { 2 }$ is continuous at the origin. 

The calculus of several variables is similar to single-variable calculus applied to several variables, one at a time. When we hold all but one of the independent variables of a function constant and differentiate with respect to that one variable, we get a “partial” derivative. This section shows how partial derivatives are defined and interpreted geometrically, and how to calculate them by applying the familiar rules for differentiating functions of a single variable. The idea of differentiability for functions of several variables requires more than the existence of the partial derivatives, because a point can be approached from many different directions. However, we will see that differentiable functions of several variables behave similarly to differentiable single-variable functions. In particular, they are continuous and can be well approximated by linear functions. 

## Partial Derivatives of a Function of Two Variables

$\operatorname { I f } \left( x _ { 0 } , y _ { 0 } \right)$ is a point in the domain of a function $f ( x , y )$ , the vertical plane $y = y _ { 0 }$ will cut the surface $z = f ( x , y )$ in the curve $z = f ( x , y _ { 0 } )$ (Figure 13.16). This curve is the graph 

![[6e5f7708beffa7145a56cc16f4818a8598158d06f84359688279c14387d10e49.jpg|image]]



Horizontal axis in the plane $y = y _ { 0 }$


FIGURE 13.16 The intersection of the plane $y = y _ { 0 }$ with the surface $z = f ( x , y )$ , viewed from above the first quadrant of the xy-plane. 

of the function $z = f ( x , y _ { 0 } )$ in the plane $y = y _ { 0 }$ . The horizontal coordinate in this plane is x; the vertical coordinate is z. The y-value is held constant at $y _ { 0 } ,$ so y is not a variable. 

We define the partial derivative of f with respect to x at the point $\left( x _ { 0 } , y _ { 0 } \right)$ as the ordinary derivative of $f ( x , y _ { 0 } )$ with respect to x at the point $\begin{array} { r } { x \ = \ x _ { 0 } . } \end{array}$ . To distinguish partial derivatives from ordinary derivatives, we use the symbol ∂ rather than the $d$ previously used. In the definition, h represents a real number, positive or negative. 

> ***DEFINITION*** The partial derivative of $f ( x , y )$ with respect to x at the point $\left( x _ { 0 } , y _ { 0 } \right)$ is 
>
> $$
> \left. \frac {\partial f}{\partial x} \right| _ {(x _ {0}, y _ {0})} = \lim _ {h \rightarrow 0} \frac {f (x _ {0} + h , y _ {0}) - f (x _ {0} , y _ {0})}{h},
> $$
>
> provided the limit exists. 
>
The partial derivative of $f ( x , y )$ with respect to x at the point $\left( x _ { 0 } , y _ { 0 } \right)$ is the same as the ordinary derivative of $f ( x , y _ { 0 } )$ at the point $x _ { 0 } { \mathrm { : } }$ 

$$
\left. \frac {\partial f}{\partial x} \right| _ {(x _ {0}, y _ {0})} = \left. \frac {d}{d x} f (x, y _ {0}) \right| _ {x = x _ {0}}.
$$

A variety of notations are used to denote the partial derivative at a point $\left( x _ { 0 } , y _ { 0 } \right)$ ， including 

$$
\frac {\partial f}{\partial x} (x _ {0}, y _ {0}), \qquad f _ {x} (x _ {0}, y _ {0}), \qquad \text { and } \qquad \left. \frac {\partial z}{\partial x} \right| _ {(x _ {0}, y _ {0})}.
$$

When we do not specify a specific point $\left( x _ { 0 } , y _ { 0 } \right)$ at which the partial derivative is being evaluated, then the partial derivative becomes a function whose domain is the points where the partial derivative exists. Notations for this function include 

$$
\frac {\partial f}{\partial x}, \quad f _ {x}, \quad \text { and } \quad \frac {\partial z}{\partial x}.
$$

![[d9faa651ba771cec7ddf7ad31825d9cb6941cd1eb998efed2c5d5b6325fb972d.jpg|image]]



FIGURE 13.17 The intersection of the plane $x \ = \ x _ { 0 }$ with the surface $z = f ( x , y )$ viewed from above the first quadrant of the xy-plane.


The slope of the curve $z = f ( x , y _ { 0 } )$ at the point $P ( x _ { 0 } , y _ { 0 } , f ( x _ { 0 } , y _ { 0 } ) )$ in the plane $y = y _ { 0 }$ is the value of the partial derivative of $f$ with respect to x at $\left( x _ { 0 } , y _ { 0 } \right)$ . (In Figure 13.16 this slope is negative.) The tangent line to the curve at P is the line in the plane $y = y _ { 0 }$ that passes through P with this slope. The partial derivative $\partial f / \partial x$ at $\left( x _ { 0 } , y _ { 0 } \right)$ gives the rate of change of f with respect to x when y is held fixed at the value $y _ { 0 } .$ 

The definition of the partial derivative of $f ( x , y )$ with respect to y at a point $\left( x _ { 0 } , y _ { 0 } \right)$ is similar to the definition of the partial derivative of f with respect to x. We hold x fixed at the value $x _ { 0 }$ and take the ordinary derivative of $f ( x _ { 0 } , y )$ with respect to y at $y _ { 0 } .$ 

> ***DEFINITION*** The partial derivative of $f ( x , y )$ with respect to y at the point $\left( x _ { 0 } , y _ { 0 } \right)$ is 
>
> $$
> \left. \frac {\partial f}{\partial y} \right| _ {(x _ {0}, y _ {0})} = \left. \frac {d}{d y} f (x _ {0}, y) \right| _ {y = y _ {0}} = \lim _ {h \rightarrow 0} \frac {f (x _ {0} , y _ {0} + h) - f (x _ {0} , y _ {0})}{h},
> $$
>
The slope of the curve $z = f ( x _ { 0 } , y )$ at the point $P ( x _ { 0 } , y _ { 0 } , f ( x _ { 0 } , y _ { 0 } ) )$ in the vertical plane $x \ = \ x _ { 0 }$ (Figure 13.17) is the partial derivative of f with respect to y at $\left( x _ { 0 } , y _ { 0 } \right)$ . The tangent line to the curve at P is the line in the plane $x \ = \ x _ { 0 }$ that passes through P with this slope. The partial derivative gives the rate of change of $^ { \cdot } f$ with respect to y at $\left( x _ { 0 } , y _ { 0 } \right)$ when x is held fixed at the value $x _ { 0 }$ 

The partial derivative with respect to y is denoted the same way as the partial derivative with respect to x: 

$$
\frac {\partial f}{\partial y} (x _ {0}, y _ {0}), \quad f _ {y} (x _ {0}, y _ {0}), \quad \frac {\partial f}{\partial y}, \quad f _ {y}.
$$

Notice that we now have two tangent lines associated with the surface $z = f ( x , y )$ at the point $P ( x _ { 0 } , y _ { 0 } , f ( x _ { 0 } , y _ { 0 } ) )$ (Figure 13.18). Is the plane they determine tangent to the surface at P? We will see that it is for the differentiable functions defined at the end of this section, and we will learn how to find the tangent plane in Section 13.6. First we have to better understand partial derivatives. 

![[191bbf111de4c899b7dc6727d2011a2f0b34d2c87b4bcbd4e630000cea79c6e7.jpg|image]]



FIGURE 13.18 Figures 13.16 and 13.17 combined. The tangent lines at the point $\left( x _ { 0 } , y _ { 0 } , f \left( x _ { 0 } , y _ { 0 } \right) \right)$ ) determine a plane that, in this picture at least, appears to be tangent to the surface.


## Calculations

The definitions of $\partial f / \partial x$ and $\partial f / \partial y$ give us two different ways of differentiating $f$ at a point: with respect to x in the usual way while treating y as a constant, and with respect to $y$ in the usual way while treating x as a constant. As the following examples show, the values of these partial derivatives are usually different at a given point $\left( x _ { 0 } , y _ { 0 } \right)$ 

**EXAMPLE 1** Find the values of $\partial f / \partial x$ and $\partial f / \partial y$ at the point $( 4 , - 5 ) { \mathrm { i f } }$ 

$$
f (x, y) = x ^ {2} + 3 x y + y - 1.
$$

**Solution** To find $\partial f / \partial x$ , we treat y as a constant and differentiate with respect to x: 

$$
\frac {\partial f}{\partial x} = \frac {\partial}{\partial x} (x ^ {2} + 3 x y + y - 1) = 2 x + 3 \cdot 1 \cdot y + 0 - 0 = 2 x + 3 y.
$$

The value of $) \partial f / \partial x \operatorname { a t } \left( 4 , - 5 \right) \operatorname { i s } 2 ( 4 ) + 3 ( - 5 ) = - 7 .$ 

To find $\partial f / \partial y$ , we treat x as a constant and differentiate with respect to $y \colon$ 

$$
\frac {\partial f}{\partial y} = \frac {\partial}{\partial y} (x ^ {2} + 3 x y + y - 1) = 0 + 3 \cdot x \cdot 1 + 1 - 0 = 3 x + 1.
$$

The value of $\partial f / \partial y \operatorname { a t } \left( 4 , - 5 \right) \operatorname { i s } 3 ( 4 ) + 1 = 1 3 .$ 

**EXAMPLE 2** Find $\partial f / \partial y$ as a function if $f ( x , y ) = y$ xy  sin . 

**Solution** We treat x as a constant and $f$ as a product of y and sin xy: 

$$
\begin{array}{r l} \frac {\partial f}{\partial y} & = \frac {\partial}{\partial y} (y \sin x y) = y \frac {\partial}{\partial y} \sin x y + (\sin x y) \frac {\partial}{\partial y} (y) \\ & = (y \cos x y) \frac {\partial}{\partial y} (x y) + \sin x y = x y \cos x y + \sin x y. \end{array}
$$

**EXAMPLE 3** Find $f _ { x }$ and $f _ { y }$ as functions if 

$$
f (x, y) = \frac {2 y}{y + \cos x}.
$$

**Solution** We treat f as a quotient. With y held constant, we use the quotient rule to get 

$$
\begin{array}{l} f _ {x} = \frac {\partial}{\partial x} \left(\frac {2 y}{y + \cos x}\right) = \frac {(y + \cos x) \frac {\partial}{\partial x} (2 y) - 2 y \frac {\partial}{\partial x} (y + \cos x)}{(y + \cos x) ^ {2}} \\ = \frac {(y + \cos x) (0) - 2 y (- \sin x)}{(y + \cos x) ^ {2}} = \frac {2 y \sin x}{(y + \cos x) ^ {2}}. \end{array}
$$

With x held constant and again applying the quotient rule, we get 

$$
\begin{array}{l} f _ {y} = \frac {\partial}{\partial y} \left(\frac {2 y}{y + \cos x}\right) = \frac {(y + \cos x) \frac {\partial}{\partial y} (2 y) - 2 y \frac {\partial}{\partial y} (y + \cos x)}{(y + \cos x) ^ {2}} \\ = \frac {(y + \cos x) (2) - 2 y (1)}{(y + \cos x) ^ {2}} = \frac {2 \cos x}{(y + \cos x) ^ {2}}. \end{array}
$$

Implicit differentiation works for partial derivatives the way it works for ordinary derivatives, as the next example illustrates. 

![[9f868e53527d3ede418dcc5cb116e9a5dbfb3bec49683c1005c356f0af05a1fa.jpg|image]]



FIGURE 13.19 The tangent line to the curve of intersection of the plane x = 1 and the surface $z = x ^ { 2 } + y ^ { 2 }$ at the point (1, 2, 5 (Example 5). )


**EXAMPLE 4** Find $\partial z / \partial x$ assuming that the equation 

$$
y z - \ln z = x + y
$$

defines z as a function of the two independent variables x and $y$ and the partial derivative exists. 

**Solution** We differentiate both sides of the equation with respect to $x ,$ holding y constant and treating z as a differentiable function of x: 

$$
\begin{array}{l} \frac {\partial}{\partial x} (y z) - \frac {\partial}{\partial x} \ln z = \frac {\partial x}{\partial x} + \frac {\partial y}{\partial x} \\ \quad y \frac {\partial z}{\partial x} - \frac {1}{z} \frac {\partial z}{\partial x} = 1 + 0 \\ \quad \left(y - \frac {1}{z}\right) \frac {\partial z}{\partial x} = 1 \\ \quad \frac {\partial z}{\partial x} = \frac {z}{y z - 1}. \end{array} \qquad \text { With   } y \text {   constant }, \frac {\partial}{\partial x} (y z) = y \frac {\partial z}{\partial x}.
$$

**EXAMPLE 5** The plane $x = 1$ intersects the paraboloid $z = x ^ { 2 } + y ^ { 2 }$ in a parabola. Find the slope of the tangent line to the parabola at (1, 2, 5 (Figure 13.19).) 

**Solution** The parabola lies in a plane parallel to the yz-plane, and the slope is the value of the partial derivative $\partial z / \partial y$ at (1, 2 :) 

$$
\left. \frac {\partial z}{\partial y} \right| _ {(1, 2)} = \left. \frac {\partial}{\partial y} (x ^ {2} + y ^ {2}) \right| _ {(1, 2)} = \left. 2 y \right| _ {(1, 2)} = 2 (2) = 4.
$$

As a check, we can treat the parabola as the graph of the single-variable function $z = ( 1 ) ^ { 2 } + y ^ { 2 } = 1 + y ^ { 2 }$ in the plane $x = 1$ and ask for the slope at $y = 2$ . The slope, calculated now as an ordinary derivative, is 

$$
\left. \frac {d z}{d y} \right| _ {y = 2} = \left. \frac {d}{d y} (1 + y ^ {2}) \right| _ {y = 2} = 2 y \Bigg | _ {y = 2} = 4.
$$

## Functions of More Than Two Variables

The definitions of the partial derivatives of functions of more than two independent variables are similar to the definitions for functions of two variables. They are ordinary derivatives with respect to one variable, taken while the other independent variables are held constant. 

**EXAMPLE 6** $\operatorname { I f } x , y ,$ and $z$ are independent variables and 

$$
f (x, y, z) = x \sin (y + 3 z),
$$

then 

$$
\begin{array}{l l} \frac {\partial f}{\partial z} = \frac {\partial}{\partial z} [ x \sin (y + 3 z) ] = x \frac {\partial}{\partial z} \sin (y + 3 z) & x \text { held   constant } \\ = x \cos (y + 3 z) \frac {\partial}{\partial z} (y + 3 z) & \text { Chain   rule } \\ = 3 x \cos (y + 3 z). & y \text { held   constant } \end{array}
$$

![[68c21b658d46e5b69a7a272bcb37cfbb1fbc721ed2de8cb3fb670a14e52d103d.jpg|image]]



FIGURE 13.20 Resistors arranged this way are said to be connected in parallel (Example 7). Each resistor lets a portion of the current through. Their equivalent resistance R is calculated with the formula


$$
\frac {1}{R} = \frac {1}{R _ {1}} + \frac {1}{R _ {2}} + \frac {1}{R _ {3}}.
$$

![[a06d4aa48ab1d26e647d2b89a9df5bdcde23da58c362134777197a0ca0660551.jpg|image]]



FIGURE 13.21 The graph of


$$
f (x, y) = \left\{ \begin{array}{l l} 0, & x y \neq 0 \\ 1, & x y = 0 \end{array} \right.
$$

consists of the lines $L _ { 1 }$ and $L _ { 2 }$ (lying 1 unit above the xy-plane) and the four open quadrants of the xy-plane. The function has partial derivatives at the origin but is not continuous there (Example 8). 

**EXAMPLE 7** If resistors of $R _ { 1 } , R _ { 2 }$ , and $R _ { 3 }$ ohms are connected in parallel to make an R-ohm resistor, the value of R can be found from the equation 

$$
\frac {1}{R} = \frac {1}{R _ {1}} + \frac {1}{R _ {2}} + \frac {1}{R _ {3}}
$$

(Figure 13.20). Find the value of $\partial R / \partial R _ { 2 }$ when $R _ { 1 } = 3 0 , R _ { 2 } = 4 5 \mathrm { . }$ ,  and $R _ { 3 } = 9 0 \mathrm { o h m s }$ 

**Solution** To find $\partial R / \partial R _ { 2 }$ , we treat $R _ { 1 }$ and $R _ { 3 }$ as constants and, using implicit differentiation, differentiate both sides of the equation with respect to $R _ { 2 } { \mathrm { : } }$ 

$$
\frac {\partial}{\partial R _ {2}} \left(\frac {1}{R}\right) = \frac {\partial}{\partial R _ {2}} \left(\frac {1}{R _ {1}} + \frac {1}{R _ {2}} + \frac {1}{R _ {3}}\right)
$$

$$
- \frac {1}{R ^ {2}} \frac {\partial R}{\partial R _ {2}} = 0 - \frac {1}{R _ {2} ^ {2}} + 0
$$

$$
\frac {\partial R}{\partial R _ {2}} = \frac {R ^ {2}}{R _ {2} {} ^ {2}} = \left(\frac {R}{R _ {2}}\right) ^ {2}.
$$

When $R _ { 1 } = 3 0 , R _ { 2 } = 4 5 ,$ , and $R _ { 3 } ~ = ~ 9 0$ 

$$
\frac {1}{R} = \frac {1}{3 0} + \frac {1}{4 5} + \frac {1}{9 0} = \frac {3 + 2 + 1}{9 0} = \frac {6}{9 0} = \frac {1}{1 5},
$$

so $R = 1 5$ and 

$$
\frac {\partial R}{\partial R _ {2}} = \left(\frac {1 5}{4 5}\right) ^ {2} = \left(\frac {1}{3}\right) ^ {2} = \frac {1}{9}.
$$

Thus at the given values, a small change in the resistance $R _ { 2 }$ leads to a change in R about one-ninth as large. ■ 

## Partial Derivatives and Continuity

A function $f ( x , y )$ can have partial derivatives with respect to both x and y at a point without the function being continuous there. This is different from functions of a single variable, where the existence of a derivative implies continuity. If the partial derivatives of $f ( x , y )$ exist and are continuous throughout a disk centered at $\left( x _ { 0 } , y _ { 0 } \right)$ , however, then $f$ is continuous at $\left( x _ { 0 } , y _ { 0 } \right)$ , as we see at the end of this section. 

## **EXAMPLE 8** Let

$$
f (x, y) = \left\{ \begin{array}{l l} 0, & x y \neq 0 \\ 1, & x y = 0 \end{array} \right.
$$

(Figure 13.21). 

(a) Find the limit of $f \operatorname { a s } \left( x , y \right)$ approaches (0, 0 along the line) $y \ = \ x .$ 

(b) Find the limit of f as ( x y, approaches ) (0, 0 along the line) $y = 0$ 

(c) Prove that f is not continuous at the origin. 

(d) Show that both partial derivatives $\partial f / \partial x$ and $\partial f / \partial y$ exist at the origin. 

## **Solution**

(a) Since $f ( x , y )$ is zero at every point on the line $y = x$ (except at the origin), we have 

$$
\lim _ {(x, y) \rightarrow (0, 0)} f (x, y) \Big | _ {y = x} = \lim _ {(x, y) \rightarrow (0, 0)} 0 = 0.
$$

(b) Since $f ( x , y )$ takes the constant value 1 at every point on the line $y = 0 ,$ , we have 

$$
\lim _ {(x, y) \rightarrow (0, 0)} f (x, y) \Bigg | _ {y = 0} = \lim _ {(x, y) \rightarrow (0, 0)} 1 = 1.
$$

(c) By the two-path test, $f$ has no limit as $( x , y )$ approaches $( 0 , 0 )$ . Consequently, $f$ is not continuous at $( 0 , 0 )$ 

(d) To find $\partial f / \partial x \mathrm { a t } ( 0 , 0 )$ , we hold y fixed at $y = 0$ . Then $f ( x , y ) = 1$ for all $x ,$ and thegraph of f is the line $L _ { 1 }$ in Figure 13.21. The slope of this line at any x is $\partial f / \partial x = 0$ In particular, $\partial f / \partial x = 0 \mathrm { a t } ( 0 , 0 )$ . Similarly, $\partial f / \partial y$ is the slope of line $L _ { 2 }$ at any y, so$\partial f / \partial y = 0 \mathrm { a t } ( 0 , 0 )$ 一

What Example 8 suggests is that we need a stronger requirement for differentiability in higher dimensions than the mere existence of the partial derivatives. We define differentiability for functions of two variables (which is somewhat more complicated than for single-variable functions) at the end of this section and then revisit the connection to continuity. 

## Second-Order Partial Derivatives

When we differentiate a function $f ( x , y )$ twice, we produce its second-order derivatives. These derivatives are usually denoted by 

$$
\begin{array}{c} \frac {\partial^ {2} f}{\partial x ^ {2}} \text { or } f _ {x x}, \quad \frac {\partial^ {2} f}{\partial y ^ {2}} \text { or } f _ {y y}, \\ \frac {\partial^ {2} f}{\partial x   \partial y} \text { or } f _ {y x}, \quad \text { and } \quad \frac {\partial^ {2} f}{\partial y   \partial x} \text { or } f _ {x y}. \end{array}
$$

The defining equations are 

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} = \frac {\partial}{\partial x} \left(\frac {\partial f}{\partial x}\right), \quad \frac {\partial^ {2} f}{\partial x \partial y} = \frac {\partial}{\partial x} \left(\frac {\partial f}{\partial y}\right),
$$

and so on. Notice the order in which the mixed partial derivatives are taken: 

$$
\begin{array}{l l} \frac {\partial^ {2} f}{\partial x   \partial y} & \text { Differentiate   first   with   respect   to } y, \text { then   with   respect   to } x. \\ f _ {y x} = (f _ {y}) _ {x} & \text { Means   the   same   thing } \end{array}
$$

## HISTORICAL BIOGRAPHY

Pierre-Simon Laplace 

**EXAMPLE 9** $\operatorname { I f } f ( x , y ) = x \cos y + y e ^ { x }$ , find the second-order derivatives 

(1749–1827) 

Mathematician and astronomer, Laplace was born in Normandy, France. He was among the most influential scientists of his time and was called the Newton of France for contributions to the understanding of the solar system’s stability. Laplace also generalized the laws of mechanics for their application to the motion and properties of the heavenly bodies. 

To know more, visit the companion Website. 

$$
\frac {\partial^ {2} f}{\partial x ^ {2}}, \quad \frac {\partial^ {2} f}{\partial y \partial x}, \quad \frac {\partial^ {2} f}{\partial y ^ {2}}, \quad \text { and } \quad \frac {\partial^ {2} f}{\partial x \partial y}.
$$

**Solution** The first step is to calculate both first partial derivatives. 

$$
\begin{array}{r l} \frac {\partial f}{\partial x} & = \frac {\partial}{\partial x} (x \cos y + y e ^ {x}) \\ & = \cos y + y e ^ {x} \end{array}
$$

$$
\frac {\partial f}{\partial y} = \frac {\partial}{\partial y} (x \cos y + y e ^ {x})
$$

Now we find both partial derivatives of each first partial: 

$$
\frac {\partial^ {2} f}{\partial y \partial x} = \frac {\partial}{\partial y} \left(\frac {\partial f}{\partial x}\right) = - \sin y + e ^ {x}
$$

$$
\frac {\partial^ {2} f}{\partial x \partial y} = \frac {\partial}{\partial x} \left(\frac {\partial f}{\partial y}\right) = - \sin y + e ^ {x}
$$

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} = \frac {\partial}{\partial x} \Bigl (\frac {\partial f}{\partial x} \Bigr) = y e ^ {x}.
$$

$$
\frac {\partial^ {2} f}{\partial y ^ {2}} = \frac {\partial}{\partial y} \left(\frac {\partial f}{\partial y}\right) = - x \cos y.
$$

## The Mixed Derivative Theorem

You may have noticed that the “mixed” second-order partial derivatives 

$$
\frac {\partial^ {2} f}{\partial y \partial x} \qquad \text { and } \qquad \frac {\partial^ {2} f}{\partial x \partial y}
$$

in Example 9 are equal. This is not a coincidence. They must be equal whenever $f , f _ { x } , f _ { y } , f _ { x y }$ ,  and $f _ { y x }$ are continuous, as stated in the following theorem. However, the mixed derivatives can be different when the continuity conditions are not satisfied (see Exercise 82). 

## HISTORICAL BIOGRAPHY

Alexis Clairaut 

Alexis Clairaut was a mathematical genius, who was called to visit the Academy of Sciences in Paris when he was only 12 years old. n a study published in 1743, the Clairaut proposition postulates in a simple way the dependency of the geometrical flattening ratio on the relationship between the gravity and the centrifugal force. 

To know more, visit the companion Website. 

(1713–1765) 

THEOREM 2—The Mixed Derivative Theorem If $f ( x , y )$ and its partial derivatives $f _ { x } , f _ { y } , f _ { x y } .$ , and $f _ { y x }$ are defined throughout an open region containing a point $( a , b )$ and are all continuous at $( a , b )$ , then 

$$
f _ {x y} (a, b) = f _ {y x} (a, b).
$$

Theorem 2 is also known as Clairaut’s Theorem, after the French mathematician Alexis Clairaut, who discovered it. A proof is given in Appendix A.10. Theorem 2 says that to calculate a mixed second-order derivative, we may differentiate in either order, provided the continuity conditions are satisfied. This ability to proceed in different order sometimes simplifies our calculations. 

**EXAMPLE 10** Find $\frac { \partial ^ { 2 } w } { \partial x \partial y }$ if 

$$
w = x y + \frac {e ^ {y}}{y ^ {2} + 1}.
$$

**Solution** The symbol $\partial ^ { 2 } w / \partial x \partial y$ tells us to differentiate first with respect to y and then with respect to x. However, if we interchange the order of differentiation and differentiate first with respect to x, we get the answer more quickly. In two steps, 

$$
\frac {\partial w}{\partial x} = y \quad \text { and } \quad \frac {\partial^ {2} w}{\partial y   \partial x} = 1.
$$

If we differentiate first with respect to y, we obtain $\partial ^ { 2 } w / \partial x \partial y = 1$ as well, but with more work. We can differentiate in either order because the conditions of Theorem 2 hold for w at all points $( x _ { 0 } , y _ { 0 } )$ 

## Partial Derivatives of Still Higher Order

Although we will deal mostly with first- and second-order partial derivatives, because these appear the most frequently in applications, there is no theoretical limit to how many times we can differentiate a function as long as the derivatives involved exist. Thus, we get third- and fourth-order derivatives denoted by symbols like 

$$
\begin{array}{c} \frac {\partial^ {3} f}{\partial x \partial y ^ {2}} = f _ {y y x}, \\ \frac {\partial^ {4} f}{\partial x ^ {2} \partial y ^ {2}} = f _ {y y x x}, \end{array}
$$

and so on. As with second-order derivatives, the order of differentiation is immaterial as long as all the derivatives through the order in question are continuous. 

$$
\text {   Find   } f _ {y x y z} \text {   if   } f (x, y, z) = 1 - 2 x y ^ {2} z + x ^ {2} y.
$$

**Solution** We first differentiate with respect to the variable y, then x, then y again, and finally with respect to z: 

$$
\begin{array}{c} f _ {y} = - 4 x y z + x ^ {2} \\ f _ {y x} = - 4 y z + 2 x \\ f _ {y x y} = - 4 z \\ f _ {y x y z} = - 4. \end{array}
$$

## Differentiability

The concept of differentiability for functions of several variables is more complicated than for single-variable functions, because a point in the domain can be approached from many directions and along any path, not just from the left or from the right. The existence of both partial derivatives at a point $\left( x _ { 0 } , y _ { 0 } \right)$ is not by itself even enough to show continuity at $\left( x _ { 0 } , y _ { 0 } \right)$ , as we saw in Example 8. The differentiability of $f$ is instead based on the idea that a linear function gives a good model of a differentiable function near a point. 

In Section 3.11, we saw that a differentiable function f can be approximated near a point $x _ { 0 }$ by its linearization, 

$$
L (x) = f \left(x _ {0}\right) + f ^ {\prime} \left(x _ {0}\right) \left(x - x _ {0}\right).
$$

This formula allows us to find a linear function $L ,$ a function whose graph is a straight line, such that L closely approximates $f$ near $x _ { 0 } .$ This can be done whenever $f$ is differentiable, even when f itself is described by a very complicated formula. Approximations are much more useful and meaningful when they are accompanied by information on their accuracy. In Section 3.11, Equation (1), we saw that a differentiable function $f$ satisfies 

$$
f (x) - f \left(x _ {0}\right) = f ^ {\prime} \left(x _ {0}\right) \left(x - x _ {0}\right) + \varepsilon \left(x - x _ {0}\right),
$$

where $\varepsilon  0$ as $x \ \longrightarrow \ x _ { 0 } .$ Framed in terms of approximating f by $L ,$ this becomes 

$$
f (x) - L (x) = \varepsilon (x - x _ {0}),\tag{1}
$$

where again $\varepsilon  0$ as $x \ \longrightarrow \ x _ { 0 }$ 

Rather than being a consequence of the definition, the differentiability for a function of two variables $f ( x , y )$ is defined to mean that f can be approximated by a linear function. The approximating linear function $L ( x , y )$ for $f ( x , y )$ near the point $\left( x _ { 0 } , y _ { 0 } \right)$ takes the form 

$$
L (x, y) = f \left(x _ {0}, y _ {0}\right) + f _ {x} \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right) + f _ {y} \left(x _ {0}, y _ {0}\right) \left(y - y _ {0}\right),
$$

and the graph of L is a plane, called the tangent plane, that approximates the graph of f near $\left( x _ { 0 } , y _ { 0 } \right)$ . Notice that $L ( x _ { 0 } , y _ { 0 } ) = f ( x _ { 0 } , y _ { 0 } )$ , so the functions L and f coincide at $\left( x _ { 0 } , y _ { 0 } \right)$ . Moreover the partial derivatives of L and f are also equal at $\left( x _ { 0 } , y _ { 0 } \right)$ . We will study tangent planes in detail in Section 13.6. 

We now specify how closely f is approximated by L at $\left( x _ { 0 } , y _ { 0 } \right)$ . Extending the formula for single variable functions in Equation (1), we require that the difference between f and L satisfies 

$$
f (x, y) - L (x, y) = \varepsilon_ {1} (x - x _ {0}) + \varepsilon_ {2} (y - y _ {0}),\tag{2}
$$

where both $\varepsilon _ { 1 } \to 0$ and $\varepsilon _ { 2 } \to 0 \mathrm { a s } ( x , y ) \to ( x _ { 0 } , y _ { 0 } )$ 

If we insert the formula for $L ( x , y )$ into Equation (2) we see that 

$$
\begin{array}{c} f (x, y) - f (x _ {0}, y _ {0}) = f _ {x} (x _ {0}, y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0}, y _ {0}) (y - y _ {0}) + \varepsilon_ {1} (x - x _ {0}) \\ + \varepsilon_ {2} (y - y _ {0}). \end{array}
$$

Setting $\Delta x = x - x _ { 0 } , \Delta y = y - y _ { 0 }$ , and $\Delta z = f ( x , y ) - f ( x _ { 0 } , y _ { 0 } )$ , we get 

$$
\Delta z = f _ {x} \left(x _ {0}, y _ {0}\right) \Delta x + f _ {y} \left(x _ {0}, y _ {0}\right) \Delta y + \varepsilon_ {1} \Delta x + \varepsilon_ {2} \Delta y.
$$

Based on these ideas, we now state the formal definition of differentiability, which captures the idea that  f  is well approximated by L. 

> ***DEFINITION*** A function $z = f ( x , y )$ is differentiable at $\left( x _ { 0 } , y _ { 0 } \right)$ if both $f _ { x } \left( x _ { 0 } , y _ { 0 } \right)$ and $f _ { y } \left( x _ { 0 } , y _ { 0 } \right)$ exist and if $\Delta z = f ( x , y ) - f ( x _ { 0 } , y _ { 0 } )$ satisfies 
>
> $$
> \Delta z = f _ {x} \left(x _ {0}, y _ {0}\right) \Delta x + f _ {y} \left(x _ {0}, y _ {0}\right) \Delta y + \varepsilon_ {1} \Delta x + \varepsilon_ {2} \Delta y,
> $$
>
> where $\Delta x = x - x _ { 0 } , \Delta y = y - y _ { 0 } ,$ , and both $\varepsilon _ { 1 } \to 0$ and $\varepsilon _ { 2 } \ \to \ 0$ as $( x , y )  ( x _ { 0 } , y _ { 0 } )$ . We call the function $f$ differentiable if it is differentiable at every point in its domain, and we then say that its graph is a smooth surface. 
>
The following theorem (proved in Appendix A.10) and its accompanying corollary tell us that functions with continuous first partial derivatives at $\left( x _ { 0 } , y _ { 0 } \right)$ are differentiable there, and they are closely approximated locally by a linear function. We study this approximation in Section 13.6. 

THEOREM 3—The Increment Theorem for Functions of Two Variables
Suppose that the first partial derivatives of $f(x,y)$ are defined throughout an open region R containing the point $(x_{0},y_{0})$ and that $f_{x}$ and $f_{y}$ are continuous at $(x_{0},y_{0})$ . Then the change

[ \Delta z = f(x_{0} + \Delta x, y_{0} + \Delta y) - f(x_{0}, y_{0}) ] 

in the value of f that results from moving from $(x_{0}, y_{0})$ to another point $(x_{0} + \Delta x, y_{0} + \Delta y)$ in R satisfies an equation of the form

[ \Delta z = f_{x}(x_{0}, y_{0}) \Delta x + f_{y}(x_{0}, y_{0}) \Delta y + \varepsilon_{1} \Delta x + \varepsilon_{2} \Delta y, ] 

in which each of $\varepsilon_{1}, \varepsilon_{2} \to 0$ as both $\Delta x, \Delta y \to 0$ . 

In many cases the partial derivatives are defined and continuous at every point in the domain of $f .$ We then have the following Corollary. 

Corollary of Theorem 3
If the partial derivatives $f_{x}$ and $f_{y}$ of a function $f(x, y)$ are continuous throughout an open region R, then f is differentiable at every point of R. 

I $\mathrm { ~ f ~ } z = f ( x , y )$ is differentiable, then the definition of differentiability ensures that $\Delta z = f ( x _ { 0 } + \Delta x , y _ { 0 } + \Delta y ) - f ( x _ { 0 } , y _ { 0 } )$ approaches 0 as $\Delta x$ and $\Delta y$ approach 0. This tells us that a function of two variables is continuous at every point where it is differentiable. 

THEOREM 4—Differentiable Implies Continuous
If a function $f(x, y)$ is differentiable at $(x_{0}, y_{0})$ , then f is continuous at $(x_{0}, y_{0})$ . 

As we can see from Corollary 3 and Theorem 4, a function $f ( x , y )$ must be continuous at a point $\left( x _ { 0 } , y _ { 0 } \right) \mathrm { i f } \ f _ { x }$ and $f _ { y }$ are continuous throughout an open region containing $\left( x _ { 0 } , y _ { 0 } \right)$ . Remember, however, that it is still possible for a function of two variables to be discontinuous at a point where its first partial derivatives exist, as we saw in Example 8. Existence alone of the partial derivatives at that point is not enough, but continuity of the partial derivatives guarantees differentiability. 

## EXERCISES

13.3 

## Calculating First-Order Partial Derivatives

In Exercises 1–22, find $\partial f / \partial x$ and $\partial f / \partial y$ 

15. $f ( x , y ) = \ln ( x + y )$ 

16. $f ( x , y ) = e ^ { x y } \ln y$ 

1. $f ( x , y ) = 2 x ^ { 2 } - 3 y - 4$ $2 . \ f ( x , y ) = x ^ { 2 } - x y + y ^ { 2 }$ 

17. $f ( x , y ) = \sin ^ { 2 } ( x - 3 y )$ 

18. $f \left( x , y \right) = \cos ^ { 2 } ( 3 x - y ^ { 2 } )$ 

19. $f ( x , y ) = x ^ { y }$ 

3. $f \bigl ( x , y \bigr ) = ( x ^ { 2 } - 1 ) ( y + 2 )$ 

20. $f ( x , y ) = \log _ { y } x$ 

4. f ( ) x y xy x y x y , 5 7 3 6 = − − + − + 2 2 2 

21. $f ( x , y ) = \int _ { x } ^ { y } g ( t ) d t$ g t   continuous for all  ( ) 

5. $f ( x , y ) = ( x y - 1 ) ^ { 2 }$ 

6. $f ( x , y ) = ( 2 x - 3 y ) ^ { 3 }$ 

7. $f ( x , y ) = \sqrt { x ^ { 2 } + y ^ { 2 } }$ 

22. $f ( x , y ) = \sum _ { n = 0 } ^ { \infty } ( x y ) ^ { n } \quad ( | x y | < 1 )$ 

8. $f ( x , y ) = ( x ^ { 3 } + ( y / 2 ) ) ^ { 2 / 3 }$ 

9. $f ( x , y ) = 1 / ( x + y )$ 

10. $f ( x , y ) = x / ( x ^ { 2 } + y ^ { 2 } )$ 

In Exercises 23–34, find $f _ { x } , f _ { y } ,$ ,  and $f _ { z } .$ 

11. $f ( x , y ) = ( x + y ) / ( x y - 1 )$ 12. $f ( x , y ) = \tan ^ { - 1 } ( y / x )$ 

23. f ( ) x y z xy z , , 1 2 = + −2 2 24. f ( ) x y z xy yz xz , , = + + 

13. $f ( x , y ) = e ^ { ( x + y + 1 ) }$ 

14. $f ( x , y ) = e ^ { - x } \sin ( x + y )$ 

25. $f ( x , y , z ) = x - \sqrt { y ^ { 2 } + z ^ { 2 } }$ 

26. $f ( x , y , z ) = ( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } ) ^ { - 1 / 2 }$ 

27. $f ( x , y , z ) = \arcsin ( x y z )$ 

28. $f ( x , y , z ) = \operatorname { a r c s e c } ( x + y z )$ 

29. $f \left( x , y , z \right) = \ln ( x + 2 y + 3 z )$ 

30. $f ( x , y , z ) = y z \ln ( x y )$ 

31. $f ( x , y , z ) = e ^ { - \left( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \right) }$ 

32. $f ( x , y , z ) = e ^ { - x y z }$ 

33. $f \bigl ( x , y , z \bigr ) = \operatorname { t a n h } ( x + 2 y + 3 z )$ 

34. $f ( x , y , z ) = \sinh ( x y - z ^ { 2 } )$ 

In Exercises 35–40, find the partial derivative of the function with respect to each variable. 

35. $f \bigl ( t , \alpha \bigr ) = \cos ( 2 \pi t - \alpha )$ 

36. $g ( u , v ) = v ^ { 2 } e ^ { ( 2 u / v ) }$ 

37. $h ( \rho , \phi , \theta ) = \rho \sin { \phi } \cos { \theta }$ 

38. $g ( r , \theta , z ) = r ( 1 - \cos \theta ) - z$ 

39. Work done by the heart (Section 3.11, Exercise 59) 

$$
W (P, V, \delta , v, g) = P V + \frac {V \delta v ^ {2}}{2 g}
$$

40. Wilson lot size formula (Section 4.6, Exercise 61) 

$$
A (c, h, k, m, q) = \frac {k m}{q} + c m + \frac {h q}{2}
$$

## Calculating Second-Order Partial Derivatives

Find all the second-order partial derivatives of the functions in Exercises 41–54. 

41. $f ( x , y ) = x + y + x y \qquad 4 2 . ~ f ( x , y ) = \sin { x y }$ 

43. $g ( x , y ) = x ^ { 2 } y + \cos y + y \sin x$ 

44. $h ( x , y ) = x e ^ { y } + y + 1$ 45. $r ( x , y ) = \ln ( x + y )$ 

46. $s ( x , y ) = \arctan \left( y / x \right)$ 47. $w = x ^ { 2 } \tan \left( x y \right)$ 

48. $w = y e ^ { x ^ { 2 } - y }$ 

49. $w = x \sin { ( x ^ { 2 } y ) }$ 

50. $w = \frac { x - y } { x ^ { 2 } + y }$ 

51. $f ( x , y ) = x ^ { 2 } y ^ { 3 } - x ^ { 4 } + y ^ { 5 }$ 

52. $g ( x , y ) = \cos x ^ { 2 } - \sin 3 y$ 53. $z = x \sin ( 2 x - y ^ { 2 } )$ 

54. $z = x e ^ { x / y ^ { 2 } }$ 

## Mixed Partial Derivatives

In Exercises 55–60, verify that $w _ { x y } ~ = ~ w _ { y x }$ 

55. $w = \ln ( 2 x + 3 y )$ 56. $w = e ^ { x } + x \ln y + y$ x  ln 

57. $w = x y ^ { 2 } + x ^ { 2 } y ^ { 3 } + x ^ { 3 } y ^ { 4 }$ 

58. $w = x \sin y + y \sin x + x y$ 

59. $w = { \frac { x ^ { 2 } } { y ^ { 3 } } }$ 60. $w = { \frac { 3 x - y } { x + y } }$ 

61. Which order of differentiation enables one to calculate $f _ { x y }$ faster: x first or y first? Try to answer without writing anything down. 

a. $ f ( x , y ) = x \sin y + e ^ { y }$ 

b. $f ( x , y ) = 1 / x$ 

c. $f ( x , y ) = y + ( x / y )$ 

$$
f (x, y) = y + x ^ {2} y + 4 y ^ {3} - \ln (y ^ {2} + 1)
$$

e. $f ( x , y ) = x ^ { 2 } + 5 x y + \sin x + 7 e ^ { x }$ 

f. $f ( x , y ) = x \ln x y$ 

62. The fifth-order partial derivative $\partial ^ { 5 } f / \partial x ^ { 2 } \partial y ^ { 3 }$ is zero for each of the following functions. To show this as quickly as possible, which variable would you differentiate with respect to first: x or y? Try to answer without writing anything down. 

a. $f ( x , y ) = y ^ { 2 } x ^ { 4 } e ^ { x } + 2$ 

b. $f ( x , y ) = y ^ { 2 } + y ( \sin x - x ^ { 4 } ) $ 

c. $f ( x , y ) = x ^ { 2 } + 5 x y + \sin x + 7 e ^ { x }$ 

d. $f ( x , y ) = x e ^ { y ^ { 2 } / 2 }$ 

## Using the Partial Derivative Definition

In Exercises 63–66, use the limit definition of partial derivative to compute the partial derivatives of the functions at the specified points. 

$$
f (x, y) = 1 - x + y - 3 x ^ {2} y, \frac {\partial f}{\partial x} \text {   and   } \frac {\partial f}{\partial y} \text {   at   } (1, 2)
$$

64. f x y x y xy , 4 2 3 ,2 ( ) = + − − f∂ and f∂ at 2, 1  ( ) − x∂ y∂ 

65. $f ( x , y ) = \sqrt { 2 x + 3 y - 1 } , ~ \frac { \partial f } { \partial x }$ and f∂ ( )  at 2, 3 − y∂ 

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {\sin (x ^ {3} + y ^ {4})}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0), \end{array} \right.
$$

∂f and <sup>∂f</sup> at (0, 0) ∂x ∂y 

67. Three variables Let $w = f ( x , y , z )$ be a function of three independent variables and write the formal definition of the partial derivative $\partial f / \partial z \ \mathrm { a t } \left( x _ { 0 } , y _ { 0 } , z _ { 0 } \right)$ . Use this definition to find $\partial f / \partial z \ \mathrm { a t } \left( 1 , 2 , 3 \right)$ for $f ( x , y , z ) = x ^ { 2 } y z ^ { 2 }$ 

68. Three variables Let $w = f ( x , y , z )$ be a function of three independent variables and write the formal definition of the partial derivative $\partial f / \partial y \mathrm { \ a t } \left( x _ { 0 } , y _ { 0 } , z _ { 0 } \right)$ . Use this definition to find $\partial f / \partial y \mathrm { a t } \left( - 1 , 0 , \dot { 3 } \right)$ for $f ( x , y , z ) = - 2 x y ^ { 2 } + y z ^ { 2 }$ 

## Differentiating Implicitly

69. Find the value of $\partial z / \partial x$ at the point (1, 1, 1 if the equation ) 

$$
x y + z ^ {3} x - 2 y z = 0
$$

defines z as a function of the two independent variables x and y and the partial derivative exists. 

70. Find the value of $\partial x / \partial z$ at the point $( 1 , - 1 , - 3 )$ if the equation 

$$
x z + y \ln x - x ^ {2} + 4 = 0
$$

defines x as a function of the two independent variables y and z and the partial derivative exists. 

Exercises 71 and 72 are about the triangle shown here. 

![[042766c0d93c4ac53cf848bff6e078125cf88a1ca4a9fac7c5fdaafb75751609.jpg|image]]


71. Express A implicitly as a function of $a , b ,$ and c and calculate ∂ ∂A a and $\partial A / \partial b$ 

72. Express a implicitly as a function of A, b, and B and calculate ∂ ∂ a A and ∂ ∂ a B. 

73. Two dependent variables Express $v _ { x }$ in terms of u and y if the equations $x \ = \ v$ ln andu $y = u$ ln define υ u and υ as functions of the independent variables x and y, and $\mathrm { i f } \ v _ { x }$ exists. (Hint: Differentiate both equations with respect to x and solve for $v _ { x }$ by eliminating $u _ { x } . )$ 

74. Two dependent variables Find $\partial x / \partial u$ and $\partial y / \partial u$ if the equations $u = x ^ { 2 } - y ^ { 2 }$ and $v = x ^ { 2 } - y$ define x and y as functions of the independent variables u and $v ,$ and the partial derivatives exist. (See the hint in Exercise 73.) Then let $s = x ^ { 2 } + y ^ { 2 }$ and find $\partial s / \partial u$ 

## Theory and Examples

75. Let $f ( x , y ) = 2 x + 3 y - 4$ . Find the slope of the line tangent to this surface at the point (2, 1 and lying in − ) a. the plane $x = 2$ b. the plane $y = - 1$ 

76. Let $f ( x , y ) = x ^ { 2 } + y ^ { 3 } .$ . Find the slope of the line tangent to this surface at the point (−1, 1 and lying in ) a. the plane $x = - 1$ b. the plane $y = 1 .$ 

In Exercises 77–80, find a function $z = f ( x , y )$ whose partial derivatives are as given, or explain why this is impossible. 

77. $\frac { \partial f } { \partial x } = 3 x ^ { 2 } y ^ { 2 } - 2 x , \frac { \partial f } { \partial y } = 2 x ^ { 3 } y + 6 y$ 

$$
\frac {\partial f}{\partial x} = 2 x e ^ {x y ^ {2}} + x ^ {2} y ^ {2} e ^ {x y ^ {2}} + 3, \quad \frac {\partial f}{\partial y} = 2 x ^ {3} y e ^ {x y ^ {2}} - e ^ {y}
$$

79. $\frac { \partial f } { \partial x } = \frac { 2 y } { \left( x + y \right) ^ { 2 } } , \frac { \partial f } { \partial y } = \frac { 2 x } { \left( x + y \right) ^ { 2 } }$ 

$$
\frac {\partial f}{\partial x} = x y \cos (x y) + \sin (x y), \quad \frac {\partial f}{\partial y} = x \cos (x y)
$$

81. $\operatorname { \mathrm { \normalsize ~ \operatorname { \cot } ~ } f } ( x , y ) = \left\{ \begin{array} { l l } { y ^ { 3 } , } & { y \geq 0 } \\ { - y ^ { 2 } , } & { y < 0 . } \end{array} \right.$ 

Find $f _ { x } , f _ { y } , f _ { x y } ,$ , and $f _ { y x }$ ,  and state the domain for each partial derivative. 

82. Let $f \bigl ( x , y \bigr ) = \left\{ \begin{array} { l l } { x y \displaystyle \frac { x ^ { 2 } - y ^ { 2 } } { x ^ { 2 } + y ^ { 2 } } , } & { \mathrm { i f ~ } ( x , y ) \ne 0 , } \\ { 0 , } & { \mathrm { i f ~ } ( x , y ) = 0 . } \end{array} \right.$ 

a. Show that ${ \frac { \partial f } { \partial y } } ( x , 0 ) = x$ for all x, and ${ \frac { \partial f } { \partial x } } ( 0 , y ) = - y$ for all y. 

b. Show that ${ \frac { \partial ^ { 2 } f } { \partial y \partial x } } ( 0 , 0 ) \neq { \frac { \partial ^ { 2 } f } { \partial x \partial y } } ( 0 , 0 ) .$ 

The three-dimensional Laplace equation 

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} + \frac {\partial^ {2} f}{\partial y ^ {2}} + \frac {\partial^ {2} f}{\partial z ^ {2}} = 0
$$

is satisfied by steady-state temperature distributions $T = f ( x , y , z )$ in space, by gravitational potentials, and by electrostatic potentials. The two-dimensional Laplace equation 

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} + \frac {\partial^ {2} f}{\partial y ^ {2}} = 0,
$$

obtained by dropping the $\partial ^ { 2 } f / \partial z ^ { 2 }$ term from the previous equation, describes potentials and steady-state temperature distributions in a plane. The plane may be treated as a thin slice of the solid perpendicular to the z-axis. 

Show that each function in Exercises 83–90 satisfies a Laplace equation. 

83. $f ( x , y , z ) = x ^ { 2 } + y ^ { 2 } - 2 z ^ { 2 }$ 

84. $f ( x , y , z ) = 2 z ^ { 3 } - 3 ( x ^ { 2 } + y ^ { 2 } ) z$ 

85. $f ( x , y ) = e ^ { - 2 y } \cos 2 x $ 

86. $f ( x , y ) = \ln { \sqrt { x ^ { 2 } + y ^ { 2 } } }$ 

87. $f ( x , y ) = 3 x + 2 y - 4$ 

88. $f ( x , y ) = \arctan { \frac { x } { y } }$ 

$$
f (x, y, z) = (x ^ {2} + y ^ {2} + z ^ {2}) ^ {- 1 / 2}
$$

$$
f (x, y, z) = e ^ {3 x + 4 y} \cos 5 z
$$

The wave equation If we stand on an ocean shore and take a snapshot of the waves, the picture shows a regular pattern of peaks and valleys in an instant of time. We see periodic vertical motion in space, with respect to distance. If we stand in the water, we can feel the rise and fall of the water as the waves go by. We see periodic vertical motion in time. In physics, this beautiful symmetry is expressed by the one-dimensional wave equation 

$$
\frac {\partial^ {2} w}{\partial t ^ {2}} = c ^ {2} \frac {\partial^ {2} w}{\partial x ^ {2}},
$$

where w is the wave height, x is the distance variable, t is the time variable, and c is the velocity with which the waves are propagated. 

![[50a65146c9416620068c211caa3f0bf2626bd1f0b7f6bfb31f90e2d63205e413.jpg|image]]


In our example, x is the distance across the ocean’s surface, but in other applications, x might be the distance along a vibrating string, distance through air (sound waves), or distance through space (light waves). The number c varies with the medium and type of wave. 

Show that the functions in Exercises 91–97 are all solutions of the wave equation. 

$$
\mathbf {9 1 .} w = \sin (x + c t) \quad \mathbf {9 2 .} w = \cos (2 x + 2 c t)
$$

93. $w = \sin ( x + c t ) + \cos ( 2 x + 2 c t )$ 

94. w x ct= +ln 2 2( ) 95. w x ct= −tan 2 2( ) 

96. $w = 5 \cos ( 3 x + 3 c t ) + e ^ { x + c t }$ 

97. $w = f ( u ) ,$ , where f is a differentiable function of u, and $\boldsymbol { u } = \boldsymbol { a } ( \boldsymbol { x } + \boldsymbol { c t } )$ , where a is a constant 

98. Does a function $f ( x , y )$ with continuous first partial derivatives throughout an open region R have to be continuous on R? Give reasons for your answer. 

99. If a function $f ( x , y )$ has continuous second partial derivatives throughout an open region R, must the first-order partial derivatives of f be continuous on R? Give reasons for your answer. 

100. The heat equation An important partial differential equation that describes the distribution of heat in a region at time t can be represented by the one-dimensional heat equation 

$$
\frac {\partial f}{\partial t} = \frac {\partial^ {2} f}{\partial x ^ {2}}.
$$

Show that $u ( x , t ) = \sin \left( \alpha x \right) \cdot e ^ { - \beta t }$ satisfies the heat equation for constants α and $\beta .$ What is the relationship between α and $\beta$ for this function to be a solution? 

101. Let $f ( x , y ) = { \left\{ \begin{array} { l l } { \displaystyle { \frac { x y ^ { 2 } } { x ^ { 2 } + y ^ { 4 } } } , } & { ( x , y ) \neq ( 0 , 0 ) } \\ { 0 , } & { ( x , y ) = ( 0 , 0 ) . } \end{array} \right. }$ 

Show that $f _ { x } \left( 0 , 0 \right)$ and $f _ { y } \left( 0 , 0 \right)$ exist, but $f$ is not differentiable at $( 0 , 0 )$ . (Hint: Use Theorem 4 and show that $f$ is not continuous at ( 0, 0 .) ) 

102. Let $f ( x , y ) = { \left\{ \begin{array} { l l } { 0 , } & { x ^ { 2 } < y < 2 x ^ { 2 } } \\ { 1 , } & { { \mathrm { o t h e r w i s e } } . } \end{array} \right. }$ 

Show that $f _ { x } \left( 0 , 0 \right)$ and $f _ { y } ( 0 , 0 )$ exist, but $f$ is not differentiable at $( 0 , 0 )$ 

## 103. The Korteweg–de Vries equation

This nonlinear differential equation, which describes wave motion on shallow water surfaces, is given by 

$$
u _ {t} + u _ {x x x} + 1 2 u u _ {x} = 0.
$$

Show that $u \big ( x , t \big ) = \mathrm { s e c h } ^ { 2 } ( x - t )$ satisfies the Korteweg–de Vries equation. 

104. Show that $T = { \frac { 1 } { \sqrt { x ^ { 2 } + y ^ { 2 } } } }$ satisfies the equation $T _ { x x } + T _ { y y } = T ^ { 3 } .$ 

## 13.4 The Chain Rule

To find $d w / d t ,$ we read down the route from w to t, multiplying derivatives along the way. 

The Chain Rule for functions of a single variable studied in Section 3.6 says that if $w = f ( x )$ is a differentiable function of $x ,$ and $x = g ( t )$ is a differentiable function of $t ,$ then w is a differentiable function of $t ,$ and $d w / d t$ can be calculated by the formula 

![[f7921f7f8162c67baeac238d0f796f9a65e5b5ef657a89a61a7a17e481af86a1.jpg|image]]


$$
{\frac {d w}{d t}} = {\frac {d w}{d x}} {\frac {d x}{d t}}.
$$

For this composite function $w ( t ) = f ( g ( t ) )$ , we can think of t as the independent variable and $x = g ( t )$ as the “intermediate variable” because t determines the value of x that in turn gives the value of w from the function $f .$ . We display the Chain Rule in a “dependency diagram” in the margin. Such diagrams capture which variables depend on which. 

For functions of several variables the Chain Rule has more than one form, which depends on how many independent and intermediate variables are involved. However, once the variables are taken into account, the Chain Rule works in the same way we just discussed. 

## Functions of Two Variables

The Chain Rule formula for a differentiable function $w = f ( x , y )$ when $x = x ( t )$ and $y = y ( t )$ are both differentiable functions of t is given in the following theorem. 

## THEOREM 5—Chain Rule for Functions of One Independent Variable and Two Intermediate Variables

If $w = f ( x , y )$ is differentiable and if $x = x ( t ) , y = y ( t )$ are differentiable functions of $^ { \dag , } t ,$ then the composition $w = f ( x ( t ) , y ( t ) )$ is a differentiable function of t and 

$$
\frac {d w}{d t} = f _ {x} (x (t), y (t)) x ^ {\prime} (t) + f _ {y} (x (t), y (t)) y ^ {\prime} (t),
$$

or 

$$
\frac {d w}{d t} = \frac {\partial f}{\partial x} \frac {d x}{d t} + \frac {\partial f}{\partial y} \frac {d y}{d t}.
$$

Each of $\frac { \partial f } { \partial x } , \frac { \partial w } { \partial x } , f _ { x }$ indicates the partial derivative of $f$ with respect to x. 

To remember the Chain Rule, picture the diagram below. To find $d w / d t$ , start at w and read down each route to t, multiplying derivatives along the way. Then add the products. 

![[cf964164ebc37e567cb693ec29da380f7964628d6737a9090db2461f5c77c1d9.jpg|image]]


Proof The proof consists of showing that if x and y are differentiable at $t ~ = ~ t _ { 0 }$ ,  then w is differentiable at $t _ { 0 }$ and 

$$
\frac {d w}{d t} \left(t _ {0}\right) = \frac {\partial w}{\partial x} \left(P _ {0}\right) \frac {d x}{d t} \left(t _ {0}\right) + \frac {\partial w}{\partial y} \left(P _ {0}\right) \frac {d y}{d t} \left(t _ {0}\right),
$$

where $P _ { 0 } = ( x ( t _ { 0 } ) , y ( t _ { 0 } ) )$ 

Let $\Delta x , \Delta y$ , and $\Delta w$ be the increments that result from changing t from $t _ { 0 } \tan t _ { 0 } + \Delta t$ Since $f$ is differentiable (see the definition in Section 13.3), 

$$
\Delta w = \frac {\partial w}{\partial x} (P _ {0}) \Delta x + \frac {\partial w}{\partial y} (P _ {0}) \Delta y + \varepsilon_ {1} \Delta x + \varepsilon_ {2} \Delta y,
$$

where $\varepsilon _ { 1 } , \varepsilon _ { 2 } \ \to \ 0$ as $\Delta x , \Delta y  0$ . To find $d w / d t$ , we divide this equation through by $\Delta t$ and let $\Delta t$ approach zero (therefore, $\Delta x$ and $\Delta y$ approach zero as well since the fact that $x ( t )$ and $y ( t )$ are differentiable implies that they are continuous). The division gives 

$$
\frac {\Delta w}{\Delta t} = \frac {\partial w}{\partial x} (P _ {0}) \frac {\Delta x}{\Delta t} + \frac {\partial w}{\partial y} (P _ {0}) \frac {\Delta y}{\Delta t} + \varepsilon_ {1} \frac {\Delta x}{\Delta t} + \varepsilon_ {2} \frac {\Delta y}{\Delta t}.
$$

Letting $\Delta t$ approach zero gives 

$$
\begin{array}{l} \frac {d w}{d t} (t _ {0}) = \lim _ {\Delta t \to 0} \frac {\Delta w}{\Delta t} \\ \qquad = \frac {\partial w}{\partial x} (P _ {0}) \frac {d x}{d t} (t _ {0}) + \frac {\partial w}{\partial y} (P _ {0}) \frac {d y}{d t} (t _ {0}) + 0 \cdot \frac {d x}{d t} (t _ {0}) + 0 \cdot \frac {d y}{d t} (t _ {0}). \end{array}
$$

Often we write $\partial w / \partial x$ for the partial derivative $\partial f / \partial x$ , so we can rewrite the Chain Rule in Theorem 5 in the form 

$$
\frac {d w}{d t} = \frac {\partial w}{\partial x} \frac {d x}{d t} + \frac {\partial w}{\partial y} \frac {d y}{d t}.
$$

However, the meaning of the dependent variable w is different on each side of the preceding equation. On the left-hand side, it refers to the composite function $w = f \bigl ( x ( t ) , y ( t ) \bigr )$ as a function of the single variable t. On the right-hand side, it refers to the function $w = f ( x , y )$ as a function of the two variables x and $y .$ . Moreover, the single derivatives $d w / d t , d x / d t$ , and $d y / d t$ are being evaluated at a point $t _ { 0 } { \mathrm { : } }$ , whereas the partial derivatives $\partial w / \partial x$ and $\partial w / \partial y$ are being evaluated at the point $\left( x _ { 0 } , y _ { 0 } \right)$ , with $x _ { 0 } = x ( t _ { 0 } )$ and $y _ { 0 } ~ = ~ y ( t _ { 0 } )$ . With that understanding, we will use both of these forms interchangeably throughout the text whenever no confusion will arise. 

The dependency diagram on the preceding page provides a convenient way to remember the Chain Rule. The “true” independent variable in the composite function is t, whereas x and $y$ are intermediate variables (controlled by t) and w is the dependent variable. 

A more precise notation for the Chain Rule shows where the various derivatives in Theorem 5 are evaluated: 

$$
\frac {d w}{d t} \left(t _ {0}\right) = \frac {\partial f}{\partial x} \left(x _ {0}, y _ {0}\right) \frac {d x}{d t} \left(t _ {0}\right) + \frac {\partial f}{\partial y} \left(x _ {0}, y _ {0}\right) \frac {d y}{d t} \left(t _ {0}\right),
$$

or, using another notation, 

$$
\left. \frac {d w}{d t} \right| _ {t _ {0}} = \left. \frac {\partial f}{\partial x} \right| _ {(x _ {0}, y _ {0})} \left. \frac {d x}{d t} \right| _ {t _ {0}} + \left. \frac {\partial f}{\partial y} \right| _ {(x _ {0}, y _ {0})} \left. \frac {d y}{d t} \right| _ {t _ {0}}.
$$

## **EXAMPLE 1** Use the Chain Rule to find the derivative of

$$
w = x y
$$

with respect to t along the path $x = \cos t , y = \sin t .$ What is the derivative’s value at $t = \pi / 2 \ ?$ 

**Solution** We apply the Chain Rule to find dw dt as follows: 

$$
\begin{array}{l} \frac {d w}{d t} = \frac {\partial w}{\partial x} \frac {d x}{d t} + \frac {\partial w}{\partial y} \frac {d y}{d t} \\ \qquad = \frac {\partial (x y)}{\partial x} \frac {d}{d t} (\cos t) + \frac {\partial (x y)}{\partial y} \frac {d}{d t} (\sin t) \\ \qquad = (y) (- \sin t) + (x) (\cos t) \\ \qquad = (\sin t) (- \sin t) + (\cos t) (\cos t) \\ \qquad = - \sin^ {2} t + \cos^ {2} t \\ \qquad = \cos 2 t. \end{array}
$$

In this example, we can check the result with a more direct calculation. As a function of t, 

$$
w = x y = \cos t \sin t = \frac {1}{2} \sin 2 t,
$$

so 

$$
{\frac {d w}{d t}} = {\frac {d}{d t}} {\Bigl (} {\frac {1}{2}} \sin 2 t {\Bigr)} = {\frac {1}{2}} (2 \cos 2 t) = \cos 2 t.
$$

In either case, at the given value of t, 

$$
\left. \frac {d w}{d t} \right| _ {t = \pi / 2} = \cos \left(2 \frac {\pi}{2}\right) = \cos \pi = - 1.
$$

## Functions of Three Variables

You can probably predict the Chain Rule for functions of three intermediate variables, as it involves adding the expected third term to the two-variable formula. 

Here we have three routes from w to t instead of two, but finding dw dt is still the same. Read down each route, multiplying derivatives along the way; then add. 

Chain Rule 

THEOREM 6—Chain Rule for Functions of One Independent Variable and Three Intermediate Variables 

![[ae3fafbf906ed78aa1a8484dd1412a5c4fd43ff245759ae51752e07414b664a2.jpg|image]]


If $w = f ( x , y , z )$ is differentiable and x, y, and z are differentiable functions of $t ,$ then w is a differentiable function of t, and 

$$
{\frac {d w}{d t}} = {\frac {\partial w}{\partial x}} {\frac {d x}{d t}} + {\frac {\partial w}{\partial y}} {\frac {d y}{d t}} + {\frac {\partial w}{\partial z}} {\frac {d z}{d t}}.
$$

$$
{\frac {d w}{d t}} = {\frac {\partial w}{\partial x}} {\frac {d x}{d t}} + {\frac {\partial w}{\partial y}} {\frac {d y}{d t}} + {\frac {\partial w}{\partial z}} {\frac {d z}{d t}}
$$

The proof is identical to the proof of Theorem 5, except that there are now three intermediate variables instead of two. The dependency diagram we use for remembering the new equation is similar as well, with three routes from w to t. 

**EXAMPLE 2** Find dw dt if 

$$
w = x y + z, \quad x = \cos t, \quad y = \sin t, \quad z = t.
$$

In this example the values of $w(t)$ are changing along the path of a helix (Section 12.1) as $t$ changes. What is the derivative's value at $t = 0$ ? 

**Solution** Using the Chain Rule for three intermediate variables, we have 

$$
\begin{array}{l l} \frac {d w}{d t} = \frac {\partial w}{\partial x} \frac {d x}{d t} + \frac {\partial w}{\partial y} \frac {d y}{d t} + \frac {\partial w}{\partial z} \frac {d z}{d t} \\ = (y) (- \sin t) + (x) (\cos t) + (1) (1) \\ = (\sin t) (- \sin t) + (\cos t) (\cos t) + 1 & \text {   Substitute   for   intermediate   } \\ = - \sin^ {2} t + \cos^ {2} t + 1 = 1 + \cos 2 t, \end{array}
$$

SO 

$$
\left. \frac {d w}{d t} \right| _ {t = 0} = 1 + \cos (0) = 2.
$$

For a physical interpretation of change along a curve, think of an object whose position is changing with time t. If $w = T(x, y, z)$ is the temperature at each point $(x, y, z)$ along a curve C with parametric equations $x = x(t)$ , $y = y(t)$ , and $z = z(t)$ , then the composite function $w = T(x(t), y(t), z(t))$ represents the temperature relative to t along the curve. The derivative dw/dt is then the instantaneous rate of change of temperature due to the motion along the curve, as calculated in Theorem 6. 

## Functions Defined on Surfaces

If we are interested in the temperature $w = f(x, y, z)$ at points $(x, y, z)$ on Earth's surface, we might prefer to think of $x, y$ , and $z$ as functions of the variables $r$ and $s$ that give the points' longitudes and latitudes. If $x = g(r, s), y = h(r, s)$ , and $z = k(r, s)$ , we could then express the temperature as a function of $r$ and $s$ with the composite function 

$$
w = f (g (r, s), h (r, s), k (r, s)).
$$

Under the conditions stated below, w has partial derivatives with respect to both r and s that can be calculated in the following way. 

## THEOREM 7—Chain Rule for Two Independent Variables and Three Intermediate Variables

Suppose that $w = f(x, y, z)$ , $x = g(r, s)$ , $y = h(r, s)$ , and $z = k(r, s)$ . If all four functions are differentiable, then w has partial derivatives with respect to r and s, given by the formulas 

$$
\frac {\partial w}{\partial r} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial r} + \frac {\partial w}{\partial z} \frac {\partial z}{\partial r}
$$

$$
\frac {\partial w}{\partial s} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial s} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial s} + \frac {\partial w}{\partial z} \frac {\partial z}{\partial s}.
$$

The first of these equations can be derived from the Chain Rule in Theorem 6 by holding s fixed and treating r as t. The second can be derived in the same way, holding r fixed and treating s as t. The dependency diagrams for both equations are shown in Figure 13.22. 

![[60c7daad98e5847ee2bad97cc206b05146b1772e0e3487c8f21a31d9143ae2d5.jpg|image]]



FIGURE 13.22 Composite function and dependency diagrams for Theorem 7.


**EXAMPLE 3** Express $\partial w / \partial r$ and $\partial w / \partial s$ in terms of $r$ and $s$ if 

$$
w = x + 2 y + z ^ {2}, \quad x = \frac {r}{s}, \quad y = r ^ {2} + \ln s, \quad z = 2 r.
$$

**Solution** Using the formulas in Theorem 7, we find 

$$
\begin{array}{l} \frac {\partial w}{\partial r} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial r} + \frac {\partial w}{\partial z} \frac {\partial z}{\partial r} \\ \qquad = (1) \left(\frac {1}{s}\right) + (2) (2 r) + (2 z) (2) \\ \qquad = \frac {1}{s} + 4 r + (4 r) (2) = \frac {1}{s} + 1 2 r \qquad \text {Substitute for intermediate variable } z. \end{array}
$$

$$
\begin{array}{l} \frac {\partial w}{\partial s} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial s} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial s} + \frac {\partial w}{\partial z} \frac {\partial z}{\partial s} \\ = (1) \left(- \frac {r}{s ^ {2}}\right) + (2) \left(\frac {1}{s}\right) + (2 z) (0) = \frac {2}{s} - \frac {r}{s ^ {2}}. \end{array}
$$

Chain Rule 

![[67510c145ca290622d9c22a07f2c5b66806756e93edb290846e01841a12a28b9.jpg|image]]


If $f$ is a function of two intermediate variables instead of three, each equation in Theorem 7 becomes correspondingly one term shorter. 

FIGURE 13.23 Dependency diagram for the equation 

Figure 13.23 shows the dependency diagram for the first of these equations. The diagram for the second equation is similar; just replace r with s. 

$$
\frac {\partial w}{\partial r} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial r}.
$$

$$
\begin{array}{l} \text {   If   } w = f (x, y), x = g (r, s), \text {   and   } y = h (r, s), \text {   then   } \\ \frac {\partial w}{\partial r} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial r} \quad \text {   and   } \quad \frac {\partial w}{\partial s} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial s} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial s}. \end{array}
$$

**EXAMPLE 4** Express $\partial w / \partial r$ and $\partial w / \partial s$ in terms of $r$ and $s$ if 

$$
w = x ^ {2} + y ^ {2}, \quad x = r - s, \quad y = r + s.
$$

![[2327dc311ce7d6e7decb7680ddb0f2c2964c6cf90045aa8a98d8c00ff9834468.jpg|image]]


FIGURE 13.24 Dependency diagram for differentiating f as a composite function of r and s with one intermediate variable. 

![[561167c81dd3e7005a318178c47a6de644f8edb28dc8ccea3982a069197ed9d3.jpg|image]]


FIGURE 13.25 Dependency diagram for differentiating $w = F(x, y)$ with respect to x. Setting dw/dx = 0 leads to a simple computational formula for implicit differentiation (Theorem 8). 

**Solution** The preceding discussion gives the following. 

$$
\begin{array}{l l} \frac {\partial w}{\partial r} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial r} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial r} & \frac {\partial w}{\partial s} = \frac {\partial w}{\partial x} \frac {\partial x}{\partial s} + \frac {\partial w}{\partial y} \frac {\partial y}{\partial s} \\ = (2 x) (1) + (2 y) (1) & = (2 x) (- 1) + (2 y) (1) \\ = 2 (r - s) + 2 (r + s) & = - 2 (r - s) + 2 (r + s) \\ = 4 r & = 4 s \end{array} \qquad \text {Substitute for the intermediate variables.}
$$

If $f$ is a function of a single intermediate variable $x$ , our equations are even simpler. 

$$
\begin{array}{l} \text {   If   } w = f (x) \text {   and   } x = g (r, s), \text {   then   } \\ \frac {\partial w}{\partial r} = \frac {d w}{d x} \frac {\partial x}{\partial r} \quad \text {   and   } \quad \frac {\partial w}{\partial s} = \frac {d w}{d x} \frac {\partial x}{\partial s}. \end{array}
$$

In this case, we use the ordinary (single-variable) derivative, dw/dx. The dependency diagram is shown in Figure 13.24. 

## Implicit Differentiation Revisited

The two-variable Chain Rule in Theorem 5 leads to a formula that takes some of the algebra out of implicit differentiation. Suppose that 

1. The function $F(x, y)$ is differentiable and 

2. The equation $F(x, h(x)) = 0$ defines y implicitly as a differentiable function of x, say $y = h(x)$ . 

Since $w = F(x, h(x)) = 0$ , the derivative dw/dx must be zero. Computing the derivative from the Chain Rule (dependency diagram in Figure 13.25), we find 

$$
\begin{array}{l l} 0 = \frac {d w}{d x} = F _ {x} \frac {d x}{d x} + F _ {y} \frac {d y}{d x} & \text { Theorem   5   with } \\ & t = x \text { and } f = F \\ = F _ {x} \cdot 1 + F _ {y} \cdot \frac {d y}{d x}. \end{array}
$$

If $F_{y} = \partial w / \partial y \neq 0$ , we can solve this equation for $dy / dx$ to get 

$$
\frac {d y}{d x} = - \frac {F _ {x}}{F _ {y}}.
$$

We state this result formally. 

## THEOREM 8—A Formula for Implicit Differentiation

Suppose that $F(x, y)$ is differentiable and that the equation $F(x, y) = 0$ defines $y$ as a differentiable function of $x$ . Then, at any point where $F_y \neq 0$ , 

$$
\frac {d y}{d x} = - \frac {F _ {x}}{F _ {y}}.\tag{1}
$$

## **EXAMPLE 5** Use Theorem 8 to find dy/dx if $y^{2} - x^{2} - \sin xy = 0$ .

**Solution** Take $F(x, y) = y^{2} - x^{2} - \sin xy$ . Then 

$$
\frac {d y}{d x} = - \frac {F _ {x}}{F _ {y}} = - \frac {- 2 x - y \cos x y}{2 y - x \cos x y} = \frac {2 x + y \cos x y}{2 y - x \cos x y}.
$$

This calculation is significantly shorter than a single-variable calculation using implicit differentiation. 

The result in Theorem 8 is easily extended to three variables. Suppose that the equation $F(x, y, z) = 0$ defines the variable z implicitly as a function $z = f(x, y)$ . Then, for all $(x, y)$ in the domain of f, we have $F(x, y, f(x, y)) = 0$ . Assuming that F and f are differentiable functions, we can use the Chain Rule to differentiate the equation $F(x, y, z) = 0$ with respect to the independent variable x: 

$$
\begin{array}{l l} 0 = \frac {\partial F}{\partial x} \frac {\partial x}{\partial x} + \frac {\partial F}{\partial y} \frac {\partial y}{\partial x} + \frac {\partial F}{\partial z} \frac {\partial z}{\partial x} \\ = F _ {x} \cdot 1 + F _ {y} \cdot 0 + F _ {z} \cdot \frac {\partial z}{\partial x}, & \text {   y   is   constant   when   } \\ & \text {   we   differentiate   } \\ & \text {   with   respect   to   } x. \end{array}
$$

SO 

$$
F _ {x} + F _ {z} \frac {\partial z}{\partial x} = 0.
$$

A similar calculation for differentiating with respect to the independent variable y gives 

$$
F _ {y} + F _ {z} \frac {\partial z}{\partial y} = 0.
$$

Whenever $F_{z} \neq 0$ , we can solve these last two equations for the partial derivatives of $z = f(x, y)$ to obtain 

$$
\frac {\partial z}{\partial x} = - \frac {F _ {x}}{F _ {z}} \text { and } \frac {\partial z}{\partial y} = - \frac {F _ {y}}{F _ {z}}.\tag{2}
$$

An important result from advanced calculus, called the Implicit Function Theorem, states the conditions for which our results in Equations (2) are valid. If the partial derivatives $F_{x}, F_{y}$ , and $F_{z}$ are continuous throughout an open region R in space containing the point $(x_{0}, y_{0}, z_{0})$ , and if for some constant c, $F(x_{0}, y_{0}, z_{0}) = c$ and $F_{z}(x_{0}, y_{0}, z_{0}) \neq 0$ , then the equation $F(x, y, z) = c$ defines z implicitly as a differentiable function of x and y near $(x_{0}, y_{0}, z_{0})$ , and the partial derivatives of z are given by Equations (2). 

**Solution** Let $F(x, y, z) = x^{3} + z^{2} + ye^{xz} + z \cos y$ . Then 

$$
F _ {x} = 3 x ^ {2} + z y e ^ {x z}, \quad F _ {y} = e ^ {x z} - z \sin y, \quad \text { and } \quad F _ {z} = 2 z + x y e ^ {x z} + \cos y.
$$

Since $F(0,0,0)=0$ , $F_{z}(0,0,0)=1\neq0$ , and all first partial derivatives are continuous, the Implicit Function Theorem says that $F(x,y,z)=0$ defines z as a differentiable function of x and y near the point $(0,0,0)$ . From Equations (2), 

$$
\frac {\partial z}{\partial x} = - \frac {F _ {x}}{F _ {z}} = - \frac {3 x ^ {2} + z y e ^ {x z}}{2 z + x y e ^ {x z} + \cos y} \quad \text { and } \quad \frac {\partial z}{\partial y} = - \frac {F _ {y}}{F _ {z}} = - \frac {e ^ {x z} - z \sin y}{2 z + x y e ^ {x z} + \cos y}.
$$

At $(0,0,0)$ we find 

$$
\frac {\partial z}{\partial x} = - \frac {0}{1} = 0 \quad \text { and } \quad \frac {\partial z}{\partial y} = - \frac {1}{1} = - 1.
$$

## Functions of Many Variables

We have seen several different forms of the Chain Rule in this section, but each one is just a special case of one general formula. When solving particular problems, it may help to draw the appropriate dependency diagram by placing the dependent variable on top, the intermediate variables in the middle, and the selected independent variable at the bottom. To find the derivative of the dependent variable with respect to the selected independent variable, start at the dependent variable and read down each route of the dependency diagram to the independent variable, calculating and multiplying the derivatives along each route. Then add the products found for the different routes. 

In general, suppose that $w = f(x_{1}, x_{2}, \ldots, x_{n})$ is a differentiable function of the intermediate variables $x_{1}, x_{2}, \ldots, x_{n}$ (a finite set) and that $x_{1}, x_{2}, \ldots, x_{n}$ are differentiable functions of the independent variables $t_{1}, t_{2}, \ldots, t_{m}$ (another finite set). Then w is a differentiable function of the variables $t_{1}, t_{2}, \ldots, t_{m}$ , and the partial derivatives of w with respect to these variables are given by equations of the form 

$$
\frac {\partial w}{\partial t _ {i}} = \frac {\partial w}{\partial x _ {1}} \frac {\partial x _ {1}}{\partial t _ {i}} + \frac {\partial w}{\partial x _ {2}} \frac {\partial x _ {2}}{\partial t _ {i}} + \dots + \frac {\partial w}{\partial x _ {n}} \frac {\partial x _ {n}}{\partial t _ {i}} \quad \text { for } i = 1, 2, \dots , m.
$$

One way to remember this equation is to think of the right-hand side as the dot product of two n-dimensional vectors: 

$$
\frac {\partial w}{\partial t _ {i}} = \underbrace {\left\langle \frac {\partial w}{\partial x _ {1}} , \frac {\partial w}{\partial x _ {2}} , \ldots , \frac {\partial w}{\partial x _ {n}} \right\rangle} _ {\text { Derivatives   of   } w \text {   with   respect   to   the   intermediate   variables }} \cdot \underbrace {\left\langle \frac {\partial x _ {1}}{\partial t _ {i}} , \frac {\partial x _ {2}}{\partial t _ {i}} , \ldots , \frac {\partial x _ {n}}{\partial t _ {i}} \right\rangle} _ {\text { Derivatives   of   the   intermediate   variables   with   respect   to   the   selected   independent   variable }}.
$$

The first vector describes how w changes in various directions, while the second vector indicates the velocity vector of $\mathbf{x}(t_{i}) = \langle x_{1}(t_{i}), x_{2}(t_{i}), \ldots, x_{n}(t_{i}) \rangle$ . These concepts will be studied further in the next section. 

## EXERCISES 13.4

## Chain Rule: One Independent Variable

In Exercises 1–6, (a) express dw/dt as a function of t, both by using the Chain Rule and by expressing w in terms of t and differentiating directly with respect to t. Then (b) evaluate dw/dt at the given value of t. 

$$
\mathbf {1}. w = x ^ {2} + y ^ {2}, \quad x = \cos t, \quad y = \sin t; \quad t = \pi
$$

$$
w = x ^ {2} + y ^ {2}, x = \cos t + \sin t, y = \cos t - \sin t; t = 0
$$

$$
w = \frac {x}{z} + \frac {y}{z}, x = \cos^ {2} t, y = \sin^ {2} t, z = 1 / t; t = 3
$$

$$
\begin{array}{l} \text { 4   . } w = \ln (x ^ {2} + y ^ {2} + z ^ {2}), x = \cos t, y = \sin t, z = 4 \sqrt {t}; \\ t = 3 \end{array}
$$

$$
\begin{array}{l} \text {5.} w = 2 y e ^ {x} - \ln z, x = \ln (t ^ {2} + 1), y = \tan^ {- 1} t, z = e ^ {t}; \\ t = 1 \end{array}
$$

$$
6. w = z - \sin x y, \quad x = t, \quad y = \ln t, \quad z = e ^ {t - 1}; \quad t = 1
$$

## Chain Rule: Two and Three Independent Variables

In Exercises 7 and 8, (a) express $\partial z/\partial u$ and $\partial z/\partial v$ as functions of u and v both by using the Chain Rule and by expressing z directly in terms of u and v before differentiating. Then (b) evaluate $\partial z/\partial u$ and $\partial z/\partial v$ at the given point $(u,v)$ . 

$$
\begin{array}{l} 7. z = 4 e ^ {x} \ln y, x = \ln (u \cos v), y = u \sin v; \\ (u, v) = (2, \pi / 4) \end{array}
$$

$$
\begin{array}{l} \text { 8   . } z = \tan^ {- 1} (x / y), \quad x = u \cos v, \quad y = u \sin v; \\ (u, v) = (1. 3, \pi / 6) \end{array}
$$

In Exercises 9 and 10, (a) express $\partial w / \partial u$ and $\partial w / \partial v$ as functions of $u$ and $v$ both by using the Chain Rule and by expressing $w$ directly in terms of $u$ and $v$ before differentiating. Then (b) evaluate $\partial w / \partial u$ and $\partial w / \partial v$ at the given point $(u, v)$ . 

10. $w = \ln(x^{2} + y^{2} + z^{2}), \quad x = ue^{v} \sin u, \quad y = ue^{v} \cos u,$ $z = ue^{v}; (u, v) = (-2, 0)$ 

In Exercises 11 and 12, (a) express $\partial u / \partial x$ , $\partial u / \partial y$ , and $\partial u / \partial z$ as functions of $x$ , $y$ , and $z$ both by using the Chain Rule and by expressing $u$ directly in terms of $x$ , $y$ , and $z$ before differentiating. Then (b) evaluate $\partial u / \partial x$ , $\partial u / \partial y$ , and $\partial u / \partial z$ at the given point $(x, y, z)$ . 

11. $u = \frac{p - q}{q - r}, p = x + y + z, q = x - y + z,$ 

$$
r = x + y - z; (x, y, z) = (\sqrt {3}, 2, 1)
$$

12. $u = e^{qr}\sin^{-1}p, p = \sin x, q = z^2\ln y, r = 1 / z;$ $(x,y,z) = (\pi /4,1 / 2, - 1 / 2)$ 

## Using a Dependency Diagram

In Exercises 13–24, draw a dependency diagram and write a Chain Rule formula for each derivative. 

13. $\frac{dz}{dt}$ for $z = f(x, y)$ , $x = g(t)$ , $y = h(t)$ 

$$
\frac {d z}{d t} \text {   for   } z = f (u, v, w), u = g (t), v = h (t), w = k (t)
$$

15. $\frac{\partial w}{\partial u}$ and $\frac{\partial w}{\partial v}$ for $w = h(x,y,z)$ , $x = f(u,v)$ , $y = g(u,v)$ , $z = k(u,v)$ 

$$
\begin{array}{l} \frac {\partial w}{\partial x} \text {   and   } \frac {\partial w}{\partial y} \text {   for   } w = f (r, s, t), r = g (x, y), s = h (x, y), \\ t = k (x, y) \end{array}
$$

17. $\frac{\partial w}{\partial u}$ and $\frac{\partial w}{\partial v}$ for $w = g(x,y)$ , $x = h(u,v)$ , $y = k(u,v)$ 

18. $\frac{\partial w}{\partial x}$ and $\frac{\partial w}{\partial y}$ for $w = g(u,v)$ , $u = h(x,y)$ , $v = k(x,y)$ 

$$
\mathbf {1 9 .} \frac {\partial z}{\partial t} \text {   and   } \frac {\partial z}{\partial s} \text {   for   } z = f (x, y), x = g (t, s), y = h (t, s)
$$

20. $\frac{\partial y}{\partial r}$ for $y = f(u), u = g(r,s)$ 

21. $\frac{\partial w}{\partial s}$ and $\frac{\partial w}{\partial t}$ for $w = g(u)$ , $u = h(s, t)$ 

22. $\frac{\partial w}{\partial p}$ for $w = f(x,y,z,v)$ , $x = g(p,q)$ , $y = h(p,q)$ , $z = j(p,q)$ , $v = k(p,q)$ 

23. $\frac{\partial w}{\partial r}$ and $\frac{\partial w}{\partial s}$ for $w = f(x, y)$ , $x = g(r)$ , $y = h(s)$ 

24. $\frac{\partial w}{\partial s}$ for $w = g(x,y)$ , $x = h(r,s,t)$ , $y = k(r,s,t)$ 

## Implicit Differentiation

Assuming that the equations in Exercises 25–30 define y as a differentiable function of x, use Theorem 8 to find the value of dy/dx at the given point. 

25. $x^{3}-2y^{2}+xy=0,\quad(1,1)$ 

26. $xy + y^{2} - 3x - 3 = 0,\quad (-1,1)$ 

27. $x^{2} + xy + y^{2} - 7 = 0$ (1,2) 

28. $xe^{y} + \sin xy + y - \ln 2 = 0, (0, \ln 2)$ 

29. $(x^{3} - y^{4})^{6} + \ln (x^{2} + y) = 1, (-1,0)$ 

30. $xe^{x^2 y} - ye^x = x + y - 2,$ (1,1) 

Find the values of $\partial z / \partial x$ and $\partial z / \partial y$ at the points in Exercises 31-34. 

31. $z^{3} - xy + yz + y^{3} - 2 = 0,\quad(1,1,1)$ 

32. $\frac{1}{x} +\frac{1}{y} +\frac{1}{z} -1 = 0,$ (2,3,6) 

33. $\sin(x + y) + \sin(y + z) + \sin(x + z) = 0, (\pi, \pi, \pi)$ 

34. $xe^{y} + ye^{z} + 2\ln x - 2 - 3\ln 2 = 0,\quad(1,\ln 2,\ln 3)$ 

## Finding Partial Derivatives at Specified Points

35. Find $\partial w / \partial r$ when $r = 1, s = -1$ if $w = (x + y + z)^2$ , $x = r - s, y = \cos(r + s), z = \sin(r + s)$ . 

36. Find $\partial w / \partial v$ when $u = -1, v = 2$ if $w = xy + \ln z$ , $x = v^2 / u, y = u + v, z = \cos u$ . 

37. Find $\partial w / \partial v$ when $u = 0, v = 0$ if $w = x^2 + (y / x)$ , $x = u - 2v + 1$ , $y = 2u + v - 2$ . 

38. Find $\partial z / \partial u$ when $u = 0, v = 1$ if $z = \sin xy + x \sin y$ , $x = u^2 + v^2$ , $y = uv$ . 

39. Find $\partial z / \partial u$ and $\partial z / \partial v$ when $u = \ln 2, v = 1$ if $z = 5\tan^{-1}x$ and $x = e^{u} + \ln v$ . 

40. Find $\partial z/\partial u$ and $\partial z/\partial v$ when u = 1, v = -2 if $z = \ln q$ and $q = \sqrt{v + 3} \tan^{-1} u$ . 

## Theory and Examples

41. Assume that $w = f(s^{3} + t^{2})$ and $f'(x) = e^{x}$ . Find $\frac{\partial w}{\partial t}$ and $\frac{\partial w}{\partial s}$ . 

42. Assume that $w = f\left(ts^2, \frac{s}{t}\right)$ , $\frac{\partial f}{\partial x}(x, y) = xy$ , and $\frac{\partial f}{\partial y}(x, y) = \frac{x^2}{2}$ . Find $\frac{\partial w}{\partial t}$ and $\frac{\partial w}{\partial s}$ . 

43. Assume that $z = f(x, y)$ , $x = g(t)$ , $y = h(t)$ , $f_x(2, -1) = 3$ , and $f_y(2, -1) = -2$ . If $g(0) = 2$ , $h(0) = -1$ , $g'(0) = 5$ , and $h'(0) = -4$ , find $\left.\frac{dz}{dt}\right|_{t=0}$ . 

44. Assume that $z = f(x, y)^2$ , $x = g(t)$ , $y = h(t)$ , $f_x(1, 0) = -1$ , $f_y(1, 0) = 1$ , and $f(1, 0) = 2$ . If $g(3) = 1$ , $h(3) = 0$ , $g'(3) = -3$ , and $h'(3) = 4$ , find $\left.\frac{dz}{dt}\right|_{t=3}$ . 

45. Assume that $z = f(w), w = g(x, y), x = 2r^3 - s^2$ , and $y = re^s$ . If $g_x(2,1) = -3$ , $g_y(2,1) = 2$ , $f'(7) = -1$ , and $g(2,1) = 7$ , find $\left.\frac{\partial z}{\partial r}\right|_{r=1,s=0}$ and $\left.\frac{\partial z}{\partial s}\right|_{r=1,s=0}$ . 

46. Assume that $z = \ln(f(w))$ , $w = g(x, y)$ , $x = \sqrt{r - s}$ , and $y = r^2s$ . If $g_x(2, -9) = -1$ , $g_y(2, -9) = 3$ , $f'(-2) = 2$ , $f(-2) = 5$ , and $g(2, -9) = -2$ , find $\left.\frac{\partial z}{\partial r}\right|_{r=3,s=-1}$ and $\left.\frac{\partial z}{\partial s}\right|_{r=3,s=-1}$ . 

47. Changing voltage in a circuit The voltage V in a circuit that satisfies the law V = IR is slowly dropping as the battery wears out. At the same time, the resistance R is increasing as the resistor heats up. Use the equation 

$$
\frac {d V}{d t} = \frac {\partial V}{\partial I} \frac {d I}{d t} + \frac {\partial V}{\partial R} \frac {d R}{d t}
$$

to find how the current is changing at the instant when R = 600 ohms, I = 0.04 amp, dR/dt = 0.5 ohm/s, and dV/dt = -0.01 volt/s. 

![[2125d3b732a488efb4d7aeaf028128fe3bf712a6e5ec34049ea727687cc8f848.jpg|image]]


48. Changing dimensions in a box The lengths $a$ , $b$ , and $c$ of the edges of a rectangular box are changing with time. At the instant in question, $a = 1\mathrm{m}$ , $b = 2\mathrm{m}$ , $c = 3\mathrm{m}$ , $da / dt = db / dt = 1\mathrm{m / s}$ , and $dc / dt = -3\mathrm{m / s}$ . At what rates are the box's volume $V$ and surface area $S$ changing at that instant? Are the box's interior diagonals increasing in length or decreasing? 

49. If $f(u, v, w)$ is differentiable and $u = x - y, v = y - z$ , and $w = z - x$ , show that 

$$
\frac {\partial f}{\partial x} + \frac {\partial f}{\partial y} + \frac {\partial f}{\partial z} = 0.
$$

50. Polar coordinates Suppose that we substitute polar coordinates $x = r \cos \theta$ and $y = r \sin \theta$ in a differentiable function $w = f(x, y)$ . 

a. Show that 

$$
\frac {\partial w}{\partial r} = f _ {x} \cos \theta + f _ {y} \sin \theta
$$

and 

$$
\frac {1}{r} \frac {\partial w}{\partial \theta} = - f _ {x} \sin \theta + f _ {y} \cos \theta .
$$

b. Solve the equations in part (a) to express $f_{x}$ and $f_{y}$ in terms of $\partial w/\partial r$ and $\partial w/\partial \theta$ . 

c. Show that 

$$
(f _ {x}) ^ {2} + (f _ {y}) ^ {2} = \left(\frac {\partial w}{\partial r}\right) ^ {2} + \frac {1}{r ^ {2}} \left(\frac {\partial w}{\partial \theta}\right) ^ {2}.
$$

51. Laplace equations Show that if $w = f(u, v)$ satisfies the Laplace equation $f_{uu} + f_{vv} = 0$ and if $u = (x^2 - y^2)/2$ and $v = xy$ , then $w$ satisfies the Laplace equation $w_{xx} + w_{yy} = 0$ . 

52. Laplace equations Let $w = f(u) + g(v)$ , where $u = x + iy$ , v = x - iy, and $i = \sqrt{-1}$ . Show that w satisfies the Laplace equation $w_{xx} + w_{yy} = 0$ if all the necessary functions are differentiable. 

53. Extreme values on a helix Suppose that the partial derivatives of a function $f(x, y, z)$ at points on the helix $x = \cos t$ , $y = \sin t$ , z = t are 

$$
f _ {x} = \cos t, f _ {y} = \sin t, f _ {z} = t ^ {2} + t - 2.
$$

At what points on the curve, if any, can $f$ take on extreme values? 54. A space curve Let $w = x^{2}e^{2y}\cos 3z$ . Find the value of $dw / dt$ at the point $(1,\ln 2,0)$ on the curve $x = \cos t, y = \ln (t + 2), z = t$ . 

55. Temperature on a circle Let $T = f(x, y)$ be the temperature at the point $(x, y)$ on the circle $x = \cos t$ , $y = \sin t$ , $0 \leq t \leq 2\pi$ , and suppose that 

$$
\frac {\partial T}{\partial x} = 8 x - 4 y, \quad \frac {\partial T}{\partial y} = 8 y - 4 x.
$$

a. Find where the maximum and minimum temperatures on the circle occur by examining the derivatives $dT / dt$ and $d^2 T / dt^2$ . 

b. Suppose that $T = 4x^{2} - 4xy + 4y^{2}$ . Find the maximum and minimum values of T on the circle. 

56. Temperature on an ellipse Let $T = g(x, y)$ be the temperature at the point $(x, y)$ on the ellipse 

$$
x = 2 \sqrt {2} \cos t, \quad y = \sqrt {2} \sin t, \quad 0 \leq t \leq 2 \pi ,
$$

and suppose that 

$$
\frac {\partial T}{\partial x} = y, \quad \frac {\partial T}{\partial y} = x.
$$

a. Locate the maximum and minimum temperatures on the ellipse by examining dT/dt and $d^{2}T/dt^{2}$ . 

b. Suppose that $T = xy - 2$ . Find the maximum and minimum values of $T$ on the ellipse. 

57. The temperature $T = T(x, y)$ in °C at point $(x, y)$ satisfies $T_{x}(1, 2) = 3$ and $T_{y}(1, 2) = -1$ . If $x = e^{2t-2}$ cm and $y = 2 + \ln t$ cm, find the rate at which the temperature T changes when t = 1 s. 

58. A bug crawls on the surface $z = x^{2} - y^{2}$ directly above a path in the xy-plane given by $x = f(t)$ and $y = g(t)$ . If $f(2) = 4$ , $f'(2) = -1$ , $g(2) = -2$ , and $g'(2) = -3$ , then at what rate is the bug's elevation $z$ changing when $t = 2$ ? 

Differentiating Integrals Under mild continuity restrictions, it is true that if 

$$
F (x) = \int_ {a} ^ {b} g (t, x) d t,
$$

then $F'(x) = \int_{a}^{b} g_x(t, x) dt$ . Using this fact and the Chain Rule, we can find the derivative of 

$$
F (x) = \int_ {a} ^ {f (x)} g (t, x) d t
$$

by letting 

$$
G (u, x) = \int_ {a} ^ {u} g (t, x) d t,
$$

where $u = f(x)$ . Find the derivatives of the functions in Exercises 59 and 60. 

$$
\mathbf {5 9 .} F (x) = \int_ {0} ^ {x ^ {2}} \sqrt {t ^ {4} + x ^ {3}} d t
$$

$$
\mathbf {6 0 .} F (x) = \int_ {x ^ {2}} ^ {1} \sqrt {t ^ {3} + x ^ {2}} d t
$$

61. Water is flowing into a tank in the form of a right-circular cylinder at the rate of $(4/5)\pi\ m^{3}/min$ . The tank is stretching in such a way that even though it remains cylindrical, its radius is increasing at the rate of 0.002 m/min. How fast is the surface of the water rising when the radius is 2 m and the volume of water in the tank is $20\pi\ m^{3}$ ? 

62. Suppose $f$ is a differentiable function of $x, y$ , and $z$ and $u = f(x, y, z)$ . Then if $x = r \sin \phi \cos \theta, y = r \sin \phi \sin \theta$ , and $z = r \cos \phi$ , express $\partial u / \partial r$ , $\partial u / \partial \phi$ , and $\partial u / \partial \theta$ in terms of $\partial u / \partial x, \partial u / \partial y$ , and $\partial u / \partial z$ . 

63. At a given instant, the length of one leg of a right triangle is 10 m, and it is increasing at the rate of 1 m/min, and the length of the other leg of the right triangle is 12 m, and it is decreasing at the rate of 2 m/min. Find the rate of change of the measure of the acute angle opposite the leg of length 12 m at the given instant. 

## 13.5 Directional Derivatives and Gradient Vectors

![[39cc1dd6011903e041a05c4c265c86b23b36ad88de1d00688cfc87837c5b4049.jpg|image]]



FIGURE 13.26 Contours within Yosemite National Park in California show streams, which follow paths of steepest descent, running perpendicular to the contours. (Source: Yosemite National Park Map from U.S. Geological Survey, http://www.usgs.gov)


![[6130f5ebeca2a0c9c37c218ae0a18cc2c9d60c90d849d318e4a769d9b7565a00.jpg|image]]



FIGURE 13.27 The rate of change of f in the direction of u at a point $P_{0}$ is the rate at which f changes along this line at $P_{0}$ .


If you look at the map (Figure 13.26) showing contours within Yosemite National Park in California, you will notice that the streams flow perpendicular to the contours. The streams are following paths of steepest descent so the waters reach lower elevations as quickly as possible. Therefore, the fastest instantaneous rate of change in a stream's elevation above sea level has a particular direction. In this section, you will see why this direction, called the “downhill” direction, is perpendicular to the contours. 

## Directional Derivatives in the Plane

We know from Section 13.4 that if $f(x, y)$ is differentiable, then the rate at which $f$ changes with respect to $t$ along a differentiable curve $x = g(t), y = h(t)$ is 

$$
\frac {d f}{d t} = \frac {\partial f}{\partial x} \frac {d x}{d t} + \frac {\partial f}{\partial y} \frac {d y}{d t}.
$$

At any point $P_{0}(x_{0},y_{0}) = P_{0}(g(t_{0}), h(t_{0}))$ , this equation gives the rate of change of f with respect to increasing t and therefore depends, among other things, on the direction of motion along the curve. If the curve is a straight line and t is the arc length parameter along the line measured from $P_{0}$ in the direction of a given unit vector u, then df/dt is the rate of change of f with respect to distance in its domain in the direction of u. By varying u, we find the rates at which f changes with respect to distance as we move through $P_{0}$ in different directions. We now define this idea more precisely. 

Suppose that the function $f(x, y)$ is defined throughout a region R in the xy-plane, that $P_{0}(x_{0}, y_{0})$ is a point in R, and that $u = u_{1}i + u_{2}j$ is a unit vector. Then the equations 

$$
x = x _ {0} + s u _ {1}, y = y _ {0} + s u _ {2}
$$

parametrize the line through $P_{0}$ parallel to u. If the parameter s measures arc length from $P_{0}$ in the direction of u, we find the rate of change of f at $P_{0}$ in the direction of u by calculating df/ds at $P_{0}$ (Figure 13.27). 

> ***DEFINITION*** The derivative of $f$ at $P_0(x_0, y_0)$ in the direction of the unit vector $\mathbf{u} = u_1\mathbf{i} + u_2\mathbf{j}$ is the number 
>
> $$
> \left(\frac {d f}{d s}\right) _ {\mathbf {u}, P _ {0}} = \lim _ {s \rightarrow 0} \frac {f (x _ {0} + s u _ {1} , y _ {0} + s u _ {2}) - f (x _ {0} , y _ {0})}{s},\tag{1}
> $$
>
> provided the limit exists. 
>
The directional derivative defined by Equation (1) is also denoted by 

$$
D _ {\mathbf {u}} f (P _ {0}) \quad \text { or } \quad D _ {\mathbf {u}} f | _ {P _ {0}}. \quad \begin{array}{l} \text { "The derivative of   } f \\ \text { in   the   direction   of   } \mathbf {u}, \\ \text { evaluated   at   } P _ {0} \end{array}
$$

The partial derivatives $f_{x}(x_{0},y_{0})$ and $f_{y}(x_{0},y_{0})$ are the directional derivatives of f at $P_{0}$ in the i and j directions. This observation can be seen by comparing Equation (1) to the definitions of the two partial derivatives given in Section 13.3. 

**EXAMPLE 1** Using the definition, find the derivative of 

$$
f (x, y) = x ^ {2} + x y
$$

at $P_{0}(1,2)$ in the direction of the unit vector $\mathbf{u} = (1/\sqrt{2})\mathbf{i} + (1/\sqrt{2})\mathbf{j}$ . 

**Solution** Applying the definition in Equation (1), we obtain 

$$
\begin{array}{l l}\left(\frac {d f}{d s}\right) _ {\mathbf {u}, P _ {0}}&= \lim _ {s \rightarrow 0} \frac {f (x _ {0} + s u _ {1} , y _ {0} + s u _ {2}) - f (x _ {0} , y _ {0})}{s}\\&= \lim _ {s \rightarrow 0} \frac {f \left(1 + s \cdot \frac {1}{\sqrt {2}} , 2 + s \cdot \frac {1}{\sqrt {2}}\right) - f (1 , 2)}{s}\\&= \lim _ {s \rightarrow 0} \frac {\left(1 + \frac {s}{\sqrt {2}}\right) ^ {2} + \left(1 + \frac {s}{\sqrt {2}}\right)\left(2 + \frac {s}{\sqrt {2}}\right) - (1 ^ {2} + 1 \cdot 2)}{s}\\&= \lim _ {s \rightarrow 0} \frac {\left(1 + \frac {2 s}{\sqrt {2}} + \frac {s ^ {2}}{2}\right) + \left(2 + \frac {3 s}{\sqrt {2}} + \frac {s ^ {2}}{2}\right) - 3}{s}\\&= \lim _ {s \rightarrow 0} \frac {\frac {5 s}{\sqrt {2}} + s ^ {2}}{s} = \lim _ {s \rightarrow 0} \left(\frac {5}{\sqrt {2}} + s\right) = \frac {5}{\sqrt {2}}.\end{array}\tag {Eq.(1)}
$$

The rate of change of $f(x, y) = x^2 + xy$ at $P_0(1, 2)$ in the direction $\mathbf{u}$ is $5 / \sqrt{2}$ . 

## Interpretation of the Directional Derivative

The equation $z = f(x, y)$ represents a surface S in space. If $z_{0} = f(x_{0}, y_{0})$ , then the point $P(x_{0}, y_{0}, z_{0})$ lies on S. The vertical plane that passes through P and $P_{0}(x_{0}, y_{0})$ parallel to u intersects S in a curve C (Figure 13.28). The rate of change of f in the direction of u is the slope of the tangent to C at P in the right-handed system formed by the vectors u and k. 

![[6d0d9b8c02bed63c1a938da39de49f13ffbf3ed37d871998a9adb477e6e5e5da.jpg|image]]



FIGURE 13.28 The slope of the trace curve $C$ at $P_0$ is $\lim_{Q\to P}$ slope $(PQ)$ ; this is the directional derivative


$$
\left(\frac {d f}{d s}\right) _ {\mathbf {u}, P _ {0}} = \left. D _ {\mathbf {u}} f \right| _ {P _ {0}}.
$$

When $\mathbf{u} = \mathbf{i}$ , the directional derivative at $P_0$ is $\partial f / \partial x$ evaluated at $(x_0, y_0)$ . When $\mathbf{u} = \mathbf{j}$ , the directional derivative at $P_0$ is $\partial f / \partial y$ evaluated at $(x_0, y_0)$ . The directional derivative generalizes the two partial derivatives. We can now ask for the rate of change of $f$ in any direction $\mathbf{u}$ , not just in the directions $\mathbf{i}$ and $\mathbf{j}$ . 

For a physical interpretation of the directional derivative, suppose that $T = f(x, y)$ is the temperature at each point $(x, y)$ over a region in the plane. Then $f(x_{0}, y_{0})$ is the temperature at the point $P_{0}(x_{0}, y_{0})$ , and $D_{u}f|_{P_{0}}$ is the instantaneous rate of change of the temperature at $P_{0}$ stepping off in the direction u. 

## Calculation and Gradients

We now develop an efficient formula to calculate the directional derivative for a differentiable function f. We begin with the line 

$$
x = x _ {0} + s u _ {1}, y = y _ {0} + s u _ {2},\tag{2}
$$

through $P_{0}(x_{0}, y_{0})$ , parametrized with the arc length parameter s increasing in the direction of the unit vector $u = u_{1}i + u_{2}j$ . Then, by the Chain Rule we find 

$$
\begin{array}{l l} \left(\frac {d f}{d s}\right) _ {\mathbf {u}, P _ {0}} = \left. \frac {\partial f}{\partial x} \right| _ {P _ {0}} \frac {d x}{d s} + \left. \frac {\partial f}{\partial y} \right| _ {P _ {0}} \frac {d y}{d s} & \text { Chain   Rule   for   differentiable } f \\ = \left. \frac {\partial f}{\partial x} \right| _ {P _ {0}} u _ {1} + \left. \frac {\partial f}{\partial y} \right| _ {P _ {0}} u _ {2} & \text { From   Eqs.   (2), } d x / d s = u _ {1} \\ & \text { and } d y / d s = u _ {2} \\ = \underbrace {\left[ \frac {\partial f}{\partial x} \right| _ {P _ {0}} \mathbf {i} + \left. \frac {\partial f}{\partial y} \right| _ {P _ {0}} \mathbf {j}} _ {\text { Gradient   of } f \text { at } P _ {0}} \cdot \underbrace {\left[ u _ {1} \mathbf {i} + u _ {2} \mathbf {j} \right]} _ {\text { Direction } \mathbf {u}}. \end{array}\tag{3}
$$

Equation (3) says that the derivative of a differentiable function $f$ in the direction of $\mathbf{u}$ at $P_0$ is the dot product of $\mathbf{u}$ with a special vector, which we now define. 

> ***DEFINITION*** The gradient vector (or gradient) of $f(x, y)$ is the vector 
>
> $$
> \nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j}.
> $$
>
The value of the gradient vector obtained by evaluating the partial derivatives at a point $P_{0}(x_{0}, y_{0})$ is written 

$$
\left. \nabla f \right| _ {P _ {0}} \qquad \text { or } \qquad \nabla f (x _ {0}, y _ {0}).
$$

The notation $\nabla f$ is read “grad f” as well as “gradient of f” and “del f.” The symbol $\nabla$ by itself is read “del.” Another notation for the gradient is grad f. Using the gradient notation, we restate Equation (3) as a theorem. 

## THEOREM 9—The Directional Derivative Is a Dot Product

If $f(x, y)$ is differentiable in an open region containing $P_0(x_0, y_0)$ , then 

$$
\left(\frac {d f}{d s}\right) _ {\mathbf {u}, P _ {0}} = \left. \nabla f \right| _ {P _ {0}} \cdot \mathbf {u},\tag{4}
$$

the dot product of the gradient $\nabla f$ at $P_0$ with the vector $\mathbf{u}$ . In brief, $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ . 

**EXAMPLE 2** Find the derivative of $f(x,y) = xe^{y} + \cos(xy)$ at the point $(2,0)$ in the direction of v = 3i - 4j. 

**Solution** Recall that the direction of a vector v is the unit vector obtained by dividing v by its length: 

$$
\mathbf {u} = \frac {\mathbf {v}}{| \mathbf {v} |} = \frac {\mathbf {v}}{5} = \frac {3}{5} \mathbf {i} - \frac {4}{5} \mathbf {j}.
$$

![[bbef1479e06b5bfe489232d4ea29de108bf6d87cecc3900e145d1825e6b6738a.jpg|image]]



FIGURE 13.29 Picture $\nabla f$ as a vector in the domain of f. The figure shows a number of level curves of f. The rate at which f changes at $(2,0)$ in the direction u is $\nabla f \cdot u = -1$ , which is the component of $\nabla f$ in the direction of unit vector u (Example 2).


The partial derivatives of f are everywhere continuous and at $(2,0)$ are given by 

$$
f _ {x} (2, 0) = \left. \left(e ^ {y} - y \sin (x y)\right) \right| _ {(2, 0)} = e ^ {0} - 0 = 1
$$

$$
f _ {y} (2, 0) = \left. \left(x e ^ {y} - x \sin (x y)\right) \right| _ {(2, 0)} = 2 e ^ {0} - 2 \cdot 0 = 2.
$$

The gradient of $f$ at (2, 0) is 

$$
\nabla f | _ {(2, 0)} = f _ {x} (2, 0) \mathbf {i} + f _ {y} (2, 0) \mathbf {j} = \mathbf {i} + 2 \mathbf {j}
$$

(Figure 13.29). The derivative of $f$ at (2, 0) in the direction of $\mathbf{v}$ is therefore 

$$
\begin{array}{r l} D _ {\mathbf {u}} f | _ {(2, 0)} & = \nabla f | _ {(2, 0)} \cdot \mathbf {u} \\ & = (\mathbf {i} + 2 \mathbf {j}) \cdot \left(\frac {3}{5} \mathbf {i} - \frac {4}{5} \mathbf {j}\right) = \frac {3}{5} - \frac {8}{5} = - 1. \end{array}
$$

Eq. (4) with the $D_{\mathbf{u}}f|_{P_0}$ notation 

Evaluating the dot product in the brief version of Equation (4) gives 

$$
D _ {\mathbf {u}} f = \nabla f \cdot \mathbf {u} = | \nabla f | | \mathbf {u} | \cos \theta = | \nabla f | \cos \theta ,
$$

where $\theta$ is the angle between the vectors u and $\nabla f$ , and reveals the following properties. 

## Properties of the Directional Derivative $D_{u}f = \nabla f \cdot u = |\nabla f| \cos \theta$

1. The function f increases most rapidly when $\cos\theta=1$ , which means that $\theta=0$ and u is the direction of $\nabla f$ . That is, at each point P in its domain, f increases most rapidly in the direction of the gradient vector $\nabla f$ at P. The derivative in this direction is 

$$
D _ {\mathbf {u}} f = | \nabla f | \cos (0) = | \nabla f |.
$$

2. Similarly, f decreases most rapidly in the direction of $-\nabla f$ . The derivative in this direction is $D_{\mathbf{u}}f = |\nabla f| \cos(\pi) = -|\nabla f|$ . 

3. Any direction $\mathbf{u}$ orthogonal to a gradient $\nabla f \neq 0$ is a direction of zero change in $f$ because $\theta$ then equals $\pi/2$ and 

$$
D _ {\mathbf {u}} f = | \nabla f | \cos (\pi / 2) = | \nabla f | \cdot 0 = 0.
$$

As we discuss later, these properties hold in three dimensions as well as two. 

## **EXAMPLE 3** Find the directions in which $f(x, y) = (x^{2}/2) + (y^{2}/2)$

(a) increases most rapidly at the point $(1,1)$ , and 

(b) decreases most rapidly at $(1,1)$ . 

(c) What are the directions of zero change in $f$ at (1, 1)? 

## **Solution**

(a) The function increases most rapidly in the direction of $\nabla f$ at (1, 1). The gradient there is 

$$
\left. \nabla f \right| _ {(1, 1)} = (x \mathbf {i} + y \mathbf {j}) \Big | _ {(1, 1)} = \mathbf {i} + \mathbf {j}.
$$

Its direction is 

$$
\mathbf {u} = \frac {\mathbf {i} + \mathbf {j}}{| \mathbf {i} + \mathbf {j} |} = \frac {\mathbf {i} + \mathbf {j}}{\sqrt {(1) ^ {2} + (1) ^ {2}}} = \frac {1}{\sqrt {2}} \mathbf {i} + \frac {1}{\sqrt {2}} \mathbf {j}.
$$

![[2860d0f19f7300a5fb700d67a05bbf1f79501b5233b4bce28720791f16cf5a2e.jpg|image]]



FIGURE 13.30 The direction in which $f(x, y)$ increases most rapidly at (1, 1) is the direction of $\nabla f|_{(1,1)} = \mathbf{i} + \mathbf{j}$ . It corresponds to the direction of steepest ascent on the surface at (1, 1, 1) (Example 3).


![[fcdc45f6a6720ea82aeb48d3a139c300c7c2dcdf8ba38e3f6ecb088957d8ee65.jpg|image]]



FIGURE 13.31 When it is nonzero, the gradient of a differentiable function of two variables at a point is always normal to the function's level curve through that point.


(b) The function decreases most rapidly in the direction of $-\nabla f$ at $(1,1)$ , which is 

$$
- \mathbf {u} = - \frac {1}{\sqrt {2}} \mathbf {i} - \frac {1}{\sqrt {2}} \mathbf {j}.
$$

(c) The directions of zero change at $(1,1)$ are the directions orthogonal to $\nabla f$ : 

$$
\mathbf {n} = - \frac {1}{\sqrt {2}} \mathbf {i} + \frac {1}{\sqrt {2}} \mathbf {j} \quad \text { and } \quad - \mathbf {n} = \frac {1}{\sqrt {2}} \mathbf {i} - \frac {1}{\sqrt {2}} \mathbf {j}.
$$

See Figure 13.30. 

## Gradients and Tangents to Level Curves

If a differentiable function $f(x, y)$ has a constant value c along a smooth curve $\mathbf{r} = g(t)\mathbf{i} + h(t)\mathbf{j}$ (making the curve part of a level curve of f), then $f(g(t), h(t)) = c$ . Differentiating both sides of this equation with respect to t leads to the equations 

$$
\begin{array}{c} \frac {d}{d t} f (g (t), h (t)) = \frac {d}{d t} (c) \\ \frac {\partial f}{\partial x} \frac {d g}{d t} + \frac {\partial f}{\partial y} \frac {d h}{d t} = 0 \\ \underbrace {\left(\frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j}\right)} _ {\nabla f} \cdot \underbrace {\left(\frac {d g}{d t} \mathbf {i} + \frac {d h}{d t} \mathbf {j}\right)} _ {\frac {d \mathbf {r}}{d t}} = 0. \end{array} \quad \text { Chain   Rule }\tag{5}
$$

Assuming the gradient of f is a nonzero vector, Equation (5) says that $\nabla f$ is normal to the tangent vector dr/dt, so it is normal to the curve. This is seen in Figure 13.31. 

At every point $(x_{0}, y_{0})$ in the domain of a differentiable function $f(x, y)$ where the gradient of f is a nonzero vector, this vector is normal to the level curve through $(x_{0}, y_{0})$ (Figure 13.31). 

Equation (5) validates our observation that streams flow perpendicular to the contours in topographical maps (see Figure 13.26). Since the downflowing stream will reach its destination in the fastest way, it must flow in the direction of the negative gradient vectors from Property 2 for the directional derivative. Equation (5) tells us these directions are perpendicular to the level curves. 

This observation also enables us to find equations for tangent lines to level curves. They are the lines normal to the gradients. The line through a point $P_{0}(x_{0}, y_{0})$ normal to a nonzero vector $N = A i + B j$ has the equation 

$$
A (x - x _ {0}) + B (y - y _ {0}) = 0
$$

(Exercise 39). If $\mathbf{N}$ is the gradient $\nabla f|_{(x_0,y_0)} = f_x(x_0,y_0)\mathbf{i} + f_y(x_0,y_0)\mathbf{j}$ , and this gradient is not the zero vector, then this equation gives the following formula. 

Equation for the Tangent Line to a Level Curve 

$$
f _ {x} (x _ {0}, y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0}, y _ {0}) (y - y _ {0}) = 0\tag{6}
$$

## **EXAMPLE 4** Find an equation for the tangent to the ellipse

$$
\frac {x ^ {2}}{4} + y ^ {2} = 2
$$

(Figure 13.32) at the point $(-2, 1)$ . 

![[c2ef439e1fba0a0a37f2a370d7da7694037b10ad5d8a3415deb0e37171011197.jpg|image]]


**Solution** The ellipse is a level curve of the function 


FIGURE 13.32 We can find the tangent to the ellipse $(x^{2} / 4) + y^{2} = 2$ by treating the ellipse as a level curve of the function $f(x,y) = (x^{2} / 4) + y^{2}$ (Example 4).


The gradient of $f$ at $(-2, 1)$ is 

$$
f (x, y) = \frac {x ^ {2}}{4} + y ^ {2}.
$$

$$
\left. \nabla f \right| _ {(- 2, 1)} = \left(\frac {x}{2} \mathbf {i} + 2 y \mathbf {j}\right) \Big | _ {(- 2, 1)} = - \mathbf {i} + 2 \mathbf {j}.
$$

Because this gradient vector is nonzero, the tangent to the ellipse at $(-2,1)$ is the line 

$$
\begin{array}{r l} (- 1) (x + 2) + (2) (y - 1) & = 0 \quad \text { Eq.   (6) } \\ x - 2 y & = - 4. \quad \text { Simplify. } \end{array}
$$

If we know the gradients of two functions f and g, we automatically know the gradients of their sum, difference, constant multiples, product, and quotient. You are asked to establish the following rules in Exercise 40. Notice that these rules have the same form as the corresponding rules for derivatives of single-variable functions. 

## Algebra Rules for Gradients

1. Sum Rule: 

$$
\nabla (f + g) = \nabla f + \nabla g
$$

2. Difference Rule: 

$$
\nabla (f - g) = \nabla f - \nabla g
$$

3. Constant Multiple Rule: 

$\nabla (kf) = k\nabla f$ (any number $k$ ) 

4. Product Rule: 

$$
\nabla (f g) = f \nabla g + g \nabla f
$$

5. Quotient Rule: 

$$
\nabla \left(\frac {f}{g}\right) = \frac {g \nabla f - f \nabla g}{g ^ {2}} \Bigg \}
$$

Scalar multipliers on left of gradients 

## **EXAMPLE 5** We illustrate two of the rules with

$$
\begin{array}{l l} f (x, y) = x - y & g (x, y) = 3 y \\ \nabla f = \mathbf {i} - \mathbf {j} & \nabla g = 3 \mathbf {j}. \end{array}
$$

We have 

1. $\nabla (f - g) = \nabla (x - 4y) = \mathbf{i} - 4\mathbf{j} = \nabla f - \nabla g$ 

Rule 2 

2. $\nabla(fg) = \nabla(3xy - 3y^{2}) = 3yi + (3x - 6y)j$ 

and 

$$
\begin{array}{c} f \nabla g + g \nabla f = (x - y) 3 \mathbf {j} + 3 y (\mathbf {i} - \mathbf {j}) \\ = 3 y \mathbf {i} + (3 x - 6 y) \mathbf {j}. \end{array}
$$

Substitute. 

Simplify. 

We have therefore verified that for this example, $\nabla(fg) = f\nabla g + g\nabla f$ . 

## Functions of Three Variables

For a differentiable function $f(x, y, z)$ and a unit vector $\mathbf{u} = u_1\mathbf{i} + u_2\mathbf{j} + u_3\mathbf{k}$ in space, we have 

$$
\nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k}
$$

and 

$$
D _ {\mathbf {u}} f = \nabla f \cdot \mathbf {u} = \frac {\partial f}{\partial x} u _ {1} + \frac {\partial f}{\partial y} u _ {2} + \frac {\partial f}{\partial z} u _ {3}.
$$

The directional derivative can once again be written in the form 

$$
D _ {\mathbf {u}} f = \nabla f \cdot \mathbf {u} = | \nabla f | | \mathbf {u} | \cos \theta = | \nabla f | \cos \theta ,
$$

so the properties listed earlier for functions of two variables extend to three variables. At any given point, f increases most rapidly in the direction of $\nabla f$ and decreases most rapidly in the direction of $-\nabla f$ . In any direction orthogonal to $\nabla f$ , the derivative is zero. 

## **EXAMPLE 6**

(a) Find the derivative of $f(x, y, z) = x^3 - xy^2 - z$ at $P_0(1, 1, 0)$ in the direction of $\mathbf{v} = 2\mathbf{i} - 3\mathbf{j} + 6\mathbf{k}$ . 

(b) In what directions does $f$ change most rapidly at $P_0$ , and what are the rates of change in these directions? 

## **Solution**

(a) The direction of v is obtained by dividing v by its length: 

$$
\begin{array}{l} | \mathbf {v} | = \sqrt {(2) ^ {2} + (- 3) ^ {2} + (6) ^ {2}} = \sqrt {4 9} = 7 \\ \mathbf {u} = \frac {\mathbf {v}}{| \mathbf {v} |} = \frac {2}{7} \mathbf {i} - \frac {3}{7} \mathbf {j} + \frac {6}{7} \mathbf {k}. \end{array}
$$

The partial derivatives of f at $P_{0}$ are 

$$
f _ {x} = \left(3 x ^ {2} - y ^ {2}\right) \bigg | _ {(1, 1, 0)} = 2, \quad f _ {y} = - 2 x y \bigg | _ {(1, 1, 0)} = - 2, \quad f _ {z} = - 1 \bigg | _ {(1, 1, 0)} = - 1.
$$

The gradient of $f$ at $P_0$ is 

$$
\left. \nabla f \right| _ {(1, 1, 0)} = 2 \mathbf {i} - 2 \mathbf {j} - \mathbf {k}.
$$

The derivative of $f$ at $P_0$ in the direction of $\mathbf{v}$ is therefore 

$$
\begin{array}{r l} D _ {\mathbf {u}} f \big | _ {(1, 1, 0)} & = \left. \nabla f \right| _ {(1, 1, 0)} \cdot \mathbf {u} = (2 \mathbf {i} - 2 \mathbf {j} - \mathbf {k}) \cdot \left(\frac {2}{7} \mathbf {i} - \frac {3}{7} \mathbf {j} + \frac {6}{7} \mathbf {k}\right) \\ & = \frac {4}{7} + \frac {6}{7} - \frac {6}{7} = \frac {4}{7}. \end{array}
$$

(b) The function increases most rapidly in the direction of $\nabla f = 2i - 2j - k$ and decreases most rapidly in the direction of $-\nabla f$ . The rates of change in the directions are, respectively, 

$$
| \nabla f | = \sqrt {(2) ^ {2} + (- 2) ^ {2} + (- 1) ^ {2}} = \sqrt {9} = 3 \quad \text { and } \quad - | \nabla f | = - 3.
$$

## Functions of More Than Three Variables

The gradient of a differentiable function of n variables $f(x_{1}, x_{2}, \ldots, x_{n})$ is 

$$
\nabla f = \left\langle \frac {\partial f}{\partial x _ {1}}, \frac {\partial f}{\partial x _ {2}}, \dots , \frac {\partial f}{\partial x _ {n}} \right\rangle .
$$

If $u = \langle u_{1}, u_{2}, \ldots, u_{n} \rangle$ is an n-dimensional vector such that $u_{1}^{2} + u_{2}^{2} + \cdots + u_{n}^{2} = 1$ (so u is a unit vector since $|u| = \sqrt{u_{1}^{2} + u_{2}^{2} + \cdots + u_{n}^{2}} = 1$ ), then the directional derivative of f in the direction of u is 

$$
D _ {u} f = \nabla f \cdot \mathbf {u} = \frac {\partial f}{\partial x _ {1}} u _ {1} + \frac {\partial f}{\partial x _ {2}} u _ {2} + \dots + \frac {\partial f}{\partial x _ {n}} u _ {n}.
$$

![[8afb4dcb3ee555983aac44affb65186a3c8517c07887c87343e3bcd03c76302a.jpg|image]]



FIGURE 13.33 A tetrahedron on top of a triangular prism (Example 7).


**EXAMPLE 7** The volume of the solid shown in Figure 13.33 consisting of a tetrahedron on top of a triangular prism is given by $f(x, y, z, w) = \frac{xy}{2}(z + \frac{w}{3})$ . 

(a) Calculate the derivative of $f(x,y,z,w)$ at the point $P_{0}(6,5,8,4)$ in the direction of $v = \langle1,-1,-1,1\rangle$ . 

(b) What is the geometric significance of the value obtained in part (a)? 

**Solution** 

(a) The direction of v is the unit vector 

$$
\begin{array}{l} \mathbf {u} = \frac {1}{| \mathbf {v} |} \mathbf {v} \\ = \frac {1}{\sqrt {1 ^ {2} + (- 1) ^ {2} + (- 1) ^ {2} + 1 ^ {2}}} \langle 1, - 1, - 1, 1 \rangle \\ = \frac {1}{2} \langle 1, - 1, - 1, 1 \rangle \\ = \left\langle \frac {1}{2}, - \frac {1}{2}, - \frac {1}{2}, \frac {1}{2} \right\rangle . \end{array}
$$

The four partial derivatives of $f$ at the point $P_0$ are 

$$
f _ {x} = \frac {y}{2} \left(z + \frac {w}{3}\right) \Big | _ {(6, 5, 8, 4)} = \frac {7 0}{3},
$$

$$
f _ {y} = \frac {x}{2} \left(z + \frac {w}{3}\right) \Big | _ {(6, 5, 8, 4)} = 2 8,
$$

$$
f _ {z} = \left. \frac {x y}{2} \right| _ {(6, 5, 8, 4)} = 1 5,
$$

$$
f _ {w} = \left. \frac {x y}{6} \right| _ {(6, 5, 8, 4)} = 5.
$$

The gradient of $f$ at $P_0$ is 

$$
\left. \nabla f \right| _ {(6, 5, 8, 4)} = \left\langle \frac {7 0}{3}, 2 8, 1 5, 5 \right\rangle .
$$

The derivative of f at $(6,5,8,4)$ in the direction of v is 

$$
\begin{array}{l} D _ {\mathbf {u}} f | _ {P _ {0}} = \nabla f | _ {P _ {0}} \cdot \mathbf {u} \\ = \left\langle \frac {7 0}{3}, 2 8, 1 5, 5 \right\rangle \cdot \left\langle \frac {1}{2}, - \frac {1}{2}, - \frac {1}{2}, \frac {1}{2} \right\rangle \\ = \left(\frac {7 0}{3}\right) \left(\frac {1}{2}\right) + (2 8) \left(- \frac {1}{2}\right) + (1 5) \left(- \frac {1}{2}\right) + (5) \left(\frac {1}{2}\right) \\ = - \frac {2 2}{3}. \end{array}
$$

(b) Geometrically, this means that if the dimensions are $x = 6$ , $y = 5$ , $z = 8$ , and $w = 4$ , and the dimensions are changed by moving at unit speed so that $x$ and $w$ increase at the same rate while both $y$ and $z$ decrease at that rate, then the volume of the solid decreases at the rate of 71/3. 

## The Chain Rule for Paths

If $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ is a smooth path C, and $w = f(\mathbf{r}(t))$ is a scalar function evaluated along C, then according to the Chain Rule, Theorem 6 in Section 13.4, 

$$
\frac {d w}{d t} = \frac {\partial w}{\partial x} \frac {d x}{d t} + \frac {\partial w}{\partial y} \frac {d y}{d t} + \frac {\partial w}{\partial z} \frac {d z}{d t}.
$$

The partial derivatives on the right-hand side of the above equation are evaluated along the curve $\mathbf{r}(t)$ , and the derivatives of the intermediate variables are evaluated at t. If we express this equation using vector notation, we have 

The Derivative Along a Path 

$$
\frac {d}{d t} f (\mathbf {r} (t)) = \nabla f (\mathbf {r} (t)) \cdot \mathbf {r} ^ {\prime} (t).\tag{7}
$$

What Equation (7) says is that the derivative of the composite function $f(\mathbf{r}(t))$ is the “derivative” (gradient) of the outside function f, evaluated at $\mathbf{r}(t)$ , “times” (dot product) the derivative of the inside function r. This is analogous to the “Outside-Inside” Rule for derivatives of composite functions studied in Section 3.6. That is, the multivariable Chain Rule for paths has exactly the same form as the rule for single-variable differential calculus when appropriate interpretations are given to the meanings of the terms and operations involved. 

## EXERCISES 13.5

## Calculating Gradients

In Exercises 1–6, find the gradient of the function at the given point. Then sketch the gradient, together with the level curve that passes through the point. 

1. $f(x,y)=y-x,\quad(2,1)$ 2. $f(x,y)=\ln(x^{2}+y^{2})$ , 

(1,1) 

3. $g(x,y) = xy^2$ ， $(2, - 1)$ 4. $g(x,y) = \frac{x^2}{2} -\frac{y^2}{2},(\sqrt{2},1)$ 

5. $f(x,y)=\sqrt{2x+3y},(-1,2)$ 

6. $f(x,y) = \tan^{-1}\frac{\sqrt{x}}{y}, (4, - 2)$ 

In Exercises 7–10, find $\nabla f$ at the given point. 

7. $f(x,y,z)=x^{2}+y^{2}-2z^{2}+z\ln x,\quad(1,1,1)$ 

8. $f(x,y,z)=2z^{3}-3(x^{2}+y^{2})z+\arctan xz,\quad(1,1,1)$ 

$$
f (x, y, z) = \left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {- 1 / 2} + \ln (x y z), (- 1, 2, - 2)
$$

10. $f(x,y,z) = e^{x + y}\cos z + (y + 1)\arcsin x,\quad (0,0,\pi /6)$ 

## Finding Directional Derivatives

In Exercises 11–18, find the derivative of the function at $P_{0}$ in the direction of v. 

11. $f(x,y) = 2xy - 3y^{2}, P_{0}(5,5), \mathbf{v} = 4\mathbf{i} + 3\mathbf{j}$ 

12. $f(x,y)=2x^{2}+y^{2},\quad P_{0}(-1,1),\quad \mathbf{v}=3\mathbf{i}-4\mathbf{j}$ 

13. $g(x,y) = \frac{x - y}{xy + 2}, P_0(1, - 1),\mathbf{v} = 12\mathbf{i} + 5\mathbf{j}$ 

14. $h(x,y) = \arctan (y / x) + \sqrt{3}\arcsin (xy / 2),P_0(1,1),$ $\mathbf{v} = 3\mathbf{i} - 2\mathbf{j}$ 

15. $f(x,y,z)=xy+yz+zx,\quad P_{0}(1,-1,2),\quad \mathbf{v}=3\mathbf{i}+6\mathbf{j}-2\mathbf{k}$ 

16. $f(x,y,z) = x^{2} + 2y^{2} - 3z^{2}, P_{0}(1,1,1), \mathbf{v} = \mathbf{i} + \mathbf{j} + \mathbf{k}$ 

17. $g(x,y,z) = 3e^{x}\cos yz, P_{0}(0,0,0), \mathbf{v} = 2\mathbf{i} + \mathbf{j} - 2\mathbf{k}$ 

18. $h(x,y,z) = \cos xy + e^{yz} + \ln zx,\quad P_{0}(1,0,1/2),$ 

In Exercises 19–24, find the directions in which the functions increase most rapidly, and the directions in which they decrease most rapidly, at $P_{0}$ . Then find the derivatives of the functions in these directions. 

19. $f(x,y) = x^{2} + xy + y^{2}, P_{0}(-1,1)$ 

20. $f(x,y) = x^{2}y + e^{xy}\sin y, P_{0}(1,0)$ 

21. $f(x,y,z) = (x / y) - yz, P_0(4,1,1)$ 

22. $g(x,y,z) = xe^{y} + z^{2}, P_{0}(1,\ln 2,1 / 2)$ 

23. $f(x,y,z)=\ln xy+\ln yz+\ln xz,\quad P_{0}(1,1,1)$ 

24. $h(x,y,z) = \ln (x^{2} + y^{2} - 1) + y + 6z, P_{0}(1,1,0)$ 

## Tangent Lines to Level Curves

In Exercises 25–28, sketch the curve $f(x,y)=c$ , together with $\nabla f$ and the tangent line at the given point. Then write an equation for the tangent line. 

25. $x^{2} + y^{2} = 4$ ， $(\sqrt{2},\sqrt{2})$ 26. $x^{2} - y = 1$ ， $(\sqrt{2},1)$ 

27. $xy = -4, (2, -2)$ 28. $x^{2} - xy + y^{2} = 7, (-1, 2)$ 

## Theory and Examples

29. Let $f(x, y) = x^2 - xy + y^2 - y$ . Find the directions $\mathbf{u}$ and the values of $D_{\mathbf{u}}f(1, -1)$ for which  
a. $D_{\mathbf{u}}f(1, -1)$ is largest b. $D_{\mathbf{u}}f(1, -1)$ is smallest  
c. $D_{\mathbf{u}}f(1, -1) = 0$ d. $D_{\mathbf{u}}f(1, -1) = 4$ e. $D_{\mathbf{u}}f(1, -1) = -3$ 

30. Let $f(x, y) = \frac{(x - y)}{(x + y)}$ . Find the directions $\mathbf{u}$ and the values of $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right)$ for which  
a. $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right)$ is largest  
b. $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right)$ is smallest  
c. $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right) = 0$ d. $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right) = -2$ e. $D_{\mathbf{u}}f\left(-\frac{1}{2}, \frac{3}{2}\right) = 1$ 

31. Zero directional derivative In what direction is the derivative of $f(x, y) = xy + y^2$ at $P(3, 2)$ equal to zero? 

32. Zero directional derivative In what directions is the derivative of $f(x, y) = (x^2 - y^2) / (x^2 + y^2)$ at $P(1, 1)$ equal to zero? 

33. Is there a direction $\mathbf{u}$ in which the rate of change of $f(x,y) = x^{2} - 3xy + 4y^{2}$ at $P(1,2)$ equals 14? Give reasons for your answer. 

34. Changing temperature along a circle Is there a direction u in which the rate of change of the temperature function $T(x, y, z) = 2xy - yz$ (temperature in degrees Celsius, distance in meters) at $P(1, -1, 1)$ is $-3^{\circ}C/m$ ? Give reasons for your answer. 

35. The derivative of $f(x,y)$ at $P_0(1,2)$ in the direction of $\mathbf{i} + \mathbf{j}$ is $2\sqrt{2}$ and in the direction of $-2\mathbf{j}$ is $-3$ . What is the derivative of $f$ in the direction of $-\mathbf{i} - 2\mathbf{j}$ ? Give reasons for your answer. 

36. The derivative of $f(x, y, z)$ at a point P is greatest in the direction of $v = i + j - k$ . In this direction, the value of the derivative is $2\sqrt{3}$ . 

a. What is $\nabla f$ at $P$ ? Give reasons for your answer. 

b. What is the derivative of $f$ at $P$ in the direction of $\mathbf{i} + \mathbf{j}$ ? 

37. Directional derivatives and scalar components How is the derivative of a differentiable function $f(x,y,z)$ at a point $P_0$ in the direction of a unit vector $\mathbf{u}$ related to the scalar component of $\nabla f|_{P_0}$ in the direction of $\mathbf{u}$ ? Give reasons for your answer. 

38. Directional derivatives and partial derivatives Assuming that the necessary derivatives of $f(x,y,z)$ are defined, how are $D_{i}f, D_{j}f$ , and $D_{k}f$ related to $f_{x}, f_{y}$ , and $f_{z}$ ? Give reasons for your answer. 

39. Lines in the xy-plane Show that $A(x - x_{0}) + B(y - y_{0}) = 0$ is an equation for the line in the xy-plane through the point $(x_{0}, y_{0})$ normal to the vector $N = A i + B j$ . 

40. The algebra rules for gradients Given a constant $k$ and the gradients 

$$
\nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k},
$$

$$
\nabla g = \frac {\partial g}{\partial x} \mathbf {i} + \frac {\partial g}{\partial y} \mathbf {j} + \frac {\partial g}{\partial z} \mathbf {k},
$$

establish the algebra rules for gradients. 

In Exercises 41–44, find a parametric equation for the line that is perpendicular to the graph of the given equation at the given point. 

41. $x^{2} + y^{2} = 25, (-3, 4)$ 

42. $x^{2} + xy + y^{2} = 3,\quad(2,-1)$ 

43. $x^{2} + y^{2} + z^{2} = 14,\quad(3,-2,1)$ 

44. $z = x^{3} - xy^{2},(-1,1,0)$ 

## Gradients and Directional Derivatives for Functions of More Than Three Variables

In Exercises 45–48, find $\nabla f$ at the given point. 

$$
f (x, y, z, w) = \frac {x \sqrt {y}}{w} - x ^ {2} z ^ {3}, (2, 4, - 1, 3)
$$

$$
f (x, y, z, w) = x ^ {3} \sin y + w ^ {2} \cos z, (- 2, \pi , 0, 3)
$$

$$
f (x, y, z, s, t) = e ^ {y} \ln s + x ^ {2} t \tan z, \left(3, 0, \frac {\pi}{4}, e, 5\right)
$$

$$
f (x, y, z, s, t) = \frac {(x ^ {2} + y ^ {2}) \arctan t}{z ^ {2} s}, (- 2, 1, - 1, 2, 1)
$$

In Exercises 49–52, find the derivative of the function at $P_{0}$ in the direction of v. 

$$
\mathbf {4 9 .} f (x, y, z, w) = \frac {w \ln x}{y ^ {2} z ^ {3}}, \quad P _ {0} (e ^ {2}, - 2, 1, - 3), \quad \mathbf {v} = \langle - 1, 2, - 2, 4 \rangle
$$

$$
\begin{array}{l} \mathbf {5 0 .} f (x, y, z, w) = (x - y) ^ {2} + e ^ {z - w}, P _ {0} (4, 2, 3, 1), \\ \mathbf {v} = \langle 1, 0, - 2, 2 \rangle \end{array}
$$

$$
f (x, y, z, s, t) = s \arcsin (x + y) - t ^ {2} \arctan (x - z),
$$

$$
P _ {0} \left(0, \frac {1}{2}, - 1, 1, - 1\right), \mathbf {v} = \langle - 1, 1, 0, 3, 5 \rangle
$$

$$
\begin{array}{l} \text { 52. } f (x, y, z, s, t) = \sin t x + \cos s y - \frac {s t}{z}, P _ {0} \left(\frac {\pi}{4}, \frac {\pi}{6}, 2, 5, 1\right), \\ \mathbf {v} = \langle - 3, 2, - 2, 2, 2 \rangle \end{array}
$$

## 13.6 Tangent Planes and Differentials

![[04e3492af8f3c4638fb427d46889d0f92c3327b49cf1daae36b63d0299df9976.jpg|image]]


FIGURE 13.34 The gradient $\nabla f$ is orthogonal to the velocity vector of every smooth curve in the surface through $P_{0}$ . The velocity vectors at $P_{0}$ therefore lie in a common plane, which we call the tangent plane at $P_{0}$ . 

In single-variable differential calculus, we saw how the derivative defined the tangent line to the graph of a differentiable function at a point on the graph. The tangent line then provided for a linearization of the function at the point. In this section, we will see analogously how the gradient defines the tangent plane to the level surface of a function $w = f(x, y, z)$ at a point on the surface. The tangent plane then provides for a linearization of f at the point and defines the total differential of the function. 

## Tangent Planes and Normal Lines

If $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ is a smooth curve on the level surface $f(x, y, z) = c$ of a differentiable function f, we found in Equation (7) of the last section that 

$$
\frac {d}{d t} f (\mathbf {r} (t)) = \nabla f (\mathbf {r} (t)) \cdot \mathbf {r} ^ {\prime} (t).
$$

Since $f$ is constant along the curve $\mathbf{r}$ , the derivative on the left-hand side of the equation is 0, so the gradient $\nabla f$ is orthogonal to the curve's velocity vector $\mathbf{r}'$ . 

Now let us restrict our attention to the curves that pass through a point $P_{0}$ (Figure 13.34). All the velocity vectors at $P_{0}$ are orthogonal to $\nabla f$ at $P_{0}$ , so the curves' tangent lines all lie in the plane through $P_{0}$ normal to $\nabla f$ . (assuming it is a nonzero vector). We now define this plane. 

![[79adac33b198991bf5f02032aa83298502d367fdd8eb48f6ae91694f804af487.jpg|image]]



FIGURE 13.35 The tangent plane and normal line to this level surface at $P_{0}$ (Example 1).


> ***DEFINITIONS*** The tangent plane to the level surface $f(x, y, z) = c$ of a differentiable function f at a point $P_{0}$ where the gradient is not zero is the plane through $P_{0}$ normal to $\nabla f|_{P_{0}}$ . 

The normal line of the surface at $P_{0}$ is the line through $P_{0}$ parallel to $\nabla f|_{P_{0}}$ . 

The results of Section 11.5 imply that the tangent plane and normal line satisfy the following equations, as long as the gradient at the point $P_{0}$ is not the zero vector. 

Tangent Plane to $f(x,y,z)=c$ at $P_{0}(x_{0},y_{0},z_{0})$ 

$$
f _ {x} (P _ {0}) (x - x _ {0}) + f _ {y} (P _ {0}) (y - y _ {0}) + f _ {z} (P _ {0}) (z - z _ {0}) = 0\tag{1}
$$

Normal Line to $f(x, y, z) = c$ at $P_{0}(x_{0}, y_{0}, z_{0})$ 

$$
x = x _ {0} + f _ {x} (P _ {0}) t, \quad y = y _ {0} + f _ {y} (P _ {0}) t, \quad z = z _ {0} + f _ {z} (P _ {0}) t\tag{2}
$$

## **EXAMPLE 1** Find the tangent plane and normal line of the level surface

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z - 9 = 0 \quad \text { A   circular   paraboloid }
$$

at the point $P_0(1,2,4)$ . 

**Solution** The surface is shown in Figure 13.35. 

The tangent plane is the plane through $P_0$ perpendicular to the gradient of $f$ at $P_0$ . The gradient is 

$$
\left. \nabla f \right| _ {P _ {0}} = (2 x \mathbf {i} + 2 y \mathbf {j} + \mathbf {k}) \Big | _ {(1, 2, 4)} = 2 \mathbf {i} + 4 \mathbf {j} + \mathbf {k}.
$$

The tangent plane is therefore the plane 

$$
2 (x - 1) + 4 (y - 2) + (z - 4) = 0, \quad \text { or } \quad 2 x + 4 y + z = 1 4.
$$

The line normal to the surface at $P_{0}$ is 

$$
x = 1 + 2 t, \quad y = 2 + 4 t, \quad z = 4 + t.
$$

To find an equation for the plane tangent to a smooth surface $z = f(x, y)$ at a point $P_0(x_0, y_0, z_0)$ where $z_0 = f(x_0, y_0)$ , we first observe that the equation $z = f(x, y)$ is equivalent to $f(x, y) - z = 0$ . The surface $z = f(x, y)$ is therefore the zero level surface of the function $F(x, y, z) = f(x, y) - z$ . The partial derivatives of $F$ are 

$$
F _ {x} = \frac {\partial}{\partial x} (f (x, y) - z) = f _ {x} - 0 = f _ {x}
$$

$$
F _ {y} = \frac {\partial}{\partial y} (f (x, y) - z) = f _ {y} - 0 = f _ {y}
$$

$$
F _ {z} = \frac {\partial}{\partial z} (f (x, y) - z) = 0 - 1 = - 1.
$$

The formula 

$$
F _ {x} (P _ {0}) (x - x _ {0}) + F _ {y} (P _ {0}) (y - y _ {0}) + F _ {z} (P _ {0}) (z - z _ {0}) = 0
$$

for the plane tangent to the level surface at $P_{0}$ therefore reduces to 

$$
f _ {x} \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right) + f _ {y} \left(x _ {0}, y _ {0}\right) \left(y - y _ {0}\right) - \left(z - z _ {0}\right) = 0.
$$

![[c1cd870f0ea05af768b2ae82a78d29cc835fb1d4b0d1c7764e408f3dfb662784.jpg|image]]



FIGURE 13.36 This cylinder and plane intersect in an ellipse E (Example 3).


Plane Tangent to a Surface $z = f(x, y)$ at $(x_0, y_0, f(x_0, y_0))$ . The plane tangent to the surface $z = f(x, y)$ of a differentiable function $f$ at the point $P_0(x_0, y_0, z_0) = (x_0, y_0, f(x_0, y_0))$ is $f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) - (z - z_0) = 0.$ (3) 

## **EXAMPLE 2** Find the plane tangent to the surface $z = x \cos y - ye^{x}$ at $(0, 0, 0)$ .

**Solution** We calculate the partial derivatives of $f(x, y) = x \cos y - ye^x$ and use Equation (3): 

$$
f _ {x} (0, 0) = \left(\cos y - y e ^ {x}\right) \Bigg | _ {(0, 0)} = 1 - 0 \cdot 1 = 1
$$

$$
f _ {y} (0, 0) = (- x \sin y - e ^ {x}) \Big | _ {(0, 0)} = 0 - 1 = - 1.
$$

The tangent plane is therefore 

$$
1 \cdot (x - 0) - 1 \cdot (y - 0) - (z - 0) = 0, \quad \text { Eq. } (3)
$$

or 

$$
x - y - z = 0.
$$

## **EXAMPLE 3** The surfaces

$$
f (x, y, z) = x ^ {2} + y ^ {2} - 2 = 0 \quad \text { A   cylinder }
$$

and 

$$
g (x, y, z) = x + z - 4 = 0 \quad \text { A   plane }
$$

meet in an ellipse E (Figure 13.36). Find parametric equations for the line tangent to E at the point $P_{0}(1,1,3)$ . 

**Solution** The tangent line is orthogonal to both $\nabla f$ and $\nabla g$ at $P_{0}$ , and therefore parallel to $v = \nabla f \times \nabla g$ . The components of v and the coordinates of $P_{0}$ give us equations for the line. We have 

$$
\left. \nabla f \right| _ {(1, 1, 3)} = (2 x \mathbf {i} + 2 y \mathbf {j}) \Big | _ {(1, 1, 3)} = 2 \mathbf {i} + 2 \mathbf {j}
$$

$$
\nabla g \big | _ {(1, 1, 3)} = (\mathbf {i} + \mathbf {k}) \bigg | _ {(1, 1, 3)} = \mathbf {i} + \mathbf {k}
$$

$$
\mathbf {v} = (2 \mathbf {i} + 2 \mathbf {j}) \times (\mathbf {i} + \mathbf {k}) = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 2 & 2 & 0 \\ 1 & 0 & 1 \end{array} \right| = 2 \mathbf {i} - 2 \mathbf {j} - 2 \mathbf {k}.
$$

The tangent line to the ellipse of intersection is 

$$
x = 1 + 2 t, \quad y = 1 - 2 t, \quad z = 3 - 2 t.
$$

## Estimating Change in a Specific Direction

The directional derivative plays a role similar to that of an ordinary derivative when we want to estimate how much the value of a function f changes if we move a small distance ds from a point $P_{0}$ to another point nearby. If f were a function of a single variable, we would have 

$$
d f = f ^ {\prime} (P _ {0}) d s. \quad \text { Ordinary   derivative } \times \text { increment }
$$

For a function of two or more variables, we use the formula 

$$
d f = \left(\nabla f \big | _ {P _ {0}} \cdot \mathbf {u}\right) d s,
$$

Directional derivative $\times$ increment 

where u is the direction of the motion away from $P_{0}$ . 

## Estimating the Change in f in a Direction u

To estimate the change in the value of a differentiable function f when we move a small distance ds from a point $P_{0}$ in a particular direction u, use this formula: 

![[503f5d3bb068f4edc27a69d9784c625bcbb83c98e7ecf3521cc3641985c9a3d3.jpg|image]]


## **EXAMPLE 4** Estimate how much the value of

$$
df = \underbrace{\left(\nabla f|_{P_{0}}\cdot\mathbf{u}\right)}_{\substack{\text{Directional}\\ \text{derivative}}}\underbrace{ds}_{\substack{\text{Distance}\\ \text{increment}}}
$$


FIGURE 13.37 As $P(x, y, z)$ moves off the level surface at $P_{0}$ by 0.1 unit directly toward $P_{1}$ , the function f changes value by approximately -0.067 unit (Example 4).


$$
f (x, y, z) = y \sin x + 2 y z
$$

will change if the point $P(x,y,z)$ moves 0.1 unit from $P_0(0,1,0)$ straight toward $P_1(2,2,-2)$ . 

**Solution** We first find the derivative of $f$ at $P_0$ in the direction of the vector $\overline{P_0P_1} = 2\mathbf{i} + \mathbf{j} - 2\mathbf{k}$ . The direction of this vector is 

$$
\mathbf {u} = \frac {\overrightarrow {P _ {0} P _ {1}}}{| \overrightarrow {P _ {0} P _ {1}} |} = \frac {\overrightarrow {P _ {0} P _ {1}}}{3} = \frac {2}{3} \mathbf {i} + \frac {1}{3} \mathbf {j} - \frac {2}{3} \mathbf {k}.
$$

The gradient of $f$ at $P_0$ is 

$$
\left. \nabla f \right| _ {(0, 1, 0)} = \left((y \cos x) \mathbf {i} + (\sin x + 2 z) \mathbf {j} + 2 y \mathbf {k}\right) \Big | _ {(0, 1, 0)} = \mathbf {i} + 2 \mathbf {k}.
$$

Therefore, 

$$
\left. \nabla f \right| _ {P _ {0}} \cdot \mathbf {u} = (\mathbf {i} + 2 \mathbf {k}) \cdot \left(\frac {2}{3} \mathbf {i} + \frac {1}{3} \mathbf {j} - \frac {2}{3} \mathbf {k}\right) = \frac {2}{3} - \frac {4}{3} = - \frac {2}{3}.
$$

The change df in f that results from moving ds = 0.1 unit away from $P_{0}$ in the direction of u is approximately 

$$
d f = \left(\nabla f \right| _ {P _ {0}} \cdot \mathbf {u}) (d s) = \left(- \frac {2}{3}\right) (0. 1) \approx - 0. 0 6 7 \text {   unit. }
$$

See Figure 13.37. 

## How to Linearize a Function of Two Variables

Functions of two variables can be quite complicated, and we sometimes need to approximate them with simpler ones that give the accuracy required for specific applications without being so difficult to work with. We do this in a way that is similar to the way we find linear replacements for functions of a single variable (Section 3.11). 

![[04be041489fb3a14cb0a711c36e7d0e8318ff92fd37682aa26d3d842a929463d.jpg|image]]



FIGURE 13.38 If f is differentiable at $(x_{0}, y_{0})$ , then the value of f at point $(x, y)$ nearby is approximately $f(x_{0}, y_{0}) + f_{x}(x_{0}, y_{0})\Delta x + f_{y}(x_{0}, y_{0})\Delta y$ .


![[3c5ac9563f354b73beeca80338a3608d2aba04be1092ff06ae2206a1c1986766.jpg|image]]



FIGURE 13.39 The tangent plane $L(x,y)$ represents the linearization of $f(x,y)$ in Example 5.


Suppose the function we wish to approximate is $z = f(x, y)$ near a point $(x_{0}, y_{0})$ at which we know the values of $f, f_{x}$ , and $f_{y}$ and at which f is differentiable. If we move from $(x_{0}, y_{0})$ to a nearby point $(x, y)$ by increments $\Delta x = x - x_{0}$ and $\Delta y = y - y_{0}$ (see Figure 13.38), then the definition of differentiability from Section 13.3 shows that the change 

$$
f (x, y) - f \left(x _ {0}, y _ {0}\right) = f _ {x} \left(x _ {0}, y _ {0}\right) \Delta x + f _ {y} \left(x _ {0}, y _ {0}\right) \Delta y + \varepsilon_ {1} \Delta x + \varepsilon_ {2} \Delta y,
$$

where $\varepsilon_1, \varepsilon_2 \to 0$ as $\Delta x, \Delta y \to 0$ . If the increments $\Delta x$ and $\Delta y$ are small, the products $\varepsilon_1 \Delta x$ and $\varepsilon_2 \Delta y$ will eventually be smaller still, and we have the approximation 

$$
f (x, y) \approx \underbrace {f (x _ {0} , y _ {0}) + f _ {x} (x _ {0} , y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0} , y _ {0}) (y - y _ {0})} _ {L (x, y)}.
$$

In other words, as long as $\Delta x$ and $\Delta y$ are small, $f$ will have approximately the same value as the linear function $L$ . 

> ***DEFINITIONS*** The linearization of a function $f(x, y)$ at a point $(x_0, y_0)$ where $f$ is differentiable is the function 
>
> $$
> L (x, y) = f \left(x _ {0}, y _ {0}\right) + f _ {x} \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right) + f _ {y} \left(x _ {0}, y _ {0}\right) \left(y - y _ {0}\right).
> $$
>
The approximation 

$$
f (x, y) \approx L (x, y)
$$

is the standard linear approximation of $f$ at $(x_0, y_0)$ . 

From Equation (3), we find that the plane $z = L(x, y)$ is tangent to the surface $z = f(x, y)$ at the point $(x_{0}, y_{0})$ . Thus, the linearization of a function of two variables is a tangent-plane approximation in the same way that the linearization of a function of a single variable is a tangent-line approximation. (See Exercise 57.) 

## **EXAMPLE 5** Find the linearization of

$$
f (x, y) = x ^ {2} - x y + \frac {1}{2} y ^ {2} + 3
$$

at the point (3, 2). 

**Solution** We first evaluate $f, f_{x}$ , and $f_{y}$ at the point $(x_{0}, y_{0}) = (3, 2)$ : 

$$
f (3, 2) = \left(x ^ {2} - x y + \frac {1}{2} y ^ {2} + 3\right) \Big | _ {(3, 2)} = 8
$$

$$
f _ {x} (3, 2) = \frac {\partial}{\partial x} \left(x ^ {2} - x y + \frac {1}{2} y ^ {2} + 3\right) \Big | _ {(3, 2)} = (2 x - y) \Big | _ {(3, 2)} = 4
$$

$$
f _ {y} (3, 2) = \frac {\partial}{\partial y} \left(x ^ {2} - x y + \frac {1}{2} y ^ {2} + 3\right) \Big | _ {(3, 2)} = (- x + y) \Big | _ {(3, 2)} = - 1,
$$

which yields 

$$
\begin{array}{c} L (x, y) = f (x _ {0}, y _ {0}) + f _ {x} (x _ {0}, y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0}, y _ {0}) (y - y _ {0}) \\ = 8 + (4) (x - 3) + (- 1) (y - 2) = 4 x - y - 2. \end{array}
$$

The linearization of $f$ at (3, 2) is $L(x, y) = 4x - y - 2$ (see Figure 13.39). 

![[df6fd1b34067c7e16769bb547da6ce0d0fe5b97146befcc903b0feda8ec58d12.jpg|image]]



FIGURE 13.40 The rectangular region $R$ : $|x - x_0| \leq h, |y - y_0| \leq k$ in the xy-plane.


When we approximate a differentiable function $f(x, y)$ by its linearization $L(x, y)$ at $(x_0, y_0)$ , an important question is how accurate the approximation might be. 

If we can find a common upper bound M for $|f_{xx}|$ , $|f_{yy}|$ , and $|f_{xy}|$ on a rectangle R centered at $(x_{0}, y_{0})$ (Figure 13.40), then we can bound the error E throughout R by using a simple formula. The error is defined by $E(x, y) = f(x, y) - L(x, y)$ . 

## The Error in the Standard Linear Approximation

If $f$ has continuous first and second partial derivatives throughout an open set containing a rectangle $R$ centered at $(x_0, y_0)$ , and if $M$ is any upper bound for the values of $|f_{xx}|, |f_{yy}|$ , and $|f_{xy}|$ on $R$ , then the error $E(x, y)$ incurred in replacing $f(x, y)$ on $R$ by its linearization 

$$
L (x, y) = f \left(x _ {0}, y _ {0}\right) + f _ {x} \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right) + f _ {y} \left(x _ {0}, y _ {0}\right) \left(y - y _ {0}\right)
$$

satisfies the inequality 

$$
\left| E (x, y) \right| \leq \frac {1}{2} M \left(\left| x - x _ {0} \right| + \left| y - y _ {0} \right|\right) ^ {2}.
$$

To make $|E(x,y)|$ small for a given $M$ , we just make $|x - x_0|$ and $|y - y_0|$ small. 

## Differentials

Recall from Section 3.11 that for a function of a single variable, $y = f(x)$ , we defined the change in f as x changes from a to $a + \Delta x$ by 

$$
\Delta f = f (a + \Delta x) - f (a)
$$

and the differential of $f$ as 

$$
d f = f ^ {\prime} (a) \Delta x.
$$

We now consider the differential of a function of two variables. 

Suppose a differentiable function $f(x, y)$ and its partial derivatives exist at a point $(x_{0}, y_{0})$ . If we move to a nearby point $(x_{0} + \Delta x, y_{0} + \Delta y)$ , the change in f is 

$$
\Delta f = f (x _ {0} + \Delta x, y _ {0} + \Delta y) - f (x _ {0}, y _ {0}).
$$

A straightforward calculation based on the definition of $L(x, y)$ , using the notation $x - x_0 = \Delta x$ and $y - y_0 = \Delta y$ , shows that the corresponding change in $L$ is 

$$
\Delta L = L \left(x _ {0} + \Delta x, y _ {0} + \Delta y\right) - L \left(x _ {0}, y _ {0}\right) = f _ {x} \left(x _ {0}, y _ {0}\right) \Delta x + f _ {y} \left(x _ {0}, y _ {0}\right) \Delta y.
$$

The differentials dx and dy are independent variables, so they can be assigned any values. Often we take $dx = \Delta x = x - x_{0}$ , and $dy = \Delta y = y - y_{0}$ . We then have the following definition of the differential or total differential of f. 

> ***DEFINITION*** If we move from $(x_{0}, y_{0})$ to a point $(x_{0} + dx, y_{0} + dy)$ nearby, the resulting change 
>
> $$
> d f = f _ {x} \left(x _ {0}, y _ {0}\right) d x + f _ {y} \left(x _ {0}, y _ {0}\right) d y
> $$
>
in the linearization of f is called the total differential of f. 

![[387530d94a1ccb94c155351ed0a2fce7fd0d39a32bc131d09b2af3916ccf81c2.jpg|image]]


**EXAMPLE 6** Suppose that a cylindrical can is designed to have a radius of 1 cm and a height of 5 cm, but that the radius and height are off by the amounts dr = +0.03 and dh = -0.1. Estimate the resulting absolute change in the volume of the can. 

**Solution** To estimate the absolute change in $V = \pi r^{2}h$ , we use 

$$
\Delta V \approx d V = V _ {r} (r _ {0}, h _ {0}) d r + V _ {h} (r _ {0}, h _ {0}) d h.
$$

With $V_{r} = 2\pi rh$ and $V_{h} = \pi r^{2}$ , we get 

$$
\begin{array}{r l} d V & = 2 \pi r _ {0} h _ {0} d r + \pi r _ {0} ^ {2} d h = 2 \pi (1) (5) (0. 0 3) + \pi (1) ^ {2} (- 0. 1) \\ & = 0. 3 \pi - 0. 1 \pi = 0. 2 \pi \approx 0. 6 3 \mathrm{cm} ^ {3}. \end{array}
$$

**EXAMPLE 7** Your company manufactures stainless steel right circular cylindrical molasses storage tanks that are 2.5 m high with a radius of 0.5 m. How sensitive are the tanks' volumes to small variations in height and radius? 

**Solution** With $V = \pi r^{2}h$ , the total differential gives the approximation for the change in volume as 


FIGURE 13.41 The volume of cylinder (a) is more sensitive to a small change in r than it is to an equally small change in h. The volume of cylinder (b) is more sensitive to small changes in h than it is to small changes in r (Example 7).


$$
\begin{array}{l} d V = V _ {r} (0. 5, 2. 5) d r + V _ {h} (0. 5, 2. 5) d h \\ \quad = (2 \pi r h) \Big | _ {(0. 5, 2. 5)} d r + (\pi r ^ {2}) \Big | _ {(0. 5, 2. 5)} d h \\ \quad = 2. 5 \pi d r + 0. 2 5 \pi d h. \end{array}
$$

Thus, a 1-unit change in $r$ will change $V$ by about $2.5\pi$ units. A 1-unit change in $h$ will change $V$ by about $0.25\pi$ units. The tank's volume is 10 times more sensitive to a small change in $r$ than it is to a small change of equal size in $h$ . As a quality control engineer concerned with being sure the tanks have the correct volume, you would want to pay special attention to their radii. 

In contrast, if the values of $r$ and $h$ are reversed to make $r = 2.5$ and $h = 0.5$ , then the total differential in $V$ becomes 

$$
d V = (2 \pi r h) \bigg | _ {(2. 5, 0. 5)} d r + (\pi r ^ {2}) \bigg | _ {(2. 5, 0. 5)} d h = 2. 5 \pi d r + 6. 2 5 \pi d h.
$$

Now the volume is more sensitive to changes in h than to changes in r (Figure 13.41). 

The general rule is that functions are most sensitive to small changes in the variables that generate the largest partial derivatives. 

## Functions of More Than Two Variables

Analogous results hold for differentiable functions of more than two variables. 

1. The linearization of $f(x, y, z)$ at a point $P_{0}(x_{0}, y_{0}, z_{0})$ is 

$$
L (x, y, z) = f \left(P _ {0}\right) + f _ {x} \left(P _ {0}\right) \left(x - x _ {0}\right) + f _ {y} \left(P _ {0}\right) \left(y - y _ {0}\right) + f _ {z} \left(P _ {0}\right) \left(z - z _ {0}\right).
$$

2. Suppose that $R$ is a closed rectangular solid centered at $P_0$ and lying in an open region on which the second partial derivatives of $f$ are continuous. Suppose also that $|f_{xx}|, |f_{yy}|, |f_{zz}|, |f_{xy}|, |f_{xz}|$ , and $|f_{yz}|$ are all less than or equal to $M$ throughout $R$ . Then the error $E(x,y,z) = f(x,y,z) - L(x,y,z)$ in the approximation of $f$ by $L$ is bounded throughout $R$ by the inequality 

$$
| E | \leq \frac {1}{2} M (| x - x _ {0} | + | y - y _ {0} | + | z - z _ {0} |) ^ {2}.
$$

3. If the second partial derivatives of $f$ are continuous and if $x, y,$ and $z$ change from $x_0, y_0$ , and $z_0$ by small amounts $dx, dy$ , and $dz$ , the total differential 

$$
d f = f _ {x} (P _ {0}) d x + f _ {y} (P _ {0}) d y + f _ {z} (P _ {0}) d z
$$

gives a good approximation of the resulting change in f. 

**EXAMPLE 8** Find the linearization $L(x, y, z)$ of 

$$
f (x, y, z) = x ^ {2} - x y + 3 \sin z
$$

at the point $(x_{0}, y_{0}, z_{0}) = (2, 1, 0)$ . Find an upper bound for the error incurred in replacing f by L on the rectangular region 

$$
R: | x - 2 | \leq 0. 0 1, \quad | y - 1 | \leq 0. 0 2, \quad | z | \leq 0. 0 1.
$$

**Solution** Routine calculations give 

$$
f (2, 1, 0) = 2, \quad f _ {x} (2, 1, 0) = 3, \quad f _ {y} (2, 1, 0) = - 2, \quad f _ {z} (2, 1, 0) = 3.
$$

Thus, 

$$
L (x, y, z) = 2 + 3 (x - 2) + (- 2) (y - 1) + 3 (z - 0) = 3 x - 2 y + 3 z - 2.
$$

Since 

$$
f _ {x x} = 2, \quad f _ {y y} = 0, \quad f _ {z z} = - 3 \sin z, \quad f _ {x y} = - 1, \quad f _ {x z} = 0, \quad f _ {y z} = 0,
$$

and $|-3\sin z| \leq 3\sin 0.01 \approx 0.03$ , we may take $M = 2$ as a bound on the second partials. Hence, the error incurred by replacing $f$ by $L$ on $R$ satisfies 

$$
| E | \leq \frac {1}{2} (2) (0. 0 1 + 0. 0 2 + 0. 0 1) ^ {2} = 0. 0 0 1 6.
$$

## EXERCISES 13.6

Tangent Planes and Normal Lines to Surfaces In Exercises 1–10, find equations for the 

(a) tangent plane and 

(b) normal line at the point $P_{0}$ on the given surface. 

$$
x ^ {2} + y ^ {2} + z ^ {2} = 3, \quad P _ {0} (1, 1, 1)
$$

2. $x^{2} + y^{2} - z^{2} = 18,\quad P_{0}(3,5,-4)$ 

3. $2z - x^{2} = 0, P_{0}(2,0,2)$ 

4. $x^{2} + 2xy - y^{2} + z^{2} = 7,\quad P_{0}(1,-1,3)$ 

5. $\cos\pi x - x^{2}y + e^{xz} + yz = 4,\quad P_{0}(0,1,2)$ 

$$
x ^ {2} - x y - y ^ {2} - z = 0, \quad P _ {0} (1, 1, - 1)
$$

7. $x + y + z = 1,\quad P_{0}(0,1,0)$ 

$$
x ^ {2} + y ^ {2} - 2 x y - x + 3 y - z = - 4, \quad P _ {0} (2, - 3, 1 8)
$$

9. $x \ln y + y \ln z = x,\quad P_{0}(1,1,e)$ 

10. $ye^{x} + ze^{y^{2}} = z, P_{0}(0,0,1)$ 

In Exercises 11–14, find an equation for the plane that is tangent to the given surface at the given point. 

11. $z = \ln(x^{2} + y^{2}), (1,0,0)$ 

12. $z = e^{-(x^{2} + y^{2})}, (0,0,1)$ 

13. $z = \sqrt{y - x}$ , (1,2,1) 

14. $z = 4x^{2} + y^{2}, (1,1,5)$ 

Tangent Lines to Intersecting Surfaces 

In Exercises 15–20, find parametric equations for the line tangent to the curve of intersection of the surfaces at the given point. 

$$
x + y ^ {2} + 2 z = 4, \quad x = 1
$$

16. Surfaces: $xyz = 1$ , $x^2 + 2y^2 + 3z^2 = 6$ Point: (1,1,1) 

17. Surfaces: $x^{2} + 2y + 2z = 4$ , $y = 1$ Point: (1,1,1/2) 

18. Surfaces: $x + y^{2} + z = 2$ , $y = 1$ Point: (1/2, 1, 1/2) 

19. Surfaces: $x^{3} + 3x^{2}y^{2} + y^{3} + 4xy - z^{2} = 0$ , $x^{2} + y^{2} + z^{2} = 11$ Point: (1,1,3) 

20. Surfaces: $x^{2} + y^{2} = 4$ , $x^{2} + y^{2} - z = 0$ Point: $(\sqrt{2},\sqrt{2},4)$ 

## Estimating Change

21. By about how much will 

$$
f (x, y, z) = \ln \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}
$$

change if the point $P(x, y, z)$ moves from $P_0(3, 4, 12)$ a distance of $ds = 0.1$ unit in the direction of $3\mathbf{i} + 6\mathbf{j} - 2\mathbf{k}$ ? 

22. By about how much will 

$$
f (x, y, z) = e ^ {x} \cos y z
$$

change as the point $P(x, y, z)$ moves from the origin a distance of ds = 0.1 unit in the direction of $2i + 2j - 2k$ ? 

23. By about how much will 

$$
g (x, y, z) = x + x \cos z - y \sin z + y
$$

change if the point $P(x, y, z)$ moves from $P_0(2, -1, 0)$ a distance of $ds = 0.2$ unit toward the point $P_1(0, 1, 2)$ ? 

24. By about how much will 

$$
h (x, y, z) = \cos (\pi x y) + x z ^ {2}
$$

change if the point $P(x,y,z)$ moves from $P_{0}(-1,-1,-1)$ a distance of ds = 0.1 unit toward the origin? 

25. Temperature change along a circle Suppose that the Celsius temperature at the point $(x, y)$ in the xy-plane is $T(x, y) = x \sin 2y$ and that distance in the xy-plane is measured in meters. A particle is moving clockwise around the circle of radius 1 m centered at the origin at the constant rate of 2 m/s. 

a. How fast is the temperature experienced by the particle changing in degrees Celsius per meter at the point $P(1/2, \sqrt{3}/2)$ ? 

b. How fast is the temperature experienced by the particle changing in degrees Celsius per second at P? 

26. Changing temperature along a space curve The Celsius temperature in a region in space is given by $T(x, y, z) = 2x^{2} - xyz$ . A particle is moving in this region and its position at time t is given by $x = 2t^{2}$ , y = 3t, $z = -t^{2}$ , where time is measured in seconds and distance in meters. 

a. How fast is the temperature experienced by the particle changing in degrees Celsius per meter when the particle is at the point $P(8,6,-4)$ ? 

b. How fast is the temperature experienced by the particle changing in degrees Celsius per second at P? 

## Finding Linearizations

In Exercises 27–32, find the linearization $L(x, y)$ of the function at each point. 

27. $f(x, y) = x^2 + y^2 + 1$ at a. (0, 0), b. (1, 1) 

28. $f(x,y)=(x+y+2)^{2}$ at a. $(0,0)$ , b. $(1,2)$ 

29. $f(x, y) = 3x - 4y + 5$ at a. (0, 0), b. (1, 1) 

30. $f(x,y) = x^{3}y^{4}$ at a. $(1,1)$ , b. $(0,0)$ 

31. $f(x, y) = e^{x} \cos y$ at a. (0, 0), b. (0, π/2) 

32. $f(x,y) = e^{2y - x}$ at a. $(0,0)$ , b. $(1,2)$ 

33. Wind chill factor Wind chill, a measure of the apparent temperature felt on exposed skin, is a function of air temperature and wind speed. The precise formula, updated by the National Weather Service in 2001 and based on modern heat transfer theory, a human face model, and skin tissue resistance, is (after unit conversion) 

$$
\begin{array}{c} W = W (v, T) = 1 3. 1 3 + 0. 6 2 1 5 T - 1 1. 3 6 v ^ {0. 1 6} \\ \qquad + 0. 3 9 6 T \cdot v ^ {0. 1 6}, \end{array}
$$

where T is air temperature in ${}^{\circ}$ C and v is wind speed in km/h. A partial wind chill chart is given. 


$T(^{\circ}\mathrm{C})$


<table><tr><td></td><td>5</td><td>0</td><td>-5</td><td>-10</td><td>-15</td><td>-20</td><td>-25</td></tr><tr><td rowspan="6"><eq>v</eq>(km/h)</td><td>10</td><td>2.7</td><td>-3.3</td><td>-9.3</td><td>-15.2</td><td>-21.2</td><td>-27.2</td></tr><tr><td>20</td><td>1.1</td><td>-5.2</td><td>-11.5</td><td>-17.8</td><td>-24.1</td><td>-30.4</td></tr><tr><td>30</td><td>0.1</td><td>-6.4</td><td>-13.0</td><td>-19.5</td><td>-26.0</td><td>-32.5</td></tr><tr><td>40</td><td>-0.7</td><td>-7.4</td><td>-14.0</td><td>-20.7</td><td>-27.4</td><td>-34.1</td></tr><tr><td>50</td><td>-1.3</td><td>-8.1</td><td>-14.9</td><td>-21.7</td><td>-28.5</td><td>-35.4</td></tr><tr><td>60</td><td>-1.8</td><td>-8.7</td><td>-15.7</td><td>-22.6</td><td>-29.5</td><td>-36.4</td></tr></table>

a. Use the table to find $W(30, -5)$ , $W(50, -25)$ , and $W(30, -10)$ . 

b. Use the formula to find $W(15,-40)$ , $W(80,-40)$ , and $W(90,0)$ . 

c. Find the linearization $L(v,T)$ of the function $W(v,T)$ at the point $(40,-10)$ . 

d. Use $L(v, T)$ in part (c) to estimate the following wind chill values.
i) $W(39, -9)$ ii) $W(42, -12)$ 

iii) $W(10, -25)$ (Explain why this value is much different from the value found in the table.) 

34. Find the linearization $L(v,T)$ of the function $W(v,T)$ in Exercise 31 at the point $(50,-20)$ . Use it to estimate the following wind chill values. 

a. $W(49,-22)$ 

b. $W(53,-19)$ 

c. $W(60,-30)$ 

## Bounding the Error in Linear Approximations

In Exercises 35–40, find the linearization $L(x,y)$ of the function $f(x,y)$ at $P_{0}$ . Then find an upper bound for the magnitude $|E|$ of the error in the approximation $f(x,y) \approx L(x,y)$ over the rectangle R. 

35. $f(x,y)=x^{2}-3xy+5$ at $P_{0}(2,1)$ , 

$$
R \colon | x - 2 | \leq 0. 1, | y - 1 | \leq 0. 1
$$

36. $f(x,y)=(1/2)x^{2}+xy+(1/4)y^{2}+3x-3y+4$ at $P_{0}(2,2)$ ,
R: $|x - 2| \leq 0.1$ , $|y - 2| \leq 0.1$ 

37. $f(x,y)=1+y+x\cos y$ at $P_{0}(0,0)$ , 

$$
R \colon | x | \leq 0. 2, | y | \leq 0. 2
$$

(Use $|\cos y| \leq 1$ and $|\sin y| \leq 1$ in estimating $E$ .) 

38. $f(x,y)=xy^{2}+y\cos(x-1)$ at $P_{0}(1,2)$ , 

$$
R \colon | x - 1 | \leq 0. 1, | y - 2 | \leq 0. 1
$$

39. $f(x,y)=e^{x}\cos y$ at $P_{0}(0,0)$ , 

(Use $e^x \leq 1.11$ and $|\cos y| \leq 1$ in estimating $E$ .) 

40. $f(x,y)=\ln x+\ln y$ at $P_{0}(1,1)$ , 

$$
R: | x - 1 | \leq 0. 2, | y - 1 | \leq 0. 2
$$

## Linearizations for Three Variables

Find the linearizations $L(x, y, z)$ of the functions in Exercises 41–46 at the given points. 

41. $f(x,y,z) = xy + yz + xz$ at a. $(1,1,1)$ b. $(1,0,0)$ 

c. $(0,0,0)$ 

42. $f(x,y,z) = x^{2} + y^{2} + z^{2}$ at a. $(1,1,1)$ b. $(0,1,0)$ 

c. $(1,0,0)$ 

43. $f(x,y,z) = \sqrt{x^2 + y^2 + z^2}$ at a. $(1,0,0)$ b. $(1,1,0)$ c. $(1,2,2)$ 

44. $f(x,y,z) = (\sin xy) / z$ at a. $(\pi /2,1,1)$ b. $(2,0,1)$ 

45. $f(x,y,z) = e^{x} + \cos (y + z)$ at a. $(0,0,0)$ b. $\left(0,\frac{\pi}{2},0\right)$ c. $\left(0,\frac{\pi}{4},\frac{\pi}{4}\right)$ 

46. $f(x,y,z) = \tan^{-1}(xyz)$ at a. $(1,0,0)$ b. $(1,1,0)$ c. $(1,1,1)$ 

In Exercises 47–50, find the linearization $L(x, y, z)$ of the function $f(x, y, z)$ at $P_{0}$ . Then find an upper bound for the magnitude of the error E in the approximation $f(x, y, z) \approx L(x, y, z)$ over the region R. 

47. $f(x,y,z) = xz - 3yz + 2$ at $P_{0}(1,1,2)$ , 

$$
R: | x - 1 | \leq 0. 0 1, | y - 1 | \leq 0. 0 1, | z - 2 | \leq 0. 0 2
$$

$$
f (x, y, z) = x ^ {2} + x y + y z + (1 / 4) z ^ {2} \quad \text { at } \quad P _ {0} (1, 1, 2),
$$

R: $|x - 1| \leq 0.01, |y - 1| \leq 0.01, |z - 2| \leq 0.08$ 

49. $f(x,y,z)=xy+2yz-3xz$ at $P_{0}(1,1,0)$ , 

50. $f(x,y,z)=\sqrt{2}\cos x\sin(y+z)$ at $P_{0}(0,0,\pi/4)$ , 

$R: |x| \leq 0.01, |y| \leq 0.01, |z - \pi / 4| \leq 0.01$ 

## Estimating Error; Sensitivity to Change

51. Estimating maximum error Suppose that $T$ is to be found from the formula $T = x(e^{y} + e^{-y})$ , where $x$ and $y$ are found to be 2 and $\ln 2$ with maximum possible errors of $|dx| = 0.1$ and $|dy| = 0.02$ . Estimate the maximum possible error in the computed value of $T$ . 

52. Variation in electrical resistance The resistance R produced by wiring resistors of $R_{1}$ and $R_{2}$ ohms in parallel (see accompanying figure) can be calculated from the formula 

$$
\frac {1}{R} = \frac {1}{R _ {1}} + \frac {1}{R _ {2}}.
$$

a. Show that 

$$
d R = \left(\frac {R}{R _ {1}}\right) ^ {2} d R _ {1} + \left(\frac {R}{R _ {2}}\right) ^ {2} d R _ {2}.
$$

b. You have designed a two-resistor circuit, like the one shown, to have resistances of $R_{1} = 100$ ohms and $R_{2} = 400$ ohms, but there is always some variation in manufacturing, and the resistors received by your firm will probably not have these exact values. Will the value of R be more sensitive to variation in $R_{1}$ or to variation in $R_{2}$ ? Give reasons for your answer. 

![[668bbf398f337b11c7f8bdede0fff8124b08f419bc3685f4ab2bb9e345816baa.jpg|image]]


c. In another circuit like the one shown, you plan to change $R_{1}$ from 20 to 20.1 ohms and $R_{2}$ from 25 to 24.9 ohms. By about what percentage will this change R? 

53. You plan to calculate the area of a long, thin rectangle from measurements of its length and width. Which dimension should you measure more carefully? Give reasons for your answer. 

54. a. Around the point $(1,0)$ , is $f(x,y)=x^{2}(y+1)$ more sensitive to changes in x or to changes in y? Give reasons for your answer. 

b. What ratio of dx to dy will make df equal zero at $(1,0)$ ? 

55. Value of a $2 \times 2$ determinant If $|a|$ is much greater than $|b|, |c|$ , and $|d|$ , to which of $a, b, c$ , and $d$ is the value of the determinant 

$$
f (a, b, c, d) = \left| \begin{array}{c c} a & b \\ c & d \end{array} \right|
$$

most sensitive? Give reasons for your answer. 

56. The Wilson lot size formula The Wilson lot size formula in economics says that the most economical quantity Q of goods (radios, shoes, brooms, whatever) for a store to order is given by the formula $Q = \sqrt{2KM/h}$ , where K is the cost of placing the order, M is the number of items sold per week, and h is the weekly holding cost for each item (cost of space, utilities, security, and so on). To which of the variables K, M, and h is Q most sensitive near the point $(K_{0}, M_{0}, h_{0}) = (2, 20, 0.05)$ ? Give reasons for your answer. 

## Theory and Examples

57. The linearization of $f(x, y)$ is a tangent-plane approximation. Show that the tangent plane at the point $P_0(x_0, y_0, f(x_0, y_0))$ on the surface $z = f(x, y)$ defined by a differentiable function $f$ is the plane 

$$
f _ {x} (x _ {0}, y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0}, y _ {0}) (y - y _ {0}) - (z - f (x _ {0}, y _ {0})) = 0,
$$

or 

$$
z = f (x _ {0}, y _ {0}) + f _ {x} (x _ {0}, y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0}, y _ {0}) (y - y _ {0}).
$$

Thus, the tangent plane at $P_{0}$ is the graph of the linearization of f at $P_{0}$ (see accompanying figure). 

![[d0c8680dbefbe83f6bffab66baad1e1b390524a3c76dc52b6e5e6e405df2e8ca.jpg|image]]


58. Change along the involute of a circle Find the derivative of $f(x,y) = x^{2} + y^{2}$ in the direction of the unit tangent vector of the curve 

$$
\mathbf {r} (t) = (\cos t + t \sin t) \mathbf {i} + (\sin t - t \cos t) \mathbf {j}, \quad t > 0.
$$

59. Tangent curves A smooth curve is tangent to the surface at a point of intersection if its velocity vector is orthogonal to $\nabla f$ there. Show that the curve 

$$
\mathbf {r} (t) = \sqrt {t} \mathbf {i} + \sqrt {t} \mathbf {j} + (2 t - 1) \mathbf {k}
$$

is tangent to the surface $x^{2} + y^{2} - z = 1$ when $t = 1$ . 

60. Normal curves A smooth curve is normal to a surface $f(x,y,z) = c$ at a point of intersection if the curve's velocity vector is a nonzero scalar multiple of $\nabla f$ at the point. 

Show that the curve 

$$
\mathbf {r} (t) = \sqrt {t} \mathbf {i} + \sqrt {t} \mathbf {j} - \frac {1}{4} (t + 3) \mathbf {k}
$$

is normal to the surface $x^{2} + y^{2} - z = 3$ when t = 1. 

61. Consider a closed rectangular box with a square base, as shown in the figure. Assume x is measured with an error of at most 0.5% and y is measured with an error of at most 0.75%, so we have $|dx|/x < 0.005$ and $|dy|/y < 0.0075$ . 

![[2084c512475181701494d2492bbbf614bfbe6bb63672aa53a2a16a901b38ec7c.jpg|image]]


a. Use a differential to estimate the relative error $|dV| / V$ in computing the box's volume $V$ . 

b. Use a differential to estimate the relative error $|dS| / S$ in computing the box's surface area $S$ . 

$$
\begin{array}{l} \text {Hint for b:} \frac {4 x ^ {2} + 4 x y}{2 x ^ {2} + 4 x y} \leq \frac {4 x ^ {2} + 8 x y}{2 x ^ {2} + 4 x y} = 2 \quad \text {and} \\ \frac {4 x y}{2 x ^ {2} + 4 x y} \leq \frac {2 x ^ {2} + 4 x y}{2 x ^ {2} + 4 x y} = 1. \end{array}
$$

## 13.7 Extreme Values and Saddle Points

HISTORICAL BIOGRAPHY 

Siméon-Denis Poisson 

(1781-1840) 

French mathematician Poisson studied with Lagrange and Laplace at the École polytechnique.and did so well that he was made an assistant professor upon his graduation. In 1806, he replaced Fourier as the professor of mathematics. Poisson's early work in mechanics appeared in his first volume of $Traité \ de \ mécanique$ (1811), where he applied mathematics to applications in physics and mechanics, including elasticity and vibrations. 

To know more, visit the companion Website. 

![[5220118320b3e7d0af03fd611310a67b8452db6a38c125ac3995781ba61eeb0b.jpg|image]]


FIGURE 13.42 The function 

$$
z = (\cos x) (\cos y) e ^ {- \sqrt {x ^ {2} + y ^ {2}}}
$$

has a maximum value of 1 and a minimum value of about -0.067 on the square region $|x| \leq 3\pi/2$ , $|y| \leq 3\pi/2$ . 

Continuous functions of two variables assume extreme values on closed, bounded domains (see Figures 13.42 and 13.43). We see in this section that we can narrow the search for these extreme values by examining the functions' first partial derivatives. A function of two variables can assume extreme values only at boundary points of the domain or at interior domain points where both first partial derivatives are zero or where one or both of the first partial derivatives fail to exist. However, the vanishing of derivatives at an interior point $(a,b)$ does not always signal the presence of an extreme value. The surface that is the graph of the function might be shaped like a saddle right above $(a,b)$ and cross its tangent plane there. 

## Local Extreme Values for Functions of Two Variables

To find the local extreme values of a function of a single variable, we look for points where the graph has a horizontal tangent line. At such points, we then look for local maxima, local minima, and points of inflection. For a function $f(x,y)$ of two variables, we look for points where the surface $z = f(x,y)$ has a horizontal tangent plane. At such points, we then look for local maxima, local minima, and saddle points. We begin by defining maxima and minima. 

> ***DEFINITIONS*** Let $f(x, y)$ be defined on a region $R$ containing the point $(a, b)$ . Then 
>
> 1. $f(a, b)$ is a local maximum value of f if $f(a, b) \geq f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$ . $f(a, b)$ is an absolute maximum value of f on R if $f(a, b) \geq f(x, y)$ for all domain points $(x, y)$ in R. 
>
> 2. $f(a, b)$ is a local minimum value of f if $f(a, b) \leq f(x, y)$ for all domain points $(x, y)$ in an open disk centered at $(a, b)$ . $f(a, b)$ is an absolute minimum value of f on R if $f(a, b) \leq f(x, y)$ for all domain points $(x, y)$ in R. 
>
>
FIGURE 13.43 The “roof surface” $z = \frac{1}{2}(|x| - |y| - |x| - |y|)$


![[b8b054282439f89afd1bc0ce7e59a2ea732ae1169b32ce913786a77be35f1b1b.jpg|image]]



has a maximum value of 0 and a minimum value of -a on the square region $|x| \leq a$ , $|y| \leq a$ .


![[d1beebfe4e1cbda905cb133a9197b7b5a82d436e11ea9875ef932358146dbc84.jpg|image]]



FIGURE 13.45 If a local maximum of f occurs at x = a, y = b, then the first partial derivatives $f_{x}(a,b)$ and $f_{y}(a,b)$ are both zero.


Local maxima correspond to mountain peaks on the surface $z = f(x, y)$ , and local minima correspond to valley bottoms (Figure 13.44). At such points the tangent planes, when they exist, are horizontal. Local extrema are also called relative extrema. 

As with functions of a single variable, the key to identifying the local extrema is the First Derivative Theorem, which we next state and prove. 

![[da5f75424f50e566dee221082af1d19cccd0f69c4171e04a28f86f4f6b25ed0a.jpg|image]]



FIGURE 13.44 A local maximum occurs at a mountain peak, and a local minimum occurs at a valley low point.


THEOREM 10—First Derivative Theorem for Local Extreme Values
If $f(x, y)$ has a local maximum or minimum value at an interior point $(a, b)$ of its domain and if the first partial derivatives exist there, then $f_{x}(a, b) = 0$ and $f_{y}(a, b) = 0$ . 

Proof If $f$ has a local extremum at $(a, b)$ , then the function $g(x) = f(x, b)$ has a local extremum at $x = a$ (Figure 13.45). Therefore, $g'(a) = 0$ (Chapter 4, Theorem 2). Now $g'(a) = f_x(a, b)$ , so $f_x(a, b) = 0$ . A similar argument with the function $h(y) = f(a, y)$ shows that $f_y(a, b) = 0$ . 

If we substitute the values $f_{x}(a,b) = 0$ and $f_{y}(a,b) = 0$ into the equation 

$$
f _ {x} (a, b) (x - a) + f _ {y} (a, b) (y - b) - (z - f (a, b)) = 0
$$

for the tangent plane to the surface $z = f(x, y)$ at $(a, b)$ , the equation reduces to 

$$
0 \cdot (x - a) + 0 \cdot (y - b) - z + f (a, b) = 0,
$$

$$
z = f (a, b).
$$

Thus, Theorem 10 says that the surface does indeed have a horizontal tangent plane at a local extremum, provided there is a tangent plane there. 

> ***DEFINITION*** An interior point of the domain of a function $f(x, y)$ where both $f_x$ and $f_y$ are zero or where one or both of $f_x$ and $f_y$ do not exist is a critical point of f. 

![[8bdad1c99d5ad4ef0e40500735875714260f5ab5e9da827b807febe45c28bdb0.jpg|image]]


![[09a933a5a60d386a6f82d0fc80252026b7a094150ebd50488317a05d5f27588b.jpg|image]]



FIGURE 13.46 Saddle points at the origin.


![[0f90dd27e9235250228fd75e02cec763297b9df462af0887193312fb5c08542b.jpg|image]]



FIGURE 13.47 The graph of the function $f(x, y) = x^2 + y^2 - 4y + 9$ is a paraboloid which has a local minimum value of 5 at the point (0, 2) (Example 1).


Theorem 10 says that the only points where a function $f(x, y)$ can assume extreme values are critical points and boundary points. As with differentiable functions of a single variable, not every critical point gives rise to a local extremum. A differentiable function of a single variable might have a point of inflection. A differentiable function of two variables might have a saddle point, with the graph of f crossing the tangent plane defined there. 

> ***DEFINITION*** A differentiable function $f(x, y)$ has a saddle point at a critical point $(a, b)$ if in every open disk centered at $(a, b)$ there are domain points $(x, y)$ where $f(x, y) > f(a, b)$ and domain points $(x, y)$ where $f(x, y) < f(a, b)$ . The corresponding point $(a, b, f(a, b))$ on the surface $z = f(x, y)$ is called a saddle point of the surface (Figure 13.46). 

**EXAMPLE 1** Find the local extreme values of $f(x, y) = x^{2} + y^{2} - 4y + 9$ . 

**Solution** The domain of f is the entire plane (so there are no boundary points) and the partial derivatives $f_{x} = 2x$ and $f_{y} = 2y - 4$ exist everywhere. Therefore, local extreme values can occur only where 

$$
f _ {x} = 2 x = 0 \quad \text { and } \quad f _ {y} = 2 y - 4 = 0.
$$

The only possibility is the point $(0,2)$ , where the value of f is 5. Since $f(x,y)=x^{2}+(y-2)^{2}+5$ is never less than 5, we see that the critical point $(0,2)$ gives a local minimum (Figure 13.47). 

**EXAMPLE 2** Find the local extreme values (if any) of $f(x, y) = y^{2} - x^{2}$ . 

**Solution** The domain of f is the entire plane (so there are no boundary points) and the partial derivatives $f_{x} = -2x$ and $f_{y} = 2y$ exist everywhere. Therefore, local extrema can occur only at the origin $(0,0)$ , where $f_{x} = 0$ and $f_{y} = 0$ . The value of f at the origin is 0. However, away from the origin along the positive x-axis, f has the value $f(x,0) = -x^{2} < 0$ ; along the positive y-axis, f has the value $f(0,y) = y^{2} > 0$ . Therefore, every open disk in the xy-plane centered at $(0,0)$ contains points where the function is positive and points where it is negative. The function has a saddle point at the origin and no local extreme values (Figure 13.48a). Figure 13.48b displays the level curves (they are hyperbolas) of f and shows the function decreasing and increasing in an alternating fashion among the groupings of hyperbolas. 

That $f_{x} = f_{y} = 0$ at an interior point $(a, b)$ of R does not guarantee that f has a local extreme value there. If f and its first and second partial derivatives are continuous on R, however, we may be able to learn more from the following theorem. 

## THEOREM 11—Second Derivative Test for Local Extreme Values

Suppose that $f(x,y)$ and its first and second partial derivatives are continuous throughout a disk centered at $(a,b)$ and that $f_{x}(a,b)=f_{y}(a,b)=0$ . Then 

i) $f$ has a local maximum at $(a, b)$ if $f_{xx} < 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b)$ . 

ii) $f$ has a local minimum at $(a, b)$ if $f_{xx} > 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b)$ . 

iii) $f$ has a saddle point at $(a, b)$ if $f_{xx}f_{yy} - f_{xy}^2 < 0$ at $(a, b)$ . 

iv) the test is inconclusive at $(a, b)$ if $f_{xx}f_{yy} - f_{xy}^2 = 0$ at $(a, b)$ . In this case, we must find some other way to determine the behavior of $f$ at $(a, b)$ . 

$$
f _ {x x} f _ {y y} - f _ {x y} ^ {2} = \left| \begin{array}{c c} f _ {x x} & f _ {x y} \\ f _ {x y} & f _ {y y} \end{array} \right|.
$$

The expression $f_{xx}f_{yy} - f_{xy}^2$ is called the discriminant or Hessian of $f$ . It is sometimes easier to remember it in determinant form, 

![[c5cc0bb8f0c7bd7803bdbde070fd98fc9227d07cb716fcb046e6f78d9de39e31.jpg|image]]


![[36d06398d69ef87f0409410d53e6fc95f76fc062d493b30c202f5b6f20fdba99.jpg|image]]



FIGURE 13.48 (a) The origin is a saddle point of the function $f(x,y) = y^{2} - x^{2}$ . There are no local extreme values (Example 2). (b) Level curves for the function $f$ in Example 2.


![[6719231fbb4b13db8ef0348a0801ba1882d8ef534e58bd2db8dc5ed3695d73c5.jpg|image]]



FIGURE 13.49 The surface


$z = 3y^{2} - 2y^{3} - 3x^{2} + 6xy$ has a saddle point at the origin and a local maximum at the point (2, 2) (Example 4). 

The discriminant is the determinant of the Hessian matrix of f, 

$$
H f (x, y) = \left[ \begin{array}{c c} f _ {x x} & f _ {x y} \\ f _ {y x} & f _ {y y} \end{array} \right].
$$

Note that by Theorem 2, we have $f_{xy}(a,b)=f_{yx}(a,b)$ at any point $(a,b)$ satisfying the assumptions of Theorem 11. 

Theorem 11 says that if the discriminant is positive at the point $(a, b)$ , then the surface curves the same way in all directions: downward if $f_{xx} < 0$ , giving rise to a local maximum, and upward if $f_{xx} > 0$ , giving a local minimum. On the other hand, if the discriminant is negative at $(a, b)$ , then the surface curves up in some directions and down in others, so we have a saddle point. 

**EXAMPLE 3** Find the local extreme values of the function 

$$
f (x, y) = x y - x ^ {2} - y ^ {2} - 2 x - 2 y + 4.
$$

**Solution** The function is defined and differentiable for all x and y, and its domain has no boundary points. The function therefore has extreme values only at the points where $f_{x}$ and $f_{y}$ are simultaneously zero. This leads to 

$$
f _ {x} = y - 2 x - 2 = 0, \quad f _ {y} = x - 2 y - 2 = 0,
$$

or 

$$
x = y = - 2.
$$

Therefore, the point $(-2, -2)$ is the only point where $f$ may take on an extreme value. To see whether it does so, we calculate 

$$
f _ {x x} = - 2, \quad f _ {y y} = - 2, \quad f _ {x y} = 1.
$$

The discriminant of $f$ at $(a, b) = (-2, -2)$ is 

$$
f _ {x x} f _ {y y} - f _ {x y} ^ {2} = (- 2) (- 2) - (1) ^ {2} = 4 - 1 = 3.
$$

The combination 

$$
f _ {x x} <   0 \quad \text { and } \quad f _ {x x} f _ {y y} - f _ {x y} ^ {2} > 0
$$

tells us that $f$ has a local maximum at $(-2, -2)$ . The value of $f$ at this point is $f(-2, -2) = 8$ . 

**EXAMPLE 4** Find the local extreme values of $f(x, y) = 3y^{2} - 2y^{3} - 3x^{2} + 6xy$ . 

**Solution** Since f is differentiable everywhere, it can assume extreme values only where 

$$
f _ {x} = 6 y - 6 x = 0 \quad \text { and } \quad f _ {y} = 6 y - 6 y ^ {2} + 6 x = 0.
$$

From the first of these equations we find $x = y$ , and substitution for $y$ into the second equation then gives 

$$
6 x - 6 x ^ {2} + 6 x = 0 \quad \text { or } \quad 6 x (2 - x) = 0.
$$

The two critical points are therefore $(0,0)$ and $(2,2)$ . 

To classify the critical points, we calculate the second derivatives: 

$$
f _ {x x} = - 6, \quad f _ {y y} = 6 - 1 2 y, \quad f _ {x y} = 6.
$$

The discriminant is given by 

$$
f _ {x x} f _ {y y} - f _ {x y} ^ {2} = (- 3 6 + 7 2 y) - 3 6 = 7 2 (y - 1).
$$

At the critical point $(0,0)$ we see that the value of the discriminant is the negative number -72, so the function has a saddle point at the origin. At the critical point $(2,2)$ we see that the discriminant has the positive value 72. Combining this result with the negative value of the second partial $f_{xx} = -6$ , Theorem 11 says that the critical point $(2,2)$ gives a local maximum value of $f(2,2) = 12 - 16 - 12 + 24 = 8$ . A graph of the surface is shown in Figure 13.49. 

**EXAMPLE 5** Find the critical points of the function $f(x,y)=10xye^{-(x^{2}+y^{2})}$ and use the Second Derivative Test to classify each point as one where a saddle, local minimum, or local maximum occurs. 

**Solution** First we find the partial derivatives $f_{x}$ and $f_{y}$ and set them simultaneously to zero in seeking the critical points: 

$$
\begin{array}{l} f _ {x} = 1 0 y e ^ {- (x ^ {2} + y ^ {2})} - 2 0 x ^ {2} y e ^ {- (x ^ {2} + y ^ {2})} = 1 0 y (1 - 2 x ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} = 0 \Rightarrow y = 0 \text { or } 1 - 2 x ^ {2} = 0, \\ f _ {y} = 1 0 x e ^ {- (x ^ {2} + y ^ {2})} - 2 0 x y ^ {2} e ^ {- (x ^ {2} + y ^ {2})} = 1 0 x (1 - 2 y ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} = 0 \Rightarrow x = 0 \text { or } 1 - 2 y ^ {2} = 0. \end{array}
$$

Since both partial derivatives are continuous everywhere, the only critical points are 

$$
(0, 0), \left(\frac {1}{\sqrt {2}}, \frac {1}{\sqrt {2}}\right), \left(- \frac {1}{\sqrt {2}}, \frac {1}{\sqrt {2}}\right), \left(\frac {1}{\sqrt {2}}, - \frac {1}{\sqrt {2}}\right), \text {   and   } \left(- \frac {1}{\sqrt {2}}, - \frac {1}{\sqrt {2}}\right).
$$

Next we calculate the second partial derivatives in order to evaluate the discriminant at each critical point: 

$$
\begin{array}{l} f _ {x x} = - 2 0 x y (1 - 2 x ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} - 4 0 x y e ^ {- (x ^ {2} + y ^ {2})} = - 2 0 x y (3 - 2 x ^ {2}) e ^ {- (x ^ {2} + y ^ {2})}, \\ f _ {x y} = f _ {y x} = 1 0 (1 - 2 x ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} - 2 0 y ^ {2} (1 - 2 x ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} = 1 0 (1 - 2 x ^ {2}) (1 - 2 y ^ {2}) e ^ {- (x ^ {2} + y ^ {2})}, \\ f _ {y y} = - 2 0 x y (1 - 2 y ^ {2}) e ^ {- (x ^ {2} + y ^ {2})} - 4 0 x y e ^ {- (x ^ {2} + y ^ {2})} = - 2 0 x y (3 - 2 y ^ {2}) e ^ {- (x ^ {2} + y ^ {2})}. \end{array}
$$

The following table summarizes the values needed by the Second Derivative Test. 

![[b3d45c3c9bd27f0148af3e7c9e37427fd84e9407279a7a822ba5b058d532191a.jpg|image]]



FIGURE 13.50 A graph of the function in Example 5.


<table><tr><td>Critical Point</td><td><eq>f_{xx}</eq></td><td><eq>f_{xy}</eq></td><td><eq>f_{yy}</eq></td><td>Discriminant D</td></tr><tr><td>(0,0)</td><td>0</td><td>10</td><td>0</td><td>-100</td></tr><tr><td><eq>\left(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right)</eq></td><td><eq>-\frac{20}{e}</eq></td><td>0</td><td><eq>-\frac{20}{e}</eq></td><td><eq>\frac{400}{e^{2}}</eq></td></tr><tr><td><eq>\left(-\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right)</eq></td><td><eq>\frac{20}{e}</eq></td><td>0</td><td><eq>\frac{20}{e}</eq></td><td><eq>\frac{400}{e^{2}}</eq></td></tr><tr><td><eq>\left(\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right)</eq></td><td><eq>\frac{20}{e}</eq></td><td>0</td><td><eq>\frac{20}{e}</eq></td><td><eq>\frac{400}{e^{2}}</eq></td></tr><tr><td><eq>\left(-\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right)</eq></td><td><eq>-\frac{20}{e}</eq></td><td>0</td><td><eq>-\frac{20}{e}</eq></td><td><eq>\frac{400}{e^{2}}</eq></td></tr></table>

From the table we find that D < 0 at the critical point $(0,0)$ , giving a saddle; D > 0 and $f_{xx} < 0$ at the critical points $(1/\sqrt{2},1/\sqrt{2})$ and $(-1/\sqrt{2},-1/\sqrt{2})$ , giving local maximum values there; and D > 0 and $f_{xx} > 0$ at the critical points $(-1/\sqrt{2},1/\sqrt{2})$ and $(1/\sqrt{2},-1/\sqrt{2})$ , each giving local minimum values. A graph of the surface is shown in Figure 13.50. 

## Absolute Maxima and Minima on Closed Bounded Regions

We organize the search for the absolute extrema of a continuous function $f(x, y)$ on a closed and bounded region R into three steps. 

1. List the interior points of R where f may have local maxima and minima and evaluate f at these points. These are the critical points of f. 

2. List the boundary points of $R$ where $f$ has local maxima and minima and evaluate $f$ at these points. We show how to do this in the next example. 

3. Look through the lists for the maximum and minimum values of f. These will be the absolute maximum and minimum values of f on R. 


(b)


![[cb241564aed05129924ea20b10d798a41316a72583a89c92d90bd454c9b1041e.jpg|image]]


![[782c33baab41393989cec9435eb5dff9a5f6a4342fca96c6b0e87841a2b0f9de.jpg|image]]



FIGURE 13.51 (a) This triangular region is the domain of the function in Example 6. (b) The graph of the function in Example 6. The blue points are the candidates for maxima or minima.


**EXAMPLE 6** Find the absolute maximum and minimum values of 

$$
f (x, y) = 2 + 2 x + 4 y - x ^ {2} - y ^ {2}
$$

on the triangular region in the first quadrant bounded by the lines x = 0, y = 0, and y = 9 - x. 

**Solution** Since f is differentiable, the only places where f can assume these values are points inside the triangle where $f_{x} = f_{y} = 0$ and points on the boundary (Figure 13.51a). 

(a) Interior points. For these we have 

$$
f _ {x} = 2 - 2 x = 0, \quad f _ {y} = 4 - 2 y = 0,
$$

yielding the single point $(x, y) = (1, 2)$ . The value of $f$ there is 

$$
f (1, 2) = 7.
$$

(b) Boundary points. We take the triangle one side at a time: 

i) On the segment OA we always have y = 0. Therefore, we can regard $f(x, y)$ as being solely a function of x on this segment. That is, on this segment we want to consider the function 

$$
g (x) = f (x, 0) = 2 + 2 x - x ^ {2}
$$

for $0 \leq x \leq 9$ . Its extreme values (as we know from Chapter 4) may occur at the endpoints 

$$
\begin{array}{l l} x = 0 & \text { where } \quad g (0) = f (0, 0) = 2 \\ x = 9 & \text { where } \quad g (9) = f (9, 0) = 2 + 1 8 - 8 1 = - 6 1 \end{array}
$$

or at the interior points where $g'(x) = 2 - 2x = 0$ . The only interior point where $g'(x) = 0$ is x = 1, where 

$$
g (1) = f (1, 0) = 3.
$$

ii) On the segment OB we always have x = 0. Therefore, on this segment we can regard $f(x, y)$ as being solely a function of y, and so we consider the function 

$$
h (y) = f (0, y) = 2 + 4 y - y ^ {2}
$$

on the closed interval [0, 9]. Its extreme values can occur at the endpoints or at interior points where $h'(y) = 0$ . Since $h'(y) = 4 - 2y$ , the only interior point where $h'(y) = 0$ occurs at (0, 2), with $h(2) = 6$ . So the candidates for this segment are 

$$
h (0) = f (0, 0) = 2, \quad h (9) = f (0, 9) = - 4 3, \text { and } \quad h (2) = f (0, 2) = 6.
$$

iii) We have already accounted for the values of $f$ at the endpoints of $AB$ , so we need only look at the interior points of the line segment $AB$ . On this segment we have $y = 9 - x$ , so we consider the function 

$$
k (x) = f (x, 9 - x) = 2 + 2 x + 4 (9 - x) - x ^ {2} - (9 - x) ^ {2} = - 4 3 + 1 6 x - 2 x ^ {2}.
$$

Setting $k'(x) = 16 - 4x = 0$ gives 

$$
x = 4.
$$

At this value of $x$ , 

$$
y = 9 - 4 = 5 \quad \text { and } \quad k (4) = f (4, 5) = - 1 1.
$$

Summary We list all the function value candidates: 7, 2, -61, 3, -43, 6, -11. The maximum is 7, which $f$ assumes at (1, 2). The minimum is -61, which $f$ assumes at (9, 0). See Figure 13.51b. 

Solving extreme value problems with algebraic constraints on the variables usually requires the method of Lagrange multipliers, which is introduced in the next section. But sometimes we can solve such problems directly, as in the next example. 

![[30fd5ef075b2d43bd0121fdf9d7ef0c56c54b6afd6b5240cdab5279a799cc811.jpg|image]]



FIGURE 13.52 The box in Example 7.


**EXAMPLE 7** A delivery company accepts only rectangular boxes the sum of whose length and girth (perimeter of a cross-section) does not exceed 270 cm. Find the dimensions of an acceptable box of largest volume. 

**Solution** Let x, y, and z represent the length, width, and height of the rectangular box, respectively. Then the girth is $2y + 2z$ . We want to maximize the volume V = xyz of the box (Figure 13.52) satisfying $x + 2y + 2z = 270$ (the largest box accepted by the delivery company). Thus, we can write the volume of the box as a function of two variables: 

$$
\begin{array}{l l} V (y, z) = (2 7 0 - 2 y - 2 z) y z & \quad V = x y z \text {   and   } \\ = 2 7 0 y z - 2 y ^ {2} z - 2 y z ^ {2}. & \quad x = 2 7 0 - 2 y - 2 z \end{array}
$$

Setting the first partial derivatives equal to zero, 

$$
\begin{array}{l} V _ {y} (y, z) = 2 7 0 z - 4 y z - 2 z ^ {2} = (2 7 0 - 4 y - 2 z) z = 0 \\ V _ {z} (y, z) = 2 7 0 y - 2 y ^ {2} - 4 y z = (2 7 0 - 2 y - 4 z) y = 0, \end{array}
$$

gives the critical points $(0,0)$ , $(0,135)$ , $(135,0)$ , and $(45,45)$ . The volume is zero at $(0,0)$ , $(0,135)$ , and $(135,0)$ , which are not maximum values. At the point $(45,45)$ , we apply the Second Derivative Test (Theorem 11): 

$$
V _ {y y} = - 4 z, \quad V _ {z z} = - 4 y, \quad V _ {y z} = 2 7 0 - 4 y - 4 z.
$$

Then 

$$
V _ {y y} V _ {z z} - V _ {y z} ^ {2} = 1 6 y z - 4 (1 3 5 - 2 y - 2 z) ^ {2}.
$$

Thus, 

$$
V _ {y y} (4 5, 4 5) = - 4 (4 5) <   0
$$

and 

$$
\left. \left(V _ {y y} V _ {z z} - V _ {y z} ^ {2}\right) \right| _ {(4 5, 4 5)} = 1 6 (4 5) (4 5) - 4 (- 4 5) ^ {2} > 0,
$$

so (45,45) gives a maximum volume. The dimensions of the package are $x = 270 - 2(45) - 2(45) = 90 \, \text{cm}$ , $y = 45 \, cm$ , and $z = 45 \, cm$ . The maximum volume is $V = (90)(45)(45) = 182,250 \, \text{cm}^3$ , or 182.25 liters. 

Despite the power of Theorem 11, we urge you to remember its limitations. It does not apply to boundary points of a function's domain, where it is possible for a function to have extreme values along with nonzero derivatives. Also, it does not apply to points where either $f_{x}$ or $f_{y}$ fails to exist. 

Summary of Max-Min Tests
The extreme values of $f(x, y)$ can occur only at
i) boundary points of the domain of f
ii) critical points (interior points where $f_x = f_y = 0$ or points where $f_x$ or $f_y$ fails to exist)
If the first- and second-order partial derivatives of f are continuous throughout a disk centered at a point $(a, b)$ and if $f_x(a, b) = f_y(a, b) = 0$ , then the nature of $f(a, b)$ can be tested with the Second Derivative Test:
i) $f_{xx} < 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b) \Rightarrow local maximum$ ii) $f_{xx} > 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b) \Rightarrow local minimum$ iii) $f_{xx}f_{yy} - f_{xy}^2 < 0$ at $(a, b) \Rightarrow saddle point$ iv) $f_{xx}f_{yy} - f_{xy}^2 = 0$ at $(a, b) \Rightarrow test is inconclusive$ 

Finding maximum and minimum values for functions of more than two variables is an important problem with many important applications, from machine learning to making economic predictions. The problem becomes much harder as the number of variables increases. The process of finding extrema for functions with high-dimensional domains is discussed in Appendices B.2 and B.3. 

## EXERCISES 13.7

## Finding Local Extrema

Find all the local maxima, local minima, and saddle points of the functions in Exercises 1–30. 

$$
f (x, y) = x ^ {2} + x y + y ^ {2} + 3 x - 3 y + 4
$$

2. $f(x,y)=2xy-5x^{2}-2y^{2}+4x+4y-4$ 

3. $f(x,y) = x^{2} + xy + 3x + 2y + 5$ 

4. $f(x,y)=5xy-7x^{2}+3x-6y+2$ 

$$
f (x, y) = 2 x y - x ^ {2} - 2 y ^ {2} + 3 x + 4
$$

$$
f (x, y) = x ^ {2} - 4 x y + y ^ {2} + 6 y + 2
$$

7. $f(x,y) = 2x^{2} + 3xy + 4y^{2} - 5x + 2y$ 

8. $f(x,y) = x^{2} - 2xy + 2y^{2} - 2x + 2y + 1$ 

9. $f(x,y) = x^{2} - y^{2} - 2x + 4y + 6$ 

10. $f(x,y) = x^{2} + 2xy$ 

11. $f(x,y) = \sqrt{56x^2 - 8y^2 - 16x - 31} + 1 - 8x$ 

12. $f(x,y) = 1 - \sqrt[3]{x^2 + y^2}$ 

13. $f(x,y) = x^{3} - y^{3} - 2xy + 6$ 

14. $f(x,y) = x^{3} + 3xy + y^{3}$ 

15. $f(x,y) = 6x^{2} - 2x^{3} + 3y^{2} + 6xy$ 

$$
f (x, y) = x ^ {3} + y ^ {3} + 3 x ^ {2} - 3 y ^ {2} - 8
$$

17. $f(x,y)=x^{3}+3xy^{2}-15x+y^{3}-15y$ 

18. $f(x,y)=2x^{3}+2y^{3}-9x^{2}+3y^{2}-12y$ 

19. $f(x,y) = 4xy - x^4 -y^4$ 

20. $f(x,y)=x^{4}+y^{4}+4xy$ 

$$
2 1. f (x, y) = \frac {1}{x ^ {2} + y ^ {2} - 1} \quad 2 2. f (x, y) = \frac {1}{x} + x y + \frac {1}{y}
$$

$$
2 3. f (x, y) = y \sin x \quad 2 4. f (x, y) = e ^ {2 x} \cos y
$$

$$
2 5. f (x, y) = e ^ {x ^ {2} + y ^ {2} - 4 x} \quad 2 6. f (x, y) = e ^ {y} - y e ^ {x}
$$

$$
2 7. f (x, y) = e ^ {- y} \left(x ^ {2} + y ^ {2}\right) \quad 2 8. f (x, y) = e ^ {x} \left(x ^ {2} - y ^ {2}\right)
$$

29. $f(x,y) = 2\ln x + \ln y - 4x - y$ 

30. $f(x,y)=\ln(x+y)+x^{2}-y$ 

Finding Absolute Extrema 

In Exercises 31–38, find the absolute maxima and minima of the functions on the given domains. 

31. $f(x, y) = 2x^{2} - 4x + y^{2} - 4y + 1$ on the closed triangular plate bounded by the lines x = 0, y = 2, y = 2x in the first quadrant 

32. $D(x, y) = x^2 - xy + y^2 + 1$ on the closed triangular plate in the first quadrant bounded by the lines $x = 0, y = 4, y = x$ 

33. $f(x, y) = x^2 + y^2$ on the closed triangular plate bounded by the lines $x = 0, y = 0, y + 2x = 2$ in the first quadrant 

34. $T(x, y) = x^2 + xy + y^2 - 6x$ on the rectangular plate $0 \leq x \leq 5, -3 \leq y \leq 3$ 

35. $T(x, y) = x^2 + xy + y^2 - 6x + 2$ on the rectangular plate $0 \leq x \leq 5, -3 \leq y \leq 0$ 

36. $f(x, y) = 48xy - 32x^{3} - 24y^{2}$ on the rectangular plate $0 \leq x \leq 1, 0 \leq y \leq 1$ 

37. $f(x, y) = (4x - x^2)\cos y$ on the rectangular plate $1 \leq x \leq 3, -\pi/4 \leq y \leq \pi/4$ 

38. $f(x,y) = 4x - 8xy + 2y + 1$ on the triangular plate bounded by the lines $x = 0, y = 0, x + y = 1$ in the first quadrant 

39. Find two numbers $a$ and $b$ with $a \leq b$ such that 

$$
\int_ {a} ^ {b} (6 - x - x ^ {2}) d x
$$

has its largest value. 

40. Find two numbers $a$ and $b$ with $a \leq b$ such that 

$$
\int_ {a} ^ {b} (2 4 - 2 x - x ^ {2}) ^ {1 / 3} d x
$$

has its largest value. 

41. Temperatures A flat circular plate has the shape of the region $x^{2} + y^{2} \leq 1$ . The plate, including the boundary where $x^{2} + y^{2} = 1$ , is heated so that the temperature at the point $(x, y)$ is 

$$
T (x, y) = x ^ {2} + 2 y ^ {2} - x.
$$

Find the temperatures at the hottest and coldest points on the plate. 

42. Find the critical point of 

$$
f (x, y) = x y + 2 x - \ln x ^ {2} y
$$

in the open first quadrant $(x > 0, y > 0)$ and show that f takes on a minimum there. 

Theory and Examples 

43. Find the maxima, minima, and saddle points of $f(x,y)$ , if any, given that 

$$
\mathbf {a}. f _ {x} = 2 x - 4 y \quad \text { and } \quad f _ {y} = 2 y - 4 x
$$

$$
\mathbf {c}. f _ {x} = 9 x ^ {2} - 9 \quad \text { and } \quad f _ {y} = 2 y + 4
$$

Describe your reasoning in each case. 

44. The discriminant $f_{xx}f_{yy} - f_{xy}^{2}$ is zero at the origin for each of the following functions, so the Second Derivative Test fails there. Determine whether the function has a maximum, a minimum, or neither at the origin by imagining what the surface $z = f(x, y)$ looks like. Describe your reasoning in each case. 

$$
\mathbf {a}. f (x, y) = x ^ {2} y ^ {2} \quad \mathbf {b}. f (x, y) = 1 - x ^ {2} y ^ {2}
$$

$$
\mathbf {d}. f (x, y) = x ^ {3} y ^ {2}
$$

$$
\mathbf {e}. f (x, y) = x ^ {3} y ^ {3}
$$

$$
\mathbf {f}. f (x, y) = x ^ {4} y ^ {4}
$$

45. Show that $(0,0)$ is a critical point of $f(x,y)=x^{2}+kxy+y^{2}$ no matter what value the constant k has. (Hint: Consider two cases: k=0 and $k\neq0$ .) 

46. For what values of the constant k does the Second Derivative Test guarantee that $f(x, y) = x^{2} + kxy + y^{2}$ will have a saddle point at $(0, 0)$ ? A local minimum at $(0, 0)$ ? For what values of k is the Second Derivative Test inconclusive? Give reasons for your answers. 

47. If $f_{x}(a,b)=f_{y}(a,b)=0$ , must f have a local maximum or minimum value at $(a,b)$ ? Give reasons for your answer. 

48. Can you conclude anything about $f(a,b)$ if f and its first and second partial derivatives are continuous throughout a disk centered at the critical point $(a,b)$ and $f_{xx}(a,b)$ and $f_{yy}(a,b)$ differ in sign? Give reasons for your answer. 

49. Among all the points on the graph of $z = 10 - x^{2} - y^{2}$ that lie above the plane $x + 2y + 3z = 0$ , find the point farthest from the plane. 

50. Find the point on the graph of $z = x^{2} + y^{2} + 10$ nearest the plane $x + 2y - z = 0$ . 

51. Find the point on the plane $3x + 2y + z = 6$ that is nearest the origin. 

52. Find the minimum distance from the point $(2,-1,1)$ to the plane $x + y - z = 2$ . 

53. Find three numbers whose sum is 9 and whose sum of squares is a minimum. 

54. Find three positive numbers whose sum is 3 and whose product is a maximum. 

55. Find the maximum value of $s = xy + yz + xz$ where $x + y + z = 6$ . 

56. Find the minimum distance from the cone $z = \sqrt{x^{2} + y^{2}}$ to the point $(-6, 4, 0)$ . 

57. Find the dimensions of the rectangular box of maximum volume that can be inscribed inside the sphere $x^{2} + y^{2} + z^{2} = 4$ . 

58. Among all closed rectangular boxes of volume $27 \, cm^{3}$ , what is the smallest surface area? 

59. You are to construct an open rectangular box from $12 \, m^{2}$ of material. What dimensions will result in a box of maximum volume? 

60. Consider the function $f(x,y)=x^{2}+y^{2}+2xy-x-y+1$ over the square $0\leq x\leq1$ and $0\leq y\leq1$ . 

a. Show that $f$ has an absolute minimum along the line segment $2x + 2y = 1$ in this square. What is the absolute minimum value? 

b. Find the absolute maximum value of f over the square. 

61. Find the point on the graph of $y^{2} - xz^{2} = 4$ nearest the origin. 

62. A rectangular box is inscribed in the region in the first octant bounded above by the plane with x-intercept 6, y-intercept 6, and z-intercept 6. 

![[6744f418c2f0358e5a8b578ce3c7201161082e5840bda1fca033593c35090898.jpg|image]]


a. Find an equation for the plane. 

b. Find the dimensions of the box of maximum volume. 

Extreme Values on Parametrized Curves To find the extreme values of a function $f(x, y)$ on a curve $x = x(t)$ , $y = y(t)$ , we treat f as a function of the single variable t and use the Chain Rule to find where df/dt is zero. As in any other single-variable case, the extreme values of f are then found among the values at 

a. The critical points (points where $df/dt$ is zero or fails to exist), and
b. The endpoints of the parameter domain. 

In Exercises 63–66, find the absolute maximum and minimum values of the following functions on the given curves. 

## 63. Functions:

a. $f(x, y) = x + y$ b. $g(x, y) = xy$ c. $h(x, y) = 2x^2 + y^2$ Curves: i) The semicircle $x^2 + y^2 = 4, \quad y \geq 0$ ii) The quarter circle $x^2 + y^2 = 4, \quad x \geq 0, \quad y \geq 0$ Use the parametric equations $x = 2\cos t, y = 2\sin t$ . 

a. $f(x, y) = 2x + 3y$ b. $g(x, y) = xy$ c. $h(x, y) = x^2 + 3y^2$ Curves: i) The semiellipse $(x^2/9) + (y^2/4) = 1, \quad y \geq 0$ ii) The quarter ellipse $(x^2/9) + (y^2/4) = 1, \quad x \geq 0, \quad y \geq 0$ Use the parametric equations $x = 3\cos t, y = 2\sin t$ . 

- Function: $f(x, y) = xy$ Curves:
    i) The line $x = 2t$ , $y = t + 1$ ii) The line segment $x = 2t$ , $y = t + 1$ , $-1 \leq t \leq 0$ iii) The line segment $x = 2t$ , $y = t + 1$ , $0 \leq t \leq 1$ 

66. Functions: 

ii) The line segment x = t, y = 2 - 2t, $0 \leq t \leq 1$ 

67. Least squares and regression lines When we try to fit a line $y = mx + b$ to a set of numerical data points $(x_{1}, y_{1}), (x_{2}, y_{2}), \ldots, (x_{n}, y_{n})$ , we usually choose the line that minimizes the sum of the squares of the vertical distances from the points to the line. In theory, this means finding the values of m and b that minimize the value of the function 

$$
w = \left(m x _ {1} + b - y _ {1}\right) ^ {2} + \dots + \left(m x _ {n} + b - y _ {n}\right) ^ {2}.\tag{1}
$$

(See the accompanying figure.) Show that the values of $m$ and $b$ that do this are 

$$
m = \frac {\left(\sum x _ {k}\right) \left(\sum y _ {k}\right) - n \sum x _ {k} y _ {k}}{\left(\sum x _ {k}\right) ^ {2} - n \sum x _ {k} ^ {2}},\tag{2}
$$

$$
b = \frac {1}{n} \left(\sum y _ {k} - m \sum x _ {k}\right),\tag{3}
$$

with all sums running from k = 1 to k = n. Many scientific calculators have these formulas built in, enabling you to find m and b with only a few keystrokes after you have entered the data. 

The line $y = mx + b$ determined by these values of m and b is called the least squares line, regression line, or trend line for the data under study. Finding a least squares line lets you 

1. summarize data with a simple expression, 

2. predict values of y for other, experimentally untried values of x, 

3. handle data analytically. 

![[b147bf9f866ab4d89bedd329df6dd1dc1de223b1b82c523c04b2854172b87282.jpg|image]]


In Exercises 68–70, use Equations (2) and (3) to find the least squares line for each set of data points. Then use the linear equation you obtain to predict the value of y that would correspond to x = 4. 

68. $(-2,0),(0,2),(2,3)$ 

$$
\mathbf {6 9 .} (- 1, 2), (0, 1), (3, - 4)
$$

70. $(0,0),(1,2),(2,3)$ 

## COMPUTER EXPLORATIONS

In Exercises 71–76, you will explore functions to identify their local extrema. Use a CAS to perform the following steps: 

a. Plot the function over the given rectangle. 

b. Plot some level curves in the rectangle. 

c. Calculate the function's first partial derivatives and use the CAS equation solver to find the critical points. How are the critical points related to the level curves plotted in part (b)? Which critical points, if any, appear to give a saddle point? Give reasons for your answer. 

d. Calculate the function's second partial derivatives and find the discriminant $f_{xx}f_{yy} - f_{xy}^2$ . 

e. Using the max-min tests, classify the critical points found in part (c). Are your findings consistent with your discussion in part (c)? 

$$
f (x, y) = x ^ {2} + y ^ {3} - 3 x y, - 5 \leq x \leq 5, - 5 \leq y \leq 5
$$

$$
f (x, y) = x ^ {3} - 3 x y ^ {2} + y ^ {2}, - 2 \leq x \leq 2, - 2 \leq y \leq 2
$$

73. $f(x,y)=x^{4}+y^{2}-8x^{2}-6y+16,\quad-3\leq x\leq3,$ $-6 \leq y \leq 6$ 

74. $f(x,y)=2x^{4}+y^{4}-2x^{2}-2y^{2}+3,\quad-3/2\leq x\leq3/2,$ $-3/2 \leq y \leq 3/2$ 

75. $f(x,y)=5x^{6}+18x^{5}-30x^{4}+30xy^{2}-120x^{3},$ $-4 \leq x \leq 3, -2 \leq y \leq 2$ 

$$
\begin{array}{l} \text {76.} f (x, y) = \left\{ \begin{array}{l l} x ^ {5} \ln (x ^ {2} + y ^ {2}), & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0), \end{array} \right. \\ - 2 \leq x \leq 2, - 2 \leq y \leq 2 \end{array}
$$

## 13.8 Lagrange Multipliers

## HISTORICAL BIOGRAPHY

Joseph Louis Lagrange (1736–1813) 

Lagrange was born in Turin, Italy. He enjoyed studying mathematics, despite his father's wish that he study law. Lagrange's mathematical contributions began as early as 1754 with the discovery of the calculus of variations and continued with applications to mechanics in 1756. 

To know more, visit the companion Website. 

Sometimes we need to find the extreme values of a function whose domain is constrained to lie within some particular subset of the plane—for example, a disk, a closed triangular region, or along a curve. We saw an instance of this situation in Example 6 of the previous section. Here we explore a powerful method for finding extreme values of constrained functions: the method of Lagrange multipliers. 

## Constrained Maxima and Minima

To gain some insight, we first consider a problem where a constrained minimum can be found by eliminating a variable. 

**EXAMPLE 1** Find the point $p(x, y, z)$ on the plane $2x + y - z - 5 = 0$ that is closest to the origin. 

**Solution** The problem asks us to find the minimum value of the function 

$$
\left| \overrightarrow {O P} \right| = \sqrt {(x - 0) ^ {2} + (y - 0) ^ {2} + (z - 0) ^ {2}} = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}
$$

subject to the constraint that 

$$
2 x + y - z - 5 = 0.
$$

Since $|\overrightarrow{OP} |$ has a minimum value wherever the function 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2}
$$

has a minimum value, we may solve the problem by finding the minimum value of $f(x,y,z)$ subject to the constraint $2x + y - z - 5 = 0$ (thus avoiding square roots). If we regard x and y as the independent variables in this equation and write z as 

$$
z = 2 x + y - 5,
$$

our problem reduces to finding the points $(x, y)$ at which the function 

$$
h (x, y) = f (x, y, 2 x + y - 5) = x ^ {2} + y ^ {2} + (2 x + y - 5) ^ {2}
$$

has its minimum value or values. Since the domain of h is the entire xy-plane, the First Derivative Theorem of Section 13.7 tells us that any minima that h might have must occur at points where 

$$
h _ {x} = 2 x + 2 (2 x + y - 5) (2) = 0, \quad h _ {y} = 2 y + 2 (2 x + y - 5) = 0.
$$

This leads to 

$$
1 0 x + 4 y = 2 0, \quad 4 x + 4 y = 1 0,
$$

which has the solution 

$$
x = \frac {5}{3}, \quad y = \frac {5}{6}.
$$

We may apply a geometric argument together with the Second Derivative Test to show that these values minimize h. The z-coordinate of the corresponding point on the plane $z = 2x + y - 5$ is 

$$
z = 2 \left(\frac {5}{3}\right) + \frac {5}{6} - 5 = - \frac {5}{6}.
$$

Therefore, the point we seek is 

$$
\text { Closest   point: } \quad P \left(\frac {5}{3}, \frac {5}{6}, - \frac {5}{6}\right).
$$

The distance from P to the origin is $5/\sqrt{6} \approx 2.04$ . 

Attempts to solve a constrained maximum or minimum problem by substitution, as we might call the method of Example 1, do not always go smoothly. 

![[ef047137bf026d52c9aa505f9239d24e1c6b5fe9c50b0f1697102b06cef2f9af.jpg|image]]



FIGURE 13.53 The hyperbolic cylinder $x^{2} - z^{2} - 1 = 0$ in Example 2.


**EXAMPLE 2** Find the points on the hyperbolic cylinder $x^{2} - z^{2} - 1 = 0$ that are closest to the origin. 

**Solution** 1 The cylinder is shown in Figure 13.53. We seek the points on the cylinder closest to the origin. These are the points whose coordinates minimize the value of the function 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2} \quad \text {   Square   of   the   distance   }
$$

subject to the constraint that $x^{2} - z^{2} - 1 = 0$ . If we regard x and y as independent variables in the constraint equation, then 

$$
z ^ {2} = x ^ {2} - 1,
$$

and the values of $f(x,y,z)=x^{2}+y^{2}+z^{2}$ on the cylinder are given by the function 

$$
h (x, y) = x ^ {2} + y ^ {2} + \left(x ^ {2} - 1\right) = 2 x ^ {2} + y ^ {2} - 1.
$$

To find the points on the cylinder whose coordinates minimize f, we look for the points in the xy-plane whose coordinates minimize h. The only extreme value of h occurs where 

$$
h _ {x} = 4 x = 0 \quad \text { and } \quad h _ {y} = 2 y = 0,
$$

The hyperbolic cylinder $x^{2} - z^{2} = 1$ 

![[c93778ef26229ddcee47ac22403b0077a5a6427fcaa243a517087d5acf8e81d2.jpg|image]]



FIGURE 13.54 The region in the xy-plane from which the first two coordinates of the points $(x, y, z)$ on the hyperbolic cylinder $x^{2} - z^{2} = 1$ are selected excludes the band -1 < x < 1 in the xy-plane (Example 2).


![[67302fcbdc1622672208456f6be6e5aacb2e4ef952d611e6d58acd4846ac88bb.jpg|image]]



FIGURE 13.55 A sphere expanding like a soap bubble centered at the origin until it just touches the hyperbolic cylinder $x^{2} - z^{2} - 1 = 0$ (Example 2).


$\lambda$ is the Greek letter lambda. 

that is, at the point $(0,0)$ . But there are no points on the cylinder where both x and y are zero. What went wrong? 

What happened is that the First Derivative Theorem found (as it should have) the point in the domain of h where h has a minimum value. We, on the other hand, want the points on the cylinder where h has a minimum value. Although the domain of h is the entire xy-plane, the domain from which we can select the first two coordinates of the points $(x, y, z)$ on the cylinder is restricted to the projection, or “shadow” of the cylinder on the xy-plane; it does not include the band between the lines x = -1 and x = 1 (Figure 13.54). 

We can avoid this problem if we treat y and z as independent variables (instead of x and y) and express x in terms of y and z as 

$$
x ^ {2} = z ^ {2} + 1.
$$

With this substitution, $f(x,y,z) = x^{2} + y^{2} + z^{2}$ becomes 

$$
k (y, z) = (z ^ {2} + 1) + y ^ {2} + z ^ {2} = 1 + y ^ {2} + 2 z ^ {2}
$$

and we look for the points where k takes on its smallest value. The domain of k in the yz-plane now matches the domain from which we select the y- and z-coordinates of the points $(x, y, z)$ on the cylinder. Hence, the points that minimize k in the plane will have corresponding points on the cylinder. The smallest values of k occur where 

$$
k _ {y} = 2 y = 0 \quad \text { and } \quad k _ {z} = 4 z = 0,
$$

or where $y = z = 0$ . This leads to 

$$
x ^ {2} = z ^ {2} + 1 = 1, \quad x = \pm 1.
$$

The corresponding points on the cylinder are $(\pm1,0,0)$ . We can see from the inequality 

$$
k (y, z) = 1 + y ^ {2} + 2 z ^ {2} \geq 1
$$

that the points $(\pm1,0,0)$ give a minimum value for k. We can also see that the minimum distance from the origin to a point on the cylinder is 1 unit. 

**Solution** 2 Another way to find the points on the cylinder closest to the origin is to imagine a small sphere centered at the origin expanding like a soap bubble until it just touches the cylinder (Figure 13.55). At each point of contact, the cylinder and sphere have the same tangent plane and normal line. Therefore, if the sphere and cylinder are represented as the level surfaces obtained by setting 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2} - a ^ {2} \quad \text { and } \quad g (x, y, z) = x ^ {2} - z ^ {2} - 1
$$

equal to 0, then the gradients $\nabla f$ and $\nabla g$ will be parallel where the surfaces touch. At any point of contact, we should therefore be able to find a scalar $\lambda$ (“lambda”) such that 

$$
\nabla f = \lambda \nabla g,
$$

or 

$$
2 x \mathbf {i} + 2 y \mathbf {j} + 2 z \mathbf {k} = \lambda (2 x \mathbf {i} - 2 z \mathbf {k}).
$$

Thus, the coordinates x, y, and z of any point of tangency will have to satisfy the three scalar equations 

$$
2 x = 2 \lambda x, \quad 2 y = 0, \quad 2 z = - 2 \lambda z.
$$

For what values of $\lambda$ will a point $(x, y, z)$ whose coordinates satisfy these scalar equations also lie on the surface $x^{2} - z^{2} - 1 = 0$ ? To answer this question, we use our knowledge that no point on the surface has a zero x-coordinate to conclude that $x \neq 0$ . Hence, $2x = 2\lambda x$ only if 

$$
2 = 2 \lambda , \quad \text { or } \quad \lambda = 1.
$$

For $\lambda = 1$ , the equation $2z = -2\lambda z$ becomes $2z = -2z$ . If this equation is to be satisfied as well, z must be zero. Since y = 0 also (from the equation 2y = 0), we conclude that the points we seek all have coordinates of the form 

$$
(x, 0, 0).
$$

What points on the surface $x^{2} - z^{2} = 1$ have coordinates of this form? The answer is the points $(x,0,0)$ for which 

$$
x ^ {2} - (0) ^ {2} = 1, \quad x ^ {2} = 1, \quad \text { or } \quad x = \pm 1.
$$

The points on the cylinder closest to the origin are the points $(\pm1,0,0)$ . 

## The Method of Lagrange Multipliers

In **Solution** 2 of Example 2, we used the method of Lagrange multipliers. The method says that the local extreme values of a function $f(x, y, z)$ whose variables are subject to a constraint $g(x, y, z) = 0$ are to be found on the surface g = 0 among the points where 

$$
\nabla f = \lambda \nabla g
$$

for some scalar $\lambda$ (called a Lagrange multiplier). 

To explore the method further and see why it works, we first make the following observation, which we state as a theorem. 

THEOREM 12—The Orthogonal Gradient Theorem
Suppose that $f(x, y, z)$ is differentiable in a region whose interior contains a smooth curve
C: $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}$ .
If $P_{0}$ is a point on C where f has a local maximum or minimum relative to its values on C, then $\nabla f$ is orthogonal to the curve's tangent vector $r'$ at $P_{0}$ . 

Proof The values of $f$ on $C$ are given by the composition $f(x(t), y(t), z(t))$ , whose derivative with respect to $t$ is 

$$
\frac {d f}{d t} = \frac {\partial f}{\partial x} \frac {d x}{d t} + \frac {\partial f}{\partial y} \frac {d y}{d t} + \frac {\partial f}{\partial z} \frac {d z}{d t} = \nabla f \cdot \mathbf {r} ^ {\prime}.
$$

At any point $P_0$ where $f$ has a local maximum or minimum relative to its values on the curve, $df / dt = 0$ , so 

$$
\nabla f \cdot \mathbf {r} ^ {\prime} = 0.
$$

By dropping the z-terms in Theorem 12, we obtain a similar result for functions of two variables. 

COROLLARY At the points on a smooth curve $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$ where a differentiable function $f(x, y)$ takes on its local maxima or minima relative to its values on the curve, we have $\nabla f \cdot r' = 0$ . 

Theorem 12 is the key to the method of Lagrange multipliers. Suppose that $f(x, y, z)$ and $g(x, y, z)$ are differentiable and that $P_{0}$ is a point on the surface $g(x, y, z) = 0$ where f has a local maximum or minimum value relative to its other values on the surface. We assume also that $\nabla g \neq 0$ at points on the surface $g(x, y, z) = 0$ . Then f takes on a local maximum or minimum at $P_{0}$ relative to its values on every differentiable curve through $P_{0}$ on the surface $g(x, y, z) = 0$ . Therefore, $\nabla f$ is orthogonal to the tangent vector of every such differentiable curve through $P_{0}$ . Moreover, so is $\nabla g$ (because $\nabla g$ is perpendicular to the level surface g = 0, as we saw in Section 13.5). Therefore, at $P_{0}$ , $\nabla f$ is some scalar multiple $\lambda$ of $\nabla g$ . 


FIGURE 13.56 Example 3 shows how to find the largest and smallest values of the product $xy$ on this ellipse.


## The Method of Lagrange Multipliers

![[4870e4b6bd245f1df8e2b0200742a9903e0191e13b4416b681250f1d18dbb58f.jpg|image]]


Suppose that $f(x,y,z)$ and $g(x,y,z)$ are differentiable and $\nabla g \neq 0$ when $g(x,y,z) = 0$ . To find the local maximum and minimum values of f subject to the constraint $g(x,y,z) = 0$ (if these exist), find the values of x, y, z, and $\lambda$ that simultaneously satisfy the equations 

$$
\nabla f = \lambda \nabla g \quad \text { and } \quad g (x, y, z) = 0.\tag{1}
$$

If they exist, absolute extrema can be found by comparing these values of f at each critical point satisfying Equation (1). For functions of two independent variables, the condition is similar, but without the variable z. 

Some care must be used in applying this method. An extreme value may not actually exist (Exercise 45). 

## **EXAMPLE 3** Find the largest and smallest values that the function

$$
f (x, y) = x y
$$

takes on the ellipse (Figure 13.56) 

$$
\frac {x ^ {2}}{8} + \frac {y ^ {2}}{2} = 1.
$$

**Solution** We want to find the extreme values of $f(x, y) = xy$ subject to the constraint 

$$
g (x, y) = \frac {x ^ {2}}{8} + \frac {y ^ {2}}{2} - 1 = 0.
$$

To do so, we first find the values of x, y, and $\lambda$ for which 

$$
\nabla f = \lambda \nabla g \quad \text { and } \quad g (x, y) = 0.
$$

The gradient equation in Equations (1) gives 

$$
y \mathbf {i} + x \mathbf {j} = \frac {\lambda}{4} x \mathbf {i} + \lambda y \mathbf {j},
$$

from which we find 

$$
y = \frac {\lambda}{4} x, \quad x = \lambda y,
$$

and 

$$
y = \frac {\lambda}{4} (\lambda y) = \frac {\lambda^ {2}}{4} y, \quad \text {   Caution:   Don't   cancel   } y \text {   without   considering   the   case   where   } y = 0.
$$

so that 

$$
y = 0 \text {   or   } \lambda = \pm 2.
$$

We now consider these two cases. 

Case 1: If $y = 0$ , then $x = y = 0$ . But $(0,0)$ is not on the ellipse. Hence, $y \neq 0$ .  
Case 2: If $y \neq 0$ , then $\lambda = \pm 2$ and $x = \pm 2y$ . Substituting this in the equation $g(x,y) = 0$ gives 

$$
\frac {(\pm 2 y) ^ {2}}{8} + \frac {y ^ {2}}{2} = 1, \quad 4 y ^ {2} + 4 y ^ {2} = 8 \quad \text { and } \quad y = \pm 1.
$$

![[cd18943dcc39acba4001685c3c05b759472041fa15ad3ab90cde7a147ae6d83b.jpg|image]]



FIGURE 13.57 When subjected to the constraint $g(x, y) = x^2 / 8 + y^2 / 2 - 1 = 0$ , the function $f(x, y) = xy$ takes on extreme values at the four points $(\pm 2, \pm 1)$ . These are the points on the ellipse where $\nabla f$ (red) is a scalar multiple of $\nabla g$ (blue) (Example 3).


![[bb00cfe0d48e2617c9ee24597e4af3d59d4f823755805c26afbd5004ea1bd319.jpg|image]]


FIGURE 13.58 The function $f(x,y)=3x+4y$ takes on its largest value on the unit circle $g(x,y)=x^{2}+y^{2}-1=0$ at the point $(3/5,4/5)$ and its smallest value at the point $(-3/5,-4/5)$ (Example 4). At each of these points, $\nabla f$ is a scalar multiple of $\nabla g$ . The figure shows the gradients at the first point but not at the second. 

The function $f(x, y) = xy$ therefore has critical points on the ellipse at the four points $(\pm2, 1)$ , $(\pm2, -1)$ . The extreme values are found by examining the values of f at these four points. The absolute maximum is $f(2, 1) = f(-2, -1) = 2$ , and the absolute minimum is $f(-2, 1) = f(2, -1) = -2$ . 

The Geometry of the **Solution** The level curves of the function $f(x,y)=xy$ are the hyperbolas xy=c (Figure 13.57). The farther the hyperbolas lie from the origin, the larger the absolute value of f. We want to find the extreme values of $f(x,y)$ , given that the point $(x,y)$ also lies on the ellipse $x^{2}+4y^{2}=8$ . Which hyperbolas intersecting the ellipse lie farthest from the origin? The hyperbolas that just graze the ellipse, the ones that are tangent to it, are farthest. At these points, any vector normal to the hyperbola is normal to the ellipse, so $\nabla f=y\mathbf{i}+x\mathbf{j}$ is a multiple $(\lambda=\pm2)$ of $\nabla g=(x/4)\mathbf{i}+y\mathbf{j}$ . At the point $(2,1)$ , for example, 

$$
\nabla f = \mathbf {i} + 2 \mathbf {j}, \quad \nabla g = \frac {1}{2} \mathbf {i} + \mathbf {j}, \quad \text { and } \quad \nabla f = 2 \nabla g.
$$

At the point $(-2,1)$ , 

$$
\nabla f = \mathbf {i} - 2 \mathbf {j}, \quad \nabla g = - \frac {1}{2} \mathbf {i} + \mathbf {j}, \quad \text { and } \quad \nabla f = - 2 \nabla g.
$$

**EXAMPLE 4** Find the maximum and minimum values of the function $f(x, y) = 3x + 4y$ on the circle $x^{2} + y^{2} = 1$ . 

**Solution** We model this as a Lagrange multiplier problem with 

$$
f (x, y) = 3 x + 4 y, \quad g (x, y) = x ^ {2} + y ^ {2} - 1
$$

and look for the values of $x, y$ , and $\lambda$ that satisfy the equations 

$$
\begin{array}{l l} \nabla f = \lambda \nabla g: & 3 \mathbf {i} + 4 \mathbf {j} = 2 x \lambda \mathbf {i} + 2 y \lambda \mathbf {j} \\ g (x, y) = 0: & x ^ {2} + y ^ {2} - 1 = 0. \end{array}
$$

The gradient equation implies that $\lambda \neq 0$ and gives 

$$
x = \frac {3}{2 \lambda}, \quad y = \frac {2}{\lambda}.
$$

These equations tell us, among other things, that $x$ and $y$ have the same sign. With these values for $x$ and $y$ , the equation $g(x, y) = 0$ gives 

$$
\left(\frac {3}{2 \lambda}\right) ^ {2} + \left(\frac {2}{\lambda}\right) ^ {2} - 1 = 0,
$$

SO 

$$
\frac {9}{4 \lambda^ {2}} + \frac {4}{\lambda^ {2}} = 1, \quad 9 + 1 6 = 4 \lambda^ {2}, \quad 4 \lambda^ {2} = 2 5, \quad \text { and } \quad \lambda = \pm \frac {5}{2}.
$$

Thus, 

$$
x = \frac {3}{2 \lambda} = \pm \frac {3}{5}, \quad y = \frac {2}{\lambda} = \pm \frac {4}{5},
$$

and $f(x,y) = 3x + 4y$ has critical points at $(x,y) = \pm (3/5,4/5)$ . 

By calculating the value of $3x + 4y$ at the points $\pm(3/5, 4/5)$ , we see that its maximum and minimum values on the circle $x^{2} + y^{2} = 1$ are 

$$
3 \left(\frac {3}{5}\right) + 4 \left(\frac {4}{5}\right) = \frac {2 5}{5} = 5 \quad \text { and } \quad 3 \left(- \frac {3}{5}\right) + 4 \left(- \frac {4}{5}\right) = - \frac {2 5}{5} = - 5.
$$

The Geometry of the **Solution** The level curves of $f(x, y) = 3x + 4y$ are the lines $3x + 4y = c$ (Figure 13.58). The farther the lines lie from the origin, the larger the absolute value of f. We want to find the extreme values of $f(x, y)$ given that the point $(x, y)$ 

![[9a94ba3b4feea0da68d1aa603c6fa2d96b67990db6b20fbebc1e05d43e7acd98.jpg|image]]



FIGURE 13.59 The vectors $\nabla g_{1}$ and $\nabla g_{2}$ lie in a plane perpendicular to the curve $C$ , because $\nabla g_{1}$ is normal to the surface $g_{1} = 0$ and $\nabla g_{2}$ is normal to the surface $g_{2} = 0$ .


also lies on the circle $x^{2} + y^{2} = 1$ . Which lines intersecting the circle lie farthest from the origin? The lines tangent to the circle are farthest. At the points of tangency, any vector normal to the line is normal to the circle, so the gradient $\nabla f = 3i + 4j$ is a multiple $(\lambda = \pm5/2)$ of the gradient $\nabla g = 2x\mathbf{i} + 2y\mathbf{j}$ . At the point $(3/5, 4/5)$ , for example, 

$$
\nabla f = 3 \mathbf {i} + 4 \mathbf {j}, \quad \nabla g = \frac {6}{5} \mathbf {i} + \frac {8}{5} \mathbf {j}, \quad \text { and } \quad \nabla f = \frac {5}{2} \nabla g.
$$

## Lagrange Multipliers with Two Constraints

Many problems require us to find the extreme values of a differentiable function $f(x, y, z)$ whose variables are subject to two constraints. If the constraints are 

$$
g _ {1} (x, y, z) = 0 \quad \text { and } \quad g _ {2} (x, y, z) = 0
$$

and $g_{1}$ and $g_{2}$ are differentiable, with $\nabla g_{1}$ not parallel to $\nabla g_{2}$ , we find the constrained local maxima and minima of f by introducing two Lagrange multipliers $\lambda$ and $\mu$ (mu, pronounced “mew”). That is, we locate the points $P(x,y,z)$ where f takes on its constrained extreme values by finding the values of x, y, z, $\lambda$ , and $\mu$ that simultaneously satisfy the three equations 

$$
\nabla f = \lambda \nabla g _ {1} + \mu \nabla g _ {2}, \quad g _ {1} (x, y, z) = 0, \quad g _ {2} (x, y, z) = 0\tag{2}
$$

Equations (2) have a nice geometric interpretation. The surfaces $g_{1} = 0$ and $g_{2} = 0$ (usually) intersect in a smooth curve, say C (Figure 13.59). Along this curve we seek the points where f has local maximum and minimum values relative to its other values on the curve. These are the points where $\nabla f$ is normal to C, as we saw in Theorem 12. But $\nabla g_{1}$ and $\nabla g_{2}$ are also normal to C at these points because C lies in the surfaces $g_{1} = 0$ and $g_{2} = 0$ . Therefore, $\nabla f$ lies in the plane determined by $\nabla g_{1}$ and $\nabla g_{2}$ , which means that $\nabla f = \lambda \nabla g_{1} + \mu \nabla g_{2}$ for some $\lambda$ and $\mu$ . Since the points we seek also lie in both surfaces, their coordinates must satisfy the equations $g_{1}(x, y, z) = 0$ and $g_{2}(x, y, z) = 0$ , which are the remaining requirements in Equations (2). 

**EXAMPLE 5** The plane $x + y + z = 1$ cuts the cylinder $x^{2} + y^{2} = 1$ in an ellipse (Figure 13.60). Find the points on the ellipse that lie closest to and farthest from the origin. 

![[3159ad4c3318a81286e990a9d362c82d70cb94aa79595f374f9a3a85f8bc1955.jpg|image]]



FIGURE 13.60 On the ellipse where the plane and cylinder meet, we find the points closest to and farthest from the origin (Example 5).


**Solution** We find the extreme values of 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2}
$$

(the square of the distance from $(x, y, z)$ to the origin) subject to the constraints 

$$
g _ {1} (x, y, z) = x ^ {2} + y ^ {2} - 1 = 0\tag{3}
$$

$$
g _ {2} (x, y, z) = x + y + z - 1 = 0.\tag{4}
$$

The gradient equation in Equations (2) then gives 

$$
\begin{array}{c} \nabla f = \lambda \nabla g _ {1} + \mu \nabla g _ {2} \\ 2 x \mathbf {i} + 2 y \mathbf {j} + 2 z \mathbf {k} = \lambda (2 x \mathbf {i} + 2 y \mathbf {j}) + \mu (\mathbf {i} + \mathbf {j} + \mathbf {k}) \\ 2 x \mathbf {i} + 2 y \mathbf {j} + 2 z \mathbf {k} = (2 \lambda x + \mu) \mathbf {i} + (2 \lambda y + \mu) \mathbf {j} + \mu \mathbf {k}, \end{array}
$$

or 

$$
2 x = 2 \lambda x + \mu , \quad 2 y = 2 \lambda y + \mu , \quad 2 z = \mu .\tag{5}
$$

The scalar equations in Equations (5) yield 

$$
\begin{array}{l} 2 x = 2 \lambda x + 2 z \Rightarrow (1 - \lambda) x = z, \\ 2 y = 2 \lambda y + 2 z \Rightarrow (1 - \lambda) y = z. \end{array}\tag{6}
$$

Equations (6) are satisfied simultaneously if either $\lambda = 1$ and $z = 0$ or $\lambda \neq 1$ and $x = y = z / (1 - \lambda)$ . 

In the first case, where z = 0, solving Equations (3) and (4) simultaneously to find the corresponding points on the ellipse gives the two points $(1, 0, 0)$ and $(0, 1, 0)$ . This makes sense when you look at Figure 13.60. 

In the second case, where $x = y$ , Equations (3) and (4) give 

$$
\begin{array}{c c} x ^ {2} + x ^ {2} - 1 = 0 & x + x + z - 1 = 0 \\ 2 x ^ {2} = 1 & z = 1 - 2 x \\ x = \pm \frac {\sqrt {2}}{2} & z = 1 \mp \sqrt {2}. \end{array}
$$

The corresponding points on the ellipse are 

$$
P _ {1} = \left(\frac {\sqrt {2}}{2}, \frac {\sqrt {2}}{2}, 1 - \sqrt {2}\right) \quad \text { and } \quad P _ {2} = \left(- \frac {\sqrt {2}}{2}, - \frac {\sqrt {2}}{2}, 1 + \sqrt {2}\right).
$$

To find the points at maximum and minimum distance from the origin, we evaluate $f$ at the four critical points $(1,0,0), (0,1,0), P_1$ , and $P_2$ . We see that 

$$
f (1, 0, 0) = f (0, 1, 0) = 1, \quad f (P _ {1}) = 4 - 2 \sqrt {2}, \text { and } \quad f (P _ {2}) = 4 + 2 \sqrt {2}.
$$

The largest and smallest of these give the absolute extrema. Since 

$$
1 <   4 - 2 \sqrt {2} <   4 + 2 \sqrt {2},
$$

we see that the absolute minimum value of $f$ is 1 and is attained when $f$ is evaluated at either $(1,0,0)$ or $(0,1,0)$ . The absolute maximum value of $f$ is $4 + 2\sqrt{2}$ and occurs when $f$ is evaluated at $P_{2}$ . The value $f(P_{1}) = 4 - 2\sqrt{2}$ is neither the largest nor the smallest among the values of $f$ at the critical points, so $f$ does not have an absolute extremum at $P_{1}$ . 

The points on the ellipse closest to the origin are $(1,0,0)$ and $(0,1,0)$ . The point on the ellipse farthest from the origin is $P_{2}$ . (See Figure 13.60.) 

## EXERCISES 13.8

Two Independent Variables with One Constraint 

1. Extrema on an ellipse Find the points on the ellipse $x^{2} + 2y^{2} = 1$ where $f(x, y) = xy$ has its extreme values. 

2. Extrema on a circle Find the extreme values of $f(x, y) = xy$ subject to the constraint $g(x, y) = x^{2} + y^{2} - 10 = 0$ . 

3. Maximum on a line Find the maximum value of $f(x, y) = 49 - x^{2} - y^{2}$ on the line $x + 3y = 10$ . 

4. Extrema on a line Find the local extreme values of $f(x, y) = x^{2}y$ on the line $x + y = 3$ . 

5. Constrained minimum Find the points on the curve $xy^{2} = 54$ nearest the origin. 

6. Constrained minimum Find the points on the curve $x^{2}y = 2$ nearest the origin. 

7. Use the method of Lagrange multipliers to find 

a. Minimum on a hyperbola The minimum value of $x + y$ , subject to the constraints $xy = 16, x > 0, y > 0$ . 

b. Maximum on a line The maximum value of xy, subject to the constraint $x + y = 16$ . 

Comment on the geometry of each solution. 

8. Extrema on a curve Find the points on the curve $x^{2} + xy + y^{2} = 1$ in the xy-plane that are nearest to and farthest from the origin. 

9. Minimum surface area with fixed volume Find the dimensions of the closed right circular cylindrical can of smallest surface area whose volume is $16\pi \, cm^{3}$ . 

10. Cylinder in a sphere Find the radius and height of the open right circular cylinder of largest surface area that can be inscribed in a sphere of radius $a$ . What is the largest surface area? 

11. Rectangle of greatest area in an ellipse Use the method of Lagrange multipliers to find the dimensions of the rectangle of greatest area that can be inscribed in the ellipse $x^{2} / 16 + y^{2} / 9 = 1$ with sides parallel to the coordinate axes. 

12. Rectangle of longest perimeter in an ellipse Find the dimensions of the rectangle of largest perimeter that can be inscribed in the ellipse $x^{2}/a^{2} + y^{2}/b^{2} = 1$ with sides parallel to the coordinate axes. What is the largest perimeter? 

13. Extrema on a circle Find the maximum and minimum values of $x^{2} + y^{2}$ subject to the constraint $x^{2} - 2x + y^{2} - 4y = 0$ . 

14. Extrema on a circle Find the maximum and minimum values of $3x - y + 6$ subject to the constraint $x^{2} + y^{2} = 4$ . 

15. Ant on a metal plate The temperature at a point $(x, y)$ on a metal plate is $T(x, y) = 4x^{2} - 4xy + y^{2}$ . An ant on the plate walks around the circle of radius 5 centered at the origin. What are the highest and lowest temperatures encountered by the ant? 

16. Cheapest storage tank Your firm has been asked to design a storage tank for liquid petroleum gas. The customer's specifications call for a cylindrical tank with hemispherical ends, and the tank is to hold $8000\mathrm{m}^3$ of gas. The customer also wants to use the smallest amount of material possible in building the tank. What radius and height do you recommend for the cylindrical portion of the tank? 

Three Independent Variables with One Constraint 

17. Minimum distance to a point Find the point on the plane $x + 2y + 3z = 13$ closest to the point $(1,1,1)$ . 

18. Maximum distance to a point Find the point on the sphere $x^{2} + y^{2} + z^{2} = 4$ farthest from the point $(1, -1, 1)$ . 

19. Minimum distance to the origin Find the minimum distance from the surface $x^{2} - y^{2} - z^{2} = 1$ to the origin. 

20. Minimum distance to the origin Find the point on the surface $z = xy + 1$ nearest the origin. 

21. Minimum distance to the origin Find the points on the surface $z^2 = xy + 4$ closest to the origin. 

22. Minimum distance to the origin Find the point(s) on the surface xyz = 1 closest to the origin. 

23. Extrema on a sphere Find the maximum and minimum values of 

$$
f (x, y, z) = x - 2 y + 5 z
$$

on the sphere $x^{2} + y^{2} + z^{2} = 30$ . 

24. Extrema on a sphere Find the points on the sphere $x^{2} + y^{2} + z^{2} = 25$ where $f(x, y, z) = x + 2y + 3z$ has its maximum and minimum values. 

25. Minimizing a sum of squares Find three real numbers whose sum is 9 and the sum of whose squares is as small as possible. 

26. Maximizing a product Find the largest product the positive numbers x, y, and z can have if $x + y + z^{2} = 16$ . 

27. Rectangular box of largest volume in a sphere Find the dimensions of the closed rectangular box with maximum volume that can be inscribed in the unit sphere. 

28. Box with vertex on a plane Find the volume of the largest closed rectangular box in the first octant having three faces in the coordinate planes and a vertex on the plane $x / a + y / b + z / c = 1$ , where $a > 0$ , $b > 0$ , and $c > 0$ . 

29. Hottest point on a space probe A space probe in the shape of the ellipsoid 

$$
4 x ^ {2} + y ^ {2} + 4 z ^ {2} = 1 6
$$

enters Earth's atmosphere and its surface begins to heat. After 1 hour, the temperature at the point $(x,y,z)$ on the probe's surface is 

$$
T (x, y, z) = 8 x ^ {2} + 4 y z - 1 6 z + 6 0 0.
$$

Find the hottest point on the probe's surface. 

30. Extreme temperatures on a sphere Suppose that the Celsius temperature at the point $(x, y, z)$ on the sphere $x^{2} + y^{2} + z^{2} = 1$ is $T = 400xyz^{2}$ . Locate the highest and lowest temperatures on the sphere. 

31. Cobb–Douglas production function During the 1920s, Charles Cobb and Paul Douglas modeled total production output P (of a firm, industry, or entire economy) as a function of labor hours involved x and capital invested y (which includes the monetary worth of all buildings and equipment). The Cobb–Douglas production function is given by 

$$
P (x, y) = k x ^ {\alpha} y ^ {1 - \alpha},
$$

where k and $\alpha$ are constants representative of a particular firm or economy. 

a. Show that a doubling of both labor and capital results in a doubling of production P. 

b. Suppose a particular firm has the production function for $k = 120$ and $\alpha = 3/4$ . Assume that each unit of labor costs $250 and each unit of capital costs $400, and that the total expenses for all costs cannot exceed $100,000. Find the maximum production level for the firm. 

32. (Continuation of Exercise 31.) If the cost of a unit of labor is $c_{1}$ and the cost of a unit of capital is $c_{2}$ , and if the firm can spend only $B$ dollars as its total budget, then production $P$ is constrained by $c_{1}x + c_{2}y = B$ . Show that the maximum production level subject to the constraint occurs at the point 

$$
x = \frac {\alpha B}{c _ {1}} \text { and } y = \frac {(1 - \alpha) B}{c _ {2}}.
$$

33. Maximizing a utility function: an example from economics In economics, the usefulness or utility of amounts $x$ and $y$ of two capital goods $G_{1}$ and $G_{2}$ is sometimes measured by a function $U(x,y)$ . For example, $G_{1}$ and $G_{2}$ might be two chemicals a pharmaceutical company needs to have on hand, and $U(x,y)$ might be the gain from manufacturing a product whose synthesis requires different amounts of the chemicals depending on the process used. If $G_{1}$ costs $a$ dollars per kilogram, $G_{2}$ costs $b$ dollars per kilogram, and the total amount allocated for the purchase of $G_{1}$ and $G_{2}$ together is $c$ dollars, then the company's managers want to maximize $U(x,y)$ given that $ax + by = c$ . Thus, they need to solve a typical Lagrange multiplier problem. 

Suppose that 

$$
U (x, y) = x y + 2 x
$$

and that the equation $ax + by = c$ simplifies to 

$$
2 x + y = 3 0.
$$

Find the maximum value of U and the corresponding values of x and y subject to this latter constraint. 

34. Blood types Human blood types are classified by three gene forms A, B, and O. Blood types AA, BB, and OO are homozygous, and blood types AB, AO, and BO are heterozygous. If p, q, and r represent the proportions of the three gene forms to the population, respectively, then the Hardy–Weinberg Law asserts that the proportion Q of heterozygous persons in any specific population is modeled by 

$$
Q (p, q, r) = 2 (p q + p r + q r),
$$

subject to $p + q + r = 1$ . Find the maximum value of Q. 

35. Length of a beam In Section 4.6, Exercise 47, we posed a problem of finding the length L of the shortest beam that can reach over a wall of height h to a tall building located k units from the wall. Use Lagrange multipliers to show that 

$$
L = \left(h ^ {2 / 3} + k ^ {2 / 3}\right) ^ {3 / 2}.
$$

36. Locating a radio telescope You are in charge of erecting a radio telescope on a newly discovered planet. To minimize interference, you want to place it where the magnetic field of the planet is weakest. The planet is spherical, with a radius of 6 units. Based on a coordinate system whose origin is at the center of the planet, the strength of the magnetic field is given by $M(x,y,z)=6x-y^{2}+xz+60$ . Where should you locate the radio telescope? 

## Extreme Values Subject to Two Constraints

37. Maximize the function $f(x, y, z) = x^{2} + 2y - z^{2}$ subject to the constraints 2x - y = 0 and $y + z = 0$ . 

38. Minimize the function $f(x, y, z) = x^{2} + y^{2} + z^{2}$ subject to the constraints $x + 2y + 3z = 6$ and $x + 3y + 9z = 9$ . 

39. Minimum distance to the origin Find the point closest to the origin on the line of intersection of the planes $y + 2z = 12$ and $x + y = 6$ . 

40. Find the extreme values of $f(x, y, z) = 2x^2 + yz$ on the intersection of the cylinder $x^2 + z^2 = 9$ and the plane $y - z = 4$ . 

41. Extrema on a curve of intersection Find the extreme values of $f(x,y,z) = x^{2}yz + 1$ on the intersection of the plane $z = 1$ with the sphere $x^{2} + y^{2} + z^{2} = 10$ . 

42. a. Maximum on line of intersection Find the maximum value of w = xyz on the line of intersection of the two planes $x + y + z = 40$ and $x + y - z = 0$ . 

b. Give a geometric argument to support your claim that you have found a maximum, and not a minimum, value of w. 

43. Extrema on a circle of intersection Find the extreme values of the function $f(x,y,z)=xy+z^{2}$ on the circle in which the plane y-x=0 intersects the sphere $x^{2}+y^{2}+z^{2}=4$ . 

44. Minimum distance to the origin Find the point closest to the origin on the curve of intersection of the plane $2y + 4z = 5$ and the cone $z^{2} = 4x^{2} + 4y^{2}$ . 

## Theory and Examples

45. The condition $\nabla f = \lambda \nabla g$ is not sufficient Even though $\nabla f = \lambda \nabla g$ is a necessary condition for the occurrence of an extreme value of $f(x, y)$ subject to the conditions $g(x, y) = 0$ and $\nabla g \neq 0$ , it does not in itself guarantee that one exists. As a case in point, try using the method of Lagrange multipliers to find a maximum value of $f(x, y) = x + y$ subject to the constraint that xy = 16. The method will identify the two points (4, 4) and (-4, -4) as candidates for the location of extreme values. Yet the sum $x + y$ has no maximum value on the hyperbola xy = 16. The farther you go from the origin on this hyperbola in the first quadrant, the larger the sum $f(x, y) = x + y$ becomes. 

46. A least squares plane The plane $z = Ax + By + C$ is to be "fitted" to the following points $(x_{k}, y_{k}, z_{k})$ : 

$$
(0, 0, 0), \qquad (0, 1, 1), \qquad (1, 1, 1), \qquad (1, 0, - 1).
$$

Find the values of A, B, and C that minimize 

$$
\sum_ {k = 1} ^ {4} (A x _ {k} + B y _ {k} + C - z _ {k}) ^ {2},
$$

the sum of the squares of the deviations. 

47. a. Maximum on a sphere Show that the maximum value of $a^2 b^2 c^2$ on a sphere of radius $r$ centered at the origin of a Cartesian abc-coordinate system is $(r^2 / 3)^3$ . 

b. Geometric and arithmetic means Using part (a), show that for nonnegative numbers $a$ , $b$ , and $c$ , 

$$
(a b c) ^ {1 / 3} \leq \frac {a + b + c}{3};
$$

that is, the geometric mean of three nonnegative numbers is less than or equal to their arithmetic mean. 

48. Sum of products Let $a_{1}, a_{2}, \ldots, a_{n}$ be n positive numbers. Find the maximum of $\sum_{i=1}^{n} a_{i} x_{i}$ subject to the constraint $\sum_{i=1}^{n} x_{i}^{2} = 1$ . 

## COMPUTER EXPLORATIONS

In Exercises 49–54, use a CAS to perform the following steps implementing the method of Lagrange multipliers for finding constrained extrema: 

a. Form the function $h = f - \lambda_1 g_1 - \lambda_2 g_2$ , where $f$ is the function to optimize subject to the constraints $g_1 = 0$ and $g_2 = 0$ . 

b. Determine all the first partial derivatives of $h$ , including the partials with respect to $\lambda_1$ and $\lambda_2$ , and set them equal to 0. 

c. Solve the system of equations found in part (b) for all the unknowns, including $\lambda_{1}$ and $\lambda_{2}$ . 

d. Evaluate f at each of the solution points found in part (c), and select the extreme value subject to the constraints asked for in the exercise. 

49. Minimize $f(x,y,z)=xy+yz$ subject to the constraints $x^{2}+y^{2}-2=0$ and $x^{2}+z^{2}-2=0$ . 

50. Minimize $f(x,y,z)=xyz$ subject to the constraints $x^{2}+y^{2}-1=0$ and x-z=0. 

51. Maximize $f(x,y,z)=x^{2}+y^{2}+z^{2}$ subject to the constraints $2y+4z-5=0$ and $4x^{2}+4y^{2}-z^{2}=0$ . 

52. Minimize $f(x, y, z) = x^2 + y^2 + z^2$ subject to the constraints $x^2 - xy + y^2 - z^2 - 1 = 0$ and $x^2 + y^2 - 1 = 0$ . 

53. Minimize $f(x,y,z,w)=x^{2}+y^{2}+z^{2}+w^{2}$ subject to the constraints $2x-y+z-w-1=0$ and $x+y-z+w-1=0$ . 

54. Determine the distance from the line $y = x + 1$ to the parabola $y^{2} = x$ . (Hint: Let $(x, y)$ be a point on the line and $(w, z)$ a point on the parabola. You want to minimize $(x - w)^{2} + (y - z)^{2}$ .) 

## 13.9 Taylor's Formula for Two Variables

In this section we use Taylor's formula to derive the Second Derivative Test for local extreme values (Section 13.7) and the error formula for linearizations of functions of two independent variables (Section 13.6). The use of Taylor's formula in these derivations leads to an extension of the formula that provides polynomial approximations of all orders for functions of two independent variables. 

![[29f878fd939ea08aee728bf316dcbcfe360ea5f5d46ae30adc594dcc4984a97e.jpg|image]]


## Derivation of the Second Derivative Test


FIGURE 13.61 We begin the derivation of the Second Derivative Test at $P(a, b)$ by parametrizing a typical line segment from P to a point S nearby.


Let $f(x, y)$ have continuous first and second partial derivatives in an open region R containing a point $P(a, b)$ where $f_x = f_y = 0$ (Figure 13.61). Let h and k be increments small enough to put the point $S(a + h, b + k)$ and the line segment joining it to P inside R. We parametrize the segment PS as 

$$
x = a + t h, \quad y = b + t k, \quad 0 \leq t \leq 1.
$$

If $F(t) = f(a + th, b + tk)$ , the Chain Rule gives 

$$
F ^ {\prime} (t) = f _ {x} \frac {d x}{d t} + f _ {y} \frac {d y}{d t} = h f _ {x} + k f _ {y}.
$$

Since $f_{x}$ and $f_{y}$ are differentiable (because they have continuous partial derivatives), $F'$ is a differentiable function of $t$ and 

$$
\begin{array}{r l} F ^ {\prime \prime} & = \frac {\partial F ^ {\prime}}{\partial x} \frac {d x}{d t} + \frac {\partial F ^ {\prime}}{\partial y} \frac {d y}{d t} = \frac {\partial}{\partial x} \left(h f _ {x} + k f _ {y}\right) \cdot h + \frac {\partial}{\partial y} \left(h f _ {x} + k f _ {y}\right) \cdot k \\ & = h ^ {2} f _ {x x} + 2 h k f _ {x y} + k ^ {2} f _ {y y}. \quad f _ {x y} = f _ {y x} \end{array}
$$

Since $F$ and $F'$ are continuous on $[0,1]$ and $F'$ is differentiable on $(0,1)$ , we can apply Taylor's formula with $n = 2$ and $a = 0$ to obtain 

$$
\begin{array}{c} F (1) = F (0) + F ^ {\prime} (0) (1 - 0) + F ^ {\prime \prime} (c) \frac {(1 - 0) ^ {2}}{2} \\ = F (0) + F ^ {\prime} (0) + \frac {1}{2} F ^ {\prime \prime} (c) \end{array}\tag{1}
$$

for some c between 0 and 1. Writing Equation (1) in terms of f gives 

$$
\begin{array}{l} f (a + h, b + k) = f (a, b) + h f _ {x} (a, b) + k f _ {y} (a, b) \\ \qquad + \frac {1}{2} \bigl (h ^ {2} f _ {x x} + 2 h k f _ {x y} + k ^ {2} f _ {y y} \bigr) \Big | _ {(a + c h, b + c k)}. \end{array}\tag{2}
$$

Since $f_{x}(a,b) = f_{y}(a,b) = 0$ , this reduces to 

$$
f (a + h, b + k) - f (a, b) = \frac {1}{2} \left(h ^ {2} f _ {x x} + 2 h k f _ {x y} + k ^ {2} f _ {y y}\right) \Big | _ {(a + c h, b + c k)}.\tag{3}
$$

To determine whether $f$ has an extremum at $(a, b)$ , we examine the sign of the difference $f(a + h, b + k) - f(a, b)$ . By Equation (3), this is the same as the sign of 

$$
Q (c) = \left(h ^ {2} f _ {x x} + 2 h k f _ {x y} + k ^ {2} f _ {y y}\right) \Bigg | _ {(a + c h, b + c k)}.
$$

Now, if $Q(0) \neq 0$ , the sign of $Q(c)$ will be the same as the sign of $Q(0)$ for sufficiently small values of $h$ and $k$ . We can predict the sign of 

$$
Q (0) = h ^ {2} f _ {x x} (a, b) + 2 h k f _ {x y} (a, b) + k ^ {2} f _ {y y} (a, b)\tag{4}
$$

from the signs of $f_{xx}$ and $f_{xx}f_{yy} - f_{xy}^{2}$ at $(a, b)$ . Multiply both sides of Equation (4) by $f_{xx}$ and rearrange the right-hand side to get 

$$
f _ {x x} Q (0) = \left(h f _ {x x} + k f _ {x y}\right) ^ {2} + \left(f _ {x x} f _ {y y} - f _ {x y} ^ {2}\right) k ^ {2}.\tag{5}
$$

From Equation (5) we see that 

1. If $f_{xx} < 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b)$ , then $Q(0) < 0$ for all sufficiently small nonzero values of $h$ and $k$ , and $f$ has a local maximum value at $(a, b)$ . 

2. If $f_{xx} > 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$ at $(a, b)$ , then $Q(0) > 0$ for all sufficiently small nonzero values of $h$ and $k$ , and $f$ has a local minimum value at $(a, b)$ . 

3. If $f_{xx}f_{yy} - f_{xy}^{2} < 0$ at $(a, b)$ , there are combinations of arbitrarily small nonzero values of h and k for which $Q(0) > 0$ , and other values for which $Q(0) < 0$ . Arbitrarily close to the point $P_{0}(a, b, f(a, b))$ on the surface $z = f(x, y)$ there are points above $P_{0}$ and points below $P_{0}$ , so f has a saddle point at $(a, b)$ . 

4. If $f_{xx}f_{yy} - f_{xy}^2 = 0$ , another test is needed. The possibility that $Q(0)$ equals zero prevents us from drawing conclusions about the sign of $Q(c)$ . 

## The Error Formula for Linear Approximations

We want to show that the difference $E(x, y)$ between the values of a function $f(x, y)$ and its linearization $L(x, y)$ at $(x_{0}, y_{0})$ satisfies the inequality 

$$
\left| E (x, y) \right| \leq \frac {1}{2} M \left(\left| x - x _ {0} \right| + \left| y - y _ {0} \right|\right) ^ {2}.
$$

The function $f$ is assumed to have continuous second partial derivatives throughout an open set containing a closed rectangular region $R$ centered at $(x_0, y_0)$ . The number $M$ is an upper bound for $|f_{xx}|, |f_{yy}|$ , and $|f_{xy}|$ on $R$ . 

The inequality we want comes from Equation (2). We substitute $x_0$ and $y_0$ for $a$ and $b$ , and $x - x_0$ and $y - y_0$ for $h$ and $k$ , respectively, and rearrange the result as 

$$
\begin{array}{l} f (x, y) = \underbrace {f (x _ {0} , y _ {0}) + f _ {x} (x _ {0} , y _ {0}) (x - x _ {0}) + f _ {y} (x _ {0} , y _ {0}) (y - y _ {0})} _ {\text { linearization   L(x,y) }} \\ \quad + \underbrace {\frac {1}{2} \big ((x - x _ {0}) ^ {2} f _ {x x} + 2 (x - x _ {0}) (y - y _ {0}) f _ {x y} + (y - y _ {0}) ^ {2} f _ {y y} \big) \Big | _ {(x _ {0} + c (x - x _ {0}) , y _ {0} + c (y - y _ {0}))}}. \end{array}
$$

This equation reveals that 

$$
| E | \leq \frac {1}{2} \left( \right.| x - x _ {0} | ^ {2} \mid f _ {x x} \left. \right\rvert + 2 | x - x _ {0} | | y - y _ {0} | \left| f _ {x y} \right| + | y - y _ {0} | ^ {2} \left| f _ {y y} \right|\left. \right).
$$

Hence, if $M$ is an upper bound for the values of $|f_{xx}|, |f_{xy}|$ , and $|f_{yy}|$ on $R$ , then 

$$
\begin{array}{l} | E | \leq \frac {1}{2} \big (| x - x _ {0} | ^ {2} M + 2 | x - x _ {0} | | y - y _ {0} | M + | y - y _ {0} | ^ {2} M \big) \\ = \frac {1}{2} M (| x - x _ {0} | + | y - y _ {0} |) ^ {2}. \end{array}
$$

## Taylor's Formula for Functions of Two Variables

The formulas derived earlier for $F'$ and $F''$ can be obtained by applying to $f(x, y)$ the differentiation operators 

$$
\left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) \quad \text { and } \quad \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {2} = h ^ {2} \frac {\partial^ {2}}{\partial x ^ {2}} + 2 h k \frac {\partial^ {2}}{\partial x   \partial y} + k ^ {2} \frac {\partial^ {2}}{\partial y ^ {2}}.
$$

These are the first two instances of a more general formula, 

$$
F ^ {(n)} (t) = \frac {d ^ {n}}{d t ^ {n}} F (t) = \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n} f (x, y),\tag{6}
$$

which says that applying $d^{n}/dt^{n}$ to $F(t)$ gives the same result as applying the operator 

$$
\left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n}
$$

to $f(x, y)$ after expanding it by the Binomial Theorem. 

If the partial derivatives of $f$ through order $n + 1$ are continuous throughout a rectangular region centered at $(a, b)$ , we may extend the Taylor formula for $F(t)$ to 

$$
F (t) = F (0) + F ^ {\prime} (0) t + \frac {F ^ {\prime \prime} (0)}{2 !} t ^ {2} + \dots + \frac {F ^ {(n)} (0)}{n !} t ^ {(n)} + \text { remainder },
$$

and take t = 1 to obtain 

$$
F (1) = F (0) + F ^ {\prime} (0) + \frac {F ^ {\prime \prime} (0)}{2 !} + \dots + \frac {F ^ {(n)} (0)}{n !} + \text { remainder }.
$$

When we replace the first n derivatives on the right of this last series by their equivalent expressions from Equation (6) evaluated at t = 0 and add the appropriate remainder term, we arrive at the following formula. 

Taylor's Formula for $f(x, y)$ at the Point $(a, b)$ 

Suppose $f(x, y)$ and its partial derivatives through order $n + 1$ are continuous throughout an open rectangular region $R$ centered at a point $(a, b)$ . Then, throughout $R$ , 

$$
\begin{array}{l} f (a + h, b + k) = f (a, b) + \left(h f _ {x} + k f _ {y}\right) \bigg | _ {(a, b)} + \frac {1}{2 !} \left(h ^ {2} f _ {x x} + 2 h k f _ {x y} + k ^ {2} f _ {y y}\right) \bigg | _ {(a, b)} \\ \qquad + \frac {1}{3 !} \left(h ^ {3} f _ {x x x} + 3 h ^ {2} k f _ {x x y} + 3 h k ^ {2} f _ {x y y} + k ^ {3} f _ {y y y}\right) \bigg | _ {(a, b)} + \dots + \frac {1}{n !} \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n} f \bigg | _ {(a, b)} \\ \qquad + \frac {1}{(n + 1) !} \left(h \frac {\partial}{\partial x} + k \frac {\partial}{\partial y}\right) ^ {n + 1} f \bigg | _ {(a + c h, b + c k)}. \end{array}\tag{7}
$$

The first n derivative terms are evaluated at $(a, b)$ . The last term is evaluated at some point $(a + ch, b + ck)$ on the line segment joining $(a, b)$ and $(a + h, b + k)$ . 

If $(a,b)=(0,0)$ and we treat h and k as independent variables (denoting them now by x and y), then Equation (7) assumes the following form. 

Taylor's Formula for $f(x, y)$ at the Origin 

$$
\begin{array}{l} f (x, y) = f (0, 0) + x f _ {x} + y f _ {y} + \frac {1}{2 !} \left(x ^ {2} f _ {x x} + 2 x y f _ {x y} + y ^ {2} f _ {y y}\right) \\ \quad + \frac {1}{3 !} \left(x ^ {3} f _ {x x x} + 3 x ^ {2} y f _ {x x y} + 3 x y ^ {2} f _ {x y y} + y ^ {3} f _ {y y y}\right) + \dots + \frac {1}{n !} \left(x ^ {n} \frac {\partial^ {n} f}{\partial x ^ {n}} + n x ^ {n - 1} y \frac {\partial^ {n} f}{\partial x ^ {n - 1} \partial y} + \dots + y ^ {n} \frac {\partial^ {n} f}{\partial y ^ {n}}\right) \\ \quad + \frac {1}{(n + 1) !} \left(x ^ {n + 1} \frac {\partial^ {n + 1} f}{\partial x ^ {n + 1}} + (n + 1) x ^ {n} y \frac {\partial^ {n + 1} f}{\partial x ^ {n} \partial y} + \dots + y ^ {n + 1} \frac {\partial^ {n + 1} f}{\partial y ^ {n + 1}}\right) \Big | _ {(c x, c y)} \end{array}\tag{8}
$$

The first n derivative terms are evaluated at $(0,0)$ . The last term is evaluated at a point on the line segment joining the origin and $(x,y)$ . 

Taylor's formula provides polynomial approximations of two-variable functions. The first $n$ derivative terms give the polynomial; the last term gives the approximation error. The first three terms of Taylor's formula give the function's linearization. To improve on the linearization, we add higher-power terms. 

**EXAMPLE 1** Find a quadratic approximation to $f(x, y) = \sin x \sin y$ near the origin. How accurate is the approximation if $|x| \leq 0.1$ and $|y| \leq 0.1$ ? 

**Solution** We take n = 2 in Equation (8): 

$$
\begin{array}{l} f (x, y) = f (0, 0) + \left(x f _ {x} + y f _ {y}\right) + \frac {1}{2} \left(x ^ {2} f _ {x x} + 2 x y f _ {x y} + y ^ {2} f _ {y y}\right) \\ \quad + \frac {1}{6} \left(x ^ {3} f _ {x x x} + 3 x ^ {2} y f _ {x x y} + 3 x y ^ {2} f _ {x y y} + y ^ {3} f _ {y y y}\right) \Big | _ {(c x, c y)}. \end{array}
$$

Calculating the values of the partial derivatives, 

$$
f (0, 0) = \sin x \sin y \Big | _ {(0, 0)} = 0, \quad f _ {x x} (0, 0) = - \sin x \sin y \Big | _ {(0, 0)} = 0,
$$

$$
f _ {x} (0, 0) = \cos x \sin y \Big | _ {(0, 0)} = 0, f _ {x y} (0, 0) = \left. \cos x \cos y \right| _ {(0, 0)} = 1,
$$

$$
f _ {y} (0, 0) = \sin x \cos y \bigg | _ {(0, 0)} = 0, f _ {y y} (0, 0) = - \sin x \sin y \bigg | _ {(0, 0)} = 0,
$$

we have the result 

$\sin x \sin y \approx 0 + 0 + 0 + \frac{1}{2}(x^2(0) + 2xy(1) + y^2(0))$ , or $\sin x \sin y \approx xy$ . 

The error in the approximation is 

$$
E (x, y) = \frac {1}{6} \left(x ^ {3} f _ {x x x} + 3 x ^ {2} y f _ {x x y} + 3 x y ^ {2} f _ {x y y} + y ^ {3} f _ {y y y}\right) \Big | _ {(c x, c y)}.
$$

The third derivatives never exceed 1 in absolute value because they are products of sines and cosines. Also, $|x| \leq 0.1$ and $|y| \leq 0.1$ . Hence 

$$
\left| E (x, y) \right| \leq \frac {1}{6} \big ((0. 1) ^ {3} + 3 (0. 1) ^ {3} + 3 (0. 1) ^ {3} + (0. 1) ^ {3} \big) = \frac {8}{6} (0. 1) ^ {3} \leq 0. 0 0 1 3 4
$$

(rounded up). The error will not exceed 0.00134 if $|x| \leq 0.1$ and $|y| \leq 0.1$ . 

## EXERCISES

## 13.9

## Finding Quadratic and Cubic Approximations

In Exercises 1–10, use Taylor's formula for $f(x,y)$ at the origin to find quadratic and cubic approximations of f near the origin. 

1. $f(x,y) = xe^{y}$ 

2. $f(x,y) = e^{x}\cos y$ 

3. $f(x,y) = y\sin x$ 

4. $f(x,y) = \sin x\cos y$ 

5. $f(x,y)=e^{x}\ln(1+y)$ 

7. $f(x,y) = \sin (x^{2} + y^{2})$ 

6. $f(x,y) = \ln (2x + y + 1)$ 

8. $f(x,y) = \cos (x^{2} + y^{2})$ 

$$
f (x, y) = \frac {1}{1 - x - y} \quad 1 0. f (x, y) = \frac {1}{1 - x - y + x y}
$$

11. Use Taylor's formula to find a quadratic approximation of $f(x,y) = \cos x\cos y$ at the origin. Estimate the error in the approximation if $|x|\leq 0.1$ and $|y|\leq 0.1$ . 

12. Use Taylor's formula to find a quadratic approximation of $e^x \sin y$ at the origin. Estimate the error in the approximation if $|x| \leq 0.1$ and $|y| \leq 0.1$ . 

## 13.10 Partial Derivatives with Constrained Variables

In finding partial derivatives of functions like $w = f(x, y)$ , we have assumed x and y to be independent. In many applications, however, this is not the case. For example, the internal energy U of a gas may be expressed as a function $U = f(P, V, T)$ of pressure P, volume V, and temperature T. If the individual molecules of the gas do not interact, however, P, V, and T obey (and are constrained by) the ideal gas law 

$$
P V = n R T \quad (n \text {   and   } R \text {   constant }),
$$

and fail to be independent. In this section we learn how to find partial derivatives in situations like this, which occur in economics, engineering, and physics. 

## Decide Which Variables Are Dependent and Which Are Independent

If the variables in a function $w = f(x, y, z)$ are constrained by a relation like the one imposed on x, y, and z by the equation $z = x^{2} + y^{2}$ , the geometric meanings and the numerical values of the partial derivatives of f will depend on which variables are chosen to be dependent and which are chosen to be independent. To see how this choice can affect the outcome, we consider the calculation of $\partial w/\partial x$ when $w = x^{2} + y^{2} + z^{2}$ and $z = x^{2} + y^{2}$ . 

$$
\text {   **EXAMPLE   1**   } \quad \text {   Find   } \partial w / \partial x \text {   if   } w = x ^ {2} + y ^ {2} + z ^ {2} \text {   and   } z = x ^ {2} + y ^ {2}.
$$

**Solution** We are given two equations in the four unknowns x, y, z, and w. Like many such systems, this one can be solved for two of the unknowns (the dependent variables) in terms of the others (the independent variables). In being asked for $\partial w/\partial x$ , we are told that w is to be a dependent variable and x an independent variable. The possible choices for the other variables come down to 

## Dependent Independent

$$
\begin{array}{l l} \text {Choice 1:} & w, z \\ \text {Choice 2:} & w, y \end{array} \qquad \qquad \begin{array}{l l} x, y \\ x, z \end{array}
$$

In either case, we can express w explicitly in terms of the selected independent variables. We do this by using the second equation $z = x^{2} + y^{2}$ to eliminate the remaining dependent variable in the first equation. 

In the first case, the remaining dependent variable is $z$ . We eliminate it from the first equation by replacing it by $x^2 + y^2$ . The resulting expression for $w$ is 

$$
\begin{array}{r l} w & = x ^ {2} + y ^ {2} + z ^ {2} = x ^ {2} + y ^ {2} + (x ^ {2} + y ^ {2}) ^ {2} \\ & = x ^ {2} + y ^ {2} + x ^ {4} + 2 x ^ {2} y ^ {2} + y ^ {4} \end{array}
$$

![[c27fe2978bb4af823ad7d111633cb6938b2cef5802d91fd1ddea76144ff0d384.jpg|image]]



FIGURE 13.62 If P is constrained to lie on the paraboloid $z = x^{2} + y^{2}$ , the value of the partial derivative of $w = x^{2} + y^{2} + z^{2}$ with respect to x at P depends on the direction of motion (Example 1). (1) As x changes, with y = 0, P moves up or down the surface on the parabola $z = x^{2}$ in the xz-plane with $\partial w/\partial x = 2x + 4x^{3}$ . (2) As x changes, with z = 1, P moves on the circle $x^{2} + y^{2} = 1$ , z = 1, and $\partial w/\partial x = 0$ .


and therefore 

$$
\frac {\partial w}{\partial x} = 2 x + 4 x ^ {3} + 4 x y ^ {2}.\tag{1}
$$

This is the formula for $\partial w / \partial x$ when $x$ and $y$ are the independent variables. 

In the second case, where the independent variables are x and z and the remaining dependent variable is y, we eliminate the dependent variable y in the expression for w by replacing $y^{2}$ in the second equation by $z - x^{2}$ . This gives 

and therefore 

$$
w = x ^ {2} + y ^ {2} + z ^ {2} = x ^ {2} + (z - x ^ {2}) + z ^ {2} = z + z ^ {2}
$$

$$
\frac {\partial w}{\partial x} = 0.\tag{2}
$$

This is the formula for $\partial w/\partial x$ when x and z are the independent variables. 

The formulas for $\partial w / \partial x$ in Equations (1) and (2) are genuinely different. We cannot change either formula into the other by using the relation $z = x^{2} + y^{2}$ . There is not just one $\partial w / \partial x$ , there are two, and we see that the original instruction to find $\partial w / \partial x$ was incomplete. Which $\partial w / \partial x$ ? we ask. 

The geometric interpretations of Equations (1) and (2) help to explain why the equations differ. The function $w = x^{2} + y^{2} + z^{2}$ measures the square of the distance from the point $(x, y, z)$ to the origin. The condition $z = x^{2} + y^{2}$ says that the point $(x, y, z)$ lies on the paraboloid of revolution shown in Figure 13.62. What does it mean to calculate $\partial w/\partial x$ at a point $P(x, y, z)$ that can move only on this surface? What is the value of $\partial w/\partial x$ when the coordinates of P are, say, (1, 0, 1)? 

If we take $x$ and $y$ to be independent, then we find $\partial w / \partial x$ by holding $y$ fixed (at $y = 0$ in this case) and letting $x$ vary. Hence, $P$ moves along the parabola $z = x^2$ in the $xz$ -plane. As $P$ moves on this parabola, $w$ , which is the square of the distance from $P$ to the origin, changes. We calculate $\partial w / \partial x$ in this case (our first solution above) to be 

$$
\frac {\partial w}{\partial x} = 2 x + 4 x ^ {3} + 4 x y ^ {2}.
$$

At the point $P(1,0,1)$ , the value of this derivative is 

$$
{\frac {\partial w}{\partial x}} = 2 + 4 + 0 = 6.
$$

If we take x and z to be independent, then we find $\partial w/\partial x$ by holding z fixed while x varies. Since the z-coordinate of P is 1, varying x moves P along a circle in the plane z = 1. As P moves along this circle, its distance from the origin remains constant, and w, being the square of this distance, does not change. That is, 

$$
\frac {\partial w}{\partial x} = 0,
$$

as we found in our second solution. 

## How to Find $\partial w / \partial x$ When the Variables in $w = f(x, y, z)$ Are Constrained by Another Equation

As we saw in Example 1, a typical routine for finding $\partial w/\partial x$ when the variables in the function $w = f(x, y, z)$ are related by another equation has three steps. These steps apply to finding $\partial w/\partial y$ and $\partial w/\partial z$ as well. 

1. Decide which variables are to be dependent and which are to be independent. (In practice, the decision is based on the physical or theoretical context of our work. In the exercises at the end of this section, we say which variables are which.) 

2. Eliminate the other dependent variable(s) in the expression for w. 

3. Differentiate as usual. 

If we cannot carry out Step 2 after deciding which variables are dependent, we differentiate the equations as they are and try to solve for $\partial w/\partial x$ afterward. The next example shows how this is done. 

**EXAMPLE 2** Find $\partial w/\partial x$ at the point $(x,y,z)=(2,-1,1)$ if 

$$
w = x ^ {2} + y ^ {2} + z ^ {2}, \quad z ^ {3} - x y + y z + y ^ {3} = 1,
$$

and x and y are the independent variables. 

**Solution** It is not convenient to eliminate z in the expression for w. We therefore differentiate both equations implicitly with respect to x, treating x and y as independent variables and w and z as dependent variables. This gives 

$$
{\frac {\partial w}{\partial x}} = 2 x + 2 z {\frac {\partial z}{\partial x}}\tag{3}
$$

and 

$$
3 z ^ {2} \frac {\partial z}{\partial x} - y + y \frac {\partial z}{\partial x} + 0 = 0.\tag{4}
$$

These equations may now be combined to express $\partial w / \partial x$ in terms of $x, y$ , and $z$ . We solve Equation (4) for $\partial z / \partial x$ to get 

$$
\frac {\partial z}{\partial x} = \frac {y}{y + 3 z ^ {2}}
$$

and substitute into Equation (3) to get 

$$
\frac {\partial w}{\partial x} = 2 x + \frac {2 y z}{y + 3 z ^ {2}}.
$$

The value of this derivative at $(x,y,z) = (2, - 1,1)$ is 

## HISTORICAL BIOGRAPHY

## Sonya Kovalevsky (1850–1891)

$$
\left. \frac {\partial w}{\partial x} \right| _ {(2, - 1, 1)} = 2 (2) + \frac {2 (- 1) (1)}{- 1 + 3 (1) ^ {2}} = 4 + \frac {- 2}{2} = 3.
$$

Kovalevsky, a Russian mathematician, primarily worked on the theory of partial differential equations, and a central result on the existence of solutions still bears her name. She published numerous papers on partial differential equations, eventually gaining recognition as the first woman to be elected a member of the Russian Imperial Academy of Sciences in 1889. 

To know more, visit the companion Website. 

## Notation

To show what variables are assumed to be independent in calculating a derivative, we can use the following notation: 

$$
\left(\frac {\partial w}{\partial x}\right) _ {y} \quad \partial w / \partial x \text {   with   } x \text {   and   } y \text {   independent }
$$

$$
\left(\frac {\partial f}{\partial y}\right) _ {x, t} \quad \partial f / \partial y \text {   with   } y, x, \text {   and   } t \text {   independent. }
$$

$$
\text {   **EXAMPLE   3**   } \quad \text {   Find   } (\partial w / \partial x) _ {y, z} \text {   if   } w = x ^ {2} + y - z + \sin t \text {   and   } x + y = t.
$$

**Solution** With x, y, z independent, we have 

$$
\begin{array}{c} t = x + y, \quad w = x ^ {2} + y - z + \sin (x + y) \\ \left(\frac {\partial w}{\partial x}\right) _ {y, z} = 2 x + 0 - 0 + \cos (x + y) \frac {\partial}{\partial x} (x + y) \\ = 2 x + \cos (x + y). \end{array}
$$

## Arrow Diagrams

In solving problems like the one in Example 3, it often helps to start with an arrow diagram that shows how the variables and functions are related. If 

$$
w = x ^ {2} + y - z + \sin t \quad \text { and } \quad x + y = t
$$

and we are asked to find $\partial w/\partial x$ when x, y, and z are independent, the appropriate diagram is one like this: 

$$
\begin{array}{c c c}\left(\begin{array}{c}x\\y\\z\end{array}\right)&\rightarrow&\left(\begin{array}{c}x\\y\\z\\t\end{array}\right) \quad \rightarrow \quad w\\\text {   Independent   variables   }&\text {   Intermediate   variables   }&\text {   Dependent   variable   }\end{array}\tag{5}
$$

To avoid confusion between the independent and intermediate variables with the same symbolic names in the diagram, it is helpful to rename the intermediate variables (so they are seen as functions of the independent variables). Thus, let u = x, v = y, and s = z denote the renamed intermediate variables. With this notation, the arrow diagram becomes 

$$
\begin{array}{c c c}\left(\begin{array}{c}x\\y\\z\end{array}\right)&\rightarrow&\left(\begin{array}{c}u\\v\\s\\t\end{array}\right)\\\text {Independent variables}&\text {Intermediate variables and relations}&\text {Dependent variable}\\&u = x\\&v = y\\&s = z\\&t = x + y\end{array}\tag{6}
$$

The diagram shows the independent variables on the left, the intermediate variables and their relation to the independent variables in the middle, and the dependent variable on the right. The function w now becomes 

$$
w = u ^ {2} + v - s + \sin t,
$$

where 

$$
u = x, \quad v = y, \quad s = z, \quad \text { and } \quad t = x + y.
$$

To find $\partial w / \partial x$ , we apply the four-variable form of the Chain Rule to $w$ , guided by the arrow diagram in Equation (6): 

$$
\begin{array}{l} \frac {\partial w}{\partial x} = \frac {\partial w}{\partial u} \frac {\partial u}{\partial x} + \frac {\partial w}{\partial v} \frac {\partial v}{\partial x} + \frac {\partial w}{\partial s} \frac {\partial s}{\partial x} + \frac {\partial w}{\partial t} \frac {\partial t}{\partial x} \\ = (2 u) (1) + (1) (0) + (- 1) (0) + (\cos t) (1) \\ = 2 u + \cos t \\ = 2 x + \cos (x + y). \end{array}
$$

## EXERCISES 13.10

## Finding Partial Derivatives with Constrained Variables

In Exercises 1–3, begin by drawing a diagram that shows the relations among the variables. 

1. If $w = x^2 + y^2 + z^2$ and $z = x^2 + y^2$ , find
a. $\left(\frac{\partial w}{\partial y}\right)_z$ b. $\left(\frac{\partial w}{\partial z}\right)_x$ c. $\left(\frac{\partial w}{\partial z}\right)_y$ . 

2. If $w = x^2 + y - z + \sin t$ and $x + y = t$ , find
    a. $\left(\frac{\partial w}{\partial y}\right)_{x,z}$ b. $\left(\frac{\partial w}{\partial y}\right)_{z,t}$ c. $\left(\frac{\partial w}{\partial z}\right)_{x,y}$ d. $\left(\frac{\partial w}{\partial z}\right)_{y,t}$ e. $\left(\frac{\partial w}{\partial t}\right)_{x,z}$ f. $\left(\frac{\partial w}{\partial t}\right)_{y,z}$ . 

3. Let $U = f(P, V, T)$ be the internal energy of a gas that obeys the ideal gas law $PV = nRT$ ( $n$ and $R$ constant). Find
a. $\left(\frac{\partial U}{\partial P}\right)_V$ b. $\left(\frac{\partial U}{\partial T}\right)_V$ . 

4. Find
a. $\left(\frac{\partial w}{\partial x}\right)_{y}$ b. $\left(\frac{\partial w}{\partial z}\right)_{y}$ at the point $(x, y, z) = (0, 1, \pi)$ if $w = x^{2} + y^{2} + z^{2}$ and $y \sin z + z \sin x = 0$ . 

5. Find
a. $\left(\frac{\partial w}{\partial y}\right)_{x}$ b. $\left(\frac{\partial w}{\partial y}\right)_{z}$ at the point $(w, x, y, z) = (4, 2, 1, -1)$ if $w = x^{2}y^{2} + yz - z^{3}$ and $x^{2} + y^{2} + z^{2} = 6$ . 

6. Find $(\partial u / \partial y)_x$ at the point $(u,v) = (\sqrt{2},1)$ if $x = u^2 + v^2$ and $y = uv$ . 

7. Suppose that $x^{2} + y^{2} = r^{2}$ and $x = r \cos \theta$ , as in polar coordinates. Find 

$$
\left(\frac {\partial x}{\partial r}\right) _ {\theta} \quad \text { and } \quad \left(\frac {\partial r}{\partial x}\right) _ {y}.
$$

8. Suppose that 

$$
w = x ^ {2} - y ^ {2} + 4 z + t \quad \text { and } \quad x + 2 z + t = 2 5.
$$

1. What is a real-valued function of two independent variables? Three independent variables? Give examples. 

2. What does it mean for sets in the plane or in space to be open? Closed? Give examples. Give examples of sets that are neither open nor closed. 

3. How can you display the values of a function $f(x, y)$ of two independent variables graphically? How do you do the same for a function $f(x, y, z)$ of three independent variables? 

Show that the equations 

$$
\frac {\partial w}{\partial x} = 2 x - 1 \quad \text { and } \quad \frac {\partial w}{\partial x} = 2 x - 2
$$

each give $\partial w/\partial x$ , depending on which variables are chosen to be dependent and which variables are chosen to be independent. Identify the independent variables in each case. 

## Theory and Examples

9. Establish the fact, widely used in hydrodynamics, that if $f(x,y,z) = 0$ , then 

$$
\left(\frac {\partial x}{\partial y}\right) _ {z} \left(\frac {\partial y}{\partial z}\right) _ {x} \left(\frac {\partial z}{\partial x}\right) _ {y} = - 1.
$$

(Hint: Express all the derivatives in terms of the formal partial derivatives $\partial f/\partial x$ , $\partial f/\partial y$ , and $\partial f/\partial z$ .) 

## CHAPTER 13 Questions to Guide Your Review

10. If $z = x + f(u)$ , where $u = xy$ , show that 

$$
x \frac {\partial z}{\partial x} - y \frac {\partial z}{\partial y} = x.
$$

11. Suppose that the equation $g(x,y,z) = 0$ determines $z$ as a differentiable function of the independent variables $x$ and $y$ and that $g_{z} \neq 0$ . Show that 

$$
\left(\frac {\partial z}{\partial y}\right) _ {x} = - \frac {\partial g / \partial y}{\partial g / \partial z}.
$$

12. Suppose that $f(x, y, z, w) = 0$ and $g(x, y, z, w) = 0$ determine $z$ and $w$ as differentiable functions of the independent variables $x$ and $y$ , and suppose that 

$$
\frac {\partial f}{\partial z} \frac {\partial g}{\partial w} - \frac {\partial f}{\partial w} \frac {\partial g}{\partial z} \neq 0.
$$

Show that 

$$
\left(\frac {\partial z}{\partial x}\right) _ {y} = - \frac {\frac {\partial f}{\partial x} \frac {\partial g}{\partial w} - \frac {\partial f}{\partial w} \frac {\partial g}{\partial x}}{\frac {\partial f}{\partial z} \frac {\partial g}{\partial w} - \frac {\partial f}{\partial w} \frac {\partial g}{\partial z}}
$$

and 

$$
\left(\frac {\partial w}{\partial y}\right) _ {x} = - \frac {\frac {\partial f}{\partial z} \frac {\partial g}{\partial y} - \frac {\partial f}{\partial y} \frac {\partial g}{\partial z}}{\frac {\partial f}{\partial z} \frac {\partial g}{\partial w} - \frac {\partial f}{\partial w} \frac {\partial g}{\partial z}}.
$$

4. What does it mean for a function $f(x, y)$ to have limit $L$ as $(x, y) \to (x_0, y_0)$ ? What are the basic properties of limits of functions of two independent variables? 

5. When is a function of two (three) independent variables continuous at a point in its domain? Give examples of functions that are continuous at some points but not others. 

6. What can be said about algebraic combinations and compositions of continuous functions? 

7. Explain the two-path test for nonexistence of limits. 

8. How are the partial derivatives $\partial f / \partial x$ and $\partial f / \partial y$ of a function $f(x,y)$ defined? How are they interpreted and calculated? 

9. How does the relation between first partial derivatives and continuity of functions of two independent variables differ from the relation between first derivatives and continuity for real-valued functions of a single independent variable? Give an example. 

10. What is the Mixed Derivative Theorem for mixed second-order partial derivatives? How can it help in calculating partial derivatives of second and higher orders? Give examples. 

11. What does it mean for a function $f(x, y)$ to be differentiable? What does the Increment Theorem say about differentiability? 

12. How can you sometimes decide from examining $f_{x}$ and $f_{y}$ that a function $f(x, y)$ is differentiable? What is the relation between the differentiability of f and the continuity of f at a point? 

13. What is the general Chain Rule? What form does it take for functions of two independent variables? Three independent variables? Functions defined on surfaces? How do you diagram these different forms? Give examples. What pattern enables one to remember all the different forms? 

14. What is the derivative of a function $f(x, y)$ at a point $P_{0}$ in the direction of a unit vector u? What rate does it describe? What geometric interpretation does it have? Give examples. 

15. What is the gradient vector of a differentiable function $f(x,y)$ ? How is it related to the function's directional derivatives? State the analogous results for functions of three independent variables. 

16. How do you find the tangent line at a point on a level curve of a differentiable function $f(x, y)$ ? How do you find the tangent 

In Exercises 1–4, find the domain and range of the given function and identify its level curves. Sketch a typical level curve. 

## CHAPTER 13 Practice Exercises

## Domain, Range, and Level Curves

1. $f(x,y) = 9x^{2} + y^{2}$ 2. $f(x,y) = e^{x + y}$ 3. $g(x,y) = 1 / xy$ 4. $g(x,y) = \sqrt{x^2 - y}$ 

In Exercises 5–8, find the domain and range of the given function and identify its level surfaces. Sketch a typical level surface. 

$$
5. f (x, y, z) = x ^ {2} + y ^ {2} - z \quad 6. g (x, y, z) = x ^ {2} + 4 y ^ {2} + 9 z ^ {2}
$$

7. $h(x,y,z)=\frac{1}{x^{2}+y^{2}+z^{2}}$ 8. $k(x,y,z)=\frac{1}{x^{2}+y^{2}+z^{2}+1}$ 

Evaluating Limits 

Find the limits in Exercises 9–14. 

9. $\lim_{(x,y)\to (\pi ,\ln 2)}e^{y}\cos x$ 10. $\lim_{(x,y)\to (0,0)}\frac{2 + y}{x + \cos y}$ 

11. $\lim_{(x,y)\to (1,1)}\frac{x - y}{x^2 - y^2}$ 

12. $\lim_{(x,y)\to (1,1)}\frac{x^3y^3 - 1}{xy - 1}$ 

13. $\lim_{P\to (1, - 1,e)}\ln |x + y + z|$ 

14. $\lim_{P\to (1, - 1, - 1)}\arctan (x + y + z)$ 

plane and normal line at a point on a level surface of a differentiable function $f(x, y, z)$ ? Give examples. 

17. How can you use directional derivatives to estimate change? 

18. How do you linearize a function $f(x, y)$ of two independent variables at a point $(x_0, y_0)$ ? Why might you want to do this? How do you linearize a function of three independent variables? 

19. What can you say about the accuracy of linear approximations of functions of two (three) independent variables? 

20. If $(x, y)$ moves from $(x_0, y_0)$ to a point $(x_0 + dx, y_0 + dy)$ nearby, how can you estimate the resulting change in the value of a differentiable function $f(x, y)$ ? Give an example. 

21. How do you define local maxima, local minima, and saddle points for a differentiable function $f(x, y)$ ? Give examples. 

22. What derivative tests are available for determining the local extreme values of a function $f(x, y)$ ? How do they enable you to narrow your search for these values? Give examples. 

23. How do you find the extrema of a continuous function $f(x, y)$ on a closed bounded region of the $xy$ -plane? Give an example. 

24. Describe the method of Lagrange multipliers and give examples. 

25. How does Taylor's formula for a function $f(x, y)$ generate polynomial approximations and error estimates? 

26. If $w = f(x, y, z)$ , where the variables x, y, and z are constrained by an equation $g(x, y, z) = 0$ , what is the meaning of the notation $(\partial w / \partial x)_y$ ? How can an arrow diagram help you calculate this partial derivative with constrained variables? Give examples. 

By considering different paths of approach, show that the limits in Exercises 15 and 16 do not exist. 

15. $\lim_{\substack{(x,y)\to (0,0)\\ y\neq x^2}}\frac{y}{x^2 - y}$ 16. $\lim_{\substack{(x,y)\to (0,0)\\ xy\neq 0}}\frac{x^2 + y^2}{xy}$ 

17. Continuous extension Let $f(x, y) = (x^2 - y^2) / (x^2 + y^2)$ for $(x, y) \neq (0, 0)$ . Is it possible to define $f(0, 0)$ in a way that makes $f$ continuous at the origin? Why? 

18. Continuous extension Let 

$$
f (x, y) = \left\{ \begin{array}{l l} \frac {\sin (x - y)}{| x | + | y |}, & | x | + | y | \neq 0 \\ 0, & (x, y) = (0, 0). \end{array} \right.
$$

Is $f$ continuous at the origin? Why? 

Partial Derivatives 

In Exercises 19–24, find the partial derivative of the function with respect to each variable. 

19. $g(r,\theta) = r\cos \theta +r\sin \theta$ 

20. $f(x,y) = \frac{1}{2}\ln (x^2 +y^2) + \arctan \frac{y}{x}$ 

21. $f(R_{1},R_{2},R_{3}) = \frac{1}{R_{1}} +\frac{1}{R_{2}} +\frac{1}{R_{3}}$ 

22. $h(x,y,z) = \sin (2\pi x + y - 3z)$ 

23. $P(n,R,T,V) = \frac{nRT}{V}$ (the ideal gas law) 

24. $f(r,l,T,w)=\frac{1}{2rl}\sqrt{\frac{T}{\pi w}}$ 

## Second-Order Partials

Find the second-order partial derivatives of the functions in Exercises 25–28. 

25. $g(x,y) = y + \frac{x}{y}$ 26. $g(x,y) = e^{x} + y\sin x$ 

27. $f(x,y) = x + xy - 5x^{3} + \ln (x^{2} + 1)$ 

28. $f(x,y) = y^{2} - 3xy + \cos y + 7e^{y}$ 

## Chain Rule Calculations

29. Find $dw / dt$ at $t = 0$ if $w = \sin (xy + \pi)$ , $x = e^t$ , and $y = \ln (t + 1)$ . 

30. Find $dw / dt$ at $t = 1$ if $w = xe^y + y\sin z - \cos z$ , $x = 2\sqrt{t}$ , $y = t - 1 + \ln t$ , and $z = \pi t$ . 

31. Find $\partial w / \partial r$ and $\partial w / \partial s$ when $r = \pi$ and $s = 0$ if $w = \sin (2x - y), x = r + \sin s, y = rs$ . 

32. Find $\frac{\partial w / \partial u}{\partial x}$ and $\frac{\partial w / \partial v}{\partial x}$ when $u = v = 0$ if $w = \ln \sqrt{1 + x^2} - \tan^{-1}x$ and $x = 2e^{u}\cos v$ . 

33. Find the value of the derivative of $f(x,y,z)=xy+yz+xz$ with respect to t on the curve $x=\cos t$ , $y=\sin t$ , $z=\cos 2t$ at t=1. 

34. Show that if $w = f(s)$ is any differentiable function of $s$ and if $s = y + 5x$ , then 

$$
\frac {\partial w}{\partial x} - 5 \frac {\partial w}{\partial y} = 0.
$$

## Implicit Differentiation

Assuming that the equations in Exercises 35 and 36 define $y$ as a differentiable function of $x$ , find the value of $dy / dx$ at point $P$ . 

$$
3 5. 1 - x - y ^ {2} - \sin x y = 0, P (0, 1)
$$

36. $2xy + e^{x + y} - 2 = 0, P(0,\ln 2)$ 

## Directional Derivatives

In Exercises 37–40, find the directions in which f increases and decreases most rapidly at $P_{0}$ and find the derivative of f in each direction. Also, find the derivative of f at $P_{0}$ in the direction of the vector v. 

37. $f(x,y) = \cos x \cos y,\quad P_{0}(\pi/4,\pi/4),\quad \mathbf{v} = 3\mathbf{i} + 4\mathbf{j}$ 

38. $f(x,y) = x^{2}e^{-2y}, P_{0}(1,0), \mathbf{v} = \mathbf{i} + \mathbf{j}$ 

39. $f(x,y,z)=\ln(2x+3y+6z)$ , $P_{0}(-1,-1,1)$ , 

$$
\mathbf {v} = 2 \mathbf {i} + 3 \mathbf {j} + 6 \mathbf {k}
$$

$$
f (x, y, z) = x ^ {2} + 3 x y - z ^ {2} + 2 y + z + 4, \quad P _ {0} (0, 0, 0),
$$

$$
\mathbf {v} = \mathbf {i} + \mathbf {j} + \mathbf {k}
$$

41. Derivative in velocity direction Find the derivative of $f(x, y, z) = xyz$ in the direction of the velocity vector of the helix 

$$
\mathbf {r} (t) = (\cos 3 t) \mathbf {i} + (\sin 3 t) \mathbf {j} + 3 t \mathbf {k}
$$

at $t = \pi /3$ 

42. Maximum directional derivative What is the largest value that the directional derivative of $f(x, y, z) = xyz$ can have at the point (1, 1, 1)? 

43. Directional derivatives with given values At the point $(1,2)$ , the function $f(x,y)$ has a derivative of 2 in the direction toward $(2,2)$ and a derivative of -2 in the direction toward $(1,1)$ . 

a. Find $f_{x}(1,2)$ and $f_{y}(1,2)$ . 

b. Find the derivative of $f$ at (1, 2) in the direction toward the point (4, 6). 

44. Which of the following statements are true if $f(x, y)$ is differentiable at $(x_0, y_0)$ ? Give reasons for your answers. 

a. If $\mathbf{u}$ is a unit vector, the derivative of $f$ at $(x_0, y_0)$ in the direction of $\mathbf{u}$ is $\left(f_x(x_0, y_0) \mathbf{i} + f_y(x_0, y_0) \mathbf{j}\right) \cdot \mathbf{u}$ . 

b. The derivative of f at $(x_{0}, y_{0})$ in the direction of u is a vector. 

c. The directional derivative of $f$ at $(x_0, y_0)$ has its greatest value in the direction of $\nabla f$ . 

d. At $(x_0, y_0)$ , vector $\nabla f$ is normal to the curve $f(x, y) = f(x_0, y_0)$ . 

## Gradients, Tangent Planes, and Normal Lines

In Exercises 45 and 46, sketch the surface $f(x,y,z) = c$ together with $\nabla f$ at the given points. 

$$
4 5. x ^ {2} + y + z ^ {2} = 0; (0, - 1, \pm 1), (0, 0, 0)
$$

$$
4 6. y ^ {2} + z ^ {2} = 4; (2, \pm 2, 0), (2, 0, \pm 2)
$$

In Exercises 47 and 48, find an equation for the plane tangent to the level surface $f(x,y,z)=c$ at the point $P_{0}$ . Also, find parametric equations for the line that is normal to the surface at $P_{0}$ . 

$$
4 7. x ^ {2} - y - 5 z = 0, P _ {0} (2, - 1, 1)
$$

$$
4 8. x ^ {2} + y ^ {2} + z = 4, P _ {0} (1, 1, 2)
$$

In Exercises 49 and 50, find an equation for the plane tangent to the surface $z = f(x, y)$ at the given point. 

$$
4 9. z = \ln (x ^ {2} + y ^ {2}), (0, 1, 0)
$$

$$
\mathbf {5 0 .} z = 1 / (x ^ {2} + y ^ {2}), \quad (1, 1, 1 / 2)
$$

In Exercises 51 and 52, find equations for the lines that are tangent and normal to the level curve $f(x, y) = c$ at the point $P_{0}$ . Then sketch the lines and level curve together with $\nabla f$ at $P_{0}$ . 

$$
\mathbf {5 1 .} y - \sin x = 1, P _ {0} (\pi , 1)
$$

$$
\mathbf {5 2 .} \frac {y ^ {2}}{2} - \frac {x ^ {2}}{2} = \frac {3}{2}, P _ {0} (1, 2)
$$

## Tangent Lines to Curves

In Exercises 53 and 54, find parametric equations for the line that is tangent to the curve of intersection of the surfaces at the given point. 

53. Surfaces: $x^{2} + 2y + 2z = 4,\quad y = 1$ 

Point: $(1,1,1/2)$ 

54. Surfaces: $x + y^{2} + z = 2$ , y = 1 

Point: $(1/2,1,1/2)$ 

## Linearizations

In Exercises 55 and 56, find the linearization $L(x, y)$ of the function $f(x, y)$ at the point $P_{0}$ . Then find an upper bound for the magnitude of the error E in the approximation $f(x, y) \approx L(x, y)$ over the rectangle R. 

55. $f(x,y)=\sin x\cos y,\quad P_{0}(\pi/4,\pi/4)$ 

$$
R: \left| x - \frac {\pi}{4} \right| \leq 0. 1, \left| y - \frac {\pi}{4} \right| \leq 0. 1
$$

$$
\mathbf {5 6 .} f (x, y) = x y - 3 y ^ {2} + 2, \quad P _ {0} (1, 1)
$$

$$
R \colon | x - 1 | \leq 0. 1, | y - 1 | \leq 0. 2
$$

Find the linearizations of the functions in Exercises 57 and 58 at the given points. 

57. $f(x, y, z) = xy + 2yz - 3xz$ at (1,0,0) and (1,1,0) 

58. $f(x,y,z) = \sqrt{2}\cos x\sin (y + z)$ at $(0,0,\pi /4)$ $(\pi /4,\pi /4,0)$ 

and 

Estimates and Sensitivity to Change 

59. Measuring the volume of a pipeline You plan to calculate the volume inside a stretch of pipeline that is about 36 cm in diameter and 1 km long. With which measurement should you be more careful, the length or the diameter? Why? 

60. Sensitivity to change Is $f(x, y) = x^2 - xy + y^2 - 3$ more sensitive to changes in $x$ or to changes in $y$ when it is near the point (1, 2)? How do you know? 

61. Change in an electrical circuit Suppose that the current I (amperes) in an electrical circuit is related to the voltage V (volts) and the resistance R (ohms) by the equation I = V/R. If the voltage drops from 24 to 23 volts and the resistance drops from 100 to 80 ohms, will I increase or decrease? By about how much? Is the change in I more sensitive to change in the voltage or to change in the resistance? How do you know? 

62. Maximum error in estimating the area of an ellipse If $a = 10\mathrm{cm}$ and $b = 16\mathrm{cm}$ to the nearest millimeter, what should you expect the maximum percentage error to be in the calculated area $A = \pi ab$ of the ellipse $x^{2} / a^{2} + y^{2} / b^{2} = 1$ ? 

63. Error in estimating a product Let $y = uv$ and $z = u + v$ , where $u$ and $v$ are positive independent variables. 

a. If u is measured with an error of 2% and v with an error of 3%, about what is the percentage error in the calculated value of y? 

b. Show that the percentage error in the calculated value of $z$ is less than the percentage error in the value of $y$ . 

64. Cardiac index To make different people comparable in studies of cardiac output, researchers divide the measured cardiac output by the body surface area to find the cardiac index C: 

$$
C = \frac {\text { cardiac   output }}{\text { body   surface   area }}.
$$

The body surface area B of a person with weight w and height h is approximated by the formula 

$$
B = 7 1. 8 4 w ^ {0. 4 2 5} h ^ {0. 7 2 5},
$$

which gives B in square centimeters when w is measured in kilograms and h in centimeters. You are about to calculate the cardiac index of a person 180 cm tall, weighing 70 kg, with cardiac output of 7 L/min. Which will have a greater effect on the calculation, a 1-kg error in measuring the weight or a 1-cm error in measuring the height? 

## Local Extrema

Test the functions in Exercises 65–70 for local maxima and minima and saddle points. Find each function's value at these points. 

$$
f (x, y) = x ^ {2} - x y + y ^ {2} + 2 x + 2 y - 4
$$

66. $f(x,y) = 5x^{2} + 4xy - 2y^{2} + 4x - 4y$ 

67. $f(x,y) = 2x^{3} + 3xy + 2y^{3}$ 

$$
f (x, y) = x ^ {3} + y ^ {3} - 3 x y + 1 5
$$

$$
f (x, y) = x ^ {3} + y ^ {3} + 3 x ^ {2} - 3 y ^ {2}
$$

$$
f (x, y) = x ^ {4} - 8 x ^ {2} + 3 y ^ {2} - 6 y
$$

## Absolute Extrema

In Exercises 71–78, find the absolute maximum and minimum values of f on the region R. 

71. $f(x,y) = x^{2} + xy + y^{2} - 3x + 3y$ 

$R$ : The triangular region cut from the first quadrant by the line $x + y = 4$ 

$$
f (x, y) = x ^ {2} - y ^ {2} - 2 x + 4 y + 1
$$

R: The rectangular region in the first quadrant bounded by the coordinate axes and the lines x = 4 and y = 2 

$$
f (x, y) = y ^ {2} - x y - 3 y + 2 x
$$

R: The square region enclosed by the lines $x = \pm2$ and $y = \pm2$ 

$$
f (x, y) = 2 x + 2 y - x ^ {2} - y ^ {2}
$$

R: The square region bounded by the coordinate axes and the lines x = 2, y = 2 in the first quadrant 

## 75. $f(x,y) = x^{2} - y^{2} - 2x + 4y$

R: The triangular region bounded below by the x-axis, above by the line $y = x + 2$ , and on the right by the line x = 2 

## 76. $f(x,y)=4xy-x^{4}-y^{4}+16$

R: The triangular region bounded below by the line y = -2, above by the line y = x, and on the right by the line x = 2 

R: The square region enclosed by the lines $x = \pm1$ and $y = \pm1$ 

78. $f(x,y) = x^{3} + 3xy + y^{3} + 1$ R: The square region enclosed by the lines $x = \pm 1$ and $y = \pm 1$ 

## Lagrange Multipliers

79. Extrema on a circle Find the extreme values of $f(x, y) = x^3 + y^2$ on the circle $x^2 + y^2 = 1$ . 

80. Extrema on a circle Find the extreme values of $f(x, y) = xy$ on the circle $x^{2} + y^{2} = 1$ . 

81. Extrema in a disk Find the extreme values of $f(x, y) = x^2 + 3y^2 + 2y$ on the unit disk $x^2 + y^2 \leq 1$ . 

82. Extrema in a disk Find the extreme values of $f(x, y) = x^2 + y^2 - 3x - xy$ on the disk $x^2 + y^2 \leq 9$ . 

83. Extrema on a sphere Find the extreme values of $f(x, y, z) = x - y + z$ on the unit sphere $x^2 + y^2 + z^2 = 1$ . 

84. Minimum distance to origin Find the points on the surface $x^{2} - zy = 4$ closest to the origin. 

85. Minimizing cost of a box A closed rectangular box is to have volume $V \, cm^{3}$ . The cost of the material used in the box is $a \, cents/cm^{2}$ for top and bottom, $b \, cents/cm^{2}$ for front and back, and $c \, cents/cm^{2}$ for the remaining sides. What dimensions minimize the total cost of materials? 

86. Least volume Find the plane $x / a + y / b + z / c = 1$ that passes through the point (2, 1, 2) and cuts off the least volume from the first octant. 

87. Extrema on curve of intersecting surfaces Find the extreme values of $f(x, y, z) = x(y + z)$ on the curve of intersection of the right circular cylinder $x^2 + y^2 = 1$ and the hyperbolic cylinder $xz = 1$ . 

88. Minimum distance to origin on curve of intersecting plane and cone Find the point closest to the origin on the curve of intersection of the plane $x + y + z = 1$ and the cone $z^{2} = 2x^{2} + 2y^{2}$ . 

## Theory and Examples

89. Let $w = f(r, \theta)$ , $r = \sqrt{x^2 + y^2}$ , and $\theta = \tan^{-1}(y / x)$ . Find $\partial w / \partial x$ and $\partial w / \partial y$ , and express your answers in terms of $r$ and $\theta$ . 

90. Let $z = f(u, v)$ , $u = ax + by$ , and $v = ax - by$ . Express $z_x$ and $z_y$ in terms of $f_u, f_v$ , and the constants $a$ and $b$ . 

91. If $a$ and $b$ are constants, $w = u^3 + \tanh u + \cos u$ , and $u = ax + by$ , show that 

$$
a \frac {\partial w}{\partial y} = b \frac {\partial w}{\partial x}.
$$

92. Using the Chain Rule If $w = \ln (x^2 + y^2 + 2z)$ , $x = r + s$ , $y = r - s$ , and $z = 2rs$ , find $w_r$ and $w_s$ by the Chain Rule. Then check your answer another way. 

93. Angle between vectors The equations $e^{u}\cos v - x = 0$ and $e^{u}\sin v - y = 0$ define u and v as differentiable functions of x and y. Show that the angle between the vectors 

$$
\frac {\partial u}{\partial x} \mathbf {i} + \frac {\partial u}{\partial y} \mathbf {j} \quad \text { and } \quad \frac {\partial v}{\partial x} \mathbf {i} + \frac {\partial v}{\partial y} \mathbf {j}
$$

is constant. 

94. Polar coordinates and second derivatives Introducing polar coordinates $x = r \cos \theta$ and $y = r \sin \theta$ changes $f(x, y)$ to $g(r, \theta)$ . Find the value of $\partial^2 g / \partial \theta^2$ at the point $(r, \theta) = (2, \pi/2)$ , given that 

$$
\frac {\partial f}{\partial x} = \frac {\partial f}{\partial y} = \frac {\partial^ {2} f}{\partial x ^ {2}} = \frac {\partial^ {2} f}{\partial y ^ {2}} = 1
$$

at that point. 

95. Normal line parallel to a plane Find the points on the surface 

$$
(y + z) ^ {2} + (z - x) ^ {2} = 1 6
$$

where the normal line is parallel to the yz-plane. 

96. Tangent plane parallel to $xy$ -plane Find the points on the surface 

$$
x y + y z + z x - x - z ^ {2} = 0
$$

where the tangent plane is parallel to the xy-plane. 

97. When gradient is parallel to position vector Suppose that $\nabla f(x,y,z)$ is always parallel to the position vector $x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ . Show that $f(0,0,a) = f(0,0,-a)$ for any a. 

98. One-sided directional derivative in all directions, but no gradient The one-sided directional derivative of $f$ at $P(x_0, y_0, z_0)$ in the direction $\mathbf{u} = u_1\mathbf{i} + u_2\mathbf{j} + u_3\mathbf{k}$ is the number 

$$
\lim _ {s \rightarrow 0 ^ {+}} \frac {f (x _ {0} + s u _ {1} , y _ {0} + s u _ {2} , z _ {0} + s u _ {3}) - f (x _ {0} , y _ {0} , z _ {0})}{s}.
$$

Show that the one-sided directional derivative of 

$$
f (x, y, z) = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}
$$

at the origin equals 1 in any direction but that f has no gradient vector at the origin. 

99. Normal line through origin Show that the line normal to the surface $xy + z = 2$ at the point (1, 1, 1) passes through the origin. 

100. Tangent plane and normal line 

a. Sketch the surface $x^{2} - y^{2} + z^{2} = 4$ . 

b. Find a vector normal to the surface at $(2, -3, 3)$ . Add the vector to your sketch. 

c. Find equations for the tangent plane and the normal line at $(2, -3, 3)$ . 

## Partial Derivatives with Constrained Variables

In Exercises 101 and 102, begin by drawing a diagram that shows the relations among the variables. 

101. If $w = x^{2}e^{yz}$ and $z = x^{2} - y^{2}$ find 

a. $\left(\frac{\partial w}{\partial y}\right)_z$ b. $\left(\frac{\partial w}{\partial z}\right)_x$ c. $\left(\frac{\partial w}{\partial z}\right)_y$ 

102. Let $U = f(P, V, T)$ be the internal energy of a gas that obeys the ideal gas law $PV = nRT$ ( $n$ and $R$ constant). Find 

$$
\mathbf {a}. \left(\frac {\partial U}{\partial T}\right) _ {P} \quad \mathbf {b}. \left(\frac {\partial U}{\partial V}\right) _ {T}.
$$

## CHAPTER 13

## Additional and Advanced Exercises

## Partial Derivatives

1. Function with saddle at the origin If you did Exercise 64 in Section 13.2, you know that the function 

$$
f (x, y) = \left\{ \begin{array}{l l} x y \frac {x ^ {2} - y ^ {2}}{x ^ {2} + y ^ {2}}, & (x, y) \neq (0, 0) \\ 0, & (x, y) = (0, 0) \end{array} \right.
$$

(see the accompanying figure) is continuous at $(0,0)$ . Find $f_{xy}(0,0)$ and $f_{yx}(0,0)$ . 

![[d0c1e214288d4a2a5b4352c87225b9099d2dfc657ac63b1cd564f9ac352dc2b3.jpg|image]]


2. Finding a function from second partials Find a function $w = f(x, y)$ whose first partial derivatives are $\partial w / \partial x = 1 + e^x \cos y$ and $\partial w / \partial y = 2y - e^x \sin y$ and whose value at the point (ln 2, 0) is ln 2. 

3. A proof of Leibniz's Rule Leibniz's Rule says that if $f$ is continuous on $[a, b]$ and if $u(x)$ and $v(x)$ are differentiable functions of $x$ whose values lie in $[a, b]$ , then 

$$
\frac {d}{d x} \int_ {u (x)} ^ {v (x)} f (t) d t = f (v (x)) \frac {d v}{d x} - f (u (x)) \frac {d u}{d x}.
$$

Prove the rule by setting 

$$
g (u, v) = \int_ {u} ^ {v} f (t) d t, \quad u = u (x), \quad v = v (x)
$$

and calculating dg/dx with the Chain Rule. 

4. Finding a function with constrained second partials Suppose that $f$ is a twice-differentiable function of $r$ , that $r = \sqrt{x^2 + y^2 + z^2}$ , and that 

$$
f _ {x x} + f _ {y y} + f _ {z z} = 0.
$$

Show that for some constants a and b, 

$$
f (r) = \frac {a}{r} + b.
$$

5. Homogeneous functions A function $f(x, y)$ is homogeneous of degree n (n a nonnegative integer) if $f(tx, ty) = t^{n}f(x, y)$ for all t, x, and y. For such a function (sufficiently differentiable), prove that 

$$
\mathbf {a}. x \frac {\partial f}{\partial x} + y \frac {\partial f}{\partial y} = n f (x, y)
$$

$$
\mathbf {b}. x ^ {2} \left(\frac {\partial^ {2} f}{\partial x ^ {2}}\right) + 2 x y \left(\frac {\partial^ {2} f}{\partial x \partial y}\right) + y ^ {2} \left(\frac {\partial^ {2} f}{\partial y ^ {2}}\right) = n (n - 1) f.
$$

6. Surface in polar coordinates Let 

$$
f (r, \theta) = \left\{ \begin{array}{l l} \frac {\sin 6 r}{6 r}, & r \neq 0 \\ 1, & r = 0, \end{array} \right.
$$

where r and $\theta$ are polar coordinates. Find 

a. $\lim_{r\to0}f(r,\theta)$ 

b. $f_{r}(0,0)$ 

c. $f_{\theta}(r,\theta)$ , $r \neq 0$ . 

![[5523dedf8bc3d930be7ccfb52cd3bb2d13b058b3ea0e5b45f9b079e1dff221ef.jpg|image]]


Gradients and Tangents 

7. Properties of position vectors Let $\mathbf{r} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ and let $r = |\mathbf{r}|$ . 

a. Show that $\nabla r = \mathbf{r} / r$ . 

b. Show that $\nabla(r^{n}) = nr^{n-2}\mathbf{r}$ . 

c. Find a function whose gradient equals r. 

d. Show that $r \cdot dr = r dr$ . 

e. Show that $\nabla(\mathbf{A} \cdot \mathbf{r}) = \mathbf{A}$ for any constant vector A. 

8. Gradient orthogonal to tangent Suppose that a differentiable function $f(x, y)$ has the constant value c along the differentiable curve $x = g(t)$ , $y = h(t)$ ; that is, 

$$
f (g (t), h (t)) = c
$$

for all values of $t$ . Differentiate both sides of this equation with respect to $t$ to show that $\nabla f$ is orthogonal to the curve's tangent vector at every point on the curve. 

9. Curve tangent to a surface Show that the curve 

$$
\mathbf {r} (t) = (\ln t) \mathbf {i} + (t \ln t) \mathbf {j} + t \mathbf {k}
$$

is tangent to the surface 

$$
x z ^ {2} - y z + \cos x y = 1
$$

at $(0,0,1)$ . 

10. Curve tangent to a surface Show that the curve 

$$
\mathbf {r} (t) = \left(\frac {t ^ {3}}{4} - 2\right) \mathbf {i} + \left(\frac {4}{t} - 3\right) \mathbf {j} + \cos (t - 2) \mathbf {k}
$$

is tangent to the surface 

$$
x ^ {3} + y ^ {3} + z ^ {3} - x y z = 0
$$

at $(0,-1,1)$ . 

## Extreme Values

11. Extrema on a surface Show that the only possible maxima and minima of $z$ on the surface $z = x^3 + y^3 - 9xy + 27$ occur at (0,0) and (3,3). Show that neither a maximum nor a minimum occurs at (0,0). Determine whether $z$ has a maximum or a minimum at (3,3). 

12. Maximum in closed first quadrant Find the maximum value of $f(x,y)=6xye^{-(2x+3y)}$ in the closed first quadrant (includes the nonnegative axes). 

13. Minimum volume cut from first octant Find the minimum volume for a region bounded by the planes $x = 0$ , $y = 0$ , $z = 0$ and a plane tangent to the ellipsoid 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} = 1
$$

at a point in the first octant. 

14. Minimum distance from a line to a parabola in xy-plane By minimizing the function $f(x,y,u,v)=(x-u)^{2}+(y-v)^{2}$ subject to the constraints $y=x+1$ and $u=v^{2}$ , find the minimum distance in the xy-plane from the line $y=x+1$ to the parabola $y^{2}=x$ . 

## Theory and Examples

15. Boundedness of first partials implies continuity Prove the following theorem: If $f(x, y)$ is defined in an open region $R$ of the $xy$ -plane and if $f_x$ and $f_y$ are bounded on $R$ , then $f(x, y)$ is continuous on $R$ . (The assumption of boundedness is essential.) 

16. Suppose that $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}$ is a smooth curve in the domain of a differentiable function $f(x, y, z)$ . Describe the relation among df/dt, $\nabla f$ , and v = dr/dt. What can be said about $\nabla f$ and v at interior points of the curve where f has extreme values relative to its other values on the curve? Give reasons for your answer. 

17. Finding functions from partial derivatives Suppose that $f$ and $g$ are functions of $x$ and $y$ such that 

$$
\frac {\partial f}{\partial y} = \frac {\partial g}{\partial x} \quad \text { and } \quad \frac {\partial f}{\partial x} = \frac {\partial g}{\partial y},
$$

and suppose that 

$$
\frac {\partial f}{\partial x} = 0, \quad f (1, 2) = g (1, 2) = 5, \quad \text { and } \quad f (0, 0) = 4.
$$

Find $f(x, y)$ and $g(x, y)$ . 

18. Rate of change of the rate of change We know that if $f(x, y)$ is a function of two variables and if $\mathbf{u} = a\mathbf{i} + b\mathbf{j}$ is a unit vector, then $D_{\mathbf{u}}f(x, y) = f_x(x, y)a + f_y(x, y)b$ is the rate of change of $f(x, y)$ at $(x, y)$ in the direction of $\mathbf{u}$ . Give a similar formula for the rate of change of the rate of change of $f(x, y)$ at $(x, y)$ in the direction $\mathbf{u}$ . 

19. Path of a heat-seeking particle A heat-seeking particle has the property that at any point $(x, y)$ in the plane, it moves in the direction of maximum temperature increase. If the temperature at $(x, y)$ is $T(x, y) = -e^{-2y} \cos x$ , find an equation $y = f(x)$ for the path of a heat-seeking particle at the point $(\pi/4, 0)$ . 

20. Velocity after a ricochet A particle traveling in a straight line with constant velocity $i + j - 5k$ passes through the point $(0, 0, 30)$ and hits the surface $z = 2x^{2} + 3y^{2}$ . The particle ricochets off the surface, the angle of reflection being equal to the angle of incidence. Assuming no loss of speed, what is the velocity of the particle after the ricochet? Simplify your answer. 

21. Directional derivatives tangent to a surface Let $S$ be the surface that is the graph of $f(x, y) = 10 - x^2 - y^2$ . Suppose that the temperature in space at each point $(x, y, z)$ is $T(x, y, z) = x^2y + y^2z + 4x + 14y + z$ . 

a. Among all the possible directions tangential to the surface S at the point $(0,0,10)$ , which direction will make the rate of change of temperature at $(0,0,10)$ a maximum? 

b. Which direction tangential to S at the point $(1,1,8)$ will make the rate of change of temperature a maximum? 

22. Drilling another borehole On a flat surface of land, geologists drilled a borehole straight down and hit a mineral deposit at 300 m. They drilled a second borehole 30 m to the north of the first and hit the mineral deposit at 285 m. A third borehole 30 m east of the first borehole struck the mineral deposit at 307.5 m. The geologists have reasons to believe that the mineral deposit is in the shape of a dome, and for the sake of economy, they would like to find where the deposit is closest to the surface. Assuming the surface to be the xy-plane, in what direction from the first borehole would you suggest the geologists drill their fourth borehole? 

The one-dimensional heat equation If $w(x,t)$ represents the temperature at position x at time t in a uniform wire with perfectly insulated sides, then the partial derivatives $w_{xx}$ and $w_{t}$ satisfy a differential equation of the form 

$$
w _ {x x} = \frac {1}{c ^ {2}} w _ {t}.
$$

This equation is called the one-dimensional heat equation. The value of the positive constant $c^{2}$ is determined by the material from which the wire is made. 

23. Find all solutions of the one-dimensional heat equation of the form $w = e^{rt} \sin \pi x$ , where r is a constant. 

24. Find all solutions of the one-dimensional heat equation that have the form $w = e^{rt} \sin kx$ and satisfy the conditions that $w(0, t) = 0$ and $w(L, t) = 0$ . What happens to these solutions as $t \to \infty$ ? 

## CHAPTER 13 Technology Application Projects

## Mathematica/Maple Projects

Projects can be found within MyLab Math. 

- Plotting Surfaces
Efficiently generate plots of surfaces, contours, and level curves. 

- Exploring the Mathematics Behind Skateboarding: Analysis of the Directional Derivative
The path of a skateboarder is introduced, first on a level plane, then on a ramp, and finally on a paraboloid. Compute, plot, and analyze the directional derivative in terms of the skateboarder. 

- Looking for Patterns and Applying the Method of Least Squares to Real Data
Fit a line to a set of numerical data points by choosing the line that minimizes the sum of the squares of the vertical distances from the points to the line. 

- Lagrange Goes Skateboarding: How High Does He Go? Revisit and analyze the skateboarders' adventures for maximum and minimum heights from both a graphical and analytic perspective using Lagrange multipliers. 

# 14 Multiple Integrals

![[8b1797366df7b9ab72ebe30a9f09e6ff8d3aaecc1fd1ccb746c7d92156a30088.jpg|image]]


OVERVIEW In this chapter we define the double integral of a function of two variables $f(x, y)$ over a region in the plane as the limit of approximating Riemann sums. Just as a single integral can represent signed area, so can a double integral represent signed volume. Double integrals can be evaluated using the Fundamental Theorem of Calculus studied in Section 5.4, but now the evaluations are done twice by integrating with respect to each of the variables x and y in turn. Double integrals can be used to find areas of more general regions in the plane than those encountered in Chapter 5. Moreover, just as the Substitution Rule could simplify finding single integrals, we can sometimes use polar coordinates to simplify computing a double integral. We study more general substitutions for evaluating double integrals as well. 

We also define the triple integral of a function of three variables $f(x, y, z)$ over a region in space. Triple integrals can be used to find volumes of still more general regions in space, and their evaluation is like that of double integrals with yet a third evaluation. Cylindrical or spherical coordinates can sometimes be used to simplify the calculation of a triple integral, and we investigate those techniques. Double and triple integrals have a number of applications, such as calculating the average value of a multivariable function, and finding moments and centers of mass.
