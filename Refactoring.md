# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I made a couple of changes which improved readability. First, I initialized the candidate variable with the default value of `TRIVIAL_PARTITION_KEY` instead of leaving it undefined, making it clear that this value will be used if no other candidate is found. I also removed unecessary `if` blocks and added some `else if` blocks which clean up the deeply nested conditionals. An example of this would be removing `if (candidate)` and adding the check for `typeof` in one line (this was made possible due to the initialization of candidate).

