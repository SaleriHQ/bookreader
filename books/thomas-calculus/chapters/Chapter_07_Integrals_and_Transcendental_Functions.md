---
title: "Chapter 7: Integrals and Transcendental Functions"
order: 7
---

# Chapter 7: Integrals and Transcendental Functions

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 7.1 The Logarithm Defined as an Integral

In Chapter 1, we introduced the natural logarithm function $\ln x$ as the inverse of the exponential function $e^x$ . The function $e^x$ was chosen as that function in the family of general exponential functions $a^x, a > 0$ , whose graph has slope 1 as it crosses the $y$ -axis. The function $a^x$ was presented intuitively, however, based on its graph at rational values of $x$ . 

In this section we recreate the theory of logarithmic and exponential functions from an entirely different point of view. Here we define these functions analytically and derive their behaviors. To begin, we use the Fundamental Theorem of Calculus to define the natural logarithm function $\ln x$ as an integral. We quickly develop its properties, including the algebraic, geometric, and analytic properties with which we are already familiar. Next we introduce the function $e^{x}$ as the inverse function of $\ln x$ , and establish its properties. Defining $\ln x$ as an integral and $e^{x}$ as its inverse is an indirect approach that gives an elegant and powerful way to obtain and validate the key properties of logarithmic and exponential functions. 

## Definition of the Natural Logarithm Function

The natural logarithm of a positive number x, written as $\ln x$ , is the value of an integral. The appropriate integral is suggested by our earlier results in Chapter 5. 

> ***DEFINITION*** The natural logarithm is the function given by 
>
> $$
> \ln x = \int_ {1} ^ {x} \frac {1}{t} d t, x > 0.
> $$
>
From the Fundamental Theorem of Calculus, we know that $\ln x$ is a continuous function. Geometrically, if x > 1, then $\ln x$ is the area under the curve y = 1/t from t = 1 to t = x (Figure 7.1). For 0 < x < 1, $\ln x$ gives the negative of the area under the curve from x to 1, and the function is not defined for $x \leq 0$ . From the Zero Width Interval Rule for definite integrals, we also have 

$$
\ln 1 = \int_ {1} ^ {1} \frac {1}{t} d t = 0.
$$

![[c02c639414b8b7c7bba285d8ad3ed94fdea052a9f208f2e781983546a793b31d.jpg|image]]



FIGURE 7.1 The graph of $y = \ln x$ and its relation to the function $y = 1/x, x > 0$ . The graph of the logarithm rises above the x-axis as x moves from 1 to the right, and it falls below the axis as x moves from 1 to the left.


Notice that we show the graph of $y = 1 / x$ in Figure 7.1 but use $y = 1 / t$ in the integral. Using $x$ for everything would have us writing 


TABLE 7.1 Typical 2-place values of ln x


<table><tr><td>x</td><td>ln x</td></tr><tr><td>0</td><td>undefined</td></tr><tr><td>0.05</td><td>-3.00</td></tr><tr><td>0.5</td><td>-0.69</td></tr><tr><td>1</td><td>0</td></tr><tr><td>2</td><td>0.69</td></tr><tr><td>3</td><td>1.10</td></tr><tr><td>4</td><td>1.39</td></tr><tr><td>10</td><td>2.30</td></tr></table>

$$
\ln x = \int_ {1} ^ {x} \frac {1}{x} d x,
$$

with $x$ meaning two different things. So we change the variable of integration to $t$ . 

By using rectangles to obtain finite approximations of the area under the graph of $y = 1 / t$ and over the interval between $t = 1$ and $t = x$ , as in Section 5.1, we can approximate the values of the function $\ln x$ . Several values are given in Table 7.1. There is an important number between $x = 2$ and $x = 3$ whose natural logarithm equals 1. This number, which we now define, exists because $\ln x$ is a continuous function and therefore satisfies the Intermediate Value Theorem on the interval [2, 3]. 

> ***DEFINITION*** The number e is the number in the domain of the natural logarithm that satisfies 
>
> $$
> \ln (e) = \int_ {1} ^ {e} \frac {1}{t} d t = 1.
> $$
>
Interpreted geometrically, the number e corresponds to the point on the x-axis for which the area under the graph of y = 1/t and above the interval $[1, e]$ equals the area of the unit square. That is, the area of the region shaded blue in Figure 7.1 is 1 square unit when x = e. We will see further on that this is the same number $e \approx 2.718281828$ we have encountered before. 

The Derivative of $y = \ln x$ 

By the first part of the Fundamental Theorem of Calculus (Section 5.4), 

$$
{\frac {d}{d x}} \ln x = {\frac {d}{d x}} \int_ {1} ^ {x} {\frac {1}{t}} d t = {\frac {1}{x}},
$$

so we have 

$$
{\frac {d}{d x}} \ln x = {\frac {1}{x}}, x > 0.\tag{1}
$$

Therefore, the function $y = \ln x$ is a solution to the initial value problem $dy / dx = 1 / x$ , $x > 0$ , with $y(1) = 0$ . Notice that the derivative is always positive. 

If $u$ is a differentiable function of $x$ whose values are positive so that $\ln u$ is defined, then by applying the Chain Rule, we obtain 

$$
{\frac {d}{d x}} \ln u = {\frac {1}{u}} {\frac {d u}{d x}}, u > 0.\tag{2}
$$

The derivative of $\ln |x|$ can be found just as in Example 3(c) of Section 3.8, giving 

(3) 

![[b43c21e3246dedcbc650a12d4a3ec5f41816629798b94ddedbb73d4428fe0454.jpg|image]]



(a)


$$
\frac {d}{d x} \ln | x | = \frac {1}{x}, x \neq 0.
$$

![[e1112f48963e180b2bcc4dec0d051ec8d6c4eaa925c96d21468834b22376eb51.jpg|image]]



(b)



FIGURE 7.2 (a) The graph of the natural logarithm. (b) The rectangle of height y = 1/2 fits beneath the graph of y = 1/x for the interval $1 \leq x \leq 2$ .


Moreover, if b is any constant with bx > 0, Equation (2) gives 

$$
{\frac {d}{d x}} \ln b x = {\frac {1}{b x}} \cdot {\frac {d}{d x}} (b x) = {\frac {1}{b x}} (b) = {\frac {1}{x}}.
$$

## The Graph and Range of $\ln x$

The derivative $d(\ln x)/dx = 1/x$ is positive for x > 0, so $\ln x$ is an increasing function of x. The second derivative, $-1/x^{2}$ , is negative, so the graph of $\ln x$ is concave down. (See Figure 7.2a.) 

The function $\ln x$ has the following familiar algebraic properties, which we stated in Section 1.5. In Section 4.2 we showed these properties are a consequence of Corollary 2 of the Mean Value Theorem, and those derivations still apply. 

1. $\ln bx = \ln b + \ln x$ 

$$
\ln \frac {b}{x} = \ln b - \ln x
$$

3. $\ln \frac{1}{x} = -\ln x$ 

4. $\ln x^{r} = r\ln x,r$ rational 

We can estimate the value of $\ln 2$ by considering the area under the graph of y = 1/x and above the interval [1, 2]. In Figure 7.2(b) a rectangle of height 1/2 over the interval [1, 2] fits under the graph. Therefore, the area under the graph, which is ln 2, is greater than the area of the rectangle, which is 1/2. So ln 2 > 1/2. Knowing this we have 

$$
\ln 2 ^ {n} = n \ln 2 > n \left(\frac {1}{2}\right) = \frac {n}{2}.
$$

This result shows that $\ln(2^{n})\to\infty$ as $n\to\infty$ . Since $\ln x$ is an increasing function, it follows that 

$$
\lim _ {x \to \infty} \ln x = \infty . \quad \text { In } x \text { is   increasing   and   not   bounded   above. }
$$

We also have 

$$
\lim _ {x \rightarrow 0 ^ {+}} \ln x = \lim _ {t \rightarrow \infty} \ln \frac {1}{t} = \lim _ {t \rightarrow \infty} (- \ln t) = - \infty . \quad x = 1 / t
$$

We defined $\ln x$ for x > 0, so the domain of $\ln x$ is the set of positive real numbers. The above discussion and the Intermediate Value Theorem show that its range is the entire real line, giving the familiar graph of $y = \ln x$ shown in Figure 7.2(a). 

## The Integral $\int 1 / x dx$

Equation (3) leads to the following integral formula: 

$$
\int {\frac {1}{x}} d x = \ln | x | + C.\tag{4}
$$

If u is a differentiable function that is never zero, then 

$$
\int {\frac {1}{u}} d u = \ln | u | + C.\tag{5}
$$

Equation (5) applies anywhere on the domain of $1 / u$ , which is the set of points where $u \neq 0$ . It says that integrals that have the form $\int \frac{du}{u}$ lead to logarithms. Whenever $u = f(x)$ is a differentiable function that is never zero, we have that $du = f'(x)dx$ and 

$$
\int \frac {f ^ {\prime} (x)}{f (x)} d x = \ln | f (x) | + C.
$$

**EXAMPLE 1** We rewrite an integral so that it has the form $\int \frac{du}{u}$ . 

$$
\begin{array}{r l} \int_ {- \pi / 2} ^ {\pi / 2} \frac {4 \cos \theta}{3 + 2 \sin \theta} d \theta & = \int_ {1} ^ {5} \frac {2}{u} d u \\ & = 2 \ln | u | \bigg | _ {1} ^ {5} \\ & = 2 \ln | 5 | - 2 \ln | 1 | = 2 \ln 5 \end{array} \quad \begin{array}{l} u = 3 + 2 \sin \theta , d u = 2 \cos \theta d \theta , \\ u (- \pi / 2) = 1, u (\pi / 2) = 5 \end{array}
$$

Note that $u = 3 + 2 \sin \theta$ is always positive on $[-\pi/2, \pi/2]$ , so Equation (5) applies. 

## The Inverse of $\ln x$ and the Number $e$

The function $\ln x$ , being an increasing function of x with domain $(0,\infty)$ and range $(-\infty,\infty)$ , has an inverse $\ln^{-1}x$ with domain $(-\infty,\infty)$ and range $(0,\infty)$ . The graph of $\ln^{-1}x$ is the graph of $\ln x$ reflected across the line y = x. As you can see in Figure 7.3, 

$$
\lim _ {x \to \infty} \ln^ {- 1} x = \infty \quad \text { and } \quad \lim _ {x \to - \infty} \ln^ {- 1} x = 0.
$$

![[b31a89fd9c64e3687b4ed831a357905c4672a2632af3ee8f831859f54906f9ab.jpg|image]]



FIGURE 7.3 The graphs of $y = \ln x$ and $y = \ln^{-1}x = \exp x$ . The number $e$ is $\ln^{-1}1 = \exp(1)$ .


The notations $\ln^{-1}x$ , $\exp x$ , and $e^{x}$ all refer to the natural exponential function. 


Typical values of $e^{x}$


<table><tr><td>x</td><td>ex(rounded)</td></tr><tr><td>-1</td><td>0.37</td></tr><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>2.72</td></tr><tr><td>2</td><td>7.39</td></tr><tr><td>10</td><td>22026</td></tr><tr><td>100</td><td><eq>2.6881 \times 10^{43}</eq></td></tr></table>

The inverse function $\ln^{-1}x$ is also denoted by $\exp x$ . We have not yet established that $\exp x$ is an exponential function, only that $\exp x$ is the inverse of the function $\ln x$ . We will now show that $\ln^{-1}x = \exp x$ is, in fact, the exponential function with base e. 

The number e was defined to satisfy the equation $\ln(e) = 1$ , so $e = \exp(1)$ . We can raise the number e to a rational power r using algebra: 

$$
e ^ {2} = e \cdot e, \quad e ^ {- 2} = \frac {1}{e ^ {2}}, \quad e ^ {1 / 2} = \sqrt {e}, \quad e ^ {2 / 3} = \sqrt [ 3 ]{e ^ {2}},
$$

and so on. Since e is positive, $e^{r}$ is positive too. Therefore, $e^{r}$ has a logarithm. When we take the logarithm, we find that if r is rational, then 

$$
\ln e ^ {r} = r \ln e = r \cdot 1 = r.
$$

Applying the function $\ln^{-1}$ to both sides of the equation $\ln e^{r} = r$ , we find that 

$$
e ^ {r} = \exp r \quad \text { for   } r \text {   rational. } \quad \exp \text {   is   } \ln^ {- 1}.\tag{6}
$$

Thus exp r coincides with the exponential function $e^{r}$ for all rational values of r. We have not yet found a way to give an exact meaning to $e^{x}$ for x irrational, but we can use Equation (6) to do so. The function $\exp x = \ln^{-1} x$ has domain $(-\infty, \infty)$ , so it is defined for every x. We have $\exp r = e^{r}$ for r rational by Equation (6), and we now define $e^{x}$ to equal $\exp x$ for all x. 

> ***DEFINITION*** For every real number $x$ , we define the natural exponential function to be $e^x = \exp x$ . 

For the first time we have a precise meaning for a number raised to an irrational power. Usually the exponential function is denoted by $e^{x}$ rather than $\exp x$ . Since $\ln x$ and $e^{x}$ are inverses of one another, we have the following relations. 

Inverse Equations for $e^{x}$ and $\ln x$ 

$$
\begin{array}{r l} e ^ {\ln x} = x & \text {(all x > 0)} \\ \ln (e ^ {x}) = x & \text {(all x)} \end{array}
$$

## The Derivative and Integral of $e^x$

The exponential function is differentiable because it is the inverse of a differentiable function whose derivative is never zero. We calculate its derivative by using Theorem 3 of Section 3.8 and our knowledge of the derivative of $\ln x$ . Let 

$$
f (x) = \ln x \quad \text { and } \quad y = e ^ {x} = \ln^ {- 1} x = f ^ {- 1} (x).
$$

Then 

$$
\begin{array}{l l} \frac {d y}{d x} = \frac {d}{d x} e ^ {x} = \frac {d}{d x} \ln^ {- 1} x \\ = \frac {d}{d x} f ^ {- 1} (x) \\ = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} & \text { Theorem   3,   Section   3.8 } \\ = \frac {1}{f ^ {\prime} (e ^ {x})} & f ^ {- 1} (x) = e ^ {x} \\ = \frac {1}{\left(\frac {1}{e ^ {x}}\right)} & f ^ {\prime} (z) = \frac {1}{z} \text { with } z = e ^ {x} \\ = e ^ {x}. \end{array}
$$

That is, for $y = e^{x}$ , we find that $dy/dx = e^{x}$ , so the natural exponential function $e^{x}$ is its own derivative, just as we claimed in Section 3.3. 

$$
\frac {d}{d x} e ^ {x} = e ^ {x}.\tag{7}
$$

We will see in the next section that the only functions that behave this way are constant multiples of $e^{x}$ . The Chain Rule extends the derivative result in the usual way to a more general form: If u is any differentiable function of x, then 

$$
{\frac {d}{d x}} e ^ {u} = e ^ {u} {\frac {d u}{d x}}.\tag{8}
$$

Since $e^x > 0$ , its derivative is also everywhere positive, so it is an increasing and continuous function for all $x$ , having limits 

$$
\lim _ {x \to - \infty} e ^ {x} = 0 \quad \text { and } \quad \lim _ {x \to \infty} e ^ {x} = \infty .
$$

It follows that the $x$ -axis $(y = 0)$ is a horizontal asymptote of the graph $y = e^{x}$ (see Figure 7.3). 

Equation (7) also tells us the indefinite integral of $e^{x}$ . 

$$
\int e ^ {x} d x = e ^ {x} + C
$$

If $f(x) = e^{x}$ , then we see from Equation (7) that $f'(0) = e^{0} = 1$ . That is, the exponential function $e^{x}$ has slope 1 as it crosses the y-axis at x = 0. This agrees with our assertion for the natural exponential in Section 3.3. 

## Logarithms and Laws of Exponents

The familiar algebraic properties of logarithms and exponential functions were stated in Section 1.5. We now show that these follow from the definition of the logarithm as an integral that we have used. The properties of logarithms are stated in Theorem 1. 

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

$$
\text { Rule   2   with } b = 1
$$

4. Power Rule: 

$$
\ln x ^ {r} = r \ln x
$$

The proof uses the Mean Value Theorem, which was established in Section 4.2. 

Proof that $\ln bx = \ln b + \ln x$ The argument starts by observing that $\ln bx$ and $\ln x$ have the same derivative: 

$$
{\frac {d}{d x}} \ln (b x) = {\frac {b}{b x}} = {\frac {1}{x}} = {\frac {d}{d x}} \ln x.
$$

According to Corollary 2 of the Mean Value Theorem, the functions must differ by a constant, which means that 

$$
\ln b x = \ln x + C
$$

for some $C$ . 

Since this last equation holds for all positive values of x, it must hold for x = 1. Hence, 

$$
\begin{array}{c c} \ln (b \cdot 1) = \ln 1 + C \\ \ln b = 0 + C & \quad \ln 1 = 0 \\ C = \ln b. \end{array}
$$

By substituting, we conclude 

$$
\ln b x = \ln b + \ln x.
$$

Proof that $\ln x^{r} = r \ln x$ We use the same-derivative argument again. For all positive values of x, 

$$
\begin{array}{l l} \frac {d}{d x} \ln x ^ {r} = \frac {1}{x ^ {r}} \frac {d}{d x} (x ^ {r}) & \text { Chain   Rule } \\ = \frac {1}{x ^ {r}} r x ^ {r - 1} & \text { Derivative   Power   Rule } \\ = r \cdot \frac {1}{x} = \frac {d}{d x} (r \ln x). \end{array}
$$

Since $\ln x^{r}$ and $r \ln x$ have the same derivative, 

$$
\ln x ^ {r} = r \ln x + C
$$

for some constant C. Taking x to be 1 identifies C as zero, and we're done. 

You are asked to prove the Quotient Rule for logarithms, 

$$
\ln \left(\frac {b}{x}\right) = \ln b - \ln x,
$$

in Exercises 63. The Reciprocal Rule, $\ln (1 / x) = -\ln x$ , is a special case of the Quotient Rule, obtained by taking $b = 1$ and noting that $\ln 1 = 0$ . 

We now state the algebraic properties of exponential functions. 

## THEOREM 2—Laws of Exponents for $e^x$

For all numbers x and y, the natural exponential function $e^{x}$ obeys the following laws. 

$$
1. e ^ {x} e ^ {y} = e ^ {x + y}
$$

$$
2. e ^ {- x} = \frac {1}{e ^ {x}}
$$

$$
3. \frac {e ^ {x}}{e ^ {y}} = e ^ {x - y}
$$

$$
4. (e ^ {x}) ^ {y} = e ^ {x y} = (e ^ {y}) ^ {x}
$$

