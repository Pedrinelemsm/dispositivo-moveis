import { Link } from 'expo-router';
import { type ComponentProps } from 'react';

export type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

