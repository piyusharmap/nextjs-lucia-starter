import { LoaderCircle } from 'lucide-react';

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <LoaderCircle size={18} className='animate-loader-spin' />
    </div>
  );
};
