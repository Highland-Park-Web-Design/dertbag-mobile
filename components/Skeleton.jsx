import React from 'react';
import Skeleton from 'react-native-reanimated-skeleton';

function CustomSkeleton({height, width, loading}) {
  return (
    <>
      <Skeleton
        containerStyle={{
          width: '100%',
          gap: 15,
          flexDirection: 'row',
        }}
        isLoading={loading}
        layout={[
          {key: 'someId', width: width, height: height},
          {key: 'someId', width: width, height: height},
        ]}
      />
    </>
  );
}

export default CustomSkeleton;
