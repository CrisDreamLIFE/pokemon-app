import "../globals.css";
import {Providers} from "../providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          <p>title</p>
          {children}
        </Providers>
      </body>
    </html>
  );
}
