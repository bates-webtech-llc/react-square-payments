// Dependencies
import * as React from 'react';

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  spanProps?: React.HTMLAttributes<HTMLSpanElement>;
};

const Divider: React.FC<DividerProps> = ({ children, spanProps, ...props }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      margin: '20px 0',
      borderBottom: '1px solid #ccc',
    }}
    {...props}
  >
    <span
      style={{
        padding: '0 10px',
        color: '#666',
        backgroundColor: '#fff',
      }}
      {...spanProps}
    >
      {children ?? 'or'}
    </span>
  </div>
);

export default Divider;
export type { DividerProps };
