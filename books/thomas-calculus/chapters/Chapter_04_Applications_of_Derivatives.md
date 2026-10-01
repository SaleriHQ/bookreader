---
title: "Chapter 4: Applications of Derivatives"
order: 4
---

# Chapter 4: Applications of Derivatives

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

![教材插图](/books/thomas-calculus/assets/9f766a3dea929e00d2367a160f537cfc1523fadd60bd9d45c92022bd845f4366.jpg)


OVERVIEW One of the most important applications of the derivative is its use as a tool for finding the optimal (best) solutions to problems. For example, what are the height and diameter of the cylinder of largest volume that can be inscribed in a given sphere? What are the dimensions of the strongest rectangular wooden beam that can be cut from a cylindrical log of given diameter? How many items should a manufacturer produce to maximize profit? 

In this chapter we apply derivatives to find extreme values of functions, to determine and analyze the shapes of graphs, and to solve equations numerically. We also investigate how to recover a function from its derivative. The key to many of these applications is the Mean Value Theorem, which connects the derivative and the average change of a function.



## 4.1 Extreme Values of Functions on Closed Intervals

This section shows how to locate and identify extreme (maximum or minimum) values of a function from its derivative. Once we can do this, we can solve a variety of optimization problems (see Section 4.6). The domains of the functions we consider are intervals or unions of separate intervals. 

![教材插图](/books/thomas-calculus/assets/85f3445fea5853105af20d5c16edd67339edb0ba2e2458f0ac621c1f8e19c7cd.jpg)



FIGURE 4.1 Absolute extrema for the sine and cosine functions on $[-\pi/2, \pi/2]$ . These values can depend on the domain of a function.


> ***DEFINITIONS*** Let $f$ be a function with domain $D$ . Then $f$ has an absolute maximum value on $D$ at a point $c$ if 
>
> $$
> f (x) \leq f (c) \quad \text {   for   all   } x \text {   in   } D
> $$
>
> and an absolute minimum value on D at c if 
>
> $$
> f (x) \geq f (c) \quad \text {   for   all   } x \text {   in   } D.
> $$
>
Maximum and minimum values are called extreme values of the function f. Absolute maxima or minima are also referred to as global maxima or minima. 

For example, on the closed interval $[-\pi/2, \pi/2]$ the function $f(x) = \cos x$ takes on an absolute maximum value of 1 (once) and an absolute minimum value of 0 (twice). On the same interval, the function $g(x) = \sin x$ takes on a maximum value of 1 and a minimum value of -1 (Figure 4.1). 

Functions defined by the same equation or formula can have different extrema (maximum or minimum values), depending on the domain. A function might not have a maximum or minimum if the domain is unbounded or fails to contain an endpoint. We see this in the following example. 


**EXAMPLE 1** The absolute extrema of the following functions on their domains can be seen in Figure 4.2. Each function has the same defining equation, $y = x^{2}$ , but the domains vary.


<table><tr><td>Function rule</td><td>Domain D</td><td>Absolute extrema on D</td></tr><tr><td>(a) <eq>y = x^{2}</eq></td><td><eq>(-\infty, \infty)</eq></td><td>No absolute maximumAbsolute minimum of 0 at <eq>x = 0</eq></td></tr><tr><td>(b) <eq>y = x^{2}</eq></td><td><eq>[0, 2]</eq></td><td>Absolute maximum of 4 at <eq>x = 2</eq>Absolute minimum of 0 at <eq>x = 0</eq></td></tr><tr><td>(c) <eq>y = x^{2}</eq></td><td><eq>(0, 2]</eq></td><td>Absolute maximum of 4 at <eq>x = 2</eq>No absolute minimum</td></tr><tr><td>(d) <eq>y = x^{2}</eq></td><td><eq>(0, 2)</eq></td><td>No absolute extrema</td></tr></table>

![教材插图](/books/thomas-calculus/assets/e30d63eca69a2490c5c987369ba5cd20a346f4fab09e26cad4542396bdb80107.jpg)


![教材插图](/books/thomas-calculus/assets/c6b2bb10692cdc7c8ff5229a15acc8f94ae85c38f8884ca5af7573ea57694acc.jpg)



(b) abs max and min


![教材插图](/books/thomas-calculus/assets/c74d7d5228c3bce66d68740a27a8a747256561f48c5d003ecaf093ff12b8bdfc.jpg)



(c) abs max only


![教材插图](/books/thomas-calculus/assets/66a0297ce1cc471b5732bb2f282f81f01d3e49b52c2a4b5e72f642ed09214815.jpg)



(d) no max or min



FIGURE 4.2 Graphs for Example 1.


**HISTORICAL BIOGRAPHY**

Daniel Bernoulli (1700–1789) 

Daniel Bernoulli was the second son of mathematician Johann Bernoulli. In 1724, Bernoulli published his Exercitationes mathematicae that attracted considerable attention. 

To know more, visit the companion Website. 

Some of the functions in Example 1 do not have a maximum or a minimum value. The following theorem asserts that a function which is continuous over (or on) a finite closed interval $[a, b]$ has an absolute maximum and an absolute minimum value on the interval. We look for these extreme values when we graph a function. 

**THEOREM 1 – The Extreme Value Theorem**

If f is continuous on a closed interval $[a,b]$ , then f attains both an absolute maximum value M and an absolute minimum value m in $[a,b]$ . That is, there are numbers $x_{1}$ and $x_{2}$ in $[a,b]$ with $f(x_{1}) = m$ , $f(x_{2}) = M$ , and $m \leq f(x) \leq M$ for all x in $[a,b]$ . 

The proof of the Extreme Value Theorem requires a detailed knowledge of the real number system (see Appendix A.9) and we will not give it here. Figure 4.3 illustrates possible locations for the absolute extrema of a continuous function on a closed interval $[a, b]$ . As we observed for the function $y = \cos x$ , it is possible that an absolute minimum (or absolute maximum) may occur at two or more different points of the interval. 

The requirements in Theorem 1 that the interval be closed and finite, and that the function be continuous, are essential. Without them, the conclusion of the theorem need not hold. Example 1 shows that an absolute extreme value may not exist if the interval fails to be both closed and finite. The exponential function $y = e^{x}$ over $(-\infty, \infty)$ shows that 

![教材插图](/books/thomas-calculus/assets/28770bea173b1062db15e2ddba83961122b3995342a7cc05ba988c59d4ae0a79.jpg)



FIGURE 4.4 Even a single point of discontinuity can keep a function from having either a maximum or a minimum value on a closed interval. The function


$$
y = \left\{ \begin{array}{l l} x, & 0 \leq x <   1 \\ 0, & x = 1 \end{array} \right.
$$

is continuous at every point of $[0,1]$ except $x = 1$ , yet its graph over $[0,1]$ does not have a highest point. 

![教材插图](/books/thomas-calculus/assets/5587fc4bc2a7c5a85c7a1a1c5b46d68d6514f95d8bbd5ceb8dbfaa8c4c5b8afb.jpg)



FIGURE 4.3 Some possibilities for a continuous function's maximum and minimum on a closed interval $[a, b]$ .


neither extreme value need exist on an infinite interval. Figure 4.4 shows that the continuity requirement cannot be omitted. 

### Local (Relative) Extreme Values

Figure 4.5 shows a graph with five points where a function has extreme values on its domain $[a, b]$ . The function's absolute minimum occurs at $a$ even though at $e$ the function's value is smaller than at any other point nearby. The curve rises as $x$ approaches $c$ from the left, then falls to the right of $c$ , making $f(c)$ a maximum locally. The function attains its absolute maximum at $d$ . We now define what we mean by local extrema. 

> ***DEFINITIONS*** A function f has a local maximum value at a point c within its domain D if $f(x) \leq f(c)$ for all $x \in D$ lying in some open interval containing c. 
>
> A function f has a local minimum value at a point c within its domain D if $f(x) \geq f(c)$ for all $x \in D$ lying in some open interval containing c. 
>
> If the domain of $f$ is the closed interval $[a, b]$ , then $f$ has a local maximum at the endpoint $x = a$ if $f(x) \leq f(a)$ for all $x$ in some half-open interval $[a, a + \delta), \delta > 0$ . Likewise, $f$ has a local maximum at an interior point $x = c$ if $f(x) \leq f(c)$ for all $x$ in some open interval $(c - \delta, c + \delta), \delta > 0$ , and a local maximum at the endpoint $x = b$ if $f(x) \leq f(b)$ for all $x$ in some half-open interval $(b - \delta, b], \delta > 0$ . The inequalities are reversed for local minimum values. In Figure 4.5, the function $f$ has local maxima at $c$ and $d$ and local minima at $a, e$ , and $b$ . Local extrema are also called relative extrema. Some functions can have infinitely many local extrema, even over a finite interval. One example is the function $f(x) = \sin(1/x)$ on the interval (0, 1]. (We graphed this function in Figure 2.41.) 
>
An absolute maximum is also a local maximum. Being the largest value overall, it is also the largest value in its immediate neighborhood. Hence, a list of all local maxima will automatically include the absolute maximum if there is one. Similarly, a list of all local minima will include the absolute minimum if there is one. 

![教材插图](/books/thomas-calculus/assets/fa7b0925034899892c17d98f9481a2891ad772c2e380d5522c5365c0874802db.jpg)



FIGURE 4.6 A curve with a local maximum value. The slope at c, simultaneously the limit of nonpositive numbers and nonnegative numbers, is zero.


![教材插图](/books/thomas-calculus/assets/7e2879880a60c6b3f64d4e08eecda24d38113ee688ac4b24944a298f9545ec1a.jpg)



FIGURE 4.5 How to identify types of maxima and minima for a function with domain $a \leq x \leq b$ .


### Finding Extrema

The next theorem explains why we usually need to investigate only a few values to find a function's extrema. 

THEOREM 2—The First Derivative Theorem for Local Extreme Values
If f has a local maximum or minimum value at an interior point c of its domain, and if $f'$ is defined at c, then 

$$
f ^ {\prime} (c) = 0.
$$

Proof To prove that $f'(c)$ is zero at a local extremum, we show first that $f'(c)$ cannot be positive and second that $f'(c)$ cannot be negative. The only number that is neither positive nor negative is zero, so that is what $f'(c)$ must be. 

To begin, suppose that $f$ has a local maximum value at $x = c$ (Figure 4.6) so that $f(x) - f(c) \leq 0$ for all values of $x$ near enough to $c$ . Since $c$ is an interior point of $f$ 's domain, $f'(c)$ is defined by the two-sided limit 

$$
\lim _ {x \to c} \frac {f (x) - f (c)}{x - c}.
$$

This means that the right-hand and left-hand limits both exist at $x = c$ and equal $f'(c)$ . When we examine these limits separately, we find that 

$$
f ^ {\prime} (c) = \lim _ {x \rightarrow c ^ {+}} \frac {f (x) - f (c)}{x - c} \leq 0. \quad \text { Because } x - c > 0 \text { and } f (x) \leq f (c)\tag{1}
$$

Similarly, 

$$
f ^ {\prime} (c) = \lim _ {x \rightarrow c ^ {-}} \frac {f (x) - f (c)}{x - c} \geq 0. \quad \text { Because } x - c <   0 \text { and } f (x) \leq f (c)\tag{2}
$$

Together, Equations (1) and (2) imply $f'(c) = 0$ . 

This proves the theorem for local maximum values. To prove it for local minimum values, we simply use $f(x) \geq f(c)$ , which reverses the inequalities in Formulas (1) and (2). 

![教材插图](/books/thomas-calculus/assets/b5f98f9ff783a552e5842a8b682f0ff360b8be8bac6ea7e6561744c2e0df2b2c.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/614e76dccb4c277a497a31b3fb70bd47a13907d856d497e6a34105b5001ff14e.jpg)



FIGURE 4.7 Critical points without extreme values. (a) $y' = 3x^2$ is 0 at $x = 0$ , but $y = x^3$ has no extremum there.  
(b) $y' = (1/3)x^{-2/3}$ is undefined at $x = 0$ , but $y = x^{1/3}$ has no extremum there.


Theorem 2 says that a function's first derivative is always zero at an interior point where the function has a local extreme value and the derivative is defined. If we recall that all the domains we consider are intervals or unions of separate intervals, the only places where a function $f$ can possibly have an extreme value (local or global) are 

1. interior points where $f' = 0$ , 

$$
\text {   At   } x = c \text {   and   } x = e \text {   in   Fig.4.5   }
$$

2. interior points where $f'$ is undefined, 

At $x = d$ in Fig.4.5 

3. endpoints of an interval in the domain of $f$ . At $x = a$ and $x = b$ in Fig. 4.5 

The following definition helps us to summarize these results. 

> ***DEFINITION*** An interior point of the domain of a function $f$ where $f'$ is zero or undefined is a critical point of $f$ . 

Thus the only domain points where a continuous function on a closed and finite interval can assume extreme values are critical points and endpoints. However, be careful not to misinterpret what is being said here. A function may have a critical point at x = c without having a local extreme value there. For instance, both of the functions $y = x^{3}$ and $y = x^{1/3}$ have critical points at the origin, but neither function has a local extreme value at the origin. Instead, each function has a point of inflection there (see Figure 4.7). We define and explore inflection points in Section 4.4. 

If the interval is not closed or not finite (such as a < x < b or a < x < $\infty$ ), we have seen that absolute extrema need not exist. However, many problems that ask for extreme values call for finding the absolute extrema of a continuous function on a closed and finite interval. Theorem 1 assures us that such values exist; Theorem 2 tells us that they are taken on only at critical points and endpoints. Often we can simply list these points and calculate the corresponding function values to find what the largest and smallest values are, and where they are located. 

Finding the Absolute Extrema of a Continuous Function f on a Finite Closed Interval 

1. Find all critical points of $f$ on the interval. 

2. Evaluate f at all critical points and endpoints. 

3. Take the largest and smallest of these values. 

**EXAMPLE 2** Find the absolute maximum and minimum values of $f(x) = x^{2}$ on [-2,1].

**Solution** The function is differentiable over its entire domain, so the only critical point occurs where $f'(x) = 2x = 0$ , namely $x = 0$ . We need to check the function's values at $x = 0$ and at the endpoints $x = -2$ and $x = 1$ : 

Critical point value: $f(0) = 0$ 

Endpoint values: 

$$
f (- 2) = 4
$$

$$
f (1) = 1.
$$

The function has an absolute maximum value of 4 at x = -2 and an absolute minimum value of 0 at x = 0. 

**EXAMPLE 3** Find the absolute maximum and minimum values of $f(x) = 10x(2 - \ln x)$ on the interval $[1, e^2]$ . 

![教材插图](/books/thomas-calculus/assets/a9b81b44ef2fe9b368598a63adece932502ab9bbf2cb31d098f52a8641f9da69.jpg)



FIGURE 4.8 The extreme values of $f(x) = 10x(2 - \ln x)$ on $[1, e^2]$ occur at $x = e$ and $x = e^2$ (Example 3).


![教材插图](/books/thomas-calculus/assets/e79a559015f36698d4e7533dcbd0e5d9e71a7f90819cab93a0832e910c3acbd2.jpg)



FIGURE 4.9 The extreme values of $f(x) = x^{2/3}$ on $[-2, 3]$ occur at x = 0 and x = 3 (Example 4).


**Solution** Figure 4.8 suggests that $f$ has its absolute maximum value near $x = 3$ and its absolute minimum value of 0 at $x = e^2$ . Let's verify this observation. 

We evaluate the function at the critical points and endpoints and take the largest and smallest of the resulting values. 

The first derivative is 

$$
f ^ {\prime} (x) = 1 0 (2 - \ln x) - 1 0 x \left(\frac {1}{x}\right) = 1 0 (1 - \ln x).
$$

The only critical point in the domain $[1, e^{2}]$ is the point x = e, where $\ln x = 1$ . The values of f at this one critical point and at the endpoints are 

Critical point value: 

Endpoint values: 

$$
\begin{array}{c} f (e) = 1 0 e \big (2 - \ln e \big) = 1 0 e \\ f (1) = 1 0 \big (2 - \ln 1 \big) = 2 0 \\ f (e ^ {2}) = 1 0 e ^ {2} \big (2 - 2 \ln e \big) = 0. \end{array}
$$

We can see from this list that the function's absolute maximum value is $10e \approx 27.2$ ; it occurs at the critical interior point $x = e$ . The absolute minimum value is 0 and occurs at the right endpoint $x = e^2$ . 

**EXAMPLE 4** Find the absolute maximum and minimum values of $f(x) = x^{2/3}$ on the interval $[-2, 3]$ . 

**Solution** We evaluate the function at the critical points and endpoints and take the largest and smallest of the resulting values. 

The first derivative, 

$$
f ^ {\prime} (x) = \frac {2}{3} x ^ {- 1 / 3} = \frac {2}{3 \sqrt [ 3 ]{x}},
$$

has no zeros but is undefined at the interior point x = 0. The values of f at this one critical point and at the endpoints are 

Critical point value: 

Endpoint values: 

$$
\begin{array}{c} f (0) = 0 \\ f (- 2) = (- 2) ^ {2 / 3} = \sqrt [ 3 ]{4} \\ f (3) = (3) ^ {2 / 3} = \sqrt [ 3 ]{9}. \end{array}
$$

We can see from this list that the function's absolute maximum value is $\sqrt[3]{9} \approx 2.08$ , and it occurs at the right endpoint $x = 3$ . The absolute minimum value is 0, and it occurs at the interior point $x = 0$ where the graph has a cusp (Figure 4.9). 

Theorem 1 leads to a method for finding the absolute maxima and absolute minima of a differentiable function on a finite closed interval. On more general domains, such as $(0,1)$ , $[2,5)$ , $[1,\infty)$ , and $(-\infty,\infty)$ , absolute maxima and minima may or may not exist. To determine if they exist, and to locate them when they do, we will develop methods to sketch the graph of a differentiable function. With knowledge of the asymptotes of the function, as well as the local maxima and minima, we can deduce the locations of the absolute maxima and minima, if any. For now we can find the absolute maxima and the absolute minima of a function on a finite closed interval by comparing the values of the function at its critical points and at the endpoints of the interval. For a differentiable function on a closed and finite interval $[a,b]$ , these are the only points where the extrema have the potential to occur. 

### EXERCISES 4.1

#### Finding Extrema from Graphs

In Exercises 1–6, determine from the graph whether the function has any absolute extreme values on $[a, b]$ . Then explain how your answer is consistent with Theorem 1. 


1.


![教材插图](/books/thomas-calculus/assets/c9812cc8584b6d0ca8052b8ee1da6c7fe84f54ac98a3af8d0ece6c3e5244eb72.jpg)


![教材插图](/books/thomas-calculus/assets/0939c3a4a1f84362bd3f70e81b69b7b4d1d8c9f6475fcec7a1fc96f233e7fd54.jpg)



3.


![教材插图](/books/thomas-calculus/assets/85f1af3c763ab554c8b60796b2bc08eccd25b7c762826cc59f4e14651554aa8d.jpg)


![教材插图](/books/thomas-calculus/assets/f99b14eaad1401246573ced970955467b7edd2f00645062fa51695b624521646.jpg)



5.


![教材插图](/books/thomas-calculus/assets/c8441e006c310682150d2db27a7ba88dcf3d7e69564d71412dad2ea16c97b730.jpg)



6.


![教材插图](/books/thomas-calculus/assets/ee1845edd896b9119404c42a9bb908b26bb15d2a9e0a790eb37b26fd336c862f.jpg)


In Exercises 7–10, find the absolute extreme values and where they occur. 


7.


![教材插图](/books/thomas-calculus/assets/02ea452fa58a4241ac7cc4af69029b1a5e453847b0e7999c06269979fb4c263c.jpg)



8.


![教材插图](/books/thomas-calculus/assets/c10e8d06c9d98ea45d90c06aaa9688d317e18c0163e5c42603572cb773ab76f0.jpg)



9.


![教材插图](/books/thomas-calculus/assets/31217a87a48d30cc1a618d2ad683338c79147a0cf2cbd7b0ed21517091389c05.jpg)



10.


![教材插图](/books/thomas-calculus/assets/3f0f5cd10d3a078dce2368df11ac9f6d338c35ea39b003f79ec6151a4b9f73f6.jpg)



In Exercises 11–14, match the table with a graph.


<table><tr><td>11. x</td><td><eq>f&#x27;(x)</eq></td></tr><tr><td>a</td><td>0</td></tr><tr><td>b</td><td>0</td></tr><tr><td>c</td><td>5</td></tr></table>

$$
f ^ {\prime} (x)
$$

<table><tr><td>12. x</td><td><eq>f&#x27;(x)</eq></td></tr><tr><td>a</td><td>0</td></tr><tr><td>b</td><td>0</td></tr><tr><td>c</td><td>-5</td></tr><tr><td>14. x</td><td><eq>f&#x27;(x)</eq></td></tr><tr><td>a</td><td>does not exist</td></tr><tr><td>b</td><td>does not exist</td></tr><tr><td>c</td><td>-1.7</td></tr></table>

<table><tr><td>a</td><td>does not exist</td></tr><tr><td>b</td><td>0</td></tr><tr><td>c</td><td>-2</td></tr></table>

![教材插图](/books/thomas-calculus/assets/dd7545cfbbf4a0506db945351b6da5ed643296c75524ea450073c8a0869c6963.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/edbceb438938d2a1f5b067a61ee1b60b8f2a4d93c108d9ad38e4daf0d7fe34c9.jpg)


![教材插图](/books/thomas-calculus/assets/74bdd297f2da73a8c016d18b5edb4398e764a2d8e1050f07f99771c9e6d4cfd7.jpg)



(c)



(b)


![教材插图](/books/thomas-calculus/assets/3a3f555ed8fc2724e60c2eb4add2af563b5f9058de10730f9ada63f18e8fd288.jpg)



(d)


In Exercises 15–20, sketch the graph of each function and determine whether the function has any absolute extreme values on its domain. Explain how your answer is consistent with Theorem 1. 

$$
f (x) = | x |, - 1 <   x <   2
$$

$$
y = 2 - x ^ {2}, - 1 <   x <   1
$$

$$
g (x) = \left\{ \begin{array}{l l} - x, & 0 \leq x <   1 \\ x - 1, & 1 \leq x \leq 2 \end{array} \right.
$$

$$
h (x) = \left\{ \begin{array}{l l} \frac {1}{x}, & - 1 \leq x <   0 \\ \sqrt {x}, & 0 \leq x \leq 4 \end{array} \right.
$$

$$
y = 3 \sin x, \quad 0 <   x <   2 \pi
$$

$$
f (x) = \left\{ \begin{array}{l l} x + 1, & - 1 \leq x <   0 \\ \cos x, & 0 <   x \leq \frac {\pi}{2} \end{array} \right.
$$

#### Absolute Extrema on Finite Closed Intervals

In Exercises 21–36, find the absolute maximum and minimum values of each function on the given interval. Then graph the function. Identify the points on the graph where the absolute extrema occur, and include their coordinates. 

21. $f(x) = \frac{2}{3} x - 5, -2 \leq x \leq 3$ 

22. $f(x) = -x - 4,\quad -4 \leq x \leq 1$ 

23. $f(x) = x^{2} - 1, -1\leq x\leq 2$ 

24. $f(x) = 4 - x^3, -2 \leq x \leq 1$ 

25. $F(x) = -\frac{1}{x^2}, 0.5 \leq x \leq 2$ 

26. $F(x) = -\frac{1}{x}, -2 \leq x \leq -1$ 

27. $h(x) = \sqrt[3]{x}, -1\leq x\leq 8$ 

28. $h(x) = -3x^{2 / 3}, - 1\leq x\leq 1$ 

29. $g(x) = \sqrt{4 - x^2}, -2\leq x\leq 1$ 

30. $g(x) = -\sqrt{5 - x^2}, -\sqrt{5} \leq x \leq 0$ 

31. $f(\theta) = \sin \theta, -\frac{\pi}{2} \leq \theta \leq \frac{5\pi}{6}$ 

32. $f(\theta) = \tan \theta, -\frac{\pi}{3} \leq \theta \leq \frac{\pi}{4}$ 

33. $g(x) = \csc x, \frac{\pi}{3} \leq x \leq \frac{2\pi}{3}$ 

34. $g(x) = \sec x, -\frac{\pi}{3} \leq x \leq \frac{\pi}{6}$ 

35. $f(t) = 2 - |t|, -1\leq t\leq 3$ 

36. $f(t) = |t - 5|$ , $4 \leq t \leq 7$ 

In Exercises 37–40: 

a. Find the absolute maximum and minimum values of each function on the given interval. 

T b. Graph the function, identify the points on the graph where the absolute extrema occur, and include their coordinates. 

37. $g(x) = xe^{-x}, -1 \leq x \leq 1$ 

38. $h(x) = \ln (x + 1) - \frac{x}{2}, 0 \leq x \leq 3$ 

39. $f(x) = \frac{1}{x} + \ln x, \quad 0.5 \leq x \leq 4$ 

40. $g(x) = e^{-x^2}, - 2\leq x\leq 1$ 

In Exercises 41–44, find the function's absolute maximum and minimum values and say where they occur. 

41. $f(x) = x^{4/3}, -1 \leq x \leq 8$ 

42. $f(x) = x^{5/3}, -1 \leq x \leq 8$ 

43. $g(\theta) = \theta^{3 / 5}, - 32\leq \theta \leq 1$ 

44. $h(\theta) = 3\theta^{2/3}, -27 \leq \theta \leq 8$ 

Finding Critical Points 

In Exercises 45–56, determine all critical points and all domain endpoints for each function. 

45. $y = x^{2} - 6x + 7$ 

46. $f (x) = 6 x ^ {2} - x ^ {3}$

47. $f (x) = x (4 - x) ^ {3} \quad 4 8. g (x) = (x - 1) ^ {2} (x - 3) ^ {2}$

49. $y = x^{2} + \frac{2}{x}$ 

50. $f(x) = \frac{x^2}{x - 2}$ 

51. $y = x^{2} - 32\sqrt{x}$ 

52. $g(x) = \sqrt{2x - x^2}$ 

53. $y = \ln (x + 1) - \tan^{-1}x$ 

54. $y = 2\sqrt{1 - x^2} + \arcsin x$ 

55. $y = x^{3} + 3x^{2} - 24x + 7$

56. $y = x - 3x^{2 / 3}$

#### Theory and Examples

In Exercises 57 and 58, give reasons for your answers. 

57. Let $f(x) = (x - 2)^{2/3}$ . 

a. Does $f'(2)$ exist? 

b. Show that the only local extreme value of f occurs at x = 2. 

c. Does the result in part (b) contradict the Extreme Value Theorem? 

d. Repeat parts (a) and (b) for $f(x) = (x - a)^{2/3}$ , replacing 2 by a. 

58. Let $f(x) = |x^3 - 9x|$ . 

a. Does $f'(0)$ exist? 

b. Does $f'(3)$ exist? 

c. Does $f'(-3)$ exist? 

d. Determine all extrema of $f$ . 

In Exercises 59–62, show that the function has neither an absolute minimum nor an absolute maximum on its natural domain. 

59. $y = x^{11} + x^3 +x - 5$ 

60. $y = 3x + \tan x$ 

61. $y = \frac{1 - e^x}{e^x + 1}$ 

62. $y = 2x - \sin 2x$ 

63. A minimum with no derivative The function $f(x) = |x|$ has an absolute minimum value at $x = 0$ even though $f$ is not differentiable at $x = 0$ . Is this consistent with Theorem 2? Give reasons for your answer. 

64. Even functions If an even function $f(x)$ has a local maximum value at x = c, can anything be said about the value of f at x = -c? Give reasons for your answer. 

65. Odd functions If an odd function $g(x)$ has a local minimum value at x = c, can anything be said about the value of g at x = -c? Give reasons for your answer. 

66. No critical points or endpoints exist We know how to find the extreme values of a continuous function $f(x)$ by investigating its values at critical points and endpoints. But what if there are no critical points or endpoints? What happens then? Do such functions really exist? Give reasons for your answers. 

67. The function 

$$
V (x) = x (1 0 - 2 x) (1 6 - 2 x), \quad 0 <   x <   5,
$$

models the volume of a box. 

a. Find the extreme values of V. 

b. Interpret any values found in part (a) in terms of the volume of the box. 

68. Cubic functions Consider the cubic function 

$$
f (x) = a x ^ {3} + b x ^ {2} + c x + d.
$$

a. Show that $f$ can have 0, 1, or 2 critical points. Give examples and graphs to support your argument. 

b. How many local extreme values can $f$ have? 

69. Maximum height of a vertically moving body The height of a body moving vertically is given by 

$$
s = - \frac {1}{2} g t ^ {2} + v _ {0} t + s _ {0}, \quad g > 0,
$$

with $s$ in meters and $t$ in seconds. Find the body's maximum height. 

70. Peak alternating current Suppose that at any given time t (in seconds) the current i (in amperes) in an alternating current circuit is $i = 2 \cos t + 2 \sin t$ . What is the peak current for this circuit (largest magnitude)? 

T Graph the functions in Exercises 71–74. Then find the extreme values of the function on the interval and say where they occur. 

71. $f (x) = | x - 2 | + | x + 3 |, - 5 \leq x \leq 5$

72. $g (x) = | x - 1 | - | x - 5 |, - 2 \leq x \leq 7$

73. $h(x) = |x + 2| - |x - 3|$ , $-\infty < x < \infty$ 

74. $k(x) = |x + 1| + |x - 3|$ , $-\infty < x < \infty$ 

#### COMPUTER EXPLORATIONS

In Exercises 75–82, you will use a CAS to help find the absolute extrema of the given function over the specified closed interval. Perform the following steps. 

a. Plot the function over the interval to see its general behavior there. 

b. Find the interior points where $f' = 0$ . (In some exercises, you may have to use the numerical equation solver to approximate a solution.) You may want to plot $f'$ as well. 

c. Find the interior points where $f'$ does not exist. 

d. Evaluate the function at all points found in parts (b) and (c) and at the endpoints of the interval. 

e. Find the function's absolute extreme values on the interval and identify where they occur. 

75. $f (x) = x ^ {4} - 8 x ^ {2} + 4 x + 2, [ - 2 0 / 2 5, 6 4 / 2 5 ]$

76. $f (x) = - x ^ {4} + 4 x ^ {3} - 4 x + 1, [ - 3 / 4, 3 ]$

77. $f (x) = x ^ {2 / 3} (3 - x), [ - 2, 2 ]$

78. $f (x) = 2 + 2 x - 3 x ^ {2 / 3}, [ - 1, 1 0 / 3 ]$

79. $f (x) = \sqrt {x} + \cos x, [ 0, 2 \pi ]$

80. $f (x) = x ^ {3 / 4} - \sin x + \frac {1}{2}, [ 0, 2 \pi ]$

81. $f (x) = \pi x ^ {2} e ^ {- 3 x / 2}, [ 0, 5 ]$

82. $f (x) = \ln (2 x + x \sin x), [ 1, 1 5 ]$

## 4.2 The Mean Value Theorem

![教材插图](/books/thomas-calculus/assets/6e78053ed0a38666169e6590a3cc4ee9bcce769702fb0041ba1a29e8d3649d1c.jpg)



(a)


We know that constant functions have zero derivatives, but could there be a more complicated function whose derivative is always zero? If two functions have identical derivatives over an interval, how are the functions related? We answer these and other questions in this chapter by applying the Mean Value Theorem. First we introduce a special case, known as Rolle's Theorem, which is used to prove the Mean Value Theorem. 

![教材插图](/books/thomas-calculus/assets/9f76e13f3877168cfefdeb215ed005396362d7c1d4c8f9b73dafc10a825e2a1e.jpg)



(b)



FIGURE 4.10 Rolle's Theorem says that a differentiable curve has at least one horizontal tangent between any two points where it crosses a horizontal line. It may have just one (a), or it may have more (b).


### Rolle's Theorem

As suggested by its graph, if a differentiable function crosses a horizontal line at two different points, there is at least one point between them where the tangent to the graph is horizontal and the derivative is zero (Figure 4.10). We now state and prove this result. 

**THEOREM 3—Rolle's Theorem**

Suppose that $y = f(x)$ is continuous over the closed interval $[a, b]$ and differentiable at every point of its interior $(a, b)$ . If $f(a) = f(b)$ , then there is at least one number c in $(a, b)$ at which $f'(c) = 0$ . 

Proof Being continuous, $f$ assumes absolute maximum and minimum values on $[a, b]$ by Theorem 1. These can occur only 

1. at interior points where $f'$ is zero, 

2. at interior points where $f'$ does not exist, 

3. at endpoints of the interval, in this case a and b. 

**HISTORICAL BIOGRAPHY**

(1652-1719) 

French mathematician Michel Rolle was largely self-educated in mathematics. He worked as an accountant and studied algebra and the Diophantine equations whenever he found time. 

To know more, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/ee354ce9bb1ec60dbf18815ecb60ad74b2253292c3fa12ad4ca5a874c96eb2ba.jpg)



FIGURE 4.12 The only real zero of the polynomial $y = x^{3} + 3x + 1$ is the one shown here where the curve crosses the x-axis between -1 and 0 (Example 1).


By hypothesis, f has a derivative at every interior point. That rules out possibility (2), leaving us with interior points where $f' = 0$ and with the two endpoints a and b. 

If either the maximum or the minimum occurs at a point $c$ between $a$ and $b$ , then $f'(c) = 0$ by Theorem 2 in Section 4.1, and we have found a point for Rolle's Theorem. 

If both the absolute maximum and the absolute minimum occur at the endpoints, then because $f(a) = f(b)$ it must be the case that f is a constant function with $f(x) = f(a) = f(b)$ for every $x \in [a, b]$ . Therefore, $f'(x) = 0$ and the point c can be taken anywhere in the interior $(a, b)$ . 

The hypotheses of Theorem 3 are essential. If they fail at even one point, the graph may not have a horizontal tangent (Figure 4.11). 

![教材插图](/books/thomas-calculus/assets/1c8956504380534f55cebaf18d9c602892c4f891781bd7e02bf73f86a688eb86.jpg)



(a) Discontinuous at an endpoint of $[a, b]$


![教材插图](/books/thomas-calculus/assets/8c70ebabb349bed40cc0a62ae8a0bd53001ae05db50ddcd50303255467e71c16.jpg)



(b) Discontinuous at an interior point of $[a, b]$


![教材插图](/books/thomas-calculus/assets/ee8d4e39b3a3e53a9354048892bf851cd6a1c3e35304ac80b5315b16a641198e.jpg)



(c) Continuous on $[a, b]$ but not differentiable at an interior point



FIGURE 4.11 There may be no horizontal tangent line if the hypotheses of Rolle's Theorem do not hold.


Rolle's Theorem may be combined with the Intermediate Value Theorem to show when there is only one real solution of an equation $f(x) = 0$ , as we illustrate in the next example. 

**EXAMPLE 1** Show that the equation

$$
x ^ {3} + 3 x + 1 = 0
$$

has exactly one real solution. 

**Solution** We define the continuous function 

$$
f (x) = x ^ {3} + 3 x + 1.
$$

Since $f(-1) = -3$ and $f(0) = 1$ , the Intermediate Value Theorem tells us that the graph of $f$ crosses the $x$ -axis somewhere in the open interval $(-1, 0)$ . (See Figure 4.12.) Now, if there were even two points $x = a$ and $x = b$ where $f(x)$ was zero, Rolle's Theorem would guarantee the existence of a point $x = c$ between them where $f'$ was zero. However, the derivative 

$$
f ^ {\prime} (x) = 3 x ^ {2} + 3
$$

is never zero (because it is always positive). Therefore, $f$ has no more than one zero. 

Tangent line parallel to secant line 

![教材插图](/books/thomas-calculus/assets/7b785779fbb3f5b1b6b34b83a3d5da9bab42e597e00d0f26143190a91fb63be1.jpg)



FIGURE 4.13 Geometrically, the Mean Value Theorem says that somewhere between a and b the curve has at least one tangent line parallel to the secant line that joins A and B.


**HISTORICAL BIOGRAPHY Joseph-Louis Lagrange (1736–1813)**

Lagrange was born in Turin, Italy. He enjoyed studying mathematics, despite his father's wish that he study law. Lagrange's mathematical contributions began as early as 1754 with the discovery of the calculus of variations and continued with applications to mechanics in 1756. 

To know more, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/4520c68371c45ea592a10aee4613a2de6300343b2fcdc2ce1ef3bce94f966c14.jpg)



FIGURE 4.14 The graph of f and the secant line AB over the interval [a, b].


![教材插图](/books/thomas-calculus/assets/aea657a7063bd401569b931ccd1db70f99fd883bf6517ef5a74d205494cde383.jpg)



FIGURE 4.15 The secant line AB is the graph of the function $g(x)$ . The function $h(x) = f(x) - g(x)$ gives the vertical distance between the graphs of f and g at x.


### The Mean Value Theorem

The Mean Value Theorem, which was first stated by Joseph-Louis Lagrange, is a slanted version of Rolle's Theorem (Figure 4.13). The Mean Value Theorem guarantees that there is a point where the tangent line is parallel to the secant line that joins $A$ and $B$ . 

**THEOREM 4—The Mean Value Theorem**

Suppose $y = f(x)$ is continuous over a closed interval $[a, b]$ and differentiable on the interval's interior $(a, b)$ . Then there is at least one point $c$ in $(a, b)$ at which 

$$
\frac {f (b) - f (a)}{b - a} = f ^ {\prime} (c).\tag{1}
$$

Proof We picture the graph of f and draw a line through the points $A(a, f(a))$ and $B(b, f(b))$ . (See Figure 4.14.) The secant line is the graph of the function 

$$
g (x) = f (a) + \frac {f (b) - f (a)}{b - a} (x - a)\tag{2}
$$

(point-slope equation). The vertical difference between the graphs of $f$ and $g$ at $x$ is 

$$
\begin{array}{l} h (x) = f (x) - g (x) \\ \qquad = f (x) - f (a) - \frac {f (b) - f (a)}{b - a} (x - a). \end{array}\tag{3}
$$

Figure 4.15 shows the graphs of $f, g$ , and $h$ together. 

The function $h$ satisfies the hypotheses of Rolle's Theorem on $[a, b]$ . It is continuous on $[a, b]$ and differentiable on $(a, b)$ because both $f$ and $g$ are. Also, $h(a) = h(b) = 0$ because the graphs of $f$ and $g$ both pass through $A$ and $B$ . Therefore $h'(c) = 0$ at some point $c \in (a, b)$ . This is the point we want for Equation (1) in the theorem. 

To verify Equation (1), we differentiate both sides of Equation (3) with respect to x and then set x = c: 

$$
h ^ {\prime} (x) = f ^ {\prime} (x) - \frac {f (b) - f (a)}{b - a} \quad \text { Derivative   of   Eq. } \tag {3}
$$

$$
h ^ {\prime} (c) = f ^ {\prime} (c) - \frac {f (b) - f (a)}{b - a} \quad \text { Evaluated   at } x = c
$$

$$
0 = f ^ {\prime} (c) - \frac {f (b) - f (a)}{b - a} \qquad h ^ {\prime} (c) = 0
$$

$$
f ^ {\prime} (c) = \frac {f (b) - f (a)}{b - a}, \quad \text { Rearranged }
$$

which is what we set out to prove. 

![教材插图](/books/thomas-calculus/assets/77807415a3dbcf5870d23de64cf50b48e938037383106779f077b51df2c82715.jpg)



FIGURE 4.16 The function $f(x) = \sqrt{1 - x^2}$ satisfies the hypotheses (and conclusion) of the Mean Value Theorem on $[-1, 1]$ even though $f$ is not differentiable at $-1$ and $1$ .


![教材插图](/books/thomas-calculus/assets/0d1e7bb7b09fc1d40db8d77472b7b9908cde144dad3988c745b9fa1f23da6ecb.jpg)



FIGURE 4.17 As we find in Example 1, c = 1 is where the tangent line is parallel to the secant line.


![教材插图](/books/thomas-calculus/assets/bf3bc894139c08c17c22579f69c68ed1e19cbcbc335b724386d44d0b371d1ec1.jpg)



FIGURE 4.18 Distance versus elapsed time for the car in Example 3.


The hypotheses of the Mean Value Theorem do not require f to be differentiable at either a or b. One-sided continuity at a and b is enough (Figure 4.16). 

**EXAMPLE 2** The function $f(x) = x^2$ (Figure 4.17) is continuous for $0 \leq x \leq 2$ and differentiable for $0 < x < 2$ . Since $f(0) = 0$ and $f(2) = 4$ , the Mean Value Theorem says that at some point $c$ in the interval, the derivative $f'(x) = 2x$ must have the value $(4 - 0) / (2 - 0) = 2$ . In this case we can identify $c$ by solving the equation $2c = 2$ to get $c = 1$ . However, it is not always easy to find $c$ algebraically, even though we know it always exists. 

### A Physical Interpretation

We can think of the number $(f(b) - f(a))/(b - a)$ as the average change in f over $[a, b]$ and can view $f'(c)$ as an instantaneous change. Then the Mean Value Theorem says that the instantaneous change at some interior point is equal to the average change over the entire interval. 

**EXAMPLE 3** If a car accelerating from zero takes 8 s to go 176 m, its average velocity for the 8-s interval is $176/8 = 22 \, m/s$ . The Mean Value Theorem says that at some point during the acceleration, the speedometer must read exactly $79.2 \, km/h \, (22 \, m/s)$ (Figure 4.18). 

### Mathematical Consequences

At the beginning of the section, we asked what kind of function has a zero derivative over an interval. The first corollary of the Mean Value Theorem provides the answer that only constant functions have zero derivatives. 

COROLLARY 1 If $f'(x) = 0$ at each point x of an open interval $(a, b)$ , then $f(x) = C$ for all $x \in (a, b)$ , where C is a constant. 

Proof We want to show that f has a constant value on the interval $(a, b)$ . We do so by showing that if $x_{1}$ and $x_{2}$ are any two points in $(a, b)$ with $x_{1} < x_{2}$ , then $f(x_{1}) = f(x_{2})$ . Now f satisfies the hypotheses of the Mean Value Theorem on $[x_{1}, x_{2}]$ : It is differentiable at every point of $[x_{1}, x_{2}]$ and hence continuous at every point as well. Therefore, 

$$
\frac {f (x _ {2}) - f (x _ {1})}{x _ {2} - x _ {1}} = f ^ {\prime} (c)
$$

at some point $c$ between $x_{1}$ and $x_{2}$ . Since $f' = 0$ throughout $(a, b)$ , this equation implies successively that 

$$
\frac {f (x _ {2}) - f (x _ {1})}{x _ {2} - x _ {1}} = 0, \quad f (x _ {2}) - f (x _ {1}) = 0, \quad \text { and } \quad f (x _ {1}) = f (x _ {2}).
$$

At the beginning of this section, we also asked about the relationship between two functions that have identical derivatives over an interval. The next corollary tells us that their values on the interval have a constant difference. 

COROLLARY 2 If $f'(x) = g'(x)$ at each point $x$ in an open interval $(a, b)$ , then there exists a constant $C$ such that $f(x) = g(x) + C$ for all $x \in (a, b)$ . That is, $f - g$ is a constant function on $(a, b)$ . 

![教材插图](/books/thomas-calculus/assets/22e1c01e2d59bdbd4815cec0a26fa4d14c5308ae474078837af4f4a7abcd779a.jpg)



FIGURE 4.19 From a geometric point of view, Corollary 2 of the Mean Value Theorem says that the graphs of functions with identical derivatives on an interval can differ only by a vertical shift. The graphs of the functions with derivative 2x are the parabolas $y = x^{2} + C$ , shown here for several values of C.


Proof At each point $x \in (a, b)$ the derivative of the difference function h = f - g is 

$$
h ^ {\prime} (x) = f ^ {\prime} (x) - g ^ {\prime} (x) = 0.
$$

Thus, $h(x) = C$ on $(a, b)$ by Corollary 1. That is, $f(x) - g(x) = C$ on $(a, b)$ , so $f(x) = g(x) + C$ . 

Corollaries 1 and 2 are also true if the open interval $(a, b)$ fails to be finite. That is, they remain true if the interval is $(a, \infty)$ , $(- \infty, b)$ , or $(- \infty, \infty)$ . 

Corollary 2 will play an important role when we discuss antiderivatives in Section 4.8. It tells us, for instance, that since the derivative of $f(x) = x^{2}$ on $(-\infty, \infty)$ is 2x, any other function with derivative 2x on $(-\infty, \infty)$ must have the formula $x^{2} + C$ for some value of C (Figure 4.19). 

**EXAMPLE 4** Find the function $f(x)$ whose derivative is $\sin x$ and whose graph passes through the point $(0,2)$ . 

**Solution** Since the derivative of $g(x) = -\cos x$ is $g'(x) = \sin x$ , we see that f and g have the same derivative. Corollary 2 then says that $f(x) = -\cos x + C$ for some constant C. Since the graph of f passes through the point $(0, 2)$ , the value of C is determined from the condition that $f(0) = 2$ : 

$$
f (0) = - \cos (0) + C = 2, \quad \text { so } \quad C = 3.
$$

The function is $f(x) = -\cos x + 3$ . 

### Finding Velocity and Position from Acceleration

We can use Corollary 2 to find the velocity and position functions of an object moving along a vertical line. Assume the object or body is falling freely from rest with acceleration $9.8 \, m/sec^{2}$ . We assume the position $s(t)$ of the body is measured positive downward from the rest position (so the vertical coordinate line points downward, in the direction of the motion, with the rest position at 0). 

We know that the velocity $v(t)$ is some function whose derivative is 9.8. We also know that the derivative of $g(t) = 9.8t$ is 9.8. By Corollary 2, 

$$
v (t) = 9. 8 t + C
$$

for some constant C. Since the body falls from rest, $v(0) = 0$ . Thus 

$$
9. 8 (0) + C = 0, \quad \text { and } \quad C = 0.
$$

The velocity function must be $v(t) = 9.8t$ . What about the position function $s(t)$ ? 

We know that $s(t)$ is some function whose derivative is 9.8t. We also know that the derivative of $f(t) = 4.9t^{2}$ is 9.8t. By Corollary 2, 

$$
s (t) = 4. 9 t ^ {2} + C
$$

for some constant C. Since $s(0) = 0$ , 

$$
4. 9 (0) ^ {2} + C = 0, \quad \text { and } \quad C = 0.
$$

The position function is $s(t) = 4.9t^{2}$ until the body hits the ground. 

The ability to find functions from their rates of change is one of the very powerful tools of calculus. As we will see, it lies at the heart of the mathematical developments in Chapter 5. 

### EXERCISES 4.2

#### Checking the Mean Value Theorem

Find the value or values of c that satisfy the equation 

$$
\frac {f (b) - f (a)}{b - a} = f ^ {\prime} (c)
$$

in the conclusion of the Mean Value Theorem for the functions and intervals in Exercises 1–8. 

1. $f (x) = x ^ {2} + 2 x - 1, [ 0, 1 ] \quad \mathbf {2 .} f (x) = x ^ {2 / 3}, [ 0, 1 ]$

3. $f (x) = x + \frac {1}{x}, \left[ \frac {1}{2}, 2 \right] \quad \mathbf {4 .} f (x) = \sqrt {x - 1}, [ 1, 3 ]$

5. $f(x) = \arcsin x, [-1, 1]$

6. $f(x) = \ln (x - 1), [2, 4]$

7. $f(x) = x^{3} - x^{2},[-1,2]$ 

8. $g(x) = \begin{cases} x^3, & -2 \leq x \leq 0 \\ x^2, & 0 < x \leq 2 \end{cases}$ 

Which of the functions in Exercises 9–14 satisfy the hypotheses of the Mean Value Theorem on the given interval, and which do not? Give reasons for your answers. 

9. $f(x) = x^{2/3}, [-1,8]$ 

10. $f(x) = x^{4 / 5},[0,1]$ 

11. $f(x) = \sqrt{x(1 - x)}, [0,1]$ 

12. $f(x) = \left\{ \begin{array}{ll}\frac{\sin x}{x}, & -\pi \leq x <   0\\ 0, & x = 0 \end{array} \right.$ 

13. $f(x) = \begin{cases} x^2 - x, & -2 \leq x \leq -1 \\ 2x^2 - 3x - 3, & -1 < x \leq 0 \end{cases}$ 

14. $f(x) = \begin{cases} 2x - 3, & 0 \leq x \leq 2 \\ 6x - x^2 - 7, & 2 < x \leq 3 \end{cases}$ 

15. The function 

$$
f (x) = \left\{ \begin{array}{l l} x, & 0 \leq x <   1 \\ 0, & x = 1 \end{array} \right.
$$

is zero at $x = 0$ and $x = 1$ and differentiable on (0,1), but its derivative on (0,1) is never zero. How can this be? Doesn't Rolle's Theorem say the derivative has to be zero somewhere in (0,1)? Give reasons for your answer. 

16. For what values of a, m, and b does the function 

$$
f (x) = \left\{ \begin{array}{l l} 3, & x = 0 \\ - x ^ {2} + 3 x + a, & 0 <   x <   1 \\ m x + b, & 1 \leq x \leq 2 \end{array} \right.
$$

satisfy the hypotheses of the Mean Value Theorem on the interval [0, 2]? 

Roots (Zeros) 

17. a. Plot the zeros of each polynomial on a line together with the zeros of its first derivative. 

i) $y = x^{2} - 4$ 

$$
\text { ii) } y = x ^ {2} + 8 x + 1 5
$$

iii) $y = x^{3} - 3x^{2} + 4 = (x + 1)(x - 2)^{2}$ 

iv) $y = x^{3} - 33x^{2} + 216x = x(x - 9)(x - 24)$ 

b. Use Rolle's Theorem to prove that between every two zeros of $x^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$ there lies a zero of 

$$
n x ^ {n - 1} + (n - 1) a _ {n - 1} x ^ {n - 2} + \dots + a _ {1}.
$$

18. Suppose that $f''$ is continuous on $[a, b]$ and that $f$ has three zeros in the interval. Show that $f''$ has at least one zero in $(a, b)$ . Generalize this result. 

19. Show that if $f'' > 0$ throughout an interval $[a, b]$ , then $f'$ has at most one zero in $[a, b]$ . What if $f'' < 0$ throughout $[a, b]$ instead? 

20. Show that a cubic polynomial can have at most three real zeros. 

Show that the functions in Exercises 21–28 have exactly one zero in the given interval. 

21. $f(x) = x^{4} + 3x + 1,[-2, - 1]$ 

22. $f(x) = x^{3} + \frac{4}{x^{2}} + 7, (-\infty, 0)$ 

23. $g(t) = \sqrt{t} +\sqrt{1 + t} -4,$ $(0,\infty)$ 

24. $g(t) = \frac{1}{1 - t} +\sqrt{1 + t} -3.1,(-1,1)$ 

25. $r(\theta) = \theta +\sin^2\left(\frac{\theta}{3}\right) - 8,\quad (-\infty ,\infty)$ 

26. $r (\theta) = 2 \theta - \cos^ {2} \theta + \sqrt {2}, (- \infty , \infty)$

27. $r (\theta) = \sec^ {2} \theta - \cos (2 \theta) - 1, (0, \pi / 2)$

28. $r(\theta) = 3\tan \theta -\cot \theta -\theta ,(0,\pi /2)$ 

#### Finding Functions from Derivatives

29. Suppose that $f(-1) = 3$ and that $f'(x) = 0$ for all $x$ . Must $f(x) = 3$ for all $x$ ? Give reasons for your answer. 

30. Suppose that $f(0) = 5$ and that $f'(x) = 2$ for all x. Must $f(x) = 2x + 5$ for all x? Give reasons for your answer. 

31. Suppose that $f'(x) = 2x$ for all $x$ . Find $f(2)$ if 

a. $f(0) = 0$ b. $f(1) = 0$ c. $f(-2) = 3$ . 

32. What can be said about functions whose derivatives are constant? Give reasons for your answer. 

In Exercises 33–38, find all possible functions with the given derivative. 

33. a. $y' = x$ b. $y' = x^2$ c. $y' = x^3$ 

34. a. $y' = 2x$ b. $y' = 2x - 1$ c. $y' = 3x^2 + 2x - 1$ 

35. a. $y' = -\frac{1}{x^2}$ b. $y' = 1 - \frac{1}{x^2}$ c. $y' = 5 + \frac{1}{x^2}$ 

36. a. $y' = \frac{1}{2\sqrt{x}}$ b. $y' = \frac{1}{\sqrt{x}}$ c. $y' = 4x - \frac{1}{\sqrt{x}}$ 

37. a. $y' = \sin 2t$ b. $y' = \cos \frac{t}{2}$ c. $y' = \sin 2t + \cos \frac{t}{2}$ 

38. a. $y' = \sec^{2}\theta$ b. $y' = \sqrt{\theta}$ c. $y' = \sqrt{\theta} - \sec^{2}\theta$ 

In Exercises 39–42, find the function with the given derivative whose graph passes through the point P. 

39. $f^{\prime}(x) = 2x - 1, P(0,0)$ 

40. $g'(x) = \frac{1}{x^{2}} + 2x, \quad P(-1,1)$ 

41. $f^{\prime}(x) = e^{2x}, P\left(0,\frac{3}{2}\right)$ 

42. $r ^ {\prime} (t) = \sec t \tan t - 1, P (0, 0)$

#### Finding Position from Velocity or Acceleration

Exercises 43–46 give the velocity v = ds/dt and initial position of an object moving along a coordinate line. Find the object's position at time t. 

43. $v = 9. 8 t + 5, \quad s (0) = 1 0$

44. $v = 3 2 t - 2, \quad s (0. 5) = 4$

45. $v = \sin \pi t, s (0) = 0$

46. $v = \frac {2}{\pi} \cos \frac {2 t}{\pi}, s (\pi^ {2}) = 1$

Exercises 47–50 give the acceleration $a = d^{2}s/dt^{2}$ , initial velocity, and initial position of an object moving on a coordinate line. Find the object's position at time t. 

47. $a = e^{t}$ , $\upsilon(0) = 20$ , $s(0) = 5$ 

48. $a = 9.8, v(0) = -3, s(0) = 0$ 

49. $a = -4 \sin 2t,\quad v(0) = 2,\quad s(0) = -3$ 

50. $a = \frac{9}{\pi^{2}} \cos \frac{3t}{\pi}$ , $v(0) = 0$ , $s(0) = -1$ 

#### Applications

51. Temperature change It took 14 s for a mercury thermometer to rise from $-19^{\circ}C$ to $100^{\circ}C$ when it was taken from a freezer and placed in boiling water. Show that somewhere along the way, the mercury was rising at the rate of $8.5^{\circ}C/s$ . 

52. A trucker handed in a ticket at a tollbooth showing that in 2 hours she had covered 230 km on a toll road with speed limit 100 km/h. The trucker was cited for speeding. Why? 

53. Classical accounts tell us that a 170-oar trireme (ancient Greek or Roman warship) once covered 184 sea miles in 24 hours. Explain why at some point during this feat the trireme's speed exceeded 7.5 knots (sea or nautical miles per hour). 

54. A marathoner ran the 42-km New York City Marathon in 2.2 hours. Show that at least twice the marathoner was running at exactly 18 km/h, assuming the initial and final speeds are zero. 

55. Show that at some instant during a 2-hour automobile trip the car's speedometer reading will equal the average speed for the trip. 

56. Free fall on the moon On our moon, the acceleration of gravity is $1.6 \, m/s^{2}$ . If a rock is dropped into a crevasse, how fast will it be going just before it hits bottom 30 s later? 

#### Theory and Examples

57. The geometric mean of a and b The geometric mean of two positive numbers a and b is the number $\sqrt{ab}$ . Show that the value of c in the conclusion of the Mean Value Theorem for $f(x) = 1/x$ on an interval of positive numbers $[a, b]$ is $c = \sqrt{ab}$ . 

58. The arithmetic mean of $a$ and $b$ The arithmetic mean of two numbers $a$ and $b$ is the number $(a + b)/2$ . Show that the value of $c$ in the conclusion of the Mean Value Theorem for $f(x) = x^2$ on any interval $[a, b]$ is $c = (a + b)/2$ . 

T 59. Graph the function 

$$
f (x) = \sin x \sin (x + 2) - \sin^ {2} (x + 1).
$$

What does the graph do? Why does the function behave this way? Give reasons for your answers. 

60. Rolle's Theorem

a. Construct a polynomial $f(x)$ that has zeros at $x = -2, -1, 0, 1$ , and 2. 

b. Graph $f$ and its derivative $f'$ together. How is what you see related to Rolle's Theorem? 

c. Do $g(x) = \sin x$ and its derivative $g'$ illustrate the same phenomenon as f and $f'$ ? 

61. Unique solution Assume that $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$ . Also assume that $f(a)$ and $f(b)$ have opposite signs and that $f' \neq 0$ between $a$ and $b$ . Show that $f(x) = 0$ exactly once between $a$ and $b$ . 

62. Parallel tangent line Assume that $f$ and $g$ are differentiable on $[a, b]$ and that $f(a) = g(a)$ and $f(b) = g(b)$ . Show that there is at least one point between $a$ and $b$ where the tangent lines to the graphs of $f$ and $g$ are parallel or the same line. Illustrate with a sketch. 

63. Suppose that $f'(x) \leq 1$ for $1 \leq x \leq 4$ . Show that $f(4) - f(1) \leq 3$ . 

64. Suppose that $0 < f'(x) < 1/2$ for all $x$ -values. Show that $f(-1) < f(1) < 2 + f(-1)$ . 

65. Show that $|\cos x - 1| \leq |x|$ for all $x$ -values. (Hint: Consider $f(t) = \cos t$ on the closed interval with the endpoints 0 and $x$ .) 

66. Show that for any numbers $a$ and $b$ , the sine inequality $|\sin b - \sin a| \leq |b - a|$ is true. 

67. If the graphs of two differentiable functions $f(x)$ and $g(x)$ start at the same point in the plane and the functions have the same rate of change at every point, do the graphs have to be identical? Give reasons for your answer. 

68. If $|f(w) - f(x)| \leq |w - x|$ for all values $w$ and $x$ and $f$ is a differentiable function, show that $-1 \leq f'(x) \leq 1$ for all $x$ -values. 

69. Assume that $f$ is differentiable on $a \leq x \leq b$ and that $f(b) < f(a)$ . Show that $f'$ is negative at some point between $a$ and $b$ . 

70. Let f be a function defined on an interval $[a, b]$ . What conditions could you place on f to guarantee that 

$$
\min f ^ {\prime} \leq \frac {f (b) - f (a)}{b - a} \leq \max f ^ {\prime},
$$

where $\min f'$ and $\max f'$ refer to the minimum and maximum values of $f'$ on $[a, b]$ ? Give reasons for your answers. 

T 71. Use the inequalities in Exercise 70 to estimate $f(0.1)$ if $f'(x) = 1 / (1 + x^4\cos x)$ for $0 \leq x \leq 0.1$ and $f(0) = 1$ . 

T 72. Use the inequalities in Exercise 70 to estimate $f(0.1)$ if $f'(x) = 1 / (1 - x^4)$ for $0 \leq x \leq 0.1$ and $f(0) = 2$ . 

73. Let $f$ be differentiable at every value of $x$ and suppose that $f(1) = 1$ , that $f' < 0$ on $(-\infty, 1)$ , and that $f' > 0$ on $(1, \infty)$ .  
a. Show that $f(x) \geq 1$ for all $x$ . 

b. Must $f'(1) = 0$ ? Explain. 

74. Let $f(x) = px^2 + qx + r$ be a quadratic function defined on a closed interval $[a, b]$ . Show that there is exactly one point $c$ in $(a, b)$ at which $f$ satisfies the conclusion of the Mean Value Theorem. 

## 4.3 Monotonic Functions and the First Derivative Test

In sketching the graph of a differentiable function, it is useful to know where it increases (rises from left to right) and where it decreases (falls from left to right) over an interval. This section gives a test to determine where it increases and where it decreases. We also show how to test the critical points of a function to identify whether local extreme values are present. 

### Increasing Functions and Decreasing Functions

As another corollary to the Mean Value Theorem, we show that functions with positive derivatives are increasing functions and functions with negative derivatives are decreasing functions. A function that is either increasing on an interval or decreasing on an interval is said to be monotonic on the interval. 

COROLLARY 3 Suppose that $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$ . If $f'(x) > 0$ at each point $x \in (a, b)$ , then $f$ is increasing on $[a, b]$ . If $f'(x) < 0$ at each point $x \in (a, b)$ , then $f$ is decreasing on $[a, b]$ . 

Proof Let $x_{1}$ and $x_{2}$ be any two points in $[a, b]$ with $x_{1} < x_{2}$ . The Mean Value Theorem applied to f on $[x_{1}, x_{2}]$ says that 

$$
f (x _ {2}) - f (x _ {1}) = f ^ {\prime} (c) (x _ {2} - x _ {1})
$$

for some c between $x_{1}$ and $x_{2}$ . The sign of the right-hand side of this equation is the same as the sign of $f'(c)$ because $x_{2} - x_{1}$ is positive. Therefore, $f(x_{2}) > f(x_{1})$ if $f'$ is positive on $(a, b)$ and $f(x_{2}) < f(x_{1})$ if $f'$ is negative on $(a, b)$ . 

Corollary 3 tells us that $f(x) = \sqrt{x}$ is increasing on the interval $[0, b]$ for any $b > 0$ because $f'(x) = 1 / (2\sqrt{x})$ is positive on $(0, b)$ . The derivative does not exist at $x = 0$ , but Corollary 3 still applies. The corollary is also valid for open and for infinite intervals, so $f(x) = \sqrt{x}$ is also increasing on $(0, 1)$ , on $(0, \infty)$ , and on $[0, \infty)$ . 

To find the intervals where a function $f$ is increasing or decreasing, we first find all of the critical points of $f$ . If $a < b$ are two critical points for $f$ , and if the derivative $f'$ is continuous but never zero on the interval $(a, b)$ , then by the Intermediate Value Theorem applied to $f'$ , the derivative must be everywhere positive on $(a, b)$ , or everywhere negative there. One way we can determine the sign of $f'$ on $(a, b)$ is simply by evaluating the derivative at a single point $c$ in $(a, b)$ . If $f'(c) > 0$ , then $f'(x) > 0$ for all $x$ in $(a, b)$ so $f$ is increasing on $[a, b]$ by Corollary 3; if $f'(c) < 0$ , then $f$ is decreasing on $[a, b]$ . It doesn't matter which point $c$ we choose in $(a, b)$ since the sign of $f'(c)$ is the same for all choices. Usually we pick $c$ to be a point where it is easy to evaluate $f'(c)$ . The next example illustrates how we use this procedure. 

**EXAMPLE 1** Find the critical points of $f(x) = x^{3} - 12x - 5$ and identify the open intervals on which f is increasing and those on which f is decreasing. 

**Solution** The function $f$ is everywhere continuous and differentiable. The first derivative 

$$
\begin{array}{r l} f ^ {\prime} (x) & = 3 x ^ {2} - 1 2 = 3 (x ^ {2} - 4) \\ & = 3 (x + 2) (x - 2) \end{array}
$$

![教材插图](/books/thomas-calculus/assets/158d9962e5f429c97e6feda452e071407ec9e23f046027511a7d41cb82f80102.jpg)



FIGURE 4.20 The function $f(x) = x^3 - 12x - 5$ is monotonic on three separate intervals (Example 1).


**HISTORICAL BIOGRAPHY Edmund Halley (1656–1742)**

Halley, a British biologist, geologist, sea captain, astronomer, and mathematician, encouraged Newton to write the Principia. Despite all of Halley's accomplishments, he is known today as the man who calculated the orbit of the comet of 1682. 

To know more, visit the companion Website. 

is zero at x = -2 and x = 2. These critical points subdivide the domain of f to create nonoverlapping open intervals $(-\infty, -2)$ , $(-2, 2)$ , and $(2, \infty)$ on which $f'$ is either positive or negative. We determine the sign of $f'$ by evaluating $f'$ at a convenient point in each subinterval. We evaluate $f'$ at x = -3 in the first interval, x = 0 in the second interval, and x = 3 in the third since $f'$ is relatively easy to compute at these points. The behavior of f is determined by then applying Corollary 3 to each subinterval. The results are summarized in the following table, and the graph of f is given in Figure 4.20. 

<table><tr><td>Interval</td><td><eq>-\infty &lt; x &lt; -2</eq></td><td><eq>-2 &lt; x &lt; 2</eq></td><td><eq>2 &lt; x &lt; \infty</eq></td></tr><tr><td><eq>f&#x27;</eq> evaluated</td><td><eq>f&#x27;(-3) = 15</eq></td><td><eq>f&#x27;(0) = -12</eq></td><td><eq>f&#x27;(3) = 15</eq></td></tr><tr><td>Sign of <eq>f&#x27;</eq></td><td>+</td><td>-</td><td>+</td></tr><tr><td>Behavior of <eq>f</eq></td><td>increasing</td><td>decreasing</td><td>increasing</td></tr></table>

We used “strict” less-than inequalities to identify the intervals in the summary table for Example 1, since open intervals were specified. Corollary 3 says that we could use $\leq$ inequalities as well. That is, the function f in the example is increasing on $-\infty < x \leq -2$ , decreasing on $-2 \leq x \leq 2$ , and increasing on $2 \leq x < \infty$ . We do not talk about whether a function is increasing or decreasing at a single point. 

### First Derivative Test for Local Extrema

In Figure 4.21, at the points where f has a minimum value, $f' < 0$ immediately to the left and $f' > 0$ immediately to the right. (If the point is an endpoint, there is only one side to consider.) Thus, the function is decreasing on the left of the minimum value and it is increasing on its right. Similarly, at the points where f has a maximum value, $f' > 0$ immediately to the left and $f' < 0$ immediately to the right. Thus, the function is increasing on the left of the maximum value and decreasing on its right. In summary, at a local extreme point, the sign of $f'(x)$ changes. 

![教材插图](/books/thomas-calculus/assets/1eb2dccb3888e161a97647e3514bf9ad7177d95ae5ee97cb5c886e31f081a99f.jpg)



FIGURE 4.21 The critical points of a function locate where it is increasing and where it is decreasing. The first derivative changes sign at a critical point where a local extremum occurs.


These observations lead to a test for the presence and nature of local extreme values of differentiable functions. 

### First Derivative Test for Local Extrema

Suppose that c is a critical point of a continuous function f, and that f is differentiable at every point in some interval containing c except possibly at c itself. Moving across this interval from left to right, 

1. if $f'$ changes from negative to positive at c, then f has a local minimum at c; 

2. if $f'$ changes from positive to negative at c, then f has a local maximum at c; 

3. if $f'$ does not change sign at c (that is, $f'$ is positive on both sides of c or negative on both sides), then f has no local extremum at c. 

The test for local extrema at endpoints is similar, but there is only one side to consider in determining whether $f$ is increasing or decreasing, based on the sign of $f'$ . 

Proof of the First Derivative Test Part (1). Since the sign of $f'$ changes from negative to positive at c, there are numbers a and b such that a < c < b, $f' < 0$ on $(a, c)$ , and $f' > 0$ on $(c, b)$ . If $x \in (a, c)$ , then $f(c) < f(x)$ because $f' < 0$ implies that f is decreasing on $[a, c]$ . If $x \in (c, b)$ , then $f(c) < f(x)$ because $f' > 0$ implies that f is increasing on $[c, b]$ . Therefore, $f(x) \geq f(c)$ for every $x \in (a, b)$ . By definition, f has a local minimum at c. 

Parts (2) and (3) are proved similarly. 

**EXAMPLE 2** Find the critical points of 

$$
f (x) = x ^ {1 / 3} (x - 4) = x ^ {4 / 3} - 4 x ^ {1 / 3}.
$$

Identify the open intervals on which $f$ is increasing and those on which it is decreasing. Find the function's local and absolute extreme values. 

**Solution** The function f is continuous at all x since it is the product of two continuous functions, $x^{1/3}$ and $(x - 4)$ . The first derivative, 

$$
\begin{array}{c} f ^ {\prime} (x) = \frac {d}{d x} (x ^ {4 / 3} - 4 x ^ {1 / 3}) = \frac {4}{3} x ^ {1 / 3} - \frac {4}{3} x ^ {- 2 / 3} \\ = \frac {4}{3} x ^ {- 2 / 3} (x - 1) = \frac {4 (x - 1)}{3 x ^ {2 / 3}}, \end{array}
$$

is zero at $x = 1$ and undefined at $x = 0$ . There are no endpoints in the domain, so the critical points $x = 0$ and $x = 1$ are the only places where $f$ might have an extreme value. 

The critical points partition the x-axis into open intervals on which $f'$ is either positive or negative. The sign pattern of $f'$ reveals the behavior of f between and at the critical points, as summarized in the following table. 

<table><tr><td>Interval</td><td>x &lt; 0</td><td>0 &lt; x &lt; 1</td><td>x &gt; 1</td></tr><tr><td>Sign of f&#x27;</td><td>-</td><td>-</td><td>+</td></tr><tr><td>Behavior of f</td><td>decreasing</td><td>decreasing</td><td>increasing</td></tr></table>

Corollary 3 to the Mean Value Theorem implies that f decreases on $(-\infty,0)$ , decreases on $(0,1)$ , and increases on $(1,\infty)$ . The First Derivative Test for Local Extrema tells us that f does not have an extreme value at x = 0 ( $f'$ does not change sign) and that f has a local minimum at x = 1 ( $f'$ changes from negative to positive). 

![教材插图](/books/thomas-calculus/assets/992b91cd41096ac20906352aa667ee53a1dca1d1cd4ad40e95e6da1469820cf2.jpg)



FIGURE 4.22 The function


$f(x) = x^{1/3}(x - 4)$ decreases when x < 1 and increases when x > 1 (Example 2). 

The value of the local minimum is $f(1) = 1^{1/3}(1 - 4) = -3$ . This is also an absolute minimum since $f$ is decreasing on $(-\infty, 1)$ and increasing on $(1, \infty)$ . Figure 4.22 shows this value in relation to the function's graph. 

Note that $\lim_{x\to 0}f'(x) = -\infty$ , so the graph of $f$ has a vertical tangent line at the origin. 

**EXAMPLE 3** Find the critical points of 

$$
f (x) = \left(x ^ {2} - 3\right) e ^ {x}.
$$

Identify the open intervals on which $f$ is increasing and those on which it is decreasing. Find the function's local and absolute extreme values. 

**Solution** The function $f$ is continuous and differentiable for all real numbers, so the critical points occur only at the zeros of $f'$ . 

Using the Derivative Product Rule, we find the derivative 

$$
\begin{array}{r l} f ^ {\prime} (x) & = (x ^ {2} - 3) \cdot \frac {d}{d x} e ^ {x} + \frac {d}{d x} (x ^ {2} - 3) \cdot e ^ {x} \\ & = (x ^ {2} - 3) e ^ {x} + (2 x) e ^ {x} \\ & = (x ^ {2} + 2 x - 3) e ^ {x}. \end{array}
$$

Since $e^{x}$ is never zero, the first derivative is zero if and only if 

![教材插图](/books/thomas-calculus/assets/0e7c5dc959a2870daa89dffbb2086393aef4410db0e49d2ef81a62d089cc6f4b.jpg)


$$
\begin{array}{c} x ^ {2} + 2 x - 3 = 0 \\ (x + 3) (x - 1) = 0. \end{array}
$$


FIGURE 4.23 The graph of $f(x) = (x^{2} - 3)e^{x}$ (Example 3).


The zeros x = -3 and x = 1 partition the x-axis into open intervals as follows. 

<table><tr><td>Interval</td><td>x &lt; -3</td><td>-3 &lt; x &lt; 1</td><td>1 &lt; x</td></tr><tr><td>Sign of f&#x27;</td><td>+</td><td>-</td><td>+</td></tr><tr><td>Behavior of f</td><td>increasing</td><td>decreasing</td><td>increasing</td></tr></table>

We can see from the table that there is a local maximum (about 0.299) at $x = -3$ and a local minimum (about -5.437) at $x = 1$ . The local minimum value is also an absolute minimum because $f(x) > 0$ for $|x| > \sqrt{3}$ . There is no absolute maximum. The function increases on $(-\infty, -3)$ and $(1, \infty)$ and decreases on $(-3, 1)$ . Figure 4.23 shows the graph. 

### EXERCISES 4.3

Analyzing Functions from Derivatives 

Answer the following questions about the functions whose derivatives are given in Exercises 1–14: 

a. What are the critical points of $f$ ? 

b. On what open intervals is f increasing or decreasing? 

c. At what points, if any, does f assume local maximum or minimum values? 

1. $f^{\prime}(x) = x(x - 1)$

2. $f^{\prime}(x) = (x - 1)(x + 2)$

3. $f'(x) = (x - 1)^{2}(x + 2)$

4. $f'(x) = (x - 1)^{2}(x + 2)^{2}$

5. $f'(x) = (x - 1)e^{-x}$ 

6. $f'(x) = (x - 7)(x + 1)(x + 5)$ 

7. $f'(x) = \frac{x^{2}(x - 1)}{x + 2}, \quad x \neq -2$ 

8. $f ^ {\prime} (x) = \frac {(x - 2) (x + 4)}{(x + 1) (x - 3)}, x \neq - 1, 3$

9. $f'(x) = 1 - \frac{4}{x^{2}}, \quad x \neq 0$

10. $f'(x) = 3 - \frac{6}{\sqrt{x}}, \quad x \neq 0$

11. $f'(x) = x^{-1/3}(x + 2)$ 

12. $f^{\prime}(x) = x^{-1 / 2}(x - 3)$ 

13. $f'(x) = (\sin x - 1)(2 \cos x + 1)$ , $0 \leq x \leq 2\pi$ 

14. $f'(x) = (\sin x + \cos x)(\sin x - \cos x), \quad 0 \leq x \leq 2\pi$ 

Identifying Extrema 

In Exercises 15–18: 

a. Find the open intervals on which the function is increasing and those on which it is decreasing. 

b. Identify the function's local and absolute extreme values, if any, saying where they occur. 

15.


![教材插图](/books/thomas-calculus/assets/edebc67ce1f5d96f148d3d9a879438e26ece795f17d80d5aa3c59246240f3580.jpg)


16.

![教材插图](/books/thomas-calculus/assets/a795877adc17edc42f10e1fdba5f7cde2ab285c2d3f7d481aef42560ab2c257e.jpg)



17.


![教材插图](/books/thomas-calculus/assets/935e75910e3d42af3a03f74bfcfebe1dc20b083e067b5c23788b4bf7c6b2867b.jpg)



18.


![教材插图](/books/thomas-calculus/assets/f7d97c930e6a8ed846c5337e168b7bddea282f67c2b5250f2268514334d9f1a9.jpg)


In Exercises 19–46: 

a. Find the open intervals on which the function is increasing and those on which it is decreasing. 

b. Identify the function's local extreme values, if any, saying where they occur. 

19. $g(t) = -t^2 - 3t + 3$ 

20. $g(t) = -3t^{2} + 9t + 5$ 

21. $h(x) = -x^{3} + 2x^{2}$ 

22. $h(x) = 2x^{3} - 18x$ 

23. $f(\theta) = 3\theta^{2} - 4\theta^{3}$ 

24. $f(\theta) = 6\theta -\theta^3$ 

25. $f(r) = 3r^3 +16r$ 

26. $h(r) = (r + 7)^{3}$ 

27. $f(x) = x^{4} - 8x^{2} + 16$ 

29. $H(t) = \frac{3}{2} t^4 - t^6$ 

$$
g (x) = x ^ {4} - 4 x ^ {3} + 4 x ^ {2}
$$

30. $K(t) = 15t^3 - t^5$ 

31. $f(x) = x - 6\sqrt{x - 1}$ 

32. $g(x) = 4\sqrt{x} - x^2 + 3$ 

33. $g(x) = x\sqrt{8 - x^2}$ 

34. $g(x) = x^{2}\sqrt{5 - x}$ 

35. $f(x) = \frac{x^2 - 3}{x - 2}, x \neq 2$ 

36. $f(x) = \frac{x^3}{3x^2 + 1}$ 

37. $f(x) = x^{1 / 3}(x + 8)$ 

38. $g(x) = x^{2 / 3}(x + 5)$ 

39. $h(x) = x^{1 / 3}(x^2 -4)$ 

40. $k(x) = x^{2 / 3}(x^2 -4)$ 

41. $f(x) = e^{2x} + e^{-x}$ 

42. $f(x) = e^{\sqrt{x}}$ 

43. $f(x) = x\ln x$ 

44. $f(x) = x^{2}\ln x$ 

45. $g(x) = x(\ln x)^{2}$ 

46. $g(x) = x^{2} - 2x - 4 \ln x$ 

In Exercises 47–58: 

a. Identify the function's local extreme values in the given domain, and say where they occur. 

T b. Graph the function over the given domain. Which of the extreme values, if any, are absolute? 

47. $f(x) = 2x - x^{2}, \quad -\infty < x \leq 2$ 

48. $f(x) = (x + 1)^2, -\infty < x \leq 0$ 

49. $g(x) = x^{2} - 4x + 4, 1 \leq x < \infty$ 

50. $g(x) = -x^{2} - 6x - 9, -4\leq x <   \infty$ 

51. $f(t) = 12t - t^3, -3 \leq t < \infty$ 

52. $f(t) = t^3 - 3t^2, -\infty < t \leq 3$ 

53. $h(x) = \frac{x^3}{3} - 2x^2 + 4x, 0 \leq x < \infty$ 

54. $k(x) = x^{3} + 3x^{2} + 3x + 1, \quad -\infty < x \leq 0$ 

55. $f(x) = \sqrt{25 - x^2}, - 5\leq x\leq 5$ 

56. $f(x) = \sqrt{x^2 - 2x - 3}, 3 \leq x < \infty$ 

57. $g(x) = \frac{x - 2}{x^2 - 1}, 0 \leq x < 1$ 

58. $g(x) = \frac{x^2}{4 - x^2}, -2 <   x\leq 1$ 

In Exercises 59–66: 

a. Find the local extrema of each function on the given interval, and say where they occur. 

T b. Graph the function and its derivative together. Comment on the behavior of $f$ in relation to the signs and values of $f'$ . 

59. $f(x) = \sin 2x, 0 \leq x \leq \pi$ 

60. $f (x) = \sin x - \cos x, 0 \leq x \leq 2 \pi$

61. $f(x) = \sqrt{3} \cos x + \sin x, \quad 0 \leq x \leq 2\pi$ 

62. $f(x) = -2x + \tan x, \frac{-\pi}{2} < x < \frac{\pi}{2}$ 

63. $f(x) = \frac{x}{2} - 2\sin \frac{x}{2}, 0 \leq x \leq 2\pi$ 

$$
f (x) = - 2 \cos x - \cos^ {2} x, - \pi \leq x \leq \pi
$$

$$
f (x) = \csc^ {2} x - 2 \cot x, \quad 0 <   x <   \pi
$$

$$
f (x) = \sec^ {2} x - 2 \tan x, \frac {- \pi}{2} <   x <   \frac {\pi}{2}
$$

In Exercises 67 and 68, the graph of $f'$ is given. Assume that f is continuous, and determine the x-values corresponding to local minima and local maxima. 

![教材插图](/books/thomas-calculus/assets/c2161a6ec3e99ca7abb99f9a1a6c8c91d340d9861a36118909142a0c79d53442.jpg)


In Exercises 69 and 70, the graph of $f'$ is given. Assume that $f$ has domain $(-2, 2)$ . 

a. Either use the graph to determine which intervals f is increasing on and which intervals f is decreasing on, or explain why this information cannot be determined from the graph. 

b. Either use the graph to determine which intervals f is positive on and which intervals f is negative on, or explain why this information cannot be determined from the graph. 

![教材插图](/books/thomas-calculus/assets/b8d764f116cfa48456283e1d86b0282087df22882de015d31696408c0d3c600a.jpg)


#### Theory and Examples

Show that the functions in Exercises 71 and 72 have local extreme values at the given values of $\theta$ , and say which kind of local extreme the function has. 

71. $h(\theta) = 3\cos \frac{\theta}{2}, 0 \leq \theta \leq 2\pi, \text{ at } \theta = 0$ and $\theta = 2\pi$ 

72. $h(\theta) = 5 \sin \frac{\theta}{2}, \quad 0 \leq \theta \leq \pi, \quad \text{at } \theta = 0 \text{ and } \theta = \pi$ 

73. Sketch the graph of a differentiable function $y = f(x)$ through the point (1,1) if $f'(1) = 0$ and
a. $f'(x) > 0$ for $x < 1$ and $f'(x) < 0$ for $x > 1$ ;
b. $f'(x) < 0$ for $x < 1$ and $f'(x) > 0$ for $x > 1$ ;
c. $f'(x) > 0$ for $x \neq 1$ ;
d. $f'(x) < 0$ for $x \neq 1$ . 

74. Sketch the graph of a differentiable function $y = f(x)$ that has a local minimum at (1, 1) and a local maximum at (3, 3); b. a local maximum at (1, 1) and a local minimum at (3, 3); c. local maxima at (1, 1) and (3, 3); d. local minima at (1, 1) and (3, 3). 

75. Sketch the graph of a continuous function $y = g(x)$ such that
a. $g(2) = 2, 0 < g' < 1$ for $x < 2, g'(x) \to 1^-$ as $x \to 2^-$ , $-1 < g' < 0$ for $x > 2$ , and $g'(x) \to -1^+$ as $x \to 2^+$ ;
b. $g(2) = 2, g' < 0$ for $x < 2, g'(x) \to -\infty$ as $x \to 2^-$ , $g' > 0$ for $x > 2$ , and $g'(x) \to \infty$ as $x \to 2^+$ . 

76. Sketch the graph of a continuous function $y = h(x)$ such that
a. $h(0) = 0, -2 \leq h(x) \leq 2$ for all $x, h'(x) \to \infty$ as $x \to 0^-$ , and $h'(x) \to \infty$ as $x \to 0^+$ ;
b. $h(0) = 0, -2 \leq h(x) \leq 0$ for all $x, h'(x) \to \infty$ as $x \to 0^-$ , and $h'(x) \to -\infty$ as $x \to 0^+$ . 

77. Discuss the extreme-value behavior of the function $f(x) = x \sin(1/x), x \neq 0$ . How many critical points does this function have? Where are they located on the x-axis? Does f have an absolute minimum? An absolute maximum? (See Exercise 49 in Section 2.3.) 

78. Find the open intervals on which the function $f(x) = ax^{2} + bx + c$ , $a \neq 0$ , is increasing and those on which it is decreasing. Describe the reasoning behind your answer. 

## 4.4 Concavity and Curve Sketching

79. Determine the values of constants a and b so that $f(x) = ax^{2} + bx$ has an absolute maximum at the point (1, 2). 

80. Determine the values of constants $a, b, c$ , and $d$ so that $f(x) = ax^3 + bx^2 + cx + d$ has a local maximum at the point (0, 0) and a local minimum at the point (1, -1). 

81. Locate and identify the absolute extreme values of 

a. $\ln(\cos x)$ on $[-\pi/4, \pi/3]$ , 

b. $\cos(\ln x)$ on $[1/2,2]$ . 

82. a. Prove that $f(x) = x - \ln x$ is increasing for x > 1. 

b. Using part (a), show that $\ln x < x$ if x > 1. 

83. Find the absolute maximum and the absolute minimum values of $f(x) = e^{x} - 2x$ on $[0,1]$ . 

84. Where does the periodic function $f(x) = 2e^{\sin(x/2)}$ take on its extreme values and what are these values? 

![教材插图](/books/thomas-calculus/assets/2d93aab12bfab61f6bb543fd500d98de0680be174532836a67b5dd7ff26d9df0.jpg)


85. Find the absolute maximum value of $f(x) = x^{2} \ln(1/x)$ and say where it occurs. 

86. a. Prove that $e^{x} \geq 1 + x$ if $x \geq 0$ . 

b. Use the result in part (a) to show that 

$$
e ^ {x} \geq 1 + x + \frac {1}{2} x ^ {2}.
$$

87. Show that increasing functions and decreasing functions are one-to-one. That is, show that for any $x_{1}$ and $x_{2}$ in $I, x_{2} \neq x_{1}$ implies $f(x_{2}) \neq f(x_{1})$ . 

Use the results of Exercise 87 to show that the functions in Exercises 88–92 have inverses over their domains. Find a formula for $df^{-1}/dx$ using Theorem 3, Section 3.8. 

$$
\begin{array}{l l} \mathbf {8 8 .} f (x) = (1 / 3) x + (5 / 6) & \quad \mathbf {8 9 .} f (x) = 2 7 x ^ {3} \\ \mathbf {9 0 .} f (x) = 1 - 8 x ^ {3} & \quad \mathbf {9 1 .} f (x) = (1 - x) ^ {3} \end{array}
$$

92. $f(x) = x^{5 / 3}$ 

We have seen how the first derivative tells us where a function is increasing, where it is decreasing, and whether a local maximum or local minimum occurs at a critical point. In this section we see that the second derivative gives us information about how the graph of a differentiable function bends or turns. With this knowledge about the first and second derivatives, coupled with our previous understanding of symmetry and asymptotic behavior studied in Sections 1.1 and 2.5, we can now draw an accurate graph of a function. By organizing all of these ideas into a coherent procedure, we give a method for sketching graphs and revealing visually the key features of functions. Identifying and knowing the locations of these features is of major importance in mathematics and its applications to science and engineering, especially in the graphical analysis and interpretation of data. When the domain of a function is not a finite closed interval, sketching a graph helps to determine whether absolute maxima or absolute minima exist and, if they do exist, where they are located. 

![教材插图](/books/thomas-calculus/assets/bad7cc2306b560f7c00954cd11c536393fa22a1f0a47dee8ad9f47ff4739a11f.jpg)



FIGURE 4.24 The graph of $f(x) = x^{3}$ is concave down on $(-\infty, 0)$ and concave up on $(0, \infty)$ (Example 1a).


![教材插图](/books/thomas-calculus/assets/d1b89fc95f0f1cfef3fa27d01aa97d7f99a6f539d60e3ccdecabb01c7c36dc2f.jpg)



FIGURE 4.25 The graph of $f(x) = x^{2}$ is concave up on every interval (Example 1b).


![教材插图](/books/thomas-calculus/assets/41ea2c1fbf3b35b274d15536191ed4363e62b22ea9dda68d2576b92177fbd49a.jpg)



FIGURE 4.26 Using the sign of $y''$ to determine the concavity of $y$ (Example 2).


### Concavity

As you can see in Figure 4.24, the curve $y = x^{3}$ rises as x increases, but the portions defined on the intervals $(-\infty, 0)$ and $(0, \infty)$ turn in different ways. As we approach the origin from the left along the curve, the curve turns to our right and falls below its tangent lines. The slopes of the tangent lines are decreasing on the interval $(-\infty, 0)$ . As we move away from the origin along the curve to the right, the curve turns to our left and rises above its tangent lines. The slopes of the tangent lines are increasing on the interval $(0, \infty)$ . This turning or bending behavior defines the concavity of the curve. 

> ***DEFINITION*** The graph of a differentiable function $y = f(x)$ is 
>
> (a) concave up on an open interval I if $f'$ is increasing on I; 
>
> (b) concave down on an open interval I if $f'$ is decreasing on I. 
>
A function whose graph is concave up is also often called convex. 

If $y = f(x)$ has a second derivative, we can apply Corollary 3 of the Mean Value Theorem to the first derivative function. We conclude that $f'$ increases if $f'' > 0$ on I, and decreases if $f'' < 0$ . 

The Second Derivative Test for Concavity 

Let $y = f(x)$ be twice-differentiable on an interval $I$ . 

1. If $f'' > 0$ on $I$ , the graph of $f$ over $I$ is concave up. 

2. If $f'' < 0$ on I, the graph of f over I is concave down. 

If $y = f(x)$ is twice-differentiable, we will use the notations $f''$ and $y''$ interchangeably when denoting the second derivative. 

**EXAMPLE 1**

(a) The curve $y = x^{3}$ (Figure 4.24) is concave down on $(-\infty, 0)$ , where $y'' = 6x < 0$ , and concave up on $(0, \infty)$ , where $y'' = 6x > 0$ . 

(b) The curve $y = x^2$ (Figure 4.25) is concave up on $(-\infty, \infty)$ because its second derivative $y'' = 2$ is always positive. 

**EXAMPLE 2** Determine the concavity of $y = 3 + \sin x$ on $[0, 2\pi]$ . 

**Solution** The first derivative of $y = 3 + \sin x$ is $y' = \cos x$ , and the second derivative is $y'' = -\sin x$ . The graph of $y = 3 + \sin x$ is concave down on $(0, \pi)$ , where $y'' = -\sin x$ is negative. It is concave up on $(\pi, 2\pi)$ , where $y'' = -\sin x$ is positive (Figure 4.26). 

### Points of Inflection

The curve $y = 3 + \sin x$ in Example 2 changes concavity at the point $(\pi, 3)$ . Since the first derivative $y' = \cos x$ exists for all x, we see that the curve has a tangent line of slope -1 at the point $(\pi, 3)$ . This point is called a point of inflection of the curve. Notice from Figure 4.26 that the graph crosses its tangent line at this point and that the second derivative $y'' = -\sin x$ has value 0 when $x = \pi$ . In general, we have the following definition. 

![教材插图](/books/thomas-calculus/assets/694ab8c1195b73e3321e00f47134648d0505181c613a5c0dc0d5e4f90872fb65.jpg)



FIGURE 4.27 The concavity of the graph of f changes from concave down to concave up at the inflection point (Example 3).


![教材插图](/books/thomas-calculus/assets/7f52602b35e395e741875fdfce808febdfdf5abdc2976f020590b884033aa10e.jpg)



FIGURE 4.28 The graph of $f(x) = x^{5/3}$ has a horizontal tangent at the origin where the concavity changes, although $f''$ does not exist at x = 0 (Example 4).


![教材插图](/books/thomas-calculus/assets/80a0ff3e6b9a1d30e7b694b7496b5bdf2a81e2229462e4d2769862f73f6f46fc.jpg)



FIGURE 4.29 The graph of $y = x^{4}$ has no inflection point at the origin, even though $y'' = 0$ there (Example 5).


> ***DEFINITION*** A point $(c, f(c))$ where the graph of a function has a tangent line and where the concavity changes is a point of inflection. 

We observed that the second derivative of $f(x) = 3 + \sin x$ is equal to zero at the inflection point $(\pi, 3)$ . Generally, if the second derivative exists at a point of inflection $(c, f(c))$ , then $f''(c) = 0$ . This follows immediately from the Intermediate Value Theorem whenever $f''$ is continuous over an interval containing x = c because the second derivative changes sign moving across this interval. Even if the continuity assumption is dropped, it is still true that $f''(c) = 0$ , provided the second derivative exists (although a more advanced argument is required in this noncontinuous case). Since a tangent line must exist at the point of inflection, either the first derivative $f'(c)$ exists (is finite) or the graph has a vertical tangent line at the point. At a vertical tangent, neither the first nor second derivative exists. In summary, one of two things can happen at a point of inflection. 

At a point of inflection $(c, f(c))$ , either $f''(c) = 0$ or $f''(c)$ fails to exist. 

**EXAMPLE 3** Determine the concavity and find the inflection points of the function 

$$
f (x) = x ^ {3} - 3 x ^ {2} + 2.
$$

**Solution** We start by computing the first and second derivatives. 

$$
f ^ {\prime} (x) = 3 x ^ {2} - 6 x, \quad f ^ {\prime \prime} (x) = 6 x - 6.
$$

To determine concavity, we look at the sign of the second derivative $f''(x) = 6x - 6$ . The sign is negative when x < 1, is 0 at x = 1, and is positive when x > 1. It follows that the graph of f is concave down on $(-\infty, 1)$ , is concave up on $(1, \infty)$ , and has an inflection point at the point $(1, 0)$ where the concavity changes. 

The graph of f is shown in Figure 4.27. Notice that we did not need to know the shape of this graph ahead of time in order to determine its concavity. 

The next example illustrates that a function can have a point of inflection where the first derivative exists but the second derivative fails to exist. 

**EXAMPLE 4** The graph of $f(x) = x^{5/3}$ has a horizontal tangent at the origin because $f'(x) = (5/3)x^{2/3} = 0$ when $x = 0$ . However, the second derivative, 

$$
f ^ {\prime \prime} (x) = \frac {d}{d x} \left(\frac {5}{3} x ^ {2 / 3}\right) = \frac {1 0}{9} x ^ {- 1 / 3},
$$

fails to exist at x = 0. Nevertheless, $f''(x) < 0$ for x < 0 and $f''(x) > 0$ for x > 0, so the second derivative changes sign at x = 0 and there is a point of inflection at the origin. The graph is shown in Figure 4.28. 

The following example shows that an inflection point need not occur even though both derivatives exist and $f'' = 0$ . 

**EXAMPLE 5** The curve $y = x^4$ has no inflection point at $x = 0$ (Figure 4.29). Even though the second derivative $y'' = 12x^2$ is zero there, it does not change sign. The curve is concave up everywhere. 

In the next example, a point of inflection occurs at a vertical tangent to the curve where neither the first nor the second derivative exists. 

![教材插图](/books/thomas-calculus/assets/8eaea6718431847b9852e05b6a0970a6b1dc11f77cf724c2e8f06745f3043c04.jpg)



FIGURE 4.30 A point of inflection where $y'$ and $y''$ fail to exist (Example 6).


**EXAMPLE 6** The graph of $y = x^{1/3}$ has a point of inflection at the origin because the second derivative is positive for x < 0 and negative for x > 0: 

$$
y ^ {\prime \prime} = \frac {d ^ {2}}{d x ^ {2}} (x ^ {1 / 3}) = \frac {d}{d x} \left(\frac {1}{3} x ^ {- 2 / 3}\right) = - \frac {2}{9} x ^ {- 5 / 3}.
$$

However, both $y' = x^{-2/3}/3$ and $y''$ fail to exist at x = 0, and there is a vertical tangent there. See Figure 4.30. 

Caution Example 4 in Section 4.1 (Figure 4.9) shows that the function $f(x) = x^{2/3}$ does not have a second derivative at x = 0 and does not have a point of inflection there (there is no change in concavity at x = 0). Combined with the behavior of the function in Example 6 above, we see that when the second derivative does not exist at x = c, an inflection point may or may not occur there. So we need to be careful about interpreting functional behavior whenever first or second derivatives fail to exist at a point. At such points the graph can have vertical tangent lines, corners, cusps, or various discontinuities. 

To study the motion of an object moving along a line as a function of time, we often are interested in knowing when the object's acceleration, given by the second derivative, is positive or negative. The points of inflection on the graph of the object's position function reveal where the acceleration changes sign. 

**EXAMPLE 7** A particle is moving along a horizontal coordinate line (positive to the right) with position function 

$$
s (t) = 2 t ^ {3} - 1 4 t ^ {2} + 2 2 t - 5, \quad t \geq 0.
$$

Find the velocity and acceleration, and describe the motion of the particle. 

**Solution** The velocity is 

$$
v (t) = s ^ {\prime} (t) = 6 t ^ {2} - 2 8 t + 2 2 = 2 (t - 1) (3 t - 1 1),
$$

and the acceleration is 

$$
a (t) = v ^ {\prime} (t) = s ^ {\prime \prime} (t) = 1 2 t - 2 8 = 4 (3 t - 7).
$$

When the function $s(t)$ is increasing, the particle is moving to the right; when $s(t)$ is decreasing, the particle is moving to the left. 

Notice that the first derivative $(v = s')$ is zero at the critical points $t = 1$ and $t = 11/3$ . 

<table><tr><td>Interval</td><td>0 &lt; t &lt; 1</td><td>1 &lt; t &lt; 11/3</td><td>11/3 &lt; t</td></tr><tr><td>Sign of <eq>v = s&#x27;</eq></td><td>+</td><td>-</td><td>+</td></tr><tr><td>Behavior of s</td><td>increasing</td><td>decreasing</td><td>increasing</td></tr><tr><td>Particle motion</td><td>right</td><td>left</td><td>right</td></tr></table>

The particle is moving to the right in the time intervals $[0,1)$ and $(11/3,\infty)$ , and moving to the left in $(1,11/3)$ . It is momentarily stationary (at rest) at t = 1 and t = 11/3. 

The acceleration $a(t) = s''(t) = 4(3t - 7)$ is zero when t = 7/3. 

<table><tr><td>Interval</td><td>0 &lt; t &lt; 7/3</td><td>7/3 &lt; t</td></tr><tr><td>Sign of <eq>a = s&#x27;&#x27;</eq></td><td>-</td><td>+</td></tr><tr><td>Graph of s</td><td>concave down</td><td>concave up</td></tr></table>

Under the influence of the leftward acceleration over the time interval $[0, 7/3)$ , the particle starts out moving to the right while slowing down, and then at t = 1 it reverses and begins moving to the left while speeding up. The acceleration then changes direction at t = 7/3, but the particle continues moving leftward, while slowing down under the rightward acceleration. At t = 11/3 the particle reverses direction again: moving to the right in the same direction as the acceleration, so it is speeding up. 

![教材插图](/books/thomas-calculus/assets/090bb0d8a3e32a279868798802d3ebe24e9f1d7cad59edf4fac4a61fb5fd73c6.jpg)


### Second Derivative Test for Local Extrema

Instead of looking for sign changes in $f'$ at critical points, we can sometimes use the following test to determine the presence and nature of local extrema. 

THEOREM 5—Second Derivative Test for Local Extrema
Suppose $f''$ is continuous on an open interval that contains $x = c$ .
1. If $f'(c) = 0$ and $f''(c) < 0$ , then $f$ has a local maximum at $x = c$ .
2. If $f'(c) = 0$ and $f''(c) > 0$ , then $f$ has a local minimum at $x = c$ .
3. If $f'(c) = 0$ and $f''(c) = 0$ , then the test fails. The function $f$ may have a local maximum, a local minimum, or neither. 

Proof Part (1). If $f''(c) < 0$ , then $f''(x) < 0$ on some open interval I containing the point c, since $f''$ is continuous. Therefore, $f'$ is decreasing on I. Since $f'(c) = 0$ , the sign of $f'$ changes from positive to negative at c, so f has a local maximum at c by the First Derivative Test. 

The proof of Part (2) is similar. 

For Part (3), consider the three functions $y = x^{4}$ , $y = -x^{4}$ , and $y = x^{3}$ . For each function, the first and second derivatives are zero at x = 0. Yet the function $y = x^{4}$ has a local minimum there, $y = -x^{4}$ has a local maximum, and $y = x^{3}$ is increasing in any open interval containing x = 0 (having neither a maximum nor a minimum there). Thus the test fails. 

This test requires us to know $f''$ only at c itself and not in an interval about c. This makes the test easy to apply. That's the good news. The bad news is that the test is inconclusive if $f'' = 0$ or if $f''$ does not exist at x = c. When this happens, use the First Derivative Test for local extreme values. 

Together $f'$ and $f''$ tell us the shape of the function's graph—that is, where the critical points are located and what happens at a critical point, where the function is increasing and where it is decreasing, and how the curve is turning or bending as indicated by its concavity. We use this information to sketch a graph of the function that captures its key features. 

**EXAMPLE 8** Sketch a graph of the function

$$
f (x) = x ^ {4} - 4 x ^ {3} + 1 0
$$

using the following steps. 

(a) Identify where the extrema of f occur. 

(b) Find the intervals on which $f$ is increasing and the intervals on which $f$ is decreasing. 

(c) Find where the graph of $f$ is concave up and where it is concave down. 

(d) Sketch the general shape of the graph for f. 

(e) Plot some specific points, such as local maximum and minimum points, points of inflection, and intercepts. Then sketch the curve. 

**Solution** The function $f$ is continuous since $f'(x) = 4x^3 - 12x^2$ exists. The domain of $f$ is $(-\infty, \infty)$ , and the domain of $f'$ is also $(-\infty, \infty)$ . Thus, the critical points of $f$ occur only at the zeros of $f'$ . Since 

$$
f ^ {\prime} (x) = 4 x ^ {3} - 1 2 x ^ {2} = 4 x ^ {2} (x - 3),
$$

the first derivative is zero at x = 0 and x = 3. We use these critical points to define intervals where f is increasing or decreasing. 

<table><tr><td>Interval</td><td><eq>x &lt; 0</eq></td><td><eq>0 &lt; x &lt; 3</eq></td><td><eq>3 &lt; x</eq></td></tr><tr><td>Sign of <eq>f&#x27;</eq></td><td>-</td><td>-</td><td>+</td></tr><tr><td>Behavior of <eq>f</eq></td><td>decreasing</td><td>decreasing</td><td>increasing</td></tr></table>

(a) Using the First Derivative Test for local extrema and the table above, we see that there is no extremum at x = 0 and a local minimum at x = 3. 

(b) Using the table above, we see that $f$ is decreasing on $(-\infty, 0]$ and $[0, 3]$ , and increasing on $[3, \infty)$ . 

(c) $f''(x) = 12x^{2} - 24x = 12x(x - 2)$ is zero at x = 0 and x = 2. We use these points to define intervals where the graph of f is concave up or concave down. 

<table><tr><td>Interval</td><td><eq>x &lt; 0</eq></td><td><eq>0 &lt; x &lt; 2</eq></td><td><eq>2 &lt; x</eq></td></tr><tr><td>Sign of <eq>f&#x27;</eq></td><td>+</td><td>-</td><td>+</td></tr><tr><td>Behavior of <eq>f</eq></td><td>concave up</td><td>concave down</td><td>concave up</td></tr></table>

We see that the graph of $f$ is concave up on the intervals $(-\infty, 0)$ and $(2, \infty)$ , and concave down on $(0, 2)$ . 

(d) Summarizing the information in the last two tables, we obtain the following. 

![教材插图](/books/thomas-calculus/assets/5ecdd94c496152dd2687509f92c8b51d63771b484b88e43d18a1964cdb534247.jpg)



FIGURE 4.31 The graph of



$f(x) = x^{4} - 4x^{3} + 10$ (Example 8).


<table><tr><td>x &lt; 0</td><td>0 &lt; x &lt; 2</td><td>2 &lt; x &lt; 3</td><td>3 &lt; x</td></tr><tr><td>decreasing</td><td>decreasing</td><td>decreasing</td><td>increasing</td></tr><tr><td>concave up</td><td>concave down</td><td>concave up</td><td>concave up</td></tr></table>

The general shape of the curve is shown in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/3acfc8f40a002a43d3cd82d5383e5161418eb56d28a9812944071b0cc0362d1f.jpg)


![教材插图](/books/thomas-calculus/assets/3862bbdfcfe109ab7988f5deda756f3ed2d8b66a4fa85b72c2dcbc6caf105f82.jpg)


(e) Plot the curve's intercepts (if possible) and the points where $y'$ and $y''$ are zero. Indicate any local extreme values and inflection points. Use the general shape as a guide to sketch the curve. (Plot additional points as needed.) Figure 4.31 shows the graph of $f$ . 

The steps in Example 8 give a procedure for graphing the key features of a function. Asymptotes were defined and discussed in Section 2.5. We can find them for many classes of functions (including rational functions), and the methods in the next section give tools to help find them for even more general functions. 

Procedure for Graphing $y = f(x)$ 

1. Identify the domain of f and any symmetries the curve may have. 

2. Find the derivatives $y'$ and $y''$ . 

3. Find the critical points of $f$ , if any, and identify the function's behavior at each one. 

4. Find where the curve is increasing and where it is decreasing. 

5. Find the points of inflection, if any occur, and determine the concavity of the curve. 

6. Identify any asymptotes that may exist. 

7. Plot key points, such as the intercepts and the points found in Steps 3–5, and sketch the curve together with any asymptotes that exist. 

**EXAMPLE 9** Sketch the graph of $f(x) = \frac{(x + 1)^{2}}{1 + x^{2}}$ .

**Solution**

1. The domain of $f$ is $(-\infty, \infty)$ and there are no symmetries about either axis or the origin (Section 1.1). 

2. Find $f'$ and $f''$ . 

$$
\begin{array}{l l} f (x) = \frac {(x + 1) ^ {2}}{1 + x ^ {2}} & \text {   x - intercept   at   } x = - 1, \\ & \text {   y - intercept   at   } y = 1 \\ f ^ {\prime} (x) = \frac {(1 + x ^ {2}) \cdot 2 (x + 1) - (x + 1) ^ {2} \cdot 2 x}{(1 + x ^ {2}) ^ {2}} \\ = \frac {2 (1 - x ^ {2})}{(1 + x ^ {2}) ^ {2}} & \text {   Critical   points:   } x = - 1, x = 1 \\ f ^ {\prime \prime} (x) = \frac {(1 + x ^ {2}) ^ {2} \cdot 2 (- 2 x) - 2 (1 - x ^ {2}) [ 2 (1 + x ^ {2}) \cdot 2 x ]}{(1 + x ^ {2}) ^ {4}} \\ = \frac {4 x (x ^ {2} - 3)}{(1 + x ^ {2}) ^ {3}} & \text {   After   some   algebra,   including   canceling   the   common   factor   } \\ & (1 + x ^ {2}) \end{array}
$$

3. Behavior at critical points. The critical points occur only at $x = \pm 1$ where $f'(x) = 0$ (Step 2) since $f'$ exists everywhere over the domain of $f$ . At $x = -1$ , $f''(-1) = 1 > 0$ , yielding a relative minimum by the Second Derivative Test. At $x = 1$ , $f''(1) = -1 < 0$ , yielding a relative maximum by the Second Derivative test. 

4. Increasing and decreasing. We see that on the interval $(-∞,-1)$ the derivative $f'(x)<0$ , and the curve is decreasing. On the interval $(-1,1)$ , $f'(x)>0$ and the curve is increasing; it is decreasing on $(1,∞)$ where $f'(x)<0$ again. 

5. Inflection points. Notice that the denominator of the second derivative (Step 2) is always positive. The second derivative $f''$ is zero when $x = -\sqrt{3}, 0$ , and $\sqrt{3}$ . The second derivative changes sign at each of these points: negative on $(-\infty, -\sqrt{3})$ , positive on $(-\sqrt{3}, 0)$ , negative on $(0, \sqrt{3})$ , and positive again on $(\sqrt{3}, \infty)$ . Thus each point is a point of inflection. The curve is concave down on the interval $(-\infty, -\sqrt{3})$ , concave up on $(-\sqrt{3}, 0)$ , concave down on $(0, \sqrt{3})$ , and concave up again on $(\sqrt{3}, \infty)$ . 

![教材插图](/books/thomas-calculus/assets/7710a9d61286a083adf5548ea7f32d89a4dffac9f8be592078d0490b1a4b7cf0.jpg)


FIGURE 4.32 The graph of $y = \frac{(x + 1)^2}{1 + x^2}$ (Example 9). 

![教材插图](/books/thomas-calculus/assets/155629682dc0e5fbb58f1e83ac1f2e84dad67f44a36651addeea11576bf2c1c7.jpg)


FIGURE 4.33 The graph of $y = \frac{x^2 + 4}{2x}$ (Example 10). 

6. Asymptotes. Expanding the numerator of $f(x)$ and then dividing both numerator and denominator by $x^2$ gives 

$$
\begin{array}{l l} f (x) = \frac {(x + 1) ^ {2}}{1 + x ^ {2}} = \frac {x ^ {2} + 2 x + 1}{1 + x ^ {2}} & \text { Expanding   numerator } \\ = \frac {1 + (2 / x) + (1 / x ^ {2})}{(1 / x ^ {2}) + 1}. & \text { Dividing   by } x ^ {2} \end{array}
$$

We see that $f(x) \to 1$ as $x \to \infty$ and that $f(x) \to 1$ as $x \to -\infty$ . Thus, the line $y = 1$ is a horizontal asymptote. Since the function is continuous on $(-\infty, \infty)$ , there are no vertical asymptotes. 

7. The graph of $f$ is sketched in Figure 4.32. Notice how the graph is concave down as it approaches the horizontal asymptote $y = 1$ as $x \to -\infty$ , and concave up in its approach to $y = 1$ as $x \to \infty$ . 

**EXAMPLE 10** Sketch the graph of $f(x) = \frac{x^{2} + 4}{2x}$ . 

**Solution**

1. The domain of $f$ is all nonzero real numbers. There are no intercepts because neither $x$ nor $f(x)$ can be zero. Since $f(-x) = -f(x)$ , we note that $f$ is an odd function, so the graph of $f$ is symmetric about the origin. 

2. We calculate the derivatives of the function, but we first rewrite it in order to simplify our computations: 

$$
f (x) = \frac {x ^ {2} + 4}{2 x} = \frac {x}{2} + \frac {2}{x}
$$

Function simplified for differentiation 

$$
f ^ {\prime} (x) = \frac {1}{2} - \frac {2}{x ^ {2}} = \frac {x ^ {2} - 4}{2 x ^ {2}}
$$

Combine fractions to solve easily $f'(x) = 0$ . 

$$
f ^ {\prime \prime} (x) = \frac {4}{x ^ {3}}
$$

Exists throughout the entire domain of $f$ 

3. The critical points occur at $x = \pm 2$ where $f'(x) = 0$ . Since $f''(-2) < 0$ and $f''(2) > 0$ , we see from the Second Derivative Test that a relative maximum occurs at $x = -2$ with $f(-2) = -2$ , and a relative minimum occurs at $x = 2$ with $f(2) = 2$ . 

4. On the interval $(- \infty, -2)$ the derivative $f'$ is positive because $x^2 - 4 > 0$ so the graph is increasing; on the interval $(-2, 0)$ the derivative is negative and the graph is decreasing. Similarly, the graph is decreasing on the interval $(0, 2)$ and increasing on $(2, \infty)$ . 

5. There are no points of inflection because $f''(x) < 0$ whenever x < 0, $f''(x) > 0$ whenever x > 0, and $f''$ exists everywhere and is never zero throughout the domain of f. The graph is concave down on the interval $(-\infty, 0)$ and concave up on the interval $(0, \infty)$ . 

6. From the rewritten formula for $f(x)$ , we see that 

$$
\lim _ {x \rightarrow 0 ^ {+}} \left(\frac {x}{2} + \frac {2}{x}\right) = + \infty \quad \text { and } \quad \lim _ {x \rightarrow 0 ^ {-}} \left(\frac {x}{2} + \frac {2}{x}\right) = - \infty ,
$$

so the $y$ -axis is a vertical asymptote. Also, as $x \to \infty$ or as $x \to -\infty$ , the graph of $f(x)$ approaches the line $y = x / 2$ . Thus $y = x / 2$ is an oblique asymptote. 

7. The graph of $f$ is sketched in Figure 4.33. 

![教材插图](/books/thomas-calculus/assets/4b4050d77374388c65dcb352a5044ee8fb07890901655a87ae7524168b4dcfb1.jpg)


**Solution** The domain of $f$ is $(-\infty, 0) \cup (0, \infty)$ and there are no symmetries about either axis or the origin. The derivatives of $f$ are 


FIGURE 4.34 The graph of $y = e^{2/x}$ has a point of inflection at $(-1, e^{-2})$ . The line y = 1 is a horizontal asymptote and x = 0 is a vertical asymptote (Example 11).



FIGURE 4.35 The graph of the function in Example 12.


**EXAMPLE 11** Sketch the graph of $f(x) = e^{2/x}$ .

![教材插图](/books/thomas-calculus/assets/eb0d53bb77082446fd4ffd1a10918944f71dd362e8a319fdffb9a0993f6d100b.jpg)


$$
f ^ {\prime} (x) = e ^ {2 / x} \left(- \frac {2}{x ^ {2}}\right) = - \frac {2 e ^ {2 / x}}{x ^ {2}}
$$

and 

$$
f ^ {\prime \prime} (x) = - \frac {x ^ {2} \left(2 e ^ {2 / x}\right) \left(- 2 / x ^ {2}\right) - 2 e ^ {2 / x} (2 x)}{x ^ {4}} = \frac {4 e ^ {2 / x} (1 + x)}{x ^ {4}}.
$$

Both derivatives exist everywhere over the domain of $f$ . Moreover, since $e^{2 / x}$ and $x^2$ are both positive for all $x \neq 0$ , we see that $f' < 0$ everywhere over the domain and the graph is decreasing on the intervals $(-\infty, 0)$ and $(0, \infty)$ . Examining the second derivative, we see that $f''(x) = 0$ at $x = -1$ . Since $e^{2 / x} > 0$ and $x^4 > 0$ , we have $f'' < 0$ for $x < -1$ and $f'' > 0$ for $x > -1, x \neq 0$ . Since $f''$ changes sign, the point $(-1, e^{-2})$ is a point of inflection. The curve is concave down on the interval $(-\infty, -1)$ and concave up over $(-1, 0) \cup (0, \infty)$ . 

From Example 7, Section 2.5, we see that $\lim_{x\to 0^{-}}f(x) = 0$ . As $x\to 0^{+}$ , we see that $2 / x\to \infty$ , so $\lim_{x\to 0^{+}}f(x) = \infty$ and the $y$ -axis is a vertical asymptote. Also, as $x\to -\infty$ or $x\to \infty$ , $2 / x\to 0$ and so $\lim_{x\to -\infty}f(x) = \lim_{x\to \infty}f(x) = e^0 = 1$ . Therefore, $y = 1$ is a horizontal asymptote. There are no absolute extrema, since $f$ never takes on the value 0 and has no absolute maximum. The graph of $f$ is sketched in Figure 4.34. 

**EXAMPLE 12** Sketch the graph of $f(x) = \cos x - \frac{\sqrt{2}}{2}x$ over $0 \leq x \leq 2\pi$ . 

**Solution** The derivatives of $f$ are 

$$
f ^ {\prime} (x) = - \sin x - \frac {\sqrt {2}}{2} \quad \text { and } \quad f ^ {\prime \prime} (x) = - \cos x.
$$

Both derivatives exist everywhere over the interval $(0,2\pi)$ . Within that open interval, the first derivative is zero when $\sin x = -\sqrt{2}/2$ , so the critical points are $x = 5\pi/4$ and $x = 7\pi/4$ . Since $f''(5\pi/4) = -\cos(5\pi/4) = \sqrt{2}/2 > 0$ , the function has a local minimum value of $f(5\pi/4) \approx -3.48$ (evaluated with a calculator) by the Second Derivative Test. Also, $f''(7\pi/4) = -\cos(7\pi/4) = -\sqrt{2}/2 < 0$ , so the function has a local maximum value of $f(7\pi/4) \approx -3.18$ . 

Examining the second derivative, we find that $f'' = 0$ when $x = \pi/2$ or $x = 3\pi/2$ . Since $f''$ changes sign at these two points, we conclude that $(\pi/2, f(\pi/2)) \approx (\pi/2, -1.11)$ and $(3\pi/2, f(3\pi/2)) \approx (3\pi/2, -3.33)$ are points of inflection. 

Finally, we evaluate $f$ at the endpoints of the interval to find $f(0) = 1$ and $f(2\pi) \approx -3.44$ . Therefore, the values $f(0) = 1$ and $f(5\pi / 4) \approx -3.48$ are the absolute maximum and absolute minimum values of $f$ over the closed interval $[0, 2\pi]$ . The graph of $f$ is sketched in Figure 4.35. 

### Graphical Behavior of Functions from Derivatives

As we saw in Examples 8–12, we can learn much about a twice-differentiable function $y = f(x)$ by examining its first derivative. We can find where the function's graph rises and falls and where any local extrema are located. We can differentiate $y'$ to learn how the graph bends as it passes over the intervals of rise and fall. Together with information about the function's asymptotes and its value at some key points, such as intercepts, this information about the derivatives helps us determine the shape of the function's graph. The following figure summarizes how the first derivative and second derivative affect the shape of a graph. 

<table><tr><td><img src="/books/thomas-calculus/assets/792101960757af7d4251a1e6a40bbb6638926d2f664aa1b4511fe8f802559fa6.jpg"/>Differentiable ⇒ smooth, connected; graph may rise and fall</td><td><img src="/books/thomas-calculus/assets/8f3f15932c7b9065fb132594280e50cb6708c2413f6f8a092911c9bf2211c306.jpg"/><eq>y&#x27; &gt; 0 \Rightarrow</eq> rises from left to right; may be wavy</td><td><img src="/books/thomas-calculus/assets/68ff534ca2f3a065e29965f6fcb1176ef1cda1462bc995d7e1695a849e3fd2a9.jpg"/><eq>y&#x27; &lt; 0 \Rightarrow</eq> falls from left to right; may be wavy</td></tr><tr><td><img src="/books/thomas-calculus/assets/9b770dfc0ce600ba2db10a6fbd035c57370a9d3784c18c39eb09c68b204ec2f6.jpg"/><eq>y&#x27;&#x27; &gt; 0 \Rightarrow</eq> concave up throughout; no waves; graph may rise or fall or both</td><td><img src="/books/thomas-calculus/assets/ceb071034e691691fe3ccddc9b07992c0230b84b44ef7ef1ba30cc6f90178a7d.jpg"/><eq>y&#x27;&#x27; &lt; 0 \Rightarrow</eq> concave down throughout; no waves; graph may rise or fall or both</td><td><img src="/books/thomas-calculus/assets/7206780376991756380e7ce6d01c05b9fbb88a79d399caa7a3cc93d8becd617c.jpg"/><eq>y&#x27;&#x27;</eq> changes sign at an inflection point</td></tr><tr><td><img src="/books/thomas-calculus/assets/bd957e9ae77c835c54b966d891c5662ab96f84f6c9e82a2baf63c96564b97853.jpg"/><eq>y&#x27;</eq> changes sign ⇒ graph has local maximum or local minimum</td><td><img src="/books/thomas-calculus/assets/54850210afb0366eaabae64142a2619dd42a3addb09902e92520a58adf0282fc.jpg"/><eq>y&#x27; = 0</eq> and <eq>y&#x27;&#x27; &lt; 0</eq> at a point; graph has local maximum</td><td><img src="/books/thomas-calculus/assets/2ff431bbcb2349a05b631e5971a10cb7cdb556008fea4713f6f992712cd460b1.jpg"/><eq>y&#x27; = 0</eq> and <eq>y&#x27;&#x27; &gt; 0</eq> at a point; graph has local minimum</td></tr></table>

### EXERCISES 4.4

#### Analyzing Functions from Graphs

Identify the inflection points and local maxima and minima of the functions graphed in Exercises 1–8. Identify the open intervals on which the functions are differentiable and the graphs are concave up and concave down. 

![教材插图](/books/thomas-calculus/assets/07f1a0bfb95a9f3854922f51ff1cf45739ffdd6a3143802eed3fee6e64ab9d8d.jpg)


![教材插图](/books/thomas-calculus/assets/153fe8032403c2af3ad58e4b8ee9abcc883c06438f1d7160128e7162577b43d3.jpg)


![教材插图](/books/thomas-calculus/assets/56c1b97b6dbb5e94f6e3ea30d8283e5de397ac945364732478b9345c5ecd4438.jpg)


![教材插图](/books/thomas-calculus/assets/455a35adbd631762a244b1f621639ebb2667fb569cb7359e22ce31e411e5de84.jpg)


![教材插图](/books/thomas-calculus/assets/3c293b5e9c6099ae8e7403ae4f0ca3cc4de07feda93b28640da311b4a1717e23.jpg)


![教材插图](/books/thomas-calculus/assets/ca14e7d066262a934e4328c685c76e2d70c9b7fb998494940554b63ab09efd45.jpg)


![教材插图](/books/thomas-calculus/assets/3e0b52405b6d7c9859ffe2ceb6c53f746743c5d4cf4d932a381e1b58f395e8ac.jpg)


![教材插图](/books/thomas-calculus/assets/744db88ac4dfeda4a1a30f80130d62aad18da5958e571da6e9b79d4fb33ec1ce.jpg)


![教材插图](/books/thomas-calculus/assets/ca52b26a88f77140b61b8425dbb47d2bea4a97e7cce55493c111c8f7c7edaa4e.jpg)


![教材插图](/books/thomas-calculus/assets/faf5749c0b2b5754b6ca955efa6930fcb70a6590c253ef69d0a8f95965202d10.jpg)


![教材插图](/books/thomas-calculus/assets/9afa86373d92e58aea2735055088957fc1f78670eb6e16cb413765f761d4f802.jpg)


![教材插图](/books/thomas-calculus/assets/121abf38bc3584649d64206e614344fc015bb917049953672ba5e0ff1e15ef72.jpg)


$$
y = \sin | x |, - 2 \pi \leq x \leq 2 \pi
$$

![教材插图](/books/thomas-calculus/assets/064a14499f5d2c2fe21888d77a85fa5fcbffc9eb0b05ba09fc264874d2e36842.jpg)


![教材插图](/books/thomas-calculus/assets/49f55e4134d6c70b8a94c239b53b1f81871742cfec685d16a8e32225725c3810.jpg)



NOT TO SCALE


![教材插图](/books/thomas-calculus/assets/409782c27132ceee862d30844dfd511fb935bfa35a622d5345512c90215683b1.jpg)


Graphing Functions 

In Exercises 9–70, graph the function using appropriate methods from the graphing procedures presented just before Example 9, identifying the coordinates of any local extreme points and inflection points. Then find coordinates of absolute extreme points, if any. 

10. $y = 6 - 2x - x^2$ 

11. $y = x ^ {3} - 3 x + 3$

12. $y = x (6 - 2 x) ^ {2}$

13. $y = -2x^{3} + 6x^{2} - 3$ 

$$
y = 1 - 9 x - 6 x ^ {2} - x ^ {3}
$$

15. $y = (x - 2) ^ {3} + 1$

16. $y = 1 - (x + 1) ^ {3}$

17. $y = x^4 - 2x^2 = x^2(x^2 - 2)$ 

18. $y = -x^4 + 6x^2 - 4 = x^2 (6 - x^2) - 4$ 

19. $y = 4x^{3} - x^{4} = x^{3}(4 - x)$ 

20. $y = x^{4} + 2x^{3} = x^{3}(x + 2)$ 

21. $y = x^{5} - 5x^{4} = x^{4}(x - 5)$ 

22. $y = x\left(\frac{x}{2} -5\right)^{4}$ 

23. $y = \frac{2x^2 + x - 1}{x^2 - 1}$ 

24. $y = \frac{x^2 - 49}{x^2 + 5x - 14}$ 

25. $y = \frac{x^4 + 1}{x^2}$ 

26. $y = \frac{x^2 - 4}{2x}$ 

27. $y = \frac{1}{x^2 - 1}$ 

28. $y = \frac{x^2}{x^2 - 1}$ 

29. $y = -\frac{x^2 - 2}{x^2 - 1}$ 

30. $y = \frac{x^2 - 4}{x^2 - 2}$ 

31. $y = \frac{x^{2}}{x + 1}$ 

32. $y = -\frac{x^2 - 4}{x + 1}$ 

33. $y = \frac{x^2 - x + 1}{x - 1}$ 

34. $y = -\frac{x^2 - x + 1}{x - 1}$ 

35. $y = \frac{x^3 - 3x^2 + 3x - 1}{x^2 + x - 2}$ 

36. $y = \frac{x^3 + x - 2}{x - x^2}$ 

37. $y = \frac{x}{x^2 - 1}$ 

38. $y = \frac{4x}{x^2 + 4}$ (Newton's serpentine) 

39. $y = \frac{8}{x^2 + 4}$ (Agnesi's witch) 

40. $y = \frac{x}{\sqrt{x^2 + 1}}$ 

41. $y = x + \sin x,\quad 0 \leq x \leq 2\pi$ 

42. $y = x - \sin x, 0 \leq x \leq 2\pi$ 

43. $y = \sqrt{3} x - 2\cos x, 0 \leq x \leq 2\pi$ 

44. $y = \frac{4}{3} x - \tan x, \frac{-\pi}{2} < x < \frac{\pi}{2}$ 

45. $y = \sin x \cos x, \quad 0 \leq x \leq \pi$ 

46. $y = \cos x + \sqrt{3} \sin x, \quad 0 \leq x \leq 2\pi$ 

47. $y = x^{1 / 5}$ 

48. $y = x^{2 / 5}$ 

49. $y = 2x - 3x^{2 / 3}$ 

50. $y = 5x^{2/5} - 2x$ 

51. $y = x^{2 / 3}\left(\frac{5}{2} -x\right)$ 

52. $y = x^{2/3}(x - 5)$ 

53. $y = x\sqrt{8 - x^2}$ 

54. $y = (2 - x^2)^{3 / 2}$ 

55. $y = \sqrt{16 - x^{2}}$ 

56. $y = x^{2} + \frac{2}{x}$ 

57. $y = \frac{x^2 - 3}{x - 2}$ 

58. $y = \sqrt[3]{x^3 + 1}$ 

59. $y = \frac{8x}{x^2 + 4}$ 

60. $y = \frac{5}{x^4 + 5}$ 

61. $y = |x^{2} - 1|$ 

62. $y = |x^{2} - 2x|$ 

63. $y = \sqrt{|x|} = \left\{ \begin{array}{ll}\sqrt{-x}, & x < 0\\ \sqrt{x}, & x\geq 0 \end{array} \right.$ 

64. $y = \sqrt{|x - 4|}$ 

65. $y = \frac{x}{9 - x^{2}}$ 

66. $y = \frac{x^2}{1 - x}$ 

67. $y = \ln (3 - x^2)$ 

68. $y = (\ln x)^{2}$ 

69. $y = \ln (\cos x)$ 

70. $y = \frac{1}{1 + e^{-x}} = \frac{e^x}{1 + e^x}$ 

#### Sketching the General Shape, Knowing $y'$

Each of Exercises 71–92 gives the first derivative of a continuous function $y = f(x)$ . Find $y''$ and then use Steps 2–4 of the graphing procedure described in this section to sketch the general shape of the graph of f. 

71. $y^\prime = 2 + x - x^2$ 

72. $y^\prime = x^2 - x - 6$ 

73. $y^\prime = x(x - 3)^2$ 

74. $y^\prime = x^2 (2 - x)$ 

75. $y^\prime = x(x^2 - 12)$ 

76. $y' = (x - 1)^2 (2x + 3)$ 

77. $y' = (8x - 5x^2)(4 - x)^2$ 

78. $y' = (x^2 - 2x)(x - 5)^2$ 

79. $y' = \sec^2 x, -\frac{\pi}{2} < x < \frac{\pi}{2}$ 

80. $y' = \tan x, -\frac{\pi}{2} < x < \frac{\pi}{2}$ 

81. $y' = \cot\frac{\theta}{2}, \quad 0 < \theta < 2\pi$

82. $y' = \csc^{2}\frac{\theta}{2}, \quad 0 < \theta < 2\pi$

83. $y' = \tan^2\theta - 1, -\frac{\pi}{2} < \theta < \frac{\pi}{2}$ 

84. $y' = 1 - \cot^2\theta, \quad 0 < \theta < \pi$ 

85. $y' = \cos t, \quad 0 \leq t \leq 2\pi$ 

86. $y' = \sin t, \quad 0 \leq t \leq 2\pi$ 

87. $y' = (x + 1)^{-2/3}$ 

88. $y^\prime = (x - 2)^{-1 / 3}$ 

89. $y^\prime = x^{-2 / 3}(x - 1)$ 

90. $y^\prime = x^{-4 / 5}(x + 1)$ 

91. $y' = 2|x| = \begin{cases} -2x, & x \leq 0 \\ 2x, & x > 0 \end{cases}$ 

92. $y^\prime = \left\{ \begin{array}{ll} - x^2, & x \leq 0\\ x^2, & x > 0 \end{array} \right.$ 

Sketching y from Graphs of $y'$ and $y''$ 

Each of Exercises 93–96 shows the graphs of the first and second derivatives of a function $y = f(x)$ . Copy the picture and add to it a sketch of the approximate graph of f, given that the graph passes through the point P. 

93. 

94. 

![教材插图](/books/thomas-calculus/assets/3182420bdf2b980b7d5b2f4395364a71cb924e0ca61db538140e06f64a469e5d.jpg)


![教材插图](/books/thomas-calculus/assets/79af2a9f4ac9c570b19dc3121b4c0bebbb88aec770e0960bbbe13757f8d59d4a.jpg)


95. y 

![教材插图](/books/thomas-calculus/assets/b83bc34b4699580cf0bca907c4c93a5ad07c1f40a8954b7f3c7261bcc6c943c2.jpg)


96. y 

![教材插图](/books/thomas-calculus/assets/7104c6ce83a1f564646a45c3fa30e96531c86188ae4fe94c1d8d29c0627d8e2b.jpg)



#### Theory and Examples

97. The accompanying figure shows a portion of the graph of a twice-differentiable function $y = f(x)$ . At each of the five labeled points, classify $y'$ and $y''$ as positive, negative, or zero. 

![教材插图](/books/thomas-calculus/assets/1fe11c1ee9aeedf12f545a756500220e7792672394d19daeccd51543669171b0.jpg)


98. Sketch a smooth connected curve $y = f(x)$ with 

$$
\begin{array}{l} f (- 2) = 8, \quad f ^ {\prime} (2) = f ^ {\prime} (- 2) = 0, \\ \quad f (0) = 4, \quad f ^ {\prime} (x) <   0 \quad \text { for } \quad | x | <   2, \\ \quad f (2) = 0, \quad f ^ {\prime \prime} (x) <   0 \quad \text { for } \quad x <   0, \\ \quad f ^ {\prime} (x) > 0 \quad \text { for } \quad | x | > 2, \quad f ^ {\prime \prime} (x) > 0 \quad \text { for } \quad x > 0. \end{array}
$$

99. Sketch the graph of a twice-differentiable function $y = f(x)$ with the following properties. Label coordinates where possible. 

<table><tr><td>x</td><td>y</td><td>Derivatives</td></tr><tr><td><eq>x &lt; 2</eq></td><td></td><td><eq>y&#x27; &lt; 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td>2</td><td>1</td><td><eq>y&#x27; = 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td><eq>2 &lt; x &lt; 4</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td>4</td><td>4</td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; = 0</eq></td></tr><tr><td><eq>4 &lt; x &lt; 6</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td>6</td><td>7</td><td><eq>y&#x27; = 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td><eq>x &gt; 6</eq></td><td></td><td><eq>y&#x27; &lt; 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr></table>

100. Sketch the graph of a twice-differentiable function $y = f(x)$ that passes through the points $(-2, 2), (-1, 1), (0, 0), (1, 1)$ , and $(2, 2)$ and whose first two derivatives have the following sign patterns. 

![教材插图](/books/thomas-calculus/assets/305531edae9ee4e6e1113b31ba9393db3d5cb707e2814138701b9e3cf557b118.jpg)


101. Sketch the graph of a twice-differentiable function $y = f(x)$ with the following properties. Label coordinates where possible. 

<table><tr><td>x</td><td>y</td><td>Derivatives</td></tr><tr><td><eq>x &lt; -2</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td>-2</td><td>-1</td><td><eq>y&#x27; = 0, \quad y&#x27;&#x27; = 0</eq></td></tr><tr><td><eq>-2 &lt; x &lt; -1</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td>-1</td><td>0</td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; = 0</eq></td></tr><tr><td><eq>-1 &lt; x &lt; 0</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td>0</td><td>3</td><td><eq>y&#x27; = 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td><eq>0 &lt; x &lt; 1</eq></td><td></td><td><eq>y&#x27; &lt; 0, \quad y&#x27;&#x27; &lt; 0</eq></td></tr><tr><td>1</td><td>2</td><td><eq>y&#x27; &lt; 0, \quad y&#x27;&#x27; = 0</eq></td></tr><tr><td><eq>1 &lt; x &lt; 2</eq></td><td></td><td><eq>y&#x27; &lt; 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td>2</td><td>0</td><td><eq>y&#x27; = 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr><tr><td><eq>x &gt; 2</eq></td><td></td><td><eq>y&#x27; &gt; 0, \quad y&#x27;&#x27; &gt; 0</eq></td></tr></table>

102. Sketch the graph of a twice-differentiable function $y = f(x)$ that passes through the points $(-3, -2)$ , $(-2, 0)$ , $(0, 1)$ , $(1, 2)$ , and $(2, 3)$ and whose first two derivatives have the following sign patterns. 

![教材插图](/books/thomas-calculus/assets/4d481a754dd92a497346c5cf0fdeea1ca25906e4f304809810111dad61ea027a.jpg)


In Exercises 103 and 104, the graph of $f'$ is given. Determine $x$ -values corresponding to inflection points for the graph of $f$ . 

![教材插图](/books/thomas-calculus/assets/1c4e02cfd0c3bf3a5b6b3cdffd76d59a2e129b7e84a3e5a653fe4b27fcdc2ea8.jpg)


In Exercises 105 and 106, the graph of $f'$ is given. Determine x-values corresponding to local minima, local maxima, and inflection points for the graph of f. 

![教材插图](/books/thomas-calculus/assets/7e0758919b5e19f4caa84d5f2fe8f22df0851f2401279eeb5af309fa0a9fc170.jpg)


![教材插图](/books/thomas-calculus/assets/a5244371a656f0aacdb67c6798cf873a61a55dabee05ab19d013b887470c1b89.jpg)


107. A function $f(x)$ has domain $(-2,2)$ . The graph below is a plot of the derivative of f, not a plot of f itself. In other words, this is a graph of $y = f'(x)$ . Either use this graph to determine on which intervals the graph of f is concave up and on which intervals the graph of f is concave down, or explain why this information cannot be determined from the graph. 

![教材插图](/books/thomas-calculus/assets/9887e4b64058ee6ecbbbfbc2cda9e090247aba54707b96855325487b809111cf.jpg)


108. A function $f(x)$ has domain $(-2,2)$ . The graph below is a plot of the second derivative of f, not a plot of f itself. In other words, this is a graph of $y = f''(x)$ . 

![教材插图](/books/thomas-calculus/assets/813e16d75d8d6a10f1072dcd73458af12836a440549f81fb789bee2d422be092.jpg)


a. Either use the graph above to determine on which intervals the graph of f is concave up and on which intervals the graph of f is concave down and the inflection points of f, or explain why this information cannot be determined from the graph. 

b. Either use the graph above to determine on which intervals $f$ is increasing and on which intervals $f$ is decreasing, or explain why this information cannot be determined from the graph. 

Motion Along a Line The graphs in Exercises 109 and 110 show the position $s = f(t)$ of an object moving up and down on a coordinate line. (a) When is the object moving away from the origin? Toward the origin? At approximately what times is the (b) velocity equal to zero? (c) Acceleration equal to zero? (d) When is the acceleration positive? Negative? 


109.


![教材插图](/books/thomas-calculus/assets/359946c9c4271d14dbde88b13785190ae3a284ee675f619784a1df30b5ede5bc.jpg)



110.


![教材插图](/books/thomas-calculus/assets/ead007bfcf13d21e6dc0d5c1c761eca9e56fc4f289e94b74897a4a434ab6bc98.jpg)


111. Marginal cost The accompanying graph shows the hypothetical cost $c = f(x)$ of manufacturing $x$ items. At approximately what production level does the marginal cost change from decreasing to increasing? 

![教材插图](/books/thomas-calculus/assets/4ee343c2df60112dac19c63312299f21f1c460301c847b7aa0df4fa85f457257.jpg)



Thousands of units produced


112. The accompanying graph shows the monthly revenue of the Widget Corporation for the past 12 years. During approximately what time intervals was the marginal revenue increasing? Decreasing? 

![教材插图](/books/thomas-calculus/assets/2a0a454ad4a74585fb12276fe4610be809ecd03cf671f99c738d9e46f387def4.jpg)


113. Suppose the derivative of the function $y = f(x)$ is 

$$
y ^ {\prime} = (x - 1) ^ {2} (x - 2).
$$

At what points, if any, does the graph of f have a local minimum, local maximum, or point of inflection? (Hint: Draw the sign pattern for $y'$ .) 

114. Suppose the derivative of the function $y = f(x)$ is 

$$
y ^ {\prime} = (x - 1) ^ {2} (x - 2) (x - 4).
$$

At what points, if any, does the graph of $f$ have a local minimum, local maximum, or point of inflection? 

115. For $x > 0$ , sketch a curve $y = f(x)$ that has $f(1) = 0$ and $f'(x) = 1 / x$ . Can anything be said about the concavity of such a curve? Give reasons for your answer. 

116. Can anything be said about the graph of a function $y = f(x)$ that has a continuous second derivative that is never zero? Give reasons for your answer. 

117. If $b, c$ , and $d$ are constants, for what value of $b$ will the curve $y = x^3 + bx^2 + cx + d$ have a point of inflection at $x = 1$ ? Give reasons for your answer. 

118. Parabolas 

a. Find the coordinates of the vertex of the parabola $y = ax^{2} + bx + c, a \neq 0$ . 

b. When is the parabola concave up? Concave down? Give reasons for your answers. 

119. Quadratic curves What can you say about the inflection points of a quadratic curve $y = ax^2 + bx + c, a \neq 0$ ? Give reasons for your answer. 

120. Cubic curves What can you say about the inflection points of a cubic curve $y = ax^3 + bx^2 + cx + d, a \neq 0$ ? Give reasons for your answer. 

121. Suppose that the second derivative of the function $y = f(x)$ is 

$$
y ^ {\prime \prime} = (x + 1) (x - 2).
$$

For what x-values does the graph of f have an inflection point? 

122. Suppose that the second derivative of the function $y = f(x)$ is 

$$
y ^ {\prime \prime} = x ^ {2} (x - 2) ^ {3} (x + 3).
$$

For what x-values does the graph of f have an inflection point? 

123. Find the values of constants $a, b$ , and $c$ such that the graph of $y = ax^3 + bx^2 + cx$ has a local maximum at $x = 3$ , local minimum at $x = -1$ , and inflection point at (1, 11). 

124. Find the values of constants $a, b$ , and $c$ such that the graph of $y = (x^2 + a) / (bx + c)$ has a local minimum at $x = 3$ and a local maximum at $(-1, -2)$ . 

#### COMPUTER EXPLORATIONS

In Exercises 125–128, find the inflection points (if any) on the graph of the function and the coordinates of the points on the graph where the function has a local maximum or local minimum value. Then graph the function in a region large enough to show all these points simultaneously. Add to your picture the graphs of the function's first and second derivatives. How are the values at which these graphs intersect the x-axis related to the graph of the function? In what other ways are the graphs of the derivatives related to the graph of the function? 

125. $y = x ^ {5} - 5 x ^ {4} - 2 4 0$

126. $y = x ^ {3} - 1 2 x ^ {2}$

127. $y = \frac{4}{5} x^5 + 16x^2 - 25$ 

128. $y = \frac{x^4}{4} - \frac{x^3}{3} - 4x^2 + 12x + 20$ 

129. Graph $f(x) = 2x^{4} - 4x^{2} + 1$ and its first two derivatives together. Comment on the behavior of f in relation to the signs and values of $f'$ and $f''$ . 

130. Graph $f(x) = x \cos x$ and its second derivative together for $0 \leq x \leq 2\pi$ . Comment on the behavior of the graph of f in relation to the signs and values of $f''$ . 

## 4.5 Indeterminate Forms and L'Hôpital's Rule

Consider the four limits 

$$
\lim _ {x \to 0} \frac {x ^ {3}}{x} = \lim _ {x \to 0} x ^ {2} = 0,
$$

$$
\lim _ {x \to 0} \frac {x}{x ^ {3}} = \lim _ {x \to 0} \frac {1}{x ^ {2}} = \infty ,
$$

$$
\lim _ {x \to 0} \frac {x}{x} = \lim _ {x \to 0} 1 = 1,
$$

In each case both the numerator and the denominator approach zero as $x \rightarrow 0$ , even though these limits ultimately lead to completely different results: $0, \infty, 1$ , and 1/2. We say the expression 

$$
\lim _ {x \rightarrow 0} \frac {x}{2 x} = \lim _ {x \rightarrow 0} \frac {1}{2} = \frac {1}{2}.\tag{1}
$$

$$
\lim _ {x \rightarrow a} \frac {f (x)}{g (x)} \text {   when   } \lim _ {x \rightarrow a} f (x) = 0 \text { and } \lim _ {x \rightarrow a} g (x) = 0
$$

involves an indeterminate form 0/0. The expression “0/0” has the form of a number, but it is not a meaningful quantity. Stating that both the numerator and the denominator approach zero does not provide sufficient information to obtain the limit of the ratio. We have to examine the behavior of the expression in more detail by performing algebraic manipulation or by applying methods that we will introduce in this section. 

**HISTORICAL BIOGRAPHY**

### (1667-1748)

Johann Bernoulli was born in Switzerland and attended the University of Basel. His doctoral dissertation was in mathematics despite its medical title, which was used to hide his mathematical work from his father who wanted Johann to become a doctor. 

### Johann Bernoulli

In the late 1600s, John Fernoulle discovered a rule for calculating limits of fractions whose numerators and denominators both approach zero. Today the rule is known as l'Hôpital's rule. 

To know more, visit the companion Website. 

To know more, visit the companion Website. 

Guillaume François Antoine de l'Hôpital (1661–1704) 

Other forms exhibit behavior similar to Equation (1). For instance, if both the numerator and the denominator approach $+\infty$ or $-\infty$ , then the limit of the ratio leads to an indeterminate form $\infty/\infty$ . Additional indeterminate forms we consider in this section are $\infty \cdot 0$ , $\infty - \infty$ , $1^{\infty}$ , $0^{0}$ , and $\infty^{0}$ . Their purpose is to summarize the behavior of certain types of limits. 

John (Johann) Bernoulli discovered a rule for using derivatives to calculate limits of fractions whose numerators and denominators both approach zero or $\pm\infty$ . The rule is known today as l'Hôpital's Rule, after Guillaume de l'Hôpital. He was a French nobleman who wrote the first introductory differential calculus text, where the rule first appeared in print. Limits involving transcendental functions often require some use of this rule. 

### Indeterminate Form 0/0

It is important to understand that the notation “0/0” is not intended to imply numerically dividing 0 by 0. Instead, the indeterminate form 0/0 refers to a limit of a ratio of two functions, each of which approaches zero. L’Hôpital’s rule can help us evaluate such limits. 

THEOREM 6—L'Hôpital's Rule Suppose that $\lim_{x\to a}f(x) = \lim_{x\to a}g(x) = 0$ , that $f$ and $g$ are differentiable on an open interval $I$ containing $a$ , and that $g'(x) \neq 0$ on $I$ if $x \neq a$ . Then 

$$
\lim _ {x \to a} \frac {f (x)}{g (x)} = \lim _ {x \to a} \frac {f ^ {\prime} (x)}{g ^ {\prime} (x)},
$$

assuming that the limit on the right side of this equation exists. 

We give a proof of Theorem 6 at the end of this section. Theorem 6 also applies if $x \to \pm \infty$ or when $f'(x) / g'(x) \to \pm \infty$ , but we will not prove this. 

### Caution

**EXAMPLE 1** The following limits involve 0/0 indeterminate forms, so we apply l'Hôpital's Rule. In some cases, it must be applied repeatedly. 

To apply l'Hôpital's Rule to $f / g$ , divide the derivative of $f$ by the derivative of $g$ . Do not make the mistake of taking the derivative of $f / g$ . The quotient to use is $f' / g'$ , not $(f / g)'$ . 

(a) $\lim_{x\to0}\frac{3x-\sin x}{x}$ The numerator and the denominator are both approaching 0; apply l'Hôpital's Rule. $=\lim_{x\to0}\frac{3-\cos x}{1}$ Not 0/0 $=\frac{3-\cos0}{1}=2$ Limit is found. 

(b) $\lim_{x\to 0}\frac{\sqrt{1 + x} - 1}{x} = \lim_{x\to 0}\frac{\frac{1}{2\sqrt{1 + x}}}{1} = \frac{1}{2}$ 

(c) $\lim_{x\to0}\frac{\sqrt{1+x}-1-x/2}{x^{2}}$ $\frac{0}{0}$ ; apply l'Hôpital's Rule. $=\lim_{x\to0}\frac{(1/2)(1+x)^{-1/2}-1/2}{2x}$ Still $\frac{0}{0}$ ; apply l'Hôpital's Rule again. $=\lim_{x\to0}\frac{-(1/4)(1+x)^{-3/2}}{2}=-\frac{1}{8}$ Not $\frac{0}{0}$ ; limit is found. 

(d) $\lim_{x\to0}\frac{x-\sin x}{x^{3}}$ $\frac{0}{0}$ ; apply l'Hôpital's Rule. $=\lim_{x\to0}\frac{1-\cos x}{3x^{2}}$ Still $\frac{0}{0}$ ; apply l'Hôpital's Rule again. $=\lim_{x\to0}\frac{\sin x}{6x}$ Still $\frac{0}{0}$ ; apply l'Hôpital's Rule again. $=\lim_{x\to0}\frac{\cos x}{6}=\frac{1}{6}$ Not $\frac{0}{0}$ ; limit is found. 

(e) $\lim_{x\to\infty}\frac{\ln(1+1/x)}{\sin(1/x)}$ $\frac{0}{0}$ ; apply l'Hôpital's Rule. $=\lim_{x\to\infty}\frac{-(1/x^{2})\frac{1}{1+1/x}}{-(1/x^{2})\cos(1/x)}$ Still $\frac{0}{0}$ ; simplification is easier than applying l'Hôpital's Rule. $=\lim_{x\to\infty}\frac{\frac{1}{1+1/x}}{\cos(1/x)}=\frac{\frac{1}{1+0}}{\cos0}=1$ Not $\frac{0}{0}$ ; limit is found. 

Here is a summary of the procedure we followed in Example 1. 

Using L'Hôpital's Rule To find 

$$
\lim _ {x \to a} \frac {f (x)}{g (x)}
$$

by l'Hôpital's Rule, we continue to differentiate $f$ and $g$ , so long as we still get the form $0/0$ as $x \to a$ . But as soon as one or the other of these derivatives no longer approaches zero, we stop differentiating. L'Hôpital's Rule does not apply when either the numerator or the denominator has a finite nonzero limit. 

**EXAMPLE 2** Be careful to apply l'Hôpital's Rule correctly:

$$
\begin{array}{l l} \lim _ {x \to 0} \frac {1 - \cos x}{x + x ^ {2}} & \frac {0}{0} \\ = \lim _ {x \to 0} \frac {\sin x}{1 + 2 x} & \text { Not } \frac {0}{0} \end{array}
$$

It is tempting to try to apply l'Hôpital's Rule again, which would result in 

$$
\lim _ {x \to 0} \frac {\cos x}{2} = \frac {1}{2},
$$

but this is not the correct limit. l'Hôpital's Rule can be applied only to limits that give indeterminate forms, and $\lim_{x\to 0}(\sin x) / (1 + 2x)$ does not give an indeterminate form. Instead, this limit is $0 / 1 = 0$ , and the correct answer for the original limit is 0. 

L'Hôpital's Rule applies to one-sided limits as well. 

**EXAMPLE 3** In this example the one-sided limits are different.

$$
\begin{array}{l l}\text {(a)} \lim _ {x \rightarrow 0 ^ {+}} \frac {\sin x}{x ^ {2}}&\frac {0}{0}\\= \lim _ {x \rightarrow 0 ^ {+}} \frac {\cos x}{2 x} = \infty&\text { Positive   for } x > 0\end{array}
$$

$$
\begin{array}{l l}\text {(b)} \lim _ {x \rightarrow 0 ^ {-}} \frac {\sin x}{x ^ {2}}&\frac {0}{0}\\= \lim _ {x \rightarrow 0 ^ {-}} \frac {\cos x}{2 x} = - \infty&\text { Negative   for } x <   0\end{array}
$$

### Indeterminate Forms $\infty/\infty, \infty \cdot 0, \infty - \infty$

Recall that $\infty$ and $+\infty$ mean the same thing. 

Sometimes when we try to evaluate a limit as $x \rightarrow a$ , we get an indeterminate form like $\infty/\infty, \infty \cdot 0$ , or $\infty - \infty$ , instead of 0/0. We first consider the form $\infty/\infty$ . 

More advanced treatments of calculus prove that l'Hôpital's Rule applies to the indeterminate form $\infty/\infty$ , as well as to $0/0$ . If $f(x) \to \pm\infty$ and $g(x) \to \pm\infty$ as $x \to a$ , then 

$$
\lim _ {x \to a} \frac {f (x)}{g (x)} = \lim _ {x \to a} \frac {f ^ {\prime} (x)}{g ^ {\prime} (x)},
$$

provided the limit on the right exists or approaches $\infty$ or $-\infty$ . In the notation $x \rightarrow a$ , a may be either finite or infinite. Moreover, $x \rightarrow a$ may be replaced by the one-sided limits $x \rightarrow a^{+}$ or $x \rightarrow a^{-}$ . 

**EXAMPLE 4** Find the limits of these $\infty/\infty$ forms:

(a) $\lim_{x\to\pi/2}\frac{\sec x}{1+\tan x}$ (b) $\lim_{x\to\infty}\frac{\ln x}{2\sqrt{x}}$ (c) $\lim_{x\to\infty}\frac{e^{x}}{x^{2}}$ . 

**Solution**

(a) The numerator and denominator are discontinuous at $x = \pi / 2$ , so we investigate the one-sided limits there. To apply l'Hôpital's Rule, we can choose $I$ to be any open interval with $x = \pi / 2$ as an endpoint. 

$$
\begin{array}{l l} \lim _ {x \to (\pi / 2) ^ {-}} \frac {\sec x}{1 + \tan x} & \frac {\infty}{\infty} \text {   from   left,   apply   l'Hôpital's   Rule } \\ = \lim _ {x \to (\pi / 2) ^ {-}} \frac {\sec x \tan x}{\sec^ {2} x} = \lim _ {x \to (\pi / 2) ^ {-}} \sin x = 1 \end{array}
$$

The right-hand limit is 1 also, with $(-\infty)/(-\infty)$ as the indeterminate form. Therefore, the two-sided limit is equal to 1. 

$$
\text {(b)} \lim _ {x \rightarrow \infty} \frac {\ln x}{2 \sqrt {x}} = \lim _ {x \rightarrow \infty} \frac {1 / x}{1 / \sqrt {x}} = \lim _ {x \rightarrow \infty} \frac {1}{\sqrt {x}} = 0 \quad \frac {1 / x}{1 / \sqrt {x}} = \frac {\sqrt {x}}{x} = \frac {1}{\sqrt {x}}
$$

$$
\text { (c) } \lim _ {x \rightarrow \infty} \frac {e ^ {x}}{x ^ {2}} = \lim _ {x \rightarrow \infty} \frac {e ^ {x}}{2 x} = \lim _ {x \rightarrow \infty} \frac {e ^ {x}}{2} = \infty
$$

Next we turn our attention to the indeterminate forms $\infty \cdot 0$ and $\infty - \infty$ . Sometimes these forms can be handled by using algebra to convert them to a 0/0 or $\infty/\infty$ form. Here again, we do not mean to suggest that $\infty \cdot 0$ or $\infty - \infty$ is a number. They are only notations for functional behaviors when considering limits. Here are examples of how we might work with these indeterminate forms. 

**EXAMPLE 5** Find the limits of these $\infty \cdot 0$ forms:

(a) $\lim_{x\to\infty}\left(x\sin\frac{1}{x}\right)$ 

(b) $\lim_{x\to0^{+}}\sqrt{x}\ln x$ 

**Solution** 

$$
\begin{array}{r l r} \text {(a)} & \lim _ {x \to \infty} \left(x \sin \frac {1}{x}\right) = \lim _ {x \to \infty} \frac {\sin (1 / x)}{1 / x} & \quad \infty \cdot 0 \text { converted to } \frac {0}{0} \\ & = \lim _ {x \to \infty} \frac {(\cos (1 / x)) (- 1 / x ^ {2})}{- 1 / x ^ {2}} & \quad \text { L'Hôpital's   Rule   applied } \\ & = \lim _ {x \to \infty} \left(\cos \frac {1}{x}\right) = 1 \end{array}
$$

(See Example 6b in Section 2.5 for an alternative method to solve this problem.) 

$$
\begin{array}{l l} \text {(b)} \lim _ {x \to 0 ^ {+}} \sqrt {x} \ln x = \lim _ {x \to 0 ^ {+}} \frac {\ln x}{1 / \sqrt {x}} & \infty \cdot 0 \text { converted to } \infty / \infty \\ = \lim _ {x \to 0 ^ {+}} \frac {1 / x}{- (1 / 2) x ^ {3 / 2}} & \text { l'Hôpital's   Rule   applied } \\ = \lim _ {x \to 0 ^ {+}} (- 2 \sqrt {x}) = 0 \end{array}
$$

**EXAMPLE 6** Find the limit of this $\infty -\infty$ form: 

$$
\lim _ {x \rightarrow 0} \left(\frac {1}{\sin x} - \frac {1}{x}\right).
$$

**Solution** If $x \rightarrow 0^{+}$ , then $\sin x \rightarrow 0^{+}$ and 

$$
{\frac {1}{\sin x}} - {\frac {1}{x}} \rightarrow \infty - \infty .
$$

Similarly, if $x \to 0^{-}$ , then $\sin x \to 0^{-}$ and 

$$
{\frac {1}{\sin x}} - {\frac {1}{x}} \rightarrow - \infty - (- \infty) = - \infty + \infty .
$$

Neither form reveals what happens in the limit. To find out, we first combine the fractions: 

$$
\frac {1}{\sin x} - \frac {1}{x} = \frac {x - \sin x}{x \sin x}. \quad \text {   Common   denominator   is   } x \sin x.
$$

Then we apply l'Hôpital's Rule to the result: 

$$
\begin{array}{r l r} \lim _ {x \to 0} \left(\frac {1}{\sin x} - \frac {1}{x}\right) & = \lim _ {x \to 0} \frac {x - \sin x}{x \sin x} & \frac {0}{0} \\ & = \lim _ {x \to 0} \frac {1 - \cos x}{\sin x + x \cos x} & \text { Still } \frac {0}{0} \\ & = \lim _ {x \to 0} \frac {\sin x}{2 \cos x - x \sin x} = \frac {0}{2} = 0. \end{array}
$$

### Indeterminate Powers

Limits that lead to the indeterminate forms $1^{\infty}, 0^{0}$ , and $\infty^{0}$ can sometimes be handled by first taking the logarithm of the function. We use l'Hôpital's Rule to find the limit of the logarithm expression and then exponentiate the result to find the original function limit. This procedure is justified by the continuity of the exponential function and Theorem 9 in Section 2.6, and it is formulated as follows. (The formula is also valid for one-sided limits.) 

If $\lim_{x\to a}\ln f(x) = L$ , then 

$$
\lim _ {x \to a} f (x) = \lim _ {x \to a} e ^ {\ln f (x)} = e ^ {L}.
$$

Here a may be either finite or infinite. 

**EXAMPLE 7** Apply l'Hôpital's Rule to show that $\lim_{x\to 0^{+}}(1 + x)^{1 / x} = e$

**Solution** The limit leads to the indeterminate form $1^{\infty}$ . We let $f(x) = (1 + x)^{1 / x}$ and find $\lim_{x\to 0^{+}}\ln f(x)$ . Since 

$$
\ln f (x) = \ln (1 + x) ^ {1 / x} = \frac {1}{x} \ln (1 + x),
$$

l'Hôpital's Rule now applies to give 

$$
\begin{array}{l l} \lim _ {x \to 0 ^ {+}} \ln f (x) = \lim _ {x \to 0 ^ {+}} \frac {\ln (1 + x)}{x} & \frac {0}{0} \\ = \lim _ {x \to 0 ^ {+}} \frac {\frac {1}{1 + x}}{1} & \text { L'Hôpital's   Rule   applied } \\ = \frac {1}{1} = 1. \end{array}
$$

Therefore, $\lim_{x\to0^{+}}(1+x)^{1/x}=\lim_{x\to0^{+}}f(x)=\lim_{x\to0^{+}}e^{\ln f(x)}=e^{1}=e.$ 

**EXAMPLE 8** Find $\lim_{x\to\infty}x^{1/x}$ .

**Solution** The limit leads to the indeterminate form $\infty^0$ . We let $f(x) = x^{1 / x}$ and find $\lim_{x\to \infty}\ln f(x)$ . Since 

$$
\ln f (x) = \ln x ^ {1 / x} = \frac {\ln x}{x},
$$

![教材插图](/books/thomas-calculus/assets/05f952b3c3538bf820deff3aa5027b3b13cbc75b29555d8eb491a62663771f53.jpg)



FIGURE 4.36 The two functions in l'Hôpital's Rule, graphed with their linear approximations at $x = a$ .


**HISTORICAL BIOGRAPHY**

Cauchy was born in Paris the year the French revolution began. He was the first to define fully the ideas of convergence and absolute convergence of infinite series. His classic works Cours d'analyse (Course on Analysis, 1821) and Résumé des leçons ... sur le calcul infinitésimal (1823) were his greatest contributions to calculus. 

To know more, visit the companion Website. 

When $g(x) = x$ , Theorem 7 is the Mean Value Theorem. 

l'Hôpital's Rule gives 

$$
\begin{array}{l l} \lim _ {x \to \infty} \ln f (x) = \lim _ {x \to \infty} \frac {\ln x}{x} & \frac {\infty}{\infty} \\ = \lim _ {x \to \infty} \frac {1 / x}{1} & \text { L'Hôpital's   Rule   applied } \\ = \frac {0}{1} = 0. \end{array}
$$

Therefore, $\lim_{x\to\infty}x^{1/x}=\lim_{x\to\infty}f(x)=\lim_{x\to\infty}e^{\ln f(x)}=e^{0}=1.$ 

### Proof of L'Hôpital's Rule

Before we prove l'Hôpital's Rule, we consider a special case to provide some geometric insight for its reasonableness. Consider the two functions $f(x)$ and $g(x)$ having continuous derivatives and satisfying $f(a) = g(a) = 0$ , $g'(a) \neq 0$ . The graphs of $f(x)$ and $g(x)$ , together with their linearizations $y = f'(a)(x - a)$ and $y = g'(a)(x - a)$ , are shown in Figure 4.36. We know that near $x = a$ , the linearizations provide good approximations to the functions. In fact, 

$$
f (x) = f ^ {\prime} (a) (x - a) + \varepsilon_ {1} (x - a) \text { and } g (x) = g ^ {\prime} (a) (x - a) + \varepsilon_ {2} (x - a),
$$

where $\varepsilon_{1} \rightarrow 0$ and $\varepsilon_{2} \rightarrow 0$ as $x \rightarrow a$ . So, as Figure 4.36 suggests, 

$$
\begin{array}{l l} \lim _ {x \to a} \frac {f (x)}{g (x)} = \lim _ {x \to a} \frac {f ^ {\prime} (a) (x - a) + \varepsilon_ {1} (x - a)}{g ^ {\prime} (a) (x - a) + \varepsilon_ {2} (x - a)} \\ = \lim _ {x \to a} \frac {f ^ {\prime} (a) + \varepsilon_ {1}}{g ^ {\prime} (a) + \varepsilon_ {2}} = \frac {f ^ {\prime} (a)}{g ^ {\prime} (a)} & g ^ {\prime} (a) \neq 0 \\ = \lim _ {x \to a} \frac {f ^ {\prime} (x)}{g ^ {\prime} (x)}, & \text { Continuous   derivatives } \end{array}
$$

as asserted by l'Hôpital's Rule. We now proceed to a proof of the rule based on the more general assumptions stated in Theorem 6, which do not require that $g'(a) \neq 0$ or that the two functions have continuous derivatives. 

The proof of l'Hôpital's Rule is based on Cauchy's Mean Value Theorem, an extension of the Mean Value Theorem that involves two functions instead of one. We prove Cauchy's Theorem first and then show how it leads to l'Hôpital's Rule. 

**THEOREM 7—Cauchy's Mean Value Theorem**

Suppose functions $f$ and $g$ are continuous on $[a, b]$ and differentiable throughout $(a, b)$ and also suppose $g'(x) \neq 0$ throughout $(a, b)$ . Then there exists a number $c$ in $(a, b)$ at which 

$$
\frac {f ^ {\prime} (c)}{g ^ {\prime} (c)} = \frac {f (b) - f (a)}{g (b) - g (a)}.
$$

Proof We apply the Mean Value Theorem of Section 4.2 twice. First we use it to show that $g(a) \neq g(b)$ . For if $g(b)$ did equal $g(a)$ , then the Mean Value Theorem would give 

$$
g ^ {\prime} (c) = \frac {g (b) - g (a)}{b - a} = 0
$$

for some c between a and b, which cannot happen because $g'(x) \neq 0$ in $(a, b)$ . 

![教材插图](/books/thomas-calculus/assets/51ed2499cd8a5234d55517c21318cbd05f1abdf7fab1bc4b1f81cb596f4ed338.jpg)



FIGURE 4.37 There is at least one point P on the curve C for which the slope of the tangent line to the curve at P is the same as the slope of the secant line joining the points $A(g(a), f(a))$ and $B(g(b), f(b))$ .


We next apply the Mean Value Theorem to the function 

$$
F (x) = f (x) - f (a) - \frac {f (b) - f (a)}{g (b) - g (a)} [ g (x) - g (a) ].
$$

This function is continuous and differentiable where f and g are, and $F(b) = F(a) = 0$ . Therefore, there is a number c between a and b for which $F'(c) = 0$ . When expressed in terms of f and g, this equation becomes 

$$
F ^ {\prime} (c) = f ^ {\prime} (c) - \frac {f (b) - f (a)}{g (b) - g (a)} [ g ^ {\prime} (c) ] = 0
$$

so that 

$$
\frac {f ^ {\prime} (c)}{g ^ {\prime} (c)} = \frac {f (b) - f (a)}{g (b) - g (a)}.
$$

Cauchy's Mean Value Theorem has a geometric interpretation for a general winding curve $C$ in the plane joining the two points $A = (g(a), f(a))$ and $B = (g(b), f(b))$ . In Chapter 10 you will learn how to describe general curves such as $C$ , along with their tangent lines. There is at least one point $P$ on the curve for which the tangent to the curve at $P$ is parallel to the secant line joining the points $A$ and $B$ . The slope of that tangent line turns out to be the quotient $f' / g'$ evaluated at the number $c$ in the interval $(a, b)$ , which is the left-hand side of the equation in Theorem 7. Because the slope of the secant line joining $A$ and $B$ is 

$$
\frac {f (b) - f (a)}{g (b) - g (a)},
$$

the equation in Cauchy's Mean Value Theorem says that the slope of the tangent line equals the slope of the secant line. This geometric interpretation is shown in Figure 4.37. Notice from the figure that it is possible for more than one point on the curve $C$ to have a tangent line that is parallel to the secant line joining $A$ and $B$ . 

Proof of l'Hôpital's Rule Since $\lim_{x\to a}f(x) = \lim_{x\to a}g(x) = 0$ and both $f$ and $g$ are differentiable at $a$ , they must also be continuous at $a$ , hence $f(a) = g(a) = 0$ . 

We first establish the limit equation for the case $x \rightarrow a^{+}$ . The method needs almost no change to apply to $x \rightarrow a^{-}$ , and the combination of these two cases establishes the result. 

Suppose that $x$ lies in the interval to the right of $a$ . Then $g'(x) \neq 0$ , and we can apply Cauchy's Mean Value Theorem to the closed interval from $a$ to $x$ . This step produces a number $c$ between $a$ and $x$ such that 

$$
\frac {f ^ {\prime} (c)}{g ^ {\prime} (c)} = \frac {f (x) - f (a)}{g (x) - g (a)}.
$$

But $f(a) = g(a) = 0$ , so 

$$
\frac {f ^ {\prime} (c)}{g ^ {\prime} (c)} = \frac {f (x)}{g (x)}.
$$

As x approaches a, c approaches a because it always lies between a and x. Therefore, 

$$
\lim _ {x \rightarrow a ^ {+}} \frac {f (x)}{g (x)} = \lim _ {c \rightarrow a ^ {+}} \frac {f ^ {\prime} (c)}{g ^ {\prime} (c)} = \lim _ {x \rightarrow a ^ {+}} \frac {f ^ {\prime} (x)}{g ^ {\prime} (x)},
$$

which establishes l'Hôpital's Rule for the case where $x$ approaches $a$ from above. The case where $x$ approaches $a$ from below is proved by applying Cauchy's Mean Value Theorem to the closed interval $[x, a]$ , $x < a$ . 

### EXERCISES 4.5

#### Finding Limits in Two Ways

In Exercises 1–6, use l'Hôpital's Rule to evaluate the limit. Then evaluate the limit using a method studied in Chapter 2. 

1. $\lim_{x\to-2}\frac{x+2}{x^{2}-4}$

2. $\lim_{x \to 0} \frac {\sin 5 x}{x}$

3. $\lim_{x\to\infty}\frac{5x^{2}-3x}{7x^{2}+1}$

4. $\lim_{x\to1}\frac{x^{3}-1}{4x^{3}-x-3}$

5. $\lim_{x\to 0}\frac{1 - \cos x}{x^2}$ 

6. $\lim_{x\to \infty}\frac{2x^2 + 3x}{x^3 + x + 1}$ 

Applying l'Hôpital's Rule 

Use l'Hôpital's rule to find the limits in Exercises 7–52. 

7. $\lim_{x\to2}\frac{x-2}{x^{2}-4}$ 

8. $\lim_{x\to -5}\frac{x^2 - 25}{x + 5}$ 

9. $\lim_{t\to -3}\frac{t^3 - 4t + 15}{t^2 - t - 12}$ 

10. $\lim_{t\to -1}\frac{3t^3 + 3}{4t^3 - t + 3}$ 

11. $\lim_{x\to \infty}\frac{5x^3 - 2x}{7x^3 + 3}$ 

12. $\lim_{x\to \infty}\frac{x - 8x^2}{12x^2 + 5x}$ 

13. $\lim_{t\to 0}\frac{\sin t^2}{t}$ 

14. $\lim_{t\to 0}\frac{\sin5t}{2t}$ 

15. $\lim_{x\to 0}\frac{8x^2}{\cos{x} - 1}$ 

16. $\lim_{x\to 0}\frac{\sin x - x}{x^3}$ 

17. $\lim_{\theta \to \pi /2}\frac{2\theta - \pi}{\cos(2\pi - \theta)}$ 

18. $\lim_{\theta \to -\pi /3}\frac{3\theta + \pi}{\sin(\theta + (\pi / 3))}$ 

19. $\lim_{\theta\to\pi/6}\frac{\sin\theta-\frac{1}{2}}{\theta-\frac{\pi}{6}}$ 

20. $\lim_{\theta \to \pi /4}\frac{\tan\theta - 1}{\theta - \frac{\pi}{4}}$ 

21. $\lim_{\theta \to \pi /2}\frac{1 - \sin\theta}{1 + \cos 2\theta}$ 

22. $\lim_{x\to 1}\frac{x - 1}{\ln{x} - \sin{\pi x}}$ 

23. $\lim_{x\to 0}\frac{x^2}{\ln(\sec x)}$ 

24. $\lim_{x\to\pi/2}\frac{\ln(\csc x)}{(x-(\pi/2))^{2}}$ 

25. $\lim_{t\to 0}\frac{t(1 - \cos t)}{t - \sin t}$ 

26. $\lim_{t\to 0}\frac{t\sin t}{1 - \cos t}$ 

27. $\lim_{x\to (\pi /2)^{-}}\left(x - \frac{\pi}{2}\right)\sec x$ 

28. $\lim_{x\to (\pi /2)^{-}}\left(\frac{\pi}{2} -x\right)\tan x$ 

29. $\lim_{\theta \to 0}\frac{3^{\sin\theta} - 1}{\theta}$ 

30. $\lim_{\theta \to 0}\frac{(1 / 2)^{\theta} - 1}{\theta}$ 

31. $\lim_{x\to 0}\frac{x2^x}{2^x - 1}$ 

32. $\lim_{x\to 0}\frac{3^x - 1}{2^x - 1}$ 

33. $\lim_{x\to \infty}\frac{\ln(x + 1)}{\log_2x}$ 

34. $\lim_{x\to \infty}\frac{\log_2x}{\log_3(x + 3)}$ 

35. $\lim_{x\to 0^{+}}\frac{\ln(x^2 + 2x)}{\ln x}$ 

36. $\lim_{x\to 0^{+}}\frac{\ln(e^x - 1)}{\ln x}$ 

37. $\lim_{y\to 0}\frac{\sqrt{5y + 25} - 5}{y}$ 

38. $\lim_{y\to 0}\frac{\sqrt{ay + a^2} - a}{y},\quad a > 0$ 

39. $\lim_{x\to\infty}\left(\ln2x-\ln(x+1)\right)$ 

40. $\lim_{x\to 0^{+}}(\ln x - \ln \sin x)$ 

41. $\lim_{x\to 0^{+}}\frac{(\ln x)^{2}}{\ln(\sin x)}$ 

42. $\lim_{x\to 0^{+}}\left(\frac{3x + 1}{x} -\frac{1}{\sin x}\right)$ 

43. $\lim_{x\to 1^{+}}\left(\frac{1}{x - 1} -\frac{1}{\ln x}\right)$ 

44. $\lim_{x\to 0^{+}}(\csc x - \cot x + \cos x)$ 

45. $\lim_{\theta \to 0}\frac{\cos\theta - 1}{e^{\theta} - \theta - 1}$ 

46. $\lim_{h\to 0}\frac{e^h - (1 + h)}{h^2}$ 

47. $\lim_{t\to \infty}\frac{e^t + t^2}{e^t - t}$ 

48. $\lim_{x\to \infty}x^2 e^{-x}$ 

49. $\lim_{x\to 0}\frac{x - \sin x}{x\tan x}$ 

50. $\lim_{x\to 0}\frac{(e^x - 1)^2}{x\sin{x}}$ 

51. $\lim_{\theta \to 0}\frac{\theta - \sin\theta\cos\theta}{\tan\theta - \theta}$ 

52. $\lim_{x\to 0}\frac{\sin{3x} - 3x + x^2}{\sin{x}\sin{2x}}$ 

#### Indeterminate Powers and Products

Find the limits in Exercises 53–68. 

53. $\lim_{x\to 1^{+}}x^{1 / (1 - x)}$ 

54. $\lim_{x\to 1^{+}}x^{1 / (x - 1)}$ 

55. $\lim_{x\to \infty}\left(\ln x\right)^{1 / x}$ 

56. $\lim_{x\to e^{+}}(\ln x)^{1 / (x - e)}$ 

57. $\lim_{x\to 0^{+}}x^{-1 / \ln x}$ 

58. $\lim_{x\to \infty}x^{1 / \ln x}$ 

59. $\lim_{x\to \infty}(1 + 2x)^{1 / (2\ln x)}$ 

60. $\lim_{x\to 0}(e^x +x)^{1 / x}$ 

61. $\lim_{x\to 0^{+}}x^{x}$ 

62. $\lim_{x\to 0^{+}}\left(1 + \frac{1}{x}\right)^{x}$ 

63. $\lim_{x\to \infty}\left(\frac{x + 2}{x - 1}\right)^x$ 

64. $\lim_{x\to \infty}\left(\frac{x^2 + 1}{x + 2}\right)^{1 / x}$ 

65. $\lim_{x\to 0^{+}}x^{2}\ln x$ 

66. $\lim_{x\to 0^{+}}x(\ln x)^{2}$ 

67. $\lim_{x\to0^{+}}x\tan\left(\frac{\pi}{2}-x\right)$ 

68. $\lim_{x\to 0^{+}}\sin x\cdot \ln x$ 

#### Theory and Applications

L'Hôpital's Rule does not help with the limits in Exercises 69–76. Try it—you just keep on cycling. Find the limits some other way. 

69. $\lim_{x\to\infty}\frac{\sqrt{9x+1}}{\sqrt{x+1}}$ 

70. $\lim_{x\to0^{+}}\frac{\sqrt{x}}{\sqrt{\sin x}}$ 

71. $\lim_{x\to (\pi /2)^{-}}\frac{\sec x}{\tan x}$ 

72. $\lim_{x\to 0^{+}}\frac{\cot x}{\csc x}$ 

73. $\lim_{x\to \infty}\frac{2^x - 3^x}{3^x + 4^x}$ 

74. $\lim_{x\to -\infty}\frac{2^x + 4^x}{5^x - 2^x}$ 

75. $\lim_{x\to \infty}\frac{e^{x^2}}{xe^x}$ 

76. $\lim_{x\to 0^{+}}\frac{x}{e^{-1 / x}}$ 

77. Which one is correct, and which one is wrong? Give reasons for your answers.
a. $\lim_{x\to3}\frac{x-3}{x^{2}-3}=\lim_{x\to3}\frac{1}{2x}=\frac{1}{6}$ b. $\lim_{x\to3}\frac{x-3}{x^{2}-3}=\frac{0}{6}=0$ 

78. Which one is correct, and which one is wrong? Give reasons for your answers. 

a. $\lim_{x\to 0}\frac{x^2 - 2x}{x^2 - \sin x} = \lim_{x\to 0}\frac{2x - 2}{2x - \cos x}$ $= \lim_{x\to 0}\frac{2}{2 + \sin x} = \frac{2}{2 + 0} = 1$ 

$$
\lim _ {x \rightarrow 0} \frac {x ^ {2} - 2 x}{x ^ {2} - \sin x} = \lim _ {x \rightarrow 0} \frac {2 x - 2}{2 x - \cos x} = \frac {- 2}{0 - 1} = 2
$$

79. Only one of these calculations is correct. Which one? Why are the others wrong? Give reasons for your answers. 

a. $\lim_{x\to 0^{+}}x\ln x = 0\cdot (-\infty) = 0$ 

b. $\lim_{x\to0^{+}}x\ln x=0\cdot(-\infty)=-\infty$ 

c. $\lim_{x\to0^{+}}x\ln x=\lim_{x\to0^{+}}\frac{\ln x}{(1/x)}=\frac{-\infty}{\infty}=-1$ 

d. $\lim_{x\to 0^{+}}x\ln x = \lim_{x\to 0^{+}}\frac{\ln x}{(1 / x)}$ $= \lim_{x\to 0^{+}}\frac{(1 / x)}{(-1 / x^2)} = \lim_{x\to 0^{+}}(-x) = 0$ 

80. Find all values of $c$ that satisfy the conclusion of Cauchy's Mean Value Theorem for the given functions and interval. 

$$
\mathbf {a}. f (x) = x, \quad g (x) = x ^ {2}, \quad (a, b) = (- 2, 0)
$$

b. $f(x) = x, \quad g(x) = x^2, \quad (a,b)$ arbitrary 

$$
\mathbf {c}. f (x) = x ^ {3} / 3 - 4 x, \quad g (x) = x ^ {2}, \quad (a, b) = (0, 3)
81. $Continuous extension Find a value of c that makes the function$
f (x) = \left\{ \begin{array}{l l} \frac {9 x - 3 \sin 3 x}{5 x ^ {3}}, & x \neq 0 \\ c, & x = 0 \end{array} \right.
$$

continuous at $x = 0$ . Explain why your value of $c$ works. 

82. For what values of $a$ and $b$ is 

$$
\lim _ {x \rightarrow 0} \left(\frac {\tan 2 x}{x ^ {3}} + \frac {a}{x ^ {2}} + \frac {\sin b x}{x}\right) = 0?
$$

![教材插图](/books/thomas-calculus/assets/d30afe8e5e82001956bacd2770539a86db7b4d5785af3cea9e0cf864f4b7096b.jpg)


83. $\infty -\infty$ Form 

a. Estimate the value of 

$$
\lim _ {x \rightarrow \infty} \left(x - \sqrt {x ^ {2} + x}\right)
$$

by graphing $f(x) = x - \sqrt{x^{2} + x}$ over a suitably large interval of x-values. 

b. Now confirm your estimate by finding the limit with l'Hôpital's Rule. As the first step, multiply $f(x)$ by the fraction $\left(x + \sqrt{x^2 + x}\right) / \left(x + \sqrt{x^2 + x}\right)$ and simplify the new numerator. 

84. Find $\lim_{x\to\infty}\left(\sqrt{x^{2}+1}-\sqrt{x}\right)$ . 

![教材插图](/books/thomas-calculus/assets/acbb1c98ee581373fa64afbc65f8d09464cbbfefb33f05c7fe86d2fc9d72e6ce.jpg)


85. 0/0 Form Estimate the value of 

$$
\lim _ {x \rightarrow 1} \frac {2 x ^ {2} - (3 x + 1) \sqrt {x} + 2}{x - 1}
$$

by graphing. Then confirm your estimate with l'Hôpital's Rule.
86. This exercise explores the difference between 

$$
\lim _ {x \rightarrow \infty} \left(1 + \frac {1}{x ^ {2}}\right) ^ {x}
$$

and 

$$
\lim _ {x \rightarrow \infty} \left(1 + \frac {1}{x}\right) ^ {x} = e.
$$

a. Use l'Hôpital's Rule to show that 

$$
\lim _ {x \rightarrow \infty} \left(1 + \frac {1}{x}\right) ^ {x} = e.
$$

T b. Graph 

$$
f (x) = \left(1 + \frac {1}{x ^ {2}}\right) ^ {x} \quad \text { and } \quad g (x) = \left(1 + \frac {1}{x}\right) ^ {x}
$$

together for $x \geq 0$ . How does the behavior of $f$ compare with that of $g$ ? Estimate the value of $\lim_{x \to \infty} f(x)$ . 

c. Confirm your estimate of $\lim_{x\to \infty}f(x)$ by calculating it with l'Hôpital's Rule. 

87. Show that 

$$
\lim _ {k \rightarrow \infty} \left(1 + \frac {r}{k}\right) ^ {k} = e ^ {r}.
$$

88. Given that $x > 0$ , find the maximum value, if any, of 

a. $x^{1/x}$ 

b. $x^{1/x^{2}}$ 

c. $x^{1/x^{n}}$ (n a positive integer) 

d. Show that $\lim_{x\to \infty}x^{1 / x^n} = 1$ for every positive integer $n$ . 

89. Use limits to find horizontal asymptotes for each function. 

a. $y = x \tan\left(\frac{1}{x}\right)$ 

b. $y = \frac{3x + e^{2x}}{2x + e^{3x}}$ 

90. Find $f'(0)$ for $f(x) = \begin{cases} e^{-1/x^2}, & x \neq 0 \\ 0, & x = 0. \end{cases}$ 

![教材插图](/books/thomas-calculus/assets/d9c5293d7018456b50845054c7c66006e7518536aebd1c5676f8fac931b2126b.jpg)


91. T The continuous extension of $(\sin x)^x$ to $[0, \pi]$ 

a. Graph $f(x) = (\sin x)^x$ on the interval $0 \leq x \leq \pi$ . What value would you assign to $f$ to make it continuous at $x = 0$ ? 

b. Verify your conclusion in part (a) by finding $\lim_{x\to 0^{+}}f(x)$ with l'Hôpital's Rule. 

c. Returning to the graph, estimate the maximum value of $f$ on $[0, \pi]$ . About where is max $f$ taken on? 

d. Sharpen your estimate in part (c) by graphing $f'$ in the same window to see where its graph crosses the $x$ -axis. To simplify your work, you might want to delete the exponential factor from the expression for $f'$ and graph just the factor that has a zero. 

92. T The function $(\sin x)^{\tan x}$ (Continuation of Exercise 91) 

a. Graph $f(x) = (\sin x)^{\tan x}$ on the interval $-7 \leq x \leq 7$ . How do you account for the gaps in the graph? How wide are the gaps? 

b. Now graph $f$ on the interval $0 \leq x \leq \pi$ . The function is not defined at $x = \pi / 2$ , but the graph has no break at this point. What is going on? What value does the graph appear to give for $f$ at $x = \pi / 2$ ? (Hint: Use l'Hôpital's Rule to find lim $f$ as $x \to (\pi / 2)^{-}$ and $x \to (\pi / 2)^{+}$ .) 

c. Continuing with the graphs in part (b), find $\max f$ and $\min f$ as accurately as you can and estimate the values of $x$ at which they are taken on.

## 4.6 Applied Optimization

![教材插图](/books/thomas-calculus/assets/08a6d8a275e0d75a4f4e15218a9fc424ac9286b356042778cb0af5ba8be64421.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/e030f13664cb9f3a862ccfa43b4339d40dc0191ce522d46ef68865fc3fc668da.jpg)



(b)



FIGURE 4.38 An open box made by cutting the corners from a square sheet of tin. What size corners maximize the box's volume (Example 1)?


![教材插图](/books/thomas-calculus/assets/5da21f227339768a3cfc4d76ea9498afe9447d06dc832ff94cb182dfe73549c6.jpg)



FIGURE 4.39 The volume of the box in Figure 4.38 graphed as a function of x.


What are the dimensions of a rectangle with fixed perimeter having maximum area? What are the dimensions for the least expensive cylindrical can of a given volume? How many items should be produced for the most profitable production run? Each of these questions asks for the best, or optimal, value of a given function. In this section we use derivatives to solve a variety of optimization problems in mathematics, physics, economics, and business. 

#### Solving Applied Optimization Problems

1. Read the problem. Read the problem until you understand it. What is given? What is the unknown quantity to be optimized (maximized or minimized)? 

2. Introduce variables. List every relevant relation in the problem as an equation. In most problems it is helpful to draw a picture. 

3. Write an equation for the unknown quantity. Express the quantity to be optimized as a function of a single variable. This may require considerable manipulation. 

4. Test the critical points and endpoints in the domain of the function found in the previous step. Use what you know about the shape of the function's graph. Use the first and second derivatives to identify and classify the function's critical points. 

**EXAMPLE 1** An open-top box is to be made by cutting small congruent squares from the corners of a 12-cm-by-12-cm sheet of tin and bending up the sides. How large should the squares cut from the corners be to make the box hold as much as possible? 

**Solution** We start with a picture (Figure 4.38). In the figure, the corner squares are x cm on a side. The volume of the box is a function of this variable: 

$$
V (x) = x (1 2 - 2 x) ^ {2} = 1 4 4 x - 4 8 x ^ {2} + 4 x ^ {3}. \quad V = h l w
$$

Since the sides of the sheet of tin are only 12 cm long, $x \leq 6$ and the domain of V is the interval $0 \leq x \leq 6$ . 

A graph of V (Figure 4.39) suggests a minimum value of 0 at x = 0 and x = 6 and a maximum near x = 2. To learn more, we examine the first derivative of V with respect to x: 

$$
\frac {d V}{d x} = 1 4 4 - 9 6 x + 1 2 x ^ {2} = 1 2 (1 2 - 8 x + x ^ {2}) = 1 2 (2 - x) (6 - x).
$$

Of the two zeros, $x = 2$ and $x = 6$ , only $x = 2$ lies in the interior of the function's domain and makes the critical-point list. The values of $V$ at this one critical point and two endpoints are 

Critical-point value: $V(2) = 128$ 

Endpoint values: 

$$
V (0) = 0, \quad V (6) = 0.
$$

The maximum volume is $128 \, cm^{3}$ . The cutout squares should be 2 cm on a side. 

![教材插图](/books/thomas-calculus/assets/c6712cea0386bc03f23c347d2328b15b14151f21d999af36cb84f2bb9a9ade97.jpg)



FIGURE 4.40 Example 2 shows that this one-liter can uses the least material when h = 2r.


**EXAMPLE 2** You have been asked to design a one-liter can shaped like a right circular cylinder (Figure 4.40). What dimensions will use the least material? 

**Solution** Volume of can: If r and h are measured in centimeters, then the volume of the can in cubic centimeters is 

Surface area of can: 

$$
\begin{array}{r l} \pi r ^ {2} h & = 1 0 0 0. \\ A & = \underbrace {2 \pi r ^ {2}} _ {\text { circular   ends }} + \underbrace {2 \pi r h} _ {\text { cylindrical   wall }} \end{array} \quad 1 \text { liter } = 1 0 0 0 \mathrm{cm} ^ {3}
$$

How can we interpret the phrase “least material”? For a first approximation we can ignore the thickness of the material and the waste in manufacturing. Then we ask for dimensions r and h that make the total surface area as small as possible, while satisfying the constraint $\pi r^{2}h = 1000 \, cm^{3}$ . 

To express the surface area as a function of one variable, we solve for one of the variables in $\pi r^{2}h = 1000$ and substitute that expression into the surface area formula. Solving for h is easier: 

$$
h = \frac {1 0 0 0}{\pi r ^ {2}}.
$$

Thus, 

$$
\begin{array}{l} A = 2 \pi r ^ {2} + 2 \pi r h \\ = 2 \pi r ^ {2} + 2 \pi r \left(\frac {1 0 0 0}{\pi r ^ {2}}\right) \\ = 2 \pi r ^ {2} + \frac {2 0 0 0}{r}. \end{array}
$$

Our goal is to find a value of $r > 0$ that minimizes the value of $A$ . 

Since A is differentiable on r > 0, an interval with no endpoints, it can have a minimum value only where its first derivative is zero. 

![教材插图](/books/thomas-calculus/assets/27bacdf8436f38462544a761c374c477f8d96b4b60ed67694a7ab99adebc81fe.jpg)


![教材插图](/books/thomas-calculus/assets/c5221a828ac8c5ee8c4ee32f0982345eadd03bd3b09c7202473a3479442b5f69.jpg)



FIGURE 4.41 The graph of $A = 2\pi r^2 + 2000 / r$ is concave up.


$$
\begin{array}{r l r} \frac {d A}{d r} & = 4 \pi r - \frac {2 0 0 0}{r ^ {2}} \\ 0 & = 4 \pi r - \frac {2 0 0 0}{r ^ {2}} & \text {   Set   } d A / d r = 0. \\ 4 \pi r ^ {3} & = 2 0 0 0 & \text {   Multiply   by   } r ^ {2}. \\ r & = \sqrt [ 3 ]{\frac {5 0 0}{\pi}} \approx 5. 4 2 & \text {   Solve   for   } r. \end{array}
$$

What happens at $r = \sqrt[3]{500 / \pi}$ ? 

The second derivative 

$$
\frac {d ^ {2} A}{d r ^ {2}} = 4 \pi + \frac {4 0 0 0}{r ^ {3}}
$$

is positive throughout the domain of $A$ . The graph is therefore everywhere concave up, and the value of $A$ at $r = \sqrt[3]{500 / \pi}$ is an absolute minimum. See Figure 4.41. 

The corresponding value of h (after a little algebra) is 

$$
h = \frac {1 0 0 0}{\pi r ^ {2}} = 2 \sqrt [ 3 ]{\frac {5 0 0}{\pi}} = 2 r.
$$

The one-liter can that uses the least material has height equal to twice the radius, here with $r \approx 5.42 \, \mathrm{cm}$ and $h \approx 10.84 \, \mathrm{cm}$ . 

![教材插图](/books/thomas-calculus/assets/0f542345b805845adb4196f7014e60eaf917a261f683395cf7308031d26b74f6.jpg)



FIGURE 4.42 The rectangle inscribed in the semicircle in Example 3.

#### Examples from Mathematics and Physics

**EXAMPLE 3** A rectangle is to be inscribed in a semicircle of radius 2. What is the largest area the rectangle can have, and what are its dimensions? 

**Solution** Let $(x, \sqrt{4 - x^{2}})$ be the coordinates of the upper right corner of the rectangle obtained by placing the circle and rectangle in the coordinate plane (Figure 4.42). The length, height, and area of the rectangle can then be expressed in terms of the position x of the lower right-hand corner: 

$$
\text { Length: } 2 x, \quad \text { Height: } \sqrt {4 - x ^ {2}}, \quad \text { Area: } 2 x \sqrt {4 - x ^ {2}}.
$$

Notice that the values of $x$ are to be found in the interval $0 \leq x \leq 2$ , where the selected corner of the rectangle lies. 

Our goal is to find the absolute maximum value of the function 

$$
A (x) = 2 x \sqrt {4 - x ^ {2}}
$$

on the domain [0, 2]. 

The derivative 

$$
\frac {d A}{d x} = \frac {- 2 x ^ {2}}{\sqrt {4 - x ^ {2}}} + 2 \sqrt {4 - x ^ {2}}
$$

is not defined when x = 2 and is equal to zero when 

$$
\begin{array}{c} \frac {- 2 x ^ {2}}{\sqrt {4 - x ^ {2}}} + 2 \sqrt {4 - x ^ {2}} = 0 \\ - 2 x ^ {2} + 2 (4 - x ^ {2}) = 0 \\ 8 - 4 x ^ {2} = 0 \\ x ^ {2} = 2 \\ x = \pm \sqrt {2}. \end{array}
$$

Of the two zeros, $x = \sqrt{2}$ and $x = -\sqrt{2}$ , only $x = \sqrt{2}$ lies in the interior of $A$ 's domain and makes the critical-point list. The values of $A$ at the endpoints and at this one critical point are 

$$
\begin{array}{l} \text { Critical - point   value: } A (\sqrt {2}) = 2 \sqrt {2} \sqrt {4 - 2} = 4 \\ \text { Endpoint   values: } A (0) = 0, \quad A (2) = 0. \end{array}
$$

The area has a maximum value of 4 when the rectangle is $\sqrt{4 - x^{2}} = \sqrt{2}$ units high and $2x = 2\sqrt{2}$ units long. 

HISTORICAL BIOGRAPHY
Willebrord Snell van Royen
(1580–1626) 

Snell was born in Leiden, Holland. Snell developed an important result involving the measure of light refraction as it travels into different media. While he never published the result, Descartes did so ten years after Snell's death, and today it is known as Snell's law. 

To know more, visit the companion Website. 

**EXAMPLE 4** The speed of light depends on the medium through which it travels, and is generally slower in denser media. 

Fermat's principle in optics states that light travels from one point to another along a path for which the time of travel is a minimum. Describe the path that a ray of light will follow in going from a point $A$ in a medium where the speed of light is $c_{1}$ to a point $B$ in a second medium where the speed of light is $c_{2}$ . 

**Solution** Since light traveling from A to B follows the quickest route, we look for a path that will minimize the travel time. We assume that A and B lie in the xy-plane and that the line separating the two media is the x-axis (Figure 4.43). We place A at coordinates $(0, a)$ and B at coordinates $(d, -b)$ in the xy-plane. 

In a uniform medium, where the speed of light remains constant, “shortest time” means “shortest path,” and the ray of light will follow a straight line. Thus the path from A to B will consist of a line segment from A to a boundary point P, followed by another line segment from P to B. Distance traveled equals rate times time, so 

![教材插图](/books/thomas-calculus/assets/63c4f1ef021ae8196bd96a108c695af91205f0fcae3ce69c6a39c1465e4b3aa8.jpg)



FIGURE 4.43 A light ray refracted (deflected from its path) as it passes from one medium to a denser medium (Example 4).


$$
\text { Time } = \frac {\text { distance }}{\text { rate }}.
$$

From Figure 4.43, the time required for light to travel from A to P is 

$$
t _ {1} = \frac {A P}{c _ {1}} = \frac {\sqrt {a ^ {2} + x ^ {2}}}{c _ {1}}.
$$


FIGURE 4.44 The sign pattern of dt/dx in Example 4.


From $P$ to $B$ , the time is 

$$
t _ {2} = \frac {P B}{c _ {2}} = \frac {\sqrt {b ^ {2} + (d - x) ^ {2}}}{c _ {2}}.
$$

The time from A to B is the sum of these: 

$$
t = t _ {1} + t _ {2} = \frac {\sqrt {a ^ {2} + x ^ {2}}}{c _ {1}} + \frac {\sqrt {b ^ {2} + (d - x) ^ {2}}}{c _ {2}}.
$$

This equation expresses t as a differentiable function of x whose domain is $[0, d]$ . We want to find the absolute minimum value of t on this closed interval. We find the derivative 

![教材插图](/books/thomas-calculus/assets/f12416603f2374a104a89d3ba3fa6fd3cfb24b936bc6d8462b99adfdb43447be.jpg)


$$
\frac {d t}{d x} = \frac {x}{c _ {1} \sqrt {a ^ {2} + x ^ {2}}} - \frac {d - x}{c _ {2} \sqrt {b ^ {2} + (d - x) ^ {2}}}
$$

and observe that it is continuous. In terms of the angles $\theta_{1}$ and $\theta_{2}$ in Figure 4.43, 

$$
\frac {d t}{d x} = \frac {\sin \theta_ {1}}{c _ {1}} - \frac {\sin \theta_ {2}}{c _ {2}}.
$$

The function t has a negative derivative at x = 0 and a positive derivative at x = d. Since dt/dx is continuous over the interval $[0, d]$ , by the Intermediate Value Theorem for continuous functions (Section 2.6), there is a point $x_{0} \in [0, d]$ where dt/dx = 0 (Figure 4.44). There is only one such point because dt/dx is an increasing function of x (Exercise 70). At this unique point we then have 

$$
\frac {\sin \theta_ {1}}{c _ {1}} = \frac {\sin \theta_ {2}}{c _ {2}}.
$$

This equation is Snell's Law or the Law of Refraction, and it is an important principle in the theory of optics. It describes the path the ray of light follows. 

#### Examples from Economics

Suppose that 

$r(x) = \text{the revenue from selling } x \text{ items}$ 

$c(x) = \text{the cost of producing the } x \text{ items}$ 

$p(x) = r(x) - c(x) = \text{the profit from producing and selling } x \text{ items.}$ 

Although $x$ is usually an integer in many applications, we can learn about the behavior of these functions by defining them for all nonzero real numbers and by assuming they are differentiable functions. Economists use the terms marginal revenue, marginal cost, and marginal profit to name the derivatives $r'(x), c'(x)$ , and $p'(x)$ of the revenue, cost, and profit functions. Let's consider the relationship of the profit $p$ to these derivatives. 

If $r(x)$ and $c(x)$ are differentiable for x in some interval of production possibilities, and if $p(x) = r(x) - c(x)$ has a maximum value there, it occurs at a critical point of $p(x)$ or at an endpoint of the interval. If it occurs at a critical point, then $p'(x) = r'(x) - c'(x) = 0$ and we see that $r'(x) = c'(x)$ . In economic terms, this last equation means that 

![教材插图](/books/thomas-calculus/assets/d76fcf7b7525ac64beab4f64859b150b500950c42f6133980c4198bafbd10b73.jpg)



FIGURE 4.46 The cost and revenue curves for Example 5.


At a production level yielding maximum profit, marginal revenue equals marginal cost (Figure 4.45). 

![教材插图](/books/thomas-calculus/assets/f6248dfa7fde1b8b0e33577e85aef7a72db4ac0d7e9acc3d2a0a89cb4856ac9c.jpg)



FIGURE 4.45 The graph of a typical cost function starts concave down and later turns concave up. It crosses the revenue curve at the break-even point B. To the left of B, the company operates at a loss. To the right, the company operates at a profit, with the maximum profit occurring where $c'(x) = r'(x)$ . Farther to the right, cost exceeds revenue (perhaps because of a combination of rising labor and material costs, and market saturation) and production levels become unprofitable again.


**EXAMPLE 5** Suppose that $r(x) = 9x$ and $c(x) = x^{3} - 6x^{2} + 15x$ are the revenue and the cost functions, given in millions of dollars, where x represents millions of MP3 players produced. Is there a production level that maximizes profit? If so, what is it? 

**Solution** Notice that $r'(x) = 9$ and $c'(x) = 3x^{2} - 12x + 15$ . 

$$
\begin{array}{l l} 3 x ^ {2} - 1 2 x + 1 5 = 9 & \text {   Set   } c ^ {\prime} (x) = r ^ {\prime} (x). \\ 3 x ^ {2} - 1 2 x + 6 = 0 \end{array}
$$

The two solutions of the quadratic equation are 

$$
\begin{array}{l} x _ {1} = \frac {1 2 - \sqrt {7 2}}{6} = 2 - \sqrt {2} \approx 0. 5 8 6 \quad \text { and } \\ x _ {2} = \frac {1 2 + \sqrt {7 2}}{6} = 2 + \sqrt {2} \approx 3. 4 1 4. \end{array}
$$

The possible production levels for maximum profit are $x \approx 0.586$ million MP3 players or $x \approx 3.414$ million. The second derivative of $p(x) = r(x) - c(x)$ is $p''(x) = -c''(x)$ since $r''(x)$ is everywhere zero. Thus, $p''(x) = 6(2 - x)$ , which is negative at $x = 2 + \sqrt{2}$ and positive at $x = 2 - \sqrt{2}$ . By the Second Derivative Test, a maximum profit occurs at about x = 3.414 (where revenue exceeds costs) and maximum loss occurs at about x = 0.586. The graphs of $r(x)$ and $c(x)$ are shown in Figure 4.46. 

**EXAMPLE 6** A cabinetmaker uses cherry wood to produce 5 desks each day. Each delivery of one container of wood is $5000, whereas the storage of that material is $10 per day per unit stored, where a unit is the amount of material needed by her to produce 1 desk. How much material should be ordered each time, and how often should the material be delivered, to minimize her average daily cost in the production cycle between deliveries? 

**Solution** If she asks for a delivery every x days, then she must order 5x units to have enough material for that delivery cycle. The average amount in storage is approximately one-half of the delivery amount, or 5x/2. Thus, the cost of delivery and storage for each cycle is approximately 

![教材插图](/books/thomas-calculus/assets/14553a1296627e18d377f638914af059094c303759e336561ae2ac8d2e229e35.jpg)



FIGURE 4.47 The average daily cost $c(x)$ is the sum of a hyperbola and a linear function (Example 6).


$$
\begin{array}{l} \text {Cost per cycle = delivery costs + storage costs} \\ \text {Cost per cycle = \underbrace {5000} _ {\text {delivery cost}} + \underbrace {\left(\frac {5 x}{2}\right)} _ {\text {average amount stored}} \cdot \underbrace {x} _ {\text {number of days stored}} \cdot \underbrace {10} _ {\text {storage cost per day}}} \end{array}
$$

We compute the average daily cost $c(x)$ by dividing the cost per cycle by the number of days x in the cycle (see Figure 4.47). 

$$
c (x) = \frac {5 0 0 0}{x} + 2 5 x, \quad x > 0.
$$

As $x \rightarrow 0$ and as $x \rightarrow \infty$ , the average daily cost becomes large. So we expect a minimum to exist, but where? Our goal is to determine the number of days x between deliveries that provides the absolute minimum cost. 

We find the critical points by determining where the derivative is equal to zero: 

$$
\begin{array}{c} c ^ {\prime} (x) = - \frac {5 0 0}{x ^ {2}} + 2 5 = 0 \\ x = \pm \sqrt {2 0 0} \approx \pm 1 4. 1 4. \end{array}
$$

Of the two critical points, only $\sqrt{200}$ lies in the domain of $c(x)$ . The critical point value of the average daily cost is 

$$
c (\sqrt {2 0 0}) = \frac {5 0 0 0}{\sqrt {2 0 0}} + 2 5 \sqrt {2 0 0} = 5 0 0 \sqrt {2} \approx 7 0 7. 1 1.
$$

We note that $c(x)$ is defined over the open interval $(0, \infty)$ with $c''(x) = 10000 / x^3 > 0$ . Thus, an absolute minimum exists at $x = \sqrt{200} \approx 14.14$ days. 

The cabinetmaker should schedule a delivery of $5(14) = 70$ units of wood every 14 days. 

### EXERCISES 4.6

#### Mathematical Applications

Whenever you are maximizing or minimizing a function of a single variable, we urge you to graph it over the domain that is appropriate to the problem you are solving. The graph will provide insight before you calculate and will furnish a visual context for understanding your answer. 

1. Minimizing perimeter What is the smallest perimeter possible for a rectangle whose area is $16\mathrm{cm}^2$ , and what are its dimensions? 

2. Show that among all rectangles with an 8-m perimeter, the one with largest area is a square. 

3. The figure shows a rectangle inscribed in an isosceles right triangle whose hypotenuse is 2 units long. 

![教材插图](/books/thomas-calculus/assets/646156b8a10d9807f0ccf76675673cea04aebed40066154277f5c01938dfe9dd.jpg)


a. Express the y-coordinate of P in terms of x. (Hint: Write an equation for the line AB.) 

b. Express the area of the rectangle in terms of x. 

c. What is the largest area the rectangle can have, and what are its dimensions? 

4. A rectangle has its base on the $x$ -axis and its upper two vertices on the parabola $y = 12 - x^2$ . What is the largest area the rectangle can have, and what are its dimensions? 

5. You are planning to make an open rectangular box from a 24-cm-by-45-cm piece of cardboard by cutting congruent squares from the corners and folding up the sides. What are the dimensions of the box of largest volume you can make this way, and what is its volume? 

6. You are planning to close off a corner of the first quadrant with a line segment 20 units long running from $(a,0)$ to $(0,b)$ . Show that the area of the triangle enclosed by the segment is largest when $a = b$ . 

7. The best fencing plan A rectangular plot of farmland will be bounded on one side by a river and on the other three sides by a single-strand electric fence. With 800 m of wire at your disposal, what is the largest area you can enclose, and what are its dimensions? 

8. The shortest fence A $216 \, m^{2}$ rectangular pea patch is to be enclosed by a fence and divided into two equal parts by another fence parallel to one of the sides. What dimensions for the outer rectangle will require the smallest total length of fence? How much fence will be needed? 

![教材插图](/books/thomas-calculus/assets/5692cc6ae73dd30c42289deb83d9d1cfc3b5e7877717f5008bc27307d38c28b2.jpg)


9. Designing a tank Your iron works has contracted to design and build a $4 \, m^{3}$ , square-based, open-top, rectangular steel holding tank for a paper company. The tank is to be made by welding thin stainless steel plates together along their edges. As the production engineer, your job is to find dimensions for the base and height that will make the tank weigh as little as possible. 

a. What dimensions do you tell the shop to use? 

b. Briefly describe how you took weight into account. 

10. Catching rainwater A 20 m $^{3}$ open-top rectangular tank with a square base x m on a side and y m deep is to be built with its top flush with the ground to catch runoff water. The costs associated with the tank involve not only the material from which the tank is made but also an excavation charge proportional to the product xy. 

a. If the total cost is 

$$
c = 5 (x ^ {2} + 4 x y) + 1 0 x y,
$$

what values of $x$ and $y$ will minimize it? 

b. Give a possible scenario for the cost function in part (a). 

11. Designing a poster You are designing a rectangular poster to contain $312.5 \, cm^{2}$ of printing with a 10-cm margin at the top and bottom and a 5-cm margin at each side. What overall dimensions will minimize the amount of paper used? 

12. Find the volume of the largest right circular cone that can be inscribed in a sphere of radius 3. 

![教材插图](/books/thomas-calculus/assets/2276905299b43168208e9ec100cafc7cb139fdbe2ee701c7bd209cab631b1503.jpg)


13. Two sides of a triangle have lengths $a$ and $b$ , and the angle between them is $\theta$ . What value of $\theta$ will maximize the triangle's area? (Hint: $A = (1/2)ab\sin\theta$ .) 

14. Designing a can What are the dimensions of the lightest open-top right circular cylindrical can that will hold a volume of $1000 \, cm^{3}$ ? Compare the result here with the result in Example 2. 

15. Designing a can You are designing a $1000 \, cm^{3}$ right circular cylindrical can whose manufacture will take waste into account. There is no waste in cutting the aluminum for the side, but the top and bottom of radius r will be cut from squares that measure 2r units on a side. The total amount of aluminum used up by the can will therefore be 

$$
A = 8 r ^ {2} + 2 \pi r h
$$

rather than the $A = 2\pi r^{2} + 2\pi rh$ in Example 2. In Example 2, the ratio of h to r for the most economical can was 2 to 1. What is the ratio for the most economical can now? 

16. Designing a box with a lid A piece of cardboard measures 30 cm by 45 cm. Two equal squares are removed from the corners of a 30-cm side as shown in the figure. Two equal rectangles are removed from the other corners so that the tabs can be folded to form a rectangular box with lid. 

![教材插图](/books/thomas-calculus/assets/2824d5f61e6ed3ed3b7b700c310fc005f006c3001e24ba83e218d1c617fe8863.jpg)


a. Write a formula $V(x)$ for the volume of the box. 

b. Find the domain of V for the problem situation, and graph V over this domain. 

c. Use a graphical method to find the maximum volume and the value of x that gives it. 

d. Confirm your result in part (c) analytically. 

17. Designing a suitcase A 60-cm-by-90-cm sheet of cardboard is folded in half to form a 60-cm-by-45-cm rectangle as shown in the accompanying figure. Then four congruent squares of side length x are cut from the corners of the folded rectangle. The sheet is unfolded, and the six tabs are folded up to form a box with sides and a lid. 

a. Write a formula $V(x)$ for the volume of the box. 

b. Find the domain of V for the problem situation and graph V over this domain. 

c. Use a graphical method to find the maximum volume and the value of x that gives it. 

d. Confirm your result in part (c) analytically. 

e. Find a value of x that yields a volume of $17,500 \, cm^{3}$ . 

f. Write a paragraph describing the issues that arise in part (b). 

![教材插图](/books/thomas-calculus/assets/3877bfd8f4248645ad8d1fdb0a4ebb875358a11d7d247debfcda4bfc98a38776.jpg)



The sheet is then unfolded.


![教材插图](/books/thomas-calculus/assets/d01ba9b44276e026e9ac8f4f401a76fd80cae0027fc98453d326982df6d09ed2.jpg)


T 18. A rectangle is to be inscribed under the arch of the curve $y = 4\cos (0.5x)$ from $x = -\pi$ to $x = \pi$ . What are the dimensions of the rectangle with largest area, and what is the largest area? 

![教材插图](/books/thomas-calculus/assets/5846565c29d989a5656c039f8dcc9126ae8bd7c54251ebb71c78b47d32bb0004.jpg)


19. Find the dimensions of a right circular cylinder of maximum volume that can be inscribed in a sphere of radius 10 cm. What is the maximum volume? 

20. a. A certain Postal Service will accept a box for domestic shipment only if the sum of its length and girth (distance around) does not exceed 276 cm. What dimensions will give a box with a square end the largest possible volume? 

![教材插图](/books/thomas-calculus/assets/b5e6ea8481a0f9b367c3f7117f7328f85592470fec7760890e494e04f9c24ba7.jpg)


T b. Graph the volume of a 276-cm box (length plus girth equals 276 cm) as a function of its length, and compare what you see with your answer in part (a). 

21. (Continuation of Exercise 20) 

a. Suppose that instead of having a box with square ends, you have a box with square sides so that its dimensions are $h$ by $h$ by $w$ and the girth is $2h + 2w$ . What dimensions will give the box its largest volume now? 

![教材插图](/books/thomas-calculus/assets/769df7530fe105a29def5a90ef8bb87f66638b0bdfd650e8bc3f8dc348d73155.jpg)


T b. Graph the volume as a function of h and compare what you see with your answer in part (a). 

22. A window is in the form of a rectangle surmounted by a semicircle. The rectangle is of clear glass, whereas the semicircle is of tinted glass that transmits only half as much light per unit area as clear glass does. The total perimeter is fixed. Find the proportions of the window that will admit the most light. Neglect the thickness of the frame. 

![教材插图](/books/thomas-calculus/assets/efc6b7fb9adcb49a3e2fd95daced721da37795cd3b6eb27763c324208b973e80.jpg)


23. A silo (base not included) is to be constructed in the form of a cylinder surmounted by a hemisphere. The cost of construction per square unit of surface area is twice as great for the hemisphere as it is for the cylindrical sidewall. Determine the dimensions to be used if the volume is fixed and the cost of construction is to be kept to a minimum. Neglect the thickness of the silo and waste in construction. 

24. The trough in the figure is to be made to the dimensions shown. Only the angle $\theta$ can be varied. What value of $\theta$ will maximize the trough's volume? 

![教材插图](/books/thomas-calculus/assets/2196e4c6b21c610d02fdf1d81d47f6ce56ff7a62d4657ba6bb93c4d71186049d.jpg)


25. Paper folding A rectangular sheet of 21.6-cm-by-28-cm paper is placed on a flat surface. One of the corners is placed on the opposite longer edge, as shown in the figure, and held there as the paper is smoothed flat. The problem is to make the length of the crease as small as possible. Call the length L. Try it with paper. 

a. Show that $L^2 = 2x^3 / (2x - 21.6)$ . 

b. What value of $x$ minimizes $L^2$ ? 

c. What is the minimum value of L? 

![教材插图](/books/thomas-calculus/assets/43f5f71f97a2da41af1f1efb837d9068ce0d6848f5f1eef6cdaac953444224a4.jpg)


26. Constructing cylinders Compare the answers to the following two construction problems. 

a. A rectangular sheet of perimeter 36 cm and dimensions x cm by y cm is to be rolled into a cylinder as shown in part (a) of the figure. What values of x and y give the largest volume? 

b. The same sheet is to be revolved about one of the sides of length $y$ to sweep out the cylinder as shown in part (b) of the figure. What values of $x$ and $y$ give the largest volume? 

![教材插图](/books/thomas-calculus/assets/ec10f6e35b54e02fb94adfad7011e5fbb7ee080566c2d7a933d0a3f53fd04b82.jpg)


![教材插图](/books/thomas-calculus/assets/85a63e86659e77b44d070ac588ecd3c914a79fe10c8aa215e7a3b001c1f8e70a.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/85e561e48f2641206b88311166553c931dd9ab4632c2abad327036f853030bef.jpg)



(b)


27. Constructing cones A right triangle whose hypotenuse is $\sqrt{3}$ m long is revolved about one of its legs to generate a right circular cone. Find the radius, height, and volume of the cone of greatest volume that can be made this way. 

![教材插图](/books/thomas-calculus/assets/e256fac663e0ffeb3750b0ed577368e7b6fafbd59cdfff77be108c5c2f0ee21a.jpg)


28. Find the point on the line $\frac{x}{a} + \frac{y}{b} = 1$ that is closest to the origin. 

29. Find a positive number for which the sum of it and its reciprocal is the smallest (least) possible. 

30. Find a positive number for which the sum of its reciprocal and four times its square is the smallest possible. 

31. A wire b m long is cut into two pieces. One piece is bent into an equilateral triangle and the other is bent into a circle. If the sum of the areas enclosed by each part is a minimum, what is the length of each part? 

32. Answer Exercise 31 if one piece is bent into a square and the other into a circle. 

33. Suppose a weight D is to be held 5 m below a horizontal line AB by a wire in the shape of a Y. If the points A and B are 4 m apart, what is the minimum total length of wire that can be used? 

![教材插图](/books/thomas-calculus/assets/0a7fe386c0142d8c2a434d6703e267b37e0df492c8341173a58d9841884c9873.jpg)


34. Suppose two different gauges of wire must be used to support the weight in Exercise 33: the vertical portion of the wire (the segment CD) costs $1 per meter, while the remaining wire (the segments AC and CB) must be sturdier and cost $2 per meter. What is the minimum total cost of the wire that can be used? 

35. Determine the dimensions of the rectangle of largest area that can be inscribed in the right triangle shown in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/f0a26fc7784d5a6ffda418039cc2ef106fb4dc098f5cc3d4519892827bfa3267.jpg)


36. Determine the dimensions of the rectangle of largest area that can be inscribed in a semicircle of radius 3. (See the accompanying figure.) 

![教材插图](/books/thomas-calculus/assets/29f3b90e94bb8a31105f1c1d8ead74dd968db360a4931f8f4559005eba09c142.jpg)


37. What value of $a$ makes $f(x) = x^2 + (a / x)$ have 

a. a local minimum at x = 2? 

b. a point of inflection at $x = 1$ ? 

38. What values of $a$ and $b$ make $f(x) = x^3 + ax^2 + bx$ have
a. a local maximum at $x = -1$ and a local minimum at $x = 3$ ?
b. a local minimum at $x = 4$ and a point of inflection at $x = 1$ ? 

39. A right circular cone is circumscribed by a sphere of radius 1. Determine the height h and radius r of the cone of maximum volume. 

40. Determine the dimensions of the inscribed rectangle of maximum area. 

![教材插图](/books/thomas-calculus/assets/20a62c7e558cd979d8d97b7727fd4597b89bdd7799fb6c9a76a32ed167e9ae8a.jpg)


41. Consider the accompanying graphs of $y = 2x + 3$ and $y = \ln x$ . Determine the 

a. minimum vertical distance; 

b. minimum horizontal distance between these graphs. 

![教材插图](/books/thomas-calculus/assets/0df5b3e569f2ce2cf0900abf183cf66ac7b3294a67c11d8932ed154c33670e81.jpg)


42. Find the point on the graph of $y = 20x^{3} + 60x - 3x^{5} - 5x^{4}$ with the largest slope. 

43. Among all triangles in the first quadrant formed by the $x$ -axis, the $y$ -axis, and tangent lines to the graph of $y = 3x - x^2$ , what is the smallest possible area? 

![教材插图](/books/thomas-calculus/assets/7c84fd3d26a826d676942894ab4d09577fb3b93ed6de3a62dbd0368aaa199f25.jpg)


44. A cone is formed from a circular piece of material of radius 1 meter by removing a section of angle $\theta$ and then joining the two straight edges. Determine the largest possible volume for the cone. 

![教材插图](/books/thomas-calculus/assets/3475500035e9872760605ff448d27f713b9f27fc70e3b3d126429b923de15e70.jpg)


Physical Applications 

45. Vertical motion The height above ground of an object moving vertically is given by 

$$
s = - 4. 9 t ^ {2} + 2 9. 4 t + 3 4. 3,
$$

with s in meters and t in seconds. Find 

a. the object's velocity when $t = 0$ ; 

b. its maximum height and when it occurs; 

c. its velocity when s = 0. 

46. Quickest route Jane is 2 km offshore in a boat and wishes to reach a coastal village 6 km down a straight shoreline from the point nearest the boat. She can row 2 km/h and can walk 5 km/h. Where should she land her boat to reach the village in the least amount of time? 

47. Shortest beam The 2-m wall shown here stands 5 m from the building. Find the length of the shortest straight beam that will reach to the side of the building from the ground outside the wall. 

![教材插图](/books/thomas-calculus/assets/4778c829bca9953eae638041400f718f279f7355645d023dee7f3918e9b407bb.jpg)


48. Motion on a line The positions of two particles on the $s$ -axis are $s_1 = \sin t$ and $s_2 = \sin (t + \pi /3)$ , with $s_1$ and $s_2$ in meters and $t$ in seconds. 

a. At what time(s) in the interval $0 \leq t \leq 2\pi$ do the particles meet? 

b. What is the farthest apart that the particles ever get? 

c. When in the interval $0 \leq t \leq 2\pi$ is the distance between the particles changing the fastest? 

49. The intensity of illumination at any point from a light source is proportional to the square of the reciprocal of the distance between the point and the light source. Two lights, one having an intensity eight times that of the other, are 6 m apart. How far from the stronger light is the total illumination least? 

50. Projectile motion The range R of a projectile fired from the origin over horizontal ground is the distance from the origin to the point of impact. If the projectile is fired with an initial velocity $v_{0}$ at an angle $\alpha$ with the horizontal, then in Chapter 12 we find that 

$$
R = \frac {v _ {0} ^ {2}}{g} \sin 2 \alpha ,
$$

where g is the downward acceleration due to gravity. Find the angle $\alpha$ for which the range R is the largest possible. 

51. Strength of a beam The strength S of a rectangular wooden beam is proportional to its width times the square of its depth. (See the accompanying figure.) 

a. Find the dimensions of the strongest beam that can be cut from a 30-cm diameter cylindrical log. 

b. Graph $S$ as a function of the beam's width $w$ , assuming the proportionality constant to be $k = 1$ . Reconcile what you see with your answer in part (a). 

c. On the same screen, graph $S$ as a function of the beam's depth $d$ , again taking $k = 1$ . Compare the graphs with one another and with your answer in part (a). What would be the effect of changing to some other value of $k$ ? Try it. 

![教材插图](/books/thomas-calculus/assets/e8eea10ffd50bd74d2b7ac038df473e9ba10a6c3225e23ea1a78cc2d88425587.jpg)


52. Stiffness of a beam The stiffness S of a rectangular beam is proportional to its width times the cube of its depth. 

a. Find the dimensions of the stiffest beam that can be cut from a 30-cm-diameter cylindrical log. 

b. Graph $S$ as a function of the beam's width $w$ , assuming the proportionality constant to be $k = 1$ . Reconcile what you see with your answer in part (a). 

c. On the same screen, graph $S$ as a function of the beam's depth $d$ , again taking $k = 1$ . Compare the graphs with one another and with your answer in part (a). What would be the effect of changing to some other value of $k$ ? Try it. 

53. Frictionless cart A small frictionless cart, attached to the wall by a spring, is pulled 10 cm from its rest position and released at time t = 0 to roll back and forth for 4 s. Its position at time t is $s = 10 \cos \pi t$ . 

a. What is the cart's maximum speed? When is the cart moving that fast? Where is it then? What is the magnitude of the acceleration then? 

b. Where is the cart when the magnitude of the acceleration is greatest? What is the cart's speed then? 

![教材插图](/books/thomas-calculus/assets/8c0a959df9aac2ae738f9d80c6236a7288387d1f16730a6873a15078ffc3c99f.jpg)


54. Two masses hanging side by side from springs have positions $s_{1} = 2 \sin t$ and $s_{2} = \sin 2t$ , respectively. 

a. At what times in the interval 0 < t do the masses pass each other? (Hint: $\sin 2t = 2 \sin t \cos t$ .) 

b. When in the interval $0 \leq t \leq 2\pi$ is the vertical distance between the masses the greatest? What is this distance?
(Hint: $\cos 2t = 2\cos^{2}t - 1$ .) 

![教材插图](/books/thomas-calculus/assets/5525f92f2439dcd231f6f9897bfaf4e0d5f90bca4abcb1159cc13e7418c32436.jpg)


55. Distance between two ships At noon, ship A was 12 nautical miles due north of ship B. Ship A was sailing south at 12 knots (nautical miles per hour; a nautical mile is 1852 m) and continued to do so all day. Ship B was sailing east at 8 knots and continued to do so all day. 

a. Start counting time with t = 0 at noon and express the distance s between the ships as a function of t. 

b. How rapidly was the distance between the ships changing at noon? One hour later? 

c. The visibility that day was 5 nautical miles. Did the ships ever sight each other? 

T d. Graph s and ds/dt together as functions of t for $-1 \leq t \leq 3$ , using different colors if possible. Compare the graphs and reconcile what you see with your answers in parts (b) and (c). 

e. The graph of $ds / dt$ looks as if it might have a horizontal asymptote in the first quadrant. This in turn suggests that $ds / dt$ approaches a limiting value as $t \to \infty$ . What is this value? What is its relation to the ships' individual speeds? 

56. Fermat's principle in optics Light from a source $A$ is reflected by a plane mirror to a receiver at point $B$ , as shown in the accompanying figure. Show that for the light to obey Fermat's principle, the angle of incidence must equal the angle of reflection, both measured from the line normal to the reflecting surface. (This result can also be derived without calculus. There is a purely geometric argument, which you may prefer.) 

![教材插图](/books/thomas-calculus/assets/4a13880b5ebdaff87b23c0c8492d7563c077434750a007f5ba74df4d8b6854d2.jpg)


57. Tin pest When metallic tin is kept below $13.2^{\circ}$ C, it slowly becomes brittle and crumbles to a gray powder. Tin objects eventually crumble to this gray powder spontaneously if kept in a cold climate for years. The Europeans who saw tin organ pipes in their churches crumble away years ago called the change tin pest because it seemed to be contagious, and indeed it was, for the gray powder is a catalyst for its own formation. 

A catalyst for a chemical reaction is a substance that controls the rate of reaction without undergoing any permanent change in itself. An autocatalytic reaction is one whose product is a catalyst for its own formation. Such a reaction may proceed slowly at first if the amount of catalyst present is small and slowly again at the end, when most of the original substance is used up. But in between, when both the substance and its catalyst product are abundant, the reaction proceeds at a faster pace. 

In some cases, it is reasonable to assume that the rate $v = dx/dt$ of the reaction is proportional both to the amount of the original substance present and to the amount of product. That is, v may be considered to be a function of x alone, and 

$$
v = k x (a - x) = k a x - k x ^ {2},
$$

where 

x = the amount of product, 

a = the amount of substance at the beginning, and 

$k =$ a positive constant. 

At what value of x does the rate v have a maximum? What is the maximum value of v? 

58. Airplane landing path An airplane is flying at altitude H when it begins its descent to an airport runway that is at horizontal ground distance L from the airplane, as shown in the accompanying figure. Assume that the landing path of the airplane is the graph of a cubic polynomial function $y = ax^{3} + bx^{2} + cx + d$ , where $y(-L) = H$ and $y(0) = 0$ . 

a. What is $dy / dx$ at $x = 0$ ? 

b. What is $dy / dx$ at $x = -L$ ? 

c. Use the values for $dy / dx$ at $x = 0$ and $x = -L$ together with $y(0) = 0$ and $y(-L) = H$ to show that 

$$
y (x) = H \left[ 2 \left(\frac {x}{L}\right) ^ {3} + 3 \left(\frac {x}{L}\right) ^ {2} \right].
$$

![教材插图](/books/thomas-calculus/assets/606c5b66c0afa854cdacf41c02d7587b3789b8e541b1eb962a8a41fb976af898.jpg)


Business and Economics 

59. It costs you c dollars each to manufacture and distribute backpacks. If the backpacks sell at x dollars each, the number sold is given by 

$$
n = \frac {a}{x - c} + b (1 0 0 - x),
$$

where $a$ and $b$ are positive constants. What selling price will bring a maximum profit? 

60. You operate a tour service that offers the following rates: 

$200 per person if 50 people (the minimum number to book the tour) go on the tour. 

For each additional person, up to a maximum of 80 people total, the rate per person is reduced by \$2. 

It costs $6000 (a fixed cost) plus $32 per person to conduct the tour. How many people does it take to maximize your profit? 

61. Wilson lot size formula One of the formulas for inventory management says that the average weekly cost of ordering, paying for, and holding merchandise is 

$$
A (q) = \frac {k m}{q} + c m + \frac {h q}{2},
$$

where q is the quantity you order when things run low (shoes, radios, brooms, or whatever the item might be), k is the cost of placing an order (the same, no matter how often you order), c is the cost of one item (a constant), m is the number of items sold each week (a constant), and h is the weekly holding cost per item (a constant that takes into account things such as space, utilities, insurance, and security). 

a. Your job, as the inventory manager for your store, is to find the quantity that will minimize $A(q)$ . What is it? (The formula you get for the answer is called the Wilson lot size formula.) 

b. Shipping costs sometimes depend on order size. When they do, it is more realistic to replace k by $k + bq$ , the sum of k and a constant multiple of q. What is the most economical quantity to order now? 

62. Production level Prove that the production level (if any) at which average cost is smallest is a level at which the average cost equals marginal cost. 

63. Show that if $r(x) = 6x$ and $c(x) = x^{3} - 6x^{2} + 15x$ are your revenue and cost functions, then the best you can do is break even (have revenue equal cost). 

64. Production level Suppose that $c(x) = x^{3} - 20x^{2} + 20,000x$ is the cost of manufacturing x items. Find a production level that will minimize the average cost of making x items. 

65. You are to construct an open rectangular box with a square base and a volume of $6 \, m^{3}$ . If material for the bottom costs $60/m^{2}$ and material for the sides costs $40/m^{2}$ , what dimensions will result in the least expensive box? What is the minimum cost? 

66. The 800-room Mega Motel chain is filled to capacity when the room charge is $50 per night. For each $10 increase in room charge, 40 fewer rooms are filled each night. What charge per room will result in the maximum revenue per night? 

#### Biology

67. Sensitivity to medicine (Continuation of Exercise 74, Section 3.3) Find the amount of medicine to which the body is most sensitive by finding the value of M that maximizes the derivative dR/dM, where 

$$
R = M ^ {2} \left(\frac {C}{2} - \frac {M}{3}\right)
$$

and $C$ is a constant. 

68. How we cough

a. When we cough, the trachea (windpipe) contracts to increase the velocity of the air going out. This raises the questions of how much it should contract to maximize the velocity and whether it really contracts that much when we cough. 

Under reasonable assumptions about the elasticity of the tracheal wall and about how the air near the wall is slowed by friction, the average flow velocity v can be modeled by the equation 

$$
v = c (r _ {0} - r) r ^ {2} \mathrm{cm/s}, \quad \frac {r _ {0}}{2} \leq r \leq r _ {0},
$$

where $r_{0}$ is the rest radius of the trachea in centimeters and c is a positive constant whose value depends in part on the length of the trachea. 

Show that v is greatest when $r = (2/3)r_{0}$ , that is, when the trachea is about 33% contracted. The remarkable fact is that X-ray photographs confirm that the trachea contracts about this much during a cough. 

T b. Take $r_{0}$ to be 0.5 and c to be 1, and graph v over the interval $0 \leq r \leq 0.5$ . Compare what you see with the claim that v is at a maximum when $r = (2/3)r_{0}$ . 

#### Theory and Examples

69. An inequality for positive integers Show that if $a, b, c$ , and $d$ are positive integers, then 

$$
\frac {(a ^ {2} + 1) (b ^ {2} + 1) (c ^ {2} + 1) (d ^ {2} + 1)}{a b c d} \geq 1 6.
$$

70. The derivative dt/dx in Example 4

a. Show that 

$$
f (x) = \frac {x}{\sqrt {a ^ {2} + x ^ {2}}}
$$

is an increasing function of $x$ . 

b. Show that 

$$
g (x) = \frac {d - x}{\sqrt {b ^ {2} + (d - x) ^ {2}}}
$$

is a decreasing function of x. 

c. Show that 

$$
\frac {d t}{d x} = \frac {x}{c _ {1} \sqrt {a ^ {2} + x ^ {2}}} - \frac {d - x}{c _ {2} \sqrt {b ^ {2} + (d - x) ^ {2}}}
$$

is an increasing function of x. 

71. Let $f(x)$ and $g(x)$ be the differentiable functions graphed here. Point c is the point where the vertical distance between the curves is the greatest. Is there anything special about the tangent lines to the two curves at c? Give reasons for your answer. 

![教材插图](/books/thomas-calculus/assets/3a9cf34b450bbb6d3d4e34519cc4650cbc03b5675e0316a2b3be6574036310bd.jpg)


72. You have been asked to determine whether the function $f(x) = 3 + 4 \cos x + \cos 2x$ is ever negative. 

a. Explain why you need to consider values of x only in the interval $[0, 2\pi]$ . 

b. Is $f$ ever negative? Explain. 

73. a. The function $y = \cot x - \sqrt{2} \csc x$ has an absolute maximum value on the interval $0 < x < \pi$ . Find it. 

T b. Graph the function and compare what you see with your answer in part (a). 

74. a. The function $y = \tan x + 3\cot x$ has an absolute minimum value on the interval $0 < x < \pi / 2$ . Find it. 

T b. Graph the function and compare what you see with your answer in part (a). 

75. a. How close does the curve $y = \sqrt{x}$ come to the point $(3/2, 0)$ ? (Hint: If you minimize the square of the distance, you can avoid square roots.) 

T b. Graph the distance function $D(x)$ and $y = \sqrt{x}$ together and reconcile what you see with your answer in part (a). 

![教材插图](/books/thomas-calculus/assets/b31a1f8ed0928501ea0d582fdc9a42501f17e3c158f3d0b3ed0527f1cca88863.jpg)


76. a. How close does the semicircle $y = \sqrt{16 - x^2}$ come to the point $(1, \sqrt{3})$ ? 

T b. Graph the distance function and $y = \sqrt{16 - x^{2}}$ together and reconcile what you see with your answer in part (a). 

## 4.7 Newton's Method

![教材插图](/books/thomas-calculus/assets/cafb5c2d2e8d80e2d16e0017db22d3868f58116c9c62fb9e970cf60bf5a72a0c.jpg)


For thousands of years, one of the main goals of mathematics has been to find solutions to equations. For linear equations $ax + b = 0$ , and for quadratic equations $ax^{2} + bx + c = 0$ , we can explicitly solve for a solution. However, for most equations there is no simple formula that gives the solutions. 


FIGURE 4.48 Newton's method starts with an initial guess $x_0$ and (under favorable circumstances) improves the guess one step at a time.


In this section we study a numerical method called Newton's method or the Newton-Raphson method, which is a technique to approximate the solutions to an equation $f(x) = 0$ . Newton's method estimates the solutions using tangent lines of the graph of $y = f(x)$ near the points where $f$ is zero. A value of $x$ where $f$ is zero is called a root of the function $f$ and a solution of the equation $f(x) = 0$ . Newton's method is both powerful and efficient, and it has numerous applications in engineering and other fields where solutions to complicated equations are needed. 

### Procedure for Newton's Method

The goal of Newton's method for estimating a solution of an equation $f(x) = 0$ is to produce a sequence of approximations that approach the solution. We pick the first number $x_0$ of the sequence. Then, under favorable circumstances, the method moves step by step toward a point where the graph of $f$ crosses the $x$ -axis (Figure 4.48). At each step the method approximates a zero of $f$ with a zero of one of its linearizations. Here is how it works. 

The initial estimate, $x_{0}$ , may be found by graphing or just plain guessing. The method then uses the tangent to the curve $y = f(x)$ at $(x_{0}, f(x_{0}))$ to approximate the curve, calling the point $x_{1}$ where the tangent meets the x-axis (Figure 4.48). The number $x_{1}$ is usually a better approximation to the solution than is $x_{0}$ . The point $x_{2}$ where the tangent to the curve at $(x_{1}, f(x_{1}))$ crosses the x-axis is the next approximation in the sequence. We continue, using each approximation to generate the next, until we are close enough to the root to stop. 

We can derive a formula for generating the successive approximations in the following way. Given the approximation $x_{n}$ , the point-slope equation for the tangent line to the curve at $(x_{n}, f(x_{n}))$ is 

$$
y = f (x _ {n}) + f ^ {\prime} (x _ {n}) (x - x _ {n}).
$$

![教材插图](/books/thomas-calculus/assets/b1bd1e80676c0d9a318b90f6002daa6d1d396f03cc30e322be9522489e908917.jpg)



FIGURE 4.49 The geometry of the successive steps of Newton's method. From $x_{n}$ we go up to the curve and follow the tangent line down to find $x_{n + 1}$ .


We can find where it crosses the x-axis by setting y = 0 (Figure 4.49): 

$$
\begin{array}{c} 0 = f (x _ {n}) + f ^ {\prime} (x _ {n}) (x - x _ {n}) \\ - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})} = x - x _ {n} \\ x = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})} \end{array} \quad \text {   If   } f ^ {\prime} (x _ {n}) \neq 0
$$

This value of $x$ is the next approximation $x_{n + 1}$ . Here is a summary of Newton's method. 

### Newton's Method

1. Guess a first approximation to a solution of the equation $f(x) = 0$ . A graph of $y = f(x)$ may help. 

2. Use the first approximation to get a second, the second to get a third, and so on, using the formula 

$$
x _ {n + 1} = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})}, \quad \text { if } f ^ {\prime} (x _ {n}) \neq 0.\tag{1}
$$

### Applying Newton's Method

Applications of Newton's method generally involve many numerical computations, making them well suited for computers or calculators. Nevertheless, even when the calculations are done by hand (which may be very tedious), they give a powerful way to find solutions of equations. 

In our first example, we find decimal approximations to $\sqrt{2}$ by estimating the positive root of the equation $f(x) = x^2 - 2 = 0$ . 

**EXAMPLE 1** Approximate the positive root of the equation 

$$
f (x) = x ^ {2} - 2 = 0.
$$

**Solution** With $f(x) = x^{2} - 2$ and $f'(x) = 2x$ , Equation (1) becomes 

$$
\begin{array}{r l} x _ {n + 1} & = x _ {n} - \frac {x _ {n} ^ {2} - 2}{2 x _ {n}} \\ & = x _ {n} - \frac {x _ {n}}{2} + \frac {1}{x _ {n}} \\ & = \frac {x _ {n}}{2} + \frac {1}{x _ {n}}. \end{array}
$$

The equation 

$$
x _ {n + 1} = \frac {x _ {n}}{2} + \frac {1}{x _ {n}}
$$

enables us to go from each approximation to the next with just a few keystrokes. With the starting value $x_{0} = 1$ , we get the results in the first column of the following table. (To five decimal places, or, equivalently, to six digits, $\sqrt{2} = 1.41421$ .) 

![教材插图](/books/thomas-calculus/assets/99675d1a4a56d77562e097bcabcad343b64becbe62f9667620c31dd98fa64b4a.jpg)



FIGURE 4.50 The graph of $f(x) = x^3 - x - 1$ crosses the $x$ -axis once; this is the root we want to find (Example 2).


![教材插图](/books/thomas-calculus/assets/e271f1128efb1bc9f55a1aa39897a0d43dd23b2e6ba77bd4a1efadf170b4474e.jpg)



FIGURE 4.51 The first three x-values in Table 4.1 (four decimal places).


<table><tr><td></td><td>Error</td><td>Number of correct digits</td></tr><tr><td><eq>x_{0} = 1</eq></td><td>-0.41421</td><td>1</td></tr><tr><td><eq>x_{1} = 1.5</eq></td><td>0.08579</td><td>1</td></tr><tr><td><eq>x_{2} = 1.41667</eq></td><td>0.00246</td><td>3</td></tr><tr><td><eq>x_{3} = 1.41422</eq></td><td>0.00001</td><td>5</td></tr></table>


Newton's method is used by many software applications to calculate roots because it converges so fast (more about this later). If the arithmetic in the table in Example 1 had been carried to 13 decimal places instead of 5, then going one step further would have given $\sqrt{2}$ correctly to more than 10 decimal places. 


**EXAMPLE 2** Find the x-coordinate of the point where the curve $y = x^{3} - x$ crosses the horizontal line y = 1. 

**Solution** The curve crosses the line when $x^{3} - x = 1$ or $x^{3} - x - 1 = 0$ . When does $f(x) = x^{3} - x - 1$ equal zero? Since f is continuous on [1, 2] and $f(1) = -1$ while $f(2) = 5$ , we know by the Intermediate Value Theorem there is a root in the interval (1, 2) (Figure 4.50). 

We apply Newton's method to $f$ with the starting value $x_0 = 1$ . The results are displayed in Table 4.1 and Figure 4.51. 

At n = 5, we come to the result $x_{6} = x_{5} = 1.3247\ 17957$ . When $x_{n+1} = x_{n}$ , Equation (1) shows that $f(x_{n}) = 0$ , up to the accuracy of our computation. We have found a solution of $f(x) = 0$ to nine decimals places. 


TABLE 4.1 The Result of Applying Newton's Method to $f(x) = x^3 - x - 1$ with $x_0 = 1$


<table><tr><td>n</td><td><eq>x_n</eq></td><td><eq>f(x_n)</eq></td><td><eq>f&#x27;(x_n)</eq></td><td><eq>x_{n+1} = x_n - \frac{f(x_n)}{f&#x27;(x_n)}</eq></td></tr><tr><td>0</td><td>1</td><td>-1</td><td>2</td><td>1.5</td></tr><tr><td>1</td><td>1.5</td><td>0.875</td><td>5.75</td><td>1.3478 26087</td></tr><tr><td>2</td><td>1.3478 26087</td><td>0.1006 82173</td><td>4.4499 05482</td><td>1.3252 00399</td></tr><tr><td>3</td><td>1.3252 00399</td><td>0.0020 58362</td><td>4.2684 68292</td><td>1.3247 18174</td></tr><tr><td>4</td><td>1.3247 18174</td><td>0.0000 00924</td><td>4.2646 34722</td><td>1.3247 17957</td></tr><tr><td>5</td><td>1.3247 17957</td><td>-1.8672E-13</td><td>4.2646 32999</td><td>1.3247 17957</td></tr></table>

In Figure 4.52 we have indicated that the process in Example 2 might have started at the point $B_0(3,23)$ on the curve, with $x_0 = 3$ . Point $B_0$ is quite far from the $x$ -axis, but the tangent at $B_0$ crosses the $x$ -axis at about (2.12, 0), so $x_1$ is still an improvement over $x_0$ . If we use Equation (1) repeatedly as before, with $f(x) = x^3 - x - 1$ and $f'(x) = 3x^2 - 1$ , we obtain the nine-place solution $x_7 = x_6 = 1.324717957$ in seven steps. 

### Convergence of the Approximations

In Chapter 9 we define precisely the idea of convergence for the approximations $x_{n}$ in Newton's method. Intuitively, we mean that as the number $n$ of approximations increases without bound, the values $x_{n}$ get arbitrarily close to the desired root r. (This notion is similar to the idea of the limit of a function $g(t)$ as t approaches infinity, as defined in Section 2.5.) 

![教材插图](/books/thomas-calculus/assets/d1daf32ca0781dab0064499a69444c3ecd150a4eb8dce61f69dbd1d2c4747836.jpg)



FIGURE 4.52 Any starting value $x_{0}$ to the right of $x = 1/\sqrt{3}$ will lead to the root in Example 2.


![教材插图](/books/thomas-calculus/assets/41f3860d18a3590811b44134f309df9e78b044ce523b6f77b25cb2ac8df2fd06.jpg)



FIGURE 4.53 Newton's method fails to converge. You go from $x_0$ to $x_1$ and back to $x_0$ , never getting any closer to $r$ .


In practice, Newton's method usually gives convergence with impressive speed, but this is not guaranteed. One way to test convergence is to begin by graphing the function to estimate a good starting value for $x_0$ . You can test that you are getting closer to a zero of the function by checking that $|f(x_n)|$ is approaching zero, and you can check that the approximations are converging by evaluating $|x_n - x_{n+1}|$ . 

Newton's method does not always converge. For instance, if 

$$
f (x) = \left\{ \begin{array}{l l} - \sqrt {r - x}, & x <   r \\ \sqrt {x - r}, & x \geq r, \end{array} \right.
$$

the graph will be like the one in Figure 4.53. If we begin with $x_{0} = r - h$ , we get $x_{1} = r + h$ , and successive approximations go back and forth between these two values. No amount of iteration brings us closer to the root than our first guess. 

If Newton's method does converge, it converges to a root. Be careful, however. There are situations in which the method appears to converge but no root is there. Fortunately, such situations are rare. 

When Newton's method converges to a root, it may not be the root you have in mind. Figure 4.54 shows two ways this can happen. 

![教材插图](/books/thomas-calculus/assets/10f2beff3e37b4cf6d27cd379c923d5e6620e892114a2a998da5cbe2dcb304cc.jpg)



FIGURE 4.54 If you start too far away, Newton's method may miss the root you want.


### EXERCISES 4.7

#### Root Finding

1. Use Newton's method to estimate the solutions of the equation $x^{2} + x - 1 = 0$ . Start with $x_{0} = -1$ for the left-hand solution and with $x_{0} = 1$ for the solution on the right. Then, in each case, find $x_{2}$ . 

2. Use Newton's method to estimate the one real solution of $x^3 + 3x + 1 = 0$ . Start with $x_0 = 0$ and then find $x_2$ . 

3. Use Newton's method to estimate the two zeros of the function $f(x) = x^4 + x - 3$ . Start with $x_0 = -1$ for the left-hand zero and with $x_0 = 1$ for the zero on the right. Then, in each case, find $x_2$ . 

4. Use Newton's method to estimate the two zeros of the function $f(x) = 2x - x^2 + 1$ . Start with $x_0 = 0$ for the left-hand zero and with $x_0 = 2$ for the zero on the right. Then, in each case, find $x_2$ . 

5. Use Newton's method to find the positive fourth root of 2 by solving the equation $x^4 - 2 = 0$ . Start with $x_0 = 1$ and find $x_2$ . 

6. Use Newton's method to find the negative fourth root of 2 by solving the equation $x^4 - 2 = 0$ . Start with $x_0 = -1$ and find $x_2$ . 

7. T Use Newton's method to find an approximate solution of $3 - x = \ln x$ . Start with $x_0 = 2$ and find $x_2$ . 

8. T Use Newton's method to find an approximate solution of $x - 1 = \arctan x$ . Start with $x_0 = 1$ and find $x_2$ . 

9. T Use Newton's method to find an approximate solution of $xe^x = 1$ . Start with $x_0 = 0$ and find $x_2$ . 

Dependence on Initial Point 

10. Using the function shown in the figure, and, for each initial estimate $x_0$ , determine graphically what happens to the sequence of Newton's method approximations 

$$
\mathbf {a}. x _ {0} = 0
$$

$$
\mathbf {b}. x _ {0} = 1
$$

$$
x _ {0} = 2
$$

$$
x _ {0} = 5. 5
$$

$$
\mathbf {d}. x _ {0} = 4
$$

![教材插图](/books/thomas-calculus/assets/40e85439892b5947dba9563cba83080815a24a81f267e4cfcf13b74c5aa514ad.jpg)


11. Guessing a root Suppose that your first guess is lucky, in the sense that $x_0$ is a root of $f(x) = 0$ . Assuming that $f'(x_0)$ is defined and is not 0, what happens to $x_1$ and later approximations? 

12. Estimating pi You plan to estimate $\pi / 2$ to five decimal places by using Newton's method to solve the equation $\cos x = 0$ . Does it matter what your starting value is? Give reasons for your answer. 

Theory and Examples 

13. Oscillation Show that if $h > 0$ , applying Newton's method to 

$$
f (x) = \left\{ \begin{array}{l l} \sqrt {x}, & x \geq 0 \\ \sqrt {- x}, & x <   0 \end{array} \right.
$$

leads to $x_{1} = -h$ if $x_{0} = h$ and to $x_{1} = h$ if $x_{0} = -h$ . Draw a picture that shows what is going on. 

14. Approximations that get worse and worse Apply Newton's method to $f(x) = x^{1/3}$ with $x_0 = 1$ and calculate $x_1, x_2, x_3$ , and $x_4$ . Find a formula for $|x_n|$ . What happens to $|x_n|$ as $n \to \infty$ ? Draw a picture that shows what is going on. 

15. Explain why the following four statements ask for the same information: 

i) Find the roots of $f(x) = x^{3} - 3x - 1$ . 

ii) Find the $x$ -coordinates of the intersections of the curve $y = x^3$ with the line $y = 3x + 1$ . 

iii) Find the $x$ -coordinates of the points where the curve $y = x^3 - 3x$ crosses the horizontal line $y = 1$ . 

iv) Find the values of $x$ where the derivative of 

$g(x) = (1 / 4)x^{4} - (3 / 2)x^{2} - x + 5$ equals zero. 

When solving Exercises 16–34, you may need to use appropriate technology (such as a calculator or a computer). 

16. Locating a planet To calculate a planet's space coordinates, we have to solve equations like $x = 1 + 0.5\sin x$ . Graphing the function $f(x) = x - 1 - 0.5\sin x$ suggests that the function has a root near $x = 1.5$ . Use one application of Newton's method to improve this estimate. That is, start with $x_0 = 1.5$ and find $x_1$ . (The value of the root is 1.49870 to five decimal places.) Remember to use radians. 

17. Intersecting curves The curve $y = \tan x$ crosses the line $y = 2x$ between $x = 0$ and $x = \pi / 2$ . Use Newton's method to find where. 

18. Real solutions of a quartic Use Newton's method to find the two real solutions of the equation $x^4 - 2x^3 - x^2 - 2x + 2 = 0$ . 

19. a. How many solutions does the equation $\sin 3x = 0.99 - x^2$ have? 

b. Use Newton's method to find them. 

20. Intersection of curves 

a. Does $\cos 3x$ ever equal x? Give reasons for your answer. 

b. Use Newton's method to find where. 

21. Find the four real zeros of the function $f(x) = 2x^{4} - 4x^{2} + 1$ . 

22. Estimating pi Estimate $\pi$ to as many decimal places as your calculator will display by using Newton's method to solve the equation $\tan x = 0$ with $x_{0} = 3$ . 

23. Intersection of curves At what value(s) of x does $\cos x = 2x$ ? 

24. Intersection of curves At what value(s) of x does $\cos x = -x$ ? 

25. The graphs of $y = x^{2}(x + 1)$ and $y = 1 / x (x > 0)$ intersect at one point $x = r$ . Use Newton's method to estimate the value of $r$ to four decimal places. 

![教材插图](/books/thomas-calculus/assets/3151d17c34c5209f7eac81b15bc498a4132761c9a6736de99895f8e25e7350ef.jpg)


26. The graphs of $y = \sqrt{x}$ and $y = 3 - x^2$ intersect at one point $x = r$ . Use Newton's method to estimate the value of $r$ to four decimal places. 

27. Intersection of curves At what value(s) of $x$ does $e^{-x^2} = x^2 - x + 1$ ? 

28. Intersection of curves At what value(s) of $x$ does $\ln (1 - x^2) = x - 1$ ? 

29. Use the Intermediate Value Theorem from Section 2.6 to show that $f(x) = x^{3} + 2x - 4$ has a root between x = 1 and x = 2. Then find the root to five decimal places. 

30. Factoring a quartic Find the approximate values of $r_1$ through $r_4$ in the factorization 

$$
\begin{array}{r l} 8 x ^ {4} - 1 4 x ^ {3} - 9 x ^ {2} + 1 1 x - 1 & \\ = 8 (x - r _ {1}) (x - r _ {2}) (x - r _ {3}) (x - r _ {4}). \end{array}
$$

![教材插图](/books/thomas-calculus/assets/3d46b429f406d88f28d85c443adc12320f2aa68234142b37fd90e043f833ff0e.jpg)


31. Converging to different zeros Use Newton's method to find the zeros of $f(x) = 4x^4 - 4x^2$ using the given starting values. 

a. $x_0 = -2$ and $x_0 = -0.8$ , lying in $(- \infty, -\sqrt{2}/2)$ 

b. $x_{0} = -0.5$ and $x_{0} = 0.25$ , lying in $(- \sqrt{21}/7, \sqrt{21}/7)$ 

c. $x_{0} = 0.8$ and $x_{0} = 2$ , lying in $(\sqrt{2}/2, \infty)$ 

d. $x_0 = -\sqrt{21} / 7$ and $x_0 = \sqrt{21} / 7$ 

32. The sonobuoy problem In submarine location problems, it is often necessary to find a submarine's closest point of approach (CPA) to a sonobuoy (sound detector) in the water. Suppose that the submarine travels on the parabolic path $y = x^2$ and that the buoy is located at the point $(2, -1/2)$ . 

a. Show that the value of x that minimizes the distance between the submarine and the buoy is a solution of the equation $x = 1/(x^{2} + 1)$ . 

b. Solve the equation $x = 1 / (x^2 + 1)$ with Newton's method. 

![教材插图](/books/thomas-calculus/assets/1e72364329b913e82e6d882cbcb4604f2339e01ef30549a952c01ade103f46dd.jpg)


33. Curves that are nearly flat at the root Some curves are so flat that, in practice, Newton's method stops too far from the root to give a useful estimate. Try Newton's method on $f(x) = (x - 1)^{40}$ with a starting value of $x_{0} = 2$ to see how close your machine comes to the root x = 1. See the accompanying graph. 

![教材插图](/books/thomas-calculus/assets/b977f358f44f38d9e5210dcd3a702ab3d67bf9f33d4df33bb3a548425e00b641.jpg)


34. The accompanying figure shows a circle of radius $r$ with a chord of length 2 and an arc $s$ of length 3. Use Newton's method to solve for $r$ and $\theta$ (radians) to four decimal places. Assume $0 < \theta < \pi$ . 

![教材插图](/books/thomas-calculus/assets/b49b68bcf7b9ff8fbf8d705fb7dbcc265ab2c62f38dc201acf1e2f3e3df88581.jpg)


## 4.8 Antiderivatives

Many problems require that we recover a function from its derivative, or from its rate of change. For instance, the laws of physics tell us the acceleration of an object falling from an initial height, and we can use this to compute its velocity and its height at any time. More generally, starting with a function f, we want to find a function F whose derivative is f. If such a function F exists, it is called an antiderivative of f. Antiderivatives are the link connecting the two major elements of calculus: derivatives and definite integrals. Antiderivatives have an important connection to the theory of integrals that is developed in Chapter 5. For this reason the process of taking an antiderivative is also called “integration.” 

### Finding Antiderivatives

> ***DEFINITION*** A function $F$ is an antiderivative of $f$ on an interval $I$ if $F'(x) = f(x)$ for all $x$ in $I$ . 

The process of recovering a function $F(x)$ from its derivative $f(x)$ is called antidifferentiation. We use capital letters such as F to represent an antiderivative of a function f, G to represent an antiderivative of g, and so forth. 

**EXAMPLE 1** Find an antiderivative for each of the following functions. 

(a) $f(x) = 2x$ 

$$
g (x) = \cos x
$$

$$
(\mathbf {c}) h (x) = \frac {1}{x} + 2 e ^ {2 x}
$$

![教材插图](/books/thomas-calculus/assets/9e141edcac049c0c7c55fda349380bd96a9ae2922f66685d8753684da6836c13.jpg)



FIGURE 4.55 The curves $y = x^{3} + C$ fill the coordinate plane without overlapping. In Example 2, we identify the curve $y = x^{3} - 2$ as the one that passes through the given point $(1, -1)$ .


**Solution** We need to think backward here: What function do we know has a derivative equal to the given function? 

$$
(\mathbf {a}) F (x) = x ^ {2}
$$

$$
(\mathbf {b}) G (x) = \sin x
$$

$$
(\mathbf {c}) H (x) = \ln | x | + e ^ {2 x}
$$

Each answer can be checked by differentiating. The derivative of $F(x) = x^{2}$ is 2x. The derivative of $G(x) = \sin x$ is $\cos x$ , and the derivative of $H(x) = \ln |x| + e^{2x}$ is $(1/x) + 2e^{2x}$ . 

The function $F(x) = x^2$ is not the only function whose derivative is $2x$ . The function $x^2 + 1$ has the same derivative. So does $x^2 + C$ for any constant $C$ . Are there others? 

Corollary 2 of the Mean Value Theorem in Section 4.2 gives the answer: Any two antiderivatives of a function differ by a constant. So the functions $x^{2} + C$ , where C is an arbitrary constant, form all the antiderivatives of $f(x) = 2x$ . More generally, we have the following result. 

THEOREM 8 If F is an antiderivative of f on an interval I, then the most general antiderivative of f on I is 

$$
F (x) + C
$$

where C is an arbitrary constant. 

Thus the most general antiderivative of f on I is a family of functions $F(x) + C$ whose graphs are vertical translations of one another. We can select a particular antiderivative from this family by assigning a specific value to C. Here is an example showing how such an assignment might be made. 

**EXAMPLE 2** Find an antiderivative of $f(x) = 3x^{2}$ that satisfies $F(1) = -1$ . 

**Solution** Since the derivative of $x^{3}$ is $3x^{2}$ , the general antiderivative 

$$
F (x) = x ^ {3} + C
$$

gives all the antiderivatives of $f(x)$ . The condition $F(1) = -1$ determines a specific value for C. Substituting x = 1 into $f(x) = x^{3} + C$ gives 

$$
F (1) = (1) ^ {3} + C = 1 + C.
$$

Since $F(1) = -1$ , solving $1 + C = -1$ for $C$ gives $C = -2$ . So 

$$
F (x) = x ^ {3} - 2
$$

is the antiderivative satisfying $F(1) = -1$ . Notice that this assignment for C selects the particular curve from the family of curves $y = x^{3} + C$ that passes through the point $(1, -1)$ in the plane (Figure 4.55). 

By working backward from assorted differentiation rules, we can derive formulas and rules for antiderivatives. In each case there is an arbitrary constant C in the general expression representing all antiderivatives of a given function. Table 4.2 gives antiderivative formulas for a number of important functions. 

The rules in Table 4.2 are easily verified by differentiating the general antiderivative formula to obtain the function to its left. For example, the derivative of $(\tan kx)/k + C$ is $\sec^{2} kx$ , whatever the value of the constants C or $k \neq 0$ , and this shows that Formula 4 gives the general antiderivative of $\sec^{2} kx$ . 


TABLE 4.2 Antiderivative formulas, k a nonzero constant


<table><tr><td>Function</td><td>General antiderivative</td><td>Function</td><td>General antiderivative</td></tr><tr><td><eq>1.x^n</eq></td><td><eq>\frac{1}{n+1}x^{n+1} + C, \quad n \ne -1</eq></td><td>8. <eq>e^{kx}</eq></td><td><eq>\frac{1}{k}e^{kx} + C</eq></td></tr><tr><td>2. sin kx</td><td><eq>-\frac{1}{k}\cos kx + C</eq></td><td>9. <eq>\frac{1}{x}</eq></td><td><eq>\ln |x| + C, \quad x \ne 0</eq></td></tr><tr><td>3. cos kx</td><td><eq>\frac{1}{k}\sin kx + C</eq></td><td>10. <eq>\frac{1}{\sqrt{1-k^2x^2}}</eq></td><td><eq>\frac{1}{k}\arcsin kx + C</eq></td></tr><tr><td>4. sec<eq>^2 kx</eq></td><td><eq>\frac{1}{k}\tan kx + C</eq></td><td>11. <eq>\frac{1}{1+k^2x^2}</eq></td><td><eq>\frac{1}{k}\arctan kx + C</eq></td></tr><tr><td>5. csc<eq>^2 kx</eq></td><td><eq>-\frac{1}{k}\cot kx + C</eq></td><td>12. <eq>\frac{1}{x\sqrt{k^2x^2-1}}</eq></td><td><eq>\operatorname{arcsec} kx + C, \quad kx &gt; 1</eq></td></tr><tr><td>6. sec kx tan kx</td><td><eq>\frac{1}{k}\sec kx + C</eq></td><td>13. <eq>a^{kx}</eq></td><td><eq>\left( \frac{1}{k\ln a} \right)a^{kx} + C, \quad a &gt; 0, a \ne 1</eq></td></tr><tr><td>7. csc kx cot kx</td><td><eq>-\frac{1}{k}\csc kx + C</eq></td><td></td><td></td></tr></table>

**EXAMPLE 3** Find the general antiderivative of each of the following functions. (a) $f(x) = x^5$ (b) $g(x) = \frac{1}{\sqrt{x}}$ (c) $h(x) = \sin 2x$ (d) $i(x) = \cos \frac{x}{2}$ (e) $j(x) = e^{-3x}$ (f) $k(x) = 2^x$ 

**Solution** In each case, we can use one of the formulas listed in Table 4.2. 

$$
F (x) = \frac {x ^ {6}}{6} + C
$$

$$
\mathbf {(b)} g (x) = x ^ {- 1 / 2}, \text {   so   }
$$

$$
G (x) = \frac {x ^ {1 / 2}}{1 / 2} + C = 2 \sqrt {x} + C
$$

$$
n = - 1 / 2
$$

$$
(\mathbf {c}) H (x) = \frac {- \cos 2 x}{2} + C
$$

$$
\text { (d) } I (x) = \frac {\sin (x / 2)}{1 / 2} + C = 2 \sin \frac {x}{2} + C \quad \text { Formula   3   with } k = 1 / 2
$$

$$
(\mathbf {e}) J (x) = - \frac {1}{3} e ^ {- 3 x} + C
$$

$$
\mathrm{Formula8with} k = - 3
$$

$$
(\mathbf {f}) K (x) = \left(\frac {1}{\ln 2}\right) 2 ^ {x} + C
$$

Other derivative rules also lead to corresponding antiderivative rules. We can add and subtract antiderivatives and multiply them by constants. 


TABLE 4.3 Antiderivative linearity rules


<table><tr><td></td><td>Function</td><td>General antiderivative</td></tr><tr><td>1. Constant Multiple Rule:</td><td><eq>kf(x)</eq></td><td><eq>kF(x) + C, k</eq> a constant</td></tr><tr><td>2. Sum or Difference Rule:</td><td><eq>f(x) \pm g(x)</eq></td><td><eq>F(x) \pm G(x) + C</eq></td></tr></table>

The formulas in Table 4.3 are easily proved by differentiating the antiderivatives and verifying that the result agrees with the original function. 

**EXAMPLE 4** Find the general antiderivative of 

$$
f (x) = \frac {3}{\sqrt {x}} + \sin 2 x.
$$

**Solution** We have that $f(x) = 3g(x) + h(x)$ for the functions g and h in Example 3. Since $G(x) = 2\sqrt{x}$ is an antiderivative of $g(x)$ from Example 3b, it follows from the Constant Multiple Rule for antiderivatives that $3G(x) = 3 \cdot 2\sqrt{x} = 6\sqrt{x}$ is an antiderivative of $3g(x) = 3/\sqrt{x}$ . Likewise, from Example 3c we know that $H(x) = (-1/2)\cos 2x$ is an antiderivative of $h(x) = \sin 2x$ . From the Sum Rule for antiderivatives, we then get that 

$$
\begin{array}{r l} F (x) & = 3 G (x) + H (x) + C \\ & = 6 \sqrt {x} - \frac {1}{2} \cos 2 x + C \end{array}
$$

is the general antiderivative formula for $f(x)$ , where C is an arbitrary constant. 

### Initial Value Problems and Differential Equations

Antiderivatives play several important roles in mathematics and its applications. Methods and techniques for finding them are a major part of calculus, and we take up that study in Chapter 8. Finding an antiderivative for a function $f(x)$ is the same problem as finding a function $y(x)$ that satisfies the equation 

$$
{\frac {d y}{d x}} = f (x).
$$

This is called a differential equation, since it is an equation involving an unknown function y that is being differentiated. To solve it, we need a function $y(x)$ that satisfies the equation. This function is found by taking the antiderivative of $f(x)$ . We can fix the arbitrary constant arising in the antidifferentiation process by specifying an initial condition 

$$
y (x _ {0}) = y _ {0}.
$$

This condition means the function $y(x)$ has the value $y_{0}$ when $x = x_{0}$ . The combination of a differential equation and an initial condition is called an initial value problem. Such problems play important roles in all branches of science. 

The most general antiderivative $F(x) + C$ of the function $f(x)$ (such as $x^{3} + C$ for the function $3x^{2}$ in Example 2) gives the general solution $y = F(x) + C$ of the differential equation $dy/dx = f(x)$ . The general solution gives all the solutions of the equation (there are infinitely many, one for each value of C). We solve the differential equation by finding its general solution. We then solve the initial value problem by finding the particular solution that satisfies the initial condition $y(x_{0}) = y_{0}$ . In Example 2, the function $y = x^{3} - 2$ is the particular solution of the differential equation $dy/dx = 3x^{2}$ satisfying the initial condition $y(1) = -1$ . 

### Antiderivatives and Motion

We have seen that the derivative of the position function of an object gives its velocity, and the derivative of its velocity function gives its acceleration. If we know an object's acceleration, then by finding an antiderivative we can recover the velocity, and from an antiderivative of the velocity we can recover its position function. This procedure was used as an application of Corollary 2 in Section 4.2. Now that we have a terminology and conceptual framework in terms of antiderivatives, we revisit the problem from the point of view of differential equations. 

**EXAMPLE 5** A hot-air balloon ascending at the rate of 3.6 m/s is at a height 24.5 m above the ground when a package is dropped. How long does it take the package to reach the ground? 

![教材插图](/books/thomas-calculus/assets/baa1d8a3fa428ad07425f9fb584c11236abc4ef2500e290416ff875c5ecd7f46.jpg)



FIGURE 4.56 A package dropped from a rising hot-air balloon (Example 5).


**Solution** Let $v(t)$ denote the velocity of the package at time t, and let $s(t)$ denote its height above the ground. The acceleration of gravity near the surface of the earth is $9.8 \, m/s^{2}$ . Assuming no other forces act on the dropped package, we have 

$$
\frac {d v}{d t} = - 9. 8. \quad \begin{array}{l} \text { Negative   because   gravity   acts   in   the } \\ \text { direction   of   decreasing   s } \end{array}
$$

This leads to the following initial value problem (Figure 4.56): 

$$
\begin{array}{l l} \text { Differential   equation: } & \frac {d v}{d t} = - 9. 8 \\ \text { Initial   condition: } & v (0) = 3. 6. \end{array} \quad \text { Balloon   initially   rising }
$$

This is our mathematical model for the package's motion. We solve the initial value problem to obtain the velocity of the package. 

1. Solve the differential equation: The general formula for an antiderivative of -9.8 is 

$$
v = - 9. 8 t + C.
$$

Having found the general solution of the differential equation, we use the initial condition to find the particular solution that solves our problem. 

### 2. Evaluate C:

$$
\begin{array}{l} 3. 6 = - 9. 8 (0) + C \quad \text { Initial   condition } v (0) = 3. 6 \\ C = 3. 6. \end{array}
$$

The solution of the initial value problem is 

$$
v = - 9. 8 t + 3. 6.
$$

Since velocity is the derivative of height, and the height of the package is $24.5\mathrm{m}$ at time $t = 0$ when it is dropped, we now have a second initial value problem: 

Differential equation: $\frac{ds}{dt} = -9.8t + 3.6$ Set $v = ds / dt$ in the previous equation. Initial condition: $s(0) = 24.5$ . 

We solve this initial value problem to find the height as a function of t. 

1. Solve the differential equation: Finding the general antiderivative of $-9.8t + 3.6$ gives 

$$
s = - 4. 9 t ^ {2} + 3. 6 t + C.
$$

2. Evaluate C: 

$$
\begin{array}{l} 2 4. 5 = - 4. 9 (0) ^ {2} + 3. 6 (0) + C \quad \text { Initial   condition } s (0) = 2 4. 5 \\ C = 2 4. 5. \end{array}
$$

The package's height above ground at time $t$ is 

$$
s = - 4. 9 t ^ {2} + 3. 6 t + 2 4. 5.
$$

Use the solution: To find how long it takes the package to reach the ground, we set s equal to 0 and solve for t: 

$$
\begin{array}{r l} - 4. 9 t ^ {2} + 3. 6 t + 2 4. 5 & = 0 \\ t & = \frac {- 3 . 6 \pm \sqrt {4 9 3 . 1 6}}{- 9 . 8} \quad \text { Quadratic   formula } \\ t & \approx - 1. 9 0, \quad t \approx 2. 6 3. \end{array}
$$

The package hits the ground about 2.63 s after it is dropped from the balloon. (The negative root has no physical meaning.) 

### Indefinite Integrals

A special symbol is used to denote the collection of all antiderivatives of a function f. 

> ***DEFINITION*** The collection of all antiderivatives of $f$ is called the indefinite integral of $f$ with respect to $x$ ; it is denoted by 
>
> $$
> \int f (x) d x.
> $$
>
The symbol $\int$ is an integral sign. The function f is the integrand of the integral, and x is the variable of integration. 

After the integral sign in the notation we just defined, the integrand function is always followed by a differential to indicate the variable of integration. We will have more to say about why this is important in Chapter 5. Using this notation, we restate the solutions of Example 1, as follows: 

$$
\begin{array}{l} \int 2 x d x = x ^ {2} + C, \\ \int \cos x d x = \sin x + C, \\ \int \left(\frac {1}{x} + 2 e ^ {2 x}\right) d x = \ln | x | + e ^ {2 x} + C. \end{array}
$$

This notation is related to the main application of antiderivatives, which will be explored in Chapter 5. Antiderivatives play a key role in computing limits of certain infinite sums, an unexpected and wonderfully useful role that is described in a central result of Chapter 5, the Fundamental Theorem of Calculus. 

**EXAMPLE 6** Evaluate 

$$
\int (x ^ {2} - 2 x + 5) d x.
$$

**Solution** If we recognize that $(x^{3} / 3) - x^{2} + 5x$ is an antiderivative of $x^{2} - 2x + 5$ , we can evaluate the integral as 

$$
\int (x ^ {2} - 2 x + 5) d x = \overbrace {\frac {x ^ {3}}{3} - x ^ {2} + 5 x} ^ {\text { antiderivative }} + \underbrace {C .} _ {\text { arbitrary   constant }}
$$

If we do not recognize the antiderivative right away, we can generate it term-by-term with the Sum, Difference, and Constant Multiple Rules: 

$$
\begin{array}{r l} \int (x ^ {2} - 2 x + 5) d x & = \int x ^ {2} d x - \int 2 x d x + \int 5 d x \\ & = \int x ^ {2} d x - 2 \int x d x + 5 \int 1 d x \\ & = \left(\frac {x ^ {3}}{3} + C _ {1}\right) - 2 \left(\frac {x ^ {2}}{2} + C _ {2}\right) + 5 (x + C _ {3}) \\ & = \frac {x ^ {3}}{3} + C _ {1} - x ^ {2} - 2 C _ {2} + 5 x + 5 C _ {3}. \end{array}
$$

This formula is more complicated than it needs to be. If we combine $C_{1}, -2C_{2}$ , and $5C_{3}$ into a single arbitrary constant $C = C_{1} - 2C_{2} + 5C_{3}$ , the formula simplifies to 

$$
\frac {x ^ {3}}{3} - x ^ {2} + 5 x + C
$$

and still gives all the possible antiderivatives there are. For this reason, we recommend that you go right to the final form even if you elect to integrate term-by-term. Write 

$$
\begin{array}{r l} \int (x ^ {2} - 2 x + 5) d x & = \int x ^ {2} d x - \int 2 x d x + \int 5 d x \\ & = \frac {x ^ {3}}{3} - x ^ {2} + 5 x + C. \end{array}
$$

Find the simplest antiderivative you can for each part, and add the arbitrary constant of integration at the end. 

We conclude this section with a list of basic antidifferentiation formulas in Table 4.4, using the integral sign to indicate an antiderivative. 

**TABLE 4.4 Integration formulas**

1. $\int x^n dx = \frac{x^{n + 1}}{n + 1} + C (n\neq -1)$ 

2. $\int \sin x dx = -\cos x + C$ 

3. $\int \cos x dx = \sin x + C$ 

4. $\int \sec^2 x dx = \tan x + C$ 

5. $\int \csc^2 x dx = -\cot x + C$ 

6. $\int \sec x\tan x dx = \sec x + C$ 

8. $\int e^{x}dx = e^{x} + C$ 

7. $\int \csc x\cot x dx = -\csc x + C$ 

9. $\int \frac{dx}{x} = \ln |x| + C (x \neq 0)$ 

10. $\int \frac{dx}{\sqrt{1 - x^2}} = \arcsin x + C$ 

11. $\int \frac{dx}{1 + x^2} = \arctan x + C$ 

12. $\int \frac{dx}{x\sqrt{x^2 - 1}} = \operatorname {arcsec} x + C (x > 1)$ 

13. $\int a^{x}dx = \frac{a^{x}}{\ln a} +C (a > 0,a\neq 1)$ 

### EXERCISES 4.8

#### Finding Antiderivatives

In Exercises 1–24, find an antiderivative for each function. Do as many as you can mentally. Check your answers by differentiation. 

1. a. 2x 

b. $x^{2}$ 

c. $x^{2}-2x+1$ 

2. a. 6x 

b. $x^{7}$ 

c. $x^{7} - 6x + 8$ 

3. a. $-3x^{-4}$ 

b. $x^{-4}$ 

c. $x^{-4} + 2x + 3$ 

4. a. $2x^{-3}$ 

b. $\frac{x^{-3}}{2} + x^2$ 

c. $-x^{-3} + x - 1$ 

5. a. $\frac{1}{x^2}$ 

b. $\frac{5}{x^{2}}$ 

6. a. $-\frac{2}{x^{3}}$ 

c. $2 - \frac{5}{x^2}$ 

7. a. $\frac{3}{2}\sqrt{x}$ 

b. $\frac{1}{2\sqrt{x}}$ 

c. $\sqrt{x} + \frac{1}{\sqrt{x}}$ 

8. a. $\frac{4}{3}\sqrt[3]{x}$ 

b. $\frac{1}{3\sqrt[3]{x}}$ 

c. $\sqrt[3]{x} + \frac{1}{\sqrt[3]{x}}$ 

9. a. $\frac{2}{3}x^{-1/3}$ 

b. $\frac{1}{3} x^{-2 / 3}$ 

c. $-\frac{1}{3}x^{-4/3}$ 

10. a. $\frac{1}{2} x^{-1/2}$ 

$$
- \frac {1}{2} x ^ {- 3 / 2}
$$

c. $-\frac{3}{2}x^{-5/2}$ 

11. a. $\frac{1}{x}$ 

b. $\frac{7}{x}$ 

$$
x ^ {3} - \frac {1}{x ^ {3}}
$$

$$
\frac {1}{2 x ^ {3}}
$$

12. a. $\frac{1}{3x}$ 

c. $1 - \frac{5}{x}$ 

$$
\frac {2}{5 x}
$$

c. $1 + \frac{4}{3x} -\frac{1}{x^2}$ 

13. a. $-\pi \sin \pi x$ b. $3\sin x$ c. $\sin \pi x - 3\sin 3x$ 

14. a. $\pi \cos \pi x$ 

b. $\frac{\pi}{2}\cos \frac{\pi x}{2}$ 

c. $\cos \frac{\pi x}{2} +\pi \cos x$ 

15. a. $\sec^2 x$ 

b. $\frac{2}{3}\sec^2\frac{x}{3}$ 

c. $-\sec^{2}\frac{3x}{2}$ 

16. a. $\csc^2 x$ 

b. $-\frac{3}{2}\csc^{2}\frac{3x}{2}$ 

c. $1 - 8\csc^2 2x$ 

17. a. $\csc x\cot x$ 

$$
- \csc 5 x \cot 5 x
$$

c. $-\pi \csc \frac{\pi x}{2} \cot \frac{\pi x}{2}$ 

18. a. $\sec x\tan x$ b. $4\sec 3x\tan 3x$ c. $\sec \frac{\pi x}{2}\tan \frac{\pi x}{2}$ 

19. a. $e^{3x}$ 

b. $e^{-x}$ 

c. $e^{x/2}$ 

20. a. $e^{-2x}$ 

b. $e^{4x/3}$ 

c. $e^{-x/5}$ 

21. a. $3^{x}$ 

b. $2^{-x}$ 

c. $\left(\frac{5}{3}\right)^{x}$ 

22. a. $x^{\sqrt{3}}$ 

$$
x ^ {\pi}
$$

c. $x^{\sqrt{2}-1}$ 

23. a. $\frac{2}{\sqrt{1 - x^{2}}}$ 

b. $\frac{1}{2(x^{2}+1)}$ 

c. $\frac{1}{1+4x^{2}}$ 

24. a. $x - \left(\frac{1}{2}\right)^x$ 

$$
x ^ {2} + 2 ^ {x}
$$

c. $\pi^x - x^{-1}$ 

#### Finding Indefinite Integrals

In Exercises 25–70, find the most general antiderivative or indefinite integral. You may need to try a solution and then adjust your guess. Check your answers by differentiation. 

25. $\int (x + 1)dx$ 

26. $\int (5 - 6x)dx$ 

27. $\int \left(3t^2 +\frac{t}{2}\right)dt$ 

28. $\int \left(\frac{t^2}{2} + 4t^3\right)dt$ 

29. $\int (2x^3 - 5x + 7)dx$ 

30. $\int (1 - x^2 - 3x^5) dx$ 

31. $\int \left(\frac{1}{x^2} - x^2 - \frac{1}{3}\right) dx$ 

32. $\int \left(\frac{1}{5} -\frac{2}{x^3} +2x\right)dx$ 

33. $\int x^{-1 / 3}dx$ 

34. $\int x^{-5 / 4}dx$ 

35. $\int (\sqrt{x} +\sqrt[3]{x})dx$ 

36. $\int \left(\frac{\sqrt{x}}{2} +\frac{2}{\sqrt{x}}\right)dx$ 

37. $\int \left(8y - \frac{2}{y^{1 / 4}}\right)dy$ 

38. $\int \left(\frac{1}{7} -\frac{1}{y^{5 / 4}}\right)dy$ 

39. $\int 2x(1 - x^{-3})dx$ 

40. $\int x^{-3}(x + 1)dx$ 

41. $\int \frac{t\sqrt{t} + \sqrt{t}}{t^2} dt$ 

42. $\int \frac{4 + \sqrt{t}}{t^3} dt$ 

43. $\int (-2\cos t)dt$ 

44. $\int (-5\sin t)dt$ 

45. $\int 7\sin \frac{\theta}{3} d\theta$ 

46. $\int 3\cos 5\theta d\theta$ 

47. $\int (-3\csc^2 x)dx$ 

48. $\int \left(-\frac{\sec^2x}{3}\right)dx$ 

49. $\int \frac{\csc\theta\cot\theta}{2} d\theta$ 

50. $\int \frac{2}{5}\sec \theta \tan \theta d\theta$ 

51. $\int (e^{3x} + 5e^{-x})dx$ 

52. $\int (2e^{x} - 3e^{-2x})dx$ 

53. $\int (e^{-x} + 4^x)dx$ 

54. $\int (1.3)^{x}dx$ 

55. $\int (4\sec x\tan x - 2\sec^2 x)dx$ 

56. $\int \frac{1}{2} (\csc^2 x - \csc x\cot x)dx$ 

57. $\int (\sin 2x - \csc^2 x)dx$ 

58. $\int (2\cos 2x - 3\sin 3x)dx$ 

59. $\int \frac{1 + \cos 4t}{2} dt$ 

60. $\int \frac{1 - \cos 6t}{2} dt$ 

61. $\int \left(\frac{1}{x} -\frac{5}{x^2 + 1}\right)dx$ 

62. $\int \left(\frac{2}{\sqrt{1 - y^2}} -\frac{1}{y^{1 / 4}}\right)dy$ 

63. $\int 3x^{\sqrt{3}}dx$ 

64. $\int x^{\sqrt{2} - 1}dx$ 

65. $\int (1 + \tan^2\theta)d\theta$ (Hint: $1 + \tan^2\theta = \sec^2\theta$ 

66. $\int (2 + \tan^2\theta)d\theta$ 

67. $\int \cot^2 x dx$

68. $\int (1 - \cot^2 x)dx$ (Hint: $1 + \cot^2 x = \csc^2 x$ )

69. $\int \cos \theta (\tan \theta +\sec \theta)d\theta$

70. $\int \frac{\csc\theta}{\csc\theta - \sin\theta} d\theta$

#### Checking Antiderivative Formulas

Verify the formulas in Exercises 71–82 by differentiation. 

71. $\int (7x - 2)^3 dx = \frac{(7x - 2)^4}{28} + C$ 

$$
\int (3 x + 5) ^ {- 2} d x = - \frac {(3 x + 5) ^ {- 1}}{3} + C
73. $$\int \sec^2 (5x - 1)dx = \frac{1}{5}\tan (5x - 1) + C$$
\int \csc^ {2} \left(\frac {x - 1}{3}\right) d x = - 3 \cot \left(\frac {x - 1}{3}\right) + C
$$

75. $\int \frac{1}{(x + 1)^2} dx = -\frac{1}{x + 1} + C$ 

76. $\int \frac{1}{(x + 1)^2} dx = \frac{x}{x + 1} + C$ 

77. $\int \frac{1}{x + 1} dx = \ln |x + 1| + C, x \neq -1$ 

78. $\int xe^{x}dx = xe^{x} - e^{x} + C$ 

79. $\int \frac{dx}{a^2 + x^2} = \frac{1}{a}\arctan \left(\frac{x}{a}\right) + C$ 

80. $\int \frac{dx}{\sqrt{a^2 - x^2}} = \arcsin \left(\frac{x}{a}\right) + C$ 

81. $\int \frac{\arctan x}{x^2} dx = \ln x - \frac{1}{2}\ln (1 + x^2) - \frac{\arctan x}{x} + C$ 

82. $\int (\arcsin x)^2 dx = x(\arcsin x)^2 - 2x + 2\sqrt{1 - x^2}\arcsin x + C$ 

83. Right, or wrong? Say which for each formula and give a brief reason for each answer. 

a. $\int x\sin x dx = \frac{x^2}{2}\sin x + C$ 

$$
\int x \sin x d x = - x \cos x + C
$$

c. $\int x\sin x dx = -x\cos x + \sin x + C$ 

84. Right, or wrong? Say which for each formula and give a brief reason for each answer. 

$$
\int \tan \theta \sec^ {2} \theta d \theta = \frac {\sec^ {3} \theta}{3} + C
$$

$$
\int \tan \theta \sec^ {2} \theta d \theta = \frac {1}{2} \tan^ {2} \theta + C
$$

c. $\int \tan \theta \sec^2\theta d\theta = \frac{1}{2}\sec^2\theta + C$ 

85. Right, or wrong? Say which for each formula and give a brief reason for each answer. 

a. $\int (2x + 1)^{2}dx = \frac{(2x + 1)^{3}}{3} +C$ 

b. $\int 3(2x + 1)^{2}dx = (2x + 1)^{3} + C$ 

c. $\int 6(2x + 1)^{2}dx = (2x + 1)^{3} + C$ 

86. Right, or wrong? Say which for each formula and give a brief reason for each answer. 

a. $\int \sqrt{2x + 1} dx = \sqrt{x^2 + x + C}$ 

b. $\int \sqrt{2x + 1} dx = \sqrt{x^2 + x} + C$ 

c. $\int \sqrt{2x + 1} dx = \frac{1}{3}\left(\sqrt{2x + 1}\right)^3 + C$ 

87. Right, or wrong? Give a brief reason why. 

$$
\int \frac {- 1 5 (x + 3) ^ {2}}{(x - 2) ^ {4}} d x = \left(\frac {x + 3}{x - 2}\right) ^ {3} + C
88. $Right, or wrong? Give a brief reason why.$
\int \frac {x \cos (x ^ {2}) - \sin (x ^ {2})}{x ^ {2}} d x = \frac {\sin (x ^ {2})}{x} + C
$$

Initial Value Problems 

89. Which of the following graphs shows the solution of the initial value problem 

$$
\frac {d y}{d x} = 2 x, \quad y = 4 \text {   when   } x = 1?
$$

![教材插图](/books/thomas-calculus/assets/d5aca41e355c81017aca73a07e5d64a4633b217adca658ade8b9cb1d3686eb7f.jpg)


(a) 

![教材插图](/books/thomas-calculus/assets/7eaf7df9e32cc8e38e5ab6d2e53eb870c83732600e57f1b5b52c60ea968205e3.jpg)


![教材插图](/books/thomas-calculus/assets/0e2e965bfcfb87d49f4a93bf8942a822c615951e3a879cef2338ccdc3610ab16.jpg)


(b) 

(c) 

Give reasons for your answer. 

90. Which of the following graphs shows the solution of the initial value problem 

$$
\frac {d y}{d x} = - x, \quad y = 1 \text {   when   } x = - 1?
$$

![教材插图](/books/thomas-calculus/assets/05120553488e6324a7f4fb85d9fb535b6e1aea42701d939ebc0a819a19108304.jpg)


(a) 

![教材插图](/books/thomas-calculus/assets/7c3d5a47f1d48d6f84940e550de3393b700f3097b8536067094bf3ba418b74cb.jpg)


![教材插图](/books/thomas-calculus/assets/9e4e9ea14020ba95eb756ad983aa160701f6d7776eb9cc3fbdbf3d10b3f511cd.jpg)


(b) 

(c) 

Give reasons for your answer. 

Solve the initial value problems in Exercises 91–112. 

91. $\frac{dy}{dx} = 2x - 7, y(2) = 0$ 

92. $\frac{dy}{dx} = 10 - x, y(0) = -1$ 

93. $\frac{dy}{dx} = \frac{1}{x^2} + x, x > 0; y(2) = 1$ 

94. $\frac{dy}{dx} = 9x^2 - 4x + 5, y(-1) = 0$ 

95. $\frac{dy}{dx} = 3x^{-2/3}$ , $y(-1) = -5$ 

96. $\frac{dy}{dx} = \frac{1}{2\sqrt{x}}, y(4) = 0$ 

97. $\frac{ds}{dt} = 1 + \cos t, s(0) = 4$ 

98. $\frac{ds}{dt} = \cos t + \sin t, s(\pi) = 1$ 

99. $\frac{dr}{d\theta} = -\pi \sin \pi \theta, r(0) = 0$ 

100. $\frac{dr}{d\theta} = \cos \pi \theta, r(0) = 1$ 

101. $\frac{dv}{dt} = \frac{1}{2}\sec t\tan t,\quad v(0) = 1$ 

102. $\frac{d\upsilon}{dt} = 8t + \csc^2 t,\quad \upsilon \left(\frac{\pi}{2}\right) = -7$ 

103. $\frac{dv}{dt} = \frac{3}{t\sqrt{t^2 - 1}}, t > 1, v(2) = 0$ 

104. $\frac{dv}{dt} = \frac{8}{1 + t^2} +\sec^2 t,\quad v(0) = 1$ 

105. $\frac{d^2y}{dx^2} = 2 - 6x; y'(0) = 4, y(0) = 1$ 

106. $\frac{d^2y}{dx^2} = 0; y'(0) = 2, y(0) = 0$ 

107. $\frac{d^2r}{dt^2} = \frac{2}{t^3};\quad \left.\frac{dr}{dt}\right|_{t = 1} = 1,\quad r(1) = 1$ 

108. $\frac{d^2s}{dt^2} = \frac{3t}{8};\quad \left.\frac{ds}{dt}\right|_{t = 4} = 3,\quad s(4) = 4$ 

109. $\frac{d^3y}{dx^3} = 6; y''(0) = -8, y'(0) = 0, y(0) = 5$ 

110. $\frac{d^3\theta}{dt^3} = 0;\theta''(0) = -2,\theta'(0) = -\frac{1}{2},\theta(0) = \sqrt{2}$ 

111. $y^{(4)} = -\sin t + \cos t;$ $y'''(0) = 7, \quad y''(0) = y'(0) = -1, \quad y(0) = 0$ 

112. $y^{(4)} = -\cos x + 8 \sin 2x;$ $y'''(0) = 0,\quad y''(0) = y'(0) = 1,\quad y(0) = 3$ 

113. Find the curve $y = f(x)$ in the xy-plane that passes through the point (9, 4) and whose slope at each point is $3\sqrt{x}$ . 

114. a. Find a curve $y = f(x)$ with the following properties: 

$$
\frac {d ^ {2} y}{d x ^ {2}} = 6 x
$$

ii) Its graph passes through the point $(0,1)$ and has a horizontal tangent line there. 

b. How many curves like this are there? How do you know? 

In Exercises 115–118, the graph of $f'$ is given. Assume that $f(0) = 1$ and sketch a possible continuous graph of $f$ . 

![教材插图](/books/thomas-calculus/assets/9f6cb2a0fb7eef4aaba5ac3a654c856ae21fbcf9ffbc797038d88fbdc50a7983.jpg)


![教材插图](/books/thomas-calculus/assets/6240d5a22510d4c7ec9b4791fe43bc8f5ebc697fc6c868b111c32ceeaea24e56.jpg)



117.


![教材插图](/books/thomas-calculus/assets/9857003087071fe2e3ec4e2290f9446f9a3bab10f361d64ba1c2a7ac0cc71771.jpg)



118.


![教材插图](/books/thomas-calculus/assets/9e8a0de531aafe62ff80148c3dbd3e3dd0f9a88e0723965b91a187360f18b5c6.jpg)



**Solution** (Integral) Curves


Exercises 119–122 show solution curves of differential equations. In each exercise, find an equation for the curve through the labeled point. 


119.



120.


![教材插图](/books/thomas-calculus/assets/b3416c18e040086164b217ced9f091403822d900c80f8516804512ccd7150da9.jpg)


![教材插图](/books/thomas-calculus/assets/f76dc223c44c41f2f449e72de281e87253b740f97eeeab144971b907d55b03b6.jpg)



121.



122.


![教材插图](/books/thomas-calculus/assets/7d0cc47d16048390b89d6e1fa2eea2007055be63be8dbe60839722518847ef63.jpg)


![教材插图](/books/thomas-calculus/assets/5fc96498fed007602acd34796d746910d856329799dd9a07243988b1621c4e21.jpg)


Applications 

123. Finding displacement from an antiderivative of velocity 

a. Suppose that the velocity of a body moving along the s-axis is 

$$
\frac {d s}{d t} = v = 9. 8 t - 3.
$$

i) Find the body's displacement over the time interval from $t = 1$ to $t = 3$ given that $s = 5$ when $t = 0$ . 

ii) Find the body's displacement from $t = 1$ to $t = 3$ given that $s = -2$ when $t = 0$ . 

iii) Now find the body's displacement from $t = 1$ to $t = 3$ given that $s = s_0$ when $t = 0$ . 

b. Suppose that the position $s$ of a body moving along a coordinate line is a differentiable function of time $t$ . Is it true that once you know an antiderivative of the velocity function $ds/dt$ , you can find the body's displacement from $t = a$ to $t = b$ even if you do not know the body's exact position at either of those times? Give reasons for your answer. 

124. Liftoff from Earth A rocket lifts off the surface of Earth with a constant acceleration of $20 \, m/s^{2}$ . How fast will the rocket be going 1 min later? 

125. Stopping a car in time You are driving along a highway at a steady 108 km/h (30 m/s) when you see an accident ahead and slam on the brakes. What constant deceleration is required to stop your car in 75 m? To find out, carry out the following steps. 

**Step 1.** Solve the initial value problem 

$$
\begin{array}{l} \text { Differential   equation: } \frac {d ^ {2} s}{d t ^ {2}} = - k \quad (k \text { constant }) \\ \text { Initial   conditions: } \quad \frac {d s}{d t} = 3 0 \text { and } s = 0 \text { when } t = 0. \\ \text { Measuring   time   and   distance } \\ \text { from   when   the   brakes   are   applied } \end{array}
$$

**Step 2.** Find the value of $t$ that makes $ds / dt = 0$ . (The answer will involve $k$ .) 

**Step 3.** Find the value of k that makes s = 75 for the value of t you found in Step 2. 

126. Stopping a motorcycle The State of Illinois Cycle Rider Safety Program requires motorcycle riders to be able to brake from 48 km/h (13.3 m/s) to 0 in 13.7 m. What constant deceleration does it take to do that? 

127. Motion along a coordinate line A particle moves on a coordinate line with acceleration $a = d^2 s / dt^2 = 15\sqrt{t} - (3 / \sqrt{t})$ , subject to the conditions that $ds / dt = 4$ and $s = 0$ when $t = 1$ . Find 

a. the velocity $v = ds / dt$ in terms of $t$ . 

b. the position s in terms of t. 

T 128. The hammer and the feather When Apollo 15 astronaut David Scott dropped a hammer and a feather on the moon to demonstrate that in a vacuum all bodies fall with the same (constant) acceleration, he dropped them from about 1.2 m above the ground. The television footage of the event shows the hammer and the feather falling more slowly than on Earth, where, in a vacuum, they would have taken only half a second to fall the 1.2 m. How long did it take the hammer and feather to fall 1.2 m on the moon? To find out, solve the following initial value problem for s as a function of t. Then find the value of t that makes s equal to 0. 

Differential equation: $\frac{d^2s}{dt^2} = -1.6\mathrm{m / s^2}$ 

Initial conditions: 

$$
\frac {d s}{d t} = 0 \text {   and   } s = 1. 2 \text {   when   } t = 0
129. $Motion with constant acceleration The standard equation for the position s of a body moving with a constant acceleration a along a coordinate line is$
s = \frac {a}{2} t ^ {2} + v _ {0} t + s _ {0},\tag{1}
$$

where $v_0$ and $s_0$ are the body's velocity and position at time $t = 0$ . Derive this equation by solving the initial value problem 

Differential equation: $\frac{d^2s}{dt^2} = a$ 

Initial conditions: 

$$
\frac {d s}{d t} = v _ {0} \text {   and   } s = s _ {0} \text {   when   } t = 0.
130. $Free fall near the surface of a planet For free fall near the surface of a planet where the acceleration due to gravity has a constant magnitude of g length-units/s $^{2}$ , Equation (1) in Exercise 129 takes the form$
s = - \frac {1}{2} g t ^ {2} + v _ {0} t + s _ {0},\tag{2}
$$

where $s$ is the body's height above the surface. The equation has a minus sign because the acceleration acts downward, in the direction of decreasing $s$ . The velocity $v_{0}$ is positive if the object is rising at time $t = 0$ and negative if the object is falling. 

Instead of using the result of Exercise 129, you can derive Equation (2) directly by solving an appropriate initial value problem. What initial value problem? Solve it to be sure you have the right one, explaining the solution steps as you go along. 

131. Suppose that 

$$
f (x) = \frac {d}{d x} \left(1 - \sqrt {x}\right) \text { and } g (x) = \frac {d}{d x} (x + 2).
$$

Find: 

a. $\int f(x)dx$ 

c. $\int [-f(x)]dx$ 

b. $\int g(x)dx$ 

e. $\int [f(x) + g(x)]dx$ 

d. $\int [-g(x)]dx$ 

f. $\int [f(x) - g(x)]dx$ 

132. Uniqueness of solutions If differentiable functions $y = F(x)$ and $y = g(x)$ both solve the initial value problem 

$$
\frac {d y}{d x} = f (x), \quad y (x _ {0}) = y _ {0},
$$

on an interval $I$ , must $F(x) = G(x)$ for every $x$ in $I$ ? Give reasons for your answer. 

COMPUTER EXPLORATIONS 

Use a CAS to solve the initial value problems in Exercises 133–136. Plot the solution curves. 

133. $y' = \cos^{2}x + \sin x,\quad y(\pi) = 1$ 

134. $y' = \frac{1}{x} + x, \quad y(1) = -1$ 

135. $y' = \frac{1}{\sqrt{4 - x^2}}$ , $y(0) = 2$ 

136. $y'' = \frac{2}{x} + \sqrt{x}, \quad y(1) = 0, \quad y'(1) = 0$ 

## CHAPTER 4 Questions to Guide Your Review

1. What can be said about the extreme values of a function that is continuous on a closed interval? 

2. What does it mean for a function to have a local extreme value on its domain? An absolute extreme value? How are local and absolute extreme values related, if at all? Give examples. 

3. How do you find the absolute extrema of a continuous function on a closed interval? Give examples. 

4. What are the hypotheses and conclusion of Rolle's Theorem? Are the hypotheses really necessary? Explain. 

5. What are the hypotheses and conclusion of the Mean Value Theorem? What physical interpretations might the theorem have? 

6. State the Mean Value Theorem's three corollaries. 

7. How can you sometimes identify a function $f(x)$ by knowing $f'$ and knowing the value of $f$ at a point $x = x_0$ ? Give an example. 

8. What is the First Derivative Test for Local Extreme Values? Give examples of how it is applied. 

9. How do you test a twice-differentiable function to determine where its graph is concave up or concave down? Give examples. 

10. What is an inflection point? Give an example. What physical significance do inflection points sometimes have? 

11. What is the Second Derivative Test for Local Extreme Values? Give examples of how it is applied. 

12. What do the derivatives of a function tell you about the shape of its graph? 

13. List the steps you would take to graph a polynomial function. Illustrate with an example. 

14. What is a cusp? Give examples. 

15. List the steps you would take to graph a rational function. Illustrate with an example. 

16. Outline a general strategy for solving max-min problems. Give examples. 

17. Describe l'Hôpital's Rule. How do you know when to use the rule and when to stop? Give an example. 

18. How can you sometimes handle limits that lead to indeterminate forms $\infty / \infty, \infty \cdot 0$ , and $\infty - \infty$ ? Give examples. 

19. How can you sometimes handle limits that lead to indeterminate forms $1^{\infty}, 0^{0}$ , and $\infty^{\infty}$ ? Give examples. 

20. Describe Newton's method for solving equations. Give an example. What is the theory behind the method? What are some of the things to watch out for when you use the method? 

21. Can a function have more than one antiderivative? If so, how are the antiderivatives related? Explain. 

22. What is an indefinite integral? How do you evaluate one? What general formulas do you know for finding indefinite integrals? 

23. How can you sometimes solve a differential equation of the form $dy / dx = f(x)$ ? 

24. What is an initial value problem? How do you solve one? Give an example. 

25. If you know the acceleration of a body moving along a coordinate line as a function of time, what more do you need to know to find the body's position function? Give an example. 

## CHAPTER 4 Practice Exercises

### Finding Extreme Values

In Exercises 1–16, find the extreme values (absolute and local) of the function over its natural domain, and where they occur. 

1. $y = 2x^{2} - 8x + 9$ 

2. $y = x^{3} - 2x + 4$ 

3. $y = x^{3} + x^{2} - 8x + 5$ 

4. $y = x^{3}(x - 5)^{2}$ 

5. $y = \sqrt{x^2 - 1}$ 

6. $y = x - 4\sqrt{x}$ 

7. $y = \frac{1}{\sqrt[3]{1 - x^2}}$ 

$$
y = \sqrt {3 + 2 x - x ^ {2}}
$$

9. $y = \frac{x}{x^2 + 1}$ 

10. $y = \frac{x + 1}{x^{2} + 2x + 2}$ 

11. $y = e^{x} + e^{-x}$ 

12. $y = e^{x} - e^{-x}$ 

13. $y = x \ln x$ 

14. $y = x^{2} \ln x$ 

15. $y = \arccos(x^{2})$ 

$$
1 6. y = \sin^ {- 1} (e ^ {x})
$$

### Extreme Values

17. Does $f(x) = x^{3} + 2x + \tan x$ have any local maximum or minimum values? Give reasons for your answer. 

18. Does $g(x) = \csc x + 2 \cot x$ have any local maximum values? Give reasons for your answer. 

19. Does $f(x) = (7 + x)(11 - 3x)^{1/3}$ have an absolute minimum value? An absolute maximum? If so, find them or give reasons why they fail to exist. List all critical points of f. 

20. Find values of a and b such that the function 

$$
f (x) = \frac {a x + b}{x ^ {2} - 1}
$$

has a local extreme value of 1 at x = 3. Is this extreme value a local maximum or a local minimum? Give reasons for your answer. 

21. Does $g(x) = e^{x} - x$ have an absolute minimum value? An absolute maximum? If so, find them or give reasons why they fail to exist. List all critical points of g. 

22. Does $f(x) = 2e^{x} / (1 + x^{2})$ have an absolute minimum value? An absolute maximum? If so, find them or give reasons why they fail to exist. List all critical points of $f$ . 

In Exercises 23 and 24, find the absolute maximum and absolute minimum values of f over the interval. 

23. $f(x) = x - 2 \ln x, \quad 1 \leq x \leq 3$ 

24. $f(x) = (4 / x) + \ln x^2, 1 \leq x \leq 4$ 

25. The greatest integer function $f(x) = \lfloor x \rfloor$ , defined for all values of x, assumes a local maximum value of 0 at each point of $[0,1)$ . Could any of these local maximum values also be local minimum values of f? Give reasons for your answer. 

26. a. Give an example of a differentiable function $f$ whose first derivative is zero at some point $c$ , even though $f$ has neither a local maximum nor a local minimum at $c$ . 

b. How is this consistent with Theorem 2 in Section 4.1? Give reasons for your answer. 

27. The function $y = 1 / x$ does not take on either a maximum or a minimum on the interval $0 < x < 1$ even though the function is continuous on this interval. Does this contradict the Extreme Value Theorem for continuous functions? Why? 

28. What are the maximum and minimum values of the function $y = |x|$ on the interval $-1 \leq x < 1$ ? Notice that the interval is not closed. Is this consistent with the Extreme Value Theorem for continuous functions? Why? 

29. A graph that is large enough to show a function's global behavior may fail to reveal important local features. The graph of $f(x) = (x^8 / 8) - (x^6 / 2) - x^5 + 5x^3$ is a case in point. 

a. Graph f over the interval $-2.5 \leq x \leq 2.5$ . Where does the graph appear to have local extreme values or points of inflection? 

b. Now factor $f'(x)$ and show that f has a local maximum at $x = \sqrt[3]{5} \approx 1.70998$ and local minima at $x = \pm\sqrt{3} \approx \pm 1.73205$ . 

c. Zoom in on the graph to find a viewing window that shows the presence of the extreme values at $x = \sqrt[3]{5}$ and $x = \sqrt{3}$ . 

The moral here is that without calculus, the existence of two of the three extreme values would probably have gone unnoticed. On any normal graph of the function, the values would lie close enough together to fall within the dimensions of a single pixel on the screen. 

(Source: Uses of Technology in the Mathematics Curriculum, by Benny Evans and Jerry Johnson, Oklahoma State University, published in 1990 under a grant from the National Science Foundation, USE-8950044.) 

### T 30. (Continuation of Exercise 29)

a. Graph $f(x) = (x^8 / 8) - (2/5)x^5 - 5x - (5/x^2) + 11$ over the interval $-2 \leq x \leq 2$ . Where does the graph appear to have local extreme values or points of inflection? 

b. Show that $f$ has a local maximum value at $x = \sqrt[7]{5} \approx 1.2585$ and a local minimum value at $x = \sqrt[3]{2} \approx 1.2599$ . 

c. Zoom in to find a viewing window that shows the presence of the extreme values at $x = \sqrt[7]{5}$ and $x = \sqrt[3]{2}$ . 

### The Mean Value Theorem

31. a. Show that $g(t) = \sin^{2} t - 3t$ decreases on every interval in its domain. 

b. How many solutions does the equation $\sin^2 t - 3t = 5$ have? Give reasons for your answer. 

32. a. Show that $y = \tan \theta$ increases on every open interval in its domain. 

b. If the conclusion in part (a) is really correct, how do you explain the fact that $\tan \pi = 0$ is less than $\tan (\pi /4) = 1$ ? 

33. a. Show that the equation $x^4 + 2x^2 - 2 = 0$ has exactly one solution on $[0,1]$ . 

T b. Find the solution to as many decimal places as you can. 

34. a. Show that $f(x) = x / (x + 1)$ increases on every open interval in its domain. 

b. Show that $f(x) = x^{3} + 2x$ has no local maximum or minimum values. 

35. Water in a reservoir As a result of a heavy rain, the volume of water in a reservoir increased by million cubic meters in 24 hours. Show that at some instant during that period, the reservoir's volume was increasing at a rate in excess of $500,000\mathrm{L / min}$ . 

36. The formula $F(x) = 3x + C$ gives a different function for each value of C. All of these functions, however, have the same derivative with respect to x, namely $F'(x) = 3$ . Are these the only differentiable functions whose derivative is 3? Could there be any others? Give reasons for your answers. 

37. Show that 

$$
\frac {d}{d x} \left(\frac {x}{x + 1}\right) = \frac {d}{d x} \left(- \frac {1}{x + 1}\right)
$$

even though 

$$
\frac {x}{x + 1} \neq - \frac {1}{x + 1}.
$$

Doesn't this contradict Corollary 2 of the Mean Value Theorem? Give reasons for your answer. 

38. Calculate the first derivatives of $f(x) = x^2 / (x^2 + 1)$ and $g(x) = -1 / (x^2 + 1)$ . What can you conclude about the graphs of these functions? 

Analyzing Graphs 

In Exercises 39 and 40, use the graph to answer the questions. 

39. Identify any global extreme values of $f$ and the values of $x$ at which they occur. 

![教材插图](/books/thomas-calculus/assets/2d4499e7bd8e04bf5767d3a055e03f3fa7907b58ad5e7312c3a3286be120d3fb.jpg)


40. Estimate the open intervals on which the function $y = f(x)$ is 

a. increasing. 

b. decreasing. 

c. Use the given graph of $f'$ to indicate where any local extreme values of the function occur, and whether each extreme is a relative maximum or minimum. 

![教材插图](/books/thomas-calculus/assets/9506c32a3477e2edaac45ab3dd2b9e4a700ef88f2a4dbe9efd4032de4eaeb341.jpg)


Each of the graphs in Exercises 41 and 42 is the graph of the position function $s = f(t)$ of an object moving on a coordinate line ( $t$ represents time). At approximately what times (if any) is each object's (a) velocity equal to zero? (b) Acceleration equal to zero? During approximately what time intervals does the object move (c) forward? (d) Backward? 

41. 

![教材插图](/books/thomas-calculus/assets/3491c9e9b4efb510c7731f2eafe4b4ab2c3c2741934db69e79369436c581868c.jpg)


![教材插图](/books/thomas-calculus/assets/c2978a064c3fb166772b56458e559954885f6814284b4f605d7d792e6173c3ab.jpg)


### Graphs and Graphing

Graph the curves in Exercises 43–58. 

43. $y = x^{2} - (x^{3} / 6)$ 

44. $y = x^{3} - 3x^{2} + 3$ 

45. $y = -x^{3} + 6x^{2} - 9x + 3$ 

46. $y = (1 / 8)(x^3 + 3x^2 - 9x - 27)$ 

47. $y = x^{3}(8 - x)$ 

48. $y = x^{2}(2x^{2} - 9)$ 

49. $y = x - 3x^{2 / 3}$ 

50. $y = x^{1/3}(x - 4)$ 

51. $y = x\sqrt{3 - x}$ 

52. $y = x\sqrt{4 - x^{2}}$ 

53. $y = (x - 3)^{2}e^{x}$ 

54. $y = xe^{-x^2}$ 

55. $y = \ln (x^{2} - 4x + 3)$ 

56. $y = \ln (\sin x)$ 

57. $y = \arcsin \left(\frac{1}{x}\right)$ 

58. $y = \tan^{-1}\left(\frac{1}{x}\right)$ 

Each of Exercises 59–64 gives the first derivative of a function $y = f(x)$ . (a) At what points, if any, does the graph of f have a local maximum, local minimum, or inflection point? (b) Sketch the general shape of the graph. 

59. $y^\prime = 16 - x^2$ 

60. $y' = x^{2} - x - 6$ 

61. $y' = 6x(x + 1)(x - 2)$ 

62. $y' = x^{2}(6 - 4x)$ 

63. $y^\prime = x^4 - 2x^2$ 

64. $y^\prime = 4x^2 - x^4$ 

In Exercises 65–68, graph each function. Then use the function's first derivative to explain what you see. 

65. $y = x^{2/3} + (x - 1)^{1/3}$ 

$$
y = x ^ {1 / 3} + (x - 1) ^ {1 / 3}
$$

66. $y = x^{2 / 3} + (x - 1)^{2 / 3}$ 

$$
y = x ^ {2 / 3} - (x - 1) ^ {1 / 3}
$$

Sketch the graphs of the rational functions in Exercises 69–76. 

69. $y = \frac{x + 1}{x - 3}$ 

70. $y = \frac{2x}{x + 5}$ 

71. $y = \frac{x^{2} + 1}{x}$ 

72. $y = \frac{x^2 - x + 1}{x}$ 

73. $y = \frac{x^3 + 2}{2x}$ 

74. $y = \frac{x^4 - 1}{x^2}$ 

75. $y = \frac{x^2 - 4}{x^2 - 3}$ 

76. $y = \frac{x^{2}}{x^{2} - 4}$ 

Using L'Hôpital's Rule 

Use l'Hôpital's Rule to find the limits in Exercises 77–88. 

77. $\lim_{x\to 1}\frac{x^2 + 3x - 4}{x - 1}$ 

78. $\lim_{x\to 1}\frac{x^a - 1}{x^b - 1}$ 

79. $\lim_{x\to \pi}\frac{\tan{x}}{x}$ 

80. $\lim_{x\to0}\frac{\tan x}{x+\sin x}$ 

81. $\lim_{x\to 0}\frac{\sin^2x}{\tan(x^2)}$ 

82. $\lim_{x\to 0}\frac{\sin mx}{\sin nx}$ 

83. $\lim_{x\to \pi /2^{-}}\sec 7x\cos 3x$ 

84. $\lim_{x\to 0^{+}}\sqrt{x}\sec x$ 

85. $\lim_{x\to 0}(\csc x - \cot x)$ 

86. $\lim_{x\to0}\left(\frac{1}{x^{4}}-\frac{1}{x^{2}}\right)$ 

87. $\lim_{x\to \infty}\left(\sqrt{x^2 + x + 1} -\sqrt{x^2 - x}\right)$ 

88. $\lim_{x\to \infty}\left(\frac{x^3}{x^2 - 1} -\frac{x^3}{x^2 + 1}\right)$ 

Find the limits in Exercises 89–102. 

89. $\lim_{x\to 0}\frac{10^x - 1}{x}$ 

90. $\lim_{\theta \to 0}\frac{3^{\theta} - 1}{\theta}$ 

91. $\lim_{x\to0}\frac{2^{\sin x}-1}{e^{x}-1}$ 

92. $\lim_{x\to 0}\frac{2^{-\sin x} - 1}{e^x - 1}$ 

93. $\lim_{x\to0}\frac{5-5\cos x}{e^{x}-x-1}$ 

94. $\lim_{x\to 0}\frac{4 - 4e^x}{xe^x}$ 

95. $\lim_{t\to 0^{+}}\frac{t - \ln(1 + 2t)}{t^2}$ 

96. $\lim_{x\to 4}\frac{\sin^2(\pi x)}{e^{x - 4} + 3 - x}$ 

97. $\lim_{t\to 0^{+}}\left(\frac{e^t}{t} -\frac{1}{t}\right)$ 

98. $\lim_{y\to 0^{+}}e^{-1 / y}\ln y$ 

99. $\lim_{x\to\infty}\left(1+\frac{b}{x}\right)^{kx}$ 

100. $\lim_{x\to \infty}\left(1 + \frac{2}{x} +\frac{7}{x^2}\right)$ 

101. $\lim_{x\to0}\frac{\cos2x-1-\sqrt{1-\cos x}}{\sin^{2}x}$ 

102. $\lim_{x\to0}\frac{\sqrt{1+\tan x}-\sqrt{1+\sin x}}{x^{3}}$ 

Optimization 

103. The sum of two nonnegative numbers is 36. Find the numbers if a. the difference of their square roots is to be as large as possible. b. the sum of their square roots is to be as large as possible. 

104. The sum of two nonnegative numbers is 20. Find the numbers 

a. if the product of one number and the square root of the other is to be as large as possible. 

b. if one number plus the square root of the other is to be as large as possible. 

105. An isosceles triangle has its vertex at the origin and its base parallel to the $x$ -axis with the vertices above the axis on the curve $y = 27 - x^2$ . Find the largest area the triangle can have. 

106. A customer has asked you to design an open-top rectangular stainless steel vat. It is to have a square base and a volume of $1 \, m^{3}$ , to be welded from 6-mm-thick plate, and to weigh no more than necessary. What dimensions do you recommend? 

107. Find the height and radius of the largest right circular cylinder that can be put in a sphere of radius $\sqrt{3}$ . 

108. The figure here shows two right circular cones, one upside down inside the other. The two bases are parallel, and the vertex of the smaller cone lies at the center of the larger cone's base. What values of $r$ and $h$ will give the smaller cone the largest possible volume? 

![教材插图](/books/thomas-calculus/assets/700d2a60caf180e54b6cb6b372a3ffb6c6aa7e67ef84700f73ef5acc0337ca57.jpg)


109. Manufacturing tires Your company can manufacture x hundred grade A tires and y hundred grade B tires a day, where $0 \leq x \leq 4$ and 

$$
y = \frac {4 0 - 1 0 x}{5 - x}.
$$

Your profit on a grade A tire is twice your profit on a grade B tire. What is the most profitable number of each kind to make? 

110. Particle motion The positions of two particles on the $s$ -axis are $s_1 = \cos t$ and $s_2 = \cos (t + \pi /4)$ . 

a. What is the farthest apart the particles ever get? 

b. When do the particles collide? 

111. Open-top box An open-top rectangular box is constructed from a 25-cm-by-40-cm piece of cardboard by cutting squares of equal side length from the corners and folding up the sides. Find analytically the dimensions of the box of largest volume and the maximum volume. Support your answers graphically. 

112. The ladder problem What is the approximate length (in meters) of the longest ladder you can carry horizontally around the corner of the corridor shown here? Round your answer down to the nearest meter. 

![教材插图](/books/thomas-calculus/assets/0abfc48556d84b9f64935792f1a2e8b45c94e8fdaf46bd368023e0eeed393ced.jpg)


Newton's Method 

113. Let $f(x) = 3x - x^3$ . Show that the equation $f(x) = -4$ has a solution in the interval [2, 3] and use Newton's method to find it. 

114. Let $f(x) = x^4 - x^3$ . Show that the equation $f(x) = 75$ has a solution in the interval [3, 4] and use Newton's method to find it. 

### Finding Indefinite Integrals

Find the indefinite integrals (most general antiderivatives) in Exercises 115–138. You may need to try a solution and then adjust your guess. Check your answers by differentiation. 

115. $\int (x^3 + 5x - 7)dx$ 

116. $\int \left(8t^3 -\frac{t^2}{2} +t\right)dt$ 

117. $\int \left(3\sqrt{t} +\frac{4}{t^2}\right)dt$ 

118. $\int \left(\frac{1}{2\sqrt{t}} -\frac{3}{t^4}\right)dt$ 

119. $\int \frac{dr}{(r + 5)^2}$ 

120. $\int \frac{6dr}{(r - \sqrt{2})^3}$ 

121. $\int 3\theta \sqrt{\theta^2 + 1} d\theta$ 

122. $\int \frac{\theta}{\sqrt{7 + \theta^2}} d\theta$ 

123. $\int x^{3}(1 + x^{4})^{-1 / 4}dx$ 

124. $\int (2 - x)^{3 / 5}dx$ 

125. $\int \sec^2\frac{s}{10} ds$ 

126. $\int \csc^2\pi sds$ 

127. $\int \csc \sqrt{2}\theta \cot \sqrt{2}\theta d\theta$ 

128. $\int \sec \frac{\theta}{3} \tan \frac{\theta}{3} d\theta$ 

129. $\int \sin^2\frac{x}{4} dx\left(Hint:\sin^2\theta = \frac{1 - \cos 2\theta}{2}\right)$ 

130. $\int \cos^2\frac{x}{2} dx$ 

131. $\int \left(\frac{3}{x} - x\right) dx$ 

132. $\int \left(\frac{5}{x^2} +\frac{2}{x^2 + 1}\right)dx$ 

133. $\int \left(\frac{1}{2} e^t - e^{-t}\right)dt$ 

134. $\int (5^s + s^5) ds$ 

135. $\int \theta^{1 - \pi}d\theta$ 

136. $\int 2^{\pi +r}dr$ 

137. $\int \frac{3}{2x\sqrt{x^2 - 1}} dx$ 

138. $\int \frac{d\theta}{\sqrt{16 - \theta^2}}$ 

Initial Value Problems 

Solve the initial value problems in Exercises 139–142. 

139. $\frac{dy}{dx} = \frac{x^2 + 1}{x^2}, y(1) = -1$ 

140. $\frac{dy}{dx} = \left(x + \frac{1}{x}\right)^2, y(1) = 1$ 

141. $\frac{d^2r}{dt^2} = 15\sqrt{t} +\frac{3}{\sqrt{t}};\quad r'(1) = 8,\quad r(1) = 0$ 

142. $\frac{d^3r}{dt^3} = -\cos t; r''(0) = r'(0) = 0, r(0) = -1$ 

Applications and Examples 

143. Can the integrations in (a) and (b) both be correct? Explain. 

$$
\int \frac {d x}{\sqrt {1 - x ^ {2}}} = \arcsin x + C
$$

$$
\mathbf {b}. \int \frac {d x}{\sqrt {1 - x ^ {2}}} = - \int - \frac {d x}{\sqrt {1 - x ^ {2}}} = - \arccos x + C
$$

144. Can the integrations in (a) and (b) both be correct? Explain. 

$$
\mathbf {a}. \int \frac {d x}{\sqrt {1 - x ^ {2}}} = - \int - \frac {d x}{\sqrt {1 - x ^ {2}}} = - \arccos x + C
$$

$$
\begin{array}{l l} \int \frac {d x}{\sqrt {1 - x ^ {2}}} = \int \frac {- d u}{\sqrt {1 - (- u) ^ {2}}} & \quad x = - u \\ = \int \frac {- d u}{\sqrt {1 - u ^ {2}}} \\ = \arccos u + C \\ = \arccos (- x) + C & \quad u = - x \end{array}
$$

145. The rectangle shown here has one side on the positive y-axis, one side on the positive x-axis, and its upper right-hand vertex on the curve $y = e^{-x^{2}}$ . What dimensions give the rectangle its largest area, and what is that area? 

![教材插图](/books/thomas-calculus/assets/766fc13baf2fe8005b8290fe056c2436f733546945a588447ccd90a43f65c237.jpg)


146. The rectangle shown here has one side on the positive y-axis, one side on the positive x-axis, and its upper right-hand vertex on the curve $y = (\ln x)/x^{2}$ . What dimensions give the rectangle its largest area, and what is that area? 

![教材插图](/books/thomas-calculus/assets/ce95e0f4cd23ebe1c34d8aca948d250c47517c4e58bf1e6d8d93b7840d93f391.jpg)


In Exercises 147 and 148, find the absolute maximum and minimum values of each function on the given interval. 

147. $y = x \ln 2 x - x, \left[ \frac {1}{2 e}, \frac {e}{2} \right]$

148. $y = 10x(2 - \ln x)$ , $(0, e^{2}]$ 

In Exercises 149 and 150, find the absolute maxima and minima of the functions and give the x-coordinates where they occur. 

149. $f(x) = e^{x / \sqrt{x^4 + 1}}$ 

150. $g(x) = e^{\sqrt{3 - 2x - x^2}}$ 

T 151. Graph the following functions and use what you see to locate and estimate the extreme values, identify the coordinates of the inflection points, and identify the intervals on which the graphs are concave up and concave down. Then confirm your estimates by working with the functions' derivatives. 

$$
y = (\ln x) / \sqrt {x}
$$

$$
y = e ^ {- x ^ {2}}
$$

c. $y = (1 + x)e^{-x}$ 

T 152. Graph $f(x) = x \ln x$ . Does the function appear to have an absolute minimum value? Confirm your answer with calculus. 

T 153. Graph $f(x) = (\sin x)^{\sin x}$ over $[0, 3\pi]$ . Explain what you see. 

154. A round underwater transmission cable consists of a core of copper wires surrounded by nonconducting insulation. If x denotes the ratio of the radius of the core to the thickness of the insulation, it is known that the speed of the transmission signal is given by the equation $v = x^{2} \ln(1/x)$ . If the radius of the core is 1 cm, what insulation thickness h will allow the greatest transmission speed? 

![教材插图](/books/thomas-calculus/assets/743348f274ba4e806722fc2346760eef3432383337dd732aa79483fd73efbe6f.jpg)


## CHAPTER 4 Additional and Advanced Exercises

### Functions and Derivatives

1. What can you say about a function whose maximum and minimum values on an interval are equal? Give reasons for your answer. 

2. Is it true that a discontinuous function cannot have both an absolute maximum value and an absolute minimum value on a closed interval? Give reasons for your answer. 

3. Can you conclude anything about the extreme values of a continuous function on an open interval? On a half-open interval? Give reasons for your answer. 

4. Local extrema Use the sign pattern for the derivative 

$$
\frac {d f}{d x} = 6 (x - 1) (x - 2) ^ {2} (x - 3) ^ {3} (x - 3) ^ {4}
$$

to identify the points where f has local maximum and minimum values. 

### 5. Local extrema

a. Suppose that the first derivative of $y = f(x)$ is 

$$
y ^ {\prime} = 6 (x + 1) (x - 2) ^ {2}.
$$

At what points, if any, does the graph of f have a local maximum, local minimum, or point of inflection? 

b. Suppose that the first derivative of $y = f(x)$ is 

$$
y ^ {\prime} = 6 (x + 1) (x - 2).
$$

At what points, if any, does the graph of f have a local maximum, local minimum, or point of inflection? 

6. If $f'(x) \leq 2$ for all x, what is the most the values of f can increase on [0, 6]? Give reasons for your answer. 

7. Bounding a function Suppose that $f$ is continuous on $[a, b]$ and that $c$ is an interior point of the interval. Show that if $f'(x) \leq 0$ on $[a, c)$ and $f'(x) \geq 0$ on $(c, b]$ , then $f(x)$ is never less than $f(c)$ on $[a, b]$ . 

### 8. An inequality

a. Show that $-1/2 \leq x/(1 + x^2) \leq 1/2$ for every value of $x$ . 

b. Suppose that $f$ is a function whose derivative is 

$f'(x) = x/(1 + x^{2})$ . Use the result in part (a) to show that 

$$
| f (b) - f (a) | \leq \frac {1}{2} | b - a |
$$

for any $a$ and $b$ . 

9. The derivative of $f(x) = x^2$ is zero at $x = 0$ , but $f$ is not a constant function. Doesn't this contradict the corollary of the Mean Value Theorem that says that functions with zero derivatives are constant? Give reasons for your answer. 

10. Extrema and inflection points Let h = fg be the product of two differentiable functions of x. 

a. If $f$ and $g$ are positive, with local maxima at $x = a$ , and if $f'$ and $g'$ change sign at $a$ , does $h$ have a local maximum at $a$ ? 

b. If the graphs of $f$ and $g$ have inflection points at $x = a$ , does the graph of $h$ have an inflection point at $a$ ? 

In either case, if the answer is yes, give a proof. If the answer is no, give a counterexample. 

11. Finding a function Use the following information to find the values of $a, b$ , and $c$ in the formula $f(x) = (x + a)/(bx^2 + cx + 2)$ . a. The values of $a, b$ , and $c$ are either 0 or 1. 

b. The graph of $f$ passes through the point $(-1,0)$ . 

c. The line $y = 1$ is an asymptote of the graph of $f$ . 

12. Horizontal tangent For what value or values of the constant k will the curve $y = x^{3} + kx^{2} + 3x - 4$ have exactly one horizontal tangent? 

### Optimization

13. Largest inscribed triangle Points A and B lie at the ends of a diameter of a unit circle and point C lies on the circumference. Is it true that the area of triangle ABC is largest when the triangle is isosceles? How do you know? 

14. Proving the second derivative test The Second Derivative Test for Local Maxima and Minima (Section 4.4) says: 

a. $f$ has a local maximum value at $x = c$ if $f'(c) = 0$ and $f''(c) < 0$ ; 

b. $f$ has a local minimum value at $x = c$ if $f'(c) = 0$ and $f''(c) > 0$ . 

To prove statement (a), let $\varepsilon = (1/2)|f''(c)|$ . Then use the fact that 

$$
f ^ {\prime \prime} (c) = \lim _ {h \rightarrow 0} \frac {f ^ {\prime} (c + h) - f ^ {\prime} (c)}{h} = \lim _ {h \rightarrow 0} \frac {f ^ {\prime} (c + h)}{h}
$$

to conclude that for some $\delta > 0$ , 

$$
0 <   | h | <   \delta \quad \Rightarrow \quad \frac {f ^ {\prime} (c + h)}{h} <   f ^ {\prime \prime} (c) + \varepsilon <   0.
$$

Thus, $f'(c + h)$ is positive for $-\delta < h < 0$ and negative for $0 < h < \delta$ . Prove statement (b) in a similar way. 

15. Hole in a water tank You want to bore a hole in the side of the tank shown here at a height that will make the stream of water coming out hit the ground as far from the tank as possible. If you drill the hole near the top, where the pressure is low, the water will exit slowly but spend a relatively long time in the air. If you drill the hole near the bottom, the water will exit at a higher velocity but have only a short time to fall. Where is the best place, if any, for the hole? (Hint: How long will it take an exiting droplet of water to fall from height y to the ground?) 

![教材插图](/books/thomas-calculus/assets/9f6d149006a3f3f7e3c8d86abc33e9afa285f81bc3cae5154407cd59c1639c64.jpg)


16. Kicking a field goal An American football player wants to kick a field goal with the ball being on a right hash mark. Assume that the goal posts are b meters apart and that the hash mark line is a distance a > 0 meters from the right goal post. (See the accompanying figure.) Find the distance h from the goal post line that gives the kicker his largest angle $\beta$ . Assume that the football field is flat. 

![教材插图](/books/thomas-calculus/assets/33e3eb4c0a9af0b390ba0ddf426a2b38d26c36ab01f8e02a8a284dc697602428.jpg)


17. A max-min problem with a variable answer Sometimes the solution of a max-min problem depends on the proportions of the shapes involved. As a case in point, suppose that a right circular cylinder of radius $r$ and height $h$ is inscribed in a right circular cone of radius $R$ and height $H$ , as shown here. Find the value of $r$ (in terms of $R$ and $H$ ) that maximizes the total surface area of the cylinder (including top and bottom). As you will see, the solution depends on whether $H \leq 2R$ or $H > 2R$ . 

![教材插图](/books/thomas-calculus/assets/79f67e6d6d2ff7e545b8d63ff37cfa5fd075a7434d674c684a19b501974bd679.jpg)


18. Minimizing a parameter Find the smallest value of the positive constant m that will make $mx - 1 + (1/x)$ greater than or equal to zero for all positive values of x. 

19. Determine the dimensions of the rectangle of largest area that can be inscribed in the right triangle in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/16ae9b4a3e9dd3a1ef513ace81fc486c7fad95ea20129f0f44481a079aee78dd.jpg)


20. A rectangular box with a square base is inscribed in a right circular cone of height 4 and base radius 3. If the base of the box sits on the base of the cone, what is the largest possible volume of the box? 

### Limits

21. Evaluate the following limits.
a. $\lim_{x\to0}\frac{2\sin5x}{3x}$ b. $\lim_{x\to0}\sin5x\cot3x$ c. $\lim_{x\to0}x\csc^{2}\sqrt{2x}$ d. $\lim_{x\to\pi/2}(\sec x-\tan x)$ e. $\lim_{x\to0}\frac{x-\sin x}{x-\tan x}$ f. $\lim_{x\to0}\frac{\sin x^{2}}{x\sin x}$ g. $\lim_{x\to0}\frac{\sec x-1}{x^{2}}$ h. $\lim_{x\to2}\frac{x^{3}-8}{x^{2}-4}$ 

22. L'Hôpital's Rule does not help with the following limits. Find them some other way.
a. $\lim_{x\to\infty}\frac{\sqrt{x+5}}{\sqrt{x}+5}$ b. $\lim_{x\to\infty}\frac{2x}{x+7\sqrt{x}}$ 

### Theory and Examples

23. Suppose that it costs a company $y = a + bx$ dollars to produce x units per week. It can sell x units per week at a price of P = c - ex dollars per unit. Each of a, b, c, and e represents a positive constant. (a) What production level maximizes the profit? (b) What is the corresponding price? (c) What is the weekly profit at this level of production? (d) At what price should each item be sold to maximize profits if the government imposes a tax of t dollars per item sold? Comment on the difference between this price and the price before the tax. 

24. Estimating reciprocals without division You can estimate the value of the reciprocal of a number $a$ without ever dividing by $a$ if you apply Newton's method to the function $f(x) = (1/x) - a$ . For example, if $a = 3$ , the function involved is $f(x) = (1/x) - 3$ . a. Graph $y = (1/x) - 3$ . Where does the graph cross the $x$ -axis? 

b. Show that the recursion formula in this case is 

$$
x _ {n + 1} = x _ {n} (2 - 3 x _ {n}),
$$

so there is no need for division. 

25. To find $x = \sqrt[q]{a}$ , we apply Newton's method to $f(x) = x^q - a$ . Here we assume that $a$ is a positive real number and $q$ is a positive integer. Show that $x_1$ is a "weighted average" of $x_0$ and $a / x_0^{q-1}$ , and find the coefficients $m_0, m_1$ such that 

$$
x _ {1} = m _ {0} x _ {0} + m _ {1} \left(\frac {a}{x _ {0} ^ {q - 1}}\right), m _ {0} > 0, m _ {1} > 0, m _ {0} + m _ {1} = 1.
$$

What conclusion would you reach if $x_0$ and $a / x_0^{q-1}$ were equal? What would be the value of $x_1$ in that case? 

26. The family of straight lines $y = ax + b$ (a, b arbitrary constants) can be characterized by the relation $y'' = 0$ . Find a similar relation satisfied by the family of all circles 

$$
(x - h) ^ {2} + (y - h) ^ {2} = r ^ {2},
$$

where h and r are arbitrary constants. (Hint: Eliminate h and r from the set of three equations including the given one and two obtained by successive differentiation.) 

27. Free fall in the fourteenth century In the middle of the fourteenth century, Albert of Saxony (1316–1390) proposed a model of free fall, which assumed that the velocity of a falling body was proportional to the distance fallen. It seemed reasonable to think that a body that had fallen 6 m might be moving twice as fast as a body that had fallen 3 m. And besides, none of the instruments in use at the time were accurate enough to prove otherwise. Today we can see just how far off Albert of Saxony's model was by solving the initial value problem implicit in his model. Solve the problem and compare your solution graphically with the equation $s = 4.9t^{2}$ . You will see that it describes a motion that starts too slowly and then becomes too fast to be realistic. 

28. Group testing During World War II it was necessary to administer blood tests to large numbers of recruits. There are two standard ways to administer a blood test to N people. In method 1, each person is tested separately. In method 2, the blood samples of x people are pooled and tested as one large sample. If the test is negative, this one test is enough for all x people. If the test is positive, then each of the x people is tested separately, requiring a total of $x + 1$ tests. Using the second method and some probability theory it can be shown that, on the average, the total number of tests y will be 

$$
y = N \left(1 - q ^ {x} + \frac {1}{x}\right).
$$

With q = 0.99 and N = 1000, find the integer value of x that minimizes y. Also find the integer value of x that maximizes y. (This second result is not important to the real-life situation.) The group testing method was used in World War II with a savings of 80% over the individual testing method, but not with the given value of q. Group testing has been implemented in diagnosing various diseases, including COVID-19. 

29. Assume that the brakes of an automobile produce a constant deceleration of $k \, m/s^{2}$ . (a) Determine what k must be to bring an automobile traveling 108 km/h (30 m/s) to rest in a distance of 30 m from the point where the brakes are applied. (b) With the same k, how far would a car traveling 54 km/hr go before being brought to a stop? 

30. Let $f(x)$ and $g(x)$ be two continuously differentiable functions satisfying the relationships $f'(x) = g(x)$ and $f''(x) = -f(x)$ . Let $h(x) = f^2(x) + g^2(x)$ . If $h(0) = 5$ , find $h(10)$ . 

31. Can there be a curve satisfying the following conditions? $d^2 y / dx^2$ is everywhere equal to zero and, when $x = 0, y = 0$ and $dy / dx = 1$ . Give a reason for your answer. 

32. Find the equation for the curve in the $xy$ -plane that passes through the point $(1, -1)$ if its slope at $x$ is always $3x^{2} + 2$ . 

33. A particle moves along the x-axis. Its acceleration is $a = -t^{2}$ . At t = 0, the particle is at the origin. In the course of its motion, it reaches the point x = b, where b > 0, but no point beyond b. Determine its velocity at t = 0. 

34. A particle moves with acceleration $a = \sqrt{t} - (1/\sqrt{t})$ . Assuming that the velocity v = 4/3 and the position s = -4/15 when t = 0, find 

a. the velocity v in terms of t. 

b. the position s in terms of t. 

35. Given $f(x) = ax^2 + 2bx + c$ with $a > 0$ . By considering the minimum, prove that $f(x) \geq 0$ for all real $x$ if and only if $b^2 - ac \leq 0$ . 

36. The Cauchy–Schwarz inequality 

a. In Exercise 35, let 

$$
f (x) = \left(a _ {1} x + b _ {1}\right) ^ {2} + \left(a _ {2} x + b _ {2}\right) ^ {2} + \dots + \left(a _ {n} x + b _ {n}\right) ^ {2},
$$

and deduce The Cauchy–Schwarz inequality: 

$$
\begin{array}{l} (a _ {1} b _ {1} + a _ {2} b _ {2} + \dots + a _ {n} b _ {n}) ^ {2} \\ \leq (a _ {1} ^ {2} + a _ {2} ^ {2} + \dots + a _ {n} ^ {2}) (b _ {1} ^ {2} + b _ {2} ^ {2} + \dots + b _ {n} ^ {2}). \end{array}
$$

b. Show that equality holds in The Cauchy–Schwarz inequality only if there exists a real number x that makes $a_{i}x$ equal $-b_{i}$ for every value of i from 1 to n. 

37. The best branching angles for blood vessels and pipes When a smaller pipe branches off from a larger one in a flow system, we may want it to run off at an angle that is best from some energy-saving point of view. We might require, for instance, that energy loss due to friction be minimized along the section AOB shown in the accompanying figure. In this diagram, B is a given point to be reached by the smaller pipe, A is a point in the larger pipe upstream from B, and O is the point where the branching occurs. A law formulated by Poiseuille states that the loss of energy due to friction in nonturbulent flow is proportional to the length of the path and inversely proportional to the fourth power of the radius. Thus, the loss along AO is $(kd_{1})/R^{4}$ and along OB is $(kd_{2})/r^{4}$ , where k is a constant, $d_{1}$ is the length of AO, $d_{2}$ is the length of OB, R is the radius of the larger pipe, and r is the radius of the smaller pipe. The angle $\theta$ is to be chosen to minimize the sum of these two losses: 

$$
L = k \frac {d _ {1}}{R ^ {4}} + k \frac {d _ {2}}{r ^ {4}}.
$$

![教材插图](/books/thomas-calculus/assets/07a4d8c37be087982f9aa6f5b453c8e0d18eea461aec882ad6def38b03146173.jpg)


In our model, we assume that $AC = a$ and $BC = b$ are fixed. Thus we have the relations 

$$
\begin{array}{c} d _ {2} = b \csc \theta , \\ d _ {1} = a - d _ {2} \cos \theta = a - b \cot \theta . \end{array}
$$

$$
d _ {1} + d _ {2} \cos \theta = a \quad d _ {2} \sin \theta = b,
$$

We can express the total loss L as a function of $\theta$ : 

so that 

$$
L = k \left(\frac {a - b \cot \theta}{R ^ {4}} + \frac {b \csc \theta}{r ^ {4}}\right).
$$

a. Show that the critical value of $\theta$ for which $dL/d\theta$ equals zero is 

$$
\theta_ {c} = \cos^ {- 1} \frac {r ^ {4}}{R ^ {4}}.
$$

b. If the ratio of the pipe radii is r/R = 5/6 estimate to the nearest degree the optimal branching angle given in part (a). 

38. Consider point $(a, b)$ on the graph of $y = \ln x$ and triangle ABC formed by the tangent line at $(a, b)$ , the y-axis, and the line y = b. Show that 

Mathematica/Maple Projects 

![教材插图](/books/thomas-calculus/assets/7f222ad5e0f89ae18fe30b595cf1dd858fd3552eb719b2f7e8eabca0a143176b.jpg)


39. Consider the unit circle centered at the origin and with a vertical tangent line passing through point $A$ in the accompanying figure. Assume that the lengths of segments $AB$ and $AC$ are equal, and let point $D$ be the intersection of the $x$ -axis with the line passing through points $B$ and $C$ . Find the limit of $t$ as $B$ approaches $A$ . 

Projects can be found within MyLab Math. 

![教材插图](/books/thomas-calculus/assets/415dda6224b4270b60b0dbc100410673e2ae1538e6b6f846e35a2e4ce36a09ab.jpg)


## CHAPTER 4 Technology Application Projects

- Motion Along a Straight Line: Position → Velocity → Acceleration 

You will observe the shape of a graph through dramatic animated visualizations of the derivative relations among the position, velocity, and acceleration. Figures in the text can be animated. 

- Newton's Method: Estimate $\pi$ to How Many Places? 

Plot a function, observe a root, pick a starting point near the root, and use Newton's Iteration Procedure to approximate the root to a desired accuracy. The numbers $\pi, e$ , and $\sqrt{2}$ are approximated. 
