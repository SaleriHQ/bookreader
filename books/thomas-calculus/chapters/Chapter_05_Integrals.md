---
title: "Chapter 5: Integrals"
order: 5
---

# Chapter 5: Integrals

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 5.1 Area and Estimating with Finite Sums

![[842226d492067833dd013465582b476fb4dfcd620107f6355b61ef00b0c09962.jpg|image]]



FIGURE 5.1 The area of the shaded region R cannot be found by a simple formula.


The basis for formulating definite integrals is the construction of approximations by finite sums. In this section we consider three examples of this process: finding the area under a graph, the distance traveled by a moving object, and the average value of a function. Although we have yet to define precisely what we mean by the area of a general region in the plane, or the average value of a function over a closed interval, we do have intuitive ideas of what these notions mean. We begin our approach to integration by approximating these quantities with simpler finite sums related to these intuitive ideas. We then consider what happens when we take more and more terms in the summation process. In subsequent sections we look at taking the limit of these sums as the number of terms goes to infinity, which leads to a precise definition of the definite integral. 

## Area

Suppose we want to find the area of the shaded region R that lies above the x-axis, below the graph of $y = 1 - x^{2}$ , and between the vertical lines x = 0 and x = 1 (see Figure 5.1). 

![[32d015918a173b0d0ed2ac283a3e00e9a4b987ceb4fae2a8798623bbfcb6a3c1.jpg|image]]


![[9e9a9df8a654ba90af75e1691ead7877763379170c3d909d9f0f5f3fefc5350d.jpg|image]]



FIGURE 5.2 (a) We get an upper sum approximation of the area of R by using two rectangles containing R. (b) Four rectangles give a better upper sum approximation. Both estimates overshoot the true value for the area by the amount shaded in light red.


Unfortunately, there is no simple geometric formula for calculating the areas of general shapes having curved boundaries like the region R. How, then, can we find the area of R? 

Although we do not yet have a method for determining the exact area of R, we can approximate it in a simple way. Figure 5.2a shows two rectangles that together contain the region R. Each rectangle has width 1/2 and they have heights 1 and 3/4 (left to right). The height of each rectangle is the maximum value of the function f in each subinterval. Because the function f is decreasing, the height is its value at the left endpoint of the subinterval of $[0,1]$ that forms the base of the rectangle. The total area of the two rectangles approximates the area A of the region R: 

$$
A \approx 1 \cdot \frac {1}{2} + \frac {3}{4} \cdot \frac {1}{2} = \frac {7}{8} = 0. 8 7 5.
$$

This estimate is larger than the true area A since the two rectangles contain R. We say that 0.875 is an upper sum because it is obtained by taking the height of the rectangle corresponding to the maximum (uppermost) value of $f(x)$ over points x lying in the base of each rectangle. In Figure 5.2b, we improve our estimate by using four thinner rectangles, each of width 1/4, which taken together contain the region R. These four rectangles give the approximation 

$$
A \approx 1 \cdot \frac {1}{4} + \frac {1 5}{1 6} \cdot \frac {1}{4} + \frac {3}{4} \cdot \frac {1}{4} + \frac {7}{1 6} \cdot \frac {1}{4} = \frac {2 5}{3 2} = 0. 7 8 1 2 5,
$$

which is still greater than A since the four rectangles contain R. 

Suppose instead we use four rectangles contained inside the region R to estimate the area, as in Figure 5.3a. Each rectangle has width 1/4, as before, but the rectangles are shorter and lie entirely beneath the graph of f. The function $f(x) = 1 - x^{2}$ is decreasing on [0,1], so the height of each of these rectangles is given by the value of f at the right endpoint of the subinterval forming its base. The fourth rectangle has zero height and therefore contributes no area. Summing these rectangles, whose heights are the minimum value of $f(x)$ over points x in the rectangle's base, gives a lower sum approximation to the area: 

$$
A \approx \frac {1 5}{1 6} \cdot \frac {1}{4} + \frac {3}{4} \cdot \frac {1}{4} + \frac {7}{1 6} \cdot \frac {1}{4} + 0 \cdot \frac {1}{4} = \frac {1 7}{3 2} = 0. 5 3 1 2 5.
$$

This estimate is smaller than the area A since the rectangles all lie inside of the region R. The true value of A lies somewhere between these lower and upper sums: 

$$
0. 5 3 1 2 5 <   A <   0. 7 8 1 2 5.
$$

![[932e3b9cea2aed282ec669a7a4e8959731da0f980efb145782075530cb2ebe2d.jpg|image]]


![[58924dcb7e765faa7d4fb5c1d18dc1313fc783cd05a51b49aae85e78b46ac690.jpg|image]]



FIGURE 5.4 (a) A lower sum using 16 rectangles of equal width $\Delta x = 1/16$ .
(b) An upper sum using 16 rectangles.


![[47738918a359187d993f8ec4ae418dcd75439781f479d305b48627a13a78f327.jpg|image]]



(a)


![[70fa9137d481a3f9ec08b3333d1d474c77d47988f717b5fc068a70601cc70f56.jpg|image]]



(b)



FIGURE 5.3 (a) Rectangles contained in R give a lower sum approximation for the area. This estimate undershoots the true value by the amount shaded in light blue. (b) The midpoint rule uses rectangles whose heights are the values of $y = f(x)$ at the midpoints of their bases. The estimate appears closer to the true value of the area because the light red overshoot areas roughly balance the light blue undershoot areas.


Considering both lower and upper sum approximations gives us estimates for the area and a bound on the size of the possible error in these estimates since the true value of the area lies somewhere between them. Here the error cannot be greater than the difference 0.78125 - 0.53125 = 0.25. 

Yet another estimate can be obtained by using rectangles whose heights are the values of f at the midpoints of the bases of the rectangles (Figure 5.3b). This method of estimation is called the midpoint rule for approximating the area. The midpoint rule gives an estimate that is between a lower sum and an upper sum, but it is not clear whether it overestimates or underestimates the true area. With four rectangles of width 1/4, as before, the midpoint rule estimates the area of R to be 

$$
A \approx \frac {6 3}{6 4} \cdot \frac {1}{4} + \frac {5 5}{6 4} \cdot \frac {1}{4} + \frac {3 9}{6 4} \cdot \frac {1}{4} + \frac {1 5}{6 4} \cdot \frac {1}{4} = \frac {1 7 2}{6 4} \cdot \frac {1}{4} = 0. 6 7 1 8 7 5.
$$

In each of the sums that we computed, the interval $[a, b]$ over which the function f is defined was subdivided into n subintervals of equal width (or length) $\Delta x = (b - a)/n$ , and f was evaluated at a point in each subinterval: $c_{1}$ in the first subinterval, $c_{2}$ in the second subinterval, and so on. For the upper sum we chose $c_{k}$ so that $f(c_{k})$ was the maximum value of f in the kth subinterval, for the lower sum we chose it so that $f(c_{k})$ was the minimum, and for the midpoint rule we chose $c_{k}$ to be the midpoint of the kth subinterval. In each case the finite sums have the form 

$$
f \left(c _ {1}\right) \Delta x + f \left(c _ {2}\right) \Delta x + f \left(c _ {3}\right) \Delta x + \dots + f \left(c _ {n}\right) \Delta x.
$$

As we take more and more rectangles, with each rectangle thinner than before, it appears that these finite sums give better and better approximations to the true area of the region R. 

Figure 5.4a shows a lower sum approximation for the area of R using 16 rectangles of equal width. The sum of their areas is 0.634765625, which appears close to the true area but is still somewhat smaller since the rectangles lie inside R. 

Figure 5.4b shows an upper sum approximation using 16 rectangles of equal width. The sum of their areas is 0.697265625, which is somewhat larger than the true area because the rectangles taken together contain R. The midpoint rule for 16 rectangles gives a total area approximation of 0.6669921875, but it is not immediately clear whether this estimate is larger or smaller than the true area. 

Table 5.1 shows the values of upper and lower sum approximations to the area of R, using up to 1000 rectangles. The values of these approximations appear to be approaching 2/3. In Section 5.2 we will see how to get an exact value of the area of regions such as R by taking a limit as the base width of each rectangle goes to zero and the number of rectangles goes to infinity. With the techniques developed there, we will be able to show that the area of R is exactly 2/3. 


TABLE 5.1 Finite approximations for the area of R


<table><tr><td>Number of subintervals</td><td>Lower sum</td><td>Midpoint sum</td><td>Upper sum</td></tr><tr><td>2</td><td>0.375</td><td>0.6875</td><td>0.875</td></tr><tr><td>4</td><td>0.5313</td><td>0.6719</td><td>0.7813</td></tr><tr><td>16</td><td>0.6348</td><td>0.6670</td><td>0.6973</td></tr><tr><td>50</td><td>0.6566</td><td>0.6667</td><td>0.6766</td></tr><tr><td>100</td><td>0.66165</td><td>0.666675</td><td>0.67165</td></tr><tr><td>1000</td><td>0.6661665</td><td>0.66666675</td><td>0.6671665</td></tr></table>

## Distance Traveled

Suppose we know the velocity function $v(t)$ of a car that moves straight down a highway without changing direction, and we want to know how far it traveled between times $t = a$ and $t = b$ . The position function $s(t)$ of the car has derivative $v(t)$ . If we can find an antiderivative $F(t)$ of $v(t)$ , then we can find the car's position function $s(t)$ by setting $s(t) = F(t) + C$ . The distance traveled can then be found by calculating the change in position, $s(b) - s(a) = F(b) - F(a)$ . However, if the velocity is known only by the readings at various times of a speedometer on the car, then we have no formula for the velocity from which to obtain an antiderivative that gives the position function. So what do we do in this situation? 

If we know the velocity at a collection of times $t_{1}, t_{2}, \ldots, t_{n}$ , we can approximate the distance traveled by using finite sums in a way similar to the area estimates that we discussed before. We first subdivide the interval $[a, b]$ into short time intervals and assume that the velocity on each subinterval is fairly constant. Then we approximate the distance traveled on each time subinterval with the usual distance formula 

$$
\text { distance } = \text { velocity } \times \text { time }
$$

and add the results across $[a, b]$ . 

Suppose the subdivided interval looks like 

$$
\begin{array}{c c c c c}\left| \leftarrow \Delta t \rightarrow \right|&\leftarrow \Delta t \rightarrow \left| \leftarrow \Delta t \rightarrow \right|\\\hline a&t _ {1}&t _ {2}&t _ {3}&b\end{array}\rightarrow t (\text { sec })
$$

with the subintervals all of equal length $\Delta t$ . Pick a number $t_{1}$ in the first interval. If $\Delta t$ is so small that the velocity barely changes over a short time interval of duration $\Delta t$ , then the distance traveled in the first time interval is about $v(t_{1})\Delta t$ . If $t_{2}$ is a number in the second interval, the distance traveled in the second time interval is about $v(t_{2})\Delta t$ . The sum of the distances traveled over all the time intervals is approximated by 

$$
v (t _ {1}) \Delta t + v (t _ {2}) \Delta t + \dots + v (t _ {n}) \Delta t,
$$

where n is the total number of subintervals. This sum is only an approximation to the true distance D, but the approximation increases in accuracy as we take more and more subintervals. 

**EXAMPLE 1** The velocity function of a projectile fired straight into the air is $f(t) = 160 - 9.8t \, \text{m/sec}$ . Use the summation technique just described to estimate how far the projectile rises during the first 3 sec. How close do the sums come to the exact value of 435.9 m? (We will see how to compute the exact value in Section 5.4.) 

**Solution** We explore the results for different numbers of subintervals and different choices of evaluation points. Notice that $f(t)$ is decreasing, so choosing left endpoints gives an upper sum estimate, and choosing right endpoints gives a lower sum estimate. 

(a) Three subintervals of length 1, with f evaluated at left endpoints giving an upper sum: 

$$
\begin{array}{c c c c c}t _ {1}&t _ {2}&t _ {3}\\0&1&2&3\end{array}\rightarrow t
$$

With f evaluated at t = 0, 1, and 2, we have 

$$
\begin{array}{l} D \approx f (t _ {1}) \Delta t + f (t _ {2}) \Delta t + f (t _ {3}) \Delta t \\ = [ 1 6 0 - 9. 8 (0) ] (1) + [ 1 6 0 - 9. 8 (1) ] (1) + [ 1 6 0 - 9. 8 (2) ] (1) \\ = 4 5 0. 6. \end{array}
$$

(b) Three subintervals of length 1, with f evaluated at right endpoints giving a lower sum: 

$$
\begin{array}{c c c c}&t _ {1}&t _ {2}&t _ {3}\\\hline 0&1&2&3\\&\left| \leftarrow \Delta t \rightarrow \right|\end{array}
$$

With $f$ evaluated at $t = 1, 2,$ and 3, we have 

$$
\begin{array}{l} D \approx f (t _ {1}) \Delta t + f (t _ {2}) \Delta t + f (t _ {3}) \Delta t \\ = [ 1 6 0 - 9. 8 (1) ] (1) + [ 1 6 0 - 9. 8 (2) ] (1) + [ 1 6 0 - 9. 8 (3) ] (1) \\ = 4 2 1. 2. \end{array}
$$

(c) With six subintervals of length 1/2, we get 

$$
\begin{array}{c c} t _ {1} & t _ {2} \\ 0 & 1 \\ \hline \Delta t \end{array} \quad \begin{array}{c c} t _ {3} & t _ {4} \\ 2 & t _ {5} \\ \hline 3 \end{array} \quad \begin{array}{c c} t _ {6} & t _ {5} \\ 3 \end{array} \quad \begin{array}{c c} t _ {7} & t _ {6} \\ 0 & 1 \\ \hline 3 \end{array}
$$

These estimates give an upper sum using left endpoints: $D \approx 443.25$ , and a lower sum using right endpoints: $D \approx 428.55$ . These six-interval estimates are somewhat closer than the three-interval estimates. The results improve as the subintervals get shorter. 

As we can see in Table 5.2, the left-endpoint upper sums approach the true value 435.9 from above, whereas the right-endpoint lower sums approach it from below. The true value lies between these upper and lower sums. The magnitude of the error in the closest entry is 0.23, a small percentage of the true value. 

$$
\begin{array}{r l} \text { Error   magnitude } & = | \text { true   value } - \text { calculated   value } | \\ & = | 4 3 5. 9 - 4 3 5. 6 7 | = 0. 2 3. \end{array}
$$

$$
\text { Error   percentage } = \frac {0 . 2 3}{4 3 5 . 9} \approx 0. 0 5 \%.
$$

It is reasonable to conclude from the table's last entries that the projectile rose about 436 m during its first 3 sec of flight. 

![[76612b8f0dc2447817a2c3f44ce0d9d5b7a32007a36aab125e3254c4733a82fe.jpg|image]]



FIGURE 5.5 The rock in Example 2. The height s = 78.4 m is reached at t = 2 s and t = 8 s. The rock falls 44.1 m from its maximum height when t = 8.



TABLE 5.2 Travel-distance estimates


<table><tr><td>Number of subintervals</td><td>Length of each subinterval</td><td>Upper sum</td><td>Lower sum</td></tr><tr><td>3</td><td>1</td><td>450.6</td><td>421.2</td></tr><tr><td>6</td><td>1/2</td><td>443.25</td><td>428.55</td></tr><tr><td>12</td><td>1/4</td><td>439.58</td><td>432.23</td></tr><tr><td>24</td><td>1/8</td><td>437.74</td><td>434.06</td></tr><tr><td>48</td><td>1/16</td><td>436.82</td><td>434.98</td></tr><tr><td>96</td><td>1/32</td><td>436.36</td><td>435.44</td></tr><tr><td>192</td><td>1/64</td><td>436.13</td><td>435.67</td></tr></table>

## Displacement Versus Distance Traveled

If an object with position function $s(t)$ moves along a coordinate line without changing direction, we can calculate the total distance it travels from t = a to t = b by summing the distance traveled over small intervals, as in Example 1. If the object reverses direction one or more times during the trip, then we need to use the object's speed $|v(t)|$ , which is the absolute value of its velocity function, $v(t)$ , to find the total distance traveled. Using the velocity itself, as in Example 1, gives instead an estimate of the object's displacement, $s(b) - s(a)$ , the difference between its initial and final positions. To see the difference, think about what happens when you walk a kilometer from your home and then walk back. The total distance traveled is two kilometers, but your displacement is zero, because you end up back where you started. 

To see why using the velocity function in the summation process gives an estimate of the displacement, partition the time interval $[a,b]$ into small enough equal subintervals $\Delta t$ so that the object's velocity does not change very much from time $t_{k - 1}$ to $t_k$ . Then $\upsilon (t_k)$ gives a good approximation of the velocity throughout the interval. Accordingly, the change in the object's position coordinate, which is its displacement during the time interval, is about 

$$
v (t _ {k}) \Delta t.
$$

The change is positive if $v(t_{k})$ is positive and negative if $v(t_{k})$ is negative. 

In either case, the distance traveled by the object during the subinterval is about 

$$
\left| v (t _ {k}) \right| \Delta t.
$$

The total distance traveled over the time interval is approximately the sum 

$$
\left| v \left(t _ {1}\right) \right| \Delta t + \left| v \left(t _ {2}\right) \right| \Delta t + \dots + \left| v \left(t _ {n}\right) \right| \Delta t.
$$

We will revisit these ideas in Section 5.4. 

**EXAMPLE 2** In Example 4 in Section 3.4, we analyzed the motion of a heavy rock blown straight up by a dynamite blast. In that example, we found the velocity of the rock at time t was $v(t) = 49 - 9.8t \, \text{m/s}$ . The rock was 78.4 m above the ground 2 s after the explosion, continued upward to reach a maximum height of 122.5 m at 5 s after the explosion, and then fell back down a distance of 44.1 m to reach the height of 78.4 m again at t = 8 s after the explosion. (See Figure 5.5.) The total distance traveled in these 8 seconds is $122.5 + 44.1 = 166.6 \, m$ . 

**Solution** If we follow a procedure like the one presented in Example 1, using the velocity function $v(t)$ in the summation process from $t = 0$ to $t = 8$ , we obtain an estimate of the rock's height above the ground at time $t = 8$ . Starting at time $t = 0$ , the rock traveled upward a total of $78.4 + 44.1 = 122.5 \mathrm{~m}$ , but then it peaked and traveled downward 


TABLE 5.3 Velocity function


<table><tr><td>t</td><td>v(t)</td><td>t</td><td>v(t)</td></tr><tr><td>0</td><td>49</td><td>4.5</td><td>4.9</td></tr><tr><td>0.5</td><td>44.1</td><td>5.0</td><td>0</td></tr><tr><td>1.0</td><td>39.2</td><td>5.5</td><td>-4.9</td></tr><tr><td>1.5</td><td>34.3</td><td>6.0</td><td>-9.8</td></tr><tr><td>2.0</td><td>29.4</td><td>6.5</td><td>-14.7</td></tr><tr><td>2.5</td><td>24.5</td><td>7.0</td><td>-19.6</td></tr><tr><td>3.0</td><td>19.6</td><td>7.5</td><td>-24.5</td></tr><tr><td>3.5</td><td>14.7</td><td>8.0</td><td>-29.4</td></tr><tr><td>4.0</td><td>9.8</td><td></td><td></td></tr></table>

44.1 m ending at a height of 78.4 m at time t = 8. The velocity $v(t)$ is positive during the upward travel, but negative while the rock falls back down. When we compute the sum $v(t_{1}) \Delta t + v(t_{2}) \Delta t + \cdots + v(t_{n}) \Delta t$ , part of the upward positive distance change is canceled by the negative downward movement, giving in the end an approximation of the displacement from the initial position, equal to a positive change of 78.4 m. 

On the other hand, if we use the speed $|v(t)|$ , which is the absolute value of the velocity function, then distances traveled while moving up and distances traveled while moving down are both counted positively. Both the total upward motion of 122.5 m and the downward motion of 44.1 m are now counted as positive distances traveled, so the sum $|v(t_{1})|\Delta t + |v(t_{2})|\Delta t + \cdots + |v(t_{n})|\Delta t$ gives us an approximation of 166.6 m, the total distance that the rock traveled from time t = 0 to time t = 8. 

As an illustration of our discussion, we subdivide the interval $[0, 8]$ into 16 subintervals of length $\Delta t = 1/2$ and take the right endpoint of each subinterval as the value of $t_{k}$ . Table 5.3 shows the values of the velocity function at these endpoints. 

Using $v(t)$ in the summation process, we estimate the displacement at t = 8: 

$$
\begin{array}{r l} & (4 4. 1 + 3 9. 2 + 3 4. 3 + 2 9. 4 + 2 4. 5 + 1 9. 6 + 1 4. 7 + 9. 8 + 4. 9 \\ & \quad + 0 - 4. 9 - 9. 8 - 1 4. 7 - 1 9. 6 - 2 4. 5 - 2 9. 4) \cdot \frac {1}{2} = 5 8. 8 \\ & \text {   Error   magnitude   } = 7 8. 4 - 5 8. 8 = 1 9. 6 \end{array}
$$

Using $|v(t)|$ in the summation process, we estimate the total distance traveled over the time interval [0, 8]: 

$$
\begin{array}{r l} & (4 4. 1 + 3 9. 2 + 3 4. 3 + 2 9. 4 + 2 4. 5 + 1 9. 6 + 1 4. 7 + 9. 8 + 4. 9 \\ & \quad + 0 + 4. 9 + 9. 8 + 1 4. 7 + 1 9. 6 + 2 4. 5 + 2 9. 4) \cdot \frac {1}{2} = 1 6 1. 7 \\ & \text {   Error   magnitude   } = 1 6 6. 6 - 1 6 1. 7 = 4. 9 \end{array}
$$

If we take more and more subintervals of $[0, 8]$ in our calculations, the estimates to the heights 78.4 m and 166.6 m improve, as shown in Table 5.4. 


TABLE 5.4 Travel estimates for a rock blown straight up during the time interval [0, 8]


<table><tr><td>Number of subintervals</td><td>Length of each subinterval</td><td>Displacement</td><td>Total distance</td></tr><tr><td>16</td><td>1/2</td><td>58.8</td><td>161.7</td></tr><tr><td>32</td><td>1/4</td><td>68.6</td><td>164.15</td></tr><tr><td>64</td><td>1/8</td><td>73.5</td><td>165.375</td></tr><tr><td>128</td><td>1/16</td><td>75.95</td><td>165.9875</td></tr><tr><td>256</td><td>1/32</td><td>77.175</td><td>166.29375</td></tr><tr><td>512</td><td>1/64</td><td>77.7875</td><td>166.446875</td></tr></table>

## Average Value of a Nonnegative Continuous Function

The average value of a collection of n numbers $x_{1}, x_{2}, \ldots, x_{n}$ is obtained by adding them together and dividing by n. But what is the average value of a continuous function f on an interval $[a, b]$ ? Such a function can assume infinitely many values. For example, the temperature at a certain location in a town is a continuous function that goes up and down each day. What does it mean to say that the average temperature in the town over the course of a day is 73 degrees? 

![[998ef8c41a077b4cf048c34f6179e005d0b1743155422c5fa95dce0b0304a744.jpg|image]]


![[935839894e36114c40a393accc70b7d06ed2ac12d3d278cde86f69d5cf5281f7.jpg|image]]



FIGURE 5.6 (a) The average value of $f(x) = c$ on [a, b] is the area of the rectangle divided by b - a. (b) The average value of $g(x)$ on [a, b] is the area beneath its graph divided by b - a.


![[5c30f2683c89fbdf7a750e3ad1bbac3cd0c838518282d2c7dc757a56b1b7b1bf.jpg|image]]



FIGURE 5.7 Approximating the area under $f(x) = \sin x$ between 0 and $\pi$ to compute the average value of $\sin x$ over $[0, \pi]$ , using eight rectangles (Example 3).


When a function is constant, this question is easy to answer. A function with constant value c on an interval $[a, b]$ has average value c. When c is positive, its graph over $[a, b]$ gives a rectangle of height c. The average value of the function can then be interpreted geometrically as the area of this rectangle divided by its width b - a (see Figure 5.6a). 

What if we want to find the average value of a nonconstant function, such as the function g in Figure 5.6b? We can think of this graph as a snapshot of the height of some water that is sloshing around in a tank between enclosing walls at x = a and x = b. As the water moves, its height over each point changes, but its average height remains the same. To get the average height of the water, we let it settle down until it is level and its height is constant. The resulting height c equals the area under the graph of g divided by b - a. We are led to define the average value of a nonnegative function on an interval $[a, b]$ to be the area under its graph divided by b - a. For this definition to be valid, we need a precise understanding of what is meant by the area under a graph. This will be obtained in Section 5.3, but for now we look at an example. 

## **EXAMPLE 3** Estimate the average value of the function $f(x) = \sin x$ on the interval $[0, \pi]$ .

**Solution** Looking at the graph of $\sin x$ between 0 and $\pi$ in Figure 5.7, we can see that its average height is somewhere between 0 and 1. To find the average, we need to calculate the area A under the graph and then divide this area by the length of the interval, $\pi - 0 = \pi$ . 

We do not have a simple way to determine the area, so we approximate it with finite sums. To get an upper sum approximation, we add the areas of eight rectangles of equal width $\pi/8$ that together contain the region that is beneath the graph of $y = \sin x$ and above the x-axis on $[0, \pi]$ . We choose the heights of the rectangles to be the largest value of $\sin x$ on each subinterval. Over a particular subinterval, this largest value may occur at the left endpoint, at the right endpoint, or somewhere between them. We evaluate $\sin x$ at this point to get the height of the rectangle for an upper sum. The sum of the rectangular areas then gives an estimate of the total area (Figure 5.7): 

$$
\begin{array}{l} A \approx \left(\sin \frac {\pi}{8} + \sin \frac {\pi}{4} + \sin \frac {3 \pi}{8} + \sin \frac {\pi}{2} + \sin \frac {\pi}{2} + \sin \frac {5 \pi}{8} + \sin \frac {3 \pi}{4} + \sin \frac {7 \pi}{8}\right) \cdot \frac {\pi}{8} \\ \approx (0. 3 8 + 0. 7 1 + 0. 9 2 + 1 + 1 + 0. 9 2 + 0. 7 1 + 0. 3 8) \cdot \frac {\pi}{8} = (6. 0 2) \cdot \frac {\pi}{8} \approx 2. 3 6 4. \end{array}
$$

To estimate the average value of $\sin x$ on $[0, \pi]$ we divide the estimated area by the length $\pi$ of the interval and obtain the approximation $2.364 / \pi \approx 0.753$ . 

Since we used an upper sum to approximate the area, this estimate is greater than the actual average value of $\sin x$ over $[0, \pi]$ . If we use more and more rectangles, with each rectangle getting thinner and thinner, we get closer and closer to the exact average value, as shown in Table 5.5. We will show in Section 5.3 that the true average value is $2 / \pi \approx 0.63662$ . 


TABLE 5.5 Average value of sin x on $0 \leq x \leq \pi$


<table><tr><td>Number of subintervals</td><td>Upper sum estimate</td></tr><tr><td>8</td><td>0.75342</td></tr><tr><td>16</td><td>0.69707</td></tr><tr><td>32</td><td>0.65212</td></tr><tr><td>50</td><td>0.64657</td></tr><tr><td>100</td><td>0.64161</td></tr><tr><td>1000</td><td>0.63712</td></tr></table>

As before, we could just as well have used rectangles lying under the graph of $y = \sin x$ and calculated a lower sum approximation, or we could have used the midpoint rule. In each case, the approximations are close to the true area if all the rectangles are sufficiently thin. 

## Summary

The area under the graph of a positive function, the distance traveled by a moving object that doesn't change direction, and the average value of a nonnegative function $f$ over an interval can all be approximated by finite sums constructed in a certain way. First we subdivide the interval into subintervals, treating $f$ as if it were constant over each subinterval. Then we multiply the width of each subinterval by the value of $f$ at some point within it and add these products together. If the interval $[a,b]$ is subdivided into $n$ subintervals of equal widths $\Delta x = (b - a) / n$ , and if $f(c_k)$ is the value of $f$ at the chosen point $c_k$ in the $k$ th subinterval, this process gives a finite sum of the form 

$$
f \left(c _ {1}\right) \Delta x + f \left(c _ {2}\right) \Delta x + f \left(c _ {3}\right) \Delta x + \dots + f \left(c _ {n}\right) \Delta x.
$$

The choices for the $c_{k}$ could maximize or minimize the value of f in the kth subinterval, or give some value in between. The true value lies somewhere between the approximations given by upper sums and lower sums. In the examples that we looked at, the finite sum approximations improved as we took more subintervals of smaller width. 

## EXERCISES 5.1

## Area

In Exercises 1–4, apply finite approximations to estimate the area under the graph of the function using 

a. a lower sum with two rectangles of equal width. 

b. a lower sum with four rectangles of equal width. 

c. an upper sum with two rectangles of equal width. 

d. an upper sum with four rectangles of equal width. 

1. $f(x) = x^2$ between $x = 0$ and $x = 1$ . 

2. $f(x) = x^{3}$ between x = 0 and x = 1. 

3. $f(x) = 1/x$ between x = 1 and x = 5. 

4. $f(x) = 4 - x^{2}$ between x = -2 and x = 2. 

Using rectangles, each of whose height is given by the value of the function at the midpoint of the rectangle's base (the midpoint rule), estimate the area under the graphs of the following functions, using first two and then four rectangles. 

5. $f(x) = x^{2}$ between x = 0 and x = 1. 

6. $f(x) = x^{3}$ between x = 0 and x = 1. 

7. $f(x) = 1/x$ between x = 1 and x = 5. 

8. $f(x) = 4 - x^{2}$ between x = -2 and x = 2. 

## Distance

9. Distance traveled The accompanying table shows the velocity of a model train engine moving along a track for 10 s. Estimate the distance traveled by the engine using 10 subintervals of length 1 with a. left-endpoint values. 

b. right-endpoint values. 

<table><tr><td>Time (s)</td><td>Velocity (cm/s)</td><td>Time (s)</td><td>Velocity (cm/s)</td></tr><tr><td>0</td><td>0</td><td>6</td><td>11</td></tr><tr><td>1</td><td>12</td><td>7</td><td>6</td></tr><tr><td>2</td><td>22</td><td>8</td><td>2</td></tr><tr><td>3</td><td>10</td><td>9</td><td>6</td></tr><tr><td>4</td><td>5</td><td>10</td><td>0</td></tr><tr><td>5</td><td>13</td><td></td><td></td></tr></table>

10. Distance traveled upstream You are sitting on the bank of a tidal river watching the incoming tide carry a bottle upstream. You record the velocity of the flow every 5 minutes for an hour, with the results shown in the accompanying table. About how far upstream did the bottle travel during that hour? Find an estimate using 12 subintervals of length 5 with 

a. left-endpoint values. 

b. right-endpoint values. 

<table><tr><td>Time (min)</td><td>Velocity (m/s)</td><td>Time (min)</td><td>Velocity (m/s)</td></tr><tr><td>0</td><td>1</td><td>35</td><td>1.2</td></tr><tr><td>5</td><td>1.2</td><td>40</td><td>1.0</td></tr><tr><td>10</td><td>1.7</td><td>45</td><td>1.8</td></tr><tr><td>15</td><td>2.0</td><td>50</td><td>1.5</td></tr><tr><td>20</td><td>1.8</td><td>55</td><td>1.2</td></tr><tr><td>25</td><td>1.6</td><td>60</td><td>0</td></tr><tr><td>30</td><td>1.4</td><td></td><td></td></tr></table>

11. Length of a road You and a companion are about to drive a twisty stretch of dirt road in a car whose speedometer works but whose odometer (kilometer counter) is broken. To find out how long this particular stretch of road is, you record the car's velocity at 10-second intervals, with the results shown in the accompanying table. Estimate the length of the road using 

a. left-endpoint values. 

b. right-endpoint values. 

<table><tr><td>Time (s)</td><td>Velocity (converted to m/s) (36 km/h = 10 m/s)</td><td>Time (s)</td><td>Velocity (converted to m/s) (30 km/h = 10 m/s)</td></tr><tr><td>0</td><td>0</td><td>70</td><td>5</td></tr><tr><td>10</td><td>15</td><td>80</td><td>7</td></tr><tr><td>20</td><td>5</td><td>90</td><td>12</td></tr><tr><td>30</td><td>12</td><td>100</td><td>15</td></tr><tr><td>40</td><td>10</td><td>110</td><td>10</td></tr><tr><td>50</td><td>15</td><td>120</td><td>12</td></tr><tr><td>60</td><td>12</td><td></td><td></td></tr></table>

12. Distance from velocity data The accompanying table gives data for the velocity of a vintage sports car accelerating from 0 to 228 km/h in 36 s (10 thousandths of an hour). 

<table><tr><td>Time (h)</td><td>Velocity (km/h)</td><td>Time (h)</td><td>Velocity (km/h)</td></tr><tr><td>0.0</td><td>0</td><td>0.006</td><td>187</td></tr><tr><td>0.001</td><td>64</td><td>0.007</td><td>201</td></tr><tr><td>0.002</td><td>100</td><td>0.008</td><td>212</td></tr><tr><td>0.003</td><td>132</td><td>0.009</td><td>220</td></tr><tr><td>0.004</td><td>154</td><td>0.010</td><td>228</td></tr><tr><td>0.005</td><td>174</td><td></td><td></td></tr></table>

![[769d6a35ed05752a1cde9e3e825b79344768962289384e715a976fd56930c289.jpg|image]]


a. Use rectangles to estimate how far the car traveled during the 36 s it took to reach 228 km/h. 

b. Roughly how many seconds did it take the car to reach the halfway point? About how fast was the car going then? 

13. Free fall with air resistance An object is dropped straight down from a helicopter. The object falls faster and faster but its acceleration (rate of change of its velocity) decreases over time because of air resistance. The acceleration is measured in m/s $^{2}$ and recorded every second after the drop for 5 s, as shown: 

<table><tr><td>t</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>a</td><td>9.8</td><td>5.944</td><td>3.605</td><td>2.187</td><td>1.326</td><td>0.805</td></tr></table>

a. Find an upper estimate for the speed when t = 5. 

b. Find a lower estimate for the speed when t = 5. 

c. Find an upper estimate for the distance fallen when t = 3. 

14. Distance traveled by a projectile An object is shot straight upward from sea level with an initial velocity of 122.5 m/s. 

a. Assuming that gravity is the only force acting on the object, give an upper estimate for its velocity after 5 s have elapsed. Use $g = 9.8 \, m/s^{2}$ for the gravitational acceleration. 

b. Find a lower estimate for the height attained after 5 s. 

## Average Value of a Function

In Exercises 15–18, use a finite sum to estimate the average value of f on the given interval by partitioning the interval into four subintervals of equal length and evaluating f at the subinterval midpoints. 

$$
f (x) = x ^ {3} \text {   on   } [ 0, 2 ]
$$

