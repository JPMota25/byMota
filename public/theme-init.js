// Aplica o tema salvo antes do React montar (evita flash). Arquivo externo para respeitar a CSP (sem inline script).
;(function () {
  try {
    var mode = localStorage.getItem('mui-mode')
    var scheme =
      mode === 'light' || mode === 'dark'
        ? mode
        : mode === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
    var root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(scheme)
  } catch (e) {
    /* storage bloqueado: mantém dark */
  }
})()
