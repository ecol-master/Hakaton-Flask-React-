from .parser_government import run_parser_government
from .parser_fips import run_parser_fips
from .parser_ural56 import run_parser_ural56
from .parser_minprom import run_parser_minprom

functions_parser_sites = (run_parser_government, run_parser_fips, run_parser_ural56, run_parser_minprom)