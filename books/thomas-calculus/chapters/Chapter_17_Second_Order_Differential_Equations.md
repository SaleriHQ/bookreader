---
title: "Chapter 17: Second-Order Differential Equations"
order: 17
---

# Chapter 17: Second-Order Differential Equations

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 17.1 Second-Order Linear Equations

An equation of the form 

$$
P (x) y ^ {\prime \prime} (x) + Q (x) y ^ {\prime} (x) + R (x) y (x) = G (x),\tag{1}
$$

which is linear in $y$ and its derivatives, is called a second-order linear differential equation. We assume that the functions P, Q, R, and G are continuous throughout some open interval I. If G x( ) is identically zero on I, the equation is said to be homogeneous; otherwise it is called nonhomogeneous. Therefore, the form of a second-order linear homogeneous differential equation is 

$$
P (x) y ^ {\prime \prime} + Q (x) y ^ {\prime} + R (x) y = 0.\tag{2}
$$

We also assume that $P ( x )$ is never zero for any $x \in I .$ 

Two fundamental results are important to solving Equation (2). The first of these says that if we know two solutions $y _ { 1 }$ and $y _ { 2 }$ of the linear homogeneous equation, then any linear combination $y = c _ { 1 } y _ { 1 } + c _ { 2 } y _ { 2 }$ is also a solution for any constants $c _ { 1 }$ and $c _ { 2 } .$ . 

## THEOREM 1—The Superposition Principle

If $y _ { 1 } ( x )$ and $y _ { 2 } ( x )$ are two solutions to the linear homogeneous equation (2), then for any constants $c _ { 1 }$ and $c _ { 2 } ,$ the function 

$$
y (x) = c _ {1} y _ {1} (x) + c _ {2} y _ {2} (x)
$$

is also a solution to Equation (2). 

Proof Substituting y into Equation (2), we have 

$$
\begin{array}{l} P (x) y ^ {\prime \prime} + Q (x) y ^ {\prime} + R (x) y \\ = P (x) (c _ {1} y _ {1} + c _ {2} y _ {2}) ^ {\prime \prime} + Q (x) (c _ {1} y _ {1} + c _ {2} y _ {2}) ^ {\prime} + R (x) (c _ {1} y _ {1} + c _ {2} y _ {2}) \\ = P (x) (c _ {1} y _ {1} ^ {\prime \prime} + c _ {2} y _ {2} ^ {\prime \prime}) + Q (x) (c _ {1} y _ {1} ^ {\prime} + c _ {2} y _ {2} ^ {\prime}) + R (x) (c _ {1} y _ {1} + c _ {2} y _ {2}) \\ = c _ {1} (\underbrace {P (x) y _ {1} ^ {\prime \prime} + Q (x) y _ {1} ^ {\prime} + R (x) y _ {1}} _ {= 0,   y _ {1} \text { is   a   solution }}) + c _ {2} (\underbrace {P (x) y _ {2} ^ {\prime \prime} + Q (x) y _ {2} ^ {\prime} + R (x) y _ {2}} _ {= 0,   y _ {2} \text { is   a   solution }}) \\ = c _ {1} (0) + c _ {2} (0) = 0. \end{array}
$$

Therefore, $y = c _ { 1 } y _ { 1 } + c _ { 2 } y _ { 2 }$ is a solution of Equation (2). 

Theorem 1 immediately establishes the following facts concerning solutions to the linear homogeneous equation. 

1. A sum of two solutions $y _ { 1 } + y _ { 2 }$ to Equation (2) is also a solution. (Choose $c _ { 1 } = c _ { 2 } = 1 . )$ 

2. A constant multiple $k y _ { 1 }$ of any solution $y _ { 1 }$ to Equation (2) is also a solution. (Choose $c _ { 1 } = k \mathrm { a n d } c _ { 2 } = 0 . )$ 

3. The trivial solution $y ( x ) \equiv 0$ is always a solution to the linear homogeneous equation. (Choose $c _ { 1 } = c _ { 2 } = 0 . )$ 

The second fundamental result about solutions to the linear homogeneous equation concerns its general solution, or solution containing all solutions. This result says that there are two solutions $y _ { 1 }$ and $y _ { 2 }$ such that any solution is some linear combination of them for suitable values of the constants $c _ { 1 }$ and $c _ { 2 } .$ . However, not just any pair of solutions will do. The solutions must be linearly independent, which means that neither $y _ { 1 }$ nor $y _ { 2 }$ is a constant multiple of the other. For example, the functions $f ( x ) = e ^ { x } \mathrm { a n d } g ( x ) = x e ^ { x }$ are linearly independent, whereas $f ( x ) = x ^ { 2 }$ and $g ( x ) = 7 x ^ { 2 }$ are not (they are linearly dependent). These results on linear independence and the following theorem are proved in more advanced courses. 

THEOREM 2 If P, Q, and R are continuous over the open interval I and $P ( x )$ is never zero on I, then the linear homogeneous equation (2) has two linearly independent solutions $y _ { 1 }$ and $y _ { 2 }$ on I. Moreover, $\mathrm { i f } \ y _ { 1 }$ and $y _ { 2 }$ are any two linearly independent solutions of Equation (2), then the general solution is given by 

$$
y (x) = c _ {1} y _ {1} (x) + c _ {2} y _ {2} (x),
$$

where $c _ { 1 }$ and $c _ { 2 }$ are arbitrary constants. 

We now turn our attention to finding two linearly independent solutions to the special case of Equation (2) where $P , Q ,$ , and R are constant functions. 

## Constant-Coefficient Homogeneous Equations

Suppose we wish to solve the second-order homogeneous differential equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = 0,\tag{3}
$$

where $a , b ,$ and c are constants. To solve Equation (3), we seek a function that, when multiplied by a constant and added to a constant times its first derivative plus a constant times its second derivative, sums identically to zero. One function that behaves this way is the exponential function $y = e ^ { r x }$ , when r is a constant. Two differentiations of this exponential function give $y ^ { \prime } = r e ^ { r x }$ and $y ^ { \prime \prime } = r ^ { 2 } e ^ { r x }$ , which are just constant multiples of the original exponential. If we substitute $y = e ^ { r x }$ into Equation (3), we obtain 

$$
a r ^ {2} e ^ {r x} + b r e ^ {r x} + c e ^ {r x} = 0.
$$

Since the exponential function is never zero, we can divide this last equation through by $e ^ { r x }$ . Thus, $y = e ^ { r x }$ is a solution to Equation (3) if and only if r is a solution to the algebraic equation 

$$
a r ^ {2} + b r + c = 0.\tag{4}
$$

Equation (4) is called the auxiliary equation (or characteristic equation) of the differential equation $a y ^ { \prime \prime } + b y ^ { \prime } + c y = 0$ . The auxiliary equation is a quadratic equation with roots 

$$
r _ {1} = \frac {- b + \sqrt {b ^ {2} - 4 a c}}{2 a} \quad \text { and } \quad r _ {2} = \frac {- b - \sqrt {b ^ {2} - 4 a c}}{2 a}.
$$

There are three cases to consider, which depend on the value of the discriminant $b ^ { 2 } \ : - \ : 4 a c$ 

Case 1: $b ^ { 2 } - 4 a c > 0 .$ In this case the auxiliary equation has two real and unequal roots $r _ { 1 }$ and $r _ { 2 } .$ . Then $y _ { 1 } = e ^ { r _ { 1 } x } $ and $y _ { 2 } ~ = ~ e ^ { r _ { 2 } x }$ are two linearly independent solutions to Equation (3) because $e ^ { r _ { 2 } x }$ is not a constant multiple of $e ^ { r _ { 1 } x }$ (see Exercise 61). From Theorem 2 we conclude the following result. 

THEOREM 3 If $r _ { 1 }$ and $r _ { 2 }$ are two real and unequal roots of the auxiliary equation $a r ^ { 2 } + b r + c = 0$ , then 

$$
y = c _ {1} e ^ {r _ {1} x} + c _ {2} e ^ {r _ {2} x}
$$

is the general solution to $a y ^ { \prime \prime } + b y ^ { \prime } + c y = 0 .$ 

## **EXAMPLE 1**   Find the general solution of the differential equation

$$
y ^ {\prime \prime} - y ^ {\prime} - 6 y = 0.
$$

**Solution** Substitution of $y = e ^ { r x }$ into the differential equation yields the auxiliary equation 

$$
r ^ {2} - r - 6 = 0,
$$

which factors as 

$$
(r - 3) (r + 2) = 0.
$$

The roots are $r _ { 1 } = 3$ and $r _ { 2 } = - 2$ .  Thus, the general solution is 

$$
y = c _ {1} e ^ {3 x} + c _ {2} e ^ {- 2 x}.
$$

Case 2: $b ^ { 2 } - 4 a c = 0$ . In this case $r _ { 1 } = r _ { 2 } = - b / 2 a .$ . To simplify the notation, let $r = - b / 2 a$ . Then we have one solution $y _ { 1 } = e ^ { r x }$ with $2 a r + b = 0$ . Since multiplication of $e ^ { r x }$ by a constant fails to produce a second linearly independent solution, suppose we try multiplying by a function instead. The simplest such function would be $u ( x ) = x ,$ , so let’s see where $y _ { 2 } ~ = ~ x e ^ { r x }$ is also a solution. Substituting $y _ { 2 }$ into the differential equation gives 

THEOREM 4 If $r$ is the only (repeated) real root of the auxiliary equation $ar^2 + br + c = 0$ , then $y = c_1 e^{rx} + c_2 xe^{rx}$ is the general solution to $ay'' + by' + cy = 0$ . 

$$
\begin{array}{r l} a y _ {2} ^ {\prime \prime} + b y _ {2} ^ {\prime} + c y _ {2} & = a (2 r e ^ {r x} + r ^ {2} x e ^ {r x}) + b (e ^ {r x} + r x e ^ {r x}) + c x e ^ {r x} \\ & = (2 a r + b) e ^ {r x} + (a r ^ {2} + b r + c) x e ^ {r x} \\ & = 0 (e ^ {r x}) + (0) x e ^ {r x} = 0. \end{array}
$$

The first term is zero because $r = - b / 2 a ;$ the second term is zero because r solves the auxiliary equation. The functions $y _ { 1 } = e ^ { r x } $ and $y _ { 2 } ~ = ~ x e ^ { r x }$ are linearly independent (see Exercise 62). From Theorem 2 we conclude the following result. 

## **EXAMPLE 2** Find the general solution to

$$
y ^ {\prime \prime} + 4 y ^ {\prime} + 4 y = 0.
$$

**Solution** The auxiliary equation is 

$$
r ^ {2} + 4 r + 4 = 0,
$$

which factors into 

$$
(r + 2) ^ {2} = 0.
$$

Thus, $r = - 2$ is a double root. Therefore, the general solution is 

$$
y = c _ {1} e ^ {- 2 x} + c _ {2} x e ^ {- 2 x}.
$$

Case 3: $b ^ { 2 } - 4 a c < 0 .$ In this case the auxiliary equation has two complex roots: $r _ { 1 } = \alpha + i \beta$ and $r _ { 2 } = \alpha - i \beta _ { \mathrm { \scriptsize { : } } }$ , where α and $\beta$ are real numbers and $i ^ { 2 } = - 1$ . (These real numbers are $\alpha = - b / 2 a$ and $\beta = \sqrt { 4 a c - b ^ { 2 } } \big / 2 a . )$ These two complex roots then give rise to two linearly independent solutions: 

$$
y _ {1} = e ^ {(\alpha + i \beta) x} = e ^ {\alpha x} (\cos \beta x + i \sin \beta x) \quad \text { and } \quad y _ {2} = e ^ {(\alpha - i \beta) x} = e ^ {\alpha x} (\cos \beta x - i \sin \beta x).
$$

(The expressions involving the sine and cosine terms follow from Euler’s identity, as seen in the discussion of Taylor series.) However, the solutions $y _ { 1 }$ and $y _ { 2 }$ are complex valued rather than real valued. Nevertheless, because of the superposition principle (Theorem 1), we can obtain from them the two real-valued solutions 

$$
y _ {3} = \frac {1}{2} y _ {1} + \frac {1}{2} y _ {2} = e ^ {\alpha x} \cos \beta x \quad \text { and } \quad y _ {4} = \frac {1}{2 i} y _ {1} - \frac {1}{2 i} y _ {2} = e ^ {\alpha x} \sin \beta x.
$$

The functions $y _ { 3 }$ and $y _ { 4 }$ are linearly independent (see Exercise 63). From Theorem 2 we conclude the following result. 

THEOREM 5 If $r _ { 1 } = \alpha + i \beta$ and $r _ { 2 } = \alpha - i \beta$ are two complex roots of the auxiliary equation $a r ^ { 2 } + b r + c = 0$ , then 

$$
y = e ^ {\alpha x} \left(c _ {1} \cos \beta x + c _ {2} \sin \beta x\right)
$$

is the general solution to $a y ^ { \prime \prime } + b y ^ { \prime } + c y = 0 .$ 

## **EXAMPLE 3** Find the general solution to the differential equation

$$
y ^ {\prime \prime} - 4 y ^ {\prime} + 5 y = 0.
$$

**Solution** The auxiliary equation is 

$$
r ^ {2} - 4 r + 5 = 0.
$$

The roots are the complex pair $r = { \left( 4 \pm \sqrt { 1 6 - 2 0 } \right) } / { 2 }$ , or $r _ { 1 } = 2 + i$ and $r _ { 2 } = 2 - i .$ Thus, $\alpha = 2$ and $\beta = 1$ give the general solution 

$$
y = e ^ {2 x} \left(c _ {1} \cos x + c _ {2} \sin x\right).
$$

## Initial Value and Boundary Value Problems

To determine a unique solution to a first-order linear differential equation, it was sufficient to specify the value of the solution at a single point. Since the general solution to a secondorder equation contains two arbitrary constants, it is necessary to specify two conditions. One way of doing this is to specify the value of the solution function and the value of its derivative at a single point: $y ( x _ { 0 } ) = y _ { 0 }$ and $y ^ { \prime } ( x _ { 0 } ) = y _ { 1 } .$ These conditions are called initial conditions. The following result is proved in more advanced texts and guarantees the existence of a unique solution for both homogeneous and nonhomogeneous second-order linear initial value problems. 

THEOREM 6 If P Q,   ,  R, and G are continuous throughout an open interval I, then there exists one and only one function $y ( x )$ satisfying both the differential equation 

$$
P (x) y ^ {\prime \prime} (x) + Q (x) y ^ {\prime} (x) + R (x) y (x) = G (x)
$$

on the interval I, and the initial conditions 

$$
y (x _ {0}) = y _ {0} \quad \text { and } \quad y ^ {\prime} (x _ {0}) = y _ {1}
$$

at the specified point $x _ { 0 } \in I .$ 

It is important to realize that any real values can be assigned to $y _ { 0 }$ and $y _ { 1 } ,$ and Theorem 6 applies. Here is an example of an initial value problem for a homogeneous equation. 

**EXAMPLE 4** Find the particular solution to the initial value problem 

$$
y ^ {\prime \prime} - 2 y ^ {\prime} + y = 0, \quad y (0) = 1, \quad y ^ {\prime} (0) = - 1.
$$

**Solution** The auxiliary equation is 

$$
r ^ {2} - 2 r + 1 = (r - 1) ^ {2} = 0.
$$

The repeated real root is $r = 1 .$ , giving the general solution 

$$
y = c _ {1} e ^ {x} + c _ {2} x e ^ {x}.
$$

Then 

$$
y ^ {\prime} = c _ {1} e ^ {x} + c _ {2} (x + 1) e ^ {x}.
$$

From the initial conditions we have 

$$
1 = c _ {1} + c _ {2} \cdot 0 \quad \text { and } \quad - 1 = c _ {1} + c _ {2} \cdot 1.
$$

![[0b01aa264cb533e4c2dd35a448fa395ce93c6befc41ef7119286931638e91539.jpg|image]]



FIGURE 17.1 Particular solution curve for Example 4.


Thus, $c _ { 1 } = 1 { \mathrm { a n d } } c _ { 2 } = - 2$ . The unique solution satisfying the initial conditions is 

