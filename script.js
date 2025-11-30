// 🔹 Aquí defines tus productos manualmente (nombre, precio e imagen)
const productos = [
  { nombre: "Paquete de 100 ho0jas de coolores A4", precio: 7.99, imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9IEpROu9wK5YuEew8bl90dguJHbwXg4fQgDEYk4l5q6kzt4IuO3c7WPeqWUu-OwcEnJzNek-7s8xA6ZHDEzh7_eOcFDXgViX9jGq9CFo&usqp=CAc" },
  
  { nombre: "Lapiz Colorido eslastico para niños 20cm", precio: 1.50, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCRR--IwWR1lwAU1viPyZEvGYqPTdgV2iaQ&s" },
  
  { nombre: "Reloj de Arena Rosaaaa", precio: 9.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_777113-MPE82111698140_022025-F.webp" },
  
  { nombre: "ㅤReloj de Arena Morado", precio: 9.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/558554199_1270439845123894_2781312780770647403_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-PgZBy7O90Y0Vk18NyMZlG4rAflzVMhYbisB-XNUyFspoXS9SfusIJ-zcCqjltAVwjWNEjErTiwEvWcCIZZW-&_nc_ohc=u5Ifbu92rrwQ7kNvwHSVxRH&_nc_oc=AdkQMbUFRjihoo1mzc1MUfWKE_hNQWSQ5kSjzHrN3LrQ4vsCk3aQFLOZ9tJaDw10grcWGCL2RWJt3fAgR5q0tuCG&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=q1OsqKNGpwSzeMWyRGrHcw&oh=00_Afch6O4RCZYcjD3-G36fughcBPKqxSx1qb_IZe-fYA7_Gg&oe=68F394A0" },
  
  { nombre: "Reloj de Arena Negro", precio: 9.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/558554199_1270439845123894_2781312780770647403_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-PgZBy7O90Y0Vk18NyMZlG4rAflzVMhYbisB-XNUyFspoXS9SfusIJ-zcCqjltAVwjWNEjErTiwEvWcCIZZW-&_nc_ohc=u5Ifbu92rrwQ7kNvwHSVxRH&_nc_oc=AdkQMbUFRjihoo1mzc1MUfWKE_hNQWSQ5kSjzHrN3LrQ4vsCk3aQFLOZ9tJaDw10grcWGCL2RWJt3fAgR5q0tuCG&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=q1OsqKNGpwSzeMWyRGrHcw&oh=00_Afch6O4RCZYcjD3-G36fughcBPKqxSx1qb_IZe-fYA7_Gg&oe=68F394A0" },
  
  { nombre: "Pack de borradores de 4 Comidas chinaas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/558972270_1273547498146462_4241909607739923709_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHesiDMgvSX9lSlXc0sd3XNk9-kBcVxHqeT36QFxXEep30ljGw-aIR8vacuDDncRCOWDcQOWTVW0hkLjtqm3M8Z&_nc_ohc=6oT1ysRjHAYQ7kNvwG0_aC-&_nc_oc=Adl2JfXTAieSuiZ9kemfEwRS5avVQxSfzf1zKwMU_04G5rIjPTcL0K-fryE2FYht3KAq0FTKssqNx6138olIrCZP&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=VqSNdn1v2Oc_5ItS5nG7GQ&oh=00_Afeey1Z9dEOArOFSZlQHIBfhmPydygpmJ-VRWE87RZw_DQ&oe=68F36B1A" },
  
  { nombre: "Hoja de arbol de arbol con borradores de Mariposas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/559143402_1273540578147154_1656870284452323901_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHuBPtLNKko7Zxp0-TAVRmD6IFhd5Gn9SXogWF3kaf1JSi5JGcLn4NiHIrvVTqRR_WI8Inrwz2f6ClMo0-mLQRc&_nc_ohc=58M_EJwisvIQ7kNvwEfehBj&_nc_oc=AdnfMsMQu9Hz99qUADv1Pb4JmZ0BQ2liSScjuUsFBHu4w3B3Z00ZCebNil6OXcq9S97UQTtOEdFxCOsdLDkGZGoG&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=yNjob90-tUdMh3UX-7dBLw&oh=00_AffkrYDHSAP6f6P-bZq4o1eBi-sTHKoNfyf7y9vscnmqAw&oe=68F3987C" },
  
  { nombre: "Hoja de Arbol con borradores de Mariiquitas", precio: 4.50, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/558519692_1273547541479791_7953155087023353804_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOkdB0zj7QAsUxwZ2491TJfrpJfV3du4x-ukl9Xd27jE3CjC_rSW4hNAl9dSh1r2ZdvGftJkxj5V5-Kan3Lwmj&_nc_ohc=7SQFToUUbE4Q7kNvwEvJrn0&_nc_oc=AdkeUkQyg2l9jhx8gBZWGWkiIS173eTWEV1B0o80mPs78S1CAc-J2gf6gQIgxAylUw8swPe6_qPqqj7VtzgA2Tuj&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=FZI_dYAohYpgHUReWa19pQ&oh=00_AffkrWTKXdvKbWODgo_iaXivSd52L_1kCNi8HSlCV-jmRw&oe=68F36AA0" },
  
  { nombre: "Dispensador de jabón líquido MODERNO", precio: 12, imagen: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS94KQa0IeMZobBfJVuivcHOqNeOSIJN8tONo1oeA1y7F0JbFF_" },
  
  { nombre: "Microfono Inalambrico de Celular", precio: 14.99, imagen: "https://claroperupoc.vtexassets.com/arquivos/ids/1993107/image-890ff18e2d684a1384497f2ff778e52a.jpg?v=638551206229430000" },
  
  { nombre: "Multilapicero infantil de unicornio", precio: 4.50, imagen: "https://www.tiendafacil.com.ar/tienda/uploads/400x400/1585943755_5ff6eae9.jpg" },
  
  { nombre: "Lapicero azul cubigo de GeometriDash", precio: 1.20, imagen: "https://sumerlabs.com/default/image-tool-lambda?new-width=700&new-height=700&new-quality=80&url-image=https%3A%2F%2Fsumerlabs.com%2Fprod%2Fcatalogue%2F6e475ff748f084b6b4f01aaa737f3b752f0ff363%2Fa6ad562b-6304-476a-9eea-98f84d99f3fd.jpg" },
  
  { nombre: "Plumones metalicos para niño 6 unidades", precio: 6.99, imagen: "https://resources.claroshop.com/medios-plazavip/mkt/617b4cb4044c2_hee3c56bc06dc4f36bf16e666b275b3d6njpg.jpg?scale=700&qlty=80" },
  
  { nombre: "x12 individuales de Navidad mas x6 portavasos ", precio: 6.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/560614116_122141059010906866_408887068008927448_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oS7MJeJ2AHwQ7kNvwF8FiM8&_nc_oc=AdmYrKZd2XY4KsphuGFuCdJ766AsdetLs0uT0L6QnGcdwNEyQdRo2LBJrFU90dZh8We_4Vtc7WR5yKGoHC1RhOQH&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=vw2GkF0UfztcCQqTyxo9ug&oh=00_AfdcKIgU_BjFRQKmJPgV4Mj4gutxcVDZvNJgBKK3N_xK8Q&oe=68F3A1C2" },
  
  { nombre: "Pack de 50 unidades de paños para cocina ", precio: 14.99, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_928935-MPE83209110294_042025-F.webp" },
  
  { nombre: "Alicate de 8 pulgadas", precio: 6.99, imagen: "https://alitechworld.pk/wp-content/uploads/2025/10/Premium-Pliers-Tool-%E2%80%93-Multi-Purpose-Heavy-Duty-Hand-Tool-for-Repair-Home-Use-3.webp" },
 
  { nombre: "Esferas navideñas con lucesr", precio: 3.5, imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTA-a6i83CLgKS8eLBipFmmYxPildaa4xmmRRS-RXS-PmEd6QDd" },
  
  { nombre: "Adorno de ramo navideño Amarillo,Rojo y rosa", precio: 2, imagen: "https://img.ltwebstatic.com/images3_spmp/2024/09/04/4f/172541777877482743c794a50edf8a013f01980431_thumbnail_405x552.png" },
  
 { nombre: "Kit de Limpieza basico", precio: 3, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565127025_122095344579086889_4601160951134947107_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aCKBTbrzMv4Q7kNvwGrpAm2&_nc_oc=Adn8KVetqZ0adDXj19xza3qH68PnGSdHA1wc8KKfRBXT8DOHCT7GtfZKWw1G193e339gXfnhNVw50oPc0aXN9JnI&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=cIl42hQv0rrFEy70St-Slw&oh=00_Afd8zGF64Bv0Tnm3ErIhKc3QSakU5BoKoaVtlngVnq0GNg&oe=68FB093B" },
  
  { nombre: "Kit de herramientas", precio: 8, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565158575_122095353273086889_7707084532211670223_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MtcjRn1PgEwQ7kNvwHo_qjH&_nc_oc=AdmdetdlrjaNWq9W7t_ipGxiu-EyL21Bs8yRIq3-YG__KSvWa5ftwJlZZbepYJ6QD8HcJ2Q3ZfE8fLdeo8HIoV_2&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=hAC0OLnEgmRa6J05xxTXHA&oh=00_Afc80u9dIFEfodx-Hig-f0NYVy5uQHeh_7vtRpZMxKjBew&oe=68FB151F" },
  
  { nombre: "Limpiador facial", precio: 14.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/566355203_122095357683086889_6056214647893709108_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uDBroU4fc9cQ7kNvwGOXPPS&_nc_oc=Adm76stjfLmvT-pQvRkh5lY3UzxPs_SlvGMJnDTKDrWbGmEotJyyUpqh93r77k5NSKOZjtNAZlG0ggu7IMH-_s6k&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=XaNnn5LNA1UxLw34Qz4Wtw&oh=00_AffTfIeRiRSRRDr5tUsNmRxUL--7gYEtamlAz_qfO2rE1Q&oe=68FB0AE9" },
  
  { nombre: "Secadora de uñas", precio: 8, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/568036789_122095359057086889_4362818429721586219_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DkzFFrMNLicQ7kNvwFvjD-F&_nc_oc=Adn_HnABfoP4BXlOV4C3lJg50hoUDKQsHOArauC7hkzIEQNB2ViXCUmEch576Ssf4iUXoQjRgDmeJTxWpzbtkQsn&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=V3-Z_oOAz2d309Xeqt2C6Q&oh=00_AffrXZnhWZGEEbV-qG3m4UwZ_TMd5ATKdNeoFXRUGi8DPg&oe=68FB1947" },
  
  { nombre: "Cuchillo profecional", precio: 14.99, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565885011_122095359903086889_5089207125492690016_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=akqEk7DA8BoQ7kNvwEp28fo&_nc_oc=AdlFYEjo7GHBrB9WfLVbgwefIOv1g0pfAqdIEu35cgEwAE71QavN95fGp_yNmkvUBVCyUWU23f1q8R6VtanlEgrB&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=cHxjq_Bm0sg-TE1guAdNXA&oh=00_AfcYOs8rlFNgNThBlmjC_PPcB_dLgiubbKQGAjHZVMyVTg&oe=68FB19DC" },
  
  { nombre: "Atomizadores 3x1", precio: 6, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXDPdM1IVFLuwk1zNK8c6B3DOu5eNQddSbLjMCrW6wJMrPj6W" },
  
  { nombre: "1 toalla y 2 esponjas para platos", precio: 4, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/566230819_122095364097086889_8748839920477829901_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mnD8klM3qGAQ7kNvwGOELSj&_nc_oc=Admyq1W-wxKAjk9OlVkCXigqAwNRSnxg0HTFhfEdR9o8l_4zE3A889BksXV4bQYCbh7WZGwiL9J8tpfjF-GtgWy5&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=j_9zm8FjpqjXGd0SJDqw9A&oh=00_AffDLDBeUFa5hLsdDP9Gbz14Q9eAmtSQ29LLn1WORbK55g&oe=68FB0B83" },
  
  { nombre: "Antifacez ", precio: 5, imagen: "https://scontent.flim10-1.fna.fbcdn.net/v/t39.30808-6/565703563_122095369353086889_2890314843170020853_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kk1cnXABIbwQ7kNvwFsmBPX&_nc_oc=Adlp5GOVKLjYetAumyRkoEWbVIW39c1gJFUTxe2OcIy2X4XgPeD9vwWGsXuqk9UJWdaWFlggSvdtFgkRPSW_fEZF&_nc_zt=23&_nc_ht=scontent.flim10-1.fna&_nc_gid=_8B5mXELC0NE8dZbzDHxtA&oh=00_AfeidjB9spp542Bn3bIhD2J3XVGZA8zVGsx7fTtOGX34iw&oe=68FB3624" },
  
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
