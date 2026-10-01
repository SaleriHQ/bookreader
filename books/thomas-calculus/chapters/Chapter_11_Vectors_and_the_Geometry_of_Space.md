---
title: "Chapter 11: Vectors and the Geometry of Space"
order: 11
---

# Chapter 11: Vectors and the Geometry of Space

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

![教材插图](/books/thomas-calculus/assets/c1d4de438c1fb68d22df1feb9ffc6e258e24cee4cf6009697d430eec49fb4739.jpg)


OVERVIEW In this chapter we begin the study of multivariable calculus. To apply calculus in many real-world situations, we introduce three-dimensional coordinate systems and vectors. We establish coordinates in space by adding a third axis that measures distance above and below the xy-plane. Then we define vectors, which provide simple ways to introduce equations for lines, planes, curves, and surfaces in space.



## 11.1 Three-Dimensional Coordinate Systems

To locate a point in space, we use three mutually perpendicular coordinate axes, arranged as in Figure 11.1. The axes shown there make a right-handed coordinate frame. When you hold your right hand so that the fingers curl from the positive x-axis toward the positive y-axis, your thumb points along the positive z-axis. So when you look down on the xyplane from the positive direction of the z-axis, positive angles in the plane are measured counterclockwise from the positive x-axis and around the positive z-axis. (In a left-handed coordinate frame, the z-axis would point downward in Figure 11.1, and angles in the plane would be positive when measured clockwise from the positive x-axis. Right-handed and left-handed coordinate frames are not equivalent.) 

The Cartesian coordinates ( ) x y z,  ,  of a point P in space are the values at which the planes through P perpendicular to the axes cut the axes. Cartesian coordinates for space are also called rectangular coordinates because the axes that define them meet at right angles. Points on the x-axis have y- and z-coordinates equal to zero. That is, they have coordinates of the form ( ) x, 0, 0 . Similarly, points on the y-axis have coordinates of the form ( ) 0,  , 0y , and points on the z-axis have coordinates of the form ( ) 0, 0, z . 

![教材插图](/books/thomas-calculus/assets/1f8582996f62589cd1a007675190e398f986deee98f61f41854ca5c9b0199c5a.jpg)



FIGURE 11.1 The Cartesian coordinate system is right-handed.


The planes determined by the coordinate axes are the xy-plane, whose standard equation is z = 0; the yz-plane, whose standard equation is x = 0; and the xz-plane, whose standard equation is y = 0. They meet at the origin 0, 0, 0( ) (Figure 11.2), which is also identified by 0 or the letter O. 

The three coordinate planes x = = 0,  0, y and z = 0 divide space into eight cells called octants. The octant in which the point coordinates are all positive is called the first octant; there is no convention for numbering the other seven octants. 

The points in a plane perpendicular to the x-axis all have the same x-coordinate, this being the number at which that plane cuts the x-axis. The y- and z-coordinates can be any numbers. Similarly, the points in a plane perpendicular to the y-axis have a common y-coordinate, and the points in a plane perpendicular to the z-axis have a common zcoordinate. To write equations for these planes, we name the common coordinate’s value. The plane x = 2 is the plane perpendicular to the x-axis at x = 2. The plane y = 3 is the plane perpendicular to the y-axis at y = 3. The plane z = 5 is the plane perpendicular to the z-axis at z = 5. Figure 11.3 shows the planes x = =2,  3,y and $z = 5 ,$ together with their intersection point 2, 3, 5( ). 

![教材插图](/books/thomas-calculus/assets/e646976274789f3397036c9dad4667c2914023d992bbaefa5dacd1356a22dc91.jpg)



FIGURE 11.2 The planes x = = 0,  0 y , and $z = 0$ divide space into eight octants.


![教材插图](/books/thomas-calculus/assets/5e617f19482e1167046a6dffd186197fef0ca6b4f4835af71e54e6a826cdb65b.jpg)



FIGURE 11.3 The planes $x = 2 , y = 3 ,$ and z = 5 determine three lines through the point ( ) 2, 3, 5 .


The planes $x = 2$ and $y = 3$ in Figure 11.3 intersect in a line parallel to the $z { \mathrm { - a x i s . } }$ This line is described by the pair of equations x = = 2,   3. y A point $( x , y , z )$ lies on the line if and only if x = 2 and y = 3. Similarly, the line of intersection of the planes $y = 3$ and $z = 5$ is described by the equation pair $y = 3 , z = 5$ . This line runs parallel to the x-axis. The line of intersection of the planes x = 2 and z = 5, parallel to the y-axis, is described by the equation pair $x = 2 , z = 5$ 

In the following examples, we match coordinate equations and inequalities with the sets of points they define in space. 

**EXAMPLE 1** We interpret these equations and inequalities geometrically. 

(a) $z \geq 0$ 

The half-space consisting of the points on and above the xy-plane. 

(b) $x = - 3$ 

![教材插图](/books/thomas-calculus/assets/ad9d1356c466ea07317658a098802bb1641299d219d6d85d93cfa945639ba9ec.jpg)


The plane perpendicular to the x-axis at $x = - 3$ . This plane lies parallel to the yz-plane and 3 units behind it. 

(c) $z = 0 , x \le 0 , y \ge 0$ 

The second quadrant of the xy-plane. 

(d) $x \ge 0 , y \ge 0 , z \ge 0$ 

The first octant. 

(e) $- 1 \leq y \leq 1$ 

The slab between the planes y = −1 and y = 1 (planes included). 

(f) $y = - 2 , z = 2$ 

The line in which the planes $y = - 2$ and z = 2 intersect. Alternatively, the line through the point 0,  2, 2( ) − parallel to the x-axis. 

FIGURE 11.4 The circle $x ^ { 2 } + y ^ { 2 } = 4 $ in the plane z = 3 (Example 2). 

**EXAMPLE 2** What points $( x , y , z )$ satisfy the equations 

$$
x ^ {2} + y ^ {2} = 4 \quad \text { and } \quad z = 3?
$$

**Solution** The points lie in the horizontal plane $z = 3$ and, in this plane, make up the circle $x ^ { 2 } + y ^ { 2 } = 4 $ . We call this set of points “the circle $x ^ { 2 } + y ^ { 2 } = 4 $ in the plane $z = 3 "$ or, more simply, “the circle $x ^ { 2 } + y ^ { 2 } = 4 , z = 3 ^ { , , }$ (Figure 11.4). ■ 

![教材插图](/books/thomas-calculus/assets/cc4637e99670ff559979f4c208ea361ffcca6e3fb612ce1a92e09cab56d916f1.jpg)



FIGURE 11.5 We find the distance between $P _ { 1 }$ and $P _ { 2 }$ by applying the Pythagorean theorem to the right triangles $P _ { 1 } A B$ and $P _ { 1 } B P _ { 2 }$


![教材插图](/books/thomas-calculus/assets/450e939b89e3285b58b67068ccd3ecc6aaaec2ddc3e2d92d9d4b547b2e37b657.jpg)



FIGURE 11.6 The sphere of radius a centered at the point $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$


### Distance and Spheres in Space

The formula for the distance between two points in the xy-plane extends to points in space. 

The Distance Between $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ and $P _ { 2 } ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ P P x x y y z z <sub>1 2 2 1</sub> <sup>2</sup> <sub>2 1</sub> <sup>2</sup> <sub>2 1</sub> <sup>2</sup> = − + − + − ( ) ( ) ( ) 

Proof We construct a rectangular box with faces parallel to the coordinate planes and the points $P _ { 1 }$ and $P _ { 2 }$ at opposite corners of the box (Figure 11.5). If $A ( x _ { 2 } , y _ { 1 } , z _ { 1 } )$ and $B ( x _ { 2 } , y _ { 2 } , z _ { 1 } )$ are the vertices of the box indicated in the figure, then the three box edges $P _ { 1 } A , A B ,$ , and $B P _ { 2 }$ have lengths 

$$
\left| P _ {1} A \right| = \left| x _ {2} - x _ {1} \right|, \quad \left| A B \right| = \left| y _ {2} - y _ {1} \right|, \quad \left| B P _ {2} \right| = \left| z _ {2} - z _ {1} \right|.
$$

Because triangles $P _ { 1 } B P _ { 2 }$ and $P _ { 1 } A B$ are both right-angled, two applications of the Pythagorean theorem give 

$$
\left| P _ {1} P _ {2} \right| ^ {2} = \left| P _ {1} B \right| ^ {2} + \left| B P _ {2} \right| ^ {2} \quad \text { and } \quad \left| P _ {1} B \right| ^ {2} = \left| P _ {1} A \right| ^ {2} + \left| A B \right| ^ {2}
$$

(see Figure 11.5). So 

$$
\begin{array}{l} \left| P _ {1} P _ {2} \right| ^ {2} = \left| P _ {1} B \right| ^ {2} + \left| B P _ {2} \right| ^ {2} \\ \quad = \left| P _ {1} A \right| ^ {2} + \left| A B \right| ^ {2} + \left| B P _ {2} \right| ^ {2} \\ \quad = \left| x _ {2} - x _ {1} \right| ^ {2} + \left| y _ {2} - y _ {1} \right| ^ {2} + \left| z _ {2} - z _ {1} \right| ^ {2} \\ \quad = (x _ {2} - x _ {1}) ^ {2} + (y _ {2} - y _ {1}) ^ {2} + (z _ {2} - z _ {1}) ^ {2}. \end{array}
$$

Therefore, 

$$
\left| P _ {1} P _ {2} \right| = \sqrt {\left(x _ {2} - x _ {1}\right) ^ {2} + \left(y _ {2} - y _ {1}\right) ^ {2} + \left(z _ {2} - z _ {1}\right) ^ {2}}.
$$

**EXAMPLE 3** The distance between $P _ { 1 } ( 2 , 1 , 5 )$ and $P _ { 2 } ( - 2 , 3 , 0 )$ is 

$$
\begin{array}{l} | P _ {1} P _ {2} | = \sqrt {(- 2 - 2) ^ {2} + (3 - 1) ^ {2} + (0 - 5) ^ {2}} \\ \qquad = \sqrt {1 6 + 4 + 2 5} \\ \qquad = \sqrt {4 5} \approx 6. 7 0 8. \end{array}
$$

We can use the distance formula to write equations for spheres in space (Figure 11.6). A point $P ( x , y , z )$ lies on the sphere of radius a centered at $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ precisely when $| P _ { 0 } P | = a , \mathrm { o r }$ 

$$
(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2} + (z - z _ {0}) ^ {2} = a ^ {2}.
$$

The Standard Equation for the Sphere of Radius a and Center $( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 

$$
(x - x _ {0}) ^ {2} + (y - y _ {0}) ^ {2} + (z - z _ {0}) ^ {2} = a ^ {2}
$$

**EXAMPLE 4** Find the center and radius of the sphere 

$$
x ^ {2} + y ^ {2} + z ^ {2} + 3 x - 4 z + 1 = 0.
$$

**Solution** We find the center and radius of a sphere the way we find the center and radius of a circle: Complete the squares on the $x \mathrm { - } , y \mathrm { - } ,$ , and z-terms as necessary and write each quadratic as a squared linear expression. Then, from the equation in standard form, read off the center and radius. For this sphere, we have 

$$
x ^ {2} + y ^ {2} + z ^ {2} + 3 x - 4 z + 1 = 0
$$

$$
(x ^ {2} + 3 x) + y ^ {2} + (z ^ {2} - 4 z) = - 1
$$

$$
\begin{array}{c} \left(x ^ {2} + 3 x + \left(\frac {3}{2}\right) ^ {2}\right) + y ^ {2} + \left(z ^ {2} - 4 z + \left(\frac {- 4}{2}\right) ^ {2}\right) = - 1 + \left(\frac {3}{2}\right) ^ {2} + \left(\frac {- 4}{2}\right) ^ {2} \\ \left(x + \frac {3}{2}\right) ^ {2} + y ^ {2} + (z - 2) ^ {2} = \frac {2 1}{4}. \end{array}
$$

From this standard form, we read that $x _ { 0 } = - 3 / 2 , y _ { 0 } = 0 , z _ { 0 } = 2 .$ , and $a = \sqrt { 2 1 } / 2$ The center is $( - 3 / 2 , 0 , 2 )$ . The radius is ${ \sqrt { 2 1 } } / 2$ 

**EXAMPLE 5** Here are some geometric interpretations of inequalities and equations involving spheres. 

(a) $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } < 4$ 

$$
\textbf {(b)} x ^ {2} + y ^ {2} + z ^ {2} \leq 4
$$

$$
(\mathbf {c}) x ^ {2} + y ^ {2} + z ^ {2} > 4
$$

$$
(\mathbf {d}) x ^ {2} + y ^ {2} + z ^ {2} = 4, z \leq 0
$$

The interior of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 $ 

The solid ball bounded by the sphere 

$x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 .$ . Alternatively, the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 $ together with its interior. 

The exterior of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 .$ 

The lower hemisphere cut from the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 $ by the xy-plane (the plane $z = 0 )$ 

Just as polar coordinates give another way to locate points in the xy-plane (Section 10.3), alternative coordinate systems, different from the Cartesian coordinate system developed here, exist for three-dimensional space. We examine two of these coordinate systems in Section 14.7. 

### EXERCISES 11.1

#### Geometric Interpretations of Equations

In Exercises 1–16, give a geometric description of the set of points in space whose coordinates satisfy the given pairs of equations. 

1. $x = 2 , \ y = 3$ 

2. $x = - 1, z = 0$

3. $y = 0 , ~ z = 0$ 

4. $x = 1, y = 0$

5. $x ^ { 2 } + y ^ { 2 } = 4 , z = 0$ 

6. $x ^ {2} + y ^ {2} = 4, z = - 2$

7. $x ^ { 2 } + z ^ { 2 } = 4 , \ y = 0$ 

8. $y ^ { 2 } + z ^ { 2 } = 1 , x = 0$ 

9. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1 , x = 0$ 

10. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 2 5 , y = - 4$ 

11. $x ^ { 2 } + y ^ { 2 } + ( z + 3 ) ^ { 2 } = 2 5 , z = 0$ 

12. $x ^ { 2 } + \left( y - 1 \right) ^ { 2 } + z ^ { 2 } = 4 , \ y = 0$ 

13. $x ^ { 2 } + y ^ { 2 } = 4 , z = y$ 

14. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 , y = x$ 

15. $y = x ^ { 2 } , ~ z = 0$ 

16. $z = y ^ { 2 } , x = 1$ 

#### Geometric Interpretations of Inequalities and Equations

In Exercises 17–24, describe the sets of points in space whose coordinates satisfy the given inequalities or combinations of equations and inequalities. 

17. a. $x \ge 0 , ~ y \ge 0 , ~ z = 0$ b. $x \ge 0 , ~ y \le 0 , ~ z = 0$ 

18. a. $0 \leq x \leq 1$ 

b. $0 \leq x \leq 1 , 0 \leq y \leq 1$ 

c. $0 \leq x \leq 1 , 0 \leq y \leq 1 ,$ $0 \leq z \leq 1$ 

19. a. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 1$ 

b. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } > 1$ 

20. a. $x ^ { 2 } + y ^ { 2 } \leq 1 , z = 0$ 

b. $x ^ { 2 } + y ^ { 2 } \leq 1 , z = 3$ 

c. $x ^ { 2 } + y ^ { 2 } \leq 1 ,$ zno restriction on 

21. a. $1 \leq x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 4$ b. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 1 , z \geq 0$ 

22. a. $x = y , z = 0$ 

23. a. $y \ge x ^ { 2 } , ~ z \ge 0$ 

b. $x \ : = \ : y ,$ z  no restriction on 

b. $x \leq y ^ { 2 } , 0 \leq z \leq 2$ 

24. a. $z = 1 - y ,$ no restriction on  x 

b. $z = y ^ { 3 } , \ x = 2$ 

#### Distance

In Exercises 25–30, find the distance between points $P _ { 1 }$ and $P _ { 2 }$ . 

25. $P _ { 1 } ( 1 , 1 , 1 ) , \qquad P _ { 2 } ( 3 , 3 , 0 )$ 

26. $P _ { 1 } ( - 1 , 1 , 5 ) , \quad P _ { 2 } ( 2 , 5 , 0 )$ 

27. $P _ { 1 } ( 1 , 4 , 5 ) , ~ P _ { 2 } ( 4 , - 2 , 7 )$ 

28. $P _ { 1 } ( 3 , 4 , 5 ) , P _ { 2 } ( 2 , 3 , 4 )$ 

29. $P _ { 1 } ( 0 , 0 , 0 ) , ~ P _ { 2 } ( 2 , - 2 , - 2 )$ 

30. $P _ { 1 } ( 5 , 3 , - 2 ) , P _ { 2 } ( 0 , 0 , 0 )$ 

31. Find the distance from the point 3,  4, 2 ( ) − to the a. xy-plane b. yz-plane c. xz-plane 

32. Find the distance from the point ( ) −2, 1, 4 to the a. plane x = 3 b. plane y = −5 c. plane z = −1 

33. Find the distance from the point 4, 3, 0( ) to the a. x-axis b. y-axis c. z-axis 

34. Find the distance from the a. x-axis to the plane z = 3. b. origin to the plane 2 . = −z x c. point 0, 4, 0 ( ) to the plane y x = . 

In Exercises 35–44, describe the given set with a single equation or with a pair of equations. 

35. The plane perpendicular to the a. x-axis at ( ) 3, 0, 0 b. y-axis at 0,  1, 0 ( ) − c. z-axis at 0, 0,  2( )− 

36. The plane through the point 3,  1, 2 ( ) − perpendicular to the a. x-axis b. y-axis c. z-axis 

37. The plane through the point ( ) 3,  1, 1 − parallel to the a. xy-plane b. yz-plane c. xz-plane 

38. The circle of radius 2 centered at ( ) 0, 0, 0 and lying in the a. xy-plane b. yz-plane c. xz-plane 

39. The circle of radius 2 centered at ( ) 0, 2, 0 and lying in the a. xy-plane b. yz-plane c. plane y = 2 

40. The circle of radius 1 centered at 3, 4, 1 ( ) − and lying in a plane parallel to the a. xy-plane b. yz-plane c. xz-plane 

41. The line through the point ( ) 1, 3,  1 − parallel to the a. x-axis b. y-axis c. z-axis 

42. The set of points in space equidistant from the origin and the point ( ) 0, 2, 0 

43. The circle in which the plane through the point 1, 1, 3 ( ) perpendicular to the z-axis meets the sphere of radius 5 centered at the origin 

44. The set of points in space that lie 2 units from the point ( ) 0, 0, 1 and, at the same time, 2 units from the point ( ) 0, 0,  1 − 

#### Inequalities to Describe Sets of Points

Write inequalities to describe the sets in Exercises 45–50. 

45. The slab bounded by the planes z = 0 and z = 1 (planes included) 

46. The solid cube in the first octant bounded by the coordinate planes and the planes x = =2,  2,y and z = 2 

47. The half-space consisting of the points on and below the xy-plane 

48. The upper hemisphere of the sphere of radius 1 centered at the origin 

49. The (a) interior and (b) exterior of the sphere of radius 1 centered at the point ( ) 1, 1, 1 

50. The closed region bounded by the spheres of radius 1 and radius 2 centered at the origin. (Closed means the spheres are to be included. Had we wanted the spheres left out, we would have asked for the open region bounded by the spheres. This is analogous to the way we use closed and open to describe intervals: closed means endpoints included, open means endpoints left out. Closed sets include boundaries; open sets leave them out.) 

#### Spheres

Find the center C and the radius a for the spheres in Exercises 51–60. 

51. $( x + 2 ) ^ { 2 } + y ^ { 2 } + ( z - 2 ) ^ { 2 } = 8$ 

52. $( x - 1 ) ^ { 2 } + { \bigg ( } y + { \frac { 1 } { 2 } } { \bigg ) } ^ { 2 } + ( z + 3 ) ^ { 2 } = 2 5$ 

53. $\left( x - { \sqrt { 2 } } \right) ^ { 2 } + \left( y - { \sqrt { 2 } } \right) ^ { 2 } + \left( z + { \sqrt { 2 } } \right) ^ { 2 } = 2$ 

54. $x ^ { 2 } + { \Big ( } y + { \frac { 1 } { 3 } } { \Big ) } ^ { 2 } + { \Big ( } z - { \frac { 1 } { 3 } } { \Big ) } ^ { 2 } = { \frac { 1 6 } { 9 } }$ 

55. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } + 4 x - 4 z = 0$ 

56. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } - 6 y + 8 z = 0$ 

57. $2 x ^ { 2 } + 2 y ^ { 2 } + 2 z ^ { 2 } + x + y + z = 9$ 

58. $3 x ^ { 2 } + 3 y ^ { 2 } + 3 z ^ { 2 } + 2 y - 2 z = 9$ 

59. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } - 4 x + 6 y - 1 0 z = 1 1$ 

60. $( x - 1 ) ^ { 2 } + ( y - 2 ) ^ { 2 } + ( z + 1 ) ^ { 2 } = 1 0 3 + 2 x + 4 y - 2 z$ 

Find equations for the spheres whose centers and radii are given in Exercises 61–64. 

<table><tr><td></td><td>Center</td><td>Radius</td></tr><tr><td>61.</td><td>(1, 2, 3)</td><td><eq>\sqrt{14}</eq></td></tr><tr><td>62.</td><td>(0, -1, 5)</td><td>2</td></tr><tr><td>63.</td><td><eq>\left(-1, \frac{1}{2}, -\frac{2}{3}\right)</eq></td><td><eq>\frac{4}{9}</eq></td></tr><tr><td>64.</td><td>(0, -7, 0)</td><td>7</td></tr></table>

#### Theory and Examples

65. Find a formula for the distance from the point P x y z ( ) ,  ,  to the a. x-axis. b. y-axis. c. z-axis. 

66. Find a formula for the distance from the point P x y z ( ) ,  ,  to the a. xy-plane. b. yz-plane. c. xz-plane. 

67. Find the perimeter of the triangle with vertices A( ) −1, 2, 1 , B( ) 1,  1, 3 ,− and C( ) 3, 4, 5 . 

68. Show that the point P( ) 3, 1, 2 is equidistant from the points A( ) 2,  1, 3− and B( ) 4, 3, 1 . 

69. Find an equation for the set of all points equidistant from the planes y = 3 and y = −1. 

70. Find an equation for the set of all points equidistant from the point ( ) 0, 0, 2 and the xy-plane. 


(a) two dimensions


71. Find the point on the sphere $x ^ { 2 } + ( y - 3 ) ^ { 2 } + ( z + 5 ) ^ { 2 } = 4$ nearest a. the xy-plane. b. the point ( ) 0, 7,  5 . − 

72. Find the point equidistant from the points 0, 0, 0 , 0, 4, 0 , ( ) ( ) ( 3, 0, 0 ), and 2, 2,  3 . ( ) − 

73. Find an equation for the set of points equidistant from the point ( ) 0, 0, 2 and the x-axis. 

74. Find an equation for the set of points equidistant from the y-axis and the plane $z = 6$.

75. Find an equation for the set of points equidistant from the a. xy-plane and the yz-plane. b. x-axis and the y-axis. 

76. Find all points that simultaneously lie 3 units from each of the points ( ) ( ) 2, 0, 0 ,   0, 2, 0 , and 0, 0, 2 ( ). 

## 11.2 Vectors

Some of the things we measure are determined simply by their magnitudes. To record mass, length, or time, for example, we need only write down a number and name an appropriate unit of measure. We need more information to describe a force, displacement, or velocity. To describe a force, we need to record the direction in which it acts as well as how large it is. To describe a body’s displacement, we have to say in what direction it moved as well as how far. To describe a body’s velocity, we have to know its direction of motion, as well as how fast it is going. In this section we show how to represent things that have both magnitude and direction in the plane or in space. 

![教材插图](/books/thomas-calculus/assets/a5ae497f4a2f7915695738b1ebf9eef164db4030c07f311e6909a326bd8eb0b9.jpg)


### Component Form

A quantity such as force, displacement, or velocity is called a vector and is represented by a directed line segment (Figure 11.7). The arrow points in the direction of the action and its length gives the magnitude of the action in terms of a suitably chosen unit. For example, a force vector points in the direction in which the force acts and its length is a measure of the force’s strength; a velocity vector points in the direction of motion and its length is the speed of the moving object. Figure 11.8 displays the velocity vector v at a specific location for a particle moving along a path in the plane or in space. (This application of vectors is studied in Chapter 12.) 


FIGURE 11.7 The directed line segment AB is called a vector.


![教材插图](/books/thomas-calculus/assets/793ee13be41257071045aa9f3b2cbe7fd7a60e8209d1e0ec471b10628cf802a8.jpg)


![教材插图](/books/thomas-calculus/assets/d32b2b7960d88488a6364861cc08f539ab817ee8a733df3dc0ec065909f211e6.jpg)


![教材插图](/books/thomas-calculus/assets/aba811e20e8ed5b93b602f1f30411d73704c6eb175071ff322877de28d6d3eb7.jpg)



FIGURE 11.9 The four arrows in the plane (directed line segments) shown here have the same length and direction. They therefore represent the same vector, and we write ${ \overrightarrow { A B } } = { \overrightarrow { C D } } = { \overrightarrow { O P } } = { \overrightarrow { E F } }$



(b) three dimensions


FIGURE 11.8 The velocity vector of a particle moving along a path (a) in the plane (b) in space. The arrowhead on the path indicates the direction of motion of the particle. 

> ***DEFINITIONS*** The vector represented by the directed line segment $\overrightarrow { A B }$ has initial point A and terminal point B, and its length is denoted by $\left| { \overline { { A B } } } \right|$ . Two vectors are equal if they have the same length and direction. 

The arrows we use when we draw vectors are understood to represent the same vector if they have the same length, are parallel, and point in the same direction (Figure 11.9) regardless of the initial point. 

![教材插图](/books/thomas-calculus/assets/368503d718f570fb0de8e56aee3a9ca8442051dc5a0dd1b7edfe09373b4caf38.jpg)



FIGURE 11.10 A vector $\overrightarrow { P Q }$ in standard position has its initial point at the origin. The directed line segments $\overrightarrow { P Q }$ and v are parallel and have the same length.


**HISTORICAL BIOGRAPHY Carl Friedrich Gauss (1777–1855)**

Gauss was born in Brunswick, Germany. The list of Gauss’s accomplishments in science and mathematics is astonishing, ranging from the invention of the electric telegraph (with Wilhelm Weber in 1833) to the development of a theory of planetary orbits and the development of an accurate theory of non-Euclidean geometry. 

To know more, visit the companion Website. 

In texts, vectors are usually written in lowercase boldface letters—for example u, v, and w. Sometimes we use uppercase boldface letters, such as F, to denote a force vector. In handwritten form, it is customary to draw small arrows above the letters—for example $\vec { u } , \vec { v } , \vec { w } ,$ and ${ \vec { F } } .$ 

We need a way to represent vectors algebraically so that we can be more precise about the direction of a vector. Let ${ \bf v } = \overrightarrow { P Q }$ . There is one directed line segment equal to $\overrightarrow { P Q }$ whose initial point is the origin (Figure 11.10). It is the representative of v in standard position and is the vector we normally use to represent v. We can specify v by writing the coordinates of its terminal point $( v _ { 1 } , v _ { 2 } , v _ { 3 } )$ when v is in standard position. If v is a vector in the plane, its terminal point $( v _ { 1 } , v _ { 2 } )$ has two coordinates. 

> ***DEFINITION*** If v is a two-dimensional vector in the plane equal to the vector with initial point at the origin and terminal point $( v _ { 1 } , v _ { 2 } )$ , then the component form of v is 
>
> $$
> \mathbf {v} = \langle v _ {1}, v _ {2} \rangle .
> $$
>
> If v is a three-dimensional vector equal to the vector with initial point at the origin and terminal point $( v _ { 1 } , v _ { 2 } , v _ { 3 } )$ ,  then the component form of v is 
>
> $$
> \mathbf {v} = \langle v _ {1}, v _ {2}, v _ {3} \rangle .
> $$
>
Thus a two-dimensional vector is an ordered pair $\textbf { v } = \langle v _ { 1 } , v _ { 2 } \rangle$ of real numbers, and a three-dimensional vector is an ordered triple $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ of real numbers. The numbers $\upsilon _ { 1 } , \upsilon _ { 2 }$ , and $\upsilon _ { 3 }$ are the components of v. 

I $\mathbf { \dot { v } } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ is represented by the directed line segment ${ \overrightarrow { P Q } } .$ , where the initial point is $P ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ and the terminal point is $Q ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ ,  then $x _ { 1 } + v _ { 1 } = x _ { 2 }$ $y _ { 1 } + v _ { 2 } = y _ { 2 }$ , and $z _ { 1 } + v _ { 3 } = z _ { 2 }$ (see Figure 11.10). Thus $\upsilon _ { 1 } = x _ { 2 } - x _ { 1 } , \upsilon _ { 2 } = y _ { 2 } - y _ { 1 }$ and $\upsilon _ { 3 } = z _ { 2 } - z _ { 1 }$ are the components of $\overrightarrow { P Q }$ 

In summary, given the points $P ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ ) and $Q ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ ,  the standard position vector $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ equal to $\overrightarrow { P Q }$ 

$$
\mathbf {v} = \langle x _ {2} - x _ {1}, y _ {2} - y _ {1}, z _ {2} - z _ {1} \rangle .
$$

If v is two-dimensional with $P ( x _ { 1 } , y _ { 1 } )$ and $Q ( x _ { 2 } , y _ { 2 } )$ as points in the plane, then $\mathbf { v } = \langle x _ { 2 } - x _ { 1 } , y _ { 2 } - y _ { 1 } \rangle$ .  There is no third component for planar vectors. With this understanding, we will develop the algebra of three-dimensional vectors and simply drop the third component when the vector is two-dimensional (a planar vector). 

Two vectors are equal if and only if their standard position vectors are identical. Thus $\left. { u _ { 1 } , u _ { 2 } , u _ { 3 } } \right.$ and $\langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ are equal if and only if $u _ { 1 } = v _ { 1 } , u _ { 2 } = v _ { 2 }$ ,  and $u _ { 3 } ~ = ~ v _ { 3 }$ 

