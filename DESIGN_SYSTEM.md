# Design System Specifications

This document records the exact color values, gradients, and material properties used in the project for future reference.

## 1. Atmosphere (Background Gradient)

**Concept:** "Museum Light" — bold, atmospheric depth.
**Opacity:** 40% - 50%

| Position | Color (RGBA) | Opacity | Description |
| :--- | :--- | :--- | :--- |
| **Top Left** (0% 0%) | `rgba(190, 210, 240, 0.4)` | 40% | **Cool Slate** (Primary illumination) |
| **Top Right** (100% 0%) | `rgba(220, 210, 200, 0.4)` | 40% | **Warm Stone** (ambient warmth) |
| **Bottom Right** (100% 100%) | `rgba(210, 230, 255, 0.5)` | 50% | **High Key** (Brightest reflection) |
| **Bottom Left** (0% 100%) | `rgba(240, 230, 220, 0.4)` | 40% | **Grounding Warmth** |

**CSS Code:**
```css
background-image: 
  radial-gradient(at 0% 0%, rgba(190, 210, 240, 0.4) 0%, transparent 50%),
  radial-gradient(at 100% 0%, rgba(220, 210, 200, 0.4) 0%, transparent 50%),
  radial-gradient(at 100% 100%, rgba(210, 230, 255, 0.5) 0%, transparent 70%),
  radial-gradient(at 0% 100%, rgba(240, 230, 220, 0.4) 0%, transparent 60%);
```

---

## 2. Materials (Surfaces)

**Card Surface**
*   **Background:** `bg-white/80` (White with 80% opacity)
*   **Blur:** `backdrop-blur-xl` (Heavy frosted glass effect)
*   **Border:** `border-slate-200/80` (Subtle, defined edge)
*   **Shadow (Rest):** `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]` (Soft ambient occlusion)
*   **Shadow (Hover):** `shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]` (Lifted state)
*   **Scale (Hover):** `scale-[1.005]` (Micro-interaction lift)

**Main Background**
*   **Base Color:** `bg-slate-50` (Off-white paper tone)

---

## 3. Typography & Palette

**Font Family:** Inter (Google Fonts)

**Text Hierarchy**
*   **Primary Text (Headings/Body):** `text-slate-900` (Almost Black)
*   **Secondary Text (Subtitles/Narrative):** `text-slate-600` (Mid-tone Grey)
*   **Meta Text (Labels/Footers):** `text-slate-500` or `text-slate-400`
*   **Accent (Success/Outcome):** `text-emerald-700/90`

**Specific UI Elements**
*   **Pill Badge:** `bg-slate-100/80`, `text-slate-400`, `border-slate-200`
*   **Dividers:** `bg-slate-200` or `bg-slate-200/60` (for card internals)
*   **Arrows:** `text-slate-300` (rest) → `text-slate-400` (hover)

---

## 4. Spacing System

**Vertical Rhythm**
*   **Section Padding:** `py-24` (96px)
*   **Internal Stack:** `space-y-16` (64px between header and content)
*   **Footer Padding:** `pb-6` (Tight integration)

**Layout Width**
*   **Container Max Width:** `max-w-[840px]` (Editorial optimal line length)
