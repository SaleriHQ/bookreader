---
title: "Chapter 10: Parametric Equations and Polar Coordinates"
order: 10
---

# Chapter 10: Parametric Equations and Polar Coordinates

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

![教材插图](/books/thomas-calculus/assets/5fad0daf862709a202036d4738423cc47d60e5588b27c2cab4f046be7e4d14a5.jpg)


OVERVIEW In this chapter we study new ways to describe curves in the plane. Instead of considering a curve as the graph of a function or equation, we think of it as the path of a moving particle whose position is changing over time. Then each of the x- and y-coordinates of the particle’s position becomes a function of a third variable t. We can also change the way in which points in the plane themselves are described by using polar coordinates rather than the rectangular or Cartesian system. Both of these new tools are useful for describing motion, like that of planets and satellites, or projectiles moving in the plane or in space.



## 10.1 Parametrizations of Plane Curves

### Parametric Equations

![教材插图](/books/thomas-calculus/assets/41aa10567d38ea8821e6775992bcd9e5353c690c81df75a51f19903997d502ef.jpg)



FIGURE 10.1 The curve or path traced by a particle moving in the xy-plane is not always the graph of a function or single equation.


Figure 10.1 shows the path of a moving particle in the xy-plane. Notice that the path fails the vertical line test, so it cannot be described as the graph of a function of the variable x. However, we can describe the path by a pair of equations, $x = f ( t )$ and $y = g ( t )$ , where f and g are continuous functions. In the study of motion, t usually denotes time. Equations like these can describe more general curves than those described by a single function, and they provide not only the graph of the path traced out but also the location of the particle $( x , y ) = ( f ( t ) , g ( t ) )$ at any time t. 

> ***DEFINITION*** If x and y are given as functions 
>
> $$
> x = f (t), \quad y = g (t)
> $$
>
> over an interval I of t-values, then the set of points $( x , y ) = ( f ( t ) , g ( t ) )$ defined by these equations is a parametric curve. The equations are parametric equations for the curve. 
>
The variable t is a parameter for the curve, and its domain I is the parameter interval. If I is a closed interval, $a \leq t \leq b ,$ the point $( f ( a ) , g ( a ) )$ is the initial point of the curve and $( f ( b ) , g ( b ) )$ is the terminal point. When we give parametric equations and a parameter interval for a curve, we say that we have parametrized the curve. The equations and interval together constitute a parametrization of the curve. A given curve can be represented by different sets of parametric equations. (See Exercises 29 and 30.) 

**EXAMPLE 1** Sketch the curve defined by the parametric equations 

$$
x = \sin \frac {\pi t}{2}, \quad y = t, \quad 0 \leq t \leq 6.
$$

**Solution** We make a table of values (Table 10.1), plot the points $( x , y )$ , and draw a smooth curve through them (Figure 10.2). If we think of the curve as the path of a moving particle, the particle starts at time $t = 0$ at the initial point $( 0 , 0 )$ and then moves upward in a wavy path until at time $t = 6$ it reaches the terminal point $( 0 , 6 )$ . The direction of motion is shown by the arrows in Figure 10.2. 


TABLE 10.1 Values of $x = \sin { \frac { \pi t } { 2 } }$ and $y = t$ for selected values of t.


<table><tr><td>t</td><td>x</td><td>y</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>0</td><td>2</td></tr><tr><td>3</td><td>-1</td><td>3</td></tr><tr><td>4</td><td>0</td><td>4</td></tr><tr><td>5</td><td>1</td><td>5</td></tr><tr><td>6</td><td>0</td><td>6</td></tr></table>

![教材插图](/books/thomas-calculus/assets/f54ef1a227f1a8190e76474f6f64eded71f72c100e64d360fe44d5fb9941cccf.jpg)



FIGURE 10.2 The curve given by the parametric equations $x = \sin { \frac { \pi t } { 2 } }$ and y = t (Example 1).



**EXAMPLE 2** Sketch the curve defined by the parametric equations


$$
x = t ^ {2}, \quad y = t + 1, \quad - \infty <   t <   \infty .
$$

**Solution** We make a table of values (Table 10.2), plot the points ( )x y,  , and draw a smooth curve through them (Figure 10.3). We think of the curve as the path that a particle moves along the curve in the direction of the arrows. Although the time intervals in the table are equal, the consecutive points plotted along the curve are not at equal arc length distances. The reason for this is that the particle slows down as it gets nearer to the y-axis along the lower branch of the curve as t increases, and then speeds up after reaching the y-axis at 0, 1( ) and moving along the upper branch. Since the interval of values for t is all real numbers, there is no initial point or terminal point for the curve. 


TABLE 10.2 Values of $x = t ^ { 2 }$ and $y = t +$ 1 for selected values of t.


<table><tr><td>t</td><td>x</td><td>y</td></tr><tr><td>-3</td><td>9</td><td>-2</td></tr><tr><td>-2</td><td>4</td><td>-1</td></tr><tr><td>-1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>2</td></tr><tr><td>2</td><td>4</td><td>3</td></tr><tr><td>3</td><td>9</td><td>4</td></tr></table>

![教材插图](/books/thomas-calculus/assets/191857711c1147aca7818cd520d7620665d4d183b04443fb0bb9b6f26038d009.jpg)



FIGURE 10.3 The curve given by the parametric equations $x = t ^ { 2 }$ and $y = t + 1$ (Example 2).


![教材插图](/books/thomas-calculus/assets/31e1aeffb5f459fe30800140a459acc7de14d3693ac9112b464f2c6ce739f9c2.jpg)



FIGURE 10.4 The equations x = cos t and $y =$ tsin describe motion on the circle $x ^ { 2 } + y ^ { 2 } = 1$ . The arrow shows the direction of increasing t (Example 3).


![教材插图](/books/thomas-calculus/assets/727befe794132e0b2fff972c18a5738e6a986fb53edbe6f7853c8c2ebd2d567b.jpg)


FIGURE 10.5 The equations $x = { \sqrt { t } }$ and $y \ : = \ : t$ and the interval $t \geq 0$ describe the path of a particle that traces the right-hand half of the parabola $y = x ^ { 2 }$ (Example 4). 

![教材插图](/books/thomas-calculus/assets/59b2882620b296093f7ac30aae237b2895e6efeba5178408e5b9ef2d82cbe109.jpg)



FIGURE 10.6 The path defined by $x = t , y = t ^ { 2 } , - \infty < t < \infty$ is the entire parabola $y = x ^ { 2 }$ (Example 5).


For this example we can use algebraic manipulation to eliminate the parameter t and obtain an algebraic equation for the curve in terms of x and y alone. We solve $y = t + 1$ for t and substitute the resulting equation $t = y - 1$ into the equation for x, which yields 

$$
x = t ^ {2} = (y - 1) ^ {2} = y ^ {2} - 2 y + 1.
$$

The equation $x = y ^ { 2 } - 2 y + 1$ represents a parabola, as displayed in Figure 10.3. It is sometimes quite difficult, or even impossible, to eliminate the parameter from a pair of parametric equations, as we did here. 

**EXAMPLE 3** Graph the parametric curves 

$$
\begin{array}{l l} \text {(a)} x = \cos t, & y = \sin t, \qquad 0 \leq t \leq 2 \pi . \\ \text {(b)} x = a \cos t, & y = a \sin t, \qquad 0 \leq t \leq 2 \pi . \end{array}
$$

**Solution** 

(a) Since $x ^ { 2 } + y ^ { 2 } = \cos ^ { 2 } t + \sin ^ { 2 } t = 1$ , the parametric curve lies along the unit circle $x ^ { 2 } + y ^ { 2 } = 1$ . As t increases from 0 to 2 ,π the point $( x , y ) = ( \cos t , \sin t )$ starts at $( 1 , 0 )$ and traces the entire circle once counterclockwise (Figure 10.4). 

(b) For $x = a \cos t , y = a \sin t ,$ we have $x ^ { 2 } + y ^ { 2 } = a ^ { 2 } \cos ^ { 2 } t + a ^ { 2 } \sin ^ { 2 } t = a ^ { 2 } .$ . The parametrization describes a motion that begins at the point $( a , 0 )$ and traverses the circle $x ^ { 2 } + y ^ { 2 } = a ^ { 2 }$ once counterclockwise, returning to $( a , 0 )$ at $t = 2 \pi$ The graph is a circle centered at the origin with radius $r = | a |$ and coordinate points ( a t a t cos ,   sin ). ■ 

**EXAMPLE 4** The position $P ( x , y )$ of a particle moving in the xy-plane is given by the equations and parameter interval 

$$
x = \sqrt {t}, \quad y = t, \quad t \geq 0.
$$

Identify the path traced by the particle and describe the motion. 

**Solution** We try to identify the path by eliminating t between the equations $x = { \sqrt { t } }$ and $y \ = \ t ,$ , which might produce a recognizable algebraic relation between x and y. We find that 

$$
y = t = \left(\sqrt {t}\right) ^ {2} = x ^ {2}.
$$

Thus, the particle’s position coordinates satisfy the equation $y = x ^ { 2 }$ , so the particle moves along the parabola $y = x ^ { 2 }$ 

It would be a mistake, however, to conclude that the particle’s path is the entire parabola $y \ = \ x ^ { 2 } ;$ ; it is only half the parabola. The particle’s x-coordinate is never negative. The particle starts at 0, 0( ) when $t = 0$ and rises into the first quadrant as t increases (Figure 10.5). The parameter interval is $\left[ 0 , \infty \right)$ , and there is no terminal point. 

The graph of any function $y = f ( x )$ can always be given a natural parametrization $x \ = \ t$ and $y = f ( t )$ . The domain of the parameter in this case is the same as the domain of the function f . 

**EXAMPLE 5** A parametrization of the graph of the function $f ( x ) = x ^ { 2 }$ is given by 

$$
x = t, \quad y = f (t) = t ^ {2}, \quad - \infty <   t <   \infty .
$$

When $t \geq 0$ , this parametrization gives the same path in the xy-plane as we had in Example 4. However, since the parameter t here can now also be negative, we obtain the left-hand part of the parabola as well; that is, we have the entire parabolic curve. For this parametrization, there is no starting point and no terminal point (Figure 10.6). 


TABLE 10.3 Values of $x = t + ( 1 / t )$ and $y = t - ( 1 / t )$ for selected values of t.


<table><tr><td>t</td><td>1/t</td><td>x</td><td>y</td></tr><tr><td>0.1</td><td>10.0</td><td>10.1</td><td>-9.9</td></tr><tr><td>0.2</td><td>5.0</td><td>5.2</td><td>-4.8</td></tr><tr><td>0.4</td><td>2.5</td><td>2.9</td><td>-2.1</td></tr><tr><td>1.0</td><td>1.0</td><td>2.0</td><td>0.0</td></tr><tr><td>2.0</td><td>0.5</td><td>2.5</td><td>1.5</td></tr><tr><td>5.0</td><td>0.2</td><td>5.2</td><td>4.8</td></tr><tr><td>10.0</td><td>0.1</td><td>10.1</td><td>9.9</td></tr></table>

![教材插图](/books/thomas-calculus/assets/d6f7643cd37a8d307e4bea160befdfac318073057dcdd5d218ce69bac044d802.jpg)



FIGURE 10.7 The curve for $x = t + ( 1 / t ) , y = t - ( 1 / t ) , t > 0$ in Example 7. (The part shown is for $0 . 1 \leq t \leq 1 0 . )$


Notice that a parametrization also specifies when a particle moving along the curve is located at a specific point along the curve. In Example 4, the point 2, 4( ) is reached when $t = 4 ;$ in Example 5, it is reached “earlier” when $t = 2$ . You can see the implications of this aspect of parametrizations when considering the possibility of two objects coming into collision: they have to be at the exact same location point $P ( x , y )$ for some (possibly different) values of their respective parameters. We will say more about this aspect of parametrizations when we study motion in Chapter 12. 

**EXAMPLE 6** Find a parametrization for the line through the point $( a , b )$ having slope m. 

**Solution** A Cartesian equation of the line is $y - b = m ( x - a )$ . If we define the parameter t by $t = x - a$ , we find that $x = a + t$ and $y \_ b = m t$ . That is, 

$$
x = a + t, \quad y = b + m t, \quad - \infty <   t <   \infty
$$

parametrizes the line. This parametrization differs from the one we would obtain by the natural parametrization in Example 5 when $t \ = \ x$ . However, both parametrizations describe the same line. 

**EXAMPLE 7** Sketch and identify the path traced by the point $P ( x , y )$ if 

$$
x = t + \frac {1}{t}, \quad y = t - \frac {1}{t}, \quad t > 0.
$$

**Solution** We make a brief table of values in Table 10.3, plot the points, and draw a smooth curve through them, as we did in Example 1. Next we eliminate the parameter t from the equations. The procedure is more complicated than in Example 2. Taking the difference between x and y as given by the parametric equations, we find that 

$$
x - y = \left(t + \frac {1}{t}\right) - \left(t - \frac {1}{t}\right) = \frac {2}{t}.
$$

If we add the two parametric equations, we get 

$$
x + y = \left(t + \frac {1}{t}\right) + \left(t - \frac {1}{t}\right) = 2 t.
$$

We can then eliminate the parameter t by multiplying these last equations together: 

$$
(x - y) (x + y) = \left(\frac {2}{t}\right) (2 t) = 4.
$$

Expanding the expression on the left-hand side, we obtain a standard equation for a hyperbola (Section 10.6): 

$$
x ^ {2} - y ^ {2} = 4.\tag{1}
$$

Thus the coordinates of all the points $P ( x , y )$ described by the parametric equations satisfy Equation (1). However, Equation (1) does not require that the x-coordinate be positive. So there are points $( x , y )$ on the hyperbola that do not satisfy the parametric equation $x = t + ( 1 / t ) , t > 0$ . In fact, the parametric equations do not yield any points on the left branch of the hyperbola given by Equation (1), points where the x-coordinate would be negative. For small positive values of t, the path lies in the fourth quadrant and rises into the first quadrant as t increases, crossing the x-axis when $t = 1$ (see Figure 10.7). The parameter domain is $( 0 , \infty )$ and there is no starting point or terminal point for the path. 

Examples 4, 5, and 6 illustrate that a given curve, or portion of it, can be represented by different parametrizations. In the case of Example 7, we can also represent the righthand branch of the hyperbola by the parametrization 

$$
x = \sqrt {4 + t ^ {2}}, \quad y = t, \quad - \infty <   t <   \infty ,
$$

which is obtained by solving Equation (1) for $x \ge 0$ and letting y be the parameter. Still another parametrization for the right-hand branch of the hyperbola given by Equation (1) is 

**HISTORICAL BIOGRAPHY**

### Christiaan Huygens (1629–1695)

Huygens was born in the Hague, Netherlands. He studied mathematics at the University of Leiden. Huygens was a follower of Descartes. He published his important geometrical results in Theoremata de quadratura hyperboles, ellipses et circuli and De circuli magnitudine inventa (1654). Later, he considered the subject of probability and published Tractatus de ratiociniis in aleae ludo (1657). 

To know more, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/f682116347155a0bd6d924116b467a1e386b46937817316384c11ae4137f523e.jpg)



FIGURE 10.8 In Huygens’ pendulum clock, the bob swings in a cycloid, so the frequency is independent of the amplitude.


![教材插图](/books/thomas-calculus/assets/788a9aaa1579d0cd583fd592008406b499d4c140cc3d4bf8f6b3de0ff39ca112.jpg)



FIGURE 10.9 The position of $P ( x , y )$ on the rolling wheel at angle t (Example 8).


$$
x = 2 \sec t, \quad y = 2 \tan t, \quad - \frac {\pi}{2} <   t <   \frac {\pi}{2}.
$$

This parametrization follows from the trigonometric identity $\sec ^ { 2 } t - \tan ^ { 2 } t = 1$ ,  because 

$$
x ^ {2} - y ^ {2} = 4 \sec^ {2} t - 4 \tan^ {2} t = 4 (\sec^ {2} t - \tan^ {2} t) = 4.
$$

As t runs between $- \pi / 2$ and $\pi / 2$ ,  sec x t 
 remains positive and y t 
 tan runs between −∞ and $\infty ,$ so $P$ traverses the hyperbola’s right-hand branch. It comes in along the branch’s lower half as $t  0 ^ { - }$ , reaches $( 2 , 0 ) \operatorname { a t } t = 0$ , and moves out into the first quadrant as t increases steadily toward $\pi / 2$ . This is the same branch of the hyperbola shown in Figure 10.7. 

### Cycloids

The problem with a pendulum clock whose bob swings in a circular arc is that the frequency of the swing depends on the amplitude of the swing. The wider the swing, the longer it takes the bob to return to center (its lowest position). 

This does not happen if the bob can be made to swing in a curve called a cycloid. In 1673, Christiaan Huygens designed a pendulum clock whose bob would swing in a cycloid, a curve we define in Example 8. He hung the bob from a fine wire constrained by guards that caused it to draw up as it swung away from center (Figure 10.8). We describe the path parametrically in the next example. 

**EXAMPLE 8** A wheel of radius a rolls along a horizontal straight line. Find parametric equations for the path traced by a point P on the wheel’s circumference. The path is called a cycloid. 

**Solution** We take the line to be the x-axis, mark a point $P$ on the wheel, start the wheel with P at the origin, and roll the wheel to the right. As parameter, we use the angle t through which the wheel turns, measured in radians. Figure 10.9 shows the wheel a short while later when its base lies at units from the origin. The wheel’s center C lies at $( a t , a )$ and the coordinates of $P$ are 

$$
x = a t + a \cos \theta , \quad y = a + a \sin \theta .
$$

To express $\theta$ in terms of $^ { \cdot } t ,$ we observe that $t + \theta = 3 \pi / 2$ in the figure, so that 

$$
\theta = \frac {3 \pi}{2} - t.
$$

This makes 

$$
\cos \theta = \cos \left(\frac {3 \pi}{2} - t\right) = - \sin t, \quad \sin \theta = \sin \left(\frac {3 \pi}{2} - t\right) = - \cos t.
$$

The equations we seek are 

$$
x = a t - a \sin t, \quad y = a - a \cos t.
$$

These are usually written with the a factored out: 

$$
x = a (t - \sin t), \quad y = a (1 - \cos t).\tag{2}
$$

Figure 10.10 shows the first arch of the cycloid and part of the next. 

![教材插图](/books/thomas-calculus/assets/5c2a8a32e6191c7178a50a126f5ff9fb6c3635801c62a2629366844017a7b75f.jpg)



FIGURE 10.10 The cycloid curve x = − = − a t t y a t ( ) ( ) sin ,   1 cos , for $t \geq 0 .$


![教材插图](/books/thomas-calculus/assets/9c8e3edd5411af653e1570b49e19de525dc2d016caa7b78be026412ae0888937.jpg)



FIGURE 10.11 When Figure 10.10 is turned upside down, the y-axis points downward, indicating the direction of the gravitational force. Equations (2) still describe the curve parametrically.


![教材插图](/books/thomas-calculus/assets/0d860a01d430ee62aca6d767ee2b9d36c12f3fc0975ab12b5c40856becc13960.jpg)



FIGURE 10.12 The cycloid is the unique curve that minimizes the time it takes for a frictionless bead to slide from point O to point B.


![教材插图](/books/thomas-calculus/assets/9d7eb735bf0f92c1b0241afdd17cea8b5d64930afdaffcdb6f6ec9fedd3a7efd.jpg)



FIGURE 10.13 Beads released simultaneously on the upside-down cycloid at O, A, and C will reach B at the same time.


### Brachistochrones and Tautochrones

If we turn Figure 10.10 upside down, Equations (2) still apply and the resulting curve (Figure 10.11) has two interesting physical properties. The first relates to the origin O and the point B at the bottom of the first arch. Among all smooth curves joining these points, the cycloid is the curve along which a frictionless bead, subject only to the force of gravity, will slide from O to B the fastest. This makes the cycloid a brachistochrone (“brah-kisstoe-krone”), or shortest-time curve for these points. The second property is that even if you start the bead partway down the curve toward $B ,$ it will still take the bead the same amount of time to reach B. This makes the cycloid a tautochrone (“taw-toe-krone”), or same-time curve for O and B. 

Are there any other brachistochrones joining O and B, or is the cycloid the only one? We can formulate this as a mathematical question in the following way. At the start, the kinetic energy of the bead is zero since its velocity (speed) is zero. The work done by gravity in moving the bead from $( 0 , 0 )$ to any other point ( ) x y ,  in the plane is mgy, and this must equal the change in kinetic energy. (See Exercise 25 in Section 6.5.) That is, 

$$
m g y = \frac {1}{2} m v ^ {2} - \frac {1}{2} m (0) ^ {2}.
$$

Thus, the speed of the bead when it reaches $( x , y )$ has to be $v = { \sqrt { 2 g y } }$ . That is, 

