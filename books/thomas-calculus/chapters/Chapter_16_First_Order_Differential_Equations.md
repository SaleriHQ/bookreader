---
title: "Chapter 16: First-Order Differential Equations"
order: 16
---

# Chapter 16: First-Order Differential Equations

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

Chapter 17 is available online. 

To access this chapter, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/36d2bdcb1b1a05338f7c8917c637782676cddcad24cf6a35a01d91cf067dd7c9.jpg)


OVERVIEW Many real-world problems, when formulated mathematically, lead to differential equations. We encountered a number of these equations in previous chapters when studying phenomena such as the motion of an object along a straight line, the decay of a radioactive material, the growth of a population, and the cooling of a heated object placed within a medium of lower temperature. 

Section 4.8 introduced diferential equations of the form $d y / d x = f ( x )$ , where f is given and $y$ is an unknown function of x. We learned that when f is continuous over some interval, the general solution $y ( x )$ is found directly by integration, $y = \int f ( x )$ dx  . In Section 7.2 we investigated diferential equations of the form $d y / d x \ : = \ : f ( x , y )$ , where $f$ is a function of both the independent variable x and the dependent variable y. There we learned how to find the general solution for the special case when the diferential equation is separable. In this chapter we further extend our study to include other commonly occurring first-order diferential equations. These diferential equations involve only first derivatives of the unknown function y x( ), and they model phenomena varying from simple electrical circuits to the concentration of a chemical in a container. Diferential equations involving second derivatives are examined in Chapter 17.



## 16.1 Solutions, Slope Fields, and Euler’s Method

We begin this section by defining general differential equations involving first derivatives. We then look at slope fields, which give a geometric picture of the solutions to such equations. Many differential equations cannot be solved by obtaining an explicit formula for the solution. However, we can often find numerical approximations to solutions. We present one such method here, called Euler’s method, which is the basis for many other numerical methods as well. 

### General First-Order Differential Equations and Solutions

A first-order differential equation is an equation 

$$
\frac {d y}{d x} = f (x, y)\tag{1}
$$

in which $f ( x , y )$ is a function of two variables defined on a region in the xy-plane. The equation is of first order because it involves only the first derivative $d y / d x$ and not higher-order derivatives. In a typical situation y represents an unknown function of $x ,$ and $f ( x , y )$ is a known function. Some examples of first-order differential equations are $y ^ { \prime } = x + y , y ^ { \prime } = y / x$ , and $y ^ { \prime } = 3 x y$ . In all cases we should think of y as an unknown function of x whose derivative is given by $f ( x , y )$ . The equations 

$$
y ^ {\prime} = f (x, y) \quad \text { and } \quad \frac {d}{d x} y = f (x, y)
$$

are equivalent to Equation (1), and all three forms will be used interchangeably in the text. 

A solution of Equation (1) is a differentiable function $y = y ( x )$ defined on an interval I of x-values (possibly an infinite interval) such that 

$$
\frac {d}{d x} y (x) = f (x, y (x))
$$

on that interval. That is, when y x( ) and its derivative $y ^ { \prime } ( x )$ are substituted into Equation (1), the resulting equation is true for all x over the interval I. 

**EXAMPLE 1** Show that every member of the family of functions

$$
y = \frac {C}{x} + 2
$$

is a solution of the first-order differential equation 

$$
{\frac {d y}{d x}} = {\frac {1}{x}} (2 - y)
$$

on the interval $( 0 , \infty )$ , where C is any constant. 

**Solution** Differentiating $y = C / x + 2$ gives 

$$
\frac {d y}{d x} = C \frac {d}{d x} \left(\frac {1}{x}\right) + 0 = - \frac {C}{x ^ {2}}.
$$

We need to show that the differential equation is satisfied when we substitute into it the expressions $( C / x ) + 2$ for y, and $- C / x ^ { 2 }$ for $d y / d x$ . That is, we need to verify that for all $x \in ( 0 , \infty )$ 

$$
- \frac {C}{x ^ {2}} = \frac {1}{x} \left[ 2 - \left(\frac {C}{x} + 2\right) \right].
$$

This last equation follows immediately by expanding the expression on the right-hand side: 

$$
\frac {1}{x} \left[ 2 - \left(\frac {C}{x} + 2\right) \right] = \frac {1}{x} \left(- \frac {C}{x}\right) = - \frac {C}{x ^ {2}}.
$$

Therefore, for every value of C, the function $y = C / x + 2$ is a solution of the differential equation. ■ 

The differential equation in Example 1 has a whole family of solutions, one for each value of C. A natural question to consider is whether this family contains all the solutions to the differential equation, or whether there are others that can somehow arise. The general solution to a first-order differential equation is the name given to an expression that contains all possible solutions. The general solution always contains an arbitrary constant, but a solution may contain an arbitrary constant without being the general solution. Establishing when a solution is the general solution is left to a more extensive development of the theory of differential equations. 

As with antiderivatives, we often need a particular rather than the general solution to a first-order differential equation $y ^ { \prime } = f ( x , y )$ . A common way to pick out one of the collection of possible solutions is to specify the value of y at a point $x \ = \ x _ { 0 } .$ The particular solution satisfying the initial condition $y ( x _ { 0 } ) = y _ { 0 }$ is the solution $y = y ( x )$ whose value is $y _ { 0 }$ when $x \ = \ x _ { 0 } .$ Thus the graph of the particular solution passes through the point $\left( x _ { 0 } , y _ { 0 } \right)$ in the xy-plane. A first-order initial value problem is a differential equation $y ^ { \prime } = f ( x , y )$ whose solution must satisfy an initial condition $y ( x _ { 0 } ) = y _ { 0 }$ 

**EXAMPLE 2** Show that the function

$$
y = (x + 1) - \frac {1}{3} e ^ {x}
$$

is a solution to the first-order initial value problem 

$$
{\frac {d y}{d x}} = y - x, \quad y (0) = {\frac {2}{3}}.
$$

**Solution** The equation 

$$
{\frac {d y}{d x}} = y - x
$$


FIGURE 16.1 Graph of the solution to the initial value problem in Example 2.


![教材插图](/books/thomas-calculus/assets/d0262cd297dd89be2da7f317798cf5103ecac93f57c8c310f1bce638ab0dd2e2.jpg)


is a first-order differential equation with $f ( x , y ) = y - x .$ 

On the left side of the equation: 

$$
\frac {d y}{d x} = \frac {d}{d x} \left(x + 1 - \frac {1}{3} e ^ {x}\right) = 1 - \frac {1}{3} e ^ {x}.
$$

On the right side of the equation: 

$$
y - x = (x + 1) - \frac {1}{3} e ^ {x} - x = 1 - \frac {1}{3} e ^ {x}.
$$

The function satisfies the initial condition because 

$$
y (0) = \left[ (x + 1) - \frac {1}{3} e ^ {x} \right] _ {x = 0} = 1 - \frac {1}{3} = \frac {2}{3}.
$$

The graph of the function is shown in Figure 16.1. 

### Slope Fields: Viewing **Solution** Curves

Each time we specify an initial condition $y ( x _ { 0 } ) = y _ { 0 }$ for the solution of a differential equation $y ^ { \prime } = f ( x , y )$ , the solution curve (graph of the solution) is required to pass through the point $\left( x _ { 0 } , y _ { 0 } \right)$ and to have slope $f \left( x _ { 0 } , y _ { 0 } \right)$ there. We can picture these slopes graphically by drawing short line segments of slope $f ( x , y )$ at selected points $( x , y )$ in the region of the xy-plane that constitutes the domain of f. Each segment has the same slope as the solution curve through $( x , y )$ and so is tangent to the curve there. The resulting picture is called a slope field (or direction field) and gives a visualization of the general shape of the solution curves. Figure 16.2a shows a slope field, with a particular solution sketched into it in Figure 16.2b. We see how these line segments indicate the direction the solution curve takes at each point it passes through. 

![教材插图](/books/thomas-calculus/assets/1db88dd54e0fa4d43d28d825525b4475cb5c116808a86251124bb74ed999c293.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/cce594f622538bb0863216384779d4a4fad864550f12caed97954b14a7bd56d7.jpg)



(b)



FIGURE 16.2 (a) Slope field for ${ \frac { d y } { d x } } = y - x .$ (b) The particular solution curve through the point $\left( 0 , { \frac { 2 } { 3 } } \right) ( { \mathrm { E x a m p l e } } 2 )$



(a)


![教材插图](/books/thomas-calculus/assets/1dd01317587f42ed11d02f6a6466f73f3f3651e3ad6b0e41a1c849c3a9532757.jpg)


![教材插图](/books/thomas-calculus/assets/49de3482b07d84b0de66e9a86c37e3834e63c633571f7c50c102569977dfe069.jpg)



FIGURE 16.3 (a) The slope field for $y ^ { \prime } = 2 y - x$ is shown at four points. (b) The slope field at several hundred additional points in the plane.


![教材插图](/books/thomas-calculus/assets/88a5e22e18af0d2095c3b3aebbdf5b495343ce1e8bb53df233e0688af8db25ec.jpg)



FIGURE 16.5 The linearization L x( ) of $y = y ( x ) \operatorname { a t } x = x _ { 0 }$


**EXAMPLE 3** For the differential equation

$$
y ^ {\prime} = 2 y - x,
$$

draw line segments representing the slope field at the points (1, 2 , ) (1, 1 , ) (2, 2 , and ) (2, 1 .) 

**Solution** $\operatorname { A t } ( 1 , 2 )$ the slope is $2 ( 2 ) - ( 1 ) = 3$ . Similarly, the slope at ( 2, 2 is 2, at ) ( 2, 1) is 0, and at (1, 1 is 1. We indicate this on the graph by drawing short line segments of the) given slope through each point, as in Figure 16.3. ■ 

Figure 16.4 shows three slope fields, and we see how the solution curves behave by following the tangent line segments in these fields. Slope fields are useful because they display the overall behavior of the family of solution curves for a given differential equation. For instance, the slope field in Figure 16.4b reveals that every solution y x( ) to the differential equation specified in the figure satisfies $\operatorname* { l i m } _ { x \to \pm \infty } y ( x ) = 0$ . We will see that knowing the overall behavior of the solution curves is often critical to understanding and predicting outcomes in a real-world system modeled by a differential equation. 

Constructing a slope field with pencil and paper can be quite tedious. Our examples were generated by computer software. 

![教材插图](/books/thomas-calculus/assets/0cfddcb24ca42593bd641e98e9109da01411303802496bf9738b4ac1f7fc9683.jpg)



FIGURE 16.4 Slope fields (top row) and selected solution curves (bottom row). In computer renditions, slope segments are sometimes portrayed with arrows, as they are here, but they should be considered as just tangent line segments.


### Euler’s Method

If we do not require or cannot find an exact solution that gives an explicit formula for an initial value problem $y ^ { \prime } = f ( x , y ) , y ( x _ { 0 } ) = y _ { 0 } $ ,  we can often use a computer to generate a table of approximate numerical values of y for values of x in an appropriate interval. Such a table is called a numerical solution of the problem, and the process by which we generate the table is called a numerical method. 

Given a differential equation $d y / d x = f ( x , y )$ and an initial condition $y ( x _ { 0 } ) = y _ { 0 }$ we can approximate the solution $y = y ( x )$ by its linearization 

$$
L (x) = y \left(x _ {0}\right) + y ^ {\prime} \left(x _ {0}\right) \left(x - x _ {0}\right) \text {or} L (x) = y _ {0} + f \left(x _ {0}, y _ {0}\right) \left(x - x _ {0}\right).
$$

The function L x( ) gives a good approximation to the solution $y ( x )$ in a short interval about $x _ { 0 } ( \mathrm { F i g u r e } \ 1 6 . 5 )$ . The basis of Euler’s method is to patch together a string of linearizations to approximate the curve over a longer stretch. Here is how the method works. 

We know the point $\left( x _ { 0 } , y _ { 0 } \right)$ lies on the solution curve. Suppose that we specify a new value for the independent variable to be $x _ { 1 } = x _ { 0 } + d x .$ . (Recall that $d x = \Delta x$ in the definition of differentials.) If the increment dx is small, then 

$$
y _ {1} = L (x _ {1}) = y _ {0} + f \left(x _ {0}, y _ {0}\right) d x
$$

![教材插图](/books/thomas-calculus/assets/2616b1d2a5f55b947d4b7079eb54afc8175581059b8de5ce1cd81f5128a08b28.jpg)



FIGURE 16.6 The first Euler step approximates $y ( x _ { 1 } )$ with $y _ { 1 } = L ( x _ { 1 } )$


![教材插图](/books/thomas-calculus/assets/dadaa5a52bbce421395e015c24d828b59833ebd1cc1cc34b347a76da5612dc3f.jpg)



FIGURE 16.7 Three steps in the Euler approximation to the solution of the initial value problem $y ^ { \prime } = f ( x , y ) , y ( x _ { 0 } ) = y _ { 0 } .$ As we take more steps, the errors involved usually accumulate, but not in the exaggerated way shown here.


is a good approximation to the exact solution value $y = y ( x _ { 1 } )$ .  So from the point $\left( x _ { 0 } , y _ { 0 } \right)$ which lies exactly on the solution curve, we have obtained the point $\left( x _ { 1 } , y _ { 1 } \right)$ , which lies very close to the point $\left( x _ { 1 } , y ( x _ { 1 } ) \right)$ on the solution curve (Figure 16.6). 

Using the point $\left( x _ { 1 } , y _ { 1 } \right)$ and the slope $f ( x _ { 1 } , y _ { 1 } )$ of the solution curve through $\left( x _ { 1 } , y _ { 1 } \right)$ we take a second step. Setting $x _ { 2 } = x _ { 1 } + d x$ , we use the linearization of the solution curve through $\left( x _ { 1 } , y _ { 1 } \right)$ to calculate 

$$
y _ {2} = y _ {1} + f (x _ {1}, y _ {1}) d x.
$$

This gives the next approximation $\left( { { x } _ { 2 } } , { { y } _ { 2 } } \right)$ to values along the solution curve $y = y ( x )$ (Figure 16.7). Continuing in this fashion, we take a third step from the point $\left( { { x } _ { 2 } } , { { y } _ { 2 } } \right)$ with slope $f ( x _ { 2 } , y _ { 2 } )$ to obtain the third approximation 

$$
y _ {3} = y _ {2} + f (x _ {2}, y _ {2}) d x,
$$

and so on. We are building an approximation to a solution by following the direction of the slope field of the differential equation. 

The steps in Figure 16.7 are drawn large to illustrate the construction process, so the approximation looks crude. In practice, dx would be chosen small enough to make the red curve hug the blue one and give a better approximation. 

**EXAMPLE 4** Find the first three approximations $y _ { 1 } , y _ { 2 } , y _ { 3 }$ using Euler’s method for the initial value problem 

$$
y ^ {\prime} = 1 + y, \quad y (0) = 1,
$$

starting at $x _ { 0 } = 0 \mathrm { w i t h } d x = 0 . 1$ 

**Solution** We already have the starting values $x _ { 0 } = 0$ and $y _ { 0 } = 1$ . Next we determine the values of x at which the Euler approximations will take place: $x _ { 1 } = x _ { 0 } + d x = 0 . 1$ $x _ { 2 } = x _ { 0 } + 2 d x = 0 . 2 \ /$ and $x _ { 3 } = x _ { 0 } + 3 d x = 0 . 3$ . Then we find 

$$
\begin{array}{r l r} \text {   First:   } & y _ {1} = y _ {0} + f (x _ {0}, y _ {0}) d x \\ & = y _ {0} + (1 + y _ {0}) d x & f (x, y) = 1 + y \\ & = 1 + (1 + 1) (0. 1) = 1. 2 & y _ {0} = 1, d x = 0. 1 \end{array}
$$

Second: 

$$
\begin{array}{r l} y _ {2} & = y _ {1} + f (x _ {1}, y _ {1}) d x \\ & = y _ {1} + (1 + y _ {1}) d x \\ & = 1. 2 + (1 + 1. 2) (0. 1) = 1. 4 2 \end{array} \quad y _ {1} = 1. 2, d x = 0. 1
$$

$$
\begin{array}{r l} \text { Third: } & y _ {3} = y _ {2} + f (x _ {2}, y _ {2}) d x \\ & = y _ {2} + (1 + y _ {2}) d x \\ & = 1. 4 2 + (1 + 1. 4 2) (0. 1) = 1. 6 6 2 \quad y _ {2} = 1. 4 2, d x = 0. 1 \end{array}
$$

The step-by-step process used in Example 4 can be continued with more points. Using equally spaced values for the independent variable in the table for the numerical solution, and generating n of them, set 

$$
\begin{array}{c} x _ {1} = x _ {0} + d x \\ x _ {2} = x _ {1} + d x \\ \vdots \\ x _ {n} = x _ {n - 1} + d x. \end{array}
$$

Then calculate the approximations to the solution, 

$$
\begin{array}{c} y _ {1} = y _ {0} + f (x _ {0}, y _ {0}) d x \\ y _ {2} = y _ {1} + f (x _ {1}, y _ {1}) d x \\ \vdots \\ y _ {n} = y _ {n - 1} + f (x _ {n - 1}, y _ {n - 1}) d x. \end{array}
$$

**HISTORICAL BIOGRAPHY**

### Leonhard Euler

(1707–1783) 

Born in Basel, Switzerland, Leonhard Euler was the dominant mathematical figure of his century and the most prolific mathematician who ever lived. He was also an astronomer, physicist, engineer, and chemist. He was the first scientist to give the function concept prominence in his work, thereby setting a strong foundation for the development of calculus and other areas of mathematics. 

To know more, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/a375ba5a301bf90376c2d39054461f43e5114a19efe0f86c6deffd25de847741.jpg)



FIGURE 16.8 The graph of FIGURE 16.8 The graph of



$y = 2 e ^ { x } - 1$ 1 superimposed on a scatterplot of the Euler approximations shown in Table 16.1 (Example 5).


The number of steps n can be as large as we like, but errors involving the representation of numbers in software can accumulate if n is too large. 

Euler’s method is easy to implement on a computer or calculator. A typical software program takes as input $x _ { 0 }$ and $y _ { 0 } .$ , the number of steps n, and the step size dx. It then calculates the approximate solution values $y _ { 1 } , y _ { 2 } , . . . , y _ { n }$ in iterative fashion, as just described. 

Solving the separable equation in Example 4, we find that the exact solution to the initial value problem is $y = 2 e ^ { x } - 1$ . We use this information in Example 5. 

**EXAMPLE 5** Use Euler’s method to solve

$$
y ^ {\prime} = 1 + y, \quad y (0) = 1,
$$

