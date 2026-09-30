---
title: "Chapter 6: Applications of Definite Integrals"
order: 6
---

# Chapter 6: Applications of Definite Integrals

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 6.1 Volumes Using Cross-Sections

![[b05138901261665a4ec5e3b37197128a0968ea3132168b721c60dd157c613e89.jpg|image]]


In this section we define volumes of solids by using the areas of their cross-sections. A cross-section of a solid S is the planar region formed by intersecting S with a plane (Figure 6.1). We present three different methods for obtaining the cross-sections appropriate to finding the volume of a particular solid: the method of slicing, the disk method, and the washer method. 

Suppose that we want to find the volume of a solid S like the one pictured in Figure 6.1. At each point x in the interval $[a, b]$ we form a cross-section $S(x)$ by intersecting S with a plane perpendicular to the x-axis through the point x, which gives a planar region whose area is $A(x)$ . We will show that if A is a continuous function of x, then the volume of the solid S is the definite integral of $A(x)$ . This method of computing volumes is known as the method of slicing. 


FIGURE 6.1 A cross-section $S(x)$ of the solid $S$ formed by intersecting $S$ with a plane $P_{x}$ perpendicular to the $x$ -axis through the point $x$ in the interval $[a, b]$ .


Before showing how this method works, we need to extend the definition of a cylinder from the usual cylinders of classical geometry (which have circular, square, or other regular bases) to cylindrical solids that have more general bases. As shown in Figure 6.2, if the cylindrical solid has a base whose area is A and its height is h, then the volume of the cylindrical solid is 

![[f4fff53c68503a40f788d72981e9ac6cb8ed54faa4ac5745aa0623975736e13f.jpg|image]]



Plane region whose area we know


![[4ce1029981511ed70897570bfef575b8c71b11e68e21cbcf813c467b1e73ab0d.jpg|image]]



Cylindrical solid based on region
Volume = base area × height = Ah



FIGURE 6.2 The volume of a cylindrical solid is equal to its base area times its height.


![[700c9355ed109915a45eaa4341242b4b21435eee1a4242e374a641638ac7041a.jpg|image]]



FIGURE 6.3 A typical thin slab in the solid S.


![[d146b176a3443409a791fe902efe43ff590d7c553b6115b7c696a29fa1f40a61.jpg|image]]



FIGURE 6.4 The solid thin slab in Figure 6.3 is shown enlarged here. It is approximated by the cylindrical solid with base $S(x_{k})$ having area $A(x_{k})$ and height $\Delta x_{k} = x_{k} - x_{k-1}$ .


$$
\text { Volume } = \text { area } \times \text { height } = A \cdot h.
$$

In the method of slicing, the base will be the cross-section of S that has area $A(x)$ , and the height will correspond to the width $\Delta x_{k}$ of subintervals formed by partitioning the interval $[a,b]$ into finitely many subintervals $[x_{k-1},x_{k}]$ . 

## Slicing by Parallel Planes

We partition $[a,b]$ into subintervals of width (length) $\Delta x_{k}$ and slice the solid, as we would a loaf of bread, by planes perpendicular to the x-axis at the partition points $a = x_{0} < x_{1} < \cdots < x_{n} = b$ . These planes slice S into thin “slabs” (like thin slices of a loaf of bread). A typical slab is shown in Figure 6.3. We approximate the slab between the plane at $x_{k-1}$ and the plane at $x_{k}$ by a cylindrical solid with base area $A(x_{k})$ and height $\Delta x_{k} = x_{k} - x_{k-1}$ (Figure 6.4). The volume $V_{k}$ of this cylindrical solid is $A(x_{k}) \cdot \Delta x_{k}$ , which is approximately the same volume as that of the slab: 

Volume of the kth slab $\approx V_{k} = A(x_{k}) \Delta x_{k}$ . 

The volume V of the entire solid S is therefore approximated by the sum of these cylindrical volumes, 

$$
V \approx \sum_ {k = 1} ^ {n} V _ {k} = \sum_ {k = 1} ^ {n} A (x _ {k}) \Delta x _ {k}.
$$

This is a Riemann sum for the function $A(x)$ on $[a, b]$ . The approximation given by this Riemann sum converges to the definite integral of $A(x)$ as $n \to \infty$ : 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} A (x _ {k}) \Delta x _ {k} = \int_ {a} ^ {b} A (x) d x.
$$

Therefore, we define this definite integral to be the volume of the solid S. 

> ***DEFINITION*** The volume of a solid of integrable cross-sectional area $A(x)$ from x = a to x = b is the integral of A from a to b, 
>
> $$
> V = \int_ {a} ^ {b} A (x) d x.
> $$
>
This definition applies whenever $A(x)$ is integrable, and in particular when $A(x)$ is continuous. To apply this definition to calculate the volume of a solid using cross-sections perpendicular to the x-axis, take the following steps: 

## Calculating the Volume of a Solid

1. Sketch the solid and a typical cross-section. 

2. Find a formula for $A(x)$ , the area of a typical cross-section. 

3. Find the limits of integration. 

4. Integrate $A(x)$ to find the volume. 

## **EXAMPLE 1** A pyramid 3 meters high has a square base that is 3 meters on a side. The cross-section of the pyramid perpendicular to the altitude x meters down from the vertex is a square x meters on a side. Find the volume of the pyramid.

![[b6a7b2160558f1aa6d2fda14aa8d6d6f29366d7910ec0513a1d31f686ddf1e9d.jpg|image]]



FIGURE 6.5 The cross-sections of the pyramid in Example 1 are squares.


![[6b2a4f621893a3d22005e1ceca6e80c941185ced62f05ac060c79c9881311306.jpg|image]]



FIGURE 6.6 The wedge of Example 2, sliced perpendicular to the x-axis. The cross-sections are rectangles.


![[ffb203b44dc89030291462ecf4c24ddb4de9fe3f15b5ed2930e5b2244acd26fd.jpg|image]]



FIGURE 6.7 Cavalieri's principle: These solids have the same volume (imagine each solid as a stack of coins).


## **Solution**

1. A sketch. We draw the pyramid with its altitude along the $x$ -axis and its vertex at the origin and include a typical cross-section (Figure 6.5). Note that by positioning the pyramid in this way, we have vertical cross-sections that are squares, whose areas are easy to calculate. 

2. A formula for $A(x)$ . The cross-section at x is a square x meters on a side, so its area is 

$$
A (x) = x ^ {2}.
$$

3. The limits of integration. The squares lie on the planes from $x = 0$ to $x = 3$ . 

4. Integrate to find the volume: 

$$
V = \int_ {0} ^ {3} A (x) d x = \int_ {0} ^ {3} x ^ {2} d x = \left. \frac {x ^ {3}}{3} \right] _ {0} ^ {3} = 9 \mathrm{m} ^ {3}.
$$

**EXAMPLE 2** A curved wedge is cut from a circular cylinder of radius 3 by two planes. One plane is perpendicular to the axis of the cylinder. The second plane crosses the first plane at a $45^{\circ}$ angle at the center of the cylinder. Find the volume of the wedge. 

**Solution** We draw the wedge and sketch a typical cross-section perpendicular to the x-axis (Figure 6.6). The base of the wedge in the figure is the semicircle with $x \geq 0$ that is cut from the circle $x^{2} + y^{2} = 9$ by the $45^{\circ}$ plane when it intersects the y-axis. For any x in the interval [0,3], the y-values in this semicircular base vary from $y = -\sqrt{9 - x^{2}}$ to $y = \sqrt{9 - x^{2}}$ . When we slice through the wedge by a plane perpendicular to the x-axis, we obtain a cross-section at x, which is a rectangle of height x whose width extends across the semicircular base. The area of this cross-section is 

$$
\begin{array}{c} A (x) = (\text { height }) (\text { width }) = (x) \bigl (2 \sqrt {9 - x ^ {2}} \bigr) \\ = 2 x \sqrt {9 - x ^ {2}}. \end{array}
$$

The rectangles run from $x = 0$ to $x = 3$ , so we have 

$$
\begin{array}{l l} V = \int_ {a} ^ {b} A (x) d x = \int_ {0} ^ {3} 2 x \sqrt {9 - x ^ {2}} d x \\ = - \frac {2}{3} (9 - x ^ {2}) ^ {3 / 2} \bigg | _ {0} ^ {3} & \text { Let } u = 9 - x ^ {2} \text { and } \\ = 0 + \frac {2}{3} (9) ^ {3 / 2} & \text { and substitute back. } \\ = 1 8. \end{array}
$$

**EXAMPLE 3** Cavalieri's principle says that solids with equal altitudes and identical cross-sectional areas at each height have the same volume (Figure 6.7). This follows immediately from the definition of volume, because the cross-sectional area function $A(x)$ and the interval $[a, b]$ are the same for both solids. 

## Solids of Revolution: The Disk Method

The solid generated by rotating (or revolving) a planar region about an axis in its plane is called a solid of revolution. To find the volume of a solid like the one shown in Figure 6.8, we first observe that the cross-sectional area $A(x)$ is the area of a disk of radius $R(x)$ , where $R(x)$ is the distance from the axis of revolution to the planar region's boundary. The area is then 

$$
A (x) = \pi (\text { radius }) ^ {2} = \pi [ R (x) ] ^ {2}.
$$

Therefore, the definition of volume gives us the following formula. 

HISTORICAL BIOGRAPHY
Bonaventura Cavalieri
(1598–1647) 

Cavalieri was born in Milan, Italy. At a young age, Cavalieri began studying geometry. Later, he studied from and worked with Galileo; the two mathematicians often corresponded through letters. Cavalieri learned the foundations of calculus and developed his ideas on the method of indivisibles, which was his major contribution to mathematics. 

Volume by Disks for Rotation About the x-Axis 

$$
V = \int_ {a} ^ {b} A (x) d x = \int_ {a} ^ {b} \pi [ R (x) ] ^ {2} d x.
$$

To know more, visit the companion Website. 

This method for calculating the volume of a solid of revolution is often called the disk method because a cross-section is a circular disk of radius $R(x)$ . 

**EXAMPLE 4** The region between the curve $y = \sqrt{x}$ , $0 \leq x \leq 4$ , and the x-axis is revolved about the x-axis to generate a solid. Find its volume. 

**Solution** We draw the region and a typical radius (Figure 6.8a) and the generated solid (Figure 6.8b). The volume is 

![[8415dee536c41fc5c736dd3a0dbe647f3619e08f1e95fcfb563b656fe61b6e95.jpg|image]]


![[bc9eba706ea8cec3989f87eabc8f7a1666b9b6e965cb63d856a6216993aeb57d.jpg|image]]



FIGURE 6.8 The region (a) and solid of revolution (b) in Example 4.


$$
\begin{array}{l l} V = \int_ {a} ^ {b} \pi [ R (x) ] ^ {2} d x \\ = \int_ {0} ^ {4} \pi [ \sqrt {x} ] ^ {2} d x & \text { Radius } R (x) = \sqrt {x} \text { for   rotation   around } x \text {-axis}. \\ = \pi \int_ {0} ^ {4} x d x = \left. \pi \frac {x ^ {2}}{2} \right] _ {0} ^ {4} = \pi \frac {(4) ^ {2}}{2} = 8 \pi . \end{array}
$$

**EXAMPLE 5** The circle 

$$
x ^ {2} + y ^ {2} = a ^ {2}
$$

is rotated about the x-axis to generate a sphere. Find its volume. 

![[cd465dbb602b754dfc326b6fc81fec2a2f827e7a76229f9b2954e4a46a1db86c.jpg|image]]



FIGURE 6.9 The sphere generated by rotating the circle $x^{2} + y^{2} = a^{2}$ about the x-axis. The radius is $R(x) = y = \sqrt{a^{2} - x^{2}}$ (Example 5).


**Solution** We imagine the sphere cut into thin slices by planes perpendicular to the x-axis (Figure 6.9). The cross-sectional area at a typical point x between -a and a is 

$$
A (x) = \pi y ^ {2} = \pi (a ^ {2} - x ^ {2}). \qquad \begin{array}{l} R (x) = \sqrt {a ^ {2} - x ^ {2}} \text {   for   rotation   around   } x \text {-axis}. \end{array}
$$


(b)


Therefore, the volume is 

$$
V = \int_ {- a} ^ {a} A (x) d x = \int_ {- a} ^ {a} \pi \left(a ^ {2} - x ^ {2}\right) d x = \pi \left[ a ^ {2} x - \frac {x ^ {3}}{3} \right] _ {- a} ^ {a} = \frac {4}{3} \pi a ^ {3}.
$$

The axis of revolution in the next example is not the x-axis, but the rule for calculating the volume is the same: Integrate $\pi(\text{radius})^{2}$ between appropriate limits. 

**EXAMPLE 6** Find the volume of the solid generated by revolving the region bounded by $y = \sqrt{x}$ and the lines y = 1, x = 4 about the line y = 1. 

**Solution** We draw the region and a typical radius (Figure 6.10a), and the generated solid (Figure 6.10b). The volume is 

$$
\begin{array}{l l} V = \int_ {1} ^ {4} \pi [ R (x) ] ^ {2} d x \\ = \int_ {1} ^ {4} \pi [ \sqrt {x} - 1 ] ^ {2} d x & \text { Radius } R (x) = \sqrt {x} - 1 \text { for   rotation   around } y = 1. \\ = \pi \int_ {1} ^ {4} [ x - 2 \sqrt {x} + 1 ] d x & \text { Expand   integrand. } \\ = \pi \left[ \frac {x ^ {2}}{2} - 2 \cdot \frac {2}{3} x ^ {3 / 2} + x \right] _ {1} ^ {4} = \frac {7 \pi}{6}. & \text { Integrate. } \end{array}
$$

![[1b22e51570d0b316e72a8dc65dd2b6cf8faf1b369165aad1d1717127905c107a.jpg|image]]



(a)


![[2cc4927de3f722ff98e4717ade8255a0aaf136ce38d7af3508efa7f0f18f6f23.jpg|image]]



FIGURE 6.10 The region (a) and solid of revolution (b) in Example 6.


To find the volume of a solid generated by revolving a region between the y-axis and a curve $x = R(y)$ , $c \leq y \leq d$ , about the y-axis, we use the same method with x replaced by y. In this case, the area of the circular cross-section is 

$$
A (y) = \pi [ \text { radius } ] ^ {2} = \pi [ R (y) ] ^ {2},
$$

and the definition of volume gives us the following formula. 

Volume by Disks for Rotation About the y-Axis 

$$
V = \int_ {c} ^ {d} A (y) d y = \int_ {c} ^ {d} \pi [ R (y) ] ^ {2} d y.
$$

## **EXAMPLE 7** Find the volume of the solid generated by revolving the region between the y-axis and the curve $x = 2/y$ , $1 \leq y \leq 4$ , about the y-axis.


(a)


![[270513d0da39662f37d1d745baa91ebf2c2d80bdd9b97142874fbc4bb28be77f.jpg|image]]



(a)


![[d29693afbf6b699bee0cdf7ae329efe3bb7c81893a3c9292a5a98da67d170fc8.jpg|image]]



FIGURE 6.11 The region (a) and part of the solid of revolution (b) in Example 7.


**Solution** We draw the region and a typical radius (Figure 6.11a) and the generated solid (Figure 6.11b). The volume is 

$$
\begin{array}{l l} V = \int_ {1} ^ {4} \pi [ R (y) ] ^ {2} d y \\ = \int_ {1} ^ {4} \pi \left(\frac {2}{y}\right) ^ {2} d y & \text { Radius } R (y) = \frac {2}{y} \text { for } \\ & \text { rotation   around } y \text {-axis} \\ = \pi \int_ {1} ^ {4} \frac {4}{y ^ {2}} d y = 4 \pi \left[ - \frac {1}{y} \right] _ {1} ^ {4} = 4 \pi \left[ \frac {3}{4} \right] = 3 \pi . \end{array}
$$

**EXAMPLE 8** Find the volume of the solid generated by revolving the region between the parabola $x = y^{2} + 1$ and the line x = 3 about the line x = 3. 

**Solution** We draw the region and a typical radius (Figure 6.12a) and the generated solid (Figure 6.12b). Note that the cross-sections are perpendicular to the line x = 3 and have y-coordinates from $y = -\sqrt{2}$ to $y = \sqrt{2}$ . The volume is 

$$
\begin{array}{l l} V = \int_ {- \sqrt {2}} ^ {\sqrt {2}} \pi [ R (y) ] ^ {2} d y & y = \pm \sqrt {2} \text {   when   } x = 3 \\ = \int_ {- \sqrt {2}} ^ {\sqrt {2}} \pi [ 2 - y ^ {2} ] ^ {2} d y & \text { Radius   } R (y) = 3 - (y ^ {2} + 1) \\ & \text { for   rotation   around   axis   } x = 3. \\ = \pi \int_ {- \sqrt {2}} ^ {\sqrt {2}} [ 4 - 4 y ^ {2} + y ^ {4} ] d y & \text { Expand   integrand. } \\ = \pi \left[ 4 y - \frac {4}{3} y ^ {3} + \frac {y ^ {5}}{5} \right] _ {- \sqrt {2}} ^ {\sqrt {2}} & \text { Integrate. } \\ = \frac {6 4 \pi \sqrt {2}}{1 5}. \end{array}
$$

![[22c7b5d921232907226cf77b5e166e924642a1770624b756b73f16ace0eac198.jpg|image]]


![[72e2dcfa9942b64a3482c850d830dbc362dc41ec8dae39ca16fb868633170dc3.jpg|image]]



(b)



FIGURE 6.12 The region (a) and solid of revolution (b) in Example 8.


## Solids of Revolution: The Washer Method

If the region we revolve to generate a solid does not border on or cross the axis of revolution, then the solid has a hole in it (Figure 6.13). The cross-sections perpendicular to the axis of revolution are washers (the purplish circular surface in Figure 6.13) instead of disks. The dimensions of a typical washer are 

$$
\text { Outer   radius: } \quad R (x)
$$

Inner radius: $r(x)$ 

![[1f688490e6a136f162cce013d628b38db71b036c2cbc65b5f304a891086f3dea.jpg|image]]



FIGURE 6.13 The cross-sections of the solid of revolution generated here are washers, not disks, so the integral $\int_{a}^{b} A(x) dx$ leads to a slightly different formula.


![[566aef42495ae75460587b7ef52648e346f7de895686b81a75c1c7547009cca0.jpg|image]]


![[852b5584117281bda99026421f3c44d53ebc2d9c5af402964b59d2bcfc507c2f.jpg|image]]



FIGURE 6.14 (a) The region in Example 9 spanned by a line segment perpendicular to the axis of revolution. (b) When the region is revolved about the x-axis, the line segment generates a washer.


The washer's area is the area of a circle of radius $R(x)$ minus the area of a circle of radius $r(x)$ : 

$$
A (x) = \pi [ R (x) ] ^ {2} - \pi [ r (x) ] ^ {2} = \pi ([ R (x) ] ^ {2} - [ r (x) ] ^ {2}).
$$

Consequently, the definition of volume in this case gives us the following formula. 

Volume by Washers for Rotation About the x-Axis 

This method for calculating the volume of a solid of revolution is called the washer method because a thin slab of the solid resembles a circular washer with outer radius $R(x)$ and inner radius $r(x)$ . 

$$
V = \int_ {a} ^ {b} A (x) d x = \int_ {a} ^ {b} \pi \left([ R (x) ] ^ {2} - [ r (x) ] ^ {2}\right) d x.
$$

**EXAMPLE 9** The region bounded by the curve $y = x^{2} + 1$ and the line $y = -x + 3$ is revolved about the x-axis to generate a solid. Find the volume of the solid. 

**Solution** We draw the region and sketch a line segment across it perpendicular to the axis of revolution (the red segment in Figure 6.14a). We then find the outer and inner radii of the washer that would be swept out by the line segment if it were revolved about the x-axis along with the region. These radii are the distances of the ends of the line segment from the axis of revolution (see Figure 6.14). 

Outer radius: 

Inner radius: 

$$
\begin{array}{l} R (x) = - x + 3 \\ r (x) = x ^ {2} + 1 \end{array}
$$

We obtain the limits of integration by finding the x-coordinates of the intersection points of the curve and line in Figure 6.14a. 

$$
\begin{array}{c} x ^ {2} + 1 = - x + 3 \\ x ^ {2} + x - 2 = 0 \\ (x + 2) (x - 1) = 0 \\ x = - 2, \quad x = 1 \end{array} \quad \text { Limits   of   integration }
$$

![[e4e65a5209ffe5cef7ba5ac2a0daac64a42a324c90afc5433cf45a96123e5670.jpg|image]]


![[63e8ea5562cba0cf35cbd1201d04493dd0b6467f8ad6e3e90dc2b81b69cd9444.jpg|image]]


The volume is 

$$
\begin{array}{l l} V = \int_ {a} ^ {b} \pi \left(\left[ R (x) \right] ^ {2} - \left[ r (x) \right] ^ {2}\right) d x & \text {   Rotation   around   } x \text {-axis   } \\ = \int_ {- 2} ^ {1} \pi \left((- x + 3) ^ {2} - (x ^ {2} + 1) ^ {2}\right) d x & \text {   Substitute   for   radii   and   limits   of   integration   } \\ = \pi \int_ {- 2} ^ {1} (8 - 6 x - x ^ {2} - x ^ {4}) d x & \text {   Simplify   algebraically.   } \\ = \pi \left[ 8 x - 3 x ^ {2} - \frac {x ^ {3}}{3} - \frac {x ^ {5}}{5} \right] _ {- 2} ^ {1} = \frac {1 1 7 \pi}{5}. & \text {   Integrate.   } \end{array}
$$

To find the volume of a solid formed by revolving a region about the y-axis, we use the same procedure as in Example 9, but integrate with respect to y instead of x. In this situation, the line segment sweeping out a typical washer is perpendicular to the y-axis (the axis of revolution), and the outer and inner radii of the washer are functions of y. 

**EXAMPLE 10** The region bounded by the parabola $y = x^{2}$ and the line y = 2x in the first quadrant is revolved about the y-axis to generate a solid. Find the volume of the solid. 

**Solution** First we sketch the region and draw a line segment across it perpendicular to the axis of revolution (the y-axis). See Figure 6.15a. 

The radii of the washer swept out by the line segment are $R(y) = \sqrt{y}$ , $r(y) = y / 2$ (Figure 6.15). 

The line and parabola intersect at $y = 0$ and $y = 4$ , so the limits of integration are $c = 0$ and $d = 4$ . We integrate to find the volume: 

$$
\begin{array}{l} V = \int_ {c} ^ {d} \pi \left(\left[ R (y) \right] ^ {2} - \left[ r (y) \right] ^ {2}\right) d y \\ = \int_ {0} ^ {4} \pi \left(\left[ \sqrt {y} \right] ^ {2} - \left[ \frac {y}{2} \right] ^ {2}\right) d y \\ = \pi \int_ {0} ^ {4} \left(y - \frac {y ^ {2}}{4}\right) d y = \pi \left[ \frac {y ^ {2}}{2} - \frac {y ^ {3}}{1 2} \right] _ {0} ^ {4} = \frac {8}{3} \pi . \end{array}
$$

Rotation around y-axis 

FIGURE 6.15 (a) The region being rotated about the y-axis, the washer radii, and limits of integration in Example 10. (b) The washer swept out by the line segment in part (a). 

Substitute for radii and limits of integration. 

## EXERCISES

## 6.1

## Volumes by Slicing

Find the volumes of the solids in Exercises 1–10. 

1. The solid lies between planes perpendicular to the $x$ -axis at $x = 0$ and $x = 4$ . The cross-sections perpendicular to the axis on the interval $0 \leq x \leq 4$ are squares whose diagonals run from the parabola $y = -\sqrt{x}$ to the parabola $y = \sqrt{x}$ . 

2. The solid lies between planes perpendicular to the x-axis at x = -1 and x = 1. The cross-sections perpendicular to the x-axis are circular disks whose diameters run from the parabola $y = x^{2}$ to the parabola $y = 2 - x^{2}$ . 

![[1366aab767af075b33e8ed3b90bb11ee9ba0e8f5d973cbbcc7b9d4b14d93d1e8.jpg|image]]


3. The solid lies between planes perpendicular to the x-axis at x = -1 and x = 1. The cross-sections perpendicular to the x-axis between these planes are squares whose bases run from the semicircle $y = -\sqrt{1 - x^{2}}$ to the semicircle $y = \sqrt{1 - x^{2}}$ . 

4. The solid lies between planes perpendicular to the $x$ -axis at $x = -1$ and $x = 1$ . The cross-sections perpendicular to the $x$ -axis between these planes are squares whose diagonals run from the semicircle $y = -\sqrt{1 - x^2}$ to the semicircle $y = \sqrt{1 - x^2}$ . 

5. The base of a solid is the region between the curve $y = 2\sqrt{\sin x}$ and the interval $[0, \pi]$ on the $x$ -axis. The cross-sections perpendicular to the $x$ -axis are 

a. equilateral triangles with bases running from the x-axis to the curve as shown in the accompanying figure. 

![[8f3cf6623e659540558d33a8ceaffbd7295a64a4300d04185a0df799443b709f.jpg|image]]


b. squares with bases running from the x-axis to the curve. 

6. The solid lies between planes perpendicular to the x-axis at $x = -\pi/3$ and $x = \pi/3$ . The cross-sections perpendicular to the x-axis are 

a. circular disks with diameters running from the curve $y = \tan x$ to the curve $y = \sec x$ . 

b. squares whose bases run from the curve $y = \tan x$ to the curve $y = \sec x$ . 

7. The base of a solid is the region bounded by the graphs of y = 3x, y = 6, and x = 0. The cross-sections perpendicular to the x-axis are 

a. rectangles of height 10. 

b. rectangles of perimeter 20. 

8. The base of a solid is the region bounded by the graphs of $y = \sqrt{x}$ and $y = x / 2$ . The cross-sections perpendicular to the $x$ -axis are a. isosceles triangles of height 6. 

b. semicircles with diameters running across the base of the solid. 

9. The solid lies between planes perpendicular to the y-axis at y = 0 and y = 2. The cross-sections perpendicular to the y-axis are circular disks with diameters running from the y-axis to the parabola $x = \sqrt{5}y^{2}$ . 

10. The base of the solid is the disk $x^{2} + y^{2} \leq 1$ . The cross-sections by planes perpendicular to the $y$ -axis between $y = -1$ and $y = 1$ are isosceles right triangles with one leg in the disk. 

