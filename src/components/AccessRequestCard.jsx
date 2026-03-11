/* AccessRequestCard — Mirrors Tina's test scenario.
   Uses hardcoded values that should match existing tokens in tokens.css.
   Verifies token discovery works for three-layer token systems. */
import React from 'react';

export function AccessRequestCard({ request }) {
  return (
    <div style={{
      borderRadius: '12px',
      padding: '18px',
      backgroundColor: '#fafaf8',
      maxWidth: '420px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #e4e4e0',
    }}>
      <h2 style={{ margin: 0, fontSize: '1.125rem', color: '#1a1a18' }}>
        {request.title}
      </h2>
      <p style={{ margin: '8px 0 12px', color: '#6b6b66', fontSize: '14px' }}>
        {request.description}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span style={{ color: '#1a1a18', fontWeight: 600 }}>Requester</span>
        <span style={{ color: '#2563eb', fontWeight: 600 }}>{request.requester}</span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{
          flex: 1,
          padding: '8px 16px',
          backgroundColor: '#dc2626',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}>
          Deny
        </button>
        <button style={{
          flex: 1,
          padding: '8px 16px',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}>
          Approve
        </button>
      </div>
    </div>
  );
}