on the interval $0 \leq x \leq 1$ , starting at $x _ { 0 } = 0$ and taking (a) $d x = 0 . 1$ and $( \mathbf { b } ) d x \ = \ 0 . 0 5$ Compare the approximations with the values of the exact solution $y = 2 e ^ { x } - 1$ 

**Solution**

(a) We used a computer to generate the approximate values in Table 16.1. The “error” column is obtained by subtracting the unrounded Euler values from the unrounded values found using the exact solution. All entries are then rounded to four decimal places. 


TABLE 16.1 Euler solution of $\begin{array} { r } { y ^ { \prime } = 1 + y , y ( 0 ) = 1 , } \end{array}$ step size dx = 0.1


<table><tr><td>x</td><td>y (Euler)</td><td>y (exact)</td><td>Error</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0.1</td><td>1.2</td><td>1.2103</td><td>0.0103</td></tr><tr><td>0.2</td><td>1.42</td><td>1.4428</td><td>0.0228</td></tr><tr><td>0.3</td><td>1.662</td><td>1.6997</td><td>0.0377</td></tr><tr><td>0.4</td><td>1.9282</td><td>1.9836</td><td>0.0554</td></tr><tr><td>0.5</td><td>2.2210</td><td>2.2974</td><td>0.0764</td></tr><tr><td>0.6</td><td>2.5431</td><td>2.6442</td><td>0.1011</td></tr><tr><td>0.7</td><td>2.8974</td><td>3.0275</td><td>0.1301</td></tr><tr><td>0.8</td><td>3.2872</td><td>3.4511</td><td>0.1639</td></tr><tr><td>0.9</td><td>3.7159</td><td>3.9192</td><td>0.2033</td></tr><tr><td>1.0</td><td>4.1875</td><td>4.4366</td><td>0.2491</td></tr></table>

By the time we reach x = 1 (after 10 steps), the error is about 5.6% of the exact solution. A plot of the exact solution curve with the scatterplot of Euler solution points from Table 16.1 is shown in Figure 16.8. 

(b) One way to try to reduce the error is to decrease the step size. Table 16.2 shows the results and their comparisons with the exact solutions when we decrease the step size to 0.05, doubling the number of steps to 20. As in Table 16.1, all computations are performed before rounding. This time when we reach x = 1, the relative error is only about 2.9%. 1 

It might be tempting to reduce the step size even further in Example 5 to obtain greater accuracy. Each additional calculation, however, not only requires additional computer time but, more importantly, adds to the buildup of round-off errors due to the approximate representations of numbers inside the computer. 


1. y x y ′ = +


The analysis of error and the investigation of methods to reduce it when making numerical calculations are important. An area of mathematics called numerical analysis studies advanced numerical methods that are more accurate than Euler’s method. 


TABLE 16.2 Euler solution of $\begin{array} { r } { \mathbf { \boldsymbol { y } } ^ { \prime } = \mathbf { 1 } + \boldsymbol { y } , \mathbf { \boldsymbol { y } } ( \mathbf { 0 } ) = \mathbf { 1 } , } \end{array}$ step size dx = 0.05


<table><tr><td>x</td><td>y (Euler)</td><td>y (exact)</td><td>Error</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0.05</td><td>1.1</td><td>1.1025</td><td>0.0025</td></tr><tr><td>0.10</td><td>1.205</td><td>1.2103</td><td>0.0053</td></tr><tr><td>0.15</td><td>1.3153</td><td>1.3237</td><td>0.0084</td></tr><tr><td>0.20</td><td>1.4310</td><td>1.4428</td><td>0.0118</td></tr><tr><td>0.25</td><td>1.5526</td><td>1.5681</td><td>0.0155</td></tr><tr><td>0.30</td><td>1.6802</td><td>1.6997</td><td>0.0195</td></tr><tr><td>0.35</td><td>1.8142</td><td>1.8381</td><td>0.0239</td></tr><tr><td>0.40</td><td>1.9549</td><td>1.9836</td><td>0.0287</td></tr><tr><td>0.45</td><td>2.1027</td><td>2.1366</td><td>0.0340</td></tr><tr><td>0.50</td><td>2.2578</td><td>2.2974</td><td>0.0397</td></tr><tr><td>0.55</td><td>2.4207</td><td>2.4665</td><td>0.0458</td></tr><tr><td>0.60</td><td>2.5917</td><td>2.6442</td><td>0.0525</td></tr><tr><td>0.65</td><td>2.7713</td><td>2.8311</td><td>0.0598</td></tr><tr><td>0.70</td><td>2.9599</td><td>3.0275</td><td>0.0676</td></tr><tr><td>0.75</td><td>3.1579</td><td>3.2340</td><td>0.0761</td></tr><tr><td>0.80</td><td>3.3657</td><td>3.4511</td><td>0.0853</td></tr><tr><td>0.85</td><td>3.5840</td><td>3.6793</td><td>0.0953</td></tr><tr><td>0.90</td><td>3.8132</td><td>3.9192</td><td>0.1060</td></tr><tr><td>0.95</td><td>4.0539</td><td>4.1714</td><td>0.1175</td></tr><tr><td>1.00</td><td>4.3066</td><td>4.4366</td><td>0.1300</td></tr></table>

### EXERCISES 16.1

#### Slope Fields

In Exercises 1–4, match the differential equations with their slope fields, graphed here. 

![教材插图](/books/thomas-calculus/assets/c99c2f176bd3003f5e6a08f024648176683e233bed06ad37292fc8e09de76bea.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/0feddad8aa13af95ca2de94de7e6a1be0bd202a6d2595a221fb28eb6882e98e7.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/206750f2f7fcb0fee74ab1fad1a1e0dbd915273faaf6740f0a8e84fddadfacad.jpg)



(c)


$$
y ^ {\prime} = - \frac {x}{y}
$$

![教材插图](/books/thomas-calculus/assets/59dfab01ee4de66851c568e12f5de8c2bfd51fdf6526dc7c43a4c33c45561fb0.jpg)



(d)



2. y y ′ = + 1


4. $y ^ {\prime} = y ^ {2} - x ^ {2}$

In Exercises 5 and 6, copy the slope fields, and sketch in some of the solution curves. 

$$
y ^ {\prime} = (y + 2) (y - 2)
$$

![教材插图](/books/thomas-calculus/assets/89c2e82261673a9f5b6acb2c3de31a0bbff3206c2476c23b2fef323c645add6e.jpg)


6. $y ^ { \prime } = y ( y + 1 ) ( y - 1 )$ 

![教材插图](/books/thomas-calculus/assets/5d80815eee00a4dbd94fe3e7ee0394a97e1e2fa3fcbcea575b4701c660a7a994.jpg)


#### Integral Equations

In Exercises 7–12, write an equivalent first-order differential equation and initial condition for y. 

7. $y = - 1 + \int_ {1} ^ {x} (t - y (t)) d t \quad 8. y = \int_ {1} ^ {x} \frac {1}{t} d t$

9. $y = 2 - \int _ { 0 } ^ { x } ( 1 + y ( t ) ) \ d t$ t dtsin 

10. $y = 1 + \int _ { 0 } ^ { x } y ( t ) d t$

11. $y = x + 4 + \textstyle \int _ { - 2 } ^ { x } t e ^ { y ( t ) } d t $

12. $y = \ln x + \int _ { x } ^ { e } { \sqrt { t ^ { 2 } + { ( y ( t ) ) } ^ { 2 } } } d t$ 

In Exercises 13 and 14, consider the differential equation $y ^ { \prime } = f ( y )$ and the given graph of f. Make a rough sketch of a direction field for each differential equation. 

13. 


14.


![教材插图](/books/thomas-calculus/assets/d80f4bbdeab82a274c880621dfc9b0b288d7e142cc23275c7f2e201bb9d4d2a3.jpg)


#### Using Euler’s Method

In Exercises 15–20, use Euler’s method to calculate the first three approximations to the given initial value problem for the specified increment size. Calculate the exact solution and investigate the accuracy of your approximations. Round your results to four decimal places. 

15. $y ^ { \prime } = { \frac { 2 y } { x } } , y ( 1 ) = - 1 , d x = 0 . 5$ 

16. $y ^ { \prime } = x ( 1 - y ) , \quad y ( 1 ) = 0 , \quad d x = 0 . 2$ 

17. $y ^ { \prime } = 2 x y + 2 y , \quad y ( 0 ) = 3 , \quad d x = 0 . 2$ 

18. y y x y dx 1 2 , ( 1) 1, 0.5 2 ′ = + − = = ( ) 

19.T $y ^ { \prime } = 2 x e ^ { x ^ { 2 } } , \quad y ( 0 ) = 2 , \quad d x = 0 . 1$ 

20.T $y ^ { \prime } = y e ^ { x } , \quad y ( 0 ) = 2 , \quad d x = 0 . 5$ 

21. Use Euler’s method with dx = 0.2 to estimate y(1) if y y′ = and y(0) 1. = What is the exact value of y(1)? 

22. Use Euler’s method with dx = 0.2 to estimate y(2) if $y ^ { \prime } = y / x$ and y(1) 2.= What is the exact value of y(2)? 

23. Use Euler’s method with dx = 0.5 to estimate y(5) if $y ^ { \prime } = y ^ { 2 } { \Big / } { \sqrt { x } }$ and y(1) 1.= − What is the exact value of y(5)? 

24. Use Euler’s method with dx = 1 3 to estimate y(2) if y x y ′ = sin and y(0) 1.= What is the exact value of y(2)? 

25. Show that the solution of the initial value problem 

$$
y ^ {\prime} = x + y, \quad y (x _ {0}) = y _ {0}
$$

is 

$$
y = - 1 - x + \left(1 + x _ {0} + y _ {0}\right) e ^ {x - x _ {0}}.
$$

26. What integral equation is equivalent to the initial value problem $y ^ { \prime } = f ( x ) , y ( x _ { 0 } ) = y _ { 0 } ?$ 

#### COMPUTER EXPLORATIONS

In Exercises 27–32, obtain a slope field and add to it graphs of the solution curves passing through the given points. 

27. y y ′ = with a. (0, 1) b. ( 0, 2) c. ( 0, 1 − ) 

28. $y ^ { \prime } = 2 ( y - 4 )$ with a. (0, 1) b. (0, 4) c. (0, 5) 

29. $y ^ { \prime } = y ( x + y )$ with a. (0, 1) b. (0, 2 − ) c. (0, 1 4) d. (− −1, 1) 

30. y y 2 ′ = with a. (0, 1) b. ( 0, 2) c. ( 0, 1 − ) d. (0, 0) 

31. $\begin{array} { l } { { y ^ { \prime } = ( y - 1 ) ( x + 2 ) \mathrm { { w i t h } } } } \\ { { { \bf { a . } } ( 0 , - 1 ) \mathrm { { \qquad ~ } } { \bf { b . } } ( 0 , 1 ) } } \end{array}$ c. (0, 3) d. (1, 1 − ) 

32. $y ^ { \prime } = { \frac { x y } { x ^ { 2 } + 4 } }$ with a. (0, 2) b. ( 0, 6 − ) c. $\left( - 2 { \sqrt { 3 } } , - 4 \right)$ 

In Exercises 33 and 34, obtain a slope field, and graph the particular solution over the specified interval. Use your CAS DE solver to find the general solution of the differential equation. 

33. A logistic equation $y ^ { \prime } = y ( 2 - y ) , y ( 0 ) = 1 / 2 ; 0 \leq x \leq 4 ,$ $0 \leq y \leq 3$ 

34. $y ^ { \prime } = ( \sin x ) ( \sin y ) , y ( 0 ) = 2 ; - 6 \leq x \leq 6 , - 6 \leq y \leq 6$ 

Exercises 35 and 36 have no explicit solution in terms of elementary functions. Use a CAS to explore graphically each of the differential equations. 

$$
y ^ {\prime} = \cos (2 x - y), \quad y (0) = 2; \quad 0 \leq x \leq 5, \quad 0 \leq y \leq 5
$$

36. A Gompertz equation $y ^ { \prime } = y ( 1 / 2 - \ln y ) , ~ y ( 0 ) = 1 / 3 ;$ $0 \leq x \leq 4 , 0 \leq y \leq 3$ 

37. Use a CAS to find the solutions of $y ^ { \prime } + y = f ( x )$ , subject to the initial condition $y ( 0 ) = 0 , \operatorname { i f } f ( x )$ is 

a. 2x b. sin 2x c. 3e <sup>x</sup> <sup>2</sup> d. 2 cos 2 .e x<sup>−x</sup> <sup>2</sup> 

Graph all four solutions over the interval $- 2 \leq x \leq 6$ to compare the results. 

38. a. Use a CAS to plot the slope field of the differential equation 

$$
y ^ {\prime} = \frac {3 x ^ {2} + 4 x + 2}{2 (y - 1)}
$$

over the region $- 3 \leq x \leq 3 { \mathrm { ~ a n d } } - 3 \leq y \leq 3 .$ 

b. Separate the variables and use a CAS integrator to find the general solution in implicit form. 

c. Using a CAS implicit function grapher, plot solution curves for the arbitrary constant values $C = - 6 , - 4 , - 2 , 0 , 2 , 4 , 6 .$ 

d. Find and graph the solution that satisfies the initial condition y(0) 1. = − 

In Exercises 39–42, use Euler’s method with the specified step size to estimate the value of the solution at the given point $x ^ { * }$ . Find the value of the exact solution at $x ^ { * }$ 

39. $y ^ {\prime} = 2 x e ^ {x ^ {2}}, \quad y (0) = 2, \quad d x = 0. 1, \quad x ^ {*} = 1$

40. $y ^ {\prime} = 2 y ^ {2} (x - 1), \quad y (2) = - 1 / 2, \quad d x = 0. 1, \quad x ^ {*} = 3$

41. $y ^ { \prime } = \sqrt { x } \big / y , y > 0 , y ( 0 ) = 1 , d x = 0 . 1 , x ^ { * } = 1$ 

42. $y ^ { \prime } = 1 + y ^ { 2 } , y ( 0 ) = 0 , d x = 0 . 1 , x ^ { * } = 1$ 

Use a CAS to explore graphically each of the differential equations in Exercises 43–46. Perform the following steps to help with your explorations. 

a. Plot a slope field for the differential equation in the given xy-window. 

b. Find the general solution of the differential equation using your CAS DE solver. 

c. Graph the solutions for the values of the arbitrary constant $C \stackrel { - } { = } - 2 , - 1 , 0 , 1 , 2$ superimposed on your slope field plot. 

d. Find and graph the solution that satisfies the specified initial condition over the interval [ ] 0, . b 

e. Find the Euler numerical approximation to the solution of the initial value problem with 4 subintervals of the x-interval, and plot the Euler approximation superimposed on the graph produced in part (d). 

f. Repeat part (e) for 8, 16, and 32 subintervals. Plot these three Euler approximations superimposed on the graph from part (e). 

g. Find the error ( y y( ) exact Euler− ( )) at the specified point x = b for each of your four Euler approximations. Discuss the improvement in the percentage error. 

$$
\begin{array}{l} \text {43.} y ^ {\prime} = x + y, \quad y (0) = - 7 / 1 0; \quad - 4 \leq x \leq 4, \quad - 4 \leq y \leq 4; \\ b = 1 \end{array}
44. $$y ^ {\prime} = - x / y, y (0) = 2; - 3 \leq x \leq 3, - 3 \leq y \leq 3; b = 2$$
\begin{array}{l} \text {45.} y ^ {\prime} = y (2 - y), \quad y (0) = 1 / 2; \quad 0 \leq x \leq 4, \quad 0 \leq y \leq 3; \\ b = 3 \end{array}
$$

$$
\begin{array}{l} \text { 46. } y ^ {\prime} = (\sin x) (\sin y), y (0) = 2; - 6 \leq x \leq 6, - 6 \leq y \leq 6; \\ b = 3 \pi / 2 \end{array}
$$

## 16.2 First-Order Linear Equations

A first-order linear differential equation is one that can be written in the form 

$$
\frac {d y}{d x} + P (x) y = Q (x),\tag{1}
$$

where P and Q are continuous functions of x. Equation (1) is the linear equation’s standard form. Since the exponential growth decay equation $d y / d x \ : = \ : k y$ (Section 7.2) can be put in the standard form 

$$
{\frac {d y}{d x}} - k y = 0,
$$

we see it is a linear equation with $P ( x ) = - k { \mathrm { ~ a n d ~ } } Q ( x ) = 0 .$ . Equation (1) is linear (in y) because y and its derivative dy dx occur only to the first power, they are not multiplied together, nor do they appear as the argument of a function (such as sin $y , e ^ { y } , \mathrm { o r } \sqrt { d y / d x } )$ 

**EXAMPLE 1** Put the following equation in standard form: 

$$
x \frac {d y}{d x} = x ^ {2} + 3 y, \quad x > 0.
$$

**Solution** 

$$
\begin{array}{l l} x \frac {d y}{d x} = x ^ {2} + 3 y \\ \frac {d y}{d x} = x + \frac {3}{x} y & \text { Divide   by } x. \\ \frac {d y}{d x} - \frac {3}{x} y = x & \text { Standard   form   with } P (x) = - 3 / x \\ & \text { and } Q (x) = x \end{array}
$$

Notice that $P ( x )$ is $- 3 / x$ , not $+ 3 / x$ . The standard form is $y ^ { \prime } + P ( x ) y = Q ( x )$ , so the minus sign is part of the formula for $P ( x )$ ■ 

### Solving Linear Equations

We solve the equation 

$$
{\frac {d y}{d x}} + P (x) y = Q (x)
$$

by multiplying both sides by a positive function $v ( x )$ that transforms the left-hand side into the derivative of the product $v ( x ) \cdot y .$ We will show how to find υ in a moment, but first we want to show how, once found, it provides the solution we seek. 

Here is why multiplying by υ( ) x works: 

$$
\begin{array}{l l} \frac {d y}{d x} + P (x) y = Q (x) & \text { Original   equation   is } \\ & \text { in   standard   form. } \\ v (x) \frac {d y}{d x} + P (x) v (x) y = v (x) Q (x) & \text { Multiply   by   positive   } v (x). \\ \frac {d}{d x} (v (x) \cdot y) = v (x) Q (x) & v (x) \text {   is   chosen   to   make } \\ & v \frac {d y}{d x} + P v y = \frac {d}{d x} (v \cdot y). \\ v (x) \cdot y = \int v (x) Q (x) d x & \text { Integrate   with   respect   to   } x. \\ y = \frac {1}{v (x)} \int v (x) Q (x) d x & \text { Divide   by   } v (x). \end{array}\tag{2}
$$

Equation (2) expresses the solution of Equation (1) in terms of the functions $v ( x )$ and $Q ( x )$ . We call υ( )x an integrating factor for Equation (1) because its presence makes the equation integrable. 

