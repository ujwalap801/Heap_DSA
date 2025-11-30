class MinHeap{
    constructor()
    {
        this.heap = [];
    }

    getChildrenLeft(i)
    {
        return (2 * i) + 1;
    }

    getChildrenRight(i)
    {
    return (2*i)+2
}



    getParentIndex(i)
    {
        return Math.floor((i - 1) / 2);
    }


    insert(val)
    {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);

    }


    heapifyUp(i)
    {
        while (i > 0)
        {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex])
            {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else {
                break;
            }

  

    }
    }



    extract()
    {
        if (this.heap.length < 1) return null;

        let min = this.heap[0];
        let n = this.heap.length - 1;
        [this.heap[0], this.heap[n]] =
            [this.heap[n], this.heap[0]];

        this.heap.pop();

        this.heapifyDown(0);


        return min;

    }


    heapifyDown(i)
    {
        let left = this.getChildrenLeft(i);

        let right = this.getChildrenRight(i);


        let n = this.heap.length;

        let smallest = i;

        if (left < n && this.heap[left] < this.heap[smallest])
        {
            smallest = left;
        }
        if (right <n && this.heap[right] < this.heap[smallest])
        {
            smallest = right;
        }

        if (smallest != i)
        {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest);

}


    }


    peek()
    {
        if (!this.heap.length) return null;
        return this.heap[0];
}
}



let Heap = new MinHeap();
Heap.insert(5);
Heap.insert(20);
Heap.insert(4);

Heap.insert(10);
Heap.insert(1);
Heap.insert(0);
console.log(Heap.heap)
console.log(Heap.peek());



console.log(Heap.extract());
// console.log(Heap.extract());