![[38cc9a7690e80562b48f6bb89f3bd9a9e373641897713d918ec318581a82fb84.jpg|image]]


11. Find the volume of the given right tetrahedron. (Hint: Consider slices perpendicular to one of the labeled edges.) 

![[d9fbda56f3182fbadd6331b7ad3d60d8dd100e58ca3174558668a5f423762977.jpg|image]]


12. Find the volume of the given pyramid, which has a square base of area 9 and height 5. 

![[3bdc31eacc644fa3fa90e0c2f4ebaa90583ba92de486729104589905415cf44e.jpg|image]]


13. A twisted solid A square of side length s lies in a plane perpendicular to a line L. One vertex of the square lies on L. As this square moves a distance h along L, the square turns one revolution about L to generate a corkscrew-like column with square cross-sections. 

a. Find the volume of the column. 

b. What will the volume be if the square turns twice instead of once? Give reasons for your answer. 

14. Cavalieri's principle A solid lies between planes perpendicular to the $x$ -axis at $x = 0$ and $x = 12$ . The cross-sections by planes perpendicular to the $x$ -axis are circular disks whose diameters run from the line $y = x / 2$ to the line $y = x$ as shown in the accompanying figure. Explain why the solid has the same volume as a right circular cone with base radius 3 and height 12. 

![[aa57764a4e7b4d6678f6fffa84023275b2881f2d41a86e0a84c6408033f7e23f.jpg|image]]


15. Intersection of two half-cylinders Two half-cylinders of diameter 2 meet at a right angle in the accompanying figure. Find the volume of the solid region common to both half-cylinders. (Hint: Consider slices parallel to the base of the solid.) 

![[8fa97ca1a2e1e4c30a0aa010cc8cd14ed2f55dda6ed133fb151f5ab1bc2e01d2.jpg|image]]


16. Gasoline in a tank A gasoline tank is in the shape of a right circular cylinder (lying on its side) of length 3 m and radius 1 m. Set up an integral that represents the volume of the gas in the tank if it is filled to a depth of 1.5 m. You will learn how to compute this integral in Chapter 8 (or you may use geometry to find its value). 

![[08a1263c26ace6588cb5af62509ca87aa7459991fa0c0302671b9c37b3f96a90.jpg|image]]


Volumes by the Disk Method 

In Exercises 17–20, find the volume of the solid generated by revolving the shaded region about the given axis. 

17. About the $x$ -axis 

![[90f6f12f33f7073c62f31a2670a19f8a415aef1ff19a4e9d332c5c7c6c3ab60e.jpg|image]]


18. About the $y$ -axis 

19. About the y-axis 

![[6949d041c727da29a4dd16501d4408139ab5b02741a3bb0f09e74252a076ad7f.jpg|image]]


![[52fb725406f8dc1eabe3e92fccf54b75e42b8afe9afe1095f50111e2693806f1.jpg|image]]


20. About the x-axis 

![[16824b665ade7146a2d4e44208586f7570a8b31ab2df377bbffe0bed6103d045.jpg|image]]


Find the volumes of the solids generated by revolving the regions bounded by the lines and curves in Exercises 21–30 about the x-axis. 

21. $y = x^{2}$ , $y = 0$ , $x = 2$ 22. $y = x^{3}$ , $y = 0$ , $x = 2$ 

$$
y = \sqrt {9 - x ^ {2}}, y = 0 \quad 2 4. y = x - x ^ {2}, y = 0
$$

25. $y = \sqrt{\cos x}, 0 \leq x \leq \pi / 2, y = 0, x = 0$ 

26. $y = \sec x,\quad y = 0,\quad x = -\pi/4,\quad x = \pi/4$ 

27. $y = e^{-x}$ , $y = 0$ , $x = 0$ , $x = 1$ 

28. The region between the curve $y = \sqrt{\cot x}$ and the x-axis from $x = \pi/6$ to $x = \pi/2$ 

29. The region between the curve $y = 1 / (2\sqrt{x})$ and the $x$ -axis from $x = 1/4$ to $x = 4$ 

$$
\mathbf {3 0 .} y = e ^ {x - 1}, \quad y = 0, \quad x = 1, \quad x = 3
$$

In Exercises 31 and 32, find the volume of the solid generated by revolving the region about the given line. 

31. The region in the first quadrant bounded above by the line $y = \sqrt{2}$ , below by the curve $y = \sec x \tan x$ , and on the left by the $y$ -axis, about the line $y = \sqrt{2}$ 

32. The region in the first quadrant bounded above by the line y = 2, below by the curve $y = 2 \sin x$ , $0 \leq x \leq \pi/2$ , and on the left by the y-axis, about the line y = 2 

Find the volumes of the solids generated by revolving the regions bounded by the lines and curves in Exercises 33–38 about the y-axis. 

33. The region enclosed by $x = \sqrt{5}y^{2}$ , x = 0, y = -1, y = 1 

34. The region enclosed by $x = y^{3/2}$ , $x = 0$ , $y = 2$ 

35. The region enclosed by $x = \sqrt{2 \sin 2y}$ , $0 \leq y \leq \pi/2$ , x = 0 

36. The region enclosed by $x = \sqrt{\cos(\pi y/4)}$ , $-2 \leq y \leq 0$ , x = 0 

37. $x = 2/\sqrt{y + 1}$ , x = 0, y = 0, y = 3 

$$
3 8. x = \sqrt {2 y} / (y ^ {2} + 1), x = 0, y = 1
$$

Volumes by the Washer Method 

Find the volumes of the solids generated by revolving the shaded regions in Exercises 39 and 40 about the indicated axes. 

39. The $x$ -axis 

![[65d46897b309a8649fb9d5a7b2fa25e9f84d630f74a9aafe62b2a7bd7ed263b5.jpg|image]]


40. The y-axis 

![[03000ae93191bd5b004c3f7c8f32548ba846488317636ef27db88fbc0a0e48bf.jpg|image]]


Find the volumes of the solids generated by revolving the regions bounded by the lines and curves in Exercises 41–46 about the x-axis. 

$$
4 1. y = x, \quad y = 1, \quad x = 0
$$

$$
4 2. y = 2 \sqrt {x}, y = 2, x = 0
$$

$$
4 3. y = x ^ {2} + 1, \quad y = x + 3
$$

$$
4 4. y = 4 - x ^ {2}, \quad y = 2 - x
$$

$$
4 5. y = \sec x, \quad y = \sqrt {2}, - \pi / 4 \leq x \leq \pi / 4
$$

$$
4 6. y = \sec x, \quad y = \tan x, \quad x = 0, \quad x = 1
$$

In Exercises 47–50, find the volume of the solid generated by revolving each region about the y-axis. 

47. The region enclosed by the triangle with vertices $(1, 0)$ , $(2, 1)$ , and $(1, 1)$ 

48. The region enclosed by the triangle with vertices $(0,1)$ , $(1,0)$ , and $(1,1)$ 

49. The region in the first quadrant bounded above by the parabola $y = x^{2}$ , below by the x-axis, and on the right by the line x = 2 

50. The region in the first quadrant bounded on the left by the circle $x^{2} + y^{2} = 3$ , on the right by the line $x = \sqrt{3}$ , and above by the line $y = \sqrt{3}$ 

In Exercises 51 and 52, find the volume of the solid generated by revolving each region about the given axis. 

51. The region in the first quadrant bounded above by the curve $y = x^2$ , below by the $x$ -axis, and on the right by the line $x = 1$ , about the line $x = -1$ 

52. The region in the second quadrant bounded above by the curve $y = -x^{3}$ , below by the x-axis, and on the left by the line x = -1, about the line x = -2 

## Volumes of Solids of Revolution

53. Find the volume of the solid generated by revolving the region bounded by $y = \sqrt{x}$ and the lines $y = 2$ and $x = 0$ about a. the $x$ -axis. b. the $y$ -axis. c. the line $y = 2$ . d. the line $x = 4$ . 

54. Find the volume of the solid generated by revolving the triangular region bounded by the lines y = 2x, y = 0, and x = 1 about
a. the line x = 1.
b. the line x = 2. 

55. Find the volume of the solid generated by revolving the region bounded by the parabola $y = x^2$ and the line $y = 1$ about
a. the line $y = 1$ .
b. the line $y = 2$ .
c. the line $y = -1$ . 

56. By integration, find the volume of the solid generated by revolving the triangular region with vertices $(0,0)$ , $(b,0)$ , $(0,h)$ about a. the x-axis.
b. the y-axis. 

## Theory and Applications

57. The volume of a torus The disk $x^{2} + y^{2} \leq a^{2}$ is revolved about the line $x = b (b > a)$ to generate a solid shaped like a doughnut and called a torus. Find its volume. (Hint: $\int_{-a}^{a} \sqrt{a^2 - y^2} dy = \pi a^2 / 2$ , since it is the area of a semicircle of radius $a$ .) 

58. Volume of a bowl A bowl has a shape that can be generated by revolving the graph of $y = x^{2}/2$ between y = 0 and y = 5 about the y-axis. 

a. Find the volume of the bowl. 

b. Related rates If we fill the bowl with water at a constant rate of 3 cubic units per second, how fast will the water level in the bowl be rising when the water is 4 units deep? 

## 59. Volume of a bowl

a. A hemispherical bowl of radius a contains water to a depth h. Find the volume of water in the bowl. 

b. Related rates Water runs into a sunken concrete hemispherical bowl of radius 5 m at the rate of $0.2 \, m^{3}/s$ . How fast is the water level in the bowl rising when the water is 4 m deep? 

60. Explain how you could estimate the volume of a solid of revolution by measuring the shadow cast on a table parallel to its axis of revolution by a light shining directly above it. 

61. Volume of a hemisphere Derive the formula $V = (2/3)\pi R^{3}$ for the volume of a hemisphere of radius R by comparing its cross-sections with the cross-sections of a solid right circular cylinder of radius R and height R from which a solid right circular cone of base radius R and height R has been removed, as suggested by the accompanying figure. 

![[b1f7a4bfa721c3d52c1af09cc3d3c41f4c37e786ec13c8bd5b4ef8065362f8af.jpg|image]]


62. Designing a plumb bob Having been asked to design a brass plumb bob that will weigh in the neighborhood of $190\mathrm{g}$ , you decide to shape it like the solid of revolution shown here. Find the plumb bob's volume. If you specify a brass that weighs $8.5\mathrm{g/cm}^3$ , how much will the plumb bob weigh (to the nearest gram)? 

![[1fde1f404ba8c171c34d8f1083eff83118a6372224426255438afcb240ccc834.jpg|image]]


63. Designing a wok You are designing a wok frying pan that will be shaped like a spherical bowl with handles. A bit of experimentation at home persuades you that you can get one that holds about 3 L if you make it 9 cm deep and give the sphere a radius of 16 cm. To be sure, you picture the wok as a solid of revolution, as shown here, and calculate its volume with an integral. To the nearest cubic centimeter, what volume do you really get? (1 L = 1000 cm $^{3}$ ) 

![[2d53f19a8386ca5c826c87651bafc2b4b48cd6b50b47ac94c28fb0f287def653.jpg|image]]


64. Max-min The arch $y = \sin x, 0 \leq x \leq \pi$ , is revolved about the line $y = c, 0 \leq c \leq 1$ , to generate the solid in the accompanying figure. 

a. Find the value of $c$ that minimizes the volume of the solid. What is the minimum volume? 

b. What value of $c$ in [0, 1] maximizes the volume of the solid? 

T c. Graph the solid's volume as a function of $c$ , first for $0 \leq c \leq 1$ and then on a larger domain. What happens to the volume of the solid as $c$ moves away from [0, 1]? Does this make sense physically? Give reasons for your answers. 

![[faed801bb47a711c74d4cf4dc2e7e272422cf30d7be3915d455c41ee2b85e02d.jpg|image]]


65. Consider the region R bounded by the graphs of $y = f(x) > 0$ , x = a > 0, x = b > a, and y = 0 (see accompanying figure). If the volume of the solid formed by revolving R about the x-axis is $4\pi$ , and the volume of the solid formed by revolving R about the line y = -1 is $8\pi$ , find the area of R. 

![[55cf453a4f87f349290bd56bc4a0a6abdd0e6cd00628619a4577a6b3bf5f30ca.jpg|image]]


66. Consider the region R given in Exercise 65. If the volume of the solid formed by revolving R around the x-axis is $6\pi$ , and the volume of the solid formed by revolving R around the line y = -2 is $10\pi$ , find the area of R. 

## 6.2 Volumes Using Cylindrical Shells

In Section 6.1 we defined the volume of a solid to be the definite integral $V = \int_{a}^{b} A(x) \, dx$ , where $A(x)$ is an integrable cross-sectional area of the solid from x = a to x = b. The area $A(x)$ was obtained by slicing through the solid with a plane perpendicular to the x-axis. However, this method of slicing is sometimes awkward to apply, as we will illustrate in our first example. To overcome this difficulty, we use the same integral definition for volume, but obtain the area by slicing through the solid in a different way. 

## Slicing with Cylinders

Suppose we slice through the solid using circular cylinders of increasing radii, like cookie cutters. We slice straight down through the solid so that the axis of each cylinder is parallel to the y-axis. The vertical axis of each cylinder is always the same line, but the radii of the cylinders increase with each slice. In this way the solid is sliced up into thin cylindrical shells of constant thickness that grow outward from their common axis, like circular tree rings. Unrolling a cylindrical shell shows that its volume is approximately that of a rectangular slab with area $A(x)$ and thickness $\Delta x$ . This slab interpretation allows us to apply the same integral definition for volume as before. The following example provides some insight. 

**EXAMPLE 1** The region enclosed by the x-axis and the parabola $y = f(x) = 3x - x^{2}$ is revolved about the vertical line x = -1 to generate a solid (see Figure 6.16). Find the volume of the solid. 

**Solution** Using the washer method from Section 6.1 would be awkward here because we would need to express the x-values of the left and right sides of the parabola in Figure 6.16a in terms of y. This is because these x-values, which describe the inner and outer radii of a typical washer, are solutions to the equation $y = 3x - x^{2}$ , and this gives a complicated formula for x. Therefore, instead of rotating a horizontal strip of thickness $\Delta y$ , we rotate a vertical strip of thickness $\Delta x$ . This rotation produces a cylindrical shell of height $y_{k}$ above a point $x_{k}$ within the base of the vertical strip and of thickness $\Delta x$ . An example of a cylindrical shell is shown as the orange-shaded region in Figure 6.17. We can think of the cylindrical shell shown in the figure as approximating a slice of the solid obtained by cutting straight down through it, parallel to the axis of revolution, all the way around. We start by cutting close to the inside hole and then cut another cylindrical slice around the enlarged hole, then another, and so on, obtaining n cylinders. The radii of the cylinders gradually increase, and the heights of the cylinders follow the contour of the parabola: shorter to taller, then back to shorter (Figure 6.16a). The sum of the volumes of the shells is a Riemann sum that approximates the volume of the entire solid. 

![[164fa84f4ac3291941f4c39aa1b5f5917b3f7c8c0498d41e2f7cfc3945b41a06.jpg|image]]



FIGURE 6.17 A cylindrical shell of height $y_{k}$ obtained by rotating a vertical strip of thickness $\Delta x_{k}$ about the line x = -1. The outer radius of the cylinder occurs at $x_{k}$ , where the height of the parabola is $y_{k} = 3x_{k} - x_{k}^{2}$ (Example 1).


![[abab334331f238fb6978ee5c36ca54350723be5d5f8d4adc30cb636a3c17bca0.jpg|image]]



FIGURE 6.16 (a) The graph of the region in Example 1, before revolution. (b) The solid formed when the region in part (a) is revolved about the axis of revolution $x = -1$ .


Each shell sits over a subinterval $[x_{k-1}, x_{k}]$ in the x-axis. The thickness of the shell is $\Delta x_{k} = x_{k} - x_{k-1}$ . Because the parabola is rotated around the line x = -1, the outer radius of the shell is $1 + x_{k}$ . The height of the shell is the height of the parabola at some point in the interval $[x_{k-1}, x_{k}]$ , or approximately $y_{k} = f(x_{k}) = 3x_{k} - x_{k}^{2}$ . If we unroll this cylinder and flatten it out, it becomes (approximately) a rectangular slab with thickness $\Delta x_{k}$ (see Figure 6.18). The height of the rectangular slab is approximately $y_{k} = 3x_{k} - x_{k}^{2}$ , and its length is the circumference of the shell, which is approximately $2\pi \cdot radius = 2\pi(1 + x_{k})$ . Hence the volume of the shell is approximately the volume of the rectangular slab, which is 

$$
\begin{array}{r l} \Delta V _ {k} & = \text { circumference } \times \text { height } \times \text { thickness } \\ & = 2 \pi (1 + x _ {k}) \cdot (3 x _ {k} - x _ {k} ^ {2}) \cdot \Delta x _ {k}. \end{array}
$$

![[9d44e76914de507048cfe1d413865ac9d4cac79067418348b20118019bce9907.jpg|image]]



FIGURE 6.18 Cutting and unrolling a cylindrical shell gives a nearly rectangular solid (Example 1).


Summing together the volumes $\Delta V_{k}$ of the individual cylindrical shells over the interval $[0,3]$ gives the Riemann sum 

$$
\sum_ {k = 1} ^ {n} \Delta V _ {k} = \sum_ {k = 1} ^ {n} 2 \pi (x _ {k} + 1) (3 x _ {k} - x _ {k} ^ {2}) \Delta x _ {k}.
$$

Taking the limit as the thickness $\Delta x_{k}\rightarrow 0$ and $n\to \infty$ gives the volume integral 

$$
\begin{array}{l}V = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} 2 \pi (x _ {k} + 1) (3 x _ {k} - x _ {k} ^ {2}) \Delta x _ {k}\\= \int_ {0} ^ {3} 2 \pi (x + 1) (3 x - x ^ {2}) d x\\= \int_ {0} ^ {3} 2 \pi (3 x ^ {2} + 3 x - x ^ {3} - x ^ {2}) d x\\= 2 \pi \int_ {0} ^ {3} (2 x ^ {2} + 3 x - x ^ {3}) d x\\= 2 \pi \left[ \frac {2}{3} x ^ {3} + \frac {3}{2} x ^ {2} - \frac {1}{4} x ^ {4} \right] _ {0} ^ {3} = \frac {4 5 \pi}{2}.\end{array}
$$

We now generalize this procedure to a broader class of solids. 

## The Shell Method

Suppose that the region bounded by the graph of a nonnegative continuous function $y = f(x)$ and the x-axis over the finite closed interval $[a, b]$ lies to the right of the vertical line x = L (see Figure 6.19a). We assume $a \geq L$ , so the vertical line may touch the region but cannot pass through it. We generate a solid S by rotating this region about the vertical line L. 

Let P be a partition of the interval $[a, b]$ by the points $a = x_{0} < x_{1} < \cdots < x_{n} = b$ . As usual, we choose a point $c_{k}$ in each subinterval $[x_{k-1}, x_{k}]$ . In Example 1 we chose $c_{k}$ to be the endpoint $x_{k}$ , but now it will be more convenient to let $c_{k}$ be the midpoint of the subinterval $[x_{k-1}, x_{k}]$ . We approximate the region in Figure 6.19a with rectangles based on this partition of $[a, b]$ . A typical approximating rectangle has height $f(c_{k})$ and width 

![[a5adedc28df58731ffdcc891c5ef298c702920c3b4fc87e7e6be4c12cdae0e2b.jpg|image]]



FIGURE 6.19 When the region shown in (a) is revolved about the vertical line x = L, a solid is produced which can be sliced into cylindrical shells. A typical shell is shown in (b).


![[dbf953ca1c98ad3b0c2d461ecabb71d1c316d3b6e3c6cfd9b38abe37f1549ccf.jpg|image]]


The volume of a cylindrical shell of height h with inner radius r and outer radius R is 

$$
\pi R ^ {2} h - \pi r ^ {2} h = 2 \pi \left(\frac {R + r}{2}\right) (h) (R - r).
$$

$\Delta x_{k}=x_{k}-x_{k-1}$ . If this rectangle is rotated about the vertical line x=L, then a shell is swept out, as in Figure 6.19b. A formula from geometry tells us that the volume of the shell swept out by the rectangle is 

$$
\begin{array}{l} \Delta V _ {k} = 2 \pi \times \text { average   shell   radius } \times \text { shell   height } \times \text { thickness } \\ = 2 \pi \cdot (c _ {k} - L) \cdot f (c _ {k}) \cdot \Delta x _ {k}. \quad R = x _ {k} - L \text { and } r = x _ {k - 1} - L \end{array}
$$

We approximate the volume of the solid S by summing the volumes of the shells swept out by the n rectangles: 

$$
V \approx \sum_ {k = 1} ^ {n} \Delta V _ {k}.
$$

The limit of this Riemann sum as each $\Delta x_{k}\to 0$ and $n\rightarrow \infty$ gives the volume of the solid as a definite integral: 

$$
\begin{array}{r l} V = \lim _ {n \to \infty} \sum_ {k = 1} ^ {n} \Delta V _ {k} & = \int_ {a} ^ {b} 2 \pi (\text { shell   radius }) (\text { shell   height }) d x \\ & = \int_ {a} ^ {b} 2 \pi (x - L) f (x) d x. \end{array}
$$

We refer to the variable of integration, here x, as the thickness variable. To emphasize the process of the shell method, we state the general formula in terms of the shell radius and shell height. This will allow for rotations about a horizontal line y = L as well. 

## Shell Formula for Revolution About a Vertical Line

The volume of the solid generated by revolving the region between the x-axis and the graph of a continuous function $y = f(x) \geq 0$ , $L \leq a \leq x \leq b$ , about a vertical line x = L is 

$$
V = \int_ {a} ^ {b} 2 \pi \binom{\text { shell }}{\text { radius }} \binom{\text { shell }}{\text { height }} d x.
$$

**EXAMPLE 2** The region bounded by the curve $y = \sqrt{x}$ , the x-axis, and the line x = 4 is revolved about the y-axis to generate a solid. Find the volume of the solid. 

**Solution** Sketch the region and draw a line segment across it parallel to the axis of revolution (Figure 6.20a). Label the segment's height (shell height) and distance from the axis of revolution (shell radius). (We drew the shell in Figure 6.20b, but you need not do that.) 


FIGURE 6.20 (a) The region, shell dimensions, and interval of integration in Example 2. (b) The shell swept out by the vertical segment in part (a) with a width $\Delta x$ .


The shell thickness variable is $x$ , so the limits of integration for the shell formula are $a = 0$ and $b = 4$ (Figure 6.20). The volume is 

$$
\begin{array}{l} V = \int_ {a} ^ {b} 2 \pi \binom {\text { shell }} {\text { radius }} \binom {\text { shell }} {\text { height }} d x \\ = \int_ {0} ^ {4} 2 \pi (x) (\sqrt {x}) d x \\ = 2 \pi \int_ {0} ^ {4} x ^ {3 / 2} d x = 2 \pi \left[ \frac {2}{5} x ^ {5 / 2} \right] _ {0} ^ {4} = \frac {1 2 8 \pi}{5}. \end{array}
$$

So far, we have used vertical axes of revolution. For horizontal axes, we replace the $x$ 's with $y$ 's. 

**EXAMPLE 3** The region bounded by the curve $y = \sqrt{x}$ , the x-axis, and the line x = 4 is revolved about the x-axis to generate a solid. Find the volume of the solid by the shell method. 

**Solution** This is the solid whose volume was found by the disk method in Example 3 of Section 6.1. Now we find its volume by the shell method. First, sketch the region and draw a line segment across it parallel to the axis of revolution (Figure 6.21a). Label the segment's length (shell height) and distance from the axis of revolution (shell radius). (We drew the shell in Figure 6.21b, but you need not do that.) 

In this case, the shell thickness variable is y, so the limits of integration for the shell formula method are a = 0 and b = 2 (along the y-axis in Figure 6.21). The volume of the solid is 

$$
\begin{array}{l} V = \int_ {a} ^ {b} 2 \pi \binom {\text { shell }} {\text { radius }} \binom {\text { shell }} {\text { height }} d y \\ = \int_ {0} ^ {2} 2 \pi (y) (4 - y ^ {2}) d y \\ = 2 \pi \int_ {0} ^ {2} (4 y - y ^ {3}) d y \\ = 2 \pi \left[ 2 y ^ {2} - \frac {y ^ {4}}{4} \right] _ {0} ^ {2} = 8 \pi . \end{array}
$$

![[d723dec346656c96c4d303aee42c4774942d25ee93da41a9fb765932b08aaf10.jpg|image]]


![[81ee7b87f03d4dab62615847d7055ee81f112827d9bacde259daa8112e8167a8.jpg|image]]



FIGURE 6.21 (a) The region, shell dimensions, and interval of integration in Example 3. (b) The shell swept out by the horizontal segment in part (a) with a width $\Delta y$ .


## Summary of the Shell Method

Regardless of the position of the axis of revolution (horizontal or vertical), the steps for implementing the shell method are these. 

1. Draw the region and sketch a line segment across it parallel to the axis of revolution. Label the segment's height or length (shell height) and distance from the axis of revolution (shell radius). 

2. Find the limits of integration for the thickness variable. 

3. Integrate the product $2\pi$ (shell radius) (shell height) with respect to the thickness variable (x or y) to find the volume. 

The shell method gives the same answer as the washer method when both are used to calculate the volume of a region. We do not prove that result here, but it is illustrated in Exercises 37 and 38. (Exercise 45 outlines a proof.) Both volume formulas are actually special cases of a general volume formula we will look at when studying double and triple integrals in Chapter 14. That general formula also allows for computing volumes of solids other than those swept out by regions of revolution. 

## EXERCISES 6.2

## Revolution About the Axes

In Exercises 1–6, use the shell method to find the volumes of the solids generated by revolving the shaded region about the indicated axis. 


1.


![[bcb81bcd02170025c12efe89f1d3b3e750469b00564e8fbb8609232da57e1781.jpg|image]]



2.


![[9212953a06b6dbc9d53367ab5f8fad4785e11cc789543574a941d34f6cd9341f.jpg|image]]



3.



4.


![[0733e927bdb28a90c1304fef4720c9e4324a171370614d40999eeda3c9488f39.jpg|image]]


![[1313baedc4c7127476db68b5360e6f76dfc243b28234ff3f97977b03ba70aa50.jpg|image]]



5. The y-axis


![[c23ede21e320ba6e354bbc64e7157d04be15dfd9ad6d9b9ba989e8b56f635cd5.jpg|image]]



