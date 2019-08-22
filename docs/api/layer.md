# Layer
## DenseLayer
`DenseLayer` is a dense layer component in scenn namespace. In fact, `DenseLayer` is not a class but a function which returns an instance of `DenseLayerImpl` class. However, if you use it only in `SequentialNetwork` class, this is just a detail in the implementation. If you want to emphasize that this is just a function, you can use `DenseLayerCreator`.
### component constructor
```
SCENN_CONSTEXPR DenseLayer<input_dim, output_dim, num_type>(seed)
```
It initialize its weight by random matrix with `seed` as its random seed. We recommend all `DenseLayer`'s seed is different from each other to ensure randomness. We also recommend that seed is between 0 and 10 in most cases.
#### example
```cpp
SCENN_CONSTEXPR auto model = SequentialNetwork(BinaryCrossEntropy(), DenseLayer<4, 2, double>(5), ActivationLayer<2, double>(Sigmoid())
```
### Detail
```cpp
namespace scenn {
  template <std::size_t InputDim, std::size_t OutputDim, class NumType>
  SCENN_CONSTEXPR auto DenseLayer(std::size_t seed = 0);
  template <std::size_t InputDim, std::size_t OutputDim, class NumType>
  SCENN_CONSTEXPR auto DenseLayerCreator(std::size_t seed = 0);
}
```

## ActivationLayer
`ActivationLayer` is a activation layer component in scenn namespace. In fact, `ActivationLayer` is not a class but a function which returns an instance of `ActivationLayerImpl` class. However, if you use it only in `SequentialNetwork` class, this is just a detail in the implementation. If you want to emphasize that this is just a function, you can use `ActivationLayerCreator`.
### component constructor
```
SCENN_CONSTEXPR ActivationLayer<dim, num_type>(activation_function)
```
#### example
```cpp
SCENN_CONSTEXPR auto model = SequentialNetwork(CrossEntropy(), DenseLayer<10, 3, float>(), ActivationLayer<3, float>(Softmax())
```
### Detail
```cpp
namespace scenn {
  template <std::size_t Dim, class NumType, class Loss>
  SCENN_CONSTEXPR auto ActivationLayer(Loss&& loss);
  template <std::size_t Dim, class NumType, class Loss>
  SCENN_CONSTEXPR auto ActivationLayerCreator(Loss&& loss);
}
```
