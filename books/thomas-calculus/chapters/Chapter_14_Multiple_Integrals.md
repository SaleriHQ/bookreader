---
title: "Chapter 14: Multiple Integrals"
order: 14
---

# Chapter 14: Multiple Integrals

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

![教材插图](/books/thomas-calculus/assets/8b1797366df7b9ab72ebe30a9f09e6ff8d3aaecc1fd1ccb746c7d92156a30088.jpg)


OVERVIEW In this chapter we define the double integral of a function of two variables $f(x, y)$ over a region in the plane as the limit of approximating Riemann sums. Just as a single integral can represent signed area, so can a double integral represent signed volume. Double integrals can be evaluated using the Fundamental Theorem of Calculus studied in Section 5.4, but now the evaluations are done twice by integrating with respect to each of the variables x and y in turn. Double integrals can be used to find areas of more general regions in the plane than those encountered in Chapter 5. Moreover, just as the Substitution Rule could simplify finding single integrals, we can sometimes use polar coordinates to simplify computing a double integral. We study more general substitutions for evaluating double integrals as well. 

We also define the triple integral of a function of three variables $f(x, y, z)$ over a region in space. Triple integrals can be used to find volumes of still more general regions in space, and their evaluation is like that of double integrals with yet a third evaluation. Cylindrical or spherical coordinates can sometimes be used to simplify the calculation of a triple integral, and we investigate those techniques. Double and triple integrals have a number of applications, such as calculating the average value of a multivariable function, and finding moments and centers of mass.



## 14.1 Double and Iterated Integrals over Rectangles

![教材插图](/books/thomas-calculus/assets/b26e7549f577f834098e13a5d2a64c21ebdd1f1df28ed4d5c0f468823af56654.jpg)



FIGURE 14.1 Rectangular grid partitioning the region R into small rectangles of area $\Delta A_{k} = \Delta x_{k} \Delta y_{k}$ .


In Chapter 5 we defined the definite integral of a function $f(x)$ over an interval $[a, b]$ as a limit of Riemann sums. In this section we extend this idea to define the double integral of a function of two variables $f(x, y)$ over a bounded rectangle $R$ in the plane. The Riemann sums for the integral of a single-variable function $f(x)$ are obtained by partitioning a finite interval into thin subintervals, multiplying the width of each subinterval by the value of $f$ at a point $c_k$ inside that subinterval, and then adding together all the products. A similar method of partitioning, multiplying, and summing is used to construct double integrals as limits of approximating Riemann sums. 

### Double Integrals

We begin our investigation of double integrals by considering the simplest type of planar region, a rectangle. We consider a function $f(x, y)$ defined on a rectangular region R, 

$$
R \colon a \leq x \leq b, c \leq y \leq d.
$$

We subdivide R into small rectangles using a network of lines parallel to the x- and y-axes (Figure 14.1). The lines divide R into n rectangular pieces, where the number of such pieces n gets large as the width and height of each piece gets small. These rectangles form a partition of R. A small rectangular piece of width $\Delta x$ and height $\Delta y$ has area $\Delta A = \Delta x \Delta y$ . If we number the small pieces partitioning $R$ in some order, then their areas are given by numbers $\Delta A_1, \Delta A_2, \ldots, \Delta A_n$ , where $\Delta A_k$ is the area of the $k$ th small rectangle. 


FIGURE 14.2 Approximating solids with rectangular boxes leads us to define the volumes of more general solids as double integrals. The volume of the solid shown here is the double integral of $f(x, y)$ over the base region R.


![教材插图](/books/thomas-calculus/assets/06a6a4fb9429f0ac2bed053090146112f8f5b1bafd4c709331b11bb005cbe300.jpg)


To form a Riemann sum over R, we choose a point $(x_{k}, y_{k})$ in the kth small rectangle, multiply the value of f at that point by the area $\Delta A_{k}$ , and add together the products: 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k}.
$$

Depending on how we pick $(x_{k},y_{k})$ in the $k$ th small rectangle, we may get different values for $S_{n}$ . 

We are interested in what happens to these Riemann sums as the widths and heights of all the small rectangles in the partition of $R$ approach zero. The norm of a partition $P$ , written $||P||$ , is the largest width or height of any rectangle in the partition. If $||P|| = 0.1$ , then all the rectangles in the partition of $R$ have width at most 0.1 and height at most 0.1. Sometimes the Riemann sums converge as the norm of $P$ goes to zero, which is written $||P|| \to 0$ . The resulting limit is then written as 

$$
\lim _ {| | P | | \rightarrow 0} \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k}.
$$

As $||P|| \to 0$ and the rectangles get narrow and short, their number $n$ increases, so we can also write this limit as 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k},
$$

with the understanding that $||P|| \to 0$ , and hence $\Delta A_k \to 0$ , as $n \to \infty$ . 

Many choices are involved in a limit of this kind. The collection of small rectangles is determined by the grid of vertical and horizontal lines that determine a rectangular partition of R. In each of the resulting small rectangles there is a choice of an arbitrary point $(x_{k}, y_{k})$ at which f is evaluated. These choices together determine a single Riemann sum. To form a limit, we repeat the whole process again and again, choosing partitions whose rectangle widths and heights both go to zero and whose number goes to infinity. 

When a limit of the sums $S_{n}$ exists, giving the same limiting value no matter what choices are made, then the function f is said to be integrable and the limit is called the double integral of f over R, which is written as 

$$
\iint_ {R} f (x, y) d A \quad \text { or } \quad \iint_ {R} f (x, y) d x d y.
$$

It can be shown that if $f(x, y)$ is a continuous function throughout R, then f is integrable, as in the single-variable case discussed in Chapter 5. Many discontinuous functions are also integrable, including functions that are discontinuous only on a finite number of points or smooth curves. We leave the proof of these facts to a more advanced text. 

### Double Integrals as Volumes

When $f(x, y)$ is a positive function over a rectangular region R in the xy-plane, we may interpret the double integral of f over R as the volume of the three-dimensional solid region over the xy-plane bounded below by R and above by the surface $z = f(x, y)$ (Figure 14.2). Each term $f(x_k, y_k) \Delta A_k$ in the sum $S_n = \sum f(x_k, y_k) \Delta A_k$ is the volume of a vertical rectangular box that approximates the volume of the portion of the solid that stands directly above the base $\Delta A_k$ . The sum $S_n$ thus approximates what we want to call the total volume of the solid. We define this volume to be 

$$
\text { Volume } = \lim _ {n \to \infty} S _ {n} = \iint_ {R} f (x, y) d A,
$$

where $\Delta A_{k} \rightarrow 0$ as $n \rightarrow \infty$ . 

![教材插图](/books/thomas-calculus/assets/57fbf007574dc656659cc5e0f3777a5e2c67645e89478c83a373020f258f892c.jpg)



FIGURE 14.4 To obtain the cross-sectional area $A(x)$ , we hold $x$ fixed and integrate with respect to $y$ .


As you might expect, this more general method of calculating volume agrees with the methods in Chapter 6, but we do not prove this here. Figure 14.3 shows Riemann sum approximations to the volume becoming more accurate as the number n of boxes increases. 

![教材插图](/books/thomas-calculus/assets/c14fd2661ae280dede8484707319b8ef9661a53c80c619f12d82a6dbf00f45dd.jpg)



(a) n = 16


![教材插图](/books/thomas-calculus/assets/89b150efeab6a6fb1ae9bf5e906f28ba15ca5143c00aab921432662c90c8b675.jpg)



(b) n = 64


![教材插图](/books/thomas-calculus/assets/7a97cd599aa1410bf9709a11c8d2874944d714ebef8f673ef57f670e1523ae6f.jpg)



(c) n = 256



FIGURE 14.3 As n increases, the Riemann sum approximations approach the total volume of the solid shown in Figure 14.2.


### Fubini's Theorem for Calculating Double Integrals

Suppose that we wish to calculate the volume under the plane z = 4 - x - y over the rectangular region R: $0 \leq x \leq 2$ , $0 \leq y \leq 1$ in the xy-plane. If we apply the method of slicing from Section 6.1, with slices perpendicular to the x-axis (Figure 14.4), then the volume is 

$$
\int_ {x = 0} ^ {x = 2} A (x) d x,\tag{1}
$$

where $A(x)$ is the cross-sectional area at x. For each value of x, we may calculate $A(x)$ as the integral 

$$
A (x) = \int_ {y = 0} ^ {y = 1} (4 - x - y) d y,\tag{2}
$$

which is the area under the curve z = 4 - x - y in the plane of the cross-section at x. In calculating $A(x)$ , x is held fixed and the integration takes place with respect to y. Combining Equations (1) and (2), we see that the volume of the entire solid is 

$$
\begin{array}{l} \text { Volume } = \int_ {x = 0} ^ {x = 2} A (x) d x = \int_ {x = 0} ^ {x = 2} \left(\int_ {y = 0} ^ {y = 1} (4 - x - y) d y\right) d x \\ \qquad = \int_ {x = 0} ^ {x = 2} \left[ 4 y - x y - \frac {y ^ {2}}{2} \right] _ {y = 0} ^ {y = 1} d x = \int_ {x = 0} ^ {x = 2} \left(\frac {7}{2} - x\right) d x \\ \qquad = \left[ \frac {7}{2} x - \frac {x ^ {2}}{2} \right] _ {0} ^ {2} = 5. \end{array}
$$

We often omit parentheses separating the two integrals in the formula above and write 

$$
\text { Volume } = \int_ {0} ^ {2} \int_ {0} ^ {1} (4 - x - y) d y d x.\tag{3}
$$

The expression on the right, called an iterated or repeated integral, says that the volume is obtained by integrating 4 - x - y with respect to y from y = 0 to y = 1 while holding x fixed, and then integrating the resulting expression in x from x = 0 to x = 2. The limits of integration 0 and 1 are associated with y, so they are placed on the integral closest to dy. The other limits of integration, 0 and 2, are associated with the variable x, so they are placed on the outside integral symbol that is paired with dx. 

![教材插图](/books/thomas-calculus/assets/af5f5a49140a8635b93c00109a3d5f6456bc98ab9c91ddaa244538f0457f87a0.jpg)



FIGURE 14.5 To obtain the cross-sectional area $A(y)$ , we hold y fixed and integrate with respect to x.


**HISTORICAL BIOGRAPHY Guido Fubini**

(1879–1943) 

Fubini attended secondary school in Venice, Italy, where he showed that he was brilliant at mathematics. His advanced study was at the Scuola Normale Superiore di Pisa, where his doctoral thesis was in geometry. He then worked on harmonic functions in curved spaces. Fubini's interests were wide ranging, from differential geometry to analysis and to the applications of differential equations. 

To know more, visit the companion Website. 

What would have happened if we had calculated the volume by slicing with planes perpendicular to the y-axis (Figure 14.5)? As a function of y, the typical cross-sectional area is 

$$
A (y) = \int_ {x = 0} ^ {x = 2} (4 - x - y) d x = \left[ 4 x - \frac {x ^ {2}}{2} - x y \right] _ {x = 0} ^ {x = 2} = 6 - 2 y.\tag{4}
$$

The volume of the entire solid is therefore 

$$
\text { Volume } = \int_ {y = 0} ^ {y = 1} A (y) d y = \int_ {y = 0} ^ {y = 1} (6 - 2 y) d y = \left[ 6 y - y ^ {2} \right] _ {0} ^ {1} = 5,
$$

in agreement with our earlier calculation. 

Again, we may give a formula for the volume as an iterated integral by writing 

$$
\text { Volume } = \int_ {0} ^ {1} \int_ {0} ^ {2} (4 - x - y) d x d y.
$$

The expression on the right says we can find the volume by integrating 4 - x - y with respect to x from x = 0 to x = 2 as in Equation (4) and integrating the result with respect to y from y = 0 to y = 1. In this iterated integral, the order of integration is first x and then y, the reverse of the order in Equation (3). 

What do these two volume calculations with iterated integrals have to do with the double integral 

$$
\iint_ {R} (4 - x - y) d A
$$

over the rectangle $R: 0 \leq x \leq 2, 0 \leq y \leq 1$ ? The answer is that both iterated integrals give the value of the double integral. This is what we would reasonably expect, since the double integral measures the volume of the same region as the two iterated integrals. A theorem published in 1907 by Guido Fubini says that the double integral of any continuous function over a rectangle can be calculated as an iterated integral in either order of integration. (Fubini proved his theorem in greater generality, but this is what it says in our setting.) 

**THEOREM 1 – Fubini's Theorem (First Form)**

If $f(x, y)$ is continuous throughout the rectangular region $R: a \leq x \leq b$ , $c \leq y \leq d$ , then 

$$
\iint_ {R} f (x, y) d A = \int_ {c} ^ {d} \int_ {a} ^ {b} f (x, y) d x d y = \int_ {a} ^ {b} \int_ {c} ^ {d} f (x, y) d y d x.
$$

Fubini's Theorem says that double integrals over rectangles can be calculated as iterated integrals. Thus, we can evaluate a double integral by integrating with respect to one variable at a time using the Fundamental Theorem of Calculus. 

Fubini's Theorem also says that we may calculate the double integral by integrating in either order, a genuine convenience. When we calculate a volume by slicing, we may use either planes perpendicular to the $x$ -axis or planes perpendicular to the $y$ -axis. 

**EXAMPLE 1** Calculate $\iint_{R} f(x, y) dA$ for 

$$
f (x, y) = 1 0 0 - 6 x ^ {2} y \quad \text { and } \quad R: 0 \leq x \leq 2, - 1 \leq y \leq 1.
$$

![教材插图](/books/thomas-calculus/assets/d51139d8ddfc25e2cd3a059dc58d7c6f34af5725ef7b899629a52664bb9aaba9.jpg)


$$
\begin{array}{r l} \iint_ {R} f (x, y) d A & = \int_ {- 1} ^ {1} \int_ {0} ^ {2} (1 0 0 - 6 x ^ {2} y) d x d y = \int_ {- 1} ^ {1} \left[ 1 0 0 x - 2 x ^ {3} y \right] _ {x = 0} ^ {x = 2} d y \\ & = \int_ {- 1} ^ {1} (2 0 0 - 1 6 y) d y = \left[ 2 0 0 y - 8 y ^ {2} \right] _ {- 1} ^ {1} = 4 0 0. \end{array}
$$

Reversing the order of integration gives the same answer: 

**Solution** Figure 14.6 displays the volume beneath the surface. By Fubini's Theorem, 

FIGURE 14.6 The double integral $\iint_{R} f(x, y) dA$ gives the volume under this surface over the rectangular region $R$ (Example 1). 

$$
\begin{array}{r l} \int_ {0} ^ {2} \int_ {- 1} ^ {1} (1 0 0 - 6 x ^ {2} y) d y d x & = \int_ {0} ^ {2} \left[ 1 0 0 y - 3 x ^ {2} y ^ {2} \right] _ {y = - 1} ^ {y = 1} d x \\ & = \int_ {0} ^ {2} [ (1 0 0 - 3 x ^ {2}) - (- 1 0 0 - 3 x ^ {2}) ] d x \\ & = \int_ {0} ^ {2} 2 0 0 d x = 4 0 0. \end{array}
$$

![教材插图](/books/thomas-calculus/assets/bbae5a97c55cfc04c98cf20a536b6809e7c70ce7fb4542481c49dd0c25cbd2df.jpg)


**EXAMPLE 2** Find the volume of the region bounded above by the elliptical paraboloid $z = 10 + x^{2} + 3y^{2}$ and below by the rectangle $R: 0 \leq x \leq 1, 0 \leq y \leq 2$ . 

FIGURE 14.7 The double integral $\iint_{R} f(x, y) dA$ gives the volume under this surface over the rectangular region $R$ (Example 2). 

**Solution** The surface and volume are shown in Figure 14.7. The volume is given by the double integral 

$$
\begin{array}{l} V = \iint_ {R} (1 0 + x ^ {2} + 3 y ^ {2}) d A = \int_ {0} ^ {1} \int_ {0} ^ {2} (1 0 + x ^ {2} + 3 y ^ {2}) d y d x \\ = \int_ {0} ^ {1} \left[ 1 0 y + x ^ {2} y + y ^ {3} \right] _ {y = 0} ^ {y = 2} d x \\ = \int_ {0} ^ {1} (2 8 + 2 x ^ {2}) d x = \left[ 2 8 x + \frac {2}{3} x ^ {3} \right] _ {0} ^ {1} = \frac {8 6}{3}. \end{array}
$$

### EXERCISES 14.1

#### Evaluating Iterated Integrals

In Exercises 1–14, evaluate the iterated integral. 

1. $\int_{1}^{2}\int_{0}^{4}2xydydx$ 

2. $\int_0^2\int_{-1}^1 (x - y)dydx$ 

3. $\int_{-1}^{0}\int_{-1}^{1}(x + y + 1)dx dy$ 

4. $\int_0^1\int_0^1\left(1 - \frac{x^2 + y^2}{2}\right)dx dy$ 

5. $\int_0^3\int_0^2 (4 - y^2)dydx$ 

6. $\int_0^3\int_{-2}^0 (x^2 y - 2xy)dydx$ 

$$
\int_ {- 1} ^ {c} \int_ {0} ^ {2} (x y + 1) d y d x = 4 + 4 c.
$$

7. $\int_0^1\int_0^1\frac{y}{1 + xy} dx dy$ 

8. $\int_1^4\int_0^4\left(\frac{x}{2} +\sqrt{y}\right)dx dy$ 

9. $\int_0^{\ln 2}\int_1^{\ln 5}e^{2x + y}dydx$ 

10. $\int_0^1\int_1^2 xye^xdydx$ 

11. $\int_{-1}^{2}\int_{0}^{\pi /2}y\sin x  dx  dy$ 

12. $\int_{\pi}^{2\pi}\int_{0}^{\pi}(\sin x + \cos y)dx dy$ 

13. $\int_{1}^{4}\int_{1}^{e}\frac{\ln x}{xy} dx dy$

14. $\int_{-1}^{2}\int_{1}^{2}x\ln ydy dx$

15. Find all values of the constant $c$ so that $\int_0^1\int_0^c (2x + y)dx dy = 3$ . 

16. Find all values of the constant $c$ so that 

Evaluating Double Integrals over Rectangles 

In Exercises 17–24, evaluate the double integral over the given region R. 

17. $\iint_{R} (6y^{2} - 2x) dA, \quad R: 0 \leq x \leq 1, \quad 0 \leq y \leq 2$ 

18. $\iint_{R}\left(\frac{\sqrt{x}}{y^2}\right)dA,$ $R:0\leq x\leq 4,1\leq y\leq 2$ 

19. $\iint_ {R} x y \cos y d A, \quad R: - 1 \leq x \leq 1, 0 \leq y \leq \pi$

20. $\iint_{R} y \sin(x + y) dA, \quad R: -\pi \leq x \leq 0, \quad 0 \leq y \leq \pi$ 

21. $\iint_{R} e^{x - y} dA, \quad R: 0 \leq x \leq \ln 2, \quad 0 \leq y \leq \ln 2$ 

22. $\iint_{R} xy e^{xy^2} dA, \quad R: 0 \leq x \leq 2, \quad 0 \leq y \leq 1$ 

23. $\iint_{R} \frac{xy^3}{x^2 + 1} dA, \quad R: 0 \leq x \leq 1, \quad 0 \leq y \leq 2$ 

24. $\iint_{R} \frac{y}{x^2 y^2 + 1} dA, \quad R: 0 \leq x \leq 1, \quad 0 \leq y \leq 1$ 

In Exercises 25 and 26, integrate f over the given region. 

25. Square $f(x,y)=1/(xy)$ over the square $1\leq x\leq2$ , $1\leq y\leq2$ 

26. Rectangle $f(x,y) = y\cos xy$ over the rectangle $0 \leq x \leq \pi$ , $0 \leq y \leq 1$ 

In Exercises 27 and 28, sketch the solid whose volume is given by the specified integral. 

27. $\int_0^1\int_0^2 (9 - x^2 -y^2)dydx$

28. $\int_0^3\int_1^4 (7 - x - y)dx dy$

29. Find the volume of the region bounded above by the paraboloid $z = x^2 + y^2$ and below by the square $R$ : $-1 \leq x \leq 1$ , $-1 \leq y \leq 1$ . 

30. Find the volume of the region bounded above by the elliptical paraboloid $z = 16 - x^{2} - y^{2}$ and below by the square R: $0 \leq x \leq 2$ , $0 \leq y \leq 2$ . 

31. Find the volume of the region bounded above by the plane $z = 2 - x - y$ and below by the square $R: 0 \leq x \leq 1, 0 \leq y \leq 1$ . 

32. Find the volume of the region bounded above by the plane $z = y / 2$ and below by the rectangle $R: 0 \leq x \leq 4, 0 \leq y \leq 2$ . 

33. Find the volume of the region bounded above by the surface $z = 2 \sin x \cos y$ and below by the rectangle $R: 0 \leq x \leq \pi/2, 0 \leq y \leq \pi/4.$ 

34. Find the volume of the region bounded above by the surface $z = 4 - y^2$ and below by the rectangle $R: 0 \leq x \leq 1, 0 \leq y \leq 2$ . 

35. Find a value of the constant k so that $\int_{1}^{2}\int_{0}^{3}kx^{2}y dx dy = 1$ . 

36. Evaluate $\int_{-1}^{1}\int_{0}^{\pi /2}x\sin \sqrt{y} dy dx.$ 

37. Use Fubini's Theorem to evaluate 

$$
\int_ {0} ^ {2} \int_ {0} ^ {1} \frac {x}{1 + x y} d x d y.
38. $Use Fubini's Theorem to evaluate$
\int_ {0} ^ {1} \int_ {0} ^ {3} x e ^ {x y} d x d y.
$$

T 39. Use a software application to compute the integrals 

$$
\mathbf {a}. \int_ {0} ^ {1} \int_ {0} ^ {2} \frac {y - x}{(x + y) ^ {3}} d x d y \quad \mathbf {b}. \int_ {0} ^ {2} \int_ {0} ^ {1} \frac {y - x}{(x + y) ^ {3}} d y d x
$$

Explain why your results do not contradict Fubini's Theorem. 

40. If $f(x, y)$ is continuous over $R$ : $a \leq x \leq b$ , $c \leq y \leq d$ and 

$$
F (x, y) = \int_ {a} ^ {x} \int_ {c} ^ {y} f (u, v) d v d u
$$

on the interior of $R$ , find the second partial derivatives $F_{xy}$ and $F_{yx}$ . 

## 14.2 Double Integrals over General Regions

<table><tr><td>R</td><td><eq>\Delta A_{k}</eq></td></tr><tr><td><eq>\Delta y_{k}</eq></td><td><eq>(x_{k}, y_{k})</eq></td></tr><tr><td><eq>\Delta x_{k}</eq></td><td></td></tr></table>


FIGURE 14.8 A rectangular grid partitioning a bounded, nonrectangular region into rectangular cells.


In this section we define and evaluate double integrals over bounded regions in the plane that are more general than rectangles. These double integrals are also evaluated as iterated integrals, with the main practical problem being that of determining the limits of integration. Since the region of integration may have boundaries other than line segments parallel to the coordinate axes, the limits of integration often involve variables, not just constants. 

### Double Integrals over Bounded, Nonrectangular Regions

To define the double integral of a function $f(x, y)$ over a bounded, nonrectangular region R, such as the one in Figure 14.8, we again begin by covering R with a grid of small rectangular cells whose union contains all points of R. This time, however, we cannot exactly fill R with a finite number of rectangles lying inside R since its boundary is curved, and some of the small rectangles in the grid lie partly outside R. A partition of R is formed by taking the rectangles that lie completely inside it, not using any that are either partly or completely outside. For commonly arising regions, more and more of R is included as the norm of a partition (the largest width or height of any rectangle used) approaches zero. 

![教材插图](/books/thomas-calculus/assets/a56dd01b47517e878bf26c093852887d560fdea84b5a33bc43b5ebb265a8c604.jpg)



Volume = $\lim \sum f(x_{k}, y_{k}) \Delta A_{k} = \iint_{R} f(x, y) \, dA$



FIGURE 14.9 We define the volume of a solid with a curved base as a limit of the sums of volumes of approximating rectangular boxes.


![教材插图](/books/thomas-calculus/assets/c2b2c3571fa16d97ebe77bd13e6346a09f66ed3dcbfb1cb8ed53f8cda0610535.jpg)



FIGURE 14.10 The area of the vertical slice shown here is $A(x)$ . To calculate the volume of the solid, we integrate this area from $x = a$ to $x = b$ :


$$
\int_ {a} ^ {b} A (x) d x = \int_ {a} ^ {b} \int_ {g _ {1} (x)} ^ {g _ {2} (x)} f (x, y) d y d x.
$$

Once we have a partition of R, we number the rectangles in some order from 1 to n and let $\Delta A_{k}$ be the area of the kth rectangle. We then choose a point $(x_{k}, y_{k})$ in the kth rectangle and form the Riemann sum 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k}.
$$

As the norm of the partition forming $S_{n}$ goes to zero, $\|P\|\to0$ , the width and height of each enclosed rectangle go to zero, their area $\Delta A_{k}$ goes to zero, and their number goes to infinity. If $f(x,y)$ is a continuous function, then these Riemann sums converge to a limiting value that is not dependent on any of the choices we made. This limit is called the double integral of $f(x,y)$ over R: 

$$
\lim _ {\| P \| \rightarrow 0} \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k} = \iint_ {R} f (x, y) d A.
$$

The nature of the boundary of R introduces issues not found in integrals over an interval. When R has a curved boundary, the n rectangles of a partition lie inside R but do not cover all of R. In order for a partition to approximate R well, the parts of R covered by small rectangles lying partly outside R must become negligible as the norm of the partition approaches zero. This property of being nearly filled in by a partition of small norm is satisfied by all the regions that we will encounter. There is no problem with boundaries made from polygons, circles, and ellipses or from continuous graphs over an interval, joined end to end. A curve with a “fractal” type of shape would be problematic, but such curves arise rarely in most applications. A careful discussion of which types of regions R can be used for computing double integrals is left to a more advanced text. 

### Volumes

If $f(x,y)$ is positive and continuous over R, we define the volume of the solid region between R and the surface $z = f(x,y)$ to be $\iint_{R} f(x,y) \, dA$ , as before (Figure 14.9). 

If R is a region like the one shown in the xy-plane in Figure 14.10, bounded “above” and “below” by the curves $y = g_{2}(x)$ and $y = g_{1}(x)$ and on the sides by the lines x = a, x = b, we may again calculate the volume by the method of slicing. We first calculate the cross-sectional area 

$$
A (x) = \int_ {y = g _ {1} (x)} ^ {y = g _ {2} (x)} f (x, y) d y
$$

and then integrate $A(x)$ from $x = a$ to $x = b$ to get the volume as an iterated integral: 

$$
V = \int_ {a} ^ {b} A (x) d x = \int_ {a} ^ {b} \int_ {g _ {1} (x)} ^ {g _ {2} (x)} f (x, y) d y d x.\tag{1}
$$

Similarly, if $R$ is a region like the one shown in Figure 14.11, bounded by the curves $x = h_2(y)$ and $x = h_1(y)$ and the lines $y = c$ and $y = d$ , then the volume calculated by slicing is given by the iterated integral 

$$
\text { Volume } = \int_ {c} ^ {d} \int_ {h _ {1} (y)} ^ {h _ {2} (y)} f (x, y)   d x   d y.\tag{2}
$$

That the iterated integrals in Equations (1) and (2) both give the volume that we defined to be the double integral of $f$ over $R$ is a consequence of the following stronger form of Fubini's Theorem. 

![教材插图](/books/thomas-calculus/assets/ff89f0878b36b9b779fee5085e81bc86b8674458d6588045c90a46e606a18b1d.jpg)



FIGURE 14.11 The volume of the solid shown here is


$$
\int_ {c} ^ {d} A (y) d y = \int_ {c} ^ {d} \int_ {h _ {1} (y)} ^ {h _ {2} (y)} f (x, y) d x d y.
$$

For a given solid, Theorem 2 says we can calculate the volume as in Figure 14.10 or in the way shown here. Both calculations have the same result. 

**THEOREM 2—Fubini's Theorem (Stronger Form)**

Let $f(x, y)$ be continuous on a region R. 

1. If $R$ is defined by $a \leq x \leq b$ , $g_1(x) \leq y \leq g_2(x)$ , with $g_1$ and $g_2$ continuous on $[a, b]$ , then 

$$
\iint_ {R} f (x, y) d A = \int_ {a} ^ {b} \int_ {g _ {1} (x)} ^ {g _ {2} (x)} f (x, y) d y d x.
$$

2. If $R$ is defined by $c \leq y \leq d$ , $h_1(y) \leq x \leq h_2(y)$ , with $h_1$ and $h_2$ continuous on $[c, d]$ , then 

$$
\iint_ {R} f (x, y) d A = \int_ {c} ^ {d} \int_ {h _ {1} (y)} ^ {h _ {2} (y)} f (x, y) d x d y.
$$

Some iterated double integrals we will encounter later in this text will use variables of integration other than x and y. For instance, we may write 

$$
\int_ {u = p} ^ {u = q} \int_ {v = G _ {1} (u)} ^ {v = G _ {2} (u)} F (u, v) d v d u = \int_ {p} ^ {q} \int_ {G _ {1} (u)} ^ {G _ {2} (u)} F (u, v) d v d u.
$$

Regardless of which specific variables of integration are used, the limits of an iterated double integral always satisfy these properties: 

- The limits of the outside integral are constants (they do not depend on either variable of integration), and 

- the limits of the inside integral are functions that may depend on the variable of the outside integral. 

**EXAMPLE 1** Find the volume of the right prism whose base is the triangle in the xy-plane bounded by the x-axis and the lines y = x and x = 1 and whose top lies in the plane 

$$
z = f (x, y) = 3 - x - y.
$$

**Solution** See Figure 14.12a. For any x between 0 and 1, y may vary from y = 0 to y = x (Figure 14.12b). Hence, 

$$
\begin{array}{l} V = \int_ {0} ^ {1} \int_ {0} ^ {x} (3 - x - y) d y d x = \int_ {0} ^ {1} \left[ 3 y - x y - \frac {y ^ {2}}{2} \right] _ {y = 0} ^ {y = x} d x \\ = \int_ {0} ^ {1} \left(3 x - \frac {3 x ^ {2}}{2}\right) d x = \left[ \frac {3 x ^ {2}}{2} - \frac {x ^ {3}}{2} \right] _ {x = 0} ^ {x = 1} = 1. \end{array}
$$

When the order of integration is reversed (Figure 14.12c), the integral for the volume is 

$$
\begin{array}{l} V = \int_ {0} ^ {1} \int_ {y} ^ {1} (3 - x - y) d x d y = \int_ {0} ^ {1} \left[ 3 x - \frac {x ^ {2}}{2} - x y \right] _ {x = y} ^ {x = 1} d y \\ = \int_ {0} ^ {1} \left(3 - \frac {1}{2} - y - 3 y + \frac {y ^ {2}}{2} + y ^ {2}\right) d y \\ = \int_ {0} ^ {1} \left(\frac {5}{2} - 4 y + \frac {3}{2} y ^ {2}\right) d y = \left[ \frac {5}{2} y - 2 y ^ {2} + \frac {y ^ {3}}{2} \right] _ {y = 0} ^ {y = 1} = 1. \end{array}
$$

The two integrals are equal, as they should be. 

Although Fubini's Theorem assures us that a double integral may be calculated as an iterated integral in either order of integration, the value of one integral may be easier to find than the value of the other. The next example shows how this can happen. 

![教材插图](/books/thomas-calculus/assets/9daa002dfc13ddbf2fa810b80e48af53be709b6b34c77e4f8533237ca74dea34.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/8601b3487848b634d90719df41477cccd8f44b0667174991a0f7660287104d3a.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/9fe499be65efc41868f90506af46eafd212acc12f92aaf2f18b438eccb2a320e.jpg)



(c)



FIGURE 14.12 (a) Prism with a triangular base in the xy-plane. The volume of this prism is defined as a double integral over R. To evaluate it as an iterated integral, we may integrate first with respect to y and then with respect to x, or the other way around (Example 1). (b) Integration limits of


$$
\int_ {x = 0} ^ {x = 1} \int_ {y = 0} ^ {y = x} f (x, y) d y d x.
$$

If we integrate first with respect to y, we integrate along a vertical line through R and then integrate from left to right to include all the vertical lines in R. (c) Integration limits of 

$$
\int_ {y = 0} ^ {y = 1} \int_ {x = y} ^ {x = 1} f (x, y) d x d y.
$$

If we integrate first with respect to x, we integrate along a horizontal line through R and then integrate from bottom to top to include all the horizontal lines in R. 

![教材插图](/books/thomas-calculus/assets/3554d6b0abeb752898c2296378dc543d553d32fdad61ba3d7ab463b9c26835a6.jpg)


**EXAMPLE 2** Calculate


FIGURE 14.13 The region of integration in Example 2.


$$
\iint_ {R} \frac {\sin x}{x} d A,
$$

where R is the triangle in the xy-plane bounded by the x-axis, the line y = x, and the line x = 1. 

**Solution** The region of integration is shown in Figure 14.13. If we integrate first with respect to y and next with respect to x, then because x is held fixed in the first integration, we find 

$$
\int_ {0} ^ {1} \left(\int_ {0} ^ {x} \frac {\sin x}{x} d y\right) d x = \int_ {0} ^ {1} \left[ y \frac {\sin x}{x} \right] _ {y = 0} ^ {y = x} d x = \int_ {0} ^ {1} \sin x d x = - \cos (1) + 1 \approx 0. 4 6.
$$

![教材插图](/books/thomas-calculus/assets/02c5f5bedd6a77521000a3ea55464de62099a7c10e3bd1a4919127e4274a35cc.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/0e1beb1a58eff674e00fd7276babfb80a9332b1438a3194cf3ca8e5ad5d57978.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/86128b2ff1d06e58b5e196f8341f64fddb4d672f713d9d9f09d66d265582044c.jpg)



(c)



FIGURE 14.14 Finding the limits of integration when integrating first with respect to y and then with respect to x.


![教材插图](/books/thomas-calculus/assets/f1fa1bded7f619a27503401d8184b8be421010a165a9fff7cfe38fb274994a0d.jpg)


FIGURE 14.15 Finding the limits of integration when integrating first with respect to x and then with respect to y. 

If we reverse the order of integration and attempt to calculate 

$$
\int_ {0} ^ {1} \int_ {y} ^ {1} \frac {\sin x}{x} d x d y,
$$

we run into a problem because $\int ((\sin x) / x) dx$ cannot be expressed in terms of elementary functions (there is no simple antiderivative). 

There is no general rule for predicting which order of integration will be the good one in circumstances like these. If the order you first choose doesn't work, try the other. Sometimes neither order will work, and then we may need to use numerical approximations. 

### Finding Limits of Integration

We now give a procedure for finding limits of integration that applies for many regions in the plane. Regions that are more complicated, and for which this procedure fails, can often be split up into pieces on which the procedure works. 

Using Vertical Cross-Sections When faced with evaluating $\iint_{R} f(x, y) \, dA$ , integrating first with respect to y and then with respect to x, do the following three steps: 

1. Sketch. Sketch the region of integration and label the bounding curves (Figure 14.14a). 

2. Find the y-limits of integration. Imagine a vertical line L cutting through R in the direction of increasing y. Mark the y-values where L enters and leaves. These are the y-limits of integration and are usually functions of x (instead of constants) (Figure 14.14b). 

3. Find the x-limits of integration. Choose x-limits that include all the vertical lines through R. These must be constants. The integral whose region of integration is shown in Figure 14.14c is 

$$
\iint_ {R} f (x, y) d A = \int_ {x = 0} ^ {x = 1} \int_ {y = 1 - x} ^ {y = \sqrt {1 - x ^ {2}}} f (x, y) d y d x.
$$

Using Horizontal Cross-Sections To evaluate the same double integral as an iterated integral with the order of integration reversed, use horizontal lines instead of vertical lines in Steps 2 and 3 (see Figure 14.15). The integral is 

