export class DuckDuckScraperException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuckDuckScraperException';
  }
}

export class DuckDuckScraperNotFoundException extends DuckDuckScraperException {
  constructor(message: string) {
    super(message);
    this.name = 'DuckDuckScraperNotFoundException';
  }
}
