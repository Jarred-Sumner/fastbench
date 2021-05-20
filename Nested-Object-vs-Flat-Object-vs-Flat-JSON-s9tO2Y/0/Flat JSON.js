for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        let id1 = '@user_' + i
        let id2 = '@labsproject_' + j
        let key = JSON.stringify([id1,id2])
        let val = cache[key] || 0
        cache[key] = val + 1
    }
}