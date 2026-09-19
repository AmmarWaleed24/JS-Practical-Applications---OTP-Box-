# OTP-Box - OTP Input Component

A lightweight, seamless, and responsive One-Time Password (OTP) input component built with vanilla JavaScript, HTML, and CSS. It enhances the user authentication flow by dynamically managing input focus, validating numeric entries, handling backspace navigation gracefully, and supporting multi-digit clipboard pasting.

---

## Features

* **Auto-Focus Navigation:** Automatically advances focus to the next field upon single-digit entry.
* **Smart Backspace:** Gracefully returns focus to the previous field and disables the current input when deleted.
* **Seamless Paste Support:** Automatically parses and distributes a copied multi-digit OTP across all fields instantly.
* **Strict Numeric Validation:** Automatically filters out letters and special characters, accepting numbers only (`0–9`).
* **Mobile Optimized:** Configured with `inputmode="numeric"` to launch the native numeric keypad on mobile devices.
* **Zero Dependencies:** Built purely with Vanilla JavaScript, HTML5, and CSS3—no external frameworks required.

---

## File Structure

```text
├── index.html   # Markup for the 4-digit input form
├── styles.css   # Custom styles for the input boxes
└── script.js   # Dynamic focus, validation, and paste handling