The solution curve is shown in Figure 17.1. 

$$
y = e ^ {x} - 2 x e ^ {x}.
$$

Another approach to determine the values of the two arbitrary constants in the general solution to a second-order differential equation is to specify the values of the solution function at two different points in the interval I. That is, we solve the differential equation subject to the boundary values 

$$
y (x _ {1}) = y _ {1} \quad \text { and } \quad y (x _ {2}) = y _ {2},
$$

where $x _ { 1 }$ and $x _ { 2 }$ both belong to I. Here again the values for $y _ { 1 }$ and $y _ { 2 }$ can be any real numbers. The differential equation together with specified boundary values is called a boundary value problem. Unlike the result stated in Theorem 6, boundary value problems do not always possess a solution, or more than one solution may exist (see Exercise 65). These problems are studied in more advanced texts, but here is an example for which there is a unique solution. 

**EXAMPLE 5** Solve the boundary value problem 

$$
y ^ {\prime \prime} + 4 y = 0, \quad y (0) = 0, \quad y \left(\frac {\pi}{1 2}\right) = 1.
$$

**Solution** The auxiliary equation is $r ^ { 2 } + 4 = 0 .$ which has the complex roots $r = \pm 2 i .$ The general solution to the differential equation is 

$$
y = c _ {1} \cos 2 x + c _ {2} \sin 2 x.
$$

The boundary conditions are satisfied if 

$$
y (0) = c _ {1} \cdot 1 + c _ {2} \cdot 0 = 0
$$

$$
y \left(\frac {\pi}{1 2}\right) = c _ {1} \cos \left(\frac {\pi}{6}\right) + c _ {2} \sin \left(\frac {\pi}{6}\right) = 1.
$$

It follows that $c _ { 1 } = 0$ and $c _ { 2 } = 2 .$ . The solution to the boundary value problem is 

$$
y = 2 \sin 2 x.
$$

## EXERCISES

## 17.1

In Exercises 1–30, find the general solution of the given equation. 

1. $y ^ { \prime \prime } - y ^ { \prime } - 1 2 y = 0$ 

2. $3 y ^ { \prime \prime } - y ^ { \prime } = 0$ 

3. $y ^ { \prime \prime } + 3 y ^ { \prime } - 4 y = 0$ 

4. $y ^ { \prime \prime } - 9 y = 0$ 

5. $y ^ { \prime \prime } - 4 y = 0$ 

6. $y ^ { \prime \prime } - 6 4 y = 0$ 

7. $2 y ^ { \prime \prime } - y ^ { \prime } - 3 y = 0$ 

8. $9 y ^ { \prime \prime } - y = 0$ 

9. $8 y ^ { \prime \prime } - 1 0 y ^ { \prime } - 3 y = 0$ 

10. $3 y ^ { \prime \prime } - 2 0 y ^ { \prime } + 1 2 y = 0$ 

11. $y ^ { \prime \prime } + 9 y = 0$ 

12. $y ^ { \prime \prime } + 4 y ^ { \prime } + 5 y = 0$ 

13. $y ^ { \prime \prime } + 2 5 y = 0$ 

14. $y ^ { \prime \prime } + y = 0$ 

15. $y ^ { \prime \prime } - 2 y ^ { \prime } + 5 y = 0$ 

16. $y ^ { \prime \prime } + 1 6 y = 0$ 

17. $y ^ { \prime \prime } + 2 y ^ { \prime } + 4 y = 0$ 

18. $y ^ { \prime \prime } - 2 y ^ { \prime } + 3 y = 0$ 

19. $y ^ { \prime \prime } + 4 y ^ { \prime } + 9 y = 0$ 

20. $4 y ^ { \prime \prime } - 4 y ^ { \prime } + 1 3 y = 0$ 

21. $y ^ { \prime \prime } = 0$ 

22. $y ^ { \prime \prime } + 8 y ^ { \prime } + 1 6 y = 0$ 

23. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } + 4 { \frac { d y } { d x } } + 4 y = 0$ 

25. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } + 6 { \frac { d y } { d x } } + 9 y = 0$ 

27. $4 { \frac { d ^ { 2 } y } { d x ^ { 2 } } } + 4 { \frac { d y } { d x } } + y = 0$ 

24. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } - 6 { \frac { d y } { d x } } + 9 y = 0$ 

29. $9 { \frac { d ^ { 2 } y } { d x ^ { 2 } } } + 6 { \frac { d y } { d x } } + y = 0$ 

26. $4 { \frac { d ^ { 2 } y } { d x ^ { 2 } } } - 1 2 { \frac { d y } { d x } } + 9 y = 0$ 

28. $4 { \frac { d ^ { 2 } y } { d x ^ { 2 } } } - 4 { \frac { d y } { d x } } + y = 0$ 

30. $9 { \frac { d ^ { 2 } y } { d x ^ { 2 } } } - 1 2 { \frac { d y } { d x } } + 4 y = 0$ 

In Exercises 31–40, find the unique solution of the second-order initial value problem. 

31. $y ^ { \prime \prime } + 6 y ^ { \prime } + 5 y = 0 , y ( 0 ) = 0 , y ^ { \prime } ( 0 ) = 3$ 

32. $y ^ { \prime \prime } + 1 6 y = 0 , y ( 0 ) = 2 , y ^ { \prime } ( 0 ) = - 2$ 

33. $y ^ { \prime \prime } + 1 2 y = 0 , y ( 0 ) = 0 , y ^ { \prime } ( 0 ) = 1$ 

34. $1 2 y ^ { \prime \prime } + 5 y ^ { \prime } - 2 y = 0 , y ( 0 ) = 1 , y ^ { \prime } ( 0 ) = - 1$ 

35. y y ′′ + = 8 0, ( y y 0) = −1,   (′ 0) = 2 

36. y y′′ + 4 4′ + =y y0, (0) 0= , y′(0) 1= 

37. $y ^ { \prime \prime } - 4 y ^ { \prime } + 4 y = 0 , y ( 0 ) = 1 , y ^ { \prime } ( 0 ) = 0$ 

38. $4 y ^ { \prime \prime } - 4 y ^ { \prime } + y = 0 , y ( 0 ) = 4 , y ^ { \prime } ( 0 ) = 4$ 

$$
4 \frac {d ^ {2} y}{d x ^ {2}} + 1 2 \frac {d y}{d x} + 9 y = 0, \quad y (0) = 2, \frac {d y}{d x} (0) = 1
$$

$$
9 \frac {d ^ {2} y}{d x ^ {2}} - 1 2 \frac {d y}{d x} + 4 y = 0, \quad y (0) = - 1, \frac {d y}{d x} (0) = 1
$$

In Exercises 41–55, find the general solution. 

41. $y ^ { \prime \prime } - 2 y ^ { \prime } - 3 y = 0$ 

$$
4 2. 6 y ^ {\prime \prime} - y ^ {\prime} - y = 0
$$

43. $4 y ^ { \prime \prime } + 4 y ^ { \prime } + y = 0$ 

$$
4 4. 9 y ^ {\prime \prime} + 1 2 y ^ {\prime} + 4 y = 0
$$

45. $4 y ^ { \prime \prime } + 2 0 y = 0$ 

$$
4 6. y ^ {\prime \prime} + 2 y ^ {\prime} + 2 y = 0
$$

47. $2 5 y ^ { \prime \prime } + 1 0 y ^ { \prime } + y = 0$ 

$$
4 8. 6 y ^ {\prime \prime} + 1 3 y ^ {\prime} - 5 y = 0
$$

49. $4 y ^ { \prime \prime } + 4 y ^ { \prime } + 5 y = 0$ 

$$
\mathbf {5 0 .} y ^ {\prime \prime} + 4 y ^ {\prime} + 6 y = 0
$$

51. $1 6 y ^ { \prime \prime } - 2 4 y ^ { \prime } + 9 y = 0$ 

$$
5 2. 6 y ^ {\prime \prime} - 5 y ^ {\prime} - 6 y = 0
$$

53. $9 y ^ { \prime \prime } + 2 4 y ^ { \prime } + 1 6 y = 0$ 

$$
5 4. 4 y ^ {\prime \prime} + 1 6 y ^ {\prime} + 5 2 y = 0
$$

55. $6 y ^ { \prime \prime } - 5 y ^ { \prime } - 4 y = 0$ 

In Exercises 56–60, solve the initial value problem. 

56. $y ^ { \prime \prime } - 2 y ^ { \prime } + 2 y = 0 , y ( 0 ) = 0 , y ^ { \prime } ( 0 ) = 2$ 

57. $y ^ { \prime \prime } + 2 y ^ { \prime } + y = 0 , y ( 0 ) = 1 , y ^ { \prime } ( 0 ) = 1$ 

58. $4 y ^ { \prime \prime } - 4 y ^ { \prime } + y = 0 , y ( 0 ) = - 1 , y ^ { \prime } ( 0 ) = 2$ 

59. $3 y ^ { \prime \prime } + y ^ { \prime } - 1 4 y = 0 , y ( 0 ) = 2 , y ^ { \prime } ( 0 ) = - 1$ 

60. $4 y ^ { \prime \prime } + 4 y ^ { \prime } + 5 y = 0 , y ( \pi ) = 1 , y ^ { \prime } ( \pi ) = 0$ 

61. Prove that the two solution functions in Theorem 3 are linearly independent. 

62. Prove that the two solution functions in Theorem 4 are linearly independent. 

63. Prove that the two solution functions in Theorem 5 are linearly independent. 

64. Prove that if $y _ { 1 }$ and $y _ { 2 }$ are linearly independent solutions to the homogeneous equation (2), then the functions $y _ { 3 } = y _ { 1 } + y _ { 2 }$ and $y _ { 4 } = y _ { 1 } - y _ { 2 }$ are also linearly independent solutions. 

65. a. Show that there is no solution to the boundary value problem 

$$
y ^ {\prime \prime} + 4 y = 0, \quad y (0) = 0, y (\pi) = 1.
$$

b. Show that there are infinitely many solutions to the boundary value problem 

$$
y ^ {\prime \prime} + 4 y = 0, \quad y (0) = 0, y (\pi) = 0.
$$

66. Show that ${ \mathrm { f } } a , b ,$ and c are positive constants, then all solutions of the homogeneous differential equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = 0
$$

approach zero as $x \ \longrightarrow \ \infty .$ 

## 17.2 Nonhomogeneous Linear Equations

In this section we study two methods for solving second-order linear nonhomogeneous differential equations with constant coefficients. These are the methods of undetermined coefficients and variation of parameters. We begin by considering the form of the general solution. 

## Form of the General **Solution**

Suppose we wish to solve the nonhomogeneous equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = G (x),\tag{1}
$$

where $a , b ,$ and c are constants and G is continuous over some open interval I. Let $y _ { \mathrm { c } } = c _ { 1 } y _ { 1 } + c _ { 2 } y _ { 2 }$ be the general solution to the associated complementary equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = 0.\tag{2}
$$

(We learned how to find $y _ { \mathrm { c } }$ in Section 17.1.) Now suppose we could somehow come up with a particular function $y _ { \mathfrak { p } }$ that solves the nonhomogeneous equation (1). Then the sum 

$$
y = y _ {\mathrm{c}} + y _ {\mathrm{p}}\tag{3}
$$

also solves the nonhomogeneous equation (1) because 

$$
\begin{array}{l} a \left(y _ {\mathrm{c}} + y _ {\mathrm{p}}\right) ^ {\prime \prime} + b \left(y _ {\mathrm{c}} + y _ {\mathrm{p}}\right) ^ {\prime} + c \left(y _ {\mathrm{c}} + y _ {\mathrm{p}}\right) \\ = \left(a y _ {\mathrm{c}} ^ {\prime \prime} + b y _ {\mathrm{c}} ^ {\prime} + c y _ {\mathrm{c}}\right) + \left(a y _ {\mathrm{p}} ^ {\prime \prime} + b y _ {\mathrm{p}} ^ {\prime} + c y _ {\mathrm{p}}\right) \\ = 0 + G (x) \quad y _ {\mathrm{c}} \text {solves Eq. (2) and y_{p} solves Eq. (1)} \\ = G (x). \end{array}
$$

Moreover, if $y = y ( x )$ is the general solution to the nonhomogeneous equation (1), it must have the form of Equation (3). The reason for this last statement follows from the observation that for any function $y _ { \mathrm { { p } } }$ satisfying Equation (1), we have 

$$
\begin{array}{r l} a \big (y - y _ {\mathrm{p}} \big) ^ {\prime \prime} + b \big (y - y _ {\mathrm{p}} \big) ^ {\prime} + c \big (y - y _ {\mathrm{p}} \big) \\ & = (a y ^ {\prime \prime} + b y ^ {\prime} + c y) - \big (a y _ {\mathrm{p}} ^ {\prime \prime} + b y _ {\mathrm{p}} ^ {\prime} + c y _ {\mathrm{p}} \big) \\ & = G (x) - G (x) = 0. \end{array}
$$

Thus, $y _ { \mathrm { c } } = y - y _ { \mathrm { p } }$ is the general solution to the homogeneous equation (2). We have established the following result. 

THEOREM 7 The general solution $y = y ( x )$ to the nonhomogeneous differential equation (1) has the form 

$$
y = y _ {\mathrm{c}} + y _ {\mathrm{p}},
$$

where the complementary solution $y _ { \mathrm { c } }$ is the general solution to the associated homogeneous equation (2), and $y _ { \mathrm { { p } } }$ is any particular solution to the nonhomogeneous equation (1). 

## The Method of Undetermined Coefficients

This method for finding a particular solution $y _ { \mathrm { { p } } }$ to the nonhomogeneous equation (1) applies to special cases for which G x( ) is a sum of terms of various polynomials $p ( x )$ multiplying an exponential with possibly sine or cosine factors. That ${ \mathrm { i s } } , G ( x )$ is a sum of terms of the following forms: 

$$
p _ {1} (x) e ^ {r x}, \quad p _ {2} (x) e ^ {\alpha x} \cos \beta x, \quad p _ {3} (x) e ^ {\alpha x} \sin \beta x.
$$

For instance, $1 - x , e ^ { 2 x } , x e ^ { x } .$ ,   cos $x ,$ and $5 e ^ { x } \mathrm { ~ - ~ }$ s x in 2  represent functions in this category. (Essentially these are functions solving homogeneous linear differential equations with constant coefficients, but the equations may be of order higher than two.) We now present several examples illustrating the method. 

## **EXAMPLE 1**   Solve the nonhomogeneous equation $y ^ { \prime \prime } - 2 y ^ { \prime } - 3 y = 1 - x ^ { 2 }$

**Solution** The auxiliary equation for the complementary equation $y ^ { \prime \prime } - 2 y ^ { \prime } - 3 y = 0$ is 

$$
r ^ {2} - 2 r - 3 = (r + 1) (r - 3) = 0.
$$

It has the roots $r = - 1$ and $r = 3 ,$ giving the complementary solution 

$$
y _ {\mathrm{c}} = c _ {1} e ^ {- x} + c _ {2} e ^ {3 x}.
$$

Now $G ( x ) = 1 - x ^ { 2 }$ is a polynomial of degree 2. It would be reasonable to assume that a particular solution to the given nonhomogeneous equation is also a polynomial of degree 2 because if y is a polynomial of degree 2, then $y ^ { \prime \prime } - 2 y ^ { \prime } - 3 y$ is also a polynomial of degree 2. So we seek a particular solution of the form 

$$
y _ {\mathrm{p}} = A x ^ {2} + B x + C.
$$

We need to determine the unknown coefficients A, B, and C. When we substitute the polynomial $y _ { \mathrm { { p } } }$ and its derivatives into the given nonhomogeneous equation, we obtain 

$$
2 A - 2 (2 A x + B) - 3 \left(A x ^ {2} + B x + C\right) = 1 - x ^ {2},
$$

or, collecting terms with like powers of $x ,$ 

$$
- 3 A x ^ {2} + (- 4 A - 3 B) x + (2 A - 2 B - 3 C) = 1 - x ^ {2}.
$$

