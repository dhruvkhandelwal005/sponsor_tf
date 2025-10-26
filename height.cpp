int max(int a, int b) {
    int ans;

    if (a > b) {
        ans = a;  
    } else {
        ans = b;
    }

    return ans;
}

int height(struct TreeNode* root){

    if (root == NULL){
    return 0;
    }

    int left = height (root -> left);
    int right = height (root -> right);

    int ans = max (left, right) + 1;
    return ans ;
}

int diameterOfBinaryTree(struct TreeNode* root) {

     if (root == NULL) {
        return 0;
    }

    int opt1 = diameterOfBinaryTree(root -> left);
    int opt2 = diameterOfBinaryTree(root -> right);
    int opt3 = height(root -> right) + height(root -> left);

    int ans = max ( opt1 , max (opt2 , opt3));
    return ans;

}
