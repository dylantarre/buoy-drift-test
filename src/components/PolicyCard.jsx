/* PolicyCard — Test component for Fix column formatting validation.
   Contains a mix of:
   - Hardcoded values that MATCH existing design tokens (expect verified token match)
   - Hardcoded values that DON'T match any token (expect suggested new token)
*/
import React from 'react';

const SEVERITY_MAP = {
  critical: {
    /* MATCH: #dc2626 === --color-error / --primitive-red-600 */
    color: '#dc2626',
    /* MATCH: #fef2f2 === --color-error-subtle */
    bg: '#fef2f2',
    label: 'Critical',
  },
  warning: {
    /* MATCH: #d97706 === --color-warning / --primitive-orange-600 */
    color: '#d97706',
    /* MATCH: #fffbeb === --color-warning-subtle */
    bg: '#fffbeb',
    label: 'Warning',
  },
  info: {
    /* NO MATCH: #0ea5e9 is sky blue, not in tokens */
    color: '#0ea5e9',
    /* NO MATCH: #f0f9ff is sky-50, not in tokens */
    bg: '#f0f9ff',
    label: 'Info',
  },
};

export default function PolicyCard({ policy, severity = 'warning' }) {
  const sev = SEVERITY_MAP[severity];

  return (
    <div
      style={{
        /* MATCH: #ffffff === --primitive-white / --color-surface-elevated */
        background: '#ffffff',
        /* MATCH: 8px === --radius-lg */
        borderRadius: '8px',
        /* MATCH: #e4e4e0 === --primitive-gray-200 / --color-border */
        border: '1px solid #e4e4e0',
        /* NO MATCH: 20px is not a spacing token (no --space-5) */
        padding: '20px',
        /* NO MATCH: 14px is not a spacing token */
        marginBottom: '14px',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          /* MATCH: 16px === --space-4 */
          marginBottom: '16px',
        }}
      >
        <h3
          style={{
            /* MATCH: 1.125rem === --text-h3 */
            fontSize: '1.125rem',
            fontWeight: 600,
            /* MATCH: #1a1a18 === --primitive-gray-900 / --color-text-primary */
            color: '#1a1a18',
            margin: 0,
          }}
        >
          {policy?.name ?? 'Unnamed Policy'}
        </h3>

        {/* Severity badge */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            background: sev.bg,
            color: sev.color,
            /* NO MATCH: 3px is not a radius token */
            borderRadius: '3px',
            /* MATCH: 12px === --text-label (0.75rem) — but used as padding, so pixel match to --space-3 */
            padding: '2px 8px',
            /* MATCH: 12px as font-size = 0.75rem === --text-label */
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {sev.label}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          /* MATCH: 0.875rem === --text-body */
          fontSize: '0.875rem',
          /* MATCH: #6b6b66 === --primitive-gray-500 / --color-text-secondary */
          color: '#6b6b66',
          margin: 0,
          /* MATCH: 12px === --space-3 */
          marginBottom: '12px',
          lineHeight: 1.5,
        }}
      >
        {policy?.description ?? 'No description provided.'}
      </p>

      {/* Meta row — heavy drift with unmatched values */}
      <div
        style={{
          display: 'flex',
          /* NO MATCH: 10px is not a spacing token */
          gap: '10px',
          /* MATCH: #f3f3f0 === --primitive-gray-100 / --color-surface-subtle */
          background: '#f3f3f0',
          /* NO MATCH: 10px padding */
          padding: '10px',
          /* MATCH: 4px === --radius-sm */
          borderRadius: '4px',
        }}
      >
        <MetaItem label="Scope" value={policy?.scope ?? 'Global'} />
        <MetaItem label="Last Evaluated" value={policy?.lastEval ?? 'Never'} />
        <MetaItem label="Violations" value={policy?.violations ?? 0} />
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
        <button
          style={{
            /* MATCH: #2563eb === --primitive-blue-500 / --color-accent */
            background: '#2563eb',
            color: '#ffffff',
            border: 'none',
            /* MATCH: 6px === --radius-md */
            borderRadius: '6px',
            /* MATCH: 8px 16px === --space-2 --space-4 */
            padding: '8px 16px',
            fontSize: 'var(--text-body-sm)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Review Policy
        </button>
        <button
          style={{
            background: 'transparent',
            /* NO MATCH: #7c3aed is purple, not in any token */
            color: '#7c3aed',
            /* NO MATCH: #7c3aed border */
            border: '1px solid #7c3aed',
            borderRadius: 'var(--radius-md)',
            padding: '8px 16px',
            fontSize: 'var(--text-body-sm)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Edit Rules
        </button>
      </div>

      {/* Footer with compliance score — uses NO MATCH values */}
      <div
        style={{
          /* MATCH: 12px === --space-3 */
          marginTop: '12px',
          /* MATCH: 8px === --space-2 */
          paddingTop: '8px',
          borderTop: '1px solid #ececea',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            /* NO MATCH: 0.625rem is not in text tokens */
            fontSize: '0.625rem',
            /* NO MATCH: #334155 is slate-700, not in tokens */
            color: '#334155',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Compliance Score
        </span>
        <span
          style={{
            fontWeight: 700,
            /* NO MATCH: 1.5rem is not a defined text size token */
            fontSize: '1.5rem',
            /* MATCH: #16a34a === --primitive-green-600 / --color-success */
            color: '#16a34a',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {policy?.complianceScore ?? '94'}%
        </span>
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          /* NO MATCH: 0.625rem is not a text token */
          fontSize: '0.625rem',
          fontWeight: 500,
          /* MATCH: #9b9b96 === --primitive-gray-400 / --color-text-tertiary */
          color: '#9b9b96',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          /* NO MATCH: 2px is not a spacing token */
          marginBottom: '2px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          /* MATCH: 0.8125rem === --text-body-sm */
          fontSize: '0.8125rem',
          /* MATCH: #1a1a18 === --color-text-primary */
          color: '#1a1a18',
        }}
      >
        {String(value)}
      </div>
    </div>
  );
}
/* trigger rescan 1773252503 */
