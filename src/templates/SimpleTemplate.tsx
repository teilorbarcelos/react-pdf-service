import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Register a nice font if possible, but for now we use defaults
// Standard fonts: Helvetica, Times-Roman, Courier, Symbol, ZapfDingbats

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid #1a73e8',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#1a73e8',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#5f6368',
    marginTop: 4,
  },
  content: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#f1f3f4',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    color: '#3c4043',
    lineHeight: 1.5,
  },
  label: {
    fontSize: 10,
    color: '#70757a',
    width: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#9aa0a6',
    borderTop: '0.5pt solid #dadce0',
    paddingTop: 10,
  },
});

interface SimpleTemplateProps {
  title: string;
  content: string;
  items?: string[];
}

export const SimpleTemplate: React.FC<SimpleTemplateProps> = ({ title, content, items }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Generated via React-PDF Service</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>{content}</Text>
        
        {items && items.map((item, index) => (
          <View key={index} style={{ marginTop: 10 }}>
             <Text style={styles.text}>• {item}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        This document was automatically generated.
      </Text>
    </Page>
  </Document>
);
