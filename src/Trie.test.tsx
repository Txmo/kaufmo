import Trie, { TrieNode } from './Trie';

test('counts 1 after adding 1 item to new trie', () => {
    const trie = new Trie<string>();
    const newNode: TrieNode<string> = trie.add("test", "test-value");
    expect(trie.valueCount()).toBe(1);
});

test('finds item after inserting 1 item to new trie', () => {
    const trie = new Trie<string>();
    const key = "test";
    trie.add(key, "test-value");
    expect(trie.find(key)).not.toStrictEqual(false);
});

test('counts 1 after inserting 2 items with equivalent key', () => {
    const trie = new Trie<string>();
    const key = "test";
    trie.add(key, "test-value");
    trie.add(key, "test-value2");
    expect(trie.valueCount()).toBe(1);
});

test('retrieves second value after inserting 2 items with equivalent key', () => {
    const trie = new Trie<string>();
    const key = "test";
    const value2 = "test-value2";
    trie.add(key, "test-value");
    trie.add(key, value2);
    expect(trie.find(key)).toBe(value2);
});

test('finds false after not inserting into empty trie with not empty key', () => {
    const trie = new Trie<string>();
    expect(trie.find("some-key")).toStrictEqual(false);
});

test('finds null after not inserting into empty trie with empty key', () => {
    const trie = new Trie<string>();
    expect(trie.find("")).toStrictEqual(null);
});