6. The y-axis


![[a5b96df8dd0a3123a071bf719ae765b4ecc1eaf78dfc5aae287df03757d4fa6d.jpg|image]]



Revolution About the y-Axis


Use the shell method to find the volumes of the solids generated by revolving the regions bounded by the curves and lines in Exercises 7–12 about the y-axis. 

$$
7. y = x, \quad y = - x / 2, \quad x = 2
$$

$$
\mathbf {8 .} y = 2 x, \quad y = x / 2, \quad x = 1
$$

$$
9. y = x ^ {2}, \quad y = 2 - x, \quad x = 0, \text {   for   } x \geq 0
$$

$$
\mathbf {1 0 .} y = 2 - x ^ {2}, \quad y = x ^ {2}, \quad x = 0
$$

$$
\mathbf {1 1 .} y = 2 x - 1, \quad y = \sqrt {x}, \quad x = 0
$$

$$
\mathbf {1 2 .} y = 3 / (2 \sqrt {x}), y = 0, x = 1, x = 4
$$

13. Let $f(x) = \left\{ \begin{array}{ll} (\sin x) / x, & 0 < x \leq \pi \\ 1, & x = 0. \end{array} \right.$ 

a. Show that $x f(x) = \sin x, 0 \leq x \leq \pi.$ 

b. Find the volume of the solid generated by revolving the shaded region about the y-axis in the accompanying figure. 

![[7e83649180334043c4bb213037d21ea96758ddb59d85534207d73580e23ef10c.jpg|image]]


14. Let $g(x) = \left\{ \begin{array}{ll} (\tan x)^2 / x, & 0 < x \leq \pi / 4 \\ 0, & x = 0. \end{array} \right.$ 

a. Show that $x g(x) = (\tan x)^{2}, 0 \leq x \leq \pi/4.$ 

b. Find the volume of the solid generated by revolving the shaded region about the y-axis in the accompanying figure. 

![[d35e4710189da785956e9ce1b1d4586413d3f0279cc6f2842b7180486ca629df.jpg|image]]


Revolution About the x-Axis 

Use the shell method to find the volumes of the solids generated by revolving the regions bounded by the curves and lines in Exercises 15–22 about the x-axis. 

15. $x = \sqrt{y}, x = -y, y = 2$ 16. $x = y^2, x = -y, y = 2, y \geq 0$ 17. $x = 2y - y^2, x = 0$ 18. $x = 2y - y^2, x = y$ 19. $y = |x|, y = 1$ 20. $y = x, y = 2x, y = 2$ 21. $y = \sqrt{x}, y = 0, y = x - 2$ 22. $y = \sqrt{x}, y = 0, y = 2 - x$ 

Revolution About Horizontal and Vertical Lines 

In Exercises 23–26, use the shell method to find the volumes of the solids generated by revolving the regions bounded by the given curves about the given lines. 

23. $y = 3x, y = 0, x = 2$ a. The y-axis b. The line $x = 4$ c. The line $x = -1$ d. The x-axis e. The line $y = 7$ f. The line $y = -2$ 

24. $y = x^3, y = 8, x = 0$ a. The y-axis b. The line $x = 3$ c. The line $x = -2$ d. The x-axis e. The line $y = 8$ f. The line $y = -1$ 

25. $y = x + 2, y = x^2$ a. The line $x = 2$ b. The line $x = -1$ c. The $x$ -axis d. The line $y = 4$ 

26. $y = x^4, y = 4 - 3x^2$ a. The line $x = 1$ b. The $x$ -axis 

In Exercises 27 and 28, use the shell method to find the volumes of the solids generated by revolving the shaded regions about the indicated axes. 

27. a. The $x$ -axis b. The line $y = 1$ c. The line $y = 8 / 5$ d. The line $y = -2 / 5$ 

![[a43e9eaed230f72c296919289527645537dbb6459342dec0aa68d537c35669d1.jpg|image]]


28. a. The $x$ -axis b. The line $y = 2$ c. The line $y = 5$ d. The line $y = -5 / 8$ 

![[d7f6fff42a76702447367acb7d82e64fa9e7884ab73f504ed67a3d36c679bcf8.jpg|image]]


Choosing the Washer Method or the Shell Method 

For some regions, both the washer and shell methods work well for the solid generated by revolving the region about the coordinate axes, but this is not always the case. When a region is revolved about the y-axis, for example, and washers are used, we must integrate with respect to y. It may not be possible, however, to express the integrand in terms of y. In such a case, the shell method allows us to integrate with respect to x instead. Exercises 29 and 30 provide some insight. 

29. Compute the volume of the solid generated by revolving the region bounded by y = x and $y = x^{2}$ about each coordinate axis using 

a. the shell method. 

b. the washer method. 

30. Compute the volume of the solid generated by revolving the triangular region bounded by the lines $2y = x + 4$ , $y = x$ , and $x = 0$ about
a. the $x$ -axis using the washer method.
b. the $y$ -axis using the shell method.
c. the line $x = 4$ using the shell method.
d. the line $y = 8$ using the washer method. 

In Exercises 31–36, find the volumes of the solids generated by revolving the regions about the given axes. If you think it would be better to use washers in any given instance, feel free to do so. 

31. The triangle with vertices $(1,1)$ , $(1,2)$ , and $(2,2)$ about a. the $x$ -axis b. the $y$ -axis c. the line $x = 10 / 3$ d. the line $y = 1$ 

32. The region bounded by $y = \sqrt{x}, y = 2, x = 0$ about
    a. the $x$ -axis
    b. the $y$ -axis
    c. the line $x = 4$ d. the line $y = 2$ 

33. The region in the first quadrant bounded by the curve $x = y - y^3$ and the $y$ -axis about
a. the $x$ -axis    b. the line $y = 1$ 

34. The region in the first quadrant bounded by $x = y - y^3$ , $x = 1$ , and $y = 1$ about
a. the $x$ -axis b. the $y$ -axis
c. the line $x = 1$ d. the line $y = 1$ 

35. The region bounded by $y = \sqrt{x}$ and $y = x^2 / 8$ about a. the $x$ -axis b. the $y$ -axis 

36. The region bounded by $y = 2x - x^2$ and $y = x$ about a. the $y$ -axis b. the line $x = 1$ 

37. The region in the first quadrant that is bounded above by the curve $y = 1 / x^{1 / 4}$ , on the left by the line $x = 1 / 16$ , and below by the line $y = 1$ is revolved about the $x$ -axis to generate a solid. Find the volume of the solid by
a. the washer method. b. the shell method. 

38. The region in the first quadrant that is bounded above by the curve $y = 1 / \sqrt{x}$ , on the left by the line $x = 1 / 4$ , and below by the line $y = 1$ is revolved about the $y$ -axis to generate a solid. Find the volume of the solid by 

a. the washer method.
b. the shell method. 

## Theory and Examples

39. The region shown here is to be revolved about the x-axis to generate a solid. Which of the methods (disk, washer, shell) could you use to find the volume of the solid? How many integrals would be required in each case? Explain. 

![[7b5a24ddee3a553fae8c2dab3ae8240c361dc9fda20d5372f124b26d74adc6c1.jpg|image]]


40. The region shown here is to be revolved about the y-axis to generate a solid. Which of the methods (disk, washer, shell) could you use to find the volume of the solid? How many integrals would be required in each case? Give reasons for your answers. 

![[892da04ceb3824f24f8f906cfa18e938b2b74ae8552271bf9c75b2fec1bfac20.jpg|image]]


41. A bead is formed from a sphere of radius 5 by drilling through a diameter of the sphere with a drill bit of radius 3. 

a. Find the volume of the bead. 

b. Find the volume of the removed portion of the sphere. 

42. A Bundt cake, well known for having a ringed shape, is formed by revolving around the $y$ -axis the region bounded by the graph of $y = \sin (x^2 - 1)$ and the $x$ -axis over the interval $1 \leq x \leq \sqrt{1 + \pi}$ . Find the volume of the cake. 

43. Derive the formula for the volume of a right circular cone of height h and radius r using an appropriate solid of revolution. 

44. Derive the equation for the volume of a sphere of radius r using the shell method. 

45. Equivalence of the washer and shell methods for finding volume Let f be differentiable and increasing on the interval $a \leq x \leq b$ , with a > 0, and suppose that f has a differentiable inverse, $f^{-1}$ . Revolve about the y-axis the region bounded by the graph of f and the lines x = a and $y = f(b)$ to generate a solid. Then the values of the integrals given by the washer and shell methods for the volume are identical. 

$$
\int_ {f (a)} ^ {f (b)} \pi \left(\left(f ^ {- 1} (y)\right) ^ {2} - a ^ {2}\right) d y = \int_ {a} ^ {b} 2 \pi x (f (b) - f (x)) d x.
$$

To prove this equality, define 

$$
\begin{array}{l} W (t) = \int_ {f (a)} ^ {f (t)} \pi \big ((f ^ {- 1} (y)) ^ {2} - a ^ {2} \big) d y \\ S (t) = \int_ {a} ^ {t} 2 \pi x \big (f (t) - f (x) \big) d x. \end{array}
$$

Then show that the functions W and S agree at a point of $[a, b]$ and have identical derivatives on $[a, b]$ . As you saw in Section 4.8, Exercise 132, this will guarantee $W(t) = S(t)$ for all t in $[a, b]$ . In particular, $W(b) = S(b)$ . (Source: “Disks and Shells Revisited” by Walter Carlip, in American Mathematical Monthly, Feb. 1991, vol. 98, no. 2, pp. 154–156.) 

46. The region between the curve $y = \sec^{-1} x$ and the x-axis from x = 1 to x = 2 (shown here) is revolved about the y-axis to generate a solid. Find the volume of the solid. 

![[d8baf6eda07f557303383ce7df3e28a5b519c96b0db072a53da3ebcf9895878d.jpg|image]]


47. Find the volume of the solid generated by revolving the region enclosed by the graphs of $y = e^{-x^2}, y = 0, x = 0$ , and $x = 1$ about the $y$ -axis. 

48. Find the volume of the solid generated by revolving the region enclosed by the graphs of $y = e^{x/2}$ , y = 1, and $x = \ln 3$ about the x-axis. 

49. Consider the region R bounded by the graphs of $y = f(x) > 0$ , x = a > 0, and x = b > a. If the volume of the solid formed by revolving R about the y-axis is $2\pi$ , and the volume formed by revolving R about the line x = -2 is $10\pi$ , find the area of R. 

![[c110536b7e2828e9b48eaaf67220e009cdf73839218e7f2fe18d88741bde5a70.jpg|image]]



50. Consider the region R given in Exercise 49. If the area of region R is 1, and the volume of the solid formed by revolving R about the line x = -3 is $10\pi$ , find the volume of the solid formed by revolving R about the y-axis.


## 6.3 Arc Length

We know what is meant by the length of a straight-line segment, but without calculus, we have no precise definition of the length of a general winding curve. If the curve is the graph of a continuous function defined over an interval, then we can find the length of the curve using a procedure similar to that we used for defining the area between the curve and the x-axis. We divide the curve into many pieces, and we approximate each piece by a straight-line segment. The sum of the lengths of these segments is an approximation to the total curve length that we seek. The total length of the curve is the limiting value of these approximations as the number of segments goes to infinity. 

## Length of a Curve $y = f(x)$

Suppose the curve whose length we want to find is the graph of the function $y = f(x)$ from x = a to x = b. In order to derive an integral formula for the length of the curve, we assume that f has a continuous derivative at every point of $[a, b]$ . Such a function is called smooth, and its graph is a smooth curve because it does not have any breaks, corners, or cusps. 

We partition the interval $[a, b]$ into $n$ subintervals with 

$$
a = x _ {0} <   x _ {1} <   x _ {2} <   \dots <   x _ {n} = b.
$$

If $y_{k} = f(x_{k})$ , then the corresponding point $P_{k}(x_{k}, y_{k})$ lies on the curve. Next we connect successive points $P_{k-1}$ and $P_{k}$ with straight-line segments that, taken together, form a polygonal path whose length approximates the length of the curve (Figure 6.22). If we set $\Delta x_{k} = x_{k} - x_{k-1}$ and $\Delta y_{k} = y_{k} - y_{k-1}$ , then a representative line segment in the path has length 

$$
L _ {k} = \sqrt {(\Delta x _ {k}) ^ {2} + (\Delta y _ {k}) ^ {2}}
$$

(see Figure 6.23), so the length of the curve is approximated by the sum 

$$
\sum_ {k = 1} ^ {n} L _ {k} = \sum_ {k = 1} ^ {n} \sqrt {\left(\Delta x _ {k}\right) ^ {2} + \left(\Delta y _ {k}\right) ^ {2}}.\tag{1}
$$

We expect the approximation to improve as the partition of $[a, b]$ becomes finer. In order to evaluate this limit, we use the Mean Value Theorem, which tells us that there is a point $c_k$ , with $x_{k-1} < c_k < x_k$ , such that 

$$
\Delta y _ {k} = f ^ {\prime} (c _ {k}) \Delta x _ {k}.
$$


FIGURE 6.22 The length of the polygonal path $P_{0}P_{1}P_{2}\cdots P_{n}$ approximates the length of the curve $y = f(x)$ from point A to point B.


![[80b3b3ecbfc0e7d5eac644e97fd2012570f7a58ada8a245b922ad01fe1b051a5.jpg|image]]



FIGURE 6.23 The arc $P_{k-1}P_{k}$ of the curve $y = f(x)$ is approximated by the straight-line segment shown here, which has length $L_{k} = \sqrt{(\Delta x_{k})^{2} + (\Delta y_{k})^{2}}$ .



FIGURE 6.24 The length of the curve is slightly larger than the length of the line segment joining points A and B (Example 1).


![[806789269e4004bd06d59b7d8eac5808e4b6f643288f1e2f1fa4b9745e1b8a10.jpg|image]]



When this is substituted for $\Delta y_{k}$ , the sums in Equation (1) take the form


$$
\sum_ {k = 1} ^ {n} L _ {k} = \sum_ {k = 1} ^ {n} \sqrt {\left(\Delta x _ {k}\right) ^ {2} + \left(f ^ {\prime} \left(c _ {k}\right) \Delta x _ {k}\right) ^ {2}} = \sum_ {k = 1} ^ {n} \sqrt {1 + \left[ f ^ {\prime} \left(c _ {k}\right) \right] ^ {2}} \Delta x _ {k}.\tag{2}
$$

This is a Riemann sum whose limit we can evaluate. Because $\sqrt{1 + [f'(x)]^{2}}$ is continuous on $[a, b]$ , the limit of the Riemann sum on the right-hand side of Equation (2) exists and has the value 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} L _ {k} = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \sqrt {1 + \left[ f ^ {\prime} \left(c _ {k}\right)\right] ^ {2}} \Delta x _ {k} = \int_ {a} ^ {b} \sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} d x.
$$

We define the length of the curve to be this integral. 

![[31f73621b110c5a9b7c0395ec76a55e880ffa7b212ae2b16c67cf683b686888d.jpg|image]]


> ***DEFINITION*** If $f'$ is continuous on $[a, b]$ , then the length (arc length) of the curve $y = f(x)$ from the point $A = (a, f(a))$ to the point $B = (b, f(b))$ is the value of the integral 
>
> $$
> L = \int_ {a} ^ {b} \sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} d x = \int_ {a} ^ {b} \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x.\tag{3}
> $$

**EXAMPLE 1** Find the length of the curve shown in Figure 6.24, which is the graph of the function 

$$
y = \frac {4 \sqrt {2}}{3} x ^ {3 / 2} - 1, \quad 0 \leq x \leq 1.
$$

**Solution** We use Equation (3) with a = 0, b = 1, and 

$$
\begin{array}{r l} y & = \frac {4 \sqrt {2}}{3} x ^ {3 / 2} - 1 \\ \frac {d y}{d x} & = \frac {4 \sqrt {2}}{3} \cdot \frac {3}{2} x ^ {1 / 2} = 2 \sqrt {2} x ^ {1 / 2} \\ \left(\frac {d y}{d x}\right) ^ {2} & = (2 \sqrt {2} x ^ {1 / 2}) ^ {2} = 8 x. \end{array} \quad \text {   If   } x = 1, \text {   then   } y \approx 0. 8 9.
$$

The length of the curve over x = 0 to x = 1 is 

$$
\begin{array}{l l} L = \int_ {0} ^ {1} \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x = \int_ {0} ^ {1} \sqrt {1 + 8 x} d x & \text { Eq. (3) with } a = 0, b = 1 \\ = \frac {2}{3} \cdot \frac {1}{8} (1 + 8 x) ^ {3 / 2} \bigg | _ {0} ^ {1} = \frac {1 3}{6} \approx 2. 1 7. & \text { Let } u = 1 + 8 x, \text { integrate }, \\ & \text { and replace } u \text { by } 1 + 8 x. \end{array}
$$

![[891a5090661582a30417cc8a9d1f2652ac1809bc0cbbb6ef8a20a8c246931cb2.jpg|image]]



FIGURE 6.25 The curve in Example 2, where $A = (1, 13/12)$ and $B = (4, 67/12)$ .


Notice that the length of the curve is slightly larger than the length of the straight-line segment joining the points $A = (0, -1)$ and $B = (1, 4\sqrt{2}/3 - 1)$ on the curve (see Figure 6.24): 

$$
2. 1 7 > \sqrt {1 ^ {2} + (1 . 8 9) ^ {2}} \approx 2. 1 4.
$$

Decimal approximations 

**EXAMPLE 2** Find the length of the graph of 

$$
f (x) = \frac {x ^ {3}}{1 2} + \frac {1}{x}, \quad 1 \leq x \leq 4.
$$

**Solution** A graph of the function is shown in Figure 6.25. To use Equation (3), we find 

SO 

$$
f ^ {\prime} (x) = \frac {x ^ {2}}{4} - \frac {1}{x ^ {2}}
$$

$$
\begin{array}{r l} 1 + \left[ f ^ {\prime} (x) \right] ^ {2} & = 1 + \left(\frac {x ^ {2}}{4} - \frac {1}{x ^ {2}}\right) ^ {2} = 1 + \left(\frac {x ^ {4}}{1 6} - \frac {1}{2} + \frac {1}{x ^ {4}}\right) \\ & = \frac {x ^ {4}}{1 6} + \frac {1}{2} + \frac {1}{x ^ {4}} = \left(\frac {x ^ {2}}{4} + \frac {1}{x ^ {2}}\right) ^ {2} \end{array}
$$

and 

$$
\sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} = \sqrt {\left(\frac {x ^ {2}}{4} + \frac {1}{x ^ {2}}\right) ^ {2}} = \left| \frac {x ^ {2}}{4} + \frac {1}{x ^ {2}} \right| = \frac {x ^ {2}}{4} + \frac {1}{x ^ {2}}. \quad \frac {x ^ {2}}{4} + \frac {1}{x ^ {2}} > 0
$$

The length of the graph over $[1, 4]$ is 

$$
\begin{array}{l} L = \int_ {1} ^ {4} \sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} d x = \int_ {1} ^ {4} \left(\frac {x ^ {2}}{4} + \frac {1}{x ^ {2}}\right) d x \\ = \left[ \frac {x ^ {3}}{1 2} - \frac {1}{x} \right] _ {1} ^ {4} = \left(\frac {6 4}{1 2} - \frac {1}{4}\right) - \left(\frac {1}{1 2} - 1\right) = \frac {7 2}{1 2} = 6. \end{array}
$$

**EXAMPLE 3** Find the length of the curve 

$$
y = \frac {1}{2} (e ^ {x} + e ^ {- x}), \quad 0 \leq x \leq 2.
$$

**Solution** We use Equation (3) with a = 0, b = 2, and 

$$
y = \frac {1}{2} (e ^ {x} + e ^ {- x})
$$

$$
{\frac {d y}{d x}} = {\frac {1}{2}} (e ^ {x} - e ^ {- x})
$$

$$
\left(\frac {d y}{d x}\right) ^ {2} = \frac {1}{4} \left(e ^ {2 x} - 2 + e ^ {- 2 x}\right)
$$

$$
1 + \left(\frac {d y}{d x}\right) ^ {2} = \frac {1}{4} \left(e ^ {2 x} + 2 + e ^ {- 2 x}\right) = \left[ \frac {1}{2} \left(e ^ {x} + e ^ {- x}\right) \right] ^ {2}
$$

$$
\sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} = \sqrt {\left[ \frac {1}{2} (e ^ {x} + e ^ {- x}) \right] ^ {2}} = \left| \frac {1}{2} (e ^ {x} + e ^ {- x}) \right| = \frac {1}{2} (e ^ {x} + e ^ {- x}). \quad \frac {1}{2} (e ^ {x} + e ^ {- x}) > 0
$$

The length of the curve from $x = 0$ to $x = 2$ is 

$$
\begin{array}{l} L = \int_ {0} ^ {2} \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x = \int_ {0} ^ {2} \frac {1}{2} (e ^ {x} + e ^ {- x}) d x \\ = \frac {1}{2} \left[ e ^ {x} - e ^ {- x} \right] _ {0} ^ {2} = \frac {1}{2} \big ((e ^ {2} - e ^ {- 2}) - (1 - 1) \big) \approx 3. 6 3. \end{array}
$$

$$
\text { Eq.   (3)   with } a = 0, b = 2
$$

Even if the derivative $dy / dx$ does not exist at some point on a curve, it is possible that $dx / dy$ could exist. This can happen, for example, when a curve has a vertical tangent. In this case, we may be able to find the curve's length by expressing $x$ as a function of $y$ and applying the following analogue of Equation (3). 

## Dealing with Discontinuities in dy/dx


FIGURE 6.26 The graph of $y = (x / 2)^{2 / 3}$ from $x = 0$ to $x = 2$ is also the graph of $x = 2y^{3 / 2}$ from $y = 0$ to $y = 1$ (Example 4).


$$
\begin{array}{l} \text {Formula for the Length of x = g(y), c\leq y\leq d} \\ \text {If g^{\prime} is continuous on [c,d], the length of the curve x = g(y) from A = (g(c),c)} \\ \text {to B = (g(d),d) is} \\ L = \int_ {c} ^ {d} \sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} d y = \int_ {c} ^ {d} \sqrt {1 + \left[ g ^ {\prime} (y) \right] ^ {2}} d y. \end{array} \tag {4}
$$

![[780b42987f61188913f91e65cd430523720caf58e3ac66e31b12e3892f268ce8.jpg|image]]


## **EXAMPLE 4** Find the length of the curve $y = (x/2)^{2/3}$ from x = 0 to x = 2.

## **Solution** The derivative

$$
\frac {d y}{d x} = \frac {2}{3} \left(\frac {x}{2}\right) ^ {- 1 / 3} \left(\frac {1}{2}\right) = \frac {1}{3} \left(\frac {2}{x}\right) ^ {1 / 3}
$$

is not defined at $x = 0$ , so we cannot find the curve's length with Equation (3). 

We therefore rewrite the equation to express x in terms of y: 

$$
\begin{array}{l l} y = \left(\frac {x}{2}\right) ^ {2 / 3} \\ y ^ {3 / 2} = \frac {x}{2} & \text { Raise   both   sides   to   the   power } 3 / 2. \\ x = 2 y ^ {3 / 2}. & \text { Solve   for } x. \end{array}
$$

From this we see that the curve whose length we want is also the graph of $x = 2y^{3/2}$ from y = 0 to y = 1 (see Figure 6.26). 

The derivative 

$$
\frac {d x}{d y} = 2 \left(\frac {3}{2}\right) y ^ {1 / 2} = 3 y ^ {1 / 2}
$$

is continuous on $[0,1]$ . We may therefore use Equation (4) to find the curve's length: 

$$
\begin{array}{l l} L = \int_ {c} ^ {d} \sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} d y = \int_ {0} ^ {1} \sqrt {1 + 9 y} d y & \text { Eq. (4) with } c = 0, d = 1 \\ = \frac {1}{9} \cdot \frac {2}{3} (1 + 9 y) ^ {3 / 2} \Big | _ {0} ^ {1} & \text { Let } u = 1 + 9 y, d u / 9 = d y, \\ & \text { integrate,and substitute back. } \\ = \frac {2}{2 7} (1 0 \sqrt {1 0} - 1) \approx 2. 2 7. \end{array}
$$

## The Differential Formula for Arc Length

If $y = f(x)$ and if $f'$ is continuous on $[a, b]$ , then by the Fundamental Theorem of Calculus, we can define a new function 

$$
s (x) = \int_ {a} ^ {x} \sqrt {1 + \left[ f ^ {\prime} (t) \right] ^ {2}} d t.\tag{5}
$$

![[04f659cc57bcee975b7378f77569c74178d636f9d0a62e63e22fc199e7d637c6.jpg|image]]


![[abb64a2ea618d3afa509b609396b61b26efe943c12834b86990daf80e7879ef8.jpg|image]]



FIGURE 6.27 Diagrams for remembering the equation $ds = \sqrt{dx^{2} + dy^{2}}$ .


From Equation (3) and Figure 6.22, we see that this function $s(x)$ is continuous and measures the length along the curve $y = f(x)$ from the initial point $P_0(a, f(a))$ to the point $Q(x, f(x))$ for each $x \in [a, b]$ . The function $s$ is called the arc length function for $y = f(x)$ . From the Fundamental Theorem, the function $s$ is differentiable on $(a, b)$ and 

$$
\frac {d s}{d x} = \sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} = \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}}.
$$

Then the differential of arc length is 

$$
d s = \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x.\tag{6}
$$

A useful way to remember Equation (6) is to write 

$$
d s = \sqrt {d x ^ {2} + d y ^ {2}},\tag{7}
$$

which can be integrated between appropriate limits to give the total length of a curve. From this point of view, all the arc length formulas are simply different expressions for the equation $L = \int ds$ . Figure 6.27a, which corresponds to Equation (7), can be thought of as a simplified approximation of Figure 6.27b. That is, ds is approximately equal to the exact arc length $\Delta s$ . 

**EXAMPLE 5** Find the arc length function for the curve in Example 2, taking $A = (1, 13/12)$ as the starting point (see Figure 6.25). 

**Solution** In the solution to Example 2, we found that 

$$
\sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} = \frac {x ^ {2}}{4} + \frac {1}{x ^ {2}}.
$$

Therefore the arc length function is given by 