$$
\frac {d s}{d T} = \sqrt {2 g y} \quad \begin{array}{l} d s \text {   is   the   arc   length   differential   along   the } \\ \text { bead's   path,   and   } T \text {   represents   time. } \end{array}
$$

or 

$$
d T = \frac {d s}{\sqrt {2 g y}} = \frac {\sqrt {1 + (d y / d x) ^ {2}} d x}{\sqrt {2 g y}}.\tag{3}
$$

The time $T _ { f }$ it takes the bead to slide along a particular path $y = f ( x )$ from O to B( )a aπ, 2 is 

$$
T _ {f} = \int_ {x = 0} ^ {x = a \pi} \sqrt {\frac {1 + (d y / d x) ^ {2}}{2 g y}} d x.\tag{4}
$$

What curves $y = f ( x )$ , if any, minimize the value of this integral? 

At first sight, we might guess that the straight line joining O and B would give the shortest time, but perhaps not. There might be some advantage in having the bead fall vertically at first to build up its speed faster. With a higher speed, the bead could travel a longer path and still reach B first. Indeed, this is the right idea. The solution, from a branch of mathematics known as the calculus of variations, is that the original cycloid from O to B is the one and only brachistochrone for O and B (Figure 10.12). 

In the next section we show how to find the arc length differential ds for a parametrized curve. Once we know how to find $d s ,$ we can calculate the time given by the righthand side of Equation (4) for the cycloid. This calculation gives the amount of time it takes a frictionless bead to slide down the cycloid to B after it is released from rest at O. The time turns out to be equal to $\pi { \sqrt { a / g } }$ , where a is the radius of the wheel defining the particular cycloid. Moreover, if we start the bead at some lower point on the cycloid, corresponding to a parameter value $t _ { 0 } > 0 ,$ we can integrate the parametric form of $\left. \dot { d s } \right/ \sqrt { 2 g y }$ in Equation (3) over the interval $[ t _ { 0 } , \pi ]$ to find the time it takes the bead to reach the point B. That calculation results in the same time $T = \pi { \sqrt { a / g } }$ . It takes the bead the same amount of time to reach B no matter where it starts, which makes the cycloid a tautochrone. Beads starting simultaneously from $O , A ,$ , and C in Figure 10.13, for instance, will all reach B at exactly the same time. This is the reason why Huygens’ pendulum clock in Figure 10.8 is independent of the amplitude of the swing. 

### Exercises 10.1


#### Finding Cartesian from Parametric Equations

Exercises 1–18 give parametric equations and parameter intervals for the motion of a particle in the xy-plane. Identify the particle’s path by finding a Cartesian equation for it. Graph the Cartesian equation. (The graphs will vary with the equation used.) Indicate the portion of the graph traced by the particle and the direction of motion. 

1. $x = 3 t, \quad y = 9 t ^ {2}, \quad - \infty <   t <   \infty$

2. $x = - \sqrt {t}, y = t, t \geq 0$

3. $x = 2 t - 5, y = 4 t - 7, - \infty <   t <   \infty$

4. $x = 3 - 3 t, \quad y = 2 t, \quad 0 \leq t \leq 1$

5. $x = \cos 2 t, y = \sin 2 t, 0 \leq t \leq \pi$

6. $x = \cos (\pi - t), y = \sin (\pi - t), 0 \leq t \leq \pi$

7. $x = 4 \cos t, y = 2 \sin t, 0 \leq t \leq 2 \pi$


E.


8. $x = 4 \sin t, \quad y = 5 \cos t, \quad 0 \leq t \leq 2 \pi$

9. $x = \sin t, y = \cos 2 t, - \frac {\pi}{2} \leq t \leq \frac {\pi}{2}$

10. $x = 1 + \sin t, \quad y = \cos t - 2, \quad 0 \leq t \leq \pi$

$$
\mathbf {1 1 .} x = t ^ {2}, \quad y = t ^ {6} - 2 t ^ {4}, \quad - \infty <   t <   \infty
12. $$x = \frac {t}{t - 1}, y = \frac {t - 2}{t + 1}, - 1 <   t <   1$$
\mathbf {1 3 .} x = t, \quad y = \sqrt {1 - t ^ {2}}, \quad - 1 \leq t \leq 0
$$

$$
\mathbf {1 4 .} x = \sqrt {t + 1}, y = \sqrt {t}, t \geq 0
15. $$x = \sec^ {2} t - 1, y = \tan t, - \pi / 2 <   t <   \pi / 2$$
x = - \sec t, y = \tan t, - \pi / 2 <   t <   \pi / 2
$$

17. $x = - \cosh t, y = \sinh t, - \infty <   t <   \infty$

18. $x = 2 \sinh t, y = 2 \cosh t, - \infty <   t <   \infty$

In Exercises 19–24, match the parametric equations with the parametric curves labeled A through F. 

19. $x = 1 - \sin t, y = 1 + \cos t$

20. $x = \cos t, y = 2 \sin t$

21. $x = \frac {1}{4} t \cos t, \quad y = \frac {1}{4} t \sin t$

22. $x = \sqrt {t}, y = \sqrt {t} \cos t$

23. $x = \ln t, y = 3 e ^ {- t / 2}$

24. $x = \cos t, y = \sin 3 t$


A.


![教材插图](/books/thomas-calculus/assets/7dd159e5ab489df117e14b96077dd7a6b91533568d1d177666379280c91e8e57.jpg)


![教材插图](/books/thomas-calculus/assets/d674512ce38d080719b85c843576106ab06de34c7f4494e6fa828eb5f6243f21.jpg)



C.



D.


![教材插图](/books/thomas-calculus/assets/9b61ac646e3ba00651b7243c374cfab398e7106c509eea3919aa5213c70eab6d.jpg)


![教材插图](/books/thomas-calculus/assets/3105089995803ce2732fa46e8f35793cd6138fa6fb5cae1d076496767ed89e8e.jpg)



F.


![教材插图](/books/thomas-calculus/assets/8f8db2951daac07adeeaa77120827db1994cf823c18231285bc8b671e2ae1db0.jpg)


![教材插图](/books/thomas-calculus/assets/b9b3240e21e879aa8f4c0d296115745a0094295b28f81bb9f9a090589cb85d39.jpg)


In Exercises 25–28, use the given graphs of $x = f ( t )$ and $y = g ( t )$ to sketch the corresponding parametric curve in the xy-plane. 25. 

![教材插图](/books/thomas-calculus/assets/2b5c2611fc01241e3a4c1db4a3a2b0d538571827532b2fca7cfc5e53fac88571.jpg)



26.


![教材插图](/books/thomas-calculus/assets/2f2694808f3f39c9dd01aee4317c7a352a4401caa5298e2b16656aaf9a2a8041.jpg)


![教材插图](/books/thomas-calculus/assets/3e988e89efda5eeaf655021db95c5e2b1ae28193e0ce7b767ef971c0d5c06c9a.jpg)


![教材插图](/books/thomas-calculus/assets/b4628a38c9387ccda9936633a43f4a08df9b68ce4efb84c2db928b660a84609a.jpg)



27.


![教材插图](/books/thomas-calculus/assets/83a87d365db6805ba6e138e2a0d0ebbccea5fe79c6701d5bb4002c258bd15ebe.jpg)


![教材插图](/books/thomas-calculus/assets/50086ab152b715f62bd07027e91b9c7fa8cb72af7209c081292a09737b3f8a28.jpg)



28.


![教材插图](/books/thomas-calculus/assets/b821aa5dce0cc8aec51ec54e41aedb4f4e73b4b6815d5860c8df2d715d2debe0.jpg)


Finding Parametric Equations 

29. Find parametric equations and a parameter interval for the motion of a particle that starts at $( a , 0 )$ and traces the circle $x ^ { 2 } + y ^ { 2 } = a ^ { 2 }$ 

a. once clockwise. 

b. once counterclockwise. 

c. twice clockwise. 

d. twice counterclockwise. 

(There are many ways to do these, so your answers may not be the same as the ones at the back of the text.) 

30. Find parametric equations and a parameter interval for the motion of a particle that starts at $( a , 0 )$ and traces the ellipse $( x ^ { 2 } / a ^ { 2 } ) + \bar { ( y ^ { 2 } / b ^ { 2 } ) } = 1$ 

a. once clockwise. 

b. once counterclockwise. 

c. twice clockwise. 

d. twice counterclockwise. 

(As in Exercise 29, there are many correct answers.) 

In Exercises 31–36, find a parametrization for the curve. 

31. the line segment with endpoints ( ) − − 1,  3 and 4, 1 ( ) 

32. the line segment with endpoints 1, 3 ( ) − and 3,  2 ( ) − 

33. the lower half of the parabola $x - 1 = y ^ { 2 }$ 

34. the left half of the parabola $y = x ^ { 2 } + 2 x$ 

35. the ray (half line) with initial point 2, 3( ) that passes through the point ( ) − − 1,  1 

36. the ray (half line) with initial point 1, 2 ( ) − that passes through the point ( ) 0, 0 

37. Find parametric equations and a parameter interval for the motion of a particle starting at the point ( ) 2, 0 and tracing the top half of the circle $x ^ { 2 } + y ^ { 2 } = 4 $ four times. 

38. Find parametric equations and a parameter interval for the motion of a particle that moves along the graph of $y = x ^ { 2 }$ in the following way: Beginning at ( ) 0, 0 it moves to $( 3 , 9 ) ,$ and then it travels back and forth from ( ) 3, 9 to 3, 9( ) − infinitely many times. 

39. Find parametric equations for the semicircle 

$$
x ^ {2} + y ^ {2} = a ^ {2}, \quad y > 0,
$$

using as parameter the slope $t = d y / d x$ of the tangent line to the curve at ( ) x y ,  . 

40. Find parametric equations for the circle 

$$
x ^ {2} + y ^ {2} = a ^ {2},
$$

using as parameter the arc length s measured counterclockwise from the point $( a , 0 )$ to the point $( x , y )$ 

41. Find a parametrization for the line segment joining points ( ) 0, 2 and ( ) 4, 0 using the angle θ in the accompanying figure as the parameter. 

![教材插图](/books/thomas-calculus/assets/34769571bd87252099ea4f33be098a827c8d836355e5f7186ee5d43380bf8d5a.jpg)


42. Find a parametrization for the curve $y = { \sqrt { x } }$ with terminal point ( ) 0, 0 using the angle θ in the accompanying figure as the parameter. 

![教材插图](/books/thomas-calculus/assets/e21649db6868690586ae628efe86c6318349ec83011ebdcc79c5bb72dad0441d.jpg)


43. Find a parametrization for the circle $( x - 2 ) ^ { 2 } + y ^ { 2 } = 1$ starting at ( ) 1, 0 and moving clockwise once around the circle, using the central angle θ in the accompanying figure as the parameter. 

![教材插图](/books/thomas-calculus/assets/487efd82ef9aef802b8516a633799379c95362f529e1bd61a08846d9446f93b7.jpg)


44. Find a parametrization for the circle $x ^ { 2 } + y ^ { 2 } = 1$ starting at ( ) 1, 0 and moving counterclockwise to the terminal point 0, 1 ( ), using the angle θ in the accompanying figure as the parameter. 

![教材插图](/books/thomas-calculus/assets/a1fd0ac67bbb37c258a5c0efa8671f6a2f1c3613102d63ffbbba1971573dc8bc.jpg)


45. The witch of Maria Agnesi The bell-shaped witch of Maria Agnesi can be constructed in the following way. Start with a circle of radius 1, centered at the point ( ) 0, 1 , as shown in the accompanying figure. Choose a point A on the line y = 2 and connect it to the origin with a line segment. Call the point where the segment crosses the circle B. Let P be the point where the vertical line through A crosses the horizontal line through B. The witch is the curve traced by P as A moves along the line $y = 2$ . Find parametric equations and a parameter interval for the witch by expressing the coordinates of P in terms of t, the radian measure of the angle that segment OA makes with the positive x-axis. The following equalities (which you may assume) will help. 

a. $x = A Q$ 

$$
\mathbf {b}. y = 2 - A B \sin t
$$

c. $A B \cdot O A = ( A Q ) ^ { 2 } $ 

![教材插图](/books/thomas-calculus/assets/5e84c489c57cdc02a2486922908a974c04edacdd324affc0dcfaa00afbb50580.jpg)


46. Hypocycloid When a circle rolls on the inside of a fixed circle, any point P on the circumference of the rolling circle describes a hypocycloid. Let the fixed circle be $x ^ { 2 } + y ^ { 2 } = a ^ { 2 }$ , let the radius of the rolling circle be $^ { b , }$ and let the initial position of the tracing point P be $A ( a , 0 )$ . Find parametric equations for the hypocycloid, using as the parameter the angle θ from the positive x-axis to the line joining the circles’ centers. In particular, ${ \mathrm { i f } } b = a / 4$ , as in the accompanying figure, show that the hypocycloid is the astroid 

$$
x = a \cos^ {3} \theta , y = a \sin^ {3} \theta .
$$

![教材插图](/books/thomas-calculus/assets/5d76fbff80f88c4166b0215ff64399c9e7de600979ca0bdab8aaf4d74f093cce.jpg)


47. As the point N moves along the line $y = a$ in the accompanying figure, P moves in such a way that $O P = M N$ . Find parametric equations for the coordinates of P as functions of the angle t that the line ON makes with the positive y-axis. 

![教材插图](/books/thomas-calculus/assets/bbf77d710c4085e9fed2c131a803ffd79b9f46d8bfadc9c3b8f5077ad5ffab85.jpg)


48. Trochoids A wheel of radius a rolls along a horizontal straight line without slipping. Find parametric equations for the curve traced out by a point P on a spoke of the wheel b units from its center. As parameter, use the angle θ through which the wheel turns. The curve is called a trochoid, which is a cycloid when $b = a .$ 

#### Distance Using Parametric Equations

49. Find the point on the parabola $x = t , y = t ^ { 2 } , - \infty < t < \infty ,$ closest to the point ( )2, 1 2 . (Hint: Minimize the square of the distance as a function of t.) 

50. Find the point on the ellipse x = =2 cos ,   sin ,t y t $0 \leq t \leq 2 \pi$ closest to the point ( ) 3 4 , 0 . (Hint: Minimize the square of the distance as a function of t.) 

#### GRAPHER EXPLORATIONS<sub>T</sub>

Using a parametric equation grapher, graph the equations over the given intervals in Exercises 51–58. 

51. Ellipse x = 4 cos ,t $y = 2$ sin , overt 

a. $0 \leq t \leq 2 \pi$ 

b. $0 \leq t \leq \pi$ 

$$
\mathbf {c}. - \pi / 2 \leq t \leq \pi / 2
52. $Hyperbola branch $x = \sec t$ (enter as 1 cos ( )), t y t = tan (enter as sin ( ) cos ( )), overt t$
\mathbf {a}. - 1. 5 \leq t \leq 1. 5
$$

$$
\mathbf {b}. - 0. 5 \leq t \leq 0. 5
$$

$$
\mathbf {c}. - 0. 1 \leq t \leq 0. 1
$$

53. Parabola $x = 2 t + 3 , y = t ^ { 2 } - 1 , - 2 \leq t \leq 2$ 

54. Cycloid x = −t tsin , $y = 1 - \cos t ,$ , over 

a. $0 \leq t \leq 2 \pi$ 

b. $0 \leq t \leq 4 \pi$ 

c. $\pi \leq t \leq 3 \pi$ 

55. Deltoid 

$$
x = 2 \cos t + \cos 2 t, y = 2 \sin t - \sin 2 t, 0 \leq t \leq 2 \pi
$$

What happens if you replace 2 with −2 in the equations for x and y? Graph the new equations and find out. 

56. A nice curve

$$
x = 3 \cos t + \cos 3 t, \quad y = 3 \sin t - \sin 3 t, \quad 0 \leq t \leq 2 \pi
$$

What happens if you replace 3 with −3 in the equations for x and $y ?$ Graph the new equations and find out. 

57. a. Epicycloid 

$$
x = 9 \cos t - \cos 9 t, y = 9 \sin t - \sin 9 t, 0 \leq t \leq 2 \pi
$$

$$
\begin{array}{l} \textbf {5 8 . a .} x = 6 \cos t + 5 \cos 3 t, y = 6 \sin t - 5 \sin 3 t, \\ 0 \leq t \leq 2 \pi \end{array}
$$

b. Hypocycloid 

$$
\begin{array}{l} \text { b. } x = 6 \cos 2 t + 5 \cos 6 t, y = 6 \sin 2 t - 5 \sin 6 t, \\ 0 \leq t \leq \pi \end{array}
$$

x = + = −8 cos 2 cos 4 , 8 sin 2 sin 4 ,t t y t t $0 \leq t \leq 2 \pi$ 

$$
\mathbf {c}. x = 6 \cos t + 5 \cos 3 t, y = 6 \sin 2 t - 5 \sin 3 t,
$$

c. Hypotrochoid 

$$
0 \leq t \leq 2 \pi
$$

x = + = − ≤ ≤cos 5 cos 3 , 6 cos 5 sin 3 , 0 2t t y t t t π 

$$
\begin{array}{l} \mathbf {d}. x = 6 \cos 2 t + 5 \cos 6 t, y = 6 \sin 4 t - 5 \sin 6 t, \\ 0 \leq t \leq \pi \end{array}
$$

## 10.2 Calculus with Parametric Curves

In this section we use calculus to study parametric curves. Specifically, we find slopes, lengths, and areas associated with parametrized curves. 

### Tangent Lines and Areas

A parametrized curve $x = f ( t )$ and $y = g ( t )$ is differentiable at t if f and g are each differentiable at t. At a point on a differentiable parametrized curve where y is also a differentiable function of x, the derivatives $d y / d t , d x / d t$ , and dy dx are related by the Chain Rule: 

$$
{\frac {d y}{d t}} = {\frac {d y}{d x}} \cdot {\frac {d x}{d t}}.
$$

If $d x / d t \ne 0 ,$ we may divide both sides of this equation by dx dt to solve for $d y / d x$ 

Parametric Formula for dy dx 

If all three derivatives exist and $d x / d t \ne 0$ , then 

$$
\frac {d y}{d x} = \frac {d y / d t}{d x / d t}.\tag{1}
$$

If parametric equations define y as a twice-differentiable function of x, we can apply Equation (1) to the function $d y / d x = y ^ { \prime }$ to calculate $d ^ { 2 } y / d x ^ { 2 }$ as a function of t: 

$$
\frac {d ^ {2} y}{d x ^ {2}} = \frac {d}{d x} (y ^ {\prime}) = \frac {d y ^ {\prime} / d t}{d x / d t}. \quad \text { Eq.   (1)   with   } y ^ {\prime} \text {   in   place   of   } y
$$

Parametric Formula for $d ^ { 2 } y / d x ^ { 2 }$ 

![教材插图](/books/thomas-calculus/assets/1044ff825d297c3d1adc20cbed26a71c4afdb3304560251bec643e1f5ebfc86f.jpg)


If the equations $x = f ( t ) , y = g ( t )$ define y as a twice-differentiable function of x, then at any point where $d x / d t \ne 0$ and $y ^ { \prime } = d y / d x$ 

$$
\frac {d ^ {2} y}{d x ^ {2}} = \frac {d y ^ {\prime} / d t}{d x / d t}.\tag{2}
$$

**EXAMPLE 1** Find the tangent line to the curve

$$
x = \sec t, \quad y = \tan t, \quad - \frac {\pi}{2} <   t <   \frac {\pi}{2},
$$

FIGURE 10.14 The curve in Example 1 is the right-hand branch of the hyperbola $x ^ { 2 } - y ^ { 2 } = 1$ 

at the point $( \sqrt { 2 } , 1 )$ , where $t = \pi / 4$ (Figure 10.14). 

**Solution** The slope of the curve at t is 

$$
\frac {d y}{d x} = \frac {d y / d t}{d x / d t} = \frac {\sec^ {2} t}{\sec t \tan t} = \frac {\sec t}{\tan t}.\tag{Eq. (1}
$$

Setting t equal to $\pi / 4$ gives 

$$
\left. \frac {d y}{d x} \right| _ {t = \pi / 4} = \frac {\sec (\pi / 4)}{\tan (\pi / 4)} = \frac {\sqrt {2}}{1} = \sqrt {2}.
$$

The tangent line is 

$$
\begin{array}{c} y - 1 = \sqrt {2} \big (x - \sqrt {2} \big) \\ y = \sqrt {2} x - 2 + 1 \\ y = \sqrt {2} x - 1. \end{array}
$$

Finding $d ^ { 2 } y / d x ^ { 2 }$ in Terms of t 

**EXAMPLE 2** Find $d ^ { 2 } y / d x ^ { 2 }$ as a function of t if $x = t - t ^ { 2 }$ and $y = t - t ^ { 3 }$ 

1. Express $y ^ { \prime } = d y /$ dx  in terms of t. 

**Solution**

2. Find $d y ^ { \prime } / d t .$ 

1. Express $y ^ { \prime } = d y / d x$ in terms of t. 

3. Divide dy dt ′ by dx dt. 

$$
y ^ {\prime} = \frac {d y}{d x} = \frac {d y / d t}{d x / d t} = \frac {1 - 3 t ^ {2}}{1 - 2 t}
$$

2. Differentiate $y ^ { \prime }$ with respect to t. 

$$
\frac {d y ^ {\prime}}{d t} = \frac {d}{d t} \left(\frac {1 - 3 t ^ {2}}{1 - 2 t}\right) = \frac {2 - 6 t + 6 t ^ {2}}{(1 - 2 t) ^ {2}} \quad \text { Derivative   Quotient   Rule }
$$

3. Divide $d y ^ { \prime } / d t$ by dx dt. 

$$
\frac {d ^ {2} y}{d x ^ {2}} = \frac {d y ^ {\prime} / d t}{d x / d t} = \frac {(2 - 6 t + 6 t ^ {2}) / (1 - 2 t) ^ {2}}{1 - 2 t} = \frac {2 - 6 t + 6 t ^ {2}}{(1 - 2 t) ^ {3}} \tag {Eq.(2)}
$$

**EXAMPLE 3** Find the area enclosed by the astroid (Figure 10.15) 

$$
x = \cos^ {3} t, \quad y = \sin^ {3} t, \quad 0 \leq t \leq 2 \pi .
$$

![教材插图](/books/thomas-calculus/assets/4e631f4874cad3d13f1ea9233eb61469a208f89db2fd83112cbdf46c2eb0a526.jpg)


**Solution** By symmetry, the enclosed area is four times the area beneath the curve in the first quadrant where $0 \leq t \leq \pi / 2$ .  We can apply the definite integral formula for area studied in Chapter $^ { 5 , }$ using substitution to express the curve and differential dx in terms of the parameter t. Thus, 


FIGURE 10.15 The astroid in Example 3.


$$
\begin{array}{l l} A = 4 \int_ {0} ^ {1} y d x & \text { Four   times   area   under   } y \\ & \text { from   } x = 0 \text {   to   } x = 1 \\ = 4 \int_ {\pi / 2} ^ {0} (\sin^ {3} t) (- 3 \cos^ {2} t \sin t) d t & \cos^ {3} \pi / 2 = 0, \cos^ {3} 0 = 1 \\ = 4 \int_ {0} ^ {\pi / 2} (\sin^ {3} t) (3 \cos^ {2} t \sin t) d t & \text { Substitution   for   } y \text {   and   } d x \\ = 1 2 \int_ {0} ^ {\pi / 2} \left(\frac {1 - \cos 2 t}{2}\right) ^ {2} \left(\frac {1 + \cos 2 t}{2}\right) d t & \sin^ {4} t = \left(\frac {1 - \cos 2 t}{2}\right) ^ {2} \\ = \frac {3}{2} \int_ {0} ^ {\pi / 2} (1 - 2 \cos 2 t + \cos^ {2} 2 t) (1 + \cos 2 t) d t & \text { Expand   squared   term. } \\ = \frac {3}{2} \int_ {0} ^ {\pi / 2} (1 - \cos 2 t - \cos^ {2} 2 t + \cos^ {3} 2 t) d t & \text { Multiply   terms. } \\ = \frac {3}{2} \left[ \int_ {0} ^ {\pi / 2} (1 - \cos 2 t) d t - \int_ {0} ^ {\pi / 2} \cos^ {2} 2 t d t + \int_ {0} ^ {\pi / 2} \cos^ {3} 2 t d t \right] \\ = \frac {3}{2} \left[ (t - \frac {1}{2} \sin 2 t) - \frac {1}{2} (t + \frac {1}{4} \sin 4 t) + \frac {1}{2} (\sin 2 t - \frac {1}{3} \sin^ {3} 2 t) \right] _ {0} ^ {\pi / 2} & \text { As   in   Section   8.3, } \\ = \frac {3}{2} \left[ (\frac {\pi}{2} - 0 - 0 - 0) - \frac {1}{2} (\frac {\pi}{2} + 0 - 0 - 0) + \frac {1}{2} (0 - 0 - 0 + 0) \right] & \text { Evaluate. } \\ = \frac {3 \pi}{8}. & \end{array}
$$

![教材插图](/books/thomas-calculus/assets/252e01164d92dd5b5a520fa0b932d574d3d0fd2dabf625511fef77849f0b4f6a.jpg)



FIGURE 10.16 The length of the smooth curve C from A to B is approximated by the sum of the lengths of the polygonal path (straight-line segments) starting at $A = P _ { 0 } ,$ then to $P _ { 1 } { \mathrm { : } }$ ,  and so on, ending at $B = P _ { n }$


![教材插图](/books/thomas-calculus/assets/67f9d8bad20ce7eb36adfa47c5ddb57551bfb8598544375650cf2d546bb29119.jpg)



FIGURE 10.17 The arc $P _ { k - 1 } P _ { k }$ is approximated by the straight-line segment shown here, which has length $L _ { k } = \sqrt { ( \Delta x _ { k } ) ^ { 2 } + ( \Delta y _ { k } ) ^ { 2 } }$


### Length of a Parametrically Defined Curve

Let C be a curve given parametrically by the equations 

$$
x = f (t) \quad \text { and } \quad y = g (t), \quad a \leq t \leq b.
$$

We assume the functions $f$ and $g$ are continuously differentiable (meaning they have continuous first derivatives) on the interval $[ a , b ]$ . We also assume that the derivatives $f ^ { \prime } ( t )$ and $g ^ { \prime } ( t )$ are not simultaneously zero, which prevents the curve C from having any corners or cusps. Such a curve is called a smooth curve. We subdivide the path (or arc) AB into n pieces at points $A = P _ { 0 } , P _ { 1 } , P _ { 2 } , . . . , P _ { n } = B$ (Figure 10.16). These points correspond to a partition of the interval $[ a , b ]$ by $a = t _ { 0 } < t _ { 1 } < t _ { 2 } < \cdots < t _ { n } = b$ , where $P _ { k } = ( f ( t _ { k } ) , g ( t _ { k } ) )$ .  Join successive points of this subdivision by straight-line segments (Figure 10.16). A representative line segment has length 

$$
\begin{array}{c} L _ {k} = \sqrt {(\Delta x _ {k}) ^ {2} + (\Delta y _ {k}) ^ {2}} \\ = \sqrt {[ f (t _ {k}) - f (t _ {k - 1}) ] ^ {2} + [ g (t _ {k}) - g (t _ {k - 1}) ] ^ {2}} \end{array}
$$

(see Figure 10.17). If $\Delta t _ { k }$ is small, the length $L _ { k }$ is approximately the length of arc $P _ { k - 1 } P _ { k }$ By the Mean Value Theorem, there are numbers $t _ { k } ^ { * }$ and $t _ { k } ^ { * * }$ in $[ t _ { k - 1 } , t _ { k } ]$ such that 

$$
\begin{array}{l} \Delta x _ {k} = f (t _ {k}) - f (t _ {k - 1}) = f ^ {\prime} (t _ {k} ^ {*}) \Delta t _ {k}, \\ \Delta y _ {k} = g (t _ {k}) - g (t _ {k - 1}) = g ^ {\prime} (t _ {k} ^ {* *}) \Delta t _ {k}. \end{array}
$$

Assuming the path from A to B is traversed exactly once as t increases from $t = a$ to $t \ = \ b ,$ , with no doubling back or retracing, an approximation to the (yet to be defined) “length” of the curve AB is the sum of all the lengths $L _ { k }$ : 

$$
\begin{array}{l} \sum_ {k = 1} ^ {n} L _ {k} = \sum_ {k = 1} ^ {n} \sqrt {(\Delta x _ {k}) ^ {2} + (\Delta y _ {k}) ^ {2}} \\ = \sum_ {k = 1} ^ {n} \sqrt {[ f ^ {\prime} (t _ {k} ^ {*}) ] ^ {2} + [ g ^ {\prime} (t _ {k} ^ {* *}) ] ^ {2}}   \Delta t _ {k}. \end{array}
$$

Although this last sum on the right is not exactly a Riemann sum (because $f ^ { \prime }$ and $g ^ { \prime }$ are evaluated at different points), it can be shown that its limit, as the norm of the partition tends to zero and the number of segments $n  \infty ,$ , is the definite integral 

$$
\lim _ {| | P | | \rightarrow 0} \sum_ {k = 1} ^ {n} \sqrt {\left[ f ^ {\prime} (t _ {k} ^ {*}) \right] ^ {2} + \left[ g ^ {\prime} (t _ {k} ^ {* *}) \right] ^ {2}}   \Delta t _ {k} = \int_ {a} ^ {b} \sqrt {\left[ f ^ {\prime} (t) \right] ^ {2} + \left[ g ^ {\prime} (t) \right] ^ {2}}   d t.
$$

Therefore, it is reasonable to define the length of the curve from A to B to be this integral. 

> ***DEFINITION*** If a curve C is defined parametrically by $x = f ( t )$ and $y = g ( t )$ $a \leq t \leq b ,$ where $f ^ { \prime }$ and $g ^ { \prime }$ are continuous and not simultaneously zero on [ a, $b ] ,$ and if C is traversed exactly once as t increases from $t = a \mathrm { t o } t = b .$ , then the length of C is the definite integral 
>
> $$
> L = \int_ {a} ^ {b} \sqrt {\left[ f ^ {\prime} (t) \right] ^ {2} + \left[ g ^ {\prime} (t) \right] ^ {2}} d t.
> $$
>
> If $x = f ( t )$ and $y = g ( t )$ , then using the Leibniz notation we can write the formula for arc length this way: 
>
> $$
> L = \int_ {a} ^ {b} \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t.\tag{3}
> $$
>
A smooth curve C does not come to a stop and reverse its direction of motion over the time interval $[ a , b ]$ since $( f ^ { \prime } ) ^ { 2 } + ( g ^ { \prime } ) ^ { 2 } > 0$ throughout the interval. At a point where a curve stops and then doubles back on itself, either the curve fails to be differentiable or both derivatives must simultaneously equal zero. We will examine this phenomenon in Chapter 12, where we study tangent vectors to curves. 

If there are two different parametrizations for a curve C whose length we want to find, it does not matter which one we use. However, the parametrization we choose must meet the conditions stated in the definition of the length of C (see Exercise 41 for an example). 

**EXAMPLE 4** Using the definition, find the length of the circle of radius r defined parametrically by 

$$
x = r \cos t \quad \text { and } \quad y = r \sin t, \quad 0 \leq t \leq 2 \pi .
$$

**Solution** As t varies from 0 to $2 \pi .$ , the circle is traversed exactly once, so the circumference is 

$$
L = \int_ {0} ^ {2 \pi} \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t.
$$

We find 

$$
\frac {d x}{d t} = - r \sin t, \quad \frac {d y}{d t} = r \cos t
$$

and 

$$
\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} = r ^ {2} (\sin^ {2} t + \cos^ {2} t) = r ^ {2}.
$$

Therefore, the total arc length is 

$$
L = \int_ {0} ^ {2 \pi} \sqrt {r ^ {2}} d t = r [ t ] _ {0} ^ {2 \pi} = 2 \pi r.
$$

**EXAMPLE 5** Find the length of the astroid (Figure 10.15) 

$$
x = \cos^ {3} t, \quad y = \sin^ {3} t, \quad 0 \leq t \leq 2 \pi .
$$

**Solution** Because of the curve’s symmetry with respect to the coordinate axes, its length is four times the length of the first-quadrant portion. We have 

$$
\begin{array}{l} x = \cos^ {3} t, \quad y = \sin^ {3} t \\ \left(\frac {d x}{d t}\right) ^ {2} = [ 3 \cos^ {2} t (- \sin t) ] ^ {2} = 9 \cos^ {4} t \sin^ {2} t \end{array}
$$

$$
\left(\frac {d y}{d t}\right) ^ {2} = \left[ 3 \sin^ {2} t (\cos t) \right] ^ {2} = 9 \sin^ {4} t \cos^ {2} t
$$

$$
\begin{array}{l} \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} = \sqrt {9 \cos^ {2} t \sin^ {2} t (\underbrace {\cos^ {2} t + \sin^ {2} t} _ {1})} \\ = \sqrt {9 \cos^ {2} t \sin^ {2} t} \\ = 3 | \cos t \sin t | \quad \cos t \sin t \geq 0 \text {   for   } 0 \leq t \leq \pi / 2 \\ = 3 \cos t \sin t. \end{array}
$$

Therefore, 

$$
\begin{array}{r l} \text { Length   of   first - quadrant   portion } & = \int_ {0} ^ {\pi / 2} 3 \cos t \sin t d t \\ & = \frac {3}{2} \int_ {0} ^ {\pi / 2} \sin 2 t d t \\ & = - \frac {3}{4} \cos 2 t \Big | _ {0} ^ {\pi / 2} = \frac {3}{2}. \end{array} \quad \cos t \sin t = (1 / 2) \sin 2 t
$$

The length of the astroid is four times this: $4 ( 3 / 2 ) = 6 $ 

**EXAMPLE 6** Find the perimeter of the ellipse ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } = 1 .$ , where $a > b > 0$ 

**Solution** Parametrically, we represent the ellipse by the equations x 
 a t sin and $y = b$ tcos , $0 \leq t \leq 2 \pi$ .  Then 

$$
\begin{array}{r l} \left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} & = a ^ {2} \cos^ {2} t + b ^ {2} \sin^ {2} t \\ & = a ^ {2} - (a ^ {2} - b ^ {2}) \sin^ {2} t \\ & = a ^ {2} [ 1 - e ^ {2} \sin^ {2} t ]. \end{array} \quad e = \sqrt {1 - \frac {b ^ {2}}{a ^ {2}}} \tag {eccentricity,notthenumber2.71828...}
$$

From Equation (3), the perimeter is given by 

$$
P = 4 a \int_ {0} ^ {\pi / 2} \sqrt {1 - e ^ {2} \sin^ {2} t} d t.
$$