Proof that $e^{x}e^{y} = e^{x+y}$ 

$$
\begin{array}{l l} e ^ {x} e ^ {y} = e ^ {\ln (e ^ {x} e ^ {y})} & u = e ^ {\ln u}. \\ = e ^ {\ln (e ^ {x}) + \ln (e ^ {y})} & \text { Product   formula   for   } \ln \\ = e ^ {x + y}. & \ln e ^ {u} = u. \end{array}
$$

Theorem 1 and the inverse relationship between the logarithmic and exponential functions also imply the other algebraic properties of the exponential function (see Exercise 67). 

## The General Exponential Function $a^{x}$

Since $a = e^{\ln a}$ for any positive number $a$ , we can express $a^x$ as $(e^{\ln a})^x = e^{x\ln a}$ . We therefore make the following definition, consistent with what we stated in Section 1.5. 

> ***DEFINITION*** For any numbers a > 0 and x, the exponential function with base a is given by 
>
> $$
> a ^ {x} = e ^ {x \ln a}.
> $$

## The General Power Function

$x^{r}$ is the function $e^{r\ln x}$ . 

When a = e, the definition gives $a^{x} = e^{x \ln a} = e^{x \ln e} = e^{x \cdot 1} = e^{x}$ . Similarly, the power function $f(x) = x^{r}$ is defined for positive x by the formula $x^{r} = e^{r \ln x}$ , which holds for any real number r, rational or irrational. 

Theorem 2 is also valid for $a^{x}$ , the exponential function with base a. For example, 

$$
\begin{array}{l l} a ^ {x} \cdot a ^ {y} = e ^ {x \ln a} \cdot e ^ {y \ln a} & \text {   Definition   of   } a ^ {x} \\ = e ^ {x \ln a + y \ln a} & \text {   Law   1   } \\ = e ^ {(x + y) \ln a} & \text {   Common   factor   } \ln a \\ = a ^ {x + y}. & \text {   Definition   of   } a ^ {x} \end{array}
$$

Starting with the definition $a^{x} = e^{x \ln a}, a > 0$ , we get the derivative 

$$
\frac {d}{d x} a ^ {x} = \frac {d}{d x} e ^ {x \ln a} = (\ln a) e ^ {x \ln a} = (\ln a) a ^ {x},
$$

SO 

$$
{\frac {d}{d x}} a ^ {x} = a ^ {x} \ln a.
$$

Alternatively, we get the same derivative rule by applying logarithmic differentiation: 

$$
y = a ^ {x}
$$

Take logarithms. 

$$
\frac {1}{y} \frac {d y}{d x} = \ln a
$$

Differentiate with respect to $x$ . 

$$
\frac {d y}{d x} = y \ln a = a ^ {x} \ln a.
$$

With the Chain Rule, we get a more general form, as in Section 3.8: If $a > 0$ and $u$ is a differentiable function of $x$ , then $a^u$ is a differentiable function of $x$ and 

$$
{\frac {d}{d x}} a ^ {u} = a ^ {u} \ln a {\frac {d u}{d x}}.
$$

![[aed459bc1b05a1aad5fed39098848fe0488d94e28fd1308a755620bcb2e1bf75.jpg|image]]



FIGURE 7.4 The graph of $2^{x}$ and its inverse, $\log_{2} x$ .


## TABLE 7.2 Rules for base a logarithms

For any numbers $x > 0$ and $y > 0$ , 

1. Product Rule: 

$$
\log_ {a} x y = \log_ {a} x + \log_ {a} y
$$

2. Quotient Rule: 

$$
\log_ {a} \frac {x}{y} = \log_ {a} x - \log_ {a} y
$$

3. Reciprocal Rule: 

$$
\log_ {a} \frac {1}{y} = - \log_ {a} y
$$

4. Power Rule: 

$$
\log_ {a} x ^ {y} = y \log_ {a} x
$$

The integral equivalent of this derivative rule is 

$$
\int a ^ {x} d x = \frac {a ^ {x}}{\ln a} + C
$$

## Logarithms with Base $a$

If a is any positive number other than 1, the function $a^{x}$ is one-to-one and has a nonzero derivative at every point. It therefore has a differentiable inverse. 

> ***DEFINITION*** For any positive number $a \neq 1$ , the logarithm of x with base a, denoted by $\log_{a} x$ , is the inverse function of $a^{x}$ . 

The graph of $y = \log_{a} x$ can be obtained by reflecting the graph of $y = a^{x}$ across the $45^{\circ}$ line y = x (Figure 7.4). When a = e, we have $\log_{e} x = \text{inverse of } e^{x} = \ln x$ . Since $\log_{a} x$ and $a^{x}$ are inverses of one another, composing them in either order gives the identity function. 

Inverse Equations for $a^{x}$ and $\log_{a}x$ 

$$
\begin{array}{c c} a ^ {\log_ {a} x} = x & (x > 0) \\ \log_ {a} (a ^ {x}) = x & (\text { all } x) \end{array}
$$

As stated in Section 1.5, the function $\log_a x$ is just a numerical multiple of $\ln x$ . We see this from the following derivation. 

$$
\begin{array}{l l} y = \log_ {a} x & \text { Defining   equation   for } y \\ a ^ {y} = x & \text { Equivalent   equation } \\ \ln a ^ {y} = \ln x & \text { Natural   log   of   both   sides } \\ y \ln a = \ln x & \text { Algebra   Rule   4   for   natural   log } \\ y = \frac {\ln x}{\ln a} & \text { Solve   for } y. \\ \log_ {a} x = \frac {\ln x}{\ln a} & \text { Substitute   for } y. \end{array}
$$

It then follows easily that the arithmetic rules satisfied by $\log_{a} x$ are the same as the ones for $\ln x$ . These rules, given in Table 7.2, can be proved by dividing the corresponding rules for the natural logarithm function by $\ln a$ . For example, 

$$
\ln x y = \ln x + \ln y
$$

Rule 1 for natural logarithms ... 

$$
{\frac {\ln x y}{\ln a}} = {\frac {\ln x}{\ln a}} + {\frac {\ln y}{\ln a}}
$$

... divided by $\ln a$ ... 

$$
\log_ {a} x y = \log_ {a} x + \log_ {a} y.
$$

... gives Rule 1 for base $a$ logarithms. 

## Derivatives and Integrals Involving $\log_{a}x$

To find derivatives or integrals involving base $a$ logarithms, we can convert them to natural logarithms. In particular, differentiating $\log_a x$ gives 

$$
\frac {d}{d x} \left(\log_ {a} x\right) = \frac {d}{d x} \left(\frac {\ln x}{\ln a}\right) = \frac {1}{\ln a} \frac {d}{d x} (\ln x) = \frac {1}{\ln a} \cdot \frac {1}{x},
$$

SO 

$$
{\frac {d}{d x}} (\log_ {a} x) = {\frac {1}{x \ln a}}.
$$

If u is a positive differentiable function of x, then 

$$
\frac {d}{d x} \left(\log_ {a} u\right) = \frac {1}{\ln a} \cdot \frac {1}{u} \frac {d u}{d x}.
$$

## Transcendental Numbers and Transcendental Functions

**EXAMPLE 2** We illustrate the derivative and integral results. 

(a) $\frac{d}{dx}\log_{10}(3x + 1) = \frac{1}{\ln 10}\cdot \frac{1}{3x + 1}\frac{d}{dx} (3x + 1) = \frac{3}{(\ln 10)(3x + 1)}$ 

Numbers that are solutions of polynomial equations with rational coefficients are called algebraic: -2 is algebraic because it satisfies the equation $x + 2 = 0$ , and $\sqrt{3}$ is algebraic because it satisfies the equation $x^{2} - 3 = 0$ . Numbers such as e and $\pi$ that are not algebraic are called transcendental. 

(b) $\int \frac{\log_2x}{x} dx = \frac{1}{\ln 2}\int \frac{\ln x}{x} dx\quad \log_2x = \frac{\ln x}{\ln 2}$ $= \frac{1}{\ln 2}\int udu\quad u = \ln x,du = \frac{1}{x} dx$ $= \frac{1}{\ln 2}\frac{u^2}{2} +C = \frac{1}{\ln 2}\frac{(\ln x)^2}{2} +C = \frac{(\ln x)^2}{2\ln 2} +C$ 

We call a function $y = f(x)$ algebraic if it satisfies an equation of the form 

## Summary

$$
P _ {n} y ^ {n} + \dots + P _ {1} y + P _ {0} = 0
$$

in which the $P$ 's are polynomials in $x$ with rational coefficients. The function $y = 1 / \sqrt{x + 1}$ is algebraic because it satisfies the equation $(x + 1)y^2 - 1 = 0$ . Here the polynomials are $P_2 = x + 1$ , $P_1 = 0$ , and $P_0 = -1$ . Functions that are not algebraic are called transcendental. 

In this section we used calculus to give precise definitions of the logarithmic and exponential functions. This approach is somewhat different from our earlier treatments of the polynomial, rational, and trigonometric functions. There we first defined the function and then we studied its derivatives and integrals. Here we started with an integral from which the functions of interest were obtained. The motivation behind this approach was to address mathematical difficulties that arise when we attempt to define functions such as $a^{x}$ for any real number x, rational or irrational. Defining $\ln x$ as the integral of the function 1/t from t = 1 to t = x enabled us to define all of the exponential and logarithmic functions and then to derive their key algebraic and analytic properties. 

## EXERCISES 7.1

## Integration

Evaluate the integrals in Exercises 1–46. 

22. $\int e^{\csc (\pi +t)}\csc (\pi +t)\cot (\pi +t)dt$ 

1. $\int_{-3}^{-2}\frac{dx}{x}$ 

2. $\int_{-1}^{0}\frac{3dx}{3x - 2}$ 

23. $\int_{\ln (\pi /6)}^{\ln (\pi /2)}2e^{v}\cos e^{v}dv$ 

24. $\int_0^{\sqrt{\ln\pi}} 2xe^{x^2}\cos (e^{x^2}) dx$ 

3. $\int \frac{2ydy}{y^2 - 25}$ 

4. $\int \frac{8rdr}{4r^2 - 5}$ 

25. $\int \frac{e^r}{1 + e^r} dr$ 

26. $\int \frac{dx}{1 + e^x}$ 

5. $\int \frac{3\sec^2t}{6 + 3\tan t} dt$ 

6. $\int \frac{\sec y \tan y}{2 + \sec y} dy$ 

27. $\int_0^1 2^{-\theta}d\theta$ 

28. $\int_{-2}^{0} 5^{-\theta} d\theta$ 

7. $\int \frac{dx}{2\sqrt{x} + 2x}$ 

8. $\int \frac{\sec x dx}{\sqrt{\ln(\sec x + \tan x)}}$ 

29. $\int_{1}^{\sqrt{2}}x2^{(x^2)}dx$ 

30. $\int_1^4\frac{2^{\sqrt{x}}}{\sqrt{x}} dx$ 

9. $\int_{\ln 2}^{\ln 3}e^{x}dx$ 

10. $\int 8e^{(x + 1)}dx$ 

31. $\int_0^{\pi /2}7^{\cos t}\sin tdt$ 

32. $\int_0^{\pi /4}\left(\frac{1}{3}\right)^{\tan t}\sec^2 tdt$ 

11. $\int_{1}^{4}\frac{(\ln x)^{3}}{2x} dx$ 

12. $\int \frac{\ln(\ln x)}{x\ln x} dx$ 

33. $\int_2^4 x^{2x}(1 + \ln x)dx$ 

34. $\int_{1}^{2}\frac{2^{\ln x}}{x} dx$ 

13. $\int_{\ln 4}^{\ln 9}e^{x / 2}dx$ 

14. $\int \tan x\ln (\cos x)dx$ 

35. $\int_0^3 (\sqrt{2} +1)x^{\sqrt{2}}dx$ 

36. $\int_1^e x^{(\ln 2) - 1}dx$ 

15. $\int \frac{e^{\sqrt{r}}}{\sqrt{r}} dr$ 

16. $\int \frac{e^{-\sqrt{r}}}{\sqrt{r}} dr$ 

$$
\int \frac {\log_ {1 0} x}{x} d x
$$

38. $\int_1^4\frac{\log_2x}{x} dx$ 

17. $\int 2te^{-t^2}dt$ 

18. $\int \frac{\ln x dx}{x\sqrt{\ln^2 x + 1}}$ 

20. $\int \frac{e^{-1 / x^2}}{x^3} dx$ 

19. $\int \frac{e^{1 / x}}{x^2} dx$ 

39. $\int_{1}^{4}\frac{\ln 2\log_2x}{x} dx$ 

41. $\int_0^2\frac{\log_2(x + 2)}{x + 2} dx$ 

21. $\int e^{\sec \pi t}\sec \pi t\tan \pi tdt$ 

43. $\int_0^9\frac{2\log_{10}(x + 1)}{x + 1} dx$ 

40. $\int_{1}^{e}\frac{2\ln 10\log_{10}x}{x} dx$ 

42. $\int_{1 / 10}^{10}\frac{\log_{10}(10x)}{x} dx$ 

44. $\int_{2}^{3}\frac{2\log_{2}(x - 1)}{x - 1} dx$ 

45. $\int \frac{dx}{x\log_{10}x}$ 

46. $\int \frac{dx}{x(\log_8x)^2}$ 

Initial Value Problems 

Solve the initial value problems in Exercises 47–52. 

47. $\frac{dy}{dt} = e^t\sin (e^t -2),\quad y(\ln 2) = 0$ 

48. $\frac{dy}{dt} = e^{-t}\sec^2 (\pi e^{-t}),\quad y(\ln 4) = 2 / \pi$ 

49. $\frac{d^2y}{dx^2} = 2e^{-x},\quad y(0) = 1$ and $y^\prime (0) = 0$ 

50. $\frac{d^2y}{dt^2} = 1 - e^{2t},\quad y(1) = -1$ and $y^\prime (1) = 0$ 

51. $\frac{dy}{dx} = 1 + \frac{1}{x}, y(1) = 3$ 

52. $\frac{d^2y}{dx^2} = \sec^2 x, y(0) = 0$ and $y'(0) = 1$ 

## Theory and Applications

53. The region between the curve $y = 1/x^{2}$ and the x-axis from x = 1/2 to x = 2 is revolved about the y-axis to generate a solid. Find the volume of the solid. 

54. In Section 6.2, Exercise 6, we revolved about the y-axis the region between the curve $y = 9x/\sqrt{x^{3} + 9}$ and the x-axis from x = 0 to x = 3 to generate a solid of volume $36\pi$ . What volume do you get if you revolve the region about the x-axis instead? (See Section 6.2, Exercise 6, for a graph.) 

Find the lengths of the curves in Exercises 55 and 56. 

55. $y = (x^2 / 8) - \ln x, \quad 4 \leq x \leq 8$ 

56. $x = (y/4)^{2} - 2 \ln(y/4)$ , $4 \leq y \leq 12$ 

57. The linearization of $\ln(1 + x)$ at $x = 0$ Instead of approximating $\ln x$ near $x = 1$ , we approximate $\ln(1 + x)$ near $x = 0$ . We get a simpler formula this way. 

a. Derive the linearization $\ln(1 + x) \approx x$ at x = 0. 

b. Estimate to five decimal places the error involved in replacing $\ln (1 + x)$ by $x$ on the interval [0, 0.1]. 

c. Graph $\ln(1 + x)$ and x together for $0 \leq x \leq 0.5$ . Use different colors, if available. At what points does the approximation of $\ln(1 + x)$ seem best? Least good? By reading coordinates from the graphs, find as good an upper bound for the error as your grapher will allow. 

## 58. The linearization of $e^{x}$ at x = 0

a. Derive the linear approximation $e^{x} \approx 1 + x$ at x = 0. 

T b. Estimate to five decimal places the magnitude of the error involved in replacing $e^x$ by $1 + x$ on the interval [0, 0.2]. 

T c. Graph $e^x$ and $1 + x$ together for $-2 \leq x \leq 2$ . Use different colors, if available. On what intervals does the approximation appear to overestimate $e^x$ ? Underestimate $e^x$ ? 

59. Show that for any number $a > 1$ 

$$
\int_ {1} ^ {a} \ln x d x + \int_ {0} ^ {\ln a} e ^ {y} d y = a \ln a,
$$

as suggested by the accompanying figure. 

![[52a4d4d049d2b34b43be66f5ca472439db99ae7a54c7b1ee0d81b7f2d2ad83e4.jpg|image]]


60. The geometric, logarithmic, and arithmetic mean inequality 

a. Show that the graph of $e^{x}$ is concave up over every interval of x-values. 

b. Show, by reference to the accompanying figure, that if 

$0 < a < b$ , then 

$$
e ^ {(\ln a + \ln b) / 2} \cdot (\ln b - \ln a) <   \int_ {\ln a} ^ {\ln b} e ^ {x} d x <   \frac {e ^ {\ln a} + e ^ {\ln b}}{2} \cdot (\ln b - \ln a).
$$

![[0cbce51d2b6cd2df9e33b24dbf495a07ddde3232dee95ebe1417359eafa6b652.jpg|image]]



NOT TO SCALE


c. Use the inequality in part (b) to conclude that 

$$
\sqrt {a b} <   \frac {b - a}{\ln b - \ln a} <   \frac {a + b}{2}.
$$

This inequality says that the geometric mean of two positive numbers is less than their logarithmic mean, which in turn is less than their arithmetic mean. 

61. Use Figure 7.1 and appropriate areas to show that 

$$
\frac {1}{2} + \frac {1}{3} + \frac {1}{4} + \dots + \frac {1}{n} <   \ln n <   1 + \frac {1}{2} + \frac {1}{3} + \dots + \frac {1}{n - 1}.
$$

62. Partition the interval $[1, 2]$ into n equal parts. Then use Figure 7.1 and appropriate partition points and areas to show that 

$$
\begin{array}{c} \frac {1}{n + 1} + \frac {1}{n + 2} + \frac {1}{n + 3} + \dots + \frac {1}{2 n} <   \ln 2 <   \frac {1}{n} + \frac {1}{n + 1} \\ + \frac {1}{n + 2} + \dots + \frac {1}{2 n - 1}. \end{array}
$$

63. Use the same-derivative argument, as was done to prove the Product and Power Rules for logarithms, to prove the Quotient Rule property. 

64. Use the same-derivative argument to prove the identities 

$$
\mathbf {a}. \tan^ {- 1} x + \cot^ {- 1} x = \frac {\pi}{2} \quad \mathbf {b}. \sec^ {- 1} x + \csc^ {- 1} x = \frac {\pi}{2}
$$

