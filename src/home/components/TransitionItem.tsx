import { useRef } from 'react';

import { CSSTransition } from "react-transition-group";

export const TransitionItem = ({ children, ...props}) => {

    const nodeRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={ nodeRef }
            timeout={ 500 }
            classNames={'transition'}
            {...props}
        >
            <div ref={nodeRef} >
                {children}
            </div>
        </CSSTransition>
    )
}

