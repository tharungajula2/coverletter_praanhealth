# Clinical Assessment Engine: A Deep Dive Guide

**For Beginners & Non-Technical Stakeholders**

---

## 1. Introduction: What is this?
The **Clinical Assessment Engine** is an interactive software tool designed to simulate the "Doctor's Brain" during a patient intake. 

When a user answers a question, the system doesn't just record "Yes" or "No." It assigns a numerical **"Risk Weights"** to that answer and instantly calculates the health of 10 different body systems (Heart, Brain, Muscles, etc.).

This guide explains exactly how the math works, how the code is structured, and how the logic flows, assuming zero prior technical knowledge.

---

## 2. The Inputs (The 15 Variables)
The engine asks **15 specific questions**. Each question is designed to probe a specific health risk. 

Here is the "Dictionary" of questions and the **Points** assigned to each answer.
*   **0 Points:** Healthy / No Issue.
*   **5 Points:** Mild Risk / Warning Sign.
*   **10-15 Points:** High Risk / Established Condition.
*   **20 Points:** Severe Impact (Pain).

| ID  | Question Category | What it checks | Option Scores (0 / 5 / 10 / 15 / 20) |
| :-- | :--- | :--- | :--- |
| **Q1** | **Age** | General resilience | < 40 (0) / 40-55 (5) / 56-69 (10) / 70+ (15) |
| **Q2** | **Diabetes** | Metabolic health | No (0) / Pre (5) / Yes (15) |
| **Q3** | **Heart** | Blood flow/pressure | No (0) / One Condition (5) / Severe (15) |
| **Q4** | **Breathless** | Lung/Heart limit | Never (0) / Sometimes (5) / Often (10) |
| **Q5** | **Stroke/Tremor** | Brain structure | No (0) / Mild (5) / Diagnosed (10) |
| **Q6** | **Confusion** | Brain function | No (0) / Sometimes (5) / Often (10) |
| **Q7** | **Surgery** | Body trauma history | No (0) / Minor (5) / Major/Cancer (10) |
| **Q8** | **Pain** | Mobility limiter | No (0) / Mild (10) / Severe (20) |
| **Q9** | **Falls** | Balance/Stability | No (0) / Once (5) / Multiple (10) |
| **Q10** | **ADL Help** | Independence | No (0) / Occasional (5) / Often (10) |
| **Q11** | **Gut** | Digestion/Absorption | No (0) / Occasional (5) / Freq (10) |
| **Q12** | **Mood** | Mental Health | No (0) / Sometimes (5) / Often (10) |
| **Q13** | **Sleep** | Recovery capability | Good (0) / Variable (5) / Poor (10) |
| **Q14** | **Diet** | Fuel quality | Good (0) / Avg (5) / Poor (10) |
| **Q15** | **Habits** | Toxins | None (0) / Mod (5) / High (10) |

> **"Don't Know" Logic:** If a user selects "Don't Know", we assign a safety score of **5** (Mild Risk). This ensures we don't assume they are perfectly healthy just because they are unsure.

---

## 3. The Scoring Algorithm (The Math)
We do not just sum up all points. We map specific questions to specific **Body Systems**. This creates a "Health Profile."

### The 10 Categories
Here is the exact formula used in the code to calculate the score for each bar in the graph.

1.  **Metabolic:** Purely based on **Diabetes (Q2)**.
2.  **Cardiovascular:** Purely based on **Heart (Q3)**.
3.  **Cognitive (Neuro):** Sum of **Stroke (Q5)** + **Confusion (Q6)**.
4.  **Muscular (Musculoskeletal):** Purely based on **Pain (Q8)**. *Note: Pain is weighted heavily (up to 20 pts) because it stops people from moving.*
5.  **Frailty:** Sum of **Falls (Q9)** + **ADL Help (Q10)**.
6.  **Digestive:** Purely based on **Gut (Q11)**.
7.  **Emotional:** Purely based on **Mood (Q12)**.
8.  **Sleep:** Purely based on **Sleep (Q13)**.
9.  **Lifestyle:** Sum of **Diet (Q14)** + **Habits (Q15)**.
10. **Resilience:** Sum of **Age (Q1)** + **Breathlessness (Q4)** + **Surgery (Q7)**.

### The Total Risk Score
The "Big Number" you see on the card is simply the **Sum of All Category Scores**.

*   **0 - 20 Points:** ✅ **Healthy Baseline.**
*   **21 - 40 Points:** ⚠️ **Moderate Attention Needed.**
*   **41+ Points:** 🚨 **High Complexity Profile / High Risk.**

---

## 4. Technical Explanation (How the Code Works)

### The "State" (Memory)
Imagine the app has a temporary notebook called `state`.
When you click a button for Question 1, the app writes down:
`Question 1 = "Below 40"`

In code, this looks like:
```javascript
const [answers, setAnswers] = useState({});
// answers = { 1: "Below 40", 2: "No", ... }
```

### The "Lookup" (Translation)
Since the math needs numbers, not words, when the calculation runs, it looks up the word in the dictionary (The `QUESTIONS` constant) to find the score.
*   App sees: "Below 40"
*   App checks Dictionary: "Below 40" = **0 Points**.
*   App uses **0** for the math.

### The "Engine" (`useMemo`)
We use a function called `useMemo`. This is like a smart calculator that only runs when an answer changes.
1.  User clicks an option.
2.  `answers` notebook updates.
3.  `useMemo` notices the change and re-runs the **Formulas** listed in Section 3.
4.  The new scores are sent to the screen instantly.

### Responsive Design (Mobile vs Desktop)
To make it look perfect on phones and laptops, we used specific layout rules (CSS classes):
*   **Container:** `flex-col lg:flex-row`
    *   *Translation:* "On mobile, stack items vertically (Column). On large screens (lg), put them side-by-side (Row)."
*   **Sticky Report:** `sticky top-6`
    *   *Translation:* "On Desktop, as the user scrolls down the long list of questions, keep the Report Panel 'stuck' to the top of the screen so it doesn't disappear."

---

## 5. Summary Example
**User Profile:**
*   72 Years old (Q1 = 15 pts)
*   Bad Sleep (Q13 = 10 pts)
*   Everything else "No" (0 pts)

**The Engine Calculates:**
1.  **Resilience Score:** 15 (from Age) + 0 + 0 = **15**.
2.  **Sleep Score:** **10**.
3.  **Total Risk:** 15 + 10 = **25**.

**The UI Shows:**
*   **Risk Card:** Yellow (Moderate Attention) because 25 is between 21-40.
*   **Resilience Bar:** 75% full (High).
*   **Sleep Bar:** 50% full (Moderate).
*   All other bars: Empty (0).
