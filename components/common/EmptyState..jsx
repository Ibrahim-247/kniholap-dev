import React from 'react';
import { Empty } from 'antd';
import { cn } from '@/lib/utils';

const EmptyState = ({
    description = 'No data found',
    className = '',
    ...rest
}) => (
    <div className={cn('w-full py-10 flex justify-center items-center', className || '')}>
        <Empty description={description} {...rest} />
    </div>
);

export default EmptyState;