The integral for P is nonelementary and is known as the complete elliptic integral of the second kind. We can compute its value to within any degree of accuracy using infinite series in the following way. From the binomial expansion for $\sqrt { 1 - x ^ { 2 } }$ in Section 9.10, we have 

$$
\sqrt {1 - e ^ {2} \sin^ {2} t} = 1 - \frac {1}{2} e ^ {2} \sin^ {2} t - \frac {1}{2 \cdot 4} e ^ {4} \sin^ {4} t - \dots . \quad | e \sin t | \leq e <   1
$$

Then, to each term in this last expression, we apply the integral Formula 157 (at the back of the text) for $\int _ { 0 } ^ { \pi / 2 }$ sin t dt<sup>n</sup>  when n is even, which yields the perimeter 

$$
\begin{array}{l} P = 4 a \int_ {0} ^ {\pi / 2} \sqrt {1 - e ^ {2} \sin^ {2} t} d t \\ = 4 a \Big [ \frac {\pi}{2} - \Big (\frac {1}{2} e ^ {2} \Big) \Big (\frac {1}{2} \cdot \frac {\pi}{2} \Big) - \Big (\frac {1}{2 \cdot 4} e ^ {4} \Big) \Big (\frac {1 \cdot 3}{2 \cdot 4} \cdot \frac {\pi}{2} \Big) - \Big (\frac {1 \cdot 3}{2 \cdot 4 \cdot 6} e ^ {6} \Big) \Big (\frac {1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6} \cdot \frac {\pi}{2} \Big) - \dots \Big ] \\ = 2 \pi a \Big [ 1 - \Big (\frac {1}{2} \Big) ^ {2} e ^ {2} - \Big (\frac {1 \cdot 3}{2 \cdot 4} \Big) ^ {2} \frac {e ^ {4}}{3} - \Big (\frac {1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6} \Big) ^ {2} \frac {e ^ {6}}{5} - \dots \Big ]. \end{array}
$$

Since $e < 1$ , the series on the right-hand side converges by comparison with the geometric series $\sum _ { n = 1 } ^ { \infty } ( e ^ { 2 } ) ^ { n }$ . We do not have an explicit value for P, but we can estimate it as closely as we like by summing finitely many terms from the infinite series. ■ 

### Length of a Curve $y = f ( x )$

We will show that the length formula in Section 6.3 is a special case of Equation (3). Given a continuously differentiable function $y = f ( x ) , a \leq x \leq b $ , we can assign $x \ = \ t$ as a parameter. The graph of the function $f$ is then the curve C defined parametrically by 

$$
x = t \quad \text { and } \quad y = f (t), \quad a \leq t \leq b,
$$

which is a special case of what we have considered in this chapter. We have 

$$
{\frac {d x}{d t}} = 1 \qquad {\mathrm{and}} \qquad {\frac {d y}{d t}} = f ^ {\prime} (t).
$$

From Equation (1), 

$$
\frac {d y}{d x} = \frac {d y / d t}{d x / d t} = f ^ {\prime} (t),
$$

giving 

$$
\begin{array}{r l} \left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} & = 1 + [ f ^ {\prime} (t) ] ^ {2} \\ & = 1 + [ f ^ {\prime} (x) ] ^ {2}. \quad t = x \end{array}
$$

Substitution into Equation (3) gives exactly the arc length formula for the graph of $y = f ( x )$ that we found in Section 6.3. 

### The Arc Length Differential

As in Section 6.3, we define the arc length function for a parametrically defined curve $x = f ( t ) \operatorname { a n d } y = g ( t ) , a \leq t \leq b ,$ by 

$$
s (t) = \int_ {a} ^ {t} \sqrt {\left[ f ^ {\prime} (z) \right] ^ {2} + \left[ g ^ {\prime} (z) \right] ^ {2}} d z.
$$

Then, by the Fundamental Theorem of Calculus, 

$$
\frac {d s}{d t} = \sqrt {\left[ f ^ {\prime} (t) \right] ^ {2} + \left[ g ^ {\prime} (t) \right] ^ {2}} = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}}.
$$

The differential of arc length is 

$$
d s = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t.\tag{4}
$$

Equation (4) is often abbreviated as 

$$
d s = \sqrt {d x ^ {2} + d y ^ {2}}.
$$

Just as in Section 6.3, we can integrate the differential ds between appropriate limits to find the total length of a curve. 

Here’s an example where we use the arc length differential to find the centroid of an arc. 

**EXAMPLE 7** Find the centroid of the first-quadrant arc of the astroid in Example 5.

**Solution** We take the curve’s density to be $\delta = 1$ and calculate the curve’s mass and moments about the coordinate axes as we did in Section 6.6. 

The distribution of mass is symmetric about the line $y = x , \operatorname { s o } { \overline { { x } } } = { \overline { { y } } } . \operatorname { A }$ typical segment of the curve (Figure 10.18) has mass 

$$
d m = 1 \cdot d s = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t = 3 \cos t \sin t d t. \quad \text {   From   Example   5   }
$$

![教材插图](/books/thomas-calculus/assets/a4e56584c65993f50e4515e814fdac1324a8970b1236a872ff52388c851b2fcc.jpg)



FIGURE 10.18 The centroid C of the astroid arc in Example 7.


The curve’s mass is 

$$
M = \int_ {0} ^ {\pi / 2} d m = \int_ {0} ^ {\pi / 2} 3 \cos t \sin t d t = \frac {3}{2}. \quad \text { Again   from   Example } 5
$$

The curve’s moment about the x-axis is 

$$
\begin{array}{l} M _ {x} = \int \tilde {y} d m = \int_ {0} ^ {\pi / 2} \sin^ {3} t \cdot 3 \cos t \sin t d t \\ = 3 \int_ {0} ^ {\pi / 2} \sin^ {4} t \cos t d t = 3 \cdot \frac {\sin^ {5} t}{5} \Big | _ {0} ^ {\pi / 2} = \frac {3}{5}. \end{array}
$$

It follows that 

$$
\overline {{{y}}} = \frac {M _ {x}}{M} = \frac {3 / 5}{3 / 2} = \frac {2}{5}.
$$

The centroid is the point ( ) 2 5, 2 5 . 

**EXAMPLE 8** Find the time $T _ { c }$ it takes for a frictionless bead to slide along the cycloid $x = a ( t - \sin t ) , y = a ( 1 - \cos t )$ from $t = 0 \mathrm { ~ t o ~ } t = \pi$ (see Figure 10.13). 

**Solution** From Equation (3) in Section 10.1, we want to find the time 

$$
T _ {c} = \int_ {t = 0} ^ {t = \pi} \frac {d s}{\sqrt {2 g y}}.
$$

We need to express $d s$ parametrically in terms of the parameter t. For the cycloid, $d x / d t = a ( 1 - \cos t )$ and $d y / d t = a$ t sin , so 

$$
\begin{array}{l} d s = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t \\ = \sqrt {a ^ {2} (1 - 2 \cos t + \cos^ {2} t + \sin^ {2} t)} d t \\ = \sqrt {a ^ {2} (2 - 2 \cos t)} d t. \end{array}
$$

Substituting for ds and y in the integrand, it follows that 

$$
\begin{array}{l} T _ {c} = \int_ {0} ^ {\pi} \sqrt {\frac {a ^ {2} (2 - 2 \cos t)}{2 g a (1 - \cos t)}} d t \qquad y = a (1 - \cos t) \\ = \int_ {0} ^ {\pi} \sqrt {\frac {a}{g}} d t = \pi \sqrt {\frac {a}{g}}. \end{array}
$$

This is the amount of time it takes the frictionless bead to slide down the cycloid to B after it is released from rest at O (see Figure 10.13). 

### Areas of Surfaces of Revolution

In Section 6.4 we found integral formulas for the area of a surface when a curve is revolved about a coordinate axis. Specifically, we found that the surface area is $S = \textstyle \int 2 \pi y d s$ for revolution about the x-axis, and $S = \textstyle \int 2 \pi x$ ds for revolution about the y-axis. If the curve is parametrized by the equations $x = f ( t )$ and $y = g ( t ) , a \leq t \leq b .$ , where f and g are continuously differentiable and $( f ^ { \prime } ) ^ { 2 } + ( g ^ { \prime } ) ^ { 2 } > 0$ on $[ a , b ]$ , then the arc length differential ds is given by Equation (4). This observation leads to the following formulas for area of surfaces of revolution for smooth parametrized curves. 

### Area of Surface of Revolution for Parametrized Curves


FIGURE 10.19 In Example 9 we calculate the area of the surface of revolution swept out by this parametrized curve.


![教材插图](/books/thomas-calculus/assets/ab5cf05a3e69def51174dc490c81b940284b875675756773822719112090d8eb.jpg)


If a smooth curve $x = f ( t ) , y = g ( t ) , a \leq t \leq b ,$ is traversed exactly once as t increases from a to $^ { b , }$ then the areas of the surfaces generated by revolving the curve about the coordinate axes are as follows. 

1. Revolution about the x-axis $( \mathbf { y } \geq \mathbf { 0 } )$ : 

$$
S = \int_ {a} ^ {b} 2 \pi y \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t\tag{5}
$$

2. Revolution about the y-axis $( { \pmb x } \geq { \pmb 0 } )$ : 

$$
S = \int_ {a} ^ {b} 2 \pi x \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t\tag{6}
$$

As with length, we can calculate surface area from any convenient parametrization that meets the stated criteria. 

**EXAMPLE 9** The standard parametrization of the circle of radius 1 centered at the point 0, 1( ) in the xy-plane is 

$$
x = \cos t, \quad y = 1 + \sin t, \quad 0 \leq t \leq 2 \pi .
$$

Use this parametrization to find the area of the surface swept out by revolving the circle about the x-axis (Figure 10.19). 

**Solution** We evaluate the formula 

$$
\begin{array}{l} S = \int_ {a} ^ {b} 2 \pi y \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t \\ = \int_ {0} ^ {2 \pi} 2 \pi (1 + \sin t) \sqrt {\underbrace {(- \sin t) ^ {2} + (\cos t) ^ {2}} _ {1}} d t \\ = 2 \pi \int_ {0} ^ {2 \pi} (1 + \sin t) d t \\ = 2 \pi \left[ t - \cos t \right] _ {0} ^ {2 \pi} = 4 \pi^ {2}. \end{array} \tag {Eq.(5)forrevolutionaboutthe}
$$

### EXERCISES 10.2

#### Tangent Lines to Parametrized Curves

In Exercises 1–14, find an equation for the line tangent to the curve at the point defined by the given value of t. Also, find the value of $d ^ { 2 } y / d x ^ { 2 }$ at this point. 

1. $x = 2 \cos t, y = 2 \sin t, t = \pi / 4$

2. $x = \sin 2 \pi t, y = \cos 2 \pi t, t = - 1 / 6$

3. $x = 4 \sin t, y = 2 \cos t, t = \pi / 4$

4. $x = \cos t, y = \sqrt {3} \cos t, t = 2 \pi / 3$

5. $x = t, \quad y = \sqrt {t}, \quad t = 1 / 4$

6. $x = \sec^ {2} t - 1, y = \tan t, t = - \pi / 4$

7. $x = \sec t, y = \tan t, t = \pi / 6$

8. $x = - \sqrt {t + 1}, y = \sqrt {3 t}, t = 3$

9. $x = 2 t ^ {2} + 3, y = t ^ {4}, t = - 1$

10. $x = 1 / t, \quad y = - 2 + \ln t, \quad t = 1$

11. $x = t - \sin t, \quad y = 1 - \cos t, \quad t = \pi / 3$

12. $x = \cos t , y = 1 + \sin t , t = \pi / 2$ 

13. $x = \frac { 1 } { t + 1 } , y = \frac { t } { t - 1 } , t = 2$ 

14. $x = t + e ^ { t } , y = 1 - e ^ { t } , t = 0$ 

#### Implicitly Defined Parametrizations

Assuming that the equations in Exercises 15–20 define x and y implicitly as differentiable functions $x = f ( t ) , y = g ( t )$ , find the slope of the curve $x = f ( t ) , y = g ( t )$ at the given value of t. 

15. x 2 9, 2 3 4, 2 t y t t 3 2 3 2 + = − = = 

16. $x = { \sqrt { 5 - { \sqrt { t } } } } , y ( t - 1 ) = { \sqrt { t } } , t = 4$ 

17. $x + 2 x ^ { 3 / 2 } = t ^ { 2 } + t , ~ y { \sqrt { t + 1 } } + 2 t { \sqrt { y } } = 4 , ~ t = 0$ 

18. x sin 2 , sin 2 , t x t t t t y t + = − = = π 

19. $x = t ^ { 3 } + t , y + 2 t ^ { 3 } = 2 x + t ^ { 2 } , t = 1$ 

20. t x t y te t ln , , 0 t = − = = ( ) 

Area 

21. Find the area under one arch of the cycloid 

$$
x = a (t - \sin t), \quad y = a (1 - \cos t).
22. $Find the area enclosed by the y-axis and the curve$
x = t - t ^ {2}, \quad y = 1 + e ^ {- t}.
23. $Find the area enclosed by the ellipse$
x = a \cos t, y = b \sin t, 0 \leq t \leq 2 \pi .
24. $Find the area under $y = x ^ { 3 }$ over 0, 1 [ ] using the following parametrizations.$
\mathbf {a}. x = t ^ {2}, y = t ^ {6}
$$

$$
\mathbf {b}. x = t ^ {3}, y = t ^ {9}
$$

#### Lengths of Curves

Find the lengths of the curves in Exercises 25–30. 

25. $x = \cos t , \quad y = t + \sin t , 0 \leq t \leq \pi$ 

26. $x = t ^ { 3 } , y = 3 t ^ { 2 } / 2 , 0 \leq t \leq \sqrt { 3 }$ 

27. $x = t ^ { 2 } / 2 , y = ( 2 t + 1 ) ^ { 3 / 2 } / 3 , 0 \leq t \leq 4$ 

28. $x = (2 t + 3) ^ {3 / 2} / 3, y = t + t ^ {2} / 2, 0 \leq t \leq 3$

29. x t t t8 cos 8 sin= +

30. x t t tln sec tan sin= + −( )

$$
y = 8 \sin t - 8 t \cos t, \quad y = \cos t, 0 \leq t \leq \pi / 3
$$

$$
0 \leq t \leq \pi / 2
$$

Surface Area 

Find the areas of the surfaces generated by revolving the curves in Exercises 31–34 about the indicated axes. 

31. $x = \cos t , \quad y = 2 + \sin t , \ : \ : 0 \leq t \leq 2$ 2 ; -axisxπ 

32. $x = ( 2 / 3 ) t ^ { 3 / 2 } , y = 2 \sqrt { t } , 0 \leq t \leq \sqrt { 3 } ;$ -axis  y 

33. $x = t + \sqrt {2}, y = (t ^ {2} / 2) + \sqrt {2} t, - \sqrt {2} \leq t \leq \sqrt {2};$

34. x = + − = ≤ ≤ln sec tan sin ,   cos ,  0 3;   -axis( )t t t y t t xπ 

35. A cone frustum The line segment joining the points 0, 1( ) and ( ) 2, 2 is revolved about the x-axis to generate a frustum of a cone. Find the surface area of the frustum using the parametrization $x = 2 t , y = t + 1 , 0 \leq t \leq 1$ . Check your result with the geometry formula: Area $= \pi ( r _ { 1 } + r _ { 2 }$ slant )( )  height . 

36. A cone The line segment joining the origin to the point $( h , r )$ is revolved about the x-axis to generate a cone of height h and base radius r. Find the cone’s surface area with the parametric equations $x = h t , y = r t , 0 \leq t \leq 1$ . Check your result with the geometry formula: Area slant= πr( ) height . 

#### Centroids

37. Find the coordinates of the centroid of the curve 

$$
x = \cos t + t \sin t, \quad y = \sin t - t \cos t, \quad 0 \leq t \leq \pi / 2.
38. $Find the coordinates of the centroid of the curve$
x = e ^ {t} \cos t, \quad y = e ^ {t} \sin t, \quad 0 \leq t \leq \pi .
39. $Find the coordinates of the centroid of the curve$
x = \cos t, y = t + \sin t, 0 \leq t \leq \pi .
$$

T 40. Most centroid calculations for curves are done with a calculator or computer that has an integral evaluation program. As a case in point, find, to the nearest hundredth, the coordinates of the centroid of the curve 

$$
x = t ^ {3}, \quad y = 3 t ^ {2} / 2, \quad 0 \leq t \leq \sqrt {3}.
$$

#### Theory and Examples

41. Length is independent of parametrization To illustrate the fact that the numbers we get for length do not depend on the way we parametrize our curves (except for the mild restrictions preventing doubling back mentioned earlier), calculate the length of the semicircle $y = { \sqrt { 1 - x ^ { 2 } } }$ with these two different parametrizations: 

a. $x = \cos 2 t , ~ y = \sin 2 t , ~ 0 \leq t \leq \pi / 2 .$ 

b. x = = − ≤ ≤ sin , cos , 1 2 1 2. π π t y t t 

42. a. Show that the Cartesian formula 

$$
L = \int_ {c} ^ {d} \sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} d y
$$

for the length of the curve $x = g ( y ) , c \leq y \leq d$ (Section 6.3, Equation 4), is a special case of the parametric length formula 

$$
L = \int_ {a} ^ {b} \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2}} d t.
$$

Use this result to find the length of each curve. 

$$
\mathbf {b}. x = y ^ {3 / 2}, 0 \leq y \leq 4 / 3
$$

$$
\mathbf {c}. x = \frac {3}{2} y ^ {2 / 3}, 0 \leq y \leq 1
43. $The curve with parametric equations$
x = (1 + 2 \sin \theta) \cos \theta , y = (1 + 2 \sin \theta) \sin \theta
$$

is called a limaçon and is shown in the accompanying figure. Find the points $( x , y )$ and the slopes of the tangent lines at these points for 

$$
\mathbf {a}. \theta = 0. \quad \mathbf {b}. \theta = \pi / 2. \quad \mathbf {c}. \theta = 4 \pi / 3.
$$

![教材插图](/books/thomas-calculus/assets/338199a21789e1de6e98a42675314f35bfc6f613a46dfff1207d2f6984d843f9.jpg)


44. The curve with parametric equations 

$$
x = t, \quad y = 1 - \cos t, \quad 0 \leq t \leq 2 \pi
$$

is called a sinusoid and is shown in the accompanying figure. Find the point $( x , y )$ where the slope of the tangent line is 

a. largest. 

b. smallest. 

![教材插图](/books/thomas-calculus/assets/d18d60438511327b4a8ae2b6e95aa2a3f9eeb89c0bba2c7ce9865b0a98a99e2d.jpg)


T The curves in Exercises $^ { 4 5 }$ and 46 are called Bowditch curves or Lissajous figures. In each case, find the point in the interior of the first quadrant where the tangent line to the curve is horizontal, and find the equations of the two tangent lines at the origin. 


45.


![教材插图](/books/thomas-calculus/assets/f5227df2755627ed4ffc2a2340aca0cd740434b8d6cf604da949dde2536d888c.jpg)


46. 

![教材插图](/books/thomas-calculus/assets/669c8f95de48a3b723fdc2780116ea7573d23084b08843e4971afcf3e72b8eb0.jpg)


47. Cycloid 

a. Find the length of one arch of the cycloid 

$$
x = a (t - \sin t), \quad y = a (1 - \cos t).
$$

b. Find the area of the surface generated by revolving one arch of the cycloid in part (a) about the x-axis for $a = 1$ 

48. Volume Find the volume swept out by revolving the region bounded by the x-axis and one arch of the cycloid 

$$
x = t - \sin t, y = 1 - \cos t
$$

about the x-axis. 

49. Find the volume swept out by revolving the region bounded by the x-axis and the graph of 

$$
x = 2 t, \quad y = t (2 - t)
$$

about the x-axis. 

50. Find the volume swept out by revolving the region bounded by the y-axis and the graph of 

$$
x = t (1 - t), \quad y = 1 + t ^ {2}
$$

about the y-axis. 

#### COMPUTER EXPLORATIONS

In Exercises 51–54, use a CAS to perform the following steps for the given curve over the closed interval. 

a. Plot the curve together with the polygonal path approxima tions for $n = 2 , 4 ,$ 8 partition points over the interval. (See Figure 10.16.) 

b. Find the corresponding approximation to the length of the curve by summing the lengths of the line segments. 

c. Evaluate the length of the curve using an integral. Compare your approximations for $n = 2 , 4 ,$ 8 with the actual length given by the integral. How does the actual length compare with the approximations as n increases? Explain your answer. 

51. $x = \frac { 1 } { 3 } t ^ { 3 } , y = \frac { 1 } { 2 } t ^ { 2 } , 0 \leq t \leq 1$ 

52. $x = 2 t ^ { 3 } - 1 6 t ^ { 2 } + 2 5 t + 5 , y = t ^ { 2 } + t - 3 , 0 \leq t \leq 6$ 

53. x = − = + − ≤ ≤t t y t tcos , 1 sin , Q Q 

54. x e t y e t t cos , sin , 0 t t = = ≤ ≤ Q 

## 10.3 Polar Coordinates

In this section we study polar coordinates and their relation to Cartesian coordinates. You will see that polar coordinates are very useful for calculating many multiple integrals studied in Chapter 14. They are also useful in describing the paths of planets and satellites. 

![教材插图](/books/thomas-calculus/assets/0b27d3b1124dea21a64ff43ec428d0af9adf03ca7bfe745c74346b0fdbda2d55.jpg)


### Definition of Polar Coordinates


FIGURE 10.20 To define polar coordinates for the plane, we start with an origin, called the pole, and an initial ray.


To define polar coordinates, we first fix an origin O (called the pole) and an initial ray from O (Figure 10.20). Usually the positive x-axis is chosen as the initial ray. Then each point P can be located by assigning to it a polar coordinate pair $( r , \theta )$ in which r gives the directed distance from O to $P ,$ and R gives the directed angle from the initial ray to ray OP. So we label the point P as 

$$
\begin{array}{c} P (r, \theta) \\ / \backslash \\ \text {Directed   distance } \\ \text {from O to P} \end{array} \quad \begin{array}{c} \text {Directed   angle   from } \\ \text {initial ray   to OP} \end{array}
$$

![教材插图](/books/thomas-calculus/assets/1b3e2c55b5dc18f43e774ad7d1b7a42307286631c1af8d2aedf51263d90b0d95.jpg)



FIGURE 10.21 Polar coordinates are not unique.


![教材插图](/books/thomas-calculus/assets/488f664211d71c53bd08438344013f2bdbbf4d80e7b3a5b318ac714d4f906de7.jpg)



FIGURE 10.22 Polar coordinates can have negative r-values.


![教材插图](/books/thomas-calculus/assets/c68991304076b296ec35803f3d7eede5e39515971e3f05d83bdaf8506fbcfb1b.jpg)



FIGURE 10.23 The point $P ( 2 , \pi / 6 )$ has infinitely many polar coordinate pairs (Example 1).


![教材插图](/books/thomas-calculus/assets/f4f5519ab1c7c825bd5953bbd132f1e2756a80cb7594d7f458b56f5680d1a1cf.jpg)



FIGURE 10.24 The polar equation for a circle is r a= .


As in trigonometry, θ is positive when measured counterclockwise and negative when measured clockwise. The angle associated with a given point is not unique. A point in the plane has just one pair of Cartesian coordinates, but it has infinitely many pairs of polar coordinates. For instance, the point 2 units from the origin along the ray $\theta = \pi / 6$ has polar coordinates $r = 2 , \theta = \pi / 6$ . It also has coordinates $r = 2 , \theta = - 1 1 \pi / 6$ (Figure 10.21). In some situations we allow r to be negative. That is why we use directed distance in defining $P ( r , \theta )$ . The point $P ( 2 , 7 \pi / 6 )$ ) can be reached by turning $7 \pi / 6$ radians counterclockwise from the initial ray and going forward 2 units (Figure 10.22). It can also be reached by turning $\pi / 6$ radians counterclockwise from the initial ray and going backward 2 units. So the point also has polar coordinates $r = - 2 , \theta = \pi / 6$ 

**EXAMPLE 1** Find all the polar coordinates of the point $P ( 2 , \pi / 6 )$

**Solution** We sketch the initial ray of the coordinate system, draw the ray from the origin that makes an angle of $\dot { } \pi / 6$ radians with the initial ray, and mark the point $( 2 , \pi / 6 )$ (Figure 10.23). We then find the angles for the other coordinate pairs of P in which $r = 2 { \mathrm { ~ a n d } } r = - 2$ 

For $r = 2 ,$ , the complete list of angles is 

$$
\frac {\pi}{6}, \frac {\pi}{6} \pm 2 \pi , \frac {\pi}{6} \pm 4 \pi , \frac {\pi}{6} \pm 6 \pi , \dots .
$$

For $r = - 2$ , the angles are 

$$
- \frac {5 \pi}{6}, - \frac {5 \pi}{6} \pm 2 \pi , - \frac {5 \pi}{6} \pm 4 \pi , - \frac {5 \pi}{6} \pm 6 \pi , \dots .
$$

The corresponding coordinate pairs of P are 

$$
\Big (2, \frac {\pi}{6} + 2 n \pi \Big), \quad n = 0, \pm 1, \pm 2, \dots
$$

and 

$$
\Bigl (- 2, - \frac {5 \pi}{6} + 2 n \pi \Bigr), \quad n = 0, \pm 1, \pm 2, \dots .
$$

When $n = 0 ,$ the formulas give $( 2 , \pi / 6 )$ and $( - 2 , - 5 \pi / 6 )$ . When $n = 1 ,$ , they $\mathrm { g i v e }$ $( 2 , 1 3 \pi / 6 )$ and $( - 2 , 7 \pi / 6 )$ ,  and so on. 一

### Polar Equations and Graphs

If we hold r fixed at a constant value $r = a \ne 0$ , the point $P ( r , \theta )$ will lie $| a |$ units from the origin O. As θ varies over any interval of length 2 , π P then traces a circle of radius a centered at O (Figure 10.24). 

If we hold θ fixed at a constant value $\theta = \theta _ { 0 }$ and let r vary between −∞ and $\infty ,$ the point $P ( r , \theta )$ traces the line through O that makes an angle of measure $\theta _ { 0 }$ with the initial ray. (See Figure 10.22 for an example.) 

**EXAMPLE 2** A circle or line can have more than one polar equation. 

(a) r = 1 and $r = - 1$ are equations for the circle of radius 1 centered at $O .$ 

(b) $\theta = \pi / 6 , \theta = 7 \pi / 6$ , and $\theta = - 5 \pi / 6$ are equations for the line in Figure 10.23. 

Equations of the form $r \ = \ a$ and $\theta = \theta _ { 0 }$ ,  and inequalities such as $r \leq a$ and $0 \leq \theta \leq \pi$ ,  can be combined to define regions, segments, and rays. 

(a) 

![教材插图](/books/thomas-calculus/assets/65eda25b5c7e9af2cbd23b4b2751d43d413f589c0bd4fee6385d51301f7bc1f6.jpg)


![教材插图](/books/thomas-calculus/assets/332940dd7964ccd033e31713a87dd02931add826fdaee1712198e0d9bbd75c24.jpg)


(a) 

(b) 

![教材插图](/books/thomas-calculus/assets/b50324e70e07a15ee43c4779a8d47a0d616c50eb51a4ac434094ee31c491a0c3.jpg)


(c) 


FIGURE 10.25 The graphs of typical inequalities in r and θ (Example 3).


![教材插图](/books/thomas-calculus/assets/fa9148d55c5ad304f28bbcd4e2038592a675c3e768c3939de46223924a4b70a8.jpg)



FIGURE 10.26 The usual way to relate polar and Cartesian coordinates.


![教材插图](/books/thomas-calculus/assets/e8d6a9af6880a68013054ba2f8b0a9eefc3bfa898f39cac56fb10ce808fed4bb.jpg)



