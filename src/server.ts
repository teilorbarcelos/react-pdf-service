import express from 'express';
import { PDFEngine } from './engine/pdfEngine.js';
import { PDFRequest } from './types/index.js';

const app = express();
const port = process.env.PORT || 8889;
const engine = new PDFEngine();

app.use(express.json());

app.post('/v1/pdf/generate', async (req, res) => {
  console.log('Generating PDF request received');
  
  try {
    const request = req.body as PDFRequest;
    
    if (!request.template) {
      return res.status(400).send('Template is required');
    }

    const stream = await engine.generate(request);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
    
    stream.pipe(res);
    
    stream.on('end', () => {
      console.log('PDF generated successfully');
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error generating PDF:', error);
    res.status(500).send(`Error generating PDF: ${message}`);
  }
});

app.listen(port, () => {
  console.log(`React-PDF Service listening at http://localhost:${port}`);
});
