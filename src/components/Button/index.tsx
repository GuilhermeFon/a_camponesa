import Link from 'next/link';

export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  uppercase?: boolean;
  className?: string;
  role?: string;
  target?: string;
  rel?: string;
};

const Button = ({
  children,
  href = '/',
  uppercase = false,
  className = '',
  role,
  target,
  rel,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      role={role}
      target={target}
      rel={rel}
      className={`flex justify-center px-2 py-2 rounded-md  ${className} ${
        uppercase ? 'uppercase' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
