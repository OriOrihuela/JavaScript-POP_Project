/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// This is the Mariano's DIARY.
const DIARY = [
  {
    eventos: ["mejillones", "caminar", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: [
      "pan de millo",
      "filloas",
      "me lave los dientes",
      "siesta con La Vuelta",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "chinchos",
      "me lave los dientes",
      "Panorama",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "caldo gallego",
      "licor cafe",
      "me lave los dientes",
      "mencia",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "feria del pulpo",
      "pementos de padron",
      "me lave los dientes",
      "caminar",
      "siesta con La Vuelta",
      "Paris de Noia"
    ],
    pulpo: false
  },
  {
    eventos: [
      "caldo gallego",
      "filloas",
      "me lave los dientes",
      "caña de 1906",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "queixo",
      "me lave los dientes",
      "mencia",
      "leer el Marca",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "pan de millo",
      "recortarme la barba",
      "me lave los dientes",
      "Panorama",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["empanada de bacalao", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["queixo", "me lave los dientes", "Panorama", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "chinchos",
      "me lave los dientes",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "me lave los dientes",
      "siesta con La Vuelta",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "navajas",
      "me lave los dientes",
      "ver el fúbol",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: ["vieiras", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["me lave los dientes", "mencia", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["navajas", "chinchos", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["empanada de bacalao", "choveu", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "me lave los dientes",
      "caminar",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "licor cafe",
      "me lave los dientes",
      "ver el fúbol",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["vieiras", "chinchos", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "licor cafe",
      "me lave los dientes",
      "Panorama",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["vieiras", "percebes", "mencia", "siesta con La Vuelta"],
    pulpo: true
  },
  {
    eventos: [
      "feria del pulpo",
      "licor cafe",
      "me lave los dientes",
      "mencia",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "feria del pulpo",
      "licor cafe",
      "me lave los dientes",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "percebes",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["feria del pulpo", "caminar", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["queixo", "licor cafe", "mencia", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["carne o caldeiro", "licor cafe", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "pementos de padron",
      "choveu",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "chinchos",
      "me lave los dientes",
      "caña de 1906",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: ["feria del pulpo", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["mejillones", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "queixo",
      "recortarme la barba",
      "leer el Marca",
      "Paris de Noia"
    ],
    pulpo: false
  },
  {
    eventos: ["carne o caldeiro", "filloas", "Panorama", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["vieiras", "filloas", "ver el fúbol", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: [
      "pan de millo",
      "me lave los dientes",
      "caminar",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: ["carne o caldeiro", "percebes", "leer el Marca"],
    pulpo: true
  },
  {
    eventos: ["queixo", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["feria del pulpo", "caminar", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["me lave los dientes", "caminar", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "vieiras",
      "me lave los dientes",
      "ver el fúbol",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["queixo", "Panorama", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: ["mejillones", "me lave los dientes", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "recortarme la barba",
      "me lave los dientes",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["queixo", "percebes", "pementos de padron", "leer el Marca"],
    pulpo: true
  },
  {
    eventos: [
      "mejillones",
      "percebes",
      "me lave los dientes",
      "choveu",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "feria del pulpo",
      "percebes",
      "me lave los dientes",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "chinchos",
      "me lave los dientes",
      "caminar",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "queixo",
      "percebes",
      "me lave los dientes",
      "ver el fúbol",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "me lave los dientes",
      "Panorama",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "percebes",
      "me lave los dientes",
      "mencia",
      "leer el Marca",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "navajas",
      "me lave los dientes",
      "ver el fúbol",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "feria del pulpo",
      "me lave los dientes",
      "mencia",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["pan de millo", "pementos de padron", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["feria del pulpo", "chinchos", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "filloas",
      "me lave los dientes",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "me lave los dientes",
      "caminar",
      "siesta con La Vuelta",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: ["caldo gallego", "caña de 1906", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "navajas",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["pementos de padron", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "caldo gallego",
      "me lave los dientes",
      "mencia",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "me lave los dientes",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "vieiras",
      "pementos de padron",
      "ver el fúbol",
      "leer el Marca",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: ["mejillones", "filloas", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["navajas", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "licor cafe",
      "me lave los dientes",
      "Panorama",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["queixo", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["vieiras", "percebes", "caminar", "siesta con La Vuelta"],
    pulpo: true
  },
  {
    eventos: [
      "pan de millo",
      "recortarme la barba",
      "mencia",
      "siesta con La Vuelta",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: ["me lave los dientes", "caña de 1906", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "navajas",
      "percebes",
      "me lave los dientes",
      "leer el Marca",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "me lave los dientes",
      "ver el fúbol",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "mejillones",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["mejillones", "choveu", "siesta con La Vuelta"],
    pulpo: false
  },
  {
    eventos: ["mejillones", "percebes", "choveu", "siesta con La Vuelta"],
    pulpo: true
  },
  {
    eventos: [
      "feria del pulpo",
      "me lave los dientes",
      "caña de 1906",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: [
      "carne o caldeiro",
      "licor cafe",
      "leer el Marca",
      "baño en a Lanzada"
    ],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "percebes",
      "me lave los dientes",
      "Panorama",
      "leer el Marca"
    ],
    pulpo: false
  },
  {
    eventos: ["queixo", "me lave los dientes", "caña de 1906", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: ["navajas", "me lave los dientes", "leer el Marca"],
    pulpo: false
  },
  {
    eventos: [
      "pan de millo",
      "me lave los dientes",
      "ver el fúbol",
      "siesta con La Vuelta"
    ],
    pulpo: false
  },
  {
    eventos: [
      "empanada de bacalao",
      "percebes",
      "me lave los dientes",
      "siesta con La Vuelta"
    ],
    pulpo: false
  }
];

module.exports =  DIARY ;