$$
\iint_ {R} f (x, y) d A = \int_ {0} ^ {1} \int_ {1 - y} ^ {\sqrt {1 - y ^ {2}}} f (x, y) d x d y.
$$

**EXAMPLE 3** Sketch the region of integration for the integral 

$$
\int_ {0} ^ {2} \int_ {x ^ {2}} ^ {2 x} (4 x + 2) d y d x
$$

and write an equivalent integral with the order of integration reversed. 

**Solution** The region of integration is given by the inequalities $x^{2} \leq y \leq 2x$ and $0 \leq x \leq 2$ . It is therefore the region bounded by the curves $y = x^{2}$ and y = 2x between x = 0 and x = 2 (Figure 14.16a). 

To find limits for integrating in the reverse order, we imagine a horizontal line passing from left to right through the region. It enters at x = y/2 and leaves at $x = \sqrt{y}$ . To include all such lines, we let y run from y = 0 to y = 4 (Figure 14.16b). The integral is 

$$
\int_ {0} ^ {4} \int_ {y / 2} ^ {\sqrt {y}} (4 x + 2) d x d y.
$$

The common value of these integrals is 8. 

![教材插图](/books/thomas-calculus/assets/827898174013c5a89c18a6f82dfdfd83915145163cb47485a80133b78d365083.jpg)


![教材插图](/books/thomas-calculus/assets/a5e81a9354c66335bfdf292964371929c566b42bf95065dba7519b291d10f4e9.jpg)



FIGURE 14.16 Region of integration for Example 3.


![教材插图](/books/thomas-calculus/assets/f9b54fee4dde7433c7193df3f08b2a882b168ed8f10effb708131251108ad00e.jpg)



FIGURE 14.17 The Additivity Property for rectangular regions holds for regions bounded by smooth curves.


### Properties of Double Integrals

Like single integrals, double integrals of continuous functions have algebraic properties that are useful in computations and applications. 

If $f(x, y)$ and $g(x, y)$ are continuous on the bounded region $R$ , then the following properties hold. 

1. Constant Multiple: $\iint_{R} cf(x, y) dA = c \iint_{R} f(x, y) dA$ (any number $c$ ) 

2. Sum and Difference: 

$$
\iint_ {R} (f (x, y) \pm g (x, y)) d A = \iint_ {R} f (x, y) d A \pm \iint_ {R} g (x, y) d A
$$

3. Domination: 

$$
\iint_ {R} f (x, y) d A \geq 0 \quad \text { if } \quad f (x, y) \geq 0 \text {   on   } R
$$

$$
\iint_ {R} f (x, y) d A \geq \iint_ {R} g (x, y) d A \quad \text { if } \quad f (x, y) \geq g (x, y) \text { on } R \tag {b}
$$

4. Additivity: If R is the union of two nonoverlapping regions $R_{1}$ and $R_{2}$ , then 

$$
\iint_ {R} f (x, y) d A = \iint_ {R _ {1}} f (x, y) d A + \iint_ {R _ {2}} f (x, y) d A
$$

Property 4 assumes that the region of integration R is decomposed into nonoverlapping regions $R_{1}$ and $R_{2}$ with boundaries consisting of a finite number of line segments or smooth curves. Figure 14.17 illustrates an example of this property. 

The idea behind these properties is that integrals behave like sums. If the function $f(x, y)$ is replaced by its constant multiple $cf(x, y)$ , then a Riemann sum for f, 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k},
$$

is replaced by a Riemann sum for cf: 

$$
\sum_ {k = 1} ^ {n} c f \left(x _ {k}, y _ {k}\right) \Delta A _ {k} = c \sum_ {k = 1} ^ {n} f \left(x _ {k}, y _ {k}\right) \Delta A _ {k} = c S _ {n}.
$$

Taking limits as $n \to \infty$ shows that $c \lim_{n \to \infty} S_n = c \iint_R f \, dA$ and $\lim_{n \to \infty} c S_n = \iint_R cf \, dA$ are equal. It follows that the Constant Multiple Property carries over from sums to double integrals. 

The other properties are also easy to verify for Riemann sums, and carry over to double integrals for the same reason. While this discussion gives the idea, an actual proof that these properties hold requires a more careful analysis of how Riemann sums converge. 

**EXAMPLE 4** Find the volume of the wedgelike solid that lies beneath the surface $z = 16 - x^2 - y^2$ and above the region $R$ bounded by the curve $y = 2\sqrt{x}$ , the line $y = 4x - 2$ , and the $x$ -axis. 

**Solution** Figure 14.18a shows the surface and the “wedgelike” solid whose volume we want to calculate. Figure 14.18b shows the region of integration in the xy-plane. If we integrate in the order dy dx (first with respect to y and then with respect to x), two integrations will be required because y varies from y = 0 to $y = 2\sqrt{x}$ for $0 \leq x \leq 0.5$ , and then varies from y = 4x - 2 to $y = 2\sqrt{x}$ for $0.5 \leq x \leq 1$ . So we choose to integrate in the order dx dy, which requires only one double integral whose limits of integration are indicated in Figure 14.18b. The volume is then calculated as the iterated integral: 

![教材插图](/books/thomas-calculus/assets/581ac691b8e0615410d4924ac6ccf79667eac945083ed797b89b4e1ff70c65ba.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/af2e0bd52476a062cec6c1e2bda24b2df85f75dee6f2639c0a75e373d03e108b.jpg)



(b)



FIGURE 14.18 (a) The solid “wedge-like” region whose volume is found in Example 4. (b) The region of integration R showing the order dx dy.


$$
\begin{array}{l} \iint_ {R} (1 6 - x ^ {2} - y ^ {2}) d A \\ = \int_ {0} ^ {2} \int_ {y ^ {2} / 4} ^ {(y + 2) / 4} (1 6 - x ^ {2} - y ^ {2}) d x d y \\ = \int_ {0} ^ {2} \left[ 1 6 x - \frac {x ^ {3}}{3} - x y ^ {2} \right] _ {x = y ^ {2} / 4} ^ {x = (y + 2) / 4} d x \\ = \int_ {0} ^ {2} \left[ 4 (y + 2) - \frac {(y + 2) ^ {3}}{3 \cdot 6 4} - \frac {(y + 2) y ^ {2}}{4} - 4 y ^ {2} + \frac {y ^ {6}}{3 \cdot 6 4} + \frac {y ^ {4}}{4} \right] d y \\ = \left[ \frac {1 9 1 y}{2 4} + \frac {6 3 y ^ {2}}{3 2} - \frac {1 4 5 y ^ {3}}{9 6} - \frac {4 9 y ^ {4}}{7 6 8} + \frac {y ^ {5}}{2 0} + \frac {y ^ {7}}{1 3 4 4} \right] _ {0} ^ {2} = \frac {2 0 8 0 3}{1 6 8 0} \approx 1 2. 4. \end{array}
$$

Our development of the double integral has focused on its representation of the volume of the solid region between R and the surface $z = f(x, y)$ of a positive continuous function. Just as we saw with signed area in the case of single integrals, when $f(x_k, y_k)$ is negative, the product $f(x_k, y_k) \Delta A_k$ is the negative of the volume of the rectangular box shown in Figure 14.9 that was used to form the approximating Riemann sum. So for an arbitrary continuous function f defined over R, the limit of any Riemann sum represents the signed volume (not the total volume) of the solid region between R and the surface. The double integral has other interpretations as well, and in the next section we will see how it is used to calculate the area of a general region in the plane. 

### EXERCISES 14.2

#### Sketching Regions of Integration

In Exercises 1–8, sketch the regions of integration associated with the given double integrals. 

1. $\int_0^3\int_0^{2x}f(x,y)dydx$ 

2. $\int_{-1}^{2}\int_{x - 1}^{x^2}f(x,y)dydx$ 

3. $\int_{-2}^{2}\int_{y^2}^4 f(x,y)dx dy$ 

4. $\int_0^1\int_y^{2y}f(x,y)dx dy$ 

5. $\int_0^1\int_{e^x}^e f(x,y)dydx$ 

6. $\int_{1}^{e^2}\int_{0}^{\ln x}f(x,y)dydx$ 

7. $\int_0^1\int_0^{\arcsin y}f(x,y)dx dy$ 

8. $\int_0^8\int_{y / 4}^{y^{1 / 3}}f(x,y)dx dy$ 

#### Finding Limits of Integration

In Exercises 9–18, write an iterated integral for $\iint_{R} dA$ over the described region R using (a) vertical cross-sections, (b) horizontal cross-sections. 


9.


![教材插图](/books/thomas-calculus/assets/b204ec7a139dd304bf5501979ade8c4b0662b19cc9d9cfb51d19fb810b6b94ee.jpg)



10.


11. 

![教材插图](/books/thomas-calculus/assets/74cb7e4a74442541b39e232ced5df6683b2faf7febf9f8412f315fe55434277c.jpg)



12.


![教材插图](/books/thomas-calculus/assets/90b45faaf20983d567a1851df3f3e4522e7cb2b1382dff2167cc6eceb4bc2934.jpg)


![教材插图](/books/thomas-calculus/assets/ff3e609d46064f5c7cd18f82d08c8c91a62e1bb974f4cae5398ddd4e5860d372.jpg)


13. Bounded by $y = \sqrt{x}$ , $y = 0$ , and $x = 9$ 

14. Bounded by $y = \tan x$ , x = 0, and y = 1 

15. Bounded by $y = e^{-x}$ , $y = 1$ , and $x = \ln 3$ 

16. Bounded by $y = 0$ , $x = 0$ , $y = 1$ , and $y = \ln x$ 

17. Bounded by $y = 3 - 2x$ , $y = x$ , and $x = 0$ 

18. Bounded by $y = x^{2}$ and $y = x + 2$ 

#### Evaluating Iterated Integrals

In Exercises 19–26, evaluate the integral. 

19. $\int_1^2\int_0^{2x}xy^3 dy dx$ 

20. $\int_1^3\int_y^{2y}ydx dy$ 

21. $\int_0^1\int_y^1 (\sqrt{x} +xy)dx dy$ 

22. $\int_0^2\int_0^{x^3}(y^2 -x)dydx$ 

23. $\int_0^{\sqrt{\pi}}\int_0^{x^2}x\sin ydydx$ 

24. $\int_0^1\int_0^{\arctan y}\frac{1}{1 + y^2} dx dy$ 

25. $\int_{1}^{4}\int_{y}^{y^{2}}\sqrt{\frac{y}{x}} dx dy$ 

26. $\int_{3}^{5}\int_{1}^{e^{x}}\frac{1}{xy} dy dx$ 

Finding Regions of Integration and Double Integrals 

In Exercises 27–32, sketch the region of integration and evaluate the integral. 

27. $\int_0^\pi \int_0^x x\sin ydydx$ 

28. $\int_0^\pi \int_0^{\sin x}ydydx$ 

29. $\int_{1}^{\ln 8}\int_{1}^{\ln y}e^{x + y}dx dy$ 

30. $\int_1^2\int_y^{y^2}dx dy$ 

31. $\int_0^1\int_0^{y^2}3y^3 e^{xy}dx dy$ 

32. $\int_{1}^{4}\int_{0}^{\sqrt{x}}\frac{3}{2} e^{y / \sqrt{x}}dydx$ 

In Exercises 33–36, integrate f over the given region. 

33. Quadrilateral $f(x, y) = x / y$ over the region in the first quadrant bounded by the lines $y = x, y = 2x, x = 1$ , and $x = 2$ 

34. Triangle $f(x,y) = x^{2} + y^{2}$ over the triangular region with vertices $(0,0),(1,0)$ , and $(0,1)$ 

35. Triangle $f(u,v)=v-\sqrt{u}$ over the triangular region cut from the first quadrant of the uv-plane by the line $u+v=1$ 

36. Curved region $f(s, t) = e^{s} \ln t$ over the region in the first quadrant of the st-plane that lies above the curve $s = \ln t$ from t = 1 to t = 2 

Each of Exercises 37–40 gives an integral over a region in a Cartesian coordinate plane. Sketch the region and evaluate the integral. 

37. $\int_{-2}^{0}\int_{v}^{-v}2dp dv$ (the $pv$ -plane) 

38. $\int_0^1\int_0^{\sqrt{1 - s^2}}8tdtds$ (the $st$ -plane) 

39. $\int_{-\pi /3}^{\pi /3}\int_{0}^{\sec t}3\cos tdudt$ (the $tu$ -plane) 

40. $\int_0^{3/2}\int_1^{4 - 2u}\frac{4 - 2u}{v^2} dvdu$ (the uv-plane) 

Reversing the Order of Integration 

In Exercises 41–54, sketch the region of integration, and write an equivalent double integral with the order of integration reversed. 

41. $\int_0^1\int_2^{4 - 2x}dydx$ 

42. $\int_0^2\int_{y - 2}^0 dxdy$ 

43. $\int_0^1\int_y^{\sqrt{y}}dx dy$ 

44. $\int_0^1\int_{1 - x}^{1 - x^2}dydx$ 

45. $\int_0^1\int_1^{e^x}dy dx$ 

46. $\int_0^{\ln 2}\int_{ey}^2 dx dy$ 

47. $\int_0^{3 / 2}\int_0^{9 - 4x^2}16xdydx$ 

48. $\int_0^2\int_0^{4 - y^2}ydxdy$ 

49. $\int_0^1\int_{-\sqrt{1 - y^2}}^{\sqrt{1 - y^2}}3ydx dy$ 

50. $\int_0^2\int_{-\sqrt{4 - x^2}}^{\sqrt{4 - x^2}}6xdydx$ 

51. $\int_{1}^{e}\int_{0}^{\ln x}xydydx$ 

52. $\int_0^{\pi /6}\int_{\sin x}^{1 / 2}xy^2 dy dx$ 

53. $\int_0^3\int_1^{ey}(x + y)dx dy$ 

54. $\int_0^{\sqrt{3}}\int_0^{\tan^{-1}y}\sqrt{xy} dx dy$ 

In Exercises 55–64, sketch the region of integration, reverse the order of integration, and evaluate the integral. 

55. $\int_0^\pi \int_x^\pi \frac{\sin y}{y} dy dx$ 

56. $\int_0^2\int_x^2 2y^2\sin xydydx$ 

57. $\int_0^1\int_y^1 x^2 e^{xy}dx dy$ 

58. $\int_0^2\int_0^{4 - x^2}\frac{xe^{2y}}{4 - y} dy dx$ 

59. $\int_0^{2\sqrt{\ln 3}}\int_{y / 2}^{\sqrt{\ln 3}}e^{x^2}dx dy$ 

60. $\int_0^3\int_{\sqrt{x / 3}}^1 e^{y^3}dydx$ 

61. $\int_0^{1 / 16}\int_{y^{1 / 4}}^{1 / 2}\cos (16\pi x^5)dxdy$ 

62. $\int_0^8\int_{\sqrt[3]{x}}^2\frac{dydx}{y^4 + 1}$ 

63. Square region $\iint_{R}(y - 2x^{2})dA$ where $R$ is the region bounded by the square $|x| + |y| = 1$ 

64. Triangular region $\iint_{R} xy \, dA$ where $R$ is the region bounded by the lines $y = x$ , $y = 2x$ , and $x + y = 2$ 

Volume Beneath a Surface $z = f(x, y)$ 

65. Find the volume of the region bounded above by the paraboloid $z = x^{2} + y^{2}$ and below by the triangle enclosed by the lines y = x, x = 0, and $x + y = 2$ in the xy-plane. 

66. Find the volume of the solid that is bounded above by the cylinder $z = x^{2}$ and below by the region enclosed by the parabola $y = 2 - x^{2}$ and the line y = x in the xy-plane. 

67. Find the volume of the solid whose base is the region in the xy-plane that is bounded by the parabola $y = 4 - x^{2}$ and the line y = 3x, while the top of the solid is bounded by the plane $z = x + 4$ . 

68. Find the volume of the solid in the first octant bounded by the coordinate planes, the cylinder $x^{2} + y^{2} = 4$ , and the plane $z + y = 3$ . 

69. Find the volume of the solid in the first octant bounded by the coordinate planes, the plane $x = 3$ , and the parabolic cylinder $z = 4 - y^2$ . 

70. Find the volume of the solid cut from the first octant by the surface $z = 4 - x^2 - y$ . 

71. Find the volume of the wedge cut from the first octant by the cylinder $z = 12 - 3y^{2}$ and the plane $x + y = 2$ . 

72. Find the volume of the solid cut from the square column $|x| + |y| \leq 1$ by the planes $z = 0$ and $3x + z = 3$ . 

73. Find the volume of the solid that is bounded on the front and back by the planes x = 2 and x = 1, on the sides by the cylinders $y = \pm 1/x$ , and above and below by the planes $z = x + 1$ and z = 0. 

74. Find the volume of the solid bounded on the front and back by the planes $x = \pm\pi/3$ , on the sides by the cylinders $y = \pm\sec x$ , above by the cylinder $z = 1 + y^{2}$ , and below by the xy-plane. 

In Exercises 75 and 76, sketch the region of integration and the solid whose volume is given by the double integral. 

75. $\int_0^3\int_0^{2 - 2x / 3}\left(1 - \frac{1}{3} x - \frac{1}{2} y\right)dydx$ 

76. $\int_0^4\int_{-\sqrt{16 - y^2}}^{\sqrt{16 - y^2}}\sqrt{25 - x^2 - y^2} dx dy$ 

Integrals over Unbounded Regions 

Improper double integrals can often be computed similarly to improper integrals of one variable. The first iteration of the following improper integrals is conducted just as if they were proper integrals. One then evaluates an improper integral of a single variable by taking appropriate limits, as in Section 8.8. Evaluate the improper integrals in Exercises 77–80 as iterated integrals. 

$$
\int_ {1} ^ {\infty} \int_ {e ^ {- x}} ^ {1} \frac {1}{x ^ {3} y} d y d x \quad 7 7. \int_ {- 1} ^ {1} \int_ {- 1 / \sqrt {1 - x ^ {2}}} ^ {1 / \sqrt {1 - x ^ {2}}} (2 y + 1) d y d x
$$

79. $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\frac{1}{(x^2 + 1)(y^2 + 1)} dx dy$ 

80. $\int_0^\infty \int_0^\infty xe^{-(x + 2y)}dxdy$ 

Approximating Integrals with Finite Sums 

In Exercises 81 and 82, approximate the double integral of $f(x,y)$ over the region $R$ partitioned by the given vertical lines $x = a$ and horizontal lines $y = c$ . In each subrectangle, use $(x_{k},y_{k})$ as indicated for your approximation. 

$$
\iint_ {R} f (x, y) d A \approx \sum_ {k = 1} ^ {n} f \left(x _ {k}, y _ {k}\right) \Delta A _ {k}
$$

81. $f(x,y) = x + y$ over the region R bounded above by the semicircle $y = \sqrt{1 - x^{2}}$ and below by the x-axis, using the partition x = -1, -1/2, 0, 1/4, 1/2, 1 and y = 0, 1/2, 1 with $(x_{k}, y_{k})$ the lower left corner in the kth subrectangle (provided the subrectangle lies within R) 

82. $f(x,y)=x+2y$ over the region R inside the circle $(x-2)^{2}+(y-3)^{2}=1$ using the partition x=1,3/2,2,5/2,3 and y=2,5/2,3,7/2,4 with $(x_{k},y_{k})$ the center (centroid) in the kth subrectangle (provided the subrectangle lies within R) 

Theory and Examples 

83. Circular sector Integrate $f(x, y) = \sqrt{4 - x^{2}}$ over the smaller sector cut from the disk $x^{2} + y^{2} \leq 4$ by the rays $\theta = \pi/6$ and $\theta = \pi/2$ . 

84. Unbounded region Integrate $f(x, y) = 1 / \left[(x^{2} - x)(y - 1)^{2/3}\right]$ over the infinite rectangle $2 \leq x < \infty$ , $0 \leq y \leq 2$ . 

85. Noncircular cylinder A solid right (noncircular) cylinder has its base $R$ in the $xy$ -plane and is bounded above by the paraboloid $z = x^2 + y^2$ . The cylinder's volume is 

$$
V = \int_ {0} ^ {1} \int_ {0} ^ {y} (x ^ {2} + y ^ {2}) d x d y + \int_ {1} ^ {2} \int_ {0} ^ {2 - y} (x ^ {2} + y ^ {2}) d x d y.
$$

Sketch the base region $R$ , and express the cylinder's volume as a single iterated integral with the order of integration reversed. Then evaluate the integral to find the volume. 

86. Converting to a double integral Evaluate the integral 

$$
\int_ {0} ^ {2} (\arctan \pi x - \arctan x) d x.
$$

(Hint: Write the integrand as an integral.) 

87. Maximizing a double integral What region $R$ in the xy-plane maximizes the value of 

$$
\iint_ {R} \left(4 - x ^ {2} - 2 y ^ {2}\right) d A?
$$

Give reasons for your answer. 

88. Minimizing a double integral What region $R$ in the xy-plane minimizes the value of 

$$
\iint_ {R} (x ^ {2} + y ^ {2} - 9) d A?
$$

Give reasons for your answer. 

89. Is it possible to evaluate the integral of a continuous function $f(x, y)$ over a rectangular region in the $xy$ -plane and get different answers depending on the order of integration? Give reasons for your answer. 

90. How would you evaluate the double integral of a continuous function $f(x, y)$ over the region R in the xy-plane enclosed by the triangle with vertices $(0, 1)$ , $(2, 0)$ , and $(1, 2)$ ? Give reasons for your answer. 

91. Unbounded region Prove that 

$$
\begin{array}{c}\int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} e ^ {- x ^ {2} - y ^ {2}} d x d y = \lim _ {b \rightarrow \infty} \int_ {- b} ^ {b} \int_ {- b} ^ {b} e ^ {- x ^ {2} - y ^ {2}} d x d y\\= 4 \left(\int_ {0} ^ {\infty} e ^ {- x ^ {2}} d x\right) ^ {2}.\end{array}
92. $Improper double integral Evaluate the improper integral$
\int_ {0} ^ {1} \int_ {0} ^ {3} \frac {x ^ {2}}{(y - 1) ^ {2 / 3}} d y d x.
$$

COMPUTER EXPLORATIONS 

Use a CAS double-integral evaluator to estimate the values of the integrals in Exercises 93–96. 

$$
\int_ {1} ^ {3} \int_ {1} ^ {x} \frac {1}{x y} d y d x \quad 9 3. \int_ {0} ^ {1} \int_ {0} ^ {1} e ^ {- (x ^ {2} + y ^ {2})} d y d x \tag {94}
$$

95. $\int_0^1\int_0^1\arctan xydydx$ 

96. $\int_{-1}^{1}\int_{0}^{\sqrt{1 - x^2}}3\sqrt{1 - x^2 - y^2} dy dx$ 

Use a CAS double-integral evaluator to find the integrals in Exercises 97–102. Then reverse the order of integration and evaluate, again with a CAS. 

97. $\int_0^1\int_{2y}^4 e^{x^2}dx dy$ 

98. $\int_0^3\int_{x^2}^9 x\cos (y^2)dydx$ 

99. $\int_0^2\int_{y^3}^{4\sqrt{2y}}(x^2 y - xy^2)dx dy$ 

100. $\int_0^2\int_0^{4 - y^2}e^{xy}dxdy$ 

101. $\int_1^2\int_0^{x^2}\frac{1}{x + y} dy dx$ 

102. $\int_{1}^{2}\int_{y^3}^{8}\frac{1}{\sqrt{x^2 + y^2}} dx dy$ 

## 14.3 Area by Double Integration

In this section we show how to use double integrals to calculate the areas of bounded regions in the plane, and to find the average value of a function of two variables. 

### Areas of Bounded Regions in the Plane

If we take $f(x, y) = 1$ in the definition of the double integral over a region R in the preceding section, the Riemann sums reduce to 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (x _ {k}, y _ {k}) \Delta A _ {k} = \sum_ {k = 1} ^ {n} \Delta A _ {k}.\tag{1}
$$

This is simply the sum of the areas of the small rectangles in the partition of R, and it approximates what we would like to call the area of R. As the norm of a partition of R approaches zero, the height and width of all rectangles in the partition approach zero, and the coverage of R becomes increasingly complete (Figure 14.8). We define the area of R to be the limit 

$$
\lim _ {| | P | | \rightarrow 0} \sum_ {k = 1} ^ {n} \Delta A _ {k} = \iint_ {R} d A.\tag{2}
$$

> ***DEFINITION*** The area of a closed, bounded plane region R is 
>
> $$
> A = \iint_ {R} d A.
> $$
>
As with the other definitions in this chapter, the definition here applies to a greater variety of regions than does the earlier single-variable definition of area, but it agrees with the earlier definition on regions to which they both apply. To evaluate the integral in the definition of area, we integrate the constant function $f(x, y) = 1$ over R. 

![教材插图](/books/thomas-calculus/assets/ff8838b8bf1ca500af5e38320e9a466e6dccbd298263b085556bb51203a0efd0.jpg)


FIGURE 14.19 The region in Example 1. 

**EXAMPLE 1** Find the area of the region R bounded by y = x and $y = x^{2}$ in the first quadrant. 

**Solution** We sketch the region (Figure 14.19), noting where the two curves intersect at the origin and $(1,1)$ , and calculate the area as 

$$
A = \int_ {0} ^ {1} \int_ {x ^ {2}} ^ {x} d y d x = \int_ {0} ^ {1} \left[ y \right] _ {y = x ^ {2}} ^ {y = x} d x = \int_ {0} ^ {1} (x - x ^ {2}) d x = \left[ \frac {x ^ {2}}{2} - \frac {x ^ {3}}{3} \right] _ {0} ^ {1} = \frac {1}{6}.
$$

Notice that the single-variable integral $\int_{0}^{1}(x-x^{2})dx$ , obtained from evaluating the inside iterated integral, is the integral for the area between these two curves using the method of Section 5.6. 

![教材插图](/books/thomas-calculus/assets/45f8f9a9fcbafdea8bc89481f8ef1c0b72cda5a495bd3938885bba1a956f9034.jpg)


![教材插图](/books/thomas-calculus/assets/a498bc91c16fee564b4dd73fcdebbf1d211619880a66eafc6b2d25ab4198d892.jpg)



FIGURE 14.20 Calculating this area takes (a) two double integrals if the first integration is with respect to x, but (b) only one if the first integration is with respect to y (Example 2).


**EXAMPLE 2** Find the area of the region R enclosed by the parabola $y = x^{2}$ and the line $y = x + 2$ . 

**Solution** If we divide R into the regions $R_{1}$ and $R_{2}$ shown in Figure 14.20a, we may calculate the area as 

$$
A = \iint_ {R _ {1}} d A + \iint_ {R _ {2}} d A = \int_ {0} ^ {1} \int_ {- \sqrt {y}} ^ {\sqrt {y}} d x d y + \int_ {1} ^ {4} \int_ {y - 2} ^ {\sqrt {y}} d x d y.
$$

On the other hand, reversing the order of integration (Figure 14.20b) gives 

$$
A = \int_ {- 1} ^ {2} \int_ {x ^ {2}} ^ {x + 2} d y d x.
$$

This second result, which requires only one integral, is simpler to evaluate, giving 

$$
A = \int_ {- 1} ^ {2} \left[ y \right] _ {y = x ^ {2}} ^ {y = x + 2} d x = \int_ {- 1} ^ {2} (x + 2 - x ^ {2}) d x = \left[ \frac {x ^ {2}}{2} + 2 x - \frac {x ^ {3}}{3} \right] _ {- 1} ^ {2} = \frac {9}{2}.
$$

**EXAMPLE 3** Find the area of the playing field described by $R: -2 \leq x \leq 2, -1 - \sqrt{4 - x^2} \leq y \leq 1 + \sqrt{4 - x^2}$ , using 

(a) Fubini's Theorem 

(b) simple geometry. 

**Solution** The region R is shown in Figure 14.21a. 

(a) From the symmetries observed in the figure, we see that the area of $R$ is 4 times its area in the first quadrant. As shown in Figure 14.21b, a vertical line at $x$ enters this part of the region at $y = 0$ and exits at $y = 1 + \sqrt{4 - x^2}$ . Therefore, using Fubini's Theorem, we have 

$$
\begin{array}{l} A = \iint_ {R} d A = 4 \int_ {0} ^ {2} \int_ {0} ^ {1 + \sqrt {4 - x ^ {2}}} d y d x \\ = 4 \int_ {0} ^ {2} \left(1 + \sqrt {4 - x ^ {2}}\right) d x \\ = 4 \left[ x + \frac {x}{2} \sqrt {4 - x ^ {2}} + \frac {4}{2} \sin^ {- 1} \frac {x}{2} \right] _ {0} ^ {2} \\ = 4 \left(2 + 0 + 2 \cdot \frac {\pi}{2} - 0\right) = 8 + 4 \pi . \end{array}
$$

Integral Table Formula 45 

(b) The region $R$ consists of a rectangle mounted on two sides by half disks of radius 2. The area can be computed by summing the area of the $4 \times 2$ rectangle and the area of a circle of radius 2, so 

$$
A = 8 + \pi 2 ^ {2} = 8 + 4 \pi .
$$

### Average Value

The average value of an integrable function of one variable on a closed interval is the integral of the function over the interval divided by the length of the interval. For an integrable function of two variables defined on a bounded region in the plane, the average value is the integral over the region divided by the area of the region. This can be visualized by thinking of the region as being the base of a tank with vertical walls around the boundary of the region, and imagining that the tank is filled with water that is sloshing around. The value $f(x, y)$ is then the height of the water that is directly above the point $(x, y)$ . The average height of the water in the tank can be found by letting the water settle down to a constant height. This height is equal to the volume of water in the tank divided by the area of R. We therefore define the average value of an integrable function f over a region R as follows: 

![教材插图](/books/thomas-calculus/assets/1c8ef190053dc7f402a1c6817aed7f846a869a063c016178b6deaf15394432bf.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/f4be44436072dd2808571f3596cc8e177b25e2dc87c289c821cf004eec290f26.jpg)



(b)


$$
\text { Average   value   of } f \text { over } R = \frac {1}{\text { area   of } R} \iint_ {R} f d A.\tag{3}
$$

If $f$ is the temperature of a thin plate covering $R$ , then the double integral of $f$ over $R$ divided by the area of $R$ is the plate's average temperature. If $f(x, y)$ is the distance from the point $(x, y)$ to a fixed point $P$ , then the average value of $f$ over $R$ is the average distance of points in $R$ from $P$ . 

**EXAMPLE 4** Find the average value of $f(x,y)=x\cos xy$ over the rectangle $R:0\leq x\leq\pi,0\leq y\leq1$ . 

**Solution** The value of the integral of f over R is 

$$
\begin{array}{r l} \int_ {0} ^ {\pi} \int_ {0} ^ {1} x \cos x y d y d x & = \int_ {0} ^ {\pi} \left[ \sin x y \right] _ {y = 0} ^ {y = 1} d x \\ & = \int_ {0} ^ {\pi} (\sin x - 0) d x = - \cos x \bigg | _ {0} ^ {\pi} = 1 + 1 = 2. \end{array}
$$

FIGURE 14.21 (a) The playing field described by the region R in Example 3. 

(b) First quadrant of the playing field. 

The area of R is $\pi$ . The average value of f over R is $2/\pi$ . 

### EXERCISES 14.3

Area by Double Integrals 

In Exercises 1–12, sketch the region bounded by the given lines and curves. Then express the region's area as an iterated double integral and evaluate the integral. 

1. The coordinate axes and the line $x + y = 2$ 

2. The lines $x = 0$ , $y = 2x$ , and $y = 4$ 

3. The parabola $x = -y^{2}$ and the line $y = x + 2$ 

4. The parabola $x = y - y^{2}$ and the line $y = -x$ 

5. The curve $y = e^{x}$ and the lines y = 0, x = 0, and $x = \ln 2$ 

6. The curves $y = \ln x$ and $y = 2\ln x$ and the line $x = e$ , in the first quadrant 

7. The parabolas $x = y^{2}$ and $x = 2y - y^{2}$ 

8. $x = y ^ {2} - 1 \text {   and   } x = 2 y ^ {2} - 2$

9. The lines y = x, y = x/3, and y = 2 

10. The lines $y = 1 - x$ and $y = 2$ and the curve $y = e^x$ 

11. The lines $y = 2x$ , $y = x / 2$ , and $y = 3 - x$ 

12. The lines $y = x - 2$ and $y = -x$ and the curve $y = \sqrt{x}$ 

Identifying the Region of Integration 

The integrals and sums of integrals in Exercises 13–18 give the areas of regions in the xy-plane. Sketch each region, label each bounding curve with its equation, and give the coordinates of the points where the curves intersect. Then find the area of the region. 

13. $\int_0^6\int_{y^2 /3}^{2y}dx dy$ 

14. $\int_0^3\int_{-x}^{x(2 - x)}dydx$ 

15. $\int_0^{\pi /4}\int_{\sin x}^{\cos x}dydx$ 

16. $\int_{-1}^{2}\int_{y^2}^{y + 2}dx dy$ 

17. $\int_{-1}^{0}\int_{-2x}^{1 - x}dy dx + \int_{0}^{2}\int_{-x / 2}^{1 - x}dy dx$ 

18. $\int_0^2\int_{x^2 -4}^0 dy dx + \int_0^4\int_0^{\sqrt{x}}dy dx$ 

Finding Average Values 

19. Find the average value of $f(x, y) = \sin (x + y)$ over 

a. the rectangle $0 \leq x \leq \pi$ , $0 \leq y \leq \pi$ . 

b. the rectangle $0 \leq x \leq \pi$ , $0 \leq y \leq \pi/2$ . 

20. Which do you think will be larger, the average value of $f(x, y) = xy$ over the square $0 \leq x \leq 1$ , $0 \leq y \leq 1$ , or the average value of f over the quarter circle $x^{2} + y^{2} \leq 1$ in the first quadrant? Calculate them to find out. 

21. Find the average height of the paraboloid $z = x^{2} + y^{2}$ over the square $0 \leq x \leq 2$ , $0 \leq y \leq 2$ . 

22. Find the average value of $f(x, y) = 1/(xy)$ over the square $\ln 2 \leq x \leq 2 \ln 2$ , $\ln 2 \leq y \leq 2 \ln 2$ . 

Theory and Examples 

23. Geometric area Find the area of the region 

$$
R \colon 0 \leq x \leq 2,   2 - x \leq y \leq \sqrt {4 - x ^ {2}},
$$

using (a) Fubini's Theorem, (b) simple geometry. 

24. Geometric area Find the area of the circular washer with outer radius 2 and inner radius 1, using (a) Fubini's Theorem, (b) simple geometry. 

25. Bacterium population If $f(x,y)=(10,000e^{y})/(1+|x|/2)$ represents the “population density” of a certain bacterium on the xy-plane, where x and y are measured in centimeters, find the total population of bacteria within the rectangle $-5\leq x\leq5$ and $-2\leq y\leq0$ . 

26. Regional population If $f(x,y)=100(y+1)$ represents the population density of a planar region on Earth, where x and y are measured in kilometers, find the number of people in the region bounded by the curves $x=y^{2}$ and $x=2y-y^{2}$ . 

27. Average temperature in Texas According to the Texas Almanac, Texas has 254 counties and a National Weather Service station in each county. Assume that at time $t_{0}$ , each of the 254 weather stations recorded the local temperature. Find a formula that would give a reasonable approximation of the average temperature in Texas at time $t_{0}$ . Your answer should involve information that you would expect to be readily available in the Texas Almanac. 

28. If $y = f(x)$ is a nonnegative continuous function over the closed interval $a \leq x \leq b$ , show that the double integral definition of area for the closed plane region bounded by the graph of f, the vertical lines x = a and x = b, and the x-axis agrees with the definition for area beneath the curve in Section 5.3. 

29. Suppose $f(x, y)$ is continuous over a region $R$ in the plane and that the area $A(R)$ of the region is defined. If there are constants $m$ and $M$ such that $m \leq f(x, y) \leq M$ for all $(x, y) \in R$ , prove that 

$$
m A (R) \leq \iint_ {R} f (x, y) d A \leq M A (R).
$$

