# Ink Liquid Fill Animation

Animation de remplissage liquide personnalisée pour le logo "ink".

## Localisation

- **Composant principal** : `src/components/animations/InkLiquidFill.tsx`
- **Export** : `src/components/animations/index.ts`
- **Demo** : `src/app/logo-animations/page.tsx`

## Utilisation

```tsx
import { InkLiquidFill } from '@/components/animations';

export default function MyComponent() {
  return (
    <div>
      <InkLiquidFill 
        width={200} 
        height={150} 
        className="text-white"
        duration={2}
        delay={0}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `width` | number | 200 | Largeur de l'animation en pixels |
| `height` | number | 150 | Hauteur de l'animation en pixels |
| `className` | string | "text-white" | Classes CSS pour la couleur |
| `duration` | number | 2 | Durée de l'animation en secondes |
| `delay` | number | 0 | Délai avant le démarrage en secondes |

## Description de l'animation

1. **Logo vide** - Contours transparents au début
2. **Bulle de liquide** - Part du bas de la barre "i" 
3. **Expansion progressive** - La bulle grandit et se propage
4. **Remplissage naturel** - Le liquide remplit toutes les formes du logo
5. **Logo final** - Apparaît complètement rempli

## Exemples d'utilisation

### Header avec délai
```tsx
<InkLiquidFill delay={1} duration={1.5} />
```

### Grande taille pour la page d'accueil
```tsx
<InkLiquidFill width={300} height={250} duration={3} />
```

### Dans un thème sombre
```tsx
<InkLiquidFill className="text-blue-400" />
```

## Restart de l'animation

Pour relancer l'animation, changez la `key` du composant :

```tsx
const [key, setKey] = useState(0);

const restartAnimation = () => {
  setKey(prev => prev + 1);
};

<InkLiquidFill key={key} />
```