FIGURE 10.27 The circle in Example 5.


**EXAMPLE 3** Graph the sets of points whose polar coordinates satisfy the following conditions. 

$$
) 1 \leq r \leq 2 \quad \text { and } \quad 0 \leq \theta \leq \frac {\pi}{2}\tag{c}
$$

$$
(\mathbf {b}) - 3 \leq r \leq 2 \quad \text { and } \quad \theta = \frac {\pi}{4}
$$

$$
\frac {2 \pi}{3} \leq \theta \leq \frac {5 \pi}{6}
$$

r (no restriction on  ) 

**Solution** The graphs are shown in Figure 10.25. 

### Relating Polar and Cartesian Coordinates

When we use both polar and Cartesian coordinates in a plane, we place the two origins together and let the initial polar ray be the positive x-axis. The ray $\theta = \pi / 2 , r > 0 .$ becomes the positive y-axis (Figure 10.26). The two coordinate systems are then related by the following equations. 

Equations Relating Polar and Cartesian Coordinates 

Polar to Cartesian: 

$$
x = r \cos \theta , \quad y = r \sin \theta
$$

Cartesian to Polar: 

$$
r ^ {2} = x ^ {2} + y ^ {2}, \quad \tan \theta = \frac {y}{x}
$$

The first two of these equations uniquely determine the Cartesian coordinates x and y given  the polar coordinates r and θ. On the other hand, if x and y are given and $( x , y ) \neq ( 0 , 0 )$ , the third equation gives two possible choices for r (a positive and a negative value). For each of these r values, there is a unique $\theta \in [ 0 , 2 \pi )$ satisfying the first two equations, each then giving a polar coordinate representation of the Cartesian point $( x , y )$ . The other polar coordinate representations for the point can be determined from these two, as in Example 1. 


**EXAMPLE 4** Here are some plane curves expressed in terms of both polar coordinate and Cartesian coordinate equations.


<table><tr><td>Polar equation</td><td>Cartesian equivalent</td></tr><tr><td><eq>r \cos \theta = 2</eq></td><td><eq>x = 2</eq></td></tr><tr><td><eq>r^{2} \cos \theta \sin \theta = 4</eq></td><td><eq>xy = 4</eq></td></tr><tr><td><eq>r^{2} \cos^{2} \theta - r^{2} \sin^{2} \theta = 1</eq></td><td><eq>x^{2} - y^{2} = 1</eq></td></tr><tr><td><eq>r = 1 + 2r \cos \theta</eq></td><td><eq>y^{2} - 3x^{2} - 4x - 1 = 0</eq></td></tr><tr><td><eq>r = 1 - \cos \theta</eq></td><td><eq>x^{4} + y^{4} + 2x^{2}y^{2} + 2x^{3} + 2xy^{2} - y^{2} = 0</eq></td></tr></table>

Some curves are more simply expressed with polar coordinates; others are not. 

**EXAMPLE 5** Find a polar equation for the circle $x ^ { 2 } + ( y - 3 ) ^ { 2 } = 9$ (Figure 10.27). 

**Solution** We apply the equations relating polar and Cartesian coordinates: 

$$
x ^ {2} + (y - 3) ^ {2} = 9
$$

$$
x ^ {2} + y ^ {2} - 6 y + 9 = 9
$$

Expand ( ) y − 3 .<sup>2</sup> 

$$
x ^ {2} + y ^ {2} - 6 y = 0
$$

Cancelation 

$$
r ^ {2} - 6 r \sin \theta = 0
$$

$$
x ^ {2} + y ^ {2} = r ^ {2}, y = r \sin \theta
$$

$$
r = 0 \quad \text { or } \quad r - 6 \sin \theta = 0
$$

$$
r = 6 \sin \theta \quad \text { Includes   both   possibilities }
$$

**EXAMPLE 6** Replace the following polar equations by equivalent Cartesian equations and identify their graphs. 

(a) $r \cos \theta = - 4$ 

(b) $r ^ { 2 } = 4 r \cos \theta$ 

(c) $r = { \frac { 4 } { 2 \cos \theta - \sin \theta } }$ 

**Solution** We use the substitutions r cos $\theta = x ,$ r  sin $\theta = y ,$ , and $r ^ { 2 } = x ^ { 2 } + y ^ { 2 }$ 

(a) r cos $\theta = - 4$ 

rThe Cartesian equation: cos 4θ = − 

$$
x = - 4
$$

Substitute. 

The graph: Vertical line through x = −4 on the x-axis 

(b) $r ^ { 2 } = 4 r \cos \theta$ 

The Cartesian equation: 

$$
r ^ {2} = 4 r \cos \theta
$$

$$
x ^ {2} + y ^ {2} = 4 x
$$

Substitute. 

$$
x ^ {2} - 4 x + y ^ {2} = 0
$$

$$
x ^ {2} - 4 x + 4 + y ^ {2} = 4
$$

Complete the square. 

$$
(x - 2) ^ {2} + y ^ {2} = 4
$$

Factor. 

The graph: Circle, radius $^ { 2 , }$ center ( ) h k ,  2, 0 = ( ) 

(c) $r = { \frac { 4 } { 2 \cos \theta - \sin \theta } }$ 

The Cartesian equation: 

$$
r (2 \cos \theta - \sin \theta) = 4
$$

$$
2 r \cos \theta - r \sin \theta = 4
$$

Multiply by r. 

$$
2 x - y = 4
$$

Substitute. 

$$
y = 2 x - 4
$$

Solve for y. 

The graph: Line, slope m = 2, y-intercept b = −4 

### EXERCISES 10.3

Polar Coordinates 

1. Which polar coordinate pairs label the same point? 

a. $( - 2 , \pi / 3 )$ 

b. $( 2 , - \pi / 3 )$ 

c. ( ) r, θ 

c. $( 2 , 2 \pi / 3 )$ 

a. $( 3 , 0 )$ 

b. $( - 3 , 0 )$ 

d. $( r , \theta + \pi )$ 

e. $( - r , \theta )$ 

f. $( 2 , - 2 \pi / 3 )$ 

d. $( 2 , 7 \pi / 3 )$ 

e. $( - 3 , \pi )$ 

f. $( 2 , \pi / 3 )$ 

g. $( - r , \theta + \pi )$ h. $\left( - 2 , 2 \pi / 3 \right)$ 

g. $( - 3 , 2 \pi )$ h. $\left( - 2 , - \pi / 3 \right)$ 

2. Which polar coordinate pairs label the same point? 

3. Plot the following points, given in polar coordinates. Then find all the polar coordinates of each point. a. $( 2 , \pi / 2 )$ b. ( ) 2, 0 c. $( - 2 , \pi / 2 )$ d. ( ) −2, 0 

4. Plot the following points, given in polar coordinates. Then find all the polar coordinates of each point. a. ( ) 3,  4 π b. ( ) −3,  4 π c. $( 3 , - \pi / 4 )$ d. $\left( - 3 , - \pi / 4 \right)$ 

#### Polar to Cartesian Coordinates

5. Find the Cartesian coordinates of the points in Exercise 1. 

6. Find the Cartesian coordinates of the following points, given in polar coordinates. a. $( { \sqrt { 2 } } , \pi / 4 )$ b. ( ) 1, 0 c. $( 0 , \pi / 2 )$ d. $\left( - { \sqrt { 2 } } , \pi / 4 \right)$ e. $( - 3 , 5 \pi / 6 )$ f. $\left( 5 , \tan ^ { - 1 } \left( 4 / 3 \right) \right)$ g. $( - 1 , 7 \pi )$ h. $\left( 2 { \sqrt { 3 } } , 2 \pi / 3 \right)$ 

#### Cartesian to Polar Coordinates

7. Find the polar coordinates, $0 \leq \theta < 2 \pi$ and $r \geq 0 ,$ of the following points given in Cartesian coordinates. a. ( ) 1, 1 b. ( ) −3, 0 c. $\left( { \sqrt { 3 } } , - 1 \right)$ d. ( ) −3, 4 

8. Find the polar coordinates, $- \pi \leq \theta < \pi$ and $r \geq 0$ , of the following points given in Cartesian coordinates. a. ( ) − − 2,  2 b. ( ) 0, 3 c. $\left( - { \sqrt { 3 } } , 1 \right)$ d. ( ) 5,  12 − 

9. Find the polar coordinates, $0 \leq \theta < 2 \pi$ and $r \leq 0 ,$ , of the following points given in Cartesian coordinates. a. ( ) 3, 3 b. (−1, 0) c. $( - 1 , { \sqrt { 3 } } )$ d. ( ) 4,  3 − 

10. Find the polar coordinates, $- \pi \leq \theta < \pi$ and $r \leq 0$ , of the following points given in Cartesian coordinates. a. ( ) −2, 0 b. ( ) 1, 0 c. $( 0 , - 3 )$ d. $\left( { \frac { \sqrt { 3 } } { 2 } } , { \frac { 1 } { 2 } } \right)$ 

#### Graphing Sets of Polar Coordinate Points

Graph the sets of points whose polar coordinates satisfy the equations and inequalities in Exercises 11–26. 

11. $r = 2$

12. $0 \leq r \leq 2$

13. $r \geq 1$ 

14. $1 \leq r \leq 2$ 

15. $0 \leq \theta \leq \pi / 6 , r \geq 0$

16. $\theta = 2 \pi / 3 , ~ r \leq - 2$

17. $\theta = \pi / 3 , - 1 \le r \le 3$ 

18. $\theta = 1 1 \pi / 4, r \geq - 1$

## 10.4 Graphing Polar Coordinate Equations

19. $\theta = \pi / 2 , r \geq 0$ 

20. $\theta = \pi / 2 , r \leq 0$ 

21. $0 \leq \theta \leq \pi , r = 1$ 

22. $0 \leq \theta \leq \pi , r = - 1$ 

23. $\pi / 4 \le \theta \le 3 \pi / 4 , 0 \le r \le 1$ 

24. $- \pi / 4 \le \theta \le \pi / 4 , - 1 \le r \le 1$ 

25. $- \pi / 2 \leq \theta \leq \pi / 2 , 1 \leq r \leq 2$ 

26. $0 \leq \theta \leq \pi / 2 , 1 \leq | r | \leq 2$ 

### Polar to Cartesian Equations

### Replace the polar equations in Exercises 27–52 with equivalent Cartesian equations. Then describe or identify the graph.

27. $r \cos \theta = 2$ 

29. $r \sin \theta = 0$ 

$$
r \sin \theta = - 1
$$

31. $r = 4 \csc \theta$ 

30. $r \cos \theta = 0$ 

32. $r = - 3 \sec \theta$ 

33. $r \cos \theta + r \sin \theta = 1$ 

35. $r ^ { 2 } = 1$ 

34. $r \sin \theta = r \cos \theta$ 

36. $r ^ { 2 } = 4 r \sin \theta$ 

37. $r = { \frac { 5 } { \sin \theta - 2 \cos \theta } } $ 

38. $r ^ { 2 } \sin 2 \theta = 2$ 

39. $r = \cot \theta \csc \theta$ 

40. $r = 4 \tan \theta \sec \theta$ 

41. $r = \csc \theta e ^ { r \cos \theta }$ 

43. $r ^ { 2 } + 2 r ^ { 2 } \cos \theta \sin \theta = 1$ 

42. $r \sin \theta = \ln r + \ln \cos \theta$ 

45. $r ^ { 2 } = - 4 r \cos \theta$ 

44. $\cos ^ { 2 } \theta = \sin ^ { 2 } \theta$ 

47. $r = 8 \sin \theta$ 

46. $r ^ { 2 } = - 6 r \sin \theta$ 

49. $r = 2 \cos \theta + 2 \sin \theta$ 

48. $r = 3 \cos \theta$ 

51. $r \sin \Bigl ( \theta + { \frac { \pi } { 6 } } \Bigr ) = 2$ 

50. $r = 2 \cos \theta - \sin \theta$ 

52. $r \sin \left( { \frac { 2 \pi } { 3 } } - \theta \right) = 5$ 

### Cartesian to Polar Equations

Replace the Cartesian equations in Exercises 53–66 with equivalent polar equations. 

53. x = 7 

$$
y = 1
$$

56. $x - y = 3$ 

$$
x = y
$$

$$
x ^ {2} + y ^ {2} = 4
$$

$$
x ^ {2} - y ^ {2} = 1
$$

59. $\frac { x ^ { 2 } } { 9 } + \frac { y ^ { 2 } } { 4 } = 1$ 

60. $x y = 2$ 

61. $y ^ { 2 } = 4 x$ 

63. $x ^ { 2 } + ( y - 2 ) ^ { 2 } = 4 $ 

62. $x ^ { 2 } + x y + y ^ { 2 } = 1$ 

64. $( x - 5 ) ^ { 2 } + y ^ { 2 } = 2 5$ 

65. $( x - 3 ) ^ { 2 } + ( y + 1 ) ^ { 2 } = 4$ 

$$
(x + 2) ^ {2} + (y - 5) ^ {2} = 1 6 \tag {66.}
$$

67. Find all polar coordinates of the origin. 

### 68. Vertical and horizontal lines

a. Show that every vertical line in the xy-plane has a polar equation of the form r a= sec .θ 

b. Find the analogous polar equation for horizontal lines in the xy-plane. 

It is often helpful to graph an equation expressed in polar coordinates in the Cartesian xy-plane. This section describes some techniques for graphing these equations using symmetries and tangent lines to the graph. 

![教材插图](/books/thomas-calculus/assets/6e8542bcc305c3a20f245a7b62735a88ae9711be76f111e7a5a96b0bf2135473.jpg)



(a) About the x-axis


![教材插图](/books/thomas-calculus/assets/64b03a8ab7b37d9395f823c0dbf1cbac85737893583d12391d3983c35bd4fff1.jpg)



(b) About the y-axis


![教材插图](/books/thomas-calculus/assets/9f1bf28df2ad2a873b853ce3e35e18bca47990333bb5c28a144a342baaf59878.jpg)



(c) About the origin



FIGURE 10.28 Three tests for symmetry in polar coordinates.


### Symmetry

The following list shows how to test for three standard types of symmetries when using polar coordinates. These symmetries are illustrated in Figure 10.28. 

### Symmetry Tests for Polar Graphs in the Cartesian xy-Plane

1. Symmetry about the x-axis: If the point $( r , \theta )$ lies on the graph, then the point $( r , - \theta ) \mathrm { o r } ( - r , \pi - \theta )$ lies on the graph (Figure 10.28a). 

2. Symmetry about the y-axis: If the point $( r , \theta )$ lies on the graph, then the point $( r , \pi - \theta ) \mathrm { o r } ( - r , - \theta )$ lies on the graph (Figure 10.28b). 

3. Symmetry about the origin: If the point $( r , \theta )$ lies on the graph, then the point $( - r , \theta ) \mathrm { o r } ( r , \theta + \pi )$ lies on the graph (Figure 10.28c). 

### Slope

The slope of a polar curve $r = f ( \theta )$ in the xy-plane is $d y / d x .$ , but this is not given by the formula $r ^ { \prime } = d f / d \theta .$ . To see why, think of the graph of $f$ as the graph of the parametric equations 

$$
x = r \cos \theta = f (\theta) \cos \theta , \quad y = r \sin \theta = f (\theta) \sin \theta .
$$

If $f$ is a differentiable function of θ, then so are x and $y ,$ and when $d x / d \theta \neq 0 .$ , we can calculate dy dx from the parametric formula 

$$
\begin{array}{l l} \frac {d y}{d x} = \frac {d y / d \theta}{d x / d \theta} & \text { Section   10.2,Eq.(1)with } t = \theta \\ = \frac {\frac {d}{d \theta} (f (\theta) \sin \theta)}{\frac {d}{d \theta} (f (\theta) \cos \theta)} & \text { Substitute } \\ = \frac {\frac {d f}{d \theta} \sin \theta + f (\theta) \cos \theta}{\frac {d f}{d \theta} \cos \theta - f (\theta) \sin \theta} & \text { Product   Rule   for   derivatives } \end{array}
$$

Therefore, we see that $d y / d x$ is not the same as $d f / d \theta .$ 

Slope of the Curve $r = f ( \theta )$ in the Cartesian xy-Plane 

$$
\left. \frac {d y}{d x} \right| _ {(r, \theta)} = \frac {f ^ {\prime} (\theta) \sin \theta + f (\theta) \cos \theta}{f ^ {\prime} (\theta) \cos \theta - f (\theta) \sin \theta},\tag{1}
$$

provided $d x / d \theta \neq 0$ at ( ) r,  . θ 

If the curve $r = f ( \theta )$ passes through the origin at $\theta = \theta _ { 0 } ,$ , then $f ( \theta _ { 0 } ) = 0$ , and the slope equation gives 

$$
\left. \frac {d y}{d x} \right| _ {(0, \theta_ {0})} = \frac {f ^ {\prime} (\theta_ {0}) \sin \theta_ {0}}{f ^ {\prime} (\theta_ {0}) \cos \theta_ {0}} = \tan \theta_ {0}.
$$

That is, the slope at $( 0 , \theta _ { 0 } )$ is tan $\theta _ { 0 } .$ .  The reason we say “slope at $( 0 , \theta _ { 0 } ) ^ { , }$ and not just “slope at the origin” is that a polar curve may pass through the origin (or any point) more than once, with different slopes at different θ-values. This is not the case in our first example, however. 

![教材插图](/books/thomas-calculus/assets/b40524e84ef19b3526f57dfb800fabf5f5d7ebdd0695331c18b7d1c7d7bc4e58.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/d764baf036f733547d4bf05dda6192af308b48da5cb09e1b3468cd1e33ad8f0e.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/cbd1d1fdc5fd571a4bd2496b7a2607f620ad71df077f44fd79d38ba60aa1c920.jpg)



FIGURE 10.29 The steps in graphing the cardioid $r = 1 - \cos \theta$ (Example 1). The arrow shows the direction of increasing $\theta .$


**EXAMPLE 1** Graph the curve $r = 1 - \cos \theta$ in the Cartesian xy-plane.

**Solution** The curve is symmetric about the x-axis because 

$$
\begin{array}{r l} (r, \theta) \text {   on   the   graph   } & \Rightarrow r = 1 - \cos \theta \\ & \Rightarrow r = 1 - \cos (- \theta) \quad \cos \theta = \cos (- \theta) \\ & \Rightarrow (r, - \theta) \text {   on   the   graph.   } \end{array}
$$

As θ increases from 0 to π, cos θ decreases from 1 to −1, and $r = 1 - \cos \theta$ increases from a minimum value of 0 to a maximum value of 2. As θ continues on from π to 2 , cosπ θ increases from 1− back to 1, and r decreases from 2 back to 0. The curve starts to repeat when $\theta = 2 \pi$ because the cosine has period 2 .π 

The curve leaves the origin with slope tan(0) 0 = and returns to the origin with slope $\tan ( 2 \pi ) = 0 .$ 

We make a table of values from $\theta = 0 \tan \theta = \pi$ , plot the points, draw a smooth curve through them with a horizontal tangent line at the origin, and reflect the curve across the x-axis to complete the graph (Figure 10.29). The curve is called a cardioid because of its heart shape. 

**EXAMPLE 2** Graph the curve $r ^ { 2 } = 4$ cos θ in the Cartesian xy-plane.

**Solution** The equation $r ^ { 2 } = 4$ cos θ requires cos $\theta \geq 0 ,$ , so we get the entire graph by running θ from $- \pi / 2$ to $\pi / 2$ . The curve is symmetric about the x-axis because 

$$
\begin{array}{r l} (r, \theta) \text {   on   the   graph   } & \Rightarrow r ^ {2} = 4 \cos \theta \\ & \Rightarrow r ^ {2} = 4 \cos (- \theta) \quad \cos \theta = \cos (- \theta) \\ & \Rightarrow (r, - \theta) \text {   on   the   graph. } \end{array}
$$

The curve is also symmetric about the origin because 

$$
\begin{array}{r l} (r, \theta) \text {   on   the   graph   } & \Rightarrow r ^ {2} = 4 \cos \theta \\ & \Rightarrow (- r) ^ {2} = 4 \cos \theta \\ & \Rightarrow (- r, \theta) \text {   on   the   graph.   } \end{array}
$$

Together, these two symmetries imply symmetry about the y-axis. 

The curve passes through the origin when $\theta = - \pi / 2$ and $\theta = \pi / 2$ . It has a vertical tangent line both times because tan θ is infinite. 

For each value of θ in the interval between $- \pi / 2$ and $\pi / 2 .$ , the formula $r ^ { 2 } = 4$ cos θ gives two values of $r { : }$ 

$$
r = \pm 2 \sqrt {\cos \theta}.
$$

We make a short table of values, plot the corresponding points, and use information about symmetry and tangent lines to guide us in connecting the points with a smooth curve (Figure 10.30). 

<table><tr><td>θ</td><td>cos θ</td><td>r = ±2√cos θ</td></tr><tr><td>0</td><td>1</td><td>±2</td></tr><tr><td>±π/6</td><td><eq>\frac{\sqrt{3}}{2}</eq></td><td>≈ ±1.9</td></tr><tr><td>±π/4</td><td><eq>\frac{1}{\sqrt{2}}</eq></td><td>≈ ±1.7</td></tr><tr><td>±π/3</td><td><eq>\frac{1}{2}</eq></td><td>≈ ±1.4</td></tr><tr><td>±π/2</td><td>0</td><td>0</td></tr></table>


(a)


![教材插图](/books/thomas-calculus/assets/4852e6f1eba5dde610e5815614c405cebce43c119d3cde8c84a48ba924646683.jpg)



(b)



FIGURE 10.30 The graph of $r ^ { 2 } = 4$ cos .θ The arrows show the direction of increasing θ. The values of r in the table are rounded (Example 2).


![教材插图](/books/thomas-calculus/assets/8ef5cd6117c1f6ca872da6bacf906d2af892c1bdb009c29a0a798e41d6690917.jpg)


![教材插图](/books/thomas-calculus/assets/203f0d254a61dca5f44c4b5a303f9b06fa800a5f0ca288edb6fc754cb95249a3.jpg)



(c)


![教材插图](/books/thomas-calculus/assets/568287e38763779011c879eaa3438127aa4eb36e9d2ebc159c06c2ccf0243703.jpg)


### Converting a Graph from the rT-Plane to the xy-Plane

One way to graph a polar equation $r = f ( \theta )$ in the xy-plane is to make a table of $( r , \theta )$ -values, plot the corresponding points there, and connect them in order of increasing θ. This can work well if enough points have been plotted to reveal all the loops and dimples in the graph. Another method of graphing follows. 

1. First graph the function $r = f ( \theta )$ in the Cartesian rθ-plane. 

2. Then use that Cartesian graph as a “table” and guide to sketch the polar coordinate graph in the xy-plane. 

This method is sometimes better than simple point plotting because the first Cartesian graph shows at a glance where r is positive, where negative, and where nonexistent, as well as where r is increasing and where it is decreasing. Here is an example. 

**EXAMPLE 3** Graph the lemniscate curve $r ^ { 2 } = \sin 2 \theta$ in the Cartesian xy-plane.

**Solution** For this example it will be easier to first plot $r ^ { 2 }$ , instead of $r ,$ as a function of θin the Cartesian $r ^ { 2 } \theta \cdot$ -plane  (see Figure 10.31a). We pass from there to the graph of$r = \pm { \sqrt { \sin { 2 \theta } } }$ in the rθ-plane (Figure 10.31b), and then draw the polar graph (Figure10.31c). The graph in Figure 10.31b “covers” the final polar graph in Figure 10.31c twice.We could have managed with either loop alone, with the two upper halves, or with the twolower halves. The double covering does no harm, however, and we actually learn a littlemore about the behavior of the function this way. 一

### USING TECHNOLOGY Graphing Polar Curves Parametrically

FIGURE 10.31 To plot $r = f ( \theta )$ in the Cartesian rθ-plane in (b), we first plot r sin 2 2 = θ in the r θ-plane 2 in (a) and then ignore the values of θ for which sin 2θ is negative. The radii from the sketch in (b) cover the polar graph of the lemniscate in (c) twice (Example 3). 

For complicated polar curves, we may need to use a graphing calculator or computer to graph the curve. If the device does not plot polar graphs directly, we can convert $r = f ( \theta )$ into parametric form using the equations 

$$
x = r \cos \theta = f (\theta) \cos \theta , \quad y = r \sin \theta = f (\theta) \sin \theta .
$$

Then we use the device to draw a parametrized curve in the Cartesian xy-plane. 

### EXERCISES <sup>10.4</sup>

#### Symmetries and Polar Graphs

Identify the symmetries of the curves in Exercises 1–12. Then sketch the curves in the xy-plane. 

1. $r = 1 + \cos \theta$ 

2. $r = 2 - 2 \cos \theta$

3. $r = 1 - \sin \theta$ 

4. $r = 1 + \sin \theta$

5. $r = 2 + \sin \theta$ 

6. $r = 1 + 2 \sin \theta$

7. $r = \sin ( \theta / 2 )$ 

8. $r = \cos (\theta / 2)$

9. r cos 2 = θ 

10. $r ^ { 2 } = \sin \theta$ 

11. $r ^ { 2 } = - \sin \theta$ 

12. $r ^ { 2 } = - \cos \theta$ 

Graph the lemniscates in Exercises 13–16. What symmetries do these curves have? 

13. $r ^ { 2 } = 4 \cos 2 \theta$ 

14. $r ^ {2} = 4 \sin 2 \theta$

15. $r ^ { 2 } = - \sin 2 \theta$ 

16. $r ^ { 2 } = - \cos 2 \theta$ 

Slopes of Polar Curves in the xy-Plane 

Find the slopes of the curves in Exercises 17–20 at the given points. Sketch the curves along with their tangent lines at these points. 

17. Cardioid $r = - 1 + \cos \theta ; \theta = \pm \pi / 2$ 

18. Cardioid $r = - 1 + \sin \theta ; \theta = 0 , \pi$ 

19. Four-leaved rose $r = \sin 2 \theta ; \theta = \pm \pi / 4 , \pm 3 \pi / 4$ 

20. Four-leaved rose $r = \cos 2 \theta ; \theta = 0 , \pm \pi / 2 , \pi$ 

#### Concavity of Polar Curves in the xy-Plane

Equation (1) gives the formula for the derivative $y ^ { \prime }$ of a polar curve $r = f ( \theta )$ . The second derivative is ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } = { \frac { d y ^ { \prime } / d \theta } { d x / d \theta } }$ (see Equation (2) in Section 10.2). Find the slope and concavity of the curves in Exercises 21–24 at the given points. 

21. r = = sin , 6 ,  3 θ θ π π

22. r e = = , 0,  θ π θ

23. $r = \theta , \quad \theta = 0, \pi / 2$

24. $r = 1 / \theta , \quad \theta = - \pi , 1$

#### Graphing Limaçons

Graph the limaçons in Exercises 25–28. Limaçon (“lee-ma-sahn”) is Old French for “snail.” You will understand the name when you graph the limaçons in Exercise 25. Equations for limaçons have the form $r = a \pm b$ cos θ or $r = a \pm b$ sin . θ There are four basic shapes. 

25. Limaçons with an inner loop 

$$
r = \frac {1}{2} + \cos \theta
$$

$$
\mathbf {b}. r = \frac {1}{2} + \sin \theta
26. $Cardioids$
\mathbf {a}. r = 1 - \cos \theta
$$

$$
\mathbf {b}. r = - 1 + \sin \theta
27. $Dimpled limaçons$
\mathbf {a}. r = \frac {3}{2} + \cos \theta
$$

$$
\mathbf {b}. r = \frac {3}{2} - \sin \theta
28. $Oval limaçons$
\mathbf {a}. r = 2 + \cos \theta
$$

$$
\mathbf {b}. r = - 2 + \sin \theta
$$

Graphing Polar Regions and Curves in the xy-Plane 