65. Starting with the equation $e^x e^y = e^{x + y}$ , derived in the text, show that $e^{-x} = 1 / e^x$ for any real number $x$ . Then show that $e^x / e^y = e^{x - y}$ for any numbers $x$ and $y$ . 

66. Show that $(e^{x})^{y} = e^{xy} = (e^{y})^{x}$ for any numbers x and y. 

67. Show that properties (2), (3), and (4) of Theorem 2 follow from Theorem 1 and the inverse relationship between the logarithmic and exponential functions. 

68. Alternative proof that $\lim_{x\to \infty}\left(1 + \frac{1}{x}\right)^x = e$ : 

a. Let $x > 0$ be given, and use Figure 7.1 to show that 

$$
\frac {1}{x + 1} <   \int_ {x} ^ {x + 1} \frac {1}{t} d t <   \frac {1}{x}.
$$

b. Conclude from part (a) that 

$$
\frac {1}{x + 1} <   \ln \left(1 + \frac {1}{x}\right) <   \frac {1}{x}.
$$

c. Conclude from part (b) that 

$$
e ^ {\frac {x}{x + 1}} <   \left(1 + \frac {1}{x}\right) ^ {x} <   e.
$$

d. Conclude from part (c) that 

$$
\lim _ {x \rightarrow \infty} \left(1 + \frac {1}{x}\right) ^ {x} = e.
$$

## Grapher Explorations

When solving Exercises 69–76, you may need to use appropriate technology (such as a graphing calculator or a computer). 

69. Graph $\ln x$ , $\ln 2x$ , $\ln 4x$ , $\ln 8x$ , and $\ln 16x$ (as many as you can) together for $0 < x \leq 10$ . What is going on? Explain. 

70. Graph $y = \ln |\sin x|$ in the window $0 \leq x \leq 22, -2 \leq y \leq 0$ . Explain what you see. How could you change the formula to turn the arches upside down? 

71. a. Graph $y = \sin x$ and the curves $y = \ln(a + \sin x)$ for a = 2, 4, 8, 20, and 50 together for $0 \leq x \leq 23$ . 

