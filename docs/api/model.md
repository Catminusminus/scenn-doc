# Model
## Sequential Network
`SequentialNetwork` is a sequential neural network class in scenn namespace.

### constructor
```
SCENN_CONSTEXPR SequentialNetwork(loss_function, layers...)
```
`loss_function` is a loss function like MSE, CrossEntropy and so on. In fact, these loss functions are not functions, but structs.
See the development guide for detail. `layers` are DenseLayers or ActivationLayers.
#### example
```cpp
SCENN_CONSTEXPR auto model = SequentialNetwork(CrossEntropy(), DenseLayer<10, 3, double>(), ActivationLayer<3, double>(Sigmoid())
```
In the above exapmle, `model` is a neural network with a cross entropy loss function, 10-dim input vectors and 3-dim output vectors.
### train
```
SCENN_CONSTEXPR auto train<MiniBatchSize>(training_data, epochs, learning_rate) => trained_model
```
#### example
```cpp
// model is an instance of SequentialNetwork class
SCENN_CONSTEXPR auto trained_model = model.train<2>(training_data, 10, 0.1)
```

### single_forward
```
SCENN_CONSTEXPR auto single_forward(test_data) => prediction
```

### evaluate
```
SCENN_CONSTEXPR auto evaluate(test_data) => number_of_accurate_prediction
```

### Detail
```cpp
namespace scenn {
template <class LossFunction, class... Layers>
class SequentialNetwork {
  SCENN_CONSTEXPR SequentialNetwork(LossFunction &&loss, Layers &&... layers);
  SCENN_CONSTEXPR SequentialNetwork(const LossFunction &loss,
                                    const Layers &... layers);
  template <std::size_t MiniBatchSize, class Train, class T>
  SCENN_CONSTEXPR auto train(Train &&training_data, std::size_t epochs,
                             T &&learning_rate);
  template <class Test>
  SCENN_CONSTEXPR auto single_forward(Test &&x) const;
  template <class Test>
  SCENN_CONSTEXPR auto evaluate(Test &&test_data) const;
};
}
```