Why doesn’t the formula for $P ( x )$ appear in the solution as well? It does, but indirectly, in the construction of the positive function $v ( x )$ . We have 

$$
\begin{array}{c c} \frac {d}{d x} (v y) = v \frac {d y}{d x} + P v y & \text { Condition   imposed   on } v \\ v \frac {d y}{d x} + y \frac {d v}{d x} = v \frac {d y}{d x} + P v y & \text { Derivative   Product   Rule } \\ y \frac {d v}{d x} = P v y. & \text { The   terms } v \frac {d y}{d x} \text { cancel }. \end{array}
$$

This last equation will hold if 

$$
\begin{array}{l} \frac {d v}{d x} = P v \\ \frac {d v}{v} = P d x \qquad \text { Variables   separated, } v > 0 \\ \int \frac {d v}{v} = \int P d x \qquad \text { Integrate   both   sides. } \end{array}
$$

$$
\begin{array}{l l} \ln v = \int P   d x & \text { Since } v > 0, \text { we   do   not   need   absolute } \\ & \text { value   signs   in } \ln v. \\ e ^ {\ln v} = e ^ {\int P   d x} & \text { Exponentiate   both   sides   to   solve   for } v. \\ v = e ^ {\int P   d x}. \end{array}\tag{3}
$$

Thus a formula for the general solution to Equation (1) is given by Equation (2), where υ( )x is given by Equation (3). However, rather than memorizing the formula, just remember how to find the integrating factor once you have the standard form so $P ( x )$ is correctly identified. Any antiderivative of P works for Equation (3). 

### Integrating Factors

To solve the linear equation $y ^ { \prime } + P ( x ) y = Q ( x )$ , multiply both sides by the integrating factor $v ( x ) \stackrel { \textstyle - } { = } e ^ { \int P ( x ) d x }$ and integrate both sides. 

When you integrate the product on the left-hand side in this procedure, you always obtain the product $\upsilon ( x ) y$ of the integrating factor and solution function y because of the way υ is defined. 

**EXAMPLE 2** Solve the equation

$$
x \frac {d y}{d x} = x ^ {2} + 3 y, \quad x > 0.
$$

**HISTORICAL BIOGRAPHY**

Adrien-Marie Legendre 

(1752–1833) 

Legendre, a French mathematician, taught at the École polytechnique and won a research prize from the Berlin Academy in 1782. He encountered and developed polynomials, today named for him, in his research on the gravitational attraction of ellipsoids. He devoted 40 years to this research to elliptic integrals. 

To know more, visit the companion Website. 

**Solution** First we put the equation in standard form (Example 1): 

$$
\frac {d y}{d x} - \frac {3}{x} y = x,
$$

so $P ( x ) = - 3 / x$ is identified. 

The integrating factor is 

$$
\begin{array}{l l} v (x) = e ^ {\int P (x) d x} = e ^ {\int (- 3 / x) d x} & \text {   Constant   of   integration   is   0,   } \\ = e ^ {- 3 \ln | x |} & \text {   so   } v \text {   is   as   simple   as   possible.   } \\ = e ^ {- 3 \ln x} & x > 0 \\ = e ^ {\ln x ^ {- 3}} = \frac {1}{x ^ {3}}. \end{array}
$$

Next we multiply both sides of the standard form by υ( )x and integrate: 

$$
\begin{array}{l} \frac {1}{x ^ {3}} \cdot \left(\frac {d y}{d x} - \frac {3}{x} y\right) = \frac {1}{x ^ {3}} \cdot x \\ \frac {1}{x ^ {3}} \frac {d y}{d x} - \frac {3}{x ^ {4}} y = \frac {1}{x ^ {2}} \\ \frac {d}{d x} \left(\frac {1}{x ^ {3}} y\right) = \frac {1}{x ^ {2}} \\ \frac {1}{x ^ {3}} y = \int \frac {1}{x ^ {2}} d x \\ \frac {1}{x ^ {3}} y = - \frac {1}{x} + C. \end{array} \quad \text { Left - hand   side   is } \frac {d}{d x} (v \cdot y).
$$

Solving this last equation for y gives the general solution: 

$$
y = x ^ {3} \left(- \frac {1}{x} + C\right) = - x ^ {2} + C x ^ {3}, \quad x > 0.
$$

**EXAMPLE 3** Find the particular solution of 

$$
3 x y ^ {\prime} - y = \ln x + 1, \quad x > 0,
$$

that satisfying $y ( 1 ) = - 2$ 

**Solution** With $x > 0$ , we write the equation in standard form: 

$$
y ^ {\prime} - \frac {1}{3 x} y = \frac {\ln x + 1}{3 x}.
$$

Then the integrating factor is given by 

$$
v = e ^ {\int - 1 / (3 x) d x} = e ^ {(- 1 / 3) \ln x} = x ^ {- 1 / 3}. \quad x > 0
$$

Thus 

$$
x ^ {- 1 / 3} y = \frac {1}{3} \int (\ln x + 1) x ^ {- 4 / 3} d x.
$$

Left-hand side is υy. 

Integration by parts of the right-hand side gives 

$$
x ^ {- 1 / 3} y = - x ^ {- 1 / 3} (\ln x + 1) + \int x ^ {- 4 / 3} d x + C.
$$

Therefore, 

$$
x ^ {- 1 / 3} y = - x ^ {- 1 / 3} (\ln x + 1) - 3 x ^ {- 1 / 3} + C
$$

or, solving for $y ,$ 

$$
y = - (\ln x + 4) + C x ^ {1 / 3}.
$$

When $x = 1$ and $y = - 2 ,$ , this last equation becomes 

$$
- 2 = - (0 + 4) + C,
$$

so 

$$
C = 2.
$$

Substitution into the equation for y gives the particular solution 

$$
y = 2 x ^ {1 / 3} - \ln x - 4.
$$

In solving the linear equation in Example 2, we integrated both sides of the equation after multiplying each side by the integrating factor. However, we can shorten the amount of work, as in Example 3, by remembering that the left-hand side always integrates into the product $v ( x ) \cdot y$ of the integrating factor times the solution function. From Equation (2) this means that 

$$
v (x) y = \int v (x) Q (x) d x.\tag{4}
$$

We need only integrate the product of the integrating factor $v ( x )$ with $Q ( x )$ on the righthand side of Equation (1) and then equate the result with $\upsilon ( x ) y$ to obtain the general solution. Nevertheless, to emphasize the role of υ( )x in the solution process, we sometimes follow the complete procedure as illustrated in Example 2. 

Observe that if the function $Q ( x )$ is identically zero in the standard form given by Equation (1), the linear equation is separable and can be solved by the method of Section 7.2: 

$$
\begin{array}{l l} \frac {d y}{d x} + P (x) y = Q (x) \\ \frac {d y}{d x} + P (x) y = 0 & Q (x) = 0 \\ \frac {d y}{y} = - P (x) d x. & \text { Separating   the   variables } \end{array}
$$

![教材插图](/books/thomas-calculus/assets/5c03321047e19dd053b395fa1740ac3d7a4faeba30de5c5e11771b0ce228140b.jpg)



FIGURE 16.9 The RL circuit in Example 4.


![教材插图](/books/thomas-calculus/assets/d10a0eb5720d9ad9070f7aa45163dc780bb2a77f81ebd981345b4ba72faeb9da.jpg)



FIGURE 16.10 The growth of the current in the RL circuit in Example 4. I is the current’s steady-state value. The number $t = L / R$ is the time constant of the circuit. The current gets to within 5% of its steady-state value in 3 time constants (Exercise 27).


### RL Circuits

The diagram in Figure 16.9 represents an electrical circuit whose total resistance is a constant R ohms and whose self-inductance, shown as a coil, is L henries, also a constant. There is a switch whose terminals at a and b can be closed to connect a constant electrical source of V volts. 

Ohm’s Law, $V \ : = \ : R I$ , has to be augmented for such a circuit. The correct equation accounting for both resistance and inductance is 

$$
L \frac {d i}{d t} + R i = V,\tag{5}
$$

where i is the current in amperes and t is the time in seconds. By solving this equation, we can predict how the current will flow after the switch is closed. 

**EXAMPLE 4** The switch in the RL circuit in Figure 16.9 is closed at time $t = 0$ . How will the current flow as a function of time? 

**Solution** Equation (5) is a first-order linear differential equation for i as a function of t. Its standard form is 

$$
\frac {d i}{d t} + \frac {R}{L} i = \frac {V}{L},\tag{6}
$$

and the corresponding solution, given that $i = 0$ when $t = 0$ , is 

$$
i = \frac {V}{R} - \frac {V}{R} e ^ {- (R / L) t}.\tag{7}
$$

(We leave the calculation of the solution to Exercise 28.) Since R and L are positive, $- ( R / L )$ is negative and $e ^ { - ( R / L ) t } \to 0 \mathrm { a s } t \to \infty$ . Thus, 

$$
\lim _ {t \rightarrow \infty} i = \lim _ {t \rightarrow \infty} \left(\frac {V}{R} - \frac {V}{R} e ^ {- (R / L) t}\right) = \frac {V}{R} - \frac {V}{R} \cdot 0 = \frac {V}{R}.
$$

At any given time, the current is less than $V / R ,$ but as time passes, the current approaches the steady-state value $V / R .$ . According to the equation 

$$
L \frac {d i}{d t} + R i = V,
$$

$I = V / R$ is the current that will flow in the circuit if either $L = 0$ (no inductance) or $d i / d t = 0$ (steady current, i = constant) (Figure 16.10). 

Equation (7) expresses the solution of Equation (6) as the sum of two terms: a steady-state solution $V / R$ and a transient solution $- ( V / \bar { R } ) e ^ { - ( R / L ) t }$ that tends to zero as $t \ \longrightarrow \ \infty .$ 

### EXERCISES 16.2

First-Order Linear Equations 

Solve the differential equations in Exercises 1–14. 

1. $x \frac { d y } { d x } + y = e ^ { x } , x > 0$ 

2. $e ^ { x } { \frac { d y } { d x } } + 2 e ^ { x } y = 1$ 

3. $x y ^ { \prime } + 3 y = { \frac { \sin x } { x ^ { 2 } } } , x > 0$ 

4. y x y x x tan cos , 2 2 2 ′ + = − < < ( ) π π 

5. $x \frac { d y } { d x } + 2 y = 1 - \frac { 1 } { x } , x > 0$ 

6. $( 1 + x ) \ y ^ { \prime } + \ y = { \sqrt { x } }$ 

7. $2 y ^ { \prime } = e ^ { x / 2 } + y$ 

8. $e ^ { 2 x } y ^ { \prime } + 2 e ^ { 2 x } y = 2 x $ 

9. $x y ^ { \prime } - y = 2 x \ln x$ 

10. $x \frac { d y } { d x } = \frac { \cos x } { x } - 2 y , x > 0$ 

11. $( t - 1 ) ^ { 3 } \frac { d s } { d t } + 4 ( t - 1 ) ^ { 2 } s = t + 1 , t > 1$ 

ds 1 12. t 1( )+ dt s t 2 3 1  ( )  + = + + t 1 <sup>2</sup> ( )+ t 1 > − 

13. <sup>dr</sup>sin θ cos tan , 0 2 r + = < < ( ) θ θ θ π dθ 

14. $\tan \theta \frac { d r } { d \theta } + r = \sin ^ { 2 } \theta , 0 < \theta < \pi / 2$ 

#### Solving Initial Value Problems

Solve the initial value problems in Exercises 15–20. 

15. $\frac { d y } { d t } + 2 y = 3 , y ( 0 ) = 1$ 

16. $t \frac { d y } { d t } + 2 y = t ^ { 3 } , t > 0 , y ( 2 ) = 1$ 

17. $\theta \frac { d y } { d \theta } + y = \sin \theta , \theta > 0 , y ( \pi / 2 ) = 1$ 

18. <sup>dy</sup>θ 2 sec tan , 0, 3 2y y3 − = > =θ θ θ θ π( ) dθ 

19. $( x + 1 ) \frac { d y } { d x } - 2 ( x ^ { 2 } + x ) y = \frac { e ^ { x ^ { 2 } } } { x + 1 } , x > - 1 , y ( 0 ) = 5$ 

20. ${ \frac { d y } { d x } } + x y = x , ~ y ( 0 ) = - 6$ 

21. Solve the exponential growth/decay initial value problem for y as a function of t by thinking of the differential equation as a firstorder linear equation with $P ( x ) = - k { \mathrm { ~ a n d ~ } } Q ( x ) = 0 ;$ 

$$
\frac {d y}{d t} = k y (k \text { constant }), y (0) = y _ {0}
$$

22. Solve the following initial value problem for u as a function of t: $\frac { d u } { d t } + \frac { k } { m } u = 0$ k m (  and   positive constants), $u ( 0 ) = u _ { 0 }$ 

a. as a first-order linear equation. 

b. as a separable equation. 

Theory and Examples 

23. Is either of the following equations correct? Give reasons for your answers. 

a. $x \int { \frac { 1 } { x } } d x = x \ln | x | + C$ 

b. $x \int { \frac { 1 } { x } } d x = x \ln | x | + C x$ 

24. Is either of the following equations correct? Give reasons for your answers. 

a. ${ \frac { 1 } { \cos x } } \int \cos x d x = \tan x + C$ 

b. ${ \frac { 1 } { \cos x } } \int \cos x d x = \tan x + { \frac { C } { \cos x } }$ 

25. Current in a closed RL circuit How many seconds after the switch in an RL circuit is closed will it take the current i to reach half of its steady-state value? Notice that the time depends on R and $L ,$ not on how much voltage is applied. 

26. Current in an open RL circuit If the switch is thrown open after the current in an RL circuit has built up to its steady-state value $I = V / R$ , the decaying current (see accompanying figure) obeys the equation 

$$
L \frac {d i}{d t} + R i = 0,
$$

which is Equation (5) with $V = 0$ 

a. Solve the equation to express i as a function of t. 

b. How long after the switch is thrown will it take the current to fall to half its original value? 

c. Show that the value of the current when $t = L / R$ is $I / e .$ . (The significance of this time is explained in the next exercise.) 

![教材插图](/books/thomas-calculus/assets/a4a21b9c04676ffc711249a871e91f1a1d1141329ef33f1b47c21889477627d0.jpg)


27. Time constants Engineers call the number $L / R$ the time constant of the RL circuit in Figure 16.10. The significance of the time constant is that the current will reach 95% of its final value within 3 time constants of the time the switch is closed (Figure 16.10). Thus, the time constant gives a built-in measure of how rapidly an individual circuit will reach equilibrium. 

a. Find the value of i in Equation (7) that corresponds to $t = 3 L / R$ , and show that it is about 95% of the steady-state value $I = V / R$ 

b. Approximately what percentage of the steady-state current will be flowing in the circuit 2 time constants after the switch is closed (i.e., when $t = 2 L / R ) ?$ 

28. Derivation of Equation (7) in Example 4

a. Show that the solution of the equation 

$$
\frac {d i}{d t} + \frac {R}{L} i = \frac {V}{L}
$$

is 

$$
i = \frac {V}{R} + C e ^ {- (R / L) t}.
$$

b. Then use the initial condition $i ( 0 ) = 0$ to determine the value of C. This will complete the derivation of Equation (7). 

c. Show that $i = V / R$ is a solution of Equation (6) and that $i = C e ^ { - ( R / L ) t }$ satisfies the equation 

$$
\frac {d i}{d t} + \frac {R}{L} i = 0.
$$

A Bernoulli differential equation is of the form 

$$
\frac {d y}{d x} + P (x) y = Q (x) y ^ {n}.
$$

Observe that, if $n = 0 \mathrm { o r } 1$ , the Bernoulli equation is linear. For other values of $n ,$ the substitution $u \ : = \ : y ^ { 1 - n }$ transforms the Bernoulli equation into the linear equation 

$$
\frac {d u}{d x} + (1 - n) P (x) u = (1 - n) Q (x).
$$

**HISTORICAL BIOGRAPHY**

#### Jakob Bernoulli

#### (1654–1705)

Jakob Bernoulli was born in Switzerland and received his degree in 1671 after studying philosophy and theology at the request of his father and mathematics and astronomy against the will of his father. Working on problems in optics and mechanics, Bernoulli contributed to important developments in infinitesimal geometry and calculus. 

To know more, visit the companion Website. 

For example, in the equation 

$$
\frac {d y}{d x} - y = e ^ {- x} y ^ {2},
$$

we have $n = 2 ,$ so that $u = y ^ { 1 - 2 } = y ^ { - 1 }$ and 

$d u / d x = - y ^ { - 2 } d y / d x .$ . Then 

$$
d y / d x = - y ^ {2} d u / d x = - u ^ {- 2} d u / d x.
$$

Substitution into the original equation gives 

$$
- u ^ {- 2} \frac {d u}{d x} - u ^ {- 1} = e ^ {- x} u ^ {- 2},
$$

or, equivalently, 

$$
\frac {d u}{d x} + u = - e ^ {- x}.
$$

This last equation is linear in the (unknown) dependent variable u. 

Solve the Bernoulli equations in Exercises 29–32. 

$$
\begin{array}{l l} \textbf {2 9 .} y ^ {\prime} - y = - y ^ {2} & \textbf {3 0 .} y ^ {\prime} - y = x y ^ {2} \\ \textbf {3 1 .} x y ^ {\prime} + y = y ^ {- 2} & \textbf {3 2 .} x ^ {2} y ^ {\prime} + 2 x y = y ^ {3} \end{array}
$$

## 16.3 Applications

We now look at four applications of first-order differential equations. The first application analyzes an object moving along a straight line while subject to a force opposing its motion. The second is a model of population growth. The third application considers a curve or curves intersecting each curve in a second family of curves orthogonally (that is, at right angles). The final application analyzes chemical concentrations entering and leaving a container. The various models involve separable or linear first-order equations. 

### Motion with Resistance Proportional to Velocity

In some cases it is reasonable to assume that the resistance encountered by a moving object, such as a car coasting to a stop, is proportional to the object’s velocity. The faster the object moves, the more its forward progress is resisted by the air through which it passes. Picture the object as a mass m moving along a coordinate line with position function s and velocity υ at time t. From Newton’s second law of motion, the resisting force opposing the motion is 

$$
\text { Force } = \text { mass } \times \text { acceleration } = m \frac {d v}{d t}.
$$

If the resisting force is proportional to velocity, we have 

$$
m \frac {d v}{d t} = - k v \quad \text { or } \quad \frac {d v}{d t} = - \frac {k}{m} v \quad (k > 0).
$$

This is a separable differential equation representing exponential change. The solution to the equation with initial condition $\upsilon = v _ { 0 }$ at $t = 0$ is (Section 7.2) 

