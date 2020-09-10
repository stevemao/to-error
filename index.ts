import * as stringify from 'json-stringify-safe'

export default (e: unknown): Error =>
    e instanceof Error ? e : new Error(stringify(e));
