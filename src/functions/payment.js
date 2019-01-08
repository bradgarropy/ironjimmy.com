require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
    const body = JSON.parse(event.body)
    const amount = body.amount
    const token = body.token.id
    const email = body.token.email

    stripe.charges
        .create({
            amount,
            currency: "usd",
            source: token,
            receipt_email: email,
        })
        .then(() => {
            const response = {
                statusCode: 200,
                body: JSON.stringify({message: "💳 payment received!"}),
            }

            callback(null, response)
            return
        })

    return
}