This last equation holds for all values of x if its two sides are identical polynomials of degree 2. Thus, we equate corresponding powers of x to get 

$$
- 3 A = - 1, \quad - 4 A - 3 B = 0, \quad \text { and } \quad 2 A - 2 B - 3 C = 1.
$$

These equations imply in turn that $A = 1 / 3 , B = - 4 / 9$ , and $C = 5 / 2 7$ . Substituting these values into the quadratic expression for our particular solution gives 

$$
y _ {\mathrm{p}} = \frac {1}{3} x ^ {2} - \frac {4}{9} x + \frac {5}{2 7}.
$$

By Theorem 7, the general solution to the nonhomogeneous equation is 

$$
y = y _ {\mathrm{c}} + y _ {\mathrm{p}} = c _ {1} e ^ {- x} + c _ {2} e ^ {3 x} + \frac {1}{3} x ^ {2} - \frac {4}{9} x + \frac {5}{2 7}.
$$

## **EXAMPLE 2** Find a particular solution of $y ^ { \prime \prime } - y ^ { \prime } = 2$ sin x.

**Solution** If we try to find a particular solution of the form 

$$
y _ {\mathrm{p}} = A \sin x
$$

and substitute the derivatives of $y _ { \mathrm { { p } } }$ in the given equation, we find that A must satisfy the equation 

$$
- A \sin x + A \cos x = 2 \sin x
$$

for all values of x. Since this requires A to equal both −2 and 0 at the same time, we conclude that the nonhomogeneous differential equation has no solution of the form A x sin . 

It turns out that the required form is the sum 

$$
y _ {p} = A \sin x + B \cos x.
$$

The result of substituting the derivatives of this new trial solution into the differential equation is 

$$
- A \sin x - B \cos x - (A \cos x - B \sin x) = 2 \sin x,
$$

or 

$$
(B - A) \sin x - (A + B) \cos x = 2 \sin x.
$$

This last equation must be an identity. Equating the coefficients for like terms on each side then gives 

$$
B - A = 2 \quad \text { and } \quad A + B = 0.
$$

Simultaneous solution of these two equations gives A = −1 and B = 1. Our particular solution is 

$$
y _ {\mathrm{p}} = \cos x - \sin x.
$$

## **EXAMPLE 3** Find a particular solution of $y ^ { \prime \prime } - 3 y ^ { \prime } + 2 y = 5 e ^ { x }$

**Solution** If we substitute 

$$
y _ {\mathrm{p}} = A e ^ {x}
$$

and its derivatives into the differential equation, we find that 

$$
A e ^ {x} - 3 A e ^ {x} + 2 A e ^ {x} = 5 e ^ {x},
$$

or 

$$
0 = 5 e ^ {x}.
$$

However, the exponential function is never zero. The trouble can be traced to the fact that $\scriptstyle y \ = \ e ^ { x }$ is already a solution of the related homogeneous equation 

$$
y ^ {\prime \prime} - 3 y ^ {\prime} + 2 y = 0.
$$

The auxiliary equation is 

$$
r ^ {2} - 3 r + 2 = (r - 1) (r - 2) = 0,
$$

which has $r = 1$ as a root. So we would expect $A e ^ { x }$ to become zero when substituted into the left-hand side of the differential equation. 

The appropriate way to modify the trial solution in this case is to multiply $A e ^ { x }$ by x. Thus, our new trial solution is 

$$
y _ {\mathrm{p}} = A x e ^ {x}.
$$

The result of substituting the derivatives of this new candidate into the differential equation is 

$$
\left(A x e ^ {x} + 2 A e ^ {x}\right) - 3 \left(A x e ^ {x} + A e ^ {x}\right) + 2 A x e ^ {x} = 5 e ^ {x},
$$

or 

$$
- A e ^ {x} = 5 e ^ {x}.
$$

Thus, $A = - 5$ gives our sought-after particular solution 

$$
y _ {\mathrm{p}} = - 5 x e ^ {x}.
$$

**EXAMPLE 4** Find a particular solution of $y ^ { \prime \prime } - 6 y ^ { \prime } + 9 y = e ^ { 3 x }$ 

**Solution** The auxiliary equation for the complementary equation 

$$
r ^ {2} - 6 r + 9 = (r - 3) ^ {2} = 0
$$

has $r = 3$ as a repeated root. The appropriate choice for $y _ { \mathrm { { p } } }$ in this case is neither $A e ^ { 3 x }$ nor $A x e ^ { 3 x }$ because the complementary solution contains both of those terms already. Thus, we choose a term containing the next higher power of x as a factor. When we substitute 

$$
y _ {\mathrm{p}} = A x ^ {2} e ^ {3 x}
$$

and its derivatives into the given differential equation, we get 

$$
\left(9 A x ^ {2} e ^ {3 x} + 1 2 A x e ^ {3 x} + 2 A e ^ {3 x}\right) - 6 \left(3 A x ^ {2} e ^ {3 x} + 2 A x e ^ {3 x}\right) + 9 A x ^ {2} e ^ {3 x} = e ^ {3 x},
$$

or 

$$
2 A e ^ {3 x} = e ^ {3 x}.
$$

Thus, $A = 1 / 2 ,$ and the particular solution is 

$$
y _ {\mathrm{p}} = \frac {1}{2} x ^ {2} e ^ {3 x}.
$$

When we wish to find a particular solution of Equation (1) and the function $G ( x )$ is the sum of two or more terms, we choose a trial function for each term in $G ( x )$ and add them. 

**EXAMPLE 5** Find the general solution to $y ^ { \prime \prime } - y ^ { \prime } = 5 e ^ { x } - \sin 2 x$ 

**Solution** We first check the auxiliary equation 

$$
r ^ {2} - r = 0.
$$

Its roots are $r = 1$ and $r = 0$ . Therefore, the complementary solution to the associated homogeneous equation is 

$$
y _ {\mathrm{c}} = c _ {1} e ^ {x} + c _ {2}.
$$

We now seek a particular solution $y _ { \mathrm { p } } .$ That is, we seek a function that will produce $5 e ^ { x } - \sin { 2 x }$ when substituted into the left-hand side of the given differential equation. One part of $y _ { \mathrm { { p } } }$ is to produce $5 e ^ { x }$ ,  the other −sin 2x. 

Since any function of the form $c _ { 1 } e ^ { x }$ is a solution of the associated homogeneous equation, we choose our trial solution $y _ { \mathrm { { p } } }$ to be the sum 

$$
y _ {\mathrm{p}} = A x e ^ {x} + B \cos 2 x + C \sin 2 x,
$$

including $x e ^ { x }$ where we might otherwise have included only $e ^ { x }$ . When the derivatives of $y _ { \mathrm { { p } } }$ are substituted into the differential equation, the resulting equation is 

$$
\begin{array}{r l} (A x e ^ {x} + 2 A e ^ {x} - 4 B \cos 2 x - 4 C \sin 2 x) \\ & - (A x e ^ {x} + A e ^ {x} - 2 B \sin 2 x + 2 C \cos 2 x) = 5 e ^ {x} - \sin 2 x, \end{array}
$$

or 

$$
A e ^ {x} - (4 B + 2 C) \cos 2 x + (2 B - 4 C) \sin 2 x = 5 e ^ {x} - \sin 2 x.
$$

This equation will hold if 

$$
A = 5, \quad 4 B + 2 C = 0, \quad 2 B - 4 C = - 1,
$$

or $A = 5 , B = - 1 / 1 0$ , and $C = 1 / 5$ . Our particular solution is 

$$
y _ {\mathrm{p}} = 5 x e ^ {x} - \frac {1}{1 0} \cos 2 x + \frac {1}{5} \sin 2 x.
$$

The general solution to the differential equation is 

$$
y = y _ {\mathrm{c}} + y _ {\mathrm{p}} = c _ {1} e ^ {x} + c _ {2} + 5 x e ^ {x} - \frac {1}{1 0} \cos 2 x + \frac {1}{5} \sin 2 x.
$$

You may find the following table helpful in solving the problems at the end of this section. 

TABLE 17.1 The method of undetermined coefficients for selected equations of the form 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = G (x).
$$

<table><tr><td>If <eq>G(x)</eq> has a term that is a constant multiple of...</td><td>And if...</td><td>Then include this expression in the trial function for <eq>y_p</eq></td></tr><tr><td rowspan="3"><eq>e^{rx}</eq></td><td>r is not a root of the auxiliary equation</td><td><eq>Ae^{rx}</eq></td></tr><tr><td>r is a single root of the auxiliary equation</td><td><eq>Axe^{rx}</eq></td></tr><tr><td>r is a double root of the auxiliary equation</td><td><eq>Ax^2e^{rx}</eq></td></tr><tr><td>sin kx, cos kx</td><td>ki is not a root of the auxiliary equation</td><td>B cos kx + C sin kx</td></tr><tr><td rowspan="3"><eq>px^2+qx+m</eq></td><td>0 is not a root of the auxiliary equation</td><td><eq>Dx^2+Ex+F</eq></td></tr><tr><td>0 is a single root of the auxiliary equation</td><td><eq>Dx^3+Ex^2+Fx</eq></td></tr><tr><td>0 is a double root of the auxiliary equation</td><td><eq>Dx^4+Ex^3+Fx^2</eq></td></tr></table>

## The Method of Variation of Parameters

This is a general method for finding a particular solution of the nonhomogeneous equation (1) once the general solution of the associated homogeneous equation is known. The method consists of replacing the constants $c _ { 1 }$ and $c _ { 2 }$ in the complementary solution by functions $v _ { 1 } = v _ { 1 } ( x )$ and $v _ { 2 } = v _ { 2 } ( x )$ and requiring (in a way to be explained) that the resulting expression satisfy the nonhomogeneous equation (1). There are two functions to be determined, and requiring that Equation (1) be satisfied is only one condition. As a second condition, we also require that 

$$
v _ {1} ^ {\prime} y _ {1} + v _ {2} ^ {\prime} y _ {2} = 0.\tag{4}
$$

Then we have 

$$
\begin{array}{l} y = v _ {1} y _ {1} + v _ {2} y _ {2}, \\ y ^ {\prime} = v _ {1} y _ {1} ^ {\prime} + v _ {2} y _ {2} ^ {\prime}, \\ y ^ {\prime \prime} = v _ {1} y _ {1} ^ {\prime \prime} + v _ {2} y _ {2} ^ {\prime \prime} + v _ {1} ^ {\prime} y _ {1} ^ {\prime} + v _ {2} ^ {\prime} y _ {2} ^ {\prime}. \end{array}
$$

If we substitute these expressions into the left-hand side of equation (1), we obtain 

$$
v _ {1} \left(a y _ {1} ^ {\prime \prime} + b y _ {1} ^ {\prime} + c y _ {1}\right) + v _ {2} \left(a y _ {2} ^ {\prime \prime} + b y _ {2} ^ {\prime} + c y _ {2}\right) + a \left(v _ {1} ^ {\prime} y _ {1} ^ {\prime} + v _ {2} ^ {\prime} y _ {2} ^ {\prime}\right) = G (x).
$$

The first two parenthetical terms are zero since $y _ { 1 }$ and $y _ { 2 }$ are solutions of the associated homogeneous equation (2). So the nonhomogeneous equation (1) is satisfied if, in addition to equation (4), we require that 

$$
a (v _ {1} ^ {\prime} y _ {1} ^ {\prime} + v _ {2} ^ {\prime} y _ {2} ^ {\prime}) = G (x).\tag{5}
$$

Equations (4) and (5) can be solved together as a pair 

$$
\begin{array}{c} v _ {1} ^ {\prime} y _ {1} + v _ {2} ^ {\prime} y _ {2} = 0, \\ v _ {1} ^ {\prime} y _ {1} ^ {\prime} + v _ {2} ^ {\prime} y _ {2} ^ {\prime} = \frac {G (x)}{a} \end{array}
$$

for the unknown functions ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime } .$ . The usual procedure for solving this simple system is to use the method of determinants (also known as Cramer’s Rule), which will be demonstrated in the examples to follow. Once the derivative functions ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime }$ are known, the two functions $v _ { 1 } = v _ { 1 } ( x )$ and $v _ { 2 } = v _ { 2 } ( x )$ can be found by integration. Here is a summary of the method. 

## Variation of Parameters Procedure

To use the method of variation of parameters to find a particular solution to the nonhomogeneous equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = G (x),
$$

we can work directly with Equations (4) and (5). It is not necessary to rederive them. The steps are as follows. 

1. Solve the associated homogeneous equation 

$$
a y ^ {\prime \prime} + b y ^ {\prime} + c y = 0
$$

to find the functions $y _ { 1 }$ and $y _ { 2 }$ . 

2. Solve the equations 

$$
v _ {1} ^ {\prime} y _ {1} + v _ {2} ^ {\prime} y _ {2} = 0,
$$

$$
v _ {1} ^ {\prime} y _ {1} ^ {\prime} + v _ {2} ^ {\prime} y _ {2} ^ {\prime} = \frac {G (x)}{a}
$$

simultaneously for the derivative functions ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime } .$ 

3. Integrate ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime }$ to find the functions $v _ { 1 } = v _ { 1 } ( x )$ and $v _ { 2 } = v _ { 2 } ( x )$ 

4. Write down the particular solution to the nonhomogeneous equation (1) as 

$$
y _ {\mathrm{p}} = v _ {1} y _ {1} + v _ {2} y _ {2}.
$$

## **EXAMPLE 6** Find the general solution to the equation

$$
y ^ {\prime \prime} + y = \tan x.
$$

**Solution** The solution of the homogeneous equation 

$$
y ^ {\prime \prime} + y = 0
$$

is given by 

$$
y _ {\mathrm{c}} = c _ {1} \cos x + c _ {2} \sin x.
$$

Since $y _ { 1 } ( x ) = \cos x$ and $y _ { 2 } ( x ) = \sin { x }$ , the conditions to be satisfied in Equations (4) and (5) are 

$$
\begin{array}{c} v _ {1} ^ {\prime} \cos x + v _ {2} ^ {\prime} \sin x = 0, \\ - v _ {1} ^ {\prime} \sin x + v _ {2} ^ {\prime} \cos x = \tan x. \quad a = 1 \end{array}
$$

Solving this system gives 

$$
v _ {1} ^ {\prime} = \frac {\left| \begin{array}{c c} 0 & \sin x \\ \tan x & \cos x \end{array} \right|}{\left| \begin{array}{c c} \cos x & \sin x \\ - \sin x & \cos x \end{array} \right|} = \frac {- \tan x \sin x}{\cos^ {2} x + \sin^ {2} x} = \frac {- \sin^ {2} x}{\cos x}.
$$

Likewise, 

$$
v _ {2} ^ {\prime} = \frac {\left| \begin{array}{c c} \cos x & 0 \\ - \sin x & \tan x \end{array} \right|}{\left| \begin{array}{c c} \cos x & \sin x \\ - \sin x & \cos x \end{array} \right|} = \sin x.
$$

After integrating ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime } ,$ , we have 

$$
\begin{array}{l} v _ {1} (x) = \int \frac {- \sin^ {2} x}{\cos x} d x \\ \qquad = - \int (\sec x - \cos x) d x \\ \qquad = - \ln | \sec x + \tan x | + \sin x, \end{array}
$$

and 

$$
v _ {2} (x) = \int \sin x d x = - \cos x.
$$

Note that we have omitted the constants of integration in determining $\upsilon _ { 1 }$ and $\upsilon _ { 2 } .$ . They would merely be absorbed into the arbitrary constants in the complementary solution. 

Substituting $\upsilon _ { 1 }$ and $\upsilon _ { 2 }$ into the expression for $y _ { \mathrm { p } }$ in Step 4 gives 

$$
\begin{array}{l} y _ {p} = [ - \ln | \sec x + \tan x | + \sin x ] \cos x + (- \cos x) \sin x \\ = (- \cos x) \ln | \sec x + \tan x |. \end{array}
$$

The general solution is 

$$
y = c _ {1} \cos x + c _ {2} \sin x - (\cos x) \ln | \sec x + \tan x |.
$$

**EXAMPLE 7** Solve the nonhomogeneous equation 