$$
f (x) = 1 / x \text {   on   } [ 1, 9 ]
$$

$$
\mathbf {1 7 .} f (t) = (1 / 2) + \sin^ {2} \pi t \text {   on   } [ 0, 2 ]
$$

![[beccf5681b5ac3518e54aeb5ddad9e51466ef635adaf1e605d6a40ea90f93223.jpg|image]]


T 18. $f(t) = 1 - \left(\cos \frac{\pi t}{4}\right)^{4}$ on [0, 4] 

![[54126926ae0b4eaa71c7ec46d97112c970cad24f042461b779ae240c0795757b.jpg|image]]


## Estimations

19. Water pollution Oil is leaking out of a tanker damaged at sea. The damage to the tanker is worsening as evidenced by the increased leakage each hour, recorded in the following table. 

<table><tr><td>Time (h)</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>Leakage (L/h)</td><td>50</td><td>70</td><td>97</td><td>136</td><td>190</td></tr><tr><td>Time (h)</td><td>5</td><td>6</td><td>7</td><td>8</td><td rowspan="2"></td></tr><tr><td>Leakage (L/h)</td><td>265</td><td>369</td><td>516</td><td>720</td></tr></table>

a. Give an upper and a lower estimate of the total quantity of oil that has escaped after 5 hours. 

b. Repeat part (a) for the quantity of oil that has escaped after 8 hours. 

c. The tanker continues to leak 720 L/h after the first 8 hours. If the tanker originally contained 25,000 L of oil, approximately how many more hours will elapse in the worst case before all the oil has spilled? In the best case? 

20. Air pollution A power plant generates electricity by burning oil. Pollutants produced as a result of the burning process are removed by scrubbers in the smokestacks. Over time, the scrubbers become less efficient and eventually they must be replaced when the amount of pollution released exceeds government standards. Measurements are taken at the end of each month determining the rate at which pollutants are released into the atmosphere, recorded as follows. 

<table><tr><td>Month</td><td>Jan</td><td>Feb</td><td>Mar</td><td>Apr</td><td>May</td><td>Jun</td></tr><tr><td>Pollutant release rate (tons/day)</td><td>0.20</td><td>0.25</td><td>0.27</td><td>0.34</td><td>0.45</td><td>0.52</td></tr></table>

<table><tr><td>Month</td><td>Jul</td><td>Aug</td><td>Sep</td><td>Oct</td><td>Nov</td><td>Dec</td></tr><tr><td>Pollutant release rate (tons/day)</td><td>0.63</td><td>0.70</td><td>0.81</td><td>0.85</td><td>0.89</td><td>0.95</td></tr></table>

a. Assuming a 30-day month and that new scrubbers allow only 0.05 ton/day to be released, give an upper estimate of the total tonnage of pollutants released by the end of June. What is a lower estimate? 

b. In the best case, approximately when will a total of 125 tons of pollutants have been released into the atmosphere? 

21. Inscribe a regular n-sided polygon inside a circle of radius 1 and compute the area of the polygon for the following values of n:
a. 4 (square) b. 8 (octagon) c. 16 

d. Compare the areas in parts (a), (b), and (c) with the area inside the circle. 

22. (Continuation of Exercise 21.) 

a. Inscribe a regular n-sided polygon inside a circle of radius 1 and compute the area of one of the n congruent triangles formed by drawing radii to the vertices of the polygon. 

b. Compute the limit of the area of the inscribed polygon as $n \rightarrow \infty$ . 

c. Repeat the computations in parts (a) and (b) for a circle of radius r. 

## COMPUTER EXPLORATIONS

In Exercises 23–26, use a CAS to perform the following steps. 

a. Plot the functions over the given interval. 

b. Subdivide the interval into n = 100, 200, and 1000 subintervals of equal length and evaluate the function at the midpoint of each subinterval. 

c. Compute the average value of the function values generated in part (b). 

d. Solve the equation $f(x) = (\text{average value})$ for $x$ using the average value calculated in part (c) for the $n = 1000$ partitioning. 

$$
\begin{array}{l l} \textbf {2 3 .} f (x) = \sin x \text {on} [ 0, \pi ] & \textbf {2 4 .} f (x) = \sin^ {2} x \text {on} [ 0, \pi ] \\ \textbf {2 5 .} f (x) = x \sin \frac {1}{x} \text {on} \left[ \frac {\pi}{4}, \pi \right] & \textbf {2 6 .} f (x) = x \sin^ {2} \frac {1}{x} \text {on} \left[ \frac {\pi}{4}, \pi \right] \end{array}
$$

## 5.2 Sigma Notation and Limits of Finite Sums

While estimating with finite sums in Section 5.1, we encountered sums that had many terms (up to 1000 terms in Table 5.1). In this section we introduce a notation for sums that have a large number of terms. After describing this notation and its properties, we consider what happens as the number of terms in a sum approaches infinity. 

## Finite Sums and Sigma Notation

Sigma notation enables us to write a sum with many terms in the compact form 

$$
\sum_ {k = 1} ^ {n} a _ {k} = a _ {1} + a _ {2} + a _ {3} + \dots + a _ {n - 1} + a _ {n}.
$$

$\sum$ is the capital Greek letter sigma 

The Greek letter $\sum$ (capital sigma, corresponding to our letter S), stands for “sum.” The index of summation k tells us where the sum begins (at the number below the $\sum$ symbol) and where it ends (at the number above $\sum$ ). Any letter can be used to denote the index, but the letters i, j, k, and n are customary. 

![[4d14671b416ee2efe76f5e4bd8c4d2318b3c6bb203e0075d1504fef5e2ad4dc7.jpg|image]]


Thus we can write the sum of the squares of the numbers 1 through 11 as 

$$
1 ^ {2} + 2 ^ {2} + 3 ^ {2} + 4 ^ {2} + 5 ^ {2} + 6 ^ {2} + 7 ^ {2} + 8 ^ {2} + 9 ^ {2} + 1 0 ^ {2} + 1 1 ^ {2} = \sum_ {k = 1} ^ {1 1} k ^ {2},
$$

and the sum of $f(i)$ for integers i from 1 to 100 as 

$$
f (1) + f (2) + f (3) + \dots + f (1 0 0) = \sum_ {i = 1} ^ {1 0 0} f (i).
$$

The starting index does not have to be 1; it can be any integer. 

## **EXAMPLE 1**

<table><tr><td>A sum in sigma notation</td><td>The sum written out, one term for each value of <eq>k</eq></td><td>The value of the sum</td></tr><tr><td><eq>\sum_{k=1}^{5} k</eq></td><td><eq>1 + 2 + 3 + 4 + 5</eq></td><td>15</td></tr><tr><td><eq>\sum_{k=1}^{3} (-1)^{k} k</eq></td><td><eq>(-1)^{1}(1) + (-1)^{2}(2) + (-1)^{3}(3)</eq></td><td><eq>-1 + 2 - 3 = -2</eq></td></tr><tr><td><eq>\sum_{k=1}^{2} \frac{k}{k+1}</eq></td><td><eq>\frac{1}{1+1} + \frac{2}{2+1}</eq></td><td><eq>\frac{1}{2} + \frac{2}{3} = \frac{7}{6}</eq></td></tr><tr><td><eq>\sum_{k=4}^{5} \frac{k^{2}}{k-1}</eq></td><td><eq>\frac{4^{2}}{4-1} + \frac{5^{2}}{5-1}</eq></td><td><eq>\frac{16}{3} + \frac{25}{4} = \frac{139}{12}</eq></td></tr></table>

## **EXAMPLE 2** Express the sum $1 + 3 + 5 + 7 + 9$ in sigma notation.

**Solution** The formula generating the terms depends on what we choose the lower limit of summation to be, but the terms generated remain the same. It is often simplest to choose the starting index to be k = 0 or k = 1, but we can start with any integer. 

$$
\text { Starting   with } k = 0: \quad 1 + 3 + 5 + 7 + 9 = \sum_ {k = 0} ^ {4} (2 k + 1)
$$

$$
\text { Starting   with } k = 1: \quad 1 + 3 + 5 + 7 + 9 = \sum_ {k = 1} ^ {5} (2 k - 1)
$$

$$
\text { Starting   with } k = 2: \quad 1 + 3 + 5 + 7 + 9 = \sum_ {k = 2} ^ {6} (2 k - 3)
$$

$$
\text { Starting   with } k = - 3: 1 + 3 + 5 + 7 + 9 = \sum_ {k = - 3} ^ {1} (2 k + 7)
$$

When we have a sum such as 

$$
\sum_ {k = 1} ^ {3} (k + k ^ {2}),
$$

we can rearrange its terms to form two sums: 

$$
\begin{array}{r l} \sum_ {k = 1} ^ {3} (k + k ^ {2}) & = (1 + 1 ^ {2}) + (2 + 2 ^ {2}) + (3 + 3 ^ {2}) \\ & = (1 + 2 + 3) + (1 ^ {2} + 2 ^ {2} + 3 ^ {2}) \quad \text {   Regroup   terms.   } \\ & = \sum_ {k = 1} ^ {3} k + \sum_ {k = 1} ^ {3} k ^ {2}. \end{array}
$$

This illustrates a general rule for finite sums: 

$$
\sum_ {k = 1} ^ {n} \left(a _ {k} + b _ {k}\right) = \sum_ {k = 1} ^ {n} a _ {k} + \sum_ {k = 1} ^ {n} b _ {k}.
$$

This and three other rules are given below. Proofs of these rules can be obtained using mathematical induction (see Appendix A.3). 

## Algebra Rules for Finite Sums

1. Sum Rule: 

$$
\sum_ {k = 1} ^ {n} \left(a _ {k} + b _ {k}\right) = \sum_ {k = 1} ^ {n} a _ {k} + \sum_ {k = 1} ^ {n} b _ {k}
$$

2. Difference Rule: 

$$
\sum_ {k = 1} ^ {n} \left(a _ {k} - b _ {k}\right) = \sum_ {k = 1} ^ {n} a _ {k} - \sum_ {k = 1} ^ {n} b _ {k}
$$

3. Constant Multiple Rule: 

$$
\sum_ {k = 1} ^ {n} c a _ {k} = c \cdot \sum_ {k = 1} ^ {n} a _ {k}
$$

(Any number $c$ ) 

4. Constant Value Rule: 

$$
\sum_ {k = 1} ^ {n} c = n \cdot c
$$

(Any number $c$ ) 

## **EXAMPLE 3** We demonstrate the use of the algebra rules.

$$
\text { (a) } \sum_ {k = 1} ^ {n} (3 k - k ^ {2}) = 3 \sum_ {k = 1} ^ {n} k - \sum_ {k = 1} ^ {n} k ^ {2}
$$

Difference Rule and Constant Multiple Rule 

$$
\text { (b) } \sum_ {k = 1} ^ {n} (- a _ {k}) = \sum_ {k = 1} ^ {n} (- 1) \cdot a _ {k} = - 1 \cdot \sum_ {k = 1} ^ {n} a _ {k} = - \sum_ {k = 1} ^ {n} a _ {k}
$$

Constant Multiple Rule 

## HISTORICAL BIOGRAPHY

## Carl Friedrich Gauss

(1777-1855) 

Gauss was born in Brunswick, Germany. The list of Gauss's accomplishments in science and mathematics is astonishing, ranging from the invention of the electric telegraph (with Wilhelm Weber in 1833) to the development of a theory of planetary orbits and the development of an accurate theory of non-Euclidean geometry. 

To know more, visit the companion Website. 

$$
\begin{array}{r l} (\mathbf {c}) \sum_ {k = 1} ^ {3} (k + 4) & = \sum_ {k = 1} ^ {3} k + \sum_ {k = 1} ^ {3} 4 \\ & = (1 + 2 + 3) + (3 \cdot 4) \\ & = 6 + 1 2 = 1 8 \end{array}
$$

Sum Rule 

Constant Value Rule 

$$
\text { (d) } \sum_ {k = 1} ^ {n} \frac {1}{n} = n \cdot \frac {1}{n} = 1
$$

Constant Value Rule 

(1/n is constant) 

Over the years, people have discovered a variety of formulas for the values of finite sums. The most famous of these are the formula for the sum of the first n positive integers (Gauss is said to have discovered it at age 8) and the formulas for the sums of the squares and cubes of the first n positive integers. 

**EXAMPLE 4** Show that the sum of the first n positive integers is 

$$
\sum_ {k = 1} ^ {n} k = \frac {n (n + 1)}{2}.
$$

**Solution** The formula tells us that the sum of the first 4 positive integers is 

$$
\frac {(4) (5)}{2} = 1 0.
$$

Addition verifies this prediction: 

$$
1 + 2 + 3 + 4 = 1 0.
$$

To prove the formula in general, we write out the terms in the sum twice, once forward and once backward. 

$$
\begin{array}{c c c c c c c c c} 1 & + & 2 & + & 3 & + & \dots & + & n \\ n & + & (n - 1) & + & (n - 2) & + & \dots & + & 1 \end{array}
$$

If we add the two terms in the first column we get $1 + n = n + 1$ . Similarly, if we add the two terms in the second column we get $2 + (n - 1) = n + 1$ . The two terms in any column sum to $n + 1$ . When we add the n columns together we get n terms, each equal to $n + 1$ , for a total of $n(n + 1)$ . Since this is twice the desired quantity, the sum of the first n integers is $n(n + 1)/2$ . 

Formulas for the sums of the squares and cubes of the first n positive integers are proved using mathematical induction (see Appendix A.3). We state them here. 

Sum of the first $n$ squares: $\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}$ 

Sum of the first $n$ cubes: 

$$
\sum_ {k = 1} ^ {n} k ^ {3} = \left(\frac {n (n + 1)}{2}\right) ^ {2}
$$

## Limits of Finite Sums

The finite sum approximations that we considered in Section 5.1 became more accurate as the number of terms increased and the subinterval widths (lengths) narrowed. The next example shows how to calculate a limiting value as the widths of the subintervals go to zero and the number of subintervals grows to infinity. 

**EXAMPLE 5** Find the limiting value of lower sum approximations to the area of the region R below the graph of $y = 1 - x^{2}$ and above the interval [0,1] on the x-axis using equal-width rectangles whose widths approach zero and whose number approaches infinity. (See Figure 5.4a.) 

**Solution** We compute a lower sum approximation using n rectangles of equal width $\Delta x$ and then see what happens as $n \to \infty$ . We start by subdividing [0,1] into n equal width subintervals 

$$
\left[ 0, \frac {1}{n} \right], \left[ \frac {1}{n}, \frac {2}{n} \right], \dots , \left[ \frac {n - 1}{n}, \frac {n}{n} \right].
$$

Each subinterval has width $\Delta x = 1/n$ . The function $1 - x^2$ is decreasing on $[0, 1]$ , and its smallest value in a subinterval occurs at the subinterval's right endpoint. So a lower sum is constructed with rectangles whose height over the subinterval $[(k-1)/n, k/n]$ is $f(k/n) = 1 - (k/n)^2$ , giving the sum 

$$
f \left(\frac {1}{n}\right) \cdot \frac {1}{n} + f \left(\frac {2}{n}\right) \cdot \frac {1}{n} + \dots + f \left(\frac {k}{n}\right) \cdot \frac {1}{n} + \dots + f \left(\frac {n}{n}\right) \cdot \frac {1}{n}.
$$

We write this in sigma notation and simplify, 

$$
\begin{array}{l l} \sum_ {k = 1} ^ {n} f \left(\frac {k}{n}\right) \cdot \frac {1}{n} = \sum_ {k = 1} ^ {n} \left(1 - \left(\frac {k}{n}\right) ^ {2}\right) \frac {1}{n} \\ = \sum_ {k = 1} ^ {n} \left(\frac {1}{n} - \frac {k ^ {2}}{n ^ {3}}\right) \\ = \sum_ {k = 1} ^ {n} \frac {1}{n} - \sum_ {k = 1} ^ {n} \frac {k ^ {2}}{n ^ {3}} & \text { Difference   Rule } \\ = n \cdot \frac {1}{n} - \frac {1}{n ^ {3}} \sum_ {k = 1} ^ {n} k ^ {2} & \text { Constant   Value   and } \\ = 1 - \left(\frac {1}{n ^ {3}}\right) \frac {n (n + 1) (2 n + 1)}{6} & \text { Sum   of   the   first   } n \text {   squares } \\ = 1 - \frac {2 n ^ {3} + 3 n ^ {2} + n}{6 n ^ {3}}. & \text { Numerator   expanded } \end{array}
$$

We have obtained an expression for the lower sum that holds for any n. Taking the limit of this expression as $n \rightarrow \infty$ , we see that the lower sums converge as the number of subintervals increases and the subinterval widths approach zero: 

$$
\lim _ {n \rightarrow \infty} \left(1 - \frac {2 n ^ {3} + 3 n ^ {2} + n}{6 n ^ {3}}\right) = 1 - \frac {2}{6} = \frac {2}{3}.
$$

The lower sum approximations converge to 2/3. A similar calculation shows that the upper sum approximations also converge to 2/3. Any finite sum approximation $\sum_{k=1}^{n} f(c_k)(1/n)$ also converges to the same value, 2/3. This is because it is possible to show that any finite sum approximation is trapped between the lower and upper sum approximations. For this reason we are led to define the area of the region $R$ as this limiting value. In Section 5.3 we study the limits of such finite approximations in a general setting. 

## HISTORICAL BIOGRAPHY

## Georg Friedrich Bernhard Riemann (1826–1866)

Riemann was born in Hanover, Germany. His doctorate was obtained under the direction of Gauss in the theory of complex variables. He also worked with physicist Wilhelm Weber. He introduced the foundational ideas of differential geometry and contributed to dynamics, non-Euclidean geometry, and computational physics. To know more, visit the companion Website. 

![[bf890eebfde0318a194f260e2d3830dbf39f484f968a0cc0352196c65ffbe2cf.jpg|image]]



FIGURE 5.8 A typical continuous function $y = f(x)$ over a closed interval $[a, b]$ .


## Riemann Sums

The theory of limits of finite approximations was made precise by the German mathematician Bernhard Riemann. We now introduce the notion of a Riemann sum, which underlies the theory of the definite integral that will be presented in the next section. 

We begin with an arbitrary bounded function f defined on a closed interval $[a, b]$ . Like the function pictured in Figure 5.8, f may have negative as well as positive values. We subdivide the interval $[a, b]$ into subintervals, not necessarily of equal width (or length), and form sums in the same way as for the finite approximations in Section 5.1. To do so, we choose n - 1 points $\{x_{1}, x_{2}, x_{3}, \ldots, x_{n-1}\}$ between a and b that are in increasing order, so that 

$$
a <   x _ {1} <   x _ {2} <   \dots <   x _ {n - 1} <   b.
$$

To make the notation consistent, we set $x_{0} = a$ and $x_{n} = b$ , so that 

$$
a = x _ {0} <   x _ {1} <   x _ {2} <   \dots <   x _ {n - 1} <   x _ {n} = b.
$$

The set of all of these points, 

$$
P = \{x _ {0}, x _ {1}, x _ {2}, \dots , x _ {n - 1}, x _ {n} \},
$$

is called a partition of $[a, b]$ . 

The partition P divides $[a, b]$ into the n closed subintervals 

$$
\left[ x _ {0}, x _ {1} \right], \left[ x _ {1}, x _ {2} \right], \dots , \left[ x _ {n - 1}, x _ {n} \right].
$$

## HISTORICAL BIOGRAPHY Richard Dedekind (1831–1916)

Dedekind grew up in Germany and in 1850 entered the University of Gottingen. There he studied with Bernhard Riemann and Carl Gauss. Like Gauss, Dedekind preferred to study the theoretical aspects of number theory. His work on irrational numbers gave the subject a logical foundation. 

To know more, visit the companion Website. 

The first of these subintervals is $[x_{0}, x_{1}]$ , the second is $[x_{1}, x_{2}]$ , and the kth subinterval is $[x_{k-1}, x_{k}]$ (where k is an integer between 1 and n). 

![[e74e3c46f07f74d38ec2d4f571c3361ab15160e83126d185e0bf662a1fd97f71.jpg|image]]


The width of the first subinterval $[x_0, x_1]$ is denoted $\Delta x_1$ , the width of the second $[x_1, x_2]$ is $\Delta x_2$ , and the width of the $k$ th subinterval is $\Delta x_k = x_k - x_{k-1}$ . 

![[4bda995aefa40ff84ce7d07844f058377839fba80e0cddf7b69b821cd49eb346.jpg|image]]


If all n subintervals have equal width, then their common width, which we call $\Delta x$ , is equal to $(b - a)/n$ . Using equal width subintervals is often the simplest choice when doing computations. 

In each subinterval we select some point. The point chosen in the kth subinterval $\left[x_{k-1}, x_{k}\right]$ is called $c_{k}$ . Then on each subinterval, we stand a vertical rectangle that stretches from the x-axis to touch the curve at $(c_{k}, f(c_{k}))$ . These rectangles can be above or below the x-axis, depending on whether $f(c_{k})$ is positive or negative, or on the x-axis if $f(c_{k}) = 0$ (see Figure 5.9). 

![[070ea59dc4ae1552790e24bce260c5c73503870837d508e35866e6ce6abfb403.jpg|image]]



FIGURE 5.9 The rectangles approximate the region between the graph of the function $y = f(x)$ and the x-axis. Figure 5.8 has been repeated and enlarged, the partition of $[a, b]$ and the points $c_{k}$ have been added, and the corresponding rectangles with heights $f(c_{k})$ are shown.


On each subinterval we form the product $f(c_{k}) \cdot \Delta x_{k}$ . This product is positive, negative, or zero, depending on the sign of $f(c_{k})$ . When $f(c_{k}) > 0$ , the product $f(c_{k}) \cdot \Delta x_{k}$ is the area of a rectangle with height $f(c_{k})$ and width $\Delta x_{k}$ . When $f(c_{k}) < 0$ , the product $f(c_{k}) \cdot \Delta x_{k}$ is a negative number, the negative of the area of a rectangle of width $\Delta x_{k}$ that drops from the x-axis to the negative number $f(c_{k})$ . 

Finally, we sum all these products to get 

$$
S _ {P} = \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k}.
$$

The sum $S_{P}$ is called a Riemann sum for f on the interval $[a, b]$ . There are many such sums, depending on the partition P we choose and on the choices of the points $c_{k}$ in the subintervals. For instance, we could choose n subintervals all having equal width $\Delta x = (b - a)/n$ to partition $[a, b]$ , and then choose the point $c_{k}$ to be the right-hand endpoint of each subinterval when forming the Riemann sum (as we did in Example 5). This choice leads to the Riemann sum formula 

![[82296d1aba45123e2191e5d31dc49a736dfae0355ae27717a32584a312ad1d39.jpg|image]]



(a)


![[72bafe101db40076f34b251505ec119016ea71a4f4c2089c20cec55eacb59ee4.jpg|image]]



(b)


$$
S _ {n} = \sum_ {k = 1} ^ {n} f \left(a + k \frac {b - a}{n}\right) \cdot \left(\frac {b - a}{n}\right).
$$

Similar formulas can be obtained if instead we choose $c_{k}$ to be the left-hand endpoint, or the midpoint, of each subinterval. 

In the cases in which the subintervals all have equal width $\Delta x = (b - a)/n$ , we can make them thinner by simply increasing their number n. When a partition has subintervals of varying widths, we can ensure they are all thin by controlling the width of a widest (longest) subinterval. We define the norm of a partition P, written $\|P\|$ , to be the largest of all the subinterval widths. If $\|P\|$ is a small number, then all of the subintervals in the partition P have a small width. 


FIGURE 5.10 The curve of Figure 5.9 with rectangles from finer partitions of $[a, b]$ . Finer partitions create collections of rectangles with thinner bases that approximate the region between the graph of f and the x-axis with increasing accuracy.


**EXAMPLE 6** The set $P = \{0, 0.2, 0.6, 1, 1.5, 2\}$ is a partition of $[0, 2]$ . There are five subintervals of $P$ : $[0, 0.2], [0.2, 0.6], [0.6, 1], [1, 1.5]$ , and $[1.5, 2]$ : 

![[b59e3c996f777c8ff4b07e69307b275b6fe11d673c276daa496391c96f2b64b9.jpg|image]]


The lengths of the subintervals are $\Delta x_{1} = 0.2$ , $\Delta x_{2} = 0.4$ , $\Delta x_{3} = 0.4$ , $\Delta x_{4} = 0.5$ , and $\Delta x_{5} = 0.5$ . The longest subinterval length is 0.5, so the norm of the partition is $||P|| = 0.5$ . In this example, there are two subintervals of this length. 

Any Riemann sum associated with a partition of a closed interval $[a, b]$ defines rectangles that approximate the region between the graph of a continuous function f and the x-axis. Partitions with norm approaching zero lead to collections of rectangles that approximate this region with increasing accuracy, as suggested by Figure 5.10. We will see in the next section that if the function f is continuous over the closed interval $[a, b]$ , then no matter how we choose the partition P and the points $c_{k}$ in its subintervals, the Riemann sums corresponding to these choices will approach a single limiting value as the subinterval widths (which are controlled by the norm of the partition) approach zero. 

## EXERCISES 5.2

## Sigma Notation

Write the sums in Exercises 1–6 without sigma notation. Then evaluate them.
1. $\sum_{k=1}^{2}\frac{6k}{k+1}$ 2. $\sum_{k=1}^{3}\frac{k-1}{k}$ 3. $\sum_{k=1}^{4}\cos k\pi$ 4. $\sum_{k=1}^{5}\sin k\pi$ 5. $\sum_{k=1}^{3}(-1)^{k+1}\sin\frac{\pi}{k}$ 6. $\sum_{k=1}^{4}(-1)^{k}\cos k\pi$ 

7. Which of the following express $1 + 2 + 4 + 8 + 16 + 32$ in sigma notation? a. $\sum_{k=1}^{6} 2^{k-1}$ b. $\sum_{k=0}^{5} 2^k$ c. $\sum_{k=-1}^{4} 2^{k+1}$ 

8. Which of the following express $1 - 2 + 4 - 8 + 16 - 32$ in sigma notation? a. $\sum_{k=1}^{6} (-2)^{k-1}$ b. $\sum_{k=0}^{5} (-1)^{k} 2^{k}$ c. $\sum_{k=-2}^{3} (-1)^{k+1} 2^{k+2}$ 

9. Which formula is not equivalent to the other two?
a. $\sum_{k=2}^{4}\frac{(-1)^{k-1}}{k-1}$ b. $\sum_{k=0}^{2}\frac{(-1)^{k}}{k+1}$ c. $\sum_{k=-1}^{1}\frac{(-1)^{k}}{k+2}$ 

10. Which formula is not equivalent to the other two?
a. $\sum_{k=1}^{4}(k-1)^{2}$ b. $\sum_{k=-1}^{3}(k+1)^{2}$ c. $\sum_{k=-3}^{-1}k^{2}$ 

Express the sums in Exercises 11–16 in sigma notation. The form of your answer will depend on your choice for the starting index.
11. $1 + 2 + 3 + 4 + 5 + 6$ 12. $1 + 4 + 9 + 16$ 13. $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16}$ 14. $2 + 4 + 6 + 8 + 10$ 

15. $1 - \frac{1}{2} +\frac{1}{3} -\frac{1}{4} +\frac{1}{5}$ 16. $-\frac{1}{5} +\frac{2}{5} -\frac{3}{5} +\frac{4}{5} -\frac{5}{5}$ 

## Values of Finite Sums

17. Suppose that $\sum_{k=1}^{n} a_k = -5$ and $\sum_{k=1}^{n} b_k = 6$ . Find the values of a. $\sum_{k=1}^{n} 3a_k$ b. $\sum_{k=1}^{n} \frac{b_k}{6}$ c. $\sum_{k=1}^{n} (a_k + b_k)$ 

d. $\sum_{k=1}^{n}(a_k - b_k)$ e. $\sum_{k=1}^{n}(b_k - 2a_k)$ 

18. Suppose that $\sum_{k=1}^{n} a_k = 0$ and $\sum_{k=1}^{n} b_k = 1$ . Find the values of
a. $\sum_{k=1}^{n} 8a_k$ b. $\sum_{k=1}^{n} 250b_k$ c. $\sum_{k=1}^{n} (a_k + 1)$ d. $\sum_{k=1}^{n} (b_k - 1)$ 

## Evaluate the sums in Exercises 19–36.

19. a. $\sum_{k=1}^{10} k$ b. $\sum_{k=1}^{10} k^2$ c. $\sum_{k=1}^{10} k^3$ 

20. a. $\sum_{k=1}^{13} k$ b. $\sum_{k=1}^{13} k^2$ c. $\sum_{k=1}^{13} k^3$ 

21. $\sum_{k=1}^{7} (-2k)$ 22. $\sum_{k=1}^{5} \frac{\pi k}{15}$ 

23. $\sum_{k=1}^{6}(3 - k^2)$ 24. $\sum_{k=1}^{6}(k^2 - 5)$ 

25. $\sum_{k=1}^{5} k(3k + 5)$ 26. $\sum_{k=1}^{7} k(2k + 1)$ 

27. $\sum_{k=1}^{5} \frac{k^3}{225} + \left( \sum_{k=1}^{5} k \right)^3$ 28. $\left( \sum_{k=1}^{7} k \right)^2 - \sum_{k=1}^{7} \frac{k^3}{4}$ 

29. a. $\sum_{k=1}^{7} 3$ b. $\sum_{k=1}^{500} 7$ c. $\sum_{k=3}^{264} 10$ 

30. a. $\sum_{k=9}^{36} k$ b. $\sum_{k=3}^{17} k^2$ c. $\sum_{k=18}^{71} k(k-1)$ 

31. a. $\sum_{k=1}^{n} 4$ b. $\sum_{k=1}^{n} c$ c. $\sum_{k=1}^{n} (k - 1)$ 

## 5.3 The Definite Integral

32. a. $\sum_{k=1}^{n}\left(\frac{1}{n} + 2n\right)$ b. $\sum_{k=1}^{n}\frac{c}{n}$ c. $\sum_{k=1}^{n}\frac{k}{n^2}$ 

33. $\sum_{k = 1}^{50}\left[(k + 1)^2 - k^2\right]$ 34. $\sum_{k = 2}^{20}\left[\sin (k - 1) - \sin k\right]$ 

35. $\sum_{k=7}^{30}\left(\sqrt{k-4}-\sqrt{k-3}\right)$ 

36. $\sum_{k=1}^{40} \frac{1}{k(k+1)}$ (Hint: $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$ ) 

## Riemann Sums

In Exercises 37–40, graph each function $f(x)$ over the given interval. Partition the interval into four subintervals of equal length. Then add to your sketch the rectangles associated with the Riemann sum $\sum_{k=1}^{4} f(c_k) \Delta x_k$ , given that $c_k$ is the (a) left-hand endpoint, (b) right-hand endpoint, (c) midpoint of the kth subinterval. (Make a separate sketch for each set of rectangles.) 

37. $f(x) = x^{2} - 1, [0,2]$ 38. $f(x) = -x^{2}, [0,1]$ 

39. $f(x) = \sin x,[-\pi ,\pi ]$ 

40. $f(x) = \sin x + 1,[-\pi ,\pi ]$ 

41. Find the norm of the partition $P = \{0, 1.2, 1.5, 2.3, 2.6, 3\}$ . 

42. Find the norm of the partition $P = \{-2, -1.6, -0.5, 0, 0.8, 1\}$ . 

## Limits of Riemann Sums

For the functions in Exercises 43–50, find a formula for the Riemann sum obtained by dividing the interval $[a, b]$ into n equal subintervals and using the right-hand endpoint for each $c_{k}$ . Then take a limit of these sums as $n \to \infty$ to calculate the area under the curve over $[a, b]$ . 

43. $f(x) = 1 - x^2$ over the interval [0, 1]. 

44. $f(x) = 2x$ over the interval [0, 3]. 

45. $f(x) = x^{2} + 1$ over the interval [0, 3]. 

46. $f(x) = 3x^{2}$ over the interval [0, 1]. 

47. $f(x) = x + x^2$ over the interval [0, 1]. 

48. $f(x) = 3x + 2x^{2}$ over the interval [0, 1]. 

49. $f(x) = 2x^{3}$ over the interval [0, 1]. 

50. $f(x) = x^{2} - x^{3}$ over the interval $[-1, 0]$ . 

In this section we consider the limit of general Riemann sums as the norm of the partitions of a closed interval $[a, b]$ approaches zero. This limiting process leads us to the definition of the definite integral of a function over a closed interval $[a, b]$ . 

## Definition of the Definite Integral

The definition of the definite integral is based on the fact that for some functions, as the norm of the partitions of $[a, b]$ approaches zero, the values of the corresponding Riemann sums approach a limiting value J. In particular, this is true for continuous and piecewise-continuous functions. We again use the symbol $\varepsilon$ to represent a small positive number, and use it to specify how close to J the Riemann sum must be. The symbol $\delta$ is used for a second small positive number that specifies how small the norm of a partition must be in order for the Riemann sum to differ from J by no more than $\varepsilon$ . We now define this limit precisely. 

> ***DEFINITION*** Let $f(x)$ be a function defined on a closed interval $[a, b]$ . We say that a number $J$ is the definite integral of $f$ over $[a, b]$ and that $J$ is the limit of the Riemann sums $\sum_{k=1}^{n} f(c_k) \Delta x_k$ if the following condition is satisfied: 
>
> Given any number $\varepsilon > 0$ , there is a corresponding number $\delta > 0$ such that for every partition $P = \{x_0, x_1, \ldots, x_n\}$ of $[a, b]$ with $||P|| < \delta$ and any choice of $c_k$ in $[x_{k-1}, x_k]$ , we have 
>
> $$
> \left| \sum_ {k = 1} ^ {n} f (c _ {k})   \Delta x _ {k} - J \right| <   \varepsilon .
> $$
>
> The definition involves a limiting process in which the norm of the partition goes to zero. When this limit exists, the function $f$ is said to be integrable over $[a, b]$ . 
>
We have many choices for a partition P with norm going to zero, and many choices of points $c_{k}$ for each partition. The definite integral exists when we always get the same limit J, no matter what choices are made. When the limit exists we write 

$$
J = \lim _ {| | P | | \rightarrow 0} \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k},
$$

and we say that the definite integral exists. 

Leibniz introduced a notation for the definite integral that captures its construction as a limit of Riemann sums. He envisioned the finite sums $\sum_{k=1}^{n}f(c_{k})\Delta x_{k}$ becoming an infinite sum of function values $f(x)$ multiplied by “infinitesimal” subinterval widths dx. The sum symbol $\sum$ is replaced in the limit by the integral symbol $\int$ , whose origin is in the letter “S” (for sum). The function values $f(c_{k})$ are replaced by a continuous selection of function values $f(x)$ . The subinterval widths $\Delta x_{k}$ become the differential dx. It is as if we were summing all products of the form $f(x)\cdot dx$ as x goes from a to b. While this notation captures the underlying ideas, it is Riemann’s definition that gives a precise meaning to the definite integral. 

