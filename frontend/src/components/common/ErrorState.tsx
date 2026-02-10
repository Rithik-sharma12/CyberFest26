/**
 * Error State Component - Cyberpunk Theme
 * 
 * Reusable error display with retry option.
 */

import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button, Alert, AlertTitle, AlertDescription } from '@/components/ui';

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = 'Error',
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 min-h-[50vh]">
      <Alert variant="destructive" className="max-w-md border-destructive/50 bg-destructive/10">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="font-orbitron tracking-wide">{title}</AlertTitle>
        <AlertDescription className="font-rajdhani">{message}</AlertDescription>
      </Alert>
      
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-6 hover-glow font-rajdhani">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
}
