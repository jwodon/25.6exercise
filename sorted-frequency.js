function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    let count = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            count++;
            left = mid + 1;
            while (left < arr.length && arr[left] === num) {
                count++;
                left++;
            }
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return count;
}

module.exports = sortedFrequency;
