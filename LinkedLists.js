const nodeFactory = (value) => {
  return { value: null || value, nextNode: null };
};

const listFactory = () => {
  let head = null;
  let length = 0;

  const append = (value) => {
    const newNode = nodeFactory(value);
    length++;
    if (head === null) {
      return (head = newNode);
    }
    let temp = head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value);
    length++;
    if (head === null) {
      return (head = newNode);
    }
    newNode.nextNode = head;
    head = newNode;
  };
  const size = () => {
    if (!head) return null;
    return length;
  };
  const returnFirst = () => {
    if (!head) return null;
    return head;
  };
  const returnLast = () => {
    if (!head) return null;
    let temp = head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  };
  const valueAt = (index) => {
    if (index >=length) return "no value at this index, the list is too small";
    let temp = head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp.value;
  };
  return { append, prepend, size, returnFirst, returnLast, valueAt };
};

let newList = listFactory();
newList.append(5);
newList.append(7);
newList.append(12);
newList.prepend(15);

console.log(newList.size());
console.log(newList.returnFirst());
console.log(newList.returnLast());
console.log(newList.valueAt(4));
