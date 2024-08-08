import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(key: string, callBack: () => Promise<T>): Promise<T> {
    const allDataCache: T = await this.cacheManager.get(key);
    if (allDataCache) return allDataCache;

    const data: T = await callBack();

    await this.cacheManager.set(`${key}`, data);
    return data;
  }
}