b. Why do the curves flatten as $a$ increases? (Hint: Find an $a$ -dependent upper bound for $|y'|$ .) 

72. Does the graph of $y = \sqrt{x} - \ln x, x > 0$ , have an inflection point? Try to answer the question (a) by graphing, (b) by using calculus. 

73. The equation $x^{2} = 2^{x}$ has three solutions: $x = 2, x = 4$ , and one other. Estimate the third solution as accurately as you can by graphing. 

74. Could $x^{\ln 2}$ possibly be the same as $2^{\ln x}$ for some x > 0? Graph the two functions and explain what you see. 

75. Which is bigger, $\pi^e$ or $e^{\pi}$ ? Calculators have taken some of the mystery out of this once-challenging question. (Go ahead and check; you will see that it is a surprisingly close call.) You can answer the question without a calculator, though. 

a. Find an equation for the line through the origin tangent to the graph of $y = \ln x$ . 

![[5dc8056b4a02d1d340995329b39deb5572da59d09e880c71f1ecedccc892153f.jpg|image]]



[-3, 6] by [-3, 3]


b. Give an argument based on the graphs of $y = \ln x$ and the tangent line to explain why $\ln x < x / e$ for all positive $x \neq e$ . 

c. Show that $\ln(x^{e}) < x$ for all positive $x \neq e$ . 

d. Conclude that $x^{e} < e^{x}$ for all positive $x \neq e$ . 

e. So which is bigger, $\pi^e$ or $e^{\pi}$ ? 

76. A decimal representation of $e$ Find $e$ to as many decimal places as you can by solving the equation $\ln x = 1$ using Newton's method in Section 4.7. 

## Calculations with Other Bases

77. Most scientific calculators have keys for $\log_{10}x$ and $\ln x$ . To find logarithms to other bases, we use the equation $\log_{a}x = (\ln x)/(\ln a)$ . 

Find the following logarithms to five decimal places. 

a. $\log_38$ 

b. $\log_{7}0.5$ 

c. $\log_{20}17$ 

d. $\log_{0.5}7$ 

e. $\ln x$ , given that $\log_{10}x = 2.3$ 

f. $\ln x$ , given that $\log_2 x = 1.4$ 

g. $\ln x$ , given that $\log_{2}x = -1.5$ 

h. $\ln x$ , given that $\log_{10}x = -0.7$ 

## 78. Conversion factors

a. Show that the equation for converting base 10 logarithms to base 2 logarithms is 

$$
\log_ {2} x = \frac {\ln 1 0}{\ln 2} \log_ {1 0} x.
$$

b. Show that the equation for converting base $a$ logarithms to base $b$ logarithms is 

$$
\log_ {b} x = \frac {\ln a}{\ln b} \log_ {a} x.
$$

## 7.2 Exponential Change and Separable Differential Equations

Exponential functions increase or decrease very rapidly with changes in the independent variable. They describe growth or decay in many natural and industrial situations. The variety of models based on these functions partly accounts for their importance. 

## Exponential Change

In modeling many real-world situations, a quantity y increases or decreases at a rate proportional to its size at a given time t. Examples of such quantities include the size of a population, the amount of a decaying radioactive material, and the temperature difference between a hot object and its surrounding medium. Such quantities are said to undergo exponential change. 

![[84b7a241a3d8fff6d9c1d855710aa8b1758b89fb60f4dd010d3aa4c07a25891e.jpg|image]]


![[a6d1b7be14fba09c560fe7f5373947e787f1d9a7caa79b2bea106eab21961d40.jpg|image]]



FIGURE 7.5 Graphs of (a) exponential growth and (b) exponential decay. As $|k|$ increases, the growth $(k > 0)$ or decay $(k < 0)$ intensifies.


If the amount present at time t = 0 is called $y_{0}$ , then we can find y as a function of t by solving the following initial value problem: 

$$
\text { Differential   equation: } \quad \frac {d y}{d t} = k y\tag{1a}
$$

$$
\text { Initial   condition: } \quad y = y _ {0} \quad \text { when } \quad t = 0.\tag{1b}
$$

If y is positive and increasing, then k is positive, and we use Equation (1a) to say that the rate of growth is proportional to what has already been accumulated. If y is positive and decreasing, then k is negative, and we use Equation (1a) to say that the rate of decay is proportional to the amount still left. 

The constant function $y = 0$ is a solution of Equation (1a) if $y_0 = 0$ . To find the solutions when $y_0$ is not zero, we divide Equation (1a) by $y$ : 

$$
\begin{array}{l l} \frac {1}{y} \cdot \frac {d y}{d t} = k & y \neq 0 \\ \int \frac {1}{y} \frac {d y}{d t} d t = \int k d t & \text {   Integrate   with   respect   to   } t. \\ \ln | y | = k t + C & \int (1 / u) d u = \ln | u | + C \\ | y | = e ^ {k t + C} & \text {   Exponentiate.   } \\ | y | = e ^ {C} \cdot e ^ {k t} & e ^ {a + b} = e ^ {a} \cdot e ^ {b} \\ y = \pm e ^ {C} e ^ {k t} & \text {   If   } | y | = r, \text {   then   } y = \pm r. \\ y = A e ^ {k t}. & A \text {   is   a   shorter   name   for   } \pm e ^ {C}. \end{array}
$$

By allowing $A$ to take on the value 0 in addition to all possible values $\pm e^{C}$ , we can include the solution $y = 0$ (which occurs when $y_0 = 0$ ) in the formula. 

We find the value of A for the initial value problem by solving for A when $y = y_{0}$ and t = 0: 

$$
y _ {0} = A e ^ {k \cdot 0} = A.
$$

The solution of the initial value problem 

$$
\frac {d y}{d t} = k y, \quad y (0) = y _ {0}
$$

$$
y = y _ {0} e ^ {k t}.\tag{2}
$$

Quantities changing in this way are said to undergo exponential growth if k > 0 and exponential decay if k < 0. The number k is called the rate constant of the change. (See Figure 7.5.) 

The derivation of Equation (2) shows also that the only functions that are their own derivatives $(k = 1)$ are constant multiples of the exponential function. 

Before presenting several examples of exponential change, let us consider the process we used to derive it. 

## Separable Differential Equations

Exponential change is modeled by a differential equation of the form dy/dx = ky, where k is a nonzero constant. More generally, suppose we have a differential equation of the form 

$$
\frac {d y}{d x} = f (x, y),\tag{3}
$$

where f is a function of both the independent and dependent variables. A solution of the equation is a differentiable function $y = y(x)$ defined on an interval of x-values (perhaps infinite) such that 

$$
{\frac {d}{d x}} y (x) = f (x, y (x))
$$

on that interval. That is, when $y(x)$ and its derivative $y'(x)$ are substituted into the differential equation, the resulting equation is true for all x in the solution interval. The general solution is a solution $y(x)$ that contains all possible solutions, and it always contains an arbitrary constant. 

Equation (3) is separable if $f$ can be expressed as a product of a function of $x$ and a function of $y$ . The differential equation then has the form 

$$
\frac {d y}{d x} = g (x)   H (y). \qquad \begin{array}{l} g \text {   is   a   function   of   } x; \\ H \text {   is   a   function   of   } y. \end{array}
$$

Then collect all of the y factors so that they are together with dy, and likewise collect all of the x factors together with dx: 

$$
\frac {1}{H (y)} d y = g (x) d x.
$$

Now we integrate both sides of this equation: 

$$
\int \frac {1}{H (y)} d y = \int g (x) d x.\tag{4}
$$

After completing the integrations, we obtain the solution y, defined implicitly as a function of x. 

The justification that we can integrate both sides in Equation (4) in this way is based on the Substitution Rule (Section 5.5): 

$$
\begin{array}{l} \int \frac {1}{H (y)} d y = \int \frac {1}{H (y (x))} \frac {d y}{d x} d x \\ \qquad = \int \frac {1}{H (y (x))} H (y (x)) g (x) d x \qquad \frac {d y}{d x} = H (y (x)) g (x) \\ \qquad = \int g (x) d x. \end{array}
$$

**EXAMPLE 1** Solve the differential equation 

$$
\frac {d y}{d x} = (1 + y) e ^ {x}, \quad y > - 1.
$$

**Solution** Since $1 + y$ is never zero for y > -1, we can solve the equation by separating the variables. 

$$
{\frac {d y}{d x}} = (1 + y) e ^ {x}
$$

$$
d y = (1 + y) e ^ {x} d x
$$

Treat dy/dx as a quotient of differentials and multiply both sides by dx. 

$$
\frac {d y}{1 + y} = e ^ {x} d x
$$

$$
\text { Divide   by } (1 + y).
$$

$$
\int \frac {d y}{1 + y} = \int e ^ {x} d x
$$

Integrate both sides. 

$$
\ln (1 + y) = e ^ {x} + C
$$

C represents the combined constants 

of integration. 

The last equation gives y as an implicit function of x. 

**EXAMPLE 2** Solve the equation $y(x + 1)\frac{dy}{dx} = x(y^{2} + 1)$ . 

**Solution** We change to differential form, separate the variables, and integrate: 

$$
y (x + 1) d y = x \left(y ^ {2} + 1\right) d x
$$

$$
\frac {y d y}{y ^ {2} + 1} = \frac {x d x}{x + 1}
$$

$$
\int \frac {y d y}{1 + y ^ {2}} = \int \left(1 - \frac {1}{x + 1}\right) d x \quad \text { Divide } x \text { by } x + 1.
$$

$$
\frac {1}{2} \ln (1 + y ^ {2}) = x - \ln | x + 1 | + C.
$$

The last equation gives the solution y as an implicit function of x. 

![[336ddce48d346e15ba550229a513036cb20be5a66cb328297effdb201047a5a9.jpg|image]]



FIGURE 7.6 Graph of the growth of a yeast population over a 10-hour period, based on the data in Table 7.3.



TABLE 7.3 Population of yeast


The initial value problem 

<table><tr><td>Time (hr)</td><td>Yeast biomass (mg)</td></tr><tr><td>0</td><td>9.6</td></tr><tr><td>1</td><td>18.3</td></tr><tr><td>2</td><td>29.0</td></tr><tr><td>3</td><td>47.2</td></tr><tr><td>4</td><td>71.1</td></tr><tr><td>5</td><td>119.1</td></tr><tr><td>6</td><td>174.6</td></tr><tr><td>7</td><td>257.3</td></tr><tr><td>8</td><td>350.7</td></tr><tr><td>9</td><td>441.0</td></tr><tr><td>10</td><td>513.3</td></tr></table>

$$
\frac {d y}{d t} = k y, \quad y (0) = y _ {0}
$$

involves a separable differential equation, and the solution $y = y_{0}e^{kt}$ expresses exponential change. We now present several examples of such change. 

## Unlimited Population Growth

Strictly speaking, the number of individuals in a population (of people, plants, animals, or bacteria, for example) is a discontinuous function of time because it takes on discrete values. However, when the number of individuals becomes large enough, the population can be approximated by a continuous function. Differentiability of the approximating function is another reasonable hypothesis in many settings, allowing for the use of calculus to model and predict population sizes. 

If we assume that the proportion of reproducing individuals remains constant and assume a constant fertility, then at any instant t the birth rate is proportional to the number $y(t)$ of individuals present. We likewise assume that the death rate of the population is stable and proportional to $y(t)$ . If, further, we neglect departures and arrivals, the growth rate dy/dt is the birth rate minus the death rate, which is the difference of the two proportionalities under our assumptions. In other words, dy/dt = ky so that $y = y_{0}e^{kt}$ , where $y_{0}$ is the size of the population at time t = 0. As with all kinds of growth, there may be limitations imposed by the surrounding environment, but we will not go into these here. (We treat one model imposing such limitations in Section 16.4.) When k is positive, the proportionality dy/dt = ky models unlimited population growth. (See Figure 7.6.) 

**EXAMPLE 3** The biomass of a yeast culture in an experiment is initially 29 grams. After 30 minutes the mass is 37 grams. Assuming that the equation for unlimited population growth gives a good model for the growth of the yeast when the mass is below 100 grams, how long will it take for the mass to double from its initial value? 

**Solution** Let $y(t)$ be the yeast biomass after t minutes. We use the exponential growth model dy/dt = ky for unlimited population growth, with solution $y = y_{0}e^{kt}$ . 

We have $y_0 = y(0) = 29$ . We are also told that 

$$
y (3 0) = 2 9 e ^ {k (3 0)} = 3 7.
$$

Solving this equation for k, we find 

$$
e ^ {k (3 0)} = \frac {3 7}{2 9}
$$

$$
3 0 k = \ln \left(\frac {3 7}{2 9}\right)
$$

$$
k = \frac {1}{3 0} \ln \left(\frac {3 7}{2 9}\right) \approx 0. 0 0 8 1 1 8.
$$

Then the mass of the yeast in grams after t minutes is given by the equation 

$$
y = 2 9 e ^ {(0. 0 0 8 1 1 8) t}.
$$

To solve the problem, we find the time t for which $y(t) = 58$ , which is twice the initial amount. 

$$
\begin{array}{r l} 2 9 e ^ {(0. 0 0 8 1 1 8) t} & = 5 8 \\ (0. 0 0 8 1 1 8) t & = \ln \left(\frac {5 8}{2 9}\right) \\ t & = \frac {\ln 2}{0 . 0 0 8 1 1 8} \approx 8 5. 3 8 \end{array}
$$

It takes about 85 minutes for the yeast population to double. 

In the next example we model the number of people within a given population who are infected by a disease that is being eradicated from the population. Here the constant of proportionality k is negative, and the model describes an exponentially decaying number of infected individuals. 

**EXAMPLE 4** One model for the way diseases die out when properly treated assumes that the rate dy/dt at which the number of infected people changes is proportional to the number y. The number of people cured is proportional to the number y that are infected with the disease. Suppose that in the course of any given year, the number of cases of a disease is reduced by 20%. If there are 10,000 cases today, how many years will it take to reduce the number to 1000? 

**Solution** We use the equation $y = y_{0}e^{kt}$ . There are three things to find: the value of $y_{0}$ , the value of k, and the time t when y = 1000. 

The value of $y_{0}$ . We are free to count time beginning anywhere we want. If we count from today, then y = 10,000 when t = 0, so $y_{0} = 10,000$ . Our equation is now 

$$
y = 1 0, 0 0 0 e ^ {k t}.\tag{5}
$$

The value of k. When t = 1 year, the number of cases will be 80% of its present value, or 8000. Hence, 

$$
\begin{array}{l l} 8 0 0 0 = 1 0, 0 0 0 e ^ {k (1)} & \text { Eq.   (5)   with   } t = 1 \text {   and   } y = 8 0 0 0 \\ e ^ {k} = 0. 8 & \\ \ln (e ^ {k}) = \ln 0. 8 & \text { Take   logs   of   both   sides } \\ k = \ln 0. 8 <   0. & \ln 0. 8 \approx - 0. 2 2 3 \end{array}
$$

At any given time t, 

$$
y = 1 0, 0 0 0 e ^ {(\ln 0. 8) t}.\tag{6}
$$

![[4299277ce1d0a068da999f153aeda5d1ef0aa74fa62e4f8b630090259a2c586e.jpg|image]]



FIGURE 7.7 A graph of the number of people infected by a disease exhibits exponential decay (Example 4).


For radon-222 gas, t is measured in days and k = 0.18. For radium-226, which used to be painted on watch dials to make them glow at night (a dangerous practice), t is measured in years and $k = 4.3 \times 10^{-4}$ . 

The value of $t$ that makes $y = 1000$ . We set $y$ equal to 1000 in Equation (6) and solve for $t$ : 

$$
\begin{array}{r l} 1 0 0 0 & = 1 0, 0 0 0 e ^ {(\ln 0. 8) t} \\ e ^ {(\ln 0. 8) t} & = 0. 1 \\ (\ln 0. 8) t & = \ln 0. 1 \\ t & = \frac {\ln 0 . 1}{\ln 0 . 8} \approx 1 0. 3 2 \text {   years. } \end{array} \quad \text { Take   logs   of   both   sides }
$$

It will take a little more than 10 years to reduce the number of cases to 1000. (See Figure 7.7.) 

## Radioactivity

Some atoms are unstable and can spontaneously emit mass or radiation. This process is called radioactive decay, and an element whose atoms go spontaneously through this process is called radioactive. Sometimes when an atom emits some of its mass through this process of radioactivity, the remainder of the atom re-forms to make an atom of some new element. For example, radioactive carbon-14 decays into nitrogen; radium, through a number of intermediate radioactive steps, decays into lead. 

Experiments have shown that at any given time, the rate at which a radioactive element decays (as measured by the number of nuclei that change per unit time) is approximately proportional to the number of radioactive nuclei present. Thus, the decay of a radioactive element is described by the equation $dy/dt = -ky$ , k > 0. It is conventional to use -k, with k > 0, to emphasize that y is decreasing. If $y_{0}$ is the number of radioactive nuclei present at time zero, the number still present at any later time t will be 

$$
y = y _ {0} e ^ {- k t}, \quad k > 0.
$$

In Section 1.5, we defined the half-life of a radioactive element to be the time required for half of the radioactive nuclei present in a sample to decay. It is an interesting fact that the half-life is a constant that does not depend on the number of radioactive nuclei initially present in the sample, but only on the radioactive substance. We found that the half-life is given by the following equation. 

$$
\text { Half - life } = \frac {\ln 2}{k}\tag{7}
$$

For example, the half-life for radon-222 is 

$$
\text { half - life } = \frac {\ln 2}{0 . 1 8} \approx 3. 9 \text {   days. }
$$

Carbon-14 dating uses the half-life of 5730 years. 

**EXAMPLE 5** The decay of radioactive elements can sometimes be used to date events from Earth's past. In a living organism, the ratio of radioactive carbon, carbon-14, to ordinary carbon stays fairly constant during the lifetime of the organism, being approximately equal to the ratio in the organism's atmosphere at the time. After the organism's death, however, no new carbon is ingested, and the proportion of carbon-14 in the organism's remains decreases as the carbon-14 decays. 

Scientists who do carbon-14 dating often use a figure of 5730 years for its half-life. Find the age of a sample in which 10% of the radioactive nuclei originally present have decayed. 

**Solution** We use the decay equation $y = y_{0}e^{-kt}$ . There are two things to find: the value of k and the value of t when y is $0.9y_{0}$ (90% of the radioactive nuclei are still present). That is, find t when $y_{0}e^{-kt} = 0.9y_{0}$ , or $e^{-kt} = 0.9$ . 

The value of k. We use the half-life Equation (7): 

$$
k = \frac {\ln 2}{\text { half - life }} = \frac {\ln 2}{5 7 3 0} (\text { about } 1. 2 \times 1 0 ^ {- 4}).
$$

The value of $t$ that makes $e^{-kt} = 0.9$ . 

$$
\begin{array}{r l} e ^ {- k t} & = 0. 9 \\ e ^ {- (\ln 2 / 5 7 3 0) t} & = 0. 9 \\ - \frac {\ln 2}{5 7 3 0} t & = \ln 0. 9 \\ t & = - \frac {5 7 3 0 \ln 0 . 9}{\ln 2} \approx 8 7 1 \text {   years } \end{array} \quad \text { Take   logs   of   both   sides }
$$

The sample is about 871 years old. 

## Heat Transfer: Newton's Law of Cooling

Hot soup left in a tin cup cools to the temperature of the surrounding air. A hot silver bar immersed in a large tub of water cools to the temperature of the surrounding water. In situations like these, the rate at which an object's temperature is changing at any given time is roughly proportional to the difference between its temperature and the temperature of the surrounding medium. This observation is called Newton's Law of Cooling, although it applies to warming as well. 

If H is the temperature of the object at time t, and $H_{S}$ is the constant surrounding temperature, then the differential equation is 

$$
\frac {d H}{d t} = - k (H - H _ {S}).\tag{8}
$$

If we substitute $y$ for $(H - H_S)$ , then 

$$
\begin{array}{r l} \frac {d y}{d t} & = \frac {d}{d t} (H - H _ {S}) = \frac {d H}{d t} - \frac {d}{d t} (H _ {S}) \\ & = \frac {d H}{d t} - 0 \\ & = \frac {d H}{d t} \\ & = - k (H - H _ {S}) \\ & = - k y. \end{array} \quad \text {   Eq.   (8)   } \quad H - H _ {S} = y
$$

We know that the solution of the equation $dy / dt = -ky$ is $y = y_0 e^{-kt}$ , where $y(0) = y_0$ . Substituting $(H - H_S)$ for $y$ , this says that 

$$
H - H _ {S} = (H _ {0} - H _ {S}) e ^ {- k t},\tag{9}
$$

where $H_0$ is the temperature at $t = 0$ . This equation is the solution to Newton's Law of Cooling. 

**EXAMPLE 6** A hard-boiled egg at $98^{\circ}\mathrm{C}$ is put in a sink of $18^{\circ}\mathrm{C}$ water. After 5 min, the egg's temperature is $38^{\circ}\mathrm{C}$ . Assuming that the water has not warmed appreciably, how much longer will it take the egg to reach $20^{\circ}\mathrm{C}$ ? 

**Solution** We find how long it would take the egg to cool from $98^{\circ}\mathrm{C}$ to $20^{\circ}\mathrm{C}$ and subtract the 5 min that have already elapsed. Using Equation (9) with $H_{S} = 18$ and $H_0 = 98$ , the egg's temperature $t$ min after it is put in the sink is 

$$
H = 1 8 + (9 8 - 1 8) e ^ {- k t} = 1 8 + 8 0 e ^ {- k t}.
$$

To find k, we use the information that H = 38 when t = 5: 

$$
3 8 = 1 8 + 8 0 e ^ {- 5 k}
$$

$$
e ^ {- 5 k} = \frac {1}{4}
$$

$$
- 5 k = \ln {\frac {1}{4}} = - \ln 4
$$

$$
k = \frac {1}{5} \ln 4 = 0. 2 \ln 4 \quad (\text { about } 0. 2 8).
$$

The egg's temperature at time $t$ is $H = 18 + 80e^{-(0.2\ln 4)t}$ . Now find the time $t$ when $H = 20$ : 

$$
2 0 = 1 8 + 8 0 e ^ {- (0. 2 \ln 4) t}
$$

$$
8 0 e ^ {- (0. 2 \ln 4) t} = 2
$$

$$
e ^ {- (0. 2 \ln 4) t} = \frac {1}{4 0}
$$

$$
- (0. 2 \ln 4) t = \ln {\frac {1}{4 0}} = - \ln 4 0
$$

$$
t = \frac {\ln 4 0}{0 . 2 \ln 4} \approx 1 3 \mathrm{min}.
$$

The egg's temperature will reach $20^{\circ}\mathrm{C}$ about 13 min after it is put in the water to cool. Since it took 5 min to reach $38^{\circ}\mathrm{C}$ , it will take about 8 min more to reach $20^{\circ}\mathrm{C}$ . 

## EXERCISES

## Verifying Solutions

In Exercises 1–4, show that each function $y = f(x)$ is a solution of the accompanying differential equation. 

1. $2y' + 3y = e^{-x}$ 

a. $y = e^{-x}$ 

$$
\mathbf {b}. y = e ^ {- x} + e ^ {- (3 / 2) x}
$$

c. $y = e^{-x} + Ce^{-(3/2)x}$ 

2. $y' = y^{2}$ 

a. $y = -\frac{1}{x}$ b. $y = -\frac{1}{x + 3}$ c. $y = -\frac{1}{x + C}$ 

3. $y = \frac{1}{x}\int_{1}^{x}\frac{e^t}{t} dt, x^2 y' + xy = e^x$ 

$$
y = \frac {1}{\sqrt {1 + x ^ {4}}} \int_ {1} ^ {x} \sqrt {1 + t ^ {4}} d t, y ^ {\prime} + \frac {2 x ^ {3}}{1 + x ^ {4}} y = 1
$$

## Initial Value Problems

In Exercises 5–8, show that each function is a solution of the given initial value problem. 

<table><tr><td>Differential equation</td><td>Initial equation</td><td>**Solution** candidate</td></tr><tr><td>5. <eq>y&#x27; + y = \frac{2}{1 + 4e^{2x}}</eq></td><td><eq>y(-\ln 2) = \frac{\pi}{2}</eq></td><td><eq>y = e^{-x} \tan^{-1}(2e^{x})</eq></td></tr><tr><td>6. <eq>y&#x27; = e^{-x^2} - 2xy</eq></td><td><eq>y(2) = 0</eq></td><td><eq>y = (x - 2)e^{-x^2}</eq></td></tr><tr><td>7. <eq>xy&#x27; + y = -\sin x,</eq><eq>x &gt; 0</eq></td><td><eq>y\left(\frac{\pi}{2}\right) = 0</eq></td><td><eq>y = \frac{\cos x}{x}</eq></td></tr><tr><td>8. <eq>x^2y&#x27; = xy - y^2,</eq><eq>x &gt; 1</eq></td><td><eq>y(e) = e</eq></td><td><eq>y = \frac{x}{\ln x}</eq></td></tr></table>

Solve the differential equation in Exercises 9–22. 

Separable Differential Equations 

9. $2\sqrt{xy}\frac{dy}{dx} = 1, x,y > 0$ 10. $\frac{dy}{dx} = x^2\sqrt{y}, y > 0$ 

11. $\frac{dy}{dx} = e^{x - y}$ 

12. $\frac{dy}{dx} = 3x^2 e^{-y}$ 

13. $\frac{dy}{dx} = \sqrt{y}\cos^2\sqrt{y}$ 

14. $\sqrt{2xy}\frac{dy}{dx} = 1$ 

15. $\sqrt{x}\frac{dy}{dx} = e^{y + \sqrt{x}}, x > 0$ 16. (sec $x$ ) $\frac{dy}{dx} = e^{y + \sin x}$ 

17. $\frac{dy}{dx} = 2x\sqrt{1 - y^2}, -1 < y < 1$ 

18. $\frac{dy}{dx} = \frac{e^{2x - y}}{e^{x + y}}$ 

19. $y^{2}\frac{dy}{dx} = 3x^{2}y^{3} - 6x^{2}$ 20. $\frac{dy}{dx} = xy + 3x - 2y - 6$ 

21. $\frac{1}{x}\frac{dy}{dx} = ye^{x^2} + 2\sqrt{y} e^{x^2}$ 22. $\frac{dy}{dx} = e^{x - y} + e^x +e^{-y} + 1$ 

## Applications and Examples

The answers to most of the following exercises are in terms of logarithms and exponentials. A calculator can be helpful, enabling you to express the answers in decimal form. 

23. Human evolution continues The analysis of tooth shrinkage by C. Loring Brace and colleagues at the University of Michigan's 

Museum of Anthropology indicates that human tooth size is continuing to decrease and that the evolutionary process has not yet come to a halt. In northern Europeans, for example, tooth size reduction now has a rate of 1% per 1000 years. 

a. If t represents time in years and y represents tooth size, use the condition that $y = 0.99y_{0}$ when t = 1000 to find the value of k in the equation $y = y_{0}e^{kt}$ . Then use this value of k to answer the following questions. 

b. In about how many years will human teeth be 90% of their present size? 

c. What will be our descendants' tooth size 20,000 years from now (as a percentage of our present tooth size)? 

24. Atmospheric pressure The earth's atmospheric pressure $p$ is often modeled by assuming that the rate $dp / dh$ at which $p$ changes with the altitude $h$ above sea level is proportional to $p$ . Suppose that the pressure at sea level is 1013 hectopascals and that the pressure at an altitude of $20\mathrm{km}$ is 90 hectopascals. 

a. Solve the initial value problem 

$$
\begin{array}{l l} \text { Differential   equation: } & d p / d h = k p \quad (k \text { a   constant }) \\ \text { Initial   condition: } & p = p _ {0} \quad \text { when } \quad h = 0 \end{array}
$$

to express p in terms of h. Determine the values of $p_{0}$ and k from the given altitude-pressure data. 

b. What is the atmospheric pressure at h = 50 km? 

c. At what altitude does the pressure equal 900 hectopascals? 

25. First-order chemical reactions In some chemical reactions, the rate at which the amount of a substance changes with time is proportional to the amount present. For the change of $\delta$ -gluconolactone into gluconic acid, for example, 

$$
{\frac {d y}{d t}} = - 0. 6 y
$$

when t is measured in hours. If there are 100 grams of $\delta$ -gluconolactone present when t = 0, how many grams will be left after the first hour? 

26. The inversion of sugar The processing of raw sugar has a step called “inversion” that changes the sugar’s molecular structure. Once the process has begun, the rate of change of the amount of raw sugar is proportional to the amount of raw sugar remaining. If 1000 kg of raw sugar reduces to 800 kg of raw sugar during the first 10 hours, how much raw sugar will remain after another 14 hours? 

27. Working underwater The intensity $L(x)$ of light x meters beneath the surface of the ocean satisfies the differential equation 

$$
\frac {d L}{d x} = - k L.
$$

As a diver, you know from experience that diving to 6 m in the Caribbean Sea cuts the intensity in half. You cannot work without artificial light when the intensity falls below one-tenth of the surface value. About how deep can you expect to work without artificial light? 

28. Voltage in a discharging capacitor Suppose that electricity is draining from a capacitor at a rate that is proportional to the voltage V across its terminals and that, if t is measured in seconds, 

$$
\frac {d V}{d t} = - \frac {1}{4 0} V.
$$

Solve this equation for V, using $V_{0}$ to denote the value of V when t = 0. How long will it take the voltage to drop to 10% of its original value? 

29. Cholera bacteria Suppose that the bacteria in a colony can grow unchecked, by the law of exponential change. The colony starts with 1 bacterium and doubles every half-hour. How many bacteria will the colony contain at the end of 24 hours? (Under favorable laboratory conditions, the number of cholera bacteria can double every 30 min. In an infected person, many bacteria are destroyed, but this example helps explain why a person who feels well in the morning may be dangerously ill by evening.) 

30. Growth of bacteria A colony of bacteria is grown under ideal conditions in a laboratory so that the population increases exponentially with time. At the end of 3 hours there are 10,000 bacteria. At the end of 5 hours there are 40,000. How many bacteria were present initially? 

31. The incidence of a disease (Continuation of Example 4.) Suppose that in any given year the number of cases can be reduced by 25% instead of 20%. 

a. How long will it take to reduce the number of cases to 1000? 

b. How long will it take to eradicate the disease—that is, reduce the number of cases to less than 1? 

32. Drug concentration An antibiotic is administered intravenously into the bloodstream at a constant rate $r$ . As the drug flows through the patient's system and acts on the infection that is present, it is removed from the bloodstream at a rate proportional to the amount in the bloodstream at that time. Since the amount of blood in the patient is constant, this means that the concentration $y = y(t)$ of the antibiotic in the bloodstream can be modeled by the differential equation 

$$
\frac {d y}{d t} = r - k y, \quad k > 0 \text {   and   constant.   }
$$

a. If $y(0) = y_{0}$ , find the concentration $y(t)$ at any time t. 

b. Assume that $y_{0} < (r/k)$ and find $\lim_{y \to \infty} y(t)$ . Sketch the solution curve for the concentration. 

33. Endangered species Biologists consider a species of animal or plant to be endangered if it is expected to become extinct within 20 years. If a certain species of wildlife is counted to have 1147 members at the present time, and the population has been steadily declining exponentially at an annual rate averaging 39% over the past 7 years, do you think the species is endangered? Explain your answer. 

34. The U.S. population The U.S. Census Bureau keeps a running clock totaling the U.S. population. On April 19, 2021, the total was increasing at the rate of 1 person every 40 s. The population figure for 1:32 p.m. EST on that day was 330,215,841. 

a. Assuming exponential growth at a constant rate, find the rate constant for the population's growth (people per 365-day year). 

b. At this rate, what will the U.S. population be at 1:32 P.M. EST on April 19, 2028? 

35. Oil depletion Suppose the amount of oil pumped from one of the canyon wells in Whittier, California, decreases at the continuous rate of $10\%$ per year. When will the well's output fall to one-fifth of its present value? 

36. Continuous price discounting To encourage buyers to place 100-unit orders, your firm's sales department applies a continuous discount that makes the unit price a function $p(x)$ of the number of units $x$ ordered. The discount decreases the price at the rate of $0.01 per unit ordered. The price per unit for a 100-unit order is $p(100) = \$20.09$ . 

a. Find $p(x)$ by solving the following initial value problem. 

Differential equation: 

$$
{\frac {d p}{d x}} = - {\frac {1}{1 0 0}} p
$$

Initial condition: 

$$
p (1 0 0) = 2 0. 0 9
$$

b. Find the unit price $p(10)$ for a 10-unit order and the unit price $p(90)$ for a 90-unit order. 

c. The sales department has asked you to find out if it is discounting so much that the firm's revenue, $r(x) = x \cdot p(x)$ , will actually be less for a 100-unit order than, say, for a 90-unit order. Reassure them by showing that $r$ has its maximum value at $x = 100$ . 

d. Graph the revenue function $r(x) = xp(x)$ for $0 \leq x \leq 200$ . 

37. Plutonium-239 The half-life of the plutonium isotope is 24,360 years. If $10\mathrm{g}$ of plutonium is released into the atmosphere by a nuclear accident, how many years will it take for $80\%$ of the isotope to decay? 

38. Polonium-210 The half-life of polonium is 139 days, but your sample will not be useful to you after 95% of the radioactive nuclei present on the day the sample arrives has disintegrated. For about how many days after the sample arrives will you be able to use the polonium? 

39. The mean life of a radioactive nucleus Physicists using the radioactivity equation $y = y_{0}e^{-kt}$ call the number 1/k the mean life of a radioactive nucleus. The mean life of a radon nucleus is about 1/0.18 = 5.6 days. The mean life of a carbon-14 nucleus is more than 8000 years. Show that 95% of the radioactive nuclei originally present in a sample will disintegrate within three mean lifetimes, i.e., by time t = 3/k. Thus, the mean life of a nucleus gives a quick way to estimate how long the radioactivity of a sample will last. 

40. Californium-252 What costs $27 million per gram and can be used to treat brain cancer, analyze coal for its sulfur content, and detect explosives in luggage? The answer is californium-252, a radioactive isotope discovered by Glenn Seaborg in 1950. Much less than 1g of it is produced each year. The half-life of the isotope is 2.645 years—long enough for a useful service life and short enough to have a high radioactivity per unit mass. One microgram of the isotope releases 170 million neutrons per minute. 

a. What is the value of k in the decay equation for this isotope? 

b. What is the isotope's mean life? (See Exercise 39.) 

c. How long will it take $95\%$ of a sample's radioactive nuclei to disintegrate? 

41. Cooling soup Suppose that a cup of soup cooled from $90^{\circ}\mathrm{C}$ to $60^{\circ}\mathrm{C}$ after 10 min in a room where the temperature was $20^{\circ}\mathrm{C}$ . Use Newton's Law of Cooling to answer the following questions. a. How much longer would it take the soup to cool to $35^{\circ}\mathrm{C}$ ? 

b. Instead of being left to stand in the room, the cup of $90\;^{\circ}C$ soup is put in a freezer where the temperature is $-15\;^{\circ}C$ . How long will it take the soup to cool from $90\;^{\circ}C$ to $35\;^{\circ}C$ ? 

42. A beam of unknown temperature An aluminum beam was brought from the outside cold into a machine shop where the temperature was held at $18^{\circ}\mathrm{C}$ . After $10\mathrm{min}$ , the beam warmed to $2^{\circ}\mathrm{C}$ and after another $10\mathrm{min}$ , it was $10^{\circ}\mathrm{C}$ . Use Newton's Law of Cooling to estimate the beam's initial temperature. 

43. Surrounding medium of unknown temperature A pan of warm water (46 $^{\circ}$ C) was put in a refrigerator. Ten minutes later, the water's temperature was 39 $^{\circ}$ C; 10 min after that, it was 33 $^{\circ}$ C. Use Newton's Law of Cooling to estimate how cold the refrigerator was. 

44. Silver cooling in air The temperature of an ingot of silver is $60\ °C$ above room temperature right now. Twenty minutes ago, it was $70\ °C$ above room temperature. How far above room temperature will the silver be 

a. 15 min from now? 

b. 2 hours from now? 

c. When will the silver be $10^{\circ}$ C above room temperature? 

45. The age of Crater Lake The charcoal from a tree killed in the volcanic eruption that formed Crater Lake in Oregon contained 44.5% of the carbon-14 found in living matter. About how old is Crater Lake? 

46. The sensitivity of carbon-14 dating to measurement To see the effect of a relatively small error in the estimate of the amount of carbon-14 in a sample being dated, consider this hypothetical situation: 

a. A bone fragment found in central Illinois in the year 2000 contains 17% of its original carbon-14 content. Estimate the year the animal died. 

b. Repeat part (a), assuming 18% instead of 17%. 

c. Repeat part (a), assuming 16% instead of 17%. 

47. Carbon-14 The oldest known frozen human mummy, discovered in the Schnalstal glacier of the Italian Alps in 1991 and called Otzi, was found wearing straw shoes and a leather coat with goat fur, and holding a copper ax and stone dagger. It was estimated that Otzi died 5000 years before he was discovered in the melting glacier. How much of the original carbon-14 remained in Otzi at the time of his discovery? 

48. Art forgery A painting attributed to Vermeer (1632–1675), which should contain no more than 96.2% of its original carbon-14, contains 99.5% instead. About how old is the forgery? 

49. Lascaux Cave paintings Prehistoric cave paintings of animals were found in the Lascaux Cave in France in 1940. Scientific analysis revealed that only 15% of the original carbon-14 in the paintings remained. What is an estimate of the age of the paintings? 

50. Incan mummy The frozen remains of a young Incan woman were discovered by archeologist Johan Reinhard on Mt. Ampato in Peru during an expedition in 1995. 

a. How much of the original carbon-14 was present if the estimated age of the “Ice Maiden” was 500 years? 

b. If a 1% error can occur in the carbon-14 measurement, what is the oldest possible age for the Ice Maiden? 

Hyperbolic cosine: 

(b) 


(d)



(e)


The hyperbolic functions are formed by taking combinations of the two exponential functions $e^{x}$ and $e^{-x}$ . The hyperbolic functions simplify many mathematical expressions and occur frequently in mathematical and engineering applications. 

## Definitions and Identities

The hyperbolic sine and hyperbolic cosine functions are defined by the equations 

$$
\sinh x = \frac {e ^ {x} - e ^ {- x}}{2} \quad \text { and } \quad \cosh x = \frac {e ^ {x} + e ^ {- x}}{2}.
$$

We pronounce sinh x as “cinch x,” rhyming with “pinch x,” and cosh x as “kosh x,” rhyming with “gosh x.” From this basic pair, we define the hyperbolic tangent, cotangent, secant, and cosecant functions. The defining equations and graphs of these functions are shown in Table 7.4. We will see that the hyperbolic functions bear many similarities to the trigonometric functions after which they are named. 


TABLE 7.4 The six basic hyperbolic functions


![[0c9fa110f7b69f381f809da6882f88ecec8d84e6dc622379029d22930de754ca.jpg|image]]


![[f378a8a9ae74bae4cfe56187b997eee091e5086e593ba5cbbc74a14a7fcfb8fa.jpg|image]]


![[070800968d3310de40c31be9ba962ff63df3d8561b06e6f48ae766ca845a4d6f.jpg|image]]


Hyperbolic sine: 


Hyperbolic tangent:


$\sinh x = \frac{e^x - e^{-x}}{2}$ 

![[643230e1ee32921617b14d294c9060525d6bf27a92ea31b5f65167bff494df0a.jpg|image]]


$$
\tanh x = \frac {\sinh x}{\cosh x} = \frac {e ^ {x} - e ^ {- x}}{e ^ {x} + e ^ {- x}}
$$

$$
x = \frac {e ^ {x} + e ^ {- x}}{2}
$$

![[ed6c650b87bc304a128cac4135648c2e2ed8ce39bfb1a184e39d7fb340f0bda4.jpg|image]]


Hyperbolic cotangent: 

Hyperbolic secant: 

$$
\coth x = \frac {\cosh x}{\sinh x} = \frac {e ^ {x} + e ^ {- x}}{e ^ {x} - e ^ {- x}}
$$

$$
\operatorname{sech} x = \frac {1}{\cosh x} = \frac {2}{e ^ {x} + e ^ {- x}}
$$

Hyperbolic cosecant: 

$$
\operatorname{csch} x = \frac {1}{\sinh x} = \frac {2}{e ^ {x} - e ^ {- x}}
$$

## TABLE 7.5 Identities for hyperbolic functions

$$
\begin{array}{l} \hline \cosh^ {2} x - \sinh^ {2} x = 1 \\ \sinh 2 x = 2 \sinh x \cosh x \\ \cosh 2 x = \cosh^ {2} x + \sinh^ {2} x \\ \cosh^ {2} x = \frac {\cosh 2 x + 1}{2} \\ \sinh^ {2} x = \frac {\cosh 2 x - 1}{2} \\ \tanh ^ {2} x = 1 - \operatorname{sech} ^ {2} x \\ \coth^ {2} x = 1 + \operatorname{csch} ^ {2} x \end{array}
$$

## TABLE 7.6 Derivatives of hyperbolic functions

$$
\begin{array}{l} \frac {d}{d x} (\sinh x) = \cosh x \\ \frac {d}{d x} (\cosh x) = \sinh x \\ \frac {d}{d x} (\tanh x) = \operatorname{sech} ^ {2} x \\ \frac {d}{d x} (\coth x) = - \operatorname{csch} ^ {2} x \\ \frac {d}{d x} (\operatorname{sech} x) = - \operatorname{sech} x \tanh x \\ \frac {d}{d x} (\operatorname{csch} x) = - \operatorname{csch} x \coth x \end{array}
$$

## TABLE 7.7 Integral formulas for hyperbolic functions

$$
\begin{array}{l} \hline \int \sinh x d x = \cosh x + C \\ \int \cosh x d x = \sinh x + C \\ \int \operatorname{sech} ^ {2} x d x = \tanh x + C \\ \int \operatorname{csch} ^ {2} x d x = - \coth x + C \\ \int \operatorname{sech} x \tanh x d x = - \operatorname{sech} x + C \\ \int \operatorname{csch} x \coth x d x = - \operatorname{csch} x + C \end{array}
$$

Hyperbolic functions satisfy the identities in Table 7.5. Except for differences in sign, these resemble identities we know for the trigonometric functions. The identities are proved directly from the definitions, as we show here for the second one: 

$$
\begin{array}{l l} 2 \sinh x \cosh x = 2 \left(\frac {e ^ {x} - e ^ {- x}}{2}\right) \left(\frac {e ^ {x} + e ^ {- x}}{2}\right) \\ = \frac {e ^ {2 x} - e ^ {- 2 x}}{2} & \text {   Simplify.   } \\ = \sinh 2 x. & \text {   Definition   of   sinh   } \end{array}
$$

The other identities are obtained similarly, by substituting in the definitions of the hyperbolic functions and using algebra. 

For any real number u, we know the point with coordinates $(\cos u, \sin u)$ lies on the unit circle $x^{2} + y^{2} = 1$ . So the trigonometric functions are sometimes called the circular functions. Because of the first identity 

$$
\cosh^ {2} u - \sinh^ {2} u = 1,
$$

with u substituted for x in Table 7.5, the point having coordinates $(\cosh u, \sinh u)$ lies on the right-hand branch of the hyperbola $x^{2} - y^{2} = 1$ . This is where the hyperbolic functions get their names (see Exercise 86). 

Hyperbolic functions are useful in finding integrals, which we will see in Chapter 8. They play an important role in science and engineering as well. The hyperbolic cosine describes the shape of a hanging cable or wire that is strung between two points at the same height and hanging freely (see Exercise 83). The shape of the St. Louis Arch is an inverted hyperbolic cosine. The hyperbolic tangent occurs in the formula for the velocity of an ocean wave moving over water having a constant depth, and the inverse hyperbolic tangent describes how relative velocities sum according to Einstein's Law in the Special Theory of Relativity. 

## Derivatives and Integrals of Hyperbolic Functions

The six hyperbolic functions, being rational combinations of the differentiable functions $e^{x}$ and $e^{-x}$ , have derivatives at every point at which they are defined (Table 7.6). Again, there are similarities to trigonometric functions. 

The derivative formulas are obtained from the derivative of $e^{x}$ : 

$$
\begin{array}{l l} \frac {d}{d x} (\sinh x) = \frac {d}{d x} \left(\frac {e ^ {x} - e ^ {- x}}{2}\right) & \text {   Definition   of   } \sinh x \\ = \frac {e ^ {x} + e ^ {- x}}{2} & \text {   Derivative   of   } e ^ {x} \\ = \cosh x. & \text {   Definition   of   } \cosh x \end{array}
$$

This gives the first derivative formula. From the definition, we can calculate the derivative of the hyperbolic cosecant function, as follows: 

$$
\begin{array}{l l} \frac {d}{d x} (\operatorname{csch} x) = \frac {d}{d x} \left(\frac {1}{\sinh x}\right) & \text { Definition   of   csch } x \\ = - \frac {\cosh x}{\sinh^ {2} x} & \text { Quotient   Rule   for   derivatives } \\ = - \frac {1}{\sinh x} \frac {\cosh x}{\sinh x} & \text { Rearrange   factors. } \\ = - \operatorname{csch} x \coth x & \text { Definitions   of   csch } x \text { and   } \coth x \end{array}
$$

The other formulas in Table 7.6 are obtained similarly. 

The derivative formulas lead to the integral formulas in Table 7.7. 

**EXAMPLE 1** We illustrate the derivative and integral formulas. 

$$
\begin{array}{r l} \text {(a)} & \frac {d}{d t} \left(\tanh \sqrt {1 + t ^ {2}}\right) = \operatorname{sech} ^ {2} \sqrt {1 + t ^ {2}} \cdot \frac {d}{d t} \left(\sqrt {1 + t ^ {2}}\right) \\ & = \frac {t}{\sqrt {1 + t ^ {2}}} \operatorname{sech} ^ {2} \sqrt {1 + t ^ {2}} \end{array}
$$

$$
\begin{array}{l l} \text {(b)} \int \coth 5 x d x = \int \frac {\cosh 5 x}{\sinh 5 x} d x = \frac {1}{5} \int \frac {d u}{u} & u = \sinh 5 x, \\ & d u = 5 \cosh 5 x d x \\ = \frac {1}{5} \ln | u | + C = \frac {1}{5} \ln | \sinh 5 x | + C \end{array}
$$

$$
\begin{array}{r l} \int_ {0} ^ {1} \sinh^ {2} x d x & = \int_ {0} ^ {1} \frac {\cosh 2 x - 1}{2} d x \\ & = \frac {1}{2} \int_ {0} ^ {1} (\cosh 2 x - 1) d x = \frac {1}{2} \left[ \frac {\sinh 2 x}{2} - x \right] _ {0} ^ {1} \\ & = \frac {\sinh 2}{4} - \frac {1}{2} \approx 0. 4 0 6 7 2 \end{array} \tag {Table7.5}
$$

$$
\begin{array}{r l} \text {(d)} & \int_ {0} ^ {\ln 2} 4 e ^ {x} \sinh x d x = \int_ {0} ^ {\ln 2} 4 e ^ {x} \frac {e ^ {x} - e ^ {- x}}{2} d x = \int_ {0} ^ {\ln 2} (2 e ^ {2 x} - 2) d x \\ & = \left[ e ^ {2 x} - 2 x \right] _ {0} ^ {\ln 2} = (e ^ {2 \ln 2} - 2 \ln 2) - (1 - 0) \\ & = 4 - 2 \ln 2 - 1 \approx 1. 6 1 3 7 \end{array}
$$

## Inverse Hyperbolic Functions

The inverses of the six basic hyperbolic functions are very useful in integration (see Chapter 8). Since $d(\sinh x) / dx = \cosh x > 0$ , the hyperbolic sine is an increasing function of $x$ . We denote its inverse by 

$$
y = \sinh^ {- 1} x.
$$

For every value of x in the interval $-\infty < x < \infty$ , the value of $y = \sinh^{-1} x$ is the number whose hyperbolic sine is x. The graphs of $y = \sinh x$ and $y = \sinh^{-1} x$ are shown in Figure 7.8a. Other notations used for the inverse hyperbolic sine function include arcsinh x, arsinh x, and argsinh x. 

The function $y = \cosh x$ is not one-to-one because its graph in Table 7.4 does not pass the horizontal line test. The restricted function $y = \cosh x, x \geq 0$ , however, is one-to-one and therefore has an inverse, denoted by 

$$
y = \cosh^ {- 1} x.
$$

![[04623ff60efad18a1b4a750bbef784c528576c722125e97193fba92c4d8ab840.jpg|image]]


![[79acc587678fabf6ae1308a750ab4c08240f53c5a95fc42791a2721d2ca79fd9.jpg|image]]



(b)


![[9fc1162b0b9822d3ce22b4842adfa9fc7521ae4121a0ba859a5a48d7d04e9213.jpg|image]]



(c)



FIGURE 7.8 The graphs of the inverse hyperbolic sine, cosine, and secant of x. Notice the symmetries about the line y = x.


(c) 

For every value of $x \geq 1$ , $y = \cosh^{-1}x$ is the number in the interval $0 \leq y < \infty$ whose hyperbolic cosine is x. The graphs of $y = \cosh x, x \geq 0$ , and $y = \cosh^{-1}x$ are shown in Figure 7.8b. 

Like $y = \cosh x$ , the function $y = \operatorname{sech} x = 1/\cosh x$ fails to be one-to-one, but its restriction to nonnegative values of x does have an inverse, denoted by 

$$
y = \operatorname{sech} ^ {- 1} x.
$$

For every value of x in the interval $(0,1]$ , $y = \operatorname{sech}^{-1} x$ is the nonnegative number whose hyperbolic secant is x. The graphs of $y = \operatorname{sech} x, x \geq 0$ , and $y = \operatorname{sech}^{-1} x$ are shown in Figure 7.8c. 

The hyperbolic tangent, cotangent, and cosecant are one-to-one on their domains and therefore have inverses, denoted by 

$$
y = \tanh ^ {- 1} x, \quad y = \coth^ {- 1} x, \quad y = \operatorname{csch} ^ {- 1} x.
$$

These functions are graphed in Figure 7.9. 

![[8d7f6b65ae18c5950057b8172e9b3cc9a9308c7983d57dacd07dbd92ed13ea97.jpg|image]]


![[509c0873443c93bf343283ec0a08f6bbd41005f84801a91b67200e794a33460d.jpg|image]]


![[af4cde299b81e66360bdf170af8fdad4c55e222e3e07e40582ec6816f6040efa.jpg|image]]



(b)



FIGURE 7.9 The graphs of the inverse hyperbolic tangent, cotangent, and cosecant of x.


## Useful Identities

TABLE 7.8 Identities for inverse hyperbolic functions 

$$
\operatorname{sech} ^ {- 1} x = \cosh^ {- 1} \frac {1}{x}
$$

$$
\operatorname{csch} ^ {- 1} x = \sinh^ {- 1} \frac {1}{x}
$$

We can use the identities in Table 7.8 to express $\operatorname{sech}^{-1}x$ , $\operatorname{csch}^{-1}x$ , and $\coth^{-1}x$ in terms of $\cosh^{-1}x$ , $\sinh^{-1}x$ , and $\tanh^{-1}x$ . These identities are direct consequences of the definitions. For example, if $0 < x \leq 1$ , then 

$$
\coth^ {- 1} x = \tanh ^ {- 1} \frac {1}{x}
$$

$$
\operatorname{sech} \left(\cosh^ {- 1} \left(\frac {1}{x}\right)\right) = \frac {1}{\cosh \left(\cosh^ {- 1} \left(\frac {1}{x}\right)\right)} = \frac {1}{\left(\frac {1}{x}\right)} = x.
$$

We also know that $\operatorname{sech}(\operatorname{sech}^{-1}x) = x$ , so because the hyperbolic secant is one-to-one on $(0,1]$ , we have 

$$
\cosh^ {- 1} \left(\frac {1}{x}\right) = \operatorname{sech} ^ {- 1} x.
$$

## Derivatives of Inverse Hyperbolic Functions

An important use of inverse hyperbolic functions lies in antiderivatives that reverse the derivative formulas in Table 7.9. 

The restrictions $|x| < 1$ and $|x| > 1$ on the derivative formulas for $\tanh^{-1} x$ and $\coth^{-1} x$ come from the natural restrictions on the values of these functions. (See Figure 7.9a and b.) The distinction between $|x| < 1$ and $|x| > 1$ becomes important when we convert the derivative formulas into integral formulas. 

We illustrate how the derivatives of the inverse hyperbolic functions are found in Example 2, where we calculate $d(\cosh^{-1}x)/dx$ . The other derivatives are obtained by similar calculations. 

TABLE 7.9 Derivatives of inverse hyperbolic functions 

$$
\begin{array}{l l} \frac {d (\sinh^ {- 1} x)}{d x} = \frac {1}{\sqrt {1 + x ^ {2}}} \\ \frac {d (\cosh^ {- 1} x)}{d x} = \frac {1}{\sqrt {x ^ {2} - 1}}, & x > 1 \\ \frac {d (\tanh^ {- 1} x)}{d x} = \frac {1}{1 - x ^ {2}}, & | x | <   1 \\ \frac {d (\coth^ {- 1} x)}{d x} = \frac {1}{1 - x ^ {2}}, & | x | > 1 \\ \frac {d (\operatorname{sech} ^ {- 1} x)}{d x} = - \frac {1}{x \sqrt {1 - x ^ {2}}}, & 0 <   x <   1 \\ \frac {d (\operatorname{csch} ^ {- 1} x)}{d x} = - \frac {1}{| x | \sqrt {1 + x ^ {2}}}, & x \neq 0 \end{array}
$$

**EXAMPLE 2** Show that if $x$ is greater than 1, then 

$$
\frac {d}{d x} \left(\cosh^ {- 1} x\right) = \frac {1}{\sqrt {x ^ {2} - 1}}.
$$

**Solution** We find the derivative of $y = \cosh^{-1} x$ for x > 1 by applying Theorem 3 of Section 3.8 with $f(x) = \cosh x$ and $f^{-1}(x) = \cosh^{-1} x$ . Theorem 3 can be applied because the derivative of $\cosh x$ is positive when x > 0. 

$$
\begin{array}{l l} (f ^ {- 1}) ^ {\prime} (x) = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} & \text { Theorem   3,   Section   3.8 } \\ = \frac {1}{\sinh (\cosh^ {- 1} x)} & f ^ {\prime} (x) = \sinh x \\ = \frac {1}{\sqrt {\cosh^ {2} (\cosh^ {- 1} x) - 1}} & \cosh^ {2} x - \sinh^ {2} x = 1, (x \geq 0), \\ = \frac {1}{\sqrt {x ^ {2} - 1}} & \sinh x = \sqrt {\cosh^ {2} x - 1} \\ & \cosh (\cosh^ {- 1} x) = x \end{array}
$$

