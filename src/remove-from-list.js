const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let num = k;

  let head = l;

  while (head.value === num) {
    head = head.next;
  }

  let node = head;
  let current = null;

  while (node && node.next !== null) {
    if (node.next.value === num && node.next.next?.value === num) {
      current = node.next.next.next;
      node.next.next.next = null;
      node.next.next = current;
      current = node.next.next;
      node.next.next = null;
      node.next = current;
    } else if (node.next.value === num) {
      current = node.next.next;
      node.next.next = null;
      node.next = current;
    }
    node = node.next;
  }

  return head;
}

module.exports = {
  removeKFromList,
};
