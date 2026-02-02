import { createTool } from "@mastra/core/tools";
import {z} from 'zod';

export const getCurrentDate = createTool({
    id: 'Get the current date',
    description: 'Get todays date',
    inputSchema:z.object({}),
    execute: async () => {
        return new Date().toISOString();
    }
})