The magnitude or length of the vector $\overrightarrow { P Q }$ is the length of any of its equivalent directed line segment representations. In particular, if $\mathbf { \dot { v } } = \langle x _ { 2 } - x _ { 1 } , y _ { 2 } - y _ { 1 } , z _ { 2 } - z _ { 1 } \rangle$ is the component form of ${ \overrightarrow { P Q } } .$ , then the distance formula gives the magnitude or length of $\mathbf { v } ,$ denoted by the symbol v or (in some texts) $\| \mathbf { v } \| .$ 

The magnitude or length of the vector $\mathbf { v } = \langle \nu _ { 1 } , \nu _ { 2 } , \nu _ { 3 } \rangle = \langle x _ { 2 } - x _ { 1 } , y _ { 2 } - y _ { 1 } , z _ { 2 } - z _ { 1 } \rangle$ is the nonnegative number 

$$
| \mathbf {v} | = \sqrt {v _ {1} ^ {2} + v _ {2} ^ {2} + v _ {3} ^ {2}} = \sqrt {(x _ {2} - x _ {1}) ^ {2} + (y _ {2} - y _ {1}) ^ {2} + (z _ {2} - z _ {1}) ^ {2}}
$$

(see Figure 11.10). 

The only vector with length 0 is the zero vector $\mathbf { 0 } = \langle 0 , 0 \rangle$ or $\mathbf { 0 } = \langle 0 , 0 , 0 \rangle$ . This vector is also the only vector with no specific direction. 

![教材插图](/books/thomas-calculus/assets/48ce5414f09939240d5b53841a0734cacbf57d9c96aed99db51fdd13be5c5c10.jpg)



FIGURE 11.11 The force pulling the cart forward is represented by the vector F whose horizontal component is the effective force (Example 2).


![教材插图](/books/thomas-calculus/assets/af29feedf184fc28fd7bd46a3116084af53fba546b3d46e191821175201cf408.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/846e198241fb4bba243ce1dfff61dedd08acf14ddc83562e28a1b4b98d5c002a.jpg)



FIGURE 11.12 (a) Geometric interpretation of the vector sum. (b) The parallelogram law of vector addition in which both vectors are in standard position.


**EXAMPLE 1** Find the (a) component form and (b) length of the vector with initial point $P ( - 3 , 4 , 1 )$ ) and terminal point Q( ) −5, 2, 2 . 

**Solution**

(a) The vector ${ \bf v } = \overrightarrow { P Q }$ has components 

$$
v _ {1} = x _ {2} - x _ {1} = - 5 - (- 3) = - 2, \quad v _ {2} = y _ {2} - y _ {1} = 2 - 4 = - 2,
$$

and 

$$
v _ {3} = z _ {2} - z _ {1} = 2 - 1 = 1.
$$

The component form of $\overrightarrow { P Q }$ is 

$$
\mathbf {v} = \langle - 2, - 2, 1 \rangle .
$$

(b) The length, or magnitude, of ${ \bf v } = \overrightarrow { P Q }$ is 

$$
| \mathbf {v} | = \sqrt {(- 2) ^ {2} + (- 2) ^ {2} + (1) ^ {2}} = \sqrt {9} = 3.
$$

**EXAMPLE 2** A small cart is being pulled along a smooth horizontal floor with a 20-N force F making a $4 5 ^ { \circ }$ angle to the floor (Figure 11.11). What is the effective force moving the cart forward? 

**Solution** The effective force is the horizontal component of $\mathbf { F } = \langle a , b \rangle$ , given by 

$$
a = \mathbf {F} \cos 4 5 ^ {\circ} = (2 0) \left(\frac {\sqrt {2}}{2}\right) \approx 1 4. 1 4 \mathrm{N}.
$$

Notice that F is a two-dimensional vector. 

### Vector Algebra Operations

Two principal operations involving vectors are vector addition and scalar multiplication. A scalar is simply a real number; we call it a scalar when we want to draw attention to the differences between numbers and vectors. Scalars can be positive, negative, or zero and are used to “scale” a vector by multiplication. 

> ***DEFINITIONS*** Let $\mathbf { u } = \langle u _ { 1 } , u _ { 2 } , u _ { 3 } \rangle$ and $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ be vectors with k a scalar. 

Addition: 

$$
\mathbf {u} + \mathbf {v} = \left\langle u _ {1} + v _ {1}, u _ {2} + v _ {2}, u _ {3} + v _ {3} \right\rangle
$$

Scalar multiplication: 

$$
k \mathbf {u} = \left\langle k u _ {1}, k u _ {2}, k u _ {3} \right\rangle
$$

We add vectors by adding the corresponding components of the vectors. We multiply a vector by a scalar by multiplying each component by the scalar. The definitions also apply to planar vectors, except in that case there are only two components, $\left. u _ { 1 } , u _ { 2 } \right.$ and $\left. v _ { 1 } , v _ { 2 } \right.$ 

The definition of vector addition is illustrated geometrically for planar vectors in Figure 11.12a, where the initial point of one vector is placed at the terminal point of the other. Another interpretation is shown in Figure 11.12b. In this parallelogram law of addition, the sum, called the resultant vector, is the diagonal of the parallelogram. In physics, forces add vectorially, as do velocities, accelerations, and so on. So the force acting on a particle subject to two gravitational forces, for example, is obtained by adding the two force vectors. 


(b)


![教材插图](/books/thomas-calculus/assets/f5c08eb7bf4e55f3c4d0a9fe10838f70bc2a985fc4663c28787b514388a48870.jpg)


![教材插图](/books/thomas-calculus/assets/2a8ad00045e05841b1491f3f492169d93525ede6499e21634da001170e6fbdfc.jpg)


FIGURE 11.13 (a) Scalar multiples of u. (b) Scalar multiples of a vector u in standard position. 

![教材插图](/books/thomas-calculus/assets/abbe6c0ce6387567d7ac988eb582bb073fd98a0602cbf56e20022fda6f2c45e5.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/fa836c34f4ec3fd486d3edc18848600b2119e6a7e52032ed3ed03d09aed7ee83.jpg)



FIGURE 11.14 (a) The vector ${ \bf u } - { \bf v } ,$ when added to v, gives u. (b) $\mathbf { u } - \mathbf { v } = \mathbf { u } + ( - \mathbf { v } )$


Figure 11.13 displays a geometric interpretation of the product ku of the scalar k and vector u. $\mathrm { I f } \ k > 0 ,$ , then ku has the same direction as u; if $k < 0 ,$ , then the direction of ku is opposite to that of u. Comparing the lengths of u and ku, we see that 

$$
\begin{array}{c} | k \mathbf {u} | = \sqrt {(k u _ {1}) ^ {2} + (k u _ {2}) ^ {2} + (k u _ {3}) ^ {2}} = \sqrt {k ^ {2} (u _ {1} ^ {2} + u _ {2} ^ {2} + u _ {3} ^ {2})} \\ = \sqrt {k ^ {2}} \sqrt {u _ {1} ^ {2} + u _ {2} ^ {2} + u _ {3} ^ {2}} = | k | | \mathbf {u} |. \end{array}
$$

The length of ku is the absolute value of the scalar k times the length of u. The vector $( - 1 ) \mathbf { u } = - \mathbf { u }$ has the same length as u but points in the opposite direction. For $k \neq 0$ , we often express the scalar multiple $( 1 / k )$ u as ${ \mathbf { u } } / k$ 

The difference $\mathbf { u } - \mathbf { v }$ of two vectors is defined by 

$$
\mathbf {u} - \mathbf {v} = \mathbf {u} + (- \mathbf {v}).
$$

If $\mathbf { u } = \langle u _ { 1 } , u _ { 2 } , u _ { 3 } \rangle$ and $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ ,  then 

$$
\mathbf {u} - \mathbf {v} = \langle u _ {1} - v _ {1}, u _ {2} - v _ {2}, u _ {3} - v _ {3} \rangle .
$$

Note that $( \mathbf { u } - \mathbf { v } ) + \mathbf { v } = \mathbf { u } ,$ so adding the vector $( \boldsymbol { \mathbf { u } } - \boldsymbol { \mathbf { v } } )$ to v gives u (Figure 11.14a). Figure 11.14b shows the difference $\mathbf { u } - \mathbf { v }$ as the sum u + −( ) v . 

**EXAMPLE 3** Let $\mathbf { u } = \langle - 1 , 3 , 1 \rangle$ and $\mathbf { v } = \langle 4 , 7 , 0 \rangle$ . Find the components of (a) u v 2 3 + (b) u − v (c) $\Big \vert \frac { 1 } { 2 } \mathbf { u } \Big \vert .$ 

**Solution** 

(a) u v 2 3 2 1,  3,  1 3 4,  7,  0 2,  6,  2 12,  21,  0 10,  27,  2 + = 〈− 〉 + 〈 〉 = 〈− 〉 + 〈 〉 = 〈 〉 

$$
\mathbf {u} - \mathbf {v} = \langle - 1, 3, 1 \rangle - \langle 4, 7, 0 \rangle = \langle - 1 - 4, 3 - 7, 1 - 0 \rangle = \langle - 5, - 4, 1 \rangle
$$

$$
\left| \frac {1}{2} \mathbf {u} \right| = \left| \left\langle - \frac {1}{2}, \frac {3}{2}, \frac {1}{2} \right\rangle \right| = \sqrt {\left(- \frac {1}{2}\right) ^ {2} + \left(\frac {3}{2}\right) ^ {2} + \left(\frac {1}{2}\right) ^ {2}} = \frac {1}{2} \sqrt {1 1}.
$$

Vector operations have many of the properties of ordinary arithmetic. 

Properties of Vector Operations 

Let u, v, w be vectors and a, b be scalars. 

1. u + = + v v u 

$$
\mathbf {2 .} (\mathbf {u} + \mathbf {v}) + \mathbf {w} = \mathbf {u} + (\mathbf {v} + \mathbf {w})
$$

3. $\mathbf { u } + \mathbf { 0 } = \mathbf { u }$ 

4. u + − = ( ) u 0 

5. $0 \mathbf { u } = \mathbf { 0 }$ 

6. u u 1 = 

7. $a ( b \mathbf { u } ) = ( a b ) \mathbf { u }$ 

8. $a ( \mathbf { u } + \mathbf { v } ) = a \mathbf { u } + a \mathbf { v }$ 

9. $( a + b ) \mathbf { u } = a \mathbf { u } + b \mathbf { u }$ 

These properties are readily verified using the definitions of vector addition and multiplication by a scalar. For instance, to establish Property 1, we have 

$$
\begin{array}{r l} \mathbf {u} + \mathbf {v} & = \langle u _ {1}, u _ {2}, u _ {3} \rangle + \langle v _ {1}, v _ {2}, v _ {3} \rangle \\ & = \langle u _ {1} + v _ {1}, u _ {2} + v _ {2}, u _ {3} + v _ {3} \rangle \\ & = \langle v _ {1} + u _ {1}, v _ {2} + u _ {2}, v _ {3} + u _ {3} \rangle \\ & = \langle v _ {1}, v _ {2}, v _ {3} \rangle + \langle u _ {1}, u _ {2}, u _ {3} \rangle \\ & = \mathbf {v} + \mathbf {u}. \end{array}
$$

Commutativity of real numbers (in each component) 

Definition of vector addition 

When three or more space vectors lie in the same plane, we say they are coplanar vectors. For example, the vectors u, v, and $\mathbf { u } + \mathbf { v }$ are always coplanar. 

![教材插图](/books/thomas-calculus/assets/ffa6b82e1062312af5595064411876d5e7565752634057408cd5d8a94d9a824f.jpg)



FIGURE 11.15 The vector from $P _ { 1 }$ to $P _ { 2 }$ is $\overline { { P _ { 1 } P _ { 2 } } } = ( x _ { 2 } - x _ { 1 } ) { \bf i } + ( y _ { 2 } - y _ { 1 } ) { \bf j } +$ $( z _ { 2 } \mathrm { ~ - ~ } z _ { 1 } ) \mathbf { k } .$


**HISTORICAL BIOGRAPHY**

### Hermann Grassmann

(1809–1877) 

Grassmann was born in Prussia (modern-day Poland) and attended the University of Berlin. However, his study of mathematics and physics was done on his own. In 1844, he published Die lineale Ausdehnungslehre, which contained new concepts in geometric calculus. He introduced the n-dimensional vector space and new concepts and structures in linear algebra. 

To know more, visit the companion Website. 

### Unit Vectors

A vector v of length 1 is called a unit vector. The standard unit vectors are 

$$
\mathbf {i} = \langle 1, 0, 0 \rangle , \quad \mathbf {j} = \langle 0, 1, 0 \rangle , \quad \text { and } \quad \mathbf {k} = \langle 0, 0, 1 \rangle .
$$

Any vector $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ can be written as a linear combination of the standard unit vectors as follows: 

$$
\begin{array}{l} \mathbf {v} = \langle v _ {1}, v _ {2}, v _ {3} \rangle = \langle v _ {1}, 0, 0 \rangle + \langle 0, v _ {2}, 0 \rangle + \langle 0, 0, v _ {3} \rangle \\ \quad = v _ {1} \langle 1, 0, 0 \rangle + v _ {2} \langle 0, 1, 0 \rangle + v _ {3} \langle 0, 0, 1 \rangle \\ \quad = v _ {1} \mathbf {i} + v _ {2} \mathbf {j} + v _ {3} \mathbf {k}. \end{array}
$$

We call the scalar (or number) $\upsilon _ { 1 }$ the i-component of the vector $\mathbf { v } , v _ { 2 }$ the j-component, and $\boldsymbol { v } _ { 3 }$ the k-component. As shown in Figure 11.15, the component form of the vector from $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ to $P _ { 2 } ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ is 

$$
\overrightarrow {P _ {1} P _ {2}} = \left(x _ {2} - x _ {1}\right) \mathbf {i} + \left(y _ {2} - y _ {1}\right) \mathbf {j} + \left(z _ {2} - z _ {1}\right) \mathbf {k}.
$$

$\begin{array} { r } { { \mathrm { I f } } \ \mathbf { v } \ \neq \ \mathbf { 0 } } \end{array}$ , then its length v is not zero and 

$$
\left| \frac {1}{| \mathbf {v} |} \mathbf {v} \right| = \frac {1}{| \mathbf {v} |} | \mathbf {v} | = 1.
$$

That is, if the vector v is not the zero vector, then $\mathbf { v } / | \mathbf { v } |$ is a unit vector in the direction of v, and it is also called the direction of v. 

**EXAMPLE 4** Find a unit vector u in the direction of the vector from $P _ { 1 } ( 1 , 0 , 1 )$ to $P _ { 2 } ( 3 , 2 , 0 )$ 

**Solution** We write $\overrightarrow { P _ { 1 } P _ { 2 } }$ as a linear combination of the standard unit vectors and then divide it by its length: 

$$
\begin{array}{c} \overrightarrow {P _ {1} P _ {2}} = (3 - 1) \mathbf {i} + (2 - 0) \mathbf {j} + (0 - 1) \mathbf {k} = 2 \mathbf {i} + 2 \mathbf {j} - \mathbf {k} \\ \left| \overrightarrow {P _ {1} P _ {2}} \right| = \sqrt {(2) ^ {2} + (2) ^ {2} + (- 1) ^ {2}} = \sqrt {4 + 4 + 1} = \sqrt {9} = 3 \\ \mathbf {u} = \frac {\overrightarrow {P _ {1} P _ {2}}}{\left| \overrightarrow {P _ {1} P _ {2}} \right|} = \frac {2 \mathbf {i} + 2 \mathbf {j} - \mathbf {k}}{3} = \frac {2}{3} \mathbf {i} + \frac {2}{3} \mathbf {j} - \frac {1}{3} \mathbf {k}. \end{array}
$$

This unit vector u is the direction of $\overrightarrow { P _ { 1 } P _ { 2 } }$ 

**EXAMPLE 5** I $\mathbf { \dot { v } } = 3 \mathbf { i } - 4 \mathbf { j }$ is a velocity vector, express v as a product of its magnitude (its speed) times its direction. 

**Solution** Speed is the magnitude (length) of v: 

$$
| \mathbf {v} | = \sqrt {(3) ^ {2} + (- 4) ^ {2}} = \sqrt {9 + 1 6} = 5.
$$

The unit vector v v is the direction of v: 

$$
\frac {\mathbf {v}}{| \mathbf {v} |} = \frac {3 \mathbf {i} - 4 \mathbf {j}}{5} = \frac {3}{5} \mathbf {i} - \frac {4}{5} \mathbf {j}.
$$

So 

$$
\mathbf {v} = 3 \mathbf {i} - 4 \mathbf {j} = 5 \Big (\underbrace {\frac {3}{5} \mathbf {i} - \frac {4}{5} \mathbf {j}} _ {\text { Length   (speed) }} \Big).
$$

In summary, we can express any nonzero vector v in terms of its two important features, length and direction, by writing $\mathbf { v } = | \mathbf { v } | { \frac { \mathbf { v } } { | \mathbf { v } | } } .$ 

If $\mathbf { \dot { \textbf { v } } } \neq \mathbf { \textbf { 0 } }$ , then 

1. $\frac { \textbf { v } } { | \textbf { v } | }$ is a unit vector called the direction of $\mathbf { v } ;$ 

2. the equation $\mathbf { v } = | \mathbf { v } | { \frac { \mathbf { v } } { | \mathbf { v } | } }$ expresses v as its length times its direction. 

**EXAMPLE 6** A force of 6 newtons is applied in the direction of the vector $\mathbf { v } = 2 \mathbf { i } + 2 \mathbf { j } - \mathbf { k }$ . Express the force F as a product of its magnitude and direction. 

**Solution** The force vector has magnitude 6 and direction ${ \frac { \mathbf { v } } { | \mathbf { v } | } } ,$ so 

![教材插图](/books/thomas-calculus/assets/608b4077ee2b22a96278b4afe10b9c5b284a188ec97286fcb1791c0394175fca.jpg)



FIGURE 11.16 The coordinates of the midpoint are the averages of the coordinates of $P _ { 1 }$ and $P _ { 2 }$ .


$$
\begin{array}{l} \mathbf {F} = 6 \frac {\mathbf {v}}{| \mathbf {v} |} = 6 \frac {2 \mathbf {i} + 2 \mathbf {j} - \mathbf {k}}{\sqrt {2 ^ {2} + 2 ^ {2} + (- 1) ^ {2}}} = 6 \frac {2 \mathbf {i} + 2 \mathbf {j} - \mathbf {k}}{3} \\ = 6 \left(\frac {2}{3} \mathbf {i} + \frac {2}{3} \mathbf {j} - \frac {1}{3} \mathbf {k}\right). \end{array}
$$

### Midpoint of a Line Segment

Vectors are often useful in geometry. For example, the coordinates of the midpoint of a line segment are found by averaging. 

The midpoint M of the line segment joining points $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ and $P _ { 2 } ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ is the point 

$$
\Big (\frac {x _ {1} + x _ {2}}{2}, \frac {y _ {1} + y _ {2}}{2}, \frac {z _ {1} + z _ {2}}{2} \Big).
$$

To see why, observe (Figure 11.16) that 

$$
\begin{array}{r l} \overrightarrow {O M} & = \overrightarrow {O P _ {1}} + \frac {1}{2} (\overrightarrow {P _ {1} P _ {2}}) = \overrightarrow {O P _ {1}} + \frac {1}{2} (\overrightarrow {O P _ {2}} - \overrightarrow {O P _ {1}}) \\ & = \frac {1}{2} (\overrightarrow {O P _ {1}} + \overrightarrow {O P _ {2}}) \\ & = \frac {x _ {1} + x _ {2}}{2} \mathbf {i} + \frac {y _ {1} + y _ {2}}{2} \mathbf {j} + \frac {z _ {1} + z _ {2}}{2} \mathbf {k}. \end{array}
$$

**EXAMPLE 7** The midpoint of the segment joining $P _ { 1 } ( 3 , - 2 , 0 )$ and $P _ { 2 } ( 7 , 4 , 4 )$ is 

$$
\left(\frac {3 + 7}{2}, \frac {- 2 + 4}{2}, \frac {0 + 4}{2}\right) = (5, 1, 2).
$$

![教材插图](/books/thomas-calculus/assets/003d57b2f40ddba997dfbe8060e554026f3d9f18bb6b3d95e58cedd4a2e90738.jpg)



NOT TO SCALE



FIGURE 11.17 Vectors representing the velocities of the airplane u and tailwind v in Example 8.


![教材插图](/books/thomas-calculus/assets/7920ab7779ddb353f908db992018092ef035291e87cb1fadf83ea1bbc9334b52.jpg)



(b)


### Applications


FIGURE 11.18 The suspended weight in Example 9.


An important application of vectors occurs in navigation. 

**EXAMPLE 8** A jet airliner, flying due east at 800 kmh in still air, encounters a 110  kmh tailwind blowing in the direction $6 0 ^ { \circ }$ north of east. The airplane holds its compass heading due east but, because of the wind, acquires a new ground speed and direction. What are they? 

**Solution** If u is the velocity of the airplane alone and v is the velocity of the tailwind, then $| \mathbf { u } | = 8 0 0$ and $| \mathbf { v } | = 1 1 0$ (Figure 11.17). The velocity of the airplane with respect to the ground is given by the magnitude and direction of the resultant vector $\mathbf { u } + \mathbf { v } .$ If we let the positive x-axis represent east and the positive y-axis represent north, then the component forms of u and v are 

$$
\mathbf {u} = \langle 8 0 0, 0 \rangle \quad \text { and } \quad \mathbf {v} = \langle 1 1 0 \cos 6 0 ^ {\circ}, 1 1 0 \sin 6 0 ^ {\circ} \rangle = \langle 5 5, 5 5 \sqrt {3} \rangle .
$$

Therefore, 

$$
\begin{array}{l} \mathbf {u} + \mathbf {v} = \langle 8 5 5, 5 5 \sqrt {3} \rangle = 8 5 5 \mathbf {i} + 5 5 \sqrt {3} \mathbf {j} \\ | \mathbf {u} + \mathbf {v} | = \sqrt {8 5 5 ^ {2} + (5 5 \sqrt {3}) ^ {2}} \approx 8 6 0. 3 \end{array}
$$

and 

$$
\theta = \tan^ {- 1} \frac {5 5 \sqrt {3}}{8 5 5} \approx 6. 4 ^ {\circ}.
$$

![教材插图](/books/thomas-calculus/assets/ec5eefd417e33fb2711752700937b03fac9348315b4505d5538cedd220a181da.jpg)



(a)


The new ground speed of the airplane is about 860.3 km $\operatorname { \Pi } _ { 1 / \operatorname { h } , }$ and its new direction is about $6 . 4 ^ { \circ }$ north of east. 

Another important application occurs in physics and engineering when several forces are acting on a single object. 

**EXAMPLE 9** A 75-N weight is suspended by two wires, as shown in Figure 11.18a. Find the forces $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ acting in both wires. 

**Solution** The force vectors $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ have magnitudes $| \mathbf { F } _ { 1 } |$ and $| \mathbf { F } _ { 2 } |$ and components that are measured in newtons. The resultant force is the sum ${ \bf F } _ { 1 } + { \bf F } _ { 2 } $ which must be equal in magnitude to the weight vector w but acting in the opposite (or upward) direction (see Figure 11.18b). It follows from the figure that 

$$
\mathbf {F} _ {1} = \left\langle - \left| \mathbf {F} _ {1} \right| \cos 5 5 ^ {\circ}, \left| \mathbf {F} _ {1} \right| \sin 5 5 ^ {\circ} \right\rangle \quad \text { and } \quad \mathbf {F} _ {2} = \left\langle \left| \mathbf {F} _ {2} \right| \cos 4 0 ^ {\circ}, \left| \mathbf {F} _ {2} \right| \sin 4 0 ^ {\circ} \right\rangle .
$$

Since $\mathbf { F } _ { 1 } + \mathbf { F } _ { 2 } = \langle 0 , 7 5 \rangle$ , the resultant vector leads to the system of equations 

$$
\begin{array}{c} - | \mathbf {F} _ {1} | \cos 5 5 ^ {\circ} + | \mathbf {F} _ {2} | \cos 4 0 ^ {\circ} = 0 \\ | \mathbf {F} _ {1} | \sin 5 5 ^ {\circ} + | \mathbf {F} _ {2} | \sin 4 0 ^ {\circ} = 7 5. \end{array}
$$

Solving for $| \mathbf { F } _ { 2 } |$ in the first equation and substituting the result into the second equation, we get 

$$
\left| \mathbf {F} _ {2} \right| = \frac {\left| \mathbf {F} _ {1} \right| \cos 5 5 ^ {\circ}}{\cos 4 0 ^ {\circ}} \quad \text { and } \quad \left| \mathbf {F} _ {1} \right| \sin 5 5 ^ {\circ} + \frac {\left| \mathbf {F} _ {1} \right| \cos 5 5 ^ {\circ}}{\cos 4 0 ^ {\circ}} \sin 4 0 ^ {\circ} = 7 5.
$$

It follows that 

$$
\left| \mathbf {F} _ {1} \right| = \frac {7 5}{\sin 5 5 ^ {\circ} + \cos 5 5 ^ {\circ} \tan 4 0 ^ {\circ}} \approx 5 7. 6 7 \mathrm{N}
$$

and 

$$
\left| \mathbf {F} _ {2} \right| = \frac {\left| \mathbf {F} _ {1} \right| \cos 5 5 ^ {\circ}}{\cos 4 0 ^ {\circ}} = \frac {7 5}{\sin 5 5 ^ {\circ} + \cos 5 5 ^ {\circ} \tan 4 0 ^ {\circ}} \frac {\cos 5 5 ^ {\circ}}{\cos 4 0 ^ {\circ}} \approx 4 3. 1 8 \mathrm{N}.
$$

The force vectors are then 

$$
\mathbf {F} _ {1} = \left\langle - \left| \mathbf {F} _ {1} \right| \cos 5 5 ^ {\circ}, \left| \mathbf {F} _ {1} \right| \sin 5 5 ^ {\circ} \right\rangle \approx \left\langle - 3 3. 0 8, 4 7. 2 4 \right\rangle
$$

and 

$$
\mathbf {F} _ {2} = \langle | \mathbf {F} _ {2} | \cos 4 0 ^ {\circ}, | \mathbf {F} _ {2} | \sin 4 0 ^ {\circ} \rangle \approx \langle 3 3. 0 8, 2 7. 7 6 \rangle .
$$

### Vectors in n Dimensions

So far in this section, we introduced two- and three-dimensional vectors. We extend these notions by considering an n-dimensional vector $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , . . . , v _ { n } \rangle$ (an n-tuple of real numbers). We define 

1. the magnitude or length of v: $| \mathbf { v } | = { \sqrt { v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } + \cdots + v _ { n } ^ { 2 } } }$ ; 

2. addition of two vectors: 

$$
\langle u _ {1}, u _ {2}, \dots , u _ {n} \rangle + \langle v _ {1}, v _ {2}, \dots , v _ {n} \rangle = \langle u _ {1} + v _ {1}, u _ {2} + v _ {2}, \dots , u _ {n} + v _ {n} \rangle ;
$$

3. scalar multiplication of a vector by a real number: 

$$
k \left\langle v _ {1}, v _ {2}, \dots , v _ {n} \right\rangle = \left\langle k v _ {1}, k v _ {2}, \dots , k v _ {n} \right\rangle .
$$

The Properties of Vector Operations stated earlier in this section hold for n-dimensional vectors. 

When discussing vectors in this text, we will usually focus on the cases where $n = 2$ and $n = 3$ since these correspond to vectors in the plane and vectors in three-dimensional space, which are used in many applications (for instance, such vectors can represent velocity or force). Vectors with more than three components do arise in applications, but in those contexts they do not correspond to line segments in the plane or in threedimensional space. 

**EXAMPLE 10** The components of the vector $\mathbf { u } = \langle 7 0 . 9 , 6 3 . 2 , 7 7 . 2 , 4 7 . 1 , 5 5 . 6 \rangle$ contain the average temperatures (in degrees Fahrenheit) recorded between the years 2006 and 2010 in Houston, Los Angeles, Miami, Minneapolis, and New York. Likewise, the vectors $\mathbf { v } = \langle 7 1 . 2 , 6 4 . 3 , 7 8 . 0 , 4 7 . 1 , 5 6 . 0 \rangle$ and w = 〈 〉 72.5, 64.7, 78.6, 47.6, 56.5 represent average temperatures in the same cities over the periods 2011 through 2015 and 2016 through 2020. Find the vector whose components are the average temperatures between the year 2006 and the year 2020 in these cities. 

**Solution** To find the vector containing average temperatures, we add scalar multiples of the three vectors (in other words, we evaluate a linear combination): 

$$
\begin{array}{l} \mathbf {a} = \frac {1}{3} \mathbf {u} + \frac {1}{3} \mathbf {v} + \frac {1}{3} \mathbf {w} \\ \quad = \frac {1}{3} \langle 7 0. 9, 6 3. 2, 7 7. 2, 4 7. 1, 5 5. 6 \rangle + \frac {1}{3} \langle 7 1. 2, 6 4. 3, 7 8. 0, 4 7. 1, 5 6. 0 \rangle \\ \quad + \frac {1}{3} \langle 7 2. 5, 6 4. 7, 7 8. 6, 4 7. 6, 5 6. 5 \rangle \\ \approx \langle 7 1. 5, 6 4. 1, 7 7. 9, 4 7. 3, 5 6. 0 \rangle . \end{array}
$$

**EXAMPLE 11** A rectangular grayscale image m pixels (dots) wide and n pixels tall can be represented on a computer as a vector with m n⋅ components. A common format assigns an integer between 0 and 255 to each pixel, with 255 corresponding to the highest intensity (white), 0 to the lowest (black), and intermediate values to various shades of gray. 

