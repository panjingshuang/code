
/**
 * 插入排序
 * @param {*} nums 
 */
function insertSort(nums){
  if(!nums || nums.length < 2 ) return nums
  for(let i = 1; i < nums.length ; i ++ ){
    let temp = nums[i]
    let j = i - 1
    while(j >= 0 && nums[j] >= temp) j --
    for(let k=i; k > j + 1; k--){
      nums[k] = nums[k-1]
    }
    nums[j+1] = temp;
  }
  return nums
}

let sort = [21,12,34,67,25,46,52,19]
insertSort(sort)
console.log(sort)