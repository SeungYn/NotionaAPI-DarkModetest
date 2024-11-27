/*  eslint-disable */

'use client';

export default function DarkModeToggleButton() {
  // useTheme() 만들기
  // setTheme로 다크모드 설정해줘야함

  const { theme, setTheme } = {
    theme: 'dark',
    setTheme: (theme: string) => {},
  };

  return (
    <button
      className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
      onClick={() => setTheme('light')}
    >
      Button
      <svg
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='w-4 h-4 ml-1'
        viewBox='0 0 24 24'
      >
        <path d='M5 12h14M12 5l7 7-7 7'></path>
      </svg>
    </button>
  );
}
