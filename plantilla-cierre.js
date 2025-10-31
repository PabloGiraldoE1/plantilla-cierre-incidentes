// Opciones para el autocompletado del agrupador
// Listado agrupado de agrupadores para mostrar
const agrupadoresPorCategoria = {
  "ALERTAMIENTO": [
    "Reportes Dynatrace Cotizador",
    "Reportes Dynatrace AUS",
    "Reportes Dynatrace AVA"
  ],
  "SIMONNET": [
    "Aplicativo no carga / Lentitud / Intermitencia",
    "Capacitacion Aplicativo",
    "Solicitud no registra datos",
    "Sin Permisos",
    "Recuperar datos laborales",
    "Estados Inconsistentes",
    "No permite ver/adjuntar Requisitos/Complementos",
    "Información/Campos Faltantes",
    "No habilita botones"
  ],
  "HOME COTIZADOR / MIS NEGOCIOS": [
    "Aplicativo no carga / Lentitud / Intermitencia",
    "Capacitacion Aplicativo",
    "No carga opciones del Menu",
    "Información Asesor/Oficina no carga",
    "Riesgos Consultables",
    "Información Cliente Errada",
    "No cargan cotizaciones",
    "Acciones bloqueadas"
  ],
  "COTIZADORES": [
    "Aplicativo no carga / Lentitud / Intermitencia",
    "Capacitacion Aplicativo",
    "Informacion clientes (No carga / No arrastra / Errada)",
    "No permite cotizar",
    "No habilita campos / botones",
    "No genera PDF de cotizacion",
    "No se recupera información de la poliza",
    "Conversión no realizada",
    "Cotizacion estancada en flujo Aceptada",
    "No se envia solicitud electronica",
    "Cobertura no aplicadas correctamente",
    "Error en calculos de prima de cotización",
    "Intermitencia en Servicios del Cotizador",
    "Registro de asegurados/beneficiarios no procesado",
    "Faltan campos en la cotizacion",
    "Error en encuesta de asegurabilidad ",
    "Validacion de Sarlaft",
    "Error en modificación de póliza",
    "Procesos y tareas DMS"
  ],
  "AUS": [
    "Aplicativo no carga / Lentitud / Intermitencia",
    "Capacitacion Aplicativo",
    "Falla en visualización de radicados",
    "Error interno en servicios críticos ",
    "Restricción funcional por tipo de póliza",
    "Error general de aplicación",
    "Duplicidad en radicados",
    "Interfaz sin respuesta",
    "Falla en autenticación o acceso",
    "Botones inactivos en flujo de solicitud",
    "Falla en opciones de estado ",
    "Restricción de acceso por permisos ",
    "Flujo detenido en proceso de solicitud",
    "Falla en integración con P8",
    "Póliza no localizada en sistema ",
    "Validación de estado de póliza ",
    "Falla en generación de certificados",
    "Falla en carga de estado de póliza",
    "Falla en categorización de póliza"
  ],
  "AVA": [
    "Restricción en visualización de póliza",
    "Falla en exportación o descarga de archivos",
    "Falla en carga o impresión de documentos",
    "Falla en ingreso a aplicativo",
    "Datos de asesor no disponibles",
    "Consulta sin resultados o sin datos",
    "Bloqueo en descarga desde archivo digital",
    "Póliza no visible en estado vigente",
    "Error inesperado en aplicación",
    "Gestión de acceso compartido",
    "Falla en procesamiento de colas (RabbitMQ)",
    "Alertamiento técnico en monitoreo",
    "Gestión de traslado entre asesores",
    "Error en datos del asegurado",
    "Falla en generación de certificados"
  ],
  "PORCHAT": [
    "Retraso en visualización de documentos",
    "Falla en visualización de vínculos",
    "Interfaz sin respuesta",
    "Falla en entrega de documentos por producto",
    "Falla en generación de certificados",
    "Gestión de actualización de datos personales",
    "Desempeño lento en módulo Porchat",
    "Gestión de datos de asesor",
    "Falla en generación de documentos",
    "Falla en descarga o envío de documentos",
    "Bloqueo en módulo Porchat",
    "Restricción de acceso por permisos",
    "Error técnico en módulo Porchat"
  ],
  "INGRESO DIGITAL": [
    "Flujo detenido en proceso de solicitud",
    "Gestión de rechazo de lote",
    "Bloqueo en carga de asegurabilidad",
    "Falla en integración con servicio de firma",
    "Lote pendiente por expedir"
  ]
};

