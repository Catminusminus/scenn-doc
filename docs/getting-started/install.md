# Install
This library is a header-only library.

Include ```<scenn/scenn.hpp>``` and you can use all things provided by scenn except for ```<scenn/load.hpp>```.

## Requirements
- Clang 6+
- [Sprout C++ Libraries](https://github.com/bolero-MURAKAMI/Sprout)
- Python 3.6 (Optional)

## Quick Start
```
git clone https://github.com/bolero-MURAKAMI/Sprout.git
git clone https://github.com/Catminusminus/scenn.git

export SPROUT_PATH=./Sprout/
export SCENN_PATH=./scenn/

// Run the xor example
clang++ ./scenn/tests/model/xor.cpp -Wall -Wextra -I$SPROUT_PATH -I$SCENN_PATH -std=gnu++2a -fconstexpr-steps=-1

// After a few hours

./a.out // You will see 4.
```

## Patched clang
For compiling more complicated exmaples such as the code using the mnist data, you need to use the patch for clang in order to avoid hitting the constexpr step limit. For instance, if you run
```
git clone https://github.com/llvm/llvm-project.git
cd llvm-project
mv <path/to/clang-patch.diff> ./
patch -p0 < clang-patch.diff>
mkdir build
cd build
cmake -G "Unix Makefiles" -DLLVM_ENABLE_PROJECTS=clang -DCMAKE_BUILD_TYPE=Release ../llvm
make
```
then you obtain the patched clang in `build/bin`.