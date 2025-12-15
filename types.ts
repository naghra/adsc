import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface VerticalItem {
  title: string;
  icon: React.ComponentType<any>;
}

export interface FormData {
  fullName: string;
  companyName: string;
  websiteUrl: string;
  monthlySpend: string;
  vertical: string;
  contactMethod: string;
  contactValue: string;
}

export enum PageRoute {
  HOME = '/',
  APPLY = '/apply',
  PRIVACY = '/privacy',
  TERMS = '/terms',
  LOGIN = '/login',
  DASHBOARD = '/dashboard'
}

// Dashboard Types
export interface AdAccount {
  id: string;
  name: string;
  platform: 'Facebook' | 'Google' | 'TikTok';
  status: 'Active' | 'Pending' | 'Disabled';
  type: 'New' | 'Aged';
  balance: number;
}

export interface DashboardStats {
  pendingAccounts: number;
  pendingDeposits: number;
  pendingEdits: number;
  bmShares: number;
  transfers: number;
}