30. Suppose $f(x, y)$ is continuous and nonnegative over a region $R$ in the plane with a defined area $A(R)$ . If $\iint_{R} f(x, y) dA = 0$ , prove that $f(x, y) = 0$ at every point $(x, y) \in R$ . 

## 14.4 Double Integrals in Polar Form

Double integrals are sometimes easier to evaluate if we change to polar coordinates. This section shows how to accomplish the change and how to evaluate double integrals over regions whose boundaries are given by polar equations. 

### Integrals in Polar Coordinates

When we defined the double integral of a function over a region R in the xy-plane, we began by cutting R into rectangles whose sides were parallel to the coordinate axes. These were the natural shapes to use because their sides have either constant x-values or constant y-values. In polar coordinates, the natural shape is a “polar rectangle” whose sides have constant r- and $\theta$ -values. To avoid ambiguities when describing the region of integration with polar coordinates, we use polar coordinate points $(r, \theta)$ where $r \geq 0$ . 

Suppose that a function $f(r, \theta)$ is defined over a region R that is bounded by the rays $\theta = \alpha$ and $\theta = \beta$ and by the continuous curves $r = g_{1}(\theta)$ and $r = g_{2}(\theta)$ . Suppose also that $0 \leq g_{1}(\theta) \leq g_{2}(\theta) \leq a$ for every value of $\theta$ between $\alpha$ and $\beta$ . Then R lies in a fan-shaped region Q defined by the inequalities $0 \leq r \leq a$ and $\alpha \leq \theta \leq \beta$ , where $0 \leq \beta - \alpha \leq 2\pi$ . See Figure 14.22. 

We cover Q by a grid of circular arcs and rays. The arcs are cut from circles centered at the origin, with radii $\Delta r$ , $2\Delta r$ , ..., $m\Delta r$ , where $\Delta r = a/m$ . The rays are given by 

$$
\theta = \alpha , \quad \theta = \alpha + \Delta \theta , \quad \theta = \alpha + 2 \Delta \theta , \quad \dots , \quad \theta = \alpha + m ^ {\prime} \Delta \theta = \beta ,
$$

where $\Delta\theta = (\beta - \alpha)/m'$ . The arcs and rays partition Q into small patches called “polar rectangles.” 

We number the polar rectangles that lie inside R (the order does not matter), calling their areas $\Delta A_{1}, \Delta A_{2}, \ldots, \Delta A_{n}$ . We let $(r_{k}, \theta_{k})$ be any point in the polar rectangle whose area is $\Delta A_{k}$ . We then form the sum 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (r _ {k}, \theta_ {k}) \Delta A _ {k}.
$$

![教材插图](/books/thomas-calculus/assets/dc757d53f7d57751ff24974c043b473b0788a30f13398fd0a38195c4d8928c2f.jpg)


![教材插图](/books/thomas-calculus/assets/475a0a106b1ea77866b9d00b8e909502a7abd12a34450f47bd885f6b7eb250fd.jpg)



FIGURE 14.23 The observation that


$$
\Delta A _ {k} = \binom{\text { area   of }}{\text { large   sector }} - \binom{\text { area   of }}{\text { small   sector }}
$$

leads to the formula $\Delta A_{k} = r_{k}\Delta r\Delta \theta$ 


FIGURE 14.22 The region $R$ : $g_{1}(\theta) \leq r \leq g_{2}(\theta)$ , $\alpha \leq \theta \leq \beta$ , is contained in the fan-shaped region $Q$ : $0 \leq r \leq a$ , $\alpha \leq \theta \leq \beta$ , where $0 \leq \beta - \alpha \leq 2\pi$ . The partition of $Q$ by circular arcs and rays induces a partition of $R$ .


If f is continuous throughout R, this sum will approach a limit as we refine the grid to make $\Delta r$ and $\Delta\theta$ go to zero. The limit is the double integral of f over R. In symbols, 

$$
\lim _ {n \rightarrow \infty} S _ {n} = \iint_ {R} f (r, \theta) d A.
$$

To evaluate this limit, we first have to write the sum $S_{n}$ in a way that expresses $\Delta A_{k}$ in terms of $\Delta r$ and $\Delta\theta$ . For convenience we choose $r_{k}$ to be the average of the radii of the inner and outer arcs bounding the kth polar rectangle $\Delta A_{k}$ . The radius of the inner arc bounding $\Delta A_{k}$ is then $r_{k} - (\Delta r/2)$ (Figure 14.23). The radius of the outer arc is $r_{k} + (\Delta r/2)$ . 

The area of a wedge-shaped sector of a circle having radius r and central angle $\Delta\theta$ is 

$$
A = \frac {1}{2} \Delta \theta \cdot r ^ {2},
$$

as can be seen by multiplying $\pi r^2$ , the area of the circle, by $\Delta \theta / 2\pi$ , the fraction of the circle's area contained in the wedge. So the areas of the circular sectors subtended by these arcs at the origin are 

Area of small sector: 

$$
\frac {1}{2} \Big (r _ {k} - \frac {\Delta r}{2} \Big) ^ {2} \Delta \theta
$$

Area of large sector: 

$$
\frac {1}{2} \left(r _ {k} + \frac {\Delta r}{2}\right) ^ {2} \Delta \theta .
$$

Therefore, 

$\Delta A_{k} =$ area of large sector - area of small sector 

$$
= \frac {\Delta \theta}{2} \left[ \left(r _ {k} + \frac {\Delta r}{2}\right) ^ {2} - \left(r _ {k} - \frac {\Delta r}{2}\right) ^ {2} \right] = \frac {\Delta \theta}{2} (2 r _ {k} \Delta r) = r _ {k} \Delta r \Delta \theta .
$$

Combining this result with the sum defining $S_{n}$ gives 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (r _ {k}, \theta_ {k}) r _ {k} \Delta r \Delta \theta .
$$

As $n \to \infty$ and the values of $\Delta r$ and $\Delta \theta$ approach zero, these sums converge to the double integral 

$$
\lim _ {n \rightarrow \infty} S _ {n} = \iint_ {R} f (r, \theta) r d r d \theta .
$$

![教材插图](/books/thomas-calculus/assets/a5d2d894eb2d3aa91334b8df294ae28ad31f5fac8f2615bae255a9729ec95a53.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/28faa40194faa9127ab998c6e62f091095aeb25e226e77ce6c24d7298ad022ae.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/26a9850adf297f92734c78928d39b1217e9e78f79f2fe095bf8e52c10f062722.jpg)



(c)



FIGURE 14.24 Finding the limits of integration in polar coordinates.


![教材插图](/books/thomas-calculus/assets/93966b66b0469efca6b432a92725ca81c80a1a31a2b539d13871f80454f32662.jpg)



FIGURE 14.25 Finding the limits of integration in polar coordinates for the region in Example 1.


Area Differential in Polar Coordinates 

$$
d A = r d r d \theta
$$

A version of Fubini's Theorem says that the limit approached by these sums can be evaluated by repeated single integrations with respect to $r$ and $\theta$ as 

$$
\iint_ {R} f (r, \theta) d A = \int_ {\theta = \alpha} ^ {\theta = \beta} \int_ {r = g _ {1} (\theta)} ^ {r = g _ {2} (\theta)} f (r, \theta) r d r d \theta .
$$

### Finding Limits of Integration

The procedure for finding limits of integration in rectangular coordinates also works for polar coordinates. We illustrate this using the region R shown in Figure 14.24. To evaluate $\iint_{R} f(r, \theta) \, dA$ in polar coordinates, integrating first with respect to r and then with respect to $\theta$ , take the following steps. 

1. Sketch. Sketch the region and label the bounding curves (Figure 14.24a). 

2. Find the r-limits of integration. Imagine a ray L from the origin cutting through R in the direction of increasing r. Mark the r-values where L enters and leaves R. These are the r-limits of integration. They usually depend on the angle $\theta$ that L makes with the positive x-axis (Figure 14.24b). 

3. Find the $\theta$ -limits of integration. Find the smallest and largest $\theta$ -values that bound R. These are the $\theta$ -limits of integration (Figure 14.24c). The polar iterated integral is 

$$
\iint_ {R} f (r, \theta) d A = \int_ {\theta = \pi / 4} ^ {\theta = \pi / 2} \int_ {r = \sqrt {2} \cos \theta} ^ {r = 2} f (r, \theta) r d r d \theta .
$$

**EXAMPLE 1** Find the limits of integration for integrating $f(r, \theta)$ over the region R that lies inside the cardioid $r = 1 + \cos \theta$ and outside the circle r = 1. 

**Solution**

1. We first sketch the region and label the bounding curves (Figure 14.25). 

2. Next we find the r-limits of integration. A typical ray from the origin enters R where r = 1 and leaves where $r = 1 + \cos \theta$ . 

3. Finally, we find the $\theta$ -limits of integration. The rays from the origin that intersect $R$ run from $\theta = -\pi/2$ to $\theta = \pi/2$ . The integral is 

$$
\int_ {- \pi / 2} ^ {\pi / 2} \int_ {1} ^ {1 + \cos \theta} f (r, \theta) r d r d \theta .
$$

If $f(r,\theta)$ is the constant function whose value is 1, then the integral of f over R is the area of R. 

Area in Polar Coordinates 

The area of a closed and bounded region R in the polar coordinate plane is 

$$
A = \iint_ {R} r d r d \theta .
$$

This formula for area is consistent with all earlier formulas. 

![教材插图](/books/thomas-calculus/assets/4e112df1b36869022d9bde0ce6cdc8d63883b124b3734112f2cd92630a963a9e.jpg)



FIGURE 14.26 To integrate over the shaded region, we run r from 0 to $\sqrt{4\cos2\theta}$ and $\theta$ from 0 to $\pi/4$ (Example 2).


![教材插图](/books/thomas-calculus/assets/7d991f3fdee54e1db2486500f4b46cbfd7c0b08dc107e9bb7ece4a442457c289.jpg)



FIGURE 14.27 The semicircular region in Example 3 is the region


$$
0 \leq r \leq 1, \quad 0 \leq \theta \leq \pi .
$$

**EXAMPLE 2** Find the area enclosed by the lemniscate $r^{2} = 4 \cos 2\theta$ .

**Solution** We graph the lemniscate to determine the limits of integration (Figure 14.26) and see from the symmetry of the region that the total area is 4 times the first-quadrant portion. 

$$
\begin{array}{l} A = 4 \int_ {0} ^ {\pi / 4} \int_ {0} ^ {\sqrt {4 \cos 2 \theta}} r d r d \theta = 4 \int_ {0} ^ {\pi / 4} \left[ \frac {r ^ {2}}{2} \right] _ {r = 0} ^ {r = \sqrt {4 \cos 2 \theta}} d \theta \\ = 4 \int_ {0} ^ {\pi / 4} 2 \cos 2 \theta d \theta = 4 \sin 2 \theta \bigg ] _ {0} ^ {\pi / 4} = 4. \end{array}
$$

### Changing Cartesian Integrals into Polar Integrals

The procedure for changing a Cartesian integral $\iint_{R} f(x, y) \, dx \, dy$ into a polar integral has two steps. First substitute $x = r \cos \theta$ and $y = r \sin \theta$ , and replace dx dy by $r \, dr \, d\theta$ in the Cartesian integral. Then supply polar limits of integration for the boundary of R. The Cartesian integral then becomes 

$$
\iint_ {R} f (x, y) d x d y = \iint_ {G} f (r \cos \theta , r \sin \theta) r d r d \theta ,
$$

where G denotes the same region of integration, but now described in polar coordinates. This is like the substitution method in Chapter 5 except that there are now two variables to substitute for instead of one. Notice that the area differential dx dy is replaced not by dr dθ but by r dr dθ. A more general discussion of changes of variables (substitutions) in multiple integrals is given in Section 14.8. 

**EXAMPLE 3** Evaluate

$$
\iint_ {R} e ^ {x ^ {2} + y ^ {2}} d y d x,
$$

where R is the semicircular region bounded by the x-axis and the curve $y = \sqrt{1 - x^{2}}$ (Figure 14.27). 

**Solution** In Cartesian coordinates, the integral in question is a nonelementary integral and there is no direct way to integrate $e^{x^{2}+y^{2}}$ with respect to either x or y. Yet this integral and others like it are important in mathematics—in statistics, for example—and we need to evaluate it. Polar coordinates make this possible. Substituting x = r cos $\theta$ and $y = r \sin \theta$ and replacing dy dx by r dr d $\theta$ give 

$$
\begin{array}{c} \iint_ {R} e ^ {x ^ {2} + y ^ {2}} d y d x = \int_ {0} ^ {\pi} \int_ {0} ^ {1} e ^ {r ^ {2}} r d r d \theta = \int_ {0} ^ {\pi} \left[ \frac {1}{2} e ^ {r ^ {2}} \right] _ {r = 0} ^ {r = 1} d \theta \\ = \int_ {0} ^ {\pi} \frac {1}{2} (e - 1) d \theta = \frac {\pi}{2} (e - 1). \end{array}
$$

The r in the $r \, dr \, d\theta$ is what allowed us to integrate $e^{r^{2}}$ . Without it, we would have been unable to find an antiderivative for the first (innermost) iterated integral. 

**EXAMPLE 4** Evaluate the integral

$$
\int_ {0} ^ {1} \int_ {0} ^ {\sqrt {1 - x ^ {2}}} (x ^ {2} + y ^ {2}) d y d x.
$$

![教材插图](/books/thomas-calculus/assets/1dd6b41c4736e4fe18887a1a56207903de7710ae8d60ffec8f7e55efa7bfd1ec.jpg)



FIGURE 14.28 The solid region in Example 5.


![教材插图](/books/thomas-calculus/assets/9874eb12c5168b1a23e5faab1bba66096e83113ecbf1ab48445d860e59d79e22.jpg)



FIGURE 14.29 The region R in Example 6.


**Solution** Integration with respect to y gives 

$$
\int_ {0} ^ {1} \left(x ^ {2} \sqrt {1 - x ^ {2}} + \frac {(1 - x ^ {2}) ^ {3 / 2}}{3}\right) d x,
$$

which is difficult to evaluate without tables. Things go better if we change the original integral to polar coordinates. The region of integration in Cartesian coordinates is given by the inequalities $0 \leq y \leq \sqrt{1 - x^{2}}$ and $0 \leq x \leq 1$ , which correspond to the interior of the unit quarter circle $x^{2} + y^{2} = 1$ in the first quadrant. (See Figure 14.27, first quadrant.) Substituting the polar coordinates $x = r \cos \theta$ , $y = r \sin \theta$ , $0 \leq \theta \leq \pi/2$ , and $0 \leq r \leq 1$ , and replacing dy dx by r dr dθ in the double integral, we get 

$$
\begin{array}{c} \int_ {0} ^ {1} \int_ {0} ^ {\sqrt {1 - x ^ {2}}} (x ^ {2} + y ^ {2}) d y d x = \int_ {0} ^ {\pi / 2} \int_ {0} ^ {1} (r ^ {2}) r d r d \theta \\ = \int_ {0} ^ {\pi / 2} \left[ \frac {r ^ {4}}{4} \right] _ {r = 0} ^ {r = 1} d \theta = \int_ {0} ^ {\pi / 2} \frac {1}{4} d \theta = \frac {\pi}{8}. \end{array}
$$

The polar coordinate transformation is effective here because $x^{2} + y^{2}$ simplifies to $r^{2}$ and the limits of integration become constants. 

**EXAMPLE 5** Find the volume of the solid region bounded above by the paraboloid $z = 9 - x^{2} - y^{2}$ and below by the unit circle in the xy-plane. 

**Solution** The region of integration R is bounded by the unit circle $x^{2} + y^{2} = 1$ , which is described in polar coordinates by $r = 1, 0 \leq \theta \leq 2\pi$ . The solid region is shown in Figure 14.28. The volume is given by the double integral 

$$
\begin{array}{l} \iint_ {R} (9 - x ^ {2} - y ^ {2}) d A = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} (9 - r ^ {2}) r d r d \theta \quad r ^ {2} = x ^ {2} + y ^ {2}, d A = r d r d \theta . \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {1} (9 r - r ^ {3}) d r d \theta \\ = \int_ {0} ^ {2 \pi} \left[ \frac {9}{2} r ^ {2} - \frac {1}{4} r ^ {4} \right] _ {r = 0} ^ {r = 1} d \theta \\ = \frac {1 7}{4} \int_ {0} ^ {2 \pi} d \theta = \frac {1 7 \pi}{2}. \end{array}
$$

**EXAMPLE 6** Using polar integration, find the area of the region R enclosed by the circle $x^{2} + y^{2} = 4$ , above the line y = 1, and below the line $y = \sqrt{3}x$ . 

**Solution** A sketch of the region R is shown in Figure 14.29. First we note that the line $y = \sqrt{3}x$ has slope $\sqrt{3} = \tan \theta$ , so $\theta = \pi/3$ . Next we observe that the line y = 1 intersects the circle $x^{2} + y^{2} = 4$ when $x^{2} + 1 = 4$ , or $x = \sqrt{3}$ . Moreover, the radial line from the origin through the point $(\sqrt{3}, 1)$ has slope $1/\sqrt{3} = \tan \theta$ , giving its angle of inclination as $\theta = \pi/6$ . This information is shown in Figure 14.29. 

Now, for the region R, as $\theta$ varies from $\pi/6$ to $\pi/3$ , the polar coordinate r varies from the horizontal line y = 1 to the circle $x^{2} + y^{2} = 4$ . Substituting r sin $\theta$ for y in the equation for the horizontal line, we have r sin $\theta = 1$ , or r = csc $\theta$ , which is the polar equation of the line. The polar equation for the circle is r = 2. So in polar coordinates, for $\pi/6 \leq \theta \leq \pi/3$ , r varies from r = csc $\theta$ to r = 2. It follows that the iterated integral for the area is 

$$
\begin{array}{l} \iint_ {R} d A = \int_ {\pi / 6} ^ {\pi / 3} \int_ {\csc \theta} ^ {2} r d r d \theta \\ \qquad = \int_ {\pi / 6} ^ {\pi / 3} \left[ \frac {1}{2} r ^ {2} \right] _ {r = \csc \theta} ^ {r = 2} d \theta \\ \qquad = \int_ {\pi / 6} ^ {\pi / 3} \frac {1}{2} [ 4 - \csc^ {2} \theta ] d \theta \\ \qquad = \frac {1}{2} \left[ 4 \theta + \cot \theta \right] _ {\pi / 6} ^ {\pi / 3} \\ \qquad = \frac {1}{2} \left(\frac {4 \pi}{3} + \frac {1}{\sqrt {3}}\right) - \frac {1}{2} \left(\frac {4 \pi}{6} + \sqrt {3}\right) = \frac {\pi - \sqrt {3}}{3}. \end{array}
$$

### EXERCISES 14.4

Regions in Polar Coordinates 

In Exercises 1–8, describe the given region in polar coordinates. 

1. 

![教材插图](/books/thomas-calculus/assets/414c617c6f0dc954d1305bd6b01781a7f0d5a700435ac63ad6fc5644c9d9407d.jpg)


2. 

![教材插图](/books/thomas-calculus/assets/8639b62137ec621fa5bb736026752bb753baff39eff4a217bca34839dfedea79.jpg)


3. 

![教材插图](/books/thomas-calculus/assets/ae1acc7796254cba34b5c5e6c713dc80a8135ac13e27eaa128cb2465fe73143a.jpg)


4. 

![教材插图](/books/thomas-calculus/assets/c1bb5d3ffd89082deb13b1b1954a550a21da3b981f5d13e91e06e8fface55fc4.jpg)


5. 

![教材插图](/books/thomas-calculus/assets/034032f6fb7c927634771e54a45955a5b41c93edb3e62e9cc797e3506e900c70.jpg)


6. 

![教材插图](/books/thomas-calculus/assets/9526ff3b664fdb47c2204bec298e2f18d2ede02279079cad35e14273b9616579.jpg)


7. The region enclosed by the circle $x^{2} + y^{2} = 2x$ 

8. The region enclosed by the semicircle $x^{2} + y^{2} = 2y$ , $y \geq 1$ 

Evaluating Polar Integrals 

In Exercises 9–22, change the Cartesian integral into an equivalent polar integral. Then evaluate the polar integral. 

9. $\int_{-1}^{1}\int_{0}^{\sqrt{1 - x^2}}dydx$ 

10. $\int_0^1\int_0^{\sqrt{1 - y^2}}(x^2 +y^2)dxdy$ 

11. $\int_0^2\int_0^{\sqrt{4 - y^2}}(x^2 +y^2)dx dy$ 

12. $\int_{-a}^{a}\int_{-\sqrt{a^2 - x^2}}^{\sqrt{a^2 - x^2}}dydx$ 

13. $\int_0^6\int_0^y x dx dy$ 

14. $\int_0^2\int_0^x ydydx$ 

15. $\int_{1}^{\sqrt{3}}\int_{1}^{x}dy dx$ 

16. $\int_{\sqrt{2}}^{2}\int_{\sqrt{4 - y^2}}^{y}dx dy$ 

17. $\int_{-1}^{0}\int_{-\sqrt{1 - x^2}}^{0}\frac{2}{1 + \sqrt{x^2 + y^2}} dy dx$ 

18. $\int_{-1}^{1}\int_{-\sqrt{1 - x^2}}^{\sqrt{1 - x^2}}\frac{2}{(1 + x^2 + y^2)^2} dy dx$ 

19. $\int_0^{\ln 2}\int_0^{\sqrt{(\ln 2)^2 - y^2}}e^{\sqrt{x^2 + y^2}}dxdy$ 

20. $\int_{-1}^{1}\int_{-\sqrt{1 - y^2}}^{\sqrt{1 - y^2}}\ln (x^2 +y^2 +1)dx dy$ 

21. $\int_0^1\int_x^{\sqrt{2 - x^2}}(x + 2y)dydx$ 

22. $\int_ {1} ^ {2} \int_ {0} ^ {\sqrt {2 x - x ^ {2}}} \frac {1}{\left(x ^ {2} + y ^ {2}\right) ^ {2}} d y d x$

In Exercises 23–26, sketch the region of integration, and convert each polar integral or sum of integrals into a Cartesian integral or sum of integrals. Do not evaluate the integrals. 

23. $\int_0^{\pi /2}\int_0^1 r^3\sin \theta \cos \theta dr d\theta$ 

24. $\int_{\pi /6}^{\pi /2}\int_{1}^{\csc \theta}r^{2}\cos \theta dr d\theta$ 

25. $\int_0^{\pi /4}\int_0^{2\sec \theta}r^5\sin^2\theta dr d\theta$ 

26. $\int_ {0} ^ {\arctan \frac {4}{3}} \int_ {0} ^ {3 \sec \theta} r ^ {7} d r d \theta + \int_ {\arctan \frac {4}{3}} ^ {\pi / 2} \int_ {0} ^ {4 \csc \theta} r ^ {7} d r d \theta$

Area in Polar Coordinates 

27. Find the area of the region cut from the first quadrant by the curve $r = 2(2 - \sin 2\theta)^{1/2}$ . 

28. Cardioid overlapping a circle Find the area of the region that lies inside the cardioid $r = 1 + \cos \theta$ and outside the circle r = 1. 

29. One leaf of a rose Find the area enclosed by one leaf of the rose $r = 12 \cos 3\theta$ . 

30. Snail shell Find the area of the region enclosed by the positive x-axis and spiral $r = 4\theta/3$ , $0 \leq \theta \leq 2\pi$ . The region looks like a snail shell. 

31. Cardioid in the first quadrant Find the area of the region cut from the first quadrant by the cardioid $r = 1 + \sin \theta$ . 

32. Overlapping cardioids Find the area of the region common to the interiors of the cardioids $r = 1 + \cos \theta$ and $r = 1 - \cos \theta$ . 

#### Average Values

In polar coordinates, the average value of a function over a region R (Section 14.3) is given by 

$$
\frac {1}{\text { Area } (R)} \iint_ {R} f (r, \theta) r d r d \theta .
$$

33. Average height of a hemisphere Find the average height of the hemispherical surface $z = \sqrt{a^2 - x^2 - y^2}$ above the disk $x^2 + y^2 \leq a^2$ in the xy-plane. 

34. Average height of a cone Find the average height of the (single) cone $z = \sqrt{x^2 + y^2}$ above the disk $x^2 + y^2 \leq a^2$ in the xy-plane. 

35. Average distance from interior of disk to center Find the average distance from a point $P(x, y)$ in the disk $x^{2} + y^{2} \leq a^{2}$ to the origin. 

36. Average distance squared from a point in a disk to a point in its boundary Find the average value of the square of the distance from the point $P(x, y)$ in the disk $x^{2} + y^{2} \leq 1$ to the boundary point $A(1, 0)$ . 

#### Theory and Examples

37. Converting to a polar integral Integrate $f(x,y) = [\ln (x^2 +y^2)] / \sqrt{x^2 + y^2}$ over the region $1\leq x^{2} + y^{2}\leq e$ . 

38. Converting to a polar integral Integrate $f(x, y) = [\ln (x^2 + y^2)] / (x^2 + y^2)$ over the region $1 \leq x^2 + y^2 \leq e^2$ . 

39. Volume of noncircular right cylinder The region that lies inside the cardioid $r = 1 + \cos \theta$ and outside the circle $r = 1$ is the base of a solid right cylinder. The top of the cylinder lies in the plane $z = x$ . Find the cylinder's volume. 

40. Volume of noncircular right cylinder The region enclosed by the lemniscate $r^2 = 2\cos 2\theta$ is the base of a solid right cylinder whose top is bounded by the sphere $z = \sqrt{2 - r^2}$ . Find the cylinder's volume. 

41. Converting to polar integrals

a. The usual way to evaluate the improper integral $I = \int_0^\infty e^{-x^2} dx$ is first to calculate its square: 

$$
I ^ {2} = \left(\int_ {0} ^ {\infty} e ^ {- x ^ {2}} d x\right) \left(\int_ {0} ^ {\infty} e ^ {- y ^ {2}} d y\right) = \int_ {0} ^ {\infty} \int_ {0} ^ {\infty} e ^ {- (x ^ {2} + y ^ {2})} d x d y.
$$

Evaluate the last integral using polar coordinates and solve the resulting equation for I. 

b. Evaluate 

$$
\lim _ {x \rightarrow \infty} \operatorname{erf} (x) = \lim _ {x \rightarrow \infty} \int_ {0} ^ {x} \frac {2 e ^ {- t ^ {2}}}{\sqrt {\pi}} d t.
42. $Converting to a polar integral Evaluate the integral$
\int_ {0} ^ {\infty} \int_ {0} ^ {\infty} \frac {1}{(1 + x ^ {2} + y ^ {2}) ^ {2}} d x d y.
$$

43. Existence Integrate the function $f(x, y) = 1 / (1 - x^2 - y^2)$ over the disk $x^2 + y^2 \leq 3/4$ . Does the integral of $f(x, y)$ over the disk $x^2 + y^2 \leq 1$ exist? Give reasons for your answer. 

44. Area formula in polar coordinates Use the double integral in polar coordinates to derive the formula 

$$
A = \int_ {\alpha} ^ {\beta} \frac {1}{2} r ^ {2} d \theta
$$

for the area of the fan-shaped region between the origin and the polar curve $r = f(\theta)$ , $\alpha \leq \theta \leq \beta$ . 

45. Average distance to a given point inside a disk Let $P_0$ be a point inside a circle of radius $a$ and let $h$ denote the distance from $P_0$ to the center of the circle. Let $d$ denote the distance from an arbitrary point $P$ to $P_0$ . Find the average value of $d^2$ over the region enclosed by the circle. (Hint: Simplify your work by placing the center of the circle at the origin and $P_0$ on the $x$ -axis.) 

46. Area Suppose that the area of a region in the polar coordinate plane is 

$$
A = \int_ {\pi / 4} ^ {3 \pi / 4} \int_ {\csc \theta} ^ {2 \sin \theta} r d r d \theta .
$$

Sketch the region and find its area. 

47. Evaluate the integral $\iint_{R} \sqrt{x^2 + y^2} dA$ , where $R$ is the region inside the upper semicircle of radius 2 centered at the origin, but outside the circle $x^2 + (y - 1)^2 = 1$ . 

48. Evaluate the integral $\iint_{R}(x^{2} + y^{2})^{-2}dA$ , where $R$ is the region inside the circle $x^{2} + y^{2} = 2$ for $x\leq -1$ . 

#### COMPUTER EXPLORATIONS

In Exercises 49–52, use a CAS to change the Cartesian integrals into an equivalent polar integral and evaluate the polar integral. Perform the following steps in each exercise. 

a. Plot the Cartesian region of integration in the xy-plane. 

b. Change each boundary curve of the Cartesian region in part (a) to its polar representation by solving its Cartesian equation for r and $\theta$ . 

c. Using the results in part (b), plot the polar region of integration in the $r\theta$ -plane. 

d. Change the integrand from Cartesian to polar coordinates. Determine the limits of integration from your plot in part (c) and evaluate the polar integral using the CAS integration utility. 

49. $\int_ {0} ^ {1} \int_ {x} ^ {1} \frac {y}{x ^ {2} + y ^ {2}} d y d x \quad 5 0. \int_ {0} ^ {1} \int_ {0} ^ {x / 2} \frac {x}{x ^ {2} + y ^ {2}} d y d x$

51. $\int_ {0} ^ {1} \int_ {- y / 3} ^ {y / 3} \frac {y}{\sqrt {x ^ {2} + y ^ {2}}} d x d y$

52. $\int_ {0} ^ {1} \int_ {y} ^ {2 - y} \sqrt {x + y} d x d y$

## 14.5 Triple Integrals in Rectangular Coordinates

![教材插图](/books/thomas-calculus/assets/7cbfb759cbb9195e7e9255b0dd2ab9d9dbd13072b9b072fc789332ed6231abe9.jpg)



FIGURE 14.30 Partitioning a solid with rectangular cells of volume $\Delta V_{k}$ .


Just as double integrals allow us to deal with more general situations than could be handled by single integrals, triple integrals enable us to solve still more general problems. We use triple integrals to calculate the volumes of three-dimensional shapes and the average value of a function over a three-dimensional region. Triple integrals also arise in the study of vector fields and fluid flow in three dimensions, as we will see in Chapter 15. 

### Triple Integrals

If $F(x, y, z)$ is a function defined on a closed bounded solid region D in space, such as the region occupied by a solid ball or a lump of clay, then the integral of F over D may be defined in the following way. We partition a rectangular boxlike region containing D into rectangular cells by planes parallel to the coordinate axes (Figure 14.30). We number the cells that lie completely inside D from 1 to n in some order, the kth cell having dimensions $\Delta x_{k}$ by $\Delta y_{k}$ by $\Delta z_{k}$ and volume $\Delta V_{k} = \Delta x_{k} \Delta y_{k} \Delta z_{k}$ . We choose a point $(x_{k}, y_{k}, z_{k})$ in each cell and form the sum 

$$
S _ {n} = \sum_ {k = 1} ^ {n} F (x _ {k}, y _ {k}, z _ {k}) \Delta V _ {k}.\tag{1}
$$

We are interested in what happens as D is partitioned by smaller and smaller cells, so that $\Delta x_{k}, \Delta y_{k}, \Delta z_{k}$ , and the norm of the partition $\|P\|$ , the largest value among $\Delta x_{k}, \Delta y_{k}, \Delta z_{k}$ , all approach zero. When a single limiting value is attained, no matter how the partitions and points $(x_{k}, y_{k}, z_{k})$ are chosen, we say that F is integrable over D. As before, it can be shown that when F is continuous and the bounding surface of D is formed from finitely many smooth surfaces joined together along finitely many smooth curves, then F is integrable. In this case, as $\|P\| \to 0$ and the number of cells n goes to $\infty$ , the sums $S_{n}$ approach a limit. We call this limit the triple integral of F over D and write 

$$
\lim _ {n \rightarrow \infty} S _ {n} = \iiint_ {D} F (x, y, z) d V \quad \text { or } \quad \lim _ {\| P \| \rightarrow 0} S _ {n} = \iiint_ {D} F (x, y, z) d x d y d z.
$$

The regions D over which continuous functions are integrable are those having “reasonably smooth” boundaries. 

### Volume of a Solid Region in Space

If $F$ is the constant function whose value is 1, then the sums in Equation (1) reduce to 

$$
S _ {n} = \sum_ {k = 1} ^ {n} F (x _ {k}, y _ {k}, z _ {k}) \Delta V _ {k} = \sum_ {k = 1} ^ {n} 1 \cdot \Delta V _ {k} = \sum_ {k = 1} ^ {n} \Delta V _ {k}.
$$

As $\Delta x_{k}$ , $\Delta y_{k}$ , and $\Delta z_{k}$ approach zero, the cells $\Delta V_{k}$ become smaller and more numerous and fill up more and more of D. We therefore define the volume of D to be the triple integral 

$$
\lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \Delta V _ {k} = \iiint_ {D} d V.
$$

> ***DEFINITION*** The volume of a closed and bounded solid region D in space is 
>
> $$
> V = \iiint_ {D} d V.
> $$
>
This definition is in agreement with our previous definitions of volume, although we omit the verification of this fact. As we will see in a moment, this integral enables us to calculate the volumes of solids enclosed by curved surfaces. These are more general solids than the ones encountered before (Chapter 6 and Section 14.2). 

### Iterated Integrals

We evaluate a triple integral by applying a three-dimensional version of Fubini's Theorem (Section 14.2) to evaluate it by three repeated single integrations. As with double integrals, there is a geometric procedure for finding the limits of integration for these iterated integrals. 

To evaluate 

$$
\iiint_ {D} F (x, y, z) d V
$$

over a solid region D, integrate first with respect to z, then with respect to y, and finally with respect to x. (You might choose a different order of integration, but the procedure is similar, as we illustrate in Example 2.) 

1. Sketch. Sketch the solid region D along with its “shadow” R (vertical projection) in the xy-plane. Label the upper and lower bounding surfaces of D and the upper and lower bounding curves of R. 

![教材插图](/books/thomas-calculus/assets/1d4f91d99f8e484a1693799bc79b99d20146a2011ee721c40d7dccba503348de.jpg)


2. Find the z-limits of integration. Draw a line M passing through a typical point $(x, y)$ in R parallel to the z-axis. As z increases, M enters D at $z = f_{1}(x, y)$ and leaves at $z = f_{2}(x, y)$ . These are the z-limits of integration. 

![教材插图](/books/thomas-calculus/assets/9be289f78159ed0f8ece3f91b01ebf1048674b8c4a3be260300fa542de505a48.jpg)


3. Find the y-limits of integration. Draw a line L through $(x, y)$ parallel to the y-axis. As y increases, L enters R at $y = g_{1}(x)$ and leaves at $y = g_{2}(x)$ . These are the y-limits of integration. 

![教材插图](/books/thomas-calculus/assets/7ac7a8a0c6ae35bbec05d3f417179bd35ef39fc9c1b00af8222ef77fad1f437c.jpg)


4. Find the x-limits of integration. Choose x-limits that include all lines through R parallel to the y-axis (x = a and x = b in the preceding figure). These are the x-limits of integration. The integral is 

$$
\int_ {x = a} ^ {x = b} \int_ {y = g _ {1} (x)} ^ {y = g _ {2} (x)} \int_ {z = f _ {1} (x, y)} ^ {z = f _ {2} (x, y)} F (x, y, z) d z d y d x.
$$

Follow similar procedures if you change the order of integration. The “shadow” of the solid region D lies in the plane of the last two variables with respect to which the iterated integration takes place. The limits of an iterated triple integral satisfy these properties: 

- The limits of the outside integral are constants (they do not depend on any of the three variables of integration), 

- the limits of the middle integral are functions that may depend on the variable of the outside integral, and 

- the limits of the inside integral are functions that may depend on two variables: the middle integration variable and the outside integration variable. 

The preceding procedure applies whenever a solid region D is bounded above and below by a surface, and when the “shadow” region R is bounded by a lower and upper curve. It does not apply to regions with more complicated shapes (such as regions containing holes); although, sometimes such regions can be subdivided into simpler regions for which the procedure does apply. 

