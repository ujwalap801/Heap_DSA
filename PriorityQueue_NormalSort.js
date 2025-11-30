class PQ{
  constructor()
  {
    this.queue = [];
  }

  enqueue(value, priority)
  {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority);

 
  }

  dequeue()
  {
    return this.queue.shift();
  }

  peek()
  {
    return this.queue[0];
  }

  empty()
  {
    return this.queue.length === 0;
  }
}


const pq1 = new PQ();
pq1.enqueue("Fever", 1);
pq1.enqueue("Accident", 5);
pq1.enqueue('headache', 2);

console.log(pq1)



//  {
//   "queue": [
//     {
//       "value": "Accident",
//       "priority": 5
//     },
//     {
//       "value": "headache",
//       "priority": 2
//     },
//     {
//       "value": "Fever",
//       "priority": 1
//     }
//   ],
//   "constructor": {
//     "name": "PQ"
//   }
// }

// console.log(pq1.dequeue()) //5

// console.log(pq1.dequeue())//2