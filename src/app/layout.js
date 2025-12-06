import "./globals.css";

export const metadata = {
  title: "CodeDale",
  description: "Recreated by Vijay Ram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
