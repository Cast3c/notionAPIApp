import axios from 'axios'

// const DATABASE_ID = 1edd78c0f0e68032a5f5c364d0f6063a

const getTasks = async (token) => {
    const response = await axios.post(
        'https://api.notion.com/v1/databases/1edd78c0f0e68032a5f5c364d0f6063a/query',
        { page_zise: 10 },
        {
            headers:{
                'Authorization': `Bearer${token}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
        }
    )

    return response.data
}
export default { getTasks }