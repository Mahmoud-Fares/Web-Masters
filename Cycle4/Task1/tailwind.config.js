/** @type {import('tailwindcss').Config} */
export default {
   darkMode: ['class'],
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

   theme: {
      extend: {
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
               1: 'hsl(var(--chart-1))',
               2: 'hsl(var(--chart-2))',
               3: 'hsl(var(--chart-3))',
               4: 'hsl(var(--chart-4))',
               5: 'hsl(var(--chart-5))',
            },

            success: '#00FF66',
            gold: '#FFAD33',

            'primary-hover': '#E07575',
            'accent-hover': '#E07575',

            // figma color names >> my theme
            // BG: '#FFFFFF', // background

            // hsla(0, 0%, 0%, 0.3)

            // primary: '#FFFFFF', // background
            // primary1: '#363738', // not used >> neglect

            // secondary: '#F5F5F5', // card, input, secondary, muted
            // secondary1: '#FEFAF1', // not used >> neglect
            // secondary2: '#DB4444', // primary, accent

            // text: '#FAFAFA', // primary, accent foreground
            // text1: '#7D8184', // not used >> neglect
            // text2: '#000000', // foreground

            // button: '#000000', // simply black
            // button1: '#00FF66', // success
            // button2: '#DB4444', // primary
            // hoverButton: '#E07575', // primary, accent hover
            // hoverButton2: '#A0BCE0', // not used >> neglect
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
};
