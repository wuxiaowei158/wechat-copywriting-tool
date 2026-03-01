import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '微信公众号文案仿写工具',
  description: 'AI驱动的文案仿写工具',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}