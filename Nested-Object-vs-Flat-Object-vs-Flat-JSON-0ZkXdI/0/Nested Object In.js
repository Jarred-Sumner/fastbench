
for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 200; j++) {
        let id1 = '@user_' + i
        let id2 = '@labsproject_' + j
        if (!(id1 in cache)) cache[id1] = {}
        let val = cache[id1][id2] || 0
        cache[id1][id2] = val + 1
    }
}