$$
y ^ {\prime \prime} + y ^ {\prime} - 2 y = x e ^ {x}.
$$

**Solution** The auxiliary equation is 

$$
r ^ {2} + r - 2 = (r + 2) (r - 1) = 0,
$$

giving the complementary solution 

$$
y _ {c} = c _ {1} e ^ {- 2 x} + c _ {2} e ^ {x}.
$$

The conditions to be satisfied in Equations (4) and (5) are 

$$
\begin{array}{c} v _ {1} ^ {\prime} e ^ {- 2 x} + v _ {2} ^ {\prime} e ^ {x} = 0, \\ - 2 v _ {1} ^ {\prime} e ^ {- 2 x} + v _ {2} ^ {\prime} e ^ {x} = x e ^ {x}. \quad a = 1 \end{array}
$$

Solving the above system for ${ v _ { 1 } } ^ { \prime }$ and ${ v _ { 2 } } ^ { \prime }$ gives 

$$
v _ {1} ^ {\prime} = \frac {\left| \begin{array}{c c} 0 & e ^ {x} \\ x e ^ {x} & e ^ {x} \end{array} \right|}{\left| \begin{array}{c c} e ^ {- 2 x} & e ^ {x} \\ - 2 e ^ {- 2 x} & e ^ {x} \end{array} \right|} = \frac {- x e ^ {2 x}}{3 e ^ {- x}} = - \frac {1}{3} x e ^ {3 x}.
$$

Likewise, 

$$
v _ {2} ^ {\prime} = \frac {\left| \begin{array}{c c} e ^ {- 2 x} & 0 \\ - 2 e ^ {- 2 x} & x e ^ {x} \end{array} \right|}{3 e ^ {- x}} = \frac {x e ^ {- x}}{3 e ^ {- x}} = \frac {x}{3}.
$$

Integrating to obtain the parameter functions, we have 

$$
\begin{array}{r l} v _ {1} (x) & = \int - \frac {1}{3} x e ^ {3 x} d x \\ & = - \frac {1}{3} \left(\frac {x e ^ {3 x}}{3} - \int \frac {e ^ {3 x}}{3} d x\right) \\ & = \frac {1}{2 7} (1 - 3 x) e ^ {3 x} \end{array}
$$

and 

$$
v _ {2} (x) = \int \frac {x}{3} d x = \frac {x ^ {2}}{6}.
$$

Therefore, 

$$
\begin{array}{r l} y _ {\mathrm{p}} & = \left[ \frac {(1 - 3 x) e ^ {3 x}}{2 7} \right] e ^ {- 2 x} + \left(\frac {x ^ {2}}{6}\right) e ^ {x} \\ & = \frac {1}{2 7} e ^ {x} - \frac {1}{9} x e ^ {x} + \frac {1}{6} x ^ {2} e ^ {x}. \end{array}
$$

The general solution to the differential equation is 

$$
y = c _ {1} e ^ {- 2 x} + c _ {2} e ^ {x} - \frac {1}{9} x e ^ {x} + \frac {1}{6} x ^ {2} e ^ {x},
$$

where the term $( 1 / 2 7 ) e ^ { x }$ in $y _ { \mathrm { { p } } }$ has been absorbed into the term $c _ { 2 } e ^ { x }$ in the complementary solution. 

## EXERCISES

## 17.2

Solve the equations in Exercises 1–16 by the method of undetermined coefficients. 

$$
7. 7 ^ {\prime \prime} - y ^ {\prime} - 2 y = 2 0 \cos x \quad 8. y ^ {\prime \prime} + y = 2 x + 3 e ^ {x}
$$

$$
9. y ^ {\prime \prime} - y = e ^ {x} + x ^ {2} \quad 1 0. y ^ {\prime \prime} + 2 y ^ {\prime} + y = 6 \sin 2 x
$$

$$
1. y ^ {\prime \prime} - 3 y ^ {\prime} - 1 0 y = - 3
$$

$$
2. y ^ {\prime \prime} - 3 y ^ {\prime} - 1 0 y = 2 x - 3
$$

$$
1 1. y ^ {\prime \prime} - y ^ {\prime} - 6 y = e ^ {- x} - 7 \cos x
$$

3. y y ′′ − ′ = sin x 

$$
y ^ {\prime \prime} + 2 y ^ {\prime} + y = x ^ {2}
$$

$$
1 2. y ^ {\prime \prime} + 3 y ^ {\prime} + 2 y = e ^ {- x} + e ^ {- 2 x} - x
$$

$$
5. y ^ {\prime \prime} + y = \cos 3 x
$$

$$
6. y ^ {\prime \prime} + y = e ^ {2 x}
$$

13. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } + 5 { \frac { d y } { d x } } = 1 5 x ^ { 2 }$ 14. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } - { \frac { d y } { d x } } = - 8 x + 3$ 

15. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } - 3 { \frac { d y } { d x } } = e ^ { 3 x } - 1 2 x$ 

16. $\frac { d ^ { 2 } y } { d x ^ { 2 } } + 7 \frac { d y } { d x } = 4 2 x ^ { 2 } + 5 x + 1$ 

Solve the equations in Exercises 17–28 by variation of parameters. 

17. $y ^ { \prime \prime } + y ^ { \prime } = x$ 

18. $y ^ { \prime \prime } + y = \tan x , - { \frac { \pi } { 2 } } < x < { \frac { \pi } { 2 } }$ 

19. $y ^ { \prime \prime } + y = \sin x$ 20. $y ^ { \prime \prime } + 2 y ^ { \prime } + y = e ^ { x }$ 

21. $y ^ { \prime \prime } + 2 y ^ { \prime } + y = e ^ { - x }$ 22. $y ^ { \prime \prime } - y = x$ 

23. $y ^ { \prime \prime } - y = e ^ { x }$ 

24. $y ^ { \prime \prime } - y = \sin x$ 

25. $y ^ { \prime \prime } + 4 y ^ { \prime } + 5 y = 1 0$ 26. $y ^ { \prime \prime } - y ^ { \prime } = 2 ^ { x }$ 

27. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } + y = \sec x , \quad - { \frac { \pi } { 2 } } < x < { \frac { \pi } { 2 } }$ 

28. ${ \frac { d ^ { 2 } y } { d x ^ { 2 } } } - { \frac { d y } { d x } } = e ^ { x } \cos x , \quad x > 0$ 

In each of Exercises 29–32, the given differential equation has a particular solution $y _ { \mathrm { { p } } }$ of the form given. Determine the coefficients in $y _ { \mathfrak { p } } .$ . Then solve the differential equation. 

29. $y ^ { \prime \prime } - 5 y ^ { \prime } = x e ^ { 5 x } , y _ { \mathrm { p } } = A x ^ { 2 } e ^ { 5 x } + B x e ^ { 5 x }$ 

30. $y ^ { \prime \prime } - y ^ { \prime } = \cos x + \sin x , ~ y _ { \mathrm { p } } ^ { } = A \cos x + B \sin x$ 

31. $y ^ { \prime \prime } + y = 2 \cos x + \sin x , \quad y _ { \mathrm { p } } = A x \cos x +$ sBx in x 

32. $y ^ { \prime \prime } + y ^ { \prime } - 2 y = x e ^ { x } , ~ y _ { \mathrm { p } } = A x ^ { 2 } e ^ { x } + B x e ^ { x }$ 

In Exercises 33–36, solve the given differential equations (a) by variation of parameters and (b) by the method of undetermined coefficients. 

$$
3 3. \frac {d ^ {2} y}{d x ^ {2}} - \frac {d y}{d x} = e ^ {x} + e ^ {- x} \quad 3 4. \frac {d ^ {2} y}{d x ^ {2}} - 4 \frac {d y}{d x} + 4 y = 2 e ^ {2 x}
$$

$$
3 5. \frac {d ^ {2} y}{d x ^ {2}} - 4 \frac {d y}{d x} - 5 y = e ^ {x} + 4 \quad 3 6. \frac {d ^ {2} y}{d x ^ {2}} - 9 \frac {d y}{d x} = 9 e ^ {9 x}
$$

Solve the differential equations in Exercises 37–46. Some of the equations can be solved by the method of undetermined coefficients, but others cannot. 

37. $y ^ { \prime \prime } + y = \cot x , 0 < x < \pi$ 

38. $y ^ { \prime \prime } + y = \csc x , 0 < x < \pi$ 

39. $y ^ { \prime \prime } - 8 y ^ { \prime } = e ^ { 8 x }$ 

40. $y ^ { \prime \prime } + 4 y = \sin { x }$ 

$$
4 1. y ^ {\prime \prime} - y ^ {\prime} = x ^ {3} \quad 4 2. y ^ {\prime \prime} + 4 y ^ {\prime} + 5 y = x + 2
$$

## 17.3 Applications

$$
4 3. y ^ {\prime \prime} + 2 y ^ {\prime} = x ^ {2} - e ^ {x} \quad 4 4. y ^ {\prime \prime} + 9 y = 9 x - \cos x
$$

$$
y ^ {\prime \prime} + y = \sec x \tan x, - \frac {\pi}{2} <   x <   \frac {\pi}{2}
$$

## Vibrations

46. $y ^ { \prime \prime } - 3 y ^ { \prime } + 2 y = e ^ { x } - e ^ { 2 x } $ 

The method of undetermined coefficients can sometimes be used to solve first-order ordinary differential equations. Use the method to solve the equations in Exercises 47–50. 

$$
4 7. y ^ {\prime} - 3 y = e ^ {x}
$$

$$
4 8. y ^ {\prime} + 4 y = x
$$

$$
4 9. y ^ {\prime} - 3 y = 5 e ^ {3 x}
$$

$$
\mathbf {5 0 .} y ^ {\prime} + y = \sin x
$$

Solve the differential equations in Exercises 51 and 52 subject to the given initial conditions. 

$$
\mathbf {5 1 .} \frac {d ^ {2} y}{d x ^ {2}} + y = \sec^ {2} x, - \frac {\pi}{2} <   x <   \frac {\pi}{2}; y (0) = y ^ {\prime} (0) = 1
$$

$$
5 2. \frac {d ^ {2} y}{d x ^ {2}} + y = e ^ {2 x}; \quad y (0) = 0, y ^ {\prime} (0) = \frac {2}{5}
$$

In Exercises 53–58, verify that the given function is a particular solution to the specified nonhomogeneous equation. Find the general solution, and evaluate its arbitrary constants to find the unique solution satisfying the equation and the given initial conditions. 

$$
5 3. y ^ {\prime \prime} + y ^ {\prime} = x, \quad y _ {p} = \frac {x ^ {2}}{2} - x, \quad y (0) = 0, y ^ {\prime} (0) = 0
$$

$$
5 4. y ^ {\prime \prime} + y = x, \quad y _ {p} = 2 \sin x + x, \quad y (0) = 0, y ^ {\prime} (0) = 0
$$

$$
\frac {1}{2} y ^ {\prime \prime} + y ^ {\prime} + y = 4 e ^ {x} (\cos x - \sin x), \tag {55.}
$$

$$
y _ {p} = 2 e ^ {x} \cos x, y (0) = 0, y ^ {\prime} (0) = 1
$$

$$
y ^ {\prime \prime} - y ^ {\prime} - 2 y = 1 - 2 x, \quad y _ {p} = x - 1, y (0) = 0, y ^ {\prime} (0) = 1
$$

$$
5 7. y ^ {\prime \prime} - 2 y ^ {\prime} + y = 2 e ^ {x}, \quad y _ {p} = x ^ {2} e ^ {x}, \quad y (0) = 1, y ^ {\prime} (0) = 0
$$

$$
y ^ {\prime \prime} - 2 y ^ {\prime} + y = x ^ {- 1} e ^ {x}, x > 0, \tag {58}
$$

$$
y _ {p} = x e ^ {x} \ln x, y (1) = e, y ^ {\prime} (1) = 0
$$

In Exercises 59 and 60, two linearly independent solutions $y _ { 1 }$ and $y _ { 2 }$ are given to the associated homogeneous equation of the variablecoefficient nonhomogeneous equation. Use the method of variation of parameters to find a particular solution to the nonhomogeneous equation. Assume $x > 0$ in each exercise. 

$$
x ^ {2} y ^ {\prime \prime} + 2 x y ^ {\prime} - 2 y = x ^ {2}, \quad y _ {1} = x ^ {- 2}, y _ {2} = x
$$

$$
\mathbf {6 0 .} x ^ {2} y ^ {\prime \prime} + x y ^ {\prime} - y = x, \quad y _ {1} = x ^ {- 1}, y _ {2} = x
$$

In this section we apply second-order differential equations to the study of vibrating springs and electric circuits. 

A spring has its upper end fastened to a rigid support, as shown in Figure 17.2. An object of mass m is suspended from the spring and stretches it a length s when the spring comes to rest in an equilibrium position. According to Hooke’s Law (Section 6.5), the tension force in the spring is $k s ,$ where k is the spring constant. The force due to gravity pulling down on the spring is mg, and equilibrium requires that 

![[a80e2e761ecb64135a46cdad7a5a5198784e2a59c750f3f92e226d5511bda236.jpg|image]]



FIGURE 17.2 Mass m stretches a spring by length s to the equilibrium position at $y = 0 .$


![[fd89707a7df2219b295e843d37806ab3645a2882e0280c381ead592c9a86cead.jpg|image]]



(weight) $F _ { \mathrm { p } }$ pulls the mass downward, but the spring restoring force $F _ { \mathrm { s } }$ and frictional force $F _ { \mathrm { r } }$ pull the mass upward. The motion starts at $y = y _ { 0 }$ with the mass vibrating up and down.


$$
k s = m g.\tag{1}
$$

Suppose that the object is pulled down an additional amount $y _ { 0 }$ beyond the equilibrium position and then released. We want to study the object’s motion, that is, the vertical position of its center of mass at any future time. 

Let $y ,$ with positive direction downward, denote the displacement position of the object away from the equilibrium position $y = 0$ at any time t after the motion has started. Then the forces acting on the object are (see Figure 17.3) 

