function flattener(arr) {
  outputArray = []

  function checkAndPush(element) {

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
