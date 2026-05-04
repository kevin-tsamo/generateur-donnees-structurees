"use client";

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "var(--kt-radius-sm)",
  border: "1.5px solid var(--kt-border)",
  background: "var(--kt-card)",
  color: "var(--kt-text)",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.15s",
};

const inputFocusStyle = {
  borderColor: "var(--kt-blue)",
};

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  hint?: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  hint?: string;
}

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  hint?: string;
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label
      className="block text-sm font-semibold mb-1.5"
      style={{ color: "var(--kt-text)" }}
    >
      {text}{" "}
      {required && <span style={{ color: "var(--kt-blue)" }}>*</span>}
    </label>
  );
}

function Hint({ text }: { text: string }) {
  return (
    <p className="mt-1 text-xs" style={{ color: "var(--kt-muted)" }}>
      {text}
    </p>
  );
}

export function FormInput({
  label, name, value, onChange, placeholder, type = "text", required, hint,
}: InputProps) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
      />
      {hint && <Hint text={hint} />}
    </div>
  );
}

export function FormSelect({
  label, name, value, onChange, options, required, hint,
}: SelectProps) {
  return (
    <div>
      <Label text={label} required={required} />
      <select
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{ ...inputStyle, cursor: "pointer" }}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {hint && <Hint text={hint} />}
    </div>
  );
}

export function FormTextarea({
  label, name, value, onChange, placeholder, rows = 3, required, hint,
}: TextareaProps) {
  return (
    <div>
      <Label text={label} required={required} />
      <textarea
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{ ...inputStyle, resize: "vertical" }}
        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
        onBlur={(e) => (e.target.style.borderColor = "var(--kt-border)")}
      />
      {hint && <Hint text={hint} />}
    </div>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-2 mt-2 mb-3">
      <div
        className="w-1 h-5 rounded-full flex-shrink-0"
        style={{ background: "var(--kt-blue)" }}
      />
      <div>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--kt-blue)" }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-xs mt-0.5" style={{ color: "var(--kt-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