$$
\begin{array}{l l} F _ {\mathrm{p}} = m g, & \text { the   propulsion   force   due   to   gravity }, \\ F _ {\mathrm{s}} = k (s + y), & \text { the   restoring   force   of   the   spring's   tension }, \\ F _ {\mathrm{r}} = \delta \frac {d y}{d t}, & \text { a   frictional   force   assumed   proportional   to   velocity }. \end{array}
$$

The frictional force tends to slow the motion of the object. The resultant of these forces is $F = F _ { \mathrm { p } } - F _ { \mathrm { s } } - F _ { \mathrm { r } }$ , and by Newton’s second law $F = m a$ , we must then have 

$$
m \frac {d ^ {2} y}{d t ^ {2}} = m g - k s - k y - \delta \frac {d y}{d t}.
$$

By Equation (1), $m g \mathrm { ~ - ~ } k s = 0$ , so this last equation becomes 

$$
m \frac {d ^ {2} y}{d t ^ {2}} + \delta \frac {d y}{d t} + k y = 0,\tag{2}
$$

subject to the initial conditions $y ( 0 ) = y _ { 0 }$ and $y ^ { \prime } ( 0 ) = 0$ . (Here we use the prime notation to denote differentiation with respect to time t.) 

You might expect that the motion predicted by Equation (2) will be oscillatory about the equilibrium position $y = 0$ and eventually damp to zero because of the frictional force. This is indeed the case, and we will show how the constants $m , \delta ,$ and k determine the nature of the damping. You will also see that if there is no friction (so $\delta = 0 )$ , then the object will simply oscillate indefinitely. 

## Simple Harmonic Motion

Suppose first that there is no frictional force. Then $\delta = 0$ and there is no damping. If we substitute $\omega = \sqrt { k / m }$ to simplify our calculations, then the second-order equation (2) becomes 

$$
y ^ {\prime \prime} + \omega^ {2} y = 0, \quad \text { with } \quad y (0) = y _ {0} \quad \text { and } \quad y ^ {\prime} (0) = 0.
$$

The auxiliary equation is 

$$
r ^ {2} + \omega^ {2} = 0,
$$

which has the imaginary roots $r = \pm \omega i .$ The general solution to the differential equation in (2) is 

$$
y = c _ {1} \cos \omega t + c _ {2} \sin \omega t.\tag{3}
$$

To fit the initial conditions, we compute 

$$
y ^ {\prime} = - c _ {1} \omega \sin \omega t + c _ {2} \omega \cos \omega t
$$

$$
y = y _ {0} \cos \omega t
$$

and then substitute the conditions. This yields $c _ { 1 } = y _ { 0 }$ and $c _ { 2 } = 0$ . The particular solution 

(4) 

![[aee4fcdf9c007fd2215158fb3f48a1ab41c0f1b0d4418f4ed3be356c9c40ce09.jpg|image]]



FIGURE 17.4 $c _ { 1 } = C \sin \phi$ and $c _ { 2 } = C$ cos . φ


describes the motion of the object. Equation (4) represents simple harmonic motion of amplitude $y _ { 0 }$ and period $T = 2 \pi / \omega$ 

The general solution given by Equation (3) can be combined into a single term by using the trigonometric identity 

$$
\sin (\omega t + \phi) = \cos \omega t \sin \phi + \sin \omega t \cos \phi .
$$

To apply the identity, we take (see Figure 17.4) 

$$
c _ {1} = C \sin \phi \quad \text { and } \quad c _ {2} = C \cos \phi ,
$$

where 

$$
C = \sqrt {c _ {1} ^ {2} + c _ {2} ^ {2}} \quad \text { and } \quad \phi = \tan^ {- 1} \frac {c _ {1}}{c _ {2}}.
$$

Then the general solution in Equation (3) can be written in the alternative form 

$$
y = C \sin (\omega t + \phi).\tag{5}
$$

Here C and $\phi$ may be taken as two new arbitrary constants, replacing the two constants $c _ { 1 }$ and $c _ { 2 } .$ . Equation (5) represents simple harmonic motion of amplitude C and period $T = 2 \pi / \omega$ . The angle $\omega t + \phi$ is called the phase angle, and φ may be interpreted as its initial value. A graph of the simple harmonic motion represented by Equation (5) is given in Figure 17.5. 

![[b1158022a259dfe65514e230d0fbb3f5d89408a4437ec801a45b49f823da9fd9.jpg|image]]



FIGURE 17.5 Simple harmonic motion of amplitude C and period T with initial phase angle φ (Equation 5).


## Damped Motion

Assume now that there is friction in the spring system, so $\delta \neq 0$ . If we substitute $\omega = \sqrt { k / m }$ and $2 b = \delta / m ,$ then the differential equation (2) is 

$$
y ^ {\prime \prime} + 2 b y ^ {\prime} + \omega^ {2} y = 0.\tag{6}
$$

The auxiliary equation is 

$$
r ^ {2} + 2 b r + \omega^ {2} = 0,
$$

with roots $r = - b \pm \sqrt { b ^ { 2 } - \omega ^ { 2 } }$ . Three cases now present themselves, depending on the relative sizes of b and ω. 

Case 1: $\mathbf { \nabla } \cdot \mathbf { b } = \omega$ . The double root of the auxiliary equation is real and equals $r \ = \ \omega .$ The general solution to Equation (6) is 

$$
y = (c _ {1} + c _ {2} t) e ^ {- \omega t}.
$$

This situation of motion is called critical damping and is not oscillatory. Figure 17.6a shows an example of this kind of damped motion. 

Case 2: $b > \omega .$ The roots of the auxiliary equation are real and unequal, and they are given by $r _ { 1 } = - b + \sqrt { b ^ { 2 } - \omega ^ { 2 } }$ and $r _ { 2 } = - b - \sqrt { b ^ { 2 } - \omega ^ { 2 } }$ . The general solution to Equation (6) is given by 

$$
y = c _ {1} e ^ {\left(- b + \sqrt {b ^ {2} - \omega^ {2}}\right) t} + c _ {2} e ^ {\left(- b - \sqrt {b ^ {2} - \omega^ {2}}\right) t}.
$$

Here again the motion is not oscillatory and both $r _ { 1 }$ and $r _ { 2 }$ are negative. Thus y approaches zero as time goes on. This motion is referred to as overdamping (see Figure 17.6b). 

Case 3: $b < \omega .$ The roots to the auxiliary equation are complex and are given by $r = - b \pm i \sqrt { \omega ^ { 2 } - b ^ { 2 } }$ . The general solution to Equation (6) is given by 

$$
y = e ^ {- b t} \left(c _ {1} \cos \sqrt {\omega^ {2} - b ^ {2}} t + c _ {2} \sin \sqrt {\omega^ {2} - b ^ {2}} t\right).
$$

This situation, called underdamping, represents damped oscillatory motion. It is analogous to simple harmonic motion of period $T = 2 \pi / \sqrt { \omega ^ { 2 } - b ^ { 2 } }$ except that the amplitude is not constant but damped by the factor $e ^ { - b t }$ . Therefore, the motion tends to zero as t increases, so the vibrations tend to die out as time goes on. Notice that the period $T = 2 \pi / \sqrt { \omega ^ { 2 } - b ^ { 2 } }$ is larger than the period $T _ { 0 } = 2 \pi / \omega$ in the friction-free system. Moreover, the larger the value of $b = \delta / ( 2 m )$ in the exponential damping factor, the more quickly the vibrations tend to become unnoticeable. A curve illustrating underdamped motion is shown in Figure 17.6c. 

![[73dd5b18a10f6093312811732ec6849f0acc5c9e05ac065b755921c6bf40b04c.jpg|image]]



(a) Critical damping


![[5382d966dd67d1cd1ba6b0e2b9cc581c420ebca2af869ac3678f8768bd449353.jpg|image]]



(b) Overdamping


![[b863bfce1fc75cd003f4f2836ee4d49eb879f11b3db005d1c6d95d1d9f818ecc.jpg|image]]



(c) Underdamping



FIGURE 17.6 Three examples of damped vibratory motion for a spring system with friction, so $\delta \neq 0$


An external force $F ( t )$ can also be added to the spring system modeled by Equation (2). The forcing function may represent an external disturbance on the system. For instance, if the equation models an automobile suspension system, the forcing function might represent periodic bumps or potholes in the road affecting the performance of the suspension system. Or it might represent the effects of winds when modeling the vertical motion of a suspension bridge. Inclusion of a forcing function results in the second-order nonhomogeneous equation 

$$
m \frac {d ^ {2} y}{d t ^ {2}} + \delta \frac {d y}{d t} + k y = F (t).\tag{7}
$$

Such equations are studied in the theory of Differential Equations. 

## Electric Circuits

The basic quantity in electricity is the charge q (analogous to the idea of mass). In an electric field we use the flow of charge, or current $I = d q / d t$ , as we might use velocity in a gravitational field. There are many similarities between motion in a gravitational field and the flow of electrons (the carriers of charge) in an electric field. 

Consider the electric circuit shown in Figure 17.7. It consists of four components: voltage source, resistor, inductor, and capacitor. Think of electrical flow as being like a fluid flow, where the voltage source is the pump and the resistor, inductor, and capacitor tend to block the flow. A battery or generator is an example of a source, producing a voltage that causes the current to flow through the circuit when the switch is closed. An electric light bulb or appliance would provide resistance. The inductance is due to a magnetic field that opposes any change in the current as it flows through a coil. The capacitance is normally created by two metal plates that alternate charges and thus reverse the current flow. The following symbols specify the quantities relevant to the circuit. 

![[02f367e3b58a47d9cd0bb204b356b15a3103629ea537902d0b2004db1a3a5815.jpg|image]]



FIGURE 17.7 An electric circuit.


q: charge at a cross section of a conductor, measured in coulombs (abbreviated c) 

I: current or rate of change of charge dq dt (flow of electrons) at a cross section of a conductor, measured in amperes (abbreviated A) 

E: electric (potential) source, measured in volts (abbreviated V) 

V: difference in potential between two points along the conductor, measured in volts (V) 

Ohm observed that the current I flowing through a resistor, caused by a potential difference across it, is (approximately) proportional to the potential difference (voltage drop). He named his constant of proportionality 1 R and called R the resistance. So Ohm’s law is 

$$
I = \frac {1}{R} V.
$$

Similarly, it is known from physics that the voltage drops across an inductor and a capacitor are, respectively, 

$$
L \frac {d I}{d t} \qquad \text { and } \qquad \frac {q}{C},
$$

where L is the inductance and C is the capacitance (with q the charge on the capacitor). 

The German physicist Gustav R. Kirchhoff (1824–1887) formulated the law that the sum of the voltage drops in a closed circuit is equal to the supplied voltage E ( )t . Symbolically, this says that 

$$
R I + L \frac {d I}{d t} + \frac {q}{C} = E (t).
$$

Since $I = d q / d t$ , Kirchhoff’s law becomes 

$$
L \frac {d ^ {2} q}{d t ^ {2}} + R \frac {d q}{d t} + \frac {1}{C} q = E (t).\tag{8}
$$

The second-order differential equation (8), which models an electric circuit, has exactly the same form as Equation (7) modeling vibratory motion. Both models can be solved using the methods developed in Section 17.2. 

## Summary

The following chart summarizes our analogies between the physics of motion of an object in a spring system and the flow of charged particles in an electric circuit. 

<table><tr><td colspan="3">Linear Second-Order Constant-Coefficient Models</td></tr><tr><td colspan="2">Mechanical System</td><td>Electrical System</td></tr><tr><td colspan="2"><eq>my&#x27;&#x27; + \delta y&#x27; + ky = F(t)</eq></td><td><eq>Lq&#x27;&#x27; + Rq&#x27; + \frac{1}{C}q = E(t)</eq></td></tr><tr><td>y</td><td>displacement</td><td>q charge</td></tr><tr><td><eq>y&#x27;</eq></td><td>velocity</td><td><eq>q&#x27;</eq> current</td></tr><tr><td><eq>y&#x27;&#x27;</eq></td><td>acceleration</td><td><eq>q&#x27;&#x27;</eq> change in current</td></tr><tr><td>m</td><td>mass</td><td>L inductance</td></tr><tr><td>δ</td><td>damping constant</td><td>R resistance</td></tr><tr><td>k</td><td>spring constant</td><td><eq>1/C</eq> where C is the capacitance</td></tr><tr><td><eq>F(t)</eq></td><td>forcing function</td><td><eq>E(t)</eq> voltage source</td></tr></table>

## EXERCISES 17.3

1. A 70-N weight is attached to the lower end of a coil spring suspended from the ceiling and having a spring constant of $1 5 \ : \mathrm { N / m } .$ The resistance in the spring–mass system is numerically equal to 15 times the instantaneous velocity. $\mathbf { A } \mathfrak { t } : = 0$ , the weight is set in motion from a position 0.6 m below its equilibrium position by giving it a downward velocity of 0.6 m/s. Write an initial value problem that models the given situation. 

2. A 36-N weight stretches a spring 1.2 m. The spring–mass system resides in a medium offering a resistance to the motion that is numerically equal to 20 times the instantaneous velocity. If the weight is released at a position 0.6 m above its equilibrium position with a downward velocity of 0.9 $\mathrm { m / s } ,$ write an initial value problem modeling the given situation. 

3. A 90-N weight is hung on a 0.4-m spring and stretches it 0.15 m. The weight is pulled down 0.1 m and 30 N are added to the weight. If the weight is now released with a downward velocity of $v _ { 0 } ~ \mathrm { m / s }$ , write an initial value problem modeling the vertical displacement. 

4. A 49-N weight is suspended by a spring that is stretched 0.05 m by the weight. Assume a resistance whose magnitude is $3 0 0 / { \sqrt { g } }$ N times the instantaneous velocity υ in meters per second. If the weight is pulled down 0.08 m below its equilibrium position and released, formulate an initial value problem modeling the behavior of the spring–mass system. 

5. An (open) electric circuit consists of an inductor, a resistor, and a capacitor. There is an initial charge of 2 coulombs on the capacitor. At the instant the circuit is closed, a current of 3 amperes is present and a voltage of $E ( t ) = 2 0 $ cos t is applied. In this circuit the voltage drop across the resistor is 4 times the instantaneous change in the charge, the voltage drop across the capacitor is 10 times the charge, and the voltage drop across the inductor is 2 times the instantaneous change in the current. Write an initial value problem to model the circuit. 

6. An inductor of 2 henrys is connected in series with a resistor of 12 ohms, a capacitor of 1 16 farad, and a 300-volt battery. 

Initially, the charge on the capacitor is zero and the current is zero. Formulate an initial value problem modeling this electric circuit. 

7. A 49-N weight is attached to the lower end of a coil spring suspended from the ceiling and having a spring constant of $1 0 \ : \mathrm { N / m } .$ The resistance in the spring–mass system is numerically equal to 10 times the instantaneous velocity. At t = 0, the weight is set in motion from a position 0.6 m below its equilibrium position by giving it a downward velocity of 0.6 m/s. At the end of π s, determine whether the mass is above or below the equilibrium position and by what distance. 

8. A 29.4-N weight stretches a spring 1.225 m. The spring–mass system resides in a medium offering a resistance to the motion equal to 18 times the instantaneous velocity. If the weight is released at a position 0.6 m above its equilibrium position with a downward velocity of 0.9 m/s, find its position relative to the equilibrium position 2 s later. 

9. A 98-N weight is hung on a 0.6 m spring stretching it 0.2 m. The weight is pulled down 0.15 m and 49 N are added to the weight. If the weight is now released with a downward velocity of $v _ { 0 }$ m/s, find the position of mass relative to the equilibrium in terms of $v _ { 0 }$ and valid for any time $t \geq 0$ 

10. A mass of 15 kg is attached to a spring whose constant is 375/4  N/m. Initially the mass is released 1 m above the equilibrium position with a downward velocity of 3 m/s, and the subsequent motion takes place in a medium that offers a damping force numerically equal to 45 times the instantaneous velocity. An external force $f ( t )$ is driving the system, but assume that initially $f ( t ) \equiv 0$ . Formulate and solve an initial value problem that models the given system. Interpret your results. 

11. A 50-N weight is suspended by a spring that is stretched 0.05 m by the weight. Assume a resistance whose magnitude is 100 N times the instantaneous velocity in meters per second. If the weight is pulled down 0.1 m below its equilibrium position and released, find the time required to reach the equilibrium position for the first time. 

12. A weight stretches a spring 0.2 m. It is set in motion at a point 0.05 m below its equilibrium position with a downward velocity of 0.05 m/s. a. When does the weight return to its equilibrium position? b. When does it reach its highest point? c. Show that the maximum velocity is $0 . 0 5 \sqrt { 1 0 g } \ \mathrm { m / s }$ 

13. A weight of 50 N stretches a spring 0.25 m. The weight is drawn down 0.05 m below its equilibrium position and given an initial velocity of 0.1 m/s. An identical spring has a different weight attached to it. This second weight is drawn down from its equilibrium position a distance equal to the amplitude of the first motion and then given an initial velocity of 0.6 m/s. If the amplitude of the second motion is twice that of the first, what weight is attached to the second spring? 

14. A weight stretches one spring 0.05 m and a second weight stretches another spring 0.15 m. If both weights are simultaneously pulled down 0.02 m below their respective equilibrium positions and then released, find the first time after t = 0 when their velocities are equal. 

15. A weight of 80 N stretches a spring 1 m. The weight is pulled down 1.5 m below the equilibrium position and then released. What initial velocity $v _ { 0 }$ given to the weight would have the effect of doubling the amplitude of the vibration? 

16. A mass weighing 40 N stretches a spring 0.1 m. The spring– mass system resides in a medium with a damping constant of 32 N-s/m. If the mass is released from its equilibrium position with a velocity of 0.1 m/s in the downward direction, find the time required for the mass to return to its equilibrium position for the first time. 

17. A weight suspended from a spring executes damped vibrations with a period of 2 s. If the damping factor decreases by 90% in 10 s, find the acceleration of the weight when it is 0.1 m below its equilibrium position and is moving upward with a speed of 0.8 m/s. 

18. A 50-N weight stretches a spring 0.6 m. If the weight is pulled down 0.15 m below its equilibrium position and released, find the highest point reached by the weight. Assume the spring–mass system resides in a medium offering a resistance of 30 N times the instantaneous velocity in meters per second. 

19. An LRC circuit is set up with an inductance of 1 5 henry, a resistance of 1 ohm, and a capacitance of 5 6 farad. Assuming the initial charge is 2 coulombs and the initial current is 4 amperes, find the solution function describing the charge on the capacitor at any time. What is the charge on the capacitor after a long period of time? 

20. An (open) electric circuit consists of an inductor, a resistor, and a capacitor. There is an initial charge of 2 coulombs on the capacitor. At the instant the circuit is closed, a current of 3 amperes is present but no external voltage is being applied. In this circuit the voltage drops at three points are numerically related as follows: across the capacitor, 10 times the charge; across the resistor, 4 times the instantaneous change in the charge; and across the inductor, 2 times the instantaneous change in the current. Find the charge on the capacitor as a function of time. 

21. A 78.4-N weight stretches a spring 1.225 m. This spring–mass system is in a medium with a damping constant of $7 2 ~ \mathrm { N { - s / m } }$ and an external force given by $f ( t ) = 2 5 . 6 + 6 . 4 e ^ { - 2 t }$ (in newtons) is being applied. What is the solution function describing the position of the mass at any time if the mass is released from 0.6 m below the equilibrium position with an initial velocity of 1.2 m/s downward? 

22. A 10-kg mass is attached to a spring having a spring constant of 140 N m. The mass is started in motion from the equilibrium position with an initial velocity of 1 m s in the upward direction and with an applied external force given by f( )t t= 5 sin (in newtons). The mass is in a viscous medium with a coefficient of resistance equal to 90 N-s m. Formulate an initial value problem that models the given system; solve the model and interpret the results. 

23. A 2-kg mass is attached to the lower end of a coil spring suspended from the ceiling. The mass comes to rest in its equilibrium position thereby stretching the spring 1.96 m. The mass is in a viscous medium that offers a resistance in newtons numerically equal to 4 times the instantaneous velocity measured in meters per second. The mass is then pulled down 2 m below its equilibrium position and released with a downward velocity of 3 m s. At this same instant an external force given by f( )t = 20 cos t (in newtons) is applied to the system. At the end of π s determine if the mass is above or below its equilibrium position and by how much. 

24. A 39.2-N weight stretches a spring 1.225 m. The spring–mass system resides in a medium offering a resistance to the motion equal to 24 times the instantaneous velocity, and an external force given by $f ( t ) = 2 8 . 8 + 1 9 . 2 e ^ { - t }$ (in newtons) is being applied. If the weight is released at a position 0.6 m above its equilibrium position with downward velocity of 0.9 m/s, find its position relative to the equilibrium after 2 s have elapsed. 

25. Suppose L = 10 henrys, R = 10 ohms, C = 1 500 farads, E = 100 volts, q(0) 1= 0 coulombs, and $q ^ { \prime } ( 0 ) = i ( 0 ) = 0 .$ Formulate and solve an initial value problem that models the given LRC circuit. Interpret your results. 

26. A series circuit consisting of an inductor, a resistor, and a capacitor is open. There is an initial charge of 2 coulombs on the capacitor, and 3 amperes of current is present in the circuit at the instant the circuit is closed. A voltage given by E ( )t = 20 cos t is applied. In this circuit the voltage drops are numerically equal to the following: across the resistor, to 4 times the instantaneous change in the charge; across the capacitor, to 10 times the charge; and across the inductor, to 2 times the instantaneous change in the current. Find the charge on the capacitor as a function of time. Determine the charge on the capacitor and the current at time t = 10. 

## 17.4 Euler Equations

In Section 17.1 we introduced the second-order linear homogeneous differential equation 

$$
P (x) y ^ {\prime \prime} (x) + Q (x) y ^ {\prime} (x) + R (x) y (x) = 0
$$

and showed how to solve this equation when the coefficients $P , Q ,$ , and R are constants. If the coefficients are not constant, we cannot generally solve this differential equation in terms of elementary functions we have studied in calculus. In this section you will learn how to solve the equation when the coefficients have the special forms 

$$
P (x) = a x ^ {2}, \quad Q (x) = b x, \quad \text { and } \quad R (x) = c,
$$

where $a , b ,$ and c are constants. These special types of equations are called Euler equations in honor of Leonhard Euler, who studied them and showed how to solve them. Such equations arise in the study of mechanical vibrations. 

## The General **Solution** of Euler Equations

Consider the Euler equation 

$$
a x ^ {2} y ^ {\prime \prime} + b x y ^ {\prime} + c y = 0, \quad x > 0.\tag{1}
$$

To solve Equation (1), we first make the change of variables 

$$
z = \ln x \quad \text { and } \quad y (x) = Y (z).
$$

We next use the chain rule to find the derivatives $y ^ { \prime } ( x )$ and $y ^ { \prime \prime } ( x ) { \mathrm { : } }$ 

$$
y ^ {\prime} (x) = \frac {d}{d x} Y (z) = \frac {d}{d z} Y (z) \frac {d z}{d x} = Y ^ {\prime} (z) \frac {1}{x}
$$

and 

$$
y ^ {\prime \prime} (x) = \frac {d}{d x} y ^ {\prime} (x) = \frac {d}{d x} Y ^ {\prime} (z) \frac {1}{x} = - \frac {1}{x ^ {2}} Y ^ {\prime} (z) + \frac {1}{x} Y ^ {\prime \prime} (z) \frac {d z}{d x} = - \frac {1}{x ^ {2}} Y ^ {\prime} (z) + \frac {1}{x ^ {2}} Y ^ {\prime \prime} (z).
$$

Substituting these two derivatives into the left-hand side of Equation (1), we find 

$$
\begin{array}{c} a x ^ {2} y ^ {\prime \prime} + b x y ^ {\prime} + c y = a x ^ {2} \Bigl (- \frac {1}{x ^ {2}} Y ^ {\prime} (z) + \frac {1}{x ^ {2}} Y ^ {\prime \prime} (z) \Bigr) + b x \Bigl (\frac {1}{x} Y ^ {\prime} (z) \Bigr) + c Y (z) \\ = a Y ^ {\prime \prime} (z) + (b - a) Y ^ {\prime} (z) + c Y (z). \end{array}
$$

Therefore, the substitutions give us the second-order linear differential equation with constant coefficients 

$$
a Y ^ {\prime \prime} (z) + (b - a) Y ^ {\prime} (z) + c Y (z) = 0.\tag{2}
$$

We can solve Equation (2) using the method of Section 17.1. That is, we find the roots of the associated auxiliary equation 

$$
a r ^ {2} + (b - a) r + c = 0\tag{3}
$$

to find the general solution for $Y ( z )$ . After finding $Y ( z )$ , we can determine $y ( x )$ from the substitution $z \ = \ \ln x .$ 

## **EXAMPLE 1** Find the general solution of the equation $x ^ { 2 } y ^ { \prime \prime } + 2 x y ^ { \prime } - 2 y = 0$

**Solution** This is an Euler equation with $a = 1 , b = 2 ,$ and $c = - 2$ . The auxiliary equation (3) for $Y ( z )$ is 

$$
r ^ {2} + (2 - 1) r - 2 = (r - 1) (r + 2) = 0,
$$

with roots $r = - 2$ and r = 1. The solution for $Y ( z )$ is given by 

$$
Y (z) = c _ {1} e ^ {- 2 z} + c _ {2} e ^ {z}.
$$

Substituting z = ln x gives the general solution for y x( ): 

$$
y (x) = c _ {1} e ^ {- 2 \ln x} + c _ {2} e ^ {\ln x} = c _ {1} x ^ {- 2} + c _ {2} x.
$$

## **EXAMPLE 2** Solve the Euler equation $x ^ { 2 } y ^ { \prime \prime } - 5 x y ^ { \prime } + 9 y = 0$

**Solution** Since $a = 1 , b = - 5 .$ , and $c = 9 ,$ , the auxiliary equation (3) for $Y ( z )$ is 

$$
r ^ {2} + (- 5 - 1) r + 9 = (r - 3) ^ {2} = 0.
$$

The auxiliary equation has the double root $r = 3 ,$ giving 

$$
Y (z) = c _ {1} e ^ {3 z} + c _ {2} z e ^ {3 z}.
$$

Substituting z = ln x into this expression gives the general solution 

$$
y (x) = c _ {1} e ^ {3 \ln x} + c _ {2} \ln x e ^ {3 \ln x} = c _ {1} x ^ {3} + c _ {2} x ^ {3} \ln x.
$$

**EXAMPLE 3** Find the particular solution to $x ^ { 2 } y ^ { \prime \prime } - 3 x y ^ { \prime } + 6 8 y = 0$ that satisfies the initial conditions $y ( 1 ) = 0 \mathrm { a n d } y ^ { \prime } ( 1 ) = 1$ 

**Solution** Here $a = 1 , b = - 3$ , and $c = 6 8$ substituted into the auxiliary equation (3) give 

$$
r ^ {2} - 4 r + 6 8 = 0.
$$

The roots are $r = 2 + 8 i$ and $r = 2 - 8 i .$ , giving the solution 

$$
Y (z) = e ^ {2 z} \left(c _ {1} \cos 8 z + c _ {2} \sin 8 z\right).
$$

Substituting z = ln x into this expression gives 

$$
y (x) = e ^ {2 \ln x} \left(c _ {1} \cos (8 \ln x) + c _ {2} \sin (8 \ln x)\right).
$$

From the initial condition $y ( 1 ) = 0 $ , we see that $c _ { 1 } = 0$ and 

$$
y (x) = c _ {2} x ^ {2} \sin (8 \ln x).
$$

![[5b95208b687faf8c0012564f13f907b5a66bae8c208814d8a1c0b76025df0b92.jpg|image]]


To fit the second initial condition, we need the derivative 


FIGURE 17.8 Graph of the solution to Example 3.


$$
y ^ {\prime} (x) = c _ {2} \left(8 x \cos (8 \ln x) + 2 x \sin (8 \ln x)\right).
$$

Since $y ^ { \prime } ( 1 ) = 1 \quad$ , we immediately obtain $c _ { 2 } ~ = ~ 1 / 8$ . Therefore, the particular solution satisfying both initial conditions is 

$$
y (x) = \frac {1}{8} x ^ {2} \sin (8 \ln x).
$$

Since $- 1 \leq \sin ( 8 \ln x ) \leq 1$ , the solution satisfies 

$$
- \frac {x ^ {2}}{8} \leq y (x) \leq \frac {x ^ {2}}{8}.
$$

A graph of the solution is shown in Figure 17.8. 

## EXERCISES

## 17.4

In Exercises 1–24, find the general solution to the given Euler equation. 

Assume $x > 0$ throughout. 

1. $x ^ { 2 } y ^ { \prime \prime } + 2 x y ^ { \prime } - 2 y = 0$ 

$$
x ^ {2} y ^ {\prime \prime} + x y ^ {\prime} - 4 y = 0
$$

3. $x ^ { 2 } y ^ { \prime \prime } - 6 y = 0$ 

4. $x ^ { 2 } y ^ { \prime \prime } + x y ^ { \prime } - y = 0$ 

5. $x ^ { 2 } y ^ { \prime \prime } - 5 x y ^ { \prime } + 8 y = 0$ 

6. 2 7 x y′′ + xy′ + = 2 0 y <sup>2</sup> 

7. $3 x ^ { 2 } y ^ { \prime \prime } + 4 x y ^ { \prime } = 0$ 

8. $x ^ { 2 } y ^ { \prime \prime } + 6 x y ^ { \prime } + 4 y = 0$ 

9. $x ^ { 2 } y ^ { \prime \prime } - x y ^ { \prime } + y = 0$ 

10. $x ^ { 2 } y ^ { \prime \prime } - x y ^ { \prime } + 2 y = 0$ 

11. $x ^ { 2 } y ^ { \prime \prime } - x y ^ { \prime } + 5 y = 0$ 

12. $x ^ { 2 } y ^ { \prime \prime } + 7 x y ^ { \prime } + 1 3 y = 0$ 

13. $x ^ { 2 } y ^ { \prime \prime } + 3 x y ^ { \prime } + 1 0 y = 0$ 

14. $x ^ { 2 } y ^ { \prime \prime } - 5 x y ^ { \prime } + 1 0 y = 0$ 

15. $4 x ^ { 2 } y ^ { \prime \prime } + 8 x y ^ { \prime } + 5 y = 0$ 

16. $4 x ^ { 2 } y ^ { \prime \prime } - 4 x y ^ { \prime } + 5 y = 0$ 

17. $x ^ { 2 } y ^ { \prime \prime } + 3 x y ^ { \prime } + y = 0$ 

19. $x ^ { 2 } y ^ { \prime \prime } + x y ^ { \prime } = 0$ 

18. $x ^ { 2 } y ^ { \prime \prime } - 3 x y ^ { \prime } + 9 y = 0$ 

20. $4 x ^ { 2 } y ^ { \prime \prime } + y = 0$ 

21. $9 x ^ { 2 } y ^ { \prime \prime } + 1 5 x y ^ { \prime } + y = 0$ 

22. $1 6 x ^ { 2 } y ^ { \prime \prime } - 8 x y ^ { \prime } + 9 y = 0$ 

23. $1 6 x ^ { 2 } y ^ { \prime \prime } + 5 6 x y ^ { \prime } + 2 5 y = 0$ 

24. $4 x ^ { 2 } y ^ { \prime \prime } - 1 6 x y ^ { \prime } + 2 5 y = 0$ 

In Exercises 25–30, solve the given initial value problem. 

25. $x ^ { 2 } y ^ { \prime \prime } + 3 x y ^ { \prime } - 3 y = 0 , y ( 1 ) = 1 , y ^ { \prime } ( 1 ) = - 1$ 

26. $6 x ^ { 2 } y ^ { \prime \prime } + 7 x y ^ { \prime } - 2 y = 0 , y ( 1 ) = 0 , y ^ { \prime } ( 1 ) = 1$ 

27. $x ^ { 2 } y ^ { \prime \prime } - x y ^ { \prime } + y = 0 , y ( 1 ) = 1 , y ^ { \prime } ( 1 ) = 1$ 

28. x y x ′′ + 7 9 y y ′ + = 0, y y (1) 1 = , (′ 1) = 0 <sup>2</sup> 

29. $x ^ { 2 } y ^ { \prime \prime } - x y ^ { \prime } + 2 y = 0 , y ( 1 ) = - 1 , y ^ { \prime } ( 1 ) = 1$ 

$$
x ^ {2} y ^ {\prime \prime} + 3 x y ^ {\prime} + 5 y = 0, \quad y (1) = 1, y ^ {\prime} (1) = 0
$$

## 17.5 Power-Series Solutions

In this section we extend our study of second-order linear homogeneous equations with variable coefficients. With the Euler equations in Section 17.4, the power of the variable x in the nonconstant coefficient had to match the order of the derivative with which it was paired: $x ^ { 2 }$ with $y ^ { \prime \prime } , x ^ { 1 }$ with $y ^ { \prime } ,$ and $x ^ { 0 } ( = 1 )$ with y. Here we drop that requirement so we can solve more general equations. 

## Method of **Solution**

The power-series method for solving a second-order homogeneous differential equation consists of finding the coefficients of a power series 

$$
y (x) = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = c _ {0} + c _ {1} x + c _ {2} x ^ {2} + \dots\tag{1}
$$

which solves the equation. To apply the method we substitute the series and its derivatives into the differential equation to determine the coefficients $c _ { 0 } , c _ { 1 } , c _ { 2 } , \ldots$ The technique for finding the coefficients is similar to that used in the method of undetermined coefficients presented in Section 17.2. 

In our first example we demonstrate the method in the setting of a simple equation whose general solution we already know. This is to help you become more comfortable with solutions expressed in series form. 

**EXAMPLE 1**   Solve the equation $y ^ { \prime \prime } + y = 0$ by the power-series method. 

**Solution** We assume the series solution takes the form of 

$$
y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n}
$$

