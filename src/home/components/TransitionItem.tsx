import {ReactNode, useRef} from 'react';

import { CSSTransition } from "react-transition-group";

interface TransitionItemProps {
    children: ReactNode;
}

export const TransitionItem = ({ children, ...props}: TransitionItemProps) => {

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

