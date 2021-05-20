
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        let id1 = '@user_' + i
        let id2 = '@labsproject_' + j
        if (!cache[id1]) cache[id1] = {}
        let val = cache[id1][id2] || 0
        cache[id1][id2] = val + 1
    }
}