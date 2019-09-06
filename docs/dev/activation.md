# Add Your Own Activation Function
In this section, we demonstrate how to use your own activation function with scenn.

```cpp
struct ReLU {
};
```

Assume that you want to use ReLU with scenn, you have to implement two method; activate and calc_backward_pass.

```cpp
struct ReLU {
  SCENN_CONSTEXPR auto activate();
  SCENN_CONSTEXPR auto calc_backward_pass();
};
```