29. Sketch the region defined by the inequalitie $- 1 \leq r \leq 2$ and $- \pi / 2 \leq \theta \leq \pi / 2$ 

30. Sketch the region defined by the inequalities $0 \leq r \leq 2$ sec θ and $- \pi / 4 \le \theta \le \pi / 4$ 

In Exercises 31 and 32, sketch the region defined by the inequality. 

31. $0 \leq r \leq 2 - 2$ cos θ

32. $0 \leq r ^ { 2 } \leq$ cos θ

33. Which of the following has the same graph asT $r = 1 - \cos \theta ? $ 

a. $r = - 1 - \cos \theta$ b. $r = 1 + \cos \theta$ 

Confirm your answer with algebra. 

34. Which of the following has the same graph as r = cos 2 ? θ<sub>T</sub> a. r = − + sin 2 2 ( ) θ π b. r = −cos 2 ( ) θ Confirm your answer with algebra. 

35. A rose within a rose Graph the equation r = −1 2 sin 3 . θ<sub>T</sub> 

36. The nephroid of Freeth Graph the nephroid of Freeth:T 

$$
r = 1 + 2 \sin {\frac {\theta}{2}}.
$$

37. Roses Graph the roses r m = cos θ for m = 1 3, 2, 3, and 7.<sub>T</sub> 

38. Spirals Polar coordinates are just the thing for defining spirals.<sub>T</sub> Graph the following spirals. 

a. $r = \theta$ 

b. $r = - \theta$ 

c. A logarithmic spiral: $r = e ^ { \theta / 1 0 }$ 

d. A hyperbolic spiral: $r = 8 / \theta$ 

e. An equilateral hyperbola: $r = \pm 1 0 / \sqrt { \theta }$ 

(Use different colors for the two branches.) 

39. Graph the equationT $r = \sin ( { \frac { 8 } { 7 } \theta } )$ for $0 \leq \theta \leq 1 4 \pi$ 

40. Graph the equationT 

$$
r = \sin^ {2} (2. 3 \theta) + \cos^ {4} (2. 3 \theta)
$$

for $0 \leq \theta \leq 1 0 \pi$ 

## 10.5 Areas and Lengths in Polar Coordinates

![教材插图](/books/thomas-calculus/assets/dd56e2d2dc8cbbdc2fcb8289f5be9d025117c95fdf4da41076cefb652af2b221.jpg)


This section shows how to calculate areas of plane regions and lengths of curves in polar coordinates. 

### Area in the Plane

FIGURE 10.32 To derive a formula for the area of region OTS, we approximate the region with fan-shaped circular sectors. 

The region OTS in Figure 10.32 is bounded by the rays $\theta = \alpha$ and $\theta = \beta$ and the curve $r = f ( \theta )$ . We approximate the region with n nonoverlapping fan-shaped circular sectors based on a partition P of angle TOS. The typical sector has radius $r _ { k } ~ = ~ f ( \theta _ { k } )$ and central angle of radian measure $\Delta \theta _ { k }$ . Its area is $\Delta \theta _ { k } / 2 \pi$ times the area of a circle of radius $r _ { k }$ , or 

$$
A _ {k} = \frac {1}{2} r _ {k} ^ {2} \Delta \theta_ {k} = \frac {1}{2} (f (\theta_ {k})) ^ {2} \Delta \theta_ {k}.
$$

The area of region OTS is approximately 

$$
\sum_ {k = 1} ^ {n} A _ {k} = \sum_ {k = 1} ^ {n} \frac {1}{2} (f (\theta_ {k})) ^ {2} \Delta \theta_ {k}.
$$

If f is continuous, we expect the approximations to improve as the norm of the partition P goes to zero, where the norm of $P$ is the largest value of $\Delta \theta _ { k }$ .  We are therefore led to the following formula for the region’s area. 

![教材插图](/books/thomas-calculus/assets/f4f247c0e5131f77a2bc0ded4106b1c599b66ed0ca51695da0b8b34a78e978cb.jpg)



FIGURE 10.33 The area differential dA for the curve $r = f ( \theta )$


![教材插图](/books/thomas-calculus/assets/0e62da95e5dc33e885323df0bf501bf264380fc654b5ad5cda46e7be49fce16a.jpg)



FIGURE 10.34 The cardioid in Example 1.


![教材插图](/books/thomas-calculus/assets/8d0e74646400cfdb41c1fd93e5c8a6dc7361d6e07bc251dcb7f8d249ad0a5b60.jpg)



FIGURE 10.35 The area of the shaded region is calculated by subtracting the area of the region between $r _ { 1 }$ and the origin from the area of the region between $r _ { 2 }$ and the origin.


$$
A = \lim _ {\| P \| \rightarrow 0} \sum_ {k = 1} ^ {n} \frac {1}{2} (f (\theta_ {k})) ^ {2} \Delta \theta_ {k} = \int_ {\alpha} ^ {\beta} \frac {1}{2} (f (\theta)) ^ {2} d \theta .
$$

Area of the Fan-Shaped Region Between the Origin and the Curve $r = f ( \theta )$ when $\alpha \leq \theta \leq \beta , r \geq 0$ ,  and $\beta - \alpha \leq 2 \pi$ 

$$
A = \int_ {\alpha} ^ {\beta} \frac {1}{2} r ^ {2} d \theta
$$

This is the integral of the area differential (Figure 10.33) 

$$
d A = \frac {1}{2} r ^ {2} d \theta = \frac {1}{2} (f (\theta)) ^ {2} d \theta .
$$

In the area formula above, we assumed that $r \geq 0$ and that the region does not sweep out an angle of more than $2 \pi .$ . This avoids issues with negatively signed areas or with regions that overlap themselves. More general regions can usually be handled by subdividing them into regions of this type if necessary. 

**EXAMPLE 1** Find the area of the region in the xy-plane enclosed by the cardioid $r = 2 ( 1 + \cos \theta )$ 

**Solution** We graph the cardioid (Figure 10.34) and determine that the radius $O P$ sweeps out the region exactly once as θ runs from 0 to 2 . π The area is therefore 

$$
\begin{array}{r l} \int_ {\theta = 0} ^ {\theta = 2 \pi} \frac {1}{2} r ^ {2} d \theta & = \int_ {0} ^ {2 \pi} \frac {1}{2} \cdot 4 (1 + \cos \theta) ^ {2} d \theta \\ & = \int_ {0} ^ {2 \pi} 2 (1 + 2 \cos \theta + \cos^ {2} \theta) d \theta \\ & = \int_ {0} ^ {2 \pi} \left(2 + 4 \cos \theta + 2 \cdot \frac {1 + \cos 2 \theta}{2}\right) d \theta \\ & = \int_ {0} ^ {2 \pi} (3 + 4 \cos \theta + \cos 2 \theta) d \theta \\ & = \left[ 3 \theta + 4 \sin \theta + \frac {\sin 2 \theta}{2} \right] _ {0} ^ {2 \pi} = 6 \pi - 0 = 6 \pi . \end{array}
$$

To find the area of a region like the one in Figure 10.35, which lies between two polar curves $r _ { 1 } = r _ { 1 } ( \theta )$ and $r _ { 2 } = r _ { 2 } ( \theta )$ from $\theta = \alpha { \mathrm { ~ t o ~ } } \theta = \beta$ , we subtract the integral of $( 1 / 2 ) r _ { 1 } ^ { 2 }$ dθ from the integral of $( 1 / 2 ) r _ { 2 } ^ { 2 } d \theta .$ . This leads to the following formula. 

Area of the Region $0 \leq r _ { 1 } ( \theta ) \leq r \leq r _ { 2 } ( \theta ) , \alpha \leq \theta \leq \beta , \mathsf { a n d } \beta - \alpha \leq 2 \pi$ 

$$
A = \int_ {\alpha} ^ {\beta} \frac {1}{2} r _ {2} ^ {2} d \theta - \int_ {\alpha} ^ {\beta} \frac {1}{2} r _ {1} ^ {2} d \theta = \int_ {\alpha} ^ {\beta} \frac {1}{2} (r _ {2} ^ {2} - r _ {1} ^ {2}) d \theta\tag{1}
$$

**EXAMPLE 2** Find the area of the region that lies inside the circle $r = 1$ and outside the cardioid $r = 1 - \cos \theta .$ 

**Solution** We sketch the region to determine its boundaries and find the limits of integration (Figure 10.36). The outer curve is $r _ { 2 } = 1$ , the inner curve is $r _ { 1 } = 1 - \cos { \theta }$ , and $\theta$ runs from $- \pi / 2$ to $\pi / 2$ . The area, from Equation (1), is 

![教材插图](/books/thomas-calculus/assets/14140060d781ae766800d6a13ebbe80fecb43b66dd9c610062381dbe773c21af.jpg)



FIGURE 10.36 The region and limits of integration in Example 2.


![教材插图](/books/thomas-calculus/assets/184c95b574132712dfd29a2ab6613305d1d04e9dc1c9ca4142442060177201c2.jpg)



FIGURE 10.37 The curves $r = 2 \cos ( \theta / 3 )$ and $r = \sqrt { 2 }$ intersect at two points (Example 3).


$$
\begin{array}{l l} A = \int_ {- \pi / 2} ^ {\pi / 2} \frac {1}{2} (r _ {2} ^ {2} - r _ {1} ^ {2}) d \theta & \text {Eq. (1)} \\ = 2 \int_ {0} ^ {\pi / 2} \frac {1}{2} (r _ {2} ^ {2} - r _ {1} ^ {2}) d \theta & \text {Symmetry} \\ = \int_ {0} ^ {\pi / 2} (1 - (1 - 2 \cos \theta + \cos^ {2} \theta)) d \theta & r _ {2} = 1 \text {and} r _ {1} = 1 - \cos \theta \\ = \int_ {0} ^ {\pi / 2} (2 \cos \theta - \cos^ {2} \theta) d \theta = \int_ {0} ^ {\pi / 2} \left(2 \cos \theta - \frac {1 + \cos 2 \theta}{2}\right) d \theta \\ = \left[ 2 \sin \theta - \frac {\theta}{2} - \frac {\sin 2 \theta}{4} \right] _ {0} ^ {\pi / 2} = 2 - \frac {\pi}{4}. \end{array}
$$

The fact that we can represent a point in different ways in polar coordinates requires that we take extra care in deciding when a point lies on the graph of a polar equation and in determining the points at which polar graphs intersect. (We needed intersection points in Example 2.) In Cartesian coordinates, we can always find the points where two curves cross by solving their equations simultaneously. In polar coordinates, the story is different. Simultaneous solution may reveal some intersection points without revealing others, so it is sometimes difficult to find all points of intersection of two polar curves. One way to identify all the points of intersection is to graph the equations. 

**EXAMPLE 3** Find all of the points where the curve $r = 2 \cos ( \theta / 3 )$ intersects the circle of radius $\sqrt { 2 }$ centered at the origin. 

**Solution** Note that the function $r = 2 \cos ( \theta / 3 )$ takes both positive and negative values. Therefore, when we look for the points where this curve intersects the circle, it is important to take into account that the circle is described both by the equation $r = \sqrt { 2 }$ and by the equation $r = - \sqrt { 2 }$ 

Solving 2 $: \cos ( \theta / 3 ) = { \sqrt { 2 } }$ for θ yields 

$$
2 \cos (\theta / 3) = \sqrt {2}, \cos (\theta / 3) = \sqrt {2} / 2, \theta / 3 = \pi / 4, \theta = 3 \pi / 4.
$$

This gives us one point, $\left( { \sqrt { 2 } } , 3 \pi / 4 \right)$ , where the two curves intersect. However, as we can see by looking at the graphs in Figure 10.37, there is a second intersection point. To find the second point, we solve $2 \cos ( \theta / 3 ) = - { \sqrt { 2 } }$ for θ: 

$$
2 \cos (\theta / 3) = - \sqrt {2}, \quad \cos (\theta / 3) = - \sqrt {2} / 2, \quad \theta / 3 = 3 \pi / 4, \quad \theta = 9 \pi / 4.
$$

The second intersection point is located at $\left( - \sqrt { 2 } , 9 \pi / 4 \right)$ . We can specify this point in polar coordinates using a positive value of r and an angle between 0 and 2 .π In polar coordinates, adding multiples of $2 \pi$ to $\theta$ gives a second description of the same point in the plane. Similarly, changing the sign of $^ { \circ } ,$ while at the same time adding or subtracting π to or from $\theta ,$ also gives a description of the same point. So in polar coordinates, $\bar { ( - \sqrt { 2 } , 9 \pi / 4 ) }$ describes the same point in the plane as $\left( - { \sqrt { 2 } } , \pi / 4 \right)$ and also as $\left( { \sqrt { 2 } } , { 5 \pi / 4 } \right)$ . The second intersection point is located at $\left( { \sqrt { 2 } } , { 5 \pi / 4 } \right)$ 

### Length of a Polar Curve

We can obtain a polar coordinate formula for the length of a curve $r = f ( \theta ) , \alpha \leq \theta \leq \beta .$ by parametrizing the curve as 

$$
x = r \cos \theta = f (\theta) \cos \theta , \quad y = r \sin \theta = f (\theta) \sin \theta , \quad \alpha \leq \theta \leq \beta .\tag{2}
$$

The parametric length formula, Equation (3) from Section 10.2, then gives the length as 

$$
L = \int_ {\alpha} ^ {\beta} \sqrt {\left(\frac {d x}{d \theta}\right) ^ {2} + \left(\frac {d y}{d \theta}\right) ^ {2}} d \theta .
$$

This equation becomes 

![教材插图](/books/thomas-calculus/assets/1d9518c9d0723fe4cc0283793faacb165fad4f05d93a4b562cb74794eba88fd0.jpg)


$$
L = \int_ {\alpha} ^ {\beta} \sqrt {r ^ {2} + \left(\frac {d r}{d \theta}\right) ^ {2}} d \theta
$$


FIGURE 10.38 Calculating the length of a cardioid (Example 4).


when Equations (2) are substituted for x and y (Exercise 29). 

### Length of a Polar Curve

If $r = f ( \theta )$ has a continuous first derivative for $\alpha \leq \theta \leq \beta$ , and if the point $P ( r , \theta )$ traces the curve $r = f ( \theta )$ exactly once as $\theta$ runs from α to $\beta ,$ then the length of the curve is 

$$
L = \int_ {\alpha} ^ {\beta} \sqrt {r ^ {2} + \left(\frac {d r}{d \theta}\right) ^ {2}} d \theta .\tag{3}
$$

**EXAMPLE 4** Find the length of the cardioid $r = 1 - \cos \theta .$

With 

**Solution** We sketch the cardioid to determine the limits of integration (Figure 10.38). The point $P ( r , \theta )$ traces the curve once, counterclockwise as θ runs from 0 to 2 ,π so these are the values we take for α and $\beta .$ 

$$
r = 1 - \cos \theta , \quad \frac {d r}{d \theta} = \sin \theta ,
$$

we have 

$$
\begin{array}{r l} r ^ {2} + \left(\frac {d r}{d \theta}\right) ^ {2} & = (1 - \cos \theta) ^ {2} + (\sin \theta) ^ {2} \\ & = 1 - 2 \cos \theta + \underbrace {\cos^ {2} \theta + \sin^ {2} \theta} _ {1} = 2 - 2 \cos \theta \end{array}
$$

and 

$$
\begin{array}{l} L = \int_ {\alpha} ^ {\beta} \sqrt {r ^ {2} + \left(\frac {d r}{d \theta}\right) ^ {2}} d \theta = \int_ {0} ^ {2 \pi} \sqrt {2 - 2 \cos \theta} d \theta \\ = \int_ {0} ^ {2 \pi} \sqrt {4 \sin^ {2} \frac {\theta}{2}} d \theta \quad 1 - \cos \theta = 2 \sin^ {2} (\theta / 2) \\ = \int_ {0} ^ {2 \pi} 2 \left| \sin \frac {\theta}{2} \right| d \theta \\ = \int_ {0} ^ {2 \pi} 2 \sin \frac {\theta}{2} d \theta \quad \sin (\theta / 2) \geq 0 \text {for} 0 \leq \theta \leq 2 \pi \\ = \left[ - 4 \cos \frac {\theta}{2} \right] _ {0} ^ {2 \pi} = 4 + 4 = 8. \end{array}
$$

### EXERCISES 10.5

Finding Polar Areas 

Find the areas of the regions in Exercises 1–8. 

1. Bounded by the spiral $r = \theta$ for $0 \leq \theta \leq \pi$ 

![教材插图](/books/thomas-calculus/assets/f977190df89fc09bd779ae1f0353b77f733f740211ed3d70118728b7e1197e9a.jpg)


2. Bounded by the circle $r = 2$ sin θ for $\pi / 4 \leq \theta \leq \pi / 2$ 

![教材插图](/books/thomas-calculus/assets/ce6b02bd9110ff8cc6ad95b317961ba1e637d80d567d40520078e5de6f59b370.jpg)


3. Inside the oval limaçon $r = 4 + 2$ cos θ 

4. Inside the cardioid $r = a ( 1 + \cos \theta ) , a > 0$ 

5. Inside one leaf of the four-leaved rose $r = \cos 2 \theta$ 

6. Inside one leaf of the three-leaved rose $r = \cos 3 \theta$ 

![教材插图](/books/thomas-calculus/assets/58f852f86bae8a45bde057f294daf38c0c100695d5a2c50d4f439bdb681d50f1.jpg)


7. Inside one loop of the lemniscate $r ^ { 2 } = 4 \sin 2 \theta$ 

8. Inside the six-leaved rose $r ^ { 2 } = 2$ sin 3θ 

Find the areas of the regions in Exercises 9–18. 

9. Shared by the circles $r = 2$ cos θ and $r = 2$ sin θ 

10. Shared by the circles $r = 1$ and $r = 2$ sin θ 

11. Shared by the circle $r = 2$ and the cardioid $r = 2 ( 1 - \cos \theta )$ 

12. Shared by the cardioids $r = 2 ( 1 + \cos \theta )$ and $r = 2 ( 1 - \cos \theta )$ ) 

13. Inside the lemniscate $r ^ { 2 } = 6 \cos 2 \theta$ and outside the circle $r = \sqrt { 3 }$ 

14. Inside the circle $r = 3 a \cos \theta$ and outside the cardioid $r = a ( 1 + \cos \theta ) , a > 0$ 

15. Inside the circle $r = - 2$ cos θ and outside the circle $r = 1$ 

16. Inside the circle $r = 6$ and above the line $r = 3$ csc θ 

17. Inside the circle $r = 4 \cos \theta$ and to the right of the vertical line $r = \sec \theta$ 

18. Inside the circle r = 4 sin θ and below the horizontal line $r = 3 \csc \theta$ 

19. a. Find the area of the shaded region in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/bd48b249eecd579f7acb8d129722dbdeea238a233a33447c50e45dbc6d89b4e2.jpg)


b. It looks as if the graph of r = tan $\theta , \ : - \pi / 2 < \theta < \pi / 2$ could be asymptotic to the lines $x = 1$ and $x = - 1$ . Is it? Give reasons for your answer. 

20. The area of the region that lies inside the cardioid curve $r = \cos \theta + 1 $ and outside the circle $r = \cos \theta$ is not 

$$
\frac {1}{2} \int_ {0} ^ {2 \pi} \left[ (\cos \theta + 1) ^ {2} - \cos^ {2} \theta \right] d \theta = \pi .
$$

Why not? What is the area? Give reasons for your answers. 

Finding Lengths of Polar Curves 

Find the lengths of the curves in Exercises 21–28. 

21. The spiral $r = \theta ^ { 2 } , 0 \leq \theta \leq \sqrt { 5 }$ 

22. The spiral $r = e ^ { \theta } { \big / } { \sqrt { 2 } } , 0 \leq \theta \leq \pi$ 

23. The cardioid $r = 1 + \cos \theta$ 

24. The curve $r = a \sin ^ { 2 } ( \theta / 2 ) , 0 \leq \theta \leq \pi , a > 0$ 

25. The parabolic segment $r = 6 / ( 1 + \cos \theta ) , 0 \leq \theta \leq \pi / 2$ 

26. The parabolic segment $r = 2 / ( 1 - \cos \theta ) , \pi / 2 \leq \theta \leq \pi$ 

27. The curve $r = \cos ^ { 3 } ( \theta / 3 ) , 0 \leq \theta \leq \pi / 4$ 

28. The curve $r = \sqrt { 1 + \sin 2 { \theta } } , 0 \leq { \theta } \leq { \pi } \sqrt { 2 }$ 

29. The length of the curve $r = f ( \theta ) , \alpha \le \theta \le \beta$ Assuming that the necessary derivatives are continuous, show how the substitutions 

$$
x = f (\theta) \cos \theta , y = f (\theta) \sin \theta
$$

(Equations 2 in the text) transform 

$$
L = \int_ {\alpha} ^ {\beta} \sqrt {\left(\frac {d x}{d \theta}\right) ^ {2} + \left(\frac {d y}{d \theta}\right) ^ {2}} d \theta
$$

into 

$$
L = \int_ {\alpha} ^ {\beta} \sqrt {r ^ {2} + \left(\frac {d r}{d \theta}\right) ^ {2}} d \theta .
30. $Circumferences of circles As usual, when faced with a new formula, it is a good idea to try it on familiar objects to be sure it gives results consistent with past experience. Use the length formula in Equation (3) to calculate the circumferences of the following circles $( a > 0 )$ .$
\mathbf {a}. r = a \quad \mathbf {b}. r = a \cos \theta \quad \mathbf {c}. r = a \sin \theta
$$

Theory and Examples 

31. Average value If f is continuous, the average value of the polar coordinate r over the curve $r = f ( \theta ) , \alpha \leq \theta \leq \beta ,$ , with respect to R is given by the formula 

$$
r _ {\mathrm{av}} = \frac {1}{\beta - \alpha} \int_ {\alpha} ^ {\beta} f (\theta) d \theta .
$$

Use this formula to find the average value of r with respect to R over the following curves $( a > 0 )$ . 

a. The cardioid $r = a ( 1 - \cos \theta )$ 

b. The circle r a 

c. The circle r a = − ≤ ≤ cos , 2 2 θ π θ π 

32. $r = f ( \theta ) { \mathrm { v s . } } r = 2 f ( \theta )$ Can anything be said about the relative lengths of the curves $r = f ( \theta ) , \alpha \leq \theta \leq \beta ,$ and $r = 2 f ( \theta ) , \alpha \le \theta \le \beta ?$ Give reasons for your answer. 

## 10.6 Conic Sections

In this section we define and review parabolas, ellipses, and hyperbolas geometrically and derive their standard Cartesian equations. These curves are called conic sections or conics because they are formed by cutting a double cone with a plane (Figure 10.39). This 

![教材插图](/books/thomas-calculus/assets/1a5ee81ef1ade9ed301e95c273cbfa41241e364c1513a95bfe71cb062b3add01.jpg)



Circle: plane perpendicular to cone axis


![教材插图](/books/thomas-calculus/assets/d8ff8c30bfcd8436482e429ee6725fe743f27cae4b3a6e3d76b0b8c3a30c0358.jpg)



Ellipse: plane oblique to cone axis



(a)


![教材插图](/books/thomas-calculus/assets/82a273774409f5fad0d9c7d6f4816da77b17f12bddb0ae230b35c82aa500eae9.jpg)



Parabola: plane parallel to side of cone


![教材插图](/books/thomas-calculus/assets/157ed8216c80b671bb0a3039f387d4eb9fdb2e03ff674ecb15b30e5279ae4cee.jpg)



Hyperbola: plane parallel to cone axis


**HISTORICAL BIOGRAPHY**

Gregory St. Vincent (1584–1667) 

Born in Belgium, St. Vincent studied mathematics at Douai. He made important contributions to the development of calculus, and his books were read by the next generation of mathematicians as they connected ideas and refined the concepts of calculus. 

To know more, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/842d3ec9da8722f860d9fb7c586d608358d195f9789e74595cca36ea69ed3b6f.jpg)



Point: plane through cone vertex only


![教材插图](/books/thomas-calculus/assets/f05a4fcf805a81a819967e53b5e8125697849cf1a7cd9b9f246bbc2bc097e7e9.jpg)



Single line: plane tangent to cone



(b)


![教材插图](/books/thomas-calculus/assets/7a1e649c90e4b53e77966ab030e3529d43bb237f355670ef3984faf79d4e9dc6.jpg)



Pair of intersecting lines


FIGURE 10.39 The standard conic sections (a) are the curves in which a plane cuts a double cone. Hyperbolas come in two parts, called branches. The point and lines obtained by passing the plane through the cone’s vertex (b) are degenerate conic sections. 

geometric method was the only way that conic sections could be described by Greek mathematicians, since they did not have our tools of Cartesian or polar coordinates. In the next section we express the conics in polar coordinates. 

### Parabolas

![教材插图](/books/thomas-calculus/assets/a54f3497f7f083be660bd60e00e15b981a06e8622bb9c616020faf1faa679c2a.jpg)



FIGURE 10.40 The standard form of the parabola $x ^ { 2 } = 4 p y , p > 0$


> ***DEFINITIONS*** A set that consists of all the points in a plane equidistant from a given fixed point and a given fixed line in the plane is a parabola. The fixed point is the focus of the parabola. The fixed line is the directrix. 

If the focus F lies on the directrix L, the parabola is the line through F perpendicular to L. We consider this to be a degenerate case and assume henceforth that F does not lie on L. 

A parabola has its simplest equation when its focus and directrix straddle one of the coordinate axes. For example, suppose that the focus lies at the point $F ( 0 , p )$ on the positive y-axis and that the directrix is the line $y = - p$ (Figure 10.40). In the notation of the figure, a point $P ( x , y )$ lies on the parabola if and only if $P F = P Q$ . From the distance formula, 

$$
\begin{array}{l} P F = \sqrt {(x - 0) ^ {2} + (y - p) ^ {2}} = \sqrt {x ^ {2} + (y - p) ^ {2}} \\ P Q = \sqrt {(x - x) ^ {2} + (y - (- p)) ^ {2}} = \sqrt {(y + p) ^ {2}}. \end{array}
$$

When we equate these expressions, square, and simplify, we get 

$$
y = \frac {x ^ {2}}{4 p} \quad \text { or } \quad x ^ {2} = 4 p y. \quad \text { Standard   form }\tag{1}
$$

These equations reveal the parabola’s symmetry about the y-axis. We call the y-axis the axis of the parabola (short for “axis of $\mathrm { s y m m e t r y } ^ { \prime \prime } )$ . 

The point where a parabola crosses its axis is the vertex. The vertex of the parabola $x ^ { 2 } = 4 p y$ lies at the origin (Figure 10.40). The positive number p is the parabola’s focal length. 

If the parabola opens downward, with its focus at $( 0 , - p )$ and its directrix the line $y = p ,$ then Equations (1) become 

$$
y = - \frac {x ^ {2}}{4 p} \quad \text { and } \quad x ^ {2} = - 4 p y.
$$

By interchanging the variables x and y, we obtain similar equations for parabolas opening to the right or to the left (Figure 10.41). 

![教材插图](/books/thomas-calculus/assets/502269df35cd440b98ce6b593ef1552420e83e771d8405c6a32a1f9973c49504.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/58046bce5a8191a64460151e2d69bbda21744ec452903b09445f971a7e7272a3.jpg)



(b)



FIGURE 10.41 (a) The parabola $y ^ { 2 } = 4 p x .$ (b) The parabola $y ^ { 2 } = - 4 p x .$


**EXAMPLE 1** Find the focus and directrix of the parabola $y ^ { 2 } = 1 0 x ,$ 

**Solution** We find the value of $\dot { p }$ in the standard equation $y ^ { 2 } = 4 p x ;$ 

![教材插图](/books/thomas-calculus/assets/b3f67fb55715f4ac4ad13d5fa91cb42613c14f62d524747bbafcd1876f6a0531.jpg)



