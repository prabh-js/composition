import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Second = (props) => {
    return (
        <div>
            From Second Component
            {props.children}
        </div>
    )
}
export default Second;