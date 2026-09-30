---
title: "Chapter 15: Integrals and Vector Fields"
order: 15
---

# Chapter 15: Integrals and Vector Fields

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 15.1 Line Integrals of Scalar Functions

![[fb4c1be22667014cc7940f186de23f113c1acd36ad830ea8879740a486ce12ba.jpg|image]]


To calculate the total mass of a wire lying along a curve in space, or to find the work done by a variable force acting along such a curve, we need a more general notion of integral than was defined in Chapter 5. We need to integrate over a curve C rather than over an interval $[a, b]$ . These more general integrals are called line integrals (although path integrals might be more descriptive). We make our definitions for space curves, with curves in the xy-plane being the special case with z-coordinate identically zero. 


FIGURE 15.1 The curve $\mathbf{r}(t)$ partitioned into small arcs from $t = a$ to $t = b$ . The length of a typical subarc is $\Delta s_k$ .


Suppose that $f(x,y,z)$ is a real-valued function we wish to integrate over the curve C lying within the domain of f and parametrized by $\mathbf{r}(t)=g(t)\mathbf{i}+h(t)\mathbf{j}+k(t)\mathbf{k}, a\leq t\leq b$ . The values of f along the curve are given by the composite function $f(g(t),h(t),k(t))$ . We are going to integrate this composition with respect to arc length from t=a to t=b. To begin, we first partition the curve C into a finite number n of subarcs (Figure 15.1). The typical subarc has length $\Delta s_{k}$ . In each subarc we choose a point $(x_{k},y_{k},z_{k})$ and form the sum 

![[04e0104471dc9e779f46707f525690d024e84537498d21bf68e539e7d26412cd.jpg|image]]


which is similar to a Riemann sum. Depending on how we partition the curve C and pick $(x_{k}, y_{k}, z_{k})$ in the kth subarc, we may get different values for $S_{n}$ . If f is continuous and the functions g, h, and k have continuous first derivatives, then these sums approach a limit as n increases and the lengths $\Delta s_{k}$ approach zero. This leads to the following definition, which is similar to that for a single integral. In the definition, we assume that the norm of the partition approaches zero as $n \to \infty$ , so that the length of the longest subarc approaches zero. 

![[10071838b4e24978685a41e44128734c624671e05bb4f33e643d86762001bb4e.jpg|image]]



FIGURE 15.2 The integration path in Example 1.


> ***DEFINITION*** If $f$ is defined on a curve $C$ given parametrically by $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}, a \leq t \leq b$ , then the line integral of $f$ over $C$ is 
>
> $$
> \int_ {C} f (x, y, z) d s = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} f \left(x _ {k}, y _ {k}, z _ {k}\right) \Delta s _ {k},\tag{1}
> $$
>
> provided this limit exists. 
>
> $$
> f (\mathbf {r} (t)) = f (g (t), h (t), k (t))
> $$
>
> If the curve C is smooth for $a \leq t \leq b$ (so $v = dr/dt$ is continuous and never 0) and the function f is continuous on C, then the limit in Equation (1) can be shown to exist. We can then apply the Fundamental Theorem of Calculus to differentiate the arc length equation, 
>
> $$
> s (t) = \int_ {a} ^ {t} | \mathbf {v} (\tau) | d \tau , \quad \begin{array}{l} \text { Eq.   (3)   of   Section   12.3 } \\ \text { with   } t _ {0} = a \end{array}
> $$
>
> $$
> \frac {d s}{d t} = | \mathbf {v} | = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} + \left(\frac {d z}{d t}\right) ^ {2}}
> $$
>
> to express ds in Equation (1) as $ds = |\mathbf{v}(t)| \, dt$ and evaluate the integral of f over C as 
>
> $$
> \int_ {C} f (x, y, z) d s = \int_ {a} ^ {b} f (g (t), h (t), k (t)) | \mathbf {v} (t) | d t.\tag{2}
> $$
>
The integral on the right side of Equation (2) is just an ordinary definite integral, as defined in Chapter 5, where we are integrating with respect to the parameter t. The formula evaluates the line integral on the left side correctly no matter what smooth parametrization is used. Note that the parameter t defines a direction along the path. The starting point on C is the position $\mathbf{r}(a)$ , and movement along the path is in the direction of increasing t (see Figure 15.1). 

## How to Evaluate a Line Integral

To integrate a continuous function $f(x, y, z)$ over a curve C: 

1. Find a smooth parametrization of C, 

$$
\mathbf {r} (t) = g (t) \mathbf {i} + h (t) \mathbf {j} + k (t) \mathbf {k}, \quad a \leq t \leq b.
$$

2. Evaluate the integral as 

$$
\int_ {C} f (x, y, z) d s = \int_ {a} ^ {b} f (g (t), h (t), k (t)) | \mathbf {v} (t) | d t.
$$

If f has the constant value 1, then the integral of f over C gives the length of C from t = a to t = b. We also write $f(\mathbf{r}(t))$ for the evaluation $f(g(t), h(t), k(t))$ along the curve r. 

**EXAMPLE 1** Integrate $f(x,y,z)=x-3y^{2}+z$ over the line segment C joining the origin to the point $(1,1,1)$ (Figure 15.2). 

**Solution** Since any choice of parametrization will give the same answer, we choose the simplest parametrization we can think of: 

$$
\mathbf {r} (t) = t \mathbf {i} + t \mathbf {j} + t \mathbf {k}, \quad 0 \leq t \leq 1.
$$

The components have continuous first derivatives, and $|\mathbf{v}(t)| = |\mathbf{i} + \mathbf{j} + \mathbf{k}| = \sqrt{1^{2} + 1^{2} + 1^{2}} = \sqrt{3}$ is never 0, so the parametrization is smooth. The integral of f over C is 

![[9e115c359f4e1f507e16e2abaa336eee772876cac8b5331f0498d631f3102e69.jpg|image]]



FIGURE 15.3 The path of integration in Example 2.


$$
\begin{array}{l} \int_ {C} f (x, y, z) d s = \int_ {0} ^ {1} f (t, t, t) \sqrt {3} d t \quad \text {Eq. (2),} d s = | \mathbf {v} (t) | d t = \sqrt {3} d t \\ = \int_ {0} ^ {1} (t - 3 t ^ {2} + t) \sqrt {3} d t \\ = \sqrt {3} \int_ {0} ^ {1} (2 t - 3 t ^ {2}) d t = \sqrt {3} \left[ t ^ {2} - t ^ {3} \right] _ {0} ^ {1} = 0. \end{array}
$$

## Additivity

Line integrals have the useful property that if a piecewise smooth curve C is made by joining a finite number of smooth curves $C_{1}, C_{2}, \ldots, C_{n}$ end to end (Section 12.1), then the integral of a function over C is the sum of the integrals over the curves that make it up: 

$$
\int_ {C} f d s = \int_ {C _ {1}} f d s + \int_ {C _ {2}} f d s + \dots + \int_ {C _ {n}} f d s.\tag{3}
$$

**EXAMPLE 2** Figure 15.3 shows another path from the origin to $(1,1,1)$ , formed from two line segments $C_{1}$ and $C_{2}$ . Integrate $f(x,y,z)=x-3y^{2}+z$ over $C_{1}\cup C_{2}$ . 

**Solution** We choose the simplest parametrizations for $C_{1}$ and $C_{2}$ we can find, calculating the lengths of the velocity vectors as we go along: 

$$
\begin{array}{l} C _ {1} \colon \mathbf {r} (t) = t \mathbf {i} + t \mathbf {j}, 0 \leq t \leq 1; | \mathbf {v} | = \sqrt {1 ^ {2} + 1 ^ {2}} = \sqrt {2} \\ C _ {2} \colon \mathbf {r} (t) = \mathbf {i} + \mathbf {j} + t \mathbf {k}, 0 \leq t \leq 1; | \mathbf {v} | = \sqrt {0 ^ {2} + 0 ^ {2} + 1 ^ {2}} = 1. \end{array}
$$

With these parametrizations we find that 

$$
\begin{array}{r l} \int_ {C _ {1} \cup C _ {2}} f (x, y, z) d s & = \int_ {C _ {1}} f (x, y, z) d s + \int_ {C _ {2}} f (x, y, z) d s \\ & = \int_ {0} ^ {1} f (t, t, 0) \sqrt {2} d t + \int_ {0} ^ {1} f (1, 1, t) (1) d t \\ & = \int_ {0} ^ {1} (t - 3 t ^ {2} + 0) \sqrt {2} d t + \int_ {0} ^ {1} (1 - 3 + t) (1) d t \\ & = \sqrt {2} \left[ \frac {t ^ {2}}{2} - t ^ {3} \right] _ {0} ^ {1} + \left[ \frac {t ^ {2}}{2} - 2 t \right] _ {0} ^ {1} = - \frac {\sqrt {2}}{2} - \frac {3}{2}. \end{array} \tag {Eq.3}
$$

Notice three things about the integrations in Examples 1 and 2. First, as soon as the components of the appropriate curve were substituted into the formula for f, the integration became a standard integration with respect to t. Second, the integral of f over $C_{1} \cup C_{2}$ was obtained by integrating f over each section of the path and adding the results. Third, the integrals of f over C and $C_{1} \cup C_{2}$ had different values. We investigate this third observation in Section 15.3. 

![[6de29c8a50c8eb87fd53b9e343cea08ff39de1de1034e2136775dbd24813801e.jpg|image]]



FIGURE 15.4 A line integral is taken over a curve such as this helix from Example 3.


The value of a line integral along a path joining two points can change if you change the path between them. 

**EXAMPLE 3** Find the line integral of $f(x,y,z)=2xy+\sqrt{z}$ over the helix $\mathbf{r}(t)=\cos t\mathbf{i}+\sin t\mathbf{j}+t\mathbf{k},0\leq t\leq\pi.$ 

**Solution** For the helix (Figure 15.4) we find $\mathbf{v}(t) = \mathbf{r}'(t) = -\sin t\mathbf{i} + \cos t\mathbf{j} + \mathbf{k}$ and $|\mathbf{v}(t)| = \sqrt{(-\sin t)^2 + (\cos t)^2 + 1} = \sqrt{2}$ . Evaluating the function $f$ at the point $\mathbf{r}(t)$ , we obtain 

$$
f (\mathbf {r} (t)) = f (\cos t, \sin t, t) = 2 \cos t \sin t + \sqrt {t} = \sin 2 t + \sqrt {t}.
$$

The line integral is given by 

$$
\begin{array}{l} \int_ {C} f (x, y, z) d s = \int_ {0} ^ {\pi} (\sin 2 t + \sqrt {t}) \sqrt {2} d t \\ \qquad = \sqrt {2} \left[ - \frac {1}{2} \cos 2 t + \frac {2}{3} t ^ {3 / 2} \right] _ {0} ^ {\pi} \\ \qquad = \frac {2 \sqrt {2}}{3} \pi^ {3 / 2} \approx 5. 2 5. \end{array}
$$

## Mass and Moment Calculations

We treat coil springs and wires as masses distributed along smooth curves in space. The distribution is described by a continuous density function $\delta(x,y,z)$ representing mass per unit length. When a curve C is parametrized by $\mathbf{r}(t)=x(t)\mathbf{i}+y(t)\mathbf{j}+z(t)\mathbf{k}, a\leq t\leq b$ , then x,y, and z are functions of the parameter t, the density is the function $\delta(x(t),y(t),z(t))$ , and the arc length differential is given by 

$$
d s = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} + \left(\frac {d z}{d t}\right) ^ {2}} d t.
$$

(See Section 12.3.) The spring's or wire's mass, center of mass, and moments are then calculated using the formulas in Table 15.1, with the integrations in terms of the parameter $t$ over the interval $[a, b]$ . For example, the formula for mass becomes 

$$
M = \int_ {a} ^ {b} \delta (x (t), y (t), z (t)) \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} + \left(\frac {d z}{d t}\right) ^ {2}} d t.
$$

![[cda51139b2d353d45abb7e45b15d7dc53b3e4a6368fd90eb41ced68c88457a9f.jpg|image]]


These formulas also apply to thin rods, and their derivations are similar to those in Section 6.6. Notice how similar the formulas are to those in Tables 15.1 and 15.2 for double and triple integrals. The double integrals for planar regions, and the triple integrals for solids, become line integrals for coil springs, wires, and thin rods. 

Notice that the element of mass dm is equal to $\delta ds$ in the table, rather than to $\delta dV$ as in Table 15.1, and that the integrals are taken over the curve C. 


FIGURE 15.5 Example 4 shows how to find the center of mass of a circular arch of variable density.


**EXAMPLE 4** A slender metal arch, denser at the bottom than at the top, lies along the semicircle $y^{2} + z^{2} = 1$ , $z \geq 0$ , in the yz-plane (Figure 15.5). Find the center of the arch's mass if the density at the point $(x, y, z)$ on the arch is $\delta(x, y, z) = 2 - z$ . 

**Solution** We know that $\overline{x} = 0$ and $\overline{y} = 0$ because the arch lies in the $yz$ -plane with its mass distributed symmetrically about the $z$ -axis. To find $\overline{z}$ , we parametrize the circle as 

$$
\mathbf {r} (t) = (\cos t) \mathbf {j} + (\sin t) \mathbf {k}, \quad 0 \leq t \leq \pi .
$$

TABLE 15.1 Mass and moment formulas for coil springs, wires, and thin rods lying along a smooth curve C in space 

Mass: 

$$
M = \int_ {C} \delta d s \quad \delta = \delta (x, y, z) \text {   is   the   density   at   } (x, y, z).
$$

First moments about the coordinate planes: 

$$
M _ {y z} = \int_ {C} x \delta d s, \quad M _ {x z} = \int_ {C} y \delta d s, \quad M _ {x y} = \int_ {C} z \delta d s
$$

Coordinates of the center of mass: 

$$
\overline {{{x}}} = M _ {y z} / M, \quad \overline {{{y}}} = M _ {x z} / M, \quad \overline {{{z}}} = M _ {x y} / M
$$

Moments of inertia about axes and other lines: 

$$
I _ {x} = \int_ {C} (y ^ {2} + z ^ {2}) \delta d s, I _ {y} = \int_ {C} (x ^ {2} + z ^ {2}) \delta d s, I _ {z} = \int_ {C} (x ^ {2} + y ^ {2}) \delta d s,
$$

$$
I _ {L} = \int_ {C} r ^ {2} \delta d s \quad r = r (x, y, z) \text {   is   the   distance   from   the   point   } (x, y, z) \text {   to   line   } L.
$$

For this parametrization, 

$$
| \mathbf {v} (t) | = \sqrt {\left(\frac {d x}{d t}\right) ^ {2} + \left(\frac {d y}{d t}\right) ^ {2} + \left(\frac {d z}{d t}\right) ^ {2}} = \sqrt {(0) ^ {2} + (- \sin t) ^ {2} + (\cos t) ^ {2}} = 1,
$$

so ds = |v| dt = dt. 

![[864668c5938168711c6e7bfea8f8b3fe56e2f58935bd7143b7d8024518a40c4c.jpg|image]]



FIGURE 15.6 The line integral $\int_{C} f ds$ gives the area of the portion of the cylindrical surface or "wall" beneath $z = f(x, y) \geq 0$ .


The formulas in Table 15.1 then give 

$$
\begin{array}{l} M = \int_ {C} \delta d s = \int_ {C} (2 - z) d s = \int_ {0} ^ {\pi} (2 - \sin t) d t = 2 \pi - 2 \\ M _ {x y} = \int_ {C} z \delta d s = \int_ {C} z (2 - z) d s = \int_ {0} ^ {\pi} (\sin t) (2 - \sin t) d t \\ = \int_ {0} ^ {\pi} (2 \sin t - \sin^ {2} t) d t = \frac {8 - \pi}{2} \quad \text { Routine   integration } \\ \overline {{z}} = \frac {M _ {x y}}{M} = \frac {8 - \pi}{2} \cdot \frac {1}{2 \pi - 2} = \frac {8 - \pi}{4 \pi - 4} \approx 0. 5 7. \end{array}
$$

With $\overline{z}$ to the nearest hundredth, the center of mass is $(0, 0, 0.57)$ . 

## Line Integrals in the Plane

Line integrals for curves in the plane have a natural geometric interpretation. If C is a smooth curve in the xy-plane parametrized by $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}, a \leq t \leq b$ , we generate a cylindrical surface by moving a straight line along C perpendicular to the plane, holding the line parallel to the z-axis, as in Figure 15.6. If $z = f(x, y)$ is a nonnegative continuous function over a region in the plane containing the curve C, then the graph of f is a surface that lies above the plane. The cylinder cuts through this surface, forming a curve on it that lies above the curve C and follows its winding nature. The part of the cylindrical surface that lies beneath the surface curve and above the xy-plane forms a “curved wall” or “fence” standing on the curve C and orthogonal to the plane. At any point $(x, y)$ along the curve, the height of the wall is $f(x, y)$ . From the definition 


h.



f.


$$
\int_ {C} f d s = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta s _ {k},
$$

where $\Delta s_k \to 0$ as $n \to \infty$ , we see that the line integral $\int_{C} f ds$ is the area of the wall shown in the figure. 

## EXERCISES 15.1

Graphs of Vector Equations 

Match the vector equations in Exercises 1–8 with the graphs (a)–(h) given here. 


a.



b.


![[369649bff90ce181bf953565c76adfd804546dda0a659f62d77490820b799295.jpg|image]]


![[c5dc3d78ab5673e6425af62026bb06063e533f92c02476eafa392e0fc8d36469.jpg|image]]



c.



d.


![[dcae3c7a14475026cf546f3586b72440f1d8e622f77effc22c49ee75f1ae3f24.jpg|image]]


![[ef8ec0edfc1b32dd51ecbda7f36c48acf7b920299cd8de64d73aa744897c9a70.jpg|image]]



e.


![[1ae53e6a631931f64fe46442aaeaafeb7253ac5402a46acd267585790e4e3228.jpg|image]]



g.


![[34b0ba9e1d973ae353862ab4e3b903b05e0680225e6ff46afdbcd03b5658dad1.jpg|image]]


![[00a7b183f5f2a3cec18e1dc48f70e628b1eed34028fdb1c11f9a6b10527c0ff3.jpg|image]]


![[e283b12b8d2467168b153c37d33ee0eb477cb211246c74135bee172201a1ffd1.jpg|image]]


$$
\mathbf {1 . r} (t) = t \mathbf {i} + (1 - t) \mathbf {j}, 0 \leq t \leq 1
$$

$$
\mathbf {2 . r} (t) = \mathbf {i} + \mathbf {j} + t \mathbf {k}, - 1 \leq t \leq 1
$$

$$
\mathbf {3 . r} (t) = (2 \cos t) \mathbf {i} + (2 \sin t) \mathbf {j}, 0 \leq t \leq 2 \pi
$$

$$
\mathbf {r} (t) = t \mathbf {i}, - 1 \leq t \leq 1
$$

$$
\mathbf {5 . r} (t) = t \mathbf {i} + t \mathbf {j} + t \mathbf {k}, 0 \leq t \leq 2
$$

$$
\mathbf {6 . r} (t) = t \mathbf {j} + (2 - 2 t) \mathbf {k}, \quad 0 \leq t \leq 1
$$

$$
\mathbf {7 . r} (t) = (t ^ {2} - 1) \mathbf {j} + 2 t \mathbf {k}, - 1 \leq t \leq 1
$$

$$
\mathbf {8 . r} (t) = (2 \cos t) \mathbf {i} + (2 \sin t) \mathbf {k}, 0 \leq t \leq \pi
$$

## Evaluating Line Integrals over Space Curves

9. Evaluate $\int_{C}(x + y)ds$ , where $C$ is the straight-line segment $x = t$ , $y = (1 - t)$ , $z = 0$ , from $(0,1,0)$ to $(1,0,0)$ . 

10. Evaluate $\int_{C}(x - y + z - 2)ds$ , where $C$ is the straight-line segment $x = t$ , $y = (1 - t)$ , $z = 1$ , from $(0,1,1)$ to $(1,0,1)$ . 

11. Evaluate $\int_{C}(xy + y + z)ds$ along the curve $\mathbf{r}(t) = 2t\mathbf{i} + t\mathbf{j} + (2 - 2t)\mathbf{k}, 0 \leq t \leq 1$ . 

12. Evaluate $\int_{C} \sqrt{x^2 + y^2} ds$ along the curve $\mathbf{r}(t) = (4\cos t)\mathbf{i} + (4\sin t)\mathbf{j} + 3t\mathbf{k}, -2\pi \leq t \leq 2\pi$ . 

13. Find the line integral of $f(x,y,z)=x+y+z$ over the straight-line segment from $(1,2,3)$ to $(0,-1,1)$ . 

14. Find the line integral of $f(x, y, z) = \sqrt{3} / (x^2 + y^2 + z^2)$ over the curve $\mathbf{r}(t) = t\mathbf{i} + t\mathbf{j} + t\mathbf{k}, 1 \leq t < \infty$ . 

15. Integrate $f(x,y,z) = x + \sqrt{y} - z^2$ over the path $C_1$ followed by $C_2$ from (0, 0, 0) to (1, 1, 1) (see accompanying figure) given by 

$$
\begin{array}{l l} C _ {1}: & \mathbf {r} (t) = t \mathbf {i} + t ^ {2} \mathbf {j}, 0 \leq t \leq 1 \\ C _ {2}: & \mathbf {r} (t) = \mathbf {i} + \mathbf {j} + t \mathbf {k}, 0 \leq t \leq 1. \end{array}
$$

![[dd0ef34301314322c1825010e489d7664bb11774297d735c416988bcb425ea9c.jpg|image]]


![[e2cf98d998d884f4a90a1e75178d8110ee1c3c61c0012377884705a1021d83ea.jpg|image]]



(b)



The paths of integration for Exercises 15 and 15.


16. Integrate $f(x,y,z)=x+\sqrt{y}-z^{2}$ over the path $C_{1}$ followed by $C_{2}$ followed by $C_{3}$ from $(0,0,0)$ to $(1,1,1)$ (see accompanying figure) given by 

$$
C _ {1} \colon \mathbf {r} (t) = t \mathbf {k}, 0 \leq t \leq 1
$$

$$
C _ {2}: \quad \mathbf {r} (t) = t \mathbf {j} + \mathbf {k}, \quad 0 \leq t \leq 1
$$

$$
C _ {3}: \quad \mathbf {r} (t) = t \mathbf {i} + \mathbf {j} + \mathbf {k}, \quad 0 \leq t \leq 1.
$$

17. Integrate $f(x, y, z) = (x + y + z) / (x^2 + y^2 + z^2)$ over the path $\mathbf{r}(t) = t\mathbf{i} + t\mathbf{j} + t\mathbf{k}, 0 < a \leq t \leq b$ . 

18. Integrate $f(x, y, z) = -\sqrt{x^{2} + z^{2}}$ over the circle 

$$
\mathbf {r} (t) = (a \cos t) \mathbf {j} + (a \sin t) \mathbf {k}, \quad 0 \leq t \leq 2 \pi .
$$

## Line Integrals over Plane Curves

19. Evaluate $\int_{C} x ds$ , where $C$ is
    a. the straight-line segment $x = t$ , $y = t/2$ , from $(0,0)$ to $(4,2)$ .
    b. the parabolic curve $x = t$ , $y = t^2$ , from $(0,0)$ to $(2,4)$ . 

20. Evaluate $\int_{C}\sqrt{x + 2y} ds$ , where $C$ is 

a. the straight-line segment $x = t$ , $y = 4t$ , from (0,0) to (1,4).  
b. $C_1 \cup C_2$ ; $C_1$ is the line segment from (0,0) to (1,0) and $C_2$ is the line segment from (1,0) to (1,2). 

21. Find the line integral of $f(x,y)=ye^{x^{2}}$ along the curve $\mathbf{r}(t)=4ti-3t\mathbf{j},-1\leq t\leq2.$ 

22. Find the line integral of $f(x,y)=x-y+3$ along the curve $\mathbf{r}(t)=(\cos t)\mathbf{i}+(\sin t)\mathbf{j},0\leq t\leq2\pi.$ 

23. Evaluate $\int_{C} \frac{x^2}{y^{4/3}} ds$ , where $C$ is the curve $x = t^2$ , $y = t^3$ , for $1 \leq t \leq 2$ . 

24. Find the line integral of $f(x,y)=\sqrt{y}/x$ along the curve $\mathbf{r}(t)=t^{3}\mathbf{i}+t^{4}\mathbf{j},1/2\leq t\leq1$ . 

25. Evaluate $\int_{C}(x + \sqrt{y})ds$ , where $C$ is given in the accompanying figure. 

![[cb4751bb7d3c9e94ca12537cd2f3a327722c58e5a91aef22242b72a84f25a4c7.jpg|image]]


26. Evaluate $\int_{C} \frac{1}{x^2 + y^2 + 1} ds$ , where $C$ is given in the accompanying figure. 

![[6d0b5c0b13bf21ada77995e72c69513eb8903ea4af1728196ee4dd7a2ca507f7.jpg|image]]


In Exercises 27–30, integrate f over the given curve. 

27. $f(x, y) = x^3 / y$ , $C: y = x^2 / 2$ , $0 \leq x \leq 2$ 

28. $f(x,y)=(x+y^{2})/\sqrt{1+x^{2}}$ , C: $y=x^{2}/2$ from $(1,1/2)$ to $(0,0)$ 

29. $f(x, y) = x + y$ , $C: x^2 + y^2 = 4$ in the first quadrant from (2, 0) to (0, 2) 

30. $f(x, y) = x^2 - y$ , $C: x^2 + y^2 = 4$ in the first quadrant from (0, 2) to $(\sqrt{2}, \sqrt{2})$ 

31. Find the area of one side of the “winding wall” standing perpendicularly on the curve $y = x^{2}$ , $0 \leq x \leq 2$ , and beneath the curve on the surface $f(x, y) = x + \sqrt{y}$ . 

32. Find the area of one side of the “wall” standing perpendicularly on the curve $2x + 3y = 6$ , $0 \leq x \leq 6$ , and beneath the curve on the surface $f(x, y) = 4 + 3x + 2y$ . 

## Masses and Moments

33. Mass of a wire Find the mass of a wire that lies along the curve $\mathbf{r}(t) = (t^{2} - 1)\mathbf{j} + 2t\mathbf{k}, 0 \leq t \leq 1$ , if the density is $\delta = (3/2)t$ . 

34. Center of mass of a curved wire A wire of density $\delta(x,y,z)=15\sqrt{y+2}$ lies along the curve $\mathbf{r}(t)=(t^{2}-1)\mathbf{j}+2tk, -1\leq t\leq1$ . Find its center of mass. Then sketch the curve and center of mass together. 

35. Mass of wire with variable density Find the mass of a thin wire lying along the curve $\mathbf{r}(t) = \sqrt{2} t \mathbf{i} + \sqrt{2} t \mathbf{j} + (4 - t^{2}) \mathbf{k}$ , $0 \leq t \leq 1$ , if the density is (a) $\delta = 3t$ and (b) $\delta = 1$ . 

36. Center of mass of wire with variable density Find the center of mass of a thin wire lying along the curve $\mathbf{r}(t) = t\mathbf{i} + 2t\mathbf{j} + (2/3)t^{3/2}\mathbf{k}, 0 \leq t \leq 2$ , if the density is $\delta = 3\sqrt{5 + t}$ . 

37. Moment of inertia of wire hoop A circular wire hoop of constant density $\delta$ lies along the circle $x^{2} + y^{2} = a^{2}$ in the $xy$ -plane. Find the hoop's moment of inertia about the $z$ -axis. 

38. Inertia of a slender rod A slender rod of constant density lies along the line segment $\mathbf{r}(t) = t\mathbf{j} + (2 - 2t)\mathbf{k}, 0 \leq t \leq 1$ , in the yz-plane. Find the moments of inertia of the rod about the three coordinate axes. 

39. Two springs of constant density lies along the helix A spring of constant density $\delta$ 

$$
\mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {j} + t \mathbf {k}, \quad 0 \leq t \leq 2 \pi .
$$

a. Find $I_{z}$ . 

b. Suppose that you have another spring of constant density $\delta$ that is twice as long as the spring in part (a) and lies along the helix for $0 \leq t \leq 4\pi$ . Do you expect $I_{z}$ for the longer spring to be the same as that for the shorter one, or should it be different? Check your prediction by calculating $I_{z}$ for the longer spring. 

40. Wire of constant density A wire of constant density $\delta = 1$ lies along the curve 

$$
\mathbf {r} (t) = (t \cos t) \mathbf {i} + (t \sin t) \mathbf {j} + (2 \sqrt {2} / 3) t ^ {3 / 2} \mathbf {k}, \quad 0 \leq t \leq 1.
$$

Find $\overline{z}$ and $I_{z}$ . 

41. The arch in Example 4 Find $I_{x}$ for the arch in Example 4. 

42. Center of mass and moments of inertia for wire with variable density Find the center of mass and the moments of inertia about the coordinate axes of a thin wire lying along the curve 

$$
\mathbf {r} (t) = t \mathbf {i} + \frac {2 \sqrt {2}}{3} t ^ {3 / 2} \mathbf {j} + \frac {t ^ {2}}{2} \mathbf {k}, \quad 0 \leq t \leq 2,
$$

if the density is $\delta = 1 / (t + 1)$ . 

## COMPUTER EXPLORATIONS

In Exercises 43–46, use a CAS to perform the following steps to evaluate the line integrals. 

a. Find $ds = |\mathbf{v}(t)| dt$ for the path $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}$ . 

b. Express the integrand $f(g(t), h(t), k(t)) | \mathbf{v}(t)|$ as a function of the parameter t. 

c. Evaluate $\int_{C} f ds$ using Equation (2) in the text. 

43. $f(x,y,z)=\sqrt{1+30x^{2}+10y};\quad\mathbf{r}(t)=t\mathbf{i}+t^{2}\mathbf{j}+3t^{2}\mathbf{k},$ $0 \leq t \leq 2$ 

44. $f(x,y,z)=\sqrt{1+x^{3}+5y^{3}}$ ; $\mathbf{r}(t)=t\mathbf{i}+\frac{1}{3}t^{2}\mathbf{j}+\sqrt{t}\mathbf{k},$ $0 \leq t \leq 2$ 

45. $f(x,y,z)=x\sqrt{y}-3z^{2};\quad\mathbf{r}(t)=(\cos2t)\mathbf{i}+(\sin2t)\mathbf{j}+5t\mathbf{k},$ $0 \leq t \leq 2\pi$ 

46. $f(x,y,z) = \left(1 + \frac{9}{4} z^{1 / 3}\right)^{1 / 4};$ 

$$
\mathbf {r} (t) = (\cos 2 t) \mathbf {i} + (\sin 2 t) \mathbf {j} + t ^ {5 / 2} \mathbf {k}, 0 \leq t \leq 2 \pi
$$

## 15.2 Vector Fields and Line Integrals: Work, Circulation, and Flux

![[8546c78a0cf9ba054a477da90baff979b749caa1995912084228434bcc70fc36.jpg|image]]


Gravitational and electric forces have both a direction and a magnitude. They are represented by a vector at each point in their domain, producing a vector field. In this section we show how to compute the work done in moving an object through such a field by using a line integral involving the vector field. We also discuss velocity fields, such as the vector field representing the velocity of a flowing fluid in its domain. A line integral can be used to find the rate at which the fluid flows along or across a curve within the domain. 


FIGURE 15.7 Velocity vectors of a flow around an airfoil.


![[20e6b21fba6c889b818ce1a16bce2b9ff73111a45650313b295b3a8435827c17.jpg|image]]


## Vector Fields


FIGURE 15.8 Streamlines in a contracting channel. The water speeds up as the channel narrows, and the velocity vectors increase in length.


Suppose a region in the plane or in space is occupied by a moving fluid, such as air or water. The fluid is made up of a large number of particles, and at any instant of time, a particle has a velocity v. At different points of the region at a given (same) time, these velocities can vary. We can think of a velocity vector being attached to each point of the fluid, representing the velocity of a particle at that point. Such a fluid flow is an example of a vector field. Figure 15.7 shows a velocity vector field obtained from air flowing around an airfoil in a wind tunnel. Figure 15.8 shows a vector field of velocity vectors along the streamlines of water moving through a contracting channel. Vector fields are also associated with forces such as gravitational attraction (Figure 15.9) and with magnetic fields and electric fields. There are purely mathematical fields as well. 

Generally, a vector field is a function that assigns a vector to each point in its domain. A vector field on a three-dimensional domain in space might have a formula like 

$$
\mathbf {F} (x, y, z) = M (x, y, z) \mathbf {i} + N (x, y, z) \mathbf {j} + P (x, y, z) \mathbf {k}.
$$

The vector field is continuous if the component functions M, N, and P are continuous; it is differentiable if each of the component functions is differentiable. The formula for a field of two-dimensional vectors could look like 

$$
\mathbf {F} (x, y) = M (x, y) \mathbf {i} + N (x, y) \mathbf {j}.
$$

We encountered another type of vector field in Chapter 12. The tangent vectors T and normal vectors N for a curve in space both form vector fields along the curve. Along a curve $\mathbf{r}(t)$ they might have a component formula similar to the velocity field expression 

$$
\mathbf {v} (t) = f (t) \mathbf {i} + g (t) \mathbf {j} + h (t) \mathbf {k}.
$$

If we attach the gradient vector $\nabla f$ of a scalar function $f(x,y,z)$ to each point of a level surface of the function, we obtain a three-dimensional field on the surface. If we attach the velocity vector to each point of a flowing fluid, we have a three-dimensional field 

![[a680a1ef0a37086f50e565c2933c57b7ed523d0604e4dea6c9a63dfd970fc186.jpg|image]]



FIGURE 15.9 Vectors in a gravitational field point toward the center of mass that gives the source of the field.


![[69878f054e2fe8057ca27ec51b3b141967bda93d51244ae3bac8841fba021863.jpg|image]]


FIGURE 15.11 The field of gradient vectors $\nabla f$ on a level surface $f(x,y,z)=c$ . The function f is constant on the surface, and each vector points in the direction where f is increasing fastest. 

![[b1231114dceeb4ab0231fd7100c133c0cef1a513c05db13b6c584462d79ed236.jpg|image]]


FIGURE 15.14 The flow of fluid in a long cylindrical pipe. The vectors $\mathbf{v} = (a^{2} - r^{2})\mathbf{k}$ inside the cylinder that have their bases in the xy-plane have their tips on the paraboloid $z = a^{2} - r^{2}$ . 

defined on a region in space. These and other fields are illustrated in Figures 15.7–15.16. To sketch the fields, we picked a representative selection of domain points and drew the vectors attached to them. The arrows are drawn with their tails, not their heads, attached to the points where the vector functions are evaluated. 

![[a058893d0f0e36a6a60143cbbd54391c3f04719c1f182bade10339293c05e7ca.jpg|image]]



FIGURE 15.10 A surface might represent a filter (or a net or a parachute) in a vector field representing water or wind flow velocity vectors. The arrows show the direction of fluid flow, and their lengths indicate speed.


![[6b62a02e50c018c33a620099461f2ba34ac4a517edf5da311f2c51af6ab2fa09.jpg|image]]


![[afeae12f99e510e19869049b384c8bb5c693102518f202f9197e5f7dd81fcdd7.jpg|image]]



FIGURE 15.12 The radial field



FIGURE 15.13 A “spin” field of rotating unit vectors


$F = x\mathbf{i} + y\mathbf{j}$ formed by the position vectors of points in the plane. Notice the convention that an arrow is drawn with its tail, not its head, at the point where F is evaluated. 

$$
\mathbf {F} = (- y \mathbf {i} + x \mathbf {j}) / (x ^ {2} + y ^ {2}) ^ {1 / 2}
$$

in the plane. The field is not defined at the origin. 

## Gradient Fields

The gradient vector of a differentiable scalar-valued function at a point gives the direction of greatest increase of the function. An important type of vector field is formed by all the gradient vectors of the function (see Section 13.5). We define the gradient field of a differentiable function $f(x, y, z)$ to be the field of gradient vectors 

$$
\nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k}.
$$

At each point $(x, y, z)$ , the gradient field gives a vector pointing in the direction of greatest increase of f, with magnitude being the value of the directional derivative in that direction. The gradient field might represent a force field, or a velocity field that gives the motion of a fluid, or the flow of heat through a medium, depending on the application being considered. 

![[0f451223bbfd02a11a2e2da51d5d46241389fe042cba4e3f7d0eb87b8b72a92c.jpg|image]]



FIGURE 15.15 The velocity vectors $\mathbf{v}(t)$ of a projectile's motion make a vector field along the trajectory.


![[2c97a073b343e3366fe78b1664f0538a557f9efa04e6c9c87d462bc5c6ea7e13.jpg|image]]



FIGURE 15.17 The vectors in a temperature gradient field point in the direction of greatest increase in temperature. In this case they are pointing toward the origin.


![[babba8d7f17253b79bb0669484d28d87f28715417eeb8ff629256b42c1de1bd1.jpg|image]]



FIGURE 15.16 Data from NASA's QuikSCAT satellite were used to create this representation of wind speed and wind direction in Hurricane Irene approximately six hours before it made landfall in North Carolina on August 27, 2011. The arrows show wind direction, and speed is indicated by color (rather than length). The maximum wind speeds (over $130\mathrm{km/hour}$ ) occurred over a region too small to see in this illustration. (Source: JPL-Caltech/ISRO/NASA)


In many physical applications, f represents a potential energy, and the gradient vector field indicates the corresponding force. In such situations, f is often taken to be negative, so that the force gives the direction of decreasing potential energy. 

**EXAMPLE 1** Suppose that a material is heated, that the resulting temperature T at each point $(x, y, z)$ in a region of space is given by 

$$
T = 1 0 0 - x ^ {2} - y ^ {2} - z ^ {2},
$$

and that $\mathbf{F}(x,y,z)$ is defined to be the gradient of T. Find the vector field F. 

**Solution** The gradient field F is the field $F = \nabla T = -2x\mathbf{i} - 2y\mathbf{j} - 2z\mathbf{k}$ . At each point in the region, the vector field F gives the direction for which the increase in temperature is greatest. The vectors point toward the origin, where the temperature is greatest. See Figure 15.17. 

## Line Integrals of Vector Fields

In Section 15.1 we defined the line integral of a scalar function $f(x, y, z)$ over a path C. We turn our attention now to the idea of a line integral of a vector field F along the curve C. Such line integrals have important applications in the study of fluid flows, work and energy, and electrical or gravitational fields. 

Assume that the vector field $\mathbf{F} = M(x, y, z)\mathbf{i} + N(x, y, z)\mathbf{j} + P(x, y, z)\mathbf{k}$ has continuous components, and that the curve C has a smooth parametrization $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}, a \leq t \leq b$ . As discussed in Section 15.1, the parametrization $\mathbf{r}(t)$ defines a direction (or orientation) along C that we call the forward direction. At each point along the path C, the tangent vector $T = dr/ds = v/|v|$ is a unit vector tangent to the path and pointing in this forward direction. (The vector $v = dr/dt$ is the velocity vector tangent to C at the point, as discussed in Sections 12.1 and 12.3.) The line integral of the vector field is the line integral of the scalar tangential component of F along C. This tangential component is given by the dot product 

$$
\mathbf {F} \cdot \mathbf {T} = \mathbf {F} \cdot \frac {d \mathbf {r}}{d s},
$$

so we are led to the following definition. 

![[7a9228ee0dec2c544951a6866611472681f515edea19705238c2f137a5b02236.jpg|image]]



FIGURE 15.18 A curve (in red) winds through a vector field as in Example 2. The line integral is determined by the vectors that lie along the curve.


> ***DEFINITION*** Let F be a vector field with continuous components defined along a smooth curve C parametrized by $\mathbf{r}(t)$ , $a \leq t \leq b$ . Then the line integral of F along C is 
>
> $$
> \int_ {C} \mathbf {F} \cdot \mathbf {T} d s = \int_ {C} \left(\mathbf {F} \cdot \frac {d \mathbf {r}}{d s}\right) d s = \int_ {C} \mathbf {F} \cdot d \mathbf {r}.\tag{1}
> $$
>
We evaluate line integrals of vector fields in a way similar to the way we evaluate line integrals of scalar functions (Section 15.1). The vector field may also be defined on points not meeting the curve, but only the vectors along the curve play a role in the line integral. See Figure 15.18. 

Evaluating the Line Integral of F = M i + N j + P k Along C: r(t) = g(t)i + h(t)j + k(t)k 

1. Express the vector field F along the parametrized curve C as $\mathbf{F}(\mathbf{r}(t))$ by substituting the components $x = g(t)$ , $y = h(t)$ , $z = k(t)$ of r into the scalar components $M(x, y, z)$ , $N(x, y, z)$ , $P(x, y, z)$ of F. 

2. Find the derivative (velocity) vector dr/dt. 

3. Evaluate the line integral with respect to the parameter $t$ , $a \leq t \leq b$ , to obtain 

$$
\int_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {a} ^ {b} \mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} d t.\tag{2}
$$

**EXAMPLE 2** Evaluate $\int_{C} F \cdot dr$ , where $\mathbf{F}(x, y, z) = z\mathbf{i} + xy\mathbf{j} - y^{2}\mathbf{k}$ along the curve C given by $\mathbf{r}(t) = t^{2}\mathbf{i} + t\mathbf{j} + \sqrt{t}\mathbf{k}, 0 \leq t \leq 1$ . 

**Solution** We have 

$$
\mathbf {F} (\mathbf {r} (t)) = \sqrt {t} \mathbf {i} + t ^ {3} \mathbf {j} - t ^ {2} \mathbf {k} \quad z = \sqrt {t}, x y = t ^ {3}, - y ^ {2} = - t ^ {2}
$$

and 

$$
\frac {d \mathbf {r}}{d t} = 2 t \mathbf {i} + \mathbf {j} + \frac {1}{2 \sqrt {t}} \mathbf {k}.
$$

Thus, 

$$
\begin{array}{r l} \int_ {C} \mathbf {F} \cdot d \mathbf {r} & = \int_ {0} ^ {1} \mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} d t \\ & = \int_ {0} ^ {1} \left(2 t ^ {3 / 2} + t ^ {3} - \frac {1}{2} t ^ {3 / 2}\right) d t \\ & = \left[ \left(\frac {3}{2}\right) \left(\frac {2}{5} t ^ {5 / 2}\right) + \frac {1}{4} t ^ {4} \right] _ {0} ^ {1} = \frac {1 7}{2 0}. \end{array}\tag{Eq. (2}
$$

## Line Integrals with Respect to dx, dy, or dz

When analyzing forces or flows, it is often useful to consider each component direction separately. For example, when analyzing the effect of a gravitational force, we might want to consider motion and forces in the vertical direction, while ignoring horizontal motions. Or we might be interested only in the force exerted horizontally by water pushing against the face of a dam or in wind affecting the course of a plane. In such situations we want to evaluate a line integral of a scalar function with respect to only one of the coordinates, such as $\int_{C} M dx$ . This type of integral is not the same as the arc length line integral $\int_{C} M ds$ we defined in Section 15.1, since it picks out displacement in the direction of only one coordinate. To define the integral $\int_{C} M dx$ for the scalar function $M(x, y, z)$ , we specify a vector field $\mathbf{F} = M(x, y, z)\mathbf{i}$ having a component only in the x-direction, and none in the y- or the z-direction. Then, over the curve C parametrized by $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}$ for $a \leq t \leq b$ , we have $x = g(t)$ , $dx = g'(t)dt$ , and 

$$
\int_ {C} M d x + N d y + P d z
$$

## Line Integral Notation

To evaluate these integrals, we parametrize C as $g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}$ and use Equations (3), (4), and (5). 

is a short way of expressing the sum of three line integrals, one for each coordinate direction: 

$$
\begin{array}{r l} \int_ {C} M (x, y, z) d x + \int_ {C} N (x, y, z) d y \\ & + \int_ {C} P (x, y, z) d z. \end{array}
$$

As in the definition of the line integral of F along C, we define 

The commonly occurring expression 

$$
\begin{array}{c} \mathbf {F} \cdot d \mathbf {r} = \mathbf {F} \cdot \frac {d \mathbf {r}}{d t}   d t = M (x, y, z) \mathbf {i} \cdot (g ^ {\prime} (t) \mathbf {i} + h ^ {\prime} (t) \mathbf {j} + k ^ {\prime} (t) \mathbf {k})   d t \\ = M (x, y, z) g ^ {\prime} (t)   d t = M (x, y, z)   d x. \end{array}
$$

In the same way, by defining $\mathbf{F} = N(x, y, z)\mathbf{j}$ with a component only in the y-direction, or $\mathbf{F} = P(x, y, z)\mathbf{k}$ with a component only in the z-direction, we obtain the line integrals $\int_{C} N dy$ and $\int_{C} P dz$ . Expressing everything in terms of the parameter t along the curve C, we have the following formulas for these three integrals: 

$$
\int_ {C} M (x, y, z) d x = \int_ {C} \mathbf {F} \cdot d \mathbf {r}, \text {   where   } \mathbf {F} = M (x, y, z) \mathbf {i}.
$$

$$
\int_ {C} M (x, y, z) d x = \int_ {a} ^ {b} M (g (t), h (t), k (t)) g ^ {\prime} (t) d t\tag{3}
$$

$$
\int_ {C} N (x, y, z) d y = \int_ {a} ^ {b} N (g (t), h (t), k (t)) h ^ {\prime} (t) d t\tag{4}
$$

$$
\int_ {C} P (x, y, z) d z = \int_ {a} ^ {b} P (g (t), h (t), k (t)) k ^ {\prime} (t) d t\tag{5}
$$

It often happens that these line integrals occur in combination, and we abbreviate the notation by writing 

$$
\int_ {C} M (x, y, z) d x + \int_ {C} N (x, y, z) d y + \int_ {C} P (x, y, z) d z = \int_ {C} M d x + N d y + P d z.
$$

**EXAMPLE 3** Evaluate the line integral $\int_{C} - y dx + z dy + 2x dz$ , where $C$ is the helix $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j} + t\mathbf{k}$ , $0 \leq t \leq 2\pi$ . 

**Solution** We express everything in terms of the parameter t, so $x = \cos t$ , $y = \sin t$ , z = t, and $dx = -\sin t dt$ , $dy = \cos t dt$ , dz = dt. Then 

$$
\begin{array}{l} \int_ {C} - y d x + z d y + 2 x d z = \int_ {0} ^ {2 \pi} [ (- \sin t) (- \sin t) + t \cos t + 2 \cos t ] d t \\ \qquad = \int_ {0} ^ {2 \pi} [ 2 \cos t + t \cos t + \sin^ {2} t ] d t \\ \qquad = \left[ 2 \sin t + (t \sin t + \cos t) + \left(\frac {t}{2} - \frac {\sin 2 t}{4}\right) \right] _ {0} ^ {2 \pi} \\ \qquad = [ 0 + (0 + 1) + (\pi - 0) ] - [ 0 + (0 + 1) + (0 - 0) ] \\ \qquad = \pi . \end{array}
$$

![[1baa89286331dd72a5298b464ff3b744f87b5915e321f281ab8f713dbabe5a0f.jpg|image]]



FIGURE 15.19 The work done along the subarc shown here is approximately $\mathbf{F}_k\cdot \mathbf{T}_k\Delta s_k$ , where $\mathbf{F}_k = \mathbf{F}(x_k,y_k,z_k)$ and $\mathbf{T}_k = \mathbf{T}(x_k,y_k,z_k)$


![[2eae35cb7b338cb1e01b1152812ca1bab42660f764bbd5c1417030019cac2acd.jpg|image]]



FIGURE 15.20 The work done by a force F is the line integral of the scalar component $F \cdot T$ over the smooth curve from A to B.


## Work Done by a Force over a Curve in Space

Suppose that the vector field $\mathbf{F} = M(x, y, z)\mathbf{i} + N(x, y, z)\mathbf{j} + P(x, y, z)\mathbf{k}$ represents a force throughout a region in space (it might be the force of gravity or an electromagnetic force) and that 

$$
\mathbf {r} (t) = g (t) \mathbf {i} + h (t) \mathbf {j} + k (t) \mathbf {k}, \quad a \leq t \leq b,
$$

represents a smooth curve C in the region. The formula for the work done by the force in moving an object along the curve is motivated by the same kind of reasoning we used in Chapter 6 to derive the ordinary single integral for the work done by a continuous force of magnitude $F(x)$ directed along an interval of the x-axis. For the curve C in space, we define the work done by a continuous force field F to move an object along C from a point A to another point B as follows. 

We divide C into n subarcs $P_{k-1}P_{k}$ with lengths $\Delta s_{k}$ , starting at A and ending at B. We choose any point $(x_{k}, y_{k}, z_{k})$ in the subarc $P_{k-1}P_{k}$ and let $\mathbf{T}(x_{k}, y_{k}, z_{k})$ be the unit tangent vector at the chosen point. The work $W_{k}$ done to move the object along the subarc $P_{k-1}P_{k}$ is approximated by the tangential component of the force $\mathbf{F}(x_{k}, y_{k}, z_{k})$ times the arc length $\Delta s_{k}$ , the distance the object moves along the subarc (see Figure 15.19). The total work done in moving the object from point A to point B is then obtained by summing the work done along each of the subarcs, so 

$$
W = \sum_ {k = 1} ^ {n} W _ {k} \approx \sum_ {k = 1} ^ {n} \mathbf {F} (x _ {k}, y _ {k}, z _ {k}) \cdot \mathbf {T} (x _ {k}, y _ {k}, z _ {k}) \Delta s _ {k}.
$$

For any subdivision of C into n subarcs, and for any choice of the points $(x_{k}, y_{k}, z_{k})$ within each subarc, as $n \to \infty$ and $\Delta s_{k} \to 0$ , these sums approach the line integral 

$$
\int_ {C} \mathbf {F} \cdot \mathbf {T} d s.
$$

This is the line integral of $\mathbf{F}$ along $C$ , which now defines the total work done. 

> ***DEFINITION*** Let C be a smooth curve parametrized by $\mathbf{r}(t)$ , $a \leq t \leq b$ , and let F be a continuous force field over a region containing C. Then the work done in moving an object from the point $A = \mathbf{r}(a)$ to the point $B = \mathbf{r}(b)$ along C is 
>
> $$
> W = \int_ {C} \mathbf {F} \cdot \mathbf {T} d s = \int_ {a} ^ {b} \mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} d t.\tag{6}
> $$
>
The sign of the number we calculate with this integral depends on the direction in which the curve is traversed. If we reverse the direction of motion, then we reverse the direction of T in Figure 15.20 and change the sign of $F \cdot T$ and its integral. 

Using the notations we have presented, we can express the work integral in a variety of ways, depending upon what seems most suitable or convenient for a particular discussion. Table 15.2 shows five ways we can write the work integral in Equation (6). In the table, the field components M, N, and P are functions of the intermediate variables x, y, and z, which in turn are functions of the independent variable t along the curve C in the vector field. So along the curve, $x = g(t)$ , $y = h(t)$ , and $z = k(t)$ with $dx = g'(t) dt$ , $dy = h'(t) dt$ , and $dz = k'(t) dt$ . 


TABLE 15.2 Different ways to write the work integral for F = M i + N j + P k over the curve C: r(t) = g(t)i + h(t)j + k(t)k, a ≤ t ≤ b


![[50e4472b8347ab0f553834b24d50db3935593872b7ada8ac42eb06d6c00bd692.jpg|image]]



FIGURE 15.21 The curve in Example 4.


$$
\begin{array}{l l} W = \int_ {C} \mathbf {F} \cdot \mathbf {T} d s & \text { The   definition } \\ = \int_ {C} \mathbf {F} \cdot d \mathbf {r} & \text { Vector   differential   form } \\ = \int_ {a} ^ {b} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t & \text { Parametric   vector   evaluation } \\ = \int_ {a} ^ {b} (M g ^ {\prime} (t) + N h ^ {\prime} (t) + P k ^ {\prime} (t)) d t & \text { Parametric   scalar   evaluation } \\ = \int_ {C} M d x + N d y + P d z & \text { Scalar   differential   form } \end{array}
$$

**EXAMPLE 4** Find the work done by the force field $\mathbf{F} = (y - x^2)\mathbf{i} + (z - y^2)\mathbf{j} + (x - z^2)\mathbf{k}$ in moving an object along the curve $\mathbf{r}(t) = t\mathbf{i} + t^2\mathbf{j} + t^3\mathbf{k}, 0 \leq t \leq 1$ , from $(0,0,0)$ to $(1,1,1)$ (Figure 15.21). 

**Solution** First we evaluate F on the curve $\mathbf{r}(t)$ : 

$$
\begin{array}{l} \mathbf {F} = (y - x ^ {2}) \mathbf {i} + (z - y ^ {2}) \mathbf {j} + (x - z ^ {2}) \mathbf {k} \\ = \underbrace {(t ^ {2} - t ^ {2})} _ {0} \mathbf {i} + (t ^ {3} - t ^ {4}) \mathbf {j} + (t - t ^ {6}) \mathbf {k}. \end{array} \quad \text {   Substitute   } x = t, y = t ^ {2}, z = t ^ {3}.
$$

Then we find $dr / dt$ : 

$$
\frac {d \mathbf {r}}{d t} = \frac {d}{d t} (t \mathbf {i} + t ^ {2} \mathbf {j} + t ^ {3} \mathbf {k}) = \mathbf {i} + 2 t \mathbf {j} + 3 t ^ {2} \mathbf {k}.
$$

Finally, we find $F \cdot dr/dt$ and integrate from t = 0 to t = 1: 

$$
\begin{array}{r l} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} & = [ (t ^ {3} - t ^ {4}) \mathbf {j} + (t - t ^ {6}) \mathbf {k} ] \cdot (\mathbf {i} + 2 t \mathbf {j} + 3 t ^ {2} \mathbf {k}) \\ & = (t ^ {3} - t ^ {4}) (2 t) + (t - t ^ {6}) (3 t ^ {2}) = 2 t ^ {4} - 2 t ^ {5} + 3 t ^ {3} - 3 t ^ {8}. \quad \text { Evaluate   dot   product. } \end{array}
$$

Thus 

$$
\begin{array}{r l} \text { Work } & = \int_ {a} ^ {b} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t = \int_ {0} ^ {1} (2 t ^ {4} - 2 t ^ {5} + 3 t ^ {3} - 3 t ^ {8}) d t \\ & = \left[ \frac {2}{5} t ^ {5} - \frac {2}{6} t ^ {6} + \frac {3}{4} t ^ {4} - \frac {3}{9} t ^ {9} \right] _ {0} ^ {1} = \frac {2 9}{6 0}. \end{array}
$$

**EXAMPLE 5** Find the work done by the force field $\mathbf{F} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ in moving an object along the curve $C$ parametrized by $\mathbf{r}(t) = \cos (\pi t)\mathbf{i} + t^2\mathbf{j} + \sin (\pi t)\mathbf{k}, 0 \leq t \leq 1$ . 

**Solution** We begin by writing F along C as a function of t: 

$$
\mathbf {F} (\mathbf {r} (t)) = \cos (\pi t) \mathbf {i} + t ^ {2} \mathbf {j} + \sin (\pi t) \mathbf {k}.
$$

Next we compute dr/dt: 

$$
\frac {d \mathbf {r}}{d t} = - \pi \sin (\pi t) \mathbf {i} + 2 t \mathbf {j} + \pi \cos (\pi t) \mathbf {k}.
$$

We then calculate the dot product: 

$$
\mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} = - \pi \sin (\pi t) \cos (\pi t) + 2 t ^ {3} + \pi \sin (\pi t) \cos (\pi t) = 2 t ^ {3}.
$$

The work done is the line integral 

$$
\int_ {a} ^ {b} \mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} d t = \left. \int_ {0} ^ {1} 2 t ^ {3} d t = \frac {t ^ {4}}{2} \right| _ {0} ^ {1} = \frac {1}{2}.
$$

## Flow Integrals and Circulation for Velocity Fields

Suppose that $\mathbf{F}$ represents the velocity field of a fluid flowing through a region in space (a tidal basin or the turbine chamber of a hydroelectric generator, for example). Under these circumstances, the integral of $\mathbf{F} \cdot \mathbf{T}$ along a curve in the region gives the fluid's flow along, or circulation around, the curve. For instance, the vector field in Figure 15.12 gives zero circulation around the unit circle in the plane. By contrast, the vector field in Figure 15.13 gives a nonzero circulation around the unit circle. 

> ***DEFINITION*** If $\mathbf{r}(t)$ parametrizes a smooth curve C in the domain of a continuous velocity field F, then the flow along the curve from $A = \mathbf{r}(a)$ to $B = \mathbf{r}(b)$ is 
>
> $$
> \text { Flow } = \int_ {C} \mathbf {F} \cdot \mathbf {T} d s.\tag{7}
> $$
>
The integral is called a flow integral. If the curve starts and ends at the same point, so that A = B, the flow is called the circulation around the curve. 

The direction we travel along C matters. If we reverse the direction, then T is replaced by -T and the sign of the integral changes. We evaluate flow integrals the same way we evaluate work integrals. 

**EXAMPLE 6** A fluid's velocity field is $\mathbf{F} = x\mathbf{i} + z\mathbf{j} + y\mathbf{k}$ . Find the flow along the helix $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j} + t\mathbf{k}, 0 \leq t \leq \pi/2$ . 

**Solution** We evaluate F on the curve $\mathbf{r}(t)$ : 

$$
\mathbf {F} = x \mathbf {i} + z \mathbf {j} + y \mathbf {k} = (\cos t) \mathbf {i} + t \mathbf {j} + (\sin t) \mathbf {k} \quad \text { Substitute } x = \cos t, z = t, y = \sin t.
$$

and then find $d\mathbf{r} / dt$ 

$$
\frac {d \mathbf {r}}{d t} = (- \sin t) \mathbf {i} + (\cos t) \mathbf {j} + \mathbf {k}.
$$

The dot product of $\mathbf{F}$ with $d\mathbf{r} / dt$ is 

$$
\begin{array}{r l} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} & = (\cos t) (- \sin t) + (t) (\cos t) + (\sin t) (1) \\ & = - \sin t \cos t + t \cos t + \sin t. \end{array}
$$

Finally, we integrate $\mathbf{F} \cdot (d\mathbf{r}/dt)$ from $t = 0$ to $t = \frac{\pi}{2}$ : 

$$
\begin{array}{l} \text { Flow } = \int_ {t = a} ^ {t = b} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t = \int_ {0} ^ {\pi / 2} (- \sin t \cos t + t \cos t + \sin t) d t \\ = \left[ \frac {\cos^ {2} t}{2} + t \sin t \right] _ {0} ^ {\pi / 2} = \left(0 + \frac {\pi}{2}\right) - \left(\frac {1}{2} + 0\right) = \frac {\pi}{2} - \frac {1}{2}. \end{array}
$$

![[f295d169604a32f75ff085058666bb4fb931021358c76373e546af840fde24d0.jpg|image]]



FIGURE 15.22 The vector field F and curve $\mathbf{r}(t)$ in Example 7.


Simple,
not closed 

![[63d8c70a962b97ed5a78e6ad8a998afd0fe0f8b2f748a6333ae3eaf37f58fdcb.jpg|image]]



FIGURE 15.23 Distinguishing between curves that are simple and curves that are closed. Closed curves are also called loops.


**EXAMPLE 7** Find the circulation of the field $\mathbf{F} = (x - y)\mathbf{i} + x\mathbf{j}$ around the circle $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}, 0 \leq t \leq 2\pi$ (Figure 15.22). 

Then 

**Solution** On the circle, $\mathbf{F} = (x - y)\mathbf{i} + x\mathbf{j} = (\cos t - \sin t)\mathbf{i} + (\cos t)\mathbf{j}$ , and 

gives 

$$
\frac {d \mathbf {r}}{d t} = (- \sin t) \mathbf {i} + (\cos t) \mathbf {j}.
$$

$$
\mathbf {F} \cdot \frac {d \mathbf {r}}{d t} = - \sin t \cos t + \underbrace {\sin^ {2} t + \cos^ {2} t} _ {1}
$$

$$
\begin{array}{r l} \text { Circulation } & = \int_ {0} ^ {2 \pi} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t = \int_ {0} ^ {2 \pi} (1 - \sin t \cos t) d t \\ & = \left[ t - \frac {\sin^ {2} t}{2} \right] _ {0} ^ {2 \pi} = 2 \pi . \end{array}
$$

As Figure 15.22 suggests, a fluid with this velocity field is circulating counterclockwise around the circle. The circle is also traversed counterclockwise as t increases from 0 to $2\pi$ , so the circulation is positive. 

## Flux Across a Simple Closed Plane Curve

A curve in the xy-plane is simple if it does not cross itself (Figure 15.23). When a curve starts and ends at the same point, it is a closed curve or loop. To find the rate at which a fluid is entering or leaving a region enclosed by a smooth simple closed curve C in the xy-plane, we calculate the line integral over C of $F \cdot n$ , the scalar component of the fluid's velocity field in the direction of the curve's outward-pointing normal vector. We use only the normal component of F, while ignoring the tangential component, because the normal component leads to the flow across C. The value of this integral is the flux of F across C. Flux is Latin for flow, but many flux calculations involve no motion at all. When F is an electric or magnetic field, for instance, the integral of $F \cdot n$ is still called the flux of the field across C. 

> ***DEFINITION*** If C is a smooth simple closed curve in the domain of a continuous vector field $\mathbf{F} = M(x, y)\mathbf{i} + N(x, y)\mathbf{j}$ in the plane, and if n is the outward-pointing unit normal vector on C, the flux of F across C is 
>
> $$
> \text { Flux   of   } \mathbf {F} \text {   across   } C = \int_ {C} \mathbf {F} \cdot \mathbf {n}   d s.\tag{8}
> $$
>
Notice the difference between flux and circulation. The flux of F across C is the line integral with respect to arc length of $F \cdot n$ , the scalar component of F in the direction of the outward normal. The circulation of F around C is the line integral with respect to arc length of $F \cdot T$ , the scalar component of F in the direction of the unit tangent vector. Flux is the integral of the normal component of F; circulation is the integral of the tangential component of F. In Section 15.6 we will define flux across a surface. 

To evaluate the integral for flux in Equation (8), we begin with a smooth parametrization 

$$
x = g (t), \quad y = h (t), \quad a \leq t \leq b,
$$

![[f8b49359c6df10df11e27bc9d9eea8bb0fbc63c90851f20c8745c38320579629.jpg|image]]


![[1338010b34600195af0f9d3af44a72f73bf5b1d630e82cfce0bb584d279dd01f.jpg|image]]



FIGURE 15.24 To find an outward unit normal vector for a smooth simple curve C in the xy-plane that is traversed counterclockwise as t increases, we take $n = T \times k$ . For clockwise motion, we take $n = k \times T$ .


that traces the curve $C$ exactly once as $t$ increases from $a$ to $b$ . We can find the outward unit normal vector $\mathbf{n}$ by crossing the curve's unit tangent vector $\mathbf{T}$ with the vector $\mathbf{k}$ . But which order do we choose, $\mathbf{T} \times \mathbf{k}$ or $\mathbf{k} \times \mathbf{T}$ ? Which one points outward? It depends on which way $C$ is traversed as $t$ increases. If the motion is clockwise, $\mathbf{k} \times \mathbf{T}$ points outward; if the motion is counterclockwise, $\mathbf{T} \times \mathbf{k}$ points outward (Figure 15.24). The usual choice is $\mathbf{n} = \mathbf{T} \times \mathbf{k}$ , the choice that assumes counterclockwise motion. Thus, even though the value of the integral in Equation (8) does not depend on which way $C$ is traversed, the formulas we are about to derive for computing $\mathbf{n}$ and evaluating the integral assume counterclockwise motion. 

In terms of components, 

$$
\mathbf {n} = \mathbf {T} \times \mathbf {k} = \left(\frac {d x}{d s} \mathbf {i} + \frac {d y}{d s} \mathbf {j}\right) \times \mathbf {k} = \frac {d y}{d s} \mathbf {i} - \frac {d x}{d s} \mathbf {j}. \quad \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {d x}{d s} & \frac {d y}{d s} & 0 \\ 0 & 0 & 1 \end{array} \right|
$$

If $\mathbf{F} = M(x,y)\mathbf{i} + N(x,y)\mathbf{j}$ , then 

$$
\mathbf {F} \cdot \mathbf {n} = M (x, y) \frac {d y}{d s} - N (x, y) \frac {d x}{d s}.
$$

Hence, 

$$
\int_ {C} \mathbf {F} \cdot \mathbf {n} d s = \int_ {C} \left(M \frac {d y}{d s} - N \frac {d x}{d s}\right) d s = \oint_ {C} M d y - N d x.
$$

We put a directed circle $\mathsf{O}$ on the last integral as a reminder that the integration around the closed curve $C$ is to be in the counterclockwise direction. To evaluate this integral, we express $M$ , $dy$ , $N$ , and $dx$ in terms of the parameter $t$ and integrate from $t = a$ to $t = b$ . We do not need to know $\mathbf{n}$ or $ds$ explicitly to find the flux. 

Calculating Flux Across a Smooth Closed Plane Curve 

$$
\left(\text { Flux   of } \mathbf {F} = M \mathbf {i} + N \mathbf {j} \text { across } C\right) = \oint_ {C} M d y - N d x\tag{9}
$$

The integral can be evaluated from any smooth parametrization $x = g(t)$ , $y = h(t)$ , $a \leq t \leq b$ , that traces $C$ counterclockwise exactly once. 

**EXAMPLE 8** Find the flux of $\mathbf{F} = (x - y)\mathbf{i} + x\mathbf{j}$ across the circle $x^{2} + y^{2} = 1$ in the $xy$ -plane. (The vector field and curve were shown in Figure 15.22.) 

**Solution** The parametrization $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}, 0 \leq t \leq 2\pi$ , traces the circle counterclockwise exactly once. We can therefore use this parametrization in Equation (9). With 

$$
\begin{array}{l l} M = x - y = \cos t - \sin t, & d y = d (\sin t) = \cos t   d t, \\ N = x = \cos t, & d x = d (\cos t) = - \sin t   d t, \end{array}
$$

we find 

$$
\begin{array}{l} \text { Flux } = \oint_ {C} M d y - N d x = \int_ {0} ^ {2 \pi} (\cos^ {2} t - \sin t \cos t + \cos t \sin t) d t \\ = \int_ {0} ^ {2 \pi} \cos^ {2} t d t = \int_ {0} ^ {2 \pi} \frac {1 + \cos 2 t}{2} d t = \left[ \frac {t}{2} + \frac {\sin 2 t}{4} \right] _ {0} ^ {2 \pi} = \pi . \end{array}\tag{Eq. (9}
$$

The flux of $\mathbf{F}$ across the circle is $\pi$ . Since the answer is positive, the net flow across the curve is outward. A net inward flow would have given a negative flux. 

## EXERCISES

## 15.2

## Vector Fields

Find the gradient fields of the functions in Exercises 1–4. 

$$
f (x, y, z) = \left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {- 1 / 2}
$$

$$
f (x, y, z) = \ln \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}
$$

3. $g(x,y,z) = e^{z} - \ln (x^{2} + y^{2})$ 

4. $g(x,y,z)=xy+yz+xz$ 

5. Give a formula $\mathbf{F} = M(x,y)\mathbf{i} + N(x,y)\mathbf{j}$ for the vector field in the plane that has the property that $\mathbf{F}$ points toward the origin with magnitude inversely proportional to the square of the distance from $(x,y)$ to the origin. (The field is not defined at $(0,0)$ .) 

6. Give a formula $\mathbf{F} = M(x, y)\mathbf{i} + N(x, y)\mathbf{j}$ for the vector field in the plane that has the properties that $F = 0$ at $(0, 0)$ and that at any other point $(a, b)$ , F is tangent to the circle $x^{2} + y^{2} = a^{2} + b^{2}$ and points in the clockwise direction with magnitude $|F| = \sqrt{a^{2} + b^{2}}$ . 

Line Integrals of Vector Fields 

In Exercises 7–12, find the line integrals of F from $(0,0,0)$ to $(1,1,1)$ over each of the following paths in the accompanying figure. 

a. The straight-line path $C_{1}$ : $\mathbf{r}(t) = t\mathbf{i} + t\mathbf{j} + t\mathbf{k}, \quad 0 \leq t \leq 1$ 

b. The curved path $C_2$ : $\mathbf{r}(t) = t\mathbf{i} + t^2\mathbf{j} + t^4\mathbf{k}$ , $0 \leq t \leq 1$ 

c. The path $C_3 \cup C_4$ consisting of the line segment from (0, 0, 0) to (1, 1, 0) followed by the segment from (1, 1, 0) to (1, 1, 1) 

7. $\mathbf{F} = 3y\mathbf{i} + 2x\mathbf{j} + 4z\mathbf{k}$ 8. $\mathbf{F} = [1 / (x^2 + 1)]\mathbf{j}$ 

9. $\mathbf{F} = \sqrt{z}\mathbf{i} - 2x\mathbf{j} + \sqrt{y}\mathbf{k}$ 10. $\mathbf{F} = xy\mathbf{i} + yz\mathbf{j} + xz\mathbf{k}$ 

11. $\mathbf{F} = (3x^{2} - 3x)\mathbf{i} + 3z\mathbf{j} + \mathbf{k}$ 

12. $\mathbf{F} = (y + z)\mathbf{i} + (z + x)\mathbf{j} + (x + y)\mathbf{k}$ 

![[e70eebbbde10f436c6679fb89db42a7345da000bfcd01fb639ae876104f9658f.jpg|image]]


Line Integrals with Respect to $x, y$ , and $z$ 

In Exercises 13–16, find the line integrals along the given path C. 

13. $\int_{C} (x - y) dx$ , where $C: x = t$ , $y = 2t + 1$ , for $0 \leq t \leq 3$ 

14. $\int_{C} \frac{x}{y} dy$ , where $C: x = t, y = t^2$ , for $1 \leq t \leq 2$ 

15. $\int_{C}(x^{2} + y^{2})dy$ , where C is given in the accompanying figure 

![[06199355588bfec6fca47a8296a94326d985bf0f289d3b1a84eec43604a0b5df.jpg|image]]


16. $\int_{C}\sqrt{x+y}dx$ , where C is given in the accompanying figure 

![[f7df10eb8d3b3546550a7903d93b59afa81d1ae9d247252c2acf35c623256e40.jpg|image]]


17. Along the curve $\mathbf{r}(t) = t\mathbf{i} - \mathbf{j} + t^2\mathbf{k}$ , $0 \leq t \leq 1$ , evaluate each of the following integrals. 

a. $\int_{C} (x + y - z) dx$ b. $\int_{C} (x + y - z) dy$ 

c. $\int_{C} (x + y - z) dz$ 

18. Along the curve $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j} - (\cos t)\mathbf{k}$ , $0 \leq t \leq \pi$ , evaluate each of the following integrals. 

$$
\int_ {C} x z d x
$$

b. $\int_{C}xz dy$ 

$$
\int_ {C} x y z d z
$$

Work 

In Exercises 19–22, find the work done by F over the curve in the direction of increasing t. 

19. $\mathbf{F} = xy\mathbf{i} + y\mathbf{j} - yz\mathbf{k}$ 

$$
\mathbf {r} (t) = t \mathbf {i} + t ^ {2} \mathbf {j} + t \mathbf {k}, 0 \leq t \leq 1
$$

20. $\mathbf{F} = 2y\mathbf{i} + 3x\mathbf{j} + (x + y)\mathbf{k}$ 

$$
\mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {j} + (t / 6) \mathbf {k}, 0 \leq t \leq 2 \pi
$$

21. $\mathbf{F} = z\mathbf{i} + x\mathbf{j} + y\mathbf{k}$ 

$$
\mathbf {r} (t) = (\sin t) \mathbf {i} + (\cos t) \mathbf {j} + t \mathbf {k}, 0 \leq t \leq 2 \pi
$$

22. $\mathbf{F} = 6\mathbf{zi} + y^2\mathbf{j} + 12x\mathbf{k}$ 

$$
\mathbf {r} (t) = (\sin t) \mathbf {i} + (\cos t) \mathbf {j} + (t / 6) \mathbf {k}, \quad 0 \leq t \leq 2 \pi
$$

a. 

## Line Integrals in the Plane

23. Evaluate $\int_{C} xy dx + (x + y) dy$ along the curve $y = x^2$ from $(-1, 1)$ to $(2, 4)$ . 

24. Evaluate $\int_{C}(x - y)dx + (x + y)dy$ counterclockwise around the triangle with vertices $(0,0),(1,0)$ , and $(0,1)$ . 

25. Evaluate $\int_{C} \mathbf{F} \cdot \mathbf{T} ds$ for the vector field $\mathbf{F} = x^{2}\mathbf{i} - y\mathbf{j}$ along the curve $x = y^{2}$ from (4, 2) to (1, -1). 

26. Evaluate $\int_{C} F \cdot dr$ for the vector field $F = yi - xj$ counterclockwise along the unit circle $x^{2} + y^{2} = 1$ from (1,0) to (0,1). 

## Work, Circulation, and Flux in the Plane

27. Work Find the work done by the force $\mathbf{F} = xy\mathbf{i} + (y - x)\mathbf{j}$ over the straight line from (1,1) to (2,3). 

28. Work Find the work done by the gradient of $f(x, y) = (x + y)^2$ counterclockwise around the circle $x^2 + y^2 = 4$ from (2, 0) to itself. 

29. Circulation and flux Find the circulation and flux of the fields 

$$
\mathbf {F} _ {1} = x \mathbf {i} + y \mathbf {j} \quad \text { and } \quad \mathbf {F} _ {2} = - y \mathbf {i} + x \mathbf {j}
$$

around and across each of the following curves. 

a. The circle $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}, \quad 0 \leq t \leq 2\pi$ 

b. The ellipse $\mathbf{r}(t) = (\cos t)\mathbf{i} + (4\sin t)\mathbf{j}, \quad 0 \leq t \leq 2\pi$ 

30. Flux across a circle Find the flux of the fields 

$$
\mathbf {F} _ {1} = 2 x \mathbf {i} - 3 y \mathbf {j} \quad \text { and } \quad \mathbf {F} _ {2} = 2 x \mathbf {i} + (x - y) \mathbf {j}
$$

across the circle 

$$
\mathbf {r} (t) = (a \cos t) \mathbf {i} + (a \sin t) \mathbf {j}, \quad 0 \leq t \leq 2 \pi .
$$

In Exercises 31–34, find the circulation and flux of the field F around and across the closed semicircular path that consists of the semicircular arch $\mathbf{r}_{1}(t) = (a \cos t)\mathbf{i} + (a \sin t)\mathbf{j}, 0 \leq t \leq \pi$ , followed by the line segment $\mathbf{r}_{2}(t) = t\mathbf{i}, -a \leq t \leq a$ . 

31. $\mathbf{F} = x\mathbf{i} + y\mathbf{j}$ 

$$
\mathbf {3 2 . F} = x ^ {2} \mathbf {i} + y ^ {2} \mathbf {j}
$$

33. $\mathbf{F} = -y\mathbf{i} + x\mathbf{j}$ 

$$
\mathbf {3 4 . F} = - y ^ {2} \mathbf {i} + x ^ {2} \mathbf {j}
$$

35. Flow integrals Find the flow of the velocity field $\mathbf{F} = (x + y)\mathbf{i} - (x^{2} + y^{2})\mathbf{j}$ along each of the following paths from $(1, 0)$ to $(-1, 0)$ in the xy-plane. 

a. The upper half of the circle $x^{2} + y^{2} = 1$ 

b. The line segment from $(1,0)$ to $(-1,0)$ 

c. The line segment from $(1,0)$ to $(0, - 1)$ followed by the line segment from $(0, - 1)$ to $(-1,0)$ 

36. Flux across a triangle Find the flux of the field $\mathbf{F}$ in Exercise 35 outward across the triangle with vertices $(1,0)$ , $(0,1)$ , $(-1,0)$ . 

37. The flow of a gas with a density of $\delta = 0.001 \, kg/m^{2}$ over the closed curve $\mathbf{r}(t) = (-\sin t)\mathbf{i} + (\cos t)\mathbf{j}, 0 \leq t \leq 2\pi$ , is given by the vector field $F = \delta v$ , where $v = x i + y^{2} j$ is a velocity field measured in meters per second. Find the flux of F across the curve $\mathbf{r}(t)$ . 

38. The flow of a gas with a density of $\delta = 0.3 \, kg/m^{2}$ over the closed curve $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}, 0 \leq t \leq 2\pi$ , is given by the vector field $F = \delta v$ , where $v = x^{2}i - yj$ is a velocity field measured in meters per second. Find the flux of F across the curve $\mathbf{r}(t)$ . 

39. Find the flow of the velocity field $F = y^{2}i + 2xyj$ along each of the following paths from $(0, 0)$ to $(2, 4)$ . 


b.


![[37268968bbf4ffb0e1a675ffabd4e4e58d0c03dfe38f8555aab6425f0937d7b4.jpg|image]]


![[4ad9313a4355329eecc120d6acf92d558e2f2bf6b4639ea1c64c2c503c6fcdf1.jpg|image]]


c. Use any path from $(0,0)$ to $(2,4)$ different from parts (a) and (b). 

40. Find the circulation of the field $\mathbf{F} = y\mathbf{i} + (x + 2y)\mathbf{j}$ around each of the following closed paths. 


a.


![[7d2d692a82eecf5a89bd5de3e2fe28dd7b807ef260d9a7e7adab400b31860ae2.jpg|image]]



b.


![[a051c79f55a060a9ed2d0c67bbcef44387398cb63d8c25eaeb0dd44eb66d68d0.jpg|image]]


c. Use any closed path different from parts (a) and (b). 

41. Find the work done by the force $F = y^{2}i + x^{3}j$ , where force is measured in newtons, in moving an object over the curve $\mathbf{r}(t) = 2ti + t^{2}j$ , $0 \leq t \leq 2$ , where distance is measured in meters. 

42. Find the work done by the force $\mathbf{F}=e^{y}\mathbf{i}+(\ln x)\mathbf{j}+3z\mathbf{k}$ , where force is measured in newtons, in moving an object over the curve $\mathbf{r}(t)=e^{t}\mathbf{i}+(\ln t)\mathbf{j}+t^{2}\mathbf{k},1\leq t\leq e$ , where distance is measured in meters. 

43. Find the flow of the velocity field $F = \frac{x}{y + 1}i + \frac{y}{x + 1}j$ , where velocity is measured in meters per second, over the curve $\mathbf{r}(t) = t^{2}\mathbf{i} + t\mathbf{j}, 0 \leq t \leq 1$ . 

44. Find the flow of the velocity field $\mathbf{F} = (y + z)\mathbf{i} + x\mathbf{j} - y\mathbf{k}$ , where velocity is measured in meters per second, over the curve $\mathbf{r}(t) = e^{t}\mathbf{i} - e^{2t}\mathbf{j} + e^{-t}\mathbf{k}, 0 \leq t \leq \ln 2$ . 

45. Salt water with a density of $\delta = 0.25 \, g/cm^{2}$ flows over the curve $\mathbf{r}(t) = \sqrt{ti} + t\mathbf{j}, 0 \leq t \leq 4$ , according to the vector field $F = \delta v$ , where $v = xy\mathbf{i} + (y - x)\mathbf{j}$ is a velocity field measured in centimeters per second. Find the flow of F over the curve $\mathbf{r}(t)$ . 

46. Propyl alcohol with a density of $\delta = 0.2 \, g/cm^{2}$ flows over the closed curve $\mathbf{r}(t) = (\sin t)\mathbf{i} - (\cos t)\mathbf{j}, 0 \leq t \leq 2\pi$ , according to the vector field $F = \delta v$ , where $\mathbf{v} = (x - y)\mathbf{i} + x^{2}\mathbf{j}$ is a velocity field measured in centimeters per second. Find the circulation of F around the curve $\mathbf{r}(t)$ . 

## Vector Fields in the Plane

47. Spin field Draw the spin field 

$$
\mathbf {F} = - \frac {y}{\sqrt {x ^ {2} + y ^ {2}}} \mathbf {i} + \frac {x}{\sqrt {x ^ {2} + y ^ {2}}} \mathbf {j}
$$

(see Figure 15.13) along with its horizontal and vertical components at a representative assortment of points on the circle $x^{2} + y^{2} = 4$ . 

48. Radial field Draw the radial field 

$$
\mathbf {F} = x \mathbf {i} + y \mathbf {j}
$$

(see Figure 15.12) along with its horizontal and vertical components at a representative assortment of points on the circle $x^{2} + y^{2} = 1$ . 

## 49. A field of tangent vectors

a. Find a field $\mathbf{G} = P(x,y)\mathbf{i} + Q(x,y)\mathbf{j}$ in the $xy$ -plane with the property that at any point $(a,b) \neq (0,0)$ , $\mathbf{G}$ is a vector of magnitude $\sqrt{a^2 + b^2}$ tangent to the circle $x^2 + y^2 = a^2 + b^2$ and pointing in the counterclockwise direction. (The field is undefined at $(0,0)$ .) 

b. How is G related to the spin field F in Figure 15.13? 

50. A field of tangent vectors 

a. Find a field $\mathbf{G} = P(x, y)\mathbf{i} + Q(x, y)\mathbf{j}$ in the xy-plane with the property that at any point $(a, b) \neq (0, 0)$ , G is a unit vector tangent to the circle $x^{2} + y^{2} = a^{2} + b^{2}$ and pointing in the clockwise direction. 

b. How is $\mathbf{G}$ related to the spin field $\mathbf{F}$ in Figure 15.13? 

51. Unit vectors pointing toward the origin Find a field $\mathbf{F} = M(x, y)\mathbf{i} + N(x, y)\mathbf{j}$ in the xy-plane with the property that at each point $(x, y) \neq (0, 0)$ , F is a unit vector pointing toward the origin. (The field is undefined at $(0, 0)$ .) 

52. Two “central” fields Find a field $\mathbf{F} = M(x, y)\mathbf{i} + N(x, y)\mathbf{j}$ in the xy-plane with the property that at each point $(x, y) \neq (0, 0)$ , F points toward the origin and $|F|$ is (a) the distance from $(x, y)$ to the origin, (b) inversely proportional to the distance from $(x, y)$ to the origin. (The field is undefined at $(0, 0)$ .) 

53. Work and area Suppose that $f(t)$ is differentiable and positive for $a \leq t \leq b$ . Let $C$ be the path $\mathbf{r}(t) = t\mathbf{i} + f(t)\mathbf{j}$ , $a \leq t \leq b$ , and $\mathbf{F} = y\mathbf{i}$ . Is there any relation between the value of the work integral 

$$
\int_ {C} \mathbf {F} \cdot d \mathbf {r}
$$

and the area of the region bounded by the t-axis, the graph of f, and the lines t = a and t = b? Give reasons for your answer. 

54. Work done by a radial force with constant magnitude A particle moves along the smooth curve $y = f(x)$ from $(a, f(a))$ to $(b, f(b))$ . The force moving the particle has constant magnitude k and always points away from the origin. Show that the work done by the force is 

$$
\int_ {C} \mathbf {F} \cdot \mathbf {T} d s = k \left[ \left(b ^ {2} + (f (b)) ^ {2}\right) ^ {1 / 2} - \left(a ^ {2} + (f (a)) ^ {2}\right) ^ {1 / 2} \right].
$$

## Flow Integrals in Space

In Exercises 55–58, F is the velocity field of a fluid flowing through a region in space. Find the flow along the given curve in the direction of increasing t. 

$$
\mathbf {5 5 . F} = - 4 x y \mathbf {i} + 8 y \mathbf {j} + 2 \mathbf {k}
$$

$$
\mathbf {r} (t) = t \mathbf {i} + t ^ {2} \mathbf {j} + \mathbf {k}, 0 \leq t \leq 2
$$

$$
\mathbf {5 6 . F} = x ^ {2} \mathbf {i} + y z \mathbf {j} + y ^ {2} \mathbf {k}
$$

$$
\mathbf {r} (t) = 3 t \mathbf {j} + 4 t \mathbf {k}, 0 \leq t \leq 1
$$

$$
\mathbf {5 7 . F} = (x - z) \mathbf {i} + x \mathbf {k}
$$

$$
\mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {k}, 0 \leq t \leq \pi
$$

$$
\mathbf {r} (t) = (- 2 \cos t) \mathbf {i} + (2 \sin t) \mathbf {j} + 2 t \mathbf {k}, 0 \leq t \leq 2 \pi
$$

59. Circulation Find the circulation of $F = 2xi + 2zj + 2yk$ around the closed path consisting of the following three curves traversed in the direction of increasing t. 

$$
\begin{array}{l l} C _ {1} \colon & \mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {j} + t \mathbf {k}, 0 \leq t \leq \pi / 2 \\ C _ {2} \colon & \mathbf {r} (t) = \mathbf {j} + (\pi / 2) (1 - t) \mathbf {k}, 0 \leq t \leq 1 \\ C _ {3} \colon & \mathbf {r} (t) = t \mathbf {i} + (1 - t) \mathbf {j}, 0 \leq t \leq 1 \end{array}
$$

![[18a506bb982a01c819e9caaac5fd46878602891018b3e5cc594168e9def13603.jpg|image]]


60. Zero circulation Let C be the ellipse in which the plane $2x + 3y - z = 0$ meets the cylinder $x^{2} + y^{2} = 12$ . Show, without evaluating either line integral directly, that the circulation of the field $F = xi + yj + zk$ around C in either direction is zero. 

61. Flow along a curve The field $F = xyi + yj - yzk$ is the velocity field of a flow in space. Find the flow from $(0, 0, 0)$ to $(1, 1, 1)$ along the curve of intersection of the cylinder $y = x^{2}$ and the plane z = x. (Hint: Use t = x as the parameter.) 

![[f981edd463910a34dc3c5f0663c2ea16cbc55896f3c08a817c3530046e631a5c.jpg|image]]


62. Flow of a gradient field Find the flow of the field $\mathbf{F} = \nabla (xy^{2}z^{3})$ : 

a. Once around the curve C in Exercise 58, clockwise as viewed from above; 

b. Along the line segment from $(1,1,1)$ to $(2,1,-1)$ . 

## COMPUTER EXPLORATIONS

In Exercises 63–68, use a CAS to perform the following steps for finding the work done by force F over the given path: 

a. Find $d\mathbf{r}$ for the path $\mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}$ . 

b. Evaluate the force F along the path. 

c. Evaluate $\int_{C}\mathbf{F}\cdot d\mathbf{r}$ 

63. $\mathbf{F} = xy^6\mathbf{i} + 3x(xy^5 +2)\mathbf{j};\quad \mathbf{r}(t) = (2\cos t)\mathbf{i} + (\sin t)\mathbf{j},$ $0\leq t\leq 2\pi$ 

64. $\mathbf{F} = \frac{3}{1 + x^2}\mathbf{i} + \frac{2}{1 + y^2}\mathbf{j};\quad \mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j},$ 

$$
\leq t \leq \pi
$$

65. $\mathbf{F} = (y + yz\cos xyz)\mathbf{i} + (x^2 +xz\cos xyz)\mathbf{j}+$ $(z + xy\cos xyz)\mathbf{k};\quad \mathbf{r}(t) = (2\cos t)\mathbf{i} + (3\sin t)\mathbf{j} + \mathbf{k},$ $0\leq t\leq 2\pi$ 

66. $\mathbf{F} = 2xy\mathbf{i} - y^2\mathbf{j} + ze^x\mathbf{k};\quad \mathbf{r}(t) = -t\mathbf{i} + \sqrt{t}\mathbf{j} + 3t\mathbf{k},$ $1\leq t\leq 4$ 

67. $\mathbf{F} = (2y + \sin x)\mathbf{i} + (z^2 + (1/3)\cos y)\mathbf{j} + x^4\mathbf{k};$ $\mathbf{r}(t) = (\sin t)\mathbf{i} + (\cos t)\mathbf{j} + (\sin 2t)\mathbf{k}, -\pi /2\leq t\leq \pi /2$ 

68. $\mathbf{F} = (x^{2}y)\mathbf{i} + \frac{1}{3} x^{3}\mathbf{j} + xy\mathbf{k};\quad \mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}+$ $(2\sin^2 t - 1)\mathbf{k},\quad 0\leq t\leq 2\pi$ 

## 15.3 Path Independence, Conservative Fields, and Potential Functions

A gravitational field G is a vector field that represents the effect of gravity at a point in space due to the presence of a massive object. The gravitational force on a body of mass m placed in the field is given by F = mG. Similarly, an electric field E is a vector field in space that represents the effect of electric forces on a charged particle placed within it. The force on a body of charge q placed in the field is given by F = qE. In gravitational and electric fields, the amount of work it takes to move a mass or charge from one point to another depends on the initial and final positions of the object—not on which path is taken between these positions. In this section we study vector fields with this independence-of-path property and the calculation of work integrals associated with them. 

## Path Independence

If $A$ and $B$ are two points in an open region $D$ in space, the line integral of $\mathbf{F}$ along $C$ from $A$ to $B$ for a field $\mathbf{F}$ defined on $D$ usually depends on the path $C$ taken, as we saw in Section 15.1. For some special fields, however, the integral's value is the same for all paths from $A$ to $B$ . 

> ***DEFINITIONS*** Let F be a vector field defined on an open region D in space, and suppose that for any two points A and B in D, the line integral $\int_{C} F \cdot dr$ along a path C from A to B in D is the same over all paths from A to B. Then the integral $\int_{C} F \cdot dr$ is path independent in D and the field F is conservative on D. 

The word conservative comes from physics, where it refers to fields in which the principle of conservation of energy holds. When a line integral is independent of the path C from point A to point B, we sometimes represent the integral by the symbol $\int_{A}^{B}$ rather than the usual line integral symbol $\int_{C}$ . This substitution helps us remember the path-independence property by indicating that the integral depends only on the initial and final points, not on the path connecting them. 

![[5a40879038c38d961a36da13dceb3ff6b740a21047f29fedaba52cfc0c714fea.jpg|image]]



(a)


![[5055d12f916332d4ffd12c37c14059199f801c798f3645a05bc9f11973b91130.jpg|image]]



(b)


![[9fb3d591c84b4a0fac87d929e6c567ad07c4f92764ffa7214f251737c2e22e46.jpg|image]]



Not simply connected



(c)


![[fce9b811133ab0c9799b6b3fe182d85484b37a64b03f4d04bba2b4f6ea9bd210.jpg|image]]



(d)



FIGURE 15.25 Four connected regions. In (a) and (b), the regions are simply connected. In (c) and (d), the regions are not simply connected because the curves $C_1$ and $C_2$ cannot be contracted to a point inside the regions containing them.


Under reasonable differentiability conditions that we will specify, we will show that a field F is conservative if and only if it is the gradient field of a scalar function f—that is, if and only if $F = \nabla f$ for some f. The function f then has a special name. 

> ***DEFINITION*** If F is a vector field defined on D and $F = \nabla f$ for some scalar function f on D, then f is called a potential function for F. 

A gravitational potential is a scalar function whose gradient field is a gravitational field, an electric potential is a scalar function whose gradient field is an electric field, and so on. As we will see, once we have found a potential function f for a field F, we can evaluate all the line integrals in the domain of F over any path between A and B by 

$$
\int_ {A} ^ {B} \mathbf {F} \cdot d \mathbf {r} = \int_ {A} ^ {B} \nabla f \cdot d \mathbf {r} = f (B) - f (A).\tag{1}
$$

If you think of $\nabla f$ for functions of several variables as analogous to the derivative $f'$ for functions of a single variable, then you see that Equation (1) is the vector calculus rendition of the Fundamental Theorem of Calculus formula 

$$
\int_ {a} ^ {b} f ^ {\prime} (x) d x = f (b) - f (a).
$$

Conservative fields have other important properties. For example, saying that F is conservative on D is equivalent to saying that the integral of F around every closed path in D is zero. Certain conditions on the curves, fields, and domains must be satisfied for Equation (1) to be valid. We discuss these conditions next. 

## Assumptions on Curves, Vector Fields, and Domains

In order for the computations and results we derive below to be valid, we must assume certain properties for the curves, surfaces, domains, and vector fields we consider. We give these assumptions in the statements of theorems, and they also apply to the examples and exercises unless otherwise stated. 

The curves we consider are piecewise smooth. Such curves are made up of finitely many smooth pieces connected end to end, as discussed in Section 12.1. For such curves we can compute lengths and, except at finitely many points where the smooth pieces connect, tangent vectors. We consider vector fields F whose components have continuous first partial derivatives. 

The domains D we consider are connected. For an open region, this means that any two points in D can be joined by a smooth curve that lies in the region. Some results require D to be simply connected, which means that every loop in D can be contracted to a point in D without ever leaving D. The plane with a disk removed is a two-dimensional region that is not simply connected; a loop in the plane that goes around the disk cannot be contracted to a point without going into the “hole” left by the removed disk (see Figure 15.25c). Similarly, if we remove a line from space, the remaining region D is not simply connected. A curve encircling the line cannot be shrunk to a point while remaining inside D. 

Connectivity and simple connectivity are not the same, and neither property implies the other. Think of connected regions as being in “one piece” and of simply connected regions as not having any “loop-catching holes.” All of space itself is both connected and simply connected. Figure 15.25 illustrates some of these properties. 

Caution Some of the results in this chapter can fail to hold if applied to situations where the conditions we've imposed are not met. In particular, the component test for conservative fields, given later in this section, is not valid on domains that are not simply connected (see Example 5). The condition will be stated when needed. 

## Line Integrals in Conservative Fields

A gradient field F is obtained by differentiating a scalar function f. A theorem analogous to the Fundamental Theorem of Calculus gives a way to evaluate the line integrals of gradient fields. 

Like the Fundamental Theorem of Calculus, Theorem 1 gives a direct way to evaluate line integrals without having to take limits of Riemann sums and without needing to compute a line integral by the procedure used in Section 15.2. Before proving Theorem 1, we give an example. 

## THEOREM 1—Fundamental Theorem of Line Integrals

Let C be a smooth curve joining the point A to the point B in the plane or in space and parametrized by $\mathbf{r}(t)$ . Let f be a differentiable function with a continuous gradient vector $F = \nabla f$ on a domain D containing C. Then 

$$
\int_ {C} \mathbf {F} \cdot d \mathbf {r} = f (B) - f (A).
$$

**EXAMPLE 1** Suppose the force field $F = \nabla f$ is the gradient of the function 

$$
f (x, y, z) = - \frac {1}{x ^ {2} + y ^ {2} + z ^ {2}}.
$$

Find the work done by $\mathbf{F}$ in moving an object along a smooth curve $C$ joining $(1,0,0)$ to $(0,0,2)$ that does not pass through the origin. 

**Solution** An application of Theorem 1 shows that the work done by F along any smooth curve C joining the two points and not passing through the origin is 

$$
\int_ {C} \mathbf {F} \cdot d \mathbf {r} = f (0, 0, 2) - f (1, 0, 0) = - \frac {1}{4} - (- 1) = \frac {3}{4}.
$$

The gravitational force due to a planet, and the electric force associated with a charged particle, can both be modeled by the field F given in Example 1 up to a constant that depends on the units of measurement. When used to model gravity, the function f in Example 1 represents gravitational potential energy. The sign of f is negative, and f approaches $-\infty$ near the origin. This choice ensures that the gravitational force F, the gradient of f, points toward the origin, so that objects fall down rather than up. 

Proof of Theorem 1 Suppose that A and B are two points in the region D and that $C: \mathbf{r}(t) = g(t)\mathbf{i} + h(t)\mathbf{j} + k(t)\mathbf{k}, a \leq t \leq b$ , is a smooth curve in D joining A to B. In Section 13.5 we found that the derivative of a scalar function f along a path C is the dot product $\nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$ , so we have 

$$
\begin{array}{l l} \int_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {C} \nabla f \cdot d \mathbf {r} & \mathbf {F} = \nabla f \\ = \int_ {t = a} ^ {t = b} \nabla f (\mathbf {r} (t)) \cdot \mathbf {r} ^ {\prime} (t) d t & \text { Eq.   (2)   of   Section   15.2   for   computing   } d \mathbf {r} \\ = \int_ {a} ^ {b} \frac {d}{d t} f (\mathbf {r} (t)) d t & \text { Eq.   (7)   of   Section   13.5   giving   derivative   along   a   path } \\ = f (\mathbf {r} (b)) - f (\mathbf {r} (a)) & \text { Fundamental   Theorem   of   Calculus } \\ = f (B) - f (A). & \mathbf {r} (a) = A, \mathbf {r} (b) = B \end{array}
$$

![[7919662988fc40b94de2405f04829144894c8f85f76ebe276ce0b7f0030aaca5.jpg|image]]



FIGURE 15.26 The function $f(x,y,z)$ in the proof of Theorem 2 is computed by a line integral $\int_{C_0}\mathbf{F}\cdot d\mathbf{r} = f(B_0)$ from $A$ to $B_{0}$ , plus a line integral $\int_{L}\mathbf{F}\cdot d\mathbf{r}$ along a line segment $L$ parallel to the $x$ -axis and joining $B_{0}$ to $B$ located at $(x,y,z)$ . The value of $f$ at $A$ is $f(A) = 0$ .


We see from Theorem 1 that the line integral of a gradient field $F = \nabla f$ is straightforward to compute once we know the function f. Many important vector fields arising in applications are indeed gradient fields. The next result, which follows from Theorem 1, shows that any conservative field is of this type. 

## THEOREM 2—Conservative Fields Are Gradient Fields

Let $F = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}$ be a vector field whose components are continuous throughout an open connected region D in space. Then F is conservative if and only if F is a gradient field $\nabla f$ for a differentiable function f. 

Theorem 2 says that $F = \nabla f$ if and only if, for any two points A and B in the region D, the value of the line integral $\int_{C} F \cdot dr$ is independent of the path C joining A to B in D. 

Proof of Theorem 2 If F is a gradient field, then $F = \nabla f$ for a differentiable function f, and Theorem 1 shows that $\int_{C} \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$ . The value of the line integral does not depend on C, but only on its endpoints A and B. So the line integral is path independent and F satisfies the definition of a conservative field. 

On the other hand, suppose that $\mathbf{F}$ is a conservative vector field. We want to find a function $f$ on $D$ satisfying $\nabla f = \mathbf{F}$ . First, pick a point $A$ in $D$ and set $f(A) = 0$ . For any other point $B$ in $D$ define $f(B)$ to equal $\int_{C} \mathbf{F} \cdot d\mathbf{r}$ , where $C$ is any smooth path in $D$ from $A$ to $B$ . The value of $f(B)$ does not depend on the choice of $C$ , since $\mathbf{F}$ is conservative. To show that $\nabla f = \mathbf{F}$ , we need to demonstrate that $\partial f / \partial x = M$ , $\partial f / \partial y = N$ , and $\partial f / \partial z = P$ . 

Suppose that B has coordinates $(x, y, z)$ . By the definition of f, the value of the function f at a nearby point $B_{0}$ located at $(x_{0}, y, z)$ is $\int_{C_{0}} F \cdot dr$ , where $C_{0}$ is any path from A to $B_{0}$ . We take a path $C = C_{0} \cup L$ from A to B formed by first traveling along $C_{0}$ to arrive at $B_{0}$ and then traveling along the line segment L from $B_{0}$ to B (Figure 15.26). When $B_{0}$ is close to B, the segment L lies in D and, since the value $f(B)$ is independent of the path from A to B, 

$$
f (x, y, z) = \int_ {C _ {0}} \mathbf {F} \cdot d \mathbf {r} + \int_ {L} \mathbf {F} \cdot d \mathbf {r}.
$$

Differentiating, we have 

$$
\frac {\partial}{\partial x} f (x, y, z) = \frac {\partial}{\partial x} \left(\int_ {C _ {0}} \mathbf {F} \cdot d \mathbf {r} + \int_ {L} \mathbf {F} \cdot d \mathbf {r}\right).
$$

Only the last term on the right depends on x, so 

$$
\frac {\partial}{\partial x} f (x, y, z) = \frac {\partial}{\partial x} \int_ {L} \mathbf {F} \cdot d \mathbf {r}.
$$

Now we parametrize $L$ as $\mathbf{r}(t) = t\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ , $x_0 \leq t \leq x$ . Then $d\mathbf{r} / dt = \mathbf{i}$ , and since $\mathbf{F} = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}$ , it follows that $\mathbf{F} \cdot d\mathbf{r} / dt = M$ and $\int_{L}\mathbf{F} \cdot d\mathbf{r} = \int_{x_0}^x M(t,y,z)dt$ . Differentiating then gives 

$$
\frac {\partial}{\partial x} f (x, y, z) = \frac {\partial}{\partial x} \int_ {x _ {0}} ^ {x} M (t, y, z) d t = M (x, y, z)
$$

by the Fundamental Theorem of Calculus. The partial derivatives $\partial f / \partial y = N$ and $\partial f / \partial z = P$ follow similarly, showing that $\mathbf{F} = \nabla f$ . 

![[4a50d83a5255aeacd6bfb6772f10801135b0bf05d81e780ca3b23f0700714643.jpg|image]]



FIGURE 15.27 If we have two paths from A to B, one of them can be reversed to make a loop.


![[6d4fc94899ebedc20cbc4cefdf63bd20da7b4002ef76176c2472ee891e2e26e9.jpg|image]]



FIGURE 15.28 If A and B lie on a loop, we can reverse part of the loop to make two paths from A to B.


**EXAMPLE 2** Find the work done by the conservative field 

$$
\mathbf {F} = y z \mathbf {i} + x z \mathbf {j} + x y \mathbf {k} = \nabla f, \text {   where   } f (x, y, z) = x y z,
$$

in moving an object along any smooth curve C joining the point $A(-1,3,9)$ to $B(1,6,-4)$ . 

**Solution** With $f(x, y, z) = xyz$ , we have 

$$
\begin{array}{l l} \int_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {A} ^ {B} \nabla f \cdot d \mathbf {r} & \text { F } = \nabla f \text {   and   path   independence } \\ = f (B) - f (A) & \text { Theorem   1 } \\ = x y z | _ {(1, 6, - 4)} - x y z | _ {(- 1, 3, 9)} \\ = (1) (6) (- 4) - (- 1) (3) (9) \\ = - 2 4 + 2 7 = 3. \end{array}
$$

A very useful property of line integrals in conservative fields comes into play when the path of integration is a closed curve, or loop. We often use the notation $\oint_{C}$ for integration around a closed path (discussed with more detail in the next section). 

THEOREM 3—Loop Property of Conservative Fields
The following statements are equivalent.
1. $\oint_{C} F \cdot dr = 0$ around every loop (that is, closed curve C) in D.
2. The field F is conservative on D. 

Proof that Part 1 $\Rightarrow$ Part 2 We want to show that for any two points $A$ and $B$ in $D$ , the integral of $\mathbf{F} \cdot d\mathbf{r}$ has the same value over any two paths $C_1$ and $C_2$ from $A$ to $B$ . We reverse the direction on $C_2$ to make a path $-C_2$ from $B$ to $A$ (Figure 15.27). Together, $C_1$ and $-C_2$ make a closed loop $C$ , and by assumption, 

$$
\int_ {C _ {1}} \mathbf {F} \cdot d \mathbf {r} - \int_ {C _ {2}} \mathbf {F} \cdot d \mathbf {r} = \int_ {C _ {1}} \mathbf {F} \cdot d \mathbf {r} + \int_ {- C _ {2}} \mathbf {F} \cdot d \mathbf {r} = \int_ {C} \mathbf {F} \cdot d \mathbf {r} = 0.
$$

Thus, the integrals over $C_{1}$ and $C_{2}$ give the same value. Note that the definition of $F \cdot dr$ shows that changing the direction along a curve reverses the sign of the line integral. 

Proof that Part 2 $\Rightarrow$ Part 1 We want to show that the integral of $\mathbf{F} \cdot d\mathbf{r}$ is zero over any closed loop $C$ . We pick two points $A$ and $B$ on $C$ and use them to break $C$ into two pieces: $C_1$ from $A$ to $B$ followed by $C_2$ from $B$ back to $A$ (Figure 15.28). Then 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {C _ {1}} \mathbf {F} \cdot d \mathbf {r} + \int_ {C _ {2}} \mathbf {F} \cdot d \mathbf {r} = \int_ {A} ^ {B} \mathbf {F} \cdot d \mathbf {r} - \int_ {A} ^ {B} \mathbf {F} \cdot d \mathbf {r} = 0.
$$

The following diagram summarizes the results of Theorems 2 and 3. 

$$
\mathbf {F} = \nabla f \text {   on   } D \quad \Leftrightarrow \quad \begin{array}{l} \text { Theorem   2 } \\ \text { F   conservative } \\ \text { on   } D \end{array} \quad \Leftrightarrow \quad \begin{array}{l} \text { Theorem   3 } \\ \text { } \Leftrightarrow \\ \text { over   any   loop   in   } D \end{array} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = 0
$$

Two questions arise: 

1. How do we know whether a given vector field F is conservative? 

2. If $\mathbf{F}$ is in fact conservative, how do we find a potential function $f$ (so that $\mathbf{F} = \nabla f$ )? 

## Finding Potentials for Conservative Fields

The test for a vector field being conservative involves the equivalence of certain first partial derivatives of the field components. 

Component Test for Conservative Fields 

Let $\mathbf{F} = M(x, y, z)\mathbf{i} + N(x, y, z)\mathbf{j} + P(x, y, z)\mathbf{k}$ be a field on an open simply connected domain whose component functions have continuous first partial derivatives. Then F is conservative if and only if 

$$
\frac {\partial P}{\partial y} = \frac {\partial N}{\partial z}, \quad \frac {\partial M}{\partial z} = \frac {\partial P}{\partial x}, \quad \text { and } \quad \frac {\partial N}{\partial x} = \frac {\partial M}{\partial y}.\tag{2}
$$

We can view the component test as saying that on a simply connected region, the vector 

$$
\left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) \mathbf {i} + \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) \mathbf {j} + \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \mathbf {k}\tag{3}
$$

is zero if and only if F is conservative. This interesting vector curl F is called the curl of F. We study it in Sections 15.4 and 15.7. 

Proof that Equations (2) hold if $\mathbf{F}$ is conservative If $\mathbf{F}$ is conservative, then there is a potential function $f$ such that 

$$
\mathbf {F} = M \mathbf {i} + N \mathbf {j} + P \mathbf {k} = \nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k}.
$$

Hence, 

$$
\begin{array}{l l} \frac {\partial P}{\partial y} = \frac {\partial}{\partial y} \left(\frac {\partial f}{\partial z}\right) = \frac {\partial^ {2} f}{\partial y \partial z} \\ = \frac {\partial^ {2} f}{\partial z \partial y} & \text { Mixed   Derivative   Theorem, } \\ = \frac {\partial}{\partial z} \left(\frac {\partial f}{\partial y}\right) = \frac {\partial N}{\partial z}. \end{array} \tag {Section13.3}
$$

The others in Equations (2) are proved similarly. 

The second half of the proof, that Equations (2) imply that $\mathbf{F}$ is conservative, is a consequence of Stokes' Theorem, taken up in Section 15.7, and requires our assumption that the domain of $\mathbf{F}$ be simply connected. 

Once we know that $\mathbf{F}$ is conservative, we often want to find a potential function for $\mathbf{F}$ . This requires solving the equation $\nabla f = \mathbf{F}$ or 

$$
\frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k} = M \mathbf {i} + N \mathbf {j} + P \mathbf {k}
$$

for $f$ . We accomplish this by integrating the three equations 

$$
\frac {\partial f}{\partial x} = M, \quad \frac {\partial f}{\partial y} = N, \quad \frac {\partial f}{\partial z} = P,
$$

as illustrated in the next example. 

**EXAMPLE 3** Show that $\mathbf{F} = (e^{x} \cos y + yz)\mathbf{i} + (xz - e^{x} \sin y)\mathbf{j} + (xy + z)\mathbf{k}$ is conservative over its natural domain, and find a potential function for it. 

**Solution** The natural domain of $\mathbf{F}$ is all of space, which is open and simply connected. We apply the test in Equations (2) to 

$$
M = e ^ {x} \cos y + y z, \quad N = x z - e ^ {x} \sin y, \quad P = x y + z
$$

and calculate 

$$
\frac {\partial P}{\partial y} = x = \frac {\partial N}{\partial z}, \quad \frac {\partial M}{\partial z} = y = \frac {\partial P}{\partial x}, \quad \frac {\partial N}{\partial x} = - e ^ {x} \sin y + z = \frac {\partial M}{\partial y}.
$$

The partial derivatives are continuous, so these equalities tell us that $\mathbf{F}$ is conservative, so there is a function $f$ with $\nabla f = \mathbf{F}$ (Theorem 2). 

We find $f$ by integrating the equations 

$$
\frac {\partial f}{\partial x} = e ^ {x} \cos y + y z, \quad \frac {\partial f}{\partial y} = x z - e ^ {x} \sin y, \quad \frac {\partial f}{\partial z} = x y + z.\tag{4}
$$

We integrate the first equation with respect to x, holding y and z fixed, to get 

$$
f (x, y, z) = e ^ {x} \cos y + x y z + g (y, z).
$$

We write the constant of integration as a function of y and z because its value may depend on y and z, though not on x. We then calculate $\partial f/\partial y$ from this equation and match it with the expression for $\partial f/\partial y$ in Equations (4). This gives 

$$
- e ^ {x} \sin y + x z + \frac {\partial g}{\partial y} = x z - e ^ {x} \sin y,
$$

so $\partial g / \partial y = 0$ . Therefore, $g$ is a function of $z$ alone, and 

$$
f (x, y, z) = e ^ {x} \cos y + x y z + h (z).
$$

We now calculate $\partial f/\partial z$ from this equation and match it to the formula for $\partial f/\partial z$ in Equations (4). This gives 

$$
x y + \frac {d h}{d z} = x y + z, \quad \text { or } \quad \frac {d h}{d z} = z,
$$

SO 

$$
h (z) = \frac {z ^ {2}}{2} + C.
$$

Hence, 

$$
f (x, y, z) = e ^ {x} \cos y + x y z + \frac {z ^ {2}}{2} + C.
$$

We found infinitely many potential functions of $\mathbf{F}$ , one for each value of $C$ . 

## **EXAMPLE 4** Show that $\mathbf{F} = (2x - 3)\mathbf{i} - z\mathbf{j} + (\cos z)\mathbf{k}$ is not conservative.

**Solution** We apply the Component Test in Equations (2) and find immediately that 

$$
\frac {\partial P}{\partial y} = \frac {\partial}{\partial y} (\cos z) = 0, \quad \frac {\partial N}{\partial z} = \frac {\partial}{\partial z} (- z) = - 1.
$$

The two are unequal, so F is not conservative. No further testing is required. 

**EXAMPLE 5** Show that the vector field 

$$
\mathbf {F} = \frac {- y}{x ^ {2} + y ^ {2}} \mathbf {i} + \frac {x}{x ^ {2} + y ^ {2}} \mathbf {j} + 0 \mathbf {k}
$$

satisfies the equations in the Component Test but is not conservative over its natural domain. Explain why this is possible. 

**Solution** We have $M = -y/(x^{2} + y^{2})$ , $N = x/(x^{2} + y^{2})$ , and P = 0. If we apply the Component Test, we find 

$$
\frac {\partial P}{\partial y} = 0 = \frac {\partial N}{\partial z}, \quad \frac {\partial P}{\partial x} = 0 = \frac {\partial M}{\partial z}, \quad \text { and } \quad \frac {\partial M}{\partial y} = \frac {y ^ {2} - x ^ {2}}{(x ^ {2} + y ^ {2}) ^ {2}} = \frac {\partial N}{\partial x}.
$$

So it may appear that the field $\mathbf{F}$ passes the Component Test. However, the test assumes that the domain of $\mathbf{F}$ is simply connected, which is not the case here. Since $x^{2} + y^{2}$ cannot equal zero, the natural domain is the complement of the $z$ -axis and contains loops that cannot be contracted to a point. One such loop is the unit circle $C$ in the $xy$ -plane. The circle is parametrized by $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j}, 0 \leq t \leq 2\pi$ . This loop wraps around the $z$ -axis and cannot be contracted to a point while staying within the complement of the $z$ -axis. 

To show that $\mathbf{F}$ is not conservative, we compute the line integral $\oint_{C} \mathbf{F} \cdot d\mathbf{r}$ around the loop $C$ . First we write the field in terms of the parameter $t$ : 

$$
\mathbf {F} = \frac {- y}{x ^ {2} + y ^ {2}} \mathbf {i} + \frac {x}{x ^ {2} + y ^ {2}} \mathbf {j} = \frac {- \sin t}{\sin^ {2} t + \cos^ {2} t} \mathbf {i} + \frac {\cos t}{\sin^ {2} t + \cos^ {2} t} \mathbf {j} = (- \sin t) \mathbf {i} + (\cos t) \mathbf {j}.
$$

Next we find $dr/dt = (-\sin t)\mathbf{i} + (\cos t)\mathbf{j}$ and then calculate the line integral as 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \oint_ {C} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t = \int_ {0} ^ {2 \pi} (\sin^ {2} t + \cos^ {2} t) d t = 2 \pi .
$$

Since the line integral of $\mathbf{F}$ around the loop $C$ is not zero, the field $\mathbf{F}$ is not conservative, by Theorem 3. The field $\mathbf{F}$ is displayed in Figure 15.31d in the next section. 

Example 5 shows that the Component Test does not apply when the domain of the field is not simply connected. However, if we change the domain in the example so that it is restricted to the ball of radius 1 centered at the point $(2, 2, 2)$ , or to any similar ball-shaped region that does not contain a piece of the z-axis, then this new domain D is simply connected. Now the partial derivative Equations (2), as well as all the assumptions of the Component Test, are satisfied. In this new situation, the field F in Example 5 is conservative on D. Just as we must be careful with a function when determining whether it satisfies a property throughout its domain (such as continuity, which is required for the Intermediate Value Property), so must we also be careful with a vector field in determining the properties it may or may not have over its assigned domain. 

## Exact Differential Forms

It is often convenient to express work and circulation integrals in the differential form 

$$
\int_ {C} M d x + N d y + P d z
$$

discussed in Section 15.2. Such line integrals are relatively easy to evaluate if $M \, dx + N \, dy + P \, dz$ is the total differential of a function $f$ and if $C$ is any path joining the point $A$ to the point $B$ , for then 

$$
\begin{array}{r l} \int_ {C} M d x + N d y + P d z & = \int_ {C} \frac {\partial f}{\partial x} d x + \frac {\partial f}{\partial y} d y + \frac {\partial f}{\partial z} d z \\ & = \int_ {A} ^ {B} \nabla f \cdot d \mathbf {r} \\ & = f (B) - f (A). \end{array}
$$

$\nabla f$ is conservative. 

Theorem 1 

Thus, 

$$
\int_ {A} ^ {B} d f = f (B) - f (A),
$$

just as with differentiable functions of a single variable. 

> ***DEFINITIONS*** Any expression $M(x, y, z) \, dx + N(x, y, z) \, dy + P(x, y, z) \, dz$ is a differential form. A differential form is exact on a domain D in space if 
>
> $$
> M d x + N d y + P d z = \frac {\partial f}{\partial x} d x + \frac {\partial f}{\partial y} d y + \frac {\partial f}{\partial z} d z = d f
> $$
>
for some scalar function f throughout D. 

Notice that if $M \, dx + N \, dy + P \, dz = df$ on D, then $F = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}$ is the gradient field of f on D. Conversely, if $F = \nabla f$ , then the form $M \, dx + N \, dy + P \, dz$ is exact. The test for the form being exact is therefore the same as the test for F being conservative. 

## Component Test for Exactness of M dx + N dy + P dz

The differential form $M \, dx + N \, dy + P \, dz$ is exact on an open simply connected domain if and only if 

$$
\frac {\partial P}{\partial y} = \frac {\partial N}{\partial z}, \quad \frac {\partial M}{\partial z} = \frac {\partial P}{\partial x}, \quad \text { and } \quad \frac {\partial N}{\partial x} = \frac {\partial M}{\partial y}.
$$

This is equivalent to saying that the field $F = M i + N j + P k$ is conservative. 

## **EXAMPLE 6** Show that $y \, dx + x \, dy + 4 \, dz$ is exact, and evaluate the integral

$$
\int_ {(1, 1, 1)} ^ {(2, 3, - 1)} y d x + x d y + 4 d z
$$

over any path from $(1,1,1)$ to $(2,3,-1)$ . 

**Solution** Note that the domain of $\mathbf{F}$ fills all of three-dimensional space, so it is simply connected. We let $M = y$ , $N = x$ , $P = 4$ and apply the Component Test for Exactness: 

$$
\frac {\partial P}{\partial y} = 0 = \frac {\partial N}{\partial z}, \quad \frac {\partial M}{\partial z} = 0 = \frac {\partial P}{\partial x}, \quad \frac {\partial N}{\partial x} = 1 = \frac {\partial M}{\partial y}.
$$

These equalities tell us that $y \, dx + x \, dy + 4 \, dz$ is exact, so 

$$
y d x + x d y + 4 d z = d f
$$

for some function $f$ , and the integral's value is $f(2,3,-1) - f(1,1,1)$ . 

We find $f$ up to a constant by integrating the equations 

$$
\frac {\partial f}{\partial x} = y, \quad \frac {\partial f}{\partial y} = x, \quad \frac {\partial f}{\partial z} = 4.\tag{5}
$$

From the first equation we get 

$$
f (x, y, z) = x y + g (y, z).
$$

The second equation tells us that 

$$
\frac {\partial f}{\partial y} = x + \frac {\partial g}{\partial y} = x, \quad \text { or } \quad \frac {\partial g}{\partial y} = 0.
$$

Hence, g is a function of z alone, and 

$$
f (x, y, z) = x y + h (z).
$$

The third of Equations (5) tells us that 

$$
\frac {\partial f}{\partial z} = 0 + \frac {d h}{d z} = 4, \quad \text { or } \quad h (z) = 4 z + C.
$$

Therefore, 

$$
f (x, y, z) = x y + 4 z + C.
$$

The value of the line integral is independent of the path taken from $(1,1,1)$ to $(2,3,-1)$ and equals 

$$
f (2, 3, - 1) - f (1, 1, 1) = 2 + C - (5 + C) = - 3.
$$

## EXERCISES

## 15.3

Testing for Conservative Fields 

Which fields in Exercises 1–6 are conservative, and which are not? 

$$
\mathbf {1 . F} = y z \mathbf {i} + x z \mathbf {j} + x y \mathbf {k}
$$

$$
\mathbf {2 . F} = (y \sin z) \mathbf {i} + (x \sin z) \mathbf {j} + (x y \cos z) \mathbf {k}
$$

$$
\mathbf {F} = y \mathbf {i} + (x + z) \mathbf {j} - y \mathbf {k}
$$

4. $\mathbf{F} = -y\mathbf{i} + x\mathbf{j}$ 

$$
\mathbf {5 . F} = (z + y) \mathbf {i} + z \mathbf {j} + (y + x) \mathbf {k}
$$

$$
\mathbf {6 . F} = (e ^ {x} \cos y) \mathbf {i} - (e ^ {x} \sin y) \mathbf {j} + z \mathbf {k}
$$

Finding Potential Functions 

In Exercises 7–12, find a potential function f for the field F. 

$$
\mathbf {F} = 2 x \mathbf {i} + 3 y \mathbf {j} + 4 z \mathbf {k}
$$

$$
\mathbf {8 . F} = (y + z) \mathbf {i} + (x + z) \mathbf {j} + (x + y) \mathbf {k}
$$

$$
\mathbf {9 . F} = e ^ {y + 2 z} (\mathbf {i} + x \mathbf {j} + 2 x \mathbf {k})
$$

10. $\mathbf{F} = (y \sin z) \mathbf{i} + (x \sin z) \mathbf{j} + (xy \cos z) \mathbf{k}$ 

$$
\mathbf {1 1 .} \mathbf {F} = (\ln x + \sec^ {2} (x + y)) \mathbf {i} +
$$

$$
\mathbf {1 2 . F} = \frac {y}{1 + x ^ {2} y ^ {2}} \mathbf {i} + \left(\frac {x}{1 + x ^ {2} y ^ {2}} + \frac {z}{\sqrt {1 - y ^ {2} z ^ {2}}}\right) \mathbf {j} +
$$

$$
\left(\frac {y}{\sqrt {1 - y ^ {2} z ^ {2}}} + \frac {1}{z}\right) \mathbf {k}
$$

Exact Differential Forms 

In Exercises 13–17, show that the differential forms in the integrals are exact. Then evaluate the integrals. 

13. $\int_{(0,0,0)}^{(2,3,-6)} 2x dx + 2y dy + 2z dz$ 

14. $\int_{(1,1,2)}^{(3,5,0)}yzdx + xzdy + xydz$ 

15. $\int_{(0,0,0)}^{(1,2,3)} 2xy dx + (x^2 - z^2) dy - 2yz dz$ 

16. $\int_{(0,0,0)}^{(3,3,1)} 2x dx - y^2 dy - \frac{4}{1 + z^2} dz$ 

17. $\int_{(1,0,0)}^{(0,1,1)}\sin y\cos x dx + \cos y\sin x dy + dz$ 

## Finding Potential Functions to Evaluate Line Integrals

Although they are not defined on all of space $R^{3}$ , the fields associated with Exercises 18–22 are conservative. Find a potential function for each field, and evaluate the integrals as in Example 6. 

18. $\int_{(0,2,1)}^{(1,\pi /2,2)}2\cos ydx + \left(\frac{1}{y} -2x\sin y\right)dy + \frac{1}{z} dz$ 

19. $\int_{(1,1,1)}^{(1,2,3)} 3x^2 dx + \frac{z^2}{y} dy + 2z \ln y dz$ 

20. $\int_{(1,2,1)}^{(2,1,1)}(2x\ln y - yz)dx + \left(\frac{x^2}{y} -xz\right)dy - xydz$ 

21. $\int_{(1,1,1)}^{(2,2,2)}\frac{1}{y} dx + \left(\frac{1}{z} -\frac{x}{y^2}\right)dy - \frac{y}{z^2} dz$ 

22. $\int_{(-1, - 1, - 1)}^{(2,2,2)}\frac{2xdx + 2ydy + 2zdz}{x^2 + y^2 + z^2}$ 

Applications and Examples 

23. Revisiting Example 6 Evaluate the integral 

$$
\int_ {(1, 1, 1)} ^ {(2, 3, - 1)} y d x + x d y + 4 d z
$$

from Example 6 by finding parametric equations for the line segment from $(1,1,1)$ to $(2,3,-1)$ and evaluating the line integral of $F = yi + xj + 4k$ along the segment. Since F is conservative, the integral is independent of the path. 

24. Evaluate 

$$
\int_ {C} x ^ {2} d x + y z d y + (y ^ {2} / 2) d z
$$

along the line segment C joining $(0,0,0)$ to $(0,3,4)$ . 

Independence of path Show that the values of the integrals in Exercises 25 and 26 do not depend on the path taken from A to B. 

25. $\int_{A}^{B}z^{2}dx + 2ydy + 2xzdz$ 

26. $\int_{A}^{B}\frac{xdx + ydy + zdz}{\sqrt{x^2 + y^2 + z^2}}$ 

In Exercises 27 and 28, find a potential function for $\mathbf{F}$ . 

$$
\mathbf {2 7 .} \mathbf {F} = \frac {2 x}{y} \mathbf {i} + \left(\frac {1 - x ^ {2}}{y ^ {2}}\right) \mathbf {j}, \quad \{(x, y): y > 0 \}
$$

$$
\mathbf {2 8 .} \mathbf {F} = (e ^ {x} \ln y) \mathbf {i} + \left(\frac {e ^ {x}}{y} + \sin z\right) \mathbf {j} + (y \cos z) \mathbf {k}
$$

29. Work along different paths Find the work done by $\mathbf{F} = (x^{2} + y)\mathbf{i} + (y^{2} + x)\mathbf{j} + ze^{z}\mathbf{k}$ over the following paths from $(1, 0, 0)$ to $(1, 0, 1)$ . 

a. The line segment $x = 1, y = 0, 0 \leq z \leq 1$ b. The helix $\mathbf{r}(t) = (\cos t)\mathbf{i} + (\sin t)\mathbf{j} + (t / 2\pi)\mathbf{k}$ , $0 \leq t \leq 2\pi$ c. The $x$ -axis from $(1,0,0)$ to $(0,0,0)$ followed by the parabola $z = x^2$ , $y = 0$ from $(0,0,0)$ to $(1,0,1)$ 

![[d46057fe84aead52487be71485716070d4fc15c775cb22c36e65100ff7fdc6d0.jpg|image]]


30. Work along different paths Find the work done by $\mathbf{F} = e^{yz}\mathbf{i} + (xze^{yz} + z\cos y)\mathbf{j} + (xye^{yz} + \sin y)\mathbf{k}$ over the following paths from $(1,0,1)$ to $(1,\pi /2,0)$ . 

a. The line segment $x = 1$ , $y = \pi t / 2$ , $z = 1 - t$ , $0 \leq t \leq 1$ 

![[0d9d836b8cac66f586722c6ce078ca51a301dd07eb4ad10749782270c6131968.jpg|image]]


b. The line segment from $(1,0,1)$ to the origin followed by the line segment from the origin to $(1,\pi/2,0)$ 

![[f6c0ae81217c2e4f9ea7f372ce44f696b9323bdf4818bfed5a38b37b3374b2b5.jpg|image]]


c. The line segment from $(1,0,1)$ to $(1,0,0)$ , followed by the x-axis from $(1,0,0)$ to the origin, followed by the parabola $y = \pi x^{2}/2$ , z = 0 from there to $(1,\pi/2,0)$ 

![[2b0394f4f14c7237a4bf8205dd7e734b711b38d96ca2f562d585384f2d82840c.jpg|image]]


31. Evaluating a work integral two ways Let $\mathbf{F} = \nabla (x^3y^2)$ and let $C$ be the path in the $xy$ -plane from $(-1,1)$ to $(1,1)$ that consists of the line segment from $(-1,1)$ to $(0,0)$ followed by the line segment from $(0,0)$ to $(1,1)$ . Evaluate $\int_{C}\mathbf{F}\cdot dr$ in two ways. 

a. Find parametrizations for the segments that make up C and evaluate the integral. 

b. Use $f(x, y) = x^{3}y^{2}$ as a potential function for F. 

32. Integral along different paths Evaluate the line integral $\int_{C} 2x \cos y dx - x^{2} \sin y dy$ along the following paths $C$ in the xy-plane. 

a. The parabola $y = (x - 1)^{2}$ from $(1, 0)$ to $(0, 1)$ 

b. The line segment from $(-1,\pi)$ to $(1,0)$ 

c. The x-axis from $(-1,0)$ to $(1,0)$ 

d. The astroid $\mathbf{r}(t) = (\cos^3 t)\mathbf{i} + (\sin^3 t)\mathbf{j}, 0 \leq t \leq 2\pi$ , counterclockwise from (1, 0) back to (1, 0) 

![[c84dd043aa17bdaf8979aeca06f0ed0ca42a6ab9ec5a8bb85085ce9591847998.jpg|image]]


33. a. Exact differential form How are the constants $a, b$ , and $c$ related if the following differential form is exact? 

$$
(a y ^ {2} + 2 c z x) d x + y (b x + c z) d y + \left(a y ^ {2} + c x ^ {2}\right) d z
$$

b. Gradient field For what values of $b$ and $c$ will 

$$
\mathbf {F} = (y ^ {2} + 2 c z x) \mathbf {i} + y (b x + c z) \mathbf {j} + (y ^ {2} + c x ^ {2}) \mathbf {k}
$$

be a gradient field? 

34. Gradient of a line integral Suppose that $\mathbf{F} = \nabla f$ is a conservative vector field and 

$$
g (x, y, z) = \int_ {(0, 0, 0)} ^ {(x, y, z)} \mathbf {F} \cdot d \mathbf {r}.
$$

Show that $\nabla g = \mathbf{F}$ . 

35. Path of least work You have been asked to find the path along which a force field F will perform the least work in moving a particle between two locations. A quick calculation on your part shows F to be conservative. How should you respond? Give reasons for your answer. 

36. A revealing experiment By experiment, you find that a force field $\mathbf{F}$ performs only half as much work in moving an object along path $C_1$ from $A$ to $B$ as it does in moving the object along path $C_2$ from $A$ to $B$ . What can you conclude about $\mathbf{F}$ ? Give reasons for your answer. 

37. Work by a constant force Show that the work done by a constant force field $\mathbf{F} = ai + bj + ck$ in moving a particle along any path from $A$ to $B$ is $W = \mathbf{F} \cdot \overrightarrow{AB}$ . 

38. Gravitational field 

a. Find a potential function for the gravitational field 

$$
\mathbf {F} = - G m M \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{\left(x ^ {2} + y ^ {2} + z ^ {2}\right) ^ {3 / 2}}
$$

$(G, m, \text{and } M \text{ are constants}).$ 

## 15.4 Green's Theorem in the Plane

b. Let $P_{1}$ and $P_{2}$ be points at distances $s_{1}$ and $s_{2}$ from the origin. Show that the work done by the gravitational field in part (a) in moving a particle from $P_{1}$ to $P_{2}$ is 

$$
G m M \left(\frac {1}{s _ {2}} - \frac {1}{s _ {1}}\right).
$$

If $\mathbf{F}$ is a conservative field, then we know $\mathbf{F} = \nabla f$ for a differentiable function $f$ , and we can calculate the line integral of $\mathbf{F}$ over any path $C$ joining point $A$ to point $B$ as $\int_{C} \mathbf{F} \cdot d\mathbf{r} = f(B) - f(A)$ . In this section we derive a method for computing a work or flux integral over a closed curve $C$ in the plane. This method, which can be used even when the field $\mathbf{F}$ is not conservative, comes from Green's Theorem. It enables us to convert the line integral into a double integral over the region enclosed by $C$ . 

The discussion is given in terms of velocity fields of fluid flows (a fluid is a liquid or a gas) because they are easy to visualize. However, Green's Theorem applies to any vector field, independent of any particular interpretation of the field, provided the assumptions of the theorem are satisfied. We introduce two new ideas for Green's Theorem: circulation density around an axis perpendicular to the plane and divergence (or flux density). 

## Spin Around an Axis: The k-Component of Curl

Suppose that $\mathbf{F}(x,y) = M(x,y)\mathbf{i} + N(x,y)\mathbf{j}$ is the velocity field of a fluid flowing in the plane and that the first partial derivatives of $M$ and $N$ are continuous at each point of a region $R$ . Let $(x,y)$ be a point in $R$ , and let $A$ be a small rectangle with one corner at $(x,y)$ 

that, along with its interior, lies entirely in $R$ . The sides of the rectangle, parallel to the coordinate axes, have lengths of $\Delta x$ and $\Delta y$ . Assume that the components $M$ and $N$ do not change sign throughout a small region containing the rectangle $A$ . The first idea we use to convey Green's Theorem quantifies the rate at which a floating paddle wheel, with axis perpendicular to the plane, spins at a point in a fluid flowing in a plane region. This idea gives some sense of how the fluid is circulating around axes located at different points and perpendicular to the plane. Physicists sometimes refer to this as the circulation density of a vector field $\mathbf{F}$ at a point. To obtain it, we consider the velocity field 

$$
\mathbf {F} (x, y) = M (x, y) \mathbf {i} + N (x, y) \mathbf {j}
$$

and the rectangle A in Figure 15.29 (where we assume both components of F are positive). 

![[328fac2500641b1abedf6a22e4afe07403f2b041721a60c44aca9f095ecf71d8.jpg|image]]



FIGURE 15.29 The rate at which a fluid flows along the bottom edge of a rectangular region A in the direction i is approximately $\mathbf{F}(x,y) \cdot \mathbf{i} \Delta x$ , which is positive for the vector field F shown here. To approximate the rate of circulation at the point $(x,y)$ , we calculate the (approximate) flow rates along each edge in the directions of the red arrows, sum these rates, and then divide the sum by the area of A. Taking the limit as $\Delta x \rightarrow 0$ and $\Delta y \rightarrow 0$ gives the rate of the circulation per unit area.


The circulation rate of F around the boundary of A is the sum of flow rates along the sides in the tangential direction. For the bottom edge, the flow rate is approximately 

$$
\mathbf {F} (x, y) \cdot \mathbf {i} \Delta x = M (x, y) \Delta x.
$$

This is the scalar component of the velocity $\mathbf{F}(x,y)$ in the tangent direction i times the length of the segment. The flow rates may be positive or negative, depending on the components of F. We approximate the net circulation rate around the rectangular boundary of A by summing the flow rates along the four edges as defined by the following dot products. 

$$
\text { Top: } \quad \mathbf {F} (x, y + \Delta y) \cdot (- \mathbf {i})   \Delta x = - M (x, y + \Delta y)   \Delta x
$$

Bottom: $\mathbf{F}(x,y)\cdot \mathbf{i}\Delta x = M(x,y)\Delta x$ 

Right: $\mathbf{F}(x + \Delta x, y) \cdot \mathbf{j} \Delta y = N(x + \Delta x, y) \Delta y$ 

Left: 

$$
\mathbf {F} (x, y) \cdot (- \mathbf {j}) \Delta y = - N (x, y) \Delta y
$$

We sum opposite pairs to get 

Top and bottom: 

$$
- (M (x, y + \Delta y) - M (x, y)) \Delta x \approx - \left(\frac {\partial M}{\partial y} \Delta y\right) \Delta x
$$

Right and left: 

$$
\left(N (x + \Delta x, y) - N (x, y)\right) \Delta y \approx \left(\frac {\partial N}{\partial x} \Delta x\right) \Delta y.
$$

![[2904069973daad303cd35ad803b363fb77f3a1649c3eb6a3e133af6444bf6ee1.jpg|image]]


![[e22eba4ebbb536423ba4296079010d09bce62d5437af2d74d8489cdc9fa42ba9.jpg|image]]



FIGURE 15.30 In the flow of an incompressible fluid over a plane region, the k-component of the curl measures the rate of the fluid's rotation at a point. The k-component of the curl is positive at points where the rotation is counterclockwise and negative where the rotation is clockwise.


Adding these last two equations gives the net circulation rate relative to the counterclockwise orientation, 

$$
\text { Circulation   rate   around   rectangle } \approx \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \Delta x \Delta y.
$$

We now divide by $\Delta x \Delta y$ to estimate the circulation rate per unit area, or circulation density, for the rectangle: 

$$
\frac {\text { Circulation   around   rectangle }}{\text { rectangle   area }} \approx \frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}.
$$

We let $\Delta x$ and $\Delta y$ approach zero to define the circulation density of $\mathbf{F}$ at the point $(x, y)$ . 

If we see a counterclockwise rotation looking downward onto the xy-plane from the tip of the unit k vector, then the circulation density is positive (Figure 15.30). 

> ***DEFINITION*** The circulation density of a vector field $\mathbf{F} = M\mathbf{i} + N\mathbf{j}$ at the point $(x,y)$ is the scalar expression 
>
> $$
> \frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}.\tag{1}
> $$
>
The expression in Equation (1) is the the k-component of the curl of F, which was introduced in Equation (3) of Section 15.3: 

$$
\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y} = (\operatorname{curl} \mathbf {F}) \cdot \mathbf {k}.
$$

If water is moving about a region in the xy-plane in a thin layer, then the k-component of the curl at a point $(x_{0}, y_{0})$ gives a way to measure how fast and in what direction a small paddle wheel spins if it is put into the water at $(x_{0}, y_{0})$ with its axis perpendicular to the plane, parallel to k (Figure 15.30). Looking downward onto the xy-plane, it spins counterclockwise when $(\text{curl } F) \cdot k$ is positive and clockwise when the k-component is negative. 

**EXAMPLE 1** The following vector fields represent the velocity of a gas flowing in the xy-plane. Find the circulation density of each vector field and interpret its physical meaning. Figure 15.31 displays the vector fields. 

(a) Uniform expansion or compression: $\mathbf{F}(x,y) = c\mathbf{x}\mathbf{i} + cy\mathbf{j}$ $c$ a constant 

(b) Uniform rotation: $\mathbf{F}(x,y) = -cy\mathbf{i} + cx\mathbf{j}$ 

(c) Shearing flow: $\mathbf{F}(x,y)=y\mathbf{i}$ 

(d) Whirlpool effect: $\mathbf{F}(x,y) = \frac{-y}{x^2 + y^2}\mathbf{i} + \frac{x}{x^2 + y^2}\mathbf{j}$ 

**Solution** 

(a) Uniform expansion: (curl $\mathbf{F}$ ) $\cdot \mathbf{k} = \frac{\partial}{\partial x} (cy) - \frac{\partial}{\partial y} (cx) = 0$ . The gas is not circulating at very small scales. 

(b) Rotation: (curl $\mathbf{F}$ ) $\cdot \mathbf{k} = \frac{\partial}{\partial x}(cx) - \frac{\partial}{\partial y}(-cy) = 2c$ . The constant circulation density indicates rotation around every point. If $c > 0$ , the rotation is counterclockwise; if $c < 0$ , the rotation is clockwise. 

![[460308b1b3b0548840036362d622da58f76bf4d3a790ce292c901c4f7a08b83f.jpg|image]]



(a)


![[e03550e38cb93db6fe6cc029a7a11929873dda03a589cbb4f3048dec9d3b0aed.jpg|image]]



(b)


![[04ff6885d1e6a1e43e1173121f5c03126afe2b604c6a989585f04108721a7e4c.jpg|image]]



(c)


![[86483fd9279a7620f8ce4c99defce6a82c96fc298ca3f15d6d664e6566bde2f6.jpg|image]]



(d)



FIGURE 15.31 Velocity fields of a gas flowing in the plane (Example 1).


![[981b9ec21857699a17a13592ec7bcd053b353df11033aa858c31890e1aade06b.jpg|image]]


(c) Shear: (curl $\mathbf{F}$ ) $\cdot \mathbf{k} = -\frac{\partial}{\partial y}(y) = -1$ . The circulation density is constant and negative, so a paddle wheel floating in water undergoing such a shearing flow spins clockwise. The rate of rotation is the same at each point. The average rotational effect of the fluid flow is to push fluid clockwise around each of the small circles shown in Figure 15.32. 


FIGURE 15.32 A shearing flow pushes the fluid clockwise around each point (Example 1c).


(d) Whirlpool: 

$$
(\operatorname{curl} \mathbf {F}) \cdot \mathbf {k} = \frac {\partial}{\partial x} \left(\frac {x}{x ^ {2} + y ^ {2}}\right) - \frac {\partial}{\partial y} \left(\frac {- y}{x ^ {2} + y ^ {2}}\right) = \frac {y ^ {2} - x ^ {2}}{\left(x ^ {2} + y ^ {2}\right) ^ {2}} - \frac {y ^ {2} - x ^ {2}}{\left(x ^ {2} + y ^ {2}\right) ^ {2}} = 0.
$$

The circulation density is 0 at every point away from the origin (where the vector field is undefined and the whirlpool effect blows up), and the gas is not circulating at any point for which the vector field is defined. 

One form of Green's Theorem tells us how circulation density can be used to calculate the line integral for flow in the $xy$ -plane. (The flow integral was defined in Section 15.2.) A second form of the theorem tells us how we can calculate the flux integral, which gives the flow across the boundary, from flux density. We define this idea next and then present both versions of the theorem. 

## Divergence

Consider again the velocity field $\mathbf{F}(x,y)=M(x,y)\mathbf{i}+N(x,y)\mathbf{j}$ in a domain containing the rectangle A, as shown in Figure 15.33. As before, we assume the field components do not change sign throughout a small region containing the rectangle A. Our interest now is to determine the rate at which the fluid leaves A by flowing across its boundary. 

![[def0b7828701dc1af9915198bd29489dd9b2a5ffdb986315a31cfcca300607dd.jpg|image]]



FIGURE 15.33 The rate at which the fluid leaves the rectangular region A across the bottom edge in the direction of the outward normal -j is approximately $\mathbf{F}(x,y)\cdot(-\mathbf{j})\Delta x$ , which is negative for the vector field F shown here. To approximate the flow rate at the point $(x,y)$ , we calculate the (approximate) flow rates across each edge in the directions of the red arrows, sum these rates, and then divide the sum by the area of A. Taking the limit as $\Delta x\to0$ and $\Delta y\to0$ gives the flow rate per unit area.


The rate at which fluid leaves the rectangle across the bottom edge is approximately (Figure 15.33) 

$$
\mathbf {F} (x, y) \cdot (- \mathbf {j}) \Delta x = - N (x, y) \Delta x.
$$

This is the scalar component of the velocity at $(x, y)$ in the direction of the outward normal times the length of the segment. If the velocity is in meters per second, for example, the flow rate will be in meters per second times meters, or square meters per second. The rates at which the fluid crosses the other three sides in the directions of their outward normals can be estimated in a similar way. The flow rates may be positive or negative, depending on the signs of the components of F. We approximate the net flow rate across the rectangular boundary of A by summing the flow rates across the four edges as defined by the following dot products. 

Fluid Flow Rates: 

$$
\mathbf {F} (x, y + \Delta y) \cdot \mathbf {j} \Delta x = N (x, y + \Delta y) \Delta x
$$

Bottom: $\mathbf{F}(x,y)\cdot (-\mathbf{j})\Delta x = -N(x,y)\Delta x$ 

$$
\text { Right: } \quad \mathbf {F} (x + \Delta x, y) \cdot \mathbf {i}   \Delta y = M (x + \Delta x, y)   \Delta y
$$

$$
\text { Left: } \quad \mathbf {F} (x, y) \cdot (- \mathbf {i})   \Delta y = - M (x, y)   \Delta y
$$

Summing opposite pairs gives 

Top and bottom: 

$$
\left(N (x, y + \Delta y) - N (x, y)\right) \Delta x \approx \left(\frac {\partial N}{\partial y} \Delta y\right) \Delta x,
$$

Right and left: 

$$
\big (M (x + \Delta x, y) - M (x, y) \big) \Delta y \approx \Big (\frac {\partial M}{\partial x} \Delta x \Big) \Delta y.
$$

Adding these last two equations gives the net effect of the flow rates, or the 

Flux across rectangle boundary $\approx \left(\frac{\partial M}{\partial x} +\frac{\partial N}{\partial y}\right)\Delta x\Delta y.$ 

We now divide by $\Delta x \Delta y$ to estimate the total flux per unit area, or flux density, for the rectangle: 

$$
\frac {\text { Flux   across   rectangle   boundary }}{\text { rectangle   area }} \approx \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right).
$$

div $\mathbf{F}$ is the symbol for divergence. 

$$
\mathbf {F} (x _ {0}, y _ {0}) > 0
$$

![[beea84b6c75d4e7d50b4141c33fff0eb1e46dc25a9839dae2383753dc116d17d.jpg|image]]



Sink: div $\mathbf{F}(x_0,y_0) < 0$


![[ab73fcc39b7809e4e171be4364c1d9eec4d9952695b02940548671b359497789.jpg|image]]



FIGURE 15.34 If a gas is expanding at a point $(x_{0}, y_{0})$ , the lines of flow have positive divergence; if the gas is compressing, the divergence is negative.


Finally, we let $\Delta x$ and $\Delta y$ approach zero to define the flux density of F at the point $(x, y)$ . The mathematical term for the flux density is the divergence of F. The symbol for it is div F, which is pronounced “divergence of F” or “div F.” 

> ***DEFINITION*** The divergence (flux density) of a vector field $\mathbf{F} = M\mathbf{i} + N\mathbf{j}$ at the point $(x, y)$ is 
>
> $$
> \operatorname{div} \mathbf {F} = \frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}.\tag{2}
> $$
>
A gas is compressible, unlike a liquid, and the divergence of its velocity field measures to what extent it is expanding or compressing at each point. Intuitively, if a gas is expanding at the point $(x_{0}, y_{0})$ , the lines of flow would diverge there (hence the name), and since the gas would be flowing out of a small rectangle about $(x_{0}, y_{0})$ , the divergence of F at $(x_{0}, y_{0})$ would be positive. If the gas were compressing instead of expanding, the divergence would be negative (Figure 15.34). 

**EXAMPLE 2** Find the divergence, and interpret what it means, for each vector field in Example 1 representing the velocity of a gas flowing in the xy-plane. 

**Solution** 

(a) $\operatorname{div} \mathbf{F} = \frac{\partial}{\partial x}(cx) + \frac{\partial}{\partial y}(cy) = 2c$ : If $c > 0$ , the gas is undergoing uniform expansion; if $c < 0$ , it is undergoing uniform compression. 

(b) div $\mathbf{F} = \frac{\partial}{\partial x} (-cy) + \frac{\partial}{\partial y}(cx) = 0$ : The gas is neither expanding nor compressing. 

(c) div $\mathbf{F} = \frac{\partial}{\partial x} (y) = 0$ : The gas is neither expanding nor compressing. 

(d) div $\mathbf{F} = \frac{\partial}{\partial x}\left(\frac{-y}{x^{2} + y^{2}}\right) + \frac{\partial}{\partial y}\left(\frac{x}{x^{2} + y^{2}}\right) = \frac{2xy}{(x^{2} + y^{2})^{2}} - \frac{2xy}{(x^{2} + y^{2})^{2}} = 0$ : Again, the divergence is zero at all points in the domain of the velocity field. 

Cases (b), (c), and (d) of Figure 15.31 are plausible models for the two-dimensional flow of a liquid. In fluid dynamics, when the velocity field of a flowing fluid always has divergence equal to zero, as in those cases, the flow is said to be incompressible. 

## Two Forms for Green's Theorem

A simple closed curve C can be traversed in two possible directions. (Recall that a curve is simple if it does not cross itself.) The curve is traversed counterclockwise, and said to be positively oriented, if the region it encloses is always to the left when moving along the curve. If the curve is traversed clockwise, then the enclosed region is on the right when moving along the curve, and the curve is said to be negatively oriented. The line integral of a vector field F along C reverses sign if we change the orientation. We use the notation 

$$
\oint_ {C} \mathbf {F} (x, y) \cdot d \mathbf {r}
$$

for the line integral when the simple closed curve C is traversed counterclockwise, with its positive orientation. 

In one form, Green's Theorem says that the counterclockwise circulation of a vector field around a simple closed curve is the double integral of the k-component of the curl of the field over the region enclosed by the curve. Recall the defining Equation (5) for circulation in Section 15.2. 

Circulation around $C = \oint_{C} \mathbf{F} \cdot \mathbf{T} ds$ 

(curl $\mathbf{F})\cdot \mathbf{k} = \frac{\partial N}{\partial x} -\frac{\partial M}{\partial y}$ 

Flux of $\mathbf{F}$ across $C = \oint_{C} \mathbf{F} \cdot \mathbf{n} ds$ 

$\operatorname {div}\mathbf{F} = \frac{\partial M}{\partial x} +\frac{\partial N}{\partial y}$ 

## THEOREM 4—Green's Theorem (Circulation-Curl or Tangential Form)

Let C be a piecewise smooth, simple closed curve enclosing a region R in the plane. Let $F = M\mathbf{i} + N\mathbf{j}$ be a vector field with M and N having continuous first partial derivatives in an open region containing R. Then the counterclockwise circulation of F around C equals the double integral of $(\text{curl } \mathbf{F}) \cdot \mathbf{k}$ over R. 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {T}   d s = \oint_ {C} M   d x + N   d y = \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) d x   d y\tag{3}
$$

A second form of Green's Theorem says that the outward flux of a vector field across a simple closed curve in the plane equals the double integral of the divergence of the field over the region enclosed by the curve. Recall the formulas for flux in Equations (8) and (9) in Section 15.2. 

## THEOREM 5—Green's Theorem (Flux-Divergence or Normal Form)

Let C be a piecewise smooth, simple closed curve enclosing a region R in the plane. Let $F = M i + N j$ be a vector field with M and N having continuous first partial derivatives in an open region containing R. Then the outward flux of F across C equals the double integral of div F over the region R enclosed by C. 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {n}   d s = \oint_ {C} M   d y - N   d x = \iint_ {R} \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right) d x   d y \text {   Outward   flux   } \quad \text {   Divergence   integral   }\tag{4}
$$

The two forms of Green's Theorem are equivalent. Applying Equation (3) to the field $\mathbf{G}_1 = -Ni + M\mathbf{j}$ gives Equation (4), and applying Equation (4) to $\mathbf{G}_2 = Ni - M\mathbf{j}$ gives Equation (3). 

Both forms of Green's Theorem can be viewed as two-dimensional generalizations of the Fundamental Theorem of Calculus from Section 5.4. The counterclockwise circulation of $\mathbf{F}$ around $C$ , defined by the line integral on the left-hand side of Equation (3), is the integral of its rate of change (circulation density) over the region $R$ enclosed by $C$ , which is the double integral on the right-hand side of Equation (3). Likewise, the outward flux of $\mathbf{F}$ across $C$ , defined by the line integral on the left-hand side of Equation (4), is the integral of its rate of change (flux density) over the region $R$ enclosed by $C$ , which is the double integral on the right-hand side of Equation (4). 

**EXAMPLE 3** Verify both forms of Green's Theorem for the vector field 

$$
\mathbf {F} (x, y) = (x - y) \mathbf {i} + x \mathbf {j}
$$

and the region R bounded by the unit circle 

$$
C: \mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {j}, 0 \leq t \leq 2 \pi .
$$

**Solution** First we evaluate the counterclockwise circulation of $F = M\mathbf{i} + N\mathbf{j}$ around C. On the curve C we have $x = \cos t$ and $y = \sin t$ . Evaluating $\mathbf{F}(\mathbf{r}(t))$ and computing the derivatives of the components of r, we have 

$$
\begin{array}{l l} M = x - y = \cos t - \sin t, & d x = d (\cos t) = - \sin t d t, \\ N = x = \cos t, & d y = d (\sin t) = \cos t d t. \end{array}
$$

Therefore, 

$$
\begin{array}{r l} \oint_ {C} \mathrm{F} \cdot \mathrm{T} d s & = \oint_ {C} M d x + N d y \\ & = \int_ {t = 0} ^ {t = 2 \pi} (\cos t - \sin t) (- \sin t) d t + (\cos t) (\cos t) d t \\ & = \int_ {0} ^ {2 \pi} (- \sin t \cos t + 1) d t = 2 \pi . \end{array}
$$

This gives the left side of Equation (3). Next we find the curl integral, the right side of Equation (3). Since M = x - y and N = x, we have 

$$
\frac {\partial M}{\partial x} = 1, \quad \frac {\partial M}{\partial y} = - 1, \quad \frac {\partial N}{\partial x} = 1, \quad \frac {\partial N}{\partial y} = 0.
$$

Therefore, 

$$
\begin{array}{r l} \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{d y}\right) d x d y & = \iint_ {R} (1 - (- 1)) d x d y \\ & = 2 \iint_ {R} d x d y = 2 (\text { area   inside   the   unit   circle }) = 2 \pi . \end{array}
$$

![[5cb7ba3f78df30e942d8ec77580dfb28bf61e7b228968c0737fb0a6415cecabe.jpg|image]]


Thus, the right and left sides of Equation (3) both equal $2\pi$ , as asserted by the circulation-curl version of Green's Theorem. 


FIGURE 15.35 The vector field in Example 3 has a counterclockwise circulation of $2\pi$ around the unit circle.


Figure 15.35 displays the vector field and circulation around C. 

Now we compute the two sides of Equation (4) in the flux-divergence form of Green's Theorem, starting with the outward flux: 

$$
\begin{array}{r l} \oint_ {C} M d y - N d x & = \int_ {t = 0} ^ {t = 2 \pi} (\cos t - \sin t) (\cos t d t) - (\cos t) (- \sin t d t) \\ & = \int_ {0} ^ {2 \pi} \cos^ {2} t d t = \pi . \end{array}
$$

Next we compute the divergence integral: 

$$
\iint_ {R} \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right) d x d y = \iint_ {R} (1 + 0) d x d y = \iint_ {R} d x d y = \pi .
$$

Hence the right and left sides of Equation (4) both equal $\pi$ , as asserted by the flux-divergence version of Green's Theorem. 

## Using Green's Theorem to Evaluate Line Integrals

If we construct a closed curve $C$ by piecing together a number of different curves end to end, the process of evaluating a line integral over $C$ can be lengthy because there are so many different integrals to evaluate. If $C$ bounds a region $R$ to which Green's Theorem applies, however, we can use Green's Theorem to change the line integral around $C$ into one double integral over $R$ . 

**EXAMPLE 4** Evaluate the line integral 

$$
\oint_ {C} x y   d y - y ^ {2}   d x,
$$

where C is the boundary of the square $0 \leq x \leq 1$ , $0 \leq y \leq 1$ . 

**Solution** We can use either form of Green's Theorem to change the line integral into a double integral over the square, where $C$ is the square's boundary and $R$ is its interior. 

1. With the Tangential Form Equation (3): Taking $M = -y^{2}$ and $N = xy$ gives the result: 

$$
\begin{array}{l} \oint_ {C} - y ^ {2} d x + x y d y = \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) d x d y = \iint_ {R} (y - (- 2 y)) d x d y \\ = \int_ {0} ^ {1} \int_ {0} ^ {1} 3 y d x d y = \int_ {0} ^ {1} \left[ 3 x y \right] _ {x = 0} ^ {x = 1} d y = \int_ {0} ^ {1} 3 y d y = \left. \frac {3}{2} y ^ {2} \right] _ {0} ^ {1} = \frac {3}{2}. \end{array}
$$

2. With the Normal Form Equation (4): Taking M = xy, $N = y^{2}$ , gives the same result: 

$$
\oint_ {C} x y d y - y ^ {2} d x = \iint_ {R} \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right) d x d y = \iint_ {R} (y + 2 y) d x d y = \frac {3}{2}.
$$

**EXAMPLE 5** Calculate the outward flux of the vector field $\mathbf{F}(x,y)=2e^{xy}\mathbf{i}+y^{3}\mathbf{j}$ across the boundary of the square $-1\leq x\leq1,-1\leq y\leq1$ . 

**Solution** Calculating the flux with a line integral would take four integrations, one for each side of the square. With Green's Theorem, we can change the line integral to one double integral. With $M = 2e^{xy}$ , $N = y^3$ , $C$ the square's boundary, and $R$ the square's interior, we have 

$$
\begin{array}{l} \text { Flux } = \oint_ {C} \mathbf {F} \cdot \mathbf {n} d s = \oint_ {C} M d y - N d x \\ = \iint_ {R} \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right) d x d y \quad \text { Green's   Theorem,   Eq.   (4) } \\ = \int_ {- 1} ^ {1} \int_ {- 1} ^ {1} (2 y e ^ {x y} + 3 y ^ {2}) d x d y = \int_ {- 1} ^ {1} \left[ 2 e ^ {x y} + 3 x y ^ {2} \right] _ {x = - 1} ^ {x = 1} d y \\ = \int_ {- 1} ^ {1} (2 e ^ {y} + 6 y ^ {2} - 2 e ^ {- y}) d y = \left[ 2 e ^ {y} + 2 y ^ {3} + 2 e ^ {- y} \right] _ {- 1} ^ {1} = 4. \end{array}
$$

![[cade3a2199581f8951b6af7533c063490d0dd24c8b3902bcf0160e3008030a3a.jpg|image]]



FIGURE 15.36 The boundary curve C is made up of $C_{1}$ , the graph of $y = f_{1}(x)$ , and $C_{2}$ , the graph of $y = f_{2}(x)$ .


## Proof of Green's Theorem for Special Regions

Let $C$ be a smooth simple closed curve in the $xy$ -plane with the property that lines parallel to the axes cut it at no more than two points. Let $R$ be the region enclosed by $C$ and suppose that $M, N$ , and their first partial derivatives are continuous at every point of some open region containing $C$ and $R$ . We want to prove the circulation-curl form of Green's Theorem, 

$$
\oint_ {C} M d x + N d y = \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) d x d y.\tag{5}
$$

Figure 15.36 shows C made up of two directed parts: 

$$
C _ {1} \colon y = f _ {1} (x), a \leq x \leq b, C _ {2} \colon y = f _ {2} (x), b \geq x \geq a.
$$

For any $x$ between $a$ and $b$ , we can integrate $\partial M / \partial y$ with respect to $y$ from $y = f_{1}(x)$ to $y = f_{2}(x)$ and obtain 

$$
\left. \int_ {f _ {1} (x)} ^ {f _ {2} (x)} \frac {\partial M}{\partial y} d y = M (x, y) \right] _ {y = f _ {1} (x)} ^ {y = f _ {2} (x)} = M (x, f _ {2} (x)) - M (x, f _ {1} (x)).
$$


(c)


We can then integrate this with respect to x from a to b: 

$$
\begin{array}{l} \int_ {a} ^ {b} \int_ {f _ {1} (x)} ^ {f _ {2} (x)} \frac {\partial M}{\partial y} d y d x = \int_ {a} ^ {b} \left[ M \big (x, f _ {2} (x) \big) - M \big (x, f _ {1} (x) \big) \right] d x \\ = - \int_ {b} ^ {a} M \big (x, f _ {2} (x) \big) d x - \int_ {a} ^ {b} M \big (x, f _ {1} (x) \big) d x \\ = - \int_ {C _ {2}} M d x - \int_ {C _ {1}} M d x \\ = - \oint_ {C} M d x. \end{array}
$$

Therefore, reversing the order of the equations, we have 

(6) 

![[e990d81dd3d21cf0ecf581250fceb7dafe94a18d663e27090650ac23e1fadf76.jpg|image]]


$$
\oint_ {C} M d x = \iint_ {R} \left(- \frac {\partial M}{\partial y}\right) d x d y.
$$

Equation (6) is half the result we need for Equation (5). We derive the other half by integrating $\partial N/\partial x$ first with respect to x and then with respect to y, as suggested by Figure 15.37. This shows the curve C of Figure 15.36 decomposed into the two directed parts $C_{1}^{\prime}: x = g_{1}(y), d \geq y \geq c$ and $C_{2}^{\prime}: x = g_{2}(y), c \leq y \leq d$ . The result of this double integration is 

$$
\oint_ {C} N d y = \iint_ {R} \frac {\partial N}{\partial x} d x d y.\tag{7}
$$

Summing Equations (6) and (7) gives Equation (5). This concludes the proof. 


FIGURE 15.37 The boundary curve $C$ is made up of $C_1'$ , the graph of $x = g_1(y)$ , and $C_2'$ , the graph of $x = g_2(y)$ .


Green's Theorem also holds for more general regions, such as those shown in Figure 15.38. Notice that the region in Figure 15.38c is not simply connected. The curves $C_1$ and $C_h$ on its boundary are oriented so that the region $R$ is always on the left-hand side as the curves are traversed in the directions shown, and cancelation occurs over common boundary arcs traversed in opposite directions. With this convention, Green's Theorem is valid for regions that are not simply connected. The proof proceeds by summing the contributions to the integral of a collection of special regions, which overlap along their boundaries. Cancelation occurs along arcs that are traversed twice, once in each direction, as in Figure 15.38c. We do not give the full proof here. 

![[3ee2a58325192459a01a96806415ba7e8006595040d2c4b46bfdf3bf58da7245.jpg|image]]


![[85f3540d2360b31c711d1986d120239b94163f705ca0504eac49f17991bb3013.jpg|image]]



(b)


![[99328e16c937444407271b40ee43e23768b7c7a7ab315085b7501a2bba3b4df8.jpg|image]]



FIGURE 15.38 Other regions to which Green's Theorem applies. In (c) the axes convert the region into four simply connected regions, and we sum the line integrals along the oriented boundaries.


## EXERCISES

## 15.4

## Computing the k-Component of Curl(F)

In Exercises 1–6, find the k-component of $\text{curl}(\mathbf{F})$ for the following vector fields on the plane. 

1. $\mathbf{F} = (x + y)\mathbf{i} + (2xy)\mathbf{j}$ 

2. $\mathbf{F} = (x^{2} - y)\mathbf{i} + (y^{2})\mathbf{j}$ 

3. $\mathbf{F} = (xe^{y})\mathbf{i} + (ye^{x})\mathbf{j}$ 

4. $\mathbf{F} = (x^{2}y)\mathbf{i} + (xy^{2})\mathbf{j}$ 

5. $\mathbf{F} = (y \sin x) \mathbf{i} + (x \sin y) \mathbf{j}$ 

6. $\mathbf{F} = (x / y)\mathbf{i} - (y / x)\mathbf{j}$ 

## Verifying Green's Theorem

In Exercises 7–10, verify the conclusion of Green's Theorem by evaluating both sides of Equations (3) and (4) for the field $\mathbf{F} = M\mathbf{i} + N\mathbf{j}$ . Take the domains of integration in each case to be the disk $R$ : $x^{2} + y^{2} \leq a^{2}$ and its bounding circle $C$ : $\mathbf{r} = (a \cos t)\mathbf{i} + (a \sin t)\mathbf{j}$ , $0 \leq t \leq 2\pi$ . 

$$
\mathbf {7 . F} = - y \mathbf {i} + x \mathbf {j} \quad \mathbf {8 . F} = y \mathbf {i}
$$

$$
\mathbf {9 . F} = 2 x \mathbf {i} - 3 y \mathbf {j}
$$

Circulation and Flux 

In Exercises 11–20, use Green's Theorem to find the counterclockwise circulation and outward flux for the field F and the curve C. 

$$
\mathbf {1 1 .} \mathbf {F} = (x - y) \mathbf {i} + (y - x) \mathbf {j}
$$

C: The square bounded by x = 0, x = 1, y = 0, and y = 1 

12. $\mathbf{F} = (x^{2} + 4y)\mathbf{i} + (x + y^{2})\mathbf{j}$ 

C: The square bounded by x = 0, x = 1, y = 0, and y = 1 

13. $\mathbf{F} = (y^{2} - x^{2})\mathbf{i} + (x^{2} + y^{2})\mathbf{j}$ 

C: The triangle bounded by y = 0, x = 3, and y = x 

14. $\mathbf{F} = (x + y)\mathbf{i} - (x^2 +y^2)\mathbf{j}$ 

C: The triangle bounded by y = 0, x = 1, and y = x 

15. $\mathbf{F} = (xy + y^{2})\mathbf{i} + (x - y)\mathbf{j}$ 16. $\mathbf{F} = (x + 3y)\mathbf{i} + (2x - y)\mathbf{j}$ 

![[f1a1ed63f7ed62b8817bd6a2218e82f1c9b14f841e6756b4ee0a563ba89ab542.jpg|image]]


![[30fc81b41990efc711b4c303a15765fc8a71ac4e5514d07e7e30aa28c8b7834f.jpg|image]]


17. $\mathbf{F} = x^{3}y^{2}\mathbf{i} + \frac{1}{2} x^{4}y\mathbf{j}$ 

$$
\mathbf {1 8 . F} = \frac {x}{1 + y ^ {2}} \mathbf {i} + (\tan^ {- 1} y) \mathbf {j}
$$

![[2da05e23139d2c65ea3b6c9a7fc5c11542ba750cc3c1f96667845199824a3849.jpg|image]]


![[10277208db5283a7fca1aed34507dcb8df06901ccc2b8a683483cb56493e4937.jpg|image]]


19. $\mathbf{F} = (x + e^{x}\sin y)\mathbf{i} + (x + e^{x}\cos y)\mathbf{j}$ 

C: The right-hand loop of the lemniscate $r^{2} = \cos 2\theta$ 

20. $\mathbf{F} = \left(\tan^{-1}\frac{y}{x}\right)\mathbf{i} + \ln (x^2 +y^2)\mathbf{j}$ 

C: The boundary of the region defined by the polar coordinate inequalities $1 \leq r \leq 2$ , $0 \leq \theta \leq \pi$ 

21. Find the counterclockwise circulation and outward flux of the field $F = xy\mathbf{i} + y^{2}\mathbf{j}$ around and over the boundary of the region enclosed by the curve $y = x^{2}$ and the line y = x. 

22. Find the counterclockwise circulation and the outward flux of the field $\mathbf{F} = (-\sin y)\mathbf{i} + (x \cos y)\mathbf{j}$ around and over the boundary of the square $0 \leq x \leq \pi/2$ , $0 \leq y \leq \pi/2$ . 

23. Find the outward flux of the field 

$$
\mathbf {F} = \left(3 x y - \frac {x}{1 + y ^ {2}}\right) \mathbf {i} + (e ^ {x} + \tan^ {- 1} y) \mathbf {j}
$$

across the cardioid $r = a(1 + \cos \theta), a > 0$ . 

24. Find the counterclockwise circulation of $\mathbf{F} = (y + e^{x} \ln y)\mathbf{i} + (e^{x}/y)\mathbf{j}$ around the boundary of the region that is bounded above by the curve $y = 3 - x^{2}$ and below by the curve $y = x^{4} + 1$ . 

Work 

In Exercises 25 and 26, find the work done by F in moving a particle once counterclockwise around the given curve. 

25. $\mathbf{F} = 2xy^{3}\mathbf{i} + 4x^{2}y^{2}\mathbf{j}$ 

C: The boundary of the “triangular” region in the first quadrant enclosed by the x-axis, the line x = 1, and the curve $y = x^{3}$ 

26. $\mathbf{F} = (4x - 2y)\mathbf{i} + (2x - 4y)\mathbf{j}$ 

C: The circle $(x - 2)^{2} + (y - 2)^{2} = 4$ 

Using Green's Theorem 

Apply Green's Theorem to evaluate the integrals in Exercises 27–30. 

$$
2 7. \oint_ {C} (y ^ {2} d x + x ^ {2} d y)
$$

C: The boundary of the triangle enclosed by the lines $x = 0$ , $x + y = 1$ , and $y = 0$ 

28. $\oint_{C} (3y dx + 2x dy)$ 

C: The boundary of $0 \leq x \leq \pi$ , $0 \leq y \leq \sin x$ 

29. $\oint_{C}(6y + x)dx + (y + 2x)dy$ 

C: The circle $(x - 2)^{2} + (y - 3)^{2} = 4$ 

30. $\oint_{C}(2x + y^{2})dx + (2xy + 3y)dy$ 

C: Any simple closed curve in the plane for which Green's Theorem holds 

Calculating Area with Green's Theorem If a simple closed curve $C$ in the plane and the region $R$ it encloses satisfy the hypotheses of Green's Theorem, the area of $R$ is given by 

Green's Theorem Area Formula 

$$
\text { Area   of } R = \frac {1}{2} \oint_ {C} x d y - y d x
$$

The reason is that, by Equation (4) run backward, 

$$
\begin{array}{l} \text { Area   of } R = \iint_ {R} d y d x = \iint_ {R} \left(\frac {1}{2} + \frac {1}{2}\right) d y d x \\ = \oint_ {C} \frac {1}{2} x d y - \frac {1}{2} y d x. \end{array}
$$

Use the Green's Theorem area formula given above to find the areas of the regions enclosed by the curves in Exercises 31–34. 

31. The circle $\mathbf{r}(t) = (a \cos t)\mathbf{i} + (a \sin t)\mathbf{j}, \quad 0 \leq t \leq 2\pi$ 

32. The ellipse $\mathbf{r}(t) = (a\cos t)\mathbf{i} + (b\sin t)\mathbf{j}, 0 \leq t \leq 2\pi$ 

33. The astroid $\mathbf{r}(t) = (\cos^3 t)\mathbf{i} + (\sin^3 t)\mathbf{j}, 0 \leq t \leq 2\pi$ 

34. One arch of the cycloid $x = t - \sin t$ , $y = 1 - \cos t$ 

35. Let $C$ be the boundary of a region on which Green's Theorem holds. Use Green's Theorem to calculate 

a. $\oint_{C} f(x) dx + g(y) dy$ 

b. $\oint_{C} ky dx + hx dy$ (k and h constants). 

36. Integral dependent only on area Show that the value of 

$$
\oint_ {C} x y ^ {2} d x + (x ^ {2} y + 2 x) d y
$$

around any square depends only on the area of the square and not on its location in the plane. 

37. Evaluate the integral 

$$
\oint_ {C} 4 x ^ {3} y d x + x ^ {4} d y
$$

for any closed path $C$ . 

38. Evaluate the integral 

$$
\oint_ {C} - y ^ {3} d y + x ^ {3} d x
$$

for any closed path $C$ . 

39. Area as a line integral Show that if $R$ is a region in the plane bounded by a piecewise smooth, simple closed curve $C$ , then 

$$
\text { Area   of } R = \oint_ {C} x d y = - \oint_ {C} y d x.
$$

40. Definite integral as a line integral Suppose that a nonnegative function $y = f(x)$ has a continuous first derivative on $[a, b]$ . Let C be the boundary of the region in the xy-plane that is bounded below by the x-axis, above by the graph of f, and on the sides by the lines x = a and x = b. Show that 

$$
\int_ {a} ^ {b} f (x) d x = - \oint_ {C} y d x.
$$

41. Area and the centroid Let $\overline{x}$ be the x-coordinate of the centroid of a region R that is bounded by a piecewise smooth, simple closed curve C in the xy-plane. If A is the area of R, show that 

$$
\frac {1}{2} \oint_ {C} x ^ {2} d y = - \oint_ {C} x y d x = \frac {1}{3} \oint_ {C} x ^ {2} d y - x y d x = A \overline {{x}}.
$$

42. Moment of inertia Let $I_{y}$ be the moment of inertia about the y-axis of the region in Exercise 41. Show that 

$$
\frac {1}{3} \oint_ {C} x ^ {3} d y = - \oint_ {C} x ^ {2} y d x = \frac {1}{4} \oint_ {C} x ^ {3} d y - x ^ {2} y d x = I _ {y}.
$$

43. Green's Theorem and Laplace's equation Assuming that all the necessary derivatives exist and are continuous, show that if $f(x,y)$ satisfies the Laplace equation 

$$
\frac {\partial^ {2} f}{\partial x ^ {2}} + \frac {\partial^ {2} f}{\partial y ^ {2}} = 0,
$$

then 

$$
\oint_ {c} \frac {\partial f}{\partial y} d x - \frac {\partial f}{\partial x} d y = 0
$$

for all closed curves $C$ to which Green's Theorem applies. (The converse is also true: If the line integral is always zero, then $f$ satisfies the Laplace equation.) 

44. Maximizing work Among all smooth, simple closed curves in the plane, oriented counterclockwise, find the one along which the work done by 

$$
\mathbf {F} = \left(\frac {1}{4} x ^ {2} y + \frac {1}{3} y ^ {3}\right) \mathbf {i} + x \mathbf {j}
$$

is greatest. (Hint: Where is (curl F) · k positive?) 

45. Regions with many holes Green's Theorem holds for a region $R$ with any finite number of holes as long as the bounding curves are smooth, simple, and closed and we integrate over each component of the boundary in the direction that keeps $R$ on our immediate left as we proceed along the curve (see accompanying figure). 

![[96f05142224aaa24d6f0d5d4c478415b8f44f681aeb8624e40147f7c0d214132.jpg|image]]


a. Let $f(x, y) = \ln(x^{2} + y^{2})$ and let C be the circle $x^{2} + y^{2} = a^{2}$ . Evaluate the flux integral 

$$
\oint_ {C} \nabla f \cdot \mathbf {n} d s.
$$

![[791e571408fe4a899180c6f797e784c57b08de54930587126442d0e3fee4c22b.jpg|image]]


b. Let $K$ be an arbitrary smooth, simple closed curve in the plane that does not pass through $(0, 0)$ . Use Green's Theorem to show that 

$$
\oint_ {K} \nabla f \cdot \mathbf {n}   d s
$$

has two possible values, depending on whether $(0,0)$ lies inside K or outside K. 

46. Bendixson's criterion The streamlines of a planar fluid flow are the smooth curves traced by the fluid's individual particles. The vectors $\mathbf{F} = M(x,y)\mathbf{i} + N(x,y)\mathbf{j}$ of the flow's velocity field are the tangent vectors of the streamlines. Show that if the flow takes place over a simply connected region $R$ (no holes or missing points) and that if $M_x + N_y \neq 0$ throughout $R$ , then none of the streamlines in $R$ is closed. In other words, no particle of fluid ever has a closed trajectory in $R$ . The criterion $M_x + N_y \neq 0$ is called Bendixson's criterion for the nonexistence of closed trajectories. 

47. Establish Equation (7) to finish the proof of the special case of Green's Theorem. 

48. Curl component of conservative fields Can anything be said about the curl component of a conservative two-dimensional vector field? Give reasons for your answer. 

## COMPUTER EXPLORATIONS

In Exercises 49–52, use a CAS and Green's Theorem to find the counterclockwise circulation of the field F around the simple closed curve C. Perform the following CAS steps. 

a. Plot C in the xy-plane. 

b. Determine the integrand $(\partial N / \partial x) - (\partial M / \partial y)$ for the tangential form of Green's Theorem. 

c. Determine the (double integral) limits of integration from your plot in part (a), and evaluate the curl integral for the circulation. 

49. $\mathbf{F} = (2x - y)\mathbf{i} + (x + 3y)\mathbf{j}, C$ : The ellipse $x^{2} + 4y^{2} = 4$ 

50. $\mathbf{F} = (2x^{3} - y^{3})\mathbf{i} + (x^{3} + y^{3})\mathbf{j}, C:$ The ellipse $\frac{x^{2}}{4} + \frac{y^{2}}{9} = 1$ 

51. $F = x^{-1}e^{y}i + (e^{y}\ln x + 2x)j,$ 

C: The boundary of the region defined by $y = 1 + x^{4}$ (below) and y = 2 (above) 

52. $F = xe^{y}i + (4x^{2} \ln y)j,$ 

C: The triangle with vertices $(0,0)$ , $(2,0)$ , and $(0,4)$ 

## 15.5 Surfaces and Area

![[3b88b9945d74e57a1a5ce19dbdac8c9847f5ef48287cf44e3c94e59b3d0c8f7f.jpg|image]]


We have described curves in the plane in three different ways. 

Explicit form: 

Implicit form: 

$$
\begin{array}{l} y = f (x) \\ F (x, y) = 0 \end{array}
$$

Parametric vector form: 

$$
\mathbf {r} (t) = f (t) \mathbf {i} + g (t) \mathbf {j}, a \leq t \leq b.
$$

We have analogous descriptions of surfaces in space. 

Explicit form: 

Implicit form: 

$$
\begin{array}{l} z = f (x, y) \\ F (x, y, z) = 0. \end{array}
$$

![[f704b0c7014209dcbb04cf54eea0c29d684ccbb6d68bebf8024a13680e99306b.jpg|image]]


FIGURE 15.39 A parametrized surface S expressed as a vector function of two variables defined on a region R. 

There is also a parametric form for surfaces that gives the position of a point on the surface as a vector function of two variables. We discuss this new form in this section and apply the form to obtain the area of a surface as a double integral. Double integral formulas for areas of surfaces given in implicit and explicit forms are then obtained as special cases of the more general parametric formula. 

## Parametrizations of Surfaces

Suppose 

$$
\mathbf {r} (u, v) = f (u, v) \mathbf {i} + g (u, v) \mathbf {j} + h (u, v) \mathbf {k}\tag{1}
$$

is a continuous vector function that is defined on a region R in the uv-plane and is one-to-one on the interior of R (Figure 15.39). We call the range of r the surface S defined or traced by r. Equation (1) together with the domain R constitutes a parametrization of the surface. The variables u and v are the parameters, and R is the parameter domain. To simplify our discussion, we take R to be a rectangle defined by inequalities of the form $a \leq u \leq b$ , $c \leq v \leq d$ . The requirement that r be one-to-one on the interior of R ensures that S does not cross itself. Notice that Equation (1) is the vector equivalent of three parametric equations: 

$$
x = f (u, v), \quad y = g (u, v), \quad z = h (u, v).
$$

![[ccb1c2cf5cc2f7a036426992cd716e1a98a6bfbbebd2e4eb323d954b973b9bf5.jpg|image]]



FIGURE 15.40 The cone in Example 1 can be parametrized using cylindrical coordinates.


![[720dc681d0fd8bef468d228c40fb8c7a6a1d4efaf9a4cb12fe474571151495f2.jpg|image]]



FIGURE 15.41 The sphere in Example 2 can be parametrized using spherical coordinates.


![[3e365ea716fbbb7d8b6e04690b051a87c52fb529a74f9f0267e2348b7d6cc017.jpg|image]]



FIGURE 15.42 The cylinder in Example 3 can be parametrized using cylindrical coordinates.


**EXAMPLE 1** Find a parametrization of the cone 

$$
z = \sqrt {x ^ {2} + y ^ {2}}, \quad 0 \leq z \leq 1.
$$

**Solution** Here, cylindrical coordinates provide a parametrization. A typical point $(x, y, z)$ on the cone (Figure 15.40) has $x = r \cos \theta$ , $y = r \sin \theta$ , and $z = \sqrt{x^{2} + y^{2}} = r$ , with $0 \leq r \leq 1$ and $0 \leq \theta \leq 2\pi$ . Taking u = r and $v = \theta$ in Equation (1) gives the parametrization 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r \mathbf {k}, \quad 0 \leq r \leq 1, \quad 0 \leq \theta \leq 2 \pi .
$$

The parametrization is one-to-one on the interior of the domain, though not on the boundary where r = 0 (mapped to the tip of the cone) or where $\theta = 0$ or $\theta = 2\pi$ (where the cone glues together along a seam above the x-axis). 

## **EXAMPLE 2** Find a parametrization of the sphere $x^{2} + y^{2} + z^{2} = a^{2}$ .

**Solution** Spherical coordinates provide what we need. A typical point $(x, y, z)$ on the sphere (Figure 15.41) has $x = a \sin \phi \cos \theta$ , $y = a \sin \phi \sin \theta$ , and $z = a \cos \phi$ , $0 \leq \phi \leq \pi$ , $0 \leq \theta \leq 2\pi$ . Taking $u = \phi$ and $v = \theta$ in Equation (1) gives the parametrization 

$$
\begin{array}{c} \mathbf {r} (\phi , \theta) = (a \sin \phi \cos \theta) \mathbf {i} + (a \sin \phi \sin \theta) \mathbf {j} + (a \cos \phi) \mathbf {k}, \\ 0 \leq \phi \leq \pi , \quad 0 \leq \theta \leq 2 \pi . \end{array}
$$

Again, the parametrization is one-to-one on the interior of the domain, though not on its boundary. 

**EXAMPLE 3** Find a parametrization of the cylinder 

$$
x ^ {2} + (y - 3) ^ {2} = 9, \quad 0 \leq z \leq 5.
$$

**Solution** In cylindrical coordinates, a point $(x, y, z)$ has $x = r \cos \theta$ , $y = r \sin \theta$ , and z = z. For points on the cylinder $x^{2} + (y - 3)^{2} = 9$ (Figure 15.42), the equation is the same as the polar equation for the cylinder's base in the xy-plane: 

$$
\begin{array}{c} x ^ {2} + (y ^ {2} - 6 y + 9) = 9 \\ r ^ {2} - 6 r \sin \theta = 0 \end{array} \quad x ^ {2} + y ^ {2} = r ^ {2}, y = r \sin \theta
$$

or 

$$
r = 6 \sin \theta , \quad 0 \leq \theta \leq \pi .
$$

A typical point on the cylinder therefore has 

$$
\begin{array}{l} x = r \cos \theta = 6 \sin \theta \cos \theta = 3 \sin 2 \theta \\ y = r \sin \theta = 6 \sin^ {2} \theta \\ z = z. \end{array}
$$

Taking $u = \theta$ and $v = z$ in Equation (1) gives the parametrization 

$$
\mathbf {r} (\theta , z) = (3 \sin 2 \theta) \mathbf {i} + (6 \sin^ {2} \theta) \mathbf {j} + z \mathbf {k}, 0 \leq \theta \leq \pi , 0 \leq z \leq 5,
$$

which is one-to-one on the interior of the domain. 

## Surface Area

Our goal is to find a double integral that gives the area of a curved surface S based on the parametrization 

$$
\mathbf {r} (u, v) = f (u, v) \mathbf {i} + g (u, v) \mathbf {j} + h (u, v) \mathbf {k}, a \leq u \leq b, c \leq v \leq d.
$$

We need S to be smooth for the construction we now describe. The definition of smoothness involves the partial derivatives of r with respect to u and v: 

$$
\mathbf {r} _ {u} = \frac {\partial \mathbf {r}}{\partial u} = \frac {\partial f}{\partial u} \mathbf {i} + \frac {\partial g}{\partial u} \mathbf {j} + \frac {\partial h}{\partial u} \mathbf {k}
$$

$$
\mathbf {r} _ {v} = \frac {\partial \mathbf {r}}{\partial v} = \frac {\partial f}{\partial v} \mathbf {i} + \frac {\partial g}{\partial v} \mathbf {j} + \frac {\partial h}{\partial v} \mathbf {k}.
$$

> ***DEFINITION*** A parametrized surface $\mathbf{r}(u,v)=f(u,v)\mathbf{i}+g(u,v)\mathbf{j}+h(u,v)\mathbf{k}$ is smooth if $r_{u}$ and $r_{v}$ are continuous and if $r_{u}\times r_{v}$ is never zero on the interior of the parameter domain. 

The condition that $\mathbf{r}_u\times \mathbf{r}_v$ is never the zero vector in the definition of smoothness means that the two vectors $\mathbf{r}_u$ and $\mathbf{r}_v$ are nonzero and never lie along the same line, so they always determine a plane tangent to the surface. We relax this condition on the boundary of the domain, but this does not affect the area computations. 

Now consider a small rectangle $\Delta A_{uv}$ in R with sides on the lines $u = u_{0}$ , $u = u_{0} + \Delta u$ , $v = v_{0}$ , and $v = v_{0} + \Delta v$ (Figure 15.43). Each side of $\Delta A_{uv}$ maps onto a curve on the surface S, and together these four curves bound a “curved patch element” $\Delta \sigma_{uv}$ . In the notation of the figure, the side $v = v_{0}$ maps to curve $C_{1}$ , the side $u = u_{0}$ maps onto $C_{2}$ , and their common vertex $(u_{0}, v_{0})$ maps to $P_{0}$ . 

![[ab8b1e3f32037e988daad95e63fc80af0013a02a1d27af8fd145c682f2e6a018.jpg|image]]



FIGURE 15.43 A rectangular area element $\Delta A_{uv}$ in the uv-plane maps onto a curved patch element $\Delta\sigma_{uv}$ on S.


![[2b3615c62003580462a4140d2a2a7eb2e480c97eda7bc887c0b24eb64121f4c2.jpg|image]]



FIGURE 15.44 A magnified view of a surface patch element $\Delta\sigma_{uv}$ .


![[fc9a12f18ed733f7e5bbc18d471228d703d4a387e0f6445f1cfdb084f7343de5.jpg|image]]



FIGURE 15.45 The area of the parallelogram determined by the vectors $\Delta u r_{u}$ and $\Delta v r_{v}$ approximates the area of the surface patch element $\Delta \sigma_{uv}$ .


Figure 15.44 shows an enlarged view of $\Delta \sigma_{uv}$ . The partial derivative vector $\mathbf{r}_u(u_0, v_0)$ is tangent to $C_1$ at $P_0$ . Likewise, $\mathbf{r}_v(u_0, v_0)$ is tangent to $C_2$ at $P_0$ . The cross product $\mathbf{r}_u \times \mathbf{r}_v$ is normal to the surface at $P_0$ . (Here is where we begin to use the assumption that $S$ is smooth. We want to be sure that $\mathbf{r}_u \times \mathbf{r}_v \neq \mathbf{0}$ .) 

We next approximate the surface patch element $\Delta\sigma_{uv}$ by the parallelogram on the tangent plane whose sides are determined by the vectors $\Delta u r_{u}$ and $\Delta v r_{v}$ (Figure 15.45). The area of this parallelogram is 

$$
\left| \Delta u \mathbf {r} _ {u} \times \Delta v \mathbf {r} _ {v} \right| = \left| \mathbf {r} _ {u} \times \mathbf {r} _ {v} \right| \Delta u \Delta v.\tag{2}
$$

A partition of the region R in the uv-plane by rectangular regions $\Delta A_{uv}$ induces a partition of the surface S into surface patch elements $\Delta \sigma_{uv}$ . We approximate the area of each surface patch element $\Delta\sigma_{uv}$ by the parallelogram area in Equation (2) and sum these areas together to obtain an approximation of the surface area of S: 

$$
\sum_ {n} \left| \mathbf {r} _ {u} \times \mathbf {r} _ {v} \right| \Delta u \Delta v.\tag{3}
$$

As $\Delta u$ and $\Delta v$ approach zero independently, the number of area elements n approaches $\infty$ and the continuity of $r_{u}$ and $r_{v}$ guarantees that the sum in Equation (3) approaches the double integral $\int_{c}^{d}\int_{a}^{b}|\mathbf{r}_{u}\times\mathbf{r}_{v}|du dv$ . This double integral over the region R is used to define the area of the surface S. 

> ***DEFINITION*** The area of the smooth surface 
>
> $$
> \mathbf {r} (u, v) = f (u, v) \mathbf {i} + g (u, v) \mathbf {j} + h (u, v) \mathbf {k}, \quad a \leq u \leq b, c \leq v \leq d
> $$
>
> is 
>
> $$
> A = \iint_ {R} | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d A = \int_ {c} ^ {d} \int_ {a} ^ {b} | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v.\tag{4}
> $$
>
We can abbreviate the integral in Equation (4) by writing $d\sigma$ for $|r_{u} \times r_{v}| du dv$ . The surface area differential $d\sigma$ is analogous to the arc length differential ds in Section 12.3. 

## Surface Area Differential for a Parametrized Surface

$$
d \sigma = | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v
$$

$$
\iint_ {S} d \sigma\tag{5}
$$

Surface area differential, also called surface area element 

Differential formula for surface area 

## **EXAMPLE 4** Find the surface area of the cone in Example 1 (Figure 15.40).

**Solution** In Example 1, we found the parametrization 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r \mathbf {k}, \quad 0 \leq r \leq 1, \quad 0 \leq \theta \leq 2 \pi .
$$

To apply Equation (4), we first find $\mathbf{r}_r\times \mathbf{r}_{\theta}$ : 

$$
\begin{array}{l} \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \cos \theta & \sin \theta & 1 \\ - r \sin \theta & r \cos \theta & 0 \end{array} \right| \\ = - (r \cos \theta) \mathbf {i} - (r \sin \theta) \mathbf {j} + \underbrace {(r \cos^ {2} \theta + r \sin^ {2} \theta)} _ {r} \mathbf {k}. \end{array}
$$

Thus, $|\mathbf{r}_r\times \mathbf{r}_\theta | = \sqrt{r^2\cos^2\theta + r^2\sin^2\theta + r^2} = \sqrt{2r^2} = \sqrt{2} r$ . The area of the cone is 

$$
\begin{array}{l} A = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} | \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} | d r d \theta \quad \text { Eq.   (4)   with } u = r, v = \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} \sqrt {2} r d r d \theta = \int_ {0} ^ {2 \pi} \frac {\sqrt {2}}{2} d \theta = \frac {\sqrt {2}}{2} (2 \pi) = \pi \sqrt {2} \text { square   units }. \end{array}
$$

![[32d5af7ef198e3a7d347f00e1423d473b7ee7f19fa35188579c0b36ab5e2bb91.jpg|image]]



FIGURE 15.46 The “football” surface in Example 6 obtained by rotating the curve x = cos z about the z-axis.


## **EXAMPLE 5** Find the surface area of a sphere of radius a.

**Solution** We use the parametrization from Example 2: 

$$
\begin{array}{c} \mathbf {r} (\phi , \theta) = (a \sin \phi \cos \theta) \mathbf {i} + (a \sin \phi \sin \theta) \mathbf {j} + (a \cos \phi) \mathbf {k}, \\ 0 \leq \phi \leq \pi , 0 \leq \theta \leq 2 \pi . \end{array}
$$

For $\mathbf{r}_{\phi}\times \mathbf{r}_{\theta}$ , we get 

$$
\begin{array}{c} \mathbf {r} _ {\phi} \times \mathbf {r} _ {\theta} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ a \cos \phi \cos \theta & a \cos \phi \sin \theta & - a \sin \phi \\ - a \sin \phi \sin \theta & a \sin \phi \cos \theta & 0 \end{array} \right| \\ = (a ^ {2} \sin^ {2} \phi \cos \theta) \mathbf {i} + (a ^ {2} \sin^ {2} \phi \sin \theta) \mathbf {j} + (a ^ {2} \sin \phi \cos \phi) \mathbf {k}. \end{array}
$$

Thus, 

$$
\begin{array}{r l} \left| \mathbf {r} _ {\phi} \times \mathbf {r} _ {\theta} \right| & = \sqrt {a ^ {4} \sin^ {4} \phi \cos^ {2} \theta + a ^ {4} \sin^ {4} \phi \sin^ {2} \theta + a ^ {4} \sin^ {2} \phi \cos^ {2} \phi} \\ & = \sqrt {a ^ {4} \sin^ {4} \phi + a ^ {4} \sin^ {2} \phi \cos^ {2} \phi} = \sqrt {a ^ {4} \sin^ {2} \phi (\sin^ {2} \phi + \cos^ {2} \phi)} \\ & = a ^ {2} \sqrt {\sin^ {2} \phi} = a ^ {2} \sin \phi \end{array}
$$

because $\sin\phi\geq0$ for $0\leq\phi\leq\pi$ . Therefore, the area of the sphere is 

$$
\begin{array}{l} A = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi} a ^ {2} \sin \phi d \phi d \theta \\ = \int_ {0} ^ {2 \pi} \left[ - a ^ {2} \cos \phi \right] _ {\phi = 0} ^ {\phi = \pi} d \theta = \int_ {0} ^ {2 \pi} 2 a ^ {2} d \theta = 4 \pi a ^ {2} \quad \text { square   units. } \end{array}
$$

This gives the well-known formula for the surface area of a sphere. 

**EXAMPLE 6** Let S be the “football” surface formed by rotating the curve $x = \cos z$ , $y = 0$ , $-\pi/2 \leq z \leq \pi/2$ around the z-axis (see Figure 15.46). Find a parametrization for S and compute its surface area. 

**Solution** Example 2 suggests finding a parametrization of S based on its rotation around the z-axis. If we rotate a point $(x,0,z)$ on the curve $x = \cos z$ , y = 0 about the z-axis, we obtain a circle at height z above the xy-plane that is centered on the z-axis and has radius $r = \cos z$ (see Figure 15.46). The point sweeps out the circle through an angle of rotation $\theta$ , $0 \leq \theta \leq 2\pi$ . We let $(x,y,z)$ be an arbitrary point on this circle, and define the parameters u = z and v = $\theta$ . Then we have $x = r \cos \theta = \cos u \cos v$ , $y = r \sin \theta = \cos u \sin v$ , and z = u, giving a parametrization for S as 

$$
\mathbf {r} (u, v) = \cos u \cos v \mathbf {i} + \cos u \sin v \mathbf {j} + u \mathbf {k}, - \frac {\pi}{2} \leq u \leq \frac {\pi}{2}, 0 \leq v \leq 2 \pi .
$$

Next we use Equation (5) to find the surface area of S. Differentiation of the parametrization gives 

$$
\mathbf {r} _ {u} = - \sin u \cos v \mathbf {i} - \sin u \sin v \mathbf {j} + \mathbf {k}
$$

and 

$$
\mathbf {r} _ {v} = - \cos u \sin v \mathbf {i} + \cos u \cos v \mathbf {j}.
$$

Computing the cross product, we have 

$$
\begin{array}{l} \mathbf {r} _ {u} \times \mathbf {r} _ {v} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ - \sin u \cos v & - \sin u \sin v & 1 \\ - \cos u \sin v & \cos u \cos v & 0 \end{array} \right| \\ = - \cos u \cos v   \mathbf {i} - \cos u \sin v   \mathbf {j} - (\sin u \cos u \cos^ {2} v + \cos u \sin u \sin^ {2} v) \mathbf {k}. \end{array}
$$

Taking the magnitude of the cross product gives 

$$
\begin{array}{l} \left| \mathbf {r} _ {u} \times \mathbf {r} _ {v} \right| = \sqrt {\cos^ {2} u (\cos^ {2} v + \sin^ {2} v) + \sin^ {2} u \cos^ {2} u} \\ \qquad = \sqrt {\cos^ {2} u (1 + \sin^ {2} u)} \\ \qquad = \cos u \sqrt {1 + \sin^ {2} u}. \qquad \cos u \geq 0 \text {   for   } - \frac {\pi}{2} \leq u \leq \frac {\pi}{2} \end{array}
$$

From Equation (4) the surface area is given by the integral 

$$
A = \int_ {0} ^ {2 \pi} \int_ {- \pi / 2} ^ {\pi / 2} \cos u \sqrt {1 + \sin^ {2} u} d u d v.
$$

To evaluate the integral, we substitute $w = \sin u$ and $dw = \cos u du, -1 \leq w \leq 1$ . Since the surface S is symmetric across the xy-plane, we need only integrate with respect to w from 0 to 1 and multiply the result by 2. In summary, we have 


FIGURE 15.47 As we soon see, the area of a surface S in space can be calculated by evaluating a related double integral over the vertical projection or “shadow” of S on a coordinate plane. The unit vector p is normal to the plane.


$$
\begin{array}{l} A = 2 \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} \sqrt {1 + w ^ {2}} d w d v \\ = 2 \int_ {0} ^ {2 \pi} \left[ \frac {w}{2} \sqrt {1 + w ^ {2}} + \frac {1}{2} \ln (w + \sqrt {1 + w ^ {2}}) \right] _ {w = 0} ^ {w = 1} d v \quad \text { Integral   Table   Formula   35 } \\ = \int_ {0} ^ {2 \pi} 2 \left[ \frac {1}{2} \sqrt {2} + \frac {1}{2} \ln (1 + \sqrt {2}) \right] d v \\ = 2 \pi [ \sqrt {2} + \ln (1 + \sqrt {2}) ]. \end{array}
$$

## Implicit Surfaces

![[45ca1829bc51342f8e7a97c0567f39fa8deec7455b40bd75c9270fd20dbfe16a.jpg|image]]


Surfaces are often presented as level sets of a function, described by an equation such as 

$$
F (x, y, z) = c,
$$

for some constant c. Such a level surface does not come with an explicit parametrization and is called an implicitly defined surface. Implicit surfaces arise, for example, as equipotential surfaces in electric or gravitational fields. Figure 15.47 shows a piece of such a surface. It may be difficult to find explicit formulas for the functions f, g, and h that describe the surface in the form $\mathbf{r}(u,v)=f(u,v)\mathbf{i}+g(u,v)\mathbf{j}+h(u,v)\mathbf{k}$ . We now show how to compute the surface area differential $d\sigma$ for implicit surfaces. 

Figure 15.47 shows a piece of an implicit surface S that lies above its “shadow” region R in the plane beneath it. The surface is defined by the equation $F(x, y, z) = c$ , and we choose p to be a unit vector normal to the plane region R. We assume that the surface is smooth (F is differentiable and $\nabla F$ is nonzero and continuous on S) and that $\nabla F \cdot p \neq 0$ , so the surface never folds back over itself. 

Assume that the normal vector p is the unit vector k, so the region R in Figure 15.47 lies in the xy-plane. By assumption, we then have $\nabla F \cdot p = \nabla F \cdot k = F_{z} \neq 0$ on S. The Implicit Function Theorem (see Section 13.4) implies that S is then the graph of a differentiable function $z = h(x, y)$ , although the function $h(x, y)$ is not explicitly known. Define the parameters u and v by u = x and v = y. Then $z = h(u, v)$ and 

$$
\mathbf {r} (u, v) = u \mathbf {i} + v \mathbf {j} + h (u, v) \mathbf {k}\tag{6}
$$

gives a parametrization of the surface S. We use Equation (4) to find the area of S. 

Calculating the partial derivatives of r, we find 

$$
\mathbf {r} _ {u} = \mathbf {i} + \frac {\partial h}{\partial u} \mathbf {k} \quad \text { and } \quad \mathbf {r} _ {v} = \mathbf {j} + \frac {\partial h}{\partial v} \mathbf {k}.
$$

![[ef9b63236d25d5d195fa3512a4816e7f755456ffc566f6a503a3f029d045d526.jpg|image]]



FIGURE 15.48 The area of this parabolic surface is calculated in Example 7.


Applying the Chain Rule for implicit differentiation (see Equation (2) in Section 13.4) to $F(x,y,z) = c$ , where $x = u, y = v$ , and $z = h(u,v)$ , we obtain the partial derivatives 

$$
\frac {\partial h}{\partial u} = - \frac {F _ {x}}{F _ {z}} \quad \text { and } \quad \frac {\partial h}{\partial v} = - \frac {F _ {y}}{F _ {z}}. \quad F _ {z} \neq 0
$$

Substitution of these derivatives into the derivatives of $\mathbf{r}$ gives 

$$
\mathbf {r} _ {u} = \mathbf {i} - \frac {F _ {x}}{F _ {z}} \mathbf {k} \quad \text { and } \quad \mathbf {r} _ {v} = \mathbf {j} - \frac {F _ {y}}{F _ {z}} \mathbf {k}.
$$

From a routine calculation of the cross product, we find 

$$
\begin{array}{l l} \mathbf {r} _ {u} \times \mathbf {r} _ {v} = \frac {F _ {x}}{F _ {z}} \mathbf {i} + \frac {F _ {y}}{F _ {z}} \mathbf {j} + \mathbf {k} & \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 1 & 0 & - F _ {x} / F _ {z} \\ 0 & 1 & - F _ {y} / F _ {z} \end{array} \right| \quad \text {   cross   product   of   } \\ = \frac {1}{F _ {z}} (F _ {x} \mathbf {i} + F _ {y} \mathbf {j} + F _ {z} \mathbf {k}) & \\ = \frac {\nabla F}{F _ {z}} = \frac {\nabla F}{\nabla F \cdot \mathbf {k}} & \\ = \frac {\nabla F}{\nabla F \cdot \mathbf {p}}. & \mathbf {p} = \mathbf {k} \end{array}
$$

Therefore, the surface area differential is given by 

$$
d \sigma = | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v = \frac {| \nabla F |}{| \nabla F \cdot \mathbf {p} |} d x d y. \quad u = x \text {   and   } v = y
$$

We obtain similar calculations if instead the vector $p = j$ is normal to the xz-plane when $F_{y} \neq 0$ on S, or if $p = i$ is normal to the yz-plane when $F_{x} \neq 0$ on S. Combining these results with Equation (4) then gives the following general formula. 

Formula for the Surface Area of an Implicit Surface 

The area of the surface $F(x, y, z) = c$ over a closed and bounded plane region R is 

$$
\text { Surface   area } = \iint_ {R} \frac {| \nabla F |}{| \nabla F \cdot \mathbf {p} |} d A,\tag{7}
$$

where $\mathbf{p} = \mathbf{i},\mathbf{j}$ , or $\mathbf{k}$ is normal to $R$ and $\nabla F\cdot \mathbf{p}\neq 0$ . 

Thus, the area is the double integral over $R$ of the magnitude of $\nabla F$ divided by the magnitude of the scalar component of $\nabla F$ normal to $R$ . 

We reached Equation (7) under the assumption that $\nabla F \cdot p \neq 0$ throughout R and that $\nabla F$ is continuous. Whenever the integral exists, however, we define its value to be the area of the portion of the surface $F(x, y, z) = c$ that lies over R. (Recall that the projection is assumed to be one-to-one.) 

**EXAMPLE 7** Find the area of the surface cut from the bottom of the paraboloid $x^{2} + y^{2} - z = 0$ by the plane z = 4. 

**Solution** We sketch the surface S and the region R below it in the xy-plane (Figure 15.48). The surface S is part of the level surface $F(x, y, z) = x^{2} + y^{2} - z = 0$ , and R is the disk $x^{2} + y^{2} \leq 4$ in the xy-plane. To get a unit vector normal to the plane of R, we can take p = k. 

At any point $(x, y, z)$ on the surface, we have 

$$
F (x, y, z) = x ^ {2} + y ^ {2} - z
$$

$$
\nabla F = 2 x \mathbf {i} + 2 y \mathbf {j} - \mathbf {k}
$$

$$
| \nabla F | = \sqrt {(2 x) ^ {2} + (2 y) ^ {2} + (- 1) ^ {2}} = \sqrt {4 x ^ {2} + 4 y ^ {2} + 1}
$$

$$
| \nabla F \cdot \mathbf {p} | = | \nabla F \cdot \mathbf {k} | = | - 1 | = 1.
$$

In the region R, dA = dx dy. Therefore, 

$$
\begin{array}{l} \text { Surface   area } = \iint_ {R} \frac {| \nabla F |}{| \nabla F \cdot \mathbf {p} |} d A \\ = \iint_ {x ^ {2} + y ^ {2} \leq 4} \sqrt {4 x ^ {2} + 4 y ^ {2} + 1} d x d y \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \sqrt {4 r ^ {2} + 1} r d r d \theta \\ = \int_ {0} ^ {2 \pi} \left[ \frac {1}{1 2} (4 r ^ {2} + 1) ^ {3 / 2} \right] _ {r = 0} ^ {r = 2} d \theta \\ = \int_ {0} ^ {2 \pi} \frac {1}{1 2} (1 7 ^ {3 / 2} - 1) d \theta = \frac {\pi}{6} (1 7 \sqrt {1 7} - 1). \end{array} \tag {Eq.(7)}
$$

Example 7 illustrates how to find the surface area for a function $z = f(x, y)$ over a region R in the xy-plane. Actually, the surface area differential can be obtained in two ways, and we show this in the next example. 

**EXAMPLE 8** Derive the surface area differential $d\sigma$ of the surface $z = f(x, y)$ over a region R in the xy-plane (a) parametrically using Equation (5), and (b) implicitly, as in Equation (7). 

## **Solution**

(a) We parametrize the surface by taking $x = u$ , $y = v$ , and $z = f(x, y)$ over $R$ . This gives the parametrization 

$$
\mathbf {r} (u, v) = u \mathbf {i} + v \mathbf {j} + f (u, v) \mathbf {k}.
$$

Computing the partial derivatives gives $r_{u} = i + f_{u}k$ , $r_{v} = j + f_{v}k$ and 

$$
\mathbf {r} _ {u} \times \mathbf {r} _ {v} = - f _ {u} \mathbf {i} - f _ {v} \mathbf {j} + \mathbf {k}. \quad \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 1 & 0 & f _ {u} \\ 0 & 1 & f _ {v} \end{array} \right|
$$

Then $|\mathbf{r}_u \times \mathbf{r}_v| du dv = \sqrt{f_u^2 + f_v^2 + 1} du dv$ . Substituting for $u$ and $v$ , then gives the surface area differential 

$$
d \sigma = \sqrt {f _ {x} ^ {2} + f _ {y} ^ {2} + 1} d x d y.
$$

(b) We define the implicit function $F(x, y, z) = f(x, y) - z$ . Since $(x, y)$ belongs to the region R, the unit normal to the plane of R is p = k. Then $\nabla F = f_{x}i + f_{y}j - k$ so that $|\nabla F \cdot \mathbf{p}| = |-1| = 1, |\nabla F| = \sqrt{f_x^2 + f_y^2 + 1}$ , and $|\nabla F| / |\nabla F \cdot \mathbf{p}| = |\nabla F|$ . The surface area differential is again given by 

$$
d \sigma = \sqrt {f _ {x} ^ {2} + f _ {y} ^ {2} + 1} d x d y.
$$

The surface area differential derived in Example 8 gives the following formula for calculating the surface area of the graph of a function defined explicitly as $z = f(x, y)$ . 

Formula for the Surface Area of a Graph $z = f(x, y)$ For a graph $z = f(x, y)$ over a region R in the xy-plane, the surface area formula is 

$$
A = \iint_ {R} \sqrt {f _ {x} ^ {2} + f _ {y} ^ {2} + 1} d x d y.\tag{8}
$$

## EXERCISES 15.5

## Finding Parametrizations

In Exercises 1–16, find a parametrization of the surface. (There are many correct ways to do these, so your answers may not be the same as those in the back of the text.) 

1. The paraboloid $z = x^{2} + y^{2}, z \leq 4$ 

2. The paraboloid $z = 9 - x^{2} - y^{2}, z \geq 0$ 

3. Cone frustum The first-octant portion of the cone $z = \sqrt{x^2 + y^2} / 2$ between the planes $z = 0$ and $z = 3$ 

4. Cone frustum The portion of the cone $z = 2\sqrt{x^{2} + y^{2}}$ between the planes z = 2 and z = 4 

5. Spherical cap The cap cut from the sphere $x^{2} + y^{2} + z^{2} = 9$ by the cone $z = \sqrt{x^2 + y^2}$ 

6. Spherical cap The portion of the sphere $x^{2} + y^{2} + z^{2} = 4$ in the first octant between the xy-plane and the cone $z = \sqrt{x^{2} + y^{2}}$ 

7. Spherical band The portion of the sphere $x^{2} + y^{2} + z^{2} = 3$ between the planes $z = \sqrt{3} / 2$ and $z = -\sqrt{3} / 2$ 

8. Spherical cap The upper portion cut from the sphere $x^{2} + y^{2} + z^{2} = 8$ by the plane $z = -2$ 

9. Parabolic cylinder between planes The surface cut from the parabolic cylinder $z = 4 - y^2$ by the planes $x = 0, x = 2$ , and $z = 0$ 

10. Parabolic cylinder between planes The surface cut from the parabolic cylinder $y = x^2$ by the planes $z = 0, z = 3$ , and $y = 2$ 

11. Circular cylinder band The portion of the cylinder $y^{2} + z^{2} = 9$ between the planes x = 0 and x = 3 

12. Circular cylinder band The portion of the cylinder $x^{2} + z^{2} = 4$ above the xy-plane between the planes y = -2 and y = 2 

13. Tilted plane inside cylinder The portion of the plane $x + y + z = 1$ 

a. Inside the cylinder $x^{2} + y^{2} = 9$ 

b. Inside the cylinder $y^{2} + z^{2} = 9$ 

14. Tilted plane inside cylinder The portion of the plane $x - y + 2z = 2$ 

a. Inside the cylinder $x^{2} + z^{2} = 3$ 

b. Inside the cylinder $y^{2} + z^{2} = 2$ 

15. Circular cylinder band The portion of the cylinder $(x - 2)^{2} + z^{2} = 4$ between the planes y = 0 and y = 3 

16. Circular cylinder band The portion of the cylinder $y^{2} + (z - 5)^{2} = 25$ between the planes x = 0 and x = 10 

## Surface Area of Parametrized Surfaces

In Exercises 17–26, use a parametrization to express the area of the surface as a double integral. Then evaluate the integral. (There are many correct ways to set up the integrals, so your integrals may not be the same as those in the back of the text. They should have the same values, however.) 

17. Tilted plane inside cylinder The portion of the plane $y + 2z = 2$ inside the cylinder $x^{2} + y^{2} = 1$ 

18. Plane inside cylinder The portion of the plane $z = -x$ inside the cylinder $x^{2} + y^{2} = 4$ 

19. Cone frustum The portion of the cone $z = 2\sqrt{x^2 + y^2}$ between the planes $z = 2$ and $z = 6$ 

20. Cone frustum The portion of the cone $z = \sqrt{x^2 + y^2} / 3$ between the planes $z = 1$ and $z = 4/3$ 

21. Circular cylinder band The portion of the cylinder $x^{2} + y^{2} = 1$ between the planes z = 1 and z = 4 

22. Circular cylinder band The portion of the cylinder $x^{2} + z^{2} = 10$ between the planes $y = -1$ and $y = 1$ 

23. Parabolic cap The cap cut from the paraboloid $z = 2 - x^{2} - y^{2}$ by the cone $z = \sqrt{x^{2} + y^{2}}$ 

24. Parabolic band The portion of the paraboloid $z = x^{2} + y^{2}$ between the planes $z = 1$ and $z = 4$ 

25. Sawed-off sphere The lower portion cut from the sphere $x^{2} + y^{2} + z^{2} = 2$ by the cone $z = \sqrt{x^2 + y^2}$ 

26. Spherical band The portion of the sphere $x^{2} + y^{2} + z^{2} = 4$ between the planes $z = -1$ and $z = \sqrt{3}$ 

## Planes Tangent to Parametrized Surfaces

The tangent plane at a point $P_{0}(f(u_{0},v_{0}), g(u_{0},v_{0}), h(u_{0},v_{0}))$ on a parametrized surface $\mathbf{r}(u,v)=f(u,v)\mathbf{i}+g(u,v)\mathbf{j}+h(u,v)\mathbf{k}$ is the plane through $P_{0}$ normal to the vector $\mathbf{r}_{u}(u_{0},v_{0})\times\mathbf{r}_{v}(u_{0},v_{0})$ , the cross product of the tangent vectors $\mathbf{r}_{u}(u_{0},v_{0})$ and $\mathbf{r}_{v}(u_{0},v_{0})$ at $P_{0}$ . In Exercises 27–30, find an equation for the plane tangent to the surface at $P_{0}$ . Then find a Cartesian equation for the surface, and sketch the surface and tangent plane together. 

27. Cone The cone $\mathbf{r}(r,\theta) = (r\cos \theta)\mathbf{i} + (r\sin \theta)\mathbf{j} + r\mathbf{k}, r\geq 0, 0\leq \theta \leq 2\pi$ at the point $P_0(\sqrt{2},\sqrt{2},2)$ corresponding to $(r,\theta) = (2,\pi /4)$ 

28. Hemisphere The hemisphere surface $\mathbf{r}(\phi, \theta) = (4\sin \phi \cos \theta)\mathbf{i} + (4\sin \phi \sin \theta)\mathbf{j} + (4\cos \phi)\mathbf{k}, 0 \leq \phi \leq \pi/2, 0 \leq \theta \leq 2\pi,$ at the point $P_0(\sqrt{2}, \sqrt{2}, 2\sqrt{3})$ corresponding to $(\phi, \theta) = (\pi/6, \pi/4)$ 

29. Circular cylinder The circular cylinder $\mathbf{r}(\theta, z) = (3\sin 2\theta)\mathbf{i} + (6\sin^2\theta)\mathbf{j} + z\mathbf{k}, 0 \leq \theta \leq \pi$ , at the point $P_0(3\sqrt{3}/2, 9/2, 0)$ corresponding to $(\theta, z) = (\pi/3, 0)$ (See Example 3.) 

30. Parabolic cylinder The parabolic cylinder surface $\mathbf{r}(x,y)=x\mathbf{i}+y\mathbf{j}-x^{2}\mathbf{k},-\infty<x<\infty,-\infty<y<\infty,$ at the point $P_{0}(1,2,-1)$ corresponding to $(x,y)=(1,2)$ 

## More Parametrizations of Surfaces

31. a. A torus of revolution (doughnut) is obtained by rotating a circle C in the xz-plane about the z-axis in space. (See the accompanying figure.) If C has radius r > 0 and center $(R, 0, 0)$ , show that a parametrization of the torus is 

$$
\begin{array}{l} \mathbf {r} (u, v) = ((R + r \cos u) \cos v) \mathbf {i} \\ \qquad + ((R + r \cos u) \sin v) \mathbf {j} + (r \sin u) \mathbf {k}, \end{array}
$$

where $0 \leq u \leq 2\pi$ and $0 \leq v \leq 2\pi$ are the angles in the figure. 

b. Show that the surface area of the torus is $A = 4\pi^2 Rr$ . 

![[618c3b2ffa7318ed62370719e01e7c5d9cf53bb05f9a1b82ecdace52f79f1d4c.jpg|image]]


![[b5c499b4c8a55ff4a552143268f12101502e3345f99e9242ee4ba811cd935bdb.jpg|image]]


32. Parametrization of a surface of revolution Suppose that the parametrized curve $C \colon (f(u), g(u))$ is revolved about the $x$ -axis, where $g(u) > 0$ for $a \leq u \leq b$ . 

a. Show that 

$$
\mathbf {r} (u, v) = f (u) \mathbf {i} + (g (u) \cos v) \mathbf {j} + (g (u) \sin v) \mathbf {k}
$$

is a parametrization of the resulting surface of revolution, where $0 \leq v \leq 2\pi$ is the angle from the xy-plane to the point $\mathbf{r}(u,v)$ on the surface. (See the accompanying figure.) Notice that $f(u)$ measures distance along the axis of revolution and $g(u)$ measures distance from the axis of revolution. 

![[3d5edab7215f4e015f152d1d2605f85ac92c3ddfc37a123e0b7951ae2c697c25.jpg|image]]


b. Find a parametrization for the surface obtained by revolving the curve $x = y^{2}$ , $y \geq 0$ , about the x-axis. 

33. a. Parametrization of an ellipsoid The parametrization $x = a \cos \theta$ , $y = b \sin \theta$ , $0 \leq \theta \leq 2\pi$ gives the ellipse $(x^{2}/a^{2}) + (y^{2}/b^{2}) = 1$ . Using the angles $\theta$ and $\phi$ in spherical coordinates, show that 

$$
\mathbf {r} (\theta , \phi) = (a \cos \theta \sin \phi) \mathbf {i} + (b \sin \theta \sin \phi) \mathbf {j} + (c \cos \phi) \mathbf {k}
$$

is a parametrization of the ellipsoid 

$$
\left(x ^ {2} / a ^ {2}\right) + \left(y ^ {2} / b ^ {2}\right) + \left(z ^ {2} / c ^ {2}\right) = 1.
$$

b. Write an integral for the surface area of the ellipsoid, but do not evaluate the integral. 

## 34. Hyperboloid of one sheet

a. Find a parametrization for the hyperboloid of one sheet $x^{2} + y^{2} - z^{2} = 1$ in terms of the angle $\theta$ associated with the circle $x^{2} + y^{2} = r^{2}$ and the hyperbolic parameter u associated with the hyperbolic function $r^{2} - z^{2} = 1$ .
(Hint: $\cosh^{2}u - \sinh^{2}u = 1$ .) 

b. Generalize the result in part (a) to the hyperboloid 

$$
\left(x ^ {2} / a ^ {2}\right) + \left(y ^ {2} / b ^ {2}\right) - \left(z ^ {2} / c ^ {2}\right) = 1.
$$

35. (Continuation of Exercise 34.) Find a Cartesian equation for the plane tangent to the hyperboloid $x^{2} + y^{2} - z^{2} = 25$ at the point $(x_0, y_0, 0)$ , where $x_0^2 + y_0^2 = 25$ . 

36. Hyperboloid of two sheets Find a parametrization of the hyperboloid of two sheets $(z^2 / c^2) - (x^2 / a^2) - (y^2 / b^2) = 1$ . 

## Surface Area for Implicit and Explicit Forms

37. Find the area of the surface cut from the paraboloid $x^{2} + y^{2} - z = 0$ by the plane $z = 2$ . 

38. Find the area of the band cut from the paraboloid $x^{2} + y^{2} - z = 0$ by the planes z = 2 and z = 6. 

39. Find the area of the region cut from the plane $x + 2y + 2z = 5$ by the cylinder whose walls are $x = y^2$ and $x = 2 - y^2$ . 

40. Find the area of the portion of the surface $x^{2} - 2z = 0$ that lies above the triangle bounded by the lines $x = \sqrt{3}$ , y = 0, and y = x in the xy-plane. 

41. Find the area of the surface $x^{2}-2y-2z=0$ that lies above the triangle bounded by the lines x=2, y=0, and y=3x in the xy-plane. 

42. Find the area of the cap cut from the sphere $x^{2} + y^{2} + z^{2} = 2$ by the cone $z = \sqrt{x^{2} + y^{2}}$ . 

43. Find the area of the ellipse cut from the plane $z = cx$ ( $c$ a constant) by the cylinder $x^2 + y^2 = 1$ . 

44. Find the area of the upper portion of the cylinder $x^{2} + z^{2} = 1$ that lies between the planes $x = \pm 1/2$ and $y = \pm 1/2$ . 

45. Find the area of the portion of the paraboloid $x = 4 - y^2 - z^2$ that lies above the ring $1 \leq y^2 + z^2 \leq 4$ in the yz-plane. 

46. Find the area of the surface cut from the paraboloid $x^{2} + y + z^{2} = 2$ by the plane y = 0. 

47. Find the area of the surface $x^{2}-2\ln x+\sqrt{15}y-z=0$ above the square R: $1 \leq x \leq 2, 0 \leq y \leq 1$ , in the xy-plane. 

48. Find the area of the surface $2x^{3/2} + 2y^{3/2} - 3z = 0$ above the square R: $0 \leq x \leq 1$ , $0 \leq y \leq 1$ , in the xy-plane. 

Find the area of the surfaces in Exercises 49–54. 

49. The surface cut from the bottom of the paraboloid $z = x^{2} + y^{2}$ by the plane $z = 3$ 

50. The surface cut from the “nose” of the paraboloid $x = 1 - y^{2} - z^{2}$ by the yz-plane 

51. The portion of the cone $z = \sqrt{x^{2} + y^{2}}$ that lies over the region between the circle $x^{2} + y^{2} = 1$ and the ellipse $9x^{2} + 4y^{2} = 36$ in the xy-plane. (Hint: A formula from geometry states that the area inside the ellipse $x^{2}/a^{2} + y^{2}/b^{2} = 1$ is $\pi ab$ .) 

52. The triangle cut from the plane $2x + 6y + 3z = 6$ by the bounding planes of the first octant. Calculate the area three ways, using different explicit forms. 

53. The surface in the first octant cut from the cylinder $y = (2/3)z^{3/2}$ by the planes $x = 1$ and $y = 16/3$ 

54. The portion of the plane $y + z = 4$ that lies above the region cut from the first quadrant of the xz-plane by the parabola $x = 4 - z^{2}$ 

55. Use the parametrization 

$$
\mathbf {r} (x, z) = x \mathbf {i} + f (x, z) \mathbf {j} + z \mathbf {k}
$$

and Equation (5) to derive a formula for $d\sigma$ associated with the explicit form $y = f(x,z)$ . 

56. Let S be the surface obtained by rotating the smooth curve $y = f(x)$ , $a \leq x \leq b$ , about the x-axis, where $f(x) \geq 0$ . 

a. Show that the vector function 

$$
\mathbf {r} (x, \theta) = x \mathbf {i} + f (x) \cos \theta \mathbf {j} + f (x) \sin \theta \mathbf {k}
$$

is a parametrization of S, where $\theta$ is the angle of rotation around the x-axis (see the accompanying figure). 

![[377d2262c51d83f5f13059a6c37a5e2105ceee1b68958b8c197f8238af0711d7.jpg|image]]


b. Use Equation (4) to show that the surface area of this surface of revolution is given by 

$$
A = \int_ {a} ^ {b} 2 \pi f (x) \sqrt {1 + \left[ f ^ {\prime} (x) \right] ^ {2}} d x.
$$

## 15.6 Surface Integrals

To compute the mass of a surface, the flow of a liquid across a curved membrane, or the total electrical charge on a surface, we need to integrate a function over a curved surface in space. Such a surface integral is the two-dimensional extension of the line integral concept used to integrate over a one-dimensional curve. Like line integrals, surface integrals arise in two forms. The first occurs when we integrate a scalar function over a surface, such as integrating a mass density function defined on a surface to find its total mass. This form corresponds to line integrals of scalar functions defined in Section 15.1 and can be used to find the mass of a thin wire. The second form involves surface integrals of vector fields, analogous to the line integrals for vector fields defined in Section 15.2. An example occurs when we want to measure the net flow of a fluid across a surface submerged in the fluid (just as we previously defined the flux of F across a curve). In this section we investigate these ideas and their applications. 

## Surface Integrals

Suppose that the function $G(x, y, z)$ gives the mass density (mass per unit area) at each point on a surface S. Then we can calculate the total mass of S as an integral in the following way. 

![[4b2531f1b6568b5419ad3bb00699633396ae1fad63335896a8d2560ca66d40f9.jpg|image]]



FIGURE 15.49 The area of the patch $\Delta\sigma_{k}$ is approximated by the area of the tangent parallelogram determined by the vectors $\Delta u\mathbf{r}_{u}$ and $\Delta v\mathbf{r}_{v}$ . The point $(x_{k},y_{k},z_{k})$ lies on the surface patch, beneath the parallelogram shown here.


Assume, as in Section 15.5, that the surface $S$ is defined parametrically on a region $R$ in the uv-plane, 

$$
\mathbf {r} (u, v) = f (u, v) \mathbf {i} + g (u, v) \mathbf {j} + h (u, v) \mathbf {k}, \quad (u, v) \in R.
$$

In Figure 15.49, we see how a subdivision of R (considered as a rectangle for simplicity) divides the surface S into corresponding curved surface elements, or patches, of area 

$$
\Delta \sigma_ {u v} \approx | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v.
$$

As we did for the subdivisions when defining double integrals in Section 14.2, we number the surface element patches in some order with their areas given by $\Delta\sigma_{1}$ , $\Delta\sigma_{2}$ , $\ldots$ , $\Delta\sigma_{n}$ . To form a Riemann sum over S, we choose a point $(x_{k}, y_{k}, z_{k})$ in the kth patch, multiply the value of the function G at that point by the area $\Delta\sigma_{k}$ , and add together the products: 

$$
\sum_ {k = 1} ^ {n} G \left(x _ {k}, y _ {k}, z _ {k}\right) \Delta \sigma_ {k}.
$$

Depending on how we pick $(x_{k}, y_{k}, z_{k})$ in the kth patch, we may get different values for this Riemann sum. Then we take the limit as the number of surface patches increases, their areas shrink to zero, and both $\Delta u \rightarrow 0$ and $\Delta v \rightarrow 0$ . This limit, whenever it exists independent of all choices made, defines the surface integral of G over the surface S as 

$$
\iint_ {S} G (x, y, z) d \sigma = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} G \left(x _ {k}, y _ {k}, z _ {k}\right) \Delta \sigma_ {k}.\tag{1}
$$

Notice the analogy with the definition of the double integral (Section 14.2) and with the line integral (Section 15.1). If $S$ is a piecewise smooth surface, and $G$ is continuous over $S$ , then the surface integral defined by Equation (1) can be shown to exist. 

The formula for evaluating the surface integral depends on the manner in which S is described—parametrically, implicitly, or explicitly—as discussed in Section 15.5. 

## Formulas for a Surface Integral of a Scalar Function

1. For a smooth surface S defined parametrically as 

$$
\mathbf {r} (u, v) = f (u, v) \mathbf {i} + g (u, v) \mathbf {j} + h (u, v) \mathbf {k}, (u, v) \in R,
$$

and a continuous function $G(x, y, z)$ defined on S, the surface integral of G over S is given by the double integral over R, 

$$
\iint_ {S} G (x, y, z) d \sigma = \iint_ {R} G (f (u, v), g (u, v), h (u, v)) | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v.\tag{2}
$$

2. For a surface S given implicitly by $F(x, y, z) = c$ , where F is a continuously differentiable function, with S lying above its closed and bounded shadow region R in the coordinate plane beneath it, the surface integral of the continuous function G over S is given by the double integral over R, 

$$
\iint_ {S} G (x, y, z) d \sigma = \iint_ {R} G (x, y, z) \frac {| \nabla F |}{| \nabla F \cdot \mathbf {p} |} d A,\tag{3}
$$

where p is a unit vector normal to R and $\nabla F \cdot p \neq 0$ . 

3. For a surface $S$ given explicitly as the graph of $z = f(x, y)$ , where $f$ is a continuously differentiable function over a region $R$ in the xy-plane, the surface integral of the continuous function $G$ over $S$ is given by the double integral over $R$ , 

$$
\iint_ {S} G (x, y, z) d \sigma = \iint_ {R} G (x, y, f (x, y)) \sqrt {f _ {x} ^ {2} + f _ {y} ^ {2} + 1} d x d y.\tag{4}
$$

The surface integral in Equation (1) takes on different meanings in different applications. If G has the constant value 1, the integral gives the area of S. If G gives the mass density of a thin shell of material modeled by S, the integral gives the mass of the shell. If G gives the charge density of a thin shell, the integral gives the total charge. 

**EXAMPLE 1** Integrate $G(x, y, z) = x^{2}$ over the cone $z = \sqrt{x^{2} + y^{2}}$ , $0 \leq z \leq 1$ . 

**Solution** Using Equation (2) and the calculations from Example 4 in Section 15.5, we have $|r_{r} \times r_{\theta}| = \sqrt{2}r$ and 

$$
\begin{array}{r l} \iint_ {S} x ^ {2} d \sigma & = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} (r ^ {2} \cos^ {2} \theta) (\sqrt {2} r) d r d \theta \\ & = \sqrt {2} \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} r ^ {3} \cos^ {2} \theta d r d \theta \\ & = \frac {\sqrt {2}}{4} \int_ {0} ^ {2 \pi} \cos^ {2} \theta d \theta = \frac {\sqrt {2}}{4} \left[ \frac {\theta}{2} + \frac {1}{4} \sin 2 \theta \right] _ {0} ^ {2 \pi} = \frac {\pi \sqrt {2}}{4}. \end{array}
$$

Surface integrals behave like other double integrals, the integral of the sum of two functions being the sum of their integrals and so on. The domain Additivity Property takes the form 

$$
\iint_ {S} G d \sigma = \iint_ {S _ {1}} G d \sigma + \iint_ {S _ {2}} G d \sigma + \dots + \iint_ {S _ {n}} G d \sigma .
$$

When S is partitioned by smooth curves into a finite number of smooth patches with non-overlapping interiors (i.e., if S is piecewise smooth), then the integral over S is the sum of the integrals over the patches. Thus, the integral of a function over the surface of a cube is the sum of the integrals over the faces of the cube. We integrate over a “turtle shell” of welded plates by integrating over one plate at a time and adding the results. 

**EXAMPLE 2** Integrate $G(x, y, z) = xyz$ over the surface of the cube cut from the first octant by the planes x = 1, y = 1, and z = 1 (Figure 15.50). 

![[4ff8db3c2095ab5a0528abec4c3d475ba7937d1198b981abc0f7cee1b52ccc06.jpg|image]]



FIGURE 15.50 The cube in Example 2.


**Solution** We integrate xyz over each of the six sides and add the results. Since xyz = 0 on the sides that lie in the coordinate planes, the integral over the surface of the cube reduces to 

$$
\iint_{\substack{\text{Cube}\\ \text{surface}}}xyz  d\sigma   =   \iint_{\text{Side} A}xyz  d\sigma   +   \iint_{\text{Side} B}xyz  d\sigma   +   \iint_{\text{Side} C}xyz  d\sigma .
$$

Side A is the surface $f(x,y,z)=z=1$ over the square region $R_{xy}:0\leq x\leq1$ , $0\leq y\leq1$ , in the xy-plane. For this surface and region, 

$$
\mathbf {p} = \mathbf {k}, \quad \nabla f = \mathbf {k}, \quad | \nabla f | = 1, \quad | \nabla f \cdot \mathbf {p} | = | \mathbf {k} \cdot \mathbf {k} | = 1
$$

$$
d \sigma = \frac {| \nabla f |}{| \nabla f \cdot \mathbf {p} |} d A = \frac {1}{1} d x d y = d x d y \tag {Eq.(3)}
$$

$$
x y z = x y (1) = x y
$$

and 

$$
\iint_ {\text { Side } A} x y z d \sigma = \iint_ {R _ {x y}} x y d x d y = \int_ {0} ^ {1} \int_ {0} ^ {1} x y d x d y = \int_ {0} ^ {1} \frac {y}{2} d y = \frac {1}{4}.
$$

Symmetry tells us that the integrals of xyz over sides B and C are also 1/4. Hence, 

$$
\iint_{\substack{\text{Cube}\\ \text{surface}}}xyz d\sigma = \frac{1}{4} +\frac{1}{4} +\frac{1}{4} = \frac{3}{4}.
$$

**EXAMPLE 3** Integrate $G(x,y,z)=\sqrt{1-x^{2}-y^{2}}$ over the “football” surface S formed by rotating the curve $x=\cos z, y=0, -\pi/2 \leq z \leq \pi/2$ , around the z-axis. 

**Solution** The surface is displayed in Figure 15.46, and in Example 6 of Section 15.5 we found the parametrization 

$$
x = \cos u \cos v, \quad y = \cos u \sin v, \quad z = u, \quad - \frac {\pi}{2} \leq u \leq \frac {\pi}{2} \text { and } 0 \leq v \leq 2 \pi ,
$$

where v represents the angle of rotation from the xz-plane about the z-axis. Substituting this parametrization into the expression for G gives 

$$
\sqrt {1 - x ^ {2} - y ^ {2}} = \sqrt {1 - (\cos^ {2} u) (\cos^ {2} v + \sin^ {2} v)} = \sqrt {1 - \cos^ {2} u} = | \sin u |.
$$

The surface area differential for the parametrization was found to be (Example 6, Section 15.5) 

$$
d \sigma = \cos u \sqrt {1 + \sin^ {2} u} d u d v.
$$

These calculations give the surface integral 

$$
\begin{array}{l} \iint_ {S} \sqrt {1 - x ^ {2} - y ^ {2}} d \sigma = \int_ {0} ^ {2 \pi} \int_ {- \pi / 2} ^ {\pi / 2} | \sin u | \cos u \sqrt {1 + \sin^ {2} u} d u d v \quad \begin{array}{l} | \sin u | = \sin (- u) \\ \text { for } - \pi / 2 <   u <   0 \end{array} \\ = 2 \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 2} \sin u \cos u \sqrt {1 + \sin^ {2} u} d u d v \\ = \int_ {0} ^ {2 \pi} \int_ {1} ^ {2} \sqrt {w} d w d v \quad \begin{array}{l} w = 1 + \sin^ {2} u, \\ d w = 2 \sin u \cos u d u \\ \text { When } u = 0, w = 1. \\ \text { When } u = \pi / 2, w = 2. \end{array} \\ = 2 \pi \cdot \frac {2}{3} w ^ {3 / 2} ] _ {1} ^ {2} = \frac {4 \pi}{3} (2 \sqrt {2} - 1). \end{array}
$$

**EXAMPLE 4** Evaluate $\iint_{S} \sqrt{x(1 + 2z)} d\sigma$ on the portion of the cylinder $z = y^{2}/2$ over the triangular region $R: x \geq 0, y \geq 0, x + y \leq 1$ , in the $xy$ -plane (Figure 15.51). 


FIGURE 15.51 The surface S in Example 4.


![[c433371f5a794990f05023c965386c10e9a12fee63a8a53ed3bbdebcdf22f073.jpg|image]]


**Solution** The function G on the surface S is given by 

$$
G (x, y, z) = \sqrt {x (1 + 2 z)} = \sqrt {x} \sqrt {1 + y ^ {2}}.
$$

With $z = f(x, y) = y^2 / 2$ , we use Equation (4) to evaluate the surface integral: 

$$
d \sigma = \sqrt {f _ {x} ^ {2} + f _ {y} ^ {2} + 1} d x d y = \sqrt {0 + y ^ {2} + 1} d x d y
$$

and 

$$
\begin{array}{l l} \iint_ {S} G (x, y, z) d \sigma = \iint_ {R} \left(\sqrt {x} \sqrt {1 + y ^ {2}}\right) \sqrt {1 + y ^ {2}} d x d y \\ = \int_ {0} ^ {1} \int_ {0} ^ {1 - x} \sqrt {x} (1 + y ^ {2}) d y d x \\ = \int_ {0} ^ {1} \sqrt {x} \left[ (1 - x) + \frac {1}{3} (1 - x) ^ {3} \right] d x & \text {   Integrate   and   evaluate.   } \\ = \int_ {0} ^ {1} \left(\frac {4}{3} x ^ {1 / 2} - 2 x ^ {3 / 2} + x ^ {5 / 2} - \frac {1}{3} x ^ {7 / 2}\right) d x & \text {   Routine   algebra   } \\ = \left[ \frac {8}{9} x ^ {3 / 2} - \frac {4}{5} x ^ {5 / 2} + \frac {2}{7} x ^ {7 / 2} - \frac {2}{2 7} x ^ {9 / 2} \right] _ {0} ^ {1} \\ = \frac {8}{9} - \frac {4}{5} + \frac {2}{7} - \frac {2}{2 7} = \frac {2 8 4}{9 4 5} \approx 0. 3 0. \end{array}
$$

![[2b490d2777732db94c1f5a126e48548204d6496b110f0180aa9903708f5a7098.jpg|image]]


![[a2cbaaefc61d037029cb0ba48cceb46d1927cf954ff0920f79a619cf249973cd.jpg|image]]



(a)



(b)



FIGURE 15.52 (a) An outward-pointing vector field and (b) an inward-pointing vector field give the two possible orientations of a sphere.


![[25f8a07d755ee160ff3ddc7fc44a69e3f067cfd5218a4a9b56f2e4e8db53e31e.jpg|image]]



FIGURE 15.53 To make a Möbius band, take a rectangular strip of paper abcd, give the end bc a single twist, and paste the ends of the strip together to match a with c and b with d. The Möbius band is a nonorientable, or one-sided, surface.


## Orientation of a Surface

A curve C with a parametrization $\mathbf{r}(t)$ has a natural orientation, or direction, that comes from the direction of increasing t. The unit tangent vector T along C points in this forward direction at each point on the curve. There are two possible orientations for a curve, corresponding to whether we follow the direction of the tangent vector T at each point, or the direction of -T. 

To specify an orientation on a surface in space S, we do something similar, but this time we specify a normal vector at each point on the surface. A parametrization of a surface $\mathbf{r}(u,v)$ gives a vector $r_{u} \times r_{v}$ that is normal to the surface, and so gives an orientation wherever the parametrization applies. A second choice of orientation is found by taking $-(\mathbf{r}_{u} \times \mathbf{r}_{v})$ , giving a vector that points to the opposite side of the surface at each point. In essence, an orientation is a way of consistently choosing one of the two sides of a surface. Not all surfaces have orientations, but a surface that does have one also has a second, opposite orientation. 

Each point on the sphere in Figure 15.52 has one normal vector pointing inward, toward the center of the sphere, and another opposite normal vector pointing outward. We specify one of two possible orientations for the sphere by choosing either the inward vector at each point, or alternatively the outward vector at each point. 

When we can choose a continuous field of unit normal vectors $\mathbf{n}$ on a smooth surface $S$ , we say that $S$ is orientable (or two-sided). Spheres and other smooth surfaces that are the boundaries of solid regions in space are orientable since we can choose an outward-pointing unit vector $\mathbf{n}$ at each point to specify an orientation. 

A surface together with its normal field n, or, equivalently, a surface with a consistent choice of sides, is called an oriented surface. The vector n at any point gives the positive direction or positively oriented side at that point (Figure 15.52). Not all surfaces can be oriented. The Möbius band in Figure 15.53 is an example of a surface that is not orientable. No matter how you try to construct a continuous unit normal vector field (shown as the shafts of thumbtacks in the figure), starting at one point and moving the vector continuously around the surface in the manner shown will return it to the starting point, but pointing in the opposite direction. No choice of a vectors can give a continuous normal vector field on the Möbius band, so the Möbius band is not orientable. 

## Surface Integrals of Vector Fields

In Section 15.2 we defined the line integral of a vector field along a path $C$ as $\int_{C} \mathbf{F} \cdot \mathbf{T} ds$ , where $\mathbf{T}$ is the unit tangent vector to the path pointing in the forward-oriented direction. We have a similar definition for surface integrals. 

> ***DEFINITION*** Let F be a vector field in three-dimensional space with continuous components defined over a smooth surface S having a chosen field of normal unit vectors n orienting S. Then the surface integral of F over S is 
>
> $$
> \iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma .\tag{5}
> $$
>
This integral is also called the flux of the vector field F across S. 

If F is the velocity field of a three-dimensional fluid flow, then the flux of F across S is the net rate at which fluid is crossing S per unit time in the chosen positive direction n defined by the orientation of S. Fluid flows are discussed in more detail in Section 15.7. 

![[1dde29e5c623d2f3319196aeeef5d3c20f2a0668d5e8a7460f17de46944be824.jpg|image]]



FIGURE 15.54 Finding the flux through the surface of a parabolic cylinder (Example 5).


## Computing a Surface Integral for a Parametrized Surface

**EXAMPLE 5** Find the flux of $\mathbf{F} = yz\mathbf{i} + x\mathbf{j} - z^2\mathbf{k}$ through the parabolic cylinder $y = x^{2}, 0 \leq x \leq 1, 0 \leq z \leq 4$ , in the direction $\mathbf{n}$ indicated in Figure 15.54. 

Flux Across a Parametrized Surface 

Flux = ±∫∫_R F · (r_u × r_v) du dv 

**Solution** On the surface we have x = x, $y = x^{2}$ , and z = z, so we have the parametrization $\mathbf{r}(x, z) = x\mathbf{i} + x^{2}\mathbf{j} + z\mathbf{k}, 0 \leq x \leq 1, 0 \leq z \leq 4$ . The cross product of tangent vectors, 

$$
\mathbf {r} _ {x} \times \mathbf {r} _ {z} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 1 & 2 x & 0 \\ 0 & 0 & 1 \end{array} \right| = 2 x \mathbf {i} - \mathbf {j}, \quad \begin{array}{l} \mathbf {r} _ {x} = \mathbf {i} + 2 x \mathbf {j} \\ \mathbf {r} _ {z} = \mathbf {k} \end{array}
$$

can be used to find unit normal vectors to the surface, 

We can equally well choose the unit normal vectors $-\mathbf{n}$ that point in the opposite direction. The first choice is shown in Figure 15.54. 

$$
\mathbf {n} = \frac {\mathbf {r} _ {x} \times \mathbf {r} _ {z}}{\left| \mathbf {r} _ {x} \times \mathbf {r} _ {z} \right|} = \frac {2 x \mathbf {i} - \mathbf {j}}{\sqrt {4 x ^ {2} + 1}}.
$$

On the surface we have $y = x^{2}$ , so the vector field there is 

Thus, 

$$
\mathbf {F} = y z \mathbf {i} + x \mathbf {j} - z ^ {2} \mathbf {k} = x ^ {2} z \mathbf {i} + x \mathbf {j} - z ^ {2} \mathbf {k}.
$$

$$
\mathbf {F} \cdot \mathbf {n} = \frac {1}{\sqrt {4 x ^ {2} + 1}} \left((x ^ {2} z) (2 x) + (x) (- 1) + (- z ^ {2}) (0)\right) = \frac {2 x ^ {3} z - x}{\sqrt {4 x ^ {2} + 1}}.
$$

The flux of F outward through the surface is 

$$
\begin{array}{l} \iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \int_ {0} ^ {4} \int_ {0} ^ {1} \frac {2 x ^ {3} z - x}{\sqrt {4 x ^ {2} + 1}} | \mathbf {r} _ {x} \times \mathbf {r} _ {z} | d x d z \quad d \sigma = | \mathbf {r} _ {x} \times \mathbf {r} _ {z} | d x d z \\ = \int_ {0} ^ {4} \int_ {0} ^ {1} \frac {2 x ^ {3} z - x}{\sqrt {4 x ^ {2} + 1}} \sqrt {4 x ^ {2} + 1} d x d z \\ = \int_ {0} ^ {4} \int_ {0} ^ {1} (2 x ^ {3} z - x) d x d z = \int_ {0} ^ {4} \left[ \frac {1}{2} x ^ {4} z - \frac {1}{2} x ^ {2} \right] _ {x = 0} ^ {x = 1} d z \\ = \int_ {0} ^ {4} \left. \frac {1}{2} (z - 1) d z = \frac {1}{4} (z - 1) ^ {2} \right] _ {0} ^ {4} \\ = \frac {1}{4} (9) - \frac {1}{4} (1) = 2. \end{array}
$$

There is a simple formula for the flux of F across a parametrized surface $\mathbf{r}(u,v)$ . Since 

$$
d \sigma = | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v
$$

and 

$$
\mathbf {n} = \frac {\mathbf {r} _ {u} \times \mathbf {r} _ {v}}{| \mathbf {r} _ {u} \times \mathbf {r} _ {v} |},
$$

it follows that 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iint_ {R} \mathbf {F} \cdot \frac {\mathbf {r} _ {u} \times \mathbf {r} _ {v}}{| \mathbf {r} _ {u} \times \mathbf {r} _ {v} |} | \mathbf {r} _ {u} \times \mathbf {r} _ {v} | d u d v = \iint_ {R} \mathbf {F} \cdot (\mathbf {r} _ {u} \times \mathbf {r} _ {v}) d u d v.
$$

The other choice of unit normal vector, -n, would add a negative sign to this formula. The choice of n or -n depends on the direction in which we choose to measure the flux across the surface. 

This integral for flux simplifies the computation in Example 5 by eliminating the need to compute the canceled factor $|\mathbf{r}_u \times \mathbf{r}_v|$ . Since 

$$
\begin{array}{c} \mathbf {F} \cdot (\mathbf {r} _ {x} \times \mathbf {r} _ {z}) = (y z \mathbf {i} + x \mathbf {j} - z ^ {2} \mathbf {k} = x ^ {2} z \mathbf {i} + x \mathbf {j} - z ^ {2} \mathbf {k}) \cdot (2 x \mathbf {i} - \mathbf {j}) \\ = (x ^ {2} z) (2 x) + (x) (- 1) = 2 x ^ {3} z - x, \end{array}
$$

![[58b9564377ba44f022dd5e40f21b6bc2936863d2d1859a4a12a9be7cb08dff96.jpg|image]]



FIGURE 15.55 Calculating the flux of a vector field through the surface S. The area of the shadow region $R_{xy}$ is 2 (Example 6).


we obtain directly 

$$
\text { Flux } = \iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \int_ {0} ^ {4} \int_ {0} ^ {1} (2 x ^ {3} z - x) d x d z = 2
$$

in Example 5. 

## Computing a Surface Integral for a Level Surface

If S is part of a level surface $g(x, y, z) = c$ , then n may be taken to be one of the two fields 

$$
\mathbf {n} = \pm \frac {\nabla g}{| \nabla g |},\tag{6}
$$

depending on which one gives the preferred direction. The corresponding flux is 

$$
\begin{array}{l} \text { Flux } = \iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma \\ = \iint_ {R} \left(\mathbf {F} \cdot \frac {\pm \nabla g}{| \nabla g |}\right) \frac {| \nabla g |}{| \nabla g \cdot \mathbf {p} |} d A \\ = \iint_ {R} \mathbf {F} \cdot \frac {\pm \nabla g}{| \nabla g \cdot \mathbf {p} |} d A. \end{array} \tag{7}
$$

**EXAMPLE 6** Find the flux of $\mathbf{F} = yz\mathbf{j} + z^2\mathbf{k}$ through the surface $S$ cut from the cylinder $y^{2} + z^{2} = 1, z \geq 0$ , by the planes $x = 0$ and $x = 1$ , in the direction away from the $x$ -axis. 

**Solution** The normal field on S (Figure 15.55) in the specified direction may be calculated from the gradient of $g(x, y, z) = y^{2} + z^{2}$ to be 

$$
\mathbf {n} = + \frac {\nabla g}{| \nabla g |} = \frac {2 y \mathbf {j} + 2 z \mathbf {k}}{\sqrt {4 y ^ {2} + 4 z ^ {2}}} = \frac {2 y \mathbf {j} + 2 z \mathbf {k}}{2 \sqrt {1}} = y \mathbf {j} + z \mathbf {k}.
$$

With $\mathbf{p} = \mathbf{k}$ , we also have 

$$
d \sigma = \frac {| \nabla g |}{| \nabla g \cdot \mathbf {k} |} d A = \frac {2}{| 2 z |} d A = \frac {1}{z} d A. \tag {Eq.(3)}
$$

We can drop the absolute value bars because $z \geq 0$ on S. 

The value of $F \cdot n$ on the surface is 

$$
\begin{array}{r l} \mathbf {F} \cdot \mathbf {n} & = (y z \mathbf {j} + z ^ {2} \mathbf {k}) \cdot (y \mathbf {j} + z \mathbf {k}) \\ & = y ^ {2} z + z ^ {3} = z (y ^ {2} + z ^ {2}) \\ & = z. \end{array} \quad y ^ {2} + z ^ {2} = 1 \text {   on   } S.
$$

The surface projects onto the shadow region $R_{xy}$ , which is the rectangle in the xy-plane shown in Figure 15.55. Therefore, the flux of F through S in the direction away from the x-axis is 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iint_ {R _ {x y}} (z) \left(\frac {1}{z} d A\right) = \iint_ {R _ {x y}} d A = \operatorname{area} \left(R _ {x y}\right) = 2.
$$

## Moments and Masses of Thin Shells

Thin shells of material like bowls, metal drums, and domes are modeled with surfaces. Their moments and masses are calculated with the formulas in Table 15.3. The derivations are similar to those in Section 6.6. The formulas resemble those for line integrals in Table 15.1, Section 15.1. 

TABLE 15.3 Mass and moment formulas for very thin shells 

Mass: $M = \iint_{S} \delta d\sigma$ $\delta = \delta(x, y, z) = \text{density at } (x, y, z) \text{ is mass per unit area.}$ 

First moments about the coordinate planes: 

$$
M _ {y z} = \iint_ {S} x \delta d \sigma , \quad M _ {x z} = \iint_ {S} y \delta d \sigma , \quad M _ {x y} = \iint_ {S} z \delta d \sigma
$$

Coordinates of center of mass: 

$$
\overline {{x}} = M _ {y z} / M, \quad \overline {{y}} = M _ {x z} / M, \quad \overline {{z}} = M _ {x y} / M
$$

Moments of inertia about coordinate axes: 

$$
\begin{array}{l} I _ {x} = \iint_ {S} (y ^ {2} + z ^ {2}) \delta d \sigma , \quad I _ {y} = \iint_ {S} (x ^ {2} + z ^ {2}) \delta d \sigma , \quad I _ {z} = \iint_ {S} (x ^ {2} + y ^ {2}) \delta d \sigma , \\ I _ {L} = \iint_ {S} r ^ {2} \delta d \sigma \qquad r (x, y, z) = \text { distance   from   point } (x, y, z) \text { to   line } L \end{array}
$$


FIGURE 15.56 The center of mass of a thin hemispherical shell of constant density lies on the axis of symmetry halfway from the base to the top (Example 7).


![[f989133a0e9b38ab41083c83f20d6d7d244ebd7be4f12a313fe5f9df841a2a63.jpg|image]]


**EXAMPLE 7** Find the center of mass of a thin hemispherical shell of radius a and constant density $\delta$ . 

**Solution** We model the shell with the hemisphere 

$$
f (x, y, z) = x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2}, \quad z \geq 0
$$

(Figure 15.56). The symmetry of the surface about the $z$ -axis tells us that $\overline{x} = \overline{y} = 0$ . It remains only to find $\overline{z}$ from the formula $\overline{z} = M_{xy} / M$ . 

The mass of the shell is 

$$
M = \iint_ {S} \delta d \sigma = \delta \iint_ {S} d \sigma = (\delta) (\text { area   of } S) = 2 \pi a ^ {2} \delta . \quad \delta = \text { constant }
$$

To evaluate the integral for $M_{xy}$ , we take $\mathbf{p} = \mathbf{k}$ and calculate 

$$
| \nabla f | = | 2 x \mathbf {i} + 2 y \mathbf {j} + 2 z \mathbf {k} | = 2 \sqrt {x ^ {2} + y ^ {2} + z ^ {2}} = 2 a
$$

$$
| \nabla f \cdot \mathbf {p} | = | \nabla f \cdot \mathbf {k} | = | 2 z | = 2 z
$$

$$
d \sigma = \frac {| \nabla f |}{| \nabla f \cdot \mathbf {p} |} d A = \frac {a}{z} d A. \quad \text { Eq.   (3) }
$$

Then 

$$
M _ {x y} = \iint_ {S} z \delta d \sigma = \delta \iint_ {R} z \frac {a}{z} d A = \delta a \iint_ {R} d A = \delta a (\pi a ^ {2}) = \delta \pi a ^ {3}
$$

$$
\overline {{z}} = \frac {M _ {x y}}{M} = \frac {\pi a ^ {3} \delta}{2 \pi a ^ {2} \delta} = \frac {a}{2}.
$$

The shell's center of mass is the point $(0, 0, a/2)$ . 

![[fa6b08a71be51eae7cd8b9e5aeb41f4f2d2e5da113d86b97b4e36895e6d7a6c4.jpg|image]]


and 


FIGURE 15.57 The cone frustum formed when the cone $z = \sqrt{x^2 + y^2}$ is cut by the planes $z = 1$ and $z = 2$ (Example 8).


**EXAMPLE 8** Find the center of mass of a thin shell of density $\delta = 1/z^{2}$ cut from the cone $z = \sqrt{x^{2} + y^{2}}$ by the planes $z = 1$ and $z = 2$ (Figure 15.57). 

**Solution** Since the surface and the density function $\delta$ are symmetric about the z-axis, we have $\overline{x} = \overline{y} = 0$ . We now proceed to find $\overline{z} = M_{xy}/M$ . Working as in Example 4 of Section 15.5, we have 

Therefore, 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r \mathbf {k}, \quad 1 \leq r \leq 2, \quad 0 \leq \theta \leq 2 \pi ,
$$

$$
\left| \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} \right| = \sqrt {2} r.
$$

$$
\begin{array}{l} M = \iint_ {S} \delta d \sigma = \int_ {0} ^ {2 \pi} \int_ {1} ^ {2} \frac {1}{r ^ {2}} \sqrt {2} r d r d \theta \\ = \sqrt {2} \int_ {0} ^ {2 \pi} \left[ \ln r \right] _ {1} ^ {2} d \theta = \sqrt {2} \int_ {\mathbf {0}} ^ {2 \pi} \ln 2 d \theta \\ = 2 \pi \sqrt {2} \ln 2, \end{array}
$$

$$
\begin{array}{l} M _ {x y} = \iint_ {S} \delta z d \sigma = \int_ {0} ^ {2 \pi} \int_ {1} ^ {2} \frac {1}{r ^ {2}} r \sqrt {2} r d r d \theta \\ = \sqrt {2} \int_ {0} ^ {2 \pi} \int_ {1} ^ {2} d r d \theta \\ = \sqrt {2} \int_ {0} ^ {2 \pi} d \theta = 2 \pi \sqrt {2}, \\ \overline {{z}} = \frac {M _ {x y}}{M} = \frac {2 \pi \sqrt {2}}{2 \pi \sqrt {2} \ln 2} = \frac {1}{\ln 2}. \end{array}
$$

The shell's center of mass is the point $(0,0,1 / \ln 2)$ . 

## EXERCISES 15.6

Surface Integrals of Scalar Functions 

In Exercises 1–8, integrate the given function over the given surface. 

1. Parabolic cylinder $G(x, y, z) = x$ , over the parabolic cylinder $y = x^{2}$ , $0 \leq x \leq 2$ , $0 \leq z \leq 3$ 

2. Circular cylinder $G(x,y,z) = z$ , over the cylindrical surface $y^{2} + z^{2} = 4, z \geq 0, 1 \leq x \leq 4$ 

3. Sphere $G(x, y, z) = x^2$ , over the unit sphere $x^2 + y^2 + z^2 = 1$ 

4. Hemisphere $G(x, y, z) = z^2$ , over the hemisphere $x^2 + y^2 + z^2 = a^2$ , $z \geq 0$ 

5. Portion of plane $F(x, y, z) = z$ , over the portion of the plane $x + y + z = 4$ that lies above the square $0 \leq x \leq 1$ , $0 \leq y \leq 1$ , in the xy-plane 

6. Cone $F(x,y,z)=z-x$ , over the cone $z=\sqrt{x^{2}+y^{2}}$ , $0\leq z\leq1$ 

7. Parabolic dome $H(x, y, z) = x^2 \sqrt{5 - 4z}$ , over the parabolic dome $z = 1 - x^2 - y^2$ , $z \geq 0$ 

8. Spherical cap $H(x, y, z) = yz$ , over the part of the sphere $x^2 + y^2 + z^2 = 4$ that lies above the cone $z = \sqrt{x^2 + y^2}$ 

9. Integrate $G(x, y, z) = x + y + z$ over the surface of the cube cut from the first octant by the planes $x = a$ , $y = a$ , $z = a$ . 

10. Integrate $G(x,y,z)=y+z$ over the surface of the wedge in the first octant bounded by the coordinate planes and the planes x=2 and $y+z=1$ . 

11. Integrate $G(x, y, z) = xyz$ over the surface of the rectangular solid cut from the first octant by the planes x = a, y = b, and z = c. 

12. Integrate $G(x, y, z) = xyz$ over the surface of the rectangular solid bounded by the planes $x = \pm a$ , $y = \pm b$ , and $z = \pm c$ . 

13. Integrate $G(x,y,z)=x+y+z$ over the portion of the plane $2x+2y+z=2$ that lies in the first octant. 

14. Integrate $G(x, y, z) = x\sqrt{y^2 + 4}$ over the surface cut from the parabolic cylinder $y^2 + 4z = 16$ by the planes $x = 0, x = 1$ , and $z = 0$ . 

15. Integrate $G(x,y,z)=z-x$ over the portion of the graph of $z=x+y^{2}$ above the triangle in the xy-plane having vertices $(0,0,0)$ , $(1,1,0)$ , and $(0,1,0)$ . (See accompanying figure.) 

![[6dd230fe3f2ad305fccdd16e3db21bd7cbdc7da036e70a1ad5b7a0f1ac7e709d.jpg|image]]


16. Integrate $G(x, y, z) = x$ over the surface given by 

$$
z = x ^ {2} + y \quad \text { for } \quad 0 \leq x \leq 1, - 1 \leq y \leq 1.
$$

17. Integrate $G(x, y, z) = xyz$ over the triangular surface with vertices $(1, 0, 0)$ , $(0, 2, 0)$ , and $(0, 1, 1)$ . 

![[114bfe5231628dd5c5144322e8c725b40694ff87dba5d4fb2dc99ecf17e021b8.jpg|image]]


18. Integrate $G(x, y, z) = x - y - z$ over the portion of the plane $x + y = 1$ in the first octant between $z = 0$ and $z = 1$ (see the figure below). 

![[52661bc271d6728174091775414fcb44e8dba8f191f11cf428429b02748ca426.jpg|image]]


Finding Flux or Surface Integrals of Vector Fields 

In Exercises 19–28, use a parametrization to find the flux $\iint_{S} F \cdot n \, d\sigma$ across the surface in the specified direction. 

19. Parabolic cylinder $F = z^{2}i + xj - 3zk$ through the surface cut from the parabolic cylinder $z = 4 - y^{2}$ by the planes x = 0, x = 1, and z = 0 in the direction away from the x-axis 

20. Parabolic cylinder $F = x^{2}j - xzk$ through the surface cut from the parabolic cylinder $y = x^{2}, -1 \leq x \leq 1$ , by the planes z = 0 and z = 2 in the direction away from the yz-plane 

21. Sphere $\mathbf{F} = z\mathbf{k}$ across the portion of the sphere $x^{2} + y^{2} + z^{2} = a^{2}$ in the first octant in the direction away from the origin 

22. Sphere $F = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ across the sphere $x^{2} + y^{2} + z^{2} = a^{2}$ in the direction away from the origin 

23. Plane $\mathbf{F} = 2xy\mathbf{i} + 2yz\mathbf{j} + 2xz\mathbf{k}$ upward across the portion of the plane $x + y + z = 2a$ that lies above the square $0 \leq x \leq a$ , $0 \leq y \leq a$ , in the xy-plane 

24. Cylinder $\mathbf{F} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ through the portion of the cylinder $x^{2} + y^{2} = 1$ cut by the planes $z = 0$ and $z = a$ in the direction away from the $z$ -axis 

25. Cone $F = xy\mathbf{i} - z\mathbf{k}$ through the cone $z = \sqrt{x^{2} + y^{2}}$ , $0 \leq z \leq 1$ , in the direction away from the z-axis 

26. Cone $F = y^{2}i + xzj - k$ through the cone $z = 2\sqrt{x^{2} + y^{2}}$ , $0 \leq z \leq 2$ , in the direction away from the z-axis 

27. Cone frustum $F = -xi - yj + z^{2}k$ through the portion of the cone $z = \sqrt{x^{2} + y^{2}}$ between the planes z = 1 and z = 2 in the direction away from the z-axis 

28. Paraboloid $F = 4xi + 4yj + 2k$ through the surface cut from the bottom of the paraboloid $z = x^{2} + y^{2}$ by the plane z = 1 in the direction away from the z-axis 

In Exercises 29 and 30, find the surface integral of the field F over the portion of the given surface in the specified direction. 

29. $\mathbf{F}(x,y,z) = -\mathbf{i} + 2\mathbf{j} + 3\mathbf{k}$ S: rectangular surface $z = 0$ , $0 \leq x \leq 2$ , $0 \leq y \leq 3$ , direction $\mathbf{k}$ 

30. $\mathbf{F}(x,y,z) = yx^{2}\mathbf{i} - 2\mathbf{j} + xz\mathbf{k}$ S: rectangular surface $y = 0, -1 \leq x \leq 2, 2 \leq z \leq 7,$ direction $-\mathbf{j}$ 

In Exercises 31–36, use Equation (7) to find the surface integral of the field F over the portion of the sphere $x^{2} + y^{2} + z^{2} = a^{2}$ in the first octant in the direction away from the origin. 

31. $\mathbf{F}(x,y,z) = z\mathbf{k}$ 

32. $\mathbf{F}(x,y,z) = -y\mathbf{i} + x\mathbf{j}$ 

33. $\mathbf{F}(x,y,z) = y\mathbf{i} - x\mathbf{j} + \mathbf{k}$ 

34. $\mathbf{F}(x,y,z) = zx\mathbf{i} + zy\mathbf{j} + z^2\mathbf{k}$ 

35. $\mathbf{F}(x,y,z) = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$ 

36. $\mathbf{F}(x,y,z) = \frac{x\mathbf{i} + y\mathbf{j} + z\mathbf{k}}{\sqrt{x^2 + y^2 + z^2}}$ 

37. Find the flux of the field $\mathbf{F}(x,y,z) = z^2\mathbf{i} + x\mathbf{j} - 3z\mathbf{k}$ through the surface cut from the parabolic cylinder $z = 4 - y^{2}$ by the planes $x = 0$ , $x = 1$ , and $z = 0$ in the direction away from the $x$ -axis. 

38. Find the flux of the field $\mathbf{F}(x,y,z)=4x\mathbf{i}+4y\mathbf{j}+2\mathbf{k}$ through the surface cut from the bottom of the paraboloid $z=x^{2}+y^{2}$ by the plane z=1 in the direction away from the z-axis. 

39. Let S be the portion of the cylinder $y = e^{x}$ in the first octant that projects parallel to the x-axis onto the rectangle $R_{yz}: 1 \leq y \leq 2, 0 \leq z \leq 1$ , in the yz-plane (see the accompanying figure). Let n be the unit vector normal to S that points away from the yz-plane. Find the flux of the field $\mathbf{F}(x, y, z) = -2\mathbf{i} + 2y\mathbf{j} + z\mathbf{k}$ across S in the direction of n. 

![[c1e7e33ca4cc7be67acd33adc7a902785aa5e81ba37f704a7f369ce53c1696b5.jpg|image]]


40. Let S be the portion of the cylinder $y = \ln x$ in the first octant whose projection parallel to the y-axis onto the xz-plane is the rectangle $R_{xz}: 1 \leq x \leq e, 0 \leq z \leq 1$ . Let n be the unit vector normal to S that points away from the xz-plane. Find the flux of $F = 2yj + zk$ through S in the direction of n. 

41. Find the outward flux of the field $F = 2xyi + 2yzj + 2xzk$ across the surface of the cube cut from the first octant by the planes x = a, y = a, and z = a. 

42. Find the outward flux of the field $F = xzi + yzj + k$ across the surface of the upper cap cut from the ball $x^{2} + y^{2} + z^{2} \leq 25$ by the plane z = 3. 

## Moments and Masses

43. Centroid Find the centroid of the portion of the sphere $x^{2} + y^{2} + z^{2} = a^{2}$ that lies in the first octant. 

44. Centroid Find the centroid of the surface cut from the cylinder $y^{2} + z^{2} = 9$ , $z \geq 0$ , by the planes x = 0 and x = 3 (resembles the surface in Example 6). 

45. Thin shell of constant density Find the center of mass and the moment of inertia about the z-axis of a thin shell of constant density $\delta$ cut from the cone $x^{2} + y^{2} - z^{2} = 0$ by the planes z = 1 and z = 2. 

## 15.7 Stokes' Theorem

46. Conical surface of constant density Find the moment of inertia about the z-axis of a thin shell of constant density $\delta$ cut from the cone $4x^{2} + 4y^{2} - z^{2} = 0$ , $z \geq 0$ , by the circular cylinder $x^{2} + y^{2} = 2x$ (see the accompanying figure). 

![[e75b1a5130cc0c559da7f7bf6cfcdb29502b69cd369b5b451c087b7a5d609539.jpg|image]]


47. Spherical shells Find the moment of inertia about a diameter of a thin spherical shell of radius a and constant density $\delta$ . (Work with a hemispherical shell and double the result.) 

48. Conical Surface Find the centroid of the lateral surface of a solid cone of base radius $a$ and height $h$ (cone surface minus the base). 

49. A surface S lies on the plane $2x + 3y + 6z = 12$ directly above the rectangle in the xy-plane with vertices $(0,0)$ , $(1,0)$ , $(0,2)$ , and $(1,2)$ . If the density at a point $(x,y,z)$ on S is given by $\delta(x,y,z) = 4xy + 6z \, \text{mg/cm}^2$ , find the total mass of S. 

50. A surface S lies on the paraboloid $z = \frac{1}{2}x^{2} + \frac{1}{2}y^{2}$ directly above the triangle in the xy-plane with vertices $(0,0)$ , $(2,0)$ , and $(2,4)$ . If the density at a point $(x,y,z)$ on S is given by $\delta(x,y,z) = 9xy\ g/cm^{2}$ , find the total mass of S. 

To calculate the counterclockwise circulation of a two-dimensional vector field $\mathbf{F} = M\mathbf{i} + N\mathbf{j}$ around a simple closed curve in the plane, Green's Theorem says we can compute the double integral over the region enclosed by the curve of the scalar quantity $(\partial N / \partial x - \partial M / \partial y)$ . This expression is the k-component of a curl vector field, and it measures the rate of rotation of $\mathbf{F}$ at each point in the region around an axis parallel to $\mathbf{k}$ . For a vector field in three-dimensional space, the rotation at each point is around an axis that is parallel to the curl vector at that point. When a closed curve $C$ in space is the boundary of an oriented surface, we will see that the circulation of $\mathbf{F}$ around $C$ is equal to the surface integral of the curl vector field. This result extends Green's Theorem from regions in the plane to general surfaces in space having a smooth boundary curve. 

![[9a8ad8e5e7318b67629331c7fbfcd86b9d268bd46acdfc266e439f57d4d7a469.jpg|image]]



FIGURE 15.58 The circulation vector at a point $(x, y, z)$ in a plane in a three-dimensional fluid flow. Notice its right-hand relation to the rotating particles in the fluid.


∇ is the symbol “del.” 

## The Curl Vector Field

Suppose that $\mathbf{F}$ is the velocity field of a fluid flowing in space. Particles near the point $(x, y, z)$ in the fluid tend to rotate around an axis through $(x, y, z)$ that is parallel to a certain vector we are about to identify. This vector points in the direction for which the rotation is counterclockwise when viewed looking down onto the plane of the circulation from the tip of the arrow representing the vector. This is the direction your right-hand thumb points when your fingers curl around the axis of rotation in the way consistent with the rotating motion of the particles in the fluid (see Figure 15.58). The length of the vector measures the rate of rotation. The vector, introduced in Equation (3) of Section 15.3, is called the curl vector for the vector field $\mathbf{F} = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}$ , and it is given by 

$$
\operatorname{curl} \mathbf {F} = \left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) \mathbf {i} + \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) \mathbf {j} + \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \mathbf {k}.\tag{1}
$$

This information is a consequence of Stokes' Theorem, the generalization to space of the circulation-curl form of Green's Theorem. 

Notice that $(\text{curl } \mathbf{F}) \cdot \mathbf{k} = (\partial N/\partial x - \partial M/\partial y)$ , which is consistent with our discussion in Section 15.4 when $\mathbf{F} = M(x, y)\mathbf{i} + N(x, y)\mathbf{j}$ . The formula for curl F in Equation (1) is often expressed using the symbol 

$$
\nabla = \mathbf {i} \frac {\partial}{\partial x} + \mathbf {j} \frac {\partial}{\partial y} + \mathbf {k} \frac {\partial}{\partial z}.\tag{2}
$$

The symbol $\nabla$ is pronounced “del,” and we can use this symbol to express the curl of F with the formula 

$$
\begin{array}{l} \nabla \times \mathbf {F} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ M & N & P \end{array} \right| \\ = \left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) \mathbf {i} + \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) \mathbf {j} + \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \mathbf {k}. \end{array}
$$

We often use this cross product notation to write the curl symbolically as “del cross F.” 

$$
\operatorname{curl} \mathbf {F} = \nabla \times \mathbf {F}\tag{3}
$$

## **EXAMPLE 1** Find the curl of $\mathbf{F} = (x^{2} - z)\mathbf{i} + xe^{z}\mathbf{j} + xy\mathbf{k}$ .

**Solution** We use Equation (3) and the determinant form for the cross product, which gives, 

$$
\begin{array}{l} \operatorname{curl} \mathbf {F} = \nabla \times \mathbf {F} \\ = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ x ^ {2} - z & x e ^ {z} & x y \end{array} \right| \\ = \left(\frac {\partial}{\partial y} (x y) - \frac {\partial}{\partial z} (x e ^ {z})\right) \mathbf {i} - \left(\frac {\partial}{\partial x} (x y) - \frac {\partial}{\partial z} (x ^ {2} - z)\right) \mathbf {j} \\ + \left(\frac {\partial}{\partial x} (x e ^ {z}) - \frac {\partial}{\partial y} (x ^ {2} - z)\right) \mathbf {k} & \text { Curl   F   is   a   vector,   not } \\ = (x - x e ^ {z}) \mathbf {i} - (y + 1) \mathbf {j} + (e ^ {z} - 0) \mathbf {k} \\ = x (1 - e ^ {z}) \mathbf {i} - (y + 1) \mathbf {j} + e ^ {z} \mathbf {k}. \end{array}
$$

![[0a60797cd1b25ceeba577274501e1e9287888076531d188a639404928a834f89.jpg|image]]



FIGURE 15.59 The orientation of the bounding curve C gives it a right-hand relation to the normal field n. If the thumb of a right hand points along n, the fingers curl in the direction of C.


As we will see, the operator $\nabla$ has a number of other applications. For instance, when applied to a scalar function $f(x, y, z)$ , it gives the gradient of f: 

$$
\nabla f = \frac {\partial f}{\partial x} \mathbf {i} + \frac {\partial f}{\partial y} \mathbf {j} + \frac {\partial f}{\partial z} \mathbf {k}.
$$

In this setting it is read sometimes as “del f” and sometimes as “grad f.” 

## Stokes' Theorem

Stokes' Theorem generalizes Green's Theorem to three dimensions. The circulation-curl form of Green's Theorem relates the counterclockwise circulation of a vector field around a simple closed curve $C$ in the $xy$ -plane to a double integral over the plane region $R$ enclosed by $C$ . Stokes' Theorem relates the circulation of a vector field around the boundary $C$ of an oriented surface $S$ in space (Figure 15.59) to a surface integral over the surface $S$ . We require that the surface be piecewise smooth, which means that it is a finite union of smooth surfaces joining along smooth curves. 

## THEOREM 6—Stokes' Theorem

Let $S$ be a piecewise smooth oriented surface having a piecewise smooth boundary curve $C$ . Let $\mathbf{F} = M\mathbf{i} + N\mathbf{j} + P\mathbf{k}$ be a vector field whose components have continuous first partial derivatives on an open region containing $S$ . Then the circulation of $\mathbf{F}$ around $C$ in the direction counterclockwise with respect to the surface's unit normal vector $\mathbf{n}$ equals the integral of the curl vector field $\nabla \times \mathbf{F}$ over $S$ : 

$$
\oint_{C}\mathbf{F}\cdot d\mathbf{r} = \iint \limits_{S}(\nabla \times \mathbf{F})\cdot \mathbf{n}  d\sigma \]\[ \text{Counterclockwise} \quad \text{curl integral} \]\[ \text{circulation}\tag{4}
$$

Notice from Equation (4) that if two different oriented surfaces $S_{1}$ and $S_{2}$ have the same boundary C, their curl integrals are equal: 

$$
\iint_ {S _ {1}} (\nabla \times \mathbf {F}) \cdot \mathbf {n} _ {1} d \sigma = \iint_ {S _ {2}} (\nabla \times \mathbf {F}) \cdot \mathbf {n} _ {2} d \sigma .
$$

Both curl integrals equal the counterclockwise circulation integral on the left side of Equation (4) as long as the unit normal vectors $n_{1}$ and $n_{2}$ correctly orient the surfaces. So the curl integral is independent of the surface and depends only on circulation along the boundary curve. This independence of surface resembles the path independence for the flow integral of a conservative velocity field along a curve, where the value of the flow integral depends only on the endpoints (that is, the boundary points) of the path. In that sense, the curl field $\nabla \times F$ is analogous to the gradient field $\nabla f$ of a scalar function f. 

If $C$ is a curve in the $xy$ -plane, oriented counterclockwise, and $R$ is the region in the $xy$ -plane bounded by $C$ , then $d\sigma = dx dy$ and 

$$
(\nabla \times \mathbf {F}) \cdot \mathbf {n} = (\nabla \times \mathbf {F}) \cdot \mathbf {k} = \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right).
$$

Under these conditions, Stokes' equation becomes 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) d x d y,
$$

which is the circulation-curl form of the equation in Green's Theorem. Conversely, by reversing these steps we can rewrite the circulation-curl form of Green's Theorem for two-dimensional fields in del notation as 

![[d82413c2535f7642d567ac4c75535a7c434eb9c68698807d9b02d4adc0e86149.jpg|image]]


(5) 


FIGURE 15.60 When applied to curves and surfaces in the plane, Stokes' Theorem gives the circulation-curl version of Green's Theorem. But Stokes' Theorem also applies more generally, to curves and surfaces not lying in the plane.


![[6015ce5fbb2ef24da188bc3e02a51f5a0f6cfdafddab5a49efb701bf20f7cb72.jpg|image]]


$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {R} (\nabla \times \mathbf {F}) \cdot \mathbf {k}   d A.
$$

![[43aa25f07a59d13f4ef875f83b1b181b0e18140a29bd947885d1a00ad4ffed97.jpg|image]]



FIGURE 15.61 A hemisphere and a disk, each with boundary C (Examples 2 and 3).


See Figure 15.60. 

**EXAMPLE 2** Evaluate both sides of Equation (4) for the hemisphere $S: x^{2} + y^{2} + z^{2} = 9, z \geq 0$ ; its bounding circle $C: x^{2} + y^{2} = 9, z = 0$ , traversed counterclockwise (when viewed from above); and the field $\mathbf{F} = y\mathbf{i} - x\mathbf{j}$ . 

**Solution** The hemisphere looks much like the surface in Figure 15.59 with the bounding circle C in the xy-plane (see Figure 15.61). We calculate the counterclockwise circulation around C (as viewed from above) using the parametrization $\mathbf{r}(\theta) = (3 \cos \theta)\mathbf{i} + (3 \sin \theta)\mathbf{j}, 0 \leq \theta \leq 2\pi$ : 

$$
\begin{array}{c} d \mathbf {r} = (- 3 \sin \theta   d \theta) \mathbf {i} + (3 \cos \theta   d \theta) \mathbf {j} \\ \mathbf {F} = y \mathbf {i} - x \mathbf {j} = (3 \sin \theta) \mathbf {i} - (3 \cos \theta) \mathbf {j} \\ \mathbf {F} \cdot d \mathbf {r} = - 9 \sin^ {2} \theta   d \theta - 9 \cos^ {2} \theta   d \theta = - 9   d \theta \\ \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {0} ^ {2 \pi} - 9   d \theta = - 1 8 \pi . \end{array}
$$

When evaluating the right side of Equation (4), we choose the orientation of the unit normal vector so that it points away from the origin, giving it a right-hand relation to the prescribed orientation of the curve C (see Figure 15.61). We have 

$$
\begin{array}{r l} \nabla \times \mathbf {F} & = \left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) \mathbf {i} + \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) \mathbf {j} + \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \mathbf {k} \\ & = (0 - 0) \mathbf {i} + (0 - 0) \mathbf {j} + (- 1 - 1) \mathbf {k} = - 2 \mathbf {k} \\ \mathbf {n} & = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{\sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{3} \quad \text {   Unit   normal   vector   } \\ d \sigma & = \frac {3}{z} d A \quad \text {   Section   15.6,   Example   7,   with   a   =   3   } \\ (\mathbf {F}) \cdot \mathbf {n} d \sigma & = (- 2 \mathbf {k}) \times \left(\frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{3}\right) d \sigma = - \frac {2 z}{3} \frac {3}{z} d A = - 2 d A \end{array}
$$

and 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = \iint_ {x ^ {2} + y ^ {2} \leq 9} - 2 d A = - 1 8 \pi .
$$

The circulation around the circle equals the integral of the curl over the hemisphere, as it should from Stokes' Theorem. 

The surface integral in Stokes' Theorem can be computed using any surface having boundary curve $C$ , provided the surface is properly oriented and lies within the domain of the field $\mathbf{F}$ . The next example illustrates this fact for the circulation around the curve $C$ in Example 2. 

**EXAMPLE 3** Calculate the circulation around the bounding circle C in Example 2, using the disk of radius 3 centered at the origin in the xy-plane as the surface S (instead of the hemisphere). See Figure 15.61. 

**Solution** As in Example 2, $\nabla \times \mathbf{F} = -2\mathbf{k}$ . When the surface is the described disk in the $xy$ -plane, we have the normal vector $\mathbf{n} = \mathbf{k}$ , chosen to give a counterclockwise direction for $C$ as required by Stokes' Theorem, so that 

$$
(\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = - 2 \mathbf {k} \cdot \mathbf {k} d A = - 2 d A
$$

![[7a42a8762e5022fae56c8251bd9830acab87c0e02372118161a6667cf7d3901d.jpg|image]]



FIGURE 15.62 The curve C and cone S in Example 4.


and 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = \iint_ {x ^ {2} + y ^ {2} \leq 9} - 2 d A = - 1 8 \pi ,
$$

a simpler calculation than before. 

**EXAMPLE 4** Find the circulation of the field $\mathbf{F} = (x^{2} - y)\mathbf{i} + 4z\mathbf{j} + x^{2}\mathbf{k}$ around the curve C in which the plane z = 2 meets the cone $z = \sqrt{x^{2} + y^{2}}$ , counterclockwise as viewed from above (Figure 15.62). 

**Solution** Stokes' Theorem enables us to find the circulation by integrating over the surface of the cone. Traversing $C$ in the counterclockwise direction viewed from above corresponds to taking the inner normal $\mathbf{n}$ to the cone, the normal with a positive $\mathbf{k}$ -component. 

We parametrize the cone as 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r \mathbf {k}, \quad 0 \leq r \leq 2, \quad 0 \leq \theta \leq 2 \pi .
$$

We then have 

$$
\begin{array}{r l r} \mathbf {n} & = \frac {\mathbf {r} _ {r} \times \mathbf {r} _ {\theta}}{| \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} |} = \frac {- (r \cos \theta) \mathbf {i} - (r \sin \theta) \mathbf {j} + r \mathbf {k}}{r \sqrt {2}} & \text { Section   15.5,   Example   4 } \\ & = \frac {1}{\sqrt {2}} (- (\cos \theta) \mathbf {i} - (\sin \theta) \mathbf {j} + \mathbf {k}) \\ d \sigma & = r \sqrt {2} d r d \theta & \text { Section   15.5,   Example   4 } \\ \nabla \times \mathbf {F} & = - 4 \mathbf {i} - 2 x \mathbf {j} + \mathbf {k} & \text { Computation   of   curl } \\ & = - 4 \mathbf {i} - 2 r \cos \theta \mathbf {j} + \mathbf {k}. & x = r \cos \theta \end{array}
$$

Accordingly, 

$$
\begin{array}{r l} (\nabla \times \mathbf {F}) \cdot \mathbf {n} & = \frac {1}{\sqrt {2}} (4 \cos \theta + 2 r \cos \theta \sin \theta + 1) \\ & = \frac {1}{\sqrt {2}} (4 \cos \theta + r \sin 2 \theta + 1), \end{array}
$$

and the circulation is 

$$
\begin{array}{l} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n}   d \sigma \quad \text { Stokes' Theorem,   Eq.   (4) } \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \frac {1}{\sqrt {2}} (4 \cos \theta + r \sin 2 \theta + 1) (r \sqrt {2}   d r   d \theta) = 4 \pi . \end{array}
$$

**EXAMPLE 5** The cone used in Example 4 is not the easiest surface to use for calculating the circulation around the bounding circle C lying in the plane z = 2. If instead we use the flat disk of radius 2 centered on the z-axis and lying in the plane z = 2, then the normal vector to the surface S is n = k (chosen to give a counterclockwise direction for the curve C). Just as in the computation for Example 4, we still have $\nabla \times F = -4i - 2xj + k$ . However, now we get $(\nabla \times F) \cdot n = 1$ , so that 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = \iint_ {x ^ {2} + y ^ {2} \leq 4} 1 d A = 4 \pi . \quad \text { The   shadow   is   the   disk   of   radius   2   in   the   xy - plane. }
$$

This result agrees with the circulation value found in Example 4. 

![[744840cb09da186f24d54d4cae6f883ac45b22972a3e55bf07a3249f6f2510fc.jpg|image]]


![[6ee1ba70df517cea8571b430be126dfb20b0e4faf26e4a316fe81ed08d8ee094.jpg|image]]



FIGURE 15.63 The surface and vector field for Example 6.


**EXAMPLE 6** Find a parametrization for the surface S formed by the part of the hyperbolic paraboloid $z = y^{2} - x^{2}$ lying inside the cylinder of radius one around the z-axis and for the boundary curve C of S. (See Figure 15.63.) Then verify Stokes' Theorem for S using the normal having positive k-component and the vector field $F = y\mathbf{i} - x\mathbf{j} + x^{2}\mathbf{k}$ . 

**Solution** As the unit circle is traversed in the xy-plane, the z-coordinate of the surface with the curve C as boundary is given by $y^{2} - x^{2}$ . We choose the orientation for the curve C to be counterclockwise when viewed from above (see Figure 15.63). A parametrization of C is given by 

$$
\mathbf {r} (t) = (\cos t) \mathbf {i} + (\sin t) \mathbf {j} + (\sin^ {2} t - \cos^ {2} t) \mathbf {k}, 0 \leq t \leq 2 \pi
$$

with 

$$
\frac {d \mathbf {r}}{d t} = (- \sin t) \mathbf {i} + (\cos t) \mathbf {j} + (4 \sin t \cos t) \mathbf {k}, 0 \leq t \leq 2 \pi .
$$

Along the curve $\mathbf{r}(t)$ the formula for the vector field F is 

$$
\mathbf {F} = (\sin t) \mathbf {i} - (\cos t) \mathbf {j} + (\cos^ {2} t) \mathbf {k}.
$$

The counterclockwise circulation along C is the value of the line integral 

$$
\begin{array}{r l} \int_ {0} ^ {2 \pi} \mathbf {F} \cdot \frac {d \mathbf {r}}{d t} d t & = \int_ {0} ^ {2 \pi} (- \sin^ {2} t - \cos^ {2} t + 4 \sin t \cos^ {3} t) d t \\ & = \int_ {0} ^ {2 \pi} (4 \sin t \cos^ {3} t - 1) d t \\ & = \left[ - \cos^ {4} t - t \right] _ {0} ^ {2 \pi} = - 2 \pi . \end{array}
$$

We now compute the same quantity by integrating $(\nabla \times \mathbf{F}) \cdot \mathbf{n}$ over the surface S. We use polar coordinates and parametrize S by noting that above the point $(r, \theta)$ in the plane, the z-coordinate of S is $y^{2} - x^{2} = r^{2} \sin^{2} \theta - r^{2} \cos^{2} \theta$ . A parametrization of S is 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r ^ {2} (\sin^ {2} \theta - \cos^ {2} \theta) \mathbf {k}, 0 \leq r \leq 1, 0 \leq \theta \leq 2 \pi .
$$

We next compute $(\nabla \times \mathbf{F}) \cdot \mathbf{n} d\sigma$ . We have 

$$
\nabla \times \mathbf {F} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ y & - x & x ^ {2} \end{array} \right| = - 2 x \mathbf {j} - 2 \mathbf {k} = - (2 r \cos \theta) \mathbf {j} - 2 \mathbf {k}
$$

and 

$$
\begin{array}{c} \mathbf {r} _ {r} = (\cos \theta) \mathbf {i} + (\sin \theta) \mathbf {j} + 2 r (\sin^ {2} \theta - \cos^ {2} \theta) \mathbf {k} \\ \mathbf {r} _ {\theta} = (- r \sin \theta) \mathbf {i} + (r \cos \theta) \mathbf {j} + 4 r ^ {2} (\sin \theta \cos \theta) \mathbf {k} \\ \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \cos \theta & \sin \theta & 2 r (\sin^ {2} \theta - \cos^ {2} \theta) \\ - r \sin \theta & r \cos \theta & 4 r ^ {2} (\sin \theta \cos \theta) \end{array} \right| \\ = 2 r ^ {2} (2 \sin^ {2} \theta \cos \theta - \sin^ {2} \theta \cos \theta + \cos^ {3} \theta) \mathbf {i} \\ - 2 r ^ {2} (2 \sin \theta \cos^ {2} \theta + \sin^ {3} \theta + \sin \theta \cos^ {2} \theta) \mathbf {j} + r \mathbf {k}. \end{array}
$$

Note that the k-component is always nonnegative. Therefore, we take 

$$
\mathbf {n} = + \frac {(\mathbf {r} _ {r} \times \mathbf {r} _ {\theta})}{| \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} |}.
$$

![[b91e99a10bd44cfac79b3dbc0c6f04dd43060f2ea980fb3f382b7ace90645616.jpg|image]]


$$
\begin{array}{l} \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} (\nabla \times \mathbf {F}) \cdot \frac {\mathbf {r} _ {r} \times \mathbf {r} _ {\theta}}{| \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} |} | \mathbf {r} _ {r} \times \mathbf {r} _ {\theta} | d r d \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} (\nabla \times \mathbf {F}) \cdot (\mathbf {r} _ {r} \times \mathbf {r} _ {\theta}) d r d \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} [ 4 r ^ {3} (2 \sin \theta \cos^ {3} \theta + \sin^ {3} \theta \cos \theta + \sin \theta \cos^ {3} \theta) - 2 r ] d r d \theta \\ = \int_ {0} ^ {2 \pi} \left[ r ^ {4} (3 \sin \theta \cos^ {3} \theta + \sin^ {3} \theta \cos \theta) - r ^ {2} \right] _ {r = 0} ^ {r = 1} d \theta & \text {   Integrate.   } \\ = \int_ {0} ^ {2 \pi} (3 \sin \theta \cos^ {3} \theta + \sin^ {3} \theta \cos \theta - 1) d \theta & \text {   Evaluate.   } \\ = \left[ - \frac {3}{4} \cos^ {4} \theta + \frac {1}{4} \sin^ {4} \theta - \theta \right] _ {0} ^ {2 \pi} \\ = (- \frac {3}{4} + 0 - 2 \pi + \frac {3}{4} - 0 + 0) = - 2 \pi . \end{array}
$$


FIGURE 15.64 Circulation curve C in Example 7.


We now obtain 

So the surface integral of $( \nabla \times \mathbf { F } )$ ⋅ n over S equals the counterclockwise circulation of F along C, as asserted by Stokes’ Theorem. 

**EXAMPLE 7** Calculate the circulation of the vector field 

$$
\mathbf {F} = (x ^ {2} + z) \mathbf {i} + (y ^ {2} + 2 x) \mathbf {j} + (z ^ {2} - y) \mathbf {k}
$$

along the curve of intersection of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1$ with the cone $z = { \sqrt { x ^ { 2 } + y ^ { 2 } } }$ traversed in the counterclockwise direction around the z-axis when viewed from above. 

**Solution** The sphere and cone intersect when $1 = ( x ^ { 2 } + y ^ { 2 } ) + z ^ { 2 } = z ^ { 2 } + z ^ { 2 } = 2 z ^ { 2 }$ or $z = 1 / \sqrt { 2 }$ (see Figure 15.64). We apply Stokes’ Theorem to the curve of intersection $x ^ { 2 } + y ^ { 2 } = 1 / 2$ considered as the boundary of the enclosed disk in the plane $z = 1 / \sqrt { 2 }$ The normal vector to the surface that gives a counterclockwise orientation to the boundary curve is then n k= . We calculate the curl vector as 

$$
\nabla \times \mathbf {F} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ x ^ {2} + z & y ^ {2} + 2 x & z ^ {2} - y \end{array} \right| = - \mathbf {i} + \mathbf {j} + 2 \mathbf {k},
$$

so that $( \nabla \times \mathbf { F } ) \cdot \mathbf { k } = 2$ . The circulation around the disk is 

$$
\begin{array}{l} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {k} d \sigma \\ = \iint_ {S} 2 d \sigma = 2 \cdot \text { area   of   disk } = 2 \cdot \pi \left(\frac {1}{\sqrt {2}}\right) ^ {2} = \pi . \end{array}
$$

## Paddle Wheel Interpretation of $\nabla \times \mathbf { F }$

Suppose that F is the velocity field of a fluid moving in a region R in space containing the closed curve C. Then 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r}
$$

![[f7bbbb8249e5dbfcf28f98ce0fedd1da78925ef897a3b743dfc82d9ffec951b2.jpg|image]]



FIGURE 15.65 A small paddle wheel in a fluid spins fastest at point Q when its axle points in the direction of curl F.


![[cf84d07ad58e31e2056f5c8127cbb8d48fc6b7c837fcd78e8bed38f0e3ccfab6.jpg|image]]



FIGURE 15.66 A steady rotational flow parallel to the xy-plane, with constant angular velocity ω in the positive (counterclockwise) direction (Example 8).


![[31f53740681da37cfa541048f5f70f62654e5b5c56ec45a828cd4fa51de0a0ac.jpg|image]]



FIGURE 15.67 The planar surface in Example 9.


is the circulation of the fluid around C. By Stokes’ Theorem, the circulation is equal to the flux of $\nabla \times \mathbf { F }$ through any suitably oriented surface S with boundary C: 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma .
$$

Suppose we fix a point Q in the region R and a direction u at Q. Take C to be a circle of radius $\rho ,$ with center at Q, whose plane is normal to u. $\mathrm { I f } \ \nabla \times \mathbf F$ is continuous at $Q ,$ the average value of the u-component of $\nabla \times \mathbf { F }$ over the circular disk S bounded by $C$ approaches the u-component of $\nabla \times \mathbf { F }$ at Q as the radius $\rho  0 ;$ 

$$
\left((\nabla \times \mathbf {F}) \cdot \mathbf {u}\right) \bigg | _ {Q} = \lim _ {\rho \rightarrow 0} \frac {1}{\pi \rho^ {2}} \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {u} d \sigma .
$$

If we apply Stokes’ Theorem and replace the surface integral by a line integral over C, we get 

$$
\left((\nabla \times \mathbf {F}) \cdot \mathbf {u}\right) \bigg | _ {Q} = \lim _ {\rho \rightarrow 0} \frac {1}{\pi \rho^ {2}} \oint_ {C} \mathbf {F} \cdot d \mathbf {r}.\tag{6}
$$

The left-hand side of Equation (6) has its maximum value when u is the direction of $\nabla \times \mathbf { F } .$ When $\rho$ is small, the limit on the right-hand side of Equation (6) is approximately 

$$
\frac {1}{\pi \rho^ {2}} \oint_ {C} \mathbf {F} \cdot d \mathbf {r},
$$

which is the circulation around C divided by the area of the disk (circulation density). Suppose that a small paddle wheel of radius $\rho$ is introduced into the fluid at $Q ,$ with its axle directed along u (Figure 15.65). The circulation of the fluid around C affects the rate of spin of the paddle wheel. The wheel spins fastest when the circulation integral is maximized; therefore, it spins fastest when the axle of the paddle wheel points in the direction of $\nabla \times \mathbf { F } .$ 

**EXAMPLE 8** A fluid of constant density rotates around the z-axis with velocity $\mathbf { F } = \omega ( - y \mathbf { i } + x \mathbf { j } )$ , where ω is a positive constant called the angular velocity of the rotation (Figure 15.66). Find $\nabla \times \mathbf { F }$ and relate it to the circulation density. 

**Solution** With $\mathbf { F } = - \omega y \mathbf { i } + \omega x \mathbf { j } ,$ , we find the curl 

$$
\begin{array}{l} \nabla \times \mathbf {F} = \left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) \mathbf {i} + \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) \mathbf {j} + \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \mathbf {k} \\ = (0 - 0) \mathbf {i} + (0 - 0) \mathbf {j} + (\omega - (- \omega)) \mathbf {k} = 2 \omega \mathbf {k}, \end{array}
$$

and therefore $( \nabla \times \mathbf { F } ) \cdot \mathbf { k } = 2 \omega$ . By Stokes’ Theorem, the circulation of F around a circle C of radius $\rho$ (traversed counterclockwise when viewed from above) bounding a disk S in a plane normal to $\nabla \times \mathbf { F } .$ , say the xy-plane, is 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = \iint_ {S} 2 \omega \mathbf {k} \cdot \mathbf {k} d x d y = (2 \omega) (\pi \rho^ {2}).
$$

Solving this last equation for $2 \omega ,$ , we see that 

$$
(\nabla \times \mathbf {F}) \cdot \mathbf {k} = 2 \omega = \frac {1}{\pi \rho^ {2}} \oint_ {C} \mathbf {F} \cdot d \mathbf {r},
$$

which is consistent with Equation (6) when $\mathbf { u } = \mathbf { k } .$ 

**EXAMPLE 9** Use Stokes’ Theorem to evaluate $\textstyle \int _ { C } \mathbf { F } \cdot d \mathbf { r } , { \mathrm { i f } } \mathbf { F } = x z { \mathbf { i } } + x y { \mathbf { j } } + 3 x z \mathbf { k }$ and C is the boundary of the portion of the plane $2 x + y + z = 2$ in the first octant, traversed counterclockwise as viewed from above (Figure 15.67). 

**Solution** The plane is the level surface $f ( x , y , z ) = 2$ of the function $f ( x , y , z ) = 2 x + y + z .$ The unit normal vector 

$$
\mathbf {n} = \frac {\nabla f}{| \nabla f |} = \frac {(2 \mathbf {i} + \mathbf {j} + \mathbf {k})}{| 2 \mathbf {i} + \mathbf {j} + \mathbf {k} |} = \frac {1}{\sqrt {6}} (2 \mathbf {i} + \mathbf {j} + \mathbf {k})
$$

is consistent with the counterclockwise motion around C. To apply Stokes’ Theorem, we find 

$$
\operatorname{curl} \mathbf {F} = \nabla \times \mathbf {F} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ x z & x y & 3 x z \end{array} \right| = (x - 3 z) \mathbf {j} + y \mathbf {k}.
$$

On the plane, z equals $2 \mathrm { ~ - ~ } 2 x \mathrm { ~ - ~ } y ,$ so 

$$
\nabla \times \mathbf {F} = (x - 3 (2 - 2 x - y)) \mathbf {j} + y \mathbf {k} = (7 x + 3 y - 6) \mathbf {j} + y \mathbf {k}
$$

and 

$$
(\nabla \times \mathbf {F}) \cdot \mathbf {n} = \frac {1}{\sqrt {6}} (7 x + 3 y - 6 + y) = \frac {1}{\sqrt {6}} (7 x + 4 y - 6).
$$

FIGURE 15.68 The portion of the elliptic paraboloid in Example 10, showing its curve of intersection C with the plane $z = 1$ and its inner normal orientation by n. 

The surface area differential is 

$$
d \sigma = \frac {| \nabla f |}{| \nabla f \cdot \mathbf {k} |} d A = \frac {\sqrt {6}}{1} d x d y. \quad \text { Formula   (7)   in   Section   15.5 }
$$

![[f772705788d6f2d741cae6f87df9309541db9116d45b5a0c7d222a9662f6b84e.jpg|image]]


The circulation is 

$$
\begin{array}{l} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma \quad \text { Stokes' Theorem,   Eq.   (4) } \\ = \int_ {0} ^ {1} \int_ {0} ^ {2 - 2 x} \frac {1}{\sqrt {6}} (7 x + 4 y - 6) \sqrt {6} d y d x \\ = \int_ {0} ^ {1} \int_ {0} ^ {2 - 2 x} (7 x + 4 y - 6) d y d x = - 1. \end{array}
$$

**EXAMPLE 10** Let the surface S be the elliptic paraboloid $z = x ^ { 2 } + 4 y ^ { 2 }$ lying beneath the plane z = 1 (Figure 15.68). We define the orientation of S by taking the inner normal vector n to the surface, which is the normal having a positive k-component. Find the flux of $\nabla \times \mathbf { F }$ across S in the direction n for the vector field ${ \bf F } = { \bf y  i } - x z { \bf j } + x z ^ { 2 } { \bf k }$ 

**Solution** We use Stokes’ Theorem to calculate the curl integral by finding the equivalent counterclockwise circulation of F around the curve of intersection C of the paraboloid $z = x ^ { 2 } + 4 y ^ { 2 }$ and the plane $z = 1 .$ , as shown in Figure 15.68. Note that the orientation of S is consistent with traversing C in a counterclockwise direction around the z-axis. The curve C is the ellipse $x ^ { 2 } + 4 y ^ { 2 } = 1 $ 1 in the plane $z = 1$ . We can parametrize the ellipse by $\textstyle x = \cos t , y = { \frac { 1 } { 2 } } \sin t , z = 1$ for $0 \leq t \leq 2 \pi$ , so C is given by 

$$
\mathbf {r} (t) = (\cos t) \mathbf {i} + \frac {1}{2} (\sin t) \mathbf {j} + \mathbf {k}, \quad 0 \leq t \leq 2 \pi .
$$

To compute the circulation integral $\oint _ { C } \mathbf { F } \cdot d \mathbf { r }$ , we evaluate F along C and find the velocity vector dr dt: 

$$
\mathbf {F} (\mathbf {r} (t)) = \frac {1}{2} (\sin t) \mathbf {i} - (\cos t) \mathbf {j} + (\cos t) \mathbf {k}
$$

![[333688a98b6e0b276ab25bf7abb302f94d42d1eb5ec6945330aad2dfedd7b0cd.jpg|image]]



(a)


![[d55c2a50b0ed278fd58bdfe3bde8eaada67e561f100dc4d35e112741001e1e05.jpg|image]]



(b)



FIGURE 15.69 (a) Part of a polyhedral surface. (b) Other polyhedral surfaces.


and 

Then 

$$
\frac {d \mathbf {r}}{d t} = - (\sin t) \mathbf {i} + \frac {1}{2} (\cos t) \mathbf {j}.
$$

$$
\begin{array}{l} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \int_ {0} ^ {2 \pi} \mathbf {F} (\mathbf {r} (t)) \cdot \frac {d \mathbf {r}}{d t} d t \\ = \int_ {0} ^ {2 \pi} \left(- \frac {1}{2} \sin^ {2} t - \frac {1}{2} \cos^ {2} t\right) d t \\ = - \frac {1}{2} \int_ {0} ^ {2 \pi} d t = - \pi . \end{array}
$$

Therefore, by Stokes’ Theorem the flux of the curl across S in the direction n for the field F is 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma = - \pi .
$$

## Proof Outline of Stokes’ Theorem for Polyhedral Surfaces

Let S be a polyhedral surface consisting of a finite number of plane regions or faces. (See Figure 15.69 for examples.) We apply Green’s Theorem to each separate face of S. There are two types of faces: 

1. Those that are surrounded on all sides by other faces. 

2. Those that have one or more edges that are not adjacent to other faces. 

The boundary of S consists of those edges of the type 2 faces that are not adjacent to other faces. In Figure 15.69a, the triangles EAB, BCE, and CDE represent a part of S, with ABCD part of the boundary of the surface, boundary(S). Although Green’s Theorem was stated for curves in the xy-plane, a generalized form applies to curves that lie in a plane in space. In the generalized form, the theorem asserts that the line integral of F around the curve enclosing the plane region R normal to n equals the double integral of (curl F n ) ⋅ over R. Applying this generalized form to the three triangles of Figure 15.69a in turn, and adding the results, gives 

$$
\left(\oint_ {E A B} + \oint_ {B C E} + \oint_ {C D E}\right) \mathbf {F} \cdot d \mathbf {r} = \left(\iint_ {E A B} + \iint_ {B C E} + \iint_ {C D E}\right) (\nabla \times \mathbf {F}) \cdot \mathbf {n}   d \sigma .\tag{7}
$$

The three line integrals on the left-hand side of Equation (7) combine into a single line integral taken around the periphery ABCDE because the integrals along interior segments cancel in pairs. For example, the integral along segment BE in triangle ABE is opposite in sign to the integral along the same segment in triangle EBC. The same holds for segment CE. Hence, Equation (7) reduces to 

$$
\oint_ {A B C D E} \mathbf {F} \cdot d \mathbf {r} = \iint_ {A B C D E} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma .
$$

When we apply Green’s Theorem to all the faces and add the results, we get 

$$
\oint_ {\text { boundary } (S)} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n}   d \sigma .
$$


(b)


![[352f2e67a4792711a941f8c7f5800db58bb29130444ee73ca1ef070148e328c8.jpg|image]]



FIGURE 15.70 Stokes’ Theorem also holds for oriented surfaces with holes. Consistent with the orientation of S, the outer curve is traversed counterclockwise around n, and the inner curves surrounding the holes are traversed clockwise.


![[9bf24ef800ff172eec35de949ef241291bade59380df51380fca9163201d996f.jpg|image]]



(a)


![[3a4be3e3ce8c34deff3a97e5fa5753fc92bdf2e20054015fc5f770e0e8df5a13.jpg|image]]


![[af9c2115fb6413552d680de758a0557ec44d55a8d95c41b92133dd46937b59fb.jpg|image]]


FIGURE 15.71 (a) In a simply connected open region in space, a simple closed curve C is the boundary of a smooth surface S. (b) Smooth curves that cross themselves can be divided into loops to which Stokes’ Theorem applies. 

This is Stokes’ Theorem for the polyhedral surface S in Figure 15.69a. More general polyhedral surfaces are shown in Figure 15.69b, and the proof can be extended to them. General smooth surfaces can be obtained as limits of polyhedral surfaces. 

## Stokes’ Theorem for Surfaces with Holes

Stokes’ Theorem holds for an oriented surface S that has one or more holes (Figure 15.70). The surface integral over S of the normal component of $\nabla \times \mathbf { F }$ equals the sum of the line integrals around all the boundary curves of the tangential component of F, where the curves are to be traced in the direction induced by the orientation of S. For such surfaces the theorem is unchanged, but C is considered as a union of simple closed curves. 

## An Important Identity

The following identity arises frequently in mathematics and the physical sciences. 

$$
\operatorname{curl} \operatorname{grad} f = \mathbf {0} \quad \text { or } \quad \nabla \times \nabla f = \mathbf {0}\tag{8}
$$

Forces arising in the study of electromagnetism and gravity are often associated with a potential function $f .$ The identity (8) says that these forces have curl equal to zero. The identity (8) holds for any function $f ( x , y , z )$ whose second partial derivatives are continuous. The proof goes like this: 

$$
\nabla \times \nabla f = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ \frac {\partial}{\partial x} & \frac {\partial}{\partial y} & \frac {\partial}{\partial z} \\ \frac {\partial f}{\partial x} & \frac {\partial f}{\partial y} & \frac {\partial f}{\partial z} \end{array} \right| = (f _ {z y} - f _ {y z}) \mathbf {i} - (f _ {z x} - f _ {x z}) \mathbf {j} + (f _ {y x} - f _ {x y}) \mathbf {k}.
$$

If the second partial derivatives are continuous, the mixed second derivatives in parentheses are equal (Theorem 2, Section 13.3) and the vector is zero. 

## Conservative Fields and Stokes’ Theorem

In Section 15.3, we found that a field F being conservative in an open region D in space is equivalent to the integral of F around every closed loop in D being zero. This, in turn, is equivalent in simply connected open regions to saying that $\nabla \times \mathbf { F } = \mathbf { 0 }$ (which gives a test for determining whether F is conservative for such regions). 

THEOREM 7— Curl F 0= Related to the Closed-Loop Property If $\nabla \times \mathbf { F } = \mathbf { 0 }$ at every point of a simply connected open region D in space, then on any piecewise-smooth closed path C in D, 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = 0.
$$

Sketch of a Proof Theorem 7 can be proved in two steps. The first step is for simple closed curves (loops that do not cross themselves), like the one in Figure 15.71a. A theorem from topology, a branch of advanced mathematics, states that every smooth simple closed curve C in a simply connected open region D is the boundary of a smooth two-sided surface S that also lies in D. Hence, by Stokes’ Theorem, 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r} = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n}   d \sigma = 0.
$$

The second step is for curves that cross themselves, like the one in Figure 15.71b. The idea is to break these into simple loops spanned by orientable surfaces, apply Stokes Theorem one loop at a time, and add the results. 

The following diagram summarizes the results for conservative fields defined on connected, simply connected open regions. For such regions, the four statements are equivalent to each other. 

$$
\begin{array}{l l} \oint_ {C} \mathbf {F} \cdot d \mathbf {r} = 0 & \Longleftrightarrow \nabla \times \mathbf {F} = \mathbf {0} \text {   throughout   } D \\ \text {   over   any   closed   path   in   } D & \text {   Theorem   7   Domain's   simple   connectivity   and   Stokes'   Theorem   } \end{array}
$$

## EXERCISES

## 15.7

In Exercises 1–6, find the curl of each vector field F. 

$$
\mathbf {1 .} \mathbf {F} = (x + y - z) \mathbf {i} + (2 x - y + 3 z) \mathbf {j} + (3 x + 2 y + z) \mathbf {k}
$$

$$
\mathbf {2 . F} = (x ^ {2} - y) \mathbf {i} + (y ^ {2} - z) \mathbf {j} + (z ^ {2} - x) \mathbf {k}
$$

$$
\mathbf {F} = (x y + z) \mathbf {i} + (y z + x) \mathbf {j} + (x z + y) \mathbf {k}
$$

$$
\mathbf {F} = y e ^ {z} \mathbf {i} + z e ^ {x} \mathbf {j} - x e ^ {y} \mathbf {k}
$$

$$
\mathbf {5 . F} = x ^ {2} y z \mathbf {i} + x y ^ {2} z \mathbf {j} + x y z ^ {2} \mathbf {k}
$$

$$
\mathbf {6 . F} = \frac {x}{y z} \mathbf {i} - \frac {y}{x z} \mathbf {j} + \frac {z}{x y} \mathbf {k}
$$

## Using Stokes’ Theorem to Find Line Integrals

In Exercises 7–12, use the surface integral in Stokes’ Theorem to calculate the circulation of the field F around the curve C in the indicated direction. 

$$
\mathbf {F} = x ^ {2} \mathbf {i} + 2 x \mathbf {j} + z ^ {2} \mathbf {k}
$$

C: The ellipse $4 x ^ { 2 } + y ^ { 2 } = 4 $ in the xy-plane, counterclockwise when viewed from above 

$$
\mathbf {8 . F} = 2 y \mathbf {i} + 3 x \mathbf {j} - z ^ {2} \mathbf {k}
$$

C: The circle $x ^ { 2 } + y ^ { 2 } = 9 \quad$ in the xy-plane, counterclockwise when viewed from above 

$$
\mathbf {F} = y \mathbf {i} + x z \mathbf {j} + x ^ {2} \mathbf {k}
$$

C: The boundary of the triangle cut from the plane $x + y + z = 1$ by the first octant, counterclockwise when viewed from above 

$$
\mathbf {1 0 . F} = (y ^ {2} + z ^ {2}) \mathbf {i} + (x ^ {2} + z ^ {2}) \mathbf {j} + (x ^ {2} + y ^ {2}) \mathbf {k}
$$

C: The boundary of the triangle cut from the plane x $+ \ y + \ z = 1$ by the first octant, counterclockwise when viewed from above 

$$
\mathbf {1 1 .} \mathbf {F} = (y ^ {2} + z ^ {2}) \mathbf {i} + (x ^ {2} + y ^ {2}) \mathbf {j} + (x ^ {2} + y ^ {2}) \mathbf {k}
$$

C: The square bounded by the lines $x = \pm 1$ and $y = \pm 1$ in the xy-plane, counterclockwise when viewed from above 

$$
\mathbf {1 2 . F} = x ^ {2} y ^ {3} \mathbf {i} + \mathbf {j} + z \mathbf {k}
$$

C: The intersection of the cylinder $x ^ { 2 } + y ^ { 2 } = 4 $ and the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1 6 , z \geq 0 ,$ counterclockwise when viewed from above 

## Integral of the Curl Vector Field

13. Let n be the unit normal in the direction away from the origin of the elliptic shell 

$$
S \colon 4 x ^ {2} + 9 y ^ {2} + 3 6 z ^ {2} = 3 6, \quad z \geq 0,
$$

and let 

$$
\mathbf {F} = y \mathbf {i} + x ^ {2} \mathbf {j} + (x ^ {2} + y ^ {4}) ^ {3 / 2} \sin e ^ {\sqrt {x y z}} \mathbf {k}.
$$

Find the value of 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma .
$$

(Hint: One parametrization of the ellipse at the base of the shell is x = = ≤ ≤3 cos , 2 sin , 0 2 .)t y t t π 

14. Let n be the unit normal in the direction away from the origin of the parabolic shell 

$$
S \colon 4 x ^ {2} + y + z ^ {2} = 4, \quad y \geq 0,
$$

and let 

$$
\mathbf {F} = \left(- z + \frac {1}{2 + x}\right) \mathbf {i} + (\tan^ {- 1} y) \mathbf {j} + \left(x + \frac {1}{4 + z}\right) \mathbf {k}.
$$

Find the value of 

$$
\iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma .
$$

15. Let S be the cylinder $x ^ { 2 } + y ^ { 2 } = a ^ { 2 } , 0 \leq z \leq h ,$ ,  together with its top, $x ^ { 2 } + y ^ { 2 } \leq a ^ { 2 } , z = h$ . Let $\mathbf { F } = - y \mathbf { i } + x \mathbf { j } + x ^ { 2 } \mathbf { k }$ . Use Stokes’ Theorem to find the flux of $\nabla \times \mathbf { F }$ through S in the direction away from the origin. 

16. Evaluate 

$$
\iint_ {S} \left(\nabla \times (y \mathbf {i})\right) \cdot \mathbf {n}   d \sigma ,
$$

where S is the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1 , z \geq 0 $ , in the direction away from the origin. 

17. Suppose $\mathbf { F } = \nabla \times \mathbf { A }$ , where 

$$
\mathbf {A} = (y + z ^ {2}) \mathbf {i} + e ^ {x y z} \mathbf {j} + \cos (x z) \mathbf {k}.
$$

Determine the flux of F through the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1 , z \geq 0$ , in the direction away from the origin. 

18. Repeat Exercise 17 for the flux of F across the entire unit sphere. 

## Stokes’ Theorem for Parametrized Surfaces

In Exercises 19–24, use the surface integral in Stokes’ Theorem to calculate the flux of the curl of the field F across the surface S. 

19. $\mathbf { F } = 2 z \mathbf { i } + 3 x \mathbf { j } + 5 y \mathbf { k }$ 

$$
S: \quad \mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + (4 - r ^ {2}) \mathbf {k},
$$

$$
0 \leq r \leq 2, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the origin. 

$$
\mathbf {2 0 .} \mathbf {F} = (y - z) \mathbf {i} + (z - x) \mathbf {j} + (x + z) \mathbf {k}
$$

$$
S: \quad \mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + (9 - r ^ {2}) \mathbf {k},
$$

$$
0 \leq r \leq 3, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the origin. 

21. $\mathbf { F } = x ^ { 2 } y \mathbf { i } + 2 y ^ { 3 } z \mathbf { j } + 3 z \mathbf { k }$ 

$$
S: \quad \mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + r \mathbf {k},
$$

$$
0 \leq r \leq 1, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the z-axis. 

22. $\mathbf { F } = ( x - y ) \mathbf { i } + ( y - z ) \mathbf { j } + ( z - x ) \mathbf { k }$ 

$$
S: \quad \mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + (5 - r) \mathbf {k},
$$

$$
0 \leq r \leq 5, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the z-axis. 

23. $\mathbf { F } = 3 y \mathbf { i } + ( 5 - 2 x ) \mathbf { j } + ( z ^ { 2 } - 2 ) \mathbf { k }$ 

$$
S: \quad \mathbf {r} (\phi , \theta) = (\sqrt {3} \sin \phi \cos \theta) \mathbf {i} + (\sqrt {3} \sin \phi \sin \theta) \mathbf {j} +
$$

$$
(\sqrt {3} \cos \phi) \mathbf {k}, 0 \leq \phi \leq \pi / 2, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the origin. 

24. $\mathbf { F } = y ^ { 2 } \mathbf { i } + z ^ { 2 } \mathbf { j } + x \mathbf { k }$ 

φ θ φ θ φ θ φ( ) ( ) ( ) ( )= + +S: , 2 sin cos 2 sin sin 2 cos , r i j k 

$$
0 \leq \phi \leq \pi / 2, 0 \leq \theta \leq 2 \pi ,
$$

in the direction away from the origin. 

## Theory and Examples

25. Let C be the smooth curve ${ \bf r } ( t ) = ( 2 \cos t ) { \bf i } + ( 2 \sin t ) { \bf j } + $ $\big ( 3 - 2 \cos ^ { 3 } t \big ) \mathbf { k }$ , oriented to be traversed counterclockwise around the z-axis when viewed from above. Let S be the piecewise smooth cylindrical surface $x ^ { 2 } + y ^ { 2 } = 4 $ , below the curve for $z \geq 0 ,$ together with the base disk in the xy-plane. Note that C lies on the cylinder S and above the xy-plane (see the accompanying figure). Verify Equation (4) in Stokes’ Theorem for the vector field $\mathbf { F } = { y \mathbf { i } } - x \mathbf { j } + x ^ { 2 } \mathbf { k } .$ 

![[05b07b1ca6b47cfd43bf1de0c75f6250d53b7cf8de917d31c9c1c43f11c67fd9.jpg|image]]


26. Verify Stokes’ Theorem for the vector field ${ \bf F } = 2 x y { \bf i } + x { \bf j } { \bf \alpha } + { \bf \alpha }$ $( y + z ) \mathbf { k }$ and surface $z = 4 - x ^ { 2 } - y ^ { 2 } , z \geq 0$ , oriented with unit normal n pointing upward. 

27. Zero circulation Use Equation (8) and Stokes’ Theorem to show that the circulations of the following fields around the boundary of any smooth orientable surface in space are zero. 

$$
\mathbf {a}. \mathbf {F} = 2 x \mathbf {i} + 2 y \mathbf {j} + 2 z \mathbf {k} \quad \mathbf {b}. \mathbf {F} = \nabla (x y ^ {2} z ^ {3})
$$

$$
\mathbf {c}. \mathbf {F} = \nabla \times (x \mathbf {i} + y \mathbf {j} + z \mathbf {k}) \quad \mathbf {d}. \mathbf {F} = \nabla f
$$

28. Zero circulation Let $f ( x , y , z ) = ( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } ) ^ { - 1 / 2 }$ . Show that the clockwise circulation of the field $\mathbf F = \nabla f$ around the circle $x ^ { 2 } + y ^ { 2 } = a ^ { 2 }$ in the xy-plane is zero a. by taking $\mathbf { r } = ( a \cos t ) \mathbf { i } + ( a \sin t ) \mathbf { j } , 0 \leq t \leq 2 \pi$ , and integrating F ⋅ dr over the circle. 

b. by applying Stokes’ Theorem. 

29. Let C be a simple closed smooth curve in the plane $2 x + 2 y + z = 2 ,$ , oriented as shown here. Show that 

$$
\oint_ {C} 2 y d x + 3 z d y - x d z
$$

![[823d12be61c05259d50d338df88eff3288443090895ab2c734b11b555dee468f.jpg|image]]


depends only on the area of the region enclosed by C and not on the position or shape of C. 

30. Show that if $\mathbf { F } = x \mathbf { i } + y \mathbf { j } + z \mathbf { k }$ , then $\nabla \times \mathbf { F } = \mathbf { 0 }$ 

31. Find a vector field with twice-differentiable components whose curl is xi $+ \ y \mathbf { j } + z \mathbf { k }$ , or prove that no such field exists. 

32. Does Stokes’ Theorem say anything special about circulation in a field whose curl is zero? Give reasons for your answer. 

33. Let R be a region in the xy-plane that is bounded by a piecewise smooth simple closed curve C, and suppose that the density is $\delta = 1$ and the moments of inertia of R about the x- and y-axes are known to be $I _ { x }$ and $I _ { \mathrm { \Delta v } } .$ Evaluate the integral 

$$
\oint_ {C} \nabla (r ^ {4}) \cdot \mathbf {n}   d s,
$$

where $r = \sqrt { x ^ { 2 } + y ^ { 2 } }$ ,  in terms o ${ \bf \dot { \nabla } } I _ { \boldsymbol { x } }$ and $I { _ y }$ . 

34. Zero curl, yet the field is not conservative Show that the curl of 

$$
\mathbf {F} = \frac {- y}{x ^ {2} + y ^ {2}} \mathbf {i} + \frac {x}{x ^ {2} + y ^ {2}} \mathbf {j} + z \mathbf {k}
$$

is zero but that 

$$
\oint_ {C} \mathbf {F} \cdot d \mathbf {r}
$$

is not zero if C is the circle $x ^ { 2 } + y ^ { 2 } = 1$ in the xy-plane. (Theorem 7 does not apply here because the domain of F is not simply connected. The field F is not defined along the z-axis, so there is no way to contract C to a point without leaving the domain of F.) 

## 15.8 The Divergence Theorem and a Unified Theory

The divergence form of Green’s Theorem in the plane states that the net outward flux of a vector field across a simple closed curve can be calculated by integrating the divergence of the field over the region enclosed by the curve. The corresponding theorem in three dimensions, called the Divergence Theorem, states that the net outward flux of a vector field across a closed surface in space can be calculated by integrating the divergence of the field over the solid region enclosed by the surface. In this section we prove the Divergence Theorem and show how it simplifies the calculation of flux, which is the integral of the field over the closed oriented surface. We also derive Gauss’s law for flux in an electric field and the continuity equation of hydrodynamics. Finally, we summarize the chapter’s vector integral theorems in a single unifying principle generalizing the Fundamental Theorem of Calculus. 

## Divergence in Three Dimensions

The divergence of a vector field $\mathbf { F } = M ( x , y , z ) \mathbf { i } + N ( x , y , z ) \mathbf { j } + P ( x , y , z ) \mathbf { k }$ is the scalar function 

$$
\operatorname{div} \mathbf {F} = \nabla \cdot \mathbf {F} = \frac {\partial M}{\partial x} + \frac {\partial N}{\partial y} + \frac {\partial P}{\partial z}.\tag{1}
$$

The symbol “div $\mathbf { F } ^ { \prime \prime }$ is read as “divergence of $\mathbf { F } ^ { \prime \prime }$ or “div $\mathbf { F } _ { \cdot } ^ { \prime \prime }$ The notation $\nabla \cdot \mathbf { F }$ is read “del dot $\mathbf { F } .$ 

Div F has the same physical interpretation in three dimensions as it has in two. If F is the velocity field of a flowing gas, the value of div F at a point $\left( x , y , z \right)$ is the rate at which the gas is compressing or expanding at $\left( x , y , z \right)$ . The gas is expanding if div F is positive and compressing if div F is negative. The divergence is the flux per unit volume, or flux density, at the point. 

**EXAMPLE 1** The following vector fields represent the velocity of a gas flowing in space. Find the divergence of each vector field and interpret its physical meaning. Figure 15.72 displays the vector fields. 

(a) Expansion: $\mathbf { F } ( x , y , z ) = x \mathbf { i } + y \mathbf { j } + z \mathbf { k }$ 

(b) Compression: $\mathbf { F } ( x , y , z ) = - x \mathbf { i } - y \mathbf { j } - z \mathbf { k }$ 

(c) Rotation about the z-axis: $\mathbf { F } ( x , y , z ) = - y \mathbf { i } + x \mathbf { j }$ 

(d) Shearing along parallel horizontal planes: $\mathbf { F } ( x , y , z ) = z \mathbf { j }$ 

## **Solution**

(a) div $\mathbf { F } = \frac { \partial } { \partial x } ( x ) + \frac { \partial } { \partial y } ( y ) + \frac { \partial } { \partial z } ( z ) = 3 \colon$ The gas is undergoing constant uniform expansion at all points. 

![[de4499120ad968d39e4e8b7760f84d7f921d633d8ed1242ff3b4ae815170bdbb.jpg|image]]


![[23db42d13ff5b0b0c4dd81c3e419d9ae174612d0da751d386d479d3d2612a8ef.jpg|image]]


![[517071965c5c2fe3e2245c71a218f46cd8c4dda3c52f07ad8940531c66bd0c3a.jpg|image]]



(c)


![[e1d17ec244369947a7ca856e9fcb5873a8ac9acb642f54ef53c923495db66984.jpg|image]]



(d)


FIGURE 15.72 Velocity fields of a gas flowing in space (Example 1). 

(b) div $\mathbf { F } = { \frac { \partial } { \partial x } } ( - x ) + { \frac { \partial } { \partial y } } ( - y ) + { \frac { \partial } { \partial z } } ( - z ) = - 3 { \mathrm { . } }$ : The gas is undergoing constant uniform compression at all points. 

(c) div $\mathbf { F } = \frac { \partial } { \partial x } ( - y ) + \frac { \partial } { \partial y } ( x ) = 0 { : }$ The gas is neither expanding nor compressing at any point. 

(d) div $\mathbf { F } = { \frac { \partial } { \partial y } } ( z ) = 0 \colon \mathbf { A }$ gain, the divergence is zero at all points in the domain of thevelocity field, so the gas is neither expanding nor compressing at any point. 一

## Divergence Theorem

The Divergence Theorem says that under suitable conditions, the outward flux of a vector field across a closed surface equals the triple integral of the divergence of the field over the three-dimensional region enclosed by the surface. 

## THEOREM 8—Divergence Theorem

Let F be a vector field whose components have continuous first partial derivatives, and let S be a piecewise smooth oriented closed surface. The flux of F across S in the direction of the surface’s outward unit normal field n equals the triple integral of the divergence ∇ ⋅ F over the solid region D enclosed by the surface: 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n}   d \sigma = \iiint_ {D} \nabla \cdot \mathbf {F}   d V. \text {   Outward   flux   } \quad \text {   Divergence   integral   }\tag{2}
$$

**EXAMPLE 2** Evaluate both sides of Equation (2) for the expanding vector field $\mathbf { F } = x \mathbf { i } + y \mathbf { j } + z \mathbf { k }$ over the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = a ^ { 2 }$ (Figure 15.73). 

**Solution** The outer unit normal to S, calculated from the gradient of $f ( x , y , z ) = x ^ { 2 } + $ $y ^ { 2 } + z ^ { 2 } - a ^ { 2 } .$ is 

$$
\mathbf {n} = \frac {2 (x \mathbf {i} + y \mathbf {j} + z \mathbf {k})}{\sqrt {4 (x ^ {2} + y ^ {2} + z ^ {2})}} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{a}. \quad x ^ {2} + y ^ {2} + z ^ {2} = a ^ {2} \text {   on   } S
$$

It follows that 

$$
\mathbf {F} \cdot \mathbf {n} d \sigma = \frac {x ^ {2} + y ^ {2} + z ^ {2}}{a} d \sigma = \frac {a ^ {2}}{a} d \sigma = a d \sigma .
$$

Therefore, the outward flux is 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iint_ {S} a d \sigma = a \iint_ {S} d \sigma = a (4 \pi a ^ {2}) = 4 \pi a ^ {3}. \quad \text { Area   of } S \text { is } 4 \pi a ^ {2}.
$$

For the right-hand side of Equation (2), the divergence of F is 

$$
\nabla \cdot \mathbf {F} = \frac {\partial}{\partial x} (x) + \frac {\partial}{\partial y} (y) + \frac {\partial}{\partial z} (z) = 3,
$$

so we obtain the divergence integral, 

$$
\iiint_ {D} \nabla \cdot \mathbf {F} d V = \iiint_ {D} 3 d V = 3 \left(\frac {4}{3} \pi a ^ {3}\right) = 4 \pi a ^ {3}.
$$

![[c7c7e990b504927958cc15845d1ad766591c51563650199371ecc7016c808a7f.jpg|image]]



FIGURE 15.73 A uniformly expanding vector field and a sphere (Example 2).


Many vector fields of interest in applied science have zero divergence at each point. A common example is the velocity field of a circulating incompressible liquid, since it is neither expanding nor contracting. Other examples include constant vector fields $\mathbf { F } = a \mathbf { i } + b \mathbf { j } + c \mathbf { k }$ , and velocity fields for shearing action along a fixed plane (see Example 1d). If F is a vector field whose divergence is zero at each point in the region D, then the integral on the right-hand side of Equation (2) equals 0. So if S is any closed surface for which the Divergence Theorem applies, then the outward flux of F across S is zero. We state this important application of the Divergence Theorem. 

COROLLARY The outward flux across a piecewise smooth oriented closed surface S is zero for any vector field F having zero divergence at every point of the region enclosed by the surface. 

**EXAMPLE 3** Find the flux of $\mathbf { F } = x y \mathbf { i } + y z \mathbf { j } + x z \mathbf { k }$ outward through the surface of the cube cut from the first octant by the planes x = =1,  1, and y z = 1. 

**Solution** Instead of calculating the flux as a sum of six separate integrals, one for each face of the cube, we can calculate the flux by integrating the divergence 

$$
\nabla \cdot \mathbf {F} = \frac {\partial}{\partial x} (x y) + \frac {\partial}{\partial y} (y z) + \frac {\partial}{\partial z} (x z) = y + z + x
$$

over the cube’s interior: 

$$
\begin{array}{l l} \text { Flux } = \iint_ {\substack {\text { Cube } \\ \text { surface }}} \mathbf {F} \cdot \mathbf {n} d \sigma = \iiint_ {\substack {\text { Cube } \\ \text { interior }}} \nabla \cdot \mathbf {F} d V & \text { The   Divergence   Theorem } \\ = \int_ {0} ^ {1} \int_ {0} ^ {1} \int_ {0} ^ {1} (x + y + z) d x d y d z = \frac {3}{2}. & \text { Routine   integration } \end{array}
$$

![[766e7301d3b6f44945d14637484ef49e563564f0bc3343c95b846e71be2c54d5.jpg|image]]



FIGURE 15.74 The integral of div F over this region equals the total flux across the six sides (Example 4).


## **EXAMPLE 4**

(a) Calculate the flux of the vector field 

$$
\mathbf {F} = x ^ {2} \mathbf {i} + 4 x y z \mathbf {j} + z e ^ {x} \mathbf {k}
$$

out of the box-shaped region $D \colon 0 \le x \le 3 , 0 \le y \le 2 , 0 \le z \le 1$ . (See Figure 15.74.) 

(b) Integrate div F over this region and show that the result is the same value as in part (a), as asserted by the Divergence Theorem. 

## **Solution**

(a) The region D has six sides. We calculate the flux across each side in turn. Consider the top side in the plane z = 1, having outward normal n k = . The flux across this side is given by $\mathbf { F } \cdot \mathbf { n } = z e ^ { x }$ . Since $z = 1$ on this side, the flux at a point $( x , y , z )$ on the top is $e ^ { x }$ . The total outward flux across this side is given by the surface integral 

$$
\int_ {0} ^ {2} \int_ {0} ^ {3} e ^ {x} d x d y = 2 e ^ {3} - 2. \quad \text { Routine   integration }
$$

The outward flux across the other sides is computed similarly, and the results are summarized in the following table. 

<table><tr><td>Side</td><td>Unit normal n</td><td>F · n</td><td>Flux across side</td></tr><tr><td>x = 0</td><td>-i</td><td><eq>-x^{2} = 0</eq></td><td>0</td></tr><tr><td>x = 3</td><td>i</td><td><eq>x^{2} = 9</eq></td><td>18</td></tr><tr><td>y = 0</td><td>-j</td><td><eq>-4xyz = 0</eq></td><td>0</td></tr><tr><td>y = 2</td><td>j</td><td><eq>4xyz = 8xz</eq></td><td>18</td></tr><tr><td>z = 0</td><td>-k</td><td><eq>-ze^{x} = 0</eq></td><td>0</td></tr><tr><td>z = 1</td><td>k</td><td><eq>ze^{x} = e^{x}</eq></td><td><eq>2e^{3} - 2</eq></td></tr></table>

The total outward flux is obtained by adding the terms for each of the six sides: 

$$
1 8 + 1 8 + 2 e ^ {3} - 2 = 3 4 + 2 e ^ {3}.
$$

(b) We first compute the divergence of F, obtaining 

$$
\operatorname{div} \mathbf {F} = \nabla \cdot \mathbf {F} = 2 x + 4 x z + e ^ {x}.
$$

The integral of the divergence of F over D is 

$$
\begin{array}{r l} \iiint_ {D} \operatorname{div} \mathbf {F} d V & = \int_ {0} ^ {1} \int_ {0} ^ {2} \int_ {0} ^ {3} (2 x + 4 x z + e ^ {x}) d x d y d z \\ & = \int_ {0} ^ {1} \int_ {0} ^ {2} (8 + 1 8 z + e ^ {3}) d y d z \\ & = \int_ {0} ^ {1} (1 6 + 3 6 z + 2 e ^ {3}) d z \\ & = 3 4 + 2 e ^ {3}. \end{array}
$$

As asserted by the Divergence Theorem, the integral of the divergence over D equals the outward flux across the boundary surface of D. ■ 

## Divergence and the Curl

If F is a vector field on three-dimensional space, then the curl $\nabla \times \mathbf { F }$ is also a vector field on three-dimensional space. So we can calculate the divergence of $\nabla \times \mathbf { F }$ using Equation (1). The result of this calculation is always 0. 

THEOREM 9 $\operatorname { I f } \mathbf { F } = M \mathbf { i } + N \mathbf { j } + P \mathbf { k }$ is a vector field with continuous second partial derivatives, then 

$$
\operatorname{div} (\operatorname{curl} \mathbf {F}) = \nabla \cdot (\nabla \times \mathbf {F}) = 0.
$$

Proof From the definitions of the divergence and curl, we have 

$$
\begin{array}{l} \operatorname{div} (\operatorname{curl} \mathbf {F}) = \nabla \cdot (\nabla \times \mathbf {F}) \\ \qquad = \frac {\partial}{\partial x} \left(\frac {\partial P}{\partial y} - \frac {\partial N}{\partial z}\right) + \frac {\partial}{\partial y} \left(\frac {\partial M}{\partial z} - \frac {\partial P}{\partial x}\right) + \frac {\partial}{\partial z} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) \\ \qquad = \frac {\partial^ {2} P}{\partial x \partial y} - \frac {\partial^ {2} N}{\partial x \partial z} + \frac {\partial^ {2} M}{\partial y \partial z} - \frac {\partial^ {2} P}{\partial y \partial x} + \frac {\partial^ {2} N}{\partial z \partial x} - \frac {\partial^ {2} M}{\partial z \partial y} \\ \qquad = 0, \end{array}
$$

![[50494d2957681130c3f58390df5f3759e90b0ee4aca23956f300030697a443bc.jpg|image]]



FIGURE 15.75 We prove the Divergence Theorem for the kind of threedimensional region shown here.


![[650359553306e4060c8b2b83c5d4949dd2010907c6f220fdab5ff251fa0b04f0.jpg|image]]



FIGURE 15.76 The components of n are the cosines of the angles α, $\beta ,$ and γ that it makes with i, j, and k.


because the mixed second partial derivatives cancel by the Mixed Derivative Theorem in Section 13.3. 

Theorem 9 has some interesting applications. If a vector field G = curl F, then the field G must have divergence 0. Saying this another way, if div $\mathbf { G } \neq 0$ , then G cannot be the curl of any vector field F having continuous second partial derivatives. Moreover, if $\mathbf { G } = \mathrm { c u r l } \mathbf { F } .$ , then the outward flux of G across any closed surface S is zero by the corollary to the Divergence Theorem, provided the conditions of the theorem are satisfied. So if there is a closed surface for which the surface integral of the vector field G is nonzero, we can conclude that G is not the curl of some vector field F. 

## Proof of the Divergence Theorem for Special Regions

To prove the Divergence Theorem, we take the components of ${ \bf F } = M { \bf i } + N { \bf j } + P { \bf k }$ to have continuous first partial derivatives. We first assume that D is a convex region with no holes or bubbles, such as a solid ball, cube, or ellipsoid, and that S is a piecewise smooth surface. In addition, we assume that any line perpendicular to the xy-plane at an interior point of the region $R _ { x y }$ that is the projection of D on the xy-plane intersects the surface S in exactly two points, producing surfaces 

$$
\begin{array}{l l} S _ {1} \colon & z = f _ {1} (x, y), \qquad (x, y) \text { in } R _ {x y} \\ S _ {2} \colon & z = f _ {2} (x, y), \qquad (x, y) \text { in } R _ {x y}, \end{array}
$$

with $f _ { 1 } \leq f _ { 2 }$ . We make similar assumptions about the projection of D onto the other coordinate planes. See Figure 15.75, which illustrates these assumptions. 

The components of the unit normal vector $\mathbf { \delta n } = n _ { 1 } \mathbf { i } + n _ { 2 } \mathbf { j } + n _ { 3 } \mathbf { k }$ are the cosines of the angles $\alpha , \beta ,$ and γ that n makes with i, j, and k (Figure 15.76). This is true because all the vectors involved are unit vectors, giving the direction cosines 

$$
\begin{array}{l} n _ {1} = \mathbf {n} \cdot \mathbf {i} = | \mathbf {n} | | \mathbf {i} | \cos \alpha = \cos \alpha \\ n _ {2} = \mathbf {n} \cdot \mathbf {j} = | \mathbf {n} | | \mathbf {j} | \cos \beta = \cos \beta \\ n _ {3} = \mathbf {n} \cdot \mathbf {k} = | \mathbf {n} | | \mathbf {k} | \cos \gamma = \cos \gamma . \end{array}
$$

Thus the unit normal vector is given by 

$$
\mathbf {n} = (\cos \alpha) \mathbf {i} + (\cos \beta) \mathbf {j} + (\cos \gamma) \mathbf {k},
$$

and 

$$
\mathbf {F} \cdot \mathbf {n} = M \cos \alpha + N \cos \beta + P \cos \gamma .
$$

In component form, the Divergence Theorem states that 

$$
\iint_ {S} \underbrace {(M \cos \alpha + N \cos \beta + P \cos \gamma)} _ {\mathbf {F} \cdot \mathbf {n}} d \sigma = \iiint_ {D} \left(\underbrace {\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y} + \frac {\partial P}{\partial z}} _ {\operatorname{div} \mathbf {F}}\right) d x   d y   d z.
$$

We prove the theorem by establishing the following three equations: 

$$
\iint_ {S} M \cos \alpha d \sigma = \iiint_ {D} \frac {\partial M}{\partial x} d x d y d z\tag{3}
$$

$$
\iint_ {S} N \cos \beta d \sigma = \iiint_ {D} \frac {\partial N}{\partial y} d x d y d z\tag{4}
$$

$$
\iint_ {S} P \cos \gamma d \sigma = \iiint_ {D} \frac {\partial P}{\partial z} d x d y d z\tag{5}
$$

![[72824f1c01637c6dc7bf6aed9ad61a2114de98c06fce42567e810f6c5bc86979.jpg|image]]



FIGURE 15.77 The region D enclosed by the surfaces $S _ { 1 }$ and $S _ { 2 }$ projects vertically onto $R _ { x y }$ in the xy-plane.


![[e9587b7786f964793b7c4b9a488f90dff16820e56499f60de80ed2901e09cb92.jpg|image]]


FIGURE 15.78 An enlarged view of the area patches in Figure 15.77. The relations dσ γ= ±dx dy cos come from Eq. (7) in Section 15.5 with $F = \mathbf { F } \cdot \mathbf { n }$ 

![[9cd6cd021a6843c0038637cac69b2e99cd6ce4fe107493f448f4557e940634be.jpg|image]]



FIGURE 15.79 The lower half of the solid region between two concentric spheres.


Proof of Equation (5) We prove Equation (5) by converting the surface integral on the left to a double integral over the projection $R _ { x y }$ of D on the xy-plane (Figure 15.77). The surface S consists of an upper part $S _ { 2 }$ whose equation is $z = f _ { 2 } ( x , y )$ and a lower part $S _ { 1 }$ whose equation is $z = f _ { 1 } ( x , y )$ .  On $S _ { 2 }$ ,  the outer normal n has a positive k-component and 

$$
\cos \gamma d \sigma = d x d y \quad \text { because } \quad d \sigma = \frac {d A}{| \cos \gamma |} = \frac {d x d y}{\cos \gamma}.
$$

See Figure 15.78. On $S _ { 1 }$ , the outer normal n has a negative k-component and 

$$
\cos \gamma d \sigma = - d x d y.
$$

Therefore, 

$$
\begin{array}{l} \iint_ {S} P \cos \gamma d \sigma = \iint_ {S _ {2}} P \cos \gamma d \sigma + \iint_ {S _ {1}} P \cos \gamma d \sigma \\ = \iint_ {R _ {x y}} P (x, y, f _ {2} (x, y)) d x d y - \iint_ {R _ {x y}} P (x, y, f _ {1} (x, y)) d x d y \\ = \iint_ {R _ {x y}} [ P (x, y, f _ {2} (x, y)) - P (x, y, f _ {1} (x, y)) ] d x d y \\ = \iint_ {R _ {x y}} \left[ \int_ {f _ {1} (x, y)} ^ {f _ {2} (x, y)} \frac {\partial P}{\partial z} d z \right] d x d y = \iiint_ {D} \frac {\partial P}{\partial z} d z d x d y. \end{array}
$$

This proves Equation (5). The proofs for Equations (3) and (4) follow the same pattern; just permute $x , y , z ; M , N , P ; \alpha , \beta , \gamma .$ , in order, and get those results from Equation (5). This proves the Divergence Theorem for these special regions. 

## Divergence Theorem for Other Regions

The Divergence Theorem can be extended to regions that can be partitioned into a finite number of simple regions of the type just discussed and to regions that can be defined as limits of simpler regions in certain ways. For an example of one step in such a splitting process, suppose that $D$ is the region between two concentric spheres and that F has continuously differentiable components throughout $D$ and on the bounding surfaces. Split D by an equatorial plane and apply the Divergence Theorem to each half separately. The bottom half, $D _ { 1 }$ ,  is shown in Figure 15.79. The surface $S _ { 1 }$ that bounds $D _ { 1 }$ consists of an outer hemisphere, a plane washer-shaped base, and an inner hemisphere. The Divergence Theorem says that 

$$
\iint_ {S _ {1}} \mathbf {F} \cdot \mathbf {n} _ {1} d \sigma = \iiint_ {D _ {1}} \nabla \cdot \mathbf {F} d V.\tag{6}
$$

The unit normal ${ \bf n } _ { 1 }$ that points outward from $D _ { 1 }$ points away from the origin along the outer surface, equals k along the flat base, and points toward the origin along the inner surface. Next apply the Divergence Theorem to $D _ { 2 }$ and its surface $S _ { 2 }$ (Figure 15.80): 

$$
\iint_ {S _ {2}} \mathbf {F} \cdot \mathbf {n} _ {2} d \sigma = \iiint_ {D _ {2}} \nabla \cdot \mathbf {F} d V.\tag{7}
$$

As we follow $\mathbf { n } _ { 2 }$ over $S _ { 2 }$ , pointing outward from $D _ { 2 }$ , we see that $\mathbf { n } _ { 2 }$ equals −k along the washer-shaped base in the xy-plane, points away from the origin on the outer sphere, and points toward the origin on the inner sphere. When we add Equations (6) and (7), the integrals over the flat base cancel because of the opposite signs of ${ \bf n } _ { 1 }$ and $\mathbf { n } _ { 2 }$ . We thus arrive at the result 

![[fa8f0286bf38662c3c93eac687caaa9e7dfa0d103ef2abbf4f65480605644557.jpg|image]]



FIGURE 15.80 The upper half of the solid region between two concentric spheres.


![[1d526b68bd60a46d2827ab6e776953e8bbd60b9eff1c679e98eb8e8b5fefa9cc.jpg|image]]



FIGURE 15.81 Two concentric spheres in an expanding vector field. The outer sphere $S _ { a }$ surrounds the inner sphere $S _ { b } .$


$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iiint_ {D} \nabla \cdot \mathbf {F} d V,
$$

with D the region between the spheres, S the boundary of D consisting of two spheres, and n the unit normal to S directed outward from D. 

**EXAMPLE 5** Find the net outward flux of the field 

$$
\mathbf {F} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{\rho^ {3}}, \quad \rho = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}}\tag{8}
$$

across the boundary of the region D: $0 < b ^ { 2 } \leq x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq a ^ { 2 }$ (Figure 15.81). 

**Solution** The flux can be calculated by integrating $\nabla$ ⋅ F over D. Note that $\rho \neq 0$ in D. We have 

$$
\frac {\partial \rho}{\partial x} = \frac {1}{2} (x ^ {2} + y ^ {2} + z ^ {2}) ^ {- 1 / 2} (2 x) = \frac {x}{\rho}
$$

and 

$$
\frac {\partial M}{\partial x} = \frac {\partial}{\partial x} (x \rho^ {- 3}) = \rho^ {- 3} - 3 x \rho^ {- 4} \frac {\partial \rho}{\partial x} = \frac {1}{\rho^ {3}} - \frac {3 x ^ {2}}{\rho^ {5}}.
$$

Similarly, 

$$
\frac {\partial N}{\partial y} = \frac {1}{\rho^ {3}} - \frac {3 y ^ {2}}{\rho^ {5}} \quad \text { and } \quad \frac {\partial P}{\partial z} = \frac {1}{\rho^ {3}} - \frac {3 z ^ {2}}{\rho^ {5}}.
$$

Hence, 

$$
\operatorname{div} \mathbf {F} = \frac {\partial M}{\partial x} + \frac {\partial N}{\partial y} + \frac {\partial P}{\partial z} = \frac {3}{\rho^ {3}} - \frac {3}{\rho^ {5}} (x ^ {2} + y ^ {2} + z ^ {2}) = \frac {3}{\rho^ {3}} - \frac {3 \rho^ {2}}{\rho^ {5}} = 0.
$$

So the net outward flux of F across the boundary of D is zero by the corollary to the Divergence Theorem. There is more to learn about this vector field F, though. The flux leaving D across the inner sphere $S _ { b }$ is the negative of the flux leaving D across the outer sphere $S _ { a }$ (because the sum of these fluxes is zero). Hence, the flux of F across $S _ { b }$ in the direction away from the origin equals the flux of F across $S _ { a }$ in the direction away from the origin. Thus, the flux of F across a sphere centered at the origin is independent of the radius of the sphere. What is this flux? 

To find it, we evaluate the flux integral directly for an arbitrary sphere $S _ { a } .$ . The outward unit normal on the sphere of radius a is 

$$
\mathbf {n} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{\sqrt {x ^ {2} + y ^ {2} + z ^ {2}}} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{a}.
$$

Hence, on the sphere, 

$$
\mathbf {F} \cdot \mathbf {n} = \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{a ^ {3}} \cdot \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{a} = \frac {x ^ {2} + y ^ {2} + z ^ {2}}{a ^ {4}} = \frac {a ^ {2}}{a ^ {4}} = \frac {1}{a ^ {2}}
$$

and 

$$
\iint_ {S _ {a}} \mathbf {F} \cdot \mathbf {n} d \sigma = \frac {1}{a ^ {2}} \iint_ {S _ {a}} d \sigma = \frac {1}{a ^ {2}} (4 \pi a ^ {2}) = 4 \pi .
$$

The outward flux of F in Equation (8) across any sphere centered at the origin is $4 \pi$ This result does not contradict the Divergence Theorem because F is not continuous at the origin. 

![[207daa4a87e7e4c60f9264d1a4ef653c3aeafd35f70e2d61d608031bbee7f3fd.jpg|image]]



FIGURE 15.82 A sphere $S _ { a }$ surrounding another surface S. The tops of the surfaces are removed for visualization.


![[bbe04a21bbe66efe4001683b17557ebc0a31ce39a8027335e3ca424952caa10e.jpg|image]]



FIGURE 15.83 The fluid that flows upward through the patch $\Delta \sigma$ in a short time $\Delta t$ fills a “cylinder” whose volume is approximately base height× = v n⋅ Δσ $\Delta t .$


## Gauss’s Law: One of the Four Great Laws of Electromagnetic Theory

In electromagnetic theory, the electric field created by a point charge q located at the origin is 

$$
\mathbf {E} (x, y, z) = \frac {1}{4 \pi \varepsilon_ {0}} \frac {q}{| \mathbf {r} | ^ {2}} \left(\frac {\mathbf {r}}{| \mathbf {r} |}\right) = \frac {q}{4 \pi \varepsilon_ {0}} \frac {\mathbf {r}}{| \mathbf {r} | ^ {3}} = \frac {q}{4 \pi \varepsilon_ {0}} \frac {x \mathbf {i} + y \mathbf {j} + z \mathbf {k}}{\rho^ {3}},
$$

where $\varepsilon _ { 0 }$ is a physical constant, r is the position vector of the point $( x , y , z )$ , and $\rho = | \mathbf { r } | = { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ . From Equation (8), 

$$
\mathbf {E} = \frac {q}{4 \pi \varepsilon_ {0}} \mathbf {F}.
$$

The calculations in Example 5 show that the outward flux of E across any sphere centered at the origin is $q / \varepsilon _ { 0 }$ , but this result is not confined to spheres. The outward flux of E across any closed surface S that encloses the origin (and to which the Divergence Theorem applies) is also $q / \varepsilon _ { 0 } .$ To see why, we have only to imagine a large sphere $S _ { a }$ centered at the origin and enclosing the surface S (see Figure 15.82). Because 

$$
\nabla \cdot \mathbf {E} = \nabla \cdot \frac {q}{4 \pi \varepsilon_ {0}} \mathbf {F} = \frac {q}{4 \pi \varepsilon_ {0}} \nabla \cdot \mathbf {F} = 0
$$

when $\rho > 0$ , the triple integral of $\nabla \cdot \mathbf { E }$ over the region D between S and $S _ { a }$ is zero. Hence, by the Divergence Theorem, 

$$
\iint \limits_{\substack{\text{Boundary}\\ \text{of} D}}\mathbf{E}\cdot \mathbf{n}  d\sigma   =   0.
$$

So the flux of E across S in the direction away from the origin must be the same as the flux of E across $S _ { a }$ in the direction away from the origin, which is $q / \varepsilon _ { 0 }$ .  This statement, called Gauss’s law, also applies to charge distributions that are more general than the one assumed here, as shown in most physics texts. For any closed surface that encloses the origin, we have 

$$
\text { Gauss's   law: } \iint_ {S} \mathbf {E} \cdot \mathbf {n}   d \sigma = \frac {q}{\varepsilon_ {0}}.
$$

## Continuity Equation of Hydrodynamics

Let D be a region in space bounded by a closed oriented surface $S . \operatorname { I f } \mathbf { v } ( x , y , z )$ is the velocity field of a fluid flowing smoothly through D, $\delta = \delta ( t , x , y , z )$ is the fluid’s density at $( x , y , z )$ at time $t ,$ and $\mathbf { F } = \delta \mathbf { v }$ , then the continuity equation of hydrodynamics states that 

$$
\nabla \cdot \mathbf {F} + \frac {\partial \delta}{\partial t} = 0.
$$

If the functions involved have continuous first partial derivatives, the equation evolves naturally from the Divergence Theorem, as we now demonstrate. 

First, the integral 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma
$$

is the rate at which mass leaves D across S (leaves because n is the outer normal). To see why, consider a patch of area $\Delta \sigma$ on the surface (Figure 15.83). In a short time interval $\Delta t ,$ the volume $\Delta V$ of fluid that flows across the patch is approximately equal to the volume of a cylinder with base area $\Delta \sigma$ and height $( { \bf v } \Delta t ) \cdot { \bf n } .$ , where v is a velocity vector rooted at a point of the patch: 

$$
\Delta V \approx \mathbf {v} \cdot \mathbf {n} \Delta \sigma \Delta t.
$$

The mass of this volume of fluid is about 

$$
\Delta m \approx \delta \mathbf {v} \cdot \mathbf {n} \Delta \sigma \Delta t,
$$

so the rate at which mass is flowing out of D across the patch is about 

$$
\frac {\Delta m}{\Delta t} \approx \delta \mathbf {v} \cdot \mathbf {n} \Delta \sigma .
$$

This leads to the approximation 

$$
\frac {\sum \Delta m}{\Delta t} \approx \sum \delta \mathbf {v} \cdot \mathbf {n} \Delta \sigma
$$

as an estimate of the average rate at which mass flows across S. Finally, letting $\Delta \sigma  0$ and $\Delta t \to 0$ gives the instantaneous rate at which mass leaves D across S as 

$$
\frac {d m}{d t} = \iint_ {S} \delta \mathbf {v} \cdot \mathbf {n} d \sigma ,
$$

which for our particular flow is 

$$
\frac {d m}{d t} = \iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma .
$$

Now let B be a solid sphere centered at a point Q in the flow. The average value of $\nabla \cdot \mathbf { F }$ over B is 

$$
\frac {1}{\text { volume   of } B} \iiint_ {B} \nabla \cdot \mathbf {F} d V.
$$

It is a consequence of the continuity of the divergence that $\nabla \cdot \mathbf { F }$ actually takes on this value at some point P in B. Thus, by the Divergence Theorem Equation (2), 

$$
\begin{array}{l} (\nabla \cdot \mathbf {F}) (P) = \frac {1}{\text { volume   of } B} \iiint_ {B} \nabla \cdot \mathbf {F} d V = \frac {\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma}{\text { volume   of } B} \\ = \frac {\text { rate   at   which   mass   leaves } B \text { across   its   surface } S}{\text { volume   of } B}. \end{array}\tag{9}
$$

The last term of the equation describes decrease in mass per unit volume. 

Now let the radius of B approach zero while the center Q stays fixed. The left side of Equation (9) converges to $( \nabla \cdot \mathbf { F } ) _ { Q }$ , and the right side converges to $\left( - \partial \delta / \partial t \right) _ { Q }$ , since $\delta = m / V .$ The equality of these two limits is the continuity equation 

$$
\nabla \cdot \mathbf {F} = - \frac {\partial \delta}{\partial t}.
$$

The continuity equation “explains” ∇ ⋅ F: The divergence of F at a point is the rate at which the density of the fluid is decreasing there. The Divergence Theorem 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iiint_ {D} \nabla \cdot \mathbf {F} d V
$$

now says that the net decrease in density of the fluid in region D (divergence integral) is accounted for by the mass transported across the surface S (outward flux integral). So, the theorem is a statement about conservation of mass (Exercise 35). 

## Unifying the Integral Theorems

If we think of a two-dimensional field $\mathbf { F } = M ( x , y ) \mathbf { i } + N ( x , y ) \mathbf { j }$ as a three-dimensional field whose k-component is zero, then $\nabla \cdot \mathbf { F } = ( \partial M / \partial x ) + ( \partial N / \partial y )$ , and the normal form of Green’s Theorem can be written as 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {n} d s = \iint_ {R} \left(\frac {\partial M}{\partial x} + \frac {\partial N}{\partial y}\right) d x d y = \iint_ {R} \nabla \cdot \mathbf {F} d A.
$$

Similarly, $( \nabla \times \mathbf { F } ) \cdot \mathbf { k } = \left( \partial N / \partial x \right) - \left( \partial M / \partial y \right)$ , so the tangential form of Green’s Theorem can be written as 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {T} d s = \iint_ {R} \left(\frac {\partial N}{\partial x} - \frac {\partial M}{\partial y}\right) d x d y = \iint_ {R} (\nabla \times \mathbf {F}) \cdot \mathbf {k} d A.
$$

With the equations of Green’s Theorem expressed in del notation, we can see their relationships to the equations in Stokes’ Theorem and the Divergence Theorem, all summarized here. 

Green’s Theorem and Its Generalization to Three Dimensions 

Tangential form of Green’s Theorem: 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {T} d s = \iint_ {R} (\nabla \times \mathbf {F}) \cdot \mathbf {k} d A
$$

Stokes’ Theorem: 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {T} d s = \iint_ {S} (\nabla \times \mathbf {F}) \cdot \mathbf {n} d \sigma
$$

Normal form of Green’s Theorem: 

$$
\oint_ {C} \mathbf {F} \cdot \mathbf {n} d s = \iint_ {R} \nabla \cdot \mathbf {F} d A
$$

Divergence Theorem: 

$$
\iint_ {S} \mathbf {F} \cdot \mathbf {n} d \sigma = \iiint_ {D} \nabla \cdot \mathbf {F} d V
$$

Notice how Stokes’ Theorem generalizes the tangential (curl) form of Green’s Theorem from a flat surface in the plane to a surface in three-dimensional space. In each case, the surface integral of curl F over the interior of the oriented surface equals the circulation of F around the boundary. 

Likewise, the Divergence Theorem generalizes the normal (flux) form of Green’s Theorem from a two-dimensional region in the plane to a three-dimensional region in space. In each case, the integral of ∇ ⋅ F over the interior of the region equals the total flux of the field across the boundary enclosing the region. 

All these results can be thought of as forms of a single fundamental theorem. The Fundamental Theorem of Calculus in Section 5.4 says that if f(x) is differentiable on $( a , b )$ and continuous on [ ]a b, , then 

$$
\int_ {a} ^ {b} \frac {d f}{d x} d x = f (b) - f (a).
$$

![[496e37098cccf948f294cebb9099b3152d62ce69e3b4f5d05c397e81a2ce3a11.jpg|image]]



FIGURE 15.84 The outward unit normals at the boundary of $[ a , b ]$ in one-dimensional space.


If we let $\mathbf { F } = f ( x ) { \mathbf { i } }$ throughout $[ a , b ]$ , then $d f / d x = \nabla \cdot { \bf F }$ . If we define the unit vector field n normal to the boundary of $[ a , b ]$ to be i at b and −i at a (Figure 15.84), then 

$$
\begin{array}{l} f (b) - f (a) = f (b) \mathbf {i} \cdot (\mathbf {i}) + f (a) \mathbf {i} \cdot (- \mathbf {i}) \\ \qquad = \mathbf {F} (b) \cdot \mathbf {n} + \mathbf {F} (a) \cdot \mathbf {n} \\ \qquad = \text { total   outward   flux   of   F   across   the   boundary   of } [ a, b ]. \end{array}
$$

The Fundamental Theorem now says that 

$$
\mathbf {F} (b) \cdot \mathbf {n} + \mathbf {F} (a) \cdot \mathbf {n} = \int_ {[ a, b ]} \nabla \cdot \mathbf {F} d x.
$$

The Fundamental Theorem of Calculus, the normal form of Green’s Theorem, and the Divergence Theorem all say that the integral of the differential operator ∇ ⋅ operating on a field F over a region equals the sum of the normal field components over the boundary enclosing the region. (Here we are interpreting the line integral in Green’s Theorem and the surface integral in the Divergence Theorem as “sums” over the boundary.) 

Stokes’ Theorem and the tangential form of Green’s Theorem say that, when things are properly oriented, the surface integral of the differential operator $\nabla \times$ operating on a field equals the sum of the tangential field components over the boundary of the surface. 

The beauty of these interpretations is the observance of a single unifying principle, which we can state as follows. 

## A Unifying Fundamental Theorem of Vector Integral Calculus

The integral of a differential operator acting on a field over a region equals the sum of the field components appropriate to the operator over the boundary of the region. 

## EXERCISES 15.8

## Calculating Divergence

In Exercises 1–8, find the divergence of the field. 

1. F = − + + + − + + − ( ) ( ) ( ) x y z x y z x y z i j k 2 3 2 2 

2. $\mathbf { F } = ( x \ln y ) \mathbf { i } + ( y \ln z ) \mathbf { j } + ( z \ln x ) \mathbf { k }$ 

3. $\mathbf { F } = y e ^ { x y z } { \mathbf { i } } + z e ^ { x y z } { \mathbf { j } } + x e ^ { x y z } { \mathbf { k } }$ 

4. $\mathbf { F } = \sin ( x y ) \mathbf { i } + \cos ( y z ) \mathbf { j } + \tan ( x z ) \mathbf { k }$ 

5. The spin field in Figure 15.13 

6. The radial field in Figure 15.12 

7. The gravitational field in Figure 15.9 and Exercise 38a in Section 15.3 

8. The velocity field ${ \bf v } ( x , y , z ) = ( a ^ { 2 } - x ^ { 2 } - y ^ { 2 } ) $ )k in Figure 15.14 

Calculating Flux Using the Divergence Theorem 

In Exercises 9–20, use the Divergence Theorem to find the outward flux of F across the boundary of the region D. 

9. Cube $\mathbf { F } = ( y - x ) \mathbf { i } + ( z - y ) \mathbf { j } + ( y - x ) \mathbf { k }$ D: The cube bounded by the planes $x = \pm 1 , y = \pm 1 ,$ , and z = ±1 

10. $\mathbf { F } = x ^ { 2 } \mathbf { i } + y ^ { 2 } \mathbf { j } + z ^ { 2 } \mathbf { k }$ 

a. Cube D: The cube cut from the first octant by the planes $x = 1 , y = 1 , \mathrm { a n d } z = 1$ b. Cube D: The cube bounded by the planes x = ± = ±1,  1, and y z = ±1 

c. Cylindrical can D: The region cut from the solid cylinder $x ^ { 2 } + y ^ { 2 } \leq 4$ by the planes z = 0 and $z = 1$ 

11. Cylinder and paraboloid $\mathbf { F } = \mathbf { \mathrm { y } } \mathbf { i } + x \mathbf { \mathrm { y } } \mathbf { j } - z \mathbf { k }$ 

D: The region inside the solid cylinder $x ^ { 2 } + y ^ { 2 } \leq 4$ between the plane z = 0 and the paraboloid $z = x ^ { 2 } + y ^ { 2 }$ 

12. Ball $\mathbf { F } = x ^ { 2 } \mathbf { i } + x z \mathbf { j } + 3 z \mathbf { k }$ D: The ball $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 4$ 

13. Portion of bal $\mathbf { F } = x ^ { 2 } \mathbf { i } - 2 x y \mathbf { j } + 3 x z \mathbf { k }$ 

D: The region cut from the first octant by the ball $x ^ { 2 } + y ^ { 2 } +$ $z ^ { 2 } = 4$ 

14. Cylindrical can $\mathbf { F } = ( 6 x ^ { 2 } + 2 x y ) \mathbf { i } + \left( 2 y + x ^ { 2 } z \right) \mathbf { j } + 4 x ^ { 2 } y ^ { 3 } \mathbf { k }$ D: The region cut from the first octant by the cylinder $x ^ { 2 } + y ^ { 2 } = 4 $ and the plane z = 3 

15. Wedge $\mathbf { F } = 2 x z \mathbf { i } - x y \mathbf { j } - z ^ { 2 } \mathbf { k }$ D: The wedge cut from the first octant by the plane $y + z = 4$ and the elliptic cylinder $\ x ^ { 2 } + y ^ { 2 } = 1 6$ 

$$
\mathbf {F} = x ^ {3} \mathbf {i} + y ^ {3} \mathbf {j} + z ^ {3} \mathbf {k}
$$

$$
x ^ {2} + y ^ {2} + z ^ {2} \leq a ^ {2}
$$

17. Thick sphere $\mathbf { F } = { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } } ( x \mathbf { i } + y \mathbf { j } + z \mathbf { k } )$ D: The region $1 \leq x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 2$ 

18. Thick sphere $\mathbf { F } = ( x \mathbf { i } + y \mathbf { j } + z \mathbf { k } ) { \Big / } { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ D: The region $1 \leq x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 4$ 

19. Thick sphere ${ \bf F } = ( 5 x ^ { 3 } + 1 2 x y ^ { 2 } ) { \bf i } + ( y ^ { 3 } + e ^ { y } \sin z ) { \bf j } +$ $( 5 z ^ { 3 } + e ^ { y } \cos z ) \mathbf { k }$ D: The solid region between the spheres $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1$ and $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 2$ 

20. Thick cylinder $\mathbf { F } = \ln ( x ^ { 2 } + y ^ { 2 } ) \mathbf { i } - \left( { \frac { 2 z } { x } } \arctan { \frac { y } { x } } \right) \mathbf { j } +$ $z { \sqrt { x ^ { 2 } + y ^ { 2 } } } \mathbf { k }$ D: The thick-walled cylinder $1 \leq x ^ { 2 } + y ^ { 2 } \leq 2 , - 1 \leq z \leq 2$ 

## Theory and Examples

21. a. Show that the outward flux of the position vector field F = xi j k+ +y z through a smooth closed surface S is three times the volume of the region enclosed by the surface. 

b. Let n be the outward unit normal vector field on S. Show that it is not possible for F to be orthogonal to n at every point of S. 

22. The base of the closed cubelike surface shown here is the unit square in the xy-plane. The four sides lie in the planes $x = 0 ,$ $x = 1 , y = 0 , \mathrm { a n d } y = 1$ . The top is an arbitrary smooth surface whose identity is unknown. $\operatorname { L e t } \mathbf { F } = x \mathbf { i } - 2 y \mathbf { j } + ( z + 3 ) \mathbf { k }$ , and suppose the outward flux of F through Side A is 1 and through Side $B { \mathrm { ~ i s ~ } } - 3 .$ . Can you conclude anything about the outward flux through the top? Give reasons for your answer. 

![[89e7f0131166bceb0f6c70b5d31b18c7ddf94f9ea46c640ee45ed41f5a8eb004.jpg|image]]


23. Let $\mathbf { F } = \left( y \cos 2 x \right) \mathbf { i } + \left( y ^ { 2 } \sin 2 x \right) \mathbf { j } + ( x ^ { 2 } y + z ) \mathbf { k }$ . Is there a vector field A such that $\mathbf { F } = \nabla \times \mathbf { A } \boldsymbol { ? }$ Explain your answer. 

24. Outward flux of a gradient field Let S be the surface of the portion of the ball $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq a ^ { 2 }$ that lies in the first octant, and let $f ( x , y , z ) = \ln { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } }$ .  Calculate 

$$
\iint_ {S} \nabla f \cdot \mathbf {n}   d \sigma .
$$

$( \nabla f$ ⋅ n is the derivative of $f$ in the direction of outward normal n.) 

25. Let F be a field whose components have continuous first partial derivatives throughout a portion of space containing a region D bounded by a smooth closed surface S. $. \operatorname { I f } | \mathbf { F } | \leq 1$ , can any bound be placed on the size of 

$$
\iiint_ {D} \nabla \cdot \mathbf {F} d V?
$$

Give reasons for your answer. 

26. Maximum flux Among all rectangular boxes defined by the inequalities $0 \leq x \leq a , 0 \leq y \leq b , 0 \leq z \leq 1$ , find the one for which the total flux of $\mathbf { F } = ( - x ^ { 2 } - 4 x y ) \mathbf { i } - 6 y z \mathbf { j } + 1 2 z \mathbf { k }$ outward through the six sides is greatest. What is the greatest flux? 

27. Calculate the net outward flux of the vector field 

$$
\mathbf {F} = x y \mathbf {i} + (\sin x z + y ^ {2}) \mathbf {j} + (e ^ {x y ^ {2}} + x) \mathbf {k}
$$

over the surface S surrounding the region D bounded by the planes $y = 0 , z = 0 , z = 2 - y$ and the parabolic cylinder $z = 1 - x ^ { 2 } .$ 

28. Compute the net outward flux of the vector field $\mathbf F = \widehat { ( x \mathbf i + y \mathbf j + z \mathbf k ) } / ( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } ) ^ { 3 / 2 }$ across the ellipsoid $9 x ^ { 2 } + 4 y ^ { 2 } + 6 z ^ { 2 } = 3 6$ 

29. Let F be a differentiable vector field, and let $g ( x , y , z )$ be a differentiable scalar function. Verify the following identities. 

$$
\nabla \cdot (g \mathbf {F}) = g \nabla \cdot \mathbf {F} + \nabla g \cdot \mathbf {F}
$$

b. $\nabla \times ( g \mathbf { F } ) = g \nabla \times \mathbf { F } + \nabla g \times \mathbf { F }$ 

30. Let $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ be differentiable vector fields, and let a and $b$ be arbitrary real constants. Verify the following identities. 

$$
\nabla \cdot (a \mathbf {F} _ {1} + b \mathbf {F} _ {2}) = a \nabla \cdot \mathbf {F} _ {1} + b \nabla \cdot \mathbf {F} _ {2}
$$

$$
\nabla \times (a \mathbf {F} _ {1} + b \mathbf {F} _ {2}) = a \nabla \times \mathbf {F} _ {1} + b \nabla \times \mathbf {F} _ {2}
$$

$$
\nabla \cdot (\mathbf {F} _ {1} \times \mathbf {F} _ {2}) = \mathbf {F} _ {2} \cdot \nabla \times \mathbf {F} _ {1} - \mathbf {F} _ {1} \cdot \nabla \times \mathbf {F} _ {2}
$$

31. If ${ \bf F } = M { \bf i } + N { \bf j } + P { \bf k }$ is a differentiable vector field, we define the notation $\mathbf { F } \cdot \nabla$ to mean 

$$
M \frac {\partial}{\partial x} + N \frac {\partial}{\partial y} + P \frac {\partial}{\partial z}.
$$

For differentiable vector fields $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ ,  verify the following identities. 

a. ∇ × × = ⋅ ∇ − ⋅ ∇ + ∇ ⋅ − ( ) ( ) ( ) ( ) F F F F F F F F <sub>1 2 2 1 1 2 2 1</sub> (∇ ⋅ F F)<sub>1 2</sub> 

b. $\nabla ( \mathbf { F } _ { 1 } \cdot \mathbf { F } _ { 2 } ) = ( \mathbf { F } _ { 1 } \cdot \nabla ) \mathbf { F } _ { 2 } + ( \mathbf { F } _ { 2 } \cdot \nabla ) \mathbf { F } _ { 1 } + \mathbf { F } _ { 1 } \times ( \nabla \times \mathbf { F } _ { 2 } ) +$ $\mathbf { F } _ { 2 } \times ( \boldsymbol { \nabla } \times \mathbf { F } _ { 1 } )$ 

32. Harmonic functions A function $f ( x , y , z )$ is said to be harmonic in a region D in space if it satisfies the Laplace equation 

$$
\nabla^ {2} f = \nabla \cdot \nabla f = \frac {\partial^ {2} f}{\partial x ^ {2}} + \frac {\partial^ {2} f}{\partial y ^ {2}} + \frac {\partial^ {2} f}{\partial z ^ {2}} = 0
$$

throughout D. 

a. Suppose that f is harmonic throughout a bounded region D enclosed by a smooth surface S and that n is the chosen unit normal vector on S. Show that the integral over S of $\nabla f \cdot \mathbf { n }$ the derivative of f in the direction of n, is zero. 

b. Show that if f is harmonic on $D ,$ then 

$$
\iint_ {S} f \nabla f \cdot \mathbf {n} d \sigma = \iiint_ {D} | \nabla f | ^ {2} d V.
$$

33. Green’s first formula Suppose that $f$ and $g$ are scalar functions with continuous first- and second-order partial derivatives throughout a region D that is bounded by a closed piecewise smooth surface S. Show that 

$$
\iint_ {S} f \nabla g \cdot \mathbf {n} d \sigma = \iiint_ {D} \left(f \nabla^ {2} g + \nabla f \cdot \nabla g\right) d V.\tag{10}
$$

Equation (10) is Green’s first formula. (Hint: Apply the Divergence Theorem to the field $\mathbf { F } = f \nabla g . )$ 

34. Green’s second formula (Continuation of Exercise 33.) Interchange f and $g$ in Equation (10) to obtain a similar formula. Then subtract this formula from Equation (10) to show that 

$$
\iint_ {S} (f \nabla g - g \nabla f) \cdot \mathbf {n} d \sigma = \iiint_ {D} (f \nabla^ {2} g - g \nabla^ {2} f) d V.\tag{11}
$$

This equation is Green’s second formula. 

35. Conservation of mass Let $\mathbf { v } ( t , x , y , z )$ be a continuously differentiable vector field over the region D in space, and let $p ( t , x , y , z )$ be a continuously differentiable scalar function. The variable t represents the time domain. The Law of Conservation of Mass asserts that 

$$
\frac {d}{d t} \iiint_ {D} p (t, x, y, z) d V = - \iint_ {S} p \mathbf {v} \cdot \mathbf {n} d \sigma ,
$$

where S is the surface enclosing $D .$ 

a. Give a physical interpretation of the conservation of mass law if v is a velocity flow field and p represents the density of the fluid at point $( x , y , z )$ at time t. 

b. Use the Divergence Theorem and Leibniz’s Rule, 

$$
\frac {d}{d t} \iiint_ {D} p (t, x, y, z) d V = \iiint_ {D} \frac {\partial p}{\partial t} d V,
$$

to show that the Law of Conservation of Mass is equivalent to the continuity equation, 

$$
\nabla \cdot p \mathbf {v} + \frac {\partial p}{\partial t} = 0.
$$

(In the first term $\nabla \cdot p \mathbf { v } ,$ the variable t is held fixed, and in the second term $\partial p / \partial t$ , it is assumed that the point $( x , y , z )$ in D is held fixed.) 

## CHAPTER 15 Questions to Guide Your Review

1. What are line integrals of scalar functions? How are they evaluated? Give examples. 

4. What is the flow of a vector field along a curve? What is the work done by a vector field moving an object along a curve? How do you calculate the work done? Give examples. 

2. How can you use line integrals to find the centers of mass of springs or wires? Explain. 

3. What is a vector field? What is the line integral of a vector field? What is a gradient field? Give examples. 

8. What is a potential function? Show by example how to find a potential function for a conservative field. 

5. What is the Fundamental Theorem of line integrals? Explain how it is related to the Fundamental Theorem of Calculus. 

7. What is special about path independent fields? 

6. Specify three properties that are special about conservative fields. How can you tell when a field is conservative? 

$$
\frac {\partial T}{\partial t} = K \nabla^ {2} T,
$$

9. What is a differential form? What does it mean for such a form to be exact? How do you test for exactness? Give examples. 

10. What is Green’s Theorem? Discuss how the two forms of Green’s Theorem extend the Net Change Theorem in Chapter 5. 

36. The heat diffusion equation Let $T ( t , x , y , z )$ be a function with continuous second derivatives giving the temperature at time t at the point $( x , y , z )$ of a solid occupying a region D in space. If the solid’s heat capacity and mass density are denoted by the constants c and $\rho ,$ respectively, the quantity $c \rho T$ is called the solid’s heat energy per unit volume. 

J $\mathrm { L e t } - k \nabla T$ denote the energy flux vector. (Here the constant k is called the conductivity.) Assuming the Law of Conservation of Mass with $- k \nabla T = \mathbf { v }$ and $c \rho T = p$ in Exercise 35, derive the diffusion (heat) equation 

where $K = k / ( c \rho ) > 0$ is the diffusivity constant. (Notice that if $T ( t , x )$ represents the temperature at time t at position x in a uniform conducting rod with perfectly insulated sides, then $\nabla ^ { 2 } T = \partial ^ { 2 } T / \partial x ^ { 2 }$ and the diffusion equation reduces to the onedimensional heat equation in Chapter 13’s Additional Exercises.) 

11. How do you calculate the area of a parametrized surface in space? Of an implicitly defined surface $F ( x , y , z ) = 0 ?$ Of the surface that is the graph of $z = f ( x , y ) ?$ Give examples. 

12. How do you integrate a scalar function over a parametrized surface? Over surfaces that are defined implicitly or in explicit form? Give examples. 

13. What is an oriented surface? What is the surface integral of a vector field in three-dimensional space over an oriented surface? How is it related to the net outward flux of the field? Give examples. 

14. What is the curl of a vector field? How can you interpret it? 

15. What is Stokes’ Theorem? Explain how it generalizes Green’s Theorem to three dimensions. 

16. What is the divergence of a vector field? How can you interpret it? 

17. What is the Divergence Theorem? Explain how it generalizes Green’s Theorem to three dimensions. 

18. How are Green’s Theorem, Stokes’ Theorem, and the Divergence Theorem related to the Fundamental Theorem of Calculus for ordinary single integrals? 

## CHAPTER 15 Practice Exercises

## Evaluating Line Integrals

1. The accompanying figure shows two polygonal paths in space joining the origin to the point (1, 1, 1 . Integrate) $f ( x , y , z ) =$ $2 x - 3 y ^ { 2 } - 2 z + 3$ over each path. 

![[3edfc7a0458ddb41ba0b676758b4eb3912c96e695171a00234ecb0aa8b443489.jpg|image]]


![[15f32ea0c5f52eaae20a78377b8ae90671649294129be2c0cae76418734f953a.jpg|image]]



Path 1



Path 2


2. The accompanying figure shows three polygonal paths joining the origin to the point (1, 1, 1 . Integrate) $f ( x , y , z ) = x ^ { 2 } + y - z$ over each path. 

![[1abc588c5f347bfeeabb479157f3bc6c56ea6bfd1351643fff59793936f7d1c9.jpg|image]]


![[c1f50364314a1ae5d58205300fd1e6950af55caf8847e4d080e989e6755b710f.jpg|image]]


3. Integrate $f ( x , y , z ) = \sqrt { x ^ { 2 } + z ^ { 2 } }$ over the circle 

$$
\mathbf {r} (t) = (a \cos t) \mathbf {j} + (a \sin t) \mathbf {k}, \quad 0 \leq t \leq 2 \pi .
$$

4. Integrate $f ( x , y , z ) = \sqrt { x ^ { 2 } + y ^ { 2 } }$ over the involute curve 

$$
\mathbf {r} (t) = (\cos t + t \sin t) \mathbf {i} + (\sin t - t \cos t) \mathbf {j}, \quad 0 \leq t \leq \sqrt {3}.
$$

Evaluate the integrals in Exercises 5 and 6. 

$$
\int_ {(- 1, 1, 1)} ^ {(4, - 3, 0)} \frac {d x + d y + d z}{\sqrt {x + y + z}} \quad 6. \int_ {(1, 1, 1)} ^ {(1 0, 3, 3)} d x - \sqrt {\frac {z}{y}} d y - \sqrt {\frac {y}{z}} d z
$$

7. Integrate ${ \bf F } = - ( y \sin z ) { \bf i } + ( x$ sin $z ) { \bf j } + ( x )$ )zcos aroundk the circle cut from the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 5$ by the plane $z = - 1$ , clockwise as viewed from above. 

8. Integrate $\mathbf { F } = 3 x ^ { 2 } y \mathbf { i } + ( x ^ { 3 } + 1 ) \mathbf { j } + 9 z ^ { 2 } \mathbf { k }$ around the circle cut from the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 9$ by the plane $x = 2$ 

Evaluate the integrals in Exercises 9 and 10. 

9. ∫ 8 sin 8 cos x y dx y x dy − 

C is the square cut from the first quadrant by the lines $x = \pi / 2$ and $y = \pi / 2$ 

10. $\int _ { C } y ^ { 2 } d x + x ^ { 2 } d y$ 

C is the circle $x ^ { 2 } + y ^ { 2 } = 4 .$ 

## Finding and Evaluating Surface Integrals

11. Area of an elliptic region Find the area of the elliptic region cut from the plane $x + y + z = .$ 1 by the cylinder $x ^ { 2 } + y ^ { 2 } = 1$ 

12. Area of a parabolic cap Find the area of the cap cut from the paraboloid $y ^ { 2 } + z ^ { 2 } = 3 x$ by the plane $x = 1$ 

13. Area of a spherical cap Find the area of the cap cut from the top of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1$ by the plane ${ \bar { z } } = { \sqrt { 2 } } / 2$ 

14. a. Hemisphere cut by cylinder Find the area of the surface cut from the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 , z \geq 0 ,$ ,  by the cylinder $x ^ { 2 } + y ^ { 2 } = 2 x$ 

b. Find the area of the portion of the cylinder that lies inside the hemisphere. (Hint: Project onto the xz-plane. Or evaluate the integral $\int h d s ,$ , where h is the altitude of the cylinder and ds is the element of arc length on the circle $x ^ { 2 } + y ^ { 2 } = 2 x$ in the xy-plane.) 

![[19d45b60dfbfcabc8e6940f7bb12bb2e6d63872690623cae94358e060f688735.jpg|image]]


15. Area of a triangle Find the area of the triangle in which the plane $\left( x / a \right) + \left( y / b \right) + \left( z / c \right) = 1 \left( a , b , c > 0 \right)$ intersects the first octant. Check your answer with an appropriate vector calculation. 

16. Parabolic cylinder cut by planes Integrate 

$$
\mathbf {a}. g (x, y, z) = \frac {y z}{\sqrt {4 y ^ {2} + 1}} \quad \mathbf {b}. g (x, y, z) = \frac {z}{\sqrt {4 y ^ {2} + 1}}
$$

over the surface cut from the parabolic cylinder $y ^ { 2 } - z = 1$ by the planes $x = 0 , x = 3 ,$ and $z = 0$ 

17. Circular cylinder cut by planes Integrate $g ( x , y , z ) =$ $x ^ { 4 } y ( y ^ { 2 } + z ^ { 2 } )$ over the portion of the cylinder $y ^ { 2 } + z ^ { 2 } = 2 5$ that lies in the first octant between the planes $x = 0$ and $x = 1$ and above the plane $z = 3$ 

18. Area of Wyoming The state of Wyoming is bounded by the meridians 1 $1 1 ^ { \circ } 3 ^ { \prime }$ and $1 0 4 ^ { \circ } 3 ^ { \prime }$ west longitude and by the circles $4 1 ^ { \circ }$ and $4 5 ^ { \circ }$ north latitude. Assuming that Earth is a sphere of radius $R = 6 3 7 0 { \mathrm { k m } }$ , find the area of Wyoming. 

## Parametrized Surfaces

Find parametrizations for the surfaces in Exercises 19–24. (There are many ways to do these, so your answers may not be the same as those in the back of the text.) 

19. Spherical band The portion of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 3 6$ between the planes $z = - 3$ and $z = 3 \sqrt { 3 }$ 

20. Parabolic cap The portion of the paraboloid $z = - ( x ^ { 2 } + y ^ { 2 } ) / 2$ above the plane $z = - 2$ 

21. Cone The cone $z = 1 + \sqrt { x ^ { 2 } + y ^ { 2 } } , z \leq 3$ 

22. Plane above square The portion of the plane $4 x + 2 y + 4 z =$ 12 that lies above the square $0 \leq x \leq 2 , 0 \leq y \leq 2 ,$ in the first quadrant 

23. Portion of paraboloid The portion of the paraboloid $y = 2 ( x ^ { 2 } + z ^ { 2 } ) , y \leq 2$ ,  that lies above the xy-plane 

24. Portion of hemisphere The portion of the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 1 0 , y \geq 0 ,$ , in the first octant 

25. Surface area Find the area of the surface 

$$
\mathbf {r} (u, v) = (u + v) \mathbf {i} + (u - v) \mathbf {j} + v \mathbf {k},
$$

$$
0 \leq u \leq 1, 0 \leq v \leq 1.
$$

26. Surface integral Integrate $f ( x , y , z ) = x y - z ^ { 2 }$ over the surface in Exercise 25. 

27. Area of a helicoid Find the surface area of the helicoid $\mathbf { r } ( r , \theta ) =$ (r cos $\theta ) \mathbf { i } + ( r \sin \theta ) \mathbf { j } + \theta \mathbf { k } , ~ 0 \leq \theta \leq 2 \pi , ~ 0 \leq r \leq 1 ,$ in the accompanying figure. 

![[989d9852acca1cd7f7ad5450dd54f178e015e83b0917f292edb56db026ae1830.jpg|image]]


28. Surface integral Evaluate the integral $\begin{array} { r } { \int \int _ { S } \sqrt { x ^ { 2 } + y ^ { 2 } + 1 } \ d y } \end{array}$ d , σ where S is the helicoid in Exercise 27. 

## Conservative Fields

Which of the fields in Exercises 29–32 are conservative, and which are not? 

29. $\mathbf { F } = x \mathbf { i } + y \mathbf { j } + z \mathbf { k }$ 

30. $\mathbf { F } = ( x \mathbf { i } + y \mathbf { j } + z \mathbf { k } ) / ( x ^ { 2 } + y ^ { 2 } + z ^ { 2 } ) ^ { 3 / 2 }$ 

31. $\mathbf { F } = x e ^ { y } \mathbf { i } + y e ^ { z } \mathbf { j } + z e ^ { x } \mathbf { k }$ 

32. $\mathbf { F } = ( \mathbf { i } + z \mathbf { j } + y \mathbf { k } ) / ( x + y z )$ 

Find potential functions for the fields in Exercises 33 and 34. 

33. $\mathbf { F } = 2 \mathbf { i } + ( 2 y + z ) \mathbf { j } + ( y + 1 ) \mathbf { k }$ 

34. $\mathbf { F } = ( z \cos x z ) \mathbf { i } + e ^ { y } \mathbf { j } + ( x \cos x z ) \mathbf { k }$ 

Work and Circulation 

In Exercises 35 and 36, find the work done by each field along the paths from (0, 0, 0 to ) (1, 1, 1 in Exercise 1. ) 

35. F = + + 2xy x i j k2 

36. F = + + 2xy x i j k 2 

37. Finding work in two ways Find the work done by 

$$
\mathbf {F} = \frac {x \mathbf {i} + y \mathbf {j}}{\left(x ^ {2} + y ^ {2}\right) ^ {3 / 2}}
$$

over the plane curve r $\mathbf { \ddot { \mathbf { \sigma } } } ( t ) = ( e ^ { t } \cos t ) \mathbf { i } + ( e ^ { t } \sin t ) \mathbf { j }$ from the point (1, 0 to the point) $( e ^ { 2 \pi } , 0 )$ in two ways: 

a. By using the parametrization of the curve to evaluate the work integral. 

b. By evaluating a potential function for F. 

38. Flow along different paths Find the flow of the field ${ \bf F } =$ $\nabla ( x ^ { 2 } z e ^ { y } )$ 

a. once around the ellipse C in which the plane $x + y + z = 1$ intersects the cylinder $x ^ { 2 } + z ^ { 2 } = 2 5$ , clockwise as viewed from the positive y-axis. 

b. along the curved boundary of the helicoid in Exercise 27 from (1, 0, 0 to ) (1, 0, 2 .π) 

In Exercises 39 and 40, use the curl integral in Stokes’ Theorem to find the circulation of the field F around the curve C in the indicated direction. 

39. Circulation around an ellipse $\mathbf { F } = y ^ { 2 } \mathbf { i } - y \mathbf { j } + 3 z ^ { 2 } \mathbf { k }$ 

C: The ellipse in which the plane $2 x + 6 y - 3 z = 6$ meets the cylinder $x ^ { 2 } + y ^ { 2 } = 1$ , counterclockwise as viewed from above 

40. Circulation around a circle $\mathbf { F } = ( x ^ { 2 } + y ) \mathbf { i } + ( x + y ) \mathbf { j } +$ $( 4 y ^ { 2 } \mathrm { ~ - ~ } z ) \mathbf { k }$ 

C: The circle in which the plane $z = - y$ meets the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 ,$ counterclockwise as viewed from above 

## Masses and Moments

41. Wire with different densities Find the mass of a thin wire lying along the curve $\mathbf { r } ( t ) = { \sqrt { 2 t } } \mathbf { i } + { \sqrt { 2 t } } \mathbf { j } + ( 4 - t ^ { 2 } ) \mathbf { k } , 0 \leq t \leq 1 ,$ if the density at t is $\mathbf { ( a ) } \delta = 3 t$ and $( { \bf b } ) \delta = 1$ 

42. Wire with variable density Find the center of mass of a thin wire lying along the curve ${ \bf r } ( t ) = t \mathbf { i } + 2 t \mathbf { j } + ( 2 / 3 ) t ^ { 3 / 2 } { \bf k } ,$ $0 \leq t \leq 2 ,$ , if the density at t is $\delta = 3 { \sqrt { 5 + t } } .$ 

43. Wire with variable density Find the center of mass and the moments of inertia about the coordinate axes of a thin wire lying along the curve 

$$
\mathbf {r} (t) = t \mathbf {i} + \frac {2 \sqrt {2}}{3} t ^ {3 / 2} \mathbf {j} + \frac {t ^ {2}}{2} \mathbf {k}, \quad 0 \leq t \leq 2,
$$

if the density at t is $\delta = 1 / ( t + 1 )$ 

44. Center of mass of an arch A slender metal arch lies along the semicircle $y = { \sqrt { a ^ { 2 } - x ^ { 2 } } }$ in the xy-plane. The density at the point $( x , y )$ on the arch is $\delta ( x , y ) = 2 a - y . $ Find the center of mass. 

45. Wire with constant density A wire of constant density $\delta = 1$ lies along the curve $\mathbf { r } ( t ) = { \bigl ( } e ^ { t } \cos t { \bigr ) } \mathbf { i } + { \bigl ( } e ^ { t } \sin t { \bigr ) } \mathbf { j } + e ^ { t } \mathbf { k } , 0 \leq$ $t \leq \ln 2 .$ Find z and I .<sub>z</sub> 

46. Helical wire with constant density Find the mass and center of mass of a wire of constant density δ that lies along the helix $\mathbf { r } ( t ) = { \bigl ( } 2 \sin t { \bigr ) } \mathbf { i } + { \bigl ( } 2 \cos t { \bigr ) } \mathbf { j } + 3 t \mathbf { k } , 0 \leq t \leq 2 \pi$ 

47. Inertia and center of mass of a shell Find $I _ { z }$ and the center of mass of a thin shell of density $\delta ( x , y , z ) = z$ cut from the upper portion of the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 2 5$ by the plane $z = 3$ 

48. Moment of inertia of a cube Find the moment of inertia about the z-axis of the surface of the cube cut from the first octant by the planes $x = 1 , y = 1 , \mathrm { a n d } z = 1$ if the density is $\delta = 1$ 

Flux Across a Plane Curve or Surface 

Use Green’s Theorem to find the counterclockwise circulation and outward flux for the fields and curves in Exercises 49 and 50. 

49. Square ${ \bf F } = ( 2 x y + x ) { \bf i } + ( x y - y ) { \bf j }$ 

C: The square bounded by $x = 0 , x = 1 , y = 0 , y = 1$ 

50. Triangle $\mathbf { F } = ( y - 6 x ^ { 2 } ) \mathbf { i } + ( x + y ^ { 2 } ) \mathbf { j }$ 

C: The triangle made by the lines $y = 0 , y = x ,$ , and x = 1 

51. Zero line integral Show that 

$$
\oint_ {C} \ln x \sin y d y - \frac {\cos y}{x} d x = 0
$$

for any closed curve C to which Green’s Theorem applies. 

52. a. Outward flux and area Show that the outward flux of the position vector field $\mathbf { F } = x \mathbf { i } + y \mathbf { j }$ across any closed curve to which Green’s Theorem applies is twice the area of the region enclosed by the curve. 

b. Let n be the outward unit normal vector to a closed curve to which Green’s Theorem applies. Show that it is not possible for F = + x y i j to be orthogonal to n at every point of C. 

In Exercises 53–56, find the outward flux of F across the boundary of D. 

53. Cube $\mathbf { F } = 2 x y \mathbf { i } + 2 y z \mathbf { j } + 2 x z \mathbf { k }$ 

D: The cube cut from the first octant by the planes x = = =1,  1, and  1y z 

54. Spherical cap $\mathbf { F } = x z \mathbf { i } + y z \mathbf { j } + \mathbf { k }$ 

D: The entire surface of the upper cap cut from the ball $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 2 5$ by the plane z = 3 

55. Spherical cap $\mathbf { F } = - 2 x \mathbf { i } - 3 y \mathbf { j } + z \mathbf { k }$ 

D: The upper region cut from the ball $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } \leq 2$ by the paraboloid $z = x ^ { 2 } + y ^ { 2 }$ 

56. Cone and cylinder $\mathbf { F } = ( 6 x + y ) \mathbf { i } - ( x + z ) \mathbf { j } + 4 y z \mathbf { k }$ 

D: The region in the first octant bounded by the cone $z =$ $\sqrt { x ^ { 2 } + y ^ { 2 } }$ ,  the cylinder $x ^ { 2 } + y ^ { 2 } = 1$ , and the coordinate planes 

57. Hemisphere, cylinder, and plane Let S be the surface that is bounded on the left by the hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = a ^ { 2 } , y \leq 0$ 87 in the middle by the cylinder $x ^ { 2 } + z ^ { 2 } = a ^ { 2 } , 0 \leq y \leq a$ ,  and on the right by the plane y a = . Find the flux of $\mathbf { F } = \mathbf { \mathrm { y } } \mathbf { i } + z \mathbf { j } + x \mathbf { k }$ outward across S. 

58. Cylinder and planes Find the outward flux of the field $\mathbf { F } = 3 x z ^ { 2 } \mathbf { i } + y \mathbf { j } - z ^ { 3 } \mathbf { k }$ across the surface of the solid in the first octant that is bounded by the cylinder $x ^ { 2 } + 4 y ^ { 2 } = 1 6$ and the planes y z x= =2 ,  0, and z = 0. 

59. Cylindrical can Use the Divergence Theorem to find the flux of ${ \bf F } = x y ^ { 2 } { \bf i } + x ^ { 2 } y { \bf j } + { }$ yk outward through the surface of the region enclosed by the cylinder $x ^ { 2 } + y ^ { 2 } = 1$ and the planes z = 1 and z = −1. 

60. Hemisphere Find the flux of $\mathbf { F } = ( 3 z + 1 )$ upward across thek hemisphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = a ^ { 2 } , z \geq 0 , ( \mathbf { a } )$ with the Divergence Theorem and (b) by evaluating the flux integral directly. 

## CHAPTER 15 Additional and Advanced Exercises

Finding Areas with Green’s Theorem 

Use the Green’s Theorem area formula in Exercises 15.4 to find the areas of the regions enclosed by the curves in Exercises 1–4. 

1. The limaçon $x = 2 \cos t - \cos 2 t , y = 2 \sin t , 0 \leq t \leq 2 \pi$ 

![[caec64472b22b293fb28f6f1c26d4232f0ceb4236615c24ba087fd4dcfd5e89e.jpg|image]]


2. The deltoid $x = 2 \cos t + \cos 2 t , y = 2 \sin t - \sin 2 t ,$ $0 \leq t \leq 2 \pi$ 

![[2b2a2c6bb48c504fb3e90e1296fa152bb3640775e4ad42174b92aa8eb96da6d1.jpg|image]]


3. The eight curve $x = ( 1 / 2 )$ = sin 2 ,  sin ,t y t $0 \leq t \leq \pi$ (one loop) 

![[dae2d116b0dd7656d2a800f4611c381188c4146d49103dd93f9ea135f4253a91.jpg|image]]


4. The teardrop x = − = ≤ ≤ 2 cos sin 2 ,  sin , 0 2 a t a t y b t t π 

![[ec085ab88164780b24c8b52df7a7648097b08b047aacabdb1612bf4564a57be9.jpg|image]]


## Theory and Applications

5. a. Give an example of a vector field $\mathbf { F } ( x , y , z )$ that has value 0 at only one point and such that curl F is nonzero everywhere. Be sure to identify the point and compute the curl. 

b. Give an example of a vector field $\mathbf { F } ( x , y , z )$ that has value 0 on precisely one line and such that curl F is nonzero everywhere. Be sure to identify the line and compute the curl. 

c. Give an example of a vector field $\mathbf { F } ( x , y , z )$ that has value 0 on a surface and such that curl F is nonzero everywhere. Be sure to identify the surface and compute the curl. 

6. Find all points $( a , b , c )$ on the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = R ^ { 2 }$ where the vector field ${ \bf F } = y z ^ { 2 } { \bf i } + x z ^ { 2 } { \bf j } + 2 x )$ yzk is normal to the surface and $\mathbf { F } ( a , b , c ) \neq \mathbf { 0 } .$ 

7. Find the mass of a spherical shell of radius R such that at each point $( x , y , z )$ on the surface, the mass density $\delta ( x , y , z )$ is its distance to some fixed point $( a , b , c )$ of the surface. 

8. Find the mass of a helicoid 

$$
\mathbf {r} (r, \theta) = (r \cos \theta) \mathbf {i} + (r \sin \theta) \mathbf {j} + \theta \mathbf {k},
$$

$0 \leq r \leq 1 , 0 \leq \theta \leq 2 \pi$ , if the density function is $\delta ( x , y , z ) =$ $2 { \sqrt { x ^ { 2 } + y ^ { 2 } } }$ . See Practice Exercise 27 for a figure. 

9. Among all rectangular regions $0 \leq x \leq a , 0 \leq y \leq b ,$ , find the one for which the total outward flux of $\mathbf { F } = ( x ^ { 2 } + 4 x y ) \mathbf { i } - 6 y \mathbf { j }$ across the four sides is least. What is the least flux? 

10. Find an equation for the plane through the origin such that the circulation of the flow field ${ \bf F } = z { \bf i } + x { \bf j } + { \bf \Omega } .$ yk around the circle of intersection of the plane with the sphere $x ^ { 2 } + y ^ { 2 } + z ^ { 2 } = 4 $ is a maximum. 

11. A string lies along the circle $x ^ { 2 } + y ^ { 2 } = 4 $ from $\left( 2 , 0 \right) \mathrm { t o } \left( 0 , 2 \right)$ in the first quadrant. The density of the string is $\rho ( x , y ) = x y$ 

a. Partition the string into a finite number of subarcs to show that the work done by gravity to move the string straight down to the x-axis is given by 

$$
\text { Work } = \lim _ {n \to \infty} \sum_ {k = 1} ^ {n} g x _ {k} y _ {k} ^ {2} \Delta s _ {k} = \int_ {C} g x y ^ {2} d s,
$$

where $g$ is the gravitational constant. 

b. Find the total work done by evaluating the line integral in part (a). 

c. Show that the total work done equals the work required to move the string’s center of mass ( x y, straight down to the ) x-axis. 

12. A thin sheet lies along the portion of the plane $x + y + z = 1$ in the first octant. The density of the sheet is $\delta ( x , y , z ) = x y$ 

a. Partition the sheet into a finite number of subpieces to show that the work done by gravity to move the sheet straight down to the xy-plane is given by 

$$
\text { Work } = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} g x _ {k} y _ {k} z _ {k} \Delta \sigma_ {k} = \iint_ {S} g x y z d \sigma ,
$$

where $g$ is the gravitational constant. 

b. Find the total work done by evaluating the surface integral in part (a). 

c. Show that the total work done equals the work required to move the sheet’s center of mass ( x y z , , straight down to the) xy-plane. 

13. Archimedes’ principle If an object such as a ball is placed in a liquid, it will either sink to the bottom, float, or sink a certain distance and remain suspended in the liquid. Suppose a fluid has constant weight density w and that the fluid’s surface coincides with the plane $z = 4$ . A spherical ball remains suspended in the fluid and occupies the region $x ^ { 2 } + y ^ { 2 } + ( z - 2 ) ^ { 2 } \leq 1$ 

a. Show that the surface integral giving the magnitude of the total force on the ball due to the fluid’s pressure is 

$$
\text { Force } = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} w (4 - z _ {k}) \Delta \sigma_ {k} = \iint_ {S} w (4 - z) d \sigma .
$$

b. Since the ball is not moving, it is being held up by the buoyant force of the liquid. Show that the magnitude of the buoyant force on the sphere is 

$$
\text { Buoyant   force } = \iint_ {S} w (z - 4) \mathbf {k} \cdot \mathbf {n} d \sigma ,
$$

where n is the outer unit normal at $( x , y , z )$ . This illustrates Archimedes’ principle that the magnitude of the buoyant force on a submerged solid equals the weight of the displaced fluid. 

c. Use the Divergence Theorem to find the magnitude of the buoyant force in part (b). 

14. Fluid force on a curved surface A cone in the shape of the surface $z = \sqrt { x ^ { 2 } + y ^ { 2 } } , 0 \leq z \leq 2 ,$ , is filled with a liquid of constant weight density w. Assuming the xy-plane is “ground level,” show that the total force on the portion of the cone from $z = 1$ to $z = 2$ due to liquid pressure is the surface integral 

$$
F = \iint_ {S} w (2 - z) d \sigma .
$$

Evaluate the integral. 

15. Faraday’s law If $\mathbf { E } ( t , x , y , z )$ and $\mathbf { B } ( t , x , y , z )$ represent the electric and magnetic fields at point $\left( x , y , z \right)$ at time t, a basic principle of electromagnetic theory says that $\nabla \times { \bf { E } } = - { \partial { \bf { B } } } / { \partial t }$ . In this expression $\nabla \times \mathbf { E }$ is computed with t held fixed and $\scriptstyle \partial \mathbf { B } / \partial t$ is calculated with $( x , y , z )$ fixed. Use Stokes’ Theorem to derive Faraday’s law, 

$$
\oint_ {C} \mathbf {E} \cdot d \mathbf {r} = - \frac {\partial}{\partial t} \iint_ {S} \mathbf {B} \cdot \mathbf {n} d \sigma ,
$$

where C represents a wire loop through which current flows counterclockwise with respect to the surface’s unit normal n, giving rise to the voltage 

$$
\oint_ {C} \mathbf {E} \cdot d \mathbf {r}
$$

around C. The surface integral on the right side of the equation is called the magnetic flux, and S is any oriented surface with boundary C. 

15. Let 

$$
\mathbf {F} = - \frac {G m M}{| \mathbf {r} | ^ {3}} \mathbf {r}
$$

be the gravitational force field defined for $\mathbf { r } \neq \mathbf { 0 }$ . Use Gauss’s law in Section 15.8 to show that there is no continuously differentiable vector field H satisfying $\mathbf { F } = \nabla \times \mathbf { H }$ 

17. If $f ( x , y , z )$ and $g ( x , y , z )$ are continuously differentiable scalar functions defined over the oriented surface S with boundary curve C, prove that 

$$
\iint_ {S} (\nabla f \times \nabla g) \cdot \mathbf {n} d \sigma = \oint_ {C} f \nabla g \cdot d \mathbf {r}.
$$

18. Suppose that $\nabla \cdot { \bf F } _ { 1 } = \nabla \cdot { \bf F } _ { 2 }$ and $\nabla \times \mathbf { F } _ { 1 } = \nabla \times \mathbf { F } _ { 2 }$ over a region D enclosed by the oriented surface S with outward unit normal n and that $\mathbf { F } _ { 1 } \cdot \mathbf { n } = \mathbf { F } _ { 2 } \cdot \mathbf { n }$ on S. Prove that $\mathbf { F } _ { 1 } = \mathbf { F } _ { 2 }$ throughout D. 

19. Prove or disprove that if ∇ ⋅ =F 0 and $\nabla \times \mathbf { F } = \mathbf { 0 }$ , then $\mathbf { F } = \mathbf { 0 }$ 

20. Let S be an oriented surface parametrized by $\mathbf { r } ( u , v )$ . Define the notation $d \pmb { \sigma } = \mathbf { r } _ { u } d u \times \mathbf { r } _ { v }$ dυ so that dV is a vector normal to the surface. Also, the magnitude $d { \boldsymbol { \sigma } } = | d { \boldsymbol { \sigma } } |$ is the element of surface area (by Equation 5 in Section 15.5). Derive the identity 

$$
d \sigma = (E G - F ^ {2}) ^ {1 / 2} d u d v,
$$

where 

$$
E = \left| \mathbf {r} _ {u} \right| ^ {2}, F = \mathbf {r} _ {u} \cdot \mathbf {r} _ {v}, \text { and } G = \left| \mathbf {r} _ {u} \right| ^ {2}.
$$

21. Show that the volume V of a region D in space enclosed by the oriented surface S with outward normal n satisfies the identity 

$$
V = \frac {1}{3} \iint_ {S} \mathbf {r} \cdot \mathbf {n} d \sigma ,
$$

where r is the position vector of the point $\left( x , y , z \right) \operatorname { i n } D .$ 

## CHAPTER 15 Technology Application Projects

## Mathematica/Maple Projects

Projects can be found within MyLab Math. 

• Work in Conservative and Nonconservative Force Fields Explore integration over vector fields and experiment with conservative and nonconservative force functions along different paths in the field. 

• How Can You Visualize Green’s Theorem? Explore integration over vector fields and use parametrizations to compute line integrals. Both forms of Green’s Theorem are explored. 

• Visualizing and Interpreting the Divergence Theorem Verify the Divergence Theorem by formulating and evaluating certain divergence and surface integrals. 

# 16 First-Order Differential Equations

Chapter 17 is available online. 

To access this chapter, visit the companion Website. 

![[36d2bdcb1b1a05338f7c8917c637782676cddcad24cf6a35a01d91cf067dd7c9.jpg|image]]


OVERVIEW Many real-world problems, when formulated mathematically, lead to differential equations. We encountered a number of these equations in previous chapters when studying phenomena such as the motion of an object along a straight line, the decay of a radioactive material, the growth of a population, and the cooling of a heated object placed within a medium of lower temperature. 

Section 4.8 introduced diferential equations of the form $d y / d x = f ( x )$ , where f is given and $y$ is an unknown function of x. We learned that when f is continuous over some interval, the general solution $y ( x )$ is found directly by integration, $y = \int f ( x )$ dx  . In Section 7.2 we investigated diferential equations of the form $d y / d x \ : = \ : f ( x , y )$ , where $f$ is a function of both the independent variable x and the dependent variable y. There we learned how to find the general solution for the special case when the diferential equation is separable. In this chapter we further extend our study to include other commonly occurring first-order diferential equations. These diferential equations involve only first derivatives of the unknown function y x( ), and they model phenomena varying from simple electrical circuits to the concentration of a chemical in a container. Diferential equations involving second derivatives are examined in Chapter 17.
