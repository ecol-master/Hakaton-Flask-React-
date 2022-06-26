from . import run_parser_adaptive
from . import run_parser_sites
import asyncio, schedule


def parsers_main():
    asyncio.run(run_parser_sites())
    asyncio.run(run_parser_adaptive())


if __name__ == "__main__":
    parsers_main()