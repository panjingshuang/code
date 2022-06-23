/**
 * 选择排序
 * @param {*} nums 
 */
function selectSort(nums){
  for(let i=0;i<nums.length -1;i++){
    let min = i
    for(let j = i + 1; j< nums.length ; j++){
      if(nums[min] > nums[j]) min = j
    }
    [nums[i],nums[min]] = [nums[min],nums[i]]
  }
  return nums
}

let sort = [21,12,34,67,25,46,52,19]
selectSort(sort)
console.log(sort)
