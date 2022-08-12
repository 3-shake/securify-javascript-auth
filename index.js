(async() => {
    // エントリポイント
    const fs = require('fs')
    try {
        const requestSourceCode = fs.readFileSync("./src/auth.js", 'utf8')
        const responseHeaders = await eval(`
        ${requestSourceCode}
        (async() => {
            const headers = await authentication()
            return headers
        })()
        `)
        // 成功した場合はヘッダを出力します
        console.log('認証ヘッダーの取得に成功しました。')
        console.log('ヘッダーの返り値')
        console.log(responseHeaders)
        return responseHeaders
    } catch (e) {
        // 失敗した場合はエラーメッセージが表示されます
        console.log('認証ヘッダーの取得に失敗しました。')
        console.log('エラーメッセージ')
        console.log(e?.message)
        console.log('エラー詳細')
        console.log(e)
        return
    }
})()