Using this format, the $4 0 0 \times 4 0 0$ image containing all white pixels is represented by the 160,000-dimensional vector $\mathbf { w } = \langle 2 5 5 , . . . , 2 5 5 \rangle$ 〉. Figures 11.19a and b can be similarly represented by vectors u and v, respectively. 

In parts c, d, and e of Figure 11.19, we show different linear combinations of the vectors u and v. Notice how changing the scalar in front of each vector affects the resulting image. 

In Figure 11.19f, the image corresponds to the difference $\mathbf { w } - \mathbf { v }$ , effectively inverting the grayscale in that image. 

![教材插图](/books/thomas-calculus/assets/9ac23987633b872f527a153db2592f615c4f09db1fe52875bb14c76d081226b0.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/71d2e0ab3c0b2ed72c3d610207f3d2d6c2e7718aa23bfdeccdbe1cc4185c2012.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/aa6fa7a4ea06197e800892c810073c5707f34177b4b4e155ca73b2b25f46ee63.jpg)



(c)


![教材插图](/books/thomas-calculus/assets/c9b042d04ac039819d56dec3a638845ae22c7ec81f6f76bf154aadf7b7cdd05e.jpg)



(d)


![教材插图](/books/thomas-calculus/assets/e9db030ed098b433f7712c09cd6d959895fa2a5eae95420a278b828452292cc2.jpg)



(e)


![教材插图](/books/thomas-calculus/assets/4312d4f273d2ac80e27a06fffb1429b5b224caa043511bf016548df92df4ba5a.jpg)



(f)



FIGURE 11.19 Each 400 400× pixel image corresponds to a 160,000-dimensional vector: (a) u; (b) $\begin{array} { r } { { \bf v } ; ( { \bf c } ) \frac { 1 } { 4 } { \bf u } + \frac { 3 } { 4 } { \bf v } ; ( { \bf d } ) \frac { 1 } { 2 } { \bf u } + \frac { 1 } { 2 } { \bf v } ; ( { \bf e } ) \frac { 3 } { 4 } { \bf u } + \frac { 1 } { 4 } { \bf v } ; ( \mathrm { f } ) { \bf w } - { \bf v } . } \end{array}$


### Exercises 11.2
In Exercises 1–8, let $\mathbf { u } = \langle 3 , - 2 \rangle$ and $\mathbf { v } = \langle - 2 , 5 \rangle$ 〉. Find the (a) com- 5. $2  { \mathbf { u } } - 3  { \mathbf { v } }$ 



Vectors in the Plane 

3. $\mathbf { u } + \mathbf { v }$ 

4. $\mathbf { u } - \mathbf { v }$ 

6. $- 2 \mathbf { u } + 5 \mathbf { v }$ 

ponent form and (b) magnitude (length) of the vector. 7. $\frac { 3 } { 5 } { \bf u } + \frac { 4 } { 5 } { \bf v }$ 1. 3u 2. $- 2 \mathbf { v }$ 

8. $- { \frac { 5 } { 1 3 } } \mathbf { u } + { \frac { 1 2 } { 1 3 } } \mathbf { v }$ 

In Exercises 9–16, find the component form of the vector. 

9. The vector ${ \overline { { P Q } } } .$ , where $P = ( 1 , 3 )$ and $Q = ( 2 , - 1 )$ 

10. The vector ${ \overrightarrow { O P } } .$ , where O is the origin and P is the midpoint of segment RS, where $R = ( 2 , - 1 )$ and $S = ( - 4 , 3 )$ 

11. The vector from the point $A = ( 2 , 3 )$ to the origin 

12. The sum of AB and CD, where $A = ( 1 , - 1 ) , B = ( 2 , 0 )$ $C = ( - 1 , 3 )$ , and D = −( ) 2, 2 

13. The unit vector that makes an angle $\theta = 2 \pi / 3$ with the positive x-axis 

14. The unit vector that makes an angle $\theta = - 3 \pi / 4$ with the positive x-axis 

15. The unit vector obtained by rotating the vector 〈 〉0, 1  by $1 2 0 ^ { \circ }$ counterclockwise about the origin 

16. The unit vector obtained by rotating the vector 〈 〉1, 0  by $1 3 5 ^ { \circ }$ counterclockwise about the origin 

#### Vectors in Space

In Exercises 17–22, express each vector in the form $\mathbf { w } = w _ { 1 } \mathbf { i } + w _ { 2 } \mathbf { j } + w _ { 3 } \mathbf { k } .$ 

17. ${ \overrightarrow { P _ { 1 } P _ { 2 } } } { \mathrm { ~ i f ~ } } P _ { 1 }$ is the point 5, 7,  1 ( − ) and $P _ { 2 }$ is the point 2, 9,  2 ( − ) 

18. ${ \overrightarrow { P _ { 1 } P _ { 2 } } } { \mathrm { ~ i f ~ } } P _ { 1 }$ is the point 1, 2, 0 ( ) and $P _ { 2 }$ is the point 3, 0, 5 (− ) 

19. AB if A is the point 7,  8, 1 (− − ) and B is the point 10, 8, 1 (− ) 

20. AB if A is the point 1, 0, 3( ) and B is the point 1, 4, 5(− ) 

21. u v 5 − if u = 〈 − 〉 1, 1,  1 and v = 〈 〉 2, 0, 3 

22. u v −2 3 + if u = 〈− 〉 1, 0, 2 and v = 〈 〉 1, 1, 1 

#### Geometric Representations

In Exercises 23 and 24, copy vectors u, v, and w head to tail as needed to sketch the indicated vector. 


23.


![教材插图](/books/thomas-calculus/assets/af5e2577a44db4a150387038ac0a2fe19093a0222be1a183a4bddbd0c241dd1a.jpg)


a. $\mathbf { u } + \mathbf { v }$ 

b. $\mathbf { u } + \mathbf { v } + \mathbf { w }$ 

c. $\mathbf { u } - \mathbf { v }$ 

![教材插图](/books/thomas-calculus/assets/66b992ed69dfdb87e61f38bd169f1bb9fe0db64637524c810986d2570b5d5804.jpg)


#### Length and Direction

In Exercises 25–30, express each vector as a product of its length and direction. 

25. $2 \mathbf { i } + \mathbf { j } - 2 \mathbf { k }$

26. $9 { \bf i } - 2 { \bf j } + 6 { \bf k }$

27. 5k 

28. $\frac { 3 } { 5 } \mathbf { i } + \frac { 4 } { 5 } \mathbf { k }$ 

29. $\frac { 1 } { \sqrt { 6 } } \mathbf { i } - \frac { 1 } { \sqrt { 6 } } \mathbf { j } - \frac { 1 } { \sqrt { 6 } } \mathbf { k }$ 

30. $\frac { \textbf { i } } { \sqrt { 3 } } + \frac { \textbf { j } } { \sqrt { 3 } } + \frac { \textbf { k } } { \sqrt { 3 } }$ 

31. Find the vectors whose lengths and directions are given. Try to do the calculations without writing. 

<table><tr><td>Length</td><td>Direction</td></tr><tr><td>a. 2</td><td>i</td></tr><tr><td>b. <eq>\sqrt{3}</eq></td><td><eq>-k</eq></td></tr><tr><td>c. <eq>\frac{1}{2}</eq></td><td><eq>\frac{3}{5}j + \frac{4}{5}k</eq></td></tr><tr><td>d. 7</td><td><eq>\frac{6}{7}i - \frac{2}{7}j + \frac{3}{7}k</eq></td></tr></table>

32. Find the vectors whose lengths and directions are given. Try to do the calculations without writing. 

<table><tr><td>Length</td><td>Direction</td></tr><tr><td>a. 7</td><td><eq>-\mathbf{j}</eq></td></tr><tr><td>b. <eq>\sqrt{2}</eq></td><td><eq>-\frac{3}{5}\mathbf{i} - \frac{4}{5}\mathbf{k}</eq></td></tr><tr><td>c. <eq>\frac{13}{12}</eq></td><td><eq>\frac{3}{13}\mathbf{i} - \frac{4}{13}\mathbf{j} - \frac{12}{13}\mathbf{k}</eq></td></tr><tr><td>d. <eq>a &gt; 0</eq></td><td><eq>\frac{1}{\sqrt{2}}\mathbf{i} + \frac{1}{\sqrt{3}}\mathbf{j} - \frac{1}{\sqrt{6}}\mathbf{k}</eq></td></tr></table>

33. Find a vector of magnitude 7 in the direction of $\mathbf { v } = 1 2 \mathbf { i } - 5 \mathbf { k }$ 

34. Find a vector of magnitude 3 in the direction opposite to the direction of $\mathbf { v } = ( 1 / 2 ) \mathbf { i } - ( 1 / 2 ) \mathbf { j } - ( 1 / 2 ) \mathbf { k }$ 

#### Direction and Midpoints

In Exercises 35–38, find a. the direction of $\overrightarrow { P _ { 1 } P _ { 2 } }$ and b. the midpoint of line segment $P _ { 1 } P _ { 2 }$ 

35. $P _ { 1 } ( - 1 , 1 , 5 ) \quad P _ { 2 } ( 2 , 5 , 0 )$ 

36. $P _ { 1 } ( 1 , 4 , 5 ) \quad P _ { 2 } ( 4 , - 2 , 7 )$ 

37. $P _ { 1 } ( 3 , 4 , 5 ) ~ P _ { 2 } ( 2 , 3 , 4 )$ 

38. $P _ { 1 } ( 0 , 0 , 0 ) \quad P _ { 2 } ( 2 , - 2 , - 2 )$ 

39. $\mathrm { I f } \ \overline { { A B } } = \mathbf { i } + 4 \mathbf { j } - 2 \mathbf { k }$ and B is the point 5, 1, 3( ), find A. 

40. $\mathrm { I f } \ \overline { { A B } } = - 7 \mathbf { i } + 3 \mathbf { j } + 8$ k  and A is the point $( - 2 , - 3 , 6 )$ , find B. 

#### Theory and Applications

41. Linear combination Let $\mathbf { u } = 2 \mathbf { i } + \mathbf { j } ,$ v i j = + , and w i j= − . Find scalars a and b such that $\mathbf { u } = a \mathbf { v } + b \mathbf { w } .$ 

42. Linear combination Let u = −i j 2 , ${ \bf v } = 2 { \bf i } + 3 { \bf j } ,$ , and w i j= + . Write $\small \mathbf { u } = \mathbf { u } _ { 1 } + \mathbf { u } _ { 2 } ,$ , where u is parallel to v and $\mathbf { u } _ { 2 }$ is parallel to w. (See Exercise 41.) 

43. Linear combination Let u = 〈 〉 1, 2, 1 , $\mathbf { v } = \langle 1 , - 1 , - 1 \rangle ,$ w = 〈 − 〉 1, 1,  1 , and $\mathbf { z } = \langle 2 , - 3 , - 4 \rangle$ . Find scalars a, b, and c such that $\mathbf { z } = a \mathbf { u } + b \mathbf { v } + c \mathbf { w } .$ 

44. Linear combination Let $\mathbf { u } = \langle 1 , 2 , 2 \rangle$ $\mathbf { v } = \langle 1 , - 1 , - 1 \rangle ,$ $\textbf { w } = \langle 1 , 3 , - 1 \rangle$ , and $\mathbf { z } = \langle 2 , 1 1 , 8 \rangle$ . Write $\mathbf { z } = \mathbf { u } _ { 1 } + \mathbf { u } _ { 2 } + \mathbf { u } _ { 3 }$ where $\mathbf { u } _ { 1 }$ is parallel to u,  u is parallel to v, and $\mathbf { u } _ { 3 }$ is parallel to w. What are ${ \bf u } _ { 1 } , { \bf u } _ { 2 } , { \bf u } _ { 3 } ?$ 

When solving Exercises 45–50, you may need to use a calculator or a computer. 

45. Velocity An airplane is flying in the direction $2 5 ^ { \circ }$ west of north at 800 km h. Find the component form of the velocity of the airplane, assuming that the positive x-axis represents due east and the positive y-axis represents due north. 

46. (Continuation of Example 8.) What speed and direction should the jetliner in Example 8 have in order for the resultant vector to be 800 km/h due east? 

47. Consider a 100-N weight suspended by two wires as shown in the accompanying figure. Find the magnitudes and components of the force vectors $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ . 

![教材插图](/books/thomas-calculus/assets/fe769ef8fdc3c54a462999891ec42827ae940d34dfa169e4cf63f5cfd5a11dcc.jpg)


48. Consider a 50-N weight suspended by two wires as shown in the accompanying figure. If the magnitude of vector $\mathbf { F } _ { 1 }$ is 35 N, find angle α and the magnitude of vector $\mathbf { F } _ { 2 } ^ { \phantom { \dagger } }$ 

![教材插图](/books/thomas-calculus/assets/6e72d4326b28a491ee9a5f8ef6e42e94b4b3e3d6f4359480f33a1e553e4d2b11.jpg)


49. Consider a w-N weight suspended by two wires as shown in the accompanying figure. If the magnitude of vector $\mathbf { F } _ { 2 }$ is 100 N, find w and the magnitude of vector $\mathbf { F } _ { 1 }$ 

![教材插图](/books/thomas-calculus/assets/e1e557cc4e4843e63980ba573afc64bb687cbb02414030cd86932f72d2ba04f8.jpg)


50. Consider a 25-N weight suspended by two wires as shown in the accompanying figure. If the magnitudes of vectors $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ are both 75 N, then angles α and β are equal. Find . α 

![教材插图](/books/thomas-calculus/assets/f0d9f39fd45d70b7ea2fcfaa2f194efde5f2d0ed3a14809fa4f25af19361059e.jpg)


51. Location A bird flies from its nest 5 km in the direction $6 0 ^ { \circ }$ north of east, where it stops to rest on a tree. It then flies 10 km in the direction due southeast and lands atop a telephone pole. Place an xy-coordinate system so that the origin is the bird’s nest, the x-axis points east, and the y-axis points north. 

a. At what point is the tree located? 

b. At what point is the telephone pole? 

52. Use similar triangles to find the coordinates of the point Q that divides the segment from $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ to $P _ { 2 } ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ into two lengths whose ratio is $p / q = r .$ 

53. Medians of a triangle Suppose that A, B, and C are the corner points of the thin triangular plate of constant density shown here. 

a. Find the vector from C to the midpoint M of side AB. 

b. Find the vector from C to the point that lies two-thirds of the way from C to M on the median CM. 

c. Find the coordinates of the point in which the medians of ΔABC intersect. According to Exercise 27, Section 6.6, this point is the plate’s center of mass. (See the figure.) 

![教材插图](/books/thomas-calculus/assets/312c3b2c778c7756f3b72f944e04563e4a9111e9e1f4154392515143ab310a4b.jpg)


54. Find the vector from the origin to the point of intersection of the medians of the triangle whose vertices are 

$$
A (1, - 1, 2), \quad B (2, 1, 3), \quad \text { and } \quad C (- 1, 2, - 1).
$$

55. Let ABCD be a general, not necessarily planar, quadrilateral in space. Show that the two segments joining the midpoints of opposite sides of ABCD bisect each other. (Hint: Show that the segments have the same midpoint.) 

56. Vectors are drawn from the center of a regular n-sided polygon in the plane to the vertices of the polygon. Show that the sum of the vectors is zero. (Hint: What happens to the sum if you rotate the polygon about its center?) 

57. Suppose that A, B, and C are vertices of a triangle and that a, b, and c are, respectively, the midpoints of the opposite sides. Show that $\overrightarrow { A a } + \overrightarrow { B b } + \overrightarrow { C c } = 0$ 

58. Unit vectors in the plane Show that a unit vector in the plane can be expressed as $\mathbf { u } = ( \cos \theta ) \mathbf { i } + ( \sin \theta ) \mathbf { j }$ , obtained by rotating i through an angle θ in the counterclockwise direction. Explain why this form gives every unit vector in the plane. 

59. Consider a triangle whose vertices are $A ( 2 , - 3 , 4 ) , B ( 1 , 0 , - 1 )$ and C( ) 3, 1, 2 . a. Find ${ \overline { { A B } } } + { \overline { { B C } } } + { \overrightarrow { C A } } .$ b. Find ${ \overrightarrow { B A } } + { \overrightarrow { A C } } + { \overrightarrow { C B } } .$ 

n-Dimensional Vectors n-Dimensional Vectors 

In Exercises 60–65, let $\mathbf { u } = \langle 2 , - 3 , 0 , 1 \rangle$ and $\mathbf { v } = \langle 0 , - 4 , - 1 , 3 \rangle$ Find the (a) component form and (b) magnitude (length) of the vector. 60. 2u 61. −4v 62. $\mathbf { u } + \mathbf { v }$ 63. $\mathbf { v } \ - \ \mathbf { u }$ 64. $3 \mathbf { u } - 2 \mathbf { v }$ 65. $4 \mathbf { u } + 3 \mathbf { v }$ 

## 11.3 The Dot Product

![教材插图](/books/thomas-calculus/assets/26fc76e33c154494cbb88ca46e4700ea91a7fe0b51f6dfdc29541e45f808f1d1.jpg)



FIGURE 11.20 The magnitude of the force F in the direction of vector v is the length F cos θ of the projection of F onto v.


![教材插图](/books/thomas-calculus/assets/4ec9f253b08e39e23ab6718fb100ab8d42a01a418574b215fc5b10dd6156c3fc.jpg)



FIGURE 11.21 The angle between u and v given by Theorem 1 lies in the interval [ ] 0,  . π


If a force F is applied to a particle moving along a path, we often need to know the magnitude of the force in the direction of motion. If v is parallel to the tangent line to the path at the point where F is applied, then we want the magnitude of F in the direction of v. Figure 11.20 shows that the scalar quantity we seek is the length F cos , θ where θ is the angle between the two vectors F and v. 

In this section we show how to calculate easily the angle between two vectors directly from their components. A key part of the calculation is an expression called the dot product. Dot products are also called inner or scalar products because the product results in a scalar, not a vector. After investigating the dot product, we apply it to finding the projection of one vector onto another (as displayed in Figure 11.20) and to finding the work done by a constant force acting through a displacement. 

### Angle Between Vectors

When two nonzero vectors u and v are placed so their initial points coincide, they form an angle θ of measure $0 \leq \theta \leq \pi$ (Figure 11.21). If the vectors do not lie along the same line, the angle θ is measured in the plane containing both of them. If they do lie along the same line, the angle between them is 0 if they point in the same direction and π if they point in opposite directions. The angle θ is the angle between u and v. Theorem 1 gives a formula to determine this angle. 

THEOREM 1—Angle Between Two Vectors The angle θ between two nonzero vectors $\mathbf { u } = \langle u _ { 1 } , u _ { 2 } , u _ { 3 } \rangle$ and $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ is given by 

$$
\theta = \arccos \left(\frac {u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}}{| \mathbf {u} | | \mathbf {v} |}\right).
$$

We use the law of cosines to prove Theorem 1, but before doing so, we focus attention on the expression $u _ { 1 } v _ { 1 } + u _ { 2 } v _ { 2 } + u _ { 3 } v _ { 3 }$ in the calculation for . θ This expression is the sum of the products of the corresponding components of the vectors u and v. 

> ***DEFINITION*** The dot product u ⋅ v (“u dot v”) of vectors $\mathbf { u } = \langle u _ { 1 } , u _ { 2 } , u _ { 3 } \rangle$ and $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ is the scalar 
>
> $$
> \mathbf {u} \cdot \mathbf {v} = u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}.
> $$

**EXAMPLE 1** We illustrate the definition. 

$$
\begin{array}{r l} \langle 1, - 2, - 1 \rangle \cdot \langle - 6, 2, - 3 \rangle & = (1) (- 6) + (- 2) (2) + (- 1) (- 3) \\ & = - 6 - 4 + 3 = - 7 \end{array} \tag {a}
$$

$$
(\mathbf {b}) \left(\frac {1}{2} \mathbf {i} + 3 \mathbf {j} + \mathbf {k}\right) \cdot (4 \mathbf {i} - \mathbf {j} + 2 \mathbf {k}) = \left(\frac {1}{2}\right) (4) + (3) (- 1) + (1) (2) = 1
$$

The dot product of a pair of two-dimensional vectors is defined in a similar fashion: 

$$
\left\langle u _ {1}, u _ {2} \right\rangle \cdot \left\langle v _ {1}, v _ {2} \right\rangle = u _ {1} v _ {1} + u _ {2} v _ {2}.
$$

We will see throughout the remainder of this text that the dot product is a key tool for many important geometric and physical calculations in space (and the plane). 

![教材插图](/books/thomas-calculus/assets/345276488f2aa926746b6eec97223046729fe059cd7d0b0099a5ea4ff6d88740.jpg)



FIGURE 11.22 The parallelogram law of addition of vectors gives $\mathbf { w } = \mathbf { u } - \mathbf { v } .$


Proof of Theorem 1 Applying the law of cosines (Equation (8), Section 1.3) to the triangle in Figure 11.22, we find that 

$$
| \mathbf {w} | ^ {2} = | \mathbf {u} | ^ {2} + | \mathbf {v} | ^ {2} - 2 | \mathbf {u} | | \mathbf {v} | \cos \theta \quad \text {   Law   of   cosines   }
$$

$$
2 | \mathbf {u} | | \mathbf {v} | \cos \theta = | \mathbf {u} | ^ {2} + | \mathbf {v} | ^ {2} - | \mathbf {w} | ^ {2}.
$$

Because $\mathbf { w } = \mathbf { u } - \mathbf { v } ,$ the component form of w is $\langle u _ { 1 } - v _ { 1 } , u _ { 2 } - v _ { 2 } , u _ { 3 } - v _ { 3 } \rangle$ . So 

$$
| \mathbf {u} | ^ {2} = \left(\sqrt {u _ {1} ^ {2} + u _ {2} ^ {2} + u _ {3} ^ {2}}\right) ^ {2} = u _ {1} ^ {2} + u _ {2} ^ {2} + u _ {3} ^ {2}
$$

$$
| \mathbf {v} | ^ {2} = \left(\sqrt {v _ {1} ^ {2} + v _ {2} ^ {2} + v _ {3} ^ {2}}\right) ^ {2} = v _ {1} ^ {2} + v _ {2} ^ {2} + v _ {3} ^ {2}
$$

$$
\begin{array}{l} | \mathbf {w} | ^ {2} = \left(\sqrt {(u _ {1} - v _ {1}) ^ {2} + (u _ {2} - v _ {2}) ^ {2} + (u _ {3} - v _ {3}) ^ {2}}\right) ^ {2} \\ = (u _ {1} - v _ {1}) ^ {2} + (u _ {2} - v _ {2}) ^ {2} + (u _ {3} - v _ {3}) ^ {2} \\ = u _ {1} ^ {2} - 2 u _ {1} v _ {1} + v _ {1} ^ {2} + u _ {2} ^ {2} - 2 u _ {2} v _ {2} + v _ {2} ^ {2} + u _ {3} ^ {2} - 2 u _ {3} v _ {3} + v _ {3} ^ {2} \end{array}
$$

and 

$$
\left| \mathbf {u} \right| ^ {2} + \left| \mathbf {v} \right| ^ {2} - \left| \mathbf {w} \right| ^ {2} = 2 (u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}).
$$

Therefore, 

$$
\begin{array}{c} 2 | \mathbf {u} | | \mathbf {v} | \cos \theta = | \mathbf {u} | ^ {2} + | \mathbf {v} | ^ {2} - | \mathbf {w} | ^ {2} = 2 (u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}) \\ | \mathbf {u} | | \mathbf {v} | \cos \theta = u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3} \\ \cos \theta = \frac {u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}}{| \mathbf {u} | | \mathbf {v} |}. \end{array}
$$

Thus, for $0 \leq \theta \leq \pi .$ , we have $\theta = \operatorname { a r c c o s } { \left( \frac { u _ { 1 } v _ { 1 } + u _ { 2 } v _ { 2 } + u _ { 3 } v _ { 3 } } { | \mathbf { u } | | \mathbf { v } | } \right) } .$ 

Dot Product and Angles
The angle between two nonzero vectors u and v is $\theta = \arccos\left(\frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}\right)$ .
The dot product of two vectors u and v is given by $u \cdot v = |u||v| \cos \theta$ . 

**EXAMPLE 2** Find the angle between u = − − i j k 2 2 and $\mathbf { v } = 6 \mathbf { i } + 3 \mathbf { j } + 2 \mathbf { k }$

**Solution** We use the formula above: 

$$
\mathbf {u} \cdot \mathbf {v} = (1) (6) + (- 2) (3) + (- 2) (2) = 6 - 6 - 4 = - 4
$$

![教材插图](/books/thomas-calculus/assets/3397e4b3cf84cef38abf7fe0b6660de4803593bfbca74a74f2fc3ec177d1bddc.jpg)


$$
| \mathbf {u} | = \sqrt {(1) ^ {2} + (- 2) ^ {2} + (- 2) ^ {2}} = \sqrt {9} = 3
$$


FIGURE 11.23 The triangle in Example 3.


$$
| \mathbf {v} | = \sqrt {(6) ^ {2} + (3) ^ {2} + (2) ^ {2}} = \sqrt {4 9} = 7
$$

$$
\theta = \arccos \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {u} | | \mathbf {v} |}\right) = \arccos \left(\frac {- 4}{(3) (7)}\right) \approx 1. 7 6 \text {   radians   or   } 1 0 0. 9 8 ^ {\circ}.
$$

The angle formula applies to two-dimensional vectors as well. Note that the angle θ is acute if $\mathbf { u } \cdot \mathbf { v } > 0$ and obtuse if $ { \mathbf { 1 } } \cdot  { \mathbf { v } } < 0$ 

**EXAMPLE 3** Find the angle θ in the triangle ABC determined by the vertices $A = ( 0 , 0 ) , B = ( 3 , 5 )$ , and $C = ( 5 , 2 )$ (Figure 11.23). 

**Solution** The angle θ is the angle between the vectors $\overrightarrow { C A }$ and ${ \overrightarrow { C B } } .$ . The component forms of these two vectors are 

$$
\overrightarrow {C A} = \langle - 5, - 2 \rangle \quad \text { and } \quad \overrightarrow {C B} = \langle - 2, 3 \rangle .
$$

First we calculate the dot product and magnitudes of these two vectors. 

$$
\overrightarrow {C A} \cdot \overrightarrow {C B} = (- 5) (- 2) + (- 2) (3) = 4
$$

$$
\left| \overrightarrow {C A} \right| = \sqrt {(- 5) ^ {2} + (- 2) ^ {2}} = \sqrt {2 9}
$$

$$
\left| \overrightarrow {C B} \right| = \sqrt {(- 2) ^ {2} + (3) ^ {2}} = \sqrt {1 3}
$$

Then, applying the angle formula, we have 

$$
\theta = \arccos \left(\frac {\overrightarrow {C A} \cdot \overrightarrow {C B}}{| \overrightarrow {C A} | | \overrightarrow {C B} |}\right) = \arccos \left(\frac {4}{(\sqrt {2 9}) (\sqrt {1 3})}\right)
$$

$\approx 7 8 . 1 ^ { \circ }$ or 1.36 radians. 

### Orthogonal Vectors

Two nonzero vectors u and v are perpendicular if the angle between them is $\pi / 2$ . For such vectors, we have u $\mathbf { \nabla } \cdot \mathbf { v } = 0$ because $\cos ( \pi / 2 ) = 0$ . The converse is also true. If u and v are nonzero vectors with $\mathbf { u } \cdot \mathbf { v } = | \mathbf { u } | | \mathbf { v } | \cos \theta = 0$ , then cos $\theta = 0$ and $\theta = \operatorname { a r c c o s } 0 = \pi / 2$ . The following definition also allows for one or both of the vectors to be the zero vector. 

> ***DEFINITION*** Vectors u and v are orthogonal if u ${ \textbf { v } } = 0$ 

**EXAMPLE 4** To determine if two vectors are orthogonal, calculate their dot product.

(a) $\mathbf { u } = \langle 3 , - 2 \rangle \mathrm { a n d } \mathbf { v } = \langle 4 , 6 \rangle$ are orthogonal because u $\mathbf { \nabla \cdot v } = ( 3 ) ( 4 ) + ( - 2 ) ( 6 ) = 0$ 

(b) $\mathbf { u } = 3 \mathbf { i } - 2 \mathbf { j } +$ k and $\mathbf { v } = 2 \mathbf { j } + 4 \mathbf { k }$ are orthogonal because 

$$
\mathbf {u} \cdot \mathbf {v} = (3) (0) + (- 2) (2) + (1) (4) = 0.
$$

(c) 0 is orthogonal to every vector u because 

$$
\begin{array}{c} \mathbf {0} \cdot \mathbf {u} = \langle 0, 0, 0 \rangle \cdot \langle u _ {1}, u _ {2}, u _ {3} \rangle \\ = (0) (u _ {1}) + (0) (u _ {2}) + (0) (u _ {3}) = 0. \end{array}
$$

### Dot Product Properties and Vector Projections

The dot product obeys many of the laws that hold for ordinary products of real numbers (scalars). 

Properties of the Dot Product 

If u, v, and w are any vectors and c is a scalar, then 

$$
\mathbf {2 .} (c \mathbf {u}) \cdot \mathbf {v} = \mathbf {u} \cdot (c \mathbf {v}) = c (\mathbf {u} \cdot \mathbf {v})
$$

$$
\mathbf {u} \cdot (\mathbf {v} + \mathbf {w}) = \mathbf {u} \cdot \mathbf {v} + \mathbf {u} \cdot \mathbf {w}
$$

$$
4. \mathbf {u} \cdot \mathbf {u} = | \mathbf {u} | ^ {2}
$$

![教材插图](/books/thomas-calculus/assets/94eef6a4bb0643e597a970a866377d16bbfc11a0455faf53b80ed59103fb028c.jpg)


![教材插图](/books/thomas-calculus/assets/e82bb7445accf1c295f5740ace5de6d5acd3c34f86457b8e8335333eb0ee60e1.jpg)



FIGURE 11.24 The vector projection of u onto v.


