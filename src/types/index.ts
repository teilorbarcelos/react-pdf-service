export interface PDFRequest {
  template: string;
  data: Record<string, unknown>;
  options?: {
    landscape?: boolean;
    format?: string;
  };
}

export interface TemplateProps {
  data: Record<string, unknown>;
}
