# anicka

# Components
- [Banner](#banner)
- [Stripe](#stripe)
- [Notification](#notification)
- [Card](#card)
- [Animated text](#animated-text)
- [Carousel](#carousel)

# Configuration

## Parameters
- **font** - sets font family for entire website
- **navigation**
  - **colors** - colors of navigation elements
    - **background** - background color
    - **menuIcon** - menu toggle icon color (hamburger)
    - **link** - color of links inside navigation
  - **font** - sets font family for navigation
  - **noBorder** _( true | false )_ - removes navigation border
  - **fullWidth** _( true | false )_ - sets navigation width to width of viewport
  - **sticky** _( true | false )_ - attaches navigation to window while scrolled down
- **buttons** - there are two button styles
  - **button1** - button 1 styles
    - **border**
      - **color**
      - **radius**
      - **width**
    - **color** - button text color
    - **background** - button background color
    - **hover** - styles while hovering
      - **color**
      - **background**
      - **borderColor**
      - **down** _( true | false )_ - animated button down effect
      - **right** _( true | false )_ - animated button right effect
  - **button2</b> - same as **button1**
- **link** - global styles for link \<a\>
  - **color**
  - **decoration** ( none | underline | ... ) - style for text-decoration
- **footer**
  - **bgColor** - footer background color
  - **color** - footer text color
- **contactPagelet**
  - **color** - contact pagelet text color (.contact-pagelet-row i)
- **form** - form styles
  - **button** - submit button styles (same as **buttons** styles)
  - **inputs** - form inputs styles (same as **buttons** styles)
  - **label** - form input label styles
    - **color**
    - **fontSize**
  - **soften** - makes form compact with smaller gaps and padding
  - **gdpr** - color of GDPR anchor text
- **card** - global config for all cards
  - **shadow** _( true | false )_ - adds shadow to each card
  - **hover** _( true | false )_ - adds hover effect (animated resize of box-shadow)
  - **styles** - card styles
    - **header** - card header styles
      - **background** - background color
      - **color** - text color
    - **button** - card header styles
      - **background** - background color
      - **color** - text color
      - **border** - border color
      - **hover** - hover styles
        - **background** - hover background color
        - **color** - hover text color
  - **sameHeight** - array of number of columns that should have same height
- **cards** - config for cards of specific class
  - "\<class1\>" - same as **card** config
  - "\<class2\>" - same as **card** config
  - ....
- **li** - list item config
  - **content** - list item character
  - **color** - list item color
- **zoomImage** _([".section1", ".section2"])_ - array of section class names or other selectors for zoom animation of .section-background
- **gallery** - gallery config
  - **noGap** _( true | false )_ - removes padding between gallery items
- **h1** - header text styles
  - **color**
  - **fontSize** _(e.g. 12px)_ - default size (mobile)
  - **fontSizeTablet** _(e.g. 16px)_
  - **fontSizeDesktop** _(e.g. 24px)_


## Example
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
## Schema
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
              border?: string;
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

### Selector
```html
<app-banner></app-banner>
```

### Attributes
- **top, middle, bottom** <i>(optional)</i>
  - sets vertical position of content above image
- **left, center, right** <i>(optional)</i>
  - sets horizontal position of content above image
- **height** <i>(optional)</i>
  - sets height of whole banner
  - any valid CSS height value
- **overlay-color** <i>(optional)</i>
  - sets color of overlay layer above banner image
  - any valid CSS color value
### Usage
```html
<app-banner
        [top|middle|bottom]
        [left|center|right]
        [height]="<css size value>"
        [overlay-color]="string">
  <!-- Valid content elements: -->
  <p></p>
  <h1></h1>
  <h2></h2>
  <h3></h3>
  <div></div>
  <app-animated-text></app-animated-text>

  <!-- Valid image elements:-->
  <img/>
  <app-carousel></app-carousel>
</app-banner>
```
### Examples
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

### Selector
```html
<app-stripe></app-stripe>
```

### Attributes
- **width** <i>(optional)</i> (default 768px)
  - sets width of whole banner
  - any valid CSS width value
- **height** <i>(optional)</i> (default 100%)
  - sets height of whole banner
  - any valid CSS height value
- **triangle** <i>(optional)</i>
  - sets both **width** and **height** as same value
  - any valid CSS color value
- **color** <i>(optional)</i>
  - sets background color
- **top, bottom** <i>(optional)</i>
  - sets vertical position of the stripe
- **left, right** <i>(optional)</i>
  - sets horizontal position of the stripe
- **angle** <i>(optional)</i>
  - sets angle of stripe and defines its shape based on direction/position
- **shadow** <i>(optional)</i>
  - adds shadow to entire element

### Usage
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
  <!-- Any content here -->
</app-stripe>
```
### Examples
```html
<app-stripe left bottom shadow angle="80" triangle="40px" color="whitesmoke">
  Content
  <h3>Title</h3>
</app-stripe>
<app-stripe right bottom angle="20" width="400px" color="rgb(255,255,255)"></app-stripe>
```

<a id="notification"></a>
## Notification

### Selector
```html
<app-notification></app-notification>
```

### Attributes
- **background** <i>(optional)</i>
  - sets background color
- **radius** <i>(optional)</i>
  - sets border radius
- **left, right** <i>(optional)</i>
  - sets horizontal position
- **shadow** <i>(optional)</i>
  - adds shadow to entire element

### Slots
- **title** - shows content as title
- **close** (optional) - replaces default close button

### Usage
```html
<app-notification
        [left|right]
        [shadow]
        [angle]="number"
        [background]="<css color value>"
        [radius]="<css border-radius value>">
  <!--Valid content slots:-->
  <h1 slot="title">Title content</h1>
  <button slot="close">Close button</button>

  <!--Accepts any content:-->
  <p>Content</p>
  <div>Content</div>
  Text
  ...
</app-notification>
```
### Examples
```html
<app-notification shadow background="transparent">
    <h1 slot="title">This is title</h1>
    <p>This is description</p>
</app-notification>
```

<a id="card"></a>
## Card

### Selector
```html
<app-card></app-card>
```

### Attributes
- **width** <i>(optional)</i> (default 100%)
  - sets width of whole banner
  - any valid CSS width value
- **overlay-color** <i>(optional)</i>
  - sets hover block overlay color

### Slots
- **overlay** - shows content inside overlay


### Usage
```html
<app-card 
        [width]="<css size value>"
        [overlay-color]="<css color value>">
  
    <!--Valid content slots:-->
    <element slot="overlay">Overlay title</element>
  
    <!--Accepts any content:-->
    <p>Content</p>
    <div>Content</div>
    Text
    ...
  
    <!-- Valid image elements shown in background:-->
    <img/>
</app-card>
```
### Examples
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

### Selector
```html
<app-animated-text></app-animated-text>
```

### Attributes
- **delay** <i>(optional)</i> (default **0s**)
  - delays animation start
- **right** <i>(optional)</i>
  - animation starts from right side

### Usage
```html
<app-animated-text
        [right]
        [delay]="<css duration value>">
  <!--Accepts any content-->
</app-animated-text>
```
### Examples
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

### Selector
```html
<app-carousel></app-carousel>
```

### Attributes
- **interval** <i>(optional)</i> (default **5000**)
  - delays animation start
- **controls** <i>(optional)</i>
  - adds slide control arrows and indicators

### Usage
```html
<app-carousel [controls] [interval]="<time in ms>">
  <!-- Valid content elements: -->
  <img/>
</app-carousel>
```
### Examples
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