![教材插图](/books/thomas-calculus/assets/b5da12ca9202034bf5beeb7bc9deb0a65612ef7222101ebb989c2d1ec746e041.jpg)



FIGURE 11.25 If we pull on the box with force u, the effective force moving the box forward in the direction v is the projection of u onto v.


Proofs of Properties 1 and 3 The properties are easy to prove using the definition. For instance, here are the proofs of Properties 1 and 3. 

$$
\begin{array}{l} \mathbf {1 . u} \cdot \mathbf {v} = u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3} = v _ {1} u _ {1} + v _ {2} u _ {2} + v _ {3} u _ {3} = \mathbf {v} \cdot \mathbf {u} \\ \mathbf {3 . u} \cdot (\mathbf {v} + \mathbf {w}) = \left\langle u _ {1}, u _ {2}, u _ {3} \right\rangle \cdot \left\langle v _ {1} + w _ {1}, v _ {2} + w _ {2}, v _ {3} + w _ {3} \right\rangle \\ \qquad = u _ {1} (v _ {1} + w _ {1}) + u _ {2} (v _ {2} + w _ {2}) + u _ {3} (v _ {3} + w _ {3}) \\ \qquad = u _ {1} v _ {1} + u _ {1} w _ {1} + u _ {2} v _ {2} + u _ {2} w _ {2} + u _ {3} v _ {3} + u _ {3} w _ {3} \\ \qquad = (u _ {1} v _ {1} + u _ {2} v _ {2} + u _ {3} v _ {3}) + (u _ {1} w _ {1} + u _ {2} w _ {2} + u _ {3} w _ {3}) \\ \qquad = \mathbf {u} \cdot \mathbf {v} + \mathbf {u} \cdot \mathbf {w} \end{array}
$$

We now return to the problem of projecting one vector onto another, posed in the opening to this section. The vector projection of $\mathbf { u } = { \overline { { P Q } } }$ onto a nonzero vector $\mathbf { v } = \overrightarrow { P S }$ (Figure 11.24) is the vector PR determined by dropping a perpendicular from Q to the line PS. The notation for this vector is 

$$
\operatorname{proj} _ {\mathbf {v}} \mathbf {u} \quad \left(" \text { the   vector   projection   of } \mathbf {u} \text { onto } \mathbf {v}"\right).
$$

If u represents a force, then proj u represents the effective force in the direction of v (Figure 11.25). 

If the angle θ between u and v is acute, proj u has length u cos θ and direction $\mathbf { v } / | \mathbf { v } |$ (Figure 11.26). If θ is obtuse, cos $\theta < 0$ and proj u has length − u cos θ and direction −v v . In both cases, 

$$
\begin{array}{l} \operatorname{proj} _ {\mathbf {v}} \mathbf {u} = (| \mathbf {u} | \cos \theta) \frac {\mathbf {v}}{| \mathbf {v} |} \\ = \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} |}\right) \frac {\mathbf {v}}{| \mathbf {v} |} \\ = \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}}\right) \mathbf {v}. \end{array} \quad | \mathbf {u} | \cos \theta = \frac {| \mathbf {u} | | \mathbf {v} | \cos \theta}{| \mathbf {v} |} = \frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} |}
$$

![教材插图](/books/thomas-calculus/assets/248485ede6773000179c20de2abd57e06b8f9eac1e698c75beade26c2591af4e.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/c329518ebd1021a5085ed06c3f2eb205d86f9ab294fa8086b98bbebde1747e19.jpg)



(b)



FIGURE 11.26 The length of proj u is (a) u cos θ if cos $\theta \geq 0$ and (b) − u cos θ if cos $\theta < 0 .$


The number u cos $\theta$ is called the scalar component of u in the direction of v. To summarize, 

The vector projection of u onto v is the vector 

$$
\operatorname{proj} _ {\mathbf {v}} \mathbf {u} = \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}}\right) \mathbf {v} = \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} |}\right) \frac {\mathbf {v}}{| \mathbf {v} |}.\tag{1}
$$

The scalar component of u in the direction of v is the scalar 

$$
| \mathbf {u} | \cos \theta = \frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} |} = \mathbf {u} \cdot \frac {\mathbf {v}}{| \mathbf {v} |}.\tag{2}
$$

Note that both the vector projection of u onto v and the scalar component of u in the direction of v depend only on the direction of the vector v, not on its length. This is because in both cases we take the dot product of u with the direction vector $\mathbf { v } / | \mathbf { v } |$ , which is the direction of v, and for the projection we go on to multiply the result by the direction vector. 

**EXAMPLE 5** Find the vector projection of u $= 6 \mathbf { i } + 3 \mathbf { j } +$ 2k onto $\mathbf { v } = \mathbf { i } - 2 \mathbf { j } - 2 \mathbf { k }$ and the scalar component of u in the direction of v. 

**Solution** We find proj<sub>v</sub> u from Equation (1): 

$$
\begin{array}{r l} \operatorname{proj} _ {\mathbf {v}} \mathbf {u} & = \frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}} \mathbf {v} = \frac {\mathbf {u} \cdot \mathbf {v}}{\mathbf {v} \cdot \mathbf {v}} \mathbf {v} = \frac {6 - 6 - 4}{1 + 4 + 4} (\mathbf {i} - 2 \mathbf {j} - 2 \mathbf {k}) \\ & = - \frac {4}{9} (\mathbf {i} - 2 \mathbf {j} - 2 \mathbf {k}) = - \frac {4}{9} \mathbf {i} + \frac {8}{9} \mathbf {j} + \frac {8}{9} \mathbf {k}. \end{array}
$$

We find the scalar component of u in the direction of v from Equation (2): 

$$
\begin{array}{r l} | \mathbf {u} | \cos \theta & = \mathbf {u} \cdot \frac {\mathbf {v}}{| \mathbf {v} |} = (6 \mathbf {i} + 3 \mathbf {j} + 2 \mathbf {k}) \cdot \left(\frac {1}{3} \mathbf {i} - \frac {2}{3} \mathbf {j} - \frac {2}{3} \mathbf {k}\right) \\ & = 2 - 2 - \frac {4}{3} = - \frac {4}{3}. \end{array}
$$

Equations (1) and (2) also apply to two-dimensional vectors. We demonstrate this in the next example. 

**EXAMPLE 6** Find the vector projection of a force $\mathbf { F } = 5 \mathbf { i } + 2 \mathbf { j }$ onto $\mathbf { v } = \mathbf { i } - 3 \mathbf { j }$ and the scalar component of F in the direction of v. 

**Solution** The vector projection is 

$$
\begin{array}{r l} \operatorname{proj} _ {\mathbf {v}} \mathbf {F} & = \left(\frac {\mathbf {F} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}}\right) \mathbf {v} = \left(\frac {\mathbf {F} \cdot \mathbf {v}}{\mathbf {v} \cdot \mathbf {v}}\right) \mathbf {v} \\ & = \frac {5 - 6}{1 + 9} (\mathbf {i} - 3 \mathbf {j}) = - \frac {1}{1 0} (\mathbf {i} - 3 \mathbf {j}) \\ & = - \frac {1}{1 0} \mathbf {i} + \frac {3}{1 0} \mathbf {j}. \end{array}
$$

The scalar component of F in the direction of v is 

$$
| \mathbf {F} | \cos \theta = \frac {\mathbf {F} \cdot \mathbf {v}}{| \mathbf {v} |} = \frac {5 - 6}{\sqrt {1 + 9}} = - \frac {1}{\sqrt {1 0}}.
$$

**EXAMPLE 7** Verify that the vector u − proj<sub>v</sub> u is orthogonal to the projection vector proj . <sub>v</sub> u 

**Solution** The vector proj $\mathbf { u } = \left( { \frac { \mathbf { u } \cdot \mathbf { v } } { | \mathbf { v } | ^ { 2 } } } \right)$ v is parallel to v. So it suffices to show that the vector u − proj u is orthogonal to v. We verify orthogonality by showing that the dot product of u $- \mathrm { \ p r o j { \mathrm { _ v } } }$ u with v is zero: 

$$
\begin{array}{l l} \left(\mathbf {u} - \operatorname{proj} _ {\mathbf {v}} \mathbf {u}\right) \cdot \mathbf {v} = \mathbf {u} \cdot \mathbf {v} - \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}} \mathbf {v}\right) \cdot \mathbf {v} & \text {Definition of proj, u} \\ = \mathbf {u} \cdot \mathbf {v} - \frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}} (\mathbf {v} \cdot \mathbf {v}) & \text {Dot product property (2)} \\ = \mathbf {u} \cdot \mathbf {v} - \frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}} | \mathbf {v} | ^ {2} & \mathbf {v} \cdot \mathbf {v} = | \mathbf {v} | ^ {2} \\ = \mathbf {u} \cdot \mathbf {v} - \mathbf {u} \cdot \mathbf {v} = 0. \end{array}
$$

![教材插图](/books/thomas-calculus/assets/f2c04494d7799d1be9eea13f2bbd1d4f5123493485da1845b4b29f02e738e68c.jpg)


FIGURE 11.27 The vector u is the sum of two perpendicular vectors: a vector proj , u parallel to v, and a vector $\mathbf { u } \mathrm { ~ - ~ } \mathsf { p r o j }$ , u perpendicular to v. 

![教材插图](/books/thomas-calculus/assets/0c48ee112bb3c9edeb216d45cae3edbe09ccb7f35186bae39304a3a869f03218.jpg)



FIGURE 11.28 The work done by a constant force F during a displacement D is ( F Dcos ,R) which is the dot product ${ \textbf { F } } \cdot { \textbf { D } } .$


Example 7 verifies that the vector $\mathbf { u } - \mathsf { p r o j }$ <sub>v</sub> u is orthogonal to the projection vector proj u (which has the same direction as v). So the equation 

$$
\mathbf {u} = \operatorname{proj} _ {\mathbf {v}} \mathbf {u} + (\mathbf {u} - \operatorname{proj} _ {\mathbf {v}} \mathbf {u}) = \underbrace {\left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}}\right) \mathbf {v}} _ {\text { Parallel   to } \mathbf {v}} + \underbrace {\left(\mathbf {u} - \left(\frac {\mathbf {u} \cdot \mathbf {v}}{| \mathbf {v} | ^ {2}}\right) \mathbf {v}\right)} _ {\text { Orthogonal   to } \mathbf {v}}
$$

expresses u as a sum of orthogonal vectors (see Figure 11.27). 

### Work

In Chapter 6, we calculated the work done by a constant force of magnitude F in moving an object through a distance d as $W = F d .$ That formula holds only if the force is directed along the line of motion. If a force F moving an object through a displacement $\mathbf { D } = { \overrightarrow { P Q } }$ has some other direction, the work is performed by the component of F in the direction of D. If R is the angle between F and D (Figure 11.28), then 

$$
\begin{array}{l} \text { Work } = \binom{\text { scalar   component   of   F }}{\text { in   the   direction   of   D }} (\text { length   of   D }) \\ \qquad = (| \mathbf {F} | \cos \theta) | \mathbf {D} | \\ \qquad = \mathbf {F} \cdot \mathbf {D}. \end{array}
$$

> ***DEFINITION*** The work done by a constant force F acting through a displacement $\mathbf { D } = { \overrightarrow { P Q } }$ is 
>
> $$
> W = \mathbf {F} \cdot \mathbf {D}.
> $$

**EXAMPLE 8** $\operatorname { I f } | \mathbf { F } | = 4 0$ N (newtons), $| \mathbf D | = 3$ m, and $\theta \ : = \ : 6 0 ^ { \circ }$ , the work done by F in acting from P to Q is 

$$
\begin{array}{l l} \text { Work } = \mathbf {F} \cdot \mathbf {D} & \text { Definition } \\ = | \mathbf {F} | | \mathbf {D} | \cos \theta \\ = (4 0) (3) \cos 6 0 ^ {\circ} & \text { Given   values } \\ = (1 2 0) (1 / 2) = 6 0 \mathrm{J(joules).} \end{array}
$$

We encounter more challenging work problems in Chapter 15 when we learn to find the work done by a variable force along a more general path in space. 

### The Dot Product of Two n-Dimensional Vectors

If $\mathbf { u } = \langle u _ { 1 } , u _ { 2 } , . . . , u _ { n } \rangle$ and $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , . . . , v _ { n } \rangle$ are n-dimensional vectors, then we define the dot product to be 

$$
\mathbf {u} \cdot \mathbf {v} = u _ {1} v _ {1} + u _ {2} v _ {2} + \dots + u _ {n} v _ {n}.
$$

As for two- and three-dimensional vectors, the dot product is calculated by adding the products of the corresponding components of the two vectors. 

This generalized dot product can be shown to satisfy the Properties of the Dot Product that were introduced earlier in this section, and similar terminology is used. If u and v are n-dimensional vectors, then 

1. u and v are said to be orthogonal if $\mathbf { u } \cdot \mathbf { v } = 0 $ 

2. the vector projection of u onto v is proj $\mathbf { \nabla } _ { \tau } \mathbf { u } = { \frac { \mathbf { u } \cdot \mathbf { v } } { \left| \mathbf { v } \right| ^ { 2 } } } \mathbf { v }$ , and 

3. the angle between the vectors u and v is defined as $\theta = \operatorname { a r c c o s } \biggr ( \frac { \mathbf { u } \cdot \mathbf { v } } { | \mathbf { u } | | \mathbf { v } | } \biggr ) .$ (The Cauchy-Schwarz inequality, $| \mathbf { u } \cdot \mathbf { v } | \leq | \mathbf { u } | | \mathbf { v } | .$ stated in Exercise 27 can be extended to n-dimensional vectors. This guarantees that $\frac { \textbf { u } \cdot \textbf { v } } { | \textbf { u } | | \textbf { v } | }$ is within the interval 1, 1 [ ] − .) 

**EXAMPLE 9** An automobile assembly plant makes four different car models. The components of the vector u = 〈 〉 36, 50, 24, 10 indicate the plant’s output of each model per hour, whereas the revenue per vehicle (in US dollars) of each model is represented by the vector $\mathbf { v } = ( 2 4 , 0 0 0 , 3 1 , 0 0 0 , 3 9 , 0 0 0 , 5 2 , 0 0 0 )$ . Calculate the dot product u ⋅ v and explain the significance of the value that was obtained. 

**Solution** 

$$
\mathbf {u} \cdot \mathbf {v} = (3 6) (2 4, 0 0 0) + (5 0) (3 1, 0 0 0) + (2 4) (3 9, 0 0 0) + (1 0) (5 2, 0 0 0) = 3, 8 7 0, 0 0 0.
$$

The value $3,870,000 represents the total hourly revenue. 

### EXERCISES 11.3

For some exercises, a calculator may be helpful when expressing answers in decimal form. 

Dot Product and Projections 

a. v u v u ⋅ ,   , 

b. the cosine of the angle between v and u 

c. the scalar component of u in the direction of v 

d. the vector proj . <sub>v</sub> u 

1. v i j k u i j k = − + = − + − 2 4 5 , 2 4 5 

2. $\mathbf {v} = (3 / 5) \mathbf {i} + (4 / 5) \mathbf {k}, \quad \mathbf {u} = 5 \mathbf {i} + 1 2 \mathbf {j}$

3. $\mathbf { v } = 1 0 \mathbf { i } + 1 1 \mathbf { j } - 2 \mathbf { k } , \mathbf { u } = 3 \mathbf { j } + 4 \mathbf { k }$ 

4. v i j k u i j k= + − = + +2 10 11 , 2 2 

$$
\mathbf {v} = 5 \mathbf {j} - 3 \mathbf {k}, \quad \mathbf {u} = \mathbf {i} + \mathbf {j} + \mathbf {k}
6. $${ \mathbf { v } } = - \mathbf { i } + \mathbf { j } , { \mathbf { u } } = { \sqrt { 2 } } \mathbf { i } + { \sqrt { 3 } } \mathbf { j } + 2 \mathbf { k }$$
\mathbf {7 . v} = 5 \mathbf {i} + \mathbf {j}, \quad \mathbf {u} = 2 \mathbf {i} + \sqrt {1 7} \mathbf {j}
$$

$$
\mathbf {v} = \left\langle \frac {1}{\sqrt {2}}, \frac {1}{\sqrt {3}} \right\rangle , \mathbf {u} = \left\langle \frac {1}{\sqrt {2}}, - \frac {1}{\sqrt {3}} \right\rangle
$$

Angle Between Vectors 

Find the angles between the vectors in Exercises 9–12 to the nearest hundredth of a radian. 

$$
\mathbf {9 . u} = 2 \mathbf {i} + \mathbf {j}, \quad \mathbf {v} = \mathbf {i} + 2 \mathbf {j} - \mathbf {k}
$$

10. $\mathbf { u } = 2 \mathbf { i } - 2 \mathbf { j } + \mathbf { k } , \mathbf { v } = 3 \mathbf { i } + 4 \mathbf { k }$ 

11. ${ \bf u } = { \sqrt { 3 } } { \bf i } - 7 { \bf j } , ~ { \bf v } = { \sqrt { 3 } } { \bf i } + { \bf j } - 2 { \bf k }$ 

12. $\mathbf { u } = \mathbf { i } + { \sqrt { 2 } } \mathbf { j } - { \sqrt { 2 } } \mathbf { k } , \mathbf { v } = - \mathbf { i } + \mathbf { j } + \mathbf { k }$ 

13. Triangle Find the measures of the angles of the triangle whose vertices are $A = ( - 1 , 0 ) , B = ( 2 , 1 )$ , and $C = ( 1 , - 2 )$ 

14. Rectangle Find the measures of the angles between the diagonals of the rectangle whose vertices are $A = ( 1 , 0 ) , B = ( 0 , 3 )$ $C = ( 3 , 4 ) , \mathrm { a n d } D = ( 4 , 1 )$ 

15. Direction angles and direction cosines The direction angles $\alpha , \beta ,$ and γ of a vector ${ \bf v } = a { \bf i } + b { \bf j } + { }$ k c are defined as follows: α is the angle between v and the positive x-axis $( 0 \leq \alpha \leq \pi )$ $\beta$ is the angle between v and the positive y-axis $( 0 \leq \beta \leq \pi )$ γ is the angle between v and the positive z-axis $( 0 \leq \gamma \leq \pi )$ 

![教材插图](/books/thomas-calculus/assets/806e5b5ccd266c1c8d09e9ce949ca27bd48d8e4c59931009f6d916ad5e4d2a8a.jpg)


a. Show that 

$$
\cos \alpha = \frac {a}{| \mathbf {v} |}, \quad \cos \beta = \frac {b}{| \mathbf {v} |}, \quad \cos \gamma = \frac {c}{| \mathbf {v} |},
$$

and $\cos ^ { 2 } \alpha + \cos ^ { 2 } \beta + \cos ^ { 2 } \gamma = 1$ . These cosines are called the direction cosines of v. 

b. Unit vectors are built from direction cosines Show that ${ \mathrm { i f } } { \mathbf { v } } = a { \mathbf { i } } + b { \mathbf { j } } + c { \mathbf { k } }$ is a unit vector, then a, b, and c are the direction cosines of v. 

16. Water main construction A water main is to be constructed with a 20% grade in the north direction and a 10% grade in the east direction. Determine the angle θ required in the water main for the turn from north to east. 

![教材插图](/books/thomas-calculus/assets/4bd25a3f4c604f03f87fbf427802182d4ec0f3bb0682168026041077993158cb.jpg)


For Exercises 17 and 18, find the acute angle between the given lines by using vectors parallel to the lines. 

17. $y = x , ~ y = 2 x + 3$ 

18. $2 - x + 2 y = 0 , 3 x - 4 y = - 1 2$ 

Theory and Examples 

19. Sums and differences In the accompanying figure, it looks as if $\mathbf { v } _ { 1 } + \mathbf { v } _ { 2 }$ and $\mathbf { v } _ { 1 } - \mathbf { v } _ { 2 }$ are orthogonal. Is this mere coincidence, or are there circumstances under which we may expect the sum of two vectors to be orthogonal to their difference? Give reasons for your answer. 

![教材插图](/books/thomas-calculus/assets/7d341adec575462c44a5adcd78e5ed158395195841bd98ba66c864ad02206cb7.jpg)


20. Orthogonality on a circle Suppose that AB is the diameter of a circle with center O and that C is a point on one of the two arcs joining A and B. Show that CA and CB are orthogonal. 

![教材插图](/books/thomas-calculus/assets/fa5b7bde0944f6390472ce45e0858f6070ffa5b105b8629076a8723de04538ba.jpg)


21. Diagonals of a rhombus Show that the diagonals of a rhombus (parallelogram with sides of equal length) are perpendicular. 

22. Perpendicular diagonals Show that squares are the only rectangles with perpendicular diagonals. 

23. When parallelograms are rectangles Prove that a parallelogram is a rectangle if and only if its diagonals are equal in length. (This fact is often exploited by carpenters.) 

24. Diagonal of parallelogram Show that the indicated diagonal of the parallelogram determined by vectors u and v bisects the angle between u and v if u v= . 

![教材插图](/books/thomas-calculus/assets/03307867ca4dc698b414ae57a5cd2e4ba63fe3ccf76581fef5b826ecf9b4f06d.jpg)


25. Projectile motion A gun with muzzle velocity of 400 m s is fired at an angle of $8 ^ { \circ }$ above the horizontal. Find the horizontal and vertical components of the velocity. 

26. Inclined plane Suppose that a box is being towed up an inclined plane as shown in the figure. Find the force w needed to make the component of the force parallel to the inclined plane equal to 2.5 N. 

![教材插图](/books/thomas-calculus/assets/cb4bd788f4c1a8f8096054b725b6ff8639c1b7c3c87fdd861bdd5a237f0e9369.jpg)


27. a. Cauchy-Schwarz inequality Since u ⋅ =v u v cos θ, show that the inequality u $\mathbf { \partial } \cdot \mathbf { v } | \leq | \mathbf { u } | | \mathbf { v } |$ holds for any vectors u and v. 

b. Under what circumstances, if any, does u v⋅ equal u v ? Give reasons for your answer. 

28. Dot multiplication is positive definite Show that dot multiplication of vectors is positive definite; that is, show that u $\mathbf { \nabla } \cdot \textbf { u } \geq 0$ for every vector u and that u $\mathbf { \nabla } \cdot \textbf { u } = \mathbf { \nabla } 0$ if and only if $\bf u _ { \Sigma } = \sigma _ { 0 }$ 

29. Orthogonal unit vectors $\operatorname { I f } \mathbf { u } _ { 1 }$ and $\mathbf { u } _ { 2 }$ are orthogonal unit vectors and $\mathbf { v } = a \mathbf { u } _ { 1 } + b \mathbf { u } _ { 2 }$ ,  find $\mathbf { v } \cdot \mathbf { u } _ { 1 }$ 

30. Cancelation in dot products In real-number multiplication, if $u v _ { 1 } = u v _ { 2 }$ and $u \ne 0 ,$ , we can cancel the u and conclude that $\upsilon _ { 1 } = \upsilon _ { 2 } .$ . Does the same rule hold for the dot product? That is, if u ⋅ $\mathbf { v } _ { 1 } = \mathbf { u } \cdot \mathbf { v } _ { 2 }$ and $\mathbf { u } \neq \mathbf { 0 } ,$ , can you conclude that $\mathbf { v } _ { 1 } = \mathbf { v } _ { 2 } ?$ Give reasons for your answer. 

31. If u and v are orthogonal, show that proj $\mathbf { u } = 0 .$ 

32. A force $\mathbf { F } = 2 \mathbf { i } + \mathbf { j } - 3 \mathbf { k }$ is applied to a spacecraft with velocity vector ${ \bf v } = 3 { \bf i } - { \bf j } .$ Express F as a sum of a vector parallel to v and a vector orthogonal to v. 

Equations for Lines in the Plane 

33. Line perpendicular to a vector Show that $\mathbf { v } = a \mathbf { i } + b \mathbf { j }$ is perpendicular to the line $a x + b y = c .$ (Hint: For a and b nonzero, establish that the slope of the vector v is the negative reciprocal of the slope of the given line. Also verify the statement when $a = 0$ or $b = 0 . )$ 1 

34. Line parallel to a vector Show that the vector ${ \bf v } = a { \bf i } + b { \bf j }$ is parallel to the line $ b x - a y = c .$ (Hint: For a and b nonzero, establish that the slope of the line segment representing v is the same as the slope of the given line. Also verify the statement when a = 0 or b = 0.) 

In Exercises 35–38, use the result of Exercise 33 to find an equation for the line through P perpendicular to v. Then sketch the line. Include v in your sketch as a vector starting at the origin. 

$$
\begin{array}{l l} \textbf {3 5 .} P (2, 1), \quad \mathbf {v} = \mathbf {i} + 2 \mathbf {j} & \textbf {3 6 .} P (- 1, 2), \quad \mathbf {v} = - 2 \mathbf {i} - \mathbf {j} \\ \textbf {3 7 .} P (- 2, - 7), \quad \mathbf {v} = - 2 \mathbf {i} + \mathbf {j} & \textbf {3 8 .} P (1 1, 1 0), \quad \mathbf {v} = 2 \mathbf {i} - 3 \mathbf {j} \end{array}
$$

In Exercises 39–42, use the result of Exercise 34 to find an equation for the line through P parallel to v. Then sketch the line. Include v in your sketch as a vector starting at the origin. 

$$
\begin{array}{l l} \textbf {3 9 .} P (- 2, 1), \mathbf {v} = \mathbf {i} - \mathbf {j} & \textbf {4 0 .} P (0, - 2), \mathbf {v} = 2 \mathbf {i} + 3 \mathbf {j} \\ \textbf {4 1 .} P (1, 2), \mathbf {v} = - \mathbf {i} - 2 \mathbf {j} & \textbf {4 2 .} P (1, 3), \mathbf {v} = 3 \mathbf {i} - 2 \mathbf {j} \end{array}
$$

Work 

43. Work along a line Find the work done by a force $\mathbf { F } = 5 \mathbf { i }$ (magnitude 5 N) in moving an object along the line from the origin to the point (1, 1) (distance in meters). 

44. Locomotive The Union Pacific’s $B i g$ Boy locomotive could pull 6000-tonne trains with a tractive effort (pull) of 602,148 N. At this level of effort, about how much work did $B i g$ Boy do on the (approximately straight) 605-km journey from San Francisco to Los Angeles? 

45. Inclined plane How much work does it take to slide a crate 20 m along a loading dock by pulling on it with a 200-N force at an angle of $3 0 ^ { \circ }$ from the horizontal? 

46. Sailboat The wind passing over a boat’s sail exerted a 1000 N magnitude force F as shown here. How much work did the wind perform in moving the boat forward 1 km? Answer in joules. 

![教材插图](/books/thomas-calculus/assets/5f73c18cbdb83d7e9754f9a577fe7b60b1d6c6ba3992fe99b4078e9c7c817bbe.jpg)


Angles Between Lines in the Plane 

The acute angle between intersecting lines that do not cross at right angles is the same as the angle determined by vectors normal to the lines or by vectors parallel to the lines. 

![教材插图](/books/thomas-calculus/assets/03c1ddd0e77888099fc08638c4b21a4f27acc8ba842c305f553d4897e0564b00.jpg)


Use this fact and the results of Exercise 33 or 34 to find the acute angles between the lines in Exercises 47–52. 

47. $3 x + y = 5 , 2 x - y = 4$ 

48. $y = \sqrt { 3 } x - 1 , ~ y = - \sqrt { 3 } x + 2$ 

$$
\sqrt {3} x - y = - 2, \quad x - \sqrt {3} y = 1
$$

50. $x + \sqrt {3} y = 1, (1 - \sqrt {3}) x + (1 + \sqrt {3}) y = 8$

51. $3 x - 4 y = 3, \quad x - y = 7$

52. $1 2 x + 5 y = 1, \quad 2 x - 2 y = 3$

Dot Products of n-Dimensional Vectors 

In Exercises 53–56, (a) find u ⋅ v and (b) determine whether the vectors u and v are orthogonal. 

$$
\mathbf {5 3 . u} = \langle 3, 2, - 4, 0 \rangle , \mathbf {v} = \langle 1, 0, 0, 2 \rangle
$$

$$
\mathbf {5 4 . u} = \langle - 2, 1, 1, 2 \rangle , \mathbf {v} = \langle - 1, 2, - 2, - 1 \rangle
$$

$$
\mathbf {5 5 . u} = \langle 6, 3, 0, 1, - 2 \rangle , \mathbf {v} = \langle 0, 2, - 7, 0, 3 \rangle
$$

$$
\mathbf {u} = \langle 4, 2, - 3, - 2, 1, 5 \rangle , \mathbf {v} = \langle 3, - 3, 2, - 2, 1, - 1 \rangle
$$

## 11.4 The Cross Product

![教材插图](/books/thomas-calculus/assets/efc926aa85680340f10a36f909cfbb3b0be9cca6fbae9d11bea3629b4a61feaf.jpg)



FIGURE 11.29 The construction of ${ \textbf { u } } \times { \textbf { v } } .$


In studying lines in the plane, when we needed to describe how a line was tilting, we used the notions of slope and angle of inclination. In space, we want a way to describe how a plane is tilting. We accomplish this by multiplying two vectors in the plane together to get a third vector perpendicular to the plane. The direction of this third vector tells us the “inclination” of the plane. The product we use to multiply the vectors together is the vector or cross product, the second of the two vector multiplication methods. The cross product gives us a simple way to find a variety of geometric quantities, including volumes, areas, and perpendicular vectors. We study the cross product in this section. 

### The Cross Product of Two Vectors in Space

We start with two nonzero vectors u and v in space. Two vectors are parallel if one is a nonzero multiple of the other. If u and v are not parallel, they determine a plane. The vectors in this plane are linear combinations of u and v, so they can be written as a sum $a \mathbf { u } + b \mathbf { v }$ . We select the unit vector n perpendicular to the plane by the right-hand rule. This means that we choose n to be the unit normal vector that points the way your right thumb points when your fingers curl through the angle θ from u to v (Figure 11.29). Then we define a new vector as follows. 

