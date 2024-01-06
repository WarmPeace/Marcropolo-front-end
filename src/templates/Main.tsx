import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/auth/AuthProvider';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export default function Main(props: IMainProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [nowLoading, setNowLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const user = auth.currentUser;
  //   if (!user) {
  //     router.push(URL.LOGIN);
  //   } else {
  //     setNowLoading(false);
  //   }
  // }, []);

  // if (nowLoading)
  //   return (
  //     <div className="absolute right-1/2 bottom-1/2  translate-x-1/2 translate-y-1/2">
  //       <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
  //     </div>
  //   );

  return (
    <div className="min-h-screen bg-gray-100">
      <LeftSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Header setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 pb-8 lg:pl-64">
        <div className="mt-8">
          <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
