type ClassName = string | false | undefined | null;

export const clsx = (...classNames: ClassName[]) =>
  classNames.filter(Boolean).join(' ');
