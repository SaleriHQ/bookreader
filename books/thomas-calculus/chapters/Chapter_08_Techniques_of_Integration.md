---
title: "Chapter 8: Techniques of Integration"
order: 8
---

# Chapter 8: Techniques of Integration

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

![教材插图](/books/thomas-calculus/assets/02be1889efb30b5f0a264cb318e01a7a1357a92283a7b8f890766a2c30bc8a4d.jpg)


OVERVIEW The Fundamental Theorem tells us how to evaluate a definite integral once we have an antiderivative for the integrand function. However, finding antiderivatives (or indefinite integrals) is not as straightforward as finding derivatives. In this chapter we study a number of important techniques that apply to finding integrals for specialized classes of functions such as trigonometric functions, products of certain functions, and rational functions. Since we cannot always find an antiderivative, we develop numerical methods for calculating definite integrals. We also study integrals for which the domain or range is infinite, called improper integrals.



## 8.1 Using Basic Integration Formulas

Table 8.1 summarizes the indefinite integrals of many of the functions we have studied so far, and the substitution method helps us use the table to evaluate more complicated functions involving these basic ones. In this section we combine the Substitution Rules (studied in Chapter 5) with algebraic methods and trigonometric identities to help us use Table 8.1. A more extensive Table of Integrals is given at the back of the chapter, and we discuss its use in Section 8.6. 

Sometimes we have to rewrite an integral to match it to a standard form of the type displayed in Table 8.1. We start with an example of this procedure. 

**EXAMPLE 1** Evaluate the integral 

$$
\int_ {3} ^ {5} \frac {2 x - 3}{\sqrt {x ^ {2} - 3 x + 1}} d x.
$$

**Solution** We rewrite the integral and apply the Substitution Rule for Definite Integrals presented in Section 5.6, to find 

$$
\begin{array}{r l} \int_ {3} ^ {5} \frac {2 x - 3}{\sqrt {x ^ {2} - 3 x + 1}} d x & = \int_ {1} ^ {1 1} \frac {d u}{\sqrt {u}} \quad u = x ^ {2} - 3 x + 1, d u = (2 x - 3) d x; \\ & = \int_ {1} ^ {1 1} u ^ {- 1 / 2} d u \\ & = 2 \sqrt {u} \Bigg ] _ {1} ^ {1 1} = 2 (\sqrt {1 1} - 1) \approx 4. 6 3. \end{array} \tag {Table8.1,Formula2}
$$

**TABLE 8.1 Basic integration formulas**

1. $\int k dx = kx + C$ (any number $k$ ) 

2. $\int x^n dx = \frac{x^{n + 1}}{n + 1} + C (n \neq -1)$ 

3. $\int \frac{dx}{x} = \ln |x| + C$ 

4. $\int e^{x}dx = e^{x} + C$ 

5. $\int a^{x}dx = \frac{a^{x}}{\ln a} +C (a > 0,a\neq 1)$ 

6. $\int \sin x dx = -\cos x + C$ 

7. $\int \cos x dx = \sin x + C$ 

8. $\int \sec^2 x dx = \tan x + C$ 

9. $\int \csc^2 x dx = -\cot x + C$ 

10. $\int \sec x\tan x dx = \sec x + C$ 

11. $\int \csc x\cot x dx = -\csc x + C$ 

12. $\int \tan x dx = \ln |\sec x| + C$ 

13. $\int \cot x dx = \ln |\sin x| + C$ 

14. $\int \sec x dx = \ln |\sec x + \tan x| + C$ 

15. $\int \csc x dx = -\ln |\csc x + \cot x| + C$ 

16. $\int \sinh x dx = \cosh x + C$ 

17. $\int \cosh x dx = \sinh x + C$ 

18. $\int \frac{dx}{\sqrt{a^2 - x^2}} = \arcsin \left(\frac{x}{a}\right) + C$ 

19. $\int \frac{dx}{a^2 + x^2} = \frac{1}{a}\arctan \left(\frac{x}{a}\right) + C$ 

20. $\int \frac{dx}{x\sqrt{x^2 - a^2}} = \frac{1}{a}\mathrm{arcsec}\left|\frac{x}{a}\right| + C$ 

21. $\int \frac{dx}{\sqrt{a^2 + x^2}} = \sinh^{-1}\left(\frac{x}{a}\right) + C (a > 0)$ 

22. $\int \frac{dx}{\sqrt{x^2 - a^2}} = \cosh^{-1}\left(\frac{x}{a}\right) + C (x > a > 0)$ 

**EXAMPLE 2** Complete the square to evaluate 

$$
\int \frac {d x}{\sqrt {8 x - x ^ {2}}}.
$$

**Solution** We complete the square to simplify the denominator: 

$$
\begin{array}{r l} 8 x - x ^ {2} & = - (x ^ {2} - 8 x) = - (x ^ {2} - 8 x + 1 6 - 1 6) \\ & = - (x ^ {2} - 8 x + 1 6) + 1 6 = 1 6 - (x - 4) ^ {2}. \end{array}
$$

Then 

$$
\begin{array}{l l} \int \frac {d x}{\sqrt {8 x - x ^ {2}}} = \int \frac {d x}{\sqrt {1 6 - (x - 4) ^ {2}}} \\ = \int \frac {d u}{\sqrt {a ^ {2} - u ^ {2}}} & a = 4, u = (x - 4), \\ = \arcsin \left(\frac {u}{a}\right) + C & d u = d x \\ = \arcsin \left(\frac {x - 4}{4}\right) + C. \end{array} \tag {Table8.1,Formula18}
$$

**EXAMPLE 3** Evaluate the integral 

$$
\int (\cos x \sin 2 x + \sin x \cos 2 x) d x.
$$

**Solution** We can replace the integrand with an equivalent trigonometric expression using the Sine Addition Formula to obtain a simple substitution: 

$$
\begin{array}{r l} \int (\cos x \sin 2 x + \sin x \cos 2 x) d x & = \int \sin (x + 2 x) d x \\ & = \int \sin 3 x d x \\ & = \int \frac {1}{3} \sin u d u \quad u = 3 x, d u = 3 d x \\ & = - \frac {1}{3} \cos 3 x + C. \quad \text { Table   8.1,   Formula   6 } \end{array}
$$

In Section 5.5 we found the indefinite integral of the secant function by multiplying it by a fractional form equal to one, and then integrating the equivalent result. We can use that same procedure in other instances as well, as we illustrate next. 

**EXAMPLE 4** Find $\int_{0}^{\pi/4}\frac{dx}{1-\sin x}.$ 

**Solution** We multiply the numerator and denominator of the integrand by $1 + \sin x$ . This procedure transforms the integral into one we can evaluate: 

$$
\begin{array}{l l} \int_ {0} ^ {\pi / 4} \frac {d x}{1 - \sin x} = \int_ {0} ^ {\pi / 4} \frac {1}{1 - \sin x} \cdot \frac {1 + \sin x}{1 + \sin x} d x & \text { Multiply   and   divide   by } \\ & \text { conjugate. } \\ = \int_ {0} ^ {\pi / 4} \frac {1 + \sin x}{1 - \sin^ {2} x} d x & \text { Simplify. } \\ = \int_ {0} ^ {\pi / 4} \frac {1 + \sin x}{\cos^ {2} x} d x & 1 - \sin^ {2} x = \cos^ {2} x \\ = \int_ {0} ^ {\pi / 4} (\sec^ {2} x + \sec x \tan x) d x & \text { Use   Table   8.1, } \\ & \text { Formulas   8   and   10 } \\ = \left[ \tan x + \sec x \right] _ {0} ^ {\pi / 4} = (1 + \sqrt {2} - (0 + 1)) = \sqrt {2}. \end{array}
$$

**EXAMPLE 5** Evaluate 

$$
\int \frac {3 x ^ {2} - 7 x}{3 x + 2} d x.
$$

$$
\begin{array}{c} x - 3 \\ 3 x + 2 \overline {{) 3 x ^ {2} - 7 x}} \\ \frac {3 x ^ {2} + 2 x}{- 9 x} \\ \frac {- 9 x - 6}{+ 6} \end{array}
$$

**Solution** The integrand is an improper fraction since the degree of the numerator is greater than the degree of the denominator. To integrate it, we perform long division to obtain a quotient plus a remainder that is a proper fraction: 

$$
\frac {3 x ^ {2} - 7 x}{3 x + 2} = x - 3 + \frac {6}{3 x + 2}.
$$

Therefore, 

$$
\int \frac {3 x ^ {2} - 7 x}{3 x + 2} d x = \int \left(x - 3 + \frac {6}{3 x + 2}\right) d x = \frac {x ^ {2}}{2} - 3 x + 2 \ln | 3 x + 2 | + C.
$$

Reducing an improper fraction by long division (Example 5) does not always lead to an expression we can integrate directly. We see what to do about that in Section 8.5. 

**EXAMPLE 6** Evaluate 

$$
\int \frac {3 x + 2}{\sqrt {1 - x ^ {2}}} d x.
$$

**Solution** We first separate the integrand to get 

$$
\int \frac {3 x + 2}{\sqrt {1 - x ^ {2}}} d x = 3 \int \frac {x d x}{\sqrt {1 - x ^ {2}}} + 2 \int \frac {d x}{\sqrt {1 - x ^ {2}}}.
$$

In the first of these new integrals, we substitute 

$$
u = 1 - x ^ {2}, \quad d u = - 2 x d x, \quad \text { so } \quad x d x = - \frac {1}{2} d u.
$$

Then we obtain 

$$
\begin{array}{r l} 3 \int \frac {x d x}{\sqrt {1 - x ^ {2}}} & = 3 \int \frac {(- 1 / 2) d u}{\sqrt {u}} = - \frac {3}{2} \int u ^ {- 1 / 2} d u \\ & = - \frac {3}{2} \cdot \frac {u ^ {1 / 2}}{1 / 2} + C _ {1} = - 3 \sqrt {1 - x ^ {2}} + C _ {1}. \end{array}
$$

The second of the new integrals is a standard form, 

$$
2 \int \frac {d x}{\sqrt {1 - x ^ {2}}} = 2 \arcsin x + C _ {2}. \quad \text { Table   8.1,   Formula   18 }
$$

Combining these results and renaming $C_{1} + C_{2}$ as C gives 

$$
\int \frac {3 x + 2}{\sqrt {1 - x ^ {2}}} d x = - 3 \sqrt {1 - x ^ {2}} + 2 \arcsin x + C.
$$

The question of what to substitute for in an integrand is not always quite so clear. Sometimes we simply proceed by trial-and-error, and if nothing works out, we then try another method altogether. The next several sections of the text present some of these new methods, but substitution works in the following example. 

**EXAMPLE 7** Evaluate 

$$
\int \frac {d x}{(1 + \sqrt {x}) ^ {3}}.
$$

**Solution** We might try substituting for the term $\sqrt{x}$ , but the derivative factor $1/\sqrt{x}$ is missing from the integrand, so this substitution will not help. The other possibility is to substitute for $(1 + \sqrt{x})$ , and it turns out this works: 

$$
\begin{array}{l l} \int \frac {d x}{(1 + \sqrt {x}) ^ {3}} = \int \frac {2 (u - 1) d u}{u ^ {3}} & u = 1 + \sqrt {x}, d u = \frac {1}{2 \sqrt {x}} d x; \\ & d x = 2 \sqrt {x} d u = 2 (u - 1) d u \\ = \int \left(\frac {2}{u ^ {2}} - \frac {2}{u ^ {3}}\right) d u \end{array}
$$

$$
= - \frac {2}{u} + \frac {1}{u ^ {2}} + C
$$

$$
= \frac {1 - 2 u}{u ^ {2}} + C
$$

$$
= \frac {1 - 2 (1 + \sqrt {x})}{(1 + \sqrt {x}) ^ {2}} + C
$$

$$
= C - \frac {1 + 2 \sqrt {x}}{\left(1 + \sqrt {x}\right) ^ {2}}.
$$

When evaluating definite integrals, a property of the integrand may help us in calculating the result. 

**EXAMPLE 8** Evaluate 

$$
\int_ {- \pi / 2} ^ {\pi / 2} x ^ {3} \cos x d x.
$$

**Solution** No substitution or algebraic manipulation is clearly helpful here. But we observe that the interval of integration is the symmetric interval $[-\pi/2, \pi/2]$ . Moreover, the factor $x^{3}$ is an odd function, and $\cos x$ is an even function, so their product is odd. Therefore, 

$\int_{-\pi /2}^{\pi /2}x^3\cos x dx = 0.$ Theorem 8, Section 5.6 

### EXERCISES 8.1

#### Assorted Integrations

The integrals in Exercises 1–44 are in no particular order. Evaluate each integral using any algebraic method, trigonometric identity, or substitution you think is appropriate. 

1. $\int_0^1\frac{16x}{8x^2 + 2} dx$ 

2. $\int \frac{x^2}{x^2 + 1} dx$ 

3. $\int (\sec x - \tan x)^2 dx$ 

4. $\int_{\pi /4}^{\pi /3}\frac{dx}{\cos^2x\tan x}$ 

5. $\int \frac{1 - x}{\sqrt{1 - x^2}} dx$ 

6. $\int \frac{dx}{x - \sqrt{x}}$ 

7. $\int \frac{e^{-\cot z}}{\sin^2z} dz$ 

8. $\int \frac{2^{\ln z^3}}{16z} dz$ 

9. $\int \frac{dz}{e^z + e^{-z}}$ 

10. $\int_{1}^{2}\frac{8dx}{x^{2} - 2x + 2}$ 

11. $\int_{-1}^{0}\frac{4dx}{1 + (2x + 1)^2}$ 

12. $\int_{-1}^{3}\frac{4x^2 - 7}{2x + 3} dx$ 

13. $\int \frac{dt}{1 - \sec t}$ 

14. $\int \csc t\sin 3tdt$ 

15. $\int_0^{\pi /4}\frac{1 + \sin\theta}{\cos^2\theta} d\theta$ 

16. $\int \frac{d\theta}{\sqrt{2\theta - \theta^2}}$ 

17. $\int \frac{\ln y}{y + 4y\ln^2y} dy$ 

18. $\int \frac{2^{\sqrt{y}}dy}{2\sqrt{y}}$ 

19. $\int \frac{d\theta}{\sec\theta + \tan\theta}$ 

20. $\int \frac{dt}{t\sqrt{3 + t^2}}$ 

21. $\int \frac{4t^3 - t^2 + 16t}{t^2 + 4} dt$ 

22. $\int \frac{x + 2\sqrt{x - 1}}{2x\sqrt{x - 1}} dx$ 

23. $\int_0^{\pi /2}\sqrt{1 - \cos\theta} d\theta$ 

24. $\int (\sec t + \cot t)^2 dt$ 

25. $\int \frac{dy}{\sqrt{e^{2y} - 1}}$ 

26. $\int \frac{6dy}{\sqrt{y} (1 + y)}$ 

27. $\int \frac{2dx}{x\sqrt{1 - 4\ln^2x}}$ 

28. $\int \frac{dx}{(x - 2)\sqrt{x^2 - 4x + 3}}$ 

29. $\int (\csc x - \sec x)(\sin x + \cos x)dx$ 

30. $\int 3\sinh \left(\frac{x}{2} +\ln 5\right)dx$ 

31. $\int_{\sqrt{2}}^{3}\frac{2x^3}{x^2 - 1} dx$

32. $\int_{-1}^{1}\sqrt{1 + x^2}\sin x dx$

33. $\int_{-1}^{0}\sqrt{\frac{1 + y}{1 - y}} dy$

34. $\int e^{z + e^z}dz$

35. $\int \frac{7dx}{(x - 1)\sqrt{x^2 - 2x - 48}}$ 

36. $\int \frac{dx}{(2x + 1)\sqrt{4x + 4x^2}}$ 

37. $\int \frac{2\theta^3 - 7\theta^2 + 7\theta}{2\theta - 5} d\theta$ 

38. $\int \frac{d\theta}{\cos\theta - 1}$ 

39. $\int \frac{dx}{1 + e^x}$ 

40. $\int \frac{\sqrt{x}}{1 + x^3} dx$ 

Hint: Use long division. 

$$
\text { Hint:   Let } u = x ^ {3 / 2}.
$$

41. $\int \frac{e^{3x}}{e^x + 1} dx$ 

42. $\int \frac{2^x - 1}{3^x} dx$ 

43. $\int \frac{1}{\sqrt{x} (1 + x)} dx$ 

44. $\int \frac{\tan\theta + 3}{\sin\theta} d\theta$ 

Theory and Examples 

45. Area Find the area of the region bounded above by $y = 2 \cos x$ and below by $y = \sec x, -\pi/4 \leq x \leq \pi/4$ . 

46. Volume Find the volume of the solid generated by revolving the region in Exercise 45 about the x-axis. 

47. Arc length Find the length of the curve $y = \ln (\cos x)$ , $0 \leq x \leq \pi / 3$ . 

48. Arc length Find the length of the curve $y = \ln (\sec x)$ , $0 \leq x \leq \pi / 4$ . 

49. Centroid Find the centroid of the region bounded by the $x$ -axis, the curve $y = \sec x$ , and the lines $x = -\pi / 4$ , $x = \pi / 4$ . 

50. Centroid Find the centroid of the region bounded by the $x$ -axis, the curve $y = \csc x$ , and the lines $x = \pi / 6$ , $x = 5\pi / 6$ . 

51. The functions $y = e^{x^{3}}$ and $y = x^{3}e^{x^{3}}$ do not have elementary antiderivatives, but $y = (1 + 3x^{3})e^{x^{3}}$ does. Evaluate 

$$
\int (1 + 3 x ^ {3}) e ^ {x ^ {3}} d x.
52. $Use the substitution $u = \tan x$ to evaluate the integral$
\int \frac {d x}{1 + \sin^ {2} x}.
53. $Use the substitution $u = x^4 + 1$ to evaluate the integral$
\int x ^ {7} \sqrt {x ^ {4} + 1} d x.
54. $Using different substitutions Show that the integral$
\int \left((x ^ {2} - 1) (x + 1)\right) ^ {- 2 / 3} d x
$$

can be evaluated with any of the following substitutions. 

a. $u = 1/(x + 1)$ 

b. $u = \left((x - 1)/(x + 1)\right)^{k}$ for k = 1, 1/2, 1/3, -1/3, -2/3, and -1 

c. $u = \arctan x$ 

d. $u = \tan^{-1}\sqrt{x}$ 

e. $u = \tan^{-1}\left((x - 1)/2\right)$ 

f. $u = \arccos x$ 

g. $u = \cosh^{-1}x$ 

## 8.2 Integration by Parts

What is the value of the integral? 

Integration by parts is a technique for simplifying integrals of the form 

$$
\int u (x) v ^ {\prime} (x) d x.
$$

It is useful when $u$ can be differentiated repeatedly and $v'$ can be integrated repeatedly without difficulty. The integrals 

$$
\int x \cos x d x \quad \text { and } \quad \int x ^ {2} e ^ {x} d x
$$

are such integrals because $u(x) = x$ or $u(x) = x^{2}$ can be differentiated repeatedly, and $v'(x) = \cos x$ or $v'(x) = e^{x}$ can be integrated repeatedly without difficulty. Integration by parts also applies to integrals like 

$$
\int \ln x d x \quad \text { and } \quad \int e ^ {x} \cos x d x.
$$

In the first case, the integrand $\ln x$ can be rewritten as $(\ln x)(1)$ , and $u(x) = \ln x$ is easy to differentiate while $v'(x) = 1$ easily integrates to x. In the second case, each part of the integrand appears again after repeated differentiation or integration. 

### Product Rule in Integral Form

If $u$ and $v$ are differentiable functions of $x$ , the Product Rule says that 

$$
\frac {d}{d x} [ u (x) v (x) ] = u ^ {\prime} (x) v (x) + u (x) v ^ {\prime} (x).
$$

In terms of indefinite integrals, this equation becomes 

$$
\int \frac {d}{d x} [ u (x) v (x) ] d x = \int [ u ^ {\prime} (x) v (x) + u (x) v ^ {\prime} (x) ] d x
$$

or 

$$
\int \frac {d}{d x} [ u (x) v (x) ] d x = \int u ^ {\prime} (x) v (x) d x + \int u (x) v ^ {\prime} (x) d x.
$$

Rearranging the terms of this last equation, we get 

$$
\int u (x) v ^ {\prime} (x) d x = \int \frac {d}{d x} [ u (x) v (x) ] d x - \int v (x) u ^ {\prime} (x) d x,
$$

leading to the following integration by parts formula. 

Integration by Parts Formula 

$$
\int u (x) v ^ {\prime} (x) d x = u (x) v (x) - \int v (x) u ^ {\prime} (x) d x\tag{1}
$$

This formula allows us to exchange the problem of computing the integral $\int u(x)v'(x)dx$ for the problem of computing a different integral, $\int v(x)u'(x)dx$ . In many cases, we can choose the functions u and v so that the second integral is easier to compute than the first. There can be many choices for u and v, and it is not always clear which choice works best, so sometimes we need to try several. 

The formula is often given in differential form. With $v'(x) \, dx = d\nu$ and $u'(x) \, dx = du$ , the integration by parts formula becomes 

Integration by Parts Formula—Differential Version 

$$
\int u d v = u v - \int v d u\tag{2}
$$

The next examples illustrate the technique. 

**EXAMPLE 1** Find

$$
\int x \cos x d x.
$$

**Solution** There is no obvious antiderivative of $x \cos x$ , so we use the integration by parts formula 

$$
\int u (x) v ^ {\prime} (x) d x = u (x) v (x) - \int v (x) u ^ {\prime} (x) d x
$$

to change this expression to one that is easier to integrate. We first decide how to choose the functions $u(x)$ and $v(x)$ . There is more than one way to do this, but here we choose to factor the expression $x \cos x$ into 

$$
u (x) = x \quad \text { and } \quad v ^ {\prime} (x) = \cos x.
$$

Next we differentiate $u(x)$ and find an antiderivative of $v'(x)$ , 

$$
u ^ {\prime} (x) = 1 \quad \text { and } \quad v (x) = \sin x.
$$

When finding an antiderivative for $v'(x)$ , we have a choice of how to pick a constant of integration C. We choose the constant C = 0, since that makes this antiderivative as simple as possible. We now apply the integration by parts formula: 

$$
\begin{array}{l l} \int_ {u (x)} x \cos x   d x = x \sin x - \int_ {v (x)} \sin x (1)   d x & \text { Integration   by   parts   formula } \\ = x \sin x + \cos x + C & \text { Integrate   and   simplify. } \end{array}
$$

and we have found the integral of the original function. 

There are at least four apparent choices available for $u(x)$ and $v'(x)$ in Example 1: 

$$
\begin{array}{l l} \textbf {1 . L e t} u (x) = 1 \text { and } v ^ {\prime} (x) = x \cos x. & \textbf {2 . L e t} u (x) = x \text { and } v ^ {\prime} (x) = \cos x. \\ \textbf {3 . L e t} u (x) = x \cos x \text { and } v ^ {\prime} (x) = 1. & \textbf {4 . L e t} u (x) = \cos x \text { and } v ^ {\prime} (x) = x. \end{array}
$$

We used choice 2 in Example 1. The other three choices lead to integrals that we do not know how to evaluate. For instance, Choice 3, with $u'(x) = \cos x - x \sin x$ , leads to the integral 

$$
\int (x \cos x - x ^ {2} \sin x) d x.
$$

The goal of integration by parts is to go from an integral $\int u(x)v'(x)dx$ that we don't see how to evaluate to an integral $\int v(x)u'(x)dx$ that we can evaluate. Generally, we choose $v'(x)$ first to be as much of the integrand as we can readily integrate; then we let $u(x)$ be the leftover part. When finding $v(x)$ from $v'(x)$ , any antiderivative will work, and we usually pick the simplest one. In particular, no arbitrary constant of integration is needed in $v(x)$ because it would simply cancel out of the right-hand side of Equation (2). 

$$
\text {   **EXAMPLE   2**   } \quad \text {   Find   } \int \ln x d x.
$$

**Solution** We have not yet seen how to find an antiderivative for $\ln x$ . If we set $u(x) = \ln x$ , then $u'(x)$ is the simpler function 1/x. It may not appear that a second function $v'(x)$ is multiplying $u(x) = \ln x$ , but we can choose $v'(x)$ to be the constant function $v'(x) = 1$ . We use the integration by parts formula given in Equation (1), with 

$$
u (x) = \ln x \quad \text { and } \quad v ^ {\prime} (x) = 1.
$$

We differentiate $u(x)$ and find an antiderivative of $v'(x)$ , 

$$
u ^ {\prime} (x) = \frac {1}{x} \text { and } v (x) = x.
$$

Then 

$$
\begin{array}{l l} \int \ln x \cdot 1 d x & = (\ln x) x - \int x \frac {1}{x} d x \\ u (x) v ^ {\prime} (x) & = u (x) v (x) \quad v (x) u ^ {\prime} (x) \\ & = x \ln x - \int 1 d x \\ & = x \ln x - x + C \end{array} \quad \text {   Integration   by   parts   formula   } \quad \text {   Simplify   and   integrate.   }
$$

In the following examples we use the differential form to indicate the process of integration by parts. The computations are the same, with du and dv providing shorter expressions for $u'(x)$ dx and $v'(x)$ dx. 

Sometimes we have to use integration by parts more than once, as in the next example. 

**EXAMPLE 3** Evaluate 

$$
\int x ^ {2} e ^ {x} d x.
$$

**Solution** We use the integration by parts formula given in Equation (1), with 

$$
u (x) = x ^ {2} \quad \text { and } \quad v ^ {\prime} (x) = e ^ {x}.
$$

We differentiate $u(x)$ and find an antiderivative of $v'(x)$ , 

$$
u ^ {\prime} (x) = 2 x \quad \text { and } \quad v (x) = e ^ {x}.
$$

We summarize this choice by setting $du = u'(x) \, dx$ and $dv = v'(x) \, dx$ , so 

$$
d u = 2 x d x \quad \text { and } \quad d v = e ^ {x} d x.
$$

We then have 

$$
\int_ {u} x ^ {2} \underbrace {e ^ {x} d x} _ {d v} = \underset {u} {x ^ {2}} e ^ {x} - \int_ {v} e ^ {x} \underbrace {2 x d x} _ {d u} = x ^ {2} e ^ {x} - 2 \int x e ^ {x} d x \quad \text { Integration   by   parts   formula }
$$

The new integral is less complicated than the original because the exponent on x is reduced by one. To evaluate the integral on the right, we integrate by parts again with u = x, $dv = e^{x} dx$ . Then du = dx, $v = e^{x}$ , and 

$$
\int \underbrace {x e ^ {x} d x} _ {u \quad d v} = \underbrace {x e ^ {x}} _ {u \quad v} - \int \underbrace {e ^ {x} d x} _ {v \quad d u} = x e ^ {x} - e ^ {x} + C. \quad \begin{array}{l} \text { Integration   by   parts   Equation(2) } \\ u = x, d v = e ^ {x} d x \\ v = e ^ {x}, d u = d x \end{array}
$$

Using this last evaluation, we then obtain 

$$
\begin{array}{c} \int x ^ {2} e ^ {x} d x = x ^ {2} e ^ {x} - 2 \int x e ^ {x} d x \\ = x ^ {2} e ^ {x} - 2 x e ^ {x} + 2 e ^ {x} + C, \end{array}
$$

where the constant of integration is renamed after substituting for the integral on the right. 

The technique of Example 3 works for any integral $\int x^n e^x dx$ in which $n$ is a positive integer, because differentiating $x^n$ will eventually lead to a constant, and repeatedly integrating $e^x$ is easy. 

Integrals like the one in the next example occur in electrical engineering. Their evaluation requires two integrations by parts, followed by solving for the unknown integral. 

**EXAMPLE 4** Evaluate

$$
\int e ^ {x} \cos x d x.
$$

**Solution** Let $u = e^{x}$ and dv = cos x dx. Then du = $e^{x}$ dx, v = sin x, and 

$$
\int e ^ {x} \cos x d x = e ^ {x} \sin x - \int e ^ {x} \sin x d x.
$$

The second integral is like the first except that it has $\sin x$ in place of $\cos x$ . To evaluate it, we use integration by parts with 

$$
u = e ^ {x}, \quad d v = \sin x d x, \quad v = - \cos x, \quad d u = e ^ {x} d x.
$$

Then 

$$
\begin{array}{c} \int e ^ {x} \cos x d x = e ^ {x} \sin x - \left(- e ^ {x} \cos x - \int (- \cos x) (e ^ {x} d x)\right) \\ = e ^ {x} \sin x + e ^ {x} \cos x - \int e ^ {x} \cos x d x. \end{array}
$$

The unknown integral now appears on both sides of the equation, but with opposite signs. Adding the integral to both sides and adding the constant of integration gives 

$$
2 \int e ^ {x} \cos x d x = e ^ {x} \sin x + e ^ {x} \cos x + C _ {1}.
$$

Dividing by 2 and renaming the constant of integration then gives 

$$
\int e ^ {x} \cos x d x = \frac {e ^ {x} \sin x + e ^ {x} \cos x}{2} + C.
$$

**EXAMPLE 5** Obtain a formula that expresses the integral 

$$
\int \cos^ {n} x d x
$$

in terms of an integral of a lower power of $\cos x$ . 

**Solution** We may think of $\cos^{n}x$ as $\cos^{n-1}x\cdot\cos x$ . Then we let 

$$
u = \cos^ {n - 1} x \quad \text { and } \quad d v = \cos x   d x,
$$

so that 

$$
d u = (n - 1) \left(\cos^ {n - 2} x\right) (- \sin x d x) \quad \text { and } \quad v = \sin x.
$$

Integration by parts then gives 

$$
\begin{array}{l} \int \cos^ {n} x d x = \cos^ {n - 1} x \sin x + (n - 1) \int \sin^ {2} x \cos^ {n - 2} x d x \\ \qquad = \cos^ {n - 1} x \sin x + (n - 1) \int (1 - \cos^ {2} x) \cos^ {n - 2} x d x \\ \qquad = \cos^ {n - 1} x \sin x + (n - 1) \int \cos^ {n - 2} x d x - (n - 1) \int \cos^ {n} x d x. \end{array}
$$

If we add 

$$
(n - 1) \int \cos^ {n} x d x
$$

to both sides of this equation, we obtain 

$$
n \int \cos^ {n} x d x = \cos^ {n - 1} x \sin x + (n - 1) \int \cos^ {n - 2} x d x.
$$

We then divide through by $n$ , and the final result is 

$$
\int \cos^ {n} x d x = \frac {\cos^ {n - 1} x \sin x}{n} + \frac {n - 1}{n} \int \cos^ {n - 2} x d x.
$$

The formula found in Example 5 is called a reduction formula because it replaces an integral containing some power of a function with an integral of the same form having the power reduced. When n is a positive integer, we may apply the formula repeatedly until the remaining integral is easy to evaluate. For example, the result in Example 5 tells us that 

$$
\begin{array}{r l} \int \cos^ {3} x d x & = \frac {\cos^ {2} x \sin x}{3} + \frac {2}{3} \int \cos x d x \\ & = \frac {1}{3} \cos^ {2} x \sin x + \frac {2}{3} \sin x + C. \end{array}
$$

### Evaluating Definite Integrals by Parts

The integration by parts formula in Equation (1) can be combined with Part 2 of the Fundamental Theorem in order to evaluate definite integrals by parts. Assuming that both $u'$ and $v'$ are continuous over the interval $[a, b]$ , Part 2 of the Fundamental Theorem gives 

Integration by Parts Formula for Definite Integrals 