$$
v = v _ {0} e ^ {- (k / m) t}.\tag{1}
$$

What can we learn from Equation (1)? For one thing, we can see that if m is something large, like the mass of a 20,000-ton ore boat in Lake Erie, it will take a long time for the velocity to approach zero (because t must be large in the exponent of the equation in order to make kt m large enough for υ to be small). We can learn even more if we integrate Equation (1) to find the position s as a function of time t. 

Suppose that an object is coasting to a stop and the only force acting on it is a resistance proportional to its speed. How far will it coast? To find out, we start with Equation (1) and solve the initial value problem 

$$
\frac {d s}{d t} = v _ {0} e ^ {- (k / m) t}, \quad s (0) = 0.
$$

Integrating with respect to t gives 

$$
s = - \frac {v _ {0} m}{k} e ^ {- (k / m) t} + C.
$$

Substituting $s = 0$ when $t = 0$ gives 

$$
0 = - \frac {v _ {0} m}{k} + C \quad \text { and } \quad C = \frac {v _ {0} m}{k}.
$$

The body’s position at time t is therefore 

$$
s (t) = - \frac {v _ {0} m}{k} e ^ {- (k / m) t} + \frac {v _ {0} m}{k} = \frac {v _ {0} m}{k} (1 - e ^ {- (k / m) t}).\tag{2}
$$

To find how far the body will coast, we find the limit of s( ) ast $t \ \longrightarrow \ \infty .$ . Since $- ( k / m ) < 0$ we know that $e ^ { - ( k / m ) t } \ \longrightarrow \ 0 \ \mathrm { a s } \ t \ \longrightarrow \ \infty .$ , so that 

$$
\lim _ {t \rightarrow \infty} s (t) = \lim _ {t \rightarrow \infty} \frac {v _ {0} m}{k} \left(1 - e ^ {- (k / m) t}\right) = \frac {v _ {0} m}{k} (1 - 0) = \frac {v _ {0} m}{k}.
$$

Thus, 

$$
\text { Distance   coated } = \frac {v _ {0} m}{k}.\tag{3}
$$

The number $v _ { 0 } m / k$ is only an upper bound (albeit a useful one). It is true to life in one respect, at least: If m is large, the body will coast a long way. 

**EXAMPLE 1** For a 90-kg ice skater, the k in Equation (1) is about 5 $\mathrm { k g / s } .$ How long will it take the skater to coast from $3 . 3 ~ \mathrm { m / s } ~ ( 1 1 . 8 8 ~ \mathrm { k m / h } )$ to 0.3 m/s? How far will the skater coast before coming to a complete stop? 

**Solution** We answer the first question by solving Equation (1) for t: 

$$
\begin{array}{l l} 3 3 e ^ {- t / 1 8} = 0. 3 & \text { Eq. (1) with } k = 5, \\ e ^ {- t / 1 8} = 1 / 1 1 & m = 9 0, v _ {0} = 3. 3, v = 0. 3 \\ - t / 1 8 = \ln (1 / 1 1) = - \ln 1 1 \\ t = 1 8 \ln 1 1 \approx 4 3 \mathrm{s}. \end{array}
$$

We answer the second question with Equation (3): 

$$
\text { Distance   coasted } = \frac {v _ {0} m}{k} = \frac {3 . 3 \cdot 9 0}{5} = 5 9. 4 \mathrm{m}.
$$

### Inaccuracy of the Exponential Population Growth Model

In Section 7.2 we modeled population growth with the Law of Exponential Change: 

$$
\frac {d P}{d t} = k P, \quad P (0) = P _ {0},
$$

where P is the population at time $t , k > 0$ is a constant growth rate, and $P _ { 0 }$ is the size of the population at time $t \ : = \ : 0$ . In Section 7.2 we found the solution $\boldsymbol { P } = P _ { 0 } \boldsymbol { e } ^ { k t }$ to this model. 

To assess the model, notice that the exponential growth differential equation says that 

$$
\frac {d P / d t}{P} = k\tag{4}
$$

is constant. This rate is called the relative growth rate. We can use this to predict total future world population based on historical data. Table 16.3 gives the world population at midyear for the years 1980 to 19816. Taking $d t = 1$ and $d P \approx \Delta P$ , we see from the table that the relative growth rate in Equation (4) is approximately equal to 0.017. Thus, based on the tabled data with $t = 0$ representing $1 9 8 0 , t = 1$ representing 1981, and so forth, the world population could be modeled by the initial value problem 

![教材插图](/books/thomas-calculus/assets/14892ebba910bf8c3da48349f37909ca86054a14eaaf01972f1d44451d1282e0.jpg)



FIGURE 16.11 The value of the solution $P = 4 4 5 4 e ^ { 0 . 0 1 7 t }$ is 8792 when $t = 4 0 ,$ which is nearly 13% more than the actual population in 2020.


![教材插图](/books/thomas-calculus/assets/59cc16996c75603eb7527a0d683d0dd3776a2cb6c6bcca6f31bedc070166b89c.jpg)



FIGURE 16.12 An orthogonal trajectory intersects the family of curves at right angles, or orthogonally.


![教材插图](/books/thomas-calculus/assets/78235c33a4f7b19b7e957b36288793091ac7b35162ff833e3f11a53ebd9c26d6.jpg)



FIGURE 16.13 Every straight line through the origin is orthogonal to the family of circles centered at the origin.



TABLE 16.3 World population (midyear)


<table><tr><td>Year</td><td>Population (millions)</td><td><eq>\Delta P/P</eq></td></tr><tr><td>1980</td><td>4454</td><td>76/4454 ≈ 0.0171</td></tr><tr><td>1981</td><td>4530</td><td>80/4530 ≈ 0.0177</td></tr><tr><td>1982</td><td>4610</td><td>80/4610 ≈ 0.0174</td></tr><tr><td>1983</td><td>4690</td><td>80/4690 ≈ 0.0171</td></tr><tr><td>1984</td><td>4770</td><td>81/4770 ≈ 0.0170</td></tr><tr><td>1985</td><td>4851</td><td>82/4851 ≈ 0.0169</td></tr><tr><td>1986</td><td>4933</td><td>85/4933 ≈ 0.0172</td></tr><tr><td>1987</td><td>5018</td><td>87/5018 ≈ 0.0173</td></tr><tr><td>1988</td><td>5105</td><td>85/5105 ≈ 0.0167</td></tr><tr><td>1989</td><td>5190</td><td></td></tr></table>

$$
\frac {d P}{d t} = 0. 0 1 7 P, \quad P (0) = 4 4 5 4.
$$

The solution to this initial value problem gives the population function $P = 4 4 5 4 e ^ { 0 . 0 1 7 t }$ In year 2008 (so $t = 2 8 )$ , the solution predicts the world population in midyear to be about 7169 million, or 7.2 billion (Figure 16.11), which is more than the actual population of 6707 million, an error of about 7%. The error grows as the number of years increases. For $2 0 2 0 ( t = 4 0 )$ the model predicts a population of 8792 million. The reported population for 2020 is 7795 million, an overprediction error of about 13%. A more realistic model would consider environmental, economic, and other factors affecting the growth rate, which has been steadily declining. We consider one such model in Section 16.4. 

### Orthogonal Trajectories

An orthogonal trajectory of a family of curves is a curve that intersects each curve of the family at right angles, or orthogonally (Figure 16.12). For instance, each straight line through the origin is an orthogonal trajectory of the family of circles $x ^ { 2 } + y ^ { 2 } = a ^ { 2 }$ , centered at the origin (Figure 16.13). Such mutually orthogonal systems of curves are of particular importance in physical problems related to electrical potential, where the curves in one family correspond to strength of an electric field, and those in the other family correspond to constant electric potential. They also occur in hydrodynamics and heat-flow problems. 

**EXAMPLE 2** Find the orthogonal trajectories of the family of curves $x y = a ,$ , where $a \ne 0$ is an arbitrary constant. 

**Solution** The curves xy a = form a family of hyperbolas having the coordinate axes as asymptotes. First we find the slopes of each curve in this family, or their $d y / d x$ values. Differentiating $x y = a$ implicitly gives 

$$
x \frac {d y}{d x} + y = 0 \quad \text { or } \quad \frac {d y}{d x} = - \frac {y}{x}.
$$

![教材插图](/books/thomas-calculus/assets/7a91f4227835f85fb6ce79af07d99b46ed3bc02cb803a14fd6b139578151462c.jpg)



FIGURE 16.14 Each curve is orthogonal to every curve it meets in the other family (Example 2).


Thus the slope of the tangent line at any point $( x , y )$ on one of the hyperbolas $x y = a$ is $y ^ { \prime } = - y / x$ . On an orthogonal trajectory the slope of the tangent line at this same point must be the negative reciprocal, or $x / y$ . Therefore, the orthogonal trajectories must satisfy the differential equation 

$$
{\frac {d y}{d x}} = {\frac {x}{y}}.
$$

This differential equation is separable, and we solve it as in Section 7.2: 

$$
\begin{array}{r l r} y   d y & = x   d x & \text { Separate   variables. } \\ \int y   d y & = \int x   d x & \text { Integrate   both   sides. } \\ \frac {1}{2} y ^ {2} & = \frac {1}{2} x ^ {2} + C \\ y ^ {2} - x ^ {2} & = b, \end{array}\tag{5}
$$

where $b = 2 C$ is an arbitrary constant. The orthogonal trajectories are the family of hyperbolas given by Equation (5) and sketched in Figure 16.14. ■ 

### Mixture Problems

Suppose a chemical in a liquid solution (or dispersed in a gas) runs into a container holding the liquid (or the gas) with, possibly, a specified amount of the chemical dissolved as well. The mixture is kept uniform by stirring and flows out of the container at a known rate. In this process, it is often important to know the concentration of the chemical in the container at any given time. The differential equation describing the process is based on the formula 

$$
\begin{array}{c} \text { Rate   of   change } \\ \text { of   amount } \\ \text { in   container } \end{array} = \left( \begin{array}{c} \text { rate   at   which } \\ \text { chemical } \\ \text { arrives } \end{array} \right) - \left( \begin{array}{c} \text { rate   at   which } \\ \text { chemical } \\ \text { departs. } \end{array} \right).\tag{6}
$$

If $y ( t )$ is the amount of chemical in the container at time t, and $V ( t )$ is the total volume of liquid in the container at time $t ,$ then the departure rate of the chemical at time t is 

$$
\begin{array}{r l} \text { Departure   rate } & = \frac {y (t)}{V (t)} \cdot (\text { outflow   rate }) \\ & = \binom {\text { concentration   in }} {\text { container   at   time } t} \cdot (\text { outflow   rate }). \end{array}\tag{7}
$$

Accordingly, Equation (6) becomes 

