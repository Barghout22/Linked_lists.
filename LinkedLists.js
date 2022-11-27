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
    if (index >= length) return "no value at this index, the list is too small";
    let temp = head;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp;
  };
  const pop = () => {
    if (head === null) return null;
    valueAt(size() - 2).nextNode = null;
    length--;
  };
  const contains = (value) => {
    if (head === null) return null;
    let temp = head;
    for (let i = 0; i < length; i++) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  };
  const find = (value) => {
    if (head === null) return null;
    let temp = head;
    for (let i = 0; i < length; i++) {
      if (temp.value === value) return i;
      temp = temp.nextNode;
    }
    return null;
  };
  const toString = () => {
    if (head === null) return null;
    let temp = head;
    let string = "";
    while (temp.nextNode !== null) {
      string += `(${temp.value})=>`;
      temp = temp.nextNode;
    }
    string += `(${temp.value})=>(null)`;
    return string;
  };
  const insertAt = (value, index) => {
    if (index >= length) {
      append(value);
      return;
    }
    const newNode = nodeFactory(value);
    newNode.nextNode = valueAt(index);
    valueAt(index - 1).nextNode = newNode;
    length++;
  };
  const removeAt = (index) => {
    if (index >= length) return;
    if (index === 0) {
      head = valueAt(index + 1);
      length--;
      return;
    }
    valueAt(index - 1).nextNode = valueAt(index).nextNode;
    length--;
  };
  return {
    append,
    prepend,
    size,
    returnFirst,
    returnLast,
    valueAt,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

let newList = listFactory();
newList.append(5);
newList.append(7);
newList.append(12);
newList.append(16);
newList.prepend(15);

newList.removeAt(4);
console.log(newList.toString());

// console.log(newList.find(12));
// console.log(newList.find(3));
console.log(newList.size());
// console.log(newList.returnFirst());
// console.log(newList.returnLast());
// console.log(newList.valueAt(2));
// console.log(newList.valueAt(3));
// console.log(newList.valueAt(4));
// console.log(newList.valueAt(5));
// console.log(newList.valueAt(6));