$$
\left. \int_ {a} ^ {b} u (x) v ^ {\prime} (x) d x = u (x) v (x) \right] _ {a} ^ {b} - \int_ {a} ^ {b} v (x) u ^ {\prime} (x) d x\tag{3}
$$

![教材插图](/books/thomas-calculus/assets/0eab8ae9cc29ea5b0fec63108aa8d3e6186639c5ae4828fb09a02e9c7218341e.jpg)


FIGURE 8.1 The region in Example 6. 

**EXAMPLE 6** Find the area of the region bounded by the curve $y = xe^{-x}$ and the $x$ -axis from $x = 0$ to $x = 4$ . 

**Solution** The region is shaded in Figure 8.1. Its area is 

$$
\int_ {0} ^ {4} x e ^ {- x} d x.
$$

Let $u = x$ , $dv = e^{-x} dx$ , $v = -e^{-x}$ , and $du = dx$ . Then 

$\int_{0}^{4} x e^{-x} dx = -x e^{-x}\bigg|_{0}^{4} - \int_{0}^{4} (-e^{-x}) dx$ Integration by parts Formula (3) $= [-4e^{-4} - (-0e^{-0})] + \int_{0}^{4} e^{-x} dx$ $= -4e^{-4} - e^{-x}\bigg|_{0}^{4}$ $= -4e^{-4} - (e^{-4} - e^{-0}) = 1 - 5e^{-4} \approx 0.91.$ 

### EXERCISES 8.2

Integration by Parts 

Evaluate the integrals in Exercises 1–24 using integration by parts. 

1. $\int x\sin \frac{x}{2} dx$ 

2. $\int \theta \cos \pi \theta d\theta$ 

3. $\int t^2\cos tdt$ 

4. $\int x^{2}\sin x dx$ 

5. $\int_{1}^{2} x \ln x dx$ 

6. $\int_{1}^{e} x^{3} \ln x dx$ 

7. $\int xe^{x}dx$ 

8. $\int xe^{3x}dx$ 

9. $\int x^{2}e^{-x}dx$ 

10. $\int (x^{2} - 2x + 1)e^{2x}dx$ 

11. $\int \tan^{-1}ydy$ 

12. $\int \arcsin ydy$ 

13. $\int x\sec^2 x dx$ 

14. $\int 4x\sec^2 2x dx$ 

15. $\int x^{3}e^{x}dx$ 

16. $\int p^4 e^{-p}dp$ 

17. $\int (x^{2} - 5x)e^{x}dx$ 

18. $\int (r^2 + r + 1)e^r dr$ 

$$
\int \sqrt {x} \ln x d x
$$

19. $\int x^{5}e^{x}dx$ 

20. $\int t^2 e^{4t}dt$ 

21. $\int e^{\theta}\sin \theta d\theta$ 

22. $\int e^{-y}\cos ydy$ 

23. $\int e^{2x}\cos 3x dx$ 

24. $\int e^{-2x}\sin 2x dx$ 

Using Substitution 

Evaluate the integrals in Exercises 25–30 by using a substitution prior to integration by parts. 

25. $\int e^{\sqrt{3s + 9}}ds$ 

26. $\int_0^1 x\sqrt{1 - x} dx$ 

27. $\int_0^{\pi /3}x\tan^2 xdx$ 

28. $\int \ln (x + x^2)dx$ 

29. $\int \sin (\ln x)dx$

30. $\int z(\ln z)^2 dz$

Evaluating Integrals 

Evaluate the integrals in Exercises 31–56. Some integrals do not require integration by parts. 

31. $\int x\sec x^2 dx$ 

32. $\int \frac{\cos\sqrt{x}}{\sqrt{x}} dx$ 

33. $\int x(\ln x)^2 dx$ 

34. $\int \frac{1}{x(\ln x)^2} dx$ 

35. $\int \frac{\ln x}{x^2} dx$ 

36. $\int \frac{(\ln x)^3}{x} dx$ 

37. $\int x^{3}e^{x^{4}}dx$ 

38. $\int x^{5}e^{x^{3}}dx$ 

39. $\int x^{3}\sqrt{x^{2} + 1} dx$ 

40. $\int x^{2}\sin x^{3}dx$ 

41. $\int \sin 3x\cos 2xdx$ 

42. $\int \sin 2x\cos 4xdx$ 

44. $\int \frac{e^{\sqrt{x}}}{\sqrt{x}} dx$ 

45. $\int \cos \sqrt{x} dx$ 

46. $\int \sqrt{x} e^{\sqrt{x}} dx$ 

47. $\int_0^{\pi /2}\theta^2\sin 2\theta d\theta$ 

48. $\int_0^{\pi /2}x^3\cos 2xdx$ 

49. $\int_{2 / \sqrt{3}}^{2}t\sec^{-1}tdt$ 

50. $\int_0^{1 / \sqrt{2}}2x\arcsin (x^2)dx$ 

51. $\int x\arctan x dx$ 

52. $\int x^{2}\tan^{-1}\frac{x}{2} dx$ 

53. $\int (1 + 2x^{2})e^{x^{2}}dx$ 

54. $\int \frac{x e^x}{(x + 1)^2} dx$ 

55. $\int \sqrt{x} (\arcsin \sqrt{x}) dx$ 

56. $\int \frac{(\sin^{-1}x)^2}{\sqrt{1 - x^2}} dx$ 

#### Theory and Examples

57. Finding area Find the area of the region enclosed by the curve $y = x \sin x$ and the x-axis (see the accompanying figure) for 

a. $0 \leq x \leq \pi.$ 

b. $\pi \leq x \leq 2\pi.$ 

c. $2\pi \leq x \leq 3\pi.$ 

d. What pattern do you see here? What is the area between the curve and the x-axis for $n\pi \leq x \leq (n + 1)\pi$ , n an arbitrary nonnegative integer? Give reasons for your answer. 

![教材插图](/books/thomas-calculus/assets/d2d27bc0d6eda3b212ccf3b0c789bbd2a72c0883ec78a5a6968e09f5fea20877.jpg)


58. Finding area Find the area of the region enclosed by the curve $y = x \cos x$ and the x-axis (see the accompanying figure) for 

a. $\pi/2 \leq x \leq 3\pi/2.$ 

b. $3\pi/2 \leq x \leq 5\pi/2$ . 

c. $5\pi/2 \leq x \leq 7\pi/2.$ 

d. What pattern do you see? What is the area between the curve and the x-axis for 

$$
\left(\frac {2 n - 1}{2}\right) \pi \leq x \leq \left(\frac {2 n + 1}{2}\right) \pi ,
$$

n an arbitrary positive integer? Give reasons for your answer. 

![教材插图](/books/thomas-calculus/assets/3895e915179409a0fca8abcbffd177c7c85b974af657c589162584738e2860b5.jpg)


59. Finding volume Find the volume of the solid generated by revolving the region in the first quadrant bounded by the coordinate axes, the curve $y = e^{x}$ , and the line $x = \ln 2$ about the line $x = \ln 2$ . 

60. Finding volume Find the volume of the solid generated by revolving the region in the first quadrant bounded by the coordinate axes, the curve $y = e^{-x}$ , and the line x = 1 

a. about the y-axis. 

b. about the line x = 1. 

61. Finding volume Find the volume of the solid generated by revolving the region in the first quadrant bounded by the coordinate axes and the curve $y = \cos x$ , $0 \leq x \leq \pi/2$ , about 

a. the y-axis. 

b. the line $x = \pi/2$ . 

62. Finding volume Find the volume of the solid generated by revolving the region bounded by the x-axis and the curve $y = x \sin x, 0 \leq x \leq \pi$ , about 

a. the y-axis. 

b. the line $x = \pi$ . 

(See Exercise 57 for a graph.) 

63. Consider the region bounded by the graphs of $y = \ln x$ , $y = 0$ , and $x = e$ . 

a. Find the area of the region. 

b. Find the volume of the solid formed by revolving this region about the x-axis. 

c. Find the volume of the solid formed by revolving this region about the line x = -2. 

d. Find the centroid of the region. 

64. Consider the region bounded by the graphs of $y = \arctan x$ , $y = 0$ , and $x = 1$ . 

a. Find the area of the region. 

b. Find the volume of the solid formed by revolving this region about the y-axis. 

65. Average value A retarding force, symbolized by the dashpot in the accompanying figure, slows the motion of the weighted spring so that the mass's position at time $t$ is 

$$
y = 2 e ^ {- t} \cos t, \quad t \geq 0.
$$

Find the average value of $y$ over the interval $0 \leq t \leq 2\pi$ . 

![教材插图](/books/thomas-calculus/assets/ad48c35e9d5825a331801e5b9109b52126ad5cc585318ccf583778748f606dec.jpg)


66. Average value In a mass-spring-dashpot system like the one in Exercise 65, the mass's position at time $t$ is 

$$
y = 4 e ^ {- t} (\sin t - \cos t), \quad t \geq 0.
$$

Find the average value of $y$ over the interval $0 \leq t \leq 2\pi$ . 

Reduction Formulas 

In Exercises 67–73, use integration by parts to establish the reduction formula. 

67. $\int x^n\cos xdx = x^n\sin x - n\int x^{n - 1}\sin xdx$ 

68. $\int x^n\sin x dx = -x^n\cos x + n\int x^{n - 1}\cos x dx$ 

69. $\int x^{n}e^{ax}dx = \frac{x^{n}e^{ax}}{a} -\frac{n}{a}\int x^{n - 1}e^{ax}dx,a\neq 0$ 

70. $\int (\ln x)^n dx = x(\ln x)^n - n\int (\ln x)^{n - 1}dx$ 

$$
\begin{array}{l} \text {71.} \int x ^ {m} (\ln x) ^ {n} d x \\ = \frac {x ^ {m + 1}}{m + 1} (\ln x) ^ {n} - \frac {n}{m + 1} \int x ^ {m} (\ln x) ^ {n - 1} d x, m \neq - 1 \end{array}
$$

$$
\begin{array}{l} \text {72.} \int x ^ {n} \sqrt {x + 1} d x \\ = \frac {2 x ^ {n}}{2 n + 3} (x + 1) ^ {3 / 2} - \frac {2 n}{2 n + 3} \int x ^ {n - 1} \sqrt {x + 1} d x \end{array}
$$

