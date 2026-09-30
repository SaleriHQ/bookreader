---
title: "Chapter 1: Functions"
order: 1
---

# Chapter 1: Functions

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 1.1 Functions and Their Graphs

Functions are a tool for describing the real world in mathematical terms. A function can be represented by an equation, a graph, a numerical table, or a verbal description; we will use all four representations throughout this text. This section reviews these ideas. 

## Functions; Domain and Range

The temperature at which water boils depends on the elevation above sea level. The interest paid on a cash investment depends on the length of time the investment is held. The area of a circle depends on the radius of the circle. The distance an object travels depends on the elapsed time. 

In each case, the value of one variable quantity, say y, depends on the value of another variable quantity, which we often call x. We say that “y is a function of x” and write this symbolically as 

$$
y = f (x) \quad \left(" y \text {   equals   } f \text {   of   } x"\right).
$$

The symbol f represents the function, the letter x is the independent variable representing the input value to f, and y is the dependent variable or output value of f at x. 

> ***DEFINITION*** A function f from a set D to a set Y is a rule that assigns a single value $f(x)$ in Y to each x in D. 

A rule that assigns more than one value to an input x, such as the rule that assigns to a positive number both the positive and negative square roots of the number, does not describe a function. 

The set D of all possible input values is called the domain of the function. The domain of f will sometimes be denoted by $D(f)$ . The set of all output values $f(x)$ as x varies throughout D is called the range of the function. The range might not include every element in the set Y. The domain and range of a function can be any sets of objects, but often in calculus they are sets of real numbers interpreted as points of a coordinate line. (In Chapters 12–15, we will encounter functions for which the elements of the sets are points in the plane, or in space.) 

Often a function is given by a formula that describes how to calculate the output value from the input variable. For instance, the equation $A = \pi r^{2}$ is a rule that calculates the area A of a circle from its radius r. When we define a function f with a formula $y = f(x)$ and the domain is not stated explicitly or restricted by context, the domain is assumed to be the largest set of real x-values for which the formula gives real y-values. This is called the natural domain of f. If we want to restrict the domain in some way, we must say so. The domain of $y = x^{2}$ is the entire set of real numbers. To restrict the domain of the function to, say, positive values of x, we would write “ $y = x^{2}, x > 0$ .” 

![[79cc012c5d3027d9139068ca3b81bd7637fad89857fc8823484bd74c0155de11.jpg|image]]



FIGURE 1.1 A diagram showing a function as a kind of machine.


![[7a1ed77b4318fc7f2d78fa371655b8a3a1a1fc979bb867f87b9aafb98d650a9e.jpg|image]]



FIGURE 1.2 A function from a set D to a set Y assigns a unique element of Y to each element in D.


Changing the domain to which we apply a formula usually changes the range as well. The range of $y = x^{2}$ is $[0, \infty)$ . The range of $y = x^{2}, x \geq 2$ , is the set of all numbers obtained by squaring numbers greater than or equal to 2. In set notation (see Appendix A.1), the range is $\{x^{2} | x \geq 2\}$ or $\{y | y \geq 4\}$ or $[4, \infty)$ . 

When the range of a function is a set of real numbers, the function is said to be real-valued. The domains and ranges of most real-valued functions we consider are intervals or combinations of intervals. Sometimes the range of a function is not easy to find. 

A function f is like a machine that produces an output value $f(x)$ in its range whenever we feed it an input value x from its domain (Figure 1.1). The function keys on a calculator give an example of a function as a machine. For instance, whenever you enter a nonnegative number x and press the $\sqrt{x}$ key, the calculator gives an output value (the square root of x). 

A function can also be pictured as an arrow diagram (Figure 1.2). Each arrow associates to an element of the domain D a single element in the set Y. In Figure 1.2, the arrows indicate that $f(a)$ is associated with a, $f(x)$ is associated with x, and so on. Notice that a function can have the same output value for two different input elements in the domain (as occurs with $f(a)$ in Figure 1.2), but each input element x is assigned a single output value $f(x)$ . 


**EXAMPLE 1** Verify the natural domains and associated ranges of some simple functions. The domains in each case are the values of x for which the formula makes sense.


<table><tr><td>Function</td><td>Domain (x)</td><td>Range (y)</td></tr><tr><td><eq>y = x^{2}</eq></td><td><eq>(-\infty, \infty)</eq></td><td><eq>[0, \infty)</eq></td></tr><tr><td><eq>y = 1/x</eq></td><td><eq>(-\infty, 0) \cup (0, \infty)</eq></td><td><eq>(-\infty, 0) \cup (0, \infty)</eq></td></tr><tr><td><eq>y = \sqrt{x}</eq></td><td><eq>[0, \infty)</eq></td><td><eq>[0, \infty)</eq></td></tr><tr><td><eq>y = \sqrt{4 - x}</eq></td><td><eq>(-\infty, 4]</eq></td><td><eq>[0, \infty)</eq></td></tr><tr><td><eq>y = \sqrt{1 - x^{2}}</eq></td><td><eq>[-1, 1]</eq></td><td><eq>[0, 1]</eq></td></tr></table>

**Solution** The formula $y = x^{2}$ gives a real y-value for any real number x, so the domain is $(-\infty, \infty)$ . The range of $y = x^{2}$ is $[0, \infty)$ because the square of any real number is non-negative and every nonnegative number y is the square of its own square root: $y = (\sqrt{y})^{2}$ . 

The formula $y = 1 / x$ gives a real $y$ -value for every $x$ except $x = 0$ . For consistency in the rules of arithmetic, we cannot divide any number by zero. The range of $y = 1 / x$ , the set of reciprocals of all nonzero real numbers, is the set of all nonzero real numbers, since $y = 1 / (1 / y)$ . That is, for $y \neq 0$ the number $x = 1 / y$ is the input that is assigned to the output value $y$ . 

The formula $y = \sqrt{x}$ gives a real $y$ -value only if $x \geq 0$ . The range of $y = \sqrt{x}$ is $[0, \infty)$ because every nonnegative number is some number's square root (namely, it is the square root of its own square). 

In $y = \sqrt{4 - x}$ , the quantity $4 - x$ cannot be negative. That is, $4 - x \geq 0$ , or $x \leq 4$ . The formula gives nonnegative real $y$ -values for all $x \leq 4$ . The range of $\sqrt{4 - x}$ is $[0, \infty)$ , the set of all nonnegative numbers. 

The formula $y = \sqrt{1 - x^{2}}$ gives a real y-value for every x in the closed interval from -1 to 1. Outside this domain, $1 - x^{2}$ is negative and its square root is not a real number. The values of $1 - x^{2}$ vary from 0 to 1 on the given domain, and the square roots of these values do the same. The range of $\sqrt{1 - x^{2}}$ is [0,1]. 

![[e372968bc16f042a279de598afea5c0cff93c1e42e1310e8c51ebf88fc8da50e.jpg|image]]


## Graphs of Functions

If f is a function with domain D, its graph consists of the points in the Cartesian plane whose coordinates are the input-output pairs for f. In set notation, the graph is 

$$
\left\{\bigl (x, f (x) \bigr) | x \in D \right\}.
$$

The graph of the function $f(x) = x + 2$ is the set of points with coordinates $(x, y)$ for which $y = x + 2$ . Its graph is the straight line sketched in Figure 1.3. 

The graph of a function f is a useful picture of its behavior. If $(x, y)$ is a point on the graph, then $y = f(x)$ is the height of the graph above (or below) the point x. The height may be positive or negative, depending on the sign of $f(x)$ (Figure 1.4). 

![[2bbd523e22dd48ab830f3b631d0cd8c2ab1ed71e428291945ebed5acd1ab7f91.jpg|image]]


![[6c5053b9f2e1d3cbdfad02c22b5c31e44fe0ff4f1314857d90a42351c1626356.jpg|image]]



FIGURE 1.3 The graph of $f(x) = x + 2$ is the set of points $(x, y)$ for which y has the value $x + 2$ .


![[19421553235eacac85e0fae711d49cb360a80a4c0e327cfa7f06ff8ee3cd2bc7.jpg|image]]



FIGURE 1.4 If $(x, y)$ lies on the graph of f, then the value $y = f(x)$ is the height of the graph above the point x (or below x if $f(x)$ is negative).


**EXAMPLE 2** Graph the function $y = x^{2}$ over the interval $[-2, 2]$ . 

**Solution** Make a table of xy-pairs that satisfy the equation $y = x^{2}$ . Plot the points $(x, y)$ whose coordinates appear in the table, and draw a smooth curve (labeled with its equation) through the plotted points (see Figure 1.5). 

![[832189abf25992f1a102722ffc96739bd59a5f273c9c194b028ee671f0d82fcf.jpg|image]]



FIGURE 1.5 Graph of the function in Example 2.


How do we know that the graph of $y = x^2$ doesn't look like one of these curves? 

To find out, we could plot more points. But how would we then connect them? The basic question still remains: How do we know for sure what the graph looks like between the points we plot? Calculus answers this question, as we will see in Chapter 4. Meanwhile, we will have to settle for plotting points and connecting them as best we can. 

<table><tr><td>Time</td><td>Pressure</td></tr><tr><td>0.00091</td><td>-0.080</td></tr><tr><td>0.00108</td><td>0.200</td></tr><tr><td>0.00125</td><td>0.480</td></tr><tr><td>0.00144</td><td>0.693</td></tr><tr><td>0.00162</td><td>0.816</td></tr><tr><td>0.00180</td><td>0.844</td></tr><tr><td>0.00198</td><td>0.771</td></tr><tr><td>0.00216</td><td>0.603</td></tr><tr><td>0.00234</td><td>0.368</td></tr><tr><td>0.00253</td><td>0.099</td></tr><tr><td>0.00271</td><td>-0.141</td></tr><tr><td>0.00289</td><td>-0.309</td></tr><tr><td>0.00307</td><td>-0.348</td></tr><tr><td>0.00325</td><td>-0.248</td></tr><tr><td>0.00344</td><td>-0.041</td></tr><tr><td>0.00362</td><td>0.217</td></tr><tr><td>0.00379</td><td>0.480</td></tr><tr><td>0.00398</td><td>0.681</td></tr><tr><td>0.00416</td><td>0.810</td></tr><tr><td>0.00435</td><td>0.827</td></tr><tr><td>0.00453</td><td>0.749</td></tr><tr><td>0.00471</td><td>0.581</td></tr><tr><td>0.00489</td><td>0.346</td></tr><tr><td>0.00507</td><td>0.077</td></tr><tr><td>0.00525</td><td>-0.164</td></tr><tr><td>0.00543</td><td>-0.320</td></tr><tr><td>0.00562</td><td>-0.354</td></tr><tr><td>0.00579</td><td>-0.248</td></tr><tr><td>0.00598</td><td>-0.035</td></tr></table>

## Representing a Function Numerically

A function may be represented algebraically by a formula and visually by a graph (Example 2). Another way to represent a function is numerically, through a table of values. From an appropriate table of values, a graph of the function can be obtained using the method illustrated in Example 2, possibly with the aid of a computer. The graph consisting of only the points in the table is called a scatterplot. 

**EXAMPLE 3** Musical notes are pressure waves in the air. The data associated with Figure 1.6 give recorded pressure displacement versus time in seconds of a musical note produced by a tuning fork. The table provides a representation of the pressure function (in micropascals) over time. If we first make a scatterplot and then draw a smooth curve that approximates the data points $(t, p)$ from the table, we obtain the graph shown in the figure. 

![[1a2cb6e2455c2db0104585e53cc94cc3c2d69eaebcc25e2da20c6d4caebbbe77.jpg|image]]



FIGURE 1.6 A smooth curve approximating the plotted points gives a graph of the pressure function represented by the accompanying tabled data (Example 3).


## The Vertical Line Test for a Function

Not every curve in the coordinate plane can be the graph of a function. A function f can have only one value $f(x)$ for each x in its domain, so no vertical line can intersect the graph of a function at more than one point. If a is in the domain of the function f, then the vertical line x = a will intersect the graph of f at the single point $(a, f(a))$ . 

A circle cannot be the graph of a function, since some vertical lines intersect the circle twice. The circle graphed in Figure 1.7a, however, contains the graphs of two functions of x, namely the upper semicircle defined by the function $f(x) = \sqrt{1 - x^{2}}$ and the lower semicircle defined by the function $g(x) = -\sqrt{1 - x^{2}}$ (Figures 1.7b and 1.7c). 

![[b2a268982e8d277c4db957d8b5484d59c2897fc569783ae4fc4f5f5e267b98cb.jpg|image]]



(a) $x^{2} + y^{2} = 1$


![[a1d093025a7a50f4d9379a107ba26879f8a345decd8372135949a7e0332e99cd.jpg|image]]



(b) $y = \sqrt{1 - x^{2}}$


![[b9231c7f8d2502f57a314efcb3bb47c33fb0d119e7837544a0c46c3b4987889f.jpg|image]]



(c) $y = -\sqrt{1 - x^{2}}$



FIGURE 1.7 (a) The circle is not the graph of a function; it fails the vertical line test. (b) The upper semicircle is the graph of the function $f(x) = \sqrt{1 - x^{2}}$ . (c) The lower semicircle is the graph of the function $g(x) = -\sqrt{1 - x^{2}}$ .


![[0393456d71004aec9d6eada3ebb0d16ac22112bf9ba23f17ddd9164b39073815.jpg|image]]



FIGURE 1.8 The absolute value function has domain $(-\infty, \infty)$ and range $[0, \infty)$ .


![[8a2ed399221359a0cc2c2f862515902b2d2e1be0c969d3ca88a2f5ecd9300eb3.jpg|image]]



FIGURE 1.9 To graph the function $y = f(x)$ shown here, we apply different formulas to different parts of its domain (Example 4).


![[9d50c881c248f5748a50a6a8b34dd4719fe2b8b495ec84d733a2ffad867eea22.jpg|image]]



FIGURE 1.10 The graph of the greatest integer function $y = \lfloor x \rfloor$ lies on or below the line y = x, so it provides an integer floor for x (Example 5).


![[25b3ae678b8143583cd7c120481351734d829c727248312b09baf32ae3b970c1.jpg|image]]



FIGURE 1.11 The graph of the least integer function $y = \lceil x \rceil$ lies on or above the line y = x, so it provides an integer ceiling for x (Example 6).


## Piecewise-Defined Functions

Sometimes a function is described in pieces by using different formulas on different parts of its domain. One example is the absolute value function 

