import {MCPServer} from '@mastra/mcp';
import { nasaPicOfDayTool } from './tools/nasaPicOfTheDay.js';
import { getCurrentDate } from './tools/getCurrentDate.js';

console.log('starting MCP')
const server = new MCPServer({
    name:'nasa-mcp-server',
    version:'1.0.0',
    tools: {nasaPicOfDayTool, getCurrentDate},
})

server.startStdio().catch(err=>console.error(err))
console.log('started')