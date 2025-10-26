bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    
    if (p == NULL && q == NULL){
        return true;
    }
    if (p == NULL && q != NULL){
        return false;
    }
    if (p != NULL && q == NULL){
        return false;
    }

    bool left = isSameTree (p -> left, q -> left);
    bool right = isSameTree (p -> right, q -> right);
    bool current = p -> val == q -> val;

    if (left && right && current){
        return true;
    }else{
        return false;
    }

}