> ***DEFINITION*** The cross product u $\times \textbf { v }$ (“u cross $\mathbf { v } ^ { \pmb { \eta } } )$ is the vector 
>
> $$
> \mathbf {u} \times \mathbf {v} = (| \mathbf {u} | | \mathbf {v} | \sin \theta) \mathbf {n}.
> $$
>
![教材插图](/books/thomas-calculus/assets/3e8c814858a2f3d22320f37678d6233f21e39faee9d76904d69d2785e8653d0b.jpg)



FIGURE 11.30 The construction of $\textbf { v } \times \textbf { u } .$


![教材插图](/books/thomas-calculus/assets/8bbaa7b3aa4f6a036322d7809ca6fb3434df41b49e35dafdcbac39c17a8b4481.jpg)



FIGURE 11.31 The pairwise cross products of i, j, and k.


Unlike the dot product, the cross product is a vector. For this reason it is also called the vector product of u and v, and can be applied only to vectors in space. The vector $\textbf { u } \times \textbf { v }$ is orthogonal to both u and v because it is a scalar multiple of n. 

There is a straightforward way to calculate the cross product of two vectors from their components. The method does not require that we know the angle between them (as suggested by the definition), but we postpone that calculation momentarily so we can focus first on the properties of the cross product. 

Because the sines of 0 and Q are both zero, it makes sense to define the cross product of two parallel nonzero vectors to be 0. If one or both of u and v are zero, we also define $\textbf { u } \times \textbf { v }$ to be zero. This way, the cross product of two vectors u and v is zero if and only if u and v are parallel or one or both of them are zero. 

Parallel Vectors
Nonzero vectors u and v are parallel if and only if $u \times v = 0$ . 

The cross product obeys the following laws. 

Properties of the Cross Product
If u, v, and w are any vectors and r, s are scalars, then
1. $(ru) \times (sv) = (rs)(u \times v)$ 2. $u \times (v + w) = u \times v + u \times w$ 3. $v \times u = -(u \times v)$ 4. $(v + w) \times u = v \times u + w \times u$ 5. $0 \times u = 0$ 6. $u \times (v \times w) = (u \cdot w)v - (u \cdot v)w$ 

To visualize Property 3, for example, notice that when the fingers of your right hand curl through the angle R from v to u, your thumb points the opposite way; the unit vector we choose in forming $\textbf { v } \times \textbf { u }$ is the negative of the one we choose in forming $\textbf { u } \times \textbf { v }$ (Figure 11.30). 

Property 1 can be verified by applying the definition of cross product to both sides of the equation and comparing the results. Property 2 is proved in Appendix A.9. Property 4 follows by multiplying both sides of the equation in Property 2 by 1 and reversing the order of the products using Property 3. Property 5 is a definition. As a rule, cross product multiplication is not associative so $( \mathbf { u } \times \mathbf { v } ) \times \mathbf { w }$ does not generally equal $\mathbf { u } \times ( \mathbf { v } \times \mathbf { w } )$ (See Additional Exercise 17.) 

When we apply the definition and Property 3 to calculate the pairwise cross products of i, j, and k, we find (Figure 11.31) 

$$
\begin{array}{r l} & {\mathbf {i} \times \mathbf {j} = - (\mathbf {j} \times \mathbf {i}) = \mathbf {k}} \\ & {\mathbf {j} \times \mathbf {k} = - (\mathbf {k} \times \mathbf {j}) = \mathbf {i}} \\ & {\mathbf {k} \times \mathbf {i} = - (\mathbf {i} \times \mathbf {k}) = \mathbf {j}} \end{array}
$$

and 

$$
\mathbf {i} \times \mathbf {i} = \mathbf {j} \times \mathbf {j} = \mathbf {k} \times \mathbf {k} = \mathbf {0}.
$$

u $\times \textbf { V } |$ Is the Area of a Parallelogram 

Because n is a unit vector, the magnitude of $\textbf { u } \times \textbf { v }$ is 

$$
| \mathbf {u} \times \mathbf {v} | = | \mathbf {u} | | \mathbf {v} | \left| \sin \theta \right| | \mathbf {n} | = | \mathbf {u} | | \mathbf {v} | \sin \theta .
$$

![教材插图](/books/thomas-calculus/assets/f6af72ee226220fcbcd15c7188ce00bedaacd077a8441f823a6db7abc8ab8322.jpg)



FIGURE 11.32 The parallelogram determined by u and v.


Determinants 

$2 \times 2$ and $3 \times 3$ determinants are evaluated as follows: 

$$
\left| \begin{array}{c c} a & b \\ c & d \end{array} \right| = a d - b c
$$

$$
\left| \begin{array}{c c c} a _ {1} & a _ {2} & a _ {3} \\ b _ {1} & b _ {2} & b _ {3} \\ c _ {1} & c _ {2} & c _ {3} \end{array} \right| = a _ {1} \left| \begin{array}{c c} b _ {2} & b _ {3} \\ c _ {2} & c _ {3} \end{array} \right|
$$

$$
- a _ {2} \left| \begin{array}{c c} b _ {1} & b _ {3} \\ c _ {1} & c _ {3} \end{array} \right| + a _ {3} \left| \begin{array}{c c} b _ {1} & b _ {2} \\ c _ {1} & c _ {2} \end{array} \right|
$$

![教材插图](/books/thomas-calculus/assets/c3b425ca4648fa962d484b31b30a3ac2248ee022a5b98ae60646bef3e0764a36.jpg)


FIGURE 11.33 The vector ${ \overrightarrow { P Q } } \times { \overrightarrow { P R } }$ is perpendicular to the plane of triangle PQR (Example 2). The area of triangle $P Q R$ is half of ${ \big | } { \overrightarrow { P Q } } \times { \overrightarrow { P R } } { \big | }$ (Example 3). 

This is the area of the parallelogram determined by u and v (Figure 11.32), u being the base of the parallelogram and v sin θ being the height. 

### Determinant Formula for $\mathbf { u } \times \mathbf { v }$

Our next objective is to calculate $\textbf { u } \times \textbf { v }$ from the components of u and v relative to a Cartesian coordinate system. 

Suppose that 

$$
\mathbf {u} = u _ {1} \mathbf {i} + u _ {2} \mathbf {j} + u _ {3} \mathbf {k} \quad \text { and } \quad \mathbf {v} = v _ {1} \mathbf {i} + v _ {2} \mathbf {j} + v _ {3} \mathbf {k}.
$$

Then the distributive laws and the rules for multiplying i, j, and k tell us that 

$$
\begin{array}{r l} \mathbf {u} \times \mathbf {v} & = (u _ {1} \mathbf {i} + u _ {2} \mathbf {j} + u _ {3} \mathbf {k}) \times (v _ {1} \mathbf {i} + v _ {2} \mathbf {j} + v _ {3} \mathbf {k}) \\ & = u _ {1} v _ {1} \mathbf {i} \times \mathbf {i} + u _ {1} v _ {2} \mathbf {i} \times \mathbf {j} + u _ {1} v _ {3} \mathbf {i} \times \mathbf {k} \\ & \quad + u _ {2} v _ {1} \mathbf {j} \times \mathbf {i} + u _ {2} v _ {2} \mathbf {j} \times \mathbf {j} + u _ {2} v _ {3} \mathbf {j} \times \mathbf {k} \\ & \quad + u _ {3} v _ {1} \mathbf {k} \times \mathbf {i} + u _ {3} v _ {2} \mathbf {k} \times \mathbf {j} + u _ {3} v _ {3} \mathbf {k} \times \mathbf {k} \\ & = (u _ {2} v _ {3} - u _ {3} v _ {2}) \mathbf {i} - (u _ {1} v _ {3} - u _ {3} v _ {1}) \mathbf {j} + (u _ {1} v _ {2} - u _ {2} v _ {1}) \mathbf {k}. \end{array}
$$

The component terms in the last line are hard to remember, but they are the same as the terms in the expansion of the symbolic determinant 

$$
\left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ u _ {1} & u _ {2} & u _ {3} \\ v _ {1} & v _ {2} & v _ {3} \end{array} \right|.
$$

So we restate the calculation in the following easy-to-remember form. 

Calculating the Cross Product as a Determinant 

$\mathrm { I f } \mathbf { u } = u _ { 1 } \mathbf { i } + u _ { 2 } \mathbf { j } + u _ { 3 } \mathbf { k }$ and $\mathbf { v } = v _ { 1 } \mathbf { i } + v _ { 2 } \mathbf { j } + v _ { 3 } \mathbf { k } ,$ then 

$$
\mathbf {u} \times \mathbf {v} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ u _ {1} & u _ {2} & u _ {3} \\ v _ {1} & v _ {2} & v _ {3} \end{array} \right|.
$$

**EXAMPLE 1** Find u × v and $\textbf { v } \times \textbf { u }$ if $\mathbf { u } = 2 \mathbf { i } + \mathbf { j } + \mathbf { k }$ and $\mathbf { v } = - 4 \mathbf { i } + 3 \mathbf { j } + \mathbf { k } .$ 

**Solution** We expand the symbolic determinant. 

$$
\begin{array}{r l} \mathbf {u} \times \mathbf {v} & = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 2 & 1 & 1 \\ - 4 & 3 & 1 \end{array} \right| = \left| \begin{array}{c c} 1 & 1 \\ 3 & 1 \end{array} \right| \mathbf {i} - \left| \begin{array}{c c} 2 & 1 \\ - 4 & 1 \end{array} \right| \mathbf {j} + \left| \begin{array}{c c} 2 & 1 \\ - 4 & 3 \end{array} \right| \mathbf {k} \\ & = - 2 \mathbf {i} - 6 \mathbf {j} + 1 0 \mathbf {k} \\ \mathbf {v} \times \mathbf {u} & = - (\mathbf {u} \times \mathbf {v}) = 2 \mathbf {i} + 6 \mathbf {j} - 1 0 \mathbf {k} \quad \text {Property 3} \end{array}
$$

**EXAMPLE 2** Find a vector perpendicular to the plane of $P ( 1 , - 1 , 0 ) , Q ( 2 , 1 , - 1 )$ and $R ( - 1 , 1 , 2 )$ (Figure 11.33). 

**Solution** The vector ${ \overrightarrow { P Q } } \times { \overrightarrow { P R } }$ is perpendicular to the plane because it is perpendicular to both vectors. In terms of components, 

$$
\begin{array}{l} \overrightarrow {P Q} = (2 - 1) \mathbf {i} + (1 + 1) \mathbf {j} + (- 1 - 0) \mathbf {k} = \mathbf {i} + 2 \mathbf {j} - \mathbf {k} \\ \overrightarrow {P R} = (- 1 - 1) \mathbf {i} + (1 + 1) \mathbf {j} + (2 - 0) \mathbf {k} = - 2 \mathbf {i} + 2 \mathbf {j} + 2 \mathbf {k} \end{array}
$$

$$
\begin{array}{l} \overrightarrow {P Q} \times \overrightarrow {P R} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 1 & 2 & - 1 \\ - 2 & 2 & 2 \end{array} \right| = \left| \begin{array}{c c} 2 & - 1 \\ 2 & 2 \end{array} \right| \mathbf {i} - \left| \begin{array}{c c} 1 & - 1 \\ - 2 & 2 \end{array} \right| \mathbf {j} + \left| \begin{array}{c c} 1 & 2 \\ - 2 & 2 \end{array} \right| \mathbf {k} \\ = 6 \mathbf {i} + 6 \mathbf {k}. \end{array}
$$

**EXAMPLE 3** Find the area of the triangle with vertices $P ( 1 , - 1 , 0 ) , Q ( 2 , 1 , - 1 )$ and R( )−1, 1, 2 (Figure 11.33). 

**Solution** The area of the parallelogram determined by $P , Q ,$ and R is 

$$
\begin{array}{r l} \left| \overrightarrow {P Q} \times \overrightarrow {P R} \right| & = | 6 \mathbf {i} + 6 \mathbf {k} | \\ & = \sqrt {(6) ^ {2} + (6) ^ {2}} = \sqrt {2 \cdot 3 6} = 6 \sqrt {2}. \end{array} \tag {2}
$$

The triangle’s area is half of this, or $3 { \sqrt { 2 } } .$ 

**EXAMPLE 4** Find a unit vector perpendicular to the plane of $P ( 1 , - 1 , 0 ) , Q ( 2 , 1 , - 1 )$ and $R ( - 1 , 1 , 2 )$ 

**Solution** Since ${ \overrightarrow { P Q } } \times { \overrightarrow { P R } }$ is perpendicular to the plane, its direction n is a unit vector perpendicular to the plane. Taking values from Examples 2 and 3, we have 

$$
\mathbf {n} = \frac {\overrightarrow {P Q} \times \overrightarrow {P R}}{| \overrightarrow {P Q} \times \overrightarrow {P R} |} = \frac {6 \mathbf {i} + 6 \mathbf {k}}{6 \sqrt {2}} = \frac {1}{\sqrt {2}} \mathbf {i} + \frac {1}{\sqrt {2}} \mathbf {k}.
$$

For ease in calculating the cross product using determinants, we usually write vectors in the form $\mathbf { v } = v _ { 1 } \mathbf { i } + v _ { 2 } \mathbf { j } + v _ { 3 } \mathbf { k }$ rather than as ordered triples $\mathbf { v } = \langle v _ { 1 } , v _ { 2 } , v _ { 3 } \rangle$ 

### Torque

![教材插图](/books/thomas-calculus/assets/e3d497adc19ebc79c0f6bc8c8eed04aa460d3c1d968d31a79ba76423a05dabd2.jpg)


FIGURE 11.34 The torque vector describes the tendency of the force F to drive the bolt forward. 

When we turn a bolt by applying a force F to a wrench (Figure 11.34), we produce a torque that causes the bolt to rotate. The torque vector points in the direction of the axis of the bolt according to the right-hand rule (so the rotation is counterclockwise when viewed from the tip of the vector). The magnitude of the torque depends on how far out on the wrench the force is applied and on how much of the force is perpendicular to the wrench at the point of application. The number we use to measure the torque’s magnitude is the product of the length of the lever arm r and the scalar component of F perpendicular to r. In the notation of Figure 11.34, 

$$
\text { Magnitude   of   torque   vector } = | \mathbf {r} | | \mathbf {F} | \sin \theta ,
$$

or $| \mathbf { r } \times \mathbf { F } |$ . If we let n be a unit vector along the axis of the bolt in the direction of the torque, then a complete description of the torque vector is $\mathbf { r } \times \mathbf { F } ,$ , or 

$$
\text { Torque   vector } = \mathbf {r} \times \mathbf {F} = (| \mathbf {r} | | \mathbf {F} | \sin \theta) \mathbf {n}.
$$

Recall that we defined u × v to be 0 when u and v are parallel. This is consistent with the torque interpretation as well. If the force F in Figure 11.34 is parallel to the wrench, meaning that we are trying to turn the bolt by pushing or pulling along the line of the wrench’s handle, the torque produced is zero. 

![教材插图](/books/thomas-calculus/assets/3876fd2085c111746a06b4e46b6907ff805d9132b9ef03cb2e70891209f3ba87.jpg)



FIGURE 11.35 The magnitude of the torque exerted by F at P is about 56.4 N · m (Example 5). The bar rotates counterclockwise around P.


The dot and cross may be interchanged in a triple scalar product without altering its value. 

**EXAMPLE 5** The magnitude of the torque generated by force F at the pivot point P in Figure 11.35 is 

$$
\left| \overrightarrow {P Q} \times \mathbf {F} \right| = \left| \overrightarrow {P Q} \right| | \mathbf {F} | \sin 7 0 ^ {\circ} \approx (3) (2 0) (0. 9 4) \approx 5 6. 4 \mathrm{N} \cdot \mathrm{m}.
$$

In this example, the torque vector is pointing out of the page toward you. 

### Triple Scalar or Box Product

The product $( \mathbf { u } \times \mathbf { v } )$ w ⋅ is called the triple scalar product of u, v, and w (in that order). As you can see from the formula 

$$
\left| (\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} \right| = \left| \mathbf {u} \times \mathbf {v} \right| | \mathbf {w} | \left| \cos \theta \right|,
$$

the absolute value of this product is the volume of the parallelepiped (parallelogram-sided box) determined by u, v, and w (Figure 11.36). The number $| \mathbf { u } \times \mathbf { v } |$ is the area of the base parallelogram. The number w cos R is the parallelepiped’s height. Because of this geometry, $( \mathbf { u } \times \mathbf { v } )$ w⋅ is also called the box product of u, v, and w. 

![教材插图](/books/thomas-calculus/assets/245dcb36417d17b484afb731b8cf2ebfa14534c42dffb6b5bbd35cc76d4913ab.jpg)



FIGURE 11.36 The number ${ \bf \Pi } | ( { \bf u } \times { \bf v } )$ w⋅ is the volume of a parallelepiped.


By treating the planes of v and w and of w and u as the base planes of the parallelepi ped determined by u, v, and w, we see that 

