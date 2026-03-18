import React from 'react';

export default function PolicyBadge({ status = 'active' }) {
  return (
    <span style={{
      background: 'var(--color-accent)',
      color: 'var(--color-surface-elevated)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-label)',
      fontWeight: 500,
    }}>
      {status}
    </span>
  );
}
