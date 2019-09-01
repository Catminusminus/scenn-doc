# Activation
## Sigmoid
### Detail
```cpp
namespace scenn {
struct Sigmoid {
  template <size_t M, size_t N, class T>
  SCENN_CONSTEXPR auto activate(const Matrix<M, N, T>& container) const;
  template <class T, class U>
  SCENN_CONSTEXPR auto calc_backward_pass(T&& data, U&& delta) const;
};
}  // namespace scenn
```
## Softmax
### Detail
```cpp
namespace scenn {
struct Softmax {
  template <size_t M, size_t N, class T>
  SCENN_CONSTEXPR auto activate(const Matrix<M, N, T>& container) const;
  template <class T, class U>
  SCENN_CONSTEXPR auto calc_backward_pass(T&& data, U&& delta) const;
};
}  // namespace scenn
```
## ReLU
### Detail
```cpp
namespace scenn {
struct ReLU {
  template <size_t M, size_t N, class T>
  SCENN_CONSTEXPR auto activate(const Matrix<M, N, T>& container) const;
  template <class T, class U>
  SCENN_CONSTEXPR auto calc_backward_pass(T&& data, U&& delta) const;
};
}  // namespace scenn
```
## LeakyReLU
### Detail
```cpp
namespace scenn {
template <class T>
class LeakyReLU {
  T alpha;

 public:
  constexpr LeakyReLU(T alpha) : alpha(alpha){};
  template <size_t M, size_t N>
  SCENN_CONSTEXPR auto activate(const Matrix<M, N, T>& container) const;
  template <class V, class U>
  SCENN_CONSTEXPR auto calc_backward_pass(V&& data, U&& delta) const;
};
}  // namespace scenn
```