$$
(\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = (\mathbf {v} \times \mathbf {w}) \cdot \mathbf {u} = (\mathbf {w} \times \mathbf {u}) \cdot \mathbf {v}.
$$

Since the dot product is commutative, we also have 

$$
(\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = \mathbf {u} \cdot (\mathbf {v} \times \mathbf {w}).
$$

The triple scalar product can be evaluated as a determinant: 

$$
\begin{array}{l} (\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = \left(\left| \begin{array}{c c} u _ {2} & u _ {3} \\ v _ {2} & v _ {3} \end{array} \right| \mathbf {i} - \left| \begin{array}{c c} u _ {1} & u _ {3} \\ v _ {1} & v _ {3} \end{array} \right| \mathbf {j} + \left| \begin{array}{c c} u _ {1} & u _ {2} \\ v _ {1} & v _ {2} \end{array} \right| \mathbf {k}\right) \cdot \mathbf {w} \\ = w _ {1} \left| \begin{array}{c c} u _ {2} & u _ {3} \\ v _ {2} & v _ {3} \end{array} \right| - w _ {2} \left| \begin{array}{c c} u _ {1} & u _ {3} \\ v _ {1} & v _ {3} \end{array} \right| + w _ {3} \left| \begin{array}{c c} u _ {1} & u _ {2} \\ v _ {1} & v _ {2} \end{array} \right| \\ = \left| \begin{array}{c c c} u _ {1} & u _ {2} & u _ {3} \\ v _ {1} & v _ {2} & v _ {3} \\ w _ {1} & w _ {2} & w _ {3} \end{array} \right|. \end{array}
$$

![教材插图](/books/thomas-calculus/assets/a71d428c4f41061bfe9c53014d3c0b64a4d02df13d60d11c1c20c9acae27f22d.jpg)


Calculating the Triple Scalar Product as a Determinant 

$$
\left| \begin{array}{c c c} u _ {1} & u _ {2} & u _ {3} \\ v _ {1} & v _ {2} & v _ {3} \\ w _ {1} & w _ {2} & w _ {3} \end{array} \right| = - \left| \begin{array}{c c c} w _ {1} & w _ {2} & w _ {3} \\ v _ {1} & v _ {2} & v _ {3} \\ u _ {1} & u _ {2} & u _ {3} \end{array} \right|
$$

Any two rows of a matrix can be interchanged without changing the absolute value of the determinant. So we can take the vectors u, v, w in any order when calculating the absolute value of the triple product. 

$$
(\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = \left| \begin{array}{c c c} u _ {1} & u _ {2} & u _ {3} \\ v _ {1} & v _ {2} & v _ {3} \\ w _ {1} & w _ {2} & w _ {3} \end{array} \right|
$$

**EXAMPLE 6** Find the volume of the box (parallelepiped) that is determined by u = + − = − + i j k v i k 2 ,   2 3 , and $\mathbf { w } = 7 \mathbf { j } - 4 \mathbf { k }$ 

**Solution** Using the rule for calculating ${ \mathrm { ~ a ~ } } 3 \times 3$ determinant, we find 

$$
(\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = \left| \begin{array}{r r r} 1 & 2 & - 1 \\ - 2 & 0 & 3 \\ 0 & 7 & - 4 \end{array} \right| = (1) \left| \begin{array}{c c} 0 & 3 \\ 7 & - 4 \end{array} \right| - (2) \left| \begin{array}{c c} - 2 & 3 \\ 0 & - 4 \end{array} \right| + (- 1) \left| \begin{array}{c c} - 2 & 0 \\ 0 & 7 \end{array} \right| = - 2 3.
$$

The volume is $| ( \mathbf { u } \times \mathbf { v } ) \cdot \mathbf { w } | = 2 3$ units cubed. 

### Exercises 11.4


Cross Product Calculations 

In Exercises 1–8, find the length and direction (when defined) of $\textbf { u } \times \textbf { v }$ and $\textbf { v } \times \textbf { u } .$ 

1. $\mathbf { \partial } \cdot \mathbf { u } = 2 \mathbf { i } - 2 \mathbf { j } - \mathbf { k } , \mathbf { v } = \mathbf { i } - \mathbf { k }$ 

2. $\mathbf { u } = 2 \mathbf { i } + 3 \mathbf { j } , \mathbf { v } = - \mathbf { i } + \mathbf { j }$ 

3. u = − + = − + −2 2 4 , 2i j k v i j k 

4. u = + − = i j k v 0 , 

$$
\mathbf {5 . u} = 2 \mathbf {i}, \quad \mathbf {v} = - 3 \mathbf {j}
$$

$$
\mathbf {6 . u} = \mathbf {i} \times \mathbf {j}, \quad \mathbf {v} = \mathbf {j} \times \mathbf {k}
$$

$$
\mathbf {u} = - 8 \mathbf {i} - 2 \mathbf {j} - 4 \mathbf {k}, \quad \mathbf {v} = 2 \mathbf {i} + 2 \mathbf {j} + \mathbf {k}
$$

$$
\mathbf {u} = \frac {3}{2} \mathbf {i} - \frac {1}{2} \mathbf {j} + \mathbf {k}, \quad \mathbf {v} = \mathbf {i} + \mathbf {j} + 2 \mathbf {k}
$$

In Exercises 9–14, sketch the coordinate axes and then include the vectors u, v, and u q v as vectors starting at the origin. 

9. $\mathbf {u} = \mathbf {i}, \quad \mathbf {v} = \mathbf {j}$

Triangles in Space 

In Exercises 15–18, 

a. Find the area of the triangle determined by the points P, Q, and R. 

b. Find a unit vector perpendicular to plane PQR. 

15. $P ( 1 , - 1 , 2 ) , Q ( 2 , 0 , - 1 ) , R ( 0 , 2 , 1 )$ 

16. P Q R ( ) ( ) ( ) 1, 1, 1 , 2, 1, 3 , 3,  1, 1 − 

17. P Q R( ) ( ) ( ) 2,  2, 1 , 3,  1, 2 , 3,  1, 1− − − 

18. $P ( - 2 , 2 , 0 ) , Q ( 0 , 1 , - 1 ) , R ( - 1 , 2 , - 2 )$ 

Triple Scalar Products 

In Exercises 19–22, verify that 

$$
(\mathbf {u} \times \mathbf {v}) \cdot \mathbf {w} = (\mathbf {v} \times \mathbf {w}) \cdot \mathbf {u} = (\mathbf {w} \times \mathbf {u}) \cdot \mathbf {v}
$$

and find the volume of the parallelepiped (box) determined by u, v, and w. 

<table><tr><td>u</td><td>v</td><td>w</td></tr><tr><td>19. 2i</td><td>2j</td><td>2k</td></tr><tr><td>20. i - j + k</td><td>2i + j - 2k</td><td>-i + 2j - k</td></tr><tr><td>21. 2i + j</td><td>2i - j + k</td><td>i + 2k</td></tr><tr><td>22. i + j - 2k</td><td>-i - k</td><td>2i + 4j - 2k</td></tr></table>

Theory and Examples 

23. Parallel and perpendicular vectors Let u = − + 5 , i j k $\mathbf { v } = \mathbf { j } - 5 \mathbf { k } , \mathbf { w } = - 1 5 \mathbf { i } + 3 \mathbf { j } - 3 \mathbf { k }$ . Which vectors, if any, are (a) perpendicular? (b) Parallel? Give reasons for your answers. 

24. Parallel and perpendicular vectors Let $\mathbf { u } = \mathbf { i } + 2 \mathbf { j } - \mathbf { k } .$ v i j k = − + + , w i k = + , r i j k = − − + ( ) ( ) Q Q Q 2 2 . Which vectors, if any, are (a) perpendicular? (b) Parallel? Give reasons for your answers. 

In Exercises 25 and 26, find the magnitude of the torque exerted by F on the bolt at $P \operatorname { i f } \left| { \overline { { P Q } } } \right| = 2 0$ cm  and $| \mathbf { F } | = 1 5 \ : \mathrm { N }$ . Answer in newtonmeters. 

25. 

26. 

27. Which of the following are always true, and which are not always true? Give reasons for your answers. a. $| \mathbf { u } | = { \sqrt { \mathbf { u } \cdot \mathbf { u } } }$ b. $\mathbf { u } \cdot \mathbf { u } = | \mathbf { u } |$ c. $\mathbf { u } \times \mathbf { 0 } = \mathbf { 0 } \times \mathbf { u } = \mathbf { 0 }$ d. $\mathbf { u } \times ( - \mathbf { u } ) = \mathbf { 0 }$ e. $\mathbf { u } \times \mathbf { v } = \mathbf { v } \times \mathbf { u }$ f. $\mathbf { u } \times ( \mathbf { v } + \mathbf { w } ) = \mathbf { u } \times \mathbf { v } + \mathbf { u } \times \mathbf { w }$ g. $( \mathbf { u } \times \mathbf { v } ) \cdot \mathbf { v } = 0$ h. $( \mathbf { u } \times \mathbf { v } ) \cdot \mathbf { w } = \mathbf { u } \cdot ( \mathbf { v } \times \mathbf { w } )$ 

28. Which of the following are always true, and which are not always true? Give reasons for your answers. a. $\mathbf { u } \cdot \mathbf { v } = \mathbf { v } \cdot \mathbf { u }$ b. $\mathbf { u } \times \mathbf { v } = - ( \mathbf { v } \times \mathbf { u } )$ c. $( - \mathbf { u } ) \times \mathbf { v } = - ( \mathbf { u } \times \mathbf { v } )$ d. $( c \mathbf { u } ) \cdot \mathbf { v } = \mathbf { u } \cdot ( c \mathbf { v } ) = c ( \mathbf { u } \cdot \mathbf { v } )$ c ( ) any number e. $c ( \mathbf { u } \times \mathbf { v } ) = ( c \mathbf { u } ) \times \mathbf { v } = \mathbf { u } \times ( c \mathbf { v } )$ c ( ) any number f. $\mathbf { u } \cdot \mathbf { u } = | \mathbf { u } | ^ { 2 }$ g. $( \mathbf { u } \times \mathbf { u } ) \cdot \mathbf { u } = 0$ h. $( \mathbf { u } \times \mathbf { v } ) \cdot \mathbf { u } = \mathbf { v } \cdot ( \mathbf { u } \times \mathbf { v } )$ 

29. Given nonzero vectors u, v, and w, use dot product and cross product notation, as appropriate, to describe the following. a. The vector projection of u onto v b. A vector orthogonal to u and v c. A vector orthogonal to u × v and w d. The volume of the parallelepiped determined by u, v, and w e. A vector orthogonal to u × v and $\bf u _ { \Sigma } \times \bf w$ f. A vector of length u in the direction of v 

30. Compute $( { \bf i } \times { \bf j } ) \times { \bf j }$ and $\mathbf { i } \times ( \mathbf { j } \times \mathbf { j } )$ . What can you conclude about the associativity of the cross product? 

31. Let u, v, and w be vectors. Which of the following make sense, and which do not? Give reasons for your answers. a. $( \mathbf { u } \times \mathbf { v } ) \cdot \mathbf { w }$ b. $\mathbf { u } \times ( \mathbf { v } \cdot \mathbf { w } )$ c. $\mathbf { u } \times ( \mathbf { v } \times \mathbf { w } )$ d. $\mathbf { u } \cdot ( \mathbf { v } \cdot \mathbf { w } )$ 

32. Cross products of three vectors Show that except in degenerate cases, $( \mathbf { u } \times \mathbf { v } ) \times \mathbf { w }$ lies in the plane of u and v, whereas $\mathbf { u } \times ( \mathbf { v } \times \mathbf { w } )$ lies in the plane of v and w. What are the degenerate cases? 

33. Cancelation in cross products If u × = ×v u w and u ≠ 0, then does v w= ? Give reasons for your answer. 

34. Double cancelation If u ≠ 0 and if $\mathbf { u } \times \mathbf { v } = \mathbf { u } \times \mathbf { w }$ and u ⋅ = ⋅v u w, then does v w= ? Give reasons for your answer. 

## 11.5 Lines and Planes in Space

### Area of a Parallelogram

Find the areas of the parallelograms whose vertices are given in Exercises 35–40. 

35. A B C D ( ) ( ) ( ) ( ) 1, 0 , 0, 1 , 1, 0 , 0,  1 − − 

36. A B C D ( ) ( ) ( ) ( ) 0, 0 , 7, 3 , 9, 8 , 2, 5 

37. $A ( - 1 , 2 ) , B ( 2 , 0 ) , C ( 7 , 1 ) , D ( 4 , 3 )$ 

38. $A ( - 6 , 0 ) , B ( 1 , - 4 ) , C ( 3 , 1 ) , D ( - 4 , 5 )$ 

39. $A ( 0 , 0 , 0 ) , B ( 3 , 2 , 4 ) , C ( 5 , 1 , 4 ) , D ( 2 , - 1 , 0 )$ 

40. A B C D ( ) ( ) ( ) ( ) 1, 0,  1 , 1, 7, 2 , 2, 4,  1 , 0, 3, 2 − − 

### Area of a Triangle

Find the areas of the triangles whose vertices are given in Exercises 41–47. 

41. A B C ( ) ( ) ( ) 0, 0 , 2, 3 , 3, 1 − 

42. A B C ( ) ( ) ( ) − − 1,  1 , 3, 3 , 2, 1 

43. $A ( - 5 , 3 ) , B ( 1 , - 2 ) , C ( 6 , - 2 )$ 

44. $A ( - 6 , 0 ) , B ( 1 0 , - 5 ) , C ( - 2 , 4 )$ 

45. $A ( 1 , 0 , 0 ) , B ( 0 , 2 , 0 ) , C ( 0 , 0 , - 1 )$ 

46. $A ( 0 , 0 , 0 ) , B ( - 1 , 1 , - 1 ) , C ( 3 , 0 , 3 )$ 

47. A B C ( ) ( ) ( ) 1,  1, 1 , 0, 1, 1 , 1, 0,  1 − − 

48. Find the volume of a parallelepiped with one of its eight vertices at $A ( 0 , 0 , 0 )$ and three adjacent vertices at $B ( 1 , 2 , 0 ) , C ( 0 , - 3 , 2 )$ and $D ( 3 , - 4 , 5 )$ 

49. Triangle area Find $\mathbf { a } \ 2 \times 2$ determinant formula for the area of the triangle in the xy-plane with vertices at $( 0 , 0 ) , ( a _ { 1 } , a _ { 2 } )$ , and $( b _ { 1 } , b _ { 2 } )$ . Explain your work. 

50. Triangle area Find a concise $3 \times 3$ determinant formula that gives the area of a triangle in the xy-plane having vertices $( a _ { 1 } , a _ { 2 } ) , ( b _ { 1 } , b _ { 2 } )$ ,  and $( c _ { 1 } , c _ { 2 } )$ 

### Volume of a Tetrahedron

Using the methods of Section 6.1, where volume is computed by integrating cross-sectional area, it can be shown that the volume of a tetrahedron formed by three vectors is equal $\mathrm { t o } { \frac { 1 } { 6 } }$ the volume of the parallelepiped formed by the three vectors. Find the volumes of the tetrahedra whose vertices are given in Exercises 51–54. 

51. A B C D ( ) ( ) ( ) ( ) 0, 0, 0 , 2, 0, 0 , 0, 3, 0 , 0, 0, 4 

52. A B C D ( ) ( ) ( ) ( ) 0, 0, 0 , 1, 0, 2 , 0, 2, 1 , 3, 4, 0 

53. $A ( 1 , - 1 , 0 ) , B ( 0 , 2 , - 2 ) , C ( - 3 , 0 , 3 ) , D ( 0 , 4 , 4 )$ 

54. A B C D ( ) ( ) ( ) ( ) − − − − 1, 2, 3 , 2, 0, 1 , 1,  3, 2 , 2, 1,  1 

In Exercises 55–57, determine whether the given points are coplanar. 

55. A B C D ( ) ( ) ( ) ( ) 1, 1, 1 , 1, 0, 4 , 0, 2, 1 , 2,  2, 3 − − 

56. A B C D ( ) ( ) ( ) ( ) 0, 0, 4 , 6, 2, 0 , 2,  1, 1 , 3,  4, 3 − − − 

57. A B C D ( ) ( ) ( ) ( ) 0, 1, 2 , 1, 1, 0 , 2, 0,  1 , 1,  1, 1 − − − 

![教材插图](/books/thomas-calculus/assets/5ead38c95c4c7f91d338e786a6abcae82774d2c40c2135350a0e9cf9b0a91e08.jpg)



FIGURE 11.37 A point P lies on L through $P _ { 0 }$ parallel to v if and only if $\overrightarrow { P _ { 0 } P }$ is a scalar multiple of v.



FIGURE 11.38 Selected points and parameter values on the line in Example 1. The arrows show the direction of increasing t.


### Lines and Line Segments in Space

In the plane, a line is determined by a point and a number giving the slope of the line. In space a line is determined by a point and a vector giving the direction of the line. 

![教材插图](/books/thomas-calculus/assets/cd5b91f2bed304875d049ae58c7908493e1703322b72a437c0189098bb790be4.jpg)


Suppose that L is a line in space passing through a point $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ parallel to a vector $\mathbf { v } = v _ { 1 } \mathbf { i } + v _ { 2 } \mathbf { j } + v _ { 3 } \mathbf { k } .$ Then L is the set of all points $P ( x , y , z )$ for which $\overrightarrow { P _ { 0 } P }$ is parallel to v (Figure 11.37). Thus, ${ \overrightarrow { P _ { 0 } P } } = t { \mathbf v }$ for some scalar parameter t. The value of t depends on the location of the point P along the line, and the domain of t is $( - \infty , \infty )$ . The expanded form of the equation ${ \overrightarrow { P _ { 0 } P } } = t { \mathbf v }$ is 

$$
(x - x _ {0}) \mathbf {i} + (y - y _ {0}) \mathbf {j} + (z - z _ {0}) \mathbf {k} = t \left(v _ {1} \mathbf {i} + v _ {2} \mathbf {j} + v _ {3} \mathbf {k}\right),
$$

which can be rewritten as 

$$
x \mathbf {i} + y \mathbf {j} + z \mathbf {k} = x _ {0} \mathbf {i} + y _ {0} \mathbf {j} + z _ {0} \mathbf {k} + t (v _ {1} \mathbf {i} + v _ {2} \mathbf {j} + v _ {3} \mathbf {k}).\tag{1}
$$

If r( ) is the position vector of a pointt $P ( x , y , z )$ on the line and $\mathbf { r } _ { 0 }$ is the position vector of the point $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ , then Equation (1) gives the following vector form for the equation of a line in space. 

### Vector Equation for a Line

A vector equation for the line L through $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ parallel to a nonzero vector v is 

$$
\mathbf {r} (t) = \mathbf {r} _ {0} + t \mathbf {v}, \quad - \infty <   t <   \infty ,\tag{2}
$$

where r is the position vector of a point $P ( x , y , z )$ on L and $\mathbf { r } _ { 0 }$ is the position vector of $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ 

Equating the corresponding components of the two sides of Equation (1) gives three scalar equations involving the parameter t: 

$$
x = x _ {0} + t v _ {1}, \quad y = y _ {0} + t v _ {2}, \quad z = z _ {0} + t v _ {3}.
$$

These equations give us the standard parametrization of the line for the parameter interval $- \infty < t < \infty .$ 

### Parametric Equations for a Line

The standard parametrization of the line through $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ parallel to a nonzero vector $\mathbf { v } = v _ { 1 } \mathbf { i } + v _ { 2 } \mathbf { j } + v _ { 3 } \mathbf { k }$ is 

$$
x = x _ {0} + t v _ {1}, y = y _ {0} + t v _ {2}, z = z _ {0} + t v _ {3}, - \infty <   t <   \infty .\tag{3}
$$

**EXAMPLE 1** Find parametric equations for the line through $( - 2 , 0 , 4 )$ parallel to $\mathbf { v } = 2 \mathbf { i } + 4 \mathbf { j } - 2 \mathbf { k }$ (Figure 11.38). 

**Solution** With $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ equal to (−2, 0, 4 and) $\nu _ { 1 } { \bf i } + \nu _ { 2 } { \bf j } + \nu _ { 3 } { \bf k }$ equal to $2 \mathbf { i } + 4 \mathbf { j } - 2 \mathbf { k }$ , Equations (3) become 

$$
x = - 2 + 2 t, \quad y = 4 t, \quad z = 4 - 2 t.
$$

**EXAMPLE 2** Find parametric equations for the line through $P ( - 3 , 2 , - 3 )$ and $Q ( 1 , - 1 , 4 )$ 

**Solution** The vector 

$$
\overrightarrow {P Q} = (1 - (- 3)) \mathbf {i} + (- 1 - 2) \mathbf {j} + (4 - (- 3)) \mathbf {k} = 4 \mathbf {i} - 3 \mathbf {j} + 7 \mathbf {k}
$$

is parallel to the line, and Equations (3) with $( x _ { 0 } , y _ { 0 } , z _ { 0 } ) = ( - 3 , 2 , - 3 )$ give 

$$
x = - 3 + 4 t, \quad y = 2 - 3 t, \quad z = - 3 + 7 t.
$$

![教材插图](/books/thomas-calculus/assets/ea4bffa69ef37f3d20a1096c138a74101192da7ff4559e7d3df7debe5579900e.jpg)



FIGURE 11.39 Example 3 derives a parametrization of line segment PQ. The arrow shows the direction of increasing t.


We could have chosen Q( ) 1,  1, 4 as the “base point” and written − 

$$
x = 1 + 4 t, \quad y = - 1 - 3 t, \quad z = 4 + 7 t.
$$

These equations serve as well as the first; they simply place you at a different point on the line for a given value of t. ■ 

Notice that parametrizations are not unique. Not only can the “base point” change, but so can the parameter. The equations $x = - 3 + 4 t ^ { 3 } , y = 2 - 3 t ^ { 3 }$ ,  and $z = - 3 + 7 t ^ { 3 }$ also parametrize the line in Example 2. 

To parametrize a line segment joining two points, we first parametrize the line through the points. We then find the t-values for the endpoints and restrict t to lie in the closed interval bounded by these values. The line equations, together with this added restriction, parametrize the segment. 

**EXAMPLE 3** Parametrize the line segment joining the points $P ( - 3 , 2 , - 3 )$ and Q( ) 1,  1, 4 (Figure 11.39).− 

**Solution** We begin with equations for the line through P and Q, taking them, in this case, from Example 2: 

$$
x = - 3 + 4 t, \quad y = 2 - 3 t, \quad z = - 3 + 7 t.
$$

We observe that the point 

$$
(x, y, z) = (- 3 + 4 t, 2 - 3 t, - 3 + 7 t)
$$

on the line passes through P( ) − − 3, 2,  3 at t = 0 and $Q ( 1 , - 1 , 4 ) \mathrm { a t } t = 1$ . We add the restriction $0 \leq t \leq 1$ to parametrize the segment: 

$$
x = - 3 + 4 t, \quad y = 2 - 3 t, \quad z = - 3 + 7 t, \quad 0 \leq t \leq 1.
$$

The vector form (Equation (2)) for a line in space is more revealing if we think of a line as the path of a particle starting at position $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ and moving in the direction of vector v. Rewriting Equation (2), we have 

![教材插图](/books/thomas-calculus/assets/5c1e1935b6cf7f2cb8686cb1b7604b8ca81d82c90ebb26a0c062538d97288af0.jpg)


(4) 

In other words, the position of the particle at time t is its initial position plus its distance moved ( ) speed time in × the direction v v of its straight-line motion. 

**EXAMPLE 4** A helicopter is to fly directly from a helipad at the origin in the direction of the point ( ) 1, 1, 1 at a speed of 60 m s. What is the position of the helicopter after $1 0 ~ \mathrm { s 2 }$ 

**Solution** We place the origin at the starting position (helipad) of the helicopter. Then the unit vector 

$$
\mathbf {u} = \frac {1}{\sqrt {3}} \mathbf {i} + \frac {1}{\sqrt {3}} \mathbf {j} + \frac {1}{\sqrt {3}} \mathbf {k}
$$

gives the flight direction of the helicopter. From Equation (4), the position of the helicopter at any time t is 

$$
\begin{array}{l} \mathbf {r} (t) = \mathbf {r} _ {0} + t (\text { speed }) \mathbf {u} \\ \quad = \mathbf {0} + t (6 0) \left(\frac {1}{\sqrt {3}} \mathbf {i} + \frac {1}{\sqrt {3}} \mathbf {j} + \frac {1}{\sqrt {3}} \mathbf {k}\right) \\ \quad = 2 0 \sqrt {3} t (\mathbf {i} + \mathbf {j} + \mathbf {k}). \end{array}
$$

When $t = 1 0 ~ \mathrm { s }$ 2 

$$
\begin{array}{l} \mathbf {r} (1 0) = 2 0 0 \sqrt {3} (\mathbf {i} + \mathbf {j} + \mathbf {k}) \\ = \langle 2 0 0 \sqrt {3}, 2 0 0 \sqrt {3}, 2 0 0 \sqrt {3} \rangle . \end{array}
$$


FIGURE 11.40 The distance from S to the line through P parallel to v is PS sin ,  θ where θ is the angle between PS and v.


![教材插图](/books/thomas-calculus/assets/2b82c6ef932ea90e24401490d25ab321056312dd6e4cd750612b0ae4aa537cf6.jpg)


After 10 s of flight from the origin toward 1, 1, 1( ), the helicopter is located at the point $( 2 0 0 { \sqrt { 3 } } , 2 0 0 { \sqrt { 3 } } , 2 0 0 { \sqrt { 3 } } )$ in space. It has traveled a distance of $( 6 0 ~ \mathrm { m / s } ) ( 1 0 ~ \mathrm { \dot { s } } ) = 6 0 0$ m, which is the length of the vector r(10). ■ 

### The Distance from a Point to a Line in Space

To find the distance from a point S to a line that passes through a point P parallel to a vector v, we find the absolute value of the scalar component of PS in the direction of a vector normal to the line (Figure 11.40). In the notation of the figure, the absolute value of the scalar component is PS sin , θ which is ${ \frac { \left| { \overline { { P S } } } \right| | \mathbf { v } | \sin \theta } { | \mathbf { v } | } } = { \frac { \left| { \overline { { P S } } } \times \mathbf { v } \right| } { | \mathbf { v } | } } .$ 

Distance from a Point S to a Line Through P Parallel to v 

$$
d = \frac {\left| \overrightarrow {P S} \times \mathbf {v} \right|}{\left| \mathbf {v} \right|}\tag{5}
$$

**EXAMPLE 5** Find the distance from the point S( ) 1, 1, 5 to the line 

$$
L \colon \quad x = 1 + t, \quad y = 3 - t, \quad z = 2 t.
$$

**Solution** We see from the equations for L that L passes through P( ) 1, 3, 0 parallel to $\mathbf { v } = \mathbf { i } - \mathbf { j } + 2 \mathbf { k }$ . With 

$$
\overrightarrow {P S} = (1 - 1) \mathbf {i} + (1 - 3) \mathbf {j} + (5 - 0) \mathbf {k} = - 2 \mathbf {j} + 5 \mathbf {k}
$$

and 

$$
\overrightarrow {P S} \times \mathbf {v} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 0 & - 2 & 5 \\ 1 & - 1 & 2 \end{array} \right| = \mathbf {i} + 5 \mathbf {j} + 2 \mathbf {k},
$$

Equation (5) gives 

$$
d = \frac {\left| \overrightarrow {P S} \times \mathbf {v} \right|}{\left| \mathbf {v} \right|} = \frac {\sqrt {1 + 2 5 + 4}}{\sqrt {1 + 1 + 4}} = \frac {\sqrt {3 0}}{\sqrt {6}} = \sqrt {5}.
$$

### An Equation for a Plane in Space

A plane in space is determined by knowing a point on the plane and its “tilt” or orientation. This “tilt” is defined by specifying a vector that is perpendicular, or normal, to the plane. 

![教材插图](/books/thomas-calculus/assets/5383331040c8c300d3771fad7fb72ae3efa6abb1bf24dbb778b4fdba1e0a475e.jpg)



FIGURE 11.41  The standard equation for a plane in space is defined in terms of a vector normal to the plane: A point P lies in the plane through $P _ { 0 }$ normal to n if and only if ${ \bf \dot { n } } \cdot \overrightarrow { P _ { 0 } P } = 0 .$


Suppose that plane M passes through a point $P _ { 0 } ( x _ { 0 } , y _ { 0 } , z _ { 0 } )$ and is normal to the nonzero vector $\mathbf { n } = A \mathbf { i } + B \mathbf { j } + C \mathbf { k . } \mathrm { A }$ vector from $P _ { 0 }$ to any point P on the plane is orthogonal to n. Then M is the set of all points $P ( x , y , z )$ for which $\overrightarrow { P _ { 0 } P }$ is orthogonal to n (Figure 11.41). Thus, the dot product n $\mathbf { 1 } \cdot \overrightarrow { P _ { 0 } P } = 0$ .  This equation is equivalent to 

$$
(A \mathbf {i} + B \mathbf {j} + C \mathbf {k}) \cdot [ (x - x _ {0}) \mathbf {i} + (y - y _ {0}) \mathbf {j} + (z - z _ {0}) \mathbf {k} ] = 0,
$$

so the plane M consists of the points $( x , y , z )$ satisfying 

$$
A (x - x _ {0}) + B (y - y _ {0}) + C (z - z _ {0}) = 0.
$$

Equation for a Plane
The plane through $P_{0}(x_{0}, y_{0}, z_{0})$ normal to a nonzero vector $n = A i + B j + C k$ has
Vector equation: $n \cdot \overrightarrow{P_{0}P} = 0$ Component equation: $A(x - x_{0}) + B(y - y_{0}) + C(z - z_{0}) = 0$ Component equation simplified: $Ax + By + Cz = D$ , where $D = Ax_{0} + By_{0} + Cz_{0}$ 

**EXAMPLE 6** Find an equation for the plane through $P _ { 0 } ( - 3 , 0 , 7 )$ perpendicular to $\mathbf { n } = 5 \mathbf { i } + 2 \mathbf { j } - \mathbf { k }$ 

**Solution** The component equation is 

$$
5 (x - (- 3)) + 2 (y - 0) + (- 1) (z - 7) = 0.
$$

Simplifying, we obtain 

$$
\begin{array}{c} 5 x + 1 5 + 2 y - z + 7 = 0 \\ 5 x + 2 y - z = - 2 2. \end{array}
$$

Notice in Example 6 how the components of $\mathbf { n } = 5 \mathbf { i } + 2 \mathbf { j } - \mathbf { k }$ became the coefficients of $x , y ,$ and z in the equation $5 x + 2 y - z = - 2 2$ . The vector $\mathbf { n } = A \mathbf { i } + B \mathbf { j } + C \mathbf { k }$ is normal to the plane $A x + B y + C z = D$ 

**EXAMPLE 7** Find an equation for the plane through $A ( 0 , 0 , 1 ) , B ( 2 , 0 , 0 )$ , and C( ) 0, 3, 0 . 

**Solution** We find a vector normal to the plane and use it with one of the points (it does not matter which) to write an equation for the plane. 

The cross product 

$$
\overrightarrow {A B} \times \overrightarrow {A C} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 2 & 0 & - 1 \\ 0 & 3 & - 1 \end{array} \right| = 3 \mathbf {i} + 2 \mathbf {j} + 6 \mathbf {k}
$$

is normal to the plane. We substitute the components of this vector and the coordinates of $A ( 0 , 0 , 1 )$ into the component form of the equation to obtain 

$$
\begin{array}{c} 3 (x - 0) + 2 (y - 0) + 6 (z - 1) = 0 \\ 3 x + 2 y + 6 z = 6. \end{array}
$$

### Lines of Intersection

Just as lines are parallel if and only if they have the same direction, two planes are parallel if and only if their normals are parallel, or $\mathbf { n } _ { 1 } ~ = ~ k \mathbf { n } .$ for some scalar k. Two planes that are not parallel intersect in a line. 

![教材插图](/books/thomas-calculus/assets/2d48ef0686d1209a11cb72465db0e3d039ed0db84863b1d69eaea4fe2fcf1dda.jpg)



FIGURE 11.42 How the line of intersection of two planes is related to the planes’ normal vectors (Example 8).


**EXAMPLE 8** Find a vector parallel to the line of intersection of the planes $3 x - 6 y - 2 z = 1 5 { \mathrm { ~ a n d ~ } } 2 x + y - 2 z = 5$ 

**Solution** The line of intersection of two planes is perpendicular to both planes’ normal vectors $\mathbf { n } _ { 1 }$ and n (Figure 11.42) and therefore parallel to $\mathbf { n } _ { 1 } \times \mathbf { n } _ { 2 }$ . Turning this around, $\mathbf { n } _ { 1 } \times \mathbf { n } _ { 2 }$ is a vector parallel to the planes’ line of intersection. In our case, 

$$
\mathbf {n} _ {1} \times \mathbf {n} _ {2} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 3 & - 6 & - 2 \\ 2 & 1 & - 2 \end{array} \right| = 1 4 \mathbf {i} + 2 \mathbf {j} + 1 5 \mathbf {k}.
$$

Any nonzero scalar multiple of $\mathbf { n } _ { 1 } \times \mathbf { n } _ { 2 }$ will do as well. 

**EXAMPLE 9** Find parametric equations for the line in which the planes $3 x - 6 y - 2 z = 1 5 { \mathrm { ~ a n d ~ } } 2 x + y - 2 z = 5$ intersect. 

**Solution** We find a vector parallel to the line and a point on the line and use Equations (3). Example 8 identifies $\mathbf { v } = 1 4 \mathbf { i } + 2 \mathbf { j } + 1 5 \mathbf { k }$ as a vector parallel to the line. To find a point on the line, we can take any point common to the two planes. Substituting z = 0 in the plane equations and solving for x and y simultaneously identifies one of these points as ( )3,  1, 0 . The line is− 

$$
x = 3 + 1 4 t, \quad y = - 1 + 2 t, \quad z = 1 5 t.
$$

The choice $z = 0$ is arbitrary, and we could have chosen z = 1 or z = −1 just as well. Or we could have let x = 0 and solved for y and z. The different choices would simply give different parametrizations of the same line. 

Sometimes we want to know where a line and a plane intersect. For example, if we are looking at a flat plate and a line segment passes through it, we may be interested in knowing what portion of the line segment is hidden from our view by the plate. This application is used in computer graphics (Exercise 78). 

**EXAMPLE 10** Find the point where the line 

$$
x = \frac {8}{3} + 2 t, \quad y = - 2 t, \quad z = 1 + t
$$

intersects the plane $3 x + 2 y + 6 z = 6$ 

**Solution** The point 

$$
\left(\frac {8}{3} + 2 t, - 2 t, 1 + t\right)
$$

lies in the plane if its coordinates satisfy the equation of the plane—that is, if 

$$
\begin{array}{c} 3 \Big (\frac {8}{3} + 2 t \Big) + 2 (- 2 t) + 6 (1 + t) = 6 \\ 8 + 6 t - 4 t + 6 + 6 t = 6 \\ 8 t = - 8 \\ t = - 1. \end{array}
$$

The point of intersection is 

$$
(x, y, z) | _ {t = - 1} = \left(\frac {8}{3} - 2, 2, 1 - 1\right) = \left(\frac {2}{3}, 2, 0\right).
$$

### The Distance from a Point to a Plane

If P is a point on a plane with a normal n, then the distance from any point S to the plane is the length of the vector projection of PS onto n, as given in the following formula. 

Distance from a Point S to a Plane Through a Point P with a Normal n 

$$
d = \left| \overrightarrow {P S} \cdot \frac {\mathbf {n}}{| \mathbf {n} |} \right|\tag{6}
$$

**EXAMPLE 11** Find the distance from S( ) 1, 1, 3 to the plane $3 x + 2 y + 6 z = 6$

**Solution** We find a point P in the plane and calculate the length of the vector projection of PS onto a vector n normal to the plane (Figure 11.43). The coefficients in the equation $3 x + 2 y + 6 z = 6$ give 

$$
\mathbf {n} = 3 \mathbf {i} + 2 \mathbf {j} + 6 \mathbf {k}.
$$

![教材插图](/books/thomas-calculus/assets/28d64d0305038ac631b4434506d385b8e19d0ccb893b03c21446e7175a9dfe55.jpg)



FIGURE 11.43 The distance from S to the plane is the length of the vector projection of PS onto n (Example 11).


The points on the plane easiest to find from the plane’s equation are the intercepts. If we take P to be the y-intercept (0, 3, 0 , then) 

$$
\begin{array}{l} \overrightarrow {P S} = (1 - 0) \mathbf {i} + (1 - 3) \mathbf {j} + (3 - 0) \mathbf {k} = \mathbf {i} - 2 \mathbf {j} + 3 \mathbf {k}, \\ | \mathbf {n} | = \sqrt {(3) ^ {2} + (2) ^ {2} + (6) ^ {2}} = \sqrt {4 9} = 7. \end{array}
$$

Therefore, the distance from S to the plane is 

$$
\begin{array}{l} d = \left| \overrightarrow {P S} \cdot \frac {\mathbf {n}}{| \mathbf {n} |} \right| \\ = \left| (\mathbf {i} - 2 \mathbf {j} + 3 \mathbf {k}) \cdot \left(\frac {3}{7} \mathbf {i} + \frac {2}{7} \mathbf {j} + \frac {6}{7} \mathbf {k}\right) \right| \\ = \left| \frac {3}{7} - \frac {4}{7} + \frac {1 8}{7} \right| = \frac {1 7}{7}. \end{array} \text { Length   of   proj } _ {\mathbf {n}} \overrightarrow {P S}
$$

### Angles Between Planes

The angle between two intersecting planes is defined to be the acute angle between their normal vectors (Figure 11.44). 

![教材插图](/books/thomas-calculus/assets/7231914fa60963461fa10a1869c02af93dbc3ed98eb6d7b43695bb85a01c3458.jpg)


**Solution** The vectors 

**EXAMPLE 11** Find the angle between the planes $3 x - 6 y - 2 z = 1 5$ and $2 x + y - 2 z = 5 .$ 


FIGURE 11.44 The angle between two planes is obtained from the angle between their normals.


are normals to the planes. The angle between them is 

$$
\mathbf {n} _ {1} = 3 \mathbf {i} - 6 \mathbf {j} - 2 \mathbf {k}, \quad \mathbf {n} _ {2} = 2 \mathbf {i} + \mathbf {j} - 2 \mathbf {k}
$$

$$
\begin{array}{l} \theta = \arccos \left(\frac {\mathbf {n} _ {1} \cdot \mathbf {n} _ {2}}{| \mathbf {n} _ {1} | | \mathbf {n} _ {2} |}\right) \\ = \arccos \left(\frac {4}{2 1}\right) \approx 1. 3 8 \text {   radians. } \quad \text { About   79   degrees } \end{array}
$$

### EXERCISES 11.5

Lines and Line Segments 

Find parametric equations for the lines in Exercises 1–12. 

1. The line through the point $P ( 3 , - 4 , - 1 )$ parallel to the vector $\mathbf { i } + \mathbf { j } + \mathbf { k }$ 

2. The line through P( ) 1, 2,  1 and − Q( ) −1, 0, 1 

3. The line through P( ) −2, 0, 3 and $Q ( 3 , 5 , - 2 )$ 

4. The line through P( ) 1, 2, 0 and Q( ) 1, 1,  1 − 

5. The line through the origin parallel to the vector 2j k + 

6. The line through the point ( ) 3,  2, 1 parallel to the line− $x = 1 + 2 t , y = 2 - t , z = 3 t$ 

7. The line through ( ) 1, 1, 1 parallel to the z-axis 

8. The line through ( ) 2, 4, 5 perpendicular to the plane 3 7 5 21x y z+ − = 

9. The line through ( ) 0,  7, 0 perpendicular to the plane− $x + 2 y + 2 z = 1 3$ 

10. The line through ( ) 2, 3, 0 perpendicular to the vectors u = + +i j k2 3 and v i j k= + +3 4 5 

11. The x-axis

12. The z-axis

Find parametrizations for the line segments joining the points in Exercises 13–20. Draw coordinate axes and sketch each segment, indicating the direction of increasing t for your parametrization. 

13. ( ) 0, 0, 0 , 1, 1, 3 2 ( ) 

14. ( ) ( ) 0, 0, 0 , 1, 0, 0 

15. ( ) ( ) 1, 0, 0 , 1, 1, 0 

16. ( ) ( ) 1, 1, 0 , 1, 1, 1 

17. ( ) ( ) 0, 1, 1 , 0,  1, 1 − 

18. ( ) ( ) 0, 2, 0 , 3, 0, 0 

19. ( ) ( ) 2, 0, 2 , 0, 2, 0 

20. ( ) ( ) 1, 0,  1 , 0, 3, 0 − 

#### Planes

Find equations for the planes in Exercises 21–26. 

21. The plane through $P _ { 0 } ( 0 , 2 , - 1 )$ normal to n i j k= − −3 2 

22. The plane through ( ) 1,  1, 3 parallel to the plane− 

$$
3 x + y + z = 7
$$

23. The plane through ( ) ( ) 1, 1,  1 ,   2, 0, 2 , and − ( ) 0,  2, 1 − 

24. The plane through ( ) ( ) 2, 4, 5 ,   1, 5, 7 , and ( ) −1, 6, 8 

25. The plane through $P _ { 0 } ( 2 , 4 , 5 )$ perpendicular to the line 

$$
x = 5 + t, \quad y = 1 + 3 t, \quad z = 4 t
$$

26. The plane through A( ) 1,  2, 1 perpendicular to the vector from− the origin to A. 

27. Find the point of intersection of the lines $x = 2 t + 1 ,$ $y = 3 t + 2 , ~ z = 4 t + 3 ,$ and x = +s 2, y s = + 2 4, $z = - 4 s - 1 ,$ and then find the plane determined by these lines. 

28. Find the point of intersection of the lines $x = t , y = - t + 2 ,$ $z = t + 1 ,$ and $x = 2 s + 2 , y = s + 3 , z = 5 s + 6 ,$ ,  and then find the plane determined by these lines. 

In Exercises 29 and 30, find the plane containing the intersecting lines. 

29. $L 1 \colon x \ = \ - 1 + \ t , y = 2 + t , z = 1 - t ; - \infty < t < \infty$ 

$$
L 2: x = 1 - 4 s, \quad y = 1 + 2 s, \quad z = 2 - 2 s; \quad - \infty <   s <   \infty
$$

30. L x t y t z t t1: , 3 3 , 2 ;= = − = − − −∞ < < ∞ L x s y s z s s 2: 1 , 4 , 1 ; = + = + = − + −∞ < < ∞ 

31. Find a plane through $P _ { 0 } ( 2 , 1 , - 1 )$ ) and perpendicular to the line of intersection of the planes $2 x + y - z = 3 , x + 2 y + z = 2 .$ 

32. Find a plane through the points $P _ { 1 } ( 1 , 2 , 3 )$ ,  and $P _ { 2 } ( 3 , 2 , 1 )$ and perpendicular to the plane 4x y z − + = 2 7. 

#### Distances

In Exercises 33–38, find the distance from the point to the line. 

$$
\text {   33.   } (0, 0, 1 2); \quad x = 4 t, \quad y = - 2 t, \quad z = 2 t
$$

34. $(0, 0, 0); x = 5 + 3 t, y = 5 + 4 t, z = - 3 - 5 t$

35. ( ) 2, 1, 3 ; 2 2 , 1 6 , 3 x t y t z = + = + = 

36. ( ) 2, 1,  1 ; 2 , 1 2 , 2− = = + =x t y t z t 

37. $( 3 , - 1 , 4 ) ; x = 4 - t , y = 3 + 2 t , z = - 5 + 3 t$ 

38. $(- 1, 4, 3); \quad x = 1 0 + 4 t, \quad y = - 3, \quad z = 4 t$

In Exercises 39–44, find the distance from the point to the plane. 

$$
\text {   39.   } (2, - 3, 4), \quad x + 2 y + 2 z = 1 3
$$

40. $(0, 0, 0), \quad 3 x + 2 y + 6 z = 6$

41. ( ) 0, 1, 1 , 4 3 12y z+ = − 

42. $( 2 , 2 , 3 ) , 2 x + y + 2 z = 4$ 

43. $( 0 , - 1 , 0 ) , 2 x + y + 2 z = 4$ 

44. ( ) 1, 0,  1 , 4 4 − − + + = x y z 

45. Find the distance from the plane $x + 2 y + 6 z = 1$ to the plane $x + 2 y + 6 z = 1 0 .$ 

46. Find the distance from the line $x = 2 + t , y = 1 + t ,$ $z = - ( 1 / 2 ) - ( 1 / 2 ) i$ to the plane $x + 2 y + 6 z = 1 0$ 

#### Angles

In Exercises 47 and 48, find the angles between the planes. 

47. x + = + − = y x y z 1, 2 2 2 

48. $5 x + y - z = 1 0 , x - 2 y + 3 z = - 1$ 

In Exercises 49 and 50, find the acute angles between the intersecting lines. 

49. x = = = −t y t z t,   2 ,   and $x = 1 - t , y = 5 + t , z = 2 t$ 

${ \bf 5 0 . ~ } x = 2 + t , y = 4 t + 2 , z = 1 + t$ and 

$$
x = 3 t - 2, y = - 2, z = 2 - 2 t
$$

In Exercises 51 and 52, find the acute angles between the lines and planes. 

51. $x = 1 - t , y = 3 t , z = 1 + t ; 2 x - y + 3 z = 6$ 

52. $x = 2 , y = 3 + 2 t , z = 1 - 2 t ; x - y + z = 0$ 

Use a calculator to find the acute angles between the planes inT Exercises 53–56 to the nearest hundredth of a radian. 

53. 2 2 2 3, 2 2 5 x y z x y z + + = − − = 

54. $x + y + z = 1 , ~ z = 0 ~ ( { \mathrm { t h e ~ } } x y { \mathrm { - p l a n e } } )$ 

55. $2 x + 2 y - z = 3 , x + 2 y + z = 2$ 

56. $4 y + 3 z = - 1 2 , 3 x + 2 y + 6 z = 6$ 

#### Intersecting Lines and Planes

In Exercises 57–60, find the point in which the line meets the plane. 

57. $x = 1 - t, \quad y = 3 t, \quad z = 1 + t; \quad 2 x - y + 3 z = 6$

58. x = = + = − − + − = −2, 3 2 , 2 2 ; 6 3 4 12y t z t x y z 

59. x = + = + = + + = 1 2 , 1 5 , 3 ; 2 t y t z t x y z 

60. $x = - 1 + 3 t, \quad y = - 2, \quad z = 5 t; \quad 2 x - 3 z = 7$

Find parametrizations for the lines in which the planes in Exercises 61–64 intersect. 

61. $x + y + z = 1, \quad x + y = 2$

62. 3 6 2 3, 2 2 2 x y z x y z − − = + − = 

63. x − + = + − = 2 4 2, 2 5 y z x y z 

64. $5 x - 2 y = 1 1, \quad 4 y - 5 z = - 1 7$

Given two lines in space, either they are parallel, they intersect, or they are skew (lie in parallel planes). In Exercises 65 and 66, determine whether the lines, taken two at a time, are parallel, intersect, or are skew. If they intersect, find the point of intersection. Otherwise, find the distance between the two lines. 

65. L1: $x = 3 + 2 t , y = - 1 + 4 t , z = 2 - t ; - \infty < t < \infty$ 

$$
L 2: x = 1 + 4 s, y = 1 + 2 s, z = - 3 + 4 s; - \infty <   s <   \infty
$$

$$
L 3: x = 3 + 2 r, y = 2 + r, z = - 2 + 2 r; - \infty <   r <   \infty
$$

66. L x t y t z t t1: 1 2 , 1 , 3 ;= + = − − = −∞ < < ∞ 

L x s y s z s s2: 2 , 3 , 1 ;= − = = + −∞ < < ∞ 

$$
L 3: x = 5 + 2 r, y = 1 - r, z = 8 + 3 r; - \infty <   r <   \infty
$$

#### Theory and Examples

67. Use Equations (3) to generate a parametrization of the line through $P ( 2 , - 4 , 7 )$ parallel to $\mathbf { v } _ { 1 } = 2 \mathbf { i } - \mathbf { j } + 3 \mathbf { k } .$ Then generate another parametrization of the line using the point $P _ { 2 } ( - 2 , - 2 , 1 )$ and the vector $\mathbf { v } _ { 2 } = - \mathbf { i } + ( 1 / 2 ) \mathbf { j } - ( 3 / 2 ) \mathbf { k }$ 

68. Use the component form to generate an equation for the plane through $P _ { 1 } ( 4 , 1 , 5 )$ normal to $\mathbf { n } _ { 1 } = \mathbf { i } - 2 \mathbf { j } + \mathbf { k }$ . Then generate another equation for the same plane using the point $P _ { 2 } ( 3 , - 2 , 0 )$ and the normal vector ${ \bf n } _ { 2 } = - \sqrt { 2 } { \bf i } + 2 \sqrt { 2 } { \bf j } - \sqrt { 2 } { \bf k }$ 

69. Find the points in which the line $x = 1 + 2 t , y = - 1 - t , z = 3 t$ meets the coordinate planes. Describe the reasoning behind your answer. 

70. Find equations for the line in the plane z = 3 that makes an angle of $\pi / 6$ rad with i and an angle of $\pi / 3$ rad with j. Describe the reasoning behind your answer. 

71. Is the line $x = 1 - 2 t , y = 2 + 5 t , z = - 3 t$ parallel to the plane 2 8? Give reasons for your answer.x y z+ − = 

72. How can you tell when two planes $A _ { 1 } x + B _ { 1 } y + C _ { 1 } z = D _ { 1 }$ and $A _ { 2 } x + B _ { 2 } y + C _ { 2 } z = D _ { 2 }$ are parallel? Perpendicular? Give reasons for your answer. 

73. Find two different planes whose intersection is the line $x = 1 + t , y = 2 - t , z = 3 + 2 t .$ Write equations for each plane in the form $A x + B y + C z = D $ 

74. Find a plane through the origin that is perpendicular to the plane $M \colon 2 x + 3 y + z = 1 2$ in a right angle. How do you know that your plane is perpendicular to M? 

75. The graph of $( x / a ) + ( y / b ) + ( z / c ) = 1$ is a plane for any nonzero numbers a, b, and c. Which planes have an equation of this form? 

76. Suppose $L _ { 1 }$ and $L _ { 2 }$ are disjoint (nonintersecting) nonparallel lines. Is it possible for a nonzero vector to be perpendicular to both $L _ { 1 }$ and $L _ { 2 } ?$ Give reasons for your answer. 

77. Perspective in computer graphics In computer graphics and perspective drawing, we need to represent objects seen by the eye in space as images on a two-dimensional plane. Suppose that the eye is at $E ( x _ { 0 } , 0 , 0 )$ as shown here and that we want to represent a point $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ as a point on the yz-plane. We do this by projecting $P _ { 1 } \mathrm { o n t o }$ the plane with a ray from E. The point $P _ { 1 }$ will be portrayed as the point $P ( 0 , y , z )$ . The problem for us as graphics designers is to find y and z given E and $P _ { 1 }$ . 

a. Write a vector equation that holds between $\overrightarrow { E P }$ and $\overrightarrow { E P } _ { 1 }$ . Use the equation to express y and z in terms of $x _ { 0 } , x _ { 1 } , y _ { 1 } , \mathrm { a n d } z _ { 1 } .$ 

b. Test the formulas obtained for y and z in part (a) by investigating their behavior at $x _ { 1 } = 0$ and $x _ { 1 } = x _ { 0 }$ and by seeing what happens as $x _ { 0 } \ \longrightarrow \ \infty .$ What do you find? 

![教材插图](/books/thomas-calculus/assets/5bfd7dd6cf96aa2822c274fbc6987366936493aeb43109c3324a388ae092e7f7.jpg)


78. Hidden lines in computer graphics Here is another typical problem in computer graphics. Your eye is at ( ) 4, 0, 0 . You are looking at a triangular plate whose vertices are at ( ) ( ) 1, 0, 1 ,   1, 1, 0 , and $( - 2 , 2 , 2 )$ . The line segment from 1, 0, 0( ) to 0, 2, 2( ) 

passes through the plate. What portion of the line segment is hidden from your view by the plate? (This is an exercise in finding intersections of lines and planes.) 

## 11.6 Cylinders and Quadric Surfaces

![教材插图](/books/thomas-calculus/assets/5db692de5207a6a9421ee3ea454a5b6af8fb63c49a24c1cf71ed7abbb436af18.jpg)



FIGURE 11.45 A cylinder and generating curve.


![教材插图](/books/thomas-calculus/assets/926f2d6f4bf9a295c11492de9cab590252fb47f929155f36a0b3d6eaa1578d62.jpg)



FIGURE 11.46 Every point of the cylinder in Example 1 has coordinates of the form $\left( x _ { 0 } , x _ { 0 } ^ { 2 } , z \right)$


Up to now, we have studied two special types of surfaces: spheres and planes. In this section, we extend our inventory to include a variety of cylinders and quadric surfaces. Quadric surfaces are surfaces defined by second-degree equations in x, y, and z. Spheres are quadric surfaces, but there are others of equal interest that will be needed in Chapters 13–15. 

### Cylinders

Suppose we are given a plane in space that contains a curve, and in addition we are given a line that is not parallel to this plane. A cylinder is a surface that is generated by moving a line that is parallel to the given line along the curve, while keeping it parallel to the given line. The curve is called a generating curve for the cylinder (Figure 11.45 illustrates this when the given plane is the yz-plane and the given line is the x-axis). In solid geometry, where cylinder means circular cylinder, the generating curves are circles, but now we allow generating curves of any kind. The cylinder in our first example is generated by a parabola. 

**EXAMPLE 1** Find an equation for the cylinder made by the lines parallel to the z-axis that pass through the parabola $y = x ^ { 2 } , z = 0$ (Figure 11.46). 

**Solution** The point $P _ { 0 } ( x _ { 0 } , x _ { 0 } ^ { 2 } , 0 )$ lies on the parabola $y = x ^ { 2 }$ in the xy-plane. Then, for any value of z, the point $Q ( x _ { 0 } , x _ { 0 } ^ { 2 } , z )$ lies on the cylinder because it lies on the line $x = x _ { 0 } , y = x _ { 0 } ^ { 2 }$ through $P _ { 0 }$ parallel to the z-axis. Conversely, any point $Q ( x _ { 0 } , x _ { 0 } ^ { 2 } , z )$ whose y-coordinate is the square of its x-coordinate lies on the cylinder because it lies on the line $x = x _ { 0 } , y = x _ { 0 } ^ { 2 }$ through $P _ { 0 }$ parallel to the z-axis (Figure 11.46). 

Regardless of the value of z, therefore, the points on the surface are the points whose coordinates satisfy the equation $y = x ^ { 2 }$ . This makes $y = x ^ { 2 }$ an equation for the cylinder. ■ 

As Example 1 suggests, any curve $f ( x , y ) = c$ in the xy-plane generates a cylinder parallel to the z-axis whose equation is also $f ( x , y ) = c$ . For instance, the equation $x ^ { 2 } + y ^ { 2 } = 1$ corresponds to the circular cylinder made by the lines parallel to the z-axis that pass through the circle $x ^ { 2 } + y ^ { 2 } = 1$ in the xy-plane. 

In a similar way, any curve $g ( x , z ) = c$ in the xz-plane generates a cylinder parallel to the y-axis whose space equation is also $g ( x , z ) = c .$ Any curve $h ( y , z ) = c$ generates a cylinder parallel to the x-axis whose space equation is also $h ( y , z ) = c .$ . The axis of a cylinder need not be parallel to a coordinate axis, however. 

### Quadric Surfaces

A quadric surface is the graph in space of a second-degree equation in $x , y ,$ and z. We first focus on quadric surfaces given by the equation 

$$
A x ^ {2} + B y ^ {2} + C z ^ {2} + D z = E,
$$

where $A , \ B , \ C , \ D ,$ , and E are constants. The basic quadric surfaces are ellipsoids, paraboloids, elliptical cones, and hyperboloids. Spheres are special cases of ellipsoids. We present a few examples illustrating how to sketch a quadric surface, and then we give a summary table of graphs of the basic types. 

**EXAMPLE 2** The ellipsoid

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} = 1
$$

(Figure 11.47) cuts the coordinate axes at ( ) ± ± a b , 0, 0 ,   0,  , 0 , ( ) and $( 0 , 0 , \pm c )$ . It lies within the rectangular box defined by the inequalities $| x | \leq a , | y | \leq b$ , and $| z | \leq c .$ The surface is symmetric with respect to each of the coordinate planes because each variable in the defining equation is squared. 

![教材插图](/books/thomas-calculus/assets/916f91a2af5e260314e09f43d9bf00b0e56b9b1a907166aaf30f5d9da96c67d6.jpg)


![教材插图](/books/thomas-calculus/assets/d62527324797fb0cbaf594219af50757c8dbf52ff9de35e42bece907b0711d9a.jpg)


FIGURE 11.47 The ellipsoid ${ \frac { x ^ { 2 } } { a ^ { 2 } } } + { \frac { y ^ { 2 } } { b ^ { 2 } } } + { \frac { z ^ { 2 } } { c ^ { 2 } } } = 1$ in Example 2 has elliptical cross-sections in each of the three coordinate planes. 

The curves in which the three coordinate planes cut the surface are ellipses. For example, 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1 \quad \text { when } \quad z = 0.
$$

The curve cut from the surface by the plane $z = z _ { 0 } , | z _ { 0 } | < c ,$ is the ellipse 

$$
\frac {x ^ {2}}{a ^ {2} \left(1 - \left(z _ {0} / c\right) ^ {2}\right)} + \frac {y ^ {2}}{b ^ {2} \left(1 - \left(z _ {0} / c\right) ^ {2}\right)} = 1.
$$

If any two of the semiaxes a, b, and c are equal, the surface is an ellipsoid of revolution. If all three are equal, the surface is a sphere. 

**EXAMPLE 3** The hyperbolic paraboloid

$$
\frac {y ^ {2}}{b ^ {2}} - \frac {x ^ {2}}{a ^ {2}} = \frac {z}{c}, \quad c > 0
$$

has symmetry with respect to the planes $x = 0$ and $y = 0$ (Figure 11.48). The crosssections in these planes are 

$$
x = 0: \text {   the   parabola   } z = \frac {c}{b ^ {2}} y ^ {2}.\tag{1}
$$

$$
y = 0: \text {   the   parabola   } z = - \frac {c}{a ^ {2}} x ^ {2}.\tag{2}
$$

In the plane $x = 0 ,$ , the parabola opens upward from the origin. The parabola in the plane $y = 0$ opens downward. 

![教材插图](/books/thomas-calculus/assets/3ed90fd4da53518a6bb0f0b24c201d5ddaebe72bc9d777a1500b9b14a9f585d7.jpg)



FIGURE 11.48 The hyperbolic paraboloid $( y ^ { 2 } / b ^ { 2 } ) - ( x ^ { 2 } / a ^ { 2 } ) = z / c , c > 0 .$ . The cross-sections in planes perpendicular to the z-axis above and below the xy-plane are hyperbolas. The cross-sections in planes perpendicular to the other axes are parabolas.


If we cut the surface by a plane $z = z _ { 0 } > 0$ , the cross-section is a hyperbola, 

$$
\frac {y ^ {2}}{b ^ {2}} - \frac {x ^ {2}}{a ^ {2}} = \frac {z _ {0}}{c},
$$

with its focal axis parallel to the y-axis and its vertices on the parabola in Equation (1). If $z _ { 0 }$ is negative, the focal axis is parallel to the x-axis and the vertices lie on the parabola in Equation (2). 

Near the origin, the surface is shaped like a saddle or mountain pass. To a person trav-eling along the surface in the yz-plane the origin looks like a minimum. To a person travel-ing the xz-plane the origin looks like a maximum. Such a point is called a saddle point ofa surface. We will say more about saddle points in Section 13.7. 一

Table 11.1 shows graphs of the six basic types of quadric surfaces. Each surface shown is symmetric with respect to the z-axis, but other coordinate axes can serve as well (with appropriate changes to the equation). 

### General Quadric Surfaces

The quadric surfaces we have considered have symmetries relative to the $x \mathrm { - } , y \mathrm { - } ,$ , or z-axes. The general equation of second degree in three variables $x , y , z$ is 

$$
A x ^ {2} + B y ^ {2} + C z ^ {2} + D x y + E x z + F y z + G z + H y + I z + J = 0,
$$

where $A , B , C , D , E , F , G , H , I ,$ and J are constants. This equation leads to surfaces similar to those in Table 11.1, but in general these surfaces might be translated and rotated relative to the $x \mathrm { \cdot , \mathrm { \cdot \mathrm { \cdot } } } ,$ and z-axes. Terms of the type $G x , H y$ , or Iz in the above formula lead to translations, which can be seen by a process of completing the squares. 

**EXAMPLE 4** Identify the surface given by the equation 

$$
x ^ {2} + y ^ {2} + 4 z ^ {2} - 2 x + 4 y + 1 = 0.
$$

**Solution** We complete the squares to simplify the expression: 

$$
\begin{array}{c} x ^ {2} + y ^ {2} + 4 z ^ {2} - 2 x + 4 y + 1 = (x - 1) ^ {2} - 1 + (y + 2) ^ {2} - 4 + 4 z ^ {2} + 1 \\ = (x - 1) ^ {2} + (y + 2) ^ {2} + 4 z ^ {2} - 4. \end{array}
$$

ELLIPTICAL PARABOLOID 


TABLE 11.1 Graphs of Quadric Surfaces


![教材插图](/books/thomas-calculus/assets/50df8840618dd4feaf05222bab933be42c6c84d4483239d5d77be03891a163db.jpg)


$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} = 1
$$

![教材插图](/books/thomas-calculus/assets/b1471e61858255dd0e5539f5d616a95974c974debb9867fd980c03bca1b1a75f.jpg)


ELLIPTICAL CONE 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {z ^ {2}}{c ^ {2}}
$$

![教材插图](/books/thomas-calculus/assets/7c806441a51781dfa059db63379512232e13fd3538700d81e0bf01bac748f4bd.jpg)


![教材插图](/books/thomas-calculus/assets/ab1214d2d8e280d9b60d4129b021b7808d3005b933550b1f32b285adb40c9368.jpg)


HYPERBOLOID OF TWO SHEETS 

$$
\frac {z ^ {2}}{c ^ {2}} - \frac {x ^ {2}}{a ^ {2}} - \frac {y ^ {2}}{b ^ {2}} = 1
$$

![教材插图](/books/thomas-calculus/assets/d0c558bcb714830891b02c8185b92933aed45af04d6e47d2f9e000b2c067aecf.jpg)


$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {z}{c}
$$

Part of the hyperbola x<sup>2</sup> z<sup>2</sup> = 1 in the xz-plane z a<sup>2</sup> c<sup>2</sup> 

![教材插图](/books/thomas-calculus/assets/6a88ffbbc4a3eec90f00cd1bc1fea45d278b53874a0bd2e4dcce54f356ac4ed1.jpg)


HYPERBOLOID OF ONE SHEET 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 1
$$

The parabola z = 

![教材插图](/books/thomas-calculus/assets/42c4b07eab7d70e44330ab4d397f5759c91b4dc4067f4c69c3f6effe0ee59d97.jpg)


![教材插图](/books/thomas-calculus/assets/579a603d7103d2f6fbbcf0058c9e4bb8eab52895048f4aeb630353493fe006ce.jpg)


HYPERBOLIC PARABOLOID 

$$
\frac {y ^ {2}}{b ^ {2}} - \frac {x ^ {2}}{a ^ {2}} = \frac {z}{c}, c > 0
$$


a.


![教材插图](/books/thomas-calculus/assets/5f0d9cf83f9f4765d52a6fd13be3c307db9a4f73f815db0d3cead73824f87c42.jpg)



i.


We can rewrite the original equation as 

$$
\frac {(x - 1) ^ {2}}{4} + \frac {(y + 2) ^ {2}}{4} + \frac {z ^ {2}}{1} = 1.
$$

This is the equation of an ellipsoid whose three semiaxes have lengths 2, 2, and 1 and which is centered at the point 1,  2, 0 ,( ) − as shown in Figure 11.49. 

(y + 2)<sup>2</sup> z<sup>2</sup> The ellipse + = 1 4 1 

in the plane x = 1 

in the plane y = -2 

in the plane z = 0 (This ellipse is a circle.) 

FIGURE 11.49 An ellipsoid centered at the point 1,  2, 0 . ( ) − 

### EXERCISES 11.6

#### Matching Equations with Surfaces

In Exercises 1–12, match the equation with the surface it defines. Also, identify each surface by type (paraboloid, ellipsoid, etc.). The surfaces are labeled (a)–(l). 

1. $x ^ { 2 } + y ^ { 2 } + 4 z ^ { 2 } = 1 0$ 

2. $z ^ { 2 } + 4 y ^ { 2 } - 4 x ^ { 2 } = 4$ 

3. $9 y ^ { 2 } + z ^ { 2 } = 1 6$ 

4. $y ^ { 2 } + z ^ { 2 } = x ^ { 2 }$ 

5. $x = y ^ { 2 } - z ^ { 2 }$ 

6. $x = - y ^ { 2 } - z ^ { 2 }$ 

7. $x ^ { 2 } + 2 z ^ { 2 } = 8$ 

8. $z ^ { 2 } + x ^ { 2 } - y ^ { 2 } = 1$ 

9. $x = z ^ { 2 } - y ^ { 2 }$ 

10. $z = - 4 x ^ { 2 } - y ^ { 2 }$ 

11. $x ^ { 2 } + 4 z ^ { 2 } = y ^ { 2 }$ 

![教材插图](/books/thomas-calculus/assets/914e7b6ce8106925ec12649bc5499a008e8da7f6bde0dcb8a498ea4fabfacdd5.jpg)


12. $9 x ^ { 2 } + 4 y ^ { 2 } + 2 z ^ { 2 } = 3 6$ 


b.


![教材插图](/books/thomas-calculus/assets/66287b1a76901054c70f31c7214b98f0c992e58c2112d824c926d12ca6f46673.jpg)



c.


![教材插图](/books/thomas-calculus/assets/3980a97e9815eacefc33512186cff3d52e6fde04e9296850f57c2b72fd3c76b3.jpg)



d.


![教材插图](/books/thomas-calculus/assets/94d4d93e21e96c28a8cbf9f729c88e90851e6d9bae24ca49cabe7cc90ce0b0d7.jpg)



e.


![教材插图](/books/thomas-calculus/assets/62096f2575a856b6d04d0e161b7cf879f1e24630c98b15537bea1a18b66c01fb.jpg)



f.



g.


![教材插图](/books/thomas-calculus/assets/db0e603d4afe6d3a65f85868444357446a691f6ba1fbdb1647bad1ffee394d62.jpg)


![教材插图](/books/thomas-calculus/assets/70569cbecf308b7f7bdaa2ed9db055eac063c79233179371f2e25d09af4a9381.jpg)



h.


![教材插图](/books/thomas-calculus/assets/0cf8bf3a67c5575f366f5b9480b5796a5f51f20afb15d20d4254ab18efeadc96.jpg)



k.


![教材插图](/books/thomas-calculus/assets/9816d89c5cc41ace92ff0f48112f92e3f0912af3464765e4c08c038b057bb1ac.jpg)


![教材插图](/books/thomas-calculus/assets/6d405e5f327d1b401f9f274acf65435d0a0c588fda3d9e39f3a7e5820737fd19.jpg)



j.


![教材插图](/books/thomas-calculus/assets/8692c8e9564352a41d9d95629d984ce0f2a74d50e2dd40f8039209b9154b134e.jpg)



l.


![教材插图](/books/thomas-calculus/assets/92e8b19963cf90ab13a87ca7ad95d3c114c566dea5a699b23cd24540e1c97f8c.jpg)


#### Drawing

Sketch the surfaces in Exercises 13–44. 

#### CYLINDERS

13. $x ^ { 2 } + y ^ { 2 } = 4 $ 

14. $z = y ^ { 2 } - 1$ 

15. $x ^ { 2 } + 4 z ^ { 2 } = 1 6$ 

16. $4 x ^ { 2 } + y ^ { 2 } = 3 6$ 

#### ELLIPSOIDS

17. $9 x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 9$ 

18. $4 x ^ { 2 } + 4 y ^ { 2 } + z ^ { 2 } = 1 6$ 

19. $4 x ^ { 2 } + 9 y ^ { 2 } + 4 z ^ { 2 } = 3 6$ 

20. $9 x ^ { 2 } + 4 y ^ { 2 } + 3 6 z ^ { 2 } = 3 6$ 

#### PARABOLOIDS AND CONES

21. $z = x ^ { 2 } + 4 y ^ { 2 }$ 

22. $z = 8 - x ^ { 2 } - y ^ { 2 }$ 

23. $x = 4 - 4 y ^ { 2 } - z ^ { 2 }$ 

24. $y = 1 - x ^ { 2 } - z ^ { 2 }$ 

25. $x ^ { 2 } + y ^ { 2 } = z ^ { 2 }$ 

26. $4 x ^ { 2 } + 9 z ^ { 2 } = 9 y ^ { 2 }$ 

#### HYPERBOLOIDS

27. $x ^ { 2 } + y ^ { 2 } - z ^ { 2 } = 1$ 

28. $y ^ { 2 } + z ^ { 2 } - x ^ { 2 } = 1$ 

29. $z ^ { 2 } - x ^ { 2 } - y ^ { 2 } = 1$ 

30. $( y ^ { 2 } / 4 ) - ( x ^ { 2 } / 4 ) - z ^ { 2 } = 1$ 

#### HYPERBOLIC PARABOLOIDS

31. $y ^ { 2 } - x ^ { 2 } = z$ 

#### ASSORTED

32. $x ^ { 2 } - y ^ { 2 } = z$ 

33. $z = 1 + y ^ { 2 } - x ^ { 2 }$ 

34. $4 x ^ { 2 } + 4 y ^ { 2 } = z ^ { 2 }$ 

35. $y = - ( x ^ { 2 } + z ^ { 2 } )$ 

36. $1 6 x ^ { 2 } + 4 y ^ { 2 } = 1 $ 

37. $x ^ { 2 } + y ^ { 2 } - z ^ { 2 } = 4 $ 

38. $x ^ { 2 } + z ^ { 2 } = y$ 

39. $x ^ { 2 } + z ^ { 2 } = 1$ 

40. $1 6 y ^ { 2 } + 9 z ^ { 2 } = 4 x ^ { 2 }$ 

41. $z = - ( x ^ { 2 } + y ^ { 2 } )$ 

42. $y ^ { 2 } - x ^ { 2 } - z ^ { 2 } = 1$ 

43. $4 y ^ { 2 } + z ^ { 2 } - 4 x ^ { 2 } = 4 $ 

44. $x ^ { 2 } + y ^ { 2 } = z$ 

#### Theory and Examples

45. a. Express the area A of the cross-section cut from the ellipsoid 

$$
x ^ {2} + \frac {y ^ {2}}{4} + \frac {z ^ {2}}{9} = 1
$$

by the plane z = c as a function of c. (The area of an ellipse with semiaxes a and b is πab.) 

b. Use slices perpendicular to the z-axis to find the volume of the ellipsoid in part (a). 

c. Now find the volume of the ellipsoid 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} = 1.
$$

Does your formula give the volume of a sphere of radius a if $a = b = c ?$ 

46. The barrel shown here is shaped like an ellipsoid with equal pieces cut from the ends by planes perpendicular to the z-axis. The crosssections perpendicular to the z-axis are circular. The barrel is 2h units high, its midsection radius is R, and its end radii are both r. Find a formula for the barrel’s volume. Then check two things. First, suppose the sides of the barrel are straightened to turn the barrel into a cylinder of radius R and height 2h. Does your formula give the cylinder’s volume? Second, suppose r = 0 and h = R so the barrel is a sphere. Does your formula give the sphere’s volume? 

![教材插图](/books/thomas-calculus/assets/724cf71932427ec128ecdee0aaf4198f607c40999ae9b749ba379413499ad315.jpg)


47. Show that the volume of the segment cut from the paraboloid 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = \frac {z}{c}
$$

by the plane z = h equals half the segment’s base times its altitude. 

48. a. Find the volume of the solid bounded by the hyperboloid 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} - \frac {z ^ {2}}{c ^ {2}} = 1
$$

