import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid #4f46e5',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerLeft: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    color: '#1e1b4b',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 9,
    color: '#4b5563',
    marginTop: 4,
  },
  dateText: {
    fontSize: 9,
    color: '#6b7280',
  },
  table: {
    width: 'auto',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    minHeight: 28,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#f3f4f6',
    borderBottomColor: '#9ca3af',
    borderBottomWidth: 1.5,
  },
  thText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#374151',
    padding: 6,
  },
  tdText: {
    fontSize: 8.5,
    color: '#4b5563',
    padding: 6,
  },
  colName: { width: '25%' },
  colEmail: { width: '30%' },
  colPhone: { width: '15%' },
  colRole: { width: '20%' },
  colStatus: { width: '10%' },
  
  badgeActive: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 7.5,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 45,
  },
  badgeInactive: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 7.5,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 45,
  },
  noData: {
    textAlign: 'center',
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: '#9ca3af',
    borderTop: '0.5pt solid #e5e7eb',
    paddingTop: 8,
  },
});

interface UserDto {
  id: string;
  name: string;
  email: string;
  phone?: string;
  roleName?: string;
  active: boolean;
}

interface UserListTemplateProps {
  title: string;
  users: UserDto[];
  generatedAt: string;
}

export const UserListTemplate: React.FC<UserListTemplateProps> = ({ title, users, generatedAt }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Relatório do Sistema</Text>
        </View>
        <Text style={styles.dateText}>Emitido em: {generatedAt}</Text>
      </View>

      <View style={styles.table}>
        {/* Header Row */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={styles.colName}><Text style={styles.thText}>Nome</Text></View>
          <View style={styles.colEmail}><Text style={styles.thText}>E-mail</Text></View>
          <View style={styles.colPhone}><Text style={styles.thText}>Telefone</Text></View>
          <View style={styles.colRole}><Text style={styles.thText}>Perfil</Text></View>
          <View style={styles.colStatus}><Text style={styles.thText}>Status</Text></View>
        </View>

        {/* Data Rows */}
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <View key={user.id || index} style={styles.tableRow} wrap={false}>
              <View style={styles.colName}>
                <Text style={styles.tdText}>{user.name}</Text>
              </View>
              <View style={styles.colEmail}>
                <Text style={styles.tdText}>{user.email}</Text>
              </View>
              <View style={styles.colPhone}>
                <Text style={styles.tdText}>{user.phone || '-'}</Text>
              </View>
              <View style={styles.colRole}>
                <Text style={styles.tdText}>{user.roleName || '-'}</Text>
              </View>
              <View style={styles.colStatus}>
                <Text style={user.active ? styles.badgeActive : styles.badgeInactive}>
                  {user.active ? 'Ativo' : 'Inativo'}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noData}>Nenhum usuário encontrado.</Text>
        )}
      </View>

      <View style={styles.footer} fixed>
        <Text>Mage Full Stack Project - Relatório de Usuários</Text>
        <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
      </View>
    </Page>
  </Document>
);
