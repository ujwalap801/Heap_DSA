/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {


// space 0(min(n,k))
// tc 0(nlogn)
    // add all the elements in first column into the MinPQ

let n = matrix[0].length;
let heap = new MinPriorityQueue(x =>x.val);

for(let i=0; i<Math.min(n,k); i++)   
{
    heap.push({val: matrix[i][0], row:i, col:0});
}

    // one by one find the min value inPQ and increase count till k

   for(let count=0; count<k-1; count++)
   {
   let {val, row, col}=  heap.pop();

    // add the next element if it is present
    if(col+1 < n)
    {
    heap.push({val: matrix[row][col+1], row:row, col:col+1})
    }
   } 

return heap.pop().val;

};