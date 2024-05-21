function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) { // If the kangaroos have the same jump distance, they will never meet
         return "NO";
     } else {
         let n = (x2 - x1) / (v1 - v2);
         if (Number.isInteger(n) && n >= 0) { // If n is a positive integer, they will meet
             return "YES";
         } else {
             return "NO";
         }
     }
 }