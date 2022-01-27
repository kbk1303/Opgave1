import { MorseCryptPipe } from './morse-crypt.pipe';

describe('MorseCryptPipe', () => {
  it('create an instance', () => {
    const pipe = new MorseCryptPipe();
    expect(pipe).toBeTruthy();
  });
});
