export default (e: unknown): Error =>
    e instanceof Error ? e : new Error(JSON.stringify(e));