We illustrate this method of finding the limits of integration in our first example. 

**EXAMPLE 1** Let S be the sphere of radius 5 centered at the origin, and let D be the solid region under the sphere that lies above the plane z = 3. Set up the limits of integration for evaluating the triple integral of a function $F(x, y, z)$ over the region D. 

**Solution** The solid region under the sphere that lies above the plane z = 3 is enclosed by the surfaces $x^{2} + y^{2} + z^{2} = 25$ and z = 3. 

To find the limits of integration, we first sketch the solid region, as shown in Figure 14.31. The “shadow region” R in the xy-plane is a circle of some radius centered at the origin. By considering a side view of the region D, we can determine that the radius of this circle is 4; see Figure 14.32a. 

If we fix a point $(x, y)$ in R and draw a vertical line M above $(x, y)$ , then we see that this line enters the region D at the height z = 3 and leaves the region at the height $z = \sqrt{25 - x^{2} - y^{2}}$ ; see Figure 14.31. This gives us the z-limits of integration. 

To find the $y$ -limits of integration, we consider a line $L$ that lies in the region $R$ , passes through the point $(x, y)$ , and is parallel to the $y$ -axis. For clarity we have separately pictured the region $R$ and the line $L$ in Figure 14.32b. The line $L$ enters $R$ when $y = -\sqrt{16 - x^2}$ and exits when $y = \sqrt{16 - x^2}$ . This gives us the $y$ -limits of integration. 

Finally, as L sweeps across R from left to right, the value of x varies from x = -4 to x = 4. This gives us the x-limits of integration. Therefore, the triple integral of F over the region D is given by 

$$
\iiint_ {D} F (x, y, z) d z d y d x = \int_ {- 4} ^ {4} \int_ {- \sqrt {1 6 - x ^ {2}}} ^ {\sqrt {1 6 - x ^ {2}}} \int_ {3} ^ {\sqrt {2 5 - x ^ {2} - y ^ {2}}} F (x, y, z) d z d y d x. \quad \blacksquare
$$

![教材插图](/books/thomas-calculus/assets/8533429c2eb77052b62c72d0fcb6346e8c32e38fac7a75ff950469b91286b6c0.jpg)



FIGURE 14.31 Finding the limits of integration for evaluating the triple integral of a function defined over the portion of the sphere of radius 5 that lies above the plane z = 3 (Example 1).



(b)


![教材插图](/books/thomas-calculus/assets/e177c174c0707de398d928beb8e36dd8169e17dea038444575c2ca066c776d72.jpg)


![教材插图](/books/thomas-calculus/assets/7ec123f9aefc2f01fffc020d7c238e2536043db038858cacb603a29f953d7d19.jpg)


![教材插图](/books/thomas-calculus/assets/1179a3bb3e6aad059702676e4a4f6a8485f69cac2aad2c11962f10da9a75e4a7.jpg)



FIGURE 14.33 (a) The tetrahedron in Example 2, showing how the limits of integration are found for the order dz dy dx. (b) The “shadow region” R shown face-on in the xy-plane.



FIGURE 14.32 (a) Side view of the solid region from Example 1, looking down the x-axis. The dashed right triangle has a hypotenuse of length 5 and sides of lengths 3 and 4. In this side view, the shadow region R lies between -4 and 4 on the y-axis. (b) The “shadow region” R shown face-on in the xy-plane.


The region D in Example 1 has a great deal of symmetry, which makes visualization easier. Even without symmetry, the steps in finding the limits of integration are the same, as shown in the next example. 

**EXAMPLE 2** Set up the limits of integration for evaluating the triple integral of a function $F(x, y, z)$ over the tetrahedron $D$ whose vertices are $O(0, 0, 0)$ , $A(1, 1, 0)$ , $B(0, 1, 0)$ , and $C(0, 1, 1)$ . Use the order of integration $dz \, dy \, dx$ . 

**Solution** The solid region D and its “shadow” R in the xy-plane are shown in Figure 14.33a. The “top” face is contained in the plane through the points O, A, and C. Following the procedure introduced in Example 7 of Section 11.5, we first form a normal vector to that plane: 

$$
\mathbf {n} = \overrightarrow {O A} \times \overrightarrow {O C} = \left| \begin{array}{c c c} \mathbf {i} & \mathbf {j} & \mathbf {k} \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{array} \right| = \mathbf {i} - \mathbf {j} + \mathbf {k},
$$

and then use this vector and the coordinates of O to set up an equation for the plane: 

$$
\begin{array}{c} 1 (x - 0) - 1 (y - 0) + 1 (z - 0) = 0 \\ x - y + z = 0. \end{array}
$$

The “side” face of D is parallel to the xz-plane, the “back” face lies in the yz-plane, and the “bottom” face is contained in the xy-plane. 

To find the z-limits of integration, fix a point $(x, y)$ in the shadow region R, and consider the vertical line M that passes through $(x, y)$ and is parallel to the z-axis. This line enters D at the height z = 0, and it exits at height z = y - x. 

To find the y-limits of integration we again fix a point $(x, y)$ in R, but now we consider a line L that lies in R, passes through $(x, y)$ , and is parallel to the y-axis. This line is shown in Figure 14.33a and also in the face-on view of R that is pictured in Figure 14.33b. The line L enters R when y = x and exits when y = 1. 

Finally, as L sweeps across R, the value of x varies from x = 0 to x = 1. Therefore, the triple integral of F over the region D is given by 

$$
\iiint_ {D} F (x, y, z) d z d y d x = \int_ {0} ^ {1} \int_ {x} ^ {1} \int_ {0} ^ {y - x} F (x, y, z) d z d y d x.
$$

![教材插图](/books/thomas-calculus/assets/1ceebe42fd78698c464457d7f11c3a9d0143e6e2b811e5b3bd6f1cbc9b911398.jpg)



FIGURE 14.34 Finding the limits of integration for evaluating the triple integral of a function defined over the tetrahedron D (Example 3).


In the next example we project the region D onto the xz-plane instead of the xy-plane, to show how to use a different order of integration. 

**EXAMPLE 3** Find the volume of the tetrahedron D from Example 2 by integrating $F(x,y,z)=1$ over the region using the order dz dy dx. Then do the same calculation using the order dy dz dx. 

**Solution** Using the limits of integration that we found in Example 2, we calculate the volume of the tetrahedron as follows: 

$$
\begin{array}{l l} V = \int_ {0} ^ {1} \int_ {x} ^ {1} \int_ {0} ^ {y - x} d z   d y   d x & \text {   Integrand   is   1   when   computing   volume.   } \\ = \int_ {0} ^ {1} \int_ {x} ^ {1} (y - x)   d y   d x & \text {   Integrate   over   } z \\ = \int_ {0} ^ {1} \left[ \frac {1}{2} y ^ {2} - x y \right] _ {y = x} ^ {y = 1}   d x & \text {   and   evaluate.   } \\ = \int_ {0} ^ {1} \left(\frac {1}{2} - x + \frac {1}{2} x ^ {2}\right) d x & \text {   Integrate   over   } y. \\ = \left[ \frac {1}{2} x - \frac {1}{2} x ^ {2} + \frac {1}{6} x ^ {3} \right] _ {0} ^ {1} & \text {   Evaluate.   } \\ = \frac {1}{6}. & \text {   Integrate   over   } x. \\ & \text {   Evaluate.   } \end{array}
$$

Now we will compute the volume using the order of integration dy dz dx. The procedure for finding the limits of integration is similar, except that we find the limits for y first, then for z, and then for x. The region D is the same tetrahedron as before, but now the “shadow region” R lies in the xz-plane, as shown in Figure 14.34. 

To find the y-limits of integration, we fix a point $(x, z)$ in the shadow R and consider the line M that passes through $(x, z)$ and is parallel to the y-axis. As shown in Figure 14.34, this line enters D when $y = x + z$ , and it leaves when y = 1. 

Next we find the z-limits of integration. The line L that passes through a point $(x, z)$ in R and is parallel to the z-axis enters R when z = 0 and exits when z = 1 - x (see Figure 14.34). 

Finally, as $L$ sweeps across $R$ , the value of $x$ varies from $x = 0$ to $x = 1$ . Therefore, the volume of the tetrahedron is 

$$
\begin{array}{l} V = \int_ {0} ^ {1} \int_ {0} ^ {1 - x} \int_ {x + z} ^ {1} d y d z d x \\ = \int_ {0} ^ {1} \int_ {0} ^ {1 - x} (1 - x - z) d z d x \\ = \int_ {0} ^ {1} \left[ (1 - x) z - \frac {1}{2} z ^ {2} \right] _ {z = 0} ^ {z = 1 - x} d x \\ = \int_ {0} ^ {1} \left[ (1 - x) ^ {2} - \frac {1}{2} (1 - x) ^ {2} \right] d x \\ = \frac {1}{2} \int_ {0} ^ {1} (1 - x) ^ {2} d x \\ = - \frac {1}{6} (1 - x) ^ {3} \bigg ] _ {0} ^ {1} = \frac {1}{6}. \end{array}
$$

Next we set up and evaluate a triple integral over a more complicated region. 

**EXAMPLE 4** Find the volume of the solid region D enclosed by the surfaces $z = x^{2} + 3y^{2}$ and $z = 8 - x^{2} - y^{2}$ . 

**Solution** The volume is 

$$
V = \iiint_ {D} d z   d y   d x,
$$

the integral of $F(x, y, z) = 1$ over D. To find the limits of integration for evaluating the integral, we first sketch the region. The surfaces (Figure 14.35) intersect on the elliptical cylinder $x^{2} + 3y^{2} = 8 - x^{2} - y^{2}$ or $x^{2} + 2y^{2} = 4$ , z > 0. The boundary of the region R, the projection of D onto the xy-plane, is an ellipse with the same equation: $x^{2} + 2y^{2} = 4$ . The “upper” boundary of R is the curve $y = \sqrt{(4 - x^{2})/2}$ . The lower boundary is the curve $y = -\sqrt{(4 - x^{2})/2}$ . 

![教材插图](/books/thomas-calculus/assets/b4105f2cdabbd47b115bcac2daba995642c416f085959e7826789650edb8ce99.jpg)



FIGURE 14.35 The volume of the region enclosed by two paraboloids, calculated in Example 4.


Now we find the $z$ -limits of integration. The line $M$ passing through a typical point $(x, y)$ in $R$ parallel to the $z$ -axis enters $D$ at $z = x^2 + 3y^2$ and leaves at $z = 8 - x^2 - y^2$ . 

Next we find the $y$ -limits of integration. The line $L$ through $(x, y)$ that lies parallel to the $y$ -axis enters the region $R$ when $y = -\sqrt{(4 - x^2)/2}$ and leaves when $y = \sqrt{(4 - x^2)/2}$ . 

Finally, we find the x-limits of integration. As L sweeps across R, the value of x varies from $x = -2$ at $(-2, 0, 0)$ to $x = 2$ at $(2, 0, 0)$ . The volume of D is 

$$
\begin{array}{l l} V = \iiint_ {D} d z d y d x & \text {   Integrand   is   1   when   computing   volume.   } \\ = \int_ {- 2} ^ {2} \int_ {- \sqrt {(4 - x ^ {2}) / 2}} ^ {\sqrt {(4 - x ^ {2}) / 2}} \int_ {x ^ {2} + 3 y ^ {2}} ^ {8 - x ^ {2} - y ^ {2}} d z d y d x & \text {   Form   an   iterated   integral.   } \end{array}
$$

$$
\begin{array}{l l} = \int_ {- 2} ^ {2} \int_ {- \sqrt {(4 - x ^ {2}) / 2}} ^ {\sqrt {(4 - x ^ {2}) / 2}} (8 - 2 x ^ {2} - 4 y ^ {2}) d y d x & \text { Integrate   over } z \text { and   evaluate. } \\ = \int_ {- 2} ^ {2} \left[ (8 - 2 x ^ {2}) y - \frac {4}{3} y ^ {3} \right] _ {y = - \sqrt {(4 - x ^ {2}) / 2}} ^ {y = \sqrt {(4 - x ^ {2}) / 2}} d x & \text { Integrate   over } y. \\ = \int_ {- 2} ^ {2} \left(2 (8 - 2 x ^ {2}) \sqrt {\frac {4 - x ^ {2}}{2}} - \frac {8}{3} \left(\frac {4 - x ^ {2}}{2}\right) ^ {3 / 2}\right) d x & \text { Evaluate. } \\ = \int_ {- 2} ^ {2} \left[ 8 \left(\frac {4 - x ^ {2}}{2}\right) ^ {3 / 2} - \frac {8}{3} \left(\frac {4 - x ^ {2}}{2}\right) ^ {3 / 2} \right] d x \\ = \frac {4 \sqrt {2}}{3} \int_ {- 2} ^ {2} (4 - x ^ {2}) ^ {3 / 2} d x \\ = 8 \pi \sqrt {2}. & \text { After   integration   with   the   substitution } x = 2 \sin \theta \end{array}
$$

### Average Value of a Function in Space

The average value of a function F over a solid region D in space is defined by the formula 

Average value of 

$$
F \text {   over   } D = \frac {1}{\text { volume   of   } D} \iiint_ {D} F d V.\tag{2}
$$

For example, if $F(x,y,z)=\sqrt{x^{2}+y^{2}+z^{2}}$ , then the average value of F over D is the average distance of points in D from the origin. If $F(x,y,z)$ is the temperature at $(x,y,z)$ on a solid that occupies a region D in space, then the average value of F over D is the average temperature of the solid. 

**EXAMPLE 5** Find the average value of $F(x, y, z) = xyz$ throughout the cubical region D bounded by the coordinate planes and the planes x = 2, y = 2, and z = 2 in the first octant. 

![教材插图](/books/thomas-calculus/assets/894940118728a14b2bc3bf361aaacacedf3a5ead7859502e4b53c20c8b36bf9b.jpg)


**Solution** We sketch the cube with enough detail to show the limits of integration (Figure 14.36). We then use Equation (2) to calculate the average value of F over the cube. 


FIGURE 14.36 The region of integration in Example 5.


The volume of the region $D$ is (2)(2)(2) = 8. The value of the integral of $F$ over the cube is 

$$
\begin{array}{r l} \int_ {0} ^ {2} \int_ {0} ^ {2} \int_ {0} ^ {2} x y z d x d y d z & = \int_ {0} ^ {2} \int_ {0} ^ {2} \left[ \frac {x ^ {2}}{2} y z \right] _ {x = 0} ^ {x = 2} d y d z = \int_ {0} ^ {2} \int_ {0} ^ {2} 2 y z d y d z \\ & = \int_ {0} ^ {2} \left[ y ^ {2} z \right] _ {y = 0} ^ {y = 2} d z = \int_ {0} ^ {2} 4 z d z = \left[ 2 z ^ {2} \right] _ {0} ^ {2} = 8. \end{array}
$$

With these values, Equation (2) gives 

$$
\begin{array}{l} \text { Average   value   of } \\ x y z \text { over   the   cube } \end{array} = \frac {1}{\text { volume }} \iiint_ {\text { cube }} x y z d V = \left(\frac {1}{8}\right) (8) = 1.
$$

In evaluating the integral, we chose the order dx dy dz, but any of the other five possible orders would have done as well. 

### Properties of Triple Integrals

Triple integrals have the same algebraic properties as double and single integrals. Simply replace the double integrals in the four properties given in Section 14.2, page 864, with triple integrals. 

### EXERCISES 14.5

Triple Integrals in Different Iteration Orders 

1. Evaluate the integral in Example 3, taking $F(x, y, z) = 1$ to find the volume of the tetrahedron in the order $dz \, dx \, dy$ . 

2. Volume of rectangular solid Write six different iterated triple integrals for the volume of the rectangular solid in the first octant bounded by the coordinate planes and the planes x = 1, y = 2, and z = 3. Evaluate one of the integrals.

3. Volume of tetrahedron Write six different iterated triple integrals for the volume of the tetrahedron cut from the first octant by the plane $6x + 3y + 2z = 6$ . Evaluate one of the integrals. 

4. Volume of solid Write six different iterated triple integrals for the volume of the solid region in the first octant enclosed by the cylinder $x^{2} + z^{2} = 4$ and the plane y = 3. Evaluate one of the integrals. 

5. Volume enclosed by paraboloids Let $D$ be the solid region bounded by the paraboloids $z = 8 - x^2 - y^2$ and $z = x^2 + y^2$ . Write six different triple iterated integrals for the volume of $D$ . Evaluate one of the integrals. 

6. Volume inside paraboloid beneath a plane Let D be the solid region bounded by the paraboloid $z = x^{2} + y^{2}$ and the plane z = 2y. Write triple iterated integrals in the order dz dx dy and dz dy dx that give the volume of D. Do not evaluate either integral. 

Evaluating Triple Iterated Integrals 

Evaluate the integrals in Exercises 7–20. 

7. $\int_0^1\int_0^1\int_0^1 (x^2 +y^2 +z^2)dzdydx$ 

8. $\int_0^{\sqrt{2}}\int_0^{3y}\int_{x^2 +3y^2}^{8 - x^2 -y^2}dz  dx  dy$

9. $\int_1^e\int_1^{e^2}\int_1^{e^3}\frac{1}{xyz} dx  dy  dz$

10. $\int_0^1\int_0^{3 - 3x}\int_0^{3 - 3x - y}dzdydx$

11. $\int_0^{\pi /6}\int_0^1\int_{-2}^3 y\sin zdx dy dz$

12. $\int_{-1}^{1}\int_{0}^{1}\int_{0}^{2}(x + y + z)dydxdz$ 

13. $\int_0^3\int_0^{\sqrt{9 - x^2}}\int_0^{\sqrt{9 - x^2}}dzdydx$

14. $\int_0^2\int_{-\sqrt{4 - y^2}}^{\sqrt{4 - y^2}}\int_0^{2x + y}dzdx dy$

15. $\int_0^1\int_0^{2 - x}\int_0^{2 - x - y}dzdydx$

16. $\int_0^1\int_0^{1 - x^2}\int_3^{4 - x^2 -y}xdzdydx$

17. $\int_0^\pi \int_0^\pi \int_0^\pi \cos (u + v + w)du dv dw$ (uvw-space) 

18. $\int_0^1\int_1^{\sqrt{e}}\int_1^e se^s\ln r\frac{(\ln t)^2}{t} dt dr ds$ (rst-space) 

19. $\int_0^{\pi /4}\int_0^{\ln \sec v}\int_{-\infty}^{2t}e^xdxdtdv$ (tvx-space) 

20. $\int_0^7\int_0^2\int_0^{\sqrt{4 - q^2}}\frac{q}{r + 1} dpdqdr$ (pqr-space) 

Finding Equivalent Iterated Integrals 

21. Here is the region of integration of the integral 

![教材插图](/books/thomas-calculus/assets/d9774225541d944504ebfadbef653be831040c57467978b16c37c386cb4628c4.jpg)


![教材插图](/books/thomas-calculus/assets/2cd2ff3affeb1f89705744b7d42e265ac5b50d7057cbf52a4d6d952ddf3b89b0.jpg)


Rewrite the integral as an equivalent iterated integral in the order 

a. dy dz dx b. dy dx dz 

c. $dx$ dy dz d. $dx$ dz dy 

e. dz dx dy. 

22. Here is the region of integration of the integral 

![教材插图](/books/thomas-calculus/assets/68d958235fcf8907c5df5c5dc9e306254fd70d74c1dee39bb256aa0cd99da2ac.jpg)


![教材插图](/books/thomas-calculus/assets/652bd1b4b99b7afd0dd74eefc1bc4d97ebec597963f347ee6499b18f2d7b2e69.jpg)


Rewrite the integral as an equivalent iterated integral in the order 

a. dy dz dx b. dy dx dz 

c. $dx$ dy dz d. $dx$ dz dy 

e. dz dx dy. 

Finding Volumes Using Triple Integrals 

Find the volumes of the solid regions in Exercises 23–36. 

23. The region between the cylinder $z = y^2$ and the $xy$ -plane that is bounded by the planes $x = 0, x = 1, y = -1, y = 1$ 

![教材插图](/books/thomas-calculus/assets/4c3be5c511b5009fcba31197ecec6cddc9b96375e0a36bc4ba0a42dd27d8fc09.jpg)


24. The region in the first octant bounded by the coordinate planes and the planes $x + z = 1$ , $y + 2z = 2$ 

![教材插图](/books/thomas-calculus/assets/48acd1d3a698aa0b9750a12fd2305f8f9c7258114d30ce5aadba9639bc04a6e5.jpg)


25. The region in the first octant bounded by the coordinate planes, the plane $y + z = 2$ , and the cylinder $x = 4 - y^{2}$ 

![教材插图](/books/thomas-calculus/assets/9ec55881a9ec6b1e500828af59abe54de35fad925019cd255d21758a8ddf2b74.jpg)


26. The wedge cut from the cylinder $x^{2} + y^{2} = 1$ with $z \geq 0$ by the planes z = -y and z = 0 

![教材插图](/books/thomas-calculus/assets/90240ff6a905b5bd6712a710197838ab179c5514c5fbd2021488b31618a064cd.jpg)


27. The tetrahedron in the first octant bounded by the coordinate planes and the plane passing through $(1,0,0)$ , $(0,2,0)$ , and $(0,0,3)$ 

![教材插图](/books/thomas-calculus/assets/9723a6bc862a019115546014bc16a7528e6fcf5ab7aa27c3a36ee7a611cbba61.jpg)


28. The region in the first octant bounded by the coordinate planes, the plane $y = 1 - x$ , and the surface $z = \cos (\pi x / 2)$ , $0 \leq x \leq 1$ 

![教材插图](/books/thomas-calculus/assets/90e2c119249d88d6abe8551516db52b099b4929539717c03e23f7a0a486bfafa.jpg)


29. The region common to the interiors of the cylinders $x^{2} + y^{2} = 1$ and $x^{2} + z^{2} = 1$ , one-eighth of which is shown in the accompanying figure 

![教材插图](/books/thomas-calculus/assets/5b763b57901120cc2fd30367db64661be25353eb265916fd64ae00a283f1618d.jpg)


30. The region in the first octant bounded by the coordinate planes and the surface $z = 4 - x^2 - y$ 

![教材插图](/books/thomas-calculus/assets/eef92eb78f231c3d077b1fb9e4d533e722eb03bba5bb5b1e8c01af75878c5aaa.jpg)


31. The region in the first octant bounded by the coordinate planes, the plane $x + y = 4$ , and the cylinder $y^{2} + 4z^{2} = 16$ 

![教材插图](/books/thomas-calculus/assets/a3a8e362ef18d6c3a056724a62e610e3081b5035ed7dd0249559025be04ca58b.jpg)


32. The region cut from the cylinder $x^{2} + y^{2} = 4$ by the plane z = 0 and the plane $x + z = 3$ 

![教材插图](/books/thomas-calculus/assets/8dd7ebde7dc53abf2406b8c88ee098b5f88e924b9b265cc714e3c07b823cbc33.jpg)


33. The region between the planes $x + y + 2z = 2$ and $2x + 2y + z = 4$ in the first octant 

34. The finite region bounded by the planes $z = x$ , $x + z = 8$ , $z = y$ , $y = 8$ , and $z = 0$ 

35. The region cut from the solid elliptical cylinder $x^{2} + 4y^{2} \leq 4$ by the $xy$ -plane and the plane $z = x + 2$ 

36. The region bounded in back by the plane x = 0, on the front and sides by the parabolic cylinder $x = 1 - y^{2}$ , on the top by the paraboloid $z = x^{2} + y^{2}$ , and on the bottom by the xy-plane 

#### Average Values

In Exercises 37–40, find the average value of $F(x, y, z)$ over the given region. 

37. $F(x, y, z) = x^{2} + 9$ over the cube in the first octant bounded by the coordinate planes and the planes x = 2, y = 2, and z = 2 

38. $F(x, y, z) = x + y - z$ over the rectangular box in the first octant bounded by the coordinate planes and the planes x = 1, y = 1, and z = 2 

39. $F(x, y, z) = x^2 + y^2 + z^2$ over the cube in the first octant bounded by the coordinate planes and the planes $x = 1$ , $y = 1$ , and $z = 1$ 

40. $F(x, y, z) = xyz$ over the cube in the first octant bounded by the coordinate planes and the planes x = 2, y = 2, and z = 2 

#### Changing the Order of Integration

Evaluate the integrals in Exercises 41–44 by changing the order of integration in an appropriate way. 

41. $\int_0^4\int_0^1\int_{2y}^2\frac{4\cos(x^2)}{2\sqrt{z}} dx dy dz$ 

42. $\int_{0}^{1}\int_{0}^{1}\int_{x^{2}}^{1}12xze^{zy^{2}}dydxdz$ 

43. $\int_0^1\int_{\sqrt[3]{z}}^1\int_0^{\ln 3}\frac{\pi e^{2x}\sin\pi y^2}{y^2} dx dy dz$ 

44. $\int_0^2\int_0^{4 - x^2}\int_0^x\frac{\sin 2z}{4 - z} dydzdx$ 

Theory and Examples 

45. Finding an upper limit of an iterated integral Solve for a: 

$$
\int_ {0} ^ {1} \int_ {0} ^ {4 - a - x ^ {2}} \int_ {a} ^ {4 - x ^ {2} - y} d z d y d x = \frac {4}{1 5}.
$$

46. Ellipsoid For what value of $c$ is the volume of the ellipsoid $x^{2} + (y / 2)^{2} + (z / c)^{2} = 1$ equal to $8\pi$ ? 

47. Minimizing a triple integral What domain D in space minimizes the value of the integral 

$$
\iiint_ {D} (4 x ^ {2} + 4 y ^ {2} + z ^ {2} - 4) d V?
$$

Give reasons for your answer. 

48. Maximizing a triple integral What domain D in space maximizes the value of the integral 

$$
\iiint_ {D} (1 - x ^ {2} - y ^ {2} - z ^ {2}) d V?
$$

Give reasons for your answer. 

#### COMPUTER EXPLORATIONS

In Exercises 49–52, use a CAS integration utility to evaluate the triple integral of the given function over the specified solid region. 

49. $F(x, y, z) = x^2 y^2 z$ over the solid cylinder bounded by $x^2 + y^2 = 1$ and the planes $z = 0$ and $z = 1$ 

50. $F(x, y, z) = |xyz|$ over the solid bounded below by the paraboloid $z = x^{2} + y^{2}$ and above by the plane z = 1 

51. $F(x, y, z) = \frac{z}{(x^{2} + y^{2} + z^{2})^{3/2}}$ over the solid bounded below 

by the cone $z = \sqrt{x^{2} + y^{2}}$ and above by the plane z = 1 

52. $F(x, y, z) = x^4 + y^2 + z^2$ over the solid sphere $x^2 + y^2 + z^2 \leq 1$ 

## 14.6 Applications

![教材插图](/books/thomas-calculus/assets/a110a51152908740cabba421b92c4fc23e37694c6a0613efd7cc6ca12f25e6e0.jpg)



FIGURE 14.37 To define an object's mass, we first imagine it to be partitioned into a finite number of mass elements $\Delta m_{k}$ .


This section shows how to calculate the masses and moments of two- and three-dimensional objects in Cartesian coordinates. The definitions and ideas are similar to the single-variable case we studied in Section 6.6, but now we can consider more general situations. 

### Masses and First Moments

If $\delta(x, y, z)$ is the density (mass per unit volume) of an object occupying a solid region $D$ in space, the integral of $\delta$ over $D$ gives the mass of the object. To see why, imagine partitioning the object into $n$ mass elements like the one in Figure 14.37. The object's mass is the limit 

$$
M = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \Delta m _ {k} = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \delta \left(x _ {k}, y _ {k}, z _ {k}\right) \Delta V _ {k} = \iiint_ {D} \delta (x, y, z) d V.
$$

The first moment of a solid region D about a coordinate plane is defined as the triple integral over D of the (signed) distance from a point $(x, y, z)$ in D to the plane multiplied by the density of the solid at that point. For instance, the first moment about the yz-plane is the integral 

$$
M _ {y z} = \iiint_ {D} x \delta (x, y, z) d V.
$$

The center of mass is found from the first moments. For instance, the $x$ -coordinate of the center of mass is $\overline{x} = M_{yz} / M$ . 

For a two-dimensional object, such as a thin, flat plate, we calculate first moments about the coordinate axes by simply dropping the z-coordinate. So the first moment about the y-axis is the double integral over the region R forming the plate of the (signed) distance from the axis multiplied by the density, or 

$$
M _ {y} = \iint_ {R} x \delta (x, y) d A.
$$

Table 14.1 summarizes the formulas. 

**TABLE 14.1 Mass and first moment formulas**

THREE-DIMENSIONAL SOLID 

Mass: $M = \iiint_{D} \delta dV$ $\delta = \delta(x, y, z)$ is the density at $(x, y, z)$ . 

First moments about the coordinate planes: 

$$
M _ {y z} = \iiint_ {D} x \delta d V, \quad M _ {x z} = \iiint_ {D} y \delta d V, \quad M _ {x y} = \iiint_ {D} z \delta d V
$$

Center of mass: $\overline{x} = \frac{M_{yz}}{M},\quad \overline{y} = \frac{M_{xz}}{M},\quad \overline{z} = \frac{M_{xy}}{M}$ 

TWO-DIMENSIONAL PLATE 

Mass: $M = \iint_{R} \delta dA$ $\delta = \delta(x, y)$ is the density at $(x, y)$ . 

First moments: $M_y = \iint_R x \delta dA, \quad M_x = \iint_R y \delta dA$ 

Center of mass: $\overline{x} = \frac{M_y}{M},\quad \overline{y} = \frac{M_x}{M}$ 

![教材插图](/books/thomas-calculus/assets/b861137da74d00808e449fc8c12658cb4338399c55fcfe24464b856c5ff0afae.jpg)



FIGURE 14.38 Finding the center of mass of a solid (Example 1).


**EXAMPLE 1** Find the center of mass of a solid of constant density $\delta$ bounded below by the disk $R: x^{2} + y^{2} \leq 4$ in the plane z = 0 and above by the paraboloid $z = 4 - x^{2} - y^{2}$ (Figure 14.38). 

**Solution** By symmetry $\overline{x} = \overline{y} = 0$ . To find $\overline{z}$ , we first calculate 

$$
\begin{array}{l} M _ {x y} = \iint_ {R} \int_ {z = 0} ^ {z = 4 - x ^ {2} - y ^ {2}} z \delta d z d y d x = \iint_ {R} \left[ \frac {z ^ {2}}{2} \right] _ {z = 0} ^ {z = 4 - x ^ {2} - y ^ {2}} \delta d y d x \\ = \frac {\delta}{2} \iint_ {R} (4 - x ^ {2} - y ^ {2}) ^ {2} d y d x \end{array}
$$

$$
\begin{array}{l} = \frac {\delta}{2} \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} (4 - r ^ {2}) ^ {2} r d r d \theta \quad \text { Polar   coordinates   simplify   the   integration. } \\ = \frac {\delta}{2} \int_ {0} ^ {2 \pi} \left[ - \frac {1}{6} (4 - r ^ {2}) ^ {3} \right] _ {r = 0} ^ {r = 2} d \theta = \frac {1 6 \delta}{3} \int_ {0} ^ {2 \pi} d \theta = \frac {3 2 \pi \delta}{3}. \end{array}
$$

A similar calculation gives the mass: 

FIGURE 14.40 To find an integral for the amount of energy stored in a rotating shaft, we first imagine the shaft to be partitioned into small blocks. Each block has its own kinetic energy. We add the contributions of the individual blocks to find the kinetic energy of the shaft. 

$$
M = \iint_ {R} \int_ {0} ^ {4 - x ^ {2} - y ^ {2}} \delta d z d y d x = 8 \pi \delta .
$$

![教材插图](/books/thomas-calculus/assets/2fdd0eed17c68cab1e77bd3ec829a49147978d5599fa09d8eedec66359f8677b.jpg)


Therefore, $\overline{z} = (M_{xy} / M) = 4 / 3$ and the center of mass is $(\overline{x},\overline{y},\overline{z}) = (0,0,4 / 3)$ . 

![教材插图](/books/thomas-calculus/assets/0192fa3386ca72f18f8537a7733e41fa3de6f0171942d11243d38517c119e1b0.jpg)



FIGURE 14.39 The centroid of this region is found in Example 2.


When the density of a solid object or plate is constant (as in Example 1), the center of mass is called the centroid of the object. To find a centroid, we set $\delta$ equal to 1 and proceed to find $\overline{x}$ , $\overline{y}$ , and $\overline{z}$ as before, by dividing first moments by masses. These calculations are also valid for two-dimensional objects. 

**EXAMPLE 2** Find the centroid of the region in the first quadrant that is bounded above by the line y = x and below by the parabola $y = x^{2}$ . 

**Solution** We sketch the region and include enough detail to determine the limits of integration (Figure 14.39). We then set $\delta$ equal to 1 and evaluate the appropriate formulas from Table 14.1: 

$$
\begin{array}{l} M = \int_ {0} ^ {1} \int_ {x ^ {2}} ^ {x} 1 d y d x = \int_ {0} ^ {1} \left[ y \right] _ {y = x ^ {2}} ^ {y = x} d x = \int_ {0} ^ {1} (x - x ^ {2}) d x = \left[ \frac {x ^ {2}}{2} - \frac {x ^ {3}}{3} \right] _ {0} ^ {1} = \frac {1}{6} \\ M _ {x} = \int_ {0} ^ {1} \int_ {x ^ {2}} ^ {x} y d y d x = \int_ {0} ^ {1} \left[ \frac {y ^ {2}}{2} \right] _ {y = x ^ {2}} ^ {y = x} d x \\ = \int_ {0} ^ {1} \left(\frac {x ^ {2}}{2} - \frac {x ^ {4}}{2}\right) d x = \left[ \frac {x ^ {3}}{6} - \frac {x ^ {5}}{1 0} \right] _ {0} ^ {1} = \frac {1}{1 5} \\ M _ {y} = \int_ {0} ^ {1} \int_ {x ^ {2}} ^ {x} x d y d x = \int_ {0} ^ {1} \left[ x y \right] _ {y = x ^ {2}} ^ {y = x} d x = \int_ {0} ^ {1} (x ^ {2} - x ^ {3}) d x = \left[ \frac {x ^ {3}}{3} - \frac {x ^ {4}}{4} \right] _ {0} ^ {1} = \frac {1}{1 2}. \end{array}
$$

From these values of $M, M_x$ , and $M_y$ , we find 

$$
\overline {{{{x}}}} = \frac {M _ {y}}{M} = \frac {1 / 1 2}{1 / 6} = \frac {1}{2} \quad \text { and } \quad \overline {{{{y}}}} = \frac {M _ {x}}{M} = \frac {1 / 1 5}{1 / 6} = \frac {2}{5}.
$$

The centroid is the point $(1/2, 2/5)$ . 

Note that each coordinate of the centroid of a region is equal to the average value of the corresponding variable over the region. 

### Moments of Inertia

An object's first moments (Table 14.1) give us information related to balance and to the torque the object experiences about different axes in a gravitational field. If the object is a rotating shaft, we are interested in how much energy is stored in the shaft and how much energy is generated by a shaft rotating at a particular angular velocity. This is captured by the second moment or moment of inertia. 

Think of partitioning the shaft into small blocks of mass $\Delta m_{k}$ and let $r_k$ denote the distance from the $k$ th block's center of mass to the axis of rotation (Figure 14.40). If the shaft rotates at a constant angular velocity of $\omega = d\theta /dt$ radians per second, the block's center of mass will trace its orbit at a linear speed of 

$$
v _ {k} = \frac {d}{d t} (r _ {k} \theta) = r _ {k} \frac {d \theta}{d t} = r _ {k} \omega .
$$

The block's kinetic energy will be approximately 

$$
\frac {1}{2} \Delta m _ {k} v _ {k} ^ {2} = \frac {1}{2} \Delta m _ {k} (r _ {k} \omega) ^ {2} = \frac {1}{2} \omega^ {2} r _ {k} ^ {2} \Delta m _ {k}.
$$

