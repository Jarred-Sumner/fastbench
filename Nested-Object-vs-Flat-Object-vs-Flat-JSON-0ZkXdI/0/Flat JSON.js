for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 200; j++) {
        let id1 = '@user_' + i
        let id2 = '@labsproject_' + j
        let key = JSON.stringify([id1,id2])
        let val = cache[key] || 0
        cache[key] = val + 1
    }
}