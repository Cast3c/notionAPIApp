require('dotenv').config()

const TOKEN = process.env.NOTION_TOKEN
const DATABASE_ID = process.env.NOTION_DATABASE_ID 
const PORT = process.env.PORT

module.exports={
    TOKEN,
    DATABASE_ID,
    PORT
}