If the definite integral exists, then instead of writing J, we write 

$$
\int_ {a} ^ {b} f (x) d x.
$$

We read this as “the integral from a to b of f of x dee x” or sometimes as “the integral from a to b of f of x with respect to x.” The component parts in the integral symbol also have names: 

![[6bb9dc246c639cfeb392bd51da0e9d876d17164da87071dca85f69395524cf88.jpg|image]]


When the definite integral exists, we say that the Riemann sums of $f$ on $[a, b]$ converge to the definite integral $J = \int_{a}^{b} f(x) dx$ and that $f$ is integrable over $[a, b]$ . 

If we choose all the subintervals in a partition to have equal width $\Delta x = (b - a) / n$ , the Riemann sums have the form 

$$
S _ {n} = \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k} = \sum_ {k = 1} ^ {n} f (c _ {k}) \left(\frac {b - a}{n}\right), \quad \Delta x _ {k} = \Delta x = (b - a) / n \text {   for   all   } k
$$

where $c_k$ is any point in the $k$ th subinterval. If the definite integral exists, then these Riemann sums converge to the definite integral of $f$ over $[a, b]$ , so 

$$
J = \int_ {a} ^ {b} f (x) d x = \lim _ {n \to \infty} \sum_ {k = 1} ^ {n} f (c _ {k}) \left(\frac {b - a}{n}\right). \quad \text { For   equal - width   subintervals,   the   condition } \| P \| \to 0 \text {   is   equivalent   to   } n \to \infty .
$$

If we pick the point $c_k$ to be the right endpoint of the $k$ th subinterval, so that $c_k = a + k\Delta x = a + k(b - a) / n$ , then the formula for the definite integral becomes 

The Definite Integral as a Limit of Riemann Sums with Equal-Width Subintervals 

$$
\int_ {a} ^ {b} f (x) d x = \lim _ {n \rightarrow \infty} \sum_ {k = 1} ^ {n} f \left(a + k \frac {b - a}{n}\right)\left(\frac {b - a}{n}\right)\tag{1}
$$

Equation (1) gives an explicit formula that can be used to compute definite integrals. When the definite integral exists, the Riemann sums coming from other choices of partitions and locations of points $c_{k}$ will have the same limit as $n \to \infty$ , provided that the norms of the partitions approach zero. Another choice of Riemann sums converging to the definite integral is given by the Midpoint Rule, discussed later in this section. 

The value of the definite integral of a function over any particular interval depends on the function, not on the letter we choose to represent its independent variable. If we decide to use t or u instead of x, we simply write the integral as 

$$
\int_ {a} ^ {b} f (t) d t \quad \text { or } \quad \int_ {a} ^ {b} f (u) d u \quad \text { instead   of } \quad \int_ {a} ^ {b} f (x) d x.
$$

No matter how we write the integral, it is still the same number, the limit of the Riemann sums as the norm of the partition approaches zero. Since it does not matter what letter we use, the variable of integration is called a dummy variable. In the three integrals given above, the dummy variables are t, u, and x. 

## Integrable and Nonintegrable Functions

Not every function defined over a closed interval $[a, b]$ is integrable even if the function is bounded. That is, the Riemann sums for some functions might not converge to the same limiting value, or to any value at all. Understanding which functions defined over $[a, b]$ are integrable and which are not requires advanced mathematical analysis, but fortunately most functions that commonly occur in applications are integrable. In particular, every continuous function over $[a, b]$ is integrable over this interval, and so is every function that has no more than a finite number of jump discontinuities on $[a, b]$ . (See Figures 1.9 and 1.10. Such functions are called piecewise continuous functions, and they are defined in Additional Exercises 11–18 at the end of this chapter.) The following theorem, which is proved in more advanced courses, establishes these results. 

THEOREM 1—Continuous Functions Are Integrable If a function $f$ is continuous over the interval $[a, b]$ , or if $f$ has at most finitely many jump discontinuities there, then the definite integral $\int_{a}^{b} f(x) dx$ exists and $f$ is integrable over $[a, b]$ . 

The idea behind Theorem 1 for continuous functions is given in Exercises 86 and 87. Briefly, when $f$ is continuous, we can choose each $c_k$ so that $f(c_k)$ gives the maximum value of $f$ on the subinterval $[x_{k-1}, x_k]$ , resulting in an upper sum. Likewise, we can choose $c_k$ to give the minimum value of $f$ on $[x_{k-1}, x_k]$ to obtain a lower sum. The upper and lower sums can be shown to converge to the same limiting value as the norm of the partition $P$ tends to zero. Moreover, every Riemann sum is trapped between the values of the upper and lower sums, so every Riemann sum converges to the same limit as well. Therefore, the number $J$ in the definition of the definite integral exists, and the continuous function $f$ is integrable over $[a, b]$ . 

For integrability to fail, a function needs to be sufficiently discontinuous that the region between its graph and the x-axis cannot be approximated well by increasingly thin rectangles. Our first example is a function that is not integrable over a closed interval. 

## **EXAMPLE 1** The function

$$
f (x) = \left\{ \begin{array}{l l} 1, & \text { if   } x \text {   is   rational }, \\ 0, & \text { if   } x \text {   is   irrational }, \end{array} \right.
$$

has no Riemann integral over $[0,1]$ . Underlying this is the fact that between any two numbers there are both a rational number and an irrational number. Thus the function jumps up and down too erratically over $[0,1]$ to allow the region beneath its graph and above the x-axis to be approximated by rectangles, no matter how thin they are. In fact, we will show that upper sum approximations and lower sum approximations converge to different limiting values. 

If we choose a partition $P$ of $[0,1]$ , then the lengths of the intervals in the partition sum to 1; that is, $\sum_{k=1}^{n} \Delta x_k = 1$ . In each subinterval $[x_{k-1}, x_k]$ there is a rational point, say $c_k$ . Because $c_k$ is rational, $f(c_k) = 1$ . Since 1 is the maximum value that $f$ can take anywhere, the upper sum approximation for this choice of $c_k$ 's is 

$$
U = \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k} = \sum_ {k = 1} ^ {n} (1) \Delta x _ {k} = 1.
$$

As the norm of the partition approaches 0, these upper sum approximations converge to 1 (because each approximation is equal to 1). 

On the other hand, we could pick the $c_{k}$ 's differently and get a different result. Each subinterval $[x_{k-1}, x_{k}]$ also contains an irrational point $c_{k}$ , and for this choice $f(c_{k}) = 0$ . Since 0 is the minimum value that f can take anywhere, this choice of $c_{k}$ gives us the minimum value of f on the subinterval. The corresponding lower sum approximation is 

$$
L = \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k} = \sum_ {k = 1} ^ {n} (0) \Delta x _ {k} = 0.
$$

These lower sum approximations converge to 0 as the norm of the partition converges to 0 (because they each equal 0). 

Thus making different choices for the points $c_{k}$ results in different limits for the corresponding Riemann sums. We conclude that the definite integral of f over the interval [0,1] does not exist and that f is not integrable over [0,1]. 

Theorem 1 says nothing about how to calculate definite integrals. A method of calculation will be developed in Section 5.4, through a connection of definite integrals to antiderivatives. Meanwhile, finite approximations can be used to calculate an approximation for a definite integral. 

## The Midpoint Rule

When setting up a Riemann sum 

$$
\sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k}
$$

we have many options on how to choose a partition and where to choose a point $c_k$ in the $k$ th interval of the partition. The simplest choice for a partition with $n$ subintervals is to take each subinterval to have equal length $\Delta x = (b - a) / n$ . In Equation (1) we obtained a formula by choosing $c_k$ at the right endpoint of the $k$ th interval. Setting $c_k$ to be at the middle of the $k$ th interval is often a better choice for approximating the integral using Riemann sums, as we saw in Figure 5.3. The midpoint is a good choice because on a small interval, the graph of a differentiable function can be approximated by a linear function, and the value of a linear function at an interval's midpoint is its average value over that interval. 

With these choices, $[x_{k-1}, x_{k}] = [a + (k - 1)\Delta x, a + k\Delta x]$ is the kth interval in the partition, its midpoint is located at $c_{k} = (x_{k-1} + x_{k})/2$ , and its width is $\Delta x = (b - a)/n$ . The midpoint rule for forming Riemann sums to approximate a definite integral takes the following form. 

Midpoint Rule for Approximating a Definite Integral 

$$
\begin{array}{l} \int_ {a} ^ {b} f (x) d x \approx \sum_ {k = 1} ^ {n} f (c _ {k}) \left(\frac {b - a}{n}\right) = \big [ f (c _ {1}) + f (c _ {2}) + \dots + f (c _ {n}) \big ] \Big (\frac {b - a}{n} \Big) \\ \text { with } c _ {k} = \frac {x _ {k - 1} + x _ {k}}{2} \text { and } x _ {k} = a + k \Big (\frac {b - a}{n} \Big). \end{array}
$$

**EXAMPLE 2** Approximate $\int_{0}^{1}\frac{1}{1+x^{2}}dx$ using the midpoint rule with five intervals of equal length. 

**Solution** The five intervals of the partition are $[0, 0.2]$ , $[0.2, 0.4]$ , $[0.4, 0.6]$ , $[0.6, 0.8]$ , and $[0.8, 1.0]$ , each of length 1/5. Their midpoints are at 0.1, 0.3, 0.5, 0.7, and 0.9. Applying the midpoint rule gives 

$$
\begin{array}{r l} \int_ {0} ^ {1} \frac {1}{1 + x ^ {2}} d x & \approx [ f (0. 1) + f (0. 3) + f (0. 5) + f (0. 7) + f (0. 9) ] \left(\frac {1}{5}\right) \\ & = \left[ \frac {1}{1 . 0 1} + \frac {1}{1 . 0 9} + \frac {1}{1 . 2 5} + \frac {1}{1 . 4 9} + \frac {1}{1 . 8 1} \right] (0. 2) \\ & \approx 0. 7 8 6. \end{array}
$$

The midpoint rule becomes more powerful when we can combine it with an error bound that tells us how close the approximation it gives with n intervals is to the integral. In Chapter 8 we will examine error bounds in approximations of integrals. 

## Properties of Definite Integrals

In defining $\int_{a}^{b}f(x)dx$ as a limit of sums $\sum_{k=1}^{n}f(c_{k})\Delta x_{k}$ , we moved from left to right across the interval [a,b]. What would happen if we instead move right to left, starting with $x_{0}=b$ and ending at $x_{n}=a$ ? Each $\Delta x_{k}$ in the Riemann sum would change its sign, with $x_{k}-x_{k-1}$ now negative instead of positive. With the same choices of $c_{k}$ in each subinterval, the sign of any Riemann sum would change, as would the sign of the limit, the integral $\int_{b}^{a}f(x)dx$ . Since we have not previously given a meaning to integrating backward, we are led to define 

$$
\int_ {b} ^ {a} f (x) d x = - \int_ {a} ^ {b} f (x) d x. \quad a \text {   and   } b \text {   interchanged }
$$

It is convenient to have a definition for the integral over $[a, b]$ when a = b, so that we are computing an integral over an interval of zero width. Since a = b gives $\Delta x = 0$ , whenever $f(a)$ exists we define 

$$
\int_ {a} ^ {a} f (x)   d x = 0. \quad \begin{array}{l} a \text {   is   both   the   lower   and   the } \\ \text { upper   limit   of   integration. } \end{array}
$$

## TABLE 5.6 Rules satisfied by definite integrals

1. Order of Integration: $\int_{b}^{a}f(x)dx = -\int_{a}^{b}f(x)dx$ A definition 

2. Zero Width Interval: $\int_{a}^{a}f(x)dx = 0$ 

3. Constant Multiple: $\int_{a}^{b} k f(x) dx = k \int_{a}^{b} f(x) dx$ 

Any constant $k$ 

4. Sum and Difference: $\int_{a}^{b}(f(x)\pm g(x))dx = \int_{a}^{b}f(x)dx\pm \int_{a}^{b}g(x)dx$ 

5. Additivity: $\int_{a}^{c}f(x)dx + \int_{c}^{b}f(x)dx = \int_{a}^{b}f(x)dx$ $[a,c]\cup [c,b] = [a,b]$ 

6. Max-Min Inequality: If f has maximum value max f and minimum value 

min $f$ on $[a,b]$ , then 

$$
\left(\min f\right) \cdot (b - a) \leq \int_ {a} ^ {b} f (x) d x \leq (\max f) \cdot (b - a).
$$

7. Domination: If $f(x) \geq g(x)$ on $[a, b]$ , then $\int_{a}^{b} f(x) \, dx \geq \int_{a}^{b} g(x) \, dx$ . 

If $f(x) \geq 0$ on $[a, b]$ , then $\int_{a}^{b} f(x) dx \geq 0$ . Special case of Rule 6. 

Theorem 2 states some basic properties of integrals, including the two just discussed. These properties, listed in Table 5.6, are very useful for computing integrals. We will refer to them repeatedly to simplify our calculations. Rules 2 through 7 have geometric interpretations, which are shown in Figure 5.11. The graphs in these figures show only positive functions, but the rules apply to general integrable functions, which could take both positive and negative values. 

THEOREM 2 When f and g are integrable over the interval $[a, b]$ , the definite integral satisfies the rules listed in Table 5.6. 

Rules 1 and 2 are definitions, but Rules 3 to 7 of Table 5.6 must be proved. Below we give a proof of Rule 6. Similar proofs can be given to verify the other properties in Table 5.6. 

Proof of Rule 6 Rule 6 says that the integral of f over $[a, b]$ is never smaller than the minimum value of f times the length of the interval and never larger than the maximum value of f times the length of the interval. The reason is that for every partition of $[a, b]$ and for every choice of the points $c_{k}$ , 

$$
\begin{array}{l l} (\min f) \cdot (b - a) = (\min f) \cdot \sum_ {k = 1} ^ {n} \Delta x _ {k} & \sum_ {k = 1} ^ {n} \Delta x _ {k} = b - a \\ = \sum_ {k = 1} ^ {n} (\min f) \cdot \Delta x _ {k} & \text { Constant   Multiple   Rule } \\ \leq \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x _ {k} & \min f \leq f (c _ {k}) \\ \leq \sum_ {k = 1} ^ {n} (\max f) \cdot \Delta x _ {k} & f (c _ {k}) \leq \max f \\ = (\max f) \cdot \sum_ {k = 1} ^ {n} \Delta x _ {k} & \text { Constant   Multiple   Rule } \\ = (\max f) \cdot (b - a). \end{array}
$$

![[1aa400c283713b702c621cfa61c04987e25adca097156e9dfdea8f6bd59b987c.jpg|image]]


![[ef4fb7f4e6dc9e58bcbd2f53ec9dd5e48f1fdf37c953bc3f5ab6fb03e89ff46c.jpg|image]]



(a) Zero Width Interval:



(b) Constant Multiple: $(k = 2)$


![[c8bbe5ecccb4389aef753a959ae2f7a27b79d6249795249e4702444435ce1867.jpg|image]]


$$
\int_ {a} ^ {a} f (x) d x = 0
$$

$$
\int_ {a} ^ {b} k f (x) d x = k \int_ {a} ^ {b} f (x) d x
$$


(c) Sum: (areas add)


$$
\int_ {a} ^ {b} (f (x) + g (x)) d x = \int_ {a} ^ {b} f (x) d x + \int_ {a} ^ {b} g (x) d x
$$

![[1e068f68bd6258f22a0cfa981b3117eb67b675396aea20d40deac45ce49c5c76.jpg|image]]


![[a5b217e9217903439ba5dbbc6c9165917829613cf20361c92c60eb7dd2390ece.jpg|image]]


![[15d09213232af2f4cf0adb00986538efb2aad3431268c16b3873be53cd198bfd.jpg|image]]



(d) Additivity for Definite Integrals:


$$
\int_ {a} ^ {c} f (x) d x + \int_ {c} ^ {b} f (x) d x = \int_ {a} ^ {b} f (x) d x
$$


(e) Max-Min Inequality:


$$
\begin{array}{c} (\min f) \cdot (b - a) \leq \int_ {a} ^ {b} f (x) d x \\ \leq (\max f) \cdot (b - a) \end{array}
$$


(f) Domination:


$$
f (x) \geq g (x) \text {   on   } [ a, b ],
$$

$$
\int_ {a} ^ {b} f (x) d x \geq \int_ {a} ^ {b} g (x) d x.
$$

FIGURE 5.11 Geometric interpretations of Rules 2–7 in Table 5.6. 

In short, all Riemann sums for $f$ on $[a, b]$ satisfy the inequalities 

$$
(\min f) \cdot (b - a) \leq \sum_ {k = 1} ^ {n} f \left(c _ {k}\right) \Delta x _ {k} \leq (\max f) \cdot (b - a).
$$

Hence their limit, which is the integral, satisfies the same inequalities. 

**EXAMPLE 3** To illustrate some of the rules, we suppose that 

$$
\int_ {- 1} ^ {1} f (x) d x = 5, \quad \int_ {1} ^ {4} f (x) d x = - 2, \quad \text { and } \quad \int_ {- 1} ^ {1} h (x) d x = 7.
$$

Then 

$$
\int_ {4} ^ {1} f (x) d x = - \int_ {1} ^ {4} f (x) d x = - (- 2) = 2
$$

Rule 1 

$$
\begin{array}{r l} \int_ {- 1} ^ {1} [ 2 f (x) + 3 h (x) ] d x & = 2 \int_ {- 1} ^ {1} f (x) d x + 3 \int_ {- 1} ^ {1} h (x) d x \\ & = 2 (5) + 3 (7) = 3 1 \end{array} \tag {Rules3and4}
$$

$$
\int_ {- 1} ^ {4} f (x) d x = \int_ {- 1} ^ {1} f (x) d x + \int_ {1} ^ {4} f (x) d x = 5 + (- 2) = 3 \quad \text {   Rule   5   }
$$

**EXAMPLE 4** Show that the value of $\int_0^1\sqrt{1 + \cos x} dx$ is less than or equal to $\sqrt{2}$ . **Solution** The Max-Min Inequality for definite integrals (Rule 6) says that $(\min f)\cdot (b - a)$ is a lower bound for the value of $\int_{a}^{b}f(x)dx$ and that $(\max f)\cdot (b - a)$ is an upper bound. The maximum value of $\sqrt{1 + \cos x}$ on $[0,1]$ is $\sqrt{1 + 1} = \sqrt{2}$ , so 

$$
\int_ {0} ^ {1} \sqrt {1 + \cos x} d x \leq \sqrt {2} \cdot (1 - 0) = \sqrt {2}.
$$

![[cd4a7c17780a2bc9150d9c3a11e56e253c60af58a3245cb28967ced7fb6d862a.jpg|image]]



FIGURE 5.12 The region in Example 5 is a triangle.


## Area Under the Graph of a Nonnegative Function

We now return to the problem that started this chapter, which is defining what we mean by the area of a region having a curved boundary. In Section 5.1 we approximated the area under the graph of a nonnegative continuous function using several types of finite sums of areas of rectangles that approximate the region—upper sums, lower sums, and sums using the midpoints of each subinterval—all of which are Riemann sums constructed in special ways. Theorem 1 guarantees that all of these Riemann sums converge to a single definite integral as the norm of the partitions approaches zero and the number of subintervals goes to infinity. As a result, we can now define the area under the graph of a nonnegative integrable function to be the value of that definite integral. 

> ***DEFINITION*** If $y = f(x)$ is nonnegative and integrable over a closed interval $[a, b]$ , then the area under the curve $y = f(x)$ over $[a, b]$ is the integral of f from a to b, 
>
> $$
> A = \int_ {a} ^ {b} f (x) d x.
> $$
>
For the first time, we have a rigorous definition for the area of a region whose boundary is the graph of a continuous function. We now apply this to a simple example, the area under a straight line, and we verify that our new definition agrees with our previous notion of area. 

**EXAMPLE 5** Compute $\int_0^b x dx$ and find the area $A$ under $y = x$ over the interval $[0, b]$ , $b > 0$ . 

**Solution** The region of interest is a triangle (Figure 5.12). We compute the area in two ways. 

(a) To compute the definite integral as the limit of Riemann sums, we calculate $\lim_{||P||\to0}\sum_{k=1}^{n}f(c_k)\Delta x_k$ for partitions whose norms go to zero. Theorem 1 tells us that it does not matter how we choose the partitions or the points $c_k$ as long as the norms approach zero. All choices give the exact same limit. So we consider the partition P that subdivides the interval $[0,b]$ into n subintervals of equal width $\Delta x = (b - 0)/n = b/n$ , and we choose $c_k$ to be the right endpoint in each subinterval as in formula (1). The partition is $P = \left\{0, \frac{b}{n}, \frac{2b}{n}, \frac{3b}{n}, \cdots, \frac{nb}{n}\right\}$ and $c_k = \frac{kb}{n}$ . So 

$$
\begin{array}{l l} \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x = \sum_ {k = 1} ^ {n} \frac {k b}{n} \cdot \frac {b}{n} & f (c _ {k}) = c _ {k} \\ = \sum_ {k = 1} ^ {n} \frac {k b ^ {2}}{n ^ {2}} \\ = \frac {b ^ {2}}{n ^ {2}} \sum_ {k = 1} ^ {n} k & \text { Constant   Multiple   Rule } \\ = \frac {b ^ {2}}{n ^ {2}} \cdot \frac {n (n + 1)}{2} & \text { Sum   of   first   n   integers } \\ = \frac {b ^ {2}}{2} \left(1 + \frac {1}{n}\right). \end{array}
$$

As $n \to \infty$ and $||P|| \to 0$ , this last expression on the right has the limit $b^2 / 2$ . Therefore, 

$$
\int_ {0} ^ {b} x d x = \frac {b ^ {2}}{2}.
$$

(b) Since the area equals the definite integral for a nonnegative function, we can quickly derive the definite integral by using the formula for the area of a triangle having base length $b$ and height $y = b$ . The area is $A = (1/2)b \cdot b = b^2/2$ . Again we conclude that $\int_0^b x dx = b^2/2$ . 

![[a7d3734d7dc8c7f2002d5e980f69e21622930185f6847571032fecd61b059ef0.jpg|image]]



(a)


![[b896dced32c08242abc1259701a8cc2111449c3b24c964522cbe1bdd9f17b57a.jpg|image]]



(b)


![[323b8cd8b574996c9a7bede0f9705387c0945dfbc8920a3925b180b270a048fa.jpg|image]]



(c)



FIGURE 5.13 (a) The area of this trapezoidal region is $A = (b^2 - a^2)/2$ . (b) The definite integral in Equation (2) gives the negative of the area of this trapezoidal region. (c) The definite integral in Equation (2) gives the area of the blue triangular region added to the negative of the area of the tan triangular region.


![[1e1d90db8d065c81181a186d9a61875472250412bba0505099fa7a4b7b8cbeba.jpg|image]]



FIGURE 5.14 A sample of values of a function on an interval $[a, b]$ .


Example 5 can be generalized to integrate $f(x) = x$ over any closed interval $[a, b]$ for which 0 < a < b. 

First write 

$$
\int_ {0} ^ {b} x d x = \int_ {0} ^ {a} x d x + \int_ {a} ^ {b} x d x\tag{Rule 5}
$$

Then, by rearranging this equation and applying Example 5, we obtain 

$$
\int_ {a} ^ {b} x d x = \int_ {0} ^ {b} x d x - \int_ {0} ^ {a} x d x = \frac {b ^ {2}}{2} - \frac {a ^ {2}}{2}.\tag{Example 5}
$$

In conclusion, we have the following rule for integrating $f(x) = x$ over the interval $[a, b]$ : 

$$
\int_ {a} ^ {b} x d x = \frac {b ^ {2}}{2} - \frac {a ^ {2}}{2}, \quad a <   b\tag{2}
$$

This computation gives the area of the trapezoid in Figure 5.13a. Equation (2) remains valid when $a$ and $b$ are negative, but the interpretation of the definite integral changes. When $a < b < 0$ , the definite integral value $(b^2 - a^2)/2$ is a negative number, the negative of the area of a trapezoid dropping down to the line $y = x$ below the $x$ -axis (Figure 5.13b). When $a < 0$ and $b > 0$ , Equation (2) is still valid and the definite integral gives the difference between two areas, the area under the graph and above $[0, b]$ minus the area below $[a, 0]$ and over the graph (Figure 5.13c). 

The following results can also be established by using a Riemann sum calculation similar to the one we used in Example 5 (Exercises 63 and 65). 

$$
\int_ {a} ^ {b} c d x = c (b - a), \quad c \text {   any   constant }\tag{3}
$$

$$
\int_ {a} ^ {b} x ^ {2} d x = \frac {b ^ {3}}{3} - \frac {a ^ {3}}{3}, \quad a <   b\tag{4}
$$

## Average Value of a Continuous Function Revisited

In Section 5.1 we informally introduced the average value of a nonnegative continuous function f over an interval $[a, b]$ , leading us to define this average as the area under the graph of $y = f(x)$ divided by b - a. In integral notation we write this as 

$$
\text { Average } = \frac {1}{b - a} \int_ {a} ^ {b} f (x) d x.
$$

This formula gives us a precise definition of the average value of a continuous (or integrable) function, whether it is positive, negative, or both. 

Alternatively, we can justify this formula through the following reasoning. We start with the idea from arithmetic that the average of n numbers is their sum divided by n. A continuous function f on $[a, b]$ may have infinitely many values, but we can still sample them in an orderly way. We divide $[a, b]$ into n subintervals of equal width $\Delta x = (b - a)/n$ and evaluate f at a point $c_{k}$ in each (Figure 5.14). The average of the n sampled values is 

$$
\begin{array}{l} \frac {f (c _ {1}) + f (c _ {2}) + \cdots + f (c _ {n})}{n} = \frac {1}{n} \sum_ {k = 1} ^ {n} f (c _ {k}) \\ \qquad = \frac {\Delta x}{b - a} \sum_ {k = 1} ^ {n} f (c _ {k}) \qquad \Delta x = \frac {b - a}{n}, \text { so } \frac {1}{n} = \frac {\Delta x}{b - a} \\ \qquad = \frac {1}{b - a} \sum_ {k = 1} ^ {n} f (c _ {k}) \Delta x. \qquad \text { Constant   Multiple   Rule } \end{array}
$$

The average of the samples is obtained by dividing a Riemann sum for $f$ on $[a, b]$ by $(b - a)$ . As we increase the number of samples and let the norm of the partition approach zero, the average approaches $\left(1/(b - a)\right)\int_{a}^{b} f(x) dx$ . Both points of view lead us to the following definition. 

> ***DEFINITION*** If $f$ is integrable on $[a, b]$ , then its average value on $[a, b]$ , also called its mean, is 
>
> $$
> \operatorname{av} (f) = \frac {1}{b - a} \int_ {a} ^ {b} f (x) d x.
> $$

**EXAMPLE 6** Find the average value of $f(x) = x$ on [1,3]. 

**Solution** From Equation (2) we see that $\int_{1}^{3} x dx = 9/2 - 1/2 = 4$ . 

So the average value of f on the interval $[1,3]$ is $(1/2)(4)=2$ . 

![[58f426b208f8f4de6bc476c73e84bc0aeb014cb75beece4828dd6976e12d1d7a.jpg|image]]


**EXAMPLE 7** Find the average value of $f(x) = \sqrt{4 - x^{2}}$ on $[-2, 2]$ . 

**Solution** We recognize $f(x) = \sqrt{4 - x^{2}}$ as the function whose graph is the upper semicircle of radius 2 centered at the origin (Figure 5.15). 

Since we know the area inside a circle, we do not need to take the limit of Riemann sums. The area between the semicircle and the x-axis from -2 to 2 can be computed using the geometry formula 

FIGURE 5.15 The average value of $f(x) = \sqrt{4 - x^{2}}$ on $[-2, 2]$ is $\pi/2$ (Example 7). The area of the rectangle shown here is $4 \cdot (\pi/2) = 2\pi$ , which is also the area of the semicircle. 

$$
\text { Area } = \frac {1}{2} \cdot \pi r ^ {2} = \frac {1}{2} \cdot \pi (2) ^ {2} = 2 \pi .
$$

Because f is nonnegative, the area is also the value of the integral of f from -2 to 2, 

$$
\int_ {- 2} ^ {2} \sqrt {4 - x ^ {2}} d x = 2 \pi .
$$

Therefore, the average value of $f$ is 

$$
\operatorname{av} (f) = \frac {1}{2 - (- 2)} \int_ {- 2} ^ {2} \sqrt {4 - x ^ {2}} d x = \frac {1}{4} (2 \pi) = \frac {\pi}{2}.
$$

Notice that the average value of f over $[-2, 2]$ is the same as the height of a rectangle over $[-2, 2]$ whose area equals the area of the upper semicircle (see Figure 5.15). 

## EXERCISES 5.3

Interpreting Limits of Sums as Integrals 

Express the limits in Exercises 1–8 as definite integrals. 

1. $\lim_{||P||\to0}\sum_{k=1}^{n}c_{k}^{2}\Delta x_{k}$ , where P is a partition of [0,2] 

2. $\lim_{||P||\to0}\sum_{k=1}^{n}2c_{k}^{3}\Delta x_{k}$ , where P is a partition of $[-1,0]$ 

3. $\lim_{\| P\| \to 0}\sum_{k = 1}^{n}(c_k^2 -3c_k)\Delta x_k$ , where $P$ is a partition of $[-7,5]$ 

4. $\lim_{||P||\to 0}\sum_{k = 1}^{n}\left(\frac{1}{c_k}\right)\Delta x_k$ , where $P$ is a partition of [1,4] 

5. $\lim_{||P||\to 0}\sum_{k = 1}^{n}\frac{1}{1 - c_k}\Delta x_k$ , where $P$ is a partition of [2,3] 

6. $\lim_{||P||\to0}\sum_{k=1}^{n}\sqrt{4-c_{k}^{2}}\Delta x_{k}$ , where P is a partition of [0,1] 

7. $\lim_{||P||\to0}\sum_{k=1}^{n}\left(\sec c_{k}\right)\Delta x_{k}$ , where P is a partition of $[-π/4,0]$ 

8. $\lim_{||P||\to 0}\sum_{k = 1}^{n}(\tan c_k)\Delta x_k$ , where $P$ is a partition of $[0,\pi /4]$ 

Using the Definite Integral Rules 

9. Suppose that $f$ and $g$ are integrable and that 

$$
\int_ {1} ^ {2} f (x) d x = - 4, \quad \int_ {1} ^ {5} f (x) d x = 6, \quad \int_ {1} ^ {5} g (x) d x = 8.
$$

Use the rules in Table 5.6 to find 

a. $\int_2^2 g(x)dx$ 

$$
\int_ {5} ^ {1} g (x) d x
$$

c. $\int_1^2 3f(x)dx$ 

d. $\int_{2}^{5}f(x)dx$ 

e. $\int_{1}^{5}[f(x) - g(x)]dx$ f. $\int_{1}^{5}[4f(x) - g(x)]dx$ 

## 10. Suppose that $f$ and $h$ are integrable and that

$\int_{1}^{9}f(x)dx = -1,\quad \int_{7}^{9}f(x)dx = 5,\quad \int_{7}^{9}h(x)dx = 4.$ 

Use the rules in Table 5.6 to find 

a. $\int_1^9 -2f(x)dx$ 

b. $\int_{7}^{9}[f(x) + h(x)]dx$ 

c. $\int_7^9 [2f(x) - 3h(x)]dx$ 

d. $\int_{9}^{1}f(x)dx$ 

e. $\int_{1}^{7}f(x)dx$ f. $\int_9^7 [h(x) - f(x)]dx$ 

11. Suppose that $\int_1^2 f(x)dx = 5$ . Find 

a. $\int_1^2 f(u)du$ 

$$
\int_ {1} ^ {2} \sqrt {3} f (z) d z
$$

c. $\int_{2}^{1}f(t)dt$ 

d. $\int_1^2 [-f(x)]dx$ 

12. Suppose that $\int_{-3}^{0} g(t) dt = \sqrt{2}$ . Find 

a. $\int_0^{-3}g(t)dt$ 

b. $\int_{-3}^{0} g(u) du$ 

c. $\int_{-3}^{0}[-g(x)]dx$ 

d. $\int_{-3}^{0}\frac{g(r)}{\sqrt{2}} dr$ 

13. Suppose that $f$ is integrable and that $\int_0^3 f(z)dz = 3$ and $\int_0^4 f(z)dz = 7$ . Find
a. $\int_3^4 f(z)dz$ b. $\int_4^3 f(t)dt$ 

14. Suppose that $h$ is integrable and that $\int_{-1}^{1} h(r) dr = 0$ and $\int_{-1}^{3} h(r) dr = 6$ . Find
a. $\int_{1}^{3} h(r) dr$ b. $-\int_{3}^{1} h(u) du$ 

## Using Known Areas to Find Integrals

In Exercises 15–22, graph the integrands and use known area formulas to evaluate the integrals. 

15. $\int_{-2}^{4}\left(\frac{x}{2} +3\right)dx$ 

16. $\int_{1/2}^{3/2}(-2x + 4)dx$ 

17. $\int_{-3}^{3}\sqrt{9 - x^2} dx$ 

18. $\int_{-4}^{0}\sqrt{16 - x^2} dx$ 

19. $\int_{-2}^{1}|x|dx$ 

20. $\int_{-1}^{1}(1 - |x|)dx$ 

21. $\int_{-1}^{1}(2 - |x|)dx$ 

22. $\int_{-1}^{1}\left(1 + \sqrt{1 - x^2}\right)dx$ 

Use known area formulas to evaluate the integrals in Exercises 23–28. 

23. $\int_0^b\frac{x}{2} dx,\quad b > 0$ 24. $\int_0^b 4xdx,\quad b > 0$ 

25. $\int_{a}^{b} 2s ds, \quad 0 < a < b$ 26. $\int_{a}^{b} 3t dt, \quad 0 < a < b$ 

27. $f(x) = \sqrt{4 - x^2}$ on a. $[-2, 2]$ , b. $[0, 2]$ 

28. $f(x) = 3x + \sqrt{1 - x^2}$ on a. $[-1,0]$ , b. $[-1,1]$ 

## Evaluating Definite Integrals

Use the results of Equations (2) and (4) to evaluate the integrals in Exercises 29–40. 

29. $\int_{1}^{\sqrt{2}}x dx$ 30. $\int_{0.5}^{2.5}x dx$ 31. $\int_{\pi}^{2\pi}\theta d\theta$ 

32. $\int_{\sqrt{2}}^{5\sqrt{2}}rdr$ 

33. $\int_0^{\sqrt[3]{7}}x^2 dx$ 

34. $\int_0^{0.3}s^2 ds$ 

35. $\int_0^{1 / 2}t^2 dt$ 