FIGURE 10.42 Points on the focal axis of an ellipse.


![教材插图](/books/thomas-calculus/assets/fba1f6580e516011716da9b9fc7025bf41f8322a16ec66e140467cb41d723226.jpg)



FIGURE 10.43 The ellipse defined by the equation $P F _ { 1 } + P F _ { 2 } = 2 a$ is the graph of the equation $\left( x ^ { 2 } / a ^ { 2 } \right) + \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ where $b ^ { 2 } = a ^ { 2 } - c ^ { 2 } .$


$$
4 p = 1 0, \quad \text { so } \quad p = \frac {1 0}{4} = \frac {5}{2}.
$$

Then we find the focus and directrix for this value of $p { : }$ 

Focus: 

$$
(p, 0) = \left(\frac {5}{2}, 0\right)
$$

Directrix: 

$$
x = - p \quad \text { or } \quad x = - \frac {5}{2}.
$$

### Ellipses

> ***DEFINITIONS*** An ellipse is the set of points in a plane whose distances from two fixed points in the plane have a constant sum. The two fixed points are the foci of the ellipse. 

The line through the foci of an ellipse is the ellipse’s focal axis. The point on the axis halfway between the foci is the center. The points where the focal axis and ellipse cross are the ellipse’s vertices (Figure 10.42). 

If the foci are $F _ { 1 } ( - c , 0 )$ and $F _ { 2 } ( c , 0 )$ (Figure 10.43), and $P F _ { 1 } + P F _ { 2 }$ is denoted by 2a, then the coordinates of a point $P$ on the ellipse satisfy the equation 

$$
\sqrt {(x + c) ^ {2} + y ^ {2}} + \sqrt {(x - c) ^ {2} + y ^ {2}} = 2 a.
$$

To simplify this equation, we move the second radical to the right-hand side, square, isolate the remaining radical, and square again, obtaining 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{a ^ {2} - c ^ {2}} = 1.\tag{2}
$$

Since $P F _ { 1 } + P F _ { 2 }$ is greater than the length $F _ { 1 } F _ { 2 }$ (by the triangle inequality for triangle $P F _ { 1 } F _ { 2 } )$ , the number 2a is greater than 2c. Accordingly, $a > c$ and the number $a ^ { 2 } \ : - \ : c ^ { 2 }$ in Equation (2) is positive. 

The algebraic steps leading to Equation (2) can be reversed to show that every point P whose coordinates satisfy an equation of this form with $0 < c <$ a also satisfies the equation $P F _ { 1 } + P F _ { 2 } = 2 a . \mathrm { A }$ point therefore lies on the ellipse if and only if its coordinates satisfy Equation (2). 

If we let b denote the positive square root of $a ^ { 2 } \ : - \ : c ^ { 2 }$ 

$$
b = \sqrt {a ^ {2} - c ^ {2}},\tag{3}
$$

then $a ^ { 2 } - c ^ { 2 } = b ^ { 2 }$ and Equation (2) takes the form 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1.\tag{4}
$$

Equation (4) reveals that this ellipse is symmetric with respect to the origin and both coordinate axes. It lies inside the rectangle bounded by the lines $x = \pm a$ and $y = \pm b .$ It crosses the axes at the points $( \pm a , 0 )$ and $( 0 , \pm b )$ .  The tangents at these points are perpendicular to the axes because 

$$
\frac {d y}{d x} = - \frac {b ^ {2} x}{a ^ {2} y}, \quad \begin{array}{l} \text { Obtained   from   Eq.   (4) } \\ \text { by   implicit   differentiation } \end{array}
$$

which is zero if $x = 0$ and infinite if $y = 0$ 

![教材插图](/books/thomas-calculus/assets/c3d32bf3aae339f4e7259ecddae125860c9de5ea57f7ee51680e06f3b8f3c0cb.jpg)



FIGURE 10.44 An ellipse with its major axis horizontal (Example 2).


![教材插图](/books/thomas-calculus/assets/0a3a9760c24f0e309966bc7fde890d1efa5bcd14a3bffad1eb5b7aff5c702387.jpg)



FIGURE 10.45 Points on the focal axis of a hyperbola.


The major axis of the ellipse in Equation (4) is the line segment of length 2a joining the points $( \pm a , 0 )$ . The minor axis is the line segment of length 2b joining the points $( 0 , \pm b )$ . The number a itself is the semimajor axis, the number b the semiminor axis. The number $^ { c , }$ found from Equation (3) as 

$$
c = \sqrt {a ^ {2} - b ^ {2}},
$$

is the center-to-focus distance of the ellipse. If $a = b$ then the ellipse is a circle. 

**EXAMPLE 2** The ellipse 

$$
\frac {x ^ {2}}{1 6} + \frac {y ^ {2}}{9} = 1\tag{5}
$$

shown in Figure 10.44 has 

Semimajor axis: $a = { \sqrt { 1 6 } } = 4 ,$ Semiminor axis: $b = { \sqrt { 9 } } = 3 ,$ 

Center-to-focus distance: $c = { \sqrt { 1 6 - 9 } } = { \sqrt { 7 } } .$ 

Foci: $( \pm c , 0 ) = \big ( \pm \sqrt { 7 } , 0 \big ) .$ 

Vertices: $( \pm a , 0 ) = ( \pm 4 , 0 )$ 

Center: 0, 0 .( ) 

If we interchange x and y in Equation (5), we have the equation 

$$
\frac {x ^ {2}}{9} + \frac {y ^ {2}}{1 6} = 1.\tag{6}
$$

The major axis of this ellipse is now vertical instead of horizontal, with the foci and vertices on the y-axis. We can determine which way the major axis runs simply by finding the intercepts of the ellipse with the coordinate axes. The longer of the two axes of the ellipse is the major axis. 

### Standard-Form Equations for Ellipses Centered at the Origin

Foci on the x-axis: ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } = 1 ( a > b )$ 

Center-to-focus distance: $c = { \sqrt { a ^ { 2 } - b ^ { 2 } } }$ 

Foci: , 0 ( ) ±c 

Vertices: , 0 ( ) ±a 

Foci on the y-axis: ${ \frac { x ^ { 2 } } { b ^ { 2 } } } + { \frac { y ^ { 2 } } { a ^ { 2 } } } = 1 ( a > b )$ 

Center-to-focus distance: $c = { \sqrt { a ^ { 2 } - b ^ { 2 } } }$ 

Foci: 0,  ( ) ±c 

$$
\text { Vertices: } (0, \pm a)
$$

In each case, a is the semimajor axis and b is the semiminor axis. 

### Hyperbolas

> ***DEFINITIONS*** A hyperbola is the set of points in a plane whose distances from two fixed points in the plane have a constant difference. The two fixed points are the foci of the hyperbola. 

The line through the foci of a hyperbola is the focal axis. The point on the axis halfway between the foci is the hyperbola’s center. The points where the focal axis and hyperbola cross are the vertices (Figure 10.45). 

![教材插图](/books/thomas-calculus/assets/5f2ab2aafb982b9365ee4b4157348dd9943e72fa7cae18dcd982fdce7e1ffb5f.jpg)



FIGURE 10.46 Hyperbolas have two branches. For points on the right-hand branch of the hyperbola shown here,


$P F _ { 1 } - P F _ { 2 } = 2 a$ . For points on the lefthand branch, $P F _ { 2 } - P F _ { 1 } = 2 a$ . We then let $b = { \sqrt { c ^ { 2 } - a ^ { 2 } } }$ 

![教材插图](/books/thomas-calculus/assets/fce1d9a56181c9c8ef1c31e5eebc1a9e017817b29ea3c93a2c887350b67909b7.jpg)



FIGURE 10.47 The hyperbola and its asymptotes in Example 3.


If the foci are $F _ { 1 } ( - c , 0 )$ and $F _ { 2 } ( c , 0 )$ (Figure 10.46) and the constant difference is 2a, then a point $( x , y )$ lies on the hyperbola if and only if 

$$
\sqrt {(x + c) ^ {2} + y ^ {2}} - \sqrt {(x - c) ^ {2} + y ^ {2}} = \pm 2 a.\tag{7}
$$

To simplify this equation, we move the second radical to the right-hand side, square, isolate the remaining radical, and square again, obtaining 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{a ^ {2} - c ^ {2}} = 1.\tag{8}
$$

So far, this looks just like the equation for an ellipse. But now $a ^ { 2 } \ : - \ : c ^ { 2 }$ is negative because 2a, being the difference of two sides of triangle $P F _ { 1 } F _ { 2 }$ , is less than 2c, the third side. 

The algebraic steps leading to Equation (8) can be reversed to show that every point P whose coordinates satisfy an equation of this form with $0 < a < c$ also satisfies Equation (7). A point therefore lies on the hyperbola if and only if its coordinates satisfy Equation (8). 

If we let b denote the positive square root of $c ^ { 2 } - a ^ { 2 }$ 5 

$$
b = \sqrt {c ^ {2} - a ^ {2}},\tag{9}
$$

then $a ^ { 2 } - c ^ { 2 } = - b ^ { 2 }$ and Equation (8) takes the compact form 

$$
\frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1.\tag{10}
$$

The differences between Equation (10) and the equation for an ellipse (Equation (4)) are the minus sign and the new relation 

$$
c ^ {2} = a ^ {2} + b ^ {2}. \quad \text { From   Eq. } (9)
$$

Like the ellipse, the hyperbola is symmetric with respect to the origin and coordinate axes. It crosses the x-axis at the points (±a, 0 .) The tangents at these points are vertical because 

$$
\frac {d y}{d x} = \frac {b ^ {2} x}{a ^ {2} y} \quad \text { Obtained   from   Eq.   (10)   by   implicit   differentiation }
$$

and this is infinite when $y = 0$ . The hyperbola has no y-intercepts; in fact, no part of the curve lies between the lines $x = - a$ and $x = a .$ 

The lines 

$$
y = \pm \frac {b}{a} x
$$

are the two asymptotes of the hyperbola defined by Equation (10). The fastest way to find the equations of the asymptotes is to replace the 1 in Equation (10) by 0 and solve the new equation for y: 

$$
\underbrace {\frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1} _ {\text { hyperbola }} \to \underbrace {\frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 0} _ {\text { 0   for   1 }} \to \underbrace {y = \pm \frac {b}{a} x} _ {\text { asymptotes }}.
$$

**EXAMPLE 3** The equation 

$$
\frac {x ^ {2}}{4} - \frac {y ^ {2}}{5} = 1\tag{11}
$$

is Equation (10) with $a ^ { 2 } = 4$ and $b ^ { 2 } = 5$ (Figure 10.47). We have 

Center-to-focus distance: $c = { \sqrt { a ^ { 2 } + b ^ { 2 } } } = { \sqrt { 4 + 5 } } = 3 ,$ 

Foci: $( \pm c , 0 ) = ( \pm 3 , 0 )$ , Vertices: $( \pm a , 0 ) = ( \pm 2 , 0 )$ 

Center: 0, 0 ,( ) 

Asymptotes: ${ \frac { x ^ { 2 } } { 4 } } - { \frac { y ^ { 2 } } { 5 } } = 0 \quad { \mathrm { o r } } \quad y = \pm { \frac { \sqrt { 5 } } { 2 } } x .$ 

If we interchange x and y in Equation (11), the foci and vertices of the resulting hyperbola will lie along the y-axis. We still find the asymptotes in the same way as before, but now their equations will be $y = \pm 2 x / \sqrt { 5 }$ 

### Standard-Form Equations for Hyperbolas Centered at the Origin

Foci on the x axis       :- ${ \frac { x ^ { 2 } } { a ^ { 2 } } } - { \frac { y ^ { 2 } } { b ^ { 2 } } } = 1$ 

: Foci on the y-axis ${ \frac { y ^ { 2 } } { a ^ { 2 } } } - { \frac { x ^ { 2 } } { b ^ { 2 } } } = 1$ 

Center-to-focus distance: $c = { \sqrt { a ^ { 2 } + b ^ { 2 } } }$ 

Center-to-focus distance: $c = { \sqrt { a ^ { 2 } + b ^ { 2 } } }$ 

Foci: $( \pm c , 0 )$ 

Foci: $( 0 , \pm c )$ 

Vertices: $( \pm a , \ 0 )$ 

Asymptotes: ${ \frac { x ^ { 2 } } { a ^ { 2 } } } - { \frac { y ^ { 2 } } { b ^ { 2 } } } = 0 \quad { \mathrm { o r } } \quad y = \pm { \frac { b } { a } } x$ 

Vertices: $( 0 , \pm a )$ 

Asymptotes: ${ \frac { y ^ { 2 } } { a ^ { 2 } } } - { \frac { x ^ { 2 } } { b ^ { 2 } } } = 0$ or $y = \pm { \frac { a } { b } } x$ 

Notice the difference in the asymptote equations $( b / a$ in the first, $a / b$ in the second). 

We shift conics using the principles reviewed in Section 1.2, replacing x by $x + h$ and y by $y + k$ 

**EXAMPLE 4** Show that the equation $x ^ { 2 } - 4 y ^ { 2 } + 2 x + 8 y - 7 = 0$ represents a hyperbola. Find its center, asymptotes, and foci. 

**Solution** We reduce the equation to standard form by completing the square in x and y as follows: 

$$
\begin{array}{c} (x ^ {2} + 2 x) - 4 (y ^ {2} - 2 y) = 7 \\ (x ^ {2} + 2 x + 1) - 4 (y ^ {2} - 2 y + 1) = 7 + 1 - 4 \\ \frac {(x + 1) ^ {2}}{4} - (y - 1) ^ {2} = 1. \end{array}
$$

This is the standard form Equation (10) of a hyperbola with x replaced by $x + 1$ and $y$ replaced by $y - 1$ . The hyperbola is shifted one unit to the left and one unit upward, and it has center $x + 1 = 0$ and $y - 1 = 0 .$ , or $x = - 1$ and $y = 1$ . Moreover, 

$$
a ^ {2} = 4, \quad b ^ {2} = 1, \quad c ^ {2} = a ^ {2} + b ^ {2} = 5,
$$

so the asymptotes are the two lines 

$$
\frac {x + 1}{2} - (y - 1) = 0 \quad \text { and } \quad \frac {x + 1}{2} + (y - 1) = 0,
$$

or 

$$
y - 1 = \pm \frac {1}{2} (x + 1).
$$

The shifted foci have coordinates $( - 1 \pm { \sqrt { 5 } } , 1 )$ 

4. 

Identifying Graphs 

Match the parabolas in Exercises 1–4 with the following equations: 

$$
x ^ {2} = 2 y, \quad x ^ {2} = - 6 y, \quad y ^ {2} = 8 x, \quad y ^ {2} = - 4 x.
$$

Then find each parabola’s focus and directrix. 

1. 

![教材插图](/books/thomas-calculus/assets/85582f032e35cb856002ebd94d56c1c7ddbe70d1f8554bb8d7448ff9590acdb5.jpg)



2.


![教材插图](/books/thomas-calculus/assets/0b3026a36f4332470237246fa40399b78be1ee1bafd442daac70a3628d3ab58f.jpg)



3.


![教材插图](/books/thomas-calculus/assets/168b457867fc75fd4e5c615b55caa0b2d7c8517740be2114f3a5ef1bb8312c54.jpg)


![教材插图](/books/thomas-calculus/assets/2c7cd55e4de443912603757f20759e892069cbd38fe312b690648cdf3e7efce2.jpg)


Match each conic section in Exercises 5–8 with one of these equations: 

$$
\frac {x ^ {2}}{4} + \frac {y ^ {2}}{9} = 1,
$$

$$
\frac {x ^ {2}}{2} + y ^ {2} = 1,
$$

$$
\frac {y ^ {2}}{4} - x ^ {2} = 1,
$$

$$
\frac {x ^ {2}}{4} - \frac {y ^ {2}}{9} = 1.
$$

Then find the conic section’s foci and vertices. If the conic section is a hyperbola, find its asymptotes as well. 

5. 

![教材插图](/books/thomas-calculus/assets/a29404b36cdaa70c0acfeb3fb19b25845fd201180c47e7d00d12f369f6d4fe0e.jpg)


6. 

![教材插图](/books/thomas-calculus/assets/4e6e2be36ca22fe41e3d6dbb7ac99a24df9acaf61a9aa49280b86d02386ebe2a.jpg)


7. 

![教材插图](/books/thomas-calculus/assets/432f66a7150b3d7fb54d827342b0f1a138dd7b749a45d8cf113a52cc2fcc0af2.jpg)


8. 

![教材插图](/books/thomas-calculus/assets/665eaf8a413cb03201c674fc23182ab6b1a8ffd738b90a0c1686dc90213f16a1.jpg)


Parabolas 

Exercises 9–16 give equations of parabolas. Find each parabola’s focus and directrix. Then sketch the parabola. Include the focus and directrix in your sketch. 

$$
9. y ^ {2} = 1 2 x \quad 1 0. x ^ {2} = 6 y \quad 1 1. x ^ {2} = - 8 y
$$

12. $y ^ { 2 } = - 2 x$ 

13. $y = 4 x ^ { 2 }$ 

$$
1 4. y = - 8 x ^ {2}
$$

15. $x = - 3 y ^ { 2 }$ 

16. $x = 2 y ^ { 2 }$ 

Ellipses 

Exercises 17–24 give equations for ellipses. Put each equation in standard form. Then sketch the ellipse. Include the foci in your sketch. 

17. $1 6 x ^ { 2 } + 2 5 y ^ { 2 } = 4 0 0$ 

$$
7 x ^ {2} + 1 6 y ^ {2} = 1 1 2
$$

19. $2 x ^ { 2 } + y ^ { 2 } = 2$ 

$$
2 0. 2 x ^ {2} + y ^ {2} = 4
$$

21. $3 x ^ { 2 } + 2 y ^ { 2 } = 6$ 

$$
2 2. 9 x ^ {2} + 1 0 y ^ {2} = 9 0
$$

23. $6 x ^ { 2 } + 9 y ^ { 2 } = 5 4$ 

24. 169 25 4225 x y 2 2 + = 

Exercises 25 and 26 give information about the foci and vertices of ellipses centered at the origin of the xy-plane. In each case, find the ellipse’s standard-form equation from the given information. 

25. Foci: $\left( \pm { \sqrt { 2 } } , 0 \right)$ Vertices: 2, 0(± ) 

26. Foci: 0,  4 ( ± ) Vertices: 0,  5 ( ± ) 

Hyperbolas 

Exercises 27–34 give equations for hyperbolas. Put each equation in standard form and find the hyperbola’s asymptotes. Then sketch the hyperbola. Include the asymptotes and foci in your sketch. 

27. $x ^ { 2 } - y ^ { 2 } = 1$ 

28. $9 x ^ { 2 } - 1 6 y ^ { 2 } = 1 4 4$ 

$$
\mathbf {3 0 .} y ^ {2} - x ^ {2} = 4
$$

31. 8x y 2 16 2 2 − = 

$$
3 2. y ^ {2} - 3 x ^ {2} = 3
$$

33. $8 y ^ { 2 } - 2 x ^ { 2 } = 1 6$ 

$$
3 4. 6 4 x ^ {2} - 3 6 y ^ {2} = 2 3 0 4
$$

Exercises 35–38 give information about the foci, vertices, and asymptotes of hyperbolas centered at the origin of the xy-plane. In each case, find the hyperbola’s standard-form equation from the information given. 

35. Foci: $( 0 , \pm { \sqrt { 2 } } )$ 

Asymptotes: y x = ± 

36. Foci: 2, 0 (± ) 

Asymptotes: $y = \pm { \frac { 1 } { \sqrt { 3 } } } x$ 

37. Vertices: (±3,  0) 

Asymptotes: $y = \pm \frac { 4 } { 3 } x$ 

38. Vertices: (0,  2± ) 

Asymptotes: $y = \pm { \frac { 1 } { 2 } } x$ 

Shifting Conic Sections 

You may wish to review Section 1.2 before solving Exercises 39–56. 

39. The parabola $y ^ { 2 } \ = \ 8 x$ is shifted down 2 units and right 1 unit to generate the parabola $( y + 2 ) ^ { 2 } = 8 ( x - 1 )$ 

a. Find the new parabola’s vertex, focus, and directrix. 

b. Plot the new vertex, focus, and directrix, and sketch in the parabola. 

40. The parabola $x ^ { 2 } = - 4 y$ is shifted left 1 unit and up 3 units to generate the parabola $( x + 1 ) ^ { 2 } = - 4 ( y - 3 )$ . 

a. Find the new parabola’s vertex, focus, and directrix. 

b. Plot the new vertex, focus, and directrix, and sketch in the parabola. 

41. The ellipse $( x ^ { 2 } / 1 6 ) + ( y ^ { 2 } / 9 ) = 1$ is shifted 4 units to the right and 3 units up to generate the ellipse 

$$
\frac {(x - 4) ^ {2}}{1 6} + \frac {(y - 3) ^ {2}}{9} = 1.
$$

a. Find the foci, vertices, and center of the new ellipse. 

b. Plot the new foci, vertices, and center, and sketch in the new ellipse. 

42. The ellipse $\left( x ^ { 2 } / 9 \right) + \left( y ^ { 2 } / 2 5 \right) = 1$ is shifted 3 units to the left and 2 units down to generate the ellipse 

$$
\frac {(x + 3) ^ {2}}{9} + \frac {(y + 2) ^ {2}}{2 5} = 1.
$$

a. Find the foci, vertices, and center of the new ellipse. 

b. Plot the new foci, vertices, and center, and sketch in the new ellipse. 

43. The hyperbola $\left( x ^ { 2 } / 1 6 \right) - \left( y ^ { 2 } / 9 \right) = 1$ is shifted 2 units to the right to generate the hyperbola 

$$
\frac {(x - 2) ^ {2}}{1 6} - \frac {y ^ {2}}{9} = 1.
$$

a. Find the center, foci, vertices, and asymptotes of the new hyperbola. 

b. Plot the new center, foci, vertices, and asymptotes, and sketch in the hyperbola. 

44. The hyperbola $\left( y ^ { 2 } / 4 \right) - \left( x ^ { 2 } / 5 \right) = 1$ is shifted 2 units down to generate the hyperbola 

$$
\frac {(y + 2) ^ {2}}{4} - \frac {x ^ {2}}{5} = 1.
$$

a. Find the center, foci, vertices, and asymptotes of the new hyperbola. 

b. Plot the new center, foci, vertices, and asymptotes, and sketch in the hyperbola. 

Exercises 45–48 give equations for parabolas and tell how many units up or down and to the right or left each parabola is to be shifted. Find an equation for the new parabola, and find the new vertex, focus, and directrix. 

45. $y ^ { 2 } = 4 x$ , left 2,  down 3 

46. $y ^ { 2 } = - 1 2 x$ , right 4,  up 3 

47. $x ^ { 2 } = 8 y ,$ , right 1,  down 7 

48. $x ^ { 2 } = 6 y$ , left 3,  down  2 

Exercises 49–52 give equations for ellipses and tell how many units up or down and to the right or left each ellipse is to be shifted. Find an equation for the new ellipse, and find the new foci, vertices, and center. 

49. ${ \frac { x ^ { 2 } } { 6 } } + { \frac { y ^ { 2 } } { 9 } } = 1$ , left 2,  down 1 

50. ${ \frac { x ^ { 2 } } { 2 } } + y ^ { 2 } = 1$ , right 3,  up 4 

51. ${ \frac { x ^ { 2 } } { 3 } } + { \frac { y ^ { 2 } } { 2 } } = 1 .$ , right 2,  up 3 

52. ${ \frac { x ^ { 2 } } { 1 6 } } + { \frac { y ^ { 2 } } { 2 5 } } = 1 ,$ left 4,  down 5 

Exercises 53–56 give equations for hyperbolas and tell how many units up or down and to the right or left each hyperbola is to be shifted. Find an equation for the new hyperbola, and find the new center, foci, vertices, and asymptotes. 

53. ${ \frac { x ^ { 2 } } { 4 } } - { \frac { y ^ { 2 } } { 5 } } = 1 ,$ ,  right 2,  up 2 

54. ${ \frac { x ^ { 2 } } { 1 6 } } - { \frac { y ^ { 2 } } { 9 } } = 1$ ,  left 2,  down 1 

55. $y ^ { 2 } - x ^ { 2 } = 1 ,$ ,  left 1,  down 1 

56. ${ \frac { y ^ { 2 } } { 3 } } - x ^ { 2 } = 1 ,$ ,  right 1,  up 3 

Find the center, foci, vertices, asymptotes, and radius, as appropriate, of the conic sections in Exercises 57–68. 

57. $x ^ { 2 } + 4 x + y ^ { 2 } = 1 2$ 

58. $2 x ^ { 2 } + 2 y ^ { 2 } - 2 8 x + 1 2 y + 1 1 4 = 0$ 

59. $x ^ { 2 } + 2 x + 4 y - 3 = 0$ 

$$
\mathbf {6 0 .} y ^ {2} - 4 y - 8 x - 1 2 = 0
$$

61. $x ^ { 2 } + 5 y ^ { 2 } + 4 x = 1$ 

62. $9 x ^ { 2 } + 6 y ^ { 2 } + 3 6 y = 0$ 

63. $x ^ { 2 } + 2 y ^ { 2 } - 2 x - 4 y = - 1$ 

64. $4 x ^ { 2 } + y ^ { 2 } + 8 x - 2 y = - 1$ 

$$
6 5. x ^ {2} - y ^ {2} - 2 x + 4 y = 4
$$

$$
6 7. 2 x ^ {2} - y ^ {2} + 6 y = 3
$$

$$
6 6. x ^ {2} - y ^ {2} + 4 x - 6 y = 6
$$

68. $y ^ { 2 } - 4 x ^ { 2 } + 1 6 x = 2 4$ 

### Theory and Examples

69. If lines are drawn parallel to the coordinate axes through a point P on the parabola $y ^ { 2 } = k x , k > 0 .$ , the parabola partitions the rectangular region bounded by these lines and the coordinate axes into two smaller regions, A and B. 

a. If the two smaller regions are revolved about the y-axis, show that they generate solids whose volumes have the ratio 4:1. 

b. What is the ratio of the volumes generated by revolving the regions about the x-axis? 

![教材插图](/books/thomas-calculus/assets/fd1cdc14cb865d889ef30c5a9765e1a7349e0801bec770278030dae40b3aa829.jpg)


70. Suspension bridge cables hang in parabolas The suspension bridge cable shown in the accompanying figure supports a uniform load of w newtons per horizontal meter. It can be shown that if H is the horizontal tension of the cable at the origin, then the curve of the cable satisfies the equation 

$$
{\frac {d y}{d x}} = {\frac {w}{H}} x.
$$

Show that the cable hangs in a parabola by solving this differential equation subject to the initial condition that $y = 0$ when $x = 0$ 

![教材插图](/books/thomas-calculus/assets/994ed4c4a522f16f8ff93dde09b34e5bb0f7b32873ef04455e296a80102e8eb3.jpg)


71. The width of a parabola at the focus Show that the number $4 p$ is the width of the parabola $x ^ { 2 } = 4 p y ( p > 0 )$ at the focus by showing that the line $y = p$ cuts the parabola at points that are 4p units apart. 

72. The asymptotes of $\left( x ^ { 2 } / a ^ { 2 } \right) - \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ Show that the vertical distance between the line $\begin{array} { r } { \boldsymbol { y } = ( b / a ) \boldsymbol { x } } \end{array}$ and the upper half of the right-hand branch $y = ( b / a ) { \sqrt { x ^ { 2 } - a ^ { 2 } } }$ of the hyperbola $\left( x ^ { 2 } / a ^ { 2 } \right) - \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ approaches 0 by showing that 

