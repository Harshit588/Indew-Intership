let queue = [];
let currentPos = queue.length;
let maxSize = 5;

const AddQueue = (newVal) => {
  if (currentPos >= maxSize) {
    console.log("Can't add " + newVal);
    return;
  }
  queue[currentPos] = newVal;
  currentPos++;
};

const deQueue = () => {
  for (let i = 0; i <= currentPos; i++) {
    queue[i] = queue[i + 1];
  }
  currentPos--;
  queue.length = currentPos;
};

const reare = () => {
  if (queue.length !== 0) {
    console.log(queue[queue.length - 1]);
  } else {
    console.log("Queue is Empty");
  }
};

const front = () => {
  if (queue.length !== 0) {
    console.log(queue[0]);
  } else {
    console.log("Queue is Empty");
  }
};

const display = () => {
  console.log(queue);
};

AddQueue(1);
AddQueue(2);
AddQueue(3);
AddQueue(4);
display();
// deQueue();
reare();
front();
