import React from 'react';

export default function PolicyBadge({ status = 'active' }) {
  return (
    <span style={{
      background: '#2563eb',
      color: '#ffffff',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 500,
    }}>
      {status}
    </span>
  );
}
