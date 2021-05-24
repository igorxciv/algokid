function merge(left, right) {
    let result = []

    while (left.length || right.length) {
        if (!right[0] || left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result
}

function mergeSort(arr) {
    const half = Math.ceil(arr.length / 2)

    if (arr.length < 2) {
        return arr
    }

    const left = arr.slice(0, half)
    const right = arr.slice(half)
    return merge(mergeSort(left), mergeSort(right));
}

mergeSort([6,4,3,11,7]); //?

merge([6,7,8], [1,2,3]) //?
