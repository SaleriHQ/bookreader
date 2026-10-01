---
title: "Chapter 2: Limits and Continuity"
order: 2
---

# Chapter 2: Limits and Continuity

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 2.1 Rates of Change and Tangent Lines to Curves

HISTORICAL BIOGRAPHY 

### Average and Instantaneous Speed

Galileo Galilei 

(1564–1642) 

Galileo was an Italian mathematician and astronomer. He attempted to apply mathematics to his work in astronomy, physics of kinematics, and strength of materials. 

To know more, visit the companion Website. 

In the late sixteenth century, Galileo discovered that a solid object dropped from rest (initially not moving) near the surface of the earth and allowed to fall freely, will fall a distance proportional to the square of the time it has been falling. This type of motion is called free fall. It assumes negligible air resistance to slow the object down, and it assumes that gravity is the only force acting on the falling object. If $y$ denotes the distance fallen in meters after $t$ seconds, then Galileo's law is 

$$
y = 4. 9 t ^ {2} \mathrm{m},
$$

where 4.9 is the (approximate) constant of proportionality. 

More generally, suppose that a moving object has traveled distance $f(t)$ at time t. The object's average speed during an interval of time $[t_{1}, t_{2}]$ is found by dividing the distance traveled $f(t_{2}) - f(t_{1})$ by the time elapsed $t_{2} - t_{1}$ . The unit of measure is length per unit time: kilometers per hour, meters per second, or whatever is appropriate to the problem at hand. 

Average Speed 

When $f(t)$ measures the distance traveled at time t, 

Average speed over 

$$
\left[ t _ {1}, t _ {2} \right] = \frac {\text { distance   traveled }}{\text { elapsed   time }} = \frac {f (t _ {2}) - f (t _ {1})}{t _ {2} - t _ {1}}.
$$

**EXAMPLE 1** A rock breaks loose from the top of a tall cliff. What is its average speed

(a) during the first 2 seconds of fall? 

(b) during the 1-second interval between second 1 and second 2? 

$\Delta$ is the capital Greek letter Delta. 

**Solution** The average speed of the rock during a given time interval is the change in distance, $\Delta y$ , divided by the length of the time interval, $\Delta t$ . (Increments like $\Delta y$ and $\Delta t$ are reviewed in Appendix A.4, and pronounced “delta y” and “delta t.”) Measuring distance in meters and time in seconds, we have the following calculations: 

(a) For the first 2 seconds: 

$$
\frac {\Delta y}{\Delta t} = \frac {4 . 9 (2) ^ {2} - 4 . 9 (0) ^ {2}}{2 - 0} = 9. 8 \mathrm{m/s}
$$

(b) From second 1 to second 2: 

$$
\frac {\Delta y}{\Delta t} = \frac {4 . 9 (2) ^ {2} - 4 . 9 (1) ^ {2}}{2 - 1} = 1 4. 7 \mathrm{m/s}
$$

We want a way to determine the speed of a falling object at a single instant $t_{0}$ , instead of using its average speed over an interval of time. To do this, we examine what happens when we calculate the average speed over shorter and shorter time intervals starting at $t_{0}$ . The next example illustrates this process. Our discussion is informal here but will be made precise in Chapter 3. 

**EXAMPLE 2** Find the speed of the falling rock in Example 1 at t = 1 and t = 2 s.

**Solution** We can calculate the average speed of the rock over a time interval $[t_{0}, t_{0} + h]$ , having length $\Delta t = h$ , as 

$$
\frac {\Delta y}{\Delta t} = \frac {4 . 9 (t _ {0} + h) ^ {2} - 4 . 9 t _ {0} ^ {2}}{h}.\tag{1}
$$

We cannot use this formula to calculate the “instantaneous” speed at the exact moment $t_{0}$ by simply substituting h = 0, because we cannot divide by zero. But we can use it to calculate average speeds over increasingly short time intervals starting at $t_{0} = 1$ and $t_{0} = 2$ . When we do so, by taking smaller and smaller values of h, we see a pattern (Table 2.1). 


TABLE 2.1 Average speeds over short time intervals $[t_{0}, t_{0} + h]$


<table><tr><td colspan="3">Average speed: <eq>\frac{\Delta y}{\Delta t} = \frac{4.9(t_0 + h)^2 - 4.9t_0^2}{h}</eq></td></tr><tr><td>Length of time interval h</td><td>Average speed over interval of length h starting at <eq>t_0 = 1</eq></td><td>Average speed over interval of length h starting at <eq>t_0 = 2</eq></td></tr><tr><td>1</td><td>14.7</td><td>24.5</td></tr><tr><td>0.1</td><td>10.29</td><td>20.09</td></tr><tr><td>0.01</td><td>9.849</td><td>19.649</td></tr><tr><td>0.001</td><td>9.8049</td><td>19.6049</td></tr><tr><td>0.0001</td><td>9.80049</td><td>19.60049</td></tr></table>

The average speed on intervals starting at $t_{0} = 1$ seems to approach a limiting value of 9.8 as the length of the interval decreases. This suggests that the rock is falling at a speed of 9.8 m/s at $t_{0} = 1$ s. Let's confirm this algebraically. 

![教材插图](/books/thomas-calculus/assets/37624a7ed9e2d292c67f1ff73dd079f95f09e82c48cea2892cd70bb89afdeefd.jpg)



FIGURE 2.1 A secant to the graph $y = f(x)$ . Its slope is $\Delta y/\Delta x$ , the average rate of change of f over the interval $[x_{1}, x_{2}]$ .


![教材插图](/books/thomas-calculus/assets/f8ff834c758843dff8297495396ecef1a80f90661272ee95bda466513645fd00.jpg)



FIGURE 2.2 L is tangent to the circle at P if it passes through P perpendicular to radius OP.


If we set $t_0 = 1$ and then expand the numerator in Equation (1) and simplify, we find that 

$$
\begin{array}{r l} \frac {\Delta y}{\Delta t} & = \frac {4 . 9 (1 + h) ^ {2} - 4 . 9 (1) ^ {2}}{h} = \frac {4 . 9 (1 + 2 h + h ^ {2}) - 4 . 9}{h} \\ & = \frac {9 . 8 h + 4 . 9 h ^ {2}}{h} = 9. 8 + 4. 9 h. \quad \text {   Can   cancel   } h \text {   when   } h \neq 0 \end{array}
$$

For values of h different from 0, the expressions on the right and left are equivalent and the average speed is $9.8 + 4.9h$ m/sec. We can now see why the average speed has the limiting value $9.8 + 4.9(0) = 9.8$ m/sec as h approaches 0. 

Similarly, setting $t_{0} = 2$ in Equation (1), for values of h different from 0 the procedure yields 

$$
\frac {\Delta y}{\Delta t} = 1 9. 6 + 4. 9 h.
$$

As h gets closer and closer to 0, the average speed has the limiting value 19.6 m/s when $t_{0} = 2$ s, as suggested by Table 2.1. 

The average speed of a falling object is an example of a more general idea, an average rate of change. 

### Average Rates of Change and Secant Lines

Given any function $y = f(x)$ , we calculate the average rate of change of y with respect to x over the interval $[x_{1}, x_{2}]$ by dividing the change in the value of y, $\Delta y = f(x_{2}) - f(x_{1})$ , by the length $\Delta x = x_{2} - x_{1} = h$ of the interval over which the change occurs. (We use the symbol h for $\Delta x$ to simplify the notation here and later on.) 

> ***DEFINITION*** The average rate of change of $y = f(x)$ with respect to $x$ over the interval $[x_1, x_2]$ is 
>
> $$
> \frac {\Delta y}{\Delta x} = \frac {f (x _ {2}) - f (x _ {1})}{x _ {2} - x _ {1}} = \frac {f (x _ {1} + h) - f (x _ {1})}{h}, \quad h \neq 0.
> $$
>
Geometrically, the rate of change of f over $[x_{1}, x_{2}]$ is the slope of the line through the points $P(x_{1}, f(x_{1}))$ and $Q(x_{2}, f(x_{2}))$ (Figure 2.1). In geometry, a line joining two points of a curve is called a secant line. Thus, the average rate of change of f from $x_{1}$ to $x_{2}$ is identical to the slope of secant line PQ. As the point Q approaches the point P along the curve, the length h of the interval over which the change occurs approaches zero. We will see that this procedure leads to the definition of the slope of a curve at a point. 

### Defining the Slope of a Curve

We know what is meant by the slope of a straight line, which tells us the rate at which it rises or falls—its rate of change as a linear function. But what is meant by the slope of a curve at a point P on the curve? If there were a tangent line to the curve at P—a line that grazes the curve like the tangent line to a circle—it would be reasonable to identify the slope of the tangent line as the slope of the curve at P. We will see that, among all the lines that pass through the point P, the tangent line is the one that gives the best approximation to the curve at P. We need a precise way to specify the tangent line at a point on a curve. 

Specifying a tangent line to a circle is straightforward. A line L is tangent to a circle at a point P if L passes through P and is perpendicular to the radius at P (Figure 2.2). But what does it mean to say that a line L is tangent to a more general curve at a point P? 

HISTORICAL BIOGRAPHY
Pierre de Fermat
(1601–1665) 

Fermat was born to a prosperous family in France. He studied the classics and mastered Latin, Greek, Italian, and Spanish. 

To know more, visit the companion Website. 

To define tangency for general curves, we use an approach that analyzes the behavior of the secant lines that pass through P and nearby points Q as Q moves toward P along the curve (Figure 2.3). We start with what we can calculate, namely the slope of the secant line PQ. We then compute the limiting value of the secant line's slope as Q approaches P along the curve. (We clarify the limit idea in the next section.) If the limit exists, we take it to be the slope of the curve at P and define the tangent line to the curve at P to be the line through P with this slope. 

The next example illustrates the geometric idea for finding the tangent line to a curve. 

![教材插图](/books/thomas-calculus/assets/027945b1224e6243f004b67a8a5451acbb53591505afad24631ab9c72c128b07.jpg)



FIGURE 2.3 The tangent line to the curve at P is the line through P whose slope is the limit of the secant line slopes as $Q \rightarrow P$ from either side.


**EXAMPLE 3** Find the slope of the tangent line to the parabola $y = x^{2}$ at the point (2, 4) by analyzing the slopes of secant lines through (2, 4). Write an equation for the tangent line to the parabola at this point. 

**Solution** We begin with a secant line through $P(2,4)$ and a nearby point $Q\big(2+h,(2+h)^{2}\big)$ , as shown in Figure 2.4. We then write an expression for the slope of the secant line PQ and investigate what happens to the slope as Q approaches P along the curve: 

$$
\begin{array}{r l} \text {   Secant   line   slope   } & = \frac {\Delta y}{\Delta x} = \frac {(2 + h) ^ {2} - 2 ^ {2}}{h} = \frac {h ^ {2} + 4 h + 4 - 4}{h} \\ & = \frac {h ^ {2} + 4 h}{h} = h + 4. \end{array}
$$

If $h > 0$ , then $Q$ lies above and to the right of $P$ , as in Figure 2.4. If $h < 0$ , then $Q$ lies to the left of $P$ (not shown). In either case, as $Q$ approaches $P$ along the curve, $h$ approaches zero and the secant line slope $h + 4$ approaches 4. We take 4 to be the parabola's slope at $P$ . 

![教材插图](/books/thomas-calculus/assets/42e03662cec0aac44bdb605a74e0d51694d5acf2568ec434f1587c3a16b6a2fd.jpg)



FIGURE 2.4 Finding the slope of the parabola $y = x^{2}$ at the point $P(2,4)$ as the limit of secant line slopes (Example 3).


The tangent line to the parabola at P is the line through P with slope 4: 

$$
\begin{array}{l l} y = 4 + 4 (x - 2) & \text { Point - slope   equation } \\ y = 4 x - 4. & \text { Simplify. } \end{array}
$$

### Rates of Change and Tangent Lines

The rates at which the rock in Example 2 was falling at the instants t = 1 and t = 2 are called instantaneous rates of change. Instantaneous rates of change and slopes of tangent lines are closely connected, as we see in the following examples. 

**EXAMPLE 4** Figure 2.5 shows how a population p of fruit flies (Drosophila) grew in a 50-day experiment. The flies were counted at regular intervals, the counted values plotted with respect to the number of elapsed days t, and the points joined by a smooth curve (colored blue in Figure 2.5). Find the average growth rate from day 23 to day 45. 

**Solution** There were 150 flies on day 23 and 340 flies on day 45. Thus the number of flies increased by $340 - 150 = 190$ in $45 - 23 = 22$ days. The average rate of change of the population from day 23 to day 45 was 

$$
\frac {\Delta p}{\Delta t} = \frac {3 4 0 - 1 5 0}{4 5 - 2 3} = \frac {1 9 0}{2 2} \approx 8. 6 \mathrm{flies/day}.
$$

![教材插图](/books/thomas-calculus/assets/0a9de4ebc0598952dc761ef49ad60d804a4a58f42ee7a1872470b417ec5b8ef7.jpg)



FIGURE 2.5 Growth of a fruit fly population in a controlled experiment. The average rate of change over 22 days is the slope $\Delta p/\Delta t$ of the secant line (Example 4).


This average is the slope of the secant line through the points P and Q on the graph in Figure 2.5. 

The average rate of change from day 23 to day 45 calculated in Example 4 does not tell us how fast the population was changing on day 23 itself. For that we need to examine time intervals closer to the day in question. 

**EXAMPLE 5** How fast was the number of flies in the population of Example 4 growing on day 23? 

**Solution** To answer this question, we examine the average rates of change over shorter and shorter time intervals starting at day 23. In geometric terms, we find these rates by calculating the slopes of secant lines from P to Q, for a sequence of points Q approaching P along the curve (Figure 2.6). 

<table><tr><td>Q</td><td>Slope of PQ = Δp/Δt (flies/day)</td></tr><tr><td>(45,340)</td><td>340 - 150 / 45 - 23 ≈ 8.6</td></tr><tr><td>(40,330)</td><td>330 - 150 / 40 - 23 ≈ 10.6</td></tr><tr><td>(35,310)</td><td>310 - 150 / 35 - 23 ≈ 13.3</td></tr><tr><td>(30,265)</td><td>265 - 150 / 30 - 23 ≈ 16.4</td></tr></table>

![教材插图](/books/thomas-calculus/assets/2f2b01a6e9c318d860b85cc26c2f6c852a1a761bf9dfed256ac3eb3fb8dd6c60.jpg)



FIGURE 2.6 The positions and slopes of four secant lines through the point P on the fruit fly graph (Example 5).


The values in the table show that the secant line slopes rise from 8.6 to 16.4 as the t-coordinate of Q decreases from 45 to 30, and we would expect the slopes to rise slightly higher as t continued decreasing toward 23. Geometrically, the secant lines rotate counterclockwise about P and seem to approach the red tangent line in the figure. Since the line appears to pass through the points $(14, 0)$ and $(35, 350)$ , its slope is approximately 

$$
\frac {3 5 0 - 0}{3 5 - 1 4} = 1 6. 7 \text {   flies / day.   }
$$

On day 23 the population was increasing at a rate of about 16.7 flies/day. 

The instantaneous rate of change is the value the average rate of change approaches as the length h of the interval over which the change occurs approaches zero. The average rate of change corresponds to the slope of a secant line; the instantaneous rate corresponds to the slope of the tangent line at a fixed value. So instantaneous rates and slopes of tangent lines are closely connected. We give a precise definition for these terms in the next chapter, but to do so we first need to develop the concept of a limit. 

### EXERCISES 2.1

#### Average Rates of Change

In Exercises 1–6, find the average rate of change of the function over the given interval or intervals. 

Slope of a Curve at a Point 

1. $f(x) = x^{3} + 1$ 

2. $g(x) = x^{2} - 2x$ a.[1,3] 

3. $h(t) = \cot t$ 

4. $g(t) = 2 + \cos t$ 

5. $R(\theta) = \sqrt{4\theta + 1}; [0, 2]$ 

6. $P(\theta) = \theta^{3} - 4\theta^{2} + 5\theta; \quad [1, 2]$ 

In Exercises 7–18, use the method in Example 3 to find (a) the slope of the curve at the given point P, and (b) an equation of the tangent line at P. 

a. [2, 3] 

b. $[-1,1]$ 

7. $y = x ^ {2} - 5, \quad P (2, - 1)$

8. $y = 7 - x^{2}, P(2,3)$ 

b. $[-2,4]$ 

9. $y = x^{2} - 2x - 3,\quad P(2, -3)$ 

10. $y = x^{2} - 4x, P(1, -3)$ 

$$
[ \pi / 4, 3 \pi / 4 ]
$$

$$
[ \pi / 6, \pi / 2 ]
$$

11. $y = x^{3}$ , $P(2,8)$ 

12. $y = 2 - x^3, P(1,1)$ 

a. $[0,\pi ]$ 

b. $[- \pi, \pi]$ 

13. $y = x^{3} - 12x, P(1, -11)$ 

14. $y = x^{3} - 3x^{2} + 4, P(2,0)$ 

15. $y = \frac{1}{x}, P(-2, -1 / 2)$ 

![教材插图](/books/thomas-calculus/assets/2fd71bb4115e3fda34be9a6931525376464bedbd82cd198cd7535403692e515a.jpg)


16. $y = \frac{x}{2 - x}, P(4, - 2)$ 

17. $y = \sqrt{x}, P(4,2)$ 

18. $y = \sqrt{7 - x}$ , $P(-2,3)$ 

Instantaneous Rates of Change 

19. Speed of a car The accompanying figure shows the time-to-distance graph for a sports car accelerating from a standstill. 

![教材插图](/books/thomas-calculus/assets/9fdf2cb8a56b49a70e346602944124675512f614a5303565366a520b3ef419de.jpg)


a. Estimate the slopes of secant lines $PQ_{1}$ , $PQ_{2}$ , $PQ_{3}$ , and $PQ_{4}$ , arranging them in order in a table like the one in Figure 2.6. What are the appropriate units for these slopes? 

b. Then estimate the car's speed at time $t = 20 \, \text{s}$ . 

20. The accompanying figure shows the plot of distance fallen versus time for an object that fell from the lunar landing module a distance $80\mathrm{m}$ to the surface of the moon. 

a. Estimate the slopes of the secant lines $PQ_{1}, PQ_{2}, PQ_{3}$ , and $PQ_{4}$ , arranging them in a table like the one in Figure 2.6. 

b. About how fast was the object going when it hit the surface? 

![教材插图](/books/thomas-calculus/assets/252cced567e8522ba84814e8ec0c2a2fa764241590e67ad0fc846192505d3ce3.jpg)


![教材插图](/books/thomas-calculus/assets/b4805c1b480e5c9acde21d7aa693ca4b2cd804bb01dabce479c9ce60effd62c8.jpg)



21. The profits of a small company for each of the first five years of its operation are given in the following table:


<table><tr><td>Year</td><td>Profit in $1000s</td></tr><tr><td>2017</td><td>6</td></tr><tr><td>2018</td><td>27</td></tr><tr><td>2019</td><td>62</td></tr><tr><td>2020</td><td>111</td></tr><tr><td>2021</td><td>174</td></tr></table>

a. Plot points representing the profit as a function of year, and join them by as smooth a curve as you can. 

b. What is the average rate of increase of the profits between 2019 and 2021? 

c. Use your graph to estimate the rate at which the profits were changing in 2019. 

22. Make a table of values for the function $F(x) = (x + 2)/(x - 2)$ at the points x = 1.2, x = 11/10, x = 101/100, x = 1001/1000, x = 10001/10000, and x = 1. 

a. Find the average rate of change of $F(x)$ over the intervals $[1, x]$ for each $x \neq 1$ in your table. 

b. Extending the table if necessary, try to determine the rate of change of $F(x)$ at x = 1. 

T 23. Let $g(x) = \sqrt{x}$ for $x \geq 0$ . 

a. Find the average rate of change of $g(x)$ with respect to $x$ over the intervals [1, 2], [1, 1.5] and [1, 1 + h]. 

b. Make a table of values of the average rate of change of g with respect to x over the interval $[1,1+h]$ for some values of h approaching zero, say h = 0.1, 0.01, 0.001, 0.0001, 0.00001, and 0.000001. 

c. What does your table indicate is the rate of change of $g(x)$ with respect to $x$ at $x = 1$ ? 

T 24. Let $f(t) = 1/t$ for $t \neq 0$ . 

a. Find the average rate of change of $f$ with respect to $t$ over the intervals (i) from $t = 2$ to $t = 3$ , and (ii) from $t = 2$ to $t = T$ . 

b. Make a table of values of the average rate of change of f with respect to t over the interval $[2, T]$ , for some values of T approaching 2, say T = 2.1, 2.01, 2.001, 2.0001, 2.00001, and 2.000001. 

c. What does your table indicate is the rate of change of $f$ with respect to $t$ at $t = 2$ ? 

25. The accompanying graph shows the total distance s traveled by a bicyclist after t hours. 

![教材插图](/books/thomas-calculus/assets/870df1fc0480ab84d3d6076979770b08a0bfdb6c751cb5fabb1eb455b01f1330.jpg)


a. Estimate the bicyclist's average speed over the time intervals [0, 1], [1, 2.5], and [2.5, 3.5]. 

b. Estimate the bicyclist's instantaneous speed at the times $t = \frac{1}{2}$ , $t = 2$ , and $t = 3$ . 

c. Estimate the bicyclist's maximum speed and the specific time at which it occurs. 

26. The accompanying graph shows the total amount of gasoline A in the gas tank of a motorcycle after being driven for t days. 

![教材插图](/books/thomas-calculus/assets/f016b5af977c75601b6d9f911864e5151625a8a3c915af57d62921c9bdbccd96.jpg)


a. Estimate the average rate of gasoline consumption over the time intervals $[0,3]$ , $[0,5]$ , and $[7,10]$ . 

b. Estimate the instantaneous rate of gasoline consumption at the times t = 1, t = 4, and t = 8. 

c. Estimate the maximum rate of gasoline consumption and the specific time at which it occurs. 

## 2.2 Limit of a Function and Limit Laws

HISTORICAL ESSAY 

To read this essay, visit the companion Website. 

![教材插图](/books/thomas-calculus/assets/2d7752342a05bb8bd3bf1b516b83863e3d041fc3ed2fee26c03a59039be0476f.jpg)


![教材插图](/books/thomas-calculus/assets/8ea97f53444363aa5d6954a5839e57e74f5f0d0118659097df07d2887b417a56.jpg)



FIGURE 2.7 The graph of f is identical to the line $y = x + 1$ except at x = 1, where f is not defined (Example 1).


In Section 2.1 we saw how limits arise when finding the instantaneous rate of change of a function or the tangent line to a curve. We begin this section by presenting an informal definition of the limit of a function. We then describe laws that capture the behavior of limits. These laws enable us to quickly compute limits for a variety of functions, including polynomials and rational functions. We will present the precise definition of a limit in Section 2.3. 

### Limits of Function Values

Frequently, when studying a function $y = f(x)$ , we find ourselves interested in the function's behavior near a particular point $c$ , but not at $c$ itself. An important example occurs when the process of trying to evaluate a function at $c$ leads to division by zero, which is undefined. We encountered this when seeking the instantaneous rate of change in $y$ by considering the quotient function $\Delta y / h$ for $h$ closer and closer to zero. In the next example we explore numerically how a function behaves near a particular point at which we cannot directly evaluate the function. 

**EXAMPLE 1** How does the function 

$$
f (x) = \frac {x ^ {2} - 1}{x - 1}
$$

behave near $x = 1$ ? 

**Solution** The given formula defines f for all real numbers x except x = 1 (since we cannot divide by zero). For any $x \neq 1$ , we can simplify the formula by factoring the numerator and canceling common factors: 

$$
f (x) = \frac {(x - 1) (x + 1)}{x - 1} = x + 1 \quad \text { for } \quad x \neq 1.
$$

The graph of f is the line $y = x + 1$ with the point $(1, 2)$ removed. This removed point is shown as a “hole” in Figure 2.7. Even though $f(1)$ is not defined, it is clear that we can make the value of $f(x)$ as close as we want to 2 by choosing x close enough to 1 (Table 2.2). 

We will illustrate some other types of behavior near a point in Example 3. 

### An Informal Description of the Limit of a Function

We now give an informal definition of the limit of a function f at an interior point of the domain of f. Suppose that $f(x)$ is defined on an open interval about c, except possibly at c 


TABLE 2.2 As x gets closer to 1, $f(x)$ gets closer to 2.


<table><tr><td>x</td><td><eq>f(x) = \frac{x^{2} - 1}{x - 1}</eq></td></tr><tr><td>0.9</td><td>1.9</td></tr><tr><td>1.1</td><td>2.1</td></tr><tr><td>0.99</td><td>1.99</td></tr><tr><td>1.01</td><td>2.01</td></tr><tr><td>0.999</td><td>1.999</td></tr><tr><td>1.001</td><td>2.001</td></tr><tr><td>0.999999</td><td>1.999999</td></tr><tr><td>1.000001</td><td>2.000001</td></tr></table>

![教材插图](/books/thomas-calculus/assets/884153df6d9a35c7026cd5e4d4d11dbe052af32d137d234324fcbc69bebb066a.jpg)



(b) Constant function


FIGURE 2.9 The functions in Example 3 have limits at all points c. 

![教材插图](/books/thomas-calculus/assets/e48f1aff5653d879f0f510a1c57a1ed7d7cb6ab15b61abdd43dc12cdf326700e.jpg)



(a) Identity function


itself. If $f(x)$ is arbitrarily close to the number L (that is, as close to L as we like) for all x sufficiently close to c, other than c itself, then we say that f approaches the limit L as x approaches c, and write 

$$
\lim _ {x \to c} f (x) = L.
$$

This is read “the limit of $f(x)$ as x approaches c is L.” In Example 1 we would say that $f(x)$ approaches the limit 2 as x approaches 1, and write 

$$
\lim _ {x \to 1} f (x) = 2, \quad \text { or } \quad \lim _ {x \to 1} \frac {x ^ {2} - 1}{x - 1} = 2.
$$

Our definition here is informal, because phrases like arbitrarily close and sufficiently close are imprecise; their meaning depends on the context. (To a machinist manufacturing a piston, close may mean within a few hundredths of a millimeter. To an astronomer studying distant galaxies, close may mean within a few thousand light-years.) Nevertheless, the definition is clear enough to enable us to recognize and evaluate limits of many specific functions. We will need the precise definition given in Section 2.3 when we set out to prove theorems about limits or study complicated functions. Here are several more examples exploring the idea of limits. 

Essentially, the definition says that the values of $f(x)$ are close to the number L whenever x is close to c. The value of the function at c itself is not considered. 

**EXAMPLE 2** The limit of a function does not depend on how the function is defined at the point being approached. It does not even matter whether the function is defined at that point. Consider the three functions in Figure 2.8. The function f has limit 2 as $x \rightarrow 1$ even though f is not defined at x = 1. The function g has limit 2 as $x \rightarrow 1$ even though $2 \neq g(1)$ . The function h is the only one of the three functions in Figure 2.8 whose limit as $x \rightarrow 1$ equals its value at x = 1. For h, we have $\lim_{x \to 1} h(x) = h(1)$ . This equality of limit and function value has an important meaning. As illustrated by the three examples in Figure 2.8, equality of limit and function value captures the notion of “continuity.” We study this in detail in Section 2.6. 

![教材插图](/books/thomas-calculus/assets/582b779c3082cf3c17aa9755a16bd4465fe4edec7f68f431b4bc9db2d65c53eb.jpg)


$$
f (x) = \frac {x ^ {2} - 1}{x - 1}
$$

![教材插图](/books/thomas-calculus/assets/bd73db387573e330ae26a091e1a5820562020c89e2a9f933e01e9206f7f65120.jpg)


![教材插图](/books/thomas-calculus/assets/cae3cb4cc4da4be4429b500001e09347d9ddbb30514abeaf6a646246243b9b2d.jpg)


