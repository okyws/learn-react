import Counter from './components/Counter';
import PlaceContentCenter from './components/PlaceContentCenter';

const Count = () => {
  return (
    <PlaceContentCenter>
      <Counter initialValue={10} />
    </PlaceContentCenter>
  );
};

export default Count;
