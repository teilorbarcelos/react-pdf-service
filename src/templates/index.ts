import React from 'react';
import { SimpleTemplate } from './SimpleTemplate.js';
import { UserListTemplate } from './UserListTemplate.js';

export const templates: Record<string, React.ElementType> = {
  'simple': SimpleTemplate,
  'user-list': UserListTemplate,
};
