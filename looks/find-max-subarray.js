function bruteForceMaxArray(arrayIn) {
    var bestSum = Number.MIN_VALUE

    for (var i = 0; i < arrayIn.length; i++) {
        var sum = arrayIn[i];
        bestSum = Math.max(sum, bestSum)

        for (var j = i + 1; j < arrayIn.length; j++) {
            sum += arrayIn[j];
            bestSum = Math.max(sum, bestSum);
        }
    }
    return bestSum
}

bruteForceMaxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //?
bruteForceMaxArray([13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]) //?
bruteForceMaxArray([4, -6, 7, -10, 2]) //?
bruteForceMaxArray([3, -1, 6, -2]) //?


function findMaxSubArray(arrayIn, low, high) {
    if (high === low) {
        return arrayIn[low]
    }

    var mid = parseInt((low + high) / 2, 10)

    return Math.max(
        findMaxSubArray(arrayIn, low, mid),
        findMaxSubArray(arrayIn, mid + 1, high),
        findMaxCrossingSubArray(arrayIn, low, mid, high)
    )
}

function findMaxCrossingSubArray(arrayIn, low, mid, high) {
    var leftSum = Number.MIN_VALUE
    var sum = arrayIn[mid]

    for (var i = mid; i >= low; i--) {
        sum += arrayIn[i]

        if (sum > leftSum) {
            leftSum = sum
        }
    }

    var rightSum = Number.MIN_VALUE
    sum = arrayIn[mid + 1]

    for (var i = mid + 1; i <= high; i++) {
        sum += arrayIn[i]

        if (sum > rightSum) {
            rightSum = sum
        }
    }
    return leftSum + rightSum
}

findMaxSubArray([-1, 3, 4, -5, 9, -2], 0, 5); //?
