# Loss Function
## MSE
`MSE` is a class which provide mean squared error functions in scenn namespace.

### loss_function
```
static SCENN_CONSTEXPR auto loss_function(predictions, labels) => loss
```
### loss_derivative
```
static SCENN_CONSTEXPR auto loss_derivative(predictions, labels) => derivative_of_loss
```
### Detail
```cpp
namespace scenn {
struct MSE {
  template <class T, class U>
  static SCENN_CONSTEXPR auto loss_function(const T& predictions,
                                            const U& labels);
  template <class T, class U>
  static SCENN_CONSTEXPR auto loss_derivative(const T& predictions,
                                              const U& labels);
};
}
```

## MSLE

## BinaryCrossEntropy

## CrossEntropy

## Hinge