$$
\lim _ {x \rightarrow \infty} \left(\frac {b}{a} x - \frac {b}{a} \sqrt {x ^ {2} - a ^ {2}}\right) = \frac {b}{a} \lim _ {x \rightarrow \infty} \left(x - \sqrt {x ^ {2} - a ^ {2}}\right) = 0.
$$

Similar results hold for the remaining portions of the hyperbola and the lines $y = \pm ( b / a ) x$ 

73. Area Find the dimensions of the rectangle of largest area that can be inscribed in the ellipse $x ^ { 2 } + 4 y ^ { 2 } = 4 $ with its sides parallel to the coordinate axes. What is the area of the rectangle? 

74. Volume Find the volume of the solid generated by revolving the region enclosed by the ellipse $9 x ^ { 2 } + 4 y ^ { 2 } = 3 6$ about the (a) x-axis, (b) y-axis. 

75. Volume The “triangular” region in the first quadrant bounded by the x-axis, the line $x = 4$ , and the hyperbola ${ \bar { 9 } } x ^ { 2 } - 4 y ^ { 2 } = 3 6$ is revolved about the x-axis to generate a solid. Find the volume of the solid. 

76. Tangents Show that the tangents to the curve $y ^ { 2 } = 4 p x$ from any point on the line $x = - p$ are perpendicular. 

77. Tangents Find equations for the tangents to the circle $( x - 2 ) ^ { 2 } + ( y - 1 ) ^ { 2 } = 5$ at the points where the circle crosses the coordinate axes. 

78. Volume The region bounded on the left by the y-axis, on the right by the hyperbola $x ^ { 2 } - y ^ { 2 } = 1$ , and above and below by the lines $y = \pm 3$ is revolved about the y-axis to generate a solid. Find the volume of the solid. 

79. Centroid Find the centroid of the region that is bounded below by the x-axis and above by the ellipse $\left( x ^ { 2 } / 9 \right) + \left( y ^ { 2 } / 1 6 \right) = 1$ 

## 10.7 Conics in Polar Coordinates

80. Surface area The curve $y = \sqrt { x ^ { 2 } + 1 } , 0 \leq x \leq \sqrt { 2 }$ , which is part of the upper branch of the hyperbola $y ^ { 2 } - x ^ { 2 } = 1$ ,  is revolved about the x-axis to generate a surface. Find the area of the surface. 

81. The reflective property of parabolas The accompanying figure shows a typical point $P ( x _ { 0 } , y _ { 0 } )$ on the parabola $y ^ { 2 } = 4 p x .$ The line L is tangent to the parabola at P. The parabola’s focus lies at $F ( p , 0 )$ . The ray $L ^ { \prime }$ extending from P to the right is parallel to the x-axis. We show that light from $F$ to $P$ will be reflected out along $L ^ { \prime }$ by showing that $\beta$ equals $\alpha .$ Establish this equality by taking the following steps. 

a. Show that tan $\beta = 2 p / y _ { 0 }$ 

b. Show that tan $\phi = y _ { 0 } / ( x _ { 0 } - p )$ 

c. Use the identity 

$$
\tan \alpha = \frac {\tan \phi - \tan \beta}{1 + \tan \phi \tan \beta}
$$

to show that tan $\alpha = 2 p / y _ { 0 }$ 

Since $\alpha$ and $\beta$ are both acute, tan tanβ α= implies $\beta = \alpha$ 

### Eccentricity

This reflective property of parabolas is used in applications like car headlights, radio telescopes, and satellite TV dishes. 

![教材插图](/books/thomas-calculus/assets/fd87551dd6ff071d20eb553243411d67c36600254b8067b481f11a39e114d615.jpg)


Polar coordinates are especially important in astronomy and astronautical engineering because satellites, moons, planets, and comets all move approximately along ellipses, parabolas, and hyperbolas that can be described with a single relatively simple polar coordinate equation. We develop that equation here after first introducing the idea of a conic section’s eccentricity. The eccentricity reveals the conic section’s type (circle, ellipse, parabola, or hyperbola) and the degree to which it is “squashed” or flattened. 

Although the center-to-focus distance c does not appear in the standard Cartesian equation 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1, \quad (a > b)
$$

for an ellipse, we can still determine c from the equation $c = { \sqrt { a ^ { 2 } - b ^ { 2 } } }$ . If we fix a and vary c over the interval $0 \leq c \leq a .$ , the resulting ellipses will vary in shape. They are circles i $: c = 0$ (so that $a = b )$ and flatten, becoming more oblong, as c increases. I $: c = a ,$ the foci and vertices overlap and the ellipse degenerates into a line segment. Thus we are led to consider the ratio $e \mathrm { ~ = ~ } c / a$ . We use this ratio for hyperbolas as well, except in this case c equals $\sqrt { a ^ { 2 } + b ^ { 2 } }$ instead of $\sqrt { a ^ { 2 } - b ^ { 2 } }$ . We refer to this ratio as the eccentricity of the ellipse or hyperbola. 

![教材插图](/books/thomas-calculus/assets/90a28fce3b9532756cdd12c28dd5da82641a9f00fb2ebc8abe47566d765a50a6.jpg)



FIGURE 10.48 The distance from the focus F to any point P on a parabola equals the distance from P to the nearest point D on the directrix, so $P F = P D$


![教材插图](/books/thomas-calculus/assets/dc9b418f9893a0ebc604cdc5afbb1eca2eddffc1b85ccc5dce37ec8875d623ca.jpg)



FIGURE 10.49 The foci and directrices of the ellipse $\left( x ^ { 2 } / a ^ { 2 } \right) + \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ Directrix 1 corresponds to focus $F _ { 1 }$ and directrix 2 to focus $F _ { 2 }$


![教材插图](/books/thomas-calculus/assets/c0c17a0ab70d1763dc5543108595761ead296ed0f1e51e0731164973372195fd.jpg)



FIGURE 10.50 The foci and directrices of the hyperbola $\left( x ^ { 2 } / a ^ { 2 } \right) - \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ No matter where P lies on the hyperbola, $P F _ { 1 } = e \cdot P D _ { 1 } \mathrm { a n d } P F _ { 2 } = e \cdot P D _ { 2 } .$


> ## ***DEFINITION***
>
> The eccentricity of the ellipse $\left( x ^ { 2 } / a ^ { 2 } \right) + \left( y ^ { 2 } / b ^ { 2 } \right) = 1 \left( a > b \right) \mathbf { i }$ s 
>
> $$
> e = \frac {c}{a} = \frac {\sqrt {a ^ {2} - b ^ {2}}}{a}.
> $$
>
> The eccentricity of the hyperbola $\left( x ^ { 2 } / a ^ { 2 } \right) - \left( y ^ { 2 } / b ^ { 2 } \right) = 1$ is 
>
> $$
> e = \frac {c}{a} = \frac {\sqrt {a ^ {2} + b ^ {2}}}{a}.
> $$
>
> The eccentricity of a parabola is $e = 1$ 
>
Whereas a parabola has one focus and one directrix, each ellipse has two foci and two directrices. These are the lines perpendicular to the major axis at distances $\pm a / e$ from the center. From Figure 10.48 we see that a parabola has the property 

$$
P F = 1 \cdot P D\tag{1}
$$

for any point P on it, where F is the focus and D is the point nearest P on the directrix. For an ellipse, it can be shown that the equations that replace Equation (1) are 

$$
P F _ {1} = e \cdot P D _ {1}, \quad P F _ {2} = e \cdot P D _ {2}.\tag{2}
$$

Here, e is the eccentricity, P is any point on the ellipse, $F _ { 1 }$ and $F _ { 2 }$ are the foci, and $D _ { 1 }$ and $D _ { 2 }$ are the points on the directrices nearest P (Figure 10.49). 

In both Equations (2) the directrix and focus must correspond; that is, if we use the distance from $P$ to $F _ { 1 } { \mathrm { : } }$ , we must also use the distance from P to the directrix at the same end of the ellipse. The directrix $x = - a / e$ corresponds to $F _ { 1 } ( - c , 0 )$ , and the directrix $x = a / e$ corresponds to $F _ { 2 } ( c , 0 )$ 

As with the ellipse, it can be shown that the lines $x = \pm a / e$ act as directrices for the hyperbola and that 

$$
P F _ {1} = e \cdot P D _ {1} \quad \text { and } \quad P F _ {2} = e \cdot P D _ {2}.\tag{3}
$$

Here P is any point on the hyperbola, $F _ { 1 }$ and $F _ { 2 }$ are the foci, and $D _ { 1 }$ and $D _ { 2 }$ are the points nearest P on the directrices (Figure 10.50). 

In both the ellipse and the hyperbola, the eccentricity is the ratio of the distance between the foci to the distance between the vertices (because $c / a = 2 c / 2 a )$ 

$$
\text { Eccentricity } = \frac {\text { distance   between   foci }}{\text { distance   between   vertices }}
$$

In an ellipse, the foci are closer together than the vertices and the ratio is less than 1. In a hyperbola, the foci are farther apart than the vertices and the ratio is greater than 1. 

The “focus–directrix” equation $P F = e \cdot P D$ unites the parabola, ellipse, and hyperbola in the following way. Suppose that the distance PF of a point P from a fixed point F (the focus) is a constant multiple of its distance from a fixed line (the directrix). That is, suppose 

$$
P F = e \cdot P D,\tag{4}
$$

where e is the constant of proportionality. Then the path traced by P is 

(a) a parabola if $e = 1$ 

(b) an ellipse of eccentricity e if $e \textless 1$ , and 

(c) a hyperbola of eccentricity e if $e > 1$ 

![教材插图](/books/thomas-calculus/assets/b539eef5c320547b53ca83bbf95550b364f0e5d6857a632c30475ac65392458b.jpg)



FIGURE 10.51 The hyperbola and directrix in Example 1.


![教材插图](/books/thomas-calculus/assets/a6810aea1e817a4e5ed2eb80d83100ff69c960661938a432ddf4d7de7707277a.jpg)



FIGURE 10.52 If a conic section is put in the position with its focus placed at the origin and a directrix perpendicular to the initial ray and right of the origin, we can find its polar equation from the conic’s focus–directrix equation.


As e increases $( e  1 ^ { - } )$ , ellipses become more oblong, and $( e \ \to \ \infty )$ hyperbolas flatten toward two lines parallel to the directrix. There are no coordinates in Equation (4), and when we try to translate it into Cartesian coordinate form, it translates in different ways depending on the size of e. However, as we are about to see, in polar coordinates the equation $P F = e \cdot P D$ translates into a single equation regardless of the value of e. 

Given the focus and corresponding directrix of a hyperbola centered at the origin and with foci on the x-axis, we can use the dimensions shown in Figure 10.50 to find e. Knowing $e ,$ we can derive a Cartesian equation for the hyperbola from the equation $ P F = e \cdot P D _ { \mathrm { ~ \scriptsize ~ \cdot ~ } }$ , as in the next example. We can find equations for ellipses centered at the origin and with foci on the x-axis in a similar way, using the dimensions shown in Figure 10.49. 

**EXAMPLE 1** Find a Cartesian equation for the hyperbola centered at the origin that has a focus at 3, 0( ) and the line $x = 1$ as the corresponding directrix. 

**Solution** We first use the dimensions shown in Figure 10.50 to find the hyperbola’s eccentricity. The focus is (see Figure 10.51) 

$$
(c, 0) = (3, 0), \quad \text { so } \quad c = 3.
$$

Again from Figure 10.50, the directrix is the line 

$$
x = \frac {a}{e} = 1, \quad \text { so } \quad a = e.
$$

When combined with the equation $e \mathrm { ~ = ~ } c / a$ that defines eccentricity, these results give 

$$
e = \frac {c}{a} = \frac {3}{e}, \quad \text { so } \quad e ^ {2} = 3 \quad \text { and } \quad e = \sqrt {3}.
$$

Knowing e, we can now derive the equation we want from the equation $P F = e \cdot P D$ In the coordinates of Figure 10.51, we have 

$$
\begin{array}{c l} P F = e \cdot P D & \text { Eq. (4) } \\ \sqrt {(x - 3) ^ {2} + (y - 0) ^ {2}} = \sqrt {3} | x - 1 | & e = \sqrt {3} \\ x ^ {2} - 6 x + 9 + y ^ {2} = 3 (x ^ {2} - 2 x + 1) & \text { Square both sides. } \\ 2 x ^ {2} - y ^ {2} = 6 & \text { Simplify. } \\ \frac {x ^ {2}}{3} - \frac {y ^ {2}}{6} = 1. \end{array}
$$

### Polar Equations

To find a polar equation for an ellipse, parabola, or hyperbola, we place one focus at the origin and the corresponding directrix to the right of the origin along the vertical line $x = k$ (Figure 10.52). In polar coordinates, this makes 

$$
P F = r
$$

and 

$$
P D = k - F B = k - r \cos \theta .
$$

The conic’s focus–directrix equation $P F = e \cdot P D$ then becomes 

$$
r = e (k - r \cos \theta),
$$

which can be solved for r to obtain the following expression. 

Polar Equation for a Conic with Eccentricity e 

$$
r = \frac {k e}{1 + e \cos \theta},\tag{5}
$$

where $x = k > 0$ is the vertical directrix. 

![教材插图](/books/thomas-calculus/assets/6b86cacdcdbfe4a826e87630b170ded875a37bf2495dd731363b491c611e1b63.jpg)


![教材插图](/books/thomas-calculus/assets/243955dc67661baec11606661a4f736ed35aba2e6b7f9fb5929bdbf258963c58.jpg)


![教材插图](/books/thomas-calculus/assets/e7c5f3df9324bc6f08cbf2b8498c18993aa1b6ded73081765c5197c85bf7c7c1.jpg)


![教材插图](/books/thomas-calculus/assets/9bb195b62f0769199bff8dd82ee429c6b704aa871e7245f4f8fdece99be2dbb4.jpg)


FIGURE 10.53 Equations for conic sections with eccentricity $e > 0$ but different locations of the directrix. The graphs here show a parabola, so e = 1. 

![教材插图](/books/thomas-calculus/assets/d91b8df880980649a08749554f9fbee4c529c2d3204ad545a8591e91e468b0ae.jpg)


FIGURE 10.54 In an ellipse with semimajor axis a, the focus–directrix distance is $k = \left( a / e \right) - e a , \mathrm { s o } k e = a ( 1 - e ^ { 2 } )$ 

**EXAMPLE 2** Here are polar equations for three conics. The eccentricity values identifying the conic are the same for both polar and Cartesian coordinates. 

$$
\begin{array}{l l l} e = \frac {1}{2}: & \text {ellipse} & r = \frac {k}{2 + \cos \theta} \\ e = 1: & \text {parabola} & r = \frac {k}{1 + \cos \theta} \\ e = 2: & \text {hyperbola} & r = \frac {2 k}{1 + 2 \cos \theta} \end{array}
$$

You may see variations of Equation (5), depending on the location of the directrix. If the directrix is the line $x = - k$ to the left of the origin (the origin is still a focus), we replace Equation (5) with 

$$
r = \frac {k e}{1 - e \cos \theta}.
$$

The denominator now has a ( ) instead of a − ( ). If the directrix is either of the lines+ $y = k$ or y $ \mathbf { \partial } \cdot = - k .$ , the equations have sines in them instead of cosines, as shown in Figure 10.53. 

**EXAMPLE 3** Find an equation for the hyperbola with eccentricity $3 / 2$ and directrix $x = 2$ 

**Solution** We use Equation (5) with $k = 2$ and $e \mathrm { ~ = ~ } 3 / 2$ 

$$
r = \frac {2 (3 / 2)}{1 + (3 / 2) \cos \theta} \quad \text { or } \quad r = \frac {6}{2 + 3 \cos \theta}.
$$

**EXAMPLE 4** Find the directrix of the parabola $r = { \frac { 2 5 } { 1 0 + 1 0 \cos \theta } } .$ 

**Solution** We divide the numerator and denominator by 10 to put the equation in standard polar form: 

$$
r = \frac {5 / 2}{1 + \cos \theta}.
$$

This is the equation 

$$
r = \frac {k e}{1 + e \cos \theta}
$$

with $k = 5 / 2$ and $e = 1$ . The equation of the directrix is $x = 5 / 2$ 

From the ellipse diagram in Figure 10.54, we see that k is related to the eccentricity e and the semimajor axis a by the equation 

$$
k = \frac {a}{e} - e a.
$$

From this, we find that $k e \mathrm { ~ = ~ } a ( 1 - e ^ { 2 } )$ .  Replacing ke in Equation (5) by $a ( 1 - e ^ { 2 } )$ gives the standard polar equation for an ellipse. 

![教材插图](/books/thomas-calculus/assets/6b91686c1ad74a90ce2ea839ff3217a0fc50e8b57661565fcb8f90c1eafb1179.jpg)



FIGURE 10.55 We can obtain a polar equation for line L by reading the relation $r _ { 0 } = r \cos ( \theta - \theta _ { 0 } )$ ) from the right triangle $O P _ { 0 } P _ { \mathrm { \ell } }$


![教材插图](/books/thomas-calculus/assets/4077055c08c0664418176c6edcc27b2028ca33a44e7009e3272e86a6944bb9f8.jpg)



FIGURE 10.56 We can get a polar equation for this circle by applying the Law of Cosines to triangle $O P _ { 0 } P$


Polar Equation for the Ellipse with Eccentricity e and Semimajor Axis a 

$$
r = \frac {a (1 - e ^ {2})}{1 + e \cos \theta}\tag{6}
$$

Notice that when $e = 0$ , Equation (6) becomes $r = a $ , which represents a circle. 

### Lines

Suppose the perpendicular from the origin to line L meets L at the point $P _ { 0 } ( r _ { 0 } , \theta _ { 0 } )$ , with $r _ { 0 } \geq 0$ (Figure 10.55). Then, if $P ( r , \theta )$ is any other point on L, the points $P , P _ { 0 }$ , and O are the vertices of a right triangle, from which we can read the relation 

$$
r _ {0} = r \cos (\theta - \theta_ {0}).
$$

The Standard Polar Equation for Lines 

If the point $P _ { 0 } ( r _ { 0 } , \theta _ { 0 } )$ is the foot of the perpendicular from the origin to the line $L ,$ and $r _ { 0 } \geq 0$ , then an equation for L is 

$$
r \cos (\theta - \theta_ {0}) = r _ {0}.\tag{7}
$$

For example, if $\theta _ { 0 } = \pi / 3$ and $r _ { 0 } = 2$ , we find that 

$$
\begin{array}{c} r \cos \left(\theta - \frac {\pi}{3}\right) = 2 \\ r \left(\cos \theta \cos \frac {\pi}{3} + \sin \theta \sin \frac {\pi}{3}\right) = 2 \\ \frac {1}{2} r \cos \theta + \frac {\sqrt {3}}{2} r \sin \theta = 2, \quad \text { or } \quad x + \sqrt {3} y = 4. \end{array}
$$

### Circles

To find a polar equation for the circle of radius a centered at $P _ { 0 } ( r _ { 0 } , \theta _ { 0 } )$ , we let $P ( r , \theta )$ be a point on the circle and apply the Law of Cosines to triangle $O P _ { 0 } P$ (Figure 10.56). This gives 

$$
a ^ {2} = r _ {0} ^ {2} + r ^ {2} - 2 r _ {0} r \cos (\theta - \theta_ {0}).
$$

If the circle passes through the origin, then $r _ { 0 } = a$ and this equation simplifies to 

$$
\begin{array}{l} a ^ {2} = a ^ {2} + r ^ {2} - 2 a r \cos (\theta - \theta_ {0}) \\ r ^ {2} = 2 a r \cos (\theta - \theta_ {0}) \\ r = 2 a \cos (\theta - \theta_ {0}). \end{array}
$$

If the circle’s center lies on the positive x-axis, $\theta _ { 0 } = 0$ , and we get the further simplification 

$$
r = 2 a \cos \theta .\tag{8}
$$

If the center lies on the positive y-axis, $\theta = \pi / 2 , \cos ( \theta - \pi / 2 ) = \sin \theta$ , and the equation $r = 2 a \cos ( \theta - \theta _ { 0 } )$ becomes 

$$
r = 2 a \sin \theta .\tag{9}
$$

Equations for circles through the origin centered on the negative x- and y-axes can be obtained by replacing r with −r in the above equations. 


**EXAMPLE 5** Here are several polar equations given by Equations (8) and (9) for circles through the origin and having centers that lie on the x- or y-axis.


<table><tr><td>Radius</td><td>Center(polar coordinates)</td><td>Polar equation</td></tr><tr><td>3</td><td>(3, 0)</td><td><eq>r = 6 \cos \theta</eq></td></tr><tr><td>2</td><td>(2, <eq>\pi/2</eq>)</td><td><eq>r = 4 \sin \theta</eq></td></tr><tr><td>1/2</td><td>(-1/2, 0)</td><td><eq>r = -\cos \theta</eq></td></tr><tr><td>1</td><td>(-1, <eq>\pi/2</eq>)</td><td><eq>r = -2 \sin \theta</eq></td></tr></table>

### EXERCISES 10.7

#### Ellipses and Eccentricity

In Exercises 1–8, find the eccentricity of the ellipse. Then find and graph the ellipse’s foci and directrices. 

1. $1 6 x ^ { 2 } + 2 5 y ^ { 2 } = 4 0 0$ 

2. 7x y + = 16 112 2 2 

3. $2 x ^ { 2 } + y ^ { 2 } = 2$ 

4. 2 4 x y 2 2 + = 

5. $3 x ^ { 2 } + 2 y ^ { 2 } = 6$ 

6. $9 x ^ { 2 } + 1 0 y ^ { 2 } = 9 0 $ 

7. $6 x ^ { 2 } + 9 y ^ { 2 } = 5 4$ 

8. 169 25 4225x y2 2 + = 

Exercises 9–12 give the foci or vertices and the eccentricities of ellipses centered at the origin of the xy-plane. In each case, find the ellipse’s standard-form equation in Cartesian coordinates. 

9. Foci: ( ) 0,  3 ± Eccentricity: 0.5 

10. Foci: ( ) ±8, 0 Eccentricity: 0.2 

Exercises 13–16 give foci and corresponding directrices of ellipses centered at the origin of the xy-plane. In each case, use the dimensions in Figure 10.49 to find the eccentricity of the ellipse. Then find the ellipse’s standard-form equation in Cartesian coordinates. 

11. Vertices: ( ) 0,  70± Eccentricity: 0.1 

13. Focus: $( \sqrt { 5 } , 0 )$ Directrix: $x = { \frac { 9 } { \sqrt { 5 } } }$ 

14. Focus: ( ) 4, 0 

$$
x = \frac {1 6}{3}
$$

15. Focus: ( ) −4, 0 Directrix: $x = - 1 6$ 

16. Focus: $\left( - { \sqrt { 2 } } , 0 \right)$ Directrix: $x = - 2 { \sqrt { 2 } }$ 

Hyperbolas and Eccentricity 

In Exercises 17–24, find the eccentricity of the hyperbola. Then find and graph the hyperbola’s foci and directrices. 17. $x ^ { 2 } - y ^ { 2 } = 1$ 18. $9 x ^ { 2 } - 1 6 y ^ { 2 } = 1 4 4$ 19. $y ^ { 2 } - x ^ { 2 } = 8$ 20. $y ^ { 2 } - x ^ { 2 } = 4$ 

21. $8 x ^ { 2 } - 2 y ^ { 2 } = 1 6$ 

$$
8 y ^ {2} - 2 x ^ {2} = 1 6
$$

22. $y ^ { 2 } - 3 x ^ { 2 } = 3$ 24. $6 4 x ^ { 2 } - 3 6 y ^ { 2 } = 2 3 0 4$ 

Exercises 25–28 give the eccentricities and the vertices or foci of hyperbolas centered at the origin of the xy-plane. In each case, find the hyperbola’s standard-form equation in Cartesian coordinates. 

25. Eccentricity: 3 Vertices: ( ) 0,  1 ± 

26. Eccentricity: 2 Vertices: ( ) ±2, 0 

27. Eccentricity: 3 Foci: ( ) ±3, 0 

28. Eccentricity: 1.25 Foci: ( ) 0,  5 ± 

#### Eccentricities and Directrices

Exercises 29–36 give the eccentricities of conic sections with one focus at the origin along with the directrix corresponding to that focus. Find a polar equation for each conic section. 

29. $e = 1, x = 2$

30. $e = 1, \quad y = 2$

31. $e = 5, \quad y = - 6$

32. $e = 2, \quad x = 4$

33. $e = 1 / 2, \quad x = 1$

34. $e = 1 / 4, x = - 2$

35. $e = 1 / 5, \quad y = - 1 0$

36. $e = 1 / 3, \quad y = 6$

Parabolas and Ellipses 

Sketch the parabolas and ellipses in Exercises 37–44. Include the directrix that corresponds to the focus at the origin. Label the vertices with appropriate polar coordinates. Label the centers of the ellipses as well. 

37. $r = { \frac { 1 } { 1 + \cos \theta } }$ 

38. $r = { \frac { 6 } { 2 + \cos \theta } }$ 

39. $r = { \frac { 2 5 } { 1 0 - 5 \cos \theta } }$ 

40. $r = { \frac { 4 } { 2 - 2 \cos \theta } }$ 

41. $r = { \frac { 4 0 0 } { 1 6 + 8 \sin \theta } }$ 

42. $r = { \frac { 1 2 } { 3 + 3 \sin \theta } }$ 

43. $r = { \frac { 8 } { 2 - 2 \sin \theta } }$ 

44. $r = { \frac { 4 } { 2 - \sin \theta } }$ 

Lines 

Sketch the lines in Exercises 45–48 and find Cartesian equations for them. 

45. $r \cos \left( \theta - { \frac { \pi } { 4 } } \right) = { \sqrt { 2 } }$ 

46. $r \cos \Bigl ( \theta + { \frac { 3 \pi } { 4 } } \Bigr ) = 1$ 

47. $r \cos \Bigl ( \theta - { \frac { 2 \pi } { 3 } } \Bigr ) = 3$ 

48. $r \cos \Bigl ( \theta + { \frac { \pi } { 3 } } \Bigr ) = 2$ 

Find a polar equation in the form r cos $( \theta - \theta _ { 0 } ) = r _ { 0 }$ for each of the lines in Exercises 49–52. 

49. ${ \sqrt { 2 } } x + { \sqrt { 2 } } y = 6$ 

50. ${ \sqrt { 3 } } x - y = 1$ 

51. $y = - 5$ 

52. $x = - 4$ 

Circles 

Sketch the circles in Exercises 53–56. Give polar coordinates for their centers and identify their radii 

53. $r = 4 \cos \theta$ 

54. $r = 6 \sin \theta$

55. $r = - 2 \cos \theta$

56. $r = - 8 \sin \theta$

Find polar equations for the circles in Exercises 57–64. Sketch each circle in the coordinate plane and label it with both its Cartesian and polar equations. 

57. $(x - 6) ^ {2} + y ^ {2} = 3 6$

58. $(x + 2) ^ {2} + y ^ {2} = 4$

59. $x ^ {2} + (y - 5) ^ {2} = 2 5$

60. $x ^ {2} + (y + 7) ^ {2} = 4 9$

61. $x ^ {2} + 2 x + y ^ {2} = 0$

62. $x ^ {2} - 1 6 x + y ^ {2} = 0$

63. $x ^ {2} + y ^ {2} + y = 0$

64. $x ^ {2} + y ^ {2} - \frac {4}{3} y = 0$

Examples of Polar Equations 

Graph the lines and conic sections in Exercises 65–74.T 

65. $r = 3 \sec ( \theta - \pi / 3 )$ 

66. $r = 4 \sec (\theta + \pi / 6)$

67. $r = 4 \sin \theta$ 

68. $r = - 2 \cos \theta$

69. $r = 8 / ( 4 + \cos \theta )$

70. $r = 8 / (4 + \sin \theta)$

## CHAPTER 10 Questions to Guide Your Review

