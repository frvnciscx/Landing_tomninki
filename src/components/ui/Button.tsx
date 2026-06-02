import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'amber' | 'danger';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPos?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };
type ButtonAsLink   = ButtonBaseProps & { href: string; to?: undefined; target?: string; rel?: string };
type ButtonAsRouter = ButtonBaseProps & { to: string; href?: undefined };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouter;

const VARIANTS: Record<ButtonVariant, string> = {
  primary:   'bg-primary hover:bg-primary/90 text-white hover:shadow-[0_0_20px_rgba(67,45,215,0.4)]',
  secondary: 'border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5',
  ghost:     'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5',
  amber:     'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]',
  danger:    'bg-red-500 hover:bg-red-600 text-white',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-full',
};

/**
 * Button — botón polimórfico: renderiza <button>, <a> o <Link> según las props.
 *
 * @example
 * <Button variant="primary" size="lg" icon={<ArrowRight />} iconPos="right">
 *   Empezar Gratis
 * </Button>
 *
 * <Button variant="amber" to="/early-access">Acceso VIP</Button>
 *
 * <Button variant="secondary" href="https://..." target="_blank">Docs</Button>
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPos = 'left',
    fullWidth = false,
    className = '',
    children,
    ...rest
  } = props;

  const baseClass = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPos === 'left'  && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPos === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if ('to' in props && props.to) {
    return <Link to={props.to} className={baseClass}>{content}</Link>;
  }
  if ('href' in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink;
    return <a href={href} target={target} rel={rel} className={baseClass}>{content}</a>;
  }

  const { onClick, type = 'button', disabled } = rest as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
      {content}
    </button>
  );
}