$$
\begin{array}{l} \text {73.} \int \frac {x ^ {n}}{\sqrt {x + 1}} d x \\ = \frac {2 x ^ {n}}{2 n + 1} \sqrt {x + 1} - \frac {2 n}{2 n + 1} \int \frac {x ^ {n - 1}}{\sqrt {x + 1}} d x \end{array}
74. $Use Example 5 to show that$
\begin{array}{r l} \int_ {0} ^ {\pi / 2} \sin^ {n} x d x & = \int_ {0} ^ {\pi / 2} \cos^ {n} x d x \\ & = \left\{ \begin{array}{l} \left(\frac {\pi}{2}\right) \frac {1 \cdot 3 \cdot 5 \cdots (n - 1)}{2 \cdot 4 \cdot 6 \cdots n}, n \text {even} \\ \frac {2 \cdot 4 \cdot 6 \cdots (n - 1)}{1 \cdot 3 \cdot 5 \cdots n}, n \text {odd} \end{array} \right. \end{array}
75. $Show that$
\int_ {a} ^ {b} \left(\int_ {x} ^ {b} f (t) d t\right) d x = \int_ {a} ^ {b} (x - a) f (x) d x.
76. $Use integration by parts to obtain the formula$
\int \sqrt {1 - x ^ {2}} d x = \frac {1}{2} x \sqrt {1 - x ^ {2}} + \frac {1}{2} \int \frac {1}{\sqrt {1 - x ^ {2}}} d x.
$$

Integrating Inverses of Functions 

Integration by parts leads to a rule for integrating inverses that usually gives good results: 

$$
\begin{array}{l l} \int f ^ {- 1} (x) d x = \int y f ^ {\prime} (y) d y & \quad \begin{array}{l} y = f ^ {- 1} (x), x = f (y) \\ d x = f ^ {\prime} (y) d y \end{array} \\ = y f (y) - \int f (y) d y & \quad \text { Integration   by   parts   with } \\ & u = y, d v = f ^ {\prime} (y) d y \\ = x f ^ {- 1} (x) - \int f (y) d y \end{array}
$$

The idea is to take the most complicated part of the integral, in this case $f^{-1}(x)$ , and simplify it first. For the integral of $\ln x$ , we get 

$$
\begin{array}{l l} \int \ln x d x = \int y e ^ {y} d y & \quad y = \ln x, x = e ^ {y} \\ & d x = e ^ {y} d y \\ = y e ^ {y} - e ^ {y} + C \\ = x \ln x - x + C. \end{array}
$$

For the integral of $\arccos x$ , we get 

$$
\begin{array}{r l} \int \arccos x d x & = x \arccos x - \int \cos y d y \\ & = x \arccos x - \sin y + C \\ & = x \arccos x - \sin (\arccos x) + C. \end{array} \quad y = \arccos x
$$

Use the formula 

$$
\int f ^ {- 1} (x) d x = x f ^ {- 1} (x) - \int f (y) d y \quad y = f ^ {- 1} (x)\tag{4}
$$

to evaluate the integrals in Exercises 77–80. Express your answers in terms of x.

77. $\int \operatorname{arcsec} x \, dx$

78. $\int \arctan x \, dx$

79. $\int \sec^{-1} x \, dx$

80. $\int \log_{2} x \, dx$

Another way to integrate $f^{-1}(x)$ (when $f^{-1}$ is integrable) is to use integration by parts with $u = f^{-1}(x)$ and dv = dx to rewrite the integral of $f^{-1}$ as 

$$
\int f ^ {- 1} (x) d x = x f ^ {- 1} (x) - \int x \left(\frac {d}{d x} f ^ {- 1} (x)\right) d x.\tag{5}
$$

Exercises 81 and 82 compare the results of using Equations (4) and (5). 

81. Equations (4) and (5) give different formulas for the integral of $\arccos x$ : 

$$
\mathbf {a}. \int \arccos x d x = x \arccos x - \sin (\arccos x) + C\tag{Eq. (4}
$$

$$
\int \arccos x d x = x \arccos x - \sqrt {1 - x ^ {2}} + C\tag{Eq. (5}
$$

Can both integrations be correct? Explain. 

82. Equations (4) and (5) lead to different formulas for the integral of $\arctan x$ : 

$$
\mathbf {a}. \int \arctan x d x = x \arctan x - \ln \sec (\arctan x) + C\tag{Eq. (4}
$$

$$
\int \arctan x d x = x \arctan x - \ln \sqrt {1 + x ^ {2}} + C\tag{Eq. (5}
$$

Can both integrations be correct? Explain. 

Evaluate the integrals in Exercises 83 and 84 with (a) Eq. (4) and (b) Eq. (5). In each case, check your work by differentiating your answer with respect to x. 

$$
\begin{array}{l} \text {83.} \int \sinh^ {- 1} x d x \\ \text {84.} \int \tanh^ {- 1} x d x \end{array}
$$

## 8.3 Trigonometric Integrals

Trigonometric integrals involve algebraic combinations of the six basic trigonometric functions. In principle, we can always express such integrals in terms of sines and cosines, but it is often simpler to work with other functions, as in the integral 

$$
\int \sec^ {2} x d x = \tan x + C.
$$

The general idea is to use identities to transform the integrals we must find into integrals that are easier to work with. 

### Products of Powers of Sines and Cosines

We begin with integrals of the form 

$$
\int \sin^ {m} x \cos^ {n} x d x,
$$

where m and n are nonnegative integers (positive or zero). We can divide the appropriate substitution into three cases according to m and n being odd or even. 

Case 1 If $m$ is odd in $\int \sin^m x \cos^n x dx$ , we write $m$ as $2k + 1$ and use the identity $\sin^2 x = 1 - \cos^2 x$ to obtain 

$$
\sin^ {m} x = \sin^ {2 k + 1} x = (\sin^ {2} x) ^ {k} \sin x = (1 - \cos^ {2} x) ^ {k} \sin x.\tag{1}
$$

Then we substitute $u = \cos x$ and $du = -\sin x dx$ . 

Case 2 If $n$ is odd in $\int \sin^m x \cos^n x dx$ , we write $n$ as $2k + 1$ and use the identity $\cos^2 x = 1 - \sin^2 x$ to obtain 

$$
\cos^ {n} x = \cos^ {2 k + 1} x = (\cos^ {2} x) ^ {k} \cos x = (1 - \sin^ {2} x) ^ {k} \cos x.
$$

We then substitute $u = \sin x$ and $du = \cos x dx$ . 

Case 3 If both m and n are even in $\int \sin^{m} x \cos^{n} x dx$ , we substitute 

$$
\sin^ {2} x = \frac {1 - \cos 2 x}{2}, \cos^ {2} x = \frac {1 + \cos 2 x}{2}\tag{2}
$$

to reduce the integrand to one in lower powers of $\cos 2x$ . 

Here are some examples illustrating each case. 

**EXAMPLE 1** Evaluate $\int \sin^{3} x \cos^{2} x dx$ . 

**Solution** This is an example of Case 1. 

$$
\begin{array}{l l} \int \sin^ {3} x \cos^ {2} x d x = \int \sin^ {2} x \cos^ {2} x \sin x d x & m \text { is   odd. } \\ = \int (1 - \cos^ {2} x) (\cos^ {2} x) \sin x d x & \sin^ {2} x = 1 - \cos^ {2} x \\ = \int (1 - u ^ {2}) (u ^ {2}) (- d u) & u = \cos x, d u = - \sin x d x \\ = \int (u ^ {4} - u ^ {2}) d u & \text { Distribute. } \\ = \frac {u ^ {5}}{5} - \frac {u ^ {3}}{3} + C = \frac {\cos^ {5} x}{5} - \frac {\cos^ {3} x}{3} + C & \blacksquare \end{array}
$$

**EXAMPLE 2** Evaluate 

$$
\int \cos^ {5} x d x.
$$

**Solution** This is an example of Case 2, where m = 0 is even and n = 5 is odd. 

$$
\begin{array}{r l} \int \cos^ {5} x d x & = \int \cos^ {4} x \cos x d x \\ & = \int (1 - \sin^ {2} x) ^ {2} \cos x d x \\ & = \int (1 - u ^ {2}) ^ {2} d u \quad u = \sin x, d u = \cos x d x \\ & = \int (1 - 2 u ^ {2} + u ^ {4}) d u \quad \text { Square } 1 - u ^ {2}. \\ & = u - \frac {2}{3} u ^ {3} + \frac {1}{5} u ^ {5} + C = \sin x - \frac {2}{3} \sin^ {3} x + \frac {1}{5} \sin^ {5} x + C \end{array}
$$

**EXAMPLE 3** Evaluate 

$$
\int \sin^ {2} x \cos^ {4} x d x.
$$

**Solution** This is an example of Case 3. 

$$
\begin{array}{r l} \int \sin^ {2} x \cos^ {4} x d x & = \int \left(\frac {1 - \cos 2 x}{2}\right) \left(\frac {1 + \cos 2 x}{2}\right) ^ {2} d x m \text {   and   } n \text {   both   even } \\ & = \frac {1}{8} \int (1 - \cos 2 x) (1 + 2 \cos 2 x + \cos^ {2} 2 x) d x \\ & = \frac {1}{8} \int (1 + \cos 2 x - \cos^ {2} 2 x - \cos^ {3} 2 x) d x \\ & = \frac {1}{8} \left[ x + \frac {1}{2} \sin 2 x - \int (\cos^ {2} 2 x + \cos^ {3} 2 x) d x \right] \end{array}
$$

For the term involving $\cos^{2}2x$ , we use 

$$
\begin{array}{l l} \int \cos^ {2} 2 x d x = \frac {1}{2} \int (1 + \cos 4 x) d x & \text { Use   the   identity } \\ & \cos^ {2} \theta = (1 + \cos 2 \theta) / 2, \\ & \text { with   } \theta = 2 x. \\ = \frac {1}{2} \Big (x + \frac {1}{4} \sin 4 x \Big) + C _ {1}. \end{array}
$$

For the $\cos^3 2x$ term, we have 

$$
\begin{array}{l} \int \cos^ {3} 2 x d x = \int (1 - \sin^ {2} 2 x) \cos 2 x d x \\ \qquad = \frac {1}{2} \int (1 - u ^ {2}) d u = \frac {1}{2} \left(\sin 2 x - \frac {1}{3} \sin^ {3} 2 x\right) + C _ {2}. \end{array}
$$

Combining everything and simplifying, we get 

$$
\int \sin^ {2} x \cos^ {4} x d x = \frac {1}{1 6} \left(x - \frac {1}{4} \sin 4 x + \frac {1}{3} \sin^ {3} 2 x\right) + C.
$$

### Eliminating Square Roots

In the next example, we use the identity $\cos^{2}\theta = (1 + \cos 2\theta)/2$ to eliminate a square root. 

**EXAMPLE 4** Evaluate

$$
\int_ {0} ^ {\pi / 4} \sqrt {1 + \cos 4 x} d x.
$$

**Solution** To eliminate the square root, we use the identity 

$$
\cos^ {2} \theta = \frac {1 + \cos 2 \theta}{2} \quad \text { or } \quad 1 + \cos 2 \theta = 2 \cos^ {2} \theta .
$$

With $\theta = 2x$ , this becomes 

$$
1 + \cos 4 x = 2 \cos^ {2} 2 x.
$$

Therefore, 

$$
\begin{array}{l} \int_ {0} ^ {\pi / 4} \sqrt {1 + \cos 4 x} d x = \int_ {0} ^ {\pi / 4} \sqrt {2 \cos^ {2} 2 x} d x = \int_ {0} ^ {\pi / 4} \sqrt {2} \sqrt {\cos^ {2} 2 x} d x \\ \qquad = \sqrt {2} \int_ {0} ^ {\pi / 4} | \cos 2 x | d x = \sqrt {2} \int_ {0} ^ {\pi / 4} \cos 2 x d x \qquad \text { on } [ 0, \pi / 4 ] \\ \qquad = \sqrt {2} \Big [ \frac {\sin 2 x}{2} \Big ] _ {0} ^ {\pi / 4} = \frac {\sqrt {2}}{2} [ 1 - 0 ] = \frac {\sqrt {2}}{2}. \end{array}
$$

### Integrals of Powers of tan x and sec x

We know how to integrate the tangent and secant functions and their squares. To integrate higher powers, we use the identities $\tan^{2}x = \sec^{2}x - 1$ and $\sec^{2}x = \tan^{2}x + 1$ , and integrate by parts when necessary to reduce the higher powers to lower powers. 

**EXAMPLE 5** Evaluate 

$$
\int \tan^ {4} x d x.
$$

**Solution** 

$$
\begin{array}{r l} \int \tan^ {4} x d x & = \int \tan^ {2} x \cdot \tan^ {2} x d x \\ & = \int \tan^ {2} x \cdot (\sec^ {2} x - 1) d x \quad \tan^ {2} x = \sec^ {2} x - 1 \\ & = \int \tan^ {2} x \sec^ {2} x d x - \int \tan^ {2} x d x \\ & = \int \tan^ {2} x \sec^ {2} x d x - \int (\sec^ {2} x - 1) d x \quad \tan^ {2} x = \sec^ {2} x - 1 \\ & = \int \tan^ {2} x \sec^ {2} x d x - \int \sec^ {2} x d x + \int d x \end{array}
$$

In the first integral, we let 

$$
u = \tan x, \quad d u = \sec^ {2} x d x
$$

and have 

$$
\int u ^ {2} d u = \frac {1}{3} u ^ {3} + C _ {1}.
$$

The remaining integrals are standard forms, so 

$$
\int \tan^ {4} x d x = \frac {1}{3} \tan^ {3} x - \tan x + x + C.
$$

**EXAMPLE 6** Evaluate 

$$
\int \sec^ {3} x d x.
$$

**Solution** We integrate by parts using 

$$
u = \sec x, \quad d v = \sec^ {2} x d x, \quad v = \tan x, \quad d u = \sec x \tan x d x.
$$

Then 

$$
\begin{array}{r l} \int \sec^ {3} x d x & = \sec x \tan x - \int (\tan x) (\sec x \tan x) d x \\ & = \sec x \tan x - \int (\sec^ {2} x - 1) \sec x d x \\ & = \sec x \tan x - \int \sec^ {3} x d x + \int \sec x d x \end{array} \quad \text {   Integrate   by   parts.   } \quad \tan^ {2} x = \sec^ {2} x - 1
$$

Combining the two secant-cubed integrals gives 

$$
2 \int \sec^ {3} x d x = \sec x \tan x + \int \sec x d x
$$

and therefore 

$$
\int \sec^ {3} x d x = \frac {1}{2} \sec x \tan x + \frac {1}{2} \ln | \sec x + \tan x | + C.
$$

**EXAMPLE 7** Evaluate 

$$
\int \tan^ {4} x \sec^ {4} x d x.
$$

**Solution** 

$$
\begin{array}{l l} \int (\tan^ {4} x) (\sec^ {4} x) d x = \int (\tan^ {4} x) (1 + \tan^ {2} x) (\sec^ {2} x) d x & \quad \sec^ {2} x = 1 + \tan^ {2} x \\ = \int (\tan^ {4} x + \tan^ {6} x) (\sec^ {2} x) d x & \text {   Distribute.   } \\ = \int (u ^ {4} + u ^ {6}) d u = \frac {u ^ {5}}{5} + \frac {u ^ {7}}{7} + C & \quad u = \tan x, \\ = \frac {\tan^ {5} x}{5} + \frac {\tan^ {7} x}{7} + C & \quad d u = \sec^ {2} x d x \end{array}
$$

### Products of Sines and Cosines

The integrals 

$$
\int \sin m x \sin n x d x, \quad \int \sin m x \cos n x d x, \quad \text { and } \quad \int \cos m x \cos n x d x
$$

arise in many applications involving periodic functions. We can evaluate these integrals through integration by parts, but two such integrations are required in each case. It is simpler to use the following identities. 

$$
\sin m x \sin n x = \frac {1}{2} [ \cos (m - n) x - \cos (m + n) x ]\tag{3}
$$

$$
\sin m x \cos n x = \frac {1}{2} [ \sin (m - n) x + \sin (m + n) x ]\tag{4}
$$

$$
\cos m x \cos n x = \frac {1}{2} [ \cos (m - n) x + \cos (m + n) x ]\tag{5}
$$

These identities come from the angle sum formulas for the sine and cosine functions (Section 1.3). They give functions whose antiderivatives are easily found. 

**EXAMPLE 8** Evaluate 

$$
\int \sin 3 x \cos 5 x d x.
$$

**Solution** From Equation (4) with m = 3 and n = 5, we get 

$$
\begin{array}{r l} \int \sin 3 x \cos 5 x d x & = \frac {1}{2} \int [ \sin (- 2 x) + \sin 8 x ] d x \\ & = \frac {1}{2} \int (\sin 8 x - \sin 2 x) d x \\ & = - \frac {\cos 8 x}{1 6} + \frac {\cos 2 x}{4} + C. \end{array}
$$

### EXERCISES 8.3

Powers of Sines and Cosines 

Evaluate the integrals in Exercises 1–22. 

1. $\int \cos 2x dx$ 

2. $\int_0^\pi 3\sin \frac{x}{3} dx$ 

3. $\int \cos^3 x\sin xdx$ 

4. $\int \sin^4 2x\cos 2xdx$ 

5. $\int \sin^3 x dx$ 

6. $\int \cos^3 4x dx$ 

7. $\int \sin^5 x dx$ 

8. $\int_0^\pi \sin^5\frac{x}{2} dx$ 

9. $\int \cos^3 x dx$ 

10. $\int_0^{\pi /6}3\cos^5 3x dx$ 

11. $\int \sin^3 x\cos^3 xdx$ 

12. $\int \cos^3 2x\sin^5 2xdx$ 

13. $\int \cos^2 x dx$ 

14. $\int_0^{\pi /2}\sin^2 xdx$ 

15. $\int_0^{\pi /2}\sin^7 ydy$ 

16. $\int 7\cos^7 tdt$ 

17. $\int_0^\pi 8\sin^4 x dx$ 

18. $\int 8\cos^4 2\pi x dx$ 

19. $\int 16\sin^2 x\cos^2 xdx$ 

20. $\int_0^\pi 8\sin^4 y\cos^2 ydy$ 

21. $\int 8\cos^3 2\theta \sin 2\theta d\theta$ 

22. $\int_0^{\pi /2}\sin^2 2\theta \cos^3 2\theta d\theta$ 

Integrating Square Roots 

Evaluate the integrals in Exercises 23–32. 

23. $\int_0^{2\pi}\sqrt{\frac{1 - \cos x}{2}} dx$ 

24. $\int_0^\pi \sqrt{1 - \cos 2x} dx$ 

25. $\int_0^\pi \sqrt{1 - \sin^2 t} dt$ 

26. $\int_0^\pi \sqrt{1 - \cos^2\theta} d\theta$ 

Exercises 59–64 require the use of various trigonometric identities before you evaluate the integrals. 

27. $\int_{\pi /3}^{\pi /2}\frac{\sin^2x}{\sqrt{1 - \cos x}} dx$ 

28. $\int_0^{\pi /6}\sqrt{1 + \sin x} dx$ 

29. $\int_{5\pi /6}^{\pi}\frac{\cos^4x}{\sqrt{1 - \sin x}} dx$ 

30. $\int_{\pi /2}^{3\pi /4}\sqrt{1 - \sin 2x} dx$ 

Assorted Integrations 

31. $\int_0^{\pi /2}\theta \sqrt{1 - \cos 2\theta} d\theta$ 

32. $\int_{-\pi}^{\pi}(1 - \cos^2 t)^{3/2}dt$ 

Powers of Tangents and Secants 

Evaluate the integrals in Exercises 33–52. 

33. $\int \sec^2 x\tan xdx$ 

34. $\int \sec x\tan^2 xdx$ 

35. $\int \sec^3 x\tan xdx$ 

36. $\int \sec^3 x\tan^3 xdx$ 

Applications 

37. $\int \sec^2 x\tan^2 xdx$ 

38. $\int \sec^4 x\tan^2 xdx$ 

39. $\int_{-\pi /3}^{0}2\sec^3 xdx$ 

40. $\int e^{x}\sec^{3}e^{x}dx$ 

41. $\int \sec^4\theta d\theta$ 

42. $\int \tan^4 x\sec^3 xdx$ 

43. $\int_{\pi /4}^{\pi /2}\csc^4\theta d\theta$ 

44. $\int \sec^6 x dx$ 

45. $\int 4\tan^3 x dx$ 

46. $\int_{-\pi /4}^{\pi /4}6\tan^4 xdx$ 

47. $\int \tan^5 x dx$ 

48. $\int \cot^6 2x dx$ 

49. $\int_{\pi /6}^{\pi /3}\cot^3 xdx$ 

50. $\int 8\cot^4 tdt$ 

51. $\int_{\pi /4}^{\pi /3}\tan^5\theta \sec^4\theta d\theta$ 

52. $\int \cot^3 t\csc^4 tdt$ 

Products of Sines and Cosines 

Evaluate the integrals in Exercises 53–58. 

53. $\int \sin 3x\cos 2xdx$

54. $\int \sin 2x\cos 3xdx$

55. $\int_{-\pi}^{\pi}\sin 3x\sin 3xdx$ 

56. $\int_0^{\pi /2}\sin x\cos xdx$ 

57. $\int \cos 3x\cos 4xdx$ 

58. $\int_{-\pi /2}^{\pi /2}\cos x\cos 7xdx$ 

59. $\int \sin^2\theta \cos 3\theta d\theta$ 

60. $\int \cos^2 2\theta \sin \theta d\theta$ 

Hint: Multiply by $\sqrt{\frac{1 - \sin x}{1 - \sin x}}$ . 

61. $\int \cos^3\theta \sin 2\theta d\theta$ 

62. $\int \sin^3\theta \cos 2\theta d\theta$ 

63. $\int \sin \theta \cos \theta \cos 3\theta d\theta$ 

64. $\int \sin \theta \sin 2\theta \sin 3\theta d\theta$ 

Use any method to evaluate the integrals in Exercises 65–70. 

65. $\int \frac{\sec^3x}{\tan x} dx$ 

66. $\int \frac{\sin^3x}{\cos^4x} dx$ 

67. $\int \frac{\tan^2x}{\csc x} dx$ 

68. $\int \frac{\cot x}{\cos^2x} dx$ 

69. $\int x\sin^2 x dx$ 

70. $\int x\cos^3 x dx$ 

71. Arc length Find the length of the curve $y = \ln (\sin x)$, $\frac {\pi}{6} \leq x \leq \frac {\pi}{2}$.

72. Center of gravity Find the center of gravity of the region bounded by the $x$ -axis, the curve $y = \sec x$ , and the lines $x = -\pi / 4$ , $x = \pi / 4$ . 

73. Volume Find the volume generated by revolving one arch of the curve $y = \sin x$ about the x-axis. 

74. Area Find the area between the $x$ -axis and the curve $y = \sqrt{1 + \cos 4x}$ , $0 \leq x \leq \pi$ . 

75. Centroid Find the centroid of the region bounded by the graphs of $y = x + \cos x$ and $y = 0$ for $0 \leq x \leq 2\pi$ . 

76. Volume Find the volume of the solid formed by revolving the region bounded by the graphs of $y = \sin x + \sec x$ , $y = 0$ , $x = 0$ , and $x = \pi / 3$ about the $x$ -axis. 

77. Volume Find the volume of the solid formed by revolving the region bounded by the graphs of $y = \arctan x$ , $x = 0$ , and $y = \pi / 4$ about the $y$ -axis. 

78. Average Value Find the average value of the function $f(x) = \frac{1}{1 - \sin \theta}$ on $[0, \pi/6]$ . 

## 8.4 Trigonometric Substitutions

![教材插图](/books/thomas-calculus/assets/a8a3f6f3d9542e283c9ad1940d8266c90a9343f87c20787ca0f771613376711a.jpg)


![教材插图](/books/thomas-calculus/assets/19dc4ebafd705c3704bb6e27bb0618a218aa6a807899db1d8d5c6c8f078a463c.jpg)


![教材插图](/books/thomas-calculus/assets/106734ab25f22c793b9f35ef80e17a80cb8419dc128bca9764ecfd4ab979445f.jpg)



FIGURE 8.3 The arctangent, arcsine, and arcsecant of x/a, graphed as functions of x/a.


Trigonometric substitutions occur when we replace the variable of integration by a trigonometric function. The most common substitutions are $x = a \tan \theta$ , $x = a \sin \theta$ , and $x = a \sec \theta$ . These substitutions are effective in transforming integrals involving $\sqrt{a^{2} + x^{2}}$ , $\sqrt{a^{2} - x^{2}}$ , and $\sqrt{x^{2} - a^{2}}$ into integrals with respect to $\theta$ , since they come from the reference right triangles in Figure 8.2. 

![教材插图](/books/thomas-calculus/assets/b0955ead17e10d85ce6bc8e3e9cb445da57ef77c86ea24612132e32f6fd6615b.jpg)



FIGURE 8.2 Reference triangles for the three basic substitutions, identifying the sides labeled x and a for each substitution.


With $x = a \tan \theta$ , 

$$
a ^ {2} + x ^ {2} = a ^ {2} + a ^ {2} \tan^ {2} \theta = a ^ {2} (1 + \tan^ {2} \theta) = a ^ {2} \sec^ {2} \theta .
$$

With $x = a\sin \theta$ 

$$
a ^ {2} - x ^ {2} = a ^ {2} - a ^ {2} \sin^ {2} \theta = a ^ {2} (1 - \sin^ {2} \theta) = a ^ {2} \cos^ {2} \theta .
$$

With $x = a\sec \theta$ 

$$
x ^ {2} - a ^ {2} = a ^ {2} \sec^ {2} \theta - a ^ {2} = a ^ {2} (\sec^ {2} \theta - 1) = a ^ {2} \tan^ {2} \theta .
$$

We want any substitution we use in an integration to be reversible so that we can change back to the original variable afterward. For example, if $x = a \tan \theta$ , we want to be able to set $\theta = \arctan (x / a)$ after the integration takes place. If $x = a \sin \theta$ , we want to be able to set $\theta = \arcsin (x / a)$ when we're done, and similarly for $x = a \sec \theta$ . 

As we know from Section 1.5, the functions in these substitutions have inverses only for selected values of $\theta$ (Figure 8.3). For reversibility, 

$$
x = a \tan \theta \quad \text { requires } \quad \theta = \arctan \left(\frac {x}{a}\right) \quad \text { with } \quad - \frac {\pi}{2} <   \theta <   \frac {\pi}{2},
$$

$$
x = a \sin \theta \quad \text { requires } \quad \theta = \arcsin \left(\frac {x}{a}\right) \quad \text { with } \quad - \frac {\pi}{2} \leq \theta \leq \frac {\pi}{2},
$$

with 

$$
\left\{ \begin{array}{l l} 0 \leq \theta <   \frac {\pi}{2} & \text { if } \quad \frac {x}{a} \geq 1, \\ \frac {\pi}{2} <   \theta \leq \pi & \text { if } \quad \frac {x}{a} \leq - 1. \end{array} \right.
$$

To simplify calculations with the substitution $x = a \sec \theta$ , we will restrict its use to integrals in which $x / a \geq 1$ . This will place $\theta$ in $[0, \pi / 2)$ and make $\tan \theta \geq 0$ . We will then have $\sqrt{x^2 - a^2} = \sqrt{a^2 \tan^2 \theta} = |a \tan \theta| = a \tan \theta$ , free of absolute values, provided $a > 0$ . 

### Procedure for a Trigonometric Substitution

1. Write down the substitution for x, calculate the differential dx, and specify the selected values of $\theta$ for the substitution. 

2. Substitute the trigonometric expression and the calculated differential into the integrand, and then simplify the results algebraically. 

3. Evaluate the trigonometric integral, keeping in mind the restrictions on the angle $\theta$ for reversibility. 

4. Draw an appropriate reference triangle to reverse the substitution in the integration result and convert it back to the original variable x. 

**EXAMPLE 1** Evaluate

$$
\int \frac {d x}{\sqrt {4 + x ^ {2}}}.
$$

![教材插图](/books/thomas-calculus/assets/c0b905498c39298a14ad9db82f0cd44d1372a5de7462f077e4949c067e9d3d84.jpg)


FIGURE 8.4 Reference triangle for $x = 2\tan \theta$ (Example 1): 

$$
\tan \theta = \frac {x}{2}
$$

**Solution** We set 

and 

$$
\sec \theta = \frac {\sqrt {4 + x ^ {2}}}{2}.
$$

Then 

$$
\begin{array}{l} x = 2 \tan \theta , \quad d x = 2 \sec^ {2} \theta d \theta , \quad - \frac {\pi}{2} <   \theta <   \frac {\pi}{2}, \\ 4 + x ^ {2} = 4 + 4 \tan^ {2} \theta = 4 (1 + \tan^ {2} \theta) = 4 \sec^ {2} \theta . \end{array}
$$

$$
\begin{array}{l l} \int \frac {d x}{\sqrt {4 + x ^ {2}}} = \int \frac {2 \sec^ {2} \theta d \theta}{\sqrt {4 \sec^ {2} \theta}} = \int \frac {\sec^ {2} \theta d \theta}{| \sec \theta |} & \sqrt {\sec^ {2} \theta} = | \sec \theta | \\ = \int \sec \theta d \theta & \sec \theta > 0 \text { for } - \frac {\pi}{2} <   \theta <   \frac {\pi}{2} \\ = \ln | \sec \theta + \tan \theta | + C \\ = \ln \left| \frac {\sqrt {4 + x ^ {2}}}{2} + \frac {x}{2} \right| + C. & \text { From   Fig.8.4 } \end{array}
$$

Notice how we expressed $\ln\left|\sec\theta+\tan\theta\right|$ in terms of x: We drew a reference triangle for the original substitution $x=2\tan\theta$ (Figure 8.4) and read the ratios from the triangle. 

**EXAMPLE 2** Here we find an expression for the inverse hyperbolic sine function in terms of the natural logarithm. Following the same procedure as in Example 1, we find that 

$$
\begin{array}{r l} \int \frac {d x}{\sqrt {a ^ {2} + x ^ {2}}} & = \int \sec \theta d \theta \\ & = \ln | \sec \theta + \tan \theta | + C \\ & = \ln \left| \frac {\sqrt {a ^ {2} + x ^ {2}}}{a} + \frac {x}{a} \right| + C \end{array} \quad x = a \tan \theta , d x = a \sec^ {2} \theta d \theta \tag {Fig.8.2}
$$

From Table 7.9, $\sinh^{-1}(x / a)$ is also an antiderivative of $1 / \sqrt{a^2 + x^2}$ , so the two anti-derivatives differ by a constant, giving 

$$
\sinh^ {- 1} \frac {x}{a} = \ln \left| \frac {\sqrt {a ^ {2} + x ^ {2}}}{a} + \frac {x}{a} \right| + C.
$$

Setting $x = 0$ in this last equation, we find that $0 = \ln |1| + C$ , so $C = 0$ . Since $\sqrt{a^2 + x^2} > |x|$ , we conclude that $\frac{\sqrt{a^2 + x^2}}{a} + \frac{x}{a} > 0$ , and therefore 

$$
\sinh^ {- 1} \frac {x}{a} = \ln \left(\frac {\sqrt {a ^ {2} + x ^ {2}}}{a} + \frac {x}{a}\right)
$$

(See also Exercise 76 in Section 7.3.) 

**EXAMPLE 3** Evaluate

FIGURE 8.5 Reference triangle for $x = 3\sin \theta$ (Example 3): 

![教材插图](/books/thomas-calculus/assets/14cee5e23830515be0827c2dd489753d8fab6adb15201823d88e8fad5adf2340.jpg)


$$
\sin \theta = \frac {x}{3}
$$

and 

$$
\int \frac {x ^ {2} d x}{\sqrt {9 - x ^ {2}}}.
$$

**Solution** We set 

$$
\cos \theta = \frac {\sqrt {9 - x ^ {2}}}{3}.
$$

$$
x = 3 \sin \theta , \quad d x = 3 \cos \theta d \theta , \quad - \frac {\pi}{2} <   \theta <   \frac {\pi}{2}
$$

Then 

$$
9 - x ^ {2} = 9 - 9 \sin^ {2} \theta = 9 (1 - \sin^ {2} \theta) = 9 \cos^ {2} \theta .
$$

$$
\begin{array}{l l} \int \frac {x ^ {2} d x}{\sqrt {9 - x ^ {2}}} = \int \frac {9 \sin^ {2} \theta \cdot 3 \cos \theta d \theta}{| 3 \cos \theta |} \\ = 9 \int \sin^ {2} \theta d \theta & \cos \theta > 0 \text {   for   } - \frac {\pi}{2} <   \theta <   \frac {\pi}{2} \\ = 9 \int \frac {1 - \cos 2 \theta}{2} d \theta & \sin^ {2} \theta = \frac {1 - \cos 2 \theta}{2} \\ = \frac {9}{2} \left(\theta - \frac {\sin 2 \theta}{2}\right) + C \\ = \frac {9}{2} (\theta - \sin \theta \cos \theta) + C & \sin 2 \theta = 2 \sin \theta \cos \theta \\ = \frac {9}{2} \left(\arcsin \frac {x}{3} - \frac {x}{3} \cdot \frac {\sqrt {9 - x ^ {2}}}{3}\right) + C & \text { From   Fig.8.5 } \\ = \frac {9}{2} \arcsin \frac {x}{3} - \frac {x}{2} \sqrt {9 - x ^ {2}} + C. \end{array}
$$

**EXAMPLE 4** Evaluate 

$$
\int \frac {d x}{\sqrt {2 5 x ^ {2} - 4}}, x > \frac {2}{5}.
$$

**Solution** We first rewrite the radical as 

$$
\begin{array}{r l} \sqrt {2 5 x ^ {2} - 4} & = \sqrt {2 5 \left(x ^ {2} - \frac {4}{2 5}\right)} \\ & = 5 \sqrt {x ^ {2} - \left(\frac {2}{5}\right) ^ {2}} \quad \sqrt {x ^ {2} - a ^ {2}} \text {   with   } a = \frac {2}{5} \end{array}
$$

to put the radicand in the form $x^{2} - a^{2}$ . We then substitute 

$$
x = \frac {2}{5} \sec \theta , d x = \frac {2}{5} \sec \theta \tan \theta d \theta , 0 <   \theta <   \frac {\pi}{2}.
$$

We then get 

$$
x ^ {2} - \left(\frac {2}{5}\right) ^ {2} = \frac {4}{2 5} \sec^ {2} \theta - \frac {4}{2 5} = \frac {4}{2 5} (\sec^ {2} \theta - 1) = \frac {4}{2 5} \tan^ {2} \theta
$$

![教材插图](/books/thomas-calculus/assets/524d2f30f29c29cc0ec36b1a5b08c1b3aab5299d9bbc8b4675bd9373d72f6d43.jpg)


and 

$$
\sqrt {x ^ {2} - \left(\frac {2}{5}\right) ^ {2}} = \frac {2}{5} | \tan \theta | = \frac {2}{5} \tan \theta . \quad \tan \theta > 0 \text {   for   } 0 <   \theta <   \pi / 2
$$

With these substitutions, we have 

FIGURE 8.6 If $x = (2/5)\sec \theta$ , 

$0 < \theta < \pi / 2$ , then $\theta = \operatorname{arcsec}(5x / 2)$ , 

and we can read the values of the other trigonometric functions of $\theta$ from this right triangle (Example 4). 

$\int \frac{dx}{\sqrt{25x^2 - 4}} = \int \frac{dx}{5\sqrt{x^2 - (4 / 25)}} = \int \frac{(2 / 5)\sec\theta\tan\theta d\theta}{5\cdot(2 / 5)\tan\theta}$ $= \frac{1}{5}\int \sec \theta d\theta = \frac{1}{5}\ln |\sec \theta +\tan \theta | + C$ $= \frac{1}{5}\ln \left|\frac{5x}{2} +\frac{\sqrt{25x^2 - 4}}{2}\right| + C.$ From Fig.8.6 

### EXERCISES 8.4

#### Using Trigonometric Substitutions

Evaluate the integrals in Exercises 1–14. 

1. $\int \frac{dx}{\sqrt{9 + x^2}}$
2. $\int \frac{3dx}{\sqrt{1 + 9x^2}}$
3. $\int_{-2}^{2}\frac{dx}{4 + x^2}$
4. $\int_0^2\frac{dx}{8 + 2x^2}$

5. $\int_0^{3 / 2}\frac{dx}{\sqrt{9 - x^2}}$ 

6. $\int_0^{1 / 2\sqrt{2}}\frac{2dx}{\sqrt{1 - 4x^2}}$ 

7. $\int \sqrt{25 - t^2} dt$ 

8. $\int \sqrt{1 - 9t^2} dt$ 

9. $\int \frac{dx}{\sqrt{4x^2 - 49}}, x > \frac{7}{2}$ 

10. $\int \frac{5dx}{\sqrt{25x^2 - 9}}, x > \frac{3}{5}$ 

11. $\int \frac{\sqrt{y^2 - 49}}{y} dy, y > 7$ 

12. $\int \frac{\sqrt{y^2 - 25}}{y^3} dy, y > 5$ 

13. $\int \frac{dx}{x^2\sqrt{x^2 - 1}}, x > 1$ 

14. $\int \frac{2dx}{x^3\sqrt{x^2 - 1}}, x > 1$ 

Assorted Integrations 

Use any method to evaluate the integrals in Exercises 15–38. Most will require trigonometric substitutions, but some can be evaluated by other methods. 

15. $\int \frac{dx}{x\sqrt{x^2 - 1}}$ 

16. $\int \frac {d x}{1 + x ^ {2}}$

17. $\int \frac{x dx}{\sqrt{x^2 - 1}}$ 

18. $\int \frac{dx}{\sqrt{1 - x^2}}$ 

19. $\int \frac{x}{\sqrt{9 - x^2}} dx$ 

20. $\int \frac{x^2}{4 + x^2} dx$ 

21. $\int \frac{x^3 dx}{\sqrt{x^2 + 4}}$ 

22. $\int \frac{dx}{x^2\sqrt{x^2 + 1}}$ 

23. $\int \frac{8dw}{w^2\sqrt{4 - w^2}}$ 

24. $\int \frac{\sqrt{9 - w^2}}{w^2} dw$ 

25. $\int \sqrt{\frac{x + 1}{1 - x}} dx$ 

26. $\int x\sqrt{x^2 - 4} dx$ 

27. $\int_0^{\sqrt{3} /2}\frac{4x^2dx}{(1 - x^2)^{3 / 2}}$ 

28. $\int_0^1\frac{dx}{(4 - x^2)^{3 / 2}}$ 

29. $\int \frac{dx}{(x^2 - 1)^{3/2}}, x > 1$ 

30. $\int \frac{x^2 dx}{(x^2 - 1)^{5/2}}, x > 1$ 

31. $\int \frac{(1 - x^2)^{3 / 2}}{x^6} dx$ 

32. $\int \frac{(1 - x^2)^{1 / 2}}{x^4} dx$ 

33. $\int \frac{8dx}{(4x^2 + 1)^2}$ 

34. $\int \frac{6dt}{(9t^2 + 1)^2}$ 

35. $\int \frac{x^3 dx}{x^2 - 1}$ 

36. $\int \frac{x dx}{25 + 4x^2}$ 

37. $\int \frac{v^2 dv}{(1 - v^2)^{5/2}}$ 

38. $\int \frac{(1 - r^2)^{5 / 2}}{r^8} dr$ 

In Exercises 39–48, use an appropriate substitution and then a trigonometric substitution to evaluate the integrals.

39. $\int_{0}^{\ln4}\frac{e^{t}dt}{\sqrt{e^{2t}}+9}$

40. $\int_{\ln(3/4)}^{\ln(4/3)}\frac{e^{t}dt}{(1+e^{2t})^{3/2}}$

41. $\int_{1/12}^{1/4}\frac{2dt}{\sqrt{t}+4t\sqrt{t}}$

42. $\int_{1}^{e}\frac{dy}{y\sqrt{1+(\ln y)^{2}}}$

43. $\int\frac{x dx}{\sqrt{1+x^{4}}}$

44. $\int\frac{\sqrt{1-(\ln x)^{2}}}{x\ln x}dx$

45. $\int\sqrt{\frac{4-x}{x}}dx$

46. $\int\sqrt{\frac{x}{1-x^{3}}}dx$ (Hint: Let $x=u^{2}$ .)

(Hint: Let $u=x^{3/2}$ .)

47. $\int\sqrt{x}\sqrt{1-x}dx$

48. $\int\frac{\sqrt{x-2}}{\sqrt{x-1}}dx$

Complete the Square Before Using Trigonometric Substitutions
For Exercises 49–52, complete the square before using an appropriate trigonometric substitution.
49. $\int\sqrt{8-2x-x^{2}}dx$

50. $\int\frac{1}{\sqrt{x^{2}-2x+5}}dx$

51. $\int\frac{\sqrt{x^{2}+4x+3}}{x+2}dx$

52. $\int\frac{\sqrt{x^{2}+2x+2}}{x^{2}+2x+1}dx$

Initial Value Problems 

Initial Value Problems
Solve the initial value problems in Exercises 53–56 for y as a function of x.
53. $x \frac{dy}{dx} = \sqrt{x^{2} - 4}, \quad x \geq 2, \quad y(2) = 0$

54. $\sqrt{x^{2}-9} \frac{dy}{dx} = 1, \quad x > 3, \quad y(5) = \ln 3$

55. $(x^{2} + 4)\frac{dy}{dx} = 3, \quad y(2) = 0$

56. $(x^{2} + 1)^{2}\frac{dy}{dx} = \sqrt{x^{2} + 1}, \quad y(0) = 1$

#### Applications and Examples

57. Area Find the area of the region in the first quadrant that is enclosed by the coordinate axes and the curve $y = \sqrt{9 - x^2} / 3$ . 

58. Area Find the area enclosed by the ellipse $\frac{x^2}{a^2} +\frac{y^2}{b^2} = 1.$ 

59. Consider the region bounded by the graphs of $y = \sin^{-1}x$ , $y = 0$ , and $x = 1/2$ .  
a. Find the area of the region.  
b. Find the centroid of the region. 

60. Consider the region bounded by the graphs of $y = \sqrt{x} \arctan x$ and y = 0 for $0 \leq x \leq 1$ . Find the volume of the solid formed by revolving this region about the x-axis (see accompanying figure). 

![教材插图](/books/thomas-calculus/assets/7f32ea36bab2c551fa6067bc633f8f2772c879e969ef287330dfc02e78a1da3a.jpg)


61. Evaluate $\int x^3\sqrt{1 - x^2} dx$ using a. integration by parts. b. a $u$ -substitution. c. a trigonometric substitution. 

62. Path of a water skier Suppose that a boat is positioned at the origin with a water skier tethered to the boat at the point (10, 0) on a rope $10\mathrm{m}$ long. As the boat travels along the positive $y$ -axis, the skier is pulled behind the boat along an unknown path $y = f(x)$ , as shown in the accompanying figure.  
a. Show that $f'(x) = \frac{-\sqrt{100 - x^2}}{x}$ .  
(Hint: Assume that the skier is always pointed directly at the boat and the rope is on a line tangent to the path $y = f(x)$ .)  
b. Solve the equation in part (a) for $f(x)$ , using $f(10) = 0$ . 

![教材插图](/books/thomas-calculus/assets/8eb23cb5a509a7b482e3efcf273cc1cc1f81a2a6307b85f56df186438b618275.jpg)


63. Find the average value of $f(x) = \frac{\sqrt{x + 1}}{\sqrt{x}}$ on the interval [1, 3].  
64. Find the length of the curve $y = 1 - e^{-x}$ , $0 \leq x \leq 1$ . 

## 8.5 Integration of Rational Functions by Partial Fractions

This section shows how to express a rational function (a quotient of polynomials) as a sum of simpler fractions, called partial fractions, which are more easily integrated. For instance, the rational function $(5x - 3)/(x^{2} - 2x - 3)$ can be rewritten as 

$$
\frac {5 x - 3}{x ^ {2} - 2 x - 3} = \frac {2}{x + 1} + \frac {3}{x - 3}.
$$

You can verify this equation algebraically by placing the fractions on the right side over a common denominator $(x + 1)(x - 3)$ . The skill acquired in writing rational functions as such a sum is useful in other settings as well (for instance, when using certain transform methods to solve differential equations). To integrate the rational function $(5x - 3)/(x^{2} - 2x - 3)$ on the left side of the expression we are considering, we simply sum the integrals of the fractions on the right side: 

$$
\begin{array}{c} \int \frac {5 x - 3}{(x + 1) (x - 3)} d x = \int \frac {2}{x + 1} d x + \int \frac {3}{x - 3} d x \\ = 2 \ln | x + 1 | + 3 \ln | x - 3 | + C. \end{array}
$$

The method for rewriting rational functions as a sum of simpler fractions is called the method of partial fractions. In the case of our example, it consists of finding constants A and B such that 

$$
\frac {5 x - 3}{x ^ {2} - 2 x - 3} = \frac {A}{x + 1} + \frac {B}{x - 3}.\tag{1}
$$

(Pretend for a moment that we do not know that A = 2 and B = 3 will work.) We call the fractions $A/(x + 1)$ and $B/(x - 3)$ partial fractions because their denominators are only part of the original denominator $x^{2} - 2x - 3$ . We call A and B undetermined coefficients until suitable values for them have been found. 

To find $A$ and $B$ , we first clear Equation (1) of fractions and regroup in powers of $x$ , obtaining 

$$
5 x - 3 = A (x - 3) + B (x + 1) = (A + B) x - 3 A + B.
$$

This will be an identity in $x$ if and only if the coefficients of like powers of $x$ on the two sides are equal: 

$$
A + B = 5, \quad - 3 A + B = - 3.
$$

Solving these equations simultaneously gives A = 2 and B = 3. 

#### General Description of the Method

Success in writing a rational function $f(x)/g(x)$ as a sum of partial fractions depends on three things: 

- The degree of $f(x)$ must be less than the degree of $g(x)$ . That is, the fraction must be proper. If it isn't, divide $f(x)$ by $g(x)$ and work with the remainder term. Example 3 of this section illustrates such a case. 

- We must know the factors of $g(x)$ . In theory, any polynomial with real coefficients can be written as a product of real linear factors and real quadratic factors. In practice, the factors may be hard to find. 

- The values of the undetermined coefficients form a system of $n$ linear equations in $n$ unknowns. For large $n$ , solving such systems may require linear algebra methods (such as Gaussian Elimination). 

Here is how we find the partial fractions of a proper fraction $f(x)/g(x)$ when the factors of g are known. A quadratic polynomial (or factor) is irreducible if it cannot be written as the product of two linear factors with real coefficients. That is, the polynomial has no real roots. 

#### Method of Partial Fractions When $f(x) / g(x)$ Is Proper


1. Let $x - r$ be a linear factor of $g(x)$ . Suppose that $(x - r)^m$ is the highest power of $x - r$ that divides $g(x)$ . Then, to this factor, assign the sum of the $m$ partial fractions: 

$$
\frac {A _ {1}}{(x - r)} + \frac {A _ {2}}{(x - r) ^ {2}} + \dots + \frac {A _ {m}}{(x - r) ^ {m}}.
$$

Do this for each distinct linear factor of $g(x)$ . 


2. Let $x^{2} + px + q$ be an irreducible quadratic factor of $g(x)$ . In this case, $x^{2} + px + q$ has no real roots. Suppose that $(x^{2} + px + q)^{n}$ is the highest power of this factor that divides $g(x)$ . Then, to this factor, assign the sum of the n partial fractions: 

$$
\frac {B _ {1} x + C _ {1}}{\left(x ^ {2} + p x + q\right)} + \frac {B _ {2} x + C _ {2}}{\left(x ^ {2} + p x + q\right) ^ {2}} + \dots + \frac {B _ {n} x + C _ {n}}{\left(x ^ {2} + p x + q\right) ^ {n}}.
$$

Do this for each distinct quadratic factor of $g(x)$ . 


3. Set the original fraction $f(x)/g(x)$ equal to the sum of all these partial fractions. Clear the resulting equation of fractions. 


4. Find the values of the undetermined coefficients. 

There are often multiple ways to find the values of the undetermined coefficients in Step 4. To find the values of the coefficients that satisfy Equation (1), we equated coefficients of like powers of x. In the next example, we instead will assign convenient values of x, leading to simple equations that we can solve for the undetermined coefficients. 

**EXAMPLE 1** Use partial fractions to evaluate

$$
\int \frac {x ^ {2} + 4 x + 1}{(x - 1) (x + 1) (x + 3)} d x.
$$

**Solution** Note that each of the factors $(x - 1)$ , $(x + 1)$ , and $(x + 3)$ is raised only to the first power. Therefore, the partial fraction decomposition has the form 

$$
\frac {x ^ {2} + 4 x + 1}{(x - 1) (x + 1) (x + 3)} = \frac {A}{x - 1} + \frac {B}{x + 1} + \frac {C}{x + 3}.
$$

To find the values of the undetermined coefficients A, B, and C, we clear fractions and get 

$$
x ^ {2} + 4 x + 1 = A (x + 1) (x + 3) + B (x - 1) (x + 3) + C (x - 1) (x + 1).
$$

On the right side, we notice that a factor $(x - 1)$ is present in all terms except for the one containing A. Therefore, letting x = 1 allows us to solve for A. 

$$
x = 1: \quad 1 ^ {2} + 4 (1) + 1 = A (2) (4) + B (0) + C (0)
$$

$$
6 = 8 A
$$

$$
A = \frac {3}{4}
$$

In a similar manner, we can let x equal -1 to find B or -3 to find C. 

$$
\begin{array}{r l} x = - 1: & (- 1) ^ {2} + 4 (- 1) + 1 = A (0) + B (- 2) (2) + C (0) \\ & - 2 = - 4 B \end{array}
$$

$$
B = \frac {1}{2}
$$

$$
\begin{array}{r l} x = - 3: \quad & (- 3) ^ {2} + 4 (- 3) + 1 = A (0) + B (0) + C (- 4) (- 2) \\ & - 2 = 8 C \end{array}
$$

$$
C = - \frac {1}{4}
$$

Hence we have 

$$
\begin{array}{c} \int \frac {x ^ {2} + 4 x + 1}{(x - 1) (x + 1) (x + 3)} d x = \int \left[ \frac {3}{4} \frac {1}{x - 1} + \frac {1}{2} \frac {1}{x + 1} - \frac {1}{4} \frac {1}{x + 3} \right] d x \\ = \frac {3}{4} \ln | x - 1 | + \frac {1}{2} \ln | x + 1 | - \frac {1}{4} \ln | x + 3 | + K, \end{array}
$$

where K is the arbitrary constant of integration (we call it K here to avoid confusion with the undetermined coefficient we labeled as C). 

You can solve for the undetermined coefficients $(A, B, \text{etc.})$ by equating coefficients of like powers of x or by assigning convenient values to x. You should choose the method that is most convenient for the problem at hand. 

**EXAMPLE 2** Use partial fractions to evaluate

$$
\int \frac {6 x + 7}{(x + 2) ^ {2}} d x.
$$

**Solution** First we express the integrand as a sum of partial fractions with undetermined coefficients. 

$$
\begin{array}{r l} \frac {6 x + 7}{(x + 2) ^ {2}} = \frac {A}{x + 2} + \frac {B}{(x + 2) ^ {2}} & \text { Two   terms   because } (x + 2) \text { is   squared } \\ 6 x + 7 = A (x + 2) + B & \text { Multiply   both   sides   by } (x + 2) ^ {2}. \\ = A x + (2 A + B) \end{array}
$$

Equating coefficients of corresponding powers of x gives 

$$
A = 6 \quad \text { and } \quad 2 A + B = 1 2 + B = 7, \quad \text { or } \quad A = 6 \quad \text { and } \quad B = - 5.
$$

Therefore, 

$$
\begin{array}{l} \int \frac {6 x + 7}{(x + 2) ^ {2}} d x = \int \left(\frac {6}{x + 2} - \frac {5}{(x + 2) ^ {2}}\right) d x \\ \qquad = 6 \int \frac {d x}{x + 2} - 5 \int (x + 2) ^ {- 2} d x \\ \qquad = 6 \ln | x + 2 | + 5 (x + 2) ^ {- 1} + C. \end{array}
$$

The next example shows how to handle the case when $f(x)/g(x)$ is an improper fraction. It is a case where the degree of f is larger than the degree of g. 

**EXAMPLE 3** Use partial fractions to evaluate

$$
\int {\frac {2 x ^ {3} - 4 x ^ {2} - x - 3}{x ^ {2} - 2 x - 3}} d x.
$$

**Solution** First we divide the denominator into the numerator to get a polynomial plus a proper fraction. 

$$
\begin{array}{c} x ^ {2} - 2 x - 3 \overline {{) 2 x ^ {3} - 4 x ^ {2} - x - 3}} \\ \underline {{2 x ^ {3} - 4 x ^ {2} - 6 x}} \\ 5 x - 3 \end{array}
$$

Then we write the improper fraction as a polynomial plus a proper fraction. 

$$
\frac {2 x ^ {3} - 4 x ^ {2} - x - 3}{x ^ {2} - 2 x - 3} = 2 x + \frac {5 x - 3}{x ^ {2} - 2 x - 3}
$$

We found the partial fraction decomposition of the fraction on the right in the opening example, so 

$$
\begin{array}{r l} \int \frac {2 x ^ {3} - 4 x ^ {2} - x - 3}{x ^ {2} - 2 x - 3} d x & = \int 2 x d x + \int \frac {5 x - 3}{x ^ {2} - 2 x - 3} d x \\ & = \int 2 x d x + \int \frac {2}{x + 1} d x + \int \frac {3}{x - 3} d x \\ & = x ^ {2} + 2 \ln | x + 1 | + 3 \ln | x - 3 | + C. \end{array}
$$

**EXAMPLE 4** Use partial fractions to evaluate 

$$
\int \frac {- 2 x + 4}{(x ^ {2} + 1) (x - 1) ^ {2}} d x.
$$

**Solution** The denominator has an irreducible quadratic factor $x^{2} + 1$ as well as a repeated linear factor $(x - 1)^{2}$ , so we write 

$$
\frac {- 2 x + 4}{(x ^ {2} + 1) (x - 1) ^ {2}} = \frac {A x + B}{x ^ {2} + 1} + \frac {C}{x - 1} + \frac {D}{(x - 1) ^ {2}}.\tag{2}
$$

Clearing the equation of fractions gives 

$$
\begin{array}{c} - 2 x + 4 = (A x + B) (x - 1) ^ {2} + C (x - 1) (x ^ {2} + 1) + D (x ^ {2} + 1) \\ = (A + C) x ^ {3} + (- 2 A + B - C + D) x ^ {2} \\ \quad + (A - 2 B + C) x + (B - C + D). \end{array}
$$

Equating coefficients of like terms gives 

$$
\text { Coefficients   of } x ^ {3} \colon \quad 0 = A + C
$$

$$
\text { Coefficients   of } x ^ {2}: \quad 0 = - 2 A + B - C + D
$$

$$
\text { Coefficients   of } x ^ {1} \colon - 2 = A - 2 B + C
$$

$$
\text { Coefficients   of } x ^ {0} \colon \quad 4 = B - C + D
$$

We solve these equations simultaneously to find the values of A, B, C, and D. 

$$
- 4 = - 2 A, \quad A = 2 \quad \text {   Subtract   fourth   equation   from   second.   }
$$

$$
C = - A = - 2 \quad \text {   From   the   first   equation   }
$$

$$
B = (A + C + 2) / 2 = 1 \quad \text {   From   the   third   equation   and   } C = - A
$$

$$
D = 4 - B + C = 1. \quad \text {   From   the   fourth   equation   }
$$

We substitute these values into Equation (2), obtaining 

$$
\frac {- 2 x + 4}{(x ^ {2} + 1) (x - 1) ^ {2}} = \frac {2 x + 1}{x ^ {2} + 1} - \frac {2}{x - 1} + \frac {1}{(x - 1) ^ {2}}.
$$

Finally, using the expansion above, we can integrate: 

$$
\begin{array}{l} \int \frac {- 2 x + 4}{(x ^ {2} + 1) (x - 1) ^ {2}} d x = \int \left(\frac {2 x + 1}{x ^ {2} + 1} - \frac {2}{x - 1} + \frac {1}{(x - 1) ^ {2}}\right) d x \\ \qquad = \int \left(\frac {2 x}{x ^ {2} + 1} + \frac {1}{x ^ {2} + 1} - \frac {2}{x - 1} + \frac {1}{(x - 1) ^ {2}}\right) d x \\ \qquad = \ln (x ^ {2} + 1) + \tan^ {- 1} x - 2 \ln | x - 1 | - \frac {1}{x - 1} + K. \end{array}
$$

We use the letter K instead of C to represent an arbitrary constant here because we have already used C to represent a variable in the partial fraction representation. 

**EXAMPLE 5** Use partial fractions to evaluate

$$
\int \frac {d x}{x (x ^ {2} + 1) ^ {2}}.
$$

**Solution** The form of the partial fraction decomposition is 

$$
{\frac {1}{x (x ^ {2} + 1) ^ {2}}} = {\frac {A}{x}} + {\frac {B x + C}{x ^ {2} + 1}} + {\frac {D x + E}{(x ^ {2} + 1) ^ {2}}}.
$$

Multiplying by $x(x^{2} + 1)^{2}$ , we have 

$$
\begin{array}{l} 1 = A (x ^ {2} + 1) ^ {2} + (B x + C) x (x ^ {2} + 1) + (D x + E) x \\ \quad = A (x ^ {4} + 2 x ^ {2} + 1) + B (x ^ {4} + x ^ {2}) + C (x ^ {3} + x) + D x ^ {2} + E x \\ \quad = (A + B) x ^ {4} + C x ^ {3} + (2 A + B + D) x ^ {2} + (C + E) x + A. \end{array}
$$

If we equate coefficients, we get the system 

$$
A + B = 0, \quad C = 0, \quad 2 A + B + D = 0, \quad C + E = 0, \quad A = 1.
$$

Solving this system gives A = 1, B = -1, C = 0, D = -1, and E = 0. Thus, 

**HISTORICAL BIOGRAPHY Oliver Heaviside (1850–1925)**

Heaviside studied electricity and languages on his own. He was able to simplify Maxwell's 20 equations into the two we now call Maxwell's equations. Heaviside's contributions in mathematics are in the areas of vector algebra and vector calculus. 

To know more, visit the companion Website. 

$$
\begin{array}{l} \int \frac {d x}{x (x ^ {2} + 1) ^ {2}} = \int \left[ \frac {1}{x} + \frac {- x}{x ^ {2} + 1} + \frac {- x}{(x ^ {2} + 1) ^ {2}} \right] d x \\ = \int \frac {d x}{x} - \int \frac {x d x}{x ^ {2} + 1} - \int \frac {x d x}{(x ^ {2} + 1) ^ {2}} \\ = \int \frac {d x}{x} - \frac {1}{2} \int \frac {d u}{u} - \frac {1}{2} \int \frac {d u}{u ^ {2}} \quad u = x ^ {2} + 1, \\ = \ln | x | - \frac {1}{2} \ln | u | + \frac {1}{2 u} + K \\ = \ln | x | - \frac {1}{2} \ln (x ^ {2} + 1) + \frac {1}{2 (x ^ {2} + 1)} + K \\ = \ln \frac {| x |}{\sqrt {x ^ {2} + 1}} + \frac {1}{2 (x ^ {2} + 1)} + K. \end{array}
$$

#### Determining Coefficients by Differentiating

Another way to determine the constants that appear in partial fractions is to differentiate, as in the next example. 

**EXAMPLE 6** Find $A, B$ , and $C$ in the equation 

$$
\frac {x - 1}{(x + 1) ^ {3}} = \frac {A}{x + 1} + \frac {B}{(x + 1) ^ {2}} + \frac {C}{(x + 1) ^ {3}}.
$$

**Solution** We first clear fractions: 

$$
x - 1 = A (x + 1) ^ {2} + B (x + 1) + C.
$$

Substituting $x = -1$ shows $C = -2$ . We then differentiate both sides with respect to $x$ , obtaining 

$$
1 = 2 A (x + 1) + B.
$$

Substituting $x = -1$ shows $B = 1$ . We differentiate again to get $0 = 2A$ , which shows $A = 0$ . Hence, 

$$
\frac {x - 1}{(x + 1) ^ {3}} = \frac {1}{(x + 1) ^ {2}} - \frac {2}{(x + 1) ^ {3}}.
$$

### EXERCISES 8.5

#### Expanding Quotients into Partial Fractions

Expand the quotients in Exercises 1–8 by partial fractions.
1. $\frac{5x - 13}{(x - 3)(x - 2)}$

2. $\frac{5x - 7}{x^{2} - 3x + 2}$

3. $\frac{x + 4}{(x + 1)^{2}}$

4. $\frac{2x + 2}{x^{2} - 2x + 1}$

5. $\frac{z + 1}{z^{2}(z - 1)}$

6. $\frac{z}{z^{3} - z^{2} - 6z}$

7. $\frac{t^{2} + 8}{t^{2} - 5t + 6}$

8. $\frac{t^{4} + 9}{t^{4} + 9t^{2}}$

Nonrepeated Linear Factors
In Exercises 9–16, express the integrand as a sum of partial fractions and evaluate the integrals.
9. $\int\frac{dx}{1-x^{2}}$

10. $\int\frac{dx}{x^{2}+2x}$

11. $\int\frac{x+4}{x^{2}+5x-6}dx$

12. $\int\frac{2x+1}{x^{2}-7x+12}dx$

13. $\int_{4}^{8}\frac{y dy}{y^{2}-2y-3}$

14. $\int_{1/2}^{1}\frac{y+4}{y^{2}+y}dy$

15. $\int\frac{dt}{t^{3}+t^{2}-2t}$

16. $\int\frac{x+3}{2x^{3}-8x}dx$

#### Repeated Linear Factors

In Exercises 17–20, express the integrand as a sum of partial fractions and evaluate the integrals. 

$$
\int_ {0} ^ {1} \frac {x ^ {3} d x}{x ^ {2} + 2 x + 1}
$$

18. $\int_{-1}^{0}\frac{x^3dx}{x^2 - 2x + 1}$ 

19. $\int \frac{dx}{(x^2 - 1)^2}$ 

20. $\int \frac{x^2 dx}{(x - 1)(x^2 + 2x + 1)}$ 

In Exercises 21–32, express the integrand as a sum of partial fractions and evaluate the integrals.

21. $\int_{0}^{1}\frac{dx}{(x+1)(x^{2}+1)}$

22. $\int_{1}^{\sqrt{3}}\frac{3t^{2}+t+4}{t^{3}+t}dt$

23. $\int\frac{y^{2}+2y+1}{(y^{2}+1)^{2}}dy$

24. $\int\frac{8x^{2}+8x+2}{(4x^{2}+1)^{2}}dx$

25. $\int\frac{2s+2}{(s^{2}+1)(s-1)^{3}}ds$

26. $\int\frac{s^{4}+81}{s(s^{2}+9)^{2}}ds$

27. $\int\frac{x^{2}-x+2}{x^{3}-1}dx$

28. $\int\frac{1}{x^{4}+x}dx$

29. $\int\frac{x^{2}}{x^{4}-1}dx$

30. $\int\frac{x^{2}+x}{x^{4}-3x^{2}-4}dx$

31. $\int \frac{2\theta^3 + 5\theta^2 + 8\theta + 4}{(\theta^2 + 2\theta + 2)^2} d\theta$ 

32. $\int \frac{\theta^4 - 4\theta^3 + 2\theta^2 - 3\theta + 1}{(\theta^2 + 1)^3} d\theta$ 

#### Improper Fractions

In Exercises 33–38, perform long division on the integrand, write the proper fraction as a sum of partial fractions, and then evaluate the integral.

33. $\int\frac{2x^{3}-2x^{2}+1}{x^{2}-x}dx$

34. $\int\frac{x^{4}}{x^{2}-1}dx$

35. $\int\frac{9x^{3}-3x+1}{x^{3}-x^{2}}dx$

36. $\int\frac{16x^{3}}{4x^{2}-4x+1}dx$

37. $\int\frac{y^{4}+y^{2}-1}{y^{3}+y}dy$

38. $\int\frac{2y^{4}}{y^{3}-y^{2}+y-1}dy$

#### Evaluating Integrals

Evaluate the integrals in Exercises 39–54. 

39. $\int \frac{e^t dt}{e^{2t} + 3e^t + 2}$

40. $\int \frac{e^{4t} + 2e^{2t} - e^t}{e^{2t} + 1} dt$

41. $\int \frac{\cos ydy}{\sin^2y + \sin y - 6}$ 

42. $\int \frac{\sin\theta d\theta}{\cos^2\theta + \cos\theta - 2}$ 

43. $\int \frac{(x - 2)^2\tan^{-1}(2x) - 12x^3 - 3x}{(4x^2 + 1)(x - 2)^2} dx$ 

44. $\int \frac{(x + 1)^2\tan^{-1}(3x) + 9x^3 + x}{(9x^2 + 1)(x + 1)^2} dx$ 

45. $\int \frac{1}{x^{3 / 2} - \sqrt{x}} dx$ 

46. $\int \frac{1}{(x^{1/3} - 1)\sqrt{x}} dx$ (Hint: Let $x = u^6$ .) 

47. $\int \frac{\sqrt{x + 1}}{x} dx$

48. $\int \frac{1}{x\sqrt{x + 9}} dx$ (Hint: Let $x + 1 = u^2$ .)

49. $\int \frac{1}{x(x^4 + 1)} dx$ (Hint: Multiply by $\frac{x^3}{x^3}$ .) 

50. $\int \frac{1}{x^6(x^5 + 4)} dx$ 

51. $\int \frac{1}{\cos 2\theta \sin\theta} d\theta$ 

52. $\int \frac{1}{\cos\theta + \sin 2\theta} d\theta$ 

53. $\int \frac{\sqrt{1 + \sqrt{x}}}{x} dx$ 

54. $\int \frac{\sqrt{x}}{\sqrt{2 - \sqrt{x}} + \sqrt{x}} dx$ 

Use any method to evaluate the integrals in Exercises 55–66.
55. $\int\frac{x^{3}-2x^{2}-3x}{x+2}dx$

56. $\int\frac{x+2}{x^{3}-2x^{2}-3x}dx$

57. $\int\frac{2^{x}-2^{-x}}{2^{x}+2^{-x}}dx$

58. $\int\frac{2^{x}}{2^{2x}+2^{x}-2}dx$

59. $\int\frac{1}{x^{4}-1}dx$

60. $\int\frac{x^{4}-1}{x^{5}-5x+1}dx$

61. $\int\frac{\ln x+2}{x(\ln x+1)(\ln x+3)}dx$

62. $\int \frac{2}{x(\ln x - 2)^3} dx$

63. $\int \frac{1}{\sqrt{x^2 - 1}} dx$

64. $\int \frac{x}{x + \sqrt{x^2 + 2}} dx$

65. $\int x^5\sqrt{x^3 + 1} dx$

66. $\int x^2\sqrt{1 - x^2} dx$

#### Initial Value Problems

Solve the initial value problems in Exercises 67–70 for x as a function of t.

67. $(t^{2}-3t+2)\frac{dx}{dt}=1$ (t>2), $x(3)=0$

68. $(3t^{4}+4t^{2}+1)\frac{dx}{dt}=2\sqrt{3}$ , $x(1)=-\pi\sqrt{3}/4$

69. $(t^{2}+2t)\frac{dx}{dt}=2x+2$ (t,x>0), $x(1)=1$

70. $(t+1)\frac{dx}{dt}=x^{2}+1$ (t>-1), $x(0)=0$

#### Applications and Examples

In Exercises 71 and 72, find the volume of the solid generated by revolving the shaded region about the indicated axis. 

71. The $x$ -axis 

![教材插图](/books/thomas-calculus/assets/79ca408e4a9cbb896e108f2e8a0885fb86c69ea733876b8995c60d221de16654.jpg)


72. The $y$ -axis 

![教材插图](/books/thomas-calculus/assets/a733c2680a86a8d425a688bd037c898d60765859f50b7cbfd136347002c8b98b.jpg)


73. Find the length of the curve $y = \ln(1 - x^{2})$ , $0 \leq x \leq \frac{1}{2}$ . 

74. Evaluate $\int \sec \theta d\theta$ by a. multiplying by $\frac{\sec \theta + \tan \theta}{\sec \theta + \tan \theta}$ and then using a $u$ -substitution b. writing the integral as $\int \frac{1}{\cos \theta} d\theta$ . Then multiply by $\frac{\cos \theta}{\cos \theta}$ , use a trigonometric identity and a $u$ -substitution, and finally integrate using partial fractions. 

![教材插图](/books/thomas-calculus/assets/ad43258b4e85ebfe3999fef967fb0e7178e3ae5f29e7eb9276d48f506ae6af28.jpg)


T 75. Find, to two decimal places, the $x$ -coordinate of the centroid of the region in the first quadrant bounded by the $x$ -axis, the curve $y = \arctan x$ , and the line $x = \sqrt{3}$ . 

T 76. Find the $x$ -coordinate of the centroid of this region to two decimal places. 

![教材插图](/books/thomas-calculus/assets/4c9567bc334e00e1430676b862e2082dc1879e3bfe5cc3cea3ed8362ca29301b.jpg)


77. Social diffusion Sociologists sometimes use the phrase “social diffusion” to describe the way information spreads through a population. The information might be a rumor, a cultural fad, or news about a technical innovation. In a sufficiently large population, the number of people x who have the information is treated as a differentiable function of time t, and the rate of diffusion, dx/dt, is assumed to be proportional to the number of people who have the information times the number of people who do not. This leads to the equation 

$$
\frac {d x}{d t} = k x (N - x),
$$

where N is the number of people in the population. 

Suppose t is in days, k = 1/250, and two people start a rumor at time t = 0 in a population of N = 1000 people. 

a. Find x as a function of t. 

b. When will half the population have heard the rumor? (This is when the rumor will be spreading the fastest.) 

78. Second-order chemical reactions Many chemical reactions are the result of the interaction of two molecules that undergo a change to produce a new product. The rate of the reaction typically depends on the concentrations of the two kinds of molecules. If $a$ is the amount of substance $A$ and $b$ is the amount of substance $B$ at time $t = 0$ , and if $x$ is the amount of product at time $t$ , then the rate of formation of $x$ may be given by the differential equation 

$$
\frac {d x}{d t} = k (a - x) (b - x),
$$

or 

$$
{\frac {1}{(a - x) (b - x)}} {\frac {d x}{d t}} = k,
$$

where k is a constant for the reaction. Integrate both sides of this equation to obtain a relation between x and t (a) if a = b, and (b) if $a \neq b$ . Assume in each case that x = 0 when t = 0. 

## 8.6 Integral Tables and Computer Algebra Systems

In this section we discuss how to use tables and computer algebra systems (CAS) to evaluate integrals. 

### Integral Tables

A Brief Table of Integrals is provided at the back of the text, after the index. (More extensive tables appear in compilations such as CRC Mathematical Tables, which contain thousands of integrals.) The integration formulas are stated in terms of constants a, b, c, m, n, and so on. These constants can usually assume any real value and need not be integers. Occasional limitations on their values are stated with the formulas. Formula 21 requires $n \neq -1$ , for example, and Formula 27 requires $n \neq -2$ . 

The formulas also assume that the constants do not take on values that require dividing by zero or taking even roots of negative numbers. For example, Formula 24 assumes that $a \neq 0$ , and Formulas 29a and 29b cannot be used unless b is positive. 

**EXAMPLE 1** Find 

$$
\int x (2 x + 5) ^ {- 1} d x.
$$

**Solution** We use Formula 24 at the back of the text (not 22, which requires $n \neq -1$ ): 

$$
\int x (a x + b) ^ {- 1} d x = \frac {x}{a} - \frac {b}{a ^ {2}} \ln | a x + b | + C.
$$

With $a = 2$ and $b = 5$ , we have 

$$
\int x (2 x + 5) ^ {- 1} d x = \frac {x}{2} - \frac {5}{4} \ln | 2 x + 5 | + C.
$$

**EXAMPLE 2** Find 

$$
\int \frac {d x}{x \sqrt {2 x - 4}}.
$$

**Solution** We use Formula 29b: 

$$
\int {\frac {d x}{x \sqrt {a x - b}}} = \frac {2}{\sqrt {b}} \arctan {\sqrt {\frac {a x - b}{b}}} + C.
$$

With $a = 2$ and $b = 4$ , we have 

$$
\int \frac {d x}{x \sqrt {2 x - 4}} = \frac {2}{\sqrt {4}} \arctan \sqrt {\frac {2 x - 4}{4}} + C = \arctan \sqrt {\frac {x - 2}{2}} + C.
$$

**EXAMPLE 3** Find 

$$
\int x \arcsin x d x.
$$

**Solution** We begin by using Formula 106: 

$$
\int x ^ {n} \arcsin a x d x = \frac {x ^ {n + 1}}{n + 1} \arcsin a x - \frac {a}{n + 1} \int \frac {x ^ {n + 1} d x}{\sqrt {1 - a ^ {2} x ^ {2}}}, n \neq - 1.
$$

With $n = 1$ and $a = 1$ , we have 

$$
\int x \arcsin x d x = \frac {x ^ {2}}{2} \arcsin x - \frac {1}{2} \int \frac {x ^ {2} d x}{\sqrt {1 - x ^ {2}}}.
$$

Next we use Formula 49 to find the integral on the right: 

$$
\int \frac {x ^ {2}}{\sqrt {a ^ {2} - x ^ {2}}} d x = \frac {a ^ {2}}{2} \arcsin \left(\frac {x}{a}\right) - \frac {1}{2} x \sqrt {a ^ {2} - x ^ {2}} + C.
$$

With a = 1, 

$$
\int \frac {x ^ {2} d x}{\sqrt {1 - x ^ {2}}} = \frac {1}{2} \arcsin x - \frac {1}{2} x \sqrt {1 - x ^ {2}} + C.
$$

The combined result is 

$$
\begin{array}{r l} \int x \arcsin x d x & = \frac {x ^ {2}}{2} \arcsin x - \frac {1}{2} \left(\frac {1}{2} \arcsin x - \frac {1}{2} x \sqrt {1 - x ^ {2}} + C\right) \\ & = \left(\frac {x ^ {2}}{2} - \frac {1}{4}\right) \arcsin x + \frac {1}{4} x \sqrt {1 - x ^ {2}} + C ^ {\prime}. \end{array}
$$

### Reduction Formulas

The time required for repeated integrations by parts can sometimes be shortened by applying reduction formulas like the following. 

$$
\int \tan^ {n} x d x = \frac {1}{n - 1} \tan^ {n - 1} x - \int \tan^ {n - 2} x d x\tag{1}
$$

$$
\int (\ln x) ^ {n} d x = x (\ln x) ^ {n} - n \int (\ln x) ^ {n - 1} d x\tag{2}
$$

$$
\int \sin^ {n} x \cos^ {m} x d x = - \frac {\sin^ {n - 1} x \cos^ {m + 1} x}{m + n} + \frac {n - 1}{m + n} \int \sin^ {n - 2} x \cos^ {m} x d x (n \neq - m).\tag{3}
$$

By applying such a formula repeatedly, we can eventually express the original integral in terms of a power low enough to be evaluated directly. The next example illustrates this procedure. 

**EXAMPLE 4** Find 

$$
\int \tan^ {5} x d x.
$$

**Solution** We apply Equation (1) with n = 5 to get 

$$
\int \tan^ {5} x d x = \frac {1}{4} \tan^ {4} x - \int \tan^ {3} x d x.
$$

We then apply Equation (1) again, with $n = 3$ , to evaluate the remaining integral: 

$$
\int \tan^ {3} x d x = \frac {1}{2} \tan^ {2} x - \int \tan x d x = \frac {1}{2} \tan^ {2} x + \ln | \cos x | + C _ {1}.
$$

The combined result is 

$$
\int \tan^ {5} x d x = \frac {1}{4} \tan^ {4} x - \frac {1}{2} \tan^ {2} x - \ln | \cos x | + C.
$$

As their form suggests, reduction formulas are derived using integration by parts. (See Example 5 in Section 8.3.) 

### Integration with a CAS

A powerful capability of computer algebra systems is their ability to integrate symbolically. This is performed with the integrate command specified by the particular system (for example, int in Maple, Integrate in Mathematica). 

**EXAMPLE 5** Suppose that you want to evaluate the indefinite integral of the function 

$$
f (x) = x ^ {2} \sqrt {a ^ {2} + x ^ {2}}.
$$

Using Maple, you first define or name the function: 

$$
f := x ^ {\wedge} 2 * \operatorname{sqrt} (a ^ {\wedge} 2 + x ^ {\wedge} 2);
$$

Then you use the integrate command on f, identifying the variable of integration: 

$$
\operatorname{int} (f, x);
$$

Maple returns the answer 

$$
\frac {x \left(a ^ {2} + x ^ {2}\right) ^ {3 / 2}}{4} - \frac {a ^ {2} x \sqrt {a ^ {2} + x ^ {2}}}{8} - \frac {a ^ {4} \ln \left(x + \sqrt {a ^ {2} + x ^ {2}}\right)}{8}
$$

If you want to see whether the answer can be simplified, enter 

$$
\text { simplify } (\%);
$$

Maple returns 

$$
- \frac {a ^ {4} \ln (x + \sqrt {a ^ {2} + x ^ {2}})}{8} + \frac {x \sqrt {a ^ {2} + x ^ {2}} (a ^ {2} + 2 x ^ {2})}{8}
$$

If you want the definite integral for $0 \leq x \leq \pi/2$ , you can use the format 

$$
\operatorname{int} (f, x = 0.. \mathrm{Pi} / 2);
$$

Maple will return the expression 

$$
\begin{array}{r l} \frac {a ^ {4} \ln (a ^ {2})}{1 6} + \frac {\pi (\pi^ {2} + 4 a ^ {2}) ^ {3 / 2}}{6 4} - \frac {a ^ {2} \pi \sqrt {\pi^ {2} + 4 a ^ {2}}}{3 2} + \frac {a ^ {4} \ln (2)}{8} \\ - \frac {a ^ {4} \ln (\pi + \sqrt {\pi^ {2} + 4 a ^ {2}})}{8} \end{array}
$$

You can also find the definite integral for a particular value of the constant $a$ : 

$$
\begin{array}{c} > a := 1; \\ > \operatorname{int} (f, x = 0.. 1); \end{array}
$$

Maple returns the numerical answer 

$$
\frac {3}{8} \sqrt {2} + \frac {1}{8} \ln (\sqrt {2} - 1).
$$

**EXAMPLE 6** Use a CAS to find 

$$
\int \sin^ {2} x \cos^ {3} x d x.
$$

**Solution** With Maple, we have the entry 

$$
\operatorname{int} ((\sin^ {\wedge} 2) (x) * (\cos^ {\wedge} 3) (x), x);
$$

with the immediate return 

$$
- \frac {1}{5} \sin (x) \cos (x) ^ {4} + \frac {1}{1 5} \cos (x) ^ {2} \sin (x) + \frac {2}{1 5} \sin (x).
$$

Computer algebra systems vary in how they process integrations. We used Maple in Examples 5 and 6. Mathematica would have returned somewhat different results: 

1. In Example 5, given 

$$
I n [ 1 ] := \text { Integrate } [ x ^ {\wedge} 2 * \text { Sqrt } [ a ^ {\wedge} 2 + x ^ {\wedge} 2 ], x ]
$$

Mathematica returns 

$$
O u t [ 1 ] = \frac {1}{8} \sqrt {a ^ {2} + x ^ {2}} \left(a ^ {2} x + 2 x ^ {3} - \frac {a ^ {3} \sinh^ {- 1} \left(\frac {x}{a}\right)}{\sqrt {1 + \frac {x ^ {2}}{a ^ {2}}}}\right)
$$

without having to simplify an intermediate result. The answer is different from, but equivalent to, Formula 36 in the integral tables. 

2. The Mathematica answer to the integral 

$$
I n [ 2 ] := \text { Integrate } [ \text { Sin } [ x ] ^ {\wedge} 2 * \text { Cos } [ x ] ^ {\wedge} 3, x ]
$$

in Example 6 is 

$$
O u t [ 2 ] = \frac {\sin [ x ]}{8} - \frac {1}{4 8} \sin [ 3 x ] - \frac {1}{8 0} \sin [ 5 x ]
$$

differing from the Maple answer. Both answers are correct. 

Although a CAS is very powerful and can aid us in solving difficult problems, each CAS has its own limitations. There are even situations where a CAS may further complicate a problem (in the sense of producing an answer that is extremely difficult to use or interpret). Note, too, that neither Maple nor Mathematica returns an arbitrary constant +C. On the other hand, a little mathematical thinking on your part may reduce the problem to one that is quite easy to handle. We provide an example in Exercise 67. 

### Nonelementary Integrals

Many functions have antiderivatives that cannot be expressed using the standard functions that we have encountered, such as polynomials, trigonometric functions, and exponential functions. Integrals of functions that do not have elementary antiderivatives are called nonelementary integrals. These integrals can sometimes be expressed with infinite series (Chapter 9) or approximated using numerical methods (Section 8.7). Examples of nonelementary integrals include the error function (which measures the probability of random errors) 

$$
\operatorname{erf} (x) = \frac {2}{\sqrt {\pi}} \int_ {0} ^ {x} e ^ {- t ^ {2}} d t
$$

and integrals such as 

$$
\int \sin x ^ {2} d x \quad \text { and } \quad \int \sqrt {1 + x ^ {4}} d x
$$

that arise in engineering and physics. These and a number of others, such as 

$$
\begin{array}{c c} \int \frac {e ^ {x}}{x} d x, & \int e ^ {(e ^ {x})} d x, \quad \int \frac {1}{\ln x} d x, \\ & \int \sqrt {1 - k ^ {2} \sin^ {2} x} d x, \quad 0 <   k <   1, \end{array} \quad \begin{array}{c c} \int \ln (\ln x) d x, & \int \frac {\sin x}{x} d x, \\ & 0 <   k <   1, \end{array}
$$

look so easy they tempt us to try them just to see how they turn out. It can be proved, however, that there is no way to express any of these integrals as finite combinations of elementary functions. The same applies to integrals that can be changed into these by substitution. The functions in these integrals all have antiderivatives, as a consequence of the Fundamental Theorem of Calculus, Part 1, because they are continuous. However, none of the antiderivatives are elementary. The integrals you are asked to evaluate in this chapter have elementary antiderivatives. 

### EXERCISES 8.6

#### Using Integral Tables

Use the table of integrals at the back of the text to evaluate the integrals in Exercises 1–26. 

1. $\int \frac{dx}{x\sqrt{x - 3}}$ 

2. $\int \frac{dx}{x\sqrt{x + 4}}$ 

3. $\int\frac{xdx}{\sqrt{x-2}}$ 

4. $\int \frac{x dx}{(2x + 3)^{3 / 2}}$ 

5. $\int x\sqrt{2x - 3} dx$ 

6. $\int x(7x + 5)^{3 / 2}dx$ 

7. $\int \frac{\sqrt{9 - 4x}}{x^2} dx$ 

8. $\int \frac{dx}{x^2\sqrt{4x - 9}}$ 

9. $\int x\sqrt{4x - x^2} dx$ 

10. $\int \frac{\sqrt{x - x^2}}{x} dx$ 

11. $\int \frac{dx}{x\sqrt{7 + x^2}}$ 

12. $\int \frac{dx}{x\sqrt{7 - x^2}}$ 

13. $\int \frac{\sqrt{4 - x^2}}{x} dx$ 

14. $\int \frac{\sqrt{x^2 - 4}}{x} dx$ 

15. $\int e^{2t}\cos 3tdt$ 

16. $\int e^{-3t}\sin 4tdt$ 

17. $\int x\arccos x dx$ 

18. $\int x\arctan x dx$ 

19. $\int x^{2}\arctan x dx$ 

20. $\int \frac{\tan^{-1}x}{x^2} dx$ 

21. $\int \sin 3x\cos 2xdx$ 

22. $\int \sin 2x\cos 3xdx$ 

23. $\int 8\sin 4t\sin \frac{t}{2} dt$ 

24. $\int \sin \frac{t}{3} \sin \frac{t}{6} dt$ 

25. $\int \cos \frac{\theta}{3}\cos \frac{\theta}{4} d\theta$ 

26. $\int \cos \frac{\theta}{2}\cos 7\theta d\theta$ 

#### Substitution and Integral Tables

In Exercises 27–40, use a substitution to change the integral into one you can find in the table. Then evaluate the integral.
27. $\int\frac{x^{3}+x+1}{(x^{2}+1)^{2}}dx$

28. $\int\frac{x^{2}+6x}{(x^{2}+3)^{2}}dx$

29. $\int\arcsin\sqrt{x}dx$

30. $\int\frac{\cos^{-1}\sqrt{x}}{\sqrt{x}}dx$

31. $\int\frac{\sqrt{x}}{\sqrt{1-x}}dx$

32. $\int\frac{\sqrt{2-x}}{\sqrt{x}}dx$

33. $\int \cot t\sqrt{1 - \sin^2t} dt, 0 < t < \pi / 2$ 

34. $\int \frac{dt}{\tan t\sqrt{4 - \sin^2t}}$ 

35. $\int \frac{dy}{y\sqrt{3 + (\ln y)^2}}$ 

36. $\int \tan^{-1}\sqrt{y} dy$ 

37. $\int \frac{1}{\sqrt{x^2 + 2x + 5}} dx$ (Hint: Complete the square.) 

38. $\int \frac{x^2}{\sqrt{x^2 - 4x + 5}} dx$ 

39. $\int \sqrt{5 - 4x - x^2} dx$

40. $\int x^{2}\sqrt{2x - x^{2}} dx$

Using Reduction Formulas
Use reduction formulas to evaluate the integrals in Exercises 41–50.
41. $\int \sin^{5} 2x dx$

42. $\int 8 \cos^{4} 2\pi t dt$

43. $\int \sin^{2} 2\theta \cos^{3} 2\theta d\theta$

44. $\int 2 \sin^{2} t \sec^{4} t dt$

45. $\int 4 \tan^{3} 2x dx$

46. $\int 8 \cot^{4} t dt$

47. $\int 2 \sec^{3} \pi x dx$

48. $\int 3 \sec^{4} 3x dx$

49. $\int \csc^{5} x dx$

50. $\int 16x^{3} (\ln x)^{2} dx$

Evaluate the integrals in Exercises 51–56 by making a substitution (possibly trigonometric) and then applying a reduction formula.

51. $\int e^{t} \sec^{3}(e^{t}-1)dt$

52. $\int \frac{\csc^{3}\sqrt{\theta}}{\sqrt{\theta}} d\theta$

53. $\int_{0}^{1} 2\sqrt{x^{2}+1} dx$

54. $\int_{0}^{\sqrt{3}/2} \frac{dy}{(1-y^{2})^{5/2}}$

55. $\int_{1}^{2} \frac{(r^{2}-1)^{3/2}}{r} dr$

56. $\int_{0}^{1/\sqrt{3}} \frac{dt}{(t^{2}+1)^{7/2}}$

#### Applications

57. Surface area Find the area of the surface generated by revolving the curve $y = \sqrt{x^{2} + 2}$ , $0 \leq x \leq \sqrt{2}$ , about the x-axis. 

58. Arc length Find the length of the curve $y = x^2$ , $0 \leq x \leq \sqrt{3} / 2$ . 

59. Centroid Find the centroid of the region cut from the first quadrant by the curve $y = 1 / \sqrt{x + 1}$ and the line $x = 3$ . 

60. Moment about y-axis A thin plate of constant density $\delta = 1$ occupies the region enclosed by the curve $y = 36/(2x + 3)$ and the line x = 3 in the first quadrant. Find the moment of the plate about the y-axis. 

61. Use the integral table and a calculator to find, to two decimal places, the area of the surface generated by revolving the curve $y = x^2$ , $-1 \leq x \leq 1$ , about the $x$ -axis. 

62. Volume The head of your firm's accounting department has asked you to find a formula she can use in a computer program to calculate the year-end inventory of gasoline in the company's tanks. A typical tank is shaped like a right circular cylinder of radius $r$ and length $L$ , mounted horizontally, as shown in the accompanying figure. The data come to the accounting office as depth measurements taken with a vertical measuring stick marked in centimeters. 

a. Show, in the notation of the figure, that the volume of gasoline that fills the tank to a depth $d$ is 

$$
V = 2 L \int_ {- r} ^ {- r + d} \sqrt {r ^ {2} - y ^ {2}} d y.
$$

b. Evaluate the integral. 

![教材插图](/books/thomas-calculus/assets/1562febd23cc4e296f429288b421f04fbe01c6d9a9413581e6980be7e4cbc773.jpg)


63. What is the largest value that 

$$
\int_ {a} ^ {b} \sqrt {x - x ^ {2}} d x
$$

can have for any $a$ and $b$ ? Give reasons for your answer. 

64. What is the largest value that 

$$
\int_ {a} ^ {b} x \sqrt {2 x - x ^ {2}} d x
$$

can have for any a and b? Give reasons for your answer. 

COMPUTER EXPLORATIONS 

In Exercises 65 and 66, use a CAS to perform the integrations. 

65. Evaluate the integrals 

a. $\int x\ln xdx$ b. $\int x^2\ln xdx$ c. $\int x^3\ln xdx.$ 

d. What pattern do you see? Predict the formula for $\int x^4\ln x dx$ and then see if you are correct by evaluating it with a CAS. 

e. What is the formula for $\int x^n\ln x dx, n \geq 1$ ? Check your answer using a CAS. 

66. Evaluate the integrals 

a. $\int \frac{\ln x}{x^2} dx$ 

b. $\int \frac{\ln x}{x^3} dx$ 

$$
\int \frac {\ln x}{x ^ {4}} d x.
$$

d. What pattern do you see? Predict the formula for 

$$
\int \frac {\ln x}{x ^ {5}} d x
$$

and then see if you are correct by evaluating it with a CAS. 

e. What is the formula for 

$$
\int \frac {\ln x}{x ^ {n}} d x, n \geq 2?
$$

Check your answer using a CAS. 

67. a. Use a CAS to evaluate 

$$
\int_ {0} ^ {\pi / 2} \frac {\sin^ {n} x}{\sin^ {n} x + \cos^ {n} x} d x,
$$

where n is an arbitrary positive integer. Does your CAS find the result? 

b. In succession, find the integral when $n = 1, 2, 3, 5$ , and 7. Comment on the complexity of the results. 

c. Now substitute $x = (\pi / 2) - u$ and add the new and old integrals. What is the value of 

$$
\int_ {0} ^ {\pi / 2} \frac {\sin^ {n} x}{\sin^ {n} x + \cos^ {n} x} d x?
$$

This exercise illustrates how a little mathematical ingenuity can sometimes solve a problem not immediately amenable to solution by a CAS. 

## 8.7 Numerical Integration

The antiderivatives of some functions, like $\sin(x^{2})$ , $1/\ln x$ , and $\sqrt{1 + x^{4}}$ , have no elementary formulas. When we cannot find a workable antiderivative for a function f that we have to integrate, we can partition the interval of integration, replace f by a closely fitting polynomial on each subinterval, integrate the polynomials, and add the results to approximate the definite integral of f. This procedure is an example of numerical integration. In this section we start by revisiting the Midpoint Rule, which we studied in Section 5.2. We then study two new methods, the Trapezoidal Rule and Simpson's Rule. A key goal in our analysis is to control the possible error that is introduced when computing an approximation to an integral. 

### Approximating Integrals with the Midpoint Rule

In Section 5.2 we introduced the Midpoint Rule to approximate a definite integral over an interval $[a, b]$ . The rule is based on subdividing $[a, b]$ into n equal subintervals, 

$$
[ x _ {0}, x _ {1} ], [ x _ {1}, x _ {2} ], \dots , [ x _ {n - 1}, x _ {n} ]
$$

each of width 

$$
\Delta x = \frac {b - a}{n}.
$$

We then approximate the integral using n rectangles, where the height of the kth rectangle is the value of f at the midpoint $c_{k} = (x_{k-1} + x_{k})/2$ of the kth subinterval $[x_{k-1}, x_{k}]$ . 

Midpoint Rule for Approximating a Definite Integral 

$$
\int_ {a} ^ {b} f (x) d x \approx \sum_ {k = 1} ^ {n} f \left(c _ {k}\right) \left(\frac {b - a}{n}\right) = \left[ f \left(c _ {1}\right) + f \left(c _ {2}\right) + \dots + f \left(c _ {n}\right) \right] \left(\frac {b - a}{n}\right)
$$

with $c_{k} = \frac{x_{k-1} + x_{k}}{2}$ and $x_{k} = a + k\left(\frac{b - a}{n}\right)$ . 

### Trapezoidal Approximations

The Trapezoidal Rule for the value of a definite integral is based on approximating the region between a curve and the $x$ -axis with trapezoids instead of rectangles, as in Figure 8.7. It is not necessary for the subdivision points $x_0, x_1, x_2, \ldots, x_n$ in the figure to be evenly spaced, but the resulting formula is simpler if they are. We therefore assume that the length of each subinterval is 

$$
\Delta x = \frac {b - a}{n}.
$$

The length $\Delta x = (b - a)/n$ is called the step size or mesh size. The area of the trapezoid that lies above the ith subinterval is 

$$
\Delta x \left(\frac {y _ {i - 1} + y _ {i}}{2}\right) = \frac {\Delta x}{2} (y _ {i - 1} + y _ {i}),
$$

![教材插图](/books/thomas-calculus/assets/f5b5649743b3eab897d52e0c1a34ce11ad2d07a17f870b38deba726fbc8d0e97.jpg)



FIGURE 8.7 The Trapezoidal Rule approximates short stretches of the curve $y = f(x)$ with line segments. To approximate the integral of f from a to b, we add the areas of the trapezoids made by vertically joining the ends of the segments to the x-axis.


where $y_{i-1} = f(x_{i-1})$ and $y_{i} = f(x_{i})$ . (See Figure 8.7.) The area below the curve $y = f(x)$ and above the x-axis is then approximated by adding the areas of all the trapezoids: 

$$
\begin{array}{l} T = \frac {1}{2} (y _ {0} + y _ {1}) \Delta x + \frac {1}{2} (y _ {1} + y _ {2}) \Delta x + \dots \\ \qquad + \frac {1}{2} (y _ {n - 2} + y _ {n - 1}) \Delta x + \frac {1}{2} (y _ {n - 1} + y _ {n}) \Delta x \\ \qquad = \Delta x \left(\frac {1}{2} y _ {0} + y _ {1} + y _ {2} + \dots + y _ {n - 1} + \frac {1}{2} y _ {n}\right) \\ \qquad = \frac {\Delta x}{2} (y _ {0} + 2 y _ {1} + 2 y _ {2} + \dots + 2 y _ {n - 1} + y _ {n}), \end{array}
$$

where 

$$
y _ {0} = f (a), \quad y _ {1} = f (x _ {1}), \dots , \quad y _ {n - 1} = f (x _ {n - 1}), \quad y _ {n} = f (b).
$$

The Trapezoidal Rule says: Use T to estimate the integral of f from a to b. 

![教材插图](/books/thomas-calculus/assets/88c2b56995c282b5529dfa71e3c6d6457c4bb96b6acbb4080b63ffbc2c59d3ca.jpg)



FIGURE 8.8 The trapezoidal approximation of the area under the graph of $y = x^2$ from $x = 1$ to $x = 2$ is a slight overestimate (Example 1).



TABLE 8.2


<table><tr><td>x</td><td><eq>y = x^{2}</eq></td></tr><tr><td>1</td><td>1</td></tr><tr><td><eq>\frac{5}{4}</eq></td><td><eq>\frac{25}{16}</eq></td></tr><tr><td><eq>\frac{6}{4}</eq></td><td><eq>\frac{36}{16}</eq></td></tr><tr><td><eq>\frac{7}{4}</eq></td><td><eq>\frac{49}{16}</eq></td></tr><tr><td>2</td><td>4</td></tr></table>

![教材插图](/books/thomas-calculus/assets/c3fbd0a1d27144539f94181f063ccd2b0f4fd64b0e0f70414f6c2308a1989a75.jpg)



FIGURE 8.9 Simpson's Rule approximates short stretches of the curve with parabolas.


The Trapezoidal Rule
To approximate $\int_{a}^{b}f(x)dx$ , use
[ T = \frac{\Delta x}{2}(y_0 + 2y_1 + 2y_2 + \cdots + 2y_{n-1} + y_n). ] 
The y's are the values of f at the partition points $x_{0}=a, x_{1}=a+\Delta x, x_{2}=a+2\Delta x, \ldots, x_{n-1}=a+(n-1)\Delta x, x_{n}=b,$ where $\Delta x = (b - a)/n.$ 

**EXAMPLE 1** Use the Trapezoidal Rule with n = 4 to estimate $\int_{1}^{2} x^{2} dx$ . Compare the estimate with the exact value. 

**Solution** Partition [1, 2] into four subintervals of equal length (Figure 8.8). Then evaluate $y = x^2$ at each partition point (Table 8.2). 

Using these $y$ -values, $n = 4$ , and $\Delta x = (2 - 1) / 4 = 1 / 4$ in the Trapezoidal Rule, we have 

$$
\begin{array}{r l} T & = \frac {\Delta x}{2} (y _ {0} + 2 y _ {1} + 2 y _ {2} + 2 y _ {3} + y _ {4}) \\ & = \frac {1}{8} \left(1 + 2 \left(\frac {2 5}{1 6}\right) + 2 \left(\frac {3 6}{1 6}\right) + 2 \left(\frac {4 9}{1 6}\right) + 4\right) \\ & = \frac {7 5}{3 2} = 2. 3 4 3 7 5. \end{array}
$$

Since the parabola is concave up, the approximating segments lie above the curve, giving each trapezoid slightly more area than the corresponding strip under the curve. The exact value of the integral is 

$$
\int_ {1} ^ {2} x ^ {2} d x = \left. \frac {x ^ {3}}{3} \right] _ {1} ^ {2} = \frac {8}{3} - \frac {1}{3} = \frac {7}{3}.
$$

The $T$ approximation overestimates the integral by about half a percent of its true value of 7/3. The percentage error is $(2.34375 - 7/3)/(7/3) \approx 0.00446$ , or $0.446\%$ . 

### Simpson's Rule: Approximations Using Parabolas

Another rule for approximating the definite integral of a continuous function results from using parabolas instead of the straight-line segments that produced trapezoids. As before, we partition the interval $[a, b]$ into n subintervals of equal length $h = \Delta x = (b - a)/n$ , but this time we require that n be an even number. On each consecutive pair of intervals we approximate the curve $y = f(x) \geq 0$ by a parabola, as shown in Figure 8.9. A typical parabola passes through three consecutive points $(x_{i-1}, y_{i-1})$ , $(x_i, y_i)$ , and $(x_{i+1}, y_{i+1})$ on the curve. 

Let's calculate the shaded area beneath a parabola passing through three consecutive points. To simplify our calculations, we first take the case where $x_0 = -h$ , $x_1 = 0$ , and $x_2 = h$ (Figure 8.10), where $h = \Delta x = (b - a) / n$ . The area under the parabola will be the same if we shift the $y$ -axis to the left or right. The parabola has an equation of the form 

$$
y = A x ^ {2} + B x + C,
$$

![教材插图](/books/thomas-calculus/assets/5a89c93f660596fd28ccb71812bc055ab93c32ad7e63fec9d275ca7f155e0b7a.jpg)



FIGURE 8.10 By integrating from -h to h, we find the shaded area to be


$$
\frac {h}{3} (y _ {0} + 4 y _ {1} + y _ {2}).
$$

so the area under it from x = -h to x = h is 

$$
\begin{array}{r l} A _ {p} & = \int_ {- h} ^ {h} (A x ^ {2} + B x + C) d x \\ & = \left[ \frac {A x ^ {3}}{3} + \frac {B x ^ {2}}{2} + C x \right] _ {- h} ^ {h} \\ & = \frac {2 A h ^ {3}}{3} + 2 C h = \frac {h}{3} (2 A h ^ {2} + 6 C). \end{array}
$$

Since the curve passes through the three points $(-h, y_{0}), (0, y_{1})$ , and $(h, y_{2})$ , we also have 

$$
y _ {0} = A h ^ {2} - B h + C, \quad y _ {1} = C, \quad y _ {2} = A h ^ {2} + B h + C.
$$

After some algebraic manipulation, we find that 

$$
A _ {p} = \frac {h}{3} (y _ {0} + 4 y _ {1} + y _ {2}).
$$

Now shifting the parabola horizontally to its shaded position in Figure 8.9 does not change the area under it. Thus the area under the parabola through $(x_{0}, y_{0})$ , $(x_{1}, y_{1})$ , and $(x_{2}, y_{2})$ in Figure 8.9 is still 

$$
\frac {h}{3} (y _ {0} + 4 y _ {1} + y _ {2}).
$$

Similarly, the area under the parabola through the points $(x_{2}, y_{2})$ , $(x_{3}, y_{3})$ , and $(x_{4}, y_{4})$ is 

$$
\frac {h}{3} (y _ {2} + 4 y _ {3} + y _ {4}).
$$

Computing the areas under all the parabolas and adding the results give the approximation 

**HISTORICAL BIOGRAPHY**

To know more, visit the companion Website. 

### Thomas Simpson (1720–1761)

Simpson was a successful text writer and did most of his research on probability. Simpson's rule to approximate definite integrals was developed before he was born. It is another of history's beautiful quirks that one of the ablest mathematicians of the 18th century is remembered not for his own work but for a rule that was never his, that he never claimed, and that bears his name only because he happened to mention it in one of his books. 

$$
\begin{array}{l} \int_ {a} ^ {b} f (x) d x \approx \frac {h}{3} (y _ {0} + 4 y _ {1} + y _ {2}) + \frac {h}{3} (y _ {2} + 4 y _ {3} + y _ {4}) + \dots \\ \qquad \qquad \qquad + \frac {h}{3} (y _ {n - 2} + 4 y _ {n - 1} + y _ {n}) \\ \qquad = \frac {h}{3} (y _ {0} + 4 y _ {1} + 2 y _ {2} + 4 y _ {3} + 2 y _ {4} + \dots + 2 y _ {n - 2} + 4 y _ {n - 1} + y _ {n}). \end{array}
$$

The result is known as Simpson's Rule. The function need not be positive, as in our derivation, but the number $n$ of subintervals must be even for us to apply the rule because each parabolic arc uses two subintervals. 

### Simpson's Rule

To approximate $\int_{a}^{b}f(x)dx$ , use 

$$
S = \frac {\Delta x}{3} \left(y _ {0} + 4 y _ {1} + 2 y _ {2} + 4 y _ {3} + \dots + 2 y _ {n - 2} + 4 y _ {n - 1} + y _ {n}\right).
$$

The $y$ 's are the values of $f$ at the partition points 

$$
x _ {0} = a, x _ {1} = a + \Delta x, x _ {2} = a + 2 \Delta x, \dots , x _ {n - 1} = a + (n - 1) \Delta x, x _ {n} = b.
$$

The number $n$ is even, and $\Delta x = (b - a) / n$ . 

Note the pattern of the coefficients in the above rule: 1, 4, 2, 4, 2, 4, 2, ..., 4, 1. 

**EXAMPLE 2** Use Simpson's Rule with $n = 4$ to approximate $\int_0^2 5x^4 dx$ . 


TABLE 8.3


<table><tr><td>x</td><td><eq>y = 5x^{4}</eq></td></tr><tr><td>0</td><td>0</td></tr><tr><td><eq>\frac{1}{2}</eq></td><td><eq>\frac{5}{16}</eq></td></tr><tr><td>1</td><td>5</td></tr><tr><td><eq>\frac{3}{2}</eq></td><td><eq>\frac{405}{16}</eq></td></tr><tr><td>2</td><td>80</td></tr></table>

**Solution** Partition [0, 2] into four subintervals and evaluate $y = 5x^4$ at the partition points (Table 8.3). Then apply Simpson's Rule with $n = 4$ and $\Delta x = 1/2$ : 

$$
\begin{array}{r l} S & = \frac {\Delta x}{3} (y _ {0} + 4 y _ {1} + 2 y _ {2} + 4 y _ {3} + y _ {4}) \\ & = \frac {1}{6} \left(0 + 4 \left(\frac {5}{1 6}\right) + 2 (5) + 4 \left(\frac {4 0 5}{1 6}\right) + 8 0\right) \\ & = 3 2 \frac {1}{1 2}. \end{array}
$$

This estimate differs from the exact value (32) by only 1/12, a percentage error of less than three-tenths of one percent, and this was with just four subintervals. 

### Error Analysis

Whenever we use an approximation technique, we must consider how accurate the approximation might be. The following theorem gives formulas for estimating the errors when using the Midpoint Rule, the Trapezoidal Rule, and Simpson's Rule. The error is the difference between the approximation obtained by using the rule and the actual value of the definite integral $\int_{a}^{b} f(x) dx$ . 

**THEOREM 1—Error Estimates in the Midpoint, Trapezoidal, and Simpson's Rules**

If $f''$ is continuous and M is any upper bound for the values of $|f''|$ on [a, b], then the error $E_{M}$ in the Midpoint Rule approximation of the integral of f from a to b for n steps satisfies the inequality 

$$
\left| E _ {M} \right| \leq \frac {M (b - a) ^ {3}}{2 4 n ^ {2}}. \quad \text { Midpoint   Rule }
$$

If $f''$ is continuous and M is any upper bound for the values of $|f''|$ on [a, b], then the error $E_{T}$ in the Trapezoidal Rule approximation of the integral of f from a to b for n steps satisfies the inequality 

$$
\left| E _ {T} \right| \leq \frac {M (b - a) ^ {3}}{1 2 n ^ {2}}. \quad \text { Trapezoidal   Rule }
$$

If $f^{(4)}$ is continuous and $M$ is any upper bound for the values of $|f^{(4)}|$ on $[a, b]$ , then the error $E_S$ in the Simpson's Rule approximation of the integral of $f$ from $a$ to $b$ for $n$ steps satisfies the inequality 

$$
\left| E _ {S} \right| \leq \frac {M (b - a) ^ {5}}{1 8 0 n ^ {4}}. \quad \text { Simpson's   Rule }
$$

To give an idea of why Theorem 1 is true in the case of the Trapezoidal Rule, we begin with a result which says that if $f''$ is continuous on the interval $[a, b]$ , then 

$$
\int_ {a} ^ {b} f (x) d x = T - \frac {b - a}{1 2} \cdot f ^ {\prime \prime} (c) (\Delta x) ^ {2}
$$

for some number $c$ between $a$ and $b$ . This result follows from Taylor's Remainder Theorem, which we discuss in Theorem 24 of Section 9.9. It follows that as $\Delta x$ approaches zero, the error defined by 

$$
E _ {T} = - \frac {b - a}{1 2} \cdot f ^ {\prime \prime} (c) (\Delta x) ^ {2}
$$

approaches zero at the rate of the square of $\Delta x$ . 

The inequality 

$$
\left| E _ {T} \right| \leq \frac {b - a}{1 2} \max \left| f ^ {\prime \prime} (x) \right| (\Delta x) ^ {2},
$$

where “max” refers to the maximum of $|f''(x)|$ over the interval $[a, b]$ , gives an upper bound for the magnitude of the error. In practice, we usually cannot find the exact value of $\max|f''(x)|$ and have to estimate an upper bound or “worst case” value for it instead. If M is any upper bound for the values of $|f''(x)|$ on $[a, b]$ , so that $|f''(x)| \leq M$ for every x in $[a, b]$ , then 

$$
\left| E _ {T} \right| \leq \frac {b - a}{1 2} M (\Delta x) ^ {2}.
$$

If we substitute $(b - a) / n$ for $\Delta x$ , we get 

$$
| E _ {T} | \leq \frac {M (b - a) ^ {3}}{1 2 n ^ {2}}.
$$

The upper bound for the error in the Midpoint Rule, 

$$
| E _ {M} | \leq \frac {M (b - a) ^ {3}}{2 4 n ^ {2}},
$$

is based on a similar argument. Taylor's Remainder Theorem implies that the Midpoint Rule approximation and the definite integral differ by at most 

$$
\frac {| f ^ {\prime \prime} (c) | (b - a) ^ {3}}{2 4 n ^ {2}}
$$

for some $c \in [a, b]$ . Taking $M$ to be at least as large as the maximum of $|f''(c)|$ on $[a, b]$ , we obtain the error bound in Theorem 1. Note that this is half as large as the error bound for the Trapezoidal Rule. This does not mean that the Midpoint Rule is always more accurate than the Trapezoidal Rule, but rather that the largest possible error that might occur is only half as large as the largest possible error for the Trapezoidal Rule. 

To estimate the error in Simpson's Rule, we start with a result, again following from Taylor's Remainder Theorem, that says that if the fourth derivative $f^{(4)}$ is continuous, then 

$$
\int_ {a} ^ {b} f (x) d x = S - \frac {b - a}{1 8 0} \cdot f ^ {(4)} (c) (\Delta x) ^ {4}
$$

for some point c between a and b. Thus, as $\Delta x$ approaches zero, the error, 

$$
E _ {S} = - \frac {b - a}{1 8 0} \cdot f ^ {(4)} (c) (\Delta x) ^ {4},
$$

approaches zero as the fourth power of $\Delta x$ . (This helps to explain why Simpson's Rule is likely to give better results than the Trapezoidal Rule.) 

The inequality 

$$
\left| E _ {S} \right| \leq \frac {b - a}{1 8 0} \max \left| f ^ {(4)} (x) \right| (\Delta x) ^ {4},
$$

where “max” refers to the maximum of $|f^{(4)}(x)|$ over the interval [a, b], gives an upper bound for the magnitude of the error. As with $\max|f''|$ in the error formula for the Trapezoidal Rule, we usually cannot find the exact value of $\max|f^{(4)}(x)|$ and have to replace it with an upper bound. If M is any upper bound for the values of $|f^{(4)}(x)|$ on [a, b], then 

$$
\left| E _ {S} \right| \leq \frac {b - a}{1 8 0} M (\Delta x) ^ {4}.
$$

Substituting $(b - a)/n$ for $\Delta x$ in this last expression gives 

$$
\left| E _ {s} \right| \leq \frac {M (b - a) ^ {5}}{1 8 0 n ^ {4}}.
$$

You might wonder why we don't just take $M$ to be the maximum value of $|f''(x)|$ on $[a, b]$ for the first two rules, or the maximum value of $|f^{(4)}(x)|$ for Simpson's Rule. The reason is that sometimes this maximum is hard to compute, while a less accurate upper bound is easily found. We can certainly set $M$ to the maximum value if we can compute it. 

**EXAMPLE 3** Find an upper bound for the error in estimating $\int_0^2 5x^4 dx$ using Simpson's Rule with $n = 4$ (Example 2). 

**Solution** To estimate the error, we first find an upper bound M for the magnitude of the fourth derivative of $f(x) = 5x^{4}$ on the interval $0 \leq x \leq 2$ . Since the fourth derivative has the constant value $f^{(4)}(x) = 120$ , we take M = 120. With b - a = 2 and n = 4, the error estimate for Simpson's Rule gives 

$$
\left| E _ {s} \right| \leq \frac {M (b - a) ^ {5}}{1 8 0 n ^ {4}} = \frac {1 2 0 (2) ^ {5}}{1 8 0 \cdot 4 ^ {4}} = \frac {1}{1 2}.
$$

This estimate is consistent with the result of Example 2. 

Theorem 1 can also be used to estimate the number of subintervals required when using the Trapezoidal or Simpson's Rule if we specify a certain tolerance for the error. 

**EXAMPLE 4** Estimate the minimum number of subintervals needed to approximate the integral in Example 3 using Simpson's Rule with an error of magnitude less than $10^{-4}$ . 

**Solution** Using the inequality in Theorem 1, if we choose the number of subintervals $n$ to satisfy 

$$
\frac {M (b - a) ^ {5}}{1 8 0 n ^ {4}} <   1 0 ^ {- 4},
$$

then the error $E_{S}$ in Simpson's Rule satisfies $|E_S| < 10^{-4}$ , as required. 

From the solution in Example 3, we have $M = 120$ and $b - a = 2$ , so we want $n$ to satisfy 

$$
\frac {1 2 0 (2) ^ {5}}{1 8 0 n ^ {4}} <   \frac {1}{1 0 ^ {4}},
$$

or, equivalently, 

$$
n ^ {4} > \frac {6 4 \cdot 1 0 ^ {4}}{3}.
$$

It follows that 

$$
n > 1 0 \left(\frac {6 4}{3}\right) ^ {1 / 4} \approx 2 1. 5.
$$

Since $n$ must be even in Simpson's Rule, we estimate the minimum number of subintervals required for the error tolerance to be $n = 22$ . 

**EXAMPLE 5** As we saw in Chapter 7, the value of $\ln 2$ can be calculated from the integral 

$$
\ln 2 = \int_ {1} ^ {2} \frac {1}{x} d x.
$$

Table 8.4 shows values of $T$ and $S$ for approximations of $\int_{1}^{2}(1 / x)dx$ using various values of $n$ . Notice how Simpson's Rule dramatically improves over the Trapezoidal Rule. 


TABLE 8.4 Trapezoidal Rule approximations $\left( {T}_{n}\right)$ and Simpson's Rule approximations $\left( {S}_{n}\right)$ of $\ln 2 = {\int }_{1}^{2}\left( {1/x}\right) {dx}$


<table><tr><td>n</td><td><eq>T_n</eq></td><td>|Error| less than...</td><td><eq>S_n</eq></td><td>|Error| less than...</td></tr><tr><td>10</td><td>0.6937714032</td><td>0.0006242227</td><td>0.6931502307</td><td>0.0000030502</td></tr><tr><td>20</td><td>0.6933033818</td><td>0.0001562013</td><td>0.6931473747</td><td>0.0000001942</td></tr><tr><td>30</td><td>0.6932166154</td><td>0.0000694349</td><td>0.6931472190</td><td>0.0000000385</td></tr><tr><td>40</td><td>0.6931862400</td><td>0.0000390595</td><td>0.6931471927</td><td>0.0000000122</td></tr><tr><td>50</td><td>0.6931721793</td><td>0.0000249988</td><td>0.6931471856</td><td>0.0000000050</td></tr><tr><td>100</td><td>0.6931534305</td><td>0.0000062500</td><td>0.6931471809</td><td>0.0000000004</td></tr></table>

In particular, notice that when we double the value of n (thereby halving the value of $h = \Delta x$ ), the T error is divided by 2 squared, whereas the S error is divided by 2 to the fourth. 

This has a dramatic effect as $\Delta x = (2 - 1)/n$ gets very small. The Simpson approximation for n = 50 rounds accurately to seven places and for n = 100 is accurate to nine decimal places (billionths)! 

If $f(x)$ is a polynomial of degree less than 4, then its fourth derivative is zero, and 

$$
E _ {S} = - \frac {b - a}{1 8 0} f ^ {(4)} (c) (\Delta x) ^ {4} = - \frac {b - a}{1 8 0} (0) (\Delta x) ^ {4} = 0.
$$

Thus, there will be no error in the Simpson approximation of any integral of $f$ . In other words, if $f$ is a constant, a linear function, or a quadratic or cubic polynomial, Simpson's Rule will give the value of any integral of $f$ exactly, whatever the number of subdivisions. Similarly, if $f$ is a constant or a linear function, then its second derivative is zero, and 

$$
E _ {T} = - \frac {b - a}{1 2} f ^ {\prime \prime} (c) (\Delta x) ^ {2} = - \frac {b - a}{1 2} (0) (\Delta x) ^ {2} = 0.
$$

The Trapezoidal Rule will therefore give the exact value of any integral of $f$ . This is no surprise, for the trapezoids fit the graph perfectly. 

Although decreasing the step size $\Delta x$ reduces the error in the Simpson and Trapezoidal approximations in theory, it may fail to do so in practice. When $\Delta x$ is very small, say $\Delta x = 10^{-8}$ , computer or calculator round-off errors in the arithmetic required to evaluate S and T may accumulate to such an extent that the error formulas no longer describe what is going on. Shrinking $\Delta x$ below a certain size can actually make things worse. You should consult a text on numerical analysis for more sophisticated methods if you are having problems with round-off error using the rules discussed in this section. 

![教材插图](/books/thomas-calculus/assets/1d9133f6e91d0a63002dbcb654c1c035631760cbd055f8820184bd1cf9494d95.jpg)



FIGURE 8.11 The dimensions of the swamp in Example 6.


**EXAMPLE 6** A town wants to drain and fill a polluted swamp (Figure 8.11). The swamp averages 1.5 m deep. About how many cubic meters of dirt will it take to fill the area after the swamp is drained? 

**Solution** To calculate the volume of the swamp, we estimate the surface area and multiply by 1.5. To estimate the area, we use Simpson's Rule with $\Delta x = 6\mathrm{m}$ , and the $y$ s equal to the distances measured across the swamp, as shown in Figure 8.11. 

$$
\begin{array}{r l} S & = \frac {\Delta x}{3} (y _ {0} + 4 y _ {1} + 2 y _ {2} + 4 y _ {3} + 2 y _ {4} + 4 y _ {5} + y _ {6}) \\ & = \frac {6}{3} (4 4 + 1 4 8 + 4 6 + 6 4 + 2 4 + 3 6 + 4) = 7 3 2 \end{array}
$$

The volume is about (732)(1.5) = 1098 m $^{4}$ . 

### EXERCISES 8.7

For some exercises, a calculator may be helpful for expressing answers in decimal form. 

#### Estimating Definite Integrals

The instructions for the integrals in Exercises 1–10 have three parts, one for the Midpoint Rule, one for the Trapezoidal Rule, and one for Simpson's Rule. 

#### I. Using the Midpoint Rule

a. Estimate the integral with $n = 4$ steps and find an upper bound for $|E_M|$ . 

b. Evaluate the integral directly and find $|E_M|$ . 

c. Use the formula $(|E_M| / (\text{true value})) \times 100$ to express $|E_M|$ as a percentage of the integral's true value. 

#### II. Using the Trapezoidal Rule

a. Estimate the integral with $n = 4$ steps and find an upper bound for $|E_T|$ . 

b. Evaluate the integral directly and find $|E_T|$ . 

c. Use the formula $(|E_T| / (\text{true value})) \times 100$ to express $|E_T|$ as a percentage of the integral's true value. 

#### III. Using Simpson's Rule

a. Estimate the integral with $n = 4$ steps and find an upper bound for $|E_S|$ . 

b. Evaluate the integral directly and find $|E_S|$ . 

c. Use the formula $(|E_S| / (\text{true value})) \times 100$ to express $|E_S|$ as a percentage of the integral's true value. 

1. $\int_{1}^{2} x dx$

2. $\int_{1}^{3}(2x - 1)dx$

3. $\int_{-1}^{1}(x^2 + 1)dx$ 

4. $\int_{-2}^{0}(x^2 - 1)dx$ 

$$
\int_ {1} ^ {2} \frac {1}{s ^ {2}} d s
$$

5. $\int_0^2 (t^3 +t)dt$ 

6. $\int_{-1}^{1}(t^3 + 1)dt$ 

8. $\int_{2}^{4}\frac{1}{(s - 1)^{2}} ds$ 

$$
\int_ {0} ^ {\pi} \sin t d t
$$

$$
\int_ {0} ^ {1} \sin \pi t d t
$$

#### Estimating the Number of Subintervals

In Exercises 11–22, estimate the minimum number of subintervals needed to approximate the integrals with an error of magnitude less than $10^{-4}$ by (a) the Trapezoidal Rule and (b) Simpson's Rule. (The integrals in Exercises 11–18 are the integrals from Exercises 1–8.) 

11. $\int_1^2 x dx$

12. $\int_1^3 (2x - 1)dx$

13. $\int_{-1}^{1}(x^2 + 1)dx$ 

14. $\int_{-2}^{0}(x^2 - 1)dx$ 

15. $\int_0^2 (t^3 +t)dt$ 

16. $\int_{-1}^{1}(t^3 + 1)dt$ 

17. $\int_{1}^{2}\frac{1}{s^{2}} ds$

18. $\int_{2}^{4}\frac{1}{(s - 1)^{2}} ds$

19. $\int_0^3\sqrt{x + 1} dx$

20. $\int_0^3\frac{1}{\sqrt{x + 1}} dx$

21. $\int_0^2\sin (x + 1)dx$

22. $\int_{-1}^{1}\cos (x + \pi)dx$

#### Estimates with Numerical Data

23. Volume of water in a swimming pool A rectangular swimming pool is 5 m wide and 10 m long. The accompanying table shows the depth $h(x)$ of the water at 1-m intervals from one end of the pool to the other. Estimate the volume of water in the pool using the Trapezoidal Rule with n = 10 applied to the integral 

$$
V = \int_ {0} ^ {1 0} 5 \cdot h (x) d x.
$$

<table><tr><td>Position (m) x</td><td>Depth (m) h(x)</td><td>Position (m) x</td><td>Depth (m) h(x)</td></tr><tr><td>0</td><td>1.20</td><td>6</td><td>2.30</td></tr><tr><td>1</td><td>1.64</td><td>7</td><td>2.38</td></tr><tr><td>2</td><td>1.82</td><td>8</td><td>2.46</td></tr><tr><td>3</td><td>1.98</td><td>9</td><td>2.54</td></tr><tr><td>4</td><td>2.10</td><td>10</td><td>2.60</td></tr><tr><td>5</td><td>2.20</td><td></td><td></td></tr></table>

24. Distance traveled The accompanying table shows time-to-speed data for a car accelerating from rest to 130 km/h. How far had the car traveled by the time it reached this speed? (Use trapezoids to estimate the area under the velocity curve, but be careful: The time intervals vary in length.) 

<table><tr><td>Speed change</td><td>Time (s)</td></tr><tr><td>Zero to 30 km/h</td><td>2.2</td></tr><tr><td>40 km/h</td><td>3.2</td></tr><tr><td>50 km/h</td><td>4.5</td></tr><tr><td>60 km/h</td><td>5.9</td></tr><tr><td>70 km/h</td><td>7.8</td></tr><tr><td>80 km/h</td><td>10.2</td></tr><tr><td>90 km/h</td><td>12.7</td></tr><tr><td>100 km/h</td><td>16.0</td></tr><tr><td>110 km/h</td><td>20.6</td></tr><tr><td>120 km/h</td><td>26.2</td></tr><tr><td>130 km/h</td><td>37.1</td></tr></table>

25. Wing design The design of a new airplane requires a gasoline tank of constant cross-sectional area in each wing. A scale drawing of a cross-section is shown here. The tank must hold 2000 kg of gasoline, which has a density of $673\mathrm{kg} / \mathrm{m}^3$ . Estimate the length of the tank by Simpson's Rule. 

![教材插图](/books/thomas-calculus/assets/7cb0d717dc607dc7745d1c6c3dfd57fc29e8a36991c95e5694a7611f3283002b.jpg)


$$
y _ {3} = 0. 6 5 \mathrm{r}
$$

$$
y _ {4} = 0. 7
$$

$$
y _ {5} = y _ {6} = 0. 7 5
$$

26. Oil consumption on Pathfinder Island A diesel generator runs continuously, consuming oil at a gradually increasing rate until it must be temporarily shut down to have the filters replaced. Use the Trapezoidal Rule to estimate the amount of oil consumed by the generator during that week. 

<table><tr><td>Day</td><td>Oil consumption rate (liters/hour)</td></tr><tr><td>Sun</td><td>0.019</td></tr><tr><td>Mon</td><td>0.020</td></tr><tr><td>Tue</td><td>0.021</td></tr><tr><td>Wed</td><td>0.023</td></tr><tr><td>Thu</td><td>0.025</td></tr><tr><td>Fri</td><td>0.028</td></tr><tr><td>Sat</td><td>0.031</td></tr><tr><td>Sun</td><td>0.035</td></tr></table>

#### Theory and Examples

27. Usable values of the sine-integral function The sine-integral function, 

$$
\operatorname{Si} (x) = \int_ {0} ^ {x} \frac {\sin t}{t} d t, \quad \text {   "Sine   integral   of   } x \text {   " }
$$

is one of the many functions in engineering whose formulas cannot be simplified. There is no elementary formula for the anti-derivative of $(\sin t)/t$ . The values of $\mathrm{Si}(x)$ , however, are readily estimated by numerical integration. 

Although the notation does not show it explicitly, the function being integrated is 

$$
f (t) = \left\{ \begin{array}{c c} \frac {\sin t}{t}, & t \neq 0 \\ 1, & t = 0, \end{array} \right.
$$

the continuous extension of $(\sin t)/t$ to the interval $[0, x]$ . The function has derivatives of all orders at every point of its domain. Its graph is smooth, and you can expect good results from Simpson's Rule. 

![教材插图](/books/thomas-calculus/assets/00fe0677e3b406f987b12abe62a4b4266892fc543018a0790fb6e8e73e7875f2.jpg)


a. Use the fact that $|f^{(4)}| \leq 1$ on $[0, \pi/2]$ to give an upper bound for the error that will occur if 

$$
\operatorname{Si} \left(\frac {\pi}{2}\right) = \int_ {0} ^ {\pi / 2} \frac {\sin t}{t} d t
$$

is estimated by Simpson's Rule with $n = 4$ . 

b. Estimate $\operatorname{Si}(\pi / 2)$ by Simpson's Rule with $n = 4$ . 

c. Express the error bound you found in part (a) as a percentage of the value you found in part (b). 

28. The error function The error function, 

$$
\operatorname{erf} (x) = \frac {2}{\sqrt {\pi}} \int_ {0} ^ {x} e ^ {- t ^ {2}} d t,
$$

which is important in probability and in the theories of heat flow and signal transmission, must be evaluated numerically because there is no elementary expression for the antiderivative of $e^{-t^{2}}$ . 

a. Use Simpson's Rule with $n = 10$ to estimate erf (1). 

b. In [0, 1], 

$$
\left| \frac {d ^ {4}}{d t ^ {4}} (e ^ {- t ^ {2}}) \right| \leq 1 2.
$$

Give an upper bound for the magnitude of the error of the estimate in part (a). 

29. Prove that the sum T in the Trapezoidal Rule for $\int_{a}^{b}f(x)dx$ is a Riemann sum for f continuous on [a, b]. (Hint: Use the Intermediate Value Theorem to show the existence of $c_{k}$ in the subinterval $[x_{k-1}, x_{k}]$ satisfying $f(c_{k}) = (f(x_{k-1}) + f(x_{k}))/2$ .) 

30. Prove that the sum $S$ in Simpson's Rule for $\int_{a}^{b} f(x) dx$ is a Riemann sum for $f$ continuous on $[a, b]$ . (See Exercise 29.) 

31. Elliptic integrals The length of the ellipse 

$$
\frac {x ^ {2}}{a ^ {2}} + \frac {y ^ {2}}{b ^ {2}} = 1
$$

turns out to be 

$$
\text { Length } = 4 a \int_ {0} ^ {\pi / 2} \sqrt {1 - e ^ {2} \cos^ {2} t} d t,
$$

where $e = \sqrt{a^2 - b^2} / a$ is the ellipse's eccentricity. The integral in this formula, called an elliptic integral, is nonelementary except when $e = 0$ or 1. 

a. Use the Trapezoidal Rule with $n = 10$ to estimate the length of the ellipse when $a = 1$ and $e = 1/2$ . 

b. Use the fact that the absolute value of the second derivative of $f(t) = \sqrt{1 - e^{2}\cos^{2}t}$ is less than 1 to find an upper bound for the error in the estimate you obtained in part (a). 

#### Applications

32. The length of one arch of the curve $y = \sin x$ is given by 

$$
L = \int_ {0} ^ {\pi} \sqrt {1 + \cos^ {2} x} d x.
$$

Estimate $L$ by Simpson's Rule with $n = 8$ . 

When solving Exercises 33-40, you may need to use a calculator or a computer. 

33. Your metal fabrication company is bidding for a contract to make sheets of corrugated iron roofing like the one shown here. The cross-sections of the corrugated sheets are to conform to the curve 

$$
y = \sin \frac {3 \pi}{2 0} x, \quad 0 \leq x \leq 2 0 \mathrm{cm}.
$$

If the roofing is to be stamped from flat sheets by a process that does not stretch the material, how wide should the original material be? To find out, use numerical integration to approximate the length of the sine curve to two decimal places. 

![教材插图](/books/thomas-calculus/assets/c08cb8463073dab98e973da02c17e29b26152f3a7e8fe7a867d211ee0dbf2f30.jpg)


34. Your engineering firm is bidding for the contract to construct the tunnel shown here. The tunnel is 90 m long and 15 m wide at the base. The cross-section is shaped like one arch of the curve $y = 7.5 \cos(\pi x / 15)$ . Upon completion, the tunnel's inside surface (excluding the roadway) will be treated with a waterproof sealer that costs $26.11 per square meter to apply. How much will it cost to apply the sealer? (Hint: Use numerical integration to find the length of the cosine curve.) 

![教材插图](/books/thomas-calculus/assets/cf451842c5f31618c92aa45a9a201a2fe245261bdcc42339d32c3e378dac53f0.jpg)


Find, to two decimal places, the areas of the surfaces generated by revolving the curves in Exercises 35 and 36 about the x-axis. 

35. $y = \sin x, 0 \leq x \leq \pi$ 

36. $y = x^{2} / 4, 0 \leq x \leq 2$ 

37. Use numerical integration to estimate the value of 

$$
\arcsin 0. 6 = \int_ {0} ^ {0. 6} \frac {d x}{\sqrt {1 - x ^ {2}}}.
$$

For reference, arcsin 0.6 = 0.64350 to five decimal places. 

38. Use numerical integration to estimate the value of 

$$
\pi = 4 \int_ {0} ^ {1} \frac {1}{1 + x ^ {2}} d x.
39. $Drug assimilation An average adult under age 60 years assimilates a 12-hour cold medicine into his or her system at a rate modeled by$
\frac {d y}{d t} = 6 - \ln (2 t ^ {2} - 3 t + 3),
$$

where $y$ is measured in milligrams and $t$ is the time in hours since the medication was taken. What amount of medicine is absorbed into a person's system over a 12-hour period? 

40. Effects of an antihistamine The concentration of an antihistamine in the bloodstream of a healthy adult is modeled by 

$$
C = 1 2. 5 - 4 \ln (t ^ {2} - 3 t + 4),
$$

where C is measured in grams per liter and t is the time in hours since the medication was taken. What is the average level of concentration in the bloodstream over a 6-hour period? 

## 8.8 Improper Integrals

Up to now, we have required definite integrals to satisfy two properties. First, the domain of integration $[a, b]$ must be finite. Second, the range of the integrand must be finite on this domain. In practice, we may encounter problems that fail to meet one or both of these conditions. The integral for the area under the curve $y = (\ln x)/x^{2}$ from x = 1 to $x = \infty$ is an example for which the domain is infinite (Figure 8.12a). The integral for the area under the curve of $y = 1/\sqrt{x}$ between x = 0 and x = 1 is an example for which the range of the integrand is infinite (Figure 8.12b). In either case, the integrals are said to be improper and are calculated as limits. We will see in Chapter 9 that improper integrals are useful for investigating the convergence of certain infinite series. 

![教材插图](/books/thomas-calculus/assets/e99bd4f35155456a483d6bf993922d8798ddb70bb4ee360cb3ad5cc5cbdc88c5.jpg)


![教材插图](/books/thomas-calculus/assets/2fd4344d77d1b6609e660fe9ab1b29e495eb28b6a69ffb7d3a519d163f0a7f12.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/59d5962b197a5b7041e356d8fe5023afb1f5d6f4dc31f24feb26e0f37f6b4c1f.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/950230c84ff108cddfdd5729306fcaa30a3158d93a87cc6463b260ee9e716065.jpg)



(b)



FIGURE 8.13 (a) The area in the first quadrant under the curve $y = e^{-x / 2}$ . (b) The area is an improper integral of the first type.



(a)



FIGURE 8.12 Are the areas under these infinite curves finite? We will see that the answer is yes for both curves.


### Infinite Limits of Integration

Consider the infinite region (unbounded on the right) that lies under the curve $y = e^{-x/2}$ in the first quadrant (Figure 8.13a). You might think this region has infinite area, but we will see that the value is finite. We assign a value to the area in the following way. First find the area $A(b)$ of the portion of the region that is bounded on the right by x = b (Figure 8.13b). 

$$
A (b) = \int_ {0} ^ {b} e ^ {- x / 2} d x = - 2 e ^ {- x / 2} \bigg ] _ {0} ^ {b} = - 2 e ^ {- b / 2} + 2 = 2 - 2 e ^ {- b / 2},
$$

which is a little less than 2. Then find the limit of $A(b)$ as $b \to \infty$ . 

$$
\lim _ {b \rightarrow \infty} A (b) = \lim _ {b \rightarrow \infty} \left(2 - 2 e ^ {- b / 2}\right) = 2
$$

Therefore, the value we assign to the area under the curve from 0 to $\infty$ is 

$$
\int_ {0} ^ {\infty} e ^ {- x / 2} d x = \lim _ {b \rightarrow \infty} \int_ {0} ^ {b} e ^ {- x / 2} d x = 2.
$$

> ***DEFINITION*** Integrals with infinite limits of integration are improper integrals of Type I. 
>
> 1. If $f(x)$ is continuous on $[a, \infty)$ , then 
>
> $$
> \int_ {a} ^ {\infty} f (x) d x = \lim _ {b \rightarrow \infty} \int_ {a} ^ {b} f (x) d x.
> $$
>
> 2. If $f(x)$ is continuous on $(-\infty, b]$ , then 
>
> $$
> \int_ {- \infty} ^ {b} f (x) d x = \lim _ {a \rightarrow - \infty} \int_ {a} ^ {b} f (x) d x.
> $$
>
> 3. If $f(x)$ is continuous on $(-\infty, \infty)$ , then 
>
> $$
> \int_ {- \infty} ^ {\infty} f (x) d x = \int_ {- \infty} ^ {c} f (x) d x + \int_ {c} ^ {\infty} f (x) d x,
> $$
>
> where $c$ is any real number. 
>
In each case, if the limit exists and is finite, we say that the improper integral converges and that the limit is the value of the improper integral. If the limit fails to exist, the improper integral diverges. 

![教材插图](/books/thomas-calculus/assets/a7ac856ed6853f9ed15a0dd30b07d2372e7157d04184c9907d75c3acbc15a903.jpg)



FIGURE 8.14 The area under this curve is an improper integral (Example 1).


**HISTORICAL BIOGRAPHY**

Lejeune Dirichlet (1805–1859) 

Dirichlet, a German mathematician, investigated the solution and equilibrium of systems of differential equations and discovered many results on the convergence of series. In 1855, Dirichlet succeeded Gauss as the professor of mathematics at Göttingen. 

To know more, visit the companion Website. 

The choice of $c$ in Part 3 of the definition is unimportant. We can evaluate or determine the convergence or divergence of $\int_{-\infty}^{\infty} f(x) dx$ with any convenient choice. 

Any of the integrals in the above definition can be interpreted as an area if $f \geq 0$ on the interval of integration. For instance, we interpreted the improper integral in Figure 8.13 as an area. In that case, the area has the finite value 2. If $f \geq 0$ and the improper integral diverges, we say the area under the curve is infinite. 

**EXAMPLE 1** Is the area under the curve $y = (\ln x) / x^2$ from $x = 1$ to $x = \infty$ finite? If so, what is its value? 

**Solution** We find the area under the curve from x = 1 to x = b and examine the limit as $b \rightarrow \infty$ . If the limit is finite, we take it to be the area under the curve (Figure 8.14). The area from 1 to b is 

$$
\begin{array}{l l} \int_ {1} ^ {b} \frac {\ln x}{x ^ {2}} d x = \Big [ (\ln x) \Big (- \frac {1}{x} \Big) \Big ] _ {1} ^ {b} - \int_ {1} ^ {b} \Big (- \frac {1}{x} \Big) \Big (\frac {1}{x} \Big) d x & \text {   Integration   by   parts   with   } \\ & u = \ln x, d v = d x / x ^ {2}, \\ & d u = d x / x, v = - 1 / x \\ = - \frac {\ln b}{b} - \Big [ \frac {1}{x} \Big ] _ {1} ^ {b} \\ = - \frac {\ln b}{b} - \frac {1}{b} + 1. \end{array}
$$

The limit of the area as $b \to \infty$ is 

$$
\begin{array}{r l} \int_ {1} ^ {\infty} \frac {\ln x}{x ^ {2}} d x & = \lim _ {b \to \infty} \int_ {1} ^ {b} \frac {\ln x}{x ^ {2}} d x \\ & = \lim _ {b \to \infty} \left[ - \frac {\ln b}{b} - \frac {1}{b} + 1 \right] \\ & = - \left[ \lim _ {b \to \infty} \frac {\ln b}{b} \right] - 0 + 1 \\ & = - \left[ \lim _ {b \to \infty} \frac {1 / b}{1} \right] + 1 = 0 + 1 = 1. \end{array} \tag{\text{L'Hôpital's Rule}}
$$

Thus, the improper integral converges and the area has finite value 1. 

**EXAMPLE 2** Evaluate

$$
\int_ {- \infty} ^ {\infty} \frac {d x}{1 + x ^ {2}}.
$$

**Solution** According to Part 3 of the definition, we can choose c = 0 and write 

$$
\int_ {- \infty} ^ {\infty} \frac {d x}{1 + x ^ {2}} = \int_ {- \infty} ^ {0} \frac {d x}{1 + x ^ {2}} + \int_ {0} ^ {\infty} \frac {d x}{1 + x ^ {2}}.
$$

Next we evaluate each improper integral on the right side of the equation above. 

$$
\begin{array}{r l}\int_ {- \infty} ^ {0} \frac {d x}{1 + x ^ {2}}&= \lim _ {a \rightarrow - \infty} \int_ {a} ^ {0} \frac {d x}{1 + x ^ {2}}\\&= \left. \lim _ {a \rightarrow - \infty} \tan^ {- 1} x \right] _ {a} ^ {0}\\&= \lim _ {a \rightarrow - \infty} (\tan^ {- 1} 0 - \tan^ {- 1} a) = 0 - \left(- \frac {\pi}{2}\right) = \frac {\pi}{2}\end{array}
$$

![教材插图](/books/thomas-calculus/assets/7121a0f46e2e7d584f820d945017bb37fdd9fa48ff32108c44cb846a073c0a00.jpg)



FIGURE 8.15 The area under this curve is finite (Example 2).


Thus, 

$$
\begin{array}{r l}\int_ {0} ^ {\infty} \frac {d x}{1 + x ^ {2}}&= \lim _ {b \rightarrow \infty} \int_ {0} ^ {b} \frac {d x}{1 + x ^ {2}}\\&= \left. \lim _ {b \rightarrow \infty} \tan^ {- 1} x \right] _ {0} ^ {b}\\&= \lim _ {b \rightarrow \infty} (\tan^ {- 1} b - \tan^ {- 1} 0) = \frac {\pi}{2} - 0 = \frac {\pi}{2}\end{array}
$$

$$
\int_ {- \infty} ^ {\infty} \frac {d x}{1 + x ^ {2}} = \frac {\pi}{2} + \frac {\pi}{2} = \pi .
$$

Since $1/(1 + x^{2}) > 0$ , the improper integral can be interpreted as the (finite) area beneath the curve and above the x-axis (Figure 8.15). 

The Integral $\int_{1}^{\infty}\frac{dx}{x^{p}}$ 

The function y = 1/x is the boundary between the convergent and divergent improper integrals with integrands of the form $y = 1/x^{p}$ . As the next example shows, the improper integral converges if p > 1 and diverges if $p \leq 1$ . 

**EXAMPLE 3** For what values of p does the integral $\int_{1}^{\infty} dx / x^{p}$ converge? When the integral does converge, what is its value? 

**Solution** If $p \neq 1$ , then 

$$
\int_ {1} ^ {b} \frac {d x}{x ^ {p}} = \left. \frac {x ^ {- p + 1}}{- p + 1} \right] _ {1} ^ {b} = \left(\frac {1}{1 - p}\right) (b ^ {- p + 1} - 1) = \left(\frac {1}{1 - p}\right) \left(\frac {1}{b ^ {p - 1}} - 1\right).
$$

Thus, 

$$
\begin{array}{l}\int_ {1} ^ {\infty} \frac {d x}{x ^ {p}} = \lim _ {b \rightarrow \infty} \int_ {1} ^ {b} \frac {d x}{x ^ {p}}\\= \lim _ {b \rightarrow \infty} \left[\left(\frac {1}{1 - p}\right)\left(\frac {1}{b ^ {p - 1}} - 1\right)\right] = \left\{\begin{array}{l l}\frac {1}{p - 1},&p > 1\\\infty ,&p <   1\end{array}\right.\end{array}
$$

because 

$$
\lim _ {b \to \infty} \frac {1}{b ^ {p - 1}} = \left\{ \begin{array}{l l} 0, & p > 1 \\ \infty , & p <   1. \end{array} \right.
$$

Therefore, the integral converges to the value $1 / (p - 1)$ if $p > 1$ , and it diverges if $p < 1$ . If $p = 1$ , the integral also diverges: 

$$
\begin{array}{r l} \int_ {1} ^ {\infty} \frac {d x}{x ^ {p}} & = \int_ {1} ^ {\infty} \frac {d x}{x} \\ & = \lim _ {b \to \infty} \int_ {1} ^ {b} \frac {d x}{x} \\ & = \lim _ {b \to \infty} \left[ \ln | x | \right] _ {1} ^ {b} \\ & = \lim _ {b \to \infty} (\ln b - \ln 1) = \infty . \end{array}
$$

![教材插图](/books/thomas-calculus/assets/1fa30d802830814d1d58d5bd53a909c78b91412285a5dd69b0f34f607276d1e8.jpg)



FIGURE 8.16 The area under this curve is an example of an improper integral of the second kind.


### Integrands with Vertical Asymptotes

Another type of improper integral arises when the integrand has a vertical asymptote—an infinite discontinuity—at a limit of integration or at some point between the limits of integration. If the integrand f is positive over the interval of integration, we can again interpret the improper integral as the area under the graph of f and above the x-axis between the limits of integration. 

Consider the region in the first quadrant that lies under the curve $y = 1 / \sqrt{x}$ from $x = 0$ to $x = 1$ (Figure 8.12b). First we find the area of the portion from $a$ to 1 (Figure 8.16): 

$$
\int_ {a} ^ {1} \frac {d x}{\sqrt {x}} = 2 \sqrt {x} \bigg | _ {a} ^ {1} = 2 - 2 \sqrt {a}.
$$

Then we find the limit of this area as $a \rightarrow 0^{+}$ : 

$$
\lim _ {a \to 0 ^ {+}} \int_ {a} ^ {1} \frac {d x}{\sqrt {x}} = \lim _ {a \to 0 ^ {+}} (2 - 2 \sqrt {a}) = 2.
$$

Therefore, the area under the curve from 0 to 1 is finite and is defined to be 

$$
\int_ {0} ^ {1} \frac {d x}{\sqrt {x}} = \lim _ {a \rightarrow 0 ^ {+}} \int_ {a} ^ {1} \frac {d x}{\sqrt {x}} = 2.
$$

> ***DEFINITION*** Integrals of functions that become infinite at a point within the interval of integration are improper integrals of Type II. 
>
> 1. If $f(x)$ is continuous on $(a, b]$ and discontinuous at a, then 
>
> $$
> \int_ {a} ^ {b} f (x) d x = \lim _ {c \rightarrow a ^ {+}} \int_ {c} ^ {b} f (x) d x.
> $$
>
> 2. If $f(x)$ is continuous on $[a, b)$ and discontinuous at b, then 
>
> $$
> \int_ {a} ^ {b} f (x) d x = \lim _ {c \rightarrow b ^ {-}} \int_ {a} ^ {c} f (x) d x.
> $$
>
> 3. If $f(x)$ is discontinuous at $c$ , where $a < c < b$ , and continuous on $[a, c) \cup (c, b]$ , then 
>
> $$
> \int_ {a} ^ {b} f (x) d x = \int_ {a} ^ {c} f (x) d x + \int_ {c} ^ {b} f (x) d x.
> $$
>
In each case, if the limit exists and is finite, we say that the improper integral converges and that the limit is the value of the improper integral. If the limit does not exist, the integral diverges. 

In Part 3 of the definition, the integral on the left side of the equation converges if both integrals on the right side converge; otherwise, it diverges. 

**EXAMPLE 4** Investigate the convergence of

$$
\int_ {0} ^ {1} \frac {1}{1 - x} d x.
$$

![教材插图](/books/thomas-calculus/assets/0aaec1531e7f577a2bdeaa0eca55dcb0926835766cd3462e0720d49c73fd1676.jpg)



FIGURE 8.17 The area beneath the curve and above the x-axis for $[0, 1)$ is not a real number (Example 4).


![教材插图](/books/thomas-calculus/assets/f3a3c4a49fe76c50708f916b19f55a6c11f2c0fa195586d01b24125e74bb7f9d.jpg)



FIGURE 8.18 Example 5 shows that the area under the curve exists (so it is a real number).


**Solution** The integrand $f(x) = 1/(1 - x)$ is continuous on [0, 1) but is discontinuous at x = 1 and becomes infinite as $x \to 1^{-}$ (Figure 8.17). We evaluate the integral as 

$$
\begin{array}{r l} \lim _ {b \to 1 ^ {-}} \int_ {0} ^ {b} \frac {1}{1 - x} d x & = \lim _ {b \to 1 ^ {-}} \left[ - \ln | 1 - x | \right] _ {0} ^ {b} \\ & = \lim _ {b \to 1 ^ {-}} [ - \ln (1 - b) + 0 ] = \infty . \end{array}
$$

The limit is infinite, so the integral diverges. 

**EXAMPLE 5** Evaluate

$$
\int_ {0} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}}.
$$

**Solution** The integrand has a vertical asymptote at x = 1 and is continuous on $[0, 1)$ and $(1, 3]$ (Figure 8.18). Thus, by Part 3 of the definition above, 

$$
\int_ {0} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}} = \int_ {0} ^ {1} \frac {d x}{(x - 1) ^ {2 / 3}} + \int_ {1} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}}.
$$

