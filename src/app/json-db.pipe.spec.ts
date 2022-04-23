import { JsonDBPipe } from './json-db.pipe';

describe('JsonDBPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonDBPipe();
    expect(pipe).toBeTruthy();
  });
});
