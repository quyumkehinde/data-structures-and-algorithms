// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
//     Output: ["2", "4->49", "51->74", "76->99"]

const missingRanges = (nums, lower, upper) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (lower < nums[0]) {
                let range = String(lower);
                if (lower + 1 !== nums[0]) {
                    range = range + "->" + String(nums[0] - 1);
                }
                result.push(range);
            }
        } else if (i === nums.length - 1) {
            const last = nums.length - 1;
            if (upper > nums[last]) {
                let range = nums[last] + 1;
                if (nums[last] + 1 !== upper) {
                    range = range + "->" + upper;
                }
                result.push(range)
            }
        } else {
            const nextValue = nums[i] + 1;
            if (nextValue !== nums[i + 1]) {
                let range = String(nextValue);
                if (nextValue + 1 !== nums[i + 1]) {
                    range = range + "->" + String(nums[i + 1] - 1);
                }
                result.push(range);
            }
        }
    }
    return result;
}

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99))