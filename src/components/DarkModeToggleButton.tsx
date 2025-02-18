/*  eslint-disable */

'use client';

import { useDarkModeTheme } from '@/context/ThemeContextProvider';

export default function DarkModeToggleButton() {
  // useTheme() 만들기
  // setTheme로 다크모드 설정해줘야함

  const { theme, setTheme } = useDarkModeTheme();
  console.log(theme);
  return (
    <button
      className='inline-flex items-center bg-gray-100  border-0 py-1 px-3 focus:outline-none dark:hover:text-yellow-300 hover:bg-gray-50 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-slate-400 rounded text-base mt-4 md:mt-0 hover:text-orange-500'
      onClick={() => setTheme(theme)}
    >
      {/* 라이트 모드 */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='visible dark:invisible dark:h-0 dark:w-0 h-5 w-5'
      >
        <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z' />
      </svg>
      {/* 다크 모드 */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='invisible dark:visible dark:h-5 h-0 dark:w-5 w-0'
      >
        <path
          fillRule='evenodd'
          d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
}