The kinetic energy of the shaft will be approximately 

$$
\sum \frac {1}{2} \omega^ {2} r _ {k} ^ {2} \Delta m _ {k}.
$$

The integral approached by these sums as the shaft is partitioned into smaller and smaller blocks gives the shaft's kinetic energy: 

$$
\mathrm{KE} _ {\text { shaft }} = \int \frac {1}{2} \omega^ {2} r ^ {2} d m = \frac {1}{2} \omega^ {2} \int r ^ {2} d m.\tag{1}
$$

The factor 

$$
I = \int r ^ {2} d m
$$

is the moment of inertia of the shaft about its axis of rotation, and we see from Equation (1) that the shaft's kinetic energy is 

$$
\mathrm{KE} _ {\text { shaft }} = \frac {1}{2} I \omega^ {2}.
$$

The moment of inertia of a shaft resembles in some ways the inertial mass of a locomotive. To start a locomotive with mass m moving at a linear velocity v, we need to provide a kinetic energy of $\mathrm{KE} = (1/2)mv^{2}$ . To stop the locomotive we have to remove this amount of energy. To start a shaft with moment of inertia I rotating at an angular velocity $\omega$ , we need to provide a kinetic energy of $\mathrm{KE} = (1/2)I\omega^{2}$ . To stop the shaft we have to take this amount of energy back out. The shaft's moment of inertia is analogous to the locomotive's mass. What makes the locomotive hard to start or stop is its mass. What makes the shaft hard to start or stop is its moment of inertia. The moment of inertia depends not only on the mass of the shaft but also on its distribution. Mass that is farther away from the axis of rotation contributes more to the moment of inertia. 

![教材插图](/books/thomas-calculus/assets/67fa490cafed65700d5636ed28f08e9baefb502a8ad7ab47978dc8b7f838a191.jpg)


FIGURE 14.41 Distances from dV to the axes. 

We now derive a formula for the moment of inertia for a solid in space. If $r(x, y, z)$ is the distance from the point $(x, y, z)$ in D to a line L, then the moment of inertia of the mass $\Delta m_{k} = \delta(x_{k}, y_{k}, z_{k}) \Delta V_{k}$ about the line L (as in Figure 14.40) is approximately $\Delta I_{k} = r^{2}(x_{k}, y_{k}, z_{k}) \Delta m_{k}$ . The moment of inertia about L of the entire object is 

$$
I _ {L} = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} \Delta I _ {k} = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} r ^ {2} (x _ {k}, y _ {k}, z _ {k}) \delta (x _ {k}, y _ {k}, z _ {k}) \Delta V _ {k} = \iiint_ {D} r ^ {2} \delta d V.
$$

If L is the x-axis, then $r^{2} = y^{2} + z^{2}$ (Figure 14.41) and 

$$
I _ {x} = \iiint_ {D} (y ^ {2} + z ^ {2}) \delta (x, y, z) d V.
$$

Similarly, if L is the y-axis or the z-axis, we have 

$$
I _ {y} = \iiint_ {D} (x ^ {2} + z ^ {2}) \delta (x, y, z) d V \quad \text { and } \quad I _ {z} = \iiint_ {D} (x ^ {2} + y ^ {2}) \delta (x, y, z) d V.
$$

Table 14.2 summarizes the formulas for these moments of inertia (second moments because they invoke the squares of the distances). It shows the definition of the polar moment about the origin as well. 

![教材插图](/books/thomas-calculus/assets/9c79805cb1b787f0788fdf874d513d153a3c3e4de6327aa2770a1727e80d59b3.jpg)


FIGURE 14.42 Finding $I_{x}$ , $I_{y}$ , and $I_{z}$ for the block shown here. The origin lies at the center of the block (Example 3). 

**TABLE 14.2 Moments of inertia (second moments) formulas**

THREE-DIMENSIONAL SOLID
About the x-axis: $I_{x} = \iiint_{D}(y^{2} + z^{2})\delta dV$ $\delta = \delta(x, y, z)$ About the y-axis: $I_{y} = \iiint_{D}(x^{2} + z^{2})\delta dV$ About the z-axis: $I_{z} = \iiint_{D}(x^{2} + y^{2})\delta dV$ About a line L: $I_{L} = \iiint_{D} r^{2}(x, y, z)\delta dV$ $r(x, y, z) = \text{distance from the point}(x, y, z) \text{ to line } L$ TWO-DIMENSIONAL PLATE
About the x-axis: $I_{x} = \iint_{R} y^{2}\delta dA$ $\delta = \delta(x, y)$ About the y-axis: $I_{y} = \iint_{R} x^{2}\delta dA$ About a line L: $I_{L} = \iint_{R} r^{2}(x, y)\delta dA$ $r(x, y) = \text{distance from}(x, y) \text{ to } L$ About the origin (polar moment): $I_{0} = \iint_{R} (x^{2} + y^{2})\delta dA = I_{x} + I_{y}$ 

**EXAMPLE 3** Find $I_{x}$ , $I_{y}$ , $I_{z}$ for the rectangular solid of constant density $\delta$ shown in Figure 14.42. 

**Solution** The formula for $I_{x}$ gives 

$$
I _ {x} = \int_ {- c / 2} ^ {c / 2} \int_ {- b / 2} ^ {b / 2} \int_ {- a / 2} ^ {a / 2} \left(y ^ {2} + z ^ {2}\right) \delta d x d y d z.
$$

We can avoid some of the work of integration by observing that $(y^{2} + z^{2})\delta$ is an even function of x, y, and z since $\delta$ is constant. The rectangular solid consists of eight symmetric pieces, one in each octant. We can evaluate the integral on one of these pieces and then multiply by 8 to get the total value: 

$$
\begin{array}{l} I _ {x} = 8 \int_ {0} ^ {c / 2} \int_ {0} ^ {b / 2} \int_ {0} ^ {a / 2} (y ^ {2} + z ^ {2}) \delta d x d y d z = 4 a \delta \int_ {0} ^ {c / 2} \int_ {0} ^ {b / 2} (y ^ {2} + z ^ {2}) d y d z \\ = 4 a \delta \int_ {0} ^ {c / 2} \left[ \frac {y ^ {3}}{3} + z ^ {2} y \right] _ {y = 0} ^ {y = b / 2} d z \\ = 4 a \delta \int_ {0} ^ {c / 2} \left(\frac {b ^ {3}}{2 4} + \frac {z ^ {2} b}{2}\right) d z \end{array}
$$

![教材插图](/books/thomas-calculus/assets/72964e1d4f6add312c729a211470d0bd6500750ec9e5ecf6fe05a7f959c40e3d.jpg)



FIGURE 14.43 The triangular region covered by the plate in Example 4.


![教材插图](/books/thomas-calculus/assets/5866a75c1426962dd8800363246a8fbd7745acda468c4ed25113669767d35e75.jpg)


![教材插图](/books/thomas-calculus/assets/9fe0563a788d2a093cb08b4903b942a5db4e264522fea59fabde8c489d800555.jpg)



FIGURE 14.44 The greater the polar moment of inertia of the cross-section of a beam about the beam's longitudinal axis, the stiffer the beam. Beams A and B have the same cross-sectional area, but A is stiffer.


$$
= 4 a \delta \left(\frac {b ^ {3} c}{4 8} + \frac {c ^ {3} b}{4 8}\right) = \frac {a b c \delta}{1 2} (b ^ {2} + c ^ {2}) = \frac {M}{1 2} (b ^ {2} + c ^ {2}). \quad M = a b c \delta
$$

Similarly, 

$$
I _ {y} = \frac {M}{1 2} (a ^ {2} + c ^ {2}) \quad \text { and } \quad I _ {z} = \frac {M}{1 2} (a ^ {2} + b ^ {2}).
$$

**EXAMPLE 4** A thin plate covers the triangular region bounded by the x-axis and the lines x = 1 and y = 2x in the first quadrant. The plate's density at the point $(x, y)$ is $\delta(x, y) = 6x + 6y + 6$ . Find the plate's moments of inertia about the coordinate axes and the origin. 

**Solution** We sketch the plate and put in enough detail to determine the limits of integration for the integrals we have to evaluate (Figure 14.43). The moment of inertia about the x-axis is 

$$
\begin{array}{l} I _ {x} = \int_ {0} ^ {1} \int_ {0} ^ {2 x} y ^ {2} \delta (x, y) d y d x = \int_ {0} ^ {1} \int_ {0} ^ {2 x} (6 x y ^ {2} + 6 y ^ {3} + 6 y ^ {2}) d y d x \\ = \int_ {0} ^ {1} \left[ 2 x y ^ {3} + \frac {3}{2} y ^ {4} + 2 y ^ {3} \right] _ {y = 0} ^ {y = 2 x} d x = \int_ {0} ^ {1} (4 0 x ^ {4} + 1 6 x ^ {3}) d x \\ = \left[ 8 x ^ {5} + 4 x ^ {4} \right] _ {0} ^ {1} = 1 2. \end{array}
$$

Similarly, the moment of inertia about the y-axis is 

$$
I _ {y} = \int_ {0} ^ {1} \int_ {0} ^ {2 x} x ^ {2} \delta (x, y) d y d x = \frac {3 9}{5}.
$$

Notice that we integrate $y^{2}$ times density in calculating $I_{x}$ , and $x^{2}$ times density to find $I_{y}$ . Since we know $I_{x}$ and $I_{y}$ , we do not need to evaluate an integral to find $I_{0}$ ; we can use the equation $I_{0} = I_{x} + I_{y}$ from Table 14.2 instead: 

$$
I _ {0} = 1 2 + \frac {3 9}{5} = \frac {6 0 + 3 9}{5} = \frac {9 9}{5}.
$$

The moment of inertia also plays a role in determining how much a horizontal metal beam will bend under a load. The stiffness of the beam is a constant times $I$ , the moment of inertia of a typical cross-section of the beam about the beam's longitudinal axis. The greater the value of $I$ , the stiffer the beam and the less it will bend under a given load. That is why we use I-beams instead of beams whose cross-sections are square. The flanges at the top and bottom of the beam hold most of the beam's mass away from the longitudinal axis to increase the value of $I$ (Figure 14.44). 

### Probability

The probability that a continuous random variable X takes values between a and b is found by integrating a probability density function f (Appendix A.8), 

$$
P (a \leq X \leq b) = \int_ {a} ^ {b} f (x) d x.
$$

A similar process applies to probabilities involving two continuous random variables. The probability that a pair of random variables $(X,Y)$ takes values lying within a particular region is determined by a joint probability density function f. Integrating the joint probability density function over a region R in the plane gives the probability that the pair of random variables take values in that region: 

$$
P \big ((X, Y) \in R \big) = \iint_ {R} f (x, y) d x d y.
$$

If the region is a rectangle, then this expression has the simple form 

$$
P (a \leq X \leq b \text {   and   } c \leq Y \leq d) = \int_ {c} ^ {d} \int_ {a} ^ {b} f (x, y)   d x   d y.
$$

A joint probability density function f is defined by three basic properties. The first property ensures that there are no negative probabilities, and the second implies that the total probability of all possible outcomes is one. The final property describes the connection of f to probabilities. 

> ***DEFINITION*** A joint probability density function $f$ is a function that satisfies three conditions: 
>
> 1. $f(x,y) \geq 0$ 
>
> $$
> \int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} f (x, y) d x d y = 1
> $$
>
> $$
> 3. P ((X, Y) \in R) = \iint_ {R} f (x, y) d x d y.
> $$
>
A pair of random variables has a uniform distribution on a region $R$ with finite area $A$ if $f(x,y) = 1 / A$ for any $(x,y) \in R$ , and $f(x,y) = 0$ otherwise. 

**EXAMPLE 5** A random number generator is used to generate two random real numbers X and Y in succession. The first number X is chosen between 0 and 10, and the second number Y is chosen between 0 and 5. The random number generation is done by a process that gives a uniform distribution. Find the joint probability density function f for the pair of numbers $(X, Y)$ and use it to compute the probability that X is larger than Y. 

**Solution** The joint probability density function f is constant on the rectangle $0 \leq x \leq 10$ , $0 \leq y \leq 5$ , because $(X, Y)$ is uniformly distributed. The area of the rectangle is 50, so f takes the value 1/50 inside this rectangle: 

![教材插图](/books/thomas-calculus/assets/2e62671be279645550596385b9754810c3d41e279884e6e6cbf385c16bb01c16.jpg)



FIGURE 14.45 The pair of random variables X and Y take values anywhere in this rectangle with equal probability. In the shaded region we have X > Y.


$$
f (x, y) = \left\{ \begin{array}{l l} 1 / 5 0, & \text { if } 0 \leq x \leq 1 0 \text { and } 0 \leq y \leq 5, \\ 0, & \text { otherwise. } \end{array} \right.
$$

To compute the probability that X > Y, we integrate the joint probability density function f over the region in the rectangle where X > Y. This region is bounded on the left by the line x = y and on the right by the line x = 10. An integral over this region has limits of integration given by $y \leq x \leq 10$ , $0 \leq y \leq 5$ (see Figure 14.45). The probability is given by 

$$
P (X > Y) = \int_ {0} ^ {5} \int_ {y} ^ {1 0} \frac {1}{5 0} d x d y = \frac {3}{4}.
$$

There is a 75% probability that the first number is larger than the second. 

**EXAMPLE 6** Using the joint probability density function

$$
f (x, y) = \left\{ \begin{array}{l l} e ^ {- (x + y)}, & \text { if } 0 <   x \text { and } 0 <   y \\ 0, & \text { otherwise } \end{array} \right.
$$

find the probability that 1 < X < 2 and 2 < Y < 3. 

**Solution** 

$$
P (1 <   X <   2, 2 <   Y <   3) = \int_ {2} ^ {3} \int_ {1} ^ {2} e ^ {- (x + y)} d x d y = e ^ {- 5} + e ^ {- 3} - 2 e ^ {- 4} \approx 0. 0 1 9 8 9.
$$

There is slightly less than a 2% probability that X and Y fall within these bounds. 

### Means and Expected Values

The mean, or expected value, of a random variable is (Appendix A.8) 

$$
\mu = \int_ {- \infty} ^ {\infty} x f (x) d x.
$$

When X and Y have joint probability density function f, the expected value of X and the expected value of Y are 

$$
\mu_ {X} = \int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} x f (x, y) d x d y \quad \text { and } \quad \mu_ {Y} = \int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} y f (x, y) d x d y.
$$

These indicate the average value expected for each of X and Y. The expected values $\mu_{X}$ and $\mu_{Y}$ are sometimes called the first moments of the distribution, because their defining formulas have the same form as those seen in Table 14.1 for the moments of a two-dimensional plate. The joint probability density function plays the role in computing $\mu_{X}$ that the mass density function plays in computing the x-coordinate $\overline{x}$ of the center of mass, and the same applies to $\mu_{Y}$ and $\overline{y}$ . One can roughly think of the joint probability density function as measuring the probability concentration per unit area on the plane, just as density measures the mass per unit area for a plate. 

**EXAMPLE 7** Find the expected values $\mu_{X}$ and $\mu_{Y}$ for the joint probability density function in Example 5. 

**Solution** For the joint probability density function in Example 5, we compute 

$$
\mu_ {X} = \int_ {0} ^ {5} \int_ {0} ^ {1 0} x (1 / 5 0) d x d y = 5
$$

and 

$$
\mu_ {Y} = \int_ {0} ^ {5} \int_ {0} ^ {1 0} y (1 / 5 0) d x d y = 2. 5.
$$

The expected value of X is 5 and that of Y is 2.5. 

### EXERCISES 14.6

#### Plates of Constant Density

1. Finding a center of mass Find the center of mass of a thin plate of density $\delta = 3$ bounded by the lines x = 0, y = x, and the parabola $y = 2 - x^{2}$ in the first quadrant. 

2. Finding moments of inertia Find the moments of inertia about the coordinate axes of a thin rectangular plate of constant density $\delta \mathrm{gm} / \mathrm{cm}^2$ bounded by the lines $x = 3$ and $y = 3$ in the first quadrant. 

3. Finding a centroid Find the centroid of the region in the first quadrant bounded by the x-axis, the parabola $y^{2} = 2x$ , and the line $x + y = 4$ . 

4. Finding a centroid Find the centroid of the triangular region cut from the first quadrant by the line $x + y = 3$ . 

5. Finding a centroid Find the centroid of the region cut from the first quadrant by the circle $x^{2} + y^{2} = a^{2}$ . 

6. Finding a centroid Find the centroid of the region between the x-axis and the arch $y = \sin x, 0 \leq x \leq \pi$ . 

7. Finding moments of inertia Find the moment of inertia about the $x$ -axis of a thin plate of density $\delta = 1\mathrm{gm/cm}^2$ bounded by the circle $x^{2} + y^{2} = 4$ . Then use your result to find $I_{y}$ and $I_0$ for the plate. 

8. Finding a moment of inertia Find the moment of inertia with respect to the y-axis of a thin sheet of constant density $\delta = 1 \, gm/cm^{2}$ bounded by the curve $y = (\sin^{2} x)/x^{2}$ and the interval $\pi \leq x \leq 2\pi$ of the x-axis. 

9. The centroid of an infinite region Find the centroid of the infinite region in the second quadrant enclosed by the coordinate axes and the curve $y = e^{x}$ . (Use improper integrals in the mass-moment formulas.) 

10. The first moment of an infinite plate Find the first moment about the y-axis of a thin plate of density $\delta(x,y)=1$ covering the infinite region under the curve $y=e^{-x^{2/2}}$ in the first quadrant. 

#### Plates with Varying Density

11. Finding a moment of inertia Find the moment of inertia about the x-axis of a thin plate bounded by the parabola $x = y - y^{2}$ and the line $x + y = 0$ if $\delta(x, y) = x + y$ . 

12. Finding mass Find the mass of a thin plate occupying the smaller region cut from the ellipse $x^{2} + 4y^{2} = 12$ by the parabola $x = 4y^{2}$ if $\delta(x, y) = 5x\mathrm{kg / m^2}$ . 

13. Finding a center of mass Find the center of mass of a thin triangular plate bounded by the $y$ -axis and the lines $y = x$ and $y = 2 - x$ if $\delta(x, y) = 6x + 3y + 3$ . 

14. Finding a center of mass and moment of inertia Find the center of mass and moment of inertia about the x-axis of a thin plate bounded by the curves $x = y^{2}$ and $x = 2y - y^{2}$ if the density at the point $(x, y)$ is $\delta(x, y) = y + 1$ . 

15. Center of mass, moment of inertia Find the center of mass and the moment of inertia about the y-axis of a thin rectangular plate cut from the first quadrant by the lines x = 6 and y = 1 if $\delta(x, y) = x + y + 1$ . 

16. Center of mass, moment of inertia Find the center of mass and the moment of inertia about the $y$ -axis of a thin plate bounded by the line $y = 1$ and the parabola $y = x^2$ if the density is $\delta(x, y) = y + 1$ . 

17. Center of mass, moment of inertia Find the center of mass and the moment of inertia about the $y$ -axis of a thin plate bounded by the $x$ -axis, the lines $x = \pm 1$ , and the parabola $y = x^2$ if $\delta(x, y) = 7y + 1$ . 

18. Center of mass, moments of inertia Find the center of mass and the moments of inertia about the $x$ -axis of a thin rectangular plate bounded by the lines $x = 0$ , $x = 20$ , $y = -1$ , and $y = 1$ if $\delta(x, y) = 1 + (x/20)$ . 

19. Center of mass, moments of inertia Find the center of mass, the moment of inertia about the coordinate axes, and the polar moment of inertia of a thin triangular plate bounded by the lines y = x, y = -x, and y = 1 if $\delta(x, y) = y + 1 \, \text{kg/m}^2$ . 

20. Center of mass, moments of inertia Repeat Exercise 19 for $\delta(x,y)=3x^{2}+1\ kg/m^{2}$ . 

#### Solids with Constant Density

21. Moments of inertia Find the moments of inertia of the rectangular box of constant density $\delta(x,y,z)=1$ shown here with respect to its edges by calculating $I_{x}$ , $I_{y}$ , and $I_{z}$ . 

![教材插图](/books/thomas-calculus/assets/b6bc65fe91f1faa46c0f41552d018671b0d0980d90f037109ea773603507b442.jpg)


22. Moments of inertia The coordinate axes in the figure run through the centroid of a solid wedge parallel to the labeled edges. Find $I_{x}$ , $I_{y}$ , and $I_{z}$ if a = b = 6, c = 4, and the density is $\delta(x, y, z) = 1$ . 

![教材插图](/books/thomas-calculus/assets/cb42d4f876c48d02f5125ba2ee3947f2661cec7f224d224553eb3c6746061f19.jpg)


23. Center of mass and moments of inertia A solid “trough” of constant density $\delta(x,y,z)=1$ is bounded below by the surface $z=4y^{2}$ , above by the plane z=4, and on the ends by the planes x=1 and x=-1. Find the center of mass and the moments of inertia with respect to the three axes. 

24. Center of mass A solid of constant density is bounded below by the plane z = 0, on the sides by the elliptical cylinder $x^{2} + 4y^{2} = 4$ , and above by the plane z = 2 - x (see the accompanying figure). 

a. Find $\overline{x}$ and $\overline{y}$ . 

b. Evaluate the integral 

$$
M _ {x y} = \int_ {- 2} ^ {2} \int_ {- (1 / 2) \sqrt {4 - x ^ {2}}} ^ {(1 / 2) \sqrt {4 - x ^ {2}}} \int_ {0} ^ {2 - x} z d z d y d x,
$$

using integral tables to carry out the final integration with respect to $x$ . Then divide $M_{xy}$ by $M$ to verify that $\overline{z} = 5 / 4$ . 

![教材插图](/books/thomas-calculus/assets/52d4c87bb7c2f92b3528eddc13e3be5936358323edc2e8b8871f7a2b6fb58f91.jpg)


25. a. Center of mass Find the center of mass of a solid of constant density bounded below by the paraboloid $z = x^{2} + y^{2}$ and above by the plane z = 4. 

b. Find the plane z = c that divides the solid into two parts of equal volume. This plane does not pass through the center of mass. 

26. Moments A solid cube of constant density $\delta(x,y,z)=1$ , 2 units on a side, is bounded by the planes $x=\pm1$ , $z=\pm1$ , y=3, and y=5. Find the center of mass and the moments of inertia about the coordinate axes. 

27. Moment of inertia about a line A wedge like the one in Exercise 22 has $a = 4$ , $b = 6$ , $c = 3$ , and a constant density $\delta(x, y, z) = 1$ . Make a quick sketch to check for yourself that the square of the distance from a typical point $(x, y, z)$ of the wedge to the line $L$ : $z = 0$ , $y = 6$ is $r^2 = (y - 6)^2 + z^2$ . Then calculate the moment of inertia of the wedge about $L$ . 

28. Moment of inertia about a line A wedge like the one in Exercise 22 has $a = 4$ , $b = 6$ , $c = 3$ , and a constant density $\delta(x, y, z) = 1$ . Make a quick sketch to check for yourself that the square of the distance from a typical point $(x, y, z)$ of the wedge to the line $L$ : $x = 4$ , $y = 0$ is $r^2 = (x - 4)^2 + y^2$ . Then calculate the moment of inertia of the wedge about $L$ . 

#### Solids with Varying Density

In Exercises 29 and 30, find 

a. the mass of the solid.
b. the center of mass. 

29. A solid region in the first octant is bounded by the coordinate planes and the plane $x + y + z = 2$ . The density of the solid is $\delta(x, y, z) = 2x \, \mathrm{gm/cm^3}$ . 

30. A solid in the first octant is bounded by the planes y = 0 and z = 0 and by the surfaces $z = 4 - x^{2}$ and $x = y^{2}$ (see the accompanying figure). Its density function is $\delta(x, y, z) = kxy$ , k a constant. 

![教材插图](/books/thomas-calculus/assets/0883adb27746a6136adbbb9137aefd8c933285e59d962af3ca94c88e06b5f18e.jpg)


In Exercises 31 and 32, find 

a. the mass of the solid. 

b. the center of mass. 

c. the moments of inertia about the coordinate axes. 

31. A solid cube in the first octant is bounded by the coordinate planes and by the planes x = 1, y = 1, and z = 1. The density of the cube is $\delta(x, y, z) = x + y + z + 1$ . 

32. A wedge like the one in Exercise 22 has dimensions $a = 2$ , $b = 6$ , and $c = 3$ . The density is $\delta(x, y, z) = x + 1$ . Notice that if the density is constant, the center of mass will be $(0, 0, 0)$ . 

33. Mass Find the mass of the solid bounded by the planes $x + z = 1$ , x - z = -1, y = 0, and the surface $y = \sqrt{z}$ . The density of the solid is $\delta(x, y, z) = 2y + 5\mathrm{kg/m^{3}}$ . 

34. Mass Find the mass of the solid region bounded by the parabolic surfaces $z = 16 - 2x^{2} - 2y^{2}$ and $z = 2x^{2} + 2y^{2}$ if the density of the solid is $\delta(x, y, z) = \sqrt{x^{2} + y^{2}}$ . 

#### Theory and Examples

The Parallel Axis Theorem Let $L_{c.m.}$ be a line through the center of mass of a body of mass m and let L be a parallel line h units away from $L_{c.m.}$ . The Parallel Axis Theorem says that the moments of inertia $I_{c.m.}$ and $I_{L}$ of the body about $L_{c.m.}$ and L satisfy the equation 

$$
I _ {L} = I _ {\mathrm{c.m.}} + m h ^ {2}.\tag{2}
$$

As in the two-dimensional case, the theorem gives a quick way to calculate one moment when the other moment and the mass are known. 

35. Proof of the Parallel Axis Theorem

a. Show that the first moment of a body in space about any plane through the body's center of mass is zero. (Hint: Place the body's center of mass at the origin and let the plane be the yz-plane. What does the formula $\overline{x} = M_{yz}/M$ then tell you?) 

![教材插图](/books/thomas-calculus/assets/f7097116393665753e625c46267002bfcdf19ffc9ddba43e06ac1a04e9e2b95a.jpg)


b. To prove the Parallel Axis Theorem, place the body with its center of mass at the origin, with the line $L_{c.m.}$ along the z-axis and the line L perpendicular to the xy-plane at the point $(h, 0, 0)$ . Let D be the region of space occupied by the body. Then, in the notation of the figure, 

$$
I _ {L} = \iiint_ {D} | \mathbf {v} - h \mathbf {i} | ^ {2} d m.
$$

Expand the integrand in this integral and complete the proof. 

36. The moment of inertia about a diameter of a solid sphere of constant density and radius $a$ is $(2/5)ma^2$ , where $m$ is the mass of the sphere. Find the moment of inertia about a line tangent to the sphere. 

37. The moment of inertia of the solid in Exercise 21 about the $z$ -axis is $I_{z} = abc(a^{2} + b^{2}) / 3$ . 

a. Use Equation (2) to find the moment of inertia of the solid about the line parallel to the $z$ -axis through the solid's center of mass. 

b. Use Equation (2) and the result in part (a) to find the moment of inertia of the solid about the line x = 0, y = 2b. 

