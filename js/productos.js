/* Catálogo ficticio de Cosechas. Precios enteros en COP. */
window.PRODUCTOS = [
  { id: "BAT-001", nombre: "Batido Verde Vital", categoria: "Batidos", precio: 14900, sigla: "VV", color: "#15803d", color2: "#22c55e", descripcion: "Espinaca, piña y jengibre. Fresco, cítrico y lleno de energía para empezar el día." },
  { id: "BAT-002", nombre: "Batido Mango Tropical", categoria: "Batidos", precio: 15900, sigla: "MT", color: "#ea580c", color2: "#f59e0b", descripcion: "Mango maduro, maracuyá y un toque de limón. Sabor de tierra caliente." },
  { id: "BAT-003", nombre: "Batido Fresa y Avena", categoria: "Batidos", precio: 16900, sigla: "FA", color: "#e11d48", color2: "#fb7185", descripcion: "Fresa, avena y leche de almendras. Cremoso y saciante, ideal de media mañana." },
  { id: "BAT-004", nombre: "Batido Cacao y Banano", categoria: "Batidos", precio: 17900, sigla: "CB", color: "#713f12", color2: "#b45309", descripcion: "Cacao colombiano, banano y mantequilla de maní. Un postre que sí te cuida." },
  { id: "WRP-005", nombre: "Wrap de Pollo y Aguacate", categoria: "Wraps", precio: 24900, sigla: "PA", color: "#3f6212", color2: "#65a30d", descripcion: "Pollo desmechado, aguacate, lechuga y yogur natural en tortilla integral." },
  { id: "WRP-006", nombre: "Wrap Vegano de Garbanzo", categoria: "Wraps", precio: 22900, sigla: "VG", color: "#b45309", color2: "#d97706", descripcion: "Garbanzos especiados, hummus, zanahoria y rúcula. 100 % vegetal." },
  { id: "SNK-007", nombre: "Mix de Frutos Secos", categoria: "Snacks", precio: 12900, sigla: "FS", color: "#78350f", color2: "#a16207", descripcion: "Almendras, maní, uvas pasas y arándanos. Bolsa de 150 g sin azúcar añadida." },
  { id: "SNK-008", nombre: "Barras de Avena y Miel (x6)", categoria: "Snacks", precio: 28900, sigla: "AM", color: "#a16207", color2: "#ca8a04", descripcion: "Seis barras horneadas con avena, miel de abejas y semillas de girasol." }
];
window.buscarProducto = function (id) {
  for (var i = 0; i < window.PRODUCTOS.length; i++) if (window.PRODUCTOS[i].id === id) return window.PRODUCTOS[i];
  return null;
};
