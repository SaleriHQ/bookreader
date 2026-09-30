---
title: "Chapter 9: Infinite Sequences and Series"
order: 9
---

# Chapter 9: Infinite Sequences and Series

<!-- Extracted from Thomas-calculus Markdown source; chapters 1-17 only. -->

## 9.1 Sequences

HISTORICAL ESSAY 

Sequences and Series
To read this essay, visit the companion Website. 

Sequences are fundamental to the study of infinite series and to many aspects of mathematics. We saw one example of a sequence when we studied Newton's Method in Section 4.7. Newton's Method produces a sequence of approximations $x_{n}$ that become closer and closer to the root of a differentiable function. Now we will explore general sequences of numbers and the conditions under which they converge to a finite number. 

## Representing Sequences

A sequence is a list of numbers 

$$
a _ {1}, a _ {2}, a _ {3}, \dots , a _ {n}, \dots
$$

in a given order. Each of $a_1, a_2, a_3$ , and so on represents a number. These are the terms of the sequence. For example, the sequence 

$$
2, 4, 6, 8, 1 0, 1 2, \dots , 2 n, \dots
$$

has first term $a_{1} = 2$ , second term $a_{2} = 4$ , and nth term $a_{n} = 2n$ . The integer n is called the index of $a_{n}$ and indicates where $a_{n}$ occurs in the list. Order is important. The sequence 2, 4, 6, 8 … is not the same as the sequence 4, 2, 6, 8 … 

We can think of the sequence 

$$
a _ {1}, a _ {2}, a _ {3}, \dots , a _ {n}, \dots
$$

as a function that sends 1 to $a_{1}$ , 2 to $a_{2}$ , 3 to $a_{3}$ , and in general sends the positive integer n to the nth term $a_{n}$ . More precisely, an infinite sequence of numbers is a function whose domain is the set of positive integers. For example, the function associated with the sequence 

$$
2, 4, 6, 8, 1 0, 1 2, \dots , 2 n, \dots
$$

sends 1 to $a_1 = 2, 2$ to $a_2 = 4$ , and so on. The general behavior of this sequence is described by the formula $a_n = 2n$ . 

We can change the index to start at any given number n. For example, the sequence 

$$
\begin{array}{l} 1 2, 1 4, 1 6, 1 8, 2 0, 2 2 \dots \end{array}
$$

is described by the formula $a_{n} = 10 + 2n$ , if we start with n = 1. It can also be described by the simpler formula $b_{n} = 2n$ , where the index n starts at 6 and increases. To allow such simpler formulas, we let the first index of the sequence be any appropriate integer. In the sequence above, $\{a_{n}\}$ starts with $a_{1}$ while $\{b_{n}\}$ starts with $b_{6}$ . 

Sequences can be described by writing rules that specify their terms, such as 

$$
a _ {n} = \sqrt {n}, \quad b _ {n} = (- 1) ^ {n + 1} \frac {1}{n}, \quad c _ {n} = \frac {n - 1}{n}, \quad d _ {n} = (- 1) ^ {n + 1},
$$

or by listing terms: 

$$
\left\{a _ {n} \right\} = \left\{\sqrt {1}, \sqrt {2}, \sqrt {3}, \dots , \sqrt {n}, \dots \right\}
$$

$$
\left\{b _ {n} \right\} = \left\{1, - \frac {1}{2}, \frac {1}{3}, - \frac {1}{4}, \dots , (- 1) ^ {n + 1} \frac {1}{n}, \dots \right\}
$$

$$
\{c _ {n} \} = \left\{0, \frac {1}{2}, \frac {2}{3}, \frac {3}{4}, \frac {4}{5}, \dots , \frac {n - 1}{n}, \dots \right\}
$$

$$
\left\{d _ {n} \right\} = \left\{1, - 1, 1, - 1, 1, - 1, \dots , (- 1) ^ {n + 1}, \dots \right\}.
$$

We also sometimes write a sequence using its rule, as with 

$$
\{a _ {n} \} = \left\{\sqrt {n} \right\} _ {n = 1} ^ {\infty}
$$

and 

$$
\left\{b _ {n} \right\} = \left\{(- 1) ^ {n + 1} \frac {1}{n} \right\} _ {n = 1} ^ {\infty}.
$$

Figure 9.1 shows two ways to represent sequences graphically. The first marks the first few points from $a_1, a_2, a_3, \ldots, a_n, \ldots$ on the real axis. The second method shows the graph of the function defining the sequence. The function is defined only on integer inputs, and the graph consists of some points in the $xy$ -plane located at $(1, a_1), (2, a_2), \ldots, (n, a_n), \ldots$ 

![[abdc7c2e8d756182ef04240ddef1d65997a0626d02ffa8a6f848cd97ef79f444.jpg|image]]



FIGURE 9.2 In the representation of a sequence as points in the plane, $a_{n} \to L$ if $y = L$ is a horizontal asymptote of the sequence of points $\{(n, a_{n})\}$ . In this figure, all the $a_{n}$ 's after $a_{N}$ lie within $\varepsilon$ of $L$ .


## HISTORICAL BIOGRAPHY

## Nicole Oresme

## (ca. 1320–1382)

Frenchman Oresme went to the University of Paris in the 1340s, studying theology and liberal arts. Later he was a faculty member and administrator at the same university. His work entitled De configurationibus (1350s) contained results in geometry and was the first to present graphs of velocities. The argument we use to show the divergence of the harmonic series was devised by Oresme in this publication. 

To know more, visit the companion Website. 

![[c8229549a06b4ac339349b192340b6e02262b31984ca51fa73b0ffaa89cd0620.jpg|image]]



FIGURE 9.1 Sequences can be represented as points on the real line or as points in the plane where the horizontal axis n is the index number of the term and the vertical axis $a_{n}$ is its value.


## Convergence and Divergence

Sometimes the numbers in a sequence approach a single value as the index $n$ increases. This happens in the sequence 

$$
\left\{1, \frac {1}{2}, \frac {1}{3}, \frac {1}{4}, \dots , \frac {1}{n}, \dots \right\},
$$

whose terms approach 0 as n gets large, and in the sequence 

$$
\left\{0, \frac {1}{2}, \frac {2}{3}, \frac {3}{4}, \frac {4}{5}, \dots , 1 - \frac {1}{n}, \dots \right\},
$$

whose terms approach 1. On the other hand, sequences like 

$$
\left\{\sqrt {1}, \sqrt {2}, \sqrt {3}, \dots , \sqrt {n}, \dots \right\}
$$

have terms that get larger than any number as n increases, and sequences like 

$$
\left\{1, - 1, 1, - 1, 1, - 1, \dots , (- 1) ^ {n + 1}, \dots \right\}
$$

bounce back and forth between 1 and -1, never converging to a single value. The following definition captures the meaning of having a sequence converge to a limiting value. It says that if we specify any number $\varepsilon > 0$ , then by going far enough out in the sequence, taking the index $n$ to be larger than some value $N$ , the difference between $a_{n}$ and the limit of the sequence becomes less than $\varepsilon$ . 

> ***DEFINITIONS*** The sequence $\{a_{n}\}$ converges to the number $L$ if for every positive number $\varepsilon$ there corresponds an integer $N$ such that 
>
> $$
> \left| a _ {n} - L \right| <   \varepsilon \quad \text { whenever } \quad n > N.
> $$
>
> If no such number $L$ exists, we say that $\{a_n\}$ diverges. 
>
> If $\{a_{n}\}$ converges to $L$ , we write $\lim_{n\to \infty}a_n = L$ , or simply $a_{n}\rightarrow L$ , and call $L$ the limit of the sequence (Figure 9.2). 
>
The definition is very similar to the definition of $\lim_{x\to\infty}f(x)$ , the limit of a function $f(x)$ as x tends to $\infty$ , discussed in Section 2.5. We will exploit this connection to calculate limits of sequences. 

## **EXAMPLE 1** Show that

$$
\text {(a)} \lim _ {n \rightarrow \infty} \frac {1}{n} = 0 \quad \text {(b)} \lim _ {n \rightarrow \infty} k = k \quad \text {(where k is a constant)}
$$

**Solution** 

(a) Let $\varepsilon > 0$ be given. We must show that there exists an integer N such that 

$$
\left| \frac {1}{n} - 0 \right| <   \varepsilon \quad \text { whenever } \quad n > N.
$$


FIGURE 9.3 (a) The sequence diverges to $\infty$ because no matter what number M is chosen, the terms of the sequence after some index N all lie in the yellow band above M. (b) The sequence diverges to $-\infty$ because all terms after some index N lie below any chosen number m.



(b)


The inequality $|1 / n - 0| < \varepsilon$ will hold if $1 / n < \varepsilon$ or $n > 1 / \varepsilon$ . If $N$ is any integer greater than $1 / \varepsilon$ , the inequality will hold for all $n > N$ . This proves that $\lim_{n\to \infty}1 / n = 0$ . 

(b) Let $k$ be a constant, and let $\varepsilon > 0$ be given. We must show that there exists an integer $N$ such that 

$$
| k - k | <   \varepsilon \quad \text { whenever } \quad n > N.
$$

Since $k - k = 0$ , we can use any positive integer for $N$ and the inequality $|k - k| < \varepsilon$ will hold. This proves that $\lim k = k$ . 

![[08871ae2e6d156969955a5106af42bb06b333ba62455dee4b520948d867d032c.jpg|image]]


**EXAMPLE 2** Show that the sequence $\{1,-1,1,-1,1,-1,\ldots,(-1)^{n+1},\ldots\}$ diverges. 


(a)


**Solution** Since the terms in this sequence alternate between 1 and -1, our intuition is that they cannot approach arbitrarily close to some single limit L. To prove this, suppose that there did exist a number L that is the limit of this sequence. The definition of convergence then tells us that for every number $\varepsilon > 0$ , there is an integer N such that $|a_{n} - L| < \varepsilon$ for all n > N. No matter what positive number $\varepsilon$ we consider, such an integer N must exist. In particular, for the number $\varepsilon = 1/2$ , there must exist some integer N such that $|a_{n} - L| < 1/2$ for all n > N. If n > N is odd, then $a_{n} = 1$ , so we have $|1 - L| < 1/2$ , or 

$$
\frac {1}{2} <   L <   \frac {3}{2}.
$$

![[557343414dedd0369f8a92bd088f871e7f1534e9f2fe8c4c97aabb4a79ca915e.jpg|image]]


On the other hand, if $n > N$ is even, then $a_{n} = -1$ , and so we have $|-1 - L| < 1/2$ , or 

$$
- \frac {3}{2} <   L <   - \frac {1}{2}.
$$

However, these two conditions on L cannot both hold, so we have reached a contradiction. Therefore there is no number L to which this sequence converges. 

We chose $\varepsilon = 1/2$ in this argument simply for convenience. The same argument would work if we had instead chosen $\varepsilon = 1/4$ , or any value less than 1. 

The sequence $\{\sqrt{n}\}$ also diverges, but for a different reason. As n increases, its terms become larger than any fixed number. We describe the behavior of this sequence by writing 

$$
\lim _ {n \to \infty} \sqrt {n} = \infty .
$$

In writing infinity as the limit of a sequence, we are not saying that the differences between the terms $a_{n}$ and $\infty$ become small as n increases, nor are we asserting that there is some number infinity that the sequence approaches. We are merely using a notation that captures the idea that $a_{n}$ eventually gets and stays larger than any fixed number as n gets large (see Figure 9.3a). The terms of a sequence might also decrease to negative infinity, as in Figure 9.3b. 

> ***DEFINITION*** The sequence $\{a_{n}\}$ diverges to infinity if for every number M there is an integer N such that for all n larger than N, $a_{n} > M$ . If this condition holds, then we write 
>
> $$
> \lim _ {n \to \infty} a _ {n} = \infty \quad \text { or } \quad a _ {n} \to \infty .
> $$
>
Similarly, if for every number m there is an integer N such that for all n > N, we have $a_{n} < m$ , then we say $\{a_{n}\}$ diverges to negative infinity and write 

$$
\lim _ {n \rightarrow \infty} a _ {n} = - \infty \quad \text { or } \quad a _ {n} \rightarrow - \infty .
$$

A sequence may diverge without diverging to infinity or negative infinity, as we saw in Example 2. The sequences $\{1,-2,3,-4,5,-6,7,-8,\ldots\}$ and $\{1,0,2,0,3,0,\ldots\}$ are also sequences that diverge but do not diverge to infinity or negative infinity. 

The convergence or divergence of a sequence is not affected by the values of any number of its initial terms (whether we omit or change the first 10, the first 1000, or even the first million terms does not matter). From Figure 9.2, we can see that only the part of the sequence that remains after discarding some initial number of terms determines whether the sequence has a limit and the value of that limit when it does exist. 

## Calculating Limits of Sequences

Since sequences are functions with domain restricted to the positive integers, it is not surprising that the theorems on limits of functions given in Chapter 2 have versions for sequences. 

THEOREM 1 Let $\{a_{n}\}$ and $\{b_{n}\}$ be sequences of real numbers, and let $A$ and $B$ be real numbers. The following rules hold if $\lim_{n\to \infty}a_n = A$ and $\lim_{n\to \infty}b_n = B$ . 

1. Sum Rule: 

$$
\lim _ {n \rightarrow \infty} (a _ {n} + b _ {n}) = A + B
$$

2. Difference Rule: 

$$
\lim _ {n \to \infty} (a _ {n} - b _ {n}) = A - B
$$

3. Constant Multiple Rule: 

$\lim_{n\to \infty}(k\cdot b_n) = k\cdot B$ (any number $k$ ) 

4. Product Rule: 

$$
\lim _ {n \to \infty} (a _ {n} \cdot b _ {n}) = A \cdot B
$$

5. Quotient Rule: 

$$
\lim _ {n \rightarrow \infty} \frac {a _ {n}}{b _ {n}} = \frac {A}{B} \quad \text { if } B \neq 0
$$

The proof is similar to that of Theorem 1 in Section 2.2 and is omitted. 

**EXAMPLE 3** By combining Theorem 1 with the limits of Example 1, we have: 

(a) $\lim_{n\to \infty}\left(-\frac{1}{n}\right) = -1\cdot \lim_{n\to \infty}\frac{1}{n} = -1\cdot 0 = 0$ 

Constant Multiple Rule and Example 1a 

(b) $\lim_{n\to\infty}\left(\frac{n-1}{n}\right)=\lim_{n\to\infty}\left(1-\frac{1}{n}\right)=\lim_{n\to\infty}1-\lim_{n\to\infty}\frac{1}{n}=1-0=1$ Difference Rule and Example 1a 

(c) $\lim_{n\to \infty}\frac{5}{n^2} = 5\cdot \lim_{n\to \infty}\frac{1}{n}\cdot \lim_{n\to \infty}\frac{1}{n} = 5\cdot 0\cdot 0 = 0$ 

Product Rule 

(d) $\lim_{n\to \infty}\frac{4 - 7n^6}{n^6 + 3} = \lim_{n\to \infty}\frac{(4 / n^6) - 7}{1 + (3 / n^6)} = \frac{0 - 7}{1 + 0} = -7.$ Divide numerator and denominator by $n^6$ and use the Sum and Quotient Rules. 

![[0b03750043ff052b620ccc62b72536d9a641b096ee0ee86ebe1d079f094c409e.jpg|image]]



FIGURE 9.4 The terms of sequence $\{b_{n}\}$ are sandwiched between those of $\{a_{n}\}$ and $\{c_{n}\}$ , forcing them to the same common limit L.


![[30dd2255ecc9f8ffc4e05f3d3e2d502f0e36b04975f840388dab54d6927476d5.jpg|image]]



FIGURE 9.5 As $n \to \infty, 1/n \to 0$ and $2^{1/n} \to 2^0$ (Example 6). The terms of $\{1/n\}$ are shown on the $x$ -axis; the terms of $\{2^{1/n}\}$ are shown as the $y$ -values on the graph of $f(x) = 2^x$ .


Be cautious in applying Theorem 1. It does not say, for example, that both of the sequences $\{a_n\}$ and $\{b_n\}$ have limits if their sum $\{a_n + b_n\}$ has a limit. For instance, $\{a_n\} = \{1,2,3,\ldots\}$ and $\{b_n\} = \{-1, - 2, - 3,\ldots\}$ both diverge, but their sum $\{a_n + b_n\} = \{0,0,0,\ldots\}$ clearly converges to 0. 

One consequence of Theorem 1 is that every nonzero multiple of a divergent sequence $\{a_{n}\}$ diverges. Suppose, to the contrary, that $\{ca_{n}\}$ converges for some number $c \neq 0$ . Then, by taking $k = 1/c$ in the Constant Multiple Rule in Theorem 1, we see that the sequence 

$$
\left\{\frac {1}{c} \cdot c a _ {n} \right\} = \left\{a _ {n} \right\}
$$

converges. Thus, $\{ca_{n}\}$ cannot converge unless $\{a_{n}\}$ also converges. If $\{a_{n}\}$ does not converge, then $\{ca_{n}\}$ does not converge. 

The next theorem is the sequence version of the Sandwich Theorem in Section 2.2. You are asked to prove the theorem in Exercise 119. (See Figure 9.4.) 

THEOREM 2—The Sandwich Theorem for Sequences
Let $\{a_n\}, \{b_n\}$ , and $\{c_n\}$ be sequences of real numbers. If $a_n \leq b_n \leq c_n$ holds for all n beyond some index N, and if $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L$ , then $\lim_{n \to \infty} b_n = L$ also. 

An immediate consequence of Theorem 2 is that if $|b_n| \leq c_n$ and $c_n \to 0$ , then $b_n \to 0$ because $-c_n \leq b_n \leq c_n$ . We use this fact in the next example. 

## **EXAMPLE 4** Since $1 / n \to 0$ , we know that

(a) $\frac{\cos n}{n} \to 0$ 

because 

$$
- \frac {1}{n} \leq \frac {\cos n}{n} \leq \frac {1}{n};
$$

(b) $\frac{1}{2^n}\rightarrow 0$ 

because 

$$
0 \leq \frac {1}{2 ^ {n}} \leq \frac {1}{n};
$$

(c) $(-1)^{n}\frac{1}{n}\rightarrow 0$ 

because 

$$
- \frac {1}{n} \leq (- 1) ^ {n} \frac {1}{n} \leq \frac {1}{n}.
$$

(d) If $|a_{n}| \to 0$ , then $a_{n} \to 0$ 

because 

$$
- \left| a _ {n} \right| \leq a _ {n} \leq \left| a _ {n} \right|.
$$

The application of Theorems 1 and 2 is broadened by a theorem stating that applying a continuous function to a convergent sequence produces a convergent sequence. We state the theorem, leaving the proof as an exercise (Exercise 120). 

THEOREM 3—The Continuous Function Theorem for Sequences
Let $\{a_{n}\}$ be a sequence of real numbers. If $a_{n} \to L$ and if f is a function that is continuous at L and defined at all $a_{n}$ , then $f(a_{n}) \to f(L)$ . 

## **EXAMPLE 5** Show that $\sqrt{(n+1)/n} \rightarrow 1$ .

**Solution** We know that $(n+1)/n \rightarrow 1$ . Taking $f(x) = \sqrt{x}$ and L = 1 in Theorem 3 gives $\sqrt{(n+1)/n} \rightarrow \sqrt{1} = 1$ . 

**EXAMPLE 6** The sequence $\{1/n\}$ converges to 0. By taking $a_{n} = 1/n, f(x) = 2^{x}$ , and $L = 0$ in Theorem 3, we see that $2^{1/n} = f(1/n) \to f(L) = 2^{0} = 1$ . The sequence $\{2^{1/n}\}$ converges to 1 (Figure 9.5). 

## Using L'Hôpital's Rule

The next theorem formalizes the connection between $\lim_{n\to \infty}a_n$ and $\lim_{x\to \infty}f(x)$ . It enables us to use l'Hôpital's Rule to find the limits of some sequences. 

THEOREM 4 Suppose that $f(x)$ is a function defined for all $x \geq n_0$ and that $\{a_n\}$ is a sequence of real numbers such that $a_n = f(n)$ for $n \geq n_0$ . Then 

$$
\lim _ {n \to \infty} a _ {n} = L \quad \text { whenever } \quad \lim _ {x \to \infty} f (x) = L.
$$

Proof Suppose that $\lim_{x\to \infty}f(x) = L$ . Then for each positive number $\varepsilon$ , there is a number $M$ such that 

$$
| f (x) - L | <   \varepsilon \quad \text { whenever } \quad x > M.
$$

Let $N$ be an integer that is both greater than $M$ and greater than or equal to $n_0$ . Since $a_n = f(n)$ , it follows that for all $n > N$ , we have 

$$
\left| a _ {n} - L \right| = | f (n) - L | <   \varepsilon .
$$

**EXAMPLE 7** Show that 

$$
\lim _ {n \to \infty} \frac {\ln n}{n} = 0.
$$

**Solution** The function $(\ln x)/x$ is defined for all $x \geq 1$ and agrees with the given sequence at positive integers. Therefore, by Theorem 4, $\lim_{n \to \infty} (\ln n)/n$ will equal $\lim_{x \to \infty} (\ln x)/x$ if the latter exists. A single application of l'Hôpital's Rule shows that 

$$
\lim _ {x \rightarrow \infty} \frac {\ln x}{x} = \lim _ {x \rightarrow \infty} \frac {1 / x}{1} = \frac {0}{1} = 0.
$$

We conclude that $\lim_{n\to \infty}(\ln n) / n = 0$ 

**EXAMPLE 8** Does the sequence whose nth term is 

$$
a _ {n} = \left(\frac {n + 1}{n - 1}\right) ^ {n}, n \geq 2
$$

converge? If so, find $\lim_{n\to \infty}a_n$ 

**Solution** The function $f(x) = \left(\frac{x + 1}{x - 1}\right)^x$ is defined for all real numbers $x \geq 2$ and agrees with $a_n$ at all integers $n \geq 2$ . If we can show that $\lim_{x \to \infty} \left(\frac{x + 1}{x - 1}\right)^x = L$ , then by Theorem 4, $\lim_{n \to \infty} \left(\frac{n + 1}{n - 1}\right)^n = L$ . 

The limit $\lim_{x\to \infty}f(x)$ leads to the indeterminate form $1^{\infty}$ . To evaluate this limit, we apply l'Hôpital's Rule after taking the natural logarithm of $f(x)$ : 

$$
\ln f (x) = \ln \left(\frac {x + 1}{x - 1}\right) ^ {x} = x \ln \left(\frac {x + 1}{x - 1}\right).
$$

Then 

$$
\begin{array}{l l} \lim _ {x \to \infty} \ln f (x) = \lim _ {x \to \infty} x \ln \left(\frac {x + 1}{x - 1}\right) & \quad \infty \cdot 0 \text {   form } \\ = \lim _ {x \to \infty} \frac {\ln \left(\frac {x + 1}{x - 1}\right)}{1 / x} & \quad \frac {0}{0} \text {   form } \\ = \lim _ {x \to \infty} \frac {- 2 / (x ^ {2} - 1)}{- 1 / x ^ {2}} & \quad \text { Apply   I'Hôpital's   Rule. } \\ = \lim _ {x \to \infty} \frac {2 x ^ {2}}{x ^ {2} - 1} = 2. & \quad \text { Simplify   and   evaluate. } \end{array}
$$

Therefore, $\lim_{x\to\infty}\left(\frac{x+1}{x-1}\right)^{x}=\lim_{x\to\infty}f(x)=\lim_{x\to\infty}e^{\ln f(x)}=e^{2}$ . Applying Theorem 4, we conclude that the sequence $\{a_{n}\}$ also converges to $e^{2}$ . 

## Commonly Occurring Limits

The next theorem gives some limits that arise frequently. 

## Factorial Notation

The notation $n!$ (“n factorial”) means the product $1 \cdot 2 \cdot 3 \cdots n$ of the integers from 1 to n. Notice that $(n + 1)! = (n + 1) \cdot n!$ . Thus, $4! = 1 \cdot 2 \cdot 3 \cdot 4 = 24$ and $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 5 \cdot 4! = 120$ . 

We define 0! to be 1. Factorials grow even faster than exponentials, as the table suggests. The values in the table are rounded. 

THEOREM 5 The following six sequences converge to the limits listed below. 

1. $\lim_{n\to\infty}\frac{\ln n}{n}=0$ 

2. $\lim_{n\to \infty}\sqrt[n]{n} = 1$ 

3. $\lim_{n\to\infty}x^{1/n}=1\quad(x>0)$ 

4. $\lim_{n\to \infty}x^n = 0\quad (|x| <   1)$ 

5. $\lim_{n\to \infty}\left(1 + \frac{x}{n}\right)^n = e^x$ 

(any x) 

6. $\lim_{n\to \infty}\frac{x^n}{n!} = 0$ (any $x$ ) 

In Formulas (3) through (6), $x$ remains fixed as $n \to \infty$ . 

<table><tr><td>n</td><td><eq>e^n</eq></td><td>n!</td></tr><tr><td>1</td><td>3</td><td>1</td></tr><tr><td>5</td><td>148</td><td>120</td></tr><tr><td>10</td><td>22,026</td><td>3,628,800</td></tr><tr><td>20</td><td><eq>4.9 \times 10^8</eq></td><td><eq>2.4 \times 10^{18}</eq></td></tr></table>

Proof The first limit was computed in Example 7. The next two can be proved by taking logarithms and applying Theorem 4 (Exercises 117 and 118). The remaining proofs are given in Appendix A.6. 

**EXAMPLE 9** These are examples involving the limits in Theorem 5. 

(a) $\frac{\ln(n^2)}{n} = \frac{2\ln n}{n}\rightarrow 2\cdot 0 = 0$ 

Formula 1 

(b) $\sqrt[n]{n^2} = n^{2 / n} = (n^{1 / n})^2\to (1)^2 = 1$ Formula 2 

(c) $\sqrt[n]{3n} = 3^{1/n}(n^{1/n}) \to 1 \cdot 1 = 1$ 

Formula 3 with $x = 3$ and Formula 2 

(d) $\left(-\frac{1}{2}\right)^n \to 0$ 

Formula 4 with $x = -\frac{1}{2}$ 

(e) $\left(\frac{n - 2}{n}\right)^n = \left(1 + \frac{-2}{n}\right)^n \to e^{-2}$ 

Formula 5 with $x = -2$ 

(f) $\frac{100^n}{n!} \to 0$ 

Formula 6 with $x = 100$ 

## Recursive Definitions

So far, we have calculated each $a_{n}$ directly from the value of $n$ . But sequences are often defined recursively by giving 

1. The value(s) of the initial term or terms, and 

2. a rule called a recursion formula for calculating any later term from terms that precede it. 

## **EXAMPLE 10**

(a) The statements $a_1 = 1$ and $a_n = a_{n-1} + 1$ for $n > 1$ define the sequence $1, 2, 3, \ldots, n, \ldots$ of positive integers. With $a_1 = 1$ , we have $a_2 = a_1 + 1 = 2$ , $a_3 = a_2 + 1 = 3$ , and so on. 

(b) The statements $a_1 = 1$ and $a_n = n \cdot a_{n-1}$ for $n > 1$ define the sequence $1, 2, 6, 24, \ldots, n!$ , ... of factorials. With $a_1 = 1$ , we have $a_2 = 2 \cdot a_1 = 2$ , $a_3 = 3 \cdot a_2 = 6$ , $a_4 = 4 \cdot a_3 = 24$ , and so on. 

(c) The statements $a_1 = 1, a_2 = 1$ , and $a_{n+1} = a_n + a_{n-1}$ for $n > 2$ define the sequence $1, 1, 2, 3, 5, \ldots$ of Fibonacci numbers. With $a_1 = 1$ and $a_2 = 1$ , we have $a_3 = 1 + 1 = 2, a_4 = 2 + 1 = 3, a_5 = 3 + 2 = 5$ , and so on. 

(d) As we can see by applying Newton's method (see Exercise 145), the statements $x_0 = 1$ and $x_{n + 1} = x_n - [(\sin x_n - x_n^2) / (\cos x_n - 2x_n)]$ for $n > 0$ define a sequence that, when it converges, gives a solution to the equation $\sin x - x^2 = 0$ . 

## Bounded Monotonic Sequences

Two concepts that play a key role in determining the convergence of a sequence are those of a bounded sequence and a monotonic sequence. First we define bounded sequences. 

> ***DEFINITION*** A sequence $\{a_{n}\}$ is bounded from above if there exists a number M such that $a_{n} \leq M$ for all n. The number M is an upper bound for $\{a_{n}\}$ . If M is an upper bound for $\{a_{n}\}$ but no number less than M is an upper bound for $\{a_{n}\}$ , then M is the least upper bound for $\{a_{n}\}$ . 

A sequence $\{a_{n}\}$ is bounded from below if there exists a number m such that $a_{n} \geq m$ for all n. The number m is a lower bound for $\{a_{n}\}$ . If m is a lower bound for $\{a_{n}\}$ but no number greater than m is a lower bound for $\{a_{n}\}$ , then m is the greatest lower bound for $\{a_{n}\}$ . 

If $\{a_{n}\}$ is bounded from above and below, then $\{a_{n}\}$ is bounded. If $\{a_{n}\}$ is not bounded, then we say that $\{a_{n}\}$ is an unbounded sequence. 

## **EXAMPLE 11**

(a) The sequence 1, 2, 3, ..., n, ... has no upper bound because it eventually surpasses every number M. However, it is bounded below by every real number less than or equal to 1. The number m = 1 is the greatest lower bound of the sequence. 

(b) The sequence $\frac{1}{2},\frac{2}{3},\frac{3}{4},\ldots,\frac{n}{n+1},\ldots$ is bounded above by every real number greater than or equal to 1. The upper bound M = 1 is the least upper bound (Exercise 137). The sequence is also bounded below by every number less than or equal to $\frac{1}{2}$ , which is its greatest lower bound. 

Convergent sequences are bounded. 

Suppose that a sequence $\{a_{n}\}$ converges to a number L. Applying the definition of convergence with the particular value $\varepsilon = 1$ , there must exist a number N such that $|a_{n} - L| < 1$ if n > N. That is, 

$$
L - 1 <   a _ {n} <   L + 1 \quad \text { for } n > N.
$$

If M is a number larger than both $L + 1$ and all of the finitely many numbers $a_{1}, a_{2}, \ldots, a_{N}$ , then for every index n we have $a_{n} \leq M$ , and therefore $\{a_{n}\}$ is bounded from above. Similarly, if m is a number smaller than both L - 1 and all of the numbers $a_{1}, a_{2}, \ldots, a_{N}$ , then m is a lower bound for the sequence. Therefore, all convergent sequences are bounded. 

![[e54a8278b2ae052c8aa822ca57256e934c8c536f36670c64fdf45150e4ec7e4e.jpg|image]]


Although it is true that every convergent sequence is bounded, there are bounded sequences that fail to converge. One example is the bounded sequence $\left\{(-1)^{n+1}\right\}$ discussed in Example 2. The problem here is that some bounded sequences bounce around in the band determined by any lower bound m and any upper bound M but do not converge (Figure 9.6). An important type of sequence that does not behave that way is one for which each term is at least as large, or at least as small, as its predecessor. 


FIGURE 9.6 Some bounded sequences bounce around between their bounds and fail to converge to any limiting value.


> ***DEFINITIONS*** A sequence $\{a_{n}\}$ is nondecreasing if $a_{n} \leq a_{n+1}$ for all $n$ . That is, $a_{1} \leq a_{2} \leq a_{3} \leq \ldots$ . The sequence is nonincreasing if $a_{n} \geq a_{n+1}$ for all $n$ . The sequence $\{a_{n}\}$ is monotonic if it is either nondecreasing or nonincreasing. 

## **EXAMPLE 12**

(a) The sequence 1, 2, 3, ..., n, ... is nondecreasing. 

(b) The sequence $\frac{1}{2}$ , $\frac{2}{3}$ , $\frac{3}{4}$ , ..., $\frac{n}{n+1}$ , ... is nondecreasing. 

(c) The sequence $1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \ldots, \frac{1}{2^{n}}, \ldots$ is nonincreasing. 


FIGURE 9.7 If the terms of a nondecreasing sequence have an upper bound M, then they have a limit $L \leq M$ .


(d) The constant sequence 3, 3, 3, ..., 3, ... is both nondecreasing and nonincreasing. 

![[7f8e621b7fa97dd6ec5db6afc28c999a342019ccd9c9a6cafac335cfc7bdc6bf.jpg|image]]


(e) The sequence 1, -1, 1, -1, 1, -1, ... is not monotonic. 

A sequence that is bounded from above always has a least upper bound. Likewise, a sequence bounded from below always has a greatest lower bound. These results are based on the completeness property of the real numbers, discussed in Appendix A.9. We now prove that if L is the least upper bound of a nondecreasing sequence, then the sequence converges to L, and that if L is the greatest lower bound of a nonincreasing sequence, then the sequence converges to L. 

## THEOREM 6—The Monotonic Sequence Theorem

If a sequence $\{a_{n}\}$ is both bounded and monotonic, then the sequence converges. 

Proof Suppose $\{a_{n}\}$ is nondecreasing, L is its least upper bound, and we plot the points $(1, a_{1}), (2, a_{2}), \ldots, (n, a_{n}), \ldots$ in the xy-plane. If M is an upper bound of the sequence, all these points will lie on or below the line y = M (Figure 9.7). The line y = L is the lowest such line. None of the points $(n, a_{n})$ lies above y = L, but some do lie above any lower line y = L - $\varepsilon$ , if $\varepsilon$ is a positive number (because L - $\varepsilon$ is not an upper bound). That is, 

a. $a_{n}\leq L$ for all values of $n$ , and 

b. given any $\varepsilon > 0$ , there exists at least one integer N for which $a_{N} > L - \varepsilon$ . 

The fact that $\{a_{n}\}$ is nondecreasing tells us further that 

$$
a _ {n} \geq a _ {N} > L - \varepsilon \quad \text {   for   all   } n \geq N.
$$

Thus, all the numbers $a_{n}$ beyond the $N$ th number lie within $\varepsilon$ of $L$ . This is precisely the condition for $L$ to be the limit of the sequence $\{a_{n}\}$ . 

The proof for nonincreasing sequences bounded from below is similar. 

It is important to realize that Theorem 6 does not say that convergent sequences are monotonic. The sequence $\left\{(-1)^{n+1}/n\right\}$ converges and is bounded, but it is not monotonic since it alternates between positive and negative values as it tends toward zero. What the theorem does say is that a nondecreasing sequence converges when it is bounded from above, but it diverges to infinity otherwise. 

## EXERCISES

## 9.1

## Finding Terms of a Sequence

Each of Exercises 1–6 gives a formula for the nth term $a_{n}$ of a sequence $\{a_{n}\}$ . Find the values of $a_{1}, a_{2}, a_{3}$ , and $a_{4}$ . 

1. $a_{n} = \frac{1 - n}{n^{2}}$ 

$$
2. a _ {n} = \frac {1}{n !}
$$

3. $a_{n} = \frac{(-1)^{n + 1}}{2n - 1}$ 

$$
a _ {n} = 2 + (- 1) ^ {n}
$$

$$
5. a _ {n} = \frac {2 ^ {n}}{2 ^ {n + 1}}
$$

$$
6. a _ {n} = \frac {2 ^ {n} - 1}{2 ^ {n}}
$$

Each of Exercises 7–12 gives the first term or two of a sequence along with a recursion formula for the remaining terms. Write out the first ten terms of the sequence. 

$$
7. a _ {1} = 1, \quad a _ {n + 1} = a _ {n} + (1 / 2 ^ {n})
$$

$$
\mathbf {8 .} a _ {1} = 1, \quad a _ {n + 1} = a _ {n} / (n + 1)
$$

9. $a_1 = 2, a_{n + 1} = (-1)^{n + 1}a_n / 2$ 

10. $a_1 = -2, a_{n+1} = na_n / (n + 1)$ 

41. $a_{n} = \left(\frac{n + 1}{2n}\right)\left(1 - \frac{1}{n}\right)$ 

42. $a_{n} = \left(2 - \frac{1}{2^{n}}\right)\left(3 + \frac{1}{2^{n}}\right)$ 

11. $a_1 = a_2 = 1, \quad a_{n+2} = a_{n+1} + a_n$ 

43. $a_{n} = \frac{(-1)^{n + 1}}{2n - 1}$ 

44. $a_{n} = \left(-\frac{1}{2}\right)^{n}$ 

12. $a_{1} = 2,\quad a_{2} = -1,\quad a_{n+2} = a_{n+1}/a_{n}$ 

45. $a_{n} = \sqrt{\frac{2n}{n + 1}}$ 

46. $a_{n} = \frac{1}{(0.9)^{n}}$ 

## Finding a Sequence's Formula

In Exercises 13–30, find a formula for the nth term of the sequence. 

47. $a_{n} = \sin \left(\frac{\pi}{2} +\frac{1}{n}\right)$ 

48. $a_{n} = n\pi \cos (n\pi)$ 

13. 1, -1, 1, -1, 1, ... 

1's with alternating signs 

14. -1, 1, -1, 1, -1, ... 

1's with alternating signs 

49. $a_{n} = \frac{\sin n}{n}$ 

50. $a_{n} = \frac{\sin^{2}n}{2^{n}}$ 

15. 1, -4, 9, -16, 25, ... 

Squares of the positive integers, with alternating signs 

51. $a_{n} = \frac{n}{2^{n}}$ 

52. $a_{n} = \frac{3^{n}}{n^{3}}$ 

16. $1, -\frac{1}{4}, \frac{1}{9}, -\frac{1}{16}, \frac{1}{25}, \ldots$ 

53. $a_{n} = \frac{\ln(n + 1)}{\sqrt{n}}$ 

54. $a_{n} = \frac{\ln n}{\ln 2n}$ 

17. $\frac{1}{9}, \frac{2}{12}, \frac{2^2}{15}, \frac{2^3}{18}, \frac{2^4}{21}, \ldots$ 

Powers of 2 divided by multiples of 3 

55. $a_{n} = 8^{1 / n}$ 

56. $a_{n} = (0.03)^{1 / n}$ 

18. $-\frac{3}{2}, -\frac{1}{6}, \frac{1}{12}, \frac{3}{20}, \frac{5}{30}, \ldots$ 

57. $a_{n} = \left(1 + \frac{7}{n}\right)^{n}$ 

58. $a_{n} = \left(1 - \frac{1}{n}\right)^{n}$ 

Integers differing by 2 divided by products of consecutive integers 

59. $a_{n} = \sqrt[n]{10n}$ 

60. $a_{n} = \sqrt[n]{n^{2}}$ 

19. 0, 3, 8, 15, 24, ... 

Squares of the positive integers diminished by 1 Integers, beginning with -3 

61. $a_{n} = \left(\frac{3}{n}\right)^{1 / n}$ 

62. $a_{n} = (n + 4)^{1 / (n + 4)}$ 

20. -3, -2, -1, 0, 1, ... 

21. 1, 5, 9, 13, 17, ... 

Every other odd positive integer 

63. $a_{n} = \frac{\ln n}{n^{1 / n}}$ 

64. $a_{n} = \ln n - \ln (n + 1)$ 

22. 2, 6, 10, 14, 18, ... 

Every other even positive integer 

65. $a_{n} = \sqrt[n]{4^{n}n}$ 

66. $a_{n} = \sqrt[n]{3^{2n + 1}}$ 

23. $\frac{5}{1},\frac{8}{2},\frac{11}{6},\frac{14}{24},\frac{17}{120},\ldots$ 

Integers differing by 3 divided by factorials 

67. $a_{n} = \frac{n!}{n^{n}}$ (Hint: Compare with $1 / n$ .) 

24. $\frac{1}{25},\frac{8}{125},\frac{27}{625},\frac{64}{3125},\frac{125}{15,625},\ldots$ 

Cubes of positive integers divided by powers of 5 

68. $a_{n} = \frac{(-4)^{n}}{n!}$ 

69. $a_{n} = \frac{n!}{10^{6n}}$ 

25. 1, 0, 1, 0, 1, ... 

Alternating 1's and 0's 

70. $a_{n} = \frac{n!}{2^{n}\cdot 3^{n}}$ 

71. $a_{n} = \left(\frac{1}{n}\right)^{1 / (\ln n)}$ 

26. 0, 1, 1, 2, 2, 3, 3, 4, ... 

Each positive integer repeated 

27. $\frac{1}{2} -\frac{1}{3},\frac{1}{3} -\frac{1}{4},\frac{1}{4} -\frac{1}{5},\frac{1}{5} -\frac{1}{6},\ldots$ 

72. $a_{n} = \frac{(n + 1)!}{(n + 3)!}$ 

73. $a_{n} = \frac{(2n + 2)!}{(2n - 1)!}$ 

28. $\sqrt{5} -\sqrt{4},\sqrt{6} -\sqrt{5},\sqrt{7} -\sqrt{6},\sqrt{8} -\sqrt{7},\ldots$ 

74. $a_{n} = \frac{3e^{n} + e^{-n}}{e^{n} + 3e^{-n}}$ 

75. $a_{n} = \frac{e^{-2n} - 2e^{-3n}}{e^{-2n} - e^{-n}}$ 

29. $\sin \left(\frac{\sqrt{2}}{1 + 4}\right),\sin \left(\frac{\sqrt{3}}{1 + 9}\right),\sin \left(\frac{\sqrt{4}}{1 + 16}\right),\sin \left(\frac{\sqrt{5}}{1 + 25}\right),\ldots$ 

30. $\sqrt{\frac{5}{8}},\sqrt{\frac{7}{11}},\sqrt{\frac{9}{14}},\sqrt{\frac{11}{17}},\cdots$ 

76. $a_{n} = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \cdots$ $+\left(\frac{1}{n-2}-\frac{1}{n-1}\right)+\left(\frac{1}{n-1}-\frac{1}{n}\right)$ 

## Convergence and Divergence

77. $a_{n} = (\ln 3 - \ln 2) + (\ln 4 - \ln 3) + (\ln 5 - \ln 4) + \cdots + (\ln(n-1) - \ln(n-2)) + (\ln n - \ln(n-1))$ 

Which of the sequences $\{a_{n}\}$ in Exercises 31-100 converge, and which diverge? Find the limit of each convergent sequence. 

78. $a_{n} = \ln \left(1 + \frac{1}{n}\right)^{n}$ 

79. $a_{n} = \left(\frac{3n + 1}{3n - 1}\right)^{n}$ 

31. $a_{n} = 2 + (0.1)^{n}$ 

32. $a_{n} = \frac{n + (-1)^{n}}{n}$ 

80. $a_{n} = \left(\frac{n}{n + 1}\right)^{n}$ 

81. $a_{n} = \left(\frac{x^{n}}{2n + 1}\right)^{1 / n}, x > 0$ 

33. $a_{n} = \frac{1 - 2n}{1 + 2n}$ 

34. $a_{n} = \frac{2n + 1}{1 - 3\sqrt{n}}$ 

35. $a_{n} = \frac{1 - 5n^{4}}{n^{4} + 8n^{3}}$ 

82. $a_{n} = \left(1 - \frac{1}{n^{2}}\right)^{n}$ 

83. $a_{n} = \frac{3^{n}\cdot 6^{n}}{2^{-n}\cdot n!}$ 

36. $a_{n} = \frac{n + 3}{n^{2} + 5n + 6}$ 

37. $a_{n} = \frac{n^{2} - 2n + 1}{n - 1}, n \geq 2$ 

84. $a_{n} = \frac{(10 / 11)^{n}}{(9 / 10)^{n} + (11 / 12)^{n}}$ 85. $a_{n} = \tanh n$ 

38. $a_{n} = \frac{1 - n^{3}}{70 - 4n^{2}}$ 

39. $a_{n} = 1 + (-1)^{n}$ 

40. $a_{n} = (-1)^{n}\left(1 - \frac{1}{n}\right)$ 

86. $a_{n} = \sinh (\ln n)$ 

87. $a_{n} = \frac{n^{2}}{2n - 1}\sin \frac{1}{n}$ 

88. $a_{n} = n\left(1 - \cos \frac{1}{n}\right)$ 

89. $a_{n} = \sqrt{n}\sin \frac{1}{\sqrt{n}}$ 

90. $a_{n} = (3^{n} + 5^{n})^{1 / n}$ 

91. $a_{n} = \tan^{-1}n$ 

92. $a_{n} = \frac{1}{\sqrt{n}}\arctan n$ 

93. $a_{n} = \left(\frac{1}{3}\right)^{n} + \frac{1}{\sqrt{2^{n}}}$ 

94. $a_{n} = \sqrt[n]{n^{2} + n}$ 

95. $a_{n} = \frac{(\ln n)^{200}}{n}$ 

96. $a_{n} = \frac{(\ln n)^{5}}{\sqrt{n}}$ 

97. $a_{n} = n - \sqrt{n^{2} - n}$ 

98. $a_{n} = \frac{1}{\sqrt{n^{2} - 1} - \sqrt{n^{2} + n}}$ 

99. $a_{n} = \frac{1}{n}\int_{1}^{n}\frac{1}{x} dx$ 

100. $a_{n} = \int_{1}^{n}\frac{1}{x^{p}} dx, p > 1$ 

Recursively Defined Sequences 

In Exercises 101–108, assume that each sequence converges and find its limit. 

101. $a_1 = 2, a_{n + 1} = \frac{72}{1 + a_n}$ 

102. $a_1 = -1, a_{n + 1} = \frac{a_n + 6}{a_n + 2}$ 

103. $a_1 = -4, a_{n + 1} = \sqrt{8 + 2a_n}$ 

104. $a_{1} = 0,\quad a_{n+1} = \sqrt{8 + 2a_{n}}$ 

105. $a_1 = 5, a_{n + 1} = \sqrt{5a_n}$ 

106. $a_1 = 3, a_{n + 1} = 12 - \sqrt{a_n}$ 

107. $2,2+\frac{1}{2},2+\frac{1}{2+\frac{1}{2}},2+\frac{1}{2+\frac{1}{2+\frac{1}{2}}},\ldots$ 

108. $\sqrt{1},\sqrt{1+\sqrt{1}},\sqrt{1+\sqrt{1+\sqrt{1}}}$ , 

$$
\sqrt {1 + \sqrt {1 + \sqrt {1 + \sqrt {1}}}}, \ldots
$$

## Theory and Examples

109. The first term of a sequence is $x_{1} = 1$ . Each succeeding term is the sum of all those that come before it: 

$$
x _ {n + 1} = x _ {1} + x _ {2} + \dots + x _ {n}.
$$

Write out enough early terms of the sequence to deduce a general formula for $x_{n}$ that holds for $n \geq 2$ . 

110. A sequence of rational numbers is described as follows: 

$$
\frac {1}{1}, \frac {3}{2}, \frac {7}{5}, \frac {1 7}{1 2}, \dots , \frac {a}{b}, \frac {a + 2 b}{a + b}, \dots
$$

Here the numerators form one sequence, the denominators form a second sequence, and their ratios form a third sequence. Let $x_{n}$ and $y_{n}$ be, respectively, the numerator and the denominator of the nth fraction $r_{n} = x_{n}/y_{n}$ . 

a. Verify that $x_{1}^{2} - 2y_{1}^{2} = -1$ , that $x_{2}^{2} - 2y_{2}^{2} = +1$ , and, more generally, that if $a^2 - 2b^2 = -1$ or $+1$ , then 

$$
(a + 2 b) ^ {2} - 2 (a + b) ^ {2} = + 1 \quad \text { or } \quad - 1,
$$

respectively. 

b. The fractions $r_{n} = x_{n}/y_{n}$ approach a limit as n increases.
What is that limit? (Hint: Use part (a) to show that $r_{n}^{2} - 2 = \pm(1/y_{n})^{2}$ and that $y_{n}$ is not less than n.) 

111. Newton's method The following sequences come from the recursion formula for Newton's method, 

$$
x _ {n + 1} = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})}.
$$

Do the sequences converge? If so, to what value? In each case, begin by identifying the function $f$ that generates the sequence. 

$$
x _ {0} = 1, \quad x _ {n + 1} = x _ {n} - \frac {x _ {n} ^ {2} - 2}{2 x _ {n}} = \frac {x _ {n}}{2} + \frac {1}{x _ {n}}
$$

b. $x_0 = 1, x_{n + 1} = x_n - \frac{\tan x_n - 1}{\sec^2 x_n}$ 

c. $x_0 = 1, x_{n + 1} = x_n - 1$ 

112. a. Suppose that $f(x)$ is differentiable for all x in [0,1] and that $f(0) = 0$ . Define sequence $\{a_{n}\}$ by the rule $a_{n} = n f(1/n)$ . Show that $\lim_{n \to \infty} a_{n} = f'(0)$ . Use the result in part (a) to find the limits of the following sequences $\{a_{n}\}$ . 

b. $a_{n} = n\tan^{-1}\frac{1}{n}$ 

$$
\mathbf {c}. a _ {n} = n (e ^ {1 / n} - 1)
$$

d. $a_{n} = n\ln \left(1 + \frac{2}{n}\right)$ 

113. Pythagorean triples A triple of positive integers $a, b$ , and $c$ is called a Pythagorean triple if $a^2 + b^2 = c^2$ . Let $a$ be an odd positive integer and let 

$$
b = \left\lfloor \frac {a ^ {2}}{2} \right\rfloor \text { and } c = \left\lceil \frac {a ^ {2}}{2} \right\rceil
$$

be, respectively, the integer floor and ceiling for $a^2 / 2$ . 

![[d51785a8b88677e9bfbd6c314fb3d8549829285e3def2643bb4deb2079bf206d.jpg|image]]


a. Show that $a^{2} + b^{2} = c^{2}$ . (Hint: Let $a = 2n + 1$ and express b and c in terms of n.) 

b. By direct calculation, or by appealing to the accompanying figure, find 

$$
\lim _ {a \to \infty} \frac {\left\lfloor \frac {a ^ {2}}{2} \right\rfloor}{\left\lceil \frac {a ^ {2}}{2} \right\rceil}.
$$

## 114. The $n$ th root of $n!$

a. Show that $\lim_{n\to \infty}(2n\pi)^{1 / (2n)} = 1$ and hence, using Stirling's approximation (Chapter 8, Additional Exercise 44a), that 

$\sqrt[n]{n!} \approx \frac{n}{e}$ for large values of n. 

T b. Test the approximation in part (a) for $n = 40, 50, 60, \ldots$ , as far as your calculator will allow. 

115. a. Assuming that $\lim_{n\to \infty}\left(1 / n^c\right) = 0$ if $c$ is any positive constant, show that 

$$
\lim _ {n \to \infty} \frac {\ln n}{n ^ {c}} = 0
$$

if $c$ is any positive constant. 

b. Prove that $\lim (1 / n^c) = 0$ if $c$ is any positive constant. 

(Hint: If $\varepsilon = 0.001$ and $c = 0.04$ , how large should $N$ be to ensure that $|1 / n^c - 0| < \varepsilon$ if $n > N?$ ) 

116. The zipper theorem Prove the “zipper theorem” for sequences: If $\{a_{n}\}$ and $\{b_{n}\}$ both converge to L, then the sequence 

$$
a _ {1}, b _ {1}, a _ {2}, b _ {2}, \dots , a _ {n}, b _ {n}, \dots
$$

converges to $L$ . 

117. Prove that $\lim_{n\to \infty}\sqrt[n]{n} = 1$ 

118. Prove that $\lim_{n\to \infty}x^{1 / n} = 1,(x > 0)$ . 

119. Prove Theorem 2. 120. Prove Theorem 3. 

In Exercises 121–124, determine whether the sequence is monotonic and whether it is bounded. 

121. $a_{n} = \frac{3n + 1}{n + 1}$ 

122. $a_{n} = \frac{(2n + 3)!}{(n + 1)!}$ 

123. $a_{n} = \frac{2^{n}3^{n}}{n!}$ 

124. $a_{n} = 2 - \frac{2}{n} -\frac{1}{2^{n}}$ 

In Exercises 125–134, determine whether the sequence is monotonic, whether it is bounded, and whether it converges. 

125. $a_{n} = 1 - \frac{1}{n}$ 

126. $a_{n} = n - \frac{1}{n}$ 

127. $a_{n} = \frac{2^{n} - 1}{2^{n}}$ 

128. $a_{n} = \frac{2^{n} - 1}{3^{n}}$ 

129. $a_{n} = ((-1)^{n} + 1)\left(\frac{n + 1}{n}\right)$ 

130. The first term of a sequence is $x_{1} = \cos(1)$ . The next terms are $x_{2} = x_{1}$ or $\cos(2)$ , whichever is larger; and $x_{3} = x_{2}$ or $\cos(3)$ , whichever is larger (farther to the right). In general, 

$$
x _ {n + 1} = \max \left\{x _ {n}, \cos (n + 1) \right\}.
$$

131. $a_{n} = \frac{1 + \sqrt{2n}}{\sqrt{n}}$ 

132. $a_{n} = \frac{n + 1}{n}$ 

133. $a_{n} = \frac{4^{n + 1} + 3^{n}}{4^{n}}$ 

134. $a_1 = 1, a_{n + 1} = 2a_n - 3$ 

In Exercises 135–136, use the definition of convergence to prove the given limit. 

135. $\lim_{n\to \infty}\frac{\sin n}{n} = 0$ 136. $\lim_{n\to \infty}\left(1 - \frac{1}{n^2}\right) = 1$ 

137. The sequence $\{n / (n + 1)\}$ has a least upper bound of 1. Show that if $M$ is a number less than 1, then the terms of $\{n / (n + 1)\}$ eventually exceed $M$ . That is, if $M < 1$ , there is an integer $N$ such that $n / (n + 1) > M$ whenever $n > N$ . Since $n / (n + 1) < 1$ for every $n$ , this proves that 1 is a least upper bound for $\{n / (n + 1)\}$ . 

138. Uniqueness of least upper bounds Show that if $M_1$ and $M_2$ are least upper bounds for the sequence $\{a_n\}$ , then $M_1 = M_2$ . That is, a sequence cannot have two different least upper bounds. 

139. Is it true that a sequence $\{a_{n}\}$ of positive numbers must converge if it is bounded from above? Give reasons for your answer. 

140. Prove that if $\{a_{n}\}$ is a convergent sequence, then to every positive number $\varepsilon$ there corresponds an integer $N$ such that 

$$
\left| a _ {m} - a _ {n} \right| <   \varepsilon \quad \text { whenever } \quad m > N \quad \text { and } \quad n > N.
$$

141. Uniqueness of limits Prove that limits of sequences are unique. That is, show that if $L_{1}$ and $L_{2}$ are numbers such that $a_{n} \to L_{1}$ and $a_{n} \to L_{2}$ , then $L_{1} = L_{2}$ . 

142. Limits and subsequences If the terms of one sequence appear in another sequence in their given order, we call the first sequence a subsequence of the second. Prove that if two subsequences of a sequence $\{a_{n}\}$ have different limits $L_{1} \neq L_{2}$ , then $\{a_{n}\}$ diverges. 

143. For a sequence $\{a_n\}$ the terms of even index are denoted by $a_{2k}$ and the terms of odd index by $a_{2k + 1}$ . Prove that if $a_{2k} \to L$ and $a_{2k + 1} \to L$ , then $a_n \to L$ . 

144. Prove that a sequence $\{a_{n}\}$ converges to 0 if and only if the sequence of absolute values $\{|a_{n}|\}$ converges to 0. 

145. Sequences generated by Newton's method Newton's method, applied to a differentiable function $f(x)$ , begins with a starting value $x_0$ and constructs from it a sequence of numbers $\{x_n\}$ that under favorable circumstances converges to a zero of $f$ . The recursion formula for the sequence is 

$$
x _ {n + 1} = x _ {n} - \frac {f (x _ {n})}{f ^ {\prime} (x _ {n})}.
$$

a. Show that the recursion formula for $f(x) = x^{2} - a, a > 0$ , can be written as $x_{n+1} = (x_{n} + a/x_{n})/2$ . 

T b. Starting with $x_{0} = 1$ and a = 3, calculate successive terms of the sequence until the display begins to repeat. What number is being approximated? Explain. 

146. A recursive definition of $\pi / 2$ If you start with $x_{1} = 1$ and if you define the subsequent terms of $\{x_{n}\}$ by the rule $x_{n} = x_{n-1} + \cos x_{n-1}$ , you generate a sequence that converges rapidly to $\pi / 2$ . (a) Try it. (b) Use the accompanying figure to explain why the convergence is so rapid. 

![[f8d9475e6b4af1e0b0003db8887a87138fbe7f745b401eeaf72f68a894d33417.jpg|image]]


## COMPUTER EXPLORATIONS

Use a CAS to perform the following steps for the sequences in Exercises 147–158. 

a. Calculate and then plot the first 25 terms of the sequence. Does the sequence appear to be bounded from above or below? Does it appear to converge or diverge? If it does converge, what is the limit L? 

$$
\mathbf {1 4 9 .} a _ {1} = 1, \quad a _ {n + 1} = a _ {n} + \frac {1}{5 ^ {n}}
$$

150. $a_1 = 1$ , $a_{n + 1} = a_n + (-2)^n$ 

151. $a_{n} = \sin n$ 

$$
1 5 2. a _ {n} = n \sin \frac {1}{n}
$$

b. If the sequence converges, find an integer $N$ such that $|a_{n} - L| \leq 0.01$ for $n \geq N$ . How far in the sequence do you have to get for the terms to lie within 0.0001 of $L$ ? 

$$
\mathbf {1 5 3 .} a _ {n} = \frac {\sin n}{n} \quad \mathbf {1 5 4 .} a _ {n} = \frac {\ln n}{n}
$$

$$
\mathbf {1 5 5 .} a _ {n} = (0. 9 9 9 9) ^ {n} \quad \mathbf {1 5 6 .} a _ {n} = (1 2 3 4 5 6) ^ {1 / n}
$$

$$
\mathbf {1 4 7 .} a _ {n} = \sqrt [ n ]{n} \quad \mathbf {1 4 8 .} a _ {n} = \left(1 + \frac {0 . 5}{n}\right) ^ {n}
$$

$$
\mathbf {1 5 7 .} a _ {n} = \frac {8 ^ {n}}{n !} \quad \mathbf {1 5 8 .} a _ {n} = \frac {n ^ {4 1}}{1 9 ^ {n}}
$$

## 9.2 Infinite Series

An infinite series is the sum of an infinite sequence of numbers 

$$
a _ {1} + a _ {2} + a _ {3} + \dots + a _ {n} + \dots .
$$

The goal of this section is to understand the meaning of such an infinite sum and to develop methods to calculate it. Since there are infinitely many terms to add in an infinite series, we cannot just keep adding to see what comes out. Instead we look at the result of summing just the first n terms of the sequence. The sum of the first n terms 

$$
s _ {n} = a _ {1} + a _ {2} + a _ {3} + \dots + a _ {n}
$$

is an ordinary finite sum and can be calculated by normal addition. It is called the nth partial sum. As n gets larger, we expect the partial sums to get closer and closer to a limiting value in the same sense that the terms of a sequence approach a limit, as discussed in Section 9.1. 

For example, to assign meaning to an expression like 

$$
1 + \frac {1}{2} + \frac {1}{4} + \frac {1}{8} + \frac {1}{1 6} + \dots ,
$$

we add the terms one at a time from the beginning and look for a pattern in how these partial sums grow. 

<table><tr><td>Partial sum</td><td></td><td>Value</td><td>Suggestive expression for partial sum</td></tr><tr><td>First:</td><td><eq>s_{1} = 1</eq></td><td>1</td><td>2 - 1</td></tr><tr><td>Second:</td><td><eq>s_{2} = 1 + \frac{1}{2}</eq></td><td><eq>\frac{3}{2}</eq></td><td><eq>2 - \frac{1}{2}</eq></td></tr><tr><td>Third:</td><td><eq>s_{3} = 1 + \frac{1}{2} + \frac{1}{4}</eq></td><td><eq>\frac{7}{4}</eq></td><td><eq>2 - \frac{1}{4}</eq></td></tr><tr><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td></tr><tr><td>nth:</td><td><eq>s_{n} = 1 + \frac{1}{2} + \frac{1}{4} + \cdots + \frac{1}{2^{n-1}}</eq></td><td><eq>\frac{2^{n} - 1}{2^{n-1}}</eq></td><td><eq>2 - \frac{1}{2^{n-1}}</eq></td></tr></table>

Indeed there is a pattern. The partial sums form a sequence whose nth term is 

$$
s _ {n} = 2 - \frac {1}{2 ^ {n - 1}}.
$$

## HISTORICAL BIOGRAPHY Blaise Pascal (1623–1662)

Pascal was born in France and was encouraged by his father to study science. He met Fermat and was inspired to work on applied science problems. As early as 1640, he wrote an essay on conic sections and earned praise for his work from Descartes. Despite his poor health, Pascal designed an “arithmetic machine” to perform computations for tax collecting. Pascal also contributed to the development of differential calculus. 

To know more, visit the companion Website. 

![[55539efea93aafb54f6ad4e839a0f089bff729f63e9a4d5b6df83fc66ae9aeeb.jpg|image]]



(a)


![[04725f4ab1d04357517d566fa4f509c6434a3454249d7f1906fb768308caa26f.jpg|image]]



FIGURE 9.9 The sum of a series with positive terms can be interpreted as a total area of an infinite collection of rectangles. The series converges when the total area of the rectangles is finite (a) and diverges when the total area is unbounded (b). Note that the total area can be infinite even if the area of the rectangles is decreasing.


This sequence of partial sums converges to 2 because $\lim_{n\to \infty}\left(1 / 2^{n - 1}\right) = 0$ . We say 

“the sum of the infinite series $1 + \frac{1}{2} + \frac{1}{4} + \cdots + \frac{1}{2^{n-1}} + \cdots$ is 2.” 

Is the sum of any finite number of terms in this series equal to 2? No. Can we actually add an infinite number of terms one by one? No. But we can still define their sum by defining it to be the limit of the sequence of partial sums as $n \rightarrow \infty$ , in this case 2 (Figure 9.8). Our knowledge of sequences and limits enables us to break away from the confines of finite sums. 

![[b49cce8296ec7182a578bc5a7629c7d8225a18bc2f9be72e705a6febcd1bdc5f.jpg|image]]



FIGURE 9.8 As the lengths 1, 1/2, 1/4, 1/8, ... are added one by one, the sum approaches 2.


> ***DEFINITIONS*** Given a sequence of numbers $\{a_{n}\}$ , an expression of the form 
>
> $$
> a _ {1} + a _ {2} + a _ {3} + \dots + a _ {n} + \dots
> $$
>
> is an infinite series. The number $a_{n}$ is the nth term of the series. The sequence $\{s_n\}$ defined by 
>
> $$
> \begin{array}{l} s _ {1} = a _ {1} \\ s _ {2} = a _ {1} + a _ {2} \\ \vdots \\ s _ {n} = a _ {1} + a _ {2} + \dots + a _ {n} = \sum_ {k = 1} ^ {n} a _ {k} \\ \vdots \end{array}
> $$
>
> is the sequence of partial sums of the series, the number $s_{n}$ being the nth partial sum. If the sequence of partial sums converges to a limit L, we say that the series converges and that its sum is L. In this case, we also write 
>
> $$
> a _ {1} + a _ {2} + \dots + a _ {n} + \dots = \sum_ {n = 1} ^ {\infty} a _ {n} = L.
> $$
>
> If the sequence of partial sums of the series does not converge, we say that the series diverges. 
>
If all the terms $a_{n}$ in an infinite series are positive, then we can represent each term in the series by the area of a rectangle. The series converges if the total area is finite, and diverges otherwise. Figure 9.9a shows an example where the series converges, and Figure 9.9b shows an example where it diverges. The convergence of the total area is related to the convergence or divergence of improper integrals, as we found in Section 8.8. We make this connection explicit in the next section, where we develop an important test for convergence of series, the Integral Test. 

When we begin to study a given series $a_{1} + a_{2} + \cdots + a_{n} + \cdots$ , we might not know whether it converges or diverges. In either case, it is convenient to use sigma notation to write the series as 

$$
\sum_ {n = 1} ^ {\infty} a _ {n}, \quad \sum_ {k = 1} ^ {\infty} a _ {k}, \quad \text { or } \quad \sum a _ {n} \quad \begin{array}{l} \text { A   useful   shorthand } \\ \text { when   summation } \\ \text { from   1   to   } \infty \text {   is } \\ \text { understood } \end{array}
$$

## Geometric Series

Geometric series are series of the form 

$$
a + a r + a r ^ {2} + \dots + a r ^ {n - 1} + \dots = \sum_ {n = 1} ^ {\infty} a r ^ {n - 1},
$$

in which a and r are fixed real numbers and $a \neq 0$ . The series can also be written as $\sum_{n=0}^{\infty} ar^{n}$ . The ratio r can be positive, as in 

$$
1 + \frac {1}{2} + \frac {1}{4} + \dots + \left(\frac {1}{2}\right) ^ {n - 1} + \dots , \quad r = 1 / 2, a = 1
$$

or negative, as in 

$$
1 - \frac {1}{3} + \frac {1}{9} - \dots + \left(- \frac {1}{3}\right) ^ {n - 1} + \dots . \quad r = - 1 / 3, a = 1
$$

If $r = 1$ , the $n$ th partial sum of the geometric series is 

$$
s _ {n} = a + a \cdot 1 + a \cdot 1 ^ {2} + \dots + a \cdot 1 ^ {n - 1} = n a,
$$

and the series diverges because $\lim_{n\to\infty}s_n=\pm\infty$ , depending on the sign of a. If r=-1, the series diverges because the nth partial sums alternate between a and 0 and never approach a single limit. If $|r|\neq1$ , we can determine the convergence or divergence of the series in the following way: 

$$
\begin{array}{l l} s _ {n} = a + a r + a r ^ {2} + \dots + a r ^ {n - 1} & \text {   Write   the   } n \text {th partial sum.   } \\ r s _ {n} = a r + a r ^ {2} + \dots + a r ^ {n - 1} + a r ^ {n} & \text {   Multiply   } s _ {n} \text {by} r. \\ s _ {n} - r s _ {n} = a - a r ^ {n} & \text {   Subtract   } r s _ {n} \text {from} s _ {n}. \text {Most of   } \\ s _ {n} (1 - r) = a (1 - r ^ {n}) & \text {   the   terms   on   the   right   cancel.   } \\ s _ {n} = \frac {a (1 - r ^ {n})}{1 - r}, \quad (r \neq 1). & \text {   Factor.   } \\ & \text {   We   can   solve   for   } s _ {n} \text {if} r \neq 1. \end{array}
$$

If $|r| < 1$ , then $r^{n} \rightarrow 0$ as $n \rightarrow \infty$ (as in Section 9.1), so $s_{n} \rightarrow a/(1 - r)$ in this case. On the other hand, if $|r| > 1$ , then $|r^{n}| \rightarrow \infty$ and the series diverges. We summarize these results as follows. 

Geometric Series
If $|r| < 1$ , the geometric series $a + ar + ar^{2} + \cdots + ar^{n-1} + \cdots$ converges to $a/(1 - r)$ : $\sum_{n=1}^{\infty}ar^{n-1}=\frac{a}{1-r},\quad|r|<1.$ If $|r| \geq 1$ , the series diverges. 

The formula $a / (1 - r)$ for the sum of a geometric series applies only when the summation index begins with $n = 1$ in the expression $\sum_{n=1}^{\infty} ar^{n-1}$ (or with the index $n = 0$ if we write the series as $\sum_{n=0}^{\infty} ar^n$ ). 

**EXAMPLE 1** The geometric series with a = 1/9 and r = 1/3 is 

$$
\frac {1}{9} + \frac {1}{2 7} + \frac {1}{8 1} + \dots = \sum_ {n = 1} ^ {\infty} \frac {1}{9} \left(\frac {1}{3}\right) ^ {n - 1}.
$$

![[4689094528f5d91266ed4c25c45da218b4087b7a2b4c30cd59fc264081445d25.jpg|image]]



(a)


![[250884bd442ade1eecb0f265e8d4fa481816878768f047ea7c1a51faf83da3da.jpg|image]]



(b)



FIGURE 9.10 (a) Example 3 shows how to use a geometric series to calculate the total vertical distance traveled by a bouncing ball if the height of each rebound is reduced by the factor r. (b) A stroboscopic photo of a bouncing ball. (Source: Berenice Abbott/Science Source)


Since $|r| = 1/3 < 1$ , the series converges to 

$$
\frac {1 / 9}{1 - (1 / 3)} = \frac {1}{6}.
$$

**EXAMPLE 2** The series 

$$
\sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} 5}{4 ^ {n}} = 5 - \frac {5}{4} + \frac {5}{1 6} - \frac {5}{6 4} + \dots
$$

is a geometric series with $a = 5$ and $r = -1/4$ . Since $|r| = 1/4 < 1$ , the series converges to 

$$
\frac {a}{1 - r} = \frac {5}{1 + (1 / 4)} = 4.
$$

**EXAMPLE 3** You drop a ball from a meters above a flat surface. Each time the ball hits the surface after falling a distance h, it rebounds a distance rh, where r is positive but less than 1. Find the total distance the ball travels up and down (Figure 9.10). 

**Solution** The total distance is 

$$
s = a + \underbrace {2 a r + 2 a r ^ {2} + 2 a r ^ {3} + \cdots} _ {\text { This   sum   is } 2 a r / (1 - r).} = a + \frac {2 a r}{1 - r} = a \frac {1 + r}{1 - r}.
$$

If $a = 6 \, \mathrm{m}$ and $r = 2/3$ , for instance, the distance is 

$$
s = 6 \cdot \frac {1 + (2 / 3)}{1 - (2 / 3)} = 6 \left(\frac {5 / 3}{1 / 3}\right) = 3 0 \mathrm{m}.
$$

**EXAMPLE 4** Express the repeating decimal 5.232323 ... as the ratio of two integers. 

**Solution** From the definition of a decimal number, we get a geometric series. 

$$
\begin{array}{l l} 5. 2 3 2 3 2 3 \dots = 5 + \frac {2 3}{1 0 0} + \frac {2 3}{(1 0 0) ^ {2}} + \frac {2 3}{(1 0 0) ^ {3}} + \dots \\ = 5 + \frac {2 3}{1 0 0} \underbrace {\left(1 + \frac {1}{1 0 0} + \left(\frac {1}{1 0 0}\right) ^ {2} + \cdots\right)} _ {1 / (1 - 1 / 1 0 0)} & a = 1, \\ = 5 + \frac {2 3}{1 0 0} \left(\frac {1}{0 . 9 9}\right) = 5 + \frac {2 3}{9 9} = \frac {5 1 8}{9 9} & r = 1 / 1 0 0 \\ & | r | = 1 / 1 0 0 <   1 \end{array}
$$

Unfortunately, formulas like the one for the sum of a convergent geometric series are rare, and we usually have to settle for an estimate of a series' sum (more about this later). The next example, however, is another case in which we can find the sum exactly. 

$$
\text { Find   the   sum   of   the   ``telescoping'' series } \sum_ {n = 1} ^ {\infty} \frac {1}{n (n + 1)}.
$$

**Solution** We look for a pattern in the sequence of partial sums that might lead to a formula for $s_{k}$ . The key observation is the partial fraction decomposition 

SO 

$$
{\frac {1}{n (n + 1)}} = {\frac {1}{n}} - {\frac {1}{n + 1}},
$$

$$
\sum_ {n = 1} ^ {k} \frac {1}{n (n + 1)} = \sum_ {n = 1} ^ {k} \left(\frac {1}{n} - \frac {1}{n + 1}\right)
$$

and 

$$
s _ {k} = \left(\frac {1}{1} - \frac {1}{2}\right) + \left(\frac {1}{2} - \frac {1}{3}\right) + \left(\frac {1}{3} - \frac {1}{4}\right) + \dots + \left(\frac {1}{k} - \frac {1}{k + 1}\right).
$$

Removing parentheses and canceling adjacent terms of opposite sign collapse the sum to 

$$
s _ {k} = 1 - \frac {1}{k + 1}.
$$

We now see that $s_k \to 1$ as $k \to \infty$ . The series converges, and its sum is 1: 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n (n + 1)} = 1.
$$

## The nth-Term Test for a Divergent Series

One reason why a series may fail to converge is that its terms don't become small. 

**EXAMPLE 6** The series 

$$
\sum_ {n = 1} ^ {\infty} \frac {n + 1}{n} = \frac {2}{1} + \frac {3}{2} + \frac {4}{3} + \dots + \frac {n + 1}{n} + \dots
$$

diverges because the partial sums eventually outgrow every preassigned number. Each term is greater than 1, so the sum of n terms is greater than n. 

We now show that $\lim_{n\to\infty}a_{n}$ must equal zero if the series $\sum_{n=1}^{\infty}a_{n}$ converges. To see why, let S represent the series' sum, and $s_{n}=a_{1}+a_{2}+\cdots+a_{n}$ the nth partial sum. When n is large, both $s_{n}$ and $s_{n-1}$ are close to S, so their difference, $a_{n}$ , is close to zero. More formally, $s_{n}$ and $s_{n-1}$ both converge to S as n increases, so 

$\lim_{n\to\infty}a_{n}=\lim_{n\to\infty}(s_{n}-s_{n-1})=\lim_{n\to\infty}s_{n}-\lim_{n\to\infty}s_{n-1}=S-S=0.$ Difference Rule for sequences 

This establishes the following theorem. 

## Caution

Theorem 7 does not say that $\sum_{n=1}^{\infty} a_n$ converges if $a_n \to 0$ . It is possible for a series to diverge when $a_n \to 0$ . (See Example 8.) 

THEOREM 7 If $\sum_{n=1}^{\infty} a_n$ converges, then $a_n \to 0$ . 

Theorem 7 leads to a test for detecting the kind of divergence that occurred in Example 6. 

## The nth-Term Test for Divergence

$\sum_{n=1}^{\infty} a_n$ diverges if $\lim_{n \to \infty} a_n$ fails to exist or is different from zero. 

## **EXAMPLE 7** The following are all examples of divergent series.

(a) $\sum_{n=1}^{\infty} n^{2}$ diverges because $n^{2} \to \infty$ . $\lim_{n \to \infty} a_{n}$ fails to exist. 

(b) $\sum_{n=1}^{\infty} \frac{n+1}{n}$ diverges because $\frac{n+1}{n} \to 1$ . $\lim_{n \to \infty} a_n \neq 0$ 

(c) $\sum_{n=1}^{\infty} (-1)^{n+1}$ diverges because $\lim_{n \to \infty} (-1)^{n+1}$ does not exist. 

(d) $\sum_{n=1}^{\infty}\frac{-n}{2n+5}$ diverges because $\lim_{n\to\infty}\frac{-n}{2n+5}=-\frac{1}{2}\neq0.$ 

**EXAMPLE 8** The series 

$$
1 \underbrace {+ \frac {1}{2} + \frac {1}{2}} _ {\text { 2   t   e   r   m   s }} + \underbrace {\frac {1}{4} + \frac {1}{4} + \frac {1}{4} + \frac {1}{4}} _ {\text { 4   t   e   r   m   s }} + \dots + \underbrace {\frac {1}{2 ^ {n}} + \frac {1}{2 ^ {n}} + \cdots + \frac {1}{2 ^ {n}}} _ {2 ^ {n} \text { t   e   r   m   s }} + \dots
$$

diverges because the terms can be grouped into infinitely many clusters each of which adds to 1, so the partial sums increase without bound. However, the terms of the series form a sequence that converges to 0. Example 1 of Section 9.3 shows that the harmonic series $\sum 1/n$ also behaves in this manner. 

## Combining Series

Whenever we have two convergent series, we can add them term by term, subtract them term by term, or multiply them by constants to make new convergent series. 

THEOREM 8 If $\sum a_{n} = A$ and $\sum b_{n} = B$ are convergent series, then 

1. Sum Rule: 

$$
\sum \left(a _ {n} + b _ {n}\right) = \sum a _ {n} + \sum b _ {n} = A + B
$$

2. Difference Rule: 

$$
\sum \left(a _ {n} - b _ {n}\right) = \sum a _ {n} - \sum b _ {n} = A - B
$$

3. Constant Multiple Rule: 

$$
\sum k a _ {n} = k \sum a _ {n} = k A \quad (\text {   any   number   } k).
$$

Proof The three rules for series follow from the analogous rules for sequences in Theorem 1, Section 9.1. To prove the Sum Rule for series, let 

$$
A _ {n} = a _ {1} + a _ {2} + \dots + a _ {n}, \quad B _ {n} = b _ {1} + b _ {2} + \dots + b _ {n}.
$$

Then the partial sums of $\sum (a_{n} + b_{n})$ are 

$$
\begin{array}{r l} s _ {n} & = (a _ {1} + b _ {1}) + (a _ {2} + b _ {2}) + \dots + (a _ {n} + b _ {n}) \\ & = (a _ {1} + \dots + a _ {n}) + (b _ {1} + \dots + b _ {n}) \\ & = A _ {n} + B _ {n}. \end{array}
$$

Since $A_{n} \to A$ and $B_{n} \to B$ , we have $s_n \to A + B$ by the Sum Rule for sequences. The proof of the Difference Rule is similar. 

To prove the Constant Multiple Rule for series, observe that the partial sums of $\sum ka_{n}$ form the sequence 

$$
s _ {n} = k a _ {1} + k a _ {2} + \dots + k a _ {n} = k (a _ {1} + a _ {2} + \dots + a _ {n}) = k A _ {n},
$$

which converges to kA by the Constant Multiple Rule for sequences. 

As corollaries of Theorem 8, we have the following results. We omit the proofs. 

1. Every nonzero constant multiple of a divergent series diverges. 

2. If $\sum a_{n}$ converges and $\sum b_{n}$ diverges, then $\sum (a_{n} + b_{n})$ and $\sum (a_{n} - b_{n})$ both diverge. 

Caution Remember that $\sum(a_{n} + b_{n})$ can converge even if both $\sum a_{n}$ and $\sum b_{n}$ diverge. For example, both $\sum a_{n} = 1 + 1 + 1 + \cdots$ and $\sum b_{n} = (-1) + (-1) + (-1) + \cdots$ diverge, whereas $\sum(a_{n} + b_{n}) = 0 + 0 + 0 + \cdots$ converges to 0. 

## **EXAMPLE 9** Find the sums of the following series.

$$
\begin{array}{l l} \text {(a)} \sum_ {n = 1} ^ {\infty} \frac {3 ^ {n - 1} - 1}{6 ^ {n - 1}} = \sum_ {n = 1} ^ {\infty} \left(\frac {1}{2 ^ {n - 1}} - \frac {1}{6 ^ {n - 1}}\right) \\ = \sum_ {n = 1} ^ {\infty} \frac {1}{2 ^ {n - 1}} - \sum_ {n = 1} ^ {\infty} \frac {1}{6 ^ {n - 1}} & \text { Difference   Rule } \\ = \frac {1}{1 - (1 / 2)} - \frac {1}{1 - (1 / 6)} & \text { Geometric   series   with } a = 1 \text { and } r = 1 / 2, 1 / 6 \\ = 2 - \frac {6}{5} = \frac {4}{5} & \text { Both   series   converge   since } | 1 / 2 | <   1 \text { and } | 1 / 6 | <   1. \end{array}
$$

$$
\begin{array}{l l} \text {(b)} \sum_ {n = 0} ^ {\infty} \frac {4}{2 ^ {n}} = 4 \sum_ {n = 0} ^ {\infty} \frac {1}{2 ^ {n}} & \text { Constant   Multiple   Rule } \\ = 4 \left(\frac {1}{1 - (1 / 2)}\right) & \text { Geometric   series   with } a = 1 \text { and } r = 1 / 2 \\ = 8 & \text { Converges   since } | r | = 1 / 2 <   1. \end{array}
$$

## Adding or Deleting Terms

We can add a finite number of terms to a series or delete a finite number of terms without altering the series' convergence or divergence, although in the case of convergence, this will usually change the sum. If $\sum_{n=1}^{\infty} a_n$ converges, then $\sum_{n=k}^{\infty} a_n$ converges for any $k > 1$ and 

$$
\sum_ {n = 1} ^ {\infty} a _ {n} = a _ {1} + a _ {2} + \dots + a _ {k - 1} + \sum_ {n = k} ^ {\infty} a _ {n}.
$$

Conversely, if $\sum_{n=k}^{\infty} a_n$ converges for any $k > 1$ , then $\sum_{n=1}^{\infty} a_n$ converges. Thus, 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{5 ^ {n}} = \frac {1}{5} + \frac {1}{2 5} + \frac {1}{1 2 5} + \sum_ {n = 4} ^ {\infty} \frac {1}{5 ^ {n}}
$$

and 

$$
\sum_ {n = 4} ^ {\infty} \frac {1}{5 ^ {n}} = \left(\sum_ {n = 1} ^ {\infty} \frac {1}{5 ^ {n}}\right) - \frac {1}{5} - \frac {1}{2 5} - \frac {1}{1 2 5}.
$$

## HISTORICAL BIOGRAPHY Richard Dedekind (1831–1916)

Dedekind grew up in Germany and in 1850 entered the University of Gottingen. There he studied with Bernhard Riemann and Carl Gauss. Like Gauss, Dedekind preferred to study the theoretical aspects of number theory. His work on irrational numbers gave the subject a logical foundation. 

To know more, visit the companion Website. 

The convergence or divergence of a series is not affected by its first few terms. Only the “tail” of the series, the part that remains when we sum beyond some finite number of initial terms, influences whether it converges or diverges. 

## Reindexing

As long as we preserve the order of its terms, we can reindex any series without altering its convergence. To raise the starting value of the index h units, replace the n in the formula for $a_{n}$ by n - h: 

$$
\sum_ {n = 1} ^ {\infty} a _ {n} = \sum_ {n = 1 + h} ^ {\infty} a _ {n - h} = a _ {1} + a _ {2} + a _ {3} + \dots .
$$

To lower the starting value of the index h units, replace the n in the formula for $a_{n}$ by $n + h$ : 

$$
\sum_ {n = 1} ^ {\infty} a _ {n} = \sum_ {n = 1 - h} ^ {\infty} a _ {n + h} = a _ {1} + a _ {2} + a _ {3} + \dots .
$$

We saw this reindexing in starting a geometric series with the index n = 0 instead of the index n = 1, but we can use any other starting index value as well. We usually give preference to indexings that lead to simple expressions. 

**EXAMPLE 10** We can write the geometric series 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{2 ^ {n - 1}} = 1 + \frac {1}{2} + \frac {1}{4} + \dots
$$

as 

$$
\sum_ {n = 0} ^ {\infty} \frac {1}{2 ^ {n}}, \quad \sum_ {n = 5} ^ {\infty} \frac {1}{2 ^ {n - 5}}, \quad \text { or   even } \quad \sum_ {n = - 4} ^ {\infty} \frac {1}{2 ^ {n + 4}}.
$$

The partial sums remain the same no matter what indexing we choose to use. 

## EXERCISES 9.2

## Finding nth Partial Sums

In Exercises 1–6, find a formula for the nth partial sum of each series and use it to find the series' sum if the series converges. 

$$
2 + \frac {2}{3} + \frac {2}{9} + \frac {2}{2 7} + \dots + \frac {2}{3 ^ {n - 1}} + \dots
$$

$$
\frac {9}{1 0 0} + \frac {9}{1 0 0 ^ {2}} + \frac {9}{1 0 0 ^ {3}} + \dots + \frac {9}{1 0 0 ^ {n}} + \dots
$$

3. $1 - \frac{1}{2} + \frac{1}{4} - \frac{1}{8} + \cdots + (-1)^{n-1} \frac{1}{2^{n-1}} + \cdots$ 

4. $1 - 2 + 4 - 8 + \cdots + (-1)^{n-1} 2^{n-1} + \cdots$ 

5. $\frac{1}{2\cdot3}+\frac{1}{3\cdot4}+\frac{1}{4\cdot5}+\cdots+\frac{1}{(n+1)(n+2)}+\cdots$ 

$$
\frac {5}{1 \cdot 2} + \frac {5}{2 \cdot 3} + \frac {5}{3 \cdot 4} + \dots + \frac {5}{n (n + 1)} + \dots
$$

## Series with Geometric Terms

In Exercises 7–14, write out the first eight terms of each series to show how the series starts. Then find the sum of the series or show that it diverges. 

$$
\sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n}}{4 ^ {n}}
$$

8. $\sum_{n=2}^{\infty} \frac{1}{4^n}$ 

9. $\sum_{n=1}^{\infty}\left(1 - \frac{7}{4^n}\right)$ 

10. $\sum_{n=0}^{\infty} (-1)^{n} \frac{5}{4^{n}}$ 

11. $\sum_{n=0}^{\infty}\left(\frac{5}{2^n} + \frac{1}{3^n}\right)$ 

12. $\sum_{n=0}^{\infty}\left(\frac{5}{2^n}-\frac{1}{3^n}\right)$ 

13. $\sum_{n=0}^{\infty}\left(\frac{1}{2^n} + \frac{(-1)^n}{5^n}\right)$ 

14. $\sum_{n = 0}^{\infty}\left(\frac{2^{n + 1}}{5^n}\right)$ 

In Exercises 15–22, determine whether the geometric series converges or diverges. If a series converges, find its sum. 

15. $1 + \left(\frac{2}{5}\right) + \left(\frac{2}{5}\right)^{2} + \left(\frac{2}{5}\right)^{3} + \left(\frac{2}{5}\right)^{4} + \cdots$ 

16. $1 + (-3) + (-3)^{2} + (-3)^{3} + (-3)^{4} + \cdots$ 

17. $\left(\frac{1}{8}\right) + \left(\frac{1}{8}\right)^2 + \left(\frac{1}{8}\right)^3 + \left(\frac{1}{8}\right)^4 + \left(\frac{1}{8}\right)^5 + \dots$ 

18. $\left(\frac{-2}{3}\right)^2 +\left(\frac{-2}{3}\right)^3 +\left(\frac{-2}{3}\right)^4 +\left(\frac{-2}{3}\right)^5 +\left(\frac{-2}{3}\right)^6 +\dots$ 

19. $1 - \left(\frac{2}{e}\right) + \left(\frac{2}{e}\right)^2 -\left(\frac{2}{e}\right)^3 +\left(\frac{2}{e}\right)^4 -\dots$ 

20. $\left(\frac{1}{3}\right)^{-2}-\left(\frac{1}{3}\right)^{-1}+1-\left(\frac{1}{3}\right)+\left(\frac{1}{3}\right)^{2}-\cdots$ 

21. $1 + \left(\frac{10}{9}\right)^2 +\left(\frac{10}{9}\right)^4 +\left(\frac{10}{9}\right)^6 +\left(\frac{10}{9}\right)^8 +\dots$ 

22. $\frac{9}{4} -\frac{27}{8} +\frac{81}{16} -\frac{243}{32} +\frac{729}{64} -\dots$ 

## Repeating Decimals

Express each of the numbers in Exercises 23–30 as the ratio of two integers. 

23. $0.\overline{23}=0.23\ 23\ 23\ldots$ 

24. $0.\overline{234}=0.234\ 234\ 234\ldots$ 

25. 0. $\overline{7}$ = 0.7777 ... 

26. $0.\overline{d} = 0.\overline{ddd}\ldots$ , where $d$ is a digit 

27. $0.0\overline{6} = 0.06666\dots$ 

28. $1.\overline{414}=1.414\ 414\ 414\ldots$ 

29. $1.24\overline{123} = 1.24\ 123\ 123\ 123\ldots$ 

30. $3.\overline{142857} = 3.142857\ 142857$ ... 

## Using the nth-Term Test

In Exercises 31–38, use the nth-Term Test for divergence to show that the series is divergent, or state that the test is inconclusive. 

31. $\sum_{n = 1}^{\infty}\frac{n}{n + 10}$ 

32. $\sum_{n=1}^{\infty}\frac{n(n+1)}{(n+2)(n+3)}$ 

33. $\sum_{n = 0}^{\infty}\frac{1}{n + 4}$ 

34. $\sum_{n=1}^{\infty} \frac{n}{n^{2} + 3}$ 

35. $\sum_{n = 1}^{\infty}\cos \frac{1}{n}$ 

36. $\sum_{n = 0}^{\infty}\frac{e^{n}}{e^{n} + n}$ 

37. $\sum_{n = 1}^{\infty}\ln \frac{1}{n}$ 

$$
\sum_ {n = 0} ^ {\infty} \cos n \pi
$$

Telescoping Series 

In Exercises 39–44, find a formula for the nth partial sum of the series and use it to determine whether the series converges or diverges. If a series converges, find its sum. 

39. $\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n+1}\right)$ 

40. $\sum_{n=1}^{\infty}\left(\frac{3}{n^2}-\frac{3}{(n+1)^2}\right)$ 

41. $\sum_{n=1}^{\infty}\left(\ln\sqrt{n+1}-\ln\sqrt{n}\right)$ 42. $\sum_{n=1}^{\infty}\left(\tan(n)-\tan(n-1)\right)$ 

43. $\sum_{n=1}^{\infty}\left(\arccos\left(\frac{1}{n+1}\right)-\arccos\left(\frac{1}{n+2}\right)\right)$ 

44. $\sum_{n=1}^{\infty}\left(\sqrt{n+4}-\sqrt{n+3}\right)$ 

Find the sum of each series in Exercises 45-52. 

45. $\sum_{n=1}^{\infty} \frac{4}{(4n - 3)(4n + 1)}$ 

$$
\sum_ {n = 1} ^ {\infty} \frac {6}{(2 n - 1) (2 n + 1)}
$$

47. $\sum_{n=1}^{\infty} \frac{40n}{(2n - 1)^2 (2n + 1)^2}$ 

48. $\sum_{n=1}^{\infty} \frac{2n + 1}{n^{2}(n + 1)^{2}}$ 

49. $\sum_{n=1}^{\infty}\left(\frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n+1}}\right)$ 

50. $\sum_{n=1}^{\infty}\left(\frac{1}{2^{1/n}} - \frac{1}{2^{1/(n+1)}}\right)$ 

51. $\sum_{n=1}^{\infty}\left(\frac{1}{\ln(n+2)} - \frac{1}{\ln(n+1)}\right)$ 

52. $\sum_{n=1}^{\infty}\left(\tan^{-1}(n) - \tan^{-1}(n+1)\right)$ 

## Convergence or Divergence

Which series in Exercises 53–76 converge, and which diverge? Give reasons for your answers. If a series converges, find its sum. 

53. $\sum_{n = 0}^{\infty}\left(\frac{1}{\sqrt{2}}\right)^n$ 

54. $\sum_{n = 0}^{\infty}\left(\sqrt{2}\right)^n$ 

55. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{3}{2^n}$ 

56. $\sum_{n=1}^{\infty} (-1)^{n+1} n$ 

57. $\sum_{n=0}^{\infty} \cos\left(\frac{n\pi}{2}\right)$ 

58. $\sum_{n = 0}^{\infty}\frac{\cos n\pi}{5^n}$ 

59. $\sum_{n = 0}^{\infty}e^{-2n}$ 

60. $\sum_{n = 1}^{\infty}\ln \frac{1}{3^n}$ 

61. $\sum_{n = 1}^{\infty}\frac{2}{10^{n}}$ 

62. $\sum_{n=0}^{\infty} \frac{1}{x^n}, |x| > 1$ 

63. $\sum_{n = 0}^{\infty}\frac{2^n - 1}{3^n}$ 

64. $\sum_{n=1}^{\infty}\left(1 - \frac{1}{n}\right)^n$ 

65. $\sum_{n=0}^{\infty} \frac{n!}{1000^n}$ 

70. $\sum_{n=1}^{\infty} \ln \left( \frac{n}{2n+1} \right)$ 

69. $\sum_{n=1}^{\infty} \ln \left( \frac{n}{n+1} \right)$ 

66. $\sum_{n = 1}^{\infty}\frac{n^n}{n!}$ 

67. $\sum_{n=1}^{\infty} \frac{2^n + 3^n}{4^n}$ 

68. $\sum_{n=1}^{\infty} \frac{2^n + 4^n}{3^n + 4^n}$ 

71. $\sum_{n = 0}^{\infty}\left(\frac{e}{\pi}\right)^n$ 

$$
\sum_ {n = 0} ^ {\infty} \frac {e ^ {n \pi}}{\pi^ {n e}}
$$

73. $\sum_{n=1}^{\infty}\left(\frac{n}{n+1}-\frac{n+2}{n+3}\right)$ 

74. $\sum_{n=2}^{\infty}\left(\sin\left(\frac{\pi}{n}\right)-\sin\left(\frac{\pi}{n-1}\right)\right)$ 

75. $\sum_{n=1}^{\infty}\left(\cos\left(\frac{\pi}{n}\right)+\sin\left(\frac{\pi}{n}\right)\right)$ 

76. $\sum_{n=0}^{\infty}\left(\ln(4e^{n}-1)-\ln(2e^{n}+1)\right)$ 

## Geometric Series with a Variable x

In each of the geometric series in Exercises 77–80, write out the first few terms of the series to find a and r, and find the sum of the series. Then express the inequality $|r| < 1$ in terms of x and find the values of x for which the inequality holds and the series converges. 

77. $\sum_{n=0}^{\infty} (-1)^n x^n$ 

78. $\sum_{n=0}^{\infty} (-1)^n x^{2n}$ 

79. $\sum_{n = 0}^{\infty}3\left(\frac{x - 1}{2}\right)^{n}$ 

80. $\sum_{n=0}^{\infty} \frac{(-1)^n}{2} \left( \frac{1}{3 + \sin x} \right)^n$ 

In Exercises 81–86, find the values of x for which the given geometric series converges. Also, find the sum of the series (as a function of x) for those values of x. 

81. $\sum_{n = 0}^{\infty}2^{n}x^{n}$ 

82. $\sum_{n=0}^{\infty} (-1)^{n} x^{-2n}$ 

83. $\sum_{n=0}^{\infty} (-1)^{n} (x + 1)^{n}$ 

84. $\sum_{n=0}^{\infty}\left(-\frac{1}{2}\right)^n (x - 3)^n$ 

85. $\sum_{n = 0}^{\infty}\sin^n x$ 

86. $\sum_{n=0}^{\infty} (\ln x)^n$ 

## Theory and Examples

87. The series in Exercise 5 can also be written as 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{(n + 1) (n + 2)}
$$

$$
\sum_ {n = - 1} ^ {\infty} \frac {1}{(n + 3) (n + 4)}.
$$

Write this series as a sum beginning with (a) $n = -2$ , (b) $n = 0$ , (c) $n = 5$ . 

88. The series in Exercise 6 can also be written as 

$\sum_{n=1}^{\infty}\frac{5}{n(n+1)}$ and $\sum_{n=0}^{\infty}\frac{5}{(n+1)(n+2)}$ . 

Write this series as a sum beginning with (a) $n = -1$ , (b) $n = 3$ , (c) $n = 20$ . 

89. Make up an infinite series of nonzero terms whose sum is a. 1 b. -3 c. 0. 

90. (Continuation of Exercise 89.) Can you make an infinite series of nonzero terms that converges to any number you want? Explain. 

91. Show by example that $\sum (a_{n} / b_{n})$ may diverge even though $\sum a_{n}$ and $\sum b_{n}$ converge and no $b_{n}$ equals 0. 

92. Find convergent geometric series $A = \sum a_{n}$ and $B = \sum b_{n}$ that illustrate the fact that $\sum a_{n}b_{n}$ may converge without being equal to $AB$ . 

93. Show by example that $\sum(a_{n}/b_{n})$ may converge to something other than A/B even when $A = \sum a_{n}, B = \sum b_{n} \neq 0$ , and no $b_{n}$ equals 0. 

94. If $\sum a_{n}$ converges and $a_{n} > 0$ for all $n$ , can anything be said about $\sum (1 / a_n)$ ? Give reasons for your answer. 

95. What happens if you add a finite number of terms to a divergent series or delete a finite number of terms from a divergent series? Give reasons for your answer. 

96. If $\sum a_{n}$ converges and $\sum b_{n}$ diverges, can anything be said about their term-by-term sum $\sum (a_{n} + b_{n})$ ? Give reasons for your answer. 

97. Make up a geometric series $\sum ar^{n - 1}$ that converges to the number 5 if 

a. $a = 2$ 

$$
\mathbf {b}. a = 1 3 / 2.
$$

98. Find the value of b for which 

$$
1 + e ^ {b} + e ^ {2 b} + e ^ {3 b} + \dots = 9.
$$

99. For what values of $r$ does the infinite series 

$$
1 + 2 r + r ^ {2} + 2 r ^ {3} + r ^ {4} + 2 r ^ {5} + r ^ {6} + \dots
$$

converge? Find the sum of the series when it converges. 

100. The accompanying figure shows the first five of a sequence of squares. The outermost square has an area of $4 \, m^{2}$ . Each of the other squares is obtained by joining the midpoints of the sides of the squares before it. Find the sum of the areas of all the squares. 

![[d7080b6a4274a478f2765446db1eb2441f364d48f269551ee7a004f783ff2eec.jpg|image]]


101. Drug dosage A patient takes a 300 mg tablet for the control of high blood pressure every morning at the same time. The concentration of the drug in the patient's system decays exponentially at a constant hourly rate of k = 0.12. 

a. How many milligrams of the drug are in the patient's system just before the second tablet is taken? Just before the third tablet is taken? 

b. After the patient has taken the medication for at least six months, what quantity of drug is in the patient's body just before the next regularly scheduled morning tablet is taken? 

102. Show that the error $(L - s_n)$ obtained by replacing a convergent geometric series with one of its partial sums $s_n$ is $ar^n / (1 - r)$ . 

103. The Cantor set To construct this set, we begin with the closed interval $[0,1]$ . From that interval, we remove the middle open interval $(1/3,2/3)$ , leaving the two closed intervals $[0,1/3]$ and $[2/3,1]$ . At the second step we remove the open middle third interval from each of those remaining. From $[0,1/3]$ we remove the open interval $(1/9,2/9)$ , and from $[2/3,1]$ we remove $(7/9,8/9)$ , leaving behind the four closed intervals $[0,1/9]$ , $[2/9,1/3]$ , $[2/3,7/9]$ , and $[8/9,1]$ . At the next step, we remove the open middle third interval from each closed interval left behind, so $(1/27,2/27)$ is removed from $[0,1/9]$ , leaving the closed intervals $[0,1/27]$ and $[2/27,1/9]$ ; $(7/27,8/27)$ is removed from $[2/9,1/3]$ , leaving behind $[2/9,7/27]$ and $[8/27,1/3]$ , and so forth. We continue this process repeatedly without stopping, at each step removing the open third interval from every closed interval remaining behind from the preceding step. The numbers remaining in the interval $[0,1]$ , after all open middle third intervals have been removed, are the points in the Cantor set (named after Georg Cantor, 1845–1918). The set has some interesting properties. 

a. The Cantor set contains infinitely many numbers in $[0,1]$ . List 12 numbers that belong to the Cantor set. 

b. Show, by summing an appropriate geometric series, that the total length of all the open middle third intervals that have been removed from $[0,1]$ is equal to 1. 

104. Helge von Koch's snowflake curve Helge von Koch's snowflake is a curve of infinite length that encloses a region of finite area. To see why this is so, suppose the curve is generated by starting with an equilateral triangle whose sides have length 1. 

a. Find the length $L_{n}$ of the nth curve $C_{n}$ and show that $\lim_{n\to\infty}L_{n}=\infty$ . 

b. Find the area $A_{n}$ of the region enclosed by $C_{n}$ and show that $\lim_{n\to \infty}A_n = (8 / 5)A_1$ . 

![[2db579311816975267be145f929363aef902390d909836427701a6f72e625fa2.jpg|image]]


105. The largest circle in the accompanying figure has radius 1. Consider the sequence of circles of maximum area inscribed in semicircles of diminishing size. What is the sum of the areas of all of the circles? 

![[b2415f58d17c2a81444786e9d65ca587e06ee3bc646ae601ee9f2fee5499baba.jpg|image]]


The most basic question we can ask about a series is whether it converges. In this section we begin to study this question, starting with series that have nonnegative terms. Such a series converges if its sequence of partial sums is bounded. If we establish that a given series does converge, we generally do not have a formula available for its sum. So to get an estimate for the sum of a convergent series, we investigate the error involved when using a partial sum to approximate the total sum. 

## Nondecreasing Partial Sums

Suppose that $\sum_{n=1}^{\infty} a_n$ is an infinite series with $a_n \geq 0$ for all $n$ . Then each partial sum is greater than or equal to its predecessor because $s_{n+1} = s_n + a_n$ , so 

$$
s _ {1} \leq s _ {2} \leq s _ {3} \leq \dots \leq s _ {n} \leq s _ {n + 1} \leq \dots .
$$

Since the partial sums form a nondecreasing sequence, the Monotonic Sequence Theorem (Theorem 6, Section 9.1) gives the following result. 

Corollary of Theorem 6 A series $\sum_{n=1}^{\infty} a_n$ of nonnegative terms converges if and only if its partial sums are bounded from above. 

## **EXAMPLE 1** As an application of the above corollary, consider the harmonic series

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n} = 1 + \frac {1}{2} + \frac {1}{3} + \dots + \frac {1}{n} + \dots .
$$

Although the nth term 1/n does go to zero, the series diverges because there is no upper bound for its partial sums. To see why, group the terms of the series in the following way: 

$$
1 + \frac {1}{2} + \underbrace {\left(\frac {1}{3} + \frac {1}{4}\right)} _ {> \frac {2}{4} = \frac {1}{2}} + \underbrace {\left(\frac {1}{5} + \frac {1}{6} + \frac {1}{7} + \frac {1}{8}\right)} _ {> \frac {4}{8} = \frac {1}{2}} + \underbrace {\left(\frac {1}{9} + \frac {1}{1 0} + \cdots + \frac {1}{1 6}\right)} _ {> \frac {8}{1 6} = \frac {1}{2}} + \dots .
$$

The sum of the first two terms is 1.5. The sum of the next two terms is $1/3 + 1/4$ , which is greater than $1/4 + 1/4 = 1/2$ . The sum of the next four terms is $1/5 + 1/6 + 1/7 + 1/8$ , which is greater than $1/8 + 1/8 + 1/8 + 1/8 = 1/2$ . The sum of the next eight terms is $1/9 + 1/10 + 1/11 + 1/12 + 1/13 + 1/14 + 1/15 + 1/16$ , which is greater than $8/16 = 1/2$ . The sum of the next 16 terms is greater than $16/32 = 1/2$ , and so on. In general, the sum of $2^{m}$ terms ending with $1/2^{m+1}$ is greater than $2^{m}/2^{m+1} = 1/2$ . Therefore, if $n = 2^{k}$ , then the partial sum $s_{n}$ is greater than k/2, so the sequence of partial sums is not bounded from above. The harmonic series diverges. 

## The Integral Test

We introduce the Integral Test with a series that is related to the harmonic series, but whose nth term is $1/n^{2}$ instead of 1/n. 

**EXAMPLE 2** Does the following series converge? 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} = 1 + \frac {1}{4} + \frac {1}{9} + \frac {1}{1 6} + \dots + \frac {1}{n ^ {2}} + \dots
$$

## Caution

The series and integral need not have the same value in the convergent case. You will see in Example 6 that 

$$
\sum_ {n = 1} ^ {\infty} \left(1 / n ^ {2}\right) \neq \int_ {1} ^ {\infty} \left(1 / x ^ {2}\right) d x = 1.
$$

![[5563820bf18e6d9828f928b784479d31e1463cc4b221570137162953e62e8d16.jpg|image]]



FIGURE 9.11 The sum of the areas of the rectangles under the graph of $f(x) = 1/x^{2}$ is less than the area under the graph (Example 2).


![[8e3eccabbd66beb4f6387b03fcd460384850b3e7d44367c82a39ebf21e9f5dba.jpg|image]]



(a)


![[7081be277f0759d18789dc615c92f5e1f8a7cecddfc2544b71d700f9790e0003.jpg|image]]



(b)



FIGURE 9.12 Subject to the conditions of the Integral Test, the series $\sum_{n=1}^{\infty} a_n$ and the integral $\int_1^\infty f(x) dx$ both converge or both diverge.


**Solution** We determine the convergence of $\sum_{n=1}^{\infty}\left(1/n^{2}\right)$ by comparing it with $\int_{1}^{\infty}\left(1/x^{2}\right)dx$ . To carry out the comparison, we think of the terms of the series as values of the function $f(x)=1/x^{2}$ and interpret these values as the areas of rectangles under the curve $y=1/x^{2}$ . 

As Figure 9.11 shows, 

$$
\begin{array}{l l} s _ {n} = \frac {1}{1 ^ {2}} + \frac {1}{2 ^ {2}} + \frac {1}{3 ^ {2}} + \dots + \frac {1}{n ^ {2}} \\ = f (1) + f (2) + f (3) + \dots + f (n) \\ <   f (1) + \int_ {1} ^ {n} \frac {1}{x ^ {2}} d x & \text {   Rectangle   areas   sum   to   less   } \\ <   1 + \int_ {1} ^ {\infty} \frac {1}{x ^ {2}} d x & \text {   than   area   under   graph.   } \\ = 1 + 1 = 2. & \text {   As   in   Section   8.8,   } \\ & \text {   Example   3,   } \int_ {1} ^ {\infty} (1 / x ^ {2}) d x = 1. \end{array}
$$

Thus the partial sums of $\sum_{n=1}^{\infty}\left(1/n^{2}\right)$ are bounded from above (by 2), and the series converges. 

## THEOREM 9—The Integral Test

Let $\{a_{n}\}$ be a sequence of positive terms. Suppose that $a_{n} = f(n)$ , where $f$ is a continuous, positive, decreasing function of $x$ for all $x \geq N$ ( $N$ a positive integer). Then the series $\sum_{n=N}^{\infty} a_{n}$ and the integral $\int_{N}^{\infty} f(x) dx$ both converge or both diverge. 

Proof We establish the test for the case $N = 1$ . The proof for general $N$ is similar. 

We start with the assumption that f is a decreasing function with $f(n) = a_{n}$ for every n. This leads us to observe that the rectangles in Figure 9.12a, which have areas $a_{1}, a_{2}, \ldots, a_{n}$ , collectively enclose more area than that under the curve $y = f(x)$ from x = 1 to $x = n + 1$ . That is, 

$$
\int_ {1} ^ {n + 1} f (x) d x \leq a _ {1} + a _ {2} + \dots + a _ {n}.
$$

In Figure 9.12b the rectangles have been faced to the left instead of to the right. If we momentarily disregard the first rectangle of area $a_{1}$ , we see that 

$$
a _ {2} + a _ {3} + \dots + a _ {n} \leq \int_ {1} ^ {n} f (x) d x.
$$

If we include $a_1$ , we have 

$$
a _ {1} + a _ {2} + \dots + a _ {n} \leq a _ {1} + \int_ {1} ^ {n} f (x) d x.
$$

Combining these results gives 

$$
\int_ {1} ^ {n + 1} f (x) d x \leq a _ {1} + a _ {2} + \dots + a _ {n} \leq a _ {1} + \int_ {1} ^ {n} f (x) d x.
$$

These inequalities hold for each n, and continue to hold as $n \rightarrow \infty$ . 

If $\int_{1}^{\infty}f(x)dx$ is finite, the right-hand inequality shows that $\sum a_{n}$ is finite. If $\int_{1}^{\infty}f(x)dx$ is infinite, the left-hand inequality shows that $\sum a_{n}$ is infinite. Hence the series and the integral are either both finite or both infinite. 

The $p$ -series $\sum_{n=1}^{\infty} \frac{1}{n^p}$ 

**EXAMPLE 3** Show that the p-series 

converges if $p > 1$ , diverges if $p \leq 1$ . 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {p}} = \frac {1}{1 ^ {p}} + \frac {1}{2 ^ {p}} + \frac {1}{3 ^ {p}} + \dots + \frac {1}{n ^ {p}} + \dots
$$

(p a real constant) converges if p > 1 and diverges if $p \leq 1$ . 

**Solution** If p > 1, then $f(x) = 1/x^{p}$ is a positive, continuous, and decreasing function of x. Since 

$$
\begin{array}{l l}\int_ {1} ^ {\infty} \frac {1}{x ^ {p}} d x = \int_ {1} ^ {\infty} x ^ {- p} d x = \lim _ {b \rightarrow \infty} \left[ \frac {x ^ {- p + 1}}{- p + 1} \right] _ {1} ^ {b}&\text { Evaluate   the   improper   integral }\\= \frac {1}{1 - p} \lim _ {b \rightarrow \infty} \left(\frac {1}{b ^ {p - 1}} - 1\right)\\= \frac {1}{1 - p} (0 - 1) = \frac {1}{p - 1},&b ^ {p - 1} \rightarrow \infty \text { as } b \rightarrow \infty\\&\text { because } p - 1 > 0.\end{array}
$$

the series converges by the Integral Test. We emphasize that the sum of the $p$ -series is not $1 / (p - 1)$ . The series converges, but we don't know the value it converges to. 

If $p \leq 0$ , the series diverges by the nth-term test. If 0 < p < 1, then 1 - p > 0 and 

$$
\int_ {1} ^ {\infty} \frac {1}{x ^ {p}} d x = \frac {1}{1 - p} \lim _ {b \rightarrow \infty} (b ^ {1 - p} - 1) = \infty .
$$

Therefore, the series diverges by the Integral Test. 

If $p = 1$ , we have the (divergent) harmonic series 

$$
1 + \frac {1}{2} + \frac {1}{3} + \dots + \frac {1}{n} + \dots .
$$

In summary, we have convergence for p > 1 but divergence for all other values of p. 

The p-series with p = 1 is the harmonic series (Example 1). The p-Series Test shows that the harmonic series is just barely divergent; if we increase p to 1.000000001, for instance, the series converges! 

The slowness with which the partial sums of the harmonic series approach infinity is impressive. For instance, it takes more than 178 million terms of the harmonic series to move the partial sums beyond 20. (See also Exercise 49b.) 

**EXAMPLE 4** The series $\sum_{n=1}^{\infty}\left(1/(n^{2}+1)\right)$ is not a $p$ -series, but we will show that it converges by the Integral Test. The function $f(x)=1/(x^{2}+1)$ is positive, continuous, and decreasing for $x\geq 1$ since it is the reciprocal of a function that is positive, continuous, and increasing on this interval, and 

$$
\begin{array}{r l}\int_ {1} ^ {\infty} \frac {1}{x ^ {2} + 1} d x&= \lim _ {b \rightarrow \infty} \left[ \arctan x \right] _ {1} ^ {b}\\&= \lim _ {b \rightarrow \infty} \left[ \arctan b - \arctan 1 \right]\\&= \frac {\pi}{2} - \frac {\pi}{4} = \frac {\pi}{4}.\end{array}
$$

The Integral Test tells us that the series converges, but it does not say that $\pi /4$ is the sum of the series. 

**EXAMPLE 5** Determine the convergence or divergence of the series. 

(a) $\sum_{n=1}^{\infty} ne^{-n^2}$ (b) $\sum_{n=1}^{\infty} \frac{1}{2^{\ln n}}$ 


(b)


Solutions 

(a) The function $f(x) = xe^{-x^2}$ is continuous and positive for $x \geq 1$ . The first derivative 

$$
f ^ {\prime} (x) = e ^ {- x ^ {2}} - 2 x ^ {2} e ^ {- x ^ {2}} = (1 - 2 x ^ {2}) e ^ {- x ^ {2}}
$$

is negative on that interval (since $x \geq 1$ implies $1 - 2x^{2} \leq 1 - 2 < 0$ ), so f is decreasing and we can apply the Integral Test: 

$$
\begin{array}{r l} \int_ {1} ^ {\infty} \frac {x}{e ^ {x ^ {2}}} d x & = \frac {1}{2} \int_ {1} ^ {\infty} \frac {d u}{e ^ {u}} \\ & = \lim _ {b \to \infty} \left[ - \frac {1}{2} e ^ {- u} \right] _ {1} ^ {b} \\ & = \lim _ {b \to \infty} \left(- \frac {1}{2 e ^ {b}} + \frac {1}{2 e}\right) = \frac {1}{2 e}. \end{array} \quad u = x ^ {2}, d u = 2 x d x
$$

Since the integral converges, the series also converges. 

(b) The integrand $1 / (2^{\ln x})$ is a positive, continuous, and decreasing function on $(1,\infty)$ , so we can apply the Integral Test. 

$$
\begin{array}{r l}\int_ {1} ^ {\infty} \frac {d x}{2 ^ {\ln x}}&= \int_ {0} ^ {\infty} \frac {e ^ {u} d u}{2 ^ {u}}\\&= \int_ {0} ^ {\infty} \left(\frac {e}{2}\right) ^ {u} d u\\&= \lim _ {b \rightarrow \infty} \frac {1}{\ln \left(\frac {e}{2}\right)} \left(\left(\frac {e}{2}\right) ^ {b} - 1\right) = \infty \quad (e / 2) > 1\end{array}
$$

The improper integral diverges, so the series diverges also. 

## Error Estimation

![[1c2092f26877439f2bb81b132c774bb61e1623feac4e1b7276212ae57ade974c.jpg|image]]


For some convergent series, such as the geometric series or the telescoping series in Example 5 of Section 9.2, we can actually find the total sum of the series. That is, we can find the limiting value S of the sequence of partial sums. For most convergent series, however, we cannot easily find the total sum. Nevertheless, we can estimate the sum by adding the first n terms to get $s_{n}$ , but we need to know how far off $s_{n}$ is from the total sum S. An approximation to a function or to a number is more useful when it is accompanied by a bound on the size of the worst possible error that could occur. With such an error bound we can try to make an estimate or approximation that is close enough for the problem at hand. Without a bound on the error size, we are just guessing and hoping that we are close to the actual answer. We now show a way to bound the error size using integrals. 


FIGURE 9.13 A geometric interpretation of Remainder Formula (1).


![[59a836bc58b3ac2e61c9b5c41b277c266ef4bf269a268c6d477a6da8a999d385.jpg|image]]


Suppose that a series $\sum a_{n}$ with positive terms is shown to be convergent by the Integral Test, and we want to estimate the size of the remainder $R_{n}$ measuring the difference between the total sum S of the series and its nth partial sum $s_{n}$ . That is, we wish to estimate 

$$
R _ {n} = S - s _ {n} = a _ {n + 1} + a _ {n + 2} + a _ {n + 3} + \dots .
$$

To get a lower bound for the remainder, we compare the sum of the areas of the rectangles with the area under the curve $y = f(x)$ for $x \geq n$ (see Figure 9.13a). We see that 

$$
R _ {n} = a _ {n + 1} + a _ {n + 2} + a _ {n + 3} + \dots \geq \int_ {n + 1} ^ {\infty} f (x) d x.
$$

Similarly, from Figure 9.13b, we find an upper bound with 

$$
R _ {n} = a _ {n + 1} + a _ {n + 2} + a _ {n + 3} + \dots \leq \int_ {n} ^ {\infty} f (x) d x.
$$

These comparisons prove the following result, giving bounds on the size of the remainder. 

Bounds for the Remainder in the Integral Test 

Suppose $\{a_k\}$ is a sequence of positive terms with $a_{k} = f(k)$ , where $f$ is a continuous positive decreasing function of $x$ for all $x \geq n$ , and suppose that $\sum a_{n}$ converges to $S$ . Then the remainder $R_{n} = S - s_{n}$ satisfies the inequalities 

$$
\int_ {n + 1} ^ {\infty} f (x) d x \leq R _ {n} \leq \int_ {n} ^ {\infty} f (x) d x.\tag{1}
$$

Since $s_n + R_n = S$ , if we add the partial sum $s_n$ to each side of the inequalities in (1), we get 

$$
s _ {n} + \int_ {n + 1} ^ {\infty} f (x) d x \leq S \leq s _ {n} + \int_ {n} ^ {\infty} f (x) d x.\tag{2}
$$

The inequalities in (2) are useful for estimating the error in approximating the sum of a series known to converge by the Integral Test. The error can be no larger than the length of the interval containing S, with endpoints given by (2). 

**EXAMPLE 6** Estimate the sum of the series $\sum (1 / n^2)$ using the inequalities in (2) and $n = 10$ . 

**Solution** We have that 

$$
\int_ {n} ^ {\infty} \frac {1}{x ^ {2}} d x = \lim _ {b \rightarrow \infty} \left[ - \frac {1}{x} \right] _ {n} ^ {b} = \lim _ {b \rightarrow \infty} \left(- \frac {1}{b} + \frac {1}{n}\right) = \frac {1}{n}.
$$

Using this result with the inequalities in (2) gives 

$$
s _ {1 0} + \frac {1}{1 1} \leq S \leq s _ {1 0} + \frac {1}{1 0}.
$$

Since $s_{10} = 1 + (1/4) + (1/9) + (1/16) + \cdots + (1/100) \approx 1.54977$ , these last inequalities give 

$$
1. 6 4 0 6 8 \leq S \leq 1. 6 4 9 7 7.
$$

If we approximate the sum $S$ by the midpoint of this interval, we find that 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} \approx 1. 6 4 5 2.
$$

The $p$ -series for $p = 2$ 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} = \frac {\pi^ {2}}{6} \approx 1. 6 4 4 9 3
$$

The error in this approximation is then less than half the length of the interval, so the error is less than 0.005. Using a trigonometric Fourier series, we prove in Section 19.4 that $S$ is equal to $\pi^2 / 6 \approx 1.64493$ . 

## EXERCISES

## 9.3

## Applying the Integral Test

Use the Integral Test to determine whether the series in Exercises 1–12 converge or diverge. Be sure to check that the conditions of the Integral Test are satisfied. 

7. $\sum_{n=1}^{\infty} \frac{n}{n^{2} + 4}$ 

8. $\sum_{n=2}^{\infty} \frac{\ln(n^{2})}{n}$ 

1. $\sum_{n=1}^{\infty} \frac{1}{n^{2}}$ 

10. $\sum_{n=2}^{\infty} \frac{n - 4}{n^2 - 2n + 1}$ 

2. $\sum_{n=1}^{\infty} \frac{1}{n^{0.2}}$ 

9. $\sum_{n = 1}^{\infty}\frac{n^{2}}{e^{n / 3}}$ 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2} + 4}
$$

4. $\sum_{n=1}^{\infty} \frac{1}{n+4}$ 

5. $\sum_{n = 1}^{\infty}e^{-2n}$ 

$$
\sum_ {n = 2} ^ {\infty} \frac {1}{n (\ln n) ^ {2}}
$$

11. $\sum_{n=1}^{\infty} \frac{7}{\sqrt{n+4}}$ 

12. $\sum_{n=2}^{\infty} \frac{1}{5n + 10\sqrt{n}}$ 

## Determining Convergence or Divergence

Which of the series in Exercises 13–46 converge, and which diverge? Give reasons for your answers. (When you check an answer, remember that there may be more than one way to determine the series' convergence or divergence.) 

13. $\sum_{n=1}^{\infty} \frac{1}{10^n}$ 

14. $\sum_{n = 1}^{\infty}e^{-n}$ 

$$
\sum_ {n = 1} ^ {\infty} \frac {n}{n + 1}
$$

16. $\sum_{n = 1}^{\infty}\frac{5}{n + 1}$ 

17. $\sum_{n = 1}^{\infty}\frac{3}{\sqrt{n}}$ 

18. $\sum_{n = 1}^{\infty}\frac{-2}{n\sqrt{n}}$ 

19. $\sum_{n = 1}^{\infty} - \frac{1}{8^n}$ 

20. $\sum_{n = 1}^{\infty}\frac{-8}{n}$ 

21. $\sum_{n=2}^{\infty} \frac{\ln n}{n}$ 

22. $\sum_{n=2}^{\infty} \frac{\ln n}{\sqrt{n}}$ 

23. $\sum_{n = 1}^{\infty}\frac{2^n}{3^n}$ 

24. $\sum_{n=1}^{\infty} \frac{5^n}{4^n + 3}$ 

$$
\sum_ {n = 0} ^ {\infty} \frac {- 2}{n + 1}
$$

26. $\sum_{n=1}^{\infty} \frac{1}{2n - 1}$ 

27. $\sum_{n=1}^{\infty} \frac{2^n}{n+1}$ 

28. $\sum_{n=1}^{\infty}\left(1 + \frac{1}{n}\right)^n$ 

29. $\sum_{n = 2}^{\infty}\frac{\sqrt{n}}{\ln n}$ 

30. $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n} (\sqrt{n} + 1)}$ 

31. $\sum_{n=1}^{\infty} \frac{1}{(\ln 2)^n}$ 

32. $\sum_{n=1}^{\infty} \frac{1}{(\ln 3)^n}$ 

33. $\sum_{n=3}^{\infty} \frac{(1/n)}{(\ln n) \sqrt{\ln^2 n - 1}}$ 

34. $\sum_{n=1}^{\infty} \frac{1}{n(1 + \ln^{2} n)}$ 

35. $\sum_{n = 1}^{\infty}n\sin \frac{1}{n}$ 

36. $\sum_{n = 1}^{\infty}n\tan \frac{1}{n}$ 

37. $\sum_{n=1}^{\infty} \frac{e^n}{1 + e^{2n}}$ 

38. $\sum_{n=1}^{\infty} \frac{2}{1 + e^n}$ 

39. $\sum_{n=1}^{\infty} \frac{e^n}{10 + e^n}$ 

40. $\sum_{n=1}^{\infty} \frac{e^n}{(10 + e^n)^2}$ 

41. $\sum_{n=2}^{\infty} \frac{\sqrt{n+2}-\sqrt{n+1}}{\sqrt{n+1}\sqrt{n+2}}$ 

42. $\sum_{n=3}^{\infty} \frac{7}{\sqrt{n+1} \ln \sqrt{n+1}}$ 

43. $\sum_{n=1}^{\infty} \frac{8 \tan^{-1} n}{1 + n^2}$ 

44. $\sum_{n=1}^{\infty} \frac{n}{n^2 + 1}$ 

45. $\sum_{n = 1}^{\infty}\mathrm{sech}n$ 

46. $\sum_{n = 1}^{\infty}\mathrm{sech}^2 n$ 

Theory and Examples 

For what values of $a$ , if any, do the series in Exercises 47 and 48 converge? 

47. $\sum_{n=1}^{\infty}\left(\frac{a}{n+2}-\frac{1}{n+4}\right)$ 48. $\sum_{n=3}^{\infty}\left(\frac{1}{n-1}-\frac{2a}{n+1}\right)$ 

49. a. Draw illustrations like those in Figures 9.12a and 9.12b to show that the partial sums of the harmonic series satisfy the inequalities 

$$
\begin{array}{c} \ln (n + 1) = \int_ {1} ^ {n + 1} \frac {1}{x} d x \leq 1 + \frac {1}{2} + \dots + \frac {1}{n} \\ \leq 1 + \int_ {1} ^ {n} \frac {1}{x} d x = 1 + \ln n. \end{array}
$$

T b. There is absolutely no empirical evidence for the divergence of the harmonic series even though we know it diverges. 

The partial sums just grow too slowly. To see what we mean, suppose you had started with $s_{1} = 1$ the day the universe was formed, 13 billion years ago, and added a new term every second. About how large would the partial sum $s_{n}$ be today, assuming a 365-day year? 

50. Are there any values of $x$ for which $\sum_{n=1}^{\infty}(1 / nx)$ converges? Give reasons for your answer. 

51. Is it true that if $\sum_{n=1}^{\infty}a_{n}$ is a divergent series of positive numbers, then there is also a divergent series $\sum_{n=1}^{\infty}b_{n}$ of positive numbers with $b_{n}<a_{n}$ for every n? Is there a “smallest” divergent series of positive numbers? Give reasons for your answers. 

52. (Continuation of Exercise 51.) Is there a “largest” convergent series of positive numbers? Explain. 

53. $\sum_{n=1}^{\infty}\left(1 / \sqrt{n + 1}\right)$ diverges 

a. Use the accompanying graph to show that the partial sum $s_{50} = \sum_{n=1}^{50} \left(1/\sqrt{n+1}\right)$ satisfies 

$$
\int_ {1} ^ {5 1} \frac {1}{\sqrt {x + 1}} d x <   s _ {5 0} <   \int_ {0} ^ {5 0} \frac {1}{\sqrt {x + 1}} d x.
$$

Conclude that $11.5 < s_{50} < 12.3$ . 

![[71e40651f4e8ed33d8631770b42734860315b2ab2e5b840d68f541977201720c.jpg|image]]


b. What should $n$ be in order that the partial sum 

$$
s _ {n} = \sum_ {i = 1} ^ {n} (1 / \sqrt {i + 1}) \text {   satisfy   } s _ {n} > 1 0 0 0?
$$

54. $\sum_{n=1}^{\infty}\left(1/n^{4}\right)$ converges 

a. Use the accompanying graph to find an upper bound for the error if $s_{30} = \sum_{n=1}^{30}(1/n^4)$ is used to estimate the value of $\sum_{n=1}^{\infty}(1/n^4)$ . 

![[c9c8cca2b45f7671a6aee06f7c2a66cbc59232eae14c0018bed9e6e8cf0fae67.jpg|image]]


b. Find $n$ so that the partial sum $s_n = \sum_{i=1}^{\infty} (1/i^4)$ estimates the value of $\sum_{n=1}^{\infty} (1/n^4)$ with an error of at most 0.000001. (The exact value of this series is computed in Exercise 20 of Section 19.4.) 

55. Estimate the value of $\sum_{n=1}^{\infty}\left(1/n^{3}\right)$ to within 0.01 of its exact value. 

56. Estimate the value of $\sum_{n=2}^{\infty}\left(1/(n^{2}+4)\right)$ to within 0.1 of its exact value. 

57. How many terms of the convergent series $\sum_{n=1}^{\infty}\left(1/n^{1.1}\right)$ should be used to estimate its value with error at most 0.00001? 

58. How many terms of the convergent series $\sum_{n=4}^{\infty} 1 / (n (\ln n)^3)$ should be used to estimate its value with error at most 0.01? 

59. The Cauchy condensation test The Cauchy condensation test says: Let $\{a_{n}\}$ be a nonincreasing sequence ( $a_{n} \geq a_{n+1}$ for all $n$ ) of positive terms that converges to 0. Then $\sum a_{n}$ converges if and only if $\sum 2^{n} a_{2^{n}}$ converges. For example, $\sum (1/n)$ diverges because $\sum 2^{n} \cdot (1/2^{n}) = \sum 1$ diverges. Show why the test works. 

60. Use the Cauchy condensation test from Exercise 59 to show that 

a. $\sum_{n=2}^{\infty}\frac{1}{n\ln n}$ diverges; 

b. $\sum_{n=1}^{\infty} \frac{1}{n^p}$ converges if $p > 1$ and diverges if $p \leq 1$ . 

61. Logarithmic $p$ -series 

a. Show that the improper integral 

$$
\int_ {2} ^ {\infty} \frac {d x}{x (\ln x) ^ {p}} (p \text {   a   positive   constant })
$$

converges if and only if p > 1. 

b. What implications does the fact in part (a) have for the convergence of the series 

$$
\sum_ {n = 2} ^ {\infty} \frac {1}{n (\ln n) ^ {p}}?
$$

Give reasons for your answer. 

62. (Continuation of Exercise 61.) Use the result in Exercise 61 to determine which of the following series converge and which diverge. Support your answer in each case. 

$$
\sum_ {n = 2} ^ {\infty} \frac {1}{n (\ln n)}
$$

$$
\sum_ {n = 2} ^ {\infty} \frac {1}{n \ln (n ^ {3})}
$$

$$
\sum_ {n = 2} ^ {\infty} \frac {1}{n (\ln n) ^ {1 . 0 1}}
$$

d. $\sum_{n=2}^{\infty} \frac{1}{n (\ln n)^3}$ 

63. Euler's constant Graphs like those in Figure 9.12 suggest that as $n$ increases there is little change in the difference between the sum 

$$
1 + \frac {1}{2} + \dots + \frac {1}{n}
$$

and the integral 

$$
\ln n = \int_ {1} ^ {n} \frac {1}{x} d x.
$$

To explore this idea, carry out the following steps. 

## 9.4 Comparison Tests

a. By taking $f(x) = 1 / x$ in the proof of Theorem 9, show that 

$$
\ln (n + 1) \leq 1 + \frac {1}{2} + \dots + \frac {1}{n} \leq 1 + \ln n
$$

or 

$$
0 <   \ln (n + 1) - \ln n \leq 1 + \frac {1}{2} + \dots + \frac {1}{n} - \ln n \leq 1.
$$

Thus, the sequence 

$$
a _ {n} = 1 + \frac {1}{2} + \dots + \frac {1}{n} - \ln n
$$

is bounded from below and from above. 

b. Show that 

$$
\frac {1}{n + 1} <   \int_ {n} ^ {n + 1} \frac {1}{x} d x = \ln (n + 1) - \ln n,
$$

and use this result to show that the sequence $\{a_{n}\}$ in part (a) is decreasing. 

Since a decreasing sequence that is bounded from below converges, the numbers $a_{n}$ defined in part (a) converge: 

$$
1 + \frac {1}{2} + \dots + \frac {1}{n} - \ln n \rightarrow \gamma .
$$

The number $\gamma$ , whose value is 0.5772 ..., is called Euler's constant. 

64. Use the Integral Test to show that the series 

$$
\sum_ {n = 0} ^ {\infty} e ^ {- n ^ {2}}
$$

converges. 

65. a. For the series $\sum(1/n^{3})$ , use the inequalities in Equation (2) with n = 10 to find an interval containing the sum S. 

b. As in Example 5, use the midpoint of the interval found in part (a) to approximate the sum of the series. What is the maximum error for your approximation? 

66. Repeat Exercise 65 using the series $\sum (1 / n^4)$ . 

67. Area Consider the sequence $\{1/n\}_{n=1}^{\infty}$ . On each subinterval $(1/(n+1),1/n)$ within the interval [0,1], erect the rectangle with area $a_{n}$ having height 1/n and width equal to the length of the subinterval. Find the total area $\sum a_{n}$ of all the rectangles. (Hint: Use the result of Example 5 in Section 9.2.) 

68. Area Repeat Exercise 67, using trapezoids instead of rectangles. That is, on the subinterval $(1 / (n + 1), 1 / n)$ , let $a_{n}$ denote the area of the trapezoid having heights $y = 1 / (n + 1)$ at $x = 1 / (n + 1)$ and $y = 1 / n$ at $x = 1 / n$ . 

We have seen how to determine the convergence of geometric series, p-series, and a few others. We can test the convergence of many more series by comparing their terms to those of a series whose convergence is already known. 

![[f910417629dbe7c22eae7dbed253645a2a9321199a19093e0d84aa824660c09a.jpg|image]]



FIGURE 9.14 If the total area $\sum b_{n}$ of the taller $b_{n}$ rectangles is finite, then so is the total area $\sum a_{n}$ of the shorter $a_{n}$ rectangles.


## HISTORICAL BIOGRAPHY

## Albert of Saxony

(ca. 1316–1390) 

Albert attended the University of Paris and gained recognition as a teacher at its faculty of arts. He wrote on squaring the circle and other geometric problems. He also published books on physics and mechanics, Tractatus proportionum being the most popular one. 

To know more, visit the companion Website. 

THEOREM 10—Direct Comparison Test
Let $\sum a_{n}$ and $\sum b_{n}$ be two series with $0 \leq a_{n} \leq b_{n}$ for all n. Then
1. If $\sum b_{n}$ converges, then $\sum a_{n}$ also converges.
2. If $\sum a_{n}$ diverges, then $\sum b_{n}$ also diverges. 

Proof The series $\sum a_{n}$ and $\sum b_{n}$ have nonnegative terms. The Corollary of Theorem 6 stated in Section 9.3 tells us that the series $\sum a_{n}$ and $\sum b_{n}$ converge if and only if their partial sums are bounded from above. 

In Part (1) we assume that $\sum b_{n}$ converges to some number $M$ . The partial sums $\sum_{n=1}^{N} a_{n}$ are all bounded from above by $M = \sum b_{n}$ because 

$$
s _ {N} = a _ {1} + a _ {2} + \dots + a _ {N} \leq b _ {1} + b _ {2} + \dots + b _ {N} \leq \sum_ {n = 1} ^ {\infty} b _ {n} = M.
$$

Since the partial sums of $\sum a_{n}$ are bounded from above, the Corollary of Theorem 6 implies that $\sum a_{n}$ converges. We conclude that if $\sum b_{n}$ converges, then so does $\sum a_{n}$ . Figure 9.14 illustrates this result, with each term of each series interpreted as the area of a rectangle. 

In Part (2), where we assume that $\sum a_{n}$ diverges, the partial sums of $\sum_{n=1}^{\infty} b_{n}$ are not bounded from above. If they were, the partial sums for $\sum a_{n}$ would also be bounded from above, since 

$$
a _ {1} + a _ {2} + \dots + a _ {N} \leq b _ {1} + b _ {2} + \dots + b _ {N},
$$

and this would mean that $\sum a_{n}$ converges. We conclude that if $\sum a_{n}$ diverges, then so does $\sum b_{n}$ . 

## **EXAMPLE 1** We apply Theorem 10 to several series.

(a) The series 

$$
\sum_ {n = 1} ^ {\infty} \frac {5}{5 n - 1}
$$

diverges because its nth term 

$$
\frac {5}{5 n - 1} = \frac {1}{n - \frac {1}{5}} > \frac {1}{n} \quad \sum_ {n = 1} ^ {\infty} \frac {1}{n} \text { diverges   and } 1 / n > 0.
$$

is positive and is greater than the nth term of the (positive) divergent harmonic series. 

(b) The series 

$$
\sum_ {n = 0} ^ {\infty} \frac {1}{n !} = 1 + \frac {1}{1 !} + \frac {1}{2 !} + \frac {1}{3 !} + \dots
$$

converges because its terms are all positive and less than or equal to the corresponding terms of 

$$
1 + \sum_ {n = 0} ^ {\infty} \frac {1}{2 ^ {n}} = 1 + 1 + \frac {1}{2} + \frac {1}{2 ^ {2}} + \dots .
$$

The geometric series on the left converges (since $|r| = 1/2 < 1$ ) and we have 

$$
1 + \sum_ {n = 0} ^ {\infty} \frac {1}{2 ^ {n}} = 1 + \frac {1}{1 - (1 / 2)} = 3.
$$

The fact that 3 is an upper bound for the partial sums of $\sum_{n=0}^{\infty}(1/n!)$ does not mean that the series converges to 3. As we will see in Section 9.9, the series converges to $e$ . 

(c) The series 

$$
5 + \frac {2}{3} + \frac {1}{7} + 1 + \frac {1}{2 + \sqrt {1}} + \frac {1}{4 + \sqrt {2}} + \frac {1}{8 + \sqrt {3}} + \dots + \frac {1}{2 ^ {n} + \sqrt {n}} + \dots
$$

converges. To see this, we ignore the first three terms and compare the remaining terms with those of the convergent geometric series $\sum_{n=0}^{\infty}\left(1/2^{n}\right)$ . The term $1/(2^{n} + \sqrt{n})$ of the truncated sequence is positive and is less than the corresponding term $1/2^{n}$ of the geometric series. We see that term-by-term we have the comparison of positive terms 

$$
1 + \frac {1}{2 + \sqrt {1}} + \frac {1}{4 + \sqrt {2}} + \frac {1}{8 + \sqrt {3}} + \dots \leq 1 + \frac {1}{2} + \frac {1}{4} + \frac {1}{8} + \dots .
$$

So the truncated series and the original series converge by an application of the Direct Comparison Test. 

## The Limit Comparison Test

We now introduce a comparison test that is particularly useful for series in which $a_{n}$ is a rational function of $n$ . 

THEOREM 11—Limit Comparison Test
Suppose that $a_{n}>0$ and $b_{n}>0$ for all $n\geq N$ ( $N$ an integer).
1. If $\lim_{n\to\infty}\frac{a_n}{b_n}=c$ and $c>0$ , then $\sum a_{n}$ and $\sum b_{n}$ both converge or both diverge.
2. If $\lim_{n\to\infty}\frac{a_n}{b_n}=0$ and $\sum b_{n}$ converges, then $\sum a_{n}$ converges.
3. If $\lim_{n\to\infty}\frac{a_n}{b_n}=\infty$ and $\sum b_{n}$ diverges, then $\sum a_{n}$ diverges. 

## Proof We will prove Part 1. Parts 2 and 3 are left as Exercises 57a and b.

We assume that $\lim_{n\to \infty}\frac{a_n}{b_n} = c$ where $c > 0$ . Then $\varepsilon = c / 2$ is a positive number, so by the definition of convergence there exists an integer $N$ such that 

$$
\left| \frac {a _ {n}}{b _ {n}} - c \right| <   \frac {c}{2} \quad \text { whenever } \quad n > N. \quad \begin{array}{l} \text { Limit   definition   with } \\ \varepsilon = c / 2, L = c, \text { and } \\ a _ {n} \text { replaced   by } a _ {n} / b _ {n} \end{array}
$$

Thus, for $n > N$ , 

$$
- \frac {c}{2} <   \frac {a _ {n}}{b _ {n}} - c <   \frac {c}{2},
$$

$$
\frac {c}{2} <   \frac {a _ {n}}{b _ {n}} <   \frac {3 c}{2},
$$

$$
\left(\frac {c}{2}\right) b _ {n} <   a _ {n} <   \left(\frac {3 c}{2}\right) b _ {n}.
$$

If $\sum b_{n}$ converges, then $\sum(3c/2)b_{n}$ converges and $\sum a_{n}$ converges by the Direct Comparison Test. If $\sum b_{n}$ diverges, then $\sum(c/2)b_{n}$ diverges and $\sum a_{n}$ diverges by the Direct Comparison Test. 

**EXAMPLE 2** Which of the following series converge, and which diverge? 

$$
\text {(a)} \frac {3}{4} + \frac {5}{9} + \frac {7}{1 6} + \frac {9}{2 5} + \dots = \sum_ {n = 1} ^ {\infty} \frac {2 n + 1}{(n + 1) ^ {2}} = \sum_ {n = 1} ^ {\infty} \frac {2 n + 1}{n ^ {2} + 2 n + 1}
$$

$$
\textbf {(b)} \frac {1}{1} + \frac {1}{3} + \frac {1}{7} + \frac {1}{1 5} + \dots = \sum_ {n = 1} ^ {\infty} \frac {1}{2 ^ {n} - 1}
$$

$$
\frac {1 + 2 \ln 2}{9} + \frac {1 + 3 \ln 3}{1 4} + \frac {1 + 4 \ln 4}{2 1} + \dots = \sum_ {n = 2} ^ {\infty} \frac {1 + n \ln n}{n ^ {2} + 5}
$$

**Solution** We apply the Limit Comparison Test to each series. 

(a) Let $a_{n} = (2n + 1) / (n^{2} + 2n + 1)$ . For large $n$ , we expect $a_{n}$ to behave like $2n / n^{2} = 2 / n$ since the leading terms dominate for large $n$ , so we let $b_{n} = 1 / n$ . The numbers $a_{n}$ and $b_{n}$ are positive for each $n$ , the series 

$$
\sum_ {n = 1} ^ {\infty} b _ {n} = \sum_ {n = 1} ^ {\infty} \frac {1}{n} \text { diverges },
$$

and 

$$
\lim _ {n \rightarrow \infty} \frac {a _ {n}}{b _ {n}} = \lim _ {n \rightarrow \infty} \frac {2 n ^ {2} + n}{n ^ {2} + 2 n + 1} = 2,
$$

so $\sum a_{n}$ diverges by Part 1 of the Limit Comparison Test. We could just as well have taken $b_{n} = 2 / n$ , but $1 / n$ is simpler. 

(b) Let $a_{n} = 1 / (2^{n} - 1)$ . For large $n$ , we expect $a_{n}$ to behave like $1 / 2^{n}$ , so we let $b_{n} = 1 / 2^{n}$ . The numbers $a_{n}$ and $b_{n}$ are positive for each $n$ , the series 

$$
\sum_ {n = 1} ^ {\infty} b _ {n} = \sum_ {n = 1} ^ {\infty} \frac {1}{2 ^ {n}} \text { converges },
$$

and 

$$
\lim _ {n \rightarrow \infty} \frac {a _ {n}}{b _ {n}} = \lim _ {n \rightarrow \infty} \frac {2 ^ {n}}{2 ^ {n} - 1} = \lim _ {n \rightarrow \infty} \frac {1}{1 - (1 / 2 ^ {n})} = 1,
$$

so $\sum a_{n}$ converges by Part 1 of the Limit Comparison Test. 

(c) Let $a_{n} = (1 + n\ln n) / (n^{2} + 5)$ . For large $n$ , we expect $a_{n}$ to behave like $(n\ln n) / n^{2} = (\ln n) / n$ , which is greater than $1 / n$ for $n \geq 3$ , so we let $b_{n} = 1 / n$ . The numbers $a_{n}$ and $b_{n}$ are positive for each $n$ , the series 

$$
\sum_ {n = 2} ^ {\infty} b _ {n} = \sum_ {n = 2} ^ {\infty} \frac {1}{n} \text { diverges },
$$

and 

$$
\lim _ {n \rightarrow \infty} \frac {a _ {n}}{b _ {n}} = \lim _ {n \rightarrow \infty} \frac {n + n ^ {2} \ln n}{n ^ {2} + 5} = \infty ,
$$

so $\sum a_{n}$ diverges by Part 3 of the Limit Comparison Test. 

**EXAMPLE 3** Does $\sum_{n=1}^{\infty}\frac{\ln n}{n^{3/2}}$ converge? 

**Solution** First note that both $\ln n$ and $n^{3/2}$ are positive for $n \geq 3$ , so the Limit Comparison Theorem can be applied. Because $\ln n$ grows more slowly than $n^{c}$ for any positive constant c (Section 9.1, Exercise 115), we can compare the series to a convergent p-series. To get the p-series, we see that 

$$
\frac {\ln n}{n ^ {3 / 2}} <   \frac {n ^ {1 / 4}}{n ^ {3 / 2}} = \frac {1}{n ^ {5 / 4}}
$$

for $n$ sufficiently large. Then, taking $a_{n} = (\ln n) / n^{3/2}$ and $b_{n} = 1 / n^{5/4}$ , we have 

$\lim_{n\to \infty}\frac{a_n}{b_n} = \lim_{n\to \infty}\frac{\ln n}{n^{1 / 4}}$ $= \lim_{n\to \infty}\frac{1 / n}{(1 / 4)n^{-3 / 4}}$ $= \lim_{n\to \infty}\frac{4}{n^{1 / 4}} = 0.$ 

L'Hôpital's Rule 

Since $\sum b_{n} = \sum (1 / n^{5 / 4})$ is a $p$ -series with $p > 1$ , it converges. Therefore, $\sum a_{n}$ converges by Part 2 of the Limit Comparison Test. 

## EXERCISES 9.4

## Direct Comparison Test

In Exercises 1–8, use the Direct Comparison Test to determine whether each series converges or diverges.
1. $\sum_{n=1}^{\infty}\frac{1}{n^{2}+30}$ 2. $\sum_{n=1}^{\infty}\frac{n-1}{n^{4}+2}$ 3. $\sum_{n=2}^{\infty}\frac{1}{\sqrt{n}-1}$ 4. $\sum_{n=2}^{\infty}\frac{n+2}{n^{2}-n}$ 5. $\sum_{n=1}^{\infty}\frac{\cos^{2}n}{n^{3/2}}$ 6. $\sum_{n=1}^{\infty}\frac{1}{n3^{n}}$ 7. $\sum_{n=1}^{\infty}\sqrt{\frac{n+4}{n^{4}+4}}$ 8. $\sum_{n=1}^{\infty}\frac{\sqrt{n}+1}{\sqrt{n^{2}+3}}$ 

In Exercises 9–16, use the Limit Comparison Test to determine whether each series converges or diverges. 

## Limit Comparison Test

$$
\sum_ {n = 1} ^ {\infty} \left(1 / n ^ {2}\right))
$$

9. $\sum_{n=1}^{\infty} \frac{n - 2}{n^3 - n^2 + 3}$ 

10. $\sum_{n=1}^{\infty} \sqrt{\frac{n+1}{n^2 + 2}}$ (Hint: Limit Comparison with $\sum_{n=1}^{\infty} \left(1/\sqrt{n}\right)$ ) 

11. $\sum_{n=2}^{\infty} \frac{n(n+1)}{(n^2 + 1)(n-1)}$ 12. $\sum_{n=1}^{\infty} \frac{2^n}{3 + 4^n}$ 

13. $\sum_{n=1}^{\infty} \frac{5^n}{\sqrt{n} 4^n}$ 

14. $\sum_{n=1}^{\infty}\left(\frac{2n+3}{5n+4}\right)^n$ 

15. $\sum_{n=2}^{\infty} \frac{1}{\ln n}$ (Hint: Limit Comparison with $\sum_{n=2}^{\infty} (1/n)$ ) 

16. $\sum_{n=1}^{\infty} \ln \left(1 + \frac{1}{n^2}\right)$ (Hint: Limit Comparison with $\sum_{n=1}^{\infty} \left(1/n^2\right)$ ) 

## Determining Convergence or Divergence

Which of the series in Exercises 17–56 converge, and which diverge? Use any method, and give reasons for your answers.
17. $\sum_{n=1}^{\infty}\frac{1}{2\sqrt{n}+\sqrt[3]{n}}$ 18. $\sum_{n=1}^{\infty}\frac{3}{n+\sqrt{n}}$ 19. $\sum_{n=1}^{\infty}\frac{\sin^{2}n}{2^{n}}$ 

20. $\sum_{n=1}^{\infty} \frac{1 + \cos n}{n^2}$ 21. $\sum_{n=1}^{\infty} \frac{2n}{3n - 1}$ 22. $\sum_{n=1}^{\infty} \frac{n + 1}{n^2\sqrt{n}}$ 

23. $\sum_{n=1}^{\infty} \frac{10n + 1}{n(n + 1)(n + 2)}$ 

24. $\sum_{n=3}^{\infty} \frac{5n^{3}-3n}{n^{2}(n-2)(n^{2}+5)}$ 

27. $\sum_{n=3}^{\infty} \frac{1}{\ln(\ln n)}$ 

25. $\sum_{n=1}^{\infty}\left(\frac{n}{3n+1}\right)^{n}$ 

26. $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^3 + 2}}$ 

30. $\sum_{n = 1}^{\infty}\frac{(\ln n)^2}{n^{3 / 2}}$ 

28. $\sum_{n=1}^{\infty} \frac{(\ln n)^2}{n^3}$ 

29. $\sum_{n=2}^{\infty} \frac{1}{\sqrt{n} \ln n}$ 

31. $\sum_{n=1}^{\infty} \frac{1}{1 + \ln n}$ 

32. $\sum_{n=2}^{\infty} \frac{\ln(n+1)}{n+1}$ 

33. $\sum_{n=2}^{\infty} \frac{1}{n\sqrt{n^2 - 1}}$ 

34. $\sum_{n=1}^{\infty} \frac{\sqrt{n}}{n^2 + 1}$ 

35. $\sum_{n=1}^{\infty} \frac{1 - n}{n2^n}$ 

36. $\sum_{n=1}^{\infty} \frac{n + 2^n}{n^2 2^n}$ 

37. $\sum_{n=1}^{\infty} \frac{1}{3^{n-1} + 1}$ 

38. $\sum_{n=1}^{\infty} \frac{3^{n-1} + 1}{3^n}$ 

39. $\sum_{n=1}^{\infty} \frac{n+1}{n^2 + 3n} \cdot \frac{1}{5n}$ 

40. $\sum_{n=1}^{\infty} \frac{2^n + 3^n}{3^n + 4^n}$ 

41. $\sum_{n=1}^{\infty} \frac{2^n - n}{n2^n}$ 

42. $\sum_{n=1}^{\infty} \frac{\ln n}{\sqrt{n} e^n}$ 

43. $\sum_{n=2}^{\infty} \frac{1}{n!}$ (Hint: First show that $(1/n!) \leq (1/n(n-1))$ for $n \geq 2$ .)

44. $\sum_{n=1}^{\infty} \frac{(n-1)!}{(n+2)!}$ 45. $\sum_{n=1}^{\infty} \sin \frac{1}{n}$ 46. $\sum_{n=1}^{\infty} \tan \frac{1}{n}$ 47. $\sum_{n=1}^{\infty} \frac{\tan^{-1} n}{n^{1.1}}$ 48. $\sum_{n=1}^{\infty} \frac{\operatorname{arcsec} n}{n^{1.3}}$ 49. $\sum_{n=1}^{\infty} \frac{\coth n}{n^2}$ 50. $\sum_{n=1}^{\infty} \frac{\tanh n}{n^2}$ 51. $\sum_{n=1}^{\infty} \frac{1}{n^{\sqrt[n]{n}}}$ 52. $\sum_{n=1}^{\infty} \frac{\sqrt[n]{n}}{n^2}$ 

53. $\sum_{n=1}^{\infty} \frac{1}{1 + 2 + 3 + \cdots + n}$ 54. $\sum_{n=1}^{\infty} \frac{1}{1 + 2^2 + 3^2 + \cdots + n^2}$ 55. $\sum_{n=2}^{\infty} \frac{n}{(\ln n)^2}$ 56. $\sum_{n=2}^{\infty} \frac{(\ln n)^2}{n}$ 

## Theory and Examples

57. Prove (a) Part 2 and (b) Part 3 of the Limit Comparison Test. 

58. If $\sum_{n=1}^{\infty} a_n$ is a convergent series of nonnegative numbers, can anything be said about $\sum_{n=1}^{\infty} (a_n / n)$ ? Explain. 

59. Suppose that $a_{n} > 0$ and $b_{n} > 0$ for $n \geq N$ ( $N$ an integer). If $\lim_{n \to \infty} (a_{n} / b_{n}) = \infty$ and $\sum a_{n}$ converges, can anything be said about $\sum b_{n}$ ? Give reasons for your answer. 

60. Prove that if $\sum a_{n}$ is a convergent series of nonnegative terms, then $\sum a_{n}^{2}$ converges. 

61. Suppose that $a_{n} > 0$ and $\lim_{n\to \infty}a_n = \infty$ . Prove that $\sum a_{n}$ diverges. 

62. Suppose that $a_{n} > 0$ and $\lim_{n\to \infty}n^{2}a_{n} = 0$ . Prove that $\sum a_{n}$ converges. 

63. Show that $\sum_{n=2}^{\infty}\left((\ln n)^q / n^p\right)$ converges for $-\infty < q < \infty$ and $p > 1$ . 

(Hint: Limit Comparison with $\sum_{n=2}^{\infty} 1/n^{r}$ for $1 < r < p$ .) 

64. (Continuation of Exercise 63.) Show that $\sum_{n=2}^{\infty}\left((\ln n)^{q}/n^{p}\right)$ diverges for $-\infty < q < \infty$ and $0 < p < 1$ . (Hint: Limit Comparison with an appropriate $p$ -series.) 

65. Decimal numbers Any real number in the interval $[0,1]$ can be represented by a decimal (not necessarily unique) as 

$$
0. d _ {1} d _ {2} d _ {3} d _ {4} \dots = \frac {d _ {1}}{1 0} + \frac {d _ {2}}{1 0 ^ {2}} + \frac {d _ {3}}{1 0 ^ {3}} + \frac {d _ {4}}{1 0 ^ {4}} + \dots ,
$$

where $d_{i}$ is one of the integers 0, 1, 2, 3, ..., 9. Prove that the series on the right-hand side always converges. 

66. If $\sum a_{n}$ is a convergent series of positive terms, prove that $\sum \sin (a_n)$ converges. 

In Exercises 67–72, use the results of Exercises 63 and 64 to determine whether each series converges or diverges. 

67. $\sum_{n=2}^{\infty} \frac{(\ln n)^3}{n^4}$ 

68. $\sum_{n=2}^{\infty} \sqrt{\frac{\ln n}{n}}$ 

69. $\sum_{n=2}^{\infty} \frac{(\ln n)^{1000}}{n^{1.001}}$ 

70. $\sum_{n = 2}^{\infty}\frac{(\ln n)^{1 / 5}}{n^{0.99}}$ 

71. $\sum_{n=2}^{\infty} \frac{1}{n^{1.1} (\ln n)^3}$ 

72. $\sum_{n=2}^{\infty} \frac{1}{\sqrt{n \cdot \ln n}}$ 

## COMPUTER EXPLORATIONS

73. It is not yet known whether the series 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {3} \sin^ {2} n}
$$

converges or diverges. Use a CAS to explore the behavior of the series by performing the following steps. 

a. Define the sequence of partial sums 

$$
s _ {k} = \sum_ {n = 1} ^ {k} \frac {1}{n ^ {3} \sin^ {2} n}.
$$

What happens when you try to find the limit of $s_k$ as $k \to \infty$ ? Does your CAS find a closed form answer for this limit? 

b. Plot the first 100 points $(k, s_k)$ for the sequence of partial sums. Do they appear to converge? What would you estimate the limit to be? 

c. Next plot the first 200 points $(k, s_{k})$ . Discuss the behavior in your own words. 

d. Plot the first 400 points $(k, s_k)$ . What happens when $k = 355$ ? Calculate the number 355/113. Explain from your calculation what happened at $k = 355$ . For what values of $k$ would you guess this behavior might occur again? 

74. a. Use Theorem 8 to show that 

$$
S = \sum_ {n = 1} ^ {\infty} \frac {1}{n (n + 1)} + \sum_ {n = 1} ^ {\infty} \left(\frac {1}{n ^ {2}} - \frac {1}{n (n + 1)}\right),
$$

where $S = \sum_{n=1}^{\infty}(1/n^2)$ , the sum of a convergent $p$ -series. b. From Example 5, Section 9.2, show that 

$$
S = 1 + \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2} (n + 1)}.
$$

c. Explain why taking the first $M$ terms in the series in part (b) gives a better approximation to $S$ than taking the first $M$ terms in the original series $\sum_{n=1}^{\infty} (1/n^2)$ . 

d. We know the exact value of $S$ is $\pi^2 / 6$ . Which of these sums, 

$$
\sum_ {n = 1} ^ {1 0 0 0 0 0 0} \frac {1}{n ^ {2}} \text { or } 1 + \sum_ {n = 1} ^ {1 0 0 0} \frac {1}{n ^ {2} (n + 1)},
$$

gives a better approximation to S? 

## 9.5 Absolute Convergence; The Ratio and Root Tests

When some of the terms of a series are positive and others are negative, the series may or may not converge. For example, the geometric series 

$$
5 - \frac {5}{4} + \frac {5}{1 6} - \frac {5}{6 4} + \dots = \sum_ {n = 0} ^ {\infty} 5 \left(\frac {- 1}{4}\right) ^ {n}\tag{1}
$$

converges (since $|r| = \frac{1}{4} < 1$ ), whereas the different geometric series 

$$
1 - \frac {5}{4} + \frac {2 5}{1 6} - \frac {1 2 5}{6 4} + \dots = \sum_ {n = 0} ^ {\infty} \left(\frac {- 5}{4}\right) ^ {n}\tag{2}
$$

diverges (since $|r| = 5/4 > 1$ ). In series (1), there is some cancelation in the partial sums, which may be assisting the convergence property of the series. However, if we make all of the terms positive in series (1) to form the new series 

$$
5 + \frac {5}{4} + \frac {5}{1 6} + \frac {5}{6 4} + \dots = \sum_ {n = 0} ^ {\infty} \left| 5 \left(\frac {- 1}{4}\right) ^ {n} \right| = \sum_ {n = 0} ^ {\infty} 5 \left(\frac {1}{4}\right) ^ {n},
$$

we see that it still converges. For a general series with both positive and negative terms, we can apply the tests for convergence that we studied before to the series of absolute values of its terms. In doing so, we are led naturally to the following concept. 

> ***DEFINITION*** A series $\sum a_{n}$ converges absolutely (is absolutely convergent) if the corresponding series of absolute values, $\sum |a_{n}|$ , converges. 

So the geometric series (1) is absolutely convergent. We observed, too, that it is also convergent. This situation is always true: An absolutely convergent series is convergent as well, which we now prove. 

## Caution

Be careful when using Theorem 12. A convergent series need not converge absolutely, as you will see in the next section. 

## THEOREM 12—The Absolute Convergence Test

If $\sum_{n=1}^{\infty}|a_n|$ converges, then $\sum_{n=1}^{\infty}a_n$ converges. 

Proof For each n, 

$$
- \left| a _ {n} \right| \leq a _ {n} \leq \left| a _ {n} \right|, \quad \text { so } \quad 0 \leq a _ {n} + \left| a _ {n} \right| \leq 2 \left| a _ {n} \right|.
$$

If $\sum_{n=1}^{\infty}|a_n|$ converges, then $\sum_{n=1}^{\infty}2|a_n|$ converges and, by the Direct Comparison Test, the nonnegative series $\sum_{n=1}^{\infty}(a_n + |a_n|)$ converges. The equality $a_n = (a_n + |a_n|) - |a_n|$ now lets us express $\sum_{n=1}^{\infty}a_n$ as the difference of two convergent series: 

$$
\sum_ {n = 1} ^ {\infty} a _ {n} = \sum_ {n = 1} ^ {\infty} (a _ {n} + | a _ {n} | - | a _ {n} |) = \sum_ {n = 1} ^ {\infty} (a _ {n} + | a _ {n} |) - \sum_ {n = 1} ^ {\infty} | a _ {n} |.
$$

Therefore, $\sum_{n=1}^{\infty} a_n$ converges. 

## **EXAMPLE 1** This example gives two series that converge absolutely.

(a) For $\sum_{n=1}^{\infty}(-1)^{n+1}\frac{1}{n^{2}}=1-\frac{1}{4}+\frac{1}{9}-\frac{1}{16}+\cdots$ , the corresponding series of absolute values is the convergent series 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}} = 1 + \frac {1}{4} + \frac {1}{9} + \frac {1}{1 6} + \dots .
$$

The original series converges because it converges absolutely. 

(b) For $\sum_{n=1}^{\infty}\frac{\sin n}{n^{2}}=\frac{\sin 1}{1}+\frac{\sin 2}{4}+\frac{\sin 3}{9}+\cdots$ , which contains both positive and negative 

terms, the corresponding series of absolute values is 

$$
\sum_ {n = 1} ^ {\infty} \left| \frac {\sin n}{n ^ {2}} \right| = \frac {| \sin 1 |}{1} + \frac {| \sin 2 |}{4} + \dots ,
$$

which converges by comparison with $\sum_{n=1}^{\infty}\left(1/n^{2}\right)$ because $|\sin n| \leq 1$ for every n. The original series converges absolutely; therefore, it converges. 

## The Ratio Test

The Ratio Test measures the rate of growth (or decline) of a series by examining the ratio $a_{n+1}/a_{n}$ . For a geometric series $\sum ar^{n}$ , this rate is a constant $((ar^{n+1})/(ar^{n}) = r)$ , and the series converges if and only if its ratio is less than 1 in absolute value. The Ratio Test is a powerful rule extending that result. 

## THEOREM 13—The Ratio Test

Let $\sum a_{n}$ be any series and suppose that 

$$
\lim _ {n \to \infty} \left| \frac {a _ {n + 1}}{a _ {n}} \right| = \rho .
$$

Then (a) the series converges absolutely if $\rho < 1$ , (b) the series diverges if $\rho > 1$ or $\rho$ is infinite, and (c) the test is inconclusive if $\rho = 1$ . 

## Proof

(a) $\rho < 1$ . Let $r$ be a number between $\rho$ and 1. Then the number $\varepsilon = r - \rho$ is positive. Since 

$$
\left| \frac {a _ {n + 1}}{a _ {n}} \right|\rightarrow \rho ,
$$

$\left|a_{n+1}/a_{n}\right|$ must lie within $\varepsilon$ of $\rho$ when n is large enough, say, for all $n \geq N$ . In particular, 

$$
\left| \frac {a _ {n + 1}}{a _ {n}} \right| <   \rho + \varepsilon = r, \quad \text { when } n \geq N.
$$

Hence 

$$
\left| a _ {N + 1} \right| <   r \left| a _ {N} \right|,
$$

$$
\left| a _ {N + 2} \right| <   r \left| a _ {N + 1} \right| <   r ^ {2} \left| a _ {N} \right|,
$$

$$
\begin{array}{c} | a _ {N + 3} | <   r | a _ {N + 2} | <   r ^ {3} | a _ {N} |, \\ \vdots \end{array}
$$

$$
\left| a _ {N + m} \right| <   r \left| a _ {N + m - 1} \right| <   r ^ {m} \left| a _ {N} \right|.
$$

Therefore, 

$$
\sum_ {m = N} ^ {\infty} \left| a _ {m} \right| = \sum_ {m = 0} ^ {\infty} \left| a _ {N + m} \right| \leq \sum_ {m = 0} ^ {\infty} \left| a _ {N} \right| r ^ {m} = \left| a _ {N} \right| \sum_ {m = 0} ^ {\infty} r ^ {m}.
$$

The geometric series on the right-hand side converges because 0 < r < 1, so the series of absolute values $\sum_{m=N}^{\infty}|a_{m}|$ converges by the Direct Comparison Test. Because adding or deleting finitely many terms in a series does not affect its convergence or divergence property, the series $\sum_{n=1}^{\infty}|a_{n}|$ also converges. That is, the series $\sum a_{n}$ is absolutely convergent. 

(b) $1 < \rho \leq \infty$ . From some index M on, 

$$
\left| \frac {a _ {n + 1}}{a _ {n}} \right| > 1 \quad \text { and } \quad | a _ {M} | <   | a _ {M + 1} | <   | a _ {M + 2} | <   \dots .
$$

The terms of the series do not approach zero as $n$ becomes infinite, so the series diverges by the $n$ th-Term Test. 

(c) $\rho = 1$ . The two series 

$$
\sum_ {n = 1} ^ {\infty} \frac {1}{n} \quad \text { and } \quad \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}}
$$

show that some other test for convergence must be used when $\rho = 1$ . 

$$
\text { For } \sum_ {n = 1} ^ {\infty} \frac {1}{n}: \left| \frac {a _ {n + 1}}{a _ {n}} \right| = \frac {1 / (n + 1)}{1 / n} = \frac {n}{n + 1} \rightarrow 1.
$$

$$
\text { For } \sum_ {n = 1} ^ {\infty} \frac {1}{n ^ {2}}: \left| \frac {a _ {n + 1}}{a _ {n}} \right| = \frac {1 / (n + 1) ^ {2}}{1 / n ^ {2}} = \left(\frac {n}{n + 1}\right) ^ {2} \rightarrow 1 ^ {2} = 1.
$$

In both cases, $\rho = 1$ , yet the first series diverges, whereas the second converges. 

The Ratio Test is often effective when the terms of a series contain factorials of expressions involving n or expressions raised to a power involving n. 

**EXAMPLE 2** Investigate the convergence of the following series. 

(a) $\sum_{n=0}^{\infty} \frac{2^n + 5}{3^n}$ (b) $\sum_{n=1}^{\infty} \frac{(2n)!}{n!n!}$ (c) $\sum_{n=1}^{\infty} \frac{4^n n!n!}{(2n)!}$ 

**Solution** We apply the Ratio Test to each series. 

(a) For the series $\sum_{n=0}^{\infty} \frac{2^n + 5}{3^n}$ , 

$$
\left| \frac {a _ {n + 1}}{a _ {n}} \right| = \frac {(2 ^ {n + 1} + 5) / 3 ^ {n + 1}}{(2 ^ {n} + 5) / 3 ^ {n}} = \frac {1}{3} \cdot \frac {2 ^ {n + 1} + 5}{2 ^ {n} + 5} = \frac {1}{3} \cdot \left(\frac {2 + 5 \cdot 2 ^ {- n}}{1 + 5 \cdot 2 ^ {- n}}\right)\rightarrow \frac {1}{3} \cdot \frac {2}{1} = \frac {2}{3}.
$$

The series converges absolutely (and thus converges) because $\rho = 2/3$ is less than 1. This does not mean that $2/3$ is the sum of the series. In fact, 

$$
\sum_ {n = 0} ^ {\infty} \frac {2 ^ {n} + 5}{3 ^ {n}} = \sum_ {n = 0} ^ {\infty} \left(\frac {2}{3}\right) ^ {n} + \sum_ {n = 0} ^ {\infty} \frac {5}{3 ^ {n}} = \frac {1}{1 - (2 / 3)} + \frac {5}{1 - (1 / 3)} = \frac {2 1}{2}.
$$

(b) If $a_{n} = \frac{(2n)!}{n!n!}$ , then $a_{n + 1} = \frac{(2n + 2)!}{(n + 1)!(n + 1)!}$ and 

$$
\begin{array}{c}\left| \frac {a _ {n + 1}}{a _ {n}} \right| = \frac {n ! n ! (2 n + 2) (2 n + 1) (2 n) !}{(n + 1) ! (n + 1) ! (2 n) !}\\= \frac {(2 n + 2) (2 n + 1)}{(n + 1) (n + 1)} = \frac {4 n + 2}{n + 1} \rightarrow 4.\end{array}
$$

The series diverges because $\rho = 4$ is greater than 1. 

(c) If $a_{n} = \frac{4^{n}n!n!}{(2n)!}$ , then 

$$
\begin{array}{c} \left| \frac {a _ {n + 1}}{a _ {n}} \right| = \frac {4 ^ {n + 1} (n + 1) ! (n + 1) !}{(2 n + 2) (2 n + 1) (2 n) !} \cdot \frac {(2 n) !}{4 ^ {n} n ! n !} \\ = \frac {4 (n + 1) (n + 1)}{(2 n + 2) (2 n + 1)} = \frac {2 (n + 1)}{2 n + 1} \to 1. \end{array}
$$

Because the limit is $\rho = 1$ , we cannot decide from the Ratio Test whether the series converges. However, when we notice that $a_{n+1} / a_n = (2n + 2) / (2n + 1)$ , we conclude that $a_{n+1}$ is always greater than $a_n$ because $(2n + 2) / (2n + 1)$ is always greater than 1. Therefore, all terms are greater than or equal to $a_1 = 2$ , and the $n$ th term does not approach zero as $n \to \infty$ . The series diverges. 

## The Root Test

The convergence tests for $\sum a_{n}$ that we have studied so far work best when the formula for $a_{n}$ is relatively simple. However, consider the series with the terms 

$$
a _ {n} = \left\{ \begin{array}{l l} n / 2 ^ {n}, & n \text {   odd } \\ 1 / 2 ^ {n}, & n \text {   even }. \end{array} \right.
$$

To investigate convergence we write out several terms of the series: 

$$
\begin{array}{r l} \sum_ {n = 1} ^ {\infty} a _ {n} & = \frac {1}{2 ^ {1}} + \frac {1}{2 ^ {2}} + \frac {3}{2 ^ {3}} + \frac {1}{2 ^ {4}} + \frac {5}{2 ^ {5}} + \frac {1}{2 ^ {6}} + \frac {7}{2 ^ {7}} + \dots \\ & = \frac {1}{2} + \frac {1}{4} + \frac {3}{8} + \frac {1}{1 6} + \frac {5}{3 2} + \frac {1}{6 4} + \frac {7}{1 2 8} + \dots . \end{array}
$$

Clearly, this is not a geometric series. The nth term approaches zero as $n \rightarrow \infty$ , so the nth-Term Test does not tell us whether the series diverges. The Integral Test does not look promising. The Ratio Test produces 

$$
\left| \frac {a _ {n + 1}}{a _ {n}} \right| = \left\{ \begin{array}{l l} \frac {1}{2 n}, & n \text { odd } \\ \frac {n + 1}{2}, & n \text { even }. \end{array} \right.
$$

As $n \rightarrow \infty$ , the ratio is alternately small and large and therefore has no limit. However, we will see that the following test establishes that the series converges. 

THEOREM 14—The Root Test
Let $\sum a_{n}$ be any series and suppose that $\lim_{n\to \infty}\sqrt[n]{|a_n|} = \rho$ .
Then (a) the series converges absolutely if $\rho < 1$ , (b) the series diverges if $\rho > 1$ or $\rho$ is infinite, and (c) the test is inconclusive if $\rho = 1$ . 

## Proof

(a) $\rho < 1$ . Choose an $\varepsilon > 0$ so small that $\rho + \varepsilon < 1$ . Since $\sqrt[n]{|a_n|} \to \rho$ , the terms $\sqrt[n]{|a_n|}$ eventually get to within $\varepsilon$ of $\rho$ . So there exists an index $M$ such that 

$$
\sqrt [ n ]{| a _ {n} |} <   \rho + \varepsilon \quad \text { when } n \geq M.
$$

Then it is also true that 

$$
\left| a _ {n} \right| <   (\rho + \varepsilon) ^ {n} \quad \text {   for   } n \geq M.
$$

Now, $\sum_{n=M}^{\infty}(\rho+\varepsilon)^{n}$ is a geometric series with ratio $0<(\rho+\varepsilon)<1$ and therefore converges. By the Direct Comparison Test, $\sum_{n=M}^{\infty}|a_{n}|$ converges. Adding finitely many terms to a series does not affect its convergence or divergence, so the series 

$$
\sum_ {n = 1} ^ {\infty} \left| a _ {n} \right| = \left| a _ {1} \right| + \dots + \left| a _ {M - 1} \right| + \sum_ {n = M} ^ {\infty} \left| a _ {n} \right|
$$

also converges. Therefore, $\sum a_{n}$ converges absolutely. 

(b) $1 < \rho \leq \infty$ . For all indices beyond some integer $M$ , we have $\sqrt[n]{|a_n|} > 1$ , and therefore $|a_n| > 1$ for $n > M$ . The terms of the series do not converge to zero. The series diverges by the $n$ th-Term Test. 

(c) $\rho = 1$ . The series $\sum_{n=1}^{\infty}(1/n)$ and $\sum_{n=1}^{\infty}(1/n^2)$ show that the test is not conclusive when $\rho = 1$ . The first series diverges and the second converges, but in both cases $\sqrt[n]{|a_n|} \to 1$ . 

**EXAMPLE 3** Consider again the series with terms $a_{n} = \begin{cases} n / 2^{n}, & n \text{ odd} \\ 1 / 2^{n}, & n \text{ even}. \end{cases}$ Does $\sum a_{n}$ converge? 

**Solution** We apply the Root Test, finding that 

$$
\sqrt [ n ]{| a _ {n} |} = \left\{ \begin{array}{c c} \sqrt [ n ]{n} / 2, & n \text { odd } \\ 1 / 2, & n \text { even }. \end{array} \right.
$$

Therefore, 

$$
\frac {1}{2} \leq \sqrt [ n ]{| a _ {n} |} \leq \frac {\sqrt [ n ]{n}}{2}.
$$

Since $\sqrt[n]{n} \rightarrow 1$ (Section 9.1, Theorem 5), we have $\lim_{n \to \infty} \sqrt[n]{|a_n|} = 1/2$ by the Sandwich Theorem. The limit is less than 1, so the series converges absolutely by the Root Test. 

**EXAMPLE 4** Which of the following series converge, and which diverge?
(a) $\sum_{n=1}^{\infty}\frac{n^{2}}{2^{n}}$ (b) $\sum_{n=1}^{\infty}\frac{2^{n}}{n^{3}}$ (c) $\sum_{n=1}^{\infty}\left(\frac{1}{1+n}\right)^{n}$ 

**Solution** We apply the Root Test to each series, noting that each series has positive terms. 

(a) $\sum_{n=1}^{\infty} \frac{n^2}{2^n}$ converges because $\sqrt[n]{\frac{n^2}{2^n}} = \frac{\sqrt[n]{n^2}}{\sqrt[n]{2^n}} = \frac{(\sqrt[n]{n})^2}{2} \to \frac{1^2}{2} < 1$ . 

(b) $\sum_{n=1}^{\infty} \frac{2^n}{n^3}$ diverges because $\sqrt[n]{\frac{2^n}{n^3}} = \frac{2}{\left(\sqrt[n]{n}\right)^3} \to \frac{2}{1^3} > 1$ . 

(c) $\sum_{n=1}^{\infty}\left(\frac{1}{1+n}\right)^{n}$ converges because $\sqrt[n]{\left(\frac{1}{1+n}\right)^{n}}=\frac{1}{1+n}\rightarrow0<1.$ 

## EXERCISES 9.5

## Using the Ratio Test

In Exercises 1–8, use the Ratio Test to determine whether each series converges absolutely or diverges.
1. $\sum_{n=1}^{\infty}\frac{2^{n}}{n!}$ 2. $\sum_{n=1}^{\infty}(-1)^{n}\frac{n+2}{3^{n}}$ 3. $\sum_{n=1}^{\infty}\frac{(n-1)!}{(n+1)^{2}}$ 4. $\sum_{n=1}^{\infty}\frac{2^{n+1}}{n3^{n-1}}$ 5. $\sum_{n=1}^{\infty}\frac{n^{4}}{(-4)^{n}}$ 6. $\sum_{n=2}^{\infty}\frac{3^{n+2}}{\ln n}$ 7. $\sum_{n=1}^{\infty}(-1)^{n}\frac{n^{2}(n+2)!}{n!3^{2n}}$ 8. $\sum_{n=1}^{\infty}\frac{n5^{n}}{(2n+3)\ln(n+1)}$ 

## Using the Root Test

In Exercises 9–16, use the Root Test to determine whether each series converges absolutely or diverges.
9. $\sum_{n=1}^{\infty}\frac{7}{(2n+5)^{n}}$ 10. $\sum_{n=1}^{\infty}\frac{4^{n}}{(3n)^{n}}$ 11. $\sum_{n=1}^{\infty}\left(\frac{4n+3}{3n-5}\right)^{n}$ 12. $\sum_{n=1}^{\infty}\left(-\ln\left(e^{2}+\frac{1}{n}\right)\right)^{n+1}$ 

13. $\sum_{n=1}^{\infty} \frac{-8}{(3 + (1/n))^{2n}}$ 

14. $\sum_{n=1}^{\infty} \sin^n \left( \frac{1}{\sqrt{n}} \right)$ 

15. $\sum_{n=1}^{\infty} (-1)^{n} \left(1 - \frac{1}{n}\right)^{n^{2}}$ (Hint: $\lim_{n \to \infty} (1 + x/n)^{n} = e^{x}$ ) 

16. $\sum_{n=2}^{\infty} \frac{(-1)^n}{n^{1+n}}$ 

## Determining Convergence or Divergence

In Exercises 17–46, use any method to determine whether the series converges or diverges. Give reasons for your answer.

17. $\sum_{n=1}^{\infty}\frac{n^{\sqrt{2}}}{2^{n}}$ 18. $\sum_{n=1}^{\infty}(-1)^{n}n^{2}e^{-n}$ 19. $\sum_{n=1}^{\infty}n!(-e)^{-n}$ 20. $\sum_{n=1}^{\infty}\frac{n!}{10^{n}}$ 21. $\sum_{n=1}^{\infty}\frac{n^{10}}{10^{n}}$ 22. $\sum_{n=1}^{\infty}\left(\frac{n-2}{n}\right)^{n}$ 

23. $\sum_{n=1}^{\infty} \frac{2 + (-1)^n}{1.25^n}$ 

24. $\sum_{n=1}^{\infty} \frac{(-2)^n}{3^n}$ 

25. $\sum_{n=1}^{\infty} (-1)^{n} \left(1 - \frac{3}{n}\right)^{n}$ 

26. $\sum_{n=1}^{\infty}\left(1 - \frac{1}{3n}\right)^n$ 

27. $\sum_{n=1}^{\infty} \frac{\ln n}{n^3}$ 

28. $\sum_{n=1}^{\infty} \frac{(-\ln n)^n}{n^n}$ 

29. $\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n^{2}}\right)$ 

30. $\sum_{n=1}^{\infty}\left(\frac{1}{n}-\frac{1}{n^{2}}\right)^{n}$ 

31. $\sum_{n=1}^{\infty} \frac{e^n}{n^e}$ 

32. $\sum_{n=1}^{\infty} \frac{n \ln n}{(-2)^n}$ 

33. $\sum_{n=1}^{\infty} \frac{(n+1)(n+2)}{n!}$ 

34. $\sum_{n = 1}^{\infty}e^{-n}(n^{3})$ 

35. $\sum_{n=1}^{\infty} \frac{(n+3)!}{3!n!3^n}$ 

36. $\sum_{n=1}^{\infty} \frac{n2^n (n+1)!}{3^n n!}$ 

37. $\sum_{n=1}^{\infty} \frac{n!}{(2n + 1)!}$ 

38. $\sum_{n = 1}^{\infty}\frac{n!}{(-n)^{n}}$ 

39. $\sum_{n=2}^{\infty} \frac{-n}{(\ln n)^n}$ 

40. $\sum_{n=2}^{\infty} \frac{n}{(\ln n)^{(n/2)}}$ 

41. $\sum_{n=1}^{\infty} \frac{n! \ln n}{n(n + 2)!}$ 

42. $\sum_{n=1}^{\infty} \frac{(-3)^n}{n^3 2^n}$ 

43. $\sum_{n = 1}^{\infty}\frac{(n!)^{2}}{(2n)!}$ 

44. $\sum_{n=1}^{\infty} \frac{(2n + 3)(2^n + 3)}{3^n + 2}$ 

45. $\sum_{n=3}^{\infty} \frac{2^n}{n^2}$ 46. $\sum_{n=3}^{\infty} \frac{2^{n^2}}{n^{2^n}}$ 

## Recursively Defined Terms Which of the series $\sum_{n=1}^{\infty}a_{n}$ defined by the formulas in Exercises 47–56 converge, and which diverge? Give reasons for your answers.

47. $a_1 = 2, a_{n + 1} = \frac{1 + \sin n}{n} a_n$ 

48. $a_1 = 1, a_{n + 1} = \frac{1 + \tan^{-1}n}{n} a_n$ 

49. $a_1 = \frac{1}{3}, a_{n + 1} = \frac{3n - 1}{2n + 5} a_n$ 

50. $a_1 = 3, a_{n + 1} = \frac{n}{n + 1} a_n$ 

51. $a_1 = 2, a_{n + 1} = \frac{2}{n} a_n$ 

52. $a_1 = 5, a_{n + 1} = \frac{\sqrt[n]{n}}{2} a_n$ 

53. $a_1 = 1, a_{n + 1} = \frac{1 + \ln n}{n} a_n$ 

54. $a_1 = \frac{1}{2}, a_{n + 1} = \frac{n + \ln n}{n + 10} a_n$ 

55. $a_1 = \frac{1}{3}, a_{n + 1} = \sqrt[n]{a_n}$ 56. $a_1 = \frac{1}{2}, a_{n + 1} = (a_n)^{n + 1}$ 

## Convergence or Divergence

Which of the series in Exercises 57–64 converge, and which diverge? Give reasons for your answers. 

57. $\sum_{n=1}^{\infty} \frac{2^n n! n!}{(2n)!}$ 58. $\sum_{n=1}^{\infty} \frac{(-1)^n (3n)!}{n!(n+1)!(n+2)!}$ 

59. $\sum_{n=1}^{\infty} \frac{(n!)^n}{(n^n)^2}$ 

60. $\sum_{n=1}^{\infty} (-1)^{n} \frac{(n!)^{n}}{n^{(n^{2})}}$ 

61. $\sum_{n = 1}^{\infty}\frac{n^n}{2^{(n^2)}}$ 

62. $\sum_{n=1}^{\infty} \frac{n^n}{(2^n)^2}$ 

63. $\sum_{n=1}^{\infty} \frac{1 \cdot 3 \cdot \cdots \cdot (2n - 1)}{4^n 2^n n!}$ 

64. $\sum_{n=1}^{\infty} \frac{1 \cdot 3 \cdot \cdots \cdot (2n - 1)}{[2 \cdot 4 \cdot \cdots \cdot (2n)](3^n + 1)}$ 

65. Assume that $b_{n}$ is a sequence of positive numbers converging to 4/5. Determine whether the following series converge or diverge.
a. $\sum_{n=1}^{\infty}(b_n)^{1/n}$ b. $\sum_{n=1}^{\infty}\left(\frac{5}{4}\right)^n(b_n)$ c. $\sum_{n=1}^{\infty}(b_n)^n$ d. $\sum_{n=1}^{\infty}\frac{1000^n}{n! + b_n}$ 

66. Assume that $b_{n}$ is a sequence of positive numbers converging to 1/3. Determine whether the following series converge or diverge.
a. $\sum_{n=1}^{\infty}\frac{b_{n+1}b_{n}}{n4^{n}}$ b. $\sum_{n=1}^{\infty}\frac{n^{n}}{n!b_{1}^{2}b_{2}^{2}\cdots b_{n}^{2}}$ 

Theory and Examples 

67. Neither the Ratio Test nor the Root Test helps with $p$ -series. Try them on $\sum_{n=1}^{\infty} \frac{1}{n^p}$ 

and show that both tests fail to provide information about convergence. 

68. Show that neither the Ratio Test nor the Root Test provides information about the convergence of 

$\sum_{n=2}^{\infty} \frac{1}{(\ln n)^p} \quad (p \text{ constant}).$ 

69. Let $a_{n} = \begin{cases} n / 2^{n}, & \text{if } n \text{ is a prime number} \\ 1 / 2^{n}, & \text{otherwise}. \end{cases}$ Does $\sum a_{n}$ converge? Give reasons for your answer. 

70. Show that $\sum_{n=1}^{\infty} 2^{(n^2)} / n!$ diverges. Recall from the Laws of Exponents that $2^{(n^2)} = (2^n)^n$ . 

71. Determine whether the series $\sum_{n=1}^{\infty} c_n$ converges, where 

$c_{n} = \left\{ \begin{array}{ll} - 1 / n, & \text{if } n \text{ is a perfect square},\\ 1 / n^{2}, & \text{if } n \text{ is not a perfect square}. \end{array} \right.$ 

## Alternating Series and Conditional Convergence

A series in which the terms are alternately positive and negative is an alternating series. Here are three examples: 

$$
1 - \frac {1}{2} + \frac {1}{3} - \frac {1}{4} + \frac {1}{5} - \dots + \frac {(- 1) ^ {n + 1}}{n} + \dots\tag{1}
$$

$$
- 2 + 1 - \frac {1}{2} + \frac {1}{4} - \frac {1}{8} + \dots + \frac {(- 1) ^ {n} 4}{2 ^ {n}} + \dots\tag{2}
$$

$$
1 - 2 + 3 - 4 + 5 - 6 + \dots + (- 1) ^ {n + 1} n + \dots\tag{3}
$$

![[3bd2d8821a75dd977445bba1d76234a0e5e2dbc538d16174d055caed1c2b58e6.jpg|image]]



FIGURE 9.15 The partial sums of an alternating series that satisfies the hypotheses of Theorem 15 for N = 1 straddle the limit from the beginning.


We see from these examples that the $n$ th term of an alternating series is of the form 

$$
a _ {n} = (- 1) ^ {n + 1} u _ {n} \quad \text { or } \quad a _ {n} = (- 1) ^ {n} u _ {n},
$$

where $u_{n} = |a_{n}|$ is a positive number. 

Series (1), called the alternating harmonic series, converges, as we will see in a moment. Series (2), which is a geometric series with ratio $r = -1/2$ , converges to $-2/[1 + (1/2)] = -4/3$ . Series (3) diverges because the $n$ th term does not approach zero. We prove the convergence of the alternating harmonic series by applying the Alternating Series Test. This test is for convergence of an alternating series and cannot be used to conclude that such a series diverges. If we multiply $(u_1 - u_2 + u_3 - u_4 + \cdots)$ by $-1$ , we see that the test is also valid for the alternating series $-u_1 + u_2 - u_3 + u_4 - \cdots$ , as with the one in Series (2) given above. 

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n + 1} u _ {n} = u _ {1} - u _ {2} + u _ {3} - u _ {4} + \dots
$$

converges if the following conditions are satisfied: 

1. The $u_{n}$ 's are all positive. 

2. The $u_{n}$ 's are eventually nonincreasing: $u_{n} \geq u_{n + 1}$ for all $n \geq N$ , for some integer $N$ . 

3. $u_{n} \rightarrow 0.$ 

Proof We look at the case N = 1, where we have nonincreasing terms $u_{1} \geq u_{2} \geq u_{3} \geq \cdots$ . If n is an even integer, say n = 2m, then the sum of the first n terms is 

$$
s _ {2 m} = (u _ {1} - u _ {2}) + (u _ {3} - u _ {4}) + \dots + (u _ {2 m - 1} - u _ {2 m}).
$$

Written this way, we see that $s_{2m}$ is the sum of n nonnegative terms, since each term in parentheses is positive or zero. In particular, $s_{2m+2}$ equals $s_{2m}$ plus the nonnegative term $(u_{2m+1} - u_{2m+2})$ , so $s_{2m+2} \geq s_{2m}$ . This shows that the sequence $\{s_{2m}\}$ is nondecreasing. On the other hand, we can write 

$$
s _ {2 m} = u _ {1} - \left(u _ {2} - u _ {3}\right) - \left(u _ {4} - u _ {5}\right) - \dots - \left(u _ {2 m - 2} - u _ {2 m - 1}\right) - u _ {2 m}.
$$

This shows that $s_{2m} \leq u_{1}$ for every m. Hence the sequence $\{s_{2m}\}$ is both nondecreasing and bounded from above, so it has a limit, which we call L, 

$$
\lim _ {m \to \infty} s _ {2 m} = L. \quad \text { Theorem   6 }\tag{4}
$$

If $n$ is an odd integer, say $n = 2m + 1$ , then the sum of the first $n$ terms is $s_{2m + 1} = s_{2m} + u_{2m + 1}$ . Since $u_{n} \to 0$ , 

$$
\lim _ {m \to \infty} u _ {2 m + 1} = 0.
$$

Therefore, 

$$
\lim _ {m \rightarrow \infty} s _ {2 m + 1} = \lim _ {m \rightarrow \infty} s _ {2 m} + \lim _ {m \rightarrow \infty} u _ {2 m + 1} = L + 0 = L.\tag{5}
$$

Combining the results of Equations (4) and (5) gives $\lim_{n\to\infty}s_n=L$ (Section 9.1, Exercise 143). 

**EXAMPLE 1** The alternating harmonic series 

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n + 1} \frac {1}{n} = 1 - \frac {1}{2} + \frac {1}{3} - \frac {1}{4} + \dots
$$

clearly satisfies the three requirements of Theorem 15 with N = 1; it therefore converges by the Alternating Series Test. Notice that the test gives no information about what the sum of the series might be. Figure 9.16 shows histograms of the partial sums of the divergent harmonic series and those of the convergent alternating harmonic series. It turns out that the alternating harmonic series converges to ln 2 (Exercise 61 in Section 9.7). 

![[c88a288c551d2f2736aec1e15429a39dc36086119fd76e66a32b95a9344343d5.jpg|image]]


![[fc6092b8db7ebbbf41926df6c0b85b3a0c4219401cc0ac32997de20f3f58a362.jpg|image]]



(b)



FIGURE 9.16 (a) The harmonic series diverges, with partial sums that eventually exceed any constant. (b) The alternating harmonic series converges to $\ln 2 \approx .693$ .


Rather than directly verifying the definition $u_{n} \geq u_{n+1}$ , a second way to show that the sequence $\{u_{n}\}$ is nonincreasing is to define a differentiable function $f(x)$ satisfying $f(n) = u_{n}$ . That is, the values of f match the values of the sequence at every positive integer n. If $f'(x) \leq 0$ for all x greater than or equal to some positive integer N, then $f(x)$ is nonincreasing for $x \geq N$ . It follows that $f(n) \geq f(n+1)$ , or $u_{n} \geq u_{n+1}$ , for $n \geq N$ . 

**EXAMPLE 2** We show that the sequence $u_{n} = 10n / (n^{2} + 16)$ is eventually nonincreasing. Define $f(x) = 10x / (x^{2} + 16)$ . Then, from the Derivative Quotient Rule, 

$$
f ^ {\prime} (x) = \frac {1 0 (1 6 - x ^ {2})}{(x ^ {2} + 1 6) ^ {2}} \leq 0 \quad \text { whenever } x \geq 4.
$$

It follows that $u_{n} \geq u_{n + 1}$ for $n \geq 4$ . That is, the sequence $\{u_n\}$ is nonincreasing for $n \geq 4$ . 

A graphical interpretation of the partial sums (Figure 9.15) shows how an alternating series converges to its limit L when the three conditions of Theorem 15 are satisfied with N = 1. Starting from the origin of the x-axis, we lay off the positive distance $s_{1} = u_{1}$ . To find the point corresponding to $s_{2} = u_{1} - u_{2}$ , we back up a distance equal to $u_{2}$ . Since $u_{2} \leq u_{1}$ , we do not back up any farther than the origin. We continue in this seesaw fashion, backing up or going forward as the signs in the series demand. Each forward or backward step is shorter than (or at most the same size as) the preceding step because $u_{n+1} \leq u_{n}$ . And since the nth term approaches zero as n increases, the size of step we take forward or backward gets smaller and smaller. We oscillate back and forth across the limit L, and the amplitude of oscillation approaches zero. The limit L lies between any two successive sums $s_{n}$ and $s_{n+1}$ and hence differs from $s_{n}$ by an amount less than $u_{n+1}$ . If N > 1, then the first few forward and backward steps need not get smaller, but from N onward they will decrease. Therefore 

THEOREM 16—The Alternating Series Estimation Theorem
If the alternating series $\sum_{n=1}^{\infty}(-1)^{n+1}u_{n}$ satisfies the three conditions of Theorem 15, then for $n \geq N$ , $s_{n}=u_{1}-u_{2}+\cdots+(-1)^{n+1}u_{n}$ approximates the sum L of the series with an error whose absolute value is less than $u_{n+1}$ , the absolute value of the first unused term. Furthermore, the sum L lies between any two successive partial sums $s_{n}$ and $s_{n+1}$ , and the remainder, $L - s_{n}$ , has the same sign as the first unused term. 

$$
\left| L - s _ {n} \right| <   u _ {n + 1} \quad \text {   for   } n \geq N,
$$

and we can use this fact to make useful estimates of the sums of convergent alternating series. 

We leave the verification of the sign of the remainder for Exercise 87. 

**EXAMPLE 3** We try Theorem 16 on a series whose sum we know: 

$$
\sum_ {n = 0} ^ {\infty} (- 1) ^ {n} \frac {1}{2 ^ {n}} = 1 - \frac {1}{2} + \frac {1}{4} - \frac {1}{8} + \frac {1}{1 6} - \frac {1}{3 2} + \frac {1}{6 4} - \frac {1}{1 2 8} + \frac {1}{2 5 6} - \dots .
$$

The theorem says that if we truncate the series after the eighth term, we throw away a total that is positive and less than 1/256. The sum of the first eight terms is $s_8 = 0.6640625$ and the sum of the first nine terms is $s_9 = 0.66796875$ . The sum of the geometric series is 

$$
\frac {1}{1 - (- 1 / 2)} = \frac {1}{3 / 2} = \frac {2}{3},
$$

and we note that 0.6640625 < (2/3) < 0.66796875. The difference, 

$$
(2 / 3) - 0. 6 6 4 0 6 2 5 = 0. 0 0 2 6 0 4 1 6 6 6 \dots ,
$$

is positive and is less than (1/256) = 0.00390625. 

## Conditional Convergence

If we replace all the negative terms in the alternating series in Example 3, changing them to positive terms instead, we obtain the geometric series $\sum 1/2^{n}$ . The original series and the new series of absolute values both converge (although to different sums). For an absolutely convergent series, changing infinitely many of the negative terms in the series to positive values does not change its property of still being a convergent series. Other convergent series may behave differently. The convergent alternating harmonic series has infinitely many negative terms, but if we change its negative terms to positive values, the resulting series is the divergent harmonic series. So the presence of infinitely many negative terms is essential to the convergence of this alternating harmonic series. The following terminology distinguishes these two types of convergent series. 

> ***DEFINITION*** A series that is convergent but not absolutely convergent is called conditionally convergent. 

The alternating harmonic series is conditionally convergent, or converges conditionally. The next example extends that result to the alternating $p$ -series. 

**EXAMPLE 4** If p is a positive constant, the sequence $\{1/n^{p}\}$ is a decreasing sequence with limit zero. Therefore, the alternating p-series 

$$
\sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1}}{n ^ {p}} = 1 - \frac {1}{2 ^ {p}} + \frac {1}{3 ^ {p}} - \frac {1}{4 ^ {p}} + \dots , \quad p > 0
$$

converges. 

If p > 1, the series converges absolutely as an ordinary p-series. If $0 < p \leq 1$ , the series converges conditionally: It converges by the alternating series test, but the corresponding series of absolute values is a divergent p-series. For instance, 

Absolute convergence 

$$
(p = 3 / 2): \quad 1 - \frac {1}{2 ^ {3 / 2}} + \frac {1}{3 ^ {3 / 2}} - \frac {1}{4 ^ {3 / 2}} + \dots
$$

Conditional convergence 

$$
(p = 1 / 2): \quad 1 - \frac {1}{\sqrt {2}} + \frac {1}{\sqrt {3}} - \frac {1}{\sqrt {4}} + \dots
$$

We need to be careful when using a conditionally convergent series. We have seen with the alternating harmonic series that altering the signs of infinitely many terms of a conditionally convergent series can change its convergence status. Even more, simply changing the order of occurrence of infinitely many of its terms can also have a significant effect, as we now discuss. 

## Rearranging Series

We can always rearrange the terms of a finite collection of numbers without changing their sum. The same result is true for an infinite series that is absolutely convergent (see Exercise 96 for an outline of the proof). 

THEOREM 17—The Rearrangement Theorem for Absolutely Convergent Series 

If $\sum_{n=1}^{\infty} a_n$ converges absolutely, and $b_1, b_2, \ldots, b_n, \ldots$ is any arrangement of the sequence $\{a_n\}$ , then $\sum_{n=1}^{\infty} b_n$ converges absolutely and 

$$
\sum_ {n = 1} ^ {\infty} b _ {n} = \sum_ {n = 1} ^ {\infty} a _ {n}.
$$

On the other hand, if we rearrange the terms of a conditionally convergent series, we can get different results. In fact, for any real number $r$ , a given conditionally convergent series can be rearranged so that its sum is equal to $r$ . (We omit the proof of this.) Here's an example where summing the terms of a conditionally convergent series with different orderings gives different values for the sum. 

**EXAMPLE 5** We know that the alternating harmonic series $\sum_{n=1}^{\infty} (-1)^{n+1} / n$ converges to some number $L$ . Moreover, by Theorem 16, $L$ lies between the successive partial sums $s_2 = 1/2$ and $s_3 = 5/6$ , so $L \neq 0$ . If we multiply the series by 2, we obtain 

$$
\begin{array}{r l} 2 L & = 2 \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n + 1}}{n} = 2 \left(1 - \frac {1}{2} + \frac {1}{3} - \frac {1}{4} + \frac {1}{5} - \frac {1}{6} + \frac {1}{7} - \frac {1}{8} + \frac {1}{9} - \frac {1}{1 0} + \frac {1}{1 1} - \dots\right) \\ & = 2 - 1 + \frac {2}{3} - \frac {1}{2} + \frac {2}{5} - \frac {1}{3} + \frac {2}{7} - \frac {1}{4} + \frac {2}{9} - \frac {1}{5} + \frac {2}{1 1} - \dots . \end{array}
$$

Now we change the order of this last sum by grouping each pair of terms with the same odd denominator, but leaving the negative terms with the even denominators as they are placed (so that the denominators are the positive integers in their natural order). This rearrangement gives 

$$
\begin{array}{l} (2 - 1) - \frac {1}{2} + \left(\frac {2}{3} - \frac {1}{3}\right) - \frac {1}{4} + \left(\frac {2}{5} - \frac {1}{5}\right) - \frac {1}{6} + \left(\frac {2}{7} - \frac {1}{7}\right) - \frac {1}{8} + \dots \\ = \left(1 - \frac {1}{2} + \frac {1}{3} - \frac {1}{4} + \frac {1}{5} - \frac {1}{6} + \frac {1}{7} - \frac {1}{8} + \frac {1}{9} - \frac {1}{1 0} + \frac {1}{1 1} - \dots\right) \\ = \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n + 1}}{n} = L. \end{array}
$$

So when we rearrange the terms of the conditionally convergent series $\sum_{n=1}^{\infty}2(-1)^{n+1}/n$ , the series becomes $\sum_{n=1}^{\infty}(-1)^{n+1}/n$ , which is the alternating harmonic series itself. If the two series are the same, it would imply that 2L = L, which is clearly false since $L \neq 0$ . 

Example 5 shows that we cannot rearrange the terms of a conditionally convergent series and expect the new series to be the same as the original one. When we use a conditionally convergent series, we must add the terms together in the order in which they are given to obtain a correct result. In contrast, Theorem 17 guarantees that the terms of an absolutely convergent series can be summed in any order without affecting the result. 

## Summary of Tests to Determine Convergence or Divergence

We have developed a variety of tests to determine convergence or divergence for an infinite series of constants. Other tests that we have not presented are sometimes given in more advanced courses. Here is a summary of the tests we have considered. 

1. The $n$ th-Term Test for Divergence: Unless $a_{n} \to 0$ , the series diverges. 

2. Geometric series: $\sum ar^n$ converges if $|r| < 1$ ; otherwise, it diverges. 

3. $p$ -series: $\sum 1/n^p$ converges if $p > 1$ ; otherwise, it diverges. 

4. Series with nonnegative terms: Try the Integral Test or try comparing to a known series with the Direct Comparison Test or the Limit Comparison Test. Try the Ratio or Root Test. 

5. Series with some negative terms: Does $\sum|a_{n}|$ converge by the Ratio or Root Test, or by another of the tests listed above? Remember, absolute convergence implies convergence. 

6. Alternating series: $\sum a_{n}$ converges if the series satisfies the conditions of the Alternating Series Test. 

## EXERCISES

## Convergence of Alternating Series

In Exercises 1–14, determine whether the alternating series converges or diverges. Some of the series do not satisfy the conditions of the Alternating Series Test. 

5. $\sum_{n=1}^{\infty} (-1)^{n} \frac{n}{n^{2} + 1}$ 

6. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n^2 + 5}{n^2 + 4}$ 

$$
\mathbf {1 .} \sum_ {n = 1} ^ {\infty} (- 1) ^ {n + 1} \frac {1}{\sqrt {n}}
$$

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n + 1} \frac {1}{n ^ {3 / 2}}
$$

7. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{2^n}{n^2}$ 

8. $\sum_{n=1}^{\infty} (-1)^{n} \frac{10^{n}}{(n+1)!}$ 

3. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{n3^n}$ 

4. $\sum_{n=2}^{\infty} (-1)^{n} \frac{4}{(\ln n)^{2}}$ 

9. $\sum_{n=1}^{\infty} (-1)^{n+1} \left( \frac{n}{10} \right)^n$ 

10. $\sum_{n=2}^{\infty} (-1)^{n+1} \frac{1}{\ln n}$ 

11. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{\ln n}{n}$ 

12. $\sum_{n=1}^{\infty} (-1)^n \ln \left(1 + \frac{1}{n}\right)$ 

13. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{\sqrt{n} + 1}{n + 1}$ 

14. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{3\sqrt{n + 1}}{\sqrt{n} + 1}$ 

Absolute and Conditional Convergence 

Which of the series in Exercises 15–48 converge absolutely, which converge conditionally, and which diverge? Give reasons for your answers. 

15. $\sum_{n=1}^{\infty} (-1)^{n+1}(0.1)^n$ 

16. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{(0.1)^n}{n}$ 

17. $\sum_{n=1}^{\infty} (-1)^n \frac{1}{\sqrt{n}}$ 

18. $\sum_{n=1}^{\infty} \frac{(-1)^n}{1 + \sqrt{n}}$ 

19. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n}{n^3 + 1}$ 

20. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n!}{2^n}$ 

21. $\sum_{n=1}^{\infty} (-1)^n \frac{1}{n+3}$ 

22. $\sum_{n=1}^{\infty} (-1)^n \frac{\sin n}{n^2}$ 

23. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{3 + n}{5 + n}$ 

24. $\sum_{n=1}^{\infty} \frac{(-2)^{n+1}}{n + 5^n}$ 

25. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1 + n}{n^2}$ 

26. $\sum_{n=1}^{\infty} (-1)^{n+1} \left( \sqrt[n]{10} \right)$ 

27. $\sum_{n=1}^{\infty} (-1)^n n^2 (2/3)^n$ 

28. $\sum_{n=2}^{\infty} (-1)^{n+1} \frac{1}{n \ln n}$ 

29. $\sum_{n=1}^{\infty} (-1)^{n} \frac{\arctan n}{n^{2} + 1}$ 

30. $\sum_{n=1}^{\infty} (-1)^n \frac{\ln n}{n - \ln n}$ 

31. $\sum_{n=1}^{\infty} (-1)^n \frac{n}{n+1}$ 

32. $\sum_{n=1}^{\infty} (-5)^{-n}$ 

33. $\sum_{n=1}^{\infty} \frac{(-100)^n}{n!}$ 

34. $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2 + 2n + 1}$ 

35. $\sum_{n=1}^{\infty} \frac{\cos n\pi}{n\sqrt{n}}$ 

36. $\sum_{n = 1}^{\infty}\frac{\cos n\pi}{n}$ 

37. $\sum_{n=1}^{\infty} \frac{(-1)^n (n+1)^n}{(2n)^n}$ 

38. $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}(n!)^2}{(2n)!}$ 

39. $\sum_{n=1}^{\infty} (-1)^{n} \frac{(2n)!}{2^{n} n! n}$ 

40. $\sum_{n=1}^{\infty} (-1)^{n} \frac{(n!)^{2} 3^{n}}{(2n + 1)!}$ 

41. $\sum_{n=1}^{\infty} (-1)^{n} \left( \sqrt{n+1} - \sqrt{n} \right)$ 

42. $\sum_{n=1}^{\infty} (-1)^{n} \left( \sqrt{n^{2} + n} - n \right)$ 

43. $\sum_{n=1}^{\infty} (-1)^{n} \left( \sqrt{n + \sqrt{n}} - \sqrt{n} \right)$ 

44. $\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n} + \sqrt{n+1}}$ 

45. $\sum_{n=1}^{\infty} (-1)^n \operatorname{sech} n$ 46. $\sum_{n=1}^{\infty} (-1)^n \operatorname{csch} n$ 

47. $\frac{1}{4} -\frac{1}{6} +\frac{1}{8} -\frac{1}{10} +\frac{1}{12} -\frac{1}{14} +\dots$ 

48. $1 + \frac{1}{4} -\frac{1}{9} -\frac{1}{16} +\frac{1}{25} +\frac{1}{36} -\frac{1}{49} -\frac{1}{64} +\dots$ 

## Error Estimation

In Exercises 49–52, estimate the magnitude of the error involved in using the sum of the first four terms to approximate the sum of the entire series. 

49. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{n}$ 

50. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{10^n}$ 

51. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{(0.01)^n}{n}$ As you will see in Section 9.7, the sum is ln (1.01). 

52. $\frac{1}{1 + t} = \sum_{n=0}^{\infty} (-1)^n t^n, 0 < t < 1$ 

In Exercises 53–56, determine how many terms should be used to estimate the sum of the entire series with an error of less than 0.001. 

53. $\sum_{n=1}^{\infty} (-1)^{n} \frac{1}{n^{2} + 3}$ 

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n + 1} \frac {n}{n ^ {2} + 1}
$$

55. $\sum_{n=1}^{\infty} (-1)^{n+1} \frac{1}{(n + 3\sqrt{n})^3}$ 

56. $\sum_{n=1}^{\infty} (-1)^{n} \frac{1}{\ln (\ln (n + 2))}$ 

## Determining Convergence or Divergence

In Exercises 57–82, use any method to determine whether the series converges or diverges. Give reasons for your answer. 

57. $\sum_{n=1}^{\infty} \frac{3^n}{n^n}$ 

58. $\sum_{n = 1}^{\infty}\frac{3^n}{n^3}$ 

59. $\sum_{n=1}^{\infty}\left(\frac{1}{n+2}-\frac{1}{n+3}\right)$ 

60. $\sum_{n=1}^{\infty}\left(\frac{1}{2n+1}-\frac{1}{2n+2}\right)$ 

61. $\sum_{n=0}^{\infty} (-1)^{n} \frac{(n+2)!}{(2n)!}$ 

62. $\sum_{n=2}^{\infty} \frac{(3n)!}{(n!)^3}$ 

63. $\sum_{n = 1}^{\infty}n^{-2 / \sqrt{5}}$ 

64. $\sum_{n=2}^{\infty} \frac{3}{10 + n^{4/3}}$ 

65. $\sum_{n=1}^{\infty}\left(1 - \frac{2}{n}\right)^{n^2}$ 

66. $\sum_{n=0}^{\infty}\left(\frac{n+1}{n+2}\right)^{n}$ 

67. $\sum_{n=1}^{\infty} \frac{n - 2}{n^2 + 3n}\left(-\frac{2}{3}\right)^n$ 

68. $\sum_{n=0}^{\infty} \frac{n+1}{(n+2)!}\left(\frac{3}{2}\right)^n$ 

69. $\frac{1}{2} -\frac{1}{2} +\frac{1}{2} -\frac{1}{2} +\frac{1}{2} -\frac{1}{2} +\dots$ 

70. $1 - \frac{1}{8} +\frac{1}{64} -\frac{1}{512} +\frac{1}{4096} -\dots$ 

$$
\sum_ {n = 3} ^ {\infty} \sin \left(\frac {1}{\sqrt {n}}\right)
$$

72. $\sum_{n=1}^{\infty} \tan(n^{1/n})$ 

73. $\sum_{n = 2}^{\infty}\frac{n}{\ln n}$ 

74. $\sum_{n=2}^{\infty} \frac{1}{n \sqrt{\ln n}}$ 

75. $\sum_{n=2}^{\infty} \ln \left( \frac{n+2}{n+1} \right)$ 

76. $\sum_{n = 2}^{\infty}\left(\frac{\ln n}{n}\right)^{3}$ 

77. $\sum_{n=2}^{\infty} \frac{1}{1 + 2 + 2^2 + \cdots + 2^n}$ 

78. $\sum_{n=2}^{\infty} \frac{1 + 3 + 3^2 + \cdots + 3^{n-1}}{1 + 2 + 3 + \cdots + n}$ 

79. $\sum_{n=0}^{\infty} (-1)^{n} \frac{e^{n}}{e^{n} + e^{n^{2}}}$ 

80. $\sum_{n=0}^{\infty} \frac{(2n+3)(2^n+3)}{3^n+2}$ 

81. $\sum_{n=1}^{\infty} \frac{n^{2}3^{n}}{3 \cdot 5 \cdot 7 \cdots (2n + 1)}$ 82. $\sum_{n=1}^{\infty} \frac{4 \cdot 6 \cdot 8 \cdots (2n)}{5^{n+1}(n + 2)!}$ 

T Approximate the sums in Exercises 83 and 84 with an error of magnitude less than $5 \times 10^{-6}$ . 

83. $\sum_{n=0}^{\infty} (-1)^{n} \frac{1}{(2n)!}$ As you will see in Section 9.9, the sum is $\cos 1$ , the cosine of 1 radian. 

84. $\sum_{n=0}^{\infty} (-1)^{n} \frac{1}{n!}$ 

As you will see in Section 9.9 the sum is $e^{-1}$ . 

Theory and Examples 

85. a. The series 

$$
\frac {1}{3} - \frac {1}{2} + \frac {1}{9} - \frac {1}{4} + \frac {1}{2 7} - \frac {1}{8} + \dots + \frac {1}{3 ^ {n}} - \frac {1}{2 ^ {n}} + \dots
$$

does not meet one of the conditions of the Alternating Series Test. Which one? 

b. Use the Sum Rule for series given in Section 9.2 to find the sum of the series in part (a). 

86. The limit L of an alternating series that satisfies the conditions of Theorem 15 lies between the values of any two consecutive partial sums. This suggests using the average 

$$
\frac {s _ {n} + s _ {n + 1}}{2} = s _ {n} + \frac {1}{2} (- 1) ^ {n + 2} a _ {n + 1}
$$

to estimate L. Compute 

$$
s _ {2 0} + \frac {1}{2} \cdot \frac {1}{2 1}
$$

as an approximation to the sum of the alternating harmonic series. The exact sum is $\ln 2 = 0.69314718\ldots$ . 

87. The sign of the remainder of an alternating series that satisfies the conditions of Theorem 15 Prove the assertion in Theorem 16 that whenever an alternating series satisfying the conditions of Theorem 15 is approximated with one of its partial sums, the remainder (the sum of the unused terms) has the same sign as the first unused term. (Hint: Group the remainder's terms in consecutive pairs.) 

88. Show that the sum of the first $2n$ terms of the series 

$$
1 - \frac {1}{2} + \frac {1}{2} - \frac {1}{3} + \frac {1}{3} - \frac {1}{4} + \frac {1}{4} - \frac {1}{5} + \frac {1}{5} - \frac {1}{6} + \dots
$$

is the same as the sum of the first n terms of the series 

$$
\frac {1}{1 \cdot 2} + \frac {1}{2 \cdot 3} + \frac {1}{3 \cdot 4} + \frac {1}{4 \cdot 5} + \frac {1}{5 \cdot 6} + \dots .
$$

Do these series converge? What is the sum of the first $2n + 1$ terms of the first series? If the series converge, what is their sum? 89. Show that if $\sum_{n=1}^{\infty} a_n$ diverges, then $\sum_{n=1}^{\infty} |a_n|$ diverges. 

90. Show that if $\sum_{n=1}^{\infty} a_n$ converges absolutely, then 

$$
\left| \sum_ {n = 1} ^ {\infty} a _ {n} \right| \leq \sum_ {n = 1} ^ {\infty} | a _ {n} |.
$$

91. Show that if $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ both converge absolutely, then so do the following. 

$$
\mathbf {a}. \sum_ {n = 1} ^ {\infty} (a _ {n} + b _ {n}) \quad \mathbf {b}. \sum_ {n = 1} ^ {\infty} (a _ {n} - b _ {n})
$$

c. $\sum_{n=1}^{\infty} ka_n$ (k any number) 

92. Show by example that $\sum_{n=1}^{\infty} a_n b_n$ may diverge even if $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ both converge. 

93. Prove that if $\sum a_{n}$ converges absolutely, then $\sum a_{n}^{2}$ converges. 

94. Does the series 

$$
\sum_ {n = 1} ^ {\infty} \left(\frac {1}{n} - \frac {1}{n ^ {2}}\right)
$$

converge or diverge? Justify your answer. 

95. In the alternating harmonic series, suppose the goal is to arrange the terms to get a new series that converges to $-1/2$ . Start the new arrangement with the first negative term, which is $-1/2$ . Whenever you have a sum that is less than or equal to $-1/2$ , start introducing positive terms, taken in order, until the new total is greater than $-1/2$ . Then add negative terms until the total is less than or equal to $-1/2$ again. Continue this process until your partial sums have been above the target at least three times and finish at or below it. If $s_n$ is the sum of the first $n$ terms of your new series, plot the points $(n, s_n)$ to illustrate how the sums are behaving. 

## 96. Outline of the proof of the Rearrangement Theorem (Theorem 17)

a. Let $\varepsilon$ be a positive real number, let $L = \sum_{n=1}^{\infty} a_n$ , and let $s_k = \sum_{n=1}^{k} a_n$ . Show that for some index $N_1$ and for some index $N_2 \geq N_1$ , 

$$
\sum_ {n = N _ {1}} ^ {\infty} \left| a _ {n} \right| <   \frac {\varepsilon}{2} \text { and } \left| s _ {N _ {2}} - L \right| <   \frac {\varepsilon}{2}.
$$

Since all the terms $a_1, a_2, \ldots, a_{N_2}$ appear somewhere in the sequence $\{b_n\}$ , there is an index $N_3 \geq N_2$ such that if $n \geq N_3$ , then $\left(\sum_{k=1}^{n} b_k\right) - s_{N_2}$ is at most a sum of terms $a_m$ with $m \geq N_1$ . Therefore, if $n \geq N_3$ , then 

$$
\begin{array}{l} \left| \sum_ {k = 1} ^ {n} b _ {k} - L \right| \leq \left| \sum_ {k = 1} ^ {n} b _ {k} - s _ {N _ {2}} \right| + \left| s _ {N _ {2}} - L \right| \\ \leq \sum_ {k = N _ {1}} ^ {\infty} | a _ {k} | + \left| s _ {N _ {2}} - L \right| <   \varepsilon . \end{array}
$$

b. The argument in part (a) shows that if $\sum_{n=1}^{\infty} a_n$ converges absolutely, then $\sum_{n=1}^{\infty} b_n$ converges and $\sum_{n=1}^{\infty} b_n = \sum_{n=1}^{\infty} a_n$ . Now show that because $\sum_{n=1}^{\infty} a_n$ converges, $\sum_{n=1}^{\infty} b_n$ converges to $\sum_{n=1}^{\infty} a_n$ . 

## Power Series

Now that we can test many infinite series of numbers for convergence, we can study sums that look like “infinite polynomials.” We call these sums power series because they are defined as infinite series of powers of some variable, in our case x. Like polynomials, power series can be added, subtracted, multiplied, differentiated, and integrated to give new power series. With power series we can extend the methods of calculus to a vast array of functions, making the techniques of calculus applicable in an even wider setting. 

## Power Series and Convergence

We begin with the formal definition, which specifies the notation and terminology used for power series. 

> ***DEFINITIONS*** A power series about x = 0 is a series of the form 
>
> $$
> \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n} = c _ {0} + c _ {1} x + c _ {2} x ^ {2} + \dots + c _ {n} x ^ {n} + \dots .\tag{1}
> $$
>
A power series about x = a is a series of the form 

$$
\sum_ {n = 0} ^ {\infty} c _ {n} (x - a) ^ {n} = c _ {0} + c _ {1} (x - a) + c _ {2} (x - a) ^ {2} + \dots + c _ {n} (x - a) ^ {n} + \dots\tag{2}
$$

in which the center a and the coefficients $c_{0}, c_{1}, c_{2}, \ldots, c_{n}, \ldots$ are constants. 

Equation (1) is the special case obtained by taking a = 0 in Equation (2). We will see that a power series defines a function $f(x)$ on a certain interval where it converges. Moreover, this function will be shown to be continuous and differentiable over the interior of that interval. 

Power Series for $\frac{1}{1 - x}$ 

**EXAMPLE 1** Taking all the coefficients to be 1 in Equation (1) gives the geometric power series 

$$
\sum_ {n = 0} ^ {\infty} x ^ {n} = 1 + x + x ^ {2} + \dots + x ^ {n} + \dots .
$$

$$
\frac {1}{1 - x} = \sum_ {n = 0} ^ {\infty} x ^ {n}, | x | <   1
$$

This is the geometric series with first term 1 and ratio $x$ . It converges to $1 / (1 - x)$ for $|x| < 1$ . We express this fact by writing 

$$
\frac {1}{1 - x} = 1 + x + x ^ {2} + \dots + x ^ {n} + \dots , \quad - 1 <   x <   1.\tag{3}
$$

Up to now, we have used Equation (3) as a formula for the sum of the series on the right. We now change the focus: We think of the partial sums of the series on the right as polynomials $P_{n}(x)$ that approximate the function on the left. For values of x near zero, we need take only a few terms of the series to get a good approximation. As we move toward x = 1, or -1, we must take more terms. Figure 9.17 shows the graphs of $f(x) = 1/(1 - x)$ and the approximating polynomials $y_{n} = P_{n}(x)$ for n = 0, 1, 2, and 8. The function $f(x) = 1/(1 - x)$ is not continuous on intervals containing x = 1, where it has a vertical asymptote. The approximations do not apply when $x \geq 1$ . 

![[16721a80c0115b9dcbdff05cc87c6786d24a3db31e82f6a73f94f2aaf1ec7467.jpg|image]]



FIGURE 9.17 The graphs of $f(x) = 1/(1 - x)$ in Example 1 and four of its polynomial approximations.


## **EXAMPLE 2** The power series

$$
1 - \frac {1}{2} (x - 2) + \frac {1}{4} (x - 2) ^ {2} + \dots + \left(- \frac {1}{2}\right) ^ {n} (x - 2) ^ {n} + \dots\tag{4}
$$

matches Equation (2) with $a = 2, c_0 = 1, c_1 = -1/2, c_2 = 1/4, \ldots, c_n = (-1/2)^n$ . This is a geometric series with first term 1 and ratio $r = -\frac{x - 2}{2}$ . The series converges for $\left|\frac{x - 2}{2}\right| < 1$ , which simplifies to $0 < x < 4$ . The sum is 

![[cbba4f8eeb4b3ea01aa0ad68d6d59b702f6f09b00444c5cb4c11f690af5bd03f.jpg|image]]



FIGURE 9.18 The graphs of $f(x) = 2 / x$ and its first three polynomial approximations (Example 2).


$$
{\frac {1}{1 - r}} = {\frac {1}{1 + {\frac {x - 2}{2}}}} = {\frac {2}{x}},
$$

SO 

$$
\frac {2}{x} = 1 - \frac {(x - 2)}{2} + \frac {(x - 2) ^ {2}}{4} - \dots + \left(- \frac {1}{2}\right) ^ {n} (x - 2) ^ {n} + \dots , \quad 0 <   x <   4.
$$

Series (4) generates useful polynomial approximations of $f(x) = 2 / x$ for values of $x$ near 2: 

$$
\begin{array}{l} P _ {0} (x) = 1 \\ P _ {1} (x) = 1 - \frac {1}{2} (x - 2) = 2 - \frac {x}{2} \\ P _ {2} (x) = 1 - \frac {1}{2} (x - 2) + \frac {1}{4} (x - 2) ^ {2} = 3 - \frac {3 x}{2} + \frac {x ^ {2}}{4}, \end{array}
$$

and so on (Figure 9.18). 

The following example illustrates how we test a power series for convergence by using the Ratio Test to see where it converges and where it diverges. 

## **EXAMPLE 3** For what values of x do the following power series converge?

$$
\sum_ {n = 1} ^ {\infty} (- 1) ^ {n - 1} \frac {x ^ {n}}{n} = x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots\tag{a}
$$

$$
\text { (b) } \sum_ {n = 1} ^ {\infty} (- 1) ^ {n - 1} \frac {x ^ {2 n - 1}}{2 n - 1} = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \dots
$$

(c) 

$$
\sum_ {n = 0} ^ {\infty} \frac {x ^ {n}}{n !} = 1 + x + \frac {x ^ {2}}{2 !} + \frac {x ^ {3}}{3 !} + \dots
$$

$$
\text { (d) } \sum_ {n = 0} ^ {\infty} n! x ^ {n} = 1 + x + 2! x ^ {2} + 3! x ^ {3} + \dots
$$

**Solution** Apply the Ratio Test to the series $\sum u_{n}$ , where $u_{n}$ is the $n$ th term of the power series in question. 

$$
\text { (a) } \left| \frac {u _ {n + 1}}{u _ {n}} \right| = \left| \frac {x ^ {n + 1}}{n + 1} \cdot \frac {n}{x} \right| = \frac {n}{n + 1} | x | \rightarrow | x |.
$$

By the Ratio Test, this series converges absolutely for $|x| < 1$ , and it diverges for $|x| > 1$ . At x = 1, we obtain the alternating harmonic series $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ , which converges (though it does not converge absolutely). At x = -1, we get $-1 - \frac{1}{2} - \frac{1}{3} - \frac{1}{4} - \cdots$ , the negative of the harmonic series, which diverges. Series (a) converges for $-1 < x \leq 1$ and diverges elsewhere. The convergence is absolute for -1 < x < 1, but conditional at the point x = 1. 

$$
\xleftarrow {- 1} \begin{array}{c c} 1 & \\ 0 & 1 \end{array} \xrightarrow {} x
$$

We will see in Example 6 that this series converges to the function $\ln (1 + x)$ on the interval $(-1,1]$ (see Figure 9.19). 

![[ece1a8c9795f346f314af046c6d2c4460898dd9782988d0736f9e6592dd04086.jpg|image]]


FIGURE 9.19 The power series $x - \frac{x^{2}}{2} + \frac{x^{3}}{3} - \frac{x^{4}}{4} + \cdots$ converges on the interval $(-1, 1]$ . 

$$
\left| \frac {u _ {n + 1}}{u _ {n}} \right| = \left| \frac {x ^ {2 n + 1}}{2 n + 1} \cdot \frac {2 n - 1}{x ^ {2 n - 1}} \right| = \frac {2 n - 1}{2 n + 1} x ^ {2} \rightarrow x ^ {2}. \quad 2 (n + 1) - 1 = 2 n + 1 \tag {b}
$$

By the Ratio Test, the series converges absolutely for $x^{2} < 1$ and diverges for $x^{2} > 1$ . At x = 1 the series becomes $1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots$ , which converges by the Alternating Series Theorem. It also converges at x = -1 because it is again an alternating series that satisfies the conditions for convergence. The value at x = -1 is the negative of the value at x = 1. Series (b) converges for $-1 \leq x \leq 1$ and diverges elsewhere. The convergence is absolute for -1 < x < 1, but conditional at the points x = -1 and x = 1. 

![[4c8250e24cb4871833a528a5728949036e5c67280cbd6609b5cd4e0a8a695b6b.jpg|image]]


$$
\left(\mathbf {c}\right)\left| \frac {u _ {n + 1}}{u _ {n}} \right| = \left| \frac {x ^ {n + 1}}{(n + 1) !} \cdot \frac {n !}{x ^ {n}} \right| = \frac {| x |}{n + 1} \rightarrow 0 \text {   for   every   } x. \quad \frac {n !}{(n + 1) !} = \frac {1 \cdot 2 \cdot 3 \cdots n}{1 \cdot 2 \cdot 3 \cdots n \cdot (n + 1)}
$$

The series converges absolutely for all x. 

$$
\text {(d)} \left| \frac {u _ {n + 1}}{u _ {n}} \right| = \left| \frac {(n + 1) !   x ^ {n + 1}}{n !   x ^ {n}} \right| = (n + 1) | x | \to \left\{ \begin{array}{l l} 0 & \text { if } x = 0 \\ \infty & \text { if } x \neq 0. \end{array} \right.
$$

The previous example illustrated how a power series might converge. The next result shows that if a power series converges at a nonzero value, then it converges over an entire interval of values. The interval might be finite or infinite and might contain one, both, or none of its endpoints. We will see that each endpoint of a finite interval must be tested independently for convergence or divergence. 

THEOREM 18—The Convergence Theorem for Power Series
If the power series $\sum_{n=0}^{\infty}a_{n}x^{n}=a_{0}+a_{1}x+a_{2}x^{2}+\cdots$ converges at $x=c\neq0$ , then it converges absolutely for all x with $|x|<|c|$ . If the series diverges at x=d, then it diverges for all x with $|x|>|d|$ . 

Proof The proof uses the Direct Comparison Test, with the given series compared to a converging geometric series. 

Suppose the series $\sum_{n=0}^{\infty}a_{n}c^{n}$ converges. Then $\lim_{n\to\infty}a_{n}c^{n}=0$ by the nth-Term Test. Hence, there is an integer N such that $|a_{n}c^{n}|<1$ for all n>N, so 

![[0aecf1577e4071d62b2a415484954833b362a66ea84feec1cbffac96e28f952c.jpg|image]]


FIGURE 9.20 Convergence of $\sum a_{n}x^{n}$ at $x = c$ implies absolute convergence on the interval $-|c| < x < |c|$ ; divergence at $x = d$ implies divergence for $|x| > |d|$ . The corollary to Theorem 18 asserts the existence of a radius of convergence $R \geq 0$ . For $|x| < R$ the series converges absolutely, and for $|x| > R$ it diverges. 

$$
\left| a _ {n} \right| <   \frac {1}{\left| c \right| ^ {n}} \quad \text { for } n > N.\tag{5}
$$

Now take any $x$ such that $|x| < |c|$ , so that $|x| / |c| < 1$ . Multiplying both sides of Equation (5) by $|x|^n$ gives 

$$
\left| a _ {n} \right| | x | ^ {n} <   \frac {| x | ^ {n}}{| c | ^ {n}} \quad \text {   for   } n > N.
$$

Since $|x / c| < 1$ , it follows that the geometric series $\sum_{n=0}^{\infty}|x / c|^n$ converges. By the Direct Comparison Test (Theorem 10), the series $\sum_{n=0}^{\infty}|a_n||x^n|$ converges, so the original power series $\sum_{n=0}^{\infty}a_n x^n$ converges absolutely for $-|c| < x < |c|$ , as claimed by the theorem. (See Figure 9.20.) 

Now suppose that the series $\sum_{n=0}^{\infty} a_n x^n$ diverges at $x = d$ . If $x$ is a number with $|x| > |d|$ and the series converges at $x$ , then the first half of the theorem shows that the series also converges at $d$ , contrary to our assumption. So the series diverges for all $x$ with $|x| > |d|$ . 

To simplify the notation, Theorem 18 deals with the convergence of series of the form $\sum a_{n}x^{n}$ . For series of the form $\sum a_{n}(x - a)^{n}$ , we can replace $x - a$ by $t$ and apply the results to the series $\sum a_{n}t^{n}$ . 

## The Radius of Convergence of a Power Series

The theorem we have just proved and the examples we have studied lead to the conclusion that a power series $\sum c_{n}(x-a)^{n}$ behaves in one of three possible ways. It might converge only at x = a, or converge everywhere, or converge on some interval of radius R centered at x = a. We prove this as a corollary to Theorem 18. When we also consider the convergence at the endpoints of an interval, we see that there are six different possibilities, shown in Figure 9.21. 

![[17ab0d0d04c52c829f6b6a663f24753ba06dd4ba146957aeaddd4bf1260e8f13.jpg|image]]



FIGURE 9.21 The six possibilities for an interval of convergence.


## Corollary to Theorem 18

The convergence of the series $\sum c_{n}(x - a)^{n}$ is described by one of the following three cases: 

1. There is a positive number $R$ such that the series diverges for $x$ with $|x - a| > R$ but converges absolutely for $x$ with $|x - a| < R$ . The series may or may not converge at either of the endpoints $x = a - R$ and $x = a + R$ . 

2. The series converges absolutely for every $x(R = \infty)$ . 

3. The series converges at x = a and diverges elsewhere (R = 0). 

Proof We first consider the case where a = 0, so that we have a power series $\sum_{n=0}^{\infty} c_{n} x^{n}$ centered at 0. If the series converges everywhere we are in Case 2. If it converges only at x = 0 then we are in Case 3. Otherwise there is a nonzero number d such that $\sum_{n=0}^{\infty} c_{n} d^{n}$ diverges. Let S be the set of values of x for which $\sum_{n=0}^{\infty} c_{n} x^{n}$ converges. The set S does not include any x with $|x| > |d|$ , since Theorem 18 implies the series diverges at all such values. So the set S is bounded. By the Completeness Property of the Real Numbers (Appendix A.9) S has a least upper bound R. (This is the smallest number with the property that all elements of S are less than or equal to R.) Since we are not in Case 3, the series converges at some number $b \neq 0$ and, by Theorem 18, also on the open interval $(-|b|, |b|)$ . Therefore, R > 0. 

If $|x| < R$ then there is a number c in S with $|x| < c < R$ , since otherwise R would not be the least upper bound for S. The series converges at c since $c \in S$ , so by Theorem 18 the series converges absolutely at x. 

Now suppose $|x| > R$ . If the series converges at x, then Theorem 18 implies it converges absolutely on the open interval $(-|x|, |x|)$ , so that S contains this interval. Since R is an upper bound for S, it follows that $|x| \leq R$ , which is a contradiction. So if $|x| > R$ , then the series diverges. This proves the theorem for power series centered at a = 0. 

For a power series centered at an arbitrary point $x = a$ , set $t = x - a$ and repeat the argument above, replacing $x$ with $t$ . Since $t = 0$ when $x = a$ , convergence of the series $\sum_{n=0}^{\infty} |c_n t^n|$ on a radius $R$ open interval centered at $t = 0$ corresponds to convergence of the series $\sum_{n=0}^{\infty} |c_n (x - a)^n|$ on a radius $R$ open interval centered at $x = a$ . 

R is called the radius of convergence of the power series, and the interval of radius R centered at x = a is called the interval of convergence. The interval of convergence may be open, closed, or half-open, depending on the particular series. At points x with $|x - a| < R$ , the series converges absolutely. If the series converges for all values of x, we say its radius of convergence is infinite. If it converges only at x = a, we say its radius of convergence is zero. 

## How to Test a Power Series for Convergence

1. Use the Ratio Test or the Root Test to find the largest open interval where the series converges absolutely, 

$$
| x - a | <   R \quad \text {or} \quad a - R <   x <   a + R.
$$

2. If $R$ is finite, test for convergence or divergence at each endpoint, as in Examples 3a and b. 

3. If $R$ is finite, the series diverges for $|x - a| > R$ . 

## Operations on Power Series

On the intersection of their intervals of convergence, two power series can be added and subtracted term by term just like series of constants (Theorem 8). They can be multiplied just as we multiply polynomials, but we often limit the computation of the product to the first few terms, which are the most important. The following result gives a formula for the coefficients in the product, but we omit the proof. (Power series can also be divided in a way similar to division of polynomials, but we do not give a formula for the general coefficient here.) 

## THEOREM 19—Series Multiplication for Power Series

If $A(x) = \sum_{n=0}^{\infty} a_n x^n$ and $B(x) = \sum_{n=0}^{\infty} b_n x^n$ converge absolutely for $|x| < R$ , and 

$$
c _ {n} = a _ {0} b _ {n} + a _ {1} b _ {n - 1} + a _ {2} b _ {n - 2} + \dots + a _ {n - 1} b _ {1} + a _ {n} b _ {0} = \sum_ {k = 0} ^ {n} a _ {k} b _ {n - k},
$$

then $\sum_{n=0}^{\infty} c_n x^n$ converges absolutely to $A(x)B(x)$ for $|x| < R$ : 

$$
\left(\sum_ {n = 0} ^ {\infty} a _ {n} x ^ {n}\right) \left(\sum_ {n = 0} ^ {\infty} b _ {n} x ^ {n}\right) = \sum_ {n = 0} ^ {\infty} c _ {n} x ^ {n}.
$$

Finding the general coefficient $c_{n}$ in the product of two power series can be tedious, and the term may be unwieldy. The following computation provides an illustration of a product where we find the first few terms by multiplying the terms of the second series by each term of the first series: 

$$
\begin{array}{l} \left(\sum_ {n = 0} ^ {\infty} x ^ {n}\right) \cdot \left(\sum_ {n = 0} ^ {\infty} (- 1) ^ {n} \frac {x ^ {n + 1}}{n + 1}\right) \\ = (1 + x + x ^ {2} + \dots) \Big (x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots \Big) \quad \text { Multiply   second   series } \\ = \underbrace {\left(x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \cdots\right)} _ {\text { by   1 }} + \underbrace {\left(x ^ {2} - \frac {x ^ {3}}{2} + \frac {x ^ {4}}{3} - \cdots\right)} _ {\text { by   x }} + \underbrace {\left(x ^ {3} - \frac {x ^ {4}}{2} + \frac {x ^ {5}}{3} - \cdots\right)} _ {\text { by   x } ^ {2}} + \dots \\ = x + \frac {x ^ {2}}{2} + \frac {5 x ^ {3}}{6} + \dots . \quad \text { and   gather   the   first   three   powers. } \end{array}
$$

We can also substitute a function $f(x)$ for x in a convergent power series. 

THEOREM 20 If $\sum_{n=0}^{\infty} a_n x^n$ converges absolutely for $|x| < R$ , and $f$ is a continuous function, then $\sum_{n=0}^{\infty} a_n (f(x))^n$ converges absolutely on the set of points $x$ that satisfy $|f(x)| < R$ . 

For example, since $1/(1-x)=\sum_{n=0}^{\infty}x^{n}$ converges absolutely for $|x|<1$ , it follows from Theorem 20 that $1/(1-4x^{2})=\sum_{n=0}^{\infty}(4x^{2})^{n}$ converges absolutely when x satisfies $|4x^{2}|<1$ , or, equivalently, when $|x|<1/2$ . 

Theorem 21 says that a power series can be differentiated term by term at each interior point of its interval of convergence. A proof of a restricted case of the theorem is outlined in Exercise 66. 

## THEOREM 21 — Term-by-Term Differentiation

If $\sum c_{n}(x - a)^{n}$ has radius of convergence $R > 0$ , it defines a function 

$$
f (x) = \sum_ {n = 0} ^ {\infty} c _ {n} (x - a) ^ {n} \quad \text {   on   the   interval   } \quad a - R <   x <   a + R.
$$

This function f has derivatives of all orders inside the interval, and we obtain the derivatives by differentiating the original series term by term: 

$$
f ^ {\prime} (x) = \sum_ {n = 1} ^ {\infty} n c _ {n} (x - a) ^ {n - 1},
$$

$$
f ^ {\prime \prime} (x) = \sum_ {n = 2} ^ {\infty} n (n - 1) c _ {n} (x - a) ^ {n - 2},
$$

and so on. Each of these derived series converges at every point of the interval $a - R < x < a + R$ . 

## **EXAMPLE 4** Find series for $f'(x)$ and $f''(x)$ if

$$
\begin{array}{l} f (x) = \frac {1}{1 - x} = 1 + x + x ^ {2} + x ^ {3} + x ^ {4} + \dots + x ^ {n} + \dots \\ = \sum_ {n = 0} ^ {\infty} x ^ {n}, \quad - 1 <   x <   1. \end{array}
$$

**Solution** We differentiate the power series on the right term by term: 

$$
\begin{array}{l} f ^ {\prime} (x) = \frac {1}{(1 - x) ^ {2}} = 1 + 2 x + 3 x ^ {2} + 4 x ^ {3} + \dots + n x ^ {n - 1} + \dots \\ \qquad = \sum_ {n = 1} ^ {\infty} n x ^ {n - 1}, \qquad - 1 <   x <   1; \\ f ^ {\prime \prime} (x) = \frac {2}{(1 - x) ^ {3}} = 2 + 6 x + 1 2 x ^ {2} + \dots + n (n - 1) x ^ {n - 2} + \dots \\ \qquad = \sum_ {n = 2} ^ {\infty} n (n - 1) x ^ {n - 2}, \qquad - 1 <   x <   1. \end{array}
$$

Caution Term-by-term differentiation might not work for series that are not power series. For example, the trigonometric series 

$$
\sum_ {n = 1} ^ {\infty} \frac {\sin (n ! x)}{n ^ {2}}
$$

converges for all x. But if we differentiate term by term, we get the series 

$$
\sum_ {n = 1} ^ {\infty} \frac {n ! \cos (n ! x)}{n ^ {2}},
$$

which diverges for all x. These are not power series since they are not sums of positive integer powers of x. 

It is also true that a power series can be integrated term by term throughout its interval of convergence. The proof is outlined in Exercise 67. 

THEOREM 22—Term-by-Term Integration
Suppose that $f(x) = \sum_{n=0}^{\infty} c_n (x - a)^n$ converges for $a - R < x < a + R$ (where R > 0). Then $\sum_{n=0}^{\infty} c_n \frac{(x - a)^{n+1}}{n + 1}$ converges for $a - R < x < a + R$ and $\int f(x) dx = \sum_{n=0}^{\infty} c_n \frac{(x - a)^{n+1}}{n + 1} + C$ for $a - R < x < a + R$ . 

## **EXAMPLE 5** Identify the function

$$
f (x) = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} x ^ {2 n + 1}}{2 n + 1} = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \dots , \quad - 1 \leq x \leq 1.
$$

**Solution** We differentiate the original series term by term and get 

$$
f ^ {\prime} (x) = 1 - x ^ {2} + x ^ {4} - x ^ {6} + \dots , \quad - 1 <   x <   1. \tag {Theorem21}
$$

This is a geometric series with first term 1 and ratio $-x^{2}$ , so 

$$
f ^ {\prime} (x) = \frac {1}{1 - (- x ^ {2})} = \frac {1}{1 + x ^ {2}}.
$$

We can now integrate $f'(x) = 1 / (1 + x^2)$ to get 

$$
\int f ^ {\prime} (x) d x = \int \frac {d x}{1 + x ^ {2}} = \arctan x + C.
$$

The Number $\pi$ as a Series 

The series for $f(x)$ is zero when $x = 0$ , so $C = 0$ . Hence 

$$
\frac {\pi}{4} = \arctan 1 = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n}}{2 n + 1}
$$

$$
f (x) = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \frac {x ^ {7}}{7} + \dots = \arctan x, \quad - 1 <   x <   1.\tag{6}
$$

It can be shown that the series also converges to $\arctan x$ at the endpoints $x = \pm 1$ , but we omit the proof. 

Notice that the original series in Example 5 converges at both endpoints of the original interval of convergence, but Theorem 22 can guarantee only the convergence of the integrated series inside the interval. 

**EXAMPLE 6** The series 

$$
\frac {1}{1 + t} = 1 - t + t ^ {2} - t ^ {3} + \dots
$$

converges on the open interval -1 < t < 1. Therefore, 

$$
\begin{array}{r l} \ln (1 + x) & = \int_ {0} ^ {x} \frac {1}{1 + t} d t = t - \frac {t ^ {2}}{2} + \frac {t ^ {3}}{3} - \frac {t ^ {4}}{4} + \dots \Big | _ {0} ^ {x} \\ & = x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \frac {x ^ {4}}{4} + \dots , \end{array} \tag {Theorem22}
$$

or 

Alternating Harmonic Series Sum 

$$
\ln (1 + x) = \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1} x ^ {n}}{n}, \quad - 1 <   x <   1.
$$

$\ln 2 = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$ 

It can also be shown that the series converges at x = 1 to the number ln 2, but that was not guaranteed by the theorem. A proof of this is outlined in Exercise 63. 

## EXERCISES 9.7

## Intervals of Convergence

In Exercises 1–36, (a) find the series' radius and interval of convergence. For what values of x does the series converge (b) absolutely, (c) conditionally? 

7. $\sum_{n=0}^{\infty} \frac{nx^n}{n+2}$ 

8. $\sum_{n=1}^{\infty} \frac{(-1)^n (x + 2)^n}{n}$ 

1. $\sum_{n = 0}^{\infty}x^{n}$ 

2. $\sum_{n=0}^{\infty}(x + 5)^{n}$ 

10. $\sum_{n=1}^{\infty} \frac{(x - 1)^n}{\sqrt{n}}$ 

9. $\sum_{n=1}^{\infty} \frac{x^n}{n\sqrt{n} 3^n}$ 

3. $\sum_{n=0}^{\infty} (-1)^{n}(4x + 1)^{n}$ 

12. $\sum_{n=0}^{\infty} \frac{3^n x^n}{n!}$ 

4. $\sum_{n=1}^{\infty} \frac{(3x - 2)^n}{n}$ 

11. $\sum_{n=0}^{\infty} \frac{(-1)^n x^n}{n!}$ 

5. $\sum_{n=0}^{\infty} \frac{(x - 2)^n}{10^n}$ 

14. $\sum_{n=1}^{\infty} \frac{(x-1)^n}{n^3 3^n}$ 

13. $\sum_{n=1}^{\infty} \frac{4^n x^{2n}}{n}$ 

6. $\sum_{n = 0}^{\infty}(2x)^{n}$ 

15. $\sum_{n=0}^{\infty} \frac{x^n}{\sqrt{n^2 + 3}}$ 

16. $\sum_{n=0}^{\infty} \frac{(-1)^n x^{n+1}}{\sqrt{n} + 3}$ 

17. $\sum_{n=0}^{\infty} \frac{n(x + 3)^n}{5^n}$ 

18. $\sum_{n=0}^{\infty} \frac{nx^n}{4^n (n^2 + 1)}$ 

19. $\sum_{n=0}^{\infty} \frac{\sqrt{n} x^n}{3^n}$ 

20. $\sum_{n=1}^{\infty} \sqrt[n]{n}(2x + 5)^n$ 

21. $\sum_{n=1}^{\infty}\left(2 + (-1)^{n}\right) \cdot (x + 1)^{n-1}$ 

22. $\sum_{n=1}^{\infty} \frac{(-1)^n 3^{2n}(x - 2)^n}{3n}$ 

23. $\sum_{n=1}^{\infty}\left(1 + \frac{1}{n}\right)^n x^n$ 

24. $\sum_{n=1}^{\infty} (\ln n) x^n$ 

25. $\sum_{n = 1}^{\infty}n^{n}x^{n}$ 

26. $\sum_{n=0}^{\infty} n! (x - 4)^n$ 

27. $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}(x + 2)^n}{n2^n}$ 

28. $\sum_{n=0}^{\infty} (-2)^n (n + 1)(x - 1)^n$ 

29. $\sum_{n=2}^{\infty} \frac{x^n}{n(\ln n)^2}$ Get the information you need about $\sum 1 / (n(\ln n)^2)$ from Section 9.3, Exercise 61. 

30. $\sum_{n=2}^{\infty} \frac{x^n}{n \ln n}$ Get the information you need about $\sum 1/(n \ln n)$ from Section 9.3, Exercise 60. 

31. $\sum_{n=1}^{\infty} \frac{(4x - 5)^{2n+1}}{n^{3/2}}$ 32. $\sum_{n=1}^{\infty} \frac{(3x + 1)^{n+1}}{2n + 2}$ 

33. $\sum_{n=1}^{\infty} \frac{1}{2 \cdot 4 \cdot 6 \cdots (2n)} x^n$ 34. $\sum_{n=1}^{\infty} \frac{3 \cdot 5 \cdot 7 \cdots (2n + 1)}{n^2 \cdot 2^n} x^{n+1}$ 

35. $\sum_{n=1}^{\infty}\frac{1+2+3+\cdots+n}{1^{2}+2^{2}+3^{2}+\cdots+n^{2}}x^{n}$ 

36. $\sum_{n=1}^{\infty}\left(\sqrt{n+1}-\sqrt{n}\right)(x-3)^{n}$ 

In Exercises 37–42, find the series' radius of convergence. 

37. $\sum_{n=1}^{\infty} \frac{n!}{3 \cdot 6 \cdot 9 \cdots 3n} x^n$ 

$$
\sum_ {n = 1} ^ {\infty} \left(\frac {2 \cdot 4 \cdot 6 \cdots (2 n)}{2 \cdot 5 \cdot 8 \cdots (3 n - 1)}\right) ^ {2} x ^ {n}
$$

39. $\sum_{n=1}^{\infty} \frac{(n!)^{2}}{2^{n}(2n)!} x^{n}$ 

40. $\sum_{n=1}^{\infty} \frac{n!x^n}{n^n}$ 

41. $\sum_{n=1}^{\infty} \frac{(n + a)!}{n!(n + b)!} x^n$ , where $a, b$ are positive integers 

42. $\sum_{n=1}^{\infty}\left(\frac{n}{n+1}\right)^{n^2}x^n$ 

(Hint: Apply the Root Test.) 

In Exercises 43–50, use Theorem 20 to find the series' interval of convergence and, within this interval, the sum of the series as a function of x. 

43. $\sum_{n = 0}^{\infty}3^{n}x^{n}$ 

44. $\sum_{n=0}^{\infty}(e^{x} - 4)^{n}$ 

45. $\sum_{n=0}^{\infty} \frac{(x - 1)^{2n}}{4^n}$ 

46. $\sum_{n=0}^{\infty} \frac{(x + 1)^{2n}}{9^n}$ 

47. $\sum_{n = 0}^{\infty}\left(\frac{\sqrt{x}}{2} -1\right)^n$ 

48. $\sum_{n=0}^{\infty} (\ln x)^n$ 

49. $\sum_{n = 0}^{\infty}\left(\frac{x^2 + 1}{3}\right)^n$ 

50. $\sum_{n=0}^{\infty}\left(\frac{x^{2}-1}{2}\right)^{n}$ 

Using the Geometric Series 

51. In Example 2 we represented the function $f(x) = 2/x$ as a power series about x = 2. Use a geometric series to represent $f(x)$ as a power series about x = 1, and find its interval of convergence. 

52. Use a geometric series to represent each of the given functions as a power series about $x = 0$ , and find their intervals of convergence.  
a. $f(x) = \frac{5}{3 - x}$ b. $g(x) = \frac{3}{x - 2}$ 

53. Represent the function $g(x)$ in Exercise 52 as a power series about $x = 5$ , and find the interval of convergence. 

54. a. Find the interval of convergence of the power series 

$$
\sum_ {n = 0} ^ {\infty} \frac {8}{4 ^ {n + 2}} x ^ {n}.
$$

b. Represent the power series in part (a) as a power series about $x = 3$ and identify the interval of convergence of the new series. (Later in the chapter you will understand why the new interval of convergence does not necessarily include all of the numbers in the original interval of convergence.) 

Theory and Examples 

55. For what values of $x$ does the series 

$$
1 - \frac {1}{2} (x - 3) + \frac {1}{4} (x - 3) ^ {2} + \dots + \left(- \frac {1}{2}\right) ^ {n} (x - 3) ^ {n} + \dots
$$

converge? What is its sum? What series do you get if you differentiate the given series term by term? For what values of x does the new series converge? What is its sum? 

56. If you integrate the series in Exercise 55 term by term, what new series do you get? For what values of x does the new series converge, and what is another name for its sum? 

57. The series 

$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \frac{x^{11}}{11!} + \cdots$ 

converges to $\sin x$ for all x. 

a. Find the first six terms of a series for $\cos x$ . For what values of $x$ should the series converge? 

b. By replacing $x$ by $2x$ in the series for $\sin x$ , find a series that converges to $\sin 2x$ for all $x$ . 

c. Using the result in part (a) and series multiplication, calculate the first six terms of a series for $2 \sin x \cos x$ . Compare your answer with the answer in part (b). 

58. The series 

$$
e ^ {x} = 1 + x + \frac {x ^ {2}}{2 !} + \frac {x ^ {3}}{3 !} + \frac {x ^ {4}}{4 !} + \frac {x ^ {5}}{5 !} + \dots
$$

converges to $e^x$ for all $x$ . 

a. Find a series for $(d / dx)e^x$ . Do you get the series for $e^x$ ? Explain your answer. 

b. Find a series for $\int e^x dx$ . Do you get the series for $e^x$ ? Explain your answer. 

c. Replace x by -x in the series for $e^{x}$ to find a series that converges to $e^{-x}$ for all x. Then multiply the series for $e^{x}$ and $e^{-x}$ to find the first six terms of a series for $e^{-x} \cdot e^{x}$ . 

59. The series 

$$
\tan x = x + \frac {x ^ {3}}{3} + \frac {2}{1 5} x ^ {5} + \frac {1 7}{3 1 5} x ^ {7} + \frac {6 2}{2 8 3 5} x ^ {9} + \dots
$$

converges to $\tan x$ for $-\pi/2 < x < \pi/2$ . 

a. Find the first five terms of the series for $\ln |\sec x|$ . For what values of $x$ should the series converge? 

b. Find the first five terms of the series for $\sec^{2}x$ . For what values of x should this series converge? 

c. Check your result in part (b) by squaring the series given for sec x in Exercise 60. 

60. The series 

$$
\sec x = 1 + \frac {x ^ {2}}{2} + \frac {5}{2 4} x ^ {4} + \frac {6 1}{7 2 0} x ^ {6} + \frac {2 7 7}{8 0 6 4} x ^ {8} + \dots
$$

converges to $\sec x$ for $-\pi/2 < x < \pi/2$ . 

a. Find the first five terms of a power series for the function $\ln|\sec x + \tan x|$ . For what values of x should the series converge? 

b. Find the first four terms of a series for $\sec x \tan x$ . For what values of $x$ should the series converge? 

c. Check your result in part (b) by multiplying the series for $\sec x$ by the series given for $\tan x$ in Exercise 59. 

61. Uniqueness of convergent power series 

a. Show that if two power series $\sum_{n=0}^{\infty} a_n x^n$ and $\sum_{n=0}^{\infty} b_n x^n$ are convergent and equal for all values of $x$ in an open interval $(-c, c)$ , then $a_n = b_n$ for every $n$ . (Hint: Let $f(x) = \sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} b_n x^n$ . Differentiate term by term to show that $a_n$ and $b_n$ both equal $f^{(n)}(0)/(n!)$ .) 

b. Show that if $\sum_{n=0}^{\infty} a_n x^n = 0$ for all $x$ in an open interval $(-c, c)$ , then $a_n = 0$ for every $n$ . 

62. The sum of the series $\sum_{n=0}^{\infty}\left(n^{2}/2^{n}\right)$ . To find the sum of this series, express $1/(1-x)$ as a geometric series, differentiate both sides of the resulting equation with respect to $x$ , multiply both sides of the result by $x$ , differentiate again, multiply by $x$ again, and set $x$ equal to $1/2$ . What do you get? 

63. The sum of the alternating harmonic series This exercise will show that 

$$
\sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n + 1}}{n} = \ln 2.
$$

Let $h_n$ be the $n$ th partial sum of the harmonic series, and let $s_n$ be the $n$ th partial sum of the alternating harmonic series. 

a. Use mathematical induction or algebra to show that 

$$
s _ {2 n} = h _ {2 n} - h _ {n}.
$$

$$
\lim _ {n \to \infty} (h _ {n} - \ln n) = \gamma
$$

b. Use the results in Exercise 63 in Section 9.3 to conclude that 

and 

$$
\lim _ {n \to \infty} (h _ {2 n} - \ln 2 n) = \gamma ,
$$

where $\gamma$ is Euler's constant. 

c. Use these facts to show that 

$$
\sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n + 1}}{n} = \lim _ {n \rightarrow \infty} s _ {2 n} = \ln 2.
$$

64. Assume that the series $\sum a_{n}x^{n}$ converges for x = 4 and diverges for x = 7. Answer true (T), false (F), or not enough information given (N) for the following statements about the series. 

a. Converges absolutely for $x = -4$ 

b. Diverges for $x = 5$ 

c. Converges absolutely for $x = -8.5$ 

d. Converges for $x = -2$ 

e. Diverges for $x = 8$ 

f. Diverges for $x = -6$ 

g. Converges absolutely for $x = 0$ 

h. Converges absolutely for $x = -7.1$ 

65. Assume that the series $\sum a_{n}(x - 2)^{n}$ converges for $x = -1$ and diverges for $x = 6$ . Answer true (T), false (F), or not enough information given (N) for the following statements about the series. 

a. Converges absolutely for $x = 1$ 

b. Diverges for $x = -6$ 

c. Diverges for $x = 2$ 

d. Converges for $x = 0$ 

e. Converges absolutely for $x = 5$ 

f. Diverges for $x = 4.9$ 

g. Diverges for $x = 5.1$ 

h. Converges absolutely for $x = 4$ 

66. Proof of a special case of Theorem 21 Assume that $a = 0$ in Theorem 21, and assume further that $L = \lim_{n\to \infty}\frac{|c_{n + 1}|}{|c_n|}$ exists. If $L\neq 0$ , then set $R = 1 / L$ , while if $L = 0$ , then set $R = \infty$ . The Ratio Test implies that $f(x) = \sum_{n = 0}^{\infty}c_nx^n$ converges for $-R < x < R$ . Let $g(x) = \sum_{n = 1}^{\infty}nc_nx^{n - 1}$ . This exercise will prove that $f$ is differentiable and that $f^{\prime}(x) = g(x)$ , that is $\lim_{h\to 0}\frac{f(x + h) - f(x)}{h} = g(x)$ for any $x$ with $-R < x < R$ . Throughout parts (a)-(h), assume that $-R < x < R$ and that $h$ is small enough that $-R < x + h < R$ . 

a. Use the Ratio Test to prove that the series defining $g(x)$ converges. 

b. Apply the Mean Value Theorem to the function $p_{n}(x) = x^{n}$ to show that 

$$
\frac {(x + h) ^ {n} - x ^ {n}}{h} = n \left(t _ {n}\right) ^ {n - 1}
$$

for some $t_n$ between $x$ and $x + h$ for $n = 1,2,3,\ldots$ . 

c. Show 

$$
g (x) - \frac {f (x + h) - f (x)}{h} = \sum_ {n = 2} ^ {\infty} n c _ {n} \left(x ^ {n - 1} - \left(t _ {n}\right) ^ {n - 1}\right).
$$

d. Apply the Mean Value Theorem to the function 

$p_{n - 1}(x) = x^{n - 1}$ to show that 

$$
\frac {x ^ {n - 1} - (t _ {n}) ^ {n - 1}}{x - t _ {n}} = (n - 1) (d _ {n - 1}) ^ {n - 2}
$$

for some $d_{n - 1}$ between $x$ and $t_n$ for $n = 2,3,4,\ldots$ . 

e. Explain why $|x - t_{n}| < |h|$ and why 

$$
\left| d _ {n - 1} \right| \leq \alpha = \max \{| x |, | x + h | \}.
$$

f. Show that 

$$
\left| g (x) - \frac {f (x + h) - f (x)}{h} \right| \leq | h | \sum_ {n = 2} ^ {\infty} | n (n - 1) c _ {n} \alpha^ {n - 2} |.
$$

Hint: Multiply each term $nc_{n}(x^{n - 1} - (t_n)^{n - 1})$ in part (c) by $\frac{x - t_n}{x - t_n}$ . 

g. Show that $\sum_{n=2}^{\infty} n(n-1)c_n \alpha^{n-2}$ converges. 

h. Let $h \to 0$ in part (f) to conclude that 

$$
\lim _ {h \rightarrow 0} \frac {f (x + h) - f (x)}{h} = g (x).
$$

67. Proof of Theorem 22 Assume that $a = 0$ in Theorem 22 and assume that $f(x) = \sum_{n=0}^{\infty} c_n x^n$ converges for $-R < x < R$ . Let $g(x) = \sum_{n=0}^{\infty} \frac{c_n}{n+1} x^{n+1}$ . This exercise will prove that $g'(x) = f(x)$ . 

a. Prove that the series defining $g(x)$ converges for -R < x < R.
b. Use Theorem 21 to show that $g'(x) = f(x)$ , that is, 

$$
\int f (x) d x = g (x) + C.
$$

## 9.8 Taylor and Maclaurin Series

We have seen how geometric series can be used to generate a power series for functions such as $f(x) = 1/(1 - x)$ or $g(x) = 3/(x - 2)$ . Now we expand our capability to represent a function with a power series. This section shows how functions that are infinitely differentiable generate power series called Taylor series. In many cases, these series provide useful polynomial approximations of the original functions. Because approximation by polynomials is extremely useful to both mathematicians and scientists, Taylor series are an important application of the theory of infinite series. 

## Series Representations

We know from Theorem 21 that within its interval of convergence I, the sum of a power series is a continuous function with derivatives of all orders. But what about the other way around? If a function $f(x)$ has derivatives of all orders on an interval, can it be expressed as a power series on at least part of that interval? And if it can, what are its coefficients? 

We can answer the last question readily if we assume that $f(x)$ is the sum of a power series about x = a, 

$$
\begin{array}{l} f (x) = \sum_ {n = 0} ^ {\infty} a _ {n} (x - a) ^ {n} \\ \qquad = a _ {0} + a _ {1} (x - a) + a _ {2} (x - a) ^ {2} + \dots + a _ {n} (x - a) ^ {n} + \dots \end{array}
$$

with a positive radius of convergence. By repeated term-by-term differentiation within the interval of convergence I, we obtain 

$$
\begin{array}{l} f ^ {\prime} (x) = a _ {1} + 2 a _ {2} (x - a) + 3 a _ {3} (x - a) ^ {2} + \dots + n a _ {n} (x - a) ^ {n - 1} + \dots , \\ f ^ {\prime \prime} (x) = 1 \cdot 2 a _ {2} + 2 \cdot 3 a _ {3} (x - a) + 3 \cdot 4 a _ {4} (x - a) ^ {2} + \dots , \\ f ^ {\prime \prime \prime} (x) = 1 \cdot 2 \cdot 3 a _ {3} + 2 \cdot 3 \cdot 4 a _ {4} (x - a) + 3 \cdot 4 \cdot 5 a _ {5} (x - a) ^ {2} + \dots , \end{array}
$$

with the $n$ th derivative being 

$f^{(n)}(x) = n!a_{n} + \text{a sum of terms with } (x - a)$ as a factor. 

Since these equations all hold at $x = a$ , we have 

$$
f ^ {\prime} (a) = a _ {1}, \quad f ^ {\prime \prime} (a) = 1 \cdot 2 a _ {2}, \quad f ^ {\prime \prime \prime} (a) = 1 \cdot 2 \cdot 3 a _ {3},
$$

and, in general, 

$$
f ^ {(n)} (a) = n! a _ {n}.
$$

## HISTORICAL BIOGRAPHIES

Brook Taylor (1685–1731) 

Taylor was an ingenious and productive British mathematician. Taylor published his book on calculus Methodus incrementorum directa et inversa in 1715 and his book on geometry Linear Perspective in the same year. To know more, visit the companion Website. 

## Colin Maclaurin

## (1698-1746)

Maclaurin was elected a fellow of the Royal Society of London when he was only 21 years old. His Treatise of Fluxions (1742) has been described as the earliest logical and systematic publication of Newton's methods. 

To know more, visit the companion Website. 

These formulas reveal a pattern in the coefficients of any power series $\sum_{n=0}^{\infty}a_{n}(x-a)^{n}$ that converges to the values of f on I (“represents f on I”). If there is such a series (still an open question), then there is only one such series, and its nth coefficient is 

$$
a _ {n} = \frac {f ^ {(n)} (a)}{n !}.
$$

If $f$ has a series representation with the center at $a$ , then the series must be 

$$
\begin{array}{c} f (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} \\ + \dots + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n} + \dots . \end{array}\tag{1}
$$

But if we start with an arbitrary function f that is infinitely differentiable on an interval containing x = a and use it to generate the series in Equation (1), does the series converge to $f(x)$ at each x in the interval of convergence? The answer is maybe—for some functions it will, but for other functions it will not (as we will see in Example 4). 

## Taylor and Maclaurin Series

The series on the right-hand side of Equation (1) is the most important and useful series we will study in this chapter. 

> ***DEFINITIONS*** Let f be a function with derivatives of all orders throughout some interval containing a as an interior point. Then the Taylor series generated by f at x = a is 
>
> $$
> \begin{array}{r l} \sum_ {k = 0} ^ {\infty} \frac {f ^ {(k)} (a)}{k !} (x - a) ^ {k} & = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} \\ & \quad + \dots + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n} + \dots . \end{array}
> $$
>
> The Maclaurin series of f is the Taylor series generated by f at x = 0, or 
>
> $$
> \sum_ {k = 0} ^ {\infty} \frac {f ^ {(k)} (0)}{k !} x ^ {k} = f (0) + f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2 !} x ^ {2} + \dots + \frac {f ^ {(n)} (0)}{n !} x ^ {n} + \dots .
> $$
>
The Maclaurin series generated by f is often just called the Taylor series of f. 

**EXAMPLE 1** Find the Taylor series generated by $f(x) = 1/x$ at a = 2. Where, if anywhere, does the series converge to 1/x? 

**Solution** We need to find $f(2)$ , $f'(2)$ , $f''(2)$ , .... Taking derivatives, we get 

$$
f (x) = x ^ {- 1}, \quad f ^ {\prime} (x) = - x ^ {- 2}, \quad f ^ {\prime \prime} (x) = 2! x ^ {- 3}, \dots , f ^ {(n)} (x) = (- 1) ^ {n} n! x ^ {- (n + 1)},
$$

so that 

$$
f (2) = 2 ^ {- 1} = \frac {1}{2}, f ^ {\prime} (2) = - \frac {1}{2 ^ {2}}, \frac {f ^ {\prime \prime} (2)}{2 !} = 2 ^ {- 3} = \frac {1}{2 ^ {3}}, \dots , \frac {f ^ {(n)} (2)}{n !} = \frac {(- 1) ^ {n}}{2 ^ {n + 1}}.
$$

The Taylor series is 

$$
\begin{array}{l} f (2) + f ^ {\prime} (2) (x - 2) - \frac {f ^ {\prime \prime} (2)}{2 !} (x - 2) ^ {2} + \dots + \frac {f ^ {(n)} (2)}{n !} (x - 2) ^ {n} + \dots \\ = \frac {1}{2} - \frac {(x - 2)}{2 ^ {2}} + \frac {(x - 2) ^ {2}}{2 ^ {3}} - \dots + (- 1) ^ {n} \frac {(x - 2) ^ {n}}{2 ^ {n + 1}} + \dots . \end{array}
$$

![[eee4b960b5657c28d9843d352bd4958fa05cf81dddfcb965a4598ad9b41205e2.jpg|image]]



FIGURE 9.22 The graph of $f ( x ) = e ^ { x }$ and its Taylor polynomials


$$
\begin{array}{l} P _ {1} (x) = 1 + x \\ P _ {2} (x) = 1 + x + (x ^ {2} / 2!) \\ P _ {3} (x) = 1 + x + (x ^ {2} / 2!) + (x ^ {3} / 3!). \end{array}
$$

Notice the very close agreement near the center $x = 0$ (Example 2). 

This is a geometric series with first term $1 / 2$ and ratio $r = - ( x - 2 ) / 2$ . It converges absolutely for $| x - 2 | < 2$ and its sum is 

$$
\frac {1 / 2}{1 + (x - 2) / 2} = \frac {1}{2 + (x - 2)} = \frac {1}{x}.
$$

In this example the Taylor series generated by $f ( x ) = 1 / x$ at $a = 2$ converges to $1 / x$ for $| x - 2 | < 2 , \mathrm { o r } 0 < x < 4$ ■ 

## Taylor Polynomials

The linearization of a differentiable function $f$ at a point a is the polynomial of degree at most 1 given by 

$$
P _ {1} (x) = f (a) + f ^ {\prime} (a) (x - a).
$$

In Section 3.11 we used this linearization to approximate $f ( x )$ at values of x near a. If f has derivatives of higher order at $^ { a , }$ then it has higher-order polynomial approximations as well, one for each available derivative. These polynomials are called the Taylor polynomials of $f .$ 

> ***DEFINITION*** Let $f$ be a function with derivatives of order k for $k = 1 , 2 , \ldots , N$ in some interval containing a as an interior point. Then, for any integer n from 0 through $N ,$ the Taylor polynomial of order n generated by $f$ at $x \ = \ a$ is the polynomial 
>
> $$
> \begin{array}{l} P _ {n} (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots \\ \qquad + \frac {f ^ {(k)} (a)}{k !} (x - a) ^ {k} + \dots + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n}. \end{array}
> $$
>
We speak of a Taylor polynomial of order n rather than degree n because $f ^ { ( n ) } ( a )$ may be zero. The first two Taylor polynomials of $f ( x ) = \cos x { \mathrm { ~ a t ~ } } x = 0$ , for example, are $P _ { 0 } ( x ) = 1$ and $P _ { 1 } ( x ) = 1$ . The first-order Taylor polynomial has degree 0, not 1. 

Just as the linearization of $\cdot f$ at $x \ = \ a$ provides the best linear approximation of $f$ in the neighborhood of $^ { a , }$ the higher-order Taylor polynomials provide the “best” polynomial approximations of their respective degrees. (See Exercise 51.) 

**EXAMPLE 2** Find the Taylor series and the Taylor polynomials generated by $f ( x ) = e ^ { x } \operatorname { a t } x = 0$ 

**Solution** Since $f ^ { ( n ) } ( x ) = e ^ { x }$ and $f ^ { ( n ) } ( 0 ) = 1$ for every $n = 0 , 1 , 2 , \ldots$ , the Taylor series generated by $f \operatorname { a t } x = 0$ (see Figure 9.22) is 

$$
\begin{array}{r l} f (0) + f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2 !} x ^ {2} + \dots + \frac {f ^ {(n)} (0)}{n !} x ^ {n} + \dots \\ & = 1 + x + \frac {x ^ {2}}{2} + \dots + \frac {x ^ {n}}{n !} + \dots \\ & = \sum_ {k = 0} ^ {\infty} \frac {x ^ {k}}{k !}. \end{array}
$$

This is also the Maclaurin series for $e ^ { x } .$ In the next section we will see that this series converges to $e ^ { x }$ at every x. 

The Taylor polynomial of order n at $x = 0$ is 

$$
P _ {n} (x) = 1 + x + \frac {x ^ {2}}{2} + \dots + \frac {x ^ {n}}{n !}.
$$

**EXAMPLE 3** Find the Taylor series and Taylor polynomials generated by $f ( x ) = \cos x \mathrm { a t } x = 0$ 

**Solution** The cosine and its derivatives are 

$$
\begin{array}{c c c} f (x) = & \cos x, & f ^ {\prime} (x) = - \sin x, \\ f ^ {\prime \prime} (x) = & - \cos x, & f ^ {(3)} (x) = \sin x, \\ \vdots & & \vdots \end{array}
$$

$$
f ^ {(2 n)} (x) = (- 1) ^ {n} \cos x, \quad f ^ {(2 n + 1)} (x) = (- 1) ^ {n + 1} \sin x.
$$

$\mathbf { A } \mathbf { t } x = 0$ , the cosines are 1 and the sines are $0 ,$ so 

$$
f ^ {(2 n)} (0) = (- 1) ^ {n}, \quad f ^ {(2 n + 1)} (0) = 0.
$$

The Taylor series generated by f at 0 is 

$$
\begin{array}{l} f (0) + f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2 !} x ^ {2} + \frac {f ^ {\prime \prime \prime} (0)}{3 !} x ^ {3} + \dots + \frac {f ^ {(n)} (0)}{n !} x ^ {n} + \dots \\ = 1 + 0 \cdot x - \frac {x ^ {2}}{2 !} + 0 \cdot x ^ {3} + \frac {x ^ {4}}{4 !} + \dots + (- 1) ^ {n} \frac {x ^ {2 n}}{(2 n) !} + \dots \\ = \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k} x ^ {2 k}}{(2 k) !}. \end{array}
$$

This is also the Maclaurin series for cos x. Notice that only even powers of x occur in the Taylor series generated by the cosine function, which is consistent with the fact that it is an even function. In Section 9.9, we will see that the series converges to cos x at every x. 

Because $f ^ { ( 2 n + 1 ) } ( 0 ) = 0$ ,  the Taylor polynomials of orders 2n and $2 n + 1$ are identical: 

$$
P _ {2 n} (x) = P _ {2 n + 1} (x) = 1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \dots + (- 1) ^ {n} \frac {x ^ {2 n}}{(2 n) !}.
$$

Figure 9.23 shows how well these polynomials approximate $f ( x ) = \cos x$ near $x = 0$ Only the right-hand portions of the graphs are given because the graphs are symmetricabout the y-axis. 一

![[5fea6f57fdbccb11af4e8d25233d94acc0b0a59df54282ae9c0a702726c08224.jpg|image]]



FIGURE 9.23 The polynomials


$$
P _ {2 n} (x) = \sum_ {k = 0} ^ {n} \frac {(- 1) ^ {k} x ^ {2 k}}{(2 k) !}
$$

converge to cos x as $n  \infty .$ . We can deduce the behavior of cos x arbitrarily far away solely from knowing the values of the cosine and its derivatives at $x = 0$ (Example 3). 

**EXAMPLE 4** By using mathematical induction (see Exercise 51), it can be shown that 

$$
f (x) = \left\{ \begin{array}{l l} 0, & x = 0 \\ e ^ {- 1 / x ^ {2}}, & x \neq 0 \end{array} \right.
$$

![[ed697e451debf1105a50dd846696fe15b07be05575b33a7b6d68825b02d845b1.jpg|image]]


(Figure 9.24) has derivatives of all orders at $x = 0$ and that $f ^ { ( n ) } ( 0 ) = 0$ for all n. This means that the Taylor series generated b $f \operatorname { a t } x = 0$ is 

$$
\begin{array}{r l} f (0) + f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2 !} x ^ {2} + \dots + \frac {f ^ {(n)} (0)}{n !} x ^ {n} + \dots \\ & = 0 + 0 \cdot x + 0 \cdot x ^ {2} + \dots + 0 \cdot x ^ {n} + \dots \\ & = 0 + 0 + \dots + 0 + \dots . \end{array}
$$

FIGURE 9.24 The graph of the continuous extension of $y = e ^ { - 1 / x ^ { 2 } }$ is so flat at the origin that all of its derivatives there are zero (Example 4). Therefore, its Taylor series, which is zero everywhere, is not the function itself. 

The series converges for every x (its sum is 0) but converges to $f ( x )$ only at $x = 0$ . That is, the Taylor series generated by $f ( x )$ in this example is not equal to the function f( ) overx the entire interval of convergence. 

Two questions still remain. 

1. For what values of x can we normally expect a Taylor series to converge to its generating function? 

2. How accurately do a function’s Taylor polynomials approximate the function on a given interval? 

The answers are provided by a theorem of Taylor in the next section. 

## EXERCISES 9.8

## Finding Taylor Polynomials

In Exercises 1–10, find the Taylor polynomials of orders 0, 1, 2, and 3 generated by f at a. 

1. $f ( x ) = e ^ { 2 x } , ~ a = 0$ 

2. $\cdot \ f ( x ) = \sin x , \ a = 0$ 

3. $f ( x ) = \ln x , \ a = 1$ 

4. f ( ) ln 1 , 0 x x a = + = ( ) 

5. $f ( x ) = 1 / x , ~ a = 2$ 

6. $f ( x ) = 1 / ( x + 2 ) , a = 0$ 

7. $f ( x ) = \sin x , ~ a = \pi / 4$ 

8. $f ( x ) = \tan x , ~ a = \pi / 4$ 

9. $f ( x ) = { \sqrt { x } } , a = 4$ 

10. $f ( x ) = { \sqrt { 1 - x } } , a = 0$ 

## Finding Taylor Series at $x = 0$ (Maclaurin Series)

12. $x e ^ { x }$ 

Find the Maclaurin series for the functions in Exercises 11–24. 

11. $e ^ { - x }$ 

14. $\frac { 2 + x } { 1 - x }$ 

15. $\sin 3 x$ 

13. $\frac { 1 } { 1 + x }$ 

16. $\mathrm { s i n } { \frac { x } { 2 } }$ 

17. $7 \cos \left( - x \right)$ 

18. $5 \cos \pi x$ 

19. $\cosh x = { \frac { e ^ { x } + e ^ { - x } } { 2 } }$ 

20. sinh $x = { \frac { e ^ { x } - e ^ { - x } } { 2 } }$ 

21. $x ^ { 4 } - 2 x ^ { 3 } - 5 x + 4$ 

22. $\frac { x ^ { 2 } } { x + 1 }$ 

23. x sin x 

24. $( x + 1 ) \ln ( x + 1 )$ 

## Finding Taylor and Maclaurin Series

In Exercises 25–34, find the Taylor series generated by $f \operatorname { a t } x = a .$ 

25. $f ( x ) = x ^ { 3 } - 2 x + 4 , a = 2$ 

26. $f ( x ) = 2 x ^ { 3 } + x ^ { 2 } + 3 x - 8 , a = 1$ 

27. $f ( x ) = x ^ { 4 } + x ^ { 2 } + 1 , a = - 2$ 

28. $f ( x ) = 3 x ^ { 5 } - x ^ { 4 } + 2 x ^ { 3 } + x ^ { 2 } - 2 , a = - 1$ 

29. $f ( x ) = 1 / x ^ { 2 } , ~ a = 1$ 

30. $f ( x ) = 1 { \big / } ( 1 - x ) ^ { 3 } , ~ a = 0$ 

31. $f ( x ) = e ^ { x } , ~ a = 2$ 

32. $f ( x ) = 2 ^ { x } , ~ a = 1$ 

33. $f ( x ) = \cos ( 2 x + ( \pi / 2 ) ) , a = \pi / 4$ 

36. $f ( x ) = ( 1 - x + x ^ { 2 } ) e ^ { x }$ 

34. $f ( x ) = { \sqrt { x + 1 } } , a = 0$ 

37. $f ( x ) = \left( \sin x \right) \ln ( 1 + x )$ 

In Exercises 35–40, find the first three nonzero terms of the Maclaurin series for each function. 

35. $f ( x ) = \cos x - { \big ( } 2 / ( 1 - x ) { \big ) }$ 

38. $f ( x ) = x \sin ^ { 2 } x $ 

39. $f ( x ) = x ^ { 4 } e ^ { x ^ { 2 } }$ 

$$
f (x) = \frac {x ^ {3}}{1 + 2 x}
$$

Quadratic Approximations The Taylor polynomial of order 2 generated by a twice-differentiable function $f ( x )$ at $x = a$ is called the quadratic approximation of $f \operatorname { a t } x = a .$ . In Exercises 41–46, find the (a) linearization (Taylor polynomial of order 1) and (b) quadratic approximation of f at $x = 0$ 

41. $f ( x ) = \ln ( \cos x )$ 

42. $f ( x ) = e ^ { \sin x }$ 

43. $f ( x ) = 1 \big / \sqrt { 1 - x ^ { 2 } }$ 

44. $f ( x ) = \cosh x$ 

45. $f ( x ) = \sin { x }$ 

46. $f ( x ) = \tan { x }$ 

47. If m is a small positive number, then the graphs of $y = \sin x$ and y mx= intersect at a point whose x-coordinate is close to π. Find the quadratic approximation to $f ( x ) = \sin x - m x \mathrm { ~ a t ~ } x = \pi ,$ and use this to show that an approximate solution to the equation sin is x mx= x ≈ $\pi / ( 1 + m )$ 

Theory and Examples 

48. Use the Taylor series generated by $e ^ { x } \operatorname { a t } x = a$ to show that 

$$
e ^ {x} = e ^ {a} \left[ 1 + (x - a) + \frac {(x - a) ^ {2}}{2 !} + \dots \right].
$$

49. (Continuation of Exercise 48.) Find the Taylor series generated by $e ^ { x }$ a $x = 1$ . Compare your answer with the formula in Exercise 48. 

50. Let f( ) have derivatives through order x n at $x = a .$ . Show that the Taylor polynomial of order n and its first n derivatives have the same values that f and its first n derivatives have at $x = a .$ 

51. Approximation properties of Taylor polynomials Suppose that $f ( x )$ is differentiable on an interval centered at $x = a$ and that $g ( x ) = b _ { 0 } + b _ { 1 } ( x - a ) + \dots + b _ { n } ( x - a ) ^ { n }$ is a polynomial of degree n with constant coefficients $b _ { 0 } , \ldots , b _ { n }$ . Let $E ( x ) = f ( x ) - g ( x )$ . Show that if we impose on $_ g$ the conditions 

$$
E (a) = 0
$$

The approximation error is zero at $x = a ,$ 

ii) $\operatorname* { l i m } _ { x \to a } { \frac { E ( x ) } { { ( x - a ) } ^ { n } } } = 0 ,$ x a .<sup>n</sup> ( − ) The error is negligible when compared to 

then 

$$
\begin{array}{r l} g (x) = & f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots \\ & + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n}. \end{array}
$$

Thus, the Taylor polynomial $P _ { n } ( x )$ is the only polynomial of degree less than or equal to n whose error is both zero at $x = a$ and negligible when compared with $( x - a ) ^ { n }$ 

52. Let f be the function from Example 4. Let $p _ { 1 } ( t ) = 2 t ^ { 3 }$ and $p _ { 2 } ( t ) = 4 t ^ { 6 } - 6 t ^ { 4 }$ 

a. Show that if $x > 0$ , then 

$$
f ^ {\prime} (x) = 2 x ^ {- 3} e ^ {- x ^ {- 2}} = p _ {1} (1 / x) f (x),
$$

while for $x = 0$ 

$$
f ^ {\prime} (0) = \lim _ {h \rightarrow 0 ^ {+}} \frac {f (h) - 0}{h - 0} = \lim _ {t \rightarrow \infty} \frac {f (1 / t)}{1 / t} = 0.
$$

b. Show that if $x > 0 .$ , then 

$$
f ^ {\prime \prime} (x) = (4 x ^ {- 6} - 6 x ^ {- 3}) e ^ {- x ^ {- 2}} = p _ {2} (1 / x) f (x),
$$

and $f ^ { \prime \prime } ( 0 ) = 0$ 

c. For $n \geq 2$ , recursively define polynomials $p _ { n }$ by $p _ { n + 1 } ( t ) = 2 t ^ { 3 } p _ { n } ( t ) - t ^ { 2 } p _ { n } ^ { \prime } ( t ) .$ Use mathematical induction to prove that $p _ { n }$ has degree $3 n , f ^ { ( n ) } ( x ) = p _ { n } \bigl ( 1 / x \bigr ) f ( x )$ for $x > 0 , \mathrm { a n d } f ^ { ( n ) } ( 0 ) = 0 .$ 

## 9.9 Convergence of Taylor Series

In the last section we asked when a Taylor series for a function can be expected to converge to the function that generates it. The finite-order Taylor polynomials that approximate the Taylor series provide estimates for the generating function. In order for these estimates to be useful, we need a way to control the possible errors we may encounter when approximating a function with its finite-order Taylor polynomials. How do we bound such possible errors? We answer the question in this section with the following theorem. 

## THEOREM 23—Taylor’s Theorem

If f and its first n derivatives $f ^ { \prime } , f ^ { \prime \prime } , \ldots , f ^ { ( n ) }$ are continuous on the closed interval between a and b, and $f ^ { ( n ) }$ is differentiable on the open interval between a and b, then there exists a number c between a and b such that 

$$
\begin{array}{l} f (b) = f (a) + f ^ {\prime} (a) (b - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (b - a) ^ {2} + \dots \\ \qquad + \frac {f ^ {(n)} (a)}{n !} (b - a) ^ {n} + \frac {f ^ {(n + 1)} (c)}{(n + 1) !} (b - a) ^ {n + 1}. \end{array}
$$

Taylor’s Theorem is a generalization of the Mean Value Theorem (Exercise 49), and we omit its proof here. 

When we apply Taylor’s Theorem, we usually want to hold a fixed and treat b as an independent variable. Taylor’s formula is easier to use in circumstances like these if we change b to x. Here is a version of the theorem with this change. 

## Taylor’s Formula

If f has derivatives of all orders in an open interval I containing a, then for each positive integer n and for each x in I, 

$$
\begin{array}{l} f (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots \\ \qquad + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n} + R _ {n} (x), \end{array}\tag{1}
$$

where 

$$
R _ {n} (x) = \frac {f ^ {(n + 1)} (c)}{(n + 1) !} (x - a) ^ {n + 1} \quad \text {   for   some   } c \text {   between   } a \text {   and   } x.\tag{2}
$$

When we state Taylor’s theorem this way, it says that for each $x \in I ,$ 

$$
f (x) = P _ {n} (x) + R _ {n} (x).
$$

The function $R _ { n } ( x )$ is determined by the value of the $( n + 1 )$ st derivative $f ^ { ( n + 1 ) }$ at a point c that depends on both a and $x ,$ and that lies somewhere between them. For any value of n we want, the equation gives both a polynomial approximation of $f$ of that order and a formula for the error involved in using that approximation over the interval I. 

Equation (1) is called Taylor’s formula. The function $R _ { n } ( x )$ is called the remainder of order n or the error term for the approximation of $f$ by $P _ { n } ( x )$ over I. 

If $R_{n}(x) \to 0$ as $n \to \infty$ for all $x \in I$ , we say that the Taylor series generated by $f$ at $x = a$ converges to $f$ on $I$ , and we write $f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!} (x - a)^{k}.$ 

Often we can estimate $R _ { n }$ without knowing the value of $^ { c , }$ as the following example illustrates. 

**EXAMPLE 1** Show that the Taylor series generated by $f ( x ) = e ^ { x } \mathrm { a t } x = 0$ converges to $f ( x )$ for every real value of x. 

**Solution** The function has derivatives of all orders throughout the interval $I = ( - \infty , \infty )$ . Equations (1) and (2) with $f ( x ) = e ^ { x }$ and $a = 0$ give 

$$
e ^ {x} = 1 + x + \frac {x ^ {2}}{2 !} + \dots + \frac {x ^ {n}}{n !} + R _ {n} (x) \quad \begin{array}{l} \text { Polynomial   from } \\ \text { Section   9.8,   Example   2 } \end{array}
$$

and 

$$
R _ {n} (x) = \frac {e ^ {c}}{(n + 1) !} x ^ {n + 1}
$$

Since $e ^ { x }$ is an increasing function of $x , e ^ { c }$ lies between $e ^ { 0 } = 1$ and $e ^ { x }$ . When x is negative, so is $^ { c , }$ and $e ^ { c } \ < \ 1$ . When x is zero, $e ^ { x } = 1$ so that $\boldsymbol { R } _ { n } ( x ) = 0$ .  When x is positive, so is $^ { c , }$ and $e ^ { c } \ < \ e ^ { x }$ .  Thus, for $R _ { n } ( x )$ given as above, 

$$
\left| R _ {n} (x) \right| \leq \frac {| x | ^ {n + 1}}{(n + 1) !} \quad \text { when } x \leq 0, \quad e ^ {c} <   1 \text { since } c <   0
$$

and 

$$
\left| R _ {n} (x) \right| <   e ^ {x} \frac {x ^ {n + 1}}{(n + 1) !} \quad \text { when } x > 0. \quad e ^ {c} <   e ^ {x} \text { since } c <   x
$$

Finally, because 

$$
\lim _ {n \to \infty} \frac {x ^ {n + 1}}{(n + 1) !} = 0 \quad \text {   for   every   } x, \tag {Section9.1,Theorem5}
$$

we see that lim $\boldsymbol { R } _ { n } ( x ) = 0$ , and therefore the Taylor series converges to $e ^ { x }$ for every x. Thus, →∞n 

$$
e ^ {x} = \sum_ {k = 0} ^ {\infty} \frac {x ^ {k}}{k !} = 1 + x + \frac {x ^ {2}}{2 !} + \dots + \frac {x ^ {k}}{k !} + \dots .\tag{3}
$$

The Number e as a Series 

$$
e = \sum_ {n = 0} ^ {\infty} \frac {1}{n !}
$$

We can use the result of Example 1 with $x = 1$ to write 

$$
e = 1 + 1 + \frac {1}{2 !} + \dots + \frac {1}{n !} + R _ {n} (1),
$$

where, for some c between 0 and 1, 

$$
R _ {n} (1) = e ^ {c} \frac {1}{(n + 1) !} <   \frac {3}{(n + 1) !}. \quad e ^ {c} <   e ^ {1} <   3
$$

## Estimating the Remainder

It is often possible to estimate $R _ { n } ( x )$ as we did in Example 1. This method of estimation is so convenient that we state it as a theorem for future reference. 

## THEOREM 24—The Remainder Estimation Theorem

If there is a positive constant M such that $| f ^ { ( n + 1 ) } ( t ) | \leq M$ for all t between x and a, inclusive, then the remainder term $R _ { n } ( x )$ in Taylor’s Theorem satisfies the inequality 

$$
\left| R _ {n} (x) \right| \leq M \frac {\left| x - a \right| ^ {n + 1}}{(n + 1) !}.
$$

If this inequality holds for every n, and the other conditions of Taylor’s Theorem are satisfied by $f ,$ then the Taylor series converges to $f ( x )$ 

The next two examples use Theorem 24 to show that the Taylor series generated by the sine and cosine functions do in fact converge to the functions themselves. 

## **EXAMPLE 2** Show that the Taylor series for sin x at $x = 0$ converges for all x.

**Solution** The function and its derivatives are 

$$
\begin{array}{c c c} f (x) = & \sin x, & f ^ {\prime} (x) = \quad \cos x, \\ f ^ {\prime \prime} (x) = & - \sin x, & f ^ {\prime \prime \prime} (x) = \quad - \cos x, \\ \vdots & & \vdots \\ f ^ {(2 k)} (x) = (- 1) ^ {k} \sin x, & & f ^ {(2 k + 1)} (x) = (- 1) ^ {k} \cos x, \end{array}
$$

so 

$$
f ^ {(2 k)} (0) = 0 \quad \text { and } \quad f ^ {(2 k + 1)} (0) = (- 1) ^ {k}.
$$

The series has only odd-powered terms, and for $n = 2 k + 1$ , Taylor’s Theorem gives 

$$
\sin x = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \dots + \frac {(- 1) ^ {k} x ^ {2 k + 1}}{(2 k + 1) !} + R _ {2 k + 1} (x).
$$

All the derivatives of sin x have absolute values less than or equal to 1, so we can apply the Remainder Estimation Theorem with $M = 1$ to obtain 

$$
\left| R _ {2 k + 1} (x) \right| \leq 1 \cdot \frac {\left| x \right| ^ {2 k + 2}}{(2 k + 2) !}.
$$

From Theorem 5, Rule 6, we have $\left( | x | ^ { 2 k + 2 } / ( 2 k + 2 ) ! \right) \to 0$ as $k  \infty$ , whatever the value of x, so $R _ { 2 k + 1 } ( x )  0$ and the Maclaurin series for sin x converges to sin x for every x. Thus, 

$$
\sin x = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \frac {x ^ {7}}{7 !} + \dots
$$

$$
\sin x = \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k} x ^ {2 k + 1}}{(2 k + 1) !} = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \frac {x ^ {7}}{7 !} + \dots .\tag{4}
$$

**EXAMPLE 3** Show that the Taylor series for cos x at $x = 0$ converges to cos x for every value of x. 

**Solution** We add the remainder term to the Taylor polynomial for cos x (Section 9.8, Example 3) to obtain Taylor’s formula for cos x with $n \ : = \ : 2 k$ 

$$
\cos x = 1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \dots + (- 1) ^ {k} \frac {x ^ {2 k}}{(2 k) !} + R _ {2 k} (x).
$$

Because the derivatives of the cosine have absolute value less than or equal to 1, the Remainder Estimation Theorem with $M = 1$ gives 

$$
\left| R _ {2 k} (x) \right| \leq 1 \cdot \frac {\left| x \right| ^ {2 k + 1}}{(2 k + 1) !}.
$$

For every value of x, $R _ { 2 k } ( x ) \to 0 { \mathrm { ~ a s ~ } } k \to \infty .$ . Therefore, the series converges to cos x for every value of x. Thus, 

$$
\cos x = 1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \frac {x ^ {6}}{6 !} + \dots
$$

$$
\cos x = \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k} x ^ {2 k}}{(2 k) !} = 1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \frac {x ^ {6}}{6 !} + \dots .\tag{5}
$$

## Using Taylor Series

Since every Taylor series is a power series, the operations of adding, subtracting, and multiplying Taylor series are all valid on the intersection of their intervals of convergence. 

**EXAMPLE 4** Using known series, find the first few terms of the Taylor series for the given function by using power series operations. 

$$
\text { (a) } \frac {1}{3} (2 x + x \cos x)
$$

$$
(\mathbf {b}) e ^ {x} \cos x
$$

**Solution** 

$$
\begin{array}{l} \text {(a)} \frac {1}{3} (2 x + x \cos x) = \frac {2}{3} x + \frac {1}{3} x \left(1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \dots + (- 1) ^ {k} \frac {x ^ {2 k}}{(2 k) !} + \dots\right) \quad \text { Taylor   series } \\ \text { for   cos } x \\ = \frac {2}{3} x + \frac {1}{3} x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{3 \cdot 4 !} - \dots = x - \frac {x ^ {3}}{6} + \frac {x ^ {5}}{7 2} - \dots \end{array}
$$

$$
\begin{array}{l} \text {(b)} e ^ {x} \cos x = \left(1 + x + \frac {x ^ {2}}{2 !} + \frac {x ^ {3}}{3 !} + \frac {x ^ {4}}{4 !} + \dots\right) \left(1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \dots\right) \\ = \left(1 + x + \frac {x ^ {2}}{2 !} + \frac {x ^ {3}}{3 !} + \frac {x ^ {4}}{4 !} + \dots\right) - \left(\frac {x ^ {2}}{2 !} + \frac {x ^ {3}}{2 !} + \frac {x ^ {4}}{2 ! 2 !} + \frac {x ^ {5}}{2 ! 3 !} + \dots\right) \\ + \left(\frac {x ^ {4}}{4 !} + \frac {x ^ {5}}{4 !} + \frac {x ^ {6}}{2 ! 4 !} + \dots\right) + \dots \\ = 1 + x - \frac {x ^ {3}}{3} - \frac {x ^ {4}}{6} + \dots \end{array}
$$

By Theorem 20, if the Taylor series generated by $f \operatorname { a t } x = 0$ 2 

$$
\sum_ {k = 0} ^ {\infty} \frac {f ^ {(k)} (0)}{k !} x ^ {k} = f (0) + f ^ {\prime} (0) x + \frac {f ^ {\prime \prime} (0)}{2 !} x ^ {2} + \dots + \frac {f ^ {(n)} (0)}{n !} x ^ {n} + \dots ,\tag{6}
$$

converges absolutely for $| x | < R ,$ , and if u is a continuous function, then the series 

$$
\sum_ {k = 0} ^ {\infty} \frac {f ^ {(k)} (0)}{k !} (u (x)) ^ {k}\tag{7}
$$

obtained by substituting $u ( x )$ for x in the Taylor series of Formula (6) converges absolutely on the set of points x where $| u ( x ) | < R$ 

I $\dot { \mathbf { \boldsymbol { \cdot } } } \boldsymbol { u } ( \boldsymbol { x } ) = c \boldsymbol { x } ^ { m }$ , where $c \neq 0$ and m is a positive integer, then the series of Formula (7) is a power series and can be shown to be the Taylor series generated by $f ( u ( x ) )$ at $x = 0$ 

For instance, we can find the Taylor series for cos 2x by substituting 2x for x in the Taylor series for cos x: 

$$
\begin{array}{l} \cos 2 x = \sum_ {k = 0} ^ {\infty} \frac {(- 1) ^ {k} (2 x) ^ {2 k}}{(2 k) !} = 1 - \frac {(2 x) ^ {2}}{2 !} + \frac {(2 x) ^ {4}}{4 !} - \frac {(2 x) ^ {6}}{6 !} + \dots \\ = 1 - \frac {2 ^ {2} x ^ {2}}{2 !} + \frac {2 ^ {4} x ^ {4}}{4 !} - \frac {2 ^ {6} x ^ {6}}{6 !} + \dots \\ = \sum_ {k = 0} ^ {\infty} (- 1) ^ {k} \frac {2 ^ {2 k} x ^ {2 k}}{(2 k) !}. \end{array} \quad \text { Eq.   (5)   with   } 2 x \text {   for   } x
$$

By Theorem 20, this new Taylor series converges for all x. 

**EXAMPLE 5** For what values of x can we replace sin x by $x - \left( x ^ { 3 } / 3 ! \right)$ and obtain an error whose magnitude is no greater than $3 \times 1 0 ^ { - 4 } ?$ 

**Solution** Here we can take advantage of the fact that the Taylor series for sin x is an alternating series for every nonzero value of x. According to the Alternating Series Estimation Theorem (Section 9.6), the error in truncating 

$$
\sin x = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \frac {x ^ {7}}{7 !} + \dots
$$

after $\left( { x ^ { 3 } } / { 3 ! } \right)$ is no greater than 

$$
\left| \frac {x ^ {5}}{5 !} \right| = \frac {| x | ^ {5}}{1 2 0}.
$$

Therefore, the error will be less than or equal to $3 \times 1 0 ^ { - 4 } \mathrm { i f }$ 

$$
\frac {| x | ^ {5}}{1 2 0} <   3 \times 1 0 ^ {- 4} \quad \text { or } \quad | x | <   \sqrt [ 5 ]{3 6 0 \times 1 0 ^ {- 4}} \approx 0. 5 1 4. \quad \text { Rounded   down,   to   be   safe }
$$

The Alternating Series Estimation Theorem tells us something that the Remainder Estimation Theorem does not: The estimate $x - \left( x ^ { 3 } / 3 ! \right)$ for sin x is an underestimate when x is positive, because then $x ^ { 5 } / 1 2 0$ is positive. 

Figure 9.25 shows the graph of sin x, along with the graphs of a number of its approximating Taylor polynomials. The graph of $P _ { 3 } ( x ) = x - \left( x ^ { 3 } / 3 ! \right)$ is almost indistinguishable from the sine curve when $0 \leq x \leq 1$ 

![[5e561b57d8761677092e83f13bccfb79a2083936a4770ada9f41a8d34e042534.jpg|image]]


FIGURE 9.25 The polynomials 

$$
P _ {2 n + 1} (x) = \sum_ {k = 0} ^ {n} \frac {(- 1) ^ {k} x ^ {2 k + 1}}{(2 k + 1) !}
$$

converge to sin x as $n  \infty .$ Notice how closely $P _ { 3 } ( x )$ approximates the sine curve for $x \leq 1$ (Example 5). 

## A Proof of Taylor’s Theorem

We prove Taylor’s theorem assuming $a \ < \ b$ . The proof for $a > b$ is nearly the same. The Taylor polynomial 

$$
P _ {n} (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n}
$$

and its first n derivatives match the function f and its first n derivatives at $x \ = \ a$ . We do not disturb that matching if we add another term of the form $K ( x - a ) ^ { n + 1 }$ , where K is any constant, because such a term and its first n derivatives are all equal to zero at $x \ = \ a .$ . The new function 

$$
\phi_ {n} (x) = P _ {n} (x) + K (x - a) ^ {n + 1}
$$

and its first n derivatives still agree with f and its first n derivatives at $x \ = \ a$ 

We now choose the particular value of K that makes the curve $y = \phi _ { n } ( x )$ agree with the original curve $y = f ( x ) \operatorname { a t } x = b .$ . In symbols, 

$$
f (b) = P _ {n} (b) + K (b - a) ^ {n + 1}, \quad \text { or } \quad K = \frac {f (b) - P _ {n} (b)}{(b - a) ^ {n + 1}}.\tag{8}
$$

With K defined by Equation (8), the function 

$$
F (x) = f (x) - \phi_ {n} (x)
$$

measures the difference between the original function f and the approximating function $\phi _ { n }$ for each $x \operatorname { i n } [ a , b ]$ 

We now use Rolle’s Theorem (Section 4.2). First, because $F ( a ) = F ( b ) = 0$ and both F and $F ^ { \prime }$ are continuous on $[ a , b ]$ , we know that 

$$
F ^ {\prime} (c _ {1}) = 0 \quad \text {   for   some   } c _ {1} \text {   in   } (a, b).
$$

Next, because $F ^ { \prime } ( a ) = F ^ { \prime } ( c _ { 1 } ) = 0$ and both $F ^ { \prime }$ and $F ^ { \prime \prime }$ are continuous on $\left[ a , c _ { 1 } \right]$ , we know that 

$$
F ^ {\prime \prime} (c _ {2}) = 0 \quad \text {   for   some   } c _ {2} \text {   in   } (a, c _ {1}).
$$

Rolle’s Theorem, applied successively to $F ^ { \prime \prime } , F ^ { \prime \prime \prime } , \ldots , F ^ { ( n - 1 ) }$ , implies the existence of 

$$
\begin{array}{l l} c _ {3} & \text { in } (a, c _ {2}) \qquad \text { such   that } F ^ {\prime \prime \prime} (c _ {3}) = 0, \\ c _ {4} & \text { in } (a, c _ {3}) \qquad \text { such   that } F ^ {(4)} (c _ {4}) = 0, \\ & \vdots \\ c _ {n} & \text { in } (a, c _ {n - 1}) \qquad \text { such   that } F ^ {(n)} (c _ {n}) = 0. \end{array}
$$

Finally, because $F ^ { ( n ) }$ is continuous on $\left[ a , c _ { n } \right]$ and differentiable on $\left( a , c _ { n } \right)$ , and $F ^ { ( n ) } ( a ) = F ^ { ( n ) } ( c _ { n } ) = 0$ , Rolle’s Theorem implies that there is a number $c _ { n + 1 }$ in $\left( a , c _ { n } \right)$ such that 

$$
F ^ {(n + 1)} \big (c _ {n + 1} \big) = 0.\tag{9}
$$

If we differentiate $F ( x ) = f ( x ) - P _ { n } ( x ) - K ( x - a ) ^ { n + 1 }$ a total of $n + 1$ times, we get 

$$
F ^ {(n + 1)} (x) = f ^ {(n + 1)} (x) - 0 - (n + 1)! K.\tag{10}
$$

Equations (9) and (10) together give 

$$
K = \frac {f ^ {(n + 1)} (c)}{(n + 1) !} \quad \text {   for   some   number   } c = c _ {n + 1} \text {   in   } (a, b).\tag{11}
$$

Equations (8) and (11) give 

$$
f (b) = P _ {n} (b) + \frac {f ^ {(n + 1)} (c)}{(n + 1) !} (b - a) ^ {n + 1}.
$$

This concludes the proof. 

## EXERCISES 9.9

## Finding Taylor Series

Use substitution (as in Formula (7)) to find the Taylor series at $x = 0$ of the functions in Exercises 1–12. 1. $e ^ { - 5 x }$ 2. $e ^ { - x / 2 }$ 3. $5 \sin \left( - x \right)$ 4. $\sin \left( { \frac { \pi x } { 2 } } \right)$ 5. $\cos 5 x ^ { 2 }$ 6. $\cos ( x / \sqrt 2 )$ 7. $\ln ( 1 + x ^ { 2 } )$ 8. $\arctan { ( 3 x ^ { 4 } ) }$ 9. $\frac { 1 } { 1 + { \frac { 3 } { 4 } } x ^ { 3 } }$ 10. $\frac { 1 } { 2 - x }$ 11. $\ln ( 3 + 6 x )$ 12. $e ^ { - x ^ { 2 } + \ln 5 }$ 

Use power series operations to find the Taylor series at x = 0 for the functions in Exercises 13–30. 13. $x e ^ { x }$ 14. $x ^ { 2 } \sin x$ 15. $\frac { x ^ { 2 } } { 2 } - 1 + \cos x$ 

16. sin $x - x + { \frac { x ^ { 3 } } { 3 ! } }$ 17. x cos πx 18. $x ^ { 2 } \cos \left( x ^ { 2 } \right)$ 

19. $\cos ^ { 2 } x ( H i n t { \mathrm { : } } \cos ^ { 2 } x = ( 1 + \cos 2 x ) / 2 . )$ 20. $\sin ^ { 2 } x$ 21. $\frac { x ^ { 2 } } { 1 - 2 x }$ 22. $x \ln ( 1 + 2 x )$ 23. $\frac { 1 } { \left( 1 - x \right) ^ { 2 } }$ 24. $\frac { 2 } { \left( 1 - x \right) ^ { 3 } }$ 25. $x \arctan x ^ { 2 }$ 26. sin $x \cdot \cos x$ 27. $e ^ { x } + { \frac { 1 } { 1 + x } }$ 28. $\cos x - \sin x$ 29. ${ \frac { x } { 3 } } \ln ( 1 + x ^ { 2 } )$ 30. $\ln ( 1 + x ) - \ln ( 1 - x )$ 

Find the first four nonzero terms in the Maclaurin series for the functions in Exercises 31–38. 31. $e ^ { x } \sin x$ 32. $\frac { \ln ( 1 + x ) } { 1 - x }$ 33. $( \arctan x ) ^ { 2 }$ 34. $\cos ^ { 2 } x \cdot \sin x$ 35. $e ^ { \sin x }$ 36. $\sin \left( { \tan ^ { - 1 } x } \right)$ 

37. $\cos ( e ^ { x } - 1 )$ 38. $\cos { \sqrt { x } } + \ln ( \cos x )$ 

## Error Estimates

39. Estimate the error if $P _ { 3 } ( x ) = x - ( x ^ { 3 } / 6 )$ is used to estimate the value of sin x at $x = 0 . 1$ 

40. Estimate the error if $P _ { 4 } ( x ) = 1 + x + \left( x ^ { 2 } / 2 \right) + \left( x ^ { 3 } / 6 \right) +$ $( x ^ { 4 } / 2 4 )$ is used to estimate the value of $e ^ { x } \mathrm { a t } x = 1 / 2$ 

41. For approximately what values of x can you replace sin x by $x - \left( x ^ { 3 } / 6 \right)$ with an error of magnitude no greater than $5 \times 1 0 ^ { - 4 } ?$ Give reasons for your answer. 

42. If cos x is replaced by $1 - \left( x ^ { 2 } / 2 \right)$ and $| x | < 0 . 5$ , what estimate can be made of the error? Does $1 - \left( x ^ { 2 } / 2 \right)$ ) tend to be too large, or too small? Give reasons for your answer. 

43. How close is the approximation sin $x \ = \ x$ when $\vert x \vert < 1 0 ^ { - 3 } \ ?$ For which of these values of x is $x \ <$ sin ?x 

44. The estimate $\sqrt { 1 + x } = 1 + ( x / 2 )$ is used when x is small. Estimate the error when $| x | < 0 . 0 1$ 

45. The approximation $e ^ { x } = 1 + x + \left( x ^ { 2 } / 2 \right)$ is used when x is small. Use the Remainder Estimation Theorem to estimate the error when $| x | < 0 . 1$ 

46. (Continuation of Exercise 45.) When $x < 0 .$ , the series for $e ^ { x }$ is an alternating series. Use the Alternating Series Estimation Theorem to estimate the error that results from replacing $e ^ { x }$ by $1 + x + ( x ^ { 2 } / 2 )$ when $- 0 . 1 < x < 0$ . Compare your estimate with the one you obtained in Exercise 45. 

## Theory and Examples

47. Use the identity sin $^ 2 x = ( 1 - \cos 2 x ) / 2$ to obtain the Maclaurin series for sin .x<sup>2</sup> Then differentiate this series to obtain the Maclaurin series for 2 sin x cos x. Check that this is the series for sin 2x. 

48. (Continuation of Exercise 47.) Use the identity $\cos ^ { 2 } x = \cos 2 x + \sin ^ { 2 } . $ x to obtain a power series for $\cos ^ { 2 } x .$ 

49. Taylor’s Theorem and the Mean Value Theorem Explain how the Mean Value Theorem (Section 4.2, Theorem 4) is a special case of Taylor’s Theorem. 

50. Linearizations at inflection points Show that if the graph of a twice-differentiable function f( ) has an inflection point atx $x = a ,$ then the linearization of $f \operatorname { a t } x = a$ is also the quadratic approximation of $f \operatorname { a t } x = a .$ This explains why tangent lines fit so well at inflection points. 

51. The (second) second derivative test Use the equation 

$$
f (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} \left(c _ {2}\right)}{2} (x - a) ^ {2}
$$

to establish the following test. 

Let f have continuous first and second derivatives and suppose that $f ^ { \prime } ( a ) = 0$ . Then 

a. f has a local maximum at a i $\mathrm { ~ f ~ } f ^ { \prime \prime } \le 0$ throughout an interval whose interior contains a; 

b. f has a local minimum at a if $f ^ { \prime \prime } \geq 0$ throughout an interva whose interior contains a. 

52. A cubic approximation Use Taylor’s formula with $a = 0$ and $n = 3 \quad \mathrm { t o }$ find the standard cubic approximation of $f ( x ) = 1 / ( 1 - x )$ at $x = 0$ . Give an upper bound for the magnitude of the error in the approximation when $| x | \le 0 . 1$ 

53. a. Use Taylor’s formula with $n = 2$ to find the quadratic approximation of $f ( x ) = ( 1 + x ) ^ { k } \operatorname { a t } x = 0$ (k a constant). b. If $k = 3 ,$ , for approximately what values of x in the interval $[ 0 , 1 ]$ will the error in the quadratic approximation be less than 1 100? 

54. Improving approximations of π 

a. Let P be an approximation of π accurate to n decimals. Show that P P+ sin gives an approximation correct to 3n decimals. (Hint: Let $P = \pi + x . )$ 

b. Try it with a calculator.T 

55. The Taylor series generated by $\textstyle f ( x ) = \sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ is $\scriptstyle \sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ A function defined by a power series $\sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ with a radius of convergence $R > 0$ has a Taylor series that converges to the function at every point of $\left( - R , R \right)$ . Show this by showing that the Taylor series generated by $\textstyle f ( x ) = \sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ is the series $\sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ itself. 

An immediate consequence of this is that series like 

$$
x \sin x = x ^ {2} - \frac {x ^ {4}}{3 !} + \frac {x ^ {6}}{5 !} - \frac {x ^ {8}}{7 !} + \dots
$$

and 

$$
x ^ {2} e ^ {x} = x ^ {2} + x ^ {3} + \frac {x ^ {4}}{2 !} + \frac {x ^ {5}}{3 !} + \dots ,
$$

obtained by multiplying Taylor series by powers of $x ,$ as well as series obtained by integration and differentiation of convergent power series, are themselves the Taylor series generated by the functions they represent. 

56. Taylor series for even functions and odd functions (Continuation of Section 9.7, Exercise 61.) Suppose that $f ( x ) = \textstyle \sum _ { n = 0 } ^ { \infty } a _ { n } x ^ { n }$ converges for all x in an open interval $\left( - R , R \right)$ . Show that 

a. If f is even, then $a _ { 1 } = a _ { 3 } = a _ { 5 } = \cdots = 0 , \mathrm { i } .$ e., the Taylor series for f at $x = 0$ contains only even powers of x. 

b. If f is odd, then $a _ { 0 } = a _ { 2 } = a _ { 4 } = \cdots = 0 \quad$ ,  i.e., the Taylor series for f at $x = 0$ contains only odd powers of x. 

## COMPUTER EXPLORATIONS

Taylor’s formula with $n = 1$ and $a = 0$ gives the linearization of a function at $x = 0$ . With $n = 2$ and $n = 3 ,$ we obtain the standard quadratic and cubic approximations. In these exercises we explore the errors associated with these approximations. We seek answers to two questions: 

a. For what values of x can the function be replaced by each approximation with an error less than $1 0 ^ { - 2 } \%$ 

b. What is the maximum error we can expect if we replace the function by each approximation over the specified interval? 

Using a CAS, perform the following steps to aid in answering questions (a) and (b) for the functions and intervals in Exercises 57–62. 

Step 1: Plot the function over the specified interval. 

Step 2: Find the Taylor polynomials $P _ { 1 } ( x ) , P _ { 2 } ( x )$ ,  and $P _ { 3 } ( x )$ at $x = 0$ 

Step 3: Calculate the $( n + 1 ) \mathrm { s t }$ derivative $f ^ { ( n + 1 ) } ( c )$ associated with the remainder term for each Taylor polynomial. Plot the derivative as a function of c over the specified interval and estimate its maximum absolute value, M. 

Step 4: Calculate the remainder $R _ { n } ( x )$ for each polynomial. Using the estimate M from Step 3 in place of $f ^ { ( n + 1 ) } ( c )$ , plot $R _ { n } ( x )$ over the specified interval. Then estimate the values of x that answer question (a). 

Step 5: Compare your estimated error with the actual error $E _ { n } ( x ) = \left| f ( x ) - P _ { n } ( x ) \right|$ by plotting $E _ { n } ( x )$ over the specified interval. This will help you answer question (b). 

Step ${ \boldsymbol { 6 } } ;$ Graph the function and its three Taylor approximations together. Discuss the graphs in relation to the information discovered in Steps 4 and 5. 

$$
\text { 57.   } f (x) = \frac {1}{\sqrt {1 + x}}, | x | \leq \frac {3}{4}
$$

$$
f (x) = (1 + x) ^ {3 / 2}, - \frac {1}{2} \leq x \leq 2
$$

$$
\textbf {5 9 .} f (x) = \frac {x}{x ^ {2} + 1}, | x | \leq 2
$$

$$
\mathbf {6 0 .} f (x) = (\cos x) (\sin 2 x), | x | \leq 2
$$

$$
f (x) = e ^ {- x} \cos 2 x, | x | \leq 1
$$

$$
f (x) = e ^ {x / 3} \sin 2 x, | x | \leq 2
$$

## 9.10 Applications of Taylor Series

We can use Taylor series to solve problems that would otherwise be intractable. For example, many functions have antiderivatives that cannot be expressed using familiar functions. In this section we show how to evaluate integrals of such functions by giving them as Taylor series. We also show how to use Taylor series to evaluate limits that lead to indeterminate forms and how Taylor series can be used to extend the exponential function from real to complex numbers. We begin with a discussion of the binomial series, which comes from the Taylor series of the function $f ( x ) = ( 1 + x ) ^ { m }$ , and we conclude the section with Table 9.1, which lists some commonly used Taylor series. 

## The Binomial Series for Powers and Roots

The Taylor series generated by $f ( x ) = ( 1 + x ) ^ { m }$ , when m is constant, is 

$$
\begin{array}{l} 1 + m x + \frac {m (m - 1)}{2 !} x ^ {2} + \frac {m (m - 1) (m - 2)}{3 !} x ^ {3} + \dots \\ \qquad + \frac {m (m - 1) (m - 2) \cdots (m - k + 1)}{k !} x ^ {k} + \dots . \end{array}\tag{1}
$$

This series, called the binomial series, converges absolutely for $| x | < 1$ . To derive the series, we first list the function and its derivatives: 

$$
\begin{array}{c} f (x) = (1 + x) ^ {m} \\ f ^ {\prime} (x) = m (1 + x) ^ {m - 1} \\ f ^ {\prime \prime} (x) = m (m - 1) (1 + x) ^ {m - 2} \\ f ^ {\prime \prime \prime} (x) = m (m - 1) (m - 2) (1 + x) ^ {m - 3} \\ \vdots \\ f ^ {(k)} (x) = m (m - 1) (m - 2) \dots (m - k + 1) (1 + x) ^ {m - k}. \end{array}
$$

We then evaluate these at $x = 0$ and substitute into the Taylor series formula to obtain Series (1). 

If m is an integer greater than or equal to zero, the series stops after $( m + 1 )$ terms because the coefficients from $k = m + 1$ on are zero. 

If m is not a positive integer or zero, the series is infinite and converges for $| x | < 1$ To see why, let $\boldsymbol { u } _ { k }$ be the term involving $x ^ { k }$ . Then apply the Ratio Test for absolute convergence to see that 

$$
\left| \frac {u _ {k + 1}}{u _ {k}} \right| = \left| \frac {m - k}{k + 1} x \right|\rightarrow | x | \quad \text {as} k \rightarrow \infty .
$$

Our derivation of the binomial series shows only that it is generated by $( 1 + x ) ^ { m }$ and converges for $| x | < 1$ . The derivation does not show that the series converges to $( 1 + x ) ^ { m }$ .  It does, but we leave the proof to Exercise 58. The following formulation gives a succinct way to express the series. 

The Binomial Series
For -1 < x < 1, $(1 + x)^{m} = 1 + \sum_{k=1}^{\infty}\binom{m}{k}x^{k},$ where we define $\binom{m}{1} = m, \quad \binom{m}{2} = \frac{m(m-1)}{2!},$ and $\binom{m}{k} = \frac{m(m-1)(m-2)\cdots(m-k+1)}{k!}$ for $k \geq 3$ . 

## **EXAMPLE 1** $\mathrm { I f } m = - 1 $ then

$$
\binom {- 1} {1} = - 1, \binom {- 1} {2} = \frac {- 1 (- 2)}{2 !} = 1,
$$

and 

$$
\binom {- 1} {k} = \frac {- 1 (- 2) (- 3) \cdots (- 1 - k + 1)}{k !} = (- 1) ^ {k} \Big (\frac {k !}{k !} \Big) = (- 1) ^ {k}.
$$

With these coefficient values and with x replaced by −x, the binomial series formula gives the familiar geometric series 

$$
(1 + x) ^ {- 1} = 1 + \sum_ {k = 1} ^ {\infty} (- 1) ^ {k} x ^ {k} = 1 - x + x ^ {2} - x ^ {3} + \dots + (- 1) ^ {k} x ^ {k} + \dots .
$$

**EXAMPLE 2** We know from Section 3.11, Example 1, that $\sqrt { 1 + x } \approx 1 + ( x / 2 )$ for $| x |$ small. With $m = 1 / 2$ , the binomial series gives quadratic and higher-order approximations as well, along with error estimates that come from the Alternating Series Estimation Theorem: 

$$
\begin{array}{r l} (1 + x) ^ {1 / 2} & = 1 + \frac {x}{2} + \frac {\left(\frac {1}{2}\right) \left(- \frac {1}{2}\right)}{2 !} x ^ {2} + \frac {\left(\frac {1}{2}\right) \left(- \frac {1}{2}\right) \left(- \frac {3}{2}\right)}{3 !} x ^ {3} \\ & \quad + \frac {\left(\frac {1}{2}\right) \left(- \frac {1}{2}\right) \left(- \frac {3}{2}\right) \left(- \frac {5}{2}\right)}{4 !} x ^ {4} + \dots \\ & = 1 + \frac {x}{2} - \frac {x ^ {2}}{8} + \frac {x ^ {3}}{1 6} - \frac {5 x ^ {4}}{1 2 8} + \dots . \end{array}
$$

Substitution for x gives still other approximations. For example, 

$$
\begin{array}{c} \sqrt {1 - x ^ {2}} \approx 1 - \frac {x ^ {2}}{2} - \frac {x ^ {4}}{8} \quad \text { for } | x ^ {2} | \text { small } \\ \sqrt {1 - \frac {1}{x}} \approx 1 - \frac {1}{2 x} - \frac {1}{8 x ^ {2}} \quad \text { for } \left| \frac {1}{x} \right| \text { small,   that   is, } | x | \text { large. } \end{array}
$$

## Evaluating Nonelementary Integrals

Sometimes we can use a familiar Taylor series to find the sum of a given power series in terms of a known function. For example, 

$$
x ^ {2} - \frac {x ^ {6}}{3 !} + \frac {x ^ {1 0}}{5 !} - \frac {x ^ {1 4}}{7 !} + \dots = (x ^ {2}) - \frac {(x ^ {2}) ^ {3}}{3 !} + \frac {(x ^ {2}) ^ {5}}{5 !} - \frac {(x ^ {2}) ^ {7}}{7 !} + \dots = \sin x ^ {2}.
$$

Additional examples are provided in Exercises 59–62. 

Taylor series can be used to express nonelementary integrals in terms of series. Integrals like ∫ sin $x ^ { 2 }$ dx  arise in the study of the diffraction of light. 

**EXAMPLE 3** Express $\scriptstyle \int$ sin $x ^ { 2 }$ dx  as a power series. 

**Solution** From the series for sin x, we substitute $x ^ { 2 }$ for x to obtain 

$$
\sin x ^ {2} = x ^ {2} - \frac {x ^ {6}}{3 !} + \frac {x ^ {1 0}}{5 !} - \frac {x ^ {1 4}}{7 !} + \frac {x ^ {1 8}}{9 !} - \dots .
$$

Therefore, 

$$
\int \sin x ^ {2} d x = C + \frac {x ^ {3}}{3} - \frac {x ^ {7}}{7 \cdot 3 !} + \frac {x ^ {1 1}}{1 1 \cdot 5 !} - \frac {x ^ {1 5}}{1 5 \cdot 7 !} + \frac {x ^ {1 9}}{1 9 \cdot 9 !} - \dots .
$$

**EXAMPLE 4** Estimate $\textstyle \int _ { 0 } ^ { 1 } \sin { x ^ { 2 } }$ dx with an error of less than 0.001. 

**Solution** From the indefinite integral in Example 3, we easily find that 

$$
\int_ {0} ^ {1} \sin x ^ {2} d x = \frac {1}{3} - \frac {1}{7 \cdot 3 !} + \frac {1}{1 1 \cdot 5 !} - \frac {1}{1 5 \cdot 7 !} + \frac {1}{1 9 \cdot 9 !} - \dots .
$$

The series on the right-hand side alternates, and we find by numerical evaluations that 

$$
\frac {1}{1 1 \cdot 5 !} \approx 0. 0 0 0 7 6
$$

is the first term to be numerically less than 0.001. The sum of the preceding two terms gives 

$$
\int_ {0} ^ {1} \sin x ^ {2} d x \approx \frac {1}{3} - \frac {1}{4 2} \approx 0. 3 1 0.
$$

With two more terms, we could estimate 

$$
\int_ {0} ^ {1} \sin x ^ {2} d x \approx 0. 3 1 0 2 6 8
$$

with an error of less than $1 0 ^ { - 6 } .$ With only one term beyond that, we have 

$$
\int_ {0} ^ {1} \sin x ^ {2} d x \approx \frac {1}{3} - \frac {1}{4 2} + \frac {1}{1 3 2 0} - \frac {1}{7 5 6 0 0} + \frac {1}{6 8 9 4 7 2 0} \approx 0. 3 1 0 2 6 8 3 0 3,
$$

with an error of about $1 . 0 8 \times 1 0 ^ { - 9 } .$ . Guaranteeing this accuracy with the error formula for the Trapezoidal Rule would require using about 8000 subintervals. 

## Arctangents

In Section 9.7, Example 5, we found a series for arctan by differentiating to get x 

$$
\frac {d}{d x} \arctan x = \frac {1}{1 + x ^ {2}} = 1 - x ^ {2} + x ^ {4} - x ^ {6} + \dots
$$

and then integrating to get 

$$
\arctan x = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \frac {x ^ {7}}{7} + \dots .
$$

However, we did not prove the term-by-term integration theorem on which this conclusion depended. We now derive the series again by integrating both sides of the finite formula 

$$
\frac {1}{1 + t ^ {2}} = 1 - t ^ {2} + t ^ {4} - t ^ {6} + \dots + (- 1) ^ {n} t ^ {2 n} + \frac {(- 1) ^ {n + 1} t ^ {2 n + 2}}{1 + t ^ {2}},\tag{2}
$$

in which the last term comes from adding the remaining terms as a geometric series with first term $a = ( - 1 ) ^ { n + 1 } t ^ { 2 n + 2 }$ and ratio $r = - t ^ { 2 }$ . Integrating both sides of Equation (2) from $t = 0 \mathrm { t o } t = x$ gives 

$$
\arctan x = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \frac {x ^ {7}}{7} + \dots + (- 1) ^ {n} \frac {x ^ {2 n + 1}}{2 n + 1} + R _ {n} (x),
$$

where 

$$
R _ {n} (x) = \int_ {0} ^ {x} \frac {(- 1) ^ {n + 1} t ^ {2 n + 2}}{1 + t ^ {2}} d t.
$$

The denominator of the integrand is greater than or equal to $1 ;$ hence 

$$
\left| R _ {n} (x) \right| \leq \int_ {0} ^ {| x |} t ^ {2 n + 2} d t = \frac {| x | ^ {2 n + 3}}{2 n + 3}.
$$

If $| x | \leq 1 .$ , the right side of this inequality approaches zero as $n  \infty .$ . Therefore, lim $R _ { n } ( x ) = 0 { \mathrm { i f } } | x | \leq 1$ and →∞n 

$$
\arctan x = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} x ^ {2 n + 1}}{2 n + 1}, \quad | x | \leq 1.\tag{3}
$$

$$
\arctan x = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \frac {x ^ {7}}{7} + \dots , \quad | x | \leq 1.
$$

We take this route instead of finding the Taylor series directly because the formulas for the higher-order derivatives of arctan are unmanageable. When we putx $x = 1$ in Equation (3), we get Leibniz’s formula: 

$$
\frac {\pi}{4} = 1 - \frac {1}{3} + \frac {1}{5} - \frac {1}{7} + \frac {1}{9} - \dots + \frac {(- 1) ^ {n}}{2 n + 1} + \dots .
$$

Because this series converges very slowly, it is not used in approximating π to many decimal places. The series for arctan converges most rapidly when x x is near zero. For that reason, people who use the series for arctan to compute x π use various trigonometric identities. 

For example, if 

$$
\alpha = \arctan \frac {1}{2} \quad \text { and } \quad \beta = \arctan \frac {1}{3},
$$

then 

$$
\tan (\alpha + \beta) = \frac {\tan \alpha + \tan \beta}{1 - \tan \alpha \tan \beta} = \frac {\frac {1}{2} + \frac {1}{3}}{1 - \frac {1}{6}} = 1 = \tan \frac {\pi}{4},
$$

and therefore, 

$$
\frac {\pi}{4} = \alpha + \beta = \arctan \frac {1}{2} + \arctan \frac {1}{3}.
$$

Now Equation (3) may be used with $x = 1 / 2$ to evaluate arctan $\left( 1 / 2 \right)$ and with $x = 1 / 3$ to give arctan $\left( 1 / 3 \right)$ . The sum of these results, multiplied by 4, gives π. 

## Evaluating Indeterminate Forms

We can sometimes evaluate indeterminate forms by expressing the functions involved as Taylor series. 

**EXAMPLE 5** Evaluate 

$$
\lim _ {x \to 1} \frac {\ln x}{x - 1}.
$$

**Solution** We represent ln x as a Taylor series in powers of $x - 1$ . This can be accomplished by calculating the Taylor series generated by ln x at $x = 1$ directly or by replacing x by $x - 1$ in the series for ln $( 1 + x )$ in Section 9.7, Example 6. Either way, we obtain 

$$
\ln x = (x - 1) - \frac {1}{2} (x - 1) ^ {2} + \dots ,
$$

from which we find that 

$$
\lim _ {x \rightarrow 1} \frac {\ln x}{x - 1} = \lim _ {x \rightarrow 1} \left(1 - \frac {1}{2} (x - 1) + \dots\right) = 1.
$$

Of course, this particular limit can be evaluated just as well using l’Hôpital’s Rule. 一

## **EXAMPLE 6** Evaluate

$$
\lim _ {x \to 0} \frac {\sin x - \tan x}{x ^ {3}}.
$$

**Solution** The Taylor series for sin x and tan x, to terms in $x ^ { 5 } ,$ are 

$$
\sin x = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \dots , \quad \tan x = x + \frac {x ^ {3}}{3} + \frac {2 x ^ {5}}{1 5} + \dots .
$$

Subtracting the series term by term, it follows that 

$$
\sin x - \tan x = - \frac {x ^ {3}}{2} - \frac {x ^ {5}}{8} - \dots = x ^ {3} \left(- \frac {1}{2} - \frac {x ^ {2}}{8} - \dots\right).
$$

Division of both sides by $x ^ { 3 }$ and taking limits then give 

$$
\lim _ {x \rightarrow 0} \frac {\sin x - \tan x}{x ^ {3}} = \lim _ {x \rightarrow 0} \left(- \frac {1}{2} - \frac {x ^ {2}}{8} - \dots\right) = - \frac {1}{2}.
$$

If we apply series to calculate lim $_ { \circ } ( ( 1 / \sin x ) - ( 1 / x ) )$ , we not only find the limit sucx 0 → cessfully but also discover an approximation formula for csc x. 

**EXAMPLE 7** Find $\operatorname* { l i m } _ { x \to 0 } { \left( { \frac { 1 } { \sin x } } - { \frac { 1 } { x } } \right) } .$ 

**Solution** Using algebra and the Taylor series for sin $x ,$ we have 

$$
\begin{array}{c} \frac {1}{\sin x} - \frac {1}{x} = \frac {x - \sin x}{x \sin x} = \frac {x - \left(x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \cdots\right)}{x \cdot \left(x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \cdots\right)} \\ = \frac {x ^ {3} \left(\frac {1}{3 !} - \frac {x ^ {2}}{5 !} + \cdots\right)}{x ^ {2} \left(1 - \frac {x ^ {2}}{3 !} + \cdots\right)} = x \cdot \frac {\frac {1}{3 !} - \frac {x ^ {2}}{5 !} + \cdots}{1 - \frac {x ^ {2}}{3 !} + \cdots}. \end{array}
$$

Therefore, 

$$
\lim _ {x \rightarrow 0} \left(\frac {1}{\sin x} - \frac {1}{x}\right) = \lim _ {x \rightarrow 0} \left(x \cdot \frac {\frac {1}{3 !} - \frac {x ^ {2}}{5 !} + \cdots}{1 - \frac {x ^ {2}}{3 !} + \cdots}\right) = 0.
$$

From the quotient on the right, we can see that if x is small, then 

$$
\frac {1}{\sin x} - \frac {1}{x} \approx x \cdot \frac {1}{3 !} = \frac {x}{6} \quad \text { or } \quad \csc x \approx \frac {1}{x} + \frac {x}{6}.
$$

## Euler’s Identity

A complex number is a number of the form $a + b i ,$ , where a and b are real numbers and $i = \sqrt { - 1 }$ (see Chapter 18). If we substitute $x = i \theta$ (with θ real) in the Taylor series for $e ^ { x }$ and use the relations 

$$
i ^ {2} = - 1, \quad i ^ {3} = i ^ {2} i = - i, \quad i ^ {4} = i ^ {2} i ^ {2} = 1, \quad i ^ {5} = i ^ {4} i = i,
$$

and so on to simplify the result, we obtain 

$$
\begin{array}{l} e ^ {i \theta} = 1 + \frac {i \theta}{1 !} + \frac {i ^ {2} \theta^ {2}}{2 !} + \frac {i ^ {3} \theta^ {3}}{3 !} + \frac {i ^ {4} \theta^ {4}}{4 !} + \frac {i ^ {5} \theta^ {5}}{5 !} + \frac {i ^ {6} \theta^ {6}}{6 !} + \dots \\ = \left(1 - \frac {\theta^ {2}}{2 !} + \frac {\theta^ {4}}{4 !} - \frac {\theta^ {6}}{6 !} + \dots\right) + i \left(\theta - \frac {\theta^ {3}}{3 !} + \frac {\theta^ {5}}{5 !} - \dots\right) = \cos \theta + i \sin \theta . \end{array}
$$

This does not prove that $e ^ { i \theta } = \cos \theta + i \sin \theta$ because we have not yet defined what it means to raise e to an imaginary power. Rather, it tells us how to define $e ^ { i \theta }$ so that its properties are consistent with the properties of the exponential function for real numbers. 

> ***DEFINITION*** For any real number θ, 
>
> $$
> e ^ {i \theta} = \cos \theta + i \sin \theta .\tag{4}
> $$
>
Equation (4), called Euler’s identity, enables us to define $e ^ { a + b i }$ to be $e ^ { a } \cdot e ^ { b i }$ for any complex number $a + b i .$ So 

$$
e ^ {a + i b} = e ^ {a} (\cos b + i \sin b).
$$

One consequence of this identity is the equation 

$$
e ^ {i \pi} = - 1.
$$

When written in the form $e ^ { i \pi } + 1 = 0$ ,  this equation combines five of the most important constants in mathematics. 

TABLE 9.1 Frequently Used Taylor Series 

$$
\frac {1}{1 - x} = 1 + x + x ^ {2} + \dots + x ^ {n} + \dots = \sum_ {n = 0} ^ {\infty} x ^ {n}, \quad | x | <   1
$$

$$
\frac {1}{1 + x} = 1 - x + x ^ {2} - \dots + (- x) ^ {n} + \dots = \sum_ {n = 0} ^ {\infty} (- 1) ^ {n} x ^ {n}, \quad | x | <   1
$$

$$
e ^ {x} = 1 + x + \frac {x ^ {2}}{2 !} + \dots + \frac {x ^ {n}}{n !} + \dots = \sum_ {n = 0} ^ {\infty} \frac {x ^ {n}}{n !}, \quad | x | <   \infty
$$

$$
\sin x = x - \frac {x ^ {3}}{3 !} + \frac {x ^ {5}}{5 !} - \dots + (- 1) ^ {n} \frac {x ^ {2 n + 1}}{(2 n + 1) !} + \dots = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} x ^ {2 n + 1}}{(2 n + 1) !}, \quad | x | <   \infty
$$

$$
\cos x = 1 - \frac {x ^ {2}}{2 !} + \frac {x ^ {4}}{4 !} - \dots + (- 1) ^ {n} \frac {x ^ {2 n}}{(2 n) !} + \dots = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} x ^ {2 n}}{(2 n) !}, \quad | x | <   \infty
$$

$$
\ln (1 + x) = x - \frac {x ^ {2}}{2} + \frac {x ^ {3}}{3} - \dots + (- 1) ^ {n - 1} \frac {x ^ {n}}{n} + \dots = \sum_ {n = 1} ^ {\infty} \frac {(- 1) ^ {n - 1} x ^ {n}}{n}, \quad - 1 <   x \leq 1
$$

$$
\arctan x = x - \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} - \dots + (- 1) ^ {n} \frac {x ^ {2 n + 1}}{2 n + 1} + \dots = \sum_ {n = 0} ^ {\infty} \frac {(- 1) ^ {n} x ^ {2 n + 1}}{2 n + 1}, \quad | x | \leq 1
$$

## EXERCISES 9.10

## Taylor Series

Find the first four nonzero terms of the Taylor series for the functions in Exercises 1–10. 1. $( 1 + x ) ^ { 1 / 2 }$ 2. $( 1 + x ) ^ { 1 / 3 }$ 3. $\left( 1 - x \right) ^ { - 3 }$ 4. $( 1 - 2 x ) ^ { 1 / 2 }$ 5. $\left( 1 + { \frac { x } { 2 } } \right) ^ { - 2 }$ 6. $\left( 1 - { \frac { x } { 3 } } \right) ^ { 4 }$ 7. $\left( 1 + x ^ { 3 } \right) ^ { - 1 / 2 }$ 8. $( 1 + x ^ { 2 } ) ^ { - 1 / 3 }$ 9. $\left( 1 + { \frac { x ^ { 2 } } { 2 } } \right) ^ { 3 / 2 }$ 10. $\frac { x } { \sqrt [ 3 ] { 1 + x } }$ 

Find the binomial series for the functions in Exercises 11–14. 11. $( 1 + x ) ^ { 4 }$ 12. $\left( 1 + x ^ { 2 } \right) ^ { 3 }$ 13. $( 1 - 2 x ) ^ { 3 }$ 14. $\left( 1 - { \frac { x } { 2 } } \right) ^ { 4 }$ 

## Approximations and Nonelementary Integrals

In Exercises 15–18, use series to estimate the integrals’ values withT an error of magnitude less than $1 0 ^ { - 5 }$ . (The answer section gives the integrals’ values rounded to seven decimal places.) 15. $\int _ { 0 } ^ { 0 . 6 } \sin x ^ { 2 } d x$ 16. $\int _ { 0 } ^ { 0 . 4 } { \frac { e ^ { - x } - 1 } { x } } d x$ 17. $\int _ { 0 } ^ { 0 . 5 } { \frac { 1 } { \sqrt { 1 + x ^ { 4 } } } } d x$ 18. $\int _ { 0 } ^ { 0 . 3 5 } { \sqrt [ { 3 } ] { 1 + x ^ { 2 } } } d x$ 

Use series to approximate the values of the integrals in Exercises 19–22T with an error of magnitude less than $1 0 ^ { - 8 }$ 19. $\int _ { 0 } ^ { 0 . 1 } { \frac { \sin { x } } { x } } d x$ 20. $\int _ { 0 } ^ { 0 . 1 } e ^ { - x ^ { 2 } } d x$ 21. $\int _ { 0 } ^ { 0 . 1 } { \sqrt { 1 + x ^ { 4 } } } d x$ 22. $\int _ { 0 } ^ { 1 } { \frac { 1 - \cos x } { x ^ { 2 } } } d x$ 

23. Estimate the error if cos t <sup>2</sup> is approximated by $1 - \frac { t ^ { 4 } } { 2 } + \frac { t ^ { 8 } } { 4 ! }$ in the integral $\int _ { 0 } ^ { 1 } \cos t ^ { 2 } d t$ 

24. Estimate the error if cos is approximated byt $1 - \frac { t } { 2 } + \frac { t ^ { 2 } } { 4 ! } - \frac { t ^ { 3 } } { 6 ! }$ in the integral $\textstyle \int _ { 0 } ^ { 1 } \cos { \sqrt { t } } d t$ 

In Exercises 25–28, find a polynomial that will approximate F x( ) throughout the given interval with an error of magnitude less than <sup>−</sup> 10 .<sup>3</sup> 

25. $F ( x ) = \int _ { 0 } ^ { x } \sin t ^ { 2 } d t ,$ 0, 1 [ ] 

26. $F ( x ) = \int _ { 0 } ^ { x } t ^ { 2 } e ^ { - t ^ { 2 } } d t .$ [ ] , 0, 1 

27. $F ( x ) = \int _ { 0 } ^ { x } \arctan { t d t } ,$ (a) [ 0, 0.5 ] (b) [ 0, 1] 

28. $F ( x ) = \int _ { 0 } ^ { x } \frac { \ln ( 1 + t ) } { t } d t ,$ (a) [ 0, 0.5 ] (b) [ 0, 1] 

## Indeterminate Forms

Use series to evaluate the limits in Exercises 29–40. 

29. $\operatorname* { l i m } _ { x \to 0 } { \frac { e ^ { x } - ( 1 + x ) } { x ^ { 2 } } }$ 

31. $\operatorname* { l i m } _ { t \to 0 } { \frac { 1 - \cos t - \left( t ^ { 2 } / 2 \right) } { t ^ { 4 } } }$ 

30. $\operatorname* { l i m } _ { x \to 0 } { \frac { e ^ { x } - e ^ { - x } } { x } }$ 

33. $\operatorname* { l i m } _ { y \to 0 } { \frac { y - \arctan y } { y ^ { 3 } } }$ 

32. $\operatorname* { l i m } _ { \theta \to 0 } { \frac { \sin \theta - \theta + ( \theta ^ { 3 } / 6 ) } { \theta ^ { 5 } } }$ 

35. $\operatorname* { l i m } _ { x \to \infty } x ^ { 2 } { \left( e ^ { - 1 / x ^ { 2 } } - 1 \right) }$ 

34. $\operatorname* { l i m } _ { y \to 0 } { \frac { \tan ^ { - 1 } y - \sin y } { y ^ { 3 } \cos y } }$ 

36. $\operatorname* { l i m } _ { x \to \infty } \left( x + 1 \right) \sin \frac { 1 } { x + 1 }$ 

37. $\operatorname* { l i m } _ { x \to 0 } { \frac { \ln ( 1 + x ^ { 2 } ) } { 1 - \cos x } }$ 

38. $\operatorname* { l i m } _ { x \to 2 } { \frac { x ^ { 2 } - 4 } { \ln ( x - 1 ) } }$ 

39. $\operatorname* { l i m } _ { x \to 0 } { \frac { \sin 3 x ^ { 2 } } { 1 - \cos 2 x } }$ 

40. $\operatorname* { l i m } _ { x \to 0 } { \frac { \ln ( 1 + x ^ { 3 } ) } { x \cdot \sin x ^ { 2 } } }$ 

## Using Table 9.1

In Exercises 41–52, use Table 9.1 to find the sum of each series. 

41. $1 + 1 + { \frac { 1 } { 2 ! } } + { \frac { 1 } { 3 ! } } + { \frac { 1 } { 4 ! } } + \cdots$ 

42. $\left( { \frac { 1 } { 4 } } \right) ^ { 3 } + \left( { \frac { 1 } { 4 } } \right) ^ { 4 } + \left( { \frac { 1 } { 4 } } \right) ^ { 5 } + \left( { \frac { 1 } { 4 } } \right) ^ { 6 } + \cdots$ 

43. $1 - { \frac { 3 ^ { 2 } } { 4 ^ { 2 } \cdot 2 ! } } + { \frac { 3 ^ { 4 } } { 4 ^ { 4 } \cdot 4 ! } } - { \frac { 3 ^ { 6 } } { 4 ^ { 6 } \cdot 6 ! } } + \cdots$ 

44. ${ \frac { 1 } { 2 } } - { \frac { 1 } { 2 \cdot 2 ^ { 2 } } } + { \frac { 1 } { 3 \cdot 2 ^ { 3 } } } - { \frac { 1 } { 4 \cdot 2 ^ { 4 } } } + \cdots$ 

45. ${ \frac { \pi } { 3 } } - { \frac { \pi ^ { 3 } } { 3 ^ { 3 } \cdot 3 ! } } + { \frac { \pi ^ { 5 } } { 3 ^ { 5 } \cdot 5 ! } } - { \frac { \pi ^ { 7 } } { 3 ^ { 7 } \cdot 7 ! } } + \cdots$ 

46. ${ \frac { 2 } { 3 } } - { \frac { 2 ^ { 3 } } { 3 ^ { 3 } \cdot 3 } } + { \frac { 2 ^ { 5 } } { 3 ^ { 5 } \cdot 5 } } - { \frac { 2 ^ { 7 } } { 3 ^ { 7 } \cdot 7 } } + \cdots$ 

47. $x ^ { 3 } + x ^ { 4 } + x ^ { 5 } + x ^ { 6 } + \cdots$ 

48. $1 - { \frac { 3 ^ { 2 } x ^ { 2 } } { 2 ! } } + { \frac { 3 ^ { 4 } x ^ { 4 } } { 4 ! } } - { \frac { 3 ^ { 6 } x ^ { 6 } } { 6 ! } } + \cdots$ 

49. $x ^ { 3 } - x ^ { 5 } + x ^ { 7 } - x ^ { 9 } + x ^ { 1 1 } - \cdots$ 

50. $x ^ { 2 } - 2 x ^ { 3 } + { \frac { 2 ^ { 2 } x ^ { 4 } } { 2 ! } } - { \frac { 2 ^ { 3 } x ^ { 5 } } { 3 ! } } + { \frac { 2 ^ { 4 } x ^ { 6 } } { 4 ! } } - \cdots$ 

51. $- 1 + 2 x - 3 x ^ { 2 } + 4 x ^ { 3 } - 5 x ^ { 4 } + \cdots$ 

52. $1 + { \frac { x } { 2 } } + { \frac { x ^ { 2 } } { 3 } } + { \frac { x ^ { 3 } } { 4 } } + { \frac { x ^ { 4 } } { 5 } } + \cdots$ 

## Theory and Examples

53. Replace x by −x in the Taylor series for ln 1 to obtain a( ) + x series for ln 1 . Then subtract this from the Taylor series for( ) − x $\ln ( 1 + x )$ to show that for x < 1, 

$$
\ln \frac {1 + x}{1 - x} = 2 \left(x + \frac {x ^ {3}}{3} + \frac {x ^ {5}}{5} + \dots\right).
$$

54. How many terms of the Taylor series for ln 1 should you( ) + x add to be sure of calculating ln 1.1 with an error of magnitude( ) less than $1 0 ^ { - 8 \cdot } $ Give reasons for your answer. 

55. According to the Alternating Series Estimation Theorem, how many terms of the Taylor series for arctan 1 would you have to add to be sure of finding $\pi / 4$ with an error of magnitude less than $1 0 ^ { - 3 } ?$ Give reasons for your answer. 

56. Show that the Taylor series for $f ( x ) = \arctan x$ diver ges for x $> 1$ 

57. Estimating pi About how many terms of the Taylor series forT arctan wx ould you have to use to evaluate each term on the righthand side of the equation 

$$
\pi = 4 8 \arctan \frac {1}{1 8} + 3 2 \arctan \frac {1}{5 7} - 2 0 \arctan \frac {1}{2 3 9}
$$

with an error of magnitude less than $1 0 ^ { - 6 } ?$ In contrast, the convergence of $\textstyle \sum _ { n = 1 } ^ { \infty } ( 1 / { \overline { { n } } } ^ { 2 } ) { \mathrm { ~ t o ~ } } \pi ^ { 2 } / 6$ is so slow that even 50 terms will not yield two-place accuracy. 

58. Use the following steps to prove that the binomial series in Equation (1) converges to $( 1 + x ) ^ { m }$ 

a. Differentiate the series 

$$
f (x) = 1 + \sum_ {k = 1} ^ {\infty} \binom {m} {k} x ^ {k}
$$

to show that 

$$
f ^ {\prime} (x) = \frac {m f (x)}{1 + x}, - 1 <   x <   1.
$$

b. Define $g ( x ) = ( 1 + x ) ^ { - m } f ( x )$ and show that $g ^ { \prime } ( x ) = 0$ 

c. From part (b), show that 

$$
f (x) = (1 + x) ^ {m}.
$$

59. a. Use the binomial series and the fact that 

$$
\frac {d}{d x} \arcsin x = (1 - x ^ {2}) ^ {- 1 / 2}
$$

to generate the first four nonzero terms of the Taylor series for arcsin . What is the radius of convergence?x 

b. Series for arccos x Use your result in part (a) to find the first five nonzero terms of the Taylor series for arccos .x 

60. a. Series for sinh $\mathbf { - 1 } \boldsymbol { x }$ Find the first four nonzero terms of the Taylor series for 

$$
\sinh^ {- 1} x = \int_ {0} ^ {x} \frac {d t}{\sqrt {1 + t ^ {2}}}.
$$

b. Use the first three terms of the series in part (a) to estimateT <sup>−</sup> sinh 0.25. <sup>1</sup> Give an upper bound for the magnitude of the estimation error. 

61. Obtain the Taylor series for $1 \big / ( 1 + x ) ^ { 2 }$ from the series for $- 1 / ( 1 + x )$ 

62. Use the Taylor series for $1 / ( 1 - x ^ { 2 } )$ to obtain a series for $2 x { \big / } { ( 1 - x ^ { 2 } ) } ^ { \bullet }$ 

63. Estimating pi The English mathematician Wallis discoveredT the formula 

$$
{\frac {\pi}{4}} = {\frac {2 \cdot 4 \cdot 4 \cdot 6 \cdot 6 \cdot 8 \cdot \cdots}{3 \cdot 3 \cdot 5 \cdot 5 \cdot 7 \cdot 7 \cdot \cdots}}.
$$

Find π to two decimal places with this formula. 

64. The complete elliptic integral of the first kind is the integral 

$$
K = \int_ {0} ^ {\pi / 2} \frac {d \theta}{\sqrt {1 - k ^ {2} \sin^ {2} \theta}},
$$

where $0 < k <$ 1 is constant. 

a. Show that the first four terms of the binomial series for $1 / { \sqrt { 1 - x } }$ are 

$$
(1 - x) ^ {- 1 / 2} = 1 + \frac {1}{2} x + \frac {1 \cdot 3}{2 \cdot 4} x ^ {2} + \frac {1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6} x ^ {3} + \dots .
$$

b. From part (a) and the reduction integral Formula $^ { 6 7 }$ at the back of the text, show that 

$$
K = \frac {\pi}{2} \left[ 1 + \left(\frac {1}{2}\right) ^ {2} k ^ {2} + \left(\frac {1 \cdot 3}{2 \cdot 4}\right) ^ {2} k ^ {4} + \left(\frac {1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6}\right) ^ {2} k ^ {6} + \dots \right].
$$

65. Series for arcsin x Integrate the binomial series for $\left( 1 - x ^ { 2 } \right) ^ { - 1 / 2 }$ to show that for $| x | < 1$ 

$$
\arcsin x = x + \sum_ {n = 1} ^ {\infty} \frac {1 \cdot 3 \cdot 5 \cdot \cdots \cdot (2 n - 1)}{2 \cdot 4 \cdot 6 \cdot \cdots \cdot (2 n)} \frac {x ^ {2 n + 1}}{2 n + 1}.
$$

66. Series for arctan forx $| x | > 1$ Derive the series 

$$
\arctan x = \frac {\pi}{2} - \frac {1}{x} + \frac {1}{3 x ^ {3}} - \frac {1}{5 x ^ {5}} + \dots , \quad x > 1
$$

$$
\arctan x = - \frac {\pi}{2} - \frac {1}{x} + \frac {1}{3 x ^ {3}} - \frac {1}{5 x ^ {5}} + \dots , x <   - 1,
$$

by integrating the series 

$$
\frac {1}{1 + t ^ {2}} = \frac {1}{t ^ {2}} \cdot \frac {1}{1 + (1 / t ^ {2})} = \frac {1}{t ^ {2}} - \frac {1}{t ^ {4}} + \frac {1}{t ^ {6}} - \frac {1}{t ^ {8}} + \dots
$$

in the first case from x to ∞ and in the second case from −∞ to x. 

Euler’s Identity 

67. Use Equation (4) to write the following powers of e in the form $a + b i .$ 

$$
\mathbf {a}. e ^ {- i \pi} \qquad \mathbf {b}. e ^ {i \pi / 4} \qquad \mathbf {c}. e ^ {- i \pi / 2}
$$

68. Use Equation (4) to show that 

$$
\cos \theta = \frac {e ^ {i \theta} + e ^ {- i \theta}}{2} \quad \text { and } \quad \sin \theta = \frac {e ^ {i \theta} - e ^ {- i \theta}}{2 i}.
$$

69. Establish the equations in Exercise 68 by combining the formal Taylor series for $e ^ { i \theta }$ and $e ^ { - i \theta } .$ 

70. Show that 

$$
\mathbf {a}. \cosh i \theta = \cos \theta , \quad \mathbf {b}. \sinh i \theta = i \sin \theta .
$$

71. By multiplying the Taylor series for $e ^ { x }$ and sin $x ,$ find the terms through $x ^ { 5 }$ of the Taylor series for $e ^ { x }$ sin . x  This series is the imaginary part of the series for 

$$
e ^ {x} \cdot e ^ {i x} = e ^ {(1 + i) x}.
$$

Use this fact to check your answer. For what values of x should the series for $e ^ { x }$ sin x converge? 

72. When a and b are real, we define $e ^ { ( a + i b ) x }$ with the equation 

$$
e ^ {(a + i b) x} = e ^ {a x} \cdot e ^ {i b x} = e ^ {a x} (\cos b x + i \sin b x).
$$

Differentiate the right-hand side of this equation to show that 

$$
\frac {d}{d x} e ^ {(a + i b) x} = (a + i b) e ^ {(a + i b) x}.
$$

Thus the familiar rule $( d / d x ) e ^ { k x } = k e ^ { k x }$ holds for k complex as well as real. 

73. Use the definition of $e ^ { i \theta }$ to show that for any real numbers $\theta , \theta _ { 1 } ,$ and $\theta _ { 2 } ,$ 

a. $e ^ { i \theta _ { 1 } } e ^ { i \theta _ { 2 } } = e ^ { i ( \theta _ { 1 } + \theta _ { 2 } ) } ,$ 

b. $e ^ { - i \theta } = 1 / e ^ { i \theta } .$ 

74. Two complex numbers $a + i b$ and $c + i d$ are equal if and only if a = c and b d= . Use this fact to evaluate 

$$
\int e ^ {a x} \cos b x d x \quad \text { and } \quad \int e ^ {a x} \sin b x d x
$$

from 

$$
\int e ^ {(a + i b) x} d x = \frac {a - i b}{a ^ {2} + b ^ {2}} e ^ {(a + i b) x} + C,
$$

where ${ \cal C } = { \cal C } _ { 1 } + i { \cal C } _ { 2 }$ is a complex constant of integration. 

## CHAPTER 9 Questions to Guide Your Review

1. What is an infinite sequence? What does it mean for such a sequence to converge? To diverge? Give examples. 

2. What is a monotonic sequence? Under what circumstances does such a sequence have a limit? Give examples. 

3. What theorems are available for calculating limits of sequences? Give examples. 

4. What theorem sometimes enables us to use l’Hôpital’s Rule to calculate the limit of a sequence? Give an example. 

5. What are the six commonly occurring limits in Theorem 5 that arise frequently when you work with sequences and series? 

6. What is an infinite series? What does it mean for such a series to converge? To diverge? Give examples. 

7. What is a geometric series? When does such a series converge? Diverge? When it does converge, what is its sum? Give examples. 

8. Besides geometric series, what other convergent and divergent series do you know? 

9. What is the nth-Term Test for Divergence? What is the idea behind the test? 

10. What can be said about term-by-term sums and differences of convergent series? About constant multiples of convergent and divergent series? 

11. What happens if you add a finite number of terms to a convergent series? A divergent series? What happens if you delete a finite number of terms from a convergent series? A divergent series? 

12. How do you reindex a series? Why might you want to do this? 

13. Under what circumstances will an infinite series of nonnegative terms converge? Diverge? Why study series of nonnegative terms? 

14. What is the Integral Test? What is the reasoning behind it? Give an example of its use. 

15. When do p-series converge? Diverge? How do you know? Give examples of convergent and divergent p-series. 

16. What are the Direct Comparison Test and the Limit Comparison Test? What is the reasoning behind these tests? Give examples of their use. 

17. What are the Ratio and Root Tests? Do they always give you the information you need to determine convergence or divergence? Give examples. 

18. What is absolute convergence? Conditional convergence? How are the two related? 

19. What is an alternating series? What theorem is available for determining the convergence of such a series? 

20. How can you estimate the error involved in approximating the sum of an alternating series with one of the series’ partial sums? What is the reasoning behind the estimate? 

21. What do you know about rearranging the terms of an absolutely convergent series? Of a conditionally convergent series? 

22. What is a power series? How do you test a power series for convergence? What are the possible outcomes? 

23. What are the basic facts about 

a. sums, differences, and products of power series? 

b. substitution of a function for x in a power series? 

c. term-by-term differentiation of power series? 

d. term-by-term integration of power series? 

e. Give examples. 

24. What is the Taylor series generated by a function f ( ) at a pointx $x = a ?$ What information do you need about f to construct the series? Give an example. 

25. What is a Maclaurin series? 

26. Does a Taylor series always converge to its generating function? Explain. 

27. What are Taylor polynomials? Of what use are they? 

28. What is Taylor’s formula? What does it say about the errors involved in using Taylor polynomials to approximate functions? In particular, what does Taylor’s formula say about the error in a linearization? A quadratic approximation? 

29. What is the binomial series? On what interval does it converge? How is it used? 

30. How can you sometimes use power series to estimate the values of nonelementary definite integrals? To find limits? 

31. What are the Taylor series for $1 / ( 1 - x ) , 1 / ( 1 + x ) , e ^ { x }$ , sin ,  x cos , ln 1 , and x x( ) + arctan ? How do x you estimate the errors involved in replacing these series with their partial sums? 

## CHAPTER 9 Practice Exercises

## Determining Convergence of Sequences

Which of the sequences whose nth terms appear in Exercises 1–18 converge, and which diverge? Find the limit of each convergent sequence. 

1. $a _ { n } = 1 + { \frac { ( - 1 ) ^ { n } } { n } }$ 

2. $a _ { n } = { \frac { 1 - ( - 1 ) ^ { n } } { \sqrt { n } } }$ 

3. $a _ { n } = { \frac { 1 - 2 ^ { n } } { 2 ^ { n } } }$ 

4. $a _ { n } = 1 + ( 0 . 9 ) ^ { n }$ 

5. $a _ { n } = \sin { \frac { n \pi } { 2 } }$ 

6. $a _ { n } \ = \sin n \pi$ 

7. $a _ { n } = { \frac { \ln ( n ^ { 2 } ) } { n } }$ 

8. $a _ { n } = { \frac { \ln ( 2 n + 1 ) } { n } }$ 

9. $a _ { n } = { \frac { n + \ln n } { n } }$ 

10. $a _ { n } = { \frac { \ln ( 2 n ^ { 3 } + 1 ) } { n } }$ 

11. $a _ { n } \ : = \ : \left( { \frac { n - 5 } { n } } \right) ^ { n }$ 

12. $a _ { n } = \left( 1 + { \frac { 1 } { n } } \right) ^ { - n }$ 

13. $a _ { n } = { \sqrt [ n ] { \frac { 3 ^ { n } } { n } } }$ 

14. $a _ { n } = \left( { \frac { 3 } { n } } \right) ^ { 1 / n }$ 

15. $a _ { n } = n ( 2 ^ { 1 / n } \ : - \ : 1 )$ 

16. $a _ { n } = { \sqrt [ n ] { 2 n + 1 } }$ 

17. $a _ { n } = { \frac { ( n + 1 ) ! } { n ! } }$ 

18. $a _ { n } = { \frac { ( - 4 ) ^ { n } } { n ! } }$ 

## Convergent Series

Find the sums of the series in Exercises 19–24. 

19. $\sum _ { n = 3 } ^ { \infty } { \frac { 1 } { ( 2 n - 3 ) ( 2 n - 1 ) } }$ 

$$
\sum_ {n = 2} ^ {\infty} \frac {- 2}{n (n + 1)}
$$

21. $\sum _ { n = 1 } ^ { \infty } { \frac { 9 } { ( 3 n - 1 ) ( 3 n + 2 ) } }$ 

22. $\sum _ { n = 3 } ^ { \infty } { \frac { - 8 } { ( 4 n - 3 ) ( 4 n + 1 ) } }$ 

23. $\sum _ { n = 0 } ^ { \infty } e ^ { - n }$ 

24. $\sum _ { n = 1 } ^ { \infty } ( - 1 ) ^ { n } { \frac { 3 } { 4 ^ { n } } }$ 

## Determining Convergence of Series

Which of the series in Exercises 25–44 converge absolutely, which converge conditionally, and which diverge? Give reasons for your answers. 

25. $\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { \sqrt { n } } }$ 

26. $\sum _ { n = 1 } ^ { \infty } { \frac { - 5 } { n } }$ 

27. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { \sqrt { n } } }$ 

28. $\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { 2 n ^ { 3 } } }$ 

29. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { \ln ( n + 1 ) } }$ 

30. $\sum _ { n = 2 } ^ { \infty } { \frac { 1 } { n ( \ln n ) ^ { 2 } } }$ 

31. $\sum _ { n = 1 } ^ { \infty } { \frac { \ln n } { n ^ { 3 } } }$ 

32. $\sum _ { n = 3 } ^ { \infty } { \frac { \ln n } { \ln ( \ln n ) } }$ 

33. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { n { \sqrt { n ^ { 2 } + 1 } } } }$ 

34. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } 3 n ^ { 2 } } { n ^ { 3 } + 1 } }$ 

35. $\sum _ { n = 1 } ^ { \infty } { \frac { n + 1 } { n ! } }$ 

36. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } ( n ^ { 2 } + 1 ) } { 2 n ^ { 2 } + n - 1 } }$ 

37. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 3 ) ^ { n } } { n ! } }$ 

38. $\sum _ { n = 1 } ^ { \infty } { \frac { 2 ^ { n } 3 ^ { n } } { n ^ { n } } }$ 

39. $\sum _ { n = 1 } ^ { \infty } { \frac { 1 } { \sqrt { n ( n + 1 ) ( n + 2 ) } } }$ 

40. $\sum _ { n = 2 } ^ { \infty } { \frac { 1 } { n { \sqrt { n ^ { 2 } - 1 } } } }$ 

41. $1 - \left( { \frac { 1 } { \sqrt { 3 } } } \right) ^ { 2 } + \left( { \frac { 1 } { \sqrt { 3 } } } \right) ^ { 4 } - \left( { \frac { 1 } { \sqrt { 3 } } } \right) ^ { 6 } + \left( { \frac { 1 } { \sqrt { 3 } } } \right) ^ { 8 } - \cdots$ 

42. $\sum _ { n = 0 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { e ^ { - n } + 1 } }$ 

43. $\sum _ { n = 0 } ^ { \infty } { \frac { 1 } { 1 + r + r ^ { 2 } + \cdots + r ^ { n } } }$ $\mathrm { f o r } - 1 < r < 1$ 

44. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { \sqrt { n + 1 0 0 } - { \sqrt { n } } } }$ 

45. ${ \mathrm { P r o v e ~ t h a t } } \sum _ { n = 3 } ^ { \infty } { \frac { 1 } { n ( \ln n ) { \bigl ( } \ln ( \ln n ) { \bigr ) } ^ { p } } }$ converges if and only $\mathrm { i f } \ p > 1$ 

46. Prove that $\sum _ { n = 1 } ^ { \infty } { \frac { \ln n } { n ^ { p } } }$ converges if and only i $p > 1$ 

## Power Series

In Exercises 47–56, (a) find the series’ radius and interval of convergence. Then identify the values of x for which the series converges (b) absolutely and (c) conditionally. 

47. $\sum _ { n = 1 } ^ { \infty } { \frac { ( x + 4 ) ^ { n } } { n 3 ^ { n } } }$ 

48. $\sum _ { n = 1 } ^ { \infty } { \frac { ( x - 1 ) ^ { 2 n - 2 } } { ( 2 n - 1 ) ! } }$ 

49. $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n - 1 } ( 3 x - 1 ) ^ { n } } { n ^ { 2 } } }$ 

50. $\sum _ { n = 0 } ^ { \infty } { \frac { ( n + 1 ) ( 2 x + 1 ) ^ { n } } { ( 2 n + 1 ) 2 ^ { n } } }$ 

51. $\sum _ { n = 1 } ^ { \infty } { \frac { x ^ { n } } { n ^ { n } } }$ 

52. $\sum _ { n = 1 } ^ { \infty } { \frac { x ^ { n } } { \sqrt { n } } }$ 

53. $\sum _ { n = 0 } ^ { \infty } { \frac { ( n + 1 ) x ^ { 2 n - 1 } } { 3 ^ { n } } }$ 

54. $\sum _ { n = 0 } ^ { \infty } { \frac { ( - 1 ) ^ { n } ( x - 1 ) ^ { 2 n + 1 } } { 2 n + 1 } }$ 

55. $\sum _ { n = 1 } ^ { \infty } { \bigl ( } \operatorname { c s c h } n { \bigr ) } x ^ { n }$ 

56. $\sum _ { n = 1 } ^ { \infty } { \bigl ( } \operatorname { c o t h } n { \bigr ) } x ^ { n }$ 

## Maclaurin Series

Each of the series in Exercises 57–62 is the value of the Taylor series at x = 0 of a function f ( ) at a particular point. What function andx what point? What is the sum of the series? 

57. $1 - { \frac { 1 } { 4 } } + { \frac { 1 } { 1 6 } } - \cdots + ( - 1 ) ^ { n } { \frac { 1 } { 4 ^ { n } } } + \cdots$ 

58. ${ \frac { 2 } { 3 } } - { \frac { 4 } { 1 8 } } + { \frac { 8 } { 8 1 } } - \cdots + ( - 1 ) ^ { n - 1 } { \frac { 2 ^ { n } } { n 3 ^ { n } } } + \cdots$ 

59. $\pi - { \frac { \pi ^ { 3 } } { 3 ! } } + { \frac { \pi ^ { 5 } } { 5 ! } } - \cdots + ( - 1 ) ^ { n } { \frac { \pi ^ { 2 n + 1 } } { ( 2 n + 1 ) ! } } + \cdots$ 

60. $1 - { \frac { \pi ^ { 2 } } { 9 \cdot 2 ! } } + { \frac { \pi ^ { 4 } } { 8 1 \cdot 4 ! } } - \cdots + ( - 1 ) ^ { n } { \frac { \pi ^ { 2 n } } { 3 ^ { 2 n } ( 2 n ) ! } } + \cdots$ 

61. $1 + \ln 2 + { \frac { ( \ln 2 ) ^ { 2 } } { 2 ! } } + \cdots + { \frac { ( \ln 2 ) ^ { n } } { n ! } } + \cdots$ 

62. $\begin{array} { c } { { \displaystyle { \frac { 1 } { \sqrt { 3 } } - \frac { 1 } { 9 \sqrt { 3 } } + \frac { 1 } { 4 5 \sqrt { 3 } } - \cdots } } } \\ { { + \left( - 1 \right) ^ { n - 1 } \displaystyle { \frac { 1 } { \left( 2 n - 1 \right) \left( \sqrt { 3 } \right) ^ { 2 n - 1 } } + \cdots } } } \end{array}$ 

Find Taylor series at $x = 0$ for the functions in Exercises 63–70. 

63. $\frac { 1 } { 1 - 2 x }$ 

64. $\frac { 1 } { 1 + x ^ { 3 } }$ 

65. sin πx 

66. $\sin { \frac { 2 x } { 3 } }$ 

67. $\cos ( x ^ { 5 / 3 } )$ 

68. $\cos { \frac { x ^ { 3 } } { \sqrt { 5 } } }$ 

69. $e ^ { ( \pi x / 2 ) }$ 

70. $e ^ { - x ^ { 2 } }$ 

## Taylor Series

In Exercises 71–74, find the first four nonzero terms of the Taylor series generated by $f \operatorname { a t } x = a .$ 

71. $f ( x ) = { \sqrt { 3 + x ^ { 2 } } } \quad { \mathrm { a t } } \quad x = - 1$ 

72. $f ( x ) = 1 / ( 1 - x ) \quad { \mathrm { a t } } \quad x = 2$ 

73. $f ( x ) = 1 / ( x + 1 ) \quad { \mathrm { a t } } \quad x = 3$ 

74. $f ( x ) = 1 / x \quad { \mathrm { a t } } \quad x = a > 0$ 

## Nonelementary Integrals

Use series to approximate the values of the integrals in Exercises 75–78 with an error of magnitude less than $1 0 ^ { - 8 } .$ (The answer section gives the integrals’ values rounded to ten decimal places.) 

75. $\int _ { 0 } ^ { 1 / 2 } e ^ { - x ^ { 3 } } d x$ 

76. $\int _ { 0 } ^ { 1 } x \sin { ( x ^ { 3 } ) } d x$ 

77. $\int _ { 0 } ^ { 1 / 2 } { \frac { \tan ^ { - 1 } x } { x } } d x$ 

78. $\int _ { 0 } ^ { 1 / 6 4 } { \frac { \arctan x } { \sqrt { x } } } d x$ 

Using Series to Find Limits 

In Exercises 79–84: 

a. Use power series to evaluate the limit. 

b. Then use a grapher to support your calculation.T 

x7 sin 79. lim → −e x 1x 0 2 

80. $\operatorname* { l i m } _ { \theta \to 0 } { \frac { e ^ { \theta } - e ^ { - \theta } - 2 \theta } { \theta - \sin \theta } }$ 

81. $\operatorname* { l i m } _ { t \to 0 } \left( { \frac { 1 } { 2 - 2 \cos t } } - { \frac { 1 } { t ^ { 2 } } } \right)$ 

82. $\operatorname* { l i m } _ { h \to 0 } { \frac { ( \sin h ) / h - \cos h } { h ^ { 2 } } }$ 

83. $\operatorname* { l i m } _ { z \to 0 } { \frac { 1 - \cos ^ { 2 } z } { \ln ( 1 - z ) + \sin z } }$ 

84. $\operatorname * { l i m } _ { y \to 0 } { \frac { y ^ { 2 } } { \cos y \mathrm { ~ - ~ } \cosh y } }$ 

Theory and Examples 

85. Use a series representation of sin 3x to find values of r and s for which 

$$
\lim _ {x \rightarrow 0} \left(\frac {\sin 3 x}{x ^ {3}} + \frac {r}{x ^ {2}} + s\right) = 0.
$$

86. Compare the accuracies of the approximations sin x x ≈T and sin x ≈ $6 x / ( 6 + x ^ { 2 } )$ by comparing the graphs of f( ) sin andx x x= − $g ( x ) = \sin x - \bigl ( 6 x / ( 6 + x ^ { 2 } ) \bigr )$ .) Describe what you find. 

87. Find the radius of convergence of the series 

$$
\sum_ {n = 1} ^ {\infty} \frac {2 \cdot 5 \cdot 8 \cdot \cdots \cdot (3 n - 1)}{2 \cdot 4 \cdot 6 \cdot \cdots \cdot (2 n)} x ^ {n}.
$$

88. Find the radius of convergence of the series 

$$
\sum_ {n = 1} ^ {\infty} \frac {3 \cdot 5 \cdot 7 \cdot \cdots \cdot (2 n + 1)}{4 \cdot 9 \cdot 1 4 \cdot \cdots \cdot (5 n - 1)} (x - 1) ^ {n}.
$$

89. Find a closed-form formula for the nth partial sum of the series $et { } { _ { n = 2 } ^ { \infty } } \ln ( 1 - ( 1 / n ^ { 2 } ) )$ and use it to determine the convergence or divergence of the series. 

90. Evaluate $\textstyle \sum _ { k = 2 } ^ { \infty } ( 1 / ( k ^ { 2 } - 1 ) )$ by finding the limits as $n  \infty$ of the series’ nth partial sum. 

91. a. Find the interval of convergence of the series 

$$
\begin{array}{r l} y & = 1 + \frac {1}{6} x ^ {3} + \frac {1}{1 8 0} x ^ {6} + \dots \\ & \quad + \frac {1 \cdot 4 \cdot 7 \cdot \cdots \cdot (3 n - 2)}{(3 n) !} x ^ {3 n} + \dots . \end{array}
$$

b. Show that the function defined by the series satisfies a differential equation of the form 

$$
\frac {d ^ {2} y}{d x ^ {2}} = x ^ {a} y + b,
$$

and find the values of the constants a and b. 

92. a. Find the Maclaurin series for the function $x ^ { 2 } / ( 1 + x )$ 

b. Does the series converge at $x = 1 2$ Explain. 

93. If $\sum { \infty } a _ { n }$ and $\sum { \sp { \infty } } b _ { n }$ are convergent series of nonnegative numbers, can anything be said about $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n } b _ { n } ?$ Give reasons for your answer. 

94. If $\sum { \infty } a _ { n }$ and $\sum { _ { n = 1 } ^ { \infty } b _ { n } }$ are divergent series of nonnegative numbers, can anything be said about $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n } b _ { n } ?$ Give reasons for your answer. 

95. Prove that the sequence $\{ x _ { n } \}$ and the series $\textstyle \sum _ { k = 1 } ^ { \infty } ( x _ { k + 1 } - x _ { k } )$ both converge or both diverge. 

96. Prove that $\textstyle \sum _ { n = 1 } ^ { \infty } { \bigl ( } a _ { n } / ( 1 + a _ { n } ) { \bigr ) }$ converges if $a  { n } > 0$ for all n and $\sum { \infty } a _ { n }$ converges. 

97. Suppose that $a _ { 1 } , a _ { 2 } , a _ { 3 } , \ldots , a _ { n }$ are positive numbers satisfying the following conditions: 

$$
a _ {1} \geq a _ {2} \geq a _ {3} \geq \dots ;
$$

ii) the series $a _ { 2 } + a _ { 4 } + a _ { 8 } + a _ { 1 6 } + \cdots$ diverges. 

Show that the series 

$$
\frac {a _ {1}}{1} + \frac {a _ {2}}{2} + \frac {a _ {3}}{3} + \dots
$$

diverges. 

98. Use the result in Exercise 97 to show that 

$$
1 + \sum_ {n = 2} ^ {\infty} \frac {1}{n \ln n}
$$

diverges. 

99. Show that if $a _ { n } > 0 { \mathrm { a n d } } \sum _ { n = 1 } ^ { \infty } a _ { n }$ converges, then $\sum _ { n = 1 } ^ { \infty } { \frac { \sqrt { a _ { n } } } { n } }$ converges. 

100. Determine whether $\cdot \sum _ { n = 1 } ^ { \infty } b _ { n }$ converges or diverges. 

$$
\mathbf {a}. b _ {1} = 1, \quad b _ {n + 1} = (- 1) ^ {n} \frac {n + 1}{3 n + 2} b _ {n}
$$

$$
\mathbf {b}. b _ {1} = 3, \quad b _ {n + 1} = \frac {n}{\ln n} b _ {n}
$$

101. Assume that $b _ { n } \ > \ 0$ and $\sum _ { n = 1 } ^ { \infty } b _ { n }$ converges. What, if anything, can be said about the following series? 

$$
\sum_ {n = 1} ^ {\infty} \tan (b _ {n})
$$

$$
\sum_ {n = 1} ^ {\infty} \ln (1 + b _ {n})
$$

$$
\mathbf {c}. \sum_ {n = 1} ^ {\infty} \ln (2 + b _ {n})
$$

102. Consider the convergent series $\sum _ { n = 1 } ^ { \infty } { \frac { ( - 1 ) ^ { n } } { e ^ { n } + e ^ { c n } } }$ , where c is a constant. What should c be so that the first 10 terms of the series estimate the sum of the entire series with an error of less than 0.00001? 

103. Assume that the following sequence has a limit L. Find the value of L. 

$$
4 ^ {1 / 3}, (4 (4 ^ {1 / 3})) ^ {1 / 3}, (4 (4 (4 ^ {1 / 3})) ^ {1 / 3}) ^ {1 / 3}, (4 (4 (4 (4 ^ {1 / 3})) ^ {1 / 3}) ^ {1 / 3}) ^ {1 / 3}, \dots
$$

104. Consider the infinite sequence of shaded right triangles in the accompanying diagram. Compute the total area of the triangles. 

![[a7b3708ce2b1a747d60f5449d7f8ca95bf70cab2dd4d7585ab26edea562e97f8.jpg|image]]


## CHAPTER 9 Additional and Advanced Exercises

## Determining Convergence of Series

Which of the series $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n }$ defined by the formulas in Exercises 1–4 converge, and which diverge? Give reasons for your answers. 

$$
\cdot \sum_ {n = 1} ^ {\infty} \frac {1}{(3 n - 2) ^ {n + (1 / 2)}}
$$

$$
\sum_ {n = 1} ^ {\infty} \frac {(\tan^ {- 1} n) ^ {2}}{n ^ {2} + 1}
$$

3. $\sum _ { n = 1 } ^ { \infty } ( - 1 ) ^ { n } \operatorname { t a n h } n$ 

$$
\sum_ {n = 2} ^ {\infty} \frac {\log_ {n} (n !)}{n ^ {3}}
$$

Which of the series $\sum { \infty } a _ { n }$ defined by the formulas in Exercises 5–8 converge, and which diverge? Give reasons for your answers. 

$$
\mathbf {5 .} a _ {1} = 1, \quad a _ {n + 1} = \frac {n (n + 1)}{(n + 2) (n + 3)} a _ {n}
$$

(Hint: Write out several terms, see which factors cancel, and then generalize.) 

$$
\mathbf {6 .} a _ {1} = a _ {2} = 7, \quad a _ {n + 1} = \frac {n}{(n - 1) (n + 1)} a _ {n} \quad \text { if } n \geq 2
$$

7. = = = a a a <sub>+</sub> 1, <sub>n</sub> <sub>1 2</sub> <sub>1</sub> + a 1 1 ≥ n if 2 

8. $a _ { n } \ = 1 / 3 ^ { n }$ if n is odd, $a _ { n } \ = \ n / 3 ^ { n }$ if n is even 

Choosing Centers for Taylor Series 

Taylor’s formula 

$$
\begin{array}{l} f (x) = f (a) + f ^ {\prime} (a) (x - a) + \frac {f ^ {\prime \prime} (a)}{2 !} (x - a) ^ {2} + \dots \\ \qquad + \frac {f ^ {(n)} (a)}{n !} (x - a) ^ {n} + \frac {f ^ {(n + 1)} (c)}{(n + 1) !} (x - a) ^ {n + 1} \end{array}
$$

expresses the value of f at x in terms of the values of f and its derivatives at $x = a .$ In numerical computations, we therefore need a to be a point where we know the values of f and its derivatives. We also need a to be close enough to the values of f in which we are interested to make $( x - a ) ^ { n + 1 }$ so small we can neglect the remainder. 

In Exercises 9–14, what Taylor series would you choose to represent the function near the given value of x? (There may be more than one good answer.) Write out the first four nonzero terms of the series you choose. 

10. sin nearx $x = 6 . 3$ 

11. e x near 0.4 x = 

12. ln near 1.3 x x = 

13. cos nearx $x = 6 9$ 

## Theory and Examples

15. Let a and b be constants with $0 < a < b .$ . Does the sequence $\left\{ ( a ^ { n } + b ^ { n } ) ^ { 1 / n } \right\}$ converge? If it does converge, what is the limit? 16. Find the sum of the infinite series 

$$
\begin{array}{l} 1 + \frac {2}{1 0} + \frac {3}{1 0 ^ {2}} + \frac {7}{1 0 ^ {3}} + \frac {2}{1 0 ^ {4}} + \frac {3}{1 0 ^ {5}} + \frac {7}{1 0 ^ {6}} + \frac {2}{1 0 ^ {7}} \\ + \frac {3}{1 0 ^ {8}} + \frac {7}{1 0 ^ {9}} + \dots . \end{array}
$$

17. Evaluate 

$$
\sum_ {n = 0} ^ {\infty} \int_ {n} ^ {n + 1} \frac {1}{1 + x ^ {2}} d x.
$$

18. Find all values of x for which 

$$
\sum_ {n = 1} ^ {\infty} \frac {n x ^ {n}}{(n + 1) (2 x + 1) ^ {n}}
$$

converges absolutely. 

![[f681366b583940f448d2ced2a909b3f40e6ee22698986133f3f2e75bd55c813c.jpg|image]]


19. a. Does the value of 

$$
\lim _ {n \rightarrow \infty} \left(1 - \frac {\cos (a / n)}{n}\right) ^ {n}, \quad a \text {   constant },
$$

appear to depend on the value of a? If so, how? 

b. Does the value of 

$$
\lim _ {n \rightarrow \infty} \left(1 - \frac {\cos (a / n)}{b n}\right) ^ {n}, \quad a \text {   and   } b \text {   constant,   } b \neq 0,
$$

appear to depend on the value of b? If so, how? 

c. Use calculus to confirm your findings in parts (a) and (b). 20. Show that if $\sum _ { n = 1 } ^ { \infty } a _ { n }$ converges, then 

$$
\sum_ {n = 1} ^ {\infty} \left(\frac {1 + \sin a _ {n}}{2}\right) ^ {n}
$$

converges. 

21. Find a value for the constant b that will make the radius of convergence of the power series 

$$
\sum_ {n = 2} ^ {\infty} \frac {b ^ {n} x ^ {n}}{\ln n}
$$

equal to 5. 

22. How do you know that the functions sin x, ln x, and $e ^ { x }$ are not polynomials? Give reasons for your answer. 

23. Find the value of a for which the limit 

$$
\lim _ {x \rightarrow 0} \frac {\sin (a x) - \sin x - x}{x ^ {3}}
$$

is finite, and evaluate the limit. 

24. Find values of a and b for which 

$$
\lim _ {x \rightarrow 0} \frac {\cos (a x) - b}{2 x ^ {2}} = - 1.
$$

25. Raabe’s (or Gauss’s) Test The following test, which we state without proof, is an extension of the Ratio Test. 

Raabe’s Test: If $\sum _ { n = 1 } ^ { \infty } u _ { n }$ is a series of positive constants and there exist constants $C , K ,$ , and N such that 

$$
\frac {u _ {n}}{u _ {n + 1}} = 1 + \frac {C}{n} + \frac {f (n)}{n ^ {2}},
$$

where $| f ( n ) | < K$ for $n \geq N ,$ then $\textstyle \sum _ { n = 1 } ^ { \infty } u _ { n }$ converges if $C > 1$ and diverges if $\ l \textsc { c } \leq 1$ 

Show that the results of Raabe’s Test agree with what you know about the series $\textstyle \sum _ { n = 1 } ^ { \infty } ( 1 / n ^ { 2 } )$ and $\sum _ { n = 1 } ^ { \infty } \left( 1 / n \right)$ 

26. (Continuation of Exercise 25.) Suppose that the terms of $\textstyle \sum _ { n = 1 } ^ { \infty } u _ { n }$ are defined recursively by the formulas 

$$
u _ {1} = 1, \quad u _ {n + 1} = \frac {(2 n - 1) ^ {2}}{(2 n) (2 n + 1)} u _ {n}.
$$

Apply Raabe’s Test to determine whether the series converges. 

27. Suppose that $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n }$ converges, $a _ { n } \neq 1 ,$ , and $a  { n } > 0$ for all n. a. Show that $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n } ^ { 2 }$ converges. 

b. Does $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n } / ( 1 - a _ { n } )$ ) converge? Explain. 

28. (Continuation of Exercise 27.) If $\textstyle \sum _ { n = 1 } ^ { \infty } a _ { n }$ converges, and if $0 < a _ { n } \ < \ 1$ for all n, show that $\scriptstyle \sum _ { n = 1 } ^ { \infty } \ln ( 1 - a _ { n } )$ converges. (Hint: First show that ln $\displaystyle ( 1 - a _ { n } ) | \leq a _ { n } / ( 1 - a _ { n } ) . )$ 

29. Nicole Oresme’s Theorem Prove Nicole Oresme’s Theorem: 

$$
1 + \frac {1}{2} \cdot 2 + \frac {1}{4} \cdot 3 + \dots + \frac {n}{2 ^ {n - 1}} + \dots = 4.
$$

(Hint: Differentiate both sides of the equation $1 / ( 1 - x ) =$ $1 + \textstyle \sum _ { n = 1 } ^ { \infty } x ^ { n } . )$ 

30. a. Find a power series representation of ${ \frac { e ^ { x } - 1 } { x } } .$ 

b. By differentiating the series in part (a) term by term, show that $\sum _ { n = 1 } ^ { \infty } { \frac { n } { ( n + 1 ) ! } } = 1$ 

31. a. Find a power series representation of $e ^ { - x ^ { 2 } }$ 

b. By differentiating the series in part (a) twice term-by-term, show that $\sum _ { n = 1 } ^ { \infty } ( - 1 ) ^ { n + 1 } { \frac { 2 n + 1 } { 2 ^ { n } n ! } } = 1 .$ 

32. a. Show that 

$$
\sum_ {n = 1} ^ {\infty} \frac {n (n + 1)}{x ^ {n}} = \frac {2 x ^ {2}}{(x - 1) ^ {3}}
$$

for $| x | > 1$ by differentiating the identity 

$$
\sum_ {n = 1} ^ {\infty} x ^ {n + 1} = \frac {x ^ {2}}{1 - x}
$$

twice, multiplying the result by x, and then replacing x by $1 / x$ . 

b. Use part (a) to find the real solution greater than 1 of the equation 

$$
x = \sum_ {n = 1} ^ {\infty} \frac {n (n + 1)}{x ^ {n}}.
$$

## 33. Quality control

a. Differentiate the series 

$$
\frac {1}{1 - x} = 1 + x + x ^ {2} + \dots + x ^ {n} + \dots
$$

to obtain a series for $1 / ( 1 - x ) ^ { 2 } .$ 

b. In one throw of two dice, the probability of getting a roll of 7 is $p = 1 / 6$ . If you throw the dice repeatedly, the probability that a 7 will appear for the first time at the nth throw is $q ^ { n - 1 } p ,$ where $q = 1 - p = 5 / 6$ . The expected number of throws until a 7 first appears is $\scriptstyle \sum _ { n = 1 } ^ { \infty } n q ^ { n - 1 } p .$ . Find the sum of this series. 

c. As an engineer applying statistical control to an industrial operation, you inspect items taken at random from the assembly line. You classify each sampled item as either “good” or “bad.” If the probability of an item’s being good is p and of an item’s being bad is $q = 1 - p $ , the probability that the first bad item found is the nth one inspected is $p ^ { n - 1 } q .$ The average number inspected up to and including the first bad item found i $s \sum _ { n = 1 } ^ { \infty } n p ^ { n - 1 } q .$ Evaluate this sum, assuming $0 < p < 1$ 

34. Expected value Suppose that a random variable X may assume the values 1, 2, 3, … , with probabilities $p _ { 1 } , p _ { 2 } , p _ { 3 } , \ldots$ ,  where $p _ { k }$ is the probability that X equals $k ( k = 1 , 2 , 3 , . . . )$ .  Suppose also that $p _ { k } \geq 0$ and that $\textstyle \sum _ { k = 1 } ^ { \infty } p _ { k } \ = 1$ . The expected value of $X ,$ denoted by E( ), is the numberX $\sum _ { k = 1 } ^ { \infty } k p _ { k }$ , provided the series converges. In each of the following cases, show that $\textstyle \sum _ { k = 1 } ^ { \infty } p _ { k } \ = \ 1$ and find E( ) if it exists. (X Hint: See Exercise 33.) 

$$
\mathbf {a}. p _ {k} = 2 ^ {- k} \quad \mathbf {b}. p _ {k} = \frac {5 ^ {k - 1}}{6 ^ {k}}
$$

$$
\mathbf {c}. p _ {k} = \frac {1}{k (k + 1)} = \frac {1}{k} - \frac {1}{k + 1}
$$

![[d6429d1a5cd4df9b808d2439991a0ffe53451adad7eaeb5078e04d9fd8fb69b0.jpg|image]]


35. Safe and effective dosage The concentration in the bloodT resulting from a single dose of a drug normally decreases with time as the drug is eliminated from the body. Doses may therefore need to be repeated periodically to keep the concentration from dropping below some particular level. One model for the effect of repeated doses gives the residual concentration just before the $( n + 1$ st dose as) 

$$
R _ {n} = C _ {0} e ^ {- k t _ {0}} + C _ {0} e ^ {- 2 k t _ {0}} + \dots + C _ {0} e ^ {- n k t _ {0}},
$$

where $C _ { 0 } =$ the change in concentration achievable by a single dose $( \mathrm { m g / m L } ) , k =$ the elimination constant $( \mathbf { h } ^ { - 1 } )$ , and $t _ { 0 } =$ time between doses (h). See the accompanying figure. 

![[2157f0484a036cb3d0fa91947be0796a6150f89f01d20ead0d061a3a05058f2f.jpg|image]]


a. Write $R _ { n }$ in closed from as a single fraction, and find 

$$
R = \lim _ {n \to \infty} R _ {n}.
$$

b. Calculate $R _ { 1 }$ and $R _ { 1 0 }$ for $C _ { 0 } ~ = ~ 1$ mg mL, $k = 0 . 1 \mathrm { h } ^ { - 1 } ,$ ,  and $t _ { 0 } ~ = 1 0 \mathrm { h }$ .  How good an estimate of R is $R _ { 1 0 } ?$ 

c. If $k = 0 . 0 1 \mathrm { h } ^ { - 1 }$ and $t _ { 0 } ~ = 1 0 \mathrm { h }$ , find the smallest n such that $R _ { n } > { \bigl ( } 1 / 2 { \bigr ) } R .$ Use $C _ { 0 } = 1 \mathrm { m g / m L }$ . 

(Source: Prescribing Safe and Effective Dosage, B. Horelick and S. Koont, COMAP, Inc., Lexington, MA.) 

36. Time between drug doses (Continuation of Exercise 35.) If a drug is known to be ineffective below a concentration $C _ { L }$ and harmful above some higher concentration $C _ { H }$ , we need to find values of $C _ { 0 }$ and $t _ { 0 }$ that will produce a concentration that is safe (not above $C _ { H } )$ but effective (not below $C _ { L } )$ . See the accompanying figure. We therefore want to find values for $C _ { 0 }$ and $t _ { 0 }$ for which 

$$
R = C _ {L} \text { and } C _ {0} + R = C _ {H}.
$$

![[373e47f2994b08395076ffdcde0aa005a844692d670a833f2143e41c905b9902.jpg|image]]


Thus ${ \cal C } _ { 0 } = { \cal C } _ { H } - { \cal C } _ { L }$ . When these values are substituted in the equation for R obtained in part (a) of Exercise 35, the resulting equation simplifies to 

$$
t _ {0} = \frac {1}{k} \ln \frac {C _ {H}}{C _ {L}}.
$$

To reach an effective level rapidly, one might administer a “loading” dose that would produce a concentration of $C _ { H }$ mg mL. This could be followed every $t _ { 0 }$ hours by a dose that raises the concentration by ${ \cal C } _ { 0 } = { \cal C } _ { H } - { \cal C } _ { L }$ mg mL. 

a. Verify the preceding equation for $t _ { 0 } .$ 

b. If $k = 0 . 0 5 \mathrm { h } ^ { - 1 }$ and the highest safe concentration is e times the lowest effective concentration, find the length of time between doses that will ensure safe and effective concentrations. 

c. Given $C _ { H } = 2 \mathrm { m g / m L }$ $C _ { L } = 0 . 5 \mathrm { m g / m L }$ ,  and $k = 0 . 0 2 \mathrm { h } ^ { - 1 }$ determine a scheme for administering the drug. 

d. Suppose that $k = 0 . 2 \mathrm { h } ^ { - 1 }$ and that the smallest effective concentration is 0.03 mg mL. A single dose that produces a concentration of 0.1 mg mL is administered. About how long will the drug remain effective? 

## CHAPTER 9 Technology Application Projects

Mathematica/Maple Projects 

Projects can be found within MyLab Math. 

• Bouncing Ball 

The model predicts the height of a bouncing ball, and the time until it stops bouncing. 

• Taylor Polynomial Approximations of a Function A graphical animation shows the convergence of the Taylor polynomials to functions having derivatives of all orders over an interval in their domains. 

# 10 Parametric Equations and Polar Coordinates

![[5fad0daf862709a202036d4738423cc47d60e5588b27c2cab4f046be7e4d14a5.jpg|image]]


OVERVIEW In this chapter we study new ways to describe curves in the plane. Instead of considering a curve as the graph of a function or equation, we think of it as the path of a moving particle whose position is changing over time. Then each of the x- and y-coordinates of the particle’s position becomes a function of a third variable t. We can also change the way in which points in the plane themselves are described by using polar coordinates rather than the rectangular or Cartesian system. Both of these new tools are useful for describing motion, like that of planets and satellites, or projectiles moving in the plane or in space.
