import type { InputHTMLAttributes, ReactNode } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  required?: boolean;
  hint?: string;
}

/**
 * FormInput — campo de formulario con label, ícono, error y hint.
 * Unifica el patrón de inputs en EarlyAccess, Blog newsletter y admin forms.
 *
 * @example
 * <FormInput
 *   label="Correo electrónico"
 *   type="email"
 *   placeholder="hola@ejemplo.com"
 *   icon={<Mail className="w-5 h-5" />}
 *   required
 *   error={errors.email}
 * />
 */
export function FormInput({
  label,
  error,
  icon,
  required,
  hint,
  id,
  className = '',
  ...props
}: FormInputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          {...props}
          required={required}
          className={`
            w-full h-12 rounded-xl
            ${icon ? 'pl-12' : 'px-4'} pr-4
            bg-slate-50 dark:bg-black/40
            border ${error ? 'border-red-400 focus-visible:ring-red-400' : 'border-slate-300 dark:border-white/10'}
            text-slate-900 dark:text-white
            placeholder-slate-400 dark:placeholder-slate-500
            focus-visible:outline-none focus-visible:ring-2
            ${error ? '' : 'focus-visible:ring-primary'}
            transition-colors text-sm
            ${className}
          `}
        />
      </div>

      {hint && !error && (
        <p className="text-xs text-slate-400 mt-1">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
