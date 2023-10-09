import { PropagateLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center '>
      <PropagateLoader
        color='#0091B5'
        loading={isLoading}
        size={24}
        data-testid='loader'
        aria-label='Loading Spinner'
      />
    </div>
  );
};

export default Loading;
