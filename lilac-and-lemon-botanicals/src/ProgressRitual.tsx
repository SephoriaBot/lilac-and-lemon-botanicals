import { useEffect, useState } from 'react';

type Step = {
  id: number;
  step_order: number;
  ritual_name: string;
  task_label: string;
  completed: number; // 0 or 1 from sqlite
};

export default function ProgressRitual() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/steps')
      .then((r) => r.json())
      .then((rows: Step[]) => setSteps(rows.sort((a, b) => a.step_order - b.step_order)))
      .catch(() => setSteps([]))
      .finally(() => setLoading(false));
  }, []);

  async function toggle(step: Step) {
    const nextCompleted = step.completed ? 0 : 1;
    // optimistic update
    setSteps((prev) => prev.map((s) => (s.id === step.id ? { ...s, completed: nextCompleted } : s)));
    try {
      await fetch('/api/steps', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: step.id, completed: nextCompleted }),
      });
    } catch {
      // revert on failure
      setSteps((prev) => prev.map((s) => (s.id === step.id ? { ...s, completed: step.completed } : s)));
    }
  }

  const done = steps.filter((s) => s.completed).length;
  const pct = steps.length ? Math.round((done / steps.length) * 100) : 0;

  return (
    <section className="routine">
      <div className="wrap">
        <div className="routine-head">
          <span className="label">The Ritual</span>
          <h2>Five steps to launch.</h2>
          <p>The same order you'd trust a routine to follow — one step preps the next. Tap each one off as you go.</p>
        </div>

        <div className="progress-track">
          <div className="progress-bar-outer">
            <div className="progress-bar-inner" style={{ width: `${pct}%` }} />
          </div>
          <div className="progress-label">
            <span><strong>{done}</strong> of {steps.length || 5} complete</span>
            <span>{pct}%</span>
          </div>
        </div>

        <div className="steps">
          {loading && <p style={{ color: 'var(--plum-soft)', gridColumn: '1 / -1', textAlign: 'center' }}>Loading your progress…</p>}
          {!loading && steps.map((step) => (
            <div
              key={step.id}
              className={`step${step.completed ? ' done' : ''}`}
              tabIndex={0}
              role="button"
              aria-pressed={!!step.completed}
              onClick={() => toggle(step)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(step); } }}
            >
              <span className="step-num">{String(step.step_order).padStart(2, '0')}</span>
              <div className="step-ritual">{step.ritual_name}</div>
              <div className="step-task">{step.task_label}</div>
              <div className="step-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--cream)" strokeWidth={3}>
                  <path d="M4 12l6 6L20 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