Next, we evaluate each improper integral on the right-hand side of this equation. 

$$
\begin{array}{r l} \int_ {0} ^ {1} \frac {d x}{(x - 1) ^ {2 / 3}} & = \lim _ {b \to 1 ^ {-}} \int_ {0} ^ {b} \frac {d x}{(x - 1) ^ {2 / 3}} \\ & = \left. \lim _ {b \to 1 ^ {-}} 3 (x - 1) ^ {1 / 3} \right] _ {0} ^ {b} \\ & = \lim _ {b \to 1 ^ {-}} \left[ 3 (b - 1) ^ {1 / 3} + 3 \right] = 3 \end{array}
$$

$$
\begin{array}{r l} \int_ {1} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}} & = \lim _ {c \to 1 ^ {+}} \int_ {c} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}} \\ & = \left. \lim _ {c \to 1 ^ {+}} 3 (x - 1) ^ {1 / 3} \right] _ {c} ^ {3} \\ & = \lim _ {c \to 1 ^ {+}} \left[ 3 (3 - 1) ^ {1 / 3} - 3 (c - 1) ^ {1 / 3} \right] = 3 \sqrt [ 3 ]{2} \end{array}
$$

We conclude that 

$$
\int_ {0} ^ {3} \frac {d x}{(x - 1) ^ {2 / 3}} = 3 + 3 \sqrt [ 3 ]{2}.
$$

