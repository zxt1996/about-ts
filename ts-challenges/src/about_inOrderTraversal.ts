

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

type InOrderTraversal<
    T extends TreeNode | null,
    U extends TreeNode = NonNullable<T>
> = T extends TreeNode
    ? [...InOrderTraversal<U['left']>, U['val'], ...InOrderTraversal<U['right']>]
    : []

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
        val: 3,
        left: null,
        right: null,
        },
        right: null,
    },
}
    
// 结果: [1, 3, 2]
type result = InOrderTraversal<typeof tree>