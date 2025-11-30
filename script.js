// 🔹 Aquí defines tus productos manualmente (nombre, precio e imagen)
const productos = [
  { nombre: "Paquete de 100 ho0jas de coolores A4", precio: 7.99, imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9IEpROu9wK5YuEew8bl90dguJHbwXg4fQgDEYk4l5q6kzt4IuO3c7WPeqWUu-OwcEnJzNek-7s8xA6ZHDEzh7_eOcFDXgViX9jGq9CFo&usqp=CAc" },
  
  { nombre: "Lapiz Colorido eslastico para niños 20cm", precio: 1.50, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCRR--IwWR1lwAU1viPyZEvGYqPTdgV2iaQ&s" },
  
  { nombre: "Reloj de Arena Rosa", precio: 9.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_777113-MPE82111698140_022025-F.webp" },
  
  { nombre: "ㅤReloj de Arena Morado", precio: 9.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_759205-MPE82111698138_022025-F.webp" },
  
  { nombre: "Reloj de Arena Negro", precio: 9.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_980036-MPE82394180157_022025-F.webp" },
  
  { nombre: "Pack de borradores de 4 Comidas chinaas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/592464885_122110859403086889_2599882064878509467_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7Lm7lQlwXqUQ7kNvwGGumco&_nc_oc=AdlKZLZHKQNP8xDrVrcXjazfUiNhuznADJGQf4DlaKb7Szt9vgfE1IowEZcSWBpcn2a-uxezyZMnoA0mmtabH_My&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=pWzBIWJhtcn3HAEO6LxPUQ&oh=00_Afg2DsX0G3Xq-7zNU09UuzU0ZkSSEy7_T4_aB_XjkVfknw&oe=69329E15" },
  
  { nombre: "Hoja de arbol de arbol con borradores de Mariposas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/589715451_122110861053086889_7829886903142093958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CUYIntK7oHgQ7kNvwFMIJ2D&_nc_oc=AdmrCjJCxAl1ptjuxnqoxpVmGpWawwuh4zVypSU7PU8O-YCNKlv0QRfRmSDIGcNjNezISekN5PvD02xDNeiWqnPB&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=Vp4G29BL5qS7k_jiXobZjQ&oh=00_Afik1ySONb0JZktrOr5t-jB5UEEwE4XzVW6DBOZCRHiNEg&oe=6932AF58" },
  
  { nombre: "Hoja de Arbol con borradores de Mariiquitas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/589715451_122110861053086889_7829886903142093958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CUYIntK7oHgQ7kNvwFMIJ2D&_nc_oc=AdmrCjJCxAl1ptjuxnqoxpVmGpWawwuh4zVypSU7PU8O-YCNKlv0QRfRmSDIGcNjNezISekN5PvD02xDNeiWqnPB&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=Vp4G29BL5qS7k_jiXobZjQ&oh=00_Afik1ySONb0JZktrOr5t-jB5UEEwE4XzVW6DBOZCRHiNEg&oe=6932AF58" },
  
  { nombre: "Dispensador de jabón líquido MODERNO", precio: 12, imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS94KQa0IeMZobBfJVuivcHOqNeOSIJN8tONo1oeA1y7F0JbFF_" },
  
  { nombre: "Microfono Inalambrico de Celular", precio: 14.99, imagen: "https://claroperupoc.vtexassets.com/arquivos/ids/1993107/image-890ff18e2d684a1384497f2ff778e52a.jpg?v=638551206229430000" },
  
  { nombre: "Multilapicero infantil de unicornio", precio: 4.50, imagen: "https://www.tiendafacil.com.ar/tienda/uploads/400x400/1585943755_5ff6eae9.jpg" },
  
  { nombre: "Lapicero azul cubigo de GeometriDash", precio: 1.20, imagen: "https://sumerlabs.com/default/image-tool-lambda?new-width=700&new-height=700&new-quality=80&url-image=https%3A%2F%2Fsumerlabs.com%2Fprod%2Fcatalogue%2F6e475ff748f084b6b4f01aaa737f3b752f0ff363%2Fa6ad562b-6304-476a-9eea-98f84d99f3fd.jpg" },
  
  { nombre: "Plumones metalicos para niño 6 unidades", precio: 6.99, imagen: "https://resources.claroshop.com/medios-plazavip/mkt/617b4cb4044c2_hee3c56bc06dc4f36bf16e666b275b3d6njpg.jpg?scale=700&qlty=80" },
  
  { nombre: "x12 individuales de Navidad mas x6 portavasos ", precio: 6.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/590948140_122110861197086889_1133257673079679861_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BmmZAcEzXL0Q7kNvwGM_2ig&_nc_oc=AdlAt7DcFmas5JbCRHecfsHXs97-l0dUW3PrV_PWneoY5Ho1zdWguxIdcXtMf0KFIwUHyXFsJtW1nEtvGNGAKSrn&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=sg7M7ERMWmzo3zZKCH8CaQ&oh=00_AfiReNRJQyhLkJovknCDWgyQHvEAWRDshhT3cIAj31cfrQ&oe=69329A3D" },
  
  { nombre: "Pack de 50 unidades de paños para cocina ", precio: 14.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_928935-MPE83209110294_042025-F.webp" },
  
  { nombre: "Alicate de 8 pulgadas", precio: 6.99, imagen: "https://alitechworld.pk/wp-content/uploads/2025/10/Premium-Pliers-Tool-%E2%80%93-Multi-Purpose-Heavy-Duty-Hand-Tool-for-Repair-Home-Use-3.webp" },
 
  { nombre: "Esferas navideñas con lucesr", precio: 3.5, imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTA-a6i83CLgKS8eLBipFmmYxPildaa4xmmRRS-RXS-PmEd6QDd" },
  
  { nombre: "Adorno de ramo navideño Amarillo,Rojo y rosa", precio: 2, imagen: "https://img.ltwebstatic.com/images3_spmp/2024/09/04/4f/172541777877482743c794a50edf8a013f01980431_thumbnail_405x552.png" },
  
 { nombre: "Kit de Limpieza basico", precio: 3, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565127025_122095344579086889_4601160951134947107_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kEfndHXJW1UQ7kNvwGb1ZvH&_nc_oc=AdlH6rWmQPNP4RDw5uh_bN1OlTVWrQY4WqL8za6n-9u3ll1Yd8lmUzCnER_Wv-vnQnegKlVa88MQxns2t6LBakMf&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=KFSOIcOHAZuPkL68OqOrpg&oh=00_AfjAo7aKByUVfoAu1VvKKxPGXLdtuJU_EbpSR6H20W3HWQ&oe=6932A07B" },
  
  { nombre: "Kit de herramientas", precio: 8, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565158575_122095353273086889_7707084532211670223_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YLw895_w6ggQ7kNvwFZVnrW&_nc_oc=Adlisf-a4IsnVEdO1UcgJCpEvJLe95PLphHm2IzuFIa8SNye7PuGtYly08GIfzwVUrMx2TSJMNLpAG7TpTEXm6EZ&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=iO2v86gUHVDuXx1uFGLlWQ&oh=00_Afjf5fADwNr6o6OuENkuTU5LIZ0AZlK1-w7PQSkss5fDDA&oe=6932AC5F" },
  
  { nombre: "Limpiador facial", precio: 14.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/566355203_122095357683086889_6056214647893709108_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bafPzY6GqjQQ7kNvwFC30aC&_nc_oc=AdmDE29Oh-SITbu9bZwvx0sNLrX6Evr34SfesO02GnscdxIE_-u8gb7FxUBdXbg3CVnqQTPtcVr_sdb60Y7sy_4Q&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=--GQuSeCBH8SQbHq71J_1g&oh=00_Afgb74os34_d29GeNeI_Cp_6K5IYWrGpX70Q22klWyVgYw&oe=6932A229" },
  
  { nombre: "Secadora de uñas", precio: 8, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/568036789_122095359057086889_4362818429721586219_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GAMchwrm6r8Q7kNvwEI8-lm&_nc_oc=AdnIbq_3IOyBmZJc_PptKHcf_pIql1gfZp9CgSjze8La_u18mmpQVukh1tsD6HTqUAzh3JgSC1JKPekPMvj8OXqB&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=NgXUiw8oYvkGOfbgvVHHXQ&oh=00_AfhnzOCFCdu-7jSQf9icy_ljXT62cHFYEbkHpzpq_NTuPA&oe=6932B087" },
  
  { nombre: "Cuchillo profecional", precio: 14.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565885011_122095359903086889_5089207125492690016_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VEWRoa3WbscQ7kNvwFHIhwg&_nc_oc=Adl6t3UGayoFLkE5Fsq_cxk20Wq5abqHJp8VqEx288YN2zFm3oS4JvyBWit1pprE8U0U2cD9_bmUj0-x8A-pyVS_&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=53am7nM15i1yRjjj3zlwoA&oh=00_AfhpW_JxLGFpFxHx3-skuk4HgBVyU6pat_Pit7CYAfUbow&oe=6932B11C" },
  
  { nombre: "Atomizadores 3x1", precio: 6, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXDPdM1IVFLuwk1zNK8c6B3DOu5eNQddSbLjMCrW6wJMrPj6W" },
  
  { nombre: "1 toalla y 2 esponjas para platos", precio: 4, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/566230819_122095364097086889_8748839920477829901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wig5gqKadGYQ7kNvwFZWyKO&_nc_oc=Adnk0dFit1iZ6w9YYNloG6qkRdFOu6ELBZw4Ld4NmBjyMheee70fZotG1tz0cNPRQa5bSkyZ5YFl1g6K4az939AU&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=RMR6PZiulnGcvN4yTYWEPw&oh=00_AfjUHN9LeDXrOuzJjJD2ZnvZ0hPDaMtXIyVgrv8w0Ke5lQ&oe=6932A2C3" },
  
  { nombre: "Antifacez con gel", precio: 5, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565703563_122095369353086889_2890314843170020853_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2vY2Q5unVHoQ7kNvwH4XRF9&_nc_oc=AdmDFxUdpTTtb0RDjQf9VxCt6HZnnHTPwQsrNzTf729KSD46xDsBpvuZYjScebOL61if9rvWWGgHf8QfQxakoAbJ&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=Q4XjDjV4cqZuUQho36hKlA&oh=00_AfgQ5CXAIsfM7gtXqT65J9Cj3Lcsxk_LbQLl0z3qFHfCng&oe=69329524" },
  
  { nombre: "Gancho en fora de helado x1", precio: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-iB3K4-39Bw8tG0j3TTJYtgGeTAecxzK0g&s" },
  
  { nombre: "Microfono Inalambrico de Celular", precio: 14.99, imagen: "https://claroperupoc.vtexassets.com/arquivos/ids/1993107/image-890ff18e2d684a1384497f2ff778e52a.jpg?v=638551206229430000" },
  
  { nombre: "Microfono Inalambrico de Celular", precio: 14.99, imagen: "https://claroperupoc.vtexassets.com/arquivos/ids/1993107/image-890ff18e2d684a1384497f2ff778e52a.jpg?v=638551206229430000" },
  // 👇 Copia y pega más hasta tener tus 50 productos
];

// 🔹 Mostrar productos
const catalogo = document.getElementById('catalogo');
function mostrarProductos(lista) {
  catalogo.innerHTML = "";
  lista.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Precio: S/ ${p.precio}</p>
      <button class="agregar">Agregar</button>
    `;
    div.querySelector('.agregar').addEventListener('click', () => agregarABoleta(p));
    catalogo.appendChild(div);
  });
}
mostrarProductos(productos);

// 🔹 Filtrar por precio
document.getElementById('buscar').addEventListener('click', () => {
  const precioMax = parseFloat(document.getElementById('precio').value);
  if (isNaN(precioMax)) {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.precio <= precioMax);
    mostrarProductos(filtrados);
  }
});

// ======================================================
// 🧾 BOLETA DE COMPRA (funcionalidad principal)
// ======================================================
const boleta = document.getElementById("boleta");
const listaBoleta = document.getElementById("lista-boleta");
const totalTexto = document.getElementById("total");
const toggleBoleta = document.getElementById("toggleBoleta");

let total = 0;
let carrito = [];
let boletaAbierta = false;

// 🔹 Mostrar/Ocultar boleta - MEJORADO PARA MÓVIL
toggleBoleta.addEventListener("click", (e) => {
  e.stopPropagation();
  boletaAbierta = !boletaAbierta;
  
  if (boletaAbierta) {
    boleta.classList.remove("boleta-oculta");
    boleta.classList.add("boleta-visible");
  } else {
    boleta.classList.remove("boleta-visible");
    boleta.classList.add("boleta-oculta");
  }
});

// 🔹 Cerrar boleta al tocar fuera en MÓVIL
document.addEventListener("click", (e) => {
  const dentroDeBoleta = boleta.contains(e.target);
  const esBoton = e.target === toggleBoleta || toggleBoleta.contains(e.target);

  // Si está abierta y tocaste fuera de ella y del botón
  if (boletaAbierta && !dentroDeBoleta && !esBoton) {
    boletaAbierta = false;
    boleta.classList.remove("boleta-visible");
    boleta.classList.add("boleta-oculta");
  }
});

// 🔹 Agregar producto a la boleta
function agregarABoleta(producto) {
  carrito.push(producto);
  actualizarBoleta();
  // Abre automáticamente la boleta en móvil cuando agregas algo
  boletaAbierta = true;
  boleta.classList.remove("boleta-oculta");
  boleta.classList.add("boleta-visible");
}

// 🔹 Actualizar la lista en la boleta
function actualizarBoleta() {
  listaBoleta.innerHTML = "";
  total = 0;
  carrito.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} - S/ ${p.precio.toFixed(2)}
      <button onclick="eliminarProducto(${index})">❌</button>
    `;
    listaBoleta.appendChild(li);
    total += p.precio;
  });
  totalTexto.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// 🔹 Eliminar producto
function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarBoleta();
}

// 🔹 Finalizar compra → envía al WhatsApp
document.getElementById("finalizar").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu boleta está vacía.");
    return;
  }

  let mensaje = "🛍 *Boleta de compra - Selene Store* 🛍%0A%0A";
  carrito.forEach(p => {
    mensaje += `• ${p.nombre} - S/ ${p.precio}%0A`;
  });
  mensaje += `%0A💰 *Total:* S/ ${total.toFixed(2)}%0A`;
  mensaje += "%0A✅ Envío de pedido desde la web.";

  window.open(`https://wa.me/982239117?text=${mensaje}`, "_blank");
});

// ======================================================
// 🖼️ MODAL PARA AMPLIAR IMAGEN
// ======================================================
const modal = document.getElementById("modal");
const imagenAmpliada = document.getElementById("imagenAmpliada");

catalogo.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    imagenAmpliada.src = e.target.src;
    modal.style.display = "flex";
  }
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
