import React from 'react';

export default function NotificationBanner({ title, message, type = 'info' }) {
  const colors = {
    info: { bg: '#eff6ff', border: '#2563eb', text: '#1e40af' },
    warning: { bg: '#fef2f2', border: '#991b1b', text: '#991b1b' },
    success: { bg: '#f0fdf4', border: '#16a34a', text: '#166534' },
  };

  const theme = colors[type] || colors.info;

  return (
    <div
      style={{
        background: theme.bg,
        border: `1px solid ${theme.border}`,
        borderRadius: '8px',
        padding: '16px 20px',
        marginBottom: '16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h4
          style={{
            margin: 0,
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.text,
          }}
        >
          {title}
        </h4>
      </div>
      <p
        style={{
          margin: '8px 0 0',
          fontSize: '0.8125rem',
          color: '#6b6b66',
          lineHeight: 1.5,
        }}
      >
        {message}
      </p>
    </div>
  );
}
