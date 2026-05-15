import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { templates } from '../templates/index.js';
import { PDFRequest } from '../types/index.js';

export class PDFEngine {
  public async generate(request: PDFRequest): Promise<NodeJS.ReadableStream> {
    const Template = templates[request.template];
    
    if (!Template) {
      throw new Error(`Template '${request.template}' not found`);
    }

    // Pass data as props to the template
    const element = React.createElement(Template, request.data);

    // Render to stream
    return await ReactPDF.renderToStream(element);
  }
}