Kovalevsky, a Russian mathematician, primarily worked on the theory of partial differential equations, and a central result on the existence of solutions still bears her name. She published numerous papers on partial differential equations, eventually gaining recognition as the first woman to be elected a member of the Russian Imperial Academy of Sciences in 1889. 

To know more, visit the companion Website. 

With appropriate substitutions, the derivative formulas in Table 7.9 lead to the integration formulas in Table 7.10. Each of the formulas in Table 7.10 can be verified by differentiating the expression on the right-hand side. 

**EXAMPLE 3** Evaluate 

$$
\int_ {0} ^ {1} \frac {2 d x}{\sqrt {3 + 4 x ^ {2}}}.
$$

## TABLE 7.10 Integrals leading to inverse hyperbolic functions

$$
\int \frac {d x}{\sqrt {a ^ {2} + x ^ {2}}} = \sinh^ {- 1} \left(\frac {x}{a}\right) + C,
$$

$$
a > 0
$$

$$
\int \frac {d x}{\sqrt {x ^ {2} - a ^ {2}}} = \cosh^ {- 1} \left(\frac {x}{a}\right) + C, \tag {2.}
$$

$$
x > a > 0
$$

$$
\int \frac {d x}{a ^ {2} - x ^ {2}} = \left\{ \begin{array}{l} \frac {1}{a} \tanh ^ {- 1} \left(\frac {x}{a}\right) + C, \\ \frac {1}{a} \coth^ {- 1} \left(\frac {x}{a}\right) + C, \end{array} \right.
$$

$$
x ^ {2} <   a ^ {2}
$$

$$
x ^ {2} > a ^ {2}
$$

$$
\int \frac {d x}{x \sqrt {a ^ {2} - x ^ {2}}} = - \frac {1}{a} \operatorname{sech} ^ {- 1} \left(\frac {x}{a}\right) + C, \quad 0 <   x <   a
$$

$$
\int \frac {d x}{x \sqrt {a ^ {2} + x ^ {2}}} = - \frac {1}{a} \operatorname{csch} ^ {- 1} \left| \frac {x}{a} \right| + C, \quad x \neq 0 \text {   and   } a > 0
$$

**Solution** The indefinite integral is 

$$
\begin{array}{l l} \int \frac {2 d x}{\sqrt {3 + 4 x ^ {2}}} = \int \frac {d u}{\sqrt {3 + u ^ {2}}} & u = 2 x, d u = 2 d x \\ = \sinh^ {- 1} \left(\frac {u}{\sqrt {3}}\right) + C & \text { Formula   1   from   Table   7.10   with } a ^ {2} = 3 \\ = \sinh^ {- 1} \left(\frac {2 x}{\sqrt {3}}\right) + C. \end{array}
$$

Therefore, 

$$
\begin{array}{r l} \int_ {0} ^ {1} \frac {2 d x}{\sqrt {3 + 4 x ^ {2}}} & = \left[ \sinh^ {- 1} \left(\frac {2 x}{\sqrt {3}}\right) \right] _ {0} ^ {1} = \sinh^ {- 1} \left(\frac {2}{\sqrt {3}}\right) - \sinh^ {- 1} (0) \\ & = \sinh^ {- 1} \left(\frac {2}{\sqrt {3}}\right) - 0 \approx 0. 9 8 6 6 5. \end{array}
$$

## EXERCISES 7.3

## Values and Identities

Each of Exercises 1–4 gives a value of $\sinh x$ or $\cosh x$ . Use the definitions and the identity $\cosh^{2}x - \sinh^{2}x = 1$ to find the values of the remaining five hyperbolic functions. 

9. $(\sinh x + \cosh x)^{4}$ 

10. $\ln(\cosh x + \sinh x) + \ln(\cosh x - \sinh x)$ 

1. $\sinh x = -\frac{3}{4}$ 

2. $\sinh x = \frac{4}{3}$ 

3. $\cosh x = \frac{17}{15}, x > 0$ 

4. $\cosh x = \frac{13}{5}, x > 0$ 

Rewrite the expressions in Exercises 5–10 in terms of exponentials and simplify the results as much as you can. 

Then use them to show that 

a. $\sinh 2x = 2\sinh x \cosh x.$ 

b. $\cosh 2x = \cosh^{2}x + \sinh^{2}x.$ 

5. $2 \cosh(\ln x)$ 

11. Prove the identities $\sinh (x + y) = \sinh x\cosh y + \cosh x\sinh y,$ $\cosh (x + y) = \cosh x\cosh y + \sinh x\sinh y.$ 

7. $\cosh 5x + \sinh 5x$ 

12. Use the definitions of $\cosh x$ and $\sinh x$ to show that 

8. $\cosh 3x - \sinh 3x$ 

$$
\cosh^ {2} x - \sinh^ {2} x = 1.
$$

## Finding Derivatives

In Exercises 13–24, find the derivative of y with respect to the appropriate variable. 

13. $y = 6\sinh \frac{x}{3}$ 

14. $y = \frac{1}{2}\sinh (2x + 1)$ 

15. $y = 2\sqrt{t}$ $\tanh \sqrt{t}$ 

16. $y = t^2\tanh \frac{1}{t}$ 

17. $y = \ln (\sinh z)$ 

18. $y = \ln (\cosh z)$ 

19. $y = (\operatorname{sech} \theta)(1 - \ln \operatorname{sech} \theta)$ 

20. $y = (\operatorname{csch} \theta)(1 - \ln \operatorname{csch} \theta)$ 

21. $y = \ln \cosh v - \frac{1}{2} \tanh^2 v$ 22. $y = \ln \sinh v - \frac{1}{2} \coth^2 v$ 

23. $y = (x^{2} + 1)\operatorname {sech}(\ln x)$ 

(Hint: Before differentiating, express in terms of exponentials and simplify.) 

24. $y = (4x^{2} - 1)\operatorname{csch}(\ln 2x)$ 

In Exercises 25–36, find the derivative of y with respect to the appropriate variable. 

25. $y = \sinh^{-1}\sqrt{x}$ 

26. $y = \cosh^{-1} 2 \sqrt{x + 1}$ 

27. $y = (1 - \theta)\tanh^{-1}\theta$ 

28. $y = (\theta^2 + 2\theta) \tanh^{-1}(\theta + 1)$ 

29. $y = (1 - t)\coth^{-1}\sqrt{t}$ 

30. $y = (1 - t^2)\coth^{-1}t$ 

31. $y = \cos^{-1}x - x\operatorname{sech}^{-1}x$ 

32. $y = \ln x + \sqrt{1 - x^2}$ $\operatorname {sech}^{-1}x$ 

33. $y = \operatorname{csch}^{-1}\left(\frac{1}{2}\right)^{\theta}$ 

34. $y = \operatorname{csch}^{-1}2^{\theta}$ 

35. $y = \sinh^{-1}(\tan x)$ 

36. $y = \cosh^{-1}(\sec x),\quad 0 < x < \pi /2$ 

Integration Formulas 

Verify the integration formulas in Exercises 37–40. 

37. a. $\int \operatorname{sech} x dx = \tan^{-1} (\sinh x) + C$ 

b. $\int \operatorname{sech} x dx = \sin^{-1} (\tanh x) + C$ 

38. $\int x\operatorname{sech}^{-1}xdx = \frac{x^2}{2}\operatorname{sech}^{-1}x - \frac{1}{2}\sqrt{1 - x^2} +C$ 

39. $\int x\coth^{-1}x dx = \frac{x^2 - 1}{2}\coth^{-1}x + \frac{x}{2} + C$ 

40. $\int \tanh^{-1} x dx = x \tanh^{-1} x + \frac{1}{2} \ln (1 - x^2) + C$ 

Evaluating Integrals 

Evaluate the integrals in Exercises 41–60. 

41. $\int \sinh 2x dx$ 42. $\int \sinh \frac{x}{5} dx$ 

43. $\int 6\cosh \left(\frac{x}{2} -\ln 3\right)dx$ 44. $\int 4\cosh (3x - \ln 2)dx$ 

45. $\int \tanh \frac{x}{7} dx$ 

46. $\int \coth \frac{\theta}{\sqrt{3}} d\theta$ 

47. $\int \operatorname{sech}^2\left(x - \frac{1}{2}\right)dx$ 48. $\int \operatorname{csch}^2(5 - x)dx$ 

49. $\int \frac{\operatorname{sech}\sqrt{t} \tanh\sqrt{t} dt}{\sqrt{t}}$ 

51. $\int_{\ln 2}^{\ln 4}\coth x dx$ 

50. $\int \frac{\operatorname{csch}(\ln t)\coth(\ln t)dt}{t}$ 

52. $\int_0^{\ln 2}\tanh 2x dx$ 

53. $\int_{-\ln 4}^{-\ln 2} 2e^{\theta} \cosh \theta d\theta$ 

54. $\int_0^{\ln 2}4e^{-\theta}\sinh \theta d\theta$ 

55. $\int_{-\pi /4}^{\pi /4}\cosh (\tan \theta)\sec^2\theta d\theta$ 

56. $\int_0^{\pi /2}2\sinh (\sin \theta)\cos \theta d\theta$ 

57. $\int_{1}^{2}\frac{\cosh(\ln t)}{t} dt$ 

58. $\int_{1}^{4}\frac{8\cosh\sqrt{x}}{\sqrt{x}} dx$ 

59. $\int_{-\ln 2}^{0}\cosh^{2}\left(\frac{x}{2}\right)dx$ 

60. $\int_0^{\ln 10}4\sinh^2\left(\frac{x}{2}\right)dx$ 

## Inverse Hyperbolic Functions and Integrals

Since the hyperbolic functions can be expressed in terms of exponential functions, it is possible to express the inverse hyperbolic functions in terms of logarithms, as shown in the following table. 

$\sinh^{-1}x = \ln (x + \sqrt{x^2 + 1})$ 

$$
- \infty <   x <   \infty
$$

$\cosh^{-1}x = \ln (x + \sqrt{x^2 - 1}),\quad x\geq 1$ 

$\tanh^{-1}x = \frac{1}{2}\ln \frac{1 + x}{1 - x},$ 

$|x| < 1$ 

$\operatorname{sech}^{-1}x = \ln \left(\frac{1 + \sqrt{1 - x^2}}{x}\right),$ 

$$
0 <   x \leq 1
$$

$$
\operatorname{ch} ^ {- 1} x = \ln \left(\frac {1}{x} + \frac {\sqrt {1 + x ^ {2}}}{| x |}\right),
$$

$\coth^{-1}x = \frac{1}{2}\ln \frac{x + 1}{x - 1},$ 

$$
x \neq 0
$$

$|x| > 1$ 

Use these formulas to express the numbers in Exercises 61–66 in terms of natural logarithms. 

61. $\sinh^{-1}(-5 / 12)$ 

62. $\cosh^{-1}(5/3)$ 

63. $\tanh^{-1}(-1/2)$ 

64. $\coth^{-1}(5/4)$ 

65. $\operatorname{sech}^{-1}(3 / 5)$ 

66. $\operatorname{csch}^{-1}\left(-1 / \sqrt{3}\right)$ 

Evaluate the integrals in Exercises 67–74 in terms of
a. inverse hyperbolic functions.
b. natural logarithms. 

67. $\int_0^{2\sqrt{3}}\frac{dx}{\sqrt{4 + x^2}}$ 

68. $\int_0^{1 / 3}\frac{6dx}{\sqrt{1 + 9x^2}}$ 

69. $\int_{5 / 4}^{2}\frac{dx}{1 - x^2}$ 

70. $\int_0^{1 / 2}\frac{dx}{1 - x^2}$ 

71. $\int_{1 / 5}^{3 / 13}\frac{dx}{x\sqrt{1 - 16x^2}}$ 

72. $\int_{1}^{2}\frac{dx}{x\sqrt{4 + x^2}}$ 

73. $\int_0^\pi \frac{\cos x dx}{\sqrt{1 + \sin^2 x}}$ 

74. $\int_{1}^{e}\frac{dx}{x\sqrt{1 + (\ln x)^2}}$ 

## Applications and Examples

75. Show that if a function $f$ is defined on an interval symmetric about the origin (so that $f$ is defined at $-x$ whenever it is defined at $x$ ), then 

$$
f (x) = \frac {f (x) + f (- x)}{2} + \frac {f (x) - f (- x)}{2}.
$$

Then show that $(f(x) + f(-x)) / 2$ is even and that $(f(x) - f(-x)) / 2$ is odd. 

76. Derive the formula $\sinh^{-1}x = \ln(x + \sqrt{x^{2} + 1})$ for all real x. Explain in your derivation why the plus sign is used with the square root instead of the minus sign. 

77. Skydiving If a body of mass $m$ falling from rest under the action of gravity encounters an air resistance proportional to the square of the velocity, then the body's velocity $t$ s into the fall satisfies the differential equation 

$$
m \frac {d v}{d t} = m g - k v ^ {2},
$$

where $k$ is a constant that depends on the body's aerodynamic properties and the density of the air. (We assume that the fall is short enough so that the variation in the air's density will not affect the outcome significantly.) 