and calculate the derivatives 

$$
y ^ {\prime} = \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n - 1} \quad \text { and } \quad y ^ {\prime \prime} = \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2}.
$$

Substitution of these forms into the second-order equation gives us 

$$
\sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2} + \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = 0.
$$

Next, we equate the coefficients of each power of x to zero as summarized in the following table. 

<table><tr><td>Power of x</td><td colspan="3">Coefficient equation</td></tr><tr><td><eq>x^{0}</eq></td><td><eq>2(1)c_{2} + c_{0} = 0</eq></td><td>or</td><td><eq>c_{2} = -\frac{1}{2}c_{0}</eq></td></tr><tr><td><eq>x^{1}</eq></td><td><eq>3(2)c_{3} + c_{1} = 0</eq></td><td>or</td><td><eq>c_{3} = -\frac{1}{3 \cdot 2}c_{1}</eq></td></tr><tr><td><eq>x^{2}</eq></td><td><eq>4(3)c_{4} + c_{2} = 0</eq></td><td>or</td><td><eq>c_{4} = -\frac{1}{4 \cdot 3}c_{2}</eq></td></tr><tr><td><eq>x^{3}</eq></td><td><eq>5(4)c_{5} + c_{3} = 0</eq></td><td>or</td><td><eq>c_{5} = -\frac{1}{5 \cdot 4}c_{3}</eq></td></tr><tr><td><eq>x^{4}</eq></td><td><eq>6(5)c_{6} + c_{4} = 0</eq></td><td>or</td><td><eq>c_{6} = -\frac{1}{6 \cdot 5}c_{4}</eq></td></tr><tr><td>⋮</td><td>⋮</td><td></td><td>⋮</td></tr><tr><td><eq>x^{n-2}</eq></td><td><eq>n(n-1)c_{n} + c_{n-2} = 0</eq></td><td>or</td><td><eq>c_{n} = -\frac{1}{n(n-1)}c_{n-2}</eq></td></tr></table>

