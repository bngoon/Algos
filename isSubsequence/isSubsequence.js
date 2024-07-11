function isSubsequence(s, t) {
    // initialize two poiners
    sPointer = 0;
    tPointer = 0;
// loop thorught the string `t`
    while (tPointer < t.length){
        //if the characters at the current positions of both pointers match
        if(s[sPointer] === t[tPointer]) {
            // move the pointer on the string `s` to the next positon
            sPointer++
        }
        // Always move the pointer on the string `t` to the next position
        tPointer++
    }
    // If the `sPointer` has moved through all characters in `s`
    // It means all characters of `s` were found in `t` in order
    return sPointer === s.length;
};
