const express = require('express')
const router = express.Router()
const notion = require('../utils/notionClient')
const config = require('../utils/config')

router.get('/', async (request, response) => {
    const databaseId = config.DATABASE_ID
    try {
        const { status, page_size = 20, start_cursor } = request.query

        const filter = status ? {
            property: 'Status',
            status: { equals: status }
        } : undefined

        const result = await notion.databases.query({
            database_id: databaseId,
            filter,
            page_size: Number(page_size),
            start_cursor: start_cursor || undefined
        })

        response.json(result)
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: error.message })
    }
})

module.exports = router