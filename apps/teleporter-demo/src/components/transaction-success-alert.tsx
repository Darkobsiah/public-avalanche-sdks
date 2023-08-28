import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import Rive from '@rive-app/react-canvas';
import successCheck from '@/assets/success-check.riv?url';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/ui/button';
import { truncateAddress } from '@/utils/truncate-address';
import { ExternalLink } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { capitalize } from 'lodash-es';

export const TransactionSuccessAlert = ({
  explorerBaseUrl,
  txHash,
  actionLabel,
  className,
  ...rest
}: { explorerBaseUrl: string; txHash: string; actionLabel?: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Alert
      className={cn('flex flex-nowrap mt-4', className)}
      {...rest}
    >
      {/* <RocketIcon className="h-4 w-4" /> */}
      <Rive
        className="h-8 w-8 inline-flex"
        src={successCheck}
      />
      <div className="ml-2">
        <AlertTitle>{actionLabel ? capitalize(actionLabel) : 'Transaction'} success!</AlertTitle>
        <AlertDescription>
          View your transaction:
          <a
            className={cn(buttonVariants({ variant: 'link' }), 'h-2')}
            href={`${explorerBaseUrl}/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {truncateAddress(txHash)}
            <ExternalLink
              size={16}
              className="ml-1"
            />
          </a>
        </AlertDescription>
      </div>
    </Alert>
  );
};
