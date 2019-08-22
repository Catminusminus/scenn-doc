# Add Your Own Activation Function
In this section, we demonstrate how to use your own activation function with scenn.

```cpp
struct Relu {
};
```

Assume that you want to use Relu with scenn, you have to implement two method; activate and calc_backward_pass.

```cpp
struct Relu {
  SCENN_CONSTEXPR auto activate();
  SCENN_CONSTEXPR auto calc_backward_pass();
};
```