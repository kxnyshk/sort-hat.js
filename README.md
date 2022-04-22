# sort-hat.js
An online JavaScript sorting application, made to calculate the time taken for an ascending sort over a randomly generated dataset with an user specified range.

## Sorting used
 - Chrome: JavaScript V8 Chromium engine uses [TimSort](https://v8.dev/blog/array-sort) as of Sept' 2018 for sorting contiguous numeric arrays with `Arrays.sort()`
 - Mozilla: Mozilla Firefox uses [MergeSort](https://bugzilla.mozilla.org/show_bug.cgi?id=224128) with JavaScript's `Arrays.sort()`

## Time calculation
 - Sorting time has been calculated with the help of JavaScript's [`performance.now()`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

## Hosting
 - The application has been hosted via [Netlify.app](https://netlify.app/)
 - Host [link](https://sortdotjs.netlify.app)

## Further readings
 - [Javascript Array.sort() implementation | StackOverflow](https://stackoverflow.com/questions/234683/javascript-array-sort-implementation)
 - [Chromium V8 array-sort.tq | Chromium.googlesource.com](https://chromium.googlesource.com/v8/v8.git/+/master/third_party/v8/builtins/array-sort.tq)
 - [V8 TimSort array-sort.tq | Github](https://github.com/v8/v8/blob/78f2610345fdd14ca401d920c140f8f461b631d1/third_party/v8/builtins/array-sort.tq#L5)
 - [MinSort | trac.webkit.org](https://trac.webkit.org/browser/trunk/Source/JavaScriptCore/runtime/ArrayPrototype.cpp?rev=138530#L647)
