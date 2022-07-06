```shell
# increase the memory usage of node globally
export NODE_OPTION=--max_old_space_size=4096

node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'
```
 2022-07-05T19:25:21

 a tour of V8: Garbage Collection[https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection]

 