$$
g (x) = \left\{ \begin{array}{l l} \frac {x ^ {2} - 1}{x - 1}, & x \neq 1 \\ 1, & x = 1 \end{array} \right.
$$

(c) $h(x)=x+1$ 

FIGURE 2.8 The limits of $f(x)$ , $g(x)$ , and $h(x)$ all equal 2 as x approaches 1. However, only $h(x)$ has the same function value as its limit at x = 1 (Example 2). 

The process of finding a limit can often be broken up into a series of steps involving limits of basic functions, which are combined using a sequence of simple operations that we will develop. We start with two basic functions. 

**EXAMPLE 3** We find the limits of the identity function and of a constant function as x approaches x = c. 

(a) If $f$ is the identity function $f(x) = x$ , then for any value of $c$ (Figure 2.9a), 

$$
\lim _ {x \to c} f (x) = \lim _ {x \to c} x = c.
$$


(a) Unit step function $U(x)$


(b) If $f$ is the constant function $f(x) = k$ (function with the constant value $k$ ), then for any value of $c$ (Figure 2.9b), 

$$
\lim _ {x \to c} f (x) = \lim _ {x \to c} k = k.
$$

For instances of each of these rules we have 

$$
\lim _ {x \to 3} x = 3
$$

Limit of identity function at $x = 3$ 

and 

$$
\lim _ {x \to - 7} 4 = \lim _ {x \to 2} 4 = 4. \quad \begin{array}{l} \text { Limit   of   constant   function } \\ f (x) = 4 \text {   at   } x = - 7 \text {   or   at   } x = 2 \end{array}
$$

We prove these rules in Example 3 in Section 2.3. 

A function may not have a limit at a particular point. Some ways that limits can fail to exist are illustrated in Figure 2.10 and described in the next example. 

![教材插图](/books/thomas-calculus/assets/5ba49f05744a26f053499d3fdd1be7d74c5b9fe3171844fe2b2d23841aeca388.jpg)


![教材插图](/books/thomas-calculus/assets/75b774b85ca5cc89ae5d33478ea645a852854d5fe31ff867b823f6466098659f.jpg)



(b) $g(x)$


![教材插图](/books/thomas-calculus/assets/23c00ff597645650eb8d6658a23084dedbb81aa776f30a8d4867b8bb12213a6b.jpg)



(c) $f(x)$



FIGURE 2.10 None of these functions has a limit as x approaches 0 (Example 4).


**EXAMPLE 4** Discuss the behavior of the following functions, explaining why they have no limit as $x \rightarrow 0$ . 

(a) 

$$
U (x) = \left\{ \begin{array}{l l} 0, & x <   0 \\ 1, & x \geq 0 \end{array} \right.\tag{b}
$$

$$
g (x) = \left\{ \begin{array}{l l} \frac {1}{x ^ {2}}, & x \neq 0 \\ 0, & x = 0 \end{array} \right.\tag{c}
$$

$$
f (x) = \left\{ \begin{array}{l l} 0, & x \leq 0 \\ \sin \frac {1}{x}, & x > 0 \end{array} \right.
$$

**Solution**

(a) This function jumps: The unit step function $U(x)$ has no limit as $x \to 0$ because its values jump at $x = 0$ . For negative values of $x$ arbitrarily close to zero, $U(x) = 0$ . For positive values of $x$ arbitrarily close to zero, $U(x) = 1$ . There is no single value $L$ approached by $U(x)$ as $x \to 0$ (Figure 2.10a). 

(b) This function grows too “large” to have a limit: $g(x)$ has no limit as $x \rightarrow 0$ because the values of g grow arbitrarily large as $x \rightarrow 0$ and therefore do not stay close to any fixed real number (Figure 2.10b). We say that the function g is not bounded. 

<table><tr><td colspan="2">THEOREM 1—Limit Laws</td></tr><tr><td colspan="2">If L, M, c, and k are real numbers and</td></tr><tr><td colspan="2"><eq>\lim_{x \to c} f(x) = L</eq> and <eq>\lim_{x \to c} g(x) = M</eq>, then</td></tr><tr><td>1. Sum Rule:</td><td><eq>\lim_{x \to c} (f(x) + g(x)) = L + M</eq></td></tr><tr><td>2. Difference Rule:</td><td><eq>\lim_{x \to c} (f(x) - g(x)) = L - M</eq></td></tr><tr><td>3. Constant Multiple Rule:</td><td><eq>\lim_{x \to c} (k \cdot f(x)) = k \cdot L</eq></td></tr><tr><td>4. Product Rule:</td><td><eq>\lim_{x \to c} (f(x) \cdot g(x)) = L \cdot M</eq></td></tr><tr><td>5. Quotient Rule:</td><td><eq>\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}, M \neq 0</eq></td></tr><tr><td>6. Power Rule:</td><td><eq>\lim_{x \to c} [f(x)]^n = L^n, n</eq> a positive integer</td></tr><tr><td>7. Root Rule:</td><td><eq>\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{L} = L^{1/n}, n</eq> a positive integer(If n is even, we assume that <eq>f(x) \geq 0</eq> for x in an interval containing c.)</td></tr></table>

(c) This function oscillates too much to have a limit: $f(x)$ has no limit as $x \to 0$ because the function's values oscillate between $+1$ and $-1$ in every open interval containing 0. The values do not stay close to any single number as $x \to 0$ (Figure 2.10c). 

A function that oscillates may or may not have a limit. In Example 11 we will see a function that oscillates wildly, but nevertheless does have a limit. The problem with the function f discussed in Example 4 is not that it oscillates, but that it oscillates too much for a limit to exist. 

### The Limit Laws

A few basic rules allow us to break down complicated functions into simple ones when calculating limits. By using these laws, we can greatly simplify many limit computations. 

The Sum Rule says that the limit of a sum is the sum of the limits. Similarly, the next rules say that the limit of a difference is the difference of the limits; the limit of a constant times a function is the constant times the limit of the function; the limit of a product is the product of the limits; the limit of a quotient is the quotient of the limits (provided that the limit of the denominator is not 0); the limit of a positive integer power (or root) of a function is the integer power (or root) of the limit (provided that the root of the limit is a real number). 

There are simple intuitive arguments for why the properties in Theorem 1 are true (although these do not constitute proofs). If x is sufficiently close to c, then $f(x)$ is close to L and $g(x)$ is close to M, from our informal definition of a limit. It is then reasonable that $f(x) + g(x)$ is close to $L + M$ ; $f(x) - g(x)$ is close to L - M; $kf(x)$ is close to kL; $f(x)g(x)$ is close to LM; and $f(x)/g(x)$ is close to L/M if M is not zero. We prove the Sum Rule in Section 2.3, based on a rigorous definition of the limit. Rules 2–5 are proved in Appendix A.6. Rule 6 is obtained by applying Rule 4 repeatedly. Rule 7 is proved in more advanced texts. The Sum, Difference, and Product Rules can be extended to any number of functions, not just two. 

**EXAMPLE 5** Use the observations $\lim_{x\to c} k = k$ and $\lim_{x\to c} x = c$ (Example 3) and the limit laws in Theorem 1 to find the following limits. 

(a) $\lim_{x\to c}(x^3 +4x^2 -3)$ 

(b) $\lim_{x\to c}\frac{x^{4}+x^{2}-1}{x^{2}+5}$ 

(c) $\lim_{x\to-2}\sqrt{4x^{2}+3}$ 

**Solution** 

$$
\begin{array}{r l} \text {(a)} \lim _ {x \to c} (x ^ {3} + 4 x ^ {2} - 3) & = \lim _ {x \to c} x ^ {3} + \lim _ {x \to c} 4 x ^ {2} - \lim _ {x \to c} 3 \\ & = c ^ {3} + 4 c ^ {2} - 3 \end{array} \quad \begin{array}{l} \text { Sum   and   Difference   Rules } \\ \text { Power   and   Multiple   Rules   and   limit } \\ \text { of   a   constant   function } \end{array}
$$

$$
\begin{array}{l l}\text {(b)} \lim _ {x \rightarrow c} \frac {x ^ {4} + x ^ {2} - 1}{x ^ {2} + 5} = \frac {\lim _ {x \rightarrow c} (x ^ {4} + x ^ {2} - 1)}{\lim _ {x \rightarrow c} (x ^ {2} + 5)}&\text {Quotient Rule: Note that}\\= \frac {\lim _ {x \rightarrow c} x ^ {4} + \lim _ {x \rightarrow c} x ^ {2} - \lim _ {x \rightarrow c} 1}{\lim _ {x \rightarrow c} x ^ {2} + \lim _ {x \rightarrow c} 5}&\text {Sum and Difference Rules}\\= \frac {c ^ {4} + c ^ {2} - 1}{c ^ {2} + 5}&\text {Power Rule and limit of a constant function}\end{array}
$$

$$
\begin{array}{l l}\text {(c)} \lim _ {x \rightarrow - 2} \sqrt {4 x ^ {2} + 3} = \sqrt {\lim _ {x \rightarrow - 2} (4 x ^ {2} + 3)}&\text {Root Rule with n = 2(4x^{2} + 3\geq0)}\\= \sqrt {\lim _ {x \rightarrow - 2} 4 x ^ {2} + \lim _ {x \rightarrow - 2} 3}&\text {Difference Rule}\\= \sqrt {4 (- 2) ^ {2} + 3}&\text {Power and Multiple Rules and limit of a constant function}\\= \sqrt {1 6 + 3}\\= \sqrt {1 9}\end{array}
$$

### Evaluating Limits of Polynomials and Rational Functions

Theorem 1 simplifies the task of calculating limits of polynomials and rational functions. To evaluate the limit of a polynomial function as x approaches c, just substitute c for x in the formula for the function. To evaluate the limit of a rational function as x approaches a point c at which the denominator is not zero, substitute c for x in the formula for the function. (See Examples 5a and 5b.) We state these results formally as theorems. 

$$
\begin{array}{c} \text {THEOREM 2 - Limits of Polynomials} \\ \text {If P(x) = a_{n} x^{n} + a_{n - 1} x^{n - 1} +\cdots + a_{0} , then} \\ \lim _ {x \to c} P (x) = P (c) = a _ {n} c ^ {n} + a _ {n - 1} c ^ {n - 1} + \dots + a _ {0}. \end{array}
$$

THEOREM 3—Limits of Rational Functions 

If $P(x)$ and $Q(x)$ are polynomials and $Q(c) \neq 0$ , then 

$$
\lim _ {x \to c} \frac {P (x)}{Q (x)} = \frac {P (c)}{Q (c)}.
$$

**EXAMPLE 6** The following calculation illustrates Theorems 2 and 3:

$$
\lim _ {x \rightarrow - 1} \frac {x ^ {3} + 4 x ^ {2} - 3}{x ^ {2} + 5} = \frac {(- 1) ^ {3} + 4 (- 1) ^ {2} - 3}{(- 1) ^ {2} + 5} = \frac {0}{6} = 0
$$

Since the denominator of this rational expression does not equal 0 when we substitute -1 for x, we can just compute the value of the expression at x = -1 to evaluate the limit. 

### Eliminating Common Factors from Zero Denominators

Theorem 3 applies only if the denominator of the rational function is not zero at the limit point c. If the denominator is zero, canceling common factors in the numerator and 


(b)


### Identifying Common Factors

If $Q(x)$ is a polynomial and $Q(c) = 0$ , then $(x - c)$ is a factor of $Q(x)$ . Thus, if the numerator and denominator of a rational function of x are both zero at x = c, they have $(x - c)$ as a common factor. 

![教材插图](/books/thomas-calculus/assets/65611445920e781eb010c7f14fa841832dd5100985150376a1a7d71a2143e564.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/452c16bb22c9e4b60fc58ffb716e395b46b0a70186e3f86c7cd78cd473a17ae5.jpg)



FIGURE 2.11 The graph of


$f(x) = (x^{2} + x - 2) / (x^{2} - x)$ in part (a) is the same as the graph of $g(x) = (x + 2) / x$ in part (b) except at $x = 1$ , where $f$ is undefined. The functions have the same limit as $x \to 1$ (Example 7). 

denominator may reduce the fraction to one whose denominator is no longer zero at c. If this happens, we can find the limit by substitution in the simplified fraction. 

**EXAMPLE 7** Evaluate 

$$
\lim _ {x \to 1} \frac {x ^ {2} + x - 2}{x ^ {2} - x}.
$$

**Solution** We cannot substitute x = 1 because it makes the denominator zero. We test the numerator to see if it, too, is zero at x = 1. It is, so it has a factor of $(x - 1)$ in common with the denominator. Canceling this common factor gives a simpler fraction with the same values as the original for $x \neq 1$ : 

$$
\frac {x ^ {2} + x - 2}{x ^ {2} - x} = \frac {(x - 1) (x + 2)}{x (x - 1)} = \frac {x + 2}{x}, \text {   if   } x \neq 1.
$$

Using the simpler fraction, we find the limit of these values as $x \rightarrow 1$ by evaluating the function at x = 1, as in Theorem 3: 

$$
\lim _ {x \rightarrow 1} \frac {x ^ {2} + x - 2}{x ^ {2} - x} = \lim _ {x \rightarrow 1} \frac {x + 2}{x} = \frac {1 + 2}{1} = 3.
$$

See Figure 2.11. 

### Using Calculators and Computers to Estimate Limits

We can try using a calculator or computer to guess a limit numerically. However, calculators and computers can sometimes give false values and misleading evidence about limits. Usually the problem is associated with rounding errors, as we now illustrate. 

**EXAMPLE 8** Estimate the value of $\lim_{x\to0}\frac{\sqrt{x^{2}+100}-10}{x^{2}}$ . 

**Solution** Table 2.3 lists values of the function obtained on a calculator for several points approaching x = 0. As x approaches 0 through the points ±1, ±0.5, ±0.1, and ±0.01, the function seems to approach the number 0.05. 

As we take even smaller values of $x$ , $\pm 0.0005$ , $\pm 0.0001$ , $\pm 0.00001$ , and $\pm 0.000001$ , the function appears to approach the number 0. 

Is the answer 0.05 or 0, or some other value? We resolve this question in the next example. 

Using a computer or calculator may give ambiguous results, as in Example 8. A computer cannot always keep track of enough digits to avoid rounding errors in computing the values of $f(x)$ when x is very small. We cannot substitute x = 0 in the problem, and the numerator and denominator have no obvious common factors (as they did in Example 7). Sometimes, however, we can create a common factor by using algebra. 


TABLE 2.3 Computed values of $f(x) = \frac{\sqrt{x^{2} + 100} - 10}{x^{2}}$ near x = 0


<table><tr><td>x</td><td>f(x)</td></tr><tr><td>±1</td><td>0.049876</td></tr><tr><td>±0.5</td><td>0.049969</td></tr><tr><td>±0.1</td><td>0.049999</td></tr><tr><td>±0.01</td><td>0.050000</td></tr><tr><td>±0.0005</td><td>0.050000</td></tr><tr><td>±0.0001</td><td>0.000000</td></tr><tr><td>±0.00001</td><td>0.000000</td></tr><tr><td>±0.000001</td><td>0.000000</td></tr></table>

**EXAMPLE 9** Evaluate 

$$
\lim _ {x \to 0} \frac {\sqrt {x ^ {2} + 1 0 0} - 1 0}{x ^ {2}}.
$$

**Solution** This is the limit we considered in Example 8. We can create a common factor by multiplying both numerator and denominator by the conjugate radical expression $\sqrt{x^{2} + 100} + 10$ (obtained by changing the sign after the square root). The preliminary algebra rationalizes the numerator: 

$$
\begin{array}{l l} \frac {\sqrt {x ^ {2} + 1 0 0} - 1 0}{x ^ {2}} = \frac {\sqrt {x ^ {2} + 1 0 0} - 1 0}{x ^ {2}} \cdot \frac {\sqrt {x ^ {2} + 1 0 0} + 1 0}{\sqrt {x ^ {2} + 1 0 0} + 1 0} & \text {   Multiply   and   divide   by   } \\ = \frac {x ^ {2} + 1 0 0 - 1 0 0}{x ^ {2} (\sqrt {x ^ {2} + 1 0 0} + 1 0)} & \text {   Simplify.   } \\ = \frac {x ^ {2}}{x ^ {2} (\sqrt {x ^ {2} + 1 0 0} + 1 0)} & \text {   Common   factor   } x ^ {2} \\ = \frac {1}{\sqrt {x ^ {2} + 1 0 0} + 1 0}. & \text {   Cancel   } x ^ {2} \text {   for   } x \neq 0. \end{array}
$$

Therefore, 

$$
\begin{array}{l l} \lim _ {x \to 0} \frac {\sqrt {x ^ {2} + 1 0 0} - 1 0}{x ^ {2}} = \lim _ {x \to 0} \frac {1}{\sqrt {x ^ {2} + 1 0 0} + 1 0} \\ = \frac {1}{\sqrt {0 ^ {2} + 1 0 0} + 1 0} & \text { Use   limit   laws:   Sum   Rule,   Power } \\ = \frac {1}{2 0} = 0. 0 5. & \text { (denominator   not   0). } \end{array}
$$

This calculation provides the correct answer, resolving the ambiguous computer results in Example 8. 

![教材插图](/books/thomas-calculus/assets/04e3820271bc31afe1d0f74a0b60571ccb5e9bc623bd144d8dfe6dca7ec42692.jpg)


We cannot always manipulate the terms in an expression to find the limit of a quotient where the denominator becomes zero. In some cases the limit might then be found with geometric arguments (see the proof of Theorem 6 in Section 2.4), or through methods of calculus (developed in Section 4.5). The next theorem shows how to evaluate difficult limits by comparing them with functions having known limits. 


FIGURE 2.12 The graph of f is sandwiched between the graphs of g and h.


### The Sandwich Theorem

The following theorem enables us to calculate a variety of limits. It is called the Sandwich Theorem because it refers to a function f whose values are sandwiched between the values of two other functions g and h that have the same limit L at a point c. Being trapped between the values of two functions that approach L, the values of f must also approach L (Figure 2.12). A proof is given in Appendix A.6. 

THEOREM 4—The Sandwich Theorem 

Suppose that $g(x) \leq f(x) \leq h(x)$ for all x in some open interval containing c, except possibly at x = c itself. Suppose also that 

$$
\lim _ {x \to c} g (x) = \lim _ {x \to c} h (x) = L.
$$

Then $\lim_{x\to c}f(x)=L.$ 

![教材插图](/books/thomas-calculus/assets/47c2f404de3966147fac24fe010c9815edcb1f3da6328971e6bcd8cfd2efcee8.jpg)



FIGURE 2.13 Any function $u(x)$ whose graph lies in the region between $y = 1 + (x^2 / 2)$ and $y = 1 - (x^2 / 4)$ has limit 1 as $x \to 0$ (Example 10).


![教材插图](/books/thomas-calculus/assets/b500a2c3f9dfbabec94081ca0d109a9b445eb670e0c7f506f75d4d4815cc9a81.jpg)



FIGURE 2.14 The graph of the function g (Example 11). It is not defined at x = 0. Even though the function oscillates, it has a limit as $x \rightarrow 0$ . The value of $g(x)$ always lies between $x^{2}$ and $-x^{2}$ .


![教材插图](/books/thomas-calculus/assets/b9942527693c6ac382be9e2cac9849c048781c6b671374971cd07127dbbe6ff2.jpg)


![教材插图](/books/thomas-calculus/assets/7d0796479dd04e968db6e2f6dd891c23fc300ea245d99572f844d08cae2029c9.jpg)



FIGURE 2.15 The Sandwich Theorem confirms the limits in Example 12.


The Sandwich Theorem is also called the Squeeze Theorem or the Pinching Theorem. 

**EXAMPLE 10** Given a function u that satisfies 

$$
1 - \frac {x ^ {2}}{4} \leq u (x) \leq 1 + \frac {x ^ {2}}{2} \quad \text {   for   all   } x \neq 0,
$$

find $\lim_{x\to 0}u(x)$ , no matter how complicated $u$ is. 

**Solution** Since 

$$
\lim _ {x \to 0} (1 - (x ^ {2} / 4)) = 1 \quad \text { and } \quad \lim _ {x \to 0} (1 + (x ^ {2} / 2)) = 1,
$$

the Sandwich Theorem implies that $\lim_{x\to 0}u(x) = 1$ (Figure 2.13). 

We use the Sandwich Theorem to show that it is possible for a function that oscillates to have a limit. 

**EXAMPLE 11** How does the function $g(x) = x^2 \sin(1/x^2)$ behave near $x = 0$ ?

**Solution** The formula defines $g(x)$ for all real numbers x except x = 0. The graph of g is shown in Figure 2.14. We can see that the graph oscillates, but we can use the Sandwich Theorem to find the limit of $g(x)$ as x approaches 0. If $x \neq 0$ , then $1/x^{2}$ is a positive real number. Since the range of the sine function is the interval $[-1, 1]$ , it follows that $-1 \leq \sin(1/x^{2}) \leq 1$ for all $x \neq 0$ . Even though we may not know the exact value of $g(x) = x^{2} \sin(1/x^{2})$ , we do know that it lies between $-x^{2}$ and $x^{2}$ . Since 

$$
\lim _ {x \to 0} x ^ {2} = 0 \quad \text { and } \quad \lim _ {x \to 0} (- x ^ {2}) = 0,
$$

the Sandwich Theorem implies that $\lim_{x\to 0}g(x) = 0$ 

**EXAMPLE 12** The Sandwich Theorem helps us establish several important limit rules: 

(a) $\lim_{\theta\to0}\sin\theta=0$ 

(b) $\lim_{\theta\to0}\cos\theta=1$ 

(c) For any function $f, \lim_{x \to c} |f(x)| = 0$ implies $\lim_{x \to c} f(x) = 0$ . 

**Solution** 

(a) In Section 1.3 we established that $-|\theta| \leq \sin \theta \leq |\theta|$ for all $\theta$ (see Figure 2.15a). Since $\lim_{\theta \to 0} (-|\theta|) = \lim_{\theta \to 0} |\theta| = 0$ , we have 

$$
\lim _ {\theta \to 0} \sin \theta = 0.
$$

(b) From Section 1.3, $0 \leq 1 - \cos \theta \leq |\theta|$ for all $\theta$ (see Figure 2.15b). Since $\lim_{\theta \to 0} |\theta| = 0$ and $\lim_{\theta \to 0} 0 = 0$ , we have $\lim_{\theta \to 0} (1 - \cos \theta) = 0$ so 

$$
\lim _ {\theta \rightarrow 0} \cos \theta = \lim _ {\theta \rightarrow 0} (1 - (1 - \cos \theta)) = 1 - \lim _ {\theta \rightarrow 0} (1 - \cos \theta) = 1 - 0 = 1.
$$

(c) Since $-|f(x)| \leq f(x) \leq |f(x)|$ and $-|f(x)|$ and $|f(x)|$ have limit 0 as $x \to c$ , it follows that $\lim_{x \to c} f(x) = 0$ . 

Example 12 shows that the sine and cosine functions are equal to their limits at $\theta = 0$ . We have not yet established that for any $c$ , $\lim_{\theta \to c} \sin \theta = \sin c$ , and $\lim_{\theta \to c} \cos \theta = \cos c$ . These limit formulas do hold, as will be shown in Section 2.6. 

### Exercises 2.2


#### Limits from Graphs

1. For the function $g(x)$ graphed here, find the following limits or explain why they do not exist. 

a. $\lim_{x\to 1}g(x)$ b. $\lim_{x\to 2}g(x)$ c. $\lim_{x\to 3}g(x)$ d. $\lim_{x\to 2.5}g(x)$ 

![教材插图](/books/thomas-calculus/assets/22d4497240b56d24f54943cfbc9a690d3d4328f21111d96c43e18dbfaa4e03fb.jpg)


2. For the function $f(t)$ graphed here, find the following limits or explain why they do not exist. 

a. $\lim_{t\to-2}f(t)$ b. $\lim_{t\to-1}f(t)$ c. $\lim_{t\to0}f(t)$ d. $\lim_{t\to-0.5}f(t)$ 

![教材插图](/books/thomas-calculus/assets/d0c7edd057700079575ada39eaffeb269d4c59c9622ba87f9d9c5ba282ad97da.jpg)


3. Which of the following statements about the function $y = f(x)$ graphed here are true, and which are false? 

a. $\lim_{x\to0}f(x)$ exists. 

b. $\lim_{x\to0}f(x)=0$ 

c. $\lim_{x\to0}f(x)=1$ 

d. $\lim_{x\to1}f(x)=1$ 

e. $\lim_{x\to1}f(x)=0$ 

f. $\lim_{x\to c}f(x)$ exists at every point c in $(-1,1)$ . 

g. $\lim_{x\to1}f(x)$ does not exist. 

h. $f(0) = 0$ 

i. $f(0) = 1$ 

j. $f(1) = 0$ 

k. $f(1) = -1$ 

![教材插图](/books/thomas-calculus/assets/510bd84938d844a7e97c47a5469a2b1705706107d5442ceb8f4945a59dd9a4e9.jpg)


4. Which of the following statements about the function $y = f(x)$ graphed here are true, and which are false? 

a. $\lim_{x\to2}f(x)$ does not exist. 

b. $\lim_{x\to 2}f(x) = 2$ 

c. $\lim_{x\to1}f(x)$ does not exist. 

d. $\lim_{x\to c}f(x)$ exists at every point $c$ in $(-1,1)$ . 

e. $\lim_{x\to c}f(x)$ exists at every point c in (1, 3). 

f. $f(1) = 0$ 

g. $f(1) = -2$ 

h. $f(2) = 0$ 

i. $f(2) = 1$ 

![教材插图](/books/thomas-calculus/assets/7c43b4e5eb499dec65ffcef448a20183313e8d007f3433ce47d2b706ab98f3f8.jpg)


Existence of Limits 

In Exercises 5 and 6, explain why the limits do not exist. 

5. $\lim_{x\to 0}\frac{x}{|x|}$

6. $\lim_{x\to 1}\frac{1}{x - 1}$

7. Suppose that a function $f(x)$ is defined for all real values of $x$ except $x = c$ . Can anything be said about the existence of $\lim_{x\to c}f(x)$ ? Give reasons for your answer. 

8. Suppose that a function $f(x)$ is defined for all $x$ in $[-1, 1]$ . Can anything be said about the existence of $\lim_{x \to 0} f(x)$ ? Give reasons for your answer. 

9. If $\lim_{x\to 1}f(x) = 5$ , must $f$ be defined at $x = 1$ ? If it is, must $f(1) = 5$ ? Can we conclude anything about the values of $f$ at $x = 1$ ? Explain. 

10. If $f(1) = 5$ , must $\lim_{x \to 1} f(x)$ exist? If it does, then must $\lim_{x \to 1} f(x) = 5$ ? Can we conclude anything about $\lim_{x \to 1} f(x)$ ? Explain. 

#### Calculating Limits

Find the limits in Exercises 11–22. 

11. $\lim_{x\to -3}(x^2 -13)$ 

12. $\lim_{x\to 2}(-x^2 +5x - 2)$ 

13. $\lim_{t\to 6}8(t - 5)(t - 7)$ 

14. $\lim_{x\to-2}(x^{3}-2x^{2}+4x+8)$ 

15. $\lim_{x\to 2}\frac{2x + 5}{11 - x^3}$ 

16. $\lim_{s\to 2 / 3}(8 - 3s)(2s - 1)$ 

17. $\lim_{x\to -1 / 2}4x(3x + 4)^{2}$ 

18. $\lim_{y\to2}\frac{y+2}{y^{2}+5y+6}$ 

19. $\lim_{y\to -3}(5 - y)^{4 / 3}$ 

20. $\lim_{z\to 4}\sqrt{z^2 - 10}$ 

21. $\lim_{h\to 0}\frac{3}{\sqrt{3h + 1} + 1}$ 

22. $\lim_{h\to 0}\frac{\sqrt{5h + 4} - 2}{h}$ 

Limits of quotients Find the limits in Exercises 23–42. 

23. $\lim_{x\to 5}\frac{x - 5}{x^2 - 25}$ 

24. $\lim_{x\to-3}\frac{x+3}{x^{2}+4x+3}$ 

25. $\lim_{x\to-5}\frac{x^{2}+3x-10}{x+5}$ 

26. $\lim_{x\to 2}\frac{x^2 - 7x + 10}{x - 2}$ 

27. $\lim_{t\to 1}\frac{t^2 + t - 2}{t^2 - 1}$ 

28. $\lim_{t\to -1}\frac{t^2 + 3t + 2}{t^2 - t - 2}$ 

29. $\lim_{t\to -2}\frac{-2x - 4}{x^3 + 2x^2}$ 

30. $\lim_{y\to 0}\frac{5y^3 + 8y^2}{3y^4 - 16y^2}$ 

31. $\lim_{x\to 1}\frac{x^{-1} - 1}{x - 1}$ 

32. $\lim_{x\to0}\frac{\frac{1}{x-1}+\frac{1}{x+1}}{x}$ 

33. $\lim_{u\to 1}\frac{u^4 - 1}{u^3 - 1}$ 

34. $\lim_{v\to 2}\frac{v^3 - 8}{v^4 - 16}$ 

35. $\lim_{x\to 9}\frac{\sqrt{x} - 3}{x - 9}$ 

36. $\lim_{x\to 4}\frac{4x - x^2}{2 - \sqrt{x}}$ 

37. $\lim_{x\to 1}\frac{x - 1}{\sqrt{x + 3} - 2}$ 

38. $\lim_{x\to-1}\frac{\sqrt{x^{2}+8}-3}{x+1}$ 

39. $\lim_{x\to 2}\frac{\sqrt{x^2 + 12} - 4}{x - 2}$ 

40. $\lim_{x\to -2}\frac{x + 2}{\sqrt{x^2 + 5} - 3}$ 

41. $\lim_{x\to -3}\frac{2 - \sqrt{x^2 - 5}}{x + 3}$ 

42. $\lim_{x\to 4}\frac{4 - x}{5 - \sqrt{x^2 + 9}}$ 

Limits with trigonometric functions Find the limits in Exercises 43–50. 

43. $\lim_{x\to 0}(2\sin x - 1)$ 

44. $\lim_{x\to 0}\sin^2 x$ 

45. $\lim_{x\to 0}\sec x$ 

46. $\lim_{x\to 0}\tan x$ 

47. $\lim_{x\to0}\frac{1+x+\sin x}{3\cos x}$ 

48. $\lim_{x\to 0}(x^2 -1)(2 - \cos x)$ 

49. $\lim_{x\to -\pi}\sqrt{x + 4}\cos (x + \pi)$ 

50. $\lim_{x\to 0}\sqrt{7 + \sec^2x}$ 

Using Limit Rules 

51. Suppose $\lim_{x\to 0}f(x) = 1$ and $\lim_{x\to 0}g(x) = -5$ . Name the rules in Theorem 1 that are used to accomplish steps (a), (b), and (c) of the following calculation. 

$$
\lim _ {x \rightarrow 0} \frac {2 f (x) - g (x)}{(f (x) + 7) ^ {2}} = \frac {\lim _ {x \rightarrow 0} (2 f (x) - g (x))}{\lim _ {x \rightarrow 0} (f (x) + 7) ^ {2}}\tag{a}
$$

(We assume the denominator is nonzero.) $= \frac{\lim\limits_{x\to 0}2f(x) - \lim\limits_{x\to 0}g(x)}{\left(\lim\limits_{x\to 0}(f(x) + 7)\right)^{2}}$ $= \frac{2\lim\limits_{x\to 0}f(x) - \lim\limits_{x\to 0}g(x)}{\left(\lim\limits_{x\to 0}f(x) + \lim\limits_{x\to 0}7\right)^{2}}$ $= \frac{(2)(1) - (-5)}{(1 + 7)^{2}} = \frac{7}{64}$ 

(b) 

(c) 

52. Let $\lim_{x\to 1}h(x) = 5$ , $\lim_{x\to 1}p(x) = 1$ , and $\lim_{x\to 1}r(x) = 2$ . Name the rules in Theorem 1 that are used to accomplish steps (a), (b), and (c) of the following calculation. 

$$
\lim _ {x \rightarrow 1} \frac {\sqrt {5 h (x)}}{p (x) (4 - r (x))} = \frac {\lim _ {x \rightarrow 1} \sqrt {5 h (x)}}{\lim _ {x \rightarrow 1} (p (x) (4 - r (x)))}\tag{a}
$$

(We assume the denominator is nonzero.) $= \frac{\sqrt{\lim_{x\to 1}5h(x)}}{\left(\lim_{x\to 1}p(x)\right)\left(\lim_{x\to 1}(4 - r(x))\right)}$ $= \frac{\sqrt{5\lim_{x\to 1}h(x)}}{\left(\lim_{x\to 1}p(x)\right)\left(\lim_{x\to 1}4 - \lim_{x\to 1}r(x)\right)}$ $= \frac{\sqrt{(5)(5)}}{(1)(4 - 2)} = \frac{5}{2}$ 

(b) 

(c) 

53. Suppose $\lim_{x\to c}f(x) = 5$ and $\lim_{x\to c}g(x) = -2$ . Find a. $\lim_{x\to c}f(x)g(x)$ b. $\lim_{x\to c}2f(x)g(x)$ c. $\lim_{x\to c}(f(x) + 3g(x))$ d. $\lim_{x\to c}\frac{f(x)}{f(x) - g(x)}$ 

54. Suppose $\lim_{x\to 4}f(x) = 0$ and $\lim_{x\to 4}g(x) = -3$ . Find a. $\lim_{x\to 4}(g(x) + 3)$ b. $\lim_{x\to 4}xf(x)$ c. $\lim_{x\to 4}(g(x))^2$ d. $\lim_{x\to 4}\frac{g(x)}{f(x) - 1}$ 

55. Suppose $\lim_{x\to b}f(x) = 7$ and $\lim_{x\to b}g(x) = -3$ . Find a. $\lim_{x\to b}(f(x) + g(x))$ b. $\lim_{x\to b}f(x)\cdot g(x)$ c. $\lim_{x\to b}4g(x)$ d. $\lim_{x\to b}f(x) / g(x)$ 

56. Suppose that $\lim_{x\to -2}p(x) = 4,\lim_{x\to -2}r(x) = 0$ and $\lim_{x\to -2}s(x) = -3.$ Find a. $\lim_{x\to -2}\big(p(x) + r(x) + s(x)\big)$ b. $\lim_{x\to -2}\big(p(x)\cdot r(x)\cdot s(x)\big)$ c. $\lim_{x\to -2}\left(-4p(x) + 5r(x)\right) / s(x)$ 

#### Limits of Average Rates of Change

Because of their connection with secant lines, tangents, and instantaneous rates, limits of the form 

$$
\lim _ {h \to 0} \frac {f (x + h) - f (x)}{h}
$$

occur frequently in calculus. In Exercises 57–62, evaluate this limit for the given value of x and function f. 

57. $f(x) = x^{2}$ , $x = 1$ 

58. $f(x) = x^{2}$ , $x = -2$ 

59. $f(x) = 3x - 4, x = 2$ 

60. $f(x) = 1 / x, x = -2$ 

61. $f(x) = \sqrt{x}, x = 7$ 

62. $f(x) = \sqrt{3x + 1}, \quad x = 0$ 

Using the Sandwich Theorem 

63. If $\sqrt{5-2x^{2}}\leq f(x)\leq\sqrt{5-x^{2}}$ for $-1\leq x\leq1$ , find $\lim_{x\to0}f(x)$ . 

64. If $2 - x^2 \leq g(x) \leq 2\cos x$ for all $x$ , find $\lim_{x \to 0} g(x)$ . 

65. a. It can be shown that the inequalities 

$$
1 - \frac {x ^ {2}}{6} <   \frac {x \sin x}{2 - 2 \cos x} <   1
$$

hold for all values of x close to zero (except for x = 0). What, if anything, does this tell you about 

$$
\lim _ {x \rightarrow 0} \frac {x \sin x}{2 - 2 \cos x}?
$$

Give reasons for your answer. 

T b. Graph $y = 1 - (x^{2}/6)$ , $y = (x \sin x)/(2 - 2 \cos x)$ , and y = 1 together for $-2 \leq x \leq 2$ . Comment on the behavior of the graphs as $x \rightarrow 0$ . 

66. a. Suppose that the inequalities

$$
\frac {1}{2} - \frac {x ^ {2}}{2 4} <   \frac {1 - \cos x}{x ^ {2}} <   \frac {1}{2}
$$

hold for values of x close to zero, except for x = 0 itself. 

(They do, as you will see in Section 16.9.) What, if anything, does this tell you about 

$$
\lim _ {x \to 0} \frac {1 - \cos x}{x ^ {2}}?
$$

Give reasons for your answer. 

T b. Graph the equations $y = (1/2) - (x^{2}/24)$ , $y = (1 - \cos x)/x^{2}$ , and $y = 1/2$ together for $-2 \leq x \leq 2$ . Comment on the behavior of the graphs as $x \rightarrow 0$ . 

#### Estimating Limits

You will find a graphing calculator useful for Exercises 67–76. 

67. Let $f(x) = (x^2 - 9) / (x + 3)$ . 

a. Make a table of the values of $f$ at the points $x = -3.1, -3.01, -3.001$ , and so on as far as your calculator can go. Then estimate $\lim_{x \to -3} f(x)$ . What estimate do you arrive at if you evaluate $f$ at $x = -2.9, -2.99, -2.999, \ldots$ instead? 

b. Support your conclusions in part (a) by graphing f near c = -3 and using Zoom and Trace to estimate y-values on the graph as $x \rightarrow -3$ . 

c. Find $\lim_{x\to -3}f(x)$ algebraically, as in Example 7. 

68. Let $g(x) = (x^2 - 2) / (x - \sqrt{2})$ . 

a. Make a table of the values of $g$ at the points $x = 1.4, 1.41, 1.414$ , and so on through successive decimal approximations of $\sqrt{2}$ . Estimate $\lim_{x \to \sqrt{2}} g(x)$ . 

b. Support your conclusion in part (a) by graphing g near $c = \sqrt{2}$ and using Zoom and Trace to estimate y-values on the graph as $x \rightarrow \sqrt{2}$ . 

c. Find $\lim_{x\to \sqrt{2}}g(x)$ algebraically. 

69. Let $G(x) = (x + 6) / (x^2 + 4x - 12)$ . 

a. Make a table of the values of $G$ at $x = -5.9, -5.99, -5.999$ , and so on. Then estimate $\lim_{x \to -6} G(x)$ . What estimate do you arrive at if you evaluate $G$ at $x = -6.1, -6.01, -6.001, \ldots$ instead? 

b. Support your conclusions in part (a) by graphing $G$ and using Zoom and Trace to estimate $y$ -values on the graph as $x \to -6$ .  
c. Find $\lim_{x \to 0} G(x)$ algebraically. 

70. Let $h(x) = (x^{2} - 2x - 3)/(x^{2} - 4x + 3)$ . 

a. Make a table of the values of h at x = 2.9, 2.99, 2.999, and so on. Then estimate $\lim_{x\to3}h(x)$ . What estimate do you arrive at if you evaluate h at x = 3.1, 3.01, 3.001, ... instead? 

b. Support your conclusions in part (a) by graphing h near c = 3 and using Zoom and Trace to estimate y-values on the graph as $x \rightarrow 3$ . 

c. Find $\lim_{x\to 3}h(x)$ algebraically. 

71. Let $f(x) = (x^2 - 1) / (|x| - 1)$ . 

a. Make tables of the values of $f$ at values of $x$ that approach $c = -1$ from above and below. Then estimate $\lim_{x \to -1} f(x)$ . 

b. Support your conclusion in part (a) by graphing f near c = -1 and using Zoom and Trace to estimate y-values on the graph as $x \rightarrow -1$ . 

c. Find $\lim_{x\to -1}f(x)$ algebraically. 

72. Let $F(x) = (x^{2} + 3x + 2) / (2 - |x|)$ . 

a. Make tables of values of $F$ at values of $x$ that approach $c = -2$ from above and below. Then estimate $\lim_{x \to 2^+} F(x)$ . 

b. Support your conclusion in part (a) by graphing $F$ near $c = -2$ and using Zoom and Trace to estimate $y$ -values on the graph as $x \to -2$ . 

c. Find $\lim_{x\to -2}F(x)$ algebraically. 

73. Let $g(\theta) = (\sin \theta) / \theta$ . 

a. Make a table of the values of $g$ at values of $\theta$ that approach $\theta_0 = 0$ from above and below. Then estimate $\lim_{\theta \to 0} g(\theta)$ . 

b. Support your conclusion in part (a) by graphing g near $\theta_{0} = 0$ . 

74. Let $G(t) = (1 - \cos t) / t^2$ . 

a. Make tables of values of $G$ at values of $t$ that approach $t_0 = 0$ from above and below. Then estimate $\lim_{t \to 0} G(t)$ . 

b. Support your conclusion in part (a) by graphing $G$ near $t_0 = 0$ . 

75. Let $f(x) = x^{1 / (1 - x)}$ . 

a. Make tables of values of $f$ at values of $x$ that approach $c = 1$ from above and below. Does $f$ appear to have a limit as $x \to 1$ ? If so, what is it? If not, why not? 

b. Support your conclusions in part (a) by graphing f near c = 1. 

76. Let $f(x) = (3^x - 1) / x$ . 

a. Make tables of values of $f$ at values of $x$ that approach $c = 0$ from above and below. Does $f$ appear to have a limit as $x \to 0$ ? If so, what is it? If not, why not? 

b. Support your conclusions in part (a) by graphing $f$ near $c = 0$ . 

#### Theory and Examples

77. If $x^4 \leq f(x) \leq x^2$ for $x$ in $[-1, 1]$ and $x^2 \leq f(x) \leq x^4$ for $x < -1$ and $x > 1$ , at what points $c$ do you automatically know $\lim_{x \to c} f(x)$ ? What can you say about the value of the limit at these points? 

78. Suppose that $g(x) \leq f(x) \leq h(x)$ for all $x \neq 2$ and suppose that 

$$
\lim _ {x \to 2} g (x) = \lim _ {x \to 2} h (x) = - 5.
$$

Can we conclude anything about the values of $f, g$ , and $h$ at $x = 2$ ? Could $f(2) = 0$ ? Could $\lim_{x \to 2} f(x) = 0$ ? Give reasons for your answers. 

79. If $\lim_{x\to4}\frac{f(x)-5}{x-2}=1$ , find $\lim_{x\to4}f(x)$ . 

80. If $\lim_{x\to -2}\frac{f(x)}{x^2} = 1$ find a. $\lim_{x\to -2}f(x)$ b. $\lim_{x\to -2}\frac{f(x)}{x}$ . 

81. a. If $\lim_{x\to 2}\frac{f(x) - 5}{x - 2} = 3$ , find $\lim_{x\to 2}f(x)$ 

b. If $\lim_{x\to2}\frac{f(x)-5}{x-2}=4$ , find $\lim_{x\to2}f(x)$ . 

82. If $\lim_{x\to 0}\frac{f(x)}{x^2} = 1$ , find 

a. $\lim_{x\to0}f(x)$ , 

b. $\lim_{x\to0}\frac{f(x)}{x}.$ 

T 83. a. Graph $g(x) = x \sin(1/x)$ to estimate $\lim_{x \to 0} g(x)$ , zooming in on the origin as necessary. 

b. Confirm your estimate in part (a) with a proof. 

T 84. a. Graph $h(x) = x^2 \cos(1/x^3)$ to estimate $\lim_{x \to 0} h(x)$ , zooming in on the origin as necessary. 

b. Confirm your estimate in part (a) with a proof. 

Graphical Estimates of Limits 

In Exercises 85–90, use a CAS to perform the following steps: 

a. Plot the function near the point c being approached. 

b. From your plot, guess the value of the limit. 

85. $\lim_{x\to 2}\frac{x^4 - 16}{x - 2}$ 

86. $\lim_{x\to -1}\frac{x^3 - x^2 - 5x - 3}{(x + 1)^2}$ 

87. $\lim_{x\to 0}\frac{\sqrt[3]{1 + x} - 1}{x}$ 

88. $\lim_{x\to 3}\frac{x^2 - 9}{\sqrt{x^2 + 7} - 4}$ 

89. $\lim_{x\to 0}\frac{1 - \cos{x}}{x\sin{x}}$ 

COMPUTER EXPLORATIONS 

90. $\lim_{x\to 0}\frac{2x^2}{3 - 3\cos{x}}$ 

## 2.3 The Precise Definition of a Limit

We now turn our attention to the precise definition of a limit. The early history of calculus saw controversy about the validity of the basic concepts underlying the theory. Apparent contradictions were argued over by both mathematicians and philosophers. These controversies were resolved by the precise definition, which allows us to replace vague phrases like “gets arbitrarily close to” in the informal definition with specific conditions that can be applied to any particular example. With a rigorous definition, we can avoid misunderstandings, prove the limit properties given in the preceding section, and establish many important limits. 

To show that the limit of $f(x)$ as $x \rightarrow c$ equals the number L, we need to show that the gap between $f(x)$ and L can be made “as small as we choose” if x is kept “close enough” to c. Let us see what this requires if we specify the size of the gap between $f(x)$ and L. 

![教材插图](/books/thomas-calculus/assets/c9a8e0fd6eb6b84f6522eb3cea1a549d692642d019fe9c59fb5a36a6ec4690a2.jpg)


**EXAMPLE 1** Consider the function y = 2x - 1 near x = 4. Intuitively it seems clear that y is close to 7 when x is close to 4, so $\lim_{x \to 4} (2x - 1) = 7$ . However, how close to x = 4 does x have to be so that y = 2x - 1 differs from 7 by, say, less than 2 units? 


FIGURE 2.16 Keeping x within 1 unit of x = 4 will keep y within 2 units of y = 7 (Example 1).


**Solution** We are asked: For what values of $x$ is $|y - 7| < 2$ ? To find the answer we first express $|y - 7|$ in terms of $x$ : 

$$
| y - 7 | = | (2 x - 1) - 7 | = | 2 x - 8 |.
$$

The question then becomes: What values of $x$ satisfy the inequality $|2x - 8| < 2$ ? To find out, we solve the inequality: 

$$
\begin{array}{r l} | 2 x - 8 | & <   2 \\ & - 2 <   2 x - 8 <   2 \\ & 6 <   2 x <   1 0 \\ & 3 <   x <   5 \\ & - 1 <   x - 4 <   1. \end{array}
$$

Keeping x within 1 unit of x = 4 will keep y within 2 units of y = 7 (Figure 2.16). 

In the previous example we determined how close x must be to a particular value c to ensure that the outputs $f(x)$ of some function lie within a prescribed interval about a limit value L. To show that the limit of $f(x)$ as $x \rightarrow c$ actually equals L, we must be able to show that the gap between $f(x)$ and L can be made less than any prescribed error, no matter how 

$\delta$ is the Greek letter delta. $\varepsilon$ is the Greek letter epsilon. 

![教材插图](/books/thomas-calculus/assets/8f618f852853686a0e0227b3312be4f136abee8e7ac8d266cd31d502509343bc.jpg)



FIGURE 2.17 How should we define $\delta > 0$ so that keeping $x$ within the interval $(c - \delta, c + \delta)$ will keep $f(x)$ within the interval $\left(L - \frac{1}{10}, L + \frac{1}{10}\right)$ ?


![教材插图](/books/thomas-calculus/assets/84af47bfc25f8f3ec7e4506126c5d8377c1ba43367196ea24e7f058873033f8b.jpg)



FIGURE 2.18 The relation of $\delta$ and $\varepsilon$ in the definition of limit.


small, by holding x close enough to c. To describe arbitrary prescribed errors, we introduce two constants, $\delta$ (delta) and $\varepsilon$ (epsilon). These Greek letters are traditionally used to represent small changes in a variable or a function. 

### Definition of Limit

Suppose we are watching the values of a function $f(x)$ as x approaches c (without taking on the value c itself). Certainly we want to be able to say that $f(x)$ stays within one-tenth of a unit from L as soon as x stays within some distance $\delta$ of c (Figure 2.17). But that in itself is not enough, because as x continues on its course toward c, what is to prevent $f(x)$ from jumping around within the interval from $L - (1/10)$ to $L + (1/10)$ without tending toward L? We can be told that the error can be no more than 1/100 or 1/1000 or 1/100,000. Each time, we find a new $\delta$ -interval about c so that keeping x within that interval satisfies the new error tolerance. And each time the possibility exists that $f(x)$ might jump away from L at some later stage. 

The figures on the next page illustrate the problem. You can think of this as a quarrel between a skeptic and a scholar. The skeptic presents $\varepsilon$ -challenges to show there is room for doubt that the limit exists. The scholar counters every challenge with a $\delta$ -interval around c which ensures that the function takes values within $\varepsilon$ of L. 

How do we stop this seemingly endless series of challenges and responses? We can do so by proving that for every error tolerance $\varepsilon$ that the challenger can produce, we can present a matching distance $\delta$ that keeps x “close enough” to c to keep $f(x)$ within that $\varepsilon$ -tolerance of L (Figure 2.18). This leads us to the precise definition of a limit. 

> ***DEFINITION*** Let $f(x)$ be defined on an open interval about $c$ , except possibly at $c$ itself. We say that the limit of $f(x)$ as $x$ approaches $c$ is the number $L$ , and write 
>
> $$
> \lim _ {x \to c} f (x) = L,
> $$
>
> if, for every number $\varepsilon > 0$ , there exists a corresponding number $\delta > 0$ such that 
>
> $$
> | f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
> $$
>
To visualize the definition, imagine machining a cylindrical shaft to a close tolerance. The diameter of the shaft is determined by turning a dial to a setting measured by a variable x. We try for diameter L, but since nothing is perfect we must be satisfied with a diameter $f(x)$ somewhere between $L - \varepsilon$ and $L + \varepsilon$ . The number $\delta$ is our control tolerance for the dial; it tells us how close our dial setting must be to the setting x = c in order to guarantee that the diameter $f(x)$ of the shaft will be accurate to within $\varepsilon$ of L. As the tolerance for error becomes stricter, we may have to adjust $\delta$ . The value of $\delta$ , how tight our control setting must be, depends on the value of $\varepsilon$ , the error tolerance. 

The definition of limit extends to functions on more general domains. It is only required that each open interval around c contain points in the domain of the function other than c. See Additional and Advanced Exercises 49–53 for examples of limits for functions with complicated domains. In the next section we will see how the definition of limit applies at points lying on the boundary of an interval. 

### Examples: Testing the Definition

The formal definition of limit does not tell how to find the limit of a function, but it does enable us to verify that a conjectured limit value is correct. The following examples show how the definition can be used to verify limit statements for specific functions. However, the real purpose of the definition is not to do calculations like this, but rather to prove general theorems so that the calculation of specific limits can be simplified, such as the theorems stated in the previous section. 

![教材插图](/books/thomas-calculus/assets/9bc9256829db180c3cbce0026b3aae3951a96f59cecc23621152db71b58b996b.jpg)


![教材插图](/books/thomas-calculus/assets/265f878041e0c8fdcb731251a8eb104d83a21ef35eadc1e7846c7dc1d297d94c.jpg)


![教材插图](/books/thomas-calculus/assets/3f148ea63c7ebf9e138c3124296cbdef183f9ed82da961856a6bf5ce5224135b.jpg)


![教材插图](/books/thomas-calculus/assets/94bbf646b88260ecc07cd164471c2c4ca7338ed7af4288a6661ce4a1d7e1518e.jpg)


![教材插图](/books/thomas-calculus/assets/e79b6bff7979fd59756bd20c3023d2474d265f30e0692fa3463d091b6404084d.jpg)


![教材插图](/books/thomas-calculus/assets/b1225517517ccbb62b6c63300b64cfafadb10a6a337eff2f57066ff65e775d6b.jpg)


![教材插图](/books/thomas-calculus/assets/f002f855bd1f72805e787fdebb9538cb5e0d806d992dab7b6f09191def6a508f.jpg)


![教材插图](/books/thomas-calculus/assets/a76b46a16be6fa25f5a76b4c901c6ba1a2b91f309317bd68f80e8db3db8b6412.jpg)


![教材插图](/books/thomas-calculus/assets/ecf07e806e347ea1f5a559d83c481d889a08becd7d5ae01641d9ddedeca3daac.jpg)



**EXAMPLE 2** Show that


$$
\lim _ {x \to 1} (5 x - 3) = 2.
$$

**Solution** Set c = 1, $f(x) = 5x - 3$ , and L = 2 in the definition of limit. For any given $\varepsilon > 0$ , we have to find a suitable $\delta > 0$ so that if $x \neq 1$ and x is within distance $\delta$ of c = 1, then it is true that $f(x)$ is within distance $\varepsilon$ of L = 2. That is, we must show that if x satisfies 

$$
0 <   | x - 1 | <   \delta ,
$$

then $f(x)$ will satisfy 

$$
\left| f (x) - 2 \right| <   \varepsilon .
$$

![教材插图](/books/thomas-calculus/assets/db6f9114717c1c6dc56fb9d9a74303a12e77ac96c9f154b5f6a3f21572941ffc.jpg)



FIGURE 2.19 If $f(x) = 5x - 3$ , then $0 < |x - 1| < \varepsilon / 5$ guarantees that $|f(x) - 2| < \varepsilon$ (Example 2).


![教材插图](/books/thomas-calculus/assets/31a1d19b057e3327d4682cc26eb68ff1bc2da6ba1b13d8542de21eb14c3d9abf.jpg)



FIGURE 2.20 For the function $f(x) = x$ , we find that $0 < |x - c| < \delta$ will guarantee $|f(x) - c| < \varepsilon$ whenever $\delta \leq \varepsilon$ (Example 3a).


![教材插图](/books/thomas-calculus/assets/aea9079e46cb65059d505a66238bbdbc77cf9891ad2bcd17147c22133768b7ce.jpg)



FIGURE 2.21 For the function $f(x) = k$ , we find that $|f(x) - k| < \varepsilon$ for any positive $\delta$ (Example 3b).


We find $\delta$ by working backward from the $\varepsilon$ -inequality, $|f(x)-2|<\varepsilon$ : 

$$
\begin{array}{r l r} | (5 x - 3) - 2 | = | 5 x - 5 | <   \varepsilon & \text {   Substitute.   } \\ 5 | x - 1 | <   \varepsilon & \text {   Factor.   } \\ | x - 1 | <   \varepsilon / 5. & \text {   Simplify.   } \end{array}
$$

Thus, we can take $\delta = \varepsilon / 5$ (Figure 2.19). If $0 < |x - 1| < \delta = \varepsilon / 5$ , then 

$$
\left| (5 x - 3) - 2 \right| = \left| 5 x - 5 \right| = 5 | x - 1 | <   5 (\varepsilon / 5) = \varepsilon ,
$$

which proves that $\lim_{x\to 1}(5x - 3) = 2$ 

The value of $\delta = \varepsilon/5$ is not the only value that will make $0 < |x - 1| < \delta$ imply $|5x - 5| < \varepsilon$ . Any smaller positive $\delta$ will do as well. The definition does not ask for the “best” positive $\delta$ , just one that will work. 

**EXAMPLE 3** Prove the following results, which were presented graphically in Section 2.2.

(a) $\lim_{x\to c}x=c$ 

(b) $\lim_{x\to c}k = k$ $k$ constant 

**Solution** 

(a) Let $\varepsilon > 0$ be given. We must find $\delta > 0$ such that 

$$
| x - c | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$

The implication will hold if $\delta$ equals $\varepsilon$ or any smaller positive number (Figure 2.20). This proves that $\lim_{x\to c}\frac{1}{c} = c$ . 

(b) Let $\varepsilon > 0$ be given. We must find $\delta > 0$ such that 

$$
| k - k | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$

Since k - k = 0, we will always have $|k - k| < \varepsilon$ . Therefore we can use any positive number for $\delta$ , and the implication will hold (Figure 2.21). This proves that $\lim_{k \to \infty} k = k$ . 

### Finding Deltas Algebraically for Given Epsilon

In Examples 2 and 3, the interval of values about $c$ for which $|f(x) - L|$ was less than $\varepsilon$ was symmetric about $c$ and we could take $\delta$ to be half the length of that interval. When the interval around $c$ on which we have $|f(x) - L| < \varepsilon$ is not symmetric about $c$ , we can take $\delta$ to be the distance from $c$ to the interval's nearer endpoint. 

**EXAMPLE 4** For the limit $\lim_{x\to5}\sqrt{x-1}=2$ , find a $\delta>0$ that works for $\varepsilon=1$ . That is, find a $\delta>0$ such that 

$$
\left| \sqrt {x - 1} - 2 \right| <   1 \quad \text { whenever } \quad 0 <   | x - 5 | <   \delta
$$

**Solution** We organize the search into two steps. 

1. Solve the inequality $\left|\sqrt{x-1}-2\right|<1$ to find an interval containing x=5 on which the inequality holds for all $x\neq5$ . 

$$
\begin{array}{c} \left| \sqrt {x - 1} - 2 \right| <   1 \\ - 1 <   \sqrt {x - 1} - 2 <   1 \\ 1 <   \sqrt {x - 1} <   3 \\ 1 <   x - 1 <   9 \\ 2 <   x <   1 0 \end{array}
$$

![教材插图](/books/thomas-calculus/assets/6d39987a7873c5f9cf738316d0f5685442f3afaf24d9e28bf72bd5bc64633d6e.jpg)



FIGURE 2.22 An open interval of radius 3 about x = 5 will lie inside the open interval (2,10).


![教材插图](/books/thomas-calculus/assets/8d20240af4ff052baf92e53cf39fafb72a222c365631e50733bde742fd67a493.jpg)



FIGURE 2.23 The function and intervals in Example 4.


![教材插图](/books/thomas-calculus/assets/c9a5413a614ec01c96dec0996f55cdbed961557bffbb3b5df49904bdbbb3bb42.jpg)



FIGURE 2.24 An interval containing x = 2 so that the function in Example 5 satisfies $|f(x) - 4| < \varepsilon$ .


The inequality holds for all x in the open interval $(2,10)$ , so it holds for all $x \neq 5$ in this interval as well. 

2. Find a value of $\delta > 0$ to place the centered interval $5 - \delta < x < 5 + \delta$ (centered at x = 5 inside the interval (2,10)). The distance from 5 to the nearer endpoint of (2,10) is 3 (Figure 2.22). If we take $\delta = 3$ or any smaller positive number, then the inequality $0 < |x - 5| < \delta$ will automatically place x between 2 and 10 and imply that $\left|\sqrt{x - 1} - 2\right| < 1$ (Figure 2.23): 

$$
\left| \sqrt {x - 1} - 2 \right| <   1 \quad \text { whenever } \quad 0 <   | x - 5 | <   3.
$$

### How to Find Algebraically a $\delta$ for a Given $f, L, c$ , and $\varepsilon > 0$

The process of finding a $\delta > 0$ such that 

$$
| f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta
$$

can be accomplished in two steps. 

1. Solve the inequality $|f(x) - L| < \varepsilon$ to find an open interval $(a, b)$ , containing c on which the inequality holds for all $x \neq c$ . Note that we do not require the inequality to hold at x = c. It may hold there or it may not, but the value of f at x = c does not influence the existence of a limit. 

2. Find a value of $\delta > 0$ that places the open interval $(c - \delta, c + \delta)$ centered at c inside the interval $(a, b)$ . The inequality $|f(x) - L| < \varepsilon$ will hold for all $x \neq c$ in this $\delta$ -interval. 

**EXAMPLE 5** Prove that $\lim_{x\to 2}f(x) = 4$ if 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2}, & x \neq 2 \\ 1, & x = 2. \end{array} \right.
$$

**Solution** Our task is to show that given $\varepsilon > 0$ , there exists a $\delta > 0$ such that 

$$
| f (x) - 4 | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - 2 | <   \delta .
$$

1. Solve the inequality $|f(x) - 4| < \varepsilon$ to find an open interval containing $x = 2$ on which the inequality holds for all $x \neq 2$ . 

For $x \neq c = 2$ , we have $f(x) = x^2$ , and the inequality to solve is $|x^2 - 4| < \varepsilon$ : 

$$
\begin{array}{l l} | x ^ {2} - 4 | <   \varepsilon \\ - \varepsilon <   x ^ {2} - 4 <   \varepsilon \\ 4 - \varepsilon <   x ^ {2} <   4 + \varepsilon \\ \sqrt {4 - \varepsilon} <   | x | <   \sqrt {4 + \varepsilon} \\ \sqrt {4 - \varepsilon} <   x <   \sqrt {4 + \varepsilon}. \end{array} \quad \text {   Assumes   } \varepsilon <   4; \text {   see   below.   } \quad \text {   An   open   interval   about   } x = 2 \text {   that   solves   the   inequality   }
$$

The inequality $|f(x) - 4| < \varepsilon$ holds for all $x \neq 2$ in the open interval $(\sqrt{4 - \varepsilon}, \sqrt{4 + \varepsilon})$ (Figure 2.24). 

2. Find a value of $\delta > 0$ that places the centered interval $(2 - \delta, 2 + \delta)$ inside the interval $(\sqrt{4 - \varepsilon}, \sqrt{4 + \varepsilon})$ . 

Take $\delta$ to be the distance from x = 2 to the nearer endpoint of $(\sqrt{4 - \varepsilon}, \sqrt{4 + \varepsilon})$ . In other words, take $\delta = \min\{2 - \sqrt{4 - \varepsilon}, \sqrt{4 + \varepsilon} - 2\}$ , the minimum (the smaller) of the two numbers $2 - \sqrt{4 - \varepsilon}$ and $\sqrt{4 + \varepsilon} - 2$ . If $\delta$ has this or any smaller positive value, the inequality $0 < |x - 2| < \delta$ will automatically place $x$ between $\sqrt{4 - \varepsilon}$ and $\sqrt{4 + \varepsilon}$ to make $|f(x) - 4| < \varepsilon$ . For all $x$ , 

$$
| f (x) - 4 | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - 2 | <   \delta .
$$

This completes the proof for $\varepsilon < 4$ . 

If $\varepsilon \geq 4$ , then we take $\delta$ to be the distance from $x = 2$ to the nearer endpoint of the interval $(0, \sqrt{4 + \varepsilon})$ . In other words, take $\delta = \min \{2, \sqrt{4 + \varepsilon - 2}\}$ . (See Figure 2.24.) 

### Using the Definition to Prove Theorems

We do not usually rely on the formal definition of limit to verify specific limits such as those in the preceding examples. Rather, we appeal to general theorems about limits, in particular the theorems of Section 2.2. The definition is used to prove these theorems (Appendix A.6). As an example, we prove part 1 of Theorem 1, the Sum Rule. 

**EXAMPLE 6** Given that $\lim_{x\to c}f(x) = L$ and $\lim_{x\to c}g(x) = M$ , prove that $\lim_{x\to c}(f(x) + g(x)) = L + M$ . 

**Solution** Let $\varepsilon > 0$ be given. We want to find a positive number $\delta$ such that 

$$
\left| f (x) + g (x) - (L + M) \right| <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$

Regrouping terms, we get 

$$
\begin{array}{l l} | f (x) + g (x) - (L + M) | = | (f (x) - L) + (g (x) - M) | & \text { Triangle   Inequality: } \\ & | a + b | \leq | a | + | b | \\ \leq | f (x) - L | + | g (x) - M |. \end{array}
$$

Since $\lim_{x\to c}f(x) = L$ , there exists a number $\delta_1 > 0$ such that 

$$
| f (x) - L | <   \varepsilon / 2 \quad \text { whenever } \quad 0 <   | x - c | <   \delta_ {1}. \qquad \begin{array}{l} \text { Can   find   } \delta_ {1} \text {   since } \\ \lim _ {x \to c} f (x) = L \end{array}
$$

Similarly, since $\lim_{x\to 0}g(x) = M$ , there exists a number $\delta_2 > 0$ such that 

$$
| g (x) - M | <   \varepsilon / 2 \quad \text { whenever } \quad 0 <   | x - c | <   \delta_ {2}. \quad \begin{array}{l} \text { Can   find   } \delta_ {2} \text {   since } \\ \lim _ {x \to c} g (x) = M \end{array}
$$

Let $\delta = \min\{\delta_1, \delta_2\}$ , the smaller of $\delta_1$ and $\delta_2$ . If $0 < |x - c| < \delta$ then $|x - c| < \delta_1$ , so $|f(x) - L| < \varepsilon/2$ , and $|x - c| < \delta_2$ , so $|g(x) - M| < \varepsilon/2$ . Therefore, 

$$
\left| f (x) + g (x) - (L + M) \right| <   \frac {\varepsilon}{2} + \frac {\varepsilon}{2} = \varepsilon .
$$

This shows that $\lim_{x\to c}(f(x)+g(x))=L+M.$ 

### EXERCISES 2.3

#### Centering Intervals About a Point

In Exercises 1–6, sketch the interval $(a,b)$ , on the x-axis with the point c inside. Then find a value of $\delta > 0$ such that a < x < b whenever $0 < |x - c| < \delta$ . 

1. $a = 1, b = 7, c = 5$

2. $a = 1, b = 7, c = 2$

3. $a = - 7 / 2, b = - 1 / 2, c = - 3$

4. $a = - 7 / 2, b = - 1 / 2, c = - 3 / 2$

5. $a = 4 / 9, b = 4 / 7, c = 1 / 2$

6. $a = 2. 7 5 9 1, b = 3. 2 3 9 1, c = 3$

Using the Formal Definition
Each of Exercises 31–36 gives a function $f(x)$ , a point c, and a positive number $\varepsilon$ . Find $L = \lim_{x \to c} f(x)$ . Then find a number $\delta > 0$ such that 

#### Finding Deltas Graphically

In Exercises 7–14, use the graphs to find a $\delta > 0$ such that 

$$
| f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$


7.



8.


![教材插图](/books/thomas-calculus/assets/ffabe1c8a2921ffde3d7f431086282b545179252b0d1a399fb8495e97a7b18fb.jpg)


![教材插图](/books/thomas-calculus/assets/89c67595332bfbb0b94a7c67b9e808c53e9bf322c875ec89453eb4a1dcdcef8c.jpg)



9.


![教材插图](/books/thomas-calculus/assets/911d8fb918ff2fc73c6678e4e9cd9cb9444f54b61a35d039be6ad49443b70239.jpg)



10.


![教材插图](/books/thomas-calculus/assets/83ebfdabe86ca698982f3e889240c1306152407fae08364264c52a1fd566d1c5.jpg)



11.



12.


![教材插图](/books/thomas-calculus/assets/cac22d2e4ca2b94e1336c01cf25d30662f52cbb851458e6e35464916165e91b2.jpg)


![教材插图](/books/thomas-calculus/assets/f5c9d74bacd98d8d691b96e7a563446bd91b40d98204fac63199feee39b725ba.jpg)



13.


![教材插图](/books/thomas-calculus/assets/f9fb083131525417b1a678919c3457778bf42a6307c06041a5038ed965e06f41.jpg)



Finding Deltas Algebraically



Each of Exercises 15–30 gives a function $f(x)$ and numbers L, c, and $\varepsilon > 0$ . In each case, find the largest open interval about c on which the inequality $|f(x) - L| < \varepsilon$ holds. Then give a value for $\delta > 0$ such that for all x satisfying $0 < |x - c| < \delta$ , the inequality $|f(x) - L| < \varepsilon$ holds.


![教材插图](/books/thomas-calculus/assets/caf4970468694872567d20b5d461e1da3313e09dd6c8c9f0a3559bc572116a61.jpg)


$$
\begin{array}{l} | f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta . \\ \mathbf {3 1 .} f (x) = 3 - 2 x, \quad c = 3, \quad \varepsilon = 0. 0 2 \\ \mathbf {3 2 .} f (x) = - 3 x - 2, \quad c = - 1, \quad \varepsilon = 0. 0 3 \\ \mathbf {3 3 .} f (x) = \frac {x ^ {2} - 4}{x - 2}, \quad c = 2, \quad \varepsilon = 0. 0 5 \end{array}
$$

34. $f(x) = \frac{x^2 + 6x + 5}{x + 5},\quad c = -5,\quad \varepsilon = 0.05$ 

35. $f(x) = \sqrt{1 - 5x}, \quad c = -3, \quad \varepsilon = 0.5$ 

36. $f(x) = 4/x$ , c = 2, $\varepsilon = 0.4$ 

Prove the limit statements in Exercises 37–50. 

37. $\lim_{x\to 4}(9 - x) = 5$

38. $\lim_{x\to 3}(3x - 7) = 2$

39. $\lim_{x\to 9}\sqrt{x - 5} = 2$ 

40. $\lim_{x\to0}\sqrt{4-x}=2$ 

41. $\lim_{x\to 1}f(x) = 1$ if $f(x) = \left\{ \begin{array}{ll}x^{2}, & x\neq 1\\ 2, & x = 1 \end{array} \right.$ 

42. $\lim _ {x \to - 2} f (x) = 4 \quad \text { if } \quad f (x) = \left\{ \begin{array}{l l} x ^ {2}, & x \neq - 2 \\ 1, & x = - 2 \end{array} \right.$

43. $\lim_{x\to 1}\frac{1}{x} = 1$

44. $\lim_{x\to \sqrt{3}}\frac{1}{x^2} = \frac{1}{3}$

45. $\lim_{x\to -3}\frac{x^2 - 9}{x + 3} = -6$

46. $\lim_{x\to 1}\frac{x^2 - 1}{x - 1} = 2$

47. $\lim_{x\to 1}f(x) = 2$ if $f(x) = \left\{ \begin{array}{ll}4 - 2x, & x <   1\\ 6x - 4, & x\geq 1 \end{array} \right.$ 

48. $\lim_{x\to 0}f(x) = 0$ if $f(x) = \left\{ \begin{array}{ll}2x, & x <   0\\ x / 2, & x\geqslant 0 \end{array} \right.$ 

49. $\lim_{x\to 0}x\sin \frac{1}{x} = 0$ 

![教材插图](/books/thomas-calculus/assets/d139417a590e5bfdf85eca2050a08b97e7fef74a520fe3a493e0c842bf86ff14.jpg)


50. $\lim_{x\to 0}x^2\sin \frac{1}{x} = 0$ 

![教材插图](/books/thomas-calculus/assets/13366d6bacb8e9abf65374090b89c635e2b496a8678eb958dd0a44f0aa8e044a.jpg)


#### Theory and Examples

51. Define what it means to say that $\lim_{x\to 0}g(x) = k$ 

52. Prove that $\lim_{x\to c}f(x) = L$ if and only if $\lim_{h\to 0}f(h + c) = L$ . 

53. A wrong statement about limits Show by example that the following statement is wrong. 

The number L is the limit of $f(x)$ as x approaches c if $f(x)$ gets closer to L as x approaches c. 

Explain why the function in your example does not have the given value of L as a limit as $x \rightarrow c$ . 

54. Another wrong statement about limits Show by example that the following statement is wrong. 

The number L is the limit of $f(x)$ as x approaches c if, given any $\varepsilon > 0$ , there exists a value of x for which $|f(x) - L| < \varepsilon$ . Explain why the function in your example does not have the given value of L as a limit as $x \to c$ . 

55. Grinding engine cylinders Before contracting to grind engine cylinders to a cross-sectional area of $60 \, cm^2$ , you need to know how much deviation from the ideal cylinder diameter of c = 8.7404 cm you can allow and still have the area come within $0.1 \, cm^2$ of the required $60 \, cm^2$ . To find out, you let $A = \pi(x/2)^2$ and look for the interval in which you must hold x to make $|A - 60| \leq 0.1$ . What interval do you find? 

56. Manufacturing electrical resistors Ohm's law for electrical circuits like the one shown in the accompanying figure states that $V = RI$ . In this equation, $V$ is a constant 

![教材插图](/books/thomas-calculus/assets/3369728d7b0fa998cf307cb34b1f0d22eeacb5d036ff78d97679da8f08d35477.jpg)


voltage, I is the current in amperes, and R is the resistance in ohms. Your firm has been asked to supply the resistors for a circuit in which V will be 120 volts and I is to be $5 \pm 0.1$ amp. In what interval does R have to lie for I to be within 0.1 amp of the value $I_{0} = 5$ ? 

When Is a Number $L$ Not the Limit of $f(x)$ As $x \to c$ ? 

In Exercises 57–60 we will consider what it means to not have a limit. Showing L is not a limit We can prove that $\lim_{x\to c}f(x)\neq L$ by providing an $\varepsilon>0$ such that no possible $\delta>0$ satisfies the condition 

$$
| f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$

We accomplish this for our candidate $\varepsilon$ by showing that for each $\delta > 0$ there exists a value of $x$ such that 

$$
0 <   | x - c | <   \delta \quad \text { and } \quad | f (x) - L | \geq \varepsilon .
$$

![教材插图](/books/thomas-calculus/assets/f89aad10ab260fe844e62382986d0136cc844ab7b2b3308ae4a11e9a4d2f9519.jpg)



A value of x for which


$$
0 <   | x - c | <   \delta \text { and } | f (x) - L | \geq \varepsilon
$$

57. Let $f(x) = \begin{cases} x, & x < 1 \\ x + 1, & x > 1. \end{cases}$ 

![教材插图](/books/thomas-calculus/assets/bcf99adc279932f199f2a7a6a9320488b235f340f900bf7e3b9513e76b8611dc.jpg)


a. Let $\varepsilon = 1/2$ . Show that no possible $\delta > 0$ satisfies the following condition: 

$$
| f (x) - 2 | <   1 / 2 \quad \text { whenever } \quad 0 <   | x - 1 | <   \delta .
$$

That is, show that for each $\delta > 0$ , there is a value of $x$ such that 

$$
0 <   | x - 1 | <   \delta \quad \text { and } \quad | f (x) - 2 | \geq 1 / 2.
$$

This will show that $\lim_{x\to1}f(x)\neq2$ . 

b. Show that $\lim_{x\to 1}f(x)\neq 1$ 

c. Show that $\lim_{x\to1}f(x)\neq1.5$ . 

58. Let $h(x) = \begin{cases} x^2, & x < 2 \\ 3, & x = 3 \\ 2, & x > 2. \end{cases}$ 

![教材插图](/books/thomas-calculus/assets/c6b501801ca28ca5b7f503aa73090fa2f491a33f7de9a0bfab25fe0d1fbd59b3.jpg)


Show that 

a. $\lim_{x\to2}h(x)\neq4$ 

b. $\lim_{x\to2}h(x)\neq3$ 

c. $\lim_{x\to2}h(x)\neq2$ 

59. For the function graphed here, explain why
    a. $\lim_{x\to3}f(x)\neq4$ b. $\lim_{x\to3}f(x)\neq4.8$ c. $\lim_{x\to3}f(x)\neq3$ 

![教材插图](/books/thomas-calculus/assets/4d17f64f9a85af8e3c4d240ea71799321ab0f889fe9b9b3d6b1bae4723dfa5fe.jpg)


60. a. For the function graphed here, show that $\lim_{x\to1}g(x)\neq2$ . 

b. Does $\lim_{x\to -1}g(x)$ appear to exist? If so, what is the value of the limit? If not, why not? 

![教材插图](/books/thomas-calculus/assets/51be3902048852cc7c388982dcf544c052b63a64e81b20e5107f7770623535f5.jpg)


COMPUTER EXPLORATIONS 

In Exercises 61–66, you will further explore finding deltas graphically. Use a CAS to perform the following steps: 

a. Plot the function $y = f(x)$ near the point c being approached. 

b. Guess the value of the limit L and then evaluate the limit symbolically to see if you guessed correctly. 

c. Using the value $\varepsilon = 0.2$ , graph the banding lines $y_{1} = L - \varepsilon$ and $y_{2} = L + \varepsilon$ together with the function $f$ near $c$ . 

d. From your graph in part (c), estimate a $\delta > 0$ such that 

$$
| f (x) - L | <   \varepsilon \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
$$

Test your estimate by plotting $f, y_1$ , and $y_2$ over the interval $0 < |x - c| < \delta$ . For your viewing window use $c - 2\delta \leq x \leq c + 2\delta$ and $L - 2\varepsilon \leq y \leq L + 2\varepsilon$ . If any function values lie outside the interval $[L - \varepsilon, L + \varepsilon]$ , your choice of $\delta$ was too large. Try again with a smaller estimate. 

e. Repeat parts (c) and (d) successively for $\varepsilon = 0.1$ , 0.05, and 0.001. 

$$
f (x) = \frac {x ^ {4} - 8 1}{x - 3}, c = 3 \quad \mathbf {6 2 .} f (x) = \frac {5 x ^ {3} + 9 x ^ {2}}{2 x ^ {5} + 3 x ^ {2}}, c = 0
$$

$$
f (x) = \frac {\sin 2 x}{3 x}, c = 0 \quad 6 4. f (x) = \frac {x (1 - \cos x)}{x - \sin x}, c = 0
65. $$f(x) = \frac{\sqrt[3]{x} - 1}{x - 1}, c = 1$$
f (x) = \frac {3 x ^ {2} - (7 x + 1) \sqrt {x} + 5}{x - 1}, c = 1
$$

## 2.4 One-Sided Limits

![教材插图](/books/thomas-calculus/assets/a877f2943d5f73557bc47ecec06637d6d48cb35541004c5a948d2bd29b4e5533.jpg)



FIGURE 2.25 Different right-hand and left-hand limits at the origin.


In this section we extend the limit concept to one-sided limits, which are limits as x approaches the number c from the left-hand side (where x < c) or the right-hand side (where x > c) only. These allow us to describe functions that have different limits at a point, depending on whether we approach the point from the left or from the right. One-sided limits also allow us to say what it means for a function to have a limit at an endpoint of an interval. 

### Approaching a Limit from One Side

Suppose a function f is defined on an interval that extends to both sides of a number c. In order for f to have a limit L as x approaches c, the values of $f(x)$ must approach the value L as x approaches c from either side. Because of this, we sometimes say that the limit is two-sided. 

If f fails to have a two-sided limit at c, it may still have a one-sided limit, that is, a limit if the approach is only from one side. If the approach is from the right, the limit is a right-hand limit or limit from the right. Similarly, a left-hand limit is also called a limit from the left. 

The function $f(x) = x/|x|$ (Figure 2.25) has limit 1 as x approaches 0 from the right, and limit -1 as x approaches 0 from the left. Since these one-sided limit values are not the same, there is no single number that $f(x)$ approaches as x approaches 0. So $f(x)$ does not have a (two-sided) limit at 0. 

Intuitively, if we consider only the values of $f(x)$ on an interval $(c, b)$ , where c < b, and the values of $f(x)$ become arbitrarily close to L as x approaches c from within that interval, then f has right-hand limit L at c. In this case we write 

$$
\lim _ {x \to c ^ {+}} f (x) = L.
$$

The notation “ $x \to c^{+}$ ” means that we consider only values of $f(x)$ for $x$ greater than $c$ . We don't consider values of $f(x)$ for $x \leq c$ . 

Similarly, if $f(x)$ is defined on an interval $(a, c)$ , where a < c, and $f(x)$ approaches arbitrarily close to M as x approaches c from within that interval, then f has left-hand limit M at c. We write 

$$
\lim _ {x \to c ^ {-}} f (x) = M.
$$

The symbol “ $x \to c^{-}$ ” means that we consider the values of $f$ only at $x$ -values less than $c$ . These informal definitions of one-sided limits are illustrated in Figure 2.26. For the function $f(x) = x / |x|$ in Figure 2.25 we have 

$$
\lim _ {x \to 0 ^ {+}} f (x) = 1 \quad \text { and } \quad \lim _ {x \to 0 ^ {-}} f (x) = - 1.
$$

![教材插图](/books/thomas-calculus/assets/edbf473750235819070ca0ed4937ed81087ae25d1ef882ad03bcb1a411794023.jpg)


![教材插图](/books/thomas-calculus/assets/09ddb750adb6115c73e41f2489c6b669c9f6835e9ba81990664ed1ba2493357c.jpg)



(a) $\lim_{x\to c^{+}}f(x)=L$



(b) $\lim_{x\to c^{-}}f(x)=M$



FIGURE 2.26 (a) Right-hand limit as $x$ approaches $c$ . (b) Left-hand limit as $x$ approaches $c$ .


One-sided limits have all the properties listed in Theorem 1 in Section 2.2. The right-hand limit of the sum of two functions is the sum of their right-hand limits, and so on. The theorems for limits of polynomials and rational functions hold with one-sided limits, as does the Sandwich Theorem. One-sided limits are related to limits at interior points in the following way. 

**THEOREM 5**

Suppose that a function f is defined on an open interval containing c, except perhaps at c itself. Then $f(x)$ has a limit as x approaches c if and only if it has both a limit from the left at c and a limit from the right at c, and these one-sided limits are equal: 

$$
\lim _ {x \to c} f (x) = L \quad \Leftrightarrow \quad \lim _ {x \to c ^ {-}} f (x) = L \quad \text { and } \quad \lim _ {x \to c ^ {+}} f (x) = L.
$$

Theorem 5 applies at interior points of a function's domain. At a boundary point of an interval in its domain, a function has a limit when it has an appropriate one-sided limit. 

### Limits at Endpoints of an Interval

- If $f$ is defined on an open interval $(b, c)$ to the left of $c$ and not defined on an open interval $(c, d)$ to the right of $c$ , then 

$$
\lim _ {x \to c} f (x) = \lim _ {x \to c ^ {-}} f (x).
$$

- If $f$ is defined on an open interval $(c, d)$ to the right of $c$ and not defined on an open interval $(b, c)$ to the left of $c$ , then 

$$
\lim _ {x \to c} f (x) = \lim _ {x \to c ^ {+}} f (x).
$$

(The definition of a limit on an arbitrary domain is discussed in Additional and Advanced Exercises 39–42.) 

![教材插图](/books/thomas-calculus/assets/c6a0a2ff7653a5a3a5fd152b9c680dff4c35f3398b2e632be2dab6cb0139e668.jpg)


**EXAMPLE 1** For the function graphed in Figure 2.27, 


FIGURE 2.27 Graph of the function in Example 1.


$$
\begin{array}{l l} \text {   At   } x = 2: & \lim _ {x \to 2 ^ {-}} f (x) = 1, \\ & \lim _ {x \to 2 ^ {+}} f (x) = 1, \\ & \lim _ {x \to 2 ^ {-}} f (x) = 1. \end{array} \quad \text { Even   though   } f (2) = 2.
$$

![教材插图](/books/thomas-calculus/assets/bdb8de328ff86da01ad19f73e125cc32ae10b8f12e01dda2275b8e2aa49219e3.jpg)


$$
\begin{array}{l l} \text {   At   } x = 3: & \lim _ {x \to 3 ^ {-}} f (x) = \lim _ {x \to 3 ^ {+}} f (x) = \lim _ {x \to 3} f (x) = f (3) = 2. \\ \text {   At   } x = 4: & \lim _ {x \to 4 ^ {-}} f (x) = 1, \qquad \qquad \qquad \qquad \qquad \text {   Even   though   } f (4) \neq 1. \\ & \lim _ {x \to 4 ^ {+}} f (x) \text {   does   not   exist }, \qquad \qquad \qquad \qquad \qquad f \text {   is   not   defined   to   the   right   of   } x = 4. \\ & \lim _ {x \to 4} f (x) = 1. \qquad \qquad \qquad \qquad \qquad \qquad f \text {   has   a   limit   at   domain   endpoint   } x = 4. \end{array}
$$


FIGURE 2.28 The arcsec function has limits at $x = \pm1$ .


At every other point c in $[0,4]$ , $f(x)$ , has limit $f(c)$ . 

**EXAMPLE 2** The domain of the function arcsec x is a union of the intervals $(-\infty, -1]$ and $[1, \infty)$ , as shown in Figure 2.28. For the boundary points of these intervals, 

$$
\begin{array}{l l} \text {   At   } x = - 1: \lim _ {x \to - 1 ^ {-}} \operatorname{arcsec} x = \pi , & \text {   arcsec   } x \text {   has   a   limit   from   the   left   at   } x = - 1. \\ \lim _ {x \to - 1 ^ {+}} \operatorname{arcsec} x \text {   does   not   exist }, & \text {   arcsec   } x \text {   is   not   defined   on   } (- 1, 1). \\ \lim _ {x \to - 1} \operatorname{arcsec} x = \pi . & \text {   arcsec   } x \text {   has   a   limit   at   } x = - 1. \end{array}
$$

![教材插图](/books/thomas-calculus/assets/0754a341097c476abc04ac890b1a35193aa63cee4549923c38c71cb62e1726c3.jpg)



FIGURE 2.29 Intervals associated with the definition of right-hand limit.


![教材插图](/books/thomas-calculus/assets/3a0dd4c9cc288ec2e94eac94489c9aa2071a222cab7524674ed308148aa9912e.jpg)



FIGURE 2.30 Intervals associated with the definition of left-hand limit.


![教材插图](/books/thomas-calculus/assets/c02f0e7321ea97871cf2fa873dc3187fee2ef70b2307b5004116ce70416c6664.jpg)



FIGURE 2.31 $\lim_{x\to 0^{+}}\sqrt{x} = 0$ in Example 3.


$$
\begin{array}{l l} \text {   At   } x = 1: & \quad \lim _ {x \to 1 ^ {-}} \operatorname{arcsec} x \quad \text { does   not   exist, } \\ & \quad \lim _ {x \to 1 ^ {+}} \operatorname{arcsec} x = 0, \\ & \quad \lim _ {x \to 1} \operatorname{arcsec} x = 0. \end{array} \qquad \begin{array}{l l} \text {   arcsec   } x \text {   is   not   defined   on   } (- 1, 1). \\ \text {   arcsec   } x \text {   has   a   limit   from   the   right   at   } x = 1. \\ \text {   arcsec   } x \text {   has   a   limit   at   } x = 1. \end{array}
$$

At every $c$ in $(-\infty, -1)$ and every $c$ in $(1, \infty)$ , the limit of arcsec $x$ as $x \to c$ is equal to arcsec $c$ . However, for each $c$ in the interval $(-1, 1)$ , lim arcsec $x$ does not exist. 

### Precise Definitions of One-Sided Limits

The formal definition of the limit in Section 2.3 is readily modified for one-sided limits. 

> ***DEFINITIONS*** (a) Assume the domain of $f$ contains an interval $(c, d)$ to the right of $c$ . We say that $f(x)$ has right-hand limit $L$ at $c$ , and write 
>
> $$
> \lim _ {x \to c ^ {+}} f (x) = L
> $$
>
> if for every number $\varepsilon > 0$ there exists a corresponding number $\delta > 0$ such that 
>
> $$
> | f (x) - L | <   \varepsilon \quad \text { whenever } \quad c <   x <   c + \delta .
> $$
>
> (b) Assume the domain of $f$ contains an interval $(b, c)$ to the left of $c$ . We say that $f$ has left-hand limit $L$ at $c$ , and write 
>
> $$
> \lim _ {x \to c ^ {-}} f (x) = L
> $$
>
> if for every number $\varepsilon > 0$ there exists a corresponding number $\delta > 0$ such that 
>
> $$
> | f (x) - L | <   \varepsilon \quad \text { whenever } \quad c - \delta <   x <   c.
> $$
>
The definitions are illustrated in Figures 2.29 and 2.30. 

**EXAMPLE 3** Prove that

$$
\lim _ {x \to 0 ^ {+}} \sqrt {x} = 0.
$$

**Solution** Let $\varepsilon > 0$ be given. Here c = 0 and L = 0, so we want to find a $\delta > 0$ such that 

$$
\left| \sqrt {x} - 0 \right| <   \varepsilon \quad \text { whenever } \quad 0 <   x <   \delta ,
$$

or 

$$
\sqrt {x} <   \varepsilon \quad \text { whenever } \quad 0 <   x <   \delta . \quad \sqrt {x} \geq 0 \text { so } | \sqrt {x} | = \sqrt {x}
$$

Squaring both sides of this last inequality gives 

$$
x <   \varepsilon^ {2} \quad \text { if } \quad 0 <   x <   \delta .
$$

If we choose $\delta = \varepsilon^2$ we have 

$$
\sqrt {x} <   \varepsilon \quad \text { whenever } \quad 0 <   x <   \delta = \varepsilon^ {2},
$$

or 

$$
\left| \sqrt {x} - 0 \right| <   \varepsilon \quad \text { whenever } \quad 0 <   x <   \varepsilon^ {2}.
$$

According to the definition, this shows that $\lim_{x\to +}\sqrt{x} = 0$ (Figure 2.31). 

Note that since 0 is an endpoint of the domain where $\sqrt{x}$ is defined, it is also true that $\lim_{x\to 0}\sqrt{x} = 0$ . 

The functions examined so far have had some kind of limit at each point of interest. In general, that need not be the case. 

**EXAMPLE 4** Show that $y = \sin(1/x)$ has no limit as x approaches zero from either side (Figure 2.32). 

![教材插图](/books/thomas-calculus/assets/306f7698a9318d3e6050b222f1551fcb8a8b7d3008387120814d5a9e98ef2e19.jpg)



FIGURE 2.32 The function $y = \sin(1/x)$ has neither a right-hand nor a left-hand limit as x approaches zero (Example 4). The graph here omits values very near the y-axis.


**Solution** As x approaches zero, its reciprocal, 1/x, grows without bound, and the values of sin (1/x) cycle repeatedly from -1 to 1. There is no single number L that the function's values stay increasingly close to as x approaches zero. This is true even if we restrict x to positive values or to negative values. The function has neither a right-hand limit nor a left-hand limit at x = 0. 

### Limits Involving (sin θ)/θ

A central fact about $(\sin\theta)/\theta$ is that in radian measure its limit as $\theta \rightarrow 0$ is 1. We can see this in Figure 2.33 and confirm it algebraically using the Sandwich Theorem. You will see the importance of this limit in Section 3.5, where instantaneous rates of change of the trigonometric functions are studied. 

![教材插图](/books/thomas-calculus/assets/1f894dcc243fb0e68a38cb3c008ced869594892d5816fd16876985124c747fc0.jpg)



FIGURE 2.33 The graph of $f(\theta) = (\sin \theta)/\theta$ suggests that the right-and left-hand limits as $\theta$ approaches 0 are both 1.


THEOREM 6—Limit of the Ratio sin θ/θ as θ → 0 

$$
\lim _ {\theta \rightarrow 0} \frac {\sin \theta}{\theta} = 1 (\theta \text {   in   radians })\tag{1}
$$

![教材插图](/books/thomas-calculus/assets/77a215113d7b733648524ee1c17286943209023ae052a280ed8337eb4d0a58cb.jpg)



FIGURE 2.34 The ratio TA/OA = tan θ, and OA = 1, so TA = tan θ.


The use of radians to measure angles is essential in Equation (2): The area of sector OAP is $\theta/2$ only if $\theta$ is measured in radians. 

Proof The plan is to show that the right-hand and left-hand limits are both 1. Then we will know that the two-sided limit is 1 as well. 

To show that the right-hand limit is 1, we begin with positive values of $\theta$ less than $\pi /2$ (Figure 2.34). Notice that 

Thus, 

$$
\text { Area } \triangle O A P <   \text { area   sector } O A P <   \text { area } \triangle O A T.
$$

We can express these areas in terms of $\theta$ as follows: 

$$
\text { Area } \triangle O A P = \frac {1}{2} \text { base } \times \text { height } = \frac {1}{2} (1) (\sin \theta) = \frac {1}{2} \sin \theta
$$

$$
\text { Area   sector } O A P = \frac {1}{2} r ^ {2} \theta = \frac {1}{2} (1) ^ {2} \theta = \frac {\theta}{2}\tag{2}
$$

$$
\text { Area } \triangle O A T = \frac {1}{2} \text { base } \times \text { height } = \frac {1}{2} (1) (\tan \theta) = \frac {1}{2} \sin \theta .
$$

$$
\frac {1}{2} \sin \theta <   \frac {1}{2} \theta <   \frac {1}{2} \tan \theta .
$$

This last inequality goes the same way if we divide all three terms by the number $(1/2)\sin\theta$ , which is positive, since $0 < \theta < \pi/2$ : 

$$
1 <   \frac {\theta}{\sin \theta} <   \frac {1}{\cos \theta}.
$$

Taking reciprocals reverses the inequalities: 

$$
1 > \frac {\sin \theta}{\theta} > \cos \theta .
$$

Since $\lim_{\theta \to 0^{+}}\cos \theta = 1$ (Example 12b, Section 2.2), the Sandwich Theorem gives 

$$
\lim _ {\theta \rightarrow 0 ^ {+}} \frac {\sin \theta}{\theta} = 1.
$$

To consider the left-hand limit, we recall that $\sin\theta$ and $\theta$ are both odd functions (Section 1.1). Therefore, $f(\theta) = (\sin\theta)/\theta$ is an even function, with a graph symmetric about the y-axis (see Figure 2.33). This symmetry implies that the left-hand limit at 0 exists and has the same value as the right-hand limit: 

$$
\lim _ {\theta \rightarrow 0 ^ {-}} \frac {\sin \theta}{\theta} = 1 = \lim _ {\theta \rightarrow 0 ^ {+}} \frac {\sin \theta}{\theta},
$$

so $\lim_{\theta \to 0} (\sin \theta) / \theta = 1$ by Theorem 5. 

**EXAMPLE 5** Show that (a) $\lim_{y\to 0}\frac{\cos y - 1}{y} = 0$ and (b) $\lim_{x\to 0}\frac{\sin 2x}{5x} = \frac{2}{5}$ . 

**Solution** 

(a) Using the half-angle formula $\cos y = 1 - 2\sin^2 (y / 2)$ , we calculate 

$$
\begin{array}{l l}\lim _ {y \rightarrow 0} \frac {\cos y - 1}{y} = \lim _ {y \rightarrow 0} - \frac {2 \sin^ {2} (y / 2)}{y}\\= - \lim _ {\theta \rightarrow 0} \frac {\sin \theta}{\theta} \sin \theta&\text {   Let   } \theta = y / 2.\\= - (1) (0) = 0.&\text {   Eq.   (1)   and   Example   12a   in   Section   2.2   }\end{array}
$$

(b) Equation (1) does not apply to the original fraction. We need a 2x in the denominator, not a 5x. We produce it by multiplying numerator and denominator by 2/5: 

$$
\begin{array}{r l} \lim _ {x \to 0} \frac {\sin 2 x}{5 x} & = \lim _ {x \to 0} \frac {(2 / 5) \cdot \sin 2 x}{(2 / 5) \cdot 5 x} \\ & = \frac {2}{5} \lim _ {x \to 0} \frac {\sin 2 x}{2 x} \\ & = \frac {2}{5} (1) = \frac {2}{5}. \end{array}
$$

Eq. (1) applies with $\theta = 2x$ . 

**EXAMPLE 6** Find $\lim_{t\to0}\frac{\tan t\sec2t}{3t}$ . 

**Solution** From the definition of tan t and sec 2t, we have 

$$
\begin{array}{r l} \lim _ {t \to 0} \frac {\tan t \sec 2 t}{3 t} & = \lim _ {t \to 0} \frac {1}{3} \cdot \frac {1}{t} \cdot \frac {\sin t}{\cos t} \cdot \frac {1}{\cos 2 t} \\ & = \frac {1}{3} \lim _ {t \to 0} \frac {\sin t}{t} \cdot \frac {1}{\cos t} \cdot \frac {1}{\cos 2 t} \\ & = \frac {1}{3} (1) (1) (1) = \frac {1}{3}. \end{array}
$$

Eq. (1) and Example 12b in Section 2.2 

**EXAMPLE 7** Show that for nonzero constants A and B. 

$$
\lim _ {\theta \rightarrow 0} \frac {\sin A \theta}{\sin B \theta} = \frac {A}{B}.
$$

**Solution** 

$$
\begin{array}{l l}\lim _ {\theta \rightarrow 0} \frac {\sin A \theta}{\sin B \theta} = \lim _ {\theta \rightarrow 0} \frac {\sin A \theta}{A \theta} A \theta \frac {B \theta}{\sin B \theta} \frac {1}{B \theta}&\text {Multiply and divide by } A \theta \text {and} B \theta\\= \lim _ {\theta \rightarrow 0} \frac {\sin A \theta}{A \theta} \frac {B \theta}{\sin B \theta} \frac {A}{B}&\lim _ {u \rightarrow 0} \frac {\sin u}{u} = 1, \text {with} u = A \theta\\= \lim _ {\theta \rightarrow 0} (1) (1) \frac {A}{B}&\lim _ {v \rightarrow 0} \frac {v}{\sin v} = 1, \text {with} v = B \theta\\= \frac {A}{B}.\end{array}
$$

### EXERCISES 2.4

Finding Limits Graphically 

1. Which of the following statements about the function $y = f(x)$ graphed here are true, and which are false? 

![教材插图](/books/thomas-calculus/assets/8422632fd220d819c00a48a89acb65becb751327ea66c4fc7ffe429661b39614.jpg)


a. $\lim_{x\to -1^{+}}f(x) = 1$ b. $\lim_{x\to 0^{-}}f(x) = 0$ 

2. Which of the following statements about the function $y = f(x)$ graphed here are true, and which are false? 

c. $\lim_{x\to 0^{-}}f(x) = 1$ d. $\lim_{x\to 0^{-}}f(x) = \lim_{x\to 0^{+}}f(x)$ 

e. $\lim_{x\to0}f(x)$ exists. 

f. $\lim_{x\to0}f(x)=0$ 

g. $\lim_{x\to0}f(x)=1$ 

h. $\lim_{x\to1}f(x)=1$ 

i. $\lim_{x\to1}f(x)=0$ 

j. $\lim_{x\to 2^{-}}f(x) = 2$ 

k. $\lim_{x\to-1^{-}}f(x)$ does not exist. l. $\lim_{x\to2^{+}}f(x)=0$ 

![教材插图](/books/thomas-calculus/assets/8499781334a44a07c269b0133ae2b46ea29afdb1f2964326ce074e8a94d8bfcf.jpg)


a. $\lim_{x\to -1^{+}}f(x) = 1$ b. $\lim_{x\to 2}f(x)$ does not exist. 

c. $\lim_{x\to2}f(x)=2$ 

d. $\lim_{x\to 1^{-}}f(x) = 2$ 

e. $\lim_{x\to 1^{+}}f(x) = 1$ f. $\lim_{x\to 1}f(x)$ does not exist. 

g. $\lim_{x\to0^{+}}f(x)=\lim_{x\to0^{-}}f(x)$ 

h. $\lim_{x\to c}f(x)$ exists at every c in the open interval $(-1,1)$ . 

i. $\lim_{x\to c}f(x)$ exists at every c in the open interval (1,3). 

j. $\lim_{x\to-1^{-}}f(x)=0$ k. $\lim_{x\to3^{+}}f(x)$ does not exist. 

3. Let $f(x) = \left\{ \begin{array}{ll} 3 - x, & x < 2 \\ \frac{x}{2} + 1, & x > 2. \end{array} \right.$ 

![教材插图](/books/thomas-calculus/assets/ec24d833e1e570c9fa568ce887e002fec250a6a56fbc1150d931a2cb05be2ccc.jpg)


a. Find $\lim_{x\to2^{+}}f(x)$ and $\lim_{x\to2^{-}}f(x)$ . 

b. Does $\lim_{x\to2}f(x)$ exist? If so, what is it? If not, why not? 

c. Find $\lim_{x\to4^{-}}f(x)$ and $\lim_{x\to4^{+}}f(x)$ . 

d. Does $\lim_{x\to4}f(x)$ exist? If so, what is it? If not, why not? 

4. Let $f(x) = \begin{cases} 3 - x, & x < 2 \\ 2, & x = 2 \\ \frac{x}{2}, & x > 2. \end{cases}$ 

![教材插图](/books/thomas-calculus/assets/3b4e1630cb91a541cae9e92abe7653fe9ed0671bfe293d9940d5f83caf1d4bb5.jpg)


a. Find $\lim_{x\to2^{+}}f(x)$ , $\lim_{x\to2^{-}}f(x)$ , and $f(2)$ . 

b. Does $\lim_{x\to 2}f(x)$ exist? If so, what is it? If not, why not? 

c. Find $\lim_{x\to-1^{-}}f(x)$ and $\lim_{x\to-1^{+}}f(x)$ . 

d. Does $\lim_{x\to-1}f(x)$ exist? If so, what is it? If not, why not? 

5. Let $f(x) = \left\{ \begin{array}{ll} 0, & x \leq 0 \\ \sin \frac{1}{x}, & x > 0. \end{array} \right.$ 

![教材插图](/books/thomas-calculus/assets/477d9e797e9f4e0430695f305ac0db9dd439a7f482cfc65837fe87474173762c.jpg)


a. Does $\lim_{x\to0^{+}}f(x)$ exist? If so, what is it? If not, why not? 

b. Does $\lim_{x\to 0^{-}}f(x)$ exist? If so, what is it? If not, why not? 

c. Does $\lim_{x\to 0}f(x)$ exist? If so, what is it? If not, why not? 

6. Let $g(x) = \sqrt{x}\sin (1 / x)$ . 

![教材插图](/books/thomas-calculus/assets/5c486fa923334d679a1bc29f11246879c99ead94fe81238d8d065b003dee405c.jpg)


a. Does $\lim_{x\to 0^{+}}g(x)$ exist? If so, what is it? If not, why not? 

b. Does $\lim_{x\to 0^{-}}g(x)$ exist? If so, what is it? If not, why not? 

c. Does $\lim_{x\to0}g(x)$ exist? If so, what is it? If not, why not? 

7. a. Graph $f(x) = \begin{cases} x^3, & x \neq 1 \\ 0, & x = 1. \end{cases}$ 

b. Find $\lim_{x\to1^{-}}f(x)$ and $\lim_{x\to1^{+}}f(x)$ . 

c. Does $\lim_{x\to1}f(x)$ exist? If so, what is it? If not, why not? 

8. a. Graph $f(x) = \begin{cases} 1 - x^2, & x \neq 1 \\ 2, & x = 1. \end{cases}$ 

b. Find $\lim_{x\to 1^{+}}f(x)$ and $\lim_{x\to 1^{-}}f(x)$ . 

c. Does $\lim_{x\to1}f(x)$ exist? If so, what is it? If not, why not? 

Graph the functions in Exercises 9 and 10. Then answer these questions. 

a. What are the domain and range of $f$ ? 

b. At what points $c$ , if any, does $\lim_{x\to c}f(x)$ exist? 

c. At what points does the left-hand limit exist but not the right-hand limit? 

d. At what points does the right-hand limit exist but not the left-hand limit? 

$$
f (x) = \left\{ \begin{array}{l l} \sqrt {1 - x ^ {2}}, & 0 \leq x <   1 \\ 1, & 1 \leq x <   2 \\ 2, & x = 2 \end{array} \right.
$$

$$
f (x) = \left\{ \begin{array}{l l} x, & - 1 \leq x <   0, \text { or } 0 <   x \leq 1 \\ 1, & x = 0 \\ 0, & x <   - 1 \text { or } x > 1 \end{array} \right.
$$

Finding One-Sided Limits Algebraically Find the limits in Exercises 11–20. 

11. $\lim_{x\to-0.5^{-}}\sqrt{\frac{x+2}{x+1}}$ 

12. $\lim_{x\to1^{+}}\sqrt{\frac{x-1}{x+2}}$ 

13. $\lim_{x\to -2^{+}}\left(\frac{x}{x + 1}\right)\left(\frac{2x + 5}{x^2 + x}\right)$ 

14. $\lim_{x\to 1^{-}}\left(\frac{1}{x + 1}\right)\left(\frac{x + 6}{x}\right)\left(\frac{3 - x}{7}\right)$ 

15. $\lim_{h\to 0^{+}}\frac{\sqrt{h^2 + 4h + 5} - \sqrt{5}}{h}$ 

16. $\lim_{h\to 0^{-}}\frac{\sqrt{6} - \sqrt{5h^2 + 11h + 6}}{h}$ 

17. a. $\lim_{x\to -2^{+}}(x + 3)\frac{|x + 2|}{x + 2}$ b. $\lim_{x\to -2^{-}}(x + 3)\frac{|x + 2|}{x + 2}$ 

18. a. $\lim_{x\to1^{+}}\frac{\sqrt{2x}(x-1)}{|x-1|}$ 

b. $\lim_{x\to 1^{-}}\frac{\sqrt{2x} (x - 1)}{|x - 1|}$ 

19. a. $\lim_{x\to0^{+}}\frac{|\sin x|}{x}$ 

b. $\lim_{x\to0^{-}}\frac{|\sin x|}{x}$ 

20. a. $\lim_{x\to0^{+}}\frac{1-\cos x}{|\cos x-1|}$ 

b. $\lim_{x\to0^{-}}\frac{\cos x-1}{|\cos x-1|}$ 

Use the graph of the greatest integer function $y = \lfloor x \rfloor$ , Figure 1.10 in Section 1.1, to help you find the limits in Exercises 21 and 22. 

21. a. $\lim_{\theta \to 3^{+}}\frac{\lfloor\theta\rfloor}{\theta}$ 

$$
\lim _ {\theta \rightarrow 3 ^ {-}} \frac {\lfloor \theta \rfloor}{\theta}
$$

22. a. $\lim_{t\to 4^{+}}(t - \lfloor t\rfloor)$ b. $\lim_{t\to 4^{-}}(t - \lfloor t\rfloor)$ 

Using $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$ 

Find the limits in Exercises 23–46. 

23. $\lim_{\theta \to 0}\frac{\sin\sqrt{2}\theta}{\sqrt{2}\theta}$

24. $\lim_{t\to 0}\frac{\sin kt}{t}$ (k constant)

25. $\lim_{y\to 0}\frac{\sin{3}y}{4y}$ 

26. $\lim_{h\to 0^{-}}\frac{h}{\sin{3}h}$ 

27. $\lim_{x\to 0}\frac{\tan{2}x}{x}$ 

28. $\lim_{t\to 0}\frac{2t}{\tan{t}}$ 

29. $\lim_{x\to 0}\frac{x\csc{2}x}{\cos{5}x}$ 

30. $\lim_{x\to 0}6x^{2}(\cot x)(\csc 2x)$ 

31. $\lim_{x\to 0}\frac{x + x\cos x}{\sin x\cos x}$ 

32. $\lim_{x\to 0}\frac{x^2 - x + \sin x}{2x}$ 

33. $\lim_{\theta \to 0}\frac{1 - \cos\theta}{\sin2\theta}$ 

34. $\lim_{x\to 0}\frac{x - x\cos x}{\sin^23x}$ 

35. $\lim_{t\to 0}\frac{\sin(1 - \cos t)}{1 - \cos t}$ 

36. $\lim_{h\to 0}\frac{\sin(\sin h)}{\sin h}$ 

37. $\lim_{\theta \to 0}\frac{\sin\theta}{\sin2\theta}$ 

38. $\lim_{x\to 0}\frac{\sin5x}{\sin4x}$ 

39. $\lim_{\theta \to 0}\theta \cos \theta$ 

40. $\lim_{\theta \to 0}\sin \theta \cot 2\theta$ 

41. $\lim_{x\to 0}\frac{\tan{3}x}{\sin{8}x}$ 

42. $\lim_{y\to 0}\frac{\sin{3y}\cot{5y}}{y\cot{4y}}$ 

43. $\lim_{\theta \to 0}\frac{\tan\theta}{\theta^2\cot 3\theta}$ 

44. $\lim_{\theta \to 0}\frac{\theta\cot{4\theta}}{\sin^2\theta\cot^22\theta}$ 

45. $\lim_{x\to 0}\frac{1 - \cos{3}x}{2x}$ 

46. $\lim_{x\to 0}\frac{\cos^2x - \cos x}{x^2}$ 

#### Theory and Examples

47. Once you know $\lim_{x\to a^{+}}f(x)$ and $\lim_{x\to a^{-}}f(x)$ at an interior point of the domain of f, do you then know $\lim_{x\to a}f(x)$ ? Give reasons for your answer. 

48. If you know that $\lim_{x\to c}f(x)$ exists at an interior point of a domain interval of f, can you find its value by calculating $\lim_{x\to c^{+}}f(x)$ ? Give reasons for your answer. 

49. Suppose that $f$ is an odd function of $x$ . Does knowing that $\lim_{x\to 0^{+}}f(x) = 3$ tell you anything about $\lim_{x\to 0^{-}}f(x)$ ? Give reasons for your answer. 

50. Suppose that $f$ is an even function of $x$ . Does knowing that $\lim_{x\to 2^{-}}f(x) = 7$ tell you anything about either $\lim_{x\to -2^{-}}f(x)$ or $\lim_{x\to -2^{+}}f(x)$ ? Give reasons for your answer. 

#### Formal Definitions of One-Sided Limits

51. Given $\varepsilon > 0$ , find an interval $I = (5, 5 + \delta)$ , $\delta > 0$ , such that if $x$ lies in $I$ , then $\sqrt{x - 5} < \varepsilon$ . What limit is being verified and what is its value? 

52. Given $\varepsilon > 0$ , find an interval $I = (4 - \delta, 4)$ , $\delta > 0$ , such that if $x$ lies in $I$ , then $\sqrt{4 - x} < \varepsilon$ . What limit is being verified and what is its value? 

Use the definitions of right-hand and left-hand limits to prove the limit statements in Exercises 53 and 54. 

53. $\lim_{x\to 0^{-}}\frac{x}{|x|} = -1$

54. $\lim_{x\to 2^{+}}\frac{x - 2}{|x - 2|} = 1$

55. Greatest integer function Find (a) $\lim_{x\to 400^{+}}\lfloor x\rfloor$ and (b) $\lim_{x\to 400^{-}}\lfloor x\rfloor$ ; then use limit definitions to verify your findings. (c) Based on your conclusions in parts (a) and (b), can you say anything about $\lim_{x\to 400}\lfloor x\rfloor$ ? Give reasons for your answer. 

56. One-sided limits Let $f(x) = \begin{cases} x^2\sin (1 / x), & x < 0 \\ \sqrt{x}, & x > 0. \end{cases}$ Find (a) $\lim_{x\to 0^{+}}f(x)$ and (b) $\lim_{x\to 0^{-}}f(x)$ ; then use limit definitions to verify your findings. (c) Based on your conclusions in parts (a) and (b), can you say anything about $\lim_{x\to 0}f(x)$ ? Give reasons for your answer. 

## 2.5 Limits Involving Infinity; Asymptotes of Graphs

In this section we investigate the behavior of a function when the magnitude of the independent variable x becomes increasingly large, or $x \rightarrow \pm\infty$ . We further extend the concept of limit to infinite limits. Infinite limits provide useful symbols and language for describing the behavior of functions whose values become arbitrarily large in magnitude. We use these ideas to analyze the graphs of functions having horizontal or vertical asymptotes. 

![教材插图](/books/thomas-calculus/assets/16079b906e0751a0afaa62820ffeadf71c268a06538a38ad908d284fa9f7a9f4.jpg)



FIGURE 2.35 The graph of $y = 1 / x$ approaches 0 as $x \to \infty$ or $x \to -\infty$ .


![教材插图](/books/thomas-calculus/assets/e8ef2cdda20894d20aabe148c06ca9e6aafcefb0f4e7c2298d5f5e7462c008d9.jpg)



FIGURE 2.36 The geometry behind the argument in Example 1.


### Finite Limits as $x \rightarrow \pm\infty$

The symbol for infinity $(\infty)$ does not represent a real number. We use $\infty$ to describe the behavior of a function when the values in its domain or range outgrow all finite bounds. For example, the function $f(x) = 1/x$ is defined for all $x \neq 0$ (Figure 2.35). When x is positive and becomes increasingly large, 1/x becomes increasingly small. When x is negative and its magnitude becomes increasingly large, 1/x again becomes small. We summarize these observations by saying that $f(x) = 1/x$ has limit 0 as $x \to \infty$ or $x \to -\infty$ , or that 0 is a limit of $f(x) = 1/x$ at infinity and at negative infinity. Here are precise definitions for the limit of a function whose domain contains positive or negative numbers of unbounded magnitude. 

> ## ***DEFINITIONS***
>
> 1. We say that $f(x)$ has the limit $L$ as $x$ approaches infinity and write 
>
> $$
> \lim _ {x \to \infty} f (x) = L
> $$
>
> if, for every number $\varepsilon > 0$ , there exists a corresponding number $M$ such that for all $x$ in the domain of $f$ 
>
> $$
> | f (x) - L | <   \varepsilon \quad \text { whenever } \quad x > M.
> $$
>
> 2. We say that $f(x)$ has the limit L as x approaches negative infinity and write 
>
> $$
> \lim _ {x \to - \infty} f (x) = L
> $$
>
> if, for every number $\varepsilon > 0$ , there exists a corresponding number $N$ such that for all $x$ in the domain of $f$ 
>
> $$
> | f (x) - L | <   \varepsilon \quad \text { whenever } \quad x <   N.
> $$
>
Intuitively, $\lim_{x\to\infty}f(x)=L$ if, as x moves increasingly far from the origin in the positive direction, $f(x)$ gets arbitrarily close to L. Similarly, $\lim_{x\to-\infty}f(x)=L$ if, as x moves increasingly far from the origin in the negative direction, $f(x)$ gets arbitrarily close to L. 

The strategy for calculating limits of functions as $x \rightarrow +\infty$ or as $x \rightarrow -\infty$ is similar to the one for finite limits in Section 2.2. There we first found the limits of the constant and identity functions y = k and y = x. We then extended these results to other functions by applying Theorem 1 on limits of algebraic combinations. Here we do the same thing, except that the starting functions are y = k and y = 1/x instead of y = k and y = x. 

The basic facts to be verified by applying the formal definition are 

$$
\lim _ {x \to \pm \infty} k = k \quad \text { and } \quad \lim _ {x \to \pm \infty} \frac {1}{x} = 0.\tag{1}
$$

We prove the second result in Example 1, and leave the first to Exercises 93 and 94. 

**EXAMPLE 1** Show that

$$
\text {(a)} \lim _ {x \rightarrow \infty} \frac {1}{x} = 0
$$

$$
\text {(b)} \lim _ {x \rightarrow - \infty} \frac {1}{x} = 0.
$$

**Solution**

(a) Let $\varepsilon > 0$ be given. We must find a number $M$ such that 

$$
\left| \frac {1}{x} - 0 \right| = \left| \frac {1}{x} \right| <   \varepsilon \quad \text { whenever } \quad x > M.
$$

The implication will hold if $M = 1 / \varepsilon$ or any larger positive number (Figure 2.36). This proves $\lim_{x\to \infty}(1 / x) = 0$ . 

(a) 

(a) 

(b) Let $\varepsilon > 0$ be given. We must find a number $N$ such that 

$$
\left| \frac {1}{x} - 0 \right| = \left| \frac {1}{x} \right| <   \varepsilon \quad \text { whenever } \quad x <   N.
$$

The implication will hold if $N = -1 / \varepsilon$ or any number less than $-1 / \varepsilon$ (Figure 2.36). This proves $\lim_{x\to -\infty}(1 / x) = 0$ . 

Limits at infinity have properties similar to those of finite limits. 

**THEOREM 7**

All the Limit Laws in Theorem 1 are true when we replace $\lim_{x\to c}$ by $\lim_{x\to \infty}$ or $\lim_{x\to -\infty}$ . That is, the variable $x$ may approach a finite number $c$ or $\pm \infty$ . 

**EXAMPLE 2** The properties in Theorem 7 are used to calculate limits in the same way as when x approaches a finite number c. 

$$
\begin{array}{r l} \lim _ {x \to \infty} \left(5 + \frac {1}{x}\right) & = \lim _ {x \to \infty} 5 + \lim _ {x \to \infty} \frac {1}{x} \\ & = 5 + 0 = 5 \end{array}
$$

Sum Rule 

Known limits 

$$
\begin{array}{l l}\text {(b)} \lim _ {x \rightarrow - \infty} \frac {\pi \sqrt {3}}{x ^ {2}} = \lim _ {x \rightarrow - \infty} \pi \sqrt {3} \cdot \frac {1}{x} \cdot \frac {1}{x}\\&= \lim _ {x \rightarrow - \infty} \pi \sqrt {3} \cdot \lim _ {x \rightarrow - \infty} \frac {1}{x} \cdot \lim _ {x \rightarrow - \infty} \frac {1}{x}\\&= \pi \sqrt {3} \cdot 0 \cdot 0 = 0\end{array}\quad \text { Product   Rule } \quad \text { Known   limits }
$$

![教材插图](/books/thomas-calculus/assets/b19143ee354a57e74eff8e8b80083bfff867785c4927aaee7c79dd78aa4c9d10.jpg)



FIGURE 2.37 The graph of the function in Example 3a. The graph approaches the line y = 5/3 as |x| increases.


### Limits at Infinity of Rational Functions

To determine the limit of a rational function as $x \rightarrow \pm\infty$ , we first divide the numerator and denominator by the highest power of x in the denominator. The result then depends on the degrees of the polynomials involved. 

**EXAMPLE 3** These examples illustrate what happens when the degree of the numerator is less than or equal to the degree of the denominator. 

$$
\begin{array}{l l}\text {) } \lim _ {x \rightarrow \infty} \frac {5 x ^ {2} + 8 x - 3}{3 x ^ {2} + 2} = \lim _ {x \rightarrow \infty} \frac {5 + (8 / x) - (3 / x ^ {2})}{3 + (2 / x ^ {2})}&\text { Divide   numerator   and }\\= \frac {5 + 0 - 0}{3 + 0} = \frac {5}{3}&\text { See   Fig.2.37. }\end{array}
$$

$$
\begin{array}{r l} \text {(b)} & \lim _ {x \to - \infty} \frac {1 1 x + 2}{2 x ^ {3} - 1} = \lim _ {x \to - \infty} \frac {\left(1 1 / x ^ {2}\right) + \left(2 / x ^ {3}\right)}{2 - \left(1 / x ^ {3}\right)} \\ & = \frac {0 + 0}{2 - 0} = 0 \end{array} \quad \text {   Divide   numerator   and   denominator   by   } x ^ {3}. \tag {SeeFig.2.38.}
$$

Cases for which the degree of the numerator is greater than the degree of the denominator are illustrated in Examples 10 and 14. 

### Horizontal Asymptotes

If the distance between the graph of a function and some fixed line approaches zero as a point on the graph moves increasingly far from the origin, we say that the graph approaches the line asymptotically and that the line is an asymptote of the graph. 

![教材插图](/books/thomas-calculus/assets/ca945829d269c29437cea784948a60e184ed4b4ee1f22889ac5b1a28e07b7fd3.jpg)



FIGURE 2.38 The graph of the function in Example 3b. The graph approaches the x-axis as $|x|$ increases.


![教材插图](/books/thomas-calculus/assets/cc57be863098d0b022189f840aa9a0208c00ab110fe36bdd764fff0b1055f5aa.jpg)



FIGURE 2.39 The graph of the function in Example 4 has two horizontal asymptotes.


Looking at $f(x) = 1/x$ (see Figure 2.35), we observe that the x-axis is an asymptote of the curve on the right because 

$$
\lim _ {x \to \infty} \frac {1}{x} = 0
$$

and on the left because 

$$
\lim _ {x \to - \infty} \frac {1}{x} = 0.
$$

We say that the x-axis is a horizontal asymptote of the graph of $f(x) = 1/x$ . 

> ***DEFINITION*** A line $y = b$ is a horizontal asymptote of the graph of a function $y = f(x)$ if either 
>
> $$
> \lim _ {x \to \infty} f (x) = b \quad \text { or } \quad \lim _ {x \to - \infty} f (x) = b.
> $$
>
The graph of a function can have zero, one, or two horizontal asymptotes, depending on whether the function has limits as $x \rightarrow \infty$ and as $x \rightarrow -\infty$ . 

The graph of the function 

$$
f (x) = \frac {5 x ^ {2} + 8 x - 3}{3 x ^ {2} + 2}
$$

sketched in Figure 2.37 (Example 3a) has the line y = 5/3 as a horizontal asymptote on both the right and the left because 

$$
\lim _ {x \to \infty} f (x) = \frac {5}{3} \quad \text { and } \quad \lim _ {x \to - \infty} f (x) = \frac {5}{3}.
$$

**EXAMPLE 4** Find the horizontal asymptotes of the graph of 

$$
f (x) = \frac {x ^ {3} - 2}{| x | ^ {3} + 1}.
$$

**Solution** We calculate the limits as $x \rightarrow \pm\infty$ . 

$$
\text { For } x > 0: \lim _ {x \rightarrow \infty} \frac {x ^ {3} - 2}{| x | ^ {3} + 1} = \lim _ {x \rightarrow \infty} \frac {x ^ {3} - 2}{x ^ {3} + 1} = \lim _ {x \rightarrow \infty} \frac {1 - (2 / x ^ {3})}{1 + (1 / x ^ {3})} = 1.
$$

$$
\text { For } x <   0: \lim _ {x \rightarrow - \infty} \frac {x ^ {3} - 2}{| x | ^ {3} + 1} = \lim _ {x \rightarrow - \infty} \frac {x ^ {3} - 2}{(- x) ^ {3} + 1} = \lim _ {x \rightarrow - \infty} \frac {1 - (2 / x ^ {3})}{- 1 + (1 / x ^ {3})} = - 1.
$$

The horizontal asymptotes are y = -1 and y = 1. The graph is displayed in Figure 2.39. Notice that the graph crosses the horizontal asymptote y = -1 for a positive value of x. 

**EXAMPLE 5** The x-axis (the line y = 0) is a horizontal asymptote of the graph of $y = e^{x}$ because 

$$
\lim _ {x \to - \infty} e ^ {x} = 0.
$$

To see this, we use the definition of a limit as $x$ approaches $-\infty$ . So let $\varepsilon > 0$ be given, but arbitrary. We must find a constant $N$ such that 

$$
\left| e ^ {x} - 0 \right| <   \varepsilon \quad \text { whenever } \quad x <   N.
$$

Now $|e^x - 0| = e^x$ , so the condition that needs to be satisfied whenever $x < N$ is 

$$
e ^ {x} <   \varepsilon .
$$

![教材插图](/books/thomas-calculus/assets/d93a09ff94afcf3351438543c9b376132c8241d887401ce2a0b9ec36351813b2.jpg)



FIGURE 2.40 The graph of $y = e^{x}$ approaches the x-axis as $x \rightarrow -\infty$ (Example 5).


![教材插图](/books/thomas-calculus/assets/08f83fa5aab38100dfbc18355274937c1d9624ed10e7ef40657bf6751c37e1bf.jpg)



FIGURE 2.41 The line y = 1 is a horizontal asymptote of the function graphed here (Example 6b).


![教材插图](/books/thomas-calculus/assets/7c46554f38658e2f113db512fd1f151f6f1dc01246e10b5ed76c6c9f6bbb2ac7.jpg)



FIGURE 2.42 The graph of $y = e^{1 / x}$ for $x < 0$ shows $\lim_{x\to 0^{-}}e^{1 / x} = 0$ (Example 7).


Let $x = N$ be the number where $e^x = \varepsilon$ . Since $e^x$ is an increasing function, if $x < N$ , then $e^x < \varepsilon$ . We find $N$ by taking the natural logarithm of both sides of the equation $e^N = \varepsilon$ , so $N = \ln \varepsilon$ (see Figure 2.40). With this value of $N$ the condition is satisfied, and we conclude that $\lim_{x \to \infty} e^x = 0$ . 

Sometimes it is helpful to transform a limit in which x approaches $\infty$ to a new limit by setting t = 1/x and seeing what happens as t approaches 0. 

**EXAMPLE 6** Find (a) $\lim_{x\to\infty}\sin(1/x)$ and (b) $\lim_{x\to\pm\infty}x\sin(1/x)$ . 

**Solution** 

(a) We introduce the new variable $t = 1 / x$ . From Example 1, we know that $t \to 0^{+}$ as $x \to \infty$ (see Figure 2.35). Therefore, 

$$
\lim _ {x \rightarrow \infty} \sin \frac {1}{x} = \lim _ {t \rightarrow 0 ^ {+}} \sin t = 0.
$$

(b) We calculate the limits as $x \rightarrow \infty$ and $x \rightarrow -\infty$ : 

$$
\lim _ {x \rightarrow \infty} x \sin \frac {1}{x} = \lim _ {t \rightarrow 0 ^ {+}} \frac {\sin t}{t} = 1 \quad \text { and } \quad \lim _ {x \rightarrow - \infty} x \sin \frac {1}{x} = \lim _ {t \rightarrow 0 ^ {-}} \frac {\sin t}{t} = 1.
$$

The graph is shown in Figure 2.41, and we see that the line $y = 1$ is a horizontal asymptote. 

Similarly, we can investigate the behavior of $y = f(1 / x)$ as $x \to 0$ by investigating $y = f(t)$ as $t \to \pm \infty$ , where $t = 1 / x$ . 

**EXAMPLE 7** 

$$
\text { Find } \lim _ {x \to 0 ^ {-}} e ^ {1 / x}.
$$

**Solution** We let $t = 1 / x$ . From Figure 2.35, we can see that $t \to -\infty$ as $x \to 0^{-}$ . (We make this idea more precise further on.) Therefore, 

$$
\lim _ {x \to 0 ^ {-}} e ^ {1 / x} = \lim _ {t \to - \infty} e ^ {t} = 0 \quad \text {   Example   5   }
$$

(Figure 2.42). 

The Sandwich Theorem also holds for limits as $x \rightarrow \pm\infty$ . You must be sure, though, that the function whose limit you are trying to find stays between the bounding functions for all very large x in the positive direction (if $x \rightarrow \infty$ ) or all very large x in the negative direction (if $x \rightarrow -\infty$ ). 

**EXAMPLE 8** Using the Sandwich Theorem, find the horizontal asymptote of the curve 

$$
y = 2 + \frac {\sin x}{x}.
$$

**Solution** We are interested in the behavior as $x \rightarrow \pm\infty$ . Since 

$$
0 \leq \left| \frac {\sin x}{x} \right| \leq \left| \frac {1}{x} \right|
$$

![教材插图](/books/thomas-calculus/assets/091197586fd7cd0d3b630262d0727c221d8205682c0e49fd14e6751e0b2ae7d4.jpg)



FIGURE 2.43 A curve may cross one of its asymptotes infinitely often (Example 8).



FIGURE 2.44 The graph of the function in Example 10 has an oblique asymptote.


and $\lim_{x\to\pm\infty}|1/x|=0$ , we have $\lim_{x\to\pm\infty}(\sin x)/x=0$ by the Sandwich Theorem. Hence, 

![教材插图](/books/thomas-calculus/assets/8cb80eaf261f17729990b349ed7126e03e235e3222895a404ced8ae3133df468.jpg)


$$
\lim _ {x \to \pm \infty} \left(2 + \frac {\sin x}{x}\right) = 2 + 0 = 2,
$$

and the line y = 2 is a horizontal asymptote of the curve on both left and right (Figure 2.43). 

This example illustrates that a curve may cross one of its horizontal asymptotes many times. 

$$
\text { **EXAMPLE   9** } \quad \text { Find } \lim _ {x \to \infty} \left(x - \sqrt {x ^ {2} + 1 6}\right).
$$

**Solution** Both of the terms x and $\sqrt{x^{2} + 16}$ approach infinity as $x \to \infty$ , so what happens to the difference in the limit is unclear (we cannot subtract $\infty$ from $\infty$ because the symbol does not represent a real number). In this situation we can multiply the numerator and the denominator by the conjugate radical expression to obtain an equivalent algebraic expression: 

$$
\begin{array}{c} \lim _ {x \to \infty} \left(x - \sqrt {x ^ {2} + 1 6}\right) = \lim _ {x \to \infty} \left(x - \sqrt {x ^ {2} + 1 6}\right) \frac {x + \sqrt {x ^ {2} + 1 6}}{x + \sqrt {x ^ {2} + 1 6}} \\ = \lim _ {x \to \infty} \frac {x ^ {2} - (x ^ {2} + 1 6)}{x + \sqrt {x ^ {2} + 1 6}} = \lim _ {x \to \infty} \frac {- 1 6}{x + \sqrt {x ^ {2} + 1 6}}. \end{array}
$$

As $x \rightarrow \infty$ , the denominator in this last expression becomes arbitrarily large, while the numerator remains constant, so we see that the limit is 0. We can also obtain this result by a direct calculation using the Limit Laws: 

$$
\lim _ {x \rightarrow \infty} \frac {- 1 6}{x + \sqrt {x ^ {2} + 1 6}} = \lim _ {x \rightarrow \infty} \frac {- \frac {1 6}{x}}{1 + \sqrt {\frac {x ^ {2}}{x ^ {2}} + \frac {1 6}{x ^ {2}}}} = \frac {0}{1 + \sqrt {1 + 0}} = 0.
$$

### Oblique Asymptotes

If the degree of the numerator of a rational function is 1 greater than the degree of the denominator, the graph has an oblique or slant line asymptote. We find an equation for the asymptote by dividing numerator by denominator to express f as a linear function plus a remainder that goes to zero as $x \rightarrow \pm\infty$ . 

**EXAMPLE 10** Find the oblique asymptote of the graph of 

$$
f (x) = \frac {x ^ {2} - 3}{2 x - 4}
$$

in Figure 2.44. 

**Solution** We are interested in the behavior as $x \rightarrow \pm\infty$ . We divide $(2x - 4)$ into $(x^{2} - 3)$ : 

$$
\begin{array}{c} \frac {x}{2} + 1 \\ 2 x - 4 \overline {{) x ^ {2} + 0 x - 3}} \\ \underline {{x ^ {2} - 2 x}} \\ 2 x - 3 \\ \underline {{2 x - 4}} \\ 1 \end{array}
$$

![教材插图](/books/thomas-calculus/assets/d7f8d8f7c9e80fa399bcdc9fb7a9b412e18ab35d6472ba1e59f384a58a90b2f6.jpg)



FIGURE 2.45 One-sided infinite limits:


$$
\lim _ {x \to 0 ^ {+}} \frac {1}{x} = \infty \quad \text { and } \quad \lim _ {x \to 0 ^ {-}} \frac {1}{x} = - \infty .
$$

![教材插图](/books/thomas-calculus/assets/b1c34bfb13e885be5a6fe8179875ed6f17cf81a5c73c4c3a2ba7f1bf5c884c18.jpg)



FIGURE 2.46 Near x = 1, the function $y = 1/(x - 1)$ behaves the way the function $y = 1/x$ behaves near x = 0. Its graph is the graph of $y = 1/x$ shifted 1 unit to the right (Example 11).


This tells us that 

$$
f (x) = \frac {x ^ {2} - 3}{2 x - 4} = \left(\underbrace {\frac {x}{2} + 1} _ {\text { linear } g (x)}\right) + \left(\underbrace {\frac {1}{2 x - 4}} _ {\text { remainder }}\right)
$$

As $x \rightarrow \pm\infty$ , the remainder, whose magnitude gives the vertical distance between the graphs of f and g, goes to zero, making the slanted line 

$$
g (x) = \frac {x}{2} + 1
$$

an asymptote of the graph of $f$ (Figure 2.44). The line $y = g(x)$ is an asymptote both to the right and to the left. 

Notice in Example 10 that if the degree of the numerator in a rational function is greater than the degree of the denominator, then the limit as $|x|$ becomes large is $+\infty$ or $-\infty$ , depending on the signs assumed by the numerator and denominator. 

### Infinite Limits

Let us look again at the function $f(x) = 1/x$ . As $x \to 0^{+}$ , the values of f grow without bound, eventually reaching and surpassing every positive real number. That is, given any positive real number B, however large, the values of f become larger still (Figure 2.45). 

Thus, f has no limit as $x \rightarrow 0^{+}$ . It is nevertheless convenient to describe the behavior of f by saying that $f(x)$ approaches $\infty$ as $x \rightarrow 0^{+}$ . We write 

$$
\lim _ {x \to 0 ^ {+}} f (x) = \lim _ {x \to 0 ^ {+}} \frac {1}{x} = \infty .
$$

In writing this equation, we are not saying that the limit exists. Nor are we saying that there is a real number $\infty$ , for there is no such number. Rather, this expression is just a concise way of saying that $\lim_{x\to 0^{+}}(1 / x)$ does not exist because $1 / x$ becomes arbitrarily large and positive as $x\to 0^{+}$ . 

As $x \rightarrow 0^{-}$ , the values of $f(x) = 1/x$ become arbitrarily large and negative. Given any negative real number -B, the values of f eventually lie below -B. (See Figure 2.45.) We write 

$$
\lim _ {x \rightarrow 0 ^ {-}} f (x) = \lim _ {x \rightarrow 0 ^ {-}} \frac {1}{x} = - \infty .
$$

Again, we are not saying that the limit exists and equals the number $-\infty$ . There is no real number $-\infty$ . We are describing the behavior of a function whose limit as $x \rightarrow 0^{-}$ does not exist because its values become arbitrarily large and negative. 

$$
\text { **EXAMPLE   11** } \quad \text { Find } \lim _ {x \to 1 ^ {+}} \frac {1}{x - 1} \text { and } \lim _ {x \to 1 ^ {-}} \frac {1}{x - 1}.
$$

Geometric **Solution** The graph of $y = 1/(x - 1)$ is the graph of y = 1/x shifted 1 unit to the right (Figure 2.46). Therefore, $y = 1/(x - 1)$ behaves near 1 exactly the way y = 1/x behaves near 0: 

$$
\lim _ {x \rightarrow 1 ^ {+}} \frac {1}{x - 1} = \infty \quad \text { and } \quad \lim _ {x \rightarrow 1 ^ {-}} \frac {1}{x - 1} = - \infty .
$$

Analytic **Solution** Think about the number x - 1 and its reciprocal. As $x \to 1^{+}$ , we have $(x - 1) \to 0^{+}$ and $1/(x - 1) \to \infty$ . As $x \to 1^{-}$ , we have $(x - 1) \to 0^{-}$ and $1/(x - 1) \to -\infty$ . 

![教材插图](/books/thomas-calculus/assets/6ac121786f14057291520d91365a37e7725b620159155178c6f386f3a9c4ae78.jpg)


**EXAMPLE 12** Discuss the behavior of

$$
f (x) = \frac {1}{x ^ {2}} \text { as } x \to 0.
$$

**Solution** As x approaches zero from either side, the values of $1/x^{2}$ are positive and become arbitrarily large (Figure 2.47). This means that 

$$
\lim _ {x \to 0} f (x) = \lim _ {x \to 0} \frac {1}{x ^ {2}} = \infty .
$$

$$
f (x)
$$

) in The function $y = 1 / x$ shows no consistent behavior as $x \to 0$ . We have $1 / x \to \infty$ if $x \to 0$ . $x \to 0^+$ , but $1 / x \to -\infty$ if $x \to 0^-$ . All we can say about $\lim_{x \to 0} (1 / x)$ is that it does not exist. The function $y = 1 / x^2$ is different. Its values approach infinity as $x$ approaches zero from either side, so we can say that $\lim_{x \to 0} (1 / x^2) = \infty$ . 

**EXAMPLE 13** These examples illustrate that rational functions can behave in various ways near zeros of the denominator. 

$$
\text { (a) } \lim _ {x \rightarrow 2} \frac {(x - 2) ^ {2}}{x ^ {2} - 4} = \lim _ {x \rightarrow 2} \frac {(x - 2) ^ {2}}{(x - 2) (x + 2)} = \lim _ {x \rightarrow 2} \frac {x - 2}{x + 2} = 0
$$

Can substitute 2 for x after algebraic manipulation eliminates division by 0. 

$$
\text { (b) } \lim _ {x \rightarrow 2} \frac {x - 2}{x ^ {2} - 4} = \lim _ {x \rightarrow 2} \frac {x - 2}{(x - 2) (x + 2)} = \lim _ {x \rightarrow 2} \frac {1}{x + 2} = \frac {1}{4}
$$

Again substitute 2 for x after algebraic manipulation eliminates division by 0. 

$$
\text { (c) } \lim _ {x \rightarrow 2 ^ {+}} \frac {x - 3}{x ^ {2} - 4} = \lim _ {x \rightarrow 2 ^ {+}} \frac {x - 3}{(x - 2) (x + 2)} = - \infty
$$

The values are negative for $x > 2$ , $x$ near 2. 

$$
\text {(d)} \lim _ {x \rightarrow 2 ^ {-}} \frac {x - 3}{x ^ {2} - 4} = \lim _ {x \rightarrow 2 ^ {-}} \frac {x - 3}{(x - 2) (x + 2)} = \infty
$$

The values are positive for $x < 2$ , $x$ near 2. 

$$
\text {(e)} \lim _ {x \rightarrow 2} \frac {x - 3}{x ^ {2} - 4} = \lim _ {x \rightarrow 2} \frac {x - 3}{(x - 2) (x + 2)} \text { does   not   exist. }
$$

Limits from left and from right differ. 

$$
\text {(f)} \lim _ {x \rightarrow 2} \frac {2 - x}{(x - 2) ^ {3}} = \lim _ {x \rightarrow 2} \frac {- (x - 2)}{(x - 2) ^ {3}} = \lim _ {x \rightarrow 2} \frac {- 1}{(x - 2) ^ {2}} = - \infty
$$

Denominator is positive, so values are negative near x = 2. 

In parts (a) and (b), the effect of the zero in the denominator at x = 2 is canceled because the numerator is zero there also. Thus a finite limit exists. This is not true in part (f), where cancellation still leaves a zero factor in the denominator. 

$$
\text { **EXAMPLE   14** } \quad \text { Find } \lim _ {x \to - \infty} \frac {2 x ^ {5} - 6 x ^ {4} + 1}{3 x ^ {2} + x - 7}.
$$

**Solution** We are asked to find the limit of a rational function as $x \rightarrow -\infty$ , so we divide the numerator and denominator by $x^{2}$ , the highest power of x in the denominator: 

$$
\begin{array}{r l} \lim _ {x \to - \infty} \frac {2 x ^ {5} - 6 x ^ {4} + 1}{3 x ^ {2} + x - 7} & = \lim _ {x \to - \infty} \frac {2 x ^ {3} - 6 x ^ {2} + x ^ {- 2}}{3 + x ^ {- 1} - 7 x ^ {- 2}} \\ & = \lim _ {x \to - \infty} \frac {2 x ^ {2} (x - 3) + x ^ {- 2}}{3 + x ^ {- 1} - 7 x ^ {- 2}} \\ & = - \infty , \end{array} \quad x ^ {- n} \to 0,   x - 3 \to - \infty
$$

because the numerator tends to $-\infty$ while the denominator approaches 3 as $x \rightarrow -\infty$ . 

![教材插图](/books/thomas-calculus/assets/dcdd3fa25b41cec85dc8f4c92d59feacc3ec71a48ddb7f1221159dc7aa127063.jpg)



FIGURE 2.48 For $c - \delta < x < c + \delta$ , the graph of $f(x)$ lies above the line y = B.


![教材插图](/books/thomas-calculus/assets/d21eace6d74a26793e09fa6dcff8a117fe5eb9d39d6924f67252b53489c5cce6.jpg)



FIGURE 2.49 For $c - \delta < x < c + \delta$ , the graph of $f(x)$ lies below the line $y = -B$ .


### Precise Definitions of Infinite Limits

Instead of requiring $f(x)$ to lie arbitrarily close to a finite number L for all x sufficiently close to c, the definitions of infinite limits require $f(x)$ to lie arbitrarily far from zero. Except for this change, the language is very similar to what we have seen before. Figures 2.48 and 2.49 accompany these definitions. 

> ## ***DEFINITIONS***
>
> 1. We say that $f(x)$ approaches infinity as $x$ approaches $c$ , and write 
>
> $$
> \lim _ {x \to c} f (x) = \infty ,
> $$
>
> if for every positive real number B there exists a corresponding $\delta > 0$ such that 
>
> $$
> f (x) > B \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
> $$
>
> 2. We say that $f(x)$ approaches negative infinity as x approaches c, and write 
>
> $$
> \lim _ {x \to c} f (x) = - \infty ,
> $$
>
> if for every negative real number -B there exists a corresponding $\delta > 0$ such that 
>
> $$
> f (x) <   - B \quad \text { whenever } \quad 0 <   | x - c | <   \delta .
> $$
>
The precise definitions of one-sided infinite limits at $c$ are similar and are stated in the exercises. 

**EXAMPLE 15** Prove that $\lim_{x\to 0}\frac{1}{x^2} = \infty$ 

**Solution** Given B > 0, we want to find $\delta > 0$ such that 

$$
\frac {1}{x ^ {2}} > B \quad \text { whenever } \quad 0 <   | x - 0 | <   \delta .
$$

Now, 

$$
\frac {1}{x ^ {2}} > B \quad \text {   if   and   only   if   } \quad x ^ {2} <   \frac {1}{B}
$$

or, equivalently, 

$$
| x | <   \frac {1}{\sqrt {B}}.
$$

Thus, choosing $\delta = 1 / \sqrt{B}$ (or any smaller positive number), we see that 

$$
\text { if   } 0 <   | x | <   \delta \quad \text { then } \quad \frac {1}{x ^ {2}} > \frac {1}{\delta^ {2}} \geq B.
$$

Therefore, by definition, 

$$
\lim _ {x \to 0} \frac {1}{x ^ {2}} = \infty .
$$

![教材插图](/books/thomas-calculus/assets/fcf418d1c4a46d90d5e373f94c6dc56d3eccb2b12f4f0644fdeeda510ca28caa.jpg)



FIGURE 2.50 The coordinate axes are asymptotes of both branches of the hyperbola $y = 1 / x$ .


![教材插图](/books/thomas-calculus/assets/eb080d53a319325db65f234208cc7cbe25c9821df7991c7dc2c71367a402b632.jpg)



FIGURE 2.51 The lines y = 1 and x = -2 are asymptotes of the curve in Example 16.


### Vertical Asymptotes

Notice that the distance between a point on the graph of $f(x) = 1/x$ and the y-axis approaches zero as the point moves nearly vertically along the graph and away from the origin (Figure 2.50). The function $f(x) = 1/x$ is unbounded as x approaches 0 because 

$$
\lim _ {x \to 0 ^ {+}} \frac {1}{x} = \infty \quad \text { and } \quad \lim _ {x \to 0 ^ {-}} \frac {1}{x} = - \infty .
$$

We say that the line x = 0 (the y-axis) is a vertical asymptote of the graph of $f(x) = 1/x$ . Observe that the denominator is zero at x = 0 and the function is undefined there. 

> ***DEFINITION*** A line $x = a$ is a vertical asymptote of the graph of a function $y = f(x)$ if either 
>
> $$
> \lim _ {x \to a ^ {+}} f (x) = \pm \infty \quad \text { or } \quad \lim _ {x \to a ^ {-}} f (x) = \pm \infty .
> $$

**EXAMPLE 16** Find the horizontal and vertical asymptotes of the curve 

$$
y = \frac {x + 3}{x + 2}.
$$

**Solution** We are interested in the behavior as $x \rightarrow \pm\infty$ and the behavior as $x \rightarrow -2$ , where the denominator is zero. 

The asymptotes are revealed if we recast the rational function as a polynomial with a remainder, by dividing $(x + 2)$ into $(x + 3)$ : 

$$
\begin{array}{c} x + 2 \overline {{) x + 3}} \\ \underline {{x + 2}} \\ 1 \end{array}
$$

This result enables us to rewrite $y$ as 

$$
y = 1 + \frac {1}{x + 2}.
$$

We see that the curve in question is the graph of $f(x) = 1/x$ shifted 1 unit up and 2 units left (Figure 2.51). The asymptotes, instead of being the coordinate axes, are now the lines y = 1 and x = -2. As $x \to \pm\infty$ , the curve approaches the horizontal asymptote y = 1; as $x \to -2$ , the curve approaches the vertical asymptote x = -2. 

**EXAMPLE 17** Find the horizontal and vertical asymptotes of the graph of 

$$
f (x) = - \frac {8}{x ^ {2} - 4}.
$$

**Solution** We are interested in the behavior as $x \rightarrow \pm\infty$ and as $x \rightarrow \pm2$ , where the denominator is zero. Notice that f is an even function of x, so its graph is symmetric with respect to the y-axis. 

(a) The behavior as $x \to \pm\infty$ . Since $\lim_{x \to \infty} f(x) = 0$ , the line y = 0 is a horizontal asymptote of the graph to the right. By symmetry it is an asymptote to the left as well (Figure 2.52). Notice that the curve approaches the x-axis from only the negative side (or from below). Also, $f(0) = 2$ . 

![教材插图](/books/thomas-calculus/assets/9a99f6bb449719e716f18d07f7a9024ff20f2faa9319bf451295dc5df9a43771.jpg)



FIGURE 2.52 Graph of the function in Example 17. Notice that the curve approaches the x-axis from only one side. Asymptotes do not have to be two-sided.


![教材插图](/books/thomas-calculus/assets/411aa9f1c7bf2ab7629b888b6f08f65eeec8ff8c211da1b411467a23bc48038c.jpg)



FIGURE 2.53 The vertical line x = 0 is a vertical asymptote of the natural logarithm function (Example 18).


(b) The behavior as $x \rightarrow \pm2$ . Since 

$$
\lim _ {x \to 2 ^ {+}} f (x) = - \infty \quad \text { and } \quad \lim _ {x \to 2 ^ {-}} f (x) = \infty ,
$$

the line x = 2 is a vertical asymptote both from the right and from the left. By symmetry, the line x = -2 is also a vertical asymptote. 

There are no other asymptotes because f has a finite limit at all other points. 

**EXAMPLE 18** The graph of the natural logarithm function has the y-axis (the line x = 0) as a vertical asymptote. We see this from the graph sketched in Figure 2.53 (which is the reflection of the graph of the natural exponential function across the line y = x) and the fact that the x-axis is a horizontal asymptote of $y = e^{x}$ (Example 5). Thus, 

$$
\lim _ {x \to 0 ^ {+}} \ln x = - \infty .
$$

The same result is true for $y = \log_{a} x$ whenever a > 1. 

**EXAMPLE 19** The curves 

$$
y = \sec x = \frac {1}{\cos x} \quad \text { and } \quad y = \tan x = \frac {\sin x}{\cos x}
$$

both have vertical asymptotes at odd-integer multiples of $\pi/2$ , which are the points where $\cos x = 0$ (Figure 2.54). 

![教材插图](/books/thomas-calculus/assets/b6f6968a31fb2dd64bdd4d74152959ee0ebdc443f848bb0fee8d28d4a196efb4.jpg)



FIGURE 2.54 The graphs of sec x and tan x have infinitely many vertical asymptotes (Example 19).


### Dominant Terms

In Example 10 we saw that by using long division, we can rewrite the function 

$$
f (x) = \frac {x ^ {2} - 3}{2 x - 4}
$$

as a linear function plus a remainder term: 

$$
f (x) = \left(\frac {x}{2} + 1\right) + \left(\frac {1}{2 x - 4}\right).
$$

![教材插图](/books/thomas-calculus/assets/72dc98acf3dcdaf97f27576f9375351108fd0fe2cfab9ce84e711e2cc53b3ddc.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/6fc7d304ed48bac3ebe2e9c7320e980c53d5e0e3941814e20a445c6f8828208c.jpg)



(b)



FIGURE 2.55 The graphs of f and g are (a) distinct for $|x|$ small, and (b) nearly identical for $|x|$ large (Example 20).


This tells us immediately that 

For $x$ large: 

For $x$ near 2: 

$$
\begin{array}{l l} f (x) \approx \frac {x}{2} + 1 & \frac {1}{2 x - 4} \text {   is   near   } 0. \\ f (x) \approx \frac {1}{2 x - 4} & \text { This   term   is   very   large   in   absolute   value }. \end{array}
$$

If we want to know how f behaves, this is one possible way to find out. It behaves like $y = (x/2) + 1$ when $|x|$ is large and the contribution of $1/(2x - 4)$ to the total value of f is insignificant. It behaves like $1/(2x - 4)$ when x is so close to 2 that $1/(2x - 4)$ makes the dominant contribution. 

We say that $(x/2) + 1$ dominates when x approaches $\infty$ or $-\infty$ , and we say that $1/(2x - 4)$ dominates when x approaches 2. Dominant terms like these help us predict a function's behavior. 

**EXAMPLE 20** Let $f(x) = 3x^{4} - 2x^{3} + 3x^{2} - 5x + 6$ and $g(x) = 3x^{4}$ . Show that although f and g are quite different for numerically small values of x, they behave similarly for very large $|x|$ , in the sense that their ratios approach 1 as $x \to \infty$ or $x \to -\infty$ . 

**Solution** The graphs of f and g behave quite differently near the origin (Figure 2.55a), but appear as virtually identical on a larger scale (Figure 2.55b). 

We can test that the term $3x^{4}$ in f, represented graphically by g, dominates the polynomial f for numerically large values of x by examining the ratio of the two functions as $x \to \pm\infty$ . We find that 

$$
\begin{array}{l} \lim _ {x \to \pm \infty} \frac {f (x)}{g (x)} = \lim _ {x \to \pm \infty} \frac {3 x ^ {4} - 2 x ^ {3} + 3 x ^ {2} - 5 x + 6}{3 x ^ {4}} \\ = \lim _ {x \to \pm \infty} \left(1 - \frac {2}{3 x} + \frac {1}{x ^ {2}} - \frac {5}{3 x ^ {3}} + \frac {2}{x ^ {4}}\right) \\ = 1, \end{array}
$$

which means that f and g appear nearly identical when $|x|$ is large. 

### EXERCISES 2.5

#### Finding Limits

1. For the function $f$ whose graph is given, determine the following limits. Write $\infty$ or $-\infty$ where appropriate. 

a. $\lim_{x\to2}f(x)$ 

c. $\lim_{x\to-3^{-}}f(x)$ 

e. $\lim_{x\to0^{+}}f(x)$ 

$$
\lim _ {x \to 0} f (x)
$$

b. $\lim_{x\to-3^{+}}f(x)$ 

i. $\lim_{x\to-\infty}f(x)$ 

d. $\lim_{x\to-3}f(x)$ 

f. $\lim_{x\to0^{-}}f(x)$ 

h. $\lim_{x\to\infty}f(x)$ 

![教材插图](/books/thomas-calculus/assets/fdcaa286893a4832d8060ed0b522f11cc9fc229e6ce024557c913cc3be1c8c8d.jpg)


2. For the function $f$ whose graph is given, determine the following limits. Write $\infty$ or $-\infty$ where appropriate.
a. $\lim_{x \to 4} f(x)$ b. $\lim_{x \to 2^+} f(x)$ c. $\lim_{x \to 2^-} f(x)$ d. $\lim_{x \to 2} f(x)$ e. $\lim_{x \to -3^+} f(x)$ f. $\lim_{x \to -3^-} f(x)$ g. $\lim_{x \to -3} f(x)$ h. $\lim_{x \to 0^+} f(x)$ i. $\lim_{x \to 0^-} f(x)$ 

j. $\lim_{x\to0}f(x)$ k. $\lim_{x\to\infty}f(x)$ l. $\lim_{x\to-\infty}f(x)$ 

![教材插图](/books/thomas-calculus/assets/a702f503258e4d2da63ac6f534f87916e49c995b29e4e782799e179156597485.jpg)


In Exercises 3–8, find the limit of each function (a) as $x \rightarrow \infty$ and (b) as $x \rightarrow -\infty$ . (You may wish to visualize your answer with a graphing calculator or computer.) 

3. $f(x) = \frac{2}{x} - 3$ 

4. $f (x) = \pi - \frac {2}{x ^ {2}}$

5. $g(x) = \frac{1}{2 + (1/x)}$ 

6. $g(x) = \frac{1}{8 - (5 / x^2)}$ 

7. $h(x) = \frac{-5 + (7 / x)}{3 - (1 / x^2)}$ 

8. $h(x) = \frac{3 - (2 / x)}{4 + (\sqrt{2} / x^2)}$ 

Find the limits in Exercises 9–12.
9. $\lim_{x\to\infty}\frac{\sin 2x}{x}$

10. $\lim_{\theta\to-\infty}\frac{\cos\theta}{3\theta}$

11. $\lim_{t\to-\infty}\frac{2-t+\sin t}{t+\cos t}$

12. $\lim_{r\to\infty}\frac{r+\sin r}{2r+7-5\sin r}$

#### Limits of Rational Functions

In Exercises 13–22, find the limit of each rational function (a) as $x \to \infty$ and (b) as $x \to -\infty$ . Write $\infty$ or $-\infty$ where appropriate.

13. $f(x) = \frac{2x + 3}{5x + 7}$

14. $f(x) = \frac{2x^{3} + 7}{x^{3} - x^{2} + x + 7}$

15. $f(x) = \frac{x + 1}{x^{2} + 3}$

16. $f(x) = \frac{3x + 7}{x^{2} - 2}$

17. $h(x) = \frac{7x^{3}}{x^{3} - 3x^{2} + 6x}$

18. $h(x) = \frac{9x^{4} + x}{2x^{4} + 5x^{2} - x + 6}$

19. $g(x) = \frac{10x^{5} + x^{4} + 31}{x^{6}}$

20. $g(x) = \frac{x^{3} + 7x^{2} - 2}{x^{2} - x + 1}$

21. $f(x) = \frac{3x^{7} + 5x^{2} - 1}{6x^{3} - 7x + 3}$

22. $h(x) = \frac{5x^{8} - 2x^{3} + 9}{3 + x - 4x^{5}}$

Limits as $x \rightarrow \infty$ or $x \rightarrow -\infty$ 

The process by which we determine limits of rational functions applies equally well to ratios containing noninteger or negative powers of x. 

Divide numerator and denominator by the highest power of x in the denominator and proceed from there. Find the limits in Exercises 23–36. Write $\infty$ or $-\infty$ where appropriate. 

23. $\lim_{x\to\infty}\sqrt{\frac{8x^{2}-3}{2x^{2}+x}}$ 

24. $\lim_{x\to -\infty}\left(\frac{x^2 + x - 1}{8x^2 - 3}\right)^{1 / 3}$ 

25. $\lim_{x\to -\infty}\left(\frac{1 - x^3}{x^2 + 7x}\right)^5$ 

26. $\lim_{x\to\infty}\sqrt{\frac{x^{2}-5x}{x^{3}+x-2}}$ 

27. $\lim_{x\to \infty}\frac{2\sqrt{x} + x^{-1}}{3x - 7}$ 

28. $\lim_{x\to \infty}\frac{2 + \sqrt{x}}{2 - \sqrt{x}}$ 

29. $\lim_{x\to -\infty}\frac{\sqrt[3]{x} - \sqrt[5]{x}}{\sqrt[3]{x} + \sqrt[5]{x}}$ 

30. $\lim_{x\to \infty}\frac{x^{-1} + x^{-4}}{x^{-2} - x^{-3}}$ 

31. $\lim_{x\to \infty}\frac{2x^{5 / 3} - x^{1 / 3} + 7}{x^{8 / 5} + 3x + \sqrt{x}}$ 

32. $\lim_{x\to -\infty}\frac{\sqrt[3]{x} - 5x + 3}{2x + x^{2/3} - 4}$ 

33. $\lim_{x\to \infty}\frac{\sqrt{x^2 + 1}}{x + 1}$ 

34. $\lim_{x\to-\infty}\frac{\sqrt{x^{2}+1}}{x+1}$ 

35. $\lim_{x\to \infty}\frac{x - 3}{\sqrt{4x^2 + 25}}$ 

36. $\lim_{x\to-\infty}\frac{4-3x^{3}}{\sqrt{x^{6}+9}}$ 

Infinite Limits 

Find the limits in Exercises 37–48. Write $\infty$ or $-\infty$ where appropriate. 

37. $\lim_{x\to 0^{+}}\frac{1}{3x}$ 

38. $\lim_{x\to 0^{-}}\frac{5}{2x}$ 

39. $\lim_{x\to 2^{-}}\frac{3}{x - 2}$ 

40. $\lim_{x\to 3^{+}}\frac{1}{x - 3}$ 

41. $\lim_{x\to-8^{+}}\frac{2x}{x+8}$ 

42. $\lim_{x\to -5^{-}}\frac{3x}{2x + 10}$ 

43. $\lim_{x\to 7}\frac{4}{(x - 7)^2}$ 

44. $\lim_{x\to 0}\frac{-1}{x^2(x + 1)}$ 

45. a. $\lim_{x\to 0^{+}}\frac{2}{3x^{1 / 3}}$ b. $\lim_{x\to 0^{-}}\frac{2}{3x^{1 / 3}}$ 

46. a. $\lim_{x\to 0^{+}}\frac{2}{x^{1 / 5}}$ b. $\lim_{x\to 0^{-}}\frac{2}{x^{1 / 5}}$ 

47. $\lim_{x\to 0}\frac{4}{x^{2 / 5}}$

48. $\lim_{x\to 0}\frac{1}{x^{2 / 3}}$

Find the limits in Exercises 49–52. Write $\infty$ or $-\infty$ where appropriate. 

49. $\lim_{x\to (\pi /2)^{-}}\tan x$ 

50. $\lim _ {x \rightarrow (- \pi / 2) ^ {+}} \sec x$

51. $\lim_{\theta \to 0^{-}}(1 + \csc \theta)$

52. $\lim_{\theta \to 0}(2 - \cot \theta)$

Find the limits in Exercises 53–58. Write $\infty$ or $-\infty$ where appropriate. 

53. $\lim \frac{1}{x^2 - 4}$ as a. $x\to 2^{+}$ b. $x\to 2^{-}$ c. $x\to -2^{+}$ d. $x\to -2^{-}$ 

54. $\lim \frac{x}{x^2 - 1}$ as a. $x\to 1^{+}$ b. $x\to 1^{-}$ c. $x\to -1^{+}$ d. $x\to -1^{-}$ 

55. $\lim \left(\frac{x^2}{2} -\frac{1}{x}\right)$ as a. $x\to 0^{+}$ b. $x\to 0^{-}$ c. $x\to \sqrt[3]{2}$ d. $x\to -1$ 

56. $\lim \frac{x^2 - 1}{2x + 4}$ as a. $x\to -2^{+}$ b. $x\rightarrow -2^{-}$ c. $x\rightarrow 1^{+}$ d. $x\rightarrow 0^{-}$ 

57. $\lim \frac{x^2 - 3x + 2}{x^3 - 2x^2}$ as a. $x\to 0^{+}$ b. $x\to 2^{+}$ c. $x\to 2^{-}$ d. $x\to 2$ 

e. What, if anything, can be said about the limit as $x \rightarrow 0$ ? 

58. $\lim \frac{x^2 - 3x + 2}{x^3 - 4x}$ as a. $x\to 2^{+}$ b. $x\rightarrow -2^{+}$ c. $x\to 0^{-}$ d. $x\to 1^{+}$ 

e. What, if anything, can be said about the limit as $x \rightarrow 0$ ? 

Find the limits in Exercises 59–62. Write $\infty$ or $-\infty$ where appropriate. 

59. $\lim\left(2 - \frac{3}{t^{1/3}}\right)$ as 

a. $t\to 0^{+}$ 

b. $t\to 0^{-}$ 

60. $\lim \left(\frac{1}{t^{3 / 5}} + 7\right)$ as 

a. $t\to 0^{+}$ 

b. $t \rightarrow 0^{-}$ 

61. $\lim \left(\frac{1}{x^{2/3}} + \frac{2}{(x - 1)^{2/3}}\right)$ as a. $x \to 0^{+}$ b. $x \to 0^{-}$ c. $x \to 1^{+}$ d. $x \to 1^{-}$ 

62. $\lim \left(\frac{1}{x^{1/3}} - \frac{1}{(x - 1)^{4/3}}\right)$ as a. $x \to 0^{+}$ b. $x \to 0^{-}$ c. $x \to 1^{+}$ d. $x \to 1^{-}$ 

#### Graphing Simple Rational Functions

Graph the rational functions in Exercises 63–68. Include the graphs and equations of the asymptotes and dominant terms. 

63. $y = \frac{1}{x - 1}$ 

64. $y = \frac{1}{x + 1}$ 

65. $y = \frac{1}{2x + 4}$ 

66. $y = \frac{-3}{x - 3}$ 

67. $y = \frac{x + 3}{x + 2}$ 

68. $y = \frac{2x}{x + 1}$ 

Domains and Asymptotes 

Determine the domain of each function in Exercises 69–74. Then use various limits to find the asymptotes. 

69. $y = 4 + \frac{3x^2}{x^2 + 1}$

70. $y = \frac{2x}{x^2 - 1}$

71. $y = \frac{8 - e^x}{2 + e^x}$ 

72. $y = \frac{4e^x + e^{2x}}{e^x + e^{2x}}$ 

73. $y = \frac{\sqrt{x^2 + 4}}{x}$ 

74. $y = \frac{x^3}{x^3 - 8}$ 

#### Inventing Graphs and Functions

In Exercises 75–78, sketch the graph of a function $y = f(x)$ that satisfies the given conditions. No formulas are required—just label the coordinate axes and sketch an appropriate graph. (The answers are not unique, so your graphs may not be exactly like those in the answer section.) 

75. $f(0) = 0, f(1) = 2, f(-1) = -2, \lim_{x \to -\infty} f(x) = -1, \text{and}$ $\lim_{x \to \infty} f(x) = 1$ 

76. $f(0) = 0, \lim_{x \to \pm \infty} f(x) = 0, \lim_{x \to 0^+} f(x) = 2, \text{and}$ $\lim_{x \to 0^-} f(x) = -2$ 

77. $f(0) = 0$ , $\lim_{x \to \pm\infty} f(x) = 0$ , $\lim_{x \to 1^{-}} f(x) = \lim_{x \to -1^{+}} f(x) = \infty$ , $\lim_{x\to1^{+}}f(x)=-\infty,$ and $\lim_{x\to-1^{-}}f(x)=-\infty$ 

78. $f(2)=1, f(-1)=0, \lim_{x\to\infty}f(x)=0, \lim_{x\to0^{+}}f(x)=\infty,$ $\lim_{x\to0^{-}}f(x)=-\infty, \text{and } \lim_{x\to-\infty}f(x)=1$ 

In Exercises 79–82, find a function that satisfies the given conditions and sketch its graph. (The answers here are not unique. Any function that satisfies the conditions is acceptable. Feel free to use formulas defined in pieces if that will help.) 

79. $\lim_{x\to \pm \infty}f(x) = 0,\lim_{x\to 2^{-}}f(x) = \infty$ , and $\lim_{x\to 2^{+}}f(x) = \infty$ 

80. $\lim_{x\to \pm \infty}g(x) = 0,\lim_{x\to 3^{-}}g(x) = -\infty$ , and $\lim_{x\to 3^{+}}g(x) = \infty$ 

81. $\lim_{x\to-\infty}h(x)=-1,\lim_{x\to\infty}h(x)=1,\lim_{x\to0^{-}}h(x)=-1,$ and $\lim_{x\to0^{+}}h(x)=1$ 

82. $\lim_{x\to \pm \infty}k(x) = 1,\lim_{x\to 1^{-}}k(x) = \infty ,$ and $\lim_{x\to 1^{+}}k(x) = -\infty$ 

83. Suppose that $f(x)$ and $g(x)$ are polynomials in $x$ and that $\lim_{x\to \infty}\left(f(x) / g(x)\right) = 2$ . Can you conclude anything about $\lim_{x\to -\infty}\left(f(x) / g(x)\right)$ ? Give reasons for your answer. 

84. Suppose that $f(x)$ and $g(x)$ are polynomials in x. Can the graph of $f(x)/g(x)$ have an asymptote if $g(x)$ is never zero? Give reasons for your answer. 

85. How many horizontal asymptotes can the graph of a given rational function have? Give reasons for your answer. 

#### Finding Limits of Differences When $x \rightarrow \pm\infty$

Find the limits in Exercises 86–92. (Hint: Try multiplying and dividing by the conjugate.) 

86. $\lim_{x\to \infty}\left(\sqrt{x + 9} -\sqrt{x + 4}\right)$ 

87. $\lim_{x\to\infty}\left(\sqrt{x^{2}+25}-\sqrt{x^{2}-1}\right)$ 

88. $\lim_{x\to -\infty}\left(\sqrt{x^2 + 3} +x\right)$ 

89. $\lim_{x\to -\infty}\left(2x + \sqrt{4x^2 + 3x - 2}\right)$ 

90. $\lim_{x\to \infty}\left(\sqrt{9x^2 - x} -3x\right)$ 

91. $\lim_{x\to \infty}\left(\sqrt{x^2 + 3x} -\sqrt{x^2 - 2x}\right)$ 

92. $\lim_{x\to \infty}\left(\sqrt{x^2 + x} -\sqrt{x^2 - x}\right)$ 

Using the Formal Definitions 

Use the formal definitions of limits as $x \rightarrow \pm\infty$ to establish the limits in Exercises 93 and 94. 

93. If $f$ has the constant value $f(x) = k$ , then $\lim_{x\to \infty}f(x) = k$ . 

94. If f has the constant value $f(x) = k$ , then $\lim_{x \to -\infty} f(x) = k$ . 

Use formal definitions to prove the limit statements in Exercises 95–98. 

95. $\lim_{x\to 0}\frac{-1}{x^2} = -\infty$ 

96. $\lim_{x\to 0}\frac{1}{|x|} = \infty$ 

97. $\lim_{x\to 3}\frac{-2}{(x - 3)^2} = -\infty$ 

98. $\lim_{x\to -5}\frac{1}{(x + 5)^2} = \infty$ 

99. Here is the definition of infinite right-hand limit. 

Suppose that an interval $(c,d)$ lies in the domain of f. We say that $f(x)$ approaches infinity as x approaches c from the right, and write 

$$
\lim _ {x \to c ^ {+}} f (x) = \infty ,
$$

if, for every positive real number $B$ , there exists a corresponding number $\delta > 0$ such that 

$f(x) > B$ whenever $c < x < c + \delta$ . 

Modify the definition to cover the following cases. 

a. $\lim_{x\to c^{-}}f(x) = \infty$ 

b. $\lim_{x\to c^{+}}f(x)=-\infty$ 

c. $\lim_{x\to c^{-}}f(x)=-\infty$ 

Use the formal definitions from Exercise 99 to prove the limit state-

ments in Exercises 100–104. 

100. $\lim_{x\to 0^{+}}\frac{1}{x} = \infty$

101. $\lim_{x\to 0^{-}}\frac{1}{x} = -\infty$

## 2.6 Continuity

![教材插图](/books/thomas-calculus/assets/a870c9c9221adaf2cdc64a2600d3a003a46397b7e3408bfc6224e6ec900ad2bb.jpg)



FIGURE 2.56 Connecting plotted points.


102. $\lim_{x\to 2^{-}}\frac{1}{x - 2} = -\infty$ 

### Continuity at a Point

103. $\lim_{x\to 2^{+}}\frac{1}{x - 2} = \infty$ 

104. $\lim_{x\to 1^{-}}\frac{1}{1 - x^2} = \infty$ 

Oblique Asymptotes 

Graph the rational functions in Exercises 105–110. Include the graphs and equations of the asymptotes. 

105. $y = \frac{x^2}{x - 1}$ 

106. $y = \frac{x^2 + 1}{x - 1}$ 

107. $y = \frac{x^2 - 4}{x - 1}$ 

108. $y = \frac{x^2 - 1}{2x + 4}$ 

109. $y = \frac{x^2 - 1}{x}$ 

110. $y = \frac{x^3 + 1}{x^2}$ 

Additional Graphing Exercises 

T Graph the curves in Exercises 111–114. Explain the relationship between the curve's formula and what you see. 

111. $y = \frac{x}{\sqrt{4 - x^{2}}}$ 

112. $y = \frac{-1}{\sqrt{4 - x^2}}$ 

113. $y = x^{2 / 3} + \frac{1}{x^{1 / 3}}$ 

114. $y = \sin \left(\frac{\pi}{x^2 + 1}\right)$ 

T Graph the functions in Exercises 115 and 116. Then answer the following questions. 

a. How does the graph behave as $x \to 0^{+}$ ? 

b. How does the graph behave as $x \rightarrow \pm\infty$ ? 

c. How does the graph behave near $x = 1$ and $x = -1$ ? 

Give reasons for your answers. 

115. $y = \frac{3}{2}\left(x - \frac{1}{x}\right)^{2 / 3}$ 

116. $y = \frac{3}{2}\left(\frac{x}{x - 1}\right)^{2 / 3}$ 

When we plot function values generated in a laboratory or collected in the field, we often connect the plotted points with an unbroken curve to show what the function's values are likely to have been at the points we did not measure (Figure 2.56). In doing so, we are assuming that we are working with a continuous function, so its outputs vary regularly and consistently with the inputs, and do not jump abruptly from one value to another without taking on the values in between. Intuitively, any function $y = f(x)$ whose graph can be sketched over its domain in one unbroken motion is an example of a continuous function. Such functions play an important role in the study of calculus and its applications. 

To understand continuity, it helps to consider a function like that in Figure 2.57, whose limits we investigated in Example 1 in the last section. 

![教材插图](/books/thomas-calculus/assets/d565b6f6d2094a1840f4f2a66bb9c8e279c0f206c07cf89f989af793af126554.jpg)



FIGURE 2.57 The function is not continuous at $x = 1$ , $x = 2$ , and $x = 4$ (Example 1).


**EXAMPLE 1** At which numbers does the function f in Figure 2.57 appear to be not continuous? Explain why. What occurs at other numbers in the domain? 

**Solution** First we observe that the domain of the function is the closed interval $[0, 4]$ , so we will be considering the numbers x within that interval. From the figure, we notice right away that there are breaks in the graph at the numbers x = 1, x = 2, and x = 4. The break at x = 1 appears as a jump, which we identify later as a “jump discontinuity.” The break at x = 2 is called a “removable discontinuity” since by changing the function definition at that one point, we can create a new function that is continuous at x = 2. Similarly, x = 4 is a removable discontinuity. 

### Numbers at which the graph of f has breaks:

At the interior point x = 1, the function fails to have a limit. It does have both a left-hand limit, $\lim_{x \to 1^{-}} f(x) = 0$ , as well as a right-hand limit, $\lim_{x \to 1^{+}} f(x) = 1$ , but the limit values are different, resulting in a jump in the graph. The function is not continuous at x = 1. However, the function value $f(1) = 1$ is equal to the limit from the right, so the function is continuous from the right at x = 1. 

At $x = 2$ , the function does have a limit, $\lim_{x \to 2} f(x) = 1$ , but the value of the function is $f(2) = 2$ . The limit and function values are not the same, so there is a break in the graph and $f$ is not continuous at $x = 2$ . 

At x = 4, the function does have a left-hand limit at this right endpoint, $\lim_{x \to 4^{-}} f(x) = 1$ , but again the value of the function $f(4) = \frac{1}{2}$ differs from the value of the limit. We see again a break in the graph of the function at this endpoint and the function is not continuous from the left. 

### Numbers at which the graph of $f$ has no breaks:

At x = 3, the function has a limit, $\lim_{x \to 3} f(x) = 2$ . Moreover, the limit is the same value as the function there, $f(3) = 2$ . The function is continuous at x = 3. 

At $x = 0$ , the function has a right-hand limit at this left endpoint, $\lim_{x \to 0^+} f(x) = 1$ , and the value of the function is the same, $f(0) = 1$ . The function is continuous from the right at $x = 0$ . Because $x = 0$ is a left endpoint of the function's domain, we have that $\lim_{x \to 0^+} f(x) = 1$ and so $f$ is continuous at $x = 0$ . 

At all other numbers $x = c$ in the domain, the function has a limit equal to the value of the function, so $\lim_{x \to c} f(x) = f(c)$ . For example, $\lim_{x \to 5/2} f(x) = f(5/2) = 3/2$ . No breaks appear in the graph of the function at any of these numbers and the function is continuous at each of them. 

The following definitions capture the continuity ideas we observed in Example 1. 

> ***DEFINITIONS*** Let c be a real number that is either an interior point or an endpoint of an interval in the domain of f. 
>
> The function $f$ is continuous at $c$ if 
>
> $$
> \lim _ {x \to c} f (x) = f (c).
> $$
>
> The function f is right-continuous at c (or continuous from the right) if 
>
> $$
> \lim _ {x \to c ^ {+}} f (x) = f (c).
> $$
>
> The function f is left-continuous at c (or continuous from the left) if 
>
> $$
> \lim _ {x \to c ^ {-}} f (x) = f (c).
> $$
>
![教材插图](/books/thomas-calculus/assets/b9a4658aec83d1835ddfb542753e2f339ef394d2fa1eccac3c2b3cd73d6dd121.jpg)



FIGURE 2.58 Continuity at points a, b, and c.


![教材插图](/books/thomas-calculus/assets/4d2be05d6e4db9b08c279569a230c742493ec06ebc24a153dbdf4ad571c0ed15.jpg)



FIGURE 2.59 A function that is continuous over its domain (Example 2).


![教材插图](/books/thomas-calculus/assets/f2edcb1b694d0c5a03e72c0c5bea7e0acaf73d616acc4ae00ee082171171f5aa.jpg)



FIGURE 2.60 A function that has a jump discontinuity at the origin (Example 3).


![教材插图](/books/thomas-calculus/assets/d217cbbb35e8ffaf34f3099fa5e7293da40bba78f16992a157448957c9876ac4.jpg)



FIGURE 2.61 The greatest integer function is continuous at every noninteger point. It is right-continuous, but not left-continuous, at every integer point (Example 4).


The function f in Example 1 is continuous at every x in [0, 4] except x = 1, 2, and 4. It is right-continuous but not left-continuous at x = 1, neither right- nor left-continuous at x = 2, and not left-continuous at x = 4. 

From Theorem 5, it follows immediately that a function f is continuous at an interior point c of an interval in its domain if and only if it is both right-continuous and left-continuous at c (Figure 2.58). We say that a function is continuous over a closed interval $[a, b]$ if it is right-continuous at a, left-continuous at b, and continuous at all interior points of the interval. This definition applies to the infinite closed intervals $[a, \infty)$ and $(-\infty, b]$ as well, but only one endpoint is involved. If a function is not continuous at point c of its domain, we say that f is discontinuous at c and that f has a discontinuity at c. Note that a function f can be continuous, right-continuous, or left-continuous only at a point c for which $f(c)$ is defined. 

**EXAMPLE 2** The function $f(x) = \sqrt{4 - x^2}$ is continuous over its domain $[-2, 2]$ (Figure 2.59). It is continuous at all points of this interval, including the endpoints $x = -2$ and $x = 2$ . 

**EXAMPLE 3** The unit step function $U(x)$ , graphed in Figure 2.60, is right-continuous at $x = 0$ , but is neither left-continuous nor continuous there. It has a jump discontinuity at $x = 0$ . 

At an interior point or an endpoint of an interval in its domain, a function is continuous at points where it passes the following test. 

Continuity Test
A function $f(x)$ is continuous at a point x = c if and only if it meets the following three conditions.
1. $f(c)$ exists (c lies in the domain of f).
2. $\lim_{x\to c}f(x)$ exists (f has a limit as $x \to c$ ).
3. $\lim_{x\to c}f(x) = f(c)$ (the limit equals the function value). 

For one-sided continuity, the limits in parts 2 and 3 of the test should be replaced by the appropriate one-sided limits. 

**EXAMPLE 4** The function $y = \lfloor x \rfloor$ introduced in Section 1.1 is graphed in Figure 2.61. It is discontinuous at every integer $n$ , because the left-hand and right-hand limits are not equal as $x \to n$ : 

$$
\lim _ {x \to n ^ {-}} \lfloor x \rfloor = n - 1 \quad \text { and } \quad \lim _ {x \to n ^ {+}} \lfloor x \rfloor = n.
$$

Since $\lfloor n\rfloor = n$ , the greatest integer function is right-continuous at every integer $n$ (but not left-continuous). 

The greatest integer function is continuous at every real number other than the integers. For example, 

$$
\lim _ {x \to 1. 5} \lfloor x \rfloor = 1 = \lfloor 1. 5 \rfloor .
$$

In general, if $n - 1 < c < n$ , $n$ an integer, then 

$$
\lim _ {x \to c} \lfloor x \rfloor = n - 1 = \lfloor c \rfloor .
$$

Figure 2.62 displays several common ways in which a function can fail to be continuous. The function in Figure 2.62a is continuous at x = 0. The function in Figure 2.62b does not contain x = 0 in its domain. It would be continuous if its domain were extended so that $f(0) = 1$ . The function in Figure 2.62c would be continuous if $f(0)$ were 1 instead of 2. The discontinuity in Figure 2.62c is removable. The function has a limit as $x \rightarrow 0$ , and we can remove the discontinuity by setting $f(0)$ equal to this limit. 


FIGURE 2.63 The function $f(x) = 1/x$ is continuous over its natural domain. It is not defined at the origin, so it is not continuous on any interval containing x = 0 (Example 5).


The discontinuities in Figure 2.62d through f are more serious: $\lim_{x\to0}f(x)$ does not exist, and there is no way to improve the situation by appropriately defining f at 0. The step function in Figure 2.62d has a jump discontinuity: The one-sided limits exist but have different values. The function $f(x)=1/x^{2}$ in Figure 2.62e has an infinite discontinuity. The function in Figure 2.62f has an oscillating discontinuity: It oscillates so much that its values approach each number in $[-1,1]$ as $x\to0$ . Since it does not approach a single number, it does not have a limit as x approaches 0. 

![教材插图](/books/thomas-calculus/assets/3afb95af22a608fb0cc214d1903fdd5565939943c9ddb89819df7c5c6b058b50.jpg)



(a)


![教材插图](/books/thomas-calculus/assets/7d70aa24d8fdab3ab932e81ef8e94dcd7abebe93b69620b96bf8585c19fccea4.jpg)


![教材插图](/books/thomas-calculus/assets/86417503d054a96c6347fc35d5be37e07d79e34a7bf79d8ca8c966d908143f83.jpg)



(b)


![教材插图](/books/thomas-calculus/assets/dfac2f72cdf93f5164b0dec145a0f54d462079eab6811f20bbbfec3b297789a1.jpg)



(d)



(c)


![教材插图](/books/thomas-calculus/assets/83a73dfe31e6a2beadfa138c87c29a04b8ff42f42755a223d53dec4c1044a1cd.jpg)



(e)


![教材插图](/books/thomas-calculus/assets/386a4304a05a427d10a9cbfbacbb6eeec70b8ee7abfd2de84cfd4db0d2e0ff62.jpg)



(f)



FIGURE 2.62 The function in (a) is continuous at x = 0; the functions in (b) through (f) are not.


![教材插图](/books/thomas-calculus/assets/1cfe22a192de669d05dc1f4d53d374da1825a043a61b1fdb6baadf30794a54f7.jpg)


### Continuous Functions

We now describe the continuity behavior of a function throughout its entire domain, not only at a single point. We define a continuous function to be one that is continuous at every point in its domain. This is a property of the function. A function always has a specified domain, so if we change the domain, then we change the function, and this may change its continuity property as well. If a function is discontinuous at one or more points of its domain, we say it is a discontinuous function. 

**EXAMPLE 5**

(a) The function $f(x) = 1 / x$ (Figure 2.63) is a continuous function because it is continuous at every point of its domain. The point $x = 0$ is not in the domain of the function $f$ , so $f$ is not continuous on any interval containing $x = 0$ . Moreover, there is no way to extend $f$ to a new function that is defined and continuous at $x = 0$ . The function $f$ does not have a removable discontinuity at $x = 0$ . 

(b) The identity function $f(x) = x$ and constant functions are continuous everywhere by Example 3, Section 2.3. 

Algebraic combinations of continuous functions are continuous wherever they are defined. 

THEOREM 8—Properties of Continuous Functions
If the functions f and g are continuous at x = c, then the following algebraic combinations are continuous at x = c.
1. Sums: $f + g$ 2. Differences: $f - g$ 3. Constant multiples: $k \cdot f$ , for any number k
4. Products: $f \cdot g$ 5. Quotients: $f/g$ , provided $g(c) \neq 0$ 6. Powers: $f^n$ , n a positive integer
7. Roots: $\sqrt[n]{f}$ , provided it is defined on an interval containing c, where n is a positive integer 

Most of the results in Theorem 8 follow from the limit rules in Theorem 1, Section 2.2. For instance, to prove the sum property we have 

$$
\begin{array}{l l} \lim _ {x \to c} (f + g) (x) = \lim _ {x \to c} (f (x) + g (x)) \\ \qquad = \lim _ {x \to c} f (x) + \lim _ {x \to c} g (x) & \text { Sum   Rule,   Theorem   1 } \\ \qquad = f (c) + g (c) & \text { Continuity   of } f, g \text { at } c \\ \qquad = (f + g) (c). \end{array}
$$

This shows that $f + g$ is continuous. 

**EXAMPLE 6**

(a) Every polynomial $P(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \cdots + a_{0}$ is continuous because $\lim_{x \to c} P(x) = P(c)$ by Theorem 2, Section 2.2. 

(b) If $P(x)$ and $Q(x)$ are polynomials, then the rational function $P(x) / Q(x)$ is continuous wherever it is defined ( $Q(c) \neq 0$ ) by Theorem 3, Section 2.2. 

**EXAMPLE 7** The function $f(x) = |x|$ is continuous. If $x > 0$ , we have $f(x) = x$ , a polynomial. If $x < 0$ , we have $f(x) = -x$ , another polynomial. Finally, at the origin, $\lim_{x \to 0} |x| = 0 = |0|$ . 

The functions $y = \sin x$ and $y = \cos x$ are continuous at x = 0 by Example 12 of Section 2.2. Both functions are continuous everywhere (see Exercise 76). It follows from Theorem 8 that all six trigonometric functions are continuous wherever they are defined. For example, $y = \tan x$ is continuous on $\cdots \cup (-\pi/2, \pi/2) \cup (\pi/2, 3\pi/2) \cup \cdots$ . 

### Inverse Functions and Continuity

When a continuous function defined on an interval has an inverse, the inverse function is itself a continuous function over its own domain. This result is suggested by the observation that the graph of $f^{-1}$ , being the reflection of the graph of f across the line y = x, cannot have any breaks in it when the graph of f has no breaks. A rigorous proof that $f^{-1}$ is continuous whenever f is continuous on an interval is given in more advanced texts. As an example, the inverse trigonometric functions are all continuous over their domains. 

We defined the exponential function $y = a^{x}$ in Section 1.4 informally. The graph was obtained from the graph of $y = a^{x}$ for x, a rational number, by “filling in the holes” at the irrational points x, so as to make the function $y = a^{x}$ continuous over the entire real line. The inverse function $y = \log_{a} x$ is also continuous. In particular, the natural exponential function $y = e^{x}$ and the natural logarithm function $y = \ln x$ are both continuous over their domains. Proofs of continuity for these functions will be given in Chapter 7. 

### Continuity of Compositions of Functions

Functions obtained by composing continuous functions are continuous. If $f(x)$ is continuous at x = c and $g(x)$ is continuous at $x = f(c)$ , then $g \circ f$ is also continuous at x = c (Figure 2.64). In this case, the limit of $g \circ f$ as $x \to c$ is $g(f(c))$ . 

![教材插图](/books/thomas-calculus/assets/85d88833edc2ff9466810c91ed9e1c6ad457ad36e7973042cbd1c769773df7ca.jpg)



FIGURE 2.64 Compositions of continuous functions are continuous.


THEOREM 9—Compositions of Continuous Functions
If f is continuous at c, and g is continuous at $f(c)$ , then the composition $g \circ f$ is continuous at c. 

Intuitively, Theorem 9 is reasonable because if $x$ is close to $c$ , then $f(x)$ is close to $f(c)$ , and since $g$ is continuous at $f(c)$ , it follows that $g(f(x))$ is close to $g(f(c))$ . 

The continuity of compositions holds for any finite number of compositions of functions. The only requirement is that each function be continuous where it is applied. An outline of a proof of Theorem 9 is given in Exercise 6 in Appendix A.6. 

**EXAMPLE 8** Show that the following functions are continuous on their natural domains. 

(a) $y = \sqrt{x^{2} - 2x - 5}$ 

$$
\text { (b) } y = \frac {x ^ {2 / 3}}{1 + x ^ {4}}
$$

$$
y = \left| \frac {x - 2}{x ^ {2} - 2} \right|
$$

$$
\left(\mathbf {d}\right) y = \left| \frac {x \sin x}{x ^ {2} + 2} \right|
$$

**Solution** 

(a) The square root function is continuous on $[0,\infty)$ because it is a root of the continuous identity function $f(x)=x$ (Part 7, Theorem 8). The given function is then the composition of the polynomial $f(x)=x^{2}-2x-5$ with the square root function $g(t)=\sqrt{t}$ , and is continuous on its natural domain. 

(b) The numerator is the cube root of the identity function squared; the denominator is an everywhere-positive polynomial. Therefore, the quotient is continuous. 

(c) The quotient $(x - 2)/(x^{2} - 2)$ is continuous for all $x \neq \pm\sqrt{2}$ , and the function is the composition of this quotient with the continuous absolute value function (Example 7). 

![教材插图](/books/thomas-calculus/assets/0e6f786c823537d379cb000f5816667d9e170642da32930e48bb5a5793d5e77f.jpg)



FIGURE 2.65 The graph suggests that $y = |(x\sin x) / (x^2 + 2)|$ is continuous (Example 8d).


(d) Because the sine function is everywhere-continuous (Exercise 76), the numerator term $x \sin x$ is the product of continuous functions, and the denominator term $x^2 + 2$ is an everywhere-positive polynomial. The given function is the composition of a quotient of continuous functions with the continuous absolute value function (Figure 2.65). 

Theorem 9 is actually a consequence of a more general result, which we now prove. It states that if the limit of $f(x)$ as x approaches c is equal to b, then the limit of the composition function $g \circ f$ as x approaches c is equal to $g(b)$ . 

THEOREM 10—Limits of Continuous Functions
If $\lim_{x\to c}f(x)=b$ and g is continuous at the point b, then $\lim_{x\to c}g(f(x))=g(b).$ 

Proof Let $\varepsilon > 0$ be given. Since $g$ is continuous at $b$ , there exists a number $\delta_1 > 0$ such that 

$$
|g(y) - g(b)| <   \varepsilon \quad \text{whenever} \quad 0 <   |y - b| <   \delta_{1}. \quad \lim_{\substack{y\to b\\ \text{continuous at} y = b.}}g(y) = g(b)\text{since} g\text{is}
$$

Note that if $|y - b| = 0$ , so that $y = b$ , then the inequality $|g(y) - g(b)| < \varepsilon$ holds for any positive $\varepsilon$ , and therefore we have 

$$
| g (y) - g (b) | <   \varepsilon \quad \text { whenever } \quad | y - b | <   \delta_ {1}.\tag{1}
$$

Since $\lim_{x\to c}f(x) = b$ , there exists a $\delta >0$ such that 

$$
| f (x) - b | <   \delta_ {1} \quad \text { whenever } \quad 0 <   | x - c | <   \delta . \quad \text { Definition   of   } \lim _ {x \to c} f (x) = b
$$

If we let $y = f(x)$ , we then have that 

$$
| y - b | <   \delta_ {1} \quad \text { whenever } \quad 0 <   | x - c | <   \delta ,
$$

which implies from Equation (1) that $|g(y) - g(b)| = |g(f(x)) - g(b)| < \varepsilon$ whenever $0 < |x - c| < \delta$ . From the definition of limit, it follows that $\lim_{x \to c} g(f(x)) = g(b)$ . This gives the proof for the case where c is an interior point of the domain of f. The case where c is an endpoint of the domain is entirely similar, using an appropriate one-sided limit in place of a two-sided limit. 

**EXAMPLE 9** As an application of Theorem 10, we have the following calculations. 

$$
\begin{array}{l} \text {(a)} \lim _ {x \to \pi / 2} \cos \left(2 x + \sin \left(\frac {3 \pi}{2} + x\right)\right) = \cos \left(\lim _ {x \to \pi / 2} 2 x + \lim _ {x \to \pi / 2} \sin \left(\frac {3 \pi}{2} + x\right)\right) \\ = \cos (\pi + \sin 2 \pi) = \cos \pi = - 1. \end{array}
$$

$$
\begin{array}{l l} \text {(b)} \lim _ {x \to 1} \sin^ {- 1} \left(\frac {1 - x}{1 - x ^ {2}}\right) = \sin^ {- 1} \left(\lim _ {x \to 1} \frac {1 - x}{1 - x ^ {2}}\right) & \text {Arcsine is continuous.} \\ = \sin^ {- 1} \left(\lim _ {x \to 1} \frac {1}{1 + x}\right) & \text {Cancel common factor (1 - x).} \\ = \sin^ {- 1} \frac {1}{2} = \frac {\pi}{6}. \end{array}
$$

$$
\begin{array}{l} \text {(c)} \lim _ {x \to 0} \sqrt {x + 1} e ^ {\tan x} = \lim _ {x \to 0} \sqrt {x + 1} \cdot \exp \Bigl (\lim _ {x \to 0} \tan x \Bigr) \\ = 1 \cdot e ^ {0} = 1. \end{array} \qquad \text { exp   is   continuous. }
$$

### Intermediate Value Theorem for Continuous Functions

A function is said to have the Intermediate Value Property if whenever it takes on two values, it also takes on all the values in between. 

![教材插图](/books/thomas-calculus/assets/504a04398abce902e6ea5079d1a96708a3c455cf429eb7a1fa6b15f837121191.jpg)



FIGURE 2.66 The function


$$
f (x) = \left\{ \begin{array}{l l} 2 x - 2, & 1 \leq x <   2 \\ 3, & 2 \leq x \leq 4 \end{array} \right.
$$

does not take on all values between $f(1) = 0$ and $f(4) = 3$ ; it misses all the values between 2 and 3. 

THEOREM 11 - The Intermediate Value Theorem for Continuous Functions If $f$ is a continuous function on a closed interval $[a, b]$ , and if $y_0$ is any value between $f(a)$ and $f(b)$ , then $y_0 = f(c)$ for some $c$ in $[a, b]$ . 

![教材插图](/books/thomas-calculus/assets/d369972142d85a974bd0781d61335daed35c3c6b644f44c703457cf956193712.jpg)


Theorem 11 says that continuous functions over finite closed intervals have the Intermediate Value Property. Geometrically, the Intermediate Value Theorem says that any horizontal line $y = y_{0}$ crossing the y-axis between the numbers $f(a)$ and $f(b)$ will cross the curve $y = f(x)$ at least once over the interval $[a, b]$ . 

The proof of the Intermediate Value Theorem depends on the completeness property of the real number system. The completeness property implies that the real numbers have no holes or gaps. In contrast, the rational numbers do not satisfy the completeness property, and a function defined only on the rationals would not satisfy the Intermediate Value Theorem. See Appendix A.9 for a discussion and examples. 

The continuity of $f$ on the interval is essential to Theorem 11. If $f$ fails to be continuous at even one point of the interval, the theorem's conclusion may fail, as it does for the function graphed in Figure 2.66 (choose $y_0$ as any number between 2 and 3). 

A Consequence for Graphing: Connectedness Theorem 11 implies that the graph of a function that is continuous on an interval cannot have any breaks over the interval. It will be connected—a single, unbroken curve. It will not have jumps such as the ones found in the graph of the greatest integer function (Figure 2.61), or separate branches as found in the graph of $1 / x$ (Figure 2.63). 

A Consequence for Root Finding We call a solution of the equation $f(x) = 0$ a root of the equation or a zero of the function f. The Intermediate Value Theorem tells us that if f is continuous, then any interval on which f changes sign contains a zero of the function. Somewhere between a point where a continuous function is positive and a second point where it is negative, the function must be equal to zero. 

In practical terms, when we see the graph of a continuous function cross the horizontal axis on a computer screen, we know it is not stepping across. There really is a point where the function's value is zero. 

**EXAMPLE 10** Show that there is a root of the equation $x^3 - x - 1 = 0$ between 1 and 2. 

**Solution** Let $f(x) = x^{3} - x - 1$ . Since $f(1) = 1 - 1 - 1 = -1 < 0$ and $f(2) = 2^{3} - 2 - 1 = 5 > 0$ , we see that $y_{0} = 0$ is a value between $f(1)$ and $f(2)$ . Since f is a polynomial, it is continuous, and the Intermediate Value Theorem says there is a zero of f between 1 and 2. Figure 2.67 shows the result of zooming in to locate a root near x = 1.32. 

![教材插图](/books/thomas-calculus/assets/257fc0aa38590c9f88dc1b933fde8064376127daf0578f2e3fb88dcaa63a2fcf.jpg)



FIGURE 2.68 The curves $y = \sqrt{2x + 5}$ and $y = 4 - x^2$ have the same value at the number $x = c$ where $\sqrt{2x + 5} + x^2 - 4 = 0$ (Example 11).


![教材插图](/books/thomas-calculus/assets/f1ae6c1cb3435bd1ec490d03300810204a0a4a30a4b1f6b85a36217d91f7bc55.jpg)


![教材插图](/books/thomas-calculus/assets/a4e18c5ec5fd473b8f35f6c27614529ae492ddba774c845c387f996abef983a2.jpg)


![教材插图](/books/thomas-calculus/assets/399e8ca703a1e727a91480f2d146f19280dab6e3e0ac40f035c07191b5d0750e.jpg)


![教材插图](/books/thomas-calculus/assets/b84c4c26920ec2e00264c9f9469cb962813e6ea383c7ac19b9e68cbe34543c79.jpg)



FIGURE 2.67 Zooming in on a zero of the function $f(x) = x^{3} - x - 1$ . The zero is near x = 1.3247 (Example 10).


**EXAMPLE 11** Use the Intermediate Value Theorem to prove that the equation 

$$
\sqrt {2 x + 5} = 4 - x ^ {2}
$$

has a solution (Figure 2.68). 

**Solution** We rewrite the equation as 

$$
\sqrt {2 x + 5} + x ^ {2} - 4 = 0,
$$

and set $f(x) = \sqrt{2x + 5} + x^{2} - 4$ . Now $g(x) = \sqrt{2x + 5}$ is continuous on the interval $[-5/2, \infty)$ since it is formed as the composition of two continuous functions, the square root function with the nonnegative linear function $y = 2x + 5$ . Then f is the sum of the function g and the quadratic function $y = x^{2} - 4$ , and the quadratic function is continuous for all values of x. It follows that $f(x) = \sqrt{2x + 5} + x^{2} - 4$ is continuous on the interval $[-5/2, \infty)$ . By trial and error, we find the function values $f(0) = \sqrt{5} - 4 \approx -1.76$ and $f(2) = \sqrt{9} = 3$ . Note that f is continuous on the finite closed interval $[0, 2]$ , which is a subset of the domain $[-5/2, \infty)$ . Since the value $y_{0} = 0$ is between the numbers $f(0) = -1.76$ and $f(2) = 3$ , by the Intermediate Value Theorem there is a number $c \in [0, 2]$ such that $f(c) = 0$ . We have found a number c that solves the original equation. 

### Continuous Extension to a Point

Sometimes the formula that describes a function $f$ does not make sense at a point $x = c$ . It might nevertheless be possible to extend the domain of $f$ to include $x = c$ , creating a new function that is continuous at $x = c$ . For example, the function $y = f(x) = (\sin x) / x$ is continuous at every point except $x = 0$ , since $x = 0$ is not in its domain. Since $y = (\sin x) / x$ has a finite limit as $x \to 0$ (Theorem 6), we can extend the function's domain to include the point $x = 0$ in such a way that the extended function is continuous at $x = 0$ . We define the new function 

$$
F (x) = \left\{ \begin{array}{l l} \frac {\sin x}{x}, & x \neq 0 \quad \text { Same   as   original   function   for } x \neq 0 \\ 1, & x = 0. \quad \text { Value   at   domain   point } x = 0 \end{array} \right.
$$

$$
\lim _ {x \to 0} \frac {\sin x}{x} = F (0),
$$


(b)


The new function $F(x)$ is continuous at x = 0 because 

so it meets the requirements for continuity (Figure 2.69). 

![教材插图](/books/thomas-calculus/assets/e9e513ea67665668d17baee901c556e770b83a264cfde69462f7c7e5fa739d7e.jpg)



FIGURE 2.69 (a) The graph of $f(x) = (\sin x) / x$ for $-\pi / 2 \leq x \leq \pi / 2$ does not include the point $(0,1)$ because the function is not defined at $x = 0$ . (b) We can extend the domain to include $x = 0$ by defining the new function $F(x)$ with $F(0) = 1$ and $F(x) = f(x)$ everywhere else. Note that $F(0) = \lim_{x \to 0} f(x)$ and $F(x)$ is a continuous function at $x = 0$ .



FIGURE 2.70 (a) The graph of $f(x)$ and (b) the graph of its continuous extension $F(x)$ (Example 12).


![教材插图](/books/thomas-calculus/assets/9872eb5efaa7d638e396d8bd09d7f71b5a8eeadbf7b11cf45f51642b870b1f23.jpg)


More generally, a function (such as a rational function) may have a limit at a point where it is not defined. If $f(c)$ is not defined, but $\lim_{x\to c}f(x)=L$ exists, we can define a new function $F(x)$ by the rule 

![教材插图](/books/thomas-calculus/assets/4a70441cb6d22aad2f6128bd52aa37a6d895467ea56081f0f1e3d22f601ccd00.jpg)



(a)


$$
F (x) = \left\{ \begin{array}{l l} f (x), & \text { if   } x \text {   is   in   the   domain   of   } f \\ L, & \text { if   } x = c. \end{array} \right.
$$

The function F is continuous at x = c. It is called the continuous extension of f to x = c. For rational functions f, continuous extensions are often found by canceling common factors in the numerator and denominator. 

**EXAMPLE 12** Show that

$$
f (x) = \frac {x ^ {2} + x - 6}{x ^ {2} - 4}, x \neq 2
$$

has a continuous extension to x = 2, and find that extension. 

**Solution** Although $f(2)$ is not defined, if $x \neq 2$ we have 

$$
f (x) = \frac {x ^ {2} + x - 6}{x ^ {2} - 4} = \frac {(x - 2) (x + 3)}{(x - 2) (x + 2)} = \frac {x + 3}{x + 2}.
$$

The new function 

$$
F (x) = \frac {x + 3}{x + 2}
$$

is equal to $f(x)$ for $x \neq 2$ , but is continuous at x = 2, having there the value of 5/4. Thus F is the continuous extension of f to x = 2, and 

$$
\lim _ {x \rightarrow 2} \frac {x ^ {2} + x - 6}{x ^ {2} - 4} = \lim _ {x \rightarrow 2} f (x) = \frac {5}{4}.
$$

The graph of f is shown in Figure 2.70. The continuous extension F has the same graph except with no hole at $(2, 5/4)$ . Effectively, F is the function f extended across the missing domain point at x = 2 so as to give a continuous function over the larger domain. 

### EXERCISES

#### Continuity from Graphs

In Exercises 1–4, say whether the function graphed is continuous on $[-1,3]$ . If not, where does it fail to be continuous and why? 


1.


![教材插图](/books/thomas-calculus/assets/d24f8d8a7e4f1d9f5ee9188fa0e588b1d7ed4401c1f86abbd6994fad74bb6f05.jpg)



2.



3.


![教材插图](/books/thomas-calculus/assets/089c4baf4bc11140cd217e592b6bd29595aa21220482a9e5451d8dd9e65acab4.jpg)


![教材插图](/books/thomas-calculus/assets/bc7eadc6d17b64b4ea571dc635d905e5a8d46a331dcdab22b8d2fc1bca76bbbf.jpg)



4.


![教材插图](/books/thomas-calculus/assets/0b38a0c65285ded033e3cc5ca6f8136ef117406c850df3af1359874be70168ff.jpg)


Exercises 5–10 refer to the function 

$x^{2} - 1,\quad -1\leq x <   0$ 

$$
0 <   x <   1
$$

$$
f (x) = \left\{ \begin{array}{c} 1, \\ - 2 x + 4, \\ 0, \end{array} \right.
$$

$$
x = 1
$$

$$
1 <   x <   2
$$

$$
2 <   x <   3
$$

graphed in the accompanying figure. 

![教材插图](/books/thomas-calculus/assets/b86f04fbb8e1097604f240cec14455d4bd4b2d6bdab6f2437d99e7602c14eb6a.jpg)


5. a. Does $f(-1)$ exist? 

b. Does $\lim_{x\to -1^{+}}f(x)$ exist? 

c. Does $\lim_{x\to -1^{+}}f(x) = f(-1)$ ? 

d. Is $f$ continuous at $x = -1$ ? 

6. a. Does $f(1)$ exist? 

b. Does $\lim_{x\to 1}f(x)$ exist? 

c. Does $\lim_{x\to1}f(x)=f(1)$ ? 

d. Is $f$ continuous at $x = 1$ ? 

7. a. Is $f$ defined at $x = 2$ ? (Look at the definition of $f$ .)
b. Is $f$ continuous at $x = 2$ ? 

8. At what values of $x$ is $f$ continuous? 

9. What value should be assigned to $f(2)$ to make the extended function continuous at $x = 2$ ? 

10. To what new value should $f(1)$ be changed to remove the discontinuity? 

Applying the Continuity Test 

At which points do the functions in Exercises 11 and 12 fail to be continuous? At which points, if any, are the discontinuities removable? Not removable? Give reasons for your answers. 

11. The function defined in Exercise 1, Section 2.4 

12. The function defined in Exercise 2, Section 2.4 

At what points are the functions in Exercises 13–32 continuous? 

13. $y = \frac{1}{x - 2} - 3x$ 

14. $y = \frac{1}{(x + 2)^2} + 4$ 

15. $y = \frac{x + 1}{x^{2} - 4x + 3}$ 

16. $y = \frac{x + 3}{x^2 - 3x - 10}$ 

17. $y = |x - 1| + \sin x$ 

18. $y = \frac{1}{|x| + 1} -\frac{x^2}{2}$ 

19. $y = \frac{\cos x}{x}$ 

20. $y = \frac{x + 2}{\cos x}$ 

21. $y = \csc 2x$ 

22. $y = \tan \frac{\pi x}{2}$ 

23. $y = \frac{x\tan x}{x^2 + 1}$ 

24. $y = \frac{\sqrt{x^4 + 1}}{1 + \sin^2 x}$ 

25. $y = \sqrt{2x + 3}$ 

26. $y = \sqrt[4]{3x - 1}$ 

27. $y = (2x - 1)^{1 / 3}$ 

28. $y = (2 - x)^{1 / 5}$ 

29. $g(x) = \left\{ \begin{array}{ll}\frac{x^2 - x - 6}{x - 3}, & x\neq 3\\ 5, & x = 3 \end{array} \right.$ 

30. $f(x) = \left\{ \begin{array}{ll}\frac{x^3 - 8}{x^2 - 4}, & x \neq 2, x \neq -2\\ 3, & x = 2\\ 4, & x = -2 \end{array} \right.$ 

31. $f(x) = \left\{ \begin{array}{ll}1 - x, & x <   0\\ e^{x}, & 0\leq x\leq 1\\ x^{2} + 2, & x > 1 \end{array} \right.$ 

32. $f(x) = \frac{x + 3}{2 - e^x}$ 

Limits Involving Trigonometric Functions 

Find the limits in Exercises 33–40. Are the functions continuous at the point being approached? 

33. $\lim_{x\to \pi}\sin (x - \sin x)$

34. $\lim_{t\to 0}\sin \left(\frac{\pi}{2}\cos (\tan t)\right)$

35. $\lim_{y\to 1}\sec (y\sec^2 y - \tan^2 y - 1)$ 

36. $\lim_{x\to 0}\tan \left(\frac{\pi}{4}\cos (\sin x^{1 / 3})\right)$ 

37. $\lim_{t\to 0}\cos \left(\frac{\pi}{\sqrt{19 - 3\sec 2t}}\right)$

38. $\lim_{x\to \pi /6}\sqrt{\csc^2x + 5\sqrt{3}\tan x}$

39. $\lim_{x\to 0^{+}}\sin \left(\frac{\pi}{2} e^{\sqrt{x}}\right)$

40. $\lim_{x\to 1}\cos^{-1}(\ln \sqrt{x})$

41. $\lim_{x\to 0}\sec \left[e^x +\pi \tan \left(\frac{\pi}{4\sec x}\right) - 1\right]$ 

42. $\lim_{x\to0}\sin\left(\frac{\pi+\tan x}{\tan x-2\sec x}\right)$ 

43. $\lim_{t\to 0}\tan \left(1 - \frac{\sin t}{t}\right)$

44. $\lim_{\theta \to 0}\cos \left(\frac{\pi\theta}{\sin\theta}\right)$

#### Continuous Extensions

45. Define $g(3)$ in a way that extends $g(x) = (x^{2} - 9)/(x - 3)$ to be continuous at x = 3. 

46. Define $h(2)$ in a way that extends $h(t) = (t^{2} + 3t - 10)/(t - 2)$ to be continuous at t = 2. 

47. Define $f(1)$ in a way that extends $f(s) = (s^{3} - 1)/(s^{2} - 1)$ to be continuous at s = 1. 

48. Define $g(4)$ in a way that extends 

$$
g (x) = (x ^ {2} - 1 6) / (x ^ {2} - 3 x - 4)
$$

to be continuous at x = 4. 

49. For what value of $a$ is 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2} - 1, & x <   3 \\ 2 a x, & x \geq 3 \end{array} \right.
$$

continuous at every $x$ ? 

50. For what value of b is 

$$
g (x) = \left\{ \begin{array}{l l} x, & x <   - 2 \\ b x ^ {2}, & x \geq - 2 \end{array} \right.
$$

continuous at every $x$ ? 

51. For what values of $a$ is 

$$
f (x) = \left\{ \begin{array}{l l} a ^ {2} x - 2 a, & x \geq 2 \\ 1 2, & x <   2 \end{array} \right.
$$

continuous at every $x$ ? 

52. For what values of $b$ is 

$$
g (x) = \left\{ \begin{array}{l l} \frac {x - b}{b + 1}, & x \leq 0 \\ x ^ {2} + b, & x > 0 \end{array} \right.
$$

continuous at every $x$ ? 

53. For what values of $a$ and $b$ is 

$$
f (x) = \left\{ \begin{array}{l l} - 2, & x \leq - 1 \\ a x - b, & - 1 <   x <   1 \\ 3, & x \geq 1 \end{array} \right.
$$

continuous at every $x$ ? 

54. For what values of $a$ and $b$ is 

$$
g (x) = \left\{ \begin{array}{l l} a x + 2 b, & x \leq 0 \\ x ^ {2} + 3 a - b, & 0 <   x \leq 2 \\ 3 x - 5, & x > 2 \end{array} \right.
$$

continuous at every $x$ ? 

In Exercises 55–58, graph the function f to see whether it appears to have a continuous extension to x = 0. If it does, use Trace and Zoom to find a good candidate for the extended function's value at x = 0. If the function does not appear to have a continuous extension, can it be extended to be continuous at x = 0 from the right or from the left? If so, what do you think the extended function's value(s) should be? 

55. $f(x) = \frac{10^x - 1}{x}$ 

$$
\mathbf {5 6 .} f (x) = \frac {1 0 ^ {| x |} - 1}{x}
57. $$f(x) = \frac{\sin x}{|x|}$$
f (x) = (1 + 2 x) ^ {1 / x}
$$

Theory and Examples 

59. A continuous function $y = f(x)$ is known to be negative at x = 0 and positive at x = 1. Why does the equation $f(x) = 0$ have at least one solution between x = 0 and x = 1? Illustrate with a sketch. 

60. Explain why the equation $\cos x = x$ has at least one solution. 

61. Roots of a cubic Show that the equation $x^{3} - 15x + 1 = 0$ has three solutions in the interval $[-4, 4]$ . 

62. A function value Show that the function $F(x) = (x - a)^{2}$ . $(x - b)^{2} + x$ takes on the value $(a + b)/2$ for some value of x. 

63. Solving an equation If $f(x) = x^{3} - 8x + 10$ , show that there are values c for which $f(c)$ equals (a) $\pi$ ; (b) $-\sqrt{3}$ ; (c) 5,000,000. 

64. Explain why the following five statements ask for the same information. 

a. Find the roots of $f(x) = x^{3} - 3x - 1$ . 

b. Find the x-coordinates of the points where the curve $y = x^{3}$ crosses the line $y = 3x + 1$ . 

c. Find all the values of x for which $x^{3} - 3x = 1$ . 

d. Find the $x$ -coordinates of the points where the cubic curve $y = x^3 - 3x$ crosses the line $y = 1$ . 

e. Solve the equation $x^{3} - 3x - 1 = 0$ . 

65. Removable discontinuity Give an example of a function $f(x)$ that is continuous for all values of $x$ except $x = 2$ , where it has a removable discontinuity. Explain how you know that $f$ is discontinuous at $x = 2$ , and how you know the discontinuity is removable. 

66. Nonremovable discontinuity Give an example of a function $g(x)$ that is continuous for all values of $x$ except $x = -1$ , where it has a nonremovable discontinuity. Explain how you know that $g$ is discontinuous there and why the discontinuity is not removable. 

67. A function discontinuous at every point 

a. Use the fact that every nonempty interval of real numbers contains both rational and irrational numbers to show that the function 

$$
f (x) = \left\{ \begin{array}{l l} 1, & \text { if   } x \text {   is   rational } \\ 0, & \text { if   } x \text {   is   irrational } \end{array} \right.
$$

is discontinuous at every point. 

b. Is $f$ right-continuous or left-continuous at any point? 

68. If functions $f(x)$ and $g(x)$ are continuous for $0 \leq x \leq 1$ , could $f(x) / g(x)$ possibly be discontinuous at a point of [0,1]? Give reasons for your answer. 

69. If the product function $h(x) = f(x) \cdot g(x)$ is continuous at x = 0, must $f(x)$ and $g(x)$ be continuous at x = 0? Give reasons for your answer. 

70. Discontinuous compositions of continuous functions Give an example of functions $f$ and $g$ , both continuous at $x = 0$ , for which the composition $f \circ g$ is discontinuous at $x = 0$ . Does this contradict Theorem 9? Give reasons for your answer. 

71. Never-zero continuous functions Is it true that a continuous function that is never zero on an interval never changes sign on that interval? Give reasons for your answer. 

72. Stretching a rubber band Is it true that if you stretch a rubber band by moving one end to the right and the other to the left, some point of the band will end up in its original position? That is, if x is a position on the rubber band before stretching and $f(x)$ is the position of that point after stretching, must there be some x such that $f(x) = x$ ? Give reasons for your answer. 

73. A fixed point theorem Suppose that a function $f$ is continuous on the closed interval [0,1] and that $0 \leq f(x) \leq 1$ for every $x$ in [0,1]. Show that there must exist a number $c$ in [0,1] such that $f(c) = c$ ( $c$ is called a fixed point of $f$ ). 

74. The sign-preserving property of continuous functions Let $f$ be defined on an interval $(a, b)$ and suppose that $f(c) \neq 0$ at some $c$ where $f$ is continuous. Show that there is an interval $(c - \delta, c + \delta)$ about $c$ where $f$ has the same sign as $f(c)$ . 

75. Prove that $f$ is continuous at $c$ if and only if 

$$
\lim _ {h \to 0} f (c + h) = f (c).
76. $Use Exercise 75 together with the identities$
\begin{array}{l} \sin (h + c) = \sin h \cos c + \cos h \sin c, \\ \cos (h + c) = \cos h \cos c - \sin h \sin c \end{array}
$$

to prove that both $f(x) = \sin x$ and $g(x) = \cos x$ are continuous at every point $x = c$ . 

#### Solving Equations Graphically

Use the Intermediate Value Theorem in Exercises 77–84 to prove that each equation has a solution. Then use a graphing calculator or computer grapher to solve the equations. 

77. $x ^ {3} - 3 x - 1 = 0 \quad 7 8. 2 x ^ {3} - 2 x ^ {2} - 2 x + 1 = 0$

79. $x(x - 1)^2 = 1$ (one root)

80. $x^{x} = 2$

81. $\sqrt{x} +\sqrt{1 + x} = 4$ 

82. $x^{3} - 15x + 1 = 0$ (three roots) 

83. $\cos x = x$ (one root). Make sure you are using radian mode. 

84. $2 \sin x = x$ (three roots). Make sure you are using radian mode. 

## CHAPTER 2 Questions to Guide Your Review

1. What is the average rate of change of the function $g(t)$ over the interval from t = a to t = b? How is it related to a secant line? 

2. What limit must be calculated to find the rate of change of a function $g(t)$ at $t = t_{0}$ ? 

3. Give an informal or intuitive definition of the limit 

$$
\lim _ {x \to c} f (x) = L.
$$

Why is the definition “informal”? Give examples. 

4. Does the existence and value of the limit of a function $f(x)$ as x approaches c ever depend on what happens at x = c? Explain and give examples. 

5. What function behaviors might occur for which the limit may fail to exist? Give examples. 

6. What theorems are available for calculating limits? Give examples of how the theorems are used. 

7. How are one-sided limits related to limits? How can this relationship sometimes be used to calculate a limit or prove it does not exist? Give examples. 

8. What is the value of $\lim_{\theta\to0}((\sin\theta)/\theta)$ ? Does it matter whether $\theta$ is measured in degrees or radians? Explain. 

9. What exactly does $\lim_{x\to c}f(x) = L$ mean? Give an example in which you find $\delta >0$ for a given $f,L,c,$ and $\varepsilon >0$ in the precise definition of limit. 

10. Give precise definitions of the following statements. 

$$
\lim _ {x \to 2 ^ {-}} f (x) = 5
$$

$$
\lim _ {x \to 2 ^ {+}} f (x) = 5
$$

$$
\lim _ {x \to 2} f (x) = \infty
$$

$$
\lim _ {x \to 2} f (x) = - \infty
$$

11. What conditions must be satisfied by a function if it is to be continuous at an interior point of its domain? At an endpoint? 

12. How can looking at the graph of a function help you tell where the function is continuous? 

13. What does it mean for a function to be right-continuous at a point? Left-continuous? How are continuity and one-sided continuity related? 

14. What does it mean for a function to be continuous on an interval? Give examples to illustrate the fact that a function that is not continuous on its entire domain may still be continuous on selected intervals within the domain. 

15. What are the basic types of discontinuity? Give an example of each. What is a removable discontinuity? Give an example. 

16. What does it mean for a function to have the Intermediate Value Property? What conditions guarantee that a function has this property over an interval? What are the consequences for graphing and solving the equation $f(x) = 0$ ? 

17. Under what circumstances can you extend a function $f(x)$ to be continuous at a point x = c? Give an example. 

18. What exactly do $\lim_{x\to \infty}f(x) = L$ and $\lim_{x\to -\infty}f(x) = L$ mean? Give examples. 

19. What are $\lim_{x\to\pm\infty}k$ (k a constant) and $\lim_{x\to\pm\infty}(1/x)$ ? How do you extend these results to other functions? Give examples. 

20. How do you find the limit of a rational function as $x \to \pm \infty$ ? Give examples. 

21. What are horizontal and vertical asymptotes? Give examples. 

## CHAPTER 2 Practice Exercises

### Limits and Continuity

1. Graph the function 

$$
f (x) = \left\{ \begin{array}{l l} 1, & x \leq - 1 \\ - x, & - 1 <   x <   0 \\ 1, & x = 0 \\ - x, & 0 <   x <   1 \\ 1, & x \geq 1. \end{array} \right.
$$

Then discuss, in detail, limits, one-sided limits, continuity, and one-sided continuity of f at x = -1, 0, and 1. Are any of the discontinuities removable? Explain. 

2. Repeat the instructions of Exercise 1 for 

$$
f (x) = \left\{ \begin{array}{c l} 0, & x \leq - 1 \\ 1 / x, & 0 <   | x | <   1 \\ 0, & x = 1 \\ 1, & x > 1. \end{array} \right.
$$

3. Suppose that $f(t)$ and $f(t)$ are defined for all $t$ and that $\lim_{t \to t_0} f(t) = -7$ and $\lim_{t \to t_0} g(t) = 0$ . Find the limit as $t \to t_0$ of the following functions.
a. $3f(t)$ b. $(f(t))^2$ c. $f(t) \cdot g(t)$ d. $\frac{f(t)}{g(t) - 7}$ e. $\cos(g(t))$ f. $|f(t)|$ g. $f(t) + g(t)$ h. $1/f(t)$ 

4. Suppose the functions $f(x)$ and $g(x)$ are defined for all $x$ and that $\lim_{x\to 0}f(x) = 1 / 2$ and $\lim_{x\to 0}g(x) = \sqrt{2}$ . Find the limits as $x\to 0$ of the following functions.
a. $-g(x)$ b. $g(x)\cdot f(x)$ c. $f(x) + g(x)$ d. $1 / f(x)$ e. $x + f(x)$ f. $\frac{f(x)\cdot\cos x}{x - 1}$ 

In Exercises 5 and 6, find the value that $\lim_{x\to 0}g(x)$ must have if the given limit statements hold. 

5. $\lim_{x\to 0}\left(\frac{4 - g(x)}{x}\right) = 1$

6. $\lim_{x\to -4}\left(x\lim_{x\to 0}g(x)\right) = 2$

7. On what intervals are the following functions continuous?
a. $f(x) = x^{1/3}$ b. $g(x) = x^{3/4}$ c. $h(x) = x^{-2/3}$ d. $k(x) = x^{-1/6}$ 

8. On what intervals are the following functions continuous?
a. $f(x) = \tan x$ b. $g(x) = \csc x$ c. $h(x) = \frac{\cos x}{x - \pi}$ d. $k(x) = \frac{\sin x}{x}$ 

### Finding Limits

In Exercises 9–28, find the limit or explain why it does not exist. 

$$
\frac {x ^ {2} - 4 x + 4}{x ^ {3} + 5 x ^ {2} - 1 4 x}
$$

$$
\text { as } x \rightarrow 0
$$

$$
\text { as } x \rightarrow 2
$$

10. $\lim \frac{x^2 + x}{x^5 + 2x^4 + x^3}$ a. as $x\to 0$ b. as $x\to -1$ 

11. $\lim_{x\to 1}\frac{1 - \sqrt{x}}{1 - x}$ 

12. $\lim_{x\to a}\frac{x^2 - a^2}{x^4 - a^4}$ 

13. $\lim_{h\to 0}\frac{(x + h)^2 - x^2}{h}$ 

14. $\lim_{x\to 0}\frac{(x + h)^2 - x^2}{h}$ 

15. $\lim_{x\to0}\frac{\frac{1}{2+x}-\frac{1}{2}}{x}$ 

16. $\lim_{x\to 0}\frac{(2 + x)^3 - 8}{x}$ 

17. $\lim_{x\to 1}\frac{x^{1 / 3} - 1}{\sqrt{x} - 1}$ 

18. $\lim_{x\to 64}\frac{x^{2 / 3} - 16}{\sqrt{x} - 8}$ 

$$
\lim _ {x \rightarrow 0} \frac {\tan (2 x)}{\tan (\pi x)}
$$

20. $\lim_{x\to \pi^{-}}\csc x$ 

21. $\lim_{x\to \pi}\sin \left(\frac{x}{2} +\sin x\right)$ 

22. $\lim_{x\to \pi}\cos^2 (x - \tan x)$ 

23. $\lim_{x\to 0}\frac{8x}{3\sin{x} - x}$ 

24. $\lim_{x\to 0}\frac{\cos 2x - 1}{\sin x}$ 

25. $\lim_{t\to 3^{+}}\ln (t - 3)$ 

26. $\lim_{t\to 1}t^2\ln (2 - \sqrt{t})$ 

27. $\lim_{\theta \to 0^{+}}\sqrt{\theta} e^{\cos (\pi /\theta)}$ 

28. $\lim_{z\to 0^{+}}\frac{2e^{1 / z}}{e^{1 / z} + 1}$ 

In Exercises 29–32, find the limit of $g(x)$ as x approaches the indicated value. 

29. $\lim_{x\to 0^{+}}(4g(x))^{1 / 3} = 2$ 

30. $\lim_{x\to \sqrt{5}}\frac{1}{x + g(x)} = 2$ 

31. $\lim_{x\to 1}\frac{3x^2 + 1}{g(x)} = \infty$ 

32. $\lim_{x\to -2}\frac{5 - x^2}{\sqrt{g(x)}} = 0$ 

T Roots 

33. Let $f(x) = x^3 - x - 1$ . 

a. Use the Intermediate Value Theorem to show that $f$ has a zero between -1 and 2. 

b. Solve the equation $f(x) = 0$ graphically with an error of magnitude at most $10^{-8}$ . 

c. It can be shown that the exact value of the solution in part (b) is 

$$
\left(\frac {1}{2} + \frac {\sqrt {6 9}}{1 8}\right) ^ {1 / 3} + \left(\frac {1}{2} - \frac {\sqrt {6 9}}{1 8}\right) ^ {1 / 3}.
$$

Evaluate this exact answer and compare it with the value you found in part (b). 

T 34. Let $f(\theta) = \theta^{3} - 2\theta + 2$ . 

a. Use the Intermediate Value Theorem to show that $f$ has a zero between $-2$ and $0$ . 

b. Solve the equation $f(\theta) = 0$ graphically with an error of magnitude at most $10^{-4}$ . 

c. It can be shown that the exact value of the solution in part (b) is 

$$
\left(\sqrt {\frac {1 9}{2 7}} - 1\right) ^ {1 / 3} - \left(\sqrt {\frac {1 9}{2 7}} + 1\right) ^ {1 / 3}.
$$

Evaluate this exact answer and compare it with the value you found in part (b). 

Continuous Extension 

35. Can $f(x) = x(x^2 - 1) / |x^2 - 1|$ be extended to be continuous at $x = 1$ or $-1$ ? Give reasons for your answers. (Graph the function—you will find the graph interesting.) 

36. Explain why the function $f(x) = \sin(1/x)$ has no continuous extension to x = 0. 

In Exercises 37–40, graph the function to see whether it appears to have a continuous extension to the given point $a$ . If it does, use Trace and Zoom to find a good candidate for the extended function's value at $a$ . If the function does not appear to have a continuous extension, can it be extended to be continuous from the right or left? If so, what do you think the extended function's value should be? 

37. $f(x) = \frac{x - 1}{x - \sqrt[4]{x}}, a = 1$ 

38. $g(\theta) = \frac{5\cos\theta}{4\theta - 2\pi}, a = \pi / 2$ 

39. $h(t) = (1 + |t|)^{1 / t}, a = 0$ 

40. $k(x) = \frac{x}{1 - 2^{|x|}}$ ， $a = 0$ 

Limits at Infinity 

Find the limits in Exercises 41–54. 

41. $\lim_{x\to \infty}\frac{2x + 3}{5x + 7}$

42. $\lim_{x\to -\infty}\frac{2x^2 + 3}{5x^2 + 7}$

43. $\lim_{x\to -\infty}\frac{x^2 - 4x + 8}{3x^3}$ 

44. $\lim_{x\to\infty}\frac{1}{x^{2}-7x+1}$ 

45. $\lim_{x\to -\infty}\frac{x^2 - 7x}{x + 1}$

46. $\lim_{x\to \infty}\frac{x^4 + x^3}{12x^3 + 128}$

47. $\lim_{x\to \infty}\frac{\sin x}{|x|}$ (If you have a grapher, try graphing the function for $-5\leq x\leq 5.$ ) 

48. $\lim_{\theta \to \infty} \frac{\cos \theta - 1}{\theta}$ (If you have a grapher, try graphing $f(x) = x(\cos(1/x) - 1)$ near the origin to "see" the limit at infinity.) 

49. $\lim_{x\to\infty}\frac{x+\sin x+2\sqrt{x}}{x+\sin x}$ 

50. $\lim_{x\to \infty}\frac{x^{2 / 3} + x^{-1}}{x^{2 / 3} + \cos^2x}$ 

51. $\lim_{x\to\infty}e^{1/x}\cos\frac{1}{x}$ 

52. $\lim_{t\to \infty}\ln \left(1 + \frac{1}{t}\right)$ 

53. $\lim_{x\to -\infty}\tan^{-1}x$ 

54. $\lim_{t\to -\infty}e^{3t}\sin^{-1}\left(\frac{1}{t}\right)$ 

Horizontal and Vertical Asymptotes 

55. Use limits to determine the equations for all vertical asymptotes.
a. $y = \frac{x^{2} + 4}{x - 3}$ b. $f(x) = \frac{x^{2} - x - 2}{x^{2} - 2x + 1}$ c. $y = \frac{x^{2} + x - 6}{x^{2} + 2x - 8}$ 

56. Use limits to determine the equations for all horizontal asymptotes.
a. $y = \frac{1 - x^{2}}{x^{2} + 1}$ b. $f(x) = \frac{\sqrt{x} + 4}{\sqrt{x + 4}}$ c. $g(x) = \frac{\sqrt{x^{2} + 4}}{x}$ d. $y = \sqrt{\frac{x^{2} + 9}{9x^{2} + 1}}$ 

57. Determine the domain and range of $y = \frac{\sqrt{16 - x^2}}{x - 2}$ . 

58. Assume that constants $a$ and $b$ are positive. Find equations for all horizontal and vertical asymptotes for the graph of $y = \frac{\sqrt{ax^2 + 4}}{x - b}$ . 

## CHAPTER 2

### Additional and Advanced Exercises

T 1. Assigning a value to $\mathbf{0}^{\mathbf{0}}$ The rules of exponents tell us that $a^0 = 1$ if $a$ is any number different from zero. They also tell us that $0^n = 0$ if $n$ is any positive number. 

If we tried to extend these rules to include the case $0^{0}$ , we would get conflicting results. The first rule would say $0^{0} = 1$ , whereas the second would say $0^{0} = 0$ . 

We are not dealing with a question of right or wrong here. Neither rule applies as it stands, so there is no contradiction. We could, in fact, define $0^{0}$ to have any value we wanted as long as we could persuade others to agree. 

What value would you like $0^{0}$ to have? Here is an example that might help you to decide. (See Exercise 2 below for another example.) 

a. Calculate $x^{x}$ for x = 0.1, 0.01, 0.001, and so on as far as your calculator can go. Record the values you get. What pattern do you see? 

b. Graph the function $y = x^{x}$ for $0 < x \leq 1$ . Even though the function is not defined for $x \leq 0$ , the graph will approach the y-axis from the right. Toward what y-value does it seem to be headed? Zoom in to further support your idea. 

2. A reason you might want $\mathbf{0}^0$ to be something other than 0 or 1 As the number $x$ increases through positive values, the numbers $1 / x$ and $1 / (\ln x)$ both approach zero. What happens to the number 

$$
f (x) = \left(\frac {1}{x}\right) ^ {1 / (\ln x)}
$$

as $x$ increases? Here are two ways to find out. 

a. Evaluate $f$ for $x = 10, 100, 1000$ , and so on as far as your calculator can reasonably go. What pattern do you see? 

b. Graph $f$ in a variety of graphing windows, including windows that contain the origin. What do you see? Trace the $y$ -values along the graph. What do you find? 

3. Lorentz contraction In relativity theory, the length of an object, say a rocket, appears to an observer to depend on the speed at which the object is traveling with respect to the observer. If the observer measures the rocket's length as $L_0$ at rest, then at speed $v$ the length will appear to be 

$$
L = L _ {0} \sqrt {1 - \frac {v ^ {2}}{c ^ {2}}}.
$$

This equation is the Lorentz contraction formula. Here, c is the speed of light in a vacuum, about $3 \times 10^{8}$ m/s. What happens to L as v increases? Find $\lim_{L} L$ . Why was the left-hand limit needed? 

4. Controlling the flow from a draining tank Torricelli's law says that if you drain a tank like the one in the figure shown, the rate $y$ at which water runs out is a constant times the square root of the water's depth $x$ . The constant depends on the size and shape of the exit valve. 

![教材插图](/books/thomas-calculus/assets/88e53469427d31658e0fa121ae9c8211aa9511bbe05490125c9b03c6055c07cf.jpg)


Suppose that $y = \sqrt{x}/2$ for a certain tank. You are trying to maintain a fairly constant exit rate by adding water to the tank with a hose from time to time. How deep must you keep the water if you want to maintain the exit rate 

a. within $0.2 \, m^{3}/h$ of the rate $y_{0} = 1 \, m^{3}/h$ ? 

b. within $0.1 \, m^{3}/h$ of the rate $y_{0} = 1 \, m^{3}/h$ ? 

5. Thermal expansion in precise equipment As you may know, most metals expand when heated and contract when cooled. The dimensions of a piece of laboratory equipment are sometimes so critical that the shop where the equipment is made must be held at the same temperature as the laboratory where the equipment is to be used. A typical aluminum bar that is 10 cm wide at $20^{\circ}$ C will be 

$$
y = 1 0 + 2 (t - 2 0) \times 1 0 ^ {- 4}
$$

Centimeters wide at a nearby temperature t. Suppose that you are using a bar like this in a gravity wave detector, where its width must stay within 0.0005 cm of the ideal 10 cm. How close to $t_{0} = 20^{\circ}C$ must you maintain the temperature to ensure that this tolerance is not exceeded? 

6. Stripes on a measuring cup The interior of a typical 1-L measuring cup is a right circular cylinder of radius 6 cm (see accompanying figure). The volume of water we put in the cup is therefore a function of the level h to which the cup is filled, the formula being 

$$
V = \pi 6 ^ {2} h = 3 6 \pi h.
$$

How closely must we measure h to measure out 1 L of water ( $1000 \, cm^{3}$ ) with an error of no more than 1% ( $10 \, cm^{3}$ )? 

![教材插图](/books/thomas-calculus/assets/36596623fa8eea5a1c168173ae1ffe744d84a5d29c06385ad702edf774717080.jpg)


![教材插图](/books/thomas-calculus/assets/c81e5ebe075daf7b65185dd977493e001fa7ee6d082118c06424853218b5c90b.jpg)



A 1-L measuring cup (a), modeled as a right circular cylinder (b) of radius r = 6 cm


### Precise Definition of Limit

In Exercises 7–10, use the formal definition of limit to prove that the function is continuous at c. 

$$
7. f (x) = x ^ {2} - 7, c = 1 \quad 8. g (x) = 1 / (2 x), c = 1 / 4
$$

$$
\mathbf {9 .} h (x) = \sqrt {2 x - 3}, c = 2 \quad \mathbf {1 0 .} F (x) = \sqrt {9 - x}, c = 5
$$

11. Uniqueness of limits Show that a function cannot have two different limits at the same point. That is, if $\lim_{x\to c}f(x) = L_1$ and $\lim_{x\to c}f(x) = L_2$ , then $L_{1} = L_{2}$ . 

12. Prove the limit Constant Multiple Rule: $\lim_{x\to c}kf(x) = k\lim_{x\to c}f(x)$ for any constant $k$ . 

13. One-sided limits If $\lim_{x\to 0^{+}}f(x) = A$ and $\lim_{x\to 0^{-}}f(x) = B$ find a. $\lim_{x\to 0^{+}}f(x^3 -x)$ b. $\lim_{x\to 0^{-}}f(x^3 -x)$ c. $\lim_{x\to 0^{+}}f(x^{2} - x^{4})$ d. $\lim_{x\to 0^{-}}f(x^{2} - x^{4})$ 

14. Limits and continuity Which of the following statements are true, and which are false? If true, say why; if false, give a counterexample (that is, an example confirming the falsehood). 

a. If $\lim_{x\to c}f(x)$ exists but $\lim_{x\to c}g(x)$ does not exist, then $\lim_{x\to c}(f(x)+g(x))$ does not exist. 

b. If neither $\lim_{x\to c}f(x)$ nor $\lim_{x\to c}g(x)$ exists, then $\lim_{x\to c}(f(x)+g(x))$ does not exist. 

c. If $f$ is continuous at $x$ , then so is $|f|$ . 

d. If $|f|$ is continuous at c, then so is f. 

In Exercises 15 and 16, use the formal definition of limit to prove that the function has a continuous extension to the given value of x. 

15. $f(x) = \frac{x^{2} - 1}{x + 1}, x = -1$ 

16. $g(x) = \frac{x^2 - 2x - 3}{2x - 6}, x = 3$ 

17. A function continuous at only one point Let 

$f(x) = \left\{ \begin{array}{ll}x & \text{if } x \text{ is rational}\\ 0 & \text{if } x \text{ is irrational.} \end{array} \right.$ 

a. Show that $f$ is continuous at $x = 0$ . 

b. Use the fact that every nonempty open interval of real numbers contains both rational and irrational numbers to show that f is not continuous at any nonzero value of x. 

18. The Dirichlet ruler function If $x$ is a rational number, then $x$ can be written in a unique way as a quotient of integers $m / n$ , where $n > 0$ and $m$ and $n$ have no common factors greater than 1. (We say that such a fraction is in lowest terms. For example, 6/4 written in lowest terms is 3/2.) Let $f(x)$ be defined for all $x$ in the interval [0, 1] by 

$f(x) = \left\{ \begin{array}{ll}1 / n & \text{if } x = m / n \text{ is a rational number is lowest terms}\\ 0 & \text{if } x \text{ is irrational.} \end{array} \right.$ 

For instance, $f(0) = f(1) = 1$ , $f(1/2) = 1/2$ , $f(1/3) =$ 

$f(2 / 3) = 1 / 3, f(1 / 4) = f(3 / 4) = 1 / 4$ , and so on. 

a. Show that $f$ is discontinuous at every rational number in [0, 1]. 

b. Show that $f$ is continuous at every irrational number in [0, 1]. (Hint: If $\varepsilon$ is a given positive number, show that there are only finitely many rational numbers $r$ in [0, 1] such that $f(r) \geq \varepsilon$ .) 

c. Sketch the graph of f. Why do you think f is called the “ruler function”? 

19. Antipodal points Is there any reason to believe that there is always a pair of antipodal (diametrically opposite) points on Earth's equator where the temperatures are the same? Explain. 

20. If $\lim_{x\to c}(f(x)+g(x))=3$ and $\lim_{x\to c}(f(x)-g(x))=-1$ , find $\lim_{x\to c}f(x)g(x)$ . 

21. Roots of a quadratic equation that is almost linear The equation $ax^{2} + 2x - 1 = 0$ , where a is a constant, has two roots if a > -1 and $a \neq 0$ , one positive and one negative: 

$$
r _ {+} (a) = \frac {- 1 + \sqrt {1 + a}}{a}, r _ {-} (a) = \frac {- 1 - \sqrt {1 + a}}{a}.
$$

a. What happens to $r_{+}(a)$ as $a \to 0$ ? As $a \to -1^{+}$ ? 

b. What happens to $r_{-}(a)$ as $a \rightarrow 0$ ? As $a \rightarrow -1^{+}$ ? 

c. Support your conclusions by graphing $r_{+}(a)$ and $r_{-}(a)$ as functions of $a$ . Describe what you see. 

d. For added support, graph $f(x) = ax^2 + 2x - 1$ simultaneously for $a = 1, 0.5, 0.2, 0.1$ , and 0.05. 

22. Root of an equation Show that the equation $x + 2\cos x = 0$ has at least one solution. 

23. Bounded functions A real-valued function $f$ is bounded from above on a set $D$ if there exists a number $N$ such that $f(x) \leq N$ for all $x$ in $D$ . We call $N$ , when it exists, an upper bound for $f$ on $D$ and say that $f$ is bounded from above by $N$ . In a similar manner, we say that $f$ is bounded from below on $D$ if there exists a number $M$ such that $f(x) \geq M$ for all $x$ in $D$ . We call $M$ , when it exists, a lower bound for f on D and say that f is bounded from below by M. We say that f is bounded on D if it is bounded from both above and below. 

a. Show that $f$ is bounded on $D$ if and only if there exists a number $B$ such that $|f(x)| \leq B$ for all $x$ in $D$ . 

b. Suppose that $f$ is bounded from above by $N$ . Show that if $\lim_{x\to c}f(x) = L$ , then $L\leq N$ . 

c. Suppose that $f$ is bounded from below by $M$ . Show that if $\lim_{x\to c}f(x) = L$ , then $L\geq M$ . 

### 24. Max $\{a, b\}$ and min $\{a, b\}$

a. Show that the expression 

$$
\max \{a, b \} = \frac {a + b}{2} + \frac {| a - b |}{2}
$$

equals $a$ if $a \geq b$ and equals $b$ if $b \geq a$ . In other words, $\max \{a, b\}$ gives the larger of the two numbers $a$ and $b$ . 

b. Find a similar expression for $\min\{a, b\}$ , the smaller of a and b. 

Generalized Limits Involving $\frac{\sin\theta}{\theta}$ 

The formula $\lim_{\theta \to 0} (\sin \theta) / \theta = 1$ can be generalized. If $\lim_{x \to c} f(x) = 0$ and $f(x)$ is never zero in an open interval containing the point $x = c$ , except possibly at $c$ itself, then 

$$
\lim _ {x \to c} \frac {\sin f (x)}{f (x)} = 1.
$$

Here are several examples. 

a. $\lim_{x\to 0}\frac{\sin x^2}{x^2} = 1$ 

b. $\lim_{x\to 0}\frac{\sin x^2}{x} = \lim_{x\to 0}\frac{\sin x^2}{x^2}\lim_{x\to 0}\frac{x^2}{x} = 1\cdot 0 = 0$ 

$$
\begin{array}{l}\text {c.} \lim _ {x \rightarrow - 1} \frac {\sin (x ^ {2} - x - 2)}{x + 1}\\= \lim _ {x \rightarrow - 1} \frac {\sin (x ^ {2} - x - 2)}{(x ^ {2} - x - 2)} \cdot \lim _ {x \rightarrow - 1} \frac {(x ^ {2} - x - 2)}{x + 1}\\= 1 \cdot \lim _ {x \rightarrow - 1} \frac {(x + 1) (x - 2)}{x + 1} = - 3\end{array}
$$

d. $\lim_{x\to1}\frac{\sin(1-\sqrt{x})}{x-1}=\lim_{x\to1}\frac{\sin(1-\sqrt{x})}{1-\sqrt{x}}\frac{1-\sqrt{x}}{x-1}$ $=\lim_{x\to1}\frac{(1-\sqrt{x})(1+\sqrt{x})}{(x-1)(1+\sqrt{x})}$ $=\lim_{x\to1}\frac{1-x}{(x-1)(1+\sqrt{x})}=-\frac{1}{2}$ 

Find the limits in Exercises 25–30. 

25. $\lim_{x\to0}\frac{\sin(1-\cos x)}{x}$ 

26. $\lim_{x\to0^{+}}\frac{\sin x}{\sin\sqrt{x}}$ 

27. $\lim_{x\to 0}\frac{\sin(\sin x)}{x}$ 

28. $\lim_{x\to 0}\frac{\sin(x^2 + x)}{x}$ 

29. $\lim_{x\to 2}\frac{\sin(x^2 - 4)}{x - 2}$ 

30. $\lim_{x\to 9}\frac{\sin(\sqrt{x} - 3)}{x - 9}$ 

Trigonometric Limits 

Find the limits in Exercises 31–38. 

31. $\lim_{x\to 0}\frac{\sin x}{2x^2 - x}$ 32. $\lim_{x\to 0}\frac{3x - \tan 7x}{2x}$ 

33. $\lim_{r\to 0}\frac{\sin r}{\tan 2r}$ 34. $\lim_{\theta \to 0}\frac{\sin(\sin\theta)}{\theta}$ 

35. $\lim_{\theta \to (\pi /2)^{-}}\frac{4\tan^2\theta + \tan\theta + 1}{\tan^2\theta + 5}$ 

36. $\lim_{\theta \to 0^{+}}\frac{1 - 2\cot^2\theta}{5\cot^2\theta - 7\cot\theta - 8}$ 

37. $\lim_{x\to0}\frac{x\sin x}{2-2\cos x}$ 

38. $\lim_{\theta \to 0}\frac{1 - \cos\theta}{\theta^2}$ 

Show how to extend the functions in Exercises 39 and 40 to be continuous at the origin. 

39. $g(x) = \frac{\tan(\tan x)}{\tan x}$ 

40. $f(x) = \frac{\tan(\tan x)}{\sin(\sin x)}$ 

### Oblique Asymptotes

Find all possible oblique asymptotes in Exercises 41-44. 

41. $y = \frac{2x^{3 / 2} + 2x - 3}{\sqrt{x} + 1}$ 

42. $y = x + x \sin \frac{1}{x}$ 

43. $y = \sqrt{x^2 + 1}$ 

44. $y = \sqrt{x^2 + 2x}$ 

Showing an Equation Is Solvable 

45. Assume that $1 < a < b$ and $\frac{a}{x} + x = \frac{1}{x - b}$ . Show that this equation is solvable for $x$ . 

### More Limits

46. Find constants a and b so that each of the following limits is true. 

a. $\lim_{x\to 0}\frac{\sqrt{a + bx} - 1}{x} = 2$ 

b. $\lim_{x\to 1}\frac{\tan(ax - a) + b - 2}{x - 1} = 3$ 

47. Evaluate $\lim_{x\to 1}\frac{x^{2 / 3} - 1}{1 - \sqrt{x}}$ 

48. Evaluate $\lim_{x\to0}\frac{|3x+4|-|x|-4}{x}$ . 

### Limits on Arbitrary Domains

The definition of the limit of a function at x = c extends to functions whose domains near c are more complicated than intervals. 

### General Definition of Limit

Suppose every open interval containing c contains a point other than c in the domain of f. We say that $\lim_{x\to c}f(x)=L$ if, for every number $\varepsilon>0$ , there exists a corresponding number $\delta>0$ such that for all x in the domain of f, $|f(x)-L|<\varepsilon$ whenever $0<|x-c|<\delta$ . 

For the functions in Exercises 49–52, 

a. Find the domain. 

b. Show that at $c = 0$ the domain has the property described above. 

c. Evaluate $\lim_{x\to0}f(x)$ . 

49. The function $f$ is defined as follows: $f(x) = x$ if $x = 1 / n$ where $n$ is a positive integer, and $f(0) = 1$ . 

50. The function $f$ is defined as follows: $f(x) = 1 - x$ if $x = 1 / n$ where $n$ is a positive integer, and $f(0) = 1$ . 

51. $f(x) = \sqrt{x\sin(1 / x)}$ 

52. $f(x) = \sqrt{\ln(\sin(1 / x))}$ 

53. Let $g$ be a function with domain the rational numbers, defined by $g(x) = \frac{2}{x - \sqrt{2}}$ for rational $x$ . 

a. Sketch the graph of g as well as you can, keeping in mind that g is defined only at rational points. 

b. Use the general definition of a limit to prove that $\lim_{x\to 0}g(x) = -\sqrt{2}$ . 

c. Prove that $g$ is continuous at the point $x = 0$ by showing that the limit in part (b) equals $g(0)$ . 

d. Is $g$ continuous at other points of its domain? 

## CHAPTER 2 Technology Application Projects

### Mathematica/Maple Projects

Projects can be found within MyLab Math. 

• Take It to the Limit 

Part I 

Part II (Zero Raised to the Power Zero: What Does It Mean?) 

Part III (One-Sided Limits) 

Visualize and interpret the limit concept through graphical and numerical explorations. 

Part IV (What a Difference a Power Makes) 

See how sensitive limits can be with various powers of x. 

- Going to Infinity 

Part I (Exploring Function Behavior as $x \to \infty$ or $x \to -\infty$ ) 

This module provides four examples to explore the behavior of a function as $x \rightarrow \infty$ or $x \rightarrow -\infty$ . 

Part II (Rates of Growth) 

Observe graphs that appear to be continuous, yet the function is not continuous. Several issues of continuity are explored to obtain results that you may find surprising. 

Derivatives 

![教材插图](/books/thomas-calculus/assets/313c7abef6b426546fe63aa50f0fd0309a472658d9d50225635cb981929f426d.jpg)


OVERVIEW In Chapter 2 we discussed how to determine the slope of a curve at a point and how to measure the rate at which a function changes. Now that we have studied limits, we can make these notions precise and see that both are interpretations of the derivative of a function at a point. We then extend this concept from a single point to the derivative function, and we develop rules for finding this derivative function easily, without having to calculate limits directly. These rules are used to find derivatives of most of the common functions reviewed in Chapter 1, as well as combinations of them.