### Improper Integrals with a CAS

Computer algebra systems can evaluate many convergent improper integrals. To evaluate the integral 

$$
\int_ {2} ^ {\infty} \frac {x + 3}{(x - 1) (x ^ {2} + 1)} d x
$$

(which converges) using Maple, enter 

$$
f := (x + 3) / ((x - 1) ^ {*} (x ^ {\wedge} 2 + 1));
$$

Then use the integration command 

$$
\operatorname{int} (f, x = 2.. \text { infinity });
$$

Maple returns the answer 

$$
\ln (5) + \arctan (2) - \frac {\pi}{2}
$$

To obtain a numerical result, use the evaluation command evalf and specify the number of digits as follows: 

$$
\text { evalf } (\%, 6);
$$

The symbol $\%$ instructs the computer to evaluate the last expression on the screen, in this case $(-1/2)\pi + \ln(5) + \arctan(2)$ . Maple returns 1.14579. 

If you are using Mathematica, entering 

$$
\text { In } [ 1 ] := \text { Integrate } [ (x + 3) / ((x - 1) (x ^ {\wedge} 2 + 1)), \{x, 2, \text { Infinity } \} ]
$$

returns 

$$
O u t [ 1 ] = - \frac {\pi}{2} + \operatorname{ArcTan} [ 2 ] + \operatorname{Log} [ 5 ].
$$

