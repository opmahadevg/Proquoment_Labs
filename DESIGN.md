# Design System: Proquoment Labs

*Official Semantic Design System & Visual Architecture Specification*  
*Target: `https://labs.proquoment.in` | Aesthetic: Technical Precision / Dark Monolithic*

---

## 1. Visual Theme & Atmosphere

**Proquoment Labs** embodies the **Technical Precision / Dark Monolithic** design language (Linear / Teenage Engineering / Vercel tier). It completely eliminates generic AI slop tropes (purple/blue radial gradient haze, 3D toy floating objects, bloated double-bezels) in favor of high-craft engineering authority, matte carbon surfaces, and authentic telemetry.

- **Atmosphere Spectrum**:
  - **Density**: `Structured Laboratory` — high-contrast macro-whitespace (`py-20` to `py-28`), tight card padding, tabular data discipline.
  - **Surfaces**: Matte Obsidian & Dark Carbon (`#08090D` canvas, `#0D0F14` card panels) with machined 1px hairlines (`border-white/[0.08]`).
  - **Motion**: Direct, tactile micro-interactions (`active:scale-[0.98]`, spring physics `damping: 24, stiffness: 260`), zero gimmick animations.

---

## 2. Color Palette & Functional Roles

Every color adheres to strict neutral and functional engineering assignments. Saturated AI gradients and purple glows are strictly banned.

| Role | Color Name | Hex / CSS Value | Functional Purpose |
|---|---|---|---|
| **Canvas Base** | Matte Obsidian | `#08090D` (`228 20% 4%`) | Core canvas background surface across all views |
| **Primary Ink** | High-Contrast White | `#F1F3F7` (`220 20% 96%`) | Display headlines, primary titles, active navigation |
| **Secondary Ink** | Cold Steel | `#8B92A0` (`220 10% 58%`) | Body copy, technical descriptions, explanatory subtext |
| **Hairline Border** | Precision Hairline | `rgba(255, 255, 255, 0.08)` | Structural panel lines, 1px separation |
| **Card Surface** | Dark Anodized Carbon | `#0D0F14` (`228 16% 7%`) | Structural card panels, terminals, and bento tiles |
| **Brand Primary** | Cold Engineering Cobalt | `#2563EB` (`221 83% 53%`) | Primary brand anchor, key accents, focus rings |
| **Status Live** | Signal Emerald | `#10B981` | Live agent execution loops, verified telemetry |
| **Status Pending** | Warning Amber | `#F59E0B` | Queued tasks, SLA benchmarks |
| **Ambient Glow** | Cold Cobalt Sheen | `rgba(37, 99, 235, 0.07)` | Subdued directional light source behind hero |

### Ambient Background
```css
/* Structured Precision Technical Grid */
.bg-mesh {
  background-color: #08090D;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37, 99, 235, 0.07), transparent 70%);
  background-size: 32px 32px, 32px 32px, 100% 100%;
}
```

---

## 3. Typographic Architecture

Typography is weighted and hierarchical, driven by geometry and tracking rather than oversized shouting.

- **Primary Typeface**: `Plus Jakarta Sans` / System Grotesk (weights 400 to 800)
- **Monospace Typeface**: `JetBrains Mono` / System Monospace (weights 400 to 600, tabular figures)
- **Banned Typography Styles**: Saturated multi-color AI rainbow gradients (only monochrome silver/steel gradients permitted).

### Scale Hierarchy
- **Display Hero H1**: `clamp(2.5rem, 1.2rem + 3.5vw, 4.25rem)` | Weight: `800` | Leading: `1.08` | Tracking: `-0.035em`
- **Section Heading H2**: `clamp(1.75rem, 2.5vw, 2.75rem)` | Weight: `700` | Leading: `1.15` | Tracking: `-0.025em`
- **Card Title H3**: `1.125rem` (18px) | Weight: `600` | Leading: `1.3` | Tracking: `-0.015em`
- **Body Large**: `1rem` (16px) | Weight: `400` | Leading: `1.6` | Max line length: `65ch`
- **Monospace Telemetry Tags**: `0.75rem` (12px) | Weight: `500` | Tracking: `0.02em` | `tabular-nums`

---

## 4. Component Stylings & Structure

### A. Single-Layer Machined Cards
Bloated "double-bezel" nested wrappers are eliminated. Cards feature a clean single-layer structural enclosure:
- **Background**: `bg-card/80` (resolving to `#0D0F14`)
- **Border**: `border border-white/5` (hovering to `border-white/15`)
- **Specular Inset**: `shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`
- **Radius**: `rounded-xl` (12px)
- **Motion**: Subtle translate-y (`-2px`) on hover, spring duration `0.2s`.

### B. High-Tactile Buttons
- Shape: `rounded-full` or `rounded-lg` pill architecture
- Tactile Feedback: `active:scale-[0.98]` physical press
- Primary: Solid cold cobalt `#2563EB`, text white, subtle highlight border
- Secondary: Translucent carbon `bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]`

---

## 5. Hero Architecture — Real-Time Agent Execution Inspector

Replaces foreign 3D isometric templates with an authentic two-column technical hero:
1. **Left Column**: High-contrast headline, eyebrow badge with live emerald pulse (`Where AI becomes your competitive advantage.`), and primary/secondary CTAs.
2. **Right Column (`HeroVisual`)**: Anodized carbon execution terminal displaying real autonomous agent execution pipeline (`DEFAULT_AGENT_TASKS`), active step spinner, and floating metric capsules with `Geist Mono` tabular data.

---

## 6. Anti-Patterns (Strictly Banned)

- ❌ **No Purple/Blue Radial Glow Haze**: Completely banned.
- ❌ **No Rainbow Gradient Text**: Headlines use crisp white or monochrome silver gradients.
- ❌ **No 3D Toy Cubes or Ceramic Slabs**: Replaced with authentic software interfaces.
- ❌ **No Nested Double-Bezel Containers**: Single-layer machined panels only.
- ❌ **No 3D Cube-Flip Buttons**: Flat, tactile physical interactions only.
- ❌ **No Symmetrical 3-Card Bootstrap Rows**: Asymmetric and dynamic modular layouts only.
