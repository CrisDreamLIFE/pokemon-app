import "../globals.css";
import {Providers} from "../providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="light text-foreground bg-background antialiased"
      >
        <Providers>
          <p class="text-2xl font-bold text-center bg-green-200 py-2">Pokémon App</p>
          {children}
        </Providers>
      </body>
    </html>
  );
}