$$
\begin{array}{l} s (x) = \int_ {1} ^ {x} \sqrt {1 + \left[ f ^ {\prime} (t) \right] ^ {2}} d t = \int_ {1} ^ {x} \left(\frac {t ^ {2}}{4} + \frac {1}{t ^ {2}}\right) d t \\ = \left[ \frac {t ^ {3}}{1 2} - \frac {1}{t} \right] _ {1} ^ {x} = \frac {x ^ {3}}{1 2} - \frac {1}{x} + \frac {1 1}{1 2}. \end{array}
$$

To compute the arc length along the curve from $A = (1, 13/12)$ to $B = (4, 67/12)$ , for instance, we simply calculate 

$$
s (4) = \frac {4 ^ {3}}{1 2} - \frac {1}{4} + \frac {1 1}{1 2} = 6.
$$

This is the same result we obtained in Example 2. 

## EXERCISES

## 6.3

## Finding Lengths of Curves

Find the lengths of the curves in Exercises 1–16. If you have graphing software, you may want to graph these curves to see what they look like. 

$$
5. x = \left(y ^ {4} / 4\right) + 1 / (8 y ^ {2}) \text {   from   } y = 1 \text {   to   } y = 2
$$

$$
y = (1 / 3) \left(x ^ {2} + 2\right) ^ {3 / 2} \text {   from   } x = 0 \text {   to   } x = 3
$$

$$
4. x = \left(y ^ {3 / 2} / 3\right) - y ^ {1 / 2} \text {   from   } y = 1 \text {   to   } y = 9
$$

$$
6. x = (y ^ {3} / 6) + 1 / (2 y) \text {   from   } y = 2 \text {   to   } y = 3
$$

$$
2. y = x ^ {3 / 2} \text {   from   } x = 0 \text {   to   } x = 4
$$

$$
x = (y ^ {3} / 3) + 1 / (4 y) \text {   from   } y = 1 \text {   to   } y = 3
$$

$$
y = (3 / 4) x ^ {4 / 3} - (3 / 8) x ^ {2 / 3} + 5, \quad 1 \leq x \leq 8
$$

$$
y = (x ^ {3} / 3) + x ^ {2} + x + 1 / (4 x + 4), \quad 0 \leq x \leq 2
$$

9. $y = \ln x - \frac{x^{2}}{8}$ from x = 1 to x = 2 

10. $y = \frac{x^2}{2} - \frac{\ln x}{4}$ from $x = 1$ to $x = 3$ 

11. $y = \frac{x^3}{3} +\frac{1}{4x}, 1\leq x\leq 3$ 

12. $y = \frac{x^5}{5} +\frac{1}{12x^3},\frac{1}{2}\leq x\leq 1$ 

13. $y = \frac{3}{2} x^{2 / 3} + 1, \frac{1}{8} \leq x \leq 1$ 

14. $y = \frac{1}{2} (e^x + e^{-x}), -1 \leq x \leq 1$ 

15. $x = \int_0^y\sqrt{\sec^4t - 1} dt, - \pi /4\leq y\leq \pi /4$ 

16. $y = \int_{-2}^{x}\sqrt{3t^4 - 1} dt, -2 \leq x \leq -1$ 

## T Finding Integrals for Lengths of Curves

In Exercises 17–24, do the following. 

a. Set up an integral for the length of the curve. 

b. Graph the curve to see what it looks like. 

c. Use your grapher's or computer's integral evaluator to find the curve's length numerically. 

17. $y = x^{2}, - 1\leq x\leq 2$ 

18. $y = \tan x, -\pi /3\leq x\leq 0$ 

19. $x = \sin y,\quad 0 \leq y \leq \pi$ 

20. $x = \sqrt{1 - y^{2}}, -1/2 \leq y \leq 1/2$ 

21. $y^{2} + 2y = 2x + 1$ from $(-1, -1)$ to $(7, 3)$ 

22. $y = \sin x - x \cos x, \quad 0 \leq x \leq \pi$ 

23. $y = \int_{0}^{x} \tan t \, dt, \quad 0 \leq x \leq \pi/6$ 

24. $x = \int_0^y\sqrt{\sec^2t - 1} dt, - \pi /3\leq y\leq \pi /4$ 

## Theory and Examples

25. a. Find a curve with a positive derivative through the point $(1,1)$ whose length integral (Equation 3) is 

$$
L = \int_ {1} ^ {4} \sqrt {1 + \frac {1}{4 x}} d x.
$$

b. How many such curves are there? Give reasons for your answer. 

26. a. Find a curve with a positive derivative through the point $(0,1)$ whose length integral (Equation 4) is 

$$
L = \int_ {1} ^ {2} \sqrt {1 + \frac {1}{y ^ {4}}} d y.
$$

b. How many such curves are there? Give reasons for your answer. 

27. Find the length of the curve 

$$
y = \int_ {0} ^ {x} \sqrt {\cos 2 t} d t
$$

from x = 0 to $x = \pi/4$ . 

28. The length of an astroid The graph of the equation $x^{2/3} + y^{2/3} = 1$ is one of a family of curves called astroids (not “asteroids”) because of their starlike appearance (see the accompanying figure). Find the length of this particular astroid by finding the length of half the first-quadrant portion, $y = (1 - x^{2/3})^{3/2}$ , $\sqrt{2}/4 \leq x \leq 1$ , and multiplying by 8. 

![[f095d97f4974e6d269d26be5cca542caa4c54e063656810f67b8d9cbc98ad485.jpg|image]]


29. Length of a line segment Use the arc length formula (Equation 3) to find the length of the line segment $y = 3 - 2x$ , $0 \leq x \leq 2$ . Check your answer by finding the length of the segment as the hypotenuse of a right triangle. 

30. Circumference of a circle Set up an integral to find the circumference of a circle of radius r centered at the origin. You will learn how to evaluate the integral in Section 8.3. 

31. If $9x^{2} = y(y - 3)^{2}$ , show that 

$$
d s ^ {2} = \frac {(y + 1) ^ {2}}{4 y} d y ^ {2}.
$$

32. If $4x^{2} - y^{2} = 64$ , show that 

$$
d s ^ {2} = \frac {4}{y ^ {2}} (5 x ^ {2} - 1 6) d x ^ {2}.
$$

33. Is there a smooth (continuously differentiable) curve $y = f(x)$ whose length over the interval $0 \leq x \leq a$ is always $\sqrt{2}a$ ? Give reasons for your answer. 

34. Using tangent fins to derive the length formula for curves Assume that $f$ is smooth on $[a, b]$ and partition the interval $[a, b]$ in the usual way. In each subinterval $[x_{k-1}, x_k]$ , construct the tangent fin at the point $(x_{k-1}, f(x_{k-1}))$ , as shown in the accompanying figure. 

a. Show that the length of the kth tangent fin over the interval 

$$
\left[ x _ {k - 1}, x _ {k} \right] \text {   equals   } \sqrt {\left(\Delta x _ {k}\right) ^ {2} + \left(f ^ {\prime} (x _ {k - 1}) \Delta x _ {k}\right) ^ {2}}.
$$

b. Show that 

$\lim_{n\to\infty}\sum_{k=1}^{n}(\text{length of kth tangent fin})=\int_{a}^{b}\sqrt{1+(f'(x))^{2}}dx,$ 

which is the length L of the curve $y = f(x)$ from a to b. 

![[721ca098ba1153b737f1a5280279d9ed9427e8a154e3af71f81e001be9012fca.jpg|image]]


35. Approximate the arc length of one-quarter of the unit circle (which is $\pi/2$ ) by computing the length of the polygonal approximation with n = 4 segments (see accompanying figure). 

![[bc2893647fc256b1f71f2104d4b755c69a4ef4aaf805680edd14b10bc1bb00d7.jpg|image]]


36. Distance between two points Assume that the two points $(x_{1}, y_{1})$ and $(x_{2}, y_{2})$ lie on the graph of the straight line $y = mx + b$ . Use the arc length formula (Equation 3) to find the distance between the two points. 

37. Find the arc length function for the graph of $f(x) = 2x^{3/2}$ using (0, 0) as the starting point. What is the length of the curve from (0, 0) to (1, 2)? 

38. Find the arc length function for the curve in Exercise 8, using $(0,1/4)$ as the starting point. What is the length of the curve from $(0,1/4)$ to $(1,59/24)$ ? 

## COMPUTER EXPLORATIONS

In Exercises 39–44, use a CAS to perform the following steps for the given graph of the function over the closed interval. 

a. Plot the curve together with the polygonal path approximations for n = 2, 4, 8 partition points over the interval. (See Figure 6.22.) 

b. Find the corresponding approximation to the length of the curve by summing the lengths of the line segments. 

c. Evaluate the length of the curve using an integral. Compare your approximations for n = 2, 4, 8 with the actual length given by the integral. How does the actual length compare with the approximations as n increases? Explain your answer. 

39. $f(x) = \sqrt{1 - x^2}, - 1\leq x\leq 1$ 

40. $f(x) = x^{1 / 3} + x^{2 / 3}, 0 \leq x \leq 2$ 

41. $f(x) = \sin(\pi x^{2}), \quad 0 \leq x \leq \sqrt{2}$ 

42. $f(x) = x^{2}\cos x, 0 \leq x \leq \pi$ 

43. $f(x) = \frac{x - 1}{4x^{2} + 1}, \quad -\frac{1}{2} \leq x \leq 1$ 

44. $f(x) = x^{3} - x^{2}, - 1\leq x\leq 1$ 

## 6.4 Areas of Surfaces of Revolution

When you jump rope, the rope sweeps out a surface in the space around you similar to what is called a surface of revolution. The surface surrounds a volume of revolution, and many applications require that we know the area of the surface rather than the volume it encloses. In this section we define areas of surfaces of revolution. More general surfaces are treated in Chapter 15. 

![[0839ed6e1207212315ae90e4ed9120e642b0d9ca3fd54277d3cbd270e18fc704.jpg|image]]


## Defining Surface Area

![[e4f6199c46744496c833bb00cbef3532744b12295dadf9571c1f40197cd1fac8.jpg|image]]



FIGURE 6.28 (a) A cylindrical surface generated by rotating the horizontal line segment AB of length $\Delta x$ about the x-axis has area $2\pi y \Delta x$ . (b) The cut and rolled-out cylindrical surface as a rectangle.


If you revolve a region in the plane that is bounded by the graph of a function over an interval, it sweeps out a solid of revolution, as we saw earlier in the chapter. However, if you revolve only the bounding curve itself, it does not sweep out any interior volume but rather a surface that surrounds the solid and forms part of its boundary. Just as we were interested in defining and finding the length of a curve in the last section, we are now interested in defining and finding the area of a surface generated by revolving a curve about an axis. 

Before considering general curves, we begin by rotating horizontal and slanted line segments about the x-axis. If we rotate the horizontal line segment AB having length $\Delta x$ about the x-axis (Figure 6.28a), we generate a cylinder with surface area $2\pi y \Delta x$ . This area is the same as that of a rectangle with side lengths $\Delta x$ and $2\pi y$ (Figure 6.28b). The length $2\pi y$ is the circumference of the circle of radius y generated by rotating the point $(x, y)$ on the line AB about the x-axis. 

Suppose the line segment AB has length L and is slanted rather than horizontal. Now when AB is rotated about the x-axis, it generates a frustum of a cone (Figure 6.29a). From classical geometry, the surface area of this frustum is $2\pi y^{*}L$ , where $y^{*} = (y_{1} + y_{2})/2$ is the average height of the slanted segment AB above the x-axis. This surface area is the same as that of a rectangle with side lengths L and $2\pi y^{*}$ (Figure 6.29b). 

![[1dc8105c569c2c2df4546e0f4f92d1d26158c1ded773a0d974b132fc53d20fa9.jpg|image]]



FIGURE 6.29 (a) The frustum of a cone generated by rotating the slanted line segment AB of length L about the x-axis has area $2\pi y^{*}L$ . (b) The area of the rectangle for $y^{*} = \frac{y_{1} + y_{2}}{2}$ , the average height of AB above the x-axis.


![[385c7d4f240180494161984ed3dd7de66ed16034cc07a477593195184bd3d9d8.jpg|image]]



FIGURE 6.30 The surface generated by revolving the graph of a nonnegative function $y = f(x)$ , $a \leq x \leq b$ , about the x-axis. The surface is a union of bands like the one swept out by the arc PQ.


![[8d907f92a0b49e8f76e9ac9b3370129a5bfa82272392bd4f96f5c8a12a23ba7a.jpg|image]]



FIGURE 6.31 The line segment joining P and Q sweeps out a frustum of a cone.



FIGURE 6.32 Dimensions associated with the arc and line segment PQ.


![[a1008396d7ab7cd760c8923074cc77d7d46cd4cd80105e3fcdf68b3e59b12c9c.jpg|image]]


Let's build on these geometric principles to define the area of a surface swept out by revolving more general curves about the $x$ -axis. Suppose we want to find the area of the surface swept out by revolving the graph of a nonnegative continuous function $y = f(x)$ , $a \leq x \leq b$ , about the $x$ -axis. We partition the closed interval $[a, b]$ in the usual way and use the points in the partition to subdivide the graph into short arcs. Figure 6.30 shows a typical arc $PQ$ and the band it sweeps out as part of the graph of $f$ . 

As the arc PQ revolves about the x-axis, the line segment joining P and Q sweeps out a frustum of a cone whose axis lies along the x-axis (Figure 6.31). The surface area of this frustum approximates the surface area of the band swept out by the arc PQ. The surface area of the frustum of the cone shown in Figure 6.31 is $2\pi y^{*}L$ , where $y^{*}$ is the average height of the line segment joining P and Q, and L is its length (just as before). Since $f \geq 0$ , from Figure 6.32 we see that the average height of the line segment is $y^{*} = (f(x_{k-1}) + f(x_{k}))/2$ , and the slant length is $L = \sqrt{(\Delta x_{k})^{2} + (\Delta y_{k})^{2}}$ . Therefore, 

$$
\begin{array}{l} \text {   Frustum   surface   area   } = 2 \pi \cdot \frac {f (x _ {k - 1}) + f (x _ {k})}{2} \cdot \sqrt {(\Delta x _ {k}) ^ {2} + (\Delta y _ {k}) ^ {2}} \\ = \pi (f (x _ {k - 1}) + f (x _ {k})) \sqrt {(\Delta x _ {k}) ^ {2} + (\Delta y _ {k}) ^ {2}}. \end{array}
$$

The area of the original surface, being the sum of the areas of the bands swept out by arcs like arc PQ, is approximated by the frustum area sum 

$$
\sum_ {k = 1} ^ {n} \pi \left(f \left(x _ {k - 1}\right) + f \left(x _ {k}\right)\right) \sqrt {\left(\Delta x _ {k}\right) ^ {2} + \left(\Delta y _ {k}\right) ^ {2}}.\tag{1}
$$

We expect the approximation to improve as the partition of $[a,b]$ becomes finer. To find the limit, we first need to find an appropriate substitution for $\Delta y_{k}$ . If the function f is differentiable, then by the Mean Value Theorem, there is a point $(c_{k},f(c_{k}))$ on the curve between P and Q where the tangent is parallel to the segment PQ (Figure 6.33). At this point, 

$$
\begin{array}{c} f ^ {\prime} (c _ {k}) = \frac {\Delta y _ {k}}{\Delta x _ {k}}, \\ \Delta y _ {k} = f ^ {\prime} (c _ {k}) \Delta x _ {k}. \end{array}
$$

![[a7d96a666ba3f5a5dcacb462af41bfa1626eb84247ddf1ba5918f7af47fd66c6.jpg|image]]



FIGURE 6.33 If f is smooth, the Mean Value Theorem guarantees the existence of a point $c_{k}$ where the tangent is parallel to segment PQ.


![[d10596daf70341a80e49438dcb8f0f67b65bc48d31b5f2a0c377afc13569d26d.jpg|image]]



FIGURE 6.34 In Example 1 we calculate the area of this surface.


With this substitution for $\Delta y_{k}$ , the sums in Equation (1) take the form 

$$
\begin{array}{l} \sum_ {k = 1} ^ {n} \pi (f (x _ {k - 1}) + f (x _ {k})) \sqrt {(\Delta x _ {k}) ^ {2} + (f ^ {\prime} (c _ {k}) \Delta x _ {k}) ^ {2}} \\ = \sum_ {k = 1} ^ {n} \pi (f (x _ {k - 1}) + f (x _ {k})) \sqrt {1 + (f ^ {\prime} (c _ {k})) ^ {2}} \Delta x _ {k}. \end{array}\tag{2}
$$

These sums are not the Riemann sums of any function because the points $x_{k-1}, x_k$ , and $c_k$ are not the same. However, the points $x_{k-1}, x_k$ , and $c_k$ are very close to each other, and so we expect (and it can be proved) that as the norm of the partition of $[a, b]$ goes to zero, the sums in Equation (2) converge to the integral 

$$
\int_ {a} ^ {b} 2 \pi f (x) \sqrt {1 + \left(f ^ {\prime} (x)\right) ^ {2}} d x.
$$

We therefore define this integral to be the area of the surface swept out by the graph of f from a to b. 

> ***DEFINITION*** If the function $f(x) \geq 0$ is continuously differentiable on $[a, b]$ , the area of the surface generated by revolving the graph of $y = f(x)$ about the x-axis is 
>
> $$
> S = \int_ {a} ^ {b} 2 \pi y \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x = \int_ {a} ^ {b} 2 \pi f (x) \sqrt {1 + \left(f ^ {\prime} (x)\right) ^ {2}} d x.\tag{3}
> $$
>
Note that the square root in Equation (3) is similar to the one that appears in the formula for the arc length of the generating curve in Equation (6) of Section 6.3. 

**EXAMPLE 1** Find the area of the surface generated by revolving the curve $y = 2\sqrt{x}, 1 \leq x \leq 2$ , about the x-axis (Figure 6.34). 

**Solution** We evaluate the formula 

$$
S = \int_ {a} ^ {b} 2 \pi y \sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} d x \tag {Eq.(3)}
$$

with 

$$
a = 1, \quad b = 2, \quad y = 2 \sqrt {x}, \quad \frac {d y}{d x} = \frac {1}{\sqrt {x}}.
$$

First, we perform some algebraic manipulation on the radical in the integrand to transform it into an expression that is easier to integrate. 

$$
\sqrt {1 + \left(\frac {d y}{d x}\right) ^ {2}} = \sqrt {1 + \left(\frac {1}{\sqrt {x}}\right) ^ {2}} = \sqrt {1 + \frac {1}{x}} = \sqrt {\frac {x + 1}{x}} = \frac {\sqrt {x + 1}}{\sqrt {x}}
$$

With these substitutions, we have 

$$
\begin{array}{l} S = \int_ {1} ^ {2} 2 \pi \cdot 2 \sqrt {x} \frac {\sqrt {x + 1}}{\sqrt {x}} d x = 4 \pi \int_ {1} ^ {2} \sqrt {x + 1} d x \\ = 4 \pi \cdot \frac {2}{3} (x + 1) ^ {3 / 2} \bigg | _ {1} ^ {2} = \frac {8 \pi}{3} \big (3 \sqrt {3} - 2 \sqrt {2} \big). \end{array}
$$

## Revolution About the y-Axis

For revolution about the y-axis, we interchange x and y in Equation (3). 

![[b965022ef52362e6b429620634afee5154c9c46de7a9f81f9042b5f84a6031b4.jpg|image]]



FIGURE 6.35 Revolving line segment AB about the y-axis generates a cone whose lateral surface area we can now calculate in two different ways (Example 2).


Surface Area for Revolution About the y-Axis 

If $x = g(y) \geq 0$ is continuously differentiable on $[c, d]$ , the area of the surface generated by revolving the graph of $x = g(y)$ about the $y$ -axis is 

$$
S = \int_ {c} ^ {d} 2 \pi x \sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} d y = \int_ {c} ^ {d} 2 \pi g (y) \sqrt {1 + \left(g ^ {\prime} (y)\right) ^ {2}} d y.\tag{4}
$$

**EXAMPLE 2** The line segment $x = 1 - y$ , $0 \leq y \leq 1$ , is revolved about the $y$ -axis to generate the cone in Figure 6.35. Find its lateral surface area (which excludes the base area). 

**Solution** Here we have a calculation we can check with a formula from geometry: 

$$
\text { Lateral   surface   area } = \frac {\text { base   circumference }}{2} \times \text { slant   height } = \pi \sqrt {2}.
$$

To see how Equation (4) gives the same result, we take 

$$
c = 0, \quad d = 1, \quad x = 1 - y, \quad \frac {d x}{d y} = - 1,
$$

and calculate 

$$
\sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} = \sqrt {1 + (- 1) ^ {2}} = \sqrt {2}
$$

$$
\begin{array}{l} S = \int_ {c} ^ {d} 2 \pi x \sqrt {1 + \left(\frac {d x}{d y}\right) ^ {2}} d y = \int_ {0} ^ {1} 2 \pi (1 - y) \sqrt {2} d y \\ = 2 \pi \sqrt {2} \left[ y - \frac {y ^ {2}}{2} \right] _ {0} ^ {1} = 2 \pi \sqrt {2} \left(1 - \frac {1}{2}\right) = \pi \sqrt {2}. \end{array}
$$

## EXERCISES 6.4

## Finding Integrals for Surface Area

In Exercises 1–8: 

a. Set up an integral for the area of the surface generated by revolving the given curve about the indicated axis. 

T b. Graph the curve to see what it looks like. If you can, graph the surface too. 

T c. Use your utility's integral evaluator to find the surface's area numerically. 

1. $y = \tan x, \quad 0 \leq x \leq \pi/4; \quad x$ -axis 

2. $y = x^{2}$ , $0 \leq x \leq 2$ ; $x$ -axis 

3. $xy = 1, 1 \leq y \leq 2; y$ -axis 

4. $x = \sin y,\quad 0 \leq y \leq \pi;\quad y$ -axis 

5. $x^{1 / 2} + y^{1 / 2} = 3$ from (4,1) to (1,4); $x$ -axis 

6. $y + 2\sqrt{y} = x,\quad 1 \leq y \leq 2;\quad y$ -axis 

7. $x = \int_{0}^{y}\tan tdt, 0\leq y\leq \pi /3;$ y-axis 

8. $y = \int_{1}^{x}\sqrt{t^{2} - 1} dt, 1\leq x\leq \sqrt{5};$ $x$ -axis 

Finding Surface Area 

9. Find the lateral (side) surface area of the cone generated by revolving the line segment $y = x/2$ , $0 \leq x \leq 4$ , about the x-axis. Check your answer with the geometry formula 

Lateral surface area = $\frac{1}{2} \times$ base circumference $\times$ slant height. 

10. Find the lateral surface area of the cone generated by revolving the line segment $y = x/2$ , $0 \leq x \leq 4$ , about the y-axis. Check your answer with the geometry formula given in Exercise 9. 

11. Find the surface area of the cone frustum generated by revolving the line segment $y = (x/2) + (1/2)$ , $1 \leq x \leq 3$ , about the x-axis. Check your result with the geometry formula 

Frustum surface area = $\pi(y_{1} + y_{2}) \times$ slant height. 

12. Find the surface area of the cone frustum generated by revolving the line segment $y = (x/2) + (1/2)$ , $1 \leq x \leq 3$ , about the y-axis. Check your result with the geometry formula given in Exercise 11. 

Find the areas of the surfaces generated by revolving the curves in Exercises 13–23 about the indicated axes. If you have a grapher, you may want to graph these curves to see what they look like. 

13. $y = x^{3}/9,\quad 0 \leq x \leq 2;\quad x$ -axis 

14. $y = \sqrt{x}, 3/4 \leq x \leq 15/4; x$ -axis 

15. $y = \sqrt{2x - x^{2}}$ , $0.5 \leq x \leq 1.5$ ; x-axis 

16. $y = \sqrt{x + 1}, \quad 1 \leq x \leq 5; \quad x$ -axis 

17. $x = y^{3} / 3, 0 \leq y \leq 1$ ; y-axis 

18. $x = (1 / 3)y^{3 / 2} - y^{1 / 2}, 1 \leq y \leq 3; y$ -axis 

19. $x = 2\sqrt{4 - y}$ , $0 \leq y \leq 15/4$ ; y-axis 

![[3c8bd0d3799b718e8479cccf7571ba20109e1ea59c000220e65a411c07f78173.jpg|image]]


20. $x = \sqrt{2y - 1}$ , 5/8 ≤ y ≤ 1; y-axis 

![[f7411fa3e7963350344933a97d1982505516e48ce88609f12dc92cf5ccf3622d.jpg|image]]


21. $x = (e^{y} + e^{-y})/2,\quad 0 \leq y \leq \ln 2;\quad y$ -axis 

![[9b3b776ba8229d59303a5fdd406840cf3f1c28c4b943d160fc52356621a20f8b.jpg|image]]


22. $y = (1/3)(x^{2} + 2)^{3/2}, \quad 0 \leq x \leq \sqrt{2}; \quad y$ -axis (Hint: Express $ds = \sqrt{dx^{2} + dy^{2}}$ in terms of dx, and evaluate the integral $S = \int 2\pi x ds$ with appropriate limits.) 

23. $x = (y^{4}/4) + 1/(8y^{2})$ , $1 \leq y \leq 2$ ; x-axis (Hint: Express $ds = \sqrt{dx^{2} + dy^{2}}$ in terms of dy, and evaluate the integral $S = \int 2\pi y ds$ with appropriate limits.) 

24. Write an integral for the area of the surface generated by revolving the curve $y = \cos x, -\pi/2 \leq x \leq \pi/2$ , about the x-axis. In Section 8.3 we will see how to evaluate such integrals. 

25. Testing the new definition Show that the surface area of a sphere of radius $a$ is still $4\pi a^2$ by using Equation (3) to find the area of the surface generated by revolving the curve $y = \sqrt{a^2 - x^2}$ , $-a \leq x \leq a$ , about the $x$ -axis. 

26. Testing the new definition The lateral (side) surface area of a cone of height h and base radius r should be $\pi r\sqrt{r^{2}+h^{2}}$ , the semiperimeter of the base times the slant height. Show that this is still the case by finding the area of the surface generated by revolving the line segment $y=(r/h)x, 0 \leq x \leq h$ , about the x-axis. 

27. Enameling woks Your company decided to put out a deluxe version of a wok you designed. The plan is to coat it inside with white enamel and outside with blue enamel. Each enamel will be sprayed on 0.5 mm thick before baking. (See accompanying figure.) Your manufacturing department wants to know how much enamel to have on hand for a production run of 5000 woks. What do you tell them? (Neglect waste and unused material and give your answer in liters. Remember that $1 \, cm^{3} = 1 \, mL$ , so $1 \, L = 1000 \, cm^{3}$ .) 

