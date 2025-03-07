import { TStatus } from '@/app/types';
import React, { useMemo } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from './status.styles';

interface Status {
  name: string;
  color: 'green' | 'red' | 'orange';
}

const statuses: Record<TStatus, Status> = {
  Scheduled: { name: 'Match preparing', color: 'orange' },
  Ongoing: { name: 'Live', color: 'green' },
  Finished: { name: 'Finished', color: 'red' }
};

interface Props {
  status: TStatus;
}

export const Status: React.FC<Props> = ({ status }) => {
  const currentStatus: Status = statuses[status];
  const { width } = useWindowDimensions();
  const s = useMemo(() => styles(width), [width]);

  return (
    <View style={ [s.status, s[currentStatus.color]] }>
      <Text style={ s.text }>
        { currentStatus.name }
      </Text>
    </View>
  );
};

