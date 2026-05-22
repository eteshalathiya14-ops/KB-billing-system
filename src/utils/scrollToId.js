export function scrollToId(id, { offset = 80, behavior = "smooth" } = {}) {
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const targetTop = rect.top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, targetTop), behavior });
  return true;
}

export function scheduleScrollToId(
  id,
  {
    offset = 80,
    behavior = "smooth",
    maxAttempts = 30,
    attemptDelayMs = 50,
  } = {}
) {
  if (!id) return () => {};

  let cancelled = false;
  let attempts = 0;
  let timeoutId = null;

  const tryScroll = () => {
    if (cancelled) return;

    attempts += 1;
    const ok = scrollToId(id, { offset, behavior });
    if (ok) return;

    if (attempts >= maxAttempts) return;
    timeoutId = window.setTimeout(tryScroll, attemptDelayMs);
  };

  // Start on next paint + keep retrying until layout is stable
  window.requestAnimationFrame(() => {
    tryScroll();
  });

  return () => {
    cancelled = true;
    if (timeoutId) window.clearTimeout(timeoutId);
  };
}


