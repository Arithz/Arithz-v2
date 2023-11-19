class CacheStorageCache {
  private static instance: CacheStorageCache;
  private db = "cachedb";
  private duration = 60 * 30; // 30 minutes

  private constructor() {
    if (CacheStorageCache.instance) {
      return CacheStorageCache.instance;
    }
    CacheStorageCache.instance = this;
  }

  public static getInstance(): CacheStorageCache {
    if (!CacheStorageCache.instance) {
      CacheStorageCache.instance = new CacheStorageCache();
    }
    return CacheStorageCache.instance;
  }

  private isExpired(timestamp: number): boolean {
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    return currentTime > timestamp;
  }

  public async set(key: string, document: any): Promise<void> {
    try {
      const expiration = Math.floor(Date.now() / 1000) + this.duration; // Calculate expiration timestamp
      const cacheData = {
        document,
        expiration,
      };
      const encryptedData = JSON.stringify(cacheData);
      const cache = await caches.open(this.db);
      const response = new Response(encryptedData);
      await cache.put(key, response);
    } catch (error) {
      throw new Error("Error caching the document");
    }
  }

  public async get(key: string): Promise<any | null> {
    try {
      const cache = await caches.open(this.db);
      const response = await cache.match(key);

      if (response) {
        const encryptedData = await response.text();
        const decryptedData = encryptedData;
        const cacheData = JSON.parse(decryptedData);

        if (cacheData.expiration && !this.isExpired(cacheData.expiration)) {
          return cacheData.document;
        } else {
          await cache.delete(key); // Entry expired, delete from cache
        }
      }
    } catch (error) {
      throw new Error("Error retrieving the cached document");
    }

    return null;
  }
}

const cache = CacheStorageCache.getInstance();
export { cache };
