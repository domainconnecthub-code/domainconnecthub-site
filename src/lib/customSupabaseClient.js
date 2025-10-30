import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abidaljamqusmiqffjyx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaWRhbGphbXF1c21pcWZmanl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwOTc3MDIsImV4cCI6MjA3NTY3MzcwMn0.5d5fzXk94ONHuzZGMD-2EwAY38MMVm4HDyYzpBHNUTk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);