From the table we notice that the coefficients with even indices $( n = 2 k , k = 1 , 2 , 3 , . . . )$ are related to each other and the coefficients with odd indices $( n = 2 k + 1 )$ are also interrelated. We treat each group in turn. 

Even indices: Here $n = 2 k$ , so the power is $x ^ { 2 k - 2 }$ . From the last line of the table, we have 

$$
2 k (2 k - 1) c _ {2 k} + c _ {2 k - 2} = 0
$$

or 

$$
c _ {2 k} = - \frac {1}{2 k (2 k - 1)} c _ {2 k - 2}.
$$

From this recursive relation we find 

$$
\begin{array}{l} c _ {2 k} = \left[ - \frac {1}{2 k (2 k - 1)} \right] \left[ - \frac {1}{(2 k - 2) (2 k - 3)} \right] \dots \left[ - \frac {1}{4 (3)} \right] \left[ - \frac {1}{2} \right] c _ {0} \\ = \frac {(- 1) ^ {k}}{(2 k) !} c _ {0}. \end{array}
$$

Odd indices: Here $n = 2 k + 1$ , so the power is $x ^ { 2 k - }$ .<sup>1</sup>  Substituting this into the last line of the table yields 

$$
(2 k + 1) (2 k) c _ {2 k + 1} + c _ {2 k - 1} = 0
$$

or 

$$
c _ {2 k + 1} = - \frac {1}{(2 k + 1) (2 k)} c _ {2 k - 1}.
$$

Thus, 

$$
\begin{array}{r l} c _ {2 k + 1} & = \left[ - \frac {1}{(2 k + 1) (2 k)} \right] \left[ - \frac {1}{(2 k - 1) (2 k - 2)} \right] \dots \left[ - \frac {1}{5 (4)} \right] \left[ - \frac {1}{3 (2)} \right] c _ {1} \\ & = \frac {(- 1) ^ {k}}{(2 k + 1) !} c _ {1}. \end{array}
$$

Writing the power series by grouping its even and odd powers together and substituting for the coefficients yields 

$$
\begin{array}{l} y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} \\ \qquad = \sum_ {k = 0} ^ {\infty} c _ {2 k} x ^ {2 k} + \sum_ {k = 0} ^ {\infty} c _ {2 k + 1} x ^ {2 k + 1} \\ \qquad = c _ {0} \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k}}{(2 k) !} x ^ {2 k} + c _ {1} \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k}}{(2 k + 1) !} x ^ {2 k + 1}. \end{array}
$$

From our study of Taylor series, we see that the first series on the right-hand side of the last equation represents the cosine function, and the second series represents the sine. Thus, the general solution to $y ^ { \prime \prime } + y = 0$ is 

$$
y = c _ {0} \cos x + c _ {1} \sin x.
$$

**EXAMPLE 2** Find the general solution to $y ^ { \prime \prime } + x y ^ { \prime } + y = 0 \quad$ 

**Solution** We assume the series solution form 

$$
y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n}
$$

and calculate the derivatives 

$$
y ^ {\prime} = \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n - 1} \quad \text { and } \quad y ^ {\prime \prime} = \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2}.
$$

Substitution of these forms into the second-order equation yields 

$$
\sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2} + \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n} + \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = 0.
$$

We equate the coefficients of each power of x to zero as summarized in the following table. 

<table><tr><td>Power of x</td><td colspan="3">Coefficient equation</td></tr><tr><td><eq>x^{0}</eq></td><td><eq>2(1)c_{2} + c_{0} = 0</eq></td><td>or</td><td><eq>c_{2} = -\frac{1}{2}c_{0}</eq></td></tr><tr><td><eq>x^{1}</eq></td><td><eq>3(2)c_{3} + c_{1} + c_{1} = 0</eq></td><td>or</td><td><eq>c_{3} = -\frac{1}{3}c_{1}</eq></td></tr><tr><td><eq>x^{2}</eq></td><td><eq>4(3)c_{4} + 2c_{2} + c_{2} = 0</eq></td><td>or</td><td><eq>c_{4} = -\frac{1}{4}c_{2}</eq></td></tr><tr><td><eq>x^{3}</eq></td><td><eq>5(4)c_{5} + 3c_{3} + c_{3} = 0</eq></td><td>or</td><td><eq>c_{5} = -\frac{1}{5}c_{3}</eq></td></tr><tr><td><eq>x^{4}</eq></td><td><eq>6(5)c_{6} + 4c_{4} + c_{4} = 0</eq></td><td>or</td><td><eq>c_{6} = -\frac{1}{6}c_{4}</eq></td></tr><tr><td>⋮</td><td>⋮</td><td></td><td>⋮</td></tr><tr><td><eq>x^{n}</eq></td><td><eq>(n + 2)(n + 1)c_{n+2} + (n + 1)c_{n} = 0</eq></td><td>or</td><td><eq>c_{n+2} = -\frac{1}{n + 2}c_{n}</eq></td></tr></table>

From the table notice that the coefficients with even indices are interrelated and the coefficients with odd indices are also interrelated. 

Even indices: Here $n = 2 k - 2$ , so the power is $x ^ { 2 k - 2 }$ . From the last line in the table, we have 

$$
c _ {2 k} = - \frac {1}{2 k} c _ {2 k - 2}.
$$

From this recurrence relation we obtain 

$$
\begin{array}{l} c _ {2 k} = \Big (- \frac {1}{2 k} \Big) \Big (- \frac {1}{2 k - 2} \Big) \dots \Big (- \frac {1}{6} \Big) \Big (- \frac {1}{4} \Big) \Big (- \frac {1}{2} \Big) c _ {0} \\ = \frac {(- 1) ^ {k}}{(2) (4) (6) \cdots (2 k)} c _ {0}. \end{array}
$$

Odd indices: Here $n = 2 k - 1$ , so the power is $x ^ { 2 k - 1 }$ . From the last line in the table, we have 

$$
c _ {2 k + 1} = - \frac {1}{2 k + 1} c _ {2 k - 1}.
$$

From this recurrence relation we obtain 

$$
\begin{array}{l} c _ {2 k + 1} = \Big (- \frac {1}{2 k + 1} \Big) \Big (- \frac {1}{2 k - 1} \Big) \dots \Big (- \frac {1}{5} \Big) \Big (- \frac {1}{3} \Big) c _ {1} \\ = \frac {(- 1) ^ {k}}{(3) (5) \cdots (2 k + 1)} c _ {1}. \end{array}
$$

Writing the power series by grouping its even and odd powers and substituting for the coefficients yields 

$$
\begin{array}{l} y = \sum_ {k = 0} ^ {\infty} c _ {2 k} x ^ {2 k} + \sum_ {k = 0} ^ {\infty} c _ {2 k + 1} x ^ {2 k + 1} \\ = c _ {0} \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k}}{(2) (4) \cdots (2 k)} x ^ {2 k} + c _ {1} \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k}}{(3) (5) \cdots (2 k + 1)} x ^ {2 k + 1}. \end{array}
$$

**EXAMPLE 3**   Find the general solution to 

$$
(1 - x ^ {2}) y ^ {\prime \prime} - 6 x y ^ {\prime} - 4 y = 0, \quad | x | <   1.
$$

**Solution** Notice that the leading coefficient is zero when $x = \pm 1$ . Thus, we assume the solution interval $I \colon - 1 < x < 1$ . Substitution of the series form 

$$
y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n}
$$

and its derivatives gives us 

$$
\begin{array}{c} (1 - x ^ {2}) \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2} - 6 \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n} - 4 \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = 0, \\ \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2} - \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n} - 6 \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n} - 4 \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = 0. \end{array}
$$


Next, we equate the coefficients of each power of x to zero as summarized in the following table.


<table><tr><td>Power of x</td><td colspan="3">Coefficient equation</td></tr><tr><td><eq>x^{0}</eq></td><td><eq>2(1)c_{2}</eq></td><td><eq>-4c_{0}=0</eq></td><td>or <eq>c_{2}=\frac{4}{2}c_{0}</eq></td></tr><tr><td><eq>x^{1}</eq></td><td><eq>3(2)c_{3}</eq></td><td><eq>-6(1)c_{1}-4c_{1}=0</eq></td><td>or <eq>c_{3}=\frac{5}{3}c_{1}</eq></td></tr><tr><td><eq>x^{2}</eq></td><td><eq>4(3)c_{4}-2(1)c_{2}-6(2)c_{2}-4c_{2}=0</eq></td><td></td><td>or <eq>c_{4}=\frac{6}{4}c_{2}</eq></td></tr><tr><td><eq>x^{3}</eq></td><td><eq>5(4)c_{5}-3(2)c_{3}-6(3)c_{3}-4c_{3}=0</eq></td><td></td><td>or <eq>c_{5}=\frac{7}{5}c_{3}</eq></td></tr><tr><td>⋮</td><td></td><td>⋮</td><td>⋮</td></tr><tr><td><eq>x^{n}</eq></td><td><eq>(n+2)(n+1)c_{n+2}-[n(n-1)+6n+4]c_{n}=0</eq></td><td></td><td></td></tr><tr><td></td><td><eq>(n+2)(n+1)c_{n+2}-(n+4)(n+1)c_{n}=0</eq></td><td>or</td><td><eq>c_{n+2}=\frac{n+4}{n+2}c_{n}</eq></td></tr></table>

Again we notice that the coefficients with even indices are interrelated and those with odd indices are interrelated. 

Even indices: Here $n = 2 k - 2$ , so the power is $x ^ { 2 k }$ . From the right-hand column and the last line of the table, we get 

$$
\begin{array}{l} c _ {2 k} = \frac {2 k + 2}{2 k} c _ {2 k - 2} \\ \qquad = \Big (\frac {2 k + 2}{2 k} \Big) \Big (\frac {2 k}{2 k - 2} \Big) \Big (\frac {2 k - 2}{2 k - 4} \Big) \dots \frac {6}{4} \Big (\frac {4}{2} \Big) c _ {0} \\ \qquad = (k + 1) c _ {0}. \end{array}
$$

Odd indices: Here $n = 2 k - 1 ,$ so the power is $x ^ { 2 k + 1 }$ . The right-hand column and the last line of the table give us 

$$
\begin{array}{l} c _ {2 k + 1} = \frac {2 k + 3}{2 k + 1} c _ {2 k - 1} \\ \qquad = \Big (\frac {2 k + 3}{2 k + 1} \Big) \Big (\frac {2 k + 1}{2 k - 1} \Big) \Big (\frac {2 k - 1}{2 k - 3} \Big) \dots \frac {7}{5} \Big (\frac {5}{3} \Big) c _ {1} \\ \qquad = \frac {2 k + 3}{3} c _ {1}. \end{array}
$$

The general solution is 

$$
\begin{array}{l} y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} \\ = \sum_ {k = 0} ^ {\infty} c _ {2 k} x ^ {2 k} + \sum_ {k = 0} ^ {\infty} c _ {2 k + 1} x ^ {2 k + 1} \\ = c _ {0} \sum_ {k = 0} ^ {\infty} (k + 1) x ^ {2 k} + c _ {1} \sum_ {k = 0} ^ {\infty} \frac {2 k + 3}{3} x ^ {2 k + 1}. \end{array}
$$

## **EXAMPLE 4** Find the general solution to $y ^ { \prime \prime } - 2 x y ^ { \prime } + y = 0$

**Solution** Assuming that 

$$
y = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n},
$$

substitution into the differential equation gives us 

$$
\sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} x ^ {n - 2} - 2 \sum_ {n = 1} ^ {\infty} n c _ {n} x ^ {n} + \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = 0.
$$

We next determine the coefficients, listing them in the following table. 

## Power of x

$$
x ^ {0}
$$

## Coefficient equation

$$
2 (1) c _ {2}
$$

$$
x ^ {1}
$$

$$
+ c _ {0} = 0 \quad \text { or } \quad c _ {2} = - \frac {1}{2} c _ {0}
$$

$$
3 (2) c _ {3} - 2 c _ {1} + c _ {1} = 0 \quad \text { or } \quad c _ {3} = \frac {1}{3 \cdot 2} c _ {1}
$$

$$
x ^ {2}
$$

$$
4 (3) c _ {4} - 4 c _ {2} + c _ {2} = 0 \quad \text { or } \quad c _ {4} = \frac {3}{4 \cdot 3} c _ {2}
$$

$$
x ^ {3}
$$

$$
5 (4) c _ {5} - 6 c _ {3} + c _ {3} = 0 \quad \text { or } \quad c _ {5} = \frac {5}{5 \cdot 4} c _ {3}
$$

$$
x ^ {4}
$$

$$
\begin{array}{c c c} 6 (5) c _ {6} - 8 c _ {4} + c _ {4} = 0 & \text {or} & c _ {6} = \frac {7}{6 \cdot 5} c _ {4} \\ \vdots & & \vdots \end{array}
$$

$$
x ^ {n}
$$

$$
(n + 2) (n + 1) c _ {n + 2} - (2 n - 1) c _ {n} = 0 \quad \text { or } \quad c _ {n + 2} = \frac {2 n - 1}{(n + 2) (n + 1)} c _ {n}
$$

From the recursive relation 

$$
c _ {n + 2} = \frac {2 n - 1}{(n + 2) (n + 1)} c _ {n},
$$

we write out the first few terms of each series for the general solution: 

$$
\begin{array}{l} y = c _ {0} \Big (1 - \frac {1}{2} x ^ {2} - \frac {3}{4 !} x ^ {4} - \frac {2 1}{6 !} x ^ {6} - \dots \Big) \\ \qquad + c _ {1} \Big (x + \frac {1}{3 !} x ^ {3} + \frac {5}{5 !} x ^ {5} + \frac {4 5}{7 !} x ^ {7} + \dots \Big). \end{array}
$$

## EXERCISES

## 17.5

In Exercises 1–18, use power series to find the general solution of the differential equation. 

9. $( x ^ { 2 } - 1 ) y ^ { \prime \prime } + 2 x y ^ { \prime } - 2 y = 0$ 

1. $y ^ { \prime \prime } + 2 y ^ { \prime } = 0$ 

2. $y ^ { \prime \prime } + 2 y ^ { \prime } + y = 0$ 

10. $y ^ { \prime \prime } + y ^ { \prime } - x ^ { 2 } y = 0$ 

3. $y ^ { \prime \prime } + 4 y = 0$ 

