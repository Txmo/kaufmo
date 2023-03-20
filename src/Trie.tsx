export class TrieNode<V> {
    key: string;
    value: V;
    children = Map<string, V>;

    constructor(key: string, value: V) {
        this.key = key;
        this.value = value;
    }
}

export default class Trie<V> {
    root: null | TrieNode<V> = null;

    add(key: string, value: V): TrieNode<V> {
        return new TrieNode<V>(key, value);
    }

    find(key: string): Array<TrieNode<V>> {
        let arr = new Array<TrieNode<V>>();
        return arr;
    }
}