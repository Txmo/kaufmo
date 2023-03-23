/**
 * Oriented after https://en.wikipedia.org/wiki/Trie
 */

export class TrieNode<V> {
    value: null | V;
    children: Map<string, TrieNode<V>>;

    constructor(value: null | V) {
        this.value = value;
        this.children = new Map<string, TrieNode<V>>();
    }
}

export default class Trie<V> {
    private root: TrieNode<V> = new TrieNode<V>(null);
    private count = 0;

    getRoot(): TrieNode<V> {
        return this.root;
    }

    add(key: string, value: V): TrieNode<V> {
        let setNewNode = false;
        key = key.toLowerCase();
        let node: TrieNode<V> = this.root;
        for (let i = 0; i < key.length; ++i) {
            let newNode: undefined | TrieNode<V> = node.children.get(key[i]);
            if (typeof newNode === "undefined") {
                newNode = new TrieNode<V>(null);
                node.children.set(key[i], newNode);
                setNewNode = true;
            }
            node = newNode;
        }
        node.value = value;
        if (setNewNode) {
            ++this.count;
        }
        return node;
    }

    findNode(key: string): undefined | TrieNode<V> {
        key = key.toLowerCase();
        let node: TrieNode<V> = this.root;
        for (let i = 0; i < key.length; ++i) {
            const newNode: undefined | TrieNode<V> = node.children.get(key[i]);
            if (typeof newNode === "undefined") {
                return undefined;
            }
            node = newNode;
        }
        return node;
    }

    find(key: string): false | null | V {
        const node: undefined | TrieNode<V> = this.findNode(key);
        if (typeof node === "undefined") {
            return false;
        }
        return node.value;
    }

    valueCount(): number {
        return this.count;
    }
}