![[e179bd4611fe8003ac128937496f06bd5308fb81d887435c47a8151cd96577f4.jpg|image]]


28. Here is a schematic drawing of the 30-m dome used by the U.S. National Weather Service to house radar in Bozeman, Montana. 

a. How much outside surface is there to paint (not counting the bottom)? 

T b. Express the answer to the nearest square meter. 

![[6d63af40d9d51607d9b0dfc23a35ac8dc1900104e3c7e300905626b5bc15168a.jpg|image]]


29. The shaded band shown here is cut from a sphere of radius $R$ by parallel planes $h$ units apart. Show that the surface area of the band is $2\pi Rh$ . 

![[0be4944b22e0e7d01acb4c1370c7292fc404d30ab2e4fa0fe1ee39c7d8333112.jpg|image]]


30. Slicing bread Did you know that if you cut a spherical loaf of bread into slices of equal width, each slice will have the same amount of crust? To see why, suppose the semicircle $y = \sqrt{r^{2} - x^{2}}$ shown here is revolved about the x-axis to generate a sphere. Let AB be an arc of the semicircle that lies above an interval of length h on the x-axis. Show that the area swept out by AB does not depend on the location of the interval. (It does depend on the length of the interval.) 

![[4f1fde3e8a2eeeb900449d63b5973aab322d4a4f47520bab341a62d3b48c6b6f.jpg|image]]


31. An alternative derivation of the surface area formula Assume $f$ is smooth on $[a, b]$ and partition $[a, b]$ in the usual way. In the $k$ th subinterval $[x_{k-1}, x_k]$ , construct the tangent line to the curve at the midpoint $m_k = (x_{k-1} + x_k)/2$ , as in the accompanying figure. 

$$
r _ {1} = f (m _ {k}) - f ^ {\prime} (m _ {k}) \frac {\Delta x _ {k}}{2} \text { and } r _ {2} = f (m _ {k}) + f ^ {\prime} (m _ {k}) \frac {\Delta x _ {k}}{2}.
$$

