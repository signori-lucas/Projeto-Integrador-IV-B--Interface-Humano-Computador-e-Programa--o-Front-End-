// ===== Utilitários =====
const MS_POR_DIA = 24 * 60 * 60 * 1000;

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-").map(Number);
  return new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric"
  });
}

function iniciais(nome) {
  return nome.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}

// ===== Navegação entre páginas =====
const menu = document.getElementById("menu-principal");
const botaoMenu = document.querySelector(".menu-toggle");

function mostrarPagina(nome) {
  document.querySelectorAll(".pagina").forEach(p => {
    p.classList.toggle("pagina--ativa", p.id === `pagina-${nome}`);
  });
  document.querySelectorAll(".menu__link").forEach(link => {
    link.classList.toggle("menu__link--ativo", link.dataset.pagina === nome);
  });
  menu.classList.remove("menu--aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-pagina]").forEach(link => {
  link.addEventListener("click", () => mostrarPagina(link.dataset.pagina));
});

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("menu--aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
});

// ===== Notícias =====
function criarCardNoticia(noticia) {
  const card = document.createElement("article");
  card.className = "noticia"
    + (noticia.destaque ? " noticia--destaque" : "")
    + (noticia.imagem ? " noticia--com-imagem" : "");
  card.tabIndex = 0;
  const imagem = noticia.imagem
    ? `<img class="noticia__imagem" src="${noticia.imagem}" alt="${noticia.imagemAlt || ""}" loading="lazy">`
    : "";
  card.innerHTML = `
    ${imagem}
    <div class="noticia__corpo">
      <span class="tag">${noticia.categoria}</span>
      <h3 class="noticia__titulo">${noticia.titulo}</h3>
      <p class="noticia__resumo">${noticia.resumo}</p>
      <p class="noticia__meta">${noticia.autor} &middot; ${formatarData(noticia.data)}</p>
    </div>
  `;
  card.addEventListener("click", () => abrirNoticia(noticia));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter") abrirNoticia(noticia);
  });
  return card;
}

function renderizarNoticias(container, lista) {
  container.innerHTML = "";
  lista.forEach(n => container.appendChild(criarCardNoticia(n)));
}

const noticiasOrdenadas = [...noticias].sort((a, b) => b.data.localeCompare(a.data));

// Feed da página inicial: 4 mais recentes
renderizarNoticias(document.getElementById("feed-inicio"), noticiasOrdenadas.slice(0, 4));

// Página de notícias com filtro por categoria
const feedNoticias = document.getElementById("feed-noticias");
const filtros = document.getElementById("filtros");
const categorias = ["Todas", ...new Set(noticias.map(n => n.categoria))];

categorias.forEach((cat, i) => {
  const botao = document.createElement("button");
  botao.className = "filtro" + (i === 0 ? " filtro--ativo" : "");
  botao.textContent = cat;
  botao.addEventListener("click", () => {
    filtros.querySelectorAll(".filtro").forEach(b => b.classList.remove("filtro--ativo"));
    botao.classList.add("filtro--ativo");
    const lista = cat === "Todas" ? noticiasOrdenadas : noticiasOrdenadas.filter(n => n.categoria === cat);
    renderizarNoticias(feedNoticias, lista);
  });
  filtros.appendChild(botao);
});

renderizarNoticias(feedNoticias, noticiasOrdenadas);

// ===== Modal =====
const modal = document.getElementById("modal");

function abrirNoticia(noticia) {
  const modalImagem = document.getElementById("modal-imagem");
  modalImagem.hidden = !noticia.imagem;
  modalImagem.src = noticia.imagem || "";
  modalImagem.alt = noticia.imagemAlt || "";
  document.getElementById("modal-categoria").textContent = noticia.categoria;
  document.getElementById("modal-titulo").textContent = noticia.titulo;
  document.getElementById("modal-meta").textContent = `${noticia.autor} · ${formatarData(noticia.data)}`;
  document.getElementById("modal-texto").textContent = noticia.texto;
  modal.hidden = false;
  modal.querySelector(".modal__fechar").focus();
}

function fecharModal() {
  modal.hidden = true;
}

modal.querySelectorAll("[data-fechar]").forEach(el => el.addEventListener("click", fecharModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) fecharModal();
});

// ===== Login (simulado, sem autenticação) =====
const CHAVE_USUARIO = "conecta-usuario";
const botaoEntrar = document.getElementById("botao-entrar");
const areaUsuario = document.getElementById("usuario");
const usuarioBotao = document.getElementById("usuario-botao");
const usuarioMenu = document.getElementById("usuario-menu");
const modalLogin = document.getElementById("modal-login");
const formLogin = document.getElementById("form-login");
const tituloBoasVindas = document.getElementById("titulo-boas-vindas");

