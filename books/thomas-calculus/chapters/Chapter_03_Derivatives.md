---
title: "Chapter 3: Derivatives"
order: 3
---

# Chapter 3: Derivatives

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 3.1 Tangent Lines and the Derivative at a Point

In this section we define the slope and tangent line to a curve at a point, and the derivative of a function at a point. The derivative gives a way to find both the slope of a graph and the instantaneous rate of change of a function. 

## Finding a Tangent Line to the Graph of a Function

To find a tangent line to an arbitrary curve $y = f(x)$ at a point $P(x_{0}, f(x_{0}))$ , we use the procedure introduced in Section 2.1. We calculate the slope of the secant line through P and a nearby point $Q(x_{0} + h, f(x_{0} + h))$ . We then investigate the limit of the slope as $h \to 0$ (Figure 3.1). If the limit exists, we call it the slope of the curve at P and define the tangent line at P to be the line through P having this slope. 

![[fa5e246322d9f626c4981a65b19ff57b227ebde9d5080958ae802a2062ee5fd8.jpg|image]]



FIGURE 3.1 The slope of the tangent line at $P$ is $\lim_{h\to 0}\frac{f(x_0 + h) - f(x_0)}{h}$ .


> ***DEFINITIONS*** The slope of the curve $y = f(x)$ at the point $P(x_{0}, f(x_{0}))$ is the number 
>
> $$
> \lim _ {h \to 0} \frac {f (x _ {0} + h) - f (x _ {0})}{h}
> $$
>
> (provided the limit exists). 
>
> The tangent line to the curve at P is the line through P with this slope. 
>
In Section 2.1, Example 3, we applied these definitions to find the slope of the parabola $f(x) = x^2$ at the point $P(2,4)$ and the tangent line to the parabola at $P$ . Let's look at another example. 

![[3da49486e521a797488ccad27dc49a74a227a734f7abf7c81845e1902b9f1efb.jpg|image]]



FIGURE 3.2 The tangent lines are steep when x is close to 0, and they become less steep as the point of tangency moves away (Example 1).


![[15cd1d28598ad7fee48315151a39946cd824fc5ef2525f045271d59234507e06.jpg|image]]



FIGURE 3.3 The two tangent lines to $y = 1 / x$ having slope $-1 / 4$ (Example 1).


The notation $f'(x_{0})$ is read “fprime of $x_{0}$ .” 

## **EXAMPLE 1**

(a) Find the slope of the curve $y = 1 / x$ at any point $x = a \neq 0$ . What is the slope at the point $x = -1$ ? 

(b) Where does the slope equal $-1/4$ ? 

(c) What happens to the tangent line to the curve at the point $(a, 1/a)$ as $a$ changes? 

## **Solution**

(a) Here $f(x) = 1 / x$ . The slope at $(a, 1 / a)$ is 

$$
\begin{array}{r l} \lim _ {h \to 0} \frac {f (a + h) - f (a)}{h} & = \lim _ {h \to 0} \frac {\frac {1}{a + h} - \frac {1}{a}}{h} = \lim _ {h \to 0} \frac {1}{h} \frac {a - (a + h)}{a (a + h)} \\ & = \lim _ {h \to 0} \frac {- h}{h a (a + h)} = \lim _ {h \to 0} \frac {- 1}{a (a + h)} = - \frac {1}{a ^ {2}}. \end{array}
$$

Notice how we had to keep writing “ $\lim_{h \to 0}$ ” before each fraction until the stage at which we could evaluate the limit by substituting $h = 0$ . The number $a$ may be positive or negative, but not 0. When $a = -1$ , the slope is $-1 / (-1)^2 = -1$ (Figure 3.2). 

(b) The slope of $y = 1 / x$ at the point where $x = a$ is $-1 / a^2$ . It will be $-1 / 4$ , provided that 

$$
- \frac {1}{a ^ {2}} = - \frac {1}{4}.
$$

This equation is equivalent to $a^2 = 4$ , so $a = 2$ or $a = -2$ . The curve has slope $-1/4$ at the two points $(2, 1/2)$ and $(-2, -1/2)$ (Figure 3.3). 

(c) The slope $-1/a^{2}$ is always negative if $a \neq 0$ . As $a \rightarrow 0^{+}$ , the slope approaches $-\infty$ and the tangent line becomes increasingly steep (Figure 3.2). We see this situation again as $a \rightarrow 0^{-}$ . As a moves away from x = 0 in either direction, the slope approaches 0 and the tangent line levels off, becoming closer and closer to a horizontal line. 

## Rates of Change: Derivative at a Point

The expression 

$$
\frac {f (x _ {0} + h) - f (x _ {0})}{h}, \quad h \neq 0
$$

is called the difference quotient of f at $x_{0}$ with increment h. If the difference quotient has a limit as h approaches zero, that limit is given a special name and notation. 

> ***DEFINITION*** The derivative of a function $f$ at a point $x_{0}$ , denoted $f'(x_{0})$ , is 
>
> $$
> f ^ {\prime} (x _ {0}) = \lim _ {h \to 0} \frac {f (x _ {0} + h) - f (x _ {0})}{h},
> $$
>
> provided this limit exists. 
>
The derivative has more than one meaning, depending on what problem we are considering. The formula for the derivative is the same as the formula for the slope of the curve $y = f(x)$ at a point. If we interpret the difference quotient as the slope of a secant line, then the derivative gives the slope of the curve $y = f(x)$ at the point $P(x_{0}, f(x_{0}))$ . If we interpret the difference quotient as an average rate of change (Section 2.1), then the derivative gives the function's instantaneous rate of change with respect to $x$ at the point $x = x_0$ . We study this interpretation in Section 3.4. 

![[dbca60669f32b870fc1298a8355ec9946741c5e808575cc840adc4c996b8c638.jpg|image]]


**EXAMPLE 2** In Examples 1 and 2 in Section 2.1, we studied the speed of a rock falling freely from rest near the surface of the earth. We knew that the rock fell $y = 4.9t^2$ meters during the first $t$ seconds, and we used a sequence of average rates over increasingly short intervals to estimate the rock's speed at the instant $t = 1$ . What was the rock's exact speed at this time? 

**Solution** We let $f(t) = 4.9t^{2}$ . The average speed of the rock over the interval between t = 1 and $t = 1 + h$ seconds, for h > 0, was found to be 

$$
\frac {f (1 + h) - f (1)}{h} = \frac {4 . 9 (1 + h) ^ {2} - 4 . 9 (1) ^ {2}}{h} = \frac {4 . 9 (h ^ {2} + 2 h)}{h} = 4. 9 (h + 2).
$$

The rock's speed at the instant $t = 1$ is then 

$$
f ^ {\prime} (1) = \lim _ {h \rightarrow 0} 4. 9 (h + 2) = 4. 9 (0 + 2) = 9. 8 \mathrm{m} / \mathrm{s}.
$$

Our original estimate of 9.8 m/s in Section 2.1 was right. 

## Summary

We have been discussing slopes of curves, lines tangent to a curve, the rate of change of a function, and the derivative of a function at a point. All of these ideas are based on the same limit. 

All of the following are interpretations for the limit of the difference quotient 

$$
\lim _ {h \to 0} \frac {f (x _ {0} + h) - f (x _ {0})}{h}.
$$

1. The slope of the graph of $y = f(x)$ at $x = x_{0}$ 

2. The slope of the tangent line to the curve $y = f(x)$ at $x = x_{0}$ 

3. The rate of change of $f(x)$ with respect to x at $x = x_{0}$ 

4. The derivative $f'(x_{0})$ at $x = x_{0}$ 

In the next sections, we allow the point $x_0$ to vary across the domain of the function $f$ . 

## EXERCISES 3.1

## Slopes and Tangent Lines

In Exercises 1–4, use the grid and a straight edge to make a rough estimate of the slope of the curve (in y-units per x-unit) at the points $P_{1}$ and $P_{2}$ . 


1.


![[049e54e8e27da98f926726d19a2572964ecca28f72f3c4f5c469ae41b3767e78.jpg|image]]



2.


![[83e22a217ec1896f1eb1e4df5da925c16a2d0bb76183162066ae73455ce21ca1.jpg|image]]



3.



4.


In Exercises 5–10, find an equation for the tangent line to the curve at the given point. Then sketch the curve and tangent line together. 

5. $y = 4 - x^{2}, (-1,3)$ 

6. $y = (x - 1)^{2} + 1,\quad(1,1)$ 

7. $y = 2\sqrt{x}$ ，(1,2) 

8. $y = \frac{1}{x^{2}}, (-1,1)$ 

9. $y = x^{3}, (-2, -8)$ 

10. $y = \frac{1}{x^3},\left(-2, - \frac{1}{8}\right)$ 

In Exercises 11–18, find the slope of the function's graph at the given point. Then find an equation for the line tangent to the graph there. 

11. $f(x) = x^{2} + 1,\quad (2,5)$ 

$$
f (x) = x - 2 x ^ {2}, \quad (1, - 1)
$$

13. $g(x) = \frac{x}{x - 2}, (3,3)$ 

14. $g(x) = \frac{8}{x^2}, (2,2)$ 

15. $h(t) = t^{3}, (2,8)$ 

16. $h(t) = t^{3} + 3t,$ (1,4) 

17. $f(x) = \sqrt{x}, (4,2)$ 

18. $f(x) = \sqrt{x + 1}, (8,3)$ 

In Exercises 19–22, find the slope of the curve at the point indicated. 

19. $y = 5x - 3x^{2}, x = 1$ 20. $y = x^{3} - 2x + 7, x = -2$ 

21. $y = \frac{1}{x - 1}, \quad x = 3$ 

22. $y = \frac{x - 1}{x + 1}, \quad x = 0$ 

## Interpreting Derivative Values

23. Growth of yeast cells In a controlled laboratory experiment, yeast cells are grown in an automated cell culture system that counts the number P of cells present at hourly intervals. The number after t hours is shown in the accompanying figure. 

![[ebc1d745543148e02cf6898109617e0e73c7a2e2b7efa179454d137cab201196.jpg|image]]


a. Explain what is meant by the derivative $P'(5)$ . What are its units? 

b. Which is larger, $P'(2)$ or $P'(3)$ ? Give a reason for your answer. 

c. The quadratic curve capturing the trend of the data points (see Appendix A.2) is given by $P(t) = 6.10t^{2} - 9.28t + 16.43$ . Find the instantaneous rate of growth when t = 5 hours. 

24. Effectiveness of a drug On a scale from 0 to 1, the effectiveness E of a pain-killing drug t hours after entering the bloodstream is displayed in the accompanying figure. 

![[d721d29f3465cde12c69a158e3d991083ea2b4d1d458ea1acaf04ab5f402d4eb.jpg|image]]


a. At what times does the effectiveness appear to be increasing? What is true about the derivative at those times? 

b. At what time would you estimate that the drug reaches its maximum effectiveness? What is true about the derivative at that time? What is true about the derivative as time increases in the 1 hour before your estimated time? 

At what points do the graphs of the functions in Exercises 25 and 26 have horizontal tangent lines? 

$$
2 5. f (x) = x ^ {2} + 4 x - 1 \quad 2 6. g (x) = x ^ {3} - 3 x
$$

27. Find equations of all lines having slope -1 that are tangent to the curve $y = 1/(x - 1)$ . 

28. Find an equation of the straight line having slope 1/4 that is tangent to the curve $y = \sqrt{x}$ . 

## Rates of Change

29. Object dropped from a tower An object is dropped from the top of a 100-m-high tower. Its height above ground after $t$ s is $100 - 4.9t^2$ m. How fast is it falling 2 s after it is dropped? 

30. Speed of a rocket At t seconds after liftoff, the height of a rocket is $3t^{2}$ m. How fast is the rocket climbing 10 s after liftoff? 

31. Disk's changing area What is the rate of change of the area of a disk $(A = \pi r^2)$ with respect to the radius when the radius is $r = 3$ ? 

32. Ball's changing volume What is the rate of change of the volume of a ball $(V = (4/3)\pi r^3)$ with respect to the radius when the radius is $r = 2$ ? 

33. Show that the line $y = mx + b$ is its own tangent line at any point $(x_0, mx_0 + b)$ . 

34. Find the slope of the tangent line to the curve $y = 1/\sqrt{x}$ at the point where x = 4. 

## Testing for Tangent Lines

35. Does the graph of 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2} \sin (1 / x), & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

have a tangent line at the origin? Give reasons for your answer. 

36. Does the graph of 

$$
g (x) = \left\{ \begin{array}{l l} x \sin (1 / x), & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

have a tangent line at the origin? Give reasons for your answer. 

## Vertical Tangent Lines

We say that a continuous curve $y = f(x)$ has a vertical tangent line at the point where $x = x_{0}$ if the limit of the difference quotient is $\infty$ or $-\infty$ . For example, $y = x^{1/3}$ has a vertical tangent line at x = 0 (see accompanying figure): 

$$
\begin{array}{c} \lim _ {h \to 0} \frac {f (0 + h) - f (0)}{h} = \lim _ {h \to 0} \frac {h ^ {1 / 3} - 0}{h} \\ = \lim _ {h \to 0} \frac {1}{h ^ {2 / 3}} = \infty . \end{array}
$$

![[7b241f1c8cd5b33cfba2c7e70500476e9f6d8c2c3c9dd97cc741445d926fbfdc.jpg|image]]



VERTICAL TANGENT LINE AT ORIGIN


However, $y = x^{2/3}$ has no vertical tangent line at $x = 0$ (see next figure): 

$$
\begin{array}{r l} \lim _ {h \to 0} \frac {g (0 + h) - g (0)}{h} & = \lim _ {h \to 0} \frac {h ^ {2 / 3} - 0}{h} \\ & = \lim _ {h \to 0} \frac {1}{h ^ {1 / 3}} \end{array}
$$

does not exist, because the limit is $\infty$ from the right and $-\infty$ from the left. 

![[2be575517f85aacddc7ef26c699dcd566e82a9c2b2bfa9dfc87cc256780768f4.jpg|image]]



NO VERTICAL TANGENT LINE AT ORIGIN


37. Does the graph of 

$$
f (x) = \left\{ \begin{array}{c c} - 1, & x <   0 \\ 0, & x = 0 \\ 1, & x > 0 \end{array} \right.
$$

have a vertical tangent line at the origin? Give reasons for your answer. 

38. Does the graph of 

$$
U (x) = \left\{ \begin{array}{l l} 0, & x <   0 \\ 1, & x \geq 0 \end{array} \right.
$$

have a vertical tangent line at the point $(0,1)$ ? Give reasons for your answer. 

T Graph the curves in Exercises 39–48. 

a. Where do the graphs appear to have vertical tangent lines? 

b. Confirm your findings in part (a) with limit calculations. But before you do, read the introduction to Exercises 37 and 38. 

39. $y = x^{2 / 5}$ 

40. $y = x^{4 / 5}$ 

41. $y = x^{1 / 5}$ 

42. $y = x^{3 / 5}$ 

43. $y = 4x^{2 / 5} - 2x$ 

44. $y = x^{5 / 3} - 5x^{2 / 3}$ 

45. $y = x^{2/3} - (x - 1)^{1/3}$ 

46. $y = x^{1/3} + (x - 1)^{1/3}$ 

47. $y = \left\{ \begin{array}{ll} - \sqrt{|x|}, & x\leq 0\\ \sqrt{x}, & x > 0 \end{array} \right.$ 

$$
4 8. y = \sqrt {| 4 - x |}
$$

## COMPUTER EXPLORATIONS

Use a CAS to perform the following steps for the functions in Exercises 49–52: 

a. Plot $y = f(x)$ over the interval $(x_0 - 1/2) \leq x \leq (x_0 + 3)$ . 

b. Holding $x_{0}$ fixed, the difference quotient 

$$
q (h) = \frac {f (x _ {0} + h) - f (x _ {0})}{h}
$$

at $x_{0}$ becomes a function of the step size h. Enter this function into your CAS workspace. 

c. Find the limit of q as $h \rightarrow 0$ . 

d. Define the secant lines $y = f(x_{0}) + q \cdot (x - x_{0})$ for $h = 3,2,$ and 1. Graph them, together with $f$ and the tangent line, over the interval in part (a). 

$$
f (x) = x ^ {3} + 2 x, \quad x _ {0} = 0
$$

$$
\mathbf {5 0 .} f (x) = x + \frac {5}{x}, x _ {0} = 1
$$

51. $f(x) = x + \sin(2x)$ , $x_{0} = \pi/2$ 

52. $f(x) = \cos x + 4 \sin(2x)$ , $x_{0} = \pi$ 

## 3.2 The Derivative as a Function

HISTORICAL ESSAY 

In the last section we defined the derivative of $y = f(x)$ at the point $x = x_{0}$ to be the limit 

The Derivative 

To read this essay, visit the companion Website. 

$$
f ^ {\prime} (x _ {0}) = \lim _ {h \rightarrow 0} \frac {f (x _ {0} + h) - f (x _ {0})}{h}.
$$

We now investigate the derivative as a function derived from f by considering the limit at each point x in the domain of f. 

> ***DEFINITION*** The derivative of the function $f(x)$ with respect to the variable $x$ is the function $f'$ whose value at $x$ is 
>
> $$
> f ^ {\prime} (x) = \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h},
> $$
>
> provided the limit exists. 
>
We use the notation $f'(x)$ in the definition, rather than $f'(x_{0})$ as before, to emphasize that $f'$ is a function of the independent variable x with respect to which the derivative function $f'(x)$ is being defined. The domain of $f'$ is the set of points in the domain of f for 

![[2a8fac97ccb4649e1e462b56d2a7b73fcf60ed8c3c6494c285357230109846b4.jpg|image]]


$$
\begin{array}{c} f ^ {\prime} (x) = \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h} \\ = \lim _ {z \to x} \frac {f (z) - f (x)}{z - x} \end{array}
$$

FIGURE 3.4 Two forms for the difference quotient. 

Derivative of the Reciprocal Function 

$$
{\frac {d}{d x}} {\Bigl (} {\frac {1}{x}} {\Bigr)} = - {\frac {1}{x ^ {2}}}, x \neq 0
$$

which the limit exists, which means that the domain may be the same as or smaller than the domain of f. If $f'$ exists at a particular x, we say that f is differentiable (has a derivative) at x. If $f'$ exists at every point in the domain of f, we call f differentiable. 

If we write $z = x + h$ , then h = z - x and h approaches 0 if and only if z approaches x. Therefore, an equivalent definition of the derivative is as follows (see Figure 3.4). This formula is sometimes more convenient to use when finding a derivative function, and it focuses on the point z that approaches x. 

Alternative Formula for the Derivative 

$$
f ^ {\prime} (x) = \lim _ {z \rightarrow x} \frac {f (z) - f (x)}{z - x}
$$

## Calculating Derivatives from the Definition

The process of calculating a derivative is called differentiation. To emphasize the idea that differentiation is an operation performed on a function $y = f(x)$ , we use the notation 

$$
{\frac {d}{d x}} f (x)
$$

as another way to denote the derivative $f'(x)$ . Example 1 of Section 3.1 illustrated the differentiation process for the function y = 1/x when x = a. For x representing any point in the domain, we get the formula 

$$
{\frac {d}{d x}} {\Bigl (} {\frac {1}{x}} {\Bigr)} = - {\frac {1}{x ^ {2}}}.
$$

Here are two more examples in which we allow x to be any point in the domain of f. 

**EXAMPLE 1** Differentiate $f(x) = \frac{x}{x - 1}$ . 

**Solution** We use the definition of derivative, which requires us to calculate $f(x + h)$ and then subtract $f(x)$ to obtain the numerator in the difference quotient. We have 

$$
\begin{array}{r l r} f (x) & = \frac {x}{x - 1} \text {   and   } f (x + h) = \frac {(x + h)}{(x + h) - 1}, \text { so } \\ f ^ {\prime} (x) & = \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h} & \text { Definition } \\ & = \lim _ {h \to 0} \frac {\frac {x + h}{x + h - 1} - \frac {x}{x - 1}}{h} & \text { Substitute. } \\ & = \lim _ {h \to 0} \frac {1}{h} \cdot \frac {(x + h) (x - 1) - x (x + h - 1)}{(x + h - 1) (x - 1)} & \frac {a}{b} - \frac {c}{d} = \frac {a d - c b}{b d} \\ & = \lim _ {h \to 0} \frac {1}{h} \cdot \frac {- h}{(x + h - 1) (x - 1)} & \text { Simplify. } \\ & = \lim _ {h \to 0} \frac {- 1}{(x + h - 1) (x - 1)} = \frac {- 1}{(x - 1) ^ {2}}. & \text { Cancel   } h \neq 0 \text {   and   evaluate. } \end{array}
$$

## **EXAMPLE 2**

(a) Find the derivative of $f(x) = \sqrt{x}$ for x > 0. 

(b) Find the tangent line to the curve $y = \sqrt{x}$ at x = 4. 

Derivative of the Square Root Function 

$$
{\frac {d}{d x}} {\sqrt {x}} = {\frac {1}{2 {\sqrt {x}}}}, x > 0
$$

![[ca420bd00d10054af291490c12bff66032855f0333b06d66147a34640f35d7bb.jpg|image]]



FIGURE 3.5 The curve $y = \sqrt{x}$ and its tangent line at (4, 2). The tangent line's slope is found by evaluating the derivative at $x = 4$ (Example 2).


![[d18f41dbe6596d769d0e2e35e7788a4dff7b719c76dcb8974d9d115b6b4a616c.jpg|image]]



(a)


![[0289e1585e4f8a9b9c2286baff426bb903bca6597abc26a3e484b7e4610901c7.jpg|image]]



(b)



FIGURE 3.6 We made the graph of $y = f'(x)$ in (b) by plotting slopes from the graph of $y = f(x)$ in (a). The vertical coordinate of $B'$ is the slope at $B$ , and so on. The slope at $E$ is approximately $8/4 = 2$ . In (b) we see that the rate of change of $f$ is negative for $x$ between $A'$ and $D'$ ; the rate of change is positive for $x$ to the right of $D'$ .


## **Solution**

(a) We use the alternative formula to calculate $f'$ : 

$$
\begin{array}{l l} f ^ {\prime} (x) = \lim _ {z \to x} \frac {f (z) - f (x)}{z - x} \\ = \lim _ {z \to x} \frac {\sqrt {z} - \sqrt {x}}{z - x} \\ = \lim _ {z \to x} \frac {\sqrt {z} - \sqrt {x}}{(\sqrt {z} - \sqrt {x}) (\sqrt {z} + \sqrt {x})} & \frac {1}{a ^ {2} - b ^ {2}} = \frac {1}{(a - b) (a + b)} \\ = \lim _ {z \to x} \frac {1}{\sqrt {z} + \sqrt {x}} = \frac {1}{2 \sqrt {x}}. & \text { Cancel   and   evaluate. } \end{array}
$$

(b) The slope of the curve at $x = 4$ is 

$$
f ^ {\prime} (4) = \frac {1}{2 \sqrt {4}} = \frac {1}{4}.
$$

The tangent line is the line through the point $(4, 2)$ with slope 1/4 (Figure 3.5): 

$$
\begin{array}{l} y = 2 + \frac {1}{4} (x - 4) \\ y = \frac {1}{4} x + 1. \end{array}
$$

## Notation

There are many ways to denote the derivative of a function $y = f(x)$ , where the independent variable is x and the dependent variable is y. Some common alternative notations for the derivative are 

$$
f ^ {\prime} (x) = y ^ {\prime} = \frac {d y}{d x} = \frac {d f}{d x} = \frac {d}{d x} f (x) = D (f) (x) = D _ {x} f (x).
$$

The symbols d/dx and D indicate the operation of differentiation. We read dy/dx as “the derivative of y with respect to x,” and df/dx and $(d/dx) f(x)$ as “the derivative of f with respect to x.” The “prime” notations $y'$ and $f'$ originate with Newton. The d/dx notations are similar to those used by Leibniz. The symbol dy/dx should not be regarded as a ratio; it simply denotes a derivative. 

To indicate the value of a derivative at a specified number x = a, we use the notation 

$$
f ^ {\prime} (a) = \left. \frac {d y}{d x} \right| _ {x = a} = \left. \frac {d f}{d x} \right| _ {x = a} = \left. \frac {d}{d x} f (x) \right| _ {x = a}.
$$

For instance, in Example 2, 

$$
f ^ {\prime} (4) = \left. \frac {d}{d x} \sqrt {x} \right| _ {x = 4} = \left. \frac {1}{2 \sqrt {x}} \right| _ {x = 4} = \frac {1}{2 \sqrt {4}} = \frac {1}{4}.
$$

## Graphing the Derivative

We can often make an approximate plot of the derivative of $y = f(x)$ by estimating the slopes on the graph of f. That is, we plot the points $(x, f'(x))$ in the xy-plane and connect them with a curve that represents $y = f'(x)$ . 

**EXAMPLE 3** Graph the derivative of the function $y = f(x)$ in Figure 3.6a. 

**Solution** We sketch the tangent lines to the graph of f at frequent intervals and use their slopes to estimate the values of $f'(x)$ at these points. We plot the corresponding $(x, f'(x))$ pairs and connect them with a curve as sketched in Figure 3.6b. 

![[8206922ba7176718d6adba87090ca3fc019f7c80ea7a24200bc2d7574e9a680e.jpg|image]]



FIGURE 3.7 Derivatives at endpoints of a closed interval are one-sided limits.


![[8d2c8c3ef794f40d0202ff7495981ad67a23ba4c45c08ad31dc162b0c954e6a3.jpg|image]]


What can we learn from the graph of $y = f'(x)$ ? At a glance we can see 


FIGURE 3.8 The function $y = |x|$ is not differentiable at the origin where the graph has a “corner” (Example 4).


1. where the rate of change of $f$ is positive, negative, or zero; 

2. the rough size of the growth rate at any x; 

3. where the rate of change itself is increasing or decreasing. 

## Differentiability on an Interval; One-Sided Derivatives

A function $y = f(x)$ is differentiable on an open interval (finite or infinite) if it has a derivative at each point of the interval. It is differentiable on a closed interval $[a, b]$ if it is differentiable on the interior $(a, b)$ and if the limits 

$$
\begin{array}{l l} \lim _ {h \to 0 ^ {+}} \frac {f (a + h) - f (a)}{h} & \text { Right - hand   derivative   at } a \\ \lim _ {h \to 0 ^ {-}} \frac {f (b + h) - f (b)}{h} & \text { Left - hand   derivative   at } b \end{array}
$$

exist at the endpoints (Figure 3.7). 

Right-hand and left-hand derivatives may or may not be defined at any point of a function's domain. Because of Theorem 5, Section 2.4, a function has a derivative at an interior point if and only if it has left-hand and right-hand derivatives there, and these one-sided derivatives are equal. 

**EXAMPLE 4** Show that the function $y = |x|$ is differentiable on $(-\infty, 0)$ and on $(0, \infty)$ but has no derivative at x = 0. 

**Solution** The graph of the function $y = mx + b$ is a straight line with slope m. Thus, to the right of the origin, when x > 0, 

$$
\frac {d}{d x} (| x |) = \frac {d}{d x} (x) = \frac {d}{d x} (1 \cdot x) = 1. \quad | x | = x \text { since } x > 0, \frac {d}{d x} (m x + b) = m
$$

To the left, when x < 0, 

$$
\frac {d}{d x} (| x |) = \frac {d}{d x} (- x) = \frac {d}{d x} (- 1 \cdot x) = - 1 \quad | x | = - x \text { since } x <   0
$$

(Figure 3.8). The two branches of the graph come together at an angle at the origin, forming a non-smooth corner. There is no derivative at the origin because the one-sided derivatives differ there: 

$$
\begin{array}{r l} \text { Right - hand   derivative   of } | x | \text { at   zero } & = \lim _ {h \to 0 ^ {+}} \frac {| 0 + h | - | 0 |}{h} = \lim _ {h \to 0 ^ {+}} \frac {| h |}{h} \\ & = \lim _ {h \to 0 ^ {+}} \frac {h}{h} \quad | h | = h \text { when } h > 0 \\ & = \lim _ {h \to 0 ^ {+}} 1 = 1 \end{array}
$$

$$
\begin{array}{l l} \text { Left - hand   derivative   of } | x | \text { at   zero } & = \lim _ {h \to 0 ^ {-}} \frac {| 0 + h | - | 0 |}{h} = \lim _ {h \to 0 ^ {-}} \frac {| h |}{h} \\ & = \lim _ {h \to 0 ^ {-}} \frac {- h}{h} \quad | h | = - h \text { when } h <   0 \\ & = \lim _ {h \to 0 ^ {-}} - 1 = - 1. \end{array}
$$

![[312415d8e30a60464654423a7c999f3a51ad81ca4ebf70b657257fba39c7af7e.jpg|image]]



FIGURE 3.9 The square root function is not differentiable at x = 0, where the graph of the function has a vertical tangent line.


**EXAMPLE 5** In Example 2 we found that for x > 0, 

$$
{\frac {d}{d x}} {\sqrt {x}} = {\frac {1}{2 {\sqrt {x}}}}.
$$

We apply the definition to examine whether the derivative exists at x = 0: 

$$
\lim _ {h \to 0 ^ {+}} \frac {\sqrt {0 + h} - \sqrt {0}}{h} = \lim _ {h \to 0 ^ {+}} \frac {1}{\sqrt {h}} = \infty .
$$

Since the (right-hand) limit is not finite, there is no derivative at x = 0. Since the slopes of the secant lines joining the origin to the points $(h, \sqrt{h})$ on a graph of $y = \sqrt{x}$ approach $\infty$ , the graph has a vertical tangent line at the origin. (See Figure 3.9 and Exercises 37 and 38 in Section 3.1.) 

## When Does a Function Not Have a Derivative at a Point?

A function has a derivative at a point $x_{0}$ if the slopes of the secant lines through $P(x_{0}, f(x_{0}))$ and a nearby point Q on the graph approach a finite limit as Q approaches P. Thus differentiability is a “smoothness” condition on the graph of f. A function can fail to have a derivative at a point for many reasons, including the existence of points where the graph has 

![[336c9aa82de4a9ce6b7584352527ff8e828c189173a07ac0b63bf24c7a932599.jpg|image]]


1. a corner, where the one-sided derivatives differ 

![[76ee78acbb8a5f1482e3ea7d5c12425141d637f87f37b1c9806d1cf1a90c4570.jpg|image]]


![[02536ce454ef8f9dd20c6d8650c9a6940110c3848ca6e49e2037bc674d89da65.jpg|image]]


2. a cusp, where the slope of PQ approaches $\infty$ from one side and $-\infty$ from the other 

3. a vertical tangent line, where the slope of PQ approaches $\infty$ from both sides or approaches $-\infty$ from both sides (here, it approaches $-\infty$ ) 

![[04f70d3f846c397d78672701f3de8e534a970a1610f09851275cf81347057841.jpg|image]]


![[41c1e737150cb3225ebf210d8af4597e51df8d70c28ff043fcbd8b7de4c8c3b6.jpg|image]]



4. a discontinuity (two examples shown)


![[3a6a4a1322234e48f055135f4708346f002225b84f7f7137f69466daea119bff.jpg|image]]



5. wild oscillation


The last example shows a function that is continuous at x = 0, but whose graph oscillates wildly up and down as it approaches x = 0. The slopes of the secant lines through 0 oscillate between -1 and 1 as x approaches 0, and do not have a limit at x = 0. 

## Differentiable Functions Are Continuous

A function is continuous at every point where it has a derivative. 

THEOREM 1—Differentiable Implies Continuous If $f$ has a derivative at $x = c$ , then $f$ is continuous at $x = c$ . 

Proof Given that $f'(c)$ exists, we must show that $\lim_{x \to c} f(x) = f(c)$ , or, equivalently, that $\lim_{h \to 0} f(c + h) = f(c)$ . If $h \neq 0$ , then 

$$
\begin{array}{l l} f (c + h) = f (c) + (f (c + h) - f (c)) & \text {   Add   and   subtract   } f (c). \\ = f (c) + \frac {f (c + h) - f (c)}{h} \cdot h. & \text {   Divide   and   multiply   by   } h. \end{array}
$$

Now take limits as $h \to 0$ . By Theorem 1 of Section 2.2, 

$$
\begin{array}{l} \lim _ {h \to 0} f (c + h) = \lim _ {h \to 0} f (c) + \lim _ {h \to 0} \frac {f (c + h) - f (c)}{h} \cdot \lim _ {h \to 0} h \\ \qquad = f (c) + f ^ {\prime} (c) \cdot 0 \\ \qquad = f (c) + 0 \\ \qquad = f (c). \end{array}
$$

Similar arguments with one-sided limits show that if $f$ has a derivative from one side (right or left) at $x = c$ , then $f$ is continuous from that side at $x = c$ . 

Theorem 1 says that if a function has a discontinuity at a point (for instance, a jump discontinuity), then it cannot be differentiable there. The greatest integer function $y = \lfloor x \rfloor$ fails to be differentiable at every integer x = n (Example 4, Section 2.6). 

Caution The converse of Theorem 1 is false. A function need not have a derivative at a point where it is continuous, as we saw with the absolute value function in Example 4. 

## EXERCISES 3.2

## Finding Derivative Functions and Values

Using the definition, calculate the derivatives of the functions in Exercises 1–6. Then find the values of the derivatives as specified. 

$$
\mathbf {1}. f (x) = 4 - x ^ {2}; \quad f ^ {\prime} (- 3), f ^ {\prime} (0), f ^ {\prime} (1)
$$

2. $F(x) = (x - 1)^{2} + 1;$ $F'(-1), F'(0), F'(2)$ 

$$
g (t) = \frac {1}{t ^ {2}}; \quad g ^ {\prime} (- 1), g ^ {\prime} (2), g ^ {\prime} (\sqrt {3})
$$

$$
k (z) = \frac {1 - z}{2 z}; k ^ {\prime} (- 1), k ^ {\prime} (1), k ^ {\prime} (\sqrt {2})
$$

5. $p(\theta) = \sqrt{3\theta}; \quad p'(1), p'(3), p'(2/3)$ 

$$
r (s) = \sqrt {2 s + 1}; r ^ {\prime} (0), r ^ {\prime} (1), r ^ {\prime} (1 / 2)
$$

In Exercises 7–12, find the indicated derivatives. 

7. $\frac{dy}{dx}$ if $y = 2x^{3}$ 

$$
\frac {d r}{d s} \quad \text { if } \quad r = s ^ {3} - 2 s ^ {2} + 3
$$

9. $\frac{ds}{dt}$ if $s = \frac{t}{2t + 1}$ 

10. $\frac{dv}{dt}$ if $v = t - \frac{1}{t}$ 

11. $\frac{dp}{dq}$ if $p = q^{3 / 2}$ 

12. $\frac{dz}{dw}$ if $z = \frac{1}{\sqrt{w^2 - 1}}$ 

## Slopes and Tangent Lines

In Exercises 13–16, differentiate the functions and find the slope of the tangent line at the given value of the independent variable. 

$$
\mathbf {1 3 .} f (x) = x + \frac {9}{x}, x = - 3 \quad \mathbf {1 4 .} k (x) = \frac {1}{2 + x}, x = 2
$$

$$
\mathbf {1 5 .} s = t ^ {3} - t ^ {2}, \quad t = - 1 \quad \mathbf {1 6 .} y = \frac {x + 3}{1 - x}, \quad x = - 2
$$

In Exercises 17–18, differentiate the functions. Then find an equation of the tangent line at the indicated point on the graph of the function. 

$$
1 7. y = f (x) = \frac {8}{\sqrt {x - 2}}, (x, y) = (6, 4)
$$

$$
\mathbf {1 8 .} w = g (z) = 1 + \sqrt {4 - z}, (z, w) = (3, 2)
$$

In Exercises 19–22, find the values of the derivatives. 

$$
\mathbf {1 9 .} \left. \frac {d s}{d t} \right| _ {t = - 1} \quad \text { if } \quad s = 1 - 3 t ^ {2} \quad \mathbf {2 0 .} \left. \frac {d y}{d x} \right| _ {x = \sqrt {3}} \quad \text { if } \quad y = 1 - \frac {1}{x}
$$

21. $\frac{dr}{d\theta}\bigg|_{\theta = 0}$ if $r = \frac{2}{\sqrt{4 - \theta}}$ 22. $\frac{dw}{dz}\bigg|_{z = 4}$ if $w = z + \sqrt{z}$ 

Using the Alternative Formula for Derivatives Use the formula 

$$
f ^ {\prime} (x) = \lim _ {z \rightarrow x} \frac {f (z) - f (x)}{z - x}
$$

to find the derivative of the functions in Exercises 23-26. 

23. $f(x) = \frac{1}{x + 2}$ 

$$
2 4. f (x) = x ^ {2} - 3 x + 4
$$

25. $g(x) = \frac{x}{x - 1}$ 

26. $g(x) = 1 + \sqrt{x}$ 

## Graphs

Match the functions graphed in Exercises 27–30 with the derivatives graphed in the accompanying figures (a)–(d). 

![[f3507e592470390657f96917ad2caea303a6d295205a4106a6cdebc38a43675c.jpg|image]]


![[22686fd13b30d1421f71fe946501263c6067caa3dea65cdfa6741f60b979f47c.jpg|image]]



(a)



(b)


![[289401cf0e4f8681e751657101776a955683f5c447259735c7bf5711677167f3.jpg|image]]



(c)


![[41b380082a914498357882070afa98f159888a4b24bd8ac06ecb60b720aa8b29.jpg|image]]



(d)



27.


![[e127ad7138492ea27cf3dff9cdd71f97e8ebf23ea27c90bc9dbdb9a881f0330f.jpg|image]]



28.


![[f1a918cf3a2c973b1ac3c0a7949e5695d46325f2a7dc4cb7b2fca99492a0da47.jpg|image]]



29.


![[4a1f47ab60cad98e43cdee3d8e7593b8e82971d6069e541c2c942e80918fd999.jpg|image]]



30.


![[19143bebfa94bdbc1f35bf0632019b918e57579655c092b37c7bdb754856c928.jpg|image]]


31. Consider the function $f$ graphed here. The domain of $f$ is the interval $[-4, 6]$ and its graph is made of line segments joined end to end. 

![[b93e31fedd7715bdded38217a51d1ae48889824f016f5ef2d92fe0c36ead2393.jpg|image]]


a. At which points of the domain interval is $f'$ not defined? Give reasons for your answer. 

b. Graph the derivative of $f$ . The graph should show a step function. 

32. Recovering a function from its derivative 

a. Use the following information to graph the function $f$ over the closed interval $[-2, 5]$ . 

i) The graph of $f$ is made of closed line segments joined end to end. 

ii) The graph starts at the point $(-2,3)$ . 

iii) The derivative of $f$ is the step function in the figure shown here. 

![[ff9d1de24997be367f7c1725230c6c69a9ddb2be99e55910c37ac97e32611b77.jpg|image]]


b. Repeat part (a), assuming that the graph starts at $(-2,0)$ instead of $(-2,3)$ . 

33. Growth in the economy The graph in the accompanying figure shows the average annual percentage change $y = f(t)$ in the U.S. gross national product (GNP) for the years 2005–2011. Graph dy/dt (where defined). 

![[b1faf4e0f89e61d476c12c74e2d547ed1b9d123a0fb3c70e54b397a1b7c45fe5.jpg|image]]


34. Fruit flies (Continuation of Example 4, Section 2.1.) Populations starting out in closed environments grow slowly at first, when there are relatively few members, then more rapidly as the number of reproducing individuals increases and resources are still abundant, then slowly again as the population reaches the carrying capacity of the environment. 

43. 

a. Use the graphical technique of Example 3 to graph the derivative of the fruit fly population as a function of time (in days). The graph of the population is reproduced here. 

![[165180b0b18afdfdf7d4c7dd7715939547afab23b9002b1e478dcec655ea921d.jpg|image]]


b. During what days does the population seem to be increasing fastest? Slowest? 

35. Temperature The given graph shows the temperature $T$ in $^{\circ}\mathrm{C}$ between 6 A.M. and 6 P.M. 

![[dbc85582fab935f83014fcc805a000a472b79fc4146d0d6909003a3a1851bdfd.jpg|image]]


a. Estimate the rate of temperature change at the times
i) 7 A.M. ii) 9 A.M. iii) 2 P.M. iv) 4 P.M. 

b. At what time does the temperature increase most rapidly? Decrease most rapidly? What is the rate for each of those times? 

c. Use the graphical technique of Example 3 to graph the derivative of temperature T versus time t. 

36. Average single-family home prices P (in thousands of dollars) in Sacramento, California, are shown in the accompanying figure from the beginning of 2006 through the end of 2015. 

![[96e4a68969e768715d7128c1b82eb83cda144ceeaef8bc21b50623f684aefb59.jpg|image]]


a. During what years did home prices decrease? increase?
b. Estimate home prices at the end of
i) 2007 ii) 2012 iii) 2015 

c. Estimate the rate of change of home prices at the beginning of
i) 2007 ii) 2010 iii) 2014 

d. During what year did home prices drop most rapidly and what is an estimate of this rate? 

e. During what year did home prices rise most rapidly and what is an estimate of this rate? 

f. Use the graphical technique of Example 3 to graph the derivative of home price P versus time t. 

## One-Sided Derivatives

Compute the right-hand and left-hand derivatives as limits to show that the functions in Exercises 37–40 are not differentiable at the point P.
37. 38. 

![[3da11a219708d2b4fab596281123a441db779bee29ead8535736b54fc6c15dbf.jpg|image]]


![[5955f994a26802c8a83d6c3245a344ed74d5b1108f63904c3b867425a68767bc.jpg|image]]


39. 


40.


![[70c802a2c0a8066da3232c62c3effcc8aabc377436ae6dbdd54b5335cf26bd9d.jpg|image]]


![[e57dd7a8dc4f10c9eb5fee10952110485be90e98cc1ccea479e4a84a11cd8e9d.jpg|image]]


In Exercises 41–44, determine whether the piecewise-defined function is differentiable at x = 0. 

41. $f(x) = \left\{ \begin{array}{ll}2x - 1, & x\geq 0\\ x^{2} + 2x + 7, & x <   0 \end{array} \right.$ 

42. $g(x) = \begin{cases} x^{2/3}, & x \geq 0 \\ x^{1/3}, & x < 0 \end{cases}$ 

$$
f (x) = \left\{ \begin{array}{l l} 2 x + \tan x, & x \geq 0 \\ x ^ {2}, & x <   0 \end{array} \right.
$$

44. $g(x) = \left\{ \begin{array}{ll}2x - x^3 -1, & x\geq 0\\ x - \frac{1}{x + 1}, & x <   0 \end{array} \right.$ 

## Differentiability and Continuity on an Interval

Each figure in Exercises 45–50 shows the graph of a function over a closed interval D. At what domain points does the function appear to be 

a. differentiable? 

b. continuous but not differentiable? 

c. neither continuous nor differentiable? 

Give reasons for your answers. 


45.



46.


![[48cb8bd76dc42282238bdd7f29db27a241b2be65a6b14519b41ff7fff88aa504.jpg|image]]


![[da2e90fc395cc142b875765077013065545ef588290ad41bd2edb6db67ede9b6.jpg|image]]



47.


![[26b71d06d8d7342f35764aee2077a52ef987c349c76f90082d1c81a74e5ee22f.jpg|image]]



48.


![[914e1c33ec48ee81e9e67b0a908058456385bd28442c15292a12ab1bef58ef3b.jpg|image]]



49.


![[c05a01a8f62e47721325fc6a6db5a9e9e842398a9c38362619191be9cedfcf91.jpg|image]]



50.


![[99561b72a4d2acb470b4773edd149032c8cf49f26c04111e007b208fcc6b3cde.jpg|image]]


Theory and Examples 

In Exercises 51–54, 

a. Find the derivative $f'(x)$ of the given function $y = f(x)$ . 

b. Graph $y = f(x)$ and $y = f'(x)$ side by side using separate sets of coordinate axes, and answer the following questions. 

c. For what values of $x$ , if any, is $f'$ positive? Zero? Negative? 

d. Over what intervals of $x$ -values, if any, does the function $y = f(x)$ increase as $x$ increases? Decrease as $x$ increases? How is this related to what you found in part (c)? (We will say more about this relationship in Section 4.3.) 

51. $y = -x^{2}$ 

52. $y = -1 / x$ 

53. $y = x^{3} / 3$ 

54. $y = x^{4} / 4$ 

55. Tangent line to a parabola Does the parabola $y = 2x^{2} - 13x + 5$ have a tangent line whose slope is -1? If so, find an equation for the line and the point of tangency. If not, why not? 

56. Tangent line to $y = \sqrt{x}$ Does any tangent line to the curve $y = \sqrt{x}$ cross the x-axis at x = -1? If so, find an equation for the line and the point of tangency. If not, why not? 

57. Derivative of $-f$ Does knowing that a function $f(x)$ is differentiable at $x = x_0$ tell you anything about the differentiability of the function $-f$ at $x = x_0$ ? Give reasons for your answer. 

58. Derivative of multiples Does knowing that a function $g(t)$ is differentiable at t = 7 tell you anything about the differentiability of the function 3g at t = 7? Give reasons for your answer. 

59. Limit of a quotient Suppose that functions $g(t)$ and $h(t)$ are defined for all values of $t$ and $g(0) = h(0) = 0$ . Can $\lim_{t \to 0} g(t) / h(t)$ exist? If it does exist, must it equal zero? Give reasons for your answers. 

60. a. Let $f(x)$ be a function satisfying $|f(x)| \leq x^2$ for $-1 \leq x \leq 1$ . Show that $f$ is differentiable at $x = 0$ and find $f'(0)$ . 

b. Show that 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2} \sin \frac {1}{x}, & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

is differentiable at $x = 0$ and find $f'(0)$ . 

T 61. Graph $y = 1 / (2\sqrt{x})$ in a window that has $0 \leq x \leq 2$ . Then, on the same screen, graph 

$$
y = \frac {\sqrt {x + h} - \sqrt {x}}{h}
$$

for $h = 1, 0.5, 0.1$ . Then try $h = -1, -0.5, -0.1$ . Explain what is going on. 

62. Graph $y = 3x^{2}$ in a window that has $-2 \leq x \leq 2, 0 \leq y \leq 3$ . Then, on the same screen, graph 

$$
y = \frac {(x + h) ^ {3} - x ^ {3}}{h}
$$

for $h = 2,1,0.2$ . Then try $h = -2, -1, -0.2$ . Explain what is going on. 

63. Derivative of $y = |x|$ Graph the derivative of $f(x) = |x|$ . Then graph $y = (|x| - 0) / (x - 0) = |x| / x$ . What can you conclude? 

64. Weierstrass's nowhere differentiable continuous function The sum of the first eight terms of the Weierstrass function $f(x) = \sum_{n=0}^{\infty} (2/3)^n \cos(9^n \pi x)$ is 

$$
\begin{array}{l} g (x) = \cos (\pi x) + (2 / 3) ^ {1} \cos (9 \pi x) + (2 / 3) ^ {2} \cos (9 ^ {2} \pi x) \\ \qquad + (2 / 3) ^ {3} \cos (9 ^ {3} \pi x) + \dots + (2 / 3) ^ {7} \cos (9 ^ {7} \pi x). \end{array}
$$

Graph this sum. Zoom in several times. How wiggly and bumpy is this graph? Specify a viewing window in which the displayed portion of the graph is smooth. 

## COMPUTER EXPLORATIONS

Use a CAS to perform the following steps for the functions in Exercises 65–70. 

a. Plot $y = f(x)$ to see that function's global behavior. 

b. Define the difference quotient q at a general point x, with general step size h. 

c. Take the limit as $h \to 0$ . What formula does this give? 

d. Substitute the value $x = x_{0}$ and plot the function $y = f(x)$ together with its tangent line at that point. 

e. Substitute various values for $x$ larger and smaller than $x_0$ into the formula obtained in part (c). Do the numbers make sense with your picture? 

f. Graph the formula obtained in part (c). What does it mean when its values are negative? Zero? Positive? Does this make sense with your plot from part (a)? Give reasons for your answer. 

65. $f(x) = x^{3} + x^{2} - x, x_{0} = 1$ 

$$
\mathbf {6 6 .} f (x) = x ^ {1 / 3} + x ^ {2 / 3}, \quad x _ {0} = 1
$$

$$
f (x) = \frac {x - 1}{3 x ^ {2} + 1}, \quad x _ {0} = - 1
$$

$$
\textbf {6 7 .} f (x) = \frac {4 x}{x ^ {2} + 1}, x _ {0} = 2
$$

$$
\text { 69.   } f (x) = \sin 2 x, \quad x _ {0} = \pi / 2
$$

$$
f (x) = x ^ {2} \cos x, \quad x _ {0} = \pi / 4
$$

## 3.3 Differentiation Rules

This section introduces several rules that allow us to differentiate constant functions, power functions, polynomials, exponential functions, rational functions, and certain combinations of them, simply and directly, without having to take limits each time. 

![[6c9ae8d03fefe1ed7d9e51a9171d1478b332233a2e78853f45a38bc11122f366.jpg|image]]


A basic rule of differentiation is that the derivative of every constant function is zero. 

## Powers, Multiples, Sums, and Differences


FIGURE 3.10 The rule $(d/dx)(c) = 0$ is another way to say that the values of constant functions never change and that the slope of a horizontal line is zero at every point.


Derivative of a Constant Function 

If $f$ has the constant value $f(x) = c$ , then 

$$
{\frac {d f}{d x}} = {\frac {d}{d x}} (c) = 0.
$$

To know more, visit the companion Website. 

Proof We apply the definition of the derivative to $f(x) = c$ , the function whose outputs have the constant value c (Figure 3.10). At every value of x, we find that 

$$
f ^ {\prime} (x) = \lim _ {h \rightarrow 0} \frac {f (x + h) - f (x)}{h} = \lim _ {h \rightarrow 0} \frac {c - c}{h} = \lim _ {h \rightarrow 0} 0 = 0.
$$

We now consider powers of $x$ . From Section 3.1, we know that 

$$
\frac {d}{d x} \left(\frac {1}{x}\right) = - \frac {1}{x ^ {2}}, \text { or } \frac {d}{d x} (x ^ {- 1}) = - x ^ {- 2}.
$$

From Example 2 of the last section we also know that 

$$
\frac {d}{d x} (\sqrt {x}) = \frac {1}{2 \sqrt {x}}, \text {   or   } \frac {d}{d x} (x ^ {1 / 2}) = \frac {1}{2} x ^ {- 1 / 2}.
$$

These two examples illustrate a general rule for differentiating a power $x^n$ . We first prove the rule when $n$ is a positive integer. 

Derivative of a Positive Integer Power 

If $n$ is a positive integer, then 

$$
{\frac {d}{d x}} x ^ {n} = n x ^ {n - 1}.
$$

## HISTORICAL BIOGRAPHY

Courant obtained a PhD from Göttingen in 1910. He founded Göttingen's Mathematics Institute and was its director from 1920 until 1933. His research work focused on mathematical physics. 

Richard Courant (1888–1972) 

Proof of the Positive Integer Power Rule The formula 

$$
z ^ {n} - x ^ {n} = (z - x) \left(z ^ {n - 1} + z ^ {n - 2} x + \dots + z x ^ {n - 2} + x ^ {n - 1}\right)
$$

can be verified by multiplying out the right-hand side. Then, from the alternative formula for the definition of the derivative, 

$$
\begin{array}{l} f ^ {\prime} (x) = \lim _ {z \to x} \frac {f (z) - f (x)}{z - x} = \lim _ {z \to x} \frac {z ^ {n} - x ^ {n}}{z - x} \\ = \lim _ {z \to x} (z ^ {n - 1} + z ^ {n - 2} x + \dots + z x ^ {n - 2} + x ^ {n - 1}) \quad n \text { terms } \\ = n x ^ {n - 1}. \end{array}
$$

The Power Rule is actually valid for all real numbers n, not just for positive integers. We have seen examples for a negative integer and fractional power, but n could be an irrational number as well. Here we state the general version of the rule, but postpone its proof until Section 3.8. 

Power Rule (General Version) 

If $n$ is any real number, then 

$$
{\frac {d}{d x}} x ^ {n} = n x ^ {n - 1},
$$

for all $x$ where the powers $x^n$ and $x^{n-1}$ are defined. 

## **EXAMPLE 1** Differentiate the following powers of x.

(a) $x^3$ (b) $x^{2 / 3}$ (c) $x^{\sqrt{2}}$ (d) $\frac{1}{x^4}$ (e) $x^{-4 / 3}$ (f) $\sqrt{x^{2 + \pi}}$ 

Applying the Power Rule 

**Solution** 

Subtract 1 from the exponent and multiply the result by the original exponent. 

(a) $\frac{d}{dx} (x^3) = 3x^{3 - 1} = 3x^2$ 

$$
\textbf {(b)} \frac {d}{d x} (x ^ {2 / 3}) = \frac {2}{3} x ^ {(2 / 3) - 1} = \frac {2}{3} x ^ {- 1 / 3}
$$

$$
\text { (c) } \frac {d}{d x} \left(x ^ {\sqrt {2}}\right) = \sqrt {2} x ^ {\sqrt {2} - 1}
$$

$$
\text { (d) } \frac {d}{d x} \left(\frac {1}{x ^ {4}}\right) = \frac {d}{d x} (x ^ {- 4}) = - 4 x ^ {- 4 - 1} = - 4 x ^ {- 5} = - \frac {4}{x ^ {5}}
$$

$$
\text { (e) } \frac {d}{d x} (x ^ {- 4 / 3}) = - \frac {4}{3} x ^ {- (4 / 3) - 1} = - \frac {4}{3} x ^ {- 7 / 3}
$$

$$
\text { (f) } \frac {d}{d x} \left(\sqrt {x ^ {2 + \pi}}\right) = \frac {d}{d x} \left(x ^ {1 + (\pi / 2)}\right) = \left(1 + \frac {\pi}{2}\right) x ^ {1 + (\pi / 2) - 1} = \frac {1}{2} (2 + \pi) \sqrt {x ^ {\pi}}
$$

The next rule says that when a differentiable function is multiplied by a constant, its derivative is multiplied by the same constant. 

Derivative Constant Multiple Rule 

If u is a differentiable function of x, and c is a constant, then 

$$
{\frac {d}{d x}} (c u) = c {\frac {d u}{d x}}.
$$

Proof 

$$
\begin{array}{l l} \frac {d}{d x} c u = \lim _ {h \to 0} \frac {c u (x + h) - c u (x)}{h} & \text { Derivative   definition } \\ & \text { with } f (x) = c u (x) \\ = c \lim _ {h \to 0} \frac {u (x + h) - u (x)}{h} & \text { Constant   Multiple   Rule   for   Limits } \\ = c \frac {d u}{d x} & u \text { is   differentiable. } \end{array}
$$

![[edc70cddbbbeccce1cbebf5cb278df96a095fff863d6df262f4f716a266af0c5.jpg|image]]



FIGURE 3.11 The graphs of $y = x^2$ and $y = 3x^2$ . Tripling the $y$ -coordinate triples the slope (Example 2).


## Denoting Functions by $u$ and $\upsilon$

The functions we are working with when we need a differentiation formula are likely to be denoted by letters like f and g. We do not want to use these same letters when stating general differentiation rules, so instead we use letters like u and v that are not likely to be already in use. 

## **EXAMPLE 2**

(a) The derivative formula 

$$
\frac {d}{d x} \left(3 x ^ {2}\right) = 3 \cdot 2 x = 6 x
$$

says that if we rescale the graph of $y = x^{2}$ by multiplying each y-coordinate by 3, then we multiply the slope at each point by 3 (Figure 3.11). 

## (b) Negative of a function

The derivative of the negative of a differentiable function $u$ is the negative of the function's derivative. The Constant Multiple Rule with $c = -1$ gives 

$$
{\frac {d}{d x}} (- u) = {\frac {d}{d x}} (- 1 \cdot u) = - 1 \cdot {\frac {d}{d x}} (u) = - {\frac {d u}{d x}}.
$$

The next rule says that the derivative of the sum of two differentiable functions is the sum of their derivatives. 

## Derivative Sum Rule

If u and v are differentiable functions of x, then their sum $u + v$ is differentiable at every point where u and v are both differentiable. At such points, 

$$
\frac {d}{d x} (u + v) = \frac {d u}{d x} + \frac {d v}{d x}.
$$

Proof We apply the definition of the derivative to $f(x) = u(x) + v(x)$ : 

$$
\begin{array}{l} \frac {d}{d x} [ u (x) + v (x) ] = \lim _ {h \to 0} \frac {[ u (x + h) + v (x + h) ] - [ u (x) + v (x) ]}{h} \\ \qquad = \lim _ {h \to 0} \left[ \frac {u (x + h) - u (x)}{h} + \frac {v (x + h) - v (x)}{h} \right] \\ \qquad = \lim _ {h \to 0} \frac {u (x + h) - u (x)}{h} + \lim _ {h \to 0} \frac {v (x + h) - v (x)}{h} = \frac {d u}{d x} + \frac {d v}{d x}. \end{array}
$$

Combining the Sum Rule with the Constant Multiple Rule gives the Difference Rule, which says that the derivative of a difference of differentiable functions is the difference of their derivatives: 

$$
\frac {d}{d x} (u - v) = \frac {d}{d x} [ u + (- 1) v ] = \frac {d u}{d x} + (- 1) \frac {d v}{d x} = \frac {d u}{d x} - \frac {d v}{d x}.
$$

The Sum Rule also extends to finite sums of more than two functions. If $u_{1}, u_{2}, \ldots, u_{n}$ are differentiable at x, then so is $u_{1} + u_{2} + \cdots + u_{n}$ , and 

$$
\frac {d}{d x} \left(u _ {1} + u _ {2} + \dots + u _ {n}\right) = \frac {d u _ {1}}{d x} + \frac {d u _ {2}}{d x} + \dots + \frac {d u _ {n}}{d x}.
$$

A proof by mathematical induction for any finite number of terms is given in Appendix A.3. 

![[24d081503e17762d3992bbf2ddc88f0d31ab68a185a7f848dc5942fa5017698b.jpg|image]]



FIGURE 3.12 The curve in Example 4 and its horizontal tangent lines.


**EXAMPLE 3** Find the derivative of the polynomial $y = x^3 + \frac{4}{3} x^2 - 5x + 1$ . 

**Solution** 

$$
\begin{array}{l} \frac {d y}{d x} = \frac {d}{d x} x ^ {3} + \frac {d}{d x} \left(\frac {4}{3} x ^ {2}\right) - \frac {d}{d x} (5 x) + \frac {d}{d x} (1) \\ = 3 x ^ {2} + \frac {4}{3} \cdot 2 x - 5 + 0 = 3 x ^ {2} + \frac {8}{3} x - 5 \end{array} \quad \text { Sum   and   Difference   Rules }
$$

We can differentiate any polynomial term by term, the way we differentiated the polynomial in Example 3. All polynomials are differentiable at all values of x. 

**EXAMPLE 4** Does the curve $y = x^{4} - 2x^{2} + 2$ have any horizontal tangent lines? If so, where? 

**Solution** The horizontal tangent lines, if any, occur where the slope dy/dx is zero. We have 

$$
\frac {d y}{d x} = \frac {d}{d x} (x ^ {4} - 2 x ^ {2} + 2) = 4 x ^ {3} - 4 x.
$$

Now solve the equation $\frac{dy}{dx} = 0$ for x: 

$$
\begin{array}{c} 4 x ^ {3} - 4 x = 0 \\ 4 x (x ^ {2} - 1) = 0 \\ x = 0, 1, - 1. \end{array}
$$

The curve $y = x^{4} - 2x^{2} + 2$ has horizontal tangent lines at x = 0, 1, and -1. The corresponding points on the curve are $(0, 2)$ , $(1, 1)$ , and $(-1, 1)$ . See Figure 3.12. 

## Derivatives of Exponential Functions

We briefly reviewed exponential functions in Section 1.4. When we apply the definition of the derivative to $f(x) = a^{x}$ , we get 

$$
\begin{array}{l l} \frac {d}{d x} (a ^ {x}) = \lim _ {h \to 0} \frac {a ^ {x + h} - a ^ {x}}{h} & \text { Derivative   definition } \\ = \lim _ {h \to 0} \frac {a ^ {x} \cdot a ^ {h} - a ^ {x}}{h} & a ^ {x + h} = a ^ {x} \cdot a ^ {h} \\ = \lim _ {h \to 0} a ^ {x} \cdot \frac {a ^ {h} - 1}{h} & \text { Factoring   out } a ^ {x} \\ = a ^ {x} \cdot \lim _ {h \to 0} \frac {a ^ {h} - 1}{h} & a ^ {x} \text { is   constant   as } h \to 0. \\ = \underbrace {\left(\lim _ {h \to 0} \frac {a ^ {h} - 1}{h}\right) \cdot a ^ {x}} _ {\text { a   fixed   number } L}. \end{array}\tag{1}
$$

Thus we see that the derivative of $a^x$ is a constant multiple $L$ of $a^x$ . The constant $L$ is a limit we have not encountered before. Note, however, that it equals the derivative of $f(x) = a^x$ at $x = 0$ : 

$$
f ^ {\prime} (0) = \lim _ {h \rightarrow 0} \frac {a ^ {h} - a ^ {0}}{h} = \lim _ {h \rightarrow 0} \frac {a ^ {h} - 1}{h} = L.
$$

![[fb2b7fc04cf021dcbfc59d7654b2165d0ab27be7d363d19d47374a4f97a2c6aa.jpg|image]]



FIGURE 3.13 The position of the curve $y = (a^{h} - 1)/h, a > 0$ , varies continuously with a. The limit L of y as $h \to 0$ changes with different values of a. The number for which L = 1 as $h \to 0$ is the number e between a = 2 and a = 3.


![[faabffc60a5f279ec7d15a447ad3ed76adb231831f29487494c0f005322476a3.jpg|image]]



FIGURE 3.14 The line through the origin is tangent to the graph of $y = e^{x}$ when $a = 1$ (Example 5).


The limit L is therefore the slope of the graph of $f(x) = a^{x}$ where it crosses the y-axis. In Chapter 7, where we carefully develop the logarithmic and exponential functions, we prove that the limit L exists and has the value $\ln a$ . For now we investigate values of L by graphing the function $y = (a^{h} - 1)/h$ and studying its behavior as h approaches 0. 

Figure 3.13 shows the graphs of $y = (a^{h} - 1)/h$ for four different values of a. The limit L is approximately 0.69 if a = 2, about 0.92 if a = 2.5, and about 1.1 if a = 3. It appears that the value of L is 1 at some number a chosen between 2.5 and 3. That number is given by $a = e \approx 2.718281828$ . With this choice of base we obtain the natural exponential function $f(x) = e^{x}$ as in Section 1.4, and see that it satisfies the property 

$$
f ^ {\prime} (0) = \lim _ {h \rightarrow 0} \frac {e ^ {h} - 1}{h} = 1\tag{2}
$$

because it is the exponential function whose graph has slope 1 when it crosses the y-axis. That the limit is 1 implies an important relationship between the natural exponential function $e^{x}$ and its derivative: 

$$
\begin{array}{r l} \frac {d}{d x} (e ^ {x}) & = \lim _ {h \to 0} \left(\frac {e ^ {h} - 1}{h}\right) \cdot e ^ {x} \\ & = 1 \cdot e ^ {x} = e ^ {x}. \end{array} \quad \text { Eq.   (1)   with   } a = e \tag {Eq.(2)}
$$

Therefore the natural exponential function is its own derivative. 

Derivative of the Natural Exponential Function 

$$
\frac {d}{d x} (e ^ {x}) = e ^ {x}
$$

**EXAMPLE 5** Find an equation for a line that is tangent to the graph of $y = e^{x}$ and goes through the origin. 

**Solution** Since the line passes through the origin, its equation is of the form y = mx, where m is the slope. If it is tangent to the graph at the point $(a, e^{a})$ , the slope is $m = (e^{a} - 0)/(a - 0)$ . The slope of the natural exponential at x = a is $e^{a}$ . Because these slopes are the same, we then have that $e^{a} = e^{a}/a$ . It follows that a = 1 and m = e, so the equation of the tangent line is y = ex. See Figure 3.14. 

We might ask if there are functions other than the natural exponential function that are their own derivatives. The answer is that the only functions that satisfy the property that $f'(x) = f(x)$ are functions that are constant multiples of the natural exponential function, $f(x) = c \cdot e^{x}$ , c any constant. We prove this fact in Section 7.2. Note from the Constant Multiple Rule that indeed 

$$
\frac {d}{d x} (c \cdot e ^ {x}) = c \cdot \frac {d}{d x} (e ^ {x}) = c \cdot e ^ {x}.
$$

## Products and Quotients

While the derivative of the sum of two functions is the sum of their derivatives, the derivative of the product of two functions is not the product of their derivatives. For instance, 

$$
\frac {d}{d x} (x \cdot x) = \frac {d}{d x} (x ^ {2}) = 2 x, \quad \text { while } \quad \frac {d}{d x} (x) \cdot \frac {d}{d x} (x) = 1 \cdot 1 = 1.
$$

The derivative of a product of two functions is the sum of two products, as we now explain. 

## Derivative Product Rule

If u and v are differentiable at x, then so is their product uv, and 

$$
\frac {d}{d x} (u v) = u \frac {d v}{d x} + \frac {d u}{d x} v.
$$

The derivative of the product uv is u times the derivative of v plus the derivative of u times v. In prime notation, $(uv)' = uv' + u'v$ . In function notation, 

$$
\frac {d}{d x} [ f (x) g (x) ] = f (x) g ^ {\prime} (x) + f ^ {\prime} (x) g (x), \text {or} (f g) ^ {\prime} = f g ^ {\prime} + f ^ {\prime} g.\tag{3}
$$

**EXAMPLE 6** Find the derivative of (a) $y = \frac{1}{x}(x^{2} + e^{x})$ , (b) $y = e^{2x}$ . 

## **Solution**

(a) We apply the Product Rule with $u = 1 / x$ and $v = x^2 + e^x$ : 

## Picturing the Product Rule

Suppose $u(x)$ and $v(x)$ are positive and increase when x increases, and h > 0. 

Division by $h$ gives 

![[4782799da2a0c21981a60ece4dc47b1cd5279f10e158148d9dd8ce3dc0288ca4.jpg|image]]


Then the change in the product uv is the difference in areas of the larger and smaller “boxes,” which is the sum of the areas of the upper and right-hand reddish-shaded rectangles. That is, 

$$
\frac {\Delta (u v)}{h} = u (x + h) \frac {\Delta v}{h} + \frac {\Delta u}{h} v (x).
$$

$$
\begin{array}{c} \Delta (u v) = u (x + h) v (x + h) - u (x) v (x) \\ = u (x + h) \Delta v + \Delta u v (x). \end{array}
$$

The limit as $h \rightarrow 0^{+}$ yields the Product Rule. 

$$
\begin{array}{l l} \frac {d}{d x} \left[ \frac {1}{x} (x ^ {2} + e ^ {x}) \right] = \frac {1}{x} (2 x + e ^ {x}) + \left(- \frac {1}{x ^ {2}}\right) (x ^ {2} + e ^ {x}) & \frac {d}{d x} (u v) = u \frac {d v}{d x} + \frac {d u}{d x} v \text {   and   } \\ = 2 + \frac {e ^ {x}}{x} - 1 - \frac {e ^ {x}}{x ^ {2}} & \frac {d}{d x} \left(\frac {1}{x}\right) = - \frac {1}{x ^ {2}} \\ = 1 + (x - 1) \frac {e ^ {x}}{x ^ {2}}. \end{array}
$$

$$
\text {(b)} \frac {d}{d x} (e ^ {2 x}) = \frac {d}{d x} (e ^ {x} \cdot e ^ {x}) = e ^ {x} \cdot \frac {d}{d x} (e ^ {x}) + \frac {d}{d x} (e ^ {x}) \cdot e ^ {x} = 2 e ^ {x} \cdot e ^ {x} = 2 e ^ {2 x}
$$

Proof of the Derivative Product Rule 

$$
\frac {d}{d x} (u v) = \lim _ {h \rightarrow 0} \frac {u (x + h) v (x + h) - u (x) v (x)}{h}
$$

To change this fraction into an equivalent one that contains difference quotients for the derivatives of u and v, we subtract and add $u(x + h)v(x)$ in the numerator: 

$$
\begin{array}{l} \frac {d}{d x} (u v) = \lim _ {h \to 0} \frac {u (x + h) v (x + h) - u (x + h) v (x) + u (x + h) v (x) - u (x) v (x)}{h} \\ \qquad = \lim _ {h \to 0} \Big [ u (x + h) \frac {v (x + h) - v (x)}{h} + \frac {u (x + h) - u (x)}{h} v (x) \Big ] \\ \qquad = \lim _ {h \to 0} u (x + h) \cdot \lim _ {h \to 0} \frac {v (x + h) - v (x)}{h} + \lim _ {h \to 0} \frac {u (x + h) - u (x)}{h} \cdot v (x). \end{array}
$$

As h approaches zero, $u(x + h)$ approaches $u(x)$ because u, being differentiable at x, is continuous at x. The two fractions approach the values of dv/dx at x and du/dx at x. Therefore, 

$$
{\frac {d}{d x}} (u v) = u {\frac {d v}{d x}} + {\frac {d u}{d x}} v.
$$

The derivative of the quotient of two functions is given by the Quotient Rule. 

Derivative Quotient Rule 

If u and v are differentiable at x and if $v(x) \neq 0$ , then the quotient u/v is differentiable at x, and 

$$
{\frac {d}{d x}} {\Big (} {\frac {u}{v}} {\Big)} = {\frac {v {\frac {d u}{d x}} - u {\frac {d v}{d x}}}{v ^ {2}}}.
$$

In function notation, 

$$
\frac {d}{d x} \left[ \frac {f (x)}{g (x)} \right] = \frac {g (x) f ^ {\prime} (x) - f (x) g ^ {\prime} (x)}{g ^ {2} (x)}.
$$

**EXAMPLE 7** Find the derivative of (a) $y = \frac{t^2 - 1}{t^3 + 1}$ , (b) $y = e^{-x}$ . 

**Solution** 

(a) We apply the Quotient Rule with $u = t^2 - 1$ and $v = t^3 + 1$ : 

$$
\begin{array}{l l} \frac {d y}{d t} = \frac {(t ^ {3} + 1) \cdot 2 t - (t ^ {2} - 1) \cdot 3 t ^ {2}}{(t ^ {3} + 1) ^ {2}} & \frac {d}{d t} \left(\frac {u}{v}\right) = \frac {v (d u / d t) - u (d v / d t)}{v ^ {2}} \\ = \frac {2 t ^ {4} + 2 t - 3 t ^ {4} + 3 t ^ {2}}{(t ^ {3} + 1) ^ {2}} \\ = \frac {- t ^ {4} + 3 t ^ {2} + 2 t}{(t ^ {3} + 1) ^ {2}}. \end{array}
$$

$$
\text { (b) } \frac {d}{d x} (e ^ {- x}) = \frac {d}{d x} \left(\frac {1}{e ^ {x}}\right) = \frac {e ^ {x} \cdot 0 - 1 \cdot e ^ {x}}{(e ^ {x}) ^ {2}} = \frac {- 1}{e ^ {x}} = - e ^ {- x}
$$

Proof of the Derivative Quotient Rule 

$$
\begin{array}{r l}\frac {d}{d x} \left(\frac {u}{v}\right)&= \lim _ {h \rightarrow 0} \frac {\frac {u (x + h)}{v (x + h)} - \frac {u (x)}{v (x)}}{h}\\&= \lim _ {h \rightarrow 0} \frac {v (x) u (x + h) - u (x) v (x + h)}{h v (x + h) v (x)}\end{array}
$$

To change the last fraction into an equivalent one that contains the difference quotients for the derivatives of $u$ and $v$ , we subtract and add $v(x)u(x)$ in the numerator. We then get 

$$
\begin{array}{l} \frac {d}{d x} \Big (\frac {u}{v} \Big) = \lim _ {h \to 0} \frac {v (x) u (x + h) - v (x) u (x) + v (x) u (x) - u (x) v (x + h)}{h v (x + h) v (x)} \\ = \lim _ {h \to 0} \frac {v (x) \frac {u (x + h) - u (x)}{h} - u (x) \frac {v (x + h) - v (x)}{h}}{v (x + h) v (x)}. \end{array}
$$

Taking the limits in the numerator and denominator now gives the Quotient Rule. Exercise 76 outlines another proof. 

The choice of which rules to use in solving a differentiation problem can make a difference in how much work you have to do. Here is an example. 

## **EXAMPLE 8** Find the derivative of

## HISTORICAL BIOGRAPHY

Maria Gaetana Agnesi (1718–1799) 

Agnesi was a well-published scientist by age 20 and an honorary faculty member of the University of Bologna by age 30. Today, Agnesi is remembered chiefly for a bell-shaped curve called the “Witch of Agnesi.” 

To know more, visit the companion Website. 

How to Read the Symbols for Derivatives 

y' "y prime" 

y" "y double prime" 

$\frac{d^2y}{dx^2}$ “ $d$ squared $y$ by $dx$ squared” 

y''' “y triple prime” 

$y^{(n)}$ “y super n” 

$\frac{d^n y}{dx^n}$ “ $d$ to the $n$ of $y$ by $dx$ to the $n$ ” 

$D^{n}$ “ $d$ to the $n$ ” 

$$
y = \frac {(x - 1) (x ^ {2} - 2 x)}{x ^ {4}}.
$$

**Solution** Using the Quotient Rule here will result in a complicated expression with many terms. Instead, use some algebra to simplify the expression. First expand the numerator and divide by $x^{4}$ : 

$$
y = \frac {(x - 1) (x ^ {2} - 2 x)}{x ^ {4}} = \frac {x ^ {3} - 3 x ^ {2} + 2 x}{x ^ {4}} = x ^ {- 1} - 3 x ^ {- 2} + 2 x ^ {- 3}.
$$

Then use the Sum, Constant Multiple, and Power Rules: 

$$
\begin{array}{r l} \frac {d y}{d x} & = - x ^ {- 2} - 3 (- 2) x ^ {- 3} + 2 (- 3) x ^ {- 4} \\ & = - \frac {1}{x ^ {2}} + \frac {6}{x ^ {3}} - \frac {6}{x ^ {4}}. \end{array}
$$

## Second- and Higher-Order Derivatives

If $y = f(x)$ is a differentiable function, then its derivative $f'(x)$ is also a function. If $f'$ is also differentiable, then we can differentiate $f'$ to get a new function of x denoted by $f''$ . So $f'' = (f')'$ . The function $f''$ is called the second derivative of f because it is the derivative of the first derivative. It is written in several ways: 

$$
f ^ {\prime \prime} (x) = \frac {d ^ {2} y}{d x ^ {2}} = \frac {d}{d x} \left(\frac {d y}{d x}\right) = \frac {d y ^ {\prime}}{d x} = y ^ {\prime \prime} = D ^ {2} (f) (x) = D _ {x} ^ {2} f (x).
$$

The symbol $D^{2}$ means that the operation of differentiation is performed twice. 

If $y = x^6$ , then $y' = 6x^5$ and we have 

$$
y ^ {\prime \prime} = \frac {d y ^ {\prime}}{d x} = \frac {d}{d x} (6 x ^ {5}) = 3 0 x ^ {4}.
$$

Thus $D^{2}(x^{6}) = 30x^{4}$ . 

If $y''$ is differentiable, its derivative, $y''' = dy''/dx = d^3y/dx^3$ , is the third derivative of y with respect to x. The names continue as you imagine, with 

$$
y ^ {(n)} = \frac {d}{d x} y ^ {(n - 1)} = \frac {d ^ {n} y}{d x ^ {n}} = D ^ {n} y
$$

denoting the nth derivative of y with respect to x for any positive integer n. 

We can interpret the second derivative as the rate of change of the slope of the tangent line to the graph of $y = f(x)$ at each point. You will see in the next chapter that the second derivative reveals whether the graph bends upward or downward from the tangent line as we move off the point of tangency. In the next section, we interpret both the second and third derivatives in terms of motion along a straight line. 

**EXAMPLE 9** The first four derivatives of $y = x^{3} - 3x^{2} + 2$ are 

First derivative: 

$$
y ^ {\prime} = 3 x ^ {2} - 6 x
$$

Second derivative: 

$$
y ^ {\prime \prime} = 6 x - 6
$$

Third derivative: 

$$
y ^ {\prime \prime \prime} = 6
$$

Fourth derivative: 

$$
y ^ {(4)} = 0.
$$

All polynomial functions have derivatives of all orders. In this example, the fifth and later derivatives are all zero. 

## EXERCISES

## 3.3

## Derivative Calculations

In Exercises 1–12, find the first and second derivatives. 

1. $y = -x^{2} + 3$ 

2. $y = x^{2} + x + 8$ 

3. $s = 5t^{3} - 3t^{5}$ 

4. $w = 3z^{7} - 7z^{3} + 21z^{2}$ 

5. $y = \frac{4x^3}{3} - x + 2e^x$ 

6. $y = \frac{x^3}{3} +\frac{x^2}{2} +e^{-x}$ 

7. $w = 3z^{-2} - \frac{1}{z}$ 

8. $s = -2t^{-1} + \frac{4}{t^2}$ 

9. $y = 6x^{2} - 10x - 5x^{-2}$ 

10. $y = 4 - 2x - x^{-3}$ 

11. $r = \frac{1}{3s^2} -\frac{5}{2s}$ 

12. $r = \frac{12}{\theta} -\frac{4}{\theta^3} +\frac{1}{\theta^4}$ 

In Exercises 13–16, find $y'$ (a) by applying the Product Rule and (b) by multiplying the factors to produce a sum of simpler terms to differentiate. 

13. $y = (3 - x^2)(x^3 - x + 1)$ 14. $y = (2x + 3)(5x^2 - 4x)$ 

15. $y = (x^2 + 1) \left( x + 5 + \frac{1}{x} \right)$ 16. $y = (1 + x^2)(x^{3/4} - x^{-3})$ 

Find the derivatives of the functions in Exercises 17–40. 

17. $y = \frac{2x + 5}{3x - 2}$ 

18. $z = \frac{4 - 3x}{3x^2 + x}$ 

19. $g(x) = \frac{x^2 - 4}{x + 0.5}$ 

20. $f(t) = \frac{t^2 - 1}{t^2 + t - 2}$ 

21. $v = (1 - t)(1 + t^2)^{-1}$ 

22. $w = (2x - 7)^{-1}(x + 5)$ 

23. $f(s) = \frac{\sqrt{s} - 1}{\sqrt{s} + 1}$ 

24. $u = \frac{5x + 1}{2\sqrt{x}}$ 

25. $v = \frac{1 + x - 4\sqrt{x}}{x}$ 

26. $r = 2\left(\frac{1}{\sqrt{\theta}} + \sqrt{\theta}\right)$ 

27. $y = \frac{1}{(x^2 - 1)(x^2 + x + 1)}$ 

28. $y = \frac{(x + 1)(x + 2)}{(x - 1)(x - 2)}$ 

29. $y = 2e^{-x} + e^{3x}$ 

30. $y = \frac{x^2 + 3e^x}{2e^x - x}$ 

31. $y = x^{3}e^{x}$ 

32. $w = re^{-r}$ 

33. $y = x^{9 / 4} + e^{-2x}$ 

34. $y = x^{-3 / 5} + \pi^{3 / 2}$ 

35. $s = 2t^{3 / 2} + 3e^{2}$ 

36. $w = \frac{1}{z^{1.4}} +\frac{\pi}{\sqrt{z}}$ 

37. $y = \sqrt[7]{x^2} - x^e$ 

38. $y = \sqrt[3]{x^{9.6}} + 2e^{1.3}$ 

39. $r = \frac{e^s}{s}$ 

40. $r = e^{\theta}\left(\frac{1}{\theta^{2}} + \theta^{-\pi /2}\right)$ 

Find the derivatives of all orders of the functions in Exercises 41-44. 

41. $y = \frac{x^4}{2} -\frac{3}{2} x^2 -x$ 42. $y = \frac{x^5}{120}$ 

43. $y = (x - 1)(x + 2)(x + 3)$ 44. $y = (4x^{2} + 3)(2 - x)x$ 

Find the first and second derivatives of the functions in Exercises 45–52. 

45. $y = \frac{x^{3} + 7}{x}$ 

46. $s = \frac{t^2 + 5t - 1}{t^2}$ 

47. $r = \frac{(\theta - 1)(\theta^2 + \theta + 1)}{\theta^3}$ 48. $u = \frac{(x^2 + x)(x^2 - x + 1)}{x^4}$ 

49. $w = \left(\frac{1 + 3z}{3z}\right)(3 - z)$ 

50. $p = \frac{q^2 + 3}{(q - 1)^3 + (q + 1)^3}$ 

51. $w = 3z^{2}e^{2z}$ 

52. $w = e^{z}(z - 1)(z^{2} + 1)$ 

53. Suppose $u$ and $v$ are functions of $x$ that are differentiable at $x = 0$ and that 

$$
u (0) = 5, \quad u ^ {\prime} (0) = - 3, \quad v (0) = - 1, \quad v ^ {\prime} (0) = 2.
$$

Find the values of the following derivatives at $x = 0$ . 

a. $\frac{d}{dx} (uv)$ b. $\frac{d}{dx}\Bigl (\frac{u}{v}\Bigr)$ c. $\frac{d}{dx}\Bigl (\frac{v}{u}\Bigr)$ d. $\frac{d}{dx}(7v - 2u)$ 

54. Suppose u and v are differentiable functions of x and that 

$u(1) = 2, u'(1) = 0, v(1) = 5, v'(1) = -1.$ 

Find the values of the following derivatives at x = 1. 

a. $\frac{d}{dx} (uv)$ b. $\frac{d}{dx}\Big(\frac{u}{v}\Big)$ c. $\frac{d}{dx}\Big(\frac{v}{u}\Big)$ d. $\frac{d}{dx}(7v - 2u)$ 

Slopes and Tangent Lines 

55. a. Normal line to a curve Find an equation for the line perpendicular to the tangent line to the curve $y = x^3 - 4x + 1$ at the point (2,1). 

b. Smallest slope What is the smallest slope on the curve? At what point on the curve does the curve have this slope? 

c. Tangent lines having specified slope Find equations for the tangent lines to the curve at the points where the slope of the curve is 8. 

56. a. Horizontal tangent lines Find equations for the horizontal tangent lines to the curve $y = x^3 - 3x - 2$ . Also find equations for the lines that are perpendicular to these tangent lines at the points of tangency. 

b. Smallest slope What is the smallest slope on the curve? At what point on the curve does the curve have this slope? Find an equation for the line that is perpendicular to the curve's tangent line at this point. 

57. Find the tangent lines to Newton's serpentine (graphed here) at the origin and the point $(1,2)$ . 

![[0d75eb6326293714d517dea7c5070b45c315305673f46f9dc25a52f89eb53420.jpg|image]]


58. Find the tangent line to the Witch of Agnesi (graphed here) at the point $(2,1)$ . 

![[27a1f3a94e0c1cb60b60a77a455865f5467d488a4c48edb072ef0719ee35f898.jpg|image]]


59. Quadratic tangent to identity function The curve $y = ax^{2} + bx + c$ passes through the point (1, 2) and is tangent to the line y = x at the origin. Find a, b, and c. 

60. Quadratics having a common tangent line The curves $y = x^2 + ax + b$ and $y = cx - x^2$ have a common tangent line at the point (1, 0). Find $a, b,$ and $c$ . 

61. Find all points $(x, y)$ on the graph of $f(x) = 3x^2 - 4x$ with tangent lines parallel to the line $y = 8x + 5$ . 

62. Find all points $(x,y)$ on the graph of $g(x)=\frac{1}{3}x^{3}-\frac{3}{2}x^{2}+1$ with tangent lines parallel to the line 8x-2y=1. 

63. Find all points $(x, y)$ on the graph of $y = x/(x - 2)$ with tangent lines perpendicular to the line $y = 2x + 3$ . 

64. Find all points $(x, y)$ on the graph of $f(x) = x^{2}$ with tangent lines passing through the point $(3, 8)$ . 

![[3acaccfb0c446a0441f4ac1744ed7a22bf7d1de2d0a127683970336f39626b68.jpg|image]]


65. Assume that functions f and g are differentiable with $f(1) = 2$ , $f'(1) = -3$ , $g(1) = 4$ , and $g'(1) = -2$ . Find the equation of the line tangent to the graph of $F(x) = f(x)g(x)$ at x = 1. 

66. Assume that functions $f$ and $g$ are differentiable with $f(2) = 3$ , $f'(2) = -1$ , $g(2) = -4$ , and $g'(2) = 1$ . Find an equation of the line perpendicular to the line tangent to the graph of $F(x) = \frac{f(x) + 3}{x - g(x)}$ at $x = 2$ . 

67. a. Find an equation for the line that is tangent to the curve $y = x^3 - x$ at the point $(-1, 0)$ . 

T b. Graph the curve and tangent line together. The tangent line intersects the curve at another point. Use Zoom and Trace to estimate the point's coordinates. 

T c. Confirm your estimates of the coordinates of the second intersection point by solving the equations for the curve and tangent line simultaneously. 

68. a. Find an equation for the line that is tangent to the curve $y = x^3 - 6x^2 + 5x$ at the origin. 

T b. Graph the curve and tangent line together. The tangent line intersects the curve at another point. Use Zoom and Trace to estimate the point's coordinates. 

T c. Confirm your estimates of the coordinates of the second intersection point by solving the equations for the curve and tangent line simultaneously. 

## Theory and Examples

For Exercises 69 and 70, evaluate each limit by first converting each to a derivative at a particular x-value. 

69. $\lim_{x\to 1}\frac{x^{50} - 1}{x - 1}$ 70. $\lim_{x\to -1}\frac{x^{2 / 9} - 1}{x + 1}$ 

71. Find the value of a that makes the following function differentiable for all x-values. 

$$
g (x) = \left\{ \begin{array}{l l} a x, & \text { if } x <   0 \\ x ^ {2} - 3 x, & \text { if } x \geq 0 \end{array} \right.
$$

72. Find the values of a and b that make the following function differentiable for all x-values. 

$$
f (x) = \left\{ \begin{array}{l l} a x + b, & x > - 1 \\ b x ^ {2} - 3, & x \leq - 1 \end{array} \right.
$$

73. The general polynomial of degree $n$ has the form 

$$
P (x) = a _ {n} x ^ {n} + a _ {n - 1} x ^ {n - 1} + \dots + a _ {2} x ^ {2} + a _ {1} x + a _ {0},
$$

where $a_{n} \neq 0$ . Find $P'(x)$ . 

74. The body's reaction to medicine The reaction of the body to a dose of medicine can sometimes be represented by an equation of the form 

$$
R = M ^ {2} \left(\frac {C}{2} - \frac {M}{3}\right),
$$

where C is a positive constant and M is the amount of medicine absorbed in the blood. If the reaction is a change in blood pressure, R is measured in millimeters of mercury. If the reaction is a change in temperature, R is measured in degrees, and so on. 

Find $dR / dM$ . This derivative, as a function of $M$ , is called the sensitivity of the body to the medicine. In Section 4.6, we will see how to find the amount of medicine to which the body is most sensitive. 

75. Suppose that the function v in the Derivative Product Rule has a constant value c. What does the Derivative Product Rule then say? What does this say about the Derivative Constant Multiple Rule? 

## 76. The Reciprocal Rule

a. The Reciprocal Rule says that at any point where the function $v(x)$ is differentiable and different from zero, 

$$
\frac {d}{d x} \left(\frac {1}{v}\right) = - \frac {1}{v ^ {2}} \frac {d v}{d x}.
$$

Show that the Reciprocal Rule is a special case of the Derivative Quotient Rule. 

b. Show that the Reciprocal Rule and the Derivative Product Rule together imply the Derivative Quotient Rule. 

77. Generalizing the Product Rule The Derivative Product Rule gives the formula 

$$
{\frac {d}{d x}} (u v) = u {\frac {d v}{d x}} + {\frac {d u}{d x}} v
$$

for the derivative of the product uv of two differentiable functions of x. 

a. What is the analogous formula for the derivative of the product uvw of three differentiable functions of x? 

b. What is the formula for the derivative of the product $u_{1}u_{2}u_{3}u_{4}$ of four differentiable functions of $x$ ? 

c. What is the formula for the derivative of a product $u_{1}u_{2}u_{3}\cdots u_{n}$ of a finite number n of differentiable functions of x? 

78. Power Rule for negative integers Use the Derivative Quotient Rule to prove the Power Rule for negative integers, that is, 

$$
\frac {d}{d x} (x ^ {- m}) = - m x ^ {- m - 1}
$$

where m is a positive integer. 

79. Cylinder pressure If gas in a cylinder is maintained at a constant temperature T, the pressure P is related to the volume V by a formula of the form 

$$
P = \frac {n R T}{V - n b} - \frac {a n ^ {2}}{V ^ {2}},
$$

in which a, b, n, and R are constants. Find dP/dV. (See accompanying figure.) 

![[70ce9a837e9e54f9d66422eebe8cf97f02339e844f7e802fd6b91b26312111d5.jpg|image]]


80. The best quantity to order One of the formulas for inventory management says that the average weekly cost of ordering, paying for, and holding merchandise is 

$$
A (q) = \frac {k m}{q} + c m + \frac {h q}{2},
$$

where q is the quantity you order when things run low (shoes, TVs, brooms, or whatever the item might be); k is the cost of placing an order (the same, no matter how often you order); c is the cost of one item (a constant); m is the number of items sold each week (a constant); and h is the weekly holding cost per item (a constant that takes into account things such as space, utilities, insurance, and security). Find dA/dq and $d^{2}A/dq^{2}$ . 

## 3.4 The Derivative as a Rate of Change

In this section we study applications where derivatives model the rates at which things change. It is natural to think of a quantity changing with respect to time, but other variables can be treated in the same way. For example, an economist may want to study how the cost of producing steel varies with the number of tons produced, or an engineer may want to know how the power output of a generator varies with its temperature. 

## Instantaneous Rates of Change

If we interpret the difference quotient $(f(x + h) - f(x))/h$ as the average rate of change in f over the interval from x to $x + h$ , we can interpret its limit as $h \to 0$ as the instantaneous rate at which f is changing at the point x. This gives an important interpretation of the derivative. 

> ***DEFINITION*** The instantaneous rate of change of f with respect to x at $x_{0}$ is the derivative 
>
> $$
> f ^ {\prime} (x _ {0}) = \lim _ {h \to 0} \frac {f (x _ {0} + h) - f (x _ {0})}{h},
> $$
>
> provided the limit exists. 
>
Thus, instantaneous rates are limits of average rates. 

It is conventional to use the word instantaneous even when x does not represent time. The word is, however, frequently omitted. When we say rate of change, we mean instantaneous rate of change. 

**EXAMPLE 1** The area A of a circle is related to its diameter by the equation 

$$
A = \frac {\pi}{4} D ^ {2}.
$$

How fast does the area change with respect to the diameter when the diameter is 10 m? 

**Solution** The rate of change of the area with respect to the diameter is 

$$
{\frac {d A}{d D}} = {\frac {\pi}{4}} \cdot 2 D = {\frac {\pi D}{2}}.
$$

![[f0513561acec1f1cfb483d962e0bd301bb1e3bc2d0df4d684b304bd6af918fc5.jpg|image]]



FIGURE 3.15 The positions of a body moving along a coordinate line at time t and shortly later at time $t + \Delta t$ . Here the coordinate line is horizontal.


![[1ff9b0b7009440b1c34337fb28d5bd12cb1bfa8642878721f51ec7d19a928116.jpg|image]]



(a) s increasing:
positive slope so
moving upward


![[f44292717d7ef2ec286185114a36a23f9e416932ff40dfc63c30b7026d649fa7.jpg|image]]



FIGURE 3.16 For motion $s = f(t)$ along a straight line (the vertical axis), $v = ds/dt$ is (a) positive when s increases and (b) negative when s decreases.


When D = 10 m, the area is changing with respect to the diameter at the rate of $(\pi/2)10 = 5\pi \mathrm{m}^{2}/\mathrm{m} \approx 15.71 \mathrm{~m}^{2}/\mathrm{m}$ . 

## Motion Along a Line: Displacement, Velocity, Speed, Acceleration, and Jerk

Suppose that an object (or body, considered as a whole mass) is moving along a coordinate line (an s-axis), usually horizontal or vertical, so that we know its position s on that line as a function of time t: 

$$
s = f (t).
$$

The displacement of the object over the time interval from t to $t + \Delta t$ (Figure 3.15) is 

$$
\Delta s = f (t + \Delta t) - f (t),
$$

and the average velocity of the object over that time interval is 

$$
v _ {a v} = \frac {\text { displacement }}{\text { travel   time }} = \frac {\Delta s}{\Delta t} = \frac {f (t + \Delta t) - f (t)}{\Delta t}.
$$

To find the body's velocity at the exact instant $t$ , we take the limit of the average velocity over the interval from $t$ to $t + \Delta t$ as $\Delta t$ approaches zero. This limit is the derivative of $f$ with respect to $t$ . 

> ***DEFINITION*** Velocity (instantaneous velocity) is the derivative of position with respect to time. If a body's position at time $t$ is $s = f(t)$ , then the body's velocity at time $t$ is 
>
> $$
> v (t) = \frac {d s}{d t} = \lim _ {\Delta t \rightarrow 0} \frac {f (t + \Delta t) - f (t)}{\Delta t}.
> $$
>
Besides telling how fast an object is moving along the horizontal line in Figure 3.15, its velocity tells the direction of motion. When the object is moving forward (s increasing), the velocity is positive; when the object is moving backward (s decreasing), the velocity is negative. If the coordinate line is vertical, the object moves upward for positive velocity and downward for negative velocity. The blue curves in Figure 3.16 represent position along the line over time; they do not portray the path of motion, which lies along the vertical s-axis. 

If we drive to a friend's house and back at $50\mathrm{km / h}$ , say, the speedometer will show 50 on the way over but it will not show $-50$ on the way back, even though our distance from home is decreasing. The speedometer always shows speed, which is the absolute value of velocity. Speed measures the rate of progress regardless of direction. 

> ***DEFINITION*** Speed is the absolute value of velocity. 
>
> $$
> \mathrm{Speed} = | v (t) | = \left| \frac {d s}{d t} \right|
> $$

**EXAMPLE 2** Figure 3.17 shows the graph of the velocity $v = f'(t)$ of a particle moving along a horizontal line as in Figure 3.15 (as opposed to the graph of a position function $s = f(t)$ , such as in Figure 3.16). In the graph of the velocity function, it's not the 

![[47b462cb0cca01c7541e4da846ef74ea73b9589470565883da95b92ec45af5d2.jpg|image]]



FIGURE 3.17 The velocity graph of a particle moving along a horizontal line, discussed in Example 2.


HISTORICAL BIOGRAPHY
Bernard Bolzano
(1781–1848)
Bolzano was born in Prague,
Czechoslovakia. He studied at the University
of Prague, where he took courses in
philosophy, physics, and mathematics. 

To know more, visit the companion Website. 

slope of the curve that tells us whether the particle is moving forward or backward along the line (which is not shown in the figure), but rather the sign of the velocity. Figure 3.17 shows that the particle moves forward for the first 3 s (when the velocity is positive), moves backward for the next 2 s (the velocity is negative), stands motionless for a full second, and then moves forward again. The particle is speeding up when its positive velocity increases during the first second, moves at a steady speed during the next second, and then slows down as the velocity decreases to zero during the third second. It stops for an instant at t = 3 s (when the velocity is zero) and reverses direction as the velocity starts to become negative. The particle is now moving backward and gaining in speed until t = 4 s, at which time it achieves its greatest speed during its backward motion. Continuing its backward motion at time t = 4, the particle starts to slow down again until it finally stops at time t = 5 (when the velocity is once again zero). The particle now remains motionless for one full second, and then moves forward again at t = 6 s, speeding up during the final second of the forward motion indicated in the velocity graph. 

The rate at which a body's velocity changes is the body's acceleration. The acceleration measures how quickly the body picks up or loses speed. In Chapter 12 we will study motion in the plane and in space, where acceleration of an object may also lead to a change in direction. 

A sudden change in acceleration is called a jerk. When a ride in a car or a bus is jerky, it is not that the accelerations involved are necessarily large but that the changes in acceleration are abrupt. 

> ***DEFINITIONS*** Acceleration is the derivative of velocity with respect to time. If a body's position at time $t$ is $s = f(t)$ , then the body's acceleration at time $t$ is 
>
> $$
> a (t) = \frac {d v}{d t} = \frac {d ^ {2} s}{d t ^ {2}}.
> $$
>
> Jerk is the derivative of acceleration with respect to time: 
>
> $$
> j (t) = \frac {d a}{d t} = \frac {d ^ {3} s}{d t ^ {3}}.
> $$
>
![[a9dfc8f9c7fd003aa452192cb635e237f0b2829a25d45311fb9e16fa0907f536.jpg|image]]



FIGURE 3.18 A ball bearing falling from rest (Example 3).


Near the surface of Earth, all bodies fall with the same constant acceleration. Galileo's experiments with free fall (see Section 2.1) lead to the equation 

$$
s = \frac {1}{2} g t ^ {2},
$$

where $s$ is the distance fallen and $g$ is the acceleration due to Earth's gravity. This equation holds in a vacuum, where there is no air resistance, and closely models the fall of dense, heavy objects, such as rocks or steel tools, for the first few seconds of their fall, before the effects of air resistance are significant. 

The value of $g$ in the equation $s = (1/2)gt^2$ depends on the units used to measure $t$ and $s$ . With $t$ in seconds (the usual unit), the value of $g$ determined by measurement at sea level is approximately $9.8\mathrm{m / s^2}$ (meters per second squared) in metric units. (This gravitational constant depends on the distance from Earth's center of mass, and is slightly lower on top of Mt. Everest, for example.) 

The jerk associated with the constant acceleration of gravity ( $g = 9.8 \, m/s^{2}$ ) is zero: 

$$
j = \frac {d}{d t} (g) = 0.
$$

An object does not exhibit jerkiness during free fall. 

**EXAMPLE 3** Figure 3.18 shows the free fall of a heavy ball bearing released from rest at time t = 0 s. 

(a) How many meters does the ball fall in the first 3 s? 

(b) What are its velocity, speed, and acceleration when t = 3? 

**Solution** 

(a) The metric free-fall equation is $s = 4.9t^{2}$ . During the first 3 s, the ball falls 

$$
s (3) = 4. 9 (3) ^ {2} = 4 4. 1 \mathrm{m}.
$$

(b) At any time t, velocity is the derivative of position: 

$$
v (t) = s ^ {\prime} (t) = \frac {d}{d t} (4. 9 t ^ {2}) = 9. 8 t.
$$

At $t = 3$ , the velocity is 

$$
v (3) = 2 9. 4 \mathrm{m/s}
$$

in the downward (increasing s) direction. The speed at t = 3 is 

$$
\text { speed } = | v (3) | = 2 9. 4 \mathrm{m} / \mathrm{s}.
$$

The acceleration at any time t is 

$$
a (t) = v ^ {\prime} (t) = s ^ {\prime \prime} (t) = 9. 8 \mathrm{m} / \mathrm{s} ^ {2}.
$$

At t = 3, the acceleration is $9.8 \, m/s^{2}$ . 

**EXAMPLE 4** A dynamite blast blows a heavy rock straight up with a launch velocity of 49 m/s (176.4 km/h) (Figure 3.19a). It reaches a height of $s = 49t - 4.9t^{2}$ m after t seconds. 

(a) How high does the rock go? 

(b) What are the velocity and speed of the rock when it is 78.4 m above the ground on the way up? On the way down? 

(c) What is the acceleration of the rock at any time t during its flight (after the blast)? 

(d) When does the rock hit the ground again? 

![[6c6e4b605106e779441bf0d02bdea93fa97ba32d922468d70bf2f8e8d7c80d4f.jpg|image]]



(a)


![[34666898c3387a5a8aa4b3c952e1cc532a977d50df76899064643c8d61f3183d.jpg|image]]



(b)



FIGURE 3.19 (a) The rock in Example 4. (b) The graphs of $s$ and $v$ as functions of time; $s$ is largest when $v = ds / dt = 0$ . The graph of $s$ is not the path of the rock: It is a plot of height versus time. The slope of the plot is the rock's velocity, graphed here as a straight line.


## **Solution**

(a) In the coordinate system we have chosen, s measures height from the ground up, so the velocity is positive on the way up and negative on the way down. The instant the rock is at its highest point is the one instant during the flight when the velocity is 0. To find the maximum height, all we need to do is to find when v = 0 and evaluate s at this time. 

At any time $t$ during the rock's motion, its velocity is 

$$
v = \frac {d s}{d t} = \frac {d}{d t} (4 9 t - 4. 9 t ^ {2}) = 4 9 - 9. 8 t \mathrm{m/s}.
$$

The velocity is zero when 

$$
4 9 - 9. 8 t = 0 \quad \text { or } \quad t = 5 \mathrm{s}.
$$

The rock's height at $t = 5$ s is 

$$
s _ {\max} = s (5) = 4 9 (5) - 4. 9 (5) ^ {2} = 2 4 5 - 1 2 2. 5 = 1 2 2. 5 \mathrm{m}.
$$

See Figure 3.19b. 

(b) To find the rock's velocity at $78.4\mathrm{m}$ on the way up and again on the way down, we first find the two values of $t$ for which 

$$
s (t) = 4 9 t - 4. 9 t ^ {2} = 7 8. 4.
$$

To solve this equation, we write 

$$
\begin{array}{c} 4. 9 t ^ {2} - 4 9 t + 7 8. 4 = 0 \\ 4. 9 (t ^ {2} - 1 0 t + 1 6) = 0 \\ (t - 2) (t - 8) = 0 \\ t = 2 s, t = 8 s. \end{array}
$$

The rock is $78.4\mathrm{m}$ above the ground 2 s after the explosion and again 8 s after the explosion. The rock's velocities at these times are 

$$
\begin{array}{l} v (2) = 4 9 - 9. 8 (2) = 4 9 - 1 9. 6 = 2 9. 4 \mathrm{m/s}. \\ v (8) = 4 9 - 9. 8 (8) = 4 9 - 7 8. 4 = - 2 9. 4 \mathrm{m/s}. \end{array}
$$

At both instants, the rock's speed is $29.4\mathrm{m / s}$ . Since $v(2) > 0$ , the rock is moving upward ( $s$ is increasing) at $t = 2s$ ; it is moving downward ( $s$ is decreasing) at $t = 8$ because $v(8) < 0$ . 

(c) At any time during its flight following the explosion, the rock's acceleration is a constant 

$$
a = \frac {d v}{d t} = \frac {d}{d t} (4 9 - 9. 8 t) = - 9. 8 \mathrm{m} / \mathrm{s} ^ {2}.
$$

The acceleration is always downward and is the effect of gravity on the rock. As the rock rises, it slows down; as it falls, it speeds up. 

(d) The rock hits the ground at the positive time t for which s = 0. The equation $49t - 4.9t^{2} = 0$ factors to give $4.9t (10 - t) = 0$ , so it has solutions t = 0 and t = 10. At t = 0, the blast occurred and the rock was thrown upward. It returns to the ground 10 s later. 

## Derivatives in Economics and Biology

Economists have a specialized vocabulary for rates of change and derivatives. They call them marginals. In a manufacturing operation, the cost of production $c(x)$ is a function of x, the number of units produced. The marginal cost of production is the rate of change of cost with respect to level of production, so it is dc/dx. 

![[15d46a6f2480a3f1052fb5fcd1fab67ebd830a72fc6a8bd2ec6f4a9bfe3a10df.jpg|image]]



FIGURE 3.20 Weekly steel production: $c(x)$ is the cost of producing x tons per week. The cost of producing an additional h tons is $c(x + h) - c(x)$ .


![[cf7ff036091869bba41e7a6bcfc2d473782aaf9fd831e65a684c73846a264839.jpg|image]]



FIGURE 3.21 The marginal cost dc/dx is approximately the extra cost $\Delta c$ of producing $\Delta x = 1$ more unit.


Suppose that $c(x)$ represents the dollars needed to produce x tons of steel in one week. It costs more to produce $x + h$ tons per week, and the cost difference, divided by h, is the average cost of producing each additional ton: 

$$
\frac {c (x + h) - c (x)}{h} = \begin{array}{l l} & \text { average   cost   of   each   of   the   additional } \\ & h \text { tons   of   steel   produced. } \end{array}
$$

The limit of this ratio as $h \rightarrow 0$ is the marginal cost of producing more steel per week when the current weekly production is x tons (Figure 3.20): 

$$
\frac {d c}{d x} = \lim _ {h \rightarrow 0} \frac {c (x + h) - c (x)}{h} = \text {   marginal   cost   of   production.   }
$$

Sometimes the marginal cost of production is loosely defined to be the extra cost of producing one additional unit: 

$$
\frac {\Delta c}{\Delta x} = \frac {c (x + 1) - c (x)}{1},
$$

which is approximated by the value of dc/dx at x. This approximation is acceptable if the slope of the graph of c does not change quickly near x. Then the difference quotient will be close to its limit dc/dx, which is the rise in the tangent line if $\Delta x = 1$ (Figure 3.21). The approximation often works well for large values of x. 

Economists often represent a total cost function by a cubic polynomial 

$$
c (x) = \alpha x ^ {3} + \beta x ^ {2} + \gamma x + \delta ,
$$

where $\delta$ represents fixed costs, such as rent, heat, equipment capitalization, and management costs. The other terms represent variable costs, such as the costs of raw materials, taxes, and labor. Fixed costs are independent of the number of units produced, whereas variable costs depend on the quantity produced. A cubic polynomial is usually adequate to capture the cost behavior on a realistic quantity interval. 

**EXAMPLE 5** Suppose that it costs 

$$
c (x) = x ^ {3} - 6 x ^ {2} + 1 5 x
$$

dollars to produce x radiators when 8 to 30 radiators are produced and that 

$$
r (x) = x ^ {3} - 3 x ^ {2} + 1 2 x
$$

gives the dollar revenue from selling x radiators. Your shop currently produces 10 radiators a day. About how much extra will it cost to produce one more radiator a day, and what is your estimated increase in revenue and increase in profit for selling 11 radiators a day? 

**Solution** The cost of producing one more radiator a day when 10 are produced is about $c'(10)$ : 

$$
\begin{array}{l} c ^ {\prime} (x) = \frac {d}{d x} (x ^ {3} - 6 x ^ {2} + 1 5 x) = 3 x ^ {2} - 1 2 x + 1 5 \\ c ^ {\prime} (1 0) = 3 (1 0 0) - 1 2 (1 0) + 1 5 = 1 9 5. \end{array}
$$

The additional cost will be about \$195. The marginal revenue is 

$$
r ^ {\prime} (x) = \frac {d}{d x} \left(x ^ {3} - 3 x ^ {2} + 1 2 x\right) = 3 x ^ {2} - 6 x + 1 2.
$$

The marginal revenue function estimates the increase in revenue that will result from selling one additional unit. If you currently sell 10 radiators a day, you can expect your revenue to increase by about 

$$
r ^ {\prime} (1 0) = 3 (1 0 0) - 6 (1 0) + 1 2 = 2 5 2
$$

if you increase sales to 11 radiators a day. The estimated increase in profit is obtained by subtracting the increased cost of $195 from the increased revenue, leading to an estimated profit increase of $252 - $195 = $57. 


(a)


![[e85d2168990f3e277d23a96c7e14de1f1807f7fdd6d239daf7b33cbaf5a74466.jpg|image]]


![[055693231a1f951ddf2d4aaa8b610f49740dc2162d53d977538fe33da1bc484d.jpg|image]]


**EXAMPLE 6** Marginal rates frequently arise in discussions of tax rates. If your marginal income tax rate is 28% and your income increases by $1000, you can expect to pay an extra $280 in taxes. This does not mean that you pay 28% of your entire income in taxes. It just means that at your current income level I, the rate of increase of taxes T with respect to income is $dT/dI = 0.28$ . You will pay $0.28 in taxes out of every extra dollar you earn. As your income increases, you may land in a higher tax bracket, and your marginal rate will increase. 

## Sensitivity to Change

When a small change in x produces a large change in the value of a function $f(x)$ , we say that the function is sensitive to changes in x. The derivative $f'(x)$ is a measure of this sensitivity. The function is more sensitive when $|f'(x)|$ is larger (when the slope of the graph of f is steeper). 

## **EXAMPLE 7** Genetic Data and Sensitivity to Change

The Austrian monk Gregor Johann Mendel (1822–1884), working with garden peas and other plants, provided the first scientific explanation of hybridization. 

His careful records showed that if p (a number between 0 and 1) is the frequency of the gene for smooth skin in peas (dominant) and $(1 - p)$ is the frequency of the gene for wrinkled skin in peas, then the proportion of smooth-skin peas in the next generation will be 

$$
y = 2 p (1 - p) + p ^ {2} = 2 p - p ^ {2}.
$$

The graph of y versus p in Figure 3.22a suggests that the value of y is more sensitive to a change in p when p is small than when p is large. Indeed, this fact is borne out by the derivative graph in Figure 3.22b, which shows that dy/dp is close to 2 when p is near 0 and close to 0 when p is near 1. 

FIGURE 3.22 (a) The graph of $y = 2p - p^2$ , describing the proportion of smooth-skin peas in the next generation. (b) The graph of $dy / dp$ (Example 7). 

The implication for genetics is that introducing a few more smooth skin genes into a population where the frequency of wrinkled-skin peas is large will have a more dramatic effect on later generations than will a similar increase when the population has a large proportion of smooth-skin peas. 

## EXERCISES 3.4

## Motion Along a Coordinate Line

Exercises 1–6 give the positions $s = f(t)$ of a body moving on a coordinate line, with s in meters and t in seconds. 

a. Find the body's displacement and average velocity for the given time interval. 

b. Find the body's speed and acceleration at the endpoints of the interval. 

c. When, if ever, during the interval does the body change direction? 

1. $s = t^2 - 3t + 2, 0 \leq t \leq 2$ 

2. $s = 6t - t^2, 0 \leq t \leq 6$ 

3. $s = -t^3 + 3t^2 - 3t, 0 \leq t \leq 3$ 

4. $s = (t^4 / 4) - t^3 + t^2, 0 \leq t \leq 3$ 

$$
\mathbf {5 .} s = \frac {2 5}{t ^ {2}} - \frac {5}{t}, 1 \leq t \leq 5 \quad \mathbf {6 .} s = \frac {2 5}{t + 5}, - 4 \leq t \leq 0
$$

7. Particle motion At time t, the position of a body moving along the s-axis is $s = t^{3} - 6t^{2} + 9t$ m. 

a. Find the body's acceleration each time the velocity is zero. 

b. Find the body's speed each time the acceleration is zero. 

c. Find the total distance traveled by the body from t = 0 to t = 2. 

8. Particle motion At time $t \geq 0$ , the velocity of a body moving along the horizontal s-axis is $v = t^{2} - 4t + 3$ . 

a. Find the body's acceleration each time the velocity is zero. 

b. When is the body moving forward? Backward? 

c. When is the body's velocity increasing? Decreasing? 

## Free-Fall Applications

9. Free fall on Mars and Jupiter The equations for free fall at the surfaces of Mars and Jupiter (s in meters, t in seconds) are $s = 1.86t^{2}$ on Mars and $s = 11.44t^{2}$ on Jupiter. How long does it take a rock falling from rest to reach a velocity of 27.8 m/s (about 100 km/h) on each planet? 

10. Lunar projectile motion A rock thrown vertically upward from the surface of the moon at a velocity of 24 m/s (about 86 km/h) reaches a height of s = 24t - 0.8t $^{2}$ m in t s. 

a. Find the rock's velocity and acceleration at time $t$ . (The acceleration in this case is the acceleration of gravity on the moon.) 

b. How long does it take the rock to reach its highest point? 

c. How high does the rock go? 

d. How long does it take the rock to reach half its maximum height? 

e. How long is the rock aloft? 

11. Finding $g$ on a small airless planet Explorers on a small airless planet used a spring gun to launch a ball bearing vertically upward from the surface at a launch velocity of $15\mathrm{m / s}$ . Because the acceleration of gravity at the planet's surface was $g_{s}\mathrm{m / s}^{2}$ , the explorers expected the ball bearing to reach a height of $s = 15t - (1 / 2)g_{s}t^{2}\mathrm{m}$ $t$ s later. The ball bearing reached its maximum height $20\mathrm{s}$ after being launched. What was the value of $g_{s}$ ? 

12. Speeding bullet A 45-caliber bullet shot straight up from the surface of the moon would reach a height of $s = 250t - 0.8t^{2}$ m after t seconds. On Earth, in the absence of air, its height would be $s = 250t - 4.9t^{2}$ m after t seconds. How long will the bullet be aloft in each case? How high will the bullet go? 

13. Free fall from the Tower of Pisa Had Galileo dropped a cannonball from the Tower of Pisa, 56 m above the ground, the ball's height above the ground t seconds into the fall would have been $s = 56 - 4.9t^{2}$ . 

a. What would have been the ball's velocity, speed, and acceleration at time $t$ ? 

b. About how long would it have taken the ball to hit the ground? 

c. What would have been the ball's velocity at the moment of impact? 

14. Galileo's free-fall formula Galileo developed a formula for a body's velocity during free fall by rolling balls from rest down increasingly steep inclined planks and looking for a limiting formula that would predict a ball's behavior when the plank was vertical and the ball fell freely; see part (a) of the accompanying figure. He found that, for any given angle of the plank, the ball's velocity $t$ seconds into motion was a constant multiple of $t$ . That is, the velocity was given by a formula of the form $v = kt$ . The value of the constant $k$ depended on the inclination of the plank. 

In modern notation—part (b) of the figure—with distance in meters and time in seconds, what Galileo determined by experiment was that, for any given angle $\theta$ , the ball's velocity t s into the roll was $v = 9.8(\sin\theta)t$ m/s. 

![[c1e8e1b940630dff4c1800796096aa729ed9f0aa1cbb28e9f87f94e9dfd0e3dc.jpg|image]]



(a)


![[5629e62c4c162cf2daa2f949a9d6b6c012d6971d0874a16503db92e56f96b712.jpg|image]]



(b)


a. What is the equation for the ball's velocity during free fall? 

b. Building on your work in part (a), what constant acceleration does a freely falling body experience near the surface of Earth? 

Understanding Motion from Graphs 

15. The accompanying figure shows the velocity $v = ds / dt = f(t)$ (m/s) of a body moving along a coordinate line. 

![[2953b151403f39ac3442022d9ca121921b6c5075061fb81f471c5d2e68259576.jpg|image]]


a. When does the body reverse direction? 

b. When (approximately) is the body moving at a constant speed? 

c. Graph the body's speed for $0 \leq t \leq 10$ . 

d. Graph the acceleration, where defined. 

16. A particle $P$ moves on the number line shown in part (a) of the accompanying figure. Part (b) shows the position of $P$ as a function of time $t$ . 

![[98e13bf762a73c093dd474d61e737dbb0aacb4f9e2385b5d935029cf13192b58.jpg|image]]


![[5c7a52e838ec8171bfcec69b93c200b08439442a3e162335601e3274a5223ab2.jpg|image]]



(b)


a. When is $P$ moving to the left? Moving to the right? Standing still? 

b. Graph the particle's velocity and speed (where defined). 

17. Launching a rocket When a model rocket is launched, the propellant burns for a few seconds, accelerating the rocket upward. After burnout, the rocket coasts upward for a while and then begins to fall. A small explosive charge pops out a parachute shortly after the rocket starts down. The parachute slows the rocket to keep it from breaking when it lands. 

The figure here shows velocity data from the flight of the model rocket. Use the data to answer the following. 

a. How fast was the rocket climbing when the engine stopped? 

b. For how many seconds did the engine burn? 

![[5c97d9585d6420ebd4b697f6ddd40bc1b5c403523292d3127b770abf1bafce23.jpg|image]]


c. When did the rocket reach its highest point? What was its velocity then? 

d. When did the parachute pop out? How fast was the rocket falling then? 

e. How long did the rocket fall before the parachute opened? 

f. When was the rocket's acceleration greatest? 

g. When was the acceleration constant? What was its value then (to the nearest integer)? 

18. The accompanying figure shows the velocity $v = f(t)$ of a particle moving on a horizontal coordinate line. 

![[c7fee03929d4b544279ee5f61f0f14fb61f645abc49dd2da653ffaa81e36e8d5.jpg|image]]


a. When does the particle move forward? Move backward? Speed up? Slow down? 

b. When is the particle's acceleration positive? Negative? Zero? 

c. When does the particle move at its greatest speed? 

d. When does the particle stand still for more than an instant? 

19. The graphs in the accompanying figure show the position s, velocity $v = ds/dt$ , and acceleration $a = d^{2}s/dt^{2}$ of a body moving along a coordinate line as functions of time t. Which graph is which? Give reasons for your answers. 

![[05374d0bd1947e7b89bb9e44535fa063309d22e25a4f773b03cb4dfefad80518.jpg|image]]


20. The graphs in the accompanying figure show the position $s$ , the velocity $v = ds / dt$ , and the acceleration $a = d^2 s / dt^2$ of a body moving along a coordinate line as functions of time $t$ . Which graph is which? Give reasons for your answers. 

![[3dcac67a1ff1c92363e15f6f02e1697d87ca64ccc66717fee60c8bf021b21d82.jpg|image]]


## Economics

21. Marginal cost Suppose that the dollar cost of producing $x$ washing machines is $c(x) = 2000 + 100x - 0.1x^2$ . 

a. Find the average cost per machine of producing the first 100 washing machines. 

b. Find the marginal cost when 100 washing machines are produced. 

c. Show that the marginal cost when 100 washing machines are produced is approximately the cost of producing one more washing machine after the first 100 have been made, by calculating the latter cost directly. 

22. Marginal revenue Suppose that the revenue from selling x washing machines is 

$$
r (x) = 2 0, 0 0 0 \left(1 - \frac {1}{x}\right)
$$

dollars. 

a. Find the marginal revenue when 100 machines are produced. 

b. Use the function $r'(x)$ to estimate the increase in revenue that will result from increasing production from 100 machines a week to 101 machines a week. 

c. Find the limit of $r'(x)$ as $x \to \infty$ . How would you interpret this number? 

## Additional Applications

23. Bacterium population When a bactericide was added to a nutrient broth in which bacteria were growing, the bacterium population continued to grow for a while, but then stopped growing and began to decline. The size of the population at time t (hours) was $b = 10^{6} + 10^{4}t - 10^{3}t^{2}$ . Find the growth rates at 

a. t = 0 hours. 

b. t = 5 hours. 

c. t = 10 hours. 

24. Body surface area A typical male's body surface area S in square meters is often modeled by the formula $S = \frac{1}{60} \sqrt{wh}$ , where h is the height in centimeters, and w the weight in kilograms, of the person. Find the rate of change of body surface area with respect to weight for males of constant height h = 180 cm. Does S increase more rapidly with respect to weight at lower or higher body weights? Explain. 

25. Draining a tank It takes 12 hours to drain a storage tank by opening the valve at the bottom. The depth y of fluid in the tank t hours after the valve is opened is given by the formula 

$$
y = 6 \left(1 - \frac {t}{1 2}\right) ^ {2} \mathrm{m}.
$$

a. Find the rate $dy/dt$ (m/h) at which the tank is draining at time t. 

b. When is the fluid level in the tank falling fastest? Slowest? What are the values of $dy / dt$ at these times? 

c. Graph y and dy/dt together and discuss the behavior of y in relation to the signs and values of dy/dt. 

26. Draining a tank The number of liters of water in a tank t minutes after the tank has started to drain is $Q(t) = 200(30 - t)^{2}$ . How fast is the water running out at the end of 10 min? What is the average rate at which the water flows out during the first 10 min? 

27. Vehicular stopping distance Based on data from the U.S. Bureau of Public Roads, a model for the total stopping distance of a moving car in terms of its speed is 

$$
s = 0. 2 1 v + 0. 0 0 6 3 v ^ {2},
$$

where s is measured in meters and v is measured in km/h. The linear term 0.21v models the distance the car travels during the time the driver perceives a need to stop until the brakes are applied, and the quadratic term $0.00636v^{2}$ models the additional braking distance once they are applied. Find ds/dv at v = 50 and v = 100 km/h, and interpret the meaning of the derivative. 

28. Inflating a balloon The volume $V = (4/3)\pi r^3$ of a spherical balloon changes with the radius. 

a. At what rate $\left(\mathrm{m}^{3}/\mathrm{m}\right)$ does the volume change with respect to the radius when $r = 2 \, m$ ? 

b. By approximately how much does the volume increase when the radius changes from 2 to 2.2 m? 

29. Airplane takeoff Suppose that the distance an aircraft travels along a runway before takeoff is given by $D = (10/9)t^{2}$ , where D is measured in meters from the starting point and t is measured in seconds from the time the brakes are released. The aircraft will become airborne when its speed reaches 200 km/h. How long will it take to become airborne, and what distance will it travel in that time? 

30. Volcanic lava fountains Although the November 1959 Kilauea Iki eruption on the island of Hawaii began with a line of fountains along the wall of the crater, activity was later confined to a single vent in the crater's floor, which at one point shot lava $580\mathrm{m}$ straight into the air (a Hawaiian record). What was the lava's exit velocity in meters per second? In kilometers per hour? (Hint: If $\upsilon_0$ is the exit velocity of a particle of lava, its height t seconds later will be $s = v_{0}t - 4.9t^{2}$ m. Begin by finding the time at which ds/dt = 0. Neglect air resistance.) 

## Analyzing Motion Using Graphs

T Exercises 31–34 give the position function $s = f(t)$ of an object moving along the $s$ -axis as a function of time $t$ . Graph $f$ together with the velocity function $v(t) = ds/dt = f'(t)$ and the acceleration function $a(t) = d^2 s/dt^2 = f''(t)$ . Comment on the object's behavior in relation to the signs and values of $y$ and $a$ . Include in your commentary such topics as the following: 

a. When is the object momentarily at rest? 

b. When does it move to the left (down) or to the right (up)? 

c. When does it change direction? 

d. When does it speed up and slow down? 

e. When is it moving fastest (highest speed)? Slowest? 

f. When is it farthest from the axis origin? 

31. $s = 60t - 4.9t^2$ , $0 \leq t \leq 12.5$ (a heavy object fired straight up from Earth's surface at $60\mathrm{m / s}$ ) 

32. $s = t^2 - 3t + 2, 0 \leq t \leq 5$ 

$$
\mathbf {3 3 .} s = t ^ {3} - 6 t ^ {2} + 7 t, \quad 0 \leq t \leq 4
$$

$$
\mathbf {3 4 .} s = 4 - 7 t + 6 t ^ {2} - t ^ {3}, \quad 0 \leq t \leq 4
$$

## 3.5 Derivatives of Trigonometric Functions

Many phenomena of nature are approximately periodic (electromagnetic fields, heart rhythms, tides, weather). The derivatives of sines and cosines play a key role in describing periodic changes. This section shows how to differentiate the six basic trigonometric functions. 

## Derivative of the Sine Function

To calculate the derivative of $f(x) = \sin x$ , for x measured in radians, we combine the limits in Example 5a and Theorem 6 in Section 2.4 with the angle sum identity for the sine function (see Figure 1.46): 

$$
\sin (x + h) = \sin x \cos h + \cos x \sin h.
$$

If $f(x) = \sin x$ , then 

$$
\begin{array}{l l} f ^ {\prime} (x) = \lim _ {h \to 0} \frac {f (x + h) - f (x)}{h} = \lim _ {h \to 0} \frac {\sin (x + h) - \sin x}{h} & \text { Derivative   definition } \\ = \lim _ {h \to 0} \frac {(\sin x \cos h + \cos x \sin h) - \sin x}{h} & \text { Identity   for   } \sin (x + h) \\ = \lim _ {h \to 0} \frac {\sin x (\cos h - 1) + \cos x \sin h}{h} \\ = \lim _ {h \to 0} \left(\sin x \cdot \frac {\cos h - 1}{h}\right) + \lim _ {h \to 0} \left(\cos x \cdot \frac {\sin h}{h}\right) \\ = \sin x \cdot \underbrace {\lim _ {h \to 0} \frac {\cos h - 1}{h}} _ {\text { limit   0 }} + \cos x \cdot \underbrace {\lim _ {h \to 0} \frac {\sin h}{h}} _ {\text { limit   1 }} & \text { Example   5a   and } \\ = \sin x \cdot 0 + \cos x \cdot 1 = \cos x. & \text { Theorem   6,   Section   2.4 } \end{array}
$$

The derivative of the sine function is the cosine function: 

$$
{\frac {d}{d x}} (\sin x) = \cos x.
$$

**EXAMPLE 1** We find derivatives of a difference, a product, and a quotient, each of which involves the sine function. 

$$
\begin{array}{r l} y = x ^ {2} - \sin x: & \frac {d y}{d x} = 2 x - \frac {d}{d x} (\sin x) \\ & = 2 x - \cos x \end{array}
$$

$$
\begin{array}{r l} \text {(b)} y = e ^ {x} \sin x: & \frac {d y}{d x} = e ^ {x} \frac {d}{d x} (\sin x) + \left(\frac {d}{d x} e ^ {x}\right) \sin x \\ & = e ^ {x} \cos x + e ^ {x} \sin x \\ & = e ^ {x} (\cos x + \sin x) \end{array} \quad \text { Product   Rule }
$$

$$
\begin{array}{l} \text {(c)} y = \frac {\sin x}{x}: \\ \quad \frac {d y}{d x} = \frac {x \cdot \frac {d}{d x} (\sin x) - \sin x \cdot 1}{x ^ {2}} \\ \quad = \frac {x \cos x - \sin x}{x ^ {2}} \end{array} \qquad \text {Quotient Rule}
$$

Derivative of the Cosine Function 

With the help of the angle sum formula for the cosine function (see Figure 1.46), 

$$
\cos (x + h) = \cos x \cos h - \sin x \sin h,
$$

we can compute the limit of the difference quotient: 

$$
\begin{array}{l l}\frac {d}{d x} (\cos x) = \lim _ {h \rightarrow 0} \frac {\cos (x + h) - \cos x}{h}&\text { Derivative   definition }\\= \lim _ {h \rightarrow 0} \frac {(\cos x \cos h - \sin x \sin h) - \cos x}{h}&\text { Cosine   angle   sum }\\= \lim _ {h \rightarrow 0} \frac {\cos x (\cos h - 1) - \sin x \sin h}{h}&\text { identity }\\= \lim _ {h \rightarrow 0} \left(\cos x \cdot \frac {\cos h - 1}{h}\right) - \lim _ {h \rightarrow 0} \left(\sin x \cdot \frac {\sin h}{h}\right)\\= \cos x \cdot \lim _ {h \rightarrow 0} \frac {\cos h - 1}{h} - \sin x \cdot \lim _ {h \rightarrow 0} \frac {\sin h}{h}\\= \cos x \cdot 0 - \sin x \cdot 1&\text { Example   5a   and }\\= - \sin x.&\text { Theorem   6, }\\&\text { Section   2.4 }\end{array}
$$

![[b14c2b61d8b02da7976b77495ff6b66ed41f634fe77761f889fe919dbee74a24.jpg|image]]


The derivative of the cosine function is the negative of the sine function: 

FIGURE 3.23 The curve $y' = -\sin x$ as the graph of the slopes of the tangent lines to the curve $y = \cos x$ . 

$$
{\frac {d}{d x}} (\cos x) = - \sin x.
$$

Figure 3.23 shows a way to visualize this result by graphing the slopes of the tangent lines to the curve $y = \cos x$ . 

**EXAMPLE 2** We find derivatives of the cosine function in combinations with other functions. 

$$
(\mathbf {a}) y = 5 e ^ {x} + \cos x:
$$

$$
\begin{array}{r l} \frac {d y}{d x} & = \frac {d}{d x} (5 e ^ {x}) + \frac {d}{d x} (\cos x) \\ & = 5 e ^ {x} - \sin x \end{array} \quad \text {   Sum   Rule   }
$$

![[ae0e2d73d4f0b434accd440542366845752559238760f390c11916dc636c7f02.jpg|image]]



FIGURE 3.24 A weight hanging from a vertical spring and then displaced oscillates above and below its rest position (Example 3).


![[6c411e9d25284a6dd5249848b28cd65269d4fa745e9d9231b0650bbdec1e0994.jpg|image]]



FIGURE 3.25 The graphs of the position and velocity of the weight in Example 3.


(b) $y = \sin x \cos x:$ 

$$
\begin{array}{l} \frac {d y}{d x} = \sin x \frac {d}{d x} (\cos x) + \left(\frac {d}{d x} (\sin x)\right) \cos x \\ \quad = (\sin x) (- \sin x) + (\cos x) (\cos x) \\ \quad = \cos^ {2} x - \sin^ {2} x \end{array} \quad \text { Product   Rule }
$$

$$
(\mathbf {c}) y = \frac {\cos x}{1 - \sin x}:
$$

$$
\begin{array}{l l} \frac {d y}{d x} = \frac {(1 - \sin x) \frac {d}{d x} (\cos x) - \cos x \frac {d}{d x} (1 - \sin x)}{(1 - \sin x) ^ {2}} & \text { Quotient   Rule } \\ = \frac {(1 - \sin x) (- \sin x) - (\cos x) (0 - \cos x)}{(1 - \sin x) ^ {2}} \\ = \frac {1 - \sin x}{(1 - \sin x) ^ {2}} & \sin^ {2} x + \cos^ {2} x = 1 \\ = \frac {1}{1 - \sin x} \end{array}
$$

## Simple Harmonic Motion

Simple harmonic motion models the motion of an object or weight bobbing freely up and down on the end of a spring, with no resistance. The motion is periodic and repeats indefinitely, so we represent it using trigonometric functions. The next example models motion with no opposing forces (such as friction). 

**EXAMPLE 3** A weight hanging from a spring (Figure 3.24) is stretched down 5 units beyond its rest position and released at time t = 0 to bob up and down. Its position at any later time t is 

$$
s = 5 \cos t.
$$

What are its velocity and acceleration at time t? 

## **Solution** We have

Position: 

$$
s = 5 \cos t
$$

Velocity: 

$$
v = \frac {d s}{d t} = \frac {d}{d t} (5 \cos t) = - 5 \sin t
$$

Acceleration: 

$$
a = \frac {d v}{d t} = \frac {d}{d t} (- 5 \sin t) = - 5 \cos t.
$$

Notice how much we can learn from these equations: 

1. As time passes, the weight moves down and up between s = -5 and s = 5 on the s-axis. The amplitude of the motion is 5. The period of the motion is $2\pi$ , the period of the cosine function. 

2. The velocity $v = -5 \sin t$ attains its greatest magnitude, 5, when $\cos t = 0$ , as the graphs in Figure 3.25 show. Hence, the speed of the weight, $|v| = 5|\sin t|$ , is greatest when $\cos t = 0$ , that is, when s = 0 (the rest position). The speed of the weight is zero when $\sin t = 0$ . This occurs when $s = 5 \cos t = \pm 5$ , at the endpoints of the interval of motion. At these points the weight reverses direction. 

3. The weight is acted on by the spring and by gravity. When the weight is below the rest position, the combined forces pull it up, and when it is above the rest position, they pull it down. The weight's acceleration is always proportional to the negative of its displacement. This property of springs is called Hooke's Law, and is studied further in Section 6.5. 

4. The acceleration, $a = -5 \cos t$ , is zero only at the rest position, where $\cos t = 0$ and the force of gravity and the force from the spring balance each other. When the weight is anywhere else, the two forces are unequal, and acceleration is nonzero. The acceleration is greatest in magnitude at the points farthest from the rest position, where $\cos t = \pm 1$ . 

**EXAMPLE 4** The jerk associated with the simple harmonic motion in Example 3 is 

$$
j = \frac {d a}{d t} = \frac {d}{d t} (- 5 \cos t) = 5 \sin t.
$$

It has its greatest magnitude when $\sin t = \pm1$ , not at the extremes of the displacement but at the rest position, where the acceleration changes direction and sign. 

## Derivatives of the Other Basic Trigonometric Functions

Because $\sin x$ and $\cos x$ are differentiable functions of x, it follows from the Quotient Rule that the related functions 

$$
\tan x = \frac {\sin x}{\cos x}, \quad \cot x = \frac {\cos x}{\sin x}, \quad \sec x = \frac {1}{\cos x}, \quad \text { and } \quad \csc x = \frac {1}{\sin x}
$$

are differentiable at every value of x at which they are defined. Their derivatives are given by the following formulas. Notice the negative signs in the derivative formulas for the cofunctions. 

The derivatives of the other trigonometric functions: 

$$
\begin{array}{l l} \frac {d}{d x} (\tan x) = \sec^ {2} x & \frac {d}{d x} (\cot x) = - \csc^ {2} x \\ \frac {d}{d x} (\sec x) = \sec x \tan x & \frac {d}{d x} (\csc x) = - \csc x \cot x \end{array}
$$

To show a typical calculation, we find the derivative of the tangent function. The other derivations are left for Exercise 54. 

**EXAMPLE 5** Find $d(\tan x)/dx$ . 

**Solution** We use the Derivative Quotient Rule to calculate the derivative: 

$$
\begin{array}{r l} \frac {d}{d x} (\tan x) & = \frac {d}{d x} \left(\frac {\sin x}{\cos x}\right) = \frac {\cos x \frac {d}{d x} (\sin x) - \sin x \frac {d}{d x} (\cos x)}{\cos^ {2} x} \\ & = \frac {\cos x \cos x - \sin x (- \sin x)}{\cos^ {2} x} \\ & = \frac {\cos^ {2} x + \sin^ {2} x}{\cos^ {2} x} \\ & = \frac {1}{\cos^ {2} x} = \sec^ {2} x. \end{array} \tag {QuotientRule}
$$

**EXAMPLE 6** Find $y''$ if $y = \sec x$ . 

**Solution** Finding the second derivative involves a combination of trigonometric derivatives. 

$$
y = \sec x
$$

$$
y ^ {\prime} = \sec x \tan x
$$

Derivative rule for secant function 

$$
\begin{array}{r l} y ^ {\prime \prime} & = \frac {d}{d x} (\sec x \tan x) \\ & = \sec x \frac {d}{d x} (\tan x) + \tan x \frac {d}{d x} (\sec x) \\ & = (\sec x) (\sec^ {2} x) + (\tan x) (\sec x \tan x) \\ & = \sec^ {3} x + \sec x \tan^ {2} x \end{array}
$$

## EXERCISES 3.5

## Derivatives

In Exercises 1–18, find dy/dx. 

1. $y = -10x + 3\cos x$ 

3. $y = x^{2}\cos x$ 

5. $y = \csc x - 4\sqrt{x} + \frac{7}{e^x}$ 

7. $f(x) = \sin x\tan x$ 

9. $y = xe^{-x}\sec x$ 

11. $y = \frac{\cot x}{1 + \cot x}$ 

2. $y = \frac{3}{x} + 5\sin x$ 

8. $g(x) = \frac{\cos x}{\sin^2 x}$ 

13. $y = \frac{4}{\cos x} +\frac{1}{\tan x}$ 

4. $y = \sqrt{x}\sec x + 3$ 

6. $y = x^{2}\cot x - \frac{1}{x^{2}}$ 

10. $y = (\sin x + \cos x)\sec x$ 

12. $y = \frac{\cos x}{1 + \sin x}$ 

14. $y = \frac{\cos x}{x} +\frac{x}{\cos x}$ 

15. $y = (\sec x + \tan x)(\sec x - \tan x)$ 

16. $y = x^{2}\cos x - 2x\sin x - 2\cos x$ 

17. $f(x) = x^{3}\sin x\cos x$ 18. $g(x) = (2 - x)\tan^2 x$ 

In Exercises 19–22, find ds/dt. 

19. $s = \tan t - e^{-t}$ 

20. $s = t^2 - \sec t + 5e^t$ 

21. $s = \frac{1 + \csc t}{1 - \csc t}$ 

22. $s = \frac{\sin t}{1 - \cos t}$ 

In Exercises 23–26, find dr/dθ. 

23. $r = 4 - \theta^2\sin \theta$ 

24. $r = \theta \sin \theta +\cos \theta$ 

25. $r = \sec \theta \csc \theta$ 

26. $r = (1 + \sec \theta)\sin \theta$ 

In Exercises 27–32, find dp/dq. 

27. $p = 5 + \frac{1}{\cot q}$ 

28. $p = (1 + \csc q)\cos q$ 

29. $p = \frac{\sin q + \cos q}{\cos q}$ 

30. $p = \frac{\tan q}{1 + \tan q}$ 

31. $p = \frac{q\sin q}{q^2 - 1}$ 32. $p = \frac{3q + \tan q}{q\sec q}$ 

33. Find $y''$ if
a. $y = \csc x$ .
b. $y = \sec x$ . 

34. Find $y^{(4)} = d^4 y / dx^4$ if
a. $y = -2\sin x$ .
b. $y = 9\cos x$ . 

## Tangent Lines

In Exercises 35–38, graph the curves over the given intervals, together with their tangent lines at the given values of x. Label each curve and tangent line with its equation. 

35. $y = \sin x, -3\pi /2\leq x\leq 2\pi$ $x = -\pi ,0,3\pi /2$ 

36. $y = \tan x, -\pi /2 <   x <   \pi /2$ $x = -\pi /3,0,\pi /3$ 

37. $y = \sec x, -\pi /2 <   x <   \pi /2$ $x = -\pi /3,\pi /4$ 

38. $y = 1 + \cos x, -3\pi /2\leq x\leq 2\pi$ $x = -\pi /3,3\pi /2$ 

Do the graphs of the functions in Exercises 39–44 have any horizontal tangent lines in the interval $0 \leq x \leq 2\pi$ ? If so, where? If not, why not? Visualize your findings by graphing the functions with a grapher. 

39. $y = x + \sin x$ 

40. $y = 2x + \sin x$ 

41. $y = x - \cot x$ 

42. $y = x + 2\cos x$ 

43. $y = \frac{\sec x}{3 + \sec x}$ 

44. $y = \frac{\cos x}{3 - 4\sin x}$ 

45. Find all points on the curve $y = \tan x, -\pi/2 < x < \pi/2$ , where the tangent line is parallel to the line y = 2x. Sketch the curve and tangent lines together, labeling each with its equation. 

46. Find all points on the curve $y = \cot x, 0 < x < \pi$ , where the tangent line is parallel to the line y = -x. Sketch the curve and tangent lines together, labeling each with its equation. 

In Exercises 47 and 48, find an equation for (a) the tangent line to the curve at P and (b) the horizontal tangent line to the curve at Q. 


47.


![[a3dd0ad523c93e0df9bd56fe11a11e2b4ca6c5d08de70d2a810d525bb541e660.jpg|image]]



48.


![[03bfb1ba9e83ac3fe80464b0c2b23c4df33782a84d6eb899b1a3e47194fb6835.jpg|image]]


Theory and Examples 

The equations in Exercises 49 and 50 give the position $s = f(t)$ of a body moving on a coordinate line (s in meters, t in seconds). Find the body's velocity, speed, acceleration, and jerk at time $t = \pi / 4 \, \text{s}$ . 

49. $s = 2 - 2\sin t$ 

50. $s = \sin t + \cos t$ 

51. Is there a value of c that will make 

$$
f (x) = \left\{ \begin{array}{l l} \frac {\sin^ {2} 3 x}{x ^ {2}}, & x \neq 0 \\ c, & x = 0 \end{array} \right.
$$

continuous at $x = 0$ ? Give reasons for your answer. 

52. Is there a value of b that will make 

$$
g (x) = \left\{ \begin{array}{l l} x + b, & x <   0 \\ \cos x, & x \geq 0 \end{array} \right.
$$

continuous at $x = 0$ ? Differentiable at $x = 0$ ? Give reasons for your answers. 

53. By computing the first few derivatives and looking for a pattern, find the following derivatives. 

$$
\begin{array}{l l} \mathbf {a}. \frac {d ^ {9 9 9}}{d x ^ {9 9 9}} (\cos x) & \mathbf {b}. \frac {d ^ {1 1 0}}{d x ^ {1 1 0}} (\sin x - 3 \cos x) \\ \mathbf {c}. \frac {d ^ {7 3}}{d x ^ {7 3}} (x \sin x) \end{array}
$$

54. Derive the formula for the derivative with respect to $x$ of 

a. $\sec x$ . b.csc $x$ . c. $\cot x$ 

55. A weight is attached to a spring and reaches its equilibrium position (x = 0). It is then set in motion resulting in a displacement of 

$$
x = 1 0 \cos t,
$$

where x is measured in centimeters and t is measured in seconds. See the accompanying figure. 

![[d79e73778cddf4fc643c552742da9db5bc4ec8bc72cad528efe63fb34a9b943a.jpg|image]]


a. Find the spring's displacement when $t = 0$ , $t = \pi / 3$ , and $t = 3\pi / 4$ . 

b. Find the spring's velocity when $t = 0$ , $t = \pi / 3$ , and $t = 3\pi / 4$ . 

56. Assume that a particle's position on the $x$ -axis is given by 

$$
x = 3 \cos t + 4 \sin t,
$$

where $x$ is measured in meters and $t$ is measured in seconds.  
a. Find the particle's position when $t = 0$ , $t = \pi / 2$ , and $t = \pi$ . 

b. Find the particle's velocity when $t = 0$ , $t = \pi / 2$ , and $t = \pi$ . 

T 57. Graph $y = \cos x$ for $-\pi \leq x \leq 2\pi$ . On the same screen, graph 

$$
y = \frac {\sin (x + h) - \sin x}{h}
$$

for h = 1, 0.5, 0.3, and 0.1. Then, in a new window, try h = -1, -0.5, and -0.3. What happens as $h \rightarrow 0^{+}$ ? As $h \rightarrow 0^{-}$ ? What phenomenon is being illustrated here? 

T 58. Graph $y = -\sin x$ for $-\pi \leq x \leq 2\pi$ . On the same screen, graph 

$$
y = \frac {\cos (x + h) - \cos x}{h}
$$

for $h = 1, 0.5, 0.3$ , and 0.1. Then, in a new window, try $h = -1, -0.5$ , and -0.3. What happens as $h \to 0^{+}$ ? As $h \to 0^{-}$ ? What phenomenon is being illustrated here? 

T 59. Centered difference quotients The centered difference quotient 

$$
\frac {f (x + h) - f (x - h)}{2 h}
$$

is used to approximate $f'(x)$ in numerical work because (1) its limit as $h \to 0$ equals $f'(x)$ when $f'(x)$ exists, and (2) it usually gives a better approximation of $f'(x)$ for a given value of h than the difference quotient 

$$
\frac {f (x + h) - f (x)}{h}.
$$

See the accompanying figure. 

![[f5c95abcac4beb63c87b6ea4797dd4941574df079ff32769f03d8322d4b2b1ce.jpg|image]]


a. To see how rapidly the centered difference quotient for $f(x) = \sin x$ converges to $f'(x) = \cos x$ , graph $y = \cos x$ together with 

$$
y = \frac {\sin (x + h) - \sin (x - h)}{2 h}
$$

over the interval $[-\pi, 2\pi]$ for h = 1, 0.5, and 0.3. Compare the results with those obtained in Exercise 57 for the same values of h. 

b. To see how rapidly the centered difference quotient for $f(x) = \cos x$ converges to $f'(x) = -\sin x$ , graph $y = -\sin x$ together with 

$$
y = \frac {\cos (x + h) - \cos (x - h)}{2 h}
$$

over the interval $[-\pi, 2\pi]$ for h = 1, 0.5, and 0.3. Compare the results with those obtained in Exercise 58 for the same values of h. 

60. A caution about centered difference quotients (Continuation of Exercise 59.) The quotient 

$$
\frac {f (x + h) - f (x - h)}{2 h}
$$

may have a limit as $h \to 0$ when $f$ has no derivative at $x$ . As a case in point, take $f(x) = |x|$ and calculate 

$$
\lim _ {h \to 0} \frac {| 0 + h | - | 0 - h |}{2 h}.
$$

As you will see, the limit exists even though $f(x) = |x|$ has no derivative at x = 0. Moral: Before using a centered difference quotient, be sure the derivative exists. 

61. Slopes on the graph of the tangent function Graph $y = \tan x$ and its derivative together on $(-π/2, π/2)$ . Does the graph of the tangent function appear to have a smallest slope? A largest slope? Is the slope ever negative? Give reasons for your answers. 

62. Exploring $(\sin kx)/x$ Graph $y = (\sin x)/x$ , $y = (\sin 2x)/x$ , and $y = (\sin 4x)/x$ together over the interval $-2 \leq x \leq 2$ . Where does each graph appear to cross the y-axis? Do the graphs really intersect the axis? What would you expect the graphs of $y = (\sin 5x)/x$ and $y = (\sin(-3x))/x$ to do as $x \to 0$ ? Why? What about the graph of $y = (\sin kx)/x$ for other values of k? Give reasons for your answers. 

## 3.6 The Chain Rule

![[5be235cfee0498c850d27d711c11410ec9fa897d2120dd1eab38195f3236aa9a.jpg|image]]



C: y turns B: u turns A: x turns


FIGURE 3.26 When gear A makes $x$ turns, gear B makes $u$ turns and gear C makes $y$ turns. By comparing circumferences or counting teeth, we see that $y = u / 2$ (C turns one-half turn for each B turn) and $u = 3x$ (B turns three times for A's one), so $y = 3x / 2$ . Thus, $dy / dx = 3/2 = (1/2)(3) = (dy / du)(du / dx)$ . 

How do we differentiate $F(x) = \sin(x^{2} - 4)$ ? This function is the composition $f \circ g$ of two functions $y = f(u) = \sin u$ and $u = g(x) = x^{2} - 4$ that we know how to differentiate. The answer, given by the Chain Rule, says that the derivative is the product of the derivatives of f and g. We develop the rule in this section. 

## Derivative of a Composite Function

The function $y = \frac{3}{2} x = \frac{1}{2}(3x)$ is the composition of the functions $y = \frac{1}{2} u$ and $u = 3x$ . We have 

$$
\frac {d y}{d x} = \frac {3}{2}, \quad \frac {d y}{d u} = \frac {1}{2}, \quad \text { and } \quad \frac {d u}{d x} = 3.
$$

Since $\frac{3}{2} = \frac{1}{2} \cdot 3$ , we see in this case that 

$$
{\frac {d y}{d x}} = {\frac {d y}{d u}} \cdot {\frac {d u}{d x}}.
$$

If we think of the derivative as a rate of change, this relationship is intuitively reasonable. If $y = f(u)$ changes half as fast as u, and $u = g(x)$ changes three times as fast as x, then we expect y to change 3/2 times as fast as x. This effect is much like that of a multiple gear train (Figure 3.26). Let's look at another example. 

## **EXAMPLE 1** The function

$$
y = (3 x ^ {2} + 1) ^ {2}
$$

is obtained by composing the functions $y = f(u) = u^{2}$ and $u = g(x) = 3x^{2} + 1$ . Calculating derivatives, we see that 

$$
\begin{array}{r l} \frac {d y}{d u} \cdot \frac {d u}{d x} & = 2 u \cdot 6 x \\ & = 2 (3 x ^ {2} + 1) \cdot 6 x \quad \text {   Substitute   for   } u. \\ & = 3 6 x ^ {3} + 1 2 x. \end{array}
$$

Calculating the derivative from the expanded formula $(3x^{2}+1)^{2}=9x^{4}+6x^{2}+1$ gives the same result: 

$$
\frac {d y}{d x} = \frac {d}{d x} (9 x ^ {4} + 6 x ^ {2} + 1) = 3 6 x ^ {3} + 1 2 x.
$$

The derivative of the composite function $f(g(x))$ at x is the derivative of f at $g(x)$ times the derivative of g at x. This is known as the Chain Rule (Figure 3.27). 

![[edd9a756171b6ed91f0dc5635ad2e658d8c4021a24aa78c6ed27faf72f7cdac3.jpg|image]]



FIGURE 3.27 Rates of change multiply: The derivative of $f \circ g$ at x is the derivative of f at $g(x)$ times the derivative of g at x.


THEOREM 2—The Chain Rule If $f(u)$ is differentiable at the point $u = g(x)$ and $g(x)$ is differentiable at $x$ , then the composite function $(f \circ g)(x) = f(g(x))$ is differentiable at $x$ , and 

$$
(f \circ g) ^ {\prime} (x) = f ^ {\prime} (g (x)) \cdot g ^ {\prime} (x).
$$

In Leibniz's notation, if $y = f(u)$ and $u = g(x)$ , then 

$$
{\frac {d y}{d x}} = {\frac {d y}{d u}} \cdot {\frac {d u}{d x}},
$$

where $dy / du$ is evaluated at $u = g(x)$ . 

A Proof of One Case of the Chain Rule: Let $\Delta u$ be the change in $u$ when $x$ changes by $\Delta x$ , so that 

$$
\Delta u = g (x + \Delta x) - g (x).
$$

Then the corresponding change in $y$ is 

$$
\Delta y = f (u + \Delta u) - f (u).
$$

If $\Delta u \neq 0$ , we can write the fraction $\Delta y / \Delta x$ as the product 

$$
{\frac {\Delta y}{\Delta x}} = {\frac {\Delta y}{\Delta u}} \cdot {\frac {\Delta u}{\Delta x}}\tag{1}
$$

and take the limit as $\Delta x \rightarrow 0$ : 

$$
\begin{array}{l}\frac {d y}{d x} = \lim _ {\Delta x \rightarrow 0} \frac {\Delta y}{\Delta x}\\= \lim _ {\Delta x \rightarrow 0} \frac {\Delta y}{\Delta u} \cdot \frac {\Delta u}{\Delta x}\\= \lim _ {\Delta x \rightarrow 0} \frac {\Delta y}{\Delta u} \cdot \lim _ {\Delta x \rightarrow 0} \frac {\Delta u}{\Delta x} \quad (\text { Note   that } \Delta u \rightarrow 0 \text { as } \Delta x \rightarrow 0\\= \lim _ {\Delta u \rightarrow 0} \frac {\Delta y}{\Delta u} \cdot \lim _ {\Delta x \rightarrow 0} \frac {\Delta u}{\Delta x}\\= \frac {d y}{d u} \cdot \frac {d u}{d x}.\end{array}
$$

The problem with this argument is that if the function $g(x)$ oscillates rapidly near x, then $\Delta u$ can be zero even when $\Delta x \neq 0$ , so the cancelation of $\Delta u$ in Equation (1) would be invalid. A complete proof requires a different approach that avoids this problem, and we give one such proof in Section 3.11. 

**EXAMPLE 2** An object moves along the x-axis so that its position at any time $t \geq 0$ is given by $x(t) = \cos(t^{2} + 1)$ . Find the velocity of the object as a function of t. 

**Solution** We know that the velocity is dx/dt. In this instance, x is a composition of two functions: $x = \cos(u)$ and $u = t^{2} + 1$ . We have 

$$
\frac {d y}{d x} = f ^ {\prime} (g (x)) \cdot g ^ {\prime} (x)
$$

$$
{\frac {d}{d x}} f (u) = f ^ {\prime} (u) {\frac {d u}{d x}}
$$

$$
{\frac {d y}{d x}} = {\frac {d y}{d u}} \cdot {\frac {d u}{d x}}
$$

$$
(f \circ g) ^ {\prime} (x) = f ^ {\prime} (g (x)) \cdot g ^ {\prime} (x)
$$

Ways to Write the Chain Rule 

By the Chain Rule, 

$$
\begin{array}{l l} \frac {d x}{d u} = - \sin (u) & x = \cos (u) \\ \frac {d u}{d t} = 2 t. & u = t ^ {2} + 1 \end{array}
$$

$$
\begin{array}{r l} \frac {d x}{d t} & = \frac {d x}{d u} \cdot \frac {d u}{d t} \\ & = - \sin (u) \cdot 2 t \\ & = - \sin (t ^ {2} + 1) \cdot 2 t \\ & = - 2 t \sin (t ^ {2} + 1). \end{array}
$$

"Outside-Inside" Rule 

A difficulty with the Leibniz notation is that it doesn't state specifically where the derivatives in the Chain Rule are supposed to be evaluated. So it sometimes helps to write the Chain Rule using functional notation. If $y = f(g(x))$ , then 

$$
\frac {d y}{d x} = f ^ {\prime} (g (x)) \cdot g ^ {\prime} (x).
$$

In words, differentiate the “outside” function f and evaluate this derivative at the “inside” function $g(x)$ left alone; then multiply by the derivative of the “inside function.” 

**EXAMPLE 3** Differentiate $\sin(x^{2} + e^{x})$ with respect to x. 

**Solution** We apply the Chain Rule directly and find 

$$
\frac {d}{d x} \sin (\underbrace {x ^ {2} + e ^ {x}} _ {\text { inside }}) = \cos (\underbrace {x ^ {2} + e ^ {x}} _ {\text { inside   left   alone }}) \cdot (\underbrace {2 x + e ^ {x}} _ {\text { derivative   of   the   inside }}).
$$

## **EXAMPLE 4** Differentiate $y = e^{\cos x}$ .

**Solution** Here the inside function is $u = g(x) = \cos x$ and the outside function is the exponential function $f(x) = e^{x}$ . Applying the Chain Rule, we get 

$$
\frac {d y}{d x} = \frac {d}{d x} (e ^ {\cos x}) = e ^ {\cos x} \frac {d}{d x} (\cos x) = e ^ {\cos x} (- \sin x) = - e ^ {\cos x} \sin x.
$$

Generalizing Example 4, we see that the Chain Rule gives the formula 

$$
{\frac {d}{d x}} e ^ {u} = e ^ {u} {\frac {d u}{d x}}.
$$

For example, 

$$
\frac {d}{d x} \left(e ^ {k x}\right) = e ^ {k x} \cdot \frac {d}{d x} (k x) = k e ^ {k x}, \quad \text { for   any   constant } k
$$

and 

$$
\frac {d}{d x} \left(e ^ {x ^ {2}}\right) = e ^ {x ^ {2}} \cdot \frac {d}{d x} \left(x ^ {2}\right) = 2 x e ^ {x ^ {2}}.
$$

## Repeated Use of the Chain Rule

We sometimes have to use the Chain Rule two or more times to find a derivative. 

## HISTORICAL BIOGRAPHY

Johann Bernoulli (1667–1748) 

Johann Bernoulli was born in Switzerland and attended the University of Basel. His doctoral dissertation was in mathematics despite its medical title, which was used to hide his mathematical work from his father who wanted Johann to become a doctor. 

To know more, visit the companion Website. 

## **EXAMPLE 5** Find the derivative of $g(t) = \tan(5 - \sin 2t)$ .

**Solution** Notice here that the tangent is a function of $5 - \sin 2t$ , whereas the sine is a function of 2t, which is itself a function of t. Therefore, by the Chain Rule, 

$$
\begin{array}{l l} g ^ {\prime} (t) = \frac {d}{d t} \tan (5 - \sin 2 t) \\ = \sec^ {2} (5 - \sin 2 t) \cdot \frac {d}{d t} (5 - \sin 2 t) & \text { Derivative   of } \tan u \text { with } \\ & u = 5 - \sin 2 t \\ = \sec^ {2} (5 - \sin 2 t) \cdot \left(0 - \cos 2 t \cdot \frac {d}{d t} (2 t)\right) & \text { Derivative   of } - \sin u \text { with } \\ & u = 2 t \\ = \sec^ {2} (5 - \sin 2 t) \cdot (- \cos 2 t) \cdot 2 \\ = - 2 (\cos 2 t) \sec^ {2} (5 - \sin 2 t). \end{array}
$$

The Chain Rule with Powers of a Function 

If n is any real number and f is a power function, $f(u) = u^{n}$ , the Power Rule tells us that $f'(u) = nu^{n-1}$ . If u is a differentiable function of x, then we can use the Chain Rule to extend this to the Power Chain Rule: 

$$
\frac {d}{d x} (u ^ {n}) = n u ^ {n - 1} \frac {d u}{d x}. \quad \frac {d}{d u} (u ^ {n}) = n u ^ {n - 1}
$$

**EXAMPLE 6** The Power Chain Rule simplifies computing the derivative of a power of an expression. 

$$
\begin{array}{r l} \frac {d}{d x} (5 x ^ {3} - x ^ {4}) ^ {7} & = 7 (5 x ^ {3} - x ^ {4}) ^ {6} \frac {d}{d x} (5 x ^ {3} - x ^ {4}) \\ & = 7 (5 x ^ {3} - x ^ {4}) ^ {6} (1 5 x ^ {2} - 4 x ^ {3}) \end{array} \quad \begin{array}{l} \text { Power   Chain   Rule   with } \\ u = 5 x ^ {3} - x ^ {4}, n = 7 \end{array}\tag{a}
$$

$$
\begin{array}{l} \text {(b)} \frac {d}{d x} \left(\frac {1}{3 x - 2}\right) = \frac {d}{d x} (3 x - 2) ^ {- 1} \\ \quad = - 1 (3 x - 2) ^ {- 2} \frac {d}{d x} (3 x - 2) \\ \quad = - 1 (3 x - 2) ^ {- 2} (3) \\ \quad = - \frac {3}{(3 x - 2) ^ {2}} \end{array} \quad \text { Power   Chain   Rule   with } u = 3 x - 2, n = - 1
$$

In part (b) we could also find the derivative with the Quotient Rule. 

$$
\begin{array}{r l} \text {(c)} & \frac {d}{d x} (\sin^ {5} x) = 5 \sin^ {4} x \cdot \frac {d}{d x} \sin x \\ & = 5 \sin^ {4} x \cos x \end{array}
$$

Power Chain Rule with $u = \sin x$ , n = 5, 

because $\sin^n x$ means $(\sin x)^n$ , $n \neq -1$ 

$$
\begin{array}{l} \text {(d)} \frac {d}{d x} \left(e ^ {\sqrt {3 x + 1}}\right) = e ^ {\sqrt {3 x + 1}} \cdot \frac {d}{d x} \left(\sqrt {3 x + 1}\right) \\ = e ^ {\sqrt {3 x + 1}} \cdot \frac {1}{2} (3 x + 1) ^ {- 1 / 2} \cdot 3 \\ = \frac {3}{2 \sqrt {3 x + 1}} e ^ {\sqrt {3 x + 1}} \end{array} \quad \text { Power   Chain   Rule   with } u = 3 x + 1, n = 1 / 2
$$

**EXAMPLE 7** In Example 4 of Section 3.2 we saw that the absolute value function $y = |x|$ is not differentiable at $x = 0$ . However, the function is differentiable at all other real numbers, as we now show. Since $|x| = \sqrt{x^2}$ , we can derive the following formula, which gives an alternative to the more direct analysis seen before. 

Derivative of the Absolute Value Function 

$$
\begin{array}{r l} \frac {d}{d x} (| x |) & = \frac {x}{| x |}, \quad x \neq 0 \\ & = \left\{ \begin{array}{l l} 1, & x > 0 \\ - 1, & x <   0 \end{array} \right. \end{array}
$$

$$
\begin{array}{l l} \frac {d}{d x} (| x |) = \frac {d}{d x} \sqrt {x ^ {2}} \\ \quad = \frac {1}{2 \sqrt {x ^ {2}}} \cdot \frac {d}{d x} (x ^ {2}) & \text { Power   Chain   Rule   with } \\ \quad = \frac {1}{2 | x |} \cdot 2 x & \sqrt {x ^ {2}} = | x | \\ \quad = \frac {x}{| x |}, \quad x \neq 0. \end{array}
$$

**EXAMPLE 8** Show that the slope of every line tangent to the curve $y = 1 / (1 - 2x)^3$ is positive. 

**Solution** We find the derivative: 

$$
\begin{array}{l} \frac {d y}{d x} = \frac {d}{d x} (1 - 2 x) ^ {- 3} \\ \quad = - 3 (1 - 2 x) ^ {- 4} \cdot \frac {d}{d x} (1 - 2 x) \quad \text { Power   Chain   Rule   with } u = (1 - 2 x), n = - 3 \\ \quad = - 3 (1 - 2 x) ^ {- 4} \cdot (- 2) \\ \quad = \frac {6}{(1 - 2 x) ^ {4}}. \end{array}
$$

At any point $(x, y)$ on the curve, the denominator is nonzero, and the slope of the tangent line is 

$$
{\frac {d y}{d x}} = {\frac {6}{(1 - 2 x) ^ {4}}},
$$

which is the quotient of two positive numbers. 

**EXAMPLE 9** The formulas for the derivatives of both $\sin x$ and $\cos x$ were obtained under the assumption that x is measured in radians, not degrees. The Chain Rule gives us new insight into the difference between the two. Since $180^{\circ} = \pi$ radians, $x^{\circ} = \pi x / 180$ radians, where $x^{\circ}$ is the size of the angle measured in degrees. 

By the Chain Rule, 

$$
\frac {d}{d x} \sin (x ^ {\circ}) = \frac {d}{d x} \sin \left(\frac {\pi x}{1 8 0}\right) = \frac {\pi}{1 8 0} \cos \left(\frac {\pi x}{1 8 0}\right) = \frac {\pi}{1 8 0} \cos (x ^ {\circ}).
$$

See Figure 3.28. Similarly, the derivative of $\cos (x^{\circ})$ is $-\left(\pi /180\right)\sin (x^{\circ}).$ 

The factor $\pi/180$ would propagate with repeated differentiation, showing an advantage for the use of radian measure in computations. 

![[c854b2a3004fbe4128bfb92954d0bc8f823156756a1656a724cd8201814afd09.jpg|image]]



FIGURE 3.28 The function $\sin (x^{\circ})$ oscillates only $\pi /180$ times as often as $\sin x$ oscillates. Its maximum slope is $\pi /180$ at $x = 0$ (Example 9).


## EXERCISES 3.6

## Derivative Calculations

In Exercises 1–8, given $y = f(u)$ and $u = g(x)$ , find $dy/dx = f'(g(x))g'(x)$ . 

1. $y = 6u - 9, u = (1 / 2)x^4$ 2. $y = 2u^{3}, u = 8x - 1$ 

32. $y = (5 - 2x)^{-3} + \frac{1}{8}\left(\frac{2}{x} + 1\right)^{4}$ 

33. $y = (4x + 3)^{4}(x + 1)^{-3}$ 

3. $y = \sin u,\quad u = 3x + 1$ 

4. $y = \cos u, u = e^{-x}$ 

34. $y = (2x - 5)^{-1}(x^2 - 5x)^6$ 

35. $y = xe^{-x} + e^{x^3}$ 

5. $y = \sqrt{u}, u = \sin x$ 

6. $y = \sin u,\quad u = x - \cos x$ 

36. $y = (1 + 2x)e^{-2x}$ 

37. $y = (x^{2} - 2x + 2)e^{5x / 2}$ 

7. $y = \tan u, u = \pi x^2$ 

38. $y = (9x^{2} - 6x + 2)e^{x^{3}}$ 

8. $y = -\sec u, u = \frac{1}{x} + 7x$ 

In Exercises 9–22, write the function in the form $y = f(u)$ and $u = g(x)$ . Then find dy/dx as a function of x. 

40. $k(x) = x^{2}\sec \left(\frac{1}{x}\right)$ 

9. $y = (2x + 1)^{5}$ 

10. $y = (4 - 3x)^{9}$ 

11. $y = \left(1 - \frac{x}{7}\right)^{-7}$ 

12. $y = \left(\frac{\sqrt{x}}{2} - 1\right)^{-10}$ 

39. $h(x) = x\tan (2\sqrt{x}) + 7$ 

14. $y = \sqrt{3x^2 - 4x + 6}$ 

13. $y = \left(\frac{x^2}{8} + x - \frac{1}{x}\right)^4$ 

15. $y = \sec(\tan x)$ 

16. $y = \cot \left(\pi -\frac{1}{x}\right)$ 

17. $y = \tan^3 x$ 

18. $y = 5\cos^{-4}x$ 

19. $y = e^{-5x}$ 

20. $y = e^{2x / 3}$ 

Find the derivatives of the functions in Exercises 23–50. 

$$
y = e ^ {5 - 7 x}
$$

22. $y = e^{(4\sqrt{x} + x^2)}$ 

42. $g(x) = \frac{\tan 3x}{(x + 7)^{4}}$ 

23. $p = \sqrt{3 - t}$ 

$$
q = \sqrt [ 3 ]{2 r - r ^ {2}}
$$

25. $s = \frac{4}{3\pi}\sin 3t + \frac{4}{5\pi}\cos 5t$ 26. $s = \sin \left(\frac{3\pi t}{2}\right) + \cos \left(\frac{3\pi t}{2}\right)$ 

27. $r = (\csc \theta +\cot \theta)^{-1}$ 

28. $r = 6(\sec \theta -\tan \theta)^{3 / 2}$ 

29. $y = x^{2}\sin^{4}x + x\cos^{-2}x$ 30. $y = \frac{1}{x}\sin^{-5}x - \frac{x}{3}\cos^{3}x$ 

41. $f(x) = \sqrt{7 + x\sec{x}}$ 

31. $y = \frac{1}{18}(3x - 2)^6 + \left(4 - \frac{1}{2x^2}\right)^{-1}$ 

43. $f(\theta) = \left(\frac{\sin\theta}{1 + \cos\theta}\right)^2$ 

45. $r = \sin (\theta^2)\cos (2\theta)$ 

47. $q = \sin \left(\frac{t}{\sqrt{t + 1}}\right)$ 

49. $y = \cos (e^{-\theta^2})$ 

In Exercises 51–70, find dy/dt. 

51. $y = \sin^2 (\pi t - 2)$ 

53. $y = (1 + \cos 2t)^{-4}$ 

55. $y = (t\tan t)^{10}$ 

44. $g(t) = \left(\frac{1 + \sin 3t}{3 - 2t}\right)^{-1}$ 

57. $y = e^{\cos^2 (\pi t - 1)}$ 

59. $y = \left(\frac{t^2}{t^3 - 4t}\right)^3$ 

61. $y = \sin (\cos (2t - 5))$ 

63. $y = \left(1 + \tan^4\left(\frac{t}{12}\right)\right)^3$ 

46. $r = \sec \sqrt{\theta}\tan \left(\frac{1}{\theta}\right)$ 

48. $q = \cot\left(\frac{\sin t}{t}\right)$ 

50. $y = \theta^3 e^{-2\theta}\cos 5\theta$ 

52. $y = \sec^2\pi t$ 

54. $y = (1 + \cot (t / 2))^{-2}$ 

56. $y = (t^{-3 / 4}\sin t)^{4 / 3}$ 

58. $y = (e^{\sin (t / 2)})^3$ 

60. $y = \left(\frac{3t - 4}{5t + 2}\right)^{-5}$ 

62. $y = \cos \left(5\sin \left(\frac{t}{3}\right)\right)$ 

64. $y = \frac{1}{6} (1 + \cos^2 (7t))^3$ 

65. $y = \sqrt{1 + \cos(t^{2})}$ 

$$
6 6. y = 4 \sin (\sqrt {1 + \sqrt {t}})
$$

67. $y = \tan^2 (\sin^3 t)$ 

68. $y = \cos^4 (\sec^2 3t)$ 

69. $y = 3t(2t^{2} - 5)^{4}$ 

70. $y = \sqrt{3t + \sqrt{2 + \sqrt{1 - t}}}$ 

## Second Derivatives

Find $y''$ in Exercises 71-78. 

71. $y = \left(1 + \frac{1}{x}\right)^3$ 

72. $y = (1 - \sqrt{x})^{-1}$ 

73. $y = \frac{1}{9}\cot (3x - 1)$ 

74. $y = 9\tan \left(\frac{x}{3}\right)$ 

75. $y = x(2x + 1)^{4}$ 

76. $y = x^{2}(x^{3} - 1)^{5}$ 

77. $y = e^{x^2} + 5x$ 

78. $y = \sin (x^{2}e^{x})$ 

For each of the following functions, solve both $f'(x) = 0$ and $f''(x) = 0$ for $x$ . 

79. $f(x) = x(x - 4)^{3}$ 

80. $f(x) = \sec^2 x - 2\tan x$ for $0 \leq x \leq 2\pi$ 

## Finding Derivative Values

In Exercises 81–86, find the value of $(f \circ g)'$ at the given value of x. 

81. $f(u) = u^{5} + 1,\quad u = g(x) = \sqrt{x},\quad x = 1$ 

82. $f(u) = 1 - \frac{1}{u}, \quad u = g(x) = \frac{1}{1 - x}, \quad x = -1$ 

83. $f(u) = \cot \frac{\pi u}{10}, u = g(x) = 5\sqrt{x}, x = 1$ 

84. $f(u) = u + \frac{1}{\cos^2u}, u = g(x) = \pi x, x = 1 / 4$ 

85. $f(u) = \frac{2u}{u^2 + 1}, u = g(x) = 10x^2 + x + 1, x = 0$ 

86. $f(u) = \left(\frac{u - 1}{u + 1}\right)^2, u = g(x) = \frac{1}{x^2} - 1, x = -1$ 

87. Assume that $f'(3) = -1$ , $g'(2) = 5$ , $g(2) = 3$ , and $y = f(g(x))$ . What is $y'$ at $x = 2$ ? 

88. If $r = \sin(f(t))$ , $f(0) = \pi/3$ , and $f'(0) = 4$ , then what is $dr/dt$ at $t = 0$ ? 

89. Suppose that functions $f$ and $g$ and their derivatives with respect to $x$ have the following values at $x = 2$ and $x = 3$ . 

<table><tr><td>x</td><td>f(x)</td><td>g(x)</td><td>f&#x27;(x)</td><td>g&#x27;(x)</td></tr><tr><td>2</td><td>8</td><td>2</td><td>1/3</td><td>-3</td></tr><tr><td>3</td><td>3</td><td>-4</td><td>2π</td><td>5</td></tr></table>

Find the derivatives with respect to $x$ of the following combinations at the given value of $x$ . 

a. $2f(x)$ , x = 2 

b. $f(x) + g(x)$ , x = 3 

c. $f(x) \cdot g(x)$ , x = 3 

d. $f(x) / g(x)$ ， $x = 2$ 

e. $f(g(x)), \quad x = 2$ 

f. $\sqrt{f(x)},\quad x=2$ 

g. $1 / g^{2}(x), x = 3$ 

h. $\sqrt{f^2(x) + g^2(x)}, x = 2$ 

90. Suppose that the functions $f$ and $g$ and their derivatives with respect to $x$ have the following values at $x = 0$ and $x = 1$ . 

<table><tr><td>x</td><td>f(x)</td><td>g(x)</td><td>f&#x27;(x)</td><td>g&#x27;(x)</td></tr><tr><td>0</td><td>1</td><td>1</td><td>5</td><td>1/3</td></tr><tr><td>1</td><td>3</td><td>-4</td><td>-1/3</td><td>-8/3</td></tr></table>

Find the derivatives with respect to x of the following combinations at the given value of x. 

a. $5f(x) - g(x), x = 1$ b. $f(x)g^{3}(x), x = 0$ 

c. $\frac{f(x)}{g(x)+1},\quad x=1$ 

d. $f(g(x)), x = 0$ 

e. $g(f(x)), x = 0$ 

f. $(x^{11} + f(x))^{-2}$ , $x = 1$ 

g. $f(x + g(x)), x = 0$ 

91. Find $ds / dt$ when $\theta = 3\pi / 2$ if $s = \cos \theta$ and $d\theta / dt = 5$ . 

92. Find dy/dt when x = 1 if $y = x^{2} + 7x - 5$ and dx/dt = 1/3. 

## Theory and Examples

What happens if you can write a function as a composition in different ways? Do you get the same derivative each time? The Chain Rule says you should. Try it with the functions in Exercises 93 and 94. 

93. Find $dy / dx$ if $y = x$ by using the Chain Rule with $y$ as a composition of 

a. $y = (u / 5) + 7$ and $u = 5x - 35$ 

b. $y = 1 + (1/u)$ and $u = 1/(x - 1)$ . 

94. Find $dy / dx$ if $y = x^{3/2}$ by using the Chain Rule with $y$ as a composition of 

a. $y = u^3$ and $u = \sqrt{x}$ 

b. $y = \sqrt{u}$ and $u = x^{3}$ . 

95. Find the tangent line to $y = \left((x - 1)/(x + 1)\right)^{2}$ at x = 0. 

96. Find the tangent line to $y = \sqrt{x^2 - x + 7}$ at $x = 2$ . 

97. a. Find the tangent line to the curve $y = 2 \tan(\pi x / 4)$ at $x = 1$ . 

b. Slopes on a tangent curve What is the smallest value the slope of the curve can ever have on the interval $-2 < x < 2$ ? Give reasons for your answer. 

## 98. Slopes on sine curves

a. Find equations for the tangent lines to the curves $y = \sin 2x$ and $y = -\sin(x/2)$ at the origin. Is there anything special about how the tangent lines are related? Give reasons for your answer. 

b. Can anything be said about the tangent lines to the curves $y = \sin mx$ and $y = -\sin (x / m)$ at the origin ( $m$ a constant $\neq 0$ )? Give reasons for your answer. 

c. For a given $m$ , what are the largest values the slopes of the curves $y = \sin mx$ and $y = -\sin (x / m)$ can ever have? Give reasons for your answer. 

d. The function $y = \sin x$ completes one period on the interval $[0, 2\pi]$ , the function $y = \sin 2x$ completes two periods, the function $y = \sin (x / 2)$ completes half a period, and so on. Is there any relation between the number of periods $y = \sin mx$ completes on $[0, 2\pi]$ and the slope of the curve $y = \sin mx$ at the origin? Give reasons for your answer. 

99. Running machinery too fast Suppose that a piston is moving straight up and down and that its position at time t seconds is 

$$
s = A \cos (2 \pi b t),
$$

with $A$ and $b$ positive. The value of $A$ is the amplitude of the motion, and $b$ is the frequency (number of times the piston moves up and down each second). What effect does doubling the frequency have on the piston's velocity, acceleration, and jerk? (Once you find out, you will know why some machinery breaks when you run it too fast.) 

100. Temperatures in Fairbanks, Alaska The graph in the accompanying figure shows the average Celsius temperature in Fairbanks, Alaska, during a typical 365-day year. The equation that approximates the temperature on day x is 

$$
y = 2 0 \sin \left[ \frac {2 \pi}{3 6 5} (x - 1 0 1) \right] - 4
$$

and is graphed in the accompanying figure. 

a. On what day is the temperature increasing the fastest? 

b. About how many degrees per day is the temperature increasing when it is increasing at its fastest? 

![[1700e1724726d2e22148fadaeca49d495b20eda8e7c41633a322c0c05362f20e.jpg|image]]


101. Particle motion The position of a particle moving along a coordinate line is $s = \sqrt{1 + 4t}$ , with s in meters and t in seconds. Find the particle's velocity and acceleration at t = 6 s. 

102. Constant acceleration Suppose that the velocity of a falling body is $v = k\sqrt{s} \, \mathrm{m/s}$ ( $k$ a constant) at the instant the body has fallen $s$ meters from its starting point. Show that the body's acceleration is constant. 

103. Falling meteorite The velocity of a heavy meteorite entering Earth's atmosphere is inversely proportional to $\sqrt{s}$ when it is $s$ km from Earth's center. Show that the meteorite's acceleration is inversely proportional to $s^2$ . 

104. Particle acceleration A particle moves along the $x$ -axis with velocity $dx/dt = f(x)$ . Show that the particle's acceleration is $f(x)f'(x)$ . 

105. Temperature and the period of a pendulum For oscillations of small amplitude (short swings), we may safely model the relationship between the period T and the length L of a simple pendulum with the equation 

$$
T = 2 \pi \sqrt {\frac {L}{g}},
$$

where g is the constant acceleration of gravity at the pendulum's location. If we measure g in centimeters per second squared, we measure L in centimeters and T in seconds. If the pendulum is made of metal, its length will vary with temperature, either increasing or decreasing at a rate that is roughly proportional to L. In symbols, with u being temperature and k the proportionality constant, 

$$
\frac {d L}{d u} = k L.
$$

Assuming this to be the case, show that the rate at which the period changes with respect to temperature is kT/2. 

106. Chain Rule Suppose that $f(x) = x^2$ and $g(x) = |x|$ . Then the compositions 

$$
(f \circ g) (x) = | x | ^ {2} = x ^ {2} \quad \text { and } \quad (g \circ f) (x) = | x ^ {2} | = x ^ {2}
$$

are both differentiable at x = 0 even though g itself is not differentiable at x = 0. Does this contradict the Chain Rule? Explain. 

107. The derivative of $\sin 2x$ Graph the function $y = 2\cos 2x$ for $-2 \leq x \leq 3.5$ . Then, on the same screen, graph 

$$
y = \frac {\sin 2 (x + h) - \sin 2 x}{h}
$$

for h = 1.0, 0.5, and 0.2. Experiment with other values of h, including negative values. What do you see happening as $h \rightarrow 0$ ? Explain this behavior. 

108. The derivative of $\cos(x^{2})$ Graph $y = -2x \sin(x^{2})$ for $-2 \leq x \leq 3$ . Then, on the same screen, graph 

$$
y = \frac {\cos ((x + h) ^ {2}) - \cos (x ^ {2})}{h}
$$

for $h = 1.0, 0.7$ , and 0.3. Experiment with other values of $h$ . What do you see happening as $h \to 0$ ? Explain this behavior. 

Using the Chain Rule, show that the Power Rule $(d/dx)x^{n}=nx^{n-1}$ holds for the functions $x^{n}$ in Exercises 109 and 110. 

$$
\mathbf {1 0 9 .} x ^ {1 / 4} = \sqrt {\sqrt {x}} \quad \mathbf {1 1 0 .} x ^ {3 / 4} = \sqrt {x \sqrt {x}}
$$

111. Consider the function 

$$
f (x) = \left\{ \begin{array}{c c} x \sin \Bigl (\frac {1}{x} \Bigr), & x > 0 \\ 0, & x \leq 0 \end{array} \right.
$$

a. Show that $f$ is continuous at $x = 0$ . 

b. Determine $f'$ for $x \neq 0$ . 

c. Show that f is not differentiable at x = 0. 

112. Consider the function 

$$
f (x) = \left\{ \begin{array}{c c} x ^ {2} \cos \left(\frac {2}{x}\right), & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

a. Show that $f$ is continuous at $x = 0$ . 

b. Determine $f'$ for $x \neq 0$ . 

c. Show that f is not differentiable at x = 0. 

d. Show that $f'$ is not continuous at x = 0. 

113. Verify each of the following statements. 

a. If $f$ is even, then $f'$ is odd. 

b. If $f$ is odd, then $f'$ is even. 

## COMPUTER EXPLORATIONS

Trigonometric Polynomials 

114. As the accompanying figure shows, the trigonometric “polynomial” 

$$
\begin{array}{r l} s = & f (t) = 0. 7 8 5 4 0 - 0. 6 3 6 6 2 \cos 2 t - 0. 0 7 0 7 4 \cos 6 t \\ & - 0. 0 2 5 4 6 \cos 1 0 t - 0. 0 1 2 9 9 \cos 1 4 t \end{array}
$$

gives a good approximation of the sawtooth function $s = g(t)$ on the interval $[-\pi, \pi]$ . How well does the derivative of f approximate the derivative of g at the points where dg/dt is defined? To find out, carry out the following steps. 

a. Graph dg/dt (where defined) over $[-π, π]$ . 

b. Find $df / dt$ . 

c. Graph df/dt. Where does the approximation of dg/dt by df/dt seem to be best? Least good? Approximations by trigonometric polynomials are important in the theories of heat and oscillation, but we must not expect too much of them, as we see in the next exercise. 

![[a01661078ac44e155712168b746677f80e50c8655adcdf291767f3a3aba4ff5d.jpg|image]]


115. (Continuation of Exercise 114.) In Exercise 114, the trigonometric polynomial $f(t)$ that approximated the sawtooth function $g(t)$ on $[-\pi, \pi]$ had a derivative that approximated the derivative of the sawtooth function. It is possible, however, for a trigonometric polynomial to approximate a function in a reasonable way without its derivative approximating the function's derivative at all well. As a case in point, the trigonometric “polynomial” 

$$
\begin{array}{r l} s = h (t) & = 1. 2 7 3 2 \sin 2 t + 0. 4 2 4 4 \sin 6 t + 0. 2 5 4 6 5 \sin 1 0 t \\ & + 0. 1 8 1 8 9 \sin 1 4 t + 0. 1 4 1 4 7 \sin 1 8 t \end{array}
$$

graphed in the accompanying figure approximates the step function $s = k(t)$ shown there. Yet the derivative of h is nothing like the derivative of k. 

![[5c6ef48a3038666089f659b828a813e3e9748eaec986d2387200d6099304bb32.jpg|image]]


a. Graph dk/dt (where defined) over $[-π, π]$ . 

b. Find dh/dt. 

c. Graph $dh/dt$ to see how badly the graph fits the graph of $dk/dt$ . Comment on what you see. 

## 3.7 Implicit Differentiation

![[e91813475fd69ada1cde2695b8946c53084c25bbac2300c24005758af1740c20.jpg|image]]


Most of the functions we have dealt with so far have been described by an equation of the form $y = f(x)$ that expresses y explicitly in terms of the variable x. We have learned rules for differentiating functions defined in this way. A different situation occurs when we encounter equations like 

$$
x ^ {3} + y ^ {3} - 9 x y = 0, \quad y ^ {2} - x = 0, \quad \text { or } \quad x ^ {2} + y ^ {2} - 2 5 = 0.
$$

(See Figures 3.29, 3.30, and 3.31.) Each of these equations defines an implicit relation between the variables x and y, meaning that a value of x may determine more than one value of y, even though we do not have a simple formula for the y-values. In some cases we may be able to solve such an equation for y as an explicit function (or even several functions) of x. When we cannot put an equation $F(x, y) = 0$ in the form $y = f(x)$ to differentiate it in the usual way, we may still be able to find dy/dx by implicit differentiation. This section describes the technique. 

$x^{3} + y^{3} - 9xy = 0$ is not the graph of any one function of $x$ . The curve can, however, be divided into separate arcs that are the graphs of functions of $x$ . This particular curve, called a folium, dates to Descartes in 1638. 

## Implicitly Defined Functions

We begin with examples involving familiar equations that we can solve for y as a function of x and then calculate dy/dx in the usual way. Then we differentiate the equations implicitly, and find the derivative. We will see that the two methods give the same answer. Following the examples, we summarize the steps involved in the new method. In the examples and exercises, it is always assumed that the given equation determines y implicitly as a differentiable function of x so that dy/dx exists. 

$$
\text {   **EXAMPLE   1**   } \quad \text {   Find   } d y / d x \text {   if   } y ^ {2} = x.
$$

**Solution** The equation $y^{2} = x$ defines two differentiable functions of x that we can actually find, namely $y_{1} = \sqrt{x}$ and $y_{2} = -\sqrt{x}$ (Figure 3.30). We know how to calculate the derivative of each of these for x > 0: 

$$
\frac {d y _ {1}}{d x} = \frac {1}{2 \sqrt {x}} \quad \text { and } \quad \frac {d y _ {2}}{d x} = - \frac {1}{2 \sqrt {x}}.
$$

![[6b2346088f6dccc003bcc416632c7407197a6d0aca38a02c0baf9edcd68183e9.jpg|image]]



FIGURE 3.30 The equation $y^{2} - x = 0$ , or $y^{2} = x$ as it is usually written, defines two differentiable functions of x on the interval x > 0. Example 1 shows how to find the derivatives of these functions without solving the equation $y^{2} = x$ for y.


![[b144e98c66697d9fcaaefc0e5b04866d6ddb58b576dfe056757add0ab3de8377.jpg|image]]



FIGURE 3.31 The circle combines the graphs of two functions. The graph of $y_{2}$ is the lower semicircle and passes through $(3, -4)$ .


But suppose that we knew only that the equation $y^{2} = x$ defined $y$ as one or more differentiable functions of $x$ for $x > 0$ without knowing exactly what these functions were. Can we still find $dy / dx$ ? 

The answer is yes. To find $dy / dx$ , we simply differentiate both sides of the equation $y^2 = x$ with respect to $x$ , treating $y = f(x)$ as a differentiable function of $x$ : 

$$
\begin{array}{l} y ^ {2} = x \\ 2 y \frac {d y}{d x} = 1 \\ \frac {d y}{d x} = \frac {1}{2 y}. \end{array} \quad \text { The   Chain   Rule   gives } \frac {d}{d x} (y ^ {2}) = \frac {d}{d x} [ f (x) ] ^ {2} = 2 f (x) f ^ {\prime} (x) = 2 y \frac {d y}{d x}.
$$

This one formula gives the derivatives we calculated for both explicit solutions $y_{1} = \sqrt{x}$ and $y_{2} = -\sqrt{x}$ : 

$$
\frac {d y _ {1}}{d x} = \frac {1}{2 y _ {1}} = \frac {1}{2 \sqrt {x}} \quad \text { and } \quad \frac {d y _ {2}}{d x} = \frac {1}{2 y _ {2}} = \frac {1}{2 (- \sqrt {x})} = - \frac {1}{2 \sqrt {x}}.
$$

**EXAMPLE 2** Find the slope of the circle $x^{2} + y^{2} = 25$ at the point $(3, -4)$ . 

**Solution** The circle is not the graph of a single function of x. Rather, it is the combined graphs of two differentiable functions, $y_{1} = \sqrt{25 - x^{2}}$ and $y_{2} = -\sqrt{25 - x^{2}}$ (Figure 3.31). The point $(3, -4)$ lies on the graph of $y_{2}$ , so we can find the slope by calculating the derivative directly, using the Power Chain Rule: 

$$
\left. \frac {d y _ {2}}{d x} \right| _ {x = 3} = - \frac {- 2 x}{2 \sqrt {2 5 - x ^ {2}}} \Bigg | _ {x = 3} = - \frac {- 6}{2 \sqrt {2 5 - 9}} = \frac {3}{4}. \quad \begin{array}{l} \frac {d}{d x} \left(- (2 5 - x ^ {2}) ^ {1 / 2}\right) = \\ - \frac {1}{2} (2 5 - x ^ {2}) ^ {- 1 / 2} (- 2 x) \end{array}
$$

We can solve this problem more easily by differentiating the given equation of the circle implicitly with respect to $x$ : 

$$
\begin{array}{r l} \frac {d}{d x} (x ^ {2}) + \frac {d}{d x} (y ^ {2}) & = \frac {d}{d x} (2 5) \\ 2 x + 2 y \frac {d y}{d x} & = 0 \\ \frac {d y}{d x} & = - \frac {x}{y}. \end{array} \quad \text {   See   Example   1.   }
$$

The slope at $(3, -4)$ is $-\frac{x}{y}\bigg|_{(3, -4)} = -\frac{3}{-4} = \frac{3}{4}$ . 

Notice that unlike the slope formula for $dy_{2}/dx$ , which applies only to points below the x-axis, the formula $dy/dx = -x/y$ applies everywhere the circle has a slope—that is, at all circle points $(x, y)$ where $y \neq 0$ . Notice also that the derivative involves both variables x and y, not just the independent variable x. 

To calculate the derivatives of other implicitly defined functions, we proceed as in Examples 1 and 2: We treat y as a differentiable implicit function of x and apply the usual rules to differentiate both sides of the defining equation. 

## Implicit Differentiation

1. Differentiate both sides of the equation with respect to x, treating y as a differentiable function of x. 

2. Collect the terms with dy/dx on one side of the equation and solve for dy/dx. 

![[9368c12de1bfbbdbbb99adebd1d95c4e82540f50c0813801c691db5a669c8934.jpg|image]]



FIGURE 3.32 The graph of the equation in Example 3.


**EXAMPLE 3** Find dy/dx if $y^{2} = x^{2} + \sin xy$ (Figure 3.32). 

**Solution** We differentiate the equation implicitly. 

$$
\begin{array}{r l r} y ^ {2} & = x ^ {2} + \sin x y \\ \frac {d}{d x} (y ^ {2}) & = \frac {d}{d x} (x ^ {2}) + \frac {d}{d x} (\sin x y) & \text { Differentiate   both   sides   with } \\ 2 y \frac {d y}{d x} & = 2 x + (\cos x y) \frac {d}{d x} (x y) & \text { respect   to } x \dots \\ 2 y \frac {d y}{d x} & = 2 x + (\cos x y) \left(y + x \frac {d y}{d x}\right) & \text { ...   treating   y   as   a   function   of } \\ 2 y \frac {d y}{d x} - (\cos x y) \left(x \frac {d y}{d x}\right) & = 2 x + (\cos x y) y & \text { Treat   xy   as   a   product. } \\ (2 y - x \cos x y) \frac {d y}{d x} & = 2 x + y \cos x y & \text { Collect   terms   with } d y / d x. \\ \frac {d y}{d x} & = \frac {2 x + y \cos x y}{2 y - x \cos x y} & \text { Solve   for } d y / d x. \end{array}
$$

Notice that the formula for dy/dx applies everywhere that the implicitly defined curve has a slope. Notice again that the derivative involves both variables x and y, not just the independent variable x. 

## Derivatives of Higher Order

Implicit differentiation can also be used to find higher derivatives. 

**EXAMPLE 4** Find $d^{2}y/dx^{2}$ if $2x^{3}-3y^{2}=8$ . 

**Solution** To start, we differentiate both sides of the equation with respect to x in order to find $y' = dy/dx$ . 

$$
\begin{array}{r l} \frac {d}{d x} (2 x ^ {3} - 3 y ^ {2}) & = \frac {d}{d x} (8) \\ 6 x ^ {2} - 6 y y ^ {\prime} & = 0 \\ y ^ {\prime} & = \frac {x ^ {2}}{y}, \quad \text {   when   } y \neq 0 \quad \text {   Solve   for   } y ^ {\prime}. \end{array} \tag {Treatyasafunctionofx.}
$$

We now apply the Quotient Rule to find $y''$ . 

![[565b84f7f61c8091da90acd93f7c151e397468d7aad882411d17e78117b67f7b.jpg|image]]



FIGURE 3.33 The profile of a lens, showing the bending (refraction) of a ray of light as it passes through the lens surface.


$$
y ^ {\prime \prime} = \frac {d}{d x} \left(\frac {x ^ {2}}{y}\right) = \frac {2 x y - x ^ {2} y ^ {\prime}}{y ^ {2}} = \frac {2 x}{y} - \frac {x ^ {2}}{y ^ {2}} \cdot y ^ {\prime}
$$

Finally, we substitute $y' = x^{2}/y$ to express $y''$ in terms of x and y. 

$$
y ^ {\prime \prime} = \frac {2 x}{y} - \frac {x ^ {2}}{y ^ {2}} \left(\frac {x ^ {2}}{y}\right) = \frac {2 x}{y} - \frac {x ^ {4}}{y ^ {3}}, \quad \text { when } y \neq 0
$$

## Lenses, Tangent Lines, and Normal Lines

In the law that describes how light changes direction as it enters a lens, the important angles are the angles the light makes with the line perpendicular to the surface of the lens at the point of entry (angles A and B in Figure 3.33). This line is called the normal line to the surface at the point of entry. In a profile view of a lens like the one in Figure 3.33, the normal line is the line perpendicular (also said to be orthogonal) to the tangent line of the profile curve at the point of entry. 

![[d7d79c667fdb2c49b32f606ef20e1cadbf6087272d63f7834ed28b5e5909b6c0.jpg|image]]



FIGURE 3.34 Example 5 shows how to find equations for the tangent line and normal line to the folium of Descartes at (2, 4).


**EXAMPLE 5** Show that the point $(2,4)$ lies on the curve $x^{3} + y^{3} - 9xy = 0$ . Then find the tangent line and normal line to the curve there (Figure 3.34). 

**Solution** The point $(2,4)$ lies on the curve because its coordinates satisfy the equation given for the curve: $2^{3} + 4^{3} - 9(2)(4) = 8 + 64 - 72 = 0$ . 

To find the slope of the curve at (2,4), we first use implicit differentiation to find a formula for $dy / dx$ : 

$$
x ^ {3} + y ^ {3} - 9 x y = 0
$$

$$
\frac {d}{d x} \left(x ^ {3}\right) + \frac {d}{d x} \left(y ^ {3}\right) - \frac {d}{d x} (9 x y) = \frac {d}{d x} (0)
$$

$$
3 x ^ {2} + 3 y ^ {2} \frac {d y}{d x} - 9 \left(x \frac {d y}{d x} + \frac {d x}{d x} y\right) = 0
$$

Differentiate both sides with respect to $x$ . 

$$
(3 y ^ {2} - 9 x) \frac {d y}{d x} + 3 x ^ {2} - 9 y = 0
$$

Treat xy as a product and y as a function of x. 

$$
3 (y ^ {2} - 3 x) \frac {d y}{d x} = 9 y - 3 x ^ {2}
$$

$$
{\frac {d y}{d x}} = {\frac {3 y - x ^ {2}}{y ^ {2} - 3 x}}.
$$

Solve for dy/dx. 

We then evaluate the derivative at $(x,y) = (2,4)$ : 

$$
\left. \frac {d y}{d x} \right| _ {(2, 4)} = \left. \frac {3 y - x ^ {2}}{y ^ {2} - 3 x} \right| _ {(2, 4)} = \frac {3 (4) - 2 ^ {2}}{4 ^ {2} - 3 (2)} = \frac {8}{1 0} = \frac {4}{5}.
$$

The tangent line at $(2,4)$ is the line through $(2,4)$ with slope 4/5: 

$$
y = 4 + \frac {4}{5} (x - 2)
$$

$$
y = \frac {4}{5} x + \frac {1 2}{5}.
$$

The normal line to the curve at $(2,4)$ is the line perpendicular to the tangent line there, the line through $(2,4)$ with slope -5/4: 

$$
y = 4 - \frac {5}{4} (x - 2)
$$

$$
y = - \frac {5}{4} x + \frac {1 3}{2}.
$$

Slopes of two nonvertical perpendicular lines are negative reciprocals of each other (see Appendix A.4). 

## EXERCISES

## Differentiating Implicitly

Use implicit differentiation to find $dy / dx$ in Exercises 1-16. 

1. $x^{2}y + xy^{2} = 6$ 

2. $x^{3} + y^{3} = 18xy$ 

3. $2xy + y^{2} = x + y$ 

18. $r - 2\sqrt{\theta} = \frac{3}{2}\theta^{2 / 3} + \frac{4}{3}\theta^{3 / 4}$ 

4. $x^{3} - xy + y^{3} = 1$ 

5. $x^{2}(x - y)^{2} = x^{2} - y^{2}$ 

17. $\theta^{1 / 2} + r^{1 / 2} = 1$ 

Find $dr / d\theta$ in Exercises 17-20. 

20. $\cos r + \cot \theta = e^{r\theta}$ 

6. $(3xy + 7)^{2} = 6y$ 

8. $x^{3} = \frac{2x - y}{x + 3y}$ 

7. $y^{2} = \frac{x - 1}{x + 1}$ 

9. $x = \sec y$ 

10. $xy = \cot (xy)$ 

11. $x + \tan (xy) = 0$ 

19. $\sin (r\theta) = \frac{1}{2}$ 

13. $y \sin \left( \frac{1}{y} \right) = 1 - xy$ 

12. $x^4 + \sin y = x^3 y^2$ 

14. $x\cos (2x + 3y) = y\sin x$ 

15. $e^{2x} = \sin(x + 3y)$ 

Second Derivatives 

In Exercises 21–28, use implicit differentiation to find dy/dx and then $d^{2}y/dx^{2}$ . Write the solutions in terms of x and y only. 

22. $x^{2 / 3} + y^{2 / 3} = 1$ 

21. $x^{2} + y^{2} = 1$ 

16. $e^{x^2 y} = 2x + 2y$ 

24. $y^{2} - 2x = 1 - 2y$ 

23. $y^{2} = e^{x^{2}} + 2x$ 

25. $2\sqrt{y} = x - y$ 

26. $xy + y^{2} = 1$ 

27. $3 + \sin y = y - x^3$ 

28. $\sin y = x\cos y - 2$ 

29. If $x^{3} + y^{3} = 16$ , find the value of $d^{2}y/dx^{2}$ at the point (2, 2). 

30. If $xy + y^{2} = 1$ , find the value of $d^{2}y/dx^{2}$ at the point $(0, -1)$ . 

In Exercises 31 and 32, find the slope of the curve at the given points. 

31. $y^{2} + x^{2} = y^{4} - 2x$ at $(-2,1)$ and $(-2,-1)$ 

32. $(x^{2} + y^{2})^{2} = (x - y)^{2}$ at $(1,0)$ and $(1,-1)$ 

Slopes, Tangent Lines, and Normal Lines 

In Exercises 33–42, verify that the given point is on the curve and find the lines that are (a) tangent and (b) normal to the curve at the given point. 

33. $x^{2} + xy - y^{2} = 1,\quad(2,3)$ 

34. $x^{2} + y^{2} = 25$ ，(3,-4) 

35. $x^{2}y^{2} = 9$ $(-1,3)$ 

36. $y^{2} - 2x - 4y - 1 = 0, (-2,1)$ 

37. $6x^{2} + 3xy + 2y^{2} + 17y - 6 = 0,\quad (-1,0)$ 

38. $x^{2} - \sqrt{3} xy + 2y^{2} = 5, (\sqrt{3}, 2)$ 

39. $2xy + \pi \sin y = 2\pi, (1, \pi/2)$ 

40. $x \sin 2y = y \cos 2x, (\pi/4, \pi/2)$ 

41. $y = 2\sin (\pi x - y)$ ，(1,0) 

42. $x^{2}\cos^{2}y - \sin y = 0,\quad(0,\pi)$ 

43. Parallel tangent lines Find the two points where the curve $x^{2} + xy + y^{2} = 7$ crosses the x-axis, and show that the tangent lines to the curve at these points are parallel. What is the common slope of these tangent lines? 

44. Normal lines parallel to a line Find the normal lines to the curve $xy + 2x - y = 0$ that are parallel to the line $2x + y = 0$ . 

45. The eight curve Find the slopes of the curve $y^{4} = y^{2} - x^{2}$ at the two points shown here. 

![[7c0d024cf21698c152f09d9321bf4ee422f5efc0e76caaa121970e15f09f000e.jpg|image]]


46. The cissoid of Diocles (from about 200 B.C.) Find equations for the tangent line and normal line to the cissoid of Diocles $y^{2}(2 - x) = x^{3}$ at (1,1). 

![[bc0ecd403f0923bf1751e12ac5954f686974c57e821a57ea13b893aabeecfcce.jpg|image]]


47. The devil's curve (Gabriel Cramer, 1750) Find the slopes of the devil's curve $y^4 - 4y^2 = x^4 - 9x^2$ at the four indicated points. 

![[af44d7b4c95932e94f9ab6059cee33a79ffbfc7d66c73e290eadc7ac4425d3d6.jpg|image]]


48. The folium of Descartes (See Figure 3.29) 

a. Find the slope of the folium of Descartes 

$x^{3} + y^{3} - 9xy = 0$ at the points $(4,2)$ and $(2,4)$ . 

b. At what point other than the origin does the folium have a horizontal tangent line? 

c. Find the coordinates of the point $A$ in Figure 3.29 where the folium has a vertical tangent line. 

Theory and Examples 

49. Intersecting normal line The line that is normal to the curve $x^{2} + 2xy - 3y^{2} = 0$ at (1,1) intersects the curve at what other point? 

50. Power rule for rational exponents Let $p$ and $q$ be integers with $q > 0$ . If $y = x^{p / q}$ , differentiate the equivalent equation $y^q = x^p$ implicitly and show that, for $y \neq 0$ , 

$$
\frac {d}{d x} x ^ {p / q} = \frac {p}{q} x ^ {(p / q) - 1}.
$$

51. Normal lines to a parabola Show that if it is possible to draw three normal lines from the point $(a,0)$ to the parabola $x = y^{2}$ shown in the accompanying diagram, then a must be greater than 1/2. One of the normal lines is the x-axis. For what value of a are the other two normal lines perpendicular? 

![[ba61b1af08e53fdbead262fc22101833545ebb6071e4c931e6cd339876b2027a.jpg|image]]


52. Is there anything special about the tangent lines to the curves $y^{2} = x^{3}$ and $2x^{2} + 3y^{2} = 5$ at the points $(1, \pm 1)$ ? Give reasons for your answer. 

![[a5bc41f066400df2f01b0dc0a8b8c6f49b166689c72721310df99ef009bc6abb.jpg|image]]


53. Verify that the following pairs of curves meet orthogonally. 

a. $x^{2} + y^{2} = 4,\quad x^{2} = 3y^{2}$ 

b. $x = 1 - y^{2}, x = \frac{1}{3} y^{2}$ 

54. The graph of $y^2 = x^3$ is called a semicubical parabola and is shown in the accompanying figure. Determine the constant $b$ so that the line $y = -\frac{1}{3} x + b$ meets this graph orthogonally. 

![[99f1d5d8c7058b898fdb79d11ae2c195a05e55a5150914a70188d68ddfddbc5a.jpg|image]]


In Exercises 55 and 56, find both dy/dx (treating y as a differentiable function of x) and dx/dy (treating x as a differentiable function of y). How do dy/dx and dx/dy seem to be related? 

55. $xy^{3} + x^{2}y = 6$ 

56. $x^{3} + y^{2} = \sin^{2}y$ 

57. Derivative of arcsine Assume that $y = \sin^{-1}x$ is a differentiable function of $x$ . By differentiating the equation $x = \sin y$ implicitly, show that $dy / dx = 1 / \sqrt{1 - x^2}$ . 

58. Use the formula in Exercise 57 to find dy/dx if 

a. $y = (\sin^{-1} x)^{2}$ 

b. $y = \sin^{-1}\left(\frac{1}{x}\right)$ . 

## COMPUTER EXPLORATIONS

Use a CAS to perform the following steps in Exercises 59–66. 

a. Plot the equation with the implicit plotter of a CAS. Check to see that the given point $P$ satisfies the equation. 

b. Using implicit differentiation, find a formula for the derivative $dy / dx$ and evaluate it at the given point $P$ . 

c. Use the slope found in part (b) to find an equation for the tangent line to the curve at P. Then plot the implicit curve and tangent line together on a single graph. 

59. $x^{3} - xy + y^{3} = 7,\quad P(2,1)$ 

60. $x^{5} + y^{3}x + yx^{2} + y^{4} = 4,\quad P(1,1)$ 

61. $y^{2} + y = \frac{2 + x}{1 - x}, P(0,1)$ 

62. $y^{3} + \cos xy = x^{2}, P(1,0)$ 

63. $x + \tan \left(\frac{y}{x}\right) = 2, P\left(1, \frac{\pi}{4}\right)$ 

64. $xy^{3} + \tan (x + y) = 1, P\left(\frac{\pi}{4}, 0\right)$ 

65. $2y^{2} + (xy)^{1/3} = x^{2} + 2,\quad P(1,1)$ 

66. $x\sqrt{1+2y} + y = x^{2}, P(1,0)$ 

## 3.8 Derivatives of Inverse Functions and Logarithms

In Section 1.5 we saw how the inverse of a function undoes, or inverts, the effect of that function. We defined there the natural logarithm function $f^{-1}(x) = \ln x$ as the inverse of the natural exponential function $f(x) = e^{x}$ . This is one of the most important function-inverse pairs in mathematics and science. We learned how to differentiate the exponential function in Section 3.3. Here we develop a rule for differentiating the inverse of a differentiable function, and we apply the rule to find the derivative of the natural logarithm function. 

![[9c4a2fcebcd9f41b20dddc05487545bac96fa4bb0254d6eaa1ecc336ac87ac25.jpg|image]]


FIGURE 3.35 Graphing a line and its inverse together shows the graphs' symmetry with respect to the line y = x. The slopes are reciprocals of each other. 

## Derivatives of Inverses of Differentiable Functions

We calculated the inverse of the function $f(x) = (1/2)x + 1$ to be $f^{-1}(x) = 2x - 2$ in Example 3 of Section 1.5. Figure 3.35 shows the graphs of both functions. If we calculate their derivatives, we see that 

$$
\frac {d}{d x} f (x) = \frac {d}{d x} \left(\frac {1}{2} x + 1\right) = \frac {1}{2}
$$

$$
{\frac {d}{d x}} f ^ {- 1} (x) = {\frac {d}{d x}} (2 x - 2) = 2.
$$

The derivatives are reciprocals of one another, so the slope of one line is the reciprocal of the slope of its inverse line. (See Figure 3.35.) 

This is not a special case. Reflecting any nonhorizontal or nonvertical line across the line y = x always inverts the line's slope. If the original line has slope $m \neq 0$ , the reflected line has slope 1/m. 

![[dd33883bb44361fec6843e9d297fc2aee372cf88cc66acffeb92a670967a6d79.jpg|image]]



FIGURE 3.36 The graphs of inverse functions have recip-



rocal slopes at corresponding points.


The reciprocal relationship between the slopes of f and $f^{-1}$ holds for other functions as well, but we must be careful to compare slopes at corresponding points. If the slope of $y = f(x)$ at the point $(a, f(a))$ is $f'(a)$ and $f'(a) \neq 0$ , then the slope of $y = f^{-1}(x)$ at the point $(f(a), a)$ is the reciprocal $1/f'(a)$ (Figure 3.36). If we set $b = f(a)$ , then 

$$
(f ^ {- 1}) ^ {\prime} (b) = \frac {1}{f ^ {\prime} (a)} = \frac {1}{f ^ {\prime} (f ^ {- 1} (b))}.
$$

If $y = f(x)$ has a horizontal tangent line at $(a, f(a))$ , then the inverse function $f^{-1}$ has a vertical tangent line at $(f(a), a)$ , so the slope is undefined and $f^{-1}$ is not differentiable at $f(a)$ . Theorem 3 gives the conditions under which $f^{-1}$ is differentiable in its domain (which is the same as the range of f). 

## THEOREM 3—The Derivative Rule for Inverses

If $f$ has an interval $I$ as domain and $f'(x)$ exists and is never zero on $I$ , then $f^{-1}$ is differentiable at every point in its domain (the range of $f$ ). The value of $(f^{-1})'$ at a point $b$ in the domain of $f^{-1}$ is the reciprocal of the value of $f'$ at the point $a = f^{-1}(b)$ : 

$$
(f ^ {- 1}) ^ {\prime} (b) = \frac {1}{f ^ {\prime} (f ^ {- 1} (b))}\tag{1}
$$

or 

$$
\left. \frac {d f ^ {- 1}}{d x} \right| _ {x = b} = \frac {1}{\left. \frac {d f}{d x} \right| _ {x = f ^ {- 1} (b)}}.
$$

Theorem 3 makes two assertions. The first of these has to do with the conditions under which $f^{-1}$ is differentiable; the second assertion is a formula for the derivative of $f^{-1}$ when it exists. While we omit the proof of the first assertion, the second one is proved in the following way: 

![[04da9e3051d16843dc1d59a517e50ef4ea03cc4f715b702b15565af3cf853e77.jpg|image]]



FIGURE 3.37 The derivative of $f^{-1}(x) = \sqrt{x}$ at the point (4, 2) is the reciprocal of the derivative of $f(x) = x^2$ at (2, 4) (Example 1).


![[7f2d2e06a1083dc79380a59f37ad246b79f17eef11bbdf94364f4ff24e65273b.jpg|image]]



FIGURE 3.38 The derivative of $f(x) = x^{3} - 2$ at x = 2 tells us the derivative of $f^{-1}$ at x = 6 (Example 2).


$$
\begin{array}{r l r} f (f ^ {- 1} (x)) & = x & \text {   Inverse   function   relationship   } \\ \frac {d}{d x} f (f ^ {- 1} (x)) & = 1 & \text {   Differentiate   both   sides.   } \\ f ^ {\prime} (f ^ {- 1} (x)) \cdot \frac {d}{d x} f ^ {- 1} (x) & = 1 & \text {   Chain   Rule   } \\ \frac {d}{d x} f ^ {- 1} (x) & = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))}. & \text {   Solve   for   the   derivative.   } \end{array}
$$

**EXAMPLE 1** The function $f(x) = x^2, x > 0$ and its inverse $f^{-1}(x) = \sqrt{x}$ have derivatives $f'(x) = 2x$ and $(f^{-1})'(x) = 1 / (2\sqrt{x})$ . 

Let's verify that Theorem 3 gives the same formula for the derivative of $f^{-1}(x)$ : 

$$
\begin{array}{l l} (f ^ {- 1}) ^ {\prime} (x) = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} \\ = \frac {1}{2 (f ^ {- 1} (x))} & f ^ {\prime} (x) = 2 x \text {   with   } x \text {   replaced   by   } f ^ {- 1} (x) \\ = \frac {1}{2 (\sqrt {x})}. & f ^ {- 1} (x) = \sqrt {x} \end{array}
$$

Theorem 3 gives a derivative that agrees with the known derivative of the square root function. 

Let's examine Theorem 3 at a specific point. We pick $x = 2$ (the number $a$ ) and $f(2) = 4$ (the value $b$ ). Theorem 3 says that the derivative of $f$ at 2, which is $f'(2) = 4$ , and the derivative of $f^{-1}$ at $f(2)$ , which is $(f^{-1})'(4)$ , are reciprocals. It states that 

$$
(f ^ {- 1}) ^ {\prime} (4) = \frac {1}{f ^ {\prime} (f ^ {- 1} (4))} = \frac {1}{f ^ {\prime} (2)} = \left. \frac {1}{2 x} \right| _ {x = 2} = \frac {1}{4}.
$$

See Figure 3.37. 

We will use the procedure illustrated in Example 1 to calculate formulas for the derivatives of many inverse functions throughout this chapter. Equation (1) sometimes enables us to find specific values of $df^{-1}/dx$ without knowing a formula for $f^{-1}$ . 

**EXAMPLE 2** Let $f(x) = x^3 - 2, x > 0$ . Find the value of $df^{-1} / dx$ at $x = 6 = f(2)$ without finding a formula for $f^{-1}(x)$ . See Figure 3.38. 

**Solution** We apply Theorem 3 to obtain the value of the derivative of $f^{-1}$ at $x = 6$ : 

$$
\begin{array}{r l} \left. \frac {d f}{d x} \right| _ {x = 2} & = 3 x ^ {2} \bigg | _ {x = 2} = 1 2 \\ \left. \frac {d f ^ {- 1}}{d x} \right| _ {x = f (2)} & = \frac {1}{\left. \frac {d f}{d x} \right| _ {x = 2}} = \frac {1}{1 2}. \end{array} \tag {Eq.(1)}
$$

## Derivative of the Natural Logarithm Function

Since we know that the exponential function $f(x) = e^{x}$ is differentiable everywhere, we can apply Theorem 3 to find the derivative of its inverse $f^{-1}(x) = \ln x$ : 

$$
\begin{array}{l l} (f ^ {- 1}) ^ {\prime} (x) = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} & \text { Theorem   3 } \\ = \frac {1}{e ^ {f ^ {- 1} (x)}} & f ^ {\prime} (u) = e ^ {u} \\ = \frac {1}{e ^ {\ln x}} & x > 0 \\ = \frac {1}{x}. & \text { Inverse   function   relationship } \end{array}
$$

Alternative Derivation Instead of applying Theorem 3 directly, we can find the derivative of $y = \ln x$ using implicit differentiation, as follows: 

$$
\begin{array}{c c} y = \ln x & x > 0 \\ e ^ {y} = x & \text { Inverse   function   relationship } \\ \frac {d}{d x} (e ^ {y}) = \frac {d}{d x} (x) & \text { Differentiate   implicitly. } \\ e ^ {y} \frac {d y}{d x} = 1 & \text { Chain   Rule } \\ \frac {d y}{d x} = \frac {1}{e ^ {y}} = \frac {1}{x}. & e ^ {y} = x \end{array}
$$

No matter which derivation we use, the derivative of $y = \ln x$ with respect to x is 

$$
{\frac {d}{d x}} \ln x = {\frac {1}{x}}, x > 0.\tag{2}
$$

The Chain Rule extends this formula to positive differentiable functions $u(x)$ : 

$$
{\frac {d}{d x}} \ln u = {\frac {1}{u}} {\frac {d u}{d x}}, \qquad u > 0.\tag{3}
$$

**EXAMPLE 3** We use Equations (2) and (3) to find derivatives. 

$$
\text {(a)} \frac {d}{d x} \ln 2 x = \frac {1}{2 x} \frac {d}{d x} (2 x) = \frac {1}{2 x} \cdot 2 = \frac {1}{x}, x > 0
$$

(b) Equation (3) with $u = x^{2} + 3$ gives 

$$
\frac {d}{d x} \ln (x ^ {2} + 3) = \frac {1}{x ^ {2} + 3} \cdot \frac {d}{d x} (x ^ {2} + 3) = \frac {1}{x ^ {2} + 3} \cdot 2 x = \frac {2 x}{x ^ {2} + 3}.
$$

(c) Using the Chain Rule and Equation (2), we find 

$$
\frac {d}{d x} (\ln x) ^ {4} = 4 (\ln x) ^ {3} \cdot \frac {d}{d x} (\ln x) = 4 (\ln x) ^ {3} \cdot \frac {1}{x} = \frac {4 (\ln x) ^ {3}}{x}, x > 0.
$$

(d) Equation (3) with $u = |x|$ gives an important derivative: 

$$
\begin{array}{l} \text { Derivative   of } \ln | x | \\ \frac {d}{d x} \ln | x | = \frac {1}{x}, x \neq 0 \end{array}
$$

![[f82f62c59f17fef618c197529c0a798144bb23cc2dd2faf172be63350d71a6fd.jpg|image]]



FIGURE 3.39 The tangent line meets the curve at some point $(a, \ln a)$ , where the slope of the curve is 1/a (Example 4).


$$
\begin{array}{l l} \frac {d}{d x} \ln | x | = \frac {d}{d u} \ln u \cdot \frac {d u}{d x} & u = | x |, x \neq 0 \\ = \frac {1}{u} \cdot \frac {x}{| x |} & \frac {d}{d x} (| x |) = \frac {x}{| x |} (\text {Example 7, Section 3.6}) \\ = \frac {1}{| x |} \cdot \frac {x}{| x |} & \text {Substitute for u.} \\ = \frac {x}{x ^ {2}} \\ = \frac {1}{x}. \end{array}
$$

So $1 / x$ is the derivative of $\ln x$ on the domain $x > 0$ , and the derivative of $\ln (-x)$ on the domain $x < 0$ . 

$$
\frac {d}{d x} \ln b x = \frac {1}{x}, b x > 0
$$

Notice from Example 3a that the function $y = \ln 2x$ has the same derivative as the function $y = \ln x$ . This is true of $y = \ln bx$ for any constant b, provided that bx > 0: 

$$
{\frac {d}{d x}} \ln b x = {\frac {1}{b x}} \cdot {\frac {d}{d x}} (b x) = {\frac {1}{b x}} (b) = {\frac {1}{x}}.\tag{4}
$$

**EXAMPLE 4** A line with slope m passes through the origin and is tangent to the graph of $y = \ln x$ . What is the value of m? 

**Solution** Suppose the point of tangency occurs at the unknown point x = a > 0. Then we know that the point $(a, \ln a)$ lies on the graph and that the tangent line at that point has slope m = 1/a (Figure 3.39). Since the tangent line passes through the origin, its slope is 

$$
m = \frac {\ln a - 0}{a - 0} = \frac {\ln a}{a}.
$$

Setting these two formulas for m equal to each other, we have 

$$
\begin{array}{c} \frac {\ln a}{a} = \frac {1}{a} \\ \ln a = 1 \\ e ^ {\ln a} = e ^ {1} \\ a = e \\ m = \frac {1}{e}. \end{array}
$$

## The Derivatives of $a^x$ and $\log_a x$

We start with the equation $a^{x} = e^{\ln(a^{x})} = e^{x \ln a}, a > 0$ , which was seen in Section 1.5, where it was used to define the function $a^{x}$ : 

$$
\begin{array}{l l} \frac {d}{d x} a ^ {x} = \frac {d}{d x} e ^ {x \ln a} \\ = e ^ {x \ln a} \cdot \frac {d}{d x} (x \ln a) & \frac {d}{d x} e ^ {u} = e ^ {u} \frac {d u}{d x} \\ = a ^ {x} \ln a. & \text { ln } a \text {   is   a   constant }. \end{array}
$$

That is, if a > 0, then $a^{x}$ is differentiable and 

$$
\frac {d}{d x} a ^ {x} = a ^ {x} \ln a.\tag{5}
$$

This equation shows why $e^{x}$ is the preferred exponential function in calculus. If a = e, then $\ln a = 1$ and the derivative of $a^{x}$ simplifies to 

$$
\frac {d}{d x} e ^ {x} = e ^ {x} \ln e = e ^ {x}. \quad \ln e = 1
$$

If a > 0 and u is a differentiable function of x, then by the Chain Rule, $a^{u}$ is a differentiable function of x and 

$$
{\frac {d}{d x}} a ^ {u} = a ^ {u} \ln a {\frac {d u}{d x}}.\tag{6}
$$

**EXAMPLE 5** Here are some derivatives of general exponential functions. 

$$
\text {(a)} \frac {d}{d x} 3 ^ {x} = 3 ^ {x} \ln 3 \quad \text {Eq. (6) with a = 3, u = x}
$$

$$
\text { (b) } \frac {d}{d x} 3 ^ {- x} = 3 ^ {- x} (\ln 3) \frac {d}{d x} (- x) = - 3 ^ {- x} \ln 3 \quad \text { Eq.   (6)   with   } a = 3, u = - x
$$

$$
\text {(c)} \frac {d}{d x} 3 ^ {\sin x} = 3 ^ {\sin x} (\ln 3) \frac {d}{d x} (\sin x) = 3 ^ {\sin x} (\ln 3) \cos x \quad \text { Eq.   (6)   with } u = \sin x
$$

$$
\text { (d) } \frac {d}{d x} \sin (3 ^ {x}) = \cos (3 ^ {x}) \frac {d}{d x} 3 ^ {x} = \cos (3 ^ {x}) \cdot 3 ^ {x} \ln 3 \quad \text { Chain   Rule   and   Eq.   (5) }
$$

In Section 3.3 we looked at the derivative $f'(0)$ for the exponential functions $f(x) = a^x$ at various values of the base $a$ . The number $f'(0)$ is the limit, $\lim_{h\to 0}(a^h -1) / h$ , and gives the slope of the graph of $a^x$ when it crosses the $y$ -axis at the point (0, 1). We now see from Equation (5) that the value of this slope is 

$$
\lim _ {h \to 0} \frac {a ^ {h} - 1}{h} = \ln a.\tag{7}
$$

In particular, when $a = e$ we obtain 

$$
\lim _ {h \rightarrow 0} \frac {e ^ {h} - 1}{h} = \ln e = 1.
$$

However, we have not fully justified that these limits actually exist. While all of the arguments given in deriving the derivatives of the exponential and logarithmic functions are correct, they do assume the existence of these limits. In Chapter 7 we will give another development of the theory of logarithmic and exponential functions which fully justifies that both limits do in fact exist and have the values derived above. 

To find the derivative of $\log_{a}x$ for an arbitrary base (a > 0, $a \neq 1$ ), we use the change-of-base formula for logarithms (reviewed in Section 1.5) to express $\log_{a}x$ in terms of natural logarithms: 

$$
\log_ {a} x = \frac {\ln x}{\ln a}.
$$

Then we take derivatives 

$$
\begin{array}{l l} \frac {d}{d x} \log_ {a} x = \frac {d}{d x} \left(\frac {\ln x}{\ln a}\right) & \text { Differentiate   both   sides. } \\ = \frac {1}{\ln a} \cdot \frac {d}{d x} \ln x & \text { In   a   is   a   constant. } \\ = \frac {1}{\ln a} \cdot \frac {1}{x}, \end{array}
$$

which yields 

$$
{\frac {d}{d x}} \mathrm{log} _ {a} x = {\frac {1}{x \ln a}} \quad a > 0, a \neq 1.\tag{8}
$$

If $u$ is a differentiable function of $x$ and $u > 0$ , the Chain Rule gives a more general formula: 

$$
\frac {d}{d x} \log_ {a} u = \frac {1}{u \ln a} \frac {d u}{d x} \quad a > 0, a \neq 1.\tag{9}
$$

## Logarithmic Differentiation

The derivatives of positive functions given by formulas that involve products, quotients, and powers can often be found more quickly if we take the natural logarithm of both sides before differentiating. This enables us to use the laws of logarithms to simplify the formulas before differentiating. The process, called logarithmic differentiation, is illustrated in the next example. 

**EXAMPLE 6** Find dy/dx if 

$$
y = \frac {(x ^ {2} + 1) (x + 3) ^ {1 / 2}}{x - 1}, \quad x > 1.
$$

**Solution** We take the natural logarithm of both sides and simplify the result with the algebraic properties of logarithms from Theorem 1 in Section 1.5: 

$$
\begin{array}{l l} \ln y = \ln \frac {(x ^ {2} + 1) (x + 3) ^ {1 / 2}}{x - 1} \\ \quad = \ln \left((x ^ {2} + 1) (x + 3) ^ {1 / 2}\right) - \ln (x - 1) & \text { Rule   2 } \\ \quad = \ln (x ^ {2} + 1) + \ln (x + 3) ^ {1 / 2} - \ln (x - 1) & \text { Rule   1 } \\ \quad = \ln (x ^ {2} + 1) + \frac {1}{2} \ln (x + 3) - \ln (x - 1). & \text { Rule   4 } \end{array}
$$

We then take derivatives of both sides with respect to x, using Equation (3): 

$$
\frac {1}{y} \frac {d y}{d x} = \frac {1}{x ^ {2} + 1} \cdot 2 x + \frac {1}{2} \cdot \frac {1}{x + 3} - \frac {1}{x - 1}.
$$

Next we solve for $dy / dx$ : 

$$
\frac {d y}{d x} = y \left(\frac {2 x}{x ^ {2} + 1} + \frac {1}{2 x + 6} - \frac {1}{x - 1}\right).
$$

Finally, we substitute for y: 

$$
\frac {d y}{d x} = \frac {(x ^ {2} + 1) (x + 3) ^ {1 / 2}}{x - 1} \left(\frac {2 x}{x ^ {2} + 1} + \frac {1}{2 x + 6} - \frac {1}{x - 1}\right).
$$

The computation in Example 6 would be much longer if we used the product, quotient, and power rules. 

## Irrational Exponents and the Power Rule (General Version)

The natural logarithm and the exponential function will be defined precisely in Chapter 7. We can use the exponential function to define the general exponential function, which enables us to raise any positive number to any real power n, rational or irrational. That is, we can define the power function $y = x^{n}$ for any exponent n. 

> ***DEFINITION*** For any x > 0 and for any real number n, 
>
> $$
> x ^ {n} = e ^ {n \ln x}.
> $$
>
Because the logarithm and exponential functions are inverses of each other, the definition gives 

$$
\ln x ^ {n} = n \ln x, \text {   for   all   real   numbers   } n.
$$

That is, the rule for taking the natural logarithm of a power holds for all real exponents $n$ , not just for rational exponents. 

The definition of the power function also enables us to establish the derivative Power Rule for any real power n, as stated in Section 3.3. 

General Power Rule for Derivatives
For x > 0 and any real number n, $\frac{d}{dx}x^{n} = nx^{n-1}.$ If $x \leq 0$ , then the formula holds whenever the derivative, $x^{n}$ , and $x^{n-1}$ all exist. 

## Proof Differentiating $x^{n}$ with respect to x gives

$$
\begin{array}{l l} \frac {d}{d x} x ^ {n} = \frac {d}{d x} e ^ {n \ln x} & \text { Definition   of } x ^ {n}, x > 0 \\ = e ^ {n \ln x} \cdot \frac {d}{d x} (n \ln x) & \text { Chain   Rule   for } e ^ {u} \\ = x ^ {n} \cdot \frac {n}{x} & \text { Definition   and   derivative   of } \ln x \\ = n x ^ {n - 1}. & x ^ {n} \cdot \frac {1}{x} = x ^ {n - 1} \end{array}
$$

In short, whenever x > 0, 

$$
{\frac {d}{d x}} x ^ {n} = n x ^ {n - 1}.
$$

For $x < 0$ , if $y = x^n, y'$ , and $x^{n-1}$ all exist, then 

$$
\ln | y | = \ln | x | ^ {n} = n \ln | x |.
$$

Using implicit differentiation (which assumes the existence of the derivative $y'$ ) and Example 3(c), we have 

$$
{\frac {y ^ {\prime}}{y}} = {\frac {n}{x}}.
$$

Solving for the derivative, we find that 

$$
y ^ {\prime} = n \frac {y}{x} = n \frac {x ^ {n}}{x} = n x ^ {n - 1}. y = x ^ {n}
$$

It can be shown directly from the definition of the derivative that the derivative equals 0 when x = 0 and n > 1 (see Exercise 107). This completes the proof of the general version of the Power Rule for all values of x. 

## **EXAMPLE 7** Differentiate $f(x) = x^{x}, x > 0$ .

**Solution** The Power Rule tells us how to differentiate a function of the form $x^{a}$ , where a is a fixed real number. However, the exponent in $x^{x}$ is not a fixed constant, so we cannot use the Power Rule to differentiate $x^{x}$ . Equation (5) tells us how to differentiate $a^{x}$ when the base a is constant. We cannot use that equation either, because the base x in $x^{x}$ is not constant. Instead, to find the derivative of this function, we note that $f(x) = x^{x} = e^{x \ln x}$ , so differentiation gives 

$$
\begin{array}{l l} f ^ {\prime} (x) = \frac {d}{d x} (e ^ {x \ln x}) & \text { The   base } e \text { is   a   constant. } \\ = e ^ {x \ln x} \frac {d}{d x} (x \ln x) & \frac {d}{d x} e ^ {u}, u = x \ln x \\ = e ^ {x \ln x} \left(\ln x + x \cdot \frac {1}{x}\right) & \text { Product   Rule } \\ = x ^ {x} (\ln x + 1). & x > 0 \end{array}
$$

We can also find the derivative of $y = x^x$ using logarithmic differentiation, assuming $y'$ exists. 

## The Number e Expressed as a Limit

In Section 1.4 we defined the number e as the base value for which the exponential function $y = a^{x}$ has slope 1 when it crosses the y-axis at $(0,1)$ . Thus e is the constant that satisfies the equation 

$$
\lim _ {h \to 0} \frac {e ^ {h} - 1}{h} = \ln e = 1. \qquad \text { Slope   equals } \ln e \text { from   Eq. } (7).
$$

We now prove that $e$ can be calculated as a certain limit. 

THEOREM 4—The Number $e$ as a Limit the number $e$ can be calculated as the limit 

$$
e = \lim _ {x \to 0} (1 + x) ^ {1 / x}.
$$

Proof If $f(x) = \ln x$ , then $f'(x) = 1/x$ , so $f'(1) = 1$ . But, by the definition of derivative, 

![[e22d90724098f798ba40c2d49640a3b621b3015f52ef00527fb17c1864518fe2.jpg|image]]



FIGURE 3.40 The number e is the limit of the function graphed here as $x \rightarrow 0$ .


$$
\begin{array}{l l} f ^ {\prime} (1) = \lim _ {h \to 0} \frac {f (1 + h) - f (1)}{h} = \lim _ {x \to 0} \frac {f (1 + x) - f (1)}{x} & \ln 1 = 0 \\ = \lim _ {x \to 0} \frac {\ln (1 + x) - \ln 1}{x} = \lim _ {x \to 0} \frac {1}{x} \ln (1 + x) \\ = \lim _ {x \to 0} \ln (1 + x) ^ {1 / x} = \ln \left[ \lim _ {x \to 0} (1 + x) ^ {1 / x} \right]. & \text { In   is   continuous, } \\ & \text { Theorem   9   in   Chapter   2 } \end{array}
$$

Because $f'(1) = 1$ , we have 

$$
\ln \left[ \lim _ {x \rightarrow 0} (1 + x) ^ {1 / x} \right] = 1.
$$

Therefore, exponentiating both sides, we get 

$$
\lim _ {x \to 0} (1 + x) ^ {1 / x} = e.
$$

See Figure 3.40. 

Approximating the limit in Theorem 4 by taking x very small gives approximations to e. Its value is $e \approx 2.718281828459045$ to 15 decimal places. 

## EXERCISES

## 3.8

## Derivatives of Inverse Functions

In Exercises 1–4: 

a. Find $f^{-1}(x)$ . 

b. Graph $f$ and $f^{-1}$ together. 

c. Evaluate $df / dx$ at $x = a$ and $df^{-1} / dx$ at $x = f(a)$ to show that $(df^{-1} / dx)|_{x = f(a)} = 1 / (df / dx)|_{x = a}$ . 

1. $f(x) = 2x + 3, a = -1$ 

2. $f(x) = \frac{x + 2}{1 - x}, a = \frac{1}{2}$ 

3. $f(x) = 5 - 4x, a = 1 / 2$ 

4. $f(x) = 2x^{2}, x \geq 0, a = 5$ 

5. a. Show that $f(x) = x^3$ and $g(x) = \sqrt[3]{x}$ are inverses of one another. 

b. Graph f and g over an x-interval large enough to show the graphs intersecting at $(1,1)$ and $(-1,-1)$ . Be sure the picture shows the required symmetry about the line y = x. 

c. Find the slopes of the tangent lines to the graphs of $f$ and $g$ at (1, 1) and (-1, -1) (four tangent lines in all). 

d. What lines are tangent to the curves at the origin? 

6. a. Show that $h(x) = x^3 / 4$ and $k(x) = (4x)^{1/3}$ are inverses of one another. 

b. Graph h and k over an x-interval large enough to show the graphs intersecting at $(2, 2)$ and $(-2, -2)$ . Be sure the picture shows the required symmetry about the line y = x. 

c. Find the slopes of the tangent lines to the graphs at h and k at $(2, 2)$ and $(-2, -2)$ . 

d. What lines are tangent to the curves at the origin? 

7. Let $f(x) = x^3 - 3x^2 - 1$ , $x \geq 2$ . Find the value of $df^{-1} / dx$ at the point $x = -1 = f(3)$ . 

8. Let $f(x) = x^2 - 4x - 5$ , $x > 2$ . Find the value of $df^{-1} / dx$ at the point $x = 0 = f(5)$ . 

9. Suppose that the differentiable function $y = f(x)$ has an inverse and that the graph of f passes through the point (2, 4) and has a slope of 1/3 there. Find the value of $df^{-1}/dx$ at x = 4. 

10. Suppose that the differentiable function $y = g(x)$ has an inverse and that the graph of g passes through the origin with slope 2. Find the slope of the graph of $g^{-1}$ at the origin. 

11. The accompanying figure shows the graph of the function f. 

![[a19680ca832c3862a2b0e70daae284bcb5cf3b5622f7bf8b7d280826b3fb31d6.jpg|image]]


Assuming the inverse function $f^{-1}$ is differentiable, find the slope of $f^{-1}(x)$ at 

a. $x = 1$ b. $x = 2$ c. $x = 3$ 

12. The accompanying figure shows the graph of the function g. 

![[c8e5272edff8b510540276fcbdae7e8bbc8249a8654a11ea5966b9e147123d5e.jpg|image]]


Assuming the inverse function $g^{-1}$ is differentiable, find the slope of $g^{-1}(x)$ at 

a. $x = 1$ b. $x = 2$ c. $x = 3$ 

13. Suppose that the function f and its derivative with respect to x have the following values at x = 0, 1, 2, 3, and 4. 

<table><tr><td>x</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>f(x)</td><td>3</td><td>6</td><td>0</td><td>1</td><td>2</td></tr><tr><td>f&#x27;(x)</td><td>4/3</td><td>5</td><td>4</td><td>1/2</td><td>1/7</td></tr></table>

Assuming the inverse function $f^{-1}$ is differentiable, find the slope of $f^{-1}(x)$ at 

a. $x = 1$ b. $x = 2$ c. $x = 3$ 

14. Suppose that the function $g$ and its derivative with respect to $x$ have the following values at $x = 0, 1, 2, 3$ , and 4. 

<table><tr><td>x</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>g(x)</td><td>-4</td><td>-1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>g&#x27;(x)</td><td>3</td><td>2</td><td>5/4</td><td>2/3</td><td>1/5</td></tr></table>

Assuming the inverse function $g^{-1}$ is differentiable, find the slope of $g^{-1}(x)$ at 

a. $x = 1$ b. $x = 2$ c. $x = 3$ 

Derivatives of Logarithms 

In Exercises 15–44, find the derivative of y with respect to x, t, or $\theta$ , as appropriate. 

15. $y = \ln 3x + x$ 

17. $y = \ln (t^2)$ 

$$
y = \frac {1}{\ln 3 x}
$$

19. $y = \ln \frac{3}{x}$ 

18. $y = \ln (t^{3 / 2}) + \sqrt{t}$ 

20. $y = \ln (\sin x)$ 

21. $y = \ln (\theta + 1) - e^{\theta}$ 

22. $y = (\cos \theta)\ln (2\theta +2)$ 

23. $y = \ln x^3$ 

25. $y = t(\ln t)^{2}$ 

24. $y = (\ln x)^{3}$ 

26. $y = t\ln \sqrt{t}$ 

27. $y = \frac{x^4}{4}\ln x - \frac{x^4}{16}$ 

28. $y = (x^{2} \ln x)^{4}$ 

29. $y = \frac{\ln t}{t}$ 

30. $y = \frac{t}{\sqrt{\ln t}}$ 

31. $y = \frac{\ln x}{1 + \ln x}$ 

32. $y = \frac{x \ln x}{1 + \ln x}$ 

33. $y = \ln(\ln x)$ 

34. $y = \ln (\ln (\ln x))$ 

35. $y = \theta(\sin(\ln \theta) + \cos(\ln \theta))$ 

36. $y = \ln(\sec\theta + \tan\theta)$ 

37. $y = \ln \frac{1}{x\sqrt{x + 1}}$ 

38. $y = \frac{1}{2} \ln \frac{1 + x}{1 - x}$ 

39. $y = \frac{1 + \ln t}{1 - \ln t}$ 

40. $y = \sqrt{\ln\sqrt{t}}$ 

41. $y = \ln(\sec(\ln\theta))$ 

42. $y = \ln \left( \frac{\sqrt{\sin \theta \cos \theta}}{1 + 2 \ln \theta} \right)$ 

43. $y = \ln \left(\frac{(x^2 + 1)^5}{\sqrt{1 - x}}\right)$ 

44. $y = \ln \sqrt{\frac{(x + 1)^{5}}{(x + 2)^{20}}}$ 

## Logarithmic Differentiation

In Exercises 45–58, use logarithmic differentiation to find the derivative of y with respect to the given independent variable. 

45. $y = \sqrt{x(x + 1)}$ 

46. $y = \sqrt{(x^{2} + 1)(x - 1)^{2}}$ 

47. $y = \sqrt{\frac{t}{t + 1}}$ 

48. $y = \sqrt{\frac{1}{t(t + 1)}}$ 

49. $y = (\sin \theta)\sqrt{\theta + 3}$ 

50. $y = (\tan \theta)\sqrt{2\theta + 1}$ 

51. $y = t(t + 1)(t + 2)$ 

52. $y = \frac{1}{t(t + 1)(t + 2)}$ 

53. $y = \frac{\theta + 5}{\theta \cos \theta}$ 

54. $y = \frac{\theta\sin\theta}{\sqrt{\sec\theta}}$ 

55. $y = \frac{x\sqrt{x^2 + 1}}{(x + 1)^{2 / 3}}$ 

56. $y = \sqrt{\frac{(x + 1)^{10}}{(2x + 1)^5}}$ 

57. $y = \sqrt[3]{\frac{x(x - 2)}{x^{2} + 1}}$ 

58. $y = \sqrt[3]{\frac{x(x + 1)(x - 2)}{(x^{2} + 1)(2x + 3)}}$ 

## Finding Derivatives

In Exercises 59–70, find the derivative of y with respect to x, t, or $\theta$ , as appropriate. 

59. $y = \ln(\cos^{2}\theta)$ 

60. $y = \ln(3\theta e^{-\theta})$ 

61. $y = \ln (3te^{-t})$ 

62. $y = \ln(2e^{-t} \sin t)$ 

63. $y = \ln \left(\frac{e^{\theta}}{1 + e^{\theta}}\right)$ 

64. $y = \ln \left(\frac{\sqrt{\theta}}{1 + \sqrt{\theta}}\right)$ 

65. $y = e^{(\cos t + \ln t)}$ 

66. $y = e^{\sin t}(\ln t^2 +1)$ 

In Exercises 67–70, find dy/dx. 

67. $\ln y = e^{y}\sin x$ 

69. $x^{y} = y^{x}$ 

68. $\ln xy = e^{x + y}$ 

70. $\tan y = e^{x} + \ln x$ 

In Exercises 71–92, find the derivative of y with respect to the given independent variable. 

71. $y = 2^{x}$ 

73. $y = 5^{\sqrt{s}}$ 

72. $y = 3^{-x}$ 

74. $y = 2^{(s^2)}$ 

75. $y = x^{\pi}$ 

76. $y = t^{1 - e}$ 

77. $y = \log_{2}5\theta$ 

78. $y = \log_3(1 + \theta \ln 3)$ 

79. $y = \log_4x + \log_4x^2$ 

81. $y = \log_2r\cdot \log_4r$ 

80. $y = \log_{25}e^{x} - \log_{5}\sqrt{x}$ 

82. $y = \log_3r\cdot \log_9r$ 

83. $y = \log_3\left(\left(\frac{x + 1}{x - 1}\right)^{\ln 3}\right)$ 

84. $y = \log_5\sqrt{\left(\frac{7x}{3x + 2}\right)^{\ln 5}}$ 

85. $y = \theta \sin (\log_7\theta)$ 

86. $y = \log_7\left(\frac{\sin\theta\cos\theta}{e^\theta 2^\theta}\right)$ 

87. $y = \log_5e^x$ 

88. $y = \log_2\left(\frac{x^2e^2}{2\sqrt{x + 1}}\right)$ 

89. $y = 3^{\log_2t}$ 

90. $y = 3\log_8(\log_2t)$ 

91. $y = \log_2(8t^{\ln 2})$ 

92. $y = t\log_3(e^{(\sin t)(\ln 3)})$ 

## Powers with Variable Bases and Exponents

In Exercises 93–104, use logarithmic differentiation or the method in Example 7 to find the derivative of y with respect to the given independent variable. 

93. $y = (x + 1)^{x}$ 

94. $y = x^{(x + 1)}$ 

95. $y = (\sqrt{t})^t$ 

96. $y = t^{\sqrt{t}}$ 

97. $y = (\sin x)^{x}$ 

98. $y = x^{\sin x}$ 

99. $y = x^{\ln x}$ 

100. $y = (\ln x)^{\ln x}$ 

101. $y^{x} = x^{3}y$ 

102. $x^{\sin y} = \ln y$ 

103. $x = y^{xy}$ 

104. $e^y = y^{\ln x}$ 

## Theory and Applications

105. If we write $g(x)$ for $f^{-1}(x)$ , Equation (1) can be written as 

$$
g ^ {\prime} (f (a)) = \frac {1}{f ^ {\prime} (a)}, \text {   or   } g ^ {\prime} (f (a)) \cdot f ^ {\prime} (a) = 1.
$$

If we then write $x$ for $a$ , we get 

$$
g ^ {\prime} (f (x)) \cdot f ^ {\prime} (x) = 1.
$$

The latter equation may remind you of the Chain Rule, and indeed there is a connection. 

Assume that $f$ and $g$ are differentiable functions that are inverses of one another, so that $(g \circ f)(x) = x$ . Differentiate both sides of this equation with respect to $x$ , using the Chain Rule to express $(g \circ f)'(x)$ as a product of derivatives of $g$ and $f$ . What do you find? (This is not a proof of Theorem 3 because we assume here the theorem's conclusion that $g = f^{-1}$ is differentiable.) 

106. Show that $\lim_{n\to \infty}\left(1 + \frac{x}{n}\right)^n = e^x$ for any $x > 0$ . 

107. If $f(x) = x^n$ , $n > 1$ , show from the definition of the derivative that $f'(0) = 0$ . 

108. Using mathematical induction, show that for $n > 1$ , 

$$
\frac {d ^ {n}}{d x ^ {n}} \ln x = (- 1) ^ {n - 1} \frac {(n - 1) !}{x ^ {n}}.
$$

## COMPUTER EXPLORATIONS

In Exercises 109–116, you will explore some functions and their inverses together with their derivatives and tangent line approximations at specified points. Perform the following steps using your CAS: 

a. Plot the function $y = f(x)$ together with its derivative over the given interval. Explain why you know that f is one-to-one over the interval. 

b. Solve the equation $y = f(x)$ for x as a function of y, and name the resulting inverse function g. 

c. Find an equation for the tangent line to $f$ at the specified point $(x_0, f(x_0))$ . 

d. Find an equation for the tangent line to $g$ at the point $(f(x_0), x_0)$ located symmetrically across the $45^\circ$ line $y = x$ (which is the graph of the identity function). Use Theorem 3 to find the slope of this tangent line. 

e. Plot the functions f and g, the identity, the two tangent lines, and the line segment joining the points $(x_{0}, f(x_{0}))$ and $(f(x_{0}), x_{0})$ . Discuss the symmetries you see across the main diagonal (the line y = x). 

109. $y = \sqrt{3x - 2}, \frac{2}{3} \leq x \leq 4, x_0 = 3$ 

110. $y = \frac{3x + 2}{2x - 11}, \quad -2 \leq x \leq 2, \quad x_{0} = 1/2$ 

111. $y = \frac{4x}{x^2 + 1}, -1 \leq x \leq 1, x_0 = 1/2$ 

112. $y = \frac{x^3}{x^2 + 1}, -1 \leq x \leq 1, x_0 = 1/2$ 

$$
\mathbf {1 1 3 .} y = x ^ {3} - 3 x ^ {2} - 1, 2 \leq x \leq 5, x _ {0} = \frac {2 7}{1 0}
$$

$$
\mathbf {1 1 4 .} y = 2 - x - x ^ {3}, - 2 \leq x \leq 2, x _ {0} = \frac {3}{2}
$$

$$
\mathbf {1 1 5 .} y = e ^ {x}, - 3 \leq x \leq 5, x _ {0} = 1
$$

$$
\mathbf {1 1 6 .} y = \sin x, - \frac {\pi}{2} \leq x \leq \frac {\pi}{2}, x _ {0} = 1
$$

In Exercises 117 and 118, repeat the steps above to solve for the functions $y = f(x)$ and $x = f^{-1}(y)$ defined implicitly by the given equations over the interval. 

$$
\mathbf {1 1 7 .} y ^ {1 / 3} - 1 = (x + 2) ^ {3}, - 5 \leq x \leq 5, x _ {0} = - 3 / 2
$$

118. $\cos y = x^{1/5}$ , $0 \leq x \leq 1$ , $x_0 = 1/2$ 

## 3.9 Inverse Trigonometric Functions

We introduced the six basic inverse trigonometric functions in Section 1.5 but focused there on the arcsine and arccosine functions. Here we complete the study of how all six basic inverse trigonometric functions are defined, graphed, and evaluated, and how their derivatives are computed. 

## Inverses of $\tan x$ , $\cot x$ , $\sec x$ , and $\csc x$

The graphs of these four basic inverse trigonometric functions are shown in Figure 3.41. We obtain these graphs by reflecting the graphs of the restricted trigonometric functions (as discussed in Section 1.5) through the line $y = x$ . Let's take a closer look at the arctangent, arccotangent, arcsecant, and arccosecant functions. 

$$
- \infty <   x <   \infty
$$

Domain: $-\infty < x < \infty$ Range: $-\frac{\pi}{2} < y < \frac{\pi}{2}$ 

![[5b150498642fc0414de247bb5030b150af3538a0799b258d0b2390730acbd269.jpg|image]]



(a)


$$
\begin{array}{l} \text { Domain: } - \infty <   x <   \infty \\ \text { Range: } \quad 0 <   y <   \pi \end{array}
$$

![[4d411c486c25bd1a7b2f80aa0596bd2753a32741a03fd63b3041928c41da8665.jpg|image]]



(b)


$$
\begin{array}{l} \text { Domain: } x \leq - 1 \text { or } x \geq 1 \\ \text { Range: } 0 \leq y \leq \pi , y \neq \frac {\pi}{2} \end{array}
$$

![[9b367df8a55201c7727fb95adb6c7b22506cd669edfa133213630ba81935340c.jpg|image]]



(c)


$$
- \frac {\pi}{2} \leq y \leq \frac {\pi}{2}, y \neq 0
$$

![[eaaf9341a592ab2859945ad1c12f1bd8986b15455f526ca6562e29d2e5a69e3a.jpg|image]]



(d)



FIGURE 3.41 Graphs of the arctangent, arccotangent, arcsecant, and arccosecant functions.


The arctangent of x is a radian angle whose tangent is x. The arcotangent of x is an angle whose cotangent is x, and so forth. The angles belong to the restricted domains of the tangent, cotangent, secant, and cosecant functions. 

> ## ***DEFINITIONS***
>
> y = arctan x is the number in $(-π/2, π/2)$ for which tan y = x. 
>
> $y = \operatorname{arccot} x$ is the number in $(0, \pi)$ for which $\cot y = x$ . 
>
> y = arcsec x is the number in $[0, \pi/2) \cup (\pi/2, \pi]$ for which sec y = x. 
>
> $y = \operatorname{arccsc} x$ is the number in $[-\pi/2, 0) \cup (0, \pi/2]$ for which $\csc y = x$ . 
>
![[9049277c42bcf743fe3569c981cb3ff443265281180945a0abb9de12369650b0.jpg|image]]



FIGURE 3.42 There are several logical choices for the left-hand branch of $y = \operatorname{arcsec} x$ . With choice A, arcsec $x = \arccos(1/x)$ , a useful identity employed by many calculators.


We use open or half-open intervals to avoid values for which the tangent, cotangent, secant, and cosecant functions are undefined. (See Figure 3.41.) 

As we discussed in Section 1.5, the arcsine and arccosine functions are often written as $\sin^{-1}x$ and $\cos^{-1}x$ instead of $\arcsin x$ and $\arccos x$ . Likewise, we often denote the other inverse trigonometric functions by $\tan^{-1}x$ , $\cot^{-1}x$ , $\sec^{-1}x$ , and $\csc^{-1}x$ . 

The graph of $y = \arctan x$ is symmetric about the origin because it is a branch of the graph $x = \tan y$ that is symmetric about the origin (Figure 3.41a). Algebraically this means that 

$$
\arctan (- x) = - \arctan x;
$$

the arctangent is an odd function. The graph of y = arccot x has no such symmetry (Figure 3.41b). Notice from Figure 3.41a that the graph of the arctangent function has two horizontal asymptotes: one at $y = \pi/2$ and the other at $y = -\pi/2$ . 

The inverses of the restricted forms of sec x and csc x are chosen to be the functions graphed in Figures 3.41c and 3.41d. 

Caution There is no general agreement about how to define arcsec x for negative values of x. We chose angles in the second quadrant between $\pi/2$ and $\pi$ . This choice makes arcsec $x = \arccos(1/x)$ . It also makes arcsec x an increasing function on each interval of its domain. Some tables choose arcsec x to lie in $[-\pi, -\pi/2)$ for x < 0, and some texts choose it to lie in $[\pi, 3\pi/2)$ (Figure 3.42). These choices simplify the formula for the derivative (our formula needs absolute value signs) but fail to satisfy the computational equation arcsec $x = \arccos(1/x)$ . From this, we can derive the identity 

$$
\operatorname{arcsec} x = \arccos \left(\frac {1}{x}\right) = \frac {\pi}{2} - \arcsin \left(\frac {1}{x}\right)\tag{1}
$$

by applying Equation (5) in Section 1.5. 

**EXAMPLE 1** The accompanying figures show two values of arctan x. 

![[6b56681cbc12c10f79afcdc6b3269bc61c122c6f89fc7c034bdd94a36a34188c.jpg|image]]


<table><tr><td>x</td><td>arctan x</td></tr><tr><td><eq>\sqrt{3}</eq></td><td><eq>\pi/3</eq></td></tr><tr><td>1</td><td><eq>\pi/4</eq></td></tr><tr><td><eq>\sqrt{3}/3</eq></td><td><eq>\pi/6</eq></td></tr><tr><td>0</td><td>0</td></tr><tr><td><eq>-\sqrt{3}/3</eq></td><td><eq>-\pi/6</eq></td></tr><tr><td>-1</td><td><eq>-\pi/4</eq></td></tr><tr><td><eq>-\sqrt{3}</eq></td><td><eq>-\pi/3</eq></td></tr></table>

The angles come from the first and fourth quadrants because the range of $\arctan x$ is $(- \pi / 2, \pi / 2)$ . 

![[732b5b4894cbd7b0637655116a5cc8e6461065bb608ec3cba9e38cd2421c62c0.jpg|image]]


FIGURE 3.43 The graph of $y = \arcsin x$ has vertical tangent lines at x = -1 and x = 1. 

## The Derivative of $y = \arcsin u$

We know that the function $x = \sin y$ is differentiable in the interval $-\pi / 2 < y < \pi / 2$ and that its derivative, the cosine, is positive there. Theorem 3 in Section 3.8 therefore assures us that the inverse function $y = \arcsin x$ is differentiable throughout the interval $-1 < x < 1$ . We cannot expect it to be differentiable at $x = 1$ or $x = -1$ because the tangent lines to the graph are vertical at these points (see Figure 3.43). 

We find the derivative of $y = \arcsin x$ by applying Theorem 3 with $f(x) = \sin x$ and $f^{-1}(x) = \arcsin x$ : 

$$
\begin{array}{l l} (f ^ {- 1}) ^ {\prime} (x) = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} & \text { Theorem   3 } \\ = \frac {1}{\cos (\arcsin x)} & f ^ {\prime} (y) = \cos y \\ = \frac {1}{\sqrt {1 - \sin^ {2} (\arcsin x)}} & \cos y = \sqrt {1 - \sin^ {2} y} \\ = \frac {1}{\sqrt {1 - x ^ {2}}}. & \sin (\arcsin x) = x \end{array}
$$

For $|x| < 1$ , 

$$
\frac {d}{d x} (\arcsin x) = \frac {1}{\sqrt {1 - x ^ {2}}}.
$$

If $u$ is a differentiable function of $x$ with $|u| < 1$ , we apply the Chain Rule to get the general formula 

$$
\frac {d}{d x} (\arcsin u) = \frac {1}{\sqrt {1 - u ^ {2}}} \frac {d u}{d x}, \quad | u | <   1.
$$

**EXAMPLE 2** Using the Chain Rule, we calculate the derivative 

$$
\frac {d}{d x} \left(\arcsin x ^ {2}\right) = \frac {1}{\sqrt {1 - (x ^ {2}) ^ {2}}} \cdot \frac {d}{d x} \left(x ^ {2}\right) = \frac {2 x}{\sqrt {1 - x ^ {4}}}.
$$

## The Derivative of $y = \arctan u$

We find the derivative of $y = \arctan x$ by applying Theorem 3 with $f(x) = \tan x$ and $f^{-1}(x) = \arctan x$ . Theorem 3 can be applied because the derivative of $\tan x$ is positive for $-\pi / 2 < x < \pi / 2$ : 

$$
\begin{array}{l l} (f ^ {- 1}) ^ {\prime} (x) = \frac {1}{f ^ {\prime} (f ^ {- 1} (x))} & \text { Theorem   3 } \\ = \frac {1}{\sec^ {2} (\arctan x)} & f ^ {\prime} (u) = \sec^ {2} u \\ = \frac {1}{1 + \tan^ {2} (\arctan x)} & \sec^ {2} u = 1 + \tan^ {2} u \\ = \frac {1}{1 + x ^ {2}}. & \tan (\arctan x) = x \end{array}
$$

The derivative is defined for all real numbers: 

$$
\frac {d}{d x} (\arctan x) = \frac {1}{1 + x ^ {2}}.
$$

The derivative is defined for all real numbers. If $u$ is a differentiable function of $x$ , we get the Chain Rule form: 

$$
\frac {d}{d x} (\arctan u) = \frac {1}{1 + u ^ {2}} \frac {d u}{d x}.
$$

The Chain Rule can also be combined with the arctangent function in other ways, as illustrated by the following example. 

**EXAMPLE 3** 

$$
\begin{array}{l l} \frac {d}{d x} \left(\frac {1}{\arctan x}\right) = \frac {d}{d x} (\arctan x) ^ {- 1} & \text { Derivative   of   the   reciprocal } \\ & \text {(not   the   inverse)   of   arctangent} \\ = (- 1) (\arctan x) ^ {- 2} \frac {d}{d x} (\arctan x) & \text { Apply   the   Chain   Rule. } \\ = \frac {- 1}{(\arctan x) ^ {2}} \cdot \frac {1}{1 + x ^ {2}} \end{array}
$$

The Derivative of $y = \operatorname{arcsec} u$ 

Theorem 3 does not apply to the function $\sec x$ directly, since its domain is not connected. However, we can apply Theorem 3 to each of the two intervals in its domain to see that the inverse of the one-to-one function $\sec x$ is indeed differentiable. The formula for the derivative of arcsec $x$ on its domain $|x| > 1$ can then be found by using implicit differentiation and the Chain Rule as follows: 

$$
\begin{array}{r l r} y & = \operatorname{arcsec} x \\ \sec y & = x & \text {   Inverse   function   relationship   } \\ \frac {d}{d x} (\sec y) & = \frac {d}{d x} x & \text {   Differentiate   both   sides.   } \\ (\sec y \tan y) \frac {d y}{d x} & = 1 & \text {   Chain   Rule   } \\ \frac {d y}{d x} & = \frac {1}{\sec y \tan y}. & \text {   Since   } | x | > 1, y \text {   lies   in   } (0, \pi / 2) \cup (\pi / 2, \pi) \text {   and   } \sec y \tan y \neq 0. \end{array}
$$

To express the result in terms of x, we use the relationships 

$$
\sec y = x \quad \text { and } \quad \tan y = \pm \sqrt {\sec^ {2} y - 1} = \pm \sqrt {x ^ {2} - 1}
$$

to get 

![[0a043f679840e209a4500b0dc002a13a24fb819807a3954d984a2acaae44d824.jpg|image]]


FIGURE 3.44 The slope of the curve $y = \operatorname{arcsec} x$ is positive for both $x < -1$ and $x > 1$ . 

$$
{\frac {d y}{d x}} = \pm {\frac {1}{x {\sqrt {x ^ {2} - 1}}}}.
$$

Can we do anything about the $\pm$ sign? A glance at Figure 3.44 shows that the slope of the graph y = arcsec x is always positive. Thus, 

$$
\frac {d}{d x} \operatorname{arcsec} x = \left\{ \begin{array}{l l} + \frac {1}{x \sqrt {x ^ {2} - 1}} & \text { if } x > 1 \\ - \frac {1}{x \sqrt {x ^ {2} - 1}} & \text { if } x <   - 1. \end{array} \right.
$$

With the absolute value symbol, we can write a single expression that eliminates the “±” ambiguity: 

$$
\frac {d}{d x} (\operatorname{arcsec} x) = \frac {1}{| x | \sqrt {x ^ {2} - 1}}, \quad | x | > 1.
$$

If u is a differentiable function of x with $|u| > 1$ , we have the formula 

$$
\frac {d}{d x} (\operatorname{arcsec} u) = \frac {1}{| u | \sqrt {u ^ {2} - 1}} \frac {d u}{d x}, \quad | u | > 1.
$$

**EXAMPLE 4** Using the Chain Rule and derivative of the arcsecant function, we find 

$$
\begin{array}{r l} \frac {d}{d x} \operatorname{arcsec} (5 x ^ {4}) & = \frac {1}{| 5 x ^ {4} | \sqrt {(5 x ^ {4}) ^ {2} - 1}} \frac {d}{d x} (5 x ^ {4}) \\ & = \frac {1}{5 x ^ {4} \sqrt {2 5 x ^ {8} - 1}} (2 0 x ^ {3}) \\ & = \frac {4}{x \sqrt {2 5 x ^ {8} - 1}}. \end{array} \quad 5 x ^ {4} > 1
$$

## Derivatives of the Other Three Inverse Trigonometric Functions

We could use the same techniques to find the derivatives of the other three inverse trigonometric functions—arccosine, arccotangent, and arccosecant—but there is an easier way, thanks to the following identities. 

Inverse Function–Inverse Cofunction Identities 

$$
\arccos x = \pi / 2 - \arcsin x
$$

$$
\operatorname{arccot} x = \pi / 2 - \arctan x
$$

$$
\operatorname{arccsc} x = \pi / 2 - \operatorname{arcsec} x
$$

We saw the first of these identities in Equation (5) of Section 1.5. The others are derived in a similar way. It follows easily that the derivatives of the inverse cofunctions are the negatives of the derivatives of the corresponding inverse functions. For example, the derivative of $\arccos x$ is calculated as follows: 

$$
\begin{array}{l l} \frac {d}{d x} (\arccos x) = \frac {d}{d x} \left(\frac {\pi}{2} - \arcsin x\right) & \text { Identity } \\ = - \frac {d}{d x} (\arcsin x) \\ = - \frac {1}{\sqrt {1 - x ^ {2}}}. & \text { Derivative   of   arcsine } \end{array}
$$

The derivatives of the inverse trigonometric functions are summarized in Table 3.1. 

## TABLE 3.1 Derivatives of the inverse trigonometric functions

$$
\mathbf {1}. \frac {d}{d x} (\arcsin x) = \frac {1}{\sqrt {1 - x ^ {2}}} (| x | <   1) \quad \mathbf {4}. \frac {d}{d x} (\arccos x) = - \frac {1}{\sqrt {1 - x ^ {2}}} (| x | <   1)
$$

$$
\frac {d}{d x} (\operatorname{arccot} x) = - \frac {1}{1 + x ^ {2}}
$$

$$
\frac {d}{d x} (\operatorname{arcsec} x) = \frac {1}{| x | \sqrt {x ^ {2} - 1}} (| x | > 1) \quad \text {   6.   } \frac {d}{d x} (\operatorname{arccsc} x) = - \frac {1}{| x | \sqrt {x ^ {2} - 1}} (| x | > 1)
$$

## EXERCISES 3.9

Remember that arcsin and $\sin^{-1}$ represent the same function, and similarly for the other trigonometric functions. 

## Common Values

Use reference triangles in an appropriate quadrant, as in Example 1, to find the angles in Exercises 1–8.

1. a. arctan 1 b. arctan $(-\sqrt{3})$ c. tan $^{-1}\left(\frac{1}{\sqrt{3}}\right)$ 2. a. arctan $(-1)$ b. tan $^{-1}\sqrt{3}$ c. arctan $\left(\frac{-1}{\sqrt{3}}\right)$ 3. a. arcsin $\left(\frac{-1}{2}\right)$ b. arcsin $\left(\frac{1}{\sqrt{2}}\right)$ c. sin $^{-1}\left(\frac{-\sqrt{3}}{2}\right)$ 4. a. sin $^{-1}\left(\frac{1}{2}\right)$ b. arcsin $\left(\frac{-1}{\sqrt{2}}\right)$ c. arcsin $\left(\frac{\sqrt{3}}{2}\right)$ 5. a. arccos $\left(\frac{1}{2}\right)$ b. cos $^{-1}\left(\frac{-1}{\sqrt{2}}\right)$ c. arccos $\left(\frac{\sqrt{3}}{2}\right)$ 6. a. csc $^{-1}\sqrt{2}$ b. arccsc $\left(\frac{-2}{\sqrt{3}}\right)$ c. arccsc 2 

7. a. $\sec^{-1}(-\sqrt{2})$ b. $\operatorname{arcsec}\left(\frac{2}{\sqrt{3}}\right)$ c. $\operatorname{arcsec}(-2)$ 8. a. $\operatorname{arccot}(-1)$ b. $\operatorname{arccot}(\sqrt{3})$ c. $\cot^{-1}\left(\frac{-1}{\sqrt{3}}\right)$ 

Evaluations
Find the values in Exercises 9–12.
9. $\sin\left(\cos^{-1}\left(\frac{\sqrt{2}}{2}\right)\right)$ 10. $\sec\left(\arccos\frac{1}{2}\right)$ 11. $\tan\left(\arcsin\left(-\frac{1}{2}\right)\right)$ 12. $\cot\left(\sin^{-1}\left(-\frac{\sqrt{3}}{2}\right)\right)$ 

Limits
Find the limits in Exercises 13–20. (If in doubt, look at the function's graph.)
13. $\lim_{x\to1^{-}}\arcsin x$ 14. $\lim_{x\to-1^{+}}\cos^{-1}x$ 15. $\lim_{x\to\infty}\tan^{-1}x$ 16. $\lim_{x\to-\infty}\arctan x$ 

17. $\lim_{x\to \infty}\operatorname {arcsec}x$ 

18. $\lim_{x\to-\infty}\sec^{-1}x$ 

19. $\lim_{x\to \infty}\csc^{-1}x$ 

20. $\lim_{x\to-\infty}\operatorname{arccsc}x$ 

Finding Derivatives 

In Exercises 21–48, find the derivative of y with respect to the appropriate variable. 

21. $y = \cos^{-1}(x^2)$ 

22. $y = \arccos (1 / x)$ 

23. $y = \arcsin \sqrt{2} t$ 

24. $y = \sin^{-1}(1 - t)$ 

25. $y = \operatorname{arcsec}(2s + 1)$ 

26. $y = \sec^{-1}5s$ 

27. $y = \csc^{-1}(x^2 + 1), x > 0$ 

28. $y = \operatorname{arccsc}\frac{x}{2}$ 

29. $y = \sec^{-1}\frac{1}{t},\quad 0 < t < 1$ 30. $y = \arcsin \frac{3}{t^2}$ 

31. $y = \operatorname{arccot}\sqrt{t}$ 

32. $y = \cot^{-1}\sqrt{t - 1}$ 

33. $y = \ln(\tan^{-1}x)$ 

34. $y = \tan^{-1}(\ln x)$ 

35. $y = \operatorname{arccsc}(e^t)$ 

36. $y = \arccos (e^{-t})$ 

37. $y = s\sqrt{1 - s^2} + \cos^{-1}s$ 38. $y = \sqrt{s^2 - 1} - \sec^{-1}s$ 

39. $y = \tan^{-1}\sqrt{x^2 - 1} + \csc^{-1}x, \quad x > 1$ 

40. $y = \cot^{-1}\frac{1}{x} - \tan^{-1}x$ 41. $y = x\arcsin x + \sqrt{1 - x^2}$ 

42. $y = \ln (x^{2} + 4) - x\arctan \left(\frac{x}{2}\right)$ 

43. $y = \sqrt{\arcsin x}$ 

44. $y = e^{\operatorname{arcsec} x}$ 

45. $y = \cos(x - \arccos x)$ 

46. $y = \frac{x}{1 + \arctan x}$ 

47. $y = (\operatorname{arccot}(x^3))^3$ 

48. $y = \log_{2} \operatorname{arccsc} \sqrt{x}$ 

For problems 49–52 use implicit differentiation to find $\frac{dy}{dx}$ at the given point P. 

49. 3 arctan $x + \arcsin y = \frac{\pi}{4}$ ; $P(1, -1)$ 

50. $\arcsin (x + y) + \arccos (x - y) = \frac{5\pi}{6}; P\left(0, \frac{1}{2}\right)$ 

51. $y\cos^{-1}(xy) = \frac{-3\sqrt{2}}{4}\pi; P\left(\frac{1}{2}, -\sqrt{2}\right)$ 

52. $16(\tan^{-1}3y)^{2} + 9(\tan^{-1}2x)^{2} = 2\pi^{2}; P\left(\frac{\sqrt{3}}{2}, \frac{1}{3}\right)$ 

Theory and Examples 

53. You are sitting in a classroom next to the wall looking at the blackboard at the front of the room. The blackboard is 4 m long and starts 1 m from the wall you are sitting next to. Show that your viewing angle is 

$$
\alpha = \operatorname{arccot} \frac {x}{1 5} - \operatorname{arccot} \frac {x}{3}
$$

if you are x meters from the front wall. 

![[0e1ab60cc2456a9065654e353679e9df4329ac9599c3047355585b792d88f908.jpg|image]]


54. Find the angle $\alpha$ . 

![[9c19dbb16e5462dac3332e350c925d402a654552a4f158d456ca4afc1e693a15.jpg|image]]


55. Here is an informal proof that $\tan^{-1}1 + \tan^{-1}2 + \tan^{-1}3 = \pi$ . Explain what is going on. 

![[e3b82afb94ef73fa458d9204a2c87ae4a8cb6071f1210bb0cd6fe8315a23c9e3.jpg|image]]


56. Two derivations of the identity $\sec^{-1}(-x) = \pi - \sec^{-1}x$ 

a. (Geometric) Here is a pictorial proof that $\sec^{-1}(-x) = \pi - \sec^{-1}x$ . See if you can tell what is going on. 

![[5b3a50b923062e27958e9c2f7476ddedf540bb508fe1e62d761c804502f4f912.jpg|image]]


b. (Algebraic) Derive the identity $\sec^{-1}(-x) = \pi - \sec^{-1}x$ by combining the following two equations from the text: 

$\cos^{-1}(-x) = \pi - \cos^{-1} x$ Eq. (4), Section 1.5 

$\sec^{-1}x = \cos^{-1}(1 / x)$ Eq. (1) 

Which of the expressions in Exercises 57–60 are defined, and which are not? Give reasons for your answers. 

57. a. arctan 2 

b. $\cos^{-1}2$ 

58. a. $\operatorname{arccsc}(1/2)$ 

59. a. $\sec^{-1}0$ 

b. $\csc^{-1}2$ 

60. a. $\cot^{-1}(-1/2)$ 

b. arcsin $\sqrt{2}$ 

b. $\arccos(-5)$ 

61. Use the identity 

$$
\operatorname{arccsc} x = \frac {\pi}{2} - \operatorname{arcsec} x
$$

to derive the formula for the derivative of $\operatorname{arccsc} x$ in Table 3.1 from the formula for the derivative of $\operatorname{arcsec} x$ . 

62. Derive the formula 

$$
\frac {d y}{d x} = \frac {1}{1 + x ^ {2}}
$$

for the derivative of $y = \arctan x$ by differentiating both sides of the equivalent equation $\tan y = x$ . 

63. Use the Derivative Rule in Section 3.8, Theorem 3, to derive 

$$
\frac {d}{d x} \operatorname{arcsec} x = \frac {1}{| x | \sqrt {x ^ {2} - 1}}, | x | > 1.
$$

64. Use the identity 

$$
\operatorname{arccot} x = \frac {\pi}{2} - \arctan x
$$

to derive the formula for the derivative of $\operatorname{arccot} x$ in Table 3.1 from the formula for the derivative of $\arctan x$ . 

65. What is special about the functions 

$$
f (x) = \sin^ {- 1} \frac {x - 1}{x + 1}, x \geq 0, \text { and } g (x) = 2 \tan^ {- 1} \sqrt {x}?
$$

Explain. 

66. What is special about the functions 

$$
f (x) = \sin^ {- 1} \frac {1}{\sqrt {x ^ {2} + 1}} \quad \text { and } \quad g (x) = \tan^ {- 1} \frac {1}{x}?
$$

Explain. 

T 67. Find the values of 

T 68. Find the values of a. $\sec^{-1}(-3)$ b. arccsc1.7 c. $\operatorname{arccot}(-2)$ 

In Exercises 69–71, find the domain and range of each composite function. Then graph the composition of the two functions on separate screens. Do the graphs make sense in each case? Give reasons for your answers. Comment on any differences you see. 

69. a. $y = \arctan (\tan x)$ b. $y = \tan (\arctan x)$ 

70. a. $y = \arcsin(\sin x)$ b. $y = \sin(\arcsin x)$ 

71. a. $y = \arccos(\cos x)$ b. $y = \cos(\arccos x)$ 

T Use your graphing utility for Exercises 72–76. 

72. Graph $y = \sec(\sec^{-1}x) = \sec(\cos^{-1}(1/x))$ . Explain what you see. 

73. Newton's serpentine Graph Newton's serpentine, $y = 4x / (x^2 + 1)$ . Then graph $y = 2\sin(2\tan^{-1}x)$ in the same graphing window. What do you see? Explain. 

74. Graph the rational function $y = (2 - x^{2})/x^{2}$ . Then graph $y = \cos(2\sec^{-1}x)$ in the same graphing window. What do you see? Explain. 

75. Graph $f(x) = \arcsin x$ together with its first two derivatives. Comment on the behavior of f and the shape of its graph in relation to the signs and values of $f'$ and $f''$ . 

76. Graph $f(x) = \arctan x$ together with its first two derivatives. Comment on the behavior of f and the shape of its graph in relation to the signs and values of $f'$ and $f''$ . 

## 3.10 Related Rates

In this section we look at questions that arise when two or more related quantities are changing. The problem of determining how the rate of change of one of them affects the rates of change of the others is called a related rates problem. 

## Related Rates Equations

Suppose we are pumping air into a spherical balloon. Both the volume and radius of the balloon are increasing over time. If V is the volume and r is the radius of the balloon at an instant of time, then 

![[6060a2431a619e6accb82ea69f909f862e896f33f0a1c13891a3112ac3092f91.jpg|image]]



FIGURE 3.45 The geometry of the conical tank and the rate at which water fills the tank determine how fast the water level rises (Example 1).


$$
V = \frac {4}{3} \pi r ^ {3}.
$$

Using the Chain Rule, we differentiate both sides with respect to t to find an equation relating the rates of change of V and r, 

$$
{\frac {d V}{d t}} = {\frac {d V}{d r}} {\frac {d r}{d t}} = 4 \pi r ^ {2} {\frac {d r}{d t}}.
$$

So if we know the radius r of the balloon and the rate dV/dt at which the volume is increasing at a given instant of time, then we can solve this last equation for dr/dt to find how fast the radius is increasing at that instant. Note that it is easier to directly measure the rate of increase of the volume (the rate at which air is being pumped into the balloon) than it is to measure the increase in the radius. The related rates equation allows us to calculate dr/dt from dV/dt. 

Very often the key to relating the variables in a related rates problem is drawing a picture that shows the geometric relations between them, as illustrated in the following example. 

**EXAMPLE 1** Water runs into a conical tank at the rate of $0.25 \, m^{3}/min$ . The tank stands point down and has a height of 3 m and a base radius of 1.5 m. How fast is the water level rising when the water is 1.8 m deep? 

**Solution** Figure 3.45 shows a partially filled conical tank. The variables in the problem are 

$V = \text{volume (m}^{3}\text{)} \text{ of the water in the tank at time } t \text{ (min)}$ 

x = radius (m) of the surface of the water at time t 

$y = \text{depth (m) of the water in the tank at time } t$ . 

We assume that $V, x$ , and $y$ are differentiable functions of $t$ . The constants are the dimensions of the tank. We are asked for $dy / dt$ when 

$$
y = 1. 8 \mathrm{m} \quad \text { and } \quad \frac {d V}{d t} = 0. 2 5 \mathrm{m} ^ {3} / \min.
$$

The water forms a cone with volume 

$$
V = \frac {1}{3} \pi x ^ {2} y.
$$

This equation involves x as well as V and y. Because no information is given about x and dx/dt at the time in question, we need to eliminate x. The similar triangles in Figure 3.45 give us a way to express x in terms y: 

$$
\frac {x}{y} = \frac {1 . 5}{3} \quad \text { or } \quad x = \frac {y}{2}.
$$

Therefore, we find 

$$
V = \frac {1}{3} \pi \left(\frac {y}{2}\right) ^ {2} y = \frac {\pi}{1 2} y ^ {3}
$$

to give the derivative 

$$
\frac {d V}{d t} = \frac {\pi}{1 2} \cdot 3 y ^ {2} \frac {d y}{d t} = \frac {\pi}{4} y ^ {2} \frac {d y}{d t}.
$$

Finally, use y = 1.8 and dV/dt = 0.25 to solve for dy/dt. 

$$
0. 2 5 = \frac {\pi}{4} (1. 8) ^ {2} \frac {d y}{d t}
$$

$$
\frac {d y}{d t} = \frac {1}{3 . 2 4 \pi} \approx 0. 0 9 8
$$

At the moment in question, the water level is rising at about 0.098 m/min. 

## Related Rates Problem Strategy

1. Let t denote time, and choose names for all of the variables that change over time (we will assume that those variables are differentiable functions of t). Identify any quantities that remain constant (these do not need to be given names). In most problems it will be very helpful to draw a picture that depicts the setup of the problem. 

2. Write an equation that relates the variables (and any constants that are present). You may have to combine two or more equations to get a single equation that relates the variable whose rate you want to the variables whose rates or values you know. 

3. Differentiate with respect to t to obtain a related rates equation. 

4. Substitute all of the numerical values provided in the problem into the related rates equation. You may need to use the equation(s) relating the variables (which you obtained in Step 2), or use other relationships (such as trigonometric identities), until you reach the point at which the only remaining unknown quantity is the rate of change that you are asked to find. Solve for this unknown. 

**EXAMPLE 2** A hot air balloon rising straight up from a level field is tracked by a range finder $150\mathrm{m}$ from the liftoff point. At the moment the range finder's elevation angle is $\pi /4$ , the angle is increasing at the rate of $0.14\mathrm{rad / min}$ . How fast is the balloon rising at that moment? 

![[e1c66731a2bc39ea09fe3902887d8e11d7b1bc2c72d2d99a01ae43a5aaf49851.jpg|image]]



FIGURE 3.46 The rate of change of the balloon's height is related to the rate of change of the angle the range finder makes with the ground (Example 2).


**Solution** We draw a picture (Figure 3.46) and name the variables that appear in the problem (which we assume are differentiable functions of t, where time is measured in minutes): 

$\theta =$ the angle in radians the range finder makes with the ground, and 

y = the height in meters of the balloon above the ground. 

One constant in the picture is the distance from the range finder to the liftoff point (150m). There is no need to give this distance a special symbol. 


FIGURE 3.47 The speed of the car is related to the speed of the police cruiser and the rate of change of the distance s between them (Example 3).


Trigonometry (Section 1.3) yields 

$$
\frac {y}{1 5 0} = \tan \theta \quad \text { or } \quad y = 1 5 0 \tan \theta .
$$

![[42a69c0056d1c9924c26b26b3ef7a0d92ca488ac070e727082df763c0a414d4e.jpg|image]]


Equation relating the variables 

By differentiating with respect to t using the Chain Rule, we obtain 

$$
\frac {d y}{d t} = 1 5 0 (\sec^ {2} \theta) \frac {d \theta}{d t}.
$$

Related rates equation 

Substituting the known values $\frac{d\theta}{dt} = 0.14$ rad/min and $\theta = \frac{\pi}{4}$ gives 

$$
\frac {d y}{d t} = 1 5 0 \left(\sec^ {2} \frac {\pi}{4}\right) (0. 1 4) = 1 5 0 (\sqrt {2}) ^ {2} (0. 1 4) = 4 2. \quad \sec \frac {\pi}{4} = \sqrt {2}
$$

Thus, at the moment in question, the balloon is rising at the rate of 42 m/min. 

**EXAMPLE 3** A police cruiser, approaching a right-angled intersection from the north, is chasing a speeding car that has turned the corner and is now moving straight east. When the cruiser is 0.6 km north of the intersection and the car is 0.8 km to the east, the police determine with radar that the distance between them and the car is increasing at 30 km/h. If the cruiser is moving at 100 km/h at the instant of measurement, what is the speed of the car? 

**Solution** We picture the car and cruiser in the coordinate plane, using the positive x-axis as the eastbound highway and the positive y-axis as the southbound highway (Figure 3.47). We let t represent time and set 

$x =$ position of car at time $t$ 

$y =$ position of cruiser at time $t$ 

s = distance between car and cruiser at time t 

We assume that x, y, and s are differentiable functions of t. 

We want to find $dx / dt$ when 

$$
x = 0. 8 \mathrm{km}, y = 0. 6 \mathrm{km}, \frac {d y}{d t} = - 1 0 0 \mathrm{km/h}, \frac {d s}{d t} = 3 0 \mathrm{km/h}.
$$

Note that dy/dt is negative because y is decreasing. 

We differentiate the distance equation between the car and the cruiser, 

$$
s ^ {2} = x ^ {2} + y ^ {2}
$$

(we could also use $s = \sqrt{x^2 + y^2}$ ), and obtain 

$$
2 s \frac {d s}{d t} = 2 x \frac {d x}{d t} + 2 y \frac {d y}{d t}
$$

$$
\frac {d s}{d t} = \frac {1}{s} \left(x \frac {d x}{d t} + y \frac {d y}{d t}\right) = \frac {1}{\sqrt {x ^ {2} + y ^ {2}}} \left(x \frac {d x}{d t} + y \frac {d y}{d t}\right).
$$

Finally, we use $x = 0.8$ , $y = 0.6$ , $dy / dt = -100$ , $ds / dt = 30$ , and solve for $dx / dt$ . 

$$
3 0 = \frac {1}{\sqrt {(0 . 8) ^ {2} + (0 . 6) ^ {2}}} \left(0. 8 \frac {d x}{d t} + (0. 6) (- 1 0 0)\right)
$$

$$
\frac {d x}{d t} = \frac {3 0 \sqrt {(0 . 8) ^ {2} + (0 . 6) ^ {2}} + (0 . 6) (1 0 0)}{0 . 8} = 1 1 2. 5
$$

At the moment in question, the car's speed is $112.5 \mathrm{~km} / \mathrm{h}$ . 

![[2b53a27ad43db388cc720ae19d42309d31eaa47115f46b5b7cbf1d434a984b4c.jpg|image]]



FIGURE 3.48 The particle P travels clockwise along the circle (Example 4).


**EXAMPLE 4** A particle $P$ moves clockwise at a constant rate along a circle of radius $10\mathrm{m}$ centered at the origin. The particle's initial position is (0,10) on the $y$ -axis, and its final destination is the point (10,0) on the $x$ -axis. Once the particle is in motion, the tangent line at $P$ intersects the $x$ -axis at a point $Q$ (which moves over time). If it takes the particle $30\mathrm{s}$ to travel from start to finish, how fast is the point $Q$ moving along the $x$ -axis when it is $20\mathrm{m}$ from the center of the circle? 

**Solution** We picture the situation in the coordinate plane with the circle centered at the origin (see Figure 3.48). We let t represent time and let $\theta$ denote the angle in radians from the x-axis to the radial line joining the origin to P. Since the particle travels from start to finish in 30 s, it is traveling along the circle at a constant rate of $\pi/2$ radians in 1/2 min, or $\pi$ rad/min. In other words, $d\theta/dt = -\pi$ , with t being measured in minutes. The negative sign appears because $\theta$ is decreasing over time. 

Setting $x(t)$ to be the distance in meters at time t from the point Q to the origin, we see from Figure 3.48 that 

$$
x \cos \theta = 1 0.
$$

Equation relating the variables 

Differentiation with respect to t gives 

$$
x (- \sin \theta) \frac {d \theta}{d t} + \frac {d x}{d t} \cos \theta = 0. \quad \text { Related   rates   equation }
$$

We want to find $dx / dt$ given that $x = 20$ and $d\theta / dt = -\pi$ . The equation $x \cos \theta = 10$ implies $\cos \theta = 10 / 20 = 1 / 2$ . Furthermore, for angles $\theta$ in the first quadrant, the identity $\sin^2\theta + \cos^2\theta = 1$ yields $\sin \theta = \sqrt{1 - (1/2)^2} = \sqrt{3}/2$ . Substituting into the related rates equation, we obtain 

$$
\begin{array}{c} (2 0) \left(- \frac {\sqrt {3}}{2}\right) (- \pi) + \frac {d x}{d t} \cdot \frac {1}{2} = 0 \\ \frac {d x}{d t} = - 2 0 \sqrt {3} \pi . \end{array}
$$

Note that $x$ is decreasing because $dx / dt$ is negative. At the moment in question, the point $Q$ is moving toward the origin at the speed of $20\sqrt{3}\pi \approx 109\mathrm{m / min}$ . 

![[7bfbfc2cf5ea7867e17d4932be90c060179ec99a49785a1f50e30474d00a584f.jpg|image]]


**EXAMPLE 5** A jet airliner is flying at a constant altitude of 10,000 m above sea level as it approaches a Pacific island. The aircraft comes within the direct line of sight of a radar station located on the island, and the radar indicates the initial angle between sea level and its line of sight to the aircraft is $30^{\circ}$ . How fast (in kilometers per hour) is the aircraft approaching the island when first detected by the radar instrument if it is turning upward (counterclockwise) at the rate of 1/3 deg/s in order to keep the aircraft within its direct line of sight? 


FIGURE 3.49 Jet airliner A traveling at constant altitude toward radar station R (Example 5).


**Solution** The aircraft A and radar station R are pictured in the coordinate plane, using the positive x-axis as the horizontal distance at sea level from R to A, and the positive y-axis as the vertical altitude above sea level. We let t represent time and observe that y = 10,000 is a constant. The general situation and line-of-sight angle $\theta$ are depicted in Figure 3.49. We want to find dx/dt when $\theta = \pi/6$ rad and $d\theta/dt = 1/3$ deg/s. 

From Figure 3.49, we see that 

$$
\frac {1 0 , 0 0 0}{x} = \tan \theta \quad \text { or } \quad x = 1 0, 0 0 0 \cot \theta .
$$

Using kilometers instead of meters for our distance units, the last equation translates to 

$$
x = \frac {1 0 , 0 0 0}{1 0 0 0} \cot \theta .
$$

Differentiation with respect to t gives 

$$
\frac {d x}{d t} = - 1 0 \csc^ {2} \theta \frac {d \theta}{d t}.
$$

![[056d7864531fed74a9f756576e5d24bf153f955b2071bc3f94cf3c4c10976d16.jpg|image]]



(a)


![[b317e2c21f853dd960db2310d66b7c3abd44a501503dfff160879fb052d41d48.jpg|image]]



FIGURE 3.50 A worker at M walks to the right, pulling the weight W upward as the rope moves through the pulley P (Example 6).


When $\theta = \pi /6$ , $\sin^2\theta = 1 / 4$ , so $\csc^2\theta = 4$ . Converting $d\theta /dt = 1 / 3$ deg/s to radians per hour, we find 

$$
\frac {d \theta}{d t} = \frac {1}{3} \left(\frac {\pi}{1 8 0}\right) (3 6 0 0) \mathrm{rad/h}. \quad 1 \mathrm{h} = 3 6 0 0 \mathrm{s}, 1 \mathrm{deg} = \pi / 1 8 0 \mathrm{rad}
$$

Substitution into the equation for dx/dt then gives 

$$
\frac {d x}{d t} = (- 1 0) (4) \left(\frac {1}{3}\right) \left(\frac {\pi}{1 8 0}\right) (3 6 0 0) \approx - 8 3 8.
$$

The negative sign appears because the distance x is decreasing, so the aircraft is approaching the island at a speed of approximately 838 km/h when first detected by the radar. 

Note that the solution of Example 5 involved several unit conversions: from seconds to hours and from degrees to radians. When solving related rates problems, we should check that consistent units are used. 

**EXAMPLE 6** Figure 3.50a shows a rope running through a pulley at P and bearing a weight W at one end. The other end is held 1.5 m above the ground in the hand M of a worker. Suppose the pulley is 7.5 m above ground, the rope is 13.5 m long, and the worker is walking rapidly away from the vertical line PW at the rate of 1.2 m/s. How fast is the weight being raised when the worker's hand is 6.3 m away from PW? 

**Solution** We let $OM$ be the horizontal line of length $x$ m from a point $O$ directly below the pulley to the worker's hand $M$ at any instant of time (Figure 3.50). Let $h$ be the height of the weight $W$ above $O$ , and let $z$ denote the length of rope from the pulley $P$ to the worker's hand. We want to know $dh/dt$ when $x = 6.3$ given that $dx/dt = 1.2$ . Note that the height of $P$ above $O$ is $6$ m because $O$ is $1.5$ m above the ground. We assume the angle at $O$ is a right angle. 

At any instant of time t, we have the following relationships (see Figure 3.50b): 

$$
\begin{array}{l l} 6 - h + z = 1 3. 5 & \text { Total   length   of   rope   is } 1 3. 5 \mathrm{m}. \\ 6 ^ {2} + x ^ {2} = z ^ {2}. & \text { Angle   at } O \text { is   a   right   angle }. \end{array}
$$

If we solve for $z = 7.5 + h$ in the first equation, and substitute into the second equation, we have 

$$
6 ^ {2} + x ^ {2} = (7. 5 + h) ^ {2}.\tag{1}
$$

Differentiating both sides with respect to t gives 

$$
2 x \frac {d x}{d t} = 2 (7. 5 + h) \frac {d h}{d t},
$$

and solving this last equation for dh/dt we find 

$$
{\frac {d h}{d t}} = {\frac {x}{7 . 5 + h}} {\frac {d x}{d t}}.\tag{2}
$$

Since we know $dx / dt$ , it remains only to find $7.5 + h$ at the instant when $x = 6.3$ . From Equation (1), 

$$
6 ^ {2} + 6. 3 ^ {2} = (7. 5 + h) ^ {2}
$$

so that 

$$
(7. 5 + h) ^ {2} = 7 5. 6 9, \text {   or   } 7. 5 + h = 8. 7.
$$

Equation (2) now gives 

$$
\frac {d h}{d t} = \frac {6 . 3}{8 . 7} \cdot 1. 2 = \frac {7 5 6}{8 7 0} \approx 0. 8 7 \mathrm{m/s}
$$

as the rate at which the weight is being raised when $x = 6.3 \, m$ . 

## EXERCISES 3.10

1. Area Suppose that the radius $r$ and area $A = \pi r^2$ of a circle are differentiable functions of $t$ . Write an equation that relates $dA / dt$ to $dr / dt$ . 

2. Surface area Suppose that the radius r and surface area $S = 4\pi r^{2}$ of a sphere are differentiable functions of t. Write an equation that relates dS/dt to dr/dt. 

3. Assume that $y = 5x$ and $dx / dt = 2$ . Find $dy / dt$ . 

4. Assume that $2x + 3y = 12$ and dy/dt = -2. Find dx/dt. 

5. If $y = x^2$ and $dx / dt = 3$ , then what is $dy / dt$ when $x = -1$ ? 

6. If $x = y^{3} - y$ and dy/dt = 5, then what is dx/dt when y = 2? 

7. If $x^{2} + y^{2} = 25$ and $dx / dt = -2$ , then what is $dy / dt$ when $x = 3$ and $y = -4$ ? 

8. If $x^{2}y^{3}=4/27$ and dy/dt=1/2, then what is dx/dt when x=2? 

9. If $L = \sqrt{x^2 + y^2}$ , $dx / dt = -1$ , and $dy / dt = 3$ , find $dL / dt$ when $x = 5$ and $y = 12$ . 

10. If $r + s^{2} + v^{3} = 12$ , dr/dt = 4, and ds/dt = -3, find dv/dt when r = 3 and s = 1. 

11. If the original 24 m edge length x of a cube decreases at the rate of 5 m/min, when x = 3 m at what rate does the cube's
a. surface area change? b. volume change? 

12. A cube's surface area increases at the rate of $72 \mathrm{~cm}^2/\mathrm{s}$ . At what rate is the cube's volume changing when the edge length is $x = 3 \mathrm{~cm}$ ? 

13. Volume The radius $r$ and height $h$ of a right circular cylinder are related to the cylinder's volume $V$ by the formula $V = \pi r^2 h$ . 

a. How is $dV / dt$ related to $dh / dt$ if $r$ is constant? 

b. How is $dV / dt$ related to $dr / dt$ if $h$ is constant? 

c. How is $dV / dt$ related to $dr / dt$ and $dh / dt$ if neither $r$ nor $h$ is constant? 

14. Volume The radius $r$ and height $h$ of a right circular cone are related to the cone's volume $V$ by the equation $V = (1/3)\pi r^2 h$ . 

a. How is $dV / dt$ related to $dh / dt$ if $r$ is constant? 

b. How is $dV / dt$ related to $dr / dt$ if $h$ is constant? 

c. How is $dV / dt$ related to $dr / dt$ and $dh / dt$ if neither $r$ nor $h$ is constant? 

15. Changing voltage The voltage V (volts), current I (amperes), and resistance R (ohms) of an electric circuit like the one shown here are related by the equation V = IR. Suppose that V is increasing at the rate of 1 volt/s while I is decreasing at the rate of 1/3 amp/s. Let t denote time in seconds. 

![[6f6dd3a8f495284f3568ba68bdc61ece85ee1c67b90d5eee5cd1145325b75b99.jpg|image]]


a. What is the value of $dV / dt$ ? 

b. What is the value of $dI / dt$ ? 

c. What equation relates $dR / dt$ to $dV / dt$ and $dI / dt$ ? 

d. Find the rate at which R is changing when V = 12 volts and I = 2 amps. Is R increasing, or decreasing? 

16. Electrical power The power $P$ (watts) of an electric circuit is related to the circuit's resistance $R$ (ohms) and current $I$ (amperes) by the equation $P = RI^2$ . 

a. How are $dP / dt$ , $dR / dt$ , and $dI / dt$ related if none of $P, R$ , and $I$ are constant? 

b. How is $dR / dt$ related to $dI / dt$ if $P$ is constant? 

17. Distance Let $x$ and $y$ be differentiable functions of $t$ , and let $s = \sqrt{x^2 + y^2}$ be the distance between the points $(x,0)$ and $(0,y)$ in the $xy$ -plane. 

a. How is ds/dt related to dx/dt if y is constant? 

b. How is ds/dt related to dx/dt and dy/dt if neither x nor y is constant? 

c. How is $dx / dt$ related to $dy / dt$ if $s$ is constant? 

18. Diagonals If $x, y$ , and $z$ are lengths of the edges of a rectangular box, then the common length of the box's diagonals is $s = \sqrt{x^2 + y^2 + z^2}$ . 

a. Assuming that $x, y$ , and $z$ are differentiable functions of $t$ , how is $ds / dt$ related to $dx / dt$ , $dy / dt$ , and $dz / dt$ ? 

b. How is ds/dt related to dy/dt and dz/dt if x is constant? 

c. How are $dx / dt$ , $dy / dt$ , and $dz / dt$ related if $s$ is constant? 

19. Area The area A of a triangle with sides of lengths a and b enclosing an angle of measure $\theta$ is 

$$
A = \frac {1}{2} a b \sin \theta .
$$

a. How is dA/dt related to $d\theta/dt$ if a and b are constant? 

b. How is dA/dt related to $d\theta/dt$ and da/dt if only b is constant? 

c. How is $dA / dt$ related to $d\theta / dt$ , $da / dt$ , and $db / dt$ if none of $a$ , $b$ , and $\theta$ are constant? 

20. Heating a plate When a circular plate of metal is heated in an oven, its radius increases at the rate of $0.01\mathrm{cm / min}$ . At what rate is the plate's area increasing when the radius is $50~\mathrm{cm}$ ? 

21. Changing dimensions in a rectangle The length l of a rectangle is decreasing at the rate of 2 cm/s while the width w is increasing at the rate of 2 cm/s. When l = 12 cm and w = 5 cm, find the rates of change of (a) the area, (b) the perimeter, and (c) the lengths of the diagonals of the rectangle. Which of these quantities are decreasing, and which are increasing? 

22. Changing dimensions in a rectangular box Suppose that the edge lengths x, y, and z of a closed rectangular box are changing at the following rates: 

$$
\frac {d x}{d t} = 1 \mathrm{m/s}, \quad \frac {d y}{d t} = - 2 \mathrm{m/s}, \quad \frac {d z}{d t} = 1 \mathrm{m/s}.
$$

Find the rates at which the box's (a) volume, (b) surface area, and (c) diagonal length $s = \sqrt{x^2 + y^2 + z^2}$ are changing at the instant when $x = 4$ , $y = 3$ , and $z = 2$ . 

23. A sliding ladder A 3.9-m ladder is leaning against a house when its base starts to slide away (see accompanying figure). By the time the base is 3.6 m from the house, the base is moving at the rate of 1.5 m/s. 

a. How fast is the top of the ladder sliding down the wall then? 

b. At what rate is the area of the triangle formed by the ladder, wall, and ground changing then? 

c. At what rate is the angle $\theta$ between the ladder and the ground changing then? 

![[9e0159a893856dae72449e071a7485483f8a1aceb99344d7bd6a08a36447f4ff.jpg|image]]


24. Commercial air traffic Two commercial airplanes are flying at an altitude of 12,000 m along straight-line courses that intersect at right angles. Plane A is approaching the intersection point at a speed of 442 knots (nautical miles per hour; a nautical mile is 1852 m). Plane B is approaching the intersection at 481 knots. At what rate is the distance between the planes changing when A is 5 nautical miles from the intersection point, and B is 12 nautical miles from the intersection point? 

25. Flying a kite A girl flies a kite at a height of 90 m, the wind carrying the kite horizontally away from her at a rate of 7.5 m/s. How fast must she let out the string when the kite is 150 m away from her? 

26. Boring a cylinder The mechanics at Lincoln Automotive are reboring a 15-cm-deep cylinder to fit a new piston. The machine they are using increases the cylinder's radius one-thousandth of a centimeter every 3 min. How rapidly is the cylinder volume increasing when the bore (diameter) is 10 cm? 

27. A growing sand pile Sand falls from a conveyor belt at the rate of $10 \, m^{3}/min$ onto the top of a conical pile. The height of the pile is always three-eighths of the base diameter. How fast are the (a) height and (b) radius changing when the pile is 4 m high? Answer in centimeters per minute. 

28. A draining conical reservoir Water is flowing at the rate of $50 \, m^{3}/min$ from a shallow concrete conical reservoir (vertex down) of base radius 45 m and height 6 m. 

a. How fast (in centimeters per minute) is the water level falling when the water is 5 m deep? 

b. How fast is the radius of the water's surface changing then? Answer in centimeters per minute. 

29. A draining hemispherical reservoir Water is flowing at the rate of $6 \, m^{3}/min$ from a reservoir shaped like a hemispherical bowl of radius 13 m, shown here in profile. Answer the following questions, given that the volume of water in a hemispherical bowl of radius R is $V = (\pi/3)y^{2}(3R - y)$ when the water is y meters deep. 

![[ab44a25e0f70c5b638a8fc011b63b6862c97ad51d4a33d55f940c77a76b9a4af.jpg|image]]


a. At what rate is the water level changing when the water is 8 m deep? 

b. What is the radius $r$ of the water's surface when the water is $y$ m deep? 

c. At what rate is the radius r changing when the water is 8 m deep? 

30. A growing raindrop Suppose that a drop of mist is a perfect sphere and that, through condensation, the drop picks up moisture at a rate proportional to its surface area. Show that under these circumstances the drop's radius increases at a constant rate. 

31. The radius of an inflating balloon A spherical balloon is inflated with helium at the rate of $100\pi \mathrm{m}^3/\mathrm{min}$ . How fast is the balloon's radius increasing at the instant the radius is $5\mathrm{m}$ ? How fast is the surface area increasing? 

32. Hauling in a dinghy A dinghy is pulled toward a dock by a rope from the bow through a ring on the dock 2 m above the bow. The rope is hauled in at the rate of 0.5 m/s. 

a. How fast is the boat approaching the dock when 3 m of rope are out? 

b. At what rate is the angle $\theta$ changing at this instant (see the figure)? 

![[e4390440a0ce04b0f32707da391cd37424cede75fa1eb044f456e7318191713c.jpg|image]]


33. A balloon and a bicycle A balloon is rising vertically above a level, straight road at a constant rate of 0.3 m/s. Just when the balloon is 20 m above the ground, a bicycle moving at a constant rate of 5 m/s passes under it. How fast is the distance $s(t)$ between the bicycle and balloon increasing 3 s later? 

![[8a3c91568e3fd36c37bef35632492e1e803c935aab0c24786f1fcd0adb46eca5.jpg|image]]


34. Making coffee Coffee is draining from a conical filter into a cylindrical coffeepot at the rate of $160\mathrm{cm}^3/\mathrm{min}$ . 

a. How fast is the level in the pot rising when the coffee in the cone is 12 cm deep? 

b. How fast is the level in the cone falling then? 

![[4688a3138f1e9ab3c0ab3bd519bb049b7aae465c04270b89fe73651da4aaf261.jpg|image]]


35. Cardiac output In the late 1860s, Adolf Fick, a professor of physiology in the Faculty of Medicine in Würzberg, Germany, developed one of the methods we use today for measuring how much blood your heart pumps in a minute. Your cardiac output as you read this sentence is probably about 7 L/min. At rest it is likely to be a bit under 6 L/min. If you are a trained marathon runner running a marathon, your cardiac output can be as high as 30 L/min. 

Your cardiac output can be calculated with the formula 

$$
y = \frac {Q}{D},
$$

where Q is the number of milliliters of $CO_{2}$ you exhale in a minute and D is the difference between the $CO_{2}$ concentration (ml/L) in the blood pumped to the lungs and the $CO_{2}$ concentration in the blood returning from the lungs. With Q = 233 ml/min and D = 97 - 56 = 41 ml/L, 

$$
y = \frac {2 3 3 \mathrm{ml/min}}{4 1 \mathrm{ml/L}} \approx 5. 6 8 \mathrm{L/min},
$$

fairly close to the 6 L/min that most people have at basal (resting) conditions. (Data courtesy of J. Kenneth Herd, M.D., Quillan College of Medicine, East Tennessee State University.) 

Suppose that when Q = 233 and D = 41, we also know that D is decreasing at the rate of 2 units a minute but that Q remains unchanged. What is happening to the cardiac output? 

36. Moving along a parabola A particle moves along the parabola $y = x^{2}$ in the first quadrant in such a way that its x-coordinate (measured in meters) increases at a steady 10 m/s. How fast is the angle of inclination $\theta$ of the line joining the particle to the origin changing when x = 3 m? 

37. Motion in the plane The coordinates of a particle in the metric xy-plane are differentiable functions of time t with dx/dt = -1 m/s and dy/dt = -5 m/s. How fast is the particle's distance from the origin changing as it passes through the point $(5,12)$ ? 

38. Videotaping a moving car You are videotaping a race from a stand 40 m from the track, following a car that is moving at 288 km/h (80 m/s), as shown in the accompanying figure. How fast will your camera angle $\theta$ be changing when the car is right in front of you? A half second later? 

![[930c573f0d7a9f358c9a6159d4f9da0352bf63eba9a5e7e67ebd64a0126ea063.jpg|image]]


39. A moving shadow A light shines from the top of a pole $15\mathrm{m}$ high. A ball is dropped from the same height from a point $9\mathrm{m}$ away from the light. (See accompanying figure.) How fast is the shadow of the ball moving along the ground $1/2\mathrm{s}$ later? (Assume the ball falls a distance $s = 4.9t^2\mathrm{m}$ in $t$ seconds.) 

![[54a933d0408f50f1002b4c1325efda636987b6f90fd3442c0ea62c486062a957.jpg|image]]


40. A building's shadow On a morning of a day when the sun will pass directly overhead, the shadow of a 24 m building on level ground is 18 m long. At the moment in question, the angle $\theta$ the sun makes with the ground is increasing at the rate of $0.27^{\circ} / \mathrm{min}$ . At what rate is the shadow decreasing? (Remember to use radians. Express your answer in centimeters per minute, to the nearest tenth.) 

![[7463590c7459211acad9812e2d497811ed48e98bdabc2ae9b210fcd5b0456d32.jpg|image]]


41. A melting ice layer A spherical iron ball 8 cm in diameter is coated with a layer of ice of uniform thickness. If the ice melts at the rate of $10 \, cm^{3}/min$ , how fast is the thickness of the ice decreasing when it is 2 cm thick? How fast is the outer surface area of ice decreasing? 

42. Highway patrol A highway patrol plane flies $3\mathrm{km}$ above a level, straight road at a steady $120\mathrm{km / h}$ . The pilot sees an oncoming car and with radar determines that at the instant the line-of-sight distance from plane to car is $5\mathrm{km}$ , the line-of-sight distance is decreasing at the rate of $160\mathrm{km / h}$ . Find the car's speed along the highway. 

43. Baseball players A baseball diamond is a square 27 m on a side. A player runs from first base to second at a rate of 5 m/s. 

a. At what rate is the player's distance from third base changing when the player is $9\mathrm{m}$ from first base? 

b. At what rates are angles $\theta_{1}$ and $\theta_{2}$ (see the figure) changing at that time? 

c. The player slides into second base at the rate of 4.5 m/s. At what rates are angles $\theta_{1}$ and $\theta_{2}$ changing as the player touches base? 

![[735dfda7b14579c6cdf87cf383b5d543927a3b085a6f6f2128a7a01a318e9074.jpg|image]]


44. Ships Two ships are steaming straight away from a point O along routes that make a $120^{\circ}$ angle. Ship A moves at 14 knots (nautical miles per hour; a nautical mile is 1852 m). Ship B moves at 21 knots. How fast are the ships moving apart when OA = 5 and OB = 3 nautical miles? 

45. Clock's moving hands At what rate is the angle between a clock's minute and hour hands changing at 4 o'clock in the afternoon? 

46. Oil spill An explosion at an oil rig located in gulf waters causes an elliptical oil slick to spread on the surface from the rig. The slick is a constant 20 cm thick. After several days, when the major axis of the slick is 2 km long and the minor axis is 3/4 km wide, it is determined that its length is increasing at the rate of 9 m/h, and its width is increasing at the rate of 3 m/h. At what rate (in cubic meters per hour) is oil flowing from the site of the rig at that time? 

47. A lighthouse beam A lighthouse sits 1 km offshore, and its beam of light rotates counterclockwise at the constant rate of 3 full circles per minute. At what rate is the image of the beam moving down the shoreline when the image is 1 km from the spot on the shoreline nearest the lighthouse? 

![[b97f19f4effc4ffd98a727b8c340d0b2928d905cf6e8841bba1b28bcfaaee699.jpg|image]]


## 3.11 Linearization and Differentials

It is often useful to approximate complicated functions with simpler ones that give the accuracy we want for specific applications and, at the same time, are easier to work with than the original functions. The approximating functions discussed in this section are called linearizations, and they are based on tangent lines. Other approximating functions, such as polynomials, are discussed in Chapter 9. 

We introduce new variables $dx$ and $dy$ , called differentials, and define them in a way that makes Leibniz's notation for the derivative $dy / dx$ a true ratio. We use $dy$ to estimate error in measurement, which then provides for a precise proof of the Chain Rule (Section 3.6). 

## Linearization

As you can see in Figure 3.51, the tangent line to the curve $y = x^{2}$ lies close to the curve near the point of tangency. For a brief interval to either side, the y-values along the tangent line give good approximations to the y-values on the curve. We observe this phenomenon by zooming in on the two graphs at the point of tangency, or by looking at tables of values for the difference between $f(x)$ and its tangent line near the x-coordinate of the point of tangency. The phenomenon is true not just for parabolas; every differentiable curve behaves locally like its tangent line. 

![[12a18dc16758c3a59efd86a373ea3d07da001ec68da780c2fe689534464132b1.jpg|image]]



$y = x^{2}$ and its tangent line y = 2x - 1 at (1, 1).


![[50fcaca8b84aa5873d2c122a4ca3f4b37bfa55da185b89e58aed3da8f9680fa9.jpg|image]]



Tangent line and curve very close near $(1, 1)$ .


![[a9f7adf76eb2e32336c4feb92d1cd57df498247246b168ac5a1a315520ef49f6.jpg|image]]



Tangent line and curve very close throughout entire x-interval shown.


![[cf9f9cc40a4a17cf609e4bd604760c328609e9c2dd23c3cef89d8c4370df3cc1.jpg|image]]



Tangent line and curve closer still. Computer screen cannot distinguish tangent line from curve on this x-interval.



FIGURE 3.51 The more we magnify the graph of a function near a point where the function is differentiable, the flatter the graph becomes and the more it resembles its tangent line.


![[347458df7679d5da1103e694c8e8394ca0bf3e163aa24bdef3f4e277f1c282d8.jpg|image]]



FIGURE 3.52 The tangent line to the curve $y = f(x)$ at $x = a$ is the line $L(x) = f(a) + f'(a)(x - a)$ .


In general, the tangent line to $y = f(x)$ at a point x = a, where f is differentiable (Figure 3.52), passes through the point $(a, f(a))$ , so its point-slope equation is 

$$
y = f (a) + f ^ {\prime} (a) (x - a).
$$

Thus, this tangent line is the graph of the linear function 

$$
L (x) = f (a) + f ^ {\prime} (a) (x - a).
$$

As long as this line remains close to the graph of f as we move off the point of tangency, $L(x)$ gives a good approximation to $f(x)$ . 

> ***DEFINITIONS*** If f is differentiable at x = a, then the approximating function 
>
> $$
> L (x) = f (a) + f ^ {\prime} (a) (x - a)
> $$
>
> is the linearization of f at a. The approximation 
>
> $$
> f (x) \approx L (x)
> $$
>
of f by L is the standard linear approximation of f at a. The point x = a is the center of the approximation. 

**EXAMPLE 1** Find the linearization of $f(x) = \sqrt{1 + x}$ at x = 0 (Figure 3.53). 

![[9c6ea95d97e6070396888ddd09bf1f039ca4bf2ebf17341a4bc1ee15cf700274.jpg|image]]



FIGURE 3.53 The graph of $y = \sqrt{1 + x}$ and its linearizations at x = 0 and x = 3. Figure 3.54 shows a magnified view of the small window about 1 on the y-axis.


![[2e31984fbea4a29219f71d7cbb88d1cdaa872f929125f53c58cda89ab6b36940.jpg|image]]



FIGURE 3.54 Magnified view of the window in Figure 3.53.



**Solution** Since


$$
f ^ {\prime} (x) = \frac {1}{2} (1 + x) ^ {- 1 / 2},
$$

we have $f(0) = 1$ and $f'(0) = 1/2$ , giving the linearization 

$$
L (x) = f (a) + f ^ {\prime} (a) (x - a) = 1 + \frac {1}{2} (x - 0) = 1 + \frac {x}{2}.
$$


See Figure 3.54.



The following table shows how accurate the approximation $\sqrt{1+x} \approx 1 + (x/2)$ from Example 1 is for some values of x near 0. As we move away from zero, we lose accuracy. For example, for x = 2, the linearization gives 2 as the approximation for $\sqrt{3}$ , which is not even accurate to one decimal place.


<table><tr><td>Approximation</td><td>True value</td><td>|True value - approximation|</td></tr><tr><td><eq>\sqrt{1.005} \approx 1 + \frac{0.005}{2} = 1.00250</eq></td><td>1.002497</td><td><eq>0.000003 &lt; 10^{-5}</eq></td></tr><tr><td><eq>\sqrt{1.05} \approx 1 + \frac{0.05}{2} = 1.025</eq></td><td>1.024695</td><td><eq>0.000305 &lt; 10^{-3}</eq></td></tr><tr><td><eq>\sqrt{1.2} \approx 1 + \frac{0.2}{2} = 1.10</eq></td><td>1.095445</td><td><eq>0.004555 &lt; 10^{-2}</eq></td></tr></table>

Do not be misled by the preceding calculations into thinking that whatever we do with a linearization is better done with a calculator. In practice, we would never use a linearization to find a particular square root. The utility of a linearization is its ability to replace a complicated formula by a simpler one over an entire interval of values. If we have to work with $\sqrt{1 + x}$ for x in an interval close to 0 and can tolerate the small amount of error involved over that interval, we can work with $1 + (x/2)$ instead. Of course, we then need to know how much error there is. We further examine the estimation of error in Chapter 9. 

A linear approximation normally loses accuracy away from its center. As Figure 3.53 suggests, the approximation $\sqrt{1+x} \approx 1 + (x/2)$ is too crude to be useful near x = 3. There, we need the linearization at x = 3. 

## **EXAMPLE 2** Find the linearization of $f(x) = \sqrt{1 + x}$ at x = 3. (See Figure 3.53.)

![[38e0ded3c75858a8c2a60863d50ba6bc080bad9864b48f20f34a3dddc2eac72d.jpg|image]]


FIGURE 3.55 The graph of $f(x) = \cos x$ and its linearization at $x = \pi/2$ . Near $x = \pi/2$ , $\cos x \approx 2x + (\pi/2)$ (Example 3). 

we have 

Approximations Near $x = 0$ 

$$
\sqrt {1 + x} \approx 1 + \frac {x}{2}
$$

$$
\frac {1}{1 - x} \approx 1 + x
$$

$$
\frac {1}{\sqrt {1 - x ^ {2}}} \approx 1 + \frac {x ^ {2}}{2}
$$

**Solution** We evaluate the equation defining $L(x)$ at a = 3. With 

$$
f (3) = 2, \quad f ^ {\prime} (3) = \left. \frac {1}{2} (1 + x) ^ {- 1 / 2} \right| _ {x = 3} = \frac {1}{4},
$$

$$
L (x) = 2 + \frac {1}{4} (x - 3) = \frac {5}{4} + \frac {x}{4}.
$$

At $x = 3.2$ , the linearization in Example 2 gives 

$$
\sqrt {1 + x} = \sqrt {1 + 3 . 2} \approx \frac {5}{4} + \frac {3 . 2}{4} = 1. 2 5 0 + 0. 8 0 0 = 2. 0 5 0,
$$

which differs from the true value $\sqrt{4.2} \approx 2.04939$ by less than one one-thousandth. The linearization in Example 1 gives 

$$
\sqrt {1 + x} = \sqrt {1 + 3 . 2} \approx 1 + \frac {3 . 2}{2} = 1 + 1. 6 = 2. 6,
$$

a result that is off by more than 25%. 

## **EXAMPLE 3** Find the linearization of $f(x) = \cos x$ at $x = \pi/2$ (Figure 3.55).

**Solution** Since $f(\pi / 2) = \cos (\pi / 2) = 0$ , $f'(x) = -\sin x$ , and $f'(\pi / 2) = -\sin (\pi / 2) = -1$ , we find the linearization at $a = \pi / 2$ to be 

$$
\begin{array}{l} L (x) = f (a) + f ^ {\prime} (a) (x - a) \\ \qquad = 0 + (- 1) \Big (x - \frac {\pi}{2} \Big) \\ \qquad = - x + \frac {\pi}{2}. \end{array}
$$

An important linear approximation for roots and powers is 

$$
(1 + x) ^ {k} \approx 1 + k x \quad (x \text { near } 0; \text { any   number } k)
$$

(Exercise 15). This approximation, which is good for values of x sufficiently close to zero, has broad application. For example, when x is small, 

$$
\sqrt {1 + x} \approx 1 + \frac {1}{2} x \quad k = 1 / 2
$$

$$
\frac {1}{1 - x} = (1 - x) ^ {- 1} \approx 1 + (- 1) (- x) = 1 + x \quad k = - 1; \text { replace } x \text { by } - x.
$$

$$
\sqrt [ 3 ]{1 + 5 x ^ {4}} = (1 + 5 x ^ {4}) ^ {1 / 3} \approx 1 + \frac {1}{3} (5 x ^ {4}) = 1 + \frac {5}{3} x ^ {4} \quad k = 1 / 3; \text { replace } x \text { by } 5 x ^ {4}.
$$

$$
\frac {1}{\sqrt {1 - x ^ {2}}} = (1 - x ^ {2}) ^ {- 1 / 2} \approx 1 + \left(- \frac {1}{2}\right) (- x ^ {2}) = 1 + \frac {1}{2} x ^ {2} \quad k = - 1 / 2; \text { replace } x \text { by } - x ^ {2}.
$$

## Differentials

We sometimes use the Leibniz notation dy/dx to represent the derivative of y with respect to x. Contrary to its appearance, it is not a ratio. We now introduce two new variables dx and dy with the property that when their ratio exists, it is equal to the derivative. 

> ***DEFINITION*** Let $y = f(x)$ be a differentiable function. The differential dx is an independent variable. The differential dy is 
>
> $$
> d y = f ^ {\prime} (x) d x.
> $$
>
Unlike the independent variable dx, the variable dy is always a dependent variable. It depends on both x and dx. If dx is given a specific value and x is a particular number in the domain of the function f, then these values determine the numerical value of dy. Often the variable dx is chosen to be $\Delta x$ , the change in x. 

## **EXAMPLE 4**

(a) Find dy if $y = x^{5} + 37x$ . 

(b) Find the value of dy when x = 1 and dx = 0.2. 

**Solution** 

(a) $dy = (5x^{4} + 37)dx$ 

(b) Substituting x = 1 and dx = 0.2 in the expression for dy, we have 

$$
d y = (5 \cdot 1 ^ {4} + 3 7) 0. 2 = 8. 4.
$$

The geometric meaning of differentials is shown in Figure 3.56. Let $x = a$ and set $dx = \Delta x$ . The corresponding change in $y = f(x)$ is 

$$
\Delta y = f (a + d x) - f (a).
$$

The corresponding change in the tangent line L is 

$$
\begin{array}{l} \Delta L = L (a + d x) - L (a) \\ = \underbrace {f (a) + f ^ {\prime} (a) [ (a + d x) - a ]} _ {L (a + d x)} - \underbrace {f (a)} _ {L (a)} \\ = f ^ {\prime} (a) d x. \end{array}
$$

![[265cacd525d9ada6b7109913a186771bd0692e5f3997b77728b91d004ba7ef92.jpg|image]]



FIGURE 3.56 Geometrically, the differential dy is the change $\Delta L$ in the linearization of f when x = a changes by an amount dx = $\Delta x$ .


That is, the change in the linearization of f is precisely the value of the differential dy when x = a and dx = $\Delta x$ . Therefore, dy represents the amount the tangent line rises or falls when x changes by an amount dx = $\Delta x$ . 

If $dx \neq 0$ , then the quotient of the differential $dy$ by the differential $dx$ is equal to the derivative $f'(x)$ because 

$$
d y \div d x = \frac {f ^ {\prime} (x) d x}{d x} = f ^ {\prime} (x) = \frac {d y}{d x}.
$$

We sometimes write 

$$
d f = f ^ {\prime} (x) d x
$$

in place of $dy = f'(x) dx$ , calling $df$ the differential of $f$ . For instance, if $f(x) = 3x^2 - 6$ , then 

$$
d f = d (3 x ^ {2} - 6) = 6 x d x.
$$

Every differentiation formula like 

$$
\frac {d (u + v)}{d x} = \frac {d u}{d x} + \frac {d v}{d x} \quad \text { or } \quad \frac {d (\sin u)}{d x} = \cos u \frac {d u}{d x}
$$

has a corresponding differential form like 

$$
d (u + v) = d u + d v \quad \text { or } \quad d (\sin u) = \cos u   d u.
$$

**EXAMPLE 5** We can use the Chain Rule and other differentiation rules to find differentials of functions. 

$$
\begin{array}{l} \text {(a)} d (\tan 2 x) = \sec^ {2} (2 x) d (2 x) = 2 \sec^ {2} 2 x d x \\ \text {(b)} d \left(\frac {x}{x + 1}\right) = \frac {(x + 1) d x - x d (x + 1)}{(x + 1) ^ {2}} = \frac {x d x + d x - x d x}{(x + 1) ^ {2}} = \frac {d x}{(x + 1) ^ {2}} \end{array}
$$

## Estimating with Differentials

Suppose we know the value of a differentiable function $f(x)$ at a point a and want to estimate how much this value will change if we move to a nearby point $a + dx$ . If $dx = \Delta x$ is small, then we can see from Figure 3.56 that $\Delta y$ is approximately equal to the differential dy. Since 

FIGURE 3.57 When dr is small compared with a, the differential dA gives the estimate $A(a + dr) = \pi a^{2} + dA$ (Example 6). 

![[68d14f85d31cc6d057e2652205af2cb75b966dc47e8522da75bffc90ddc53001.jpg|image]]


$$
f (a + d x) = f (a) + \Delta y, \quad \Delta x = d x
$$

the differential approximation gives 

$$
f (a + d x) \approx f (a) + d y
$$

when $dx = \Delta x$ . Thus the approximation $\Delta y \approx dy$ can be used to estimate $f(a + dx)$ when $f(a)$ is known, dx is small, and $dy = f'(a)dx$ . 

**EXAMPLE 6** The radius $r$ of a circle increases from $a = 10\mathrm{m}$ to $10.1\mathrm{m}$ (Figure 3.57). Use $dA$ to estimate the increase in the circle's area $A$ . Estimate the area of the enlarged circle and compare your estimate to the true area found by direct calculation. 

**Solution** Since $A = \pi r^{2}$ , the estimated increase is 

$$
d A = A ^ {\prime} (a) d r = 2 \pi a d r = 2 \pi (1 0) (0. 1) = 2 \pi \mathrm{m} ^ {2}.
$$

Thus, since $A(r + \Delta r) \approx A(r) + dA$ , we have 

$$
\begin{array}{c} A (1 0 + 0. 1) \approx A (1 0) + 2 \pi \\ = \pi (1 0) ^ {2} + 2 \pi = 1 0 2 \pi . \end{array}
$$

The area of a circle of radius 10.1 m is approximately $102\pi \, m^{2}$ . 

The true area is 

$$
\begin{array}{c} A (1 0. 1) = \pi (1 0. 1) ^ {2} \\ = 1 0 2. 0 1 \pi \mathrm{m} ^ {2}. \end{array}
$$

The error in our estimate is $0.01\pi m^{2}$ , which is the difference $\Delta A - dA$ . 

When using differentials to estimate functions, our goal is to choose a nearby point x = a where both $f(a)$ and the derivative $f'(a)$ are easy to evaluate. 

## **EXAMPLE 7** Use differentials to estimate

$$
(a) 7. 9 7 ^ {1 / 3}
$$

$$
(\mathbf {b}) \sin (\pi / 6 + 0. 0 1).
$$

## **Solution**

(a) The differential associated with the cube root function $y = x^{1/3}$ is 

$$
d y = \frac {1}{3 x ^ {2 / 3}} d x.
$$

We set $a = 8$ , the closest number near 7.97 where we can easily compute $f(a)$ and $f'(a)$ . To arrange that $a + dx = 7.97$ , we choose $dx = -0.03$ . Approximating with the differential gives 

$$
\begin{array}{r l} f (7. 9 7) & = f (a + d x) \approx f (a) + d y \\ & = 8 ^ {1 / 3} + \frac {1}{3 (8) ^ {2 / 3}} (- 0. 0 3) \\ & = 2 + \frac {1}{1 2} (- 0. 0 3) = 1. 9 9 7 5. \end{array}
$$

This gives an approximation to the true value of $7.97^{1/3}$ , which is 1.997497 to 6 decimal places. 

$$
\sin (a + d x) \approx \sin a + (\cos a) d x
$$

(b) The differential associated with $y = \sin x$ is 

$$
d y = \cos x d x.
$$

To estimate $\sin (\pi /6 + 0.01)$ , we set $a = \pi /6$ and $dx = 0.01$ . Then 

$$
\begin{array}{r l} f (\pi / 6 + 0. 0 1) & = f (a + d x) \approx f (a) + d y \\ & = \sin \frac {\pi}{6} + \left(\cos \frac {\pi}{6}\right) (0. 0 1) \\ & = \frac {1}{2} + \frac {\sqrt {3}}{2} (0. 0 1) \approx 0. 5 0 8 7. \end{array}
$$

For comparison, the true value of $\sin(\pi/6 + 0.01)$ to 6 decimal places is 0.508635. 

The method in part (b) of Example 7 can be used in computer algorithms to give values of trigonometric functions. The algorithms store a large table of sine and cosine values between 0 and $\pi/4$ . Values between these stored values are computed using differentials as in Example 7b. Values outside of $[0, \pi/4]$ are computed from values in this interval using trigonometric identities. 

## Error in Differential Approximation

Let $f(x)$ be differentiable at $x = a$ and suppose that $dx = \Delta x$ is an increment of $x$ . We have two ways to describe the change in $f$ as $x$ changes from $a$ to $a + \Delta x$ : 

The true change: 

$$
\Delta f = f (a + \Delta x) - f (a)
$$

The differential estimate: 

$$
d f = f ^ {\prime} (a) \Delta x.
$$

How well does $df$ approximate $\Delta f$ ? 

We measure the approximation error by subtracting df from $\Delta f$ : 

$$
\begin{array}{l} \text { Approximation   error } = \Delta f - d f \\ \qquad = \Delta f - f ^ {\prime} (a) \Delta x \\ \qquad = \underbrace {f (a + \Delta x) - f (a)} _ {\Delta f} - f ^ {\prime} (a) \Delta x \\ \qquad = \underbrace {\left(\frac {f (a + \Delta x) - f (a)}{\Delta x} - f ^ {\prime} (a)\right) \cdot \Delta x} _ {\text { Call   this   part   } \varepsilon .} \\ \qquad = \varepsilon \cdot \Delta x. \end{array}
$$

As $\Delta x\to 0$ , the difference quotient 

$$
\frac {f (a + \Delta x) - f (a)}{\Delta x}
$$

approaches $f'(a)$ (remember the definition of $f'(a)$ ), so the quantity in parentheses becomes a very small number (which is why we called it $\varepsilon$ ). In fact, $\varepsilon \rightarrow 0$ as $\Delta x \rightarrow 0$ . When $\Delta x$ is small, the approximation error $\varepsilon \Delta x$ is smaller still. 

$$
\underbrace{\Delta f}_{\substack{\text{true}\\ \text{change}}} = \underbrace{f^{\prime}(a)\Delta x}_{\substack{\text{estimated}\\ \text{change}}} + \underbrace{\varepsilon\Delta x}_{\substack{\text{error}}}
$$

Although we do not know the exact size of the error, it is the product $\varepsilon\cdot\Delta x$ of two small quantities that both approach zero as $\Delta x\to0$ . For many common functions, whenever $\Delta x$ is small, the error is still smaller. 

Change in $y = f(x)$ near $x = a$ If $y = f(x)$ is differentiable at $x = a$ and $x$ changes from $a$ to $a + \Delta x$ , the change $\Delta y$ in $f$ is given by $\Delta y = f'(a)\Delta x + \varepsilon\Delta x,$ (1)  
in which $\varepsilon \to 0$ as $\Delta x \to 0$ . 

In Example 6 we found that 

$$
\Delta A = \pi (1 0. 1) ^ {2} - \pi (1 0) ^ {2} = (1 0 2. 0 1 - 1 0 0) \pi = (\underbrace {2 \pi} _ {d A} + \underbrace {0 . 0 1 \pi} _ {\text { error }}) \mathrm{m} ^ {2}
$$

so the approximation error is $\Delta A - dA = \varepsilon\Delta r = 0.01\pi$ and $\varepsilon = 0.01\pi/\Delta r = 0.01\pi/0.1 = 0.1\pi$ m. 

## Proof of the Chain Rule

Equation (1) enables us to give a complete proof of the Chain Rule. Our goal is to show that if $f(u)$ is a differentiable function of u and $u = g(x)$ is a differentiable function of x, then the composition $y = f(g(x))$ is a differentiable function of x. Since a function is differentiable if and only if it has a derivative at each point in its domain, we must show that whenever g is differentiable at $x_{0}$ and f is differentiable at $g(x_{0})$ , then the composition is differentiable at $x_{0}$ and the derivative of the composition satisfies the equation 

$$
\left. \frac {d y}{d x} \right| _ {x = x _ {0}} = f ^ {\prime} (g (x _ {0})) \cdot g ^ {\prime} (x _ {0}).
$$

Let $\Delta x$ be an increment in $x$ and let $\Delta u$ and $\Delta y$ be the corresponding increments in $u$ and $y$ . Applying Equation (1), we have 

$$
\Delta u = g ^ {\prime} (x _ {0}) \Delta x + \varepsilon_ {1} \Delta x = \left(g ^ {\prime} (x _ {0}) + \varepsilon_ {1}\right) \Delta x,
$$

where $\varepsilon_{1}\rightarrow 0$ as $\Delta x\to 0$ . Similarly, 

$$
\Delta y = f ^ {\prime} (u _ {0}) \Delta u + \varepsilon_ {2} \Delta u = \left(f ^ {\prime} (u _ {0}) + \varepsilon_ {2}\right) \Delta u,
$$

where $\varepsilon_{2} \rightarrow 0$ as $\Delta u \rightarrow 0$ . Notice also that $\Delta u \rightarrow 0$ as $\Delta x \rightarrow 0$ . Combining the equations for $\Delta u$ and $\Delta y$ gives 

$$
\Delta y = (f ^ {\prime} (u _ {0}) + \varepsilon_ {2}) (g ^ {\prime} (x _ {0}) + \varepsilon_ {1}) \Delta x,
$$

SO 

$$
\frac {\Delta y}{\Delta x} = f ^ {\prime} (u _ {0}) g ^ {\prime} (x _ {0}) + \varepsilon_ {2} g ^ {\prime} (x _ {0}) + f ^ {\prime} (u _ {0}) \varepsilon_ {1} + \varepsilon_ {2} \varepsilon_ {1}.
$$

Since $\varepsilon_{1}$ and $\varepsilon_{2}$ go to zero as $\Delta x$ goes to zero, the last three terms on the right vanish in the limit, leaving 

$$
\left. \frac {d y}{d x} \right| _ {x = x _ {0}} = \lim _ {\Delta x \rightarrow 0} \frac {\Delta y}{\Delta x} = f ^ {\prime} (u _ {0}) g ^ {\prime} (x _ {0}) = f ^ {\prime} (g (x _ {0})) \cdot g ^ {\prime} (x _ {0}).
$$

## Sensitivity to Change

The equation $df = f'(x) \, dx$ tells how sensitive the output of f is to a change in input at different values of x. The larger the value of $f'$ at x, the greater the effect of a given change dx. As we move from a to a nearby point $a + dx$ , we can describe the change in f in three ways: absolute, relative, and percentage. 

<table><tr><td></td><td>True</td><td>Estimated</td></tr><tr><td>Absolute change</td><td><eq>\Delta f = f(a + dx) - f(a)</eq></td><td><eq>df = f&#x27;(a) dx</eq></td></tr><tr><td>Relative change</td><td><eq>\frac{\Delta f}{f(a)}</eq></td><td><eq>\frac{df}{f(a)}</eq></td></tr><tr><td>Percentage change</td><td><eq>\frac{\Delta f}{f(a)} \times 100</eq></td><td><eq>\frac{df}{f(a)} \times 100</eq></td></tr></table>

**EXAMPLE 8** You want to calculate the depth of a well from the equation $s = 4.9t^{2}$ by timing how long it takes a heavy stone you drop to splash into the water below. How sensitive will your calculations be to a 0.1-s error in measuring the time? 

**Solution** The size of ds in the equation 

$$
d s = 9. 8 t d t
$$

depends on how big t is. If t = 2 s, the change caused by dt = 0.1 is about 

$$
d s = 9. 8 (2) (0. 1) = 1. 9 6 \mathrm{m}.
$$

Three seconds later at t = 5 s, the change caused by the same dt is 

$$
d s = 9. 8 (5) (0. 1) = 4. 9 \mathrm{m}.
$$

For a fixed error in the time measurement, the error in using ds to estimate the depth is larger when it takes a longer time before the stone splashes into the water. That is, the estimate is more sensitive to the effect of the error for larger values of t. 

**EXAMPLE 9** Newton's second law, 

$$
F = \frac {d}{d t} (m v) = m \frac {d v}{d t} = m a,
$$

is stated with the assumption that mass is constant, but we know this is not strictly true because the mass of an object increases with velocity. In Einstein's corrected formula, mass has the value 

$$
m = \frac {m _ {0}}{\sqrt {1 - v ^ {2} / c ^ {2}}},
$$

where the “rest mass” $m_{0}$ represents the mass of an object that is not moving and c is the speed of light, which is about 300,000 km/s. Use the approximation 

$$
\frac {1}{\sqrt {1 - x ^ {2}}} \approx 1 + \frac {1}{2} x ^ {2}\tag{2}
$$

to estimate the increase $\Delta m$ in mass resulting from the added velocity v. 

**Solution** When $v$ is very small compared with $c, v^2 / c^2$ is close to zero and it is safe to use the approximation 

$$
\frac {1}{\sqrt {1 - v ^ {2} / c ^ {2}}} \approx 1 + \frac {1}{2} \left(\frac {v ^ {2}}{c ^ {2}}\right) \quad \text {Eq. (2) with x = \frac {v}{c}}
$$

to obtain 

$$
m = \frac {m _ {0}}{\sqrt {1 - v ^ {2} / c ^ {2}}} \approx m _ {0} \left[ 1 + \frac {1}{2} \left(\frac {v ^ {2}}{c ^ {2}}\right) \right] = m _ {0} + \frac {1}{2} m _ {0} v ^ {2} \left(\frac {1}{c ^ {2}}\right),
$$

or 

$$
m \approx m _ {0} + \frac {1}{2} m _ {0} v ^ {2} \left(\frac {1}{c ^ {2}}\right).\tag{3}
$$

Equation (3) expresses the increase in mass that results from the added velocity v. 

## Converting Mass to Energy

Equation (3) derived in Example 9 has an important interpretation. In Newtonian physics, $(1/2)m_{0}v^{2}$ is the kinetic energy (KE) of the object, and if we rewrite Equation (3) in the form 

$$
(m - m _ {0}) c ^ {2} \approx \frac {1}{2} m _ {0} v ^ {2},
$$

we see that 

$$
\left(m - m _ {0}\right) c ^ {2} \approx \frac {1}{2} m _ {0} v ^ {2} = \frac {1}{2} m _ {0} v ^ {2} - \frac {1}{2} m _ {0} (0) ^ {2} = \Delta (\mathrm{KE}),
$$

or 

$$
(\Delta m) c ^ {2} \approx \Delta (\mathrm{KE}).
$$

So the change in kinetic energy $\Delta(\mathrm{KE})$ in going from velocity 0 to velocity v is approximately equal to $(\Delta m)c^{2}$ , the change in mass times the square of the speed of light. Using $c \approx 3 \times 10^{8}$ m/s, we see that a small change in mass can create a large change in energy. 

## EXERCISES

## 3.11

## Finding Linearizations

In Exercises 1–5, find the linearization $L(x)$ of $f(x)$ at x = a. 

1. $f(x) = x^{3} - 2x + 3,\quad a = 2$ 

2. $f(x) = \sqrt{x^2 + 9}, a = -4$ 

3. $f(x) = x + \frac{1}{x}, a = 1$ 

4. $f(x) = \sqrt[3]{x}, a = -8$ 

5. $f(x) = \tan x, a = \pi$ 

6. Common linear approximations at $x = 0$ Find the linearizations of the following functions at $x = 0$ . 

a. $\sin x$ b. $\cos x$ c. $\tan x$ d. $e^{x}$ e. $\ln(1 + x)$ 

## Linearization for Approximation

In Exercises 7–14, find a linearization at a suitably chosen integer near $a$ at which the given function and its derivative are easy to evaluate. 

7. $f(x) = x^{2} + 2x, a = 0.1$ 

8. $f(x) = x^{-1}$ , $a = 0.9$ 

9. $f(x) = 2x^{2} + 3x - 3,\quad a = -0.9$ 

10. $f(x) = 1 + x, a = 8.1$ 

11. $f(x) = \sqrt[3]{x}, a = 8.5$ 

12. $f(x) = \frac{x}{x + 1}, a = 1.3$ 

13. $f(x) = e^{-x}$ , $a = -0.1$ 

14. $f(x) = \sin^{-1}x, a = \pi / 12$ 

15. Show that the linearization of $f(x) = (1 + x)^k$ at $x = 0$ is $L(x) = 1 + kx$ . 

16. Use the linear approximation $(1 + x)^{k} \approx 1 + kx$ to find an approximation for the function $f(x)$ for values of x near zero.
a. $f(x) = (1 - x)^{6}$ b. $f(x) = \frac{2}{1 - x}$ c. $f(x) = \frac{1}{\sqrt{1 + x}}$ d. $f(x) = \sqrt{2 + x^{2}}$ e. $f(x) = (4 + 3x)^{1/3}$ f. $f(x) = \sqrt[3]{\left(1 - \frac{x}{2 + x}\right)^{2}}$ 

17. Faster than a calculator Use the approximation $(1 + x)^{k} \approx 1 + kx$ to estimate the following.
a. $(1.0002)^{50}$ b. $\sqrt[3]{1.009}$ 

18. Find the linearization of $f(x) = \sqrt{x + 1} + \sin x$ at x = 0. How is it related to the individual linearizations of $\sqrt{x + 1}$ and $\sin x$ at x = 0? 

Derivatives in Differential Form 

In Exercises 19–38, find dy. 

19. $y = x^{3} - 3\sqrt{x}$ 

20. $y = x\sqrt{1 - x^{2}}$ 

21. $y = \frac{2x}{1 + x^2}$ 

22. $y = \frac{2\sqrt{x}}{3(1 + \sqrt{x})}$ 

23. $2y^{3 / 2} + xy - x = 0$ 

24. $xy^{2} - 4x^{3 / 2} - y = 0$ 

25. $y = \sin (5\sqrt{x})$ 

26. $y = \cos (x^2)$ 

27. $y = 4\tan (x^3 /3)$ 

28. $y = \sec(x^{2} - 1)$ 

29. $y = 3\csc (1 - 2\sqrt{x})$ 

31. $y = e^{\sqrt{x}}$ 

30. $y = 2\cot \left(\frac{1}{\sqrt{x}}\right)$ 

32. $y = xe^{-x}$ 

33. $y = \ln (1 + x^2)$ 

34. $y = \ln \left(\frac{x + 1}{\sqrt{x - 1}}\right)$ 

35. $y = \tan^{-1}(e^{x^2})$ 

36. $y = \cot^{-1}\left(\frac{1}{x^2}\right) + \cos^{-1}2x$ 

37. $y = \sec^{-1}(e^{-x})$ 

38. $y = e^{\tan^{-1}\sqrt{x^2 + 1}}$ 

## Approximation Error

In Exercises 39–44, each function $f(x)$ changes value when x changes from $x_{0}$ to $x_{0} + dx$ . Find 

a. the change $\Delta f = f(x_{0} + dx) - f(x_{0})$ ; 

b. the value of the estimate $df = f'(x_{0}) dx$ ; and 

c. the approximation error $|\Delta f - df|$ . 

![[531a96521711adc8f192fff3c8fc3d2720b7ab5f9b047ed48238191b90fbfac9.jpg|image]]


39. $f(x) = x^{2} + 2x, x_{0} = 1, dx = 0.1$ 

40. $f(x) = 2x^{2} + 4x - 3,\quad x_{0} = -1,\quad dx = 0.1$ 

41. $f(x) = x^{3} - x,\quad x_{0} = 1,\quad dx = 0.1$ 

42. $f(x) = x^{4}$ , $x_{0} = 1$ , dx = 0.1 

43. $f(x) = x^{-1}$ , $x_0 = 0.5$ , $dx = 0.1$ 

44. $f(x) = x^{3} - 2x + 3,\quad x_{0} = 2,\quad dx = 0.1$ 

## Differential Estimates of Change

In Exercises 45–50, write a differential formula that estimates the given change in volume or surface area. 

45. The change in the volume $V = (4/3)\pi r^3$ of a sphere when the radius changes from $r_0$ to $r_0 + dr$ 

46. The change in the volume $V = x^{3}$ of a cube when the edge lengths change from $x_{0}$ to $x_{0} + dx$ 

47. The change in the surface area $S = 6x^{2}$ of a cube when the edge lengths change from $x_{0}$ to $x_{0} + dx$ 

48. The change in the lateral surface area $S = \pi r\sqrt{r^2 + h^2}$ of a right circular cone when the radius changes from $r_0$ to $r_0 + dr$ and the height does not change 

49. The change in the volume $V = \pi r^{2}h$ of a right circular cylinder when the radius changes from $r_{0}$ to $r_{0} + dr$ and the height does not change 

50. The change in the lateral surface area $S = 2\pi rh$ of a right circular cylinder when the height changes from $h_{0}$ to $h_{0} + dh$ and the radius does not change 

## Applications

51. The radius of a circle is increased from 2.00 to 2.02 m. 

a. Estimate the resulting change in area. 

b. Express the estimate as a percentage of the circle's original area. 

52. The diameter of a tree was 25 cm. During the following year, the circumference increased 5 cm. About how much did the tree's diameter increase? What is the tree's cross-sectional area? 

53. Estimating volume Estimate the volume of material in a cylindrical shell with length 30 cm, radius 6 cm, and shell thickness 0.5 cm. 

![[d235a8a5de3807035a5ea982c6cfb7adb4ce47959ac7084797b8ff53139f991a.jpg|image]]


54. Estimating height of a building A surveyor, standing 9 m from the base of a building, measures the angle of elevation to the top of the building to be $75^{\circ}$ . How accurately must the angle be measured for the percentage error in estimating the height of the building to be less than 4%? 

55. The radius $r$ of a circle is measured with an error of at most $2\%$ . What is the maximum corresponding percentage error in computing the circle's
a. circumference? b. area? 

56. The edge $x$ of a cube is measured with an error of at most $0.5\%$ . What is the maximum corresponding percentage error in computing the cube's
a. surface area? b. volume? 

57. Tolerance The height and radius of a right circular cylinder are equal, so the cylinder's volume is $V = \pi h^{3}$ . The volume is to be calculated with an error of no more than 1% of the true value. Find approximately the greatest error that can be tolerated in the measurement of h, expressed as a percentage of h. 

## 58. Tolerance

a. About how accurately must the interior diameter of a 10-m-high cylindrical storage tank be measured to calculate the tank's volume to within $1\%$ of its true value? 

b. About how accurately must the tank's exterior diameter be measured to calculate the amount of paint it will take to paint the side of the tank to within $5\%$ of the true amount? 

59. The diameter of a sphere is measured as $100 \pm 1$ cm and the volume is calculated from this measurement. Estimate the percentage error in the volume calculation. 

60. Estimate the allowable percentage error in measuring the diameter D of a sphere if the volume is to be calculated correctly to within 3%. 

61. The effect of flight maneuvers on the heart The amount of work done by the heart's main pumping chamber, the left ventricle, is given by the equation 

$$
W = P V + \frac {V \delta v ^ {2}}{2 g},
$$

where W is the work per unit time, P is the average blood pressure, V is the volume of blood pumped out during the unit of time, $\delta$ (“delta”) is the weight density of the blood, v is the average velocity of the exiting blood, and g is the acceleration of gravity. 

When $P, V, \delta$ , and $v$ remain constant, $W$ becomes a function of $g$ , and the equation takes the simplified form 

$$
W = a + \frac {b}{g} (a, b \text {   constant }).
$$

As a member of NASA's medical team, you want to know how sensitive $W$ is to apparent changes in $g$ caused by flight maneuvers, and this depends on the initial value of $g$ . As part of your investigation, you decide to compare the effect on $W$ of a given change $dg$ on the moon, where $g = 1.6\mathrm{m / s^2}$ , with the effect the same change $dg$ would have on Earth, where $g = 9.8\mathrm{m / s^2}$ . Use the simplified equation above to find the ratio of $dW_{\mathrm{moon}}$ to $dW_{\mathrm{Earth}}$ . 

62. Drug concentration The concentration $C$ in milligrams per milliliter (mg/ml) of a certain drug in a person's bloodstream $t$ hours after a pill is swallowed is modeled by 

$$
C (t) = 1 + \frac {4 t}{1 + t ^ {3}} - e ^ {- 0. 0 6 t}.
$$

Estimate the change in concentration when t changes from 20 to 30 min. 

63. Unclogging arteries The formula $V = kr^{4}$ , discovered by the physiologist Jean Poiseuille (1797–1869), allows us to predict how much the radius of a partially clogged artery has to be expanded in order to restore normal blood flow. The formula says that the volume V of blood flowing through the artery in a unit of time at a fixed pressure is a constant k times the radius of the artery to the fourth power. How will a 10% increase in r affect V? 

64. Measuring acceleration of gravity When the length L of a clock pendulum is held constant by controlling its temperature, the pendulum's period T depends on the acceleration of gravity g. The period will therefore vary slightly as the clock is moved from place to place on Earth's surface, depending on the change in g. By keeping track of $\Delta T$ , we can estimate the variation in g from the equation $T = 2\pi(L/g)^{1/2}$ that relates T, g, and L. 

a. With L held constant and g as the independent variable, calculate dT and use it to answer parts (b) and (c). 

b. If g increases, will T increase or decrease? Will a pendulum clock speed up or slow down? Explain. 

T c. A clock with a 100-cm pendulum is moved from a location where $g = 980 \, \mathrm{cm/s^2}$ to a new location. This increases the period by $dT = 0.001 \, \mathrm{s}$ . Find $dg$ and estimate the value of $g$ at the new location. 

## 65. Quadratic approximations

a. Let $Q(x) = b_0 + b_1(x - a) + b_2(x - a)^2$ be a quadratic approximation to $f(x)$ at $x = a$ with these properties:  
i. $Q(a) = f(a)$ ii. $Q'(a) = f'(a)$ iii. $Q''(a) = f''(a)$ .  
Determine the coefficients $b_0, b_1,$ and $b_2$ . 

b. Find the quadratic approximation to $f(x) = 1 / (1 - x)$ at $x = 0$ . 

T c. Graph $f(x) = 1 / (1 - x)$ and its quadratic approximation at $x = 0$ . Then zoom in on the two graphs at the point (0, 1). Comment on what you see. 

d. Find the quadratic approximation to $g(x) = 1/x$ at x = 1. Graph g and its quadratic approximation together. Comment on what you see. 

T e. Find the quadratic approximation to $h(x) = \sqrt{1 + x}$ at 

x = 0. Graph h and its quadratic approximation together. Comment on what you see. 

f. What are the linearizations of $f$ , $g$ , and $h$ at the respective points in parts (b), (d), and (e)? 

66. The linearization is the best linear approximation Suppose that $y = f(x)$ is differentiable at $x = a$ and that $g(x) = g(x) = m(x - a) + c$ is a linear function in which $m$ and $c$ are constants. If the error $E(x) = f(x) - g(x)$ were small enough near $x = a$ , we might think of using $g$ as a linear approximation of $f$ instead of the linearization $L(x) = f(a) + f'(a)(x - a)$ . Show that if we impose on $g$ the conditions 

1. $E(a) = 0$ 

2. $\lim_{x\to a}\frac{E(x)}{x-a}=0$ 

The approximation error is zero at x = a.
The error is negligible when compared with x - a. 

then $g(x) = f(a) + f'(a)(x - a)$ . Thus, the linearization $L(x)$ gives the only linear approximation whose error is both zero at x = a and negligible in comparison with x - a. 

![[3c22d6445125f02dbd601de2b507fd805bf7f9962b7aec66ec37ad3e164558df.jpg|image]]


67. The linearization of $2^{x}$ 

a. Find the linearization of $f(x) = 2^x$ at $x = 0$ . Then round its coefficients to two decimal places. 

T b. Graph the linearization and function together for $-3 \leq x \leq 3$ and $-1 \leq x \leq 1$ . 

68. The linearization of $\log_3 x$ 

a. Find the linearization of $f(x) = \log_3 x$ at $x = 3$ . Then round its coefficients to two decimal places. 

T b. Graph the linearization and function together in the window $0 \leq x \leq 8$ and $2 \leq x \leq 4$ . 

## COMPUTER EXPLORATIONS

In Exercises 69–74, use a CAS to estimate the magnitude of the error in using the linearization in place of the function over a specified interval I. Perform the following steps: 

a. Plot the function f over I. 

b. Find the linearization L of the function at the point a. 

c. Plot f and L together on a single graph. 

d. Plot the absolute error $|f(x) - L(x)|$ over I and find its maximum value. 

e. From your graph in part (d), estimate as large a $\delta > 0$ as you can that satisfies 

$$
| x - a | <   \delta \quad \Rightarrow \quad | f (x) - L (x) | <   \varepsilon
$$

for $\varepsilon = 0.5, 0.1$ , and $0.01$ . Then check graphically to see whether your $\delta$ -estimate holds true. 

$$
f (x) = x ^ {3} + x ^ {2} - 2 x, [ - 1, 2 ], a = 1 \tag {69.}
$$

$$
\mathbf {7 0 .} f (x) = \frac {x - 1}{4 x ^ {2} + 1}, \left[ - \frac {3}{4}, 1 \right], a = \frac {1}{2}
$$

$$
\textbf {7 1 .} f (x) = x ^ {2 / 3} (x - 2), [ - 2, 3 ], a = 2
$$

$$
7 2. f (x) = \sqrt {x} - \sin x, [ 0, 2 \pi ], a = 2
$$

$$
f (x) = x 2 ^ {x}, [ 0, 2 ], a = 1 \tag {73.}
$$

$$
f (x) = \sqrt {x} \sin^ {- 1} x, [ 0, 1 ], a = \frac {1}{2}
$$

## CHAPTER 3 Questions to Guide Your Review

1. What is the derivative of a function $f$ ? How is its domain related to the domain of $f$ ? Give examples. 

2. What role does the derivative play in defining slopes, tangent lines, and rates of change? 

3. How can you sometimes graph the derivative of a function when all you have is a table of the function's values? 

4. What does it mean for a function to be differentiable on an open interval? On a closed interval? 

5. How are derivatives and one-sided derivatives related? 

6. Describe geometrically when a function typically does not have a derivative at a point. 

8. What rules do you know for calculating derivatives? Give some examples. 

7. How is a function's differentiability at a point related to its continuity there, if at all? 

9. Explain how the three formulas 

a. $\frac{d}{dx} (x^n) = nx^{n - 1}$ 

$$
\mathbf {b}. \frac {d}{d x} (c u) = c \frac {d u}{d x}
$$

$$
\mathbf {c}. \frac {d}{d x} \left(u _ {1} + u _ {2} + \dots + u _ {n}\right) = \frac {d u _ {1}}{d x} + \frac {d u _ {2}}{d x} + \dots + \frac {d u _ {n}}{d x}
$$

enable us to differentiate any polynomial. 

10. What formula do we need, in addition to the three listed in Question 9, to differentiate rational functions? 

11. What is a second derivative? A third derivative? How many derivatives do the functions you know have? Give examples. 

12. What is the derivative of the exponential function $e^x$ ? How does the domain of the derivative compare with the domain of the function? 

13. What is the relationship between a function's average and instantaneous rates of change? Give an example. 

14. How do derivatives arise in the study of motion? What can you learn about an object's motion along a line by examining the derivatives of the object's position function? Give examples. 

15. How can derivatives arise in economics? 

24. What is the derivative of $\log_{a}x$ ? Are there any restrictions on a? 

16. Give examples of still other applications of derivatives. 

17. What do the limits $\lim_{h\to0}\left((\sin h)/h\right)$ and $\lim_{h\to0}\left((\cos h-1)/h\right)$ have to do with the derivatives of the sine and cosine functions? What are the derivatives of these functions? 

18. Once you know the derivatives of $\sin x$ and $\cos x$ , how can you find the derivatives of $\tan x$ , $\cot x$ , $\sec x$ , and $\csc x$ ? What are the derivatives of these functions? 

19. What is the rule for calculating the derivative of a composition of two differentiable functions? How is such a derivative evaluated? Give examples. 

20. If $u$ is a differentiable function of $x$ , how do you find $(d / dx)(u^n)$ if $n$ is an integer? If $n$ is a real number? Give examples. 

25. What is logarithmic differentiation? Give an example. 

26. How can you write any real power of $x$ as a power of $e$ ? Are there any restrictions on $x$ ? How does this lead to the Power Rule for differentiating arbitrary real powers? 

28. What are the derivatives of the inverse trigonometric functions? How do the domains of the derivatives compare with the domains of the functions? 

27. What is one way of expressing the special number $e$ as a limit? What is an approximate numerical value of $e$ correct to 7 decimal places? 

21. What is implicit differentiation? When do you need it? Give examples. 

29. How do related rates problems arise? Give examples. 

30. Outline a strategy for solving related rates problems. Illustrate with an example. 

22. What is the derivative of the natural logarithm function $\ln x$ ? How does the domain of the derivative compare with the domain of the function? 

31. What is the linearization $L(x)$ of a function $f(x)$ at a point x = a? What is required of f at a for the linearization to exist? How are linearizations used? Give examples. 

32. If x moves from a to a nearby value $a + dx$ , how do you estimate the corresponding change in the value of a differentiable function $f(x)$ ? How do you estimate the relative change? The percentage change? Give an example. 

23. What is the derivative of the exponential function $a^x, a > 0$ and $a \neq 1$ ? What is the geometric significance of the limit of $(a^h - 1) / h$ as $h \to 0$ ? What is the limit when $a$ is the number $e$ ? 

## CHAPTER 3 Practice Exercises

## Derivatives of Functions

Find the derivatives of the functions in Exercises 1–64. 

1. $y = x^{5} - 0.125x^{2} + 0.25x$ 

2. $y = 3 - 0.7x^{3} + 0.3x^{7}$ 

3. $y = x^{3} - 3(x^{2} + \pi^{2})$ 

4. $y = x^{7} + \sqrt{7} x - \frac{1}{\pi + 1}$ 

5. $y = (x + 1)^{2}(x^{2} + 2x)$ 

6. $y = (2x - 5)(4 - x)^{-1}$ 

7. $y = (\theta^2 + \sec \theta + 1)^3$ 

8. $y = \left(-1 - \frac{\csc \theta}{2} - \frac{\theta^{2}}{4}\right)^{2}$ 

9. $s = \frac{\sqrt{t}}{1 + \sqrt{t}}$ 

10. $s = \frac{1}{\sqrt{t} - 1}$ 

11. $y = 2\tan^2 x - \sec^2 x$ 

12. $y = \frac{1}{\sin^2x} -\frac{2}{\sin x}$ 

13. $s = \cos^4 (1 - 2t)$ 

14. $s = \cot^3\left(\frac{2}{t}\right)$ 

15. $s = (\sec t + \tan t)^{5}$ 

16. $s = \csc^5 (1 - t + 3t^2)$ 

17. $r = \sqrt{2\theta \sin\theta}$ 

18. $r = 2\theta \sqrt{\cos\theta}$ 

19. $r = \sin \sqrt{2\theta}$ 

20. $r = \sin (\theta +\sqrt{\theta + 1})$ 

21. $y = \frac{1}{2} x^2\csc \frac{2}{x}$ 

22. $y = 2\sqrt{x}\sin \sqrt{x}$ 

23. $y = x^{-1/2} \sec(2x)^{2}$ 

24. $y = \sqrt{x}\csc (x + 1)^{3}$ 

25. $y = 5\cot x^{2}$ 

26. $y = x^{2}\cot 5x$ 

27. $y = x^{2}\sin^{2}(2x^{2})$ 

28. $y = x^{-2}\sin^2 (x^3)$ 

29. $s = \left(\frac{4t}{t + 1}\right)^{-2}$ 

30. $s = \frac{-1}{15(15t - 1)^{3}}$ 

31. $y = \left(\frac{\sqrt{x}}{1 + x}\right)^2$ 

33. $y = \sqrt{\frac{x^2 + x}{x^2}}$ 

35. $r = \left(\frac{\sin\theta}{\cos\theta - 1}\right)^2$ 

32. $y = \left(\frac{2\sqrt{x}}{2\sqrt{x} + 1}\right)^2$ 

34. $y = 4x\sqrt{x + \sqrt{x}}$ 

37. $y = (2x + 1)\sqrt{2x + 1}$ 

36. $r = \left(\frac{1 + \sin\theta}{1 - \cos\theta}\right)^2$ 

38. $y = 20(3x - 4)^{1 / 4}(3x - 4)^{-1 / 5}$ 

39. $y = \frac{3}{(5x^2 + \sin 2x)^{3 / 2}}$ 

40. $y = (3 + \cos^3 3x)^{-1 / 3}$ 

41. $y = 10e^{-x / 5}$ 

42. $y = \sqrt{2} e^{\sqrt{2} x}$ 

43. $y = \frac{1}{4} xe^{4x} - \frac{1}{16} e^{4x}$ 

44. $y = x^{2}e^{-2 / x}$ 

45. $y = \ln (\sin^2\theta)$ 

46. $y = \ln (\sec^2\theta)$ 

47. $y = \log_2(x^2 /2)$ 

49. $y = 8^{-t}$ 

48. $y = \log_5(3x - 7)$ 

50. $y = 9^{2t}$ 

51. $y = 5x^{3.6}$ 

52. $y = \sqrt{2} x^{-\sqrt{2}}$ 

53. $y = (x + 2)^{x + 2}$ 

55. $y = \arcsin\sqrt{1 - u^{2}}, \quad 0 < u < 1$ 

54. $y = 2(\ln x)^{x/2}$ 

56. $y = \arcsin \left(\frac{1}{\sqrt{v}}\right), v > 1$ 

57. $y = \ln \arccos x$ 

58. $y = z\arccos z - \sqrt{1 - z^2}$ 

59. $y = t\arctan t - \frac{1}{2}\ln t$ 

60. $y = (1 + t^2)$ arccot $2t$ 

61. $y = z\operatorname {arcsec}z - \sqrt{z^2 - 1},\quad z > 1$ 

62. $y = 2\sqrt{x - 1}$ arcsec $\sqrt{x}$ 

63. $y = \operatorname{arccsc}(\sec \theta), 0 < \theta < \pi / 2$ 

64. $y = (1 + x^2)e^{\arctan x}$ 

## Implicit Differentiation

In Exercises 65–78, find dy/dx by implicit differentiation. 

65. $xy + 2x + 3y = 1$ 

66. $x^{2} + xy + y^{2} - 5x = 2$ 

67. $x^{3} + 4xy - 3y^{4 / 3} = 2x$ 

68. $5x^{4 / 5} + 10y^{6 / 5} = 15$ 

69. $\sqrt{xy} = 1$ 

70. $x^{2}y^{2} = 1$ 

71. $y^{2} = \frac{x}{x + 1}$ 

72. $y^{2} = \sqrt{\frac{1 + x}{1 - x}}$ 

73. $e^{x + 2y} = 1$ 

74. $y^{2} = 2e^{-1 / x}$ 

75. $\ln (x / y) = 1$ 

76. $x \arcsin y = 1 + x^2$ 

77. $ye^{\arctan x} = 2$ 

78. $x^{y} = \sqrt{2}$ 

In Exercises 79 and 80, find dp/dq. 

79. $p^3 + 4pq - 3q^2 = 2$ 80. $q = (5p^2 + 2p)^{-3/2}$ 

In Exercises 81 and 82, find dr/ds. 

81. $r\cos 2s + \sin^2 s = \pi$ 82. $2rs - r - s + s^2 = -3$ 

83. Find $d^2 y / dx^2$ by implicit differentiation: 

a. $x^{3} + y^{3} = 1$ b. $y^{2} = 1 - \frac{2}{x}$ 

84. a. By differentiating $x^{2} - y^{2} = 1$ implicitly, show that $dy / dx = x / y$ . 

b. Then show that $d^2 y / dx^2 = -1 / y^3$ . 

Numerical Values of Derivatives 

85. Suppose that functions $f(x)$ and $g(x)$ and their first derivatives have the following values at x = 0 and x = 1. 

<table><tr><td>x</td><td>f(x)</td><td>g(x)</td><td>f&#x27;(x)</td><td>g&#x27;(x)</td></tr><tr><td>0</td><td>1</td><td>1</td><td>-3</td><td>1/2</td></tr><tr><td>1</td><td>3</td><td>5</td><td>1/2</td><td>-4</td></tr></table>

Find the first derivatives of the following combinations at the given value of $x$ . 

a. $6f(x) - g(x), x = 1$ b. $f(x)g^{2}(x), x = 0$ 

c. $\frac{f(x)}{g(x) + 1}$ , $x = 1$ d. $f(g(x))$ , $x = 0$ 

e. $g(f(x)), x = 0$ 

f. $(x + f(x))^{3 / 2}$ , $x = 1$ 

g. $f(x + g(x))$ , x = 0 

86. Suppose that the function $f(x)$ and its first derivative have the following values at $x = 0$ and $x = 1$ . 

<table><tr><td>x</td><td>f(x)</td><td>f&#x27;(x)</td></tr><tr><td>0</td><td>9</td><td>-2</td></tr><tr><td>1</td><td>-3</td><td>1/5</td></tr></table>

Find the first derivatives of the following combinations at the given value of $x$ . 

a. $\sqrt{x} f(x), x = 1$ 

b. $\sqrt{f(x)}, x = 0$ 

c. $f(\sqrt{x}), x = 1$ 

$$
f (1 - 5 \tan x), \quad x = 0
$$

e. $\frac{f(x)}{2 + \cos x}, x = 0$ 

$$
1 0 \sin \left(\frac {\pi x}{2}\right) f ^ {2} (x), \quad x = 1
$$

87. Find the value of $dy / dt$ at $t = 0$ if $y = 3\sin 2x$ and $x = t^2 + \pi$ . 

88. Find the value of ds/du at u = 2 if $s = t^{2} + 5t$ and $t = (u^{2} + 2u)^{1/3}$ . 

89. Find the value of $dw / ds$ at $s = 0$ if $w = \sin (e^{\sqrt{r}})$ and $r = 3\sin (s + \pi /6)$ . 

90. Find the value of $dr / dt$ at $t = 0$ if $r = (\theta^2 + 7)^{1/3}$ and $\theta^2 t + \theta = 1$ . 

91. If $y^3 + y = 2\cos x$ , find the value of $d^2y / dx^2$ at the point (0,1). 

92. If $x^{1/3} + y^{1/3} = 4$ , find $d^{2}y/dx^{2}$ at the point (8,8). 

## Applying the Derivative Definition

In Exercises 93 and 94, find the derivative using the definition. 

93. $f(t) = \frac{1}{2t + 1}$ 

94. $g(x) = 2x^{2} + 1$ 

95. a. Graph the function 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2}, & - 1 \leq x <   0 \\ - x ^ {2}, & 0 \leq x \leq 1. \end{array} \right.
$$

b. Is $f$ continuous at $x = 0$ ? 

c. Is $f$ differentiable at $x = 0$ ? 

Give reasons for your answers. 

96. a. Graph the function 

$$
f (x) = \left\{ \begin{array}{l l} x, & - 1 \leq x <   0 \\ \tan x, & 0 \leq x \leq \pi / 4. \end{array} \right.
$$

b. Is $f$ continuous at $x = 0$ ? 

c. Is $f$ differentiable at $x = 0$ ? 

Give reasons for your answers. 

97. a. Graph the function 

$$
f (x) = \left\{ \begin{array}{l l} x, & 0 \leq x \leq 1 \\ 2 - x, & 1 <   x \leq 2. \end{array} \right.
$$

b. Is $f$ continuous at $x = 1$ ? 

c. Is $f$ differentiable at $x = 1$ ? 

Give reasons for your answers. 

98. For what value or values of the constant m, if any, is 

$$
f (x) = \left\{ \begin{array}{l l} \sin 2 x, & x \leq 0 \\ m x, & x > 0 \end{array} \right.
$$

a. continuous at $x = 0$ ? 

b. differentiable at x = 0? 

Give reasons for your answers. 

## Slopes, Tangent Lines, and Normal Lines

99. Tangent lines with specified slope Are there any points on the curve $y = (x / 2) + 1 / (2x - 4)$ where the slope is $-3 / 2$ ? If so, find them. 

100. Tangent lines with specified slope Are there any points on the curve $y = x - e^{-x}$ where the slope is 2? If so, find them. 

101. Horizontal tangent lines Find the points on the curve $y = 2x^{3} - 3x^{2} - 12x + 20$ where the tangent line is parallel to the x-axis. 

102. Tangent intercepts Find the $x$ - and $y$ -intercepts of the line that is tangent to the curve $y = x^3$ at the point $(-2, -8)$ . 

103. Tangent lines perpendicular or parallel to lines Find the points on the curve $y = 2x^{3} - 3x^{2} - 12x + 20$ where the tangent line is 

a. perpendicular to the line $y = 1 - (x / 24)$ . 

b. parallel to the line $y = \sqrt{2} - 12x$ . 

104. Intersecting tangent lines Show that the tangent lines to the curve $y = (\pi \sin x) / x$ at $x = \pi$ and $x = -\pi$ intersect at right angles. 

105. Normal lines parallel to a line Find the points on the curve $y = \tan x, -\pi/2 < x < \pi/2$ , where the normal line is parallel to the line $y = -x/2$ . Sketch the curve and normal lines together, labeling each with its equation. 

106. Tangent lines and normal lines Find equations for the tangent and normal lines to the curve $y = 1 + \cos x$ at the point $(\pi/2, 1)$ . Sketch the curve, tangent line, and normal line together, labeling each with its equation. 

107. Tangent parabola The parabola $y = x^2 + C$ is to be tangent to the line $y = x$ . Find $C$ . 

108. Slope of a tangent line Show that the tangent line to the curve $y = x^{3}$ at any point $(a, a^{3})$ meets the curve again at a point where the slope is four times the slope at $(a, a^{3})$ . 

109. Tangent curve For what value of $c$ is the curve $y = c / (x + 1)$ tangent to the line through the points $(0,3)$ and $(5, -2)$ ? 

110. Normal lines to a circle Show that the normal line at any point of the circle $x^{2} + y^{2} = a^{2}$ passes through the origin. 

In Exercises 111–116, find equations for the lines that are tangent, and the lines that are normal, to the curve at the given point. 

111. $x^{2} + 2y^{2} = 9,\quad(1,2)$ 

112. $e^x + y^2 = 2$ , (0,1) 

113. $xy + 2x - 5y = 2$ (3,2) 

114. $(y - x)^2 = 2x + 4$ (6,2) 

115. $x + \sqrt{xy} = 6,\quad(4,1)$ 

116. $x^{3/2} + 2y^{3/2} = 17$ , (1,4) 

117. Find the slope of the curve $x^{3}y^{3} + y^{2} = x + y$ at the points (1, 1) and (1, -1). 

118. The graph shown suggests that the curve $y = \sin(x - \sin x)$ might have horizontal tangent lines at the x-axis. Does it? Give reasons for your answer. 

![[9ce6181b74272f581a44d842fef77376c68aae08136cd2421e44a1b84e1d64ec.jpg|image]]


Analyzing Graphs 

Each of the figures in Exercises 119 and 120 shows two graphs, the graph of a function $y = f(x)$ together with the graph of its derivative $f'(x)$ . Which graph is which? How do you know? 

![[c37c1ff239a1356baebebee0b2c6e62091812e3952dde407efcba8726d6294c0.jpg|image]]


121. Use the following information to graph the function $y = f(x)$ for $-1 \leq x \leq 6$ . 

i) The graph of $f$ is made of line segments joined end to end. 

ii) The graph starts at the point $(-1, 2)$ . 

iii) The derivative of $f$ , where defined, agrees with the step function shown here. 

![[dbfb00705bd2f0f9fd523d7edbb4f9aba64d2460d2a360eca089a9bbf97a61b4.jpg|image]]


122. Repeat Exercise 121, supposing that the graph starts at $(-1,0)$ instead of $(-1,2)$ . 

## Logarithmic Differentiation

In Exercises 123–128, use logarithmic differentiation to find the derivative of y with respect to the appropriate variable. 

123. $y = \frac{2(x^{2} + 1)}{\sqrt{\cos 2x}}$ 

124. $y = \sqrt[10]{\frac{3x + 4}{2x - 4}}$ 

125. $y = \left(\frac{(t + 1)(t - 1)}{(t - 2)(t + 3)}\right)^{5}, t > 2$ 

126. $y = \frac{2u \, 2^{u}}{\sqrt{u^{2} + 1}}$ 

127. $y = (\sin \theta)^{\sqrt{\theta}}$ 

128. $y = (\ln x)^{1/(\ln x)}$ 

## Related Rates

129. Right circular cylinder The total surface area S of a right circular cylinder is related to the base radius r and height h by the equation $S = 2\pi r^{2} + 2\pi rh$ . 

a. How is $dS/dt$ related to $dr/dt$ if $h$ is constant? 

b. How is $dS / dt$ related to $dh / dt$ if $r$ is constant? 

c. How is $dS / dt$ related to $dr / dt$ and $dh / dt$ if neither $r$ nor $h$ is constant? 

d. How is dr/dt related to dh/dt if S is constant? 

130. Right circular cone The lateral surface area $S$ of a right circular cone is related to the base radius $r$ and height $h$ by the equation $S = \pi r\sqrt{r^2 + h^2}$ . 

a. How is $dS / dt$ related to $dr / dt$ if $h$ is constant? 

b. How is $dS / dt$ related to $dh / dt$ if $r$ is constant? 

c. How is $dS / dt$ related to $dr / dt$ and $dh / dt$ if neither $r$ nor $h$ is constant? 

131. Circle's changing area The radius $r$ of a circle is changing at the rate of $-2 / \pi \mathrm{m / s}$ . At what rate is the circle's area changing when $r = 10\mathrm{m}$ ? 

132. Cube's changing edges The volume of a cube is increasing at the rate of $1200\mathrm{cm}^3/\mathrm{min}$ at the instant its edges are $20\mathrm{cm}$ long. At what rate are the lengths of the edges changing at that instant? 

133. Resistors connected in parallel If two resistors of $R_{1}$ and $R_{2}$ ohms are connected in parallel in an electric circuit to make an R-ohm resistor, the value of R can be found from the equation 

$$
\frac {1}{R} = \frac {1}{R _ {1}} + \frac {1}{R _ {2}}.
$$

![[b6164087f7818725888635c51faa1f7c1f28347b4158f32f6457018339100f84.jpg|image]]


If $R_{1}$ is decreasing at the rate of 1 ohm/s and $R_{2}$ is increasing at the rate of 0.5 ohm/s, at what rate is R changing when $R_{1} = 75$ ohms and $R_{2} = 50$ ohms? 

134. Impedance in a series circuit The impedance Z (ohms) in a series circuit is related to the resistance R (ohms) and reactance X (ohms) by the equation $Z = \sqrt{R^{2} + X^{2}}$ . If R is increasing at 3 ohms/s and X is decreasing at 2 ohms/s, at what rate is Z changing when R = 10 ohms and X = 20 ohms? 

135. Speed of moving particle The coordinates of a particle moving in the metric xy-plane are differentiable functions of time t with dx/dt = 10 m/s and dy/dt = 5 m/s. How fast is the particle moving away from the origin as it passes through the point $(3, -4)$ ? 

136. Motion of a particle A particle moves along the curve $y = x^{3/2}$ in the first quadrant in such a way that its distance from the origin increases at the rate of 11 units per second. Find $dx / dt$ when $x = 3$ . 

137. Draining a tank Water drains from the conical tank shown in the accompanying figure at the rate of $0.2 \, m^{3}/min$ . 

a. What is the relation between the variables h and r in the figure? 

b. How fast is the water level dropping when h = 2 m? 

![[20dcca20bd7f3d761631fef57c1bbab4c5cfeab42a6b0939768d9cabd35cc0bc.jpg|image]]


138. Rotating spool As television cable is pulled from a large spool to be strung from the telephone poles along a street, it unwinds from the spool in layers of constant radius (see accompanying figure). If the truck pulling the cable moves at a steady 2 m/s (a touch over 7 km/h), use the equation $s = r \theta$ to find how fast (radians per second) the spool is turning when the layer of radius 0.4 m is being unwound. 

![[d237efde0934d2ecaa3fe53f5047dbdba4a459fff4ba59ab80f267292a4aac67.jpg|image]]


139. Moving searchlight beam The figure shows a boat 1 km offshore, sweeping the shore with a searchlight. The light turns at a constant rate, $d\theta/dt = -0.6$ rad/s. 

a. How fast is the light moving along the shore when it reaches point A? 

b. How many revolutions per minute is 0.6 rad/s? 

![[358f394a2800b386c68ab5fc6b310d45c5522b066bebfb3398d9dddda950e6e7.jpg|image]]


140. Points moving on coordinate axes Points A and B move along the x- and y-axes, respectively, in such a way that the distance r (meters) along the perpendicular from the origin to the line AB remains constant. How fast is OA changing, and is it increasing or decreasing, when OB = 2r and B is moving toward O at the rate of 0.3r m/s? 

## Linearization

141. Find the linearizations of 

a. $\tan x$ at $x = -\pi/4$ b. $\sec x$ at $x = -\pi/4$ . 

Graph the curves and linearizations together. 

142. We can obtain a useful linear approximation of the function $f(x) = 1 / (1 + \tan x)$ at $x = 0$ by combining the approximations 

$$
\frac {1}{1 + x} \approx 1 - x \quad \text { and } \quad \tan x \approx x
$$

to get 

$$
{\frac {1}{1 + \tan x}} \approx 1 - x.
$$

Show that this result is the standard linear approximation of $1 / (1 + \tan x)$ at $x = 0$ . 

143. Find the linearization of $f(x) = \sqrt{1 + x} + \sin x - 0.5$ at x = 0. 

144. Find the linearization of $f(x) = 2/(1 - x) + \sqrt{1 + x} - 3.1$ at x = 0. 

## Differential Estimates of Change

145. Surface area of a cone Write a formula that estimates the change that occurs in the lateral surface area of a right circular cone when the height changes from $h_{0}$ to $h_{0} + dh$ and the radius does not change. 

![[72b2a3069f05ea589c341ca9661a375eb37c6ecb03cfcbd8140181a0695f3cdc.jpg|image]]


## 146. Controlling error

a. How accurately should you measure the edge of a cube to be reasonably sure of calculating the cube's surface area with an error of no more than $2\%$ ? 

b. Suppose that the edge is measured with the accuracy required in part (a). About how accurately can the cube's volume be calculated from the edge measurement? To find out, estimate the percentage error in the volume calculation that might result from using the edge measurement. 

147. Compounding error The circumference of the equator of a sphere is measured as 10 cm with a possible error of 0.4 cm. This measurement is used to calculate the radius. The radius is then used to calculate the surface area and volume of the sphere. Estimate the percentage errors in the calculated values of 

a. the radius. b. the surface area. c. the volume. 

148. Finding height To find the height of a lamppost (see accompanying figure), you stand a 1.8 m pole 10 m from the lamp and measure the length a of its shadow, finding it to be 4.5 m, give or take a centimeter. Calculate the height of the lamppost using the value a = 4.5, and estimate the possible error in the result. 

![[d5c0774b817369c7c9b9d965b85230be44727e246883f30962ef15664e3d6c60.jpg|image]]


## CHAPTER 3 Additional and Advanced Exercises

1. An equation like $\sin^{2}\theta + \cos^{2}\theta = 1$ is called an identity because it holds for all values of $\theta$ . An equation like $\sin\theta = 0.5$ is not an identity because it holds only for selected values of $\theta$ , not all. If you differentiate both sides of a trigonometric identity in $\theta$ with respect to $\theta$ , the resulting new equation will also be an identity. 

Differentiate the following to show that the resulting equations hold for all $\theta$ . 

a. $\sin 2\theta = 2 \sin \theta \cos \theta$ 

b. $\cos 2\theta = \cos^2\theta -\sin^2\theta$ 

2. If the identity $\sin(x + a) = \sin x \cos a + \cos x \sin a$ is differentiated with respect to x (with a assumed to be a constant), is the resulting equation also an identity? Does this principle apply to the equation $x^{2} - 2x - 8 = 0$ ? Explain. 

3. a. Find values for the constants $a, b$ , and $c$ that will make 

$$
f (x) = \cos x \quad \text { and } \quad g (x) = a + b x + c x ^ {2}
$$

satisfy the conditions 

$$
f (0) = g (0), \quad f ^ {\prime} (0) = g ^ {\prime} (0), \text { and } \quad f ^ {\prime \prime} (0) = g ^ {\prime \prime} (0).
$$

b. Find values for b and c that will make 

$$
f (x) = \sin (x + a) \quad \text { and } \quad g (x) = b \sin x + c \cos x
$$

satisfy the conditions 

$$
f (0) = g (0) \quad \text { and } \quad f ^ {\prime} (0) = g ^ {\prime} (0).
$$

c. For the determined values of $a$ , $b$ , and $c$ , what happens for the third and fourth derivatives of $f$ and $g$ in each of parts (a) and (b)? 

## 4. Solutions to differential equations

a. Show that $y = \sin x, y = \cos x$ , and $y = a\cos x + b\sin x$ (a and b constants) all satisfy the equation 

$$
y ^ {\prime \prime} + y = 0.
$$

b. How would you modify the functions in part (a) to satisfy the equation 

$$
y ^ {\prime \prime} + 4 y = 0?
$$

Generalize this result. 

5. An osculating circle Find the values of h, k, and a that make the circle $(x - h)^{2} + (y - k)^{2} = a^{2}$ tangent to the parabola $y = x^{2} + 1$ at the point (1, 2) and that also make the second derivatives $d^{2}y/dx^{2}$ have the same value on both curves there. Circles like this one that are tangent to a curve and have the same second derivative as the curve at the point of tangency are called osculating circles (from the Latin osculari, meaning “to kiss”). We will encounter them again in Chapter 12. 

6. Marginal revenue A bus will hold 60 people. The number x of people per trip who use the bus is related to the fare charged (p dollars) by the law $p = [3 - (x/40)]^{2}$ . Write an expression for the total revenue $r(x)$ per trip received by the bus company. What number of people per trip will make the marginal revenue dr/dx equal to zero? What is the corresponding fare? (This fare is the one that maximizes the revenue.) 

## 7. Industrial production

a. Economists often use the expression “rate of growth” in relative rather than absolute terms. For example, let $u = f(t)$ be the number of people in the labor force at time t in a given industry. (We treat this function as though it were differentiable even though it is an integer-valued step function.) 

Let $v = g(t)$ be the average production per person in the labor force at time t. The total production is then y = uv. If the labor force is growing at the rate of 4% per year (du/dt = 0.04u) and the production per worker is growing at the rate of 5% per year (dv/dt = 0.05v), find the rate of growth of the total production, y. 

b. Suppose that the labor force in part (a) is decreasing at the rate of 2% per year while the production per person is increasing at the rate of 3% per year. Is the total production increasing, or is it decreasing, and at what rate? 

8. Designing a gondola The designer of a 10 m-diameter spherical hot air balloon wants to suspend the gondola 2.5 m below the bottom of the balloon with cables tangent to the surface of the balloon, as shown. Two of the cables are shown running from the top edges of the gondola to their points of tangency, $(-4, -3)$ and $(4, -3)$ . How wide should the gondola be? 

![[58967c2bfc943491efb7c73253dbe76b368a739dcc4b7d55a20dd50ef5ac2bf9.jpg|image]]


9. Pisa by parachute On August 5, 1988, Mike McCarthy of London jumped from the top of the Tower of Pisa. He then opened his parachute in what he said was a world record low-level parachute jump of 54.6 m. Make a rough sketch to show the shape of the graph of his speed during the jump. (Data from: Boston Globe, Aug. 6, 1988.) 

10. Motion of a particle The position at time $t \geq 0$ of a particle moving along a coordinate line is 

$$
s = 1 0 \cos (t + \pi / 4).
$$

a. What is the particle's starting position $(t = 0)$ ? 

b. What are the points farthest to the left and right of the origin reached by the particle? 

c. Find the particle's velocity and acceleration at the points in part (b). 

d. When does the particle first reach the origin? What are its velocity, speed, and acceleration then? 

11. Shooting a paper clip On Earth, you can easily shoot a paper clip 19.6 m straight up into the air with a rubber band. In t seconds after firing, the paper clip is $s = 19.6t - 4.9t^{2}$ m above your hand. 

a. How long does it take the paper clip to reach its maximum height? With what velocity does it leave your hand? 

b. On the moon, the same acceleration will send the paper clip to a height of $s = 19.6t - 0.8t^{2}$ m in t s. About how long will it take the paper clip to reach its maximum height, and how high will it go? 

12. Velocities of two particles At time t seconds, the positions of two particles on a coordinate line are $s_{1} = 3t^{3} - 12t^{2} + 18t + 5$ m and $s_{2} = -t^{3} + 9t^{2} - 12t$ m. When do the particles have the same velocities? 

13. Velocity of a particle A particle of constant mass m moves along the x-axis. Its velocity v and position x satisfy the equation 

$$
\frac {1}{2} m (v ^ {2} - v _ {0} ^ {2}) = \frac {1}{2} k (x _ {0} ^ {2} - x ^ {2}),
$$

where $k, v_{0}$ , and $x_{0}$ are constants. Show that whenever $v \neq 0$ , 

$$
m \frac {d v}{d t} = - k x.
$$

In Exercises 14 and 15, use implicit differentiation to find $\frac{dy}{dx}$ .  
14. $y^{\ln x} = x^{xy}$ 

15. $y^{ex} = x^y + 1$ 

16. Average and instantaneous velocity 

a. Show that if the position x of a moving point is given by a quadratic function of $t, x = At^{2} + Bt + C$ , then the average velocity over any time interval $[t_{1}, t_{2}]$ is equal to the instantaneous velocity at the midpoint of the time interval. 

b. What is the geometric significance of the result in part (a)? 

17. Find all values of the constants m and b for which the function 

$$
y = \left\{ \begin{array}{l l} \sin x, & x <   \pi \\ m x + b, & x \geq \pi \end{array} \right.
$$

is 

a. continuous at $x = \pi$ . 

b. differentiable at $x = \pi$ . 

18. Does the function 

$$
f (x) = \left\{ \begin{array}{l l} \frac {1 - \cos x}{x}, & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

have a derivative at x = 0? Explain. 

19. a. For what values of $a$ and $b$ will 

$$
f (x) = \left\{ \begin{array}{l l} a x, & x <   2 \\ a x ^ {2} - b x + 3, & x \geq 2 \end{array} \right.
$$

be differentiable for all values of x? 

b. Discuss the geometry of the resulting graph of $f$ . 

20. a. For what values of $a$ and $b$ will 

$$
g (x) = \left\{ \begin{array}{l l} a x + b, & x \leq - 1 \\ a x ^ {3} + x + 2 b, & x > - 1 \end{array} \right.
$$

be differentiable for all values of $x$ ? 

b. Discuss the geometry of the resulting graph of g. 

21. Odd differentiable functions Is there anything special about the derivative of an odd differentiable function of $x$ ? Give reasons for your answer. 

22. Even differentiable functions Is there anything special about the derivative of an even differentiable function of $x$ ? Give reasons for your answer. 

23. Suppose that the functions $f$ and $g$ are defined throughout an open interval containing the point $x_0$ , that $f$ is differentiable at $x_0$ , that $f(x_0) = 0$ , and that $g$ is continuous at $x_0$ . Show that the product $fg$ is differentiable at $x_0$ . This process shows, for example, that although $|x|$ is not differentiable at $x = 0$ , the product $x|x|$ is differentiable at $x = 0$ . 

24. (Continuation of Exercise 23.) Use the result of Exercise 23 to show that the following functions are differentiable at x = 0. 

a. $|x|\sin x$ 

b. $x^{2/3}\sin x$ 

c. $\sqrt[3]{x}(1 - \cos x)$ 

d. $h(x) = \begin{cases} x^2\sin (1 / x), & x\neq 0\\ 0, & x = 0 \end{cases}$ 

25. Is the derivative of 

$$
h (x) = \left\{ \begin{array}{l l} x ^ {2} \sin (1 / x), & x \neq 0 \\ 0, & x = 0 \end{array} \right.
$$

continuous at x = 0? How about the derivative of $k(x) = xh(x)$ ? Give reasons for your answers. 

26. Let $f(x) = \begin{cases} x^2, & x \text{ is rational} \\ 0, & x \text{ is irrational}. \end{cases}$ 

Show that $f$ is differentiable at $x = 0$ . 

27. Point B moves from point A to point C at 2 cm/s in the accompanying diagram. At what rate is $\theta$ changing when x = 4 cm? 

![[756dd5620fd28cf8c5d61e1beaf61af4c2238d0d1b498063b893cefc1df14957.jpg|image]]


28. Suppose that a function $f$ satisfies the following two conditions for all real values of $x$ and $y$ : 

ii) $f(x) = 1 + xg(x)$ , where $\lim_{x\to 0}g(x) = 1$ . 

Show that the derivative $f'(x)$ exists at every value of $x$ and that $f'(x) = f(x)$ . 

29. The generalized product rule Use mathematical induction to prove that if $y = u_{1}u_{2}\cdots u_{n}$ is a finite product of differentiable functions, then y is differentiable on their common domain, and 

$$
\frac {d y}{d x} = \frac {d u _ {1}}{d x} u _ {2} \dots u _ {n} + u _ {1} \frac {d u _ {2}}{d x} \dots u _ {n} + \dots + u _ {1} u _ {2} \dots u _ {n - 1} \frac {d u _ {n}}{d x}.
$$

30. Leibniz's rule for higher-order derivatives of products Leibniz's rule for higher-order derivatives of products of differentiable functions says that 

$$
\mathbf {a}. \frac {d ^ {2} (u v)}{d x ^ {2}} = \frac {d ^ {2} u}{d x ^ {2}} v + 2 \frac {d u}{d x} \frac {d v}{d x} + u \frac {d ^ {2} v}{d x ^ {2}}.
$$

$$
\mathbf {b}. \frac {d ^ {3} (u v)}{d x ^ {3}} = \frac {d ^ {3} u}{d x ^ {3}} v + 3 \frac {d ^ {2} u}{d x ^ {2}} \frac {d v}{d x} + 3 \frac {d u}{d x} \frac {d ^ {2} v}{d x ^ {2}} + u \frac {d ^ {3} v}{d x ^ {3}}.
$$

$$
\begin{array}{l} \mathbf {c}. \frac {d ^ {n} (u v)}{d x ^ {n}} = \frac {d ^ {n} u}{d x ^ {n}} v + n \frac {d ^ {n - 1} u}{d x ^ {n - 1}} \frac {d v}{d x} + \dots \\ \qquad + \frac {n (n - 1) \cdots (n - k + 1)}{k !} \frac {d ^ {n - k} u}{d x ^ {n - k}} \frac {d ^ {k} v}{d x ^ {k}} \\ \qquad + \dots + u \frac {d ^ {n} v}{d x ^ {n}}. \end{array}
$$

The equations in parts (a) and (b) are special cases of the equation in part (c). Derive the equation in part (c) by mathematical induction, using 

$$
\binom{m}{k} + \binom{m}{k + 1} = \frac {m !}{k ! (m - k) !} + \frac {m !}{(k + 1) ! (m - k - 1) !}.
$$

31. The period of a clock pendulum The period T of a clock pendulum (time for one full swing and back) is given by the formula $T^{2} = 4\pi^{2} L/g$ , where T is measured in seconds, $g = 9.8 m/s^{2}$ , and L, the length of the pendulum, is measured in meters. Find approximately 

a. the length of a clock pendulum whose period is T = 1 s. 

b. the change dT in T if the pendulum in part (a) is lengthened 0.01 m. 

c. the amount the clock gains or loses in a day as a result of the period's changing by the amount $dT$ found in part (b). 

32. The melting ice cube Assume that an ice cube retains its cubical shape as it melts. If we call its edge length s, its volume is $V = s^{3}$ and its surface area is $6s^{2}$ . We assume that V and s are differentiable functions of time t. We assume also that the cube's volume decreases at a rate that is proportional to its surface area. (This latter assumption seems reasonable enough when we think that the melting takes place at the surface: Changing the amount of surface changes the amount of ice exposed to melt.) In mathematical terms, 

$$
\frac {d V}{d t} = - k (6 s ^ {2}), \quad k > 0.
$$

The minus sign indicates that the volume is decreasing. We assume that the proportionality factor k is constant. (It probably depends on many things, such as the relative humidity of the surrounding air, the air temperature, and the incidence or absence of sunlight, to name only a few.) Assume a particular set of conditions in which the cube lost 1/4 of its volume during the first hour, and assume that the volume is $V_{0}$ when t = 0. How long will it take the ice cube to melt? 

## CHAPTER 3 Technology Application Projects

## Mathematica/Maple Projects

Projects can be found at www.pearsonglobaleditions.com or within MyLab Math. 

You will visualize the secant line between successive points on a curve and observe what happens as the distance between them becomes small. The function, sample points, and secant lines are plotted on a single graph, while a second graph compares the slopes of the secant lines with the derivative function. 

- Derivatives, Slopes, Tangent Lines, and Making Movies
Parts I–III. You will visualize the derivative at a point, the linearization of a function, and the derivative of a function. You will learn how to plot the function and selected tangent lines on the same graph.
Part IV (Plotting Many Tangent Lines) 

Part V (Making Movies). Parts IV and V of the module can be used to animate tangent lines as one moves along the graph of a function. 

- Convergence of Secant Slopes to the Derivative Function
You will visualize right-hand and left-hand derivatives. 

- Motion Along a Straight Line: Position $\rightarrow$ Velocity $\rightarrow$ Acceleration
  Observe dramatic animated visualizations of the derivative relations among the position, velocity, and acceleration functions. Figures in the text can be animated. 

# 4 Applications of Derivatives

![[9f766a3dea929e00d2367a160f537cfc1523fadd60bd9d45c92022bd845f4366.jpg|image]]


OVERVIEW One of the most important applications of the derivative is its use as a tool for finding the optimal (best) solutions to problems. For example, what are the height and diameter of the cylinder of largest volume that can be inscribed in a given sphere? What are the dimensions of the strongest rectangular wooden beam that can be cut from a cylindrical log of given diameter? How many items should a manufacturer produce to maximize profit? 

In this chapter we apply derivatives to find extreme values of functions, to determine and analyze the shapes of graphs, and to solve equations numerically. We also investigate how to recover a function from its derivative. The key to many of these applications is the Mean Value Theorem, which connects the derivative and the average change of a function.