36. $\int_0^{\pi /2}\theta^2 d\theta$ 

37. $\int_{a}^{2a}x dx$ 

38. $\int_{a}^{\sqrt{3}}x dx$ 39. $\int_0^{\sqrt[3]{b}}x^2 dx$ 40. $\int_0^{3b}x^2 dx$ 

Use the rules in Table 5.6 and Equations (2)-(4) to evaluate the integrals in Exercises 41-50. 

41. $\int_{3}^{1}7dx$ 

$$
\int_ {0} ^ {2} 5 x d x
$$

43. $\int_0^2 (2t - 3)dt$ 

44. $\int_0^{\sqrt{2}}(t - \sqrt{2})dt$ 

45. $\int_{2}^{1}\left(1 + \frac{z}{2}\right)dz$ 

46. $\int_3^0 (2z - 3)dz$ 

47. $\int_1^2 3u^2 du$ 

48. $\int_{1 / 2}^{1}24u^{2}du$ 

49. $\int_0^2 (3x^2 + x - 5)dx$ 

50. $\int_1^0 (3x^2 + x - 5)dx$ 

## Finding Area by Definite Integrals

In Exercises 51–54, use a definite integral to find the area of the region between the given curve and the x-axis on the interval $[0, b]$ . 

51. $y = 3x^{2}$ 

53. $y = 2x$ 

52. $y = \pi x^{2}$ 

54. $y = \frac{x}{2} + 1$ 

## Finding Average Value

In Exercises 55–62, graph the function and find its average value over the given interval. 

55. $f(x) = x^2 - 1$ on $[0, \sqrt{3}]$ 56. $f(x) = -\frac{x^2}{2}$ on $[0, 3]$ 

57. $f(x) = -3x^{2} - 1$ on [0,1] 58. $f(x) = 3x^{2} - 3$ on [0,1] 

59. $f(t) = (t - 1)^2$ on [0,3] 60. $f(t) = t^2 - t$ on $[-2,1]$ 

61. $g(x) = |x| - 1$ on a. $[-1,1]$ , b. $[1,3]$ , and c. $[-1,3]$ 

62. $h(x) = -|x|$ on a. $[-1,0]$ , b. $[0,1]$ , and c. $[-1,1]$ 

## Definite Integrals as Limits of Sums

Use the method of Example 5a or Equation (1) to evaluate the definite integrals in Exercises 63–70. 

63. $\int_{a}^{b}c dx$ 

64. $\int_0^2 (2x + 1)dx$ 

65. $\int_{a}^{b}x^{2}dx,\quad a < b$ 

66. $\int_{-1}^{0}(x - x^2)dx$ 

67. $\int_{-1}^{2}(3x^2 - 2x + 1)dx$ 

68. $\int_{-1}^{1} x^3 dx$ 

69. $\int_{a}^{b}x^{3}dx,\quad a < b$ 

70. $\int_0^1 (3x - x^3)dx$ 

## Theory and Examples

71. What values of a and b, with a < b, maximize the value of 

$$
\int_ {a} ^ {b} (x - x ^ {2}) d x?
$$

(Hint: Where is the integrand positive?) 

72. What values of a and b, with a < b, minimize the value of 

$$
\int_ {a} ^ {b} (x ^ {4} - 2 x ^ {2}) d x?
$$

73. Use the Max-Min Inequality to find upper and lower bounds for the value of 

$$
\int_ {0} ^ {1} \frac {1}{1 + x ^ {2}} d x.
$$

74. (Continuation of Exercise 73.) Use the Max-Min Inequality to find upper and lower bounds for 

$$
\int_ {0} ^ {0. 5} \frac {1}{1 + x ^ {2}} d x \quad \text { and } \quad \int_ {0. 5} ^ {1} \frac {1}{1 + x ^ {2}} d x.
$$

Add these to arrive at an improved estimate of 

$$
\int_ {0} ^ {1} \frac {1}{1 + x ^ {2}} d x.
$$

75. Show that the value of $\int_{0}^{1}\sin(x^{2})dx$ cannot possibly be 2. 

76. Show that the value of $\int_0^1\sqrt{x + 8} dx$ lies between $2\sqrt{2}\approx 2.8$ and 3. 

77. Integrals of nonnegative functions Use the Max-Min Inequality to show that if $f$ is integrable, then 

$$
f (x) \geq 0 \quad \text { on } \quad [ a, b ] \Rightarrow \int_ {a} ^ {b} f (x)   d x \geq 0.
$$

78. Integrals of nonpositive functions show that if $f$ is integrable, then 

$$
f (x) \leq 0 \quad \text { on } \quad [ a, b ] \Rightarrow \int_ {a} ^ {b} f (x) d x \leq 0.
$$

79. Use the inequality $\sin x \leq x$ , which holds for $x \geq 0$ , to find an upper bound for the value of $\int_0^1 \sin x dx$ . 

80. The inequality $\sec x \geq 1 + (x^{2}/2)$ holds on $(-π/2, π/2)$ . Use it to find a lower bound for the value of $\int_{0}^{1} \sec x dx$ . 

81. If $\operatorname{av}(f)$ really is a typical value of the integrable function $f(x)$ on $[a, b]$ , then the constant function $\operatorname{av}(f)$ should have the same integral over $[a, b]$ as f. Does it? That is, does 

$$
\int_ {a} ^ {b} \mathrm{av} (f) d x = \int_ {a} ^ {b} f (x) d x?
$$

Give reasons for your answer. 

82. It would be nice if average values of integrable functions obeyed the following rules on an interval $[a, b]$ . 

a. $\mathrm{av}(f + g) = \mathrm{av}(f) + \mathrm{av}(g)$ 

b. $\operatorname{av}(kf) = k\operatorname{av}(f)$ (any number k) 

$$
\mathbf {c}. \operatorname{av} (f) \leq \operatorname{av} (g) \quad \text { if } \quad f (x) \leq g (x) \quad \text { on } \quad [ a, b ].
$$

Do these rules ever hold? Give reasons for your answers. 

## 83. Upper and lower sums for increasing functions

a. Suppose the graph of a continuous function $f(x)$ rises steadily as $x$ moves from left to right across an interval $[a, b]$ . Let $P$ be a partition of $[a, b]$ into $n$ subintervals of equal length $\Delta x = (b - a) / n$ . Show by referring to the accompanying figure that the difference between the upper and lower sums for f on this partition can be represented graphically as the area of a rectangle R whose dimensions are $[f(b) - f(a)]$ by $\Delta x$ . (Hint: The difference U - L is the sum of areas of rectangles whose diagonals $Q_{0}Q_{1}, Q_{1}Q_{2}, \ldots, Q_{n-1}Q_{n}$ lie approximately along the curve. There is no overlapping when these rectangles are shifted horizontally onto R.) 

b. Suppose that instead of being equal, the lengths $\Delta x_{k}$ of the subintervals of the partition of $[a, b]$ vary in size. Show that 

$$
U - L \leq | f (b) - f (a) | \Delta x _ {\max},
$$

where $\Delta x_{max}$ is the norm of P, and that hence $\lim_{||P||\to0}(U-L)=0$ . 

![[7cc808c1b10dcd75e441165f72cc0395aa74a0aa73d6820b4ce66b03d6074801.jpg|image]]


84. Upper and lower sums for decreasing functions (Continuation of Exercise 83.) 

a. Draw a figure like the one in Exercise 83 for a continuous function $f(x)$ whose values decrease steadily as $x$ moves from left to right across the interval $[a, b]$ . Let $P$ be a partition of $[a, b]$ into subintervals of equal length. Find an expression for $U - L$ that is analogous to the one you found for $U - L$ in Exercise 83a. 

b. Suppose that instead of being equal, the lengths $\Delta x_{k}$ of the subintervals of P vary in size. Show that the inequality 

$$
U - L \leq | f (b) - f (a) | \Delta x _ {\max}
$$

of Exercise 83b still holds and hence $\lim_{||P||\to 0}(U - L) = 0$ . 

85. Use the formula 

$$
\begin{array}{r l} \sin h + \sin 2 h + \sin 3 h + \dots + \sin k h \\ = \frac {\cos (h / 2) - \cos ((k + (1 / 2)) h)}{2 \sin (h / 2)} \end{array}
$$

to find the area under the curve $y = \sin x$ from $x = 0$ to $x = \pi / 2$ in two steps: 

a. Partition the interval $[0, \pi/2]$ into $n$ subintervals of equal length and calculate the corresponding upper sum $U$ ; then 

b. Find the limit of U as $n \rightarrow \infty$ and $\Delta x = (b - a)/n \rightarrow 0$ . 

86. Suppose that $f$ is continuous and nonnegative over $[a, b]$ , as in the accompanying figure. By inserting points 

$$
x _ {1}, x _ {2}, \dots , x _ {k - 1}, x _ {k}, \dots , x _ {n - 1}
$$

as shown, divide $[a,b]$ into n subintervals of lengths $\Delta x_{1}=x_{1}-a,\Delta x_{2}=x_{2}-x_{1},\ldots,\Delta x_{n}=b-x_{n-1}$ , which need not be equal. 

a. If $m_{k} = \min\left\{f(x) \text{ for } x \text{ in the } k \text{th subinterval}\right\}$ , explain the connection between the lower sum 

$$
L = m _ {1} \Delta x _ {1} + m _ {2} \Delta x _ {2} + \dots + m _ {n} \Delta x _ {n}
$$

and the shaded regions in the first part of the figure. 

b. If $M_{k} = \max \{f(x) \text{ for } x \text{ in the kth subinterval}\}$ , explain the connection between the upper sum 

$$
U = M _ {1} \Delta x _ {1} + M _ {2} \Delta x _ {2} + \dots + M _ {n} \Delta x _ {n}
$$

and the shaded regions in the second part of the figure. 

c. Explain the connection between $U - L$ and the shaded regions along the curve in the third part of the figure. 

![[8a9295814af51de3244b6d6b7279bc5920d13968b8393af3ae057a3c933582b4.jpg|image]]


![[5396593cdf75a9dbcedeafb05fb839346c8de8a9c55b1e87914cfe0f22c281c9.jpg|image]]


![[72847003a17180a4cb4173593e6b3c58af665371abdf639b7fd9f7f58a9f1079.jpg|image]]


![[29cf9cb5a951c8e6eb4141d40758bbbe525d2680468e68125f10a0a5c3108ca4.jpg|image]]



87. We say $f$ is uniformly continuous on $[a, b]$ if, given any $\varepsilon > 0$ , there is a $\delta > 0$ such that if $x_1, x_2$ are in $[a, b]$ and $|x_1 - x_2| < \delta$ , then $|f(x_1) - f(x_2)| < \varepsilon$ . It can be shown that a continuous function on $[a, b]$ is uniformly continuous. Use this and the figure for Exercise 86 to show that if $f$ is continuous and $\varepsilon > 0$ is given, it is possible to make $U - L \leq \varepsilon \cdot (b - a)$ by making the largest of the $\Delta x_k$ 's sufficiently small.


88. If you average 48 km/h on a 240-km trip and then return over the same 240 km at the rate of 80 km/h, what is your average speed for the trip? Give reasons for your answer. 

89. Integrals of functions that are equal except at one point Suppose that $f(x)$ is a continuous function over the interval $[a, b]$ and that $g(x)$ is a function on $[a, b]$ such that $g(x) = f(x)$ except at a single point $c \in [a, b]$ . Show that $g(x)$ is also integrable over $[a, b]$ and that $\int_{a}^{b} g(x) dx = \int_{a}^{b} f(x) dx$ . (Hint: For a given $n$ , by how much can two different Riemann sums as given in Equation (1) differ?) 

## 90. Some integrable functions that are not continuous

a. The floor function $f(x) = \lfloor x \rfloor$ gives the greatest integer smaller than or equal to x (Example 5 of Section 1.1). This function is not continuous on the interval [1, 3]. Show that f is integrable on [1, 3] and that $\int_{1}^{3} \lfloor x \rfloor dx = 3$ . 

b. The function $f(x) = \left\{ \begin{array}{l} -1 \text{ if } x < 0, \\ 2 \text{ if } 0 \leq x, \end{array} \right.$ is not continuous on the interval $[-1, 1]$ . Show that $f$ is integrable on $[-1, 1]$ and that $\int_{-1}^{1} f(x) dx = 1$ . 

## COMPUTER EXPLORATIONS

If your CAS can draw rectangles associated with Riemann sums, use it to draw rectangles associated with Riemann sums that converge to the integrals in Exercises 91–96. Use n = 4, 10, 20, and 50 subintervals of equal length in each case. 

$$
\mathbf {9 1 .} \int_ {0} ^ {1} (1 - x) d x = \frac {1}{2} \quad \mathbf {9 2 .} \int_ {0} ^ {1} (x ^ {2} + 1) d x = \frac {4}{3}
$$

$$
\int_ {- \pi} ^ {\pi} \cos x d x = 0 \quad 9 3. \int_ {0} ^ {\pi / 4} \sec^ {2} x d x = 1
$$

95. $\int_{-1}^{1}|x|dx = 1$ 

96. $\int_{1}^{2}\frac{1}{x} dx$ (The integral's value is about 0.693.) 

In Exercises 97–104, use a CAS to perform the following steps: 

a. Plot the functions over the given interval. 

b. Partition the interval into n = 100, 200, and 1000 sub-intervals of equal length, and evaluate the function at the midpoint of each subinterval. 

c. Compute the average value of the function values generated in part (b). 

d. Solve the equation $f(x) = (\text{average value})$ for $x$ using the average value calculated in part (c) for the $n = 1000$ partitioning. 

$$
f (x) = \sin x
$$

$$
f (x) = \sin^ {2} x
$$

$$
\text { on } [ 0, \pi ]
$$

99. $f(x) = x\sin \frac{1}{x}$ on $\left[\frac{\pi}{4},\pi \right]$ 

100. $f(x) = x\sin^2\frac{1}{x}$ on $\left[\frac{\pi}{4},\pi \right]$ 

101. $f(x) = xe^{-x}$ on [0,1] 

102. $f(x) = e^{-x^2}$ 

103. $f(x) = \frac{\ln x}{x}$ 

on [2,5] 

104. $f(x) = \frac{1}{\sqrt{1 - x^2}}$ on $\left[0, \frac{1}{2}\right]$ 

## 5.4 The Fundamental Theorem of Calculus

## HISTORICAL BIOGRAPHY

Sir Isaac Newton 

(1642-1727) 

In his youth in England, Newton was interested in mechanical devices and their underlying theories. He even constructed lanterns and windmills that he designed. During the 1670s and 1680s, he built his reputation as a scientific genius. His contributions included the theory of universal gravitation, the laws of motion, methods of calculus, and the composition of white light. To know more, visit the companion Website. 

![[1e3d52b4d6ba801a69dc7eb8e3fbee882aa14b37c727646da19f13b5200906aa.jpg|image]]



FIGURE 5.16 The value $f(c)$ in the Mean Value Theorem is, in a sense, the average (or mean) height of $f$ on $[a, b]$ . When $f \geq 0$ , the area of the rectangle is the area under the graph of $f$ from $a$ to $b$ ,


$$
f (c) (b - a) = \int_ {a} ^ {b} f (x) d x.
$$

![[d71fd606fefa8b17bea8a4d8ab0f47e309eebbd7ce7e5089e063ea78c8727fd4.jpg|image]]



FIGURE 5.17 A discontinuous function need not assume its average value.


In this section we present the Fundamental Theorem of Calculus, which is the central theorem of integral calculus. It connects integration and differentiation, enabling us to compute integrals by using an antiderivative of the integrand function, rather than by taking limits of Riemann sums as we did in Section 5.3. Leibniz and Newton exploited this relationship and started mathematical developments that fueled the scientific revolution for the next 200 years. 

Along the way, we will present an integral version of the Mean Value Theorem, which is another important theorem of integral calculus and is used to prove the Fundamental Theorem. We also find that the net change of a function over an interval is the integral of its rate of change, as suggested by Example 2 in Section 5.1. 

## Mean Value Theorem for Definite Integrals

In the previous section we defined the average value of a continuous function over a closed interval $[a, b]$ to be the definite integral $\int_{a}^{b} f(x) \, dx$ divided by the length or width b - a of the interval. The Mean Value Theorem for Definite Integrals asserts that this average value is always taken on at least once by the function f in the interval. 

The graph in Figure 5.16 shows a positive continuous function $y = f(x)$ defined over the interval $[a, b]$ . Geometrically, the Mean Value Theorem says that there is a number c in $[a, b]$ such that the rectangle with height equal to the average value $f(c)$ of the function and base width b - a has exactly the same area as the region beneath the graph of f from a to b. 

THEOREM 3—The Mean Value Theorem for Definite Integrals
If f is continuous on $[a, b]$ , then at some point c in $[a, b]$ , 

$$
f (c) = \frac {1}{b - a} \int_ {a} ^ {b} f (x) d x.
$$

Proof If we divide all three expressions in the Max-Min Inequality (Table 5.6, Rule 6) by $(b - a)$ , we obtain 

$$
\min f \leq \frac {1}{b - a} \int_ {a} ^ {b} f (x) d x \leq \max f.
$$

Since $f$ is continuous, the Intermediate Value Theorem for Continuous Functions (Section 2.6) says that $f$ must assume every value between min $f$ and max $f$ . It must therefore assume the value $\left(1 / (b - a)\right)\int_{a}^{b}f(x)dx$ at some point $c$ in $[a,b]$ . 

The continuity of $f$ is important here. It is possible for a discontinuous function to never equal its average value (Figure 5.17). 

**EXAMPLE 1** Show that if $f$ is continuous on $[a, b]$ , $a \neq b$ , and if 

$$
\int_ {a} ^ {b} f (x) d x = 0,
$$

then $f(x) = 0$ at least once in $[a, b]$ . 

**Solution** The average value of f on $[a, b]$ is 

$$
\operatorname{av} (f) = \frac {1}{b - a} \int_ {a} ^ {b} f (x) d x = \frac {1}{b - a} \cdot 0 = 0.
$$

![[2c0e745beda92c0b63ad8d6a3d4832b1927f2d8005e22cc5620b6755277be659.jpg|image]]



FIGURE 5.18 The function $f(x) = 9x^{2} - 16x + 4$ satisfies $\int_0^2 f(x)dx = 0$ , and there are two values of $c$ in the interval [0, 2] where $f(c) = 0$ .


![[e81694b01d8eaba33b175b8fed84af8f33ed07b83d46aeda9d44f8d5029c7836.jpg|image]]



FIGURE 5.19 The function $F(x)$ defined by Equation (1) gives the area under the graph of f from a to x when f is nonnegative and x > a.


![[3825347590c010b52dd476b9b8c94510d3845082fedc1088d938497472302de3.jpg|image]]



FIGURE 5.20 In Equation (1), $F(x)$ is the area to the left of $x$ . Also, $F(x + h)$ is the area to the left of $x + h$ . The difference quotient $[F(x + h) - F(x)] / h$ is then approximately equal to $f(x)$ , the height of the rectangle shown here.


By the Mean Value Theorem for Definite Integrals, $f$ assumes this value at some point $c \in [a, b]$ . This is illustrated in Figure 5.18 for the function $f(x) = 9x^2 - 16x + 4$ on the interval [0, 2]. 

## Fundamental Theorem, Part 1

It can be very difficult to compute definite integrals by taking the limit of Riemann sums. We now develop a powerful new method for evaluating definite integrals, based on using antiderivatives. This method combines the two strands of calculus. One strand involves the idea of taking the limits of finite sums to obtain a definite integral, and the other strand contains derivatives and antiderivatives. They come together in the Fundamental Theorem of Calculus. We begin by considering how to differentiate a certain type of function that is described as an integral. 

If $f(t)$ is an integrable function over a finite interval I, then the integral from any fixed number $a \in I$ to another number $x \in I$ defines a new function F whose value at x is 

$$
F (x) = \int_ {a} ^ {x} f (t) d t.\tag{1}
$$

For example, if f is nonnegative and x lies to the right of a, then $F(x)$ is the area under the graph from a to x (Figure 5.19). The variable x is the upper limit of integration of an integral, but F is just like any other real-valued function of a real variable. For each value of the input x, there is a single numerical output, in this case the definite integral of f from a to x. 

Equation (1) gives a useful way to define new functions (as we will see in Section 7.1), but its key importance is the connection that it makes between integrals and derivatives. If f is a continuous function, then the Fundamental Theorem asserts that F is a differentiable function of x whose derivative is f itself. That is, at each x in the interval $[a, b]$ we have 

$$
F ^ {\prime} (x) = f (x).
$$

To gain some insight into why this holds, we look at the geometry behind it. 

If $f \geq 0$ on $[a, b]$ , then to compute $F'(x)$ from the definition of the derivative, we must take the limit as $h \to 0$ of the difference quotient 

$$
\frac {F (x + h) - F (x)}{h}.
$$

If h > 0, then $F(x + h)$ is the area under the graph of f from a to $x + h$ , while $F(x)$ is the area under the graph of f from a to x. Subtracting the two gives us the area under the graph of f between x and $x + h$ (see Figure 5.20). As shown in Figure 5.20, if h is small, the area under the graph of f from x to $x + h$ is approximated by the area of the rectangle whose height is $f(x)$ and whose base is the interval $[x, x + h]$ . That is, 

$$
F (x + h) - F (x) \approx h f (x).
$$

Dividing both sides by h, we see that the value of the difference quotient is very close to the value of $f(x)$ : 

$$
\frac {F (x + h) - F (x)}{h} \approx f (x).
$$

This approximation improves as h approaches 0. It is reasonable to expect that $F'(x)$ , which is the limit of this difference quotient as $h \rightarrow 0$ , equals $f(x)$ , so that 

$$
F ^ {\prime} (x) = \lim _ {h \rightarrow 0} \frac {F (x + h) - F (x)}{h} = f (x).
$$

This equation is true even if the function $f$ is not positive, and it forms the first part of the Fundamental Theorem of Calculus. 

THEOREM 4—The Fundamental Theorem of Calculus, Part 1
If f is continuous on $[a, b]$ , then $F(x) = \int_{a}^{x} f(t) dt$ is continuous on $[a, b]$ and differentiable on $(a, b)$ , and its derivative is $f(x)$ : 

$$
F ^ {\prime} (x) = \frac {d}{d x} \int_ {a} ^ {x} f (t) d t = f (x).\tag{2}
$$

Before proving Theorem 4, we look at several examples to gain an understanding of what it says. In each of these examples, notice that the independent variable x appears in either the upper or the lower limit of integration (either as part of a formula or by itself). The independent variable on which y depends in these examples is x, while t is merely a dummy variable in the integral. 

**EXAMPLE 2** Use the Fundamental Theorem to find dy/dx if 

$$
(\mathbf {a}) y = \int_ {a} ^ {x} (t ^ {3} + 1) d t
$$

$$
\textbf {(b)} y = \int_ {x} ^ {5} 3 t \sin t d t\tag{c}
$$

$$
y = \int_ {1} ^ {x ^ {2}} \cos t d t
$$

$$
y = \int_ {1 + 3 x ^ {2}} ^ {4} \frac {1}{2 + e ^ {t}} d t
$$

**Solution** We calculate the derivatives with respect to the independent variable x. 

$$
\text { (a) } \frac {d y}{d x} = \frac {d}{d x} \int_ {a} ^ {x} (t ^ {3} + 1) d t = x ^ {3} + 1
$$

$$
\text { Eq.   (2)   with } f (t) = t ^ {3} + 1
$$

$$
\begin{array}{r l} \text {(b)} \frac {d y}{d x} & = \frac {d}{d x} \int_ {x} ^ {5} 3 t \sin t d t = \frac {d}{d x} \left(- \int_ {5} ^ {x} 3 t \sin t d t\right) \\ & = - \frac {d}{d x} \int_ {5} ^ {x} 3 t \sin t d t \\ & = - 3 x \sin x \end{array} \quad \text {   Table   5.6,   Rule   1   } \quad \text {   Eq.   (2)   with   } f (t) = 3 t \sin t
$$

(c) The upper limit of integration is not $x$ but $x^2$ . This makes $y$ a composition of the two functions 

$$
y = \int_ {1} ^ {u} \cos t d t \quad \text { and } \quad u = x ^ {2}.
$$

We must therefore apply the Chain Rule to find dy/dx: 

$$
\begin{array}{r l} \frac {d y}{d x} & = \frac {d y}{d u} \cdot \frac {d u}{d x} \\ & = \left(\frac {d}{d u} \int_ {1} ^ {u} \cos t d t\right) \cdot \frac {d u}{d x} \\ & = \cos u \cdot \frac {d u}{d x} \\ & = (\cos x ^ {2}) \cdot 2 x \\ & = 2 x \cos x ^ {2} \end{array} \tag {Eq.(2)withf(t)=cost}
$$

$$
\begin{array}{r l} \text {(d)} & \frac {d}{d x} \int_ {1 + 3 x ^ {2}} ^ {4} \frac {1}{2 + e ^ {t}} d t = \frac {d}{d x} \left(- \int_ {4} ^ {1 + 3 x ^ {2}} \frac {1}{2 + e ^ {t}} d t\right) \\ & = - \frac {d}{d x} \int_ {4} ^ {1 + 3 x ^ {2}} \frac {1}{2 + e ^ {t}} d t \\ & = - \frac {1}{2 + e ^ {(1 + 3 x ^ {2})}} \frac {d}{d x} (1 + 3 x ^ {2}) \\ & = - \frac {6 x}{2 + e ^ {(1 + 3 x ^ {2})}} \end{array} \tag {Table5.6,Rule1}
$$

Proof of Theorem 4 We prove the Fundamental Theorem, Part 1, by applying the definition of the derivative directly to the function $F(x)$ , when $x$ and $x + h$ are in $(a, b)$ . This means writing out the difference quotient 

$$
\frac {F (x + h) - F (x)}{h}\tag{3}
$$

and showing that its limit as $h \to 0$ is the number $f(x)$ . Doing so, we find that 

$$
\begin{array}{l}F ^ {\prime} (x) = \lim _ {h \rightarrow 0} \frac {F (x + h) - F (x)}{h}\\= \lim _ {h \rightarrow 0} \frac {1}{h} \left[ \int_ {a} ^ {x + h} f (t) d t - \int_ {a} ^ {x} f (t) d t \right]\\= \lim _ {h \rightarrow 0} \frac {1}{h} \int_ {x} ^ {x + h} f (t) d t.\end{array}\tag {Table5.6,Rule5}
$$

According to the Mean Value Theorem for Definite Integrals, there is some point c between x and $x + h$ where $f(c)$ equals the average value of f on the interval $[x, x + h]$ . That is, there is some number c in $[x, x + h]$ such that 

$$
\frac {1}{h} \int_ {x} ^ {x + h} f (t) d t = f (c).\tag{4}
$$

As $h \rightarrow 0$ , $x + h$ approaches x, which forces c to approach x also (because c is trapped between x and $x + h$ ). Since f is continuous at x, $f(c)$ therefore approaches $f(x)$ : 

$$
\lim _ {h \to 0} f (c) = f (x).\tag{5}
$$

Hence we have shown that, for any x in $(a, b)$ , 

$$
\begin{array}{r l} F ^ {\prime} (x) & = \lim _ {h \to 0} \frac {1}{h} \int_ {x} ^ {x + h} f (t) d t \\ & = \lim _ {h \to 0} f (c) \quad \text { Eq.   (4) } \\ & = f (x), \quad \text { Eq.   (5) } \end{array}
$$

and therefore F is differentiable at x. Since differentiability implies continuity, this also shows that F is continuous on the open interval $(a, b)$ . To complete the proof, we just have to show that F is also continuous at x = a and x = b. To do this, we make a very similar argument, except that at x = a we need only consider the one-sided limit as $h \rightarrow 0^{+}$ , and similarly at x = b we need only consider $h \rightarrow 0^{-}$ . This shows that F has a one-sided derivative at x = a and at x = b, and therefore Theorem 1 in Section 3.2 implies that F is continuous at those two points. 

## Fundamental Theorem, Part 2 (The Evaluation Theorem)

We now come to the second part of the Fundamental Theorem of Calculus. This part describes how to evaluate definite integrals without having to calculate limits of Riemann sums. Instead we find and evaluate an antiderivative at the upper and lower limits of integration. 

THEOREM 4 (Continued)—The Fundamental Theorem of Calculus, Part 2

If f is continuous over $[a, b]$ and F is any antiderivative of f on $[a, b]$ , then 

$$
\int_ {a} ^ {b} f (x) d x = F (b) - F (a).
$$

Proof Part 1 of the Fundamental Theorem tells us that an antiderivative of $f$ exists, namely 

$$
G (x) = \int_ {a} ^ {x} f (t) d t.
$$

Thus, if $F$ is any antiderivative of $f$ , then $F(x) = G(x) + C$ for some constant $C$ for $a < x < b$ (by Corollary 2 of the Mean Value Theorem for Derivatives, Section 4.2). Since both $F$ and $G$ are continuous on $[a, b]$ , we see that the equality $F(x) = G(x) + C$ also holds when $x = a$ and $x = b$ by taking one-sided limits (as $x \to a^+$ and $x \to b^-$ ). 

Evaluating $F(b) - F(a)$ , we have 

$$
\begin{array}{r l} F (b) - F (a) & = [ G (b) + C ] - [ G (a) + C ] \\ & = G (b) - G (a) \\ & = \int_ {a} ^ {b} f (t) d t - \int_ {a} ^ {a} f (t) d t \\ & = \int_ {a} ^ {b} f (t) d t - 0 \\ & = \int_ {a} ^ {b} f (t) d t. \end{array}
$$

The Evaluation Theorem is important because it says that to calculate the definite integral of $f$ over an interval $[a, b]$ we need do only two things: 

1. Find an antiderivative F of f, and 

2. Calculate the number $F(b) - F(a)$ , which is equal to $\int_{a}^{b} f(x) dx$ . 

This process is much easier than computing Riemann sums and finding their limit. The power of the theorem follows from the realization that the definite integral, which is defined by a complicated process involving all of the values of the function f over $[a, b]$ , can be found by knowing the values of any antiderivative F at only the two endpoints a and b. The usual notation for the difference $F(b) - F(a)$ is 

$$
\left. F (x) \right] _ {a} ^ {b} \quad \text { or } \quad \left[ F (x) \right] _ {a} ^ {b},
$$

depending on whether F has one or more terms. 

**EXAMPLE 3** We calculate several definite integrals using the Evaluation Theorem, rather than by taking limits of Riemann sums. 

$$
\begin{array}{r l} \text {(a)} \int_ {0} ^ {\pi} \cos x d x & = \left. \sin x \right] _ {0} ^ {\pi} \\ & = \sin \pi - \sin 0 = 0 - 0 = 0 \end{array} \quad \frac {d}{d x} \sin x = \cos x
$$

$$
\begin{array}{r l} \int_ {- \pi / 4} ^ {0} \sec x \tan x d x & = \left. \sec x \right] _ {- \pi / 4} ^ {0} \\ & = \sec 0 - \sec \left(- \frac {\pi}{4}\right) = 1 - \sqrt {2} \end{array} \quad \frac {d}{d x} \sec x = \sec x \tan x\tag{b}
$$

$$
\begin{array}{r l} \int_ {1} ^ {4} \left(\frac {3}{2} \sqrt {x} - \frac {4}{x ^ {2}}\right) d x & = \left[ x ^ {3 / 2} + \frac {4}{x} \right] _ {1} ^ {4} \\ & = \left[ (4) ^ {3 / 2} + \frac {4}{4} \right] - \left[ (1) ^ {3 / 2} + \frac {4}{1} \right] \\ & = [ 8 + 1 ] - [ 5 ] = 4 \end{array} \quad \frac {d}{d x} \left(x ^ {3 / 2} + \frac {4}{x}\right) = \frac {3}{2} x ^ {1 / 2} - \frac {4}{x ^ {2}}
$$

$$
\begin{array}{r l} \int_ {1} ^ {2} \frac {1}{x} d x & = \left. \ln | x | \right| _ {1} ^ {2} \\ & = \ln 2 - \ln 1 = \ln 2 \end{array} \quad \frac {d}{d x} \ln | x | = \frac {1}{x}
$$

$$
\begin{array}{r l} \int_ {0} ^ {1} \frac {d x}{x ^ {2} + 1} & = \arctan x \Big | _ {0} ^ {1} \\ & = \arctan 1 - \arctan 0 = \frac {\pi}{4} - 0 = \frac {\pi}{4}. \end{array} \quad \frac {d}{d x} \arctan x = \frac {1}{x ^ {2} + 1}
$$

Exercise 82 offers another proof of the Evaluation Theorem, bringing together the ideas of Riemann sums, the Mean Value Theorem, and the definition of the definite integral. 

## The Integral of a Rate

We can interpret Part 2 of the Fundamental Theorem in another way. If F is any antiderivative of f, then $F' = f$ . The equation in the theorem can then be rewritten as 

$$
\int_ {a} ^ {b} F ^ {\prime} (x) d x = F (b) - F (a).
$$

Now $F'(x)$ represents the rate of change of the function $F(x)$ with respect to x, so the last equation asserts that the integral of $F'$ is just the net change in F as x changes from a to b. Formally, we have the following result. 

## THEOREM 5—The Net Change Theorem

The net change in a differentiable function $F(x)$ over an interval $a \leq x \leq b$ is the integral of its rate of change: 

$$
F (b) - F (a) = \int_ {a} ^ {b} F ^ {\prime} (x) d x.\tag{6}
$$

## **EXAMPLE 4** Here are several interpretations of the Net Change Theorem.

(a) If $c(x)$ is the cost of producing x units of a certain commodity, then $c'(x)$ is the marginal cost (Section 3.4). From Theorem 5, 

$$
\int_ {x _ {1}} ^ {x _ {2}} c ^ {\prime} (x) d x = c (x _ {2}) - c (x _ {1}),
$$

which is the cost of increasing production from $x_{1}$ units to $x_{2}$ units. 

(b) If an object with position function $s(t)$ moves along a coordinate line, its velocity is $v(t) = s'(t)$ . Theorem 5 says that 

$$
\int_ {t _ {1}} ^ {t _ {2}} v (t) d t = s \left(t _ {2}\right) - s \left(t _ {1}\right),
$$

so the integral of velocity is the displacement over the time interval $t_{1} \leq t \leq t_{2}$ . On the other hand, the integral of the speed $|v(t)|$ is the total distance traveled over the time interval. This is consistent with our discussion in Section 5.1. 

If we rearrange Equation (6) as 

$$
F (b) = F (a) + \int_ {a} ^ {b} F ^ {\prime} (x) d x,
$$

we see that the Net Change Theorem also says that the final value of a function $F(x)$ over an interval $[a, b]$ equals its initial value $F(a)$ plus its net change over the interval. So if $v(t)$ represents the velocity function of an object moving along a coordinate line, this means that the object's final position $s(t_2)$ over a time interval $t_1 \leq t \leq t_2$ is its initial position $s(t_1)$ plus its net change in position along the line (see Example 4b). 