b. Show that the length $L_{k}$ of the tangent line segment in the $k$ th subinterval is $L_{k} = \sqrt{(\Delta x_{k})^{2} + (f'(m_{k})\Delta x_{k})^{2}}$ . 

![[5db467d9aa5b6296b2c7cf49126920dba0d257d7f5447310cc0c1d638ef1715b.jpg|image]]


c. Show that the lateral surface area of the frustum of the cone swept out by the tangent line segment as it revolves about the $x$ -axis is $2\pi f(m_k)\sqrt{1 + (f'(m_k))^2}\Delta x_k$ . 

d. Show that the area of the surface generated by revolving $y = f(x)$ about the x-axis over $[a, b]$ is 

$\lim_{n\to\infty}\sum_{k=1}^{n}\left(\begin{array}{c}\text{lateral surface area}\\ \text{of kth frustum}\end{array}\right)=\int_{a}^{b}2\pi f(x)\sqrt{1+(f'(x))^2}dx.$ 

32. The surface of an astroid Find the area of the surface generated by revolving about the $x$ -axis the portion of the astroid $x^{2/3} + y^{2/3} = 1$ shown in the accompanying figure. 

(Hint: Revolve the first-quadrant portion $y = (1 - x^{2/3})^{3/2}$ , $0 \leq x \leq 1$ , about the x-axis and double your result.) 

![[0af118ef108323883b67400266374c6732e9a33f03de30231571b23fa705d299.jpg|image]]


## 6.5 Work and Fluid Forces

In everyday life, work means an activity that requires muscular or mental effort. In science, the term refers specifically to a force acting on an object and the object's subsequent displacement. This section shows how to calculate work. The applications run from compressing railroad car springs and emptying subterranean tanks to forcing subatomic particles to collide and lifting satellites into orbit. 

## Work Done by a Constant Force

When an object moves a distance d along a straight line as a result of being acted on by a force of constant magnitude F in the direction of motion, we define the work W done by the force on the object with the formula 

$$
W = F d \quad (\text { Constant - force   formula   for   work }).\tag{1}
$$

From Equation (1) we see that the unit of work in any system is the unit of force multiplied by the unit of distance. In SI units (SI stands for Système International, or International System), the unit of force is a newton (N), the unit of distance is a meter (m), and the unit of work is a newton-meter (N·m). This combination appears so often, it has 

## Joules

The joule, abbreviated J, is named after the English physicist James Prescott Joule (1818–1889). The defining equation is 

$$
1 \text {   joule   } = (1 \text {   newton }) (1 \text {   meter }).
$$

In symbols, $1 \, J = 1 \, N \cdot m$ . 

a special name, the joule (J). Taking gravitational acceleration at sea level to be $9.8 \, m/s^{2}$ , to lift one kilogram one meter requires work of 9.8 joules. This is seen by multiplying the force of 9.8 newtons exerted on one kilogram by the one-meter distance moved. 

**EXAMPLE 1** Suppose you jack up the side of a 1000-kg car 35 cm to change a tire. The jack applies a constant vertical force of about 5000 N in lifting the side of the car (but because of the mechanical advantage of the jack, the force you apply to the jack itself is only about 150 N). The total work performed by the jack on the car is $5000 \times 0.35 = 1750$ J. 

## Work Done by a Variable Force Along a Line

If the force you apply varies along the way, as it will if you are stretching or compressing a spring, the formula W = Fd has to be replaced by an integral formula that takes the variation in F into account. 

Suppose that the force performing the work acts on an object moving along a straight line, which we take to be the x-axis. We assume that the magnitude of the force is a continuous function F of the object's position x. We want to find the work done over the interval from x = a to x = b. We partition $[a, b]$ in the usual way and choose an arbitrary point $c_{k}$ in each subinterval $[x_{k-1}, x_{k}]$ . If the subinterval is short enough, the continuous function F will not vary much from $x_{k-1}$ to $x_{k}$ . The amount of work done across the interval will be about $F(c_{k})$ times the distance $\Delta x_{k}$ , the same as it would be if F were constant and we could apply Equation (1). The total work done from a to b is therefore approximated by the Riemann sum 

$$
\text { Work } \approx \sum_ {k = 1} ^ {n} F (c _ {k})   \Delta x _ {k}.
$$

We expect the approximation to improve as the norm of the partition goes to zero, so we define the work done by the force from a to b to be the integral of F from a to b: 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} F (c _ {k}) \Delta x _ {k} = \int_ {a} ^ {b} F (x) d x.
$$

> ***DEFINITION*** The work done by a variable force $F(x)$ in moving an object along the x-axis from x = a to x = b is 
>
> $$
> W = \int_ {a} ^ {b} F (x) d x.\tag{2}
> $$
>
The units of the integral are joules if $F$ is in newtons and $x$ is in meters. So the work done by a force of $F(x) = 1 / x^2$ newtons in moving an object along the $x$ -axis from $x = 1\mathrm{m}$ to $x = 10\mathrm{m}$ is 

$$
W = \int_ {1} ^ {1 0} \frac {1}{x ^ {2}} d x = - \left. \frac {1}{x} \right] _ {1} ^ {1 0} = - \frac {1}{1 0} + 1 = 0. 9 \mathrm{J}.
$$

## Hooke's Law for Springs: $F = kx$

One calculation for work arises in finding the work required to stretch or compress a spring. Hooke's Law says that the force required to hold a stretched or compressed spring $x$ units from its natural (unstressed) length is proportional to $x$ . In symbols, 

$$
F = k x.\tag{3}
$$

![[2c865506efb108b3822a922838f226bbec12b0535dfe66acb2b708b3fa2d4f39.jpg|image]]


![[727202c20790d418fe6205b69ab17e41ac81f13019e627ecf8e26d51e89a16d0.jpg|image]]



FIGURE 6.36 The force F needed to hold a spring under compression increases linearly as the spring is compressed (Example 2).


![[5b18bc884e064c9aa3cd809a4bfe688e767193d54ccc56d6a36a5561ac29e257.jpg|image]]



FIGURE 6.37 A 24-N weight stretches this spring 0.8 m beyond its unstressed length (Example 3).


![[a27a0b92726a4b92e16311a8162be1d5a52d1b204bcf4ebc084a3f1c3e6bc28b.jpg|image]]



FIGURE 6.38 Lifting the bucket in Example 4.


The constant $k$ , measured in force units per unit length, is a characteristic of the spring, called the force constant (or spring constant) of the spring. Hooke's Law, Equation (3), gives good results as long as the force doesn't distort the metal in the spring. We assume that the forces in this section are too small to do that. 

**EXAMPLE 2** Find the work required to compress a spring from its natural length of 30 cm to a length of 20 cm if the force constant is k = 240 N/m. 

**Solution** We picture the uncompressed spring laid out along the x-axis with its movable end at the origin and its fixed end at x = 0.3 m (Figure 6.36). This enables us to describe the force required to compress the spring from 0 to x with the formula F = 240x. To compress the spring from 0 to 0.1 m, the force must increase from 

$$
F (0) = 2 4 0 \cdot 0 = 0 \mathrm{N} \quad \text { to } \quad F (0. 1) = 2 4 0 \cdot 0. 1 = 2 4 \mathrm{N}.
$$

The work done by F over this interval is 

$$
W = \int_ {0} ^ {0. 1} 2 4 0 x d x = 1 2 0 x ^ {2} \bigg | _ {0} ^ {0. 1} = 1. 2 \mathrm{J}. \quad \begin{array}{l} \text { Eq.   (2)   with } \\ a = 0, b = 0. 1, \\ F (x) = 2 4 0 x \end{array}
$$

**EXAMPLE 3** A spring has a natural length of 1 m. A force of 24 N holds the spring stretched to a total length of 1.8 m. 

(a) Find the force constant k. 

(b) How much work will it take to stretch the spring from its natural length to a length of $3\mathrm{m}$ ?  
(c) How far will a 45-N force stretch the spring? 

## **Solution**

(a) The force constant. We find the force constant from Equation (3). A force of 24 N maintains the spring at a position where it is stretched 0.8 m from its natural length, so 

$$
\begin{array}{l} 2 4 = k (0. 8) \\ k = 2 4 / 0. 8 = 3 0 \mathrm{N/m}. \end{array} \quad \text { Eq.   (3)   with } F = 2 4, x = 0. 8
$$

(b) The work to stretch the spring $2\mathrm{m}$ . We imagine the unstressed spring hanging along the $x$ -axis with its free end at $x = 0$ (Figure 6.37). The force required to stretch the spring $x$ meters beyond its natural length is the force required to hold the free end of the spring $x$ units from the origin. Hooke's Law with $k = 30$ says that this force is 

$$
F (x) = 3 0 x.
$$

The work done by F on the spring from x = 0 m to x = 2 m is 

$$
W = \int_ {0} ^ {2} 3 0 x d x = 1 5 x ^ {2} \bigg | _ {0} ^ {2} = 6 0 \mathrm{J}.
$$

(c) How far will a 45-N force stretch the spring? We substitute $F = 45$ in the equation $F = 30x$ to find 

$$
4 5 = 3 0 x, \quad \text { or } \quad x = 1. 5 \mathrm{m}.
$$

A 45-N force will keep the spring stretched 1.5 m beyond its natural length. 

## Lifting Objects and Pumping Liquids from Containers

The work integral is useful for calculating the work done in lifting objects whose weights vary with their elevation. 

**EXAMPLE 4** A 2-kg bucket is lifted from the ground into the air by pulling in 6 m of rope at a constant speed (Figure 6.38). The rope weighs 0.1 kg/m. How much work was spent lifting the bucket and rope? 

**Solution** The bucket has constant weight, so the work done lifting it alone is 

$$
\text { weight } \times \text { distance } = 2 \cdot 9. 8 \cdot 6 = 1 1 7. 6   \text { J }.
$$

The weight of the rope varies with the bucket's elevation, because less of it is freely hanging. When the bucket is $x$ m off the ground, the remaining proportion of the rope still being lifted weighs $(0.1 \cdot 9.8) \cdot (6 - x)$ N. So the work in lifting the rope is 

$$
\begin{array}{r l} \text { Work   on   rope } & = \int_ {0} ^ {6} (0. 9 8) (6 - x) d x = \int_ {0} ^ {6} (5. 8 8 - 0. 9 8 x) d x \\ & = \left[ 5. 8 8 x - 0. 4 9 x ^ {2} \right] _ {0} ^ {6} = 3 5. 2 8 - 1 7. 6 4 = 1 7. 6 4 \mathrm{J}. \end{array}
$$

The total work for the bucket and rope combined is 


FIGURE 6.39 The olive oil and tank in Example 5.


$$
1 1 7. 6 + 1 7. 6 4 = 1 3 5. 2 4 \mathrm{J}.
$$

How much work does it take to pump all or part of the liquid from a container? Engineers often need to know the answer in order to design or choose the right pump, or to compute the cost to transport water or some other liquid from one place to another. To find out how much work is required to pump the liquid, we imagine lifting the liquid out one thin horizontal slab at a time and applying the equation W = Fd to each slab. We then evaluate the integral that this leads to as the slabs become thinner and more numerous. 

![[9c457698617c32117a0d1e8b72860fdeb0b7e54605e90f49a065b85d6dae97ff.jpg|image]]


**EXAMPLE 5** The conical tank in Figure 6.39 is filled to within 2 m of the top with olive oil weighing 0.9 g/cm $^{3}$ or 8820 N/m $^{3}$ . How much work does it take to pump the oil to the rim of the tank? 

**Solution** We imagine the oil divided into thin slabs by planes perpendicular to the y-axis at the points of a partition of the interval $[0,8]$ . 

The typical slab between the planes at y and $y + \Delta y$ has a volume of about 

$$
\Delta V = \pi (\text { radius }) ^ {2} (\text { thickness }) = \pi \left(\frac {1}{2} y\right) ^ {2} \Delta y = \frac {\pi}{4} y ^ {2} \Delta y m ^ {3}.
$$

The force $F(y)$ required to lift this slab is equal to its weight, 

$$
F (y) = 8 8 2 0 \Delta V = \frac {8 8 2 0 \pi}{4} y ^ {2} \Delta y N. \quad \text { Weight } = (\text { weight   per   unit   volume }) \times \text { volume }
$$

The distance through which $F(y)$ must act to lift this slab to the level of the rim of the cone is about $(10 - y)$ m, so the work done lifting the slab is about 

$$
\Delta W = \frac {8 8 2 0 \pi}{4} (1 0 - y) y ^ {2} \Delta y J.
$$

Assuming there are n slabs associated with the partition of $[0,8]$ , and that $y = y_{k}$ denotes the plane associated with the kth slab of thickness $\Delta y_{k}$ , we can approximate the work done lifting all of the slabs with the Riemann sum 

$$
W \approx \sum_ {k = 1} ^ {n} \frac {8 8 2 0 \pi}{4} (1 0 - y _ {k}) y _ {k} ^ {2} \Delta y _ {k} J.
$$

The work of pumping the oil to the rim is the limit of these sums as the norm of the partition goes to zero, and the number of slabs tends to infinity: 

$$
\begin{array}{r l}W = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \frac {8 8 2 0 \pi}{4} (1 0 - y _ {k}) y _ {k} ^ {2} \Delta y _ {k}&= \int_ {0} ^ {8} \frac {8 8 2 0 \pi}{4} (1 0 - y) y ^ {2} d y\\&= \frac {8 8 2 0 \pi}{4} \int_ {0} ^ {8} (1 0 y ^ {2} - y ^ {3}) d y\\&= \frac {8 8 2 0 \pi}{4} \left[ \frac {1 0 y ^ {3}}{3} - \frac {y ^ {4}}{4} \right] _ {0} ^ {8} \approx 4, 7 2 8, 9 7 7 \mathrm{J}.\end{array}
$$

![[25cf426c942dd026f76118b0a203c5e7b8c4a41529cf9d68f9c4bfe857c31c98.jpg|image]]



FIGURE 6.40 To withstand the increasing pressure, dams are built thicker as they go down.


## Weight-density


A fluid's weight-density $w$ is its weight per unit volume. Typical values $(\mathrm{N} / \mathrm{m}^3)$ are listed below.


<table><tr><td>Gasoline</td><td>6600</td></tr><tr><td>Mercury</td><td>133,000</td></tr><tr><td>Milk</td><td>10,100</td></tr><tr><td>Molasses</td><td>15,700</td></tr><tr><td>Olive oil</td><td>8820</td></tr><tr><td>Seawater</td><td>10,050</td></tr><tr><td>Freshwater</td><td>9800</td></tr></table>

![[cea50f72429de15518d50804d929585719da91cf68a99d5185dadf1ddb1e444f.jpg|image]]



FIGURE 6.41 These containers are


filled with water to the same depth and have the same base area. The total force is therefore the same on the bottom of each container. The containers' shapes do not matter here. 

![[8c4c087ec4186d32e47b8e12effbeaef715463f5c2471e2d8cb62223e41c20eb.jpg|image]]



FIGURE 6.42 The force exerted


$$
\Delta F = \text { pressure } \times \text { area } =
$$

$$
w \times (\text { strip   depth }) \times L (y) \Delta y.
$$

## Fluid Pressure and Forces

Dams are built thicker at the bottom than at the top (Figure 6.40) because the pressure against them increases with depth. The pressure at any point on a dam depends only on how far below the surface the point is and not on how much the surface of the dam happens to be tilted at that point. The pressure, in newtons per square meter at a point h meters below the surface, is always 9800h. The number 9800 is the weight-density of freshwater in newtons per cubic meter. The pressure h meters below the surface of any fluid is the fluid's weight-density times h. 

## The Pressure-Depth Equation

In a fluid that is standing still, the pressure $p$ at depth $h$ is the fluid's weight-density $w$ times $h$ : 

$$
p = w h.\tag{4}
$$

In a container of fluid with a flat horizontal base, the total force exerted by the fluid against the base can be calculated by multiplying the area of the base by the pressure at the base. We can do this because total force equals force per unit area (pressure) times area. (See Figure 6.41.) If F, p, and A are the total force, pressure, and area, then 

$$
\begin{array}{r l} F & = \text { total   force } = \text { force   per   unit   area } \times \text { area } \\ & = \text { pressure } \times \text { area } = p A \\ & = w h A. \end{array} \quad p = w h \text { from   Eq.   (4) }
$$

Fluid Force on a Constant-Depth Surface 

$$
F = p A = w h A\tag{5}
$$

For example, the weight-density of freshwater is $9800 \, N/m^{3}$ , so the fluid force at the bottom of a $3 \, m \times 6 \, m$ rectangular swimming pool 1 m deep is 

$$
\begin{array}{r l} F & = w h A = (9 8 0 0 \mathrm {N/ m^ {3}}) (1 \mathrm{m}) (3 \cdot 6 \mathrm {m^ {2}}) \\ & = 1 7 6, 4 0 0 \mathrm{N}. \end{array}
$$

For a flat plate submerged horizontally, like the bottom of the swimming pool just discussed, the downward force acting on its upper face due to liquid pressure is given by Equation (5). If the plate is submerged vertically, however, then the pressure against it will be different at different depths and Equation (5) no longer is usable in that form (because h varies). 

Suppose we want to know the force exerted by a fluid against one side of a vertical plate submerged in a fluid of weight-density w. To find it, we model the plate as a region extending from y = a to y = b in the xy-plane (Figure 6.42). We partition $[a, b]$ in the usual way and imagine the region to be cut into thin horizontal strips by planes perpendicular to the y-axis at the partition points. The typical strip from y to $y + \Delta y$ is $\Delta y$ units wide by $L(y)$ units long. We assume $L(y)$ to be a continuous function of y. 

The pressure varies across the strip from top to bottom. If the strip is narrow enough, however, the pressure will remain close to its bottom-edge value of $w \times (\text{strip depth})$ . The force exerted by the fluid against one side of the strip will be about 

$$
\begin{array}{r l} \Delta F & = (\text { pressure   along   bottom   edge }) \times (\text { area }) \\ & = w \cdot (\text { strip   depth }) \cdot L (y) \Delta y. \end{array}
$$

Assume there are n strips associated with the partition of $a \leq y \leq b$ and that $y_{k}$ is the bottom edge of the kth strip having length $L(y_{k})$ and width $\Delta y_{k}$ . The force against the entire plate is approximated by summing the forces against each strip, giving the Riemann sum 

$$
F \approx \sum_ {k = 1} ^ {n} w \cdot (\text { strip   depth }) _ {k} \cdot L (y _ {k}) \Delta y _ {k}.\tag{6}
$$

The sum in Equation (6) is a Riemann sum for a continuous function on $[a, b]$ , and we expect the approximations to improve as the norm of the partition goes to zero. The force against the plate is the limit of these sums: 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} w \cdot (\text { strip   depth }) _ {k} \cdot L (y _ {k}) \Delta y _ {k} = \int_ {a} ^ {b} w \cdot (\text { strip   depth }) \cdot L (y) d y.
$$


FIGURE 6.43 To find the force on one side of the submerged plate in Example 6, we can use a coordinate system like the one here.


![[3611eb09167cd56abac727241d5581d3fd1c2ebaa247836a8897bc2fc24aaeb0.jpg|image]]


Suppose that a plate submerged vertically in fluid of weight-density w runs from y = a to y = b on the y-axis. Let $L(y)$ be the length of the horizontal strip measured from left to right along the surface of the plate at level y. Then the force exerted by the fluid against one side of the plate is 

## The Integral for Fluid Force Against a Vertical Flat Plate

$$
F = \int_ {a} ^ {b} w \cdot (\text { strip   depth }) \cdot L (y) d y.\tag{7}
$$

**EXAMPLE 6** A flat isosceles right-triangular plate with base 2 m and height 1 m is submerged vertically, base up, 0.6 m below the surface of a swimming pool. Find the force exerted by the water against one side of the plate. 

**Solution** We establish a coordinate system to work in by placing the origin at the plate's bottom vertex and running the y-axis upward along the plate's axis of symmetry (Figure 6.43). The surface of the pool lies along the line y = 1.6, and the plate's top edge along the line y = 1. The plate's right-hand edge lies along the line y = x, with the upper-right vertex at (1, 1). The length of a thin strip at level y is 

$$
L (y) = 2 x = 2 y.
$$

The depth of the strip beneath the surface is $(1.6 - y)$ . The force exerted by the water against one side of the plate is therefore 

$$
\begin{array}{l} F = \int_ {a} ^ {b} w \cdot \left( \begin{array}{c} \text { strip } \\ \text { depth } \end{array} \right) \cdot L (y) d y \\ = \int_ {0} ^ {1} 9 8 0 0 (1. 6 - y) 2 y d y \\ = 1 9, 6 0 0 \int_ {0} ^ {1} (1. 6 y - y ^ {2}) d y \\ = 1 9, 6 0 0 \left[ 0. 8 y ^ {2} - \frac {y ^ {3}}{3} \right] _ {0} ^ {1} = 9 1 4 7 \mathrm{N}. \end{array} \tag {Eq.(7)}
$$

## EXERCISES

## 6.5

For some exercises, a calculator may be helpful when expressing answers in decimal form. 

## Springs

The graphs of force functions (in newtons) are given in Exercises 1 and 2. How much work is done by each force in moving an object $10\mathrm{m}$ ? 

1. $F(N)$ 

![[203218ee68a8424a4894433fc830d6af738a92473ff3358cf61736a53275dd0b.jpg|image]]


![[48788ac682c950735df940fbb6d5edc7631ad1d8bed13d88c19393ffc1a7f43f.jpg|image]]


3. Spring constant It took 1800 J of work to stretch a spring from its natural length of 2 m to a length of 5 m. Find the spring's force constant. 

4. Stretching a spring A spring has a natural length of 10 cm. An 800-N force stretches the spring to 14 cm. 

a. Find the force constant. 

b. How much work is done in stretching the spring from 10 cm to 12 cm? 

c. How far beyond its natural length will a 1600-N force stretch the spring? 

5. Stretching a rubber band A force of $2\mathrm{N}$ will stretch a rubber band $2\mathrm{cm}$ $(0.02\mathrm{m})$ . Assuming that Hooke's Law applies, how far will a 4-N force stretch the rubber band? How much work does it take to stretch the rubber band this far? 

6. Stretching a spring If a force of $90\mathrm{N}$ stretches a spring $1\mathrm{m}$ beyond its natural length, how much work does it take to stretch the spring $5\mathrm{m}$ beyond its natural length? 

7. Subway car springs It takes a force of 96,000 N to compress a coil spring assembly on a New York City Transit Authority subway car from its free height of 20 cm to its fully compressed height of 12 cm. 

a. What is the assembly's force constant? 

b. How much work does it take to compress the assembly the first centimeter? the second centimeter? Answer to the nearest joule. 

8. Bathroom scale A bathroom scale is compressed 1.5 mm when a 70-kg person stands on it. Assuming that the scale behaves like a spring that obeys Hooke's Law, how much does someone who compresses the scale 3 mm weigh? How much work is done compressing the scale 3 mm? 

## Work Done by a Variable Force

9. Lifting a rope A mountain climber is about to haul up a 50-m length of hanging rope. How much work will it take if the rope weighs 0.624 N/m? 

10. Leaky sandbag A bag of sand originally weighing 600 N was lifted at a constant rate. As it rose, sand also leaked out at a constant rate. The sand was half gone by the time the bag had been lifted to 6 m. How much work was done lifting the sand this far? (Neglect the weight of the bag and lifting equipment.) 

11. Lifting an elevator cable An electric elevator with a motor at the top has a multistrand cable weighing 60 N/m. When the car is at the first floor, 60 m of cable are paid out, and effectively 0 m are out when the car is at the top floor. How much work does the motor do just lifting the cable when it takes the car from the first floor to the top? 

12. Force of attraction When a particle of mass m is at $(x,0)$ , it is attracted toward the origin with a force whose magnitude is $k/x^{2}$ . If the particle starts from rest at x = b and is acted on by no other forces, find the work done on it by the time it reaches x = a, 0 < a < b. 

13. Leaky bucket Assume the bucket in Example 4 is leaking. It starts with 8 L of water (78 N) and leaks at a constant rate. It finishes draining just as it reaches the top. How much work was spent lifting the water alone? (Hint: Do not include the rope and bucket, and find the proportion of water left at elevation x m.) 

14. (Continuation of Exercise 11) The workers in Example 4 and Exercise 11 changed to a larger bucket that held 20 L (195 N) of water, but the new bucket had an even larger leak so that it, too, was empty by the time it reached the top. Assuming that the water leaked out at a steady rate, how much work was done lifting the water alone? (Do not include the rope and bucket.) 

## Pumping Liquids from Containers

15. Pumping water The rectangular tank shown here, with its top at ground level, is used to catch runoff water. Assume that the water weighs $9800\mathrm{N / m^3}$ . 

a. How much work does it take to empty the tank by pumping the water back to ground level once the tank is full? 

b. If the water is pumped to ground level with a 5-horsepower (hp) motor (work output 3678 W), how long will it take to empty the full tank (to the nearest minute)? 

c. Show that the pump in part (b) will lower the water level 10 m (halfway) during the first 266 min of pumping. 

d. The weight of water What are the answers to parts (a) and (b) in a location where water weighs $9780 \, N/m^{3}$ ? $9820 \, N/m^{3}$ ? 

![[b0a131e606d1a53124041f176e50f3bf6136aa48d27804a4f1a87a8321b7cf84.jpg|image]]


16. Emptying a cistern The rectangular cistern (storage tank for rainwater) shown has its top 3 m below ground level. The cistern, currently full, is to be emptied for inspection by pumping its contents to ground level. 

a. How much work will it take to empty the cistern? 

b. How long will it take a 1/2-hp pump, rated at 370 W, to pump the tank dry? 

c. How long will it take the pump in part (b) to empty the tank halfway? (It will be less than half the time required to empty the tank completely.) 

d. The weight of water What are the answers to parts (a) through (c) in a location where water weighs $9780\mathrm{N / m}^3?$ $9820\mathrm{N / m}^3?$ 

![[c52b340342a4b43b1c4d97490c04be496226a627b94cf7b0c51b18b48721bf2d.jpg|image]]


17. Pumping oil How much work would it take to pump oil from the tank in Example 5 to the level of the top of the tank if the tank were completely full? 

18. Pumping a half-full tank Suppose that, instead of being full, the tank in Example 5 is only half full. How much work does it take to pump the remaining oil to a level 1 m above the top of the tank? 

19. Emptying a tank A vertical right-circular cylindrical tank measures 9 m high and 6 m in diameter. It is full of kerosene weighing 7840 N/m $^{3}$ . How much work does it take to pump the kerosene to the level of the top of the tank? 

20. a. Pumping milk Suppose that the conical container in Example 5 contains milk (weighing $10,100 \, N/m^{3}$ ) instead of olive oil. How much work will it take to pump the contents to the rim? 

b. Pumping oil How much work will it take to pump the oil in Example 5 to a level $1 \mathrm{~m}$ above the cone's rim? 

21. The graph of $y = x^{2}$ on $0 \leq x \leq 2$ is revolved about the y-axis to form a tank that is then filled with salt water from the Dead Sea (weighing approximately $11,500 \, N/m^{3}$ ). How much work does it take to pump all of the water to the top of the tank? 

22. A right-circular cylindrical tank of height 3 m and radius 1.5 m is lying horizontally and is full of diesel fuel weighing 8300 N/m $^{3}$ . How much work is required to pump all of the fuel to a point 4.5 m above the top of the tank? 

23. Emptying a water reservoir We model pumping from spherical containers the way we do from other containers, with the axis of integration along the vertical axis of the sphere. Use the figure here to find how much work it takes to empty a full hemispherical water reservoir of radius 5 m by pumping the water to a height of 4 m above the top of the reservoir. Water weighs $9800 \, N/m^{3}$ . 

![[ac3df1b7e0e95b6a32c951ea27587b43ae8329f28b8e49659b5a1f4ce28e6c00.jpg|image]]


24. You are in charge of the evacuation and repair of the storage tank shown here. The tank is a hemisphere of radius 3 m and is full of benzene weighing 8800 N/m $^{3}$ . A firm you contacted says it can empty the tank for 0.4¢ per joule of work. Find the work required to empty the tank by pumping the benzene to an outlet 0.6 m above the top of the tank. If you have $5000 budgeted for the job, can you afford to hire the firm? 

![[c13d041b1167408938cd00143cc8a4aff3380edb1b085648ad72937408adefe5.jpg|image]]


Work and Kinetic Energy 

25. Kinetic energy If a variable force of magnitude $F(x)$ moves an object of mass $m$ along the $x$ -axis from $x_{1}$ to $x_{2}$ , the object's velocity $v$ can be written as $dx / dt$ (where $t$ represents time). Use Newton's second law of motion $F = m(dv / dt)$ and the Chain Rule 

$$
{\frac {d v}{d t}} = {\frac {d v}{d x}} {\frac {d x}{d t}} = v {\frac {d v}{d x}}
$$

to show that the net work done by the force in moving the object from $x_{1}$ to $x_{2}$ is 

$$
W = \int_ {x _ {1}} ^ {x _ {2}} F (x) d x = \frac {1}{2} m v _ {2} ^ {2} - \frac {1}{2} m v _ {1} ^ {2},
$$

where $v_{1}$ and $v_{2}$ are the object's velocities at $x_{1}$ and $x_{2}$ . In physics, the expression $(1/2)mv^{2}$ is called the kinetic energy of an object of mass $m$ moving with velocity $v$ . Therefore, the work done by the force equals the change in the object's kinetic energy, and we can find the work by calculating this change. 

In Exercises 26–30, use the result of Exercise 25. 

26. Tennis A 57 g tennis ball was served at 50 m/s (180 km/h). How much work was done on the ball to make it go this fast? 

27. Baseball How many joules of work does it take to throw a baseball 144 km/h? A baseball's mass is 150 g. 

28. Golf A 50 g golf ball is driven off the tee at a speed of 84 m/s (302.4 km/h). How many joules of work are done on the ball getting it into the air? 

29. Tennis At the 2012 Busan Open Challenger Tennis Tournament in Busan, South Korea, the Australian Samuel Groth hit a serve measured at 263 km/ph. How much work was required by Groth to serve a 0.0567-kg tennis ball at that speed? 

30. Softball How much work has to be performed on a 200 g softball to pitch it 40 m/s (144 km/h)? 

31. Drinking a milkshake The truncated conical container shown here is full of strawberry milkshake, which has a density of $0.8 \, g/cm^{3}$ . As you can see, the container is 18 cm deep, 6 cm across at the base, and 9 cm across at the top (a standard size at Brigham's in Boston). The straw sticks up 3 cm above the top. About how much work does it take to suck up the milkshake through the straw (neglecting friction)? 

![[36fa5d611f80969750e1622de68a4383b0144dd8b14f153ce9a6315c28d2dfb3.jpg|image]]



Dimensions in centimeters


32. Water tower Your town has decided to drill a well to increase its water supply. As the town engineer, you have determined that a water tower will be necessary to provide the pressure needed for distribution, and you have designed the system shown here. The water is to be pumped from a 90 m well through a vertical 10 cm pipe into the base of a cylindrical tank 6 m in diameter and 7.5 m high. The base of the tank will be 18 m above ground. The pump is a 3-hp pump, rated at 2200 W (J/s). To the nearest hour, how long will it take to fill the tank the first time? (Include the time it takes to fill the pipe.) Assume that water weighs $9800 \, N/m^{3}$ . 

![[4210fcaa273c02d21ab9b2b593e3959543c75b7aec42c7a946799d540cc217a5.jpg|image]]



NOT TO SCALE


33. Putting a satellite in orbit The strength of Earth's gravitational field varies with the distance $r$ from Earth's center, and the magnitude of the gravitational force experienced by a satellite of mass $m$ during and after launch is 

$$
F (r) = \frac {m M G}{r ^ {2}}.
$$

Here, $M = 5.975 \times 10^{24} \mathrm{~kg}$ is Earth's mass, 

$$
G = 6. 6 7 2 0 \times 1 0 ^ {- 1 1} \mathrm{N} \cdot \mathrm{m} ^ {2} \mathrm{kg} ^ {- 2}
$$

is the universal gravitational constant, and $r$ is measured in meters. The work it takes to lift a 1000-kg satellite from Earth's surface to a circular orbit 35,780 km above Earth's center is therefore given by the integral 

$$
\text { Work } = \int_ {6, 3 7 0, 0 0 0} ^ {3 5, 7 8 0, 0 0 0} \frac {1 0 0 0 M G}{r ^ {2}} d r \text {   joules. }
$$

Evaluate the integral. The lower limit of integration is Earth's radius in meters at the launch site. (This calculation does not take into account energy spent lifting the launch vehicle or energy spent bringing the satellite to orbit velocity.) 

34. Forcing electrons together Two electrons r meters apart repel each other with a force of 

$$
F = \frac {2 3 \times 1 0 ^ {- 2 9}}{r ^ {2}} \text { newtons }.
$$

a. Suppose one electron is held fixed at the point $(1,0)$ on the x-axis (units in meters). How much work does it take to move a second electron along the x-axis from the point $(-1,0)$ to the origin? 

b. Suppose an electron is held fixed at each of the points $(-1,0)$ and $(1,0)$ . How much work does it take to move a third electron along the x-axis from $(5,0)$ to $(3,0)$ ? 

## Finding Fluid Forces

35. Triangular plate Calculate the fluid force on one side of the plate in Example 6 using the coordinate system shown here. 

![[417a40e2472446a8304e06bd2ca55bb79a391166e01a766dd1ff52f96af2620d.jpg|image]]


36. Triangular plate Calculate the fluid force on one side of the plate in Example 6 using the coordinate system shown here. 

![[ca99091358ebbc042346c3f34e062135688d37d70be1eda149ae149b8b177e53.jpg|image]]


37. Rectangular plate In a pool filled with water to a depth of 3 m, calculate the fluid force on one side of a 0.9 m by 1.2 m rectangular plate if the plate rests vertically at the bottom of the pool 

a. on its 1.2-m edge. 

b. on its 0.9-m edge. 

38. Semicircular plate Calculate the fluid force on one side of a semicircular plate of radius 5 m that rests vertically on its diameter at the bottom of a pool filled with water to a depth of 6 m. 

![[f81ace98b421b9d9f9d910dae30020f167a9c23a32823e24ba57a26d6f336fb6.jpg|image]]


End view of trough 

![[154d2a466a8d980d9c083944d4432dd5fb5746145633ee898611d52bb62c5d40.jpg|image]]


39. Triangular plate The isosceles triangular plate shown here is submerged vertically 1 m below the surface of a freshwater lake.
a. Find the fluid force against one face of the plate. 

b. What would be the fluid force on one side of the plate if the water were seawater instead of freshwater? 

![[e3598d0c2a1c0c1a6ef4302b4f2467c2e5d557d3f10743133083aa0d28ebc349.jpg|image]]


40. Rotated triangular plate The plate in Exercise 37 is revolved $180^{\circ}$ about line $AB$ so that part of the plate sticks out of the lake, as shown here. What force does the water exert on one face of the plate now? 

![[2f32e7e5e22c433f0bb00af842bbd93db6fb94e8b541452d34f5dcdc7dd4eb5d.jpg|image]]


41. New England Aquarium The viewing portion of the rectangular glass window in a typical fish tank at the New England Aquarium in Boston is $1.6\mathrm{m}$ wide and runs from $0.01\mathrm{m}$ below the water's surface to $0.85\mathrm{m}$ below the surface. Find the fluid force against this portion of the window. The weight-density of seawater is $10,050\mathrm{N} / \mathrm{m}^3$ . (In case you were wondering, the glass is $2\mathrm{cm}$ thick and the tank walls extend $10\mathrm{cm}$ above the water to keep the fish from jumping out.) 

42. Semicircular plate A semicircular plate 2 m in diameter sticks straight down into freshwater with the diameter along the surface. Find the force exerted by the water on one side of the plate. 

43. Tilted plate Calculate the fluid force on one side of a 1 m by 1 m square plate if the plate is at the bottom of a pool filled with water to a depth of 2 m and 

a. lying flat on its 1 m by 1 m face. 

b. resting vertically on a 1 m edge. 

c. resting on a 1 m edge and tilted at $45^{\circ}$ to the bottom of the pool. 

44. Tilted plate Calculate the fluid force on one side of a right-triangular plate with edges 3 m, 4 m, and 5 m if the plate sits at the bottom of a pool filled with water to a depth of 6 m on its 3-m edge and tilted at $60^{\circ}$ to the bottom of the pool. 

45. The cubical metal tank shown here has a parabolic gate held in place by bolts and designed to withstand a fluid force of 25,000 N without rupturing. The liquid you plan to store has a weight-density of 8000 N/m $^{3}$ . 

a. What is the fluid force on the gate when the liquid is $2 \mathrm{~m}$ deep? 

b. What is the maximum height to which the container can be filled without exceeding the gate's design limitation? 

![[55eade99563b8166da6f4c27365db181db1db1ede5817e69904b1ee20b453fd4.jpg|image]]


46. The end plates of the trough shown here were designed to withstand a fluid force of 25,000 N. How many cubic meters of water can the tank hold without exceeding this limitation? Round down to the nearest cubic meter. What is the value of h? 

47. A vertical rectangular plate $a$ units long by $b$ units wide is submerged in a fluid of weight-density $w$ with its long edges parallel to the fluid's surface. Find the average value of the pressure along the vertical dimension of the plate. Explain your answer. 

48. (Continuation of Exercise 47.) Show that the force exerted by the fluid on one side of the plate is the average value of the pressure (found in Exercise 47) times the area of the plate. 

49. Water pours into the tank shown here at the rate of $0.5\mathrm{m}^3/\mathrm{min}$ . The tank's cross-sections are 2-m-diameter semicircles. One end of the tank is movable, but moving it to increase the volume compresses a spring. The spring constant is $k = 3000\mathrm{N/m}$ . If the end of the tank moves $2.5\mathrm{m}$ against the spring, the water will drain out of a safety hole in the bottom at the rate of $0.6\mathrm{m}^3/\mathrm{min}$ . Will the movable end reach the hole before the tank overflows? 

![[4a1e57509d1ebbd8d0ae529f2770140061d8def67262ea865f551348b6a2e00c.jpg|image]]


50. Watering trough The vertical ends of a watering trough are squares 1 m on a side. 

a. Find the fluid force against the ends when the trough is full. 

b. How many centimeters do you have to lower the water level in the trough to reduce the fluid force by 25%? 

## 6.6 Moments and Centers of Mass

![[6a864b0a8eec88ec3788206e5b89ebfe8974793ae4041771533101a3b5392237.jpg|image]]



FIGURE 6.44 A wrench gliding on ice turning about its center of mass as the center glides in a vertical line. (Source: Berenice Abbott/ScienceSource)


Many structures and mechanical systems behave as if their masses were concentrated at a single point, called the center of mass (Figure 6.44). It is important to know how to locate this point, and doing so is basically a mathematical enterprise. Here we consider masses distributed along a line or region in the plane. Masses distributed across a region or curve in three-dimensional space are treated in Chapters 14 and 15. 

## Masses Along a Line

We develop our mathematical model in stages. The first stage is to imagine masses $m_{1}$ , $m_{2}$ , and $m_{3}$ on a rigid x-axis supported by a fulcrum at the origin. 

![[9fcb73482e9383df8fc3015cebefe3583b96880004d2721ac6cba47a4e150cb4.jpg|image]]


The resulting system might balance, or it might not, depending on how large the masses are and how they are arranged along the x-axis. 

Each mass $m_{k}$ exerts a downward force $m_{k}g$ (the weight of $m_{k}$ ) equal to the magnitude of the mass times the acceleration due to gravity. Note that gravitational acceleration is downward, hence negative. Each of these forces has a tendency to turn the x-axis about the origin, the way a child turns a seesaw. This turning effect, called a torque, is measured by multiplying the force $m_{k}g$ by the signed distance $x_{k}$ from the point of application to the origin. By convention, a positive torque induces a counterclockwise turn. Masses to the left of the origin exert positive (counterclockwise) torque. Masses to the right of the origin exert negative (clockwise) torque. 

The sum of the torques measures the tendency of a system to rotate about the origin. This sum is called the system torque. 

$$
\text { System   torque } = m _ {1} g x _ {1} + m _ {2} g x _ {2} + m _ {3} g x _ {3}\tag{1}
$$

The system will balance if and only if its torque is zero. 

If we factor out the g in Equation (1), we see that the system torque is 

$$
\underbrace {g} _ {\text { a   feature   of   the }} \cdot \underbrace {(m _ {1} x _ {1} + m _ {2} x _ {2} + m _ {3} x _ {3})} _ {\text { a   feature   of   the   system }}.
$$

Thus, the torque is the product of the gravitational acceleration g, which is a feature of the environment in which the system happens to reside, and the number $(m_{1}x_{1} + m_{2}x_{2} + m_{3}x_{3})$ , which is a feature of the system itself. 

The number $(m_{1}x_{1} + m_{2}x_{2} + m_{3}x_{3})$ is called the moment of the system about the origin. It is the sum of the moments $m_{1}x_{1}, m_{2}x_{2}, m_{3}x_{3}$ of the individual masses. 

$$
M _ {0} = \text { Moment   of   system   about   origin } = \sum m _ {k} x _ {k}
$$

(We shift to sigma notation here to allow for sums with more terms.) 

We usually want to know where to place the fulcrum to make the system balance; that is, we want to know at what point $\overline{x}$ to place the fulcrum to make the torques add to zero. 

![[dbbc2727831f548915dbf0d18530217a79f90c6c8a957bce4da2e7dc1fd900fe.jpg|image]]


The torque of each mass about the fulcrum in this special location is 

$$
\text { Torque   of } m _ {k} \text { about } \overline {{x}} = \binom{\text { signed   distance }}{\text { of } m _ {k} \text { from } \overline {{x}}} \binom{\text { downward }}{\text { force}} = (x _ {k} - \overline {{x}}) m _ {k} g.
$$

When we write the equation that says that the sum of these torques is zero, we get an equation we can solve for $\overline{x}$ : 

$$
\begin{array}{l l} \sum (x _ {k} - \bar {x}) m _ {k} g = 0 & \text {   Sum   of   the   torques   equals   zero.   } \\ \bar {x} = \frac {\sum m _ {k} x _ {k}}{\sum m _ {k}}. & \text {   Solved   for   } \bar {x} \end{array}
$$

This last equation tells us to find $\overline{x}$ by dividing the system's moment about the origin by the system's total mass: 

$$
\bar {x} = \frac {\sum m _ {k} x _ {k}}{\sum m _ {k}} = \frac {\text { system   moment   about   origin }}{\text { system   mass }}.\tag{2}
$$

The point $\overline{x}$ is called the system's center of mass. 

![[f0b4eb336148290d336142b00d50888fbe96fe88b2d51cae6d4d0eaa69939484.jpg|image]]



FIGURE 6.45 A rod of varying density can be modeled by a finite number of point masses of mass $\Delta m_{k} = \delta(x_{k}) \Delta x_{k}$ located at points $x_{k}$ along the rod.


## Thin Wires

Instead of a discrete set of masses arranged in a line, suppose that we have a straight wire or rod located on interval $[a, b]$ on the x-axis. Suppose further that this wire is not homogeneous, but rather the density varies continuously from point to point. If a short segment of a rod containing the point x with length $\Delta x$ has mass $\Delta m$ , then the density at x is given by 

$$
\delta (x) = \lim _ {\Delta x \to 0} \Delta m / \Delta x.
$$

We often write this formula in one of the alternative forms $\delta = dm/dx$ and $dm = \delta dx$ . 

Partition the interval $[a,b]$ into finitely many subintervals $[x_{k-1},x_{k}]$ . If we take n subintervals and replace the portion of a wire along a subinterval of length $\Delta x_{k}$ containing $x_{k}$ by a point mass located at $x_{k}$ with mass $\Delta m_{k} = \delta(x_{k})\Delta x_{k}$ , then we obtain a collection of point masses that have approximately the same total mass and same moment as the wire as indicated in Figure 6.45. 

The mass M of the wire and the moment $M_{0}$ are approximated by the Riemann sums 

$$
M \approx \sum_ {k = 1} ^ {n} \Delta m _ {k} = \sum_ {k = 1} ^ {n} \delta (x _ {k}) \Delta x _ {k}, \quad M _ {0} \approx \sum_ {k = 1} ^ {n} x _ {k} \Delta m _ {k} = \sum_ {k = 1} ^ {n} x _ {k} \delta (x _ {k}) \Delta x _ {k}.
$$

By taking a limit of these Riemann sums as the length of the intervals in the partition approaches zero, we get integral formulas for the mass and the moment of the wire about the origin. The mass M, moment about the origin $M_{0}$ , and center of mass $\overline{x}$ are 

$$
M = \int_ {a} ^ {b} \delta (x) d x, \quad M _ {0} = \int_ {a} ^ {b} x \delta (x) d x, \quad \overline {{{{x}}}} = \frac {M _ {0}}{M} = \frac {\int_ {a} ^ {b} x \delta (x) d x}{\int_ {a} ^ {b} \delta (x) d x}.
$$

**EXAMPLE 1** Find the mass M and the center of mass $\overline{x}$ of a rod lying on the x-axis over the interval [1, 2] whose density is given by $\delta(x) = 2 + 3x^{2}$ . 

**Solution** The mass of the rod is obtained by integrating the density, 

$$
M = \int_ {1} ^ {2} (2 + 3 x ^ {2}) d x = [ 2 x + x ^ {3} ] _ {1} ^ {2} = (4 + 8) - (2 + 1) = 9,
$$

and the center of mass is 

$$
\overline {{x}} = \frac {M _ {0}}{M} = \frac {\int_ {1} ^ {2} x (2 + 3 x ^ {2}) d x}{9} = \frac {\left[ x ^ {2} + \frac {3 x ^ {4}}{4} \right] _ {1} ^ {2}}{9} = \frac {1 9}{1 2}.
$$

![[a31d82271c79a5ad7c660de026a6494b17dda5c8c6b1c73ac5f494bf09bc97bf.jpg|image]]



FIGURE 6.46 Each mass $m_{k}$ has a moment about each axis.


![[bc1b8c350dd475f77a97264e71eda67e7bd93c9d2f09b0b6774c4fc4fc95e3d4.jpg|image]]



FIGURE 6.47 A two-dimensional array of masses balances on its center of mass.


![[a8be33e94a2613fdc1247cf4ccd4cbe13f563d6a4d0e4117a4007ab5a6e16069.jpg|image]]



FIGURE 6.48 A plate cut into thin strips parallel to the y-axis. The moment exerted by a typical strip about each axis is the moment its mass $\Delta m$ would exert if concentrated at the strip's center of mass ( $\tilde{x}, \tilde{y}$ ).


## Density of a plate

A material's density is its mass per unit area. For wires, rods, and narrow strips, the density is given in terms of mass per unit length. 

## Masses Distributed over a Plane Region

Suppose that we have a finite collection of masses located in the plane, with mass $m_{k}$ at the point $(x_{k}, y_{k})$ (see Figure 6.46). The mass of the system is 

$$
\text { System   mass: } \quad M = \sum m _ {k}.
$$

Each mass $m_{k}$ has a moment about each axis. Its moment about the x-axis is $m_{k}y_{k}$ , and its moment about the y-axis is $m_{k}x_{k}$ . The moments of the entire system about the two axes are 

Moment about $x$ -axis: 

$$
M _ {x} = \sum m _ {k} y _ {k},
$$

Moment about y-axis: 

$$
M _ {y} = \sum m _ {k} x _ {k}.
$$

The $x$ -coordinate of the system's center of mass is defined to be 

$$
\bar {x} = \frac {M _ {y}}{M} = \frac {\sum m _ {k} x _ {k}}{\sum m _ {k}}.\tag{3}
$$

With this choice of $\overline{x}$ , as in the one-dimensional case, the system balances about the line $x = \overline{x}$ (Figure 6.47). 

The $y$ -coordinate of the system's center of mass is defined to be 

$$
\overline {{y}} = \frac {M _ {x}}{M} = \frac {\sum m _ {k} y _ {k}}{\sum m _ {k}}.\tag{4}
$$

With this choice of $\overline{y}$ , the system balances about the line $y = \overline{y}$ as well. The torques exerted by the masses about the line $y = \overline{y}$ cancel out. Thus, as far as balance is concerned, the system behaves as if all its mass were at the single point $(\overline{x}, \overline{y})$ . We call this point the system's center of mass (c.m.). 

## Thin, Flat Plates

In many applications, we need to find the center of mass of a thin, flat plate: a disk of aluminum, say, or a triangular sheet of steel. In such cases, we assume the distribution of mass to be continuous, and the formulas we use to calculate $\overline{x}$ and $\overline{y}$ contain integrals instead of finite sums. The integrals arise in the following way. 

Imagine that the plate occupying a region in the $xy$ -plane is cut into thin strips parallel to one of the axes (in Figure 6.48, the $y$ -axis). The center of mass of a typical strip is $(\tilde{x}, \tilde{y})$ . We treat the strip's mass $\Delta m$ as if it were concentrated at $(\tilde{x}, \tilde{y})$ . The moment of the strip about the $y$ -axis is then $\tilde{x} \Delta m$ . The moment of the strip about the $x$ -axis is $\tilde{y} \Delta m$ . Equations (3) and (4) then become 

$$
\overline {{x}} = \frac {M _ {y}}{M} = \frac {\sum \tilde {x} \Delta m}{\sum \Delta m}, \quad \overline {{y}} = \frac {M _ {x}}{M} = \frac {\sum \tilde {y} \Delta m}{\sum \Delta m}.
$$

These sums are Riemann sums for integrals, and they approach these integrals in the limit as the strips become narrower and narrower. We write these integrals symbolically as 

$$
\overline {{x}} = \frac {\int \tilde {x} d m}{\int d m} \quad \text { and } \quad \overline {{y}} = \frac {\int \tilde {y} d m}{\int d m}.
$$

Moments, Mass, and Center of Mass of a Thin Plate Covering a Region in the xy-Plane 

Moment about the x-axis: 

$$
M _ {x} = \int \tilde {y} d m
$$

Moment about the y-axis: 

$$
M _ {y} = \int \tilde {x} d m
$$

Mass: 

$$
M = \int d m\tag{5}
$$

Center of mass: 

$$
\overline {{{{x}}}} = \frac {M _ {y}}{M}, \quad \overline {{{{y}}}} = \frac {M _ {x}}{M}
$$

![[0bc9d6c43e161aa872845728e2be8f8ed30f3c2bfb7a7ec375ca6122fdd9a004.jpg|image]]



FIGURE 6.49 The plate in Example 2.


![[6ce053c9011b326f11b3a9e119b8adb837cd079d55a5728599d6a4151c99e110.jpg|image]]



FIGURE 6.50 Modeling the plate in Example 2 with vertical strips.


![[c53181ebb386a966fd7daa74486b3b46f21d128f22aa705a13c3883b343fa057.jpg|image]]



FIGURE 6.51 Modeling the plate in Example 2 with horizontal strips.


Although we do not indicate the limits of integration, the integrals that appear in Equation (5) are definite integrals. 

The differential dm in these integrals is the mass of the strip. For this section, we assume the density $\delta$ of the plate is a constant or a continuous function of x or of y. Then $dm = \delta dA$ , which is the mass per unit area $\delta$ times the area dA of the strip. 

To evaluate the integrals in Equations (5), we picture the plate in the coordinate plane and sketch a strip of mass parallel to one of the coordinate axes. We then express the strip's mass $dm$ and the coordinates $(\tilde{x},\tilde{y})$ of the strip's center of mass in terms of $x$ or $y$ . Finally, we integrate $\tilde{y} dm$ , $\tilde{x} dm$ , and $dm$ between limits of integration determined by the plate's location in the plane. 

**EXAMPLE 2** The triangular plate shown in Figure 6.49 has a constant density of $\delta = 3\mathrm{g/cm}^2$ . 

(a) Find the plate's moment $M_y$ about the y-axis. 

(b) Find the plate's mass $M$ . 

(c) Find the $x$ -coordinate of the plate's center of mass (c.m.). 

**Solution** Method 1: Vertical Strips (Figure 6.50) 

(a) The moment $M_{y}$ : The typical vertical strip has the following relevant data. 

center of mass (c.m.): $(\tilde{x}, \tilde{y}) = (x, x)$ length: 2x
width: dx
area: dA = 2x dx
mass: dm = δ dA = 3 · 2x dx = 6x dx
distance of c.m. from y-axis: $\tilde{x} = x$ 

The moment of the strip about the y-axis is 

$$
\tilde {x} d m = x \cdot 6 x d x = 6 x ^ {2} d x.
$$

The moment of the plate about the y-axis is therefore 

$$
M _ {y} = \int \tilde {x} d m = \int_ {0} ^ {1} 6 x ^ {2} d x = 2 x ^ {3} \bigg ] _ {0} ^ {1} = 2 \mathrm{g} \cdot \mathrm{cm}.
$$

(b) The plate's mass: 

$$
M = \int d m = \int_ {0} ^ {1} 6 x d x = 3 x ^ {2} \bigg | _ {0} ^ {1} = 3 \mathrm{g}.
$$

(c) The $x$ -coordinate of the plate's center of mass: 

$$
\overline {{{x}}} = \frac {M _ {\mathrm{y}}}{M} = \frac {2 \mathrm{g} \cdot \mathrm{cm}}{3 \mathrm{g}} = \frac {2}{3} \mathrm{cm}.
$$

By a similar computation, we could find $M_x$ and $\overline{y} = M_x / M$ . 

Method 2: Horizontal Strips (Figure 6.51) 

(a) The moment $M_y$ : The $y$ -coordinate of the center of mass of a typical horizontal strip is $y$ (see the figure), so 

$$
\tilde {y} = y.
$$

The $x$ -coordinate is the $x$ -coordinate of the point halfway across the triangle. This makes it the average of $y/2$ (the strip's left-hand $x$ -value) and 1 (the strip's right-hand $x$ -value): 

$$
\tilde {x} = \frac {(y / 2) + 1}{2} = \frac {y}{4} + \frac {1}{2} = \frac {y + 2}{4}.
$$

We also have 

$$
1 - \frac {y}{2} = \frac {2 - y}{2}
$$

width: dy 

$$
\text { area: } \quad d A = \frac {2 - y}{2} d y
$$

$$
\text { mass: } \quad d m = \delta d A = 3 \cdot \frac {2 - y}{2} d y
$$

distance of c.m. to y-axis: $\tilde{x} = \frac{y + 2}{4}$ . 

The moment of the strip about the y-axis is 

$$
\tilde {x} d m = \frac {y + 2}{4} \cdot 3 \cdot \frac {2 - y}{2} d y = \frac {3}{8} (4 - y ^ {2}) d y.
$$

The moment of the plate about the y-axis is 

$$
M _ {y} = \int \tilde {x} d m = \int_ {0} ^ {2} \frac {3}{8} (4 - y ^ {2}) d y = \frac {3}{8} \left[ 4 y - \frac {y ^ {3}}{3} \right] _ {0} ^ {2} = \frac {3}{8} \left(\frac {1 6}{3}\right) = 2 \mathrm{g} \cdot \mathrm{cm}.
$$

(b) The plate's mass: 

$$
M = \int d m = \int_ {0} ^ {2} \frac {3}{2} (2 - y) d y = \frac {3}{2} \left[ 2 y - \frac {y ^ {2}}{2} \right] _ {0} ^ {2} = \frac {3}{2} (4 - 2) = 3 \mathrm{g}.
$$

(c) The $x$ -coordinate of the plate's center of mass: 

$$
\overline {{{x}}} = \frac {M _ {\mathrm{y}}}{M} = \frac {2 \mathrm{g} \cdot \mathrm{cm}}{3 \mathrm{g}} = \frac {2}{3} \mathrm{cm}.
$$

By a similar computation, we could find $M_{x}$ and $\overline{y}$ . 

If the distribution of mass in a thin, flat plate has an axis of symmetry, the center of mass will lie on this axis. If there are two axes of symmetry, the center of mass will lie at their intersection. These facts often help to simplify our work. 

![[e0895867d495d2daa349b7ec849573e6ba6cf2019c38efa60cffa1ab3610dd0d.jpg|image]]


**EXAMPLE 3** Find the center of mass of a thin plate covering the region bounded above by the parabola $y = 4 - x^{2}$ and below by the x-axis (Figure 6.52). Assume the density of the plate at the point $(x, y)$ is $\delta = 2x^{2}$ , which is twice the square of the distance from the point to the y-axis. 

**Solution** The mass distribution is symmetric about the y-axis, so $\overline{x} = 0$ . We model the distribution of mass with vertical strips, since the density is given as a function of the variable x. The typical vertical strip (see Figure 6.52) has the following relevant data. 


FIGURE 6.52 Modeling the plate in Example 3 with vertical strips.


$$
\begin{array}{l l} \text {center of mass (c.m.):} & (\tilde {x}, \tilde {y}) = \left(x, \frac {4 - x ^ {2}}{2}\right) \\ \text {length:} & 4 - x ^ {2} \\ \text {width:} & d x \\ \text {area:} & d A = (4 - x ^ {2}) d x \\ \text {mass:} & d m = \delta d A = \delta (4 - x ^ {2}) d x \\ \text {distance from c.m. to x - axis:} & \tilde {y} = \frac {4 - x ^ {2}}{2}. \end{array}
$$

The moment of the strip about the x-axis is 

$$
\tilde {y} d m = \frac {4 - x ^ {2}}{2} \cdot \delta (4 - x ^ {2}) d x = \frac {\delta}{2} (4 - x ^ {2}) ^ {2} d x.
$$

The moment of the plate about the x-axis is 

$$
\begin{array}{l} M _ {x} = \int \tilde {y} d m = \int_ {- 2} ^ {2} \frac {\delta}{2} (4 - x ^ {2}) ^ {2} d x = \int_ {- 2} ^ {2} x ^ {2} (4 - x ^ {2}) ^ {2} d x \\ = \int_ {- 2} ^ {2} (1 6 x ^ {2} - 8 x ^ {4} + x ^ {6}) d x = \frac {2 0 4 8}{1 0 5}. \end{array}
$$

The mass of the plate is 


FIGURE 6.53 Modeling the plate bounded by two curves with vertical strips. The strip c.m. is halfway, so $\tilde{y} = \frac{1}{2}[f(x) + g(x)]$ .


$$
\begin{array}{l} M = \int d m = \int_ {- 2} ^ {2} \delta (4 - x ^ {2}) d x = \int_ {- 2} ^ {2} 2 x ^ {2} (4 - x ^ {2}) d x \\ = \int_ {- 2} ^ {2} (8 x ^ {2} - 2 x ^ {4}) d x = \frac {2 5 6}{1 5}. \end{array}
$$

![[02d7ee32f5bb0fdaa87b100aa5df2da148e8c66e1bdd6ae182a4e749451cc8d2.jpg|image]]


Therefore, 

$$
\overline {{{y}}} = \frac {M _ {x}}{M} = \frac {2 0 4 8}{1 0 5} \cdot \frac {1 5}{2 5 6} = \frac {8}{7}.
$$

The plate's center of mass is 

$$
(\overline {{x}}, \overline {{y}}) = \Big (0, \frac {8}{7} \Big).
$$

## Plates Bounded by Two Curves

Suppose a plate covers a region that lies between two curves $y = g(x)$ and $y = f(x)$ , where $f(x) \geq g(x)$ and $a \leq x \leq b$ . The typical vertical strip (see Figure 6.53) has 

center of mass (c.m.): 

$$
\begin{array}{l l} \text {(c.m.):} & (\tilde {x}, \tilde {y}) = \left(x, \frac {1}{2} [ f (x) + g (x) ]\right) \\ \text {length:} & f (x) - g (x) \\ \text {width:} & d x \\ \text {area:} & d A = [ f (x) - g (x) ] d x \\ \text {mass:} & d m = \delta d A = \delta [ f (x) - g (x) ] d x. \end{array}
$$

The moment of the plate about the y-axis is 

$$
M _ {y} = \int \tilde {x} d m = \int_ {a} ^ {b} x \delta [ f (x) - g (x) ] d x,
$$

and the moment about the x-axis is 

$$
\begin{array}{l} M _ {x} = \int \tilde {y} d m = \int_ {a} ^ {b} \frac {1}{2} [ f (x) + g (x) ] \cdot \delta [ f (x) - g (x) ] d x \\ = \int_ {a} ^ {b} \frac {\delta}{2} [ f ^ {2} (x) - g ^ {2} (x) ] d x. \end{array}
$$

These moments give us the following formulas. 

$$
\overline {{x}} = \frac {1}{M} \int_ {a} ^ {b} \delta x [ f (x) - g (x) ] d x\tag{6}
$$

$$
\overline {{y}} = \frac {1}{M} \int_ {a} ^ {b} \frac {\delta}{2} \big [ f ^ {2} (x) - g ^ {2} (x) \big ] d x\tag{7}
$$

![[610013bf3df6e45effa71620114f8bea30b2d6bfda3894f3f53ed69c142c91ab.jpg|image]]



FIGURE 6.54 The region in Example 4.


**EXAMPLE 4** Find the center of mass for the thin plate bounded by the curves $g(x) = x / 2$ and $f(x) = \sqrt{x}$ , $0 \leq x \leq 1$ (Figure 6.54), using Equations (6) and (7) with the density function $\delta(x) = x^2$ . 

**Solution** We first compute the mass of the plate, using $dm = \delta[f(x) - g(x)] dx$ : 

$$
M = \int_ {0} ^ {1} x ^ {2} \left(\sqrt {x} - \frac {x}{2}\right) d x = \int_ {0} ^ {1} \left(x ^ {5 / 2} - \frac {x ^ {3}}{2}\right) d x = \left[ \frac {2}{7} x ^ {7 / 2} - \frac {1}{8} x ^ {4} \right] _ {0} ^ {1} = \frac {9}{5 6}.
$$

Then, from Equations (6) and (7) we get 

$$
\begin{array}{r l} \overline {{{x}}} & = \frac {5 6}{9} \int_ {0} ^ {1} x ^ {2} \cdot x \left(\sqrt {x} - \frac {x}{2}\right) d x \\ & = \frac {5 6}{9} \int_ {0} ^ {1} \left(x ^ {7 / 2} - \frac {x ^ {4}}{2}\right) d x \\ & = \frac {5 6}{9} \left[ \frac {2}{9} x ^ {9 / 2} - \frac {1}{1 0} x ^ {5} \right] _ {0} ^ {1} = \frac {3 0 8}{4 0 5}, \end{array}
$$

and 

$$
\begin{array}{r l} \overline {{{y}}} & = \frac {5 6}{9} \int_ {0} ^ {1} \frac {x ^ {2}}{2} \left(x - \frac {x ^ {2}}{4}\right) d x \\ & = \frac {2 8}{9} \int_ {0} ^ {1} \left(x ^ {3} - \frac {x ^ {4}}{4}\right) d x \\ & = \frac {2 8}{9} \left[ \frac {1}{4} x ^ {4} - \frac {1}{2 0} x ^ {5} \right] _ {0} ^ {1} = \frac {2 8}{4 5}. \end{array}
$$

The center of mass is shown in Figure 6.54. 

![[021c65bc80aa536e001fb70b75df9da3daa625cf9cdf0ae6f76f221ae9b479aa.jpg|image]]


## Centroids

The center of mass in Example 4 is not located at the geometric center of the region. This is due to the region's nonuniform density. When the density function is constant, it cancels out of the numerator and denominator of the formulas for $\overline{x}$ and $\overline{y}$ . Thus, when the density is constant, the location of the center of mass is a feature of the geometry of the object and not of the material from which it is made. In such cases, engineers may call the center of mass the centroid of the shape, as in "Find the centroid of a triangle or a solid cone." To do so, just set $\delta$ equal to 1 and proceed to find $\overline{x}$ and $\overline{y}$ as before, by dividing moments by masses. 

![[257257eefd602c041be3222f8f610be65e8a87f2a5a97835705e11e6ec1959a2.jpg|image]]



FIGURE 6.55 The semicircular wire in Example 5. (a) The dimensions and variables used in finding the center of mass. (b) The center of mass does not lie on the wire.


**EXAMPLE 5** Find the center of mass (centroid) of a thin wire of constant density $\delta$ shaped like a semicircle of radius a. 

**Solution** We model the wire with the semicircle $y = \sqrt{a^{2} - x^{2}}$ (Figure 6.55). The distribution of mass is symmetric about the y-axis, so $\bar{x} = 0$ . To find $\bar{y}$ , we imagine the wire divided into short subarc segments. If $(\tilde{x}, \tilde{y})$ is the center of mass of a subarc and $\theta$ is the angle between the x-axis and the radial line joining the origin to $(\tilde{x}, \tilde{y})$ , then $\tilde{y} = a \sin \theta$ is a function of the angle $\theta$ measured in radians (see Figure 6.55a). The length ds of the subarc containing $(\tilde{x}, \tilde{y})$ subtends an angle of $d\theta$ radians, so ds = a d $\theta$ . Thus a typical subarc segment has these relevant data for calculating $\bar{y}$ : 

$$
\begin{array}{r l r} \text {length:} & d s = a   d \theta \\ \text {mass:} & d m = \delta   d s = \delta a   d \theta & \text {Mass per unit length} \\ \text {distance of c.m. to x - axis:} & \tilde {y} = a   \sin \theta . \end{array}
$$

Hence, 

$$
\overline {{{y}}} = \frac {\int \tilde {y} d m}{\int d m} = \frac {\int_ {0} ^ {\pi} a \sin \theta \cdot \delta a d \theta}{\int_ {0} ^ {\pi} \delta a d \theta} = \frac {\delta a ^ {2} [ - \cos \theta ] _ {0} ^ {\pi}}{\delta a \pi} = \frac {2}{\pi} a.
$$

The center of mass lies on the axis of symmetry at the point $(0, 2a/\pi)$ , about two-thirds of the way up from the origin (Figure 6.55b). Notice how $\delta$ cancels in the equation for $\overline{y}$ , so we could have set $\delta = 1$ everywhere and obtained the same value for $\overline{y}$ . 

In Example 5 we found the center of mass of a thin wire lying along the graph of a differentiable function in the xy-plane. In Chapter 15 we will learn how to find the center of mass of a wire lying along a more general smooth curve in the plane or in space. 

![[7170676b0498c8bd1c77a6a7a8a872828f71dc45f5ad9e3e55cde276eded5565.jpg|image]]



FIGURE 6.56 The force against one side of the plate is $w \cdot \overline{h} \cdot$ plate area.


## Fluid Forces and Centroids

If we know the location of the centroid of a submerged flat vertical plate (Figure 6.56), we can take a shortcut to find the force against one side of the plate. From Equation (7) in Section 6.5, and the definition of the moment about the x-axis, we have 

$$
\begin{array}{l} F = \int_ {a} ^ {b} w \times (\text { strip   depth }) \times L (y) d y \\ = w \int_ {a} ^ {b} (\text { strip   depth }) \times L (y) d y \\ = w \times (\text { moment   about   surface   level   line   of   region   occupied   by   plate }) \\ = w \times (\text { depth   of   plate's   centroid }) \times (\text { area   of   plate }). \end{array}
$$

## Fluid Forces and Centroids

The force of a fluid of weight-density $w$ against one side of a submerged flat vertical plate is the product of $w$ , the distance $\overline{h}$ from the plate's centroid to the fluid surface, and the plate's area: 

$$
F = w \overline {{h}} A.\tag{8}
$$

**EXAMPLE 6** A flat isosceles triangular plate with base 2 m and height 1 m is submerged vertically, base up with its vertex at the origin, so that the base is 0.6 m below the surface of a swimming pool. (This is Example 6, Section 6.5.) Use Equation (8) to find the force exerted by the water against one side of the plate. 

**Solution** The centroid of the triangle (Figure 6.43) lies on the y-axis, one-third of the way from the base to the vertex, so $\overline{h} = 2.8/3$ (where y = 2/3), since the pool's surface is y = 1.6. The triangle's area is 

$$
A = \frac {1}{2} (\text { base }) (\text { height }) = \frac {1}{2} (2) (1) = 1.
$$

Hence, 

$$
F = w \bar {h} A = (9 8 0 0) (2. 8 / 3) (1) = 9 1 4 7 \mathrm{N}.
$$

## The Theorems of Pappus

In the fourth century, an Alexandrian Greek named Pappus discovered two formulas that relate centroids to surfaces and solids of revolution. The formulas provide shortcuts to a number of otherwise lengthy calculations. 

![[b09a269b5f91c51f7d5e7e6b740bae9b2cb3517b65af7e8fb2c9f7cae2d18c27.jpg|image]]



FIGURE 6.57 The region R is to be revolved (once) about the x-axis to generate a solid. A 1700-year-old theorem says that the solid's volume can be calculated by multiplying the region's area by the distance traveled by its centroid during the revolution.


![[944099acf914313f8ed30b2ee937fb22a57abaf16cac4b8284b16664b4fc1d11.jpg|image]]



FIGURE 6.58 With Pappus's first theorem, we can find the volume of a torus without having to integrate (Example 7).


![[5a3e7ef57c1b1cdd9bb018aa60823e360366833fc622a56e39e131bbcd1e681e.jpg|image]]



FIGURE 6.59 With Pappus's first theorem, we can locate the centroid of a semicircular region without having to integrate (Example 8).


## THEOREM 1—Pappus's Theorem for Volumes

If a plane region is revolved once about a line in the plane that does not cut through the region's interior, then the volume of the solid it generates is equal to the region's area times the distance traveled by the region's centroid during the revolution. If $\rho$ is the distance from the axis of revolution to the centroid, then 

$$
V = 2 \pi \rho A.\tag{9}
$$

Proof We draw the axis of revolution as the x-axis with the region R in the first quadrant (Figure 6.57). We let $L(y)$ denote the length of the cross-section of R perpendicular to the y-axis at y. We assume $L(y)$ to be continuous. 

By the method of cylindrical shells, the volume of the solid generated by revolving the region about the x-axis is 

$$
V = \int_ {c} ^ {d} 2 \pi (\text { shell   radius }) (\text { shell   height }) d y = 2 \pi \int_ {c} ^ {d} y L (y) d y.\tag{10}
$$

The $y$ -coordinate of $R$ 's centroid is 

$$
\overline {{{y}}} = \frac {\int_ {c} ^ {d} \tilde {y} d A}{A} = \frac {\int_ {c} ^ {d} y L (y) d y}{A}, \quad \tilde {y} = y, d A = L (y) d y
$$

so that 

$$
\int_ {c} ^ {d} y L (y) d y = A \overline {{y}}.
$$

Substituting $A\overline{y}$ for the last integral in Equation (10) gives $V = 2\pi\overline{y}A$ . With $\rho$ equal to $\overline{y}$ , we have $V = 2\pi\rho A$ . 

**EXAMPLE 7** Find the volume of the torus (doughnut) generated by revolving a circular disk of radius a about an axis in its plane at a distance $b \geq a$ from its center (Figure 6.58). 

**Solution** We apply Pappus's Theorem for volumes. The centroid of a disk is located at its center, the area is $A = \pi a^2$ , and $\rho = b$ is the distance from the centroid to the axis of revolution (see Figure 6.58). Substituting these values into Equation (9), we find the volume of the torus to be 

$$
V = 2 \pi (b) (\pi a ^ {2}) = 2 \pi^ {2} b a ^ {2}.
$$

The next example shows how we can use Equation (9) in Pappus's Theorem to find one of the coordinates of the centroid of a plane region of known area $A$ when we also know the volume $V$ of the solid generated by revolving the region about the other coordinate axis. That is, if $\overline{y}$ is the coordinate we want to find, we revolve the region around the $x$ -axis so that $\overline{y} = \rho$ is the distance from the centroid to the axis of revolution. The idea is that the rotation generates a solid of revolution whose volume $V$ is an already known quantity. Then we can solve Equation (9) for $\rho$ , which is the value of the centroid's coordinate $\overline{y}$ . 

## **EXAMPLE 8** Locate the centroid of a semicircular region of radius a.

**Solution** We consider the region between the semicircle $y = \sqrt{a^{2} - x^{2}}$ (Figure 6.59) and the x-axis and imagine revolving the region about the x-axis to generate a solid sphere. By symmetry, the x-coordinate of the centroid is $\overline{x} = 0$ . With $\overline{y} = \rho$ in Equation (9), we have 

$$
\overline {{y}} = \frac {V}{2 \pi A} = \frac {(4 / 3) \pi a ^ {3}}{2 \pi (1 / 2) \pi a ^ {2}} = \frac {4}{3 \pi} a.
$$

![[6cf4d56756dcd2de18cbf287cf79c515efdc1caaf4859af175f11dde896d114f.jpg|image]]



FIGURE 6.60 Figure for proving Pappus's Theorem for surface area. The arc length differential $ds$ is given by Equation (6) in Section 6.3.


Hence 

## THEOREM 2—Pappus's Theorem for Surface Areas

If an arc of a smooth plane curve is revolved once about a line in the plane that does not cut through the arc's interior, then the area of the surface generated by the arc equals the length $L$ of the arc times the distance traveled by the arc's centroid during the revolution. If $\rho$ is the distance from the axis of revolution to the centroid, then 

$$
S = 2 \pi \rho L.\tag{11}
$$

The proof we give assumes that we can model the axis of revolution as the x-axis and the arc as the graph of a continuously differentiable function of x. 

Proof We draw the axis of revolution as the x-axis with the arc extending from x = a to x = b in the first quadrant (Figure 6.60). The area of the surface generated by the arc is 

$$
S = \int_ {x = a} ^ {x = b} 2 \pi y d s = 2 \pi \int_ {x = a} ^ {x = b} y d s.\tag{12}
$$

The $y$ -coordinate of the arc's centroid is 

$$
\overline {{y}} = \frac {\int_ {x = a} ^ {x = b} \tilde {y} d s}{\int_ {x = a} ^ {x = b} d s} = \frac {\int_ {x = a} ^ {x = b} y d s}{L}. \quad \begin{array}{l} L = \int d s \text {   is   the   arc's } \\ \text { length   and   } \tilde {y} = y. \end{array}
$$

$$
\int_ {x = a} ^ {x = b} y d s = \overline {{{y}}} L.
$$

Substituting $\overline{y}L$ for the last integral in Equation (12) gives $S = 2\pi\overline{y}L$ . With $\rho$ equal to $\overline{y}$ , we have $S = 2\pi\rho L$ . 

**EXAMPLE 9** Use Pappus's area theorem to find the surface area of the torus in Example 7. 

**Solution** From Figure 6.58, the surface of the torus is generated by revolving a circle of radius a about the z-axis, and $b \geq a$ is the distance from the centroid to the axis of revolution. The arc length of the smooth curve generating this surface of revolution is the circumference of the circle, so $L = 2\pi a$ . Substituting these values into Equation (11), we find the surface area of the torus to be 

$$
S = 2 \pi (b) (2 \pi a) = 4 \pi^ {2} b a.
$$

## EXERCISES 6.6

## Mass of a wire

In Exercises 1–6, find the mass M and center of mass $\overline{x}$ of the linear wire covering the given interval and having the given density $\delta(x)$ . 

$$
1. 1 \leq x \leq 4, \delta (x) = \sqrt {x}
$$

$$
2. - 3 \leq x \leq 3, \delta (x) = 1 + 3 x ^ {2}
$$

$$
3. 0 \leq x \leq 3, \delta (x) = \frac {1}{x + 1}
$$

$$
4. 1 \leq x \leq 2, \delta (x) = \frac {8}{x ^ {3}}
$$

$$
\delta (x) = \left\{ \begin{array}{l l} 4, & 0 \leq x \leq 2 \\ 5, & 2 <   x \leq 3 \end{array} \right.
$$

$$
\delta (x) = \left\{ \begin{array}{c c} 2 - x, & 0 \leq x <   1 \\ x, & 1 \leq x \leq 2 \end{array} \right.
$$

Thin Plates with Constant Density 

In Exercises 7–20, find the center of mass of a thin plate of constant density $\delta$ covering the given region. 

7. The region bounded by the parabola $y = x^{2}$ and the line y = 4 

![[9bd13bbb066a2d2109d8d70c75a0eac26a6816290c388a35475d72cca2077070.jpg|image]]


8. The region bounded by the parabola $y = 25 - x^{2}$ and the x-axis 

9. The region bounded by the parabola $y = x - x^2$ and the line $y = -x$ 

10. The region enclosed by the parabolas $y = x^{2} - 3$ and $y = -2x^{2}$ 

11. The region bounded by the $y$ -axis and the curve $x = y - y^3$ , $0 \leq y \leq 1$ 

12. The region bounded by the parabola $x = y^2 - y$ and the line $y = x$ 

13. The region bounded by the $x$ -axis and the curve $y = \cos x$ , $-\pi / 2 \leq x \leq \pi / 2$ 

14. The region between the curve $y = \sec^2 x, -\pi / 4 \leq x \leq \pi / 4$ and the $x$ -axis 

T 15. The region between the curve $y = 1 / x$ and the $x$ -axis from $x = 1$ to $x = 2$ . Give the coordinates to two decimal places. 

16. a. The region cut from the first quadrant by the circle $x^{2} + y^{2} = 9$ 

b. The region bounded by the $x$ -axis and the semicircle $y = \sqrt{9 - x^2}$ 

Compare your answer in part (b) with the answer in part (a). 

17. The region in the first and fourth quadrants enclosed by the curves $y = 1/(1 + x^{2})$ and $y = -1/(1 + x^{2})$ and by the lines x = 0 and x = 1 

18. The region bounded by the parabolas $y = 2x^{2} - 4x$ and $y = 2x - x^{2}$ 

19. The region between the curve $y = 1 / x$ and the $x$ -axis from $x = 1$ to $x = 16$ 

20. The region bounded above by the curve $y = 1 / x^3$ , below by the curve $y = -1 / x^3$ , and on the left and right by the lines $x = 1$ and $x = a > 1$ . Also, find $\lim_{x \to \infty} x$ . 

21. Consider a region bounded by the graphs of $y = x^4$ and $y = x^5$ . Show that the center of mass lies outside the region. 

22. Consider a thin plate of constant density $\delta$ lies in the region bounded by the graphs of $y = \sqrt{x}$ and $x = 2y$ . Find the plate's 

a. moment about the x-axis. 

b. moment about the y-axis. 

c. moment about the line x = 5. 

d. moment about the line x = -1. 

e. moment about the line y = 2. 

f. moment about the line y = -3. 

g. mass. 

h. center of mass. 

## Thin Plates with Varying Density

23. Find the center of mass of a thin plate covering the region between the $x$ -axis and the curve $y = 2 / x^2$ , $1 \leq x \leq 2$ , if the plate's density at the point $(x, y)$ is $\delta(x) = x^2$ . 

24. Find the center of mass of a thin plate covering the region bounded below by the parabola $y = x^{2}$ and above by the line y = x if the plate's density at the point $(x, y)$ is $\delta(x) = 12x$ . 

25. The region bounded by the curves $y = \pm4/\sqrt{x}$ and the lines x = 1 and x = 4 is revolved about the y-axis to generate a solid.
a. Find the volume of the solid. 

b. Find the center of mass of a thin plate covering the region if the plate's density at the point $(x,y)$ is $\delta (x) = 1 / x$ . 

c. Sketch the plate and show the center of mass in your sketch. 

26. The region between the curve $y = 2 / x$ and the $x$ -axis from $x = 1$ to $x = 4$ is revolved about the $x$ -axis to generate a solid. 

a. Find the volume of the solid. 

b. Find the center of mass of a thin plate covering the region if the plate's density at the point $(x, y)$ is $\delta(x) = \sqrt{x}$ . 

c. Sketch the plate and show the center of mass in your sketch. 

## Centroids of Triangles

27. The centroid of a triangle lies at the intersection of the triangle's medians You may recall that the point inside a triangle that lies one-third of the way from each side toward the opposite vertex is the point where the triangle's three medians intersect. Show that the centroid lies at the intersection of the medians by showing that it too lies one-third of the way from each side toward the opposite vertex. To do so, take the following steps. 

i) Stand one side of the triangle on the x-axis as in part (b) of the accompanying figure. Express dm in terms of L and dy. 

ii) Use similar triangles to show that $L = (b / h)(h - y)$ . Substitute this expression for $L$ in your formula for $dm$ . 

iii) Show that $\overline{y} = h / 3$ . 

iv) Extend the argument to the other sides. 

![[cab2716255d7bd9e3fb832d54f429c6f757a9fc39ce8569c7fa9691a1d6f1c90.jpg|image]]


![[7b831bc1130bf001e892993e0fd1640e2dd69449b5e4b6b43670f59f274adfe1.jpg|image]]



(a)



(b)


Use the result in Exercise 27 to find the centroids of the triangles whose vertices appear in Exercises 28–32. Assume a, b > 0. 

$$
\mathbf {2 8 .} (- 1, 0), (1, 0), (0, 3)
$$

29. $(0,0)$ , $(1,0)$ , $(0,1)$ 

30. $(0,0)$ , $(a,0)$ , $(0,a)$ 

31. $(0,0)$ , $(a,0)$ , $(0,b)$ 

32. $(0,0),(a,0),(a / 2,b)$ 

Thin Wires 

33. Constant density Find the moment about the x-axis of a wire of constant density that lies along the curve $y = \sqrt{x}$ from x = 0 to x = 2. 

34. Constant density Find the moment about the x-axis of a wire of constant density that lies along the curve $y = x^{3}$ from x = 0 to x = 1. 

35. Variable density Suppose that the density of the wire in Example 5 is $\delta = k \sin \theta$ (k constant). Find the center of mass. 

36. Variable density Suppose that the density of the wire in Example 5 is $\delta = 1 + k|\cos \theta |$ ( $k$ constant). Find the center of mass. 

## Plates Bounded by Two Curves

In Exercises 37–40, find the centroid of the thin plate bounded by the graphs of the given functions. Use Equations (6) and (7) with $\delta = 1$ and M = area of the region covered by the plate. 

37. $g(x) = x^{2}$ and $f(x) = x + 6$ 

38. $g(x) = x^{2}(x + 1)$ , $f(x) = 2$ , and x = 0 

39. $g(x) = x^{2}(x - 1)$ and $f(x) = x^2$ 

40. $g(x) = 0,\quad f(x) = 2 + \sin x,\quad x = 0,\quad \text{and}\quad x = 2\pi$ 

(Hint: $\int x\sin x dx = \sin x - x\cos x + C.$ ) 

## Theory and Examples

Verify the statements and formulas in Exercises 41 and 42. 

41. The coordinates of the centroid of a differentiable plane curve are 

$$
\overline {{x}} = \frac {\int x d s}{\text { length }}, \quad \overline {{y}} = \frac {\int y d s}{\text { length }}.
$$

![[1c07b3b2cb4a421a1b2ef367cea8f198123360e16c91a04007803c6184b5ed44.jpg|image]]


42. Whatever the value of $p > 0$ in the equation $y = x^2 / (4p)$ , the $y$ -coordinate of the centroid of the parabolic segment shown here is $\overline{y} = (3/5)a$ . 

![[c20b2c032d71a228cbfb8d8af81e50f5ea7eee5b298e546e16c28d08ff5dfee2.jpg|image]]


## The Theorems of Pappus

43. The square region with vertices $(0,2)$ , $(2,0)$ , $(4,2)$ , and $(2,4)$ is revolved about the x-axis to generate a solid. Find the volume and surface area of the solid. 

44. Use a theorem of Pappus to find the volume generated by revolving about the line x = 5 the triangular region bounded by the coordinate axes and the line $2x + y = 6$ (see Exercise 27). 

45. Find the volume of the torus generated by revolving the circle $(x - 2)^{2} + y^{2} = 1$ about the y-axis. 

46. Use the theorems of Pappus to find the lateral surface area and the volume of a right-circular cone. 

47. Use Pappus's Theorem for surface area and the fact that the surface area of a sphere of radius $a$ is $4\pi a^2$ to find the centroid of the semicircle $y = \sqrt{a^2 - x^2}$ . 

48. As found in Exercise 47, the centroid of the semicircle $y = \sqrt{a^2 - x^2}$ lies at the point $(0, 2a / \pi)$ . Find the area of the surface swept out by revolving the semicircle about the line $y = a$ . 

49. The area of the region R enclosed by the semiellipse $y = (b/a)\sqrt{a^{2} - x^{2}}$ and the x-axis is $(1/2)\pi ab$ , and the volume of the ellipsoid generated by revolving R about the x-axis is $(4/3)\pi ab^{2}$ . Find the centroid of R. Notice that the location is independent of a. 

50. As found in Example 8, the centroid of the region enclosed by the x-axis and the semicircle $y = \sqrt{a^{2} - x^{2}}$ lies at the point $(0, 4a/3\pi)$ . Find the volume of the solid generated by revolving this region about the line y = -a. 

51. The region of Exercise 50 is revolved about the line y = x - a to generate a solid. Find the volume of the solid. 

52. As found in Exercise 47, the centroid of the semicircle $y = \sqrt{a^2 - x^2}$ lies at the point $(0, 2a / \pi)$ . Find the area of the surface generated by revolving the semicircle about the line $y = x - a$ . 

In Exercises 53 and 54, use a theorem of Pappus to find the centroid of the given triangle. Use the fact that the volume of a cone of radius r and height h is $V = \frac{1}{3} \pi r^{2} h$ . 


53.


![[9b9aa09273e7720f24cc29699031e9f65f1b183ea2e36c4f5a7823176a3a27a5.jpg|image]]



54.


![[ac57da0c13699c9fe86ce93052f2cd81a7952e4e64c2e435e662bff74afd6778.jpg|image]]


## CHAPTER 6 Questions to Guide Your Review

1. How do you define and calculate the volumes of solids by the method of slicing? Give an example. 

2. How are the disk and washer methods for calculating volumes derived from the method of slicing? Give examples of volume calculations by these methods. 

3. Describe the method of cylindrical shells. Give an example. 

4. How do you find the length of the graph of a smooth function over a closed interval? Give an example. What about functions that do not have continuous first derivatives? 

5. How do you define and calculate the area of the surface swept out by revolving the graph of a smooth function $y = f(x)$ , $a \leq x \leq b$ , about the x-axis? Give an example. 

6. How do you define and calculate the work done by a variable force directed along a portion of the x-axis? How do you calculate the work it takes to pump a liquid from a tank? Give examples. 

7. What is a center of mass? What is a centroid? 

8. How do you locate the center of mass of a thin flat plate of material? Give an example. 

9. How do you locate the center of mass of a thin plate bounded by two curves $y = f(x)$ and $y = g(x)$ over $a \leq x \leq b$ ? 

## CHAPTER 6 Practice Exercises

## Volumes

Find the volumes of the solids in Exercises 1–18. 

1. The solid lies between planes perpendicular to the x-axis at x = 0 and x = 1. The cross-sections perpendicular to the x-axis between these planes are circular disks whose diameters run from the parabola $y = x^{2}$ to the parabola $y = \sqrt{x}$ . 

2. The base of the solid is the region in the first quadrant between the line y = x and the parabola $y = 2\sqrt{x}$ . The cross-sections of the solid perpendicular to the x-axis are equilateral triangles whose bases stretch from the line to the curve. 

3. The solid lies between planes perpendicular to the x-axis at $x = \pi/4$ and $x = 5\pi/4$ . The cross-sections between these planes are circular disks whose diameters run from the curve $y = 2 \cos x$ to the curve $y = 2 \sin x$ . 

4. The solid lies between planes perpendicular to the x-axis at x = 0 and x = 6. The cross-sections between these planes are squares whose bases run from the x-axis up to the curve $x^{1/2} + y^{1/2} = \sqrt{6}$ . 

![[03113d6fae71b5705502761ead07f25527a0b4077173edf1708efb17db35641e.jpg|image]]


5. The solid lies between planes perpendicular to the x-axis at x = 0 and x = 4. The cross-sections of the solid perpendicular to the x-axis between these planes are circular disks whose diameters run from the curve $x^{2} = 4y$ to the curve $y^{2} = 4x$ . 

6. The base of the solid is the region bounded by the parabola $y^{2} = 4x$ and the line x = 1 in the xy-plane. Each cross-section perpendicular to the x-axis is an equilateral triangle with one edge in the plane. (The triangles all lie on the same side of the plane.) 

7. Find the volume of the solid generated by revolving the region bounded by the x-axis, the curve $y = 3x^{4}$ , and the lines x = 1 and x = -1 about (a) the x-axis; (b) the y-axis; (c) the line x = 1; (d) the line y = 3. 

8. Find the volume of the solid generated by revolving the “triangular” region bounded by the curve $y = 4/x^{3}$ and the lines x = 1 and y = 1/2 about (a) the x-axis; (b) the y-axis; (c) the line x = 2; (d) the line y = 4. 

9. Find the volume of the solid generated by revolving the region bounded on the left by the parabola $x = y^{2} + 1$ and on the right by the line x = 5 about (a) the x-axis; (b) the y-axis; (c) the line x = 5. 

10. Find the volume of the solid generated by revolving the region bounded by the parabola $y^{2} = 4x$ and the line y = x about (a) the x-axis; (b) the y-axis; (c) the line x = 4; (d) the line y = 4. 

11. Find the volume of the solid generated by revolving the “triangular” region bounded by the x-axis, the line $x = \pi/3$ , and the curve $y = \tan x$ in the first quadrant about the x-axis. 

12. Find the volume of the solid generated by revolving the region bounded by the curve $y = \sin x$ and the lines $x = 0, x = \pi$ , and y = 2 about the line y = 2. 

13. Find the volume of the solid generated by revolving the region bounded by the curve $x = e^{y^{2}}$ and the lines y = 0, x = 0, and y = 1 about the x-axis. 

14. Find the volume of the solid generated by revolving about the $x$ -axis the region bounded by $y = 2\tan x$ , $y = 0$ , $x = -\pi /4$ , and $x = \pi /4$ . (The region lies in the first and third quadrants and resembles a skewed bowtie.) 

15. Volume of a solid sphere hole A round hole of radius $\sqrt{3}$ m is bored through the center of a solid sphere of radius 2 m. Find the volume of material removed from the sphere. 

16. Volume of a football A football resembles the surface of revolution obtained by revolving the ellipse shown here around the $x$ -axis. Find the football's volume to the nearest cubic centimeter. 

![[21edc35ed54aca29552ee74fdc6913b6b6f7335e1cbfefd9a5338af93ac2a06c.jpg|image]]


17. Set up and evaluate an integral to find the volume of the given circular frustum of height h and radii a and b. 

![[0e4024b3ca2287b7779ad3709adb9ed32356ec905bc11ac71a150a48b50da369.jpg|image]]


18. The graph of $x^{2/3} + y^{2/3} = 1$ is called an astroid and is given below. Find the volume of the solid formed by revolving the region enclosed by the astroid about the x-axis. 

![[968fb3af407e938acd431e3f1edd4605b9f84165fec204d473efa277843db449.jpg|image]]


## Lengths of Curves

Find the lengths of the curves in Exercises 19-24. 

19. $y = x^{1 / 2} - (1 / 3)x^{3 / 2}, 1\leq x\leq 4$ 

20. $x = y^{2 / 3}$ ， $1\leq y\leq 8$ 

21. $y = x^{2} - (\ln x) / 8, \quad 1 \leq x \leq 2$ 

22. $x = (y^3 / 12) + (1 / y), 1 \leq y \leq 2$ 

$$
2 3. y = \arcsin x - \sqrt {1 - x ^ {2}}, 0 \leq x \leq \frac {3}{4}
$$

24. $y = \frac{2}{3} x^{3 / 2} - 1, 0 \leq x \leq 1$ 

## Areas of Surfaces of Revolution

In Exercises 25–28, find the areas of the surfaces generated by revolving the curves about the given axes. 

25. $y = \sqrt{2x + 1}$ , $0 \leq x \leq 3$ ; x-axis 

26. $y = x^3 / 3, \quad 0 \leq x \leq 1; \quad x$ -axis 

27. $x = \sqrt{4y - y^2}$ , $1 \leq y \leq 2$ ; $y$ -axis 

28. $x = \sqrt{y}, \quad 2 \leq y \leq 6; \quad y$ -axis 

## Work

29. Lifting equipment A rock climber is about to haul up 100 N of equipment that has been hanging beneath her on 40 m of rope that weighs 0.8 N/m. How much work will it take? (Hint: Solve for the rope and equipment separately, then add.) 

30. Leaky tank truck You drove an 4000-L tank truck of water from the base of Mt. Washington to the summit and discovered on arrival that the tank was only half full. You started with a full tank, climbed at a steady rate, and accomplished the 1500-m elevation change in 50 min. Assuming that the water leaked out at a steady rate, how much work was spent in carrying water to the top? Do not count the work done in getting yourself and the truck there. Water weighs 9.8 N/L. 

31. Earth's attraction The force of attraction on an object below Earth's surface is directly proportional to its distance from Earth's center. Find the work done in moving a weight of $w$ N located $a$ km below Earth's surface up to the surface itself. Assume Earth's radius is a constant $r$ km. 

32. Garage door spring A force of 200 N will stretch a garage door spring 0.8 m beyond its unstressed length. How far will a 300-N force stretch the spring? How much work does it take to stretch the spring this far from its unstressed length? 

33. Pumping a reservoir A reservoir shaped like a right-circular cone, point down, 20 m across the top and 8 m deep, is full of water. How much work does it take to pump the water to a level 6 m above the top? 

34. Pumping a reservoir (Continuation of Exercise 33.) The reservoir is filled to a depth of 5 m, and the water is to be pumped to the same level as the top. How much work does it take? 

35. Pumping a conical tank A right-circular conical tank, point down, with top radius 5 m and height 10 m, is filled with a liquid whose weight-density is $9000 \, N/m^{3}$ . How much work does it take to pump the liquid to a point 2 m above the tank? If the pump is driven by a motor rated at 41,250 J/s, how long will it take to empty the tank? 

36. Pumping a cylindrical tank A storage tank is a right-circular cylinder 6 m long and 2.5 m in diameter with its axis horizontal. If the tank is half full of olive oil weighing 8950 N/m $^{3}$ , find the work done in emptying it through a pipe that runs from the bottom of the tank to an outlet that is 2 m above the top of the tank. 

37. Assume that a spring does not follow Hooke's Law. Instead, the force required to stretch the spring $x$ m from its natural length is $F(x) = 5x^{3/2}$ N. How much work does it take to 

a. stretch the spring 2 m from its natural length? 

b. stretch the spring from an initial 1 m past its natural length to 3 m past its natural length? 

38. Assume that a spring does not follow Hooke's Law. Instead, the force required to stretch the spring $x$ m from its natural length is $F(x) = k\sqrt{5 + x^2}$ N. 

a. If a 3-N force stretches the spring 2 m, find the value of k. 

b. How much work is required to stretch the spring 1 m from its natural length? 

## Centers of Mass and Centroids

39. Find the centroid of a thin, flat plate covering the region enclosed by the parabolas $y = 2x^{2}$ and $y = 3 - x^{2}$ . 

40. Find the centroid of a thin, flat plate covering the region enclosed by the x-axis, the lines x = 2 and x = -2, and the parabola $y = x^{2}$ . 

41. Find the centroid of a thin, flat plate covering the “triangular” region in the first quadrant bounded by the y-axis, the parabola $y = x^{2}/4$ , and the line y = 4. 

42. Find the centroid of a thin, flat plate covering the region enclosed by the parabola $y^{2} = x$ and the line x = 2y. 

43. Find the center of mass of a thin, flat plate covering the region enclosed by the parabola $y^{2} = x$ and the line x = 2y if the density function is $\delta(y) = 1 + y$ . (Use horizontal strips.) 

44. a. Find the center of mass of a thin plate of constant density covering the region between the curve $y = 3/x^{3/2}$ and the x-axis from x = 1 to x = 9. 

b. Find the plate's center of mass if, instead of being constant, the density is $\delta(x) = x$ . (Use vertical strips.) 

## Fluid Force

45. Trough of water The vertical triangular plate shown here is the end plate of a trough full of water (w = 9800). What is the fluid force against the plate? 

![[32c0cb5953b95a1e40d5bc6212c63799a9707aeb6f024e91f8d14ed220f07b9b.jpg|image]]



UNITS IN METERS


46. Trough of maple syrup The vertical trapezoidal plate shown here is the end plate of a trough full of maple syrup weighing $11,000 \, N/m^{3}$ . What is the force exerted by the syrup against the end plate of the trough when the syrup is 0.5 m deep? 

![[c3a4c66ab6b780d1678db1a899b7b5df752c68612bb25b5d922bcbf7518b63c0.jpg|image]]



UNITS IN METERS


47. Force on a parabolic gate A flat vertical gate in the face of a dam is shaped like the parabolic region between the curve $y = 4x^{2}$ and the line y = 4, with measurements in meters. The top of the gate lies 5 m below the surface of the water. Find the force exerted by the water against the gate (w = 9800). 

T 48. You plan to store mercury ( $w = 133,350 \, N/m^{3}$ ) in a vertical rectangular tank with a 0.3 m square base side whose interior side wall can withstand a total fluid force of 150,000 N. About how many cubic meters of mercury can you store in the tank at any one time? 

## CHAPTER 6 Additional and Advanced Exercises

## Volume and Length

1. A solid is generated by revolving about the x-axis the region bounded by the graph of the positive continuous function $y = f(x)$ , the x-axis, the fixed line x = a, and the variable line x = b, b > a. Its volume, for all b, is $b^{2} - ab$ . Find $f(x)$ . 

2. A solid is generated by revolving about the x-axis the region bounded by the graph of the positive continuous function $y = f(x)$ , the x-axis, and the lines x = 0 and x = a. Its volume, for all a > 0, is $a^{2} + a$ . Find $f(x)$ . 

3. Suppose that the increasing function $f(x)$ is smooth for $x \geq 0$ and that $f(0) = a$ . Let $s(x)$ denote the length of the graph of $f$ from $(0, a)$ to $(x, f(x))$ , $x > 0$ . Find $f(x)$ if $s(x) = Cx$ for some constant $C$ . What are the allowable values for $C$ ? 

4. a. Show that for $0 < \alpha \leq \pi / 2$ , 

$$
\int_ {0} ^ {\alpha} \sqrt {1 + \cos^ {2} \theta} d \theta > \sqrt {\alpha^ {2} + \sin^ {2} \alpha}.
$$

b. Generalize the result in part (a). 

5. Find the volume of the solid formed by revolving the region bounded by the graphs of $y = x$ and $y = x^2$ about the line $y = x$ . 

6. Consider a right-circular cylinder of diameter 1. Form a wedge by making one slice parallel to the base of the cylinder completely through the cylinder, and another slice at an angle of $45^{\circ}$ to the first slice and intersecting the first slice at the opposite edge of the cylinder (see accompanying diagram). Find the volume of the wedge. 

![[9cd3899dc7707129c27d2f1e5823b005480e0d20433e632ca970cd7500801b9d.jpg|image]]


## Surface Area

7. At points on the curve $y = 2\sqrt{x}$ , line segments of length h = y are drawn perpendicular to the xy-plane. (See accompanying figure.) Find the area of the surface formed by these perpendiculars from $(0, 0)$ to $(3, 2\sqrt{3})$ . 

![[8b55afb393acbc12cf75cafbcbd9d0d5d948c9d5e04df7799d517d277ef8e93e.jpg|image]]


8. At points on a circle of radius $a$ , line segments are drawn perpendicular to the plane of the circle, the perpendicular at each point $P$ being of length $ks$ , where $s$ is the length of the arc of the circle measured counterclockwise from $(a, 0)$ to $P$ , and $k$ is a positive constant, as shown here. Find the area of the surface formed by the perpendiculars along the arc beginning at $(a, 0)$ and extending once around the circle. 

![[d3c0df7e5b17520a8f0c78b725fd3fd4db4ecc7e6c50bd9605d550da9f2efe15.jpg|image]]


## Work

9. A particle of mass m starts from rest at time t = 0 and is moved along the x-axis with constant acceleration a from x = 0 to x = h against a variable force of magnitude $F(t) = t^{2}$ . Find the work done. 

10. Work and kinetic energy Suppose a 50-g golf ball is placed on a vertical spring with force constant $k = 2 \, \mathrm{N/cm}$ . The spring is compressed 15 cm and released. About how high does the ball go (measured from the spring's rest position)? 

## Centers of Mass

11. Find the centroid of the region bounded below by the $x$ -axis and above by the curve $y = 1 - x^n$ , $n$ an even positive integer. What is the limiting position of the centroid as $n \to \infty$ ? 

12. If you haul a telephone pole on a two-wheeled carriage behind a truck, you want the wheels to be 1 m or so behind the pole's center of mass to provide an adequate “tongue” weight. The 12-m wooden telephone poles used by Verizon have a 66-cm circumference at the top and a 104-cm circumference at the base. About how far from the top is the center of mass? 

13. Suppose that a thin metal plate of area $A$ and constant density $\delta$ occupies a region $R$ in the $xy$ -plane, and let $M_y$ be the plate's moment about the $y$ -axis. Show that the plate's moment about the line $x = b$ is 

a. $M_{y} - b\delta A$ if the plate lies to the right of the line, and 

b. $b\delta A - M_{y}$ if the plate lies to the left of the line. 

14. Find the center of mass of a thin plate covering the region bounded by the curve $y^{2} = 4ax$ and the line x = a, a = positive constant, if the density at $(x, y)$ is directly proportional to (a) x, (b) $|y|$ . 

15. a. Find the centroid of the region in the first quadrant bounded by two concentric circles and the coordinate axes, if the circles have radii $a$ and $b$ , $0 < a < b$ , and their centers are at the origin. 

b. Find the limits of the coordinates of the centroid as $a \to b$ and discuss the meaning of the result. 

16. A triangular corner is cut from a square 40 cm on a side. The area of the triangle removed is $400 \, cm^2$ . If the centroid of the remaining region is 22 cm from one side of the original square, how far is it from the remaining sides? 

## Fluid Force

17. A triangular plate ABC is submerged in water with its plane vertical. The side AB, 4 m long, is 6 m below the surface of the water, while the vertex C is 2 m below the surface. Find the force exerted by the water on one side of the plate. 

18. A vertical rectangular plate is submerged in a fluid with its top edge parallel to the fluid's surface. Show that the force exerted by the fluid on one side of the plate equals the average value of the pressure up and down the plate times the area of the plate. 

## CHAPTER 6

## Technology Application Projects

## Mathematica/Maple Projects

Projects can be found within MyLab Math. 

- Using Riemann Sums to Estimate Areas, Volumes, and Lengths of Curves
Visualize and approximate areas and volumes in Part I and Part II: Volumes of Revolution; and Part III: Lengths of Curves. 

Collect data (or use data previously collected) to build and refine a model for the force exerted by a jumper's bungee cord. Use the work-energy theorem to compute the distance fallen for a given jumper and a given length of bungee cord. 

Integrals and Transcendental Functions 

![[ffe59e81e23a921b8c14b2ea1f9b043249bdab9389f6cf9dc05dcfaccc30e7fb.jpg|image]]


OVERVIEW Our treatment of the logarithmic and exponential functions has been rather informal. In this chapter, we give a rigorous analytic approach to the definitions and properties of these functions. We also introduce the hyperbolic functions and their inverses. Like the trigonometric functions, these functions belong to the class of transcendental functions.
