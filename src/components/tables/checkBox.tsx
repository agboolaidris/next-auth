import React, { forwardRef, useEffect, useRef } from 'react';

const Checkbox: any = forwardRef<HTMLInputElement | any>(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = useRef<HTMLInputElement>();
    const resolvedRef: any = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

Checkbox.displayName = 'checkboxRef';

export default Checkbox;
