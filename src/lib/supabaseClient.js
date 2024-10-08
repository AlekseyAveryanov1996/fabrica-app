import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://liqwcyfpqqmbvjrcilps.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpcXdjeWZwcXFtYnZqcmNpbHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDU5MzEsImV4cCI6MjA0Mzk4MTkzMX0.5mtpy6WIJUIXbO78-pBd9w0riFGNnABqYqC-wpovzyE')