$$
\frac {d y}{d t} = (\text { chemical's   arrival   rate }) - \frac {y (t)}{V (t)} \cdot (\text { outflow   rate }).\tag{8}
$$

If, say, y is measured in kilograms, V in liters, and t in minutes, the units in Equation (8) are 

$$
\frac {\text { kilograms }}{\text { minutes }} = \frac {\text { kilograms }}{\text { minutes }} - \frac {\text { kilograms }}{\text { liters }} \cdot \frac {\text { liters }}{\text { minutes }}.
$$

**EXAMPLE 3** In an oil refinery, a storage tank contains 10,000 L of gasoline that initially has 50 kg of an additive dissolved in it. In preparation for winter weather, gasoline containing 0.2 kg of additive per liter is pumped into the tank at a rate of 200 L/min. 

The well-mixed solution is pumped out at a rate of 220 L/min. How much of the additive is in the tank 20 min after the pumping process begins (Figure 16.15)? 

![教材插图](/books/thomas-calculus/assets/d8b084d54b808819c47a36701d6392e67b6b301f8d7df6084fb2c5ef69960af9.jpg)



FIGURE 16.15 The storage tank in Example 3 mixes input



liquid with stored liquid to produce an output liquid.


**Solution** Let y be the amount (in kilograms) of additive in the tank at time t. We know that $y = 5 0$ when $t = 0$ . The number of liters of gasoline and additive in solution in the tank at any time t is 

$$
V (t) = 1 0, 0 0 0 \mathrm{L} + \left(2 0 0 \frac {\mathrm{L}}{\min} - 2 2 0 \frac {\mathrm{L}}{\min}\right) (t \min) = (1 0, 0 0 0 - 2 0 t) \mathrm{L}.
$$

Therefore, 

$$
\begin{array}{l l} \text { Rate   out } = \frac {y (t)}{V (t)} \cdot \text { outflow   rate } & \text { Eq.   (7) } \\ = \left(\frac {y}{1 0 , 0 0 0 - 2 0 t}\right) 2 0 0 & \text { Outflow   rate   is   220   L / min } \\ = \frac {2 2 0 y}{1 0 , 0 0 0 - 2 0 t} \frac {\mathrm{kg}}{\min}. & \text { and   V   =   10,000   -   20t. } \end{array}
$$

Also, 

$$
\text { Rate   in } = \left(0. 2 \frac {\mathrm{kg}}{\mathrm{L}}\right) \left(2 0 0 \frac {\mathrm{L}}{\min}\right) = 4 0 \frac {\mathrm{kg}}{\min}.
$$

The differential equation modeling the mixture process is 

$$
\frac {d y}{d t} = 4 0 - \frac {2 2 0 y}{1 0 , 0 0 0 - 2 0 t} \quad \text { Eq. } (8)
$$

in kilograms per minute. 

To solve this differential equation, we first write it in standard linear form: 

$$
\frac {d y}{d t} + \frac {2 2 0}{1 0 , 0 0 0 - 2 0 t} y = 4 0.
$$

Thus, $P ( t ) = 2 2 0 / ( 1 0 , 0 0 0 - 2 0 t )$ and $Q ( t ) = 4 0 $ . The integrating factor is 

$$
\begin{array}{r l} v (t) = e ^ {\int P d t} & = e ^ {\int \frac {2 2 0}{1 0 , 0 0 0 - 2 0 t} d t} \\ & = e ^ {- 1 1 \ln (1 0, 0 0 0 - 2 0 t)} \quad 1 0, 0 0 0 - 2 0 t > 0 \\ & = (1 0, 0 0 0 - 2 0 t) ^ {- 1 1}. \end{array}
$$

Multiplying both sides of the standard equation by υ( )t and integrating both sides gives 

$$
(1 0, 0 0 0 - 2 0 t) ^ {- 1 1} \cdot \left(\frac {d y}{d t} + \frac {2 2 0}{1 0 , 0 0 0 - 2 0 t} y\right) = 4 0 (1 0, 0 0 0 - 2 0 t) ^ {- 1 1}
$$

$$
(1 0, 0 0 0 - 2 0 t) ^ {- 1 1} \frac {d y}{d t} + 2 2 0 (1 0, 0 0 0 - 2 0 t) ^ {- 1 2} y = 4 0 (1 0, 0 0 0 - 2 0 t) ^ {- 1 1}
$$

$$
\frac {d}{d t} \left[ (1 0, 0 0 0 - 2 0 t) ^ {- 1 1} y \right] = 4 0 (1 0, 0 0 0 - 2 0 t) ^ {- 1 1}
$$

$$
(1 0, 0 0 0 - 2 0 t) ^ {- 1 1} y = \int 4 0 (1 0, 0 0 0 - 2 0 t) ^ {- 1 1} d t
$$

$$
(1 0, 0 0 0 - 2 0 t) ^ {- 1 1} y = 4 0 \cdot \frac {(1 0 , 0 0 0 - 2 0 t) ^ {- 1 0}}{(- 1 0) (- 2 0)} + C.
$$

The general solution is 

$$
y = 0. 2 (1 0, 0 0 0 - 2 0 t) + C (1 0, 0 0 0 - 2 0 t) ^ {1 1}.
$$

Because $y = 5 0$ when t = 0, we can determine the value of C: 

$$
5 0 = 0. 2 (1 0, 0 0 0 - 0) + C (1 0, 0 0 0 - 0) ^ {1 1}
$$

$$
C = - \frac {1 9 5 0}{(1 0 , 0 0 0) ^ {1 1}}.
$$

The particular solution of the initial value problem is 

$$
y = 0. 2 (1 0, 0 0 0 - 2 0 t) - \frac {1 9 5 0}{(1 0 , 0 0 0) ^ {1 1}} (1 0, 0 0 0 - 2 0 t) ^ {1 1}.
$$

The amount of additive in the tank 20 min after the pumping begins is 

$$
y (2 0) = 0. 2 [ 1 0, 0 0 0 - 2 0 (2 0) ] - \frac {1 9 5 0}{(1 0 , 0 0 0) ^ {1 1}} [ 1 0, 0 0 0 - 2 0 (2 0) ] ^ {1 1} \approx 6 7 5 \mathrm{kg}.
$$

### EXERCISES 16.3

#### Motion Along a Line

1. Coasting bicycle A 66-kg cyclist on a 7-kg bicycle starts coasting on level ground at 9 m s. The k in Equation (1) is about $3 . 9 \mathrm { k g / s }$ 

a. About how far will the cyclist coast before reaching a complete stop? 

b. How long will it take the cyclist’s speed to drop to 1 $\mathrm { m } / \mathrm { s } ?$ 

2. Coasting battleship An Iowa class battleship has mass around 51,000 metric tons (51,000,000 kg) and a k value in Equation (1) of about 59, 000 kg s. Assume that the ship loses power when it is moving at a speed of 9 m s. 

a. About how far will the ship coast before it is dead in the water? 

b. About how long will it take the ship’s speed to drop to 1 m s? 

3. The data in Table 16.4 were collected with a motion detector and a CBL™ by Valerie Sharritts, then a mathematics teacher at St. Francis DeSales High School in Columbus, Ohio. The table shows the distance s (meters) coasted on inline skates in t s by her daughter Ashley when she was 10 years old. Find a model for Ashley’s position given by the data in Table 16.4 in the form of 


TABLE 16.4 Ashley Sharritts skating data


<table><tr><td>t (s)</td><td>s (m)</td><td>t (s)</td><td>s (m)</td><td>t (s)</td><td>s (m)</td></tr><tr><td>0</td><td>0</td><td>2.24</td><td>3.05</td><td>4.48</td><td>4.77</td></tr><tr><td>0.16</td><td>0.31</td><td>2.40</td><td>3.22</td><td>4.64</td><td>4.82</td></tr><tr><td>0.32</td><td>0.57</td><td>2.56</td><td>3.38</td><td>4.80</td><td>4.84</td></tr><tr><td>0.48</td><td>0.80</td><td>2.72</td><td>3.52</td><td>4.96</td><td>4.86</td></tr><tr><td>0.64</td><td>1.05</td><td>2.88</td><td>3.67</td><td>5.12</td><td>4.88</td></tr><tr><td>0.80</td><td>1.28</td><td>3.04</td><td>3.82</td><td>5.28</td><td>4.89</td></tr><tr><td>0.96</td><td>1.50</td><td>3.20</td><td>3.96</td><td>5.44</td><td>4.90</td></tr><tr><td>1.12</td><td>1.72</td><td>3.36</td><td>4.08</td><td>5.60</td><td>4.90</td></tr><tr><td>1.28</td><td>1.93</td><td>3.52</td><td>4.18</td><td>5.76</td><td>4.91</td></tr><tr><td>1.44</td><td>2.09</td><td>3.68</td><td>4.31</td><td>5.92</td><td>4.90</td></tr><tr><td>1.60</td><td>2.30</td><td>3.84</td><td>4.41</td><td>6.08</td><td>4.91</td></tr><tr><td>1.76</td><td>2.53</td><td>4.00</td><td>4.52</td><td>6.24</td><td>4.90</td></tr><tr><td>1.92</td><td>2.73</td><td>4.16</td><td>4.63</td><td>6.40</td><td>4.91</td></tr><tr><td>2.08</td><td>2.89</td><td>4.32</td><td>4.69</td><td>6.56</td><td>4.91</td></tr></table>

Equation (2). Her initial velocity was $v _ { 0 } = 2 . 7 5 \mathrm { m } / \mathrm { s } .$ , her mass $m = 3 9 . 9 2 1$ kg, and her total coasting distance was 4.91 m. 

4. Coasting to a stop Table 16.5 shows the distance s (meters) coasted on inline skates in terms of time t (seconds) by Kelly Schmitzer. Find a model for her position in the form of Equation (2). Her initial velocity was $v _ { \mathrm { 0 } } = 0 . 8 0 \mathrm { m } / \mathrm { s }$ , her mass $m = 4 9 . 9 0 \mathrm { k g } .$ and her total coasting distance was 1.32 m. 


TABLE 16.5 Kelly Schmitzer skating data


<table><tr><td>t (s)</td><td>s (m)</td><td>t (s)</td><td>s (m)</td><td>t (s)</td><td>s (m)</td></tr><tr><td>0</td><td>0</td><td>1.5</td><td>0.89</td><td>3.1</td><td>1.30</td></tr><tr><td>0.1</td><td>0.07</td><td>1.7</td><td>0.97</td><td>3.3</td><td>1.31</td></tr><tr><td>0.3</td><td>0.22</td><td>1.9</td><td>1.05</td><td>3.5</td><td>1.32</td></tr><tr><td>0.5</td><td>0.36</td><td>2.1</td><td>1.11</td><td>3.7</td><td>1.32</td></tr><tr><td>0.7</td><td>0.49</td><td>2.3</td><td>1.17</td><td>3.9</td><td>1.32</td></tr><tr><td>0.9</td><td>0.60</td><td>2.5</td><td>1.22</td><td>4.1</td><td>1.32</td></tr><tr><td>1.1</td><td>0.71</td><td>2.7</td><td>1.25</td><td>4.3</td><td>1.32</td></tr><tr><td>1.3</td><td>0.81</td><td>2.9</td><td>1.28</td><td>4.5</td><td>1.32</td></tr></table>

#### Orthogonal Trajectories

In Exercises 5–10, find the orthogonal trajectories of the family of curves. Sketch several members of each family. 

$$
y = m x
$$

$$
y = c x ^ {2}
$$

8. $2 x ^ { 2 } + y ^ { 2 } = c ^ { 2 }$ $9 . \ y = c e ^ { - x }$ 10. $y = e ^ { k x }$ 

11. Show that the curves $2 x ^ { 2 } + 3 y ^ { 2 } = 5$ and $y ^ { 2 } = x ^ { 3 }$ are orthogonal. 

12. Find the family of solutions of the given differential equation and the family of orthogonal trajectories. Sketch both families. 

a. $x d x + y d y = 0$ 

b. $x d y - 2 y d x = 0$ 

#### Mixture Problems

13. Salt mixture A tank initially contains 400 L of brine in which 20 kg/L of salt are dissolved. A brine containing 0.2 kg/L of salt runs into the tank at the rate of 20 L/min. The mixture is kept uniform by stirring and flows out of the tank at the rate of $1 6 \mathrm { L } / \mathrm { m i n } .$ 

a. At what rate (kilograms per minute) does salt enter the tank at time t? 

b. What is the volume of brine in the tank at time t? 

c. At what rate (kilograms per minute) does salt leave the tank at time t? 

d. Write down and solve the initial value problem describing the mixing process. 

e. Find the concentration of salt in the tank 25 min after the process starts. 

14. Mixture problem A 800-L tank is half full of distilled water. At time t = 0, a solution containing 50 grams/L of concentrate enters the tank at the rate of 20 L/min, and the well-stirred mixture is withdrawn at the rate of 12 L/min. 

a. At what time will the tank be full? 

b. At the time the tank is full, how many kilograms of concentrate will it contain? 

15. Fertilizer mixture A tank contains 400 L of fresh water. A solution containing 0.1 kg/L of soluble lawn fertilizer runs into the tank at the rate of 4 L/min, and the mixture is pumped out of the tank at the rate of 12 L/min. Find the maximum amount of fertilizer in the tank and the time required to reach the maximum. 

16. Carbon monoxide pollution An executive conference room of a corporation contains 120 m <sup>3</sup> of air initially free of carbon monoxide. Starting at time t = 0, cigarette smoke containing 4% carbon monoxide is blown into the room at the rate of 0.008 m min <sup>3</sup> . A ceiling fan keeps the air in the room well circulated and the air leaves the room at the same rate of 0.008 m min<sup>3</sup> . Find the time when the concentration of carbon monoxide in the room reaches 0.01%. 

## 16.4 Graphical Solutions of Autonomous Equations

In Chapter 4 we learned that the sign of the first derivative tells where the graph of a function is increasing and where it is decreasing. The sign of the second derivative tells the concavity of the graph. We can build on our knowledge of how derivatives determine the shape of a graph to solve differential equations graphically. We will see that the ability to discern physical behavior from graphs is a powerful tool in understanding real-world systems. The starting ideas for a graphical solution are the notions of phase line and equilibrium value. We arrive at these notions by investigating, from a point of view quite different from that studied in Chapter 4, what happens when the derivative of a differentiable function is zero. 

### Equilibrium Values and Phase Lines

When we differentiate implicitly the equation 

$$
\frac {1}{5} \ln (5 y - 1 5) = x + 1,
$$

we obtain 

$$
\frac {1}{5} \left(\frac {5}{5 y - 1 5}\right) \frac {d y}{d x} = 1.
$$

Solving for $y ^ { \prime } = d y / d x .$ , we find $y ^ { \prime } = 5 y - 1 5 = 5 ( y - 3 )$ . In this case the derivative $y ^ { \prime }$ is a function of y only (the dependent variable) and is zero when $y = 3$ 

A differential equation for which $d y / d x$ is a function of y only is called an autonomous differential equation. Let’s investigate what happens when the derivative in an autonomous equation equals zero. We assume any derivatives are continuous. 

> ***DEFINITION*** $\operatorname { I f } d y / d x = g ( y )$ is an autonomous differential equation, then the values of $y$ for which $d y / d x = 0$ are called equilibrium values or rest points. 

Thus, equilibrium values are those at which no change occurs in the dependent variable, so y is at rest. The emphasis is on the value of y where $d y / d x = 0$ , not the value of $x ,$ as we studied in Chapter 4. For example, the equilibrium values for the autonomous differential equation 

$$
\frac {d y}{d x} = (y + 1) (y - 2)
$$

are $y = - 1$ and $y = 2$ 

To construct a graphical solution to an autonomous differential equation, we first make a phase line for the equation, a plot on the y-axis that shows the equation’s equilibrium values along with the intervals where $d y / d x$ and $d ^ { 2 } y / d x ^ { 2 }$ are positive and negative. Then we know where the solutions are increasing and decreasing, and the concavity of the solution curves. These are the essential features we found in Section 4.4, so we can determine the shapes of the solution curves without having to find formulas for them. 

**EXAMPLE 1** Draw a phase line for the equation

$$
\frac {d y}{d x} = (y + 1) (y - 2),
$$

and use it to sketch solutions to the equation. 

**Solution**

1. Draw a number line for y and mark the equilibrium values $y = - 1 a n d y = 2 .$ where $d y / d x = 0$ 

![教材插图](/books/thomas-calculus/assets/f2e02f83daf522c2b1aaf2868a8785dfd0d943ed7e4f562ca1ad84694b58a1a0.jpg)


2. Identify and label the intervals where $y ^ { \prime } > 0$ and $y ^ { \prime } < 0$ . This step resembles what we did in Section 4.3, only now we are marking the y-axis instead of the x-axis. 

![教材插图](/books/thomas-calculus/assets/b167c35b24e5a7f965645d0e5239f7b1a07a39e6c91bd45f742b7324f1f22738.jpg)


We can encapsulate the information about the sign of $y ^ { \prime }$ on the phase line itself. Since $y ^ { \prime } > 0$ on the interval to the left of $y = - 1$ , a solution of the differential equation with a y-value less than −1 will increase from there toward $y = - 1$ . We display this information by drawing an arrow on the interval pointing to −1. 

![教材插图](/books/thomas-calculus/assets/b193b8496aaabd0f966bce7a293a704471c266604a54da395cf1af0d8f6a9581.jpg)



FIGURE 16.16 Graphical solutions from Example 1 include the horizontal lines $y = - 1$ and $y = 2$ through the equilibrium values. No two solution curves can ever cross or touch each other.


![教材插图](/books/thomas-calculus/assets/fde13fab163a6b518e51a7d2863328aa0c8a45d79e10d58abfd7be1bd6046e0b.jpg)


Similarly, $y ^ { \prime } < 0$ between $y = - 1$ and $y = 2 .$ , so any solution with a value in this interval will decrease toward $y = - 1$ 

For $y > 2 ,$ we have $y ^ { \prime } > 0 ,$ , so a solution with a y-value greater than 2 will increase from there without bound. 

In short, solution curves below the horizontal line $y = - 1$ in the xy-plane rise toward $y = - 1$ . **Solution** curves between the lines $y = - 1$ and $y = 2$ fall away from $y = 2$ toward $y = - 1$ . **Solution** curves above $y = 2$ rise away from $y = 2$ and keep going up. 

3. Calculate $y ^ { \prime \prime }$ and mark the intervals where $y ^ { \prime \prime } > 0$ and $y ^ { \prime \prime } < 0$ . To find $y ^ { \prime \prime } ,$ we differentiate $y ^ { \prime }$ with respect to x, using implicit differentiation. 

![教材插图](/books/thomas-calculus/assets/f9b5f61d07141bc92c11faa223df380097fc0c31206830c980c54b6c88a89b6e.jpg)


From this formula, we see that $y ^ { \prime \prime }$ changes sign at $y = - 1 , y = 1 / 2$ , and $y = 2$ . We add the sign information to the phase line. 

![教材插图](/books/thomas-calculus/assets/9570cb3f63b2001b8b70cc0bc05a8f702769ba455f5cc6c4aaadd73615b940b6.jpg)


4. Sketch an assortment of solution curves in the xy-plane. The horizontal lines $y = - 1 , y = 1 / 2$ , and $y = 2$ partition the plane into horizontal bands in which we know the signs of $y ^ { \prime }$ and $y ^ { \prime \prime } .$ . In each band, this information tells us whether the solution curves rise or fall and how they bend as x increases (Figure 16.16). 

The “equilibrium lines” $y = - 1$ and $y = 2$ are also solution curves. (The constant functions $y = - 1$ and $y = 2$ satisfy the differential equation.) **Solution** curves that cross the line $y = 1 / 2$ have an inflection point there. The concavity changes from concave down (above the line) to concave up (below the line). 

As predicted in Step 2, solutions in the middle and lower bands approach the equilibrium value $y = - 1$ as x increases. Solutions in the upper band rise steadily away from the value $y = 2$ 

### Stable and Unstable Equilibria

Look at Figure 16.16 once more, in particular at the behavior of the solution curves near the equilibrium values. Once a solution curve has a value near $y = - 1 ,$ it tends steadily toward that value; $y = - 1$ is a stable equilibrium. The behavior near $y = 2$ is just the opposite: All solutions except the equilibrium solution $y = 2$ itself move away from it as x increases. We call $y = 2$ an unstable equilibrium. If the solution is at that value, it stays, but if it is off by any amount, no matter how small, it moves away. (Sometimes an equilibrium value is unstable because a solution moves away from it only on one side of the point.) 

Now that we know what to look for, we can already see this behavior on the initial phase line (the second diagram in Step 2 of Example 1). The arrows lead away from $y = 2$ and, once to the left of $y = 2 ,$ , toward $y = - 1$ 

![教材插图](/books/thomas-calculus/assets/86484a655e3eed5fadb72ee99d3edb39131c76a79e6ebe478a542973efcd60b4.jpg)



FIGURE 16.17 First step in constructing the phase line for Newton’s Law of Cooling. The temperature tends toward the equilibrium (surrounding-medium) value in the long run.


![教材插图](/books/thomas-calculus/assets/53f44b54de7e5e9af380cd1c6f0dab377c525d5a1cd04a58b22bf4f96cdaab0e.jpg)



FIGURE 16.18 The complete phase line for Newton’s Law of Cooling.


![教材插图](/books/thomas-calculus/assets/16b09a4f3fd68901f09f72d460f3487369adf3822668f36dfeb2d4d58801a681.jpg)



FIGURE 16.19 Temperature versus time. Regardless of initial temperature, the object’s temperature H t( ) tends toward $1 5 ^ { \circ } \mathrm { C } .$ , the temperature of the surrounding medium.


We now present several applied examples for which we can sketch a family of solution curves to the differential equation models using the method in Example 1. 

### Newton’s Law of Cooling

In Section 7.2 we solved analytically the differential equation 

$$
\frac {d H}{d t} = - k (H - H _ {S}), \quad k > 0
$$

modeling Newton’s Law of Cooling. Here H is the temperature of an object at time t, and $H _ { s }$ is the constant temperature of the surrounding medium. 

Suppose that the surrounding medium (say, a room in a house) has a constant Celsius temperature of $1 5 ^ { \circ } \mathrm { C }$ . We can then express the difference in temperature as $H ( t ) - 1 5$ Assuming H is a differentiable function of time t, by Newton’s Law of Cooling, there is a constant of proportionality $k > 0$ such that 

$$
\frac {d H}{d t} = - k (H - 1 5)\tag{1}
$$

(minus k to give a negative derivative when $H > 1 5 )$ ). 

Since $d H / d t = 0$ at $H = 1 5 ,$ the temperature $1 5 ^ { \circ } \mathrm { C }$ is an equilibrium value. If $H > 1 5 ,$ Equation (1) tells us that $\left( H - 1 5 \right) > 0$ and $d H / d t < 0$ . If the object is hotter than the room, it will get cooler. Similarly, if $H < 1 5 .$ , then $( H - 1 5 ) < 0$ and $d H / d t > 0$ An object cooler than the room will warm up. Thus, the behavior described by Equation (1) agrees with our intuition of how temperature should behave. These observations are captured in the initial phase line diagram in Figure 16.17. The value $H = 1 5$ is a stable equilibrium. 

We determine the concavity of the solution curves by differentiating both sides of Equation (1) with respect to t: 

$$
\begin{array}{c} \frac {d}{d t} \left(\frac {d H}{d t}\right) = \frac {d}{d t} (- k (H - 1 5)) \\ \frac {d ^ {2} H}{d t ^ {2}} = - k \frac {d H}{d t}. \end{array}
$$

Since −k is negative, we see that $d ^ { 2 } H / d t ^ { 2 }$ is positive when ${ d H } / { d t } < 0$ and negative when $d H / d t > 0$ . Figure 16.18 adds this information to the phase line. 

The completed phase line shows that if the temperature of the object is above the equilibrium value of $1 5 ^ { \circ } \mathrm { C }$ , the graph of $H ( t )$ will be decreasing and concave upward. If the temperature is below $1 5 ^ { \circ } \mathrm { C }$ (the temperature of the surrounding medium), the graph of $H ( t )$ will be increasing and concave downward. We use this information to sketch typical solution curves (Figure 16.19). 

From the upper solution curve in Figure 16.19, we see that as the object cools down, the rate at which it cools slows down because $d H / d t$ approaches zero. This observation is implicit in Newton’s Law of Cooling and contained in the differential equation, but the flattening of the graph as time advances gives an immediate visual representation of the phenomenon. 

### A Falling Body Encountering Resistance

Newton observed that the rate of change of the momentum of a moving object is equal to the net force applied to it. In mathematical terms, 

$$
F = \frac {d}{d t} (m v),\tag{2}
$$

![教材插图](/books/thomas-calculus/assets/ad88e261319a8460cc92a6d14c2ef32a17b53b6546a05b459eccb680b9f00f4c.jpg)


FIGURE 16.20 An object falling under the propulsion due to gravity, with a resistive force assumed to be proportional to the velocity. 

![教材插图](/books/thomas-calculus/assets/a351f0d9fdfa86ccf4f61d1db7f4a825ca81fa1b82198d201aac8963462fa60d.jpg)



FIGURE 16.21 Initial phase line for the falling body encountering resistance.


![教材插图](/books/thomas-calculus/assets/f2112673ac411bfe325db60e866aa1f4927bf355fe155e32b3d0f8bfb2fcf5ff.jpg)



FIGURE 16.22 The completed phase line for the falling body.


![教材插图](/books/thomas-calculus/assets/3b564275c191cf9e26ad925a0aa93fa1703bcc32e95b7fdcf8e6bd2f55cc8890.jpg)



FIGURE 16.23 Typical velocity curves for a falling body encountering resistance. The value $\upsilon = m g / k$ is the terminal velocity.


where $F$ is the net force acting on the object, and m and υ are the object’s mass and velocity. If m varies with time, as it will if the object is a rocket burning fuel, the right-hand side of Equation (2) expands to 

$$
m \frac {d v}{d t} + v \frac {d m}{d t}
$$

using the Derivative Product Rule. In many situations, however, m is constant, $d m / d t = 0$ and Equation (2) takes the simpler form 

$$
F = m \frac {d v}{d t} \quad \text { or } \quad F = m a,\tag{3}
$$

which is known as Newton’s second law of motion (see Section 16.3). 

In free fall, the constant acceleration due to gravity is denoted by $^ { g , }$ and the one force propelling the body downward is 

$$
F _ {p} = m g,
$$

the force due to gravity. If, however, we think of a real body falling through the air—say, a penny from a great height or a parachutist from an even greater height—we know that at some point air resistance is a factor in the speed of the fall. A more realistic model of free fall would include air resistance, shown as a force $F _ { r }$ in the schematic diagram in Figure 16.20. 

For low speeds well below the speed of sound, physical experiments have shown that $F _ { r }$ is approximately proportional to the body’s velocity. The net force on the falling body is therefore 

$$
F = F _ {p} - F _ {r},
$$

giving 

$$
\begin{array}{c} m \frac {d v}{d t} = m g - k v \\ \frac {d v}{d t} = g - \frac {k}{m} v. \end{array}\tag{4}
$$

We can use a phase line to analyze the velocity functions that solve this differential equation. 

The equilibrium point, obtained by setting the right-hand side of Equation (4) equal to zero, is 

$$
v = \frac {m g}{k}.
$$

If the body is initially moving faster than this, $d v / d t$ is negative and the body slows down. If the body is moving at a velocity below $m g / k$ , then $d v / d t > 0$ and the body speeds up. These observations are captured in the initial phase line diagram in Figure 16.21. 

We determine the concavity of the solution curves by differentiating both sides of Equation (4) with respect to t: 

$$
\frac {d ^ {2} v}{d t ^ {2}} = \frac {d}{d t} \Big (g - \frac {k}{m} v \Big) = - \frac {k}{m} \frac {d v}{d t}.
$$

We see that $d ^ { 2 } v / d t ^ { 2 } < 0$ when $\upsilon < m g / k$ and that $d ^ { 2 } v / d t ^ { 2 } > 0$ when $\begin{array} { r } { \upsilon > m g / k . } \end{array}$ Figure 16.22 adds this information to the phase line. Notice the similarity to the phase line for Newton’s Law of Cooling (Figure 16.18). The solution curves are similar as well (Figure 16.23). 

![教材插图](/books/thomas-calculus/assets/c0e9cfc141bfe55f712e50b6f0e7937d9c116b308c9802eee6f4abeda95bdc5c.jpg)



FIGURE 16.24 The initial phase line for logistic growth (Equation 6).


![教材插图](/books/thomas-calculus/assets/f53b02706eafd100c7a88a0d14e7c5bc640108b2b338cf758997de546b9af104.jpg)



FIGURE 16.25 The completed phase line for logistic growth (Equation 6).


Figure 16.23 shows two typical solution curves. Regardless of the initial velocity, we see the body’s velocity tending toward the limiting value $\upsilon = m g / k$ . This value, a stable equilibrium point, is called the body’s terminal velocity. Skydivers can vary their terminal velocity from 153 km/h to 290 km/h by changing the amount of body area opposing the fall, which affects the value of k. 

### The Logistic Model for Population Growth

In Section 16.3 we examined population growth using the model of exponential change. That is, if P represents the number of individuals and we neglect departures and arrivals, then 

$$
\frac {d P}{d t} = k P,\tag{5}
$$

where $k > 0$ is the birth rate minus the death rate per individual per unit time. 

Because the natural environment has only a limited number of resources to sustain life, it is reasonable to assume that only a maximum population M can be accommodated. As the population approaches this limiting population or carrying capacity, resources become less abundant and the growth rate k decreases. A simple relationship exhibiting this behavior is 

$$
k = r (M - P),
$$

where $r > 0$ is a constant. Notice that k decreases as P increases toward M and that k is negative if $P$ is greater than M. Substituting $r ( M - P )$ for k in Equation (5) gives the differential equation 

$$
\frac {d P}{d t} = r (M - P) P = r M P - r P ^ {2}.\tag{6}
$$

The model given by Equation (6) is referred to as logistic growth. 

We can forecast the behavior of the population over time by analyzing the phase line for Equation (6). The equilibrium values are $P = M$ and $P = 0$ , and we can see that $d P / d t > 0 \mathrm { i f } 0 < P < M$ and $d P / d t < 0 ~ \mathrm { i f } ~ P > M$ . These observations are recorded on the phase line in Figure 16.24. 

We determine the concavity of the population curves by differentiating both sides of Equation (6) with respect to t: 

$$
\begin{array}{r l} \frac {d ^ {2} P}{d t ^ {2}} & = \frac {d}{d t} (r M P - r P ^ {2}) \\ & = r M \frac {d P}{d t} - 2 r P \frac {d P}{d t} \\ & = r (M - 2 P) \frac {d P}{d t}. \end{array}\tag{7}
$$

If $P = M / 2$ , then ${ d ^ { 2 } P } / { d t ^ { 2 } } = 0 . \mathrm { I f } P < M / 2$ , then $( M - 2 P )$ and $d P / d t$ are positive and $d ^ { 2 } P / d t ^ { 2 } > 0 . \mathrm { I f } M / 2 < P < M$ , then $( M \ - \ 2 P ) < 0 , d P / d t > 0$ , and $d ^ { 2 } P / d t ^ { 2 } < 0$ . If $P > M$ , then $( M - 2 P )$ and $d P / d t$ are both negative and $d ^ { 2 } P / d t ^ { 2 } > 0$ . We add this information to the phase line (Figure 16.25). 

The lines $P = M / 2$ and $P = M$ divide the first quadrant of the tP-plane into horizontal bands in which we know the signs of both $d P / d t$ and $d ^ { 2 } P / d t ^ { 2 }$ . In each band, we know how the solution curves rise and fall, and how they bend as time passes. The equilibrium lines $P = 0$ and $P = M$ are both population curves. Population curves crossing the line 

$P = M / 2$ have an inflection point there, giving them a sigmoid shape (curved in two directions like a letter S). Figure 16.26 displays typical population curves. Notice that each population curve approaches the limiting population M as $t  \infty$ 

![教材插图](/books/thomas-calculus/assets/28392fe3528f8329f772b779fd863ae73cbbf178dc06837927375a522aed9dd5.jpg)



FIGURE 16.26 Population curves for logistic growth.


### The Logistic Equation in Neural Networks and Machine Learning

While Figure 16.26 gives a general idea of the behavior of solutions to the Logistic Equation (6), we have not yet found explicit solutions. Exact formulas for solutions of first order differential equations cannot always be found, but they can be derived for the case of the Logistic Equation, where the solutions are called logistic functions. In Example 2 we find the solutions lying between $y = 0$ and $y = 1$ for the Logistic Equation in the case where $M = 1$ and r is an arbitrary positive constant. 

**EXAMPLE 2** Find the solutions to the Logistic Equation ${ \frac { d y } { d x } } = r y - r y ^ { 2 }$ that satisfy $0 \textless y \textless 1$ . Where does a solution cross the horizontal line $y = 1 / 2$ , and what is the slope of its graph at this point? 

**Solution** To solve the differential equation we use the method of separation of variables introduced in Section 7.2. 

$$
{\frac {d y}{d x}} = r y - r y ^ {2} = r y (1 - y)
$$

$$
{\frac {1}{y (1 - y)}} d y = r d x
$$

$$
\int {\frac {1}{y (1 - y)}} d y = \int r d x
$$

$$
\int {\frac {1}{y}} + \frac {1}{1 - y} d y = \int r d x
$$

Partial fractions 

$$
\ln y + C _ {1} - \ln (1 - y) + C _ {2} = r x + C _ {3}
$$

y y y y= − = −and 1 1 , since $0 ~ < ~ y ~ < ~ 1$ 

$$
\ln y - \ln (1 - y) = r x + C
$$

Combine constants, $C = C _ { 3 } - C _ { 1 } - C _ { 2 }$ 

$$
\ln \frac {y}{1 - y} = r x + C
$$

$$
\frac {y}{1 - y} = e ^ {r x + C}
$$

Exponentiate. 

$$
y = \frac {e ^ {r x + C}}{1 + e ^ {r x + C}}
$$

Use algebra to solve for y. 

$$
y = \frac {1}{1 + e ^ {- r x - C}}.
$$

Divide through by $e ^ { r x + C } .$ 

This gives an explicit formula for all the solutions whose graphs lie strictly between $y = 0$ and $y = 1$ 

When a solution crosses the line $y = 1 / 2$ we have 

$$
\begin{array}{c} \frac {1}{1 + e ^ {- r x - C}} = \frac {1}{2} \\ 1 + e ^ {- r x - C} = 2 \\ e ^ {- r x - C} = 1 \\ r x + C = 0 \\ x = - C / r. \end{array}
$$

So the solution graph crosses at the point $\left( - C / r , 1 / 2 \right)$ . The slope is found by evaluating $d y / d x = r y - r y ^ { 2 }$ at this point, 

$$
\frac {d y}{d x} (- C / r) = r y - r y ^ {2} = r (1 / 2) - r (1 / 2) ^ {2} = \frac {r}{4}.
$$

Figure 16.27 shows the graph of a logistic function with $r = 3$ and $C = - 6$ 

![教材插图](/books/thomas-calculus/assets/eb17ea68021b18af63efabeeca63ee037e7cbf7c803914012625a28d16f687b2.jpg)



FIGURE 16.27 The constants r and C determine the steepness and horizontal displacement of a solution to the logistic equation. In this example $r = 3$ and $C = - 6$


Logistic functions have applications in many areas beyond the study of population growth. A field of Computer Science called Machine Learning develops methods to use a large collection of experimental data, called a training set, to construct a predictor function. The training set might consist of thousands of images of signs, for example, and the predictor function might decide whether a newly obtained image represents a Stop sign. 

One highly successful approach to Machine Learning is the method of Neural Networks, which creates predictor functions based on a model of interacting neurons. Neural network models are built by taking repeated compositions of linear and logistic functions. Linear functions, such as $L ( x ) = a x + b$ can give accurate approximations of a function f nearby to a point where f is differentiable, as seen in Chapter 3. The optimal choices for the constants a and b in $L ( x )$ are found by minimizing an error function that is calculated using the training set in a process called linear regression. Logistic functions have several features that make them a useful complement to linear functions in constructing predictor functions. They have values lying between 0 and 1 and are well suited to modeling probabilities. They are differentiable and specified by a small number of constants, such as the constants r and C in Example 2. These constants can be adjusted, or tuned, to minimize the error of a prediction. Logistic functions are nonlinear, and taking compositions of linear and logistic functions allows for the approximation of much more complicated functions than linear functions alone. A more complete discussion of the utility of logistic functions involves multivariable functions and their derivatives, which are introduced in Chapter 13. 

### Exercises 16.4


#### Phase Lines and **Solution** Curves

In Exercises 1–8, 

a. Identify the equilibrium values. Which are stable and which are unstable? 

b. Construct a phase line. Identify the signs of y′ and $y ^ { \prime \prime } .$ 

c. Sketch several solution curves. 

1. $\frac {d y}{d x} = (y + 2) (y - 3) \quad \mathbf {2 .} \frac {d y}{d x} = y ^ {2} - 4$

3. $\frac {d y}{d x} = y ^ {3} - y$

4. $\frac {d y}{d x} = y ^ {2} - 2 y$

5. $y ^ {\prime} = \sqrt {y}, \quad y > 0$

6. $y ^ {\prime} = y - \sqrt {y}, \quad y > 0$

7. $y ^ {\prime} = (y - 1) (y - 2) (y - 3) \quad 8. y ^ {\prime} = y ^ {3} - y ^ {2}$

9. $\frac {d P}{d t} = 1 - 2 P$

10. $\frac {d P}{d t} = P (1 - 2 P)$

11. $\frac {d P}{d t} = 2 P (P - 3)$

12. $\frac {d P}{d t} = 3 P (1 - P) \left(P - \frac {1}{2}\right)$

13. Catastrophic change in logistic growth Suppose that a healthy population of some species is growing in a limited environment and that the current population $P _ { 0 }$ is fairly close to the carrying capacity $M _ { 0 } .$ You might imagine a population of fish living in a freshwater lake in a wilderness area. Suddenly a catastrophe such as the Mount St. Helens volcanic eruption contaminates the lake and destroys a significant part of the food and oxygen on which the fish depend. The result is a new environment with a carrying capacity $M _ { 1 }$ considerably less than $M _ { 0 }$ and, in fact, less than the current population $P _ { 0 } .$ Starting at some time before the catastrophe, sketch a “before-and-after” curve that shows how the fish population responds to the change in environment. 

14. Controlling a population The fish and game department in a certain state is planning to issue hunting permits to control the deer population (one deer per permit). It is known that if the deer population falls below a certain level m, the deer will become extinct. It is also known that if the deer population rises above the carrying capacity M, the population will decrease back to M through disease and malnutrition. 

a. Discuss the reasonableness of the following model for the growth rate of the deer population as a function of time: 

$$
\frac {d P}{d t} = r P (M - P) (P - m),
$$

where $P$ is the population of the deer and r is a positive con stant of proportionality. Include a phase line. 

b. Explain how this model differs from the logistic model $d P / d t = r P ( M - P )$ . Is it more or less reasonable than the logistic model? 

c. Show that if $P > M$ for all t, then lim $\begin{array} { r } { P ( t ) = M . } \end{array}$ 

d. What happens if $P \ <$ m for all t? 

e. Discuss the solutions to the differential equation. What are the equilibrium points of the model? Explain the dependence of the steady-state value of P on the initial values of P. About how many permits should be issued? 

#### Applications and Examples

15. Skydiving If a body of mass m falling from rest under the action of gravity encounters an air resistance proportional to the square of velocity, then the body’s velocity t seconds into the fall satisfies the equation 

$$
m \frac {d v}{d t} = m g - k v ^ {2}, \quad k > 0,
$$

where k is a constant that depends on the body’s aerodynamic properties and the density of the air. (We assume that the fall is too short to be affected by changes in the air’s density.) 

a. Draw a phase line for the equation. 

b. Sketch a typical velocity curve. 

c. For a 45-kg skydiver $( m g = 4 4 1 )$ ) and with time in seconds and distance in meter, a typical value of k is 0.15. What is the diver’s terminal velocity? Repeat for an 80-kg skydiver. 

