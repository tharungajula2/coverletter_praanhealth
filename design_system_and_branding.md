# Praan Health: Design System & Branding Guide

**A Technical Blueprint for Replicating the "Praan Aesthetic"**

---

## 1. Core Philosophy: "Praan Warmth"
Most health-tech apps feel sterile, cold, and "blue."
**Praan Health is different.** We optimize for "Warmth," "Trust," and "Humanity."

*   **Keywords:** Organic, Premium, Matte, Calm.
*   **The Vibe:** Like receiving a letter from a trusted friend, not a hospital bill.

---

## 2. The Color Palette (Technical Specs)
To replicate this look, you cannot just pick "Orange." You must use these exact hex codes and Tailwind classes.

### A. The "Warm Base" (Backgrounds)
We do **not** use pure white (`#ffffff`) as a background. It is too harsh.
*   **Base Color:** `#fcf7f1` (A very light warm cream/eggshell).
*   **CSS Implementation:**
    ```css
    body {
      background-color: #fcf7f1;
    }
    ```

### B. The "Living Gradient" (Atmosphere)
This is the secret sauce. The background is not flat; it has 4 subtle glowing orbs that create depth.
*   **Orb 1 (Top Left):** `rgba(253, 186, 116, 0.25)` (Orange-300)
*   **Orb 2 (Top Right):** `rgba(251, 146, 60, 0.15)` (Orange-400)
*   **Orb 3 (Bottom Right):** `rgba(255, 237, 213, 0.6)` (Orange-100)
*   **CSS Code:**
    ```css
    background-image: 
      radial-gradient(at 0% 0%, rgba(253, 186, 116, 0.25) 0%, transparent 50%),
      radial-gradient(at 100% 0%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
      radial-gradient(at 100% 100%, rgba(255, 237, 213, 0.6) 0%, transparent 50%);
    ```

### C. The Accent Colors (Action & Status)
*   **Primary Action (Buttons/Active States):** `orange-600` (`#ea580c`) -> Hover: `orange-700`.
*   **Secondary Action (Outlines):** `orange-200`.
*   **Success (Healthy):** `emerald-500` (`#10b981`).
*   **Warning (Moderate):** `amber-500` (`#f59e0b`).
*   **Danger (High Risk):** `red-500` (`#ef4444`).

### D. Typography (Text)
*   **Headings:** `text-slate-900` (Dark Gunmetal, not Black).
*   **Body Text:** `text-slate-500` to `text-slate-600` (Softer on the eyes).
*   **Font Family:** `Geist Sans` (Modern, geometric, legible).

---

## 3. UI Component Construction (The "Builders Lab" Look)

### A. The "Glass Card"
We do not use solid white cards. We use "Glassmorphism" to let the warm background bleed through.
*   **Class:** `bg-white/60` (60% opacity).
*   **Blur:** `backdrop-blur-md` (Blurs the content behind it).
*   **Border:** `border border-slate-200/60` (Very subtle definition).
*   **Radius:** `rounded-xl` (Modern, friendly corners).
*   **Shadow:** `shadow-sm` (Minimal lift).

### B. The Interactive Buttons
*   **Default State:** White background, Slate text, Gray border.
*   **Active/Selected State:**
    *   Background: `#ea580c` (Orange-600).
    *   Text: White.
    *   Transform: `scale-[1.02]` (Slight pop).
    *   Shadow: `shadow-md`.
*   **Animation:** `transition-all duration-200` (Smooth mophing).

### C. The Layout Rules
*   **Mobile First:** ALWAYS design for a vertical stack (`flex-col`) first.
*   **Desktop:** Switch to `flex-row` only on screens larger than `lg` (1024px).
*   **Spacing:** Use `gap-6` (24px) or `gap-8` (32px) to let elements breathe.

---

## 4. Replicating the Logic (For New Apps)

If you are building a **New Assessment Tool** (e.g., for Mental Health or Nutrition) but want this exact branding:

1.  **Copy the `globals.css`:** This gives you the gradients and base color.
2.  **Install Tailwind:** Ensure you have the `slate`, `orange`, `emerald`, and `amber` colors enabled.
3.  **Use the Component Structure:**
    *   Wrap your main content in a container: `max-w-3xl mx-auto`.
    *   Wrap your "Tool" in a section.
    *   Use the **State Management pattern** (Store selection IDs, mapped to a `QUESTIONS` array).
4.  **Copy the `BuildersLab.tsx` file:** Rename it, change the `QUESTIONS` array, but **keep the CSS classes**.

---

## 5. Summary Checklist for Quality
If you build a new page, ask these 3 questions. If the answer is "No," it is not **Praan**.
1.  **Is the background pure white?** (It should be Cream `#fcf7f1`).
2.  **Are the borders black?** (They should be `slate-200`).
3.  **Are the animations instant?** (They should be `duration-200` or `duration-300`).