and the planes z = 0 and $z = h , h > 0$ 

b. Express your answer in part (a) in terms of h and the areas $A _ { 0 }$ and $A _ { h }$ of the regions cut by the hyperboloid from the planes $z = 0 { \mathrm { ~ a n d } } z = h .$ 

c. Show that the volume in part (a) is also given by the formula 

$$
V = \frac {h}{6} (A _ {0} + 4 A _ {m} + A _ {h}),
$$

where $A _ { m }$ is the area of the region cut by the hyperboloid from the plane $z = h / 2$ 

#### Viewing Surfaces

Plot the surfaces in Exercises 49–52 over the indicated domains. If youT can, rotate the surface into different viewing positions. 

49. $z = y ^ {2}, - 2 \leq x \leq 2, - 0. 5 \leq y \leq 2$

50. z 1 , 2 2, 2 2 y x y = − − ≤ ≤ − ≤ ≤ 2 

51. $z = x ^ { 2 } + y ^ { 2 } , - 3 \leq x \leq 3 , - 3 \leq y \leq 3$ 

52. $z = x ^ { 2 } + 2 y ^ { 2 }$ over 

$$
\mathbf {a}. - 3 \leq x \leq 3, - 3 \leq y \leq 3
$$

$$
\mathbf {b}. - 1 \leq x \leq 1, - 2 \leq y \leq 3
$$

