/* AccessRequestCard — Component with hardcoded values for testing */
import React from 'react';

export default function AccessRequestCard({ request }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e4e4e0',
        borderRadius: '6px',
        padding: '16px',
        marginBottom: '12px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.125rem', color: '#1a1a18', margin: 0 }}>
          {request.title}
        </h3>
        <span
          style={{
            background: '#fef2f2',
            color: '#991b1b',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
          }}
        >
          {request.priority}
        </span>
      </div>
      <p style={{ color: '#6b6b66', fontSize: '0.875rem', marginTop: '8px' }}>
        {request.description}
      </p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button
          style={{
            background: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Approve
        </button>
        <button
          style={{
            background: '#fafaf8',
            color: '#1a1a18',
            border: '1px solid #e4e4e0',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Deny
        </button>
      </div>
    </div>
  );
}
/* trigger rescan — health score verification */