38. If $a = b = 6$ and $c = 4$ , the moment of inertia of the solid wedge in Exercise 22 about the $x$ -axis is $I_x = 208$ . Find the moment of inertia of the wedge about the line $y = 4$ , $z = -4/3$ (the edge of the wedge's narrow end). 

Joint Probability Density Functions 

For Exercises 39–42, verify that f gives a joint probability density function. Then find the expected values $\mu_{X}$ and $\mu_{Y}$ . 

39. $f (x, y) = \left\{ \begin{array}{l l} x + y, & \text { if } 0 \leq x \leq 1 \text { and } 0 \leq y \leq 1, \\ 0, & \text { otherwise }. \end{array} \right.$

40. $f (x, y) = \left\{ \begin{array}{l l} 4 x y, & \text { if } 0 \leq x \leq 1 \text { and } 0 \leq y \leq 1, \\ 0, & \text { otherwise. } \end{array} \right.$

41. $f (x, y) = \left\{ \begin{array}{l l} 6 x ^ {2} y, & \text { if } 0 \leq x \leq 1 \text { and } 0 \leq y \leq 1, \\ 0, & \text { otherwise. } \end{array} \right.$

42. $f (x, y) = \left\{ \begin{array}{l l} \frac {3}{2} (x ^ {2} + y ^ {2}), & \text { if } 0 \leq x \leq 1 \text { and } 0 \leq y \leq 1, \\ 0, & \text { otherwise. } \end{array} \right.$

43. Suppose that $f$ is a uniform joint probability density function on $0 \leq x < 2$ , $0 \leq y < 3$ . What is the formula for $f$ ? What is the probability that $X < Y$ ? 

44. The following formula defines a joint probability density function. What is the value of C? What are the expected values $\mu_{X}$ and $\mu_{Y}$ ? 

$$
f (x, y) = \left\{ \begin{array}{l l} C x y, & \text { if } 0 \leq x \leq 2 \text { and } 0 \leq y \leq 3, \\ 0, & \text { otherwise. } \end{array} \right.
$$

## 14.7 Triple Integrals in Cylindrical and Spherical Coordinates

![教材插图](/books/thomas-calculus/assets/7c1a66db463bddb631075e607586c3569175e3a123616fc164d1145965cfc707.jpg)



FIGURE 14.46 The cylindrical coordinates of a point in space are r, $\theta$ , and z.


When a calculation in physics, engineering, or geometry involves a cylinder, cone, or sphere, we can often simplify our work by using cylindrical or spherical coordinates, which are introduced in this section. The procedure for transforming to these coordinates and evaluating the resulting triple integrals is similar to the transformation to polar coordinates in the plane discussed in Section 14.4. 

![教材插图](/books/thomas-calculus/assets/175129e544450143656dfb80f95cfa315f07f358f9fceb6fb6dd4063eaee1c46.jpg)



FIGURE 14.47 Constant-coordinate equations in cylindrical coordinates yield cylinders and planes.


### Integration in Cylindrical Coordinates

We obtain cylindrical coordinates for space by combining polar coordinates in the xy-plane with the usual z-axis. This assigns to every point in space coordinate triples of the form $(r, \theta, z)$ , as shown in Figure 14.46. Here we require $r \geq 0$ . 

> ***DEFINITION*** Cylindrical coordinates represent a point P in space by ordered triples $(r, \theta, z)$ in which 
>
> 1. r and $\theta$ are polar coordinates for the vertical projection of P on the xy-plane, with $r \geq 0$ , and 
>
> 2. z is the rectangular vertical coordinate. 
>
The values of $x, y, r$ , and $\theta$ in rectangular and cylindrical coordinates are related by the usual equations. 

Equations Relating Rectangular $(x, y, z)$ and Cylindrical $(r, \theta, z)$ Coordinates 

$$
\begin{array}{c} x = r \cos \theta , \quad y = r \sin \theta , \quad z = z, \\ r ^ {2} = x ^ {2} + y ^ {2}, \tan \theta = y / x \end{array}
$$

In cylindrical coordinates, the equation r = a describes not just a circle in the xy-plane but an entire cylinder about the z-axis (Figure 14.47). The z-axis is given by r = 0. The equation $\theta = \theta_{0}$ describes the half-plane that contains the z-axis and makes an angle $\theta_{0}$ with the positive x-axis. And, just as in rectangular coordinates, the equation $z = z_{0}$ describes a plane perpendicular to the z-axis. 

![教材插图](/books/thomas-calculus/assets/e34be4d0a1ae4405413875134a5a1ed699f75f73820ddc74b7d06297728477ae.jpg)



FIGURE 14.48 In cylindrical coordinates the volume of the wedge is approximated by the product $\Delta V = r \Delta z \Delta r \Delta \theta$ .


Volume Differential in Cylindrical Coordinates 

$$
d V = r d z d r d \theta
$$

![教材插图](/books/thomas-calculus/assets/d8eaccfca794c3dd84304da04b2b3208f9850613735eda1c3f6db4406bd0586d.jpg)



FIGURE 14.49 Finding the limits of integration for evaluating an integral in cylindrical coordinates (Example 1).


Cylindrical coordinates are good for describing cylinders whose axes run along the z-axis and planes that either contain the z-axis or lie perpendicular to the z-axis. Surfaces like these have equations of constant coordinate value: 

$$
\begin{array}{l l} r = 4 & \text { Cylinder,   radius   4,   axis   the   z -axis} \\ \theta = \frac {\pi}{3} & \text { Half - plane   containing   the   z -axis } \\ z = 2. & \text { Plane   perpendicular   to   the   z -axis } \end{array}
$$

When computing triple integrals over a solid region D in cylindrical coordinates, we partition the region into n small cylindrical wedges, rather than into rectangular boxes. In the kth cylindrical wedge, $r, \theta$ , and z change by $\Delta r_{k}, \Delta \theta_{k}$ , and $\Delta z_{k}$ , and the largest of these numbers among all the cylindrical wedges is called the norm of the partition. We express the triple integral as a limit of Riemann sums using these wedges. The volume of such a cylindrical wedge $\Delta V_{k}$ is obtained by taking the area $\Delta A_{k}$ of its base in the $r\theta$ -plane and multiplying by the height $\Delta z_{k}$ (Figure 14.48). 

For a point $(r_{k},\theta_{k},z_{k})$ in the center of the kth wedge, we calculated in polar coordinates that $\Delta A_{k}=r_{k}\Delta r_{k}\Delta\theta_{k}$ . So $\Delta V_{k}=\Delta z_{k}r_{k}\Delta r_{k}\Delta\theta_{k}=r_{k}\Delta z_{k}\Delta r_{k}\Delta\theta_{k}$ , and a Riemann sum for f over D has the form 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (r _ {k}, \theta_ {k}, z _ {k}) r _ {k} \Delta z _ {k} \Delta r _ {k} \Delta \theta_ {k}.
$$

The triple integral of a function $f$ over $D$ is obtained by taking a limit of such Riemann sums with partitions whose norms approach zero: 

$$
\lim _ {n \rightarrow \infty} S _ {n} = \iiint_ {D} f d V = \iiint_ {D} f r d z d r d \theta .
$$

Triple integrals in cylindrical coordinates are then evaluated as iterated integrals, as in the following example. Although the definition of cylindrical coordinates makes sense without any restrictions on $\theta$ , in most situations when integrating, we will need to restrict $\theta$ to an interval of length $2\pi$ . So we impose the requirement that $\alpha \leq \theta \leq \beta$ , where $0 \leq \beta - \alpha \leq 2\pi$ . 

**EXAMPLE 1** Find the limits of integration in cylindrical coordinates for integrating a function $f(r,\theta,z)$ over the solid region D bounded below by the plane z = 0, laterally by the circular cylinder $x^{2} + (y - 1)^{2} = 1$ , and above by the paraboloid $z = x^{2} + y^{2}$ . 

**Solution** The base of $D$ is also the region's projection $R$ on the $xy$ -plane. The boundary of $R$ is the circle $x^{2} + (y - 1)^{2} = 1$ . Its polar coordinate equation is 

$$
\begin{array}{c} x ^ {2} + (y - 1) ^ {2} = 1 \\ x ^ {2} + y ^ {2} - 2 y + 1 = 1 \\ r ^ {2} - 2 r \sin \theta = 0 \\ r = 2 \sin \theta . \end{array}
$$

The region is sketched in Figure 14.49. 

We find the limits of integration, starting with the $z$ -limits. A line $M$ through a typical point $(r,\theta)$ in $R$ parallel to the $z$ -axis enters $D$ at $z = 0$ and leaves at $z = x^{2} + y^{2} = r^{2}$ . 

Next we find the r-limits of integration. A ray L through $(r, \theta)$ from the origin enters R at r = 0 and leaves at $r = 2 \sin \theta$ . 

Finally, we find the $\theta$ -limits of integration. As L sweeps across R, the angle $\theta$ it makes with the positive x-axis runs from $\theta = 0$ to $\theta = \pi$ . The integral is 

$$
\iiint_ {D} f (r, \theta , z) d V = \int_ {0} ^ {\pi} \int_ {0} ^ {2 \sin \theta} \int_ {0} ^ {r ^ {2}} f (r, \theta , z) r d z d r d \theta .
$$

Example 1 illustrates a good procedure for finding limits of integration in cylindrical coordinates. The procedure is summarized as follows. 

### How to Integrate in Cylindrical Coordinates

To evaluate 

$$
\iiint_ {D} f (r, \theta , z) d V
$$

over a solid region D in space in cylindrical coordinates, integrating first with respect to z, then with respect to r, and finally with respect to $\theta$ , take the following steps. 

1. Sketch. Sketch the solid region D along with its projection R on the xy-plane. Label the surfaces and curves that bound D and R. 

![教材插图](/books/thomas-calculus/assets/71921c9e63ace3e05e20d5e5e1dea875b45dac2303ede2023c7a8d7808c9d0fd.jpg)


2. Find the $z$ -limits of integration. Draw a line $M$ through a typical point $(r, \theta)$ of $R$ parallel to the $z$ -axis. As $z$ increases, $M$ enters $D$ at $z = g_1(r, \theta)$ and leaves at $z = g_2(r, \theta)$ . These are the $z$ -limits of integration. 

![教材插图](/books/thomas-calculus/assets/a931abb45012f9924a68674e1a4a4bd51cdbb1d411aa5f6d0ad49658359ecadb.jpg)


![教材插图](/books/thomas-calculus/assets/d8b197e64b9f2525a6cbf9b14c2ef88a8f546a72db27dc5264c0fcccd797f0c6.jpg)



FIGURE 14.50 Example 2 shows how to find the centroid of this solid.


3. Find the r-limits of integration. Draw a ray L through $(r, \theta)$ from the origin. The ray enters R at $r = h_{1}(\theta)$ and leaves at $r = h_{2}(\theta)$ . These are the r-limits of integration. 

![教材插图](/books/thomas-calculus/assets/f5af8a2cd8da6b3d4728ab06896579227ff680afa03734612c2f24e974edf47c.jpg)


4. Find the $\theta$ -limits of integration. As L sweeps across R, the angle $\theta$ it makes with the positive x-axis runs from $\theta = \alpha$ to $\theta = \beta$ . These are the $\theta$ -limits of integration. The integral is 

$$
\iiint_ {D} f (r, \theta , z) d V = \int_ {\theta = \alpha} ^ {\theta = \beta} \int_ {r = h _ {1} (\theta)} ^ {r = h _ {2} (\theta)} \int_ {z = g _ {1} (r, \theta)} ^ {z = g _ {2} (r, \theta)} f (r, \theta , z) r d z d r d \theta .
$$

**EXAMPLE 2** Find the centroid ( $\delta = 1$ ) of the solid enclosed by the cylinder $x^{2} + y^{2} = 4$ , bounded above by the paraboloid $z = x^{2} + y^{2}$ , and bounded below by the xy-plane. 

**Solution** We sketch the solid, bounded above by the paraboloid $z = r^{2}$ and below by the plane z = 0 (Figure 14.50). Its base R is the disk $0 \leq r \leq 2$ in the xy-plane. 

The solid's centroid $(\overline{x},\overline{y},\overline{z})$ lies on its axis of symmetry, here the $z$ -axis. This makes $\overline{x} = \overline{y} = 0$ . To find $\overline{z}$ , we divide the first moment $M_{xy}$ by the mass $M$ . 

To find the limits of integration for the mass and moment integrals, we continue with the four basic steps. We completed our initial sketch. The remaining steps give the limits of integration. 

The z-limits. A line M through a typical point $(r, \theta)$ in the base parallel to the z-axis enters the solid at z = 0 and leaves at $z = r^{2}$ . 

The $r$ -limits. A ray $L$ through $(r, \theta)$ from the origin enters $R$ at $r = 0$ and leaves at $r = 2$ . 

The $\theta$ -limits. As $L$ sweeps over the base like a clock hand, the angle $\theta$ it makes with the positive $x$ -axis runs from $\theta = 0$ to $\theta = 2\pi$ . The value of $M_{xy}$ is 

$$
\begin{array}{l} M _ {x y} = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \int_ {0} ^ {r ^ {2}} z r d z d r d \theta = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \left[ \frac {z ^ {2}}{2} \right] _ {z = 0} ^ {z = r ^ {2}} r d r d \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \frac {r ^ {5}}{2} d r d \theta = \int_ {0} ^ {2 \pi} \left[ \frac {r ^ {6}}{1 2} \right] _ {r = 0} ^ {r = 2} d \theta = \int_ {0} ^ {2 \pi} \frac {1 6}{3} d \theta = \frac {3 2 \pi}{3}. \end{array}
$$

The value of $M$ is 

$$
\begin{array}{l} M = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \int_ {0} ^ {r ^ {2}} r d z d r d \theta = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} \left[ z \right] _ {z = 0} ^ {z = r ^ {2}} r d r d \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {2} r ^ {3} d r d \theta = \int_ {0} ^ {2 \pi} \left[ \frac {r ^ {4}}{4} \right] _ {r = 0} ^ {r = 2} d \theta = \int_ {0} ^ {2 \pi} 4 d \theta = 8 \pi . \end{array}
$$

$\phi$ is the Greek letter phi, pronounced “fee.” 

![教材插图](/books/thomas-calculus/assets/d4fa59d8c4048a1866e339de690b6af32cccd4ddae7d3190d4bb619702511c13.jpg)



FIGURE 14.51 The spherical coordinates $\rho$ , $\phi$ , and $\theta$ and their relation to x, y, z, and r.


![教材插图](/books/thomas-calculus/assets/59feb49820fea084b66a12bc5eddccbb452390889b821a4ee39573e77e7cab95.jpg)



FIGURE 14.52 Constant-coordinate equations in spherical coordinates yield spheres, single cones, and half-planes.


Therefore, 

$$
\overline {{z}} = \frac {M _ {x y}}{M} = \frac {3 2 \pi}{3} \frac {1}{8 \pi} = \frac {4}{3},
$$

and the centroid is $(0,0,4/3)$ . Notice that the centroid lies on the z-axis, outside the solid. 

### Spherical Coordinates and Integration

Spherical coordinates locate points in space with two angles and one distance, as shown in Figure 14.51. The first coordinate, $\rho = |\overrightarrow{OP}|$ , is the point's distance from the origin and is never negative. The second coordinate, $\phi$ , is the angle $\overrightarrow{OP}$ makes with the positive $z$ -axis. It is required to lie in the interval $[0, \pi]$ . The third coordinate is the angle $\theta$ as measured in cylindrical coordinates. 

> ***DEFINITION*** Spherical coordinates represent a point P in space by ordered triples $(\rho, \phi, \theta)$ in which 
>
> 1. $\rho$ is the distance from P to the origin ( $\rho \geq 0$ ). 
>
> 2. $\phi$ is the angle $\overrightarrow{OP}$ makes with the positive z-axis ( $0 \leq \phi \leq \pi$ ). 
>
> 3. $\theta$ is the angle from cylindrical coordinates. 
>
On maps of Earth, $\theta$ is related to the longitude of a point on the planet and $\phi$ to its latitude, while $\rho$ is related to elevation above Earth's surface. 

The equation $\rho = a$ describes the sphere of radius a centered at the origin (Figure 14.52). The equation $\phi = \phi_{0}$ describes a single cone whose vertex lies at the origin and whose axis lies along the z-axis. (We broaden our interpretation to include the xy-plane as the cone $\phi = \pi/2$ .) If $\phi_{0}$ is greater than $\pi/2$ , the cone $\phi = \phi_{0}$ opens downward. The equation $\theta = \theta_{0}$ describes the half-plane that contains the z-axis and makes an angle $\theta_{0}$ with the positive x-axis. 

Equations Relating Spherical Coordinates to Cartesian and Cylindrical Coordinates 

$$
\begin{array}{c} r = \rho \sin \phi , \quad x = r \cos \theta = \rho \sin \phi \cos \theta , \\ z = \rho \cos \phi , \quad y = r \sin \theta = \rho \sin \phi \sin \theta , \\ \rho = \sqrt {x ^ {2} + y ^ {2} + z ^ {2}} = \sqrt {r ^ {2} + z ^ {2}}. \end{array}\tag{1}
$$

**EXAMPLE 3** Find a spherical coordinate equation for the sphere $x^{2} + y^{2} + (z - 1)^{2} = 1$ . 

**Solution** We use Equations (1) to substitute for x, y, and z: 

$$
\begin{array}{c} x ^ {2} + y ^ {2} + (z - 1) ^ {2} = 1 \\ \rho^ {2} \sin^ {2} \phi \cos^ {2} \theta + \rho^ {2} \sin^ {2} \phi \sin^ {2} \theta + (\rho \cos \phi - 1) ^ {2} = 1 \\ \rho^ {2} \sin^ {2} \phi (\underbrace {\cos^ {2} \theta + \sin^ {2} \theta} _ {1}) + \rho^ {2} \cos^ {2} \phi - 2 \rho \cos \phi + 1 = 1 \end{array}\tag{Eqs. (1}
$$

$$
\rho^ {2} \underbrace {\left(\sin^ {2} \phi + \cos^ {2} \phi\right)} _ {1} = 2 \rho \cos \phi
$$

$$
\rho^ {2} = 2 \rho \cos \phi
$$

![教材插图](/books/thomas-calculus/assets/8a15f03b57f888561779d0aebfc0b0016e28d2f5ccc9e135b523c5326286eadf.jpg)



FIGURE 14.53 The sphere in Example 3.


![教材插图](/books/thomas-calculus/assets/c7dc8663de06aad1f21ec86cbba347fb886c3419c4c7be6e5d336f887e160e65.jpg)



FIGURE 14.54 The cone in Example 4.


![教材插图](/books/thomas-calculus/assets/84830a3be4711ad27f90da773fa0ee943426ac8a9fb6c78a268c9b05d0efbf03.jpg)



FIGURE 14.55 In spherical coordinates we use the volume of a spherical wedge, which closely approximates that of a rectangular box.


Volume Differential in Spherical Coordinates 

$$
d V = \rho^ {2} \sin \phi d \rho d \phi d \theta
$$

The angle $\phi$ varies from 0 at the north pole of the sphere to $\pi/2$ at the south pole; the angle $\theta$ does not appear in the expression for $\rho$ , reflecting the symmetry about the z-axis (see Figure 14.53). 

**EXAMPLE 4** Find a spherical coordinate equation for the cone $z = \sqrt{x^{2} + y^{2}}$ .

**Solution** 1 Use geometry. The cone is symmetric with respect to the z-axis and cuts the first quadrant of the yz-plane along the line z = y. The angle between the cone and the positive z-axis is therefore $\pi/4$ radians. The cone consists of the points whose spherical coordinates have $\phi$ equal to $\pi/4$ , so its equation is $\phi = \pi/4$ . (See Figure 14.54.) 

**Solution** 2 Use algebra. If we use Equations (1) to substitute for x, y, and z, we obtain the same result: 

$$
\begin{array}{r l} z = \sqrt {x ^ {2} + y ^ {2}} \\ \rho \cos \phi = \sqrt {\rho^ {2} \sin^ {2} \phi} & \text {   Example   3   } \\ \rho \cos \phi = \rho \sin \phi & \rho \geq 0, \sin \phi \geq 0 \\ \cos \phi = \sin \phi & \text {   Includes   } \rho = 0 (\text {   the   origin   }) \\ \phi = \frac {\pi}{4}. & 0 \leq \phi \leq \pi \end{array}
$$

Spherical coordinates are useful for describing spheres centered at the origin, half-planes hinged along the z-axis, and cones whose vertices lie at the origin and whose axes lie along the z-axis. Surfaces like these have equations of constant coordinate value: 

$$
\begin{array}{l l} \rho = 4 & \text {   Sphere,   radius   4,   center   at   origin   } \\ \phi = \frac {2 \pi}{3} & \text {   Cone   opening   down   from   the   origin,   making   an   angle   of   } 2 \pi / 3 \text {   radians   with   the   positive   } z \text {-axis   } \\ \theta = \frac {\pi}{3}. & \text {   Half -plane,   hinged   along   the   } z \text {-axis,   making   an   angle   of   } \pi / 3 \text {   radians   with   the   positive   } x \text {-axis   } \end{array}
$$

When computing triple integrals over a solid region D in spherical coordinates, we partition the region into n spherical wedges. The size of the kth spherical wedge, which contains a point $(\rho_{k}, \phi_{k}, \theta_{k})$ , is given by the changes $\Delta\rho_{k}$ , $\Delta\phi_{k}$ , and $\Delta\theta_{k}$ in $\rho$ , $\phi$ , and $\theta$ . Such a spherical wedge has one edge a circular arc of length $\rho_{k} \Delta\phi_{k}$ , another edge a circular arc of length $\rho_{k} \sin\phi_{k} \Delta\theta_{k}$ , and thickness $\Delta\rho_{k}$ . The spherical wedge closely approximates a rectangular box of these dimensions when $\Delta\rho_{k}$ , $\Delta\phi_{k}$ , and $\Delta\theta_{k}$ are all small (Figure 14.55). It can be shown that the volume of this spherical wedge $\Delta V_{k}$ is $\Delta V_{k} = \rho_{k}^{2} \sin\phi_{k} \Delta\rho_{k} \Delta\phi_{k} \Delta\theta_{k}$ for $(\rho_{k}, \phi_{k}, \theta_{k})$ , a point chosen inside the wedge. 

The corresponding Riemann sum for a function $f(\rho, \phi, \theta)$ is 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f \left(\rho_ {k}, \phi_ {k}, \theta_ {k}\right) \rho_ {k} ^ {2} \sin \phi_ {k} \Delta \rho_ {k} \Delta \phi_ {k} \Delta \theta_ {k}.
$$

As the norm of a partition approaches zero, and the spherical wedges get smaller, the limit of the Riemann sums is the triple integral: 

$$
\lim _ {n \rightarrow \infty} S _ {n} = \iiint_ {D} f (\rho , \phi , \theta) d V = \iiint_ {D} f (\rho , \phi , \theta) \rho^ {2} \sin \phi d \rho d \phi d \theta .
$$

![教材插图](/books/thomas-calculus/assets/647f0f74bc401bdf19df271eea4e4b3798d001d07fcb7a1771b8ce3f7aba368c.jpg)



FIGURE 14.56 The ice cream cone in Example 5.


To evaluate integrals in spherical coordinates, we usually integrate first with respect to $\rho$ . The procedure for finding the limits of integration is as follows. As with cylindrical coordinates, we restrict $\theta$ in the form $\alpha \leq \theta \leq \beta$ and $0 \leq \beta - \alpha \leq 2\pi$ . 

How to Integrate in Spherical Coordinates 

To evaluate 

$$
\iiint_ {D} f (\rho , \phi , \theta) d V
$$

over a solid region D in space in spherical coordinates, integrating first with respect to $\rho$ , then with respect to $\phi$ , and finally with respect to $\theta$ , take the following steps. 

1. Sketch. Sketch the solid region D along with its projection R on the xy-plane. Label the surfaces that bound D. 

![教材插图](/books/thomas-calculus/assets/35abf96653876d793e62604cedec513eb43c1f5cb7155065e3b5c93dcf404de5.jpg)


2. Find the $\rho$ -limits of integration. Draw a ray M from the origin through D, making an angle $\phi$ with the positive z-axis. Also draw the projection of M on the xy-plane (call the projection L). The ray L makes an angle $\theta$ with the positive x-axis. As $\rho$ increases, M enters D at $\rho = g_{1}(\phi, \theta)$ and leaves at $\rho = g_{2}(\phi, \theta)$ . These are the $\rho$ -limits of integration shown in the above figure. 

3. Find the $\phi$ -limits of integration. For any given $\theta$ , the angle $\phi$ that M makes with the positive z-axis runs from $\phi = \phi_{min}$ to $\phi = \phi_{max}$ . The $\phi$ -limits of integration may depend on $\theta$ , but they are often constant. 

4. Find the $\theta$ -limits of integration. The ray L sweeps over R as $\theta$ runs from $\alpha$ to $\beta$ . These are the $\theta$ -limits of integration. The integral is 

$$
\iiint_ {D} f (\rho , \phi , \theta) d V = \int_ {\theta = \alpha} ^ {\theta = \beta} \int_ {\phi = \phi_ {\min}} ^ {\phi = \phi_ {\max}} \int_ {\rho = g _ {1} (\phi , \theta)} ^ {\rho = g _ {2} (\phi , \theta)} f (\rho , \phi , \theta) \rho^ {2} \sin \phi d \rho d \phi d \theta .
$$

**EXAMPLE 5** Find the volume of the “ice cream cone” D bounded above by the sphere $\rho = 1$ and bounded below by the cone $\phi = \pi/3$ . 

**Solution** The volume is $V = \iiint_{D} \rho^{2} \sin \phi d\rho d\phi d\theta$ , the integral of $f(\rho, \phi, \theta) = 1$ over $D$ . 

To find the limits of integration for evaluating the integral, we begin by sketching D and its projection R on the xy-plane (Figure 14.56). 

The $\rho$ -limits of integration. We draw a ray M from the origin through D, making an angle $\phi$ with the positive z-axis. We also draw L, the projection of M on the xy-plane, along with the angle $\theta$ that L makes with the positive x-axis. Ray M enters D at $\rho = 0$ and leaves at $\rho = 1$ . 

The $\phi$ -limits of integration. The cone $\phi = \pi/3$ makes an angle of $\pi/3$ with the positive z-axis. For any given $\theta$ , the angle $\phi$ can run from $\phi = 0$ to $\phi = \pi/3$ . 

The $\theta$ -limits of integration. The ray L sweeps over R as $\theta$ runs from 0 to $2\pi$ . The volume is 

$$
\begin{array}{l} V = \iiint_ {D} \rho^ {2} \sin \phi d \rho d \phi d \theta = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} \int_ {0} ^ {1} \rho^ {2} \sin \phi d \rho d \phi d \theta \\ = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} \left[ \frac {\rho^ {3}}{3} \right] _ {\rho = 0} ^ {\rho = 1} \sin \phi d \phi d \theta = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} \frac {1}{3} \sin \phi d \phi d \theta \\ = \int_ {0} ^ {2 \pi} \left[ - \frac {1}{3} \cos \phi \right] _ {\phi = 0} ^ {\phi = \pi / 3} d \theta = \int_ {0} ^ {2 \pi} \left(- \frac {1}{6} + \frac {1}{3}\right) d \theta = \frac {1}{6} (2 \pi) = \frac {\pi}{3}. \end{array}
$$

**EXAMPLE 6** A solid of constant density $\delta = 1$ occupies the solid region $D$ in Example 5. Find the solid's moment of inertia about the $z$ -axis. 

**Solution** In rectangular coordinates, the moment is 

$$
I _ {z} = \iiint_ {D} (x ^ {2} + y ^ {2}) d V.
$$

In spherical coordinates, $x^{2} + y^{2} = (\rho \sin \phi \cos \theta)^{2} + (\rho \sin \phi \sin \theta)^{2} = \rho^{2} \sin^{2} \phi$ . Hence, 

$$
I _ {z} = \iiint_ {D} (\rho^ {2} \sin^ {2} \phi) \rho^ {2} \sin \phi d \rho d \phi d \theta = \iiint_ {D} \rho^ {4} \sin^ {3} \phi d \rho d \phi d \theta .
$$

For the region $D$ in Example 5, this becomes 

$$
\begin{array}{l} I _ {z} = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} \int_ {0} ^ {1} \rho^ {4} \sin^ {3} \phi d \rho d \phi d \theta = \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} \left[ \frac {\rho^ {5}}{5} \right] _ {\rho = 0} ^ {\rho = 1} \sin^ {3} \phi d \phi d \theta \\ = \frac {1}{5} \int_ {0} ^ {2 \pi} \int_ {0} ^ {\pi / 3} (1 - \cos^ {2} \phi) \sin \phi d \phi d \theta = \frac {1}{5} \int_ {0} ^ {2 \pi} \left[ - \cos \phi + \frac {\cos^ {3} \phi}{3} \right] _ {\phi = 0} ^ {\phi = \pi / 3} d \theta \\ = \frac {1}{5} \int_ {0} ^ {2 \pi} \left(- \frac {1}{2} + \frac {1}{2 4} + 1 - \frac {1}{3}\right) d \theta = \frac {1}{5} \int_ {0} ^ {2 \pi} \frac {5}{2 4} d \theta = \frac {1}{2 4} (2 \pi) = \frac {\pi}{1 2}. \end{array}
$$

### Coordinate Conversion Formulas

CYLINDRICAL TO 

SPHERICAL TO 

SPHERICAL TO 

RECTANGULAR 

RECTANGULAR 

CYLINDRICAL 

$$
x = r \cos \theta
$$

$$
x = \rho \sin \phi \cos \theta
$$

$$
r = \rho \sin \phi
$$

$$
y = r \sin \theta
$$

$$
y = \rho \sin \phi \sin \theta
$$

$$
z = \rho \cos \phi
$$

$$
z = z
$$

$$
z = \rho \cos \phi
$$

$$
\theta = \theta
$$

Corresponding formulas for dV in triple integrals: 

$$
\begin{array}{r l} d V & = d x d y d z \\ & = r d z d r d \theta \\ & = \rho^ {2} \sin \phi d \rho d \phi d \theta \end{array}
$$

In the next section we offer a more general procedure for determining dV in cylindrical and spherical coordinates. The results, of course, will be the same. 

### EXERCISES 14.7

In Exercises 1–12, sketch the region described by the following cylindrical coordinates in three-dimensional space. 

1. $r = 2$ 

2. $\theta = \frac{\pi}{4}$ 

3. $z = -1$ 

4. $z = r$ 

5. $r = \theta$ 

6. $z = r\sin \theta$ 

7. $r^2 + z^2 = 4$ 

8. $1 \leq r \leq 2, 0 \leq \theta \leq \frac{\pi}{3}$ 

9. $r \leq z \leq \sqrt{9 - r^2}$ 

10. $0 \leq r \leq 2\sin \theta, 1 \leq z \leq 3$ 

11. $0 \leq r \leq 4\cos \theta, 0 \leq \theta \leq \frac{\pi}{2}, 0 \leq z \leq 5$ 

12. $0 \leq r \leq 3, \frac{-\pi}{2} \leq \theta \leq \frac{\pi}{2}, 0 \leq z \leq r \cos \theta$ 

In Exercises 13–22, sketch the region described by the following spherical coordinates in three-dimensional space. 

13. $\rho = 3$ 

14. $\phi = \frac{\pi}{6}$ 

15. $\theta = \frac{2}{3}\pi$ 

16. $\rho = \csc \phi$

17. $\rho \cos \phi = 4$ 

18. $1 \leq \rho \leq 2 \sec \phi, 0 \leq \phi \leq \frac{\pi}{4}$ 

19. $0 \leq \rho \leq 3 \csc \phi$ 

20. $0 \leq \rho \leq 1$ , $\frac{\pi}{2} \leq \phi \leq \pi$ , $0 \leq \theta \leq \pi$ 

21. $0 \leq \rho \cos \theta \sin \phi \leq 2, 0 \leq \rho \sin \theta \sin \phi \leq 3,$ $0 \leq \rho \cos \phi \leq 4$ 

22. $4 \sec \phi \leq \rho \leq 5, 0 \leq \phi \leq \frac{\pi}{2}$ 

#### Evaluating Integrals in Cylindrical Coordinates

Evaluate the cylindrical coordinate integrals in Exercises 23-28. 

23. $\int_0^{2\pi}\int_0^1\int_r^{\sqrt{2 - r^2}}r  dz  dr  d\theta$

24. $\int_0^{2\pi}\int_0^3\int_{r^2 /3}^{\sqrt{18 - r^2}}r  dz  dr  d\theta$

25. $\int_0^{2\pi}\int_0^{\theta /2\pi}\int_0^{3 + 24r^2}r  dz  dr  d\theta$

26. $\int_0^\pi \int_0^{\theta /\pi}\int_{-\sqrt{4 - r^2}}^{3\sqrt{4 - r^2}}z r dz dr d\theta$

27. $\int_0^{2\pi}\int_0^1\int_r^{1 / \sqrt{2 - r^2}}3rdzdrd\theta$ 

28. $\int_0^{2\pi}\int_0^1\int_{-1 / 2}^{1 / 2}(r^2\sin^2\theta +z^2)rdzdrd\theta$ 

The integrals we have seen so far suggest that there are preferred orders of integration for cylindrical coordinates, but other orders usually work well and are occasionally easier to evaluate. Evaluate the integrals in Exercises 29–32. 

29. $\int_0^{2\pi}\int_0^3\int_0^{z / 3}r^3 drdz d\theta$

30. $\int_{-1}^{1}\int_{0}^{2\pi}\int_{0}^{1 + \cos \theta}4rdrd\theta dz$

31. $\int_0^1\int_0^{\sqrt{z}}\int_0^{2\pi}(r^2\cos^2\theta +z^2)r d\theta dr dz$ 

32. $\int_0^2\int_{r - 2}^{\sqrt{4 - r^2}}\int_0^{2\pi}(r\sin \theta +1)r d\theta dzdr$ 

33. Let $D$ be the solid region bounded below by the plane $z = 0$ , above by the sphere $x^{2} + y^{2} + z^{2} = 4$ , and on the sides by the cylinder $x^{2} + y^{2} = 1$ . Set up the triple integrals in cylindrical coordinates that give the volume of $D$ using the following orders of integration.
a. $dz \, dr \, d\theta$ b. $dr \, dz \, d\theta$ c. $d\theta \, dz \, dr$ 

34. Let D be the solid region bounded below by the cone $z = \sqrt{x^{2} + y^{2}}$ and above by the paraboloid $z = 2 - x^{2} - y^{2}$ . Set up the triple integrals in cylindrical coordinates that give the volume of D using the following orders of integration.
a. dz dr dθ b. dr dz dθ c. dθ dz dr 

Finding Iterated Integrals in Cylindrical Coordinates 

35. Give the limits of integration for evaluating the integral 

$$
\iiint_ {D} f (r, \theta , z) r d z d r d \theta
$$

as an iterated integral over the solid region D that is bounded below by the plane z = 0, on the side by the cylinder $r = \cos \theta$ , and on top by the paraboloid $z = 3r^{2}$ . 

36. Convert the integral 

$$
\int_ {- 1} ^ {1} \int_ {0} ^ {\sqrt {1 - y ^ {2}}} \int_ {0} ^ {x} (x ^ {2} + y ^ {2}) d z d x d y
$$

to an equivalent integral in cylindrical coordinates and evaluate the result. 

In Exercises 37–42, set up the iterated integral for evaluating $\iiint_{D} f(r, \theta, z) r dz dr d\theta$ over the given solid region D. 

37. D is the right circular cylinder whose base is the circle $r = 2 \sin \theta$ in the xy-plane and whose top lies in the plane z = 4 - y. 

![教材插图](/books/thomas-calculus/assets/457f4ebf4aa75e7e8314d9ab630b44325f3e2e8da325e3b75db7098e431bfc4d.jpg)



$r = 2\cos \theta$


38. D is the right circular cylinder whose base is the circle $r = 3 \cos \theta$ and whose top lies in the plane z = 5 - x. 

![教材插图](/books/thomas-calculus/assets/3c2dd4d241a92368aedbe6fcf46676f6bee7b93675a45dfbc503acface1b4ac5.jpg)


39. D is the solid right cylinder whose base is the region in the xy-plane that lies inside the cardioid $r = 1 + \cos \theta$ and outside the circle r = 1 and whose top lies in the plane z = 4. 

![教材插图](/books/thomas-calculus/assets/5699b73f274a21d254d8330f90626a11432d916f846331e21e136b91bf92b6da.jpg)


40. D is the solid right cylinder whose base is the region between the circles $r = \cos \theta$ and $r = 2 \cos \theta$ and whose top lies in the plane z = 3 - y. 

![教材插图](/books/thomas-calculus/assets/ce651ecea5327d24acc670d910fce503617a68cf0a910d5eb52d41211cc7d981.jpg)


41. D is the right prism whose base is the triangle in the xy-plane bounded by the x-axis and the lines y = x and x = 1 and whose top lies in the plane z = 2 - y. 

![教材插图](/books/thomas-calculus/assets/0c0579fd01fd6cb9b1ceead658f8da46b3e00b30991acc97f4c1b1b7bec7ddc9.jpg)


42. D is the right prism whose base is the triangle in the xy-plane bounded by the y-axis and the lines y = x and y = 1 and whose top lies in the plane z = 2 - x. 

![教材插图](/books/thomas-calculus/assets/c260a233dcc455e97f1847570f5e869b5d05843fc9f33cea95a8cc8bca9d80cf.jpg)


Evaluating Integrals in Spherical Coordinates 

Evaluate the spherical coordinate integrals in Exercises 43-48. 

43. $\int_0^\pi \int_0^\pi \int_0^{2\sin \phi}\rho^2\sin \phi d\rho d\phi d\theta$ 

44. $\int_0^{2\pi}\int_0^{\pi /4}\int_0^2 (\rho \cos \phi)\rho^2\sin \phi d\rho d\phi d\theta$ 

45. $\int_0^{2\pi}\int_0^\pi \int_0^{(1 - \cos \phi) / 2}\rho^2\sin \phi d\rho d\phi d\theta$ 

46. $\int_0^{3\pi /2}\int_0^\pi \int_0^1 5\rho^3\sin^3\phi d\rho d\phi d\theta$ 

47. $\int_0^{2\pi}\int_0^{\pi /3}\int_{\sec \phi}^2 3\rho^2\sin \phi d\rho d\phi d\theta$ 

48. $\int_0^{2\pi}\int_0^{\pi /4}\int_0^{\sec \phi}(\rho \cos \phi)\rho^2\sin \phi d\rho d\phi d\theta$ 

Changing the Order of Integration in Spherical Coordinates
The previous integrals suggest there are preferred orders of integration for spherical coordinates, but other orders give the same value and are occasionally easier to evaluate. Evaluate the integrals in Exercises 49–52. 

49. $\int_0^2\int_{-\pi}^0\int_{\pi /4}^{\pi /2}\rho^3\sin 2\phi d\phi d\theta d\rho$ 

50. $\int_{\pi /6}^{\pi /3}\int_{\csc \phi}^{2\csc \phi}\int_{0}^{2\pi}\rho^{2}\sin \phi d\theta d\rho d\phi$ 

51. $\int_0^1\int_0^\pi \int_0^{\pi /4}12\rho \sin^3\phi d\phi d\theta d\rho$ 

52. $\int_{\pi /6}^{\pi /2}\int_{-\pi /2}^{\pi /2}\int_{\csc \phi}^{2}5\rho^{4}\sin^{3}\phi d\rho d\theta d\phi$ 

53. Let $D$ be the region in Exercise 33. Set up the triple integrals in spherical coordinates that give the volume of $D$ using the following orders of integration. 

a. $d\rho d\phi d\theta$ 

b. $d\phi \, d\rho \, d\theta$ 

54. Let D be the solid region bounded below by the cone $z = \sqrt{x^{2} + y^{2}}$ and above by the plane z = 1. Set up the triple integrals in spherical coordinates that give the volume of D using the following orders of integration. 

a. $d\rho \, d\phi \, d\theta$ 

b. $d\phi \, d\rho \, d\theta$ 

Finding Iterated Integrals in Spherical Coordinates 

In Exercises 55–60, (a) find the spherical coordinate limits for the integral that calculates the volume of the given solid and then (b) evaluate the integral. 

55. The solid between the sphere $\rho = \cos\phi$ and the hemisphere $\rho = 2, z \geq 0$ 

![教材插图](/books/thomas-calculus/assets/92f43d156641bdac4ed38f201895ef59bb587a4e61effc10c30baee1aa4ce877.jpg)


56. The solid bounded below by the hemisphere $\rho = 1, z \geq 0$ , and above by the surface $\rho = 1 + \cos \phi$ 

![教材插图](/books/thomas-calculus/assets/d2a2fe6a74a907a578032105376ff658a0d19d30129368013b1c3fc53ce2b3ba.jpg)


57. The solid enclosed by the surface $\rho = 1 - \cos \phi$ 

58. The upper portion cut from the solid in Exercise 57 by the xy-plane 

59. The solid bounded below by the sphere $\rho = 2 \cos \phi$ and above by the cone $z = \sqrt{x^{2} + y^{2}}$ 

![教材插图](/books/thomas-calculus/assets/ec1c713881f996a0ce5708b30d16f2884a2a6b649419b5842206ace3c498a749.jpg)


60. The solid bounded below by the xy-plane, on the sides by the sphere $\rho = 2$ , and above by the cone $\phi = \pi/3$ 

![教材插图](/books/thomas-calculus/assets/b54ab7bbe896b1ce5cc9ae4e36346aa703a177bdd52f630d1d7d94bbf644ea10.jpg)


#### Finding Triple Integrals

61. Set up triple integrals for the volume of the sphere $\rho = 2$ in (a) spherical, (b) cylindrical, and (c) rectangular coordinates. 

62. Let D be the solid region in the first octant that is bounded below by the cone $\phi = \pi/4$ and above by the sphere $\rho = 3$ . Express the volume of D as an iterated triple integral in (a) cylindrical and (b) spherical coordinates. Then (c) find the volume. 

63. Let D be the smaller cap cut from a solid ball of radius 2 units by a plane 1 unit from the center of the sphere. Express the volume of D as an iterated triple integral in (a) spherical, (b) cylindrical, and (c) rectangular coordinates. Then (d) find the volume by evaluating one of the three triple integrals. 

64. Let $D$ be the solid hemisphere $x^{2} + y^{2} + z^{2} \leq 1$ , $z \geq 0$ . If the density is $\delta(x, y, z) = 1$ , express the moment of intertia $I_{z}$ as an iterated integral in (a) cylindrical and (b) spherical coordinates. Then (c) find $I_{z}$ . 

#### Volumes

Find the volumes of the solids in Exercises 65–70. 


65.



66.


![教材插图](/books/thomas-calculus/assets/87abd7f9e7065f6aeeea62ec2459c15b1cd543107ee80774f9e10c3334772d05.jpg)


![教材插图](/books/thomas-calculus/assets/496284541484fe332debadc49f3c14dba30c968adac7d795cb9f2a34c3a9feae.jpg)



67.


![教材插图](/books/thomas-calculus/assets/31f189f256d4d41835d2e6a2a4cfa991a851f557e50045dab5991993e2f0f98a.jpg)



68.


![教材插图](/books/thomas-calculus/assets/0fae402ce125c221b657a2a2f505ee8449aed19725c17a3a0ac2e21fa7c16c64.jpg)



69.


![教材插图](/books/thomas-calculus/assets/38cff4d722769e887abc813f195d91abb423056b04e0897bb8aaa8bfbb6cbff9.jpg)



70.


![教材插图](/books/thomas-calculus/assets/cab8d1347066ae61de99ce1c5713e472470b81ba10503c6f0d1b8804f82adb87.jpg)


71. Ball and cones Find the volume of the portion of the ball $\rho \leq a$ that lies between the cones $\phi = \pi /3$ and $\phi = 2\pi /3$ . 

72. Ball and half-planes Find the volume of the region cut from the ball $\rho \leq a$ by the half-planes $\theta = 0$ and $\theta = \pi /6$ in the first octant. 

73. Ball and plane Find the volume of the smaller region cut from the ball $\rho \leq \sqrt{2}$ by the plane z = 1. 

74. Cone and planes Find the volume of the solid enclosed by the cone $z = \sqrt{x^{2} + y^{2}}$ between the planes z = 1 and z = 2. 

75. Cylinder and paraboloid Find the volume of the solid region bounded below by the plane z = 0, laterally by the cylinder $x^{2} + y^{2} = 1$ , and above by the paraboloid $z = x^{2} + y^{2}$ . 

76. Cylinder and paraboloids Find the volume of the solid region bounded below by the paraboloid $z = x^{2} + y^{2}$ , laterally by the cylinder $x^{2} + y^{2} = 1$ , and above by the paraboloid $z = x^{2} + y^{2} + 1$ . 

77. Cylinder and cones Find the volume of the solid cut from the thick-walled cylinder $1 \leq x^{2} + y^{2} \leq 2$ by the cones $z = \pm \sqrt{x^2 + y^2}$ . 

78. Sphere and cylinder Find the volume of the solid region that lies inside the sphere $x^{2} + y^{2} + z^{2} = 2$ and outside the cylinder $x^{2} + y^{2} = 1$ . 

79. Cylinder and planes Find the volume of the solid region enclosed by the cylinder $x^{2} + y^{2} = 4$ and the planes z = 0 and $y + z = 4$ . 

80. Cylinder and planes Find the volume of the solid region enclosed by the cylinder $x^{2} + y^{2} = 4$ and the planes z = 0 and $x + y + z = 4$ . 

81. Region trapped by paraboloids Find the volume of the solid region bounded above by the paraboloid $z = 5 - x^{2} - y^{2}$ and below by the paraboloid $z = 4x^{2} + 4y^{2}$ . 

82. Paraboloid and cylinder Find the volume of the solid region bounded above by the paraboloid $z = 9 - x^2 - y^2$ , bounded below by the xy-plane, and lying outside the cylinder $x^2 + y^2 = 1$ . 

83. Cylinder and sphere Find the volume of the region cut from the solid cylinder $x^{2} + y^{2} \leq 1$ by the sphere $x^{2} + y^{2} + z^{2} = 4$ . 

84. Sphere and paraboloid Find the volume of the solid region bounded above by the sphere $x^{2} + y^{2} + z^{2} = 2$ and below by the paraboloid $z = x^{2} + y^{2}$ . 

#### Average Values

85. Find the average value of the function $f(r, \theta, z) = r$ over the solid region bounded by the cylinder $r = 1$ between the planes $z = -1$ and $z = 1$ . 

86. Find the average value of the function $f(r,\theta,z)=r$ over the solid ball bounded by the sphere $r^{2}+z^{2}=1$ . (This is the sphere $x^{2}+y^{2}+z^{2}=1$ .) 

87. Find the average value of the function $f(\rho,\phi,\theta)=\rho$ over the solid ball $\rho\leq1$ . 

88. Find the average value of the function $f(\rho,\phi,\theta)=\rho\cos\phi$ over the upper half of the solid ball $\rho\leq1,0\leq\phi\leq\pi/2$ . 

#### Masses, Moments, and Centroids

89. Center of mass A solid of constant density is bounded below by the plane z = 0, above by the cone z = r, $r \geq 0$ , and on the sides by the cylinder r = 1. Find the center of mass. 

90. Centroid Find the centroid of the solid region in the first octant that is bounded above by the cone $z = \sqrt{x^{2} + y^{2}}$ , below by the plane z = 0, and on the sides by the cylinder $x^{2} + y^{2} = 4$ and the planes x = 0 and y = 0. 

91. Centroid Find the centroid of the solid in Exercise 60. 

92. Centroid Find the centroid of the solid bounded above by the sphere $\rho = a$ and below by the cone $\phi = \pi/4$ . 

93. Centroid Find the centroid of the solid region that is bounded above by the surface $z = \sqrt{r}$ , on the sides by the cylinder r = 4, and below by the xy-plane. 

94. Centroid Find the centroid of the region cut from the solid ball $r^{2} + z^{2} \leq 1$ by the half-planes $\theta = -\pi/3$ , $r \geq 0$ , and $\theta = \pi/3$ , $r \geq 0$ . 

95. Moment of inertia of solid cone Find the moment of inertia of a solid right circular cone of base radius 1 and height 1 about an axis through the vertex parallel to the base if the density is $\delta = 1$ . 

96. Moment of inertia of ball Find the moment of inertia of a ball of radius $a$ about a diameter if the density is $\delta = 1$ . 

97. Moment of inertia of solid cone Find the moment of inertia of a solid right circular cone of base radius $a$ and height $h$ about its axis if the density is $\delta = 1$ . (Hint: Place the cone with its vertex at the origin and its axis along the $z$ -axis.) 

98. Variable density A solid is bounded on the top by the paraboloid $z = r^2$ , on the bottom by the plane $z = 0$ , and on the sides by the cylinder $r = 1$ . Find the center of mass and the moment of inertia about the $z$ -axis if the density is
a. $\delta(r, \theta, z) = z$ b. $\delta(r, \theta, z) = r$ . 

99. Variable density A solid is bounded below by the cone $z = \sqrt{x^2 + y^2}$ and above by the plane $z = 1$ . Find the center of mass and the moment of inertia about the $z$ -axis if the density is 

$$
\delta (r, \theta , z) = z
$$

$$
\delta (r, \theta , z) = z ^ {2}.
$$

100. Variable density A solid ball is bounded by the sphere $\rho = a$ . Find the moment of inertia about the $z$ -axis if the density is  
a. $\delta(\rho, \phi, \theta) = \rho^2$ b. $\delta(\rho, \phi, \theta) = r = \rho \sin \phi$ . 

101. Centroid of solid semi-ellipsoid Show that the centroid of the solid semi-ellipsoid of revolution $(r^{2}/a^{2}) + (z^{2}/h^{2}) \leq 1$ , $z \geq 0$ , lies on the z-axis three-eighths of the way from the base to the top. The special case h = a gives a solid hemisphere. Thus, the centroid of a solid hemisphere lies on the axis of symmetry three-eighths of the way from the base to the top. 

102. Centroid of solid cone Show that the centroid of a solid right circular cone is one-fourth of the way from the base to the vertex. (In general, the centroid of a solid cone or pyramid is one-fourth of the way from the centroid of the base to the vertex.) 

103. Density of center of a planet A planet is in the shape of a sphere of radius R and total mass M with spherically symmetric density distribution that increases linearly as one approaches its center. What is the density at the center of this planet if the density at its edge (surface) is taken to be zero? 

104. Mass of planet's atmosphere A spherical planet of radius $R$ has an atmosphere whose density is $\mu = \mu_0 e^{-ch}$ , where $h$ is the altitude above the surface of the planet, $\mu_0$ is the density at sea level, and $c$ is a positive constant. Find the mass of the planet's atmosphere. 

#### Theory and Examples

105. Vertical planes in cylindrical coordinates

a. Show that planes perpendicular to the x-axis have equations of the form $r = a \sec \theta$ in cylindrical coordinates. 

b. Show that planes perpendicular to the y-axis have equations of the form $r = b \csc \theta$ . 

106. (Continuation of Exercise 105.) Find an equation of the form $r = f(\theta)$ in cylindrical coordinates for the plane $ax + by = c$ , $c \neq 0$ . 

107. Symmetry What symmetry will you find in a surface that has an equation of the form $r = f(z)$ in cylindrical coordinates? Give reasons for your answer. 

108. Symmetry What symmetry will you find in a surface that has an equation of the form $\rho = f(\phi)$ in spherical coordinates? Give reasons for your answer. 

## 14.8 Substitutions in Multiple Integrals

![教材插图](/books/thomas-calculus/assets/753d40cdf9145f71c0e4ecd8ae26f4335ec79617b7441be918f557ed82b6eb18.jpg)



Cartesian uv-plane


![教材插图](/books/thomas-calculus/assets/a410b24b5b2decdacd75732f439e6f8a93d6592a640ad9d176b3745f1af6a6bd.jpg)



Cartesian xy-plane



FIGURE 14.57 The equations


$x = g(u, v)$ and $y = h(u, v)$ allow us to change an integral over a region R in the xy-plane into an integral over a region G in the uv-plane. 

**HISTORICAL BIOGRAPHY Carl Gustav Jacob Jacobi (1804–1851)**

Jacobi, one of nineteenth-century Germany's most accomplished scientists, developed the theory of determinants and transformations into a powerful tool for evaluating multiple integrals and solving differential equations. He also applied transformation methods to study integrals like the ones that arise in the calculation of arc length. 

This section introduces the ideas involved in coordinate transformations to evaluate multiple integrals by substitution. The method replaces complicated integrals by ones that are easier to evaluate. Substitutions accomplish this by simplifying the integrand, the limits of integration, or both. A thorough discussion of multivariable transformations and substitutions is best left to a more advanced course, but our introduction here shows how the substitutions just studied reflect the general idea derived for single integral calculus. 

To know more, visit the companion Website. 

### Substitutions in Double Integrals

The polar coordinate substitution of Section 14.4 is a special case of a more general substitution method for double integrals, a method that pictures changes in variables as transformations of regions. 

Suppose that a region G in the uv-plane is transformed into the region R in the xy-plane by equations of the form 

$$
x = g (u, v), \quad y = h (u, v),
$$

as suggested in Figure 14.57. We assume the transformation is one-to-one on the interior of $G$ . We call $R$ the image of $G$ under the transformation, and $G$ the preimage of $R$ . Any function $f(x,y)$ defined on $R$ can be thought of as a function $f(g(u,v),h(u,v))$ defined on $G$ as well. How is the integral of $f(x,y)$ over $R$ related to the integral of $f(g(u,v),h(u,v))$ over $G$ ? 

To gain some insight into the question, we look again at the single variable case. To be consistent with how we are using them now, we interchange the variables x and u used in the substitution method for single integrals in Chapter 5, so the equation is 

$$
\int_ {g (a)} ^ {g (b)} f (x) d x = \int_ {a} ^ {b} f (g (u)) g ^ {\prime} (u) d u. \quad x = g (u), d x = g ^ {\prime} (u) d u
$$

To propose an analogue for substitution in a double integral $\iint_{R} f(x, y) \, dx \, dy$ , we need a derivative factor like $g'(u)$ as a multiplier that transforms the area element du dv in the region G to its corresponding area element dx dy in the region R. We denote this factor by J. In continuing with our analogy, it is reasonable to assume that J is a function of both variables u and v, just as $g'$ is a function of the single variable u. Moreover, J should register instantaneous change, so partial derivatives are going to be involved in its expression. Since four partial derivatives are associated with the transforming equations $x = g(u, v)$ and $y = h(u, v)$ , it is also reasonable to assume that the factor $J(u, v)$ we seek includes them all. These features are captured in the following definition, which is constructed from the partial derivatives and is named after the German mathematician Carl Jacobi. 

Differential Area Change Substituting $x = g(u,v),y = h(u,v)$ 

$$
d x d y = \left| \frac {\partial (x , y)}{\partial (u , v)} \right| d u d v
$$

![教材插图](/books/thomas-calculus/assets/d3a0d68b278233e10f5f9c619c007b4333c9114cbd66125068014fbe693ce102.jpg)


$$
\begin{array}{l} \Big \downarrow x = r \cos \theta \\ \Big \downarrow y = r \sin \theta \end{array}
$$

![教材插图](/books/thomas-calculus/assets/80946a34288b0a89f34c4d988f4860a4fb29b7d1d727680c0e20ee7192f506c9.jpg)


$x = r \cos \theta, y = r \sin \theta$ transform G into R. The Jacobian factor r, calculated in Example 1, scales the differential rectangle dr dθ in G to match the differential area element dx dy in R. 

> ***DEFINITION*** The Jacobian determinant or Jacobian of the coordinate transformation $x = g(u, v)$ , $y = h(u, v)$ is 
>
> $$
> J (u, v) = \left| \begin{array}{c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} \end{array} \right| = \frac {\partial x}{\partial u} \frac {\partial y}{\partial v} - \frac {\partial y}{\partial u} \frac {\partial x}{\partial v}.\tag{1}
> $$
>
The Jacobian can also be denoted by 

$$
J (u, v) = \frac {\partial (x , y)}{\partial (u , v)}
$$

to help us remember how the determinant in Equation (1) is constructed from the partial derivatives of x and y. The array of partial derivatives in Equation (1) behaves just like the derivative $g'$ in the single variable situation. The Jacobian measures how much the transformation is expanding or contracting the area around the point $(u, v)$ . Effectively, the factor $|J|$ converts the area of the differential rectangle du dv in G to match its corresponding differential area dx dy in R. We note that, in general, the value of the scaling factor $|J|$ depends on the point $(u, v)$ in G; that is, the scaling changes as the point $(u, v)$ varies through the region G. Our examples to follow will show how it scales the differential area du dv for specific transformations. 

Now we can answer our original question concerning the relationship of the integral of $f(x, y)$ over the region R to the integral of $f(g(u, v), h(u, v))$ over G. 

**THEOREM 3—Substitution for Double Integrals**

Suppose that $f(x, y)$ is continuous over the region R. Let G be the preimage of R under the transformation $x = g(u, v)$ , $y = h(u, v)$ , which is assumed to be one-to-one on the interior of G. If the functions g and h have continuous first partial derivatives within the interior of G, then 

$$
\iint_ {R} f (x, y) d x d y = \iint_ {G} f (g (u, v), h (u, v)) \left| \frac {\partial (x , y)}{\partial (u , v)} \right| d u d v.\tag{2}
$$

The derivation of Equation (2) is intricate and properly belongs to a course in advanced calculus, so we do not include it here. We now present examples illustrating the substitution method defined by the equation. 

**EXAMPLE 1** Find the Jacobian for the polar coordinate transformation $x = r \cos \theta$ , $y = r \sin \theta$ , and use Equation (2) to write the Cartesian integral $\iint_{R} f(x, y) dx dy$ as a polar integral. 

**Solution** Figure 14.58 shows how the equations $x = r \cos \theta$ , $y = r \sin \theta$ transform the rectangle $G: 0 \leq r \leq 1, 0 \leq \theta \leq \pi/2$ , into the quarter of a circular disk $R$ bounded by $x^2 + y^2 = 1$ in the first quadrant of the $xy$ -plane. 

For polar coordinates, we have $r$ and $\theta$ in place of $u$ and $v$ . With $x = r\cos \theta$ and $y = r\sin \theta$ , the Jacobian is 

$$
J (r, \theta) = \left| \begin{array}{c c} \frac {\partial x}{\partial r} & \frac {\partial x}{\partial \theta} \\ \frac {\partial y}{\partial r} & \frac {\partial y}{\partial \theta} \end{array} \right| = \left| \begin{array}{c c} \cos \theta & - r \sin \theta \\ \sin \theta & r \cos \theta \end{array} \right| = r (\cos^ {2} \theta + \sin^ {2} \theta) = r.
$$

Since we assume $r \geq 0$ when integrating in polar coordinates, $|J(r,\theta)| = |r| = r$ so that Equation (2) gives 

$$
\iint_ {R} f (x, y) d x d y = \iint_ {G} f (r \cos \theta , r \sin \theta) r d r d \theta .\tag{3}
$$

This is the same formula we derived independently using a geometric argument for polar area in Section 14.4. 

Here is an example of a substitution in which the image of a rectangle under the coordinate transformation is a trapezoid. Transformations like this one are called linear transformations, and their Jacobians are constant throughout G. 

**EXAMPLE 2** Evaluate

$$
\int_ {0} ^ {4} \int_ {x = y / 2} ^ {x = (y / 2) + 1} \frac {2 x - y}{2} d x d y
$$

by applying the transformation 

$$
u = \frac {2 x - y}{2}, \quad v = \frac {y}{2}\tag{4}
$$

and integrating over an appropriate region in the uv-plane. 

**Solution** We sketch the region R of integration in the xy-plane and identify its boundaries (Figure 14.59). 

![教材插图](/books/thomas-calculus/assets/c8d15f7d0434531be0fd7e4836a4a2a1676c72b5e86978761d7e8bfbf8f5b38f.jpg)



FIGURE 14.59 The equations $x = u + v$ and y = 2v transform G into R. Reversing the transformation by the equations $u = (2x - y)/2$ and v = y/2 transforms R into G (Example 2).



To apply Equation (2), we need to find the corresponding uv-region G and the Jacobian of the transformation. To find them, we first solve Equations (4) for x and y in terms of u and v. From those equations it is easy to find algebraically that


$$
x = u + v, \quad y = 2 v.\tag{5}
$$


We then find the boundaries of G by substituting these expressions into the equations for the boundaries of R (Figure 14.59)


<table><tr><td>xy-equations for the boundary of R</td><td>Corresponding uv-equations for the boundary of G</td><td>Simplified uv-equations</td></tr><tr><td>x = y/2</td><td>u + v = 2v/2 = v</td><td>u = 0</td></tr><tr><td>x = (y/2) + 1</td><td>u + v = (2v/2) + 1 = v + 1</td><td>u = 1</td></tr><tr><td>y = 0</td><td>2v = 0</td><td>v = 0</td></tr><tr><td>y = 4</td><td>2v = 4</td><td>v = 2</td></tr></table>

![教材插图](/books/thomas-calculus/assets/55dbcb2ac26b4b70c00491fab19d4790dfc9398965c39942a9e77d5e0c0f7ac4.jpg)


FIGURE 14.60 The equations $x = (u/3) - (v/3)$ and $y = (2u/3) + (v/3)$ transform G into R.
Reversing the transformation by the
equations $u = x + y$ and $v = y - 2x$ transforms R into G (Example 3). 

From Equations (5) the Jacobian of the transformation is 

$$
J (u, v) = \left| \begin{array}{c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} \end{array} \right| = \left| \begin{array}{c c} \frac {\partial}{\partial u} (u + v) & \frac {\partial}{\partial v} (u + v) \\ \frac {\partial}{\partial u} (2 v) & \frac {\partial}{\partial v} (2 v) \end{array} \right| = \left| \begin{array}{c c} 1 & 1 \\ 0 & 2 \end{array} \right| = 2.
$$

We now have everything we need to apply Equation (2): 

$$
\begin{array}{l} \int_ {0} ^ {4} \int_ {x = y / 2} ^ {x = (y / 2) + 1} \frac {2 x - y}{2} d x d y = \int_ {v = 0} ^ {v = 2} \int_ {u = 0} ^ {u = 1} u | J (u, v) | d u d v \\ = \int_ {0} ^ {2} \int_ {0} ^ {1} (u) (2) d u d v = \int_ {0} ^ {2} \left[ u ^ {2} \right] _ {u = 0} ^ {u = 1} d v = \int_ {0} ^ {2} d v = 2. \end{array}
$$

**EXAMPLE 3** Evaluate 

$$
\int_ {0} ^ {1} \int_ {0} ^ {1 - x} \sqrt {x + y} (y - 2 x) ^ {2} d y d x.
$$

**Solution** We sketch the region R of integration in the xy-plane and identify its boundaries (Figure 14.60). The integrand suggests the transformation $u = x + y$ and $v = y - 2x$ . Routine algebra produces x and y as functions of u and v: 

$$
x = \frac {u}{3} - \frac {v}{3}, \quad y = \frac {2 u}{3} + \frac {v}{3}.\tag{6}
$$

From Equations (6), we can find the boundaries of the uv-region G (Figure 14.60). 

<table><tr><td>xy-equations for the boundary of R</td><td>Corresponding uv-equations for the boundary of G</td><td>Simplified uv-equations</td></tr><tr><td>x + y = 1</td><td><eq>\left( \frac{u}{3} - \frac{v}{3} \right) + \left( \frac{2u}{3} + \frac{v}{3} \right) = 1</eq></td><td>u = 1</td></tr><tr><td>x = 0</td><td><eq>\frac{u}{3} - \frac{v}{3} = 0</eq></td><td>v = u</td></tr><tr><td>y = 0</td><td><eq>\frac{2u}{3} + \frac{v}{3} = 0</eq></td><td>v = -2u</td></tr></table>

The Jacobian of the transformation in Equations (6) is 

$$
J (u, v) = \left| \begin{array}{c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} \end{array} \right| = \left| \begin{array}{c c} \frac {1}{3} & - \frac {1}{3} \\ \frac {2}{3} & \frac {1}{3} \end{array} \right| = \frac {1}{3}.
$$

Applying Equation (2), we evaluate the integral: 

$$
\begin{array}{l} \int_ {0} ^ {1} \int_ {0} ^ {1 - x} \sqrt {x + y} (y - 2 x) ^ {2} d y d x = \int_ {u = 0} ^ {u = 1} \int_ {v = - 2 u} ^ {v = u} u ^ {1 / 2} v ^ {2} | J (u, v) | d v d u \\ = \int_ {0} ^ {1} \int_ {- 2 u} ^ {u} u ^ {1 / 2} v ^ {2} \left(\frac {1}{3}\right) d v d u = \frac {1}{3} \int_ {0} ^ {1} u ^ {1 / 2} \left[ \frac {1}{3} v ^ {3} \right] _ {v = - 2 u} ^ {v = u} d u \\ = \frac {1}{9} \int_ {0} ^ {1} u ^ {1 / 2} (u ^ {3} + 8 u ^ {3}) d u = \int_ {0} ^ {1} u ^ {7 / 2} d u = \left. \frac {2}{9} u ^ {9 / 2} \right| _ {0} ^ {1} = \frac {2}{9}. \end{array}
$$

In the next example we illustrate a nonlinear transformation of coordinates resulting from simplifying the form of the integrand. Like the polar coordinates' transformation, nonlinear transformations can map a straight-line boundary of a region into a curved boundary (or vice versa with the inverse transformation). In general, nonlinear transformations are more complex to analyze than linear ones, and a complete treatment is left to a more advanced course. 

![教材插图](/books/thomas-calculus/assets/f45878cef5a1b633618e55eddcc6e161a27a78694f4018ce686e51de5aa90250.jpg)



FIGURE 14.61 The region of integration R in Example 4.


![教材插图](/books/thomas-calculus/assets/db6450329bf406c9e6ae5b37f1f6951248bba6e50ed43ae0548a5c9fcc9d59d1.jpg)



FIGURE 14.62 The boundaries of the region G correspond to those of region R in Figure 14.61. Notice that as we move counterclockwise around the region R, we move counterclockwise around the region G as well. The inverse transformation equations $u = \sqrt{xy}$ , $v = \sqrt{y/x}$ produce the region G from the region R.


**EXAMPLE 4** Evaluate the integral 

$$
\int_ {1} ^ {2} \int_ {1 / y} ^ {y} \sqrt {\frac {y}{x}} e ^ {\sqrt {x y}} d x d y.
$$

**Solution** The square root terms in the integrand suggest that we might simplify the integration by substituting $u = \sqrt{xy}$ and $v = \sqrt{y/x}$ . Squaring these equations gives $u^{2} = xy$ and $v^{2} = y/x$ , which imply that $u^{2}v^{2} = y^{2}$ and $u^{2}/v^{2} = x^{2}$ . So we obtain the transformation (in the same ordering of the variables as discussed before) 

$$
x = \frac {u}{v} \quad \text { and } \quad y = u v,
$$

with $u > 0$ and $v > 0$ . Let's first see what happens to the integrand itself under this transformation. The Jacobian of the transformation is not constant: 

$$
J (u, v) = \left| \begin{array}{c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} \end{array} \right| = \left| \begin{array}{c c} \frac {1}{v} & \frac {- u}{v ^ {2}} \\ v & u \end{array} \right| = \frac {2 u}{v}.
$$

If G is the region of integration in the uv-plane, then by Equation (2) the transformed double integral under the substitution is 

$$
\iint_ {R} \sqrt {\frac {y}{x}} e ^ {\sqrt {x y}} d x d y = \iint_ {G} v e ^ {u} | J (u, v) | d u d v = \iint_ {G} v e ^ {u} \frac {2 u}{v} d u d v = \iint_ {G} 2 u e ^ {u} d u d v.
$$

The transformed integrand function is easier to integrate than the original one, so we proceed to determine the limits of integration for the transformed integral. 

The region of integration R of the original integral in the xy-plane is shown in Figure 14.61. From the substitution equations $u = \sqrt{xy}$ and $v = \sqrt{y/x}$ , we see that the image of the left-hand boundary xy = 1 for R is the vertical line segment u = 1, $2 \geq v \geq 1$ , in G (see Figure 14.62). Likewise, the right-hand boundary y = x of R maps to the horizontal line segment $v = 1, 1 \leq u \leq 2$ , in G. Finally, the horizontal top boundary y = 2 of R maps to $uv = 2, 1 \leq v \leq 2$ , in G. As we move counterclockwise around the boundary of the region R, we also move counterclockwise around the boundary of G, as shown in Figure 14.62. Knowing the region of integration G in the uv-plane, we can now write equivalent iterated integrals: 

$$
\int_ {1} ^ {2} \int_ {1 / y} ^ {y} \sqrt {\frac {y}{x}} e ^ {\sqrt {x y}} d x d y = \int_ {1} ^ {2} \int_ {1} ^ {2 / u} 2 u e ^ {u} d v d u.
$$

Note the order of integration. 

We now evaluate the transformed integral on the right-hand side: 

$$
\begin{array}{l} \int_ {1} ^ {2} \int_ {1} ^ {2 / u} 2 u e ^ {u} d v d u = 2 \int_ {1} ^ {2} \left[ v u e ^ {u} \right] _ {v = 1} ^ {v = 2 / u} d u \\ \qquad = 2 \int_ {1} ^ {2} (2 e ^ {u} - u e ^ {u}) d u \\ \qquad = 2 \int_ {1} ^ {2} (2 - u) e ^ {u} d u \\ \qquad = 2 \left[ (2 - u) e ^ {u} + e ^ {u} \right] _ {u = 1} ^ {u = 2} \\ \qquad = 2 (e ^ {2} - (e + e)) = 2 e (e - 2). \end{array}
$$

Integrate by parts. 

### Determinants

$2 \times 2$ and $3 \times 3$ determinants are evaluated as follows: 

$$
\begin{array}{c} \left| \begin{array}{c c} a & b \\ c & d \end{array} \right| = a d - b c \\ \left| \begin{array}{c c c} a _ {1} & a _ {2} & a _ {3} \\ b _ {1} & b _ {2} & b _ {3} \\ c _ {1} & c _ {2} & c _ {3} \end{array} \right| = a _ {1} \left| \begin{array}{c c} b _ {2} & b _ {3} \\ c _ {2} & c _ {3} \end{array} \right| \\ - a _ {2} \left| \begin{array}{c c} b _ {1} & b _ {3} \\ c _ {1} & c _ {3} \end{array} \right| + a _ {3} \left| \begin{array}{c c} b _ {1} & b _ {2} \\ c _ {1} & c _ {2} \end{array} \right| \end{array}
$$

### Substitutions in Triple Integrals

The cylindrical and spherical coordinate substitutions in Section 14.7 are special cases of a substitution method that pictures changes of variables in triple integrals as transformations of solid regions. The method is like the method for double integrals given by Equation (2) except that now we work in three dimensions instead of two. 

Suppose that a solid region $G$ in uvw-space is transformed one-to-one into the solid region $D$ in xyz-space by differentiable equations of the form 

$$
x = g (u, v, w), \quad y = h (u, v, w), \quad z = k (u, v, w),
$$

as suggested in Figure 14.63. Then any function $F(x, y, z)$ defined on $D$ can be thought of as a function 

$$
F (g (u, v, w), h (u, v, w), k (u, v, w)) = H (u, v, w)
$$

defined on G. If g, h, and k have continuous first partial derivatives, then the integral of $F(x, y, z)$ over D is related to the integral of $H(u, v, w)$ over G by the equation 

$$
\iiint_ {D} F (x, y, z) d x d y d z = \iiint_ {G} H (u, v, w) | J (u, v, w) | d u d v d w.\tag{7}
$$

![教材插图](/books/thomas-calculus/assets/807fcef71bd202a8319a19da91e9ea4bcb286bca0582a40838eb009bf766a32c.jpg)



FIGURE 14.63 The equations $x = g(u, v, w)$ , $y = h(u, v, w)$ , and $z = k(u, v, w)$ allow us to change an integral over a region D in Cartesian xyz-space into an integral over a region G in Cartesian uvw-space using Equation (7).


The factor $J(u, v, w)$ , whose absolute value appears in this equation, is the Jacobian determinant 

$$
J (u, v, w) = \left| \begin{array}{c c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} & \frac {\partial x}{\partial w} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} & \frac {\partial y}{\partial w} \\ \frac {\partial z}{\partial u} & \frac {\partial z}{\partial v} & \frac {\partial z}{\partial w} \end{array} \right| = \frac {\partial (x , y , z)}{\partial (u , v , w)}.
$$

