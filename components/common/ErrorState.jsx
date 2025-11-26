import React from 'react';
import { Result } from 'antd';
import { cn } from '@/lib/utils';

const ErrorState = ({
    status = '500',
    title = 'There was an error processing your request',
    subTitle = 'Something went wrong. Please try again later.',
    className = '',
    ...rest
}) => (
    <div className={cn("w-full py-10 flex justify-center items-center", className || "")}>
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            {...rest}
        />
    </div>
);

export default ErrorState;