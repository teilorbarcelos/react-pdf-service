import { PDFEngine } from '../src/engine/pdfEngine.js';

describe('PDFEngine', () => {
  let engine: PDFEngine;

  beforeEach(() => {
    engine = new PDFEngine();
  });

  it('should throw error if template not found', async () => {
    const request = {
      template: 'non-existent',
      data: {},
    };

    await expect(engine.generate(request)).rejects.toThrow("Template 'non-existent' not found");
  });

  it('should return a stream when template exists', async () => {
    const request = {
      template: 'simple',
      data: {
        title: 'Test',
        content: 'Test content',
      },
    };

    const stream = await engine.generate(request);
    expect(stream).toBeDefined();
    // In Node.js streams usually have a pipe method
    expect(typeof (stream as any).pipe).toBe('function');
  });
});
