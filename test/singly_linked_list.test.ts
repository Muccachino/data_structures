const SinglyLinkedList = require("../singly_linked_list/singly_linked_list");

describe("test my singly-linked-list", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it("should instantiate an object", () => {
    expect(list).not.toBeNull();
  });

  it("should return element at given index", () => {
    list.append(5);
    expect(list.get(0).value).toBe(5);
  });

  it("should append new element to list", () => {
    list.append(5);
    list.append(10);
    expect(list.length).toBe(2);
  });

  it("should remove last element in list", () => {
    list.append(5);
    list.append(10);
    expect(list.length).toBe(2);
    expect(list.get(1).value).toBe(10);

    list.pop();

    expect(list.length).toBe(1);
    expect(list.get(1)).toBeNull();
  });

  it("should remove the first element in list", () => {
    list.append(5);
    list.append(10);
    list.append(15);

    expect(list.shift().value).toBe(5);
    expect(list.get(0).value).toBe(10);
  });

  it("should add element at beginning of list", () => {
    list.append(5);
    list.append(10);
    expect(list.get(0).value).toBe(5);

    list.unshift(15);

    expect(list.get(0).value).toBe(15);
  });

  it("should change value of element at given index", () => {
    list.append(5);
    list.append(10);
    expect(list.get(1).value).toBe(10);

    list.set(20, 1);

    expect(list.get(1).value).toBe(20);
  });
});