function lerUsuario() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_USUARIO));
  } catch {
    return null;
  }
}

function atualizarAreaUsuario() {
  const usuario = lerUsuario();
  botaoEntrar.hidden = Boolean(usuario);
  areaUsuario.hidden = !usuario;
  fecharMenuUsuario();

  if (usuario) {
    document.getElementById("usuario-avatar").textContent = iniciais(usuario.nome);
    document.getElementById("usuario-nome").textContent = usuario.nome.split(" ")[0];
    document.getElementById("usuario-email").textContent = usuario.email;
    tituloBoasVindas.textContent = `Olá, ${usuario.nome.split(" ")[0]}!`;
  } else {
    tituloBoasVindas.textContent = "Olá!";
  }
}

function abrirLogin() {
  formLogin.reset();
  modalLogin.hidden = false;
  document.getElementById("login-nome").focus();
}

function fecharLogin() {
  modalLogin.hidden = true;
}

function fecharMenuUsuario() {
  usuarioMenu.hidden = true;
  usuarioBotao.setAttribute("aria-expanded", "false");
}

botaoEntrar.addEventListener("click", abrirLogin);
modalLogin.querySelectorAll("[data-fechar]").forEach(el => el.addEventListener("click", fecharLogin));

formLogin.addEventListener("submit", e => {
  e.preventDefault();
  const usuario = {
    nome: document.getElementById("login-nome").value.trim(),
    email: document.getElementById("login-email").value.trim()
  };
  try {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
  } catch {}
  fecharLogin();
  atualizarAreaUsuario();
});

usuarioBotao.addEventListener("click", e => {
  e.stopPropagation();
  const aberto = usuarioMenu.hidden;
  usuarioMenu.hidden = !aberto;
  usuarioBotao.setAttribute("aria-expanded", String(aberto));
});

document.addEventListener("click", e => {
  if (!areaUsuario.contains(e.target)) fecharMenuUsuario();
});

document.getElementById("botao-sair").addEventListener("click", () => {
  try {
    localStorage.removeItem(CHAVE_USUARIO);
  } catch {}
  atualizarAreaUsuario();
});

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!modalLogin.hidden) fecharLogin();
  fecharMenuUsuario();
});

atualizarAreaUsuario();

// ===== Aniversariantes =====
function diasAteAniversario(pessoa, hoje) {
  let proximo = new Date(hoje.getFullYear(), pessoa.mes - 1, pessoa.dia);
  if (proximo < hoje) proximo = new Date(hoje.getFullYear() + 1, pessoa.mes - 1, pessoa.dia);
  return Math.round((proximo - hoje) / MS_POR_DIA);
}

function renderizarAniversariantes() {
  const agora = new Date();
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  const lista = document.getElementById("lista-aniversariantes");

  aniversariantes
    .map(p => ({ ...p, dias: diasAteAniversario(p, hoje) }))
    .sort((a, b) => a.dias - b.dias)
    .slice(0, 6)
    .forEach(p => {
      const dataTexto = `${String(p.dia).padStart(2, "0")}/${String(p.mes).padStart(2, "0")}`;
      let quando;
      if (p.dias === 0) quando = "Hoje! 🎉";
      else if (p.dias === 1) quando = "Amanhã";
      else quando = `em ${p.dias} dias`;

      const item = document.createElement("li");
      item.className = "aniversariante" + (p.dias === 0 ? " aniversariante--hoje" : "");
      item.innerHTML = `
        <span class="avatar">${iniciais(p.nome)}</span>
        <div class="aniversariante__info">
          <strong>${p.nome}</strong>
          <span>${p.setor}</span>
        </div>
        <div class="aniversariante__data">
          <strong>${dataTexto}</strong>
          <span>${quando}</span>
        </div>
      `;
      lista.appendChild(item);
    });
}

renderizarAniversariantes();

// ===== Data no painel de boas-vindas =====
const dataHoje = new Date().toLocaleDateString("pt-BR", {
  weekday: "long", day: "numeric", month: "long"
});
document.getElementById("data-hoje").textContent = dataHoje.charAt(0).toUpperCase() + dataHoje.slice(1);

// Abre direto em "Notícias" se a URL tiver #noticias
if (location.hash === "#noticias") mostrarPagina("noticias");