#### Models of Population Growth

The autonomous differential equations in Exercises 16–12 represent models for population growth. For each exercise, use a phase line analysis to sketch solution curves for $P ( t ) ,$ selecting different starting values P(0). Which equilibria are stable, and which are unstable? 

16. Resistance proportional to $\sqrt { v }$ A body of mass m is projected vertically downward with initial velocity $v _ { 0 } .$ Assume that the resisting force is proportional to the square root of the velocity, and find the terminal velocity from a graphical analysis. 

17. Sailing A sailboat is running along a straight course with the wind providing a constant forward force of 200 N. The only other force acting on the boat is resistance as the boat moves through the water. The resisting force is numerically equal to five times the boat’s speed, and the initial velocity is $1 \mathrm { m / s } .$ What is the maximum velocity in meters per second of the boat under this wind? 

18. The spread of information Sociologists recognize a phenomenon called social diffusion, which is the spreading of a piece of information, technological innovation, or cultural fad among a population. The members of the population can be divided into two classes: those who have the information and those who do not. In a fixed population whose size is known, it is reasonable to assume that the rate of diffusion is proportional to the number who have the information times the number yet to receive it. If X denotes the number of individuals who have the information in a population of N people, then a mathematical model for social diffusion is given by 

$$
\frac {d X}{d t} = k X (N - X),
$$

where t represents time in days and k is a positive constant. 

a. Discuss the reasonableness of the model. 

b. Construct a phase line identifying the signs of $X ^ { \prime }$ and $X ^ { \prime \prime } .$ 

c. Sketch representative solution curves. 

d. Predict the value of X for which the information is spreading most rapidly. How many people eventually receive the information? 

19. Current in an RL circuit The accompanying diagram represents an electrical circuit whose total resistance is a constant R ohms and whose self-inductance, shown as a coil, is L henries, also a constant. There is a switch whose terminals at a and b can be closed to connect a constant electrical source of V volts. From Section 16.2, we have 

$$
L \frac {d i}{d t} + R i = V,
$$

where i is the current in amperes and t is the time in seconds. 

![教材插图](/books/thomas-calculus/assets/349abd01da517b15f2484545f960d03def1f0869c5397f62f5af8844b8331b99.jpg)


Use a phase line analysis to sketch the solution curve assuming that the switch in the RL circuit is closed at time $t = 0$ . What happens to the current as $t  \infty ?$ This value is called the steadystate solution. 

20. A pearl in shampoo Suppose that a pearl is sinking in a thick fluid, like shampoo, subject to a frictional force opposing its fall and proportional to its velocity. Suppose that there is also a resistive buoyant force exerted by the shampoo. According to Archimedes’ principle, the buoyant force equals the weight of the fluid displaced by the pearl. Using m for the mass of the pearl and P for the mass of the shampoo displaced by the pearl as it descends, complete the following steps. 

a. Draw a schematic diagram showing the forces acting on the pearl as it sinks, as in Figure 16.20. 

b. Using υ( )t for the pearl’s velocity as a function of time t, write a differential equation modeling the velocity of the pearl as a falling body. 

c. Construct a phase line displaying the signs of $v ^ { \prime }$ and $v ^ { \prime \prime } .$ 

d. Sketch typical solution curves. 

e. What is the terminal velocity of the pearl? 

#### Logistic Functions

21. Write the formula for a logistic function that has values between $y = 0$ and $y = 1 ,$ , crosses the line $y = 1 / 2$ at $x = 0 .$ , and has slope 5 at this point. 

22. Write the formula for a logistic function that has values between $y = 0$ and $y = 1 ,$ , crosses the line $y = 1 / 2$ at $x = 0$ , and has slope $1 / 5$ at this point. 

#### Systems of Equations and Phase Planes

In some situations we are led to consider not one, but several, first-order differential equations. Such a collection is called a system of differential equations. In this section we present an approach to understanding systems through a graphical procedure known as a phase-plane analysis. We present this analysis in the context of modeling the populations of trout and bass living in a common pond. 

#### Phase Planes

A general system of two first-order differential equations may take the form 

$$
\frac {d x}{d t} = F (x, y),
$$

$$
{\frac {d y}{d t}} = G (x, y).
$$

In this system we often think of t as representing time and take $x ( t )$ and y t( ) to be two functions of t. Such a system of equations is called autonomous because $d x / d t$ and $d y / d t$ do not depend on the independent variable time t, but only on the dependent variables x and y. A solution of such a system consists of a pair of functions x( ) and t y t( ) that satisfies both of the differential equations simultaneously for every t over some time interval (finite or infinite). 

We cannot look at just one of these equations in isolation to find solutions $x ( t )$ or y t( ) since each derivative depends on both x and y. To gain insight into the solutions, we look at both dependent variables together by plotting the points $\left( x ( t ) , y ( t ) \right)$ in the xy-plane starting at some specified point. Therefore the solution functions define a solution curve through the specified point, called a trajectory of the system. The xy-plane itself, in which these trajectories reside, is referred to as the phase plane. Thus we consider both solutions together and study the behavior of all the solution trajectories in the phase plane. It can be proved that two trajectories can never cross or touch each other. (**Solution** trajectories are examples of parametric curves, which will be examined in detail in Chapter 9.) 

