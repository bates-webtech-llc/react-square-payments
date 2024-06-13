import * as React from 'react';

type ErrorScreenProps = {
  isDevelopment?: boolean;
};

const RenderErrorScreen = (
  { isDevelopment = process.env.NODE_ENV === 'development' }: ErrorScreenProps,
  ref: React.LegacyRef<HTMLDivElement>
) => {
  // Throw an error if not in development mode
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Please contact your developer to provide the required parameters to use the Web Payments SDK.');
  }

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #d92b2b',
        borderRadius: '5px',
        textAlign: 'center',
        color: '#333',
        backgroundColor: '#ffe5e5'
      }}
      ref={ref}
    >
      <div style={{ marginBottom: '15px' }}>
        <svg height={17} viewBox="0 0 20 17" width={20}>
          <path
            d="M10.874.573l8.3 14.941A1 1 0 0118.3 17H1.7a1 1 0 01-.875-1.486l8.3-14.94a1 1 0 011.75 0zM9 12v2h2v-2H9zm2-1V7H9v4h2z"
            fill="#d92b2b"
            fillRule="evenodd"
          />
        </svg>
      </div>

      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {isDevelopment ? 'No location ID or app ID found. Please check your configuration.' : 'Error'}
        </h1>
        <p style={{ fontSize: '14px' }}>
          {isDevelopment ? (
            <>
              Please provide a location ID or app ID to use the{' '}
              <a
                href="https://developer.squareup.com/docs/web-payments/overview"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: '#d92b2b' }}
              >
                Web Payments SDK
              </a>{' '}
              to take payments on a web client.
            </>
          ) : (
            <>An error occurred while loading your Payment Form.</>
          )}
        </p>
      </div>
    </div>
  );
}

const ErrorScreen = React.forwardRef<HTMLDivElement, ErrorScreenProps>(RenderErrorScreen);

export default ErrorScreen;
export type { ErrorScreenProps };