// src/config.ts
// Google Sheets Web App URL for contact form submissions.
// Strictly loaded from environment variable VITE_GOOGLE_SHEET_URL.
export const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || '';