![教材插图](/books/thomas-calculus/assets/e48889a944fb60499f82237f1351c99563acfafc36f9e3a8ef3848a185f9a981.jpg)



FIGURE 8.19 The graph of $e^{-x^{2}}$ lies below the graph of $e^{-x}$ for x > 1 (Example 6a).


**HISTORICAL BIOGRAPHY Karl Weierstrass (1815–1897)**

Weierstrass attended the University of Bonn to learn public administration, but he found that his passion was for mathematics. In his Berlin lectures in the 1860s, he also proved several theorems for continuous and complex functions. The standards of rigor that he set greatly affected the future of mathematics. 

To obtain a numerical result with six digits, use the command “N[%, 6]”; it also yields 1.14579. 

To know more, visit the companion Website. 

### Tests for Convergence and Divergence

When we cannot evaluate an improper integral directly, we try to determine whether it converges or diverges. If the integral diverges, that's the end of the story. If it converges, we can use numerical methods to approximate its value. The principal tests for convergence or divergence are the Direct Comparison Test and the Limit Comparison Test. 

THEOREM 2—Direct Comparison Test
Let f and g be continuous on $[a, \infty)$ with $0 \leq f(x) \leq g(x)$ for all $x \geq a$ . Then
1. if $\int_{a}^{\infty} g(x) dx$ converges, then $\int_{a}^{\infty} f(x) dx$ also converges.
2. if $\int_{a}^{\infty} f(x) dx$ diverges, then $\int_{a}^{\infty} g(x) dx$ also diverges. 