a. Show that 

$$
v = \sqrt {\frac {m g}{k}} \tanh \left(\sqrt {\frac {g k}{m}} t\right)
$$

satisfies the differential equation and the initial condition that v = 0 when t = 0. 

b. Find the body's limiting velocity, $\lim_{t\to \infty}v$ 

c. For a 75-kg skydiver (mg = 735 N), with time in seconds and distance in meters, a typical value for k is 0.235. What is the diver's limiting velocity? 

78. Accelerations whose magnitudes are proportional to displacement Suppose that the position of a body moving along a coordinate line at time t is 

a. $s = a \cos kt + b \sin kt$ . b. $s = a \cosh kt + b \sinh kt$ . 

Show in both cases that the acceleration $d^{2}s/dt^{2}$ is proportional to s but that in the first case it is directed toward the origin, whereas in the second case it is directed away from the origin. 

79. Volume A region in the first quadrant is bounded above by the curve $y = \cosh x$ , below by the curve $y = \sinh x$ , and on the left and right by the y-axis and the line x = 2, respectively. Find the volume of the solid generated by revolving the region about the x-axis. 

80. Volume The region enclosed by the curve y = sech x, the x-axis, and the lines $x = \pm \ln \sqrt{3}$ is revolved about the x-axis to generate a solid. Find the volume of the solid. 

81. Arc length Find the length of the graph of $y = (1/2)\cosh 2x$ from x = 0 to $x = \ln\sqrt{5}$ . 

82. Use the definitions of the hyperbolic functions to find each of the following limits. 

a. $\lim_{x\to\infty}\tanh x$ 

b. $\lim_{x\to-\infty}\tanh x$ 

c. $\lim_{x\to\infty}\sinh x$ 

d. $\lim_{x\to-\infty}\sinh x$ 

e. $\lim_{x\to\infty}$ sech x 

g. $\lim_{x\to0^{+}}\coth x$ f. $\lim_{x\to\infty}\coth x$ 

i. $\lim_{x\to-\infty}$ csch x 

h. $\lim_{x\to0^{-}}\coth x$ 

83. Hanging cables Imagine a cable, like a telephone line or TV cable, strung from one support to another and hanging freely. The cable's weight per unit length is a constant $w$ , and the horizontal tension at its lowest point is a vector of length $H$ . If we choose a coordinate system for the plane of the cable in which the $x$ -axis is horizontal, the force of gravity is straight down, the positive $y$ -axis points straight up, and the lowest point of the cable lies at the point $y = H / w$ on the $y$ -axis (see accompanying figure), then it can be shown that the cable lies along the graph of the hyperbolic cosine 

$$
y = \frac {H}{w} \cosh \frac {w}{H} x.
$$

![[8e0ee0798668b42631c84ff2565ba6aa2e2a103a13402c79e7a4c139d2af83eb.jpg|image]]


Such a curve is sometimes called a chain curve or a catenary, the latter deriving from the Latin catena, meaning “chain.” 

a. Let $P(x, y)$ denote an arbitrary point on the cable. The next accompanying figure displays the tension at $P$ as a vector of length (magnitude) $T$ , as well as the tension $H$ at the lowest point $A$ . Show that the cable's slope at $P$ is 

$$
\tan \phi = \frac {d y}{d x} = \sinh \frac {w}{H} x.
$$

![[7b09b9782e007aa0c87fdfe9d2943534f59f21e8c0bbd799a6e4e8e8457c216e.jpg|image]]


b. Using the result from part (a) and the fact that the horizontal tension at P must equal H (the cable is not moving), show that T = wy. Hence, the magnitude of the tension at $P(x, y)$ is exactly equal to the weight of y units of cable. 

84. (Continuation of Exercise 83.) The length of arc AP in the Exercise 83 figure is $s = (1/a)\sinh ax$ , where a = w/H. Show that the coordinates of P may be expressed in terms of s as 

$$
x = \frac {1}{a} \sinh^ {- 1} a s, \quad y = \sqrt {s ^ {2} + \frac {1}{a ^ {2}}}.
$$

85. Area Show that the area of the region in the first quadrant enclosed by the curve $y = (1/a)\cosh ax$ , the coordinate axes, and the line x = b is the same as the area of a rectangle of height 1/a and length s, where s is the length of the curve from x = 0 to x = b. Draw a figure illustrating this result. 

86. The hyperbolic in hyperbolic functions Just as $x = \cos u$ and $y = \sin u$ are identified with points $(x, y)$ on the unit circle, the functions $x = \cosh u$ and $y = \sinh u$ are identified with points $(x, y)$ on the right-hand branch of the unit hyperbola, $x^2 - y^2 = 1$ . 

