'use strict';

//Complete this algo
const isLoop = (linkedList) => {

  let node = linkedList.head
  while(linkedList.tail !== node){
    if (node.next.previous!== node) return true;
    node = node.next
  }

  return false;

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