$$
\mathbf {c}. - 2 \leq x \leq 2, - 2 \leq y \leq 2
$$

$$
\mathbf {d}. - 2 \leq x \leq 2, - 1 \leq y \leq 1
$$

#### COMPUTER EXPLORATIONS

Use a CAS to plot the surfaces in Exercises 53–58. Identify the type of quadric surface from your graph. 

53. $\frac { x ^ { 2 } } { 9 } + \frac { y ^ { 2 } } { 3 6 } = 1 - \frac { z ^ { 2 } } { 2 5 }$ 

54. ${ \frac { x ^ { 2 } } { 9 } } - { \frac { z ^ { 2 } } { 9 } } = 1 - { \frac { y ^ { 2 } } { 1 6 } }$ 

55. $5 x ^ { 2 } = z ^ { 2 } - 3 y ^ { 2 }$ 

56. ${ \frac { y ^ { 2 } } { 1 6 } } = 1 - { \frac { x ^ { 2 } } { 9 } } + z$ 

57. $\frac { x ^ { 2 } } { 9 } - 1 = \frac { y ^ { 2 } } { 1 6 } + \frac { z ^ { 2 } } { 2 }$ 

58. $y - { \sqrt { 4 - z ^ { 2 } } } = 0$ 

## CHAPTER 11 Questions to Guide Your Review

1. When do directed line segments in the plane represent the same vector? 

2. How are vectors added and subtracted geometrically? How are they added and subtracted algebraically? 

3. How do you find a vector’s magnitude and direction? 

4. If a vector is multiplied by a positive scalar, how is the result related to the original vector? What if the scalar is zero? Negative? 

5. Define the dot product (scalar product) of two vectors. Which algebraic laws are satisfied by dot products? Give examples. When is the dot product of two vectors equal to zero? 

6. What geometric interpretation does the dot product have? Give examples. 

7. What is the vector projection of a vector u onto a vector v? Give an example of a useful application of a vector projection. 

8. Define the cross product (vector product) of two vectors. Which algebraic laws are satisfied by cross products, and which are not? Give examples. When is the cross product of two vectors equal to zero? 

9. What geometric or physical interpretations do cross products have? Give examples. 

10. What is the determinant formula for calculating the cross product of two vectors relative to the Cartesian i, j, k-coordinate system? Use it in an example. 

11. How do you find equations for lines, line segments, and planes in space? Give examples. Can you express a line in space by a single equation? A plane? 

12. How do you find the distance from a point to a line in space? From a point to a plane? Give examples. 

13. What are box products? What significance do they have? How are they evaluated? Give an example. 

14. How do you find equations for spheres in space? Give examples. 

15. How do you find the intersection of two lines in space? A line and a plane? Two planes? Give examples. 

16. What is a cylinder? Give examples of equations that define cylinders in Cartesian coordinates. 

17. What are quadric surfaces? Give examples of different kinds of ellipsoids, paraboloids, cones, and hyperboloids (equations and sketches). 

## CHAPTER 11 Practice Exercises

### Vector Calculations in Two Dimensions

In Exercises 1–4, let u = 〈− 〉3, 4 and v = 〈 − 〉2,  5 . Find (a) the component form of the vector and (b) its magnitude. 

In Exercises 5–8, find the component form of the vector. 

5. The vector obtained by rotating 〈 〉 0, 1 through an angle of 2 3 π radians 

6. The unit vector that makes an angle of π 6 radian with the positive x-axis 

7. The vector 2 units long in the direction 4i j − 

8. The vector 5 units long in the direction opposite to the direction of ( ) ( ) 3 5 4 5 i j + 

Express the vectors in Exercises 9–12 in terms of their lengths and directions. 

9. ${ \sqrt { 2 } } \mathbf { i } + { \sqrt { 2 } } \mathbf { j }$

10. i j − −

11. Velocity vector v i j = − + ( ) ( ) 2 sin 2 cos t t when t = π 2. 

12. Velocity vector $\mathbf { v } = \left( e ^ { t } \cos t - e ^ { t } \sin t \right) \mathbf { i } + \left( e ^ { t } \sin t + e ^ { t } \cos t \right) \mathbf { j }$ when t = ln 2. 

Vector Calculations in Three Dimensions 

Express the vectors in Exercises 13 and 14 in terms of their lengths and directions. 

13. 2 3 6 i j k − +

14. i j k + − 2

15. Find a vector 2 units long in the direction of v i j k = − + 4 4 . 

16. Find a vector 5 units long in the direction opposite to the direction of v i k = + ( ) ( ) 3 5 4 5 . 

In Exercises 17 and 18, find v u v u u v v u u v ,   ,   ,   ,   ,   , ⋅ ⋅ × × v u × , the angle between v and u, the scalar component of u in the direction of v, and the vector projection of u onto v. 

$$
\begin{array}{r l} \mathbf {1 7 .} & \mathbf {v} = \mathbf {i} + \mathbf {j} \\ & \mathbf {u} = 2 \mathbf {i} + \mathbf {j} - 2 \mathbf {k} \end{array}
$$

$$
\begin{array}{r l} \mathbf {1 8 .} & \mathbf {v} = \mathbf {i} + \mathbf {j} + 2 \mathbf {k} \\ & \mathbf {u} = - \mathbf {i} - \mathbf {k} \end{array}
$$

In Exercises 19 and 20, find proj . u 

$$
\begin{array}{r l} \mathbf {v} & = 2 \mathbf {i} + \mathbf {j} - \mathbf {k} \\ \mathbf {u} & = \mathbf {i} + \mathbf {j} - 5 \mathbf {k} \end{array}
$$

$$
\begin{array}{r l} \mathbf {2 0 .} & \mathbf {u} = \mathbf {i} - 2 \mathbf {j} \\ & \mathbf {v} = \mathbf {i} + \mathbf {j} + \mathbf {k} \end{array}
$$

In Exercises 21 and 22, draw coordinate axes and then sketch u, v, and u × v as vectors at the origin. 

21. u = = + i v i j ,

22. u = − = + i j v i j ,

23. If v w = = 2,  3, and the angle between v and w is π 3, find v w − 2 . 

24. For what value or values of a will the vectors u = + −2 4 5i j k and v i j k= − − +4 8 a be parallel? 

In Exercises 25 and 26, find (a) the area of the parallelogram determined by vectors u and v and (b) the volume of the parallelepiped determined by the vectors u, v, and w. 

25. u = + − = + + = − − +i j k v i j k w i j k, 2 , 2 3 

26. u = + = = + + i j v j w i j k , , 

### Lines, Planes, and Distances

27. Suppose that n is normal to a plane and that v is parallel to the plane. Describe how you would find a vector n that is both perpendicular to v and parallel to the plane. 

28. Find a vector in the plane parallel to the line ax by c + = . 

In Exercises 29 and 30, find the distance from the point to the line. 

29. ( ) 2,  2,  0 ;   , , 1 x t y t z t = − = = − + 

30. ( ) 0, 4, 1 ;   2 , 2 , x t y t z t = + = + = 

31. Parametrize the line that passes through the point 1, 2, 3( ) parallel to the vector v i k= − +3 7 . 

32. Parametrize the line segment joining the points P( ) 1, 2, 0 and Q( ) 1, 3,  1 . − 

In Exercises 33 and 34, find the distance from the point to the plane. 

33. ( ) 6, 0,  6 , 4 − − = x y 

34. ( ) 3, 0, 10 , 2 3 2 x y z + + = 

35. Find an equation for the plane that passes through the point ( ) 3,  2, 1− normal to the vector n i j k= + +2 . 

36. Find an equation for the plane that passes through the point ( ) −1, 6, 0 perpendicular to the line x = − + = − 1 ,   6 2 , t y t z = 3 .t 

In Exercises 37 and 38, find an equation for the plane through points P, Q, and R. 

37. P Q R ( ) ( ) ( ) 1,  1, 2 , 2, 1, 3 , 1, 2,  1 − − − 

38. P Q R ( ) ( ) ( ) 1, 0, 0 , 0, 1, 0 , 0, 0, 1 

39. Find the points in which the line x = + = − − 1 2 ,   1 , t y t z = 3t meets the three coordinate planes. 

40. Find the point in which the line through the origin perpendicular to the plane 2 4x y z− − = meets the plane 3 5 2 6.x y z− + = 

41. Find the acute angle between the planes x = 7 and x + + = − y z2 3. 

42. Find the acute angle between the planes x + =y 1 and y z+ = 1. 

43. Find parametric equations for the line in which the planes x + + =2 1y z and x − + = −y z2 8 intersect. 

44. Show that the line in which the planes 

$$
x + 2 y - 2 z = 5 \quad \text { and } \quad 5 x - 2 y - z = 0
$$

intersect is parallel to the line 

$$
x = - 3 + 2 t, \quad y = 3 t, \quad z = 1 + 4 t.
$$

45. The planes 3 6 1x z+ = and 2 2 3x y z+ − = intersect in a line. 

a. Show that the planes are orthogonal. 

b. Find equations for the line of intersection. 

46. Find an equation for the plane that passes through the point ( ) 1, 2, 3 parallel to u = + +2 3i j k and v i j k= − + 2 . 

47. Is v i j k = − + 2 4 related in any special way to the plane 2 5?x y+ = Give reasons for your answer. 

48. The equation n ⋅ $\overrightarrow { P _ { 0 } P } = 0$ represents the plane through $P _ { 0 }$ normal to n. What set does the inequality $\mathbf { n } \cdot \overrightarrow { P _ { 0 } P } > 0$ represent? 

49. Find the distance from the point $P ( 1 , 4 , 0 )$ to the plane through A B( ) ( ) 0, 0, 0 ,   2, 0,  1 ,− and C( ) 2,  1, 0 .− 

50. Find the distance from the point 2, 2, 3 ( ) to the plane 2 3 5 0.x y z+ + = 

51. Find a vector parallel to the plane 2 4 x y z − − = and orthogonal to i j k+ + . 

52. Find a unit vector orthogonal to A in the plane of B and C if A i j k B i j k = − + = + + 2 ,   2 , and C i j k = + − 2 . 

53. Find a vector of magnitude 2 parallel to the line of intersection of the planes x + + − = 2 1 0 y z and x − + + = y z 2 7 0. 

54. Find the point in which the line through the origin perpendicular to the plane 2 4 x y z − − = meets the plane 3 5 2 6. x y z − + = 

55. Find the point in which the line through P( ) 3, 2, 1 normal to the plane 2 2 2 x y z − + = − meets the plane. 

56. What angle does the line of intersection of the planes 2 0 x y z + − = and x + + = y z 2 0 make with the positive x-axis? 

57. The line 

$$
L \colon x = 3 + 2 t, y = 2 t, z = t
$$

intersects the plane $x + 3 y - z = - 4$ in a point P. Find the coordinates of P and find equations for the line in the plane through P perpendicular to L. 

58. Show that for every real number k, the plane 

$$
x - 2 y + z + 3 + k (2 x - y - z + 1) = 0
$$

contains the line of intersection of the planes 

$$
x - 2 y + z + 3 = 0 \quad \text { and } \quad 2 x - y - z + 1 = 0.
$$

59. Find an equation for the plane through A( ) − − 2, 0, 3 and B( ) 1, 2, 1 − that lies parallel to the line through C( ) − −2, 13 5, 26 5 and D( ) 16 5, 13 5, 0 . − 

60. Is the line x = + = − + = − 1 2 ,   2 3 ,   5 t y t z t related in any way to the plane −4 6 10 9? x y z − + = Give reasons for your answer. 

61. Which of the following are equations for the plane through the points P Q ( ) ( ) 1, 1,  1 ,   3, 0, 2 − , and R( ) −2, 1, 0 ? 

$$
\mathbf {a}. (2 \mathbf {i} - 3 \mathbf {j} + 3 \mathbf {k}) \cdot ((x + 2) \mathbf {i} + (y - 1) \mathbf {j} + z \mathbf {k}) = 0
$$

$$
\mathbf {d}. (2 \mathbf {i} - 3 \mathbf {j} + 3 \mathbf {k}) \times ((x + 2) \mathbf {i} + (y - 1) \mathbf {j} + z \mathbf {k}) = \mathbf {0}
$$

$$
\begin{array}{l} \mathbf {e}. (2 \mathbf {i} - \mathbf {j} + 3 \mathbf {k}) \times (- 3 \mathbf {i} + \mathbf {k}) \cdot ((x + 2) \mathbf {i} \\ \quad + (y - 1) \mathbf {j} + z \mathbf {k}) = 0 \end{array}
$$

62. The parallelogram shown here has vertices at $A ( 2 , - 1 , 4 )$ $B ( 1 , 0 , - 1 )$ ( ) ,   1, 2, 3 ,C and D. Find 

![教材插图](/books/thomas-calculus/assets/8cb9b91ecbbeb800cc8f2d0599e3d64af19c4abd7a154f5a1e278cf4738d1f12.jpg)


a. the coordinates of D. 

b. the cosine of the interior angle at B. 

c. the vector projection of BA onto BC. 

d. the area of the parallelogram. 

e. an equation for the plane of the parallelogram. 

f. the areas of the orthogonal projections of the parallelogram on the three coordinate planes. 

63. Distance between skew lines Find the distance between the line $L _ { 1 }$ through the points $A ( 1 , 0 , - 1 )$ and $B ( - 1 , 1 , 0 )$ and the line $L _ { 2 }$ through the points $C ( 3 , 1 , - 1 )$ and $D ( 4 , 5 , - 2 )$ . The distance is to be measured along the line perpendicular to the two lines. First find a vector n perpendicular to both lines. Then project AC onto n. 

64. (Continuation of Exercise 63.) Find the distance between the line through $A ( 4 , 0 , 2 )$ and B( ) 2, 4, 1 and the line through C( ) 1, 3, 2 and D( ) 2, 2, 4 . 

### Quadric Surfaces

Identify and sketch the surfaces in Exercises 65–76. 

65. $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 $ 

66. $x ^ { 2 } + ( y - 1 ) ^ { 2 } + z ^ { 2 } = 1$ 

67. $4 x ^ { 2 } + 4 y ^ { 2 } + z ^ { 2 } = 4$ 

68. $3 6 x ^ { 2 } + 9 y ^ { 2 } + 4 z ^ { 2 } = 3 6$ 

69. $z = - ( x ^ { 2 } + y ^ { 2 } )$ 

70. $y = - ( x ^ { 2 } + z ^ { 2 } )$ 

71. $x ^ { 2 } + y ^ { 2 } = z ^ { 2 }$ 

72. $x ^ { 2 } + z ^ { 2 } = y ^ { 2 }$ 

73. $x ^ { 2 } + y ^ { 2 } - z ^ { 2 } = 4 $ 

74. $4 y ^ { 2 } + z ^ { 2 } - 4 x ^ { 2 } = 4 $ 

75. $y ^ { 2 } - x ^ { 2 } - z ^ { 2 } = 1$ 

76. $z ^ { 2 } - x ^ { 2 } - y ^ { 2 } = 1$ 

## CHAPTER 11 Additional and Advanced Exercises

1. Submarine hunting Two surface ships on maneuvers are trying to determine a submarine’s course and speed to prepare for an aircraft intercept. As shown here, ship A is located at $( 4 , 0 , 0 ) ,$ whereas ship B is located at ( ) 0, 5, 0 . All coordinates are given in thousands of meters. Ship A locates the submarine in the direction of the vector $2 \mathbf { i } + 3 \mathbf { j } - ( 1 / 3 ) \mathbf { k }$ k, and ship B locates it in the direction of the vector $1 8 \mathbf { i } - 6 \mathbf { j } - \mathbf { k }$ . Four minutes ago, the submarine was located at $( 2 , - 1 , - 1 / 3 )$ . The aircraft is due in 20 min. Assuming that the submarine moves in a straight line at a constant speed, to what position should the surface ships direct the aircraft? 

![教材插图](/books/thomas-calculus/assets/956e7f512d7fc36cb408f7bd164a06fe8011d7754b849975dac445c329b4a22a.jpg)


2. A helicopter rescue Two helicopters, $H _ { 1 }$ and $H _ { 2 } ,$ , are traveling together. At time $t = 0 .$ , they separate and follow different straight-line paths given by 

$$
\begin{array}{l l} H _ {1}: & x = 6 + 4 0 t, \quad y = - 3 + 1 0 t, \quad z = - 3 + 2 t \\ H _ {2}: & x = 6 + 1 1 0 t, \quad y = - 3 + 4 t, \quad z = - 3 + t. \end{array}
$$

Time t is measured in hours, and all coordinates are measured in kilometers. Due to system malfunctions, H stops its flight at ( ) 446, 13, 1 and, in a negligible amount of time, lands at ( ) 446, 13, 0 . Two hours later, $H _ { 1 }$ is advised of this fact and heads toward $H _ { 2 }$ at $1 5 0 \mathrm { k m / h }$ . How long will it take $H _ { 1 }$ to reach $H _ { 2 } ?$ 

3. Torque The operator’s manual for the $\operatorname { T o r o } ^ { \mathbb { \left( B \right) } }$ 53-cm lawnmower says, “tighten the spark plug to $2 0 . 4 ~ \mathrm { N \cdot m ^ { 3 } }$ If you are installing the plug with a 26.5-cm socket wrench that places the center of your hand 23 cm from the axis of the spark plug, about how hard should you pull? Answer in newtons. 

![教材插图](/books/thomas-calculus/assets/582bbb1f2ea110511d5e492058c267b8c3269f3c0e402b1f59be469c1fa1149c.jpg)


4. Rotating body The line through the origin and the point A( ) 1, 1, 1 is the axis of rotation of a rigid body rotating with a constant angular speed of $3 / 2$ rad s. The rotation appears to be clockwise when we look toward the origin from A. Find the velocity v of the point of the body that is at the position B( ) 1, 3, 2 . 

![教材插图](/books/thomas-calculus/assets/341d1ee9bcdda270400e38b4be6a5bcfaf1419fa1a9a7b44a98f20a99c94650a.jpg)


5. Consider the weight suspended by two wires in each diagram. Find the magnitudes and components of vectors $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 } ,$ , and angles B and . C 

![教材插图](/books/thomas-calculus/assets/232615ba7adaad42bb4c214fc6c9ac81b56a66667ad77726a6173855d3c53aa4.jpg)


![教材插图](/books/thomas-calculus/assets/0a6f1c338ab830465210174173363b79a3771eda3bdae7d091f81573481f32dc.jpg)


(Hint: This triangle is a right triangle.) 

6. Consider a weight of w N suspended by two wires in the diagram, where $\mathbf { T } _ { 1 }$ and $\mathbf { T } _ { 2 }$ are force vectors directed along the wires. 

![教材插图](/books/thomas-calculus/assets/5b317ead9bbf1a58f06284b26457582c9e58c67abaf0016e7cbd9f6e1f522592.jpg)


a. Find the vectors $\mathbf { T } _ { 1 }$ and $\mathbf { T } _ { 2 }$ and show that their magnitudes are 

$$
\left| \mathbf {T} _ {1} \right| = \frac {w \cos \beta}{\sin (\alpha + \beta)}
$$

and 

$$
\left| \mathbf {T} _ {2} \right| = \frac {w \cos \alpha}{\sin (\alpha + \beta)}.
$$

b. For a fixed $\beta ,$ determine the value of B that minimizes the magnitude $| \mathbf { T } _ { 1 } |$ 

c. For a fixed B, determine the value of C that minimizes the magnitude $| \mathbf { T } _ { 2 } |$ 

### 7. Determinants and planes

a. Show that 

$$
\left| \begin{array}{c c c} x _ {1} - x & y _ {1} - y & z _ {1} - z \\ x _ {2} - x & y _ {2} - y & z _ {2} - z \\ x _ {3} - x & y _ {3} - y & z _ {3} - z \end{array} \right| = 0
$$

is an equation for the plane through the three noncollinear points $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } ) , P _ { 2 } ( x _ { 2 } , y _ { 2 } , z _ { 2 } )$ ,  and $P _ { 3 } ( x _ { 3 } , y _ { 3 } , z _ { 3 } )$ 

b. What set of points in space is described by the equation 

$$
\left| \begin{array}{c c c c} x & y & z & 1 \\ x _ {1} & y _ {1} & z _ {1} & 1 \\ x _ {2} & y _ {2} & z _ {2} & 1 \\ x _ {3} & y _ {3} & z _ {3} & 1 \end{array} \right| = 0?
$$

8. Determinants and lines Show that the lines 

x a s b y a s b z a s b s , , , = + = + = + −∞ < < ∞ <sub>1 1 2 2 3 3</sub> and 

$$
x = c _ {1} t + d _ {1}, \quad y = c _ {2} t + d _ {2}, \quad z = c _ {3} t + d _ {3}, \quad - \infty <   t <   \infty
$$

intersect or are parallel if and only if 

$$
\left| \begin{array}{c c c} a _ {1} & c _ {1} & b _ {1} - d _ {1} \\ a _ {2} & c _ {2} & b _ {2} - d _ {2} \\ a _ {3} & c _ {3} & b _ {3} - d _ {3} \end{array} \right| = 0.
$$

9. Consider a regular tetrahedron of side length 2. 

a. Use vectors to find the angle R formed by the base of the tetrahedron and any one of its other edges. 

![教材插图](/books/thomas-calculus/assets/d6ccb4bd43f4771f0c4c53130439ff53b76fedd331a8e13f612c5df4af34ed4e.jpg)


b. Use vectors to find the angle R formed by any two adjacent faces of the tetrahedron. This angle is commonly referred to as a dihedral angle. 

10. In the figure here, D is the midpoint of side AB of triangle ABC, and E is one-third of the way between C and B. Use vectors to prove that F is the midpoint of line segment CD. 

![教材插图](/books/thomas-calculus/assets/d2f746a06e07feecd24bb160d8e0829868ea52e1e38dca0a38dc2f616d887587.jpg)


11. Use vectors to show that the distance from $P _ { 1 } ( x _ { 1 } , y _ { 1 } )$ to the line $a x + b y = c$ is 

$$
d = \frac {\left| a x _ {1} + b y _ {1} - c \right|}{\sqrt {a ^ {2} + b ^ {2}}}.
$$

12. a. Use vectors to show that the distance from $P _ { 1 } ( x _ { 1 } , y _ { 1 } , z _ { 1 } )$ to the plane $A x + B y + C z = D$ is 

$$
d = \frac {\left| A x _ {1} + B y _ {1} + C z _ {1} - D \right|}{\sqrt {A ^ {2} + B ^ {2} + C ^ {2}}}.
$$

b. Find an equation for the sphere that is tangent to the planes $x + y + z = 3$ and $x + y + z = 9$ if the planes $2 x - y = 0$ and $3 x - z = 0$ pass through the center of the sphere. 

13. a. Distance between parallel planes Show that the distance between the parallel planes $A x + B y + C z = D _ { 1 }$ and $A x + B y + C z = D _ { 2 } { \mathrm { i s } }$ 

$$
d = \frac {\left| D _ {1} - D _ {2} \right|}{\left| A \mathbf {i} + B \mathbf {j} + C \mathbf {k} \right|}.
$$

b. Find the distance between the planes $2 x + 3 y - z = 6$ and $2 x + 3 y - z = 1 2$ 

c. Find an equation for the plane parallel to the plane $2 x - y + 2 z = - 4$ if the point 3, 2,  1 ( ) − is equidistant from the two planes. 

d. Write equations for the planes that lie parallel to, and 5 units away from, the plane $x - 2 y + z = 3$ 

14. Prove that four points $A , B , C ,$ , and D are coplanar (lie in a common plane) if and only i $\overrightarrow { \mathbfcal { f } \mathbf { \nabla } } \overrightarrow { A D } \cdot \left( \overrightarrow { A B } \times \overrightarrow { B C } \right) = 0 .$ 

15. The projection of a vector on a plane Let P be a plane in space and let v be a vector. The vector projection of v onto the plane P, $\mathrm { p r o j } _ { P } \mathbf { v } ,$ can be defined informally as follows. Suppose the sun is shining so that its rays are normal to the plane P. Then $\mathrm { p r o j } _ { P } \mathbf { v }$ is the “shadow” of v onto P. If P is the plane $x + 2 y + 6 z = 6$ and $\mathbf { v } = \mathbf { i } + \mathbf { j } + \mathbf { k }$ , find $\operatorname { p r o j } _ { P } \mathbf { v } .$ 

16. The accompanying figure shows nonzero vectors v, w, and z, with z orthogonal to the line L, and v and w making equal angles β with L. Assuming v w= , find w in terms of v and z. 

![教材插图](/books/thomas-calculus/assets/3f96708cfd781cc90996ce15f10807502783a39e83a2fbb23965988a0f07614f.jpg)


17. Triple vector products The triple vector products $( \mathbf { u } \times \mathbf { v } ) \times \mathbf { w }$ and u $\mathbf { \nabla } \times \left( \mathbf { v } \times \mathbf { w } \right)$ ) are usually not equal, although the formulas for evaluating them from components are similar: 

$$
\begin{array}{l} (\mathbf {u} \times \mathbf {v}) \times \mathbf {w} = (\mathbf {u} \cdot \mathbf {w}) \mathbf {v} - (\mathbf {v} \cdot \mathbf {w}) \mathbf {u}. \\ \mathbf {u} \times (\mathbf {v} \times \mathbf {w}) = (\mathbf {u} \cdot \mathbf {w}) \mathbf {v} - (\mathbf {u} \cdot \mathbf {v}) \mathbf {w}. \end{array}
$$

Verify each formula for the following vectors by evaluating its two sides and comparing the results. 

<table><tr><td>u</td><td>v</td><td>w</td></tr><tr><td>a. 2i</td><td>2j</td><td>2k</td></tr><tr><td>b. i - j + k</td><td>2i + j - 2k</td><td>-i + 2j - k</td></tr><tr><td>c. 2i + j</td><td>2i - j + k</td><td>i + 2k</td></tr><tr><td>d. i + j - 2k</td><td>-i - k</td><td>2i + 4j - 2k</td></tr></table>

18. Cross and dot products Show that if u, v, w, and r are any vectors, then 

$$
\begin{array}{l} \mathbf {a . u} \times (\mathbf {v} \times \mathbf {w}) + \mathbf {v} \times (\mathbf {w} \times \mathbf {u}) + \mathbf {w} \times (\mathbf {u} \times \mathbf {v}) = \mathbf {0} \\ \mathbf {b . u} \times \mathbf {v} = (\mathbf {u} \cdot \mathbf {v} \times \mathbf {i}) \mathbf {i} + (\mathbf {u} \cdot \mathbf {v} \times \mathbf {j}) \mathbf {j} + (\mathbf {u} \cdot \mathbf {v} \times \mathbf {k}) \mathbf {k} \\ \mathbf {c . (u \times v) \cdot (w \times r)} = \left| \begin{array}{c c} \mathbf {u} \cdot \mathbf {w} & \mathbf {v} \cdot \mathbf {w} \\ \mathbf {u} \cdot \mathbf {r} & \mathbf {v} \cdot \mathbf {r} \end{array} \right|. \end{array}
$$

19. Cross and dot products Prove or disprove the formula 

$$
\mathbf {u} \times (\mathbf {u} \times (\mathbf {u} \times \mathbf {v})) \cdot \mathbf {w} = - | \mathbf {u} | ^ {2} \mathbf {u} \cdot \mathbf {v} \times \mathbf {w}.
$$

20. By forming the cross product of two appropriate vectors, derive the trigonometric identity 

$$
\sin (A - B) = \sin A \cos B - \cos A \sin B.
$$

21. Use vectors to prove that 

$$
(a ^ {2} + b ^ {2}) (c ^ {2} + d ^ {2}) \geq (a c + b d) ^ {2}
$$

for any four numbers a, b, c, and d. (Hint: Let $\mathbf { u } = a \mathbf { i } + b \mathbf { j }$ and $\mathbf { v } = c \mathbf { i } + d \mathbf { j } . )$ 

22. Dot multiplication is positive definite Show that dot multiplication of vectors is positive definite; that is, show that u $\mathbf { u } \geq 0$ for every vector u and that u $\mathbf { \partial } \cdot \mathbf { u } = 0 \mathrm { i f }$ and only if $\bf u _ { \Sigma } = \sigma _ { 0 }$ 

23. Show that u v u v + ≤ + for any vectors u and v. 

24. Show that w v u u v = + bisects the angle between u and v. 

25. Show that $| \mathbf { v } | \mathbf { u } + | \mathbf { u } | \mathbf { v }$ and v u u v − are orthogonal. 

## CHAPTER 11 Technology Application Projects

Mathematica/Maple Projects 

Projects can be found within MyLab Math. 

• Using Vectors to Represent Lines and Find Distances Parts I and II: Learn the advantages of interpreting lines as vectors. Part III: Use vectors to find the distance from a point to a line. 

• Putting a Scene in Three Dimensions onto a Two-Dimensional Canvas Use the concept of planes in space to obtain a two-dimensional image. 

Part II: Plot functions that are defined implicitly. 

• Getting Started in Plotting in 3D Part I: Use the vector definition of lines and planes to generate graphs and equations, and to compare different forms for the equations of a single line. 