![[d28601ae36f3656d8e03b1feffcddc2bf685bcbbc05dfce0aa149800112a5109.jpg|image]]


$$
{ } ^ { 2 } u - \sinh ^ { 2 } u = 1 ,
$$

$$
x ^ {2} - y ^ {2} = 1
$$

Another analogy between hyperbolic and circular functions is that the variable u in the coordinates $(\cosh u, \sinh u)$ for the points of the right-hand branch of the hyperbola $x^{2} - y^{2} = 1$ is twice the area of the sector AOP pictured in the figure following part (c). To see why this is so, carry out the following steps. 

a. Show that the area $A(u)$ of sector AOP is 

$$
A (u) = \frac {1}{2} \cosh u \sinh u - \int_ {1} ^ {\cosh u} \sqrt {x ^ {2} - 1} d x.
$$

b. Differentiate both sides of the equation in part (a) with respect to $u$ to show that 

$$
A ^ {\prime} (u) = \frac {1}{2}.
$$

c. Solve this last equation for $A(u)$ . What is the value of $A(0)$ ? What is the value of the constant of integration $C$ in your solution? With $C$ determined, what does your solution say about the relationship of $u$ to $A(u)$ ? 

![[6baefc69dc952233a775d9ecdd2c057b5f143d1f77e20d5919bee1c14765dcdb.jpg|image]]


One of the analogies between hyperbolic and circular functions is revealed by these two diagrams (Exercise 86). 

## 7.4 Relative Rates of Growth

![[66678e8acfec1131f30b2c49a1e30f05984231a6b6293cefa0ae0bf26e1496ca.jpg|image]]



FIGURE 7.10 The graphs of $e^x, 2^x$ , and $x^2$ .


It is often important in mathematics, computer science, and engineering to compare the rates at which functions of x grow as x becomes large. Exponential functions are important in these comparisons because of their very fast growth, and logarithmic functions because of their very slow growth. In this section we introduce the little-oh and big-oh notation used to describe the results of these comparisons. We restrict our attention to functions whose values eventually become and remain positive as $x \rightarrow \infty$ . 

## Growth Rates of Functions

You may have noticed that exponential functions like $2^{x}$ and $e^{x}$ seem to grow more rapidly as x gets large than do polynomials and rational functions. These exponentials certainly grow more rapidly than x itself, and you can see $2^{x}$ outgrowing $x^{2}$ as x increases in Figure 7.10. In fact, as $x \to \infty$ , the functions $2^{x}$ and $e^{x}$ grow faster than any power of x, even $x^{1,000,000}$ (Exercise 19). In contrast, logarithmic functions like $y = \log_{2} x$ and $y = \ln x$ grow more slowly as $x \to \infty$ than any positive power of x (Exercise 21). 