1. What is a parametrization of a curve in the xy-plane? Does a function $y = f ( x )$ always have a parametrization? Are parametrizations of a curve unique? Give examples. 

2. Give some typical parametrizations for lines, circles, parabolas, ellipses, and hyperbolas. How might the parametrized curve differ from the graph of its Cartesian equation? 

3. What is a cycloid? What are typical parametric equations for cycloids? What physical properties account for the importance of cycloids? 

4. What is the formula for the slope $d y / d x$ of a parametrized curve $x = f ( t ) , y = g ( t ) ?$ When does the formula apply? When can you expect to be able to find $d ^ { 2 } y / d x ^ { 2 }$ as well? Give examples. 

5. How can you sometimes find the area bounded by a parametrized curve and one of the coordinate axes? 

71. $r = 1 / ( 1 - \sin \theta )$ 

$$
7 2. r = 1 / (1 + \cos \theta)
$$

73. $r = 1 / ( 1 + 2 \sin \theta )$ 

$$
7 4. r = 1 / (1 + 2 \cos \theta)
$$

75. Perihelion and aphelion A planet travels about its sun in an ellipse whose semimajor axis has length a. (See accompanying figure.) 

a. Show that $r = a ( 1 - e )$ when the planet is closest to the sun and that $r = a ( 1 + e )$ when the planet is farthest from the sun. 

b. Use the data in the table in Exercise 76 to find how close each planet in our solar system comes to the sun and how far away each planet gets from the sun. 

![教材插图](/books/thomas-calculus/assets/353ad83af72f610ea28f7f0ad820d59907570508688c1ac448a65911fc7d68ea.jpg)


76. Planetary orbits Use the data in the table below and Equation (6) to find polar equations for the orbits of the planets. 

<table><tr><td>Planet</td><td>Semimajor axis (astronomical units)</td><td>Eccentricity</td></tr><tr><td>Mercury</td><td>0.3871</td><td>0.2056</td></tr><tr><td>Venus</td><td>0.7233</td><td>0.0068</td></tr><tr><td>Earth</td><td>1.000</td><td>0.0167</td></tr><tr><td>Mars</td><td>1.524</td><td>0.0934</td></tr><tr><td>Jupiter</td><td>5.203</td><td>0.0484</td></tr><tr><td>Saturn</td><td>9.539</td><td>0.0543</td></tr><tr><td>Uranus</td><td>19.18</td><td>0.0460</td></tr><tr><td>Neptune</td><td>30.06</td><td>0.0082</td></tr></table>

6. How do you find the length of a smooth parametrized curve $x = f ( t ) , y = g ( t ) , a \leq t \leq b ?$ What does smoothness have to do with length? What else do you need to know about the parametrization in order to find the curve’s length? Give examples. 

7. What is the arc length function for a smooth parametrized curve? What is its arc length differential? 

8. Under what conditions can you find the area of the surface generated by revolving a curve $x = f ( t ) , y = g ( t ) , a \leq t \leq b .$ about the x-axis? the y-axis? Give examples. 

9. What are polar coordinates? What equations relate polar coordinates to Cartesian coordinates? Why might you want to change from one coordinate system to the other? 

10. What consequence does the lack of uniqueness of polar coordinates have for graphing? Give an example. 

11. How do you graph equations in polar coordinates? Include in your discussion symmetry, slope, behavior at the origin, and the use of Cartesian graphs. Give examples. 

12. How do you find the area of a region $0 \leq r _ { 1 } ( \theta ) \leq r \leq r _ { 2 } ( \theta )$ $\alpha \leq \theta \leq \beta ,$ in the polar coordinate plane? Give examples. 

13. Under what conditions can you find the length of a curve $r = f ( \theta ) , \alpha \leq \theta \leq \beta ,$ in the polar coordinate plane? Give an example of a typical calculation. 

14. What is a parabola? What are the Cartesian equations for parabolas whose vertices lie at the origin and whose foci lie on the coordinate axes? How can you find the focus and directrix of such a parabola from its equation? 

15. What is an ellipse? What are the Cartesian equations for ellipses centered at the origin with foci on one of the coordinate axes? 

How can you find the foci, vertices, and directrices of such an ellipse from its equation? 

16. What is a hyperbola? What are the Cartesian equations for hyperbolas centered at the origin with foci on one of the coordinate axes? How can you find the foci, vertices, and directrices of such an ellipse from its equation? 

17. What is the eccentricity of a conic section? How can you classify conic sections by eccentricity? How does eccentricity change the shape of ellipses and hyperbolas? 

18. Explain the equation $P F = e \cdot P D .$ 

19. What are the standard equations for lines and conic sections in polar coordinates? Give examples. 

## CHAPTER 10 Practice Exercises

### Identifying Parametric Equations in the Plane

Exercises 1–6 give parametric equations and parameter intervals for the motion of a particle in the xy-plane. Identify the particle’s path by finding a Cartesian equation for it. Graph the Cartesian equation and indicate the direction of motion and the portion traced by the particle. 

1. $x = t / 2, \quad y = t + 1, \quad - \infty <   t <   \infty$

2. $x = \sqrt {t}, y = 1 - \sqrt {t}, t \geq 0$

3. $x = (1 / 2) \tan t, \quad y = (1 / 2) \sec t, \quad - \pi / 2 < t < \pi / 2$

4. $x = - 2 \cos t, y = 2 \sin t, 0 \leq t \leq \pi$

5. $x = - \cos t, y = \cos^ {2} t, 0 \leq t \leq \pi$

6. $x = 4 \cos t, y = 9 \sin t, 0 \leq t \leq 2 \pi$

Finding Parametric Equations and Tangent Lines 

7. Find parametric equations and a parameter interval for the motion of a particle in the xy-plane that traces the ellipse $1 6 x ^ { 2 } + 9 y ^ { 2 } = 1 4 4$ once counterclockwise. (There are many ways to do this.) 

8. Find parametric equations and a parameter interval for the motion of a particle that starts at the point ( ) −2, 0 in the xy-plane and traces the circle $x ^ { 2 } + y ^ { 2 } = 4 $ three times clockwise. (There are many ways to do this.) 

In Exercises 9 and 10, find an equation for the line in the xy-plane that is tangent to the curve at the point corresponding to the given value of t. Also, find the value of $d ^ { 2 } y / d x ^ { 2 }$ at this point. 

9. $x = (1 / 2) \tan t, \quad y = (1 / 2) \sec t, \quad t = \pi / 3$

10. $x = 1 + 1 / t ^ {2}, \quad y = 1 - 3 / t, \quad t = 2$

11. Eliminate the parameter to express the curve in the form $y = f ( x )$ 

12. Find parametric equations for the given curve. 

b. x = = cos , tan t y t 

$$
\mathbf {a}. x = 4 t ^ {2}, y = t ^ {3} - 1
$$

a. Line through ( ) 1,  2 with slope 3 − 

$$
\mathbf {b}. (x - 1) ^ {2} + (y + 2) ^ {2} = 9
$$

$$
\mathbf {c}. y = 4 x ^ {2} - x
$$

$$
\mathbf {d}. 9 x ^ {2} + 4 y ^ {2} = 3 6
$$

### Lengths of Curves

Find the lengths of the curves in Exercises 13–19. 

13. $y = x ^ {1 / 2} - (1 / 3) x ^ {3 / 2}, 1 \leq x \leq 4$

14. $x = y ^ {2 / 3}, 1 \leq y \leq 8$

15. $y = (5 / 1 2) x ^ {6 / 5} - (5 / 8) x ^ {4 / 5}, \quad 1 \leq x \leq 3 2$

16. $x = (y ^ {3} / 1 2) + (1 / y), 1 \leq y \leq 2$

17. x = − = − ≤ ≤ 5 cos cos 5 , 5 sin sin 5 , 0 2 t t y t t t π 

18. $x = t ^ {3} - 6 t ^ {2}, \quad y = t ^ {3} + 6 t ^ {2}, \quad 0 \leq t \leq 1$

19. $x = 3 \cos \theta , y = 3 \sin \theta , 0 \leq \theta \leq \frac {3 \pi}{2}$

20. Find the length of the enclosed loop $x = t ^ { 2 } , y = \left( t ^ { 3 } / 3 \right) - t$ shown here. The loop starts at $t = - \sqrt { 3 }$ and ends at $t = \sqrt { 3 }$ 

![教材插图](/books/thomas-calculus/assets/3b5bfeb7271c7db2777209e4d8dbd6cae5c508712c1fb89973075ac27511c928.jpg)


Surface Areas 

Find the areas of the surfaces generated by revolving the curves in Exercises 21 and 22 about the indicated axes. 

21. $x = t ^ { 2 } / 2 , y = 2 t , 0 \leq t \leq { \sqrt { 5 } } ,$ x  -axis 

22. $x = t ^ { 2 } + 1 / ( 2 t ) , y = 4 \sqrt { t } , 1 / \sqrt { 2 } \leq t \leq 1 ,$ y , -axis 

### Polar to Cartesian Equations

Sketch the lines in Exercises 23–28. Also, find a Cartesian equation for each line. 

23. $r \cos \left(\theta + \frac {\pi}{3}\right) = 2 \sqrt {3}$

24. $r \cos \left(\theta - \frac {3 \pi}{4}\right) = \frac {\sqrt {2}}{2}$

25. $r = 2 \sec \theta$ 

$$
2 6. r = - \sqrt {2} \sec \theta
$$

$$
2 7. r = - (3 / 2) \csc \theta
$$

28. $r = (3 \sqrt {3}) \csc \theta$

Find Cartesian equations for the circles in Exercises 29–32. Sketch each circle in the coordinate plane and label it with both its Cartesian and polar equations. 

$$
2 9. r = - 4 \sin \theta
$$

30. $r = 3 \sqrt {3} \sin \theta$

31. $r = 2 \sqrt {2} \cos \theta$

$$
3 2. r = - 6 \cos \theta
$$

Cartesian to Polar Equations 

Find polar equations for the circles in Exercises 33–36. Sketch each circle in the coordinate plane and label it with both its Cartesian and polar equations. 

$$
3 3. x ^ {2} + y ^ {2} + 5 y = 0
$$

$$
3 4. x ^ {2} + y ^ {2} - 2 y = 0
$$

$$
3 5. x ^ {2} + y ^ {2} - 3 x = 0
$$

$$
3 6. x ^ {2} + y ^ {2} + 4 x = 0
$$

Graphs in Polar Coordinates 

Sketch the regions defined by the polar coordinate inequalities in Exercises 37 and 38. 

$$
3 7. 0 \leq r \leq 6 \cos \theta
$$

38. $- 4 \sin \theta \leq r \leq 0$

Match each graph in Exercises 39–46 with the appropriate equation (a)–(l). There are more equations than graphs, so some equations will not be matched. 

$$
\mathbf {a}. r = \cos 2 \theta
$$

$$
\mathbf {b}. r \cos \theta = 1
$$

$$
\mathbf {c}. r = \frac {6}{1 - 2 \cos \theta}
$$

$$
\mathbf {d}. r = \sin 2 \theta
$$

$$
\mathbf {e .} r = \theta
$$

$$
\mathbf {f}. r ^ {2} = \cos 2 \theta
$$

$$
\mathbf {g}. r = 1 + \cos \theta
$$

$$
\mathbf {h}. r = 1 - \sin \theta
$$

$$
\mathbf {i .} r = \frac {2}{1 - \cos \theta}
$$

$$
\mathbf {j}. r ^ {2} = \sin 2 \theta
$$

$$
\mathbf {k}. r = - \sin \theta
$$

$$
\mathbf {l}. r = 2 \cos \theta + 1
$$

39. Four-leaved rose 

40. Spiral 

![教材插图](/books/thomas-calculus/assets/dd28a216c1682053069c9827c6e39493c5c4c65fac79ea012277d25b7ad3d378.jpg)


![教材插图](/books/thomas-calculus/assets/27674c2b4d453b2daa867ef12bb953ee1420d9d221dbf662c41d240bdd7b5e31.jpg)


41. Limaçon 

42. Lemniscate 

![教材插图](/books/thomas-calculus/assets/a76803baf643238080a71eee7b0130940a3e9d26c76ff0c97b82f9ca605db6b2.jpg)


![教材插图](/books/thomas-calculus/assets/c003ba3c8f12135580de67c38928c9b6672917270b7fc1a27c7fa6b9d9bb5448.jpg)


43. Circle 

![教材插图](/books/thomas-calculus/assets/a944fdedec79313f4546a62742db0c76a06504d995b2d78fe065646579a59143.jpg)


44. Cardioid 

![教材插图](/books/thomas-calculus/assets/1b49cc31d3af14bd357f9fd76551db55c5cd75169ca6447644f98856793cf581.jpg)


45. Parabola 

46. Lemniscate 

![教材插图](/books/thomas-calculus/assets/0a74f415fd2ffd8523cdaa5f31cb563b4c946d4b62727a2584880a8757e31348.jpg)


![教材插图](/books/thomas-calculus/assets/be0cf8474df444fe4ce4df81b6c8ec241030a83b160a09ea635556f67e20fe4a.jpg)


Area in Polar Coordinates 

Find the areas of the regions in the polar coordinate plane described in Exercises 47–50. 

47. Enclosed by the limaçon $r = 2 - \cos \theta$ 

48. Enclosed by one leaf of the three-leaved rose r = sin 3θ 

49. Inside the “figure eight” r = +1 cos 2θ and outside the circle r = 1 

50. Inside the cardioid $r = 2 ( 1 + \sin \theta ) \quad$ and outside the circle r = 2 sin θ 

Length in Polar Coordinates 

Find the lengths of the curves given by the polar coordinate equations in Exercises 51–54. 

51. $r = - 1 + \cos \theta$

52. $r = 2 \sin \theta + 2 \cos \theta , 0 \leq \theta \leq \pi / 2$

53. $r = 8 \sin^ {3} (\theta / 3), 0 \leq \theta \leq \pi / 4$

54. $r = \sqrt {1 + \cos 2 \theta}, - \pi / 2 \leq \theta \leq \pi / 2$

Graphing Conic Sections 

Sketch the parabolas in Exercises 55–58. Include the focus and directrix in each sketch. 

55. $x ^ {2} = - 4 y$

56. $x ^ {2} = 2 y$

$$
5 7. y ^ {2} = 3 x
$$

58. $y ^ {2} = - (8 / 3) x$

Find the eccentricities of the ellipses and hyperbolas in Exercises 59–62. Sketch each conic section. Include the foci, vertices, and asymptotes (as appropriate) in your sketch. 

$$
5 9. 1 6 x ^ {2} + 7 y ^ {2} = 1 1 2
$$

60. $x ^ {2} + 2 y ^ {2} = 4$

$$
6 1. 3 x ^ {2} - y ^ {2} = 3
$$

$$
6 2. 5 y ^ {2} - 4 x ^ {2} = 2 0
$$

Exercises 63–68 give equations for conic sections and tell how many units up or down and to the right or left each curve is to be shifted. Find an equation for the new conic section, and find the new foci, vertices, centers, and asymptotes, as appropriate. If the curve is a parabola, find the new directrix as well. 

63. $x ^ { 2 } = - 1 2 y ,$ right 2, up 3 

64. $y ^ { 2 } = 1 0 x ,$ , left $1 / 2 ,$ down 1 

65. ${ \frac { x ^ { 2 } } { 9 } } + { \frac { y ^ { 2 } } { 2 5 } } = 1 ,$ left 3, down 5 

66. $\frac {x ^ {2}}{1 6 9} + \frac {y ^ {2}}{1 4 4} = 1, \text {   right   } 5, \text {   up   } 1 2$

$$
6 7. \frac {y ^ {2}}{8} - \frac {x ^ {2}}{2} = 1, \text {   right   } 2, \text {   up   } 2 \sqrt {2}
$$

68. $\frac {x ^ {2}}{3 6} - \frac {y ^ {2}}{6 4} = 1, \text {   left   } 1 0, \text {   down   } 3$

### Identifying Conic Sections

Complete the squares to identify the conic sections in Exercises 69–76. Find their foci, vertices, centers, and asymptotes (as appropriate). If the curve is a parabola, find its directrix as well. 

69. $x ^ {2} - 4 x - 4 y ^ {2} = 0$

70. $4 x ^ {2} - y ^ {2} + 4 y = 8$

71. $y ^ {2} - 2 y + 1 6 x = - 4 9$

72. $x ^ {2} - 2 x + 8 y = - 1 7$

73. $9 x ^ { 2 } + 1 6 y ^ { 2 } + 5 4 x - 6 4 y = - 1$ 

74. $2 5 x ^ { 2 } + 9 y ^ { 2 } - 1 0 0 x + 5 4 y = 4 4$ 

$$
7 5. x ^ {2} + y ^ {2} - 2 x - 2 y = 0 \quad 7 6. x ^ {2} + y ^ {2} + 4 x + 2 y = 1
$$

### Conics in Polar Coordinates

Sketch the conic sections whose polar coordinate equations are given in Exercises 77–80. Give polar coordinates for the vertices and, in the case of ellipses, for the centers as well. 

$$
7 7. r = \frac {2}{1 + \cos \theta}
$$

$$
7 8. r = \frac {8}{2 + \cos \theta}
$$

$$
7 9. r = \frac {6}{1 - 2 \cos \theta}
$$

80. $r = \frac {1 2}{3 + \sin \theta}$

Exercises 81–84 give the eccentricities of conic sections with one focus at the origin of the polar coordinate plane, along with the directrix for that focus. Find a polar equation for each conic section. 

81. $e = 2, r \cos \theta = 2$

82. $e = 1, r \cos \theta = - 4$

83. $e = 1 / 2, r \sin \theta = 2$

84. $e = 1 / 3, r \sin \theta = - 6$

### Theory and Examples

85. Find the volume of the solid generated by revolving the region enclosed by the ellipse $9 x ^ { 2 } + 4 y ^ { 2 } = 3 6$ about (a) the x-axis, (b) the y-axis. 

86. The “triangular” region in the first quadrant bounded by the x-axis, the line $x = 4 ,$ and the hyperbola $9 x ^ { 2 } - 4 y ^ { 2 } = 3 6$ is revolved about the x-axis to generate a solid. Find the volume of the solid. 

87. Show that the equations x = = r y r cos ,   sin θ θ transform the polar equation 

$$
r = \frac {k}{1 + e \cos \theta}
$$

into the Cartesian equation 

$$
(1 - e ^ {2}) x ^ {2} + y ^ {2} + 2 k e x - k ^ {2} = 0.
$$

88. Archimedes spirals The graph of an equation of the form $r = a \theta .$ where a is a nonzero constant, is called an Archimedes spiral. Is there anything special about the widths between the successive turns of such a spiral? 

## CHAPTER 10 Additional and Advanced Exercises

### Finding Conic Sections

1. Find an equation for the parabola with focus ( ) 4, 0 and directrix $x = 3 .$ Sketch the parabola together with its vertex, focus, and directrix. 

2. Find the vertex, focus, and directrix of the parabola 

$$
x ^ {2} - 6 x - 1 2 y + 9 = 0.
$$

3. Find an equation for the curve traced by the point $P ( x , y )$ if the distance from P to the vertex of the parabola $x ^ { 2 } = 4 y$ is twice the distance from P to the focus. Identify the curve. 

4. A line segment of length a + b runs from the x-axis to the y-axis. The point P on the segment lies a units from one end and b units from the other end. Show that P traces an ellipse as the ends of the segment slide along the axes. 

5. The vertices of an ellipse of eccentricity 0.5 lie at the points ( ) 0,  2 . Where do the foci lie?± 

6. Find an equation for the ellipse of eccentricity 2 3 that has the line $x = 2$ as a directrix and the point ( ) 4, 0 as the corresponding focus. 

7. One focus of a hyperbola lies at the point $( 0 , - 7 )$ and the corresponding directrix is the line $y = - 1$ . Find an equation for the hyperbola if its eccentricity is (a) 2, (b) 5. 

8. Find an equation for the hyperbola with foci ( ) 0,  2 and − ( ) 0, 2 that passes through the point ( ) 12, 7 . 

9. Show that the line 

$$
b ^ {2} x x _ {1} + a ^ {2} y y _ {1} - a ^ {2} b ^ {2} = 0
$$

is tangent to the ellipse $b ^ { 2 } x ^ { 2 } + a ^ { 2 } y ^ { 2 } - a ^ { 2 } b ^ { 2 } = 0 \quad$ at the point $( x _ { 1 } , y _ { 1 } )$ on the ellipse. 

10. Show that the line 

$$
b ^ {2} x x _ {1} - a ^ {2} y y _ {1} - a ^ {2} b ^ {2} = 0
$$

is tangent to the hyperbola $b ^ { 2 } x ^ { 2 } - a ^ { 2 } y ^ { 2 } - a ^ { 2 } b ^ { 2 } = 0 \quad$ at the point $( x _ { 1 } , y _ { 1 } )$ on the hyperbola. 

### Equations and Inequalities

What points in the xy-plane satisfy the equations and inequalities in Exercises 11–16? Draw a figure for each exercise. 

$$
(x ^ {2} - y ^ {2} - 1) (x ^ {2} + y ^ {2} - 2 5) (x ^ {2} + 4 y ^ {2} - 4) = 0 \tag {11}
$$

12. $( x + y ) ( x ^ { 2 } + y ^ { 2 } - 1 ) = 0$ 

13. $\left( x ^ { 2 } / 9 \right) + \left( y ^ { 2 } / 1 6 \right) \leq 1$ 

14. $\left( x ^ { 2 } / 9 \right) - \left( y ^ { 2 } / 1 6 \right) \leq 1$ 

15. $( 9 x ^ { 2 } + 4 y ^ { 2 } - 3 6 ) ( 4 x ^ { 2 } + 9 y ^ { 2 } - 1 6 ) \leq 0$ 

16. $( 9 x ^ { 2 } + 4 y ^ { 2 } - 3 6 ) ( 4 x ^ { 2 } + 9 y ^ { 2 } - 1 6 ) > 0$ 

### Polar Coordinates

17. a. Find an equation in polar coordinates for the curve 

$$
x = e ^ {2 t} \cos t, \quad y = e ^ {2 t} \sin t, \quad - \infty <   t <   \infty .
$$

b. Find the length of the curve from $t = 0 \mathrm { t o } t = 2 \pi .$ 

18. Find the length of the curve $r = 2 \sin ^ { 3 } ( \theta / 3 ) , 0 \leq \theta \leq 3 \pi ,$ ,  in the polar coordinate plane. 

Exercises 19–22 give the eccentricities of conic sections with one focus at the origin of the polar coordinate plane, along with the directrix for that focus. Find a polar equation for each conic section. 

$$
\begin{array}{l l} \textbf {1 9 . e = 2 , r \cos \theta = 2} & \textbf {2 0 . e = 1 , r \cos \theta = - 4} \\ \textbf {2 1 . e = 1 / 2 , r \sin \theta = 2} & \textbf {2 2 . e = 1 / 3 , r \sin \theta = - 6} \end{array}
$$

Theory and Examples 

23. Epicycloids When a circle rolls externally along the circumference of a second, fixed circle, any point P on the circumference of the rolling circle describes an epicycloid, as shown here. Let the fixed circle have its center at the origin O and have radius a. 

![教材插图](/books/thomas-calculus/assets/1b3627ae91a33488a0e7a6f3b12ac2a0a1365285dd6b4c113f5615433ee6d38d.jpg)


Let the radius of the rolling circle be b and let the initial position of the tracing point $P$ be $A ( a , 0 )$ . Find parametric equations for the epicycloid, using as the parameter the angle θ from the positive x-axis to the line through the circles’ centers. 

24. Find the centroid of the region enclosed by the x-axis and the cycloid arch 

$$
x = a (t - \sin t), \quad y = a (1 - \cos t); \quad 0 \leq t \leq 2 \pi .
$$

The Angle Between the Radius Vector and the Tangent Line to a Polar Coordinate Curve In Cartesian coordinates, when we want to discuss the direction of a curve at a point, we use the angle φ measured counterclockwise from the positive x-axis to the tangent line. In polar coordinates, it is more convenient to calculate the angle ψ from the radius vector to the tangent line (see the accompanying figure). The angle φ can then be calculated from the relation 

$$
\phi = \theta + \psi ,\tag{1}
$$

which comes from applying the Exterior Angle Theorem to the triangle in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/7243368b50cdee1794336247b1361945a0b5c6465d2b890b42ef9aea5374718c.jpg)


Suppose the equation of the curve is given in the form $r = f ( \theta )$ where $f ( \theta )$ is a differentiable function of θ. Then 

$$
x = r \cos \theta \quad \text { and } \quad y = r \sin \theta\tag{2}
$$

are differentiable functions of θ with 

$$
\frac {d x}{d \theta} = - r \sin \theta + \cos \theta \frac {d r}{d \theta},
$$

$$
{\frac {d y}{d \theta}} = r \cos \theta + \sin \theta {\frac {d r}{d \theta}}.\tag{3}
$$

Since $\psi = \phi - \theta$ from (1), 

$$
\tan \psi = \tan (\phi - \theta) = \frac {\tan \phi - \tan \theta}{1 + \tan \phi \tan \theta}.
$$

Furthermore, 

$$
\tan \phi = \frac {d y}{d x} = \frac {d y / d \theta}{d x / d \theta}
$$

because tan $\phi$ is the slope of the curve at P. Also, 

$$
\tan \theta = \frac {y}{x}.
$$

Hence 

$$
\tan \psi = \frac {\frac {d y / d \theta}{d x / d \theta} - \frac {y}{x}}{1 + \frac {y}{x} \frac {d y / d \theta}{d x / d \theta}} = \frac {x \frac {d y}{d \theta} - y \frac {d x}{d \theta}}{x \frac {d x}{d \theta} + y \frac {d y}{d \theta}}.\tag{4}
$$

The numerator in the last expression in Equation (4) is found from Equations (2) and (3) to be 

$$
x \frac {d y}{d \theta} - y \frac {d x}{d \theta} = r ^ {2}.
$$

Similarly, the denominator is 

$$
x \frac {d x}{d \theta} + y \frac {d y}{d \theta} = r \frac {d r}{d \theta}.
$$

When we substitute these into Equation (4), we obtain 

$$
\tan \psi = \frac {r}{d r / d \theta}.\tag{5}
$$

This is the equation we use for finding ψ as a function of θ. 

25. Show, by reference to a figure, that the angle $\beta$ between the tangents to two curves at a point of intersection may be found from the formula 

$$
\tan \beta = \frac {\tan \psi_ {2} - \tan \psi_ {1}}{1 + \tan \psi_ {2} \tan \psi_ {1}}.\tag{6}
$$

When will the two curves intersect at right angles? 

26. Find the value of tan ψ for the curve $r = \sin ^ { 4 } \left( \theta / 4 \right)$ 

27. Find the angle between the radius vector to the curve r a= 2 sin 3θ and its tangent when $\theta = \pi / 6$ 

28. a. Graph the hyperbolic spiralT $r \theta = 1$ . What appears to happen to ψ as the spiral winds in around the origin? 

b. Confirm your finding in part (a) analytically. 

29. The circles $r = \sqrt { 3 }$ cos θ and $r = \sin \theta$ intersect at the point $( { \sqrt { 3 } } / 2 , \pi / 3 )$ . Show that their tangents are perpendicular there. 

30. Find the angle at which the cardioid $r = a ( 1 - \cos \theta )$ crosses the ray $\theta = \pi / 2$ 

## CHAPTER 10 Technology Application Projects

### Mathematica/Maple Projects

Projects can be found within MyLab Math. 

• Radar Tracking of a Moving Object 

Part I: Convert from polar to Cartesian coordinates. 

• Parametric and Polar Equations with a Figure Skater Part I: Visualize position, velocity, and acceleration to analyze motion defined by parametric equations. Part II: Find and analyze the equations of motion for a figure skater tracing a polar plot. 
