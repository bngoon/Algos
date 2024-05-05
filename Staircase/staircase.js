function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let s = "#".repeat(i);
        console.log(s.padStart(n))
    }
}
staircase(30);