// Función para mostrar agrupadores agrupados
function mostrarAgrupadoresAgrupados() {
  let html = '<div id="agrupadores-listado" style="max-height:500px;overflow:auto;text-align:left;font-size:1rem">';
  for (const categoria in agrupadoresPorCategoria) {
    html += `<strong>${categoria}</strong><ul style='margin-bottom:12px;'>`;
    agrupadoresPorCategoria[categoria].forEach(item => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
  }
  html += '</div>';
  Swal.fire({
    title: 'Listado de Agrupadores',
    html,
    width: 600,
    confirmButtonText: 'Cerrar',
    scrollbarPadding: false,
    didOpen: () => {
      const listado = document.getElementById('agrupadores-listado');
      if (listado) {
        listado.addEventListener('copy', function(e) {
          e.preventDefault();
          mostrarToast('No está permitido copiar el contenido del listado de agrupadores.');
        });
      }
    }
  });
}

// Evento para el botón ver agrupadores
const btnVerAgrupadores = document.getElementById("ver_agrupadores");
btnVerAgrupadores?.addEventListener("click", mostrarAgrupadoresAgrupados);
// Bloquear copiar en el botón de buscar agrupadores
btnVerAgrupadores?.addEventListener("copy", function(e) {
  e.preventDefault();
  mostrarToast("No está permitido copiar el contenido de este botón.");
});
const opcionesAgrupador = [
  "Reportes Dynatrace Cotizador",
  "Reportes Dynatrace AUS",
  "Reportes Dynatrace AVA",
  "Aplicativo no carga / Lentitud / Intermitencia",
  "Capacitacion Aplicativo",
  "Solicitud no registra datos",
  "Sin Permisos",
  "Recuperar datos laborales",
  "Estados Inconsistentes",
  "No permite ver/adjuntar Requisitos/Complementos",
  "Información/Campos Faltantes",
  "No habilita botones",
  "No carga opciones del Menu",
  "Información Asesor/Oficina no carga",
  "Riesgos Consultables",
  "Información Cliente Errada",
  "No cargan cotizaciones",
  "Acciones bloqueadas",
  "Informacion clientes (No carga / No arrastra / Errada)",
  "No permite cotizar",
  "No habilita campos / botones",
  "No genera PDF de cotizacion",
  "No se recupera información de la poliza",
  "Conversión no realizada",
  "Cotizacion estancada en flujo Aceptada",
  "No se envia solicitud electronica",
  "Cobertura no aplicadas correctamente",
  "Error en calculos de prima de cotización",
  "Intermitencia en Servicios del Cotizador",
  "Registro de asegurados/beneficiarios no procesado",
  "Faltan campos en la cotizacion",
  "Error en encuesta de asegurabilidad ",
  "Validacion de Sarlaft",
  "Error en modificación de póliza",
  "Procesos y tareas DMS",
  "Falla en visualización de radicados",
  "Error interno en servicios críticos",
  "Restricción funcional por tipo de póliza",
  "Error general de aplicación",
  "Duplicidad en radicados",
  "Interfaz sin respuesta",
  "Falla en autenticación o acceso",
  "Botones inactivos en flujo de solicitud",
  "Falla en opciones de estado",
  "Restricción de acceso por permisos",
  "Flujo detenido en proceso de solicitud",
  "Falla en integración con P8",
  "Póliza no localizada en sistema",
  "Validación de estado de póliza",
  "Falla en generación de certificados",
  "Falla en carga de estado de póliza",
  "Falla en categorización de póliza",
  "Restricción en visualización de póliza",
  "Falla en exportación o descarga de archivos",
  "Falla en carga o impresión de documentos",
  "Falla en ingreso a aplicativo",
  "Datos de asesor no disponibles",
  "Consulta sin resultados o sin datos",
  "Bloqueo en descarga desde archivo digital",
  "Póliza no visible en estado vigente",
  "Error inesperado en aplicación",
  "Gestión de acceso compartido",
  "Falla en procesamiento de colas (RabbitMQ)",
  "Gestión de traslado entre asesores",
  "Error en datos del asegurado",
  "Falla en generación de certificados",
  "Retraso en visualización de documentos",
  "Falla en visualización de vínculos",
  "Interfaz sin respuesta",
  "Falla en entrega de documentos por producto",
  "Falla en generación de certificados",
  "Gestión de actualización de datos personales",
  "Desempeño lento en módulo Porchat",
  "Gestión de datos de asesor",
  "Falla en generación de documentos",
  "Falla en descarga o envío de documentos",
  "Bloqueo en módulo Porchat",
  "Restricción de acceso por permisos",
  "Error técnico en módulo Porchat",
  "Flujo detenido en proceso de solicitud",
  "Gestión de rechazo de lote",
  "Bloqueo en carga de asegurabilidad",
  "Falla en integración con servicio de firma",
  "Lote pendiente por expedir"
];

// Autocompletado para agrupador_error
const inputAgrupador = document.getElementById("agrupador_error");
const listaSugerencias = document.getElementById("autocomplete");
// Bloquear copiar en el campo Agrupador del Error
inputAgrupador.addEventListener("copy", function (e) {
  e.preventDefault();
  mostrarToast("No está permitido copiar el contenido de Agrupador del Error.");
});

inputAgrupador.addEventListener("input", function () {
  const valor = this.value.toLowerCase();
  listaSugerencias.innerHTML = "";
  if (!valor) return;
  const filtradas = opcionesAgrupador.filter(op => op.toLowerCase().includes(valor));
  filtradas.forEach(opcion => {
    const item = document.createElement("div");
    item.classList.add("autocomplete-item");
    item.textContent = opcion;
    item.addEventListener("click", function () {
      inputAgrupador.value = opcion;
      listaSugerencias.innerHTML = "";
      actualizarExternalTicket();
    });
    listaSugerencias.appendChild(item);
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".campo")) {
    listaSugerencias.innerHTML = "";
  }
});

// Función auxiliar para obtener valor de un campo
function getValue(id) {
  return document.getElementById(id)?.value?.trim() || "";
}

// Función auxiliar para establecer valor de un campo
function setValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

// Validación de campos obligatorios
function validarCampos(campos) {
  for (const campo of campos) {
    const valor = getValue(campo.id);
    const elemento = document.getElementById(campo.id);
    if (campo.id === "agrupador_error" && !opcionesAgrupador.includes(valor)) {
      Swal.fire({
        icon: 'warning',
        title: 'Valor inválido',
        text: 'Por favor selecciona una opción válida del campo "Agrupador del Error".',
        confirmButtonText: 'Entendido'
      }).then(() => {
        setValue(campo.id, "");
        elemento.focus();
      });
      return false;
    }
    if (!valor) {
      mostrarToast(`Falta el campo "${campo.label}".`);
      elemento.focus();
      return false;
    }
  }
  return true;
}

// Genera el texto de solución usando template literals
function generarTexto() {
  const campos = [
    { id: "agrupador_error", label: "Agrupador del Error" },
    { id: "proceso_error", label: "Proceso del Error" },
    { id: "estado_raizal", label: "Estado Raizal" },
    { id: "responsable_solucion", label: "Responsable Solución" },
    { id: "descripcion_solucion", label: "Descripción de Solución" },
    { id: "causa_raiz", label: "Causa Raíz" },
    { id: "diagnostico", label: "Diagnóstico" },
    { id: "accion_ejecutada", label: "Acción Ejecutada" }
  ];
  if (!validarCampos(campos)) return;
  const mensajeFinal = "Ha sido un gusto ayudarte. En breve recibirás un correo con la resolución del incidente y una breve encuesta de satisfacción. Solo tomará 3 minutos y tus comentarios nos ayudan a mejorar. ¡Gracias por tu confianza!";
  const descripcion = getValue("descripcion_solucion");
  let texto = '';
  texto += `* Agrupador del Error: ${getValue("agrupador_error")}\n`;
  texto += `* Causa del Error: ${getValue("causa_error")}\n`;
  texto += `* Proceso del Error: ${getValue("proceso_error")}\n`;
  texto += `* HU Raizal / Mejora: ${getValue("hu_raizal")}\n`;
  texto += `* Estado Raizal: ${getValue("estado_raizal")}\n`;
  texto += `* Responsable Solución: ${getValue("responsable_solucion")}\n`;
  texto += `* Diagnóstico: ${getValue("diagnostico")}\n`;
  texto += `* Acción Ejecutada: ${getValue("accion_ejecutada")}\n`;
  texto += `* Descripción de Solución: ${descripcion}`;
  if (descripcion) texto += `\n`;
  texto += mensajeFinal + '\n';
  texto += `* Confirmar operatividad del usuario Afectado: ${getValue("confirmacion_usuario")}\n`;
  texto += `* ID Formulario de Solicitud de Credenciales: ${getValue("formulario_credenciales")}\n`;
  texto += `* OC Acceso a PAM - (PAM): ${getValue("oc_pam")}\n`;
  texto += `* Causa Raíz (Identificada/Sin Identificar): ${getValue("causa_raiz")}\n`;
  document.getElementById("resultado").textContent = texto;
}

// Actualización automática del campo "External Ticket"
function actualizarExternalTicket() {
  const aplicativo = getValue("aplicativo_afectado");
  const proceso = getValue("proceso_aplicativo");
  const agrupador = getValue("agrupador_error");
  // Solo usar agrupador si es válido
  const agrupadorValido = opcionesAgrupador.includes(agrupador) ? agrupador : "";
  // Solo mostrar si los tres campos están diligenciados y el agrupador es válido
  if (aplicativo && proceso && agrupadorValido) {
    const externo = `${aplicativo}.${proceso} ${agrupadorValido}`.trim();
    document.getElementById("external_ticket").value = externo;
  } else {
    document.getElementById("external_ticket").value = "";
  }
}

// Copiar texto generado al portapapeles
function copiarAlPortapapeles() {
  const texto = document.getElementById("resultado").textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado al portapapeles 📋");
  }).catch(err => {
    alert("Error al copiar: " + err);
  });
}

