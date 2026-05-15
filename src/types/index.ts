export interface PDFRequest {
  template: string;
  data: Record<string, any>;
  options?: {
    landscape?: boolean;
    format?: string;
  };
}

export interface TemplateProps {
  data: Record<string, any>;
}
