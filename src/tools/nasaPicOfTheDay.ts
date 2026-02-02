import dotenv from 'dotenv'
dotenv.config()
const NASA_API_KEY = process.env.NASA_API_KEY!
console.log(NASA_API_KEY)
import { z } from 'zod';
import axios from 'axios';
import { createTool } from '@mastra/core/tools';
const nasaEndPoint = (date?:string) => `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}${date ? `&date=${date}` : ''}`;

export async function fetchNasaPicOfDay(date?:string){
    try {
        const response = await axios.get(nasaEndPoint(date))
        return {
            title:response.data.title,
            date:response.data.dare,
            url:response.data.url,
            explenation:response.data.explenation
        }
    } catch (error:unknown) {
        if(error instanceof Error){
            throw new Error(error.message)
        } else {
            throw new Error('Failed to fetch Nasa image')
        }
    }
}

export const nasaPicOfDayTool = createTool({
    id:'NASA Picture of the day',
    description:'get the NASA picture of the day',
    inputSchema: z.object({
        date: z.string().optional().describe('the date to fetch picture should be YYYY-MM-DD format')
    }),
    execute: async ({date}) => {
        return fetchNasaPicOfDay(date || new Date().toISOString().split('T')[0])
    }
})