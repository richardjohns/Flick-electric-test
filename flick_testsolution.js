function flattener(arr) {
  outputArray = []

  // checkAndPush loops over an array and uses a conditional to decide whether to
  // push elements of the array to the flattened outputArray.

  // If an array is found, pushNestedArray is called to deal with looping through that
  // sub-array and pushing its items to outputArray.
  // Whenever pushNestedArray finds another nested array, it calls itself (ie is a
  // recursive function), and passes the array through to be dealt with as before.

  // If a number is found instead, that is pushed to the outputArray.

  // The use of a recursive function allows checkAndPush to deal with any number of
  // levels of nested arrays ie 10 levels deep.

  function checkAndPush(element) {
    // functions are extracted as variables for re-use and better readability of the code.
    const isItemArray = item => Array.isArray(item)
    const pushToOutputArray = item => outputArray.push(item)


    function pushNestedArray(element) {
      element.forEach((item) => {
        isItemArray(item) ? pushNestedArray(item) : pushToOutputArray(item)
      })
    }

    isItemArray(element) ? pushNestedArray(element) : pushToOutputArray(element)
  }

  arr.forEach((element) => checkAndPush(element))

  console.log("This is outputArray: ", outputArray)
}

// testing edge cases of multiple arrays nested 3 layers deep.
flattener([[1, 2, [3]], 4, [5, 6], [7, [8, [9, 10]]]])
