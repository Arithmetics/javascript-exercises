var fibonacci = function(x) {
  let nums = [0,1,1];
  for(i=3;i<x+1;i++){
    nums.push(nums[i-1]+nums[i-2]);
  }
  if (Number.isInteger(nums[x])){
      return nums[x];
  } else {
    return "OOPS";
  }
}

module.exports = fibonacci
