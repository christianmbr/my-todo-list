import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const MYAPIKEY = process.env.MYAPIKEY
const MYCONTENTTYPE = process.env.MYCONTENTTYPE

// This APPI is from Rapid API text translator free.
export default async function translateEsToEn (title) {
  const encodedParams = new URLSearchParams()
  encodedParams.append('source_language', 'es')
  encodedParams.append('target_language', 'en')
  encodedParams.append('text', title)

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': MYAPIKEY,
      'X-RapidAPI-Host': MYCONTENTTYPE
    },
    data: encodedParams
  }

  try {
    const response = await axios.request(options)
    // Thing to do.
    // Try to validate this response.
    return response.data.data.translatedText
  } catch (err) {
    console.error(err.message)
  }
}
