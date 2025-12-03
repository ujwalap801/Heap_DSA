/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    

    while(stones.length>1)
    {
    let max1 = Math.max(...stones)
    let index1 = stones.indexOf(max1);
    stones.splice(index1, 1);

    let max2 = Math.max(...stones)
    let index2 = stones.indexOf(max2);
    stones.splice(index2, 1);

    if(max1 != max2)
    {
        stones.push(Math.abs(max1- max2));
    }
    }

    return stones.length ==0? 0: stones[0];
};


// USING TC :0(nlogn)
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
let pq = new MaxPriorityQueue();

for(let i=0;i< stones.length;i++)
{
    pq.enqueue(stones[i]);
}

while(pq.size() >1)
{
    let y = pq.dequeue();
    let x = pq.dequeue();

    if(y-x >0)
    {
        pq.enqueue(y-x);
    }
}


return pq.dequeue() || 0;
};



// USING PUSH AND pop

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
let pq = MaxPriorityQueue.fromArray(stones);



while(pq.size() >1)
{
    let y = pq.pop();
    let x = pq.pop();

    if(y-x >0)
    {
        pq.push(y-x);
    }
}


return pq.pop() || 0;
};