To get a feeling for how rapidly the values of $y = e^{x}$ grow with increasing $x$ , think of graphing the function on a large blackboard, with the axes scaled in centimeters. At $x = 1\mathrm{cm}$ , the graph is $e^1 \approx 3\mathrm{cm}$ above the $x$ -axis. At $x = 6\mathrm{cm}$ , the graph is $e^6 \approx 403\mathrm{cm} \approx 4\mathrm{m}$ high (it is about to go through the ceiling if it hasn't done so already). At $x = 10\mathrm{cm}$ , the graph is $e^{10} \approx 22,026\mathrm{cm} \approx 220\mathrm{m}$ high, higher than most buildings. At $x = 24\mathrm{cm}$ , the graph is more than halfway to the moon, and at $x = 43\mathrm{cm}$ from the origin, the graph is high enough to reach past the sun's closest stellar neighbor, the red dwarf star Proxima Centauri. By contrast, with axes scaled in centimeters, you have to go nearly 5 light-years out on the $x$ -axis to find a point where the graph of $y = \ln x$ is even $y = 43\mathrm{cm}$ high. See Figure 7.11. 

![[e4c9a11e7e2d78c1a626bcd53f7df3687a8e0f0762dd5bfab883555c04c4e3e9.jpg|image]]



FIGURE 7.11 Scale drawings of the graphs of $e^x$ and $\ln x$ .


These important comparisons of exponential, polynomial, and logarithmic functions can be made precise by defining what it means for a function $f(x)$ to grow faster than another function $g(x)$ as $x \to \infty$ . 

> ## ***DEFINITION*** Let $f(x)$ and $g(x)$ be positive for x sufficiently large.
>
> ## 1. $f$ grows faster than $g$ as $x \to \infty$ if
>
> $$
> \lim _ {x \to \infty} \frac {f (x)}{g (x)} = \infty
> $$
>
> or, equivalently, if 
>
> $$
> \lim _ {x \to \infty} \frac {g (x)}{f (x)} = 0.
> $$
>
> We also say that $g$ grows slower than $f$ as $x \to \infty$ . 
>
> 2. $f$ and $g$ grow at the same rate as $x \to \infty$ if 
>
> $$
> \lim _ {x \to \infty} \frac {f (x)}{g (x)} = L
> $$
>
> where $L$ is finite and positive. 
>
According to these definitions, $y = 2x$ does not grow faster than $y = x$ . The two functions grow at the same rate because 

$$
\lim _ {x \to \infty} \frac {2 x}{x} = \lim _ {x \to \infty} 2 = 2,
$$

which is a finite, positive limit. The reason for this departure from more colloquial usage is that we want “f grows faster than g” to mean that for large x-values g is negligible when compared with f. 

## **EXAMPLE 1** We compare the growth rates of several common functions.

(a) $e^x$ grows faster than $x^2$ as $x \to \infty$ because 

$$
\underbrace {\lim _ {x \to \infty} \frac {e ^ {x}}{x ^ {2}}} _ {\infty / \infty} = \underbrace {\lim _ {x \to \infty} \frac {e ^ {x}}{2 x}} _ {\infty / \infty} = \lim _ {x \to \infty} \frac {e ^ {x}}{2} = \infty . \quad \text { Using   l'Hôpital's   Rule   twice }
$$

(b) $3^{x}$ grows faster than $2^{x}$ as $x \rightarrow \infty$ because 

$$
\lim _ {x \rightarrow \infty} \frac {3 ^ {x}}{2 ^ {x}} = \lim _ {x \rightarrow \infty} \left(\frac {3}{2}\right) ^ {x} = \infty .
$$

(c) $x^{2}$ grows faster than $\ln x$ as $x\to \infty$ because 

$$
\lim _ {x \to \infty} \frac {x ^ {2}}{\ln x} = \lim _ {x \to \infty} \frac {2 x}{1 / x} = \lim _ {x \to \infty} 2 x ^ {2} = \infty . \quad \text {   l'Hôpital's   Rule   }
$$

(d) In x grows slower than $x^{1/n}$ as $x \rightarrow \infty$ for any positive integer n because 

$$
\begin{array}{l l} \lim _ {x \to \infty} \frac {\ln x}{x ^ {1 / n}} = \lim _ {x \to \infty} \frac {1 / x}{(1 / n) x ^ {(1 / n) - 1}} & \text {   l'Hôpital's   Rule   } \\ = \lim _ {x \to \infty} \frac {n}{x ^ {1 / n}} = 0. & \text {   n   is   constant.   } \end{array}
$$

(e) As part (b) suggests, exponential functions with different bases never grow at the same rate as $x \to \infty$ . If a > b > 0, then $a^{x}$ grows faster than $b^{x}$ . Since $(a/b) > 1$ , 

$$
\lim _ {x \rightarrow \infty} \frac {a ^ {x}}{b ^ {x}} = \lim _ {x \rightarrow \infty} \left(\frac {a}{b}\right) ^ {x} = \infty .
$$

(f) In contrast to exponential functions, logarithmic functions with different bases $a > 1$ and $b > 1$ always grow at the same rate as $x \to \infty$ : 

$$
\lim _ {x \rightarrow \infty} \frac {\log_ {a} x}{\log_ {b} x} = \lim _ {x \rightarrow \infty} \frac {\ln x / \ln a}{\ln x / \ln b} = \frac {\ln b}{\ln a}.
$$

The limiting ratio is always finite and never zero. 

If $f$ grows at the same rate as $g$ as $x \to \infty$ , and $g$ grows at the same rate as $h$ as $x \to \infty$ , then $f$ grows at the same rate as $h$ as $x \to \infty$ . The reason is that 

$$
\lim _ {x \rightarrow \infty} \frac {f}{g} = L _ {1} \quad \text { and } \quad \lim _ {x \rightarrow \infty} \frac {g}{h} = L _ {2}
$$

together imply 

$$
\lim _ {x \rightarrow \infty} \frac {f}{h} = \lim _ {x \rightarrow \infty} \frac {f}{g} \cdot \frac {g}{h} = L _ {1} L _ {2}.
$$

If $L_{1}$ and $L_{2}$ are finite and nonzero, then so is $L_{1}L_{2}$ . 

**EXAMPLE 2** Show that $\sqrt{x^{2}+5}$ and $(2\sqrt{x}-1)^{2}$ grow at the same rate as $x \to \infty$ . 

**Solution** We show that the functions grow at the same rate by showing that they both grow at the same rate as the function $g(x) = x$ : 

$$
\lim _ {x \rightarrow \infty} \frac {\sqrt {x ^ {2} + 5}}{x} = \lim _ {x \rightarrow \infty} \sqrt {1 + \frac {5}{x ^ {2}}} = 1,
$$

$$
\lim _ {x \rightarrow \infty} \frac {(2 \sqrt {x} - 1) ^ {2}}{x} = \lim _ {x \rightarrow \infty} \left(\frac {2 \sqrt {x} - 1}{\sqrt {x}}\right) ^ {2} = \lim _ {x \rightarrow \infty} \left(2 - \frac {1}{\sqrt {x}}\right) ^ {2} = 4.
$$

## Order and Oh-Notation

The “little-oh” and “big-oh” notation was invented by number theorists over a hundred years ago and is now commonplace in mathematical analysis and computer science. According to this definition, saying $f = o(g)$ as $x \to \infty$ is another way to say that f grows slower than g as $x \to \infty$ . 

> ***DEFINITION*** A function $f$ is of smaller order than $g$ as $x \to \infty$ if $\lim_{x \to \infty} \frac{f(x)}{g(x)} = 0$ . We indicate this by writing $f = o(g)$ (" $f$ is little-oh of $g$ "). 

**EXAMPLE 3** Here we use little-oh notation. 

$$
\text {(a)} \ln x = o (x) \text {as} x \rightarrow \infty \quad \text {because} \quad \lim _ {x \rightarrow \infty} \frac {\ln x}{x} = 0
$$

$$
\text {(b)} x ^ {2} = o (x ^ {3} + 1) \text {   as   } x \to \infty \quad \text { because } \quad \lim _ {x \to \infty} \frac {x ^ {2}}{x ^ {3} + 1} = 0
$$

> ***DEFINITION*** Let $f(x)$ and $g(x)$ be positive for $x$ sufficiently large. Then $f$ is of at most the order of $g$ as $x \to \infty$ if there is a positive integer $M$ for which 
>
> $$
> \frac {f (x)}{g (x)} \leq M,
> $$
>
for $x$ sufficiently large. We indicate this by writing $f = O(g)$ (" $f$ is big-oh of $g$ "). 

**EXAMPLE 4** Here we use big-oh notation. 

$$
\text {(a)} x + \sin x = O (x) \text { as } x \rightarrow \infty \quad \text { because } \quad \frac {x + \sin x}{x} \leq 2 \text { for } x \text { sufficiently   large. }
$$

$$
(\mathbf {b}) e ^ {x} + x ^ {2} = O (e ^ {x}) \text {   as   } x \to \infty \quad \text { because } \quad \frac {e ^ {x} + x ^ {2}}{e ^ {x}} \to 1 \text {   as   } x \to \infty .
$$

$$
(\mathbf {c}) x = O (e ^ {x}) \text {   as   } x \to \infty \quad \text { because } \quad \frac {x}{e ^ {x}} \to 0 \text {   as   } x \to \infty .
$$

If you look at the definitions again, you will see that $f = o(g)$ implies $f = O(g)$ for functions that are positive for all sufficiently large x. Also, if f and g grow at the same rate, then $f = O(g)$ and $g = O(f)$ (Exercise 11). 

## Sequential vs. Binary Search

Computer scientists often measure the efficiency of an algorithm by counting the number of steps a computer must take to execute the algorithm. There can be significant differences in how efficiently algorithms perform, even if they are designed to accomplish the same task. These differences are often described using big-oh notation. Here is an example. 

One edition of Webster's International Dictionary lists about 26,000 words that begin with the letter $a$ . One way to look up a word, or to learn if it is not there, is to read through the list one word at a time until you either find the word or determine that it is not there. This method, called sequential search, makes no particular use of the words' alphabetical arrangement in the list. You are sure to get an answer, but it might take 26,000 steps. 

Another way to find the word or to learn it is not there is to go straight to the middle of the list (give or take a few words). If you do not find the word, then go to the middle of the half that contains it and forget about the half that does not. (You know which half contains it because you know the list is ordered alphabetically.) This method, called a binary search, eliminates roughly 13,000 words in a single step. If you do not find the word on the second try, then jump to the middle of the half that contains it. Continue this way until you have either found the word or divided the list in half so many times there are no words left. How many times do you have to divide the list to find the word or learn that it is not there? At most 15, because 

$$
(2 6, 0 0 0 / 2 ^ {1 5}) <   1.
$$

That certainly beats a possible 26,000 steps. 

For a list of length n, a sequential search algorithm takes on the order of n steps to find a word or determine that it is not in the list. A binary search, as the second algorithm is called, takes on the order of $\log_{2}n$ steps. The reason is that if $2^{m-1} < n \leq 2^{m}$ , then $m - 1 < \log_{2} n \leq m$ , and the number of bisections required to narrow the list to one word will be at most $m = \lceil \log_{2} n \rceil$ , the integer ceiling of the number $\log_{2} n$ . 

Big-oh notation provides a compact way to say all this. The number of steps in a sequential search of an ordered list is $O(n)$ ; the number of steps in a binary search is $O(\log_{2}n)$ . In our example, there is a big difference between the two (26,000 versus 15), and the difference can only increase with n because n grows faster than $\log_{2}n$ as $n \to \infty$ . 

## EXERCISES 7.4

## Comparisons with the Exponential $e^x$

1. Which of the following functions grow faster than $e^x$ as $x \to \infty$ ? Which grow at the same rate as $e^x$ ? Which grow slower?
a. $x - 3$ b. $x^3 + \sin^2 x$ c. $\sqrt{x}$ d. $4^x$ e. $(3/2)^x$ f. $e^{x/2}$ g. $e^x / 2$ h. $\log_{10} x$ 

2. Which of the following functions grow faster than $e^{x}$ as $x \to \infty$ ? Which grow at the same rate as $e^{x}$ ? Which grow slower?
a. $10x^{4} + 30x + 1$ b. $x \ln x - x$ c. $\sqrt{1 + x^{4}}$ d. $(5/2)^{x}$ e. $e^{-x}$ f. $xe^{x}$ g. $e^{\cos x}$ h. $e^{x-1}$ 

## Comparisons with the Power $x^{2}$

3. Which of the following functions grow faster than $x^{2}$ as $x \to \infty$ ? Which grow at the same rate as $x^{2}$ ? Which grow slower?
a. $x^{2} + 4x$ b. $x^{5} - x^{2}$ c. $\sqrt{x^{4} + x^{3}}$ d. $(x + 3)^{2}$ e. $x \ln x$ f. $2^{x}$ g. $x^{3}e^{-x}$ h. $8x^{2}$ 

4. Which of the following functions grow faster than $x^{2}$ as $x \to \infty$ ? Which grow at the same rate as $x^{2}$ ? Which grow slower?
a. $x^{2} + \sqrt{x}$ b. $10x^{2}$ c. $x^{2}e^{-x}$ d. $\log_{10}(x^{2})$ e. $x^{3} - x^{2}$ f. $(1/10)^{x}$ g. $(1.1)^{x}$ h. $x^{2} + 100x$ 

## Comparisons with the Logarithm In x

5. Which of the following functions grow faster than $\ln x$ as $x \to \infty$ ? Which grow at the same rate as $\ln x$ ? Which grow slower?
a. $\log_3 x$ b. $\ln 2x$ c. $\ln \sqrt{x}$ d. $\sqrt{x}$ e. $x$ f. $5 \ln x$ g. $1/x$ h. $e^x$ 

6. Which of the following functions grow faster than $\ln x$ as $x \to \infty$ ? Which grow at the same rate as $\ln x$ ? Which grow slower?
a. $\log_2(x^2)$ b. $\log_{10} 10x$ c. $1/\sqrt{x}$ d. $1/x^2$ e. $x - 2 \ln x$ f. $e^{-x}$ g. $\ln(\ln x)$ h. $\ln(2x + 5)$ 

## Ordering Functions by Growth Rates

7. Order the following functions from slowest growing to fastest growing as $x \to \infty$ .
a. $e^x$ b. $x^x$ c. $(\ln x)^x$ d. $e^{x/2}$ 

8. Order the following functions from slowest growing to fastest growing as $x \to \infty$ .
a. $2^{x}$ b. $x^{2}$ c. $(\ln 2)^{x}$ d. $e^{x}$ 

## Big-oh and Little-oh; Order

9. True, or false? As $x \to \infty$ ,  
a. $x = o(x)$ b. $x = o(x + 5)$ c. $x = O(x + 5)$ d. $x = O(2x)$ e. $e^x = o(e^{2x})$ f. $x + \ln x = O(x)$ g. $\ln x = o(\ln 2x)$ h. $\sqrt{x^2 + 5} = O(x)$ 

10. True, or false? As $x \to \infty$ ,  
a. $\frac{1}{x + 3} = O\left(\frac{1}{x}\right)$ b. $\frac{1}{x} + \frac{1}{x^2} = O\left(\frac{1}{x}\right)$ c. $\frac{1}{x} - \frac{1}{x^2} = o\left(\frac{1}{x}\right)$ d. $2 + \cos x = O(2)$ e. $e^x + x = O(e^x)$ f. $x \ln x = o(x^2)$ g. $\ln (\ln x) = O(\ln x)$ h. $\ln (x) = o(\ln (x^2 + 1))$ 

11. Show that if positive functions $f(x)$ and $g(x)$ grow at the same rate as $x \to \infty$ , then $f = O(g)$ and $g = O(f)$ . 

12. When is a polynomial $f(x)$ of smaller order than a polynomial $g(x)$ as $x \to \infty$ ? Give reasons for your answer. 

13. When is a polynomial $f(x)$ of at most the order of a polynomial $g(x)$ as $x \to \infty$ ? Give reasons for your answer. 

14. What do the conclusions we drew in Section 2.8 about the limits of rational functions tell us about the relative growth of polynomials as $x \to \infty$ ? 

## Other Comparisons

T 15. Investigate 

$$
\lim _ {x \rightarrow \infty} \frac {\ln (x + 1)}{\ln x}
$$

$$
\lim _ {x \rightarrow \infty} \frac {\ln (x + 9 9 9)}{\ln x}.
$$

Then use l'Hôpital's Rule to explain what you find. 

16. (Continuation of Exercise 15.) Show that the value of 

$$
\lim _ {x \to \infty} \frac {\ln (x + a)}{\ln x}
$$

is the same no matter what value you assign to the constant a. What does this say about the relative rates at which the functions $f(x) = \ln(x + a)$ and $g(x) = \ln x$ grow? 

17. Show that $\sqrt{10x + 1}$ and $\sqrt{x + 1}$ grow at the same rate as $x\to \infty$ by showing that they both grow at the same rate as $\sqrt{x}$ as $x\rightarrow \infty$ . 

18. Show that $\sqrt{x^4 + x}$ and $\sqrt{x^4 - x^3}$ grow at the same rate as $x \to \infty$ by showing that they both grow at the same rate as $x^2$ as $x \to \infty$ . 

19. Show that $e^x$ grows faster as $x \to \infty$ than $x^n$ for any positive integer $n$ , even $x^{1,000,000}$ . (Hint: What is the $n$ th derivative of $x^n$ ?) 

20. The function $e^x$ outgrows any polynomial Show that $e^x$ grows faster as $x \to \infty$ than any polynomial 

$$
a _ {n} x ^ {n} + a _ {n - 1} x ^ {n - 1} + \dots + a _ {1} x + a _ {0}.
$$

21. a. Show that $\ln x$ grows slower as $x \to \infty$ than $x^{1/n}$ for any positive integer $n$ , even $x^{1/1,000,000}$ . 

T b. Although the values of $x^{1/1,000,000}$ eventually overtake the values of $\ln x$ , you have to go way out on the x-axis before this happens. Find a value of x greater than 1 for which $x^{1/1,000,000} > \ln x$ . You might start by observing that when x > 1 the equation $\ln x = x^{1/1,000,000}$ is equivalent to the equation $\ln(\ln x) = (\ln x)/1,000,000$ . 

T c. Even $x^{1/10}$ takes a long time to overtake $\ln x$ . Experiment with a calculator to find the value of x > 10 at which the graphs of $x^{1/10}$ and $\ln x$ cross, or, equivalently, at which $\ln x = 10 \ln(\ln x)$ . Bracket the crossing point between powers of 10 and then close in by successive halving. 

## CHAPTER 7 Questions to Guide Your Review

1. How is the natural logarithm function defined as an integral? What are its domain, range, and derivative? What arithmetic properties does it have? Comment on its graph. 

2. What integrals lead to logarithms? Give examples. 

3. What are the integrals of $\tan x$ and $\cot x$ ? Of $\sec x$ and $\csc x$ ? 

4. How is the exponential function $e^x$ defined? What are its domain, range, and derivative? What laws of exponents does it obey? Comment on its graph. 

5. How are the functions $a^x$ and $\log_a x$ defined? Are there any restrictions on $a$ ? How is the graph of $\log_a x$ related to the graph of $\ln x$ ? What truth is there in the statement that there are really only one exponential function and one logarithmic function? 

6. How do you solve separable first-order differential equations? 

7. What is the law of exponential change? How can it be derived from an initial value problem? What are some of the applications of the law? 

8. What are the six basic hyperbolic functions? Comment on their domains, ranges, and graphs. What are some of the identities relating them? 

T d. (Continuation of part (c).) The value of x at which $\ln x = 10 \ln(\ln x)$ is too far out for some graphers and root finders to identify. Try it on the equipment available to you and see what happens. 

22. The function $\ln x$ grows slower than any polynomial. Show that $\ln x$ grows slower as $x \to \infty$ than any nonconstant polynomial. 

Algorithms and Searches 

23. a. Suppose you have three different algorithms for solving the same problem and each algorithm takes a number of steps that is of the order of one of the functions listed here: 

$$
n \log_ {2} n, \quad n ^ {3 / 2}, \quad n (\log_ {2} n) ^ {2}.
$$

Which of the algorithms is the most efficient in the long run? Give reasons for your answer. 

T b. Graph the functions in part (a) together to get a sense of how rapidly each one grows. 

24. Repeat Exercise 23 for the functions 

$$
n, \sqrt {n} \log_ {2} n, (\log_ {2} n) ^ {2}.
$$

25. Suppose you are looking for an item in an ordered list one million items long. How many steps might it take to find that item with a sequential search? A binary search? 

26. You are looking for an item in an ordered list 450,000 items long (the length of Webster's Third New International Dictionary). How many steps might it take to find the item with a sequential search? A binary search? 

9. What are the derivatives of the six basic hyperbolic functions? What are the corresponding integral formulas? What similarities do you see here to the six basic trigonometric functions? 

10. How are the inverse hyperbolic functions defined? Comment on their domains, ranges, and graphs. How can you find values of $\operatorname{sech}^{-1}x$ , $\operatorname{csch}^{-1}x$ , and $\coth^{-1}x$ using a calculator's keys for $\cosh^{-1}x$ , $\sinh^{-1}x$ , and $\tanh^{-1}x$ ? 

11. What integrals lead naturally to inverse hyperbolic functions? 

12. How do you compare the growth rates of positive functions as $x \to \infty$ ? 

13. What roles do the functions $e^x$ and $\ln x$ play in growth comparisons? 

14. Describe big-oh and little-oh notation. Give examples. 

15. Which is more efficient—a sequential search or a binary search? Explain. 

## CHAPTER 7 Practice Exercises

## Integration

Evaluate the integrals in Exercises 1–12. 

1. $\int e^{x}\sin (e^{x})dx$ 

2. $\int e^{t}\cos (3e^{t} - 2)dt$ 

3. $\int_0^\pi \tan \frac{x}{3} dx$ 

4. $\int_{1 / 6}^{1 / 4}2\cot \pi xdx$ 

5. $\int_{-\pi /2}^{\pi /6}\frac{\cos t}{1 - \sin t} dt$ 

6. $\int e^{x}\sec e^{x}dx$ 

7. $\int \frac{\ln(x - 5)}{x - 5} dx$ 

8. $\int \frac{\cos(1 - \ln v)}{v} dv$ 

9. $\int_{1}^{7}\frac{3}{x} dx$ 

10. $\int_{1}^{32}\frac{1}{5x} dx$ 

11. $\int_{e}^{e^2}\frac{1}{x\sqrt{\ln x}} dx$ 

12. $\int_{2}^{4}(1 + \ln t)t\ln tdt$ 

Solving Equations with Logarithmic or Exponential Terms In Exercises 13–18, solve for y. 

13. $3^{y} = 2^{y + 1}$ 

14. $4^{-y} = 3^{y + 2}$ 

$$
9 e ^ {2 y} = x ^ {2}, x > 0
$$

16. $3^{y} = 3\ln x$ 

17. $\ln(y-1)=x+\ln y$ 

18. $\ln (10\ln y) = \ln 5x$ 

Comparing Growth Rates of Functions 

19. Does $f$ grow faster, slower, or at the same rate as $g$ as $x \to \infty$ ? Give reasons for your answers.
a. $f(x) = \log_2 x$ , $g(x) = \log_3 x$ b. $f(x) = x$ , $g(x) = x + \frac{1}{x}$ c. $f(x) = x / 100$ , $g(x) = xe^{-x}$ d. $f(x) = x$ , $g(x) = \arctan x$ e. $f(x) = \operatorname{arccsc} x$ , $g(x) = 1 / x$ f. $f(x) = \sinh x$ , $g(x) = e^x$ 

20. Does $f$ grow faster, slower, or at the same rate as $g$ as $x \to \infty$ ? Give reasons for your answers. 

a. $f(x) = 3^{-x}$ , 

$$
g (x) = 2 ^ {- x}
$$

$$
f (x) = \ln 2 x,
$$

$$
g (x) = \ln x ^ {2}
$$

c. $f(x) = 10x^{3} + 2x^{2},$ 

$$
g (x) = e ^ {x}
$$

d. $f(x) = \arctan(1/x)$ , 

$$
g (x) = 1 / x
$$

e. $f(x) = \arcsin(1/x)$ , 

$$
g (x) = 1 / x ^ {2}
$$

f. $f(x) = \operatorname{sech} x,$ 

$$
g (x) = e ^ {- x}
$$

21. True, or false? Give reasons for your answers. 

a. $\frac{1}{x^2} +\frac{1}{x^4} = O\left(\frac{1}{x^2}\right)$ 

$$
\frac {1}{x ^ {2}} + \frac {1}{x ^ {4}} = O \left(\frac {1}{x ^ {4}}\right)
$$

c. $x = o(x + \ln x)$ 

d. $\ln(\ln x) = o(\ln x)$ 

e. $\arctan x = O(1)$ 

f. $\cosh x = O(e^x)$ 

22. True, or false? Give reasons for your answers.
a. $\frac{1}{x^{4}} = O\left(\frac{1}{x^{2}} + \frac{1}{x^{4}}\right)$ b. $\frac{1}{x^{4}} = o\left(\frac{1}{x^{2}} + \frac{1}{x^{4}}\right)$ c. $\ln x = o(x + 1)$ d. $\ln 2x = O(\ln x)$ e. $\sec^{-1}x = O(1)$ f. $\sinh x = O(e^{x})$ 

## Theory and Applications

23. The function $f(x) = e^{x} + x$ , being differentiable and one-to-one, has a differentiable inverse $f^{-1}(x)$ . Find the value of $df^{-1}/dx$ at the point $f(\ln 2)$ . 

24. Find the inverse of the function $f(x) = 1 + (1 / x), x \neq 0$ . Then show that $f^{-1}(f(x)) = f(f^{-1}(x)) = x$ and that 

$$
\left. \frac {d f ^ {- 1}}{d x} \right| _ {f (x)} = \frac {1}{f ^ {\prime} (x)}.
$$

25. A particle is traveling upward and to the right along the curve $y = \ln x$ . Its x-coordinate is increasing at the rate $(dx/dt) = \sqrt{x} \, \text{m/s}$ . At what rate is the y-coordinate changing at the point $(e^{2}, 2)$ ? 

26. A girl is sliding down a slide shaped like the curve $y = 3e^{-x / 3}$ . Her $y$ -coordinate is changing at the rate 

$$
d y / d t = (- 1 / 4) \sqrt {3 - y} \mathrm{m} / \mathrm{s}.
$$

At approximately what rate is her x-coordinate changing when she reaches the bottom of the slide at $x = 3 \, m$ ? 

27. The functions $f(x) = \ln 5x$ and $g(x) = \ln 3x$ differ by a constant. What constant? Give reasons for your answer. 

28. a. If $(\ln x) / x = (\ln 2) / 2$ , must $x = 2$ ? b. If $(\ln x) / x = -2\ln 2$ , must $x = 1/2$ ? Give reasons for your answers. 

29. The quotient $(\log_4 x) / (\log_2 x)$ has a constant value. What value? Give reasons for your answer. 

30. $\log_x(2)$ vs. $\log_2(x)$ . How does $f(x) = \log_x(2)$ compare with $g(x) = \log_2(x)$ ? Here is one way to find out. 

a. Use the equation $\log_a b = (\ln b) / (\ln a)$ to express $f(x)$ and $g(x)$ in terms of natural logarithms. 

b. Graph $f$ and $g$ together. Comment on the behavior of $f$ in relation to the signs and values of $g$ . 

In Exercises 31–34, solve the differential equation. 

31. $\frac{dy}{dx} = \sqrt{y}\cos^2\sqrt{y}$ 

32. $y' = \frac{3y(x + 1)^2}{y - 1}$ 

33. $yy' = \sec y^2\sec^2 x$ 

34. $y \cos^{2} x dy + \sin x dx = 0$ 

In Exercises 35–38, solve the initial value problem. 

35. $\frac{dy}{dx} = e^{-x - y - 2},\quad y(0) = -2$ 36. $\frac{dy}{dx} = \frac{y\ln y}{1 + x^2},\quad y(0) = e^2$ 

37. $xdy - (y + \sqrt{y})dx = 0, y(1) = 1$ 

38. $y^{-2}\frac{dx}{dy} = \frac{e^x}{e^{2x} + 1},\quad y(0) = 1$ 

39. What is the age of a sample of charcoal in which 90% of the carbon-14 originally present has decayed? 

40. Cooling a pie A deep-dish apple pie, whose internal temperature was $104\ °C$ when removed from the oven, was set out on a breezy $5\ °C$ porch to cool. Fifteen minutes later, the pie's internal temperature was $82\ °C$ . How long did it take the pie to cool from there to $21\ °C$ ? 

41. Find the length of the curve $y = \ln(e^{x} - 1) - \ln(e^{x} + 1)$ , $\ln 2 \leq x \leq \ln 3$ . 

42. In 1934, the Austrian biologist Ludwig von Bertalanffy derived and published the von Bertalanffy growth equation, which continues to be widely used and is especially important in fisheries studies. Let $L(t)$ denote the length of a fish at time $t$ and assume $L(0) = L_0$ . The von Bertalanffy equation is 

$$
\frac {d L}{d t} = k (A - L),
$$

where $A = \lim_{t \to \infty} L(t)$ is the asymptotic length of the fish and k is a proportionality constant. 

Assume that $L(t)$ is the length in meters of a shark of age t years. In addition, assume A = 3, $L(0) = 0.5 \, \text{m}$ , and $L(5) = 1.75 \, \text{m}$ . 

a. Solve the von Bertalanffy differential equation. 

b. What is $L(10)$ ? 

c. When does $L = 2.5 \, \text{m}$ ? 

## CHAPTER 7

## Additional and Advanced Exercises

1. Let $A(t)$ be the area of the region in the first quadrant enclosed by the coordinate axes, the curve $y = e^{-x}$ , and the vertical line $x = t, t > 0$ . Let $V(t)$ be the volume of the solid generated by revolving the region about the $x$ -axis. Find the following limits.
a. $\lim_{t\to\infty}A(t)\quad\mathbf{b.}\lim_{t\to\infty}V(t)/A(t)\quad\mathbf{c.}\lim_{t\to0^{+}}V(t)/A(t)$ 

2. Varying a logarithm's base 

a. Find $\lim \log_{a}2$ as $a \rightarrow 0^{+}, 1^{-}, 1^{+}$ , and $\infty$ . 

T b. Graph $y = \log_{a} 2$ as a function of a over the interval $0 < a \leq 4$ . 

3. Graph $f(x) = \tan^{-1}x + \tan^{-1}(1 / x)$ for $-5 \leq x \leq 5$ . Then use calculus to explain what you see. How would you expect $f$ to behave beyond the interval $[-5, 5]$ ? Give reasons for your answer. 

T 4. Graph $f(x) = (\sin x)^{\sin x}$ over $[0, 3\pi]$ . Explain what you see. 

5. Even-odd decompositions 

a. Suppose that $g$ is an even function of $x$ and $h$ is an odd function of $x$ . Show that if $g(x) + h(x) = 0$ for all $x$ , then $g(x) = 0$ for all $x$ and $h(x) = 0$ for all $x$ . 

b. Use the result in part (a) to show that if $f(x) = f_{E}(x) + f_{O}(x)$ is the sum of an even function $f_{E}(x)$ and an odd function $f_{O}(x)$ , then 

$$
f _ {E} (x) = \bigl (f (x) + f (- x) \bigr) / 2
$$

$$
f _ {O} (x) = \bigl (f (x) - f (- x) \bigr) / 2
$$

c. What is the significance of the result in part (b)? 

6. Let $g$ be a function that is differentiable throughout an open interval containing the origin. Suppose $g$ has the following properties.
i. $g(x + y) = \frac{g(x) + g(y)}{1 - g(x)g(y)}$ for all real numbers $x, y$ , and $x + y$ in the domain of $g$ .
ii. $\lim_{h\to 0}g(h) = 0$ iii. $\lim_{h\to 0}\frac{g(h)}{h} = 1$ a. Show that $g(0) = 0$ .
b. Show that $g'(x) = 1 + [g(x)]^2$ . 

c. Find $g(x)$ by solving the differential equation in part (b). 

7. Center of mass Find the center of mass of a thin plate of constant density covering the region in the first and fourth quadrants enclosed by the curves $y = 1/(1 + x^{2})$ and $y = -1/(1 + x^{2})$ and by the lines x = 0 and x = 1. 

8. Solid of revolution The region between the curve $y = 1 / (2\sqrt{x})$ and the $x$ -axis from $x = 1 / 4$ to $x = 4$ is revolved about the $x$ -axis to generate a solid. 

a. Find the volume of the solid. 

b. Find the centroid of the region. 

9. The Rule of 70 If you use the approximation $\ln 2 \approx 0.70$ (in place of 0.69314 ...), you can derive a rule of thumb that says, "To estimate how many years it will take an amount of money to double when invested at r percent compounded continuously, divide r into 70." For instance, an amount of money invested at 5% will double in about 70/5 = 14 years. If you want it to double in 10 years instead, you have to invest it at 70/10 = 7%. Show how the Rule of 70 is derived. (A similar "Rule of 72" uses 72 instead of 70, because 72 has more integer factors.) 

10. Urban gardening A vegetable garden 15 m wide is to be grown between two buildings, which are 150 m apart along an east-west line. If the buildings are 60 m and 105 m tall, where should the garden be placed in order to receive the maximum number of hours of sunlight exposure? (Hint: Determine the value of x in the accompanying figure that maximizes sunlight exposure for the garden.) 

![[268e8e461e3cf5c95483734dc9456046a2aad4575ea85fe8a42c2612f45a7dd6.jpg|image]]


![[ea5ec7d80f4c859ab9d27db83b136f1b03d8e654fbc1814aac1b6fbecf527bd6.jpg|image]]


# Techniques of Integration

![[02be1889efb30b5f0a264cb318e01a7a1357a92283a7b8f890766a2c30bc8a4d.jpg|image]]


OVERVIEW The Fundamental Theorem tells us how to evaluate a definite integral once we have an antiderivative for the integrand function. However, finding antiderivatives (or indefinite integrals) is not as straightforward as finding derivatives. In this chapter we study a number of important techniques that apply to finding integrals for specialized classes of functions such as trigonometric functions, products of certain functions, and rational functions. Since we cannot always find an antiderivative, we develop numerical methods for calculating definite integrals. We also study integrals for which the domain or range is infinite, called improper integrals.