This determinant measures how much the volume near a point in G is being expanded or contracted by the transformation from $(u,v,w)$ to $(x,y,z)$ coordinates. As in the two-dimensional case, the derivation of the change-of-variable formula in Equation (7) is omitted. 

For cylindrical coordinates, $r, \theta$ , and z take the place of u, v, and w. The transformation from Cartesian $r\theta z$ -space to Cartesian xyz-space is given by the equations 

$$
x = r \cos \theta , \quad y = r \sin \theta , \quad z = z
$$

![教材插图](/books/thomas-calculus/assets/f29e37e912782620c55dad6abb17d40c604535a0aadb29a412c51988bf94eb9f.jpg)


FIGURE 14.64 The equations $x = r \cos \theta$ , $y = r \sin \theta$ , and z = z transform the rectangular box G into a cylindrical wedge D. 

(Figure 14.64). The Jacobian of the transformation is 

$$
J (r, \theta , z) = \left| \begin{array}{c c c} \frac {\partial x}{\partial r} & \frac {\partial x}{\partial \theta} & \frac {\partial x}{\partial z} \\ \frac {\partial y}{\partial r} & \frac {\partial y}{\partial \theta} & \frac {\partial y}{\partial z} \\ \frac {\partial z}{\partial r} & \frac {\partial z}{\partial \theta} & \frac {\partial z}{\partial z} \end{array} \right| = \left| \begin{array}{c c c} \cos \theta & - r \sin \theta & 0 \\ \sin \theta & r \cos \theta & 0 \\ 0 & 0 & 1 \end{array} \right| = r \cos^ {2} \theta + r \sin^ {2} \theta = r.
$$

The corresponding version of Equation (7) is 

$$
\iiint_ {D} F (x, y, z) d x d y d z = \iiint_ {G} H (r, \theta , z) | r | d r d \theta d z.
$$

We can drop the absolute value signs because $r \geq 0$ . 

For spherical coordinates, $\rho$ , $\phi$ , and $\theta$ take the place of u, v, and w. The transformation from Cartesian $\rho\phi\theta$ -space to Cartesian xyz-space is given by 

$$
x = \rho \sin \phi \cos \theta , \quad y = \rho \sin \phi \sin \theta , \quad z = \rho \cos \phi
$$

(Figure 14.65). The Jacobian of the transformation (see Exercise 23) is 

$$
J (\rho , \phi , \theta) = \left| \begin{array}{c c c} \frac {\partial x}{\partial \rho} & \frac {\partial x}{\partial \phi} & \frac {\partial x}{\partial \theta} \\ \frac {\partial y}{\partial \rho} & \frac {\partial y}{\partial \phi} & \frac {\partial y}{\partial \theta} \\ \frac {\partial z}{\partial \rho} & \frac {\partial z}{\partial \phi} & \frac {\partial z}{\partial \theta} \end{array} \right| = \rho^ {2} \sin \phi .
$$

The corresponding version of Equation (7) is 

$$
\iiint_ {D} F (x, y, z) d x d y d z = \iiint_ {G} H (\rho , \phi , \theta) | \rho^ {2} \sin \phi | d \rho d \phi d \theta .
$$

![教材插图](/books/thomas-calculus/assets/79db7c15d04ce924beaf5c936c474b1e1787459c7e9b0abfe1b63918f86801a0.jpg)



FIGURE 14.65 The equations $x = \rho \sin \phi \cos \theta$ , $y = \rho \sin \phi \sin \theta$ , and $z = \rho \cos \phi$ transform the rectangular box G into the spherical wedge D.


We can drop the absolute value signs because $\sin\phi$ is never negative for $0 \leq \phi \leq \pi$ . Note that this is the same result we obtained in Section 14.7. 

Here is an example of another substitution. Although we could evaluate the integral in this example directly, we have chosen it to illustrate the substitution method in a simple (and fairly intuitive) setting. 

![教材插图](/books/thomas-calculus/assets/420a99272e1aa39a2154ee5f76514574d14528523fc80318098240eacc30ae5b.jpg)


![教材插图](/books/thomas-calculus/assets/b99e19cce89863843a9aebe3966295ed9462fe1c89f2498d5289b32fb7f32cf9.jpg)


FIGURE 14.66 The equations $x = u + v, y = 2v$ , and $z = 3w$ transform $G$ into $D$ . Reversing the transformation by the equations $u = (2x - y)/2, v = y/2$ , and $w = z/3$ transforms $D$ into $G$ (Example 5). 

**EXAMPLE 5** Evaluate

$$
\int_ {0} ^ {3} \int_ {0} ^ {4} \int_ {x = y / 2} ^ {x = (y / 2) + 1} \left(\frac {2 x - y}{2} + \frac {z}{3}\right) d x d y d z
$$

by applying the transformation 

$$
u = (2 x - y) / 2, \quad v = y / 2, \quad w = z / 3\tag{8}
$$

and integrating over an appropriate region in uvw-space. 

**Solution** We sketch the solid region D of integration in xyz-space and identify its boundaries (Figure 14.66). In this case, the bounding surfaces are planes. 

To apply Equation (7), we need to find the corresponding uvw-region G and the Jacobian of the transformation. To find them, we first solve Equations (8) for x, y, and z in terms of u, v, and w. Routine algebra gives 

$$
x = u + v, \quad y = 2 v, \quad z = 3 w.\tag{9}
$$

We then find the boundaries of G by substituting these expressions into the equations for the boundaries of D. 

<table><tr><td>xyz-equations for the boundary of D</td><td>Corresponding uvw-equations for the boundary of G</td><td>Simplified uvw-equations</td></tr><tr><td>x = y/2</td><td>u + v = 2v/2 = v</td><td>u = 0</td></tr><tr><td>x = (y/2) + 1</td><td>u + v = (2v/2) + 1 = v + 1</td><td>u = 1</td></tr><tr><td>y = 0</td><td>2v = 0</td><td>v = 0</td></tr><tr><td>y = 4</td><td>2v = 4</td><td>v = 2</td></tr><tr><td>z = 0</td><td>3w = 0</td><td>w = 0</td></tr><tr><td>z = 3</td><td>3w = 3</td><td>w = 1</td></tr></table>

The Jacobian of the transformation, again from Equations (9), is 

$$
J (u, v, w) = \left| \begin{array}{c c c} \frac {\partial x}{\partial u} & \frac {\partial x}{\partial v} & \frac {\partial x}{\partial w} \\ \frac {\partial y}{\partial u} & \frac {\partial y}{\partial v} & \frac {\partial y}{\partial w} \\ \frac {\partial z}{\partial u} & \frac {\partial z}{\partial v} & \frac {\partial z}{\partial w} \end{array} \right| = \left| \begin{array}{c c c} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{array} \right| = 6.
$$

We now have everything we need to apply Equation (7): 

$$
\begin{array}{l} \int_ {0} ^ {3} \int_ {0} ^ {4} \int_ {x = y / 2} ^ {x = (y / 2) + 1} \left(\frac {2 x - y}{2} + \frac {z}{3}\right) d x d y d z \\ = \int_ {0} ^ {1} \int_ {0} ^ {2} \int_ {0} ^ {1} (u + w) | J (u, v, w) | d u d v d w \\ = \int_ {0} ^ {1} \int_ {0} ^ {2} \int_ {0} ^ {1} (u + w) (6) d u d v d w = 6 \int_ {0} ^ {1} \int_ {0} ^ {2} \left[ \frac {u ^ {2}}{2} + u w \right] _ {u = 0} ^ {u = 1} d v d w \\ = 6 \int_ {0} ^ {1} \int_ {0} ^ {2} \left(\frac {1}{2} + w\right) d v d w = 6 \int_ {0} ^ {1} \left[ \frac {v}{2} + v w \right] _ {v = 0} ^ {v = 2} d w = 6 \int_ {0} ^ {1} (1 + 2 w) d w \\ = 6 \left[ w + w ^ {2} \right] _ {0} ^ {1} = 6 (2) = 1 2. \end{array}
$$

Jacobians and Transformed Regions in the Plane 

1. a. Solve the system 

$$
u = x - y, \quad v = 2 x + y
$$

for x and y in terms of u and v. Then find the value of the Jacobian $\partial(x, y)/\partial(u, v)$ . 

