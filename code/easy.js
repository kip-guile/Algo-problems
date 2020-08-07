/*
Write a function that receives as input the head node of a linked list and an integer k. Your function should remove the kth node from the end of the linked list and return the head node of the updated list.
For example, if we have the following linked list:
  (20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) -> null

The head node would refer to the node (20) . Let k = 4 , so our function should remove the 4th node from the end of the linked list the node (14)

So after the function executes, the state of the linked list should be:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null .
If k is longer than the length of the linked list, the linked list should not be changed.
*/

function removeKthLinkedListNode(head, k) {
  //if list is empty, or target is less than 1, return null
  if (head === null || k < 1) return null
  let curr = head
  let count = 0
  //traverse list and update count to get the length of the list.
  while (curr != null) {
    curr = curr.next
    count += 1
  }
  //reset curr
  curr = head
  //return head if target is greater than count, because it means nothing is meant to be removed
  if (k > count) return head
  //find the position from the head to the target.
  let kthToLast = count - k
  // handle case when target is the first node.
  //if kthtolast === 0, it means target is first node, so move head to next and return head
  if (kthToLast === 0) {
    head = head.next
    return head
  }
  // traverse the list until the node before the node we want to delete
  let newCount = 0
  while (newCount !== kthToLast - 1) {
    curr = curr.next
    newCount += 1
  }
  console.log(curr.data)
  // move next to the next node, (skip the node we want to delete): it will get garbage collected.
  curr.next = curr.next.next
  return head
}

/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeDuplicates = function (nums) {
  let slow_index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[slow_index]) {
      slow_index += 1
      nums[slow_index] = nums[i]
    }
  }
  return slow_index + 1
}

console.log(removeDuplicates([1, 1, 2])) //2
