function singleNumber(nums) {
	return nums.reduce((prev, curr) => {
        console.log(prev, prev ^ curr)
        return prev ^ curr
    });
}

// var singleNumber = function(nums) {
//     const strl = nums.length;
//     for (let i=0; i < strl; i++) {
//         let found = true
        
//         const val = nums.splice(0,1)[0]
//         console.log(val, nums)

//         if (nums.includes(val)) {
//             console.log('true', val)
//             nums = nums.filter(num => num != val)
//             console.log('see', nums)
//             found = false
//         }
//         if (found) {
//             return val
//         } 
//     } 
// };
var maxDepth = function(root) {
    const arrayl = Number(root.length)
    // return arrayl
    const level = Math.log2(arrayl) + 1;
    return level
};

let test1 = [0,1,0,3,12]



var moveZeroes = function(nums) {
    let i = []
    nums = nums.filter(el => {
        if (el == 0) {
            console.log(el)
          i.push(0)  
          return false
        }
        return true
    })
    nums = nums + i
    console.log(nums)
};

var majorityElement = function(nums) {
    const counts = {}
    let major = {
        value: 0,
        count: 0
    }
    for (let i=0, j=1; j<nums.length; j++) {
        let val = nums[i]
        if (nums[j] == val) {
            if (!counts[val]) {
                counts[val] = 1
            }
            counts[val] = counts[val] + 1
            console.log("111", i,j, val, counts)

        } else {
            counts[nums[j]] = counts[nums[j]] + 1
            console.log("222", i,j, val, counts)
            i = j
        }
        if (major.count < counts[val]) {
         major.value = val
            major.count = counts[val]
        }
        // console.log(i,j, val, counts)
    }
    console.log(major, counts)

    return major.value
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const values = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    }
    // const str = columnTitle.split('').reverse().join('')
    let sum = 0
    let i = columnTitle.length - 1
    console.log('kkk', i)
    for (letter of columnTitle) {
        let total
        if (i > 0) {
            total =  26**i * values[letter]
            console.log(letter, values[letter], total, 26**i)
        } else {
            total = values[letter] 
            console.log(letter, values[letter], total, 26**i)
        }
        sum += total
        i--
    }

    return sum
    
};

var reverse = function(x) {
    let negative = false
    let constraint = 2**31/2
    if (x < (-1 * constraint) || x > constraint-1) {
        return 0
    }
    if (x < 0) {
        negative = true
    }
    x = Math.abs(x) 
    let value = x%10
    let current = Math.floor(x/10)
    let rev = value
    let count = 1
    while (true) {
        console.log("current", current)
        if (current > 0) {
            value = current%10
            current = Math.floor(current/10)
            rev = (rev * 10) + value
        } else {
            break
        }
        count++
    }
    return negative ? rev * -1 : rev
};


function sayHello(j) {
    console.log('Hello, ' + this.name + j);
}

var trap = function(height) {
    const len = height.length
    if (len < 3) {
        return 0
    }
    let total = 0
    let start = { value: height[0] , index: 0}
    let current = height[1]
    let end = height[2]
    for (i=1; i < len; i++) {
        if (i == start.index+1) {
            if (start.value <= height[i]) {
                start.value = height[i]
                start.index = i
            } else {
                continue
            }
        } 
        end = height[i]
        if (end > height[i+1] || i+1 == len) {
            const smaller = end > start.value ? start.value : end
            const space = i - start.index - 1
            let value = smaller * space
            console.log(value, smaller, space)
            for (j=start.index+1; j < i; j++) {
                value -= height[j]
            }
            if (value > 0) {
                console.log(start, {value: end, index: i }, value, "\n")
                total += value
            }
            start.value = end
            start.index = i
        }
    }
    return total
};

  
console.log("test 1")
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

console.log("test 2")
console.log("test 2")
console.log("test 2")
console.log(trap([4,2,0,3,2,5]))