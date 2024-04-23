// import SideNav from '@/app/ui/dashboard/sidenav';
 import HeadNav from '../ui/progress/headnav';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="md:overflow-hidden">
        <HeadNav/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}