#### A Competitive-Hunter Model

Imagine two species of fish, say trout and bass, competing for the same limited resources (such as food and oxygen) in a certain pond. We let x( ) represent the number of trout andt y t( ) the number of bass living in the pond at time t. In reality, x( ) and t y t( ) are always integer valued, but we will approximate them with real-valued differentiable functions. This allows us to apply the methods of differential equations. 

Several factors affect the rates of change of these populations. As time passes, each species breeds, so we assume its population increases proportionally to its size. Taken by itself, this would lead to exponential growth in each of the two populations. However, there is a countervailing effect from the fact that the two species are in competition. A large number of bass tends to cause a decrease in the number of trout, and vice versa. Our model takes the size of this effect to be proportional to the frequency with which the two species interact, which in turn is proportional to xy, the product of the two populations. These considerations lead to the following model for the growth of the trout and bass in the pond: 

$$
{\frac {d x}{d t}} = (a - b y) x,\tag{1a}
$$

$$
{\frac {d y}{d t}} = (m - n x) y.\tag{1b}
$$

Here $x ( t )$ represents the trout population, $y ( t )$ the bass population, and $a , b ,$ m, n are positive constants. A solution of this system then consists of a pair of functions $x ( t )$ and y t( ) that give the population of each fish species at time t. Each equation in (1) contains both of the unknown functions x and y, so we are unable to solve them individually. Instead, we will use a graphical analysis to study the solution trajectories of this competitive-hunter model. 

We now examine the nature of the phase plane in the trout-bass population model. We will be interested in the 1st quadrant of the xy-plane, where $x \ge 0$ and $y \geq 0$ , since populations cannot be negative. First, we determine where the bass and trout populations are both constant. Noting that the $\left( x ( t ) , y ( t ) \right)$ values remain unchanged when $d x / d t = 0$ and ${ d y } / { d t } = 0$ , we see that Equations (1a and 1b) then become 

$$
\begin{array}{l} (a - b y) x = 0, \\ (m - n x) y = 0. \end{array}
$$

This pair of simultaneous equations has two solutions: $( x , y ) = ( 0 , 0 )$ and $( x , y ) = ( m / n , a / b )$ . At these $( x , y )$ values, called equilibrium or rest points, the two populations remain at constant values over all time. The point (0, 0 represents a pond) containing no members of either fish species; the point $( m / n , a / b )$ corresponds to a pond with an unchanging number of each fish species. 

Next, we note that if $y = a / b$ , then Equation (1a) implies $d x / d t = 0$ , so the trout population x( ) is constant. Similarly, ift $x = m / n$ , then Equation (1b) implies $d y / d t = 0$ and the bass population y t( ) is constant. This information is recorded in Figure 16.28. 

![教材插图](/books/thomas-calculus/assets/566ff14aeaddec5e768d64c312ac49878bdfc0c66f47e2f1ad76110f27711818.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/327ae6ad70adae7bd1be3826e560233bdd665acf8badb69a29da7b37e785b385.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/99291bb3625bf21dc7509c85db586655f01a15ad6cd6d22bd7a150bb7707844f.jpg)



(c)



FIGURE 16.28 Rest points in the competitive-hunter model given by Equations (1a) and (1b).


![教材插图](/books/thomas-calculus/assets/f441654eeded363d4f949ec1ed23e32c7f855ab0670caedc045067483cee8320.jpg)



FIGURE 16.29 To the left of the line $x = m / n$ the trajectories move upward, and to the right they move downward.


![教材插图](/books/thomas-calculus/assets/295fd03429cc3d5841b5aa70f8fde3254e5eb1826d0992f288cf77630ff5e91d.jpg)



FIGURE 16.30 Above the line $y = a / b$ the trajectories move to the left, and below it they move to the right.


![教材插图](/books/thomas-calculus/assets/d9e3242bee74a58ab0f01f24a64b0cb3c5fe1ada2f64b3fb4baab4e7e9ff4dd5.jpg)



FIGURE 16.31 Composite graphical analysis of the trajectory directions in the four regions determined by $x = m / n$ and $y = a / b$


In setting up our competitive-hunter model, we do not generally know precise values of the constants a, b, m, n. Nonetheless, we can analyze the system of Equations (1) to learn the nature of its solution trajectories. We begin by determining the signs of $d x / d t$ and $d y / d t$ throughout the phase plane. Although $x ( t )$ represents the number of trout and $y ( t )$ the number of bass at time t, we are thinking of the pair of values $\left( x ( t ) , y ( t ) \right)$ as a point tracing out a trajectory curve in the phase plane. When $d x / d t$ is positive, x( ) is increasingt and the point is moving to the right in the phase plane. If $d x / d t$ is negative, the point is moving to the left. Likewise, the point is moving upward where $d y / d t$ is positive and downward where $d y / d t$ is negative. 

We saw that $d y / d t = 0$ along the vertical line $x = m / n$ . To the left of this line, $d y / d t$ is positive since $d y / d t = ( m - n x ) .$ y  and $x < m / n$ . So the trajectories on this side of the line are directed upward. To the right of this line, $d y / d t$ is negative and the trajectories point downward. The directions of the associated trajectories are indicated in Figure 16.29. Similarly, above the horizontal line $y = a / b$ , we have $d x / d t < 0$ and the trajectories head leftward; below this line they head rightward, as shown in Figure 16.30. Combining this information gives four distinct regions in the plane $A , B , C , D _ { \mathrm { { i } } }$ , with their respective trajectory directions shown in Figure 16.31. 

Next, we examine what happens near the two equilibrium points. The trajectories near $( 0 , 0 )$ point away from it, upward and to the right. The behavior near the equilibrium point $( m / n , a / b )$ depends on the region in which a trajectory begins. If it starts in region $B ,$ for instance, then it will move downward and leftward toward the equilibrium point. Depending on where the trajectory begins, it may move downward into region $D ,$ leftward into region $A ,$ or perhaps straight into the equilibrium point. If it enters into regions A or $D ,$ then it will continue to move away from the rest point. We say that both rest points are unstable, meaning (in this setting) there are trajectories near each point that head away from them. These features are indicated in Figure 16.32. 

It turns out that in each of the half-planes above and below the line $y = a / b$ , there is exactly one trajectory approaching the equilibrium point $( m / n , a / b )$ (see Exercise $^ { 7 ) }$ Above these two trajectories the bass population increases, and below them it decreases. The two trajectories approaching the equilibrium point are suggested in Figure 16.33. 

![教材插图](/books/thomas-calculus/assets/883e27cbe596ee9d78cdad1c92b639c7ce4c925518ba1b5170c6cba79bbedb0a.jpg)


![教材插图](/books/thomas-calculus/assets/2362ea5f564971ec77b93929cae2e9880bf6620cd9cf1ef7c1a7ca986f9a9fff.jpg)



FIGURE 16.32 Motion along the trajectories near the rest points (0, 0) and $( m / n , a / b )$ .



FIGURE 16.33 Qualitative results of analyzing the competitive-hunter model. There are exactly two trajectories approaching the point $( m / n , a / b )$


Our graphical analysis leads us to conclude that, under the assumptions of the competitivehunter model, it is unlikely that both species will reach equilibrium levels. This is because it would be almost impossible for the fish populations to move exactly along one of the two approaching trajectories for all time. Furthermore, the initial populations point $\left( x _ { 0 } , y _ { 0 } \right)$ determines which of the two species is likely to survive over time, and mutual coexistence of the species is highly improbable. 

![教材插图](/books/thomas-calculus/assets/e018215feb95626c18dbb92e691276dec731e5b6beb294db50b3b2609926cda3.jpg)


#### Limitations of the Phase-Plane Analysis Method


FIGURE 16.34 Trajectory direction near the rest point ( 0, 0 .)



Unlike the situation for the competitive-hunter model, it is not always possible to determine the behavior of trajectories near a rest point. For example, suppose we know that the trajectories near a rest point, chosen here to be the origin (0, 0 , behave as in Figure 16.34.) The information provided by Figure 16.34 is not sufficient to distinguish among the three possible trajectories shown in Figure 16.35. Even if we could determine that a trajectory near an equilibrium point resembles that of Figure 16.35c, we would still not know how the other trajectories behave. It could happen that a trajectory closer to the origin behaves like the motions displayed in Figure 16.35a or 16.35b. The spiraling trajectory in Figure 16.35c can never actually reach the rest point in a finite time period.


![教材插图](/books/thomas-calculus/assets/d10269fc3f7ef1106b2df936423b4abc5002a166cca6962b69852ae37d3b2373.jpg)


![教材插图](/books/thomas-calculus/assets/c6680f03dd317a8ff32d2358ee3b46427cf5281a17b0ed7556dabc8e53d79f7d.jpg)


![教材插图](/books/thomas-calculus/assets/a7fddbe91ae1e464c64617922b6586189dcd0590067f208e7209950bff748b04.jpg)



FIGURE 16.35 Three possible trajectory motions: (a) periodic motion, (b) motion toward an asymptotically stable rest point, and (c) motion near an unstable rest point.


#### Another Type of Behavior

![教材插图](/books/thomas-calculus/assets/122bb723eebac62445489950e0e9d623f7f9aec83aae2e8bd44c16f2740c5eb3.jpg)


The system 

$$
{\frac {d x}{d t}} = y + x - x (x ^ {2} + y ^ {2}),
$$


FIGURE 16.36 The solution $x ^ { 2 } + y ^ { 2 } = 1$ is a limit cycle.


$$
\frac {d y}{d t} = - x + y - y \left(x ^ {2} + y ^ {2}\right)\tag{2a}
$$

(2b) 

can be shown to have only one equilibrium point at (0, 0 . Yet any trajectory starting on the) unit circle traverses it clockwise because, when $x ^ { 2 } + y ^ { 2 } = 1 ;$ , we have $d y / d x = - x / y$ (see Exercise 2). If a trajectory starts inside the unit circle, it spirals outward, asymptotically approaching the circle as $t  \infty$ . If a trajectory starts outside the unit circle, it spirals inward, again asymptotically approaching the circle as $t  \infty$ . The circle $x ^ { 2 } + y ^ { 2 } = 1$ is called a limit cycle of the system (Figure 16.36). In this system, the values of x and y eventually become periodic. 

### Exercises 16.5


1. List three of the important considerations that are ignored in the competitive-hunter model as presented in the text. 

2. For the system (2a) and (2b), show that any trajectory starting on the unit circle $x ^ { 2 } + y ^ { 2 } = 1$ will traverse the unit circle in a periodic solution. First introduce polar coordinates and rewrite the system as $d r / d t = r ( 1 - r ^ { 2 } ) \mathrm { a n d } - d \theta / d t = - 1$ 

3. Develop a model for the growth of trout and bass, assuming that in isolation trout demonstrate exponential decay [so that $a < 0$ in Equations (1a) and (1b)] and that the bass population grows logistically with a population limit M. Analyze graphically the motion in the vicinity of the rest points in your model. Is coexistence possible? 

4. How might the competitive-hunter model be validated? Include a discussion of how the various constants a, $b , m ,$ and n might be estimated. How could state conservation authorities use the model to ensure the survival of both species? 

5. Consider another competitive-hunter model defined by 

$$
\frac {d x}{d t} = a \left(1 - \frac {x}{k _ {1}}\right) x - b x y,
$$

$$
\frac {d y}{d t} = m \left(1 - \frac {y}{k _ {2}}\right) y - n x y,
$$

where x and y represent trout and bass populations, respectively. 

a. What assumptions are implicitly being made about the growth of trout and bass in the absence of competition? 

b. Interpret the constants a, b, m, $n , k _ { 1 } , k _ { 2 } , a / b$ ,  and m n in terms of the physical problem. 

c. Perform a graphical analysis: 

i) Find the possible equilibrium levels. 

ii) Determine whether coexistence is possible. 

iii) Pick several typical starting points, and sketch typical trajectories in the phase plane. 

iv) Interpret the outcomes predicted by your graphical analysis in terms of the constants $a , b , m , n , k _ { 1 }$ ,  and $k _ { 2 }$ 

Note: When you get to part (iii), you should realize that five cases exist. You will need to analyze all five cases. 

6. An economic model Consider the following economic model. Let P be the price of a single item on the market. Let $\boldsymbol { Q }$ be the quantity of the item available on the market. Both P and Q are functions of time. If one considers price and quantity as two interacting species, the following model might be proposed: 

$$
\begin{array}{l} \frac {d P}{d t} = a P \bigg (\frac {b}{Q} - P \bigg), \\ \frac {d Q}{d t} = c Q (f P - Q), \end{array}
$$

where $a , b , c ,$ and f are positive constants. Justify and discuss the adequacy of the model. 

a. If $a = 1 , b = 2 0 , 0 0 0 , c = 1 ,$ and $f = 3 0$ , find the equilibrium points of this system. If possible, classify each equilibrium point with respect to its stability. If a point cannot be readily classified, give some explanation. 

b. Perform a graphical stability analysis to determine what will happen to the levels of P and Q as time increases. 

c. Give an economic interpretation of the curves that determine the equilibrium points. 

7. Two trajectories approach equilibrium Show that the two trajectories leading to $( m / n , a / b )$ shown in Figure 16.33 are unique by carrying out the following steps. 

a. From system (1a) and (1b) apply the Chain Rule to derive the following equation: 

$$
\frac {d y}{d x} = \frac {(m - n x) y}{(a - b y) x}.
$$

b. Separate the variables, integrate, and exponentiate to obtain 

$$
y ^ {a} e ^ {- b y} = K x ^ {m} e ^ {- n x},
$$

where K is a constant of integration. 

c. Let $f ( y ) = y ^ { a } / e ^ { b y }$ and $g ( x ) = x ^ { m } / e ^ { n x }$ . Show that $f ( y )$ has a unique maximum of $M _ { \mathrm { v } } = ( a / e b ) ^ { a }$ when $y = a / b$ as shown in Figure 16.37. Similarly, show that g x( ) has a unique maximum $M _ { x } = \left( m / e n \right) ^ { m }$ when $x = m / n$ , also shown in Figure 16.37. 

![教材插图](/books/thomas-calculus/assets/ad7b6a0e9162c5f410f3d5f906bc8d66b7757ad51fd11afc4d35cff02dab62f4.jpg)


![教材插图](/books/thomas-calculus/assets/e189fb443169776576d4628bd44f92b08789ae8b620fea521e89a672f974b3ed.jpg)



FIGURE 16.37 Graphs of the functions $f ( y ) = y ^ { a } / e ^ { b y }$ and $g ( x ) = x ^ { m } / e ^ { n x }$


d. Consider what happens as $( x , y )$ approaches $( m / n , a / b )$ Take limits in part (b) as x → m n and $y  a / b$ to show that either 

$$
\lim_{\substack{x\to m / n\\ y\to a / b}}\Bigl [\Big(\frac{y^{a}}{e^{by}}\Bigr)\Big(\frac{e^{nx}}{x^{m}}\Bigr)\Bigr ] = K
$$

or $M _ { v } / M _ { x } = K$ . Thus any solution trajectory that approaches $( m / n , a / b )$ must satisfy) 

$$
\frac {y ^ {a}}{e ^ {b y}} = \left(\frac {M _ {y}}{M _ {x}}\right) \left(\frac {x ^ {m}}{e ^ {n x}}\right).
$$

e. Show that only one trajectory can approach $( m / n , a / b )$ from below the line $y = a / b$ . Pick $y _ { 0 } < a / b$ . From Figure 16.37 you can see that $f ( y _ { 0 } ) < M _ { \mathrm { v } }$ ,  which implies that 

$$
\frac {M _ {y}}{M _ {x}} \left(\frac {x ^ {m}}{e ^ {n x}}\right) = y _ {0} ^ {a} / e ^ {b y _ {0}} <   M _ {y}.
$$

This in turn implies that 

$$
\frac {x ^ {m}}{e ^ {n x}} <   M _ {x}.
$$

Figure 16.37 tells you that for $g ( x )$ there is a unique value $x _ { 0 } < m / r$ n satisfying this last inequality. That is, for each $y < a / b$ there is a unique value of x satisfying the equation in part (d). Thus there can exist only one trajectory solution approaching $( m / n , a / b )$ from below, as shown in Figure 16.38. 

f. Use a similar argument to show that the solution trajectory leading to $( m / n , a / b )$ is unique if $y _ { 0 } > a / b$ 

![教材插图](/books/thomas-calculus/assets/32937f9b0b78f27a91e448ff2ddf5319d4892c73f85c4fa974ab898b8c2774b4.jpg)



FIGURE 16.38 For any $y < a / b$ , only one solution trajectory leads to the rest point $( m / n , a / b )$


8. Show that the second-order differential equation $y ^ { \prime \prime } = F ( x , y , y ^ { \prime } )$ can be reduced to a system of two first-order differential equations 

$$
\begin{array}{l} \frac {d y}{d x} = z, \\ \frac {d z}{d x} = F (x, y, z). \end{array}
$$

Can something similar be done to the nth-order differential equation $y ^ { ( n ) } = F { \bigl ( } x , y , y ^ { \prime } , y ^ { \prime \prime } , \ldots , y ^ { ( n - 1 ) } { \bigr ) } ^ { c }$ 6 

#### Lotka-Volterra Equations for a Predator-Prey Model

In 1925 Lotka and Volterra introduced the predator-prey equations, a system of equations that models the populations of two species, one of which preys on the other. Let x( ) represent the number of rabbitst living in a region at time t, and y t( ) the number of foxes in the same region. As time passes, the number of rabbits increases at a rate proportional to their population, and decreases at a rate proportional to the number of encounters between rabbits and foxes. The foxes, which compete for food, increase in number at a rate proportional to the number of encounters with rabbits but decrease at a rate proportional to the number of foxes. The number of encounters between rabbits and foxes is assumed to be proportional to the product of the two populations. These assumptions lead to the autonomous system 

$$
\begin{array}{l} \frac {d x}{d t} = (a - b y) x, \\ \frac {d y}{d t} = (- c + d x) y, \end{array}
$$

where $a , b , c , d$ are positive constants. The values of these constants vary according to the specific situation being modeled. We can study the nature of the population changes without setting these constants to specific values. 

9. What happens to the rabbit population if there are no foxes present? 

10. What happens to the fox population if there are no rabbits present? 

11. Show that (0, 0 and) $( c / d , a / b )$ are equilibrium points. Explain the meaning of each of these points. 

12. Show, by differentiating, that the function 

$$
C (t) = a \ln y (t) - b y (t) - d x (t) + c \ln x (t)
$$

is constant when x( ) and t y t( ) are positive and satisfy the predatorprey equations. 