// Copiar ticket externo al portapapeles
function copiarTicket() {
  const texto = document.getElementById("external_ticket").value;
  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast("External Ticket copiado 📋");
  }).catch(err => {
    alert("Error al copiar ticket: " + err);
  });
}

// Actualización automática del campo "External Ticket"
document.getElementById("aplicativo_afectado")?.addEventListener("change", actualizarExternalTicket);
document.getElementById("proceso_aplicativo")?.addEventListener("change", actualizarExternalTicket);
document.getElementById("agrupador_error")?.addEventListener("input", actualizarExternalTicket);

// Toast para mensajes cortos
function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");
  toast.textContent = mensaje;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3500);
}

// Limpiar todos los campos del formulario
function limpiarCampos() {
  const campos = document.querySelectorAll("#formulario input, #formulario select, #formulario textarea");
  campos.forEach(campo => {
    if (campo.type === "select-one") {
      campo.selectedIndex = 0;
    } else {
      campo.value = "";
    }
  });
  document.getElementById("resultado").textContent = "";
  document.getElementById("external_ticket").value = "";
}

// Validación prohibida para HU Raizal
document.getElementById("hu_raizal")?.addEventListener("input", function () {
  const valor = this.value.trim().toLowerCase();
  const prohibidos = ["n/a", "na", "no aplica"];
  if (prohibidos.includes(valor)) {
    Swal.fire({
      icon: 'warning',
      title: 'Valor inválido',
      text: 'No se permite ingresar "N/A", "NA" o "No aplica" en el campo HU Raizal / Mejora.',
      confirmButtonText: 'Entendido'
    }).then(() => {
      this.value = "";
      this.focus();
    });
  }
});


