export enum UserRole {
  CIVILIAN = 'CIVILIAN',
  WORKER = 'WORKER',
  ADMIN = 'ADMIN'
}

export enum ReportStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED'
}

export enum WasteType {
  PLASTIC = 'PLASTIC',
  ORGANIC = 'ORGANIC',
  E_WASTE = 'E_WASTE',
  HAZARDOUS = 'HAZARDOUS',
  MIXED = 'MIXED'
}

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

// 9️⃣ DATABASE SCHEMA DEFINITIONS (Simulated)

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  passwordHash: string; // In real app, bcrypt hash
  points: number; // For Rewards System
  badges: string[];
  teamId?: string; // For Workers
  location?: Location; // Last known location
}

export interface Team {
  _id: string;
  name: string;
  members: string[]; // User IDs
  active: boolean;
  baseLocation: Location;
  stats: {
    reportsHandled: number;
    avgResolutionTimeHours: number;
  }
}

export interface Report {
  _id: string;
  reporterId: string; // Civilian ID
  wasteType: WasteType;
  description: string;
  imageUrl?: string; // Base64 or URL
  location: Location;
  status: ReportStatus;
  assignedTeamId?: string;
  createdAt: string; // ISO Date
  updatedAt: string; // ISO Date
  timeline: {
    status: ReportStatus;
    timestamp: string;
    note?: string;
  }[];
  feedback?: {
    rating: number;
    comment: string;
  };
}

export interface Notification {
  _id: string;
  userId: string;
  message: string;
  read: boolean;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
