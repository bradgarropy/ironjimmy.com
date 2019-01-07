const handler = (event, context, callback) => {
    console.log(event)
    console.log(context)
    console.log(callback)

    callback(null, {
        statusCode: 200,
        body: "Hello, World",
    })
}

export default handler
