import {
  CssBaseline,
  CssVarsProvider, extendTheme,
  useColorScheme,
  useTheme,
} from '@mui/joy';
import React, { useEffect } from 'react';

export const appTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#2d1836', // deep purple
          surface: '#3d2352', // slightly lighter purple
        },
      },
    },
    light: {
      palette: {
        background: {
          body: '#f8f6fc', // very light purple/white
        },
      },
    },
  },
  components: {
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            border: `1px solid var(--joy-palette-${ownerState.color}-600)`,
          }),
        }),
      },
    },
  },
});

function Meta() {
  const { colorScheme } = useColorScheme();
  const { palette } = useTheme();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = colorScheme === 'dark' ? palette.common.black : palette.common.white;
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, [colorScheme]);

  return null;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CssVarsProvider theme={appTheme} defaultMode="system">
      <CssBaseline />
      <Meta />
      {children}
    </CssVarsProvider>
  );
}
