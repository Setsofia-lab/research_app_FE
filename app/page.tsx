import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/auth/login');
  return (
    <>
      <ColorSchemeToggle />
    </>
  );
}
