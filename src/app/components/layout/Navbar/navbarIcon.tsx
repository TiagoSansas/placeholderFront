import { ElementType } from 'react';

interface NavbarIconProps {
  icon: ElementType;
}
export function NavbarIcon({ icon: Icon }: NavbarIconProps) {
  return <Icon />;
}
