/**
 * エラーメッセージ
 * - CONST
 * - ERROR
 */
export const MESSAGES = {
  M001: 'Login Successful!',
  M002: 'Logout Successful!',
  M003: 'Sync Successful!',
  M004: 'Upload Completed!',
  M005: 'Reverted successfully!',
  M006: 'Upload to Prod Env!',
  M007: 'Upload to Dev Env!',

  E001: 'Kana is required.',
  E002: 'Only Hiragana and Numbers are allowed.',
  E003: 'Failed to load card image.',
  E004: 'Error fetching card illustrations:',
  E005: 'Please set the image after awakening (After).',
  E006: 'Login Failed…',
  E007: 'Logout Failed…',
  E008: 'Email address format is incorrect.',
  E009: 'This user has been disabled.',
  E010: 'User not found.',
  E011: 'Your password or ID is incorrect.',
  E012: 'Sync Failed…',
  E013: 'Upload Failed…',
} as const;
