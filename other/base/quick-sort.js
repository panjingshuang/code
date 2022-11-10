
/**
 * 分治算法：先设置一个中轴元素，然后将序列中小于中轴元素的放置到序列左侧，大于的放置到右侧，然后再对两侧的序列分别进行递归快排
 * @param {*} nums 
 */
function quickSort(nums,left,right){
  if(left < right){
    let mid = partition(nums, left, right)
    //进行分割
    nums = quickSort(nums, left, mid - 1)
    nums = quickSort(nums, mid + 1, right)
  }
  return nums
}

function partition(nums,left,right){
  let pivot = nums[left]
  let i = left + 1
  let j = right
  while(true){  
    while (i <= j && nums[i] <= pivot) i++;
    while (i <= j && nums[j] > pivot) j--
    if(i>=j) break
    [nums[i],nums[j]] = [nums[j],nums[i]]
  }
  nums[left] = nums[j]
  nums[j] = pivot
  return j
}

let sort = [21,12,34,67,25,46,52,19]
quickSort(sort,0,sort.length - 1)
console.log(sort)
