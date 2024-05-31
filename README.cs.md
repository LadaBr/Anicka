# anicka

# Komponenty
- [Banner](#banner)
- [Stripe](#stripe)
- [Notification](#notification)
- [Card](#card)
- [Animated text](#animated-text)
- [Carousel](#carousel)

# Konfigurace
```html
<!-- Konfigurace musí být umístěna před skriptem knihovny -->
<script>
  config = {
    ...
  }
</script>
<script src="<cesta ke zdroji této knihovny>"></script>
```

## Parametry
- **font** - nastavuje rodinu písem pro celý web
- **navigation**
  - **colors** - barvy navigačních prvků
    - **background** - barva pozadí
    - **menuIcon** - barva ikony menu (hamburger)
    - **link** - barva odkazů v navigaci
  - **font** - nastavuje rodinu písem pro navigaci
  - **noBorder** _( true | false )_ - odstraňuje okraj navigace
  - **fullWidth** _( true | false )_ - nastavuje šířku navigace na šířku okna prohlížeče
  - **sticky** _( true | false )_ - připevňuje navigaci k oknu při rolování
- **buttons** - existují dva styly tlačítek
  - **button1** - styly tlačítka 1
    - **border**
      - **color**
      - **radius**
      - **width**
    - **color** - barva textu tlačítka
    - **background** - barva pozadí tlačítka
    - **hover** - styly při přejetí myší
      - **color**
      - **background**
      - **borderColor**
      - **down** _( true | false )_ - animovaný efekt stisknutí tlačítka
      - **right** _( true | false )_ - animovaný efekt pohybu doprava
  - **button2** - stejné jako **button1**
- **link** - globální styly pro odkazy \<a\>
  - **color**
  - **decoration** ( none | underline | ... ) - styl pro text-decoration
- **footer**
  - **bgColor** - barva pozadí patičky
  - **color** - barva textu patičky
- **contactPagelet**
  - **color** - barva textu kontaktního modulu (.contact-pagelet-row i)
- **form** - styly formulářů
  - **button** - styly tlačítka odeslání (stejné jako styly **buttons**)
  - **inputs** - styly vstupních polí formuláře (stejné jako styly **buttons**)
  - **label** - styly štítků vstupních polí
    - **color**
    - **fontSize**
  - **soften** - zmenšuje mezery a odsazení ve formuláři
  - **gdpr** - barva textu GDPR odkazu
- **card** - globální konfigurace pro všechny karty
  - **shadow** _( true | false )_ - přidává stín ke každé kartě
  - **hover** _( true | false )_ - přidává efekt při přejetí myší (animované změny stínu)
  - **styles** - styly karet
    - **header** - styly záhlaví karet
      - **background** - barva pozadí
      - **color** - barva textu
    - **button** - styly tlačítka záhlaví karet
      - **background** - barva pozadí
      - **color** - barva textu
      - **border** - barva okraje
      - **hover** - styly při přejetí myší
        - **background** - barva pozadí při přejetí myší
        - **color** - barva textu při přejetí myší
  - **sameHeight** - pole počtu sloupců, které by měly mít stejnou výšku
- **cards** - konfigurace pro karty specifické třídy
  - "\<class1\>" - stejné jako konfigurace **card**
  - "\<class2\>" - stejné jako konfigurace **card**
  - ....
- **li** - konfigurace položek seznamu
  - **content** - znak položky seznamu
  - **color** - barva položky seznamu
- **zoomImage** _([".section1", ".section2"])_ - pole názvů tříd sekcí nebo jiných selektorů pro animaci zvětšení pozadí sekce
- **gallery** - konfigurace galerie
  - **noGap** _( true | false )_ - odstraňuje mezery mezi položkami galerie
- **h1** - styly textu nadpisu
  - **color**
  - **fontSize** _(např. 12px)_ - výchozí velikost (mobil)
  - **fontSizeTablet** _(např. 16px)_
  - **fontSizeDesktop** _(např. 24px)_


## Příklad
```html
<script>
  config = {
    font: 'Roboto',
    navigation: {
      noBorder: true,
      sticky: true,
      fullWidth: true,
      font: 'Poppins',
      colors: {
        background: 'red',
        link: 'black',
        menuIcon: 'black'
      }
    },
    buttons: {
      button1: {
        border: {
          color: 'green',
          radius: '16px',
          width: '1px',
        },
        hover: {
          color: 'red',
          background: 'orange',
          borderColor: 'orange'
        },
        background: 'red',
        color: 'orange'
      },
      button2: {
        border: {
          color: 'blue',
          radius: '16px',
          width: '1px',
        },
        hover: {
          color: 'yellow',
          background: 'green',
          borderColor: 'green'
        },
        background: 'yellow',
        color: 'green'
      },
    },
    form: {
      button: {
        border: {
          color: 'blue',
          radius: '16px',
          width: '1px',
        },
        hover: {
          color: 'yellow',
          background: 'green',
          borderColor: 'green'
        },
        background: 'yellow',
        color: 'green'
      },
    },
    card: {
      shadow: true,
      hover: true,
      styles: {
        button: {
          color: 'red',
          hover: {
            color: 'orange',
          }
        }
      }
    },
    h1: {
      color: 'red'
    }
  };
</script>
```
## Schéma
```ts
interface Config {
    font?: string;
    navigation?: {
        colors?: {
            background?: string;
            menuIcon?: string;
            link?: string;
        };
        font?: string;
        noBorder?: boolean;
        fullWidth?: boolean;
        sticky?: boolean;
    };
    buttons?: {
        button1?: {
          border?: {
            color?: string;
            width?: string;
            radius?: string;
          };
          background?: string;
          color?: string;
          hover?: {
            background?: string;
            color?: string;
            borderColor?: string;
            down?: boolean;
            right?: boolean;
          }
        };
        button2?: {
          border?: {
            color?: string;
            width?: string;
            radius?: string;
          };
          background?: string;
          color?: string;
          hover?: {
            background?: string;
            color?: string;
            borderColor?: string;
            down?: boolean;
            right?: boolean;
          }
        };
    };
    link?: {
        color?: string;
        decoration?: string;
    };
    footer?: {
        bgColor?: string;
        color?: string;
    };
    contactPagelet?: {
        color?: string;
    };
    form?: {
        button?: {
          border?: {
            color?: string;
            width?: string;
            radius?: string;
          };
          background?: string;
          color?: string;
          hover?: {
            background?: string;
            color?: string;
            borderColor?: string;
            down?: boolean;
            right?: boolean;
          }
        };
        inputs?: {
          border?: {
            color?: string;
            width?: string;
            radius?: string;
          };
          background?: string;
          color?: string;
          hover?: {
            background?: string;
            color?: string;
            borderColor?: string;
            down?: boolean;
            right?: boolean;
          }
        };
        label?: {
            color?: string;
            fontSize?: string;
        };
        soften?: boolean;
        gdpr?: string;
    },
    card?: {
      shadow?: boolean;
      hover?: boolean;
      styles?: {
        header?: {
          background?: string;
          color?: string;
        };
        button?: {
          background?: string;
          color?: string;
          border?: string;
          hover?: {
            background?: string;
            color?: string;
          };
        };
      };
      sameHeight?: number[];
    };
    cards?: {
        cardClass1: {
          shadow?: boolean;
          hover?: boolean;
          styles?: {
            header?: {
              background?: string;
              color?: string;
            };
            button?: {
              background?: string;
              color?: string;
              border?: string

;
              hover?: {
                background?: string;
                color?: string;
              };
            };
          };
          sameHeight?: number[];
        };
    };
    li: {
        content?: string;
        color?: string;
    };
    zoomImage?: string[];
    gallery?: {
        noGap?: boolean;
    };
    h1?: {
      color?: string;
      fontSize?: string;
      fontSizeTablet?: string;
      fontSizeDesktop?: string;
    };
    h2?: {
      color?: string;
      fontSize?: string;
      fontSizeTablet?: string;
      fontSizeDesktop?: string;
    };
    h3?: {
      color?: string;
      fontSize?: string;
      fontSizeTablet?: string;
      fontSizeDesktop?: string;
    };
}
```

<a id="banner"></a>
## Banner

### Selektor
```html
<app-banner></app-banner>
```

### Atributy
- **top, middle, bottom** <i>(nepovinné)</i>
  - nastavuje vertikální polohu obsahu nad obrázkem
- **left, center, right** <i>(nepovinné)</i>
  - nastavuje horizontální polohu obsahu nad obrázkem
- **height** <i>(nepovinné)</i>
  - nastavuje výšku celého banneru
  - jakákoli platná CSS hodnota výšky
- **overlay-color** <i>(nepovinné)</i>
  - nastavuje barvu překryvné vrstvy nad obrázkem banneru
  - jakákoli platná CSS hodnota barvy
### Použití
```html
<app-banner
        [top|middle|bottom]
        [left|center|right]
        [height]="<css size value>"
        [overlay-color]="string">
  <!-- Platné prvky obsahu: -->
  <p></p>
  <h1></h1>
  <h2></h2>
  <h3></h3>
  <div></div>
  <app-animated-text></app-animated-text>

  <!-- Platné prvky obrázku:-->
  <img/>
  <app-carousel></app-carousel>
</app-banner>
```
### Příklady
```html
<app-banner height="600px" left>
  <app-carousel controls>
    <img src="https://picsum.photos/500/550">
    <img src="https://picsum.photos/600/450">
    <img src="https://picsum.photos/700/650">
  </app-carousel>
  <h1 class="nadpis">Alpina</h1>
  <div>Cesta do srdce rakouských Alp.</div>

  <app-animated-text>Sklenářské služby</app-animated-text>
  <app-animated-text>Sklenářské služby 2</app-animated-text>
  <app-animated-text>Sklenářské služby 3</app-animated-text>
</app-banner>

<app-banner height="auto" overlay-color="rgba(0,0,0,0.5)"></app-banner>
```


<a id="stripe"></a>
## Stripe

### Selektor
```html
<app-stripe></app-stripe>
```

### Atributy
- **width** <i>(nepovinné)</i> (výchozí 768px)
  - nastavuje šířku celého banneru
  - jakákoli platná CSS hodnota šířky
- **height** <i>(nepovinné)</i> (výchozí 100%)
  - nastavuje výšku celého banneru
  - jakákoli platná CSS hodnota výšky
- **triangle** <i>(nepovinné)</i>
  - nastavuje jak **width**, tak **height** na stejnou hodnotu
  - jakákoli platná CSS hodnota barvy
- **color** <i>(nepovinné)</i>
  - nastavuje barvu pozadí
- **top, bottom** <i>(nepovinné)</i>
  - nastavuje vertikální polohu pruhu
- **left, right** <i>(nepovinné)</i>
  - nastavuje horizontální polohu pruhu
- **angle** <i>(nepovinné)</i>
  - nastavuje úhel pruhu a definuje jeho tvar na základě směru/polohy
- **shadow** <i>(nepovinné)</i>
  - přidává stín k celému prvku

### Použití
```html
<app-stripe
        [top|bottom]
        [left|right]
        [shadow]
        [angle]="number"
        [width]="<css size value>"
        [height]="<css size value>"
        [triangle]="<css size value>"
        [color]="<css color value>">
  <!-- Jakýkoli obsah zde -->
</app-stripe>
```
### Příklady
```html
<app-stripe left bottom shadow angle="80" triangle="40px" color="whitesmoke">
  Content
  <h3>Title</h3>
</app-stripe>
<app-stripe right bottom angle="20" width="400px" color="rgb(255,255,255)"></app-stripe>
```

<a id="notification"></a>
## Notification

### Selektor
```html
<app-notification></app-notification>
```

### Atributy
- **background** <i>(nepovinné)</i>
  - nastavuje barvu pozadí
- **radius** <i>(nepovinné)</i>
  - nastavuje poloměr okraje
- **left, right** <i>(nepovinné)</i>
  - nastavuje horizontální polohu
- **shadow** <i>(nepovinné)</i>
  - přidává stín k celému prvku

### Sloty
- **title** - zobrazuje obsah jako nadpis
- **close** (nepovinné) - nahrazuje výchozí tlačítko zavření

### Použití
```html
<app-notification
        [left|right]
        [shadow]
        [angle]="number"
        [background]="<css color value>"
        [radius]="<css border-radius value>">
  <!--Platné sloty obsahu:-->
  <h1 slot="title">Title content</h1>
  <button slot="close">Close button</button>

  <!--Přijímá jakýkoli obsah:-->
  <p>Content</p>
  <div>Content</div>
  Text
  ...
</app-notification>
```
### Příklady
```html
<app-notification shadow background="transparent">
    <h1 slot="title">This is title</h1>
    <p>This is description</p>
</app-notification>
```

<a id="card"></a>
## Card

### Selektor
```html
<app-card></app-card>
```

### Atributy
- **width** <i>(nepovinné)</i> (výchozí 100%)
  - nastavuje šířku celého banneru
  - jakákoli platná CSS hodnota šířky
- **overlay-color** <i>(nepovinné)</i>
  - nastavuje barvu překryvné vrstvy při přejetí myší

### Sloty
- **overlay** - zobrazuje obsah uvnitř překryvu

### Použití
```html
<app-card 
        [width]="<css size value>"
        [overlay-color]="<css color value>">
  
    <!--Platné sloty obsahu:-->
    <element slot="overlay">Overlay title</element>
  
    <!--Přijímá jakýkoli obsah:-->
    <p>Content</p>
    <div>Content</div>
    Text
    ...
  
    <!-- Platné prvky obrázku zobrazené na pozadí:-->
    <img/>
</app-card>
```
### Příklady
```html
<app-card width="400px">
  <img src="https://picsum.photos/2000/650">
  <h1>Card title</h1>
  <span slot="overlay">Overlay title</span>
  <p slot="overlay">Overlay text</p>
</app-card>
```

<a id="animated-text"></a>
## Animated text

### Selektor
```html
<app-animated-text></app-animated-text>
```

### Atributy
- **delay** <i>(nepovinné)</i> (výchozí **0s**)
  - zpožďuje začátek animace
- **right** <i>(nepovinné)</i>
  - animace začíná z pravé strany

### Použití
```html
<app-animated-text
        [right]
        [delay]="<css duration value>">
  <!--Přijímá jakýkoli obsah-->
</app-animated-text>
```
### Příklady
```html
<app-animated-text>Services 1</app-animated-text>
<app-animated-text>Services 2</app-animated-text>


<app-animated-text>Services 3</app-animated-text>

<app-animated-text delay="5s">Services</app-animated-text>

<app-animated-text delay="200ms">
  <p>Services 2</p>
</app-animated-text>

<app-animated-text right>
  <div>
    <h3>Services 3</h3>
  </div>
</app-animated-text>
```

<a id="carousel"></a>
## Carousel

### Selektor
```html
<app-carousel></app-carousel>
```

### Atributy
- **interval** <i>(nepovinné)</i> (výchozí **5000**)
  - zpožďuje začátek animace
- **controls** <i>(nepovinné)</i>
  - přidává šipky a ukazatele pro ovládání posuvníku

### Použití
```html
<app-carousel [controls] [interval]="<time in ms>">
  <!-- Platné prvky obsahu: -->
  <img/>
</app-carousel>
```
### Příklady
```html
<app-carousel>
  <img src="https://picsum.photos/500/550">
  <img src="https://picsum.photos/600/450">
  <img src="https://picsum.photos/700/650">
</app-carousel>

<app-carousel controls interval="3000">
  <img src="https://picsum.photos/500/550">
  <img src="https://picsum.photos/600/450">
  <img src="https://picsum.photos/700/650">
  <img src="https://picsum.photos/700/650">
  <img src="https://picsum.photos/700/650">
</app-carousel>
```
