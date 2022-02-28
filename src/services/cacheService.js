import { redis } from '../utils/redis';

let cacheService = {
    fetch: fetch
};


async function fetch(key, fetcher, expires) {
    const existing = await get(key);
    if (existing !== null) {
        return existing;
    }
    return set(key, fetcher, expires)
}

async function get(key) {
    const value = await redis.get(key);
    if (value === null) return null
    return JSON.parse(value)
}

async function set(key, fetcher, expires) {
    const value = await fetcher();
    await redis.set(key, JSON.stringify(value), "EX", expires);
    return value;
}

async function del(key) {
    await redis.del(key);
}

export default cacheService;
