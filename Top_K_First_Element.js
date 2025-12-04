/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = new Map();
    for(let i=0;i<nums.length;i++)
    {
        if(map.has(nums[i]))
        {
            map.set(nums[i], map.get(nums[i]) +1) 
        }else{
            map.set(nums[i], 1)
        }
    }
// console.log(map)

    // add elements to MinPq and restrict size to k
    let pq = new MinPriorityQueue(x =>x.freq);
  
     for (let [key, freq] of map) {
        pq.push({ val: key, freq });
        if (pq.size() > k) {
            pq.pop();
        }
    }

    // console.log(pq.toArray()) [ { val: 2, freq: 2 }, { val: 1, freq: 3 } ]
      
return pq.toArray().map(x =>Number(x.val));

};