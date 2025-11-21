class MinHeap{
    constructor()
    {
        this.heap = [5, 10, 20, 30];
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
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
            } else {
                break;
            }

            i = parentIndex;

    }
    }


}



let Heap = new MinHeap();
console.log(Heap.heap)

Heap.insert(1);
console.log(Heap.heap)

Heap.insert(0);
console.log(Heap.heap)