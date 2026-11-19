# Implementation Plan: Live Enterprise Agent Workflow Visual

Build a theme-coherent, live-operating autonomous agent pipeline visual in `src/components/ui/agent-workflow-visual.tsx`.

## Core Objectives
1. **Thematic Coherence**: Rebuild using the Cobalt Toile and Copperplate design system (`--ctl-paper`, `--ctl-line`, `--ctl-ink`, `--ctl-text`, `--ctl-soft`, `--ctl-wash`). Solid paper background with engraved corner ticks, classical serif typography, high-contrast copperplate node cards.
2. **Live Project Simulation**: Show the agent actively executing on 3 real enterprise projects:
   - Project Alpha: Autonomous Procurement and Invoice 3-Way Reconciliation
   - Project Beta: Algorithmic Underwriting and SEC 10-K Analysis
   - Project Gamma: HIPAA Clinical Intake and Diagnostic Triage
3. **Interactive Controls & Live Telemetry**:
   - Project selector tabs.
   - Play/Pause toggle with execution speed selector.
   - Step Forward manual trigger.
   - "Simulate Inbound Event" trigger button.
   - Real-time telemetry: Latency, Token counter, API cost, Verified Confidence.
   - Live Execution Terminal showing timestamped JSON-RPC tool calls and reasoning.
4. **Contract Testing & Invariant Preservation**:
   - Preserve all nodes required by `phase4.test.mjs` and `phase4.browser.test.mjs` ("Email Inbox", "Webhook", "AI Classifier", "CRM Update", "Auto-Responder", "Slack Alert").
   - Retain required SVG paths, responsive grid classes (`hidden lg:grid`, `lg:hidden`), and unique gradient ID hooks.
   - Zero em dashes or en dashes anywhere.
   - Keep all 157 existing tests passing.
