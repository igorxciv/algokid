function insertionSort(input) {
    var length = input.length

    if (input.length < 2) {
        return input
    }

    for (var i = 0; i < length; i++) {
        var current = input[i]
        var prevIdx = i - 1

        while (prevIdx > -1 && input[prevIdx] > current) {
            input[prevIdx + 1] = input[prevIdx]
            prevIdx--
        }

        input[prevIdx + 1] = current
    }

    return input
}

insertionSort([5,4,1,6,9,1,2,77]) //?
insertionSort([3]) //?