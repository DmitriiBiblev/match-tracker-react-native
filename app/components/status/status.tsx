import { TStatus } from '@/app/types';
import React from 'react';
import { Text, View } from 'react-native';
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

  return (
    <View style={ [styles.status, styles[currentStatus.color]] }>
      <Text style={ styles.text }>{ currentStatus.name }</Text>
    </View>
  );
};