**EXAMPLE 5** Consider again our analysis of a heavy rock blown straight up from the ground by a dynamite blast (Example 2, Section 5.1). The velocity of the rock at any time t during its motion was given as $v(t) = 49 - 9.8t \, \text{m/s}$ . 

(a) Find the displacement of the rock during the time period $0 \leq t \leq 8$ . 

(b) Find the total distance traveled during this time period. 

## **Solution**

(a) From Example 4b, the displacement is the integral 

$$
\begin{array}{r l} \int_ {0} ^ {8} v (t) d t & = \int_ {0} ^ {8} (4 9 - 9. 8 t) d t = \left[ 4 9 t - 4. 9 t ^ {2} \right] _ {0} ^ {8} \\ & = (4 9) (8) - (4. 9) (6 4) = 7 8. 4. \end{array}
$$

This means that the height of the rock is 78.4 m above the ground 8 s after the explosion, which agrees with our conclusion in Example 2, Section 5.1. 

(b) As we noted in Table 5.3, the velocity function $v(t)$ is positive over the time interval [0, 5] and negative over the interval [5, 8]. Therefore, from Example 4b, the total distance traveled is the integral 

$$
\begin{array}{r l} \int_ {0} ^ {8} | v (t) | d t & = \int_ {0} ^ {5} | v (t) | d t + \int_ {5} ^ {8} | v (t) | d t \\ & = \int_ {0} ^ {5} (4 9 - 9. 8 t) d t - \int_ {5} ^ {8} (4 9 - 9. 8 t) d t \\ & = \left[ 4 9 t - 4. 9 t ^ {2} \right] _ {0} ^ {5} - \left[ 4 9 t - 4. 9 t ^ {2} \right] _ {5} ^ {8} \\ & = [ (4 9) (5) - (4. 9) (2 5) ] - [ (4 9) (8) - (4. 9) (6 4) - ((4 9) (5) - (4. 9) (2 5)) ] \\ & = 1 2 2. 5 - (- 4 4. 1) = 1 6 6. 6 \end{array}
$$

Again, this calculation agrees with our conclusion in Example 2, Section 5.1. That is, the total distance of 166.6 m traveled by the rock during the time period $0 \leq t \leq 8$ is (i) the maximum height of 122.5 m it reached over the time interval [0, 5] plus (ii) the additional distance of 44.1 m the rock fell over the time interval [5, 8]. 

![[dea7fc65b545a38e876e0c17d20b7599dbcfe7d691ef33a201ced74ff9ec0337.jpg|image]]


![[a7992f203a217de440876bb5e45b24c151f0a40e2ccc7d634a3a1e106474bc93.jpg|image]]



FIGURE 5.21 These graphs enclose the same amount of area with the x-axis, but the definite integrals of the two functions over $[-2, 2]$ differ in sign (Example 6).


## The Relationship Between Integration and Differentiation

The conclusions of the Fundamental Theorem tell us several things. Equation (2) can be rewritten as 

$$
\frac {d}{d x} \int_ {a} ^ {x} f (t) d t = f (x),
$$

which says that if you first integrate the function f and then differentiate the result, you get the function f back again. Likewise, replacing b by x and x by t in Equation (6) gives 

$$
\int_ {a} ^ {x} F ^ {\prime} (t) d t = F (x) - F (a),
$$

so that if you first differentiate the function F and then integrate the result, you get the function F back (adjusted by an integration constant). In a sense, the processes of integration and differentiation are “inverses” of each other. The Fundamental Theorem also says that every continuous function f has an antiderivative F. It shows the importance of finding antiderivatives in order to evaluate definite integrals easily. Furthermore, it says that the differential equation $dy/dx = f(x)$ has a solution (namely, any of the functions $y = F(x) + C$ ) when f is a continuous function. 

## Total Area

Area is always a nonnegative quantity. The Riemann sum approximations contain terms such as $f(c_k) \Delta x_k$ that give the area of a rectangle when $f(c_k)$ is positive. When $f(c_k)$ is negative, then the product $f(c_k) \Delta x_k$ is the negative of the rectangle's area. When we add up such terms for a negative function, we get the negative of the area between the curve and the $x$ -axis. If we then take the absolute value, we obtain the correct positive area. 

**EXAMPLE 6** Figure 5.21 shows the graph of $f(x) = x^{2} - 4$ and its mirror image $g(x) = 4 - x^{2}$ reflected across the x-axis. For each function, compute 

(a) the definite integral over the interval $[-2, 2]$ , and 

(b) the area between the graph and the x-axis over $[-2, 2]$ . 

**Solution** 

$$
\int_ {- 2} ^ {2} f (x) d x = \left[ \frac {x ^ {3}}{3} - 4 x \right] _ {- 2} ^ {2} = \left(\frac {8}{3} - 8\right) - \left(- \frac {8}{3} + 8\right) = - \frac {3 2}{3}, \tag {a}
$$

and 

$$
\int_ {- 2} ^ {2} g (x) d x = \left[ 4 x - \frac {x ^ {3}}{3} \right] _ {- 2} ^ {2} = \frac {3 2}{3}.
$$

(b) In both cases, the area between the curve and the x-axis over $[-2, 2]$ is 32/3 square units. Although the definite integral of $f(x)$ is negative, the area is still positive. 

To compute the area of the region bounded by the graph of a function $y = f(x)$ and the x-axis when the function takes on both positive and negative values, we must be careful to break up the interval $[a, b]$ into subintervals on which the function doesn't change sign. Otherwise, we might get cancelation between positive and negative signed areas, leading to an incorrect total. The correct total area is obtained by adding the absolute value of the definite integral over each subinterval where $f(x)$ does not change sign. The term “area” will be taken to mean this total area. 

![[d279f26d48107b991f83d057b087663c2e8c2cb78d63656dec5d4a4d6969cdbc.jpg|image]]



FIGURE 5.22 The total area between $y = \sin x$ and the $x$ -axis for $0 \leq x \leq 2\pi$ is the sum of the absolute values of two integrals (Example 7).


![[287f3c7974acfced462f4dd5640376be4009c78d780015ed83edad497a13cd9b.jpg|image]]



FIGURE 5.23 The region between the curve $y = x^{3} - x^{2} - 2x$ and the x-axis (Example 8).


**EXAMPLE 7** Figure 5.22 shows the graph of the function $f(x) = \sin x$ between x = 0 and $x = 2\pi$ . Compute 

(a) the definite integral of $f(x)$ over $[0, 2\pi]$ , 

(b) the area between the graph of $f(x)$ and the x-axis over $[0, 2\pi]$ . 

## **Solution**

(a) The definite integral for $f(x) = \sin x$ is given by 

$$
\int_ {0} ^ {2 \pi} \sin x d x = - \cos x \bigg | _ {0} ^ {2 \pi} = - [ \cos 2 \pi - \cos 0 ] = - [ 1 - 1 ] = 0.
$$

The definite integral is zero because the portions of the graph above and below the x-axis make canceling contributions. 

(b) The area between the graph of $f(x)$ and the x-axis over $[0, 2\pi]$ is calculated by breaking up the domain of $\sin x$ into two pieces: the interval $[0, \pi]$ over which it is nonnegative and the interval $[\pi, 2\pi]$ over which it is nonpositive. 

$$
\int_ {0} ^ {\pi} \sin x d x = - \cos x \Big | _ {0} ^ {\pi} = - [ \cos \pi - \cos 0 ] = - [ - 1 - 1 ] = 2
$$

$$
\int_ {\pi} ^ {2 \pi} \sin x d x = - \cos x \bigg ] _ {\pi} ^ {2 \pi} = - [ \cos 2 \pi - \cos \pi ] = - [ 1 - (- 1) ] = - 2
$$

The second integral gives a negative value. The area between the graph and the axis is obtained by adding the absolute values, 

$$
\text { Area } = | 2 | + | - 2 | = 4.
$$

Summary: 

To find the area between the graph of $y = f(x)$ and the $x$ -axis over the interval $[a, b]$ : 

1. Subdivide $[a, b]$ at the zeros of f. 

2. Integrate f over each subinterval. 

3. Add the absolute values of the integrals. 

**EXAMPLE 8** Find the area of the region between the x-axis and the graph of $f(x) = x^{3} - x^{2} - 2x, -1 \leq x \leq 2$ . 

**Solution** First find the zeros of $f$ . Since 

$$
f (x) = x ^ {3} - x ^ {2} - 2 x = x \left(x ^ {2} - x - 2\right) = x (x + 1) (x - 2),
$$

the zeros are x = 0, -1, and 2 (Figure 5.23). The zeros subdivide $[-1, 2]$ into two subintervals: $[-1, 0]$ , on which $f \geq 0$ , and $[0, 2]$ , on which $f \leq 0$ . We integrate f over each subinterval and add the absolute values of the calculated integrals. 

$$
\int_ {- 1} ^ {0} \left(x ^ {3} - x ^ {2} - 2 x\right) d x = \left[ \frac {x ^ {4}}{4} - \frac {x ^ {3}}{3} - x ^ {2} \right] _ {- 1} ^ {0} = 0 - \left[ \frac {1}{4} + \frac {1}{3} - 1 \right] = \frac {5}{1 2}
$$

$$
\int_ {0} ^ {2} \left(x ^ {3} - x ^ {2} - 2 x\right) d x = \left[ \frac {x ^ {4}}{4} - \frac {x ^ {3}}{3} - x ^ {2} \right] _ {0} ^ {2} = \left[ 4 - \frac {8}{3} - 4 \right] - 0 = - \frac {8}{3}
$$

The total enclosed area is obtained by adding the absolute values of the calculated integrals. 

$$
\text { Total   enclosed   area } = \frac {5}{1 2} + \left| - \frac {8}{3} \right| = \frac {3 7}{1 2}
$$

## EXERCISES 5.4

Evaluating Integrals 

Evaluate the integrals in Exercises 1–34. 

1. $\int_{0}^{2}x(x-3)dx$ 

2. $\int_{-1}^{1}(x^2 - 2x + 3)dx$ 

3. $\int_{-2}^{2}(x + 3)^{2}dx$ 

4. $\int_{-1}^{1} x^{299} dx$ 

5. $\int_{1}^{4}\left(3x^{2} - \frac{x^{3}}{4}\right)dx$ 

6. $\int_{-2}^{3}(x^3 - 2x + 3)dx$ 

7. $\int_0^1 (x^2 +\sqrt{x})dx$ 

8. $\int_{1}^{32}x^{-6 / 5}dx$ 

9. $\int_0^{\pi /3}2\sec^2 x dx$ 

10. $\int_0^\pi (1 + \cos x)dx$ 

11. $\int_{\pi /4}^{3\pi /4}\csc \theta \cot \theta d\theta$ 

12. $\int_0^{\pi /3}4\frac{\sin u}{\cos^2u} du$ 

13. $\int_{\pi /2}^{0}\frac{1 + \cos 2t}{2} dt$ 

14. $\int_{-\pi /3}^{\pi /3}\sin^2 tdt$ 

15. $\int_0^{\pi /4}\tan^2 x dx$ 

16. $\int_0^{\pi /6}(\sec x + \tan x)^2 dx$ 

17. $\int_0^{\pi /8}\sin 2x dx$ 

18. $\int_{-\pi /3}^{-\pi /4}\left(4\sec^2 t + \frac{\pi}{t^2}\right)dt$ 

19. $\int_1^{-1}(r + 1)^2 dr$ 

20. $\int_{-\sqrt{3}}^{\sqrt{3}}(t + 1)(t^2 +4)dt$ 

21. $\int_{\sqrt{2}}^{1}\left(\frac{u^7}{2} -\frac{1}{u^5}\right)du$ 

22. $\int_{-3}^{-1}\frac{y^5 - 2y}{y^3} dy$ 

23. $\int_{1}^{\sqrt{2}}\frac{s^{2} + \sqrt{s}}{s^{2}} ds$ 

24. $\int_{1}^{8}\frac{(x^{1/3} + 1)(2 - x^{2/3})}{x^{1/3}} dx$ 

25. $\int_{\pi /6}^{\pi /2}\frac{\sin 2x}{2\sin x} dx$ 

26. $\int_0^{\pi /3}(\cos x + \sec x)^2 dx$ 

27. $\int_{-4}^{4}|x|dx$ 

28. $\int_0^\pi \frac{1}{2}\left(\cos x + |\cos x|\right)dx$ 

29. $\int_0^{\ln 2}e^{3x}dx$ 

30. $\int_{1}^{2}\left(\frac{1}{x} -e^{-x}\right)dx$ 

31. $\int_0^{1 / 2}\frac{4}{\sqrt{1 - x^2}} dx$ 

32. $\int_0^{1 / \sqrt{3}}\frac{dx}{1 + 4x^2}$ 

33. $\int_2^4 x^{\pi -1}dx$ 

34. $\int_{-1}^{0}\pi^{x - 1}dx$ 

In Exercises 35–38, guess an antiderivative for the integrand function. Validate your guess by differentiation, and then evaluate the given definite integral. (Hint: Keep the Chain Rule in mind when trying to guess an antiderivative. You will learn how to find such antiderivatives in the next section.) 

35. $\int_0^1 xe^{x^2}dx$ 

36. $\int_{1}^{2}\frac{\ln x}{x} dx$ 

37. $\int_{2}^{5}\frac{x dx}{\sqrt{1 + x^2}}$ 

38. $\int_0^{\pi /3}\sin^2 x\cos xdx$ 

## Derivatives of Integrals

Find the derivatives in Exercises 39–44.
a. by evaluating the integral and differentiating the result.
b. by differentiating the integral directly.
39. $\frac{d}{dx}\int_{0}^{\sqrt{x}}\cos t dt$ 40. $\frac{d}{dx}\int_{1}^{\sin x}3t^{2}dt$ 41. $\frac{d}{dt}\int_{0}^{t^{4}}\sqrt{u}du$ 42. $\frac{d}{d\theta}\int_{0}^{\tan\theta}\sec^{2}ydy$ 43. $\frac{d}{dx}\int_{0}^{x^{3}}e^{-t}dt$ 44. $\frac{d}{dt}\int_{0}^{\sqrt{t}}\left(x^{4}+\frac{3}{\sqrt{1-x^{2}}}\right)dx$ 

Find $dy / dx$ in Exercises 45-56. 

45. $y = \int_0^x\sqrt{1 + t^2} dt$ 

46. $y = \int_{1}^{x}\frac{1}{t} dt, x > 0$ 

47. $y = \int_{\sqrt{x}}^{0}\sin t^{2}dt$ 

48. $y = x\int_{2}^{x^{2}}\sin t^{3}dt$ 

49. $y = \int_{-1}^{x}\frac{t^2}{t^2 + 4} dt - \int_3^x\frac{t^2}{t^2 + 4} dt$ 

50. $y = \left( \int_{0}^{x} (t^{3} + 1)^{10} dt \right)^{3}$ 

51. $y = \int_0^{\sin x}\frac{dt}{\sqrt{1 - t^2}},|x| <   \frac{\pi}{2}$ 

52. $y = \int_{\tan x}^{0}\frac{dt}{1 + t^2}$ 

53. $y = \int_0^{e^{x^2}}\frac{1}{\sqrt{t}} dt$ 

54. $y = \int_{2^x}^{1}\sqrt[3]{t}dt$ 

55. $y = \int_{0}^{\arcsin x}\cos tdt$ 

56. $y = \int_{-1}^{x^{1 / \pi}}\arcsin tdt$ 

Area 

In Exercises 57–60, find the total area between the region and the x-axis. 

$$
5 7. y = - x ^ {2} - 2 x, \quad - 3 \leq x \leq 2
$$

$$
\mathbf {5 8 .} y = 3 x ^ {2} - 3, \quad - 2 \leq x \leq 2
$$

59. $y = x^{3} - 3x^{2} + 2x,\quad 0 \leq x \leq 2$ 

60. $y = x^{1/3} - x,\quad -1 \leq x \leq 8$ 

Find the areas of the shaded regions in Exercises 61–64. 


61.


![[216c4b9fcab7427f298c400031950d5c7a6e28fb5206ee6ad35d21b72e564b06.jpg|image]]



62.


![[965e36c6617e104e1420f34b384d08a274e9c73f2b02ba059619f782ddbbb8d9.jpg|image]]



63.



64.


![[d84a5fe5c40e723984732b2f96a6b00fe99310f6888cc6a1050aa8bdae8a95f1.jpg|image]]


![[dbe739b14840340f745f9dae206995f70fab7ec6747bafa5fea3defc90be2694.jpg|image]]


Initial Value Problems 

Each of the following functions solves one of the initial value problems in Exercises 65–68. Which function solves which problem? Give brief reasons for your answers. 

$$
\mathbf {a}. y = \int_ {1} ^ {x} \frac {1}{t} d t - 3
$$

$$
\mathbf {b}. y = \int_ {0} ^ {x} \sec t d t + 4
$$

$$
\mathbf {c}. y = \int_ {- 1} ^ {x} \sec t d t + 4
$$

$$
\mathbf {d}. y = \int_ {\pi} ^ {x} \frac {1}{t} d t - 3
$$

$$
\mathbf {6 5 .} \frac {d y}{d x} = \frac {1}{x}, \quad y (\pi) = - 3
$$

$$
\mathbf {6 6 .} y ^ {\prime} = \sec x, \quad y (- 1) = 4
$$

$$
6 7. y ^ {\prime} = \sec x, \quad y (0) = 4
$$

$$
\mathbf {6 8 .} y ^ {\prime} = \frac {1}{x}, \quad y (1) = - 3
$$

Express the solutions of the initial value problems in Exercises 69 and 70 in terms of integrals. 

$$
\mathbf {6 9 .} \frac {d y}{d x} = \sec x, \quad y (2) = 3 \quad \mathbf {7 0 .} \frac {d y}{d x} = \sqrt {1 + x ^ {2}}, \quad y (1) = - 2
$$

For Exercises 71 and 72, find a function f satisfying each equation. 

$$
\text { 71. } \int_ {2} ^ {x} \sqrt {f (t)} d t = x \ln x \quad \text { 72. } f (x) = e ^ {2} + \int_ {1} ^ {x} f (t) d t
$$

Theory and Examples 

73. Archimedes' area formula for parabolic arches Archimedes (287–212 B.C.), inventor, military engineer, physicist, and the greatest mathematician of classical times in the Western world, discovered that the area under a parabolic arch is two-thirds the base times the height. Sketch the parabolic arch $y = h - (4h/b^{2})x^{2}$ , $-b/2 \leq x \leq b/2$ , assuming that h and b are positive. Then use calculus to find the area of the region enclosed between the arch and the x-axis. 

74. Show that if k is a positive constant, then the area between the x-axis and one arch of the curve $y = \sin kx$ is 2/k. 

75. Cost from marginal cost The marginal cost of printing a poster when x posters have been printed is 

$$
{\frac {d c}{d x}} = {\frac {1}{2 \sqrt {x}}}
$$

dollars. Find $c(100) - c(1)$ , the cost of printing posters 2–100. 

In Exercises 76–78, guess an antiderivative and validate your guess by differentiation. (Hint: Keep the Chain Rule in mind when trying to guess an antiderivative. You will learn how to find such antiderivatives in the next section.) 

76. Revenue from marginal revenue Suppose that a company's marginal revenue from the manufacture and sale of eggbeaters is 

$$
\frac {d r}{d x} = 2 - 2 / (x + 1) ^ {2},
$$

where r is measured in thousands of dollars and x in thousands of units. How much money should the company expect from a production run of x = 3 thousand eggbeaters? To find out, integrate the marginal revenue from x = 0 to x = 3. 

77. The temperature $T(^{\circ}\mathrm{C})$ of a room at time t minutes is given by 

$$
T = 3 0 - 2 \sqrt {2 5 - t} \quad \text { for } \quad 0 \leq t \leq 2 5.
$$

a. Find the room's temperature when $t = 0$ , $t = 16$ , and $t = 25$ . 

b. Find the room's average temperature for $0 \leq t \leq 25$ . 

78. The height $H(\mathrm{m})$ of a palm tree after growing for $t$ years is given by 

$$
H = 0. 3 - \sqrt {t + 1} + 1. 5 t ^ {1 / 3} \quad \text { for } \quad 0 \leq t \leq 8.
$$

a. Find the tree's height when $t = 0$ , $t = 4$ , and $t = 8$ . 

b. Find the tree's average height for $0 \leq t \leq 8$ . 

79. Suppose that $\int_{1}^{x}f(t)dt = x^{2} - 2x + 1$ . Find $f(x)$ . 

80. Find $f(4)$ if $\int_{0}^{x}f(t)dt = x\cos\pi x$ . 

81. Find the linearization of 

$$
f (x) = 2 - \int_ {2} ^ {x + 1} \frac {9}{1 + t} d t
$$

$$
\text {   at   } x = 1.
$$

82. Find the linearization of 

$$
g (x) = 3 + \int_ {1} ^ {x ^ {2}} \sec (t - 1) d t
$$

at x = -1. 

83. Suppose that $f$ has a positive derivative for all values of $x$ and that $f(1) = 0$ . Which of the following statements must be true of the function 

$$
g (x) = \int_ {0} ^ {x} f (t) d t?
$$

Give reasons for your answers. 

a. g is a differentiable function of x. 

b. g is a continuous function of x. 

c. The graph of $g$ has a horizontal tangent line at $x = 1$ . 

d. g has a local maximum at x = 1. 

e. g has a local minimum at x = 1. 

f. The graph of g has an inflection point at x = 1. 

g. The graph of $dg / dx$ crosses the $x$ -axis at $x = 1$ . 

## 84. Another proof of the Evaluation Theorem

a. Let $a = x_{0} < x_{1} < x_{2} \cdots < x_{n} = b$ be any partition of $[a, b]$ , and let F be any antiderivative of f. Show that 

$$
F (b) - F (a) = \sum_ {i = 1} ^ {n} [ F (x _ {i}) - F (x _ {i - 1}) ].
$$

b. Apply the Mean Value Theorem to each term to show that $F(x_{i}) - F(x_{i-1}) = f(c_{i})(x_{i} - x_{i-1})$ for some $c_{i}$ in the interval $(x_{i-1}, x_{i})$ . Then show that $F(b) - F(a)$ is a Riemann sum for f on [a, b]. 

c. From part (b) and the definition of the definite integral, show that 

$$
F (b) - F (a) = \int_ {a} ^ {b} f (x) d x.
$$

85. Suppose that $f$ is the differentiable function shown in the accompanying graph and that the position at time $t$ (in s) of a particle moving along a coordinate axis is 

$$
s = \int_ {0} ^ {t} f (x) d x
$$

meters. Use the graph to answer the following questions. Give reasons for your answers. 

$$
y = f (x) \quad y = f (x)
$$

a. What is the particle's velocity at time $t = 5$ ? 

b. Is the acceleration of the particle at time $t = 5$ positive or negative? 

c. What is the particle's position at time $t = 3$ ? 

d. At what time during the first 9 seconds does s have its largest value? 

e. Approximately when is the acceleration zero? 

f. When is the particle moving toward the origin? Away from the origin? 

g. On which side of the origin does the particle lie at time t = 9? 

86. Find $\lim_{x\to \infty}\frac{1}{\sqrt{x}}\int_1^x\frac{dt}{\sqrt{t}}.$ 

## COMPUTER EXPLORATIONS

In Exercises 87–90, let $F(x) = \int_{a}^{x} f(t) dt$ for the specified function f and interval $[a, b]$ . Use a CAS to perform the following steps and answer the questions posed. 

a. Plot the functions f and F together over $[a, b]$ . 

b. Solve the equation $F'(x) = 0$ . What can you see to be true about the graphs of $f$ and $F$ at points where $F'(x) = 0$ ? Is your observation borne out by Part 1 of the Fundamental Theorem coupled with information provided by the first derivative? Explain your answer. 

c. Over what intervals (approximately) is the function $F$ increasing? Decreasing? What is true about $f$ over those intervals? 

d. Calculate the derivative $f'$ and plot it together with $F$ . What can you see to be true about the graph of $F$ at points where $f'(x) = 0$ ? Is your observation borne out by Part 1 of the Fundamental Theorem? Explain your answer. 

87. $f(x) = x^{3} - 4x^{2} + 3x,\quad [0,4]$ 

$$
\mathbf {8 8 .} f (x) = 2 x ^ {4} - 1 7 x ^ {3} + 4 6 x ^ {2} - 4 3 x + 1 2, \quad \left[ 0, \frac {9}{2} \right]
$$

89. $f(x) = \sin 2x\cos \frac{x}{3},[0,2\pi ]$ 

$$
\mathbf {9 0 .} f (x) = x \cos \pi x, [ 0, 2 \pi ]
$$

In Exercises 91–94, let $F(x) = \int_{a}^{u(x)} f(t) dt$ for the specified $a, u$ , and $f$ . Use a CAS to perform the following steps and answer the questions posed. 

a. Find the domain of $F$ . 

b. Calculate $F'(x)$ and determine its zeros. For what points in its domain is F increasing? Decreasing? 

c. Calculate $F''(x)$ and determine its zero. Identify the local extrema and the points of inflection of $F$ . 

d. Using the information from parts (a)-(c), draw a rough handsketch of $y = F(x)$ over its domain. Then graph $F(x)$ on your CAS to support your sketch. 

$$
\mathbf {9 1 .} a = 1, \quad u (x) = x ^ {2}, \quad f (x) = \sqrt {1 - x ^ {2}}
$$

$$
9 2. a = 0, \quad u (x) = x ^ {2}, \quad f (x) = \sqrt {1 - x ^ {2}}
$$

$$
9 3. a = 0, \quad u (x) = 1 - x, \quad f (x) = x ^ {2} - 2 x - 3
$$

$$
\mathbf {9 4 .} a = 0, \quad u (x) = 1 - x ^ {2}, \quad f (x) = x ^ {2} - 2 x - 3
$$

In Exercises 95 and 96, assume that $f$ is continuous and $u(x)$ is twice-differentiable. 

95. Calculate $\frac{d}{dx}\int_{a}^{u(x)}f(t)dt$ and check your answer using a CAS. 

96. Calculate $\frac{d^2}{dx^2}\int_a^{u(x)}f(t)dt$ and check your answer using a CAS. 

## 5.5 Indefinite Integrals and the Substitution Method

The Fundamental Theorem of Calculus says that a definite integral of a continuous function can be computed directly if we can find an antiderivative of the function. In Section 4.8 we defined the indefinite integral of the function $f$ with respect to $x$ as the set of all antiderivatives of $f$ , symbolized by $\int f(x) dx$ . Since any two antiderivatives of $f$ differ by a constant, the indefinite integral $\int$ notation means that for any antiderivative $F$ of $f$ , 

$$
\int f (x) d x = F (x) + C,
$$

where C is any arbitrary constant. The connection between antiderivatives and the definite integral stated in the Fundamental Theorem now explains this notation: 

$$
\begin{array}{r l} \int_ {a} ^ {b} f (x) d x & = F (b) - F (a) = [ F (b) + C ] - [ F (a) + C ] \\ & = \left[ F (x) + C \right] _ {a} ^ {b} = \left[ \int f (x) d x \right] _ {a} ^ {b}. \end{array}
$$

When finding the indefinite integral of a function f, remember that it always includes an arbitrary constant C. 

We must keep in mind the difference between definite and indefinite integrals. A definite integral $\int_{a}^{b}f(x)dx$ is a number. An indefinite integral $\int f(x)dx$ is a function plus an arbitrary constant C. 

So far, we have only been able to find antiderivatives of functions that are clearly recognizable as derivatives. In this section we begin to develop more general techniques for finding antiderivatives of functions. 

## Substitution: Running the Chain Rule Backwards

If $u$ is a differentiable function of $x$ , and $n$ is any number different from -1, the Chain Rule tells us that 

$$
\frac {d}{d x} \left(\frac {u ^ {n + 1}}{n + 1}\right) = u ^ {n} \frac {d u}{d x}.
$$

From another point of view, this same equation says that $u^{n+1}/(n+1)$ is one of the antiderivatives of the function $u^{n}(du/dx)$ . Therefore, 

$$
\int u ^ {n} \frac {d u}{d x} d x = \frac {u ^ {n + 1}}{n + 1} + C.\tag{1}
$$

The integral in Equation (1) is equal to the simpler integral 

$$
\int u ^ {n} d u = \frac {u ^ {n + 1}}{n + 1} + C,
$$

which suggests that we can substitute the simpler expression du for $(du/dx)$ dx when computing an integral. Leibniz, one of the founders of calculus, had the insight that indeed this substitution could be done, leading to the substitution method for computing integrals. As with differentials, when computing integrals we have 

$$
d u = \frac {d u}{d x} d x.
$$

**EXAMPLE 1** Find the integral $\int (x^3 + x)^5 (3x^2 + 1) dx$ . 

**Solution** We set $u = x^{3} + x$ . Then 

$$
d u = \frac {d u}{d x} d x = (3 x ^ {2} + 1) d x,
$$

so that by substitution we have 

$$
\begin{array}{l l} \int (x ^ {3} + x) ^ {5} (3 x ^ {2} + 1) d x = \int u ^ {5} d u & \text { Let } u = x ^ {3} + x, d u = (3 x ^ {2} + 1) d x. \\ = \frac {u ^ {6}}{6} + C & \text { Integrate   with   respect   to } u. \\ = \frac {(x ^ {3} + x) ^ {6}}{6} + C & \text { Substitute } x ^ {3} + x \text { for } u. \end{array}
$$

$$
\text {   **EXAMPLE   2**   } \quad \text {   Find   } \int \sqrt {2 x + 1} d x.
$$

**Solution** The integral does not fit the formula 

$$
\int u ^ {n} d u,
$$

with $u = 2x + 1$ and $n = 1/2$ , because 

$$
d u = \frac {d u}{d x} d x = 2 d x,
$$

which is not precisely dx. The constant factor 2 is missing from the integral. However, we can introduce this factor after the integral sign if we compensate for it by introducing a factor of 1/2 in front of the integral sign. So we write 

$$
\begin{array}{l l} \int \sqrt {2 x + 1} d x = \frac {1}{2} \int \sqrt {\underbrace {2 x + 1} _ {u}} \cdot \underbrace {2 d x} _ {d u} \\ = \frac {1}{2} \int u ^ {1 / 2} d u & \text { Let } u = 2 x + 1, d u = 2 d x. \\ = \frac {1}{2} \frac {u ^ {3 / 2}}{3 / 2} + C & \text { Integrate   with   respect   to } u. \\ = \frac {1}{3} (2 x + 1) ^ {3 / 2} + C. & \text { Substitute } 2 x + 1 \text { for } u. \end{array}
$$

The substitutions in Examples 1 and 2 are instances of the following general rule. 

## THEOREM 6—The Substitution Rule

If $u = g(x)$ is a differentiable function whose range is an interval I, and f is continuous on I, then 

$$
\int f (g (x)) \cdot g ^ {\prime} (x) d x = \int f (u) d u.
$$

Proof By the Chain Rule, $F(g(x))$ is an antiderivative of $f(g(x)) \cdot g'(x)$ whenever $F$ is an antiderivative of $f$ , because 

$$
\begin{array}{r l} \frac {d}{d x} F (g (x)) & = F ^ {\prime} (g (x)) \cdot g ^ {\prime} (x) \quad \text { Chain   Rule } \\ & = f (g (x)) \cdot g ^ {\prime} (x). \quad F ^ {\prime} = f \end{array}
$$

If we make the substitution $u = g(x)$ , then 

$$
\begin{array}{l l} \int f (g (x)) g ^ {\prime} (x) d x = \int \frac {d}{d x} F (g (x)) d x \\ = F (g (x)) + C & \text { Theorem   8   in   Chapter   4 } \\ = F (u) + C & u = g (x) \\ = \int F ^ {\prime} (u) d u & \text { Theorem   8   in   Chapter   4 } \\ = \int f (u) d u. & F ^ {\prime} = f \end{array}
$$

The use of the variable u in the Substitution Rule is traditional (sometimes it is referred to as u-substitution), but any letter can be used, such as v, t, $\theta$ and so forth. The rule provides a method for evaluating an integral of the form $\int f(g(x))g'(x)dx$ , given that the conditions of Theorem 6 are satisfied. The primary challenge is deciding what expression involving x to substitute for in the integrand. The following examples give helpful ideas. 

The Substitution Method to evaluate $\int f(g(x))g'(x)dx$ 

1. Substitute $u = g(x)$ and $du = (du / dx)dx = g'(x)dx$ to obtain $\int f(u)du$ . 

2. Integrate with respect to u. 

3. Replace u by $g(x)$ . 

**EXAMPLE 3** Find $\int \sec^2 (5x + 1)\cdot 5dx.$ 

**Solution** We substitute $u = 5x + 1$ and du = 5 dx. Then 

$$
\begin{array}{l l} \int \sec^ {2} (5 x + 1) \cdot 5 d x = \int \sec^ {2} u d u & \text { Let } u = 5 x + 1, d u = 5 d x. \\ = \tan u + C & \frac {d}{d u} \tan u = \sec^ {2} u \\ = \tan (5 x + 1) + C. & \text { Substitute } 5 x + 1 \text { for } u. \end{array}
$$

**EXAMPLE 4** Find $\int \cos (7\theta + 3) d\theta$ . 

**Solution** We let $u = 7\theta + 3$ so that du = 7 d $\theta$ . There is a factor of 7 in this formula for du, but there is no corresponding 7 preceding d $\theta$ in the integral. We can compensate for this by multiplying and dividing by 7, using the same procedure as in Example 2. Then 

$$
\begin{array}{l l} \int \cos (7 \theta + 3) d \theta = \frac {1}{7} \int \cos (7 \theta + 3) \cdot 7 d \theta & \text { Place   factor } 1 / 7 \text { in   front   of   integral. } \\ = \frac {1}{7} \int \cos u d u & \text { Substitute } u = 7 \theta + 3, d u = 7 d \theta . \\ = \frac {1}{7} \sin u + C & \text { Integrate. } \\ = \frac {1}{7} \sin (7 \theta + 3) + C. & \text { Replace } u \text { by } 7 \theta + 3. \end{array}
$$

There is another approach to this problem. With $u = 7\theta + 3$ and du = 7 d $\theta$ as before, we solve for $d\theta$ to obtain $d\theta = (1/7)du$ . Then the integral becomes 

## HISTORICAL BIOGRAPHY

Birkhoff attended Harvard and the University of Chicago. He received his PhD from Chicago in 1907 for his dissertation on differential equations. He also worked on the four-color problem (colors required to produce a map) and applying mathematics to aesthetics in art, poetry, and music. 

To know more, visit the companion Website. 

