async function time(request, response) {
    const apiSecret = 0 | process.env.API_SECRET 
    const dynamicDate = new Date()
    const subscribers = parseInt(Math.random() * 10000)

    response.json({
        date: dynamicDate.toGMTString(),
        subscribers: subscribers
    })
}

export default time