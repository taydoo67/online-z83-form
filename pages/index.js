import { google } from 'googleapis'
import dotenv from 'dotenv'

dotenv.config()
const apiKey = process.env.API_KEY
console.log(apiKey)

export const getServerSideProps = async () => {
    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: 'Form Responses 1!A:G'
    })
    console.log(response.data.values[0])
    return {
        props: {}
    }
}

export default function App() {
    return (
        <h1>Online Z83 Form</h1>
    )
}