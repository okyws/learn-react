import clsx from 'clsx';

export default function Button({ className = 'bg-blue-600', children, text, type = 'submit', ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded')}>
      {text || children}
    </button>
  );
}