4. $y ^ { \prime \prime } - 3 y ^ { \prime } + 2 y = 0$ 

5. $x ^ { 2 } y ^ { \prime \prime } - 2 x y ^ { \prime } + 2 y = 0$ 

6. $y ^ { \prime \prime } - x y ^ { \prime } + y = 0$ 

7. $( 1 + x ) y ^ { \prime \prime } - y = 0$ 

11. $( x ^ { 2 } - 1 ) y ^ { \prime \prime } - 6 y = 0$ 

8. $( 1 - x ^ { 2 } ) y ^ { \prime \prime } - 4 x y ^ { \prime } + 6 y = 0$ 

12. $x y ^ { \prime \prime } - ( x + 2 ) y ^ { \prime } + 2 y = 0$ 

13. $( x ^ { 2 } - 1 ) y ^ { \prime \prime } + 4 x y ^ { \prime } + 2 y = 0$ 

14. $y ^ { \prime \prime } - 2 x y ^ { \prime } + 4 y = 0$ 

15. $y ^ { \prime \prime } - 2 x y ^ { \prime } + 3 y = 0$ 

16. $( 1 - x ^ { 2 } ) y ^ { \prime \prime } - x y ^ { \prime } + 4 y = 0$ 

17. $y ^ { \prime \prime } - x y ^ { \prime } + 3 y = 0$ 

18. $x ^ { 2 } y ^ { \prime \prime } - 4 x y ^ { \prime } + 6 y = 0$ 

## Chapter 17

SECTION 17.1, pp. 17-6–17-7 

1. $y = c _ { 1 } e ^ { - 3 x } + c _ { 2 } e ^ { 4 x }$ 3. $y = c _ { 1 } e ^ { - 4 x } + c _ { 2 } e ^ { x }$ 

5. $y = c _ { 1 } e ^ { - 2 x } + c _ { 2 } e ^ { 2 x }$ 7. $y = c _ { 1 } e ^ { - x } + c _ { 2 } e ^ { 3 x / 2 }$ 

9. $y = c _ { 1 } e ^ { - x / 4 } + c _ { 2 } e ^ { 3 x / 2 }$ $\mathbf { 1 1 . ~ } y = c _ { 1 } \cos 3 x + c _ { 2 } \sin 3 x$ 

13. $\begin{array} { r } { y = c _ { 1 } \cos { 5 x } + c _ { 2 } \sin { 5 x } \qquad 1 5 . \ y = e ^ { x } \big ( c _ { 1 } \cos { 2 x } + c _ { 2 } \sin { 2 x } \big ) } \end{array}$ 

17. $y = e ^ { - x } { \bigl ( } c _ { 1 } \cos { \sqrt { 3 } } x + c _ { 2 } \sin { \sqrt { 3 } } x { \bigr ) }$ 

19. $y = e ^ { - 2 x } { \big ( } c _ { 1 } \cos { \sqrt { 5 } } x + c _ { 2 } \sin { \sqrt { 5 } } x { \big ) }$ 

21. $y = c _ { 1 } + c _ { 2 } x \qquad 2 3 . \ y = c _ { 1 } e ^ { - 2 x } + c _ { 2 } x e ^ { - 2 x }$ 

25. $y = c _ { 1 } e ^ { - 3 x } + c _ { 2 } x e ^ { - 3 x }$ 27. $y = c _ { 1 } e ^ { - x / 2 } + c _ { 2 } x e ^ { - x / 2 }$ 

29. $y = c _ { 1 } e ^ { - x / 3 } + c _ { 2 } x e ^ { - x / 3 }$ 31. $y = - \frac { 3 } { 4 } e ^ { - 5 x } + \frac { 3 } { 4 } e ^ { - x }$ 

33. $y = { \frac { 1 } { 2 { \sqrt { 3 } } } } \sin 2 { \sqrt { 3 } } x$ 

35. $y = - \cos 2 \sqrt { 2 } x + \frac { 1 } { \sqrt { 2 } } \sin 2 \sqrt { 2 } x$ 

37. $y = ( 1 - 2 x ) e ^ { 2 x } \qquad 3 9 . \ y = 2 ( 1 + 2 x ) e ^ { - 3 x / 2 }$ 

41. $y = c _ { 1 } e ^ { - x } + c _ { 2 } e ^ { 3 x }$ 43. $y = c _ { 1 } e ^ { - x / 2 } + c _ { 2 } x e ^ { - x / 2 }$ 

45. $y = c _ { 1 } \cos { \sqrt { 5 } } x + c _ { 2 } \sin { \sqrt { 5 } } x$ 47. $y = c _ { 1 } e ^ { - x / 5 } + c _ { 2 } x e ^ { - x / 5 }$ 

49. $y = e ^ { - x / 2 } { \bigl ( } c _ { 1 } \cos x + c _ { 2 } \sin x { \bigr ) }$ 51. $y = c _ { 1 } e ^ { 3 x / 4 } + c _ { 2 } x e ^ { 3 x / 4 }$ 

53. $y = c _ { 1 } e ^ { - 4 x / 3 } + c _ { 2 } x e ^ { - 4 x / 3 }$ 55. $y = c _ { 1 } e ^ { - x / 2 } + c _ { 2 } e ^ { 4 x / 3 }$ 

57. $y = ( 1 + 2 x ) e ^ { - x }$ 59. $y = \frac { 1 5 } { 1 3 } e ^ { - 7 x / 3 } + \frac { 1 1 } { 1 3 } e ^ { 2 x }$ 

## SECTION 17.2, pp. 17-14–17-15

1. $y = c _ { 1 } e ^ { 5 x } + c _ { 2 } e ^ { - 2 x } + { \frac { 3 } { 1 0 } }$ 

1 1 3. y c = + c e +x <sub>1 2</sub> −x<sub>2</sub> cos x <sub>2</sub> sin 

1 5. y c = + cos s x c in x − <sub>1 2</sub> x <sub>8</sub> cos 3 

7. $y = c _ { 1 } e ^ { 2 x } + c _ { 2 } e ^ { - x } - 6 \cos x - 2 \sin x$ 

9. y c = + e c e x <sup>−</sup> − − 2 + x x <sup>2</sup> <sup>1</sup><sub>2</sub> xe <sup>x</sup> 

$$
y = c _ {1} e ^ {3 x} + c _ {2} e ^ {- 2 x} - \frac {1}{4} e ^ {- x} + \frac {4 9}{5 0} \cos x + \frac {7}{5 0} \sin x
$$

13. y c = + c e<sup>−</sup> + + x <sup>3</sup><sub>5</sub>x <sub>1 2</sub> <sup>5 3</sup> x <sup>2</sup> − 6 x 25 

15. $y = c _ { 1 } + c _ { 2 } e ^ { 3 x } + 2 x ^ { 2 } + \frac { 4 } { 3 } x + \frac { 1 } { 3 } x e ^ { 3 x }$ 

17. $y = c _ { 1 } + c _ { 2 } e ^ { - x } + \frac { 1 } { 2 } x ^ { 2 } - x$ 

19. $y = c _ { 1 } \cos x + c _ { 2 } \sin x - { \frac { 1 } { 2 } } x \cos x$ 

21. $y = ( c _ { 1 } + c _ { 2 } x ) e ^ { - x } + { \frac { 1 } { 2 } } x ^ { 2 } e ^ { - x }$ 

23. $y = c _ { 1 } e ^ { x } + c _ { 2 } e ^ { - x } + \frac { 1 } { 2 } x e ^ { x }$ 

25. $y = e ^ { - 2 x } { \bigl ( } c _ { 1 } \cos x + c _ { 2 } \sin x { \bigr ) } + 2$ 

27. $y = A \cos x +$ s B in x x + + sin c x x os ln co ( ) s x 

29. $y = c _ { 1 } + c _ { 2 } e ^ { 5 x } + \frac { 1 } { 1 0 } x ^ { 2 } e ^ { 5 x } - \frac { 1 } { 2 5 } x e ^ { 5 x }$ 

31. $y = c _ { 1 } \cos x + c _ { 2 } \sin x - { \frac { 1 } { 2 } } x \cos x + x \sin x$ 

33. $y = c _ { 1 } + c _ { 2 } e ^ { x } + \frac { 1 } { 2 } e ^ { - x } + x e ^ { x }$ 

35. $y = c _ { 1 } e ^ { 5 x } + c _ { 2 } e ^ { - x } - \frac { 1 } { 8 } e ^ { x } - \frac { 4 } { 5 }$ 

37. $y = c _ { 1 } \cos x + c _ { 2 } \sin x - ( \sin x ) [ \ln ( \csc x + \cot x ) ]$ 

39. $y = c _ { 1 } + c _ { 2 } e ^ { 8 x } + { \frac { 1 } { 8 } } x e ^ { 8 x }$ 

41. $y = c _ { 1 } + c _ { 2 } e ^ { x } - x ^ { 4 } / 4 - x ^ { 3 } - 3 x ^ { 2 } - 6 x$ 

43. $y = c _ { 1 } + c _ { 2 } e ^ { - 2 x } - \frac { 1 } { 3 } e ^ { x } + x ^ { 3 } / 6 - x ^ { 2 } / 4 + x / 4$ 

45. $\begin{array} { l } { y = { { c } _ { 1 } } \cos { x } + { { c } _ { 2 } } \sin { x } + ( { x } - \tan { x } ) { { \cos } x } - \sin { x } \ln ( \cos { x } ) } \\ { = { { c } _ { 1 } } \cos { x } + { { c } _ { 2 } } ^ { \prime } \sin { x } + { { x } } \cos { x } - ( \sin { x } ) { { \mathrm { l n } } ( \cos { x } ) } } \end{array}$ 

47. $y = c e ^ { 3 x } - \frac { 1 } { 2 } e ^ { x }$ 

49. $y = c e ^ { 3 x } + 5 x e ^ { 3 x }$ 

1. y x = + 2 cos sin 1 x x − + sin ln s( ) ec ta x x + n 

53. $y = - e ^ { - x } + 1 + \frac { 1 } { 2 } x ^ { 2 } - x$ 

55. $y = 2 ( e ^ { x } - e ^ { - x } ) \cos x - 3 e ^ { - x } \sin x$ 

57. $y = ( 1 - x + x ^ { 2 } ) e ^ { x }$ 

59. $y _ { \mathtt { p } } = { \frac { 1 } { 4 } } x ^ { 2 }$ 

## SeCtion 17.3, pp. 17-20–17-21

. <sup>1</sup><sub>2</sub> y″ + y′ + y = 0, y(0) = 0.6, y′(0) = 0.6 1 1 

3. $\begin{array} { r } { { 1 2 0 } _ { y ^ { \prime \prime } + 6 0 0 y } = 0 , } \end{array}$ y(0) = 0.05, y′(0) = y<sub>0</sub> 

5. $2 q ^ { \prime \prime } + 4 q ^ { \prime } + 1 0 q = 2 0 \cos t ,$ q(0) = 2, $q ^ { \prime } ( 0 ) = 3$ 

7. $0 . 0 2 5 9 \mathrm { ~ m ~ } ( \mathrm { a b o v e ~ e q u i l i b r i u m } )$ 

9. $y ( t ) = 0 . 0 5 \cos { ( 5 . 7 1 5 t ) } + \frac { \upsilon _ { 0 } } { 5 . 7 1 5 } \sin { ( 5 . 7 1 5 t ) }$ (in meters) 

11. 1.806 s 13. 45 N 15. $8 . 1 3 ~ \mathrm { m / s }$ 

17. $0 . 6 2 3 8 ~ \mathrm { m / s ^ { 2 } ( a c c e l e r a t i o n ~ u p w a r d ) }$ 

19. $q ( t ) = - 8 e ^ { - 3 t } + 1 0 e ^ { - 2 t } , \quad \operatorname* { l i m } _ { t \longrightarrow \sim \sim } q ( t ) = 0$ 

21. $y ( t ) = 0 . 3 + 0 . 6 e ^ { - t } - 0 . 1 e ^ { - 2 t } - 0 . 2 e ^ { - 8 t }$ 

23. y(p) = -2 m (above equilibrium)1 1 

25. $q ( t ) = \frac { 1 } { 5 } + \binom { 4 9 \sqrt { 1 9 9 } \sin \frac { \sqrt { 1 9 9 } } { 2 } t + \frac { 4 9 } { 5 } \cos \frac { \sqrt { 1 9 9 } } { 2 } t } { e ^ { - t / 2 } }$ 

SECTION 17.4, p. 17-24 

1. $y = { \frac { c _ { 1 } } { x ^ { 2 } } } + c _ { 2 } x$ 3. $y = { \frac { c _ { 1 } } { x ^ { 2 } } } + c _ { 2 } x ^ { 3 }$ 

5. $y = c _ { 1 } x ^ { 2 } + c _ { 2 } x ^ { 4 }$ $7 . \ y = c _ { 1 } x ^ { - 1 / 3 } + c _ { 2 }$ 

9. $y = x ( c _ { 1 } + c _ { 2 } \ln x )$ 

11. $y = x [ c _ { 1 } \cos ( 2 \ln x ) + c _ { 2 } \sin ( 2 \ln x ) ]$ 

13. y = + [ ] ( ) ( ) c x c x <sup>1</sup> <sub>1 2</sub>cos 3 ln sin 3 ln x 

15. $y = { \frac { 1 } { \sqrt { x } } } [ c _ { 1 } \cos ( \ln x ) + c _ { 2 } \sin ( \ln x ) ]$ 

17. $y = { \frac { 1 } { x } } ( c _ { 1 } + c _ { 2 } \ln x )$ 19. $y = c _ { 1 } + c _ { 2 } \ln x$ 

21. $y = { \frac { 1 } { \sqrt [ 3 ] { x } } } ( c _ { 1 } + c _ { 2 } \ln x )$ 23. $y = x ^ { - 5 / 4 } ( c _ { 1 } + c _ { 2 } \ln x )$ 

25. $y = { \frac { 1 } { 2 x ^ { 3 } } } + { \frac { x } { 2 } } \qquad 2 7 . \ y = x$ 

29. $y = x [ - \cos ( \ln x ) + 2 \sin ( \ln x ) ]$ 

SECTION 17.5, p. 17-29 

$$
y = c _ {0} + c _ {1} \left(x - x ^ {2} + \frac {2}{3} x ^ {3} - \dots\right) = c _ {0} - \frac {c _ {1}}{2} e ^ {- 2 x}
$$

3. $y = c _ { 0 } ( 1 - 2 x ^ { 2 } + \cdots ) + c _ { 1 } \Big ( x - \frac { 2 } { 3 } x ^ { 3 } + \cdots \Big )$ = +c x c xcos 2 sin 2<sub>0 1</sub> 

5. $y = c _ { 1 } x + c _ { 2 } x ^ { 2 }$ 

$$
y = c _ {0} \left(1 + \frac {1}{2} x ^ {2} - \frac {1}{6} x ^ {3} + \dots\right) + c _ {1} \left(x + \frac {1}{6} x ^ {3} + \dots\right)
$$

9. $y = c _ { 0 } \Big ( 1 - x ^ { 2 } + \frac { 5 } { 1 2 } x ^ { 4 } - \cdots \Big ) + c _ { 1 } x$ 

11. $y = c _ { 0 } ( 1 - 3 x ^ { 2 } + \cdots ) + c _ { 1 } ( x - x ^ { 3 } )$ 

$$
1 3. y = c _ {0} \left(1 + x ^ {2} + \frac {2}{3} x ^ {4} + \dots\right) + c _ {1} \left(x + x ^ {3} + \frac {3}{5} x ^ {5} + \dots\right)
$$

15. $y = c _ { 0 } \Big ( 1 - \frac { 3 } { 2 } x ^ { 2 } + \cdots \Big ) + c _ { 1 } \Big ( x - \frac { 1 } { 2 } x ^ { 3 } + \cdots \Big )$ 

17. $y = c _ { 0 } \Big ( 1 - \frac { 3 } { 2 } x ^ { 2 } + \frac { 1 } { 8 } x ^ { 4 } + \cdots \Big ) + c _ { 1 } \Big ( x - \frac { 1 } { 3 } x ^ { 3 } \Big )$