Outline of a Proof Assume that $\int_{a}^{\infty} g(x) dx$ converges. For each number $b \geq a$ , let $I(b) = \int_{a}^{b} f(x) dx$ . Since $f(x)$ is nonnegative, we know that $I(b)$ is an increasing function of b. Using the completeness property of the real numbers (Appendix A.7), it can be shown that since this integral increases with b, it either has a limit or it diverges to infinity as $b \to \infty$ . We will not give a proof of this fact here. Since $f(x) \leq g(x)$ for every x, 

$$
I (b) = \int_ {a} ^ {b} f (x) d x \leq \int_ {a} ^ {b} g (x) d x \leq \int_ {a} ^ {\infty} g (x) d x.
$$

Thus, the finite number $M = \int_{a}^{\infty} g(x) \, dx$ is an upper bound to the values of $I(b)$ . Therefore $I(b)$ cannot diverge to infinity, so it must must converge to a finite value as $b \to \infty$ . Hence $\int_{a}^{\infty} f(x) \, dx$ converges. This establishes that statement 1 holds. Since statement 2 is the contrapositive form of statement 1, it must hold as well. 

Although the theorem is stated for Type I improper integrals, a similar result is true for integrals of Type II as well. 

**EXAMPLE 6** These examples illustrate how we use Theorem 2.

(a) $\int_{1}^{\infty} e^{-x^{2}} dx$ converges because $0 < e^{-x^{2}} < e^{-x}$ for every $x \geq 1$ (Figure 8.19) and 

$$
\begin{array}{r l} \int_ {1} ^ {\infty} e ^ {- x} d x & = \lim _ {b \to \infty} \int_ {1} ^ {b} e ^ {- x} d x \\ & = \lim _ {b \to \infty} \left[ - e ^ {- x} d x \right] _ {1} ^ {b} \\ & = \lim _ {b \to \infty} (- e ^ {- b} + e ^ {- 1}) \\ & = \frac {1}{e} \end{array}
$$

converges. 

(b) $\int_1^\infty \frac{\sin^2x}{x^2} dx$ converges because 

$$
0 \leq \frac {\sin^ {2} x}{x ^ {2}} \leq \frac {1}{x ^ {2}} \quad \text { on } \quad [ 1, \infty) \quad \text { and } \quad \int_ {1} ^ {\infty} \frac {1}{x ^ {2}} d x \quad \text { converges. } \tag {Example3}
$$

$$
\int_ {1} ^ {\infty} \frac {1}{\sqrt {x ^ {2} - 0 . 1}} d x \quad \text { diverges   because } \tag {c}
$$

$$
\frac {1}{\sqrt {x ^ {2} - 0 . 1}} \geq \frac {1}{x} \quad \text { on } \quad [ 1, \infty) \quad \text { and } \quad \int_ {1} ^ {\infty} \frac {1}{x} d x \quad \text { diverges. } \tag {Example3}
$$

(d) $\int_0^{\pi /2}\frac{\cos x}{\sqrt{x}} dx$ converges because 

$$
0 \leq \frac {\cos x}{\sqrt {x}} \leq \frac {1}{\sqrt {x}} \quad \text { on } \quad \left[ 0, \frac {\pi}{2} \right], \quad 0 \leq \cos x \leq 1 \text {   on   } \left[ 0, \frac {\pi}{2} \right]
$$

and 

$$
\begin{array}{r l} \int_ {0} ^ {\pi / 2} \frac {d x}{\sqrt {x}} & = \lim _ {a \to 0 ^ {+}} \int_ {a} ^ {\pi / 2} \frac {d x}{\sqrt {x}} \\ & = \left. \lim _ {a \to 0 ^ {+}} \sqrt {4 x} \right| _ {a} ^ {\pi / 2} \quad 2 \sqrt {x} = \sqrt {4 x} \\ & = \lim _ {a \to 0 ^ {+}} (\sqrt {2 \pi} - \sqrt {4 a}) = \sqrt {2 \pi} \quad \text { converges }. \end{array}
$$

Although we have shown that the integrals in parts (a), (b), and (d) of Example 6 converge, we do not know the exact values of these integrals. For example, our computations in part (d) imply that 

$$
0 \leq \int_ {0} ^ {\pi / 2} \frac {\cos x}{\sqrt {x}} d x \leq \int_ {0} ^ {\pi / 2} \frac {d x}{\sqrt {x}} = \sqrt {2 \pi},
$$

but unless we do further calculations the most we can say is that the integral is some real number between 0 and $\sqrt{2\pi}$ . 

**THEOREM 3—Limit Comparison Test**

If the positive functions $f$ and $g$ are continuous on $[a, \infty)$ , and if 

$$
\lim _ {x \to \infty} \frac {f (x)}{g (x)} = L, 0 <   L <   \infty ,
$$

then 

$$
\int_ {a} ^ {\infty} f (x) d x \quad \text { and } \quad \int_ {a} ^ {\infty} g (x) d x
$$

either both converge or both diverge. 

We omit the proof of Theorem 3, which is similar to that of Theorem 2. 

If two functions $f(x)$ and $g(x)$ satisfy the hypotheses of Theorem 3 and their improper integrals both converge, it need not be the case that these two integrals have the same value. This is illustrated in the next example. 

**EXAMPLE 7** Show that 

$$
\int_ {1} ^ {\infty} \frac {d x}{1 + x ^ {2}}
$$

converges by comparison with $\int_{1}^{\infty}\left(1 / x^{2}\right)dx$ . Find and compare the values of the two integrals. 

![教材插图](/books/thomas-calculus/assets/3aeb3b610ef4165e04cf77c92382f256f3731f0ce470961a6f628cf201491c95.jpg)


**Solution** The functions $f(x) = 1 / x^2$ and $g(x) = 1 / (1 + x^2)$ are positive and continuous on $[1, \infty)$ . Also, 

$$
\begin{array}{c} \lim _ {x \to \infty} \frac {f (x)}{g (x)} = \lim _ {x \to \infty} \frac {1 / x ^ {2}}{1 / (1 + x ^ {2})} = \lim _ {x \to \infty} \frac {1 + x ^ {2}}{x ^ {2}} \\ = \lim _ {x \to \infty} \left(\frac {1}{x ^ {2}} + 1\right) = 0 + 1 = 1, \end{array}
$$

which is a positive finite limit (Figure 8.20). Therefore, $\int_{1}^{\infty}\frac{dx}{1 + x^{2}}$ converges because $\int_{1}^{\infty}\frac{dx}{x^{2}}$ converges. 

FIGURE 8.20 The functions in Example 7. 

The integrals converge to different values, however: 

$$
\int_ {1} ^ {\infty} \frac {d x}{x ^ {2}} = \frac {1}{2 - 1} = 1 \quad \text {   Example   3   }
$$

and 

$$
\int_ {1} ^ {\infty} \frac {d x}{1 + x ^ {2}} = \lim _ {b \rightarrow \infty} \int_ {1} ^ {b} \frac {d x}{1 + x ^ {2}} = \lim _ {b \rightarrow \infty} [ \tan^ {- 1} b - \tan^ {- 1} 1 ] = \frac {\pi}{2} - \frac {\pi}{4} = \frac {\pi}{4}.
$$


TABLE 8.5


<table><tr><td>b</td><td><eq>\int_{1}^{b}\frac{1-e^{-x}}{x}dx</eq></td></tr><tr><td>2</td><td>0.5226637569</td></tr><tr><td>5</td><td>1.3912002736</td></tr><tr><td>10</td><td>2.0832053156</td></tr><tr><td>100</td><td>4.3857862516</td></tr><tr><td>1000</td><td>6.6883713446</td></tr><tr><td>10000</td><td>8.9909564376</td></tr><tr><td>100000</td><td>11.2935415306</td></tr></table>

**EXAMPLE 8** Investigate the convergence of $\int_{1}^{\infty}\frac{1 - e^{-x}}{x} dx$ . 

**Solution** The integrand suggests a comparison of $f(x) = (1 - e^{-x})/x$ with $g(x) = 1/x$ . However, we cannot use the Direct Comparison Test because $f(x) \leq g(x)$ and the integral of $g(x)$ diverges. On the other hand, using the Limit Comparison Test, we find that 

$$
\lim _ {x \rightarrow \infty} \frac {f (x)}{g (x)} = \lim _ {x \rightarrow \infty} \left(\frac {1 - e ^ {- x}}{x}\right)\left(\frac {x}{1}\right) = \lim _ {x \rightarrow \infty} \left(1 - e ^ {- x}\right) = 1,
$$

which is a positive finite limit. Therefore, $\int_{1}^{\infty}\frac{1 - e^{-x}}{x} dx$ diverges because $\int_{1}^{\infty}\frac{dx}{x}$ diverges. Approximations to the improper integral are given in Table 8.5. Note that the values of these approximations do not appear to approach a fixed finite limit as $b\to \infty$ . 

### EXERCISES 8.8

#### Evaluating Improper Integrals

The integrals in Exercises 1–34 converge. Evaluate the integrals without using tables. 

1. $\int_0^\infty \frac{dx}{x^2 + 1}$ 

2. $\int_ {1} ^ {\infty} \frac {d x}{x ^ {1 . 0 0 1}}$

3. $\int_0^1\frac{dx}{\sqrt{x}}$ 

4. $\int_0^4\frac{dx}{\sqrt{4 - x}}$ 

5. $\int_{-1}^{1}\frac{dx}{x^{2 / 3}}$ 

6. $\int_{-8}^{1}\frac{dx}{x^{1 / 3}}$ 

7. $\int_0^1\frac{dx}{\sqrt{1 - x^2}}$ 

8. $\int_0^1\frac{dr}{r^{0.999}}$ 

9. $\int_{-\infty}^{-2}\frac{2dx}{x^2 - 1}$ 

10. $\int_{-\infty}^{2}\frac{2dx}{x^2 + 4}$ 

11. $\int_{2}^{\infty}\frac{2}{v^{2} - v} dv$ 

12. $\int_{2}^{\infty}\frac{2dt}{t^{2} - 1}$ 

13. $\int_{-\infty}^{\infty}\frac{2xdx}{(x^2 + 1)^2}$ 

14. $\int_{-\infty}^{\infty}\frac{x dx}{(x^2 + 4)^{3 / 2}}$ 

15. $\int_0^1\frac{\theta + 1}{\sqrt{\theta^2 + 2\theta}} d\theta$ 

16. $\int_0^2\frac{s + 1}{\sqrt{4 - s^2}} ds$ 

17. $\int_0^\infty \frac{dx}{(1 + x)\sqrt{x}}$ 

18. $\int_{1}^{\infty}\frac{1}{x\sqrt{x^{2} - 1}} dx$ 

19. $\int_0^\infty \frac{dv}{(1 + v^2)(1 + \tan^{-1}v)}$ 

20. $\int_0^\infty \frac{16\tan^{-1}x}{1 + x^2} dx$ 

21. $\int_{-\infty}^{0}\theta e^{\theta}d\theta$ 

22. $\int_0^\infty 2e^{-\theta}\sin \theta d\theta$ 

23. $\int_{-\infty}^{0}e^{-|x|}dx$ 

24. $\int_{-\infty}^{\infty} 2x e^{-x^2} dx$ 

25. $\int_0^1 x\ln x dx$ 

26. $\int_0^1 (-\ln x)dx$ 

27. $\int_0^2\frac{ds}{\sqrt{4 - s^2}}$ 

28. $\int_0^1\frac{4rdr}{\sqrt{1 - r^4}}$ 

29. $\int_1^2\frac{ds}{s\sqrt{s^2 - 1}}$ 

30. $\int_{2}^{4}\frac{dt}{t\sqrt{t^2 - 4}}$ 

31. $\int_{-1}^{4}\frac{dx}{\sqrt{|x|}}$ 

32. $\int_0^2\frac{dx}{\sqrt{|x - 1|}}$ 

33. $\int_{-1}^{\infty}\frac{d\theta}{\theta^2 + 5\theta + 6}$ 

34. $\int_0^\infty \frac{dx}{(x + 1)(x^2 + 1)}$ 

Testing for Convergence 

In Exercises 35–68, use integration, the Direct Comparison Test, or the Limit Comparison Test to test the integrals for convergence. If more than one method applies, use whatever method you prefer. 

35. $\int_{1 / 2}^{2}\frac{dx}{x\ln x}$ 

36. $\int_{-1}^{1}\frac{d\theta}{\theta^2 - 2\theta}$ 

37. $\int_{1 / 2}^{\infty}\frac{dx}{x(\ln x)^{3}}$ 

38. $\int_0^\infty \frac{d\theta}{\theta^2 - 1}$ 

39. $\int_0^{\pi /2}\tan \theta d\theta$ 

40. $\int_0^{\pi /2}\cot \theta d\theta$ 

41. $\int_0^1\frac{\ln x}{x^2} dx$ 

42. $\int_{1}^{2}\frac{dx}{x\ln x}$ 

Theory and Examples 

43. $\int_0^{\ln 2}x^{-2}e^{-1 / x}dx$ 

44. $\int_0^1\frac{e^{-\sqrt{x}}}{\sqrt{x}} dx$ 

45. $\int_0^\pi \frac{dt}{\sqrt{t} + \sin t}$ 

46. $\int_0^1\frac{dt}{t - \sin t}$ (Hint: $t\geq \sin t$ for $t\geq 0$ ) 

47. $\int_0^2\frac{dx}{1 - x^2}$ 

48. $\int_0^2\frac{dx}{1 - x}$ 

49. $\int_{-1}^{1}\ln |x|dx$ 

diverges and hence that 

50. $\int_{-1}^{1} - x\ln |x|dx$ 

$$
\int_ {- \infty} ^ {\infty} \frac {2 x d x}{x ^ {2} + 1}
$$

51. $\int_1^\infty \frac{dx}{x^3 + 1}$ 

52. $\int_4^\infty \frac{dx}{\sqrt{x} - 1}$ 

53. $\int_2^\infty \frac{dv}{\sqrt{v - 1}}$ 

54. $\int_0^\infty \frac{d\theta}{1 + e^\theta}$ 

55. $\int_0^\infty \frac{dx}{\sqrt{x^6 + 1}}$ 

56. $\int_{2}^{\infty}\frac{dx}{\sqrt{x^{2} - 1}}$ 

diverges. Then show that 

57. $\int_{1}^{\infty}\frac{\sqrt{x + 1}}{x^{2}} dx$ 

58. $\int_{2}^{\infty}\frac{xdx}{\sqrt{x^4 - 1}}$ 

$\lim_{b\to\infty}\int_{-b}^{b}\frac{2x dx}{x^{2}+1}=0.$ 

59. $\int_{\pi}^{\infty}\frac{2 + \cos x}{x} dx$ 

60. $\int_{\pi}^{\infty}\frac{1 + \sin x}{x^2} dx$ 

Exercises 83–86 are about the infinite region in the first quadrant between the curve $y = e^{-x}$ and the x-axis. 

61. $\int_4^\infty \frac{2dt}{t^{3 / 2} - 1}$ 

62. $\int_{2}^{\infty}\frac{1}{\ln x} dx$ 

63. $\int_1^\infty \frac{e^x}{x} dx$ 

64. $\int_{e^e}^{\infty}\ln (\ln x)dx$ 

65. $\int_{1}^{\infty}\frac{1}{\sqrt{e^{x} - x}} dx$ 

66. $\int_{1}^{\infty}\frac{1}{e^{x} - 2^{x}} dx$ 

67. $\int_{-\infty}^{\infty}\frac{dx}{\sqrt{x^4 + 1}}$ 

68. $\int_{-\infty}^{\infty}\frac{dx}{e^x + e^{-x}}$ 

In Exercises 69–80, determine whether the improper integral converges or diverges. If it converges, evaluate the integral. 

69. $\int_0^1\frac{1}{x\sqrt{x}} dx$ 

70. $\int_{2}^{\infty}\frac{1}{x\sqrt{x}} dx$ 

71. $\int_0^{32}\frac{1}{\sqrt[5]{x}} dx$ 

72. $\int_{1}^{\infty}\frac{1}{\sqrt[5]{x}} dx$ 

73. $\int_3^\infty \frac{1}{x^4} dx$ 

74. $\int_{-2}^{1}\frac{1}{x^4} dx$ 

75. $\int_0^\infty x^2 e^{x^3}dx$ 

76. $\int_{-\infty}^{0} x^2 e^{x^3} dx$ 

77. $\int_{-3}^{0}\frac{1}{x^2 + 3x} dx$ 

78. $\int_{1}^{\infty}\frac{1}{x^{2} + 3x} dx$ 

79. $\int_{-\infty}^{4}\frac{x}{(x^2 + 9)^{5 / 2}} dx$ 

80. $\int_{-\infty}^{4}\frac{x}{(x^2 + 9)^{2 / 5}} dx$ 

81. Find the values of $p$ for which each integral converges. a. $\int_{1}^{2}\frac{dx}{x(\ln x)^p}$ b. $\int_{2}^{\infty}\frac{dx}{x(\ln x)^p}$ 

82. $\int_{-\infty}^{\infty}f(x)dx$ may not equal $\lim_{b\to \infty}\int_{-b}^{b}f(x)dx.$ Show that $\int_0^\infty \frac{2xdx}{x^2 + 1}$ 

83. Find the area of the region. 

84. Find the centroid of the region. 

85. Find the volume of the solid generated by revolving the region about the y-axis. 

86. Find the volume of the solid generated by revolving the region about the x-axis. 

87. Find the area of the region that lies between the curves $y = \sec x$ and $y = \tan x$ from $x = 0$ to $x = \pi / 2$ . 

88. The region in Exercise 87 is revolved about the $x$ -axis to generate a solid. 

a. Find the volume of the solid. 

b. Show that the inner and outer surfaces of the solid have infinite area. 

89. Consider the infinite region in the first quadrant bounded by the graphs of $y = \frac{1}{x^2}$ , $y = 0$ , and $x = 1$ . 

a. Find the area of the region. 

b. Find the volume of the solid formed by revolving the region (i) about the x-axis; (ii) about the y-axis. 

90. Consider the infinite region in the first quadrant bounded by the graphs of $y = \frac{1}{\sqrt{x}}$ , $y = 0$ , $x = 0$ , and $x = 1$ . 

a. Find the area of the region. 

b. Find the volume of the solid formed by revolving the region (i) about the x-axis; (ii) about the y-axis. 

91. Evaluate the integrals. 

a. $\int_0^1\frac{dt}{\sqrt{t} (1 + t)}$ 

$$
\mathbf {b}. \int_ {0} ^ {\infty} \frac {d t}{\sqrt {t} (1 + t)}
$$

92. Evaluate $\int_{3}^{\infty}\frac{dx}{x\sqrt{x^2 - 9}}$ 

93. Estimating the value of a convergent improper integral whose domain is infinite 

a. Show that 

$$
\int_ {3} ^ {\infty} e ^ {- 3 x} d x = \frac {1}{3} e ^ {- 9} <   0. 0 0 0 0 4 2,
$$

and hence that $\int_3^\infty e^{-x^2}dx < 0.000042$ . Explain why this means that $\int_0^\infty e^{-x^2}dx$ can be replaced by $\int_0^3 e^{-x^2}dx$ without introducing an error of magnitude greater than 0.000042. 

T b. Evaluate $\int_{0}^{3} e^{-x^{2}} dx$ numerically. 

94. The infinite paint can or Gabriel's horn As Example 3 shows, the integral $\int_{1}^{\infty}(dx / x)$ diverges. This means that the integral 

$$
\int_ {1} ^ {\infty} 2 \pi \frac {1}{x} \sqrt {1 + \frac {1}{x ^ {4}}} d x,
$$

which measures the surface area of the solid of revolution traced out by revolving the curve $y = 1/x, 1 \leq x$ , about the x-axis, diverges also. By comparing the two integrals, we see that, for every finite value b > 1, 

$$
\int_ {1} ^ {b} 2 \pi \frac {1}{x} \sqrt {1 + \frac {1}{x ^ {4}}} d x > 2 \pi \int_ {1} ^ {b} \frac {1}{x} d x.
$$

![教材插图](/books/thomas-calculus/assets/eaa57de9de9885665c8fcabfa632ad9d13b1be94214b78a2d2c122363f911217.jpg)


However, the integral 

$$
\int_ {1} ^ {\infty} \pi \left(\frac {1}{x}\right) ^ {2} d x
$$

for the volume of the solid converges. 

a. Calculate it. 

b. This solid of revolution is sometimes described as a can that does not hold enough paint to cover its own interior. Think about that for a moment. It is common sense that a finite 

amount of paint cannot cover an infinite surface. But if we fill the horn with paint (a finite amount), then we will have covered an infinite surface. Explain the apparent contradiction. 

95. Sine-integral function The integral 

$$
\operatorname{Si} (x) = \int_ {0} ^ {x} \frac {\sin t}{t} d t,
$$

called the sine-integral function, has important applications in optics. 

T a. Plot the integrand $(\sin t)/t$ for t > 0. Is the sine-integral function everywhere increasing or decreasing? Do you think $\mathrm{Si}(x) = 0$ for $x \geq 0$ ? Check your answers by graphing the function $\mathrm{Si}(x)$ for $0 \leq x \leq 25$ . 

b. Explore the convergence of 

$$
\int_ {0} ^ {\infty} \frac {\sin t}{t} d t.
$$

If it converges, what is its value? 

96. Error function The function 

$$
\operatorname{erf} (x) = \int_ {0} ^ {x} \frac {2 e ^ {- t ^ {2}}}{\sqrt {\pi}} d t,
$$

called the error function, has important applications in probability and statistics. 

T a. Plot the error function for $0 \leq x \leq 25$ . 

b. Explore the convergence of 

$$
\int_ {0} ^ {\infty} \frac {2 e ^ {- t ^ {2}}}{\sqrt {\pi}} d t.
$$

If it converges, what appears to be its value? You will see how to confirm your estimate in Section 14.4, Exercise 41. 

97. Normal probability distribution The function 

$$
f (x) = \frac {1}{\sigma \sqrt {2 \pi}} e ^ {- \frac {1}{2} \left(\frac {x - \mu}{\sigma}\right) ^ {2}}
$$

is called the normal probability density function with mean $\mu$ and standard deviation $\sigma$ . The number $\mu$ tells where the distribution is centered, and $\sigma$ measures the “scatter” around the mean. 

From the theory of probability, it is known that 

$$
\int_ {- \infty} ^ {\infty} f (x) d x = 1.
$$

In what follows, let $\mu = 0$ and $\sigma = 1$ . 

T a. Draw the graph of f. Find the intervals on which f is increasing, the intervals on which f is decreasing, and any local extreme values and where they occur. 

b. Evaluate 

$$
\int_ {- n} ^ {n} f (x) d x
$$

for n = 1, 2, and 3. 

c. Give a convincing argument that 

$$
\int_ {- \infty} ^ {\infty} f (x) d x = 1.
$$

(Hint: Show that $0 < f(x) < e^{-x/2}$ for $x > 1$ , and for $b > 1$ , 

$$
\int_ {b} ^ {\infty} e ^ {- x / 2} d x \rightarrow 0 \quad \text { as } \quad b \rightarrow \infty .)
$$

98. Show that if $f(x)$ is integrable on every interval of real numbers, and if a and b are real numbers with a < b, then 

a. $\int_{-\infty}^{a}f(x)dx$ and $\int_{a}^{\infty}f(x)dx$ both converge if and only if 

$\int_{-\infty}^{b}f(x)dx$ and $\int_{b}^{\infty}f(x)dx$ both converge. 

$$
\mathbf {b}. \int_ {- \infty} ^ {a} f (x) d x + \int_ {a} ^ {\infty} f (x) d x = \int_ {- \infty} ^ {b} f (x) d x + \int_ {b} ^ {\infty} f (x) d x
$$

when the integrals involved converge. 

#### COMPUTER EXPLORATIONS

In Exercises 99–102, use a CAS to explore the integrals for various values of p (include noninteger values). For what values of p does the 

100. $\int_{e}^{\infty}x^{p}\ln x dx$ 

integral converge? What is the value of the integral when it does converge? Plot the integrand for various values of p. 

101. $\int_0^\infty x^p\ln x dx$ 

102. $\int_{-\infty}^{\infty} x^{p} \ln |x| dx$ 

Use a CAS to evaluate the integrals. 

103. $\int_0^{2 / \pi}\sin \frac{1}{x} dx$

104. $\int_0^{2 / \pi}x\sin \frac{1}{x} dx$

## CHAPTER 8 Questions to Guide Your Review

1. What is the formula for integration by parts? Where does it come from? Why might you want to use it? 

2. When applying the formula for integration by parts, how do you choose the u and dv? How can you apply integration by parts to an integral of the form $\int f(x) dx$ ? 

3. If an integrand is a product of the form $\sin^{n}x\cos^{m}x$ , where m and n are nonnegative integers, how do you evaluate the integral? Give a specific example of each case. 

4. What substitutions are made to evaluate integrals of $\sin mx$ sin nx, $\sin mx \cos nx$ , and $\cos mx \cos nx$ ? Give an example of each case. 

99. $\int_0^e x^p\ln xdx$ 

5. What substitutions are sometimes used to transform integrals involving $\sqrt{a^{2}-x^{2}}$ , $\sqrt{a^{2}+x^{2}}$ , and $\sqrt{x^{2}-a^{2}}$ into integrals that can be evaluated directly? Give an example of each case. 

6. What restrictions can you place on the variables involved in the three basic trigonometric substitutions to make sure the substitutions are reversible (have inverses)? 

7. What is the goal of the method of partial fractions? 

8. When the degree of a polynomial $f(x)$ is less than the degree of a polynomial $g(x)$ , how do you write $f(x) / g(x)$ as a sum of partial fractions if $g(x)$ 

a. is a product of distinct linear factors? 

b. consists of a repeated linear factor? 

c. contains an irreducible quadratic factor? 

What do you do if the degree of $f$ is not less than the degree of $g$ ? 

9. How are integral tables typically used? What do you do if a particular integral you want to evaluate is not listed in the table? 

10. What is a reduction formula? How are reduction formulas used? Give an example. 

11. How would you compare the relative merits of the Midpoint Rule, the Trapezoidal Rule, and Simpson's Rule? 

12. What is an improper integral of Type I? Type II? How are the values of various types of improper integrals defined? Give examples. 

13. What tests are available for determining the convergence and divergence of improper integrals that cannot be evaluated directly? Give examples of their use. 

14. What is a random variable? What is a continuous random variable? Give some specific examples. 

15. What is a probability density function? What is the probability that a continuous random variable has a value in the interval $[c, d]$ ? 

16. What is an exponentially decreasing probability density function? What are some typical events that might be modeled by this distribution? What do we mean when we say such distributions are memoryless? 

17. What is the expected value of a continuous random variable? What is the expected value of an exponentially distributed random variable? 

18. What is the median of a continuous random variable? What is the median of an exponential distribution? 

19. What does the variance of a random variable measure? What is the standard deviation of a continuous random variable $X$ ? 

20. What probability density function describes the normal distribution? What are some examples typically modeled by a normal distribution? How do we usually calculate probabilities for a normal distribution? 

21. In a normal distribution, what percentage of the population lies within 1 standard deviation of the mean? Within 2 standard deviations? 

## CHAPTER 8 Practice Exercises

### Integration by Parts

Evaluate the integrals in Exercises 1–8 using integration by parts. 

1. $\int \ln (x + 1)dx$ 

2. $\int x^{2}\ln x dx$ 

3. $\int \arctan 3x dx$ 

4. $\int \cos^{-1}\left(\frac{x}{2}\right)dx$ 

5. $\int (x + 1)^2 e^x dx$ 

6. $\int x^{2}\sin (1 - x)dx$ 

7. $\int e^{x}\cos 2x dx$ 

8. $\int x\sin x\cos xdx$ 

### Partial Fractions

Evaluate the integrals in Exercises 9–28. It may be necessary to use a substitution first. 

9. $\int \frac{x dx}{x^2 - 3x + 2}$ 

10. $\int \frac{x dx}{x^2 + 4x + 3}$ 