$$
| x | = \left\{ \begin{array}{l l} x, & x \geq 0 \quad \text {   First   formula   } \\ - x, & x <   0 \quad \text {   Second   formula   } \end{array} \right.
$$

whose graph is given in Figure 1.8. The right-hand side of the equation means that the function equals x if $x \geq 0$ , and equals -x if x < 0. Piecewise-defined functions often arise when real-world data are modeled. Here are some other examples. 

**EXAMPLE 4** The function 

$$
f (x) = \left\{ \begin{array}{l l} - x, & x <   0 \\ x ^ {2}, & 0 \leq x \leq 1 \\ 1, & x > 1 \end{array} \right. \quad \text {   First   formula   } \quad \text {   Second   formula   } \quad \text {   Third   formula   }
$$

is defined on the entire real line but has values given by different formulas, depending on the position of x. The values of f are given by y = -x when x < 0, $y = x^{2}$ when $0 \leq x \leq 1$ , and y = 1 when x > 1. The function, however, is just one function whose domain is the entire set of real numbers (Figure 1.9). 

**EXAMPLE 5** The function whose value at any number x is the greatest integer less than or equal to x is called the greatest integer function or the integer floor function. It is denoted $\lfloor x \rfloor$ . Figure 1.10 shows the graph. Observe that 

$$
\begin{array}{l l} \lfloor 2. 4 \rfloor = 2, & \lfloor 1. 9 \rfloor = 1, \quad \lfloor 0 \rfloor = 0, \\ \lfloor 2 \rfloor = 2, & \lfloor 0. 2 \rfloor = 0, \quad \lfloor - 0. 3 \rfloor = - 1, \quad \lfloor - 2 \rfloor = - 2. \end{array}
$$

**EXAMPLE 6** The function whose value at any number x is the smallest integer greater than or equal to x is called the least integer function or the integer ceiling function. It is denoted [x]. Figure 1.11 shows the graph. For positive values of x, this function might represent, for example, the cost of parking x hours in a parking lot that charges $1 for each hour or part of an hour. 

## Increasing and Decreasing Functions

If the graph of a function climbs or rises as you move from left to right, we say that the function is increasing. If the graph descends or falls as you move from left to right, the function is decreasing. 

> ***DEFINITIONS*** Let f be a function defined on an interval I and let $x_{1}$ and $x_{2}$ be two distinct points in I. 
>
> 1. If $f(x_{2}) > f(x_{1})$ whenever $x_{1} < x_{2}$ , then f is said to be increasing on I. 
>
> 2. If $f(x_{2}) < f(x_{1})$ whenever $x_{1} < x_{2}$ , then f is said to be decreasing on I. 
>
It is important to realize that the definitions of increasing and decreasing functions must be satisfied for every pair of points $x_{1}$ and $x_{2}$ in I with $x_{1} < x_{2}$ . Because we use the inequality < to compare the function values, instead of $\leq$ , it is sometimes said that f is strictly increasing or decreasing on I. The interval I may be finite (also called bounded) or infinite (unbounded). 

![[2e0c5903f76a287d7b3963b9b3e3307ce53e3a45789204219ba500988246ce52.jpg|image]]



(a)


![[126565d007654b2a88e01667b33a70eae075183313c6933cb9eb853879555c79.jpg|image]]



FIGURE 1.12 (a) The graph of $y = x^{2}$ (an even function) is symmetric about the y-axis.
(b) The graph of $y = x^{3}$ (an odd function) is symmetric about the origin.



**EXAMPLE 7** The function graphed in Figure 1.9 is decreasing on $(-\infty, 0)$ and increasing on $(0, 1)$ . The function is neither increasing nor decreasing on the interval $(1, \infty)$ because the function is constant on that interval, and hence the strict inequalities in the definition of increasing or decreasing are not satisfied on $(1, \infty)$ .


## Even Functions and Odd Functions: Symmetry

The graphs of even and odd functions have special symmetry properties. 

> ***DEFINITIONS*** A function $y = f(x)$ is an even function of $x$ if $f(-x) = f(x)$ , odd function of $x$ if $f(-x) = -f(x)$ , for every $x$ in the function's domain. 

The names even and odd come from powers of x. If y is an even power of x, as in $y = x^{2}$ or $y = x^{4}$ , it is an even function of x because $(-x)^{2} = x^{2}$ and $(-x)^{4} = x^{4}$ . If y is an odd power of x, as in y = x or $y = x^{3}$ , it is an odd function of x because $(-x)^{1} = -x$ and $(-x)^{3} = -x^{3}$ . 

The graph of an even function is symmetric about the y-axis. Since $f(-x) = f(x)$ , a point $(x, y)$ lies on the graph if and only if the point $(-x, y)$ lies on the graph (Figure 1.12a). A reflection across the y-axis leaves the graph unchanged. 

The graph of an odd function is symmetric about the origin. Since $f(-x) = -f(x)$ , a point $(x, y)$ lies on the graph if and only if the point $(-x, -y)$ lies on the graph (Figure 1.12b). Equivalently, a graph is symmetric about the origin if a rotation of $180^{\circ}$ about the origin leaves the graph unchanged. 

Notice that each of these definitions requires that both x and -x be in the domain of f. 

**EXAMPLE 8** Here are several functions illustrating the definitions. 

$$
f (x) = x ^ {2}
$$

Even function: $(-x)^{2} = x^{2}$ for all x; symmetry about y-axis. So $f(-3) = 9 = f(3)$ . Changing the sign of x does not change the value of an even function. 

$$
f (x) = x ^ {2} + 1
$$

Even function: $(-x)^{2} + 1 = x^{2} + 1$ for all x; symmetry about y-axis (Figure 1.13a). 

![[4b44233bc990eb9d470b703816074481db1547fc3c6f27554e148ab6a42aa5ee.jpg|image]]



(a)


![[7992fd217b7a3c3e00aa0f1dfed86390e29a9c975d180528c0bc4374624e8d7c.jpg|image]]



(b)



FIGURE 1.13 (a) When we add the constant term 1 to the function $y = x^{2}$ , the resulting function $y = x^{2} + 1$ is still even and its graph is still symmetric about the y-axis. (b) When we add the constant term 1 to the function y = x, the resulting function $y = x + 1$ is no longer odd, since the symmetry about the origin is lost. The function $y = x + 1$ is also not even (Example 8).


$f(x) = x$ Odd function: $(-x) = -x$ for all $x$ ; symmetry about the origin. So $f(-3) = -3$ while $f(3) = 3$ . Changing the sign of $x$ changes the sign of the value of an odd function. 

$f(x) = x + 1$ Not odd: $f(-x) = -x + 1$ , but $-f(x) = -x - 1$ . The two are not equal. 

## Common Functions

A variety of important types of functions are frequently encountered in calculus. 

Linear Functions A function of the form $f(x) = mx + b$ , where m and b are fixed constants, is called a linear function. Figure 1.14a shows an array of lines $f(x) = mx$ . Each of these has b = 0, so these lines pass through the origin. The function $f(x) = x$ , where m = 1 and b = 0, is called the identity function. Constant functions result when the slope is m = 0 (Figure 1.14b). 

![[55b2e00fe18ce9b487b7fe333401f08b685e28197c9103ea4b546922c08152a7.jpg|image]]


![[7b5070f4b759d4408c3a85ff01b0e981f1129bd336b225077b54ee20d3cf0f48.jpg|image]]



(b)



FIGURE 1.14 (a) Lines through the origin with slope m. (b) A constant function with slope m = 0.


> ***DEFINITION*** Two variables y and x are proportional (to one another) if one is always a constant multiple of the other—that is, if y = kx for some nonzero constant k. 

If the variable y is proportional to the reciprocal 1/x, then sometimes it is said that y is inversely proportional to x (because 1/x is the multiplicative inverse of x). 

Power Functions A function $f(x) = x^{a}$ , where a is a constant, is called a power function. There are several important cases to consider. 

(a) $f(x) = x^{a}$ with a = n, a positive integer. 

The graphs of $f(x) = x^{n}$ , for n = 1, 2, 3, 4, 5, are displayed in Figure 1.15. These functions are defined for all real values of x. Notice that as the power n gets larger, the curves tend to flatten toward the x-axis on the interval $(-1, 1)$ and to rise more steeply for $|x| > 1$ . Each curve passes through the point $(1, 1)$ and through the origin. The graphs of functions with even powers are symmetric about the y-axis; those with odd powers are symmetric about the origin. The even-powered functions are decreasing on the interval $(-\infty, 0]$ and increasing on $[0, \infty)$ ; the odd-powered functions are increasing over the entire real line $(-\infty, \infty)$ . 

![[850174f81246ed25a5551d55e96e8bb22b29a42ff0394654b24d1a3b19ae819f.jpg|image]]



FIGURE 1.15 Graphs of $f(x) = x^{n}, n = 1, 2, 3, 4, 5$ , defined for $-\infty < x < \infty$ .


$$
\text { (b) } f (x) = x ^ {a} \text { with } a = - 1 \text { or } a = - 2.
$$

The graphs of the functions $f(x) = x^{-1} = 1/x$ and $f(x) = x^{-2} = 1/x^{2}$ are shown in Figure 1.16. Both functions are defined for all $x \neq 0$ (you can never divide by zero). The graph of y = 1/x is the hyperbola xy = 1, which approaches the coordinate axes far from the origin. The graph of $y = 1/x^{2}$ also approaches the coordinate axes. The graph of the function $f(x) = 1/x$ is symmetric about the origin; this function is decreasing on the intervals $(-\infty, 0)$ and $(0, \infty)$ . The graph of the function $f(x) = 1/x^{2}$ is symmetric about the y-axis; this function is increasing on $(-\infty, 0)$ and decreasing on $(0, \infty)$ . 

![[3eee5a80beaa109471ad059ecaa3fcb5cc046157c5ede6de61e3f8e101dcf686.jpg|image]]



FIGURE 1.16 Graphs of the power functions $f(x) = x^a$ . (a) $a = -1$ . (b) $a = -2$ .


$$
(\mathbf {c}) f (x) = x ^ {a} \text { with } a = \frac {1}{2}, \frac {1}{3}, \frac {3}{2}, \text { or } \frac {2}{3}.
$$

The functions $f(x) = x^{1/2} = \sqrt{x}$ and $f(x) = x^{1/3} = \sqrt[3]{x}$ are the square root and cube root functions, respectively. The domain of the square root function is $[0, \infty)$ , but the cube root function is defined for all real x. Their graphs are displayed in Figure 1.17, along with the graphs of $y = x^{3/2}$ and $y = x^{2/3}$ . (Recall that $x^{3/2} = (x^{1/2})^3$ and $x^{2/3} = (x^{1/3})^2$ .) 

![[f37000703b69bc44a2547b72eeaf08b42eefa38877dccda01da024a9aa07908b.jpg|image]]



FIGURE 1.17 Graphs of the power functions $f(x) = x^{a}$ for $a = \frac{1}{2}$ , $\frac{1}{3}$ , $\frac{3}{2}$ , and $\frac{2}{3}$ .


(b) 

Polynomials A function p is a polynomial if 

$$
p (x) = a _ {n} x ^ {n} + a _ {n - 1} x ^ {n - 1} + \dots + a _ {1} x + a _ {0},
$$

where n is a nonnegative integer and the numbers $a_{0}, a_{1}, a_{2}, \ldots, a_{n}$ are real constants (called the coefficients of the polynomial). All polynomials have domain $(-\infty, \infty)$ . If the leading coefficient $a_{n} \neq 0$ , then n is called the degree of the polynomial. Linear functions with $m \neq 0$ are polynomials of degree 1. Polynomials of degree 2, usually written as $p(x) = ax^{2} + bx + c$ , are called quadratic functions. Likewise, cubic functions are polynomials $p(x) = ax^{3} + bx^{2} + cx + d$ of degree 3. Figure 1.18 shows the graphs of three polynomials. Techniques to graph polynomials are studied in Chapter 4. 

![[1dd6fab636d7cb4e169d2077802cfd89e8b6869f3ceab95f8d784c45b4d2df08.jpg|image]]



FIGURE 1.18 Graphs of three polynomial functions.


![[84afbbc2feb1994a621944b172959185287dd2eaa3d5269d09c2c22adb35b579.jpg|image]]


![[7ccd83448e98ca23362ad6066d84b50c6680b3aaf5fb3a671f9f8815dc5d230c.jpg|image]]


Rational Functions A rational function is a quotient or ratio $f(x) = p(x)/q(x)$ , where p and q are polynomials. The domain of a rational function is the set of all real x for which $q(x) \neq 0$ . The graphs of three rational functions are shown in Figure 1.19. 

![[39f688836c0d056b1d0fdbf835efce0bfc2b44794e72f4ea0a64440d0b1db22b.jpg|image]]



FIGURE 1.19 Graphs of three rational functions. The straight red lines approached by the graphs are called asymptotes and are not part of the graphs. We discuss asymptotes in Section 2.5.


Algebraic Functions Any function constructed from polynomials using algebraic operations (addition, subtraction, multiplication, division, and taking roots) lies within the class of algebraic functions. All rational functions are algebraic, but also included are more complicated functions (such as those satisfying an equation like $y^{3} - 9xy + x^{3} = 0$ , studied in Section 3.7). Figure 1.20 displays the graphs of three algebraic functions. 


(b)


![[ab4968848ce92c55970132ce88e46834e614439e127976421f94928d31ecea32.jpg|image]]


![[1f2267d148caf4cee75f06ba83ba1966b85ffe0f11c530e8676efdef4a0ef8c6.jpg|image]]



FIGURE 1.20 Graphs of three algebraic functions.


![[e644022c0b6c51062b7e35f38c9539d94b699ac2444b1cd8dc2fda833da5fdc8.jpg|image]]


Trigonometric Functions The six basic trigonometric functions are reviewed in Section 1.3. The graphs of the sine and cosine functions are shown in Figure 1.21. 

![[5b585faea1f9c88c20764d385646823b10c4e9b003629f0f62ddf5b0a8fb1d7c.jpg|image]]



FIGURE 1.21 Graphs of the sine and cosine functions.


Exponential Functions A function of the form $f(x) = a^{x}$ , where a > 0 and $a \neq 1$ , is called an exponential function (with base a). All exponential functions have domain $(-\infty, \infty)$ and range $(0, \infty)$ , so an exponential function never assumes the value 0. We discuss exponential functions in Section 1.4. The graphs of some exponential functions are shown in Figure 1.22. 

![[037c8abd178cae6ed877c3b4be80934be7146c7d0f345cbd76edd0ffb865c057.jpg|image]]



FIGURE 1.22 Graphs of exponential functions.


![[209e3059a9cd99a7778f2c6ae3dfa93bd759dfb3912f63a3f0d3755b7aaa65c1.jpg|image]]


Logarithmic Functions These are the functions $f(x) = \log_{a} x$ , where the base $a \neq 1$ is a positive constant. They are the inverse functions of the exponential functions, and we discuss these functions in Section 1.5. Figure 1.23 shows the graphs of four logarithmic functions with various bases. In each case the domain is $(0, \infty)$ and the range is $(-\infty, \infty)$ . 

![[01a71c24c9f6956b55a1cd5360184047d9ed9246f3397a913efb88fa1a08d861.jpg|image]]



FIGURE 1.23 Graphs of four logarithmic functions.


![[4ecd49ce3be64f3e2eedc221658a9f000fab42d274814377835437eea90b8934.jpg|image]]



FIGURE 1.24 Graph of a catenary or hanging cable. (The Latin word catena means “chain.”)


Transcendental Functions These are functions that are not algebraic. They include the trigonometric, inverse trigonometric, exponential, and logarithmic functions, and many other functions as well. The catenary is one example of a transcendental function. Its graph has the shape of a cable, like a telephone line or electric cable, strung from one support to another and hanging freely under its own weight (Figure 1.24). The function defining the graph is discussed in Section 7.3. 

## EXERCISES

## 1.1

## Functions

In Exercises 1–6, find the domain and range of each function. 

1. $f(x) = 1 + x^{2}$ 

3. $F(x) = \sqrt{5x + 10}$ 

$$
2. f (x) = 1 - \sqrt {x}
$$

4. $g(x) = \sqrt{x^{2} - 3x}$ 

5. $f(t) = \frac{4}{3 - t}$ 

6. $G(t) = \frac{2}{t^{2} - 16}$ 

In Exercises 7 and 8, which of the graphs are graphs of functions of $x$ , and which are not? Give reasons for your answers. 


7. a.


![[af41d16d5da49538fe3dfbd19c2597a81fb2d2b2cb533d8ab5a1b537c79324c8.jpg|image]]



b.


![[b69c72756c9488cd2f64f1ef2b5d78cdc9433bedb12130d71eb959f3a035befe.jpg|image]]



8. a.


![[7e1f9a215d5ac358fee19d9b690fa670511e0aeda60ebc00e38f615cc818fb56.jpg|image]]


![[40c02fa1f2a9d0c55b330a66d8fc326101925af35042994870f94b8291efd2d0.jpg|image]]


Finding Formulas for Functions 

9. Express the area and perimeter of an equilateral triangle as a function of the triangle's side length $x$ . 

10. Express the side length of a square as a function of the length $d$ of the square's diagonal. Then express the area as a function of the diagonal length. 

11. Express the edge length of a cube as a function of the cube's diagonal length $d$ . Then express the surface area and volume of the cube as a function of the diagonal length. 

12. A point P in the first quadrant lies on the graph of the function $f(x) = \sqrt{x}$ . Express the coordinates of P as functions of the slope of the line joining P to the origin. 

13. Consider the point $(x, y)$ lying on the graph of the line $2x + 4y = 5$ . Let L be the distance from the point $(x, y)$ to the origin $(0, 0)$ . Write L as a function of x. 

14. Consider the point $(x, y)$ lying on the graph of $y = \sqrt{x - 3}$ . Let L be the distance between the points $(x, y)$ and $(4, 0)$ . Write L as a function of y. 

## Functions and Graphs

Find the natural domain and graph the functions in Exercises 15-20. 

15. $f(x) = 5 - 2x$ 

16. $f(x) = 1 - 2x - x^2$ 

17. $g(x) = \sqrt{|x|}$ 

18. $g(x) = \sqrt{-x}$ 

19. $F(t) = t / |t|$ 

20. $G(t) = 1 / |t|$ 

21. Find the domain of $y = \frac{x + 3}{4 - \sqrt{x^2 - 9}}$ . 

22. Find the range of $y = 2 + \sqrt{9 + x^{2}}$ . 

23. Graph the following equations and explain why they are not graphs of functions of $x$ . 

a. $|y| = x$ 

b. $y^{2} = x^{2}$ 

24. Graph the following equations and explain why they are not graphs of functions of $x$ . 

a. $|x| + |y| = 1$ 

b. $|x + y| = 1$ 

Piecewise-Defined Functions 

Graph the functions in Exercises 25–28. 

25. $f(x) = \begin{cases} x, & 0 \leq x \leq 1 \\ 2 - x, & 1 < x \leq 2 \end{cases}$ 

26. $g(x) = \begin{cases} 1 - x, & 0 \leq x \leq 1 \\ 2 - x, & 1 < x \leq 2 \end{cases}$ 

27. $F(x) = \left\{ \begin{array}{ll}4 - x^2, & x\leq 1\\ x^2 +2x, & x > 1 \end{array} \right.$ 

28. $G(x) = \begin{cases} 1 / x, & x < 0 \\ x, & 0 \leq x \end{cases}$ 

Find a formula for each function graphed in Exercises 29-32. 

29. a. 

![[5cecabcfda62a2b49ecf989d534f230a439a9c13454025768483c7e9fc002e58.jpg|image]]


b. 

![[b984ce38f90e30a9ca4e5bbfe0bb7a06a6d56241118fc2136e040a1bc881eecc.jpg|image]]


30. a. 


b.


![[a473bc8f6d95530f8c33c230b19fa68ee9a79bfa26ed799ed1126d6668a7da8a.jpg|image]]


![[0a279da271aec684d30441ff507b8367aba4da0119333b8cdb7fc1c18c50304f.jpg|image]]


31. a. 

![[25af1138985c41ae50e709bb36a2a5114e2679771e6249182652acc42444a016.jpg|image]]



b.


![[50a38d13f1b290bed46c84f1a4e5452ba0349677d74fc0f499f8e71709d1a28f.jpg|image]]


32. a. 


b.


![[8548d181b436612c6db74990ddcaaa5f396c5160a9449d4abd5363a435f2d9fb.jpg|image]]


![[555b35f672481047d99715c1f6aecbf65bd93177b48c7d489840c46da4a95c71.jpg|image]]


The Greatest and Least Integer Functions 

33. For what values of $x$ is 

a. $\lfloor x\rfloor = 0?$ 

b. $\lceil x \rceil = 0?$ 

34. What real numbers $x$ satisfy the equation $\lfloor x \rfloor = \lceil x \rceil$ ? 

35. Does $\lceil -x\rceil = -\lfloor x\rfloor$ for all real x? Give reasons for your answer. 

36. Graph the function 

$$
f (x) = \left\{ \begin{array}{l l} \lfloor x \rfloor , & x \geq 0 \\ \lceil x \rceil , & x <   0. \end{array} \right.
$$

Why is $f(x)$ called the integer part of $x$ ? 

Increasing and Decreasing Functions 

Graph the functions in Exercises 37–46. What symmetries, if any, do the graphs have? Specify the intervals over which the function is increasing and the intervals where it is decreasing. 

37. $y = -x^{3}$ 

$$
3 8. y = - \frac {1}{x ^ {2}}
$$

$$
y = - \frac {1}{x}
$$

40. $y = \frac{1}{|x|}$ 

41. $y = \sqrt{|x|}$ 

42. $y = \sqrt{-x}$ 

43. $y = x^{3} / 8$ 

44. $y = -4\sqrt{x}$ 

45. $y = -x^{3 / 2}$ 

46. $y = (-x)^{2 / 3}$ 

Even and Odd Functions 

In Exercises 47–62, say whether the function is even, odd, or neither. Give reasons for your answer. 

47. $f(x) = 3$ 

49. $f(x) = x^{2} + 1$ 

48. $f(x) = x^{-5}$ 

51. $g(x) = x^{3} + x$ 

50. $f(x) = x^{2} + x$ 

53. $g(x) = \frac{1}{x^2 - 1}$ 

55. $h(t) = \frac{1}{t - 1}$ 

57. $h(t) = 2t + 1$ 

52. $g(x) = x^{4} + 3x^{2} - 1$ 

59. sin 2x 

61. cos 3x 

54. $g(x) = \frac{x}{x^2 - 1}$ 

56. $h(t) = |t^3|$ 

58. $h(t) = 2|t| + 1$ 

60. $\sin x^{2}$ 

62. $1 + \cos x$ 

## Theory and Examples

63. The variable s is proportional to t, and s = 25 when t = 75.
Determine t when s = 60. 

64. Kinetic energy The kinetic energy K of a mass is proportional to the square of its velocity v. If K = 12,960 joules when v = 18 m/s, what is K when v = 10 m/s? 

65. The variables r and s are inversely proportional, and r = 6 when s = 4. Determine s when r = 10. 

66. Boyle's law Boyle's law says that the volume $V$ of a gas at constant temperature increases whenever the pressure $P$ decreases, so that $V$ and $P$ are inversely proportional. If $P = 14.7 \, \mathrm{N/cm^2}$ when $V = 1000 \, \mathrm{cm^3}$ , then what is $V$ when $P = 23.4 \, \mathrm{N/cm^2}$ ? 

67. A box with an open top is to be constructed from a rectangular piece of cardboard with dimensions 14 cm by 22 cm by cutting out equal squares of side x at each corner and then folding up the sides as in the figure. Express the volume V of the box as a function of x. 

![[b77c2c14ff591e62235955d321021e83e2e00ea58e000733e53be29c49277473.jpg|image]]


68. The accompanying figure shows a rectangle inscribed in an isosceles right triangle whose hypotenuse is 2 units long. 

a. Express the y-coordinate of P in terms of x. (You might start by writing an equation for the line AB.) 

b. Express the area of the rectangle in terms of x. 

![[a8aca99b44bb38575faea53555d0469f297b0b221ee75b636a8103cad6985d3f.jpg|image]]


In Exercises 69 and 70, match each equation with its graph. Do not use a graphing device, and give reasons for your answer. 

$$
y = x ^ {4}
$$

$$
y = x ^ {7}
$$

$$
y = x ^ {1 0}
$$

![[c61bcc56780edc01ea83eab63523ca210ff1c39b0e3e98cc5623137ec23553b9.jpg|image]]


$$
y = 5 x
$$

![[51db2cf7715d4e85146b4127d679c8acf0f9d87841523e24af33281ab8c6c7d4.jpg|image]]


T 71. a. Graph the functions $f(x) = x / 2$ and $g(x) = 1 + (4 / x)$ together to identify the values of $x$ for which 

$$
{\frac {x}{2}} > 1 + {\frac {4}{x}}.
$$

b. Confirm your findings in part (a) algebraically. 

T 72. a. Graph the functions $f(x) = 3 / (x - 1)$ and $g(x) = 2 / (x + 1)$ together to identify the values of $x$ for which 

$$
\frac {3}{x - 1} <   \frac {2}{x + 1}.
$$

b. Confirm your findings in part (a) algebraically. 

73. For a curve to be symmetric about the x-axis, the point $(x, y)$ must lie on the curve if and only if the point $(x, -y)$ lies on the curve. Explain why a curve that is symmetric about the x-axis is not the graph of a function, unless the function is y = 0. 

74. Three hundred books sell for $40 each, resulting in a revenue of $(300)($40) = $12,000$ . For each $5 increase in the price, 25 fewer books are sold. Write the revenue R as a function of the number x of $5 increases. 

75. A pen in the shape of an isosceles right triangle with legs of length x m and hypotenuse of length h m is to be built. If fencing costs $5/m for the legs and $10/m for the hypotenuse, write the total cost C of construction as a function of h. 

76. Industrial costs A power plant sits next to a river where the river is 250 m wide. To lay a new cable from the plant to a location in the city 2 km downstream on the opposite side costs $180 per meter across the river and $100 per meter along the land. 

![[a78cf1def86998237352d61968093979ad42b30980cf80d3b2d1634e7298aaa9.jpg|image]]



NOT TO SCALE


a. Suppose that the cable goes from the plant to a point Q on the opposite side that is x m from the point P directly opposite the plant. Write a function $C(x)$ that gives the cost of laying the cable in terms of the distance x. 

b. Generate a table of values to determine if the least expensive location for point Q is less than 300 m or greater than 300 m from point P. 

## 1.2 Combining Functions; Shifting and Scaling Graphs

In this section we look at the main ways functions are combined or transformed to form new functions. 

## Sums, Differences, Products, and Quotients

Like numbers, functions can be added, subtracted, multiplied, and divided (except where the denominator is zero) to produce new functions. If f and g are functions, then for every x that belongs to the domains of both f and g (that is, for $x \in D(f) \cap D(g)$ ), we define functions $f + g$ , f - g, and fg by the formulas 

$$
\begin{array}{c} (f + g) (x) = f (x) + g (x) \\ (f - g) (x) = f (x) - g (x) \\ (f g) (x) = f (x) g (x). \end{array}
$$

Notice that the + sign on the left-hand side of the first equation represents the operation of addition of functions, whereas the + on the right-hand side of the equation means addition of the real numbers $f(x)$ and $g(x)$ . 

At any point of $D(f) \cap D(g)$ at which $g(x) \neq 0$ , we can also define the function $f / g$ by the formula 

$$
\left(\frac {f}{g}\right) (x) = \frac {f (x)}{g (x)} \quad (\text { where } g (x) \neq 0).
$$

Functions can also be multiplied by constants: If $c$ is a real number, then the function $cf$ is defined for all $x$ in the domain of $f$ by 

$$
(c f) (x) = c f (x).
$$

**EXAMPLE 1** The functions defined by the formulas 

$$
f (x) = \sqrt {x} \quad \text { and } \quad g (x) = \sqrt {1 - x}
$$

have domains $D(f) = [0, \infty)$ and $D(g) = (-\infty, 1]$ . The points common to these domains are the points in 

$$
[ 0, \infty) \cap (- \infty , 1 ] = [ 0, 1 ].
$$

The following table summarizes the formulas and domains for the various algebraic combinations of the two functions. We also write $f \cdot g$ for the product function fg. 

<table><tr><td>Function</td><td>Formula</td><td>Domain</td></tr><tr><td><eq>f + g</eq></td><td><eq>(f + g)(x) = \sqrt{x} + \sqrt{1 - x}</eq></td><td><eq>[0,1] = D(f) \cap D(g)</eq></td></tr><tr><td><eq>f - g</eq></td><td><eq>(f - g)(x) = \sqrt{x} - \sqrt{1 - x}</eq></td><td><eq>[0,1]</eq></td></tr><tr><td><eq>g - f</eq></td><td><eq>(g - f)(x) = \sqrt{1 - x} - \sqrt{x}</eq></td><td><eq>[0,1]</eq></td></tr><tr><td><eq>f \cdot g</eq></td><td><eq>(f \cdot g)(x) = f(x)g(x) = \sqrt{x(1 - x)}</eq></td><td><eq>[0,1]</eq></td></tr><tr><td><eq>f/g</eq></td><td><eq>\frac{f}{g}(x) = \frac{f(x)}{g(x)} = \sqrt{\frac{x}{1 - x}}</eq></td><td><eq>[0,1)(x = 1 \text{ excluded})</eq></td></tr><tr><td><eq>g/f</eq></td><td><eq>\frac{g}{f}(x) = \frac{g(x)}{f(x)} = \sqrt{\frac{1 - x}{x}}</eq></td><td><eq>(0,1](x = 0 \text{ excluded})</eq></td></tr></table>

The graph of the function $f + g$ is obtained from the graphs of f and g by adding the corresponding y-coordinates $f(x)$ and $g(x)$ at each point $x \in D(f) \cap D(g)$ , as in Figure 1.25. The graphs of $f + g$ and $f \cdot g$ from Example 1 are shown in Figure 1.26. 

![[5452dea5f166340b5145b254ab6590e3a36d8bf2ebe12fa8b1c3b0d082b7f788.jpg|image]]


![[016dd77ec271790341ff9b29711190bd64689c91521e7c4ba697b9495fd9821f.jpg|image]]



FIGURE 1.25 Graphical addition of two functions.



FIGURE 1.26 The domain of the function $f + g$ is the intersection of the domains of f and g, the interval [0, 1] on the x-axis where these domains overlap. This interval is also the domain of the function $f \cdot g$ (Example 1).


## Composing Functions

Composition is another method for combining functions. In this operation the output from one function becomes the input to a second function. 

> ***DEFINITION*** If f and g are functions, the function $f \circ g$ (“f composed with g”) is defined by 
>
> $$
> (f \circ g) (x) = f (g (x))
> $$
>
> and called the composition of $f$ and $g$ . The domain of $f \circ g$ consists of the numbers $x$ in the domain of $g$ for which $g(x)$ lies in the domain of $f$ . 
>
To find $(f \circ g)(x)$ , first find $g(x)$ and second find $f(g(x))$ . Figure 1.27 pictures $f \circ g$ as a machine diagram, and Figure 1.28 shows the composition as an arrow diagram. 

![[0004b7bba149e01cc6afd4e96517484349d82d3cfd73a3fc78b1ac0ae84ec8eb.jpg|image]]


![[e22a1852eab93c5fb465f2cb27c3987512c2f8a3f62e6c23a339e7a3d3ee4ccc.jpg|image]]



FIGURE 1.27 The composition $f \circ g$ uses the output $g(x)$ of the first function g as the input for the second function f.



FIGURE 1.28 Arrow diagram for $f \circ g$ . If x lies in the domain of g and $g(x)$ lies in the domain of f, then the functions f and g can be composed to form $(f \circ g)(x)$ .


To evaluate the composition $g \circ f$ (when defined), we find $f(x)$ first and then find $g(f(x))$ . The domain of $g \circ f$ is the set of numbers x in the domain of f such that $f(x)$ lies in the domain of g. 

The functions $f \circ g$ and $g \circ f$ are usually quite different. 

**EXAMPLE 2** If $f(x) = \sqrt{x}$ and $g(x) = x + 1$ , find 


FIGURE 1.29 To shift the graph of $f(x) = x^2$ up (or down), we add positive (or negative) constants to the formula for $f$ (Examples 3a and b).


![[bb93c4f7ad61fc916f63862854d69f7186a7cfb2a6d07856ce6db4994bff2bb7.jpg|image]]


(a) $(f\circ g)(x)$ (b) $(g\circ f)(x)$ (c) $(f\circ f)(x)$ (d) $(g\circ g)(x)$ . 

## **Solution**

## Composition

## Domain

$$
(\mathbf {a}) (f \circ g) (x) = f (g (x)) = \sqrt {g (x)} = \sqrt {x + 1}
$$

$$
[ - 1, \infty)
$$

$$
(\mathbf {b}) (g \circ f) (x) = g (f (x)) = f (x) + 1 = \sqrt {x} + 1
$$

$$
\lceil 0, \infty)
$$

$$
(\mathbf {c}) (f \circ f) (x) = f (f (x)) = \sqrt {f (x)} = \sqrt {\sqrt {x}} = x ^ {1 / 4}
$$

$$
[ 0, \infty)
$$

$$
(\mathbf {d}) (g \circ g) (x) = g (g (x)) = g (x) + 1 = (x + 1) + 1 = x + 2
$$

$$
(- \infty , \infty)
$$

To see why the domain of $f \circ g$ is $[-1, \infty)$ , notice that $g(x) = x + 1$ is defined for all real x but $g(x)$ belongs to the domain of f only if $x + 1 \geq 0$ , that is to say, when $x \geq -1$ . 

Notice that if $f(x) = x^{2}$ and $g(x) = \sqrt{x}$ , then $(f \circ g)(x) = (\sqrt{x})^{2} = x$ . However, the domain of $f \circ g$ is $[0, \infty)$ , not $(-\infty, \infty)$ , since $\sqrt{x}$ requires $x \geq 0$ . 

## Shifting a Graph of a Function

A common way to obtain a new function from an existing one is by adding a constant to each output of the existing function, or to its input variable. The graph of the new function is the graph of the original function shifted vertically or horizontally, as follows. 

## Shift Formulas

## Vertical Shifts

$y = f(x) + k$ Shifts the graph of $f$ up $k$ units if $k > 0$ 

Shifts it down $|k|$ units if $k < 0$ 

## Horizontal Shifts

$y = f(x + h)$ Shifts the graph of $f$ left $h$ units if $h > 0$ 

Shifts it right |h| units if h < 0 

## **EXAMPLE 3**

(a) Adding 1 to the right-hand side of the formula $y = x^2$ to get $y = x^2 + 1$ shifts the graph up 1 unit (Figure 1.29). 

(b) Adding $-2$ to the right-hand side of the formula $y = x^2$ to get $y = x^2 - 2$ shifts the graph down 2 units (Figure 1.29). 

(c) Adding 3 to x in $y = x^{2}$ to get $y = (x + 3)^{2}$ shifts the graph 3 units to the left, while adding -2 shifts the graph 2 units to the right (Figure 1.30). 

(d) Adding $-2$ to $x$ in $y = |x|$ , and then adding $-1$ to the result, gives $y = |x - 2| - 1$ and shifts the graph 2 units to the right and 1 unit down (Figure 1.31). 

## Scaling and Reflecting a Graph of a Function

To scale the graph of a function $y = f(x)$ is to stretch or compress it, vertically or horizontally. This is accomplished by multiplying the function f, or the independent variable x, by an appropriate constant c. Reflections across the coordinate axes are special cases where c = -1. 

![[de5e22c07183458ecd740c2f35858eca2356fedf7c0e768edd131c8d03528176.jpg|image]]


![[cd9c99bc02eec6b8b9a796d232c7f940389fb064578eb0338a9c37e8d8629539.jpg|image]]



FIGURE 1.30 To shift the graph of $y = x^{2}$ to the left, we add a positive constant to x (Example 3c). To shift the graph to the right, we add a negative constant to x.



FIGURE 1.31 The graph of $y = |x|$ shifted 2 units to the right and 1 unit down (Example 3d).


Vertical and Horizontal Scaling and Reflecting Formulas
For c > 1, the graph is scaled: $y = cf(x)$ Stretches the graph of f vertically by a factor of c. $y = \frac{1}{c}f(x)$ Compresses the graph of f vertically by a factor of c. $y = f(cx)$ Compresses the graph of f horizontally by a factor of c. $y = f(x/c)$ Stretches the graph of f horizontally by a factor of c.
For c = -1, the graph is reflected: $y = -f(x)$ Reflects the graph of f across the x-axis. $y = f(-x)$ Reflects the graph of f across the y-axis. 

**EXAMPLE 4** Here we scale and reflect the graph of $y = \sqrt{x} + 1$ . 

(a) Vertical: Multiplying the right-hand side of $y = \sqrt{x} + 1$ by 3 to get $y = 3(\sqrt{x} + 1)$ stretches the graph vertically by a factor of 3, whereas multiplying by 1/3 compresses the graph vertically by a factor of 3 (Figure 1.32). 

(b) Horizontal: The graph of $y = \sqrt{3x} + 1$ is a horizontal compression of the graph of $y = \sqrt{x} + 1$ by a factor of 3, and $y = \sqrt{x/3} + 1$ is a horizontal stretching by a factor of 3 (Figure 1.33). 

(c) Reflection: The graph of $y = -(\sqrt{x} + 1)$ is a reflection of $y = \sqrt{x} + 1$ across the $x$ -axis, and $y = \sqrt{-x} + 1$ is a reflection across the $y$ -axis (Figure 1.34). 

![[256e2cc61608d84986b1d03d7563d09ba28133d1341c97b02a4c4d24e00d8468.jpg|image]]



FIGURE 1.32 Vertically stretching and compressing the graph of $y = \sqrt{x} + 1$ by a factor of 3 (Example 4a).


![[1db9d59dae7326609508bad93c6b03c6c9a242b4df41bc0fbcf3e1e225a6bbf5.jpg|image]]



FIGURE 1.33 Horizontally stretching and compressing the graph of $y = \sqrt{x} + 1$ by a factor of 3 (Example 4b).


![[94f755c921954001bcca4fef0c38a8c94decfbd0f54d10bf5ea43aaf30ef5f9d.jpg|image]]



FIGURE 1.34 Reflections of the graph of $y = \sqrt{x} + 1$ across the coordinate axes (Example 4c).


**EXAMPLE 5** Given the function $f(x) = x^{4} - 4x^{3} + 10$ (Figure 1.35a), find formulas for the graphs resulting from 

(a) horizontal compression by a factor of 2 followed by reflection across the y-axis (Figure 1.35b). 

(b) vertical compression by a factor of 2 followed by reflection across the x-axis (Figure 1.35c). 

![[6c8a03752b348dcb7d5576c0d41668b21213a0b2dbbda1274c59ce958d08426d.jpg|image]]



FIGURE 1.35 (a) The original graph of f. (b) The horizontal compression of $y = f(x)$ in part (a) by a factor of 2, followed by a reflection across the y-axis. (c) The vertical compression of $y = f(x)$ in part (a) by a factor of 2, followed by a reflection across the x-axis (Example 5).


**Solution** 

(a) We multiply $x$ by 2 to get the horizontal compression, and by -1 to give reflection across the $y$ -axis. The formula is obtained by substituting -2x for $x$ in the right-hand side of the equation for $f$ : 

$$
\begin{array}{l} y = f (- 2 x) = (- 2 x) ^ {4} - 4 (- 2 x) ^ {3} + 1 0 \\ \qquad = 1 6 x ^ {4} + 3 2 x ^ {3} + 1 0. \end{array}
$$

(b) The formula is 

$$
y = - \frac {1}{2} f (x) = - \frac {1}{2} x ^ {4} + 2 x ^ {3} - 5.
$$

## EXERCISES

## Algebraic Combinations

In Exercises 1 and 2, find the domains of $f, g, f + g$ , and $f \cdot g$ . 

1. $f(x) = x,\quad g(x) = \sqrt{x - 1}$ 

2. $f(x) = \sqrt{x + 1}$ , $g(x) = \sqrt{x - 1}$ 

In Exercises 3 and 4, find the domains of $f, g, f / g$ , and $g / f$ . 

4. $f(x) = 1,\quad g(x) = 1 + \sqrt{x}$ 

3. $f(x) = 2,\quad g(x) = x^{2} + 1$ 

Compositions of Functions 

5. If $f(x) = x + 5$ and $g(x) = x^{2} - 3$ , find the following. 

b. $g(f(0))$ 

a. $f(g(0))$ 

c. $f(g(x))$ 

d. $g(f(x))$ 

e. $f(f(-5))$ 

f. $g(g(2))$ 

g. $f(f(x))$ h. $g(g(x))$ 

6. If $f(x) = x - 1$ and $g(x) = 1 / (x + 1)$ , find the following. 

a. $f(g(1 / 2))$ b. $g(f(1 / 2))$ 

c. $f(g(x))$ d. $g(f(x))$ 

e. $f(f(2))$ f. $g(g(2))$ 

g. $f(f(x))$ h. $g(g(x))$ 

In Exercises 7–10, write a formula for $f \circ g \circ h$ . 

7. $f(x) = x + 1,\quad g(x) = 3x,\quad h(x) = 4 - x$ 

8. $f(x) = 3x + 4,\quad g(x) = 2x - 1,\quad h(x) = x^{2}$ 

$$
f (x) = \sqrt {x + 1}, g (x) = \frac {1}{x + 4}, h (x) = \frac {1}{x}
$$

10. $f(x) = \frac{x + 2}{3 - x}, g(x) = \frac{x^2}{x^2 + 1}, h(x) = \sqrt{2 - x}$ 

Let $f(x) = x - 3$ , $g(x) = \sqrt{x}$ , $h(x) = x^3$ , and $j(x) = 2x$ . Express each of the functions in Exercises 11 and 12 as a composition involving one or more of $f, g, h$ , and $j$ . 

11. a. $y = \sqrt{x} - 3$ 

b. $y = 2\sqrt{x}$ 

$$
y = x ^ {1 / 4}
$$

d. $y = 4x$ 

$$
y = \sqrt {(x - 3) ^ {3}}
$$

$$
y = (2 x - 6) ^ {3}
$$

12. a. $y = 2x - 3$ 

b. $y = x^{3/2}$ 

$$
y = x ^ {9}
$$

$$
y = x - 6
$$

e. $y = 2\sqrt{x - 3}$ 

f. $y = \sqrt{x^{3} - 3}$ 

13. Copy and complete the following table. 

<table><tr><td></td><td><eq>g(x)</eq></td><td><eq>f(x)</eq></td><td><eq>(f \circ g)(x)</eq></td></tr><tr><td>a.</td><td><eq>x - 7</eq></td><td><eq>\sqrt{x}</eq></td><td>?</td></tr><tr><td>b.</td><td><eq>x + 2</eq></td><td><eq>3x</eq></td><td>?</td></tr><tr><td>c.</td><td>?</td><td><eq>\sqrt{x - 5}</eq></td><td><eq>\sqrt{x^{2} - 5}</eq></td></tr><tr><td>d.</td><td><eq>\frac{x}{x - 1}</eq></td><td><eq>\frac{x}{x - 1}</eq></td><td>?</td></tr><tr><td>e.</td><td>?</td><td><eq>1 + \frac{1}{x}</eq></td><td><eq>x</eq></td></tr><tr><td>f.</td><td><eq>\frac{1}{x}</eq></td><td>?</td><td><eq>x</eq></td></tr></table>

14. Copy and complete the following table. 

<table><tr><td></td><td>g(x)</td><td>f(x)</td><td><eq>(f \circ g)(x)</eq></td></tr><tr><td>a.</td><td><eq>\frac{1}{x-1}</eq></td><td><eq>|x|</eq></td><td>?</td></tr><tr><td>b.</td><td>?</td><td><eq>\frac{x-1}{x}</eq></td><td><eq>\frac{x}{x+1}</eq></td></tr><tr><td>c.</td><td>?</td><td><eq>\sqrt{x}</eq></td><td><eq>|x|</eq></td></tr><tr><td>d.</td><td><eq>\sqrt{x}</eq></td><td>?</td><td><eq>|x|</eq></td></tr></table>

15. Evaluate each expression using the given table of values: 

<table><tr><td>x</td><td>-2</td><td>-1</td><td>0</td><td>1</td><td>2</td></tr><tr><td>f(x)</td><td>1</td><td>0</td><td>-2</td><td>1</td><td>2</td></tr><tr><td>g(x)</td><td>2</td><td>1</td><td>0</td><td>-1</td><td>0</td></tr></table>

a. $f(g(-1))$ b. $g(f(0))$ 

c. $f(f(-1))$ d. $g(g(2))$ 

e. $g(f(-2))$ f. $f(g(1))$ 

16. Evaluate each expression using the functions 

$$
f (x) = 2 - x, \quad g (x) = \left\{ \begin{array}{l l} - x, & - 2 \leq x <   0 \\ x - 1, & 0 \leq x \leq 2. \end{array} \right.
$$

a. $f(g(0))$ b. $g(f(3))$ c. $g(g(-1))$ 

d. $f(f(2))$ e. $g(f(0))$ f. $f(g(1/2))$ 

In Exercises 17 and 18, (a) write formulas for $f \circ g$ and $g \circ f$ and (b) find the domain of each. 

17. $f(x) = \sqrt{x + 1}, g(x) = \frac{1}{x}$ 

18. $f(x) = x^{2}, g(x) = 1 - \sqrt{x}$ 

19. Let $f(x) = \frac{x}{x - 2}$ . Find a function $y = g(x)$ so that $(f \circ g)(x) = x$ . 

20. Let $f(x) = 2x^3 - 4$ . Find a function $y = g(x)$ so that $(f \circ g)(x) = x + 2$ . 

21. A balloon's volume $V$ is given by $V = s^2 + 2s + 3\mathrm{cm}^3$ , where $s$ is the ambient temperature in $^{\circ}\mathrm{C}$ . The ambient temperature $s$ at time $t$ minutes is given by $s = 2t - 3^{\circ}\mathrm{C}$ . Write the balloon's volume $V$ as a function of time $t$ . 

22. Use the graphs of $f$ and $g$ to sketch the graph of $y = f(g(x))$ . 

![[af60b4e3ce2ea3815706fbea1bbc9ac77e37d2b8dfde564dec67234e86a7933d.jpg|image]]


![[209d970bb6ad360f771aeb9500c12209ca566bb209c751ddad92edd7fc790e05.jpg|image]]


## Shifting Graphs

23. The accompanying figure shows the graph of $y = -x^{2}$ shifted to two new positions. Write equations for the new graphs. 

![[d09a4b7738f6e15db94d45b97a1b611bb3b88e2e5c5b7bc04b24d2c9e3877109.jpg|image]]


24. The accompanying figure shows the graph of $y = x^2$ shifted to two new positions. Write equations for the new graphs. 

![[406cea05c4b69f866382b64616eb31958e3df5608f6e983bca0e38eef73cd134.jpg|image]]


25. Match the equations listed in parts (a)-(d) to the graphs in the accompanying figure. 

a. $y = (x - 1)^{2} - 4$ 

b. $y = (x - 2)^{2} + 2$ 

c. $y = (x + 2)^{2} + 2$ 

d. $y = (x + 3)^{2} - 2$ 

![[3ebb2d8be40045da7494a6e403439407269eba179e8fc1d4e77b304f839fece5.jpg|image]]


26. The accompanying figure shows the graph of $y = -x^{2}$ shifted to four new positions. Write an equation for each new graph. 

![[f5b76d7691dfae09e44e46cda42ce95c2085b52592c0097ba62c8085629f9cf5.jpg|image]]


Exercises 27–36 tell how many units and in what directions the graphs of the given equations are to be shifted. Give an equation for the shifted graph. Then sketch the original and shifted graphs together, labeling each graph with its equation. 

27. $x^{2} + y^{2} = 49$ Down 3, left 2 

28. $x^{2} + y^{2} = 25$ Up 3, left 4 

29. $y = x^3$ Left 1, down 1 

30. $y = x^{2 / 3}$ Right 1, down 1 

31. $y = \sqrt{x}$ Left 0.81 

32. $y = -\sqrt{x}$ Right 3 

33. $y = 2x - 7$ Up 7 

34. $y = \frac{1}{2} (x + 1) + 5$ Down 5, right 1 

35. $y = 1 / x$ Up 1, right 1 

36. $y = 1 / x^2$ Left 2, down 1 

Graph the functions in Exercises 37–56. 

37. $y = \sqrt{x + 4}$ 38. $y = \sqrt{9 - x}$ 

39. $y = |x - 2|$ 

41. $y = 1 + \sqrt{x - 1}$ 

40. $y = |1 - x| - 1$ 

42. $y = 1 - \sqrt{x}$ 

43. $y = (x + 1)^{2 / 3}$ 

44. $y = (x - 8)^{2 / 3}$ 

45. $y = 1 - x^{2 / 3}$ 

46. $y + 4 = x^{2 / 3}$ 

47. $y = \sqrt[3]{x - 1} - 1$ 

48. $y = (x + 2)^{3 / 2} + 1$ 

49. $y = \frac{1}{x - 2}$ 

50. $y = \frac{1}{x} - 2$ 

51. $y = \frac{1}{x} + 2$ 

52. $y = \frac{1}{x + 2}$ 

53. $y = \frac{1}{(x - 1)^{2}}$ 

55. $y = \frac{1}{x^2} + 1$ 

54. $y = \frac{1}{x^2} - 1$ 

56. $y = \frac{1}{(x + 1)^{2}}$ 

57. The accompanying figure shows the graph of a function $f(x)$ with domain [0, 2] and range [0, 1]. Find the domains and ranges of the following functions, and sketch their graphs. 

![[846a29a6cf933c6d3880616ffa0c31483d257c0b12f7ea9cef2049a15d0b6bc6.jpg|image]]


a. $f(x) + 2$ b. $f(x) - 1$ 

c. $2f(x)$ d. $-f(x)$ 

e. $f(x + 2)$ f. $f(x - 1)$ 

g. $f(-x)$ h. $-f(x + 1) + 1$ 

58. The accompanying figure shows the graph of a function $g(t)$ with domain $[-4, 0]$ and range $[-3, 0]$ . Find the domains and ranges of the following functions, and sketch their graphs. 

![[58f2537d36322f505dadc4d1dc577a7c0d0040ff3fd2808d91025c70d8a5527a.jpg|image]]


a. $g(-t)$ 

b. $-g(t)$ 

c. $g(t) + 3$ 

d. $1 - g(t)$ 

e. $g(-t + 2)$ 

f. $g(t - 2)$ 

g. $g(1 - t)$ 

h. $-g(t - 4)$ 

Vertical and Horizontal Scaling 

Exercises 59–68 tell in what direction and by what factor the graphs of the given functions are to be stretched or compressed. Give an equation for the stretched or compressed graph. 

59. $y = x^{2} - 1$ , stretched vertically by a factor of 3 

60. $y = x^{2} - 1$ , compressed horizontally by a factor of 2 

61. $y = 1 + \frac{1}{x^2}$ , compressed vertically by a factor of 2 

62. $y = 1 + \frac{1}{x^2}$ , stretched horizontally by a factor of 3 

63. $y = \sqrt{x + 1}$ , compressed horizontally by a factor of 4 

64. $y = \sqrt{x + 1}$ , stretched vertically by a factor of 3 

65. $y = \sqrt{4 - x^{2}}$ , stretched horizontally by a factor of 2 

66. $y = \sqrt{4 - x^{2}}$ , compressed vertically by a factor of 3 

67. $y = 1 - x^3$ , compressed horizontally by a factor of 3 

68. $y = 1 - x^3$ , stretched horizontally by a factor of 2 

## Graphing

In Exercises 69–76, graph each function not by plotting points, but by starting with the graph of one of the standard functions presented in Figures 1.14–1.17 and applying an appropriate transformation. 

69. $y = -\sqrt{2x + 1}$ 

70. $y = \sqrt{1 - \frac{x}{2}}$ 

71. $y = (x - 1)^{3} + 2$ 

72. $y = (1 - x)^{3} + 2$ 

73. $y = \frac{1}{2x} - 1$ 

74. $y = \frac{2}{x^2} + 1$ 

75. $y = -\sqrt[3]{x}$ 

$$
7 6. y = (- 2 x) ^ {2 / 3}
$$

77. Graph the function $y = |x^2 - 1|$ . 

78. Graph the function $y = \sqrt{|x|}$ . 

Combining Functions 

79. Assume that $f$ is an even function, $g$ is an odd function, and both $f$ and $g$ are defined on the entire real line $(-\infty, \infty)$ . Which of the following (where defined) are even? odd? 

b. f/g 

c. g/f 

d. $f^2 = ff$ 

e. $g^{2} = gg$ 

f. $f \circ g$ 

g. $g\circ f$ 

h. $f \circ f$ 

i. $g\circ g$ 

80. Can a function be both even and odd? Give reasons for your answer. 

81. (Continuation of Example 1.) Graph the functions $f(x) = \sqrt{x}$ and $g(x) = \sqrt{1 - x}$ together with their (a) sum, (b) product, (c) two differences, (d) two quotients. 

T 82. Let $f(x) = x - 7$ and $g(x) = x^2$ . Graph $f$ and $g$ together with $f \circ g$ and $g \circ f$ . 

## 1.3 Trigonometric Functions

![[1a50e19045c44ae89155bd76ff5996de4ac94d4282f1991cbc3b29c550519c18.jpg|image]]


## Angles

FIGURE 1.36 The radian measure of the central angle $A'CB'$ is the number $\theta = s / r$ . For a unit circle of radius $r = 1$ , $\theta$ is the length of arc $AB$ that central angle $ACB$ cuts from the unit circle. 

and 

This section reviews radian measure and the basic trigonometric functions. 

Angles are measured in degrees or radians. The number of radians in the central angle $A^{\prime}CB^{\prime}$ within a circle of radius r is defined as the number of “radius units” contained in the arc s subtended by that central angle. If we denote this central angle by $\theta$ when measured in radians, this means that $\theta = s/r$ (Figure 1.36), or 

$$
s = r \theta \quad (\theta \text {   in   radians }).\tag{1}
$$

If the circle is a unit circle having radius r = 1, then from Figure 1.36 and Equation (1), we see that the central angle $\theta$ measured in radians is just the length of the arc that the angle cuts from the unit circle. Since one complete revolution of the unit circle is $360^{\circ}$ or $2\pi$ radians, we have 

$$
\pi \mathrm{radians} = 1 8 0 ^ {\circ}\tag{2}
$$

$$
1 \text {   radian   } = \frac {1 8 0}{\pi} (\approx 5 7. 3) \text {   degrees   } \quad \text { or } \quad 1 \text {   degree   } = \frac {\pi}{1 8 0} (\approx 0. 0 1 7) \text {   radians.   }
$$

Table 1.1 shows the equivalence between degree and radian measures for some basic angles. 


TABLE 1.1 Angles measured in degrees and radians


<table><tr><td>Degrees</td><td>-180</td><td>-135</td><td>-90</td><td>-45</td><td>0</td><td>30</td><td>45</td><td>60</td><td>90</td><td>120</td><td>135</td><td>150</td><td>180</td><td>270</td><td>360</td></tr><tr><td>θ (radians)</td><td>-π</td><td><eq>\frac{-3\pi}{4}</eq></td><td><eq>\frac{-\pi}{2}</eq></td><td><eq>\frac{-\pi}{4}</eq></td><td>0</td><td><eq>\frac{\pi}{6}</eq></td><td><eq>\frac{\pi}{4}</eq></td><td><eq>\frac{\pi}{3}</eq></td><td><eq>\frac{\pi}{2}</eq></td><td><eq>\frac{2\pi}{3}</eq></td><td><eq>\frac{3\pi}{4}</eq></td><td><eq>\frac{5\pi}{6}</eq></td><td><eq>\pi</eq></td><td><eq>\frac{3\pi}{2}</eq></td><td><eq>2\pi</eq></td></tr></table>

![[9130cf54fbf67055f5c39c4a8dbbaff5e82ff635a21095dd7c898fce7886ea70.jpg|image]]



FIGURE 1.39 Trigonometric ratios of an acute angle.


![[6cbbe8389ddf267e8cd0057ae25215182adc83fa817a38eebea97fc83b773f0c.jpg|image]]



FIGURE 1.40 The trigonometric functions of a general angle $\theta$ are defined in terms of x, y, and r.


An angle in the xy-plane is said to be in standard position if its vertex lies at the origin and its initial ray lies along the positive x-axis (Figure 1.37). Angles measured counterclockwise from the positive x-axis are assigned positive measures; angles measured clockwise are assigned negative measures. 

![[2aae338037e312170e552cee4f80f4498080e87f8a00e4cbd41e1a1538c9aec8.jpg|image]]



FIGURE 1.37 Angles in standard position in the xy-plane.


Angles describing counterclockwise rotations can go arbitrarily far beyond $2\pi$ radians or $360^{\circ}$ . Similarly, angles describing clockwise rotations can have negative measures of all sizes (Figure 1.38). 

![[e8f5a33744c37aa3d43971610329bac698e868d90f5cbc1f8b59f96b6b14cc3e.jpg|image]]



FIGURE 1.38 Nonzero radian measures can be positive or negative and can go beyond $2\pi$ .


Angle Convention: Use Radians From now on in this text, it is assumed that all angles are measured in radians unless degrees or some other unit is stated explicitly. When we talk about the angle $\pi/3$ , we mean $\pi/3$ radians (which is $60^{\circ}$ ), not $\pi/3$ degrees. Using radians simplifies many of the operations and computations in calculus. 

## The Six Basic Trigonometric Functions

The trigonometric functions of an acute angle are given in terms of the sides of a right triangle (Figure 1.39). We extend this definition to obtuse and negative angles by first placing the angle in standard position in a circle of radius $r$ . We then define the trigonometric functions in terms of the coordinates of the point $P(x, y)$ where the angle's terminal ray intersects the circle (Figure 1.40). 

sine: 

cosine: 

$$
\begin{array}{l} \sin \theta = \frac {y}{r} \\ \cos \theta = \frac {x}{r} \\ \tan \theta = \frac {y}{x} \end{array}
$$

cosecant: 

tangent: 

secant: 

cotangent: 

$$
\begin{array}{l} \csc \theta = \frac {r}{y} \\ \sec \theta = \frac {r}{x} \\ \cot \theta = \frac {x}{y} \end{array}
$$

These extended definitions agree with the right-triangle definitions when the angle is acute. 

Notice also that whenever the quotients are defined, 

$$
\tan \theta = \frac {\sin \theta}{\cos \theta}
$$

$$
\cot \theta = \frac {1}{\tan \theta}
$$

$$
\sec \theta = \frac {1}{\cos \theta} \quad \csc \theta = \frac {1}{\sin \theta}
$$

![[fd76f8c9c290ce0131d1153d7aed612a65dbbd021d062240b3d0c2852cc1f1aa.jpg|image]]



FIGURE 1.41 Radian angles and side lengths of two common triangles.


![[ebea63c9d2b1b6e614eb19e5aaa60ad25fbbdb05ea4629d91d44f7d7b6825604.jpg|image]]



FIGURE 1.42 The ASTC rule, remembered by the statement “All Students Take Calculus,” tells which trigonometric functions are positive in each quadrant.


As you can see, $\tan\theta$ and $\sec\theta$ are not defined if $x = \cos\theta = 0$ . This means they are not defined if $\theta$ is $\pm\pi/2$ , $\pm3\pi/2$ , .... Similarly, $\cot\theta$ and $\csc\theta$ are not defined for values of $\theta$ for which y = 0, namely $\theta = 0$ , $\pm\pi$ , $\pm2\pi$ , .... 

The exact values of these trigonometric ratios for some angles can be read from the triangles in Figure 1.41. For instance, 

$$
\begin{array}{l l l} \sin \frac {\pi}{4} = \frac {1}{\sqrt {2}} & \sin \frac {\pi}{6} = \frac {1}{2} & \sin \frac {\pi}{3} = \frac {\sqrt {3}}{2} \\ \cos \frac {\pi}{4} = \frac {1}{\sqrt {2}} & \cos \frac {\pi}{6} = \frac {\sqrt {3}}{2} & \cos \frac {\pi}{3} = \frac {1}{2} \\ \tan \frac {\pi}{4} = 1 & \tan \frac {\pi}{6} = \frac {1}{\sqrt {3}} & \tan \frac {\pi}{3} = \sqrt {3} \end{array}
$$

The ASTC rule (Figure 1.42) is useful for remembering when the basic trigonometric functions are positive or negative. For instance, from the triangle in Figure 1.43, we see that 

$$
\sin \frac {2 \pi}{3} = \frac {\sqrt {3}}{2}, \quad \cos \frac {2 \pi}{3} = - \frac {1}{2}, \quad \tan \frac {2 \pi}{3} = - \sqrt {3}.
$$

![[928b0883ba69741df0cdd47675b28c89efe672cccb867e525503ee8cf1f40d5c.jpg|image]]



FIGURE 1.43 The triangle for calculating the sine and cosine of $2\pi /3$ radians. The side lengths come from the geometry of right triangles.



Using a similar method we obtain the values of $\sin \theta$ , $\cos \theta$ , and $\tan \theta$ shown in Table 1.2.



TABLE 1.2 Values of sin θ, cos θ, and tan θ for selected values of θ


<table><tr><td>Degrees</td><td>-180</td><td>-135</td><td>-90</td><td>-45</td><td>0</td><td>30</td><td>45</td><td>60</td><td>90</td><td>120</td><td>135</td><td>150</td><td>180</td><td>270</td><td>360</td></tr><tr><td>θ (radians)</td><td>-π</td><td><eq>\frac{-3\pi}{4}</eq></td><td><eq>\frac{-\pi}{2}</eq></td><td><eq>\frac{-\pi}{4}</eq></td><td>0</td><td><eq>\frac{\pi}{6}</eq></td><td><eq>\frac{\pi}{4}</eq></td><td><eq>\frac{\pi}{3}</eq></td><td><eq>\frac{\pi}{2}</eq></td><td><eq>\frac{2\pi}{3}</eq></td><td><eq>\frac{3\pi}{4}</eq></td><td><eq>\frac{5\pi}{6}</eq></td><td>π</td><td><eq>\frac{3\pi}{2}</eq></td><td><eq>2\pi</eq></td></tr><tr><td>sin θ</td><td>0</td><td><eq>\frac{-\sqrt{2}}{2}</eq></td><td>-1</td><td><eq>\frac{-\sqrt{2}}{2}</eq></td><td>0</td><td><eq>\frac{1}{2}</eq></td><td><eq>\frac{\sqrt{2}}{2}</eq></td><td><eq>\frac{\sqrt{3}}{2}</eq></td><td>1</td><td><eq>\frac{\sqrt{3}}{2}</eq></td><td><eq>\frac{\sqrt{2}}{2}</eq></td><td><eq>\frac{1}{2}</eq></td><td>0</td><td>-1</td><td>0</td></tr><tr><td>cos θ</td><td>-1</td><td><eq>\frac{-\sqrt{2}}{2}</eq></td><td>0</td><td><eq>\frac{\sqrt{2}}{2}</eq></td><td>1</td><td><eq>\frac{\sqrt{3}}{2}</eq></td><td><eq>\frac{\sqrt{2}}{2}</eq></td><td><eq>\frac{1}{2}</eq></td><td>0</td><td><eq>-\frac{1}{2}</eq></td><td><eq>-\frac{\sqrt{2}}{2}</eq></td><td><eq>-\frac{\sqrt{3}}{2}</eq></td><td>-1</td><td>0</td><td>1</td></tr><tr><td>tan θ</td><td>0</td><td>1</td><td></td><td>-1</td><td>0</td><td><eq>\frac{\sqrt{3}}{3}</eq></td><td>1</td><td><eq>\sqrt{3}</eq></td><td></td><td><eq>-\sqrt{3}</eq></td><td>-1</td><td><eq>\frac{-\sqrt{3}}{3}</eq></td><td>0</td><td></td><td>0</td></tr></table>

## Periodicity and Graphs of the Trigonometric Functions

When an angle of measure $\theta$ and an angle of measure $\theta + 2\pi$ are in standard position, their terminal rays coincide. The two angles therefore have the same trigonometric function values: $\sin(\theta + 2\pi) = \sin\theta$ , $\tan(\theta + 2\pi) = \tan\theta$ , and so on. Similarly, $\cos(\theta - 2\pi) = \cos\theta$ , $\sin(\theta - 2\pi) = \sin\theta$ , and so on. We describe this repeating behavior by saying that the six basic trigonometric functions are periodic. 

## Periods of Trigonometric Functions

Period $\pi$ : $\tan (x + \pi) = \tan x$ $\cot (x + \pi) = \cot x$ 

Period 2π: $\sin(x + 2\pi) = \sin x$ $\cos(x + 2\pi) = \cos x$ $\sec(x + 2\pi) = \sec x$ $\csc(x + 2\pi) = \csc x$ 

> ***DEFINITION*** A function $f(x)$ is periodic if there is a positive number p such that $f(x + p) = f(x)$ for every value of x. The smallest such value of p is the period of f. 

When we graph trigonometric functions in the coordinate plane, we usually denote the independent variable by x instead of $\theta$ . Figure 1.44 shows that the tangent and cotangent functions have period $p = \pi$ , and the other four functions have period $2\pi$ . Also, the symmetries in these graphs reveal that the cosine and secant functions are even and the other four functions are odd (although this does not prove those results). 

![[ba281bf3aa29b1b82249b23caa56db2d52f163b37ae028b244ebbe494c1d96ac.jpg|image]]


![[ff8129dcbd1e909ee75de068c3059f741767e98f92fc994f254e1cee068a81ca.jpg|image]]



FIGURE 1.44 Graphs of the six basic trigonometric functions using radian measure. The shading for each trigonometric function indicates its periodicity.


![[427bbededf1026c6f8c90604b935c6a6312d137fcc28002f7c339407cded7d15.jpg|image]]



FIGURE 1.45 The reference triangle for a general angle $\theta$ .


## Trigonometric Identities

The coordinates of any point $P(x, y)$ in the plane can be expressed in terms of the point's distance $r$ from the origin and the angle $\theta$ that ray $OP$ makes with the positive $x$ -axis (Figure 1.40). Since $x / r = \cos \theta$ and $y / r = \sin \theta$ , we have 

$$
x = r \cos \theta , y = r \sin \theta .
$$

When $r = 1$ we can apply the Pythagorean theorem to the reference right triangle in Figure 1.45 and obtain the equation 

$$
\cos^ {2} \theta + \sin^ {2} \theta = 1.\tag{3}
$$

![[ab05410439f5b9373c904b0d760df98423a2923befb9ec22b95d5a30e618d17b.jpg|image]]


![[3d27ad8115a91355ede07759bd4fd894d099c9e59bff0fc139664a27e9c9ff40.jpg|image]]



FIGURE 1.46 In a geometric proof of the angle sum identities we compare the opposite sides of the rectangle, which are equal. This assumes that A, B, and $A + B$ are acute, but the identities hold for all values of A and B.


This equation, true for all values of $\theta$ , is the most frequently used identity in trigonometry. Dividing this identity in turn by $\cos^{2}\theta$ and $\sin^{2}\theta$ gives 

$$
1 + \tan^ {2} \theta = \sec^ {2} \theta
$$

$$
1 + \cot^ {2} \theta = \csc^ {2} \theta
$$

The following formulas hold for all angles $A$ and $B$ (see Figure 1.46 and Exercise 58). 

Addition Formulas 

$$
\begin{array}{l} \cos (A + B) = \cos A \cos B - \sin A \sin B \\ \sin (A + B) = \sin A \cos B + \cos A \sin B \end{array}\tag{4}
$$

There are similar formulas for $\cos(A - B)$ and $\sin(A - B)$ (Exercises 35 and 36). All the trigonometric identities needed in this text derive from Equations (3) and (4). For example, substituting $\theta$ for both A and B in the addition formulas gives 

Double-Angle Formulas 

$$
\begin{array}{l} \cos 2 \theta = \cos^ {2} \theta - \sin^ {2} \theta \\ \sin 2 \theta = 2 \sin \theta \cos \theta \end{array}\tag{5}
$$

Additional formulas come from combining the equations 

$$
\cos^ {2} \theta + \sin^ {2} \theta = 1, \quad \cos^ {2} \theta - \sin^ {2} \theta = \cos 2 \theta .
$$

We add the two equations to get $2 \cos^{2} \theta = 1 + \cos 2\theta$ and subtract the second from the first to get $2 \sin^{2} \theta = 1 - \cos 2\theta$ . This results in the following identities, which are useful in integral calculus. 

Half-Angle Formulas 

$$
\cos^ {2} \theta = \frac {1 + \cos 2 \theta}{2}\tag{6}
$$

$$
\sin^ {2} \theta = \frac {1 - \cos 2 \theta}{2}\tag{7}
$$

## The Law of Cosines

If a, b, and c are sides of a triangle ABC and if $\theta$ is the angle opposite c, then 

$$
c ^ {2} = a ^ {2} + b ^ {2} - 2 a b \cos \theta .\tag{8}
$$

This equation is called the law of cosines. 

![[92249c0e1e60996827ef7253543d1fc2d7a5519ca9019b858c24af65860c442f.jpg|image]]



FIGURE 1.47 The square of the distance between A and B gives the law of cosines.


$$
\begin{array}{l} c ^ {2} = (a \cos \theta - b) ^ {2} + (a \sin \theta) ^ {2} \\ \quad = a ^ {2} (\underbrace {\cos^ {2} \theta + \sin^ {2} \theta} _ {1}) + b ^ {2} - 2 a b \cos \theta \\ \quad = a ^ {2} + b ^ {2} - 2 a b \cos \theta . \end{array}
$$

The law of cosines generalizes the Pythagorean theorem. If $\theta = \pi / 2$ , then $\cos \theta = 0$ and $c^2 = a^2 + b^2$ . 

To see why the law holds, we position the triangle in the xy-plane with the origin at C and the positive x-axis along one side of the triangle, as in Figure 1.47. The coordinates of A are $(b,0)$ ; the coordinates of B are $(a\cos\theta,a\sin\theta)$ . The square of the distance between A and B is therefore 

![[047383b0cfa97d78ebaa492348fcf9c60c362ea8fb4cecefba40e09fc9fc97fa.jpg|image]]



FIGURE 1.48 From the geometry of this figure, drawn for $\theta > 0$ , we get the inequality $\sin^2\theta + (1 - \cos \theta)^2 \leq \theta^2$ .


## Two Special Inequalities

For any angle $\theta$ measured in radians, the sine and cosine functions satisfy 

$$
- | \theta | \leq \sin \theta \leq | \theta | \quad \text { and } \quad - | \theta | \leq 1 - \cos \theta \leq | \theta |.
$$

To establish these inequalities, we picture $\theta$ as a nonzero angle in standard position (Figure 1.48). The circle in the figure is a unit circle, so $|\theta|$ equals the length of the circular arc AP. The length of line segment AP is therefore less than $|\theta|$ . 

Triangle APQ is a right triangle with sides of length 

$$
Q P = | \sin \theta |, \quad A Q = 1 - \cos \theta .
$$

From the Pythagorean theorem and the fact that $AP < |\theta|$ , we get 

$$
\sin^ {2} \theta + (1 - \cos \theta) ^ {2} = (A P) ^ {2} \leq \theta^ {2}.\tag{9}
$$

The terms on the left-hand side of Equation (9) are both positive, so each is smaller than their sum and hence is less than or equal to $\theta^{2}$ : 

$$
\sin^ {2} \theta \leq \theta^ {2} \quad \text { and } \quad (1 - \cos \theta) ^ {2} \leq \theta^ {2}.
$$

By taking square roots, this is equivalent to saying that 

$$
\left| \sin \theta \right| \leq | \theta | \quad \text { and } \quad \left| 1 - \cos \theta \right| \leq | \theta |,
$$

SO 

$$
- | \theta | \leq \sin \theta \leq | \theta | \quad \text { and } \quad - | \theta | \leq 1 - \cos \theta \leq | \theta |.
$$

These inequalities will be useful in the next chapter. 

## Transformations of Trigonometric Graphs

The rules for shifting, stretching, compressing, and reflecting the graph of a function summarized in the following diagram apply to the trigonometric functions we have discussed in this section. 

![[0db854a90324d594459f7eae6345bc7c251864264c4faa2fce6a5cf4213464bd.jpg|image]]


The transformation rules applied to the sine function give the general sine function or sinusoid formula 

$$
f (x) = A \sin \left(\frac {2 \pi}{B} (x - C)\right) + D,
$$

where $|A|$ is the amplitude, $|B|$ is the period, C is the horizontal shift, and D is the vertical shift. A graphical interpretation of the various terms is given below. 

![[98a4002c5aa1f5f09ba5195df84866e14029f983c06cf0f5cebba2bce8b53bea.jpg|image]]


## EXERCISES 1.3

## Radians and Degrees

1. On a circle of radius 10 m, how long is an arc that subtends a central angle of (a) $4\pi/5$ radians? (b) $110^{\circ}$ ? 

2. A central angle in a circle of radius 8 is subtended by an arc of length $10\pi$ . Find the angle's radian and degree measures. 

3. You want to make an $80^{\circ}$ angle by marking an arc on the perimeter of a 12-cm-diameter disk and drawing lines from the ends of the arc to the disk's center. To the nearest millimeter, how long should the arc be? 

T 4. If you roll a 1-m-diameter wheel forward 30 cm over level ground, through what angle will the wheel turn? Answer in radians (to the nearest tenth) and degrees (to the nearest degree). 

## Evaluating Trigonometric Functions

5. Copy and complete the following table of function values. If the function is undefined at a given angle, enter “UND.” Do not use a calculator or tables. 

<table><tr><td><eq>\theta</eq></td><td><eq>-\pi</eq></td><td><eq>-2\pi/3</eq></td><td><eq>0</eq></td><td><eq>\pi/2</eq></td><td><eq>3\pi/4</eq></td></tr><tr><td><eq>\sin \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\cos \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\tan \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\cot \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\sec \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\csc \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr></table>

6. Copy and complete the following table of function values. If the function is undefined at a given angle, enter “UND.” Do not use a calculator or tables. 

<table><tr><td><eq>\theta</eq></td><td><eq>-3\pi/2</eq></td><td><eq>-\pi/3</eq></td><td><eq>-\pi/6</eq></td><td><eq>\pi/4</eq></td><td><eq>5\pi/6</eq></td></tr><tr><td><eq>\sin \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\cos \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\tan \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\cot \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\sec \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><eq>\csc \theta</eq></td><td></td><td></td><td></td><td></td><td></td></tr></table>

In Exercises 7–12, one of $\sin x$ , $\cos x$ , and $\tan x$ is given. Find the other two if x lies in the specified interval. 

7. $\sin x = \frac{3}{5}, x \in \left[\frac{\pi}{2}, \pi\right]$ 8. $\tan x = 2, x \in \left[0, \frac{\pi}{2}\right]$ 

9. $\cos x = \frac{1}{3}, x \in \left[-\frac{\pi}{2}, 0\right]$ 10. $\cos x = -\frac{5}{13}, x \in \left[\frac{\pi}{2}, \pi\right]$ 

11. $\tan x = \frac{1}{2}, x \in \left[\pi, \frac{3\pi}{2}\right]$ 12. $\sin x = -\frac{1}{2}, x \in \left[\pi, \frac{3\pi}{2}\right]$ 

## Graphing Trigonometric Functions

Graph the functions in Exercises 13–22. What is the period of each function? 

13. $\sin 2x$ 14. $\sin (x / 2)$ 

15. $\cos \pi x$ 16. $\cos \frac{\pi x}{2}$ 

17. $-\sin \frac{\pi x}{3}$ 

18. $-\cos 2\pi x$ 

19. $\cos \left(x - \frac{\pi}{2}\right)$ 20. $\sin \left(x + \frac{\pi}{6}\right)$ 

21. $\sin \left(x - \frac{\pi}{4}\right) + 1$ 22. $\cos \left(x + \frac{2\pi}{3}\right) - 2$ 

Graph the functions in Exercises 23–26 in the ts-plane (t-axis horizontal, s-axis vertical). What is the period of each function? What symmetries do the graphs have? 

23. $s = \cot 2t$ 

24. $s = -\tan \pi t$ 

25. $s = \sec\left(\frac{\pi t}{2}\right)$ 

26. $s = \csc \left(\frac{t}{2}\right)$ 

27. a. Graph $y = \cos x$ and $y = \sec x$ together for $-3\pi / 2 \leq x \leq 3\pi / 2$ . Comment on the behavior of sec $x$ in relation to the signs and values of $\cos x$ . 

b. Graph $y = \sin x$ and $y = \csc x$ together for $-\pi \leq x \leq 2\pi$ . Comment on the behavior of $\csc x$ in relation to the signs and values of $\sin x$ . 

28. Graph $y = \tan x$ and $y = \cot x$ together for $-7 \leq x \leq 7$ . Comment on the behavior of $\cot x$ in relation to the signs and values of $\tan x$ . 

29. Graph $y = \sin x$ and $y = \lfloor \sin x \rfloor$ together. What are the domain and range of $\lfloor \sin x \rfloor$ ? 

30. Graph $y = \sin x$ and $y = [\sin x]$ together. What are the domain and range of $[\sin x]$ ? 

## Using the Addition Formulas

Use the addition formulas to derive the identities in Exercises 31–36. 

31. $\cos \left(x - \frac{\pi}{2}\right) = \sin x$ 

32. $\cos \left(x + \frac{\pi}{2}\right) = -\sin x$ 

33. $\sin \left(x + \frac{\pi}{2}\right) = \cos x$ 

34. $\sin \left(x - \frac{\pi}{2}\right) = -\cos x$ 

35. $\cos (A - B) = \cos A\cos B + \sin A\sin B$ (Exercise 57 provides a different derivation.) 

36. $\sin (A - B) = \sin A\cos B - \cos A\sin B$ 

37. What happens if you take B = A in the trigonometric identity $\cos(A - B) = \cos A \cos B + \sin A \sin B$ ? Does the result agree with something you already know? 

38. What happens if you take $B = 2\pi$ in the addition formulas? Do the results agree with something you already know? 

In Exercises 39–42, express the given quantity in terms of $\sin x$ and $\cos x$ . 

39. $\cos (\pi +x)$ 40. $\sin (2\pi -x)$ 

41. $\sin \left(\frac{3\pi}{2} - x\right)$ 42. $\cos \left(\frac{3\pi}{2} + x\right)$ 

43. Evaluate $\sin \frac{7\pi}{12}$ as $\sin \left(\frac{\pi}{4} + \frac{\pi}{3}\right)$ . 

44. Evaluate $\cos \frac{11\pi}{12}$ as $\cos \left(\frac{\pi}{4} + \frac{2\pi}{3}\right)$ . 

45. Evaluate $\cos \frac{\pi}{12}$ . 46. Evaluate $\sin \frac{5\pi}{12}$ . 

Using the Half-Angle Formulas 

Find the function values in Exercises 47–50. 

47. $\cos^2\frac{\pi}{8}$ 

$$
\cos^ {2} \frac {5 \pi}{1 2}
$$

49. $\sin^2\frac{\pi}{12}$ 50. $\sin^2\frac{3\pi}{8}$ 

## Solving Trigonometric Equations

For Exercises 51–54, solve for the angle $\theta$ , where $0 \leq \theta \leq 2\pi$ . 

51. $\sin^2\theta = \frac{3}{4}$ 

52. $\sin^2\theta = \cos^2\theta$ 

53. $\sin 2\theta - \cos \theta = 0$ 

54. $\cos 2\theta +\cos \theta = 0$ 

## Theory and Examples

55. The tangent sum formula of the sum of two angles is The standard formula for the tangent 

$$
\tan (A + B) = \frac {\tan A + \tan B}{1 - \tan A \tan B}.
$$

Derive the formula. 

56. (Continuation of Exercise 55.) Derive a formula for $\tan(A - B)$ . 

57. Apply the law of cosines to the triangle in the accompanying figure to derive the formula for $\cos (A - B)$ . 

![[fe3acaffe0be759d91e2adc6b337bcb147a5ca6e81a108724307557c535bb27a.jpg|image]]


58. a. Apply the formula for $\cos(A - B)$ to the identity $\sin\theta = \cos\left(\frac{\pi}{2} - \theta\right)$ to obtain the addition formula for $\sin(A + B)$ . 

b. Derive the formula for $\cos(A + B)$ by substituting -B for B in the formula for $\cos(A - B)$ from Exercise 35. 

59. A triangle has sides $a = 2$ and $b = 3$ and angle $C = 60^{\circ}$ . Find the length of side $c$ . 

60. A triangle has sides $a = 2$ and $b = 3$ and angle $C = 40^{\circ}$ . Find the length of side $c$ . 

61. The law of sines The law of sines says that if $a, b$ , and $c$ are the sides opposite the angles $A, B$ , and $C$ in a triangle, then 

$$
{\frac {\sin A}{a}} = {\frac {\sin B}{b}} = {\frac {\sin C}{c}}.
$$

Use the accompanying figures and the identity $\sin(\pi - \theta) = \sin\theta$ , if required, to derive the law. 

![[1e820f58e304ce8b3f945b6d1d3a9b349c39e6b76326b063b0f57112cb65894d.jpg|image]]


![[87c454f42a2153692ae2b4c0c3436b3e47bd090adea9adac0772a87f3a4b09d5.jpg|image]]


62. A triangle has sides $a = 2$ and $b = 3$ and angle $C = 60^{\circ}$ (as in Exercise 59). Find the sine of angle $B$ using the law of sines. 

![[4cc1bf3722e159641838ec1d95e6f954df849b1d285b41eeb53bd646e420aa0d.jpg|image]]


T 63. A triangle has side $c = 2$ and angles $A = \pi / 4$ and $B = \pi / 3$ . Find the length $a$ of the side opposite $A$ . 

64. Consider the length h of the perpendicular from point B to side b in the given triangle. Show that 

$$
h = \frac {b \tan \alpha \tan \gamma}{\tan \alpha + \tan \gamma}
$$

![[1a52ca772363a8102868303e9967ca9e1adeda6c348fcf88153e33dcd0725e99.jpg|image]]


65. Refer to the given figure. Write the radius $r$ of the circle in terms of $\alpha$ and $\theta$ . 

![[f7a1cd6ac209f2501e593edeb6972619db9275db84c5e3159353adffd0015edd.jpg|image]]


66. The approximation $\sin x \approx x$ It is often useful to know that, when $x$ is measured in radians, $\sin x \approx x$ for numerically small values of $x$ . In Section 3.11, we will see why the approximation holds. The approximation error is less than 1 in 5000 if $|x| < 0.1$ . 

a. With your grapher in radian mode, graph $y = \sin x$ and y = x together in a viewing window about the origin. What do you see happening as x nears the origin? 

b. With your grapher in degree mode, graph $y = \sin x$ and y = x together about the origin again. How is the picture different from the one obtained with radian mode? 

General Sine Curves 

For 

$$
f (x) = A \sin \left(\frac {2 \pi}{B} (x - C)\right) + D,
$$

identify A, B, C, and D for the sine functions in Exercises 67–70 and sketch their graphs. 

$$
\mathbf {6 7 .} y = 2 \sin (x + \pi) - 1 \quad \mathbf {6 8 .} y = \frac {1}{2} \sin (\pi x - \pi) + \frac {1}{2}
$$

$$
\mathbf {6 9 .} y = - \frac {2}{\pi} \sin \left(\frac {\pi}{2} t\right) + \frac {1}{\pi} \quad \mathbf {7 0 .} y = \frac {L}{2 \pi} \sin \frac {2 \pi t}{L}, L > 0
$$

COMPUTER EXPLORATIONS 

In Exercises 71–74, you will explore graphically the general sine function 

$$
f (x) = A \sin \left(\frac {2 \pi}{B} (x - C)\right) + D
$$

as you change the values of the constants A, B, C, and D. Use a CAS or computer grapher to perform the steps in the exercises. 

71. The period B Set the constants A = 3 and C = D = 0. 

a. Plot $f(x)$ for the values B = 1, 3, $2\pi$ , $5\pi$ over the interval $-4\pi \leq x \leq 4\pi$ . Describe what happens to the graph of the general sine function as the period increases. 

b. What happens to the graph for negative values of $B$ ? Try it with $B = -3$ and $B = -2\pi$ . 

72. The horizontal shift C Set the constants A = 3, B = 6, D = 0. 

a. Plot $f(x)$ for the values C = 0, 1, and 2 over the interval $-4\pi \leq x \leq 4\pi$ . Describe what happens to the graph of the general sine function as C increases through positive values. 

b. What happens to the graph for negative values of $C$ ? 

c. What smallest positive value should be assigned to $C$ so the graph exhibits no horizontal shift? Confirm your answer with a plot. 

73. The vertical shift D Set the constants A = 3, B = 6, C = 0. 

a. Plot $f(x)$ for the values $D = 0, 1$ , and 3 over the interval $-4\pi \leq x \leq 4\pi$ . Describe what happens to the graph of the general sine function as $D$ increases through positive values. 

b. What happens to the graph for negative values of $D$ ? 

74. The amplitude A Set the constants B = 6 and C = D = 0. 

a. Describe what happens to the graph of the general sine function as A increases through positive values. Confirm your answer by plotting $f(x)$ for the values A = 1, 5, and 9. 

b. What happens to the graph for negative values of $A$ ? 

## 1.4 Exponential Functions

Exponential functions occur in a wide variety of applications, including interest rates, radioactive decay, population growth, the spread of a disease, consumption of natural resources, the earth's atmospheric pressure, temperature change of a heated object placed in a cooler environment, and the dating of fossils. In this section we introduce these functions informally, using an intuitive approach. We give a rigorous development of them in Chapter 7, based on the ideas of integral calculus. 

## Exponential Behavior

When a positive quantity $P$ doubles, it increases by a factor of 2 and the quantity becomes $2P$ . If it doubles again, it becomes $2(2P) = 2^2 P$ , and a third doubling gives $2(2^2 P) = 2^3 P$ . Continuing to double in this fashion leads us to consider the function $f(x) = 2^x$ . We call this an exponential function because the variable $x$ appears in the exponent of $2^x$ . Functions 

Don't confuse the exponential $2^x$ with the power function $x^2$ . In the exponential, the variable $x$ is in the exponent, whereas the variable $x$ is the base in the power function. 

such as $g(x) = 10^{x}$ and $h(x) = (1/2)^{x}$ are other examples of exponential functions. In general, if $a \neq 1$ is a positive constant, the function 

$$
f (x) = a ^ {x}
$$

is the exponential function with base $a$ . 

**EXAMPLE 1** In 2022, $100 is put into an investment account, where it grows by accruing interest that is compounded annually (once a year) at an interest rate of 5.5%. Assuming no additional funds are deposited to the account and no money is withdrawn, give a formula for a function describing the amount A in the account after x years have elapsed. 

**Solution** If P = 100, at the end of the first year the amount in the account is the original amount plus the interest accrued, or 

$$
P + \left(\frac {5 . 5}{1 0 0}\right) P = (1 + 0. 0 5 5) P = (1. 0 5 5) P.
$$

At the end of the second year the account earns interest again and grows to 

$$
(1 + 0. 0 5 5) \cdot (1. 0 5 5 P) = (1. 0 5 5) ^ {2} P = 1 0 0 \cdot (1. 0 5 5) ^ {2}. \quad P = 1 0 0
$$

Continuing this process, after x years the value of the account is 

$$
A = 1 0 0 \cdot (1. 0 5 5) ^ {x}.
$$

This is a multiple of the exponential function $f(x) = (1.055)^{x}$ with base 1.055. Table 1.3 shows the amounts accrued over the first four years. Notice that the amount in the account each year is always 1.055 times its value in the previous year. 


TABLE 1.3 Investment account growth


<table><tr><td>Year</td><td>Amount (dollars)</td><td>Yearly increase</td></tr><tr><td>2022</td><td>100</td><td></td></tr><tr><td>2023</td><td><eq>100(1.055) = 105.50</eq></td><td>5.50</td></tr><tr><td>2024</td><td><eq>100(1.055)^{2} \approx 111.30</eq></td><td>5.80</td></tr><tr><td>2025</td><td><eq>100(1.055)^{3} \approx 117.42</eq></td><td>6.12</td></tr><tr><td>2026</td><td><eq>100(1.055)^{4} \approx 123.88</eq></td><td>6.46</td></tr></table>

In general, the amount after x years is given by $P(1 + r)^{x}$ , where P is the starting amount and r is the interest rate (expressed as a decimal). 

For integer and rational exponents, the value of an exponential function $f(x) = a^{x}$ is obtained arithmetically by taking an appropriate number of products, quotients, or roots. If x = n is a positive integer, the number $a^{n}$ is given by multiplying a by itself n times: 

$$
a ^ {n} = \underbrace {a \cdot a \cdot \cdots \cdot a .} _ {n \text {   factors }}
$$

If $x = 0$ , then we set $a^0 = 1$ , and if $x = -n$ for some positive integer $n$ , then 

$$
a ^ {- n} = \frac {1}{a ^ {n}} = \left(\frac {1}{a}\right) ^ {n}.
$$

If $x = 1 / n$ for some positive integer $n$ , then 

$$
a ^ {1 / n} = \sqrt [ n ]{a},
$$

which is the positive number that when multiplied by itself $n$ times gives $a$ . If $x = p / q$ is any rational number, then 

$$
a ^ {p / q} = \sqrt [ q ]{a ^ {p}} = \left(\sqrt [ q ]{a}\right) ^ {p}.
$$

![[a49795e1ce728041c3ed5cc5e73562aef2a4b9b17d03f98bafab3ad4054ca3da.jpg|image]]


$$
y = 2 ^ {x}, y = 3 ^ {x}, y = 1 0 ^ {x}
$$

![[ee1cbe3579f43de65957ad73345870d2a5016731b3a3bc4ff03acf7d10f7e955.jpg|image]]


$$
y = 2 ^ {- x}, y = 3 ^ {- x}, y = 1 0 ^ {- x}
$$


FIGURE 1.49 Graphs of exponential functions.



TABLE 1.4 Values of $2^{\sqrt{3}}$ for rational r closer and closer to $\sqrt{3}$


<table><tr><td>r</td><td><eq>2^{r}</eq></td></tr><tr><td>1.0</td><td>2.000000000</td></tr><tr><td>1.7</td><td>3.249009585</td></tr><tr><td>1.73</td><td>3.317278183</td></tr><tr><td>1.732</td><td>3.321880096</td></tr><tr><td>1.7320</td><td>3.321880096</td></tr><tr><td>1.73205</td><td>3.321995226</td></tr><tr><td>1.732050</td><td>3.321995226</td></tr><tr><td>1.7320508</td><td>3.321997068</td></tr><tr><td>1.73205080</td><td>3.321997068</td></tr><tr><td>1.732050808</td><td>3.321997086</td></tr></table>

When $x$ is irrational, the meaning of $a^x$ is not immediately apparent. The value of $a^x$ can be approximated by raising $a$ to rational numbers that get closer and closer to the irrational number $x$ . We will describe this informally now and will give a rigorous definition in Chapter 7. 

The graphs of several exponential functions are shown in Figure 1.49. These graphs show the values of the exponential functions for real inputs x. We choose the value of $a^{x}$ when x is irrational so that there are no “holes” or “jumps” in the graph of $a^{x}$ (these words are not rigorous mathematical terms, but they informally convey the underlying idea). The value of $a^{x}$ when x is irrational is chosen so that the function $f(x) = a^{x}$ is continuous, a notion that will be carefully developed in Chapter 2. This choice ensures that the graph is increasing when a > 1 and is decreasing when 0 < a < 1 (see Figure 1.49). 

We illustrate how to define the value of an exponential function at an irrational power using the exponential function $f(x) = 2^{x}$ . How do we make sense of the expression $2^{\sqrt{3}}$ ? Any particular irrational number, say $x = \sqrt{3}$ , has a decimal expansion 

$$
\sqrt {3} = 1. 7 3 2 0 5 0 8 0 8 \dots .
$$

We then consider the list of powers of 2 with more and more digits in the decimal expansion, 

$$
2 ^ {1}, 2 ^ {1. 7}, 2 ^ {1. 7 3}, 2 ^ {1. 7 3 2}, 2 ^ {1. 7 3 2 0}, 2 ^ {1. 7 3 2 0 5}, \dots .\tag{1}
$$

We know the meaning of each number in list (1) because the successive decimal approximations to $\sqrt{3}$ given by 1, 1.7, 1.73, 1.732, and so on are all rational numbers. As these decimal approximations get closer and closer to $\sqrt{3}$ , it seems reasonable that the list of numbers in (1) gets closer and closer to some fixed number, which we specify to be $2^{\sqrt{3}}$ . 

Table 1.4 illustrates how taking better approximations to $\sqrt{3}$ gives better approximations to the number $2^{\sqrt{3}} \approx 3.321997086$ . It is the completeness property of the real numbers (discussed in Appendix A.7) which guarantees that this procedure gives a single number we define to be $2^{\sqrt{3}}$ (although it is beyond the scope of this text to give a proof). In a similar way, we can identify the number $2^{x}$ (or $a^{x}, a > 0$ ) for any irrational x. By identifying the number $a^{x}$ for both rational and irrational x, we eliminate any “holes” or “gaps” in the graph of $a^{x}$ . 

Exponential functions obey the rules of exponents listed below. It is easy to check these rules using algebra when the exponents are integers or rational numbers. We prove them for all real exponents in Chapter 7. 

## Rules for Exponents

If $a > 0$ and $b > 0$ , the following rules hold for all real numbers $x$ and $y$ . 

$$
a ^ {x} \cdot a ^ {y} = a ^ {x + y}
$$

$$
2. \frac {a ^ {x}}{a ^ {y}} = a ^ {x - y}
$$

$$
(a ^ {x}) ^ {y} = (a ^ {y}) ^ {x} = a ^ {x y}
$$

$$
4. a ^ {x} \cdot b ^ {x} = (a b) ^ {x}
$$

$$
\frac {a ^ {x}}{b ^ {x}} = \left(\frac {a}{b}\right) ^ {x}
$$

## **EXAMPLE 2** We use the rules for exponents to simplify some numerical expressions.

1. $3^{1.1} \cdot 3^{0.7} = 3^{1.1 + 0.7} = 3^{1.8}$ 

$$
2. \frac {(\sqrt {1 0}) ^ {3}}{\sqrt {1 0}} = (\sqrt {1 0}) ^ {3 - 1} = (\sqrt {1 0}) ^ {2} = 1 0 \quad \text {   Rule   2   }
$$

3. $\left(5^{\sqrt{2}}\right)^{\sqrt{2}} = 5^{\sqrt{2} \cdot \sqrt{2}} = 5^{2} = 25$ Rule 3 

4. $7^{\pi} \cdot 8^{\pi} = (56)^{\pi}$ 

$$
5. \left(\frac {4}{9}\right) ^ {1 / 2} = \frac {4 ^ {1 / 2}}{9 ^ {1 / 2}} = \frac {2}{3}
$$

## The Natural Exponential Function $e^{x}$

The most important exponential function used for modeling natural, physical, and economic phenomena is the natural exponential function, whose base is the special number e. The number e is irrational, and its value to nine decimal places is 2.718281828. (In Section 3.8 we will see a way to calculate the value of e.) It might seem strange that we would use this number for a base rather than a simple number like 2 or 10. The advantage in using e as a base is that it greatly simplifies many of the calculations in calculus. 

In Figure 1.49a you can see that for $x \geq 0$ , the graphs of the exponential functions $y = a^{x}$ get steeper as the base a gets larger. This idea of steepness is conveyed by the slope of the tangent line to the graph at a point. Tangent lines to graphs of functions are defined precisely in the next chapter, but intuitively the tangent line to the graph at a point is the line that best approximates the graph at the point, like a tangent to a circle. Figure 1.50 shows the slope of the graph of $y = a^{x}$ as it crosses the y-axis for some values of a. Notice that the slope is exactly equal to 1 when a equals the number e. The slope is smaller than 1 if a < e, and larger than 1 if a > e. The graph of $y = e^{x}$ has slope 1 when it crosses the y-axis. 

![[51f676d3fc0c7bd05a3a9229b3bc9db424c8d92864308b01c8fb3950f30475ff.jpg|image]]



FIGURE 1.50 Among the exponential functions, the graph of $y = e^x$ has the property that the slope $m$ of the tangent line to the graph is exactly 1 when it crosses the $y$ -axis. The slope is smaller for a base less than $e$ , such as $2^x$ , and larger for a base greater than $e$ , such as $3^x$ .


## Exponential Growth and Decay

The function $y = y_{0} e^{kx}$ , where k is a nonzero constant, is a model for exponential growth if k > 0 and a model for exponential decay if k < 0. Here $y_{0}$ is a positive constant that represents the value of the function when x = 0. An example of exponential growth occurs when computing interest compounded continuously. This is modeled by the formula $y = Pe^{rt}$ , where P is the initial monetary investment, r is the interest rate as a decimal, and t is time in units consistent with r. An example of exponential decay is the model $y = Ae^{-1.2 \times 10^{-4} t}$ , which represents how the radioactive isotope carbon-14 decays over time. Here A is the original amount of carbon-14 and t is the time in years. Carbon-14 decay is used to date the remains of dead organisms such as shells, seeds, and wooden artifacts. Figure 1.51 shows graphs of exponential growth and exponential decay. 

![[92234aa9c06ead9757b5d654861c4494de0d88a02e84cce1c5436b63094c81e2.jpg|image]]



(a)


![[3e768d0cffccbcf48cc415d459165f533aea85f700f76efcc552de33d9b035a6.jpg|image]]



(b)



FIGURE 1.51 Graphs of (a) exponential growth, k = 1.5 > 0, and (b) exponential decay, k = -1.2 < 0.


**EXAMPLE 3** Investment companies often use the model $y = Pe^{rt}$ in calculating the growth of an investment. Use this model to track the growth of $100 invested in 2022 at an annual interest rate of 5.5%. 

**Solution** Let t = 0 represent 2022, t = 1 represent 2023, and so on. Then the exponential growth model is $y(t) = Pe^{rt}$ , where P = 100 (the initial investment), r = 0.055 (the annual interest rate expressed as a decimal), and t is time in years. To predict the amount in the account in 2026, after four years have elapsed, we take t = 4 and calculate 

$$
\begin{array}{r l} y (4) & = 1 0 0 e ^ {0. 0 5 5 (4)} \\ & = 1 0 0 e ^ {0. 2 2} \\ & = 1 2 4. 6 1. \end{array} \quad \text { Nearest   cent   using   calculator }
$$

This compares with \$123.88 in the account when the interest is compounded annually, as was done in Example 1. 

**EXAMPLE 4** Laboratory experiments indicate that some atoms emit a part of their mass as radiation, with the remainder of the atom re-forming to make an atom of some new element. For example, radioactive carbon-14 decays into nitrogen; radium eventually decays into lead. If $y_{0}$ is the number of radioactive nuclei present at time zero, the number still present at any later time t will be 

$$
y = y _ {0} e ^ {- r t}, \quad r > 0.
$$

The number r is called the decay rate of the radioactive substance. (We will see how this formula is obtained in Section 7.2.) For carbon-14, the decay rate has been determined experimentally to be about $r = 1.2 \times 10^{-4}$ when t is measured in years. Predict the percent of carbon-14 present after 866 years have elapsed. 

**Solution** If we start with an amount $y_{0}$ of carbon-14 nuclei, after 866 years we are left with the amount 

$$
\begin{array}{l} y (8 6 6) = y _ {0}   e ^ {(- 1. 2 \times 1 0 ^ {- 4}) (8 6 6)} \\ \approx (0. 9 0 1) y _ {0}. \end{array} \quad \text {   Calculator   evaluation   }
$$

That is, after 866 years, we are left with about $90\%$ of the original amount of carbon-14, so about $10\%$ of the original nuclei have decayed. 

You may wonder why we use the family of functions $y = e^{kx}$ for different values of the constant k instead of the general exponential functions $y = a^{x}$ . In the next section, we show that the exponential function $a^{x}$ is equal to $e^{kx}$ for an appropriate value of k. So the formula $y = e^{kx}$ covers the entire range of possibilities, and it is generally easier to use. 

## EXERCISES 1.4

## Sketching Exponential Curves

In Exercises 1–6, sketch the given curves together in the appropriate coordinate plane, and label each curve with its equation. 

$$
y = 2 ^ {x}, y = 4 ^ {x}, y = 3 ^ {- x}, y = (1 / 5) ^ {x}
$$

$$
y = 3 ^ {x}, y = 8 ^ {x}, y = 2 ^ {- x}, y = (1 / 4) ^ {x}
$$

3. $y = 2^{-t}$ and $y = -2^{t}$ 

$$
4. y = 3 ^ {- t} \text {   and   } y = - 3 ^ {t}
$$

$$
y = e ^ {x} \text {   and   } y = 1 / e ^ {x}
$$

$$
6. y = - e ^ {x} \text {   and   } y = - e ^ {- x}
$$

In each of Exercises 7–10, sketch the shifted exponential curves. 

$$
y = 2 ^ {x} - 1 \text {   and   } y = 2 ^ {- x} - 1
$$

$$
y = 3 ^ {x} + 2 \text {   and   } y = 3 ^ {- x} + 2
$$

9. $y = 1 - e^{x}$ and $y = 1 - e^{-x}$ 

10. $y = -1 - e^{x}$ and $y = -1 - e^{-x}$ 

Applying the Laws of Exponents 

Use the laws of exponents to simplify the expressions in Exercises 11–20. 

11. $16^{2} \cdot 16^{-1.75}$ 

12. $9^{1/3} \cdot 9^{1/6}$ 

13. $\frac{4^{4.2}}{4^{3.7}}$ 

14. $\frac{3^{5/3}}{3^{2/3}}$ 

15. $(25^{1 / 8})^4$ 

16. $(13^{\sqrt{2}})^{\sqrt{2} / 2}$ 

17. $2^{\sqrt{3}}\cdot 7^{\sqrt{3}}$ 18. $(\sqrt{3})^{1 / 2}\cdot (\sqrt{12})^{1 / 2}$ 

19. $\left(\frac{2}{\sqrt{2}}\right)^4$ 20. $\left(\frac{\sqrt{6}}{3}\right)^2$ 

Compositions Involving Exponential Functions 

Find the domain and range for each of the functions in Exercises 21–24. 

21. $f(x) = \frac{1}{2 + e^{x}}$ 

22. $g(t) = \cos (e^{-t})$ 

23. $g(t) = \sqrt{1 + 3^{-t}}$ 

24. $f(x) = \frac{3}{1 - e^{2x}}$ 

Applications 

T In Exercises 25–28, use graphs to find approximate solutions. 

25. $2^{x} = 5$ 

26. $e^x = 4$ 

27. $3^{x} - 0.5 = 0$ 

28. $3 - 2^{-x} = 0$ 

In Exercises 29–36, use an exponential model and a graphing calculator to estimate the answer in each problem. 

29. Population growth The population of a midwestern city is 500,000 and is increasing at the rate of $3.75\%$ each year. Approximately when will the population reach 1 million? 

30. Population growth The population of Silver Run in the year 1890 was 6250. Assume the population increased at a rate of 2.75% per year. 

a. Estimate the population in 1915 and 1940. 

b. Approximately when did the population reach 50,000? 

31. Radioactive decay The half-life of phosphorus-32 is about 14 days. There are 6.6 grams present initially. 

a. Express the amount of phosphorus-32 remaining as a function of time t. 

b. When will there be 1 gram remaining? 

32. If Jean invests $2300 in a retirement account with a 6% interest rate compounded annually, how long will it take until Jean's account has a balance of $4150? 

33. Doubling your money Determine how much time is required for an investment to double in value if interest is earned at the rate of 6.25% compounded annually. 

34. Tripling your money Determine how much time is required for an investment to triple in value if interest is earned at the rate of 5.75% compounded continuously. 

35. Cholera bacteria Suppose that a colony of bacteria starts with 1 bacterium and doubles in number every half hour. How many bacteria will the colony contain at the end of 24 hours? 

36. Eliminating a disease Suppose that in any given year the number of cases of a disease is reduced by $20\%$ . If there are 10,000 cases today, how many years will it take 

a. to reduce the number of cases to 1000? 

b. to eliminate the disease; that is, to reduce the number of cases to less than 1? 

## 1.5 Inverse Functions and Logarithms

A function that undoes, or inverts, the effect of a function f is called the inverse of f. Many common functions, though not all, are paired with an inverse. In this section we present the natural logarithmic function $y = \ln x$ as the inverse of the exponential function $y = e^{x}$ , and we also give examples of several inverse trigonometric functions. 

## One-to-One Functions

A function is a rule that assigns a value from its range to each element in its domain. Some functions assign the same range value to more than one element in the domain. The function $f(x) = x^{2}$ assigns the same value, 1, to both of the numbers -1 and +1. Similarly the sines of $\pi/3$ and $2\pi/3$ are both $\sqrt{3}/2$ . Other functions assume each value in their range no more than once. The square roots and cubes of different numbers are always different. A function that has distinct values at distinct elements in its domain is called one-to-one. 

> ***DEFINITION*** A function $f(x)$ is one-to-one on a domain $D$ if $f(x_{1}) \neq f(x_{2})$ whenever $x_{1} \neq x_{2}$ in $D$ . 

**EXAMPLE 1** Some functions are one-to-one on their entire natural domain. Other functions are not one-to-one on their entire domain, but by restricting the function to a smaller domain we can create a function that is one-to-one. The original and restricted functions are not the same functions, because they have different domains. However, the two functions have the same values on the smaller domain. 

![[75de86d38bcd65ec09e94320cdf1695cfeb2aa36d8e2fbcab6f0fe6fdcea4029.jpg|image]]



(a) One-to-one: Graph meets each horizontal line at most once.


![[4473558492066078df76d855ae9c67528d6dba927b7110698c4782647a24b574.jpg|image]]



(b) Not one-to-one: Graph meets one or more horizontal lines more than once.


FIGURE 1.52 (a) $y = x^3$ and $y = \sqrt{x}$ are one-to-one on their domains $(-\infty, \infty)$ and $[0, \infty)$ . (b) $y = x^2$ and $y = \sin x$ are not one-to-one on their domains $(-\infty, \infty)$ . 

Caution 

Do not confuse the inverse function $f^{-1}$ with the reciprocal function 1/f. 

(a) $f(x) = \sqrt{x}$ is one-to-one on any domain of nonnegative numbers because $\sqrt{x_1} \neq \sqrt{x_2}$ whenever $x_1 \neq x_2$ . 

(b) $g(x) = \sin x$ is not one-to-one on the interval $[0, \pi]$ because $\sin(\pi/6) = \sin(5\pi/6)$ . In fact, for each element $x_{1}$ in the subinterval $[0, \pi/2)$ there is a corresponding element $x_{2}$ in the subinterval $(\pi/2, \pi]$ satisfying $\sin x_{1} = \sin x_{2}$ . The sine function is one-to-one on $[0, \pi/2]$ , however, because it is an increasing function on $[0, \pi/2]$ and hence gives distinct outputs for distinct inputs in that interval. 

The graph of a one-to-one function $y = f(x)$ can intersect a given horizontal line at most once. If the graph intersects the line more than once, then the function assumes the same y-value for at least two different x-values and is therefore not one-to-one (Figure 1.52). 

The Horizontal Line Test for One-to-One Functions
A function $y = f(x)$ is one-to-one if and only if its graph intersects each horizontal line at most once. 

## Inverse Functions

Since each output of a one-to-one function comes from just one input, the effect of the function can be inverted to send each output back to the input from which it came. 

> ***DEFINITION*** Suppose that $f$ is a one-to-one function on a domain $D$ with range $R$ . The inverse function $f^{-1}$ is defined by 
>
> $$
> f ^ {- 1} (b) = a \quad \text { if } \quad f (a) = b.
> $$
>
The domain of $f^{-1}$ is R and the range of $f^{-1}$ is D. 

The symbol $f^{-1}$ for the inverse of f is read “f inverse.” The “-1” in $f^{-1}$ is not an exponent; $f^{-1}(x)$ does not mean $1/f(x)$ . Notice that the domains and ranges of f and $f^{-1}$ are interchanged. 


**EXAMPLE 2** Suppose a one-to-one function $y = f(x)$ is given by a table of values


<table><tr><td>x</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>f(x)</td><td>3</td><td>4.5</td><td>7</td><td>10.5</td><td>15</td><td>20.5</td><td>27</td><td>34.5</td></tr></table>

A table for the values of $x = f^{-1}(y)$ can then be obtained by simply interchanging the values in each column of the table for f: 

<table><tr><td>y</td><td>3</td><td>4.5</td><td>7</td><td>10.5</td><td>15</td><td>20.5</td><td>27</td><td>34.5</td></tr><tr><td><eq>f^{-1}(y)</eq></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr></table>

If we apply f to send an input x to the output $f(x)$ and follow by applying $f^{-1}$ to $f(x)$ , we get right back to x, just where we started. Similarly, if we take some number y in the range of f, apply $f^{-1}$ to it, and then apply f to the resulting value $f^{-1}(y)$ , we get back the value y from which we began. Composing a function and its inverse has the same effect as doing nothing. 

$(f^{-1}\circ f)(x) = x,$ for all $x$ in the domain of $f$ 

$$
(f \circ f ^ {- 1}) (y) = y, \quad \text {   for   all   } y \text {   in   the   domain   of   } f ^ {- 1} (\text {   or   range   of   } f)
$$

Only a one-to-one function can have an inverse. The reason is that if $f(x_{1}) = y$ and $f(x_{2}) = y$ for two distinct inputs $x_{1}$ and $x_{2}$ , then there is no way to assign a value to $f^{-1}(y)$ that satisfies both $f^{-1}(f(x_{1})) = x_{1}$ and $f^{-1}(f(x_{2})) = x_{2}$ . 

Suppose f is a function whose domain is an interval. If f is increasing, then it satisfies the inequality $f(x_{2}) > f(x_{1})$ when $x_{2} > x_{1}$ , so it is one-to-one and has an inverse. Likewise, if f is decreasing, then it also has an inverse. Functions that are neither increasing nor decreasing may still be one-to-one and have an inverse, as with the function $f(x) = 1/x$ for $x \neq 0$ and $f(0) = 0$ , defined on $(-\infty, \infty)$ and passing the horizontal line test. 

## Finding Inverses

The graphs of a function and its inverse are closely related. To read the value of a function from its graph, we start at a point x on the x-axis, go vertically to the graph, and then move horizontally to the y-axis to read the value of y. The inverse function can be read from the graph by reversing this process. Start with a point y on the y-axis, go horizontally to the graph of $y = f(x)$ , and then move vertically to the x-axis to read the value of $x = f^{-1}(y)$ (Figure 1.53). 

![[b28c5d06048b05fe0762b51c4120e78d5365897158e9ab25cfc4014c13173976.jpg|image]]



(a) To find the value of f at x, we start at x, go up to the curve, and then move to the y-axis.


![[3e93170e3198f71d7d70680fb7f7776ebebc54ac2e17e2d4bb15c73fff0a1db2.jpg|image]]



(b) The graph of $f^{-1}$ is the graph of f, but with x and y interchanged. To find the x that gave y, we start at y and go over to the curve and down to the x-axis. The domain of $f^{-1}$ is the range of f. The range of $f^{-1}$ is the domain of f.


![[b261e4a4f3aec277a8c9689ac5681ba62e776e72a5238243f46f369b991b0a0b.jpg|image]]


![[5de0d42fc96b1044211f95201be3cad3b9f06d6d310b0c5117ffa56b66e6fd21.jpg|image]]



(c) To draw the graph of $f^{-1}$ in the more usual way, we reflect the system across the line y = x.



(d) Then we interchange the letters $x$ and $y$ . We now have a normal-looking graph of $f^{-1}$ as a function of $x$ .



FIGURE 1.53 The graph of $y = f^{-1}(x)$ is obtained by reflecting the graph of $y = f(x)$ about the line y = x.


We want to set up the graph of $f^{-1}$ so that its input values lie along the x-axis, as is usually done for functions, rather than on the y-axis. To achieve this we interchange the x- and y-axes by reflecting across the $45^{\circ}$ line y = x. After this reflection, we have a new graph that represents $f^{-1}$ . The value of $f^{-1}(x)$ can now be read from the graph in the usual way, by starting with a point x on the x-axis, going vertically to the graph, and then horizontally to the y-axis to get the value of $f^{-1}(x)$ . Figure 1.53 indicates the relationship between the graphs of f and $f^{-1}$ . The graphs are interchanged by reflection through the line y = x. 

![[e045b1d3f62ba5c3ec98b38501e8d66ef2256c203edbdea1a4dc2152050d004f.jpg|image]]



FIGURE 1.54 Graphing



$f(x) = (1/2)x + 1$ and $f^{-1}(x) = 2x - 2$ together shows the graphs' symmetry with respect to the line $y = x$ (Example 3).


![[da01c2f89d1c9e09e6c0d4b7b8a1e0efcac606406e2d735306fbf1f9f4234ce5.jpg|image]]



FIGURE 1.55 The functions $y = \sqrt{x}$ and $y = x^{2}, x \geq 0$ , are inverses of one another (Example 4).


The process of passing from f to $f^{-1}$ can be summarized as a two-step procedure. 

1. Solve the equation $y = f(x)$ for $x$ . This gives a formula $x = f^{-1}(y)$ , where $x$ is expressed as a function of $y$ . 

2. Interchange $x$ and $y$ , obtaining a formula $y = f^{-1}(x)$ , where $f^{-1}$ is expressed in the conventional format with $x$ as the independent variable and $y$ as the dependent variable. 

**EXAMPLE 3** Find the inverse of $y = \frac{1}{2}x + 1$ , expressed as a function of x.
**Solution** 

$$
y = \frac {1}{2} x + 1
$$

The graph satisfies the horizontal line test, so the function is one-to-one (Fig. 1.59). 

$$
\begin{array}{c} 2 y = x + 2 \\ x = 2 y - 2. \end{array}
$$

2. Interchange x and y: y = 2x - 2. 

Expresses the function in the usual form, where y is the dependent variable. 

The inverse of the function $f(x) = (1/2)x + 1$ is the function $f^{-1}(x) = 2x - 2$ . (See Figure 1.54.) To check, we verify that both compositions give the identity function: 

$$
\begin{array}{l} f ^ {- 1} (f (x)) = 2 \Big (\frac {1}{2} x + 1 \Big) - 2 = x + 2 - 2 = x \\ f (f ^ {- 1} (x)) = \frac {1}{2} (2 x - 2) + 1 = x - 1 + 1 = x. \end{array}
$$

**EXAMPLE 4** Find the inverse of the function $y = x^{2}, x \geq 0$ , expressed as a function of x. 

**Solution** For $x \geq 0$ , the graph satisfies the horizontal line test, so the function is one-to-one and has an inverse. To find the inverse, we first solve for x in terms of y: 

$$
\begin{array}{c} y = x ^ {2} \\ \sqrt {y} = \sqrt {x ^ {2}} = | x | = x \quad | x | = x \text { because } x \geq 0 \end{array}
$$

We then interchange x and y, obtaining 

$$
y = \sqrt {x}.
$$

The inverse of the function $y = x^{2}, x \geq 0$ , is the function $y = \sqrt{x}$ (Figure 1.55). 

Notice that the function $y = x^{2}$ , $x \geq 0$ , with domain restricted to the nonnegative real numbers, is one-to-one (Figure 1.55) and has an inverse. On the other hand, the function $y = x^{2}$ , with no domain restrictions, is not one-to-one (Figure 1.52b) and therefore has no inverse. 

## Logarithmic Functions

If $a$ is any positive real number other than 1, then the base $a$ exponential function $f(x) = a^x$ is one-to-one. It therefore has an inverse. Its inverse is called the logarithm function with base $a$ . 

> ***DEFINITION*** The logarithm function with base a, written $y = \log_{a} x$ , is the inverse of the base a exponential function $y = a^{x} (a > 0, a \neq 1)$ . 

![[7573c21d8de2f55f3465f7195e8427cf0c716ea52eb32dc83160acbf383263c7.jpg|image]]



(a)


![[469deb2f3785896f272109a15f4901d122ff24168915733afe5e5725eb9c3a0f.jpg|image]]



(b)



FIGURE 1.56 (a) The graphs of $2^{x}$ and its inverse, $\log_2 x$ . (b) The graphs of $e^x$ and its inverse, $\ln x$ .


## HISTORICAL BIOGRAPHY

John Napier (1550–1617) 

Scotsman John Napier went to St. Salvator's College in St. Andrews, where he studied from mathematician John Rutherford. Today, Napier is best known as the inventor of logarithms. 

To know more, visit the companion Website. 

The domain of $\log_{a}x$ is $(0,\infty)$ , the same as the range of $a^{x}$ . The range of $\log_{a}x$ is $(-\infty,\infty)$ , the same as the domain of $a^{x}$ . 

Figure 1.56a shows the graph of $y = \log_2 x$ . The graph of $y = a^x, a > 1$ , increases rapidly for $x > 0$ , so its inverse, $y = \log_a x$ , increases slowly for $x > 1$ . 

Because we have no technique yet for solving the equation $y = a^x$ for $x$ in terms of $y$ , we do not have an explicit formula for computing the logarithm at a given value of $x$ . Nevertheless, we can obtain the graph of $y = \log_a x$ by reflecting the graph of the exponential $y = a^x$ across the line $y = x$ . Figure 1.56a shows the graphs for $a = 2$ and $a = e$ . 

Logarithms with base 2 are often used when working with binary numbers, as is common in computer science. Logarithms with base e and base 10 are so important in applications that many calculators have special keys for them. They also have their own special notation and names: 

$$
\begin{array}{l l} \log_ {e} x & \text { is   written   as } \quad \ln x. \\ \log_ {1 0} x & \text { is   written   as } \quad \log x. \end{array}
$$

The function $y = \ln x$ is called the natural logarithm function, and $y = \log x$ is often called the common logarithm function. Since the logarithm is the inverse function of exponentiation, it follows that: 

$$
\begin{array}{r l} \log_ {a} x = y & \Leftrightarrow a ^ {y} = x \\ \ln x = y & \Leftrightarrow e ^ {y} = x \end{array}
$$

In particular, because $e^{1} = e$ , we obtain 

$$
\ln e = 1.
$$

## Properties of Logarithms

Logarithms, invented by John Napier, were the single most important improvement in arithmetic calculation before the modern electronic computer. The properties of logarithms reduce multiplication of positive numbers to addition of their logarithms, division of positive numbers to subtraction of their logarithms, and exponentiation of a number to multiplying its logarithm by the exponent. 

We summarize these properties for the natural logarithm as a series of rules that we prove in Chapter 7. 

## THEOREM 1—Algebraic Properties of the Natural Logarithm

For any numbers $b > 0$ and $x > 0$ , the natural logarithm satisfies the following rules: 

1. Product Rule: 

$$
\ln b x = \ln b + \ln x
$$

2. Quotient Rule: 

$$
\ln {\frac {b}{x}} = \ln b - \ln x
$$

3. Reciprocal Rule: 

$$
\ln {\frac {1}{x}} = - \ln x
$$

Rule 2 with $b = 1$ 

4. Power Rule: 

$$
\ln x ^ {r} = r \ln x
$$

Inverse Properties for $a^x$ and $\log_a x$ 1. Base $a(a > 0, a \neq 1)$ : $a^{\log_a x} = x, \quad x > 0$ $\log_a a^x = x$ 2. Base $e$ : $e^{\ln x} = x, \quad x > 0$ $\ln e^x = x$ 

**EXAMPLE 5** We use the properties in Theorem 1 to rewrite three expressions. 

(a) $\ln 4 + \ln \sin x = \ln (4\sin x)$ Product Rule  
(b) $\ln \frac{x + 1}{2x - 3} = \ln (x + 1) - \ln (2x - 3)$ Quotient Rule  
(c) $\ln \frac{1}{8} = -\ln 8$ Reciprocal Rule $= -\ln 2^3 = -3\ln 2$ Power Rule 

Because $a^x$ and $\log_a x$ are inverses, composing them in either order gives the identity function. 

Substituting $a^x$ for $x$ in the equation $x = e^{\ln x}$ enables us to rewrite $a^x$ as a power of $e$ : 

$$
\begin{array}{l l} a ^ {x} = e ^ {\ln (a ^ {x})} & \text { Substitute   } a ^ {x} \text {   for   } x \text {   in   } x = e ^ {\ln x}. \\ = e ^ {x \ln a} & \text { Power   Rule   for   logs } \\ = e ^ {(\ln a) x}. & \text { Exponent   rearranged } \end{array}
$$

Thus, the exponential function $a^{x}$ is the same as $e^{kx}$ with $k = \ln a$ . 

Every exponential function is a power of the natural exponential function. 

$$
a ^ {x} = e ^ {x \ln a}
$$

That is, $a^{x}$ is the same as $e^{x}$ raised to the power $\ln a: a^{x} = e^{kx}$ for $k = \ln a$ . 

For example, 

$$
2 ^ {x} = e ^ {(\ln 2) x} = e ^ {x \ln 2}, \quad \text { and } \quad 5 ^ {- 3 x} = e ^ {(\ln 5) (- 3 x)} = e ^ {- 3 x \ln 5}.
$$

Returning once more to the properties of $a^x$ and $\log_a x$ , we have 

$$
\begin{array}{l l} \ln x = \ln (a ^ {\log_ {a} x}) & \text {   Inverse   Property   for   } a ^ {x} \text {   and   } \log_ {a} x \\ = (\log_ {a} x) (\ln a). & \text {   Power   Rule   for   logarithms,   with   } r = \log_ {a} x \end{array}
$$

Rewriting this equation as $\log_{a}x = (\ln x)/(\ln a)$ shows that every logarithmic function is a constant multiple of the natural logarithm $\ln x$ . This allows us to extend the algebraic properties for $\ln x$ to $\log_{a}x$ . For instance, $\log_{a}bx = \log_{a}b + \log_{a}x$ . 

Change-of-Base Formula 

Every logarithmic function is a constant multiple of the natural logarithm. 

$$
\log_ {a} x = \frac {\ln x}{\ln a} \quad (a > 0, a \neq 1)
$$

## Applications

In Section 1.4 we looked at examples of exponential growth and decay problems. Here we use properties of logarithms to answer more questions concerning such problems. 

**EXAMPLE 6** If $1000 is invested in an account that earns 5.25% interest compounded annually, how long will it take the account to reach $2500? 

**Solution** From Example 1, Section 1.4, with P = 1000 and r = 0.0525, the amount in the account at any time t in years is $1000(1.0525)^{t}$ , so to find the time t when the account reaches $2500, we need to solve the equation 

$$
1 0 0 0 (1. 0 5 2 5) ^ {t} = 2 5 0 0.
$$

Thus we have 

$$
\begin{array}{l l} (1. 0 5 2 5) ^ {t} = 2. 5 & \text { Divide   by } 1 0 0 0. \\ \ln (1. 0 5 2 5) ^ {t} = \ln 2. 5 & \text { Take   logarithms   of   both   sides. } \\ t \ln 1. 0 5 2 5 = \ln 2. 5 & \text { Power   Rule } \\ t = \frac {\ln 2 . 5}{\ln 1 . 0 5 2 5} \approx 1 7. 9 & \text { Values   obtained   by   calculator } \end{array}
$$

The amount in the account will reach \$2500 in 18 years, when the annual interest payment is deposited for that year. 

**EXAMPLE 7** The half-life of a radioactive element is the time expected to pass until half of the radioactive nuclei present in a sample decay. The half-life is a constant that does not depend on the number of radioactive nuclei initially present in the sample, but only on the radioactive substance. 

To compute the half-life, let $y_{0}$ be the number of radioactive nuclei initially present in the sample. Then the number y present at any later time t will be $y = y_{0} e^{-kt}$ . We seek the value of t at which the number of radioactive nuclei present equals half the original number: 

$$
\begin{array}{l} y _ {0} e ^ {- k t} = \frac {1}{2} y _ {0} \\ e ^ {- k t} = \frac {1}{2} \\ - k t = \ln \frac {1}{2} = - \ln 2 \quad \text { Reciprocal   Rule   for   logarithms } \\ t = \frac {\ln 2}{k}. \end{array}\tag{1}
$$

This value of $t$ is the half-life of the element. It depends only on the value of $k$ ; the number $y_0$ does not have any effect. 

![[ee7d1716fe4362363a8f0ea2f1f8bd7fb6ce81598a33b921435dca5da563cf2a.jpg|image]]



FIGURE 1.57 Amount of polonium-210 present at time t, where $y_{0}$ represents the number of radioactive atoms initially present (Example 7).


The effective radioactive lifetime of polonium-210 is so short that we measure it in days rather than years. The number of radioactive atoms remaining after t days in a sample that starts with $y_{0}$ radioactive atoms is 

$$
y = y _ {0} e ^ {- 5 \times 1 0 ^ {- 3} t}.
$$

The element's half-life is 

$$
\begin{array}{r l} \text { Half - life } & = \frac {\ln 2}{k} \\ & = \frac {\ln 2}{5 \times 1 0 ^ {- 3}} \\ & \approx 1 3 9 \text {   days. } \end{array} \quad \text { Eq.   (1) } \quad \text { The   } k \text {   from   polonium - 210's   decay   equation }
$$

This means that after 139 days, $1/2$ of $y_0$ radioactive atoms remain; after another 139 days (278 days altogether) half of those remain, or $1/4$ of $y_0$ radioactive atoms remain, and so on (see Figure 1.57). 

## Inverse Trigonometric Functions

The six basic trigonometric functions are not one-to-one (since their values repeat periodically). However, we can restrict their domains to intervals on which they are one-to-one. The sine function increases from -1 at $x = -\pi/2$ to +1 at $x = \pi/2$ . By restricting its 

$y = \cot x$ 

![[4f42ea76e6e1066e3c1795cc09b9346d835eebf3dbededbd395d8e93cc955169.jpg|image]]



FIGURE 1.58 The graph of $y = \arcsin x$ .


![[bd900eae0bdd4cc6672f1df9fe35640d2f4a20b5037142a929138a0d3dc172ba.jpg|image]]


Domain: $[- \pi / 2, \pi / 2]$ 

$$
(- \pi / 2, \pi / 2)
$$


(b)


Domain restrictions that make the trigonometric functions one-to-one 


(a)


![[739a46023804299d64f736e8509ea4c8e048adacb804b24bbedc7147e76ebb83.jpg|image]]


FIGURE 1.59 The graphs of 

![[d72b6a2707ee4620e13ccb237ea14742ae8841b7854199651b0315c5a509bca5.jpg|image]]


![[f50257d67322e5a1263363670008c3bb5d9dd6c347201a27b1393f52895f169d.jpg|image]]


domain to the interval $[-\pi/2, \pi/2]$ we make it one-to-one, so that it has an inverse which is called arcsin x (Figure 1.58). Similar domain restrictions can be applied to all six trigonometric functions. 

(a) $y = \sin x, -\pi/2 \leq x \leq \pi/2,$ and (b) its inverse, $y = \arcsin x$ . The graph of arcsin x, obtained by reflection across the line y = x, is a portion of the curve $x = \sin y$ . 

![[7474cc3899f7c199db226c06e649a9f1f3b3af5e3a7366f4a96bfd8da48f4e2a.jpg|image]]


Range: $[-1, 1]$ 

Range: $(-\infty, \infty)$ 

![[74b606f2ecd7b556a1678870039dd6633af2d45946f1214bd012148fbe40818f.jpg|image]]


Domain: $(0,\pi)$ 

Range: $(- \infty, \infty)$ 

![[5134377b068014f7d61743670d48ddfb8c0d77fcc8f6a871ebf6d497b154049f.jpg|image]]


Domain: $[0, \pi/2) \cup (\pi/2, \pi]$ 

Range: $(- \infty, -1] \cup [1, \infty)$ 

![[fd0176ff8e00bbd86f9cf29979b010155d1c553d3539d3b1dbe0f628e121f81f.jpg|image]]


Domain: $[- \pi / 2, 0) \cup (0, \pi / 2]$ 

Range: $(- \infty, -1] \cup [1, \infty)$ 

Since these restricted functions are now one-to-one, they have inverses, which we denote by 

$$
y = \sin^ {- 1} x \quad \text { or } \quad y = \arcsin x,
$$

$$
y = \cos^ {- 1} x \quad \text { or } \quad y = \arccos x
$$

$$
y = \tan^ {- 1} x \quad \text { or } \quad y = \arctan x,
$$

$$
y = \cot^ {- 1} x \quad \text { or } \quad y = \operatorname{arccot} x
$$

$$
y = \sec^ {- 1} x \quad \text { or } \quad y = \operatorname{arcsec} x,
$$

$$
y = \csc^ {- 1} x \quad \text { or } \quad y = \operatorname{arccsc} x
$$

These equations are read “y equals the arcsine of x” or “y equals arcsin x” and so on. 

Caution The -1 in the expressions for the inverse means “inverse.” It does not mean reciprocal. For example, the reciprocal of $\sin x$ is $(\sin x)^{-1} = 1/\sin x = \csc x$ . 

The graphs of the six inverse trigonometric functions are obtained by reflecting the graphs of the restricted trigonometric functions through the line y = x. Figure 1.59b shows the graph of $y = \arcsin x$ , and Figure 1.60 shows the graphs of all six functions. We now take a closer look at two of these functions. 

## The Arcsine and Arcosine Functions

We define the arcsine and arccosine as functions whose values are angles (measured in radians) that belong to restricted domains of the sine and cosine functions. 

![[4de795aa06e04d2d8bef2c76c8df9c8c1038feb9dafcc7257d66011a7e43c368.jpg|image]]


![[8e545fb8e45c9dbb0b643ba6a18a497c9fca543e5a7dc2142e9a8e9da6115512.jpg|image]]



(b)


![[3f45a3f8c198c9dcb7ea2e9e012e776802e11e788daa4ea91a506b97cfd53323.jpg|image]]



(c)


Domain: $x \leq -1$ or $x \geq 1$ Range: $0 \leq y \leq \pi, y \neq \frac{\pi}{2}$ 

Domain: $x \leq -1$ or $x \geq 1$ Range: $-\frac{\pi}{2} \leq y \leq \frac{\pi}{2}, y \neq 0$ 

![[8a0cf21839b8a476b6a91c84f35574045ed13771657163f50616a23e47a21ea1.jpg|image]]



(d)


![[a808a4b685f4d6fcffc568f3c243cbbcded35fe6c5bbf251d47d0cd13ceb5c7e.jpg|image]]



(e)


![[9e8cc8f56c5c309af1514febca21b9e69d6ad52f087e25cad2a8fa7cd730cd04.jpg|image]]



(f)



FIGURE 1.60 Graphs of the six basic inverse trigonometric functions.


$y = \arcsin x$ is the number in $[-\pi/2, \pi/2]$ for which $\sin y = x$ . $y = \arccos x$ is the number in $[0, \pi]$ for which $\cos y = x$ . 

The “Arc” in Arcsine and Arccosine
For a unit circle and radian angles, the arc length equation $s = r\theta$ becomes $s = \theta$ , so central angles and the arcs they subtend have the same measure. If $x = \sin \theta$ , then, in addition to being the angle whose sine is x, $\theta$ is also the length of arc on the unit circle that subtends an angle whose sine is x. So we call $\theta$ “the arc whose sine is x.” 

The graph of $y = \arcsin x$ (Figure 1.59b) is symmetric about the origin. The arcsine is therefore an odd function: 

![[a11e22f86be585fe7a903356fd69e3792f2d24b8c91a76b5f1053dce6ba296dc.jpg|image]]


$$
\arcsin (- x) = - \arcsin x.\tag{2}
$$

The graph of $y = \arccos x$ (Figure 1.61b) has no such symmetry. 

**EXAMPLE 8** Evaluate (a) arcsin $\left(\frac{\sqrt{3}}{2}\right)$ and (b) arccos $\left(-\frac{1}{2}\right)$ . 

**Solution** 

(a) We see that 

$$
\arcsin \left(\frac {\sqrt {3}}{2}\right) = \frac {\pi}{3}
$$

because $\sin(\pi/3)=\sqrt{3}/2$ and $\pi/3$ belongs to the range $[-π/2,\pi/2]$ of the arcsine function. See Figure 1.62a. 

(b) We have 

$$
\arccos \left(- \frac {1}{2}\right) = \frac {2 \pi}{3}
$$

because $\cos (2\pi /3) = -1 / 2$ and $2\pi /3$ belongs to the range $[0,\pi ]$ of the arccosine function. See Figure 1.62b. 

![[64a006ecb374c8fd47101524694d2f179dddf94ac3424da63035f9d5c7a7b146.jpg|image]]



(a)


![[54e5236bee3e11cc13b6a40a7dee0fa5c5f9e388c75a8f514c1206534a7a0f03.jpg|image]]



(b)



FIGURE 1.61 The graphs of (a) $y = \cos x, 0 \leq x \leq \pi$ , and


$$
y = x,
$$

![[ae63b88913502599670471acc950627b00b3883f6d06276e55fa5e0ed4c434dc.jpg|image]]



FIGURE 1.63 Diagram for drift correction (Example 9), with distances rounded to the nearest kilometer (drawing not to scale).


![[f25fbc6b7b49b651056581449e4c4b36c662335480200d5f14410aac4e274bf2.jpg|image]]



FIGURE 1.64 arccos x and arccos $(-x)$ are supplementary angles (so their sum is $\pi$ ).


Using the same procedure illustrated in Example 8, we can create the following table of common values for the arcsine and arccosine functions. 

<table><tr><td>x</td><td>arcsin x</td><td>arccos x</td></tr><tr><td><eq>\sqrt{3}/2</eq></td><td><eq>\pi/3</eq></td><td><eq>\pi/6</eq></td></tr><tr><td><eq>\sqrt{2}/2</eq></td><td><eq>\pi/4</eq></td><td><eq>\pi/4</eq></td></tr><tr><td><eq>1/2</eq></td><td><eq>\pi/6</eq></td><td><eq>\pi/3</eq></td></tr><tr><td><eq>-1/2</eq></td><td><eq>-\pi/6</eq></td><td><eq>2\pi/3</eq></td></tr><tr><td><eq>-\sqrt{2}/2</eq></td><td><eq>-\pi/4</eq></td><td><eq>3\pi/4</eq></td></tr><tr><td><eq>-\sqrt{3}/2</eq></td><td><eq>-\pi/3</eq></td><td><eq>5\pi/6</eq></td></tr></table>

![[75fcbdae30f9c35db68bf580fd478367d4fd7e5a683dcab7260aaf48861d845b.jpg|image]]



(a)


![[ed0f554f66aa30f327bd7002574f8b2ea57413d6fac2f388b53b6c9b7dd6aa3e.jpg|image]]



(b)



FIGURE 1.62 Values of the arcsine and arccosine functions (Example 8).


**EXAMPLE 9** During a 240-km airplane flight from Zurich to Geneva, after flying 180 km the navigator determines that the plane is 12 km off course, as shown in Figure 1.63. Find the angle a for a course parallel to the original correct course, the angle b, and the drift correction angle $c = a + b$ . 

**Solution** From the Pythagorean theorem and given information, we compute an approximate hypothetical flight distance of 179 km, had the plane been flying along the original correct course (see Figure 1.63). Knowing the flight distance from Zurich to Geneva, we next calculate the remaining leg of the original course to be 61 km. Applying the Pythagorean theorem again then gives an approximate distance of 62 km from the position of the plane to Geneva. Finally, from Figure 1.63, we see that $180 \sin a = 12$ and $62 \sin b = 12$ , so 

$$
\begin{array}{l} a = \arcsin \frac {1 2}{1 8 0} \approx 0. 0 6 7 \text {   radian } \approx 3. 8 ^ {\circ} \\ b = \arcsin \frac {1 2}{6 2} \approx 0. 1 9 5 \text {   radian } \approx 1 1. 2 ^ {\circ} \\ c = a + b \approx 1 5 ^ {\circ}. \end{array}
$$

## Identities Involving Arcsine and Arccosine

As we can see from Figure 1.64, the arccosine of x satisfies the identity 

$$
\arccos x + \arccos (- x) = \pi ,\tag{3}
$$

or 

$$
\arccos (- x) = \pi - \arccos x.\tag{4}
$$

Also, we can see from the triangle in Figure 1.65 that for x > 0, 

$$
\arcsin x + \arccos x = \pi / 2.\tag{5}
$$

![[d7bbe15aa9c8b2057bf4c61de9e3e467a3fffca02e729e18e8a9c8af47094697.jpg|image]]



FIGURE 1.65 arcsin x and arccos x are complementary angles (so their sum is $\pi/2$ ).


Equation (5) holds for the other values of x in $[-1,1]$ as well, but we cannot conclude this from the triangle in Figure 1.65. It is, however, a consequence of Equations (2) and (4) (Exercise 80). 

The arctangent, arccotangent, arcsecant, and arccosecant functions are defined in Section 3.9. There we develop additional properties of the inverse trigonometric functions using the identities discussed here. 

## EXERCISES 1.5

Identifying One-to-One Functions Graphically 

Which of the functions graphed in Exercises 1–6 are one-to-one, and which are not? 

![[53d3fde6f4187df69d65b8b8d16426673a91a930b5a4a20b13899142bb72d86a.jpg|image]]


![[77fa56786cc6ada976d48141b691301cc089ed5d075e62d33f92b6c77f410aa2.jpg|image]]



3.


![[223bdcb5f3eeeb8f6e31caac76ca58a6646a7afee0878c53080ae7569fc6b55c.jpg|image]]



4.


![[ed531469adb3711cf37618a8b39b66428c3f04e4b2f3dcd0edf4d91ea075382c.jpg|image]]



5.


![[a7e30e704592ef7c5673262ef5d1f5c610efd028d3e7c9cbe62af4d25df58ce2.jpg|image]]



6.


![[1625121e578c18acf4b403ac7d807b670c71fe23b3acb4baf0e543b35baecceb.jpg|image]]


In Exercises 7–10, determine from its graph whether the function is one-to-one. 

7. $f(x) = \begin{cases} 3 - x, & x < 0 \\ 3, & x \geq 0 \end{cases}$ 

$$
f (x) = \left\{ \begin{array}{l l} 2 x + 6, & x \leq - 3 \\ x + 4, & x > - 3 \end{array} \right.
$$

$$
f (x) = \left\{ \begin{array}{l l} 1 - \frac {x}{2}, & x \leq 0 \\ \frac {x}{x + 2}, & x > 0 \end{array} \right.
$$

10. $f(x) = \left\{ \begin{array}{ll}2 - x^2, & x\leq 1\\ x^2, & x > 1 \end{array} \right.$ 

## Graphing Inverse Functions

Each of Exercises 11–16 shows the graph of a function $y = f(x)$ . Copy the graph and draw in the line y = x. Then use reflection with respect to the line y = x to add the graph of $f^{-1}$ to your sketch. (It is not necessary to find a formula for $f^{-1}$ .) Identify the domain and range of $f^{-1}$ . 


11.



12.


![[c44d68e6d2582a25cd73921a450a97f4fd79fd5ae76314b633f881489bbe44af.jpg|image]]


![[81dd089c0382d54fa662cba82c898af341749af16ca6dc239f98a26921089b96.jpg|image]]



13.


![[688cff0db9f30491c1f055827eca3dd1fb66992fcf9d73de201156f6e56699f9.jpg|image]]



14.


![[06400ff30463b855d23bc861385738d02f2414fec5595b6350368528241dac9d.jpg|image]]



15.


![[2856ab688a3afd3b63f7563949a47b04da39813b79ae2fe61366ad3ad8d2c382.jpg|image]]


![[15e455ede49fab6f15c9990a8002dea6d1bd65ad066cb4d1fa2a5629450bd4d8.jpg|image]]


17. a. Graph the function $f(x) = \sqrt{1 - x^2}, 0 \leq x \leq 1$ . What symmetry does the graph have? 

b. Show that $f$ is its own inverse. (Remember that $\sqrt{x^2} = x$ if $x \geq 0$ .) 

18. a. Graph the function $f(x) = 1 / x$ . What symmetry does the graph have? 

b. Show that $f$ is its own inverse. 

## Formulas for Inverse Functions

Each of Exercises 19–24 gives a formula for a function $y = f(x)$ and shows the graphs of f and $f^{-1}$ . Find a formula for $f^{-1}$ in each case. 

19. $f(x) = x^{2} + 1,\quad x \geq 0$ 

![[cc953b6354ad518c58ce2045916c5bbe1b0e6b854e3dbd3f0d72671fe5b48e3f.jpg|image]]


20. $f(x) = x^{2}, x \leq 0$ 

![[593208c97ee6174ace331c2e1bf8bf4cc3f2dd200924e25ca2709bbf298d817d.jpg|image]]


21. $f(x) = x^{3} - 1$ 

22. $f(x) = x^{2} - 2x + 1, x \geq 1$ 

![[a6deeffd6cc7c48c558cd3bac7e4525710a4751aeac28fed4950d7fe509b3077.jpg|image]]


![[5c9ec128d988849b0622c1f8184dd556b44686c3faaface13d469cffd7ff5d0b.jpg|image]]


23. $f(x) = (x + 1)^2$ , $x \geq -1$ 24. $f(x) = x^{2/3}$ , $x \geq 0$ 

![[023677478d797a00364ea36d57390d868a378c130305cd2e261899bb8086e0b2.jpg|image]]


![[690a9078e35dda36a75fb21ce714bd802349b8fe1c895a8f618a2bebcb9e893d.jpg|image]]


Each of Exercises 25–36 gives a formula for a function $y = f(x)$ . In each case, find $f^{-1}(x)$ and identify the domain and range of $f^{-1}$ . As a check, show that $f(f^{-1}(x)) = f^{-1}(f(x)) = x$ . 

25. $f(x) = x^{5}$ 26. $f(x) = x^4, x \geq 0$ 

27. $f(x) = x^3 + 1$ 28. $f(x) = (1/2)x - 7/2$ 

29. $f(x) = 1 / x^2, x > 0$ 30. $f(x) = 1 / x^3, x \neq 0$ 

31. $f(x) = \frac{x + 3}{x - 2}$ 32. $f(x) = \frac{\sqrt{x}}{\sqrt{x} - 3}$ 

33. $f(x) = x^2 - 2x, \quad x \leq 1$ 34. $f(x) = (2x^3 + 1)^{1/5}$ 

(Hint: Complete the square.) 

35. $f(x) = \frac{x + b}{x - 2}, b > -2$ and constant 

36. $f(x) = x^{2} - 2bx,\quad b > 0$ and constant, $x \leq b$ 

## Inverses of Lines

37. a. Find the inverse of the function $f(x) = mx$ , where m is a constant different from zero. 

b. What can you conclude about the inverse of a function $y = f(x)$ whose graph is a line through the origin with a nonzero slope m? 

38. Show that the graph of the inverse of $f(x) = mx + b$ , where $m$ and $b$ are constants and $m \neq 0$ , is a line with slope $1/m$ and $y$ -intercept $-b/m$ . 

39. a. Find the inverse of $f(x) = x + 1$ . Graph f and its inverse together. Add the line y = x to your sketch, drawing it with dashes or dots for contrast. 

b. Find the inverse of $f(x) = x + b$ (b constant). How is the graph of $f^{-1}$ related to the graph of f? 

c. What can you conclude about the inverses of functions whose graphs are lines parallel to the line $y = x$ ? 

40. a. Find the inverse of $f(x) = -x + 1$ . Graph the line $y = -x + 1$ together with the line $y = x$ . At what angle do the lines intersect? 

b. Find the inverse of $f(x) = -x + b$ (b constant). What angle does the line $y = -x + b$ make with the line y = x? 

c. What can you conclude about the inverses of functions whose graphs are lines perpendicular to the line $y = x$ ? 

## Logarithms and Exponentials

41. Express the following logarithms in terms of $\ln 2$ and $\ln 3$ .  
a. $\ln 0.75$ b. $\ln (4/9)$ c. $\ln (1/2)$ d. $\ln \sqrt[3]{9}$ e. $\ln 3\sqrt{2}$ f. $\ln \sqrt{13.5}$ 

42. Express the following logarithms in terms of $\ln 5$ and $\ln 7$ .  
a. $\ln (1 / 125)$ b. $\ln 9.8$ c. $\ln 7\sqrt{7}$ d. $\ln 1225$ e. $\ln 0.056$ f. $(\ln 35 + \ln (1 / 7)) / (\ln 25)$ 

Use the properties of logarithms to write the expressions in Exercises 43 and 44 as a single term. 

43. a. $\ln \sin \theta - \ln \left( \frac{\sin \theta}{5} \right)$ b. $\ln (3x^2 - 9x) + \ln \left( \frac{1}{3x} \right)$ c. $\frac{1}{2} \ln (4t^4) - \ln b$ 

44. a. $\ln \sec \theta + \ln \cos \theta$ b. $\ln(8x + 4) - 2 \ln c$ c. $3 \ln \sqrt[3]{t^{2} - 1} - \ln(t + 1)$ 

Find simpler expressions for the quantities in Exercises 45–48. 

45. a. $e^{\ln 7.2}$ b. $e^{-\ln x^2}$ c. $e^{\ln x - \ln y}$ 

46. a. $e^{\ln (x^2 +y^2)}$ b. $e^{-\ln 0.3}$ c. $e^{\ln \pi x - \ln 2}$ 

47. a. $2\ln \sqrt{e}$ b. $\ln (\ln e^e)$ c. $\ln (e^{-x^2 - y^2})$ 

48. a. $\ln (e^{\sec \theta})$ b. $\ln (e^{(ex)})$ c. $\ln (e^{2\ln x})$ 

In Exercises 49–54, solve for y in terms of t or x, as appropriate. 

49. $\ln y = 2t + 4$ 50. $\ln y = -t + 5$ 

51. $\ln (y - b) = 5t$ 52. $\ln (c - 2y) = t$ 

53. $\ln (y - 1) - \ln 2 = x + \ln x$ 

54. $\ln (y^2 - 1) - \ln (y + 1) = \ln (\sin x)$ 

In Exercises 55 and 56, solve for $k$ .  
55. a. $e^{2k} = 4$ b. $100e^{10k} = 200$ c. $e^{k/1000} = a$ 56. a. $e^{5k} = \frac{1}{4}$ b. $80e^k = 1$ c. $e^{(\ln 0.8)k} = 0.8$ 

In Exercises 57–64, solve for t.

57. a. $e^{-0.3t} = 27$ b. $e^{kt} = \frac{1}{2}$ c. $e^{(\ln 0.2)t} = 0.4$ 58. a. $e^{-0.01t} = 1000$ b. $e^{kt} = \frac{1}{10}$ c. $e^{(\ln 2)t} = \frac{1}{2}$ 59. $e^{\sqrt{t}} = x^{2}$ 60. $e^{(x^{2})e(2x+1)} = e^{t}$ 61. $e^{2t} - 3e^{t} = 0$ 62. $e^{-2t} + 6 = 5e^{-t}$ 63. $\ln\left(\frac{t}{t-1}\right) = 2$ 64. $\ln(t-2) = \ln 8 - \ln t$ 

65. a. $5^{\log_57}$ b. $8^{\log_8\sqrt{2}}$ c. $1.3^{\log_{1.3}75}$ d. $\log_416$ e. $\log_3\sqrt{3}$ f. $\log_4\left(\frac{1}{4}\right)$ 

$$
2 ^ {\log_ {2} 3}
$$

$$
\log_ {1 1} 1 2 1
$$

$$
1 0 ^ {\log_ {1 0} (1 / 2)}
$$

$$
\log_ {1 2 1} 1 1
$$

$$
\pi^ {\log_ {\pi} 7}
$$

$$
\log_ {3} \left(\frac {1}{9}\right)
$$

$$
2 ^ {\log_ {4} x}
$$

$$
9 ^ {\log_ {3} x}
$$

$$
\log_ {2} \left(e ^ {(\ln 2) (\sin x)}\right)
$$

68. a. $25^{\log_5(3x^2)}$ b. $\log_e(e^x)$ c. $\log_4\left(2^{ex\sin x}\right)$ 

Express the ratios in Exercises 69 and 70 as ratios of natural logarithms and simplify.
69. a. $\frac{\log_2 x}{\log_3 x}$ b. $\frac{\log_2 x}{\log_8 x}$ c. $\frac{\log_x a}{\log_{x^2} a}$ 70. a. $\frac{\log_9 x}{\log_3 x}$ b. $\frac{\log_{\sqrt{10}} x}{\log_{\sqrt{2}} x}$ c. $\frac{\log_a b}{\log_b a}$ 

## Arcsine and Arcosine

In Exercises 71–74, find the exact value of each expression. Remember that $\sin^{-1}x$ and $\arcsin x$ are the same function, and, similarly, $\cos^{-1}x$ and $\arccos x$ .
71. a. $\sin^{-1}\left(\frac{-1}{2}\right)$ b. $\sin^{-1}\left(\frac{1}{\sqrt{2}}\right)$ c. $\sin^{-1}\left(\frac{-\sqrt{3}}{2}\right)$ 72. a. $\cos^{-1}\left(\frac{1}{2}\right)$ b. $\cos^{-1}\left(\frac{-1}{\sqrt{2}}\right)$ c. $\cos^{-1}\left(\frac{\sqrt{3}}{2}\right)$ 

73. a. arccos $(-1)$ b. arccos (0) 

74. a. $\arcsin (-1)$ b. $\arcsin \left(-\frac{1}{\sqrt{2}}\right)$ 

## Theory and Examples

75. If $f(x)$ is one-to-one, can anything be said about $g(x) = -f(x)$ ? Is it also one-to-one? Give reasons for your answer. 

76. If $f(x)$ is one-to-one and $f(x)$ is never zero, can anything be said about $h(x) = 1/f(x)$ ? Is it also one-to-one? Give reasons for your answer. 

77. Suppose that the range of g lies in the domain of f so that the composition $f \circ g$ is defined. If f and g are one-to-one, can anything be said about $f \circ g$ ? Give reasons for your answer. 

78. If a composition $f \circ g$ is one-to-one, must $g$ be one-to-one? Give reasons for your answer. 

79. Find a formula for the inverse function $f^{-1}$ and verify that $(f \circ f^{-1})(x) = (f^{-1} \circ f)(x) = x$ .  
a. $f(x) = \frac{100}{1 + 2^{-x}}$ b. $f(x) = \frac{50}{1 + 1.1^{-x}}$ c. $f(x) = \frac{e^x - 1}{e^x + 1}$ d. $f(x) = \frac{\ln x}{2 - \ln x}$ 

80. The identity arcsin $x + \arccos x = \pi/2$ Figure 1.65 establishes the identity for 0 < x < 1. To establish it for the rest of [-1, 1], verify by direct calculation that it holds for x = 1, 0, and -1. Then, for values of x in (-1, 0), let x = -a, a > 0, and apply Eqs. (3) and (5) to the sum arcsin (-a) + arccos (-a). 

81. Start with the graph of $y = \ln x$ . Find an equation of the graph that results from  
a. shifting down 3 units.  
b. shifting right 1 unit.  
c. shifting left 1, up 3 units.  
d. shifting down 4, right 2 units.  
e. reflecting about the $y$ -axis.  
f. reflecting about the line $y = x$ . 

82. Start with the graph of $y = \ln x$ . Find an equation of the graph that results from a. vertical stretching by a factor of 2. b. horizontal stretching by a factor of 3. c. vertical compression by a factor of 4. d. horizontal compression by a factor of 2. 

83. The equation $x^{2} = 2^{x}$ has three solutions: $x = 2, x = 4$ , and one other. Estimate the third solution as accurately as you can by graphing. 

84. Could $x^{\ln 2}$ possibly be the same as $2^{\ln x}$ for x > 0? Graph the two functions and explain what you see. 

85. Radioactive decay The half-life of a certain radioactive substance is 12 hours. There are 8 grams present initially. 

a. Express the amount of substance remaining as a function of time t. 

b. When will there be 1 gram remaining? 

86. Doubling your money Determine how much time is required for a $500 investment to double in value if interest is earned at the rate of 4.75% compounded annually. 

87. Population growth The population of a town in California is 375,000 and is increasing at the rate of 2.25% per year. Predict when the population will be 1 million. 

88. Radon-222 The decay equation for radon-222 gas is known to be $y = y_{0}e^{-0.18t}$ , with t in days. About how long will it take the radon in a sealed sample of air to fall to 90% of its original value? 

## CHAPTER 1 Questions to Guide Your Review

1. What is a function? What is its domain? Its range? What is an arrow diagram for a function? Give examples. 

2. What is the graph of a real-valued function of a real variable? What is the vertical line test? 

3. What is a piecewise-defined function? Give examples. 

4. What are the important types of functions frequently encountered in calculus? Give an example of each type. 

5. What is meant by an increasing function? A decreasing function? Give an example of each. 

6. What is an even function? An odd function? What symmetry properties do the graphs of such functions have? What advantage can we take of this? Give an example of a function that is neither even nor odd. 

7. If $f$ and $g$ are real-valued functions, how are the domains of $f + g, f - g, fg$ , and $f / g$ related to the domains of $f$ and $g$ ? Give examples. 

8. When is it possible to compose one function with another? Give examples of compositions and their values at various points. Does the order in which functions are composed ever matter? 

9. How do you change the equation $y = f(x)$ to shift its graph vertically up or down by $|k|$ units? Horizontally to the left or right? Give examples. 

10. How do you change the equation $y = f(x)$ to compress or stretch the graph by a factor c > 1? Reflect the graph across a coordinate axis? Give examples. 

11. What is radian measure? How do you convert from radians to degrees? Degrees to radians? 

12. Graph the six basic trigonometric functions. What symmetries do the graphs have? 

13. What is a periodic function? Give examples. What are the periods of the six basic trigonometric functions? 

## CHAPTER 1 Practice Exercises

## Functions and Graphs

1. Express the area and circumference of a circle as functions of the circle's radius. Then express the area as a function of the circumference. 

2. Express the radius of a sphere as a function of the sphere's surface area. Then express the surface area as a function of the volume. 

3. A point P in the first quadrant lies on the parabola $y = x^{2}$ . Express the coordinates of P as functions of the angle of inclination of the line joining P to the origin. 

4. A hot-air balloon rising straight up from a level field is tracked by a range finder located 500 m from the point of liftoff. Express the balloon's height as a function of the angle the line from the range finder to the balloon makes with the ground. 

14. Starting with the identity $\sin^{2}\theta + \cos^{2}\theta = 1$ and the formulas for $\cos(A + B)$ and $\sin(A + B)$ , show how a variety of other trigonometric identities may be derived. 

15. How does the formula for the general sine function $f(x) = A \sin((2\pi/B)(x - C)) + D$ relate to the shifting, stretching, compressing, and reflection of its graph? Give examples. Graph the general sine curve and identify the constants A, B, C, and D. 

16. Name three issues that arise when functions are graphed using a calculator or computer with graphing software. Give examples. 

17. What is an exponential function? Give examples. What laws of exponents does it obey? How does it differ from a simple power function like $f(x) = x^n$ ? What kind of real-world phenomena are modeled by exponential functions? 

18. What is the number $e$ , and how is it defined? What are the domain and range of $f(x) = e^x$ ? What does its graph look like? How do the values of $e^x$ relate to $x^2, x^3$ , and so on? 

19. What functions have inverses? How do you know if two functions f and g are inverses of one another? Give examples of functions that are (are not) inverses of one another. 

20. How are the domains, ranges, and graphs of functions and their inverses related? Give an example. 

21. What procedure can you sometimes use to express the inverse of a function of $x$ as a function of $x$ ? 

22. What is a logarithmic function? What properties does it satisfy? What is the natural logarithm function? What are the domain and range of $y = \ln x$ ? What does its graph look like? 

23. How is the graph of $\log_{a}x$ related to the graph of $\ln x$ ? What truth is in the statement that there is really only one exponential function and one logarithmic function? 

24. How are the inverse trigonometric functions defined? How can you sometimes use right triangles to find values of these functions? Give examples. 

In Exercises 5–8, determine whether the graph of the function is symmetric about the y-axis, the origin, or neither. 

$$
5. y = x ^ {1 / 5}
$$

$$
6. y = x ^ {2 / 5}
$$

$$
y = x ^ {2} - 2 x - 1
$$

$$
\mathbf {8 .} y = e ^ {- x ^ {2}}
$$

In Exercises 9–16, determine whether the function is even, odd, or neither. 

$$
9. y = x ^ {2} + 1
$$

10. $y = x^{5} - x^{3} - x$ 

11. $y = 1 - \cos x$ 

12. $y = \sec x\tan x$ 

13. $y = \frac{x^4 + 1}{x^3 - 2x}$ 

14. $y = x - \sin x$ 

15. $y = x + \cos x$ 

16. $y = x\cos x$ 

17. Suppose that $f$ and $g$ are both odd functions defined on the entire real line. Which of the following (where defined) are even? odd?
a. $fg$ b. $f^3$ c. $f(\sin x)$ d. $g(\sec x)$ e. $|g|$ 

18. If $f(a - x) = f(a + x)$ , show that $g(x) = f(x + a)$ is an even function. 

In Exercises 19–32, find the (a) domain and (b) range. 

19. $y = |x| - 2$ 

20. $y = -2 + \sqrt{1 - x}$ 

21. $y = \sqrt{16 - x^{2}}$ 

22. $y = 3^{2 - x} + 1$ 

23. $y = 2e^{-x} - 3$ 

24. $y = \tan (2x - \pi)$ 

25. $y = 2\sin (3x + \pi) - 1$ 

26. $y = x^{2 / 5}$ 

27. $y = \ln (x - 3) + 1$ 

28. $y = -1 + \sqrt[3]{2 - x}$ 

29. $y = 5 - \sqrt{x^2 - 2x - 3}$ 

30. $y = 2 + \frac{3x^2}{x^2 + 4}$ 

31. $y = 4 \sin\left(\frac{1}{x}\right)$ 

32. $y = 3 \cos x + 4 \sin x$ (Hint: A trig identity is required.) 

33. State whether each function is increasing, decreasing, or neither. 

a. Volume of a sphere as a function of its radius 

b. Greatest integer function 

c. Height above Earth's sea level as a function of atmospheric pressure (assumed nonzero) 

d. Kinetic energy as a function of a particle's velocity 

34. Find the largest interval on which the given function is increasing. 

a. $f(x) = |x - 2| + 1$ b. $f(x) = (x + 1)^4$ 

c. $g(x) = (3x - 1)^{1 / 3}$ d. $R(x) = \sqrt{2x - 1}$ 

Piecewise-Defined Functions 

In Exercises 35 and 36, find the (a) domain and (b) range. 

35. $y = \begin{cases} \sqrt{-x}, & -4 \leq x \leq 0 \\ \sqrt{x}, & 0 < x \leq 4 \end{cases}$ 

36. $y = \begin{cases} -x - 2, & -2 \leq x \leq -1 \\ x, & -1 < x \leq 1 \\ -x + 2, & 1 < x \leq 2 \end{cases}$ 

In Exercises 37 and 38, write a piecewise formula for the function. 

37. 

![[932d6f07d40607fe6e1c02eb0bebc87c91db3b85b60118d10a0ef7c3eebedcee.jpg|image]]


38. 

![[b51786a13c9c9a5b44b6ea387ae92c99d6deb065fb84eba3f4779b2159c2620d.jpg|image]]


Composition of Functions 

In Exercises 39 and 40, find 

a. $(f\circ g)(-1)$ b. $(g\circ f)(2)$ 

c. $(f\circ f)(x)$ d. $(g\circ g)(x)$ 

39. $f(x) = \frac{1}{x},\quad g(x) = \frac{1}{\sqrt{x + 2}}$ 

40. $f(x) = 2 - x, \quad g(x) = \sqrt[3]{x + 1}$ 

In Exercises 41 and 42, (a) write formulas for $f \circ g$ and $g \circ f$ and find the (b) domain and (c) range of each. 

41. $f(x) = 2 - x^{2}, \quad g(x) = \sqrt{x + 2}$ 

42. $f(x) = \sqrt{x}$ , $g(x) = \sqrt{1 - x}$ 

For Exercises 43 and 44, sketch the graphs of f and $f \circ f$ . 

43. $f(x) = \begin{cases} -x - 2, & -4\leq x\leq -1\\ -1, & -1 <   x\leq 1\\ x - 2, & 1 <   x\leq 2 \end{cases}$ 

44. $f(x) = \left\{ \begin{array}{ll}x + 1, & -2\leq x <   0\\ x - 1, & 0\leq x\leq 2 \end{array} \right.$ 

Composition with absolute values In Exercises 45–52, graph $f_{1}$ and $f_{2}$ together. Then describe how applying the absolute value function in $f_{2}$ affects the graph of $f_{1}$ . 

$f_{1}(x)$ $f_{2}(x)$ 

45. $x$ |x| 

46. $x^{2}$ $|x|^{2}$ 

47. $x^{3}$ $\left|x^{3}\right|$ 

48. $x^{2} + x\quad |x^{2} + x|$ 

49. $4 - x^{2}$ $\left|4 - x^{2}\right|$ 

50. $\frac{1}{x}$ $\frac{1}{|x|}$ 

51. $\sqrt{x}$ $\sqrt{|x|}$ 

52. $\sin x$ $\sin |x|$ 

Shifting and Scaling Graphs 

53. Suppose the graph of g is given. Write equations for the graphs that are obtained from the graph of g by shifting, scaling, or reflecting, as indicated. 

a. Up $\frac{1}{2}$ unit, right 3 

b. Down 2 units, left $\frac{2}{3}$ 

c. Reflect about the y-axis 

d. Reflect about the x-axis 

e. Stretch vertically by a factor of 5 

f. Compress horizontally by a factor of 5 

54. Describe how each graph is obtained from the graph of $y = f(x)$ .  
a. $y = f(x - 5)$ b. $y = f(4x)$ c. $y = f(-3x)$ d. $y = f(2x + 1)$ e. $y = f\left(\frac{x}{3}\right) - 4$ f. $y = -3f(x) + \frac{1}{4}$ 

In Exercises 55–58, graph each function, not by plotting points, but by starting with the graph of one of the standard functions presented in Figures 1.15–1.17, and applying an appropriate transformation. 

55. $y = -\sqrt{1 + \frac{x}{2}}$ 

56. $y = 1 - \frac{x}{3}$ 

57. $y = \frac{1}{2x^2} + 1$ 

58. $y = (-5x)^{1/3}$ 

## Trigonometry

In Exercises 59–62, sketch the graph of the given function. What is the period of the function? 

59. $y = \cos 2x$ 

60. $y = \sin \frac{x}{2}$ 

61. $y = \sin \pi x$ 

62. $y = \cos \frac{\pi x}{2}$ 

63. Sketch the graph $y = 2\cos \left(x - \frac{\pi}{3}\right)$ . 

64. Sketch the graph $y = 1 + \sin \left( x + \frac{\pi}{4} \right)$ . 

In Exercises 65–68, ABC is a right triangle with the right angle at C. The sides opposite angles A, B, and C are a, b, and c, respectively. 

65. a. Find $a$ and $b$ if $c = 2$ , $B = \pi / 3$ . 

b. Find $a$ and $c$ if $b = 2$ , $B = \pi / 3$ . 

66. a. Express $a$ in terms of $A$ and $c$ . 

b. Express a in terms of A and b. 

67. a. Express $a$ in terms of $B$ and $b$ . 

b. Express c in terms of A and a. 

68. a. Express $\sin A$ in terms of a and c. 

b. Express $\sin A$ in terms of b and c. 

69. Height of a pole Two wires stretch from the top T of a vertical pole to points B and C on the ground, where C is 10 m closer to the base of the pole than is B. If wire BT makes an angle of $35^{\circ}$ with the horizontal and wire CT makes an angle of $50^{\circ}$ with the horizontal, how high is the pole? 

70. Height of a weather balloon Observers at positions A and B 2 km apart simultaneously measure the angle of elevation of a weather balloon to be $40^{\circ}$ and $70^{\circ}$ , respectively. If the balloon is directly above a point on the line segment between A and B, find the height of the balloon. 

T 71. a. Graph the function $f(x) = \sin x + \cos (x / 2)$ . 

b. What appears to be the period of this function? 

c. Confirm your finding in part (b) algebraically. 

T 72. a. Graph $f(x) = \sin(1/x)$ . 

b. What are the domain and range of $f$ ? 

c. Is $f$ periodic? Give reasons for your answer. 

## Transcendental Functions

In Exercises 73–76, find the domain of each function. 

73. a. $f(x) = 1 + e^{-\sin x}$ b. $g(x) = e^{x} + \ln \sqrt{x}$ 

74. a. $f(x) = e^{1 / x^2}$ b. $g(x) = \ln |4 - x^2|$ 

75. a. $h(x) = \sin^{-1}\left(\frac{x}{3}\right)$ b. $f(x) = \cos^{-1}\left(\sqrt{x} - 1\right)$ 

76. a. $h(x) = \ln (\cos^{-1}x)$ b. $f(x) = \sqrt{\pi - \sin^{-1}x}$ 

77. If $f(x) = \ln x$ and $g(x) = 4 - x^2$ , find the functions $f \circ g, g \circ f, f \circ f, g \circ g$ , and their domains. 

78. Determine whether f is even, odd, or neither. 

a. $f(x) = e^{-x^2}$ b. $f(x) = 1 + \sin^{-1}(-x)$ 

c. $f(x) = |e^x|$ d. $f(x) = e^{\ln |x| + 1}$ 

T 79. Graph $\ln x$ , $\ln 2x$ , $\ln 4x$ , $\ln 8x$ , and $\ln 16x$ (as many as you can) together for $0 < x \leq 10$ . What is going on? Explain. 

T 80. Graph $y = \ln (x^2 + c)$ for $c = -4, -2, 0, 3$ , and 5. How does the graph change when $c$ changes? 

81. Graph $y = \ln |\sin x|$ in the window $0 \leq x \leq 22, -2 \leq y \leq 0$ . Explain what you see. How could you change the formula to turn the arches upside down? 

82. Graph the three functions $y = x^{a}$ , $y = a^{x}$ , and $y = \log_{a} x$ together on the same screen for a = 2, 10, and 20. For large values of x, which of these functions has the largest values and which has the smallest values? 

## Theory and Examples

In Exercises 83 and 84, find the domain and range of each composite function. Then graph the compositions on separate screens. Do the graphs make sense in each case? Give reasons for your answers and comment on any differences you see. 

83. a. $y = \sin^{-1}(\sin x)$ b. $y = \sin (\sin^{-1}x)$ 

84. a. $y = \cos^{-1}(\cos x)$ b. $y = \cos(\cos^{-1}x)$ 

85. Use a graph to decide whether $f$ is one-to-one. 

a. $f(x) = x^3 -\frac{x}{2}$ b. $f(x) = x^3 +\frac{x}{2}$ 

T 86. Use a graph to find to 3 decimal places the values of x for which $e^{x} > 10,000,000$ . 

$$
f (x) = x ^ {3}
$$

$$
g (x) = \sqrt [ 3 ]{x}
$$

T b. Graph $f$ and $g$ over an $x$ -interval large enough to show the graphs intersecting at (1, 1) and (-1, -1). Be sure the picture shows the required symmetry in the line $y = x$ . 

88. a. Show that $h(x) = x^{3}/4$ and $k(x) = (4x)^{1/3}$ are inverses of one another. 

T b. Graph h and k over an x-interval large enough to show the graphs intersecting at $(2, 2)$ and $(-2, -2)$ . Be sure the picture shows the required symmetry in the line y = x. 

## CHAPTER 1 Additional and Advanced Exercises

## Functions and Graphs

1. Are there two functions $f$ and $g$ such that $f \circ g = g \circ f$ ? Give reasons for your answer. 

2. Are there two functions $f$ and $g$ with the following property? The graphs of $f$ and $g$ are not straight lines but the graph of $f \circ g$ is a straight line. Give reasons for your answer. 

3. If $f(x)$ is odd, can anything be said of $g(x) = f(x) - 2$ ? What if $f$ is even instead? Give reasons for your answer. 

5. Graph the equation $|x| + |y| = 1 + x$ . 

4. If $g(x)$ is an odd function defined for all values of $x$ , can anything be said about $g(0)$ ? Give reasons for your answer. 

6. Graph the equation $y + |y| = x + |x|$ . 

## Derivations and Proofs

7. Prove the following identities. 

$$
\mathbf {a}. \frac {1 - \cos x}{\sin x} = \frac {\sin x}{1 + \cos x} \quad \mathbf {b}. \frac {1 - \cos x}{1 + \cos x} = \tan^ {2} \frac {x}{2}
$$

8. Explain the following “proof without words” of the law of cosines. (Source: Kung, Sidney H., “Proof Without Words: The Law of Cosines,” Mathematics Magazine, Vol. 63, no. 5, Dec. 1990, p. 342.) 

![[37c013767cd7b26f7a6f1ebf17fa326f672e69a619ed96f461d529adf0ce02b2.jpg|image]]


9. Show that the area of triangle ABC is given by $(1/2)ab \sin C = (1/2)bc \sin A = (1/2)ca \sin B$ . 

![[b68774d3896a601bbb759f71b81ce9b7e7c7c6458cabc0771c94b18639382a9c.jpg|image]]


10. Show that the area of triangle $ABC$ is given by $\sqrt{s(s - a)(s - b)(s - c)}$ where $s = (a + b + c)/2$ is the semiperimeter of the triangle. 

11. Show that if $f$ is both even and odd, then $f(x) = 0$ for every $x$ in the domain of $f$ . 

12. a. Even-odd decompositions Let $f$ be a function whose domain is symmetric about the origin, that is, $-x$ belongs to the domain whenever $x$ does. Show that $f$ is the sum of an even function and an odd function: 

$$
f (x) = E (x) + O (x),
$$

where $E$ is an even function and $O$ is an odd function. (Hint: Let $E(x) = (f(x) + f(-x)) / 2$ . Show that $E(-x) = E(x)$ , so that $E$ is even. Then show that $O(x) = f(x) - E(x)$ is odd.) 

b. Uniqueness Show that there is only one way to write $f$ as the sum of an even and an odd function. (Hint: One way is given in part (a). If also $f(x) = E_1(x) + O_1(x)$ where $E_1$ is even and $O_1$ is odd, show that $E - E_1 = O_1 - O$ . Then use Exercise 11 to show that $E = E_1$ and $O = O_1$ .) 

Effects of Parameters on Graphs 

13. What happens to the graph of $y = ax^2 + bx + c$ as a. $a$ changes while $b$ and $c$ remain fixed? b. $b$ changes (a and $c$ fixed, $a \neq 0$ )? c. $c$ changes (a and $b$ fixed, $a \neq 0$ )? 

T 14. What happens to the graph of $y = a(x + b)^3 + c$ as a. $a$ changes while $b$ and $c$ remain fixed? b. $b$ changes (a and c fixed, $a \neq 0$ )? c. $c$ changes (a and b fixed, $a \neq 0$ )? 

## Geometry

15. An object's center of mass moves at a constant velocity $v$ along a straight line past the origin. The accompanying figure shows the coordinate system and the line of motion. The dots show positions that are 1 sec apart. Why are the areas $A_1, A_2, \ldots, A_5$ in the figure all equal? As in Kepler's equal area law (see Section 12.6), the line that joins the object's center of mass to the origin sweeps out equal areas in equal times. 

![[80965092f2e742b6f0269fa30c31ed85e9394faca14e34f71b24219211f72c61.jpg|image]]


16. a. Find the slope of the line from the origin to the midpoint $P$ of side $AB$ in the triangle in the accompanying figure $(a, b > 0)$ . 

![[a7328182bbb9c47c42e7ee325d882e449936786c1b35ed01b8a262c9e880da33.jpg|image]]


b. When is $OP$ perpendicular to $AB$ ? 

17. Consider the quarter-circle of radius 1 and right triangles ABE and ACD given in the accompanying figure. Use standard area formulas to conclude that 

$$
\frac {1}{2} \sin \theta \cos \theta <   \frac {\theta}{2} <   \frac {1}{2} \frac {\sin \theta}{\cos \theta}.
$$

![[64dab5079b7589a3455dc82812bf7fdd368200cd5301e1704ba7b0f6461c1dcd.jpg|image]]


18. Let $f(x) = ax + b$ and $g(x) = cx + d$ . What condition must be satisfied by the constants $a, b, c, d$ in order that $(f \circ g)(x) = (g \circ f)(x)$ for every value of $x$ ? 

## Theory and Examples

19. Domain and range Suppose that $a \neq 0, b \neq 1$ , and $b > 0$ . Determine the domain and range of the function. 

a. $y = a(b^{c - x}) + d$ 

b. $y = a \log_{b}(x - c) + d$ 

20. Inverse functions Let 

$$
f (x) = \frac {a x + b}{c x + d}, \quad c \neq 0, \quad a d - b c \neq 0.
$$

a. Give a convincing argument that $f$ is one-to-one. 

b. Find a formula for the inverse of $f$ . 

21. Depreciation Smith Hauling purchased an 18-wheel truck for $100,000. The truck depreciates at the constant rate of $10,000 per year for 10 years. 

a. Write an expression that gives the value y after x years. 

b. When is the value of the truck $55,000? 

22. Drug absorption A drug is administered intravenously for pain. The function 

$$
f (t) = 9 0 - 5 2 \ln (1 + t), \quad 0 \leq t \leq 4
$$

gives the number of units of the drug remaining in the body after t hours. 

a. What was the initial number of units of the drug administered? 

b. How much is present after 2 hours? 

c. Draw the graph of $f$ . 

23. Finding investment time If Juanita invests $1500 in a retirement account that earns 8% compounded annually, how long will it take this single payment to grow to $5000? 

24. The rule of 70 If you use the approximation $\ln 2 \approx 0.70$ (in place of 0.69314 ... ), you can derive a rule of thumb that says, "To estimate how many years it will take an amount of money to double when invested at r percent compounded continuously, divide r into 70." For instance, an amount of money invested at 5% will double in about 70/5 = 14 years. If you want it to double in 10 years instead, you have to invest it at 70/10 = 7%. Show how the rule of 70 is derived. (A similar "rule of 72" uses 72 instead of 70, because 72 has more integer factors.) 

25. For what x > 0 does $x^{(x^{x})} = (x^{x})^{x}$ ? Give reasons for your answer. 

T 26. a. If $(\ln x) / x = (\ln 2) / 2$ , must $x = 2$ ? 

b. If $(\ln x) / x = -2\ln 2$ , must $x = 1 / 2$ ? 

Give reasons for your answers. 

27. The quotient $(\log_4 x) / (\log_2 x)$ has a constant value. What value? Give reasons for your answer. 

28. $\log_x(2)$ vs. $\log_2(x)$ How does $f(x) = \log_x(2)$ compare with $g(x) = \log_2(x)$ ? Here is one way to find out. a. Use the equation $\log_a b = (\ln b) / (\ln a)$ to express $f(x)$ and $g(x)$ in terms of natural logarithms. 

b. Graph f and g together. Comment on the behavior of f in relation to the signs and values of g. 

## CHAPTER 1 Technology Application Projects

## Mathematica/Maple Projects

Projects can be found within MyLab Math. 

- An Overview of Mathematica
  - An overview of Mathematica sufficient to complete the Mathematica modules appearing on the Web site. 

- Modeling Change: Springs, Driving Safety, Radioactivity, Trees, Fish, and Mammals
Construct and interpret mathematical models, analyze and improve them, and make predictions using them. 

## Limits and Continuity

![[2dfcc81d3cbdc455139f2ce61882fd4a1a9d6ae592cb5f28b2e999566d01e89d.jpg|image]]


OVERVIEW In this chapter we develop the concept of a limit, first intuitively and then formally. We use limits to describe the way a function varies. Some functions vary continuously; small changes in x produce only small changes in $f(x)$ . Other functions can have values that jump, vary erratically, or tend to increase or decrease without bound. The notion of limit gives a precise way to distinguish among these behaviors.