b. Find the image under the transformation $u = x - y$ , $v = 2x + y$ of the triangular region with vertices $(0,0)$ , $(1,1)$ , and $(1,-2)$ in the $xy$ -plane. Sketch the transformed region in the $uv$ -plane. 

2. a. Solve the system 

$$
u = x + 2 y, \quad v = x - y
$$

for x and y in terms of u and v. Then find the value of the Jacobian $\partial(x, y)/\partial(u, v)$ . 

b. Find the image under the transformation $u = x + 2y$ , v = x - y of the triangular region in the xy-plane bounded by the lines y = 0, y = x, and $x + 2y = 2$ . Sketch the transformed region in the uv-plane. 

3. a. Solve the system 

$$
u = 3 x + 2 y, \quad v = x + 4 y
$$

for x and y in terms of u and v. Then find the value of the Jacobian $\partial(x, y)/\partial(u, v)$ . 

b. Find the image under the transformation $u = 3x + 2y$ , $v = x + 4y$ of the triangular region in the xy-plane bounded by the x-axis, the y-axis, and the line $x + y = 1$ . Sketch the transformed region in the uv-plane. 

4. a. Solve the system 

$$
u = 2 x - 3 y, \quad v = - x + y
$$

for x and y in terms of u and v. Then find the value of the Jacobian $\partial(x,y)/\partial(u,v)$ . 

b. Find the image under the transformation $u = 2x - 3y$ , $v = -x + y$ of the parallelogram $R$ in the $xy$ -plane with boundaries $x = -3$ , $x = 0$ , $y = x$ , and $y = x + 1$ . Sketch the transformed region in the $uv$ -plane. 

Substitutions in Double Integrals 

5. Evaluate the integral 

$$
\int_ {0} ^ {4} \int_ {x = y / 2} ^ {x = (y / 2) + 1} \frac {2 x - y}{2} d x d y
$$

from Example 1 directly by integration with respect to x and y to confirm that its value is 2. 

6. Use the transformation in Exercise 1 to evaluate the integral 

$$
\iint_ {R} \left(2 x ^ {2} - x y - y ^ {2}\right) d x d y
$$

for the region $R$ in the first quadrant bounded by the lines $y = -2x + 4$ , $y = -2x + 7$ , $y = x - 2$ , and $y = x + 1$ . 

7. Use the transformation in Exercise 3 to evaluate the integral 

$$
\iint_ {R} \left(3 x ^ {2} + 1 4 x y + 8 y ^ {2}\right) d x d y
$$

for the region $R$ bounded by the lines $y = -(3/2)x + 1$ , $y = -(3/2)x + 3$ , $y = -(1/4)x$ , and $y = -(1/4)x + 1$ . 

8. Use the transformation and parallelogram R in Exercise 4 to evaluate the integral 

$$
\iint_ {R} 2 (x - y) d x d y.
$$

9. Let R be the region in the first quadrant of the xy-plane bounded by the hyperbolas xy = 1, xy = 9 and the lines y = x, y = 4x. Use the transformation x = u/v, y = uv with u > 0 and v > 0 to rewrite 

$$
\iint_ {R} \left(\sqrt {\frac {y}{x}} + \sqrt {x y}\right) d x d y
$$

as an integral over an appropriate region G in the uv-plane. Then evaluate the uv-integral over G. 

10. a. Find the Jacobian of the transformation $x = u$ , $y = uv$ and sketch the region $G: 1 \leq u \leq 2$ , $1 \leq uv \leq 2$ , in the $uv$ -plane. 

b. Then use Equation (2) to transform the integral 

$$
\int_ {1} ^ {2} \int_ {1} ^ {2} \frac {y}{x} d y d x
$$

into an integral over G, and evaluate both integrals. 

11. Polar moment of inertia of an elliptical plate A thin plate of constant density covers the region bounded by the ellipse $x^{2}/a^{2} + y^{2}/b^{2} = 1$ , a > 0, b > 0, in the xy-plane. Find the first moment of the plate about the origin. (Hint: Use the transformation $x = ar \cos \theta$ , $y = br \sin \theta$ .) 

12. The area of an ellipse The area $\pi ab$ of the ellipse $x^{2}/a^{2} + y^{2}/b^{2} = 1$ can be found by integrating the function $f(x, y) = 1$ over the region bounded by the ellipse in the xy-plane. Evaluating the integral directly requires a trigonometric substitution. An easier way to evaluate the integral is to use the transformation x = au, y = bv and evaluate the transformed integral over the disk $G: u^{2} + v^{2} \leq 1$ in the uv-plane. Find the area this way. 

13. Use the transformation in Exercise 2 to evaluate the integral 

$$
\int_ {0} ^ {2 / 3} \int_ {y} ^ {2 - 2 y} (x + 2 y) e ^ {(y - x)} d x d y
$$

by first writing it as an integral over a region G in the uv-plane. 

14. Use the transformation $x = u + (1/2)v$ , $y = v$ to evaluate the integral 

$$
\int_ {0} ^ {2} \int_ {y / 2} ^ {(y + 4) / 2} y ^ {3} (2 x - y) e ^ {(2 x - y) ^ {2}} d x d y
$$

by first writing it as an integral over a region G in the uv-plane. 

15. Use the transformation $x = u / v$ , $y = uv$ to evaluate the integral sum 

$$
\int_ {1} ^ {2} \int_ {1 / y} ^ {y} (x ^ {2} + y ^ {2}) d x d y + \int_ {2} ^ {4} \int_ {y / 4} ^ {4 / y} (x ^ {2} + y ^ {2}) d x d y.
$$

16. Use the transformation $x = u^{2} - v^{2}$ , y = 2uv to evaluate the integral 

$$
\int_ {0} ^ {1} \int_ {0} ^ {2 \sqrt {1 - x}} \sqrt {x ^ {2} + y ^ {2}} d y d x.
$$

(Hint: Show that the image of the triangular region G with vertices $(0,0)$ , $(1,0)$ , $(1,1)$ in the uv-plane is the region of integration R in the xy-plane defined by the limits of integration.) 

### Substitutions in Triple Integrals

17. Evaluate the integral in Example 5 by integrating with respect to x, y, and z. 

18. Volume of a solid ellipsoid Find the volume of the solid ellipsoid 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} \leq 1.
$$

(Hint: Let $x = au$ , $y = bv$ , and $z = cw$ . Then find the volume of an appropriate region in uvw-space.) 

19. Evaluate 

$$
\iiint_ {D} | x y z | d x d y d z
$$

over the solid ellipsoid D, 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} + \frac {z ^ {2}}{c ^ {2}} \leq 1.
$$

(Hint: Let $x = au$ , $y = bv$ , and $z = cw$ . Then integrate over an appropriate region in uvw-space.) 

20. Let D be the solid region in xyz-space defined by the inequalities 

$$
1 \leq x \leq 2, 0 \leq x y \leq 2, 0 \leq z \leq 1.
$$

Evaluate 

$$
\iiint_ {D} \left(x ^ {2} y + 3 x y z\right) d x d y d z
$$

by applying the transformation 

$$
u = x, v = x y, w = 3 z
$$

and integrating over an appropriate region G in uvw-space. 

### Theory and Examples

21. Find the Jacobian $\partial(x, y)/\partial(u, v)$ of the transformation 

a. $x = u \cos v,\quad y = u \sin v$ 

b. $x = u \sin v,\quad y = u \cos v.$ 

22. Find the Jacobian $\partial(x,y,z)/\partial(u,v,w)$ of the transformation 

a. $x = u \cos v,\quad y = u \sin v,\quad z = w$ 

$$
\mathbf {b}. x = 2 u - 1, y = 3 v - 4, z = (1 / 2) (w - 4).
$$

3. How are double integrals used to calculate areas and average values. Give examples. 

4. How can you change a double integral in rectangular coordinates into a double integral in polar coordinates? Why might it be worthwhile to do so? Give an example. 

5. Define the triple integral of a function $f(x, y, z)$ over a bounded solid region in space. 

6. How are triple integrals in rectangular coordinates evaluated? How are the limits of integration determined? Give an example. 

23. Evaluate the appropriate determinant to show that the Jacobian of the transformation from Cartesian $\rho\phi\theta$ -space to Cartesian xyz-space is $\rho^{2}\sin\phi$ . 

## CHAPTER 14 Questions to Guide Your Review

2. How are double integrals evaluated as iterated integrals? Does the order of integration matter? How are the limits of integration determined? Give examples. 

1. Define the double integral of a function of two variables over a bounded region in the coordinate plane. 

24. Substitutions in single integrals How can substitutions in single definite integrals be viewed as transformations of regions? What is the Jacobian in such a case? Illustrate with an example. 

25. Centroid of a solid semi-ellipsoid Assuming the result that the centroid of a solid hemisphere lies on the axis of symmetry three-eighths of the way from the base toward the top, show, by transforming the appropriate integrals, that the center of mass of a solid semi-ellipsoid $(x^{2} / a^{2}) + (y^{2} / b^{2}) + (z^{2} / c^{2})\leq 1$ , $z\geq 0$ , lies on the $z$ -axis three-eighths of the way from the base toward the top. (You can do this without evaluating any of the integrals.) 

26. Cylindrical shells In Section 6.2, we learned how to find the volume of a solid of revolution using the shell method. Specifically, if the region between the curve $y = f(x)$ and the $x$ -axis from $a$ to $b$ ( $0 < a < b$ ) is revolved about the $y$ -axis, the volume of the resulting solid is $\int_{a}^{b} 2\pi xf(x) dx$ . Prove that finding volumes by using triple integrals gives the same result. (Hint: Use cylindrical coordinates with the roles of $y$ and $z$ changed.) 

27. Inverse transform The equations $x = g(u, v)$ , $y = h(u, v)$ in Figure 14.57 transform the region G in the uv-plane into the region R in the xy-plane. Since the substitution transformation is one-to-one with continuous first partial derivatives, it has an inverse transformation, and there are equations $u = \alpha(x, y)$ , $v = \beta(x, y)$ with continuous first partial derivatives transforming R back into G. Moreover, the Jacobian determinants of the transformations are related reciprocally by 

$$
\frac {\partial (x , y)}{\partial (u , v)} = \left(\frac {\partial (u , v)}{\partial (x , y)}\right) ^ {- 1}.\tag{10}
$$

Equation (10) is proved in advanced calculus. Use it to find the area of the region R in the first quadrant of the xy-plane bounded by the lines y = 2x, 2y = x, and the curves xy = 2, 2xy = 1 for u = xy and v = y/x. 

28. (Continuation of Exercise 27.) For the region $R$ described in Exercise 27, evaluate the integral $\iint_{R} y^{2} dA$ . 

7. How are double and triple integrals in rectangular coordinates used to calculate volumes, average values, masses, moments, and centers of mass? Give examples. 

8. How are triple integrals defined in cylindrical and spherical coordinates? Why might one prefer working in one of these coordinate systems to working in rectangular coordinates? 

9. How are triple integrals in cylindrical and spherical coordinates evaluated? How are the limits of integration found? Give examples. 

10. How are substitutions in double integrals pictured as transformations of regions in the plane? Give a sample calculation. 

11. How are substitutions in triple integrals pictured as transformations of solid regions? Give a sample calculation. 

## CHAPTER 14 Practice Exercises

### Evaluating Double Iterated Integrals

In Exercises 1–4, sketch the region of integration and evaluate the double integral.
1. $\int_{1}^{10}\int_{0}^{1/y}ye^{xy}dx dy$

2. $\int_{0}^{1}\int_{0}^{x^{3}}e^{y/x}dy dx$

3. $\int_{0}^{3/2}\int_{-\sqrt{9-4t^{2}}}^{\sqrt{9-4t^{2}}}t ds dt$

4. $\int_{0}^{1}\int_{\sqrt{y}}^{2-\sqrt{y}}xy dx dy$

In Exercises 5–8, sketch the region of integration and write an equivalent integral with the order of integration reversed. Then evaluate both integrals.
5. $\int_{0}^{4}\int_{-\sqrt{4-y}}^{(y-4)/2}dx dy$

6. $\int_{0}^{1}\int_{x^{2}}^{x}\sqrt{x}dy dx$

7. $\int_{0}^{3/2}\int_{-\sqrt{9-4y^{2}}}^{\sqrt{9-4y^{2}}}y dx dy$

8. $\int_{0}^{2}\int_{0}^{4-x^{2}}2x dy dx$

Evaluate the integrals in Exercises 9–12.

9. $\int_{0}^{1}\int_{2y}^{2}4\cos(x^{2})dx dy$

10. $\int_{0}^{2}\int_{y/2}^{1}e^{x^{2}}dx dy$

11. $\int_{0}^{8}\int_{\sqrt[3]{x}}^{2}\frac{dy dx}{y^{4}+1}$

12. $\int_{0}^{1}\int_{\sqrt[3]{y}}^{1}\frac{2\pi\sin\pi x^{2}}{x^{2}}dx dy$

Areas and Volumes Using Double Integrals 

13. Area between line and parabola Find the area of the region enclosed by the line $y = 2x + 4$ and the parabola $y = 4 - x^2$ in the xy-plane. 

14. Area bounded by lines and parabola Find the area of the “triangular” region in the xy-plane that is bounded on the right by the parabola $y = x^{2}$ , on the left by the line $x + y = 2$ , and above by the line y = 4. 

15. Volume of the region under a paraboloid Find the volume under the paraboloid $z = x^2 + y^2$ above the triangle enclosed by the lines $y = x$ , $x = 0$ , and $x + y = 2$ in the xy-plane. 

16. Volume of the region under a parabolic cylinder Find the volume under the parabolic cylinder $z = x^{2}$ above the region enclosed by the parabola $y = 6 - x^{2}$ and the line y = x in the xy-plane. 

Average Values 

Find the average value of $f(x, y) = xy$ over the regions in Exercises 17 and 18. 

17. The square bounded by the lines $x = 1, y = 1$ in the first quadrant 

18. The quarter circle $x^{2} + y^{2} \leq 1$ in the first quadrant 

Polar Coordinates 

Evaluate the integrals in Exercises 19 and 20 by changing to polar coordinates. 

19. $\int_{-1}^{1}\int_{-\sqrt{1 - x^2}}^{\sqrt{1 - x^2}}\frac{2dydx}{(1 + x^2 + y^2)^2}$ 

20. $\int_{-1}^{1}\int_{-\sqrt{1 - y^2}}^{\sqrt{1 - y^2}}\ln (x^2 +y^2 +1)dx dy$ 

21. Integrating over a lemniscate Integrate the function $f(x, y) = 1 / (1 + x^2 + y^2)^2$ over the region enclosed by one loop of the lemniscate $(x^2 + y^2)^2 - (x^2 - y^2) = 0$ . 

22. Integrate $f(x, y) = 1 / (1 + x^2 + y^2)^2$ over 

a. Triangular region The triangle with vertices $(0,0),(1,0)$ , and $(1,\sqrt{3})$ . 

b. First quadrant The first quadrant of the xy-plane. 

Evaluating Triple Iterated Integrals
Evaluate the integrals in Exercises 23–26.
23. $\int_{0}^{\pi}\int_{0}^{\pi}\int_{0}^{\pi}\cos(x+y+z)dx dy dz$

24. $\int_{\ln6}^{\ln7}\int_{0}^{\ln2}\int_{\ln4}^{\ln5}e^{(x+y+z)}dz dy dx$

25. $\int_{0}^{1}\int_{0}^{x^{2}}\int_{0}^{x+y}(2x-y-z)dz dy dx$

26. $\int_{1}^{e}\int_{1}^{x}\int_{0}^{z}\frac{2y}{z^{3}}dy dz dx$

Volumes and Average Values Using Triple Integrals 

27. Volume Find the volume of the wedge-shaped solid region enclosed on the side by the cylinder $x = -\cos y$ , $-\pi / 2 \leq y \leq \pi / 2$ , on the top by the plane $z = -2x$ , and below by the $xy$ -plane. 

![教材插图](/books/thomas-calculus/assets/dc8e7bac2ae63c798921bdbe6e7e7fc8cc897c36bb7646ee7f5407e02d97acc3.jpg)


28. Volume Find the volume of the solid that is bounded above by the cylinder $z = 4 - x^2$ , on the sides by the cylinder $x^2 + y^2 = 4$ , and below by the xy-plane. 

![教材插图](/books/thomas-calculus/assets/496af58dc12701684497d5ad27e8c32928d5523b8c29f086f347644ebb1a2b76.jpg)


29. Average value Find the average value of $f(x,y,z)=30xz\sqrt{x^{2}+y}$ over the rectangular solid in the first octant bounded by the coordinate planes and the planes x=1, y=3, z=1. 

30. Average value Find the average value of $\rho$ over the ball $\rho \leq a$ (spherical coordinates). 

Cylindrical and Spherical Coordinates 

31. Cylindrical to rectangular coordinates Convert 

$$
\int_ {0} ^ {2 \pi} \int_ {0} ^ {\sqrt {2}} \int_ {r} ^ {\sqrt {4 - r ^ {2}}} 3 r d z d r d \theta , \quad r \geq 0
$$

to (a) rectangular coordinates with the order of integration dz dx dy and (b) spherical coordinates. Then (c) evaluate one of the integrals. 

32. Rectangular to cylindrical coordinates (a) Convert to cylindrical coordinates. Then (b) evaluate the new integral. 

$$
\int_ {0} ^ {1} \int_ {- \sqrt {1 - x ^ {2}}} ^ {\sqrt {1 - x ^ {2}}} \int_ {- (x ^ {2} + y ^ {2})} ^ {(x ^ {2} + y ^ {2})} 2 1 x y ^ {2} d z d y d x
$$

33. Rectangular to spherical coordinates (a) Convert to spherical coordinates. Then (b) evaluate the new integral. 

$$
\int_ {- 1} ^ {1} \int_ {- \sqrt {1 - x ^ {2}}} ^ {\sqrt {1 - x ^ {2}}} \int_ {\sqrt {x ^ {2} + y ^ {2}}} ^ {1} d z d y d x
$$

34. Rectangular, cylindrical, and spherical coordinates Write an iterated triple integral for the integral of $f(x, y, z) = 6 + 4y$ over the region in the first octant bounded by the cone $z = \sqrt{x^{2} + y^{2}}$ , the cylinder $x^{2} + y^{2} = 1$ , and the coordinate planes in (a) rectangular coordinates, (b) cylindrical coordinates, and (c) spherical coordinates. Then (d) find the integral of f by evaluating one of the triple integrals. 

35. Cylindrical to rectangular coordinates Set up an integral in rectangular coordinates equivalent to the integral 

$$
\int_ {0} ^ {\pi / 2} \int_ {1} ^ {\sqrt {3}} \int_ {1} ^ {\sqrt {4 - r ^ {2}}} r ^ {3} (\sin \theta \cos \theta) z ^ {2} d z d r d \theta .
$$

Arrange the order of integration to be z first, then y, then x. 

36. Rectangular to cylindrical coordinates The volume of a solid is 

$$
\int_ {0} ^ {2} \int_ {0} ^ {\sqrt {2 x - x ^ {2}}} \int_ {- \sqrt {4 - x ^ {2} - y ^ {2}}} ^ {\sqrt {4 - x ^ {2} - y ^ {2}}} d z d y d x.
$$

a. Describe the solid by giving equations for the surfaces that form its boundary. 

b. Convert the integral to cylindrical coordinates, but do not evaluate the integral. 

37. Spherical versus cylindrical coordinates Triple integrals involving spherical shapes do not always require spherical coordinates for convenient evaluation. Some calculations may be accomplished more easily with cylindrical coordinates. As a case in point, find the volume of the solid region bounded above by the sphere $x^{2} + y^{2} + z^{2} = 8$ and below by the plane z = 2 by using (a) cylindrical coordinates and (b) spherical coordinates. 

### Masses and Moments

38. Finding $I_{z}$ in spherical coordinates Find the moment of inertia about the z-axis of a solid of constant density $\delta = 1$ that is bounded above by the sphere $\rho = 2$ and below by the cone $\phi = \pi/3$ (spherical coordinates). 

39. Moment of inertia of a “thick” sphere Find the moment of inertia of a solid of constant density $\delta$ bounded by two concentric spheres of radii a and $b(a < b)$ about a diameter. 

40. Moment of inertia of an apple Find the moment of inertia about the z-axis of a solid of density $\delta = 1$ enclosed by the spherical coordinate surface $\rho = 1 - \cos \phi$ . The solid is the red curve rotated about the z-axis in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/cf003b48c65f89db21cc9d0335607e24dbc28437fa72e16e6fa76101d6e67068.jpg)


41. Centroid Find the centroid of the “triangular” region bounded by the lines x = 2, y = 2 and the hyperbola xy = 2 in the xy-plane. 

42. Centroid Find the centroid of the region between the parabola $x + y^{2} - 2y = 0$ and the line $x + 2y = 0$ in the xy-plane. 

43. Polar moment Find the polar moment of inertia about the origin of a thin triangular plate of constant density $\delta = 3$ bounded by the y-axis and the lines y = 2x and y = 4 in the xy-plane. 

44. Polar moment Find the polar moment of inertia about the center of a thin rectangular sheet of constant density $\delta = 1$ bounded by the lines 

a. $x = \pm2,\quad y = \pm1$ in the xy-plane 

b. $x = \pm a,\quad y = \pm b$ in the xy-plane. 

(Hint: Find $I_x$ . Then use the formula for $I_x$ to find $I_y$ , and add the two to find $I_0$ .) 

45. Inertial moment Find the moment of inertia about the x-axis of a thin plate of constant density $\delta$ covering the triangle with vertices $(0,0)$ , $(3,0)$ , and $(3,2)$ in the xy-plane. 

46. Plate with variable density Find the center of mass and the moments of inertia about the coordinate axes of a thin plate bounded by the line y = x and the parabola $y = x^{2}$ in the xy-plane if the density is $\delta(x, y) = x + 1$ . 

47. Plate with variable density Find the mass and first moments about the coordinate axes of a thin square plate bounded by the lines $x = \pm 1$ , $y = \pm 1$ in the $xy$ -plane if the density is $\delta(x, y) = x^2 + y^2 + 1/3$ . 

48. Triangles with same inertial moment Find the moment of inertia about the x-axis of a thin triangular plate of constant density $\delta$ whose base lies along the interval $[0, b]$ on the x-axis and whose vertex lies on the line y = h above the x-axis. As you will see, it does not matter where on the line this vertex lies. All such triangles have the same moment of inertia about the x-axis. 

49. Centroid Find the centroid of the region in the polar coordinate plane defined by the inequalities $0 \leq r \leq 3$ , $-\pi/3 \leq \theta \leq \pi/3$ . 

50. Centroid Find the centroid of the region in the first quadrant bounded by the rays $\theta = 0$ and $\theta = \pi/2$ and the circles r = 1 and r = 3. 

51. a. Centroid Find the centroid of the region in the polar coordinate plane that lies inside the cardioid $r = 1 + \cos \theta$ and outside the circle r = 1. 

b. Sketch the region and show the centroid in your sketch. 

52. a. Centroid Find the centroid of the plane region defined by the polar coordinate inequalities $0 \leq r \leq a, -\alpha \leq \theta \leq \alpha$ ( $0 < \alpha \leq \pi$ ). How does the centroid move as $\alpha \to \pi^{-}$ ? 

b. Sketch the region for $\alpha = 5\pi /6$ and show the centroid in your sketch. 

### Substitutions

53. Show that if u = x - y and v = y, then for any continuous f, 

$$
\int_ {0} ^ {\infty} \int_ {0} ^ {x} e ^ {- s x} f (x - y, y) d y d x = \int_ {0} ^ {\infty} \int_ {0} ^ {\infty} e ^ {- s (u + v)} f (u, v) d u d v.
$$

54. What relationship must hold between the constants $a, b$ , and $c$ to make 

$$
\int_ {- \infty} ^ {\infty} \int_ {- \infty} ^ {\infty} e ^ {- (a x ^ {2} + 2 b x y + c y ^ {2})} d x d y = 1?
$$

(Hint: Let $s = \alpha x + \beta y$ and $t = \gamma x + \delta y$ , where $(\alpha \delta - \beta \gamma)^2 = ac - b^2$ . Then $ax^2 + 2bxy + cy^2 = s^2 + t^2$ .) 

## CHAPTER 14 Additional and Advanced Exercises

### Volumes

1. Sand pile: double and triple integrals The base of a sand pile covers the region in the xy-plane that is bounded by the parabola $x^{2} + y = 6$ and the line y = x. The height of the sand above the point $(x, y)$ is $x^{2}$ . Express the volume of sand as (a) a double integral and (b) a triple integral. Then (c) find the volume. 

2. Water in a hemispherical bowl A hemispherical bowl of radius 5 cm is filled with water to within 3 cm of the top. Find the volume of water in the bowl. 

3. Solid cylindrical region between two planes Find the volume of the portion of the solid cylinder $x^{2} + y^{2} \leq 1$ that lies between the planes z = 0 and $x + y + z = 2$ . 

4. Sphere and paraboloid Find the volume of the solid region bounded above by the sphere $x^{2} + y^{2} + z^{2} = 2$ and below by the paraboloid $z = x^{2} + y^{2}$ . 

5. Two paraboloids Find the volume of the solid region bounded above by the paraboloid $z = 3 - x^{2} - y^{2}$ and below by the paraboloid $z = 2x^{2} + 2y^{2}$ . 

6. Spherical coordinates Find the volume of the solid region enclosed by the spherical coordinate surface $\rho = 2 \sin \phi$ (see accompanying figure). 

![教材插图](/books/thomas-calculus/assets/06f5e142dd9fb8b1c173f3d82b232f0ec3328943d9f45c000a1a92f32da6d3b0.jpg)


7. Hole in solid ball A circular cylindrical hole is bored through a ball, the axis of the hole being a diameter of the sphere. The volume of the remaining solid is 

$$
V = 2 \int_ {0} ^ {2 \pi} \int_ {0} ^ {\sqrt {3}} \int_ {1} ^ {\sqrt {4 - z ^ {2}}} r d r d z d \theta .
$$

a. Find the radius of the hole and the radius of the sphere. 

b. Evaluate the integral. 

8. Ball and cylinder Find the volume of material cut from the ball $r^{2} + z^{2} \leq 9$ by the cylinder $r = 3 \sin \theta$ . 

9. Two paraboloids Find the volume of the solid region enclosed by the surfaces $z = x^{2} + y^{2}$ and $z = (x^{2} + y^{2} + 1)/2$ . 

10. Cylinder and surface z = xy Find the volume of the solid region in the first octant that lies between the cylinders r = 1 and r = 2 and is bounded below by the xy-plane and above by the surface z = xy. 

Changing the Order of Integration 

11. Evaluate the integral 

$$
\int_ {0} ^ {\infty} \frac {e ^ {- a x} - e ^ {- b x}}{x} d x.
$$

(Hint: Use the relation 

$$
\frac {e ^ {- a x} - e ^ {- b x}}{x} = \int_ {a} ^ {b} e ^ {- x y} d y
$$

to form a double integral, and evaluate the integral by changing the order of integration.) 

12. a. Polar coordinates Show, by changing to polar coordinates, that 

$$
\int_ {0} ^ {a \sin \beta} \int_ {y \cot \beta} ^ {\sqrt {a ^ {2} - y ^ {2}}} \ln (x ^ {2} + y ^ {2}) d x d y = a ^ {2} \beta \left(\ln a - \frac {1}{2}\right),
$$

where $a > 0$ and $0 < \beta < \pi / 2$ . 

b. Rewrite the Cartesian integral with the order of integration reversed. 

13. Reducing a double to a single integral By changing the order of integration, show that the following double integral can be reduced to a single integral: 

$$
\int_ {0} ^ {x} \int_ {0} ^ {u} e ^ {m (x - t)} f (t) d t d u = \int_ {0} ^ {x} (x - t) e ^ {m (x - t)} f (t) d t.
$$

Similarly, it can be shown that 

$$
\int_ {0} ^ {x} \int_ {0} ^ {v} \int_ {0} ^ {u} e ^ {m (x - t)} f (t) d t d u d v = \int_ {0} ^ {x} \frac {(x - t) ^ {2}}{2} e ^ {m (x - t)} f (t) d t.
$$

14. Transforming a double integral to obtain constant limits Sometimes a multiple integral with variable limits can be changed into one with constant limits. By changing the order of integration, show that 

$$
\begin{array}{l} \int_ {0} ^ {1} f (x) \left(\int_ {0} ^ {x} g (x - y) f (y) d y\right) d x \\ \qquad = \int_ {0} ^ {1} f (y) \left(\int_ {y} ^ {1} g (x - y) f (x) d x\right) d y \\ \qquad = \frac {1}{2} \int_ {0} ^ {1} \int_ {0} ^ {1} g (| x - y |) f (x) f (y) d x d y. \end{array}
$$

Masses and Moments 

15. Minimizing polar inertia A thin plate of constant density is to occupy the triangular region in the first quadrant of the xy-plane having vertices $(0,0)$ , $(a,0)$ , and $(a,1/a)$ . What value of a will minimize the plate's polar moment of inertia about the origin? 

16. Polar inertia of triangular plate Find the polar moment of inertia about the origin of a thin triangular plate of constant density $\delta = 3$ bounded by the y-axis and the lines y = 2x and y = 4 in the xy-plane. 

17. Mass and polar inertia of a counterweight The counterweight of a flywheel of constant density 1 has the form of the smaller segment cut from a circle of radius $a$ by a chord at a distance $b$ from the center $(b < a)$ . Find the mass of the counterweight and its polar moment of inertia about the center of the wheel. 

18. Centroid of a boomerang Find the centroid of the boomerang-shaped region between the parabolas $y^{2} = -4(x - 1)$ and $y^{2} = -2(x - 2)$ in the xy-plane. 

### Theory and Examples

19. Evaluate 

$$
\int_ {0} ^ {a} \int_ {0} ^ {b} e ^ {\max (b ^ {2} x ^ {2}, a ^ {2} y ^ {2})} d y d x,
$$

where $a$ and $b$ are positive numbers and 

$$
\max (b ^ {2} x ^ {2}, a ^ {2} y ^ {2}) = \left\{ \begin{array}{l l} b ^ {2} x ^ {2} & \text { if } b ^ {2} x ^ {2} \geq a ^ {2} y ^ {2} \\ a ^ {2} y ^ {2} & \text { if } b ^ {2} x ^ {2} <   a ^ {2} y ^ {2}. \end{array} \right.
$$

20. Show that 

$$
\iint \frac {\partial^ {2} F (x , y)}{\partial x \partial y} d x d y
$$

over the rectangle $x_0 \leq x \leq x_1, y_0 \leq y \leq y_1$ is 

$$
F (x _ {1}, y _ {1}) - F (x _ {0}, y _ {1}) - F (x _ {1}, y _ {0}) + F (x _ {0}, y _ {0}).
$$

21. Suppose that $f(x,y)$ can be written as a product $f(x,y)=F(x)G(y)$ of a function of x and a function of y. Then the integral of f over the rectangle $R:a\leq x\leq b, c\leq y\leq d$ can be evaluated as a product as well, by the formula 

$$
\iint_ {R} f (x, y) d A = \left(\int_ {a} ^ {b} F (x) d x\right) \left(\int_ {c} ^ {d} G (y) d y\right).\tag{1}
$$

The argument is that 

$$
\iint_ {R} f (x, y) d A = \int_ {c} ^ {d} \left(\int_ {a} ^ {b} F (x) G (y) d x\right) d y\tag{i}
$$

$$
= \int_ {c} ^ {d} \left(G (y) \int_ {a} ^ {b} F (x) d x\right) d y\tag{ii}
$$

$$
= \int_ {c} ^ {d} \left(\int_ {a} ^ {b} F (x) d x\right) G (y) d y\tag{iii}
$$

$$
= \left(\int_ {a} ^ {b} F (x) d x\right) \int_ {c} ^ {d} G (y) d y.\tag{iv}
$$

a. Give reasons for Steps (i) through (iv). 

When it applies, Equation (1) can be a time-saver. Use it to evaluate the following integrals. 

$$
\mathbf {b}. \int_ {0} ^ {\ln 2} \int_ {0} ^ {\pi / 2} e ^ {x} \cos y d y d x \quad \mathbf {c}. \int_ {1} ^ {2} \int_ {- 1} ^ {1} \frac {x}{y ^ {2}} d x d y
$$

22. Let $D_{u}f$ denote the derivative of $f(x,y)=(x^{2}+y^{2})/2$ in the direction of the unit vector $u=u_{1}i+u_{2}j$ . 

a. Finding average value Find the average value of $D_{\mathbf{u}}f$ over the triangular region cut from the first quadrant by the line $x + y = 1$ . 

b. Average value and centroid Show in general that the average value of $D_{u}f$ over a region in the xy-plane is the value of $D_{u}f$ at the centroid of the region. 

23. The value of $\Gamma(1/2)$ The gamma function, 

$$
\Gamma (x) = \int_ {0} ^ {\infty} t ^ {x - 1} e ^ {- t} d t,
$$

extends the factorial function from the nonnegative integers to other real values. Of particular interest in the theory of differential equations is the number 

$$
\Gamma \left(\frac {1}{2}\right) = \int_ {0} ^ {\infty} t ^ {(1 / 2) - 1} e ^ {- t} d t = \int_ {0} ^ {\infty} \frac {e ^ {- t}}{\sqrt {t}} d t.\tag{2}
$$

a. If you have not yet done Exercise 41 in Section 14.4, do it now to show that 

$$
I = \int_ {0} ^ {\infty} e ^ {- y ^ {2}} d y = \frac {\sqrt {\pi}}{2}.
$$

b. Substitute $y = \sqrt{t}$ in Equation (2) to show that $\Gamma(1/2) = 2I = \sqrt{\pi}$ . 

24. Total electrical charge over circular plate The electrical charge distribution on a circular plate of radius R meters is $\sigma(r,\theta)=kr(1-\sin\theta)$ coulomb/m $^{2}$ (k a constant). Integrate $\sigma$ over the plate to find the total charge Q. 

25. A parabolic rain gauge A bowl is in the shape of the graph of $z = x^{2} + y^{2}$ from z = 0 to z = 30 cm. You plan to calibrate the bowl to make it into a rain gauge. What height in the bowl would correspond to 3 cm of rain? 9 cm of rain? 

26. Water in a satellite dish A parabolic satellite dish is 2 m wide and 1/2 m deep. Its axis of symmetry is tilted 30 degrees from the vertical. 

a. Set up, but do not evaluate, a triple integral in rectangular coordinates that gives the amount of water the satellite dish will hold. (Hint: Put your coordinate system so that the satellite dish is in “standard position” and the plane of the water level is slanted.) (Caution: The limits of integration are not “nice.”) 

b. What would be the smallest tilt of the satellite dish so that it holds no water? 

27. An infinite half-cylinder Let D be the interior of the infinite right circular half-cylinder of radius 1 with its single-end face suspended 1 unit above the origin and its axis the ray from $(0,0,1)$ to $\infty$ . Use cylindrical coordinates to evaluate 

$$
\iiint_ {D} z (r ^ {2} + z ^ {2}) ^ {- 5 / 2} d V.
$$

28. Hypervolume We have learned that $\int_{a}^{b}1dx$ is the length of the interval $[a,b]$ on the number line (one-dimensional space), $\iint_{R}1dA$ is the area of region R in the xy-plane (two-dimensional space), and $\iiint_{D}1dV$ is the volume of the region D in three-dimensional space (xyz-space). We could continue: If Q is a region in 4-space (xyzw-space), then $\iiint_{Q}1dV$ is the “hyper-volume” of Q. Use your generalizing abilities and a Cartesian coordinate system of 4-space to find the hypervolume inside the unit four-dimensional sphere $x^{2} + y^{2} + z^{2} + w^{2} = 1$ . 

## CHAPTER 14 Technology Application Projects

### Mathematica/Maple Projects

Projects can be found within MyLab Math. 

- Take Your Chances: Try the Monte Carlo Technique for Numerical Integration in Three Dimensions Use the Monte Carlo technique to integrate numerically in three dimensions. 

- Means and Moments and Exploring New Plotting Techniques, Part II
Use the method of moments in a form that makes use of geometric symmetry as well as multiple integration. 
