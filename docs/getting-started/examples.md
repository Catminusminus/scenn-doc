# Examples
To run complicated examples, you need to prepare corresponding datasets.

## MNIST Example
To use `load_mini_mnist_data` function, you need to prepare the mnist sub-dataset. First, enter the `tools` directory and download mnist dataset by
```
wget https://s3.amazonaws.com/img-datasets/mnist.npz -O mnist.npz
```
. Next, run `pipenv install` and `pipenv run python generate_mini_mnist.py`. Then you can use `load_mini_mnist_data` function by including `<scenn/load/mini_mnist.hpp>`.

## Malware Detection Example
To use `load_mini_ember_data` function, you need to prepare the ember sub-dataset. First, enter the `tools` directory and download ember dataset by
```
wget https://pubdata.endgame.com/ember/ember_dataset_2017_2.tar.bz2
tar xvf ember_dataset_2017_2.tar.bz2
```
. Next, run `pipenv install` and `pipenv run python generate_mini_ember.py`. Then you can use `load_mini_ember_data` function by including `<scenn/load/mini_ember.hpp>`.
