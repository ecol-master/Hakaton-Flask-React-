import asyncio
from aiohttp import ClientSession
from .tools import functions_parser_sites


async def run_parser_sites():
    sites_tasks = list()
    async with ClientSession() as session:
        for function_site in functions_parser_sites:
            sites_task = asyncio.create_task(function_site(session=session))
            sites_tasks.append(sites_task)
    
        await asyncio.gather(*sites_tasks)
