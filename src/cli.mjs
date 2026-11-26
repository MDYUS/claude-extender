#!/usr/bin/env node
import {usage,context,checkpoint,resume} from './core.mjs';
import os from 'node:os';import path from 'node:path';
const [cmd,...args]=process.argv.slice(2);
try{let result;switch(cmd){case 'usage':result=usage(args[0]||path.join(os.homedir(),'.claude','projects'));break;case 'context':result=context(args[0]||'.',args[1]||'',args[2]===undefined?16000:Number(args[2]));break;case 'checkpoint':result=checkpoint(args[0]||'.',args.slice(1).join(' '));break;case 'resume':result=resume(args[0]||'.');break;case 'help':case undefined:console.log('claude-extender usage [logs-dir]\nclaude-extender context <project> <query> [byte-budget]\nclaude-extender checkpoint <project> <note>\nclaude-extender resume <project>');process.exit(0);default:throw Error('Unknown command; use help')}console.log(JSON.stringify(result,null,2))}catch(e){console.error(e.message);process.exitCode=1}