$$
\begin{array}{l l} \int \cos (7 \theta + 3) d \theta = \int \cos u \cdot \frac {1}{7} d u & \text {   Substitute   } u = 7 \theta + 3, d u = 7 d \theta , \\ & \text {   and   } d \theta = (1 / 7) d u. \\ = \frac {1}{7} \sin u + C & \text {   Integrate.   } \\ = \frac {1}{7} \sin (7 \theta + 3) + C. & \text {   Replace   } u \text {   by   } 7 \theta + 3. \end{array}
$$

We can verify this solution by differentiating and checking that we obtain the original function $\cos(7\theta + 3)$ . 

**EXAMPLE 5** Sometimes we observe that a power of x appears in the integrand that is one less than the power of x appearing in the argument of a function we want to integrate. This observation immediately suggests we try a substitution for the higher power of x. For example, in the integral below we see that $x^{3}$ appears as the exponent of one factor, and this factor is multiplied by $x^{2}$ . This suggests trying the substitution $u = x^{3}$ . 

$$
\begin{array}{l l} \int x ^ {2} e ^ {x ^ {3}} d x = \int e ^ {x ^ {3}} \cdot x ^ {2} d x \\ = \int e ^ {u} \cdot \frac {1}{3} d u & \text { Substitute } u = x ^ {3}, d u = 3 x ^ {2} d x, \\ = \frac {1}{3} \int e ^ {u} d u \\ = \frac {1}{3} e ^ {u} + C & \text { Integrate   with   respect   to } u. \\ = \frac {1}{3} e ^ {x ^ {3}} + C & \text { Replace } u \text { by } x ^ {3}. \end{array}
$$

It may happen that an extra factor of x appears in the integrand when we try a substitution $u = g(x)$ . In that case, it may be possible to solve the equation $u = g(x)$ for x in terms of u. Replacing the extra factor of x with that expression may then result in an integral that we can evaluate. Here is an example of this situation. 

$$
\text {   **EXAMPLE   6**   } \quad \text {   Evaluate   } \int x \sqrt {2 x + 1} d x.
$$

**Solution** Our previous experience with the integral in Example 2 suggests the substitution $u = 2x + 1$ with du = 2 dx. Then 

$$
\sqrt {2 x + 1} d x = \frac {1}{2} \sqrt {u} d u.
$$

However, in this example the integrand contains an extra factor of x that multiplies the factor $\sqrt{2x+1}$ . To adjust for this, we solve the substitution equation $u = 2x + 1$ for x to obtain $x = (u - 1)/2$ and find that 

$$
x \sqrt {2 x + 1} d x = \frac {1}{2} (u - 1) \cdot \frac {1}{2} \sqrt {u} d u.
$$

The integration now becomes 

$$
\begin{array}{l l} \int x \sqrt {2 x + 1} d x = \frac {1}{4} \int (u - 1) \sqrt {u} d u = \frac {1}{4} \int (u - 1) u ^ {1 / 2} d u & \text {Substitute.} \\ = \frac {1}{4} \int (u ^ {3 / 2} - u ^ {1 / 2}) d u & \text {Multiply terms by u^{1 / 2}}. \\ = \frac {1}{4} \left(\frac {2}{5} u ^ {5 / 2} - \frac {2}{3} u ^ {3 / 2}\right) + C & \text {Integrate.} \\ = \frac {1}{1 0} (2 x + 1) ^ {5 / 2} - \frac {1}{6} (2 x + 1) ^ {3 / 2} + C. & \text {Replace u by 2x + 1 .} \end{array}
$$

**EXAMPLE 7** Sometimes we can use trigonometric identities to transform an integral we do not know how to evaluate into one that we can evaluate using the Substitution Rule. 

$$
\begin{array}{r l} \int \sin^ {2} x d x & = \int \frac {1 - \cos 2 x}{2} d x \\ & = \frac {1}{2} \int (1 - \cos 2 x) d x \\ & = \frac {1}{2} x - \frac {1}{2} \frac {\sin 2 x}{2} + C = \frac {x}{2} - \frac {\sin 2 x}{4} + C \end{array} \quad \sin^ {2} x = \frac {1 - \cos 2 x}{2}
$$

$$
\int \cos^ {2} x d x = \int \frac {1 + \cos 2 x}{2} d x = \frac {x}{2} + \frac {\sin 2 x}{4} + C \quad \cos^ {2} x = \frac {1 + \cos 2 x}{2}
$$

$$
\begin{array}{r l} \int \tan x d u & = \int \frac {\sin x}{\cos x} d x = \int \frac {- d u}{u} \\ & = - \ln | u | + C = - \ln | \cos x | + C \\ & = \ln \frac {1}{| \cos x |} + C = \ln | \sec x | + C \end{array} \quad \text {   Reciprocal   Rule   } u = \cos x, d u = - \sin x d x
$$

**EXAMPLE 8** An integrand may require some algebraic manipulation before the substitution method can be applied. This example gives two integrals for which we simplify by multiplying the integrand by an algebraic form equal to 1 before attempting a substitution. 

$$
\begin{array}{l l} \text {(a)} \int \frac {d x}{e ^ {x} + e ^ {- x}} = \int \frac {e ^ {x} d x}{e ^ {2 x} + 1} & \text {Multiply by (e^{x}/e^{x}) = 1}. \\ = \int \frac {d u}{u ^ {2} + 1} & \text {Substitute u = e^{x}, u^{2} = e^{2x},} \\ = \arctan u + C & \text {Integrate with respect to u.} \\ = \arctan (e ^ {x}) + C & \text {Replace u by e^{x}}. \\ \text {(b)} \int \sec x d x = \int (\sec x) (1) d x \\ = \int \sec x \cdot \frac {\sec x + \tan x}{\sec x + \tan x} d x & \frac {\sec x + \tan x}{\sec x + \tan x} \text {is equal to 1.} \\ = \int \frac {\sec^ {2} x + \sec x \tan x}{\sec x + \tan x} d x \\ = \int \frac {d u}{u} & u = \tan x + \sec x, \\ = \ln | u | + C = \ln | \sec x + \tan x | + C. & d u = (\sec^ {2} x + \sec x \tan x) d x. \end{array}
$$

The integrals of $\cot x$ and $\csc x$ are computed in a way similar to the integrals of $\tan x$ and $\sec x$ in Examples 7c and 8b (see Exercises 71 and 72). We summarize the results for these four basic trigonometric integrals here. 

Integrals of the tangent, cotangent, secant, and cosecant functions 

$$
\begin{array}{l l} \int \tan x d x = \ln | \sec x | + C & \int \sec x d x = \ln | \sec x + \tan x | + C \\ \int \cot x d x = \ln | \sin x | + C & \int \csc x d x = - \ln | \csc x + \cot x | + C \end{array}
$$

## Trying Different Substitutions

The success of the substitution method depends on finding a substitution that changes an integral we cannot directly evaluate into one that we can. Finding the right substitution gets easier with practice and experience. If your first substitution fails, try another substitution, possibly coupled with other algebraic or trigonometric simplifications to the integrand. Several more complicated types of substitutions will be studied in Chapter 8. 

$$
\text { **EXAMPLE   9** } \quad \text { Evaluate } \int \frac {2 z d z}{\sqrt [ 3 ]{z ^ {2} + 1}}.
$$

**Solution** We use the substitution method of integration as an exploratory tool. First we substitute for the most troublesome part of the integrand and see how things work out. For the integral here, we might try $u = z^{2} + 1$ , or we might even press our luck and take u to be the entire cube root. In this example both substitutions turn out to be successful, but that is not always the case. If one substitution does not help, a different substitution may work instead. 

Method 1: Substitute $u = z^{2} + 1$ . 

$$
\begin{array}{l l} \int \frac {2 z d z}{\sqrt [ 3 ]{z ^ {2} + 1}} = \int \frac {d u}{u ^ {1 / 3}} & \text { Let } u = z ^ {2} + 1, d u = 2 z d z. \\ = \int u ^ {- 1 / 3} d u & \text { In   the   form } \int u ^ {n} d u \\ = \frac {u ^ {2 / 3}}{2 / 3} + C & \text { Integrate. } \\ = \frac {3}{2} u ^ {2 / 3} + C & \\ = \frac {3}{2} (z ^ {2} + 1) ^ {2 / 3} + C & \text { Replace } u \text { by } z ^ {2} + 1. \end{array}
$$

Method 2: Substitute $u = \sqrt[3]{z^{2} + 1}$ instead. 

$$
\begin{array}{l l} \int \frac {2 z d z}{\sqrt [ 3 ]{z ^ {2} + 1}} = \int \frac {3 u ^ {2} d u}{u} & \text { Let } u = \sqrt [ 3 ]{z ^ {2} + 1}, \\ & u ^ {2} = z ^ {2} + 1, 3 u ^ {2} d u = 2 z d z. \\ = 3 \int u d u \\ = 3 \cdot \frac {u ^ {2}}{2} + C & \text { Integrate }. \\ = \frac {3}{2} (z ^ {2} + 1) ^ {2 / 3} + C & \text { Replace } u \text { by } (z ^ {2} + 1) ^ {1 / 3}. \end{array}
$$

## EXERCISES 5.5

## Evaluating Indefinite Integrals

In Exercises 1–16, make the given substitutions to evaluate the indefinite integrals. 

1. $\int 2(2x + 4)^5 dx, u = 2x + 4$ 

2. $\int 7\sqrt{7x - 1} dx, u = 7x - 1$ 

3. $\int 2x(x^2 + 5)^{-4} dx, u = x^2 + 5$ 

4. $\int \frac{4x^3}{(x^4 + 1)^2} dx, u = x^4 + 1$ 

27. $\int r^2\left(\frac{r^3}{18} - 1\right)^5 dr$ 

29. $\int x^{1 / 2}\sin (x^{3 / 2} + 1)dx$ 

5. $\int (3x + 2)(3x^2 +4x)^4 dx,\quad u = 3x^2 +4x$ 

30. $\int \csc \left(\frac{v - \pi}{2}\right)\cot \left(\frac{v - \pi}{2}\right)d\nu$ 

25. $\int \sin^5\frac{x}{3}\cos \frac{x}{3} dx$ 

31. $\int \frac{\sin(2t + 1)}{\cos^2(2t + 1)} dt$ 

23. $\int \sec^2 (3x + 2)dx$ 

6. $\int \frac{(1 + \sqrt{x})^{1 / 3}}{\sqrt{x}} dx, u = 1 + \sqrt{x}$ 

$$
\int \frac {1}{t ^ {2}} \cos \left(\frac {1}{t} - 1\right) d t
$$

7. $\int \sin 3x dx, u = 3x$ 

32. $\int \frac{\sec z \tan z}{\sqrt{\sec z}} dz$ 

35. $\int \frac{1}{\theta^2}\sin \frac{1}{\theta}\cos \frac{1}{\theta} d\theta$ 

34. $\int \frac{1}{\sqrt{t}}\cos (\sqrt{t} +3)dt$ 

8. $\int x\sin (2x^{2})dx,\quad u = 2x^{2}$ 

37. $\int \frac{x}{\sqrt{1 + x}} dx$ 

36. $\int \frac{\cos\sqrt{\theta}}{\sqrt{\theta}\sin^2\sqrt{\theta}} d\theta$ 

9. $\int \sec 2t\tan 2tdt,u = 2t$ 

28. $\int r^4\left(7 - \frac{r^5}{10}\right)^3 dr$ 

39. $\int \frac{1}{x^2}\sqrt{2 - \frac{1}{x}} dx$ 

38. $\int \sqrt{\frac{x - 1}{x^5}} dx$ 

26. $\int \tan^7\frac{x}{2}\sec^2\frac{x}{2} dx$ 

40. $\int \frac{1}{x^3}\sqrt{\frac{x^2 - 1}{x^2}} dx$ 

10. $\int \left(1 - \cos \frac{t}{2}\right)^2\sin \frac{t}{2} dt,\quad u = 1 - \cos \frac{t}{2}$ 

41. $\int \sqrt{\frac{x^3 - 3}{x^{11}}} dx$ 

24. $\int \tan^2 x\sec^2 xdx$ 

43. $\int x(x - 1)^{10}dx$ 

42. $\int \sqrt{\frac{x^4}{x^3 - 1}} dx$ 

11. $\int \frac{9r^2dr}{\sqrt{1 - r^3}}, u = 1 - r^3$ 

44. $\int x\sqrt{4 - x} dx$ 

12. $\int 12(y^4 + 4y^2 + 1)^2 (y^3 + 2y)dy,\quad u = y^4 + 4y^2 + 1$ 

45. $\int (x + 1)^2 (1 - x)^5 dx$ 

46. $\int (x + 5)(x - 5)^{1 / 3}dx$ 

13. $\int \sqrt{x}\sin^2 (x^{3 / 2} - 1)dx,\quad u = x^{3 / 2} - 1$ 

48. $\int 3x^{5}\sqrt{x^{3} + 1} dx$ 

14. $\int \frac{1}{x^2}\cos^2\left(\frac{1}{x}\right)dx,\quad u = \frac{1}{x}$ 

47. $\int x^{3}\sqrt{x^{2} + 1} dx$ 

50. $\int \frac{x}{(2x - 1)^{2 / 3}} dx$ 

15. $\int \csc^2 2\theta \cot 2\theta d\theta$ a. Using $u = \cot 2\theta$ b. Using $u = \csc 2\theta$ 

49. $\int \frac{x}{(x^2 - 4)^3} dx$ 

52. $\int (\sin 2\theta)e^{\sin^2\theta}d\theta$ 

16. $\int \frac{dx}{\sqrt{5x + 8}}$ a. Using $u = 5x + 8$ b. Using $u = \sqrt{5x + 8}$ 

51. $\int (\cos x)e^{\sin x}dx$ 

54. $\int \frac{1}{x^2} e^{1 / x}\sec (1 + e^{1 / x})\tan (1 + e^{1 / x})dx$ 

Evaluate the integrals in Exercises 17–66. 

53. $\int \frac{1}{\sqrt{x}e^{-\sqrt{x}}}\sec^2 (e^{\sqrt{x}} + 1)dx$ 

17. $\int \sqrt{3 - 2s} ds$ 

18. $\int \frac{1}{\sqrt{5s + 4}} ds$ 

19. $\int \theta^4\sqrt{1 - \theta^2} d\theta$ 

20. $\int 3y\sqrt{7 - 3y^2} dy$ 

22. $\int \sqrt{\sin x} \cos^3 x dx$ 

56. $\int \frac{\ln\sqrt{t}}{t} dt$ 

21. $\int \frac{1}{\sqrt{x} (1 + \sqrt{x})^2} dx$ 

55. $\int \frac{dx}{x\ln x}$ 

58. $\int \frac{dx}{x\sqrt{x^4 - 1}}$ 

57. $\int \frac{dz}{1 + e^z}$ 

59. $\int \frac{5}{9 + 4r^2} dr$ 

60. $\int \frac{1}{\sqrt{e^{2\theta} - 1}} d\theta$ 

61. $\int \frac{e^{\arcsin x}dx}{\sqrt{1 - x^2}}$ 

62. $\int \frac{e^{\arccos x}dx}{\sqrt{1 - x^2}}$ 

63. $\int \frac{(\arcsin x)^2 dx}{\sqrt{1 - x^2}}$ 

64. $\int \frac{\sqrt{\arctan x} dx}{1 + x^2}$ 

65. $\int \frac{dy}{(\arctan y)(1 + y^2)}$ 

66. $\int \frac{dy}{(\arcsin y)\sqrt{1 - y^2}}$ 

If you do not know what substitution to make, try reducing the integral step by step, using a trial substitution to simplify the integral a bit and then another to simplify it some more. You will see what we mean if you try the sequences of substitutions in Exercises 67 and 68. 

67. $\int \frac{18\tan^2x\sec^2x}{(2 + \tan^3x)^2} dx$ 

a. $u = \tan x$ , followed by $v = u^{3}$ , then by $w = 2 + v$ 

b. $u = \tan^3 x$ , followed by $v = 2 + u$ 

c. $u = 2 + \tan^{3} x$ 

68. $\int \sqrt{1 + \sin^2(x - 1)}\sin (x - 1)\cos (x - 1)dx$ 

a. u = x - 1, followed by $v = \sin u$ , then by $w = 1 + v^{2}$ 

b. $u = \sin(x - 1)$ , followed by $v = 1 + u^{2}$ 

c. $u = 1 + \sin^{2}(x - 1)$ 

Evaluate the integrals in Exercises 69 and 70. 

69. $\int \frac{(2r - 1)\cos\sqrt{3(2r - 1)^2 + 6}}{\sqrt{3(2r - 1)^2 + 6}} dr$ 

70. $\int \frac{\sin\sqrt{\theta}}{\sqrt{\theta\cos^3\sqrt{\theta}}} d\theta$ 

71. Find the integral of $\cot x$ using a substitution like that in Example 7c. 

72. Find the integral of $\csc x$ by multiplying by an appropriate form equal to 1, as in Example 8b. 

Initial Value Problems 

Solve the initial value problems in Exercises 73–78. 

73. $\frac{ds}{dt} = 12t(3t^2 - 1)^3$ , $s(1) = 3$ 

74. $\frac{dy}{dx} = 4x(x^2 + 8)^{-1/3}$ , $y(0) = 0$ 

75. $\frac{ds}{dt} = 8\sin^2\left(t + \frac{\pi}{12}\right), s(0) = 8$ 

76. $\frac{dr}{d\theta} = 3\cos^2\left(\frac{\pi}{4} -\theta\right),r(0) = \frac{\pi}{8}$ 

77. $\frac{d^2s}{dt^2} = -4\sin \left(2t - \frac{\pi}{2}\right), s'(0) = 100, s(0) = 0$ 

78. $\frac{d^2y}{dx^2} = 4\sec^2 2x\tan 2x,\quad y'(0) = 4,\quad y(0) = -1$ 

79. The velocity of a particle moving back and forth on a line is $v = ds/dt = 6 \sin 2t \, m/s$ for all t. If s = 0 when t = 0, find the value of s when $t = \pi/2 \, s$ . 

80. The acceleration of a particle moving back and forth on a line is $a = d^{2}s/dt^{2} = \pi^{2} \cos \pi t \, m/s^{2}$ for all t. If s = 0 and v = 8 m/s when t = 0, find s when t = 1 s. 

## 5.6 Definite Integral Substitutions and the Area Between Curves

There are two methods for evaluating a definite integral by substitution. One method is to find an antiderivative using substitution and then to evaluate the definite integral by applying the Evaluation Theorem. The other method extends the process of substitution directly to definite integrals by changing the limits of integration. We will use these methods to compute the area between two curves. 

## The Substitution Formula

The following formula shows how the limits of integration change when we apply a substitution to an integral. 

## THEOREM 7—Substitution in Definite Integrals

If $g'$ is continuous on the interval $[a, b]$ and $f$ is continuous on the range of $g(x) = u$ , then 

$$
\int_ {a} ^ {b} f (g (x)) \cdot g ^ {\prime} (x) d x = \int_ {g (a)} ^ {g (b)} f (u) d u.
$$

Proof Let F denote any antiderivative of f. Then 

$$
\begin{array}{r l} \int_ {a} ^ {b} f (g (x)) \cdot g ^ {\prime} (x) d x & = F (g (x)) \Big | _ {x = a} ^ {x = b} \\ & = F (g (b)) - F (g (a)) \\ & = F (u) \Big | _ {u = g (a)} ^ {u = g (b)} \\ & = \int_ {g (a)} ^ {g (b)} f (u) d u. \end{array} \quad \begin{array}{r l} \frac {d}{d x} F (g (x)) & = F ^ {\prime} (g (x)) g ^ {\prime} (x) \\ & = f (g (x)) g ^ {\prime} (x) \end{array}
$$

To use Theorem 7, we make the same u-substitution $u = g(x)$ and $du = g'(x) dx$ that we would use to evaluate the corresponding indefinite integral. We then integrate the transformed integral with respect to u from the value $g(a)$ (the value of u at x = a) to the value $g(b)$ (the value of u at x = b). 

$$
\text { **EXAMPLE   1** } \quad \text { Evaluate } \int_ {- 1} ^ {1} 3 x ^ {2} \sqrt {x ^ {3} + 1} d x.
$$

**Solution** We will show how to evaluate the integral using Theorem 7, and how to evaluate it using the original limits of integration. 

Method 1: Transform the integral and evaluate the transformed integral with the transformed limits given in Theorem 7. 

$$
\begin{array}{l l} \int_ {- 1} ^ {1} 3 x ^ {2} \sqrt {x ^ {3} + 1} d x = \int_ {0} ^ {2} \sqrt {u} d u & \text { Let } u = x ^ {3} + 1, d u = 3 x ^ {2} d x. \\ & \text { When } x = - 1, u = (- 1) ^ {3} + 1 = 0. \\ & \text { When } x = 1, u = (1) ^ {3} + 1 = 2. \\ = \left. \frac {2}{3} u ^ {3 / 2} \right| _ {0} ^ {2} & \text { Evaluate   the   new   definite   integral. } \\ = \frac {2}{3} [ 2 ^ {3 / 2} - 0 ^ {3 / 2} ] = \frac {2}{3} [ 2 \sqrt {2} ] = \frac {4 \sqrt {2}}{3} \end{array}
$$

Method 2: Transform the integral as an indefinite integral, integrate, change back to x, and use the original x-limits. 

$$
\begin{array}{l l} \int 3 x ^ {2} \sqrt {x ^ {3} + 1} d x = \int \sqrt {u} d u & \text { Let } u = x ^ {3} + 1, d u = 3 x ^ {2} d x. \\ = \frac {2}{3} u ^ {3 / 2} + C & \text { Integrate   with   respect   to } u. \\ = \frac {2}{3} (x ^ {3} + 1) ^ {3 / 2} + C & \text { Replace } u \text { by } x ^ {3} + 1. \end{array}
$$

$$
\begin{array}{l} \int_ {- 1} ^ {1} 3 x ^ {2} \sqrt {x ^ {3} + 1} d x = \frac {2}{3} (x ^ {3} + 1) ^ {3 / 2} \bigg ] _ {- 1} ^ {1} \quad \text { Use   the   integral   just   found,   with } \\ \qquad \qquad \qquad \qquad \qquad \text { limits   of   integration   for } x. \\ \qquad \qquad \qquad = \frac {2}{3} \bigg [ ((1) ^ {3} + 1) ^ {3 / 2} - ((- 1) ^ {3} + 1) ^ {3 / 2} \bigg ] \\ \qquad \qquad \qquad = \frac {2}{3} \bigg [ 2 ^ {3 / 2} - 0 ^ {3 / 2} \bigg ] = \frac {2}{3} \bigg [ 2 \sqrt {2} \bigg ] = \frac {4 \sqrt {2}}{3} \end{array}
$$


(a)


Which method is better—evaluating the transformed definite integral with transformed limits using Theorem 7, or transforming the integral, integrating, and transforming back to use the original limits of integration? In Example 1, the first method seems easier, but that is not always the case. Generally, it is best to know both methods and to use whichever one seems better at the time. 

**EXAMPLE 2** We use the method of transforming the limits of integration. 

$$
\begin{array}{l l} \text {(a)} \int_ {\pi / 4} ^ {\pi / 2} \cot \theta \csc^ {2} \theta d \theta = \int_ {1} ^ {0} u \cdot (- d u) & \begin{array}{l} \text {Let} u = \cot \theta , d u = - \csc^ {2} \theta d \theta , \\ - d u = \csc^ {2} \theta d \theta . \\ \text {When} \theta = \pi / 4, u = \cot (\pi / 4) = 1. \\ \text {When} \theta = \pi / 2, u = \cot (\pi / 2) = 0. \end{array} \\ = - \int_ {1} ^ {0} u d u \\ = - \left[ \frac {u ^ {2}}{2} \right] _ {1} ^ {0} \\ = - \left[ \frac {(0) ^ {2}}{2} - \frac {(1) ^ {2}}{2} \right] = \frac {1}{2} \end{array}\tag{b}
$$

$$
\begin{array}{l l} \int_ {- \pi / 4} ^ {\pi / 4} \tan x   d x = \int_ {- \pi / 4} ^ {\pi / 4} \frac {\sin x}{\cos x}   d x \\ = - \int_ {\sqrt {2} / 2} ^ {\sqrt {2} / 2} \frac {d u}{u} & \text { Let } u = \cos x, d u = - \sin x   d x. \\ & \text { When } x = - \pi / 4, u = \sqrt {2} / 2. \\ & \text { When } x = \pi / 4, u = \sqrt {2} / 2. \\ = 0 & \text { Zero width interval } \end{array}
$$

## Definite Integrals of Symmetric Functions

The Substitution Formula in Theorem 7 simplifies the calculation of definite integrals of even and odd functions (Section 1.1) over a symmetric interval $[-a, a]$ (Figure 5.24). 

![[d6ddafbeae16ef2425552be9093d28e519e6452af3c3e999257dcb3cb3247f21.jpg|image]]


![[a6901fcb6f1bbad15ca25fd7ab3ff98f5173c783a6a2341dfa6d763178d565db.jpg|image]]



(b)



FIGURE 5.24 (a) For $f$ an even function, the integral from $-a$ to $a$ is twice the integral from 0 to $a$ . (b) For $f$ an odd function, the integral from $-a$ to $a$ equals 0.


THEOREM 8 Let $f$ be continuous on the symmetric interval $[-a, a]$ . 

(a) If $f$ is even, then $\int_{-a}^{a} f(x) dx = 2 \int_{0}^{a} f(x) dx$ . 

(b) If $f$ is odd, then $\int_{-a}^{a} f(x) dx = 0$ . 

![[fe04729ca24e21638e0ff0e75757f061444683e6e544ceee304b3881fb30c65c.jpg|image]]



FIGURE 5.25 The region between the curves $y = f(x)$ and $y = g(x)$ and the lines $x = a$ and $x = b$ .


![[fe3d12cd41ec989076506c2e3d97ba55239be29c5535bed748d43ba3a4373eac.jpg|image]]



FIGURE 5.26 We approximate the region with rectangles perpendicular to the x-axis.


![[34e5c3947522c6db6ee5ad5d37cc95f83407c89c057340470af0bd5d72155f79.jpg|image]]



FIGURE 5.27 The area $\Delta A_{k}$ of the kth rectangle is the product of its height, $f(c_{k}) - g(c_{k})$ , and its width, $\Delta x_{k}$ .


Proof of Part (a) 

$$
\begin{array}{l l} \int_ {- a} ^ {a} f (x) d x = \int_ {- a} ^ {0} f (x) d x + \int_ {0} ^ {a} f (x) d x & \text { Additivity   Rule   for } \\ & \text { Definite   Integrals } \\ = - \int_ {0} ^ {- a} f (x) d x + \int_ {0} ^ {a} f (x) d x & \text { Order   of   Integration   Rule } \\ = - \int_ {0} ^ {a} f (- u) (- d u) + \int_ {0} ^ {a} f (x) d x & \text { Let   } u = - x, d u = - d x. \\ & \text { When   } x = 0, u = 0. \\ & \text { When   } x = - a, u = a. \\ = \int_ {0} ^ {a} f (- u) d u + \int_ {0} ^ {a} f (x) d x \\ = \int_ {0} ^ {a} f (u) d u + \int_ {0} ^ {a} f (x) d x & \text { if   is   even,   so } \\ & f (- u) = f (u). \\ = 2 \int_ {0} ^ {a} f (x) d x \end{array}
$$

The proof of part (b) is similar, and you are asked to give it in Exercise 120. 

**EXAMPLE 3** Evaluate $\int_{-2}^{2} x^{4} - 4x^{2} + 6 dx$ . 

**Solution** Since $f(x) = x^{4} - 4x^{2} + 6$ satisfies $f(-x) = f(x)$ , it is even on the symmetric interval $[-2, 2]$ , so 

$$
\begin{array}{r l} \int_ {- 2} ^ {2} x ^ {4} - 4 x ^ {2} + 6 d x & = 2 \int_ {0} ^ {2} x ^ {4} - 4 x ^ {2} + 6 d x \\ & = 2 \left[ \frac {x ^ {5}}{5} - \frac {4}{3} x ^ {3} + 6 x \right] _ {0} ^ {2} \\ & = 2 \left(\frac {3 2}{5} - \frac {3 2}{3} + 1 2\right) = \frac {2 3 2}{1 5}. \end{array}
$$

## Areas Between Curves

Suppose we want to find the area of a region that is bounded above by the curve $y = f(x)$ , below by the curve $y = g(x)$ , and on the left and right by the lines x = a and x = b (Figure 5.25). The region might accidentally have a shape whose area we could find with geometry, but if f and g are arbitrary continuous functions, we usually have to find the area by computing an integral. 

To see what the integral should be, we first approximate the region with n vertical rectangles based on a partition $P = \{x_{0}, x_{1}, ..., x_{n}\}$ of $[a, b]$ (Figure 5.26). The area of the kth rectangle (Figure 5.27) is 

$$
\Delta A _ {k} = \text { height } \times \text { width } = [ f (c _ {k}) - g (c _ {k}) ] \Delta x _ {k}.
$$

We then approximate the area of the region by adding the areas of the n rectangles: 

$$
A \approx \sum_ {k = 1} ^ {n} \Delta A _ {k} = \sum_ {k = 1} ^ {n} \left[ f (c _ {k}) - g (c _ {k}) \right] \Delta x _ {k}. \quad \text { Riemann   sum }
$$

As $||P|| \to 0$ , the sums on the right approach the limit $\int_{a}^{b}[f(x) - g(x)] dx$ because $f$ and $g$ are continuous. The area of the region is defined to be the value of this integral. That is, 

$$
A = \lim _ {\| P \| \rightarrow 0} \sum_ {k = 1} ^ {n} \left[ f \left(c _ {k}\right) - g \left(c _ {k}\right)\right] \Delta x _ {k} = \int_ {a} ^ {b} [ f (x) - g (x) ] d x.
$$

![[46c8f980ed7b5bd259080876b985da1ebf4a3a3cfabe7cbf836a43609751e7ef.jpg|image]]



FIGURE 5.28 The region in Example 4 with a typical approximating rectangle.


![[f747064a8a35492c163fd83e9e2a4bb5ce68c4acac322b0b65909ca21a027ae4.jpg|image]]



FIGURE 5.29 The region in Example 5 with a typical approximating rectangle from a Riemann sum.


> ***DEFINITION*** If f and g are continuous with $f(x) \geq g(x)$ throughout [a, b], then the area of the region between the curves $y = f(x)$ and $y = g(x)$ from a to b is the integral of $(f - g)$ from a to b: 
>
> $$
> A = \int_ {a} ^ {b} [ f (x) - g (x) ] d x.
> $$
>
When applying this definition it is usually helpful to graph the curves. The graph reveals which curve is the upper curve f and which is the lower curve g. It also helps you find the limits of integration if they are not given. You may need to find where the curves intersect to determine the limits of integration, and this may involve solving the equation $f(x) = g(x)$ for values of x. Then you can integrate the function f - g for the area between the intersections. 

**EXAMPLE 4** Find the area of the region bounded above by the curve $y = 2e^{-x} + x$ , below by the curve $y = e^{x}/2$ , on the left by x = 0, and on the right by x = 1. 

**Solution** Figure 5.28 displays the graphs of the curves and the region whose area we want to find. The area between the curves over the interval $0 \leq x \leq 1$ is 

$$
\begin{array}{r l} A & = \int_ {0} ^ {1} \left[ (2 e ^ {- x} + x) - \frac {1}{2} e ^ {x} \right] d x = \left[ - 2 e ^ {- x} + \frac {1}{2} x ^ {2} - \frac {1}{2} e ^ {x} \right] _ {0} ^ {1} \\ & = \left(- 2 e ^ {- 1} + \frac {1}{2} - \frac {1}{2} e\right) - \left(- 2 + 0 - \frac {1}{2}\right) \\ & = 3 - \frac {2}{e} - \frac {e}{2} \approx 0. 9 0 5 1. \end{array}
$$

**EXAMPLE 5** Find the area of the region enclosed by the parabola $y = 2 - x^2$ and the line $y = -x$ . 

**Solution** First we sketch the two curves (Figure 5.29). The limits of integration are found by solving $y = 2 - x^2$ and $y = -x$ simultaneously for $x$ . 

$$
\begin{array}{c l} 2 - x ^ {2} = - x & \text {   Equate   } f (x) \text {   and   } g (x). \\ x ^ {2} - x - 2 = 0 & \text {   Rearrange   terms.   } \\ (x + 1) (x - 2) = 0 & \text {   Factor.   } \\ x = - 1, \quad x = 2. & \text {   Solve.   } \end{array}
$$

The region runs from $x = -1$ to $x = 2$ . The limits of integration are $a = -1$ , $b = 2$ . The area between the curves is 

$$
\begin{array}{l} A = \int_ {a} ^ {b} [ f (x) - g (x) ] d x = \int_ {- 1} ^ {2} [ (2 - x ^ {2}) - (- x) ] d x \\ = \int_ {- 1} ^ {2} (2 + x - x ^ {2}) d x = \left[ 2 x + \frac {x ^ {2}}{2} - \frac {x ^ {3}}{3} \right] _ {- 1} ^ {2} \\ = \left(4 + \frac {4}{2} - \frac {8}{3}\right) - \left(- 2 + \frac {1}{2} + \frac {1}{3}\right) = \frac {9}{2}. \end{array}
$$

If the formula for a bounding curve changes at one or more points, we subdivide the region into subregions that correspond to the formula changes and apply the formula for the area between curves to each subregion. 

![[f03c7bf107b8b943d0b5dcd5cb2ba3753c04ddd120ba127fd1d5fcd9b34b6f20.jpg|image]]



FIGURE 5.30 When the formula for a bounding curve changes, the area integral changes to become the sum of integrals to match, one integral for each of the shaded regions shown here for Example 6.


**EXAMPLE 6** Find the area of the region in the first quadrant that is bounded above by $y = \sqrt{x}$ and below by the x-axis and the line y = x - 2. 

**Solution** Figure 5.30 shows that the region's upper boundary is the graph of $f(x) = \sqrt{x}$ . The lower boundary changes from $g(x) = 0$ for $0 \leq x \leq 2$ to $g(x) = x - 2$ for $2 \leq x \leq 4$ (both formulas agree at $x = 2$ ). We subdivide the region at $x = 2$ into subregions $A$ and $B$ , shown in Figure 5.30. 

The limits of integration for region A are a = 0 and b = 2. The left-hand limit for region B is a = 2. To find the right-hand limit, we solve the equations $y = \sqrt{x}$ and y = x - 2 simultaneously for x: 

$$
\begin{array}{l l} \sqrt {x} = x - 2 & \text {   Equate   } f (x) \text {   and   } g (x). \\ x = (x - 2) ^ {2} = x ^ {2} - 4 x + 4 & \text {   Square   both   sides.   } \\ x ^ {2} - 5 x + 4 = 0 & \text {   Rewrite.   } \\ (x - 1) (x - 4) = 0 & \text {   Factor.   } \\ x = 1, \qquad x = 4. & \text {   Solve.   } \end{array}
$$

Only the value x = 4 satisfies the equation $\sqrt{x} = x - 2$ . The value x = 1 is an extraneous root introduced by squaring. The right-hand limit is b = 4. 

$$
\begin{array}{l l} \text { For } 0 \leq x \leq 2: & f (x) - g (x) = \sqrt {x} - 0 = \sqrt {x} \\ \text { For } 2 \leq x \leq 4: & f (x) - g (x) = \sqrt {x} - (x - 2) = \sqrt {x} - x + 2 \end{array}
$$

We add the areas of subregions A and B to find the total area: 

$$
\begin{array}{l} \text { Total   area } = \underbrace {\int_ {0} ^ {2} \sqrt {x} d x} _ {\text { area   of   A }} + \underbrace {\int_ {2} ^ {4} (\sqrt {x} - x + 2) d x} _ {\text { area   of   B }} \\ = \left[ \frac {2}{3} x ^ {3 / 2} \right] _ {0} ^ {2} + \left[ \frac {2}{3} x ^ {3 / 2} - \frac {x ^ {2}}{2} + 2 x \right] _ {2} ^ {4} \\ = \frac {2}{3} (2) ^ {3 / 2} - 0 + \left(\frac {2}{3} (4) ^ {3 / 2} - 8 + 8\right) - \left(\frac {2}{3} (2) ^ {3 / 2} - 2 + 4\right) \\ = \frac {2}{3} (8) - 2 = \frac {1 0}{3}. \end{array}
$$

## Integration with Respect to y

If a region's bounding curves are described by functions of $y$ , the approximating rectangles are horizontal instead of vertical, and the basic formula has $y$ in place of $x$ . 

To find the areas of regions like these: 

![[811a42432322143beaf2dc55d0cdf1682ae9c26cfa5b53a95e0c6478658d6e9b.jpg|image]]



use the formula


$$
A = \int_ {c} ^ {d} [ f (y) - g (y) ] d y.
$$

![[00337c47ea45c8486c2327a81b477b1049b93cba53059cb78b13c26732570d58.jpg|image]]



FIGURE 5.31 It takes two integrations to find the area of this region if we integrate with respect to x. It takes only one if we integrate with respect to y (Example 7).


In this equation $f$ always denotes the right-hand curve and $g$ the left-hand curve, so $f(y) - g(y)$ is nonnegative. 

## **EXAMPLE 7** Find the area of the region in Example 6 by integrating with respect to y.

**Solution** We first sketch the region and a typical horizontal rectangle based on a partition of an interval of $y$ -values (Figure 5.31). The region's right-hand boundary is the line $x = y + 2$ , so $f(y) = y + 2$ . The left-hand boundary is the curve $x = y^2$ , so $g(y) = y^2$ . The lower limit of integration is $y = 0$ . We find the upper limit by solving $x = y + 2$ and $x = y^2$ simultaneously for $y$ : 


FIGURE 5.32 The area of the blue region is the area under the parabola $y = \sqrt{x}$ minus the area of the triangle.


$$
\begin{array}{r l} y + 2 = y ^ {2} & \text {   Equate   } f (y) = y + 2 \text {   and   } g (y) = y ^ {2}. \\ y ^ {2} - y - 2 = 0 & \text {   Rewrite.   } \\ (y + 1) (y - 2) = 0 & \text {   Factor.   } \\ y = - 1, \quad y = 2. & \text {   Solve.   } \end{array}
$$

The upper limit of integration is $b = 2$ . (The value $y = -1$ gives a point of intersection below the $x$ -axis.) 

The area of the region is 

$$
\begin{array}{l} A = \int_ {c} ^ {d} [ f (y) - g (y) ] d y = \int_ {0} ^ {2} [ y + 2 - y ^ {2} ] d y \\ = \int_ {0} ^ {2} [ 2 + y - y ^ {2} ] d y \\ = \left[ 2 y + \frac {y ^ {2}}{2} - \frac {y ^ {3}}{3} \right] _ {0} ^ {2} \\ = 4 + \frac {4}{2} - \frac {8}{3} = \frac {1 0}{3}. \end{array}
$$

![[fff859756efbd4af286958f24e2c1bd7cf00112c12ceec85e61ddf321df59ba8.jpg|image]]


This is the result of Example 6, found with less work. 

Although it was easier to find the area in Example 6 by integrating with respect to y rather than x (as we did in Example 7), there is an easier way yet. Looking at Figure 5.32, we see that the area we want is the area between the curve $y = \sqrt{x}$ and the x-axis for $0 \leq x \leq 4$ , minus the area of an isosceles triangle of base and height equal to 2. So by combining calculus with some geometry, we find 

$$
\begin{array}{r l} \text { Area } & = \int_ {0} ^ {4} \sqrt {x} d x - \frac {1}{2} (2) (2) \\ & = \left. \frac {2}{3} x ^ {3 / 2} \right] _ {0} ^ {4} - 2 \\ & = \frac {2}{3} (8) - 0 - 2 = \frac {1 0}{3}. \end{array}
$$

## EXERCISES 5.6

## Evaluating Definite Integrals

Evaluating Definite Integrals
Use the Substitution Formula in Theorem 7 to evaluate the integrals in Exercises 1–48.
2. a. $\int_{0}^{1} r\sqrt{1 - r^{2}} dr$ b. $\int_{-1}^{1} r\sqrt{1 - r^{2}} dr$ 1. a. $\int_{0}^{3}\sqrt{y+1}dy$ b. $\int_{-1}^{0}\sqrt{y+1}dy$ 3. a. $\int_{0}^{\pi/4}\tan x\sec^{2}x dx$ b. $\int_{-\pi/4}^{0}\tan x\sec^{2}x dx$ 

4. a. $\int_0^\pi 3\cos^2 x\sin xdx$ 

b. $\int_{2\pi}^{3\pi} 3\cos^2 x \sin x dx$ 

29. $\int_{1}^{2}\frac{2\ln x}{x} dx$ 

30. $\int_{2}^{4}\frac{dx}{x\ln x}$ 

5. a. $\int_0^1 t^3 (1 + t^4)^3 dt$ 

b. $\int_{-1}^{1} t^3 (1 + t^4)^3 dt$ 

31. $\int_{2}^{4}\frac{dx}{x(\ln x)^{2}}$ 

32. $\int_{2}^{16}\frac{dx}{2x\sqrt{\ln x}}$ 

6. a. $\int_0^{\sqrt{7}}t(t^2 +1)^{1 / 3}dt$ 

b. $\int_{-\sqrt{7}}^{0}t(t^2 +1)^{1 / 3}dt$ 

33. $\int_0^{\pi /2}\tan \frac{x}{2} dx$ 

34. $\int_{\pi /4}^{\pi /2}\cot tdt$ 

7. a. $\int_{-1}^{1}\frac{5r}{(4 + r^2)^2} dr$ 

b. $\int_0^1\frac{5r}{(4 + r^2)^2} dr$ 

35. $\int_0^{\pi /3}\tan^2\theta \cos \theta d\theta$ 

36. $\int_0^{\pi /12}6\tan 3x dx$ 

8. a. $\int_0^1\frac{10\sqrt{v}}{(1 + v^{3 / 2})^2} dv$ 

b. $\int_{1}^{4}\frac{10\sqrt{v}}{(1 + v^{3/2})^2} dv$ 

37. $\int_{-\pi /2}^{\pi /2}\frac{2\cos\theta d\theta}{1 + (\sin\theta)^2}$ 

38. $\int_{\pi /6}^{\pi /4}\frac{\csc^2xdx}{1 + (\cot x)^2}$ 

9. a. $\int_0^{\sqrt{3}}\frac{4x}{\sqrt{x^2 + 1}} dx$ 

b. $\int_{-\sqrt{3}}^{\sqrt{3}}\frac{4x}{\sqrt{x^2 + 1}} dx$ 

39. $\int_0^{\ln \sqrt{3}}\frac{e^xdx}{1 + e^{2x}}$ 

40. $\int_{1}^{e^{\pi /4}}\frac{4dt}{t(1 + \ln^2t)}$ 

10. a. $\int_0^1\frac{x^3}{\sqrt{x^4 + 9}} dx$ 

b. $\int_{-1}^{0}\frac{x^3}{\sqrt{x^4 + 9}} dx$ 

41. $\int_0^1\frac{4ds}{\sqrt{4 - s^2}}$ 

42. $\int_0^{(3 / 4)\sqrt{2}}\frac{ds}{\sqrt{9 - 4s^2}}$ 

11. a. $\int_0^1 t\sqrt{4 + 5t} dt$ 

b. $\int_{1}^{9} t\sqrt{4 + 5t} dt$ 

43. $\int_{\sqrt{2}}^{2}\frac{\sec^2(\sec^{-1}x)dx}{x\sqrt{x^2 - 1}}$ 

44. $\int_{2 / \sqrt{3}}^{2}\frac{\cos(\sec^{-1}x)dx}{x\sqrt{x^2 - 1}}$ 

12. a. $\int_0^{\pi /6}(1 - \cos 3t)\sin 3tdt$ 

45. $\int_{-1}^{-\sqrt{2} / 2}\frac{dy}{y\sqrt{4y^2 - 1}}$ 

46. $\int_0^3\frac{ydy}{\sqrt{5y + 1}}$ 

b. $\int_{\pi /6}^{\pi /3}(1 - \cos 3t)\sin 3tdt$ 

47. $\int_0^1\frac{\tan^{-1}x}{1 + x^2} dx$ 

48. $\int_{-\sqrt{3}}^{1 / \sqrt{3}}\frac{\cos(\tan^{-1}3x)}{1 + 9x^2} dx$ 

13. a. $\int_0^{2\pi}\frac{\cos z}{\sqrt{4 + 3\sin z}} dz$ b. $\int_{-\pi}^{\pi}\frac{\cos z}{\sqrt{4 + 3\sin z}} dz$ 

Area 

Find the total areas of the shaded regions in Exercises 49–64. 

14. a. $\int_{-\pi /2}^{0}\left(2 + \tan \frac{t}{2}\right)\sec^2\frac{t}{2} dt$ 

50. 

b. $\int_{-\pi /2}^{\pi /2}\left(2 + \tan \frac{t}{2}\right)\sec^2\frac{t}{2} dt$ 

![[5c36b341770e2ca5a7b791d499f66581b2823da41b9ca0b8ba387f7d9fed393b.jpg|image]]


15. $\int_0^1\sqrt{t^5 + 2t} (5t^4 +2)dt$ 16. $\int_1^4\frac{dy}{2\sqrt{y}\left(1 + \sqrt{y}\right)^2}$ 

17. $\int_0^{\pi /6}\cos^{-3}2\theta \sin 2\theta d\theta$ 18. $\int_{\pi}^{3\pi /2}\cot^{5}\left(\frac{\theta}{6}\right)\sec^{2}\left(\frac{\theta}{6}\right)d\theta$ 

49. 

19. $\int_0^\pi 5(5 - 4\cos t)^{1 / 4}\sin tdt$ 20. $\int_0^{\pi /4}(1 - \sin 2t)^{3 / 2}\cos 2tdt$ 

![[e2ada74f86bd41410314858265dda0094078e82a3c709637acd5b3859e9ca4a2.jpg|image]]


21. $\int_0^1 (4y - y^2 + 4y^3 + 1)^{-2/3}(12y^2 - 2y + 4)dy$ 

52. $y = \frac{\pi}{2} (\cos x)(\sin (\pi + \frac{\pi}{y}\sin x))$ 

22. $\int_0^1 (y^3 +6y^2 -12y + 9)^{-1 / 2}(y^2 +4y - 4)dy$ 

23. $\int_0^{\sqrt[3]{\pi^2}}\sqrt{\theta}\cos^2 (\theta^{3 / 2})d\theta$ 24. $\int_{-1}^{-1 / 2}t^{-2}\sin^2\left(1 + \frac{1}{t}\right)dt$ 

![[7aec808ecea06c5fa779ebda81d269336e55e198cc6226b1817fb3af54483928.jpg|image]]


25. $\int_0^{\pi /4}(1 + e^{\tan \theta})\sec^2\theta d\theta$ 26. $\int_{\pi /4}^{\pi /2}(1 + e^{\cot \theta})\csc^2\theta d\theta$ 

27. $\int_0^\pi \frac{\sin t}{2 - \cos t} dt$ 28. $\int_0^{\pi /3}\frac{4\sin\theta}{1 - 4\cos\theta} d\theta$ 

51. 

![[e3426e47bafb70cdeec97a359f0888340af7858a8179d314399e807213fe3717.jpg|image]]


53. 

![[bc8123e5c6c0fd2bf21d6586b1d48e7d85dbfaf46c2f4be9c83d6c5f5d1a9dca.jpg|image]]


54. 

![[1cc6ff701690c6ca00f3a3d6f6ed15834c16f37e2c4812ac0533f54873f922b1.jpg|image]]



55.


![[08e1d272b5c5dcaebcd721ac93b6f8b48a5d04cf0dd01a29ed10101aa4d16586.jpg|image]]



56.


![[b06d1551e575c84e15986574cfd73193cc316c9fdc64404a858bcc1054978633.jpg|image]]



57.


![[efc4cd5d49344e71f11ee9b256eb743c1372e95b7c8edeca2bad1d214240ecef.jpg|image]]



58.


![[b7d330af0204ac70f4ff28f50e45ffc10bc77d80587f03788da409b4054d3672.jpg|image]]



59.


![[1d34d3fa12faaca7b737eb3c0bd7a12f31a1d9800c2dc06d6d79de0c43da2d0d.jpg|image]]



60.


![[a5a9e1c9a04d03aeda4115dee2171c956ea9677a817fed131364f4fc68bc3152.jpg|image]]



61.


![[79655c398a1b335d54a6fdb0bc7859401bf3288d2fa642ccc4382782e18b63cd.jpg|image]]



62.


![[a34edba64fb524746bf93811d056b1c2ecdc07190bd647673020306f37b0ea40.jpg|image]]



63.



64.


![[a94beb2d43baf0ed177bed5fa57f5c7f4844678ab5029f0dd0a61528ac35d819.jpg|image]]


![[3da65745d82276dc3ee90742cb4128082cc0d017d0102211b45f36106ee2d363.jpg|image]]


Find the areas of the regions enclosed by the lines and curves in Exercises 65–74. 

65. $y = x^{2} - 2$ and $y = 2$ 

$$
\mathbf {6 6 .} y = 2 x - x ^ {2} \quad \text { and } \quad y = - 3
$$

$$
6 7. y = x ^ {4} \quad \text { and } \quad y = 8 x
$$

$$
\mathbf {6 8 .} y = x ^ {2} - 2 x \quad \text { and } \quad y = x
$$

$$
\mathbf {6 9 .} y = x ^ {2} \quad \text { and } \quad y = - x ^ {2} + 4 x
$$

$$
\mathbf {7 0 .} y = 7 - 2 x ^ {2} \quad \text { and } \quad y = x ^ {2} + 4
$$

$$
\mathbf {7 1 .} y = x ^ {4} - 4 x ^ {2} + 4 \quad \text { and } \quad y = x ^ {2}
$$

72. $y = x\sqrt{a^2 - x^2}$ , $a > 0$ , and $y = 0$ 

73. $y = \sqrt{|x|}$ and $5y = x + 6$ (How many intersection points are there?) 

$$
7 4. y = | x ^ {2} - 4 | \quad \text { and } \quad y = (x ^ {2} / 2) + 4
$$

Find the areas of the regions enclosed by the lines and curves in Exercises 75–82. 

$$
7 5. x = 2 y ^ {2}, \quad x = 0, \text { and } y = 3
$$

$$
7 6. x = y ^ {2} \quad \text { and } \quad x = y + 2
$$

$$
7 7. y ^ {2} - 4 x = 4 \quad \text { and } \quad 4 x - y = 1 6
$$

$$
7 8. x - y ^ {2} = 0 \quad \text { and } \quad x + 2 y ^ {2} = 3
$$

$$
7 9. x + y ^ {2} = 0 \quad \text { and } \quad x + 3 y ^ {2} = 2
$$

$$
\mathbf {8 0 .} x - y ^ {2 / 3} = 0 \quad \text { and } \quad x + y ^ {4} = 2
$$

$$
\mathbf {8 1 .} x = y ^ {2} - 1 \quad \text { and } \quad x = | y | \sqrt {1 - y ^ {2}}
$$

$$
\mathbf {8 2 .} x = y ^ {3} - y ^ {2} \quad \text { and } \quad x = 2 y
$$

Find the areas of the regions enclosed by the curves in Exercises 83–86. 

$$
8 3. 4 x ^ {2} + y = 4 \quad \text { and } \quad x ^ {4} - y = 1
$$

$$
\mathbf {8 4 .} x ^ {3} - y = 0 \quad \text { and } \quad 3 x ^ {2} - y = 4
$$

$$
\mathbf {8 5 .} x + 4 y ^ {2} = 4 \quad \text { and } \quad x + y ^ {4} = 1, \quad \text { for } \quad x \geq 0
$$

$$
\mathbf {8 6 .} x + y ^ {2} = 3 \quad \text { and } \quad 4 x + y ^ {2} = 0
$$

Find the areas of the regions enclosed by the lines and curves in Exercises 87–94. 

$$
\mathbf {8 7 .} y = 2 \sin x \quad \text { and } \quad y = \sin 2 x, \quad 0 \leq x \leq \pi
$$

$$
\mathbf {8 8 .} y = 8 \cos x \quad \text { and } \quad y = \sec^ {2} x, \quad - \pi / 3 \leq x \leq \pi / 3
$$

$$
\mathbf {8 9 .} y = \cos (\pi x / 2) \quad \text { and } \quad y = 1 - x ^ {2}
$$

$$
\mathbf {9 0 .} y = \sin (\pi x / 2) \quad \text { and } \quad y = x
$$

$$
\mathbf {9 1 .} y = \sec^ {2} x, \quad y = \tan^ {2} x, \quad x = - \pi / 4, \text { and } x = \pi / 4
$$

$$
9 2. x = \tan^ {2} y \quad \text { and } \quad x = - \tan^ {2} y, \quad - \pi / 4 \leq y \leq \pi / 4
$$

$$
9 3. x = 3 \sin y \sqrt {\cos y} \quad \text { and } \quad x = 0, \quad 0 \leq y \leq \pi / 2
$$

$$
\mathbf {9 4 .} y = \sec^ {2} (\pi x / 3) \quad \text { and } \quad y = x ^ {1 / 3}, \quad - 1 \leq x \leq 1
$$

## Area Between Curves

95. Find the area of the propeller-shaped region enclosed by the curve $x - y^{3} = 0$ and the line x - y = 0. 

96. Find the area of the propeller-shaped region enclosed by the curves $x - y^{1/3} = 0$ and $x - y^{1/5} = 0$ . 

97. Find the area of the region in the first quadrant bounded by the line $y = x$ , the line $x = 2$ , the curve $y = 1 / x^2$ , and the $x$ -axis. 

98. Find the area of the “triangular” region in the first quadrant bounded on the left by the y-axis and on the right by the curves $y = \sin x$ and $y = \cos x$ . 

99. Find the area between the curves $y = \ln x$ and $y = \ln 2x$ from $x = 1$ to $x = 5$ . 

100. Find the area between the curve $y = \tan x$ and the $x$ -axis from $x = -\pi / 4$ to $x = \pi / 3$ . 

101. Find the area of the “triangular” region in the first quadrant that is bounded above by the curve $y = e^{2x}$ , below by the curve $y = e^{x}$ , and on the right by the line $x = \ln 3$ . 

102. Find the area of the “triangular” region in the first quadrant that is bounded above by the curve $y = e^{x/2}$ , below by the curve $y = e^{-x/2}$ , and on the right by the line $x = 2 \ln 2$ . 

103. Find the area of the region between the curve $y = 2x / (1 + x^2)$ and the interval $-2 \leq x \leq 2$ of the $x$ -axis. 

104. Find the area of the region between the curve $y = 2^{1-x}$ and the interval $-1 \leq x \leq 1$ of the x-axis. 

105. The region bounded below by the parabola $y = x^{2}$ and above by the line y = 4 is to be partitioned into two subsections of equal area by cutting across it with the horizontal line y = c. 

a. Sketch the region and draw a line y = c across it that looks about right. In terms of c, what are the coordinates of the points where the line and parabola intersect? Add them to your figure. 

b. Find $c$ by integrating with respect to $y$ . (This puts $c$ in the limits of integration.) 

c. Find c by integrating with respect to x. (This puts c into the integrand as well.) 

106. Find the area of the region between the curve $y = 3 - x^2$ and the line $y = -1$ by integrating with respect to a. $x$ , b. $y$ . 

107. Find the area of the region in the first quadrant bounded on the left by the $y$ -axis, below by the line $y = x / 4$ , above left by the curve $y = 1 + \sqrt{x}$ , and above right by the curve $y = 2 / \sqrt{x}$ . 

108. Find the area of the region in the first quadrant bounded on the left by the y-axis, below by the curve $x = 2\sqrt{y}$ , above left by the curve $x = (y - 1)^{2}$ , and above right by the line x = 3 - y. 

![[e23ffbc9267dccc02680c7aedc2df1dbb4559a3bdc48dac2efcf243eefc676f1.jpg|image]]


109. The figure here shows triangle $AOC$ inscribed in the region cut from the parabola $y = x^2$ by the line $y = a^2$ . Find the limit of the ratio of the area of the triangle to the area of the parabolic region as $a$ approaches zero. 

![[c7d1d7abe320343d025dde99bd475adeae951d4644842b3bf6a12928d71275ab.jpg|image]]


110. Suppose the area of the region between the graph of a positive continuous function $f$ and the $x$ -axis from $x = a$ to $x = b$ is 4 square units. Find the area between the curves $y = f(x)$ and $y = 2f(x)$ from $x = a$ to $x = b$ . 

111. Which of the following integrals, if either, calculates the area of the shaded region shown here? Give reasons for your answer. 

$$
\int_ {- 1} ^ {1} (x - (- x)) d x = \int_ {- 1} ^ {1} 2 x d x
$$

b. $\int_{-1}^{1}(-x - (x))dx = \int_{-1}^{1} - 2xdx$ 

![[35f7c4b5275fc0e35810c0ec7fac28816313753f9cd6798aae475e6ee51ef320.jpg|image]]


112. True, sometimes true, or never true? The area of the region between the graphs of the continuous functions $y = f(x)$ and $y = g(x)$ and the vertical lines $x = a$ and $x = b (a < b)$ is 

$$
\int_ {a} ^ {b} [ f (x) - g (x) ] d x.
$$

Give reasons for your answer. 

## Comparing Areas

Compute the areas of the light blue and dark blue regions in each of Exercises 113 to 116 and determine which is larger, or show that they have equal area. 

![[689a3bf828e8768a917f3d59327b6b69878175e92c1df67ae8695e605126146c.jpg|image]]



114.


![[ec744ae86089a0325e037bd776406e7d02e915a48df7aae69b30035397b60976.jpg|image]]



115.


![[de9547dbcfe789365504adf84d0d29ce73bd7d0dcf1a632f478d8973629275e9.jpg|image]]



116.


![[2ac95a7862afcc7158e75fd5ec7b83508358b7ae306dc7d326fb59d792426df1.jpg|image]]


Theory and Examples 

117. Suppose that $F(x)$ is an antiderivative of $f(x) = (\sin x) / x$ , $x > 0$ . Express 

$$
\int_ {1} ^ {3} \frac {\sin 2 x}{x} d x
$$

in terms of $F$ . 

118. Show that if $f$ is continuous, then 

$$
\int_ {0} ^ {1} f (x) d x = \int_ {0} ^ {1} f (1 - x) d x.
$$

119. Suppose that 

$$
\int_ {0} ^ {1} f (x) d x = 3.
$$

Find 

$$
\int_ {- 1} ^ {0} f (x) d x
$$

if a. f is odd, b. f is even. 

120. a. Show that if f is odd on $[-a, a]$ , then 

$$
\int_ {- a} ^ {a} f (x) d x = 0.
$$

b. Test the result in part (a) with $f(x) = \sin x$ and $a = \pi/2$ . 

121. If f is a continuous function, find the value of the integral 

$$
I = \int_ {0} ^ {a} \frac {f (x) d x}{f (x) + f (a - x)}
$$

by making the substitution $u = a - x$ and adding the resulting integral to $I$ . 

122. By using a substitution, prove that for all positive numbers x and y, 

$$
\int_ {x} ^ {x y} \frac {1}{t} d t = \int_ {1} ^ {y} \frac {1}{t} d t.
$$

The Shift Property for Definite Integrals A basic property of definite integrals is their invariance under translation, as expressed by the equation 

$$
\int_ {a} ^ {b} f (x) d x = \int_ {a - c} ^ {b - c} f (x + c) d x\tag{1}
$$

The equation holds whenever $f$ is integrable and defined for the necessary values of $x$ . For example, in the accompanying figure, show that 

$$
\int_ {- 2} ^ {- 1} (x + 2) ^ {3} d x = \int_ {0} ^ {1} x ^ {3} d x
$$

because the areas of the shaded regions are congruent. 

![[4489b8694b87d340669386d348b7ed2b968a9264c91532042fd5b1b59f592fe8.jpg|image]]


123. Use a substitution to verify Equation (1). 

124. For each of the following functions, graph $f(x)$ over $[a, b]$ and $f(x + c)$ over $[a - c, b - c]$ to convince yourself that Equation (1) is reasonable. 

a. $f(x) = x^{2}$ , a = 0, b = 1, c = 1 

b. $f(x) = \sin x,\quad a = 0,\quad b = \pi,\quad c = \pi/2$ 

c. $f(x) = \sqrt{x - 4}$ , a = 4, b = 8, c = 5 

COMPUTER EXPLORATIONS 

In Exercises 125–128, you will find the area between curves in the plane when you cannot find their points of intersection using simple algebra. Use a CAS to perform the following steps: 

a. Plot the curves together to see what they look like and how many points of intersection they have. 

b. Use the numerical equation solver in your CAS to find all the points of intersection. 

c. Integrate $|f(x) - g(x)|$ over consecutive pairs of intersection values. 

d. Sum together the integrals found in part (c). 

125. $f(x) = \frac{x^{3}}{3} - \frac{x^{2}}{2} - 2x + \frac{1}{3}, \quad g(x) = x - 1$ 

126. $f(x) = \frac{x^{4}}{2} - 3x^{3} + 10,\quad g(x) = 8 - 12x$ 

127. $f(x) = x + \sin(2x)$ , $g(x) = x^{3}$ 

128. $f(x) = x^{2} \cos x,\quad g(x) = x^{3} - x$ 

## CHAPTER 5 Questions to Guide Your Review

1. How can you sometimes estimate quantities like distance traveled, area, and average value with finite sums? Why might you want to do so? 

2. What is sigma notation? What advantage does it offer? Give examples. 

3. What is a Riemann sum? Why might you want to consider such a sum? 

4. What is the norm of a partition of a closed interval? 

5. What is the definite integral of a function $f$ over a closed interval $[a, b]$ ? When can you be sure it exists? 

6. What is the relation between definite integrals and area? Describe some other interpretations of definite integrals. 

7. What is the average value of an integrable function over a closed interval? Must the function assume its average value? Explain. 

8. Describe the rules for working with definite integrals (Table 5.6). Give examples. 

9. What is the Fundamental Theorem of Calculus? Why is it so important? Illustrate each part of the theorem with an example. 

10. What is the Net Change Theorem? What does it say about the integral of velocity? The integral of marginal cost? 

11. Discuss how the processes of integration and differentiation can be considered as “inverses” of each other. 

12. How does the Fundamental Theorem provide a solution to the initial value problem $dy/dx = f(x)$ , $y(x_{0}) = y_{0}$ , when f is continuous? 

13. How is integration by substitution related to the Chain Rule? 

14. How can you sometimes evaluate indefinite integrals by substitution? Give examples. 

15. How does the method of substitution work for definite integrals? Give examples. 

16. How do you define and calculate the area of the region between the graphs of two continuous functions? Give an example. 

## CHAPTER 5 Practice Exercises

## Finite Sums and Estimates

1. The accompanying figure shows the graph of the velocity (m/s) of a model rocket for the first 8 s after launch. The rocket accelerated straight up for the first 2 s and then coasted to reach its maximum height at t = 8 s. 

![[40dec01e133bd157c7784aba267ce66e7c2aefbe92efce37ea2a489fd29d260d.jpg|image]]



Time after launch (s)


a. Assuming that the rocket was launched from ground level, about how high did it go? (This is the rocket in Section 3.4, Exercise 17, but you do not need to do Exercise 17 to do the exercise here.) 

b. Sketch a graph of the rocket's height above ground as a function of time for $0 \leq t \leq 8$ . 

2. a. The accompanying figure shows the velocity (m/s) of a body moving along the s-axis during the time interval from t = 0 to t = 10 s. About how far did the body travel during those 10 s? 

b. Sketch a graph of $s$ as a function of $t$ for $0 \leq t \leq 10$ , assuming $s(0) = 0$ . 

![[bdab302bc02c63a49e6680d20a6ae4cb77ddd856201c2445f860116b2991e91d.jpg|image]]



Time (s)


3. Suppose that $\sum_{k=1}^{10} a_k = -2$ and $\sum_{k=1}^{10} b_k = 25$ . Find the value of
a. $\sum_{k=1}^{10} \frac{a_k}{4}$ b. $\sum_{k=1}^{10} (b_k - 3a_k)$ c. $\sum_{k=1}^{10} (a_k + b_k - 1)$ d. $\sum_{k=1}^{10} \left( \frac{5}{2} - b_k \right)$ 

4. Suppose that $\sum_{k=1}^{20} a_k = 0$ and $\sum_{k=1}^{20} b_k = 7$ . Find the value of
a. $\sum_{k=1}^{20} 3a_k$ b. $\sum_{k=1}^{20}(a_k + b_k)$ c. $\sum_{k=1}^{20}\left(\frac{1}{2}-\frac{2b_k}{7}\right)$ d. $\sum_{k=1}^{20}(a_k - 2)$ 

## Definite Integrals

In Exercises 5–8, express each limit as a definite integral. Then evaluate the integral to find the value of the limit. In each case, P is a partition of the given interval, and the numbers $c_{k}$ are chosen from the subintervals of P. 

5. $\lim_{\| P\| \to 0}\sum_{k = 1}^{n}(2c_k - 1)^{-1 / 2}\Delta x_k$ , where $P$ is a partition of [1,5] 

6. $\lim_{\| P\| \to 0}\sum_{k = 1}^{n}c_k(c_k^2 -1)^{1 / 3}\Delta x_k$ , where $P$ is a partition of [1,3] 

7. $\lim_{\| P\| \to 0}\sum_{k = 1}^{n}\left(\cos \left(\frac{c_k}{2}\right)\right)\Delta x_k$ , where $P$ is a partition of $[- \pi,0]$ 

8. $\lim_{\|P\|\to0}\sum_{k=1}^{n}(\sin c_{k})(\cos c_{k})\Delta x_{k}$ , where P is a partition of $[0,\pi/2]$ 

9. If $\int_{-2}^{2} 3f(x) dx = 12$ , $\int_{-2}^{5} f(x) dx = 6$ , and $\int_{-2}^{5} g(x) dx = 2$ , find the value of each of the following.
a. $\int_{-2}^{2} f(x) dx$ b. $\int_{2}^{5} f(x) dx$ c. $\int_{5}^{-2} g(x) dx$ d. $\int_{-2}^{5} (-\pi g(x)) dx$ e. $\int_{-2}^{5}\left(\frac{f(x) + g(x)}{5}\right)dx$ 

10. If $\int_0^2 f(x)dx = \pi, \int_0^2 7g(x)dx = 7$ , and $\int_0^1 g(x)dx = 2$ , find the value of each of the following.  
a. $\int_0^2 g(x)dx$ b. $\int_1^2 g(x)dx$ c. $\int_2^0 f(x)dx$ d. $\int_0^2\sqrt{2} f(x)dx$ e. $\int_0^2 (g(x) - 3f(x))dx$ 

Area 

In Exercises 11–14, find the total area of the region between the graph of f and the x-axis. 

11. $f(x) = x^{2} - 4x + 3, 0 \leq x \leq 3$ 

12. $f(x) = 1 - (x^2 /4), - 2\leq x\leq 3$ 

13. $f(x) = 5 - 5x^{2 / 3}, - 1\leq x\leq 8$ 

14. $f(x) = 1 - \sqrt{x}, \quad 0 \leq x \leq 4$ 

Find the areas of the regions enclosed by the curves and lines in Exercises 15–26. 

15. $y = x, y = 1 / x^2, x = 2$ 

16. $y = x, y = 1 / \sqrt{x}, x = 2$ 

17. $\sqrt{x} +\sqrt{y} = 1$ $x = 0,y = 0$ 

![[18c07cdeb2a3536b3ea658220c0751a38c65513ba79a3267b3fbffe8a3dd14ed.jpg|image]]


18. $x^{3} + \sqrt{y} = 1,\quad x = 0,\quad y = 0,\quad for\quad 0 \leq x \leq 1$ 

![[ab8e010c3027ec817972dd1b3fce0a7793ce2a14eb7441d5fa423d785dbb4fdd.jpg|image]]


19. $x = 2y^{2}$ , $x = 0$ , $y = 3$ 20. $x = 4 - y^{2}$ , $x = 0$ 

21. $y^{2} = 4x, y = 4x - 2$ 

22. $y^{2} = 4x + 4, y = 4x - 16$ 

23. $y = \sin x, y = x, 0 \leq x \leq \pi / 4$ 

24. $y = |\sin x|$ , $y = 1$ , $-\pi/2 \leq x \leq \pi/2$ 

25. $y = 2 \sin x,\quad y = \sin 2x,\quad 0 \leq x \leq \pi$ 

26. $y = 8 \cos x,\quad y = \sec^{2}x,\quad -\pi/3 \leq x \leq \pi/3$ 

27. Find the area of the “triangular” region bounded on the left by $x + y = 2$ , on the right by $y = x^{2}$ , and above by y = 2. 

28. Find the area of the “triangular” region bounded on the left by $y = \sqrt{x}$ , on the right by y = 6 - x, and below by y = 1. 

29. Find the extreme values of $f(x) = x^3 - 3x^2$ , and find the area of the region enclosed by the graph of $f$ and the $x$ -axis. 

30. Find the area of the region cut from the first quadrant by the curve $x^{1/2} + y^{1/2} = a^{1/2}$ . 

31. Find the total area of the region enclosed by the curve $x = y^{2/3}$ and the lines $x = y$ and $y = -1$ . 

32. Find the total area of the region between the curves $y = \sin x$ and $y = \cos x$ for $0 \leq x \leq 3\pi / 2$ . 

33. Find the area between the curve $y = 2(\ln x)/x$ and the x-axis from x = 1 to x = e. 

34. a. Show that the area between the curve y = 1/x and the x-axis from x = 10 to x = 20 is the same as the area between the curve and the x-axis from x = 1 to x = 2. 

b. Show that the area between the curve y = 1/x and the x-axis from ka to kb is the same as the area between the curve and the x-axis from x = a to x = b (0 < a < b, k > 0). 

## Initial Value Problems

35. Show that $y = x^2 + \int_{1}^{x} \frac{1}{t} dt$ solves the initial value problem 

$$
\frac {d ^ {2} y}{d x ^ {2}} = 2 - \frac {1}{x ^ {2}}; \quad y ^ {\prime} (1) = 3, \quad y (1) = 1.
$$

36. Show that $y = \int_0^x (1 + 2\sqrt{\sec t})dt$ solves the initial value problem 

$$
\frac {d ^ {2} y}{d x ^ {2}} = \sqrt {\sec x} \tan x; \quad y ^ {\prime} (0) = 3, \quad y (0) = 0.
$$

Express the solutions of the initial value problems in Exercises 37 and 38 in terms of integrals. 

37. $\frac{dy}{dx} = \frac{\sin x}{x}, y(5) = -3$ 

38. $\frac{dy}{dx} = \sqrt{2 - \sin^2 x}, y(-1) = 2$ 

Solve the initial value problems in Exercises 39–42. 

39. $\frac{dy}{dx} = \frac{1}{\sqrt{1 - x^2}}, y(0) = 0$ 

40. $\frac{dy}{dx} = \frac{1}{x^2 + 1} - 1, y(0) = 1$ 

41. $\frac{dy}{dx} = \frac{1}{x\sqrt{x^2 - 1}}, x > 1; y(2) = \pi$ 

42. $\frac{dy}{dx} = \frac{1}{1 + x^2} -\frac{2}{\sqrt{1 - x^2}},y(0) = 2$ 

82. $\int_{1}^{4}\frac{(1 + \sqrt{u})^{1 / 2}}{\sqrt{u}} du$ 

For Exercises 43 and 44, find a function $f$ that satisfies each equation. 

83. $\int_0^1\frac{36dx}{(2x + 1)^3}$ 

84. $\int_0^1\frac{dr}{\sqrt[3]{(7 - 5r)^2}}$ 

43. $f(x) = 1 + \int_{1}^{x}tf(t)dt$ 44. $f(x) = \int_{0}^{x}(1 + f(t)^{2})dt$ 

Evaluating Indefinite Integrals 

80. $\int_1^{27}x^{-4 / 3}dx$ 

85. $\int_{1 / 8}^{1}x^{-1 / 3}(1 - x^{2 / 3})^{3 / 2}dx$ 

Evaluate the integrals in Exercises 45–76. 

86. $\int_0^{1 / 2}x^3 (1 + 9x^4)^{-3 / 2}dx$ 

78. $\int_0^1 (8s^3 - 12s^2 + 5)ds$ 

87. $\int_0^\pi \sin^2 5rdr$ 

45. $\int 2(\cos x)^{-1 / 2}\sin xdx$ 46. $\int (\tan x)^{-3 / 2}\sec^2 xdx$ 

88. $\int_0^{\pi /4}\cos^2\left(4t - \frac{\pi}{4}\right)dt$ 

81. $\int_{1}^{4}\frac{dt}{t\sqrt{t}}$ 

47. $\int (2\theta + 1 + 2\cos (2\theta + 1)) d\theta$ 

89. $\int_0^{\pi /3}\sec^2\theta d\theta$ 

90. $\int_{\pi /4}^{3\pi /4}\csc^2 x dx$ 

Evaluating Definite Integrals 

48. $\int \left(\frac{1}{\sqrt{2\theta - \pi}} + 2\sec^2 (2\theta - \pi)\right)d\theta$ 

91. $\int_{\pi}^{3\pi}\cot^2\frac{x}{6} dx$ 

49. $\int \left(t - \frac{2}{t}\right)\left(t + \frac{2}{t}\right)dt$ 

92. $\int_0^\pi \tan^2\frac{\theta}{3} d\theta$ 

50. $\int \frac{(t + 1)^2 - 1}{t^4} dt$ 

93. $\int_{-\pi /3}^{0}\sec x\tan xdx$ 

51. $\int \sqrt{t}\sin (2t^{3 / 2})dt$ 

94. $\int_{\pi /4}^{3\pi /4}\csc z\cot zdz$ 

79. $\int_{1}^{2}\frac{4}{v^{2}} dv$ 

52. $\int (\sec \theta \tan \theta)\sqrt{1 + \sec\theta} d\theta$ 

95. $\int_0^{\pi /2}5(\sin x)^{3 / 2}\cos xdx$ 

96. $\int_{-\pi /2}^{\pi /2}15\sin^4 3x\cos 3xdx$ 

53. $\int e^{x}\sec^{2}(e^{x} - 7)dx$ 

Evaluate the integrals in Exercises 77–116. 

98. $\int_0^{\pi /4}\frac{\sec^2x}{(1 + 7\tan x)^{2 / 3}} dx$ 

97. $\int_0^{\pi /2}\frac{3\sin x\cos x}{\sqrt{1 + 3\sin^2x}} dx$ 

77. $\int_{-1}^{1}(3x^2 - 4x + 7)dx$ 

54. $\int e^{y}\csc (e^{y} + 1)\cot (e^{y} + 1)dy$ 

100. $\int_{1}^{8}\left(\frac{2}{3x} -\frac{8}{x^2}\right)dx$ 

56. $\int (\csc^2 x)e^{\cot x}dx$ 

55. $\int (\sec^2 x)e^{\tan x}dx$ 

99. $\int_1^4\left(\frac{x}{8} +\frac{1}{2x}\right)dx$ 

58. $\int_{1}^{e}\frac{\sqrt{\ln x}}{x} dx$ 

102. $\int_{-\ln 2}^{0}e^{2w}dw$ 

57. $\int_{-1}^{1}\frac{dx}{3x - 4}$ 

60. $\int \frac{\tan(\ln v)}{v} dv$ 

101. $\int_{-2}^{-1}e^{-(x + 1)}dx$ 

59. $\int_0^4\frac{2t}{t^2 - 25} dt$ 

104. $\int_0^{\ln 9}e^\theta (e^\theta -1)^{1 / 2}d\theta$ 

62. $\int \frac{1}{r}\csc^2 (1 + \ln r)dr$ 

61. $\int \frac{(\ln x)^{-3}}{x} dx$ 

106. $\int_{1}^{3}\frac{(\ln(v + 1))^{2}}{v + 1} dv$ 

64. $\int 2^{\tan x}\sec^{2}x dx$ 

103. $\int_0^{\ln 5}e^r (3e^r +1)^{-3 / 2}dr$ 

63. $\int x3^{x^2}dx$ 

66. $\int \frac{6dr}{\sqrt{4 - (r + 1)^2}}$ 

65. $\int \frac{3dr}{\sqrt{1 - 4(r - 1)^2}}$ 

108. $\int_{1}^{e}\frac{8\ln 3\log_3\theta}{\theta} d\theta$ 

68. $\int \frac{dx}{1 + (3x + 1)^2}$ 

76. $\int \cos \theta \cdot \sin (\sin \theta)d\theta$ 

70. $\int \frac{dx}{(x + 3)\sqrt{(x + 3)^2 - 25}}$ 

69. $\int \frac{dx}{(2x - 1)\sqrt{(2x - 1)^2 - 4}}$ 

67. $\int \frac{dx}{2 + (x - 1)^2}$ 

74. $\int \frac{(\arctan x)^2 dx}{1 + x^2}$ 

110. $\int_{-1 / 5}^{1 / 5}\frac{6dx}{\sqrt{4 - 25x^2}}$ 

105. $\int_{1}^{e}\frac{1}{x} (1 + 7\ln x)^{-1 / 3}dx$ 

72. $\int \frac{\sqrt{\arcsin x} dx}{\sqrt{1 - x^2}}$ 

71. $\int \frac{e^{\arcsin\sqrt{x}}dx}{2\sqrt{x - x^2}}$ 

73. $\int \frac{dy}{\sqrt{\arctan y} (1 + y^2)}$ 

112. $\int_{\sqrt{3}}^{3}\frac{dt}{3 + t^2}$ 

75. $\int \frac{\sin 2\theta - \cos 2\theta}{(\sin 2\theta + \cos 2\theta)^3} d\theta$ 

107. $\int_{1}^{8}\frac{\log_4\theta}{\theta} d\theta$ 

114. $\int_{4\sqrt{2}}^{8}\frac{24dy}{y\sqrt{y^2 - 16}}$ 

109. $\int_{-3 / 4}^{3 / 4}\frac{6dx}{\sqrt{9 - 4x^2}}$ 

111. $\int_{-2}^{2}\frac{3dt}{4 + 3t^2}$ 

116. $\int_{-2 / \sqrt{5}}^{-\sqrt{6} / \sqrt{5}}\frac{dy}{|y|\sqrt{5y^2 - 3}}$ 

113. $\int_{1 / \sqrt{3}}^{1}\frac{dy}{y\sqrt{4y^2 - 1}}$ 

115. $\int_{\sqrt{2} /3}^{2 / 3}\frac{dy}{|y|\sqrt{9y^2 - 1}}$ 

Average Values 

117. Find the average value of $f(x) = mx + b$ a.over $[-1,1]$ b.over $[-k,k]$ 

118. Find the average value of a. $y = \sqrt{3x}$ over [0, 3] b. $y = \sqrt{ax}$ over [0, a] 

119. Let $f$ be a function that is differentiable on $[a, b]$ . In Chapter 2 we defined the average rate of change of $f$ over $[a, b]$ to be 

$$
\frac {f (b) - f (a)}{b - a}
$$

and the instantaneous rate of change of f at x to be $f'(x)$ . In this chapter we defined the average value of a function. For the new definition of average to be consistent with the old one, we should have 

$$
\frac {f (b) - f (a)}{b - a} = \text { average   value   of } f ^ {\prime} \text { on } [ a, b ].
$$

Is this the case? Give reasons for your answer. 

120. Is it true that the average value of an integrable function over an interval of length 2 is half the function's integral over the interval? Give reasons for your answer. 

121. a. Verify that $\int \ln x dx = x \ln x - x + C$ . 

b. Find the average value of $\ln x$ over [1, e]. 

122. Find the average value of $f(x) = 1/x$ on [1, 2]. 

T 123. Compute the average value of the temperature function 

$$
f (x) = 2 0 \sin \left(\frac {2 \pi}{3 6 5} (x - 1 0 1)\right) - 4
$$

for a 365-day year. (See Exercise 98, Section 3.6.) This is one way to estimate the annual mean air temperature in Fairbanks, Alaska. The National Weather Service's official figure, a numerical average of the daily normal mean air temperatures for the year, is $-3.5^{\circ}\mathrm{C}$ , which is slightly higher than the average value of $f(x)$ . 

T 124. Specific heat of a gas Specific heat $C_v$ is the amount of heat required to raise the temperature of one mole (gram molecule) of a gas with constant volume by $1^\circ\text{C}$ . The specific heat of oxygen depends on its temperature $T$ and satisfies the formula 

$$
C _ {v} = 8. 2 7 + 1 0 ^ {- 5} (2 6 T - 1. 8 7 T ^ {2}).
$$

Find the average value of $C_{v}$ for $20^{\circ}C \leq T \leq 675^{\circ}C$ and the temperature at which it is attained. 

## Differentiating Integrals

In Exercises 125–132, find dy/dx. 

$$
\mathbf {1 2 5 .} y = \int_ {2} ^ {x} \sqrt {2 + \cos^ {3} t} d t \quad \mathbf {1 2 6 .} y = \int_ {2} ^ {7 x ^ {2}} \sqrt {2 + \cos^ {3} t} d t
$$

127. $y = \int_{x}^{1}\frac{6}{3 + t^{4}} dt$ 

128. $y = \int_{\sec x}^{2}\frac{1}{t^2 + 1} dt$ 

129. $y = \int_{\ln x^2}^{0}e^{\cos t}dt$ 

130. $y = \int_{1}^{e\sqrt{x}}\ln (t^{2} + 1)dt$ 

131. $y = \int_{0}^{\sin^{-1}x}\frac{dt}{\sqrt{1 - 2t^{2}}}$ 

$$
\mathbf {1 3 2 .} y = \int_ {\tan^ {- 1} x} ^ {\pi / 4} e ^ {\sqrt {t}} d t
$$

## Theory and Examples

## Additional and Advanced Exercises

1. a. If $\int_0^1 7f(x)dx = 7$ , does $\int_0^1 f(x)dx = 1?$ 

b. If $\int_0^1 f(x)dx = 4$ and $f(x)\geq 0$ , does 

$$
\int_ {0} ^ {1} \sqrt {f (x)} d x = \sqrt {4} = 2?
$$

Give reasons for your answers. 

## CHAPTER 5

## Theory and Examples

133. Is it true that every function $y = f(x)$ that is differentiable on $[a, b]$ is itself the derivative of some function on $[a, b]$ ? Give reasons for your answer. 

134. Suppose that $f(x)$ is an antiderivative of $f(x) = \sqrt{1 + x^4}$ . Express $\int_0^1\sqrt{1 + x^4} dx$ in terms of $F$ and give a reason for your answer. 

135. Find $dy / dx$ if $y = \int_{x}^{1}\sqrt{1 + t^2} dt$ . Explain the main steps in your calculation. 

138. Skydivers A and B are in a helicopter hovering at $2000\mathrm{m}$ . Skydiver A jumps and descends for 4 s before opening her parachute. The helicopter then climbs to $2200\mathrm{m}$ and hovers there. Forty-five seconds after A leaves the aircraft, B jumps and descends for 13 s before opening his parachute. Both skydivers descend at $4.9\mathrm{m / s}$ with parachutes open. Assume that the skydivers fall freely (no effective air resistance) before their parachutes open. 

136. Find $dy / dx$ if $y = \int_{\cos x}^{0}(1 / (1 - t^2))dt$ . Explain the main steps in your calculation. 

137. A new parking lot To meet the demand for parking, your town has allocated the area shown here. As the town engineer, you have been asked by the town council to find out if the lot can be built for $10,000. The cost to clear the land will be $1.00 a square meter, and the lot will cost $2.00 a square meter to pave. Can the job be done for $10,000? Use a lower sum estimate to see. (Answers may vary slightly, depending on the estimate used.) 

![[fde80b3438acac58c5b215209d3eff59d4ea3910714cdfb568883f13cc36c7f5.jpg|image]]


b. At what altitude does B's parachute open? 

a. At what altitude does A's parachute open? 

c. Which skydiver lands first? 

2. Suppose $\int_{-2}^{2} f(x) dx = 4$ , $\int_{2}^{5} f(x) dx = 3$ , $\int_{-2}^{5} g(x) dx = 2$ . 

Which, if any, of the following statements are true? 

a. $\int_{5}^{2}f(x)dx = -3$ b. $\int_{-2}^{5}(f(x) + g(x))dx = 9$ 

c. $f(x) \leq g(x)$ on the interval $-2 \leq x \leq 5$ 

## 3. Initial value problem Show that

$$
y = \frac {1}{a} \int_ {0} ^ {x} f (t) \sin a (x - t) d t
$$

solves the initial value problem 

$$
\frac {d ^ {2} y}{d x ^ {2}} + a ^ {2} y = f (x), \quad \frac {d y}{d x} = 0 \text {   and   } y = 0 \text {   when   } x = 0.
$$

(Hint: $\sin (ax - at) = \sin ax\cos at - \cos ax\sin at.$ ) 

4. Proportionality Suppose that x and y are related by the equation 

$$
x = \int_ {0} ^ {y} \frac {1}{\sqrt {1 + 4 t ^ {2}}} d t.
$$

Show that $d^{2}y/dx^{2}$ is proportional to y, and find the constant of proportionality. 

5. Find $f(4)$ if 

$$
\mathbf {a}. \int_ {0} ^ {x ^ {2}} f (t) d t = x \cos \pi x \quad \mathbf {b}. \int_ {0} ^ {f (x)} t ^ {2} d t = x \cos \pi x.
$$

6. Find $f(\pi / 2)$ from the following information. 

i) $f$ is positive and continuous. 

ii) The area under the curve $y = f(x)$ from x = 0 to x = a is 

$$
\frac {a ^ {2}}{2} + \frac {a}{2} \sin a + \frac {\pi}{2} \cos a.
$$

7. The area of the region in the $xy$ -plane enclosed by the $x$ -axis, the curve $y = f(x)$ , $f(x) \geq 0$ , and the lines $x = 1$ and $x = b$ is equal to $\sqrt{b^2 + 1} - \sqrt{2}$ for all $b > 1$ . Find $f(x)$ . 

8. Prove that 

$$
\int_ {0} ^ {x} \left(\int_ {0} ^ {u} f (t) d t\right) d u = \int_ {0} ^ {x} f (u) (x - u) d u.
$$

(Hint: Express the integral on the right-hand side as the difference of two integrals. Then show that both sides of the equation have the same derivative with respect to x.) 

9. Finding a curve Find the equation for the curve in the $xy$ -plane that passes through the point $(1, -1)$ if its slope at $x$ is always $3x^{2} + 2$ . 

10. Shoveling dirt You sling a shovelful of dirt up from the bottom of a hole with an initial velocity of 9.8 m/s. The dirt must rise 5.2 m above the release point to clear the edge of the hole. Is that enough speed to get the dirt out, or had you better duck? 

## Piecewise Continuous Functions

Although we are mainly interested in continuous functions, many functions in applications are piecewise continuous. A function $f(x)$ is piecewise continuous on a closed interval I if f has only finitely many discontinuities in I, the limits 

$$
\lim _ {x \to c ^ {-}} f (x) \quad \text { and } \quad \lim _ {x \to c ^ {+}} f (x)
$$

exist and are finite at every interior point of I, and the appropriate one-sided limits exist and are finite at the endpoints of I. All piecewise continuous functions are integrable. The points of discontinuity subdivide I into open and half-open subintervals on which f is continuous, and the limit criteria above guarantee that f has a continuous extension to the closure of each subinterval. To integrate a piecewise continuous function, we integrate the individual extensions and add the results. The integral of 

$$
f (x) = \left\{ \begin{array}{l l} 1 - x, & - 1 \leq x <   0 \\ x ^ {2}, & 0 \leq x <   2 \\ - 1, & 2 \leq x \leq 3 \end{array} \right.\tag{15.}
$$

(Figure 5.33) over $[-1, 3]$ is 

$$
\begin{array}{r l} \int_ {- 1} ^ {3} f (x) d x & = \int_ {- 1} ^ {0} (1 - x) d x + \int_ {0} ^ {2} x ^ {2} d x + \int_ {2} ^ {3} (- 1) d x \\ & = \left[ x - \frac {x ^ {2}}{2} \right] _ {- 1} ^ {0} + \left[ \frac {x ^ {3}}{3} \right] _ {0} ^ {2} + \left[ - x \right] _ {2} ^ {3} \\ & = \frac {3}{2} + \frac {8}{3} - 1 = \frac {1 9}{6}. \end{array}\tag{16.}
$$

![[0f833f2ead52841de34d632fe8fa53906a6bcb4b0c863e38da94f03585e6f5f7.jpg|image]]



FIGURE 5.33 Piecewise continuous



functions like this are integrated piece by piece.


The Fundamental Theorem applies to piecewise continuous functions with the restriction that $(d/dx)\int_{a}^{x}f(t)dt$ is expected to equal $f(x)$ only at values of x at which f is continuous. There is a similar restriction on Leibniz's Rule (see Exercises 25–32). 

11. 

14. 

Graph the functions in Exercises 11–16 and integrate them over their domains. 

12. 

$$
f (x) = \left\{ \begin{array}{l l} x ^ {2 / 3}, & - 8 \leq x <   0 \\ - 4, & 0 \leq x \leq 3 \end{array} \right.\tag{13.}
$$

$$
f (x) = \left\{ \begin{array}{l l} \sqrt {- x}, & - 4 \leq x <   0 \\ x ^ {2} - 4, & 0 \leq x \leq 3 \end{array} \right.
$$

$$
g (t) = \left\{ \begin{array}{l l} t, & 0 \leq t <   1 \\ \sin \pi t, & 1 \leq t \leq 2 \end{array} \right.
$$

$$
h (z) = \left\{ \begin{array}{l l} \sqrt {1 - z}, & 0 \leq z <   1 \\ (7 z - 6) ^ {- 1 / 3}, & 1 \leq z \leq 2 \end{array} \right.
$$

$$
f (x) = \left\{ \begin{array}{l l} 1, & - 2 \leq x <   - 1 \\ 1 - x ^ {2}, & - 1 \leq x <   1 \\ 2, & 1 \leq x \leq 2 \end{array} \right.
$$

$$
h (r) = \left\{ \begin{array}{l l} r, & - 1 \leq r <   0 \\ 1 - r ^ {2}, & 0 \leq r <   1 \\ 1, & 1 \leq r \leq 2 \end{array} \right.
$$

17. Find the average value of the function graphed in the accompanying figure. 

![[f34c46c14c3e307c0c6081d305d663049259e1ece667baba6039a9c6a9922db6.jpg|image]]


18. Find the average value of the function graphed in the accompanying figure. 

![[8555bd02e63653f70229469da8cc2485bc54703b1962b32cfbbc4bc09ac70f50.jpg|image]]


Limits 

Find the limits in Exercises 19–22. 

19. $\lim_{b\to 1^{-}}\int_0^b\frac{dx}{\sqrt{1 - x^2}}$ 20. $\lim_{x\to \infty}\frac{1}{x}\int_0^x\arctan tdt$ 

21. $\lim_{n\to\infty}\left(\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{2n}\right)$ 

22. $\lim_{n\to\infty}\frac{1}{n}(e^{1/n}+e^{2/n}+\cdots+e^{(n-1)/n}+e^{n/n})$ 

Defining Functions Using the Fundamental Theorem 

23. A function defined by an integral The graph of a function $f$ consists of a semicircle and two line segments as shown. Let $g(x) = \int_{1}^{x} f(t) dt$ . 

![[d24dea760a1f5908430108abdf36b63c288e926f4b7128bb6151a31da84c7166.jpg|image]]


a. Find $g(1)$ . b. Find $g(3)$ . c. Find $g(-1)$ . 

d. Find all values of x on the open interval $(-3, 4)$ at which g has a relative maximum. 

e. Write an equation for the line tangent to the graph of g at x = -1. 

f. Find the $x$ -coordinate of each point of inflection of the graph of $g$ on the open interval $(-3, 4)$ . 

g. Find the range of g. 

24. A differential equation Show that both of the following conditions are satisfied by $y = \sin x + \int_{x}^{\pi} \cos 2t dt + 1$ : 

i) $y'' = -\sin x + 2 \sin 2x$ 

ii) $y = 1$ and $y' = -2$ when $x = \pi$ . 

Leibniz's Rule In applications, we sometimes encounter functions defined by integrals that have variable upper limits of integration and variable lower limits of integration at the same time. We can find the derivative of such an integral by a formula called Leibniz's Rule. 

## Leibniz's Rule

If $f$ is continuous on $[a, b]$ and if $u(x)$ and $v(x)$ are differentiable functions of $x$ whose values lie in $[a, b]$ , then 

$$
\frac {d}{d x} \int_ {u (x)} ^ {v (x)} f (t) d t = f (v (x)) \frac {d v}{d x} - f (u (x)) \frac {d u}{d x}.
$$

To prove the rule, let $F$ be an antiderivative of $f$ on $[a, b]$ . Then 

$$
\int_ {u (x)} ^ {v (x)} f (t) d t = F (v (x)) - F (u (x)).
$$

Differentiating both sides of this equation with respect to $x$ gives the equation we want: 

$$
\begin{array}{l} \frac {d}{d x} \int_ {u (x)} ^ {v (x)} f (t) d t = \frac {d}{d x} [ F (v (x)) - F (u (x)) ] \\ \qquad = F ^ {\prime} (v (x)) \frac {d v}{d x} - F ^ {\prime} (u (x)) \frac {d u}{d x} \quad \text { Chain   Rule } \\ \qquad = f (v (x)) \frac {d v}{d x} - f (u (x)) \frac {d u}{d x}. \end{array}
$$

Use Leibniz's Rule to find the derivatives of the functions in Exercises 25-32. 

25. $f(x) = \int_{1 / x}^{x}\frac{1}{t} dt$ 

26. $f(x) = \int_{\cos x}^{\sin x}\frac{1}{1 - t^2} dt$ 

27. $g(y) = \int_{\sqrt{y}}^{2\sqrt{y}}\sin t^2 dt$ 

28. $g(y) = \int_{\sqrt{y}}^{y^2}\frac{e^t}{t} dt$ 

29. $y = \int_{x^2 /2}^{x^2}\ln \sqrt{t} dt$ 

30. $y = \int_{\sqrt{x}}^{\sqrt[3]{x}}\ln tdt$ 

31. $y = \int_0^{\ln x}\sin e^t dt$ 

32. $y = \int_{e^{4\sqrt{x}}}^{e^{2x}}\ln tdt$ 

Theory and Examples 

33. Use Leibniz's Rule to find the value of $x$ that maximizes the value of the integral 

$$
\int_ {x} ^ {x + 3} t (5 - t) d t.
$$

34. For what x > 0 does $x^{(x^{x})} = (x^{x})^{x}$ ? Give reasons for your answer. 

35. For the two curves $y = 2(\log_2 x) / x$ and $y = 2(\log_4 x) / x$ : a. Find the area between the first curve and the $x$ -axis from $x = 1$ to $x = e$ . 

b. Find the area between the second curve and the $x$ -axis from $x = 1$ to $x = e$ . 

c. Consider the two areas obtained in parts (a) and (b). What is the ratio of the larger area to the smaller? 

36. a. Find $df / dx$ if 

$$
f (x) = \int_ {1} ^ {e ^ {x}} \frac {2 \ln t}{t} d t.
$$

b. Find $f(0)$ . 

c. What can you conclude about the graph of $f$ ? Give reasons for your answer. 

37. Find $f'(2)$ if $f(x) = e^{g(x)}$ and $g(x) = \int_{2}^{x} \frac{t}{1 + t^4} dt$ . 

38. Use the accompanying figure to show that 

![[8b0b2665e203a53f8b12739ced787dfd509b5e1a1c71625b3fd719fea3495a7b.jpg|image]]


39. Napier's inequality Here are two pictorial proofs that 

$$
b > a > 0 \Rightarrow \frac {1}{b} <   \frac {\ln b - \ln a}{b - a} <   \frac {1}{a}.
$$

Explain what is going on in each case. 

![[ecdecd83431863deaaeebfaae54c157dd61a2a56d4a23c4c92dc602c2c0fd4b0.jpg|image]]



b.


![[4f95af508c7e4266c6505399cd3f1786c0a09d7727e926e9fd4bd0d4bb0a8386.jpg|image]]


(Source: Roger B. Nelson, College Mathematics Journal, Vol. 24, No. 2, March 1993, p. 165.) 

40. Bound on an integral Let f be a continuously differentiable function on $[a, b]$ satisfying $\int_{a}^{b} f(x) dx = 0$ . 

a. If $c = (a + b) / 2$ , show that 

$$
\int_ {a} ^ {b} x f (x) d x = \int_ {a} ^ {c} (x - c) f (x) d x + \int_ {c} ^ {b} (x - c) f (x) d x.
$$

b. Let $t = |x - c|$ and $\ell = (b - a) / 2$ . Show that 

$$
\int_ {a} ^ {b} x f (x) d x = \int_ {0} ^ {\ell} t \bigl (f (c + t) - f (c - t) \bigr) d t.
$$

c. Apply the Mean Value Theorem from Section 4.2 to part (b) to prove that 

$$
\left| \int_ {a} ^ {b} x f (x) d x \right| \leq \frac {(b - a) ^ {3}}{1 2} M,
$$

where M is the absolute maximum of $f'$ on [a, b]. 

Approximating Finite Sums with Integrals 

In many applications of calculus, integrals are used to approximate finite sums—the reverse of the usual procedure of using finite sums to approximate integrals. 

For example, let's estimate the sum of the square roots of the first $n$ positive integers, $\sqrt{1} + \sqrt{2} + \cdots + \sqrt{n}$ . The integral 

$$
\int_ {0} ^ {1} \sqrt {x} d x = \left. \frac {2}{3} x ^ {3 / 2} \right] _ {0} ^ {1} = \frac {2}{3}
$$

is the limit of the upper sums 

$$
\begin{array}{r l} S _ {n} & = \sqrt {\frac {1}{n}} \cdot \frac {1}{n} + \sqrt {\frac {2}{n}} \cdot \frac {1}{n} + \dots + \sqrt {\frac {n}{n}} \cdot \frac {1}{n} \\ & = \frac {\sqrt {1} + \sqrt {2} + \cdots + \sqrt {n}}{n ^ {3 / 2}}. \end{array}
$$

![[a815a4e624006a2ea2f19d45545b4734ad98aa1065f19ecd466a646e97b0f457.jpg|image]]


Therefore, when n is large, $S_{n}$ will be close to 2/3 and we will have 

$$
\text { Root   sum } = \sqrt {1} + \sqrt {2} + \dots + \sqrt {n} = S _ {n} \cdot n ^ {3 / 2} \approx \frac {2}{3} n ^ {3 / 2}.
$$

The following table shows how good the approximation can be. 

<table><tr><td>n</td><td>Root sum</td><td><eq>(2/3)n^{3/2}</eq></td><td>Relative error</td></tr><tr><td>10</td><td>22.468</td><td>21.082</td><td>1.386/22.468 ≈ 6%</td></tr><tr><td>50</td><td>239.04</td><td>235.70</td><td>1.4%</td></tr><tr><td>100</td><td>671.46</td><td>666.67</td><td>0.7%</td></tr><tr><td>1000</td><td>21,097</td><td>21,082</td><td>0.07%</td></tr></table>

41. Evaluate 

$$
\lim _ {n \rightarrow \infty} \frac {1 ^ {5} + 2 ^ {5} + 3 ^ {5} + \cdots + n ^ {5}}{n ^ {6}}
$$

by showing that the limit is 

$$
\int_ {0} ^ {1} x ^ {5} d x
$$

and evaluating the integral. 

42. See Exercise 41. Evaluate 

$$
\lim _ {n \rightarrow \infty} \frac {1}{n ^ {4}} (1 ^ {3} + 2 ^ {3} + 3 ^ {3} + \dots + n ^ {3}).
$$

43. Let $f(x)$ be a continuous function. Express 

$$
\lim _ {n \rightarrow \infty} \frac {1}{n} \left[ f \left(\frac {1}{n}\right) + f \left(\frac {2}{n}\right) + \dots + f \left(\frac {n}{n}\right)\right]
$$

as a definite integral. 

44. Use the result of Exercise 43 to evaluate 

$$
\mathbf {a}. \lim _ {n \rightarrow \infty} \frac {1}{n ^ {2}} (2 + 4 + 6 + \dots + 2 n),
$$

b. $\lim_{n\to\infty}\frac{1}{n^{16}}(1^{15}+2^{15}+3^{15}+\cdots+n^{15})$ , 

$$
\mathbf {c}. \lim _ {n \rightarrow \infty} \frac {1}{n} \left(\sin \frac {\pi}{n} + \sin \frac {2 \pi}{n} + \sin \frac {3 \pi}{n} + \dots + \sin \frac {n \pi}{n}\right).
$$

What can be said about the following limits? 

d. $\lim_{n\to\infty}\frac{1}{n^{17}}(1^{15}+2^{15}+3^{15}+\cdots+n^{15})$ 

e. $\lim_{n\to\infty}\frac{1}{n^{15}}(1^{15}+2^{15}+3^{15}+\cdots+n^{15})$ 

45. a. Show that the area $A_{n}$ of an $n$ -sided regular polygon in a circle of radius $r$ is 

$$
A _ {n} = \frac {n r ^ {2}}{2} \sin \frac {2 \pi}{n}.
$$

b. Find the limit of $A_{n}$ as $n \to \infty$ . Is this answer consistent with what you know about the area of a circle? 

46. Let 

$$
S _ {n} = \frac {1 ^ {2}}{n ^ {3}} + \frac {2 ^ {2}}{n ^ {3}} + \dots + \frac {(n - 1) ^ {2}}{n ^ {3}}.
$$

To calculate $\lim_{n\to \infty}S_n$ , show that 

$$
S _ {n} = \frac {1}{n} \left[ \left(\frac {1}{n}\right) ^ {2} + \left(\frac {2}{n}\right) ^ {2} + \dots + \left(\frac {n - 1}{n}\right) ^ {2} \right]
$$

and interpret $S_{n}$ as an approximating sum of the integral 

$$
\int_ {0} ^ {1} x ^ {2} d x.
$$

(Hint: Partition $[0,1]$ into n intervals of equal length and write out the approximating sum for inscribed rectangles.) 

## CHAPTER 5 Technology Application Projects

## Mathematica/Maple Projects

Projects can be found within MyLab Math. 

- Using Riemann Sums to Estimate Areas, Volumes, and Lengths of Curves Visualize and approximate areas and volumes in Part I. 

- Riemann Sums, Definite Integrals, and the Fundamental Theorem of Calculus
Parts I, II, and III develop Riemann sums and definite integrals. Part IV continues the development of the Riemann sum and definite integral using the Fundamental Theorem to solve problems previously investigated. 

## • Rain Catchers, Elevators, and Rockets

Part I illustrates that the area under a curve is the same as the area of an appropriate rectangle for examples taken from the chapter. You will compute the amount of water accumulating in basins of different shapes as the basin is filled and drained. 

## • Motion Along a Straight Line, Part II

You will observe the shape of a graph through dramatic animated visualizations of the derivative relations among position, velocity, and acceleration. Figures in the text can be animated using this software. 

## - Bending of Beams

Study bent shapes of beams, determine their maximum deflections, concavity, and inflection points, and interpret the results in terms of a beam's compression and tension. 

![[fa04963133209e8f02728cf2253484d1fc8b2ef9dff544c805b247c98398b69c.jpg|image]]


# Applications of Definite Integrals

![[792f7d1d8f92580fe01bd553d56af3abfc4ae72a7f2e54ddf23224778e1d533c.jpg|image]]


OVERVIEW In Chapter 5 we saw that a continuous function over a closed interval has a definite integral, which is the limit of Riemann sum approximations for the function. We found a way to evaluate definite integrals using the Fundamental Theorem of Calculus. We saw that the area under a curve and the area between two curves could be defined and computed as definite integrals. In this chapter we will see some of the many additional applications of definite integrals. We will use the definite integral to define and find volumes, lengths of plane curves, and areas of surfaces of revolution. We will see how integrals are used to solve physical problems involving the work done by a force, and how they give the location of an object's center of mass. The integral arises in these and other applications in which we can approximate a desired quantity by Riemann sums. The limit of those Riemann sums, which is the quantity we seek, is given by a definite integral.