11. $\int \frac{dx}{x(x + 1)^2}$ 

12. $\int \frac{x + 1}{x^2(x - 1)} dx$ 

13. $\int \frac{\sin\theta d\theta}{\cos^2\theta + \cos\theta - 2}$ 

14. $\int \frac{\cos\theta d\theta}{\sin^2\theta + \sin\theta - 6}$ 

15. $\int \frac{3x^2 + 4x + 4}{x^3 + x} dx$ 

16. $\int \frac{4x dx}{x^3 + 4x}$ 

17. $\int \frac{v + 3}{2v^3 - 8v} dv$ 

18. $\int \frac{(3v - 7)dv}{(v - 1)(v - 2)(v - 3)}$ 

19. $\int \frac{dt}{t^4 + 4t^2 + 3}$ 

20. $\int \frac{tdt}{t^4 - t^2 - 2}$ 

21. $\int \frac{x^3 + x^2}{x^2 + x - 2} dx$ 

22. $\int \frac{x^3 + 1}{x^3 - x} dx$ 

23. $\int \frac{x^3 + 4x^2}{x^2 + 4x + 3} dx$ 

24. $\int \frac{2x^3 + x^2 - 21x + 24}{x^2 + 2x - 8} dx$ 

25. $\int \frac{dx}{x(3\sqrt{x + 1})}$ 

26. $\int \frac{dx}{x(1 + \sqrt[3]{x})}$ 

27. $\int \frac{ds}{e^s - 1}$ 

28. $\int \frac{ds}{\sqrt{e^s + 1}}$ 

Trigonometric Substitutions 

Evaluate the integrals in Exercises 29–32 (a) without using a trigonometric substitution, (b) using a trigonometric substitution. 

29. $\int \frac{ydy}{\sqrt{16 - y^2}}$ 

30. $\int \frac{x dx}{\sqrt{4 + x^2}}$ 

31. $\int \frac{x dx}{4 - x^2}$ 

$$
\int \frac {t d t}{\sqrt {4 t ^ {2} - 1}}
$$

Evaluate the integrals in Exercises 33–36.
33. $\int\frac{xdx}{9-x^{2}}$

34. $\int\frac{dx}{x(9-x^{2})}$

35. $\int\frac{dx}{9-x^{2}}$

36. $\int\frac{dx}{\sqrt{9-x^{2}}}$

Trigonometric Integrals 

Evaluate the integrals in Exercises 37–44. 

37. $\int \sin^3 x\cos^4 xdx$ 

38. $\int \cos^5 x\sin^5 xdx$ 

39. $\int \tan^4 x\sec^2 xdx$ 

40. $\int \tan^3 x\sec^3 xdx$ 

41. $\int \sin 5\theta \cos 6\theta d\theta$ 

42. $\int \sec^2\theta \sin^3\theta d\theta$ 

43. $\int \sqrt{1 + \cos(t / 2)} dt$ 

44. $\int e^{t}\sqrt{\tan^{2}e^{t} + 1} dt$ 

Numerical Integration 

45. According to the error-bound formula for Simpson's Rule, how many subintervals should you use to be sure of estimating the value of 

$$
\ln 3 = \int_ {1} ^ {3} \frac {1}{x} d x
$$

by Simpson's Rule with an error of no more than $10^{-4}$ in absolute value? (Remember that for Simpson's Rule, the number of subintervals has to be even.) 

46. A brief calculation shows that if $0 \leq x \leq 1$ , then the second derivative of $f(x) = \sqrt{1 + x^4}$ lies between 0 and 8. Based on this, about how many subdivisions would you need to estimate the integral of $f$ from 0 to 1 with an error no greater than $10^{-3}$ in absolute value using the Trapezoidal Rule? 

47. A direct calculation shows that 

$$
\int_ {0} ^ {\pi} 2 \sin^ {2} x d x = \pi .
$$

How close do you come to this value by using the Trapezoidal Rule with $n = 6$ ? The Midpoint Rule with $n = 6$ ? Simpson's Rule with $n = 6$ ? Try them and find out. 

48. You are planning to use Simpson's Rule to estimate the value of the integral 

$$
\int_ {1} ^ {2} f (x) d x
$$

with an error magnitude less than $10^{-5}$ . You have determined that $|f^{(4)}(x)| \leq 3$ throughout the interval of integration. How many subintervals should you use to ensure the required accuracy? (Remember that for Simpson's Rule, the number has to be even.) 

T 49. Mean temperature Compute the average value of the temperature function 

$$
f (x) = 2 0 \sin \left(\frac {2 \pi}{3 6 5} (x - 1 0 1)\right) - 4
$$

for a 365-day year. This is one way to estimate the annual mean air temperature in Fairbanks, Alaska. The National Weather Service's official figure, a numerical average of the daily normal mean air temperatures for the year, is $-3.5^{\circ}\mathrm{C}$ , which is slightly higher than the average value of $f(x)$ . 

50. Heat capacity of a gas Heat capacity $C_{v}$ is the amount of heat required to raise the temperature of a given mass of gas with constant volume by 1 °C, measured in units of cal/deg-mol (calories per degree gram molecular weight). The heat capacity of oxygen depends on its temperature T and satisfies the formula 

$$
C _ {v} = 8. 2 7 + 1 0 ^ {- 5} (2 6 T - 1. 8 7 T ^ {2}).
$$

Use Simpson's Rule to find the average value of $C_v$ and the temperature at which it is attained for $20^{\circ}\mathrm{C} \leq T \leq 675^{\circ}\mathrm{C}$ . 

51. Fuel efficiency An automobile computer gives a digital readout of fuel consumption in liters per hour. During a trip, a passenger recorded the fuel consumption every 5 min for a full hour of travel. 

<table><tr><td>Time</td><td>L/h</td><td>Time</td><td>L/h</td></tr><tr><td>0</td><td>2.5</td><td>35</td><td>2.5</td></tr><tr><td>5</td><td>2.4</td><td>40</td><td>2.4</td></tr><tr><td>10</td><td>2.3</td><td>45</td><td>2.3</td></tr><tr><td>15</td><td>2.4</td><td>50</td><td>2.4</td></tr><tr><td>20</td><td>2.4</td><td>55</td><td>2.4</td></tr><tr><td>25</td><td>2.5</td><td>60</td><td>2.3</td></tr><tr><td>30</td><td>2.6</td><td></td><td></td></tr></table>

a. Use the Trapezoidal Rule to approximate the total fuel consumption during the hour. 

b. If the automobile covered 60 km in the hour, what was its fuel efficiency (in kilometers per liter) for that portion of the trip? 

52. A new parking lot To meet the demand for parking, your town has allocated the area shown here. As the town engineer, you have been asked by the town council to find out if the lot can be built for $11,000. The cost to clear the land will be $1.00 a square meter, and the lot will cost $20.00 a square meter to pave. Use Simpson's Rule to find out if the job can be done for $11,000. 

![教材插图](/books/thomas-calculus/assets/890a410dbfe58f06dca12d2e0d50cff05d59d687e072c8656c8a37595d4747c2.jpg)


Improper Integrals 

Evaluate the improper integrals in Exercises 53–62. 

53. $\int_0^3\frac{dx}{\sqrt{9 - x^2}}$ 

54. $\int_0^1\ln x dx$ 

55. $\int_0^2\frac{dy}{(y - 1)^{2 / 3}}$ 

56. $\int_{-2}^{0}\frac{d\theta}{(\theta + 1)^{3 / 5}}$ 

57. $\int_{3}^{\infty}\frac{2du}{u^{2} - 2u}$ 

58. $\int_1^\infty \frac{3v - 1}{4v^3 - v^2} dv$ 

59. $\int_0^\infty x^2 e^{-x}dx$ 

60. $\int_{-\infty}^{0}xe^{3x}dx$ 

61. $\int_{-\infty}^{\infty}\frac{dx}{4x^2 + 9}$ 

62. $\int_{-\infty}^{\infty}\frac{4dx}{x^2 + 16}$ 

Which of the improper integrals in Exercises 63–68 converge and which diverge? 

63. $\int_{6}^{\infty}\frac{d\theta}{\sqrt{\theta^{2} + 1}}$ 

64. $\int_0^\infty e^{-u}\cos udu$ 

65. $\int_{1}^{\infty}\frac{\ln z}{z} dz$ 

66. $\int_1^\infty \frac{e^{-t}}{\sqrt{t}} dt$ 

67. $\int_{-\infty}^{\infty}\frac{2dx}{e^{x} + e^{-x}}$ 

68. $\int_{-\infty}^{\infty}\frac{dx}{x^2(1 + e^x)}$ 

Assorted Integrations 

Evaluate the integrals in Exercises 69–134. The integrals are listed in random order so you need to decide which integration technique to use. 

69. $\int xe^{2x}dx$ 

70. $\int_0^1 x^2 e^{x^3}dx$ 

71. $\int (\tan^2 x + \sec^2 x)dx$ 

72. $\int_0^{\pi /4}\cos^2 2x dx$ 

73. $\int x\sec^2 x dx$ 

74. $\int x\sec^2 (x^2)dx$ 

75. $\int \sin x\cos^2 x dx$ 

76. $\int \sin 2x\sin (\cos 2x)dx$ 

77. $\int_{-1}^{0}\frac{e^x}{e^x + e^{-x}} dx$ 

78. $\int (e^{2x} + e^{-x})^2 dx$ 

79. $\int \frac{x + 1}{x^4 - x^3} dx$ 

80. $\int \frac{e^x + 1}{e^x(e^{2x} - 4)} dx$ 

81. $\int \frac{e^x + e^{3x}}{e^{2x}} dx$ 

82. $\int (e^x - e^{-x})(e^x + e^{-x})^3 dx$ 

83. $\int_0^{\pi /3}\tan^3 x\sec^2 xdx$ 

84. $\int \tan^4 x\sec^4 xdx$ 

85. $\int_0^3 (x + 2)\sqrt{x + 1} dx$ 

86. $\int (x + 1)\sqrt{x^2 + 2x} dx$ 

87. $\int \cot x\csc^3 x dx$ 

88. $\int \sin x(\tan x - \cot x)^2 dx$ 

89. $\int \frac{x dx}{1 + \sqrt{x}}$ 

90. $\int \frac{x^3 + 2}{4 - x^2} dx$ 

91. $\int \sqrt{2x - x^2} dx$ 

92. $\int \frac{dx}{\sqrt{-2x - x^2}}$ 

93. $\int \frac{2 - \cos x + \sin x}{\sin^2x} dx$ 

94. $\int \sin^2\theta \cos^5\theta d\theta$ 

95. $\int \frac{9dv}{81 - v^4}$ 

96. $\int_{2}^{\infty}\frac{dx}{(x - 1)^{2}}$ 

97. $\int \theta \cos (2\theta +1)d\theta$ 

98. $\int \frac{x^3 dx}{x^2 - 2x + 1}$ 

99. $\int \frac{\sin 2\theta d\theta}{(1 + \cos 2\theta)^2}$ 

100. $\int_{\pi /4}^{\pi /2}\sqrt{1 + \cos 4x} dx$ 

101. $\int \frac{x dx}{\sqrt{2 - x}}$ 

102. $\int \frac{\sqrt{1 - v^2}}{v^2} dv$ 

103. $\int \frac{dy}{y^2 - 2y + 2}$ 

104. $\int \frac{x dx}{\sqrt{8 - 2x^2 - x^4}}$ 

105. $\int \frac{z + 1}{z^2(z^2 + 4)} dz$ 

106. $\int x^{2}(x - 1)^{1 / 3}dx$ 

107. $\int \frac{tdt}{\sqrt{9 - 4t^2}}$ 

108. $\int \frac{\arctan x}{x^2} dx$ 

109. $\int \frac{e^t dt}{e^{2t} + 3e^t + 2}$ 

110. $\int \tan^3 t dt$ 

111. $\int_1^\infty \frac{\ln y}{y^3} dy$ 

112. $\int y^{3 / 2}(\ln y)^{2}dy$ 

113. $\int e^{\ln \sqrt{x}}dx$ 

114. $\int e^{\theta}\sqrt{3 + 4e^{\theta}} d\theta$ 

115. $\int \frac{\sin 5tdt}{1 + (\cos 5t)^2}$ 

116. $\int \frac{dv}{\sqrt{e^{2v} - 1}}$ 

117. $\int \frac{dr}{1 + \sqrt{r}}$ 

118. $\int \frac{4x^3 - 20x}{x^4 - 10x^2 + 9} dx$ 

119. $\int \frac{x^3}{1 + x^2} dx$ 

120. $\int \frac{x^2}{1 + x^3} dx$ 

121. $\int \frac{1 + x^2}{1 + x^3} dx$ 

122. $\int \frac{1 + x^2}{(1 + x)^3} dx$ 

123. $\int \sqrt{x} \cdot \sqrt{1 + \sqrt{x}} dx$ 

124. $\int \sqrt{1 + \sqrt{1 + x}} dx$ 

125. $\int \frac{1}{\sqrt{x} \cdot \sqrt{1 + x}} dx$ 

126. $\int_0^{1 / 2}\sqrt{1 + \sqrt{1 - x^2}} dx$ 

127. $\int \frac{\ln x}{x + x\ln x} dx$ 

128. $\int \frac{1}{x\cdot\ln x\cdot\ln(\ln x)} dx$ 

129. $\int \frac{x^{\ln x}\ln x}{x} dx$ 

130. $\int (\ln x)^{\ln x}\left[\frac{1}{x} +\frac{\ln(\ln x)}{x}\right]dx$ 

131. $\int \frac{1}{x\sqrt{1 - x^4}} dx$ 

132. $\int \frac{\sqrt{1 - x}}{x} dx$ 

133. $\int \frac{\sin^2x}{1 + \sin^2x} dx$ 

134. $\int \frac{1 - \cos x}{1 + \cos x} dx$ 

135. Evaluate $\int_0^{\pi /2}\frac{\sin x}{\sin x + \cos x} dx$ in two ways: 

a. By evaluating $\int \frac{\sin x}{\sin x + \cos x} dx$ , then using the Evaluation Theorem. 

b. By showing that $\int_0^a f(x)dx = \int_0^a f(a - x)dx$ , then using this result. 

## CHAPTER 8 Additional and Advanced Exercises

### Evaluating Integrals

Evaluate the integrals in Exercises 1–6. 

1. $\int (\arcsin x)^2 dx$ 

2. $\int\frac{dx}{x(x+1)(x+2)\cdots(x+m)}$ 

3. $\int x\arcsin x dx$

4. $\int \sin^{-1}\sqrt{y} dy$

5. $\int \frac{dt}{t - \sqrt{1 - t^2}}$

6. $\int \frac{dx}{x^4 + 4}$

Evaluate the limits in Exercise 7 and 8.  
7. $\lim_{x\to \infty}\int_{-x}^{x}\sin tdt$

8. $\lim_{x\to 0^{+}}x\int_{x}^{1}\frac{\cos t}{t^2} dt$

Evaluate the limits in Exercise 9 and 10 by identifying them with definite integrals and evaluating the integrals. 

9. $\lim_{n\to \infty}\sum_{k = 1}^{n}\ln \sqrt[n]{1 + \frac{k}{n}}$

10. $\lim_{n\to \infty}\sum_{k = 0}^{n - 1}\frac{1}{\sqrt{n^2 - k^2}}$

### Applications

11. Finding arc length Find the length of the curve 

$$
y = \int_ {0} ^ {x} \sqrt {\cos 2 t} d t, 0 \leq x \leq \pi / 4.
$$

12. Finding arc length Find the length of the graph of the function $y = \ln(1 - x^{2})$ , $0 \leq x \leq 1/2$ . 

13. Finding volume The region in the first quadrant that is enclosed by the x-axis and the curve $y = 3x\sqrt{1 - x}$ is revolved about the y-axis to generate a solid. Find the volume of the solid. 

14. Finding volume The region in the first quadrant that is enclosed by the x-axis, the curve $y = 5/(x\sqrt{5 - x})$ , and the lines x = 1 and x = 4 is revolved about the x-axis to generate a solid. Find the volume of the solid. 

15. Finding volume The region in the first quadrant enclosed by the coordinate axes, the curve $y = e^{x}$ , and the line x = 1 is revolved about the y-axis to generate a solid. Find the volume of the solid. 

16. Finding volume The region in the first quadrant that is bounded above by the curve $y = e^{x} - 1$ , below by the x-axis, and on the right by the line $x = \ln 2$ is revolved about the line $x = \ln 2$ to generate a solid. Find the volume of the solid. 

17. Finding volume Let $R$ be the "triangular" region in the first quadrant that is bounded above by the line $y = 1$ , below by the curve $y = \ln x$ , and on the left by the line $x = 1$ . Find the volume of the solid generated by revolving $R$ about
a. the $x$ -axis.
b. the line $y = 1$ . 

18. Finding volume (Continuation of Exercise 17.) Find the volume of the solid generated by revolving the region R about
a. the y-axis.
b. the line x = 1. 

19. Finding volume The region between the x-axis and the curve 

$$
y = f (x) = \left\{ \begin{array}{l l} 0, & x = 0 \\ x \ln x, & 0 <   x \leq 2 \end{array} \right.
$$

is revolved about the x-axis to generate the solid shown here. 

a. Show that $f$ is continuous at $x = 0$ . 

b. Find the volume of the solid. 

![教材插图](/books/thomas-calculus/assets/7b62500d047346d2c994a2699eaef78ff6181b9c7bb88aaa65903c2dce27ec89.jpg)


20. Finding volume The infinite region bounded by the coordinate axes and the curve $y = -\ln x$ in the first quadrant is revolved about the x-axis to generate a solid. Find the volume of the solid. 

21. Centroid of a region Find the centroid of the region in the first quadrant that is bounded below by the x-axis, above by the curve $y = \ln x$ , and on the right by the line x = e. 

22. Centroid of a region Find the centroid of the region in the plane enclosed by the curves $y = \pm(1 - x^{2})^{-1/2}$ and the lines x = 0 and x = 1. 

23. Length of a curve Find the length of the curve $y = \ln x$ from $x = 1$ to $x = e$ . 

24. Finding surface area Find the area of the surface generated by revolving the curve in Exercise 23 about the y-axis. 

25. The surface generated by an astroid The graph of the equation $x^{2/3} + y^{2/3} = 1$ is an astroid (see accompanying figure). Find the area of the surface generated by revolving the curve about the $x$ -axis. 

![教材插图](/books/thomas-calculus/assets/3eba35761c271e32968cee4679ac141d0159753dcdcd8350c01cb9dcfe960be8.jpg)


26. Length of a curve Find the length of the curve 

$$
y = \int_ {1} ^ {x} \sqrt {\sqrt {t} - 1} d t, \quad 1 \leq x \leq 1 6.
$$

27. For what value or values of a does 

$$
\int_ {1} ^ {\infty} \left(\frac {a x}{x ^ {2} + 1} - \frac {1}{2 x}\right) d x
$$

converge? Evaluate the corresponding integral(s). 

28. For each $x > 0$ , let $G(x) = \int_0^\infty e^{-xt} dt$ . Prove that $xG(x) = 1$ for each $x > 0$ . 

29. Infinite area and finite volume What values of $p$ have the following property? The area of the region between the curve $y = x^{-p}$ , $1 \leq x < \infty$ , and the $x$ -axis is infinite but the volume of the solid generated by revolving the region about the $x$ -axis is finite. 

30. Infinite area and finite volume What values of p have the following property? The area of the region in the first quadrant enclosed by the curve $y = x^{-p}$ , the y-axis, the line x = 1, and the interval [0, 1] on the x-axis is infinite, but the volume of the solid generated by revolving the region about one of the coordinate axes is finite. 

31. Integrating the square of the derivative If $f$ is continuously differentiable on $[0,1]$ , and $f(1) = f(0) = -1/6$ , prove that 

$$
\int_ {0} ^ {1} (f ^ {\prime} (x)) ^ {2} d x \geq 2 \int_ {0} ^ {1} f (x) d x + \frac {1}{4}.
$$

Hint: Consider the inequality $0 \leq \int_{0}^{1}\left(f'(x) + x - \frac{1}{2}\right)^{2} dx$ . 

Source: Mathematics Magazine, vol. 84, no. 4, Oct. 2011. 

32. (Continuation of Exercise 31.) If $f$ is continuously differentiable on $[0, a]$ for $a > 0$ , and $f(a) = f(0) = b$ , prove that 

$$
\int_ {0} ^ {a} \left(f ^ {\prime} (x)\right) ^ {2} d x \geq 2 \int_ {0} ^ {a} f (x) d x - \left(2 a b + \frac {a ^ {3}}{1 2}\right).
$$

Hint: Consider the inequality $0 \leq \int_{0}^{a} \left( f'(x) + x - \frac{a}{2} \right)^{2} dx$ . Source: Mathematics Magazine, vol. 84, no. 4, Oct. 2011. 

The Substitution $z = \tan(x/2)$ The substitution 

$$
z = \tan {\frac {x}{2}}\tag{1}
$$

reduces the problem of integrating a rational expression in $\sin x$ and $\cos x$ to a problem of integrating a rational function of z. This in turn can be integrated by partial fractions. 

From the accompanying figure 

![教材插图](/books/thomas-calculus/assets/275be84e50a4a75622fef3e371ab31d53dd7b6e4bb60dd2bfbf0563cdd8466c9.jpg)


we can read the relation 

$$
\tan \frac {x}{2} = \frac {\sin x}{1 + \cos x}.
$$

To see the effect of the substitution, we calculate 

$$
\begin{array}{l} \cos x = 2 \cos^ {2} \left(\frac {x}{2}\right) - 1 = \frac {2}{\sec^ {2} (x / 2)} - 1 \\ \qquad = \frac {2}{1 + \tan^ {2} (x / 2)} - 1 = \frac {2}{1 + z ^ {2}} - 1 \\ \cos x = \frac {1 - z ^ {2}}{1 + z ^ {2}}, \end{array}\tag{2}
$$

and 

$$
\begin{array}{l} \sin x = 2 \sin \frac {x}{2} \cos \frac {x}{2} = 2 \frac {\sin (x / 2)}{\cos (x / 2)} \cdot \cos^ {2} \left(\frac {x}{2}\right) \\ \qquad = 2 \tan \frac {x}{2} \cdot \frac {1}{\sec^ {2} (x / 2)} = \frac {2 \tan (x / 2)}{1 + \tan^ {2} (x / 2)} \\ \sin x = \frac {2 z}{1 + z ^ {2}}. \end{array}\tag{3}
$$

Finally, $x = 2\arctan z$ , so 

$$
d x = \frac {2 d z}{1 + z ^ {2}}.\tag{4}
$$

Examples 

a. 

$$
\begin{array}{r l} \int \frac {1}{1 + \cos x} d x & = \int \frac {1 + z ^ {2}}{2} \frac {2 d z}{1 + z ^ {2}} \\ & = \int d z = z + C \\ & = \tan \left(\frac {x}{2}\right) + C \end{array}
$$

$$
\begin{array}{r l} \text { b. } & \int \frac {1}{2 + \sin x} d x = \int \frac {1 + z ^ {2}}{2 + 2 z + 2 z ^ {2}} \frac {2 d z}{1 + z ^ {2}} \\ & = \int \frac {d z}{z ^ {2} + z + 1} = \int \frac {d z}{(z + (1 / 2)) ^ {2} + 3 / 4} \\ & = \int \frac {d u}{u ^ {2} + a ^ {2}} \\ & = \frac {1}{a} \arctan \left(\frac {u}{a}\right) + C \\ & = \frac {2}{\sqrt {3}} \arctan \frac {2 z + 1}{\sqrt {3}} + C \\ & = \frac {2}{\sqrt {3}} \arctan \frac {1 + 2 \tan (x / 2)}{\sqrt {3}} + C \end{array}
$$

Use the substitutions in Equations (1)-(4) to evaluate the integrals in Exercises 33-40. Integrals like these arise in calculating the average angular velocity of the output shaft of a universal joint when the input and output shafts are not aligned. 

33. $\int\frac{dx}{1-\sin x}$ 

34. $\int \frac{dx}{1 + \sin x + \cos x}$ 

35. $\int_0^{\pi /2}\frac{dx}{1 + \sin x}$ 

36. $\int_{\pi /3}^{\pi /2}\frac{dx}{1 - \cos x}$ 

37. $\int_0^{\pi /2}\frac{d\theta}{2 + \cos\theta}$ 

38. $\int_{\pi /2}^{2\pi /3}\frac{\cos\theta d\theta}{\sin\theta\cos\theta + \sin\theta}$ 

39. $\int \frac{dt}{\sin t - \cos t}$ 

40. $\int \frac{\cos t dt}{1 - \cos t}$ 

Use the substitution $z = \tan (\theta / 2)$ to evaluate the integrals in Exercises 41 and 42.  
41. $\int \sec \theta d\theta$

42. $\int \csc \theta d\theta$

The Gamma Function and Stirling's Formula 

Euler's gamma function $\Gamma(x)$ ("gamma of $x$ "; $\Gamma$ is a Greek capital $g$ ) uses an integral to extend the factorial function from the nonnegative integers to other real values. The formula is 

$$
\Gamma (x) = \int_ {0} ^ {\infty} t ^ {x - 1} e ^ {- t} d t, x > 0.
$$

For each positive x, the number $\Gamma(x)$ is the integral of $t^{x-1}e^{-t}$ with respect to t from 0 to $\infty$ . Figure 8.21 shows the graph of $\Gamma$ near the origin. You will see how to calculate $\Gamma(1/2)$ if you do Additional Exercise 23 in Chapter 14. 

![教材插图](/books/thomas-calculus/assets/05bcd5d26f3481a05c8b0af935aad6ff2dd25a923da09153ab83d12b1de149a4.jpg)



FIGURE 8.21 Euler's gamma function $\Gamma(x)$ is a continuous function of $x$ whose value at each positive integer $n + 1$ is $n!$ . The defining integral formula for $\Gamma$ is valid only for $x > 0$ , but we can extend $\Gamma$ to negative noninteger values of $x$ with the formula $\Gamma(x) = (\Gamma(x + 1)) / x$ , which is the subject of Exercise 43.


43. If $n$ is a nonnegative integer, then $\Gamma(n + 1) = n!$ 

a. Show that $\Gamma(1) = 1$ . 

b. Then apply integration by parts to the integral for $\Gamma(x + 1)$ to show that $\Gamma(x + 1) = x\Gamma(x)$ . This gives 

$$
\begin{array}{c} \Gamma (2) = 1 \Gamma (1) = 1 \\ \Gamma (3) = 2 \Gamma (2) = 2 \\ \Gamma (4) = 3 \Gamma (3) = 6 \\ \vdots \\ \Gamma (n + 1) = n   \Gamma (n) = n! \end{array}\tag{1}
$$

c. Use mathematical induction to verify Equation (1) for every nonnegative integer $n$ . 

44. Stirling's formula Scottish mathematician James Stirling (1692-1770) showed that 

$$
\lim _ {x \rightarrow \infty} \left(\frac {e}{x}\right) ^ {x} \sqrt {\frac {x}{2 \pi}} \Gamma (x) = 1,
$$

so, for large x, 

$$
\Gamma (x) = \left(\frac {x}{e}\right) ^ {x} \sqrt {\frac {2 \pi}{x}} (1 + \varepsilon (x)) \quad \varepsilon (x) \rightarrow 0 \text {   as   } x \rightarrow \infty .\tag{2}
$$

Dropping $\varepsilon(x)$ leads to the approximation 

$\Gamma (x)\approx \left(\frac {x}{e}\right)^{x}\sqrt{\frac{2\pi}{x}}$ (Stirling's formula). 

(3) 

a. Stirling's approximation for $n!$ Use Equation (3) and the fact that $n! = n\Gamma(n)$ to show that $n! \approx \left(\frac{n}{e}\right)^n \sqrt{2n\pi}$ (Stirling's approximation). (4) 

As you will see if you do Exercise 114 in Section 9.1, Equation (4) leads to the approximation 

$$
\sqrt [ n ]{n !} \approx \frac {n}{e}.\tag{5}
$$

T b. Compare your calculator's value for $n!$ with the value given by Stirling's approximation for $n = 10, 20, 30, \ldots$ , as far as your calculator can go. 

T c. A refinement of Equation (2) gives 

$$
\Gamma (x) = \left(\frac {x}{e}\right) ^ {x} \sqrt {\frac {2 \pi}{x}} e ^ {1 / (1 2 x)} (1 + \varepsilon (x))
$$

or 

$$
\Gamma (x) \approx \left(\frac {x}{e}\right) ^ {x} \sqrt {\frac {2 \pi}{x}} e ^ {1 / (1 2 x)},
$$

which tells us that 

$$
n! \approx \left(\frac {n}{e}\right) ^ {n} \sqrt {2 n \pi} e ^ {1 / (1 2 n)}.\tag{6}
$$

Compare the values given for 10! by your calculator, Stirling's approximation, and Equation (6). 

## CHAPTER 8 Technology Application Projects

### Mathematica/Maple Projects

Projects can be found within MyLab Math. 

• Riemann, Trapezoidal, and Simpson Approximations 

Part I: Visualize the error involved in using Riemann sums to approximate the area under a curve. 

Part II: Build a table of values and compute the relative magnitude of the error as a function of the step size $\Delta x$ . 

Part III: Investigate the effect of the derivative function on the error. 

Parts IV and V: Trapezoidal Rule approximations. 

Part VI: Simpson's Rule approximations. 

- Games of Chance: Exploring the Monte Carlo Probabilistic Technique for Numerical Integration Graphically explore the Monte Carlo method for approximating definite integrals. 

- Computing Probabilities with Improper Integrals
More explorations of the Monte Carlo method for approximating definite integrals. 

![教材插图](/books/thomas-calculus/assets/40767cd4cb95a83de662e38e9542e96f6a2f051ba0c639a6b96cf3e8655fc64c.jpg)


Infinite Sequences and Series 

![教材插图](/books/thomas-calculus/assets/6a747227a0cafa8b90e315d71cea77cf99e286903667465d76b57f4e0f6e55b9.jpg)


OVERVIEW In this chapter we introduce the topic of infinite series. Such series give us precise ways to express many numbers and functions, both familiar and new, as arithmetic sums with infinitely many terms. For example, we will learn that 

$$
\frac {\pi}{4} = 1 - \frac {1}{3} + \frac {1}{5} - \frac {1}{7} + \frac {1}{9} - \dots
$$

and 

$$
\cos x = 1 - \frac {x ^ {2}}{2} + \frac {x ^ {4}}{2 4} - \frac {x ^ {6}}{7 2 0} + \frac {x ^ {8}}{4 0 , 3 2 0} - \dots .
$$

We need to develop a method to make sense of such expressions. Everyone knows how to add two numbers together, or even several. But how do you add together infinitely many numbers? Or, when adding together functions, how do you add infinitely many powers of x? In this chapter we answer these questions, which are part of the theory of infinite sequences and series. As with the differential and integral calculus, limits play a major role in the development of infinite series. 

One common and important application of series occurs in making computations with complicated functions. A hard-to-compute function is replaced by an expression that looks like an “infinite degree polynomial,” an infinite series in powers of x, as we see with the cosine function given above. Using the first few terms of this infinite series can allow for highly accurate approximations of functions by polynomials, enabling us to work with more general functions than those we have encountered before. These new functions are commonly obtained as solutions to differential equations arising in important applications of mathematics to science and engineering. 

The terms “sequence” and “series” are sometimes used interchangeably in spoken language. In mathematics, however, each has a distinct meaning. A sequence is a type of infinite list, whereas a series is an infinite sum. To understand the infinite sums described by series, we first must understand infinite sequences.