While x and y may change over time, C t( ) does not. Thus, C is a conserved quantity and its existence gives a conservation law. A trajectory that begins at a point ( , ) at timex y $t = 0$ gives a value of C that remains unchanged at future times. Each value of the constant C gives a trajectory for the autonomous system, and these trajectories close up, rather than spiraling inward or outward. The rabbit and fox populations oscillate through repeated cycles along a fixed trajectory. Figure 16.39 shows several trajectories for the predator-prey system. 

![教材插图](/books/thomas-calculus/assets/96a727788a8d99fcf8c993eabfc2425af403595a64a996744f7055f44a4980cb.jpg)



FIGURE 16.39 Some trajectories along which C is conserved.


13. Using a procedure similar to that in the text for the competitivehunter model, show that each trajectory is traversed in a counterclockwise direction as time t increases. 

Along each trajectory, both the rabbit and fox populations fluctuate between their maximum and minimum levels. The maximum and minimum levels for the rabbit population occur where the trajectory intersects the horizontal line $y = a / b$ . For the fox population, they occur where the trajectory intersects the vertical line $x = c / d $ When the rabbit population is at its maximum, the fox population is below its maximum value. As the rabbit population declines from this point in time, we move counterclockwise around the trajectory, and the fox population grows until it reaches its maximum value. At this point the rabbit population has declined to $x = c / d$ and is no longer at its peak value. We see that the fox population reaches its maximum value at a later time than the rabbits. The predator population lags behind that of the prey in achieving its maximum values. This lag effect is shown in Figure 16.40, which graphs both x( ) and t y t( ). 

![教材插图](/books/thomas-calculus/assets/20aaec5c0c2160842c8d99713902dbc97a6a1c8256e554cdc1a1f089cad2cff4.jpg)



FIGURE 16.40 The fox and rabbit populations oscillate periodically, with the maximum fox population lagging the maximum rabbit population.


## CHAPTER 16 Questions to Guide Your Review

1. What is a first-order differential equation? When is a function a solution of such an equation? 

14. At some time during a trajectory cycle, a wolf invades the rabbit– fox territory, eats some rabbits, and then leaves. Does this mean that the fox population will from then on have a lower maximum value? Explain your answer. 

2. What is a general solution? What is a particular solution? 

3. What is the slope field of a differential equation $y ^ { \prime } = f ( x , y ) ?$ What can we learn from such fields? 

4. Describe Euler’s method for solving the initial value problem $y ^ { \prime } = f ( x , y ) , y ( x _ { 0 } ) = y _ { 0 }$ numerically. Give an example. Comment on the method’s accuracy. Why might you want to solve an initial value problem numerically? 

5. How do you solve linear first-order differential equations? 

6. What is an orthogonal trajectory of a family of curves? Describe how one is found for a given family of curves. 

7. What is an autonomous differential equation? What are its equilibrium values? How do they differ from critical points? What is a stable equilibrium value? Unstable? 

8. How do you construct the phase line for an autonomous differential equation? How does the phase line help you produce a graph that qualitatively depicts a solution to the differential equation? 

9. Why is the exponential model unrealistic for predicting long-term population growth? How does the logistic model correct for the deficiency in the exponential model for population growth? What is the logistic differential equation? What is the form of its solution? Describe the graph of the logistic solution. 

10. What is an autonomous system of differential equations? What is a solution to such a system? What is a trajectory of the system? 

## CHAPTER 16 Practice Exercises

In Exercises 1–22, solve the differential equation. 

1. $y ^ { \prime } = x e ^ { y } { \sqrt { x - 2 } }$ 

2. $y ^ { \prime } = x y e ^ { x ^ { 2 } }$ 

3. $\sec x d y + x \cos ^ { 2 } y d x = 0$ 

4. $2 x ^ { 2 } d x - 3 { \sqrt { y } } \csc x d y = 0$ 

5. $y ^ { \prime } = { \frac { e ^ { y } } { x y } }$ 

6. $y ^ { \prime } = x e ^ { x - y } \csc y$ 

7. $x ( x - 1 ) d y - y d x = 0$ 

8. $y ^ { \prime } = ( y ^ { 2 } - 1 ) x ^ { - 1 }$ 

9. $2 y ^ { \prime } - y = x e ^ { x / 2 }$ 

10. ${ \frac { y ^ { \prime } } { 2 } } + y = e ^ { - x } \sin x$ 

11. $x y ^ { \prime } + 2 y = 1 - x ^ { - 1 }$ 

12. $x y ^ { \prime } - y = 2 x \ln x$ 

13. $( 1 + e ^ { x } ) d y + \left( y e ^ { x } + e ^ { - x } \right) d x = 0$ 

14. $e ^ { - x } d y + ( e ^ { - x } y - 4 x ) d x = 0$ 

15. $( x + 3 y ^ { 2 } ) d y + y d x = 0 ( H i n t \colon d ( x y ) = y d x + x d y )$ 

16. $x d y + \left( 3 y - x ^ { - 2 } \cos x \right) d x = 0 , x > 0$ 

17. $y ^ { \prime } = \sin ^ { 3 } x \cos ^ { 2 } y$ 

18. $x d y - ( x ^ { 4 } - y ) d x = 0$ 

$$
d y + x \left(2 y - e ^ {x - x ^ {2}}\right) d x = 0 \quad \mathbf {2 0}. y ^ {\prime} + 3 x ^ {2} y = 7 x ^ {2}
$$

21. $y ^ { \prime } = x y \ln x \ln y$ 

22. $x y ^ { \prime } + 2 y \ln x = \ln x$ 

Initial Value Problems 

In Exercises 23–28, solve the initial value problem. 

23. $( x + 1 ) \frac { d y } { d x } + 2 y = x , x > - 1 , y ( 0 ) = 1$ 

24. $x \frac { d y } { d x } + 2 y = x ^ { 2 } + 1 , x > 0 , y ( 1 ) = 1$ 

25. ${ \frac { d y } { d x } } + 3 x ^ { 2 } y = x ^ { 2 } , ~ y ( 0 ) = - 1$ 

26. $x d y + ( y - \cos x ) d x = 0 , y \Big ( \frac { \pi } { 2 } \Big ) = 0$ 

27. $x y ^ { \prime } + ( x - 2 ) y = 3 x ^ { 3 } e ^ { - x } , y ( 1 ) = 0$ 

$$
y d x + (3 x - x y + 2) d y = 0, \quad y (2) = - 1, \quad y <   0
$$

Euler’s Method 

In Exercises 29 and 30, use Euler’s method to solve the initial value problem on the given interval starting at $x _ { 0 }$ with dx = 0.1. 

29.T $y ^ { \prime } = y + \cos x , y ( 0 ) = 0 ; 0 \leq x \leq 2 ; x _ { 0 } = 0$ 

30.T $y ^ { \prime } = ( 2 - y ) ( 2 x + 3 ) , y ( - 3 ) = 1 ; - 3 \leq x \leq - 1 ; x _ { 0 } = - 3$ 

In Exercises 31 and 32, use Euler’s method with $d x = 0 . 0 5$ to estimate y c( ), where y is the solution to the given initial value problem. 

31.T $c = 3 ; ~ { \frac { d y } { d x } } = { \frac { x - 2 y } { x + 1 } } , ~ y ( 0 ) = 1$ 

32.T $c = 4 ; \frac { d y } { d x } = \frac { x ^ { 2 } - 2 y + 1 } { x } , y ( 1 ) = 1$ 

In Exercises 33 and 34, use Euler’s method to solve the initial value problem graphically, starting at $x _ { 0 } = 0$ with 

a. $d x = 0 . 1 .$ 

$$
\mathbf {b}. d x = - 0. 1.
$$

33.T ${ \frac { d y } { d x } } = { \frac { 1 } { e ^ { x + y + 2 } } } , y ( 0 ) = - 2$ 

34.T ${ \frac { d y } { d x } } = - { \frac { x ^ { 2 } + y } { e ^ { y } + x } } , \ y ( 0 ) = 0$ 

### Slope Fields

In Exercises 35–38, sketch part of the equation’s slope field. Then add to your sketch the solution curve that passes through the point $P ( 1 , - 1 )$ . Use Euler’s method with $x _ { 0 } = 1$ and $d x = 0 . 2$ to estimate y(2). Round your answers to four decimal places. Find the exact value of y(2) for comparison. 

35. $y ^ { \prime } = x$ 

37. $y ^ { \prime } = x y$ 

$$
\begin{array}{l} \textbf {3 6 . y ^ {\prime} = 1 / x} \\ \textbf {3 8 . y ^ {\prime} = 1 / y} \end{array}
$$

Autonomous Differential Equations and Phase Lines In Exercises 39 and 40: 

a. Identify the equilibrium values. Which are stable and which are unstable? 

b. Construct a phase line. Identify the signs of y′ and $y ^ { \prime \prime } .$ 

c. Sketch a representative selection of solution curves. 

$$
3 9. \frac {d y}{d x} = y ^ {2} - 1
$$

$$
4 0. \frac {d y}{d x} = y - y ^ {2}
$$

### Applications

41. Escape velocity The gravitational attraction F exerted by an airless moon on a body of mass m at a distance s from the moon’s center is given by the equation $F = - m g R ^ { 2 } s ^ { - 2 }$ , where $g$ is the acceleration of gravity at the moon’s surface and R is the moon’s radius (see accompanying figure). The force F is negative because it acts in the direction of decreasing s. 

![教材插图](/books/thomas-calculus/assets/a7ee17d6b23eee7bddd0c99c0f9d65b0ae5295f9aa5b883f1428165e67b8bfb5.jpg)


a. If the body is projected vertically upward from the moon’s surface with an initial velocity $v _ { 0 }$ at time $t = 0$ , use Newton’s second law, $F = m a ,$ to show that the body’s velocity at position s is given by the equation 

$$
v ^ {2} = \frac {2 g R ^ {2}}{s} + v _ {0} ^ {2} - 2 g R.
$$

Thus, the velocity remains positive as long as $v _ { 0 } \geq \sqrt { 2 g R } .$ . The velocity $v _ { 0 } = \sqrt { 2 g R }$ is the moon’s escape velocity. A body projected upward with this velocity or a greater one will escape from the moon’s gravitational pull. 

b. Show that if $v _ { 0 } = \sqrt { 2 g R }$ ,  then 

$$
s = R \left(1 + \frac {3 v _ {0}}{2 R} t\right) ^ {2 / 3}.
$$

42. Coasting to a stop Table 16.6 shows the distance s (meters) coasted on inline skates in t s by Johnathon Krueger. Find a model for his position in the form of Equation (2) of Section 16.3. His initial velocity was $v _ { 0 } = 0 . 8 6 \mathrm { m } / \mathrm { s }$ , his mass $m = 3 0 . 8 4 \mathrm { k g }$ and his total coasting distance was 0.97 m. 


TABLE 16.6 Johnathon Krueger skating data


<table><tr><td>t(s)</td><td>s(m)</td><td>t(s)</td><td>s(m)</td><td>t(s)</td><td>s(m)</td></tr><tr><td>0</td><td>0</td><td>0.93</td><td>0.61</td><td>1.86</td><td>0.93</td></tr><tr><td>0.13</td><td>0.08</td><td>1.06</td><td>0.68</td><td>2.00</td><td>0.94</td></tr><tr><td>0.27</td><td>0.19</td><td>1.20</td><td>0.74</td><td>2.13</td><td>0.95</td></tr><tr><td>0.40</td><td>0.28</td><td>1.33</td><td>0.79</td><td>2.26</td><td>0.96</td></tr><tr><td>0.53</td><td>0.36</td><td>1.46</td><td>0.83</td><td>2.39</td><td>0.96</td></tr><tr><td>0.67</td><td>0.45</td><td>1.60</td><td>0.87</td><td>2.53</td><td>0.97</td></tr><tr><td>0.80</td><td>0.53</td><td>1.73</td><td>0.90</td><td>2.66</td><td>0.97</td></tr></table>

### Mixture Problems

In Exercises 43 and 44, let S represent the kilograms of salt in a tank at time t minutes. Set up a differential equation representing the given information and the rate at which S changes. Then solve for S and answer the particular questions. 

43. A mixture containing $\frac 1 4$ kg of salt per liter flows into a tank at the rate of 24 $\mathrm { L } / \mathrm { m i n } ,$ and the well-stirred mixture flows out of the tank at the rate of 16 L/min. The tank initially holds 600 liters of solution containing 6 kilograms of salt. 

a. How many liters of solution are in the tank after 1 minute? after 10 minutes? after 1 hour? 

b. How many kilograms of salt are in the tank after 1 minute? after 10 minutes? after 1 hour? 

44. Pure water flows into a tank at the rate of $1 6 \mathrm { L / m i n }$ , and the wellstirred mixture flows out of the tank at the rate of 20 L/min. The tank initially holds 800 liters of solution containing 25 kilograms of salt. 

a. How many liters of solution are in the tank after 1 minute? after 10 minutes? after 200 minutes? 

b. How many kilograms of salt are in the tank after 1 minute? after 30 minutes? 

c. When will the tank have exactly 5 kilograms of salt, and how many liters of solution will be in the tank? 

## CHAPTER 16 Additional and Advanced Exercises

### Theory and Applications

1. Transport through a cell membrane Under some conditions, the result of the movement of a dissolved substance across a cell’s membrane is described by the equation 

$$
\frac {d y}{d t} = k \frac {A}{V} (c - y).
$$

In this equation, y is the concentration of the substance inside the cell, and $d y / d t$ is the rate at which y changes over time. The letters $k , A , V ,$ and c stand for constants, k being the permeability coefficient (a property of the membrane), A the surface area of the membrane, V the cell’s volume, and c the concentration of the substance outside the cell. The equation says that the rate at which the concentration within the cell changes is proportional to the difference between it and the outside concentration. 

a. Solve the equation for $y ( t ) ,$ , using $y _ { 0 }$ to denote $y ( 0 )$ 

b. Find the steady-state concentration, lim $y ( t )$ 

2. Height of a rocket If an external force F acts upon a system whose mass varies with time, Newton’s law of motion is 

$$
\frac {d (m v)}{d t} = F + (v + u) \frac {d m}{d t}.
$$

In this equation, m is the mass of the system at time $t , \upsilon$ is its velocity, and $\upsilon + u$ is the velocity of the mass that is entering (or leaving) the system at the rate $d m / d t$ . Suppose that a rocket of initial mass $m _ { 0 }$ starts from rest, but is driven upward by firing some of its mass directly backward at the constant rate of $d m / d t = - b$ units per second and at constant speed relative to the rocket $u = - c .$ The only external force acting on the rocket is $F = - m g$ due to gravity. Under these assumptions, show that the height of the rocket above the ground at the end of t seconds (t small compared to $m _ { 0 } / b )$ is 

$$
y = c \left[ t + \frac {m _ {0} - b t}{b} \ln \frac {m _ {0} - b t}{m _ {0}} \right] - \frac {1}{2} g t ^ {2}.
$$

3. a. Assume that $P ( x )$ and $Q ( x )$ are continuous over the interval $[ a , b ]$ . Use the Fundamental Theorem of Calculus, Part 1, to show that any function y satisfying the equation 

$$
v (x) y = \int v (x) Q (x) d x + C
$$

for $v ( x ) = e ^ { \int P ( x ) d x }$ is a solution to the first-order linear equation 

$$
\frac {d y}{d x} + P (x) y = Q (x).
$$

b. If $\begin{array} { r } { { \bf \nabla } ^ { \prime } C = y _ { 0 } v ( x _ { 0 } ) - \int _ { x _ { 0 } } ^ { x } v ( t ) Q ( t ) d t } \end{array}$ , then show that any solution y in part (a) satisfies the initial condition $y ( x _ { 0 } ) = y _ { 0 }$ 

4. (Continuation of Exercise 3.) Assume the hypotheses of Exercise 3, and assume that $y _ { 1 } ( x )$ and $y _ { 2 } ( x )$ are both solutions to the first-order linear equation satisfying the initial condition $y ( x _ { 0 } ) = y _ { 0 } .$ 

a. Verify that $y ( x ) = y _ { 1 } ( x ) - y _ { 2 } ( x )$ satisfies the initial value problem 

$$
y ^ {\prime} + P (x) y = 0, \quad y (x _ {0}) = 0.
$$

b. For the integrating factor $v ( x ) = e ^ { \int P ( x ) d x }$ , show that 

$$
\frac {d}{d x} (v (x) [ y _ {1} (x) - y _ {2} (x) ]) = 0.
$$

Conclude that $v ( x ) [ y _ { 1 } ( x ) - y _ { 2 } ( x ) ] \equiv$ constant. 

c. From part (a), we have $y _ { 1 } ( x _ { 0 } ) - y _ { 2 } ( x _ { 0 } ) = 0$ . Since $v ( x ) > 0$ for a $< x < b .$ , use part (b) to establish that $y _ { 1 } ( x ) - y _ { 2 } ( x ) \equiv 0$ on the interval $( a , b )$ . Thus $y _ { 1 } ( x ) = y _ { 2 } ( x )$ for all $a < x < b .$ 

Homogeneous Equations 

A first-order diferential equation of the form 

$$
{\frac {d y}{d x}} = F \left({\frac {y}{x}}\right)
$$

is called homogeneous. It can be transformed into an equation whose variables are separable by defining the new variable $\upsilon = y / x$ . Then $y = v x$ and 

$$
\frac {d y}{d x} = v + x \frac {d v}{d x}.
$$

Substituting into the original diferential equation and collecting terms with like variables then give the separable equation 

$$
\frac {d x}{x} + \frac {d v}{v - F (v)} = 0.
$$

After solving this separable equation, we obtain the solution of the original equation when we replace υ by $y / x$ 

Solve the homogeneous equations in Exercises 5–10. First put the equation in the form of a homogeneous equation. 

5. $(x ^ {2} + y ^ {2}) d x + x y d y = 0$

$$
x ^ {2} d y + (y ^ {2} - x y) d x = 0
$$

$$
7. (x e ^ {y / x} + y) d x - x d y = 0
$$

$$
(x + y) d y + (x - y) d x = 0
$$

$$
y ^ {\prime} = \frac {y}{x} + \cos \frac {y - x}{x}
$$

10. $\left(x \sin \frac {y}{x} - y \cos \frac {y}{x}\right) d x + x \cos \frac {y}{x} d y = 0$

## CHAPTER 16 Technology Application Projects

Mathematica/Maple Projects 

Projects can be found within MyLab Math. 

• Drug Dosages: Are They Effective? Are They Safe? Formulate and solve an initial value model for the absorption of a drug in the bloodstream. 

• First-Order Differential Equations and Slope Fields Plot slope fields and solution curves for various initial conditions to selected first-order differential equations